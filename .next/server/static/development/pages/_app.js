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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion-theming */ \"emotion-theming\");\n/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion_theming__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./theme.ts\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/mnt/c/Users/Sacudo/Documents/projetos/zx-ventures-frontend-challenge/pages/_app.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(emotion_theming__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"].light,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwibGlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7OztBQUVBLE1BQU1BLEdBQXNDLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUMzRSxTQUNFLDBEQUFDLDZEQUFEO0FBQWUsU0FBSyxFQUFFQyw4Q0FBSyxDQUFDQyxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsU0FBRCxlQUFlRixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGO0FBS0QsQ0FORDs7QUFRZUYsa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdlbW90aW9uLXRoZW1pbmcnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lJztcblxuY29uc3QgQXBwOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lLmxpZ2h0fT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./theme.ts":
/*!******************!*\
  !*** ./theme.ts ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fontSize = {\n  xs: '0.75rem',\n  sm: '0.875rem',\n  base: '1rem',\n  lg: '1.125rem',\n  xl: '1.25rem',\n  '2xl': '1.5rem',\n  '3xl': '1.875rem',\n  '4xl': '2.25rem',\n  '5xl': '3rem',\n  '6xl': '4rem'\n};\nconst fontWeight = {\n  hairline: '100',\n  thin: '200',\n  light: '300',\n  normal: '400',\n  medium: '500',\n  semibold: '600',\n  bold: '700',\n  extrabold: '800',\n  black: '900'\n};\nconst font = {\n  size: fontSize,\n  weight: fontWeight\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  light: {\n    font\n  },\n  dark: {\n    font\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZS50cz9mNzdmIl0sIm5hbWVzIjpbImZvbnRTaXplIiwieHMiLCJzbSIsImJhc2UiLCJsZyIsInhsIiwiZm9udFdlaWdodCIsImhhaXJsaW5lIiwidGhpbiIsImxpZ2h0Iiwibm9ybWFsIiwibWVkaXVtIiwic2VtaWJvbGQiLCJib2xkIiwiZXh0cmFib2xkIiwiYmxhY2siLCJmb250Iiwic2l6ZSIsIndlaWdodCIsImRhcmsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsUUFBUSxHQUFHO0FBQ2ZDLElBQUUsRUFBRSxTQURXO0FBRWZDLElBQUUsRUFBRSxVQUZXO0FBR2ZDLE1BQUksRUFBRSxNQUhTO0FBSWZDLElBQUUsRUFBRSxVQUpXO0FBS2ZDLElBQUUsRUFBRSxTQUxXO0FBTWYsU0FBTyxRQU5RO0FBT2YsU0FBTyxVQVBRO0FBUWYsU0FBTyxTQVJRO0FBU2YsU0FBTyxNQVRRO0FBVWYsU0FBTztBQVZRLENBQWpCO0FBYUEsTUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxVQUFRLEVBQUUsS0FETztBQUVqQkMsTUFBSSxFQUFFLEtBRlc7QUFHakJDLE9BQUssRUFBRSxLQUhVO0FBSWpCQyxRQUFNLEVBQUUsS0FKUztBQUtqQkMsUUFBTSxFQUFFLEtBTFM7QUFNakJDLFVBQVEsRUFBRSxLQU5PO0FBT2pCQyxNQUFJLEVBQUUsS0FQVztBQVFqQkMsV0FBUyxFQUFFLEtBUk07QUFTakJDLE9BQUssRUFBRTtBQVRVLENBQW5CO0FBWUEsTUFBTUMsSUFBSSxHQUFHO0FBQ1hDLE1BQUksRUFBRWpCLFFBREs7QUFFWGtCLFFBQU0sRUFBRVo7QUFGRyxDQUFiO0FBS2U7QUFDYkcsT0FBSyxFQUFFO0FBQ0xPO0FBREssR0FETTtBQUliRyxNQUFJLEVBQUU7QUFDSkg7QUFESTtBQUpPLENBQWYiLCJmaWxlIjoiLi90aGVtZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvbnRTaXplID0ge1xuICB4czogJzAuNzVyZW0nLFxuICBzbTogJzAuODc1cmVtJyxcbiAgYmFzZTogJzFyZW0nLFxuICBsZzogJzEuMTI1cmVtJyxcbiAgeGw6ICcxLjI1cmVtJyxcbiAgJzJ4bCc6ICcxLjVyZW0nLFxuICAnM3hsJzogJzEuODc1cmVtJyxcbiAgJzR4bCc6ICcyLjI1cmVtJyxcbiAgJzV4bCc6ICczcmVtJyxcbiAgJzZ4bCc6ICc0cmVtJyxcbn07XG5cbmNvbnN0IGZvbnRXZWlnaHQgPSB7XG4gIGhhaXJsaW5lOiAnMTAwJyxcbiAgdGhpbjogJzIwMCcsXG4gIGxpZ2h0OiAnMzAwJyxcbiAgbm9ybWFsOiAnNDAwJyxcbiAgbWVkaXVtOiAnNTAwJyxcbiAgc2VtaWJvbGQ6ICc2MDAnLFxuICBib2xkOiAnNzAwJyxcbiAgZXh0cmFib2xkOiAnODAwJyxcbiAgYmxhY2s6ICc5MDAnLFxufTtcblxuY29uc3QgZm9udCA9IHtcbiAgc2l6ZTogZm9udFNpemUsXG4gIHdlaWdodDogZm9udFdlaWdodCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbGlnaHQ6IHtcbiAgICBmb250LFxuICB9LFxuICBkYXJrOiB7XG4gICAgZm9udCxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./theme.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9jb3JlXCI/Y2IxNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAZW1vdGlvbi9jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/core\n");

/***/ }),

/***/ "emotion-theming":
/*!**********************************!*\
  !*** external "emotion-theming" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"emotion-theming\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbW90aW9uLXRoZW1pbmdcIj9iYTg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImVtb3Rpb24tdGhlbWluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtb3Rpb24tdGhlbWluZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///emotion-theming\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });