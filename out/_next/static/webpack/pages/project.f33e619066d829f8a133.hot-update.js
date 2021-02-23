webpackHotUpdate_N_E("pages/project",{

/***/ "./components/ProjectDialog.tsx":
/*!**************************************!*\
  !*** ./components/ProjectDialog.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-virtualized-auto-sizer */ \"./node_modules/react-virtualized-auto-sizer/dist/index.esm.js\");\n/* harmony import */ var _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/data/projects */ \"./resources/data/projects/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/gohhwain/work/depromeet/www.depromeet.com/components/ProjectDialog.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable react/no-array-index-key */\n\n\n\n\n\n\n\nvar ProjectDialog = function ProjectDialog(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isClientSide = _useState[0],\n      setClientSide = _useState[1];\n\n  var visible = props.visible;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document !== undefined) {\n      setClientSide(true);\n    }\n  }, [setClientSide]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: isClientSide && visible.visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDialogContents, _objectSpread({}, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 43\n    }, _this)\n  }, void 0, false);\n};\n\n_s(ProjectDialog, \"TqvjQmpctxuQ3TxXSGPB8VZpGC8=\");\n\n_c = ProjectDialog;\n\nvar ProjectDialogContents = function ProjectDialogContents(_ref) {\n  _s2();\n\n  var visible = _ref.visible,\n      setVisible = _ref.setVisible;\n  var modalElement = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return document.createElement('div');\n  }, []);\n  var closeDialog = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    return setVisible({\n      visible: false,\n      index: 0\n    });\n  }, [setVisible]);\n  var scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  useScrollToIndex(scrollRef, visible.index);\n  usePortalSetup(modalElement);\n  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.createPortal( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Backdrop, {\n      onClick: closeDialog\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectList, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: function children(_ref2) {\n          var height = _ref2.height,\n              width = _ref2.width;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_window__WEBPACK_IMPORTED_MODULE_5__[\"FixedSizeList\"], {\n            itemCount: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"].length,\n            layout: \"horizontal\",\n            height: \"\".concat(contentHeight, \"rem\"),\n            width: width,\n            itemSize: contentWidth * 12,\n            ref: scrollRef,\n            itemData: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            children: ProjectItem\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 15\n          }, _this);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 7\n  }, _this), modalElement);\n};\n\n_s2(ProjectDialogContents, \"6htfsSUOy87qGCLRa1IvHmjIxFs=\", false, function () {\n  return [useScrollToIndex, usePortalSetup];\n});\n\n_c2 = ProjectDialogContents;\n\nvar ProjectItem = function ProjectItem(_ref3) {\n  var data = _ref3.data,\n      index = _ref3.index;\n  console.log(data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDetail, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"image\",\n      children: \"hi\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"detail\",\n      children: \"bye\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, _this)]\n  }, \"project-detail-\".concat(index), true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 5\n  }, _this);\n};\n\n_c3 = ProjectItem;\n\nvar useScrollToIndex = function useScrollToIndex(scrollRef, index) {\n  _s3();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (scrollRef.current !== null) {\n      scrollRef.current.scrollToItem(index, 'center');\n    }\n  }, [scrollRef, index]);\n};\n\n_s3(useScrollToIndex, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar usePortalSetup = function usePortalSetup(portal) {\n  _s4();\n\n  var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'modal-root';\n  return Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var modalRoot = document.getElementById(rootId);\n    modalRoot.appendChild(portal);\n    return function () {\n      modalRoot.removeChild(portal);\n    };\n  }, [portal, rootId]);\n}; // rem\n\n\n_s4(usePortalSetup, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar horizontalPadding = 56;\nvar contentWidth = 80;\nvar contentHeight = 84;\nvar contentGap = 5.6;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Container\",\n  componentId: \"sc-1fctgpg-0\"\n})([\"position:fixed;top:0;left:0;right:0;bottom:0;color:white;\"]);\n_c4 = Container;\nvar Backdrop = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Backdrop\",\n  componentId: \"sc-1fctgpg-1\"\n})([\"position:fixed;inset:0;background-color:black;opacity:0.8;z-index:-1;\"]);\n_c5 = Backdrop;\nvar ProjectList = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectList\",\n  componentId: \"sc-1fctgpg-2\"\n})([\"padding:0 \", \"rem;height:100%;width:100%;display:flex;align-items:flex;\"], horizontalPadding);\n_c6 = ProjectList;\nvar ProjectDetail = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectDetail\",\n  componentId: \"sc-1fctgpg-3\"\n})([\"width:\", \"rem;height:\", \"rem;background-color:#212121;border-radius:3.6rem;opacity:1;margin-left:\", \"rem;margin-right:0;padding-right:0;:first-of-type{margin-left:0;}.image{height:42rem;width:100%;}.detail{height:42rem;width:100%;}\"], contentWidth, contentHeight, contentGap);\n_c7 = ProjectDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDialog);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"ProjectDialog\");\n$RefreshReg$(_c2, \"ProjectDialogContents\");\n$RefreshReg$(_c3, \"ProjectItem\");\n$RefreshReg$(_c4, \"Container\");\n$RefreshReg$(_c5, \"Backdrop\");\n$RefreshReg$(_c6, \"ProjectList\");\n$RefreshReg$(_c7, \"ProjectDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0RGlhbG9nLnRzeD83YTMxIl0sIm5hbWVzIjpbIlByb2plY3REaWFsb2ciLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNDbGllbnRTaWRlIiwic2V0Q2xpZW50U2lkZSIsInZpc2libGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsIlByb2plY3REaWFsb2dDb250ZW50cyIsInNldFZpc2libGUiLCJtb2RhbEVsZW1lbnQiLCJ1c2VNZW1vIiwiY3JlYXRlRWxlbWVudCIsImNsb3NlRGlhbG9nIiwidXNlQ2FsbGJhY2siLCJpbmRleCIsInNjcm9sbFJlZiIsInVzZVJlZiIsInVzZVNjcm9sbFRvSW5kZXgiLCJ1c2VQb3J0YWxTZXR1cCIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwiaGVpZ2h0Iiwid2lkdGgiLCJwcm9qZWN0c0RhdGEiLCJsZW5ndGgiLCJjb250ZW50SGVpZ2h0IiwiY29udGVudFdpZHRoIiwiUHJvamVjdEl0ZW0iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJzY3JvbGxUb0l0ZW0iLCJwb3J0YWwiLCJyb290SWQiLCJtb2RhbFJvb3QiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJob3Jpem9udGFsUGFkZGluZyIsImNvbnRlbnRHYXAiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJCYWNrZHJvcCIsIlByb2plY3RMaXN0IiwiUHJvamVjdERldGFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWUEsSUFBTUEsYUFBcUMsR0FBRyxTQUF4Q0EsYUFBd0MsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ2pCQyxzREFBUSxDQUFDLEtBQUQsQ0FEUztBQUFBLE1BQ2hEQyxZQURnRDtBQUFBLE1BQ2xD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QVY7QUFBQTtBQUFBO0FBQUEsZ0ZBQ0ZKLGlCQURFLENBQWpCO01BQU1NLFc7QUFRTixJQUFNQyxhQUFhLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ1BBQ1JqQixZQURRLEVBRVBELGFBRk8sRUFNRmUsVUFORSxDQUFuQjtNQUFNTSxhO0FBdUJTaEQsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3REaWFsb2cudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5ICovXG5pbXBvcnQge1xuICBGQywgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgTXV0YWJsZVJlZk9iamVjdCxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEZpeGVkU2l6ZUxpc3QsIExpc3RDaGlsZENvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtd2luZG93JztcbmltcG9ydCBBdXRvU2l6ZSBmcm9tICdyZWFjdC12aXJ0dWFsaXplZC1hdXRvLXNpemVyJztcbmltcG9ydCBwcm9qZWN0c0RhdGEgZnJvbSAnLi4vcmVzb3VyY2VzL2RhdGEvcHJvamVjdHMnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vcHJvamVjdC1kaWFsb2cubW9kdWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgUHJvamVjdERpYWxvZ1Zpc2libGVBcmcge1xuICAgIHZpc2libGU6IGJvb2xlYW47XG4gICAgaW5kZXg6IG51bWJlcjtcbn1cbmludGVyZmFjZSBQcm9qZWN0RGlhbG9nUHJvcHMge1xuICB2aXNpYmxlOiBQcm9qZWN0RGlhbG9nVmlzaWJsZUFyZyxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIHNldFZpc2libGU6IChhcmc6IFByb2plY3REaWFsb2dWaXNpYmxlQXJnKSA9PiB2b2lkO1xufVxuY29uc3QgUHJvamVjdERpYWxvZzogRkM8UHJvamVjdERpYWxvZ1Byb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbaXNDbGllbnRTaWRlLCBzZXRDbGllbnRTaWRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB2aXNpYmxlIH0gPSBwcm9wcztcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRDbGllbnRTaWRlKHRydWUpO1xuICAgIH1cbiAgfSwgW3NldENsaWVudFNpZGVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXNDbGllbnRTaWRlICYmIHZpc2libGUudmlzaWJsZSAmJiA8UHJvamVjdERpYWxvZ0NvbnRlbnRzIHsuLi5wcm9wc30gLz59XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBQcm9qZWN0RGlhbG9nQ29udGVudHM6RkM8UHJvamVjdERpYWxvZ1Byb3BzPiA9ICh7IHZpc2libGUsIHNldFZpc2libGUgfSkgPT4ge1xuICBjb25zdCBtb2RhbEVsZW1lbnQgPSB1c2VNZW1vKCgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCBbXSk7XG4gIGNvbnN0IGNsb3NlRGlhbG9nID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh7IHZpc2libGU6IGZhbHNlLCBpbmRleDogMCB9KSwgW3NldFZpc2libGVdKTtcbiAgY29uc3Qgc2Nyb2xsUmVmID0gdXNlUmVmPEZpeGVkU2l6ZUxpc3Q+KG51bGwpO1xuXG4gIHVzZVNjcm9sbFRvSW5kZXgoc2Nyb2xsUmVmLCB2aXNpYmxlLmluZGV4KTtcbiAgdXNlUG9ydGFsU2V0dXAobW9kYWxFbGVtZW50KTtcblxuICByZXR1cm4gUmVhY3RET00uY3JlYXRlUG9ydGFsKFxuICAgIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCYWNrZHJvcCBvbkNsaWNrPXtjbG9zZURpYWxvZ30gLz5cbiAgICAgICAgPFByb2plY3RMaXN0PlxuICAgICAgICAgIDxBdXRvU2l6ZT5cbiAgICAgICAgICAgIHsoeyBoZWlnaHQsIHdpZHRoIH0pID0+IChcbiAgICAgICAgICAgICAgPEZpeGVkU2l6ZUxpc3RcbiAgICAgICAgICAgICAgICBpdGVtQ291bnQ9e3Byb2plY3RzRGF0YS5sZW5ndGh9XG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiaG9yaXpvbnRhbFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtgJHtjb250ZW50SGVpZ2h0fXJlbWB9XG4gICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgIGl0ZW1TaXplPXtjb250ZW50V2lkdGggKiAxMn1cbiAgICAgICAgICAgICAgICByZWY9e3Njcm9sbFJlZn1cbiAgICAgICAgICAgICAgICBpdGVtRGF0YT17cHJvamVjdHNEYXRhfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1Byb2plY3RJdGVtfVxuICAgICAgICAgICAgICA8L0ZpeGVkU2l6ZUxpc3Q+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQXV0b1NpemU+XG4gICAgICAgIDwvUHJvamVjdExpc3Q+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApLFxuICAgIG1vZGFsRWxlbWVudCxcbiAgKTtcbn07XG5cbmNvbnN0IFByb2plY3RJdGVtOkZDPExpc3RDaGlsZENvbXBvbmVudFByb3BzPiA9ICh7IGRhdGEsIGluZGV4IH0pID0+IHtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIHJldHVybiAoXG4gICAgPFByb2plY3REZXRhaWxcbiAgICAgIGtleT17YHByb2plY3QtZGV0YWlsLSR7aW5kZXh9YH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+aGk8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsXCI+YnllPC9kaXY+XG4gICAgPC9Qcm9qZWN0RGV0YWlsPlxuICApO1xufTtcbmNvbnN0IHVzZVNjcm9sbFRvSW5kZXggPSAoc2Nyb2xsUmVmOiBNdXRhYmxlUmVmT2JqZWN0PEZpeGVkU2l6ZUxpc3Q+LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNjcm9sbFJlZi5jdXJyZW50ICE9PSBudWxsKSB7IHNjcm9sbFJlZi5jdXJyZW50LnNjcm9sbFRvSXRlbShpbmRleCwgJ2NlbnRlcicpOyB9XG4gIH0sIFtzY3JvbGxSZWYsIGluZGV4XSk7XG59O1xuXG5jb25zdCB1c2VQb3J0YWxTZXR1cCA9IChwb3J0YWw6IEhUTUxFbGVtZW50LCByb290SWQgPSAnbW9kYWwtcm9vdCcpID0+IHVzZUVmZmVjdCgoKSA9PiB7XG4gIGNvbnN0IG1vZGFsUm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJvb3RJZCk7XG4gIG1vZGFsUm9vdC5hcHBlbmRDaGlsZChwb3J0YWwpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIG1vZGFsUm9vdC5yZW1vdmVDaGlsZChwb3J0YWwpO1xuICB9O1xufSwgW3BvcnRhbCwgcm9vdElkXSk7XG5cbi8vIHJlbVxuY29uc3QgaG9yaXpvbnRhbFBhZGRpbmcgPSA1NjtcbmNvbnN0IGNvbnRlbnRXaWR0aCA9IDgwO1xuY29uc3QgY29udGVudEhlaWdodCA9IDg0O1xuY29uc3QgY29udGVudEdhcCA9IDUuNjtcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOjA7XG4gIGxlZnQ6MDtcbiAgcmlnaHQ6MDtcbiAgYm90dG9tOjA7XG4gIGNvbG9yOiB3aGl0ZTtcbmA7XG5jb25zdCBCYWNrZHJvcCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjg7XG4gIHotaW5kZXg6IC0xO1xuYDtcblxuY29uc3QgUHJvamVjdExpc3QgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwICR7aG9yaXpvbnRhbFBhZGRpbmd9cmVtO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleDtcbmA7XG5cbmNvbnN0IFByb2plY3REZXRhaWwgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHtjb250ZW50V2lkdGh9cmVtO1xuICBoZWlnaHQ6ICR7Y29udGVudEhlaWdodH1yZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGJvcmRlci1yYWRpdXM6IDMuNnJlbTtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLWxlZnQ6ICR7Y29udGVudEdhcH1yZW07XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5pbWFnZSB7XG4gICAgaGVpZ2h0OiA0MnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5kZXRhaWwge1xuICAgIGhlaWdodDogNDJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3REaWFsb2c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProjectDialog.tsx\n");

/***/ })

})