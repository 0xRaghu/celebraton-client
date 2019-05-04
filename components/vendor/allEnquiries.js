import React, { Component } from "react";
import axios from "axios";
import ReactGA from "react-ga";
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
import Router from "next/router";
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
    currentEnquiry: {
      sampleImages: [],
      interestedPartners: [],
      user: { name: "", mobile: "", email: "" }
    },
    initLoading: true,
    loading: false,
    enquiries: [],
    list: [],
    count: 0,
    junk: "",
    profile: {
      _id: "",
      enquiriesRead: [],
      wishList: [],
      Wallet: "",
      promoCredit: ""
    }
  };
  componentWillMount() {}
  componentDidMount() {
    if (this.props.router.query.enquiry) {
      axios
        .get("/api/enquiries/currentEnquiry/" + this.props.router.query.enquiry)
        .then(enquiry =>
          this.setState({ currentEnquiry: enquiry.data, drawerVisible: true })
        );
      // ReactGA.event({
      //   category: "View Enquiry",
      //   action: this.props.router.query.source
      //     ? this.props.router.query.source
      //     : "default",
      //   label: this.props.router.query.enquiry
      // });
      ReactGA.ga(
        "send",
        "event",
        "View Enquiry",
        this.props.router.query.source
          ? this.props.router.query.source
          : "default",
        this.props.router.query.enquiry
      );
    }

    axios
      .get("/api/profiles/getProfile")
      .then(profile => {
        this.setState({ profile: profile.data });
        this.getData(res => {
          this.setState({
            initLoading: false,
            enquiries: res,
            list: res,
            count: this.state.count + 20
          });
        });
      })
      .catch(err => console.log(err));

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
        key: "rzp_live_g0RFgYo3CprLSc",
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
          let captureData = {
            amountToPay:
              (currentEnquiry.leadAmount -
                (profile.Wallet + profile.promoCredit)) *
              100,
            responseId: response.razorpay_payment_id
          };
          axios.post("/api/enquiries/capturePayment", captureData);
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
    const { currentEnquiry, profile } = this.state;

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
                        For{" "}
                        <b>
                          {enquiry.category != "Stall Fabricator"
                            ? enquiry.serviceFor
                            : "Exhibition"}
                        </b>{" "}
                        <br />
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
                {currentEnquiry.category != "Stall Fabricator"
                  ? currentEnquiry.serviceFor
                  : "Exhibition"}
                <br />
                <b>Event Date: </b>{" "}
                {moment(currentEnquiry.eventDate).format("DD MMM, YYYY")}
                <br />
                {currentEnquiry.category != "Stall Fabricator" ? (
                  <React.Fragment>
                    <b>No. of Guests: </b>
                    {currentEnquiry.noOfGuests}
                    <br />
                  </React.Fragment>
                ) : null}
                <b>Services Required: </b>
                {typeof currentEnquiry.servicesRequired != "undefined"
                  ? currentEnquiry.servicesRequired.join(",")
                  : null}
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
                {currentEnquiry.category == "Stall Fabricator" ? (
                  <React.Fragment>
                    <b>Name of Exhibition: </b>
                    {currentEnquiry.nameOfExhibition}
                    <br />
                    <b>Stall Size: </b>
                    {currentEnquiry.stallSize}
                    <br />
                    <b>Sides Open: </b>
                    {currentEnquiry.sidesOpen}
                    <br />
                    <b>Stall Location: </b>
                    {currentEnquiry.stallLocation}
                    <br />
                    <b>Stall Number: </b>
                    {currentEnquiry.stallNumber}
                    <br />
                  </React.Fragment>
                ) : null}
                <b>Other Info: </b>
                {currentEnquiry.otherInfo}
                <br />
                <b>CelebratON Comments: </b>
                {currentEnquiry.celebratonComment}
                {typeof currentEnquiry.sampleImages !== "undefined" &&
                currentEnquiry.sampleImages.length > 0 &&
                currentEnquiry.category != "Stall Fabricator" ? (
                  <React.Fragment>
                    <br />
                    <div style={{ textAlign: "center" }}>
                      <b>Sample Image: </b>
                      <br />
                      <img
                        src={currentEnquiry.sampleImages}
                        height="auto"
                        width="100%"
                      />
                    </div>
                  </React.Fragment>
                ) : null}
                {typeof currentEnquiry.sampleImages !== "undefined" &&
                currentEnquiry.sampleImages.length > 0 &&
                currentEnquiry.category == "Stall Fabricator" &&
                typeof currentEnquiry.interestedPartners != "undefined" &&
                this.context.currenProfile !== null &&
                currentEnquiry.interestedPartners.includes(profile._id) ? (
                  <React.Fragment>
                    <br />
                    <div style={{ textAlign: "center" }}>
                      <b>Stall Design: </b>
                      <br />
                      <img
                        src={currentEnquiry.sampleImages}
                        height="auto"
                        width="100%"
                      />
                    </div>
                  </React.Fragment>
                ) : null}
                {typeof currentEnquiry.floorPlan !== "undefined" &&
                currentEnquiry.floorPlan.length > 0 &&
                currentEnquiry.category == "Stall Fabricator" &&
                typeof currentEnquiry.interestedPartners != "undefined" &&
                this.context.currenProfile !== null &&
                currentEnquiry.interestedPartners.includes(profile._id) ? (
                  <React.Fragment>
                    <br />
                    <div style={{ textAlign: "center" }}>
                      <b>Floor Plan: </b>
                      <br />
                      <img
                        src={currentEnquiry.floorPlan}
                        height="auto"
                        width="100%"
                      />
                    </div>
                  </React.Fragment>
                ) : null}
              </Col>

              <Col
                style={{ textAlign: "center" }}
                md={{ span: 12 }}
                sm={{ span: 24 }}
                xs={{ span: 24 }}
              >
                {typeof currentEnquiry.interestedPartners != "undefined" &&
                this.context.currenProfile !== null &&
                currentEnquiry.interestedPartners.includes(profile._id) ? (
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
                    <b>Name of Exhibitor Company: </b>
                    {currentEnquiry.nameOfExhibitor}
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
                      disabled={
                        typeof this.state.profile !== "undefined" &&
                        currentEnquiry.interestedPartners.length < 5
                          ? !this.state.profile.isAuthorized
                          : true
                      }
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
                      onClick={() => this.wishListEnquiry(currentEnquiry._id)}
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
