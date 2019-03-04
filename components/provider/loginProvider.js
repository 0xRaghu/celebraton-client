import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../setAuthToken";
import Router from "next/router";
import { notification, Icon } from "antd";

/* First we will make a new context */
const LoginContext = React.createContext();

/* Then create a provider Component */
class LoginProvider extends Component {
  state = {
    currentUser: {},
    isAuthenticated: false,
    otpSent: false,
    userAvailable: false,
    mobile: "",
    otp: "",
    name: "",
    email: "",
    drawerVisible: false,
    errors: {},
    currentProfile: {
      images: [{}],
      videos: [],
      enquiriesRead: [],
      wishList: []
    },
    deactivated: false
  };
  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.jwtToken);
      axios.get("/api/profiles/getProfile").then(profile => {
        this.setState({
          currentUser: decoded,
          isAuthenticated: true,
          currentProfile: profile.data
        });
      }).catch(err=>Router.push("/"));
    } else {
      Router.push("/");
    }
  }
  showDrawer = () => {
    this.setState({
      drawerVisible: true
    });
  };

  onCloseDrawer = () => {
    this.setState({
      drawerVisible: false
    });
  };
  setCurrentUser = decoded => {};
  handleLogin = () => {
    let values = {};
    values.mobile = this.state.mobile;
    values.otp = this.state.otp;
    values.name = this.state.name;
    values.email = this.state.email;
    axios
      .post("/api/users/registerOrLogin", values)
      .then(payload => {
        if (payload.data.success === true) {
          localStorage.setItem("jwtToken", payload.data.token);
          setAuthToken(payload.data.token);
          const decoded = jwt_decode(payload.data.token);
          this.setState({
            currentUser: decoded,
            isAuthenticated: true,
            drawerVisible: false
          });
          if (this.state.currentUser.role === "vendor") {
            axios
              .get("/api/profiles/getProfile")
              .then(profile => Router.push("/dashboard"))
              .catch(err => Router.push("/dashboard"));
          }
        } else {
          this.setState({ errors: payload.data.errors });
          notification.open({
            message: "Incorrect OTP",
            icon: <Icon type="close" style={{ color: "red" }} />
          });
        }
      })
      .catch(err => console.log(err));
  };
  updateProfile = profile => {
    this.setState({ currentProfile: profile, deactivated: false });
  };
  updateNumberState = e => {
    this.setState({ mobile: e.target.value });
  };
  updateOtpState = e => {
    this.setState({ otp: e.target.value });
  };
  updateNameState = e => {
    this.setState({ name: e.target.value });
  };
  updateEmailState = e => {
    this.setState({ email: e.target.value });
  };
  signOut = () => {
    localStorage.setItem("jwtToken", "");
    this.setState({
      currentUser: {},
      isAuthenticated: false
    });
    Router.push("/");
  };
  deactivateDashboard = () => {
    this.setState({ deactivated: true });
  };
  findUser = async () => {
    let response;
    //check user
    axios
      .get("/api/users/currentUser/" + this.state.mobile)
      .then(user => {
        console.log(user);
        if (user) {
          this.setState({
            userAvailable: true
          });
        }
      })
      .catch(err =>
        this.setState({
          userAvailable: false
        })
      );

    //send otp

    axios
      .post("/api/users/sendOTP", {
        mobile: this.state.mobile,
        role: Router.pathname === "/vendor-login" ? "vendor" : "customer"
      })
      .then(otp =>
        this.setState({
          otpSent: true
        })
      )
      .catch(err =>
        this.setState({
          otpSent: true
        })
      );
  };
  render() {
    return (
      <LoginContext.Provider
        value={{
          disabled: this.state.disabled,
          otpSent: this.state.otpSent,
          userAvailable: this.state.userAvailable,
          mobile: this.state.mobile,
          otp: this.state.otp,
          errors: this.state.errors,
          // handleSubmit: this.handleSubmit,
          handleLogin: this.handleLogin,
          updateNumberState: this.updateNumberState,
          updateOtpState: this.updateOtpState,
          findUser: this.findUser,
          drawerVisible: this.state.drawerVisible,
          showDrawer: this.showDrawer,
          onCloseDrawer: this.onCloseDrawer,
          currentUser: this.state.currentUser,
          isAuthenticated: this.state.isAuthenticated,
          name: this.state.name,
          email: this.state.email,
          updateNameState: this.updateNameState,
          updateEmailState: this.updateEmailState,
          updateProfile: this.updateProfile,
          signOut: this.signOut,
          currentProfile: this.state.currentProfile,
          deactivated: this.state.deactivated,
          deactivateDashboard: this.deactivateDashboard
        }}
      >
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

/* then make a consumer which will surface it */
const LoginConsumer = LoginContext.Consumer;

export default LoginProvider;
export { LoginConsumer, LoginContext };
