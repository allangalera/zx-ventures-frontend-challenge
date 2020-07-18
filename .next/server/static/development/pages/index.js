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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button/index.tsx":
/*!*************************************!*\
  !*** ./components/Button/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./components/Button/styles.ts\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/mnt/c/Users/Sacudo/Documents/projetos/zx-ventures-frontend-challenge/components/Button/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Button = ({\n  text,\n  handleClick\n}) => {\n  const onClick = () => {\n    console.log('aqui');\n    handleClick();\n  };\n\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"button\", {\n    css: _styles__WEBPACK_IMPORTED_MODULE_1__[\"Button\"],\n    onClick: onClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"span\", {\n    css: _styles__WEBPACK_IMPORTED_MODULE_1__[\"ButtonSpan\"],\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, text));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi9pbmRleC50c3g/YWFhMyJdLCJuYW1lcyI6WyJCdXR0b24iLCJ0ZXh0IiwiaGFuZGxlQ2xpY2siLCJvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFPQSxNQUFNQSxNQUFzQyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQUQsS0FBd0M7QUFDckYsUUFBTUMsT0FBTyxHQUFHLE1BQU07QUFDcEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQUgsZUFBVztBQUNaLEdBSEQ7O0FBSUEsU0FDRTtBQUFRLE9BQUcsRUFBRUksOENBQWI7QUFBNEIsV0FBTyxFQUFFSCxPQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxPQUFHLEVBQUVHLGtEQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JMLElBQS9CLENBREYsQ0FERjtBQUtELENBVkQ7O0FBWWVELHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CdXR0b24vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL3N0eWxlcyc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRleHQ6IHN0cmluZztcbiAgaGFuZGxlQ2xpY2s6IEZ1bmN0aW9uO1xufTtcblxuY29uc3QgQnV0dG9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoeyB0ZXh0LCBoYW5kbGVDbGljayB9KTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdhcXVpJyk7XG4gICAgaGFuZGxlQ2xpY2soKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIGNzcz17c3R5bGVzLkJ1dHRvbn0gb25DbGljaz17b25DbGlja30+XG4gICAgICA8c3BhbiBjc3M9e3N0eWxlcy5CdXR0b25TcGFufT57dGV4dH08L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Button/index.tsx\n");

/***/ }),

/***/ "./components/Button/styles.ts":
/*!*************************************!*\
  !*** ./components/Button/styles.ts ***!
  \*************************************/
/*! exports provided: Button, ButtonSpan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonSpan\", function() { return ButtonSpan; });\nconst Button = theme => ({\n  color: 'white',\n  background: 'black',\n  border: 'none',\n  borderRadius: '0.5rem',\n  padding: '1rem 2rem'\n});\nconst ButtonSpan = theme => ({});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi9zdHlsZXMudHM/MDkwZSJdLCJuYW1lcyI6WyJCdXR0b24iLCJ0aGVtZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJCdXR0b25TcGFuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsS0FBaUI7QUFDckNDLE9BQUssRUFBRSxPQUQ4QjtBQUVyQ0MsWUFBVSxFQUFFLE9BRnlCO0FBR3JDQyxRQUFNLEVBQUUsTUFINkI7QUFJckNDLGNBQVksRUFBRSxRQUp1QjtBQUtyQ0MsU0FBTyxFQUFFO0FBTDRCLENBQWpCLENBQWY7QUFRQSxNQUFNQyxVQUFVLEdBQUlOLEtBQUQsS0FBaUIsRUFBakIsQ0FBbkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbi9zdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQnV0dG9uID0gKHRoZW1lOiBhbnkpID0+ICh7XG4gIGNvbG9yOiAnd2hpdGUnLFxuICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICBib3JkZXI6ICdub25lJyxcbiAgYm9yZGVyUmFkaXVzOiAnMC41cmVtJyxcbiAgcGFkZGluZzogJzFyZW0gMnJlbScsXG59KTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvblNwYW4gPSAodGhlbWU6IGFueSkgPT4gKHt9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Button/styles.ts\n");

/***/ }),

/***/ "./components/MetaSeo/index.tsx":
/*!**************************************!*\
  !*** ./components/MetaSeo/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/mnt/c/Users/Sacudo/Documents/projetos/zx-ventures-frontend-challenge/components/MetaSeo/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst MetaSeo = ({\n  title,\n  description\n}) => {\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"meta\", {\n    name: \"title\",\n    content: title,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"meta\", {\n    name: \"description\",\n    content: description,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MetaSeo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01ldGFTZW8vaW5kZXgudHN4PzdjZjEiXSwibmFtZXMiOlsiTWV0YVNlbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQU9BLE1BQU1BLE9BQXVDLEdBQUcsQ0FBQztBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBRCxLQUE0QjtBQUMxRSxTQUNFLDBEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFELEtBQVIsQ0FGRixFQUdFO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBbUIsV0FBTyxFQUFFQSxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFJRTtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLFdBQU8sRUFBRUMsV0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREY7QUFrQ0QsQ0FuQ0Q7O0FBcUNlRixzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWV0YVNlby9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxudHlwZSBQcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn07XG5cbmNvbnN0IE1ldGFTZW86IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICB7LyogUHJpbWFyeSBNZXRhIFRhZ3MgKi99XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwidGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuXG4gICAgICB7LyogT3BlbiBHcmFwaCAvIEZhY2Vib29rICovfVxuICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vbWV0YXRhZ3MuaW8vXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiTWV0YSBUYWdzIOKAlCBQcmV2aWV3LCBFZGl0IGFuZCBHZW5lcmF0ZVwiIC8+XG4gICAgICA8bWV0YVxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgY29udGVudD1cIldpdGggTWV0YSBUYWdzIHlvdSBjYW4gZWRpdCBhbmQgZXhwZXJpbWVudCB3aXRoIHlvdXIgY29udGVudCB0aGVuIHByZXZpZXcgaG93IHlvdXIgd2VicGFnZSB3aWxsIGxvb2sgb24gR29vZ2xlLCBGYWNlYm9vaywgVHdpdHRlciBhbmQgbW9yZSFcIlxuICAgICAgLz5cbiAgICAgIDxtZXRhXG4gICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9tZXRhdGFncy5pby9hc3NldHMvbWV0YS10YWdzLTE2YTMzYTZhODUzMWU1MTljYzA5MzZmYmJhMGFkOTA0ZTUyZDM1ZjM0YTQ2Yzk3YTJjOWY2ZjdkZDdkMzM2ZjIucG5nXCJcbiAgICAgIC8+ICovfVxuXG4gICAgICB7LyogVHdpdHRlciAqL31cbiAgICAgIHsvKiA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp1cmxcIiBjb250ZW50PVwiaHR0cHM6Ly9tZXRhdGFncy5pby9cIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIk1ldGEgVGFncyDigJQgUHJldmlldywgRWRpdCBhbmQgR2VuZXJhdGVcIiAvPlxuICAgICAgPG1ldGFcbiAgICAgICAgcHJvcGVydHk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgY29udGVudD1cIldpdGggTWV0YSBUYWdzIHlvdSBjYW4gZWRpdCBhbmQgZXhwZXJpbWVudCB3aXRoIHlvdXIgY29udGVudCB0aGVuIHByZXZpZXcgaG93IHlvdXIgd2VicGFnZSB3aWxsIGxvb2sgb24gR29vZ2xlLCBGYWNlYm9vaywgVHdpdHRlciBhbmQgbW9yZSFcIlxuICAgICAgLz5cbiAgICAgIDxtZXRhXG4gICAgICAgIHByb3BlcnR5PVwidHdpdHRlcjppbWFnZVwiXG4gICAgICAgIGNvbnRlbnQ9XCJodHRwczovL21ldGF0YWdzLmlvL2Fzc2V0cy9tZXRhLXRhZ3MtMTZhMzNhNmE4NTMxZTUxOWNjMDkzNmZiYmEwYWQ5MDRlNTJkMzVmMzRhNDZjOTdhMmM5ZjZmN2RkN2QzMzZmMi5wbmdcIlxuICAgICAgLz4gKi99XG4gICAgPC9IZWFkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YVNlbztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MetaSeo/index.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Button */ \"./components/Button/index.tsx\");\n/* harmony import */ var _components_MetaSeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MetaSeo */ \"./components/MetaSeo/index.tsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/mnt/c/Users/Sacudo/Documents/projetos/zx-ventures-frontend-challenge/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nconst Home = () => {\n  const seo = {\n    title: 'Allan Galera - ZX Ventures Challenge',\n    description: 'Allan Galera Challange to apply to ZX Ventures job :)'\n  };\n\n  const handleClick = () => {\n    console.log('Home');\n  };\n\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_components_MetaSeo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _extends({}, seo, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_components_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    text: \"my button\",\n    handleClick: handleClick,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwic2VvIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQSxJQUFrQyxHQUFHLE1BQW1CO0FBQzVELFFBQU1DLEdBQUcsR0FBRztBQUNWQyxTQUFLLEVBQUUsc0NBREc7QUFFVkMsZUFBVyxFQUFFO0FBRkgsR0FBWjs7QUFJQSxRQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUN4QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNELEdBRkQ7O0FBR0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsMkRBQUQsZUFBYUwsR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsRUFFRSwwREFBQywwREFBRDtBQUFRLFFBQUksRUFBQyxXQUFiO0FBQXlCLGVBQVcsRUFBRUcsV0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQWREOztBQWdCZUosbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IE1ldGFTZW8gZnJvbSAnQGNvbXBvbmVudHMvTWV0YVNlbyc7XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PGFueT4gPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCBzZW8gPSB7XG4gICAgdGl0bGU6ICdBbGxhbiBHYWxlcmEgLSBaWCBWZW50dXJlcyBDaGFsbGVuZ2UnLFxuICAgIGRlc2NyaXB0aW9uOiAnQWxsYW4gR2FsZXJhIENoYWxsYW5nZSB0byBhcHBseSB0byBaWCBWZW50dXJlcyBqb2IgOiknLFxuICB9O1xuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnSG9tZScpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TWV0YVNlbyB7Li4uc2VvfSAvPlxuICAgICAgPEJ1dHRvbiB0ZXh0PVwibXkgYnV0dG9uXCIgaGFuZGxlQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/Sacudo/Documents/projetos/zx-ventures-frontend-challenge/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9jb3JlXCI/Y2IxNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAZW1vdGlvbi9jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/core\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

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