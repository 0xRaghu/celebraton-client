import React, { Component } from "react";
import { Row, Col, Card } from "antd";

class HowItWorks extends Component {
  render() {
    return (
      <div style={{ padding: "30px" }} className="center">
        <Row gutter={16}>
          <Col sm={{ span: 8 }}>
            <Card title="Submit Enquiry">
              Login, Select Location, select category and share your Requirement
            </Card>
          </Col>
          <Col sm={{ span: 8 }}>
            <Card title="Get Notified">
              YAY! You will be notified with Best matching Vendors partners from
              the category
            </Card>
          </Col>
          <Col sm={{ span: 8 }}>
            <Card title="Negotiate & Book">
              Review the partners, Connect with them directly, Negotiate and
              Book your order
            </Card>
          </Col>
        </Row>
        <style jsx>{`
          .center {
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

export default HowItWorks;
