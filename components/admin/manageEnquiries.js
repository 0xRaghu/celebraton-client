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

import { storage } from "../../firebase";

import { HomeConsumer, HomeContext } from "../provider/homeProvider";
const { Meta } = Card;

class ManageEnquiriesAdmin extends Component {
  componentDidMount() {}
  state = {
    drawerVisible: false,
    currentId: "",
    currentEnquiry: {},
    initLoading: true,
    loading: false,
    enquiries: [],
    list: [],
    count: 0,
    junk: "",
    inputGuests: 0,
    modalCategory: {
      name: "",
      eventType: [],
      servicesRequired: [],
      budget: [{ from: 0, to: 0, order: 0, leadPrice: 0 }]
    },
    categories: [],
    locations: [],
    selectedLocation: "",
    enquiryMode: "create",
    sampleImage: [],
    imageUrl: []
  };
  static contextType = HomeContext;

  componentDidMount() {
    axios
      .get("/api/admin/allCategories")
      .then(categories => categories.data)
      .then(category =>
        this.setState({
          categories: category,
          modalCategory: category[0]
        })
      );

    axios
      .get("/api/admin/getLocations")
      .then(locations => locations.data)
      .then(locations =>
        this.setState({
          locations: locations[0].locations,
          selectedLocation: locations[0].locations[0]
        })
      );
    this.getData(res => {
      this.setState({
        initLoading: false,
        enquiries: res,
        list: res,
        count: this.state.count + 20
      });
    });

    axios
      .get("/api/enquiries/currentEnquiry/" + this.state.currentEnquiry._id)
      .then(enquiry =>
        this.setState({ currentEnquiry: enquiry.data, drawerVisible: true })
      );
  }

  getData = callback => {
    axios
      .post(`/api/enquiries/allEnquiries/20/${this.state.count}`)
      .then(res => callback(res.data));
  };

  onLoadMore = () => {
    this.setState({
      loading: true,
      count: this.state.count + 20
    });
    this.getData(res => {
      const enquiries = this.state.enquiries.concat(res);
      this.setState(
        {
          enquiries,
          loading: false
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
  openEnquiry = id => {
    axios.get("/api/enquiries/currentEnquiry/" + id).then(enquiry => {
      this.setState({
        currentEnquiry: enquiry.data,
        selectedLocation: enquiry.data.city,
        enquiryMode: "update"
      }),
        this.props.form.setFieldsValue({
          category: enquiry.data.category,
          serviceFor: enquiry.data.serviceFor,
          eventDate: moment(enquiry.data.eventDate),
          noOfGuests: enquiry.data.noOfGuests,
          city: enquiry.data.city,
          locality: enquiry.data.locality,
          budget: enquiry.data.budgetRange.option,
          otherInfo: enquiry.data.otherInfo,
          isVerified: enquiry.data.isVerified,
          source: enquiry.data.source,
          celebratonComment: enquiry.data.celebratonComment
        }),
        this.state.categories.map(category =>
          category.name === enquiry.data.category
            ? this.setState({ modalCategory: category })
            : null
        );
    });
  };
  submitEnquiry = e => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        let request = {
          enquiry: values,
          category: this.state.modalCategory,
          id: this.state.currentEnquiry._id,
          mode: this.state.enquiryMode
        };
        axios.post("/api/admin/adminManageEnquiry", request).then(enq => {
          const index = this.state.enquiries.findIndex(
            x => x._id === this.state.currentEnquiry._id
          );

          (this.state.enquiries[index] = enq.data),
            this.setState({ currentEnquiry: enq.data });

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
                      `/api/enquiries/addImages/${enq.data._id}`,
                      this.state.imageUrl
                    );
                  });
              }
            );
          });
          this.props.form.resetFields();
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
  selectCategory = category => {
    this.setState({ modalCategory: category });
  };
  render() {
    const { selectLocationInModal } = this.context;
    const {
      initLoading,
      loading,
      list,
      enquiries,
      modalCategory,
      locations,
      selectedLocation,
      categories,
      currentEnquiry
    } = this.state;
    const loadMore =
      !initLoading && !loading ? (
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
      ) : null;

    typeof currentEnquiry.budgetRange !== "undefined"
      ? null
      : (currentEnquiry.budgetRange = { from: 0, to: 0 });
    typeof currentEnquiry.user !== "undefined"
      ? null
      : (currentEnquiry.user = { name: "", email: "", mobile: "" });

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
    const { inputGuests } = this.state;
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
      <React.Fragment>
        <h1 style={{ textAlign: "center" }}>Create or Update Enquiries</h1>
        <Form layout={layoutVariable} onSubmit={this.submitEnquiry}>
          <Form.Item label="Select Category" {...Layout}>
            {getFieldDecorator("category", {
              initialValue: modalCategory.name
            })(
              <Radio.Group buttonStyle="solid">
                {categories.map(category => (
                  <Radio.Button
                    key={category._id}
                    value={category.name}
                    onClick={() => this.selectCategory(category)}
                    checked="true"
                  >
                    {category.name}
                  </Radio.Button>
                ))}
              </Radio.Group>
            )}
          </Form.Item>
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
            {getFieldDecorator("eventDate", {})(
              <DatePicker
                format={dateFormat}
                disabledDate={this.disabledDate}
              />
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
              initialValue: currentEnquiry.servicesRequired
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
            {getFieldDecorator("city", {
              initialValue: selectedLocation
            })(
              <Radio.Group onChange={selectLocationInModal} buttonStyle="solid">
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
            {getFieldDecorator("locality", {})(<Input />)}
          </Form.Item>
          <Form.Item label="What is your budget?" {...Layout}>
            {getFieldDecorator("budget")(
              <Radio.Group
                onChange={this.handleFormLayoutChange}
                buttonStyle=""
              >
                {modalCategory.budget.map(budget => (
                  <Radio key={budget.from} value={budget.option}>
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
              <Upload name="logo" listType="picture" multiple={true}>
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
          <Form.Item {...Layout} label="User Name">
            {getFieldDecorator("name", {
              initialValue: currentEnquiry.user.name
            })(<Input />)}
          </Form.Item>
          <Form.Item {...Layout} label="User Mobile">
            {getFieldDecorator("mobile", {
              initialValue: currentEnquiry.user.mobile
            })(<Input />)}
          </Form.Item>
          <Form.Item {...Layout} label="User Email">
            {getFieldDecorator("email", {
              initialValue: currentEnquiry.user.email
            })(<Input />)}
          </Form.Item>
          <Form.Item {...Layout} label="CelebratON Comments">
            {getFieldDecorator("celebratonComment", {
              initialValue: currentEnquiry.celebratonComment
            })(
              <TextArea
                placeholder="Add comments gathered from the verification call"
                autosize
              />
            )}
            <div style={{ margin: "24px 0" }} />
          </Form.Item>

          <Form.Item label="Verified" {...Layout}>
            {getFieldDecorator("isVerified", {
              initialValue: currentEnquiry.isVerified
            })(
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={true}>Verified</Radio.Button>
                <Radio.Button value={false}>Not Verified</Radio.Button>
              </Radio.Group>
            )}
          </Form.Item>
          <Form.Item label="Mail Notification" {...Layout}>
            {getFieldDecorator("sendNotification", {
              initialValue: true
            })(
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={true}>Send</Radio.Button>
                <Radio.Button value={false}>Dont send</Radio.Button>
              </Radio.Group>
            )}
          </Form.Item>
          <Form.Item label="Source" {...Layout}>
            {getFieldDecorator("source")(
              <Radio.Group
                onChange={this.handleFormLayoutChange}
                buttonStyle=""
              >
                <Radio value="Website">Website</Radio>
                <Radio value="Call">Call</Radio>
                <Radio value="Chat">Chat</Radio>
                <Radio value="Other">Other</Radio>
              </Radio.Group>
            )}
          </Form.Item>
          <div style={{ textAlign: "center" }}>
            <Form.Item {...tailformItemLayout}>
              <Button type="primary" htmlType="submit" size="large">
                Create/Update Enquiry
              </Button>
            </Form.Item>
          </div>
        </Form>

        <div style={{ background: "#ECECEC", padding: "30px" }}>
          <h1 style={{ textAlign: "center" }}>All Enquiries</h1>
          <List
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={enquiries}
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
            renderItem={enquiry => (
              <List.Item onClick={() => this.openEnquiry(enquiry._id)}>
                <Skeleton avatar title={false} loading={enquiry.loading} active>
                  <Card
                    hoverable
                    title={enquiry.category}
                    bordered={false}
                    style={{
                      height: "180px",
                      background: enquiry.isVerified ? null : null
                    }}
                  >
                    For <b>{enquiry.serviceFor}</b> <br />
                    on <b>{moment(enquiry.eventDate).format("DD MMM, YYYY")}</b>
                    <br />
                    Bought by: <b>{enquiry.interestedPartners.length}/5</b>{" "}
                    vendors
                    <Meta
                      description={
                        "Posted: " +
                        moment(enquiry.createdAt).from(moment(Date.now()))
                      }
                      style={{
                        paddingTop: "10px",
                        textAlign: "right",
                        position: "relative"
                      }}
                    />
                  </Card>
                </Skeleton>
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

const ManageEnquiries = Form.create({ name: "enquiryFormAdmin" })(
  ManageEnquiriesAdmin
);

export default ManageEnquiries;
