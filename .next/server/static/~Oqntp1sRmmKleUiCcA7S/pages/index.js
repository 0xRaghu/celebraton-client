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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
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
/* 22 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(1);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(11);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "reqwest"
var external_reqwest_ = __webpack_require__(16);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./components/login/login.js
var login = __webpack_require__(12);

// EXTERNAL MODULE: ./components/provider/homeProvider.js
var homeProvider = __webpack_require__(10);

// EXTERNAL MODULE: ./components/provider/loginProvider.js
var loginProvider = __webpack_require__(4);

// EXTERNAL MODULE: external "superagent"
var external_superagent_ = __webpack_require__(29);

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(22);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/storage"
var storage_ = __webpack_require__(30);

// CONCATENATED MODULE: ./firebase/index.js

 // Initialize Firebase

var config = {
  apiKey: "AIzaSyDBKkiMBb-surroPJLRnYZdjW6cnFbwkyk",
  authDomain: "celebraton-1501228504967.firebaseapp.com",
  databaseURL: "https://celebraton-1501228504967.firebaseio.com",
  projectId: "celebraton-1501228504967",
  storageBucket: "celebraton-1501228504967.appspot.com",
  messagingSenderId: "758455806254"
};

try {
  app_default.a.initializeApp(config);
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

var storage = app_default.a.storage();

// CONCATENATED MODULE: ./components/home/categoryContent.js
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











var CLOUDINARY_UPLOAD_PRESET = "celebraton";
var CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v2/celebraton/image/upload"; // cloudinary.config({
//   cloud_name: "celebraton",
//   api_key: "762772115648482",
//   api_secret: "HmVoOwYoNTKA-htyImhCfBA51qI"
// });

var categoryContent_Enquiry =
/*#__PURE__*/
function (_Component) {
  _inherits(Enquiry, _Component);

  function Enquiry() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Enquiry);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Enquiry)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      inputGuests: 0,
      Imageurl: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "submitEnquiry", function (e) {
      e.preventDefault();

      _this.props.form.validateFieldsAndScroll(function (err, values) {
        if (!err) {
          var _request = {
            enquiry: values,
            category: _this.props.modalCategory
          };
          external_axios_default.a.post("/api/enquiries/addEnquiry", _request).then(_this.context.handleCancel());
          external_antd_["notification"].open({
            message: "Notification Title",
            description: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
            duration: 10,
            onClick: function onClick() {
              console.log("Notification Clicked!");
            }
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "disabledDate", function (current) {
      // Can not select days before today and today
      return current < external_moment_default()().startOf("day");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeGuests", function (value) {
      _this.setState({
        inputGuests: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "normFile", function (e) {
      var file = e.file;
      var upload = storage.ref("/customerImages/".concat(file.name)).put(file.originFileObj);
      upload.on("state_changed", function (snapshot) {
        console.log("progress");
      }, function (error) {
        console.log("error");
      }, function () {
        storage.ref("customerImages").child(file.name).getDownloadURL().then(function (url) {
          console.log(url);
        });
      });
    });

    return _this;
  }

  _createClass(Enquiry, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$context = this.context,
          locations = _this$context.locations,
          selectedLocation = _this$context.selectedLocation,
          selectLocationInModal = _this$context.selectLocationInModal;
      var modalCategory = this.props.modalCategory;
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
      var TextArea = external_antd_["Input"].TextArea;
      var Layout, layoutVariable;

      if (typeof screen !== "undefined") {
        Layout = screen.width <= "850" ? formItemLayoutVertical : formItemLayoutHorizontal;
        layoutVariable = screen.width <= "850" ? "vertical" : "horizontal";
      } else {
        Layout = formItemLayoutHorizontal;
        layoutVariable = "horizontal";
      }

      return external_react_default.a.createElement(homeProvider["a" /* HomeConsumer */], null, function () {
        return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_antd_["Form"], {
          layout: layoutVariable,
          onSubmit: _this2.submitEnquiry
        }, external_react_default.a.createElement(external_antd_["Form"].Item, _extends({
          label: modalCategory.name.concat(" required for?")
        }, Layout), getFieldDecorator("serviceFor", {
          initialValue: modalCategory.eventType[0]
        })(external_react_default.a.createElement(external_antd_["Radio"].Group, {
          onChange: _this2.handleFormLayoutChange,
          buttonStyle: ""
        }, modalCategory.eventType.map(function (eventType) {
          return external_react_default.a.createElement(external_antd_["Radio"], {
            key: eventType,
            value: eventType
          }, eventType);
        })))), external_react_default.a.createElement(external_antd_["Form"].Item, _extends({}, Layout, {
          label: "Event Date"
        }), getFieldDecorator("eventDate", {
          rules: [{
            required: true,
            message: "Please select the Event Date!"
          }]
        })(external_react_default.a.createElement(external_antd_["DatePicker"], {
          format: dateFormat,
          disabledDate: _this2.disabledDate
        }))), external_react_default.a.createElement(external_antd_["Form"].Item, _extends({}, Layout, {
          label: "No of Guests"
        }), getFieldDecorator("noOfGuests", {
          value: typeof _this2.state.inputGuests === "number" ? _this2.state.inputGuests : 0
        })(external_react_default.a.createElement(external_antd_["InputNumber"], {
          onChange: _this2.onChangeGuests
        }))), external_react_default.a.createElement(external_antd_["Form"].Item, _extends({}, Layout, {
          label: "Services required"
        }), getFieldDecorator("servicesRequired", {
          rules: [{
            required: true,
            message: "Please select the Services you require!"
          }]
        })(external_react_default.a.createElement(external_antd_["Checkbox"].Group, {
          style: {
            width: "100%"
          }
        }, external_react_default.a.createElement(external_antd_["Row"], null, modalCategory.servicesRequired.map(function (servicesRequired) {
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
            key: servicesRequired
          }, external_react_default.a.createElement(external_antd_["Checkbox"], {
            value: servicesRequired
          }, servicesRequired));
        }))))), external_react_default.a.createElement(external_antd_["Form"].Item, _extends({
          label: "In which city?"
        }, Layout), getFieldDecorator("city", {
          initialValue: selectedLocation
        })(external_react_default.a.createElement(external_antd_["Radio"].Group, {
          onChange: selectLocationInModal,
          buttonStyle: "solid"
        }, locations.map(function (location) {
          return external_react_default.a.createElement(external_antd_["Radio"].Button, {
            key: location,
            value: location
          }, location);
        })))), external_react_default.a.createElement(external_antd_["Form"].Item, _extends({}, Layout, {
          label: "Area of event (in " + selectedLocation + ")"
        }), getFieldDecorator("locality", {})(external_react_default.a.createElement(external_antd_["Input"], null))), external_react_default.a.createElement(external_antd_["Form"].Item, _extends({
          label: "What is your budget?"
        }, Layout), getFieldDecorator("budget", {
          rules: [{
            required: true,
            message: "Please select the budget in your mind!"
          }]
        })(external_react_default.a.createElement(external_antd_["Radio"].Group, {
          onChange: _this2.handleFormLayoutChange,
          buttonStyle: ""
        }, modalCategory.budget.map(function (budget) {
          return external_react_default.a.createElement(external_antd_["Radio"], {
            key: budget._id,
            value: budget.option
          }, budget.to !== 0 ? "Rs." + budget.from.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " - Rs." + budget.to.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "Above Rs." + budget.from.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        })))), external_react_default.a.createElement(external_antd_["Form"].Item, _extends({}, Layout, {
          label: "Sample Image (if any)",
          extra: "Our vendors will get a fair idea about the requirements"
        }), getFieldDecorator("sampleImages", {
          valuePropName: "fileList",
          getValueFromEvent: _this2.normFile
        })(external_react_default.a.createElement(external_antd_["Upload"], {
          name: "logo",
          listType: "picture",
          multiple: true
        }, external_react_default.a.createElement(external_antd_["Button"], null, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "upload"
        }), " Click to upload")))), external_react_default.a.createElement(external_antd_["Form"].Item, _extends({}, Layout, {
          label: "Any other info?"
        }), getFieldDecorator("otherInfo", {})(external_react_default.a.createElement(TextArea, {
          placeholder: "Any other details apart from mentioned above?",
          autosize: true
        })), external_react_default.a.createElement("div", {
          style: {
            margin: "24px 0"
          }
        })), external_react_default.a.createElement(loginProvider["a" /* LoginConsumer */], null, function (_ref) {
          var isAuthenticated = _ref.isAuthenticated;
          return isAuthenticated ? external_react_default.a.createElement("div", {
            style: {
              textAlign: "center"
            }
          }, external_react_default.a.createElement(external_antd_["Form"].Item, tailformItemLayout, external_react_default.a.createElement(external_antd_["Button"], {
            type: "primary",
            htmlType: "submit",
            size: "large"
          }, "Submit Enquiry"))) : null;
        })), external_react_default.a.createElement(loginProvider["a" /* LoginConsumer */], null, function (_ref2) {
          var isAuthenticated = _ref2.isAuthenticated;
          return isAuthenticated ? null : external_react_default.a.createElement(login["a" /* default */], {
            layoutVariable: layoutVariable,
            layout: Layout,
            tailformItemLayout: tailformItemLayout
          });
        }));
      });
    }
  }]);

  return Enquiry;
}(external_react_["Component"]); //   {/* //   <div>
//   //     <div>
//   //       {category.name} required for?<br />
//   //       <Radio.Group defaultValue={category.eventType[0]} buttonStyle="">
//   //   {category.eventType.map(eventType => ( */}
//     <Radio key={eventType} value={eventType}>
//       {eventType}
//     </Radio>
//   ))}
//       </Radio.Group>
//     </div>
//     <div>
// {category.servicesRequired.map(servicesRequired => (
//   <div key={servicesRequired}>{servicesRequired}</div>
// ))}
//     </div>
//     <div>
//       {category.budget.map(budget => (
//         <div key={budget}>{budget.from}</div>
//       ))}
//     </div>
//   </div>


_defineProperty(categoryContent_Enquiry, "contextType", homeProvider["b" /* HomeContext */]);

var CategoryContent = external_antd_["Form"].create({
  name: "enquiryForm"
})(categoryContent_Enquiry);
/* harmony default export */ var categoryContent = __webpack_exports__["a"] = (CategoryContent);

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);


/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(6);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(7);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./styles.less
var styles = __webpack_require__(15);

// EXTERNAL MODULE: ./components/home/head.js
var head = __webpack_require__(18);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(1);

// EXTERNAL MODULE: ./components/contactForm.js
var contactForm = __webpack_require__(21);

// EXTERNAL MODULE: ./components/provider/homeProvider.js
var homeProvider = __webpack_require__(10);

// CONCATENATED MODULE: ./components/home/hero.js


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


 // import "~antd/dist/antd.less";




var Option = external_antd_["Select"].Option;

function handleChange(value) {
  console.log("selected ".concat(value));
}

var hero_Hero =
/*#__PURE__*/
function (_Component) {
  _inherits(Hero, _Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, _getPrototypeOf(Hero).apply(this, arguments));
  }

  _createClass(Hero, [{
    key: "render",
    value: function render() {
      var _this$context = this.context,
          locations = _this$context.locations,
          selectedLocation = _this$context.selectedLocation,
          selectLocation = _this$context.selectLocation;
      return external_react_default.a.createElement(homeProvider["a" /* HomeConsumer */], null, function () {
        return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
          className: "jsx-3569185827" + " " + "hero-image"
        }, external_react_default.a.createElement(external_antd_["Row"], {
          type: "flex",
          style: {
            alignItems: "center",
            height: "500px"
          }
        }, external_react_default.a.createElement(external_antd_["Col"], {
          sm: 15,
          xs: 24
        }, external_react_default.a.createElement("div", {
          className: "jsx-3569185827" + " " + "hero-text"
        }, external_react_default.a.createElement("img", {
          src: "../static/logo.png",
          height: "150px",
          className: "jsx-3569185827"
        }), external_react_default.a.createElement("h1", {
          className: "jsx-3569185827"
        }, "Hire the best EVENT EXPERTS"), external_react_default.a.createElement("h2", {
          className: "jsx-3569185827"
        }, external_react_default.a.createElement(external_antd_["Icon"], {
          type: "phone"
        }), external_react_default.a.createElement("a", {
          href: "tel:07904204718",
          className: "jsx-3569185827"
        }, "+91-7904204718")), external_react_default.a.createElement(external_antd_["Select"], {
          defaultValue: "Chennai",
          size: "large",
          style: {
            width: 180
          },
          onChange: selectLocation,
          value: selectedLocation
        }, locations.map(function (location) {
          return external_react_default.a.createElement(Option, {
            key: location
          }, location);
        })))), external_react_default.a.createElement(external_antd_["Col"], {
          sm: 9,
          xs: 24
        }, external_react_default.a.createElement("div", {
          className: "jsx-3569185827" + " " + "inputForm"
        }, external_react_default.a.createElement(contactForm["a" /* default */], null)))), external_react_default.a.createElement(style_default.a, {
          styleId: "3569185827",
          css: ["body.jsx-3569185827,html.jsx-3569185827{height:100%;}", ".hero-image.jsx-3569185827{background-image:linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.4) ), url(\"../static/banner3.jpg\");height:500px;align:center;background-position:top;background-repeat:no-repeat;background-size:cover;position:relative;}", "@media only screen and (max-width:600px){.hero-image.jsx-3569185827{height:600px;}}", ".hero-text.jsx-3569185827{text-align:center;position:relative;color:white;}", "h1.jsx-3569185827,h2.jsx-3569185827,a.jsx-3569185827{color:white;}", ".inputForm.jsx-3569185827{text-align:center;}"]
        })));
      });
    }
  }]);

  return Hero;
}(external_react_["Component"]);

_defineProperty(hero_Hero, "contextType", homeProvider["b" /* HomeContext */]);

/* harmony default export */ var hero = (hero_Hero);
// EXTERNAL MODULE: ./components/nav.js
var nav = __webpack_require__(17);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__(9);

// CONCATENATED MODULE: ./components/home/categories.js
function categories_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { categories_typeof = function _typeof(obj) { return typeof obj; }; } else { categories_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return categories_typeof(obj); }

function categories_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function categories_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function categories_createClass(Constructor, protoProps, staticProps) { if (protoProps) categories_defineProperties(Constructor.prototype, protoProps); if (staticProps) categories_defineProperties(Constructor, staticProps); return Constructor; }

function categories_possibleConstructorReturn(self, call) { if (call && (categories_typeof(call) === "object" || typeof call === "function")) { return call; } return categories_assertThisInitialized(self); }

function categories_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function categories_getPrototypeOf(o) { categories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return categories_getPrototypeOf(o); }

function categories_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) categories_setPrototypeOf(subClass, superClass); }

function categories_setPrototypeOf(o, p) { categories_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return categories_setPrototypeOf(o, p); }





var categories_Categories =
/*#__PURE__*/
function (_Component) {
  categories_inherits(Categories, _Component);

  function Categories() {
    categories_classCallCheck(this, Categories);

    return categories_possibleConstructorReturn(this, categories_getPrototypeOf(Categories).apply(this, arguments));
  }

  categories_createClass(Categories, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, "hi this is raghu"));
    }
  }]);

  return Categories;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/home/HowItWorks.js


function HowItWorks_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { HowItWorks_typeof = function _typeof(obj) { return typeof obj; }; } else { HowItWorks_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return HowItWorks_typeof(obj); }

function HowItWorks_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HowItWorks_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HowItWorks_createClass(Constructor, protoProps, staticProps) { if (protoProps) HowItWorks_defineProperties(Constructor.prototype, protoProps); if (staticProps) HowItWorks_defineProperties(Constructor, staticProps); return Constructor; }

function HowItWorks_possibleConstructorReturn(self, call) { if (call && (HowItWorks_typeof(call) === "object" || typeof call === "function")) { return call; } return HowItWorks_assertThisInitialized(self); }

function HowItWorks_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function HowItWorks_getPrototypeOf(o) { HowItWorks_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return HowItWorks_getPrototypeOf(o); }

function HowItWorks_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) HowItWorks_setPrototypeOf(subClass, superClass); }

function HowItWorks_setPrototypeOf(o, p) { HowItWorks_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return HowItWorks_setPrototypeOf(o, p); }




var HowItWorks_HowItWorks =
/*#__PURE__*/
function (_Component) {
  HowItWorks_inherits(HowItWorks, _Component);

  function HowItWorks() {
    HowItWorks_classCallCheck(this, HowItWorks);

    return HowItWorks_possibleConstructorReturn(this, HowItWorks_getPrototypeOf(HowItWorks).apply(this, arguments));
  }

  HowItWorks_createClass(HowItWorks, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        style: {
          padding: "30px"
        },
        className: "jsx-530470695" + " " + "center"
      }, external_react_default.a.createElement(external_antd_["Row"], {
        gutter: 16
      }, external_react_default.a.createElement(external_antd_["Col"], {
        sm: {
          span: 8
        }
      }, external_react_default.a.createElement(external_antd_["Card"], {
        title: "Submit Enquiry"
      }, "Login, Select Locaton, select category and share your Requirement")), external_react_default.a.createElement(external_antd_["Col"], {
        sm: {
          span: 8
        }
      }, external_react_default.a.createElement(external_antd_["Card"], {
        title: "Get Notified"
      }, "YAY! You will be notified with Best matching Vendors partners from the category")), external_react_default.a.createElement(external_antd_["Col"], {
        sm: {
          span: 8
        }
      }, external_react_default.a.createElement(external_antd_["Card"], {
        title: "Negotiate & Book"
      }, "Review the partners, Connect with them directly, Negotiate and Book your order"))), external_react_default.a.createElement(style_default.a, {
        styleId: "530470695",
        css: [".center.jsx-530470695{text-align:center;}"]
      }));
    }
  }]);

  return HowItWorks;
}(external_react_["Component"]);

/* harmony default export */ var home_HowItWorks = (HowItWorks_HowItWorks);
// CONCATENATED MODULE: ./components/home/testimonials.js


function testimonials_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { testimonials_typeof = function _typeof(obj) { return typeof obj; }; } else { testimonials_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return testimonials_typeof(obj); }

function testimonials_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function testimonials_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function testimonials_createClass(Constructor, protoProps, staticProps) { if (protoProps) testimonials_defineProperties(Constructor.prototype, protoProps); if (staticProps) testimonials_defineProperties(Constructor, staticProps); return Constructor; }

function testimonials_possibleConstructorReturn(self, call) { if (call && (testimonials_typeof(call) === "object" || typeof call === "function")) { return call; } return testimonials_assertThisInitialized(self); }

function testimonials_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function testimonials_getPrototypeOf(o) { testimonials_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return testimonials_getPrototypeOf(o); }

function testimonials_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) testimonials_setPrototypeOf(subClass, superClass); }

function testimonials_setPrototypeOf(o, p) { testimonials_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return testimonials_setPrototypeOf(o, p); }




var testimonials_Testimonials =
/*#__PURE__*/
function (_Component) {
  testimonials_inherits(Testimonials, _Component);

  function Testimonials() {
    testimonials_classCallCheck(this, Testimonials);

    return testimonials_possibleConstructorReturn(this, testimonials_getPrototypeOf(Testimonials).apply(this, arguments));
  }

  testimonials_createClass(Testimonials, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_antd_["Layout"], {
        style: {
          textAlign: "center",
          paddingTop: "15px"
        }
      }, external_react_default.a.createElement("h2", {
        className: "jsx-1656153314"
      }, "Testimonials"), external_react_default.a.createElement(external_antd_["Carousel"], {
        autoplay: true,
        effect: "fade",
        style: {
          textAlign: "center"
        }
      }, external_react_default.a.createElement("div", {
        className: "jsx-1656153314"
      }, external_react_default.a.createElement("p", {
        className: "jsx-1656153314"
      }, "Hired a Birthday Planner using CelebratON for my kid's birthday. Surprise elements like Flash Mob and Speed Painting were totally unknown to my family members. It was a great experience.", external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/celebraton/image/upload/v1516271771/santhosh_copy_qcmwys.jpg",
        height: "50px",
        className: "jsx-1656153314" + " " + "circle"
      }), "-Santhosh Kumar, Chennai")), external_react_default.a.createElement("div", {
        className: "jsx-1656153314"
      }, external_react_default.a.createElement("p", {
        className: "jsx-1656153314"
      }, "Wanted to surprise my girlfriend on her birthday and hired someone from CelebratON. With romantic table decoration and a beach side dinner, the day is still cherished.", external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/celebraton/image/upload/v1516271953/ragav_small_lwhvmk.jpg",
        height: "50px",
        className: "jsx-1656153314" + " " + "circle"
      }), "-Ragavendhar, Chennai")), external_react_default.a.createElement("div", {
        className: "jsx-1656153314"
      }, external_react_default.a.createElement("p", {
        className: "jsx-1656153314"
      }, "Was looking for a Decorator for my sister's marriage and came across CelebratON. The decoration was grand at a fair price. I got 4 different quotes and chose the best one of those.", external_react_default.a.createElement("img", {
        src: "https://res.cloudinary.com/celebraton/image/upload/v1516272505/Dhanya_small_qcl184.jpg",
        height: "50px",
        className: "jsx-1656153314" + " " + "circle"
      }), "-Dhanya Krishnan, Bangalore"))), external_react_default.a.createElement(style_default.a, {
        styleId: "1656153314",
        css: [".circle.jsx-1656153314{border-radius:50%;margin-left:auto;margin-right:auto;display:block;}"]
      }));
    }
  }]);

  return Testimonials;
}(external_react_["Component"]);

/* harmony default export */ var testimonials = (testimonials_Testimonials);
// EXTERNAL MODULE: ./components/home/categoryContent.js + 1 modules
var categoryContent = __webpack_require__(26);

// CONCATENATED MODULE: ./components/home/modal.js
function modal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { modal_typeof = function _typeof(obj) { return typeof obj; }; } else { modal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return modal_typeof(obj); }

function modal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function modal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function modal_createClass(Constructor, protoProps, staticProps) { if (protoProps) modal_defineProperties(Constructor.prototype, protoProps); if (staticProps) modal_defineProperties(Constructor, staticProps); return Constructor; }

function modal_possibleConstructorReturn(self, call) { if (call && (modal_typeof(call) === "object" || typeof call === "function")) { return call; } return modal_assertThisInitialized(self); }

function modal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function modal_getPrototypeOf(o) { modal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return modal_getPrototypeOf(o); }

function modal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) modal_setPrototypeOf(subClass, superClass); }

function modal_setPrototypeOf(o, p) { modal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return modal_setPrototypeOf(o, p); }

function modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var modal_Popup =
/*#__PURE__*/
function (_Component) {
  modal_inherits(Popup, _Component);

  function Popup() {
    modal_classCallCheck(this, Popup);

    return modal_possibleConstructorReturn(this, modal_getPrototypeOf(Popup).apply(this, arguments));
  }

  modal_createClass(Popup, [{
    key: "render",
    value: function render() {
      var _this$context = this.context,
          modalCategory = _this$context.modalCategory,
          visible = _this$context.visible,
          handleOk = _this$context.handleOk,
          handleCancel = _this$context.handleCancel;
      return external_react_default.a.createElement(homeProvider["a" /* HomeConsumer */], null, function () {
        return external_react_default.a.createElement("div", {
          id: "enquiryModal"
        }, external_react_default.a.createElement(external_antd_["Modal"], {
          title: modalCategory.name + " Enquiry",
          visible: visible,
          onOk: handleOk,
          onCancel: handleCancel,
          footer: external_react_default.a.createElement("div", {
            style: {
              textAlign: "center"
            }
          }, "Kindly fill the above form so we can find you the best vendor partners")
        }, external_react_default.a.createElement(categoryContent["a" /* default */], {
          modalCategory: modalCategory
        })));
      });
    }
  }]);

  return Popup;
}(external_react_["Component"]);

modal_defineProperty(modal_Popup, "contextType", homeProvider["b" /* HomeContext */]);

/* harmony default export */ var modal = (modal_Popup);
// EXTERNAL MODULE: ./components/setAuthToken.js
var setAuthToken = __webpack_require__(13);

// EXTERNAL MODULE: ./components/provider/loginProvider.js
var loginProvider = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.js



function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var Meta = external_antd_["Card"].Meta;

var pages_Home =
/*#__PURE__*/
function (_Component) {
  pages_inherits(Home, _Component);

  function Home() {
    pages_classCallCheck(this, Home);

    return pages_possibleConstructorReturn(this, pages_getPrototypeOf(Home).apply(this, arguments));
  }

  pages_createClass(Home, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.context.updateCatandLoc(this.props.categories, this.props.locations);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$context = this.context,
          category = _this$context.category,
          disabled = _this$context.disabled,
          updateLimit = _this$context.updateLimit,
          clickModal = _this$context.clickModal;
      return external_react_default.a.createElement(homeProvider["a" /* HomeConsumer */], null, function () {
        return external_react_default.a.createElement("div", {
          className: "jsx-148727689"
        }, external_react_default.a.createElement(head["a" /* default */], {
          title: "Home"
        }), external_react_default.a.createElement(hero, null), external_react_default.a.createElement("div", {
          className: "jsx-148727689" + " " + "center"
        }, external_react_default.a.createElement("div", {
          style: {
            background: "#ECECEC",
            padding: "30px"
          },
          className: "jsx-148727689"
        }, external_react_default.a.createElement(external_antd_["Row"], {
          gutter: 16
        }, external_react_default.a.createElement("h1", {
          className: "jsx-148727689" + " " + "h1Heading"
        }, "Submit your Enquiry directly below"), category.map(function (category) {
          return external_react_default.a.createElement("h2", {
            key: category._id,
            className: "jsx-148727689"
          }, external_react_default.a.createElement(external_antd_["Col"], {
            span: 8
          }, external_react_default.a.createElement(external_antd_["Card"], {
            hoverable: true,
            style: {
              width: 240
            },
            bordered: false,
            onClick: function onClick() {
              return clickModal(category);
            }
          }, external_react_default.a.createElement(Meta, {
            title: external_react_default.a.createElement("div", {
              className: "jsx-148727689"
            }, external_react_default.a.createElement("i", {
              className: "jsx-148727689" + " " + "large material-icons"
            }, category.icon), external_react_default.a.createElement("br", {
              className: "jsx-148727689"
            }), category.name)
          }))));
        })), external_react_default.a.createElement(external_antd_["Button"], {
          onClick: updateLimit,
          disabled: disabled
        }, "View More")), external_react_default.a.createElement("br", {
          className: "jsx-148727689"
        })), external_react_default.a.createElement("h1", {
          className: "jsx-148727689" + " " + "h1Heading"
        }, "How it Works"), external_react_default.a.createElement(home_HowItWorks, null), external_react_default.a.createElement(modal, null), external_react_default.a.createElement(testimonials, null), external_react_default.a.createElement(style_default.a, {
          styleId: "148727689",
          css: [".h1Heading.jsx-148727689{text-align:center;color:#595959;}", "h2.jsx-148727689{display:inline-block;}", ".center.jsx-148727689{text-align:center;}", "i.jsx-148727689{font-size:50px;}"]
        }));
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var categories, locations;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return external_axios_default.a.get("/api/categories/allCategories/1/0");

              case 2:
                categories = _context.sent;
                _context.next = 5;
                return categories.data;

              case 5:
                categories = _context.sent;
                _context.next = 8;
                return external_axios_default.a.get("/api/admin/getLocations");

              case 8:
                locations = _context.sent;
                _context.next = 11;
                return locations.data;

              case 11:
                locations = _context.sent;
                return _context.abrupt("return", {
                  categories: categories,
                  locations: locations
                });

              case 13:
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

  return Home;
}(external_react_["Component"]);

pages_defineProperty(pages_Home, "contextType", homeProvider["b" /* HomeContext */]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ })
/******/ ]);