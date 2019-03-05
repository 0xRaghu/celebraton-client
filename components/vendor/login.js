import React, { Component } from "react";
import Login from "../login/login";
import Nav from "../nav";
import { Row, Col, Card } from "antd";
import WrappedNormalLoginForm from "../contactForm";
import Router from "next/router";
import { LoginContext } from "../provider/loginProvider";

export default class VendorLogin extends Component {
  static contextType = LoginContext;
  componentWillMount() {
    if (this.context.currentUser.role === "vendor") {
      Router.push("/dashboard");
    }
    this.context.onCloseDrawer();
  }
  render() {
    return (
      <div>
        <Row>
          <Col xs={{ span: 20, offset: 2 }} sm={{ span: 20, offset: 2 }} md={{ span: 13, offset: 1 }}>
            <div style={{ textAlign: "center" }}>
              <img src="../static/logo-black.png" max-height="150px" width="80%" />

              <h1>Be a vendor in India's first Verified Leads Portal !!</h1>
              <h3>
                CelebratON verifies each enquiry so you can pick the lead with
                confidence !!!
              </h3>
            </div>
          </Col>
          <Col
           xs={{ span: 20, offset: 2 }}
            sm={{ span: 20, offset: 2 }}
            md={{ span: 8, offset: 1 }}
            style={{ paddingTop: "40px" }}
          >
            <h1 style={{ textAlign: "center" }}>Login/Register</h1>
            <Login />
          </Col>
        </Row>
        <br />
        <div style={{ textAlign: "center" }}>
          <h1>How it Works for you?</h1>
          <Row gutter={16}>
            <Col sm={{ span: 6 }}  xs={{ span: 20, offset: 2 }}>
              <Card title="Register">
                Register your profile in less than a minute with your mobile
                number
              </Card>
            </Col>
            <Col sm={{ span: 6 }} xs={{ span: 20, offset: 2 }}>
              <Card title="Get Notified with Leads">
                You will be notified with quality leads with complete
                information
              </Card>
            </Col>
            <Col sm={{ span: 6 }} xs={{ span: 20, offset: 2 }}>
              <Card title="Buy Leads">
                With complete info., Pay a small amount to buy leads & get
                contact details
              </Card>
            </Col>
            <Col sm={{ span: 6 }} xs={{ span: 20, offset: 2 }}>
              <Card title="Connect and Convert">
                Connect with them, dictate your own terms and book business
              </Card>
            </Col>
          </Row>

          <WrappedNormalLoginForm color="black" />
        </div>
      </div>
    );
  }
}
