module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
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
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);



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




var NormalLoginForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NormalLoginForm, _React$Component);

  function NormalLoginForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NormalLoginForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NormalLoginForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          // console.log("Received values of form: ", values);
          values.profile = _this.props.profile;
          axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/contactForms/Customer", values);
        }
      });
    });

    return _this;
  }

  _createClass(NormalLoginForm, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1858266642"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: {
          span: 12,
          offset: 6
        },
        lg: {
          span: 12,
          offset: 6
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          align: "center",
          color: this.props.color
        },
        className: "jsx-1858266642"
      }, "Request Callback"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onSubmit: this.handleSubmit,
        className: "login-form"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, getFieldDecorator("name", {
        rules: [{
          required: true,
          message: "Please enter your Name"
        }]
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        prefix: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          type: "text",
          style: {
            color: "rgba(0,0,0,.25)"
          }
        }),
        placeholder: "Name"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, getFieldDecorator("mobile", {
        rules: [{
          required: true,
          message: "Please enter your Mobile Number"
        }, {
          min: 10,
          message: "Mobile number must be min 10 digits long"
        }]
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        prefix: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          type: "text",
          style: {
            color: "rgba(0,0,0,.25)"
          }
        }),
        type: "input",
        placeholder: "Mobile"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        htmlType: "submit",
        className: "login-form-button"
      }, "Request Callback"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1858266642",
        css: ["#components-form-demo-normal-login.jsx-1858266642 .login-form.jsx-1858266642{max-width:30px;}", ".ant-input.jsx-1858266642{padding:50px;}", "#components-form-demo-normal-login.jsx-1858266642 .login-form-button.jsx-1858266642{width:100%;}", "h1.jsx-1858266642{color:white;}"]
      }));
    }
  }]);

  return NormalLoginForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var WrappedNormalLoginForm = antd__WEBPACK_IMPORTED_MODULE_2__["Form"].create({
  name: "normal_login"
})(NormalLoginForm);
/* harmony default export */ __webpack_exports__["a"] = (WrappedNormalLoginForm);

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(52);


/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(6);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(1);

// EXTERNAL MODULE: ./styles.less
var styles = __webpack_require__(15);

// EXTERNAL MODULE: ./components/login/login.js
var login = __webpack_require__(12);

// EXTERNAL MODULE: ./components/nav.js
var nav = __webpack_require__(17);

// EXTERNAL MODULE: ./components/contactForm.js
var contactForm = __webpack_require__(21);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/provider/loginProvider.js
var loginProvider = __webpack_require__(4);

// EXTERNAL MODULE: ./components/provider/homeProvider.js
var homeProvider = __webpack_require__(10);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__(9);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/vendor/createOrUpdateProfile.js
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











var TextArea = external_antd_["Input"].TextArea;

var createOrUpdateProfile_ManageProfile =
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
      budgetBracket: 0
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
          // console.log("Received values of form: ", values);
          external_axios_default.a.post("/api/profiles/addOrUpdateProfile", values);
        }
      });
    });

    return _this;
  }

  _createClass(ManageProfile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.profile !== {}) {//   Router.push("/dashboard");
      }

      external_axios_default.a.get("/api/categories/allCategories/7/0").then(function (categories) {
        _this2.setState({
          categories: categories.data
        });
      });
      external_axios_default.a.get("/api/admin/getLocations").then(function (loc) {
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
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h1", {
        style: {
          textAlign: "center"
        }
      }, "Create or Update Profile"), external_react_default.a.createElement(external_antd_["Form"], {
        onSubmit: this.handleSubmit,
        layout: layoutVariable
      }, external_react_default.a.createElement(external_antd_["Form"].Item, _extends({}, Layout, {
        label: "Company Name"
      }), getFieldDecorator("companyName", {
        initialValue: profile.companyName
      }, {
        rules: [{
          required: true,
          message: "Please enter your Company Name!"
        }]
      })(external_react_default.a.createElement(external_antd_["Input"], {
        placeholder: "Business Name"
      }))), external_react_default.a.createElement(external_antd_["Form"].Item, _extends({}, Layout, {
        label: "Description"
      }), getFieldDecorator("description", {
        initialValue: profile.description
      }, {
        rules: [{
          required: true,
          message: "Please enter your Company Description!"
        }]
      })(external_react_default.a.createElement(TextArea, {
        placeholder: "Provide details about your business",
        autosize: true
      })), external_react_default.a.createElement("div", {
        style: {
          margin: "24px 0"
        }
      })), external_react_default.a.createElement(external_antd_["Form"].Item, _extends({}, Layout, {
        label: "Choose Categories"
      }), getFieldDecorator("categories", {
        initialValue: profile.categories
      }, {
        rules: [{
          required: true,
          message: "Please select atleast one Cateogory that you serve!"
        }]
      })(external_react_default.a.createElement(external_antd_["Checkbox"].Group, {
        style: {
          width: "100%"
        }
      }, external_react_default.a.createElement(external_antd_["Row"], null, categories.map(function (category) {
        return external_react_default.a.createElement(external_antd_["Col"], {
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
        }, external_react_default.a.createElement(external_antd_["Checkbox"], {
          value: category.name
        }, category.name));
      }))))), external_react_default.a.createElement(external_antd_["Form"].Item, _extends({}, Layout, {
        label: "Choose Locations"
      }), getFieldDecorator("locations", {
        initialValue: profile.locations
      }, {
        rules: [{
          required: true,
          message: "Please select atleast one Location that you serve in!"
        }]
      })(external_react_default.a.createElement(external_antd_["Checkbox"].Group, {
        style: {
          width: "100%"
        }
      }, external_react_default.a.createElement(external_antd_["Row"], null, locations.map(function (location) {
        return external_react_default.a.createElement(external_antd_["Col"], {
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
        }, external_react_default.a.createElement(external_antd_["Checkbox"], {
          value: location
        }, location));
      }))))), external_react_default.a.createElement(external_antd_["Form"].Item, _extends({}, Layout, {
        label: "Choose Primary Location"
      }), getFieldDecorator("primaryLocation", {
        initialValue: profile.primaryLocation ? profile.primaryLocation : "Chennai"
      })(external_react_default.a.createElement(external_antd_["Select"], {
        size: "large",
        style: {
          width: 180
        }
      }, locations.map(function (location) {
        return external_react_default.a.createElement(Option, {
          key: location
        }, location);
      })))), external_react_default.a.createElement(external_antd_["Form"].Item, _extends({}, Layout, {
        label: "Minimum Budget"
      }), getFieldDecorator("budgetBracket", {
        initialValue: profile.budgetBracket
      }, {
        value: typeof this.state.budgetBracket === "number" ? this.state.budgetBracket : 0
      })(external_react_default.a.createElement(external_antd_["InputNumber"], {
        onChange: this.onChangeBudgetBracket
      }))), external_react_default.a.createElement(external_antd_["Form"].Item, _extends({}, Layout, {
        label: "Portfolio Images",
        extra: "Our customers will get a fair idea about your quality and design"
      }), getFieldDecorator("images", {
        valuePropName: "fileList",
        getValueFromEvent: this.normFile
      })(external_react_default.a.createElement(external_antd_["Upload"], {
        name: "logo",
        listType: "picture",
        multiple: true
      }, external_react_default.a.createElement(external_antd_["Button"], null, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "upload"
      }), " Click to upload")))), external_react_default.a.createElement(external_antd_["Form"].Item, _extends({}, Layout, {
        label: "Youtube videos"
      }), getFieldDecorator("videos", {
        initialValue: profile.videos
      }, {})(external_react_default.a.createElement(TextArea, {
        placeholder: "Provide youtube urls seperated by comma ".concat("\n", "ex., https://www.youtube.com/watch?v=7GBCHRxq3Sc,https://www.youtube.com/watch?v=VRdaHFy0FcY")
      }))), external_react_default.a.createElement("div", {
        style: {
          textAlign: "center"
        }
      }, external_react_default.a.createElement(external_antd_["Form"].Item, tailformItemLayout, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        htmlType: "submit"
      }, "Update Profile")))));
    }
  }]);

  return ManageProfile;
}(external_react_["Component"]);

_defineProperty(createOrUpdateProfile_ManageProfile, "contextType", loginProvider["b" /* LoginContext */]);

/* harmony default export */ var createOrUpdateProfile = (external_antd_["Form"].create({
  name: "manage-profile"
})(createOrUpdateProfile_ManageProfile));
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(7);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(11);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "reqwest"
var external_reqwest_ = __webpack_require__(16);
var external_reqwest_default = /*#__PURE__*/__webpack_require__.n(external_reqwest_);

// CONCATENATED MODULE: ./components/vendor/allEnquiries.js


function allEnquiries_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { allEnquiries_typeof = function _typeof(obj) { return typeof obj; }; } else { allEnquiries_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return allEnquiries_typeof(obj); }

function allEnquiries_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function allEnquiries_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function allEnquiries_createClass(Constructor, protoProps, staticProps) { if (protoProps) allEnquiries_defineProperties(Constructor.prototype, protoProps); if (staticProps) allEnquiries_defineProperties(Constructor, staticProps); return Constructor; }

function allEnquiries_possibleConstructorReturn(self, call) { if (call && (allEnquiries_typeof(call) === "object" || typeof call === "function")) { return call; } return allEnquiries_assertThisInitialized(self); }

function allEnquiries_getPrototypeOf(o) { allEnquiries_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return allEnquiries_getPrototypeOf(o); }

function allEnquiries_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) allEnquiries_setPrototypeOf(subClass, superClass); }

function allEnquiries_setPrototypeOf(o, p) { allEnquiries_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return allEnquiries_setPrototypeOf(o, p); }

function allEnquiries_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function allEnquiries_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Meta = external_antd_["Card"].Meta;

var allEnquiries_AllEnquiries =
/*#__PURE__*/
function (_Component) {
  allEnquiries_inherits(AllEnquiries, _Component);

  function AllEnquiries() {
    var _getPrototypeOf2;

    var _this;

    allEnquiries_classCallCheck(this, AllEnquiries);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = allEnquiries_possibleConstructorReturn(this, (_getPrototypeOf2 = allEnquiries_getPrototypeOf(AllEnquiries)).call.apply(_getPrototypeOf2, [this].concat(args)));

    allEnquiries_defineProperty(allEnquiries_assertThisInitialized(allEnquiries_assertThisInitialized(_this)), "state", {
      drawerVisible: false,
      currentId: "",
      currentEnquiry: {},
      initLoading: true,
      loading: false,
      enquiries: [],
      list: [],
      count: 0,
      junk: ""
    });

    allEnquiries_defineProperty(allEnquiries_assertThisInitialized(allEnquiries_assertThisInitialized(_this)), "getData", function (callback) {
      external_reqwest_default()({
        url: "/api/enquiries/allEnquiries/2/".concat(_this.state.count),
        data: {
          profile: _this.state.profile
        },
        type: "json",
        method: "get",
        contentType: "application/json",
        success: function success(res) {
          callback(res);
        }
      });
    });

    allEnquiries_defineProperty(allEnquiries_assertThisInitialized(allEnquiries_assertThisInitialized(_this)), "onLoadMore", function () {
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

    allEnquiries_defineProperty(allEnquiries_assertThisInitialized(allEnquiries_assertThisInitialized(_this)), "openEnquiryDrawer", function (id) {
      _this.setState({
        drawerVisible: true,
        currentId: id
      });

      external_axios_default.a.get("/api/enquiries/currentEnquiry/" + id).then(function (enquiry) {
        return _this.setState({
          currentEnquiry: enquiry.data
        });
      });
    });

    allEnquiries_defineProperty(allEnquiries_assertThisInitialized(allEnquiries_assertThisInitialized(_this)), "onClose", function () {
      _this.setState({
        drawerVisible: false
      });

      _this.props.router.push("/dashboard");
    });

    allEnquiries_defineProperty(allEnquiries_assertThisInitialized(allEnquiries_assertThisInitialized(_this)), "payForLead", function () {
      var currentEnquiry = _this.state.currentEnquiry;
      var profile = _this.state.profile;

      if (currentEnquiry.leadAmount - (profile.Wallet + profile.promoCredit) <= 0) {
        external_axios_default.a.post("/api/enquiries/updatePayment/" + currentEnquiry._id + "/" + profile._id).then(function (enquiry) {
          var index = _this.state.enquiries.findIndex(function (x) {
            return x._id === _this.state.currentEnquiry._id;
          });

          _this.state.enquiries[index] = enquiry.data, _this.setState({
            currentEnquiry: enquiry.data
          });
        });
        external_axios_default.a.post("/api/profiles/updatePayment/" + currentEnquiry._id + "/" + profile._id + "/" + currentEnquiry.leadAmount + "/walletOrPromo").then(function (profile) {
          return _this.setState({
            profile: profile.data
          });
        });
      } else {
        var options = {
          key: "rzp_test_lywdx0vKDyTxOh",
          amount: (currentEnquiry.leadAmount - (profile.Wallet + profile.promoCredit)) * 100,
          // 2000 paise = INR 20
          name: "CelebratON.in",
          description: currentEnquiry.category + " enquiry by " + currentEnquiry.user.name,
          image: "",
          handler: function handler(response) {
            external_axios_default.a.post("/api/enquiries/updatePayment/" + currentEnquiry._id + "/" + profile._id).then(function (enquiry) {
              var index = _this.state.enquiries.findIndex(function (x) {
                return x._id === _this.state.currentEnquiry._id;
              });

              _this.state.enquiries[index] = enquiry.data, _this.setState({
                currentEnquiry: enquiry.data
              });
            });
            external_axios_default.a.post("/api/profiles/updatePayment/" + currentEnquiry._id + "/" + profile._id + "/" + currentEnquiry.leadAmount + "/" + response.razorpay_payment_id).then(function (profile) {
              return _this.setState({
                profile: profile.data
              });
            });
          },
          prefill: {
            name: profile.name,
            email: profile.email
          },
          notes: {
            address: "Paying for a lead"
          },
          theme: {
            color: "#ba0f58"
          }
        };
        new Razorpay(options).open();
      }
    });

    return _this;
  }

  allEnquiries_createClass(AllEnquiries, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        profile: this.props.profile
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getData(function (res) {
        _this2.setState({
          initLoading: false,
          enquiries: res,
          list: res,
          count: _this2.state.count + 2
        });
      });
      this.props.router.query.enquiry ? external_axios_default.a.get("/api/enquiries/currentEnquiry/" + this.props.router.query.enquiry).then(function (enquiry) {
        return _this2.setState({
          currentEnquiry: enquiry.data,
          drawerVisible: true
        });
      }) : null;
      var aScript = document.createElement("script");
      aScript.type = "text/javascript";
      aScript.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.head.appendChild(aScript);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this,
          _React$createElement;

      var _this$state = this.state,
          initLoading = _this$state.initLoading,
          loading = _this$state.loading,
          list = _this$state.list,
          enquiries = _this$state.enquiries;
      var loadMore = !initLoading && !loading ? external_react_default.a.createElement("div", {
        style: {
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px"
        }
      }, external_react_default.a.createElement(external_antd_["Button"], {
        onClick: this.onLoadMore
      }, "Load more")) : null;
      var router = this.props.router;
      var currentEnquiry = this.state.currentEnquiry;
      typeof currentEnquiry.budgetRange !== "undefined" ? null : currentEnquiry.budgetRange = {
        from: 0,
        to: 0
      };
      typeof currentEnquiry.user !== "undefined" ? null : currentEnquiry.user = {
        name: "",
        email: "",
        mobile: ""
      };
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
        style: {
          background: "#ECECEC",
          padding: "30px"
        },
        className: "jsx-4087214989"
      }, external_react_default.a.createElement("h1", {
        style: {
          textAlign: "center"
        },
        className: "jsx-4087214989"
      }, "All Enquiries"), external_react_default.a.createElement(external_antd_["List"], {
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
          return external_react_default.a.createElement(external_antd_["List"].Item, {
            onClick: function onClick() {
              return _this3.openEnquiryDrawer(enquiry._id);
            }
          }, external_react_default.a.createElement(external_antd_["Skeleton"], {
            avatar: true,
            title: false,
            loading: enquiry.loading,
            active: true
          }, external_react_default.a.createElement(link_default.a, {
            href: "/dashboard?enquiry=" + enquiry._id
          }, external_react_default.a.createElement("a", {
            className: "jsx-4087214989"
          }, external_react_default.a.createElement(external_antd_["Card"], {
            hoverable: true,
            title: enquiry.category,
            bordered: false,
            style: {
              height: "180px",
              background: enquiry.isVerified ? null : null
            }
          }, "For ", external_react_default.a.createElement("b", {
            className: "jsx-4087214989"
          }, enquiry.serviceFor), " ", external_react_default.a.createElement("br", {
            className: "jsx-4087214989"
          }), "on", " ", external_react_default.a.createElement("b", {
            className: "jsx-4087214989"
          }, external_moment_default()(enquiry.eventDate).format("DD MMM, YYYY")), external_react_default.a.createElement("br", {
            className: "jsx-4087214989"
          }), "Bought by: ", external_react_default.a.createElement("b", {
            className: "jsx-4087214989"
          }, enquiry.interestedPartners.length, "/5"), " ", "vendors", external_react_default.a.createElement(Meta, {
            description: "Posted: " + external_moment_default()(enquiry.createdAt).from(external_moment_default()(Date.now())),
            style: {
              paddingTop: "10px",
              textAlign: "right",
              position: "relative"
            }
          }))))));
        }
      }), external_react_default.a.createElement(external_antd_["Modal"], {
        title: currentEnquiry.category,
        onCancel: this.onClose,
        visible: this.state.drawerVisible,
        style: {
          textAlign: "center"
        },
        footer: []
      }, external_react_default.a.createElement(external_antd_["Row"], {
        type: "flex",
        align: "middle"
      }, external_react_default.a.createElement(external_antd_["Col"], {
        style: {
          textAlign: "left"
        },
        md: {
          span: 9,
          offset: 3
        },
        sm: {
          span: 22,
          offset: 2
        }
      }, external_react_default.a.createElement("b", {
        className: "jsx-4087214989"
      }, "Customer Name: "), currentEnquiry.user.name, external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement("b", {
        className: "jsx-4087214989"
      }, "Event: "), currentEnquiry.serviceFor, external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement("b", {
        className: "jsx-4087214989"
      }, "Event Date: "), " ", external_moment_default()(currentEnquiry.eventDate).format("DD MMM, YYYY"), external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement("b", {
        className: "jsx-4087214989"
      }, "No. of Guests: "), currentEnquiry.noOfGuests, external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement("b", {
        className: "jsx-4087214989"
      }, "Services Required: "), currentEnquiry.servicesRequired, external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement("b", {
        className: "jsx-4087214989"
      }, "Location: "), currentEnquiry.locality, " in ", currentEnquiry.city, external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement("b", {
        className: "jsx-4087214989"
      }, "Budget: "), " ", currentEnquiry.budgetRange.to !== 0 ? "Rs." + currentEnquiry.budgetRange.from.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " - Rs." + currentEnquiry.budgetRange.to.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "Above Rs." + currentEnquiry.budgetRange.from.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement("b", {
        className: "jsx-4087214989"
      }, "Other Info: "), currentEnquiry.otherInfo, external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement("b", {
        className: "jsx-4087214989"
      }, "CelebratON Comments: "), currentEnquiry.celebratonComments), external_react_default.a.createElement(external_antd_["Col"], {
        style: {
          textAlign: "center"
        },
        md: {
          span: 12
        },
        sm: {
          span: 24
        },
        xs: {
          span: 24
        }
      }, typeof currentEnquiry.interestedPartners != "undefined" && currentEnquiry.interestedPartners.includes(this.state.profile._id) ? external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h2", {
        className: "jsx-4087214989"
      }, external_react_default.a.createElement("u", {
        className: "jsx-4087214989"
      }, "Customer Contact")), external_react_default.a.createElement("b", {
        className: "jsx-4087214989"
      }, "Name: "), currentEnquiry.user.name, external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement("b", {
        className: "jsx-4087214989"
      }, "Mobile: "), currentEnquiry.user.mobile, external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement("b", {
        className: "jsx-4087214989"
      }, "Email: "), currentEnquiry.user.email, external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement("a", {
        href: "tel:+91".concat(currentEnquiry.user.mobile),
        className: "jsx-4087214989"
      }, external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        icon: "mobile",
        size: "large",
        style: {
          background: "green",
          borderColor: "green"
        }
      }, "Call")), "  ", external_react_default.a.createElement("a", {
        href: "mailto:".concat(currentEnquiry.user.email),
        className: "jsx-4087214989"
      }, external_react_default.a.createElement(external_antd_["Button"], (_React$createElement = {
        type: "primary",
        size: "default",
        icon: "mail"
      }, allEnquiries_defineProperty(_React$createElement, "size", "large"), allEnquiries_defineProperty(_React$createElement, "style", {
        background: "orange",
        borderColor: "orange"
      }), _React$createElement), "Mail"))) : external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h2", {
        className: "jsx-4087214989"
      }, external_react_default.a.createElement("u", {
        className: "jsx-4087214989"
      }, "Pricing Info")), external_react_default.a.createElement("b", {
        className: "jsx-4087214989"
      }, "Lead Price: "), "Rs.", currentEnquiry.leadAmount, external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement("b", {
        className: "jsx-4087214989"
      }, "Wallet Balance: "), "Rs.", this.state.profile.Wallet, external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement("b", {
        className: "jsx-4087214989"
      }, "Promotional Credit: "), "Rs.", this.state.profile.promoCredit, external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement(external_antd_["Button"], {
        type: "primary",
        icon: "caret-right",
        size: "large",
        style: {
          background: "green",
          borderColor: "green"
        },
        onClick: function onClick() {
          return _this3.payForLead();
        }
      }, "Pay Rs.", currentEnquiry.leadAmount), external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement("br", {
        className: "jsx-4087214989"
      }), external_react_default.a.createElement(external_antd_["Button"], allEnquiries_defineProperty({
        type: "danger",
        size: "default",
        icon: "heart"
      }, "size", "large"), "Add to Wishlist"))))), external_react_default.a.createElement(style_default.a, {
        styleId: "4087214989",
        css: ["a.jsx-4087214989{-webkit-text-decoration:none;text-decoration:none;}"]
      })));
    }
  }]);

  return AllEnquiries;
}(external_react_["Component"]);

/* harmony default export */ var allEnquiries = (Object(router_["withRouter"])(allEnquiries_AllEnquiries));
// CONCATENATED MODULE: ./pages/dashboard.js


function dashboard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { dashboard_typeof = function _typeof(obj) { return typeof obj; }; } else { dashboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return dashboard_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function dashboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function dashboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dashboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) dashboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) dashboard_defineProperties(Constructor, staticProps); return Constructor; }

function dashboard_possibleConstructorReturn(self, call) { if (call && (dashboard_typeof(call) === "object" || typeof call === "function")) { return call; } return dashboard_assertThisInitialized(self); }

function dashboard_getPrototypeOf(o) { dashboard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return dashboard_getPrototypeOf(o); }

function dashboard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) dashboard_setPrototypeOf(subClass, superClass); }

function dashboard_setPrototypeOf(o, p) { dashboard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return dashboard_setPrototypeOf(o, p); }

function dashboard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function dashboard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Header = external_antd_["Layout"].Header,
    Content = external_antd_["Layout"].Content,
    Footer = external_antd_["Layout"].Footer,
    Sider = external_antd_["Layout"].Sider;

var dashboard_Dashboard =
/*#__PURE__*/
function (_Component) {
  dashboard_inherits(Dashboard, _Component);

  function Dashboard() {
    var _getPrototypeOf2;

    var _this;

    dashboard_classCallCheck(this, Dashboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = dashboard_possibleConstructorReturn(this, (_getPrototypeOf2 = dashboard_getPrototypeOf(Dashboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    dashboard_defineProperty(dashboard_assertThisInitialized(dashboard_assertThisInitialized(_this)), "state", {
      content: null,
      limit: 20
    });

    dashboard_defineProperty(dashboard_assertThisInitialized(dashboard_assertThisInitialized(_this)), "clickManageProfile", function () {
      _this.setState({
        content: external_react_default.a.createElement(createOrUpdateProfile, {
          profile: _this.props.profile
        })
      });
    });

    dashboard_defineProperty(dashboard_assertThisInitialized(dashboard_assertThisInitialized(_this)), "clickAllEnquiries", function () {
      _this.setState({
        content: external_react_default.a.createElement(allEnquiries, {
          profile: _this.props.profile
        })
      });
    });

    dashboard_defineProperty(dashboard_assertThisInitialized(dashboard_assertThisInitialized(_this)), "clickViewProfile", function () {
      router_default.a.push("/profile?profileId=" + _this.props.profile._id);
    });

    return _this;
  }

  dashboard_createClass(Dashboard, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        content: external_react_default.a.createElement(allEnquiries, {
          profile: this.props.profile
        })
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {// if (this.context.currentUser.role !== "vendor") {
      //   if (this.context.currentUser.role === "admin") {
      //     Router.push("/admin/adminDashboard");
      //   } else if (this.context.currentUser.role === "customer") {
      //     Router.push("/");
      //   }
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_antd_["Layout"], {
        style: {
          overflow: "auto",
          height: "100vh",
          left: 0
        }
      }, external_react_default.a.createElement(Sider, {
        breakpoint: "lg",
        collapsedWidth: "0",
        onBreakpoint: function onBreakpoint(broken) {//   console.log(broken);
        },
        onCollapse: function onCollapse(collapsed, type) {//   console.log(collapsed, type);
        }
      }, external_react_default.a.createElement("div", {
        style: {
          textAlign: "center"
        }
      }, external_react_default.a.createElement("img", {
        src: "../static/logo.png",
        height: "80px"
      })), external_react_default.a.createElement(external_antd_["Menu"], {
        theme: "dark",
        mode: "inline",
        defaultSelectedKeys: []
      }, external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "1",
        onClick: function onClick() {
          return _this2.clickAllEnquiries();
        }
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "user"
      }), external_react_default.a.createElement("span", {
        className: "nav-text"
      }, "All Enquiries")), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "2",
        onClick: function onClick() {
          return _this2.clickManageProfile();
        }
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "video-camera"
      }), external_react_default.a.createElement("span", {
        className: "nav-text"
      }, "Vendor Dashboard")), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "3",
        onClick: function onClick() {
          return _this2.clickManageProfile();
        }
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "upload"
      }), external_react_default.a.createElement("span", {
        className: "nav-text"
      }, "Manage Profile")), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "4"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/profile?profileId=" + this.props.profile.slug,
        prefetch: true
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "user"
      }), external_react_default.a.createElement("span", {
        className: "nav-text"
      }, "View Profile")))), external_react_default.a.createElement(external_antd_["Menu"].Item, {
        key: "5",
        onClick: function onClick() {
          return _this2.clickManageProfile();
        }
      }, external_react_default.a.createElement(external_antd_["Icon"], {
        type: "user"
      }), external_react_default.a.createElement("span", {
        className: "nav-text"
      }, "Sign Out")))), external_react_default.a.createElement(Content, {
        style: {
          margin: "24px 16px 0"
        }
      }, external_react_default.a.createElement("div", {
        style: {
          padding: 24,
          background: "#fff",
          minHeight: 360
        }
      }, this.state.content, external_react_default.a.createElement(Footer, {
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
      regenerator_default.a.mark(function _callee() {
        var profile;
        return regenerator_default.a.wrap(function _callee$(_context) {
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
}(external_react_["Component"]);

dashboard_defineProperty(dashboard_Dashboard, "contextType", loginProvider["b" /* LoginContext */]);

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (dashboard_Dashboard);

/***/ })
/******/ ]);