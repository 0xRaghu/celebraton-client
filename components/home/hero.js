import React, { Component } from "react";
import "../../styles.less";
// import "~antd/dist/antd.less";
import { Row, Col, Select, Icon } from "antd";
import WrappedLoginForm from "../contactForm";

import { HomeConsumer, HomeContext } from "../provider/homeProvider";

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class Hero extends Component {
  static contextType = HomeContext;
  render() {
    const { locations, selectedLocation, selectLocation } = this.context;
    return (
      <HomeConsumer>
        {() => (
          <div
            className="hero-image"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, #C81F70, #BF3A30)"
            }}
          >
            <div>
              <Row
                type="flex"
                style={{ alignItems: "center", height: "500px" }}
              >
                <Col sm={15} xs={24}>
                  <div className="hero-text">
                    <img src="../static/logo.png" height="150px" />
                    <h1>Hire the best EVENT EXPERTS</h1>

                    <h2>
                      <Icon type="phone" />
                      <a href="tel:07904204718">+91-7904204718</a>
                    </h2>

                    <Select
                      defaultValue="Chennai"
                      size="large"
                      style={{ width: 180 }}
                      onChange={selectLocation}
                      value={selectedLocation}
                    >
                      {locations.map(location => (
                        <Option key={location}>{location}</Option>
                      ))}
                    </Select>
                  </div>
                </Col>
                <Col sm={9} xs={24}>
                  <div className="inputForm">
                    <WrappedLoginForm />
                  </div>
                </Col>
              </Row>
              <style jsx>{`
                body,
                html {
                  height: 100%;
                }

                /* The hero image */
                .hero-image {
                  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
                  
                    background-color: red

                  /* Set a specific height */
                  height: 500px;
                  align: center;

                  /* Position and center the image to scale nicely on all screens */
                  background-position: top;
                  background-repeat: no-repeat;
                  background-size: cover;
                  position: relative;
                }
                @media only screen and (max-width: 600px) {
                  .hero-image {
                    height: 600px;
                  }
                }

                /* Place text in the middle of the image */
                .hero-text {
                  text-align: center;
                  position: relative;
                  // left: 50%;
                  // transform: translate(-50%, -50%);
                  color: white;
                }
                h1,
                h2,
                a {
                  color: white;
                }

                .inputForm {
                  text-align: center;
                }
              `}</style>
            </div>
          </div>
        )}
      </HomeConsumer>
    );
  }
}

export default Hero;
