module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginContext; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _setAuthToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_7__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* First we will make a new context */

var LoginContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
/* Then create a provider Component */

var LoginProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginProvider, _Component);

  function LoginProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LoginProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoginProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
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
      currentProfile: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showDrawer", function () {
      _this.setState({
        drawerVisible: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCloseDrawer", function () {
      _this.setState({
        drawerVisible: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setCurrentUser", function (decoded) {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleLogin", function () {
      var values = {};
      values.mobile = _this.state.mobile;
      values.otp = _this.state.otp;
      values.name = _this.state.name;
      values.email = _this.state.email;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/users/registerOrLogin", values).then(function (payload) {
        if (payload.data.success === true) {
          localStorage.setItem("jwtToken", payload.data.token);
          Object(_setAuthToken__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(payload.data.token);
          var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(payload.data.token);

          _this.setState({
            currentUser: decoded,
            isAuthenticated: true,
            drawerVisible: false
          });

          if (_this.state.currentUser.role === "vendor") {
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/profiles/getProfile").then(function (profile) {
              return next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/vendor-dashboard");
            }).catch(function (err) {
              return next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/create-profile");
            });
          }
        } else {
          _this.setState({
            errors: payload.data.errors
          });

          antd__WEBPACK_IMPORTED_MODULE_7__["notification"].open({
            message: "Incorrect OTP",
            icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
              type: "close",
              style: {
                color: "red"
              }
            })
          });
        }
      }).catch(function (err) {
        return console.log(err);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateProfile", function (profile) {
      _this.setState({
        currentProfile: profile
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateNumberState", function (e) {
      _this.setState({
        mobile: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateOtpState", function (e) {
      _this.setState({
        otp: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateNameState", function (e) {
      _this.setState({
        name: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateEmailState", function (e) {
      _this.setState({
        email: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "signOut", function () {
      localStorage.setItem("jwtToken", "");

      _this.setState({
        currentUser: {},
        isAuthenticated: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "findUser",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //check user
              axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/users/currentUser/" + _this.state.mobile).then(function (user) {
                console.log(user);

                if (user) {
                  _this.setState({
                    userAvailable: true
                  });
                }
              }).catch(function (err) {
                return _this.setState({
                  userAvailable: false
                });
              }); //send otp

              axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/users/sendOTP", {
                mobile: _this.state.mobile,
                role: next_router__WEBPACK_IMPORTED_MODULE_6___default.a.pathname === "/vendor-login" ? "vendor" : "customer"
              }).then(function (otp) {
                return _this.setState({
                  otpSent: true
                });
              }).catch(function (err) {
                return _this.setState({
                  otpSent: true
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    return _this;
  }

  _createClass(LoginProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (localStorage.jwtToken) {
        Object(_setAuthToken__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(localStorage.jwtToken);
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(localStorage.jwtToken);
        this.setState({
          currentUser: decoded,
          isAuthenticated: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LoginContext.Provider, {
        value: {
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
          signOut: this.signOut
        }
      }, this.props.children);
    }
  }]);

  return LoginProvider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
/* then make a consumer which will surface it */


var LoginConsumer = LoginContext.Consumer;
/* harmony default export */ __webpack_exports__["c"] = (LoginProvider);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HomeContext; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* First we will make a new context */

var HomeContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
/* Then create a provider Component */

var HomeProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(HomeProvider, _Component);

  function HomeProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HomeProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HomeProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      modalCategory: [],
      category: [],
      locations: [],
      selectedLocation: "Chennai",
      disabled: false,
      visible: false,
      loading: false,
      currentUser: {},
      isAuthenticated: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateCatandLoc", function (categories, locations) {
      _this.setState({
        category: categories,
        locations: locations[0].locations,
        modalCategory: categories[0]
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectLocation", function (event) {
      _this.setState({
        selectedLocation: event
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateLimit",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                disabled: true
              });

              isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()("/api/categories/allCategories/7/5").then(function (categories) {
                return categories.json();
              }).then(function (category) {
                return category.map(function (cat) {
                  return _this.setState(function (prevState) {
                    return {
                      category: [].concat(_toConsumableArray(prevState.category), [cat])
                    };
                  });
                });
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOk", function () {
      _this.setState({
        loading: true
      });

      setTimeout(function () {
        _this.setState({
          loading: false,
          visible: false
        });
      }, 3000);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleCancel", function () {
      _this.setState({
        visible: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clickModal", function (category) {
      console.log(category);

      _this.setState({
        visible: true,
        modalCategory: category
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectLocationInModal", function (event) {
      _this.setState({
        selectedLocation: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectLocationInForm", function (location) {
      _this.setState({
        selectedLocation: location
      });
    });

    return _this;
  }

  _createClass(HomeProvider, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HomeContext.Provider, {
        value: {
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
        }
      }, this.props.children);
    }
  }]);

  return HomeProvider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
/* then make a consumer which will surface it */


var HomeConsumer = HomeContext.Consumer;
/* harmony default export */ __webpack_exports__["c"] = (HomeProvider);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _provider_loginProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
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







var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          values.mobile = _this.context.mobile;
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/users/registerOrLogin", values).then(function (res) {
            return console.log(res);
          }).catch(function (err) {
            return console.log(err);
          });
        }
      });
    });

    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var getFieldDecorator = this.props.form.getFieldDecorator;
      var _this$context = this.context,
          updateNumberState = _this$context.updateNumberState,
          mobile = _this$context.mobile,
          otpSent = _this$context.otpSent,
          findUser = _this$context.findUser,
          updateOtpState = _this$context.updateOtpState,
          userAvailable = _this$context.userAvailable,
          handleLogin = _this$context.handleLogin,
          otp = _this$context.otp,
          name = _this$context.name,
          email = _this$context.email,
          updateNameState = _this$context.updateNameState,
          updateEmailState = _this$context.updateEmailState,
          errors = _this$context.errors;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_provider_loginProvider__WEBPACK_IMPORTED_MODULE_4__[/* LoginConsumer */ "a"], null, function () {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          layout: _this2.props.layoutVariable,
          onSubmit: _this2.handleSubmit,
          className: "login-form"
        }, otpSent ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
          label: "Mobile Number"
        }, _this2.props.layout), getFieldDecorator("mobile", {
          rules: [{
            required: true,
            message: "Please input your Mobile Number!"
          }, {
            type: "number",
            message: "Enter a valid mobile number!"
          }],
          value: {
            mobile: mobile
          }
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          prefix: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
            type: "user",
            style: {
              color: "rgba(0,0,0,.25)"
            }
          }),
          placeholder: "Mobile Number",
          onChange: updateNumberState,
          disabled: otpSent
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            textAlign: "center"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          className: "login-form-button",
          onClick: findUser
        }, "Send OTP"))), otpSent ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
          label: "Enter OTP"
        }, _this2.props.layout), getFieldDecorator("otp", {
          rules: [{
            required: true,
            message: "Please input the 4 digit OTP!"
          }],
          value: {
            otp: otp
          }
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          prefix: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
            type: "lock",
            style: {
              color: "rgba(0,0,0,.25)"
            }
          }),
          placeholder: "OTP",
          onChange: updateOtpState
        }))) : null), userAvailable ? otpSent ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            textAlign: "center"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _this2.props.tailFormItemLayout, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          htmlType: "submit",
          className: "login-form-button",
          onClick: handleLogin
        }, "Log in"))) : null : otpSent ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          onSubmit: _this2.handleSubmit,
          layout: _this2.props.layoutVariable,
          className: "login-form"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
          label: "Name"
        }, _this2.props.layout), getFieldDecorator("name", {
          rules: [{
            required: true,
            message: "Please input your name!"
          }],
          value: {
            name: name
          }
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          prefix: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
            type: "user",
            style: {
              color: "rgba(0,0,0,.25)"
            }
          }),
          placeholder: "Name",
          onChange: updateNameState
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
          label: "Email"
        }, _this2.props.layout), getFieldDecorator("email", {
          rules: [{
            required: true,
            message: "Please input your email!"
          }],
          value: {
            email: email
          }
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          prefix: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
            type: "user",
            style: {
              color: "rgba(0,0,0,.25)"
            }
          }),
          placeholder: "Email",
          onChange: updateEmailState
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            textAlign: "center"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _this2.props.tailFormItemLayout, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          htmlType: "submit",
          className: "login-form-button",
          onClick: handleLogin
        }, "Register")))) : null);
      });
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Login, "contextType", _provider_loginProvider__WEBPACK_IMPORTED_MODULE_4__[/* LoginContext */ "b"]);

/* harmony default export */ __webpack_exports__["a"] = (antd__WEBPACK_IMPORTED_MODULE_1__["Form"].create({
  name: "login"
})(Login));

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.baseURL = "https://celebraton-server.herokuapp.com/";

var setAuthToken = function setAuthToken(token) {
  if (token) {
    //apply to every axios request
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    //delete Auth Header
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common["Authorization"];
  }
};

/* harmony default export */ __webpack_exports__["a"] = (setAuthToken);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),
/* 15 */
/***/ (function(module, exports) {



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("reqwest");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _provider_loginProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SubMenu = antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].SubMenu;
var MenuItemGroup = antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].ItemGroup;
var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Footer;


var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, _getPrototypeOf(Nav).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var _this$context = this.context,
          drawerVisible = _this$context.drawerVisible,
          showDrawer = _this$context.showDrawer,
          onCloseDrawer = _this$context.onCloseDrawer,
          isAuthenticated = _this$context.isAuthenticated,
          signOut = _this$context.signOut;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_provider_loginProvider__WEBPACK_IMPORTED_MODULE_7__[/* LoginConsumer */ "a"], null, function () {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
          className: "layout"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
          theme: "dark",
          mode: "horizontal",
          defaultSelectedKeys: [""],
          style: {
            lineHeight: "40px"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
          key: "1"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/dashboard"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Dashboard"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
          key: "2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          onClick: signOut
        }, "Sign Out"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
          theme: "dark",
          mode: "horizontal",
          defaultSelectedKeys: [""],
          style: {
            lineHeight: "40px"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
          key: "1",
          onClick: showDrawer
        }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
          key: "2"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/vendor-login"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Become our Vendor"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Drawer"], {
          width: "300px",
          title: "Login/Register",
          placement: "right",
          closable: false,
          onClose: onCloseDrawer,
          visible: drawerVisible
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
          mode: "horizontal"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
          key: "login"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
          type: "mail"
        }), "Login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_login__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "To register as our vendor, go to", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/vendor-login"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "Vendor Login page"))));
      });
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Nav, "contextType", _provider_loginProvider__WEBPACK_IMPORTED_MODULE_7__[/* LoginContext */ "b"]);

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var defaultDescription = "";
var defaultOGURL = "";
var defaultOGImage = "";

var Head = function Head(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, props.title || ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: props.title || ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://checkout.razorpay.com/v1/checkout.js"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_home_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);


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



var Meta = antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta;




var TextArea = antd__WEBPACK_IMPORTED_MODULE_2__["Input"].TextArea;

var AddGeneral =
/*#__PURE__*/
function (_Component) {
  _inherits(AddGeneral, _Component);

  function AddGeneral() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AddGeneral);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AddGeneral)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      categories: [],
      category: {
        eventType: [],
        servicesRequired: [],
        budget: [{
          from: 0,
          to: 0,
          option: 0,
          leadPrice: 0
        }]
      },
      locations: "",
      locId: "",
      additionalBudget: "",
      updatedBudget: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeLocation", function (value) {
      _this.setState({
        budgetBracket: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeCategory", function (value) {
      _this.setState({
        category: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "normFile", function (e) {
      console.log("Upload event:", e);

      if (Array.isArray(e)) {
        return e;
      }

      return e && e.fileList;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log("Received values of form: ", values); // axios.post("/api/categories/addCategory", values);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeBudget", function (e) {
      _this.setState({
        additionalBudget: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeLocation", function (e) {
      _this.setState({
        locations: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addBudgetInput", function (categoryId) {
      // console.log("Received values of form: ", categoryId);
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/api/categories/addBudget/" + categoryId, {
        budget: _this.state.additionalBudget
      }).then(function (category) {
        return _this.setState({
          category: category.data
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateBudget", function (categoryId, budgetId) {
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/api/categories/updateBudget/" + categoryId + "/" + budgetId, {
        budget: _this.state.additionalBudget
      }).then(function (category) {
        return _this.setState({
          category: category.data
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "deleteBudget", function (categoryId, budgetId) {
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/api/categories/deleteBudget/" + categoryId + "/" + budgetId, {
        budget: _this.state.additionalBudget
      }).then(function (category) {
        return _this.setState({
          category: category.data
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateLocation", function () {
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/api/admin/updateLocation/" + _this.state.locId, {
        locations: _this.state.locations
      }).then(function (locations) {
        return _this.setState({
          locations: locations.data.locations
        });
      });
    });

    return _this;
  }

  _createClass(AddGeneral, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/categories/allCategories/7/0").then(function (cat) {
        return _this2.setState({
          categories: cat.data
        });
      });
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/admin/getLocations").then(function (loc) {
        return _this2.setState({
          locations: loc.data[0].locations.join(","),
          locId: loc.data[0]._id
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props$form = this.props.form,
          getFieldDecorator = _this$props$form.getFieldDecorator,
          getFieldValue = _this$props$form.getFieldValue;
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

      var InputLayout = {
        labelCol: {
          span: 8
        },
        wrapperCol: {
          span: 14
        }
      };
      var _this$state = this.state,
          category = _this$state.category,
          categories = _this$state.categories,
          locations = _this$state.locations;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_home_head__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        title: "Admin Dashboard"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          textAlign: "center"
        },
        className: "jsx-2216348353"
      }, "Update Locations"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 18
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, _extends({
        label: "Locations"
      }, InputLayout), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        value: locations,
        onChange: this.onChangeLocation
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 6
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        onClick: this.updateLocation
      }, "Update Location")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          textAlign: "center"
        },
        className: "jsx-2216348353"
      }, "Create or Update Category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onSubmit: this.handleSubmit,
        layout: layoutVariable
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, _extends({}, Layout, {
        label: "Category Name"
      }), getFieldDecorator("name", {
        initialValue: category.name
      }, {
        rules: [{
          required: true,
          message: "Please enter Category Name!"
        }]
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        placeholder: "Category Name"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, _extends({}, Layout, {
        label: "Slug"
      }), getFieldDecorator("slug", {
        initialValue: category.slug
      }, {
        rules: [{
          required: true,
          message: "Please enter the slug ex., EventPlanners without space!"
        }]
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        placeholder: "Category Slug"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, _extends({}, Layout, {
        label: "Icon"
      }), getFieldDecorator("icon", {
        initialValue: category.icon
      }, {
        rules: [{
          required: true,
          message: "Please select an Icon!"
        }]
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        placeholder: "Category Icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, _extends({}, Layout, {
        label: "Order"
      }), getFieldDecorator("order", {
        initialValue: category.order
      }, {
        rules: [{
          required: true,
          message: "Please choose the order of display!"
        }]
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        placeholder: "Category Order"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, _extends({}, Layout, {
        label: "eventType"
      }), getFieldDecorator("eventType", {
        initialValue: category.eventType.join(",")
      }, {
        rules: [{
          required: true,
          message: "Please enter event types!"
        }]
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        placeholder: "Event Types"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, _extends({}, Layout, {
        label: "servicesRequired"
      }), getFieldDecorator("servicesRequired", {
        initialValue: category.servicesRequired.join(",")
      }, {
        rules: [{
          required: true,
          message: "Please enter services required!"
        }]
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        placeholder: "Event Services Required"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          textAlign: "center"
        },
        className: "jsx-2216348353"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, tailformItemLayout, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        htmlType: "submit"
      }, "Create / Update Category")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          textAlign: "center"
        },
        className: "jsx-2216348353"
      }, "Add/Update Budget for above Category"), this.state.category.budget.map(function (budget, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          gutter: 16
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          span: 5
        }, budget.option + "," + budget.from + "," + budget.to + "," + budget.leadPrice), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          span: 9,
          key: budget._id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          placeholder: budget.option + "," + budget.from + "," + budget.to + "," + budget.leadPrice,
          onChange: _this3.onChangeBudget
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          span: 9
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group, {
          size: "small"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "primary",
          onClick: function onClick() {
            return _this3.updateBudget(_this3.state.category._id, budget._id);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          type: "left"
        }), "Update"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          type: "danger",
          onClick: function onClick() {
            return _this3.deleteBudget(_this3.state.category._id, budget._id);
          }
        }, "Delete", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          type: "right"
        }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          className: "jsx-2216348353"
        }));
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 12
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, _extends({
        label: "Add Budget"
      }, InputLayout), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        placeholder: "option,from,to,leadPrice",
        value: this.state.additionalBudget,
        onChange: this.onChangeBudget
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: 12
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        onClick: function onClick() {
          return _this3.addBudgetInput(_this3.state.category._id);
        }
      }, "Add Budget")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-2216348353"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-2216348353"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2216348353" + " " + "center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          background: "#ECECEC",
          padding: "30px"
        },
        className: "jsx-2216348353"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        gutter: 16
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2216348353" + " " + "h1Heading"
      }, "Submit your Enquiry directly below"), categories.map(function (category) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          key: category._id,
          className: "jsx-2216348353"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          span: 8
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          hoverable: true,
          style: {
            width: 240
          },
          bordered: false,
          onClick: function onClick() {
            return _this3.onChangeCategory(category);
          }
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Meta, {
          title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-2216348353"
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
            className: "jsx-2216348353" + " " + "large material-icons"
          }, category.icon), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            className: "jsx-2216348353"
          }), category.name)
        }))));
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        className: "jsx-2216348353"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2216348353",
        css: [".h1Heading.jsx-2216348353{text-align:center;color:#595959;}", "h2.jsx-2216348353{display:inline-block;}", ".center.jsx-2216348353{text-align:center;}", "i.jsx-2216348353{font-size:50px;}"]
      }));
    }
  }]);

  return AddGeneral;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_2__["Form"].create({
  name: "add-general"
})(AddGeneral));

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reqwest__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _provider_homeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);


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









var Meta = antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta;

var ManageEnquiriesAdmin =
/*#__PURE__*/
function (_Component) {
  _inherits(ManageEnquiriesAdmin, _Component);

  function ManageEnquiriesAdmin() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ManageEnquiriesAdmin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ManageEnquiriesAdmin)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      drawerVisible: false,
      currentId: "",
      currentEnquiry: {},
      initLoading: true,
      loading: false,
      enquiries: [],
      list: [],
      count: 0,
      junk: "",
      inputGuests: 0,
      modalCategory: {
        name: "",
        eventType: [],
        servicesRequired: [],
        budget: [{
          from: 0,
          to: 0,
          order: 0,
          leadPrice: 0
        }]
      },
      categories: [],
      locations: [],
      selectedLocation: "",
      enquiryMode: "create"
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getData", function (callback) {
      reqwest__WEBPACK_IMPORTED_MODULE_6___default()({
        url: "/api/enquiries/allEnquiries/2/".concat(_this.state.count),
        type: "json",
        method: "get",
        contentType: "application/json",
        success: function success(res) {
          callback(res);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLoadMore", function () {
      _this.setState({
        loading: true,
        count: _this.state.count + 2
      });

      _this.getData(function (res) {
        var enquiries = _this.state.enquiries.concat(res);

        _this.setState({
          enquiries: enquiries,
          loading: false
        }, function () {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event("resize"));
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openEnquiry", function (id) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/enquiries/currentEnquiry/" + id).then(function (enquiry) {
        _this.setState({
          currentEnquiry: enquiry.data,
          selectedLocation: enquiry.data.city,
          enquiryMode: "update"
        }), _this.props.form.setFieldsValue({
          category: enquiry.data.category,
          serviceFor: enquiry.data.serviceFor,
          eventDate: moment__WEBPACK_IMPORTED_MODULE_4___default()(enquiry.data.eventDate),
          noOfGuests: enquiry.data.noOfGuests,
          city: enquiry.data.city,
          locality: enquiry.data.locality,
          budget: enquiry.data.budgetRange.option,
          otherInfo: enquiry.data.otherInfo,
          isVerified: enquiry.data.isVerified,
          source: enquiry.data.source,
          celebratonComment: enquiry.data.celebratonComment
        }), _this.state.categories.map(function (category) {
          return category.name === enquiry.data.category ? _this.setState({
            modalCategory: category
          }) : null;
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitEnquiry", function (e) {
      e.preventDefault();

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          var request = {
            enquiry: values,
            category: _this.state.modalCategory,
            id: _this.state.currentEnquiry._id,
            mode: _this.state.enquiryMode
          };
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/admin/adminManageEnquiry", request).then(function (enq) {
            var index = _this.state.enquiries.findIndex(function (x) {
              return x._id === _this.state.currentEnquiry._id;
            });

            _this.state.enquiries[index] = enq.data, _this.setState({
              currentEnquiry: enq.data
            });
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "disabledDate", function (current) {
      // Can not select days before today and today
      return current < moment__WEBPACK_IMPORTED_MODULE_4___default()().startOf("day");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeGuests", function (value) {
      _this.setState({
        inputGuests: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "normFile", function (e) {
      console.log("Upload event:", e);

      if (Array.isArray(e)) {
        return e;
      }

      return e && e.fileList;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectCategory", function (category) {
      _this.setState({
        modalCategory: category
      });
    });

    return _this;
  }

  _createClass(ManageEnquiriesAdmin, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      fetch("/api/admin/allCategories").then(function (categories) {
        return categories.json();
      }).then(function (category) {
        return _this2.setState({
          categories: category,
          modalCategory: category[0]
        });
      });
      fetch("/api/admin/getLocations").then(function (locations) {
        return locations.json();
      }).then(function (locations) {
        return _this2.setState({
          locations: locations[0].locations,
          selectedLocation: locations[0].locations[0]
        });
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.getData(function (res) {
        _this3.setState({
          initLoading: false,
          enquiries: res,
          list: res,
          count: _this3.state.count + 2
        });
      });
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/enquiries/currentEnquiry/" + this.state.currentEnquiry._id).then(function (enquiry) {
        return _this3.setState({
          currentEnquiry: enquiry.data,
          drawerVisible: true
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var selectLocationInModal = this.context.selectLocationInModal;
      var _this$state = this.state,
          initLoading = _this$state.initLoading,
          loading = _this$state.loading,
          list = _this$state.list,
          enquiries = _this$state.enquiries,
          modalCategory = _this$state.modalCategory,
          locations = _this$state.locations,
          selectedLocation = _this$state.selectedLocation,
          categories = _this$state.categories,
          currentEnquiry = _this$state.currentEnquiry;
      var loadMore = !initLoading && !loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: this.onLoadMore
      }, "Load more")) : null;
      var router = this.props.router;
      typeof currentEnquiry.budgetRange !== "undefined" ? null : currentEnquiry.budgetRange = {
        from: 0,
        to: 0
      };
      typeof currentEnquiry.user !== "undefined" ? null : currentEnquiry.user = {
        name: "",
        email: "",
        mobile: ""
      };
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
      var dateFormat = "DD MMM YYYY";
      var inputGuests = this.state.inputGuests;
      var TextArea = antd__WEBPACK_IMPORTED_MODULE_3__["Input"].TextArea;
      var Layout, layoutVariable;

      if (typeof screen !== "undefined") {
        Layout = screen.width <= "850" ? formItemLayoutVertical : formItemLayoutHorizontal;
        layoutVariable = screen.width <= "850" ? "vertical" : "horizontal";
      } else {
        Layout = formItemLayoutHorizontal;
        layoutVariable = "horizontal";
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          textAlign: "center"
        }
      }, "Create or Update Enquiries"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        layout: layoutVariable,
        onSubmit: this.submitEnquiry
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({
        label: "Select Category"
      }, Layout), getFieldDecorator("category", {
        initialValue: modalCategory.name
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, {
        buttonStyle: "solid"
      }, categories.map(function (category) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Button, {
          key: category._id,
          value: category.name,
          onClick: function onClick() {
            return _this4.selectCategory(category);
          },
          checked: "true"
        }, category.name);
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({
        label: modalCategory.name.concat(" required for?")
      }, Layout), getFieldDecorator("serviceFor", {
        initialValue: modalCategory.eventType[0]
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, {
        onChange: this.handleFormLayoutChange,
        buttonStyle: ""
      }, modalCategory.eventType.map(function (eventType) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
          key: eventType,
          value: eventType
        }, eventType);
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Event Date"
      }), getFieldDecorator("eventDate", {})(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["DatePicker"], {
        format: dateFormat,
        disabledDate: this.disabledDate
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "No of Guests"
      }), getFieldDecorator("noOfGuests", {
        value: typeof this.state.inputGuests === "number" ? this.state.inputGuests : 0
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["InputNumber"], {
        onChange: this.onChangeGuests
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Services required"
      }), getFieldDecorator("servicesRequired", {
        initialValue: currentEnquiry.servicesRequired
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Checkbox"].Group, {
        style: {
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], null, modalCategory.servicesRequired.map(function (servicesRequired) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          lg: {
            span: 6
          },
          md: {
            span: 8
          },
          sm: {
            span: 24
          },
          key: servicesRequired
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          value: servicesRequired
        }, servicesRequired));
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({
        label: "In which city?"
      }, Layout), getFieldDecorator("city", {
        initialValue: selectedLocation
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, {
        onChange: selectLocationInModal,
        buttonStyle: "solid"
      }, locations.map(function (location) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Button, {
          key: location,
          value: location
        }, location);
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Area of event (in " + selectedLocation + ")"
      }), getFieldDecorator("locality", {})(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({
        label: "What is your budget?"
      }, Layout), getFieldDecorator("budget")(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, {
        onChange: this.handleFormLayoutChange,
        buttonStyle: ""
      }, modalCategory.budget.map(function (budget) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
          key: budget.from,
          value: budget.option
        }, budget.to !== 0 ? "Rs." + budget.from.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " - Rs." + budget.to.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "Above Rs." + budget.from.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Sample Image (if any)",
        extra: "Our vendors will get a fair idea about the requirements"
      }), getFieldDecorator("sampleImages", {
        valuePropName: "fileList",
        getValueFromEvent: this.normFile
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Upload"], {
        name: "logo",
        listType: "picture",
        multiple: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        type: "upload"
      }), " Click to upload")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "Any other info?"
      }), getFieldDecorator("otherInfo", {})(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextArea, {
        placeholder: "Any other details apart from mentioned above?",
        autosize: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          margin: "24px 0"
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "User Name"
      }), getFieldDecorator("name", {
        initialValue: currentEnquiry.user.name
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "User Mobile"
      }), getFieldDecorator("mobile", {
        initialValue: currentEnquiry.user.mobile
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "User Email"
      }), getFieldDecorator("email", {
        initialValue: currentEnquiry.user.email
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({}, Layout, {
        label: "CelebratON Comments"
      }), getFieldDecorator("celebratonComment", {
        initialValue: currentEnquiry.celebratonComment
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextArea, {
        placeholder: "Add comments gathered from the verification call",
        autosize: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          margin: "24px 0"
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({
        label: "Verified"
      }, Layout), getFieldDecorator("isVerified", {
        initialValue: currentEnquiry.isVerified
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, {
        buttonStyle: "solid"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Button, {
        value: true
      }, "Verified"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Button, {
        value: false
      }, "Not Verified")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({
        label: "Mail Notification"
      }, Layout), getFieldDecorator("sendNotification", {
        initialValue: true
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, {
        buttonStyle: "solid"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Button, {
        value: true
      }, "Send"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Button, {
        value: false
      }, "Dont send")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, _extends({
        label: "Source"
      }, Layout), getFieldDecorator("source")(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, {
        onChange: this.handleFormLayoutChange,
        buttonStyle: ""
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
        value: "Website"
      }, "Website"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
        value: "Call"
      }, "Call"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
        value: "Chat"
      }, "Chat"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Radio"], {
        value: "Other"
      }, "Other")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, tailformItemLayout, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        type: "primary",
        htmlType: "submit",
        size: "large"
      }, "Create/Update Enquiry")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          background: "#ECECEC",
          padding: "30px"
        },
        className: "jsx-4087214989"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          textAlign: "center"
        },
        className: "jsx-4087214989"
      }, "All Enquiries"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
        className: "demo-loadmore-list",
        loading: initLoading,
        itemLayout: "horizontal",
        loadMore: loadMore,
        dataSource: enquiries,
        grid: {
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3
        },
        style: {
          padding: "10px"
        },
        renderItem: function renderItem(enquiry) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
            onClick: function onClick() {
              return _this4.openEnquiry(enquiry._id);
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Skeleton"], {
            avatar: true,
            title: false,
            loading: enquiry.loading,
            active: true
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
            hoverable: true,
            title: enquiry.category,
            bordered: false,
            style: {
              height: "180px",
              background: enquiry.isVerified ? null : null
            }
          }, "For ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
            className: "jsx-4087214989"
          }, enquiry.serviceFor), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            className: "jsx-4087214989"
          }), "on ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
            className: "jsx-4087214989"
          }, moment__WEBPACK_IMPORTED_MODULE_4___default()(enquiry.eventDate).format("DD MMM, YYYY")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            className: "jsx-4087214989"
          }), "Bought by: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
            className: "jsx-4087214989"
          }, enquiry.interestedPartners.length, "/5"), " ", "vendors", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Meta, {
            description: "Posted: " + moment__WEBPACK_IMPORTED_MODULE_4___default()(enquiry.createdAt).from(moment__WEBPACK_IMPORTED_MODULE_4___default()(Date.now())),
            style: {
              paddingTop: "10px",
              textAlign: "right",
              position: "relative"
            }
          }))));
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4087214989",
        css: ["a.jsx-4087214989{-webkit-text-decoration:none;text-decoration:none;}"]
      })));
    }
  }]);

  return ManageEnquiriesAdmin;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

_defineProperty(ManageEnquiriesAdmin, "contextType", _provider_homeProvider__WEBPACK_IMPORTED_MODULE_8__[/* HomeContext */ "b"]);

var ManageEnquiries = antd__WEBPACK_IMPORTED_MODULE_3__["Form"].create({
  name: "enquiryFormAdmin"
})(ManageEnquiriesAdmin);
/* harmony default export */ __webpack_exports__["a"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(ManageEnquiries));

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16);
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(reqwest__WEBPACK_IMPORTED_MODULE_9__);


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











var TextArea = antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea;

var AdminManageProfile =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminManageProfile, _Component);

  function AdminManageProfile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AdminManageProfile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AdminManageProfile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      categories: [],
      locations: [],
      budgetBracket: 0,
      profiles: [],
      profile: {},
      initLoading: true,
      count: 0,
      loading: false,
      profileMode: "create"
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getData", function (callback) {
      reqwest__WEBPACK_IMPORTED_MODULE_9___default()({
        url: "/api/profiles/allProfiles/2/".concat(_this.state.count),
        type: "json",
        method: "get",
        contentType: "application/json",
        success: function success(res) {
          callback(res);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLoadMore", function () {
      _this.setState({
        loading: true,
        count: _this.state.count + 2
      });

      _this.getData(function (res) {
        var profiles = _this.state.profiles.concat(res);

        _this.setState({
          profiles: profiles,
          loading: false
        }, function () {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event("resize"));
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openProfileDrawer", function (id) {
      _this.setState({
        drawerVisible: true,
        currentId: id,
        profileMode: "update"
      });

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/api/profiles/adminCurrentProfile/" + id).then(function (profile) {
        return _this.setState({
          profile: profile.data
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeBudgetBracket", function (value) {
      _this.setState({
        budgetBracket: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "normFile", function (e) {
      console.log("Upload event:", e);

      if (Array.isArray(e)) {
        return e;
      }

      return e && e.fileList;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          var request = {
            values: values,
            mode: _this.state.profileMode
          };
          axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("/api/admin/adminManageProfile", request).then(function (profile) {
            var index = _this.state.profiles.findIndex(function (x) {
              return x._id === _this.state.profile._id;
            });

            _this.state.profiles[index] = profile.data, _this.setState({
              profile: profile.data
            });
          });
        }
      });
    });

    return _this;
  }

  _createClass(AdminManageProfile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getData(function (res) {
        _this2.setState({
          initLoading: false,
          profiles: res,
          count: _this2.state.count + 2
        });
      });

      if (this.props.profile !== {}) {//   Router.push("/dashboard");
      }

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/api/categories/allCategories/7/0").then(function (categories) {
        _this2.setState({
          categories: categories.data
        });
      });
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/api/admin/getLocations").then(function (loc) {
        return _this2.setState({
          locations: loc.data[0].locations
        });
      });
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
          locations = _this$state.locations,
          profiles = _this$state.profiles,
          profile = _this$state.profile,
          initLoading = _this$state.initLoading,
          loading = _this$state.loading;
      var loadMore = !initLoading && !loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: this.onLoadMore
      }, "Load more")) : null;
      typeof profile.user !== "undefined" ? null : profile.user = {
        name: "",
        email: "",
        mobile: ""
      };
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          textAlign: "center"
        }
      }, "Create or Update Profile"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        onSubmit: this.handleSubmit,
        layout: layoutVariable
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, _extends({}, Layout, {
        label: "Company Name"
      }), getFieldDecorator("companyName", {
        initialValue: profile.companyName
      }, {
        rules: [{
          required: true,
          message: "Please input your Company Name!"
        }]
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        placeholder: "Business Name"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, _extends({}, Layout, {
        label: "Description"
      }), getFieldDecorator("description", {
        initialValue: profile.description
      }, {})(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextArea, {
        placeholder: "Provide details about your business",
        autosize: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          margin: "24px 0"
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, _extends({}, Layout, {
        label: "Choose Categories"
      }), getFieldDecorator("categories", {
        initialValue: profile.categories
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"].Group, {
        style: {
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], null, categories.map(function (category) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          lg: {
            span: 6
          },
          md: {
            span: 8
          },
          sm: {
            span: 24
          },
          key: category.name
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
          value: category.name
        }, category.name));
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, _extends({}, Layout, {
        label: "Choose Locations"
      }), getFieldDecorator("locations", {
        initialValue: profile.locations
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"].Group, {
        style: {
          width: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], null, locations.map(function (location) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Col"], {
          lg: {
            span: 6
          },
          md: {
            span: 8
          },
          sm: {
            span: 24
          },
          key: location
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
          value: location
        }, location));
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, _extends({}, Layout, {
        label: "Choose Primary Location"
      }), getFieldDecorator("primaryLocation", {
        initialValue: profile.primaryLocation ? profile.primaryLocation : "Chennai"
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Select"], {
        size: "large",
        style: {
          width: 180
        }
      }, locations.map(function (location) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
          key: location
        }, location);
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, _extends({}, Layout, {
        label: "Minimum Budget"
      }), getFieldDecorator("budgetBracket", {
        initialValue: profile.budgetBracket
      }, {
        value: typeof this.state.budgetBracket === "number" ? this.state.budgetBracket : 0
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["InputNumber"], {
        onChange: this.onChangeBudgetBracket
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, _extends({}, Layout, {
        label: "Portfolio Images",
        extra: "Our customers will get a fair idea about your quality and design"
      }), getFieldDecorator("images", {
        valuePropName: "fileList",
        getValueFromEvent: this.normFile
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Upload"], {
        name: "logo",
        listType: "picture",
        multiple: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        type: "upload"
      }), " Click to upload")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, _extends({}, Layout, {
        label: "Youtube videos"
      }), getFieldDecorator("videos", {
        initialValue: profile.videos
      }, {})(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextArea, {
        placeholder: "Provide youtube urls seperated by comma ".concat("\n", "ex., https://www.youtube.com/watch?v=7GBCHRxq3Sc,https://www.youtube.com/watch?v=VRdaHFy0FcY")
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, _extends({}, Layout, {
        label: "User Name"
      }), getFieldDecorator("name", {
        initialValue: profile.user.name
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, _extends({}, Layout, {
        label: "User Mobile"
      }), getFieldDecorator("mobile", {
        initialValue: profile.user.mobile
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, _extends({}, Layout, {
        label: "User Email"
      }), getFieldDecorator("email", {
        initialValue: profile.user.email
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, _extends({
        label: "Authorized"
      }, Layout), getFieldDecorator("isAuthorized", {
        initialValue: profile.isAuthorized
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"].Group, {
        buttonStyle: "solid"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"].Button, {
        value: true
      }, "Authorized"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Radio"].Button, {
        value: false
      }, "Not Authorized")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, tailformItemLayout, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "primary",
        htmlType: "submit"
      }, "Add/Update Profile")), this.state.profileMode === "update" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, tailformItemLayout, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/profile?profileId=" + profile.slug,
        prefetch: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "primary"
      }, "View Profile")))) : null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          background: "#ECECEC",
          padding: "30px"
        },
        className: "jsx-4087214989"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          textAlign: "center"
        },
        className: "jsx-4087214989"
      }, "All Profiles"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["List"], {
        className: "demo-loadmore-list",
        loading: initLoading,
        itemLayout: "horizontal",
        loadMore: loadMore,
        dataSource: profiles,
        grid: {
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3
        },
        style: {
          padding: "10px"
        },
        renderItem: function renderItem(profile) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["List"].Item, {
            onClick: function onClick() {
              return _this3.openProfileDrawer(profile._id);
            }
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Skeleton"], {
            avatar: true,
            title: false,
            loading: profile.loading,
            active: true
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
            hoverable: true,
            title: profile.companyName,
            bordered: false
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
            className: "jsx-4087214989"
          }, profile.primaryLocation), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            className: "jsx-4087214989"
          }))));
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4087214989",
        css: ["a.jsx-4087214989{-webkit-text-decoration:none;text-decoration:none;}"]
      })));
    }
  }]);

  return AdminManageProfile;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (antd__WEBPACK_IMPORTED_MODULE_4__["Form"].create({
  name: "manage-profile"
})(AdminManageProfile));

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reqwest__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Meta = antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta;

var ManageContactForms =
/*#__PURE__*/
function (_Component) {
  _inherits(ManageContactForms, _Component);

  function ManageContactForms() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ManageContactForms);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ManageContactForms)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      contactForms: [],
      count: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getData", function (callback) {
      reqwest__WEBPACK_IMPORTED_MODULE_6___default()({
        url: "/api/contactForms/allForms/2/".concat(_this.state.count),
        type: "json",
        method: "get",
        contentType: "application/json",
        success: function success(res) {
          callback(res);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLoadMore", function () {
      _this.setState({
        count: _this.state.count + 2
      });

      _this.getData(function (res) {
        var contactForms = _this.state.contactForms.concat(res);

        _this.setState({
          contactForms: contactForms
        }, function () {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event("resize"));
        });
      });
    });

    return _this;
  }

  _createClass(ManageContactForms, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getData(function (res) {
        _this2.setState({
          contactForms: res
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var selectLocationInModal = this.context.selectLocationInModal;
      var contactForms = this.state.contactForms;
      var loadMore = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: this.onLoadMore
      }, "Load more"));
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          background: "#ECECEC",
          padding: "30px"
        },
        className: "jsx-4087214989"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          textAlign: "center"
        },
        className: "jsx-4087214989"
      }, "All Contact Forms"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
        className: "demo-loadmore-list",
        itemLayout: "horizontal",
        loadMore: loadMore,
        dataSource: contactForms,
        grid: {
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3
        },
        style: {
          padding: "10px"
        },
        renderItem: function renderItem(form) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
            hoverable: true,
            title: moment__WEBPACK_IMPORTED_MODULE_4___default()(form.date).format("DD MMM, YYYY"),
            bordered: false
          }, "Name:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
            className: "jsx-4087214989"
          }, " " + form.name), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            className: "jsx-4087214989"
          }), "Mobile:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
            className: "jsx-4087214989"
          }, " " + form.mobile), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
            className: "jsx-4087214989"
          }), "Role:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
            className: "jsx-4087214989"
          }, " " + form.role)));
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4087214989",
        css: ["a.jsx-4087214989{-webkit-text-decoration:none;text-decoration:none;}"]
      })));
    }
  }]);

  return ManageContactForms;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ManageContactForms);

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(36);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_admin_manageProfiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27);
/* harmony import */ var _components_admin_manageEnquiries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25);
/* harmony import */ var _components_admin_manageContactForms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _addGeneral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24);
/* harmony import */ var _components_provider_loginProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Header = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Header,
    Content = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content,
    Footer = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Footer,
    Sider = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Sider;

var Dashboard =
/*#__PURE__*/
function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dashboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dashboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_manageEnquiries__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null),
      limit: 20
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clickManageProfile", function () {
      _this.setState({
        content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_manageProfiles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clickAllEnquiries", function () {
      _this.setState({
        content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_manageEnquiries__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clickGeneral", function () {
      _this.setState({
        content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_addGeneral__WEBPACK_IMPORTED_MODULE_9__["default"], null)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clickViewProfile", function () {
      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/profile?profileId=" + _this.props.profile._id);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clickManageContactForms", function () {
      _this.setState({
        content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_admin_manageContactForms__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null)
      });
    });

    return _this;
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {// if (this.context.currentUser.role !== "admin") {
      //   if (this.context.currentUser.role === "vendor") {
      //     Router.push("/dashboard");
      //   } else if (this.context.currentUser.role === "customer") {
      //     Router.push("/");
      //   }
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
        style: {
          overflow: "auto",
          height: "100vh",
          left: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Sider, {
        breakpoint: "lg",
        collapsedWidth: "0",
        onBreakpoint: function onBreakpoint(broken) {//   console.log(broken);
        },
        onCollapse: function onCollapse(collapsed, type) {//   console.log(collapsed, type);
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "../static/logo.png",
        height: "80px"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
        theme: "dark",
        mode: "inline",
        defaultSelectedKeys: ["2"]
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        key: "1",
        onClick: function onClick() {
          return _this2.clickGeneral();
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "user"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "nav-text"
      }, "General")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        key: "2",
        onClick: function onClick() {
          return _this2.clickAllEnquiries();
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "user"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "nav-text"
      }, "All Enquiries")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        key: "3",
        onClick: function onClick() {
          return _this2.clickManageProfile();
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "upload"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "nav-text"
      }, "Manage Profiles")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        key: "4",
        onClick: function onClick() {
          return _this2.clickManageContactForms();
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "upload"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "nav-text"
      }, "Contact Forms")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        key: "5",
        onClick: function onClick() {
          return _this2.clickManageProfile();
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "video-camera"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "nav-text"
      }, "Admin Dashboard")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        key: "6"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/profile?profileId=" + this.props.profile.slug,
        prefetch: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "user"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "nav-text"
      }, "View Profile")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
        key: "7",
        onClick: function onClick() {
          return _this2.clickManageProfile();
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        type: "user"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "nav-text"
      }, "Sign Out")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
        style: {
          margin: "24px 16px 0"
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          padding: 24,
          background: "#fff",
          minHeight: 360
        }
      }, this.state.content, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
        style: {
          textAlign: "center"
        }
      }, "Ant Design \xA92018 Created by Ant UED")))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var profile;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("/api/profiles/getProfile");

              case 2:
                profile = _context.sent;
                _context.next = 5;
                return profile.json();

              case 5:
                profile = _context.sent;
                return _context.abrupt("return", {
                  profile: profile
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

_defineProperty(Dashboard, "contextType", _components_provider_loginProvider__WEBPACK_IMPORTED_MODULE_10__[/* LoginContext */ "b"]);

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })
/******/ ]);