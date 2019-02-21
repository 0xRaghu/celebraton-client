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
        css: "a.jsx-4087214989{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdodS9DZWxlYnJhdG9uLWNsaWVudC9jb21wb25lbnRzL2FkbWluL21hbmFnZUNvbnRhY3RGb3Jtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SXNCLEFBR29DLGtEQUN2QiIsImZpbGUiOiIvVXNlcnMvcmFnaHUvQ2VsZWJyYXRvbi1jbGllbnQvY29tcG9uZW50cy9hZG1pbi9tYW5hZ2VDb250YWN0Rm9ybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge1xuICBSb3csXG4gIENvbCxcbiAgQ2FyZCxcbiAgRHJhd2VyLFxuICBMaXN0LFxuICBBdmF0YXIsXG4gIEJ1dHRvbixcbiAgU2tlbGV0b24sXG4gIE1vZGFsLFxuICBUYWJsZSxcbiAgUG9wb3ZlcixcbiAgSWNvbixcbiAgRm9ybSxcbiAgSW5wdXQsXG4gIFJhZGlvLFxuICBEYXRlUGlja2VyLFxuICBJbnB1dE51bWJlcixcbiAgQ2hlY2tib3gsXG4gIFVwbG9hZFxufSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCByZXF3ZXN0IGZyb20gXCJyZXF3ZXN0XCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcblxuY2xhc3MgTWFuYWdlQ29udGFjdEZvcm1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuICBzdGF0ZSA9IHtcbiAgICBjb250YWN0Rm9ybXM6IFtdLFxuXG4gICAgY291bnQ6IDBcbiAgfTtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7fVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldERhdGEocmVzID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250YWN0Rm9ybXM6IHJlc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXREYXRhID0gY2FsbGJhY2sgPT4ge1xuICAgIHJlcXdlc3Qoe1xuICAgICAgdXJsOiBgaHR0cHM6Ly9jZWxlYnJhdG9uLXNlcnZlci5oZXJva3VhcHAuY29tL2FwaS9jb250YWN0Rm9ybXMvYWxsRm9ybXMvMi8ke1xuICAgICAgICB0aGlzLnN0YXRlLmNvdW50XG4gICAgICB9YCxcbiAgICAgIHR5cGU6IFwianNvblwiLFxuICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBvbkxvYWRNb3JlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY291bnQ6IHRoaXMuc3RhdGUuY291bnQgKyAyXG4gICAgfSk7XG4gICAgdGhpcy5nZXREYXRhKHJlcyA9PiB7XG4gICAgICBjb25zdCBjb250YWN0Rm9ybXMgPSB0aGlzLnN0YXRlLmNvbnRhY3RGb3Jtcy5jb25jYXQocmVzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHtcbiAgICAgICAgICBjb250YWN0Rm9ybXNcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIFJlc2V0dGluZyB3aW5kb3cncyBvZmZzZXRUb3Agc28gYXMgdG8gZGlzcGxheSByZWFjdC12aXJ0dWFsaXplZCBkZW1vIHVuZGVyZmxvb3IuXG4gICAgICAgICAgLy8gSW4gcmVhbCBzY2VuZSwgeW91IGNhbiB1c2luZyBwdWJsaWMgbWV0aG9kIG9mIHJlYWN0LXZpcnR1YWxpemVkOlxuICAgICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ2NzAwNzI2L2hvdy10by11c2UtcHVibGljLW1ldGhvZC11cGRhdGVwb3NpdGlvbi1vZi1yZWFjdC12aXJ0dWFsaXplZFxuICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcInJlc2l6ZVwiKSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0TG9jYXRpb25Jbk1vZGFsIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgY29uc3QgeyBjb250YWN0Rm9ybXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgbG9hZE1vcmUgPSAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgIG1hcmdpblRvcDogMTIsXG4gICAgICAgICAgaGVpZ2h0OiAzMixcbiAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjMycHhcIlxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMub25Mb2FkTW9yZX0+TG9hZCBtb3JlPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiNFQ0VDRUNcIiwgcGFkZGluZzogXCIzMHB4XCIgfX0+XG4gICAgICAgICAgPGgxIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5BbGwgQ29udGFjdCBGb3JtczwvaDE+XG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbW8tbG9hZG1vcmUtbGlzdFwiXG4gICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICBsb2FkTW9yZT17bG9hZE1vcmV9XG4gICAgICAgICAgICBkYXRhU291cmNlPXtjb250YWN0Rm9ybXN9XG4gICAgICAgICAgICBncmlkPXt7XG4gICAgICAgICAgICAgIGd1dHRlcjogMTYsXG4gICAgICAgICAgICAgIHhzOiAxLFxuICAgICAgICAgICAgICBzbTogMixcbiAgICAgICAgICAgICAgbWQ6IDMsXG4gICAgICAgICAgICAgIGxnOiAzLFxuICAgICAgICAgICAgICB4bDogMyxcbiAgICAgICAgICAgICAgeHhsOiAzXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgIHJlbmRlckl0ZW09e2Zvcm0gPT4gKFxuICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICBob3ZlcmFibGVcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXttb21lbnQoZm9ybS5kYXRlKS5mb3JtYXQoXCJERCBNTU0sIFlZWVlcIil9XG4gICAgICAgICAgICAgICAgICBib3JkZXJlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgTmFtZTpcbiAgICAgICAgICAgICAgICAgIDxiPntcIiBcIiArIGZvcm0ubmFtZX08L2I+IDxiciAvPlxuICAgICAgICAgICAgICAgICAgTW9iaWxlOlxuICAgICAgICAgICAgICAgICAgPGI+e1wiIFwiICsgZm9ybS5tb2JpbGV9PC9iPiA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIFJvbGU6XG4gICAgICAgICAgICAgICAgICA8Yj57XCIgXCIgKyBmb3JtLnJvbGV9PC9iPlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFuYWdlQ29udGFjdEZvcm1zO1xuIl19 */\n/*@ sourceURL=/Users/raghu/Celebraton-client/components/admin/manageContactForms.js */"
      })));
    }
  }]);

  return ManageContactForms;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ManageContactForms);

/***/ })

})
//# sourceMappingURL=adminDashboard.js.0560628f1e8b8cf947a7.hot-update.js.map