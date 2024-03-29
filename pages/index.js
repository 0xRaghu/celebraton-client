import React, { Component } from "react";
import "../styles.less";
import Head from "../components/home/head";
import Hero from "../components/home/hero";
import Nav from "../components/nav";
import axios from "axios";
import Link from "next/link";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/testimonials";
import Popup from "../components/home/modal";
import { HomeConsumer, HomeContext } from "../components/provider/homeProvider";
import { Card, Row, Col, Button } from "antd";
import Artist from "../components/home/artist";

import setAuthToken from "../components/setAuthToken";
import { LoginConsumer } from "../components/provider/loginProvider";
const { Meta } = Card;

class Home extends Component {
  static contextType = HomeContext;
  state = { countCategories: 10 };
  static async getInitialProps() {
    let categories = await axios.get("/api/categories/allCategories/10/0");
    categories = await categories.data;

    let locations = await axios.get("/api/admin/getLocations");
    locations = await locations.data;

    let count = await axios.get("/api/admin/allCategories");
    count = await count.data;

    return { categories, locations, count };
  }
  componentWillMount() {
    this.context.updateCatandLoc(this.props.categories, this.props.locations);
    this.setState({
      countCategories: this.props.count.length
    });
  }

  render() {
    const { category, disabled, updateLimit, clickModal } = this.context;

    return (
      <HomeConsumer>
        {() => (
          <div>
            <Head
              title="Best Wedding, Birthday and Surprise Planners all at one place | CelebratON"
              description="Book the best customized Wedding Planner, Birthday Planner, Surprise Planner or an Event Organizer in just a few clicks"
            />

            <Hero />
            <div className="center">
              <div style={{ background: "#ECECEC", padding: "0px" }}>
                <h2 className="h1Heading">
                  Submit your Enquiry directly below
                </h2>
                <Row
                  align="middle"
                  type="flex"
                  className="cardDimension"
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  {category.map(category => (
                    <h2 key={category._id}>
                      <Col>
                        <Link href="?m=enquiry">
                          <a style={{ textDecoration: "none" }}>
                            <Card
                              // style={{ width: 220, height: 120 }}

                              bordered={true}
                              onClick={() => clickModal(category)}
                            >
                              <i className="small material-icons">
                                {category.icon}
                              </i>
                              <br />
                              {category.name}
                            </Card>
                          </a>
                        </Link>
                      </Col>
                    </h2>
                  ))}
                </Row>
                {this.state.countCategories > 10 ? (
                  <Button onClick={updateLimit} disabled={disabled}>
                    View More
                  </Button>
                ) : null}
              </div>
            </div>
            <Artist categories={category} />

            <h2 className="h1Heading">How it Works</h2>
            <HowItWorks />
            <Popup />
            <Testimonials />
            <style jsx>{`
              .cardDimension {
              }
              .h1Heading {
                text-align: center;
                color: #595959;
              }

              .center {
                text-align: center;
              }
              i {
                font-size: 50px;
              }
            `}</style>
          </div>
        )}
      </HomeConsumer>
    );
  }
}

export default Home;
