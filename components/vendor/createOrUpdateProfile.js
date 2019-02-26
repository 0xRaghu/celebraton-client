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
  Icon,
  Radio
} from "antd";
import WrappedNormalLoginForm from "../contactForm";
import Router from "next/router";
import { LoginContext } from "../provider/loginProvider";
import { HomeConsumer } from "../provider/homeProvider";
import fetch from "isomorphic-unfetch";
import axios from "axios";
import { storage } from "../../firebase";
const { TextArea } = Input;

class ManageProfile extends Component {
  static contextType = LoginContext;
  state = {
    categories: [],
    locations: [],
    budgetBracket: 0,
    portfolioImages: [],
    imageUrl: [],
    artistSelected: false
  };

  componentDidMount() {
    axios.get("/api/categories/allCategories/7/0").then(categories => {
      this.setState({ categories: categories.data });
    });

    axios
      .get("/api/admin/getLocations")
      .then(loc => this.setState({ locations: loc.data[0].locations }));
    typeof this.props.profile !== "undefined"
      ? this.setState({ imageUrl: this.props.profile.images })
      : null;
    typeof this.props.profile !== "undefined"
      ? this.setState({
          artistSelected: this.props.profile.categories.includes("Artist")
        })
      : null;
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
    const file = e.file;
    this.setState({ portfolioImages: this.state.portfolioImages.concat(file) });
  };
  catChange = name => {
    if (name === "Artist") {
      this.setState({ artistSelected: !this.state.artistSelected });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err && typeof this.props.profile === "undefined") {
        // console.log("Received values of form: ", values);
        axios.post("/api/profiles/addProfile", values).then(profile => {
          this.state.portfolioImages.map(image => {
            const upload = storage
              .ref(`/vendorImages/${image.name}`)
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
                  .ref("vendorImages")
                  .child(image.name)
                  .getDownloadURL()
                  .then(url => {
                    let temp = { original: url, thumbnail: url };
                    this.setState({
                      imageUrl: this.state.imageUrl.concat(temp)
                    });
                    axios.post(
                      `/api/profiles/addImages/${profile.data._id}`,
                      this.state.imageUrl
                    );
                  });
              }
            );
          });
          this.context.updateProfile(profile.data);
        });
      }
      if (!err && typeof this.props.profile !== "undefined") {
        // console.log("Received values of form: ", values);
        axios.post("/api/profiles/updateProfile", values).then(profile => {
          this.state.portfolioImages.map(image => {
            const upload = storage
              .ref(`/vendorImages/${image.name}`)
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
                  .ref("vendorImages")
                  .child(image.name)
                  .getDownloadURL()
                  .then(url => {
                    let temp = { original: url, thumbnail: url };
                    this.setState({
                      imageUrl: this.state.imageUrl.concat(temp)
                    });
                    axios.post(
                      `/api/profiles/addImages/${profile.data._id}`,
                      this.state.imageUrl
                    );
                  });
              }
            );
          });
          this.context.updateProfile(profile.data);
        });
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
              {
                initialValue:
                  typeof profile !== "undefined" ? profile.companyName : ""
              },
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
              {
                initialValue:
                  typeof profile !== "undefined" ? profile.description : ""
              },
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
                initialValue:
                  typeof profile !== "undefined" ? profile.categories : null
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
                      <Checkbox
                        value={category.name}
                        onChange={() => this.catChange(category.name)}
                      >
                        {category.name}
                      </Checkbox>
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
                initialValue:
                  typeof profile !== "undefined" ? profile.locations : null
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
              initialValue:
                typeof profile !== "undefined"
                  ? profile.primaryLocation
                    ? profile.primaryLocation
                    : "Chennai"
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
              {
                initialValue:
                  typeof profile !== "undefined" ? profile.budgetBracket : ""
              },
              {
                value:
                  typeof this.state.budgetBracket === "number"
                    ? this.state.budgetBracket
                    : 0
              }
            )(<InputNumber onChange={this.onChangeBudgetBracket} />)}
          </Form.Item>
          <Form.Item {...Layout} label="Experience">
            {getFieldDecorator("experience", {
              initialValue:
                typeof profile !== "undefined" ? profile.experience : ""
            })(<Input placeholder="Experience in the events industry" />)}
          </Form.Item>
          <Form.Item {...Layout} label="Events Covered">
            {getFieldDecorator("eventsCovered", {
              initialValue:
                typeof profile !== "undefined" ? profile.eventsCovered : ""
            })(<Input placeholder="Enter number of events covered till now" />)}
          </Form.Item>
          <Form.Item {...Layout} label="Cancellation Policy">
            {getFieldDecorator("cancellationPolicy", {
              initialValue:
                typeof profile !== "undefined" ? profile.cancellationPolicy : ""
            })(<TextArea placeholder="Cancellation Policy if any" autosize />)}
            <div style={{ margin: "24px 0" }} />
          </Form.Item>
          <Form.Item {...Layout} label="Payment Terms">
            {getFieldDecorator("paymentTerms", {
              initialValue:
                typeof profile !== "undefined" ? profile.paymentTerms : ""
            })(
              <TextArea
                placeholder="Advance(%), Payment on event date(%), Payment on Delivery(%)"
                autosize
              />
            )}
            <div style={{ margin: "24px 0" }} />
          </Form.Item>
          {this.state.artistSelected ? (
            <React.Fragment>
              <Form.Item {...Layout} label="Artist Genre">
                {getFieldDecorator("artistGenre", {
                  initialValue: profile.artistGenre
                })(<Input placeholder="Enter the Genre" />)}
              </Form.Item>
              <Form.Item {...Layout} label="Languages Known">
                {getFieldDecorator("languagesKnown", {
                  initialValue: profile.languagesKnown
                })(<Input placeholder="Enter the Languages you know" />)}
              </Form.Item>
              <Form.Item {...Layout} label="Troupe Size (Performing)">
                {getFieldDecorator("troupeSizeP", {
                  initialValue: profile.troupeSizeP
                })(<Input placeholder="Enter number" />)}
              </Form.Item>
              <Form.Item {...Layout} label="Troupe Size (Non-Performing)">
                {getFieldDecorator("troupeSizeNP", {
                  initialValue: profile.troupeSizeNP
                })(<Input placeholder="Enter number" />)}
              </Form.Item>
              <Form.Item {...Layout} label="Performance Duration">
                {getFieldDecorator("performanceDuration", {
                  initialValue: profile.performanceDuration
                })(<Input placeholder="Duration per performance" />)}
              </Form.Item>
              <Form.Item {...Layout} label="Event Preference">
                {getFieldDecorator("eventPreference", {
                  initialValue: profile.eventPreference
                })(<Input placeholder="What do you prefer?" />)}
              </Form.Item>
              <Form.Item label="Open to Travel?" {...Layout}>
                {getFieldDecorator("openToTravel", {
                  initialValue: profile.openToTravel
                })(
                  <Radio.Group buttonStyle="solid">
                    <Radio.Button value={true}>Yes</Radio.Button>
                    <Radio.Button value={false}>No</Radio.Button>
                  </Radio.Group>
                )}
              </Form.Item>
              <Form.Item {...Layout} label="Managed By">
                {getFieldDecorator("managedBy", {
                  initialValue: profile.managedBy
                })(<Input placeholder="Self or Manager?" />)}
              </Form.Item>

              <Form.Item {...Layout} label="Manager Name">
                {getFieldDecorator("managerName", {
                  initialValue: profile.managerName
                })(<Input placeholder="Enter your manager's name" />)}
              </Form.Item>
              <Form.Item {...Layout} label="Manager Mobile">
                {getFieldDecorator("managerNumber", {
                  initialValue: profile.managerNumber
                })(<Input placeholder="Enter your manager's mobile" />)}
              </Form.Item>
              <Form.Item {...Layout} label="Manager Email">
                {getFieldDecorator("managerMail", {
                  initialValue: profile.managerMail
                })(<Input placeholder="Enter your manager's email id" />)}
              </Form.Item>
            </React.Fragment>
          ) : null}
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
            {getFieldDecorator(
              "videos",
              {
                initialValue:
                  typeof profile !== "undefined" ? profile.videos.join(",") : ""
              },
              {}
            )(
              <TextArea
                placeholder={`Provide youtube urls seperated by comma ${"\n"}ex., https://www.youtube.com/watch?v=7GBCHRxq3Sc,https://www.youtube.com/watch?v=VRdaHFy0FcY`}
              />
            )}
          </Form.Item>
          <div style={{ textAlign: "center" }}>
            <Form.Item {...tailformItemLayout}>
              <Button type="primary" htmlType="submit">
                {typeof profile !== "undefined"
                  ? "Update Profile"
                  : "Create Profile"}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </React.Fragment>
    );
  }
}

export default Form.create({ name: "manage-profile" })(ManageProfile);
