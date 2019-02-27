import React, { Component } from "react";
import "../styles.less";
import Head from "../components/home/head";
import VendorLogin from "../components/vendor/login";

class VendorRegister extends Component {
  render() {
    return (
      <React.Fragment>
        <Head title="Home" />
        <VendorLogin />
      </React.Fragment>
    );
  }
}

export default VendorRegister;
