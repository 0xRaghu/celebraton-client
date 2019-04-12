import React, { Component } from "react";
import Head from "../../components/home/head";
import { Layout, Menu, Icon } from "antd";
import "../../styles.less";
import AdminManageProfile from "../../components/admin/manageProfiles";
import ManageEnquiries from "../../components/admin/manageEnquiries";
import ManageContactForms from "../../components/admin/manageContactForms";
import Router from "next/router";
import Link from "next/link";
import AddGeneral from "./addGeneral";
import { LoginContext } from "../../components/provider/loginProvider";
import setAuthToken from "../../components/setAuthToken";

import jwt_decode from "jwt-decode";
import axios from "axios";

const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends Component {
  static contextType = LoginContext;
  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.jwtToken);
      if (decoded.role == "customer") {
        Router.push("/");
      }
      if (decoded.role == "vendor") {
        Router.push("/dashboard");
      }
    } else {
      Router.push("/");
    }
  }
  state = {
    content: <ManageEnquiries />,
    limit: 20
  };

  clickManageProfile = () => {
    this.setState({ content: <AdminManageProfile /> });
  };
  clickAllEnquiries = () => {
    this.setState({
      content: <ManageEnquiries />
    });
  };
  clickGeneral = () => {
    this.setState({
      content: <AddGeneral />
    });
  };
  clickViewProfile = () => {
    Router.push("/profile/" + this.props.profile._id);
  };
  clickManageContactForms = () => {
    this.setState({
      content: <ManageContactForms />
    });
  };
  render() {
    // if (typeof window !== "undefined") {
    //   if (typeof this.context.currentUser.role == "undefined") {
    //     Router.push("/");
    //   } else if (this.context.currentUser.role !== "admin") {
    //     if (this.context.currentUser.role === "vendor") {
    //       Router.push("/dashboard");
    //     } else if (this.context.currentUser.role === "customer") {
    //       Router.push("/");
    //     }
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

            <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1" onClick={() => this.clickGeneral()}>
                <Icon type="pic-center" />
                <span className="nav-text">General</span>
              </Menu.Item>
              <Menu.Item key="2" onClick={() => this.clickAllEnquiries()}>
                <Icon type="appstore" />
                <span className="nav-text">All Enquiries</span>
              </Menu.Item>
              <Menu.Item key="3" onClick={() => this.clickManageProfile()}>
                <Icon type="profile" />
                <span className="nav-text">Manage Profiles</span>
              </Menu.Item>
              <Menu.Item key="4" onClick={() => this.clickManageContactForms()}>
                <Icon type="user" />
                <span className="nav-text">Contact Forms</span>
              </Menu.Item>
              <Menu.Item
                key="5"
                onClick={() => this.clickManageProfile()}
                disabled={true}
              >
                <Icon type="area-chart" />
                <span className="nav-text">Admin Dashboard</span>
              </Menu.Item>

              {/* <Menu.Item key="6">
                <Link
                  href={"/profile?profileId=" + this.props.profile.slug}
                  prefetch
                >
                  <a>
                    <Icon type="user" />
                    <span className="nav-text">View Profile</span>
                  </a>
                </Link>
              </Menu.Item> */}
              <Menu.Item key="7" onClick={() => this.clickManageProfile()}>
                <Icon type="logout" />
                <span className="nav-text">Sign Out</span>
              </Menu.Item>
            </Menu>
          </Sider>

          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {this.state.content}
              <Footer style={{ textAlign: "center" }}>
                CelebratON.in ©2019
              </Footer>
            </div>
          </Content>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Dashboard;
