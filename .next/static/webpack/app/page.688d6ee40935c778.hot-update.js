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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TopChart: function() { return /* binding */ TopChart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TopList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopList */ \"(app-pages-browser)/./src/components/Categories/TopChart/TopList.tsx\");\n/* harmony import */ var _TopVideo_TopVideosItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TopVideo/TopVideosItem */ \"(app-pages-browser)/./src/components/Categories/TopVideo/TopVideosItem.tsx\");\n/* harmony import */ var _components_TestIsLoading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/TestIsLoading */ \"(app-pages-browser)/./src/components/TestIsLoading.tsx\");\n/* harmony import */ var _app_actions_categoryFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/actions/categoryFetch */ \"(app-pages-browser)/./src/app/actions/categoryFetch.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n/* import { useShortsQuery } from \"@/hooks/useShortsAndPostsQuery\"; */ const TopChartMemo = async ()=>{\n    _s();\n    /* const { data: topPost } = useShortsQuery(getTopViews, \"getTop\"); */ const getTopViews = (0,_app_actions_categoryFetch__WEBPACK_IMPORTED_MODULE_5__.getTopViewsFetch)();\n    const arr = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(()=>{\n        return [\n            ...Array(4)\n        ].map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TestIsLoading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, i, false, {\n                fileName: \"/Users/user/Desktop/xiu mne a ne life/plice/src/components/Categories/TopChart/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 40\n            }, undefined));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TopList__WEBPACK_IMPORTED_MODULE_2__.CategortiesImgList, {\n        children: getTopViews ? getTopViews.map((top, idex)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TopVideo_TopVideosItem__WEBPACK_IMPORTED_MODULE_3__.TopVideosItem, {\n                index: idex + 1,\n                image: top.privUrl,\n                title: top.title,\n                href: top._id\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/xiu mne a ne life/plice/src/components/Categories/TopChart/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 15\n            }, undefined);\n        }) : arr\n    }, void 0, false, {\n        fileName: \"/Users/user/Desktop/xiu mne a ne life/plice/src/components/Categories/TopChart/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TopChartMemo, \"q1xb2adMSywW4wo/M23Mu0ssEgU=\");\n_c = TopChartMemo;\nconst TopChart = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().memo(TopChartMemo);\n_c1 = TopChart;\nvar _c, _c1;\n$RefreshReg$(_c, \"TopChartMemo\");\n$RefreshReg$(_c1, \"TopChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NhdGVnb3JpZXMvVG9wQ2hhcnQvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFFcUI7QUFFVztBQUlIO0FBQ1E7QUFDL0Qsb0VBQW9FLEdBRXBFLE1BQU1LLGVBQWU7O0lBQ25CLG9FQUFvRSxHQUVwRSxNQUFNQyxjQUFjRiw0RUFBZ0JBO0lBRXBDLE1BQU1HLE1BQU1QLG9EQUFhLENBQUM7UUFDeEIsT0FBTztlQUFJUyxNQUFNO1NBQUcsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUFNLDhEQUFDVCxpRUFBYUEsTUFBTVM7Ozs7O0lBQ3pELEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDWCx3REFBa0JBO2tCQUNoQkssY0FDR0EsWUFBWUksR0FBRyxDQUFDLENBQUNHLEtBQVlDO1lBQzNCLHFCQUNFLDhEQUFDWixrRUFBYUE7Z0JBQ1phLE9BQU9ELE9BQU87Z0JBQ2RFLE9BQU9ILElBQUlJLE9BQU87Z0JBQ2xCQyxPQUFPTCxJQUFJSyxLQUFLO2dCQUNoQkMsTUFBTU4sSUFBSU8sR0FBRzs7Ozs7O1FBR25CLEtBQ0FiOzs7Ozs7QUFHVjtHQXpCTUY7S0FBQUE7QUEyQkMsTUFBTWdCLHlCQUFXckIsaURBQVUsQ0FBQ0ssY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXRlZ29yaWVzL1RvcENoYXJ0L2luZGV4LnRzeD8wYjNhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IENhdGVnb3J0aWVzSW1nTGlzdCB9IGZyb20gXCIuL1RvcExpc3RcIjtcblxuaW1wb3J0IHsgVG9wVmlkZW9zSXRlbSB9IGZyb20gXCIuLi9Ub3BWaWRlby9Ub3BWaWRlb3NJdGVtXCI7XG5pbXBvcnQgeyBJUG9zdCB9IGZyb20gXCJAL3R5cGVzL1Bvc3RcIjtcbmltcG9ydCB7IGdldFRvcFZpZXdzIH0gZnJvbSBcIkAvYXBpL3Byb2R1Y3RzXCI7XG5cbmltcG9ydCBUZXN0SXNMb2FkaW5nIGZyb20gXCJAL2NvbXBvbmVudHMvVGVzdElzTG9hZGluZ1wiO1xuaW1wb3J0IHsgZ2V0VG9wVmlld3NGZXRjaCB9IGZyb20gXCJAL2FwcC9hY3Rpb25zL2NhdGVnb3J5RmV0Y2hcIjtcbi8qIGltcG9ydCB7IHVzZVNob3J0c1F1ZXJ5IH0gZnJvbSBcIkAvaG9va3MvdXNlU2hvcnRzQW5kUG9zdHNRdWVyeVwiOyAqL1xuXG5jb25zdCBUb3BDaGFydE1lbW8gPSBhc3luYyAoKSA9PiB7XG4gIC8qIGNvbnN0IHsgZGF0YTogdG9wUG9zdCB9ID0gdXNlU2hvcnRzUXVlcnkoZ2V0VG9wVmlld3MsIFwiZ2V0VG9wXCIpOyAqL1xuXG4gIGNvbnN0IGdldFRvcFZpZXdzID0gZ2V0VG9wVmlld3NGZXRjaCgpO1xuXG4gIGNvbnN0IGFyciA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBbLi4uQXJyYXkoNCldLm1hcCgoXywgaSkgPT4gPFRlc3RJc0xvYWRpbmcga2V5PXtpfSAvPik7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXRlZ29ydGllc0ltZ0xpc3Q+XG4gICAgICB7Z2V0VG9wVmlld3NcbiAgICAgICAgPyBnZXRUb3BWaWV3cy5tYXAoKHRvcDogSVBvc3QsIGlkZXg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFRvcFZpZGVvc0l0ZW1cbiAgICAgICAgICAgICAgICBpbmRleD17aWRleCArIDF9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e3RvcC5wcml2VXJsfVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0b3AudGl0bGV9XG4gICAgICAgICAgICAgICAgaHJlZj17dG9wLl9pZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBhcnJ9XG4gICAgPC9DYXRlZ29ydGllc0ltZ0xpc3Q+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgVG9wQ2hhcnQgPSBSZWFjdC5tZW1vKFRvcENoYXJ0TWVtbyk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXRlZ29ydGllc0ltZ0xpc3QiLCJUb3BWaWRlb3NJdGVtIiwiVGVzdElzTG9hZGluZyIsImdldFRvcFZpZXdzRmV0Y2giLCJUb3BDaGFydE1lbW8iLCJnZXRUb3BWaWV3cyIsImFyciIsInVzZU1lbW8iLCJBcnJheSIsIm1hcCIsIl8iLCJpIiwidG9wIiwiaWRleCIsImluZGV4IiwiaW1hZ2UiLCJwcml2VXJsIiwidGl0bGUiLCJocmVmIiwiX2lkIiwiVG9wQ2hhcnQiLCJtZW1vIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Categories/TopChart/index.tsx\n"));

/***/ })

});