import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import "../styles.less";
import ManageProfile from "../components/vendor/createOrUpdateProfile";
import AllEnquiries from "../components/vendor/allEnquiries";
import Router from "next/router";
import Link from "next/link";
import { LoginContext } from "../components/provider/loginProvider";

const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends Component {
  state = {
    content: null,
    limit: 20
  };
  static contextType = LoginContext;
  static async getInitialProps() {
    let profile = await fetch("/api/profiles/getProfile");
    profile = await profile.json();

    return { profile };
  }
  componentWillMount() {
    this.setState({
      content: <AllEnquiries profile={this.props.profile} />
    });
  }
  componentDidMount() {
    // if (this.context.currentUser.role !== "vendor") {
    //   if (this.context.currentUser.role === "admin") {
    //     Router.push("/admin/adminDashboard");
    //   } else if (this.context.currentUser.role === "customer") {
    //     Router.push("/");
    //   }
    // }
  }
  clickManageProfile = () => {
    this.setState({ content: <ManageProfile profile={this.props.profile} /> });
  };
  clickAllEnquiries = () => {
    this.setState({
      content: <AllEnquiries profile={this.props.profile} />
    });
  };
  clickViewProfile = () => {
    Router.push("/profile?profileId=" + this.props.profile._id);
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

            <Menu theme="dark" mode="inline" defaultSelectedKeys={[]}>
              <Menu.Item key="1" onClick={() => this.clickAllEnquiries()}>
                <Icon type="user" />
                <span className="nav-text">All Enquiries</span>
              </Menu.Item>
              <Menu.Item key="2" onClick={() => this.clickManageProfile()}>
                <Icon type="video-camera" />
                <span className="nav-text">Vendor Dashboard</span>
              </Menu.Item>
              <Menu.Item key="3" onClick={() => this.clickManageProfile()}>
                <Icon type="upload" />
                <span className="nav-text">Manage Profile</span>
              </Menu.Item>

              <Menu.Item key="4">
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
              <Menu.Item key="5" onClick={() => this.clickManageProfile()}>
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
