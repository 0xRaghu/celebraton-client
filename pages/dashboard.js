import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";

import Head from "../components/home/head";
import "../styles.less";
import ManageProfile from "../components/vendor/createOrUpdateProfile";
import AllEnquiries from "../components/vendor/allEnquiries";
import Router from "next/router";
import Link from "next/link";
import { LoginContext } from "../components/provider/loginProvider";
import setAuthToken from "../components/setAuthToken";
import axios from "axios";

const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends Component {
  state = {
    content: null,
    limit: 20
  };
  static contextType = LoginContext;

  componentDidMount() {
    if (this.context.currentUser.role !== "admin") {
      if (this.context.currentUser.role === "vendor") {
        Router.push("/dashboard");
      } else if (this.context.currentUser.role === "customer") {
        Router.push("/");
      }
    }
    if (this.context.currentProfile) {
      this.setState({
        content: <AllEnquiries profile={this.context.currentProfile} />
      });
    } else {
      this.setState({
        content: <ManageProfile />
      });
      this.context.deactivateDashboard();
    }
  }

  clickManageProfile = () => {
    this.setState({
      content: <ManageProfile profile={this.context.currentProfile} />
    });
  };
  clickAllEnquiries = () => {
    this.setState({
      content: <AllEnquiries profile={this.context.currentProfile} />
    });
  };
  clickViewProfile = () => {
    Router.push("/profile?profileId=" + this.context.currentProfile.slug);
  };
  clickSignOut = () => {
    this.context.signOut();
    Router.push("/");
  };
  render() {
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
                disabled={this.context.deactivated}
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
                onClick={() => this.clickSignOut()}
                disabled={this.context.deactivated}
              >
                <Icon type="logout" />
                <span className="nav-text">Sign Out</span>
              </Menu.Item>
            </Menu>
          </Sider>

          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {this.state.content}
              {/* <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
              </Footer> */}
            </div>
          </Content>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Dashboard;
