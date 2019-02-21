import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import axios from "axios";

/* First we will make a new context */
const HomeContext = React.createContext();

/* Then create a provider Component */
class HomeProvider extends Component {
  state = {
    modalCategory: [],
    category: [],
    locations: [],
    selectedLocation: "Chennai",
    disabled: false,
    visible: false,
    loading: false,
    currentUser: {},
    isAuthenticated: false
  };

  updateCatandLoc = (categories, locations) => {
    this.setState({
      category: categories,
      locations: locations[0].locations,
      modalCategory: categories[0]
    });
  };
  selectLocation = event => {
    this.setState({ selectedLocation: event });
  };
  updateLimit = async () => {
    this.setState({ disabled: true });
    axios
      .get("/api/categories/allCategories/7/5")
      .then(categories => categories.data)
      .then(category =>
        category.map(cat =>
          this.setState(prevState => ({
            category: [...prevState.category, cat]
          }))
        )
      );
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  clickModal = category => {
    console.log(category);
    this.setState({ visible: true, modalCategory: category });
  };

  selectLocationInModal = event => {
    this.setState({ selectedLocation: event.target.value });
  };
  selectLocationInForm = location => {
    this.setState({ selectedLocation: location });
  };

  render() {
    return (
      <HomeContext.Provider
        value={{
          category: this.state.category,
          locations: this.state.locations,
          selectedLocation: this.state.selectedLocation,
          selectLocation: this.selectLocation,
          modalCategory: this.state.modalCategory,
          visible: this.state.visible,
          disabled: this.state.disabled,
          handleOk: this.handleOk,
          handleCancel: this.handleCancel,
          updateLimit: this.updateLimit,
          clickModal: this.clickModal,
          selectLocationInModal: this.selectLocationInModal,
          updateCatandLoc: this.updateCatandLoc,
          selectLocationInForm: this.selectLocationInForm
        }}
      >
        {this.props.children}
      </HomeContext.Provider>
    );
  }
}

/* then make a consumer which will surface it */
const HomeConsumer = HomeContext.Consumer;

export default HomeProvider;
export { HomeConsumer, HomeContext };
