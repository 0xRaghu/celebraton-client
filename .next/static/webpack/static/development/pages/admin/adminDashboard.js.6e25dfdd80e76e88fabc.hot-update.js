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
      // reqwest({
      //   url: `/api/contactForms/allForms/2/${this.state.count}`,
      //   type: "json",
      //   method: "get",
      //   contentType: "application/json",
      //   success: res => {
      //     callback(res);
      //   }
      // });
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/contactForms/allForms/2/".concat(_this.state.count));
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
        css: "a.jsx-4087214989{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdodS9DZWxlYnJhdG9uLWNsaWVudC9jb21wb25lbnRzL2FkbWluL21hbmFnZUNvbnRhY3RGb3Jtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSXNCLEFBR29DLGtEQUN2QiIsImZpbGUiOiIvVXNlcnMvcmFnaHUvQ2VsZWJyYXRvbi1jbGllbnQvY29tcG9uZW50cy9hZG1pbi9tYW5hZ2VDb250YWN0Rm9ybXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge1xuICBSb3csXG4gIENvbCxcbiAgQ2FyZCxcbiAgRHJhd2VyLFxuICBMaXN0LFxuICBBdmF0YXIsXG4gIEJ1dHRvbixcbiAgU2tlbGV0b24sXG4gIE1vZGFsLFxuICBUYWJsZSxcbiAgUG9wb3ZlcixcbiAgSWNvbixcbiAgRm9ybSxcbiAgSW5wdXQsXG4gIFJhZGlvLFxuICBEYXRlUGlja2VyLFxuICBJbnB1dE51bWJlcixcbiAgQ2hlY2tib3gsXG4gIFVwbG9hZFxufSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCByZXF3ZXN0IGZyb20gXCJyZXF3ZXN0XCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcblxuY2xhc3MgTWFuYWdlQ29udGFjdEZvcm1zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuICBzdGF0ZSA9IHtcbiAgICBjb250YWN0Rm9ybXM6IFtdLFxuXG4gICAgY291bnQ6IDBcbiAgfTtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7fVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldERhdGEocmVzID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb250YWN0Rm9ybXM6IHJlc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXREYXRhID0gY2FsbGJhY2sgPT4ge1xuICAgIC8vIHJlcXdlc3Qoe1xuICAgIC8vICAgdXJsOiBgL2FwaS9jb250YWN0Rm9ybXMvYWxsRm9ybXMvMi8ke3RoaXMuc3RhdGUuY291bnR9YCxcbiAgICAvLyAgIHR5cGU6IFwianNvblwiLFxuICAgIC8vICAgbWV0aG9kOiBcImdldFwiLFxuICAgIC8vICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIC8vICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAvLyAgICAgY2FsbGJhY2socmVzKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgICBheGlvcy5nZXQoYC9hcGkvY29udGFjdEZvcm1zL2FsbEZvcm1zLzIvJHt0aGlzLnN0YXRlLmNvdW50fWApO1xuICB9O1xuXG4gIG9uTG9hZE1vcmUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb3VudDogdGhpcy5zdGF0ZS5jb3VudCArIDJcbiAgICB9KTtcbiAgICB0aGlzLmdldERhdGEocmVzID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhY3RGb3JtcyA9IHRoaXMuc3RhdGUuY29udGFjdEZvcm1zLmNvbmNhdChyZXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRhY3RGb3Jtc1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gUmVzZXR0aW5nIHdpbmRvdydzIG9mZnNldFRvcCBzbyBhcyB0byBkaXNwbGF5IHJlYWN0LXZpcnR1YWxpemVkIGRlbW8gdW5kZXJmbG9vci5cbiAgICAgICAgICAvLyBJbiByZWFsIHNjZW5lLCB5b3UgY2FuIHVzaW5nIHB1YmxpYyBtZXRob2Qgb2YgcmVhY3QtdmlydHVhbGl6ZWQ6XG4gICAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDY3MDA3MjYvaG93LXRvLXVzZS1wdWJsaWMtbWV0aG9kLXVwZGF0ZXBvc2l0aW9uLW9mLXJlYWN0LXZpcnR1YWxpemVkXG4gICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwicmVzaXplXCIpKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RMb2NhdGlvbkluTW9kYWwgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCB7IGNvbnRhY3RGb3JtcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBsb2FkTW9yZSA9IChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgbWFyZ2luVG9wOiAxMixcbiAgICAgICAgICBoZWlnaHQ6IDMyLFxuICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMzJweFwiXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5vbkxvYWRNb3JlfT5Mb2FkIG1vcmU8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI0VDRUNFQ1wiLCBwYWRkaW5nOiBcIjMwcHhcIiB9fT5cbiAgICAgICAgICA8aDEgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PkFsbCBDb250YWN0IEZvcm1zPC9oMT5cbiAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVtby1sb2FkbW9yZS1saXN0XCJcbiAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgIGxvYWRNb3JlPXtsb2FkTW9yZX1cbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e2NvbnRhY3RGb3Jtc31cbiAgICAgICAgICAgIGdyaWQ9e3tcbiAgICAgICAgICAgICAgZ3V0dGVyOiAxNixcbiAgICAgICAgICAgICAgeHM6IDEsXG4gICAgICAgICAgICAgIHNtOiAyLFxuICAgICAgICAgICAgICBtZDogMyxcbiAgICAgICAgICAgICAgbGc6IDMsXG4gICAgICAgICAgICAgIHhsOiAzLFxuICAgICAgICAgICAgICB4eGw6IDNcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgcmVuZGVySXRlbT17Zm9ybSA9PiAoXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgIGhvdmVyYWJsZVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e21vbWVudChmb3JtLmRhdGUpLmZvcm1hdChcIkREIE1NTSwgWVlZWVwiKX1cbiAgICAgICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBOYW1lOlxuICAgICAgICAgICAgICAgICAgPGI+e1wiIFwiICsgZm9ybS5uYW1lfTwvYj4gPGJyIC8+XG4gICAgICAgICAgICAgICAgICBNb2JpbGU6XG4gICAgICAgICAgICAgICAgICA8Yj57XCIgXCIgKyBmb3JtLm1vYmlsZX08L2I+IDxiciAvPlxuICAgICAgICAgICAgICAgICAgUm9sZTpcbiAgICAgICAgICAgICAgICAgIDxiPntcIiBcIiArIGZvcm0ucm9sZX08L2I+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYW5hZ2VDb250YWN0Rm9ybXM7XG4iXX0= */\n/*@ sourceURL=/Users/raghu/Celebraton-client/components/admin/manageContactForms.js */"
      })));
    }
  }]);

  return ManageContactForms;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ManageContactForms);

/***/ })

})
//# sourceMappingURL=adminDashboard.js.6e25dfdd80e76e88fabc.hot-update.js.map