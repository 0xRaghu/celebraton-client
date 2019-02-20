import React, { Component } from "react";
import Login from "../login/login";
import Nav from "../nav";
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  InputNumber,
  Upload,
  Icon
} from "antd";
import WrappedNormalLoginForm from "../contactForm";
import Router from "next/router";
import { LoginContext } from "../provider/loginProvider";
import { HomeConsumer } from "../provider/homeProvider";
import fetch from "isomorphic-unfetch";
import axios from "axios";
const { TextArea } = Input;

class ManageProfile extends Component {
  static contextType = LoginContext;
  state = {
    categories: [],
    locations: [],
    budgetBracket: 0
  };

  componentDidMount() {
    if (this.props.profile !== {}) {
      //   Router.push("/dashboard");
    }
    axios.get("/api/categories/allCategories/7/0").then(categories => {
      this.setState({ categories: categories.data });
    });

    axios
      .get("/api/admin/getLocations")
      .then(loc => this.setState({ locations: loc.data[0].locations }));
  }
  componentWillMount() {
    // this.setState({ categories, locations: locations[0].locations });
  }
  onChangeBudgetBracket = value => {
    this.setState({
      budgetBracket: value
    });
  };
  normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log("Received values of form: ", values);
        axios.post("/api/profiles/addOrUpdateProfile", values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayoutHorizontal = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 }
    };
    const tailformItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        }
      }
    };
    const formItemLayoutVertical = {
      wrapperCol: { span: 22, offset: 1 }
    };
    let Layout, layoutVariable;
    if (typeof screen !== "undefined") {
      Layout =
        screen.width <= "850"
          ? formItemLayoutVertical
          : formItemLayoutHorizontal;
      layoutVariable = screen.width <= "850" ? "vertical" : "horizontal";
    } else {
      Layout = formItemLayoutHorizontal;
      layoutVariable = "horizontal";
    }
    const { categories, locations } = this.state;
    const { profile } = this.props;

    return (
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>Create or Update Profile</h1>
        <Form onSubmit={this.handleSubmit} layout={layoutVariable}>
          <Form.Item {...Layout} label="Company Name">
            {getFieldDecorator(
              "companyName",
              { initialValue: profile.companyName },
              {
                rules: [
                  {
                    required: true,
                    message: "Please enter your Company Name!"
                  }
                ]
              }
            )(<Input placeholder="Business Name" />)}
          </Form.Item>
          <Form.Item {...Layout} label="Description">
            {getFieldDecorator(
              "description",
              { initialValue: profile.description },
              {
                rules: [
                  {
                    required: true,
                    message: "Please enter your Company Description!"
                  }
                ]
              }
            )(
              <TextArea
                placeholder="Provide details about your business"
                autosize
              />
            )}
            <div style={{ margin: "24px 0" }} />
          </Form.Item>
          <Form.Item {...Layout} label="Choose Categories">
            {getFieldDecorator(
              "categories",
              {
                initialValue: profile.categories
              },
              {
                rules: [
                  {
                    required: true,
                    message:
                      "Please select atleast one Cateogory that you serve!"
                  }
                ]
              }
            )(
              <Checkbox.Group style={{ width: "100%" }}>
                <Row>
                  {categories.map(category => (
                    <Col
                      lg={{ span: 6 }}
                      md={{ span: 8 }}
                      sm={{ span: 24 }}
                      key={category.name}
                    >
                      <Checkbox value={category.name}>{category.name}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            )}
          </Form.Item>

          <Form.Item {...Layout} label="Choose Locations">
            {getFieldDecorator(
              "locations",
              {
                initialValue: profile.locations
              },
              {
                rules: [
                  {
                    required: true,
                    message:
                      "Please select atleast one Location that you serve in!"
                  }
                ]
              }
            )(
              <Checkbox.Group style={{ width: "100%" }}>
                <Row>
                  {locations.map(location => (
                    <Col
                      lg={{ span: 6 }}
                      md={{ span: 8 }}
                      sm={{ span: 24 }}
                      key={location}
                    >
                      <Checkbox value={location}>{location}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            )}
          </Form.Item>
          <Form.Item {...Layout} label="Choose Primary Location">
            {getFieldDecorator("primaryLocation", {
              initialValue: profile.primaryLocation
                ? profile.primaryLocation
                : "Chennai"
            })(
              <Select size="large" style={{ width: 180 }}>
                {locations.map(location => (
                  <Option key={location}>{location}</Option>
                ))}
              </Select>
            )}
          </Form.Item>
          <Form.Item {...Layout} label="Minimum Budget">
            {getFieldDecorator(
              "budgetBracket",
              { initialValue: profile.budgetBracket },
              {
                value:
                  typeof this.state.budgetBracket === "number"
                    ? this.state.budgetBracket
                    : 0
              }
            )(<InputNumber onChange={this.onChangeBudgetBracket} />)}
          </Form.Item>
          <Form.Item
            {...Layout}
            label="Portfolio Images"
            extra="Our customers will get a fair idea about your quality and design"
          >
            {getFieldDecorator("images", {
              valuePropName: "fileList",
              getValueFromEvent: this.normFile
            })(
              <Upload name="logo" listType="picture" multiple={true}>
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>
            )}
          </Form.Item>
          <Form.Item {...Layout} label="Youtube videos">
            {getFieldDecorator("videos", { initialValue: profile.videos }, {})(
              <TextArea
                placeholder={`Provide youtube urls seperated by comma ${"\n"}ex., https://www.youtube.com/watch?v=7GBCHRxq3Sc,https://www.youtube.com/watch?v=VRdaHFy0FcY`}
              />
            )}
          </Form.Item>
          <div style={{ textAlign: "center" }}>
            <Form.Item {...tailformItemLayout}>
              <Button type="primary" htmlType="submit">
                Update Profile
              </Button>
            </Form.Item>
          </div>
        </Form>
      </React.Fragment>
    );
  }
}

export default Form.create({ name: "manage-profile" })(ManageProfile);
