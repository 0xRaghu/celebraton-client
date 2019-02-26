webpackHotUpdate("static/development/pages/category.js",{

/***/ "./components/home/artistList.js":
/*!***************************************!*\
  !*** ./components/home/artistList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArtistList; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles.less */ "./styles.less");
/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/raghu/Celebraton-client/components/home/artistList.js";


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






var Meta = antd__WEBPACK_IMPORTED_MODULE_5__["Card"].Meta;


var ArtistList =
/*#__PURE__*/
function (_Component) {
  _inherits(ArtistList, _Component);

  function ArtistList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtistList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtistList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      profiles: [],
      count: 0,
      artists: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getData", function (callback) {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/profiles/artistProfiles/10/".concat(_this.state.count)).then(function (res) {
        return callback(res.data);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clickArtist", function (slug) {
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/profile?profileId=" + slug);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLoadMore", function () {
      _this.setState({
        loading: true,
        count: _this.state.count + 10
      });

      _this.getData(function (res) {
        var artists = _this.state.artists.concat(res);

        _this.setState({
          artists: artists,
          loading: false
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

  _createClass(ArtistList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.getData(function (res) {
        _this2.setState({
          initLoading: false,
          artists: res,
          count: _this2.state.count + 10
        });
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var artists = this.state.artists;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1857872393" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          background: "#ECECEC",
          padding: "30px"
        },
        className: "jsx-1857872393",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-1857872393" + " " + "h1Heading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "Artists on our platform"), artists.map(function (profile) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
          key: profile._id,
          className: "jsx-1857872393",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          span: 8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Card"], {
          hoverable: true,
          style: {
            width: 240
          },
          bordered: false,
          onClick: function onClick() {
            return _this3.clickArtist(profile.slug);
          },
          cover: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: profile.images[0].original,
            className: "jsx-1857872393",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Meta, {
          title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "jsx-1857872393",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, profile.companyName),
          description: profile.artistSubCategory,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }))));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        onClick: function onClick() {
          return _this3.onLoadMore();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "View More")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1857872393",
        css: ".h1Heading.jsx-1857872393{text-align:center;color:#595959;}h2.jsx-1857872393{display:inline-block;}.center.jsx-1857872393{text-align:center;}i.jsx-1857872393{font-size:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWdodS9DZWxlYnJhdG9uLWNsaWVudC9jb21wb25lbnRzL2hvbWUvYXJ0aXN0TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RnNCLEFBR2lDLEFBSUcsQUFHSCxBQUdILGVBQ2pCLEdBVmdCLEFBT2hCLEdBSEEsV0FIQSIsImZpbGUiOiIvVXNlcnMvcmFnaHUvQ2VsZWJyYXRvbi1jbGllbnQvY29tcG9uZW50cy9ob21lL2FydGlzdExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgXCIuLi8uLi9zdHlsZXMubGVzc1wiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCB7IENhcmQsIFJvdywgQ29sLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJ0aXN0TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0geyBwcm9maWxlczogW10sIGNvdW50OiAwLCBhcnRpc3RzOiBbXSB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0RGF0YShyZXMgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGluaXRMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgYXJ0aXN0czogcmVzLFxuICAgICAgICBjb3VudDogdGhpcy5zdGF0ZS5jb3VudCArIDEwXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldERhdGEgPSBjYWxsYmFjayA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoYC9hcGkvcHJvZmlsZXMvYXJ0aXN0UHJvZmlsZXMvMTAvJHt0aGlzLnN0YXRlLmNvdW50fWApXG4gICAgICAudGhlbihyZXMgPT4gY2FsbGJhY2socmVzLmRhdGEpKTtcbiAgfTtcbiAgY2xpY2tBcnRpc3QgPSBzbHVnID0+IHtcbiAgICBSb3V0ZXIucHVzaChcIi9wcm9maWxlP3Byb2ZpbGVJZD1cIiArIHNsdWcpO1xuICB9O1xuICBvbkxvYWRNb3JlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGNvdW50OiB0aGlzLnN0YXRlLmNvdW50ICsgMTBcbiAgICB9KTtcbiAgICB0aGlzLmdldERhdGEocmVzID0+IHtcbiAgICAgIGNvbnN0IGFydGlzdHMgPSB0aGlzLnN0YXRlLmFydGlzdHMuY29uY2F0KHJlcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgYXJ0aXN0cyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gUmVzZXR0aW5nIHdpbmRvdydzIG9mZnNldFRvcCBzbyBhcyB0byBkaXNwbGF5IHJlYWN0LXZpcnR1YWxpemVkIGRlbW8gdW5kZXJmbG9vci5cbiAgICAgICAgICAvLyBJbiByZWFsIHNjZW5lLCB5b3UgY2FuIHVzaW5nIHB1YmxpYyBtZXRob2Qgb2YgcmVhY3QtdmlydHVhbGl6ZWQ6XG4gICAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDY3MDA3MjYvaG93LXRvLXVzZS1wdWJsaWMtbWV0aG9kLXVwZGF0ZXBvc2l0aW9uLW9mLXJlYWN0LXZpcnR1YWxpemVkXG4gICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwicmVzaXplXCIpKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7fVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhcnRpc3RzIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiNFQ0VDRUNcIiwgcGFkZGluZzogXCIzMHB4XCIgfX0+XG4gICAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDFIZWFkaW5nXCI+QXJ0aXN0cyBvbiBvdXIgcGxhdGZvcm08L2gxPlxuICAgICAgICAgICAgICB7YXJ0aXN0cy5tYXAocHJvZmlsZSA9PiAoXG4gICAgICAgICAgICAgICAgPGgyIGtleT17cHJvZmlsZS5faWR9PlxuICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICBob3ZlcmFibGVcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMjQwIH19XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xpY2tBcnRpc3QocHJvZmlsZS5zbHVnKX1cbiAgICAgICAgICAgICAgICAgICAgICBjb3Zlcj17PGltZyBzcmM9e3Byb2ZpbGUuaW1hZ2VzWzBdLm9yaWdpbmFsfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImxhcmdlIG1hdGVyaWFsLWljb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZmlsZS5pY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2ZpbGUuY29tcGFueU5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2ZpbGUuYXJ0aXN0U3ViQ2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5vbkxvYWRNb3JlKCl9PlZpZXcgTW9yZTwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5oMUhlYWRpbmcge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2VudGVyIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/raghu/Celebraton-client/components/home/artistList.js */",
        __self: this
      })));
    }
  }]);

  return ArtistList;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=category.js.d18c7b577813ad0f63f6.hot-update.js.map