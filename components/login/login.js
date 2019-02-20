import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Alert } from "antd";
import axios from "axios";
import Link from "next/link";
import { LoginConsumer, LoginContext } from "../provider/loginProvider";

class Login extends Component {
  static contextType = LoginContext;
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.mobile = this.context.mobile;
        axios
          .post("/api/users/registerOrLogin", values)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      updateNumberState,
      mobile,
      otpSent,
      // handleSubmit,
      findUser,
      updateOtpState,
      userAvailable,
      handleLogin,
      otp,
      name,
      email,
      updateNameState,
      updateEmailState,
      errors
    } = this.context;

    return (
      <LoginConsumer>
        {() => (
          <React.Fragment>
            <Form
              layout={this.props.layoutVariable}
              onSubmit={this.handleSubmit}
              className="login-form"
            >
              {otpSent ? null : (
                <React.Fragment>
                  <Form.Item label="Mobile Number" {...this.props.layout}>
                    {getFieldDecorator("mobile", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your Mobile Number!"
                        },
                        {
                          type: "number",
                          message: "Enter a valid mobile number!"
                        }
                      ],
                      value: { mobile }
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="user"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Mobile Number"
                        onChange={updateNumberState}
                        disabled={otpSent}
                      />
                    )}
                  </Form.Item>
                  <div style={{ textAlign: "center" }}>
                    <Button
                      type="primary"
                      className="login-form-button"
                      onClick={findUser}
                    >
                      Send OTP
                    </Button>
                  </div>
                </React.Fragment>
              )}
              {otpSent ? (
                <Form.Item label="Enter OTP" {...this.props.layout}>
                  {getFieldDecorator("otp", {
                    rules: [
                      {
                        required: true,
                        message: "Please input the 4 digit OTP!"
                      }
                    ],
                    value: { otp }
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="lock"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="OTP"
                      onChange={updateOtpState}
                    />
                  )}
                </Form.Item>
              ) : null}
            </Form>
            {userAvailable ? (
              otpSent ? (
                <div style={{ textAlign: "center" }}>
                  <Form.Item {...this.props.tailFormItemLayout}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      onClick={handleLogin}
                    >
                      Log in
                    </Button>
                  </Form.Item>
                </div>
              ) : null
            ) : otpSent ? (
              <Form
                onSubmit={this.handleSubmit}
                layout={this.props.layoutVariable}
                className="login-form"
              >
                <Form.Item label="Name" {...this.props.layout}>
                  {getFieldDecorator("name", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your name!"
                      }
                    ],
                    value: { name }
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Name"
                      onChange={updateNameState}
                    />
                  )}
                </Form.Item>
                <Form.Item label="Email" {...this.props.layout}>
                  {getFieldDecorator("email", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your email!"
                      }
                    ],
                    value: { email }
                  })(
                    <Input
                      prefix={
                        <Icon
                          type="user"
                          style={{ color: "rgba(0,0,0,.25)" }}
                        />
                      }
                      placeholder="Email"
                      onChange={updateEmailState}
                    />
                  )}
                </Form.Item>
                <div style={{ textAlign: "center" }}>
                  <Form.Item {...this.props.tailFormItemLayout}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      onClick={handleLogin}
                    >
                      Register
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            ) : null}
          </React.Fragment>
        )}
      </LoginConsumer>
    );
  }
}

export default Form.create({ name: "login" })(Login);
