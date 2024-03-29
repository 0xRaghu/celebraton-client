import React, { Component } from "react";
import { Layout, Menu, Icon, Modal, Row, Col, InputNumber, Button } from "antd";

import Head from "../components/home/head";
import "../styles.less";
import ManageProfile from "../components/vendor/createOrUpdateProfile";
import AllEnquiries from "../components/vendor/allEnquiries";
import Router from "next/router";
import Link from "next/link";
import { LoginContext } from "../components/provider/loginProvider";
import setAuthToken from "../components/setAuthToken";

import jwt_decode from "jwt-decode";
import axios from "axios";

const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends Component {
  state = {
    content: null,
    limit: 20,
    openWalletModal: false,
    rechargeAmount: 0
  };
  static contextType = LoginContext;

  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.jwtToken);
      if (decoded.role == "customer") {
        Router.push("/");
      }
    } else {
      Router.push("/vendor-login");
    }

    var aScript = document.createElement("script");
    aScript.type = "text/javascript";
    aScript.src = "https://checkout.razorpay.com/v1/checkout.js";

    document.head.appendChild(aScript);
    this.context.currentProfile !== null
      ? this.setState({
          content: <AllEnquiries profile={this.context.currentProfile} />
        })
      : this.setState({ content: <ManageProfile /> });
  }

  clickManageProfile = () => {
    this.setState({
      content: <ManageProfile />
    });
  };
  clickAllEnquiries = () => {
    this.setState({
      content: <AllEnquiries profile={this.context.currentProfile} />
    });
  };
  clickViewProfile = () => {
    Router.push("/profile/" + this.context.currentProfile.slug);
  };
  clickAddMoney = () => {
    this.setState({ openWalletModal: true });
  };
  onInputWalletMoney = value => {
    this.setState({ rechargeAmount: value });
  };
  addMoneyToWallet = () => {
    const profile = this.context.currentProfile;
    const options = {
      key: "rzp_live_g0RFgYo3CprLSc",
      amount: this.state.rechargeAmount * 100, // 2000 paise = INR 20
      name: "CelebratON.in",
      description: `Adding Money to ${profile.companyName}'s wallet`,
      image: "",
      handler: response => {
        axios
          .post(
            "/api/profiles/addMoneyToWallet/" +
              profile._id +
              "/" +
              this.state.rechargeAmount
          )
          .then(profile => this.context.updateProfile(profile.data));
        let captureData = {
          amountToPay: this.state.rechargeAmount * 100,
          responseId: response.razorpay_payment_id
        };
        axios.post("/api/enquiries/capturePayment", captureData);
      },
      prefill: {
        name: profile.name,
        email: profile.email
      },
      notes: {
        address: "Wallet Recharge"
      },
      theme: {
        color: "#ba0f58"
      }
    };

    new Razorpay(options).open();
  };
  clickSignOut = () => {
    Router.push("/");
    this.context.signOut();
  };
  onClose = () => {
    this.setState({
      openWalletModal: false
    });
  };
  render() {
    // if (typeof window !== "undefined") {
    //   if (typeof this.context.currentUser.role == "undefined") {
    //     Router.push("/");
    //   } else if (this.context.currentUser.role == "customer") {
    //     Router.push("/");
    //   }
    // }

    return (
      <React.Fragment>
        <Head title="Home" />
        <Layout
          style={{
            overflow: "auto",
            height: "90vh",
            left: 0
          }}
        >
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              //   console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              //   console.log(collapsed, type);
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Link href="/">
                <a>
                  <img src="../static/logo.png" height="80px" />
                </a>
              </Link>
            </div>

            <Menu theme="dark" mode="inline" defaultSelectedKeys={[]}>
              <Menu.Item
                key="1"
                onClick={() => this.clickAllEnquiries()}
                disabled={this.context.deactivated}
              >
                <Icon type="appstore" />
                <span className="nav-text">All Enquiries</span>
              </Menu.Item>
              <Menu.Item
                key="2"
                onClick={() => this.clickManageProfile()}
                disabled={this.context.deactivated || true}
              >
                <Icon type="area-chart" />
                <span className="nav-text">Vendor Dashboard</span>
              </Menu.Item>
              <Menu.Item
                key="3"
                onClick={() => this.clickManageProfile()}
                // disabled={this.context.deactivated}
              >
                <Icon type="idcard" />
                <span className="nav-text">Manage Profile</span>
              </Menu.Item>
              {this.context.currentProfile !== {} ? (
                <Menu.Item
                  key="4"
                  disabled={this.context.deactivated}
                  onClick={() => this.clickViewProfile()}
                >
                  <Icon type="profile" />
                  <span className="nav-text">View Profile</span>
                </Menu.Item>
              ) : null}
              <Menu.Item
                key="5"
                onClick={() => this.clickAddMoney()}
                disabled={this.context.deactivated}
              >
                <Icon type="wallet" />
                <span className="nav-text">Add Money to Wallet</span>
              </Menu.Item>
              <Menu.Item
                key="6"
                onClick={() => this.clickSignOut()}
                disabled={this.context.deactivated}
              >
                <Icon type="logout" />
                <span className="nav-text">Sign Out</span>
              </Menu.Item>
            </Menu>
          </Sider>

          <Content>
            <div style={{ padding: 10, background: "#fff", minHeight: 360 }}>
              {this.state.content}
              {/* <Footer style={{ textAlign: "center" }}>
                CelebratON.in ©2019
              </Footer> */}
            </div>
          </Content>
        </Layout>
        <Modal
          title="Add Money to Wallet"
          onCancel={this.onClose}
          visible={this.state.openWalletModal}
          style={{
            textAlign: "center",
            zIndex: "200000"
          }}
          footer={[]}
        >
          <Row align="middle">
            <Col>Enter amount to recharge </Col>
            <br />
            <Col>
              <InputNumber
                size="large"
                min={1}
                autoFocus={true}
                style={{ width: "100px" }}
                onChange={this.onInputWalletMoney}
              />
            </Col>
            <br />
            <Col>
              <Button
                type="primary"
                icon="caret-right"
                size="large"
                style={{ background: "green", borderColor: "green" }}
                onClick={() => this.addMoneyToWallet()}
              >
                Add Money
              </Button>
            </Col>
          </Row>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Dashboard;
