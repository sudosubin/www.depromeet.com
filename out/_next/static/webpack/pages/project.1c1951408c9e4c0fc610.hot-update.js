webpackHotUpdate_N_E("pages/project",{

/***/ "./components/ProjectDialog.tsx":
/*!**************************************!*\
  !*** ./components/ProjectDialog.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-virtualized-auto-sizer */ \"./node_modules/react-virtualized-auto-sizer/dist/index.esm.js\");\n/* harmony import */ var _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/data/projects */ \"./resources/data/projects/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/gohhwain/work/depromeet/www.depromeet.com/components/ProjectDialog.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable react/no-array-index-key */\n\n\n\n\n\n\n\nvar ProjectDialog = function ProjectDialog(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isClientSide = _useState[0],\n      setClientSide = _useState[1];\n\n  var visible = props.visible;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document !== undefined) {\n      setClientSide(true);\n    }\n  }, [setClientSide]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: isClientSide && visible.visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDialogContents, _objectSpread({}, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 43\n    }, _this)\n  }, void 0, false);\n};\n\n_s(ProjectDialog, \"TqvjQmpctxuQ3TxXSGPB8VZpGC8=\");\n\n_c = ProjectDialog;\n\nvar ProjectDialogContents = function ProjectDialogContents(_ref) {\n  _s2();\n\n  var visible = _ref.visible,\n      setVisible = _ref.setVisible;\n  var modalElement = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return document.createElement('div');\n  }, []);\n  var closeDialog = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    return setVisible({\n      visible: false,\n      index: 0\n    });\n  }, [setVisible]);\n  var scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  useScrollToIndex(scrollRef, visible.index);\n  usePortalSetup(modalElement);\n  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.createPortal( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Backdrop, {\n      onClick: closeDialog\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: function children(_ref2) {\n        var height = _ref2.height,\n            width = _ref2.width;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_window__WEBPACK_IMPORTED_MODULE_5__[\"FixedSizeList\"], {\n          itemCount: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"].length,\n          layout: \"horizontal\",\n          height: height,\n          width: width,\n          itemSize: contentWidth * 12,\n          ref: scrollRef,\n          itemData: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n          children: ProjectItem\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 13\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 7\n  }, _this), modalElement);\n};\n\n_s2(ProjectDialogContents, \"6htfsSUOy87qGCLRa1IvHmjIxFs=\", false, function () {\n  return [useScrollToIndex, usePortalSetup];\n});\n\n_c2 = ProjectDialogContents;\n\nvar ProjectItem = function ProjectItem(_ref3) {\n  var data = _ref3.data,\n      index = _ref3.index;\n  console.log(data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDetail, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"image\",\n      children: \"hi\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"detail\",\n      children: \"bye\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }, _this)]\n  }, \"project-detail-\".concat(index), true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 5\n  }, _this);\n};\n\n_c3 = ProjectItem;\n\nvar useScrollToIndex = function useScrollToIndex(scrollRef, index) {\n  _s3();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (scrollRef.current !== null) {\n      scrollRef.current.scrollToItem(index, 'center');\n    }\n  }, [scrollRef, index]);\n};\n\n_s3(useScrollToIndex, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar usePortalSetup = function usePortalSetup(portal) {\n  _s4();\n\n  var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'modal-root';\n  return Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var modalRoot = document.getElementById(rootId);\n    modalRoot.appendChild(portal);\n    return function () {\n      modalRoot.removeChild(portal);\n    };\n  }, [portal, rootId]);\n}; // rem\n\n\n_s4(usePortalSetup, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar horizontalPadding = 56;\nvar contentWidth = 80;\nvar contentHeight = 84;\nvar contentGap = 5.6;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Container\",\n  componentId: \"sc-1fctgpg-0\"\n})([\"position:fixed;top:0;left:0;right:0;bottom:0;color:white;\"]);\n_c4 = Container;\nvar Backdrop = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Backdrop\",\n  componentId: \"sc-1fctgpg-1\"\n})([\"position:fixed;inset:0;background-color:black;opacity:0.8;z-index:-1;\"]);\n_c5 = Backdrop;\nvar ProjectDetail = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectDetail\",\n  componentId: \"sc-1fctgpg-2\"\n})([\"width:\", \"rem;height:\", \"rem;background-color:#212121;border-radius:3.6rem;opacity:1;margin-left:\", \"rem;:first-of-type{margin-left:0;}.image{height:42rem;width:100%;}.detail{height:42rem;width:100%;}\"], contentWidth, contentHeight, contentGap);\n_c6 = ProjectDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDialog);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"ProjectDialog\");\n$RefreshReg$(_c2, \"ProjectDialogContents\");\n$RefreshReg$(_c3, \"ProjectItem\");\n$RefreshReg$(_c4, \"Container\");\n$RefreshReg$(_c5, \"Backdrop\");\n$RefreshReg$(_c6, \"ProjectDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0RGlhbG9nLnRzeD83YTMxIl0sIm5hbWVzIjpbIlByb2plY3REaWFsb2ciLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNDbGllbnRTaWRlIiwic2V0Q2xpZW50U2lkZSIsInZpc2libGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsIlByb2plY3REaWFsb2dDb250ZW50cyIsInNldFZpc2libGUiLCJtb2RhbEVsZW1lbnQiLCJ1c2VNZW1vIiwiY3JlYXRlRWxlbWVudCIsImNsb3NlRGlhbG9nIiwidXNlQ2FsbGJhY2siLCJpbmRleCIsInNjcm9sbFJlZiIsInVzZVJlZiIsInVzZVNjcm9sbFRvSW5kZXgiLCJ1c2VQb3J0YWxTZXR1cCIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiaGVpZ2h0Iiwid2lkdGgiLCJwcm9qZWN0c0RhdGEiLCJsZW5ndGgiLCJjb250ZW50V2lkdGgiLCJQcm9qZWN0SXRlbSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsInNjcm9sbFRvSXRlbSIsInBvcnRhbCIsInJvb3RJZCIsIm1vZGFsUm9vdCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsImhvcml6b250YWxQYWRkaW5nIiwiY29udGVudEhlaWdodCIsImNvbnRlbnRHYXAiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJCYWNrZHJvcCIsIlByb2plY3REZXRhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVdBLElBQU1BLGFBQXFDLEdBQUcsU0FBeENBLGFBQXdDLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNqQkMsc0RBQVEsQ0FBQyxLQUFELENBRFM7QUFBQSxNQUNoREMsWUFEZ0Q7QUFBQSxNQUNsQ0MsYUFEa0M7O0FBQUEs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Uy9DLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0RGlhbG9nLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xuaW1wb3J0IHtcbiAgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYsIE11dGFibGVSZWZPYmplY3QsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0LCBMaXN0Q2hpbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXdpbmRvdyc7XG5pbXBvcnQgQXV0b1NpemUgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtYXV0by1zaXplcic7XG5pbXBvcnQgcHJvamVjdHNEYXRhIGZyb20gJy4uL3Jlc291cmNlcy9kYXRhL3Byb2plY3RzJztcblxuaW50ZXJmYWNlIFByb2plY3REaWFsb2dWaXNpYmxlQXJnIHtcbiAgICB2aXNpYmxlOiBib29sZWFuO1xuICAgIGluZGV4OiBudW1iZXI7XG59XG5pbnRlcmZhY2UgUHJvamVjdERpYWxvZ1Byb3BzIHtcbiAgdmlzaWJsZTogUHJvamVjdERpYWxvZ1Zpc2libGVBcmcsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBzZXRWaXNpYmxlOiAoYXJnOiBQcm9qZWN0RGlhbG9nVmlzaWJsZUFyZykgPT4gdm9pZDtcbn1cbmNvbnN0IFByb2plY3REaWFsb2c6IEZDPFByb2plY3REaWFsb2dQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2lzQ2xpZW50U2lkZSwgc2V0Q2xpZW50U2lkZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgdmlzaWJsZSB9ID0gcHJvcHM7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0Q2xpZW50U2lkZSh0cnVlKTtcbiAgICB9XG4gIH0sIFtzZXRDbGllbnRTaWRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzQ2xpZW50U2lkZSAmJiB2aXNpYmxlLnZpc2libGUgJiYgPFByb2plY3REaWFsb2dDb250ZW50cyB7Li4ucHJvcHN9IC8+fVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgUHJvamVjdERpYWxvZ0NvbnRlbnRzOkZDPFByb2plY3REaWFsb2dQcm9wcz4gPSAoeyB2aXNpYmxlLCBzZXRWaXNpYmxlIH0pID0+IHtcbiAgY29uc3QgbW9kYWxFbGVtZW50ID0gdXNlTWVtbygoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgW10pO1xuICBjb25zdCBjbG9zZURpYWxvZyA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUoeyB2aXNpYmxlOiBmYWxzZSwgaW5kZXg6IDAgfSksIFtzZXRWaXNpYmxlXSk7XG4gIGNvbnN0IHNjcm9sbFJlZiA9IHVzZVJlZjxGaXhlZFNpemVMaXN0PihudWxsKTtcblxuICB1c2VTY3JvbGxUb0luZGV4KHNjcm9sbFJlZiwgdmlzaWJsZS5pbmRleCk7XG4gIHVzZVBvcnRhbFNldHVwKG1vZGFsRWxlbWVudCk7XG5cbiAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcbiAgICAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8QmFja2Ryb3Agb25DbGljaz17Y2xvc2VEaWFsb2d9IC8+XG4gICAgICAgIDxBdXRvU2l6ZT5cbiAgICAgICAgICB7KHsgaGVpZ2h0LCB3aWR0aCB9KSA9PiAoXG4gICAgICAgICAgICA8Rml4ZWRTaXplTGlzdFxuICAgICAgICAgICAgICBpdGVtQ291bnQ9e3Byb2plY3RzRGF0YS5sZW5ndGh9XG4gICAgICAgICAgICAgIGxheW91dD1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICBpdGVtU2l6ZT17Y29udGVudFdpZHRoICogMTJ9XG4gICAgICAgICAgICAgIHJlZj17c2Nyb2xsUmVmfVxuICAgICAgICAgICAgICBpdGVtRGF0YT17cHJvamVjdHNEYXRhfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7UHJvamVjdEl0ZW19XG4gICAgICAgICAgICA8L0ZpeGVkU2l6ZUxpc3Q+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BdXRvU2l6ZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICksXG4gICAgbW9kYWxFbGVtZW50LFxuICApO1xufTtcblxuY29uc3QgUHJvamVjdEl0ZW06RkM8TGlzdENoaWxkQ29tcG9uZW50UHJvcHM+ID0gKHsgZGF0YSwgaW5kZXggfSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgcmV0dXJuIChcbiAgICA8UHJvamVjdERldGFpbFxuICAgICAga2V5PXtgcHJvamVjdC1kZXRhaWwtJHtpbmRleH1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5oaTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxcIj5ieWU8L2Rpdj5cbiAgICA8L1Byb2plY3REZXRhaWw+XG4gICk7XG59O1xuY29uc3QgdXNlU2Nyb2xsVG9JbmRleCA9IChzY3JvbGxSZWY6IE11dGFibGVSZWZPYmplY3Q8Rml4ZWRTaXplTGlzdD4sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2Nyb2xsUmVmLmN1cnJlbnQgIT09IG51bGwpIHsgc2Nyb2xsUmVmLmN1cnJlbnQuc2Nyb2xsVG9JdGVtKGluZGV4LCAnY2VudGVyJyk7IH1cbiAgfSwgW3Njcm9sbFJlZiwgaW5kZXhdKTtcbn07XG5cbmNvbnN0IHVzZVBvcnRhbFNldHVwID0gKHBvcnRhbDogSFRNTEVsZW1lbnQsIHJvb3RJZCA9ICdtb2RhbC1yb290JykgPT4gdXNlRWZmZWN0KCgpID0+IHtcbiAgY29uc3QgbW9kYWxSb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vdElkKTtcbiAgbW9kYWxSb290LmFwcGVuZENoaWxkKHBvcnRhbCk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbW9kYWxSb290LnJlbW92ZUNoaWxkKHBvcnRhbCk7XG4gIH07XG59LCBbcG9ydGFsLCByb290SWRdKTtcblxuLy8gcmVtXG5jb25zdCBob3Jpem9udGFsUGFkZGluZyA9IDU2O1xuY29uc3QgY29udGVudFdpZHRoID0gODA7XG5jb25zdCBjb250ZW50SGVpZ2h0ID0gODQ7XG5jb25zdCBjb250ZW50R2FwID0gNS42O1xuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6MDtcbiAgbGVmdDowO1xuICByaWdodDowO1xuICBib3R0b206MDtcbiAgY29sb3I6IHdoaXRlO1xuYDtcbmNvbnN0IEJhY2tkcm9wID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuODtcbiAgei1pbmRleDogLTE7XG5gO1xuXG5jb25zdCBQcm9qZWN0RGV0YWlsID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7Y29udGVudFdpZHRofXJlbTtcbiAgaGVpZ2h0OiAke2NvbnRlbnRIZWlnaHR9cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICBib3JkZXItcmFkaXVzOiAzLjZyZW07XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi1sZWZ0OiAke2NvbnRlbnRHYXB9cmVtO1xuICA6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLmltYWdlIHtcbiAgICBoZWlnaHQ6IDQycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmRldGFpbCB7XG4gICAgaGVpZ2h0OiA0MnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdERpYWxvZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectDialog.tsx\n");

/***/ })

})