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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./config/config.json":
/***/ (function(module, exports) {

module.exports = {"test":{"PORT":3000,"MONGODB_URI":"mongodb://localhost:27017/myData"},"dev":{"PORT":3000,"MONGODB_URI":"mongodb://localhost:27017/myData"},"ganache":{"MNEMONIC":"forest enough hope only coil athlete dragon cradle rookie town quiz paddle","PROVIDER_URI":"http://localhost:8545"},"rinkby":{"MNEMONIC":"forest enough hope only coil athlete dragon cradle rookie town quiz paddle","PROVIDER_URI":"https://rinkeby.infura.io/sLrsggW1D3WZZKPImuJB"}}

/***/ }),

/***/ "./ethereum/build/MyData.json":
/***/ (function(module, exports) {

module.exports = {"assembly":{".code":[{"begin":708,"end":2042,"name":"PUSH","value":"80"},{"begin":708,"end":2042,"name":"PUSH","value":"40"},{"begin":708,"end":2042,"name":"MSTORE"},{"begin":1004,"end":1307,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"1"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"1"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":1004,"end":1307,"name":"POP"},{"begin":1004,"end":1307,"name":"PUSH","value":"40"},{"begin":1004,"end":1307,"name":"MLOAD"},{"begin":1004,"end":1307,"name":"PUSH","value":"80"},{"begin":1004,"end":1307,"name":"DUP1"},{"begin":1004,"end":1307,"name":"PUSHSIZE"},{"begin":1004,"end":1307,"name":"DUP4"},{"begin":1004,"end":1307,"name":"CODECOPY"},{"begin":1004,"end":1307,"name":"DUP2"},{"begin":1004,"end":1307,"name":"ADD"},{"begin":1004,"end":1307,"name":"PUSH","value":"40"},{"begin":1004,"end":1307,"name":"SWAP1"},{"begin":1004,"end":1307,"name":"DUP2"},{"begin":1004,"end":1307,"name":"MSTORE"},{"begin":1004,"end":1307,"name":"DUP2"},{"begin":1004,"end":1307,"name":"MLOAD"},{"begin":1004,"end":1307,"name":"PUSH","value":"20"},{"begin":1004,"end":1307,"name":"DUP1"},{"begin":1004,"end":1307,"name":"DUP5"},{"begin":1004,"end":1307,"name":"ADD"},{"begin":1004,"end":1307,"name":"MLOAD"},{"begin":1004,"end":1307,"name":"DUP4"},{"begin":1004,"end":1307,"name":"DUP6"},{"begin":1004,"end":1307,"name":"ADD"},{"begin":1004,"end":1307,"name":"MLOAD"},{"begin":1004,"end":1307,"name":"PUSH","value":"60"},{"begin":1004,"end":1307,"name":"SWAP1"},{"begin":1004,"end":1307,"name":"SWAP6"},{"begin":1004,"end":1307,"name":"ADD"},{"begin":1004,"end":1307,"name":"MLOAD"},{"begin":1121,"end":1126,"name":"PUSH","value":"1"},{"begin":1121,"end":1135,"name":"DUP1"},{"begin":1121,"end":1135,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":1121,"end":1135,"name":"SWAP3"},{"begin":1121,"end":1135,"name":"DUP4"},{"begin":1121,"end":1135,"name":"AND"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1121,"end":1135,"name":"SWAP1"},{"begin":1121,"end":1135,"name":"SWAP2"},{"begin":1121,"end":1135,"name":"AND"},{"begin":1121,"end":1135,"name":"OR"},{"begin":1121,"end":1135,"name":"DUP1"},{"begin":1121,"end":1135,"name":"DUP3"},{"begin":1121,"end":1135,"name":"SSTORE"},{"begin":1145,"end":1158,"name":"PUSH","value":"2"},{"begin":1145,"end":1175,"name":"SWAP6"},{"begin":1145,"end":1175,"name":"SWAP1"},{"begin":1145,"end":1175,"name":"SWAP6"},{"begin":1145,"end":1175,"name":"SSTORE"},{"begin":1185,"end":1199,"name":"PUSH","value":"3"},{"begin":1185,"end":1217,"name":"SWAP3"},{"begin":1185,"end":1217,"name":"SWAP1"},{"begin":1185,"end":1217,"name":"SWAP3"},{"begin":1185,"end":1217,"name":"SSTORE"},{"begin":1121,"end":1126,"name":"PUSH","value":"0"},{"begin":1227,"end":1259,"name":"SWAP6"},{"begin":1227,"end":1259,"name":"DUP7"},{"begin":1227,"end":1259,"name":"SSTORE"},{"begin":1287,"end":1292,"name":"SWAP3"},{"begin":1287,"end":1292,"name":"SWAP1"},{"begin":1287,"end":1292,"name":"SWAP3"},{"begin":1287,"end":1292,"name":"AND"},{"begin":1269,"end":1293,"name":"DUP5"},{"begin":1269,"end":1293,"name":"MSTORE"},{"begin":1269,"end":1286,"name":"PUSH","value":"4"},{"begin":1269,"end":1293,"name":"SWAP1"},{"begin":1269,"end":1293,"name":"MSTORE"},{"begin":1269,"end":1293,"name":"SWAP2"},{"begin":1269,"end":1293,"name":"KECCAK256"},{"begin":1269,"end":1300,"name":"DUP1"},{"begin":1269,"end":1300,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1269,"end":1300,"name":"AND"},{"begin":1269,"end":1300,"name":"SWAP1"},{"begin":1269,"end":1300,"name":"SWAP2"},{"begin":1269,"end":1300,"name":"OR"},{"begin":1269,"end":1300,"name":"SWAP1"},{"begin":1269,"end":1300,"name":"SSTORE"},{"begin":708,"end":2042,"name":"PUSH #[$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":708,"end":2042,"name":"DUP1"},{"begin":708,"end":2042,"name":"PUSH [$]","value":"0000000000000000000000000000000000000000000000000000000000000000"},{"begin":708,"end":2042,"name":"PUSH","value":"0"},{"begin":708,"end":2042,"name":"CODECOPY"},{"begin":708,"end":2042,"name":"PUSH","value":"0"},{"begin":708,"end":2042,"name":"RETURN"}],".data":{"0":{".auxdata":"a165627a7a72305820f1965b3411275c1958b546f864670296ff7c75027c153c8ed06d55983a13d2b10029",".code":[{"begin":708,"end":2042,"name":"PUSH","value":"80"},{"begin":708,"end":2042,"name":"PUSH","value":"40"},{"begin":708,"end":2042,"name":"MSTORE"},{"begin":708,"end":2042,"name":"PUSH","value":"4"},{"begin":708,"end":2042,"name":"CALLDATASIZE"},{"begin":708,"end":2042,"name":"LT"},{"begin":708,"end":2042,"name":"PUSH [tag]","value":"1"},{"begin":708,"end":2042,"name":"JUMPI"},{"begin":708,"end":2042,"name":"PUSH","value":"FFFFFFFF"},{"begin":708,"end":2042,"name":"PUSH","value":"100000000000000000000000000000000000000000000000000000000"},{"begin":708,"end":2042,"name":"PUSH","value":"0"},{"begin":708,"end":2042,"name":"CALLDATALOAD"},{"begin":708,"end":2042,"name":"DIV"},{"begin":708,"end":2042,"name":"AND"},{"begin":708,"end":2042,"name":"PUSH","value":"7F83BF7D"},{"begin":708,"end":2042,"name":"DUP2"},{"begin":708,"end":2042,"name":"EQ"},{"begin":708,"end":2042,"name":"PUSH [tag]","value":"2"},{"begin":708,"end":2042,"name":"JUMPI"},{"begin":708,"end":2042,"name":"DUP1"},{"begin":708,"end":2042,"name":"PUSH","value":"8DA5CB5B"},{"begin":708,"end":2042,"name":"EQ"},{"begin":708,"end":2042,"name":"PUSH [tag]","value":"3"},{"begin":708,"end":2042,"name":"JUMPI"},{"begin":708,"end":2042,"name":"DUP1"},{"begin":708,"end":2042,"name":"PUSH","value":"94EF987E"},{"begin":708,"end":2042,"name":"EQ"},{"begin":708,"end":2042,"name":"PUSH [tag]","value":"4"},{"begin":708,"end":2042,"name":"JUMPI"},{"begin":708,"end":2042,"name":"DUP1"},{"begin":708,"end":2042,"name":"PUSH","value":"A1186A22"},{"begin":708,"end":2042,"name":"EQ"},{"begin":708,"end":2042,"name":"PUSH [tag]","value":"5"},{"begin":708,"end":2042,"name":"JUMPI"},{"begin":708,"end":2042,"name":"DUP1"},{"begin":708,"end":2042,"name":"PUSH","value":"BAFFBEF2"},{"begin":708,"end":2042,"name":"EQ"},{"begin":708,"end":2042,"name":"PUSH [tag]","value":"6"},{"begin":708,"end":2042,"name":"JUMPI"},{"begin":708,"end":2042,"name":"DUP1"},{"begin":708,"end":2042,"name":"PUSH","value":"D9A4ABE8"},{"begin":708,"end":2042,"name":"EQ"},{"begin":708,"end":2042,"name":"PUSH [tag]","value":"7"},{"begin":708,"end":2042,"name":"JUMPI"},{"begin":708,"end":2042,"name":"DUP1"},{"begin":708,"end":2042,"name":"PUSH","value":"E7E1EF57"},{"begin":708,"end":2042,"name":"EQ"},{"begin":708,"end":2042,"name":"PUSH [tag]","value":"8"},{"begin":708,"end":2042,"name":"JUMPI"},{"begin":708,"end":2042,"name":"DUP1"},{"begin":708,"end":2042,"name":"PUSH","value":"F7CA8431"},{"begin":708,"end":2042,"name":"EQ"},{"begin":708,"end":2042,"name":"PUSH [tag]","value":"9"},{"begin":708,"end":2042,"name":"JUMPI"},{"begin":708,"end":2042,"name":"tag","value":"1"},{"begin":708,"end":2042,"name":"JUMPDEST"},{"begin":708,"end":2042,"name":"PUSH","value":"0"},{"begin":708,"end":2042,"name":"DUP1"},{"begin":708,"end":2042,"name":"REVERT"},{"begin":1313,"end":1433,"name":"tag","value":"2"},{"begin":1313,"end":1433,"name":"JUMPDEST"},{"begin":1313,"end":1433,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"10"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"10"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":1313,"end":1433,"name":"PUSH [tag]","value":"11"},{"begin":1313,"end":1433,"name":"PUSH","value":"4"},{"begin":1313,"end":1433,"name":"CALLDATALOAD"},{"begin":1313,"end":1433,"name":"PUSH [tag]","value":"12"},{"begin":1313,"end":1433,"name":"JUMP"},{"begin":1313,"end":1433,"name":"tag","value":"11"},{"begin":1313,"end":1433,"name":"JUMPDEST"},{"begin":1313,"end":1433,"name":"STOP"},{"begin":763,"end":783,"name":"tag","value":"3"},{"begin":763,"end":783,"name":"JUMPDEST"},{"begin":763,"end":783,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"13"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"13"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":763,"end":783,"name":"POP"},{"begin":763,"end":783,"name":"PUSH [tag]","value":"14"},{"begin":763,"end":783,"name":"PUSH [tag]","value":"15"},{"begin":763,"end":783,"name":"JUMP"},{"begin":763,"end":783,"name":"tag","value":"14"},{"begin":763,"end":783,"name":"JUMPDEST"},{"begin":763,"end":783,"name":"PUSH","value":"40"},{"begin":763,"end":783,"name":"DUP1"},{"begin":763,"end":783,"name":"MLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"1"},{"begin":-1,"end":-1,"name":"PUSH","value":"A0"},{"begin":-1,"end":-1,"name":"PUSH","value":"2"},{"begin":-1,"end":-1,"name":"EXP"},{"begin":-1,"end":-1,"name":"SUB"},{"begin":763,"end":783,"name":"SWAP1"},{"begin":763,"end":783,"name":"SWAP3"},{"begin":763,"end":783,"name":"AND"},{"begin":763,"end":783,"name":"DUP3"},{"begin":763,"end":783,"name":"MSTORE"},{"begin":763,"end":783,"name":"MLOAD"},{"begin":763,"end":783,"name":"SWAP1"},{"begin":763,"end":783,"name":"DUP2"},{"begin":763,"end":783,"name":"SWAP1"},{"begin":763,"end":783,"name":"SUB"},{"begin":763,"end":783,"name":"PUSH","value":"20"},{"begin":763,"end":783,"name":"ADD"},{"begin":763,"end":783,"name":"SWAP1"},{"begin":763,"end":783,"name":"RETURN"},{"begin":731,"end":757,"name":"tag","value":"4"},{"begin":731,"end":757,"name":"JUMPDEST"},{"begin":731,"end":757,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"16"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"16"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":731,"end":757,"name":"POP"},{"begin":731,"end":757,"name":"PUSH [tag]","value":"17"},{"begin":731,"end":757,"name":"PUSH [tag]","value":"18"},{"begin":731,"end":757,"name":"JUMP"},{"begin":731,"end":757,"name":"tag","value":"17"},{"begin":731,"end":757,"name":"JUMPDEST"},{"begin":731,"end":757,"name":"PUSH","value":"40"},{"begin":731,"end":757,"name":"DUP1"},{"begin":731,"end":757,"name":"MLOAD"},{"begin":731,"end":757,"name":"SWAP2"},{"begin":731,"end":757,"name":"DUP3"},{"begin":731,"end":757,"name":"MSTORE"},{"begin":731,"end":757,"name":"MLOAD"},{"begin":731,"end":757,"name":"SWAP1"},{"begin":731,"end":757,"name":"DUP2"},{"begin":731,"end":757,"name":"SWAP1"},{"begin":731,"end":757,"name":"SUB"},{"begin":731,"end":757,"name":"PUSH","value":"20"},{"begin":731,"end":757,"name":"ADD"},{"begin":731,"end":757,"name":"SWAP1"},{"begin":731,"end":757,"name":"RETURN"},{"begin":859,"end":908,"name":"tag","value":"5"},{"begin":859,"end":908,"name":"JUMPDEST"},{"begin":859,"end":908,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"19"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"19"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":859,"end":908,"name":"PUSH [tag]","value":"20"},{"begin":859,"end":908,"name":"PUSH","value":"4"},{"begin":859,"end":908,"name":"CALLDATALOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":859,"end":908,"name":"AND"},{"begin":859,"end":908,"name":"PUSH [tag]","value":"21"},{"begin":859,"end":908,"name":"JUMP"},{"begin":859,"end":908,"name":"tag","value":"20"},{"begin":859,"end":908,"name":"JUMPDEST"},{"begin":859,"end":908,"name":"PUSH","value":"40"},{"begin":859,"end":908,"name":"DUP1"},{"begin":859,"end":908,"name":"MLOAD"},{"begin":859,"end":908,"name":"SWAP2"},{"begin":859,"end":908,"name":"ISZERO"},{"begin":859,"end":908,"name":"ISZERO"},{"begin":859,"end":908,"name":"DUP3"},{"begin":859,"end":908,"name":"MSTORE"},{"begin":859,"end":908,"name":"MLOAD"},{"begin":859,"end":908,"name":"SWAP1"},{"begin":859,"end":908,"name":"DUP2"},{"begin":859,"end":908,"name":"SWAP1"},{"begin":859,"end":908,"name":"SUB"},{"begin":859,"end":908,"name":"PUSH","value":"20"},{"begin":859,"end":908,"name":"ADD"},{"begin":859,"end":908,"name":"SWAP1"},{"begin":859,"end":908,"name":"RETURN"},{"begin":789,"end":817,"name":"tag","value":"6"},{"begin":789,"end":817,"name":"JUMPDEST"},{"begin":789,"end":817,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"22"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"22"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":789,"end":817,"name":"POP"},{"begin":789,"end":817,"name":"PUSH [tag]","value":"17"},{"begin":789,"end":817,"name":"PUSH [tag]","value":"24"},{"begin":789,"end":817,"name":"JUMP"},{"begin":1588,"end":1714,"name":"tag","value":"7"},{"begin":1588,"end":1714,"name":"JUMPDEST"},{"begin":1588,"end":1714,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"25"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"25"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":1588,"end":1714,"name":"PUSH [tag]","value":"20"},{"begin":1588,"end":1714,"name":"PUSH","value":"4"},{"begin":1588,"end":1714,"name":"CALLDATALOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":1588,"end":1714,"name":"AND"},{"begin":1588,"end":1714,"name":"PUSH [tag]","value":"27"},{"begin":1588,"end":1714,"name":"JUMP"},{"begin":1720,"end":2040,"name":"tag","value":"8"},{"begin":1720,"end":2040,"name":"JUMPDEST"},{"begin":1720,"end":2040,"name":"CALLVALUE"},{"begin":8,"end":17,"name":"DUP1"},{"begin":5,"end":7,"name":"ISZERO"},{"begin":5,"end":7,"name":"PUSH [tag]","value":"28"},{"begin":5,"end":7,"name":"JUMPI"},{"begin":30,"end":31,"name":"PUSH","value":"0"},{"begin":27,"end":28,"name":"DUP1"},{"begin":20,"end":32,"name":"REVERT"},{"begin":5,"end":7,"name":"tag","value":"28"},{"begin":5,"end":7,"name":"JUMPDEST"},{"begin":1720,"end":2040,"name":"POP"},{"begin":1720,"end":2040,"name":"PUSH [tag]","value":"17"},{"begin":1720,"end":2040,"name":"PUSH [tag]","value":"30"},{"begin":1720,"end":2040,"name":"JUMP"},{"begin":1443,"end":1578,"name":"tag","value":"9"},{"begin":1443,"end":1578,"name":"JUMPDEST"},{"begin":1443,"end":1578,"name":"PUSH [tag]","value":"11"},{"begin":1443,"end":1578,"name":"PUSH [tag]","value":"32"},{"begin":1443,"end":1578,"name":"JUMP"},{"begin":1313,"end":1433,"name":"tag","value":"12"},{"begin":1313,"end":1433,"name":"JUMPDEST"},{"begin":969,"end":974,"name":"PUSH","value":"1"},{"begin":969,"end":974,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":969,"end":974,"name":"AND"},{"begin":955,"end":965,"name":"CALLER"},{"begin":955,"end":974,"name":"EQ"},{"begin":947,"end":975,"name":"PUSH [tag]","value":"34"},{"begin":947,"end":975,"name":"JUMPI"},{"begin":947,"end":975,"name":"PUSH","value":"0"},{"begin":947,"end":975,"name":"DUP1"},{"begin":947,"end":975,"name":"REVERT"},{"begin":947,"end":975,"name":"tag","value":"34"},{"begin":947,"end":975,"name":"JUMPDEST"},{"begin":1390,"end":1404,"name":"PUSH","value":"0"},{"begin":1390,"end":1422,"name":"SSTORE"},{"begin":1313,"end":1433,"name":"JUMP","value":"[out]"},{"begin":763,"end":783,"name":"tag","value":"15"},{"begin":763,"end":783,"name":"JUMPDEST"},{"begin":763,"end":783,"name":"PUSH","value":"1"},{"begin":763,"end":783,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":763,"end":783,"name":"AND"},{"begin":763,"end":783,"name":"DUP2"},{"begin":763,"end":783,"name":"JUMP","value":"[out]"},{"begin":731,"end":757,"name":"tag","value":"18"},{"begin":731,"end":757,"name":"JUMPDEST"},{"begin":731,"end":757,"name":"PUSH","value":"0"},{"begin":731,"end":757,"name":"SLOAD"},{"begin":731,"end":757,"name":"DUP2"},{"begin":731,"end":757,"name":"JUMP","value":"[out]"},{"begin":859,"end":908,"name":"tag","value":"21"},{"begin":859,"end":908,"name":"JUMPDEST"},{"begin":859,"end":908,"name":"PUSH","value":"4"},{"begin":859,"end":908,"name":"PUSH","value":"20"},{"begin":859,"end":908,"name":"MSTORE"},{"begin":859,"end":908,"name":"PUSH","value":"0"},{"begin":859,"end":908,"name":"SWAP1"},{"begin":859,"end":908,"name":"DUP2"},{"begin":859,"end":908,"name":"MSTORE"},{"begin":859,"end":908,"name":"PUSH","value":"40"},{"begin":859,"end":908,"name":"SWAP1"},{"begin":859,"end":908,"name":"KECCAK256"},{"begin":859,"end":908,"name":"SLOAD"},{"begin":859,"end":908,"name":"PUSH","value":"FF"},{"begin":859,"end":908,"name":"AND"},{"begin":859,"end":908,"name":"DUP2"},{"begin":859,"end":908,"name":"JUMP","value":"[out]"},{"begin":789,"end":817,"name":"tag","value":"24"},{"begin":789,"end":817,"name":"JUMPDEST"},{"begin":789,"end":817,"name":"PUSH","value":"2"},{"begin":789,"end":817,"name":"SLOAD"},{"begin":789,"end":817,"name":"DUP2"},{"begin":789,"end":817,"name":"JUMP","value":"[out]"},{"begin":1588,"end":1714,"name":"tag","value":"27"},{"begin":1588,"end":1714,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":1679,"end":1706,"name":"AND"},{"begin":1655,"end":1659,"name":"PUSH","value":"0"},{"begin":1679,"end":1706,"name":"SWAP1"},{"begin":1679,"end":1706,"name":"DUP2"},{"begin":1679,"end":1706,"name":"MSTORE"},{"begin":1679,"end":1696,"name":"PUSH","value":"4"},{"begin":1679,"end":1706,"name":"PUSH","value":"20"},{"begin":1679,"end":1706,"name":"MSTORE"},{"begin":1679,"end":1706,"name":"PUSH","value":"40"},{"begin":1679,"end":1706,"name":"SWAP1"},{"begin":1679,"end":1706,"name":"KECCAK256"},{"begin":1679,"end":1706,"name":"SLOAD"},{"begin":1679,"end":1706,"name":"PUSH","value":"FF"},{"begin":1679,"end":1706,"name":"AND"},{"begin":1679,"end":1706,"name":"SWAP1"},{"begin":1588,"end":1714,"name":"JUMP","value":"[out]"},{"begin":1720,"end":2040,"name":"tag","value":"30"},{"begin":1720,"end":2040,"name":"JUMPDEST"},{"begin":1803,"end":1813,"name":"CALLER"},{"begin":1762,"end":1769,"name":"PUSH","value":"0"},{"begin":1785,"end":1814,"name":"SWAP1"},{"begin":1785,"end":1814,"name":"DUP2"},{"begin":1785,"end":1814,"name":"MSTORE"},{"begin":1785,"end":1802,"name":"PUSH","value":"4"},{"begin":1785,"end":1814,"name":"PUSH","value":"20"},{"begin":1785,"end":1814,"name":"MSTORE"},{"begin":1785,"end":1814,"name":"PUSH","value":"40"},{"begin":1785,"end":1814,"name":"DUP2"},{"begin":1785,"end":1814,"name":"KECCAK256"},{"begin":1785,"end":1814,"name":"SLOAD"},{"begin":1785,"end":1814,"name":"PUSH","value":"FF"},{"begin":1785,"end":1814,"name":"AND"},{"begin":1785,"end":1822,"name":"ISZERO"},{"begin":1785,"end":1822,"name":"ISZERO"},{"begin":1785,"end":1814,"name":"PUSH","value":"1"},{"begin":1785,"end":1822,"name":"EQ"},{"begin":1781,"end":2034,"name":"ISZERO"},{"begin":1781,"end":2034,"name":"PUSH [tag]","value":"38"},{"begin":1781,"end":2034,"name":"JUMPI"},{"begin":1856,"end":1861,"name":"PUSH","value":"1"},{"begin":1856,"end":1861,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"},{"begin":1856,"end":1861,"name":"AND"},{"begin":1842,"end":1852,"name":"CALLER"},{"begin":1842,"end":1861,"name":"EQ"},{"begin":1838,"end":1933,"name":"PUSH [tag]","value":"39"},{"begin":1838,"end":1933,"name":"JUMPI"},{"begin":1899,"end":1909,"name":"CALLER"},{"begin":1913,"end":1918,"name":"PUSH","value":"0"},{"begin":1881,"end":1910,"name":"SWAP1"},{"begin":1881,"end":1910,"name":"DUP2"},{"begin":1881,"end":1910,"name":"MSTORE"},{"begin":1881,"end":1898,"name":"PUSH","value":"4"},{"begin":1881,"end":1910,"name":"PUSH","value":"20"},{"begin":1881,"end":1910,"name":"MSTORE"},{"begin":1881,"end":1910,"name":"PUSH","value":"40"},{"begin":1881,"end":1910,"name":"SWAP1"},{"begin":1881,"end":1910,"name":"KECCAK256"},{"begin":1881,"end":1918,"name":"DUP1"},{"begin":1881,"end":1918,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1881,"end":1918,"name":"AND"},{"begin":1881,"end":1918,"name":"SWAP1"},{"begin":1881,"end":1918,"name":"SSTORE"},{"begin":1838,"end":1933,"name":"tag","value":"39"},{"begin":1838,"end":1933,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":1954,"end":1968,"name":"PUSH","value":"3"},{"begin":1954,"end":1968,"name":"SLOAD"},{"begin":1946,"end":1969,"name":"PUSH [tag]","value":"40"},{"begin":1946,"end":1969,"name":"JUMP"},{"begin":1781,"end":2034,"name":"tag","value":"38"},{"begin":1781,"end":2034,"name":"JUMPDEST"},{"begin":-1,"end":-1,"name":"POP"},{"begin":2000,"end":2023,"name":"PUSH","value":"756E617574686F72697A65640000000000000000000000000000000000000000"},{"begin":1781,"end":2034,"name":"tag","value":"40"},{"begin":1781,"end":2034,"name":"JUMPDEST"},{"begin":1720,"end":2040,"name":"SWAP1"},{"begin":1720,"end":2040,"name":"JUMP","value":"[out]"},{"begin":1443,"end":1578,"name":"tag","value":"32"},{"begin":1443,"end":1578,"name":"JUMPDEST"},{"begin":1510,"end":1524,"name":"PUSH","value":"0"},{"begin":1510,"end":1524,"name":"SLOAD"},{"begin":1497,"end":1506,"name":"CALLVALUE"},{"begin":1497,"end":1524,"name":"LT"},{"begin":1497,"end":1524,"name":"ISZERO"},{"begin":1489,"end":1525,"name":"PUSH [tag]","value":"42"},{"begin":1489,"end":1525,"name":"JUMPI"},{"begin":1489,"end":1525,"name":"PUSH","value":"0"},{"begin":1489,"end":1525,"name":"DUP1"},{"begin":1489,"end":1525,"name":"REVERT"},{"begin":1489,"end":1525,"name":"tag","value":"42"},{"begin":1489,"end":1525,"name":"JUMPDEST"},{"begin":1553,"end":1563,"name":"CALLER"},{"begin":1535,"end":1564,"name":"PUSH","value":"0"},{"begin":1535,"end":1564,"name":"SWAP1"},{"begin":1535,"end":1564,"name":"DUP2"},{"begin":1535,"end":1564,"name":"MSTORE"},{"begin":1535,"end":1552,"name":"PUSH","value":"4"},{"begin":1535,"end":1564,"name":"PUSH","value":"20"},{"begin":1535,"end":1564,"name":"MSTORE"},{"begin":1535,"end":1564,"name":"PUSH","value":"40"},{"begin":1535,"end":1564,"name":"SWAP1"},{"begin":1535,"end":1564,"name":"KECCAK256"},{"begin":1535,"end":1571,"name":"DUP1"},{"begin":1535,"end":1571,"name":"SLOAD"},{"begin":-1,"end":-1,"name":"PUSH","value":"FF"},{"begin":-1,"end":-1,"name":"NOT"},{"begin":1535,"end":1571,"name":"AND"},{"begin":1567,"end":1571,"name":"PUSH","value":"1"},{"begin":1535,"end":1571,"name":"OR"},{"begin":1535,"end":1571,"name":"SWAP1"},{"begin":1535,"end":1571,"name":"SSTORE"},{"begin":1443,"end":1578,"name":"JUMP","value":"[out]"}]}}},"bytecode":"608060405234801561001057600080fd5b5060405160808061034e83398101604090815281516020808401518385015160609095015160018054600160a060020a03928316600160a060020a0319909116178082556002959095556003929092556000958655929092168452600490529120805460ff191690911790556102c38061008b6000396000f30060806040526004361061008d5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416637f83bf7d81146100925780638da5cb5b146100ac57806394ef987e146100dd578063a1186a2214610104578063baffbef214610139578063d9a4abe81461014e578063e7e1ef571461016f578063f7ca843114610184575b600080fd5b34801561009e57600080fd5b506100aa60043561018c565b005b3480156100b857600080fd5b506100c16101a8565b60408051600160a060020a039092168252519081900360200190f35b3480156100e957600080fd5b506100f26101b7565b60408051918252519081900360200190f35b34801561011057600080fd5b50610125600160a060020a03600435166101bd565b604080519115158252519081900360200190f35b34801561014557600080fd5b506100f26101d2565b34801561015a57600080fd5b50610125600160a060020a03600435166101d8565b34801561017b57600080fd5b506100f26101f6565b6100aa61026c565b600154600160a060020a031633146101a357600080fd5b600055565b600154600160a060020a031681565b60005481565b60046020526000908152604090205460ff1681565b60025481565b600160a060020a031660009081526004602052604090205460ff1690565b3360009081526004602052604081205460ff1615156001141561024657600154600160a060020a0316331461023d57336000908152600460205260409020805460ff191690555b50600354610269565b507f756e617574686f72697a656400000000000000000000000000000000000000005b90565b60005434101561027b57600080fd5b336000908152600460205260409020805460ff191660011790555600a165627a7a72305820f1965b3411275c1958b546f864670296ff7c75027c153c8ed06d55983a13d2b10029","functionHashes":{"approvedAccessors(address)":"a1186a22","getAccess()":"f7ca8431","getPrivateData()":"e7e1ef57","isApprovedAccessor(address)":"d9a4abe8","minimumPayment()":"94ef987e","owner()":"8da5cb5b","publicDataKey()":"baffbef2","setMinimumPayment(uint256)":"7f83bf7d"},"gasEstimates":{"creation":[100998,141400],"external":{"approvedAccessors(address)":540,"getAccess()":20777,"getPrivateData()":21349,"isApprovedAccessor(address)":590,"minimumPayment()":428,"owner()":490,"publicDataKey()":472,"setMinimumPayment(uint256)":20367},"internal":{}},"interface":"[{\"constant\":false,\"inputs\":[{\"name\":\"_minimumPayment\",\"type\":\"uint256\"}],\"name\":\"setMinimumPayment\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"minimumPayment\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"approvedAccessors\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"publicDataKey\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"accessor\",\"type\":\"address\"}],\"name\":\"isApprovedAccessor\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getPrivateData\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getAccess\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_publicDataKey\",\"type\":\"bytes32\"},{\"name\":\"_privateDataKey\",\"type\":\"bytes32\"},{\"name\":\"_minimumPayment\",\"type\":\"uint256\"},{\"name\":\"_owner\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}]","metadata":"{\"compiler\":{\"version\":\"0.4.24+commit.e67f0147\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"_minimumPayment\",\"type\":\"uint256\"}],\"name\":\"setMinimumPayment\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"minimumPayment\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"approvedAccessors\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"publicDataKey\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"accessor\",\"type\":\"address\"}],\"name\":\"isApprovedAccessor\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getPrivateData\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getAccess\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_publicDataKey\",\"type\":\"bytes32\"},{\"name\":\"_privateDataKey\",\"type\":\"bytes32\"},{\"name\":\"_minimumPayment\",\"type\":\"uint256\"},{\"name\":\"_owner\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"\":\"MyData\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"\":{\"keccak256\":\"0x6ca1a5273fe20dddb5e4ed2d94edb72523a7085beb3a898dc437dcc43c4de6f5\",\"urls\":[\"bzzr://89dd9e3b1e842c86267281ffca7f88166021779516517895c6a0752f8e934aab\"]}},\"version\":1}","opcodes":"PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH1 0x80 DUP1 PUSH2 0x34E DUP4 CODECOPY DUP2 ADD PUSH1 0x40 SWAP1 DUP2 MSTORE DUP2 MLOAD PUSH1 0x20 DUP1 DUP5 ADD MLOAD DUP4 DUP6 ADD MLOAD PUSH1 0x60 SWAP1 SWAP6 ADD MLOAD PUSH1 0x1 DUP1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP3 DUP4 AND PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB NOT SWAP1 SWAP2 AND OR DUP1 DUP3 SSTORE PUSH1 0x2 SWAP6 SWAP1 SWAP6 SSTORE PUSH1 0x3 SWAP3 SWAP1 SWAP3 SSTORE PUSH1 0x0 SWAP6 DUP7 SSTORE SWAP3 SWAP1 SWAP3 AND DUP5 MSTORE PUSH1 0x4 SWAP1 MSTORE SWAP2 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND SWAP1 SWAP2 OR SWAP1 SSTORE PUSH2 0x2C3 DUP1 PUSH2 0x8B PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x8D JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x7F83BF7D DUP2 EQ PUSH2 0x92 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0xAC JUMPI DUP1 PUSH4 0x94EF987E EQ PUSH2 0xDD JUMPI DUP1 PUSH4 0xA1186A22 EQ PUSH2 0x104 JUMPI DUP1 PUSH4 0xBAFFBEF2 EQ PUSH2 0x139 JUMPI DUP1 PUSH4 0xD9A4ABE8 EQ PUSH2 0x14E JUMPI DUP1 PUSH4 0xE7E1EF57 EQ PUSH2 0x16F JUMPI DUP1 PUSH4 0xF7CA8431 EQ PUSH2 0x184 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x9E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xAA PUSH1 0x4 CALLDATALOAD PUSH2 0x18C JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB8 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xC1 PUSH2 0x1A8 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xE9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xF2 PUSH2 0x1B7 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x110 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x125 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x1BD JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 ISZERO ISZERO DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x145 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xF2 PUSH2 0x1D2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x15A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x125 PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB PUSH1 0x4 CALLDATALOAD AND PUSH2 0x1D8 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x17B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xF2 PUSH2 0x1F6 JUMP JUMPDEST PUSH2 0xAA PUSH2 0x26C JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x1A3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 SSTORE JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND DUP2 JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0xFF AND SWAP1 JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 SLOAD PUSH1 0xFF AND ISZERO ISZERO PUSH1 0x1 EQ ISZERO PUSH2 0x246 JUMPI PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND CALLER EQ PUSH2 0x23D JUMPI CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND SWAP1 SSTORE JUMPDEST POP PUSH1 0x3 SLOAD PUSH2 0x269 JUMP JUMPDEST POP PUSH32 0x756E617574686F72697A65640000000000000000000000000000000000000000 JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x0 SLOAD CALLVALUE LT ISZERO PUSH2 0x27B JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x4 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x1 OR SWAP1 SSTORE JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 CALL SWAP7 JUMPDEST CALLVALUE GT 0x27 0x5c NOT PC 0xb5 0x46 0xf8 PUSH5 0x670296FF7C PUSH22 0x27C153C8ED06D55983A13D2B1002900000000000000 ","runtimeBytecode":"60806040526004361061008d5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416637f83bf7d81146100925780638da5cb5b146100ac57806394ef987e146100dd578063a1186a2214610104578063baffbef214610139578063d9a4abe81461014e578063e7e1ef571461016f578063f7ca843114610184575b600080fd5b34801561009e57600080fd5b506100aa60043561018c565b005b3480156100b857600080fd5b506100c16101a8565b60408051600160a060020a039092168252519081900360200190f35b3480156100e957600080fd5b506100f26101b7565b60408051918252519081900360200190f35b34801561011057600080fd5b50610125600160a060020a03600435166101bd565b604080519115158252519081900360200190f35b34801561014557600080fd5b506100f26101d2565b34801561015a57600080fd5b50610125600160a060020a03600435166101d8565b34801561017b57600080fd5b506100f26101f6565b6100aa61026c565b600154600160a060020a031633146101a357600080fd5b600055565b600154600160a060020a031681565b60005481565b60046020526000908152604090205460ff1681565b60025481565b600160a060020a031660009081526004602052604090205460ff1690565b3360009081526004602052604081205460ff1615156001141561024657600154600160a060020a0316331461023d57336000908152600460205260409020805460ff191690555b50600354610269565b507f756e617574686f72697a656400000000000000000000000000000000000000005b90565b60005434101561027b57600080fd5b336000908152600460205260409020805460ff191660011790555600a165627a7a72305820f1965b3411275c1958b546f864670296ff7c75027c153c8ed06d55983a13d2b10029","srcmap":"708:1334:0:-;;;1004:303;8:9:-1;5:2;;;30:1;27;20:12;5:2;1004:303:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1121:5;:14;;-1:-1:-1;;;;;1121:14:0;;;-1:-1:-1;;;;;;1121:14:0;;;;;;;1145:13;:30;;;;1185:14;:32;;;;1121:5;1227:32;;;1287:5;;;;1269:24;;:17;:24;;;;:31;;-1:-1:-1;;1269:31:0;;;;;;708:1334;;;;;;","srcmapRuntime":"708:1334:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1313:120;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1313:120:0;;;;;;;763:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;763:20:0;;;;;;;;-1:-1:-1;;;;;763:20:0;;;;;;;;;;;;;;731:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;731:26:0;;;;;;;;;;;;;;;;;;;;859:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;859:49:0;;;-1:-1:-1;859:49:0;;;;;;;;;;;;;;;;;;;;;789:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;789:28:0;;;;1588:126;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1588:126:0;;;-1:-1:-1;1588:126:0;;;1720:320;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1720:320:0;;;;1443:135;;;;1313:120;969:5;;-1:-1:-1;969:5:0;955:10;:19;947:28;;;;;;1390:14;:32;1313:120::o;763:20::-;;;-1:-1:-1;763:20:0;;:::o;731:26::-;;;;:::o;859:49::-;;;;;;;;;;;;;;;:::o;789:28::-;;;;:::o;1588:126::-;-1:-1:-1;1679:27:0;1655:4;1679:27;;;:17;:27;;;;;;;;;1588:126::o;1720:320::-;1803:10;1762:7;1785:29;;;:17;:29;;;;;;;;:37;;:29;:37;1781:253;;;1856:5;;-1:-1:-1;1856:5:0;1842:10;:19;1838:95;;1899:10;1913:5;1881:29;;;:17;:29;;;;;:37;;-1:-1:-1;;1881:37:0;;;1838:95;-1:-1:-1;1954:14:0;;1946:23;;1781:253;-1:-1:-1;2000:23:0;1781:253;1720:320;:::o;1443:135::-;1510:14;;1497:9;:27;;1489:36;;;;;;1553:10;1535:29;;;;:17;:29;;;;;:36;;-1:-1:-1;;1535:36:0;1567:4;1535:36;;;1443:135::o"}

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

var configData = __webpack_require__("./config/config.json");

var web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // we are in the browser and metamask is running.
  web3 = new _web.default(window.web3.currentProvider);
} else {
  // we are on the server *OR* the user is not running metamask
  var provider = new _web.default.providers.HttpProvider(configData.rinkby.PROVIDER_URI);
  web3 = new _web.default(provider);
}

var _default = web3;
exports.default = _default;

/***/ }),

/***/ "./pages/mydata/interests.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = __webpack_require__("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _semanticUiReact = __webpack_require__("semantic-ui-react");

var superagent = _interopRequireWildcard(__webpack_require__("superagent"));

var _Layout = _interopRequireDefault(__webpack_require__("./components/Layout.js"));

var _web = _interopRequireDefault(__webpack_require__("./ethereum/web3.js"));

var _myData = _interopRequireDefault(__webpack_require__("./ethereum/myData.js"));

var _routes = __webpack_require__("./routes.js");

var _jsxFileName = "/Users/Bill/Documents/ethereum-projects/mydata/pages/mydata/interests.js";

var Interests =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Interests, _Component);

  function Interests() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Interests);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Interests.__proto__ || Object.getPrototypeOf(Interests)).call.apply(_ref, [this].concat(args))), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        interests: new Set(_this.props.interests),
        brands: new Set(_this.props.brands),
        medicalCondition: new Set(_this.props.medicalCondition),
        readOnly: _this.props.readOnly,
        errorMessage: '',
        loading: false
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee4(event) {
          var interests, brands, medicalCondition;
          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  event.preventDefault();
                  interests = (0, _toConsumableArray2.default)(_this.state.interests);
                  brands = (0, _toConsumableArray2.default)(_this.state.brands);
                  medicalCondition = (0, _toConsumableArray2.default)(_this.state.medicalCondition);
                  superagent.patch("http://".concat(window.location.host, "/api/update/").concat(_this.props.publicDataKey), {
                    interests: interests
                  }).then(
                  /*#__PURE__*/
                  function () {
                    var _ref2 = (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee(res) {
                      return _regenerator.default.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee, this);
                    }));

                    return function (_x2) {
                      return _ref2.apply(this, arguments);
                    };
                  }()).catch(function (err) {
                    return console.error(err.stack);
                  });
                  superagent.patch("http://".concat(window.location.host, "/api/update/").concat(_this.props.publicDataKey), {
                    brands: brands
                  }).then(
                  /*#__PURE__*/
                  function () {
                    var _ref3 = (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee2(res) {
                      return _regenerator.default.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2, this);
                    }));

                    return function (_x3) {
                      return _ref3.apply(this, arguments);
                    };
                  }()).catch(function (err) {
                    return console.error(err.stack);
                  });
                  superagent.patch("http://".concat(window.location.host, "/api/update/").concat(_this.props.publicDataKey), {
                    medicalCondition: medicalCondition
                  }).then(
                  /*#__PURE__*/
                  function () {
                    var _ref4 = (0, _asyncToGenerator2.default)(
                    /*#__PURE__*/
                    _regenerator.default.mark(function _callee3(res) {
                      return _regenerator.default.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3, this);
                    }));

                    return function (_x4) {
                      return _ref4.apply(this, arguments);
                    };
                  }()).catch(function (err) {
                    return console.error(err.stack);
                  });

                case 7:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "onInterestsChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, data) {
        var newInterestsSet = new Set(_this.state.interests);
        data.checked ? newInterestsSet.add(data.value) : newInterestsSet.delete(data.value);

        _this.setState({
          interests: newInterestsSet
        });
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "onBrandsChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, data) {
        var newBrandsSet = new Set(_this.state.brands);
        data.checked ? newBrandsSet.add(data.value) : newBrandsSet.delete(data.value);

        _this.setState({
          brands: newBrandsSet
        });
      }
    }), Object.defineProperty((0, _assertThisInitialized2.default)(_this), "onMedicalConditionChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, data) {
        var newMedicalConditionSet = new Set(_this.state.medicalCondition);
        data.checked ? newMedicalConditionSet.add(data.value) : newMedicalConditionSet.delete(data.value);

        _this.setState({
          medicalCondition: newMedicalConditionSet
        });
      }
    }), _temp));
  }

  (0, _createClass2.default)(Interests, [{
    key: "renderInterestsFormField",
    value: function renderInterestsFormField() {
      var _this2 = this;

      return this.props.interestsConst.map(function (interests, index) {
        return _react.default.createElement(_semanticUiReact.Form.Field, {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, _react.default.createElement(_semanticUiReact.Checkbox, {
          label: interests,
          name: "Interests",
          readOnly: _this2.state.readOnly,
          value: interests.toLowerCase(),
          checked: _this2.state.interests.has(interests.toLowerCase()),
          onChange: _this2.onInterestsChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }));
      });
    }
  }, {
    key: "renderBrandsFormField",
    value: function renderBrandsFormField() {
      var _this3 = this;

      return this.props.brandsConst.map(function (brands, index) {
        return _react.default.createElement(_semanticUiReact.Form.Field, {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, _react.default.createElement(_semanticUiReact.Checkbox, {
          label: brands,
          name: "Brands",
          readOnly: _this3.state.readOnly,
          value: brands.toLowerCase(),
          checked: _this3.state.brands.has(brands.toLowerCase()),
          onChange: _this3.onBrandsChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }));
      });
    }
  }, {
    key: "renderMedicalConditionFormField",
    value: function renderMedicalConditionFormField() {
      var _this4 = this;

      return this.props.medicalConditionConst.map(function (medicalCondition, index) {
        return _react.default.createElement(_semanticUiReact.Form.Field, {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, _react.default.createElement(_semanticUiReact.Checkbox, {
          label: medicalCondition,
          name: "MedicalCondition",
          readOnly: _this4.state.readOnly,
          value: medicalCondition.toLowerCase(),
          checked: _this4.state.medicalCondition.has(medicalCondition.toLowerCase()),
          onChange: _this4.onMedicalConditionChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          readOnly = _state.readOnly,
          interests = _state.interests,
          brands = _state.brands,
          medicalCondition = _state.medicalCondition,
          errorMessage = _state.errorMessage,
          loading = _state.loading;
      return _react.default.createElement(_Layout.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, "Contract balance: ", this.props.contractBalance, " ether"), _react.default.createElement(_semanticUiReact.Form, {
        onSubmit: this.onSubmit,
        error: !!errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react.default.createElement(_semanticUiReact.Grid, {
        columns: 3,
        divided: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, _react.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, "Interests"), this.renderInterestsFormField()), _react.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, "Brands"), this.renderBrandsFormField()), _react.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, "Medical Condition"), this.renderMedicalConditionFormField()))), _react.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: "Oops!",
        content: errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }), _react.default.createElement(_semanticUiReact.Button, {
        loading: loading,
        disabled: readOnly,
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, "Update")));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(props) {
        var myData, contractBalance, accounts, owner, readOnly, interestsConst, brandsConst, medicalConditionConst, publicDataKey, detail, interests, brands, medicalCondition;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                myData = (0, _myData.default)(props.query.address);
                _context5.next = 3;
                return _web.default.eth.getBalance(props.query.address).then(function (result) {
                  contractBalance = _web.default.utils.fromWei(result);
                });

              case 3:
                _context5.next = 5;
                return _web.default.eth.getAccounts();

              case 5:
                accounts = _context5.sent;
                _context5.next = 8;
                return myData.methods.owner().call();

              case 8:
                owner = _context5.sent;
                readOnly = !(accounts[0] === owner);
                interestsConst = ["Tennis", "Golf", "Shopping", "Movie", "Hiking", "Reading", "Diving", "Investing"];
                brandsConst = ["Chanel", "Louis Vuitton", "H&M", "ZARA", "Hermes", "Gucci", "Cartier", "Burberry", "Nike", "Adidas", "Lululemon", "Athleta"];
                medicalConditionConst = ["Hypertension", "Hyperlipidemia", "Diabetes", "Back pain", "Anxiety", "Asthma", "Cancer", "Depression", "Shingles"];
                _context5.t0 = _web.default.utils;
                _context5.next = 16;
                return myData.methods.publicDataKey().call();

              case 16:
                _context5.t1 = _context5.sent;
                publicDataKey = _context5.t0.hexToAscii.call(_context5.t0, _context5.t1);
                _context5.next = 20;
                return superagent.get("http://".concat(window.location.host, "/api/getbyid/").concat(publicDataKey)).then(function (res) {
                  return res.body;
                });

              case 20:
                detail = _context5.sent;
                console.log("detail: ", detail[0]);
                interests = new Set(detail[0].interests);
                brands = new Set(detail[0].brands);
                medicalCondition = new Set(detail[0].medicalCondition);
                return _context5.abrupt("return", {
                  myData: myData,
                  address: props.query.address,
                  interestsConst: interestsConst,
                  interests: interests,
                  brandsConst: brandsConst,
                  brands: brands,
                  medicalConditionConst: medicalConditionConst,
                  medicalCondition: medicalCondition,
                  readOnly: readOnly,
                  contractBalance: contractBalance,
                  publicDataKey: publicDataKey
                });

              case 26:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function getInitialProps(_x5) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);
  return Interests;
}(_react.Component);

var _default = Interests;
exports.default = _default;

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import mydata from './ethereum/myData';
var routes = __webpack_require__("next-routes")();

routes.add('/mydata/:address/interests', 'mydata/interests').add('/mydata/:address/privatedata', 'mydata/privatedata');
module.exports = routes;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/mydata/interests.js");


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

/***/ "@babel/runtime/helpers/toConsumableArray":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

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
//# sourceMappingURL=interests.js.map