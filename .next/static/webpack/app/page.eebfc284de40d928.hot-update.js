"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Categories/TopChart/index.tsx":
/*!******************************************************!*\
  !*** ./src/components/Categories/TopChart/index.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TopChart: function() { return /* binding */ TopChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TopList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopList */ \"(app-pages-browser)/./src/components/Categories/TopChart/TopList.tsx\");\n/* harmony import */ var _TopVideo_TopVideosItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TopVideo/TopVideosItem */ \"(app-pages-browser)/./src/components/Categories/TopVideo/TopVideosItem.tsx\");\n/* harmony import */ var _components_TestIsLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TestIsLoading */ \"(app-pages-browser)/./src/components/TestIsLoading.tsx\");\n/* harmony import */ var _app_actions_categoryFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/actions/categoryFetch */ \"(app-pages-browser)/./src/app/actions/categoryFetch.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n/* import { useShortsQuery } from \"@/hooks/useShortsAndPostsQuery\"; */ const TopChartMemo = ()=>{\n    _s();\n    /* const { data: topPost } = useShortsQuery(getTopViews, \"getTop\"); */ const getTopViews = (0,_app_actions_categoryFetch__WEBPACK_IMPORTED_MODULE_5__.getTopViewsFetch)();\n    const arr = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>{\n        return [\n            ...Array(4)\n        ].map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TestIsLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, i, false, {\n                fileName: \"/Users/user/Desktop/xiu mne a ne life/plice/src/components/Categories/TopChart/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 40\n            }, undefined));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TopList__WEBPACK_IMPORTED_MODULE_2__.CategortiesImgList, {\n        children: getTopViews ? getTopViews.map((top, idex)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TopVideo_TopVideosItem__WEBPACK_IMPORTED_MODULE_3__.TopVideosItem, {\n                index: idex + 1,\n                image: top.privUrl,\n                title: top.title,\n                href: top._id\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/xiu mne a ne life/plice/src/components/Categories/TopChart/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 15\n            }, undefined);\n        }) : arr\n    }, void 0, false, {\n        fileName: \"/Users/user/Desktop/xiu mne a ne life/plice/src/components/Categories/TopChart/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TopChartMemo, \"q1xb2adMSywW4wo/M23Mu0ssEgU=\");\n_c = TopChartMemo;\nconst TopChart = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().memo(TopChartMemo);\n_c1 = TopChart;\nvar _c, _c1;\n$RefreshReg$(_c, \"TopChartMemo\");\n$RefreshReg$(_c1, \"TopChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NhdGVnb3JpZXMvVG9wQ2hhcnQvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFFcUI7QUFFVztBQUlIO0FBQ1E7QUFDL0Qsb0VBQW9FLEdBRXBFLE1BQU1LLGVBQWU7O0lBQ25CLG9FQUFvRSxHQUVwRSxNQUFNQyxjQUFjRiw0RUFBZ0JBO0lBRXBDLE1BQU1HLE1BQU1QLG9EQUFhLENBQUM7UUFDeEIsT0FBTztlQUFJUyxNQUFNO1NBQUcsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUFNLDhEQUFDVCxpRUFBYUEsTUFBTVM7Ozs7O0lBQ3pELEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDWCx3REFBa0JBO2tCQUNoQkssY0FDR0EsWUFBWUksR0FBRyxDQUFDLENBQUNHLEtBQVlDO1lBQzNCLHFCQUNFLDhEQUFDWixrRUFBYUE7Z0JBQ1phLE9BQU9ELE9BQU87Z0JBQ2RFLE9BQU9ILElBQUlJLE9BQU87Z0JBQ2xCQyxPQUFPTCxJQUFJSyxLQUFLO2dCQUNoQkMsTUFBTU4sSUFBSU8sR0FBRzs7Ozs7O1FBR25CLEtBQ0FiOzs7Ozs7QUFHVjtHQXpCTUY7S0FBQUE7QUEyQkMsTUFBTWdCLHlCQUFXckIsaURBQVUsQ0FBQ0ssY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yaWVzL1RvcENoYXJ0L2luZGV4LnRzeD8wYjNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQ2F0ZWdvcnRpZXNJbWdMaXN0IH0gZnJvbSBcIi4vVG9wTGlzdFwiO1xuXG5pbXBvcnQgeyBUb3BWaWRlb3NJdGVtIH0gZnJvbSBcIi4uL1RvcFZpZGVvL1RvcFZpZGVvc0l0ZW1cIjtcbmltcG9ydCB7IElQb3N0IH0gZnJvbSBcIkAvdHlwZXMvUG9zdFwiO1xuaW1wb3J0IHsgZ2V0VG9wVmlld3MgfSBmcm9tIFwiQC9hcGkvcHJvZHVjdHNcIjtcblxuaW1wb3J0IFRlc3RJc0xvYWRpbmcgZnJvbSBcIkAvY29tcG9uZW50cy9UZXN0SXNMb2FkaW5nXCI7XG5pbXBvcnQgeyBnZXRUb3BWaWV3c0ZldGNoIH0gZnJvbSBcIkAvYXBwL2FjdGlvbnMvY2F0ZWdvcnlGZXRjaFwiO1xuLyogaW1wb3J0IHsgdXNlU2hvcnRzUXVlcnkgfSBmcm9tIFwiQC9ob29rcy91c2VTaG9ydHNBbmRQb3N0c1F1ZXJ5XCI7ICovXG5cbmNvbnN0IFRvcENoYXJ0TWVtbyA9ICgpID0+IHtcbiAgLyogY29uc3QgeyBkYXRhOiB0b3BQb3N0IH0gPSB1c2VTaG9ydHNRdWVyeShnZXRUb3BWaWV3cywgXCJnZXRUb3BcIik7ICovXG5cbiAgY29uc3QgZ2V0VG9wVmlld3MgPSBnZXRUb3BWaWV3c0ZldGNoKCk7XG5cbiAgY29uc3QgYXJyID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIFsuLi5BcnJheSg0KV0ubWFwKChfLCBpKSA9PiA8VGVzdElzTG9hZGluZyBrZXk9e2l9IC8+KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENhdGVnb3J0aWVzSW1nTGlzdD5cbiAgICAgIHtnZXRUb3BWaWV3c1xuICAgICAgICA/IGdldFRvcFZpZXdzLm1hcCgodG9wOiBJUG9zdCwgaWRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VG9wVmlkZW9zSXRlbVxuICAgICAgICAgICAgICAgIGluZGV4PXtpZGV4ICsgMX1cbiAgICAgICAgICAgICAgICBpbWFnZT17dG9wLnByaXZVcmx9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3RvcC50aXRsZX1cbiAgICAgICAgICAgICAgICBocmVmPXt0b3AuX2lkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICA6IGFycn1cbiAgICA8L0NhdGVnb3J0aWVzSW1nTGlzdD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBUb3BDaGFydCA9IFJlYWN0Lm1lbW8oVG9wQ2hhcnRNZW1vKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhdGVnb3J0aWVzSW1nTGlzdCIsIlRvcFZpZGVvc0l0ZW0iLCJUZXN0SXNMb2FkaW5nIiwiZ2V0VG9wVmlld3NGZXRjaCIsIlRvcENoYXJ0TWVtbyIsImdldFRvcFZpZXdzIiwiYXJyIiwidXNlTWVtbyIsIkFycmF5IiwibWFwIiwiXyIsImkiLCJ0b3AiLCJpZGV4IiwiaW5kZXgiLCJpbWFnZSIsInByaXZVcmwiLCJ0aXRsZSIsImhyZWYiLCJfaWQiLCJUb3BDaGFydCIsIm1lbW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Categories/TopChart/index.tsx\n"));

/***/ })

});