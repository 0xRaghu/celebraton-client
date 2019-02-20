webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.less */ "./styles.less");
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_home_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home/head */ "./components/home/head.js");
/* harmony import */ var _components_home_hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home/hero */ "./components/home/hero.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_home_categories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/categories */ "./components/home/categories.js");
/* harmony import */ var _components_home_HowItWorks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/home/HowItWorks */ "./components/home/HowItWorks.js");
/* harmony import */ var _components_home_testimonials__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/home/testimonials */ "./components/home/testimonials.js");
/* harmony import */ var _components_home_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/home/modal */ "./components/home/modal.js");
/* harmony import */ var _components_provider_homeProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/provider/homeProvider */ "./components/provider/homeProvider.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
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
          css: ".h1Heading.jsx-148727689{text-align:center;color:#595959;}h2.jsx-148727689{display:inline-block;}.center.jsx-148727689{text-align:center;}i.jsx-148727689{font-size:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdodS9DZWxlYnJhdG9uLWNsaWVudC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRndCLEFBR21DLEFBSUcsQUFHSCxBQUdILGVBQ2pCLEdBVmdCLEFBT2hCLEdBSEEsV0FIQSIsImZpbGUiOiIvVXNlcnMvcmFnaHUvQ2VsZWJyYXRvbi1jbGllbnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMubGVzc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9oZWFkXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2hlcm9cIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2NhdGVnb3JpZXNcIjtcbmltcG9ydCBIb3dJdFdvcmtzIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvSG93SXRXb3Jrc1wiO1xuaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL3Rlc3RpbW9uaWFsc1wiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvbW9kYWxcIjtcbmltcG9ydCB7IEhvbWVDb25zdW1lciwgSG9tZUNvbnRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm92aWRlci9ob21lUHJvdmlkZXJcIjtcbmltcG9ydCB7IENhcmQsIFJvdywgQ29sLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgc2V0QXV0aFRva2VuIGZyb20gXCIuLi9jb21wb25lbnRzL3NldEF1dGhUb2tlblwiO1xuaW1wb3J0IHsgTG9naW5Db25zdW1lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3Byb3ZpZGVyL2xvZ2luUHJvdmlkZXJcIjtcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEhvbWVDb250ZXh0O1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGxldCBjYXRlZ29yaWVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9jYXRlZ29yaWVzL2FsbENhdGVnb3JpZXMvMS8wXCIpO1xuICAgIGNhdGVnb3JpZXMgPSBhd2FpdCBjYXRlZ29yaWVzLmRhdGE7XG5cbiAgICBsZXQgbG9jYXRpb25zID0gYXdhaXQgZmV0Y2goXCIvYXBpL2FkbWluL2dldExvY2F0aW9uc1wiKTtcbiAgICBsb2NhdGlvbnMgPSBhd2FpdCBsb2NhdGlvbnMuZGF0YTtcblxuICAgIHJldHVybiB7IGNhdGVnb3JpZXMsIGxvY2F0aW9ucyB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLmNvbnRleHQudXBkYXRlQ2F0YW5kTG9jKHRoaXMucHJvcHMuY2F0ZWdvcmllcywgdGhpcy5wcm9wcy5sb2NhdGlvbnMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2F0ZWdvcnksIGRpc2FibGVkLCB1cGRhdGVMaW1pdCwgY2xpY2tNb2RhbCB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxIb21lQ29uc3VtZXI+XG4gICAgICAgIHsoKSA9PiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkIHRpdGxlPVwiSG9tZVwiIC8+XG5cbiAgICAgICAgICAgIDxIZXJvIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI0VDRUNFQ1wiLCBwYWRkaW5nOiBcIjMwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxSGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICBTdWJtaXQgeW91ciBFbnF1aXJ5IGRpcmVjdGx5IGJlbG93XG4gICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm1hcChjYXRlZ29yeSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxoMiBrZXk9e2NhdGVnb3J5Ll9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjQwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2xpY2tNb2RhbChjYXRlZ29yeSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibGFyZ2UgbWF0ZXJpYWwtaWNvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3VwZGF0ZUxpbWl0fSBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgICAgICAgICAgICAgVmlldyBNb3JlXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxSGVhZGluZ1wiPkhvdyBpdCBXb3JrczwvaDE+XG4gICAgICAgICAgICA8SG93SXRXb3JrcyAvPlxuICAgICAgICAgICAgPFBvcHVwIC8+XG4gICAgICAgICAgICA8VGVzdGltb25pYWxzIC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5oMUhlYWRpbmcge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzU5NTk1OTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvSG9tZUNvbnN1bWVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/raghu/Celebraton-client/pages/index.js */",
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
                return fetch("/api/admin/getLocations");

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
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.4fd68384fa2ab966163a.hot-update.js.map