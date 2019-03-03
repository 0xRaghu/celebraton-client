import React, { Component } from "react";
import "../styles.less";
import Head from "../components/home/head";
import VendorLogin from "../components/vendor/login";

class VendorRegister extends Component {
  render() {
    return (
      <React.Fragment>
        <Head title="CelebratON | Register or Login as our Vendor" description="Book the best customized Wedding Planner, Birthday Planner, Suprise Planner or an Event Organizer in just a few clicks" />

        <VendorLogin />
      </React.Fragment>
    );
  }
}

export default VendorRegister;
