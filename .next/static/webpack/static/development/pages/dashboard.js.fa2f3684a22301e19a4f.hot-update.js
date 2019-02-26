webpackHotUpdate("static/development/pages/dashboard.js",{

/***/ "./components/vendor/createOrUpdateProfile.js":
/*!****************************************************!*\
  !*** ./components/vendor/createOrUpdateProfile.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login */ "./components/login/login.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav */ "./components/nav.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _contactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contactForm */ "./components/contactForm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _provider_loginProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../provider/loginProvider */ "./components/provider/loginProvider.js");
/* harmony import */ var _provider_homeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../provider/homeProvider */ "./components/provider/homeProvider.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../firebase */ "./firebase/index.js");
var _jsxFileName = "/Users/raghu/Celebraton-client/components/vendor/createOrUpdateProfile.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var TextArea = antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea;

var ManageProfile =
/*#__PURE__*/
function (_Component) {
  _inherits(ManageProfile, _Component);

  function ManageProfile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ManageProfile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ManageProfile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      categories: [],
      locations: [],
      budgetBracket: 0,
      portfolioImages: [],
      imageUrl: [],
      artistSelected: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeBudgetBracket", function (value) {
      _this.setState({
        budgetBracket: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "normFile", function (e) {
      var file = e.file;

      _this.setState({
        portfolioImages: _this.state.portfolioImages.concat(file)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "catChange", function (name) {
      if (name === "Artist") {
        _this.setState({
          artistSelected: !_this.state.artistSelected
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (!err && typeof _this.props.profile === "undefined") {
          // console.log("Received values of form: ", values);
          axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("/api/profiles/addProfile", values).then(function (profile) {
            _this.state.portfolioImages.map(function (image) {
              var upload = _firebase__WEBPACK_IMPORTED_MODULE_10__["storage"].ref("/vendorImages/".concat(image.name)).put(image.originFileObj);
              upload.on("state_changed", function (snapshot) {
                console.log("progress");
              }, function (error) {
                console.log("error");
              }, function () {
                _firebase__WEBPACK_IMPORTED_MODULE_10__["storage"].ref("vendorImages").child(image.name).getDownloadURL().then(function (url) {
                  var temp = {
                    original: url,
                    thumbnail: url
                  };

                  _this.setState({
                    imageUrl: _this.state.imageUrl.concat(temp)
                  });

                  axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("/api/profiles/addImages/".concat(profile.data._id), _this.state.imageUrl);
                });
              });
            });

            _this.context.updateProfile(profile.data);
          });
        }

        if (!err && typeof _this.props.profile !== "undefined") {
          // console.log("Received values of form: ", values);
          axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("/api/profiles/updateProfile", values).then(function (profile) {
            _this.state.portfolioImages.map(function (image) {
              var upload = _firebase__WEBPACK_IMPORTED_MODULE_10__["storage"].ref("/vendorImages/".concat(image.name)).put(image.originFileObj);
              upload.on("state_changed", function (snapshot) {
                console.log("progress");
              }, function (error) {
                console.log("error");
              }, function () {
                _firebase__WEBPACK_IMPORTED_MODULE_10__["storage"].ref("vendorImages").child(image.name).getDownloadURL().then(function (url) {
                  var temp = {
                    original: url,
                    thumbnail: url
                  };

                  _this.setState({
                    imageUrl: _this.state.imageUrl.concat(temp)
                  });

                  axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("/api/profiles/addImages/".concat(profile.data._id), _this.state.imageUrl);
                });
              });
            });

            _this.context.updateProfile(profile.data);
          });
        }
      });
    });

    return _this;
  }

  _createClass(ManageProfile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("/api/categories/allCategories/7/0").then(function (categories) {
        _this2.setState({
          categories: categories.data
        });
      });
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get("/api/admin/getLocations").then(function (loc) {
        return _this2.setState({
          locations: loc.data[0].locations
        });
      });
      typeof this.props.profile !== "undefined" ? this.setState({
        imageUrl: this.props.profile.images
      }) : null;
      typeof this.props.profile !== "undefined" ? this.setState({
        artistSelected: this.props.profile.categories.includes("Artist")
      }) : null;
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {// this.setState({ categories, locations: locations[0].locations });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var getFieldDecorator = this.props.form.getFieldDecorator;
      var formItemLayoutHorizontal = {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 16
        }
      };
      var tailformItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          }
        }
      };
      var formItemLayoutVertical = {
        wrapperCol: {
          span: 22,
          offset: 1
        }
      };
      var Layout, layoutVariable;

      if (typeof screen !== "undefined") {
        Layout = screen.width <= "850" ? formItemLayoutVertical : formItemLayoutHorizontal;
        layoutVariable = screen.width <= "850" ? "vertical" : "horizontal";
      } else {
        Layout = formItemLayoutHorizontal;
        layoutVariable = "horizontal";
      }

      var _this$state = this.state,
          categories = _this$state.categories,
          locations = _this$state.locations;
      var profile = this.props.profile;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "Create or Update Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        onSubmit: this.handleSubmit,
        layout: layoutVariable,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Company Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }), getFieldDecorator("companyName", {
        initialValue: typeof profile !== "undefined" ? profile.companyName : ""
      }, {
        rules: [{
          required: true,
          message: "Please enter your Company Name!"
        }]
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        placeholder: "Business Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), getFieldDecorator("description", {
        initialValue: typeof profile !== "undefined" ? profile.description : ""
      }, {
        rules: [{
          required: true,
          message: "Please enter your Company Description!"
        }]
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
        placeholder: "Provide details about your business",
        autosize: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          margin: "24px 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Choose Categories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }), getFieldDecorator("categories", {
        initialValue: typeof profile !== "undefined" ? profile.categories : null
      }, {
        rules: [{
          required: true,
          message: "Please select atleast one Cateogory that you serve!"
        }]
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Checkbox"].Group, {
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, categories.map(function (category) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          lg: {
            span: 6
          },
          md: {
            span: 8
          },
          sm: {
            span: 24
          },
          key: category.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          value: category.name,
          onChange: function onChange() {
            return _this3.catChange(category.name);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        }, category.name));
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Choose Locations",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }), getFieldDecorator("locations", {
        initialValue: typeof profile !== "undefined" ? profile.locations : null
      }, {
        rules: [{
          required: true,
          message: "Please select atleast one Location that you serve in!"
        }]
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Checkbox"].Group, {
        style: {
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, locations.map(function (location) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          lg: {
            span: 6
          },
          md: {
            span: 8
          },
          sm: {
            span: 24
          },
          key: location,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          value: location,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        }, location));
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Choose Primary Location",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }), getFieldDecorator("primaryLocation", {
        initialValue: typeof profile !== "undefined" ? profile.primaryLocation ? profile.primaryLocation : "Chennai" : "Chennai"
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
        size: "large",
        style: {
          width: 180
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, locations.map(function (location) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
          key: location,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307
          },
          __self: this
        }, location);
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Minimum Budget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }), getFieldDecorator("budgetBracket", {
        initialValue: typeof profile !== "undefined" ? profile.budgetBracket : ""
      }, {
        value: typeof this.state.budgetBracket === "number" ? this.state.budgetBracket : 0
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["InputNumber"], {
        onChange: this.onChangeBudgetBracket,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Experience",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }), getFieldDecorator("experience", {
        initialValue: typeof profile !== "undefined" ? profile.experience : ""
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        placeholder: "Experience in the events industry",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Events Covered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }), getFieldDecorator("eventsCovered", {
        initialValue: typeof profile !== "undefined" ? profile.eventsCovered : ""
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        placeholder: "Enter number of events covered till now",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Cancellation Policy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }), getFieldDecorator("cancellationPolicy", {
        initialValue: typeof profile !== "undefined" ? profile.cancellationPolicy : ""
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
        placeholder: "Cancellation Policy if any",
        autosize: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          margin: "24px 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Payment Terms",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }), getFieldDecorator("paymentTerms", {
        initialValue: typeof profile !== "undefined" ? profile.paymentTerms : ""
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
        placeholder: "Advance(%), Payment on event date(%), Payment on Delivery(%)",
        autosize: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          margin: "24px 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      })), this.state.artistSelected ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Artist Genre",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }), getFieldDecorator("artistGenre", {
        initialValue: profile.artistGenre
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        placeholder: "Enter the Genre",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Languages Known",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }), getFieldDecorator("languagesKnown", {
        initialValue: profile.languagesKnown
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        placeholder: "Enter the Languages you know",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Troupe Size (Performing)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }), getFieldDecorator("troupeSizeP", {
        initialValue: profile.troupeSizeP
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        placeholder: "Enter number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Troupe Size (Non-Performing)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }), getFieldDecorator("troupeSizeNP", {
        initialValue: profile.troupeSizeNP
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        placeholder: "Enter number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Performance Duration",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }), getFieldDecorator("performanceDuration", {
        initialValue: profile.performanceDuration
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        placeholder: "Duration per performance",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Event Preference",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }), getFieldDecorator("eventPreference", {
        initialValue: profile.eventPreference
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        placeholder: "What do you prefer?",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({
        label: "Open to Travel?"
      }, Layout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }), getFieldDecorator("openToTravel", {
        initialValue: profile.openToTravel
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Radio.Group, {
        buttonStyle: "solid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Radio.Button, {
        value: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, "Yes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Radio.Button, {
        value: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, "No")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Managed By",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }), getFieldDecorator("managedBy", {
        initialValue: profile.managedBy
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        placeholder: "Self or Manager?",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Manager Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }), getFieldDecorator("managerName", {
        initialValue: profile.managerName
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        placeholder: "Enter your manager's name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Manager Mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 411
        },
        __self: this
      }), getFieldDecorator("managerNumber", {
        initialValue: profile.managerNumber
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        placeholder: "Enter your manager's mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Manager Email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }), getFieldDecorator("managerMail", {
        initialValue: profile.managerMail
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        placeholder: "Enter your manager's email id",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        },
        __self: this
      })))) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Portfolio Images",
        extra: "Our customers will get a fair idea about your quality and design",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        },
        __self: this
      }), getFieldDecorator("images", {
        valuePropName: "fileList",
        getValueFromEvent: this.normFile
      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Upload"], {
        name: "logo",
        listType: "picture",
        multiple: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        type: "upload",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        },
        __self: this
      }), " Click to upload")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Youtube videos",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        },
        __self: this
      }), getFieldDecorator("videos", {
        initialValue: typeof profile !== "undefined" ? profile.videos.join(",") : ""
      }, {})(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
        placeholder: "Provide youtube urls seperated by comma ".concat("\n", "ex., https://www.youtube.com/watch?v=7GBCHRxq3Sc,https://www.youtube.com/watch?v=VRdaHFy0FcY"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, tailformItemLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 454
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "primary",
        htmlType: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 455
        },
        __self: this
      }, typeof profile !== "undefined" ? "Update Profile" : "Create Profile")))));
    }
  }]);

  return ManageProfile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(ManageProfile, "contextType", _provider_loginProvider__WEBPACK_IMPORTED_MODULE_6__["LoginContext"]);

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_3__["Form"].create({
  name: "manage-profile"
})(ManageProfile));

/***/ })

})
//# sourceMappingURL=dashboard.js.fa2f3684a22301e19a4f.hot-update.js.map