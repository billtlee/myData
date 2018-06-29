module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _semanticUiReact = __webpack_require__("semantic-ui-react");

var _routes = __webpack_require__("./routes.js");

var _jsxFileName = "/Users/Bill/Documents/ethereum-projects/mydata/components/Header.js";

var _default = function _default() {
  return _react.default.createElement(_semanticUiReact.Menu, {
    style: {
      marginTop: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react.default.createElement(_routes.Link, {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react.default.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "MyData")), _react.default.createElement(_semanticUiReact.Menu.Menu, {
    position: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react.default.createElement(_routes.Link, {
    route: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react.default.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Participants")), _react.default.createElement(_routes.Link, {
    route: "/mydata/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react.default.createElement("a", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "+"))));
};

exports.default = _default;

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _semanticUiReact = __webpack_require__("semantic-ui-react");

var _head = _interopRequireDefault(__webpack_require__("next/head"));

var _Header = _interopRequireDefault(__webpack_require__("./components/Header.js"));

var _jsxFileName = "/Users/Bill/Documents/ethereum-projects/mydata/components/Layout.js";

var _default = function _default(props) {
  return _react.default.createElement(_semanticUiReact.Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react.default.createElement(_head.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react.default.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react.default.createElement(_Header.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), props.children);
};

exports.default = _default;

/***/ }),

/***/ "./config/config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var env = "development" || 'dev';

if (env === 'dev' || env === 'test' || env === 'ganache' || env === 'rinkby') {
  var config = __webpack_require__("./config/config.json");

  var envConfig = config[env];
  Object.keys(envConfig).forEach(function (key) {
    process.env[key] = envConfig[key];
  });
}

/***/ }),

/***/ "./config/config.json":
/***/ (function(module, exports) {

module.exports = {"test":{"PORT":3000,"MONGODB_URI":"mongodb://localhost:27017/myData"},"dev":{"PORT":3000,"MONGODB_URI":"mongodb://heroku_w8j14h7r:roj0a9hs84oh1b3i4j549soqom@ds155651.mlab.com:55651/heroku_w8j14h7r"},"ganache":{"MNEMONIC":"forest enough hope only coil athlete dragon cradle rookie town quiz paddle","PROVIDER_URI":"http://localhost:8545","LOCATION":"ganache"},"rinkby":{"MNEMONIC":"forest enough hope only coil athlete dragon cradle rookie town quiz paddle","PROVIDER_URI":"https://rinkeby.infura.io/sLrsggW1D3WZZKPImuJB","LOCATION":"rinkby","CONTRACTADDRESS":"0x600b3ABc0d043a7621E9b158029C9Ea64e94a477"}}

/***/ }),

/***/ "./ethereum/build/MyData.json":
/***/ (function(module, exports) {

module.exports = {"assembly":{".code":[{"begin":708,"end":2348,"name":"PUSH","value":"80"},{"begin":708,"end":2348,"name":"PUSH","value":"40"},{"begin":708,"end":2348,"name":"MSTORE"},{"begin":1105,"end":1408,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"1"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"1"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":1105,"end":1408,"name":"POP"},{"begin":1105,"end":1408,"name":"PUSH","value":"40"},{"begin":1105,"end":1408,"name":"MLOAD"},{"begin":1105,"end":1408,"name":"PUSH","value":"80"},{"begin":1105,"end":1408,"name":"DUP1"},{"begin":1105,"end":1408,"name":"PUSHSIZE"},{"begin":1105,"end":1408,"name":"DUP4"},{"begin":1105,"end":1408,"name":"CODECOPY"},{"begin":1105,"end":1408,"name":"DUP2"},{"begin":1105,"end":1408,"name":"ADD"},{"begin":1105,"end":1408,"name":"PUSH","value":"40"},{"begin":1105,"end":1408,"name":"SWAP1"},{"begin":1105,"end":1408,"name":"DUP2"},{"begin":1105,"end":1408,"name":"MSTORE"},{"begin":1105,"end":1408,"name":"DUP2"},{"begin":1105,"end":1408,"name":"MLOAD"},{"begin":1105,"end":1408,"name":"PUSH","value":"20"},{"begin":1105,"end":1408,"name":"DUP1"},{"begin":1105,"end":1408,"name":"DUP5"},{"begin":1105,"end":1408,"name":"ADD"},{"begin":1105,"end":1408,"name":"MLOAD"},{"begin":1105,"end":1408,"name":"DUP4"},{"begin":1105,"end":1408,"name":"DUP6"},{"begin":1105,"end":1408,"name":"ADD"},{"begin":1105,"end":1408,"name":"MLOAD"},{"begin":1105,"end":1408,"name":"PUSH","value":"60"},{"begin":1105,"end":1408,"name":"SWAP1"},{"begin":1105,"end":1408,"name":"SWAP6"},{"begin":1105,"end":1408,"name":"ADD"},{"begin":1105,"end":1408,"name":"MLOAD"},{"begin":1222,"end":1227,"name":"PUSH","value":"1"},{"begin":1222,"end":1236,"name":"DUP1"},{"begin":1222,"end":1236,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1222,"end":1236,"name":"SWAP3"},{"begin":1222,"end":1236,"name":"DUP4"},{"begin":1222,"end":1236,"name":"AND"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1222,"end":1236,"name":"SWAP1"},{"begin":1222,"end":1236,"name":"SWAP2"},{"begin":1222,"end":1236,"name":"AND"},{"begin":1222,"end":1236,"name":"OR"},{"begin":1222,"end":1236,"name":"DUP1"},{"begin":1222,"end":1236,"name":"DUP3"},{"begin":1222,"end":1236,"name":"SSTORE"},{"begin":1246,"end":1259,"name":"PUSH","value":"2"},{"begin":1246,"end":1276,"name":"SWAP6"},{"begin":1246,"end":1276,"name":"SWAP1"},{"begin":1246,"end":1276,"name":"SWAP6"},{"begin":1246,"end":1276,"name":"SSTORE"},{"begin":1286,"end":1300,"name":"PUSH","value":"3"},{"begin":1286,"end":1318,"name":"SWAP3"},{"begin":1286,"end":1318,"name":"SWAP1"},{"begin":1286,"end":1318,"name":"SWAP3"},{"begin":1286,"end":1318,"name":"SSTORE"},{"begin":1222,"end":1227,"name":"PUSH","value":"0"},{"begin":1328,"end":1360,"name":"SWAP6"},{"begin":1328,"end":1360,"name":"DUP7"},{"begin":1328,"end":1360,"name":"SSTORE"},{"begin":1388,"end":1393,"name":"SWAP3"},{"begin":1388,"end":1393,"name":"SWAP1"},{"begin":1388,"end":1393,"name":"SWAP3"},{"begin":1388,"end":1393,"name":"AND"},{"begin":1370,"end":1394,"name":"DUP5"},{"begin":1370,"end":1394,"name":"MSTORE"},{"begin":1370,"end":1387,"name":"PUSH","value":"4"},{"begin":1370,"end":1394,"name":"SWAP1"},{"begin":1370,"end":1394,"name":"MSTORE"},{"begin":1370,"end":1394,"name":"SWAP2"},{"begin":1370,"end":1394,"name":"KECCAK256"},{"begin":1370,"end":1401,"name":"DUP1"},{"begin":1370,"end":1401,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1370,"end":1401,"name":"AND"},{"begin":1370,"end":1401,"name":"SWAP1"},{"begin":1370,"end":1401,"name":"SWAP2"},{"begin":1370,"end":1401,"name":"OR"},{"begin":1370,"end":1401,"name":"SWAP1"},{"begin":1370,"end":1401,"name":"SSTORE"},{"begin":708,"end":2348,"name":"PUSH #[$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":708,"end":2348,"name":"PUSH","value":"0"},{"begin":708,"end":2348,"name":"CODECOPY"},{"begin":708,"end":2348,"name":"PUSH","value":"0"},{"begin":708,"end":2348,"name":"RETURN"}],".data":{"0":{".auxdata":"a165627a7a7230582010d15f81c53a48d42d86ed8789e732eae080710016199ef1f02c901a1b1fa8860029",".code":[{"begin":708,"end":2348,"name":"PUSH","value":"80"},{"begin":708,"end":2348,"name":"PUSH","value":"40"},{"begin":708,"end":2348,"name":"MSTORE"},{"begin":708,"end":2348,"name":"PUSH","value":"4"},{"begin":708,"end":2348,"name":"CALLDATASIZE"},{"begin":708,"end":2348,"name":"LT"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"1"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"PUSH","value":"FFFFFFFF"},{"begin":708,"end":2348,"name":"PUSH","value":"100000000000000000000000000000000000000000000000000000000"},{"begin":708,"end":2348,"name":"PUSH","value":"0"},{"begin":708,"end":2348,"name":"CALLDATALOAD"},{"begin":708,"end":2348,"name":"DIV"},{"begin":708,"end":2348,"name":"AND"},{"begin":708,"end":2348,"name":"PUSH","value":"47F07A8E"},{"begin":708,"end":2348,"name":"DUP2"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"2"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"7F83BF7D"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"3"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"8823DA6C"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"4"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"8DA5CB5B"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"5"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"94EF987E"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"6"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"A1186A22"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"7"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"BAFFBEF2"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"8"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"D9A4ABE8"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"9"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"E7E1EF57"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"10"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"F7CA8431"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"11"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"tag","value":"1"},{"begin":708,"end":2348,"name":"JUMPDEST"},{"begin":708,"end":2348,"name":"PUSH","value":"0"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"REVERT"},{"begin":1544,"end":1650,"name":"tag","value":"2"},{"begin":1544,"end":1650,"name":"JUMPDEST"},{"begin":1544,"end":1650,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"12"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"12"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":1544,"end":1650,"name":"POP"},{"begin":1544,"end":1650,"name":"PUSH [tag]","value":"13"},{"begin":1544,"end":1650,"name":"PUSH [tag]","value":"14"},{"begin":1544,"end":1650,"name":"JUMP"},{"begin":1544,"end":1650,"name":"tag","value":"13"},{"begin":1544,"end":1650,"name":"JUMPDEST"},{"begin":1544,"end":1650,"name":"STOP"},{"begin":1414,"end":1534,"name":"tag","value":"3"},{"begin":1414,"end":1534,"name":"JUMPDEST"},{"begin":1414,"end":1534,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"15"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"15"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":1414,"end":1534,"name":"PUSH [tag]","value":"13"},{"begin":1414,"end":1534,"name":"PUSH","value":"4"},{"begin":1414,"end":1534,"name":"CALLDATALOAD"},{"begin":1414,"end":1534,"name":"PUSH [tag]","value":"17"},{"begin":1414,"end":1534,"name":"JUMP"},{"begin":1854,"end":1953,"name":"tag","value":"4"},{"begin":1854,"end":1953,"name":"JUMPDEST"},{"begin":1854,"end":1953,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"18"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"18"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":1854,"end":1953,"name":"PUSH [tag]","value":"13"},{"begin":1854,"end":1953,"name":"PUSH","value":"4"},{"begin":1854,"end":1953,"name":"CALLDATALOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1854,"end":1953,"name":"AND"},{"begin":1854,"end":1953,"name":"PUSH [tag]","value":"20"},{"begin":1854,"end":1953,"name":"JUMP"},{"begin":864,"end":884,"name":"tag","value":"5"},{"begin":864,"end":884,"name":"JUMPDEST"},{"begin":864,"end":884,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"21"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"21"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":864,"end":884,"name":"POP"},{"begin":864,"end":884,"name":"PUSH [tag]","value":"22"},{"begin":864,"end":884,"name":"PUSH [tag]","value":"23"},{"begin":864,"end":884,"name":"JUMP"},{"begin":864,"end":884,"name":"tag","value":"22"},{"begin":864,"end":884,"name":"JUMPDEST"},{"begin":864,"end":884,"name":"PUSH","value":"40"},{"begin":864,"end":884,"name":"DUP1"},{"begin":864,"end":884,"name":"MLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":864,"end":884,"name":"SWAP1"},{"begin":864,"end":884,"name":"SWAP3"},{"begin":864,"end":884,"name":"AND"},{"begin":864,"end":884,"name":"DUP3"},{"begin":864,"end":884,"name":"MSTORE"},{"begin":864,"end":884,"name":"MLOAD"},{"begin":864,"end":884,"name":"SWAP1"},{"begin":864,"end":884,"name":"DUP2"},{"begin":864,"end":884,"name":"SWAP1"},{"begin":864,"end":884,"name":"SUB"},{"begin":864,"end":884,"name":"PUSH","value":"20"},{"begin":864,"end":884,"name":"ADD"},{"begin":864,"end":884,"name":"SWAP1"},{"begin":864,"end":884,"name":"RETURN"},{"begin":832,"end":858,"name":"tag","value":"6"},{"begin":832,"end":858,"name":"JUMPDEST"},{"begin":832,"end":858,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"24"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"24"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":832,"end":858,"name":"POP"},{"begin":832,"end":858,"name":"PUSH [tag]","value":"25"},{"begin":832,"end":858,"name":"PUSH [tag]","value":"26"},{"begin":832,"end":858,"name":"JUMP"},{"begin":832,"end":858,"name":"tag","value":"25"},{"begin":832,"end":858,"name":"JUMPDEST"},{"begin":832,"end":858,"name":"PUSH","value":"40"},{"begin":832,"end":858,"name":"DUP1"},{"begin":832,"end":858,"name":"MLOAD"},{"begin":832,"end":858,"name":"SWAP2"},{"begin":832,"end":858,"name":"DUP3"},{"begin":832,"end":858,"name":"MSTORE"},{"begin":832,"end":858,"name":"MLOAD"},{"begin":832,"end":858,"name":"SWAP1"},{"begin":832,"end":858,"name":"DUP2"},{"begin":832,"end":858,"name":"SWAP1"},{"begin":832,"end":858,"name":"SUB"},{"begin":832,"end":858,"name":"PUSH","value":"20"},{"begin":832,"end":858,"name":"ADD"},{"begin":832,"end":858,"name":"SWAP1"},{"begin":832,"end":858,"name":"RETURN"},{"begin":960,"end":1009,"name":"tag","value":"7"},{"begin":960,"end":1009,"name":"JUMPDEST"},{"begin":960,"end":1009,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"27"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"27"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":960,"end":1009,"name":"PUSH [tag]","value":"28"},{"begin":960,"end":1009,"name":"PUSH","value":"4"},{"begin":960,"end":1009,"name":"CALLDATALOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":960,"end":1009,"name":"AND"},{"begin":960,"end":1009,"name":"PUSH [tag]","value":"29"},{"begin":960,"end":1009,"name":"JUMP"},{"begin":960,"end":1009,"name":"tag","value":"28"},{"begin":960,"end":1009,"name":"JUMPDEST"},{"begin":960,"end":1009,"name":"PUSH","value":"40"},{"begin":960,"end":1009,"name":"DUP1"},{"begin":960,"end":1009,"name":"MLOAD"},{"begin":960,"end":1009,"name":"SWAP2"},{"begin":960,"end":1009,"name":"ISZERO"},{"begin":960,"end":1009,"name":"ISZERO"},{"begin":960,"end":1009,"name":"DUP3"},{"begin":960,"end":1009,"name":"MSTORE"},{"begin":960,"end":1009,"name":"MLOAD"},{"begin":960,"end":1009,"name":"SWAP1"},{"begin":960,"end":1009,"name":"DUP2"},{"begin":960,"end":1009,"name":"SWAP1"},{"begin":960,"end":1009,"name":"SUB"},{"begin":960,"end":1009,"name":"PUSH","value":"20"},{"begin":960,"end":1009,"name":"ADD"},{"begin":960,"end":1009,"name":"SWAP1"},{"begin":960,"end":1009,"name":"RETURN"},{"begin":890,"end":918,"name":"tag","value":"8"},{"begin":890,"end":918,"name":"JUMPDEST"},{"begin":890,"end":918,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"30"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"30"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":890,"end":918,"name":"POP"},{"begin":890,"end":918,"name":"PUSH [tag]","value":"25"},{"begin":890,"end":918,"name":"PUSH [tag]","value":"32"},{"begin":890,"end":918,"name":"JUMP"},{"begin":1959,"end":2085,"name":"tag","value":"9"},{"begin":1959,"end":2085,"name":"JUMPDEST"},{"begin":1959,"end":2085,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"33"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"33"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":1959,"end":2085,"name":"PUSH [tag]","value":"28"},{"begin":1959,"end":2085,"name":"PUSH","value":"4"},{"begin":1959,"end":2085,"name":"CALLDATALOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1959,"end":2085,"name":"AND"},{"begin":1959,"end":2085,"name":"PUSH [tag]","value":"35"},{"begin":1959,"end":2085,"name":"JUMP"},{"begin":2091,"end":2346,"name":"tag","value":"10"},{"begin":2091,"end":2346,"name":"JUMPDEST"},{"begin":2091,"end":2346,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"36"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"36"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":2091,"end":2346,"name":"POP"},{"begin":2091,"end":2346,"name":"PUSH [tag]","value":"25"},{"begin":2091,"end":2346,"name":"PUSH [tag]","value":"38"},{"begin":2091,"end":2346,"name":"JUMP"},{"begin":1656,"end":1844,"name":"tag","value":"11"},{"begin":1656,"end":1844,"name":"JUMPDEST"},{"begin":1656,"end":1844,"name":"PUSH [tag]","value":"13"},{"begin":1656,"end":1844,"name":"PUSH [tag]","value":"40"},{"begin":1656,"end":1844,"name":"JUMP"},{"begin":1544,"end":1650,"name":"tag","value":"14"},{"begin":1544,"end":1650,"name":"JUMPDEST"},{"begin":1070,"end":1075,"name":"PUSH","value":"1"},{"begin":1070,"end":1075,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1070,"end":1075,"name":"AND"},{"begin":1056,"end":1066,"name":"CALLER"},{"begin":1056,"end":1075,"name":"EQ"},{"begin":1048,"end":1076,"name":"PUSH [tag]","value":"42"},{"begin":1048,"end":1076,"name":"JUMPI"},{"begin":1048,"end":1076,"name":"PUSH","value":"0"},{"begin":1048,"end":1076,"name":"DUP1"},{"begin":1048,"end":1076,"name":"REVERT"},{"begin":1048,"end":1076,"name":"tag","value":"42"},{"begin":1048,"end":1076,"name":"JUMPDEST"},{"begin":1606,"end":1611,"name":"PUSH","value":"1"},{"begin":1606,"end":1611,"name":"SLOAD"},{"begin":1606,"end":1643,"name":"PUSH","value":"40"},{"begin":1606,"end":1643,"name":"MLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1606,"end":1611,"name":"SWAP1"},{"begin":1606,"end":1611,"name":"SWAP2"},{"begin":1606,"end":1611,"name":"AND"},{"begin":1606,"end":1611,"name":"SWAP1"},{"begin":1629,"end":1633,"name":"ADDRESS"},{"begin":1621,"end":1642,"name":"BALANCE"},{"begin":1606,"end":1643,"name":"DUP1"},{"begin":1606,"end":1643,"name":"ISZERO"},{"begin":1606,"end":1643,"name":"PUSH","value":"8FC"},{"begin":1606,"end":1643,"name":"MUL"},{"begin":1606,"end":1643,"name":"SWAP2"},{"begin":1606,"end":1611,"name":"PUSH","value":"0"},{"begin":1606,"end":1643,"name":"DUP2"},{"begin":1606,"end":1611,"name":"DUP2"},{"begin":1606,"end":1643,"name":"DUP2"},{"begin":1621,"end":1642,"name":"DUP6"},{"begin":1606,"end":1611,"name":"DUP9"},{"begin":1606,"end":1643,"name":"DUP9"},{"begin":1606,"end":1643,"name":"CALL"},{"begin":1606,"end":1643,"name":"SWAP4"},{"begin":1606,"end":1643,"name":"POP"},{"begin":1606,"end":1643,"name":"POP"},{"begin":1606,"end":1643,"name":"POP"},{"begin":1606,"end":1643,"name":"POP"},{"begin":1606,"end":1643,"name":"ISZERO"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"44"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":45,"end":61,"name":"RETURNDATASIZE"},{"begin":42,"end":43,"name":"PUSH","value":"0"},{"begin":39,"end":40,"name":"DUP1"},{"begin":24,"end":62,"name":"RETURNDATACOPY"},{"begin":77,"end":93,"name":"RETURNDATASIZE"},{"begin":74,"end":75,"name":"PUSH","value":"0"},{"begin":67,"end":94,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"44"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":1606,"end":1643,"name":"POP"},{"begin":1544,"end":1650,"name":"JUMP","value":"[out]"},{"begin":1414,"end":1534,"name":"tag","value":"17"},{"begin":1414,"end":1534,"name":"JUMPDEST"},{"begin":1070,"end":1075,"name":"PUSH","value":"1"},{"begin":1070,"end":1075,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1070,"end":1075,"name":"AND"},{"begin":1056,"end":1066,"name":"CALLER"},{"begin":1056,"end":1075,"name":"EQ"},{"begin":1048,"end":1076,"name":"PUSH [tag]","value":"46"},{"begin":1048,"end":1076,"name":"JUMPI"},{"begin":1048,"end":1076,"name":"PUSH","value":"0"},{"begin":1048,"end":1076,"name":"DUP1"},{"begin":1048,"end":1076,"name":"REVERT"},{"begin":1048,"end":1076,"name":"tag","value":"46"},{"begin":1048,"end":1076,"name":"JUMPDEST"},{"begin":1491,"end":1505,"name":"PUSH","value":"0"},{"begin":1491,"end":1523,"name":"SSTORE"},{"begin":1414,"end":1534,"name":"JUMP","value":"[out]"},{"begin":1854,"end":1953,"name":"tag","value":"20"},{"begin":1854,"end":1953,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1911,"end":1938,"name":"AND"},{"begin":1941,"end":1946,"name":"PUSH","value":"0"},{"begin":1911,"end":1938,"name":"SWAP1"},{"begin":1911,"end":1938,"name":"DUP2"},{"begin":1911,"end":1938,"name":"MSTORE"},{"begin":1911,"end":1928,"name":"PUSH","value":"4"},{"begin":1911,"end":1938,"name":"PUSH","value":"20"},{"begin":1911,"end":1938,"name":"MSTORE"},{"begin":1911,"end":1938,"name":"PUSH","value":"40"},{"begin":1911,"end":1938,"name":"SWAP1"},{"begin":1911,"end":1938,"name":"KECCAK256"},{"begin":1911,"end":1946,"name":"DUP1"},{"begin":1911,"end":1946,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1911,"end":1946,"name":"AND"},{"begin":1911,"end":1946,"name":"SWAP1"},{"begin":1911,"end":1946,"name":"SSTORE"},{"begin":1854,"end":1953,"name":"JUMP","value":"[out]"},{"begin":864,"end":884,"name":"tag","value":"23"},{"begin":864,"end":884,"name":"JUMPDEST"},{"begin":864,"end":884,"name":"PUSH","value":"1"},{"begin":864,"end":884,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":864,"end":884,"name":"AND"},{"begin":864,"end":884,"name":"DUP2"},{"begin":864,"end":884,"name":"JUMP","value":"[out]"},{"begin":832,"end":858,"name":"tag","value":"26"},{"begin":832,"end":858,"name":"JUMPDEST"},{"begin":832,"end":858,"name":"PUSH","value":"0"},{"begin":832,"end":858,"name":"SLOAD"},{"begin":832,"end":858,"name":"DUP2"},{"begin":832,"end":858,"name":"JUMP","value":"[out]"},{"begin":960,"end":1009,"name":"tag","value":"29"},{"begin":960,"end":1009,"name":"JUMPDEST"},{"begin":960,"end":1009,"name":"PUSH","value":"4"},{"begin":960,"end":1009,"name":"PUSH","value":"20"},{"begin":960,"end":1009,"name":"MSTORE"},{"begin":960,"end":1009,"name":"PUSH","value":"0"},{"begin":960,"end":1009,"name":"SWAP1"},{"begin":960,"end":1009,"name":"DUP2"},{"begin":960,"end":1009,"name":"MSTORE"},{"begin":960,"end":1009,"name":"PUSH","value":"40"},{"begin":960,"end":1009,"name":"SWAP1"},{"begin":960,"end":1009,"name":"KECCAK256"},{"begin":960,"end":1009,"name":"SLOAD"},{"begin":960,"end":1009,"name":"PUSH","value":"FF"},{"begin":960,"end":1009,"name":"AND"},{"begin":960,"end":1009,"name":"DUP2"},{"begin":960,"end":1009,"name":"JUMP","value":"[out]"},{"begin":890,"end":918,"name":"tag","value":"32"},{"begin":890,"end":918,"name":"JUMPDEST"},{"begin":890,"end":918,"name":"PUSH","value":"2"},{"begin":890,"end":918,"name":"SLOAD"},{"begin":890,"end":918,"name":"DUP2"},{"begin":890,"end":918,"name":"JUMP","value":"[out]"},{"begin":1959,"end":2085,"name":"tag","value":"35"},{"begin":1959,"end":2085,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":2050,"end":2077,"name":"AND"},{"begin":2026,"end":2030,"name":"PUSH","value":"0"},{"begin":2050,"end":2077,"name":"SWAP1"},{"begin":2050,"end":2077,"name":"DUP2"},{"begin":2050,"end":2077,"name":"MSTORE"},{"begin":2050,"end":2067,"name":"PUSH","value":"4"},{"begin":2050,"end":2077,"name":"PUSH","value":"20"},{"begin":2050,"end":2077,"name":"MSTORE"},{"begin":2050,"end":2077,"name":"PUSH","value":"40"},{"begin":2050,"end":2077,"name":"SWAP1"},{"begin":2050,"end":2077,"name":"KECCAK256"},{"begin":2050,"end":2077,"name":"SLOAD"},{"begin":2050,"end":2077,"name":"PUSH","value":"FF"},{"begin":2050,"end":2077,"name":"AND"},{"begin":2050,"end":2077,"name":"SWAP1"},{"begin":1959,"end":2085,"name":"JUMP","value":"[out]"},{"begin":2091,"end":2346,"name":"tag","value":"38"},{"begin":2091,"end":2346,"name":"JUMPDEST"},{"begin":2174,"end":2184,"name":"CALLER"},{"begin":2133,"end":2140,"name":"PUSH","value":"0"},{"begin":2156,"end":2185,"name":"SWAP1"},{"begin":2156,"end":2185,"name":"DUP2"},{"begin":2156,"end":2185,"name":"MSTORE"},{"begin":2156,"end":2173,"name":"PUSH","value":"4"},{"begin":2156,"end":2185,"name":"PUSH","value":"20"},{"begin":2156,"end":2185,"name":"MSTORE"},{"begin":2156,"end":2185,"name":"PUSH","value":"40"},{"begin":2156,"end":2185,"name":"DUP2"},{"begin":2156,"end":2185,"name":"KECCAK256"},{"begin":2156,"end":2185,"name":"SLOAD"},{"begin":2156,"end":2185,"name":"PUSH","value":"FF"},{"begin":2156,"end":2185,"name":"AND"},{"begin":2156,"end":2193,"name":"ISZERO"},{"begin":2156,"end":2193,"name":"ISZERO"},{"begin":2156,"end":2185,"name":"PUSH","value":"1"},{"begin":2156,"end":2193,"name":"EQ"},{"begin":2152,"end":2340,"name":"ISZERO"},{"begin":2152,"end":2340,"name":"PUSH [tag]","value":"51"},{"begin":2152,"end":2340,"name":"JUMPI"},{"begin":2214,"end":2238,"name":"PUSH","value":"40"},{"begin":2214,"end":2238,"name":"DUP1"},{"begin":2214,"end":2238,"name":"MLOAD"},{"begin":2227,"end":2237,"name":"CALLER"},{"begin":2214,"end":2238,"name":"DUP2"},{"begin":2214,"end":2238,"name":"MSTORE"},{"begin":2214,"end":2238,"name":"SWAP1"},{"begin":2214,"end":2238,"name":"MLOAD"},{"begin":2214,"end":2238,"name":"PUSH","value":"5E11D6F4A906F860548606BEE83FDECDFE541044B913FF4D0D544B9CD43875B6"},{"begin":2214,"end":2238,"name":"SWAP2"},{"begin":2214,"end":2238,"name":"DUP2"},{"begin":2214,"end":2238,"name":"SWAP1"},{"begin":2214,"end":2238,"name":"SUB"},{"begin":2214,"end":2238,"name":"PUSH","value":"20"},{"begin":2214,"end":2238,"name":"ADD"},{"begin":2214,"end":2238,"name":"SWAP1"},{"begin":2214,"end":2238,"name":"LOG1"},{"begin":-1,"end":-1,"name":"POP"},{"begin":2260,"end":2274,"name":"PUSH","value":"3"},{"begin":2260,"end":2274,"name":"SLOAD"},{"begin":2252,"end":2275,"name":"PUSH [tag]","value":"52"},{"begin":2252,"end":2275,"name":"JUMP"},{"begin":2152,"end":2340,"name":"tag","value":"51"},{"begin":2152,"end":2340,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":2306,"end":2329,"name":"PUSH","value":"756E617574686F72697A65640000000000000000000000000000000000000000"},{"begin":2152,"end":2340,"name":"tag","value":"52"},{"begin":2152,"end":2340,"name":"JUMPDEST"},{"begin":2091,"end":2346,"name":"SWAP1"},{"begin":2091,"end":2346,"name":"JUMP","value":"[out]"},{"begin":1656,"end":1844,"name":"tag","value":"40"},{"begin":1656,"end":1844,"name":"JUMPDEST"},{"begin":1723,"end":1737,"name":"PUSH","value":"0"},{"begin":1723,"end":1737,"name":"SLOAD"},{"begin":1710,"end":1719,"name":"CALLVALUE"},{"begin":1710,"end":1737,"name":"LT"},{"begin":1710,"end":1737,"name":"ISZERO"},{"begin":1702,"end":1738,"name":"PUSH [tag]","value":"54"},{"begin":1702,"end":1738,"name":"JUMPI"},{"begin":1702,"end":1738,"name":"PUSH","value":"0"},{"begin":1702,"end":1738,"name":"DUP1"},{"begin":1702,"end":1738,"name":"REVERT"},{"begin":1702,"end":1738,"name":"tag","value":"54"},{"begin":1702,"end":1738,"name":"JUMPDEST"},{"begin":1753,"end":1791,"name":"PUSH","value":"40"},{"begin":1753,"end":1791,"name":"DUP1"},{"begin":1753,"end":1791,"name":"MLOAD"},{"begin":1769,"end":1778,"name":"CALLVALUE"},{"begin":1753,"end":1791,"name":"DUP2"},{"begin":1753,"end":1791,"name":"MSTORE"},{"begin":1780,"end":1790,"name":"CALLER"},{"begin":1753,"end":1791,"name":"PUSH","value":"20"},{"begin":1753,"end":1791,"name":"DUP3"},{"begin":1753,"end":1791,"name":"ADD"},{"begin":1753,"end":1791,"name":"MSTORE"},{"begin":1753,"end":1791,"name":"DUP2"},{"begin":1753,"end":1791,"name":"MLOAD"},{"begin":1753,"end":1791,"name":"PUSH","value":"AC140D9E227CBC7BAF5587524F98FE6C57443181D6CE49DC2F583CCA0C49BDF8"},{"begin":1753,"end":1791,"name":"SWAP3"},{"begin":1753,"end":1791,"name":"SWAP2"},{"begin":1753,"end":1791,"name":"DUP2"},{"begin":1753,"end":1791,"name":"SWAP1"},{"begin":1753,"end":1791,"name":"SUB"},{"begin":1753,"end":1791,"name":"SWAP1"},{"begin":1753,"end":1791,"name":"SWAP2"},{"begin":1753,"end":1791,"name":"ADD"},{"begin":1753,"end":1791,"name":"SWAP1"},{"begin":1753,"end":1791,"name":"LOG1"},{"begin":1819,"end":1829,"name":"CALLER"},{"begin":1801,"end":1830,"name":"PUSH","value":"0"},{"begin":1801,"end":1830,"name":"SWAP1"},{"begin":1801,"end":1830,"name":"DUP2"},{"begin":1801,"end":1830,"name":"MSTORE"},{"begin":1801,"end":1818,"name":"PUSH","value":"4"},{"begin":1801,"end":1830,"name":"PUSH","value":"20"},{"begin":1801,"end":1830,"name":"MSTORE"},{"begin":1801,"end":1830,"name":"PUSH","value":"40"},{"begin":1801,"end":1830,"name":"SWAP1"},{"begin":1801,"end":1830,"name":"KECCAK256"},{"begin":1801,"end":1837,"name":"DUP1"},{"begin":1801,"end":1837,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1801,"end":1837,"name":"AND"},{"begin":1833,"end":1837,"name":"PUSH","value":"1"},{"begin":1801,"end":1837,"name":"OR"},{"begin":1801,"end":1837,"name":"SWAP1"},{"begin":1801,"end":1837,"name":"SSTORE"},{"begin":1656,"end":1844,"name":"JUMP","value":"[out]"}]}}},"bytecode":"608060405234801561001057600080fd5b5060405160808061045283398101604090815281516020808401518385015160609095015160018054600160a060020a03928316600160a060020a0319909116178082556002959095556003929092556000958655929092168452600490529120805460ff191690911790556103c78061008b6000396000f3006080604052600436106100a35763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166347f07a8e81146100a85780637f83bf7d146100bf5780638823da6c146100d75780638da5cb5b146100f857806394ef987e14610129578063a1186a2214610150578063baffbef214610185578063d9a4abe81461019a578063e7e1ef57146101bb578063f7ca8431146101d0575b600080fd5b3480156100b457600080fd5b506100bd6101d8565b005b3480156100cb57600080fd5b506100bd60043561022c565b3480156100e357600080fd5b506100bd600160a060020a0360043516610248565b34801561010457600080fd5b5061010d610269565b60408051600160a060020a039092168252519081900360200190f35b34801561013557600080fd5b5061013e610278565b60408051918252519081900360200190f35b34801561015c57600080fd5b50610171600160a060020a036004351661027e565b604080519115158252519081900360200190f35b34801561019157600080fd5b5061013e610293565b3480156101a657600080fd5b50610171600160a060020a0360043516610299565b3480156101c757600080fd5b5061013e6102b7565b6100bd610336565b600154600160a060020a031633146101ef57600080fd5b600154604051600160a060020a0390911690303180156108fc02916000818181858888f19350505050158015610229573d6000803e3d6000fd5b50565b600154600160a060020a0316331461024357600080fd5b600055565b600160a060020a03166000908152600460205260409020805460ff19169055565b600154600160a060020a031681565b60005481565b60046020526000908152604090205460ff1681565b60025481565b600160a060020a031660009081526004602052604090205460ff1690565b3360009081526004602052604081205460ff16151560011415610310576040805133815290517f5e11d6f4a906f860548606bee83fdecdfe541044b913ff4d0d544b9cd43875b69181900360200190a150600354610333565b507f756e617574686f72697a656400000000000000000000000000000000000000005b90565b60005434101561034557600080fd5b6040805134815233602082015281517fac140d9e227cbc7baf5587524f98fe6c57443181d6ce49dc2f583cca0c49bdf8929181900390910190a1336000908152600460205260409020805460ff191660011790555600a165627a7a7230582010d15f81c53a48d42d86ed8789e732eae080710016199ef1f02c901a1b1fa8860029","functionHashes":{"approvedAccessors(address)":"a1186a22","getAccess()":"f7ca8431","getPrivateData()":"e7e1ef57","isApprovedAccessor(address)":"d9a4abe8","minimumPayment()":"94ef987e","owner()":"8da5cb5b","publicDataKey()":"baffbef2","removeAccess(address)":"8823da6c","setMinimumPayment(uint256)":"7f83bf7d","transferBalanceToOwner()":"47f07a8e"},"gasEstimates":{"creation":[101046,193400],"external":{"approvedAccessors(address)":653,"getAccess()":22159,"getPrivateData()":1932,"isApprovedAccessor(address)":772,"minimumPayment()":472,"owner()":603,"publicDataKey()":516,"removeAccess(address)":20614,"setMinimumPayment(uint256)":20458,"transferBalanceToOwner()":null},"internal":{}},"interface":"[{\"constant\":false,\"inputs\":[],\"name\":\"transferBalanceToOwner\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_minimumPayment\",\"type\":\"uint256\"}],\"name\":\"setMinimumPayment\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"accessor\",\"type\":\"address\"}],\"name\":\"removeAccess\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"minimumPayment\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"approvedAccessors\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"publicDataKey\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"accessor\",\"type\":\"address\"}],\"name\":\"isApprovedAccessor\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getPrivateData\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getAccess\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_publicDataKey\",\"type\":\"bytes32\"},{\"name\":\"_privateDataKey\",\"type\":\"bytes32\"},{\"name\":\"_minimumPayment\",\"type\":\"uint256\"},{\"name\":\"_owner\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"accessor\",\"type\":\"address\"}],\"name\":\"DataAccessed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"payment\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"fromAcct\",\"type\":\"address\"}],\"name\":\"ReceivedPayment\",\"type\":\"event\"}]","metadata":"{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[],\"name\":\"transferBalanceToOwner\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_minimumPayment\",\"type\":\"uint256\"}],\"name\":\"setMinimumPayment\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"accessor\",\"type\":\"address\"}],\"name\":\"removeAccess\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"minimumPayment\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"approvedAccessors\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"publicDataKey\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"accessor\",\"type\":\"address\"}],\"name\":\"isApprovedAccessor\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getPrivateData\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getAccess\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_publicDataKey\",\"type\":\"bytes32\"},{\"name\":\"_privateDataKey\",\"type\":\"bytes32\"},{\"name\":\"_minimumPayment\",\"type\":\"uint256\"},{\"name\":\"_owner\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"accessor\",\"type\":\"address\"}],\"name\":\"DataAccessed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"payment\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"fromAcct\",\"type\":\"address\"}],\"name\":\"ReceivedPayment\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"\":\"MyData\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"\":{\"keccak256\":\"0x0a011247859560b13129368f1e08a55681a24255deb159154f133f17f692f1fb\",\"urls\":[\"bzzr://36ff0cadf36e9ebaed9639ff822a37c93b1464d84542eb37db73be61d3353685\"]}},\"version\":1}","opcodes":"PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH1 0x80 DUP1 PUSH2 0x452 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 SWAP1 DUP2 MSTORE DUP2 MLOAD PUSH1 0x20 DUP1 DUP5 ADD MLOAD DUP4 DUP6 ADD MLOAD PUSH1 0x60 SWAP1 SWAP6 ADD MLOAD PUSH1 0x1 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP3 DUP4 AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT SWAP1 SWAP2 AND OR DUP1 DUP3 SSTORE PUSH1 0x2 SWAP6 SWAP1 SWAP6 SSTORE PUSH1 0x3 SWAP3 SWAP1 SWAP3 SSTORE PUSH1 0x0 SWAP6 DUP7 SSTORE SWAP3 SWAP1 SWAP3 AND DUP5 MSTORE PUSH1 0x4 SWAP1 MSTORE SWAP2 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND SWAP1 SWAP2 OR SWAP1 SSTORE PUSH2 0x3C7 DUP1 PUSH2 0x8B PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0xA3 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x47F07A8E DUP2 EQ PUSH2 0xA8 JUMPI DUP1 PUSH4 0x7F83BF7D EQ PUSH2 0xBF JUMPI DUP1 PUSH4 0x8823DA6C EQ PUSH2 0xD7 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0xF8 JUMPI DUP1 PUSH4 0x94EF987E EQ PUSH2 0x129 JUMPI DUP1 PUSH4 0xA1186A22 EQ PUSH2 0x150 JUMPI DUP1 PUSH4 0xBAFFBEF2 EQ PUSH2 0x185 JUMPI DUP1 PUSH4 0xD9A4ABE8 EQ PUSH2 0x19A JUMPI DUP1 PUSH4 0xE7E1EF57 EQ PUSH2 0x1BB JUMPI DUP1 PUSH4 0xF7CA8431 EQ PUSH2 0x1D0 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBD PUSH2 0x1D8 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xCB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBD PUSH1 0x4 CALLDATALOAD PUSH2 0x22C JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xE3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x248 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x104 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x10D PUSH2 0x269 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x135 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x13E PUSH2 0x278 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x15C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x171 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x27E JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 ISZERO ISZERO DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x191 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x13E PUSH2 0x293 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1A6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x171 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x299 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1C7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x13E PUSH2 0x2B7 JUMP JUMPDEST PUSH2 0xBD PUSH2 0x336 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x1EF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND SWAP1 ADDRESS BALANCE DUP1 ISZERO PUSH2 0x8FC MUL SWAP2 PUSH1 0x0 DUP2 DUP2 DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x229 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x243 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 SSTORE JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND SWAP1 JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 SLOAD PUSH1 0xFF AND ISZERO ISZERO PUSH1 0x1 EQ ISZERO PUSH2 0x310 JUMPI PUSH1 0x40 DUP1 MLOAD CALLER DUP2 MSTORE SWAP1 MLOAD PUSH32 0x5E11D6F4A906F860548606BEE83FDECDFE541044B913FF4D0D544B9CD43875B6 SWAP2 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 LOG1 POP PUSH1 0x3 SLOAD PUSH2 0x333 JUMP JUMPDEST POP PUSH32 0x756E617574686F72697A65640000000000000000000000000000000000000000 JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x0 SLOAD CALLVALUE LT ISZERO PUSH2 0x345 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x40 DUP1 MLOAD CALLVALUE DUP2 MSTORE CALLER PUSH1 0x20 DUP3 ADD MSTORE DUP2 MLOAD PUSH32 0xAC140D9E227CBC7BAF5587524F98FE6C57443181D6CE49DC2F583CCA0C49BDF8 SWAP3 SWAP2 DUP2 SWAP1 SUB SWAP1 SWAP2 ADD SWAP1 LOG1 CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 OR SWAP1 SSTORE JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 LT 0xd1 0x5f DUP2 0xc5 GASPRICE 0x48 0xd4 0x2d DUP7 0xed DUP8 DUP10 0xe7 ORIGIN 0xea 0xe0 DUP1 PUSH18 0x16199EF1F02C901A1B1FA8860029000000 ","runtimeBytecode":"6080604052600436106100a35763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166347f07a8e81146100a85780637f83bf7d146100bf5780638823da6c146100d75780638da5cb5b146100f857806394ef987e14610129578063a1186a2214610150578063baffbef214610185578063d9a4abe81461019a578063e7e1ef57146101bb578063f7ca8431146101d0575b600080fd5b3480156100b457600080fd5b506100bd6101d8565b005b3480156100cb57600080fd5b506100bd60043561022c565b3480156100e357600080fd5b506100bd600160a060020a0360043516610248565b34801561010457600080fd5b5061010d610269565b60408051600160a060020a039092168252519081900360200190f35b34801561013557600080fd5b5061013e610278565b60408051918252519081900360200190f35b34801561015c57600080fd5b50610171600160a060020a036004351661027e565b604080519115158252519081900360200190f35b34801561019157600080fd5b5061013e610293565b3480156101a657600080fd5b50610171600160a060020a0360043516610299565b3480156101c757600080fd5b5061013e6102b7565b6100bd610336565b600154600160a060020a031633146101ef57600080fd5b600154604051600160a060020a0390911690303180156108fc02916000818181858888f19350505050158015610229573d6000803e3d6000fd5b50565b600154600160a060020a0316331461024357600080fd5b600055565b600160a060020a03166000908152600460205260409020805460ff19169055565b600154600160a060020a031681565b60005481565b60046020526000908152604090205460ff1681565b60025481565b600160a060020a031660009081526004602052604090205460ff1690565b3360009081526004602052604081205460ff16151560011415610310576040805133815290517f5e11d6f4a906f860548606bee83fdecdfe541044b913ff4d0d544b9cd43875b69181900360200190a150600354610333565b507f756e617574686f72697a656400000000000000000000000000000000000000005b90565b60005434101561034557600080fd5b6040805134815233602082015281517fac140d9e227cbc7baf5587524f98fe6c57443181d6ce49dc2f583cca0c49bdf8929181900390910190a1336000908152600460205260409020805460ff191660011790555600a165627a7a7230582010d15f81c53a48d42d86ed8789e732eae080710016199ef1f02c901a1b1fa8860029","srcmap":"708:1640:0:-;;;1105:303;8:9:-1;5:2;;;30:1;27;20:12;5:2;1105:303:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1222:5;:14;;-1:-1:-1;;;;;1222:14:0;;;-1:-1:-1;;;;;;1222:14:0;;;;;;;1246:13;:30;;;;1286:14;:32;;;;1222:5;1328:32;;;1388:5;;;;1370:24;;:17;:24;;;;:31;;-1:-1:-1;;1370:31:0;;;;;;708:1640;;;;;;","srcmapRuntime":"708:1640:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1544:106;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1544:106:0;;;;;;1414:120;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1414:120:0;;;;;1854:99;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1854:99:0;;;-1:-1:-1;;;;;1854:99:0;;;864:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;864:20:0;;;;;;;;-1:-1:-1;;;;;864:20:0;;;;;;;;;;;;;;832:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;832:26:0;;;;;;;;;;;;;;;;;;;;960:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;960:49:0;;;-1:-1:-1;;;;;960:49:0;;;;;;;;;;;;;;;;;;;;;890:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;890:28:0;;;;1959:126;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1959:126:0;;;-1:-1:-1;;;;;1959:126:0;;;2091:255;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2091:255:0;;;;1656:188;;;;1544:106;1070:5;;-1:-1:-1;;;;;1070:5:0;1056:10;:19;1048:28;;;;;;1606:5;;:37;;-1:-1:-1;;;;;1606:5:0;;;;1629:4;1621:21;1606:37;;;;;:5;:37;:5;:37;1621:21;1606:5;:37;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1606:37:0;1544:106::o;1414:120::-;1070:5;;-1:-1:-1;;;;;1070:5:0;1056:10;:19;1048:28;;;;;;1491:14;:32;1414:120::o;1854:99::-;-1:-1:-1;;;;;1911:27:0;1941:5;1911:27;;;:17;:27;;;;;:35;;-1:-1:-1;;1911:35:0;;;1854:99::o;864:20::-;;;-1:-1:-1;;;;;864:20:0;;:::o;832:26::-;;;;:::o;960:49::-;;;;;;;;;;;;;;;:::o;890:28::-;;;;:::o;1959:126::-;-1:-1:-1;;;;;2050:27:0;2026:4;2050:27;;;:17;:27;;;;;;;;;1959:126::o;2091:255::-;2174:10;2133:7;2156:29;;;:17;:29;;;;;;;;:37;;:29;:37;2152:188;;;2214:24;;;2227:10;2214:24;;;;;;;;;;;;;-1:-1:-1;2260:14:0;;2252:23;;2152:188;-1:-1:-1;2306:23:0;2152:188;2091:255;:::o;1656:188::-;1723:14;;1710:9;:27;;1702:36;;;;;;1753:38;;;1769:9;1753:38;;1780:10;1753:38;;;;;;;;;;;;;;;;;1819:10;1801:29;;;;:17;:29;;;;;:36;;-1:-1:-1;;1801:36:0;1833:4;1801:36;;;1656:188::o"}

/***/ }),

/***/ "./ethereum/build/MyDataFactory.json":
/***/ (function(module, exports) {

module.exports = {"assembly":{".code":[{"begin":28,"end":705,"name":"PUSH","value":"80"},{"begin":28,"end":705,"name":"PUSH","value":"40"},{"begin":28,"end":705,"name":"MSTORE"},{"begin":28,"end":705,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"1"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"1"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":28,"end":705,"name":"POP"},{"begin":28,"end":705,"name":"PUSH #[$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":28,"end":705,"name":"DUP1"},{"begin":28,"end":705,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":28,"end":705,"name":"PUSH","value":"0"},{"begin":28,"end":705,"name":"CODECOPY"},{"begin":28,"end":705,"name":"PUSH","value":"0"},{"begin":28,"end":705,"name":"RETURN"}],".data":{"0":{".auxdata":"a165627a7a72305820d8fbff41e54b99a079439c3c69710658346169f593d85cc23bc2177eaf4243660029",".code":[{"begin":28,"end":705,"name":"PUSH","value":"80"},{"begin":28,"end":705,"name":"PUSH","value":"40"},{"begin":28,"end":705,"name":"MSTORE"},{"begin":28,"end":705,"name":"PUSH","value":"4"},{"begin":28,"end":705,"name":"CALLDATASIZE"},{"begin":28,"end":705,"name":"LT"},{"begin":28,"end":705,"name":"PUSH [tag]","value":"1"},{"begin":28,"end":705,"name":"JUMPI"},{"begin":28,"end":705,"name":"PUSH","value":"FFFFFFFF"},{"begin":28,"end":705,"name":"PUSH","value":"100000000000000000000000000000000000000000000000000000000"},{"begin":28,"end":705,"name":"PUSH","value":"0"},{"begin":28,"end":705,"name":"CALLDATALOAD"},{"begin":28,"end":705,"name":"DIV"},{"begin":28,"end":705,"name":"AND"},{"begin":28,"end":705,"name":"PUSH","value":"B7EB161"},{"begin":28,"end":705,"name":"DUP2"},{"begin":28,"end":705,"name":"EQ"},{"begin":28,"end":705,"name":"PUSH [tag]","value":"2"},{"begin":28,"end":705,"name":"JUMPI"},{"begin":28,"end":705,"name":"DUP1"},{"begin":28,"end":705,"name":"PUSH","value":"38A2C331"},{"begin":28,"end":705,"name":"EQ"},{"begin":28,"end":705,"name":"PUSH [tag]","value":"3"},{"begin":28,"end":705,"name":"JUMPI"},{"begin":28,"end":705,"name":"DUP1"},{"begin":28,"end":705,"name":"PUSH","value":"8DDA93E3"},{"begin":28,"end":705,"name":"EQ"},{"begin":28,"end":705,"name":"PUSH [tag]","value":"4"},{"begin":28,"end":705,"name":"JUMPI"},{"begin":28,"end":705,"name":"DUP1"},{"begin":28,"end":705,"name":"PUSH","value":"B9F68A32"},{"begin":28,"end":705,"name":"EQ"},{"begin":28,"end":705,"name":"PUSH [tag]","value":"5"},{"begin":28,"end":705,"name":"JUMPI"},{"begin":28,"end":705,"name":"DUP1"},{"begin":28,"end":705,"name":"PUSH","value":"C056B5DE"},{"begin":28,"end":705,"name":"EQ"},{"begin":28,"end":705,"name":"PUSH [tag]","value":"6"},{"begin":28,"end":705,"name":"JUMPI"},{"begin":28,"end":705,"name":"tag","value":"1"},{"begin":28,"end":705,"name":"JUMPDEST"},{"begin":28,"end":705,"name":"PUSH","value":"0"},{"begin":28,"end":705,"name":"DUP1"},{"begin":28,"end":705,"name":"REVERT"},{"begin":161,"end":462,"name":"tag","value":"2"},{"begin":161,"end":462,"name":"JUMPDEST"},{"begin":161,"end":462,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"7"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"7"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":161,"end":462,"name":"PUSH [tag]","value":"8"},{"begin":161,"end":462,"name":"PUSH","value":"4"},{"begin":161,"end":462,"name":"CALLDATALOAD"},{"begin":161,"end":462,"name":"PUSH","value":"24"},{"begin":161,"end":462,"name":"CALLDATALOAD"},{"begin":161,"end":462,"name":"PUSH","value":"44"},{"begin":161,"end":462,"name":"CALLDATALOAD"},{"begin":161,"end":462,"name":"PUSH [tag]","value":"9"},{"begin":161,"end":462,"name":"JUMP"},{"begin":161,"end":462,"name":"tag","value":"8"},{"begin":161,"end":462,"name":"JUMPDEST"},{"begin":161,"end":462,"name":"STOP"},{"begin":99,"end":150,"name":"tag","value":"3"},{"begin":99,"end":150,"name":"JUMPDEST"},{"begin":99,"end":150,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"10"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"10"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":99,"end":150,"name":"PUSH [tag]","value":"11"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":99,"end":150,"name":"PUSH","value":"4"},{"begin":99,"end":150,"name":"CALLDATALOAD"},{"begin":99,"end":150,"name":"AND"},{"begin":99,"end":150,"name":"PUSH [tag]","value":"12"},{"begin":99,"end":150,"name":"JUMP"},{"begin":99,"end":150,"name":"tag","value":"11"},{"begin":99,"end":150,"name":"JUMPDEST"},{"begin":99,"end":150,"name":"PUSH","value":"40"},{"begin":99,"end":150,"name":"DUP1"},{"begin":99,"end":150,"name":"MLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":99,"end":150,"name":"SWAP1"},{"begin":99,"end":150,"name":"SWAP3"},{"begin":99,"end":150,"name":"AND"},{"begin":99,"end":150,"name":"DUP3"},{"begin":99,"end":150,"name":"MSTORE"},{"begin":99,"end":150,"name":"MLOAD"},{"begin":99,"end":150,"name":"SWAP1"},{"begin":99,"end":150,"name":"DUP2"},{"begin":99,"end":150,"name":"SWAP1"},{"begin":99,"end":150,"name":"SUB"},{"begin":99,"end":150,"name":"PUSH","value":"20"},{"begin":99,"end":150,"name":"ADD"},{"begin":99,"end":150,"name":"SWAP1"},{"begin":99,"end":150,"name":"RETURN"},{"begin":472,"end":579,"name":"tag","value":"4"},{"begin":472,"end":579,"name":"JUMPDEST"},{"begin":472,"end":579,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"13"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"13"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":472,"end":579,"name":"POP"},{"begin":472,"end":579,"name":"PUSH [tag]","value":"14"},{"begin":472,"end":579,"name":"PUSH [tag]","value":"15"},{"begin":472,"end":579,"name":"JUMP"},{"begin":472,"end":579,"name":"tag","value":"14"},{"begin":472,"end":579,"name":"JUMPDEST"},{"begin":472,"end":579,"name":"PUSH","value":"40"},{"begin":472,"end":579,"name":"DUP1"},{"begin":472,"end":579,"name":"MLOAD"},{"begin":472,"end":579,"name":"PUSH","value":"20"},{"begin":472,"end":579,"name":"DUP1"},{"begin":472,"end":579,"name":"DUP3"},{"begin":472,"end":579,"name":"MSTORE"},{"begin":472,"end":579,"name":"DUP4"},{"begin":472,"end":579,"name":"MLOAD"},{"begin":472,"end":579,"name":"DUP2"},{"begin":472,"end":579,"name":"DUP4"},{"begin":472,"end":579,"name":"ADD"},{"begin":472,"end":579,"name":"MSTORE"},{"begin":472,"end":579,"name":"DUP4"},{"begin":472,"end":579,"name":"MLOAD"},{"begin":472,"end":579,"name":"SWAP2"},{"begin":472,"end":579,"name":"SWAP3"},{"begin":472,"end":579,"name":"DUP4"},{"begin":472,"end":579,"name":"SWAP3"},{"begin":472,"end":579,"name":"SWAP1"},{"begin":472,"end":579,"name":"DUP4"},{"begin":472,"end":579,"name":"ADD"},{"begin":472,"end":579,"name":"SWAP2"},{"begin":472,"end":579,"name":"DUP6"},{"begin":472,"end":579,"name":"DUP2"},{"begin":472,"end":579,"name":"ADD"},{"begin":472,"end":579,"name":"SWAP2"},{"begin":472,"end":579,"name":"MUL"},{"begin":472,"end":579,"name":"DUP1"},{"begin":472,"end":579,"name":"DUP4"},{"begin":472,"end":579,"name":"DUP4"},{"begin":472,"end":579,"name":"PUSH","value":"0"},{"begin":8,"end":108,"name":"tag","value":"16"},{"begin":8,"end":108,"name":"JUMPDEST"},{"begin":33,"end":36,"name":"DUP4"},{"begin":30,"end":31,"name":"DUP2"},{"begin":27,"end":37,"name":"LT"},{"begin":8,"end":108,"name":"ISZERO"},{"begin":8,"end":108,"name":"PUSH [tag]","value":"17"},{"begin":8,"end":108,"name":"JUMPI"},{"begin":90,"end":101,"name":"DUP2"},{"begin":90,"end":101,"name":"DUP2"},{"begin":90,"end":101,"name":"ADD"},{"begin":84,"end":102,"name":"MLOAD"},{"begin":71,"end":82,"name":"DUP4"},{"begin":71,"end":82,"name":"DUP3"},{"begin":71,"end":82,"name":"ADD"},{"begin":64,"end":103,"name":"MSTORE"},{"begin":52,"end":54,"name":"PUSH","value":"20"},{"begin":45,"end":55,"name":"ADD"},{"begin":8,"end":108,"name":"PUSH [tag]","value":"16"},{"begin":8,"end":108,"name":"JUMP"},{"begin":8,"end":108,"name":"tag","value":"17"},{"begin":8,"end":108,"name":"JUMPDEST"},{"begin":12,"end":26,"name":"POP"},{"begin":472,"end":579,"name":"POP"},{"begin":472,"end":579,"name":"POP"},{"begin":472,"end":579,"name":"POP"},{"begin":472,"end":579,"name":"SWAP1"},{"begin":472,"end":579,"name":"POP"},{"begin":472,"end":579,"name":"ADD"},{"begin":472,"end":579,"name":"SWAP3"},{"begin":472,"end":579,"name":"POP"},{"begin":472,"end":579,"name":"POP"},{"begin":472,"end":579,"name":"POP"},{"begin":472,"end":579,"name":"PUSH","value":"40"},{"begin":472,"end":579,"name":"MLOAD"},{"begin":472,"end":579,"name":"DUP1"},{"begin":472,"end":579,"name":"SWAP2"},{"begin":472,"end":579,"name":"SUB"},{"begin":472,"end":579,"name":"SWAP1"},{"begin":472,"end":579,"name":"RETURN"},{"begin":58,"end":93,"name":"tag","value":"5"},{"begin":58,"end":93,"name":"JUMPDEST"},{"begin":58,"end":93,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"19"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"19"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":58,"end":93,"name":"PUSH [tag]","value":"11"},{"begin":58,"end":93,"name":"PUSH","value":"4"},{"begin":58,"end":93,"name":"CALLDATALOAD"},{"begin":58,"end":93,"name":"PUSH [tag]","value":"21"},{"begin":58,"end":93,"name":"JUMP"},{"begin":585,"end":703,"name":"tag","value":"6"},{"begin":585,"end":703,"name":"JUMPDEST"},{"begin":585,"end":703,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"22"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"22"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":585,"end":703,"name":"PUSH [tag]","value":"11"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":585,"end":703,"name":"PUSH","value":"4"},{"begin":585,"end":703,"name":"CALLDATALOAD"},{"begin":585,"end":703,"name":"AND"},{"begin":585,"end":703,"name":"PUSH [tag]","value":"24"},{"begin":585,"end":703,"name":"JUMP"},{"begin":161,"end":462,"name":"tag","value":"9"},{"begin":161,"end":462,"name":"JUMPDEST"},{"begin":269,"end":287,"name":"PUSH","value":"0"},{"begin":301,"end":314,"name":"DUP4"},{"begin":316,"end":330,"name":"DUP4"},{"begin":332,"end":346,"name":"DUP4"},{"begin":348,"end":358,"name":"CALLER"},{"begin":290,"end":359,"name":"PUSH [tag]","value":"26"},{"begin":290,"end":359,"name":"PUSH [tag]","value":"27"},{"begin":290,"end":359,"name":"JUMP","value":"[in]"},{"begin":290,"end":359,"name":"tag","value":"26"},{"begin":290,"end":359,"name":"JUMPDEST"},{"begin":290,"end":359,"name":"SWAP4"},{"begin":290,"end":359,"name":"DUP5"},{"begin":290,"end":359,"name":"MSTORE"},{"begin":290,"end":359,"name":"PUSH","value":"20"},{"begin":290,"end":359,"name":"DUP5"},{"begin":290,"end":359,"name":"ADD"},{"begin":290,"end":359,"name":"SWAP3"},{"begin":290,"end":359,"name":"SWAP1"},{"begin":290,"end":359,"name":"SWAP3"},{"begin":290,"end":359,"name":"MSTORE"},{"begin":290,"end":359,"name":"PUSH","value":"40"},{"begin":290,"end":359,"name":"DUP1"},{"begin":290,"end":359,"name":"DUP5"},{"begin":290,"end":359,"name":"ADD"},{"begin":290,"end":359,"name":"SWAP2"},{"begin":290,"end":359,"name":"SWAP1"},{"begin":290,"end":359,"name":"SWAP2"},{"begin":290,"end":359,"name":"MSTORE"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":290,"end":359,"name":"SWAP1"},{"begin":290,"end":359,"name":"SWAP2"},{"begin":290,"end":359,"name":"AND"},{"begin":290,"end":359,"name":"PUSH","value":"60"},{"begin":290,"end":359,"name":"DUP4"},{"begin":290,"end":359,"name":"ADD"},{"begin":290,"end":359,"name":"MSTORE"},{"begin":290,"end":359,"name":"MLOAD"},{"begin":290,"end":359,"name":"SWAP1"},{"begin":290,"end":359,"name":"DUP2"},{"begin":290,"end":359,"name":"SWAP1"},{"begin":290,"end":359,"name":"SUB"},{"begin":290,"end":359,"name":"PUSH","value":"80"},{"begin":290,"end":359,"name":"ADD"},{"begin":290,"end":359,"name":"SWAP1"},{"begin":290,"end":359,"name":"PUSH","value":"0"},{"begin":290,"end":359,"name":"CREATE"},{"begin":290,"end":359,"name":"DUP1"},{"begin":290,"end":359,"name":"ISZERO"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"28"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":45,"end":61,"name":"RETURNDATASIZE"},{"begin":42,"end":43,"name":"PUSH","value":"0"},{"begin":39,"end":40,"name":"DUP1"},{"begin":24,"end":62,"name":"RETURNDATACOPY"},{"begin":77,"end":93,"name":"RETURNDATASIZE"},{"begin":74,"end":75,"name":"PUSH","value":"0"},{"begin":67,"end":94,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"28"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":369,"end":387,"name":"PUSH","value":"0"},{"begin":27,"end":37,"name":"DUP1"},{"begin":27,"end":37,"name":"SLOAD"},{"begin":39,"end":40,"name":"PUSH","value":"1"},{"begin":23,"end":41,"name":"DUP2"},{"begin":23,"end":41,"name":"DUP2"},{"begin":23,"end":41,"name":"ADD"},{"begin":45,"end":68,"name":"DUP4"},{"begin":45,"end":68,"name":"SSTORE"},{"begin":369,"end":404,"name":"PUSH","value":"290DECD9548B62A8D60345A988386FC84BA6BC95484008F6362F93160EF3E563"},{"begin":369,"end":404,"name":"SWAP1"},{"begin":369,"end":404,"name":"SWAP2"},{"begin":369,"end":404,"name":"ADD"},{"begin":369,"end":404,"name":"DUP1"},{"begin":369,"end":404,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":369,"end":404,"name":"SWAP1"},{"begin":369,"end":404,"name":"SWAP5"},{"begin":369,"end":404,"name":"AND"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":369,"end":404,"name":"SWAP5"},{"begin":369,"end":404,"name":"DUP6"},{"begin":369,"end":404,"name":"AND"},{"begin":369,"end":404,"name":"DUP2"},{"begin":369,"end":404,"name":"OR"},{"begin":369,"end":404,"name":"SWAP1"},{"begin":369,"end":404,"name":"SWAP2"},{"begin":369,"end":404,"name":"SSTORE"},{"begin":431,"end":441,"name":"CALLER"},{"begin":414,"end":442,"name":"DUP4"},{"begin":414,"end":442,"name":"MSTORE"},{"begin":369,"end":404,"name":"PUSH","value":"20"},{"begin":414,"end":442,"name":"SWAP2"},{"begin":414,"end":442,"name":"SWAP1"},{"begin":414,"end":442,"name":"SWAP2"},{"begin":414,"end":442,"name":"MSTORE"},{"begin":414,"end":442,"name":"PUSH","value":"40"},{"begin":414,"end":442,"name":"SWAP1"},{"begin":414,"end":442,"name":"SWAP2"},{"begin":414,"end":442,"name":"KECCAK256"},{"begin":414,"end":455,"name":"DUP1"},{"begin":414,"end":455,"name":"SLOAD"},{"begin":414,"end":455,"name":"SWAP1"},{"begin":414,"end":455,"name":"SWAP3"},{"begin":414,"end":455,"name":"AND"},{"begin":414,"end":455,"name":"OR"},{"begin":414,"end":455,"name":"SWAP1"},{"begin":414,"end":455,"name":"SSTORE"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":-1,"end":-1,"name":"POP"},{"begin":161,"end":462,"name":"JUMP","value":"[out]"},{"begin":99,"end":150,"name":"tag","value":"12"},{"begin":99,"end":150,"name":"JUMPDEST"},{"begin":99,"end":150,"name":"PUSH","value":"1"},{"begin":99,"end":150,"name":"PUSH","value":"20"},{"begin":99,"end":150,"name":"MSTORE"},{"begin":99,"end":150,"name":"PUSH","value":"0"},{"begin":99,"end":150,"name":"SWAP1"},{"begin":99,"end":150,"name":"DUP2"},{"begin":99,"end":150,"name":"MSTORE"},{"begin":99,"end":150,"name":"PUSH","value":"40"},{"begin":99,"end":150,"name":"SWAP1"},{"begin":99,"end":150,"name":"KECCAK256"},{"begin":99,"end":150,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":99,"end":150,"name":"AND"},{"begin":99,"end":150,"name":"DUP2"},{"begin":99,"end":150,"name":"JUMP","value":"[out]"},{"begin":472,"end":579,"name":"tag","value":"15"},{"begin":472,"end":579,"name":"JUMPDEST"},{"begin":526,"end":535,"name":"PUSH","value":"60"},{"begin":554,"end":572,"name":"PUSH","value":"0"},{"begin":547,"end":572,"name":"DUP1"},{"begin":547,"end":572,"name":"SLOAD"},{"begin":547,"end":572,"name":"DUP1"},{"begin":547,"end":572,"name":"PUSH","value":"20"},{"begin":547,"end":572,"name":"MUL"},{"begin":547,"end":572,"name":"PUSH","value":"20"},{"begin":547,"end":572,"name":"ADD"},{"begin":547,"end":572,"name":"PUSH","value":"40"},{"begin":547,"end":572,"name":"MLOAD"},{"begin":547,"end":572,"name":"SWAP1"},{"begin":547,"end":572,"name":"DUP2"},{"begin":547,"end":572,"name":"ADD"},{"begin":547,"end":572,"name":"PUSH","value":"40"},{"begin":547,"end":572,"name":"MSTORE"},{"begin":547,"end":572,"name":"DUP1"},{"begin":547,"end":572,"name":"SWAP3"},{"begin":547,"end":572,"name":"SWAP2"},{"begin":547,"end":572,"name":"SWAP1"},{"begin":547,"end":572,"name":"DUP2"},{"begin":547,"end":572,"name":"DUP2"},{"begin":547,"end":572,"name":"MSTORE"},{"begin":547,"end":572,"name":"PUSH","value":"20"},{"begin":547,"end":572,"name":"ADD"},{"begin":547,"end":572,"name":"DUP3"},{"begin":547,"end":572,"name":"DUP1"},{"begin":547,"end":572,"name":"SLOAD"},{"begin":547,"end":572,"name":"DUP1"},{"begin":547,"end":572,"name":"ISZERO"},{"begin":547,"end":572,"name":"PUSH [tag]","value":"31"},{"begin":547,"end":572,"name":"JUMPI"},{"begin":547,"end":572,"name":"PUSH","value":"20"},{"begin":547,"end":572,"name":"MUL"},{"begin":547,"end":572,"name":"DUP3"},{"begin":547,"end":572,"name":"ADD"},{"begin":547,"end":572,"name":"SWAP2"},{"begin":547,"end":572,"name":"SWAP1"},{"begin":547,"end":572,"name":"PUSH","value":"0"},{"begin":547,"end":572,"name":"MSTORE"},{"begin":547,"end":572,"name":"PUSH","value":"20"},{"begin":547,"end":572,"name":"PUSH","value":"0"},{"begin":547,"end":572,"name":"KECCAK256"},{"begin":547,"end":572,"name":"SWAP1"},{"begin":547,"end":572,"name":"tag","value":"32"},{"begin":547,"end":572,"name":"JUMPDEST"},{"begin":547,"end":572,"name":"DUP2"},{"begin":547,"end":572,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":547,"end":572,"name":"AND"},{"begin":547,"end":572,"name":"DUP2"},{"begin":547,"end":572,"name":"MSTORE"},{"begin":547,"end":572,"name":"PUSH","value":"1"},{"begin":547,"end":572,"name":"SWAP1"},{"begin":547,"end":572,"name":"SWAP2"},{"begin":547,"end":572,"name":"ADD"},{"begin":547,"end":572,"name":"SWAP1"},{"begin":547,"end":572,"name":"PUSH","value":"20"},{"begin":547,"end":572,"name":"ADD"},{"begin":547,"end":572,"name":"DUP1"},{"begin":547,"end":572,"name":"DUP4"},{"begin":547,"end":572,"name":"GT"},{"begin":547,"end":572,"name":"PUSH [tag]","value":"32"},{"begin":547,"end":572,"name":"JUMPI"},{"begin":547,"end":572,"name":"tag","value":"31"},{"begin":547,"end":572,"name":"JUMPDEST"},{"begin":547,"end":572,"name":"POP"},{"begin":547,"end":572,"name":"POP"},{"begin":547,"end":572,"name":"POP"},{"begin":547,"end":572,"name":"POP"},{"begin":547,"end":572,"name":"POP"},{"begin":547,"end":572,"name":"SWAP1"},{"begin":547,"end":572,"name":"POP"},{"begin":472,"end":579,"name":"SWAP1"},{"begin":472,"end":579,"name":"JUMP","value":"[out]"},{"begin":58,"end":93,"name":"tag","value":"21"},{"begin":58,"end":93,"name":"JUMPDEST"},{"begin":58,"end":93,"name":"PUSH","value":"0"},{"begin":58,"end":93,"name":"DUP1"},{"begin":58,"end":93,"name":"SLOAD"},{"begin":58,"end":93,"name":"DUP3"},{"begin":58,"end":93,"name":"SWAP1"},{"begin":58,"end":93,"name":"DUP2"},{"begin":58,"end":93,"name":"LT"},{"begin":58,"end":93,"name":"PUSH [tag]","value":"33"},{"begin":58,"end":93,"name":"JUMPI"},{"begin":58,"end":93,"name":"INVALID"},{"begin":58,"end":93,"name":"tag","value":"33"},{"begin":58,"end":93,"name":"JUMPDEST"},{"begin":58,"end":93,"name":"PUSH","value":"0"},{"begin":58,"end":93,"name":"SWAP2"},{"begin":58,"end":93,"name":"DUP3"},{"begin":58,"end":93,"name":"MSTORE"},{"begin":58,"end":93,"name":"PUSH","value":"20"},{"begin":58,"end":93,"name":"SWAP1"},{"begin":58,"end":93,"name":"SWAP2"},{"begin":58,"end":93,"name":"KECCAK256"},{"begin":58,"end":93,"name":"ADD"},{"begin":58,"end":93,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":58,"end":93,"name":"AND"},{"begin":58,"end":93,"name":"SWAP1"},{"begin":-1,"end":-1,"name":"POP"},{"begin":58,"end":93,"name":"DUP2"},{"begin":58,"end":93,"name":"JUMP","value":"[out]"},{"begin":585,"end":703,"name":"tag","value":"24"},{"begin":585,"end":703,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":673,"end":696,"name":"SWAP1"},{"begin":673,"end":696,"name":"DUP2"},{"begin":673,"end":696,"name":"AND"},{"begin":647,"end":654,"name":"PUSH","value":"0"},{"begin":673,"end":696,"name":"SWAP1"},{"begin":673,"end":696,"name":"DUP2"},{"begin":673,"end":696,"name":"MSTORE"},{"begin":673,"end":689,"name":"PUSH","value":"1"},{"begin":673,"end":696,"name":"PUSH","value":"20"},{"begin":673,"end":696,"name":"MSTORE"},{"begin":673,"end":696,"name":"PUSH","value":"40"},{"begin":673,"end":696,"name":"SWAP1"},{"begin":673,"end":696,"name":"KECCAK256"},{"begin":673,"end":696,"name":"SLOAD"},{"begin":673,"end":696,"name":"AND"},{"begin":673,"end":696,"name":"SWAP1"},{"begin":585,"end":703,"name":"JUMP","value":"[out]"},{"begin":28,"end":705,"name":"tag","value":"27"},{"begin":28,"end":705,"name":"JUMPDEST"},{"begin":28,"end":705,"name":"PUSH","value":"40"},{"begin":28,"end":705,"name":"MLOAD"},{"begin":28,"end":705,"name":"PUSH #[$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":28,"end":705,"name":"DUP1"},{"begin":28,"end":705,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":28,"end":705,"name":"DUP4"},{"begin":28,"end":705,"name":"CODECOPY"},{"begin":28,"end":705,"name":"ADD"},{"begin":28,"end":705,"name":"SWAP1"},{"begin":28,"end":705,"name":"JUMP","value":"[out]"}],".data":{"0":{".code":[{"begin":708,"end":2348,"name":"PUSH","value":"80"},{"begin":708,"end":2348,"name":"PUSH","value":"40"},{"begin":708,"end":2348,"name":"MSTORE"},{"begin":1105,"end":1408,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"1"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"1"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":1105,"end":1408,"name":"POP"},{"begin":1105,"end":1408,"name":"PUSH","value":"40"},{"begin":1105,"end":1408,"name":"MLOAD"},{"begin":1105,"end":1408,"name":"PUSH","value":"80"},{"begin":1105,"end":1408,"name":"DUP1"},{"begin":1105,"end":1408,"name":"PUSHSIZE"},{"begin":1105,"end":1408,"name":"DUP4"},{"begin":1105,"end":1408,"name":"CODECOPY"},{"begin":1105,"end":1408,"name":"DUP2"},{"begin":1105,"end":1408,"name":"ADD"},{"begin":1105,"end":1408,"name":"PUSH","value":"40"},{"begin":1105,"end":1408,"name":"SWAP1"},{"begin":1105,"end":1408,"name":"DUP2"},{"begin":1105,"end":1408,"name":"MSTORE"},{"begin":1105,"end":1408,"name":"DUP2"},{"begin":1105,"end":1408,"name":"MLOAD"},{"begin":1105,"end":1408,"name":"PUSH","value":"20"},{"begin":1105,"end":1408,"name":"DUP1"},{"begin":1105,"end":1408,"name":"DUP5"},{"begin":1105,"end":1408,"name":"ADD"},{"begin":1105,"end":1408,"name":"MLOAD"},{"begin":1105,"end":1408,"name":"DUP4"},{"begin":1105,"end":1408,"name":"DUP6"},{"begin":1105,"end":1408,"name":"ADD"},{"begin":1105,"end":1408,"name":"MLOAD"},{"begin":1105,"end":1408,"name":"PUSH","value":"60"},{"begin":1105,"end":1408,"name":"SWAP1"},{"begin":1105,"end":1408,"name":"SWAP6"},{"begin":1105,"end":1408,"name":"ADD"},{"begin":1105,"end":1408,"name":"MLOAD"},{"begin":1222,"end":1227,"name":"PUSH","value":"1"},{"begin":1222,"end":1236,"name":"DUP1"},{"begin":1222,"end":1236,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1222,"end":1236,"name":"AND"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":1222,"end":1236,"name":"SWAP3"},{"begin":1222,"end":1236,"name":"DUP4"},{"begin":1222,"end":1236,"name":"AND"},{"begin":1222,"end":1236,"name":"OR"},{"begin":1222,"end":1236,"name":"DUP1"},{"begin":1222,"end":1236,"name":"DUP3"},{"begin":1222,"end":1236,"name":"SSTORE"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":1246,"end":1276,"name":"SWAP6"},{"begin":1246,"end":1276,"name":"SWAP1"},{"begin":1246,"end":1276,"name":"SWAP6"},{"begin":1246,"end":1276,"name":"SSTORE"},{"begin":1286,"end":1300,"name":"PUSH","value":"3"},{"begin":1286,"end":1318,"name":"SWAP3"},{"begin":1286,"end":1318,"name":"SWAP1"},{"begin":1286,"end":1318,"name":"SWAP3"},{"begin":1286,"end":1318,"name":"SSTORE"},{"begin":-1,"end":-1,"name":"PUSH","value":"0"},{"begin":1328,"end":1360,"name":"SWAP6"},{"begin":1328,"end":1360,"name":"DUP7"},{"begin":1328,"end":1360,"name":"SSTORE"},{"begin":1388,"end":1393,"name":"SWAP3"},{"begin":1388,"end":1393,"name":"SWAP1"},{"begin":1388,"end":1393,"name":"SWAP3"},{"begin":1388,"end":1393,"name":"AND"},{"begin":1370,"end":1394,"name":"DUP5"},{"begin":1370,"end":1394,"name":"MSTORE"},{"begin":1370,"end":1387,"name":"PUSH","value":"4"},{"begin":1370,"end":1394,"name":"SWAP1"},{"begin":1370,"end":1394,"name":"MSTORE"},{"begin":1370,"end":1394,"name":"SWAP1"},{"begin":1370,"end":1394,"name":"DUP3"},{"begin":1370,"end":1394,"name":"KECCAK256"},{"begin":1370,"end":1401,"name":"DUP1"},{"begin":1370,"end":1401,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1370,"end":1401,"name":"AND"},{"begin":1370,"end":1401,"name":"SWAP1"},{"begin":1370,"end":1401,"name":"SWAP2"},{"begin":1370,"end":1401,"name":"OR"},{"begin":1370,"end":1401,"name":"SWAP1"},{"begin":1370,"end":1401,"name":"SSTORE"},{"begin":-1,"end":-1,"name":"PUSH","value":"3C7"},{"begin":-1,"end":-1,"name":"SWAP1"},{"begin":-1,"end":-1,"name":"DUP2"},{"begin":-1,"end":-1,"name":"SWAP1"},{"begin":708,"end":2348,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":708,"end":2348,"name":"SWAP1"},{"begin":708,"end":2348,"name":"CODECOPY"},{"begin":708,"end":2348,"name":"PUSH","value":"0"},{"begin":708,"end":2348,"name":"RETURN"}],".data":{"0":{".auxdata":"a165627a7a7230582010d15f81c53a48d42d86ed8789e732eae080710016199ef1f02c901a1b1fa8860029",".code":[{"begin":708,"end":2348,"name":"PUSH","value":"80"},{"begin":708,"end":2348,"name":"PUSH","value":"40"},{"begin":708,"end":2348,"name":"MSTORE"},{"begin":708,"end":2348,"name":"PUSH","value":"4"},{"begin":708,"end":2348,"name":"CALLDATASIZE"},{"begin":708,"end":2348,"name":"LT"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"1"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"PUSH","value":"FFFFFFFF"},{"begin":708,"end":2348,"name":"PUSH","value":"100000000000000000000000000000000000000000000000000000000"},{"begin":708,"end":2348,"name":"PUSH","value":"0"},{"begin":708,"end":2348,"name":"CALLDATALOAD"},{"begin":708,"end":2348,"name":"DIV"},{"begin":708,"end":2348,"name":"AND"},{"begin":708,"end":2348,"name":"PUSH","value":"47F07A8E"},{"begin":708,"end":2348,"name":"DUP2"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"2"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"7F83BF7D"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"3"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"8823DA6C"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"4"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"8DA5CB5B"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"5"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"94EF987E"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"6"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"A1186A22"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"7"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"BAFFBEF2"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"8"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"D9A4ABE8"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"9"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"E7E1EF57"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"10"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"PUSH","value":"F7CA8431"},{"begin":708,"end":2348,"name":"EQ"},{"begin":708,"end":2348,"name":"PUSH [tag]","value":"11"},{"begin":708,"end":2348,"name":"JUMPI"},{"begin":708,"end":2348,"name":"tag","value":"1"},{"begin":708,"end":2348,"name":"JUMPDEST"},{"begin":708,"end":2348,"name":"PUSH","value":"0"},{"begin":708,"end":2348,"name":"DUP1"},{"begin":708,"end":2348,"name":"REVERT"},{"begin":1544,"end":1650,"name":"tag","value":"2"},{"begin":1544,"end":1650,"name":"JUMPDEST"},{"begin":1544,"end":1650,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"12"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"12"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":1544,"end":1650,"name":"POP"},{"begin":1544,"end":1650,"name":"PUSH [tag]","value":"13"},{"begin":1544,"end":1650,"name":"PUSH [tag]","value":"14"},{"begin":1544,"end":1650,"name":"JUMP"},{"begin":1544,"end":1650,"name":"tag","value":"13"},{"begin":1544,"end":1650,"name":"JUMPDEST"},{"begin":1544,"end":1650,"name":"STOP"},{"begin":1414,"end":1534,"name":"tag","value":"3"},{"begin":1414,"end":1534,"name":"JUMPDEST"},{"begin":1414,"end":1534,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"15"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"15"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":1414,"end":1534,"name":"PUSH [tag]","value":"13"},{"begin":1414,"end":1534,"name":"PUSH","value":"4"},{"begin":1414,"end":1534,"name":"CALLDATALOAD"},{"begin":1414,"end":1534,"name":"PUSH [tag]","value":"17"},{"begin":1414,"end":1534,"name":"JUMP"},{"begin":1854,"end":1953,"name":"tag","value":"4"},{"begin":1854,"end":1953,"name":"JUMPDEST"},{"begin":1854,"end":1953,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"18"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"18"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":1854,"end":1953,"name":"PUSH [tag]","value":"13"},{"begin":1854,"end":1953,"name":"PUSH","value":"4"},{"begin":1854,"end":1953,"name":"CALLDATALOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1854,"end":1953,"name":"AND"},{"begin":1854,"end":1953,"name":"PUSH [tag]","value":"20"},{"begin":1854,"end":1953,"name":"JUMP"},{"begin":864,"end":884,"name":"tag","value":"5"},{"begin":864,"end":884,"name":"JUMPDEST"},{"begin":864,"end":884,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"21"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"21"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":864,"end":884,"name":"POP"},{"begin":864,"end":884,"name":"PUSH [tag]","value":"22"},{"begin":864,"end":884,"name":"PUSH [tag]","value":"23"},{"begin":864,"end":884,"name":"JUMP"},{"begin":864,"end":884,"name":"tag","value":"22"},{"begin":864,"end":884,"name":"JUMPDEST"},{"begin":864,"end":884,"name":"PUSH","value":"40"},{"begin":864,"end":884,"name":"DUP1"},{"begin":864,"end":884,"name":"MLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":864,"end":884,"name":"SWAP1"},{"begin":864,"end":884,"name":"SWAP3"},{"begin":864,"end":884,"name":"AND"},{"begin":864,"end":884,"name":"DUP3"},{"begin":864,"end":884,"name":"MSTORE"},{"begin":864,"end":884,"name":"MLOAD"},{"begin":864,"end":884,"name":"SWAP1"},{"begin":864,"end":884,"name":"DUP2"},{"begin":864,"end":884,"name":"SWAP1"},{"begin":864,"end":884,"name":"SUB"},{"begin":864,"end":884,"name":"PUSH","value":"20"},{"begin":864,"end":884,"name":"ADD"},{"begin":864,"end":884,"name":"SWAP1"},{"begin":864,"end":884,"name":"RETURN"},{"begin":832,"end":858,"name":"tag","value":"6"},{"begin":832,"end":858,"name":"JUMPDEST"},{"begin":832,"end":858,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"24"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"24"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":832,"end":858,"name":"POP"},{"begin":832,"end":858,"name":"PUSH [tag]","value":"25"},{"begin":832,"end":858,"name":"PUSH [tag]","value":"26"},{"begin":832,"end":858,"name":"JUMP"},{"begin":832,"end":858,"name":"tag","value":"25"},{"begin":832,"end":858,"name":"JUMPDEST"},{"begin":832,"end":858,"name":"PUSH","value":"40"},{"begin":832,"end":858,"name":"DUP1"},{"begin":832,"end":858,"name":"MLOAD"},{"begin":832,"end":858,"name":"SWAP2"},{"begin":832,"end":858,"name":"DUP3"},{"begin":832,"end":858,"name":"MSTORE"},{"begin":832,"end":858,"name":"MLOAD"},{"begin":832,"end":858,"name":"SWAP1"},{"begin":832,"end":858,"name":"DUP2"},{"begin":832,"end":858,"name":"SWAP1"},{"begin":832,"end":858,"name":"SUB"},{"begin":832,"end":858,"name":"PUSH","value":"20"},{"begin":832,"end":858,"name":"ADD"},{"begin":832,"end":858,"name":"SWAP1"},{"begin":832,"end":858,"name":"RETURN"},{"begin":960,"end":1009,"name":"tag","value":"7"},{"begin":960,"end":1009,"name":"JUMPDEST"},{"begin":960,"end":1009,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"27"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"27"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":960,"end":1009,"name":"PUSH [tag]","value":"28"},{"begin":960,"end":1009,"name":"PUSH","value":"4"},{"begin":960,"end":1009,"name":"CALLDATALOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":960,"end":1009,"name":"AND"},{"begin":960,"end":1009,"name":"PUSH [tag]","value":"29"},{"begin":960,"end":1009,"name":"JUMP"},{"begin":960,"end":1009,"name":"tag","value":"28"},{"begin":960,"end":1009,"name":"JUMPDEST"},{"begin":960,"end":1009,"name":"PUSH","value":"40"},{"begin":960,"end":1009,"name":"DUP1"},{"begin":960,"end":1009,"name":"MLOAD"},{"begin":960,"end":1009,"name":"SWAP2"},{"begin":960,"end":1009,"name":"ISZERO"},{"begin":960,"end":1009,"name":"ISZERO"},{"begin":960,"end":1009,"name":"DUP3"},{"begin":960,"end":1009,"name":"MSTORE"},{"begin":960,"end":1009,"name":"MLOAD"},{"begin":960,"end":1009,"name":"SWAP1"},{"begin":960,"end":1009,"name":"DUP2"},{"begin":960,"end":1009,"name":"SWAP1"},{"begin":960,"end":1009,"name":"SUB"},{"begin":960,"end":1009,"name":"PUSH","value":"20"},{"begin":960,"end":1009,"name":"ADD"},{"begin":960,"end":1009,"name":"SWAP1"},{"begin":960,"end":1009,"name":"RETURN"},{"begin":890,"end":918,"name":"tag","value":"8"},{"begin":890,"end":918,"name":"JUMPDEST"},{"begin":890,"end":918,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"30"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"30"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":890,"end":918,"name":"POP"},{"begin":890,"end":918,"name":"PUSH [tag]","value":"25"},{"begin":890,"end":918,"name":"PUSH [tag]","value":"32"},{"begin":890,"end":918,"name":"JUMP"},{"begin":1959,"end":2085,"name":"tag","value":"9"},{"begin":1959,"end":2085,"name":"JUMPDEST"},{"begin":1959,"end":2085,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"33"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"33"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":1959,"end":2085,"name":"PUSH [tag]","value":"28"},{"begin":1959,"end":2085,"name":"PUSH","value":"4"},{"begin":1959,"end":2085,"name":"CALLDATALOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1959,"end":2085,"name":"AND"},{"begin":1959,"end":2085,"name":"PUSH [tag]","value":"35"},{"begin":1959,"end":2085,"name":"JUMP"},{"begin":2091,"end":2346,"name":"tag","value":"10"},{"begin":2091,"end":2346,"name":"JUMPDEST"},{"begin":2091,"end":2346,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"36"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"36"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":2091,"end":2346,"name":"POP"},{"begin":2091,"end":2346,"name":"PUSH [tag]","value":"25"},{"begin":2091,"end":2346,"name":"PUSH [tag]","value":"38"},{"begin":2091,"end":2346,"name":"JUMP"},{"begin":1656,"end":1844,"name":"tag","value":"11"},{"begin":1656,"end":1844,"name":"JUMPDEST"},{"begin":1656,"end":1844,"name":"PUSH [tag]","value":"13"},{"begin":1656,"end":1844,"name":"PUSH [tag]","value":"40"},{"begin":1656,"end":1844,"name":"JUMP"},{"begin":1544,"end":1650,"name":"tag","value":"14"},{"begin":1544,"end":1650,"name":"JUMPDEST"},{"begin":1070,"end":1075,"name":"PUSH","value":"1"},{"begin":1070,"end":1075,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1070,"end":1075,"name":"AND"},{"begin":1056,"end":1066,"name":"CALLER"},{"begin":1056,"end":1075,"name":"EQ"},{"begin":1048,"end":1076,"name":"PUSH [tag]","value":"42"},{"begin":1048,"end":1076,"name":"JUMPI"},{"begin":1048,"end":1076,"name":"PUSH","value":"0"},{"begin":1048,"end":1076,"name":"DUP1"},{"begin":1048,"end":1076,"name":"REVERT"},{"begin":1048,"end":1076,"name":"tag","value":"42"},{"begin":1048,"end":1076,"name":"JUMPDEST"},{"begin":1606,"end":1611,"name":"PUSH","value":"1"},{"begin":1606,"end":1611,"name":"SLOAD"},{"begin":1606,"end":1643,"name":"PUSH","value":"40"},{"begin":1606,"end":1643,"name":"MLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1606,"end":1611,"name":"SWAP1"},{"begin":1606,"end":1611,"name":"SWAP2"},{"begin":1606,"end":1611,"name":"AND"},{"begin":1606,"end":1611,"name":"SWAP1"},{"begin":1629,"end":1633,"name":"ADDRESS"},{"begin":1621,"end":1642,"name":"BALANCE"},{"begin":1606,"end":1643,"name":"DUP1"},{"begin":1606,"end":1643,"name":"ISZERO"},{"begin":1606,"end":1643,"name":"PUSH","value":"8FC"},{"begin":1606,"end":1643,"name":"MUL"},{"begin":1606,"end":1643,"name":"SWAP2"},{"begin":1606,"end":1611,"name":"PUSH","value":"0"},{"begin":1606,"end":1643,"name":"DUP2"},{"begin":1606,"end":1611,"name":"DUP2"},{"begin":1606,"end":1643,"name":"DUP2"},{"begin":1621,"end":1642,"name":"DUP6"},{"begin":1606,"end":1611,"name":"DUP9"},{"begin":1606,"end":1643,"name":"DUP9"},{"begin":1606,"end":1643,"name":"CALL"},{"begin":1606,"end":1643,"name":"SWAP4"},{"begin":1606,"end":1643,"name":"POP"},{"begin":1606,"end":1643,"name":"POP"},{"begin":1606,"end":1643,"name":"POP"},{"begin":1606,"end":1643,"name":"POP"},{"begin":1606,"end":1643,"name":"ISZERO"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"44"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":45,"end":61,"name":"RETURNDATASIZE"},{"begin":42,"end":43,"name":"PUSH","value":"0"},{"begin":39,"end":40,"name":"DUP1"},{"begin":24,"end":62,"name":"RETURNDATACOPY"},{"begin":77,"end":93,"name":"RETURNDATASIZE"},{"begin":74,"end":75,"name":"PUSH","value":"0"},{"begin":67,"end":94,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"44"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":1606,"end":1643,"name":"POP"},{"begin":1544,"end":1650,"name":"JUMP","value":"[out]"},{"begin":1414,"end":1534,"name":"tag","value":"17"},{"begin":1414,"end":1534,"name":"JUMPDEST"},{"begin":1070,"end":1075,"name":"PUSH","value":"1"},{"begin":1070,"end":1075,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1070,"end":1075,"name":"AND"},{"begin":1056,"end":1066,"name":"CALLER"},{"begin":1056,"end":1075,"name":"EQ"},{"begin":1048,"end":1076,"name":"PUSH [tag]","value":"46"},{"begin":1048,"end":1076,"name":"JUMPI"},{"begin":1048,"end":1076,"name":"PUSH","value":"0"},{"begin":1048,"end":1076,"name":"DUP1"},{"begin":1048,"end":1076,"name":"REVERT"},{"begin":1048,"end":1076,"name":"tag","value":"46"},{"begin":1048,"end":1076,"name":"JUMPDEST"},{"begin":1491,"end":1505,"name":"PUSH","value":"0"},{"begin":1491,"end":1523,"name":"SSTORE"},{"begin":1414,"end":1534,"name":"JUMP","value":"[out]"},{"begin":1854,"end":1953,"name":"tag","value":"20"},{"begin":1854,"end":1953,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1911,"end":1938,"name":"AND"},{"begin":1941,"end":1946,"name":"PUSH","value":"0"},{"begin":1911,"end":1938,"name":"SWAP1"},{"begin":1911,"end":1938,"name":"DUP2"},{"begin":1911,"end":1938,"name":"MSTORE"},{"begin":1911,"end":1928,"name":"PUSH","value":"4"},{"begin":1911,"end":1938,"name":"PUSH","value":"20"},{"begin":1911,"end":1938,"name":"MSTORE"},{"begin":1911,"end":1938,"name":"PUSH","value":"40"},{"begin":1911,"end":1938,"name":"SWAP1"},{"begin":1911,"end":1938,"name":"KECCAK256"},{"begin":1911,"end":1946,"name":"DUP1"},{"begin":1911,"end":1946,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1911,"end":1946,"name":"AND"},{"begin":1911,"end":1946,"name":"SWAP1"},{"begin":1911,"end":1946,"name":"SSTORE"},{"begin":1854,"end":1953,"name":"JUMP","value":"[out]"},{"begin":864,"end":884,"name":"tag","value":"23"},{"begin":864,"end":884,"name":"JUMPDEST"},{"begin":864,"end":884,"name":"PUSH","value":"1"},{"begin":864,"end":884,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":864,"end":884,"name":"AND"},{"begin":864,"end":884,"name":"DUP2"},{"begin":864,"end":884,"name":"JUMP","value":"[out]"},{"begin":832,"end":858,"name":"tag","value":"26"},{"begin":832,"end":858,"name":"JUMPDEST"},{"begin":832,"end":858,"name":"PUSH","value":"0"},{"begin":832,"end":858,"name":"SLOAD"},{"begin":832,"end":858,"name":"DUP2"},{"begin":832,"end":858,"name":"JUMP","value":"[out]"},{"begin":960,"end":1009,"name":"tag","value":"29"},{"begin":960,"end":1009,"name":"JUMPDEST"},{"begin":960,"end":1009,"name":"PUSH","value":"4"},{"begin":960,"end":1009,"name":"PUSH","value":"20"},{"begin":960,"end":1009,"name":"MSTORE"},{"begin":960,"end":1009,"name":"PUSH","value":"0"},{"begin":960,"end":1009,"name":"SWAP1"},{"begin":960,"end":1009,"name":"DUP2"},{"begin":960,"end":1009,"name":"MSTORE"},{"begin":960,"end":1009,"name":"PUSH","value":"40"},{"begin":960,"end":1009,"name":"SWAP1"},{"begin":960,"end":1009,"name":"KECCAK256"},{"begin":960,"end":1009,"name":"SLOAD"},{"begin":960,"end":1009,"name":"PUSH","value":"FF"},{"begin":960,"end":1009,"name":"AND"},{"begin":960,"end":1009,"name":"DUP2"},{"begin":960,"end":1009,"name":"JUMP","value":"[out]"},{"begin":890,"end":918,"name":"tag","value":"32"},{"begin":890,"end":918,"name":"JUMPDEST"},{"begin":890,"end":918,"name":"PUSH","value":"2"},{"begin":890,"end":918,"name":"SLOAD"},{"begin":890,"end":918,"name":"DUP2"},{"begin":890,"end":918,"name":"JUMP","value":"[out]"},{"begin":1959,"end":2085,"name":"tag","value":"35"},{"begin":1959,"end":2085,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":2050,"end":2077,"name":"AND"},{"begin":2026,"end":2030,"name":"PUSH","value":"0"},{"begin":2050,"end":2077,"name":"SWAP1"},{"begin":2050,"end":2077,"name":"DUP2"},{"begin":2050,"end":2077,"name":"MSTORE"},{"begin":2050,"end":2067,"name":"PUSH","value":"4"},{"begin":2050,"end":2077,"name":"PUSH","value":"20"},{"begin":2050,"end":2077,"name":"MSTORE"},{"begin":2050,"end":2077,"name":"PUSH","value":"40"},{"begin":2050,"end":2077,"name":"SWAP1"},{"begin":2050,"end":2077,"name":"KECCAK256"},{"begin":2050,"end":2077,"name":"SLOAD"},{"begin":2050,"end":2077,"name":"PUSH","value":"FF"},{"begin":2050,"end":2077,"name":"AND"},{"begin":2050,"end":2077,"name":"SWAP1"},{"begin":1959,"end":2085,"name":"JUMP","value":"[out]"},{"begin":2091,"end":2346,"name":"tag","value":"38"},{"begin":2091,"end":2346,"name":"JUMPDEST"},{"begin":2174,"end":2184,"name":"CALLER"},{"begin":2133,"end":2140,"name":"PUSH","value":"0"},{"begin":2156,"end":2185,"name":"SWAP1"},{"begin":2156,"end":2185,"name":"DUP2"},{"begin":2156,"end":2185,"name":"MSTORE"},{"begin":2156,"end":2173,"name":"PUSH","value":"4"},{"begin":2156,"end":2185,"name":"PUSH","value":"20"},{"begin":2156,"end":2185,"name":"MSTORE"},{"begin":2156,"end":2185,"name":"PUSH","value":"40"},{"begin":2156,"end":2185,"name":"DUP2"},{"begin":2156,"end":2185,"name":"KECCAK256"},{"begin":2156,"end":2185,"name":"SLOAD"},{"begin":2156,"end":2185,"name":"PUSH","value":"FF"},{"begin":2156,"end":2185,"name":"AND"},{"begin":2156,"end":2193,"name":"ISZERO"},{"begin":2156,"end":2193,"name":"ISZERO"},{"begin":2156,"end":2185,"name":"PUSH","value":"1"},{"begin":2156,"end":2193,"name":"EQ"},{"begin":2152,"end":2340,"name":"ISZERO"},{"begin":2152,"end":2340,"name":"PUSH [tag]","value":"51"},{"begin":2152,"end":2340,"name":"JUMPI"},{"begin":2214,"end":2238,"name":"PUSH","value":"40"},{"begin":2214,"end":2238,"name":"DUP1"},{"begin":2214,"end":2238,"name":"MLOAD"},{"begin":2227,"end":2237,"name":"CALLER"},{"begin":2214,"end":2238,"name":"DUP2"},{"begin":2214,"end":2238,"name":"MSTORE"},{"begin":2214,"end":2238,"name":"SWAP1"},{"begin":2214,"end":2238,"name":"MLOAD"},{"begin":2214,"end":2238,"name":"PUSH","value":"5E11D6F4A906F860548606BEE83FDECDFE541044B913FF4D0D544B9CD43875B6"},{"begin":2214,"end":2238,"name":"SWAP2"},{"begin":2214,"end":2238,"name":"DUP2"},{"begin":2214,"end":2238,"name":"SWAP1"},{"begin":2214,"end":2238,"name":"SUB"},{"begin":2214,"end":2238,"name":"PUSH","value":"20"},{"begin":2214,"end":2238,"name":"ADD"},{"begin":2214,"end":2238,"name":"SWAP1"},{"begin":2214,"end":2238,"name":"LOG1"},{"begin":-1,"end":-1,"name":"POP"},{"begin":2260,"end":2274,"name":"PUSH","value":"3"},{"begin":2260,"end":2274,"name":"SLOAD"},{"begin":2252,"end":2275,"name":"PUSH [tag]","value":"52"},{"begin":2252,"end":2275,"name":"JUMP"},{"begin":2152,"end":2340,"name":"tag","value":"51"},{"begin":2152,"end":2340,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":2306,"end":2329,"name":"PUSH","value":"756E617574686F72697A65640000000000000000000000000000000000000000"},{"begin":2152,"end":2340,"name":"tag","value":"52"},{"begin":2152,"end":2340,"name":"JUMPDEST"},{"begin":2091,"end":2346,"name":"SWAP1"},{"begin":2091,"end":2346,"name":"JUMP","value":"[out]"},{"begin":1656,"end":1844,"name":"tag","value":"40"},{"begin":1656,"end":1844,"name":"JUMPDEST"},{"begin":1723,"end":1737,"name":"PUSH","value":"0"},{"begin":1723,"end":1737,"name":"SLOAD"},{"begin":1710,"end":1719,"name":"CALLVALUE"},{"begin":1710,"end":1737,"name":"LT"},{"begin":1710,"end":1737,"name":"ISZERO"},{"begin":1702,"end":1738,"name":"PUSH [tag]","value":"54"},{"begin":1702,"end":1738,"name":"JUMPI"},{"begin":1702,"end":1738,"name":"PUSH","value":"0"},{"begin":1702,"end":1738,"name":"DUP1"},{"begin":1702,"end":1738,"name":"REVERT"},{"begin":1702,"end":1738,"name":"tag","value":"54"},{"begin":1702,"end":1738,"name":"JUMPDEST"},{"begin":1753,"end":1791,"name":"PUSH","value":"40"},{"begin":1753,"end":1791,"name":"DUP1"},{"begin":1753,"end":1791,"name":"MLOAD"},{"begin":1769,"end":1778,"name":"CALLVALUE"},{"begin":1753,"end":1791,"name":"DUP2"},{"begin":1753,"end":1791,"name":"MSTORE"},{"begin":1780,"end":1790,"name":"CALLER"},{"begin":1753,"end":1791,"name":"PUSH","value":"20"},{"begin":1753,"end":1791,"name":"DUP3"},{"begin":1753,"end":1791,"name":"ADD"},{"begin":1753,"end":1791,"name":"MSTORE"},{"begin":1753,"end":1791,"name":"DUP2"},{"begin":1753,"end":1791,"name":"MLOAD"},{"begin":1753,"end":1791,"name":"PUSH","value":"AC140D9E227CBC7BAF5587524F98FE6C57443181D6CE49DC2F583CCA0C49BDF8"},{"begin":1753,"end":1791,"name":"SWAP3"},{"begin":1753,"end":1791,"name":"SWAP2"},{"begin":1753,"end":1791,"name":"DUP2"},{"begin":1753,"end":1791,"name":"SWAP1"},{"begin":1753,"end":1791,"name":"SUB"},{"begin":1753,"end":1791,"name":"SWAP1"},{"begin":1753,"end":1791,"name":"SWAP2"},{"begin":1753,"end":1791,"name":"ADD"},{"begin":1753,"end":1791,"name":"SWAP1"},{"begin":1753,"end":1791,"name":"LOG1"},{"begin":1819,"end":1829,"name":"CALLER"},{"begin":1801,"end":1830,"name":"PUSH","value":"0"},{"begin":1801,"end":1830,"name":"SWAP1"},{"begin":1801,"end":1830,"name":"DUP2"},{"begin":1801,"end":1830,"name":"MSTORE"},{"begin":1801,"end":1818,"name":"PUSH","value":"4"},{"begin":1801,"end":1830,"name":"PUSH","value":"20"},{"begin":1801,"end":1830,"name":"MSTORE"},{"begin":1801,"end":1830,"name":"PUSH","value":"40"},{"begin":1801,"end":1830,"name":"SWAP1"},{"begin":1801,"end":1830,"name":"KECCAK256"},{"begin":1801,"end":1837,"name":"DUP1"},{"begin":1801,"end":1837,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1801,"end":1837,"name":"AND"},{"begin":1833,"end":1837,"name":"PUSH","value":"1"},{"begin":1801,"end":1837,"name":"OR"},{"begin":1801,"end":1837,"name":"SWAP1"},{"begin":1801,"end":1837,"name":"SSTORE"},{"begin":1656,"end":1844,"name":"JUMP","value":"[out]"}]}}}}}}},"bytecode":"608060405234801561001057600080fd5b50610784806100206000396000f30060806040526004361061006c5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630b7eb161811461007157806338a2c331146100915780638dda93e3146100ce578063b9f68a3214610133578063c056b5de1461014b575b600080fd5b34801561007d57600080fd5b5061008f60043560243560443561016c565b005b34801561009d57600080fd5b506100b2600160a060020a0360043516610233565b60408051600160a060020a039092168252519081900360200190f35b3480156100da57600080fd5b506100e361024e565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561011f578181015183820152602001610107565b505050509050019250505060405180910390f35b34801561013f57600080fd5b506100b26004356102b0565b34801561015757600080fd5b506100b2600160a060020a03600435166102d8565b60008383833361017a6102f6565b9384526020840192909252604080840191909152600160a060020a0390911660608301525190819003608001906000f0801580156101bc573d6000803e3d6000fd5b5060008054600181810183557f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5639091018054600160a060020a0390941673ffffffffffffffffffffffffffffffffffffffff1994851681179091553383526020919091526040909120805490921617905550505050565b600160205260009081526040902054600160a060020a031681565b606060008054806020026020016040519081016040528092919081815260200182805480156102a657602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610288575b5050505050905090565b60008054829081106102be57fe5b600091825260209091200154600160a060020a0316905081565b600160a060020a039081166000908152600160205260409020541690565b60405161045280610307833901905600608060405234801561001057600080fd5b5060405160808061045283398101604090815281516020808401518385015160609095015160018054600160a060020a03928316600160a060020a0319909116178082556002959095556003929092556000958655929092168452600490529120805460ff191690911790556103c78061008b6000396000f3006080604052600436106100a35763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166347f07a8e81146100a85780637f83bf7d146100bf5780638823da6c146100d75780638da5cb5b146100f857806394ef987e14610129578063a1186a2214610150578063baffbef214610185578063d9a4abe81461019a578063e7e1ef57146101bb578063f7ca8431146101d0575b600080fd5b3480156100b457600080fd5b506100bd6101d8565b005b3480156100cb57600080fd5b506100bd60043561022c565b3480156100e357600080fd5b506100bd600160a060020a0360043516610248565b34801561010457600080fd5b5061010d610269565b60408051600160a060020a039092168252519081900360200190f35b34801561013557600080fd5b5061013e610278565b60408051918252519081900360200190f35b34801561015c57600080fd5b50610171600160a060020a036004351661027e565b604080519115158252519081900360200190f35b34801561019157600080fd5b5061013e610293565b3480156101a657600080fd5b50610171600160a060020a0360043516610299565b3480156101c757600080fd5b5061013e6102b7565b6100bd610336565b600154600160a060020a031633146101ef57600080fd5b600154604051600160a060020a0390911690303180156108fc02916000818181858888f19350505050158015610229573d6000803e3d6000fd5b50565b600154600160a060020a0316331461024357600080fd5b600055565b600160a060020a03166000908152600460205260409020805460ff19169055565b600154600160a060020a031681565b60005481565b60046020526000908152604090205460ff1681565b60025481565b600160a060020a031660009081526004602052604090205460ff1690565b3360009081526004602052604081205460ff16151560011415610310576040805133815290517f5e11d6f4a906f860548606bee83fdecdfe541044b913ff4d0d544b9cd43875b69181900360200190a150600354610333565b507f756e617574686f72697a656400000000000000000000000000000000000000005b90565b60005434101561034557600080fd5b6040805134815233602082015281517fac140d9e227cbc7baf5587524f98fe6c57443181d6ce49dc2f583cca0c49bdf8929181900390910190a1336000908152600460205260409020805460ff191660011790555600a165627a7a7230582010d15f81c53a48d42d86ed8789e732eae080710016199ef1f02c901a1b1fa8860029a165627a7a72305820d8fbff41e54b99a079439c3c69710658346169f593d85cc23bc2177eaf4243660029","functionHashes":{"createAccount(bytes32,bytes32,uint256)":"0b7eb161","getMyDataAddress(address)":"c056b5de","getRegisteredAccounts()":"8dda93e3","mydataAccountMap(address)":"38a2c331","registeredAccounts(uint256)":"b9f68a32"},"gasEstimates":{"creation":[424,384800],"external":{"createAccount(bytes32,bytes32,uint256)":null,"getMyDataAddress(address)":781,"getRegisteredAccounts()":null,"mydataAccountMap(address)":706,"registeredAccounts(uint256)":903},"internal":{}},"interface":"[{\"constant\":false,\"inputs\":[{\"name\":\"publicDataKey\",\"type\":\"bytes32\"},{\"name\":\"privateDataKey\",\"type\":\"bytes32\"},{\"name\":\"minimumPayment\",\"type\":\"uint256\"}],\"name\":\"createAccount\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"mydataAccountMap\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getRegisteredAccounts\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"registeredAccounts\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"getMyDataAddress\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]","metadata":"{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"publicDataKey\",\"type\":\"bytes32\"},{\"name\":\"privateDataKey\",\"type\":\"bytes32\"},{\"name\":\"minimumPayment\",\"type\":\"uint256\"}],\"name\":\"createAccount\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"mydataAccountMap\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getRegisteredAccounts\",\"outputs\":[{\"name\":\"\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"registeredAccounts\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"getMyDataAddress\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"\":\"MyDataFactory\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"\":{\"keccak256\":\"0x0a011247859560b13129368f1e08a55681a24255deb159154f133f17f692f1fb\",\"urls\":[\"bzzr://36ff0cadf36e9ebaed9639ff822a37c93b1464d84542eb37db73be61d3353685\"]}},\"version\":1}","opcodes":"PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x784 DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x6C JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0xB7EB161 DUP2 EQ PUSH2 0x71 JUMPI DUP1 PUSH4 0x38A2C331 EQ PUSH2 0x91 JUMPI DUP1 PUSH4 0x8DDA93E3 EQ PUSH2 0xCE JUMPI DUP1 PUSH4 0xB9F68A32 EQ PUSH2 0x133 JUMPI DUP1 PUSH4 0xC056B5DE EQ PUSH2 0x14B JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x7D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x8F PUSH1 0x4 CALLDATALOAD PUSH1 0x24 CALLDATALOAD PUSH1 0x44 CALLDATALOAD PUSH2 0x16C JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x9D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xB2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x233 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xE3 PUSH2 0x24E JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP4 MLOAD DUP2 DUP4 ADD MSTORE DUP4 MLOAD SWAP2 SWAP3 DUP4 SWAP3 SWAP1 DUP4 ADD SWAP2 DUP6 DUP2 ADD SWAP2 MUL DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x11F JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x107 JUMP JUMPDEST POP POP POP POP SWAP1 POP ADD SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x13F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xB2 PUSH1 0x4 CALLDATALOAD PUSH2 0x2B0 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x157 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xB2 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x2D8 JUMP JUMPDEST PUSH1 0x0 DUP4 DUP4 DUP4 CALLER PUSH2 0x17A PUSH2 0x2F6 JUMP JUMPDEST SWAP4 DUP5 MSTORE PUSH1 0x20 DUP5 ADD SWAP3 SWAP1 SWAP3 MSTORE PUSH1 0x40 DUP1 DUP5 ADD SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND PUSH1 0x60 DUP4 ADD MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x80 ADD SWAP1 PUSH1 0x0 CREATE DUP1 ISZERO DUP1 ISZERO PUSH2 0x1BC JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 DUP2 DUP2 ADD DUP4 SSTORE PUSH32 0x290DECD9548B62A8D60345A988386FC84BA6BC95484008F6362F93160EF3E563 SWAP1 SWAP2 ADD DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP5 AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT SWAP5 DUP6 AND DUP2 OR SWAP1 SWAP2 SSTORE CALLER DUP4 MSTORE PUSH1 0x20 SWAP2 SWAP1 SWAP2 MSTORE PUSH1 0x40 SWAP1 SWAP2 KECCAK256 DUP1 SLOAD SWAP1 SWAP3 AND OR SWAP1 SSTORE POP POP POP POP JUMP JUMPDEST PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x0 DUP1 SLOAD DUP1 PUSH1 0x20 MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD DUP1 ISZERO PUSH2 0x2A6 JUMPI PUSH1 0x20 MUL DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 MSTORE PUSH1 0x1 SWAP1 SWAP2 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x288 JUMPI JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 SLOAD DUP3 SWAP1 DUP2 LT PUSH2 0x2BE JUMPI INVALID JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND SWAP1 POP DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x1 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD AND SWAP1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x452 DUP1 PUSH2 0x307 DUP4 CODECOPY ADD SWAP1 JUMP STOP PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH1 0x80 DUP1 PUSH2 0x452 DUP4 CODECOPY DUP2 ADD PUSH1 0x40 SWAP1 DUP2 MSTORE DUP2 MLOAD PUSH1 0x20 DUP1 DUP5 ADD MLOAD DUP4 DUP6 ADD MLOAD PUSH1 0x60 SWAP1 SWAP6 ADD MLOAD PUSH1 0x1 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP3 DUP4 AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT SWAP1 SWAP2 AND OR DUP1 DUP3 SSTORE PUSH1 0x2 SWAP6 SWAP1 SWAP6 SSTORE PUSH1 0x3 SWAP3 SWAP1 SWAP3 SSTORE PUSH1 0x0 SWAP6 DUP7 SSTORE SWAP3 SWAP1 SWAP3 AND DUP5 MSTORE PUSH1 0x4 SWAP1 MSTORE SWAP2 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND SWAP1 SWAP2 OR SWAP1 SSTORE PUSH2 0x3C7 DUP1 PUSH2 0x8B PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0xA3 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x47F07A8E DUP2 EQ PUSH2 0xA8 JUMPI DUP1 PUSH4 0x7F83BF7D EQ PUSH2 0xBF JUMPI DUP1 PUSH4 0x8823DA6C EQ PUSH2 0xD7 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0xF8 JUMPI DUP1 PUSH4 0x94EF987E EQ PUSH2 0x129 JUMPI DUP1 PUSH4 0xA1186A22 EQ PUSH2 0x150 JUMPI DUP1 PUSH4 0xBAFFBEF2 EQ PUSH2 0x185 JUMPI DUP1 PUSH4 0xD9A4ABE8 EQ PUSH2 0x19A JUMPI DUP1 PUSH4 0xE7E1EF57 EQ PUSH2 0x1BB JUMPI DUP1 PUSH4 0xF7CA8431 EQ PUSH2 0x1D0 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBD PUSH2 0x1D8 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xCB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBD PUSH1 0x4 CALLDATALOAD PUSH2 0x22C JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xE3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x248 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x104 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x10D PUSH2 0x269 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x135 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x13E PUSH2 0x278 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x15C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x171 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x27E JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 ISZERO ISZERO DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x191 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x13E PUSH2 0x293 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1A6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x171 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x299 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1C7 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x13E PUSH2 0x2B7 JUMP JUMPDEST PUSH2 0xBD PUSH2 0x336 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x1EF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP2 AND SWAP1 ADDRESS BALANCE DUP1 ISZERO PUSH2 0x8FC MUL SWAP2 PUSH1 0x0 DUP2 DUP2 DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x229 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x243 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 SSTORE JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND SWAP1 SSTORE JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND SWAP1 JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 SLOAD PUSH1 0xFF AND ISZERO ISZERO PUSH1 0x1 EQ ISZERO PUSH2 0x310 JUMPI PUSH1 0x40 DUP1 MLOAD CALLER DUP2 MSTORE SWAP1 MLOAD PUSH32 0x5E11D6F4A906F860548606BEE83FDECDFE541044B913FF4D0D544B9CD43875B6 SWAP2 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 LOG1 POP PUSH1 0x3 SLOAD PUSH2 0x333 JUMP JUMPDEST POP PUSH32 0x756E617574686F72697A65640000000000000000000000000000000000000000 JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x0 SLOAD CALLVALUE LT ISZERO PUSH2 0x345 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x40 DUP1 MLOAD CALLVALUE DUP2 MSTORE CALLER PUSH1 0x20 DUP3 ADD MSTORE DUP2 MLOAD PUSH32 0xAC140D9E227CBC7BAF5587524F98FE6C57443181D6CE49DC2F583CCA0C49BDF8 SWAP3 SWAP2 DUP2 SWAP1 SUB SWAP1 SWAP2 ADD SWAP1 LOG1 CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 OR SWAP1 SSTORE JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 LT 0xd1 0x5f DUP2 0xc5 GASPRICE 0x48 0xd4 0x2d DUP7 0xed DUP8 DUP10 0xe7 ORIGIN 0xea 0xe0 DUP1 PUSH18 0x16199EF1F02C901A1B1FA8860029A16562 PUSH27 0x7A72305820D8FBFF41E54B99A079439C3C69710658346169F593D8 0x5c 0xc2 EXTCODESIZE 0xc2 OR PUSH31 0xAF424366002900000000000000000000000000000000000000000000000000 ","runtimeBytecode":"60806040526004361061006c5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416630b7eb161811461007157806338a2c331146100915780638dda93e3146100ce578063b9f68a3214610133578063c056b5de1461014b575b600080fd5b34801561007d57600080fd5b5061008f60043560243560443561016c565b005b34801561009d57600080fd5b506100b2600160a060020a0360043516610233565b60408051600160a060020a039092168252519081900360200190f35b3480156100da57600080fd5b506100e361024e565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561011f578181015183820152602001610107565b505050509050019250505060405180910390f35b34801561013f57600080fd5b506100b26004356102b0565b34801561015757600080fd5b506100b2600160a060020a03600435166102d8565b60008383833361017a6102f6565b9384526020840192909252604080840191909152600160a060020a0390911660608301525190819003608001906000f0801580156101bc573d6000803e3d6000fd5b5060008054600181810183557f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5639091018054600160a060020a0390941673ffffffffffffffffffffffffffffffffffffffff1994851681179091553383526020919091526040909120805490921617905550505050565b600160205260009081526040902054600160a060020a031681565b606060008054806020026020016040519081016040528092919081815260200182805480156102a657602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610288575b5050505050905090565b60008054829081106102be57fe5b600091825260209091200154600160a060020a0316905081565b600160a060020a039081166000908152600160205260409020541690565b60405161045280610307833901905600608060405234801561001057600080fd5b5060405160808061045283398101604090815281516020808401518385015160609095015160018054600160a060020a03928316600160a060020a0319909116178082556002959095556003929092556000958655929092168452600490529120805460ff191690911790556103c78061008b6000396000f3006080604052600436106100a35763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166347f07a8e81146100a85780637f83bf7d146100bf5780638823da6c146100d75780638da5cb5b146100f857806394ef987e14610129578063a1186a2214610150578063baffbef214610185578063d9a4abe81461019a578063e7e1ef57146101bb578063f7ca8431146101d0575b600080fd5b3480156100b457600080fd5b506100bd6101d8565b005b3480156100cb57600080fd5b506100bd60043561022c565b3480156100e357600080fd5b506100bd600160a060020a0360043516610248565b34801561010457600080fd5b5061010d610269565b60408051600160a060020a039092168252519081900360200190f35b34801561013557600080fd5b5061013e610278565b60408051918252519081900360200190f35b34801561015c57600080fd5b50610171600160a060020a036004351661027e565b604080519115158252519081900360200190f35b34801561019157600080fd5b5061013e610293565b3480156101a657600080fd5b50610171600160a060020a0360043516610299565b3480156101c757600080fd5b5061013e6102b7565b6100bd610336565b600154600160a060020a031633146101ef57600080fd5b600154604051600160a060020a0390911690303180156108fc02916000818181858888f19350505050158015610229573d6000803e3d6000fd5b50565b600154600160a060020a0316331461024357600080fd5b600055565b600160a060020a03166000908152600460205260409020805460ff19169055565b600154600160a060020a031681565b60005481565b60046020526000908152604090205460ff1681565b60025481565b600160a060020a031660009081526004602052604090205460ff1690565b3360009081526004602052604081205460ff16151560011415610310576040805133815290517f5e11d6f4a906f860548606bee83fdecdfe541044b913ff4d0d544b9cd43875b69181900360200190a150600354610333565b507f756e617574686f72697a656400000000000000000000000000000000000000005b90565b60005434101561034557600080fd5b6040805134815233602082015281517fac140d9e227cbc7baf5587524f98fe6c57443181d6ce49dc2f583cca0c49bdf8929181900390910190a1336000908152600460205260409020805460ff191660011790555600a165627a7a7230582010d15f81c53a48d42d86ed8789e732eae080710016199ef1f02c901a1b1fa8860029a165627a7a72305820d8fbff41e54b99a079439c3c69710658346169f593d85cc23bc2177eaf4243660029","srcmap":"28:677:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;28:677:0;;;;;;;","srcmapRuntime":"28:677:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;161:301;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;161:301:0;;;;;;;;;;;99:51;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;99:51:0;-1:-1:-1;;;;;99:51:0;;;;;;;;;-1:-1:-1;;;;;99:51:0;;;;;;;;;;;;;;472:107;;8:9:-1;5:2;;;30:1;27;20:12;5:2;472:107:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;472:107:0;;;;;;;;;;;;;;;;;58:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;58:35:0;;;;;585:118;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;585:118:0;-1:-1:-1;;;;;585:118:0;;;;;161:301;269:18;301:13;316:14;332;348:10;290:69;;:::i;:::-;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;290:69:0;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;369:18:0;27:10:-1;;39:1;23:18;;;45:23;;369:35:0;;;;;;-1:-1:-1;;;;;369:35:0;;;-1:-1:-1;;369:35:0;;;;;;;;431:10;414:28;;369:35;414:28;;;;;;;;:41;;;;;;;;-1:-1:-1;;;;161:301:0:o;99:51::-;;;;;;;;;;;;-1:-1:-1;;;;;99:51:0;;:::o;472:107::-;526:9;554:18;547:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;547:25:0;;;;;;;;;;;;;;;;;;;;;;;472:107;:::o;58:35::-;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;58:35:0;;-1:-1:-1;58:35:0;:::o;585:118::-;-1:-1:-1;;;;;673:23:0;;;647:7;673:23;;;:16;:23;;;;;;;;585:118::o;28:677::-;;;;;;;;;;:::o"}

/***/ }),

/***/ "./ethereum/factory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _web = _interopRequireDefault(__webpack_require__("./ethereum/web3.js"));

var _MyDataFactory = _interopRequireDefault(__webpack_require__("./ethereum/build/MyDataFactory.json"));

__webpack_require__("./config/config.js");

console.log('Getting address from: ', process.env.LOCATION);
var instance = new _web.default.eth.Contract(JSON.parse(_MyDataFactory.default.interface), '0x40292e639cB2685E5AbBe4a26AE913A0393aD877');
var _default = instance;
exports.default = _default;

/***/ }),

/***/ "./ethereum/myData.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _web = _interopRequireDefault(__webpack_require__("./ethereum/web3.js"));

var _MyData = _interopRequireDefault(__webpack_require__("./ethereum/build/MyData.json"));

var _default = function _default(address) {
  return new _web.default.eth.Contract(JSON.parse(_MyData.default.interface), address);
};

exports.default = _default;

/***/ }),

/***/ "./ethereum/web3.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _web = _interopRequireDefault(__webpack_require__("web3"));

__webpack_require__("./config/config.js");

var web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // we are in the browser and metamask is running.
  web3 = new _web.default(window.web3.currentProvider);
} else {
  // we are on the server *OR* the user is not running metamask
  var provider = new _web.default.providers.HttpProvider(process.env.PROVIDER_URI);
  web3 = new _web.default(provider);
}

var _default = web3;
exports.default = _default;

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = __webpack_require__("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _semanticUiReact = __webpack_require__("semantic-ui-react");

var superagent = _interopRequireWildcard(__webpack_require__("superagent"));

var _factory = _interopRequireDefault(__webpack_require__("./ethereum/factory.js"));

var _myData = _interopRequireDefault(__webpack_require__("./ethereum/myData.js"));

var _web = _interopRequireDefault(__webpack_require__("./ethereum/web3.js"));

var _Layout = _interopRequireDefault(__webpack_require__("./components/Layout.js"));

var _routes = __webpack_require__("./routes.js");

var _jsxFileName = "/Users/Bill/Documents/ethereum-projects/mydata/pages/index.js";

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
          var str, tempMatched, foundAddresses, curLocation, i, res, j, res1, _j, res2, _j2, _i;

          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  str = _this.state.value.split(/[ ,]+/); // let str=this.state.value.split(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g);

                  console.log("str: ", str);
                  tempMatched = [];
                  foundAddresses = new Set();
                  curLocation = window.location;
                  i = 0;

                case 6:
                  if (!(i < str.length)) {
                    _context.next = 22;
                    break;
                  }

                  _context.next = 9;
                  return superagent.get("".concat(curLocation.protocol, "//").concat(curLocation.host, "/api/findAddressByInterest/").concat(str[i])).then(function (res) {
                    return res.body;
                  });

                case 9:
                  res = _context.sent;

                  for (j = 0; j < res.length; j++) {
                    foundAddresses.add(res[j].contractAddress);
                  }

                  _context.next = 13;
                  return superagent.get("".concat(curLocation.protocol, "//").concat(curLocation.host, "/api/findAddressByBrands/").concat(str[i])).then(function (res) {
                    return res.body;
                  });

                case 13:
                  res1 = _context.sent;

                  for (_j = 0; _j < res1.length; _j++) {
                    foundAddresses.add(res1[_j].contractAddress);
                  }

                  _context.next = 17;
                  return superagent.get("".concat(curLocation.protocol, "//").concat(curLocation.host, "/api/findAddressByMedicalCondition/").concat(str[i])).then(function (res) {
                    return res.body;
                  });

                case 17:
                  res2 = _context.sent;

                  for (_j2 = 0; _j2 < res2.length; _j2++) {
                    foundAddresses.add(res2[_j2].contractAddress);
                  }

                case 19:
                  i++;
                  _context.next = 6;
                  break;

                case 22:
                  console.log("foundAddresses: ", foundAddresses);

                  for (_i = 0; _i < _this.state.registeredAccounts.length; _i++) {
                    foundAddresses.has(_this.state.registeredAccounts[_i]) && (tempMatched[_i] = true);
                  }

                  _this.setState({
                    matched: tempMatched
                  });

                case 25:
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
          var myData, accounts, owner, minPrice, privateDataKey;
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
                    _context2.next = 25;
                    break;
                  }

                  console.log('not owner', minPrice);

                  _this.setState({
                    loading: true,
                    errorMessage: ''
                  });

                  _context2.next = 12;
                  return myData.methods.minimumPayment().call();

                case 12:
                  minPrice = _context2.sent;
                  _context2.prev = 13;
                  _context2.next = 16;
                  return myData.methods.getAccess().send({
                    from: accounts[0],
                    value: minPrice
                  });

                case 16:
                  _context2.next = 23;
                  break;

                case 18:
                  _context2.prev = 18;
                  _context2.t0 = _context2["catch"](13);

                  _this.setState({
                    loading: false,
                    value: ''
                  });

                  _this.setState({
                    errorMessage: _context2.t0.message
                  });

                  return _context2.abrupt("return");

                case 23:
                  _context2.next = 26;
                  break;

                case 25:
                  console.log('owner');

                case 26:
                  _context2.t1 = _web.default.utils;
                  _context2.next = 29;
                  return myData.methods.getPrivateData().call({
                    from: accounts[0]
                  });

                case 29:
                  _context2.t2 = _context2.sent;
                  privateDataKey = _context2.t1.hexToAscii.call(_context2.t1, _context2.t2);

                  _routes.Router.pushRoute("/mydata/".concat(address, "/privatedata/").concat(privateDataKey));

                case 32:
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
    // onGetPrivateData = async (address) => {
    //   const myData = MyData(address);
    //   const accounts = await web3.eth.getAccounts();
    //   const accessor = await myData.methods.isApprovedAccessor(accounts[0]).call();
    //   if (accessor){
    //     const privateDataKey = web3.utils.hexToAscii(await myData.methods.getPrivateData().call({
    //       from: accounts[0]
    //     }));
    //     Router.pushRoute(`/mydata/${address}/privatedata/${privateDataKey}`);
    //   } else {
    //     Router.pushRoute(`/mydata/${address}/unauthorized/privatedata`)
    //   }
    // }
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
            lineNumber: 118
          }
        }, _react.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, _react.default.createElement(_routes.Link, {
          route: "/mydata/".concat(address, "/interests"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, _react.default.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, address))), _react.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }, _this2.state.registeredAccountsCost[i]), _react.default.createElement(Cell, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, _react.default.createElement(_semanticUiReact.Button, {
          color: "green",
          basic: true,
          loading: _this2.state.loading,
          onClick: _this2.onGetAccess.bind(_this2, address),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }, "View")));
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
          lineNumber: 143
        }
      }, _react.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
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
          lineNumber: 145
        }
      }), _react.default.createElement(_semanticUiReact.Button, {
        primary: true,
        onClick: this.onMatch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, "Match Interests"), _react.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, "Address"), _react.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, "Min Price for Data (Ether)"), _react.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, "Private Data"))), _react.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, this.renderRow())));
    }
  }]);
  return MyDataIndex;
}(_react.Component);

var _default = MyDataIndex;
exports.default = _default;

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__("next-routes")();

routes.add('privatedata', '/mydata/:address/privatedata/:key', 'mydata/privatedata').add('interests', '/mydata/:address/interests', 'mydata/interests');
module.exports = routes;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/helpers/assertThisInitialized":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireDefault":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireWildcard":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "superagent":
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),

/***/ "web3":
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map