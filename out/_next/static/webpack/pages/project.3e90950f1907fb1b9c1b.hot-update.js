webpackHotUpdate_N_E("pages/project",{

/***/ "./components/ProjectDialog.tsx":
/*!**************************************!*\
  !*** ./components/ProjectDialog.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-virtualized-auto-sizer */ \"./node_modules/react-virtualized-auto-sizer/dist/index.esm.js\");\n/* harmony import */ var _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/data/projects */ \"./resources/data/projects/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/gohhwain/work/depromeet/www.depromeet.com/components/ProjectDialog.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable react/no-array-index-key */\n\n\n\n\n\n\n\nvar ProjectDialog = function ProjectDialog(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isClientSide = _useState[0],\n      setClientSide = _useState[1];\n\n  var visible = props.visible;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document !== undefined) {\n      setClientSide(true);\n    }\n  }, [setClientSide]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: isClientSide && visible.visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDialogContents, _objectSpread({}, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 43\n    }, _this)\n  }, void 0, false);\n};\n\n_s(ProjectDialog, \"TqvjQmpctxuQ3TxXSGPB8VZpGC8=\");\n\n_c = ProjectDialog;\n\nvar ProjectDialogContents = function ProjectDialogContents(_ref) {\n  _s2();\n\n  var visible = _ref.visible,\n      setVisible = _ref.setVisible;\n  var modalElement = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return document.createElement('div');\n  }, []);\n  var closeDialog = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    return setVisible({\n      visible: false,\n      index: 0\n    });\n  }, [setVisible]);\n  var scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  useScrollToIndex(scrollRef, visible.index);\n  usePortalSetup(modalElement);\n  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.createPortal( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Backdrop, {\n      onClick: closeDialog\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: function children(_ref2) {\n        var width = _ref2.width,\n            height = _ref2.height;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_window__WEBPACK_IMPORTED_MODULE_5__[\"FixedSizeList\"], {\n          itemCount: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"].length,\n          layout: \"horizontal\",\n          height: height,\n          width: width,\n          itemSize: contentWidth * 10,\n          ref: scrollRef,\n          itemData: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n          style: {\n            padding: '0 56rem',\n            overflow: 'scroll',\n            display: 'flex',\n            justifyContent: 'center',\n            alignContent: 'center'\n          },\n          children: ProjectItem\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 7\n  }, _this), modalElement);\n};\n\n_s2(ProjectDialogContents, \"6htfsSUOy87qGCLRa1IvHmjIxFs=\", false, function () {\n  return [useScrollToIndex, usePortalSetup];\n});\n\n_c2 = ProjectDialogContents;\n\nvar ProjectItem = function ProjectItem(_ref3) {\n  _s3();\n\n  var data = _ref3.data,\n      index = _ref3.index,\n      style = _ref3.style;\n  var projectData = data[index];\n  var Image = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return projectData.image();\n  }, [projectData]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDetail, {\n    style: style,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"image\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"detail\",\n      children: projectData.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, _this)]\n  }, \"project-detail-\".concat(index), true, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, _this);\n};\n\n_s3(ProjectItem, \"oHF6iZ4uCM2aIX7eb3MU31h4r7w=\");\n\n_c3 = ProjectItem;\n\nvar useScrollToIndex = function useScrollToIndex(scrollRef, index) {\n  _s4();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (scrollRef.current !== null) {\n      scrollRef.current.scrollToItem(index, 'center');\n    }\n  }, [scrollRef, index]);\n};\n\n_s4(useScrollToIndex, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar usePortalSetup = function usePortalSetup(portal) {\n  _s5();\n\n  var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'modal-root';\n  return Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var modalRoot = document.getElementById(rootId);\n    modalRoot.appendChild(portal);\n    return function () {\n      modalRoot.removeChild(portal);\n    };\n  }, [portal, rootId]);\n}; // rem\n\n\n_s5(usePortalSetup, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar horizontalPadding = 56;\nvar contentWidth = 80;\nvar contentHeight = 84;\nvar contentGap = 5.6;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Container\",\n  componentId: \"sc-1fctgpg-0\"\n})([\"position:fixed;top:0;left:0;right:0;bottom:0;color:white;\"]);\n_c4 = Container;\nvar Backdrop = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Backdrop\",\n  componentId: \"sc-1fctgpg-1\"\n})([\"position:fixed;inset:0;background-color:black;opacity:0.8;z-index:-1;\"]);\n_c5 = Backdrop;\nvar ProjectDetail = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectDetail\",\n  componentId: \"sc-1fctgpg-2\"\n})([\"width:\", \"rem;height:\", \"rem;background-color:#212121;border-radius:3.6rem;opacity:1;margin-left:56rem;:first-of-type{margin-left:0;}.image{height:42rem;width:100%;}.detail{height:42rem;width:100%;}\"], contentWidth, contentHeight);\n_c6 = ProjectDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDialog);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"ProjectDialog\");\n$RefreshReg$(_c2, \"ProjectDialogContents\");\n$RefreshReg$(_c3, \"ProjectItem\");\n$RefreshReg$(_c4, \"Container\");\n$RefreshReg$(_c5, \"Backdrop\");\n$RefreshReg$(_c6, \"ProjectDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0RGlhbG9nLnRzeD83YTMxIl0sIm5hbWVzIjpbIlByb2plY3REaWFsb2ciLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNDbGllbnRTaWRlIiwic2V0Q2xpZW50U2lkZSIsInZpc2libGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsIlByb2plY3REaWFsb2dDb250ZW50cyIsInNldFZpc2libGUiLCJtb2RhbEVsZW1lbnQiLCJ1c2VNZW1vIiwiY3JlYXRlRWxlbWVudCIsImNsb3NlRGlhbG9nIiwidXNlQ2FsbGJhY2siLCJpbmRleCIsInNjcm9sbFJlZiIsInVzZVJlZiIsInVzZVNjcm9sbFRvSW5kZXgiLCJ1c2VQb3J0YWxTZXR1cCIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9qZWN0c0RhdGEiLCJsZW5ndGgiLCJjb250ZW50V2lkdGgiLCJwYWRkaW5nIiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkNvbnRlbnQiLCJQcm9qZWN0SXRlbSIsImRhdGEiLCJzdHlsZSIsInByb2plY3REYXRhIiwiSW1hZ2UiLCJpbWFnZSIsInRpdGxlIiwiY3VycmVudCIsInNjcm9sbFRvSXRlbSIsInBvcnRhbCIsInJvb3RJZCIsIm1vZGFsUm9vdCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsImhvcml6b250YWxQYWRkaW5nIiwiY29udGVudEhlaWdodCIsImNvbnRlbnRHYXAiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJCYWNrZHJvcCIsIlByb2plY3REZXRhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTs7QUFhQSxJQUFNQSxhQUFxQyxHQUFHLFNBQXhDQSxhQUF3QyxDQUFD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QUNYRSxlQUFTLENBQUNHLFdBQVYsQ0FBc0JMLE1BQXRCO0FBQ0QsS0FGRDtBQUdELEdBTitFLEVBTTdFLENBQUNBLE1BQUQsRUFBU0MsTUFBVCxDQU42RSxDQUF6RDtBQUFBLENBQXZCLEMsQ0FRQTs7O0lBUk12QixjOztBQVNOLElBQU00QixpQkFBaUIsR0FBRyxFQUExQjtBQUNBLElBQU1yQixZQUFZLEdBQUcsRUFBckI7QUFDQSxJQUFNc0IsYUFBYSxHQUFHLEVBQXRCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLEdBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlFQUFmO01BQU1GLFM7QUFRTixJQUFNRyxRQUFRLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkVBQWQ7TUFBTUMsUTtBQVFOLElBQU1DLGFBQWEsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwrTUFDUjFCLFlBRFEsRUFFUHNCLGFBRk8sQ0FBbkI7TUFBTU0sYTtBQXFCU3ZELDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0RGlhbG9nLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xuaW1wb3J0IHtcbiAgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYsIE11dGFibGVSZWZPYmplY3QsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1xuICBGaXhlZFNpemVMaXN0LCBMaXN0Q2hpbGRDb21wb25lbnRQcm9wcyxcbn0gZnJvbSAncmVhY3Qtd2luZG93JztcbmltcG9ydCBBdXRvU2l6ZSBmcm9tICdyZWFjdC12aXJ0dWFsaXplZC1hdXRvLXNpemVyJztcbmltcG9ydCBwcm9qZWN0c0RhdGEgZnJvbSAnLi4vcmVzb3VyY2VzL2RhdGEvcHJvamVjdHMnO1xuaW1wb3J0IHsgUHJvamVjdERhdGEgfSBmcm9tICcuLi9yZXNvdXJjZXMvZGF0YS9pbnRlcmZhY2UnO1xuaW1wb3J0IGxpc3RTdHlsZSBmcm9tICcuL3Byb2plY3QtZGlhbG9nLm1vZHVsZS5zY3NzJztcblxuaW50ZXJmYWNlIFByb2plY3REaWFsb2dWaXNpYmxlQXJnIHtcbiAgICB2aXNpYmxlOiBib29sZWFuO1xuICAgIGluZGV4OiBudW1iZXI7XG59XG5pbnRlcmZhY2UgUHJvamVjdERpYWxvZ1Byb3BzIHtcbiAgdmlzaWJsZTogUHJvamVjdERpYWxvZ1Zpc2libGVBcmcsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBzZXRWaXNpYmxlOiAoYXJnOiBQcm9qZWN0RGlhbG9nVmlzaWJsZUFyZykgPT4gdm9pZDtcbn1cbmNvbnN0IFByb2plY3REaWFsb2c6IEZDPFByb2plY3REaWFsb2dQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2lzQ2xpZW50U2lkZSwgc2V0Q2xpZW50U2lkZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgdmlzaWJsZSB9ID0gcHJvcHM7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0Q2xpZW50U2lkZSh0cnVlKTtcbiAgICB9XG4gIH0sIFtzZXRDbGllbnRTaWRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzQ2xpZW50U2lkZSAmJiB2aXNpYmxlLnZpc2libGUgJiYgPFByb2plY3REaWFsb2dDb250ZW50cyB7Li4ucHJvcHN9IC8+fVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgUHJvamVjdERpYWxvZ0NvbnRlbnRzOkZDPFByb2plY3REaWFsb2dQcm9wcz4gPSAoeyB2aXNpYmxlLCBzZXRWaXNpYmxlIH0pID0+IHtcbiAgY29uc3QgbW9kYWxFbGVtZW50ID0gdXNlTWVtbygoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgW10pO1xuICBjb25zdCBjbG9zZURpYWxvZyA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUoeyB2aXNpYmxlOiBmYWxzZSwgaW5kZXg6IDAgfSksIFtzZXRWaXNpYmxlXSk7XG4gIGNvbnN0IHNjcm9sbFJlZiA9IHVzZVJlZjxGaXhlZFNpemVMaXN0PihudWxsKTtcblxuICB1c2VTY3JvbGxUb0luZGV4KHNjcm9sbFJlZiwgdmlzaWJsZS5pbmRleCk7XG4gIHVzZVBvcnRhbFNldHVwKG1vZGFsRWxlbWVudCk7XG5cbiAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcbiAgICAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8QmFja2Ryb3Agb25DbGljaz17Y2xvc2VEaWFsb2d9IC8+XG4gICAgICAgIDxBdXRvU2l6ZT5cbiAgICAgICAgICB7KHsgd2lkdGgsIGhlaWdodCB9KSA9PiAoXG4gICAgICAgICAgICA8Rml4ZWRTaXplTGlzdFxuICAgICAgICAgICAgICBpdGVtQ291bnQ9e3Byb2plY3RzRGF0YS5sZW5ndGh9XG4gICAgICAgICAgICAgIGxheW91dD1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICBpdGVtU2l6ZT17Y29udGVudFdpZHRoICogMTB9XG4gICAgICAgICAgICAgIHJlZj17c2Nyb2xsUmVmfVxuICAgICAgICAgICAgICBpdGVtRGF0YT17cHJvamVjdHNEYXRhfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDU2cmVtJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ3Njcm9sbCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7UHJvamVjdEl0ZW19XG4gICAgICAgICAgICA8L0ZpeGVkU2l6ZUxpc3Q+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BdXRvU2l6ZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICksXG4gICAgbW9kYWxFbGVtZW50LFxuICApO1xufTtcblxuaW50ZXJmYWNlIFByb2plY3REYXRhUHJvcHMgZXh0ZW5kcyBMaXN0Q2hpbGRDb21wb25lbnRQcm9wc3tcbiAgZGF0YTogUHJvamVjdERhdGFbXTtcbn1cbmNvbnN0IFByb2plY3RJdGVtOkZDPFByb2plY3REYXRhUHJvcHM+ID0gKHsgZGF0YSwgaW5kZXgsIHN0eWxlIH0pID0+IHtcbiAgY29uc3QgcHJvamVjdERhdGEgPSBkYXRhW2luZGV4XTtcbiAgY29uc3QgSW1hZ2UgPSB1c2VNZW1vKCgpID0+IHByb2plY3REYXRhLmltYWdlKCksIFtwcm9qZWN0RGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFByb2plY3REZXRhaWxcbiAgICAgIGtleT17YHByb2plY3QtZGV0YWlsLSR7aW5kZXh9YH1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgIDxJbWFnZSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPntwcm9qZWN0RGF0YS50aXRsZX08L2Rpdj5cbiAgICA8L1Byb2plY3REZXRhaWw+XG4gICk7XG59O1xuXG5jb25zdCB1c2VTY3JvbGxUb0luZGV4ID0gKHNjcm9sbFJlZjogTXV0YWJsZVJlZk9iamVjdDxGaXhlZFNpemVMaXN0PiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzY3JvbGxSZWYuY3VycmVudCAhPT0gbnVsbCkgeyBzY3JvbGxSZWYuY3VycmVudC5zY3JvbGxUb0l0ZW0oaW5kZXgsICdjZW50ZXInKTsgfVxuICB9LCBbc2Nyb2xsUmVmLCBpbmRleF0pO1xufTtcblxuY29uc3QgdXNlUG9ydGFsU2V0dXAgPSAocG9ydGFsOiBIVE1MRWxlbWVudCwgcm9vdElkID0gJ21vZGFsLXJvb3QnKSA9PiB1c2VFZmZlY3QoKCkgPT4ge1xuICBjb25zdCBtb2RhbFJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb290SWQpO1xuICBtb2RhbFJvb3QuYXBwZW5kQ2hpbGQocG9ydGFsKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBtb2RhbFJvb3QucmVtb3ZlQ2hpbGQocG9ydGFsKTtcbiAgfTtcbn0sIFtwb3J0YWwsIHJvb3RJZF0pO1xuXG4vLyByZW1cbmNvbnN0IGhvcml6b250YWxQYWRkaW5nID0gNTY7XG5jb25zdCBjb250ZW50V2lkdGggPSA4MDtcbmNvbnN0IGNvbnRlbnRIZWlnaHQgPSA4NDtcbmNvbnN0IGNvbnRlbnRHYXAgPSA1LjY7XG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDowO1xuICBsZWZ0OjA7XG4gIHJpZ2h0OjA7XG4gIGJvdHRvbTowO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuY29uc3QgQmFja2Ryb3AgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC44O1xuICB6LWluZGV4OiAtMTtcbmA7XG5cbmNvbnN0IFByb2plY3REZXRhaWwgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHtjb250ZW50V2lkdGh9cmVtO1xuICBoZWlnaHQ6ICR7Y29udGVudEhlaWdodH1yZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGJvcmRlci1yYWRpdXM6IDMuNnJlbTtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLWxlZnQ6IDU2cmVtO1xuICA6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLmltYWdlIHtcbiAgICBoZWlnaHQ6IDQycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmRldGFpbCB7XG4gICAgaGVpZ2h0OiA0MnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdERpYWxvZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectDialog.tsx\n");

/***/ })

})