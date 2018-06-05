webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _semanticUiReact = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");

var superagent = _interopRequireWildcard(__webpack_require__("./node_modules/superagent/lib/client.js"));

var _factory = _interopRequireDefault(__webpack_require__("./ethereum/factory.js"));

var _myData = _interopRequireDefault(__webpack_require__("./ethereum/myData.js"));

var _web = _interopRequireDefault(__webpack_require__("./ethereum/web3.js"));

var _Layout = _interopRequireDefault(__webpack_require__("./components/Layout.js"));

var _routes = __webpack_require__("./routes.js");

var _jsxFileName = "/Users/Bill/Documents/ethereum-projects/mydata/pages/index.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var MyDataIndex =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(MyDataIndex, _Component);

  function MyDataIndex() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, MyDataIndex);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = MyDataIndex.__proto__ || Object.getPrototypeOf(MyDataIndex)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        value: '',
        matched: [],
        registeredAccounts: [],
        loading: false,
        error: ''
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "onMatch", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          var str, tempMatched, foundAddresses, i, res, j, res1, _j, res2, _j2, _i;

          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // let str=this.state.value.split(/[ ,]+/);
                  str = _this.state.value.split(/(?:[^\s"]+|"[^"]*")+/g);
                  console.log("str: ", str);
                  tempMatched = [];
                  foundAddresses = new Set();
                  i = 0;

                case 5:
                  if (!(i < str.length)) {
                    _context.next = 21;
                    break;
                  }

                  _context.next = 8;
                  return superagent.get("http://".concat(window.location.host, "/api/findAddressByInterest/").concat(str[i])).then(function (res) {
                    return res.body;
                  });

                case 8:
                  res = _context.sent;

                  for (j = 0; j < res.length; j++) {
                    foundAddresses.add(res[j].contractAddress);
                  }

                  _context.next = 12;
                  return superagent.get("http://".concat(window.location.host, "/api/findAddressByBrands/").concat(str[i])).then(function (res) {
                    return res.body;
                  });

                case 12:
                  res1 = _context.sent;

                  for (_j = 0; _j < res1.length; _j++) {
                    foundAddresses.add(res1[_j].contractAddress);
                  }

                  _context.next = 16;
                  return superagent.get("http://".concat(window.location.host, "/api/findAddressByMedicalCondition/").concat(str[i])).then(function (res) {
                    return res.body;
                  });

                case 16:
                  res2 = _context.sent;

                  for (_j2 = 0; _j2 < res2.length; _j2++) {
                    foundAddresses.add(res2[_j2].contractAddress);
                  }

                case 18:
                  i++;
                  _context.next = 5;
                  break;

                case 21:
                  console.log("foundAddresses: ", foundAddresses);

                  for (_i = 0; _i < _this.state.registeredAccounts.length; _i++) {
                    foundAddresses.has(_this.state.registeredAccounts[_i]) && (tempMatched[_i] = true);
                  }

                  _this.setState({
                    matched: tempMatched
                  });

                case 24:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "onGetAccess", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2(address) {
          var myData, accounts, owner, minPrice;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  myData = (0, _myData.default)(address);
                  _context2.next = 3;
                  return _web.default.eth.getAccounts();

                case 3:
                  accounts = _context2.sent;
                  _context2.next = 6;
                  return myData.methods.owner().call();

                case 6:
                  owner = _context2.sent;

                  if (!(accounts[0] !== owner)) {
                    _context2.next = 24;
                    break;
                  }

                  _this.setState({
                    loading: true,
                    errorMessage: ''
                  });

                  _context2.next = 11;
                  return myData.methods.minimumPayment().call();

                case 11:
                  minPrice = _context2.sent;
                  console.log('not owner', minPrice);
                  _context2.prev = 13;
                  _context2.next = 16;
                  return myData.methods.getAccess().send({
                    from: accounts[0],
                    value: minPrice
                  });

                case 16:
                  _context2.next = 21;
                  break;

                case 18:
                  _context2.prev = 18;
                  _context2.t0 = _context2["catch"](13);

                  _this.setState({
                    errorMessage: _context2.t0.message
                  });

                case 21:
                  _this.setState({
                    loading: false,
                    value: ''
                  });

                  _context2.next = 25;
                  break;

                case 24:
                  console.log('owner');

                case 25:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[13, 18]]);
        }));

        return function value(_x) {
          return _value2.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  (0, _createClass2.default)(MyDataIndex, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3() {
        var registeredAccounts, registeredAccountsCost, displayState, i, len, minPayment;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _factory.default.methods.getRegisteredAccounts().call();

              case 2:
                registeredAccounts = _context3.sent;
                registeredAccountsCost = [];
                displayState = [];
                i = 0, len = registeredAccounts.length;

              case 6:
                if (!(i < len)) {
                  _context3.next = 17;
                  break;
                }

                _context3.t0 = _web.default.utils;
                _context3.next = 10;
                return (0, _myData.default)(registeredAccounts[i]).methods.minimumPayment().call();

              case 10:
                _context3.t1 = _context3.sent;
                minPayment = _context3.t0.fromWei.call(_context3.t0, _context3.t1);
                registeredAccountsCost[i] = minPayment;
                displayState[i] = false;

              case 14:
                i++;
                _context3.next = 6;
                break;

              case 17:
                this.setState({
                  registeredAccounts: registeredAccounts,
                  registeredAccountsCost: registeredAccountsCost,
                  displayState: displayState
                });

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "renderRow",
    value: function renderRow() {
      var _this2 = this;

      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      return this.state.registeredAccounts.map(function (address, i) {
        return _react.default.createElement(Row, {
          active: _this2.state.matched[i],
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, _react.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, _react.default.createElement(_routes.Link, {
          route: "/mydata/".concat(address, "/interests"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, _react.default.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }, address))), _react.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        }, _this2.state.registeredAccountsCost[i]), _react.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, _react.default.createElement(_semanticUiReact.Button, {
          color: "green",
          basic: true,
          loading: _this2.state.loading,
          onClick: _this2.onGetAccess.bind(_this2, address),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, "Pay")), _react.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, _react.default.createElement(_semanticUiReact.Button, {
          color: "teal",
          basic: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, _react.default.createElement(_routes.Link, {
          route: "/mydata/".concat(address, "/privatedata"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, _react.default.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, "View")))));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;
      return _react.default.createElement(_Layout.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, "Registered Accounts"), _react.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({
            value: event.target.value
          });
        },
        labelPosition: "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), _react.default.createElement(_semanticUiReact.Button, {
        primary: true,
        onClick: this.onMatch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, "Match Interests"), _react.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, "Address"), _react.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, "Min Price for Data (Ether)"), _react.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, "Authorization"), _react.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, "Private Data"))), _react.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, this.renderRow())));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return MyDataIndex;
}(_react.Component);

var _default = MyDataIndex;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MyDataIndex, "MyDataIndex", "/Users/Bill/Documents/ethereum-projects/mydata/pages/index.js");
  reactHotLoader.register(_default, "default", "/Users/Bill/Documents/ethereum-projects/mydata/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
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
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.fddd32be5ef3b697ef60.hot-update.js.map