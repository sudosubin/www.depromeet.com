webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Projects.tsx":
/*!*********************************!*\
  !*** ./components/Projects.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _resources_data_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/data/projects */ \"./resources/data/projects/index.js\");\n/* harmony import */ var _ProjectDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectDialog */ \"./components/ProjectDialog.tsx\");\n/* harmony import */ var _lib_projects_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/projects_grid */ \"./lib/projects_grid.ts\");\n\n\n\nvar _jsxFileName = \"/Users/gohhwain/work/depromeet/www.depromeet.com/components/Projects.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable react/no-array-index-key */\n\n\n\n\n\n\nvar Projects = function Projects(_ref) {\n  _s();\n\n  var _ref$isMainPage = _ref.isMainPage,\n      isMainPage = _ref$isMainPage === void 0 ? false : _ref$isMainPage,\n      _ref$expanded = _ref.expanded,\n      expanded = _ref$expanded === void 0 ? false : _ref$expanded;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    visible: false,\n    index: 0\n  }),\n      visible = _useState[0],\n      setVisible = _useState[1];\n\n  var showProjectDialog = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (projectId) {\n    setVisible({\n      visible: true,\n      index: projectId\n    });\n  }, [setVisible]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n      isMainPage: isMainPage,\n      expanded: expanded,\n      children: [_resources_data_projects__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (data, index) {\n        var ProjectIcon = data.icon();\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectSummary, {\n          role: \"button\",\n          tabIndex: 0,\n          onClick: function onClick() {\n            return showProjectDialog(index);\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"project--icon-wrapper\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectIcon, {\n              className: \"project--icon\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Overlay, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 19\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"project--title\",\n            children: data.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 17\n          }, _this)]\n        }, \"projects-item-\".concat(index), true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 15\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ProjectDialog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        visible: visible,\n        setVisible: setVisible\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Projects, \"N2oEZ45M3ccJkR8Boy8QZwLqAio=\");\n\n_c = Projects;\n\nvar MemoizedIcon = function MemoizedIcon(_ref2) {\n  var data = _ref2.data;\n  var ProjectIcon = data.icon();\n};\n\n_c2 = MemoizedIcon;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Projects__Container\",\n  componentId: \"ipkrpb-0\"\n})([\"display:grid;grid-auto-flow:row;grid-template-rows:repeat(\", \",minmax(17rem,21rem));grid-template-columns:repeat(\", \",minmax(17rem,17rem));gap:3.2rem 2.4rem;overflow:hidden;max-height:\", \";\"], function (_ref3) {\n  var isMainPage = _ref3.isMainPage,\n      expanded = _ref3.expanded;\n  return Object(_lib_projects_grid__WEBPACK_IMPORTED_MODULE_5__[\"calcRows\"])(isMainPage, expanded);\n}, function (_ref4) {\n  var isMainPage = _ref4.isMainPage;\n  return Object(_lib_projects_grid__WEBPACK_IMPORTED_MODULE_5__[\"calcColumns\"])(isMainPage);\n}, function (_ref5) {\n  var isMainPage = _ref5.isMainPage,\n      expanded = _ref5.expanded;\n  return Object(_lib_projects_grid__WEBPACK_IMPORTED_MODULE_5__[\"calcMaxHeight\"])(isMainPage, expanded);\n});\n_c3 = Container;\nvar ProjectSummary = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Projects__ProjectSummary\",\n  componentId: \"ipkrpb-1\"\n})([\"width:17rem;height:\", \";display:grid;overflow-y:hidden;.project{&--title{font-family:Apple SD Gothic Neo;font-style:normal;font-weight:800;font-size:1.6rem;line-height:1.9rem;text-align:center;letter-spacing:-0.03em;color:#FFFFFF;display:\", \"}&--icon-wrapper{width:17rem;height:17rem;border-radius:2.4rem;margin-bottom:2.4rem;position:relative;}&--icon{width:100%;height:100%;}}\"], function (_ref6) {\n  var isMainPage = _ref6.isMainPage;\n  return isMainPage === true ? '17rem' : '21rem';\n}, function (_ref7) {\n  var isMainPage = _ref7.isMainPage;\n  return isMainPage === true ? 'none' : 'block';\n});\n_c4 = ProjectSummary;\nvar Overlay = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Projects__Overlay\",\n  componentId: \"ipkrpb-2\"\n})([\"position:absolute;top:0;left:0;width:100%;height:100%;background:black;opacity:0;\", \":hover &{opacity:0.2;}\"], ProjectSummary);\n_c5 = Overlay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Projects\");\n$RefreshReg$(_c2, \"MemoizedIcon\");\n$RefreshReg$(_c3, \"Container\");\n$RefreshReg$(_c4, \"ProjectSummary\");\n$RefreshReg$(_c5, \"Overlay\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy50c3g/ODYyNSJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsImlzTWFpblBhZ2UiLCJleHBhbmRlZCIsInVzZVN0YXRlIiwidmlzaWJsZSIsImluZGV4Iiwic2V0VmlzaWJsZSIsInNob3dQcm9qZWN0RGlhbG9nIiwidXNlQ2FsbGJhY2siLCJwcm9qZWN0SWQiLCJwcm9qZWN0c0RhdGEiLCJtYXAiLCJkYXRhIiwiUHJvamVjdEljb24iLCJpY29uIiwidGl0bGUiLCJNZW1vaXplZEljb24iLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJjYWxjUm93cyIsImNhbGNDb2x1bW5zIiwiY2FsY01heEhlaWdodCIsIlByb2plY3RTdW1tYXJ5IiwiT3ZlcmxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxRQUEyQixHQUFHLFNBQTlCQSxRQUE4QixPQUE4QztBQUFBOztBQUFBLDZCQUEzQ0MsVUFBMkM7QUFBQSxNQUEzQ0EsVUFBMkMsZ0NBQTlCLEtBQThCO0FBQUEsMkJBQXZCQyxRQUF1QjtBQUFBLE1BQXZCQSxRQUF1Qiw4QkFBWixLQUFZOztBQUFBLGtCQUNsREMsc0RBQVEsQ0FBQztBQUFFQyxXQUFPLEVBQUUsS0FBWDtBQUFrQkMsU0FBSyxFQUFFO0FBQXpCLEdBQUQsQ0FEMEM7QUFBQSxNQUN6RUQsT0FEeUU7QUFBQSxNQUNoRUUsVUFEZ0U7O0FBRWhGLE1BQU1DLGlCQUFpQixHQUFHQyx5REFBVyxDQUFDLFVBQUNDLFNBQUQsRUFBdUI7QUFDM0RILGNBQVUsQ0FBQztBQUFFRixhQUFPLEVBQUUsSUFBWDtBQUFpQkMsV0FBSyxFQUFFSTtBQUF4QixLQUFELENBQVY7QUFDRCxHQUZvQyxFQUVsQyxDQUFDSCxVQUFELENBRmtDLENBQXJDO0FBSUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxTQUFEO0FBQVcsZ0JBQVUsRUFBRUwsVUFBdkI7QUFBbUMsY0FBUSxFQUFFQyxRQUE3QztBQUFBLGlCQUVJUSxnRUFBWSxDQUFDQyxHQUFiLENBQWlCLFVBQUNDLElBQUQsRUFBT1AsS0FBUCxFQUFpQjtBQUNoQyxZQUFNUSxXQUFXLEdBQUdELElBQUksQ0FBQ0UsSUFBTCxFQUFwQjtBQUNBLDRCQUNFLHFFQUFDLGNBQUQ7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGtCQUFRLEVBQUUsQ0FGWjtBQUlFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVAsaUJBQWlCLENBQUNGLEtBQUQsQ0FBdkI7QUFBQSxXQUpYO0FBQUEsa0NBTUU7QUFBSyxxQkFBUyxFQUFDLHVCQUFmO0FBQUEsb0NBQ0UscUVBQUMsV0FBRDtBQUFhLHVCQUFTLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFVRTtBQUFLLHFCQUFTLEVBQUMsZ0JBQWY7QUFBQSxzQkFBaUNPLElBQUksQ0FBQ0c7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBLG1DQUd3QlYsS0FIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQWNELE9BaEJELENBRkosZUFvQkUscUVBQUMsc0RBQUQ7QUFBZSxlQUFPLEVBQUVELE9BQXhCO0FBQWlDLGtCQUFVLEVBQUVFO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUEwQkQsQ0FoQ0Q7O0dBQU1OLFE7O0tBQUFBLFE7O0FBa0NOLElBQU1nQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxRQUFjO0FBQUEsTUFBWEosSUFBVyxTQUFYQSxJQUFXO0FBQ2pDLE1BQU1DLFdBQVcsR0FBR0QsSUFBSSxDQUFDRSxJQUFMLEVBQXBCO0FBQ0QsQ0FGRDs7TUFBTUUsWTtBQUlOLElBQU1DLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzTUFHZ0I7QUFBQSxNQUFHbEIsVUFBSCxTQUFHQSxVQUFIO0FBQUEsTUFBZUMsUUFBZixTQUFlQSxRQUFmO0FBQUEsU0FBOEJrQixtRUFBUSxDQUFDbkIsVUFBRCxFQUFhQyxRQUFiLENBQXRDO0FBQUEsQ0FIaEIsRUFJbUI7QUFBQSxNQUFHRCxVQUFILFNBQUdBLFVBQUg7QUFBQSxTQUFvQm9CLHNFQUFXLENBQUNwQixVQUFELENBQS9CO0FBQUEsQ0FKbkIsRUFPQztBQUFBLE1BQUdBLFVBQUgsU0FBR0EsVUFBSDtBQUFBLE1BQWVDLFFBQWYsU0FBZUEsUUFBZjtBQUFBLFNBQThCb0Isd0VBQWEsQ0FBQ3JCLFVBQUQsRUFBYUMsUUFBYixDQUEzQztBQUFBLENBUEQsQ0FBZjtNQUFNZSxTO0FBVU4sSUFBTU0sY0FBYyxHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1ZQUVSO0FBQUEsTUFBR2xCLFVBQUgsU0FBR0EsVUFBSDtBQUFBLFNBQXFCQSxVQUFVLEtBQUssSUFBZixHQUFzQixPQUF0QixHQUFnQyxPQUFyRDtBQUFBLENBRlEsRUFlSDtBQUFBLE1BQUdBLFVBQUgsU0FBR0EsVUFBSDtBQUFBLFNBQXFCQSxVQUFVLEtBQUssSUFBZixHQUFzQixNQUF0QixHQUErQixPQUFwRDtBQUFBLENBZkcsQ0FBcEI7TUFBTXNCLGM7QUErQk4sSUFBTUMsT0FBTyxHQUFHTix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9IQVFUSSxjQVJTLENBQWI7TUFBTUMsTztBQWFTeEIsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBGQywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vLFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcHJvamVjdHNEYXRhIGZyb20gJy4uL3Jlc291cmNlcy9kYXRhL3Byb2plY3RzJztcbmltcG9ydCBQcm9qZWN0RGlhbG9nIGZyb20gJy4vUHJvamVjdERpYWxvZyc7XG5pbXBvcnQgeyBjYWxjUm93cywgY2FsY0NvbHVtbnMsIGNhbGNNYXhIZWlnaHQgfSBmcm9tICcuLi9saWIvcHJvamVjdHNfZ3JpZCc7XG5cbmludGVyZmFjZSBQcm9qZWN0c1Byb3BzIHtcbiAgaXNNYWluUGFnZT86IGJvb2xlYW47XG4gIGV4cGFuZGVkPzogYm9vbGVhbjtcbn1cblxuY29uc3QgUHJvamVjdHM6IEZDPFByb2plY3RzUHJvcHM+ID0gKHsgaXNNYWluUGFnZSA9IGZhbHNlLCBleHBhbmRlZCA9IGZhbHNlIH0pID0+IHtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoeyB2aXNpYmxlOiBmYWxzZSwgaW5kZXg6IDAgfSk7XG4gIGNvbnN0IHNob3dQcm9qZWN0RGlhbG9nID0gdXNlQ2FsbGJhY2soKHByb2plY3RJZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0VmlzaWJsZSh7IHZpc2libGU6IHRydWUsIGluZGV4OiBwcm9qZWN0SWQgfSk7XG4gIH0sIFtzZXRWaXNpYmxlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lciBpc01haW5QYWdlPXtpc01haW5QYWdlfSBleHBhbmRlZD17ZXhwYW5kZWR9PlxuICAgICAgICB7XG4gICAgICAgICAgcHJvamVjdHNEYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFByb2plY3RJY29uID0gZGF0YS5pY29uKCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UHJvamVjdFN1bW1hcnlcbiAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICAgICAgICBrZXk9e2Bwcm9qZWN0cy1pdGVtLSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93UHJvamVjdERpYWxvZyhpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtLWljb24td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPFByb2plY3RJY29uIGNsYXNzTmFtZT1cInByb2plY3QtLWljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPE92ZXJsYXkgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtLXRpdGxlXCI+e2RhdGEudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgIDwvUHJvamVjdFN1bW1hcnk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgPFByb2plY3REaWFsb2cgdmlzaWJsZT17dmlzaWJsZX0gc2V0VmlzaWJsZT17c2V0VmlzaWJsZX0gLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTWVtb2l6ZWRJY29uID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IFByb2plY3RJY29uID0gZGF0YS5pY29uKCk7XG59O1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PFByb2plY3RzUHJvcHM+YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tZmxvdzogcm93O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgkeyh7IGlzTWFpblBhZ2UsIGV4cGFuZGVkIH0pID0+IGNhbGNSb3dzKGlzTWFpblBhZ2UsIGV4cGFuZGVkKX0sIG1pbm1heCgxN3JlbSwgMjFyZW0pKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJHsoeyBpc01haW5QYWdlIH0pID0+IGNhbGNDb2x1bW5zKGlzTWFpblBhZ2UpfSwgbWlubWF4KDE3cmVtLCAxN3JlbSkpO1xuICBnYXA6IDMuMnJlbSAyLjRyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6ICR7KHsgaXNNYWluUGFnZSwgZXhwYW5kZWQgfSkgPT4gY2FsY01heEhlaWdodChpc01haW5QYWdlLCBleHBhbmRlZCl9O1xuYDtcblxuY29uc3QgUHJvamVjdFN1bW1hcnkgPSBzdHlsZWQuZGl2PFByb2plY3RzUHJvcHM+YFxuICB3aWR0aDogMTdyZW07XG4gIGhlaWdodDogJHsoeyBpc01haW5QYWdlIH0pID0+IChpc01haW5QYWdlID09PSB0cnVlID8gJzE3cmVtJyA6ICcyMXJlbScpfTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAucHJvamVjdCB7XG4gICAgJi0tdGl0bGUge1xuICAgICAgZm9udC1mYW1pbHk6IEFwcGxlIFNEIEdvdGhpYyBOZW87XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS45cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07XG4gICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgIGRpc3BsYXk6ICR7KHsgaXNNYWluUGFnZSB9KSA9PiAoaXNNYWluUGFnZSA9PT0gdHJ1ZSA/ICdub25lJyA6ICdibG9jaycpfVxuICAgIH1cbiAgICAmLS1pY29uLXdyYXBwZXIge1xuICAgICAgd2lkdGg6IDE3cmVtO1xuICAgICAgaGVpZ2h0OiAxN3JlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIuNHJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIuNHJlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgJi0taWNvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IE92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogYmxhY2sgO1xuICBvcGFjaXR5OiAwO1xuICAke1Byb2plY3RTdW1tYXJ5fTpob3ZlciAmIHtcbiAgICBvcGFjaXR5OiAwLjI7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Projects.tsx\n");

/***/ })

})