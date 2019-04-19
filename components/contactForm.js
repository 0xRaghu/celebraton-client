import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  notification
} from "antd";
import Router from "next/router";
import axios from "axios";

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log("Received values of form: ", values);
        let role;
        Router.pathname === "/vendor-login"
          ? (role = "Vendor")
          : (role = "Customer");
        values.profile = window.location.pathname;
        axios.post("/api/contactForms/" + role, values).then(res => {
          notification.open({
            message: `Thank you ${res.data.name}, we will call you soon`,
            description: `Thanks for choosing CelebratON for your celebrations`,
            duration: 10
          });
        });
        this.props.form.resetFields();
      }
    });

    // this.props.onClose();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Row>
          <Col xs={{ span: 20, offset: 2 }} lg={{ span: 12, offset: 6 }}>
            <h2 style={{ align: "center", color: this.props.color }}>
              Enquire Now
            </h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator("name", {
                  rules: [
                    {
                      required: true,
                      message: "Please enter your name!"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="text" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Name"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("mobile", {
                  rules: [
                    {
                      required: true,
                      message: "Please enter your Mobile Number"
                    },
                    {
                      min: 10,
                      message: "Mobile number must be min 10 digits long"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="text" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="input"
                    placeholder="Mobile"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Enquire Now
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <style jsx>{`
          #components-form-demo-normal-login .login-form {
            max-width: 30px;
          }
          .ant-input {
            padding: 50px;
          }
          #components-form-demo-normal-login .login-form-button {
            width: 100%;
          }
          h1,
          h2 {
            color: white;
          }
        `}</style>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default WrappedNormalLoginForm;
