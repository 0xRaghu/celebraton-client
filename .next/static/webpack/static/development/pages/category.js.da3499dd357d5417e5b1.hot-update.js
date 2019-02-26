webpackHotUpdate("static/development/pages/category.js",{

/***/ "./pages/category.js":
/*!***************************!*\
  !*** ./pages/category.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.less */ "./styles.less");
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_admin_manageProfiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/admin/manageProfiles */ "./components/admin/manageProfiles.js");
/* harmony import */ var _components_admin_manageEnquiries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/admin/manageEnquiries */ "./components/admin/manageEnquiries.js");
/* harmony import */ var _components_admin_manageContactForms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/admin/manageContactForms */ "./components/admin/manageContactForms.js");
/* harmony import */ var _components_home_categoryContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/home/categoryContent */ "./components/home/categoryContent.js");
/* harmony import */ var _components_home_artistList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/home/artistList */ "./components/home/artistList.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_provider_homeProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/provider/homeProvider */ "./components/provider/homeProvider.js");
/* harmony import */ var _components_home_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/home/head */ "./components/home/head.js");
/* harmony import */ var _admin_addGeneral__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/addGeneral */ "./pages/admin/addGeneral.js");
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/config-provider */ "./node_modules/antd/lib/config-provider/index.js");
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_16__);

var _jsxFileName = "/Users/raghu/Celebraton-client/pages/category.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


















var Header = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Header,
    Content = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content,
    Footer = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Footer,
    Sider = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Sider;

var Category =
/*#__PURE__*/
function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Category);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Category)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      categories: [],
      currentCategory: {},
      location: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clickCategory", function (id) {
      _this.state.categories.map(function (category) {
        if (category._id === id) {
          _this.setState({
            currentCategory: category
          });

          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/category?enquiry=" + category.slug + "-" + _this.props.location);
        }
      });
    });

    return _this;
  }

  _createClass(Category, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        currentCategory: this.props.category
      });
      this.context.updateCatandLoc(this.props.categories, this.props.locations);
      this.context.selectLocationInForm(this.props.location);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        categories: this.props.categories
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          categories = _this$state.categories,
          currentCategory = _this$state.currentCategory;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_home_head__WEBPACK_IMPORTED_MODULE_14__["default"], {
        title: "Home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
        style: {
          overflow: "auto",
          height: "100vh",
          left: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Sider, {
        breakpoint: "lg",
        collapsedWidth: "0",
        onBreakpoint: function onBreakpoint(broken) {//   console.log(broken);
        },
        onCollapse: function onCollapse(collapsed, type) {//   console.log(collapsed, type);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "../static/logo.png",
        height: "80px",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
        theme: "dark",
        mode: "inline",
        defaultSelectedKeys: [currentCategory.order.toString()],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, categories.map(function (category) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
          key: category.order,
          onClick: function onClick() {
            return _this2.clickCategory(category._id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
          type: "flex",
          align: "middle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          span: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "large material-icons",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, category.icon), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
          span: 1,
          offset: 3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "nav-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, category.name))));
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
        style: {
          margin: "24px 16px 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          padding: 24,
          background: "#fff",
          minHeight: 360
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, currentCategory.name === "Artist" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_home_artistList__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, currentCategory.name, " in ", this.context.selectedLocation), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_home_categoryContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
        modalCategory: currentCategory,
        changeLocation: this.changeLocation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      })))));
    }
  }]);

  return Category;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

_defineProperty(Category, "contextType", _components_provider_homeProvider__WEBPACK_IMPORTED_MODULE_13__["HomeContext"]);

_defineProperty(Category, "getInitialProps",
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var query, categories, category, locations, location;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = context.query.enquiry.split("-");
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("/api/categories/allCategories/50/0");

          case 3:
            categories = _context.sent;
            _context.next = 6;
            return categories.data;

          case 6:
            categories = _context.sent;
            _context.next = 9;
            return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("/api/categories/categoryBySlug/" + query[0]);

          case 9:
            category = _context.sent;
            _context.next = 12;
            return category.data;

          case 12:
            category = _context.sent;
            _context.next = 15;
            return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get("/api/admin/getLocations");

          case 15:
            locations = _context.sent;
            _context.next = 18;
            return locations.data;

          case 18:
            locations = _context.sent;
            location = query[1];
            return _context.abrupt("return", {
              categories: categories,
              category: category,
              locations: locations,
              location: location
            });

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Category));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/category")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=category.js.da3499dd357d5417e5b1.hot-update.js.map