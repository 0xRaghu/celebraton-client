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
  List,
  Skeleton,
  Radio
} from "antd";
import Router from "next/router";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import axios from "axios";
import reqwest from "reqwest";
import { withRouter } from "next/router";
const { TextArea } = Input;

class AdminManageProfile extends Component {
  state = {
    categories: [],
    locations: [],
    budgetBracket: 0,
    profiles: [],
    profile: {},
    initLoading: true,
    count: 0,
    loading: false,
    profileMode: "create"
  };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        profiles: res,
        count: this.state.count + 2
      });
    });
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
  getData = callback => {
    axios
      .get(`/api/profiles/allProfiles/2/${this.state.count}`)
      .then(res => callback(res.data));
  };
  onLoadMore = () => {
    this.setState({
      loading: true,
      count: this.state.count + 2
    });
    this.getData(res => {
      const profiles = this.state.profiles.concat(res);
      this.setState(
        {
          profiles,
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

  openProfileDrawer = id => {
    this.setState({
      drawerVisible: true,
      currentId: id,
      profileMode: "update"
    });

    axios
      .get("/api/profiles/adminCurrentProfile/" + id)
      .then(profile => this.setState({ profile: profile.data }));
  };
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
        let request = {
          values: values,
          mode: this.state.profileMode
        };
        axios.post("/api/admin/adminManageProfile", request).then(profile => {
          const index = this.state.profiles.findIndex(
            x => x._id === this.state.profile._id
          );

          (this.state.profiles[index] = profile.data),
            this.setState({
              profile: profile.data
            });
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
    const {
      categories,
      locations,
      profiles,
      profile,
      initLoading,
      loading
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
    typeof profile.user !== "undefined"
      ? null
      : (profile.user = { name: "", email: "", mobile: "" });
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
                    message: "Please input your Company Name!"
                  }
                ]
              }
            )(<Input placeholder="Business Name" />)}
          </Form.Item>
          <Form.Item {...Layout} label="Description">
            {getFieldDecorator(
              "description",
              { initialValue: profile.description },
              {}
            )(
              <TextArea
                placeholder="Provide details about your business"
                autosize
              />
            )}
            <div style={{ margin: "24px 0" }} />
          </Form.Item>
          <Form.Item {...Layout} label="Choose Categories">
            {getFieldDecorator("categories", {
              initialValue: profile.categories
            })(
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
            {getFieldDecorator("locations", {
              initialValue: profile.locations
            })(
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
          <Form.Item {...Layout} label="User Name">
            {getFieldDecorator("name", {
              initialValue: profile.user.name
            })(<Input />)}
          </Form.Item>
          <Form.Item {...Layout} label="User Mobile">
            {getFieldDecorator("mobile", {
              initialValue: profile.user.mobile
            })(<Input />)}
          </Form.Item>
          <Form.Item {...Layout} label="User Email">
            {getFieldDecorator("email", {
              initialValue: profile.user.email
            })(<Input />)}
          </Form.Item>

          <Form.Item label="Authorized" {...Layout}>
            {getFieldDecorator("isAuthorized", {
              initialValue: profile.isAuthorized
            })(
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={true}>Authorized</Radio.Button>
                <Radio.Button value={false}>Not Authorized</Radio.Button>
              </Radio.Group>
            )}
          </Form.Item>
          <div style={{ textAlign: "center" }}>
            <Form.Item {...tailformItemLayout}>
              <Button type="primary" htmlType="submit">
                Add/Update Profile
              </Button>
            </Form.Item>
            {this.state.profileMode === "update" ? (
              <Form.Item {...tailformItemLayout}>
                <Link href={"/profile?profileId=" + profile.slug} prefetch>
                  <a target="_blank">
                    <Button type="primary">View Profile</Button>
                  </a>
                </Link>
              </Form.Item>
            ) : null}
          </div>
        </Form>
        <div style={{ background: "#ECECEC", padding: "30px" }}>
          <h1 style={{ textAlign: "center" }}>All Profiles</h1>
          <List
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={profiles}
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
            renderItem={profile => (
              <List.Item onClick={() => this.openProfileDrawer(profile._id)}>
                <Skeleton avatar title={false} loading={profile.loading} active>
                  <Card hoverable title={profile.companyName} bordered={false}>
                    <b>{profile.primaryLocation}</b> <br />
                    {/* <b>
                          {moment(enquiry.eventDate).format("DD MMM, YYYY")}
                        </b>
                        <br />
                        Bought by: <b>
                          {enquiry.interestedPartners.length}/5
                        </b>{" "}
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
                        /> */}
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

export default Form.create({ name: "manage-profile" })(AdminManageProfile);
