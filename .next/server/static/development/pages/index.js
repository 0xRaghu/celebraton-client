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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/contactForm.js":
/*!***********************************!*\
  !*** ./components/contactForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/raghu/Celebraton-client/components/contactForm.js";



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
        className: "jsx-1858266642",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        xs: {
          span: 12,
          offset: 6
        },
        lg: {
          span: 12,
          offset: 6
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          align: "center",
          color: this.props.color
        },
        className: "jsx-1858266642",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Request Callback"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onSubmit: this.handleSubmit,
        className: "login-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, getFieldDecorator("name", {
        rules: [{
          required: true,
          message: "Please enter your Name"
        }]
      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        prefix: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
          type: "text",
          style: {
            color: "rgba(0,0,0,.25)"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }),
        placeholder: "Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, getFieldDecorator("mobile", {
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
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }),
        type: "input",
        placeholder: "Mobile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "primary",
        htmlType: "submit",
        className: "login-form-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Request Callback"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1858266642",
        css: "#components-form-demo-normal-login.jsx-1858266642 .login-form.jsx-1858266642{max-width:30px;}.ant-input.jsx-1858266642{padding:50px;}#components-form-demo-normal-login.jsx-1858266642 .login-form-button.jsx-1858266642{width:100%;}h1.jsx-1858266642{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdodS9DZWxlYnJhdG9uLWNsaWVudC9jb21wb25lbnRzL2NvbnRhY3RGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFb0IsQUFHNEIsQUFHRixBQUdGLEFBR0MsV0FGZCxDQUdBLENBTkEsRUFIQSIsImZpbGUiOiIvVXNlcnMvcmFnaHUvQ2VsZWJyYXRvbi1jbGllbnQvY29tcG9uZW50cy9jb250YWN0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIEljb24sIElucHV0LCBCdXR0b24sIENoZWNrYm94LCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNsYXNzIE5vcm1hbExvZ2luRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLmZvcm0udmFsaWRhdGVGaWVsZHMoKGVyciwgdmFsdWVzKSA9PiB7XG4gICAgICBpZiAoIWVycikge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIHZhbHVlcyBvZiBmb3JtOiBcIiwgdmFsdWVzKTtcbiAgICAgICAgdmFsdWVzLnByb2ZpbGUgPSB0aGlzLnByb3BzLnByb2ZpbGU7XG4gICAgICAgIGF4aW9zLnBvc3QoXCIvYXBpL2NvbnRhY3RGb3Jtcy9DdXN0b21lclwiLCB2YWx1ZXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGdldEZpZWxkRGVjb3JhdG9yIH0gPSB0aGlzLnByb3BzLmZvcm07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB4cz17eyBzcGFuOiAxMiwgb2Zmc2V0OiA2IH19IGxnPXt7IHNwYW46IDEyLCBvZmZzZXQ6IDYgfX0+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3sgYWxpZ246IFwiY2VudGVyXCIsIGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yIH19PlxuICAgICAgICAgICAgICBSZXF1ZXN0IENhbGxiYWNrXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCI+XG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKFwibmFtZVwiLCB7XG4gICAgICAgICAgICAgICAgICBydWxlczogW3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiUGxlYXNlIGVudGVyIHlvdXIgTmFtZVwiIH1dXG4gICAgICAgICAgICAgICAgfSkoXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4PXtcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidGV4dFwiIHN0eWxlPXt7IGNvbG9yOiBcInJnYmEoMCwwLDAsLjI1KVwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XG4gICAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKFwibW9iaWxlXCIsIHtcbiAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciB5b3VyIE1vYmlsZSBOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbWluOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIk1vYmlsZSBudW1iZXIgbXVzdCBiZSBtaW4gMTAgZGlnaXRzIGxvbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSkoXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4PXtcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwidGV4dFwiIHN0eWxlPXt7IGNvbG9yOiBcInJnYmEoMCwwLDAsLjI1KVwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb2JpbGVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbi1mb3JtLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUmVxdWVzdCBDYWxsYmFja1xuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAjY29tcG9uZW50cy1mb3JtLWRlbW8tbm9ybWFsLWxvZ2luIC5sb2dpbi1mb3JtIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmFudC1pbnB1dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjY29tcG9uZW50cy1mb3JtLWRlbW8tbm9ybWFsLWxvZ2luIC5sb2dpbi1mb3JtLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBXcmFwcGVkTm9ybWFsTG9naW5Gb3JtID0gRm9ybS5jcmVhdGUoeyBuYW1lOiBcIm5vcm1hbF9sb2dpblwiIH0pKFxuICBOb3JtYWxMb2dpbkZvcm1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZWROb3JtYWxMb2dpbkZvcm07XG4iXX0= */\n/*@ sourceURL=/Users/raghu/Celebraton-client/components/contactForm.js */",
        __self: this
      }));
    }
  }]);

  return NormalLoginForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var WrappedNormalLoginForm = antd__WEBPACK_IMPORTED_MODULE_2__["Form"].create({
  name: "normal_login"
})(NormalLoginForm);
/* harmony default export */ __webpack_exports__["default"] = (WrappedNormalLoginForm);

/***/ }),

/***/ "./components/home/HowItWorks.js":
/*!***************************************!*\
  !*** ./components/home/HowItWorks.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/raghu/Celebraton-client/components/home/HowItWorks.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var HowItWorks =
/*#__PURE__*/
function (_Component) {
  _inherits(HowItWorks, _Component);

  function HowItWorks() {
    _classCallCheck(this, HowItWorks);

    return _possibleConstructorReturn(this, _getPrototypeOf(HowItWorks).apply(this, arguments));
  }

  _createClass(HowItWorks, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          padding: "30px"
        },
        className: "jsx-530470695" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          span: 8
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        title: "Submit Enquiry",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Login, Select Locaton, select category and share your Requirement")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          span: 8
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        title: "Get Notified",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "YAY! You will be notified with Best matching Vendors partners from the category")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: {
          span: 8
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        title: "Negotiate & Book",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Review the partners, Connect with them directly, Negotiate and Book your order"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "530470695",
        css: ".center.jsx-530470695{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdodS9DZWxlYnJhdG9uLWNsaWVudC9jb21wb25lbnRzL2hvbWUvSG93SXRXb3Jrcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQm9CLEFBRytCLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvcmFnaHUvQ2VsZWJyYXRvbi1jbGllbnQvY29tcG9uZW50cy9ob21lL0hvd0l0V29ya3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3csIENvbCwgQ2FyZCB9IGZyb20gXCJhbnRkXCI7XG5cbmNsYXNzIEhvd0l0V29ya3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIzMHB4XCIgfX0gY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgIDxSb3cgZ3V0dGVyPXsxNn0+XG4gICAgICAgICAgPENvbCBzbT17eyBzcGFuOiA4IH19PlxuICAgICAgICAgICAgPENhcmQgdGl0bGU9XCJTdWJtaXQgRW5xdWlyeVwiPlxuICAgICAgICAgICAgICBMb2dpbiwgU2VsZWN0IExvY2F0b24sIHNlbGVjdCBjYXRlZ29yeSBhbmQgc2hhcmUgeW91ciBSZXF1aXJlbWVudFxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgc209e3sgc3BhbjogOCB9fT5cbiAgICAgICAgICAgIDxDYXJkIHRpdGxlPVwiR2V0IE5vdGlmaWVkXCI+XG4gICAgICAgICAgICAgIFlBWSEgWW91IHdpbGwgYmUgbm90aWZpZWQgd2l0aCBCZXN0IG1hdGNoaW5nIFZlbmRvcnMgcGFydG5lcnMgZnJvbVxuICAgICAgICAgICAgICB0aGUgY2F0ZWdvcnlcbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHNtPXt7IHNwYW46IDggfX0+XG4gICAgICAgICAgICA8Q2FyZCB0aXRsZT1cIk5lZ290aWF0ZSAmIEJvb2tcIj5cbiAgICAgICAgICAgICAgUmV2aWV3IHRoZSBwYXJ0bmVycywgQ29ubmVjdCB3aXRoIHRoZW0gZGlyZWN0bHksIE5lZ290aWF0ZSBhbmRcbiAgICAgICAgICAgICAgQm9vayB5b3VyIG9yZGVyXG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNlbnRlciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvd0l0V29ya3M7XG4iXX0= */\n/*@ sourceURL=/Users/raghu/Celebraton-client/components/home/HowItWorks.js */",
        __self: this
      }));
    }
  }]);

  return HowItWorks;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HowItWorks);

/***/ }),

/***/ "./components/home/categories.js":
/*!***************************************!*\
  !*** ./components/home/categories.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Categories; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/raghu/Celebraton-client/components/home/categories.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Categories =
/*#__PURE__*/
function (_Component) {
  _inherits(Categories, _Component);

  function Categories() {
    _classCallCheck(this, Categories);

    return _possibleConstructorReturn(this, _getPrototypeOf(Categories).apply(this, arguments));
  }

  _createClass(Categories, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "hi this is raghu"));
    }
  }]);

  return Categories;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/home/categoryContent.js":
/*!********************************************!*\
  !*** ./components/home/categoryContent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reqwest */ "reqwest");
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reqwest__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _login_login_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.js */ "./components/login/login.js");
/* harmony import */ var _provider_homeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../provider/homeProvider */ "./components/provider/homeProvider.js");
/* harmony import */ var _provider_loginProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../provider/loginProvider */ "./components/provider/loginProvider.js");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! superagent */ "superagent");
/* harmony import */ var superagent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(superagent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase */ "./firebase/index.js");
var _jsxFileName = "/Users/raghu/Celebraton-client/components/home/categoryContent.js";

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

var Enquiry =
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
          axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/api/enquiries/addEnquiry", _request).then(_this.context.handleCancel());
          antd__WEBPACK_IMPORTED_MODULE_1__["notification"].open({
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
      return current < moment__WEBPACK_IMPORTED_MODULE_2___default()().startOf("day");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChangeGuests", function (value) {
      _this.setState({
        inputGuests: value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "normFile", function (e) {
      var file = e.file;
      var upload = _firebase__WEBPACK_IMPORTED_MODULE_9__["storage"].ref("/customerImages/".concat(file.name)).put(file.originFileObj);
      upload.on("state_changed", function (snapshot) {
        console.log("progress");
      }, function (error) {
        console.log("error");
      }, function () {
        _firebase__WEBPACK_IMPORTED_MODULE_9__["storage"].ref("customerImages").child(file.name).getDownloadURL().then(function (url) {
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
      var TextArea = antd__WEBPACK_IMPORTED_MODULE_1__["Input"].TextArea;
      var Layout, layoutVariable;

      if (typeof screen !== "undefined") {
        Layout = screen.width <= "850" ? formItemLayoutVertical : formItemLayoutHorizontal;
        layoutVariable = screen.width <= "850" ? "vertical" : "horizontal";
      } else {
        Layout = formItemLayoutHorizontal;
        layoutVariable = "horizontal";
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_provider_homeProvider__WEBPACK_IMPORTED_MODULE_6__["HomeConsumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, function () {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          layout: layoutVariable,
          onSubmit: _this2.submitEnquiry,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
          label: modalCategory.name.concat(" required for?")
        }, Layout, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }), getFieldDecorator("serviceFor", {
          initialValue: modalCategory.eventType[0]
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
          onChange: _this2.handleFormLayoutChange,
          buttonStyle: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        }, modalCategory.eventType.map(function (eventType) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
            key: eventType,
            value: eventType,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            },
            __self: this
          }, eventType);
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, Layout, {
          label: "Event Date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }), getFieldDecorator("eventDate", {
          rules: [{
            required: true,
            message: "Please select the Event Date!"
          }]
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
          format: dateFormat,
          disabledDate: _this2.disabledDate,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, Layout, {
          label: "No of Guests",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }), getFieldDecorator("noOfGuests", {
          value: typeof _this2.state.inputGuests === "number" ? _this2.state.inputGuests : 0
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
          onChange: _this2.onChangeGuests,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, Layout, {
          label: "Services required",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          },
          __self: this
        }), getFieldDecorator("servicesRequired", {
          rules: [{
            required: true,
            message: "Please select the Services you require!"
          }]
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"].Group, {
          style: {
            width: "100%"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, modalCategory.servicesRequired.map(function (servicesRequired) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
            lg: {
              span: 6
            },
            md: {
              span: 8
            },
            sm: {
              span: 24
            },
            key: servicesRequired,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 191
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
            value: servicesRequired,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 197
            },
            __self: this
          }, servicesRequired));
        }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
          label: "In which city?"
        }, Layout, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }), getFieldDecorator("city", {
          initialValue: selectedLocation
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
          onChange: selectLocationInModal,
          buttonStyle: "solid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          __self: this
        }, locations.map(function (location) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Button, {
            key: location,
            value: location,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 213
            },
            __self: this
          }, location);
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, Layout, {
          label: "Area of event (in " + selectedLocation + ")",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }), getFieldDecorator("locality", {})(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
          label: "What is your budget?"
        }, Layout, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226
          },
          __self: this
        }), getFieldDecorator("budget", {
          rules: [{
            required: true,
            message: "Please select the budget in your mind!"
          }]
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"].Group, {
          onChange: _this2.handleFormLayoutChange,
          buttonStyle: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          __self: this
        }, modalCategory.budget.map(function (budget) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
            key: budget._id,
            value: budget.option,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 240
            },
            __self: this
          }, budget.to !== 0 ? "Rs." + budget.from.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " - Rs." + budget.to.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "Above Rs." + budget.from.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, Layout, {
          label: "Sample Image (if any)",
          extra: "Our vendors will get a fair idea about the requirements",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }), getFieldDecorator("sampleImages", {
          valuePropName: "fileList",
          getValueFromEvent: _this2.normFile
        })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
          name: "logo",
          listType: "picture",
          multiple: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          type: "upload",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          },
          __self: this
        }), " Click to upload")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, Layout, {
          label: "Any other info?",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          },
          __self: this
        }), getFieldDecorator("otherInfo", {})(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
          placeholder: "Any other details apart from mentioned above?",
          autosize: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 277
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            margin: "24px 0"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_provider_loginProvider__WEBPACK_IMPORTED_MODULE_7__["LoginConsumer"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284
          },
          __self: this
        }, function (_ref) {
          var isAuthenticated = _ref.isAuthenticated;
          return isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              textAlign: "center"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 287
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, tailformItemLayout, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 288
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            type: "primary",
            htmlType: "submit",
            size: "large",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 289
            },
            __self: this
          }, "Submit Enquiry"))) : null;
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_provider_loginProvider__WEBPACK_IMPORTED_MODULE_7__["LoginConsumer"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298
          },
          __self: this
        }, function (_ref2) {
          var isAuthenticated = _ref2.isAuthenticated;
          return isAuthenticated ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_login_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
            layoutVariable: layoutVariable,
            layout: Layout,
            tailformItemLayout: tailformItemLayout,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 301
            },
            __self: this
          });
        }));
      });
    }
  }]);

  return Enquiry;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); //   {/* //   <div>
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


_defineProperty(Enquiry, "contextType", _provider_homeProvider__WEBPACK_IMPORTED_MODULE_6__["HomeContext"]);

var CategoryContent = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].create({
  name: "enquiryForm"
})(Enquiry);
/* harmony default export */ __webpack_exports__["default"] = (CategoryContent);

/***/ }),

/***/ "./components/home/head.js":
/*!*********************************!*\
  !*** ./components/home/head.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/raghu/Celebraton-client/components/home/head.js";



var defaultDescription = "";
var defaultOGURL = "";
var defaultOGImage = "";

var Head = function Head(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.title || ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: props.title || "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://checkout.razorpay.com/v1/checkout.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }));
};

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  ogImage: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/home/hero.js":
/*!*********************************!*\
  !*** ./components/home/hero.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles.less */ "./styles.less");
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contactForm */ "./components/contactForm.js");
/* harmony import */ var _provider_homeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider/homeProvider */ "./components/provider/homeProvider.js");
var _jsxFileName = "/Users/raghu/Celebraton-client/components/home/hero.js";


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




var Option = antd__WEBPACK_IMPORTED_MODULE_3__["Select"].Option;

function handleChange(value) {
  console.log("selected ".concat(value));
}

var Hero =
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_provider_homeProvider__WEBPACK_IMPORTED_MODULE_5__["HomeConsumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, function () {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3569185827" + " " + "hero-image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
          type: "flex",
          style: {
            alignItems: "center",
            height: "500px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          sm: 15,
          xs: 24,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3569185827" + " " + "hero-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "../static/logo.png",
          height: "150px",
          className: "jsx-3569185827",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
          className: "jsx-3569185827",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, "Hire the best EVENT EXPERTS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          className: "jsx-3569185827",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          type: "phone",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "tel:07904204718",
          className: "jsx-3569185827",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, "+91-7904204718")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
          defaultValue: "Chennai",
          size: "large",
          style: {
            width: 180
          },
          onChange: selectLocation,
          value: selectedLocation,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, locations.map(function (location) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
            key: location,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, location);
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          sm: 9,
          xs: 24,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-3569185827" + " " + "inputForm",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_contactForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
          styleId: "3569185827",
          css: "body.jsx-3569185827,html.jsx-3569185827{height:100%;}.hero-image.jsx-3569185827{background-image:linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.4) ), url(\"../static/banner3.jpg\");height:500px;align:center;background-position:top;background-repeat:no-repeat;background-size:cover;position:relative;}@media only screen and (max-width:600px){.hero-image.jsx-3569185827{height:600px;}}.hero-text.jsx-3569185827{text-align:center;position:relative;color:white;}h1.jsx-3569185827,h2.jsx-3569185827,a.jsx-3569185827{color:white;}.inputForm.jsx-3569185827{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdodS9DZWxlYnJhdG9uLWNsaWVudC9jb21wb25lbnRzL2hvbWUvaGVyby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RDBCLEFBSStCLEFBVWtCLEFBY2YsQUFNRyxBQVNOLEFBSU0sWUExQ3BCLEFBdUNBLENBZkUsS0FNa0IsQUFhcEIsa0JBVmMsWUFDZCxtREF0QmUsYUFDQSxhQUdXLHdCQUNJLDRCQUNOLHNCQUNKLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvcmFnaHUvQ2VsZWJyYXRvbi1jbGllbnQvY29tcG9uZW50cy9ob21lL2hlcm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMubGVzc1wiO1xuLy8gaW1wb3J0IFwifmFudGQvZGlzdC9hbnRkLmxlc3NcIjtcbmltcG9ydCB7IFJvdywgQ29sLCBTZWxlY3QsIEljb24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IFdyYXBwZWRMb2dpbkZvcm0gZnJvbSBcIi4uL2NvbnRhY3RGb3JtXCI7XG5cbmltcG9ydCB7IEhvbWVDb25zdW1lciwgSG9tZUNvbnRleHQgfSBmcm9tIFwiLi4vcHJvdmlkZXIvaG9tZVByb3ZpZGVyXCI7XG5cbmNvbnN0IE9wdGlvbiA9IFNlbGVjdC5PcHRpb247XG5cbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xuICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTtcbn1cblxuY2xhc3MgSGVybyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEhvbWVDb250ZXh0O1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2NhdGlvbnMsIHNlbGVjdGVkTG9jYXRpb24sIHNlbGVjdExvY2F0aW9uIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIb21lQ29uc3VtZXI+XG4gICAgICAgIHsoKSA9PiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1pbWFnZVwiPlxuICAgICAgICAgICAgICA8Um93XG4gICAgICAgICAgICAgICAgdHlwZT1cImZsZXhcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGhlaWdodDogXCI1MDBweFwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q29sIHNtPXsxNX0geHM9ezI0fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2xvZ28ucG5nXCIgaGVpZ2h0PVwiMTUwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aDE+SGlyZSB0aGUgYmVzdCBFVkVOVCBFWFBFUlRTPC9oMT5cblxuICAgICAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInBob25lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOjA3OTA0MjA0NzE4XCI+KzkxLTc5MDQyMDQ3MTg8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkNoZW5uYWlcIlxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDE4MCB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZWxlY3RMb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRMb2NhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtsb2NhdGlvbnMubWFwKGxvY2F0aW9uID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtsb2NhdGlvbn0+e2xvY2F0aW9ufTwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgc209ezl9IHhzPXsyNH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0Rm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8V3JhcHBlZExvZ2luRm9ybSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBUaGUgaGVybyBpbWFnZSAqL1xuICAgICAgICAgICAgICAgIC5oZXJvLWltYWdlIHtcbiAgICAgICAgICAgICAgICAgIC8qIFVzZSBcImxpbmVhci1ncmFkaWVudFwiIHRvIGFkZCBhIGRhcmtlbiBiYWNrZ3JvdW5kIGVmZmVjdCB0byB0aGUgaW1hZ2UgKHBob3RvZ3JhcGhlci5qcGcpLiBUaGlzIHdpbGwgbWFrZSB0aGUgdGV4dCBlYXNpZXIgdG8gcmVhZCAqL1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC40KSxcbiAgICAgICAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuNClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgdXJsKFwiLi4vc3RhdGljL2Jhbm5lcjMuanBnXCIpO1xuXG4gICAgICAgICAgICAgICAgICAvKiBTZXQgYSBzcGVjaWZpYyBoZWlnaHQgKi9cbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgICAgICAgICAgICBhbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAvKiBQb3NpdGlvbiBhbmQgY2VudGVyIHRoZSBpbWFnZSB0byBzY2FsZSBuaWNlbHkgb24gYWxsIHNjcmVlbnMgKi9cbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAuaGVyby1pbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyogUGxhY2UgdGV4dCBpbiB0aGUgbWlkZGxlIG9mIHRoZSBpbWFnZSAqL1xuICAgICAgICAgICAgICAgIC5oZXJvLXRleHQge1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgLy8gbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgxLFxuICAgICAgICAgICAgICAgIGgyLFxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbnB1dEZvcm0ge1xuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0hvbWVDb25zdW1lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iXX0= */\n/*@ sourceURL=/Users/raghu/Celebraton-client/components/home/hero.js */",
          __self: this
        })));
      });
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

_defineProperty(Hero, "contextType", _provider_homeProvider__WEBPACK_IMPORTED_MODULE_5__["HomeContext"]);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/home/modal.js":
/*!**********************************!*\
  !*** ./components/home/modal.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _categoryContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoryContent */ "./components/home/categoryContent.js");
/* harmony import */ var _provider_homeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider/homeProvider */ "./components/provider/homeProvider.js");
var _jsxFileName = "/Users/raghu/Celebraton-client/components/home/modal.js";

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






var Popup =
/*#__PURE__*/
function (_Component) {
  _inherits(Popup, _Component);

  function Popup() {
    _classCallCheck(this, Popup);

    return _possibleConstructorReturn(this, _getPrototypeOf(Popup).apply(this, arguments));
  }

  _createClass(Popup, [{
    key: "render",
    value: function render() {
      var _this$context = this.context,
          modalCategory = _this$context.modalCategory,
          visible = _this$context.visible,
          handleOk = _this$context.handleOk,
          handleCancel = _this$context.handleCancel;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_provider_homeProvider__WEBPACK_IMPORTED_MODULE_3__["HomeConsumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, function () {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          id: "enquiryModal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
          title: modalCategory.name + " Enquiry",
          visible: visible,
          onOk: handleOk,
          onCancel: handleCancel,
          footer: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              textAlign: "center"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          }, "Kindly fill the above form so we can find you the best vendor partners"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_categoryContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
          modalCategory: modalCategory,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        })));
      });
    }
  }]);

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Popup, "contextType", _provider_homeProvider__WEBPACK_IMPORTED_MODULE_3__["HomeContext"]);

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./components/home/testimonials.js":
/*!*****************************************!*\
  !*** ./components/home/testimonials.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/raghu/Celebraton-client/components/home/testimonials.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Testimonials =
/*#__PURE__*/
function (_Component) {
  _inherits(Testimonials, _Component);

  function Testimonials() {
    _classCallCheck(this, Testimonials);

    return _possibleConstructorReturn(this, _getPrototypeOf(Testimonials).apply(this, arguments));
  }

  _createClass(Testimonials, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
        style: {
          textAlign: "center",
          paddingTop: "15px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "jsx-1656153314",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, "Testimonials"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
        autoplay: true,
        effect: "fade",
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1656153314",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1656153314",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Hired a Birthday Planner using CelebratON for my kid's birthday. Surprise elements like Flash Mob and Speed Painting were totally unknown to my family members. It was a great experience.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://res.cloudinary.com/celebraton/image/upload/v1516271771/santhosh_copy_qcmwys.jpg",
        height: "50px",
        className: "jsx-1656153314" + " " + "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), "-Santhosh Kumar, Chennai")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1656153314",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1656153314",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "Wanted to surprise my girlfriend on her birthday and hired someone from CelebratON. With romantic table decoration and a beach side dinner, the day is still cherished.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://res.cloudinary.com/celebraton/image/upload/v1516271953/ragav_small_lwhvmk.jpg",
        height: "50px",
        className: "jsx-1656153314" + " " + "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), "-Ragavendhar, Chennai")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1656153314",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1656153314",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Was looking for a Decorator for my sister's marriage and came across CelebratON. The decoration was grand at a fair price. I got 4 different quotes and chose the best one of those.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://res.cloudinary.com/celebraton/image/upload/v1516272505/Dhanya_small_qcl184.jpg",
        height: "50px",
        className: "jsx-1656153314" + " " + "circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), "-Dhanya Krishnan, Bangalore"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1656153314",
        css: ".circle.jsx-1656153314{border-radius:50%;margin-left:auto;margin-right:auto;display:block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdodS9DZWxlYnJhdG9uLWNsaWVudC9jb21wb25lbnRzL2hvbWUvdGVzdGltb25pYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEb0IsQUFHK0Isa0JBRUQsaUJBQ0Msa0JBQ0osY0FDaEIiLCJmaWxlIjoiL1VzZXJzL3JhZ2h1L0NlbGVicmF0b24tY2xpZW50L2NvbXBvbmVudHMvaG9tZS90ZXN0aW1vbmlhbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMYXlvdXQsIENhcm91c2VsIH0gZnJvbSBcImFudGRcIjtcblxuY2xhc3MgVGVzdGltb25pYWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZ1RvcDogXCIxNXB4XCIgfX0+XG4gICAgICAgIDxoMj5UZXN0aW1vbmlhbHM8L2gyPlxuICAgICAgICA8Q2Fyb3VzZWwgYXV0b3BsYXkgZWZmZWN0PVwiZmFkZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEhpcmVkIGEgQmlydGhkYXkgUGxhbm5lciB1c2luZyBDZWxlYnJhdE9OIGZvciBteSBraWQncyBiaXJ0aGRheS5cbiAgICAgICAgICAgICAgU3VycHJpc2UgZWxlbWVudHMgbGlrZSBGbGFzaCBNb2IgYW5kIFNwZWVkIFBhaW50aW5nIHdlcmUgdG90YWxseVxuICAgICAgICAgICAgICB1bmtub3duIHRvIG15IGZhbWlseSBtZW1iZXJzLiBJdCB3YXMgYSBncmVhdCBleHBlcmllbmNlLlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vY2VsZWJyYXRvbi9pbWFnZS91cGxvYWQvdjE1MTYyNzE3NzEvc2FudGhvc2hfY29weV9xY213eXMuanBnXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAtU2FudGhvc2ggS3VtYXIsIENoZW5uYWlcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFdhbnRlZCB0byBzdXJwcmlzZSBteSBnaXJsZnJpZW5kIG9uIGhlciBiaXJ0aGRheSBhbmQgaGlyZWQgc29tZW9uZVxuICAgICAgICAgICAgICBmcm9tIENlbGVicmF0T04uIFdpdGggcm9tYW50aWMgdGFibGUgZGVjb3JhdGlvbiBhbmQgYSBiZWFjaCBzaWRlXG4gICAgICAgICAgICAgIGRpbm5lciwgdGhlIGRheSBpcyBzdGlsbCBjaGVyaXNoZWQuXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9jZWxlYnJhdG9uL2ltYWdlL3VwbG9hZC92MTUxNjI3MTk1My9yYWdhdl9zbWFsbF9sd2h2bWsuanBnXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAtUmFnYXZlbmRoYXIsIENoZW5uYWlcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFdhcyBsb29raW5nIGZvciBhIERlY29yYXRvciBmb3IgbXkgc2lzdGVyJ3MgbWFycmlhZ2UgYW5kIGNhbWVcbiAgICAgICAgICAgICAgYWNyb3NzIENlbGVicmF0T04uIFRoZSBkZWNvcmF0aW9uIHdhcyBncmFuZCBhdCBhIGZhaXIgcHJpY2UuIEkgZ290XG4gICAgICAgICAgICAgIDQgZGlmZmVyZW50IHF1b3RlcyBhbmQgY2hvc2UgdGhlIGJlc3Qgb25lIG9mIHRob3NlLlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vY2VsZWJyYXRvbi9pbWFnZS91cGxvYWQvdjE1MTYyNzI1MDUvRGhhbnlhX3NtYWxsX3FjbDE4NC5qcGdcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjUwcHhcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIC1EaGFueWEgS3Jpc2huYW4sIEJhbmdhbG9yZVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNpcmNsZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFscztcbiJdfQ== */\n/*@ sourceURL=/Users/raghu/Celebraton-client/components/home/testimonials.js */",
        __self: this
      }));
    }
  }]);

  return Testimonials;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Testimonials);

/***/ }),

/***/ "./components/login/login.js":
/*!***********************************!*\
  !*** ./components/login/login.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _provider_loginProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider/loginProvider */ "./components/provider/loginProvider.js");
var _jsxFileName = "/Users/raghu/Celebraton-client/components/login/login.js";

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_provider_loginProvider__WEBPACK_IMPORTED_MODULE_4__["LoginConsumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, function () {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          layout: _this2.props.layoutVariable,
          onSubmit: _this2.handleSubmit,
          className: "login-form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, otpSent ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
          label: "Mobile Number"
        }, _this2.props.layout, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }), getFieldDecorator("mobile", {
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
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          }),
          placeholder: "Mobile Number",
          onChange: updateNumberState,
          disabled: otpSent,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            textAlign: "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          className: "login-form-button",
          onClick: findUser,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, "Send OTP"))), otpSent ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
          label: "Enter OTP"
        }, _this2.props.layout, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }), getFieldDecorator("otp", {
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
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            },
            __self: this
          }),
          placeholder: "OTP",
          onChange: updateOtpState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }))) : null), userAvailable ? otpSent ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            textAlign: "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, _this2.props.tailFormItemLayout, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          htmlType: "submit",
          className: "login-form-button",
          onClick: handleLogin,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, "Log in"))) : null : otpSent ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
          onSubmit: _this2.handleSubmit,
          layout: _this2.props.layoutVariable,
          className: "login-form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
          label: "Name"
        }, _this2.props.layout, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }), getFieldDecorator("name", {
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
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            },
            __self: this
          }),
          placeholder: "Name",
          onChange: updateNameState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({
          label: "Email"
        }, _this2.props.layout, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }), getFieldDecorator("email", {
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
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 170
            },
            __self: this
          }),
          placeholder: "Email",
          onChange: updateEmailState,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            textAlign: "center"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, _extends({}, _this2.props.tailFormItemLayout, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary",
          htmlType: "submit",
          className: "login-form-button",
          onClick: handleLogin,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, "Register")))) : null);
      });
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(Login, "contextType", _provider_loginProvider__WEBPACK_IMPORTED_MODULE_4__["LoginContext"]);

/* harmony default export */ __webpack_exports__["default"] = (antd__WEBPACK_IMPORTED_MODULE_1__["Form"].create({
  name: "login"
})(Login));

/***/ }),

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.less */ "./styles.less");
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/breadcrumb */ "antd/lib/breadcrumb");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _login_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login */ "./components/login/login.js");
/* harmony import */ var _provider_loginProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./provider/loginProvider */ "./components/provider/loginProvider.js");
var _jsxFileName = "/Users/raghu/Celebraton-client/components/nav.js";

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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_provider_loginProvider__WEBPACK_IMPORTED_MODULE_7__["LoginConsumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, function () {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
          className: "layout",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
          theme: "dark",
          mode: "horizontal",
          defaultSelectedKeys: [""],
          style: {
            lineHeight: "40px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
          key: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/dashboard",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, "Dashboard"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
          key: "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          onClick: signOut,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, "Sign Out"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
          theme: "dark",
          mode: "horizontal",
          defaultSelectedKeys: [""],
          style: {
            lineHeight: "40px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
          key: "1",
          onClick: showDrawer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
          key: "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/vendor-login",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "Become our Vendor"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Drawer"], {
          width: "300px",
          title: "Login/Register",
          placement: "right",
          closable: false,
          onClose: onCloseDrawer,
          visible: drawerVisible,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"], {
          mode: "horizontal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Menu"].Item, {
          key: "login",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
          type: "mail",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }), "Login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_login__WEBPACK_IMPORTED_MODULE_6__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }), "To register as our vendor, go to", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/vendor-login",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, "Vendor Login page"))));
      });
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Nav, "contextType", _provider_loginProvider__WEBPACK_IMPORTED_MODULE_7__["LoginContext"]);

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/provider/homeProvider.js":
/*!*********************************************!*\
  !*** ./components/provider/homeProvider.js ***!
  \*********************************************/
/*! exports provided: default, HomeConsumer, HomeContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeConsumer", function() { return HomeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContext", function() { return HomeContext; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/raghu/Celebraton-client/components/provider/homeProvider.js";

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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return HomeProvider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
/* then make a consumer which will surface it */


var HomeConsumer = HomeContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (HomeProvider);


/***/ }),

/***/ "./components/provider/loginProvider.js":
/*!**********************************************!*\
  !*** ./components/provider/loginProvider.js ***!
  \**********************************************/
/*! exports provided: default, LoginConsumer, LoginContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginConsumer", function() { return LoginConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginContext", function() { return LoginContext; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _setAuthToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../setAuthToken */ "./components/setAuthToken.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/Users/raghu/Celebraton-client/components/provider/loginProvider.js";

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
          Object(_setAuthToken__WEBPACK_IMPORTED_MODULE_5__["default"])(payload.data.token);
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
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              },
              __self: this
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
        Object(_setAuthToken__WEBPACK_IMPORTED_MODULE_5__["default"])(localStorage.jwtToken);
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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return LoginProvider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
/* then make a consumer which will surface it */


var LoginConsumer = LoginContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (LoginProvider);


/***/ }),

/***/ "./components/setAuthToken.js":
/*!************************************!*\
  !*** ./components/setAuthToken.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
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

/* harmony default export */ __webpack_exports__["default"] = (setAuthToken);

/***/ }),

/***/ "./firebase/index.js":
/*!***************************!*\
  !*** ./firebase/index.js ***!
  \***************************/
/*! exports provided: storage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "firebase/storage");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_1__);

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
  firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(config);
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

var storage = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.storage();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.less */ "./styles.less");
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_home_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home/head */ "./components/home/head.js");
/* harmony import */ var _components_home_hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home/hero */ "./components/home/hero.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_home_categories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/categories */ "./components/home/categories.js");
/* harmony import */ var _components_home_HowItWorks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home/HowItWorks */ "./components/home/HowItWorks.js");
/* harmony import */ var _components_home_testimonials__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/home/testimonials */ "./components/home/testimonials.js");
/* harmony import */ var _components_home_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/home/modal */ "./components/home/modal.js");
/* harmony import */ var _components_provider_homeProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/provider/homeProvider */ "./components/provider/homeProvider.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_setAuthToken__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/setAuthToken */ "./components/setAuthToken.js");
/* harmony import */ var _components_provider_loginProvider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/provider/loginProvider */ "./components/provider/loginProvider.js");

var _jsxFileName = "/Users/raghu/Celebraton-client/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var Meta = antd__WEBPACK_IMPORTED_MODULE_13__["Card"].Meta;

var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
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
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_provider_homeProvider__WEBPACK_IMPORTED_MODULE_12__["HomeConsumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, function () {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-148727689",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_home_head__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: "Home",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_home_hero__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: "jsx-148727689" + " " + "center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          style: {
            background: "#ECECEC",
            padding: "30px"
          },
          className: "jsx-148727689",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Row"], {
          gutter: 16,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
          className: "jsx-148727689" + " " + "h1Heading",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, "Submit your Enquiry directly below"), category.map(function (category) {
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
            key: category._id,
            className: "jsx-148727689",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Col"], {
            span: 8,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Card"], {
            hoverable: true,
            style: {
              width: 240
            },
            bordered: false,
            onClick: function onClick() {
              return clickModal(category);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Meta, {
            title: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
              className: "jsx-148727689",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
              className: "jsx-148727689" + " " + "large material-icons",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              },
              __self: this
            }, category.icon), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
              className: "jsx-148727689",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              },
              __self: this
            }), category.name),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }))));
        })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Button"], {
          onClick: updateLimit,
          disabled: disabled,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "View More")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
          className: "jsx-148727689",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
          className: "jsx-148727689" + " " + "h1Heading",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, "How it Works"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_home_HowItWorks__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_home_modal__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_home_testimonials__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
          styleId: "148727689",
          css: ".h1Heading.jsx-148727689{text-align:center;color:#595959;}h2.jsx-148727689{display:inline-block;}.center.jsx-148727689{text-align:center;}i.jsx-148727689{font-size:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdodS9DZWxlYnJhdG9uLWNsaWVudC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRndCLEFBR21DLEFBSUcsQUFHSCxBQUdILGVBQ2pCLEdBVmdCLEFBT2hCLEdBSEEsV0FIQSIsImZpbGUiOiIvVXNlcnMvcmFnaHUvQ2VsZWJyYXRvbi1jbGllbnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMubGVzc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9oZWFkXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2hlcm9cIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2NhdGVnb3JpZXNcIjtcbmltcG9ydCBIb3dJdFdvcmtzIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvSG93SXRXb3Jrc1wiO1xuaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL3Rlc3RpbW9uaWFsc1wiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvbW9kYWxcIjtcbmltcG9ydCB7IEhvbWVDb25zdW1lciwgSG9tZUNvbnRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm92aWRlci9ob21lUHJvdmlkZXJcIjtcbmltcG9ydCB7IENhcmQsIFJvdywgQ29sLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgc2V0QXV0aFRva2VuIGZyb20gXCIuLi9jb21wb25lbnRzL3NldEF1dGhUb2tlblwiO1xuaW1wb3J0IHsgTG9naW5Db25zdW1lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Byb3ZpZGVyL2xvZ2luUHJvdmlkZXJcIjtcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEhvbWVDb250ZXh0O1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGxldCBjYXRlZ29yaWVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9jYXRlZ29yaWVzL2FsbENhdGVnb3JpZXMvMS8wXCIpO1xuICAgIGNhdGVnb3JpZXMgPSBhd2FpdCBjYXRlZ29yaWVzLmRhdGE7XG5cbiAgICBsZXQgbG9jYXRpb25zID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9hZG1pbi9nZXRMb2NhdGlvbnNcIik7XG4gICAgbG9jYXRpb25zID0gYXdhaXQgbG9jYXRpb25zLmRhdGE7XG5cbiAgICByZXR1cm4geyBjYXRlZ29yaWVzLCBsb2NhdGlvbnMgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdGhpcy5jb250ZXh0LnVwZGF0ZUNhdGFuZExvYyh0aGlzLnByb3BzLmNhdGVnb3JpZXMsIHRoaXMucHJvcHMubG9jYXRpb25zKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNhdGVnb3J5LCBkaXNhYmxlZCwgdXBkYXRlTGltaXQsIGNsaWNrTW9kYWwgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHJldHVybiAoXG4gICAgICA8SG9tZUNvbnN1bWVyPlxuICAgICAgICB7KCkgPT4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZCB0aXRsZT1cIkhvbWVcIiAvPlxuXG4gICAgICAgICAgICA8SGVybyAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiNFQ0VDRUNcIiwgcGFkZGluZzogXCIzMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezE2fT5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoMUhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgU3VibWl0IHlvdXIgRW5xdWlyeSBkaXJlY3RseSBiZWxvd1xuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5tYXAoY2F0ZWdvcnkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8aDIga2V5PXtjYXRlZ29yeS5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlcmFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDI0MCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsaWNrTW9kYWwoY2F0ZWdvcnkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWV0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImxhcmdlIG1hdGVyaWFsLWljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lmljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt1cGRhdGVMaW1pdH0gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgICAgICAgICAgICAgIFZpZXcgTW9yZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoMUhlYWRpbmdcIj5Ib3cgaXQgV29ya3M8L2gxPlxuICAgICAgICAgICAgPEhvd0l0V29ya3MgLz5cbiAgICAgICAgICAgIDxQb3B1cCAvPlxuICAgICAgICAgICAgPFRlc3RpbW9uaWFscyAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAuaDFIZWFkaW5nIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM1OTU5NTk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuY2VudGVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L0hvbWVDb25zdW1lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/raghu/Celebraton-client/pages/index.js */",
          __self: this
        }));
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var categories, locations;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/api/categories/allCategories/1/0");

              case 2:
                categories = _context.sent;
                _context.next = 5;
                return categories.data;

              case 5:
                categories = _context.sent;
                _context.next = 8;
                return axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/api/admin/getLocations");

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
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

_defineProperty(Home, "contextType", _components_provider_homeProvider__WEBPACK_IMPORTED_MODULE_12__["HomeContext"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./styles.less":
/*!*********************!*\
  !*** ./styles.less ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "antd/lib/breadcrumb":
/*!**************************************!*\
  !*** external "antd/lib/breadcrumb" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/storage");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reqwest":
/*!**************************!*\
  !*** external "reqwest" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reqwest");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "superagent":
/*!*****************************!*\
  !*** external "superagent" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map