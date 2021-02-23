webpackHotUpdate_N_E("pages/project",{

/***/ "./components/ProjectDialog.tsx":
/*!**************************************!*\
  !*** ./components/ProjectDialog.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-virtualized-auto-sizer */ \"./node_modules/react-virtualized-auto-sizer/dist/index.esm.js\");\n/* harmony import */ var _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/data/projects */ \"./resources/data/projects/index.js\");\n/* harmony import */ var _project_dialog_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project-dialog.module.scss */ \"./components/project-dialog.module.scss\");\n/* harmony import */ var _project_dialog_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_project_dialog_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\nvar _jsxFileName = \"/Users/gohhwain/work/depromeet/www.depromeet.com/components/ProjectDialog.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable react/no-array-index-key */\n\n\n\n\n\n\n\n\nvar ProjectDialog = function ProjectDialog(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isClientSide = _useState[0],\n      setClientSide = _useState[1];\n\n  var visible = props.visible;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document !== undefined) {\n      setClientSide(true);\n    }\n  }, [setClientSide]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: isClientSide && visible.visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDialogContents, _objectSpread({}, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 43\n    }, _this)\n  }, void 0, false);\n};\n\n_s(ProjectDialog, \"TqvjQmpctxuQ3TxXSGPB8VZpGC8=\");\n\n_c = ProjectDialog;\n\nvar ProjectDialogContents = function ProjectDialogContents(_ref) {\n  _s2();\n\n  var visible = _ref.visible,\n      setVisible = _ref.setVisible;\n  var modalElement = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return document.createElement('div');\n  }, []);\n  var closeDialog = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    return setVisible({\n      visible: false,\n      index: 0\n    });\n  }, [setVisible]);\n  var scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  useScrollToIndex(scrollRef, visible.index);\n  usePortalSetup(modalElement);\n  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.createPortal( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Backdrop, {\n      onClick: closeDialog\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: function children(_ref2) {\n        var height = _ref2.height,\n            width = _ref2.width;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_window__WEBPACK_IMPORTED_MODULE_5__[\"FixedSizeList\"], {\n          itemCount: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"].length,\n          layout: \"horizontal\",\n          height: height,\n          width: width,\n          itemSize: contentWidth * 12,\n          ref: scrollRef,\n          itemData: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n          className: _project_dialog_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a['project-dialog'],\n          children: ProjectItem\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 7\n  }, _this), modalElement);\n};\n\n_s2(ProjectDialogContents, \"6htfsSUOy87qGCLRa1IvHmjIxFs=\", false, function () {\n  return [useScrollToIndex, usePortalSetup];\n});\n\n_c2 = ProjectDialogContents;\n\nvar ProjectItem = function ProjectItem(_ref3) {\n  var data = _ref3.data,\n      index = _ref3.index;\n  console.log(data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDetail, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"image\",\n      children: \"hi\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"detail\",\n      children: \"bye\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this)]\n  }, \"project-detail-\".concat(index), true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, _this);\n};\n\n_c3 = ProjectItem;\n\nvar useScrollToIndex = function useScrollToIndex(scrollRef, index) {\n  _s3();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (scrollRef.current !== null) {\n      scrollRef.current.scrollToItem(index, 'center');\n    }\n  }, [scrollRef, index]);\n};\n\n_s3(useScrollToIndex, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar usePortalSetup = function usePortalSetup(portal) {\n  _s4();\n\n  var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'modal-root';\n  return Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var modalRoot = document.getElementById(rootId);\n    modalRoot.appendChild(portal);\n    return function () {\n      modalRoot.removeChild(portal);\n    };\n  }, [portal, rootId]);\n}; // rem\n\n\n_s4(usePortalSetup, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar horizontalPadding = 56;\nvar contentWidth = 80;\nvar contentHeight = 84;\nvar contentGap = 5.6;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Container\",\n  componentId: \"sc-1fctgpg-0\"\n})([\"position:fixed;top:0;left:0;right:0;bottom:0;color:white;\"]);\n_c4 = Container;\nvar Backdrop = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Backdrop\",\n  componentId: \"sc-1fctgpg-1\"\n})([\"position:fixed;inset:0;background-color:black;opacity:0.8;z-index:-1;\"]);\n_c5 = Backdrop;\nvar ProjectDetail = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectDetail\",\n  componentId: \"sc-1fctgpg-2\"\n})([\"width:\", \"rem;height:\", \"rem;background-color:#212121;border-radius:3.6rem;opacity:1;margin-left:\", \"rem;margin-right:0;padding-right:0;:first-of-type{margin-left:0;}.image{height:42rem;width:100%;}.detail{height:42rem;width:100%;}\"], contentWidth, contentHeight, contentGap);\n_c6 = ProjectDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDialog);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"ProjectDialog\");\n$RefreshReg$(_c2, \"ProjectDialogContents\");\n$RefreshReg$(_c3, \"ProjectItem\");\n$RefreshReg$(_c4, \"Container\");\n$RefreshReg$(_c5, \"Backdrop\");\n$RefreshReg$(_c6, \"ProjectDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0RGlhbG9nLnRzeD83YTMxIl0sIm5hbWVzIjpbIlByb2plY3REaWFsb2ciLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNDbGllbnRTaWRlIiwic2V0Q2xpZW50U2lkZSIsInZpc2libGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsIlByb2plY3REaWFsb2dDb250ZW50cyIsInNldFZpc2libGUiLCJtb2RhbEVsZW1lbnQiLCJ1c2VNZW1vIiwiY3JlYXRlRWxlbWVudCIsImNsb3NlRGlhbG9nIiwidXNlQ2FsbGJhY2siLCJpbmRleCIsInNjcm9sbFJlZiIsInVzZVJlZiIsInVzZVNjcm9sbFRvSW5kZXgiLCJ1c2VQb3J0YWxTZXR1cCIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiaGVpZ2h0Iiwid2lkdGgiLCJwcm9qZWN0c0RhdGEiLCJsZW5ndGgiLCJjb250ZW50V2lkdGgiLCJzdHlsZSIsIlByb2plY3RJdGVtIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50Iiwic2Nyb2xsVG9JdGVtIiwicG9ydGFsIiwicm9vdElkIiwibW9kYWxSb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiaG9yaXpvbnRhbFBhZGRpbmciLCJjb250ZW50SGVpZ2h0IiwiY29udGVudEdhcCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkJhY2tkcm9wIiwiUHJvamVjdERldGFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVdBLElBQU1BLGFBQXFDLEdBQUcsU0FBeENBLGFBQXdDLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNqQkMsc0RBQVEsQ0FBQyxLQUFELENBRFM7QUFBQSxNQUNoREMsWUFEZ0Q7QUFBQSxNQUNs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O0FBQUEsZ1BBQ1JuQixZQURRLEVBRVBlLGFBRk8sRUFNRkMsVUFORSxDQUFuQjtNQUFNSyxhO0FBdUJTaEQsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3REaWFsb2cudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5ICovXG5pbXBvcnQge1xuICBGQywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgTXV0YWJsZVJlZk9iamVjdCxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEZpeGVkU2l6ZUxpc3QsIExpc3RDaGlsZENvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtd2luZG93JztcbmltcG9ydCBBdXRvU2l6ZSBmcm9tICdyZWFjdC12aXJ0dWFsaXplZC1hdXRvLXNpemVyJztcbmltcG9ydCBwcm9qZWN0c0RhdGEgZnJvbSAnLi4vcmVzb3VyY2VzL2RhdGEvcHJvamVjdHMnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vcHJvamVjdC1kaWFsb2cubW9kdWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgUHJvamVjdERpYWxvZ1Zpc2libGVBcmcge1xuICAgIHZpc2libGU6IGJvb2xlYW47XG4gICAgaW5kZXg6IG51bWJlcjtcbn1cbmludGVyZmFjZSBQcm9qZWN0RGlhbG9nUHJvcHMge1xuICB2aXNpYmxlOiBQcm9qZWN0RGlhbG9nVmlzaWJsZUFyZyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIHNldFZpc2libGU6IChhcmc6IFByb2plY3REaWFsb2dWaXNpYmxlQXJnKSA9PiB2b2lkO1xufVxuY29uc3QgUHJvamVjdERpYWxvZzogRkM8UHJvamVjdERpYWxvZ1Byb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNDbGllbnRTaWRlLCBzZXRDbGllbnRTaWRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB2aXNpYmxlIH0gPSBwcm9wcztcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRDbGllbnRTaWRlKHRydWUpO1xuICAgIH1cbiAgfSwgW3NldENsaWVudFNpZGVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNDbGllbnRTaWRlICYmIHZpc2libGUudmlzaWJsZSAmJiA8UHJvamVjdERpYWxvZ0NvbnRlbnRzIHsuLi5wcm9wc30gLz59XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBQcm9qZWN0RGlhbG9nQ29udGVudHM6RkM8UHJvamVjdERpYWxvZ1Byb3BzPiA9ICh7IHZpc2libGUsIHNldFZpc2libGUgfSkgPT4ge1xuICBjb25zdCBtb2RhbEVsZW1lbnQgPSB1c2VNZW1vKCgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCBbXSk7XG4gIGNvbnN0IGNsb3NlRGlhbG9nID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh7IHZpc2libGU6IGZhbHNlLCBpbmRleDogMCB9KSwgW3NldFZpc2libGVdKTtcbiAgY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmPEZpeGVkU2l6ZUxpc3Q+KG51bGwpO1xuXG4gIHVzZVNjcm9sbFRvSW5kZXgoc2Nyb2xsUmVmLCB2aXNpYmxlLmluZGV4KTtcbiAgdXNlUG9ydGFsU2V0dXAobW9kYWxFbGVtZW50KTtcblxuICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKFxuICAgIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCYWNrZHJvcCBvbkNsaWNrPXtjbG9zZURpYWxvZ30gLz5cbiAgICAgICAgPEF1dG9TaXplPlxuICAgICAgICAgIHsoeyBoZWlnaHQsIHdpZHRoIH0pID0+IChcbiAgICAgICAgICAgIDxGaXhlZFNpemVMaXN0XG4gICAgICAgICAgICAgIGl0ZW1Db3VudD17cHJvamVjdHNEYXRhLmxlbmd0aH1cbiAgICAgICAgICAgICAgbGF5b3V0PVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgIGl0ZW1TaXplPXtjb250ZW50V2lkdGggKiAxMn1cbiAgICAgICAgICAgICAgcmVmPXtzY3JvbGxSZWZ9XG4gICAgICAgICAgICAgIGl0ZW1EYXRhPXtwcm9qZWN0c0RhdGF9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVbJ3Byb2plY3QtZGlhbG9nJ119XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtQcm9qZWN0SXRlbX1cbiAgICAgICAgICAgIDwvRml4ZWRTaXplTGlzdD5cbiAgICAgICAgICApfVxuICAgICAgICA8L0F1dG9TaXplPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKSxcbiAgICBtb2RhbEVsZW1lbnQsXG4gICk7XG59O1xuXG5jb25zdCBQcm9qZWN0SXRlbTpGQzxMaXN0Q2hpbGRDb21wb25lbnRQcm9wcz4gPSAoeyBkYXRhLCBpbmRleCB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xuICByZXR1cm4gKFxuICAgIDxQcm9qZWN0RGV0YWlsXG4gICAgICBrZXk9e2Bwcm9qZWN0LWRldGFpbC0ke2luZGV4fWB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPmhpPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPmJ5ZTwvZGl2PlxuICAgIDwvUHJvamVjdERldGFpbD5cbiAgKTtcbn07XG5jb25zdCB1c2VTY3JvbGxUb0luZGV4ID0gKHNjcm9sbFJlZjogTXV0YWJsZVJlZk9iamVjdDxGaXhlZFNpemVMaXN0PiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzY3JvbGxSZWYuY3VycmVudCAhPT0gbnVsbCkgeyBzY3JvbGxSZWYuY3VycmVudC5zY3JvbGxUb0l0ZW0oaW5kZXgsICdjZW50ZXInKTsgfVxuICB9LCBbc2Nyb2xsUmVmLCBpbmRleF0pO1xufTtcblxuY29uc3QgdXNlUG9ydGFsU2V0dXAgPSAocG9ydGFsOiBIVE1MRWxlbWVudCwgcm9vdElkID0gJ21vZGFsLXJvb3QnKSA9PiB1c2VFZmZlY3QoKCkgPT4ge1xuICBjb25zdCBtb2RhbFJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb290SWQpO1xuICBtb2RhbFJvb3QuYXBwZW5kQ2hpbGQocG9ydGFsKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBtb2RhbFJvb3QucmVtb3ZlQ2hpbGQocG9ydGFsKTtcbiAgfTtcbn0sIFtwb3J0YWwsIHJvb3RJZF0pO1xuXG4vLyByZW1cbmNvbnN0IGhvcml6b250YWxQYWRkaW5nID0gNTY7XG5jb25zdCBjb250ZW50V2lkdGggPSA4MDtcbmNvbnN0IGNvbnRlbnRIZWlnaHQgPSA4NDtcbmNvbnN0IGNvbnRlbnRHYXAgPSA1LjY7XG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDowO1xuICBsZWZ0OjA7XG4gIHJpZ2h0OjA7XG4gIGJvdHRvbTowO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuY29uc3QgQmFja2Ryb3AgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC44O1xuICB6LWluZGV4OiAtMTtcbmA7XG5cbmNvbnN0IFByb2plY3REZXRhaWwgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHtjb250ZW50V2lkdGh9cmVtO1xuICBoZWlnaHQ6ICR7Y29udGVudEhlaWdodH1yZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGJvcmRlci1yYWRpdXM6IDMuNnJlbTtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLWxlZnQ6ICR7Y29udGVudEdhcH1yZW07XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5pbWFnZSB7XG4gICAgaGVpZ2h0OiA0MnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5kZXRhaWwge1xuICAgIGhlaWdodDogNDJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3REaWFsb2c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProjectDialog.tsx\n");

/***/ }),

/***/ "./components/project-dialog.module.scss":
/*!***********************************************!*\
  !*** ./components/project-dialog.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./project-dialog.module.scss */ \"./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/project-dialog.module.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = function(element){// These elements should always exist. If they do not,\n// this code should fail.\nvar anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>\n// Each style tag should be placed right before our\n// anchor. By inserting before and not after, we do not\n// need to track the last inserted element.\nparentNode.insertBefore(element,anchorElement);};\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./project-dialog.module.scss */ \"./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/project-dialog.module.scss\",\n      function () {\n        content = __webpack_require__(/*! !../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./project-dialog.module.scss */ \"./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/project-dialog.module.scss\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0LWRpYWxvZy5tb2R1bGUuc2Nzcz80ODI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMseWhCQUE4Uzs7QUFFaFY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0seWhCQUE4UztBQUNwVDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLHloQkFBOFM7O0FBRXhVOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3QtZGlhbG9nLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL3Byb2plY3QtZGlhbG9nLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL3Byb2plY3QtZGlhbG9nLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL3Byb2plY3QtZGlhbG9nLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/project-dialog.module.scss\n");

/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/project-dialog.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/project-dialog.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/next/node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".project-dialog_project-dialog__1yknx {\\n  padding: 0 56rem;\\n  display: -webkit-flex;\\n  display: -moz-box;\\n  display: flex;\\n  -webkit-align-content: center;\\n          align-content: center;\\n  height: 100%;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://project-dialog.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,gBAAA;EACA,qBAAA;EAAA,iBAAA;EAAA,aAAA;EACA,6BAAA;UAAA,qBAAA;EACA,YAAA;AACF\",\"sourcesContent\":[\".project-dialog {\\n  padding: 0 56rem;\\n  display: flex;\\n  align-content: center;\\n  height: 100%;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"project-dialog\": \"project-dialog_project-dialog__1yknx\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0LWRpYWxvZy5tb2R1bGUuc2Nzcz8wOGNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMseUlBQWtFO0FBQzVHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwQ0FBMEMscUJBQXFCLDBCQUEwQixzQkFBc0Isa0JBQWtCLGtDQUFrQyxrQ0FBa0MsaUJBQWlCLEdBQUcsT0FBTywyRkFBMkYsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSwwQ0FBMEMscUJBQXFCLGtCQUFrQiwwQkFBMEIsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQy9qQjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vY29tcG9uZW50cy9wcm9qZWN0LWRpYWxvZy5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9qZWN0LWRpYWxvZ19wcm9qZWN0LWRpYWxvZ19fMXlrbngge1xcbiAgcGFkZGluZzogMCA1NnJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wcm9qZWN0LWRpYWxvZy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFBQSxpQkFBQTtFQUFBLGFBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsWUFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wcm9qZWN0LWRpYWxvZyB7XFxuICBwYWRkaW5nOiAwIDU2cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicHJvamVjdC1kaWFsb2dcIjogXCJwcm9qZWN0LWRpYWxvZ19wcm9qZWN0LWRpYWxvZ19fMXlrbnhcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/project-dialog.module.scss\n");

/***/ })

})