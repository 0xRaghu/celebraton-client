import React, { Component } from "react";
import { Layout, Menu, Icon, Row, Col } from "antd";
import "../styles.less";
import AdminManageProfile from "../components/admin/manageProfiles";
import ManageEnquiries from "../components/admin/manageEnquiries";
import ManageContactForms from "../components/admin/manageContactForms";
import CategoryContent from "../components/home/categoryContent";
import ArtistList from "../components/home/artistList";
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
    let categories = await axios.get("/api/categories/allCategories/50/0");

    categories = await categories.data;
    let category = await axios.get(
      "/api/categories/categoryBySlug/" + query[0].toLowerCase()
    );

    category = await category.data;
    let locations = await axios.get("/api/admin/getLocations");
    locations = await locations.data;
    let location = query[1].charAt(0).toUpperCase() + query[1].slice(1);

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
      }
    });
  };

  render() {
    const { categories, currentCategory } = this.state;
    return (
      <React.Fragment>
        <Head
          title={`${currentCategory.name}s in ${
            this.props.location
          } | CelebratON`}
          description={`Hire or Book the best ${currentCategory.name}s in ${
            this.props.location
          } in a few clicks. We have the best Wedding Planners, Birthday Planners and Surprise Planners in our platform | CelebratON`}
        />

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
            <Link href="/">
              <a>
                <div style={{ textAlign: "center" }}>
                  <img src="../static/logo.png" height="80px" />
                </div>
              </a>
            </Link>

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
                  {/* <Link href={`/${category.slug}_in_${this.props.location}`}><a> */}
                  <Row type="flex" align="middle">
                    <Col span={1}>
                      <i className="large material-icons">{category.icon}</i>{" "}
                    </Col>
                    <Col span={1} offset={3}>
                      <p className="nav-text">{category.name}</p>
                    </Col>
                  </Row>
                  {/* </a></Link> */}
                </Menu.Item>
              ))}
            </Menu>
          </Sider>

          <Content style={{ margin: "24px 16px 0" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              {currentCategory.name === "Artist" ? <ArtistList /> : null}
              <h1 style={{ textAlign: "center" }}>
                {currentCategory.name} in {this.context.selectedLocation}
              </h1>

              <CategoryContent
                modalCategory={currentCategory}
                changeLocation={this.changeLocation}
              />

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

export default withRouter(Category);
