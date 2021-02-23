webpackHotUpdate_N_E("pages/project",{

/***/ "./components/Projects.tsx":
/*!*********************************!*\
  !*** ./components/Projects.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _resources_data_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resources/data/projects */ \"./resources/data/projects/index.js\");\n/* harmony import */ var _ProjectDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectDialog */ \"./components/ProjectDialog.tsx\");\n/* harmony import */ var _lib_projects_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/projects_grid */ \"./lib/projects_grid.ts\");\n\n\n\nvar _jsxFileName = \"/Users/gohhwain/work/depromeet/www.depromeet.com/components/Projects.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n/* eslint-disable react/no-array-index-key */\n\n\n\n\n\n\nvar Projects = function Projects(_ref) {\n  _s();\n\n  var _ref$isMainPage = _ref.isMainPage,\n      isMainPage = _ref$isMainPage === void 0 ? false : _ref$isMainPage,\n      _ref$expanded = _ref.expanded,\n      expanded = _ref$expanded === void 0 ? false : _ref$expanded;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    visible: false,\n    index: 0\n  }),\n      visible = _useState[0],\n      setVisible = _useState[1];\n\n  var showProjectDialog = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (projectId) {\n    setVisible({\n      visible: true,\n      index: projectId\n    });\n  }, [setVisible]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n      isMainPage: isMainPage,\n      expanded: expanded,\n      children: [_resources_data_projects__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function (data, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectSummary, {\n          role: \"button\",\n          tabIndex: 0,\n          onClick: function onClick() {\n            return showProjectDialog(index);\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"project--icon-wrapper\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(MemoizedIcon, {\n              data: data\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Overlay, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"project--title\",\n            children: data.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 15\n          }, _this)]\n        }, \"projects-item-\".concat(index), true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ProjectDialog__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        visible: visible,\n        setVisible: setVisible\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(Projects, \"N2oEZ45M3ccJkR8Boy8QZwLqAio=\");\n\n_c = Projects;\n\nvar MemoizedIcon = function MemoizedIcon(_ref2) {\n  _s2();\n\n  var data = _ref2.data;\n  var ProjectIcon = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return data.icon();\n  }, [data]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectIcon, {\n    className: \"project--icon\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 10\n  }, _this);\n};\n\n_s2(MemoizedIcon, \"wlpRPnx8DduBdjQ6E74ssmM5vs0=\");\n\n_c2 = MemoizedIcon;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Projects__Container\",\n  componentId: \"ipkrpb-0\"\n})([\"display:grid;grid-auto-flow:row;grid-template-rows:repeat(\", \",minmax(17rem,21rem));grid-template-columns:repeat(\", \",minmax(17rem,17rem));gap:3.2rem 2.4rem;overflow:hidden;max-height:\", \";\"], function (_ref3) {\n  var isMainPage = _ref3.isMainPage,\n      expanded = _ref3.expanded;\n  return Object(_lib_projects_grid__WEBPACK_IMPORTED_MODULE_5__[\"calcRows\"])(isMainPage, expanded);\n}, function (_ref4) {\n  var isMainPage = _ref4.isMainPage;\n  return Object(_lib_projects_grid__WEBPACK_IMPORTED_MODULE_5__[\"calcColumns\"])(isMainPage);\n}, function (_ref5) {\n  var isMainPage = _ref5.isMainPage,\n      expanded = _ref5.expanded;\n  return Object(_lib_projects_grid__WEBPACK_IMPORTED_MODULE_5__[\"calcMaxHeight\"])(isMainPage, expanded);\n});\n_c3 = Container;\nvar ProjectSummary = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Projects__ProjectSummary\",\n  componentId: \"ipkrpb-1\"\n})([\"width:17rem;height:\", \";display:grid;overflow-y:hidden;.project{&--title{font-family:Apple SD Gothic Neo;font-style:normal;font-weight:800;font-size:1.6rem;line-height:1.9rem;text-align:center;letter-spacing:-0.03em;color:#FFFFFF;display:\", \"}&--icon-wrapper{width:17rem;height:17rem;border-radius:2.4rem;margin-bottom:2.4rem;position:relative;}&--icon{width:100%;height:100%;}}\"], function (_ref6) {\n  var isMainPage = _ref6.isMainPage;\n  return isMainPage === true ? '17rem' : '21rem';\n}, function (_ref7) {\n  var isMainPage = _ref7.isMainPage;\n  return isMainPage === true ? 'none' : 'block';\n});\n_c4 = ProjectSummary;\nvar Overlay = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Projects__Overlay\",\n  componentId: \"ipkrpb-2\"\n})([\"position:absolute;top:0;left:0;width:100%;height:100%;background:black;opacity:0;\", \":hover &{opacity:0.2;}\"], ProjectSummary);\n_c5 = Overlay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Projects\");\n$RefreshReg$(_c2, \"MemoizedIcon\");\n$RefreshReg$(_c3, \"Container\");\n$RefreshReg$(_c4, \"ProjectSummary\");\n$RefreshReg$(_c5, \"Overlay\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy50c3g/ODYyNSJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsImlzTWFpblBhZ2UiLCJleHBhbmRlZCIsInVzZVN0YXRlIiwidmlzaWJsZSIsImluZGV4Iiwic2V0VmlzaWJsZSIsInNob3dQcm9qZWN0RGlhbG9nIiwidXNlQ2FsbGJhY2siLCJwcm9qZWN0SWQiLCJwcm9qZWN0c0RhdGEiLCJtYXAiLCJkYXRhIiwidGl0bGUiLCJNZW1vaXplZEljb24iLCJQcm9qZWN0SWNvbiIsInVzZU1lbW8iLCJpY29uIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiY2FsY1Jvd3MiLCJjYWxjQ29sdW1ucyIsImNhbGNNYXhIZWlnaHQiLCJQcm9qZWN0U3VtbWFyeSIsIk92ZXJsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLFFBQTJCLEdBQUcsU0FBOUJBLFFBQThCLE9BQThDO0FBQUE7O0FBQUEsNkJBQTNDQyxVQUEyQztBQUFBLE1BQTNDQSxVQUEyQyxnQ0FBOUIsS0FBOEI7QUFBQSwyQkFBdkJDLFFBQXVCO0FBQUEsTUFBdkJBLFFBQXVCLDhCQUFaLEtBQVk7O0FBQUEsa0JBQ2xEQyxzREFBUSxDQUFDO0FBQUVDLFdBQU8sRUFBRSxLQUFYO0FBQWtCQyxTQUFLLEVBQUU7QUFBekIsR0FBRCxDQUQwQztBQUFBLE1BQ3pFRCxPQUR5RTtBQUFBLE1BQ2hFRSxVQURnRTs7QUFFaEYsTUFBTUMsaUJBQWlCLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsU0FBRCxFQUF1QjtBQUMzREgsY0FBVSxDQUFDO0FBQUVGLGFBQU8sRUFBRSxJQUFYO0FBQWlCQyxXQUFLLEVBQUVJO0FBQXhCLEtBQUQsQ0FBVjtBQUNELEdBRm9DLEVBRWxDLENBQUNILFVBQUQsQ0FGa0MsQ0FBckM7QUFJQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLFNBQUQ7QUFBVyxnQkFBVSxFQUFFTCxVQUF2QjtBQUFtQyxjQUFRLEVBQUVDLFFBQTdDO0FBQUEsaUJBRUlRLGdFQUFZLENBQUNDLEdBQWIsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFPUCxLQUFQO0FBQUEsNEJBQ2YscUVBQUMsY0FBRDtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsa0JBQVEsRUFBRSxDQUZaO0FBSUUsaUJBQU8sRUFBRTtBQUFBLG1CQUFNRSxpQkFBaUIsQ0FBQ0YsS0FBRCxDQUF2QjtBQUFBLFdBSlg7QUFBQSxrQ0FNRTtBQUFLLHFCQUFTLEVBQUMsdUJBQWY7QUFBQSxvQ0FDRSxxRUFBQyxZQUFEO0FBQWMsa0JBQUksRUFBRU87QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFVRTtBQUFLLHFCQUFTLEVBQUMsZ0JBQWY7QUFBQSxzQkFBaUNBLElBQUksQ0FBQ0M7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBLG1DQUd3QlIsS0FIeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEZTtBQUFBLE9BQWpCLENBRkosZUFpQkUscUVBQUMsc0RBQUQ7QUFBZSxlQUFPLEVBQUVELE9BQXhCO0FBQWlDLGtCQUFVLEVBQUVFO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUF1QkQsQ0E3QkQ7O0dBQU1OLFE7O0tBQUFBLFE7O0FBK0JOLElBQU1jLFlBQVksR0FBRyxTQUFmQSxZQUFlLFFBQWM7QUFBQTs7QUFBQSxNQUFYRixJQUFXLFNBQVhBLElBQVc7QUFDakMsTUFBTUcsV0FBVyxHQUFHQyxxREFBTyxDQUFDO0FBQUEsV0FBTUosSUFBSSxDQUFDSyxJQUFMLEVBQU47QUFBQSxHQUFELEVBQW9CLENBQUNMLElBQUQsQ0FBcEIsQ0FBM0I7QUFDQSxzQkFBTyxxRUFBQyxXQUFEO0FBQWEsYUFBUyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBSEQ7O0lBQU1FLFk7O01BQUFBLFk7QUFLTixJQUFNSSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc01BR2dCO0FBQUEsTUFBR25CLFVBQUgsU0FBR0EsVUFBSDtBQUFBLE1BQWVDLFFBQWYsU0FBZUEsUUFBZjtBQUFBLFNBQThCbUIsbUVBQVEsQ0FBQ3BCLFVBQUQsRUFBYUMsUUFBYixDQUF0QztBQUFBLENBSGhCLEVBSW1CO0FBQUEsTUFBR0QsVUFBSCxTQUFHQSxVQUFIO0FBQUEsU0FBb0JxQixzRUFBVyxDQUFDckIsVUFBRCxDQUEvQjtBQUFBLENBSm5CLEVBT0M7QUFBQSxNQUFHQSxVQUFILFNBQUdBLFVBQUg7QUFBQSxNQUFlQyxRQUFmLFNBQWVBLFFBQWY7QUFBQSxTQUE4QnFCLHdFQUFhLENBQUN0QixVQUFELEVBQWFDLFFBQWIsQ0FBM0M7QUFBQSxDQVBELENBQWY7TUFBTWdCLFM7QUFVTixJQUFNTSxjQUFjLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbVlBRVI7QUFBQSxNQUFHbkIsVUFBSCxTQUFHQSxVQUFIO0FBQUEsU0FBcUJBLFVBQVUsS0FBSyxJQUFmLEdBQXNCLE9BQXRCLEdBQWdDLE9BQXJEO0FBQUEsQ0FGUSxFQWVIO0FBQUEsTUFBR0EsVUFBSCxTQUFHQSxVQUFIO0FBQUEsU0FBcUJBLFVBQVUsS0FBSyxJQUFmLEdBQXNCLE1BQXRCLEdBQStCLE9BQXBEO0FBQUEsQ0FmRyxDQUFwQjtNQUFNdUIsYztBQStCTixJQUFNQyxPQUFPLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsb0hBUVRJLGNBUlMsQ0FBYjtNQUFNQyxPO0FBYVN6Qix1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5ICovXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7XG4gIEZDLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwcm9qZWN0c0RhdGEgZnJvbSAnLi4vcmVzb3VyY2VzL2RhdGEvcHJvamVjdHMnO1xuaW1wb3J0IFByb2plY3REaWFsb2cgZnJvbSAnLi9Qcm9qZWN0RGlhbG9nJztcbmltcG9ydCB7IGNhbGNSb3dzLCBjYWxjQ29sdW1ucywgY2FsY01heEhlaWdodCB9IGZyb20gJy4uL2xpYi9wcm9qZWN0c19ncmlkJztcblxuaW50ZXJmYWNlIFByb2plY3RzUHJvcHMge1xuICBpc01haW5QYWdlPzogYm9vbGVhbjtcbiAgZXhwYW5kZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBQcm9qZWN0czogRkM8UHJvamVjdHNQcm9wcz4gPSAoeyBpc01haW5QYWdlID0gZmFsc2UsIGV4cGFuZGVkID0gZmFsc2UgfSkgPT4ge1xuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh7IHZpc2libGU6IGZhbHNlLCBpbmRleDogMCB9KTtcbiAgY29uc3Qgc2hvd1Byb2plY3REaWFsb2cgPSB1c2VDYWxsYmFjaygocHJvamVjdElkOiBudW1iZXIpID0+IHtcbiAgICBzZXRWaXNpYmxlKHsgdmlzaWJsZTogdHJ1ZSwgaW5kZXg6IHByb2plY3RJZCB9KTtcbiAgfSwgW3NldFZpc2libGVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyIGlzTWFpblBhZ2U9e2lzTWFpblBhZ2V9IGV4cGFuZGVkPXtleHBhbmRlZH0+XG4gICAgICAgIHtcbiAgICAgICAgICBwcm9qZWN0c0RhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFByb2plY3RTdW1tYXJ5XG4gICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgICAgICAgICAga2V5PXtgcHJvamVjdHMtaXRlbS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dQcm9qZWN0RGlhbG9nKGluZGV4KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LS1pY29uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8TWVtb2l6ZWRJY29uIGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgICAgICAgPE92ZXJsYXkgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC0tdGl0bGVcIj57ZGF0YS50aXRsZX08L2Rpdj5cbiAgICAgICAgICAgIDwvUHJvamVjdFN1bW1hcnk+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgICA8UHJvamVjdERpYWxvZyB2aXNpYmxlPXt2aXNpYmxlfSBzZXRWaXNpYmxlPXtzZXRWaXNpYmxlfSAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBNZW1vaXplZEljb24gPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgUHJvamVjdEljb24gPSB1c2VNZW1vKCgpID0+IGRhdGEuaWNvbigpLCBbZGF0YV0pO1xuICByZXR1cm4gPFByb2plY3RJY29uIGNsYXNzTmFtZT1cInByb2plY3QtLWljb25cIiAvPjtcbn07XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8UHJvamVjdHNQcm9wcz5gXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiByb3c7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KCR7KHsgaXNNYWluUGFnZSwgZXhwYW5kZWQgfSkgPT4gY2FsY1Jvd3MoaXNNYWluUGFnZSwgZXhwYW5kZWQpfSwgbWlubWF4KDE3cmVtLCAyMXJlbSkpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgkeyh7IGlzTWFpblBhZ2UgfSkgPT4gY2FsY0NvbHVtbnMoaXNNYWluUGFnZSl9LCBtaW5tYXgoMTdyZW0sIDE3cmVtKSk7XG4gIGdhcDogMy4ycmVtIDIuNHJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogJHsoeyBpc01haW5QYWdlLCBleHBhbmRlZCB9KSA9PiBjYWxjTWF4SGVpZ2h0KGlzTWFpblBhZ2UsIGV4cGFuZGVkKX07XG5gO1xuXG5jb25zdCBQcm9qZWN0U3VtbWFyeSA9IHN0eWxlZC5kaXY8UHJvamVjdHNQcm9wcz5gXG4gIHdpZHRoOiAxN3JlbTtcbiAgaGVpZ2h0OiAkeyh7IGlzTWFpblBhZ2UgfSkgPT4gKGlzTWFpblBhZ2UgPT09IHRydWUgPyAnMTdyZW0nIDogJzIxcmVtJyl9O1xuICBkaXNwbGF5OiBncmlkO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIC5wcm9qZWN0IHtcbiAgICAmLS10aXRsZSB7XG4gICAgICBmb250LWZhbWlseTogQXBwbGUgU0QgR290aGljIE5lbztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjlyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgZGlzcGxheTogJHsoeyBpc01haW5QYWdlIH0pID0+IChpc01haW5QYWdlID09PSB0cnVlID8gJ25vbmUnIDogJ2Jsb2NrJyl9XG4gICAgfVxuICAgICYtLWljb24td3JhcHBlciB7XG4gICAgICB3aWR0aDogMTdyZW07XG4gICAgICBoZWlnaHQ6IDE3cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMi40cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAmLS1pY29uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBibGFjayA7XG4gIG9wYWNpdHk6IDA7XG4gICR7UHJvamVjdFN1bW1hcnl9OmhvdmVyICYge1xuICAgIG9wYWNpdHk6IDAuMjtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Projects.tsx\n");

/***/ })

})