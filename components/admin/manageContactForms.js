import React, { Component } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Card,
  Drawer,
  List,
  Avatar,
  Button,
  Skeleton,
  Modal,
  Table,
  Popover,
  Icon,
  Form,
  Input,
  Radio,
  DatePicker,
  InputNumber,
  Checkbox,
  Upload
} from "antd";
import moment from "moment";
import Link from "next/link";

import reqwest from "reqwest";
import { withRouter } from "next/router";

const { Meta } = Card;

class ManageContactForms extends Component {
  componentDidMount() {}
  state = {
    contactForms: [],

    count: 0
  };

  componentWillMount() {}
  componentDidMount() {
    this.getData(res => {
      this.setState({
        contactForms: res
      });
    });
  }

  getData = callback => {
    reqwest({
      url: `/api/contactForms/allForms/2/${this.state.count}`,
      type: "json",
      method: "get",
      contentType: "application/json",
      success: res => {
        callback(res);
      }
    });
  };

  onLoadMore = () => {
    this.setState({
      count: this.state.count + 2
    });
    this.getData(res => {
      const contactForms = this.state.contactForms.concat(res);
      this.setState(
        {
          contactForms
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event("resize"));
        }
      );
    });
  };

  render() {
    const { selectLocationInModal } = this.context;
    const { contactForms } = this.state;
    const loadMore = (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px"
        }}
      >
        <Button onClick={this.onLoadMore}>Load more</Button>
      </div>
    );

    return (
      <React.Fragment>
        <div style={{ background: "#ECECEC", padding: "30px" }}>
          <h1 style={{ textAlign: "center" }}>All Contact Forms</h1>
          <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={contactForms}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 3,
              xxl: 3
            }}
            style={{ padding: "10px" }}
            renderItem={form => (
              <List.Item>
                <Card
                  hoverable
                  title={moment(form.date).format("DD MMM, YYYY")}
                  bordered={false}
                >
                  Name:
                  <b>{" " + form.name}</b> <br />
                  Mobile:
                  <b>{" " + form.mobile}</b> <br />
                  Role:
                  <b>{" " + form.role}</b>
                </Card>
              </List.Item>
            )}
          />

          <style jsx>{`
            a {
              text-decoration: none;
            }
          `}</style>
        </div>
      </React.Fragment>
    );
  }
}

export default ManageContactForms;
