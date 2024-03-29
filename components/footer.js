import React from "react";
import "../styles.less";
import Link from "next/link";
import Layout from "antd/lib/layout";
import Breadcrumb from "antd/lib/breadcrumb";
import { Drawer, Menu, Icon, Row, Col } from "antd";
import Login from "./login/login";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content } = Layout;
import { LoginConsumer, LoginContext } from "./provider/loginProvider";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row
          style={{ padding: "0px" }}
          style={{ color: "white", backgroundColor: "#001529" }}
        >
          <Col sm={{ span: 7, offset: 1 }} xs={{ span: 20, offset: 2 }}>
            <h3 style={{ color: "white" }}>About Us</h3>
            <hr />
            <p>
              CelebratON is an one-stop online platform to Search, Discover,
              Negotiate and book the best party services ranging from party
              halls and cakes to complete events essentials with utmost
              convenience and transparency.
            </p>
            <p>
              Find More:{" "}
              <a href="https://www.celebraton.in/about-us" target="_blank">
                About Us
              </a>
            </p>
          </Col>

          <Col sm={{ span: 7, offset: 1 }} xs={{ span: 20, offset: 2 }}>
            <h3 style={{ color: "white" }}>Contact Us</h3>
            <hr />
            <p>
              <a href="tel:08082338257" className="white-text">
                +91–8082338257
              </a>
              <br />
              <a href="tel:07021127797" className="white-text">
                +91–7021127797
              </a>
              <br />
              <a href="mailto:partnersupport@celebraton.in?Subject=Partner%20Registration">
                partnersupport@celebraton.in
              </a>
              <br />
              https://www.celebraton.in
              <br />
              <a
                href="https://www.google.co.in/maps/place/CelebratON/@13.0758882,80.1800023,17z/data=!3m1!4b1!4m5!3m4!1s0x3a5261542b4779d7:0x47f608c14d62e3c5!8m2!3d13.075883!4d80.182191?hl=en"
                target="_blank"
              >
                212/G2, Trinity Church Street, Golden George Nagar, Mogappair
                East, Chennai – 600107
              </a>
            </p>
          </Col>

          <Col sm={{ span: 6, offset: 1 }} xs={{ span: 20, offset: 2 }}>
            <h3 style={{ color: "white" }}>Important Links</h3>
            <hr />
            <ul>
              <li>
                <a
                  href="https://www.celebraton.in/terms-of-service"
                  target="_blank"
                >
                  Terms of Service{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.celebraton.in/privacy-policy"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.celebraton.in/refund-policy"
                  target="_blank"
                >
                  Refund/Cancellation Policy
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <div
          style={{
            textAlign: "center",
            color: "white",
            backgroundColor: "#001529"
          }}
        >
          <div>
            © 2017 Sylabel Technologies Pvt. Ltd., - All Rights Reserved.
          </div>
        </div>
        {/* <div
          class="chatModal"
          id="chatWindow"
          role="dialog"
          aria-labelledby="exampleModal"
          aria-hidden="true"
        >
          <div class="transparent noborder" role="document">
            <iframe
              allow="microphone;"
              height="430"
              align="right"
              src="https://console.dialogflow.com/api-client/demo/embedded/9d0a9a71-617f-4dc7-b760-e12f4380208f"
            />
          </div>
        </div> */}
        <style jsx>{`
          a {
            text-decoration: none;
            color: white;
          }
          .rowClass {
            color: black;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Footer;
