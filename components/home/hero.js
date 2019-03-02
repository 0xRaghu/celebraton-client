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
            // style={{
            //   backgroundImage:
            //     "linear-gradient(to bottom right, #C81F70, #BF3A30)"
            // }}
          >
            <div>
              <Row
                type="flex"
                className="hero-image"
                style={{ alignItems: "center", minHeight: "330px" }}
              >
                <Col sm={15} xs={24}>
                  <div className="hero-text">
                    <img
                      src="../static/logo.png"
                      height="150px"
                      // width="80%"
                      // max-width="500px"
                    />
                    <h2>Hire the best EVENT EXPERTS</h2>

                    <h3>
                      <Icon type="phone" />
                      <a href="tel:07904204718">+91-7904204718</a>
                    </h3>

                    <Select
                      defaultValue="Chennai"
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
                <Col sm={9} xs={0}>
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
                h3,
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
