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
  Icon
} from "antd";
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
    currentEnquiry: {},
    initLoading: true,
    loading: false,
    enquiries: [],
    list: [],
    count: 0,
    junk: ""
  };
  componentWillMount() {
    this.setState({
      profile: this.props.profile
    });
  }
  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        enquiries: res,
        list: res,
        count: this.state.count + 2
      });
    });
    this.props.router.query.enquiry
      ? axios
          .get(
            "/api/enquiries/currentEnquiry/" + this.props.router.query.enquiry
          )
          .then(enquiry =>
            this.setState({ currentEnquiry: enquiry.data, drawerVisible: true })
          )
      : null;
    var aScript = document.createElement("script");
    aScript.type = "text/javascript";
    aScript.src = "https://checkout.razorpay.com/v1/checkout.js";

    document.head.appendChild(aScript);
  }

  getData = callback => {
    axios
      .get(`/api/enquiries/allEnquiries/2/${this.state.count}`)
      .then(res => callback(res.data));
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      count: this.state.count + 2
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
    const { currentEnquiry } = this.state;

    typeof currentEnquiry.budgetRange !== "undefined"
      ? null
      : (currentEnquiry.budgetRange = { from: 0, to: 0 });
    typeof currentEnquiry.user !== "undefined"
      ? null
      : (currentEnquiry.user = { name: "", email: "", mobile: "" });

    return (
      <React.Fragment>
        <div style={{ background: "#ECECEC", padding: "30px" }}>
          <h1 style={{ textAlign: "center" }}>All Enquiries</h1>
          <List
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={enquiries}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 3,
              xxl: 3
            }}
            style={{ padding: "10px" }}
            renderItem={enquiry => (
              <List.Item onClick={() => this.openEnquiryDrawer(enquiry._id)}>
                <Skeleton avatar title={false} loading={enquiry.loading} active>
                  <Link href={"/dashboard?enquiry=" + enquiry._id}>
                    <a>
                      <Card
                        hoverable
                        title={enquiry.category}
                        bordered={false}
                        style={{
                          height: "180px",
                          background: enquiry.isVerified ? null : null
                        }}
                      >
                        For <b>{enquiry.serviceFor}</b> <br />
                        on{" "}
                        <b>
                          {moment(enquiry.eventDate).format("DD MMM, YYYY")}
                        </b>
                        <br />
                        Bought by: <b>
                          {enquiry.interestedPartners.length}/5
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

          <Modal
            title={currentEnquiry.category}
            onCancel={this.onClose}
            visible={this.state.drawerVisible}
            style={{ textAlign: "center" }}
            footer={[]}
          >
            <Row type="flex" align="middle">
              <Col
                style={{ textAlign: "left" }}
                md={{ span: 9, offset: 3 }}
                sm={{ span: 22, offset: 2 }}
              >
                <b>Customer Name: </b>
                {currentEnquiry.user.name}
                <br />
                <b>Event: </b>
                {currentEnquiry.serviceFor}
                <br />
                <b>Event Date: </b>{" "}
                {moment(currentEnquiry.eventDate).format("DD MMM, YYYY")}
                <br />
                <b>No. of Guests: </b>
                {currentEnquiry.noOfGuests}
                <br />
                <b>Services Required: </b>
                {currentEnquiry.servicesRequired}
                <br />
                <b>Location: </b>
                {currentEnquiry.locality} in {currentEnquiry.city}
                <br />
                <b>Budget: </b>{" "}
                {currentEnquiry.budgetRange.to !== 0
                  ? "Rs." +
                    currentEnquiry.budgetRange.from
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                    " - Rs." +
                    currentEnquiry.budgetRange.to
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  : "Above Rs." +
                    currentEnquiry.budgetRange.from
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <br />
                <b>Other Info: </b>
                {currentEnquiry.otherInfo}
                <br />
                <b>CelebratON Comments: </b>
                {currentEnquiry.celebratonComments}
              </Col>
              <Col
                style={{ textAlign: "center" }}
                md={{ span: 12 }}
                sm={{ span: 24 }}
                xs={{ span: 24 }}
              >
                {typeof currentEnquiry.interestedPartners != "undefined" &&
                currentEnquiry.interestedPartners.includes(
                  this.state.profile._id
                ) ? (
                  <React.Fragment>
                    <h2>
                      <u>Customer Contact</u>
                    </h2>
                    <b>Name: </b>
                    {currentEnquiry.user.name}
                    <br />
                    <b>Mobile: </b>
                    {currentEnquiry.user.mobile}
                    <br />
                    <b>Email: </b>
                    {currentEnquiry.user.email}
                    <br />
                    <br />
                    <a href={`tel:+91${currentEnquiry.user.mobile}`}>
                      <Button
                        type="primary"
                        icon="mobile"
                        size="large"
                        style={{
                          background: "green",
                          borderColor: "green"
                        }}
                      >
                        Call
                      </Button>
                    </a>
                    {"  "}
                    <a href={`mailto:${currentEnquiry.user.email}`}>
                      <Button
                        type="primary"
                        size="default"
                        icon="mail"
                        size="large"
                        style={{ background: "orange", borderColor: "orange" }}
                      >
                        Mail
                      </Button>
                    </a>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <h2>
                      <u>Pricing Info</u>
                    </h2>
                    <b>Lead Price: </b>
                    Rs.{currentEnquiry.leadAmount}
                    <br />
                    <b>Wallet Balance: </b>
                    Rs.{this.state.profile.Wallet}
                    <br />
                    <b>Promotional Credit: </b>
                    Rs.{this.state.profile.promoCredit}
                    <br />
                    <br />
                    <Button
                      type="primary"
                      icon="caret-right"
                      size="large"
                      style={{ background: "green", borderColor: "green" }}
                      onClick={() => this.payForLead()}
                    >
                      Pay Rs.{currentEnquiry.leadAmount}
                    </Button>
                    <br />
                    <br />
                    <Button
                      type="danger"
                      size="default"
                      icon="heart"
                      size="large"
                      // style={{ background: "red", borderColor: "red" }}
                    >
                      Add to Wishlist
                    </Button>
                  </React.Fragment>
                )}
              </Col>
            </Row>
          </Modal>
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
