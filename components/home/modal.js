import React, { Component } from "react";
import { Modal, Button } from "antd";
import CategoryContent from "./categoryContent";
import { HomeConsumer, HomeContext } from "../provider/homeProvider";

class Popup extends Component {
  static contextType = HomeContext;
  render() {
    const { modalCategory, visible, handleOk, handleCancel } = this.context;
    return (
      <HomeConsumer>
        {() => (
          <div id="enquiryModal">
            <Modal
              title={modalCategory.name + " Enquiry"}
              visible={visible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={
                <div style={{ textAlign: "center" }}>
                  Kindly fill the above form so we can find you the best vendor
                  partners
                </div>
              }
            >
              <CategoryContent modalCategory={modalCategory} />
            </Modal>
          </div>
        )}
      </HomeConsumer>
    );
  }
}
export default Popup;
