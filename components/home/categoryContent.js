import React, { Component } from "react";
import {
  Form,
  Radio,
  Checkbox,
  DatePicker,
  Row,
  Col,
  InputNumber,
  Upload,
  Button,
  Icon,
  Input,
  notification
} from "antd";
import moment from "moment";
import reqwest from "reqwest";
import axios from "axios";
import Login from "../login/login.js";
import { HomeConsumer, HomeContext } from "../provider/homeProvider";
import { LoginConsumer } from "../provider/loginProvider";
import request from "superagent";
import { storage } from "../../firebase";

class Enquiry extends Component {
  state = {
    inputGuests: 0,
    imageUrl: [],
    imageUrl1: [],
    sampleImage: [],
    newEnquiry: {},
    floorPlan: []
  };
  static contextType = HomeContext;
  submitEnquiry = e => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll((err, values) => {
      // console.log(values);
      if (!err) {
        let request = { enquiry: values, category: this.props.modalCategory };
        axios.post("/api/enquiries/addEnquiry", request).then(enquiry => {
          this.state.sampleImage.map(image => {
            const upload = storage
              .ref(`/customerImages/${image.name}`)
              .put(image.originFileObj);
            upload.on(
              "state_changed",
              snapshot => {
                console.log("progress");
              },
              error => {
                console.log("error");
              },
              () => {
                storage
                  .ref("customerImages")
                  .child(image.name)
                  .getDownloadURL()
                  .then(url => {
                    this.setState({
                      imageUrl: this.state.imageUrl.concat(url)
                    });
                    axios.post(
                      `/api/enquiries/addImages/${enquiry.data._id}`,
                      this.state.imageUrl
                    );
                  });
              }
            );
          });
          //for Stall Fabrication Floor Plan
          this.state.floorPlan.map(image => {
            const upload = storage
              .ref(`/customerImages/${image.name}`)
              .put(image.originFileObj);
            upload.on(
              "state_changed",
              snapshot => {
                console.log("progress");
              },
              error => {
                console.log("error");
              },
              () => {
                storage
                  .ref("customerImages")
                  .child(image.name)
                  .getDownloadURL()
                  .then(url => {
                    this.setState({
                      imageUrl1: this.state.imageUrl1.concat(url)
                    });
                    axios.post(
                      `/api/enquiries/addFloorImages/${enquiry.data._id}`,
                      this.state.imageUrl1
                    );
                  });
              }
            );
          });

          this.props.form.resetFields();
          this.context.handleCancel();
        });
        notification.open({
          message: "Enquiry Submitted",
          description:
            "Your enquiry has been submitted. Our representatives will call you soon. Thanks for choosing CelebratON for your celebrations",
          duration: 10,
          onClick: () => {
            console.log("Notification Clicked!");
          }
        });
      }
    });
  };

  disabledDate = current => {
    // Can not select days before today and today
    return current < moment().startOf("day");
  };
  onChangeGuests = value => {
    this.setState({
      inputGuests: value
    });
  };

  normFile = e => {
    const file = e.file;
    this.setState({ sampleImage: this.state.sampleImage.concat(file) });
  };
  normFile1 = e => {
    const file = e.file;
    this.setState({ floorPlan: this.state.floorPlan.concat(file) });
  };

  render() {
    const { locations, selectedLocation, selectLocationInModal } = this.context;
    const { modalCategory } = this.props;
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

    const dateFormat = "DD MMM YYYY";
    const { inputGuests, pickerOpen, selectedDate } = this.state;
    const { TextArea } = Input;
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
    return (
      <HomeConsumer>
        {() => (
          <div>
            <Form layout={layoutVariable} onSubmit={this.submitEnquiry}>
              {modalCategory.name != "Stall Fabricator" ? (
                <Form.Item
                  label={modalCategory.name.concat(" required for?")}
                  {...Layout}
                >
                  {getFieldDecorator("serviceFor", {
                    initialValue: modalCategory.eventType[0]
                  })(
                    <Radio.Group
                      onChange={this.handleFormLayoutChange}
                      buttonStyle=""
                    >
                      {modalCategory.eventType.map(eventType => (
                        <Radio key={eventType} value={eventType}>
                          {eventType}
                        </Radio>
                      ))}
                    </Radio.Group>
                  )}
                </Form.Item>
              ) : null}

              {modalCategory.name == "Stall Fabricator" ? (
                <React.Fragment>
                  <Form.Item {...Layout} label="Name of Exhibition">
                    {getFieldDecorator("nameOfExhibition", {
                      initialValue: "",
                      rules: [
                        {
                          required: true,
                          message: "Please enter the name of exhibition"
                        }
                      ]
                    })(<Input autoComplete="off" />)}
                  </Form.Item>
                  <Form.Item {...Layout} label="Name of Exhibitor Company">
                    {getFieldDecorator("nameOfExhibitor", {
                      initialValue: "",
                      rules: [
                        {
                          required: true,
                          message: "Please enter the name of exhibitor company"
                        }
                      ]
                    })(<Input autoComplete="off" />)}
                  </Form.Item>
                  <Form.Item {...Layout} label="Stall Size">
                    {getFieldDecorator("stallSize", {
                      initialValue: ""
                    })(<Input autoComplete="off" />)}
                  </Form.Item>
                  <Form.Item {...Layout} label="Sides Open">
                    {getFieldDecorator("sidesOpen", {
                      initialValue: ""
                    })(<Input autoComplete="off" />)}
                  </Form.Item>
                  <Form.Item {...Layout} label="Stall Location">
                    {getFieldDecorator("stallLocation", {
                      initialValue: ""
                    })(<Input autoComplete="off" />)}
                  </Form.Item>
                  <Form.Item {...Layout} label="Stall Number">
                    {getFieldDecorator("stallNumber", {
                      initialValue: ""
                    })(<Input autoComplete="off" />)}
                  </Form.Item>
                </React.Fragment>
              ) : null}

              <Form.Item {...Layout} label="Event Date">
                {getFieldDecorator("eventDate", {
                  rules: [
                    {
                      required: true,
                      message: "Please select the Event Date!"
                    }
                  ]
                })(
                  <DatePicker
                    format={dateFormat}
                    disabledDate={this.disabledDate}
                  />
                )}
              </Form.Item>
              {modalCategory.name != "Stall Fabricator" ? (
                <Form.Item {...Layout} label="No of Guests">
                  {getFieldDecorator("noOfGuests", {
                    value:
                      typeof this.state.inputGuests === "number"
                        ? this.state.inputGuests
                        : 0
                  })(<InputNumber onChange={this.onChangeGuests} />)}
                </Form.Item>
              ) : null}
              <Form.Item {...Layout} label="Services required">
                {getFieldDecorator("servicesRequired", {
                  rules: [
                    {
                      required: true,
                      message: "Please select the Services you require!"
                    }
                  ]
                })(
                  <Checkbox.Group style={{ width: "100%" }}>
                    <Row>
                      {modalCategory.servicesRequired.map(servicesRequired => (
                        <Col
                          lg={{ span: 6 }}
                          md={{ span: 8 }}
                          sm={{ span: 24 }}
                          key={servicesRequired}
                        >
                          <Checkbox value={servicesRequired}>
                            {servicesRequired}
                          </Checkbox>
                        </Col>
                      ))}
                    </Row>
                  </Checkbox.Group>
                )}
              </Form.Item>
              <Form.Item label="In which city?" {...Layout}>
                {getFieldDecorator("city", { initialValue: selectedLocation })(
                  <Radio.Group
                    onChange={selectLocationInModal}
                    buttonStyle="solid"
                  >
                    {locations.map(location => (
                      <Radio.Button key={location} value={location}>
                        {location}
                      </Radio.Button>
                    ))}
                  </Radio.Group>
                )}
              </Form.Item>
              <Form.Item
                {...Layout}
                label={
                  modalCategory.name != "Stall Fabricator"
                    ? "Area of event (in " + selectedLocation + ")"
                    : "Venue"
                }
              >
                {getFieldDecorator("locality", {
                  initialValue: locations.includes(this.props.locality)
                    ? ""
                    : this.props.locality
                })(<Input autoComplete="off" />)}
              </Form.Item>
              <Form.Item label="What is your budget?" {...Layout}>
                {getFieldDecorator("budget", {
                  rules: [
                    {
                      required: true,
                      message: "Please select the budget in your mind!"
                    }
                  ]
                })(
                  <Radio.Group
                    onChange={this.handleFormLayoutChange}
                    buttonStyle=""
                  >
                    {modalCategory.budget.map(budget => (
                      <Radio key={budget._id} value={budget.option}>
                        {budget.to !== 0
                          ? "Rs." +
                            budget.from
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                            " - Rs." +
                            budget.to
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                          : "Above Rs." +
                            budget.from
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </Radio>
                    ))}
                  </Radio.Group>
                )}
              </Form.Item>
              <Form.Item
                {...Layout}
                label={
                  modalCategory.name != "Stall Fabricator"
                    ? "Sample Image (if any)"
                    : "Design"
                }
                extra="Our vendors will get a fair idea about the requirements"
              >
                {getFieldDecorator("sampleImages", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile
                })(
                  <Upload
                    name="logo"
                    listType="picture"
                    accept=".jpeg,.jpg,.png,.bmp,.gif"
                  >
                    <Button>
                      <Icon type="upload" /> Click to upload
                    </Button>
                  </Upload>
                )}
              </Form.Item>
              {modalCategory.name == "Stall Fabricator" ? (
                <Form.Item {...Layout} label="Floor Plan">
                  {getFieldDecorator("floorPlan", {
                    valuePropName: "fileList",
                    getValueFromEvent: this.normFile1
                  })(
                    <Upload
                      name="logo"
                      listType="picture"
                      accept=".jpeg,.jpg,.png,.bmp,.gif"
                    >
                      <Button>
                        <Icon type="upload" /> Click to upload
                      </Button>
                    </Upload>
                  )}
                </Form.Item>
              ) : null}

              <Form.Item
                {...Layout}
                label={
                  modalCategory.name != "Stall Fabricator"
                    ? "Any other info?"
                    : "Special Requirements"
                }
              >
                {getFieldDecorator("otherInfo", {})(
                  <TextArea
                    placeholder="Any other details apart from mentioned above?"
                    autosize
                  />
                )}
                <div style={{ margin: "24px 0" }} />
              </Form.Item>
              <LoginConsumer>
                {({ isAuthenticated }) =>
                  isAuthenticated ? (
                    <div style={{ textAlign: "center" }}>
                      <Form.Item {...tailformItemLayout}>
                        <Button type="primary" htmlType="submit" size="large">
                          Submit Enquiry
                        </Button>
                      </Form.Item>
                    </div>
                  ) : null
                }
              </LoginConsumer>
            </Form>
            <LoginConsumer>
              {({ isAuthenticated }) =>
                isAuthenticated ? null : (
                  <Login
                    layoutVariable={layoutVariable}
                    layout={Layout}
                    tailformItemLayout={tailformItemLayout}
                  />
                )
              }
            </LoginConsumer>
          </div>
        )}
      </HomeConsumer>
    );
  }
}
//   {/* //   <div>
//   //     <div>
//   //       {category.name} required for?<br />
//   //       <Radio.Group defaultValue={category.eventType[0]} buttonStyle="">
//   //   {category.eventType.map(eventType => ( */}
//     <Radio key={eventType} value={eventType}>
//       {eventType}
//     </Radio>
//   ))}
//       </Radio.Group>
//     </div>
//     <div>
// {category.servicesRequired.map(servicesRequired => (
//   <div key={servicesRequired}>{servicesRequired}</div>
// ))}
//     </div>
//     <div>
//       {category.budget.map(budget => (
//         <div key={budget}>{budget.from}</div>
//       ))}
//     </div>
//   </div>

const CategoryContent = Form.create({ name: "enquiryForm" })(Enquiry);

export default CategoryContent;
