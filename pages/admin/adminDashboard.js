import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import "../../styles.less";
import AdminManageProfile from "../../components/admin/manageProfiles";
import ManageEnquiries from "../../components/admin/manageEnquiries";
import ManageContactForms from "../../components/admin/manageContactForms";
import Router from "next/router";
import Link from "next/link";
import AddGeneral from "./addGeneral";
import { LoginContext } from "../../components/provider/loginProvider";

const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends Component {
  static contextType = LoginContext;
  componentDidMount() {
    // if (this.context.currentUser.role !== "admin") {
    //   if (this.context.currentUser.role === "vendor") {
    //     Router.push("/dashboard");
    //   } else if (this.context.currentUser.role === "customer") {
    //     Router.push("/");
    //   }
    // }
  }
  state = {
    content: <ManageEnquiries />,
    limit: 20
  };

  static async getInitialProps() {
    let profile = await fetch("/api/profiles/getProfile");
    profile = await profile.json();

    return { profile };
  }

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
    Router.push("/profile?profileId=" + this.props.profile._id);
  };
  clickManageContactForms = () => {
    this.setState({
      content: <ManageContactForms />
    });
  };
  render() {
    return (
      <React.Fragment>
        <Layout
          style={{
            overflow: "auto",
            height: "100vh",
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
              <img src="../static/logo.png" height="80px" />
            </div>

            <Menu theme="dark" mode="inline" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1" onClick={() => this.clickGeneral()}>
                <Icon type="user" />
                <span className="nav-text">General</span>
              </Menu.Item>
              <Menu.Item key="2" onClick={() => this.clickAllEnquiries()}>
                <Icon type="user" />
                <span className="nav-text">All Enquiries</span>
              </Menu.Item>
              <Menu.Item key="3" onClick={() => this.clickManageProfile()}>
                <Icon type="upload" />
                <span className="nav-text">Manage Profiles</span>
              </Menu.Item>
              <Menu.Item key="4" onClick={() => this.clickManageContactForms()}>
                <Icon type="upload" />
                <span className="nav-text">Contact Forms</span>
              </Menu.Item>
              <Menu.Item key="5" onClick={() => this.clickManageProfile()}>
                <Icon type="video-camera" />
                <span className="nav-text">Admin Dashboard</span>
              </Menu.Item>

              <Menu.Item key="6">
                <Link
                  href={"/profile?profileId=" + this.props.profile.slug}
                  prefetch
                >
                  <a>
                    <Icon type="user" />
                    <span className="nav-text">View Profile</span>
                  </a>
                </Link>
              </Menu.Item>
              <Menu.Item key="7" onClick={() => this.clickManageProfile()}>
                <Icon type="user" />
                <span className="nav-text">Sign Out</span>
              </Menu.Item>
            </Menu>
          </Sider>

          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {this.state.content}
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </div>
          </Content>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Dashboard;
