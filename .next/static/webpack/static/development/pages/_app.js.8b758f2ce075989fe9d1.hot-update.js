webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./theme.ts":
/*!******************!*\
  !*** ./theme.ts ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {var fontSize = {\n  xs: '0.75rem',\n  sm: '0.875rem',\n  base: '1rem',\n  lg: '1.125rem',\n  xl: '1.25rem',\n  '2xl': '1.5rem',\n  '3xl': '1.875rem',\n  '4xl': '2.25rem',\n  '5xl': '3rem',\n  '6xl': '4rem'\n};\nvar fontWeight = {\n  hairline: '100',\n  thin: '200',\n  light: '300',\n  normal: '400',\n  medium: '500',\n  semibold: '600',\n  bold: '700',\n  extrabold: '800',\n  black: '900'\n};\nvar font = {\n  size: fontSize,\n  weight: fontWeight\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  light: {},\n  dark: {},\n  font: {\n    size: fontSize,\n    weight: fontWeight\n  }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90aGVtZS50cz9mNzdmIl0sIm5hbWVzIjpbImZvbnRTaXplIiwieHMiLCJzbSIsImJhc2UiLCJsZyIsInhsIiwiZm9udFdlaWdodCIsImhhaXJsaW5lIiwidGhpbiIsImxpZ2h0Iiwibm9ybWFsIiwibWVkaXVtIiwic2VtaWJvbGQiLCJib2xkIiwiZXh0cmFib2xkIiwiYmxhY2siLCJmb250Iiwic2l6ZSIsIndlaWdodCIsImRhcmsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsa0RBQU1BLFFBQVEsR0FBRztBQUNmQyxJQUFFLEVBQUUsU0FEVztBQUVmQyxJQUFFLEVBQUUsVUFGVztBQUdmQyxNQUFJLEVBQUUsTUFIUztBQUlmQyxJQUFFLEVBQUUsVUFKVztBQUtmQyxJQUFFLEVBQUUsU0FMVztBQU1mLFNBQU8sUUFOUTtBQU9mLFNBQU8sVUFQUTtBQVFmLFNBQU8sU0FSUTtBQVNmLFNBQU8sTUFUUTtBQVVmLFNBQU87QUFWUSxDQUFqQjtBQWFBLElBQU1DLFVBQVUsR0FBRztBQUNqQkMsVUFBUSxFQUFFLEtBRE87QUFFakJDLE1BQUksRUFBRSxLQUZXO0FBR2pCQyxPQUFLLEVBQUUsS0FIVTtBQUlqQkMsUUFBTSxFQUFFLEtBSlM7QUFLakJDLFFBQU0sRUFBRSxLQUxTO0FBTWpCQyxVQUFRLEVBQUUsS0FOTztBQU9qQkMsTUFBSSxFQUFFLEtBUFc7QUFRakJDLFdBQVMsRUFBRSxLQVJNO0FBU2pCQyxPQUFLLEVBQUU7QUFUVSxDQUFuQjtBQVlBLElBQU1DLElBQUksR0FBRztBQUNYQyxNQUFJLEVBQUVqQixRQURLO0FBRVhrQixRQUFNLEVBQUVaO0FBRkcsQ0FBYjtBQUtlO0FBQ2JHLE9BQUssRUFBRSxFQURNO0FBRWJVLE1BQUksRUFBRSxFQUZPO0FBR2JILE1BQUksRUFBRTtBQUNKQyxRQUFJLEVBQUVqQixRQURGO0FBRUprQixVQUFNLEVBQUVaO0FBRko7QUFITyxDQUFmIiwiZmlsZSI6Ii4vdGhlbWUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb250U2l6ZSA9IHtcbiAgeHM6ICcwLjc1cmVtJyxcbiAgc206ICcwLjg3NXJlbScsXG4gIGJhc2U6ICcxcmVtJyxcbiAgbGc6ICcxLjEyNXJlbScsXG4gIHhsOiAnMS4yNXJlbScsXG4gICcyeGwnOiAnMS41cmVtJyxcbiAgJzN4bCc6ICcxLjg3NXJlbScsXG4gICc0eGwnOiAnMi4yNXJlbScsXG4gICc1eGwnOiAnM3JlbScsXG4gICc2eGwnOiAnNHJlbScsXG59O1xuXG5jb25zdCBmb250V2VpZ2h0ID0ge1xuICBoYWlybGluZTogJzEwMCcsXG4gIHRoaW46ICcyMDAnLFxuICBsaWdodDogJzMwMCcsXG4gIG5vcm1hbDogJzQwMCcsXG4gIG1lZGl1bTogJzUwMCcsXG4gIHNlbWlib2xkOiAnNjAwJyxcbiAgYm9sZDogJzcwMCcsXG4gIGV4dHJhYm9sZDogJzgwMCcsXG4gIGJsYWNrOiAnOTAwJyxcbn07XG5cbmNvbnN0IGZvbnQgPSB7XG4gIHNpemU6IGZvbnRTaXplLFxuICB3ZWlnaHQ6IGZvbnRXZWlnaHQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxpZ2h0OiB7fSxcbiAgZGFyazoge30sXG4gIGZvbnQ6IHtcbiAgICBzaXplOiBmb250U2l6ZSxcbiAgICB3ZWlnaHQ6IGZvbnRXZWlnaHQsXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./theme.ts\n");

/***/ })

})