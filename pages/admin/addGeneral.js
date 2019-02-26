import React, { Component } from "react";
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
const { Meta } = Card;
import Router from "next/router";
import fetch from "isomorphic-unfetch";

import Head from "../../components/home/head";
import axios from "axios";
const { TextArea } = Input;

class AddGeneral extends Component {
  state = {
    categories: [],
    category: {
      eventType: [],
      servicesRequired: [],
      budget: [{ _id: 0, from: 0, to: 0, option: 0, leadPrice: 0 }]
    },
    locations: "",
    locId: "",
    additionalBudget: "",
    updatedBudget: "",
    mode: "addCategory"
  };

  componentDidMount() {
    axios
      .get("/api/categories/allCategories/7/0")
      .then(cat => this.setState({ categories: cat.data }));

    axios.get("/api/admin/getLocations").then(loc =>
      this.setState({
        locations: loc.data[0].locations.join(","),
        locId: loc.data[0]._id
      })
    );
  }

  onChangeLocation = value => {
    this.setState({
      budgetBracket: value
    });
  };
  onChangeCategory = value => {
    this.setState({
      category: value,
      mode: "updateCategory"
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
        if (this.state.mode === "updateCategory") {
          axios
            .post(
              `/api/categories/updateCategory/${this.state.category._id}`,
              values
            )
            .then(cat => {
              const index = this.state.categories.findIndex(
                x => x._id === this.state.category._id
              );

              (this.state.categories[index] = cat.data),
                this.setState({ category: cat.data });
            });
        } else {
          axios.post(`/api/categories/addCategory`, values).then(cat => {
            axios
              .get("/api/categories/allCategories/7/0")
              .then(cat => this.setState({ categories: cat.data }));
          });
        }
      }
    });
  };
  onChangeBudget = e => {
    this.setState({ additionalBudget: e.target.value });
  };
  onChangeLocation = e => {
    this.setState({ locations: e.target.value });
  };
  addBudgetInput = categoryId => {
    // console.log("Received values of form: ", categoryId);
    axios
      .post("/api/categories/addBudget/" + categoryId, {
        budget: this.state.additionalBudget
      })
      .then(category =>
        this.setState({
          category: category.data
        })
      );
  };
  updateBudget = (categoryId, budgetId) => {
    axios
      .post("/api/categories/updateBudget/" + categoryId + "/" + budgetId, {
        budget: this.state.additionalBudget
      })
      .then(category =>
        this.setState({
          category: category.data
        })
      );
  };
  deleteBudget = (categoryId, budgetId) => {
    axios
      .post("/api/categories/deleteBudget/" + categoryId + "/" + budgetId, {
        budget: this.state.additionalBudget
      })
      .then(category =>
        this.setState({
          category: category.data
        })
      );
  };
  updateLocation = () => {
    axios
      .post("/api/admin/updateLocation/" + this.state.locId, {
        locations: this.state.locations
      })
      .then(locations =>
        this.setState({
          locations: locations.data.locations
        })
      );
  };

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;

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
    const InputLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 14 }
    };
    const { category, categories, locations } = this.state;

    return (
      <React.Fragment>
        <Head title="Admin Dashboard" />
        <h1 style={{ textAlign: "center" }}>Update Locations</h1>
        <Form>
          <Row>
            <Col span={18}>
              <Form.Item label="Locations" {...InputLayout}>
                <Input value={locations} onChange={this.onChangeLocation} />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Button type="primary" onClick={this.updateLocation}>
                Update Location
              </Button>
            </Col>
          </Row>
        </Form>
        <h1 style={{ textAlign: "center" }}>Create or Update Category</h1>
        <Form onSubmit={this.handleSubmit} layout={layoutVariable}>
          <Form.Item {...Layout} label="Category Name">
            {getFieldDecorator(
              "name",
              { initialValue: category.name },
              {
                rules: [
                  {
                    required: true,
                    message: "Please enter Category Name!"
                  }
                ]
              }
            )(<Input placeholder="Category Name" />)}
          </Form.Item>
          <Form.Item {...Layout} label="Slug">
            {getFieldDecorator(
              "slug",
              { initialValue: category.slug },
              {
                rules: [
                  {
                    required: true,
                    message:
                      "Please enter the slug ex., EventPlanners without space!"
                  }
                ]
              }
            )(<Input placeholder="Category Slug" />)}
          </Form.Item>
          <Form.Item {...Layout} label="Icon">
            {getFieldDecorator(
              "icon",
              { initialValue: category.icon },
              {
                rules: [
                  {
                    required: true,
                    message: "Please select an Icon!"
                  }
                ]
              }
            )(<Input placeholder="Category Icon" />)}
          </Form.Item>
          <Form.Item {...Layout} label="Order">
            {getFieldDecorator(
              "order",
              { initialValue: category.order },
              {
                rules: [
                  {
                    required: true,
                    message: "Please choose the order of display!"
                  }
                ]
              }
            )(<Input placeholder="Category Order" />)}
          </Form.Item>
          <Form.Item {...Layout} label="eventType">
            {getFieldDecorator(
              "eventType",
              {
                initialValue: category.eventType.join(",")
              },
              {
                rules: [
                  {
                    required: true,
                    message: "Please enter event types!"
                  }
                ]
              }
            )(<Input placeholder="Event Types" />)}
          </Form.Item>
          <Form.Item {...Layout} label="servicesRequired">
            {getFieldDecorator(
              "servicesRequired",
              {
                initialValue: category.servicesRequired.join(",")
              },
              {
                rules: [
                  {
                    required: true,
                    message: "Please enter services required!"
                  }
                ]
              }
            )(<Input placeholder="Event Services Required" />)}
          </Form.Item>

          <div style={{ textAlign: "center" }}>
            <Form.Item {...tailformItemLayout}>
              <Button type="primary" htmlType="submit">
                Create / Update Category
              </Button>
            </Form.Item>
          </div>
        </Form>
        <h1 style={{ textAlign: "center" }}>
          Add/Update Budget for above Category
        </h1>

        {this.state.category.budget.map((budget, index) => (
          <React.Fragment key={budget._id}>
            <Row gutter={16}>
              <Col span={5}>
                {budget.option +
                  "," +
                  budget.from +
                  "," +
                  budget.to +
                  "," +
                  budget.leadPrice}
              </Col>
              <Col span={9}>
                <Input
                  placeholder={
                    budget.option +
                    "," +
                    budget.from +
                    "," +
                    budget.to +
                    "," +
                    budget.leadPrice
                  }
                  onChange={this.onChangeBudget}
                />
              </Col>
              <Col span={9}>
                <Button.Group size="small">
                  <Button
                    type="primary"
                    onClick={() =>
                      this.updateBudget(this.state.category._id, budget._id)
                    }
                  >
                    <Icon type="left" />
                    Update
                  </Button>
                  <Button
                    type="danger"
                    onClick={() =>
                      this.deleteBudget(this.state.category._id, budget._id)
                    }
                  >
                    Delete
                    <Icon type="right" />
                  </Button>
                </Button.Group>
              </Col>
            </Row>
            <br />
          </React.Fragment>
        ))}
        <Form>
          <Row>
            <Col span={12}>
              <Form.Item label="Add Budget" {...InputLayout}>
                <Input
                  placeholder="option,from,to,leadPrice"
                  value={this.state.additionalBudget}
                  onChange={this.onChangeBudget}
                />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Button
                type="primary"
                onClick={() => this.addBudgetInput(this.state.category._id)}
              >
                Add Budget
              </Button>
            </Col>
          </Row>
        </Form>
        <br />
        <br />

        <div className="center">
          <div style={{ background: "#ECECEC", padding: "30px" }}>
            <Row gutter={16}>
              <h1 className="h1Heading">Submit your Enquiry directly below</h1>
              {categories.map(category => (
                <h2 key={category._id}>
                  <Col span={8}>
                    <Card
                      hoverable
                      style={{ width: 240 }}
                      bordered={false}
                      onClick={() => this.onChangeCategory(category)}
                    >
                      <Meta
                        title={
                          <div>
                            <i className="large material-icons">
                              {category.icon}
                            </i>
                            <br />
                            {category.name}
                          </div>
                        }
                      />
                    </Card>
                  </Col>
                </h2>
              ))}
            </Row>
          </div>
          <br />
        </div>
        <style jsx>{`
          .h1Heading {
            text-align: center;
            color: #595959;
          }
          h2 {
            display: inline-block;
          }
          .center {
            text-align: center;
          }
          i {
            font-size: 50px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Form.create({ name: "add-general" })(AddGeneral);
