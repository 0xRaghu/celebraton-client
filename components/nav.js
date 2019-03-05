import React from "react";
import "../styles.less";
import Link from "next/link";
import Layout from "antd/lib/layout";
import Breadcrumb from "antd/lib/breadcrumb";
import { Drawer, Menu, Icon } from "antd";
import Login from "./login/login";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer } = Layout;
import { LoginConsumer, LoginContext } from "./provider/loginProvider";

class Nav extends React.Component {
  static contextType = LoginContext;

  render() {
    const {
      drawerVisible,
      showDrawer,
      onCloseDrawer,
      isAuthenticated,
      signOut,
      currentUser
    } = this.context;
    return (
      <LoginConsumer>
        {() => (
          <Layout className="layout">
            <Header>
              {isAuthenticated ? (
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={[""]}
                  style={{ lineHeight: "40px" }}
                >
                  <Menu.Item key="1">
                    <Link href="/">
                      <a>
                        <Icon type="home" />
                      </a>
                    </Link>
                  </Menu.Item>

                  {currentUser.role !== "customer" ? (
                    <Menu.Item key="2">
                      <Link href="/dashboard">
                        <a>Dashboard</a>
                      </Link>
                    </Menu.Item>
                  ) : null}
                  <Menu.Item key="3">
                    <a onClick={signOut}>Sign Out</a>
                  </Menu.Item>
                </Menu>
              ) : (
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={[""]}
                  style={{ lineHeight: "40px" }}
                >
                  <Menu.Item key="1">
                    <Link href="/">
                      <a>
                        <Icon type="home" />
                      </a>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="2" onClick={showDrawer}>
                    Login
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link href="/vendor-login">
                      <a>Be a Vendor</a>
                    </Link>
                  </Menu.Item>
                </Menu>
              )}
            </Header>
            <Drawer
              width="300px"
              title="Login/Register"
              placement="right"
              closable={true}
              onClose={onCloseDrawer}
              visible={drawerVisible}
            >
              <Menu mode="horizontal">
                <Menu.Item key="login">
                  <Icon type="mail" />
                  Login
                </Menu.Item>
              </Menu>
              <Login />
              <br />
              <hr />
              <br />
              To register as our vendor, go to{" "}
              <Link href="/vendor-login">
                <a>Vendor Login page</a>
              </Link>
            </Drawer>
          </Layout>
        )}
      </LoginConsumer>
    );
  }
}

export default Nav;
