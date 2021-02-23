webpackHotUpdate_N_E("pages/project",{

/***/ "./components/Projects.tsx":
/*!*********************************!*\
  !*** ./components/Projects.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _resources_data_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/data/projects */ \"./resources/data/projects/index.js\");\n/* harmony import */ var _ProjectDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectDialog */ \"./components/ProjectDialog.tsx\");\n/* harmony import */ var _lib_projects_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/projects_grid */ \"./lib/projects_grid.ts\");\n\n\n\nvar _jsxFileName = \"/Users/gohhwain/work/depromeet/www.depromeet.com/components/Projects.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n/* eslint-disable react/no-array-index-key */\n\n\n\n\n\n\nvar Projects = function Projects(_ref) {\n  _s();\n\n  var _ref$isMainPage = _ref.isMainPage,\n      isMainPage = _ref$isMainPage === void 0 ? false : _ref$isMainPage,\n      _ref$expanded = _ref.expanded,\n      expanded = _ref$expanded === void 0 ? false : _ref$expanded;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    visible: false,\n    index: 0\n  }),\n      visible = _useState[0],\n      setVisible = _useState[1];\n\n  var showProjectDialog = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (projectId) {\n    setVisible({\n      visible: true,\n      index: projectId\n    });\n  }, [setVisible]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n      isMainPage: isMainPage,\n      expanded: expanded,\n      children: [_resources_data_projects__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (data, index) {\n        var ProjectIcon = data.icon();\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectSummary, {\n          role: \"button\",\n          tabIndex: 0,\n          onClick: function onClick() {\n            return showProjectDialog(index);\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"project--icon-wrapper\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectIcon, {\n              className: \"project--icon\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Overlay, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 19\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"project--title\",\n            children: data.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 17\n          }, _this)]\n        }, \"projects-item-\".concat(index), true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 15\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ProjectDialog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        visible: visible,\n        setVisible: setVisible\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Projects, \"N2oEZ45M3ccJkR8Boy8QZwLqAio=\");\n\n_c = Projects;\n\nvar MemoizedIcon = function MemoizedIcon(_ref2) {\n  var data = _ref2.data;\n  var ProjectIcon = data.icon();\n};\n\n_c2 = MemoizedIcon;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Projects__Container\",\n  componentId: \"ipkrpb-0\"\n})([\"display:grid;grid-auto-flow:row;grid-template-rows:repeat(\", \",minmax(17rem,21rem));grid-template-columns:repeat(\", \",minmax(17rem,17rem));gap:3.2rem 2.4rem;overflow:hidden;max-height:\", \";\"], function (_ref3) {\n  var isMainPage = _ref3.isMainPage,\n      expanded = _ref3.expanded;\n  return Object(_lib_projects_grid__WEBPACK_IMPORTED_MODULE_5__[\"calcRows\"])(isMainPage, expanded);\n}, function (_ref4) {\n  var isMainPage = _ref4.isMainPage;\n  return Object(_lib_projects_grid__WEBPACK_IMPORTED_MODULE_5__[\"calcColumns\"])(isMainPage);\n}, function (_ref5) {\n  var isMainPage = _ref5.isMainPage,\n      expanded = _ref5.expanded;\n  return Object(_lib_projects_grid__WEBPACK_IMPORTED_MODULE_5__[\"calcMaxHeight\"])(isMainPage, expanded);\n});\n_c3 = Container;\nvar ProjectSummary = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Projects__ProjectSummary\",\n  componentId: \"ipkrpb-1\"\n})([\"width:17rem;height:\", \";display:grid;overflow-y:hidden;.project{&--title{font-family:Apple SD Gothic Neo;font-style:normal;font-weight:800;font-size:1.6rem;line-height:1.9rem;text-align:center;letter-spacing:-0.03em;color:#FFFFFF;display:\", \"}&--icon-wrapper{width:17rem;height:17rem;border-radius:2.4rem;margin-bottom:2.4rem;position:relative;}&--icon{width:100%;height:100%;}}\"], function (_ref6) {\n  var isMainPage = _ref6.isMainPage;\n  return isMainPage === true ? '17rem' : '21rem';\n}, function (_ref7) {\n  var isMainPage = _ref7.isMainPage;\n  return isMainPage === true ? 'none' : 'block';\n});\n_c4 = ProjectSummary;\nvar Overlay = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Projects__Overlay\",\n  componentId: \"ipkrpb-2\"\n})([\"position:absolute;top:0;left:0;width:100%;height:100%;background:black;opacity:0;\", \":hover &{opacity:0.2;}\"], ProjectSummary);\n_c5 = Overlay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Projects\");\n$RefreshReg$(_c2, \"MemoizedIcon\");\n$RefreshReg$(_c3, \"Container\");\n$RefreshReg$(_c4, \"ProjectSummary\");\n$RefreshReg$(_c5, \"Overlay\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy50c3g/ODYyNSJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsImlzTWFpblBhZ2UiLCJleHBhbmRlZCIsInVzZVN0YXRlIiwidmlzaWJsZSIsImluZGV4Iiwic2V0VmlzaWJsZSIsInNob3dQcm9qZWN0RGlhbG9nIiwidXNlQ2FsbGJhY2siLCJwcm9qZWN0SWQiLCJwcm9qZWN0c0RhdGEiLCJtYXAiLCJkYXRhIiwiUHJvamVjdEljb24iLCJpY29uIiwidGl0bGUiLCJNZW1vaXplZEljb24iLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJjYWxjUm93cyIsImNhbGNDb2x1bW5zIiwiY2FsY01heEhlaWdodCIsIlByb2plY3RTdW1tYXJ5IiwiT3ZlcmxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxRQUEyQixHQUFHLFNBQTlCQSxRQUE4QixPQUE4QztBQUFBOztBQUFBLDZCQUEzQ0MsVUFBMkM7QUFBQSxNQUEzQ0EsVUFBMkMsZ0NBQTlCLEtBQThCO0FBQUEsMkJBQXZCQyxRQUF1QjtBQUFBLE1BQXZCQSxRQUF1Qiw4QkFBWixLQUFZOztBQUFBLGtCQUNsREMsc0RBQVEsQ0FBQztBQUFFQyxXQUFPLEVBQUUsS0FBWDtBQUFrQkMsU0FBSyxFQUFFO0FBQXpCLEdBQUQsQ0FEMEM7QUFBQSxNQUN6RUQsT0FEeUU7QUFBQSxNQUNoRUUsVUFEZ0U7O0FBRWhGLE1BQU1DLGlCQUFpQixHQUFHQyx5REFBVyxDQUFDLFVBQUNDLFNBQUQsRUFBdUI7QUFDM0RILGNBQVUsQ0FBQztBQUFFRixhQUFPLEVBQUUsSUFBWDtBQUFpQkMsV0FBSyxFQUFFSTtBQUF4QixLQUFELENBQVY7QUFDRCxHQUZvQyxFQUVsQyxDQUFDSCxVQUFELENBRmtDLENBQXJDO0FBSUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxTQUFEO0FBQVcsZ0JBQVUsRUFBRUwsVUFBdkI7QUFBbUMsY0FBUSxFQUFFQyxRQUE3QztBQUFBLGlCQUVJUSxnRUFBWSxDQUFDQyxHQUFiLENBQWlCLFVBQUNDLElBQUQsRUFBT1AsS0FBUCxFQUFpQjtBQUNoQyxZQUFNUSxXQUFXLEdBQUdELElBQUksQ0FBQ0UsSUFBTCxFQUFwQjtBQUNBLDRCQUNFLHFFQUFDLGNBQUQ7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGtCQUFRLEVBQUUsQ0FGWjtBQUlFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTVAsaUJBQWlCLENBQUNGLEtBQUQsQ0FBdkI7QUFBQSxXQUpYO0FBQUEsa0NBTUU7QUFBSyxxQkFBUyxFQUFDLHVCQUFmO0FBQUEsb0NBQ0UscUVBQUMsV0FBRDtBQUFhLHVCQUFTLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFVRTtBQUFLLHFCQUFTLEVBQUMsZ0JBQWY7QUFBQSxzQkFBaUNPLElBQUksQ0FBQ0c7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBLG1DQUd3QlYsS0FIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQWNELE9BaEJELENBRkosZUFvQkUscUVBQUMsc0RBQUQ7QUFBZSxlQUFPLEVBQUVELE9BQXhCO0FBQWlDLGtCQUFVLEVBQUVFO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUEwQkQsQ0FoQ0Q7O0dBQU1OLFE7O0tBQUFBLFE7O0FBa0NOLElBQU1nQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxRQUFjO0FBQUEsTUFBWEosSUFBVyxTQUFYQSxJQUFXO0FBQ2pDLE1BQU1DLFdBQVcsR0FBR0QsSUFBSSxDQUFDRSxJQUFMLEVBQXBCO0FBQ0QsQ0FGRDs7TUFBTUUsWTtBQUlOLElBQU1DLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzTUFHZ0I7QUFBQSxNQUFHbEIsVUFBSCxTQUFHQSxVQUFIO0FBQUEsTUFBZUMsUUFBZixTQUFlQSxRQUFmO0FBQUEsU0FBOEJrQixtRUFBUSxDQUFDbkIsVUFBRCxFQUFhQyxRQUFiLENBQXRDO0FBQUEsQ0FIaEIsRUFJbUI7QUFBQSxNQUFHRCxVQUFILFNBQUdBLFVBQUg7QUFBQSxTQUFvQm9CLHNFQUFXLENBQUNwQixVQUFELENBQS9CO0FBQUEsQ0FKbkIsRUFPQztBQUFBLE1BQUdBLFVBQUgsU0FBR0EsVUFBSDtBQUFBLE1BQWVDLFFBQWYsU0FBZUEsUUFBZjtBQUFBLFNBQThCb0Isd0VBQWEsQ0FBQ3JCLFVBQUQsRUFBYUMsUUFBYixDQUEzQztBQUFBLENBUEQsQ0FBZjtNQUFNZSxTO0FBVU4sSUFBTU0sY0FBYyxHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1ZQUVSO0FBQUEsTUFBR2xCLFVBQUgsU0FBR0EsVUFBSDtBQUFBLFNBQXFCQSxVQUFVLEtBQUssSUFBZixHQUFzQixPQUF0QixHQUFnQyxPQUFyRDtBQUFBLENBRlEsRUFlSDtBQUFBLE1BQUdBLFVBQUgsU0FBR0EsVUFBSDtBQUFBLFNBQXFCQSxVQUFVLEtBQUssSUFBZixHQUFzQixNQUF0QixHQUErQixPQUFwRDtBQUFBLENBZkcsQ0FBcEI7TUFBTXNCLGM7QUErQk4sSUFBTUMsT0FBTyxHQUFHTix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9IQVFUSSxjQVJTLENBQWI7TUFBTUMsTztBQWFTeEIsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGQywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb2plY3RzRGF0YSBmcm9tICcuLi9yZXNvdXJjZXMvZGF0YS9wcm9qZWN0cyc7XG5pbXBvcnQgUHJvamVjdERpYWxvZyBmcm9tICcuL1Byb2plY3REaWFsb2cnO1xuaW1wb3J0IHsgY2FsY1Jvd3MsIGNhbGNDb2x1bW5zLCBjYWxjTWF4SGVpZ2h0IH0gZnJvbSAnLi4vbGliL3Byb2plY3RzX2dyaWQnO1xuXG5pbnRlcmZhY2UgUHJvamVjdHNQcm9wcyB7XG4gIGlzTWFpblBhZ2U/OiBib29sZWFuO1xuICBleHBhbmRlZD86IGJvb2xlYW47XG59XG5cbmNvbnN0IFByb2plY3RzOiBGQzxQcm9qZWN0c1Byb3BzPiA9ICh7IGlzTWFpblBhZ2UgPSBmYWxzZSwgZXhwYW5kZWQgPSBmYWxzZSB9KSA9PiB7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHsgdmlzaWJsZTogZmFsc2UsIGluZGV4OiAwIH0pO1xuICBjb25zdCBzaG93UHJvamVjdERpYWxvZyA9IHVzZUNhbGxiYWNrKChwcm9qZWN0SWQ6IG51bWJlcikgPT4ge1xuICAgIHNldFZpc2libGUoeyB2aXNpYmxlOiB0cnVlLCBpbmRleDogcHJvamVjdElkIH0pO1xuICB9LCBbc2V0VmlzaWJsZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXIgaXNNYWluUGFnZT17aXNNYWluUGFnZX0gZXhwYW5kZWQ9e2V4cGFuZGVkfT5cbiAgICAgICAge1xuICAgICAgICAgIHByb2plY3RzRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBQcm9qZWN0SWNvbiA9IGRhdGEuaWNvbigpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFByb2plY3RTdW1tYXJ5XG4gICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICAgICAga2V5PXtgcHJvamVjdHMtaXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd1Byb2plY3REaWFsb2coaW5kZXgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LS1pY29uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxQcm9qZWN0SWNvbiBjbGFzc05hbWU9XCJwcm9qZWN0LS1pY29uXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxPdmVybGF5IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LS10aXRsZVwiPntkYXRhLnRpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICA8L1Byb2plY3RTdW1tYXJ5PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDxQcm9qZWN0RGlhbG9nIHZpc2libGU9e3Zpc2libGV9IHNldFZpc2libGU9e3NldFZpc2libGV9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbW9pemVkSWNvbiA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCBQcm9qZWN0SWNvbiA9IGRhdGEuaWNvbigpO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxQcm9qZWN0c1Byb3BzPmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoJHsoeyBpc01haW5QYWdlLCBleHBhbmRlZCB9KSA9PiBjYWxjUm93cyhpc01haW5QYWdlLCBleHBhbmRlZCl9LCBtaW5tYXgoMTdyZW0sIDIxcmVtKSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCR7KHsgaXNNYWluUGFnZSB9KSA9PiBjYWxjQ29sdW1ucyhpc01haW5QYWdlKX0sIG1pbm1heCgxN3JlbSwgMTdyZW0pKTtcbiAgZ2FwOiAzLjJyZW0gMi40cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiAkeyh7IGlzTWFpblBhZ2UsIGV4cGFuZGVkIH0pID0+IGNhbGNNYXhIZWlnaHQoaXNNYWluUGFnZSwgZXhwYW5kZWQpfTtcbmA7XG5cbmNvbnN0IFByb2plY3RTdW1tYXJ5ID0gc3R5bGVkLmRpdjxQcm9qZWN0c1Byb3BzPmBcbiAgd2lkdGg6IDE3cmVtO1xuICBoZWlnaHQ6ICR7KHsgaXNNYWluUGFnZSB9KSA9PiAoaXNNYWluUGFnZSA9PT0gdHJ1ZSA/ICcxN3JlbScgOiAnMjFyZW0nKX07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgLnByb2plY3Qge1xuICAgICYtLXRpdGxlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBBcHBsZSBTRCBHb3RoaWMgTmVvO1xuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuOXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xuICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICBkaXNwbGF5OiAkeyh7IGlzTWFpblBhZ2UgfSkgPT4gKGlzTWFpblBhZ2UgPT09IHRydWUgPyAnbm9uZScgOiAnYmxvY2snKX1cbiAgICB9XG4gICAgJi0taWNvbi13cmFwcGVyIHtcbiAgICAgIHdpZHRoOiAxN3JlbTtcbiAgICAgIGhlaWdodDogMTdyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAyLjRyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjRyZW07XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgICYtLWljb24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGJsYWNrIDtcbiAgb3BhY2l0eTogMDtcbiAgJHtQcm9qZWN0U3VtbWFyeX06aG92ZXIgJiB7XG4gICAgb3BhY2l0eTogMC4yO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Projects.tsx\n");

/***/ })

})