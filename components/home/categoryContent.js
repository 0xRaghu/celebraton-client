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

const CLOUDINARY_UPLOAD_PRESET = "celebraton";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v2/celebraton/image/upload";

// cloudinary.config({
//   cloud_name: "celebraton",
//   api_key: "762772115648482",
//   api_secret: "HmVoOwYoNTKA-htyImhCfBA51qI"
// });

class Enquiry extends Component {
  state = {
    inputGuests: 0,
    imageUrl: [],
    sampleImage: [],
    newEnquiry: {},
    pickerOpen: false,
    selectedDate: null
  };
  static contextType = HomeContext;
  submitEnquiry = e => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll((err, values) => {
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
  togglePicker = () => {
    this.setState({ pickerOpen: !this.state.pickerOpen });
  };

  handleChange = selectedDate => {
    this.setState({ selectedDate, pickerOpen: !this.state.pickerOpen });
  };

  normFile = e => {
    const file = e.file;
    this.setState({ sampleImage: this.state.sampleImage.concat(file) });
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
              <Form.Item {...Layout} label="Event Date">
                {getFieldDecorator("eventDate", {
                  rules: [
                    {
                      required: true,
                      message: "Please select the Event Date!"
                    }
                  ]
                })(
                  <React.Fragment>
                    <Button
                      type="primary"
                      size="large"
                      onClick={this.togglePicker}
                    >
                      Select Date
                    </Button>
                    <br />
                    <DatePicker
                      format={dateFormat}
                      open={pickerOpen}
                      disabledDate={this.disabledDate}
                      onChange={this.handleChange}
                      disabled
                    />
                  </React.Fragment>
                )}
              </Form.Item>
              <Form.Item {...Layout} label="No of Guests">
                {getFieldDecorator("noOfGuests", {
                  value:
                    typeof this.state.inputGuests === "number"
                      ? this.state.inputGuests
                      : 0
                })(<InputNumber onChange={this.onChangeGuests} />)}
              </Form.Item>
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
                label={"Area of event (in " + selectedLocation + ")"}
              >
                {getFieldDecorator("locality", {})(
                  <Input autoComplete="off" />
                )}
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
                label="Sample Image (if any)"
                extra="Our vendors will get a fair idea about the requirements"
              >
                {getFieldDecorator("sampleImages", {
                  valuePropName: "fileList",
                  getValueFromEvent: this.normFile
                })(
                  <Upload name="logo" listType="picture" multiple={false}>
                    <Button>
                      <Icon type="upload" /> Click to upload
                    </Button>
                  </Upload>
                )}
              </Form.Item>
              <Form.Item {...Layout} label="Any other info?">
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
