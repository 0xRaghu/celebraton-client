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
          artistSelected: true
        });
      } else {
        _this.setState({
          artistSelected: false
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
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Create or Update Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        onSubmit: this.handleSubmit,
        layout: layoutVariable,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Company Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
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
          lineNumber: 196
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
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
          lineNumber: 214
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          margin: "24px 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Choose Categories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
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
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
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
            lineNumber: 241
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          value: category.name,
          onChange: function onChange() {
            return _this3.catChange(category.name);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        }, category.name));
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Choose Locations",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
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
          lineNumber: 277
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
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
            lineNumber: 280
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          value: location,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286
          },
          __self: this
        }, location));
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Choose Primary Location",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
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
          lineNumber: 302
        },
        __self: this
      }, locations.map(function (location) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Option, {
          key: location,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 304
          },
          __self: this
        }, location);
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Minimum Budget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
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
          lineNumber: 322
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Portfolio Images",
        extra: "Our customers will get a fair idea about your quality and design",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
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
          lineNumber: 333
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        type: "upload",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }), " Click to upload")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Youtube videos",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }), getFieldDecorator("videos", {
        initialValue: typeof profile !== "undefined" ? profile.videos.join(",") : ""
      }, {})(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
        placeholder: "Provide youtube urls seperated by comma ".concat("\n", "ex., https://www.youtube.com/watch?v=7GBCHRxq3Sc,https://www.youtube.com/watch?v=VRdaHFy0FcY"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, tailformItemLayout, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "primary",
        htmlType: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
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
//# sourceMappingURL=dashboard.js.dd4d2fb08f0c78a92bfc.hot-update.js.map