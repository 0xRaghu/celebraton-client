import React, { Component } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Card,
  Drawer,
  List,
  Avatar,
  Button,
  Skeleton,
  Modal,
  Table,
  Popover,
  Icon,
  Badge,
  Tag
} from "antd";
import Router from "next/router"
import moment from "moment";
import Link from "next/link";

import reqwest from "reqwest";
import { withRouter } from "next/router";
const { Meta } = Card;

class AllEnquiries extends Component {
  componentDidMount() {}
  state = {
    drawerVisible: false,
    currentId: "",
    currentEnquiry: { sampleImages: [], interestedPartners: [] },
    initLoading: true,
    loading: false,
    enquiries: [],
    list: [],
    count: 0,
    junk: "",
    profile: { enquiriesRead: [], wishList: [] }
  };
  componentWillMount() {
    
  }
  componentDidMount() {
    this.props.router.query.enquiry
      ? axios
          .get(
            "/api/enquiries/currentEnquiry/" + this.props.router.query.enquiry
          )
          .then(enquiry =>
            this.setState({ currentEnquiry: enquiry.data, drawerVisible: true })
          )
      : null;

    axios.get("/api/profiles/getProfile").then(profile => {
      this.setState({ profile: profile.data });
      this.getData(res => {
        this.setState({
          initLoading: false,
          enquiries: res,
          list: res,
          count: this.state.count + 20
        });
      });
    }).catch(err=>console.log(err))
    
    var aScript = document.createElement("script");
    aScript.type = "text/javascript";
    aScript.src = "https://checkout.razorpay.com/v1/checkout.js";

    document.head.appendChild(aScript);
  }

  getData = callback => {
    axios
      .post(`/api/enquiries/allEnquiries/20/${this.state.count}`, {
        profile: this.state.profile
      })
      .then(res => callback(res.data));
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      count: this.state.count + 20
    });
    this.getData(res => {
      const enquiries = this.state.enquiries.concat(res);
      this.setState(
        {
          enquiries,
          loading: false
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event("resize"));
        }
      );
    });
  };

  openEnquiryDrawer = id => {
    this.setState({ drawerVisible: true, currentId: id });
    axios
      .get("/api/enquiries/currentEnquiry/" + id)
      .then(enquiry => this.setState({ currentEnquiry: enquiry.data }));
    axios.post("/api/profiles/readEnquiry", { id: id }).then(profile => {
      this.setState({ profile: profile.data });
    });
  };
  wishListEnquiry = id => {
    this.setState({ drawerVisible: true, currentId: id });

    axios.post("/api/profiles/wishListEnquiry", { id: id }).then(profile => {
      this.setState({ profile: profile.data });
    });
  };
  onClose = () => {
    this.setState({
      drawerVisible: false
    });
    this.props.router.push("/dashboard");
  };
  payForLead = () => {
    const { currentEnquiry } = this.state;
    const { profile } = this.state;
    if (
      currentEnquiry.leadAmount - (profile.Wallet + profile.promoCredit) <=
      0
    ) {
      axios
        .post(
          "/api/enquiries/updatePayment/" +
            currentEnquiry._id +
            "/" +
            profile._id
        )
        .then(enquiry => {
          const index = this.state.enquiries.findIndex(
            x => x._id === this.state.currentEnquiry._id
          );

          (this.state.enquiries[index] = enquiry.data),
            this.setState({ currentEnquiry: enquiry.data });
        });
      axios
        .post(
          "/api/profiles/updatePayment/" +
            currentEnquiry._id +
            "/" +
            profile._id +
            "/" +
            currentEnquiry.leadAmount +
            "/walletOrPromo"
        )
        .then(profile => this.setState({ profile: profile.data }));
    } else {
      const options = {
        key: "rzp_test_lywdx0vKDyTxOh",
        amount:
          (currentEnquiry.leadAmount - (profile.Wallet + profile.promoCredit)) *
          100, // 2000 paise = INR 20
        name: "CelebratON.in",
        description:
          currentEnquiry.category + " enquiry by " + currentEnquiry.user.name,
        image: "",
        handler: response => {
          axios
            .post(
              "/api/enquiries/updatePayment/" +
                currentEnquiry._id +
                "/" +
                profile._id
            )
            .then(enquiry => {
              const index = this.state.enquiries.findIndex(
                x => x._id === this.state.currentEnquiry._id
              );

              (this.state.enquiries[index] = enquiry.data),
                this.setState({ currentEnquiry: enquiry.data });
            });
          axios
            .post(
              "/api/profiles/updatePayment/" +
                currentEnquiry._id +
                "/" +
                profile._id +
                "/" +
                currentEnquiry.leadAmount +
                "/" +
                response.razorpay_payment_id
            )
            .then(profile => this.setState({ profile: profile.data }));
        },
        prefill: {
          name: profile.name,
          email: profile.email
        },
        notes: {
          address: "Paying for a lead"
        },
        theme: {
          color: "#ba0f58"
        }
      };

      new Razorpay(options).open();
    }
  };
  render() {
    const { initLoading, loading, list, enquiries } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: "center",
            marginTop: 12,
            height: 32,
            lineHeight: "32px"
          }}
        >
          <Button onClick={this.onLoadMore}>Load more</Button>
        </div>
      ) : null;

    const { router } = this.props;
    const { currentEnquiry,profile } = this.state;
    

    typeof currentEnquiry.budgetRange !== "undefined"
      ? null
      : (currentEnquiry.budgetRange = { from: 0, to: 0 });
    typeof currentEnquiry.user !== "undefined"
      ? null
      : (currentEnquiry.user = { name: "", email: "", mobile: "" });

    return (
      <React.Fragment>
        <div style={{ background: "#ECECEC", padding: "10px" }}>
          <h1 style={{ textAlign: "center" }}>All Enquiries</h1>
          <List
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={enquiries}
            grid={{
              gutter: 16,
              xs: 2,
              sm: 3,
              md: 4,
              lg: 4,
              xl: 4,
              xxl: 4
            }}
            style={{ padding: "10px" }}
            renderItem={enquiry => (
              <List.Item onClick={() => this.openEnquiryDrawer(enquiry._id)}>
                <Skeleton avatar title={false} loading={enquiry.loading} active>
                  <Link href={"/dashboard?enquiry=" + enquiry._id}>
                    <a>
                      {typeof this.state.profile !== "undefined" ? (
                        this.state.profile.wishList.includes(enquiry._id) ? (
                          <Tag color="#f50">WishList</Tag>
                        ) : this.state.profile.enquiriesRead.includes(
                            enquiry._id
                          ) ? (
                          <Tag color="grey">Read</Tag>
                        ) : (
                          <Tag color="#87d068">Unread</Tag>
                        )
                      ) : null}

                      <Card
                        hoverable
                        title={enquiry.category}
                        bordered={false}
                        style={{
                          background: enquiry.isVerified ? null : null
                        }}
                      >
                        For <b>{enquiry.serviceFor}</b> <br />
                        on{" "}
                        <b>
                          {moment(enquiry.eventDate).format("DD MMM, YYYY")}
                        </b>
                        <br />
                        Bought by:{" "}
                        <b>
                          {typeof enquiry.interestedPartners.length !==
                          "undefined"
                            ? enquiry.interestedPartners.length
                            : 0}
                          /5
                        </b>{" "}
                        vendors
                        <Meta
                          description={
                            "Posted: " +
                            moment(enquiry.createdAt).from(moment(Date.now()))
                          }
                          style={{
                            paddingTop: "10px",
                            textAlign: "right",
                            position: "relative"
                          }}
                        />
                      </Card>
                    </a>
                  </Link>
                </Skeleton>
              </List.Item>
            )}
          />

          
          <style jsx>{`
            a {
              text-decoration: none;
            }
          `}</style>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(AllEnquiries);
