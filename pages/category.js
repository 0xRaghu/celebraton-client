import React, { Component } from "react";
import { Layout, Menu, Icon, Row, Col } from "antd";
import "../styles.less";
import AdminManageProfile from "../components/admin/manageProfiles";
import ManageEnquiries from "../components/admin/manageEnquiries";
import ManageContactForms from "../components/admin/manageContactForms";
import CategoryContent from "../components/home/categoryContent";
import Nav from "../components/nav";
import Router, { withRouter } from "next/router";
import Link from "next/link";
import router from "next/router";
import axios from "axios";
import { HomeConsumer, HomeContext } from "../components/provider/homeProvider";

import Head from "../components/home/head";
import AddGeneral from "./admin/addGeneral";
import { ConfigConsumer } from "antd/lib/config-provider";

const { Header, Content, Footer, Sider } = Layout;

class Category extends Component {
  state = {
    categories: [],
    currentCategory: {},
    location: ""
  };
  static contextType = HomeContext;

  static getInitialProps = async context => {
    let query = context.query.enquiry.split("-");
    let categories = await fetch("/api/categories/allCategories/50/0");

    categories = await categories.json();
    let category = await fetch("/api/categories/categoryBySlug/" + query[0]);

    category = await category.json();
    let locations = await fetch("/api/admin/getLocations");
    locations = await locations.json();
    let location = query[1];

    return { categories, category, locations, location };
  };
  componentWillMount() {
    this.setState({ currentCategory: this.props.category });
    this.context.updateCatandLoc(this.props.categories, this.props.locations);
    this.context.selectLocationInForm(this.props.location);
  }
  componentDidMount() {
    this.setState({
      categories: this.props.categories
    });
  }

  clickCategory = id => {
    this.state.categories.map(category => {
      if (category._id === id) {
        this.setState({
          currentCategory: category
        });

        router.push(
          "/category?enquiry=" + category.slug + "-" + this.props.location
        );
      }
    });
  };

  render() {
    const { categories, currentCategory } = this.state;
    return (
      <React.Fragment>
        <Head title="Home" />

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

            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[currentCategory.order.toString()]}
            >
              {categories.map(category => (
                <Menu.Item
                  key={category.order}
                  onClick={() => this.clickCategory(category._id)}
                >
                  <Row type="flex" align="middle">
                    <Col span={1}>
                      <i className="large material-icons">{category.icon}</i>{" "}
                    </Col>
                    <Col span={1} offset={3}>
                      <p className="nav-text">{category.name}</p>
                    </Col>
                  </Row>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>

          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <h1 style={{ textAlign: "center" }}>
                {currentCategory.name} in {this.context.selectedLocation}
              </h1>

              <CategoryContent
                modalCategory={currentCategory}
                changeLocation={this.changeLocation}
              />

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

export default withRouter(Category);
