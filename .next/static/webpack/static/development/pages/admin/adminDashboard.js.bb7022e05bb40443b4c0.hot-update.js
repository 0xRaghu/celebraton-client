webpackHotUpdate("static/development/pages/admin/adminDashboard.js",{

/***/ "./components/admin/manageContactForms.js":
/*!************************************************!*\
  !*** ./components/admin/manageContactForms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reqwest */ "./node_modules/reqwest/reqwest.js");
/* harmony import */ var reqwest__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reqwest__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
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
        url: "https://celebraton-server.herokuapp.com/api/contactForms/allForms/2/".concat(_this.state.count),
        type: "json",
        method: "get",
        contentType: "application/json",
        success: function success(res) {
          console.log(res);
          callback(res);
        }
      });
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://celebraton-server.herokuapp.com/api/contactForms/allForms/2/".concat(_this.state.count)).then(function (res) {
        return console.log(res);
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
        css: "a.jsx-4087214989{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdodS9DZWxlYnJhdG9uLWNsaWVudC9jb21wb25lbnRzL2FkbWluL21hbmFnZUNvbnRhY3RGb3Jtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSXNCLEFBR29DLGtEQUN2QiIsImZpbGUiOiIvVXNlcnMvcmFnaHUvQ2VsZWJyYXRvbi1jbGllbnQvY29tcG9uZW50cy9hZG1pbi9tYW5hZ2VDb250YWN0Rm9ybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge1xuICBSb3csXG4gIENvbCxcbiAgQ2FyZCxcbiAgRHJhd2VyLFxuICBMaXN0LFxuICBBdmF0YXIsXG4gIEJ1dHRvbixcbiAgU2tlbGV0b24sXG4gIE1vZGFsLFxuICBUYWJsZSxcbiAgUG9wb3ZlcixcbiAgSWNvbixcbiAgRm9ybSxcbiAgSW5wdXQsXG4gIFJhZGlvLFxuICBEYXRlUGlja2VyLFxuICBJbnB1dE51bWJlcixcbiAgQ2hlY2tib3gsXG4gIFVwbG9hZFxufSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCByZXF3ZXN0IGZyb20gXCJyZXF3ZXN0XCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcblxuY2xhc3MgTWFuYWdlQ29udGFjdEZvcm1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuICBzdGF0ZSA9IHtcbiAgICBjb250YWN0Rm9ybXM6IFtdLFxuXG4gICAgY291bnQ6IDBcbiAgfTtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7fVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldERhdGEocmVzID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250YWN0Rm9ybXM6IHJlc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXREYXRhID0gY2FsbGJhY2sgPT4ge1xuICAgIHJlcXdlc3Qoe1xuICAgICAgdXJsOiBgaHR0cHM6Ly9jZWxlYnJhdG9uLXNlcnZlci5oZXJva3VhcHAuY29tL2FwaS9jb250YWN0Rm9ybXMvYWxsRm9ybXMvMi8ke1xuICAgICAgICB0aGlzLnN0YXRlLmNvdW50XG4gICAgICB9YCxcbiAgICAgIHR5cGU6IFwianNvblwiLFxuICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBheGlvc1xuICAgICAgLmdldChcbiAgICAgICAgYGh0dHBzOi8vY2VsZWJyYXRvbi1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS9hcGkvY29udGFjdEZvcm1zL2FsbEZvcm1zLzIvJHtcbiAgICAgICAgICB0aGlzLnN0YXRlLmNvdW50XG4gICAgICAgIH1gXG4gICAgICApXG4gICAgICAudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSk7XG4gIH07XG5cbiAgb25Mb2FkTW9yZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNvdW50OiB0aGlzLnN0YXRlLmNvdW50ICsgMlxuICAgIH0pO1xuICAgIHRoaXMuZ2V0RGF0YShyZXMgPT4ge1xuICAgICAgY29uc3QgY29udGFjdEZvcm1zID0gdGhpcy5zdGF0ZS5jb250YWN0Rm9ybXMuY29uY2F0KHJlcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgY29udGFjdEZvcm1zXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAvLyBSZXNldHRpbmcgd2luZG93J3Mgb2Zmc2V0VG9wIHNvIGFzIHRvIGRpc3BsYXkgcmVhY3QtdmlydHVhbGl6ZWQgZGVtbyB1bmRlcmZsb29yLlxuICAgICAgICAgIC8vIEluIHJlYWwgc2NlbmUsIHlvdSBjYW4gdXNpbmcgcHVibGljIG1ldGhvZCBvZiByZWFjdC12aXJ0dWFsaXplZDpcbiAgICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NjcwMDcyNi9ob3ctdG8tdXNlLXB1YmxpYy1tZXRob2QtdXBkYXRlcG9zaXRpb24tb2YtcmVhY3QtdmlydHVhbGl6ZWRcbiAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJyZXNpemVcIikpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNlbGVjdExvY2F0aW9uSW5Nb2RhbCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IHsgY29udGFjdEZvcm1zIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGxvYWRNb3JlID0gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICBtYXJnaW5Ub3A6IDEyLFxuICAgICAgICAgIGhlaWdodDogMzIsXG4gICAgICAgICAgbGluZUhlaWdodDogXCIzMnB4XCJcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uTG9hZE1vcmV9PkxvYWQgbW9yZTwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjRUNFQ0VDXCIsIHBhZGRpbmc6IFwiMzBweFwiIH19PlxuICAgICAgICAgIDxoMSBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+QWxsIENvbnRhY3QgRm9ybXM8L2gxPlxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZW1vLWxvYWRtb3JlLWxpc3RcIlxuICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgbG9hZE1vcmU9e2xvYWRNb3JlfVxuICAgICAgICAgICAgZGF0YVNvdXJjZT17Y29udGFjdEZvcm1zfVxuICAgICAgICAgICAgZ3JpZD17e1xuICAgICAgICAgICAgICBndXR0ZXI6IDE2LFxuICAgICAgICAgICAgICB4czogMSxcbiAgICAgICAgICAgICAgc206IDIsXG4gICAgICAgICAgICAgIG1kOiAzLFxuICAgICAgICAgICAgICBsZzogMyxcbiAgICAgICAgICAgICAgeGw6IDMsXG4gICAgICAgICAgICAgIHh4bDogM1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiIH19XG4gICAgICAgICAgICByZW5kZXJJdGVtPXtmb3JtID0+IChcbiAgICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgaG92ZXJhYmxlXG4gICAgICAgICAgICAgICAgICB0aXRsZT17bW9tZW50KGZvcm0uZGF0ZSkuZm9ybWF0KFwiREQgTU1NLCBZWVlZXCIpfVxuICAgICAgICAgICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgICAgICAgICA8Yj57XCIgXCIgKyBmb3JtLm5hbWV9PC9iPiA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIE1vYmlsZTpcbiAgICAgICAgICAgICAgICAgIDxiPntcIiBcIiArIGZvcm0ubW9iaWxlfTwvYj4gPGJyIC8+XG4gICAgICAgICAgICAgICAgICBSb2xlOlxuICAgICAgICAgICAgICAgICAgPGI+e1wiIFwiICsgZm9ybS5yb2xlfTwvYj5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmFnZUNvbnRhY3RGb3JtcztcbiJdfQ== */\n/*@ sourceURL=/Users/raghu/Celebraton-client/components/admin/manageContactForms.js */"
      })));
    }
  }]);

  return ManageContactForms;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ManageContactForms);

/***/ })

})
//# sourceMappingURL=adminDashboard.js.bb7022e05bb40443b4c0.hot-update.js.map