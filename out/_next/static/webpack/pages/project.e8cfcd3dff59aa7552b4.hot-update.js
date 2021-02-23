webpackHotUpdate_N_E("pages/project",{

/***/ "./components/ProjectDialog.tsx":
/*!**************************************!*\
  !*** ./components/ProjectDialog.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-virtualized-auto-sizer */ \"./node_modules/react-virtualized-auto-sizer/dist/index.esm.js\");\n/* harmony import */ var _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/data/projects */ \"./resources/data/projects/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/gohhwain/work/depromeet/www.depromeet.com/components/ProjectDialog.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable react/no-array-index-key */\n\n\n\n\n\n\n\nvar ProjectDialog = function ProjectDialog(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isClientSide = _useState[0],\n      setClientSide = _useState[1];\n\n  var visible = props.visible;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document !== undefined) {\n      setClientSide(true);\n    }\n  }, [setClientSide]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: isClientSide && visible.visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDialogContents, _objectSpread({}, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 43\n    }, _this)\n  }, void 0, false);\n};\n\n_s(ProjectDialog, \"TqvjQmpctxuQ3TxXSGPB8VZpGC8=\");\n\n_c = ProjectDialog;\n\nvar ProjectDialogContents = function ProjectDialogContents(_ref) {\n  _s2();\n\n  var visible = _ref.visible,\n      setVisible = _ref.setVisible;\n  var modalElement = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return document.createElement('div');\n  }, []);\n  var closeDialog = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    return setVisible({\n      visible: false,\n      index: 0\n    });\n  }, [setVisible]);\n  var scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  useScrollToIndex(scrollRef, visible.index);\n  usePortalSetup(modalElement);\n  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.createPortal( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Backdrop, {\n      onClick: closeDialog\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      disableHeight: true,\n      children: function children(_ref2) {\n        var width = _ref2.width;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectList, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_window__WEBPACK_IMPORTED_MODULE_5__[\"FixedSizeList\"], {\n            itemCount: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"].length,\n            layout: \"horizontal\",\n            height: \"\".concat(contentHeight, \"rem\"),\n            width: width,\n            itemSize: contentWidth * 10,\n            ref: scrollRef,\n            itemData: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            style: {\n              padding: '0 56rem',\n              overflow: 'scroll'\n            },\n            children: ProjectItem\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 7\n  }, _this), modalElement);\n};\n\n_s2(ProjectDialogContents, \"6htfsSUOy87qGCLRa1IvHmjIxFs=\", false, function () {\n  return [useScrollToIndex, usePortalSetup];\n});\n\n_c2 = ProjectDialogContents;\n\nvar ProjectItem = function ProjectItem(_ref3) {\n  var data = _ref3.data,\n      index = _ref3.index,\n      style = _ref3.style;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDetail, {\n    style: style,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"image\",\n      children: \"hi\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"detail\",\n      children: [\"$\", data.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 5\n    }, _this)]\n  }, \"project-detail-\".concat(index), true, {\n    fileName: _jsxFileName,\n    lineNumber: 80,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = ProjectItem;\n\nvar useScrollToIndex = function useScrollToIndex(scrollRef, index) {\n  _s3();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (scrollRef.current !== null) {\n      scrollRef.current.scrollToItem(index, 'center');\n    }\n  }, [scrollRef, index]);\n};\n\n_s3(useScrollToIndex, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar usePortalSetup = function usePortalSetup(portal) {\n  _s4();\n\n  var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'modal-root';\n  return Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var modalRoot = document.getElementById(rootId);\n    modalRoot.appendChild(portal);\n    return function () {\n      modalRoot.removeChild(portal);\n    };\n  }, [portal, rootId]);\n}; // rem\n\n\n_s4(usePortalSetup, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar horizontalPadding = 56;\nvar contentWidth = 80;\nvar contentHeight = 84;\nvar contentGap = 5.6;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Container\",\n  componentId: \"sc-1fctgpg-0\"\n})([\"position:fixed;top:0;left:0;right:0;bottom:0;color:white;\"]);\n_c4 = Container;\nvar Backdrop = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Backdrop\",\n  componentId: \"sc-1fctgpg-1\"\n})([\"position:fixed;inset:0;background-color:black;opacity:0.8;z-index:-1;\"]);\n_c5 = Backdrop;\nvar ProjectList = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectList\",\n  componentId: \"sc-1fctgpg-2\"\n})([\"height:1000px;width:100px;background-color:white;display:flex;align-content:center;\"]);\n_c6 = ProjectList;\nvar ProjectDetail = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectDetail\",\n  componentId: \"sc-1fctgpg-3\"\n})([\"width:\", \"rem;height:\", \"rem;background-color:#212121;border-radius:3.6rem;opacity:1;margin-left:\", \"rem;margin-right:0;padding-right:0;:first-of-type{margin-left:0;}.image{height:42rem;width:100%;}.detail{height:42rem;width:100%;}\"], contentWidth, contentHeight, contentGap);\n_c7 = ProjectDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDialog);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"ProjectDialog\");\n$RefreshReg$(_c2, \"ProjectDialogContents\");\n$RefreshReg$(_c3, \"ProjectItem\");\n$RefreshReg$(_c4, \"Container\");\n$RefreshReg$(_c5, \"Backdrop\");\n$RefreshReg$(_c6, \"ProjectList\");\n$RefreshReg$(_c7, \"ProjectDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0RGlhbG9nLnRzeD83YTMxIl0sIm5hbWVzIjpbIlByb2plY3REaWFsb2ciLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNDbGllbnRTaWRlIiwic2V0Q2xpZW50U2lkZSIsInZpc2libGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsIlByb2plY3REaWFsb2dDb250ZW50cyIsInNldFZpc2libGUiLCJtb2RhbEVsZW1lbnQiLCJ1c2VNZW1vIiwiY3JlYXRlRWxlbWVudCIsImNsb3NlRGlhbG9nIiwidXNlQ2FsbGJhY2siLCJpbmRleCIsInNjcm9sbFJlZiIsInVzZVJlZiIsInVzZVNjcm9sbFRvSW5kZXgiLCJ1c2VQb3J0YWxTZXR1cCIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwid2lkdGgiLCJwcm9qZWN0c0RhdGEiLCJsZW5ndGgiLCJjb250ZW50SGVpZ2h0IiwiY29udGVudFdpZHRoIiwicGFkZGluZyIsIm92ZXJmbG93IiwiUHJvamVjdEl0ZW0iLCJkYXRhIiwic3R5bGUiLCJuYW1lIiwiY3VycmVudCIsInNjcm9sbFRvSXRlbSIsInBvcnRhbCIsInJvb3RJZCIsIm1vZGFsUm9vdCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsImhvcml6b250YWxQYWRkaW5nIiwiY29udGVudEdhcCIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkJhY2tkcm9wIiwiUHJvamVjdExpc3QiLCJQcm9qZWN0RGV0YWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFZQSxJQUFNQSxhQUFxQyxHQUFHLFNBQXhDQSxhQUF3QyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDakJDLHNEQUFRLENBQUMsS0FBRCxDQURTO0FBQUEsTUFDaERDLFlBRGdE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O0FBUU4sSUFBTUcsUUFBUSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZFQUFkO01BQU1DLFE7QUFRTixJQUFNQyxXQUFXLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkZBQWpCO01BQU1FLFc7QUFRTixJQUFNQyxhQUFhLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsZ1BBQ1JuQixZQURRLEVBRVBELGFBRk8sRUFNRmlCLFVBTkUsQ0FBbkI7TUFBTU0sYTtBQXVCU2pELDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0RGlhbG9nLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWFycmF5LWluZGV4LWtleSAqL1xuaW1wb3J0IHtcbiAgRkMsIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYsIE11dGFibGVSZWZPYmplY3QsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBGaXhlZFNpemVMaXN0LCBMaXN0Q2hpbGRDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXdpbmRvdyc7XG5pbXBvcnQgQXV0b1NpemUgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtYXV0by1zaXplcic7XG5pbXBvcnQgcHJvamVjdHNEYXRhIGZyb20gJy4uL3Jlc291cmNlcy9kYXRhL3Byb2plY3RzJztcbmltcG9ydCBsaXN0U3R5bGUgZnJvbSAnLi9wcm9qZWN0LWRpYWxvZy5tb2R1bGUuc2Nzcyc7XG5cbmludGVyZmFjZSBQcm9qZWN0RGlhbG9nVmlzaWJsZUFyZyB7XG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbiAgICBpbmRleDogbnVtYmVyO1xufVxuaW50ZXJmYWNlIFByb2plY3REaWFsb2dQcm9wcyB7XG4gIHZpc2libGU6IFByb2plY3REaWFsb2dWaXNpYmxlQXJnLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgc2V0VmlzaWJsZTogKGFyZzogUHJvamVjdERpYWxvZ1Zpc2libGVBcmcpID0+IHZvaWQ7XG59XG5jb25zdCBQcm9qZWN0RGlhbG9nOiBGQzxQcm9qZWN0RGlhbG9nUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc0NsaWVudFNpZGUsIHNldENsaWVudFNpZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHZpc2libGUgfSA9IHByb3BzO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldENsaWVudFNpZGUodHJ1ZSk7XG4gICAgfVxuICB9LCBbc2V0Q2xpZW50U2lkZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc0NsaWVudFNpZGUgJiYgdmlzaWJsZS52aXNpYmxlICYmIDxQcm9qZWN0RGlhbG9nQ29udGVudHMgey4uLnByb3BzfSAvPn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFByb2plY3REaWFsb2dDb250ZW50czpGQzxQcm9qZWN0RGlhbG9nUHJvcHM+ID0gKHsgdmlzaWJsZSwgc2V0VmlzaWJsZSB9KSA9PiB7XG4gIGNvbnN0IG1vZGFsRWxlbWVudCA9IHVzZU1lbW8oKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIFtdKTtcbiAgY29uc3QgY2xvc2VEaWFsb2cgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHsgdmlzaWJsZTogZmFsc2UsIGluZGV4OiAwIH0pLCBbc2V0VmlzaWJsZV0pO1xuICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWY8Rml4ZWRTaXplTGlzdD4obnVsbCk7XG5cbiAgdXNlU2Nyb2xsVG9JbmRleChzY3JvbGxSZWYsIHZpc2libGUuaW5kZXgpO1xuICB1c2VQb3J0YWxTZXR1cChtb2RhbEVsZW1lbnQpO1xuXG4gIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJhY2tkcm9wIG9uQ2xpY2s9e2Nsb3NlRGlhbG9nfSAvPlxuICAgICAgICA8QXV0b1NpemVcbiAgICAgICAgICBkaXNhYmxlSGVpZ2h0XG4gICAgICAgID5cbiAgICAgICAgICB7KHsgd2lkdGggfSkgPT4gKFxuICAgICAgICAgICAgPFByb2plY3RMaXN0PlxuICAgICAgICAgICAgICA8Rml4ZWRTaXplTGlzdFxuICAgICAgICAgICAgICAgIGl0ZW1Db3VudD17cHJvamVjdHNEYXRhLmxlbmd0aH1cbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2Ake2NvbnRlbnRIZWlnaHR9cmVtYH1cbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgaXRlbVNpemU9e2NvbnRlbnRXaWR0aCAqIDEwfVxuICAgICAgICAgICAgICAgIHJlZj17c2Nyb2xsUmVmfVxuICAgICAgICAgICAgICAgIGl0ZW1EYXRhPXtwcm9qZWN0c0RhdGF9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDU2cmVtJyxcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1Byb2plY3RJdGVtfVxuICAgICAgICAgICAgICA8L0ZpeGVkU2l6ZUxpc3Q+XG4gICAgICAgICAgICA8L1Byb2plY3RMaXN0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQXV0b1NpemU+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApLFxuICAgIG1vZGFsRWxlbWVudCxcbiAgKTtcbn07XG5cbmNvbnN0IFByb2plY3RJdGVtOkZDPExpc3RDaGlsZENvbXBvbmVudFByb3BzPiA9ICh7IGRhdGEsIGluZGV4LCBzdHlsZSB9KSA9PiAoXG4gIDxQcm9qZWN0RGV0YWlsXG4gICAga2V5PXtgcHJvamVjdC1kZXRhaWwtJHtpbmRleH1gfVxuICAgIHN0eWxlPXtzdHlsZX1cbiAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5oaTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsXCI+JHtkYXRhLm5hbWV9PC9kaXY+XG4gIDwvUHJvamVjdERldGFpbD5cbik7XG5jb25zdCB1c2VTY3JvbGxUb0luZGV4ID0gKHNjcm9sbFJlZjogTXV0YWJsZVJlZk9iamVjdDxGaXhlZFNpemVMaXN0PiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzY3JvbGxSZWYuY3VycmVudCAhPT0gbnVsbCkgeyBzY3JvbGxSZWYuY3VycmVudC5zY3JvbGxUb0l0ZW0oaW5kZXgsICdjZW50ZXInKTsgfVxuICB9LCBbc2Nyb2xsUmVmLCBpbmRleF0pO1xufTtcblxuY29uc3QgdXNlUG9ydGFsU2V0dXAgPSAocG9ydGFsOiBIVE1MRWxlbWVudCwgcm9vdElkID0gJ21vZGFsLXJvb3QnKSA9PiB1c2VFZmZlY3QoKCkgPT4ge1xuICBjb25zdCBtb2RhbFJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb290SWQpO1xuICBtb2RhbFJvb3QuYXBwZW5kQ2hpbGQocG9ydGFsKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBtb2RhbFJvb3QucmVtb3ZlQ2hpbGQocG9ydGFsKTtcbiAgfTtcbn0sIFtwb3J0YWwsIHJvb3RJZF0pO1xuXG4vLyByZW1cbmNvbnN0IGhvcml6b250YWxQYWRkaW5nID0gNTY7XG5jb25zdCBjb250ZW50V2lkdGggPSA4MDtcbmNvbnN0IGNvbnRlbnRIZWlnaHQgPSA4NDtcbmNvbnN0IGNvbnRlbnRHYXAgPSA1LjY7XG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDowO1xuICBsZWZ0OjA7XG4gIHJpZ2h0OjA7XG4gIGJvdHRvbTowO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuY29uc3QgQmFja2Ryb3AgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC44O1xuICB6LWluZGV4OiAtMTtcbmA7XG5cbmNvbnN0IFByb2plY3RMaXN0ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuYDtcblxuY29uc3QgUHJvamVjdERldGFpbCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAke2NvbnRlbnRXaWR0aH1yZW07XG4gIGhlaWdodDogJHtjb250ZW50SGVpZ2h0fXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgYm9yZGVyLXJhZGl1czogMy42cmVtO1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tbGVmdDogJHtjb250ZW50R2FwfXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICA6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgLmltYWdlIHtcbiAgICBoZWlnaHQ6IDQycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmRldGFpbCB7XG4gICAgaGVpZ2h0OiA0MnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdERpYWxvZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectDialog.tsx\n");

/***/ })

})