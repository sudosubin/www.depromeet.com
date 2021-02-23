webpackHotUpdate_N_E("pages/project",{

/***/ "./components/ProjectDialog.tsx":
/*!**************************************!*\
  !*** ./components/ProjectDialog.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-virtualized-auto-sizer */ \"./node_modules/react-virtualized-auto-sizer/dist/index.esm.js\");\n/* harmony import */ var _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/data/projects */ \"./resources/data/projects/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/gohhwain/work/depromeet/www.depromeet.com/components/ProjectDialog.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable react/no-array-index-key */\n\n\n\n\n\n\n\nvar ProjectDialog = function ProjectDialog(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isClientSide = _useState[0],\n      setClientSide = _useState[1];\n\n  var visible = props.visible;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document !== undefined) {\n      setClientSide(true);\n    }\n  }, [setClientSide]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: isClientSide && visible.visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDialogContents, _objectSpread({}, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 43\n    }, _this)\n  }, void 0, false);\n};\n\n_s(ProjectDialog, \"TqvjQmpctxuQ3TxXSGPB8VZpGC8=\");\n\n_c = ProjectDialog;\n\nvar ProjectDialogContents = function ProjectDialogContents(_ref) {\n  _s2();\n\n  var visible = _ref.visible,\n      setVisible = _ref.setVisible;\n  var modalElement = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return document.createElement('div');\n  }, []);\n  var closeDialog = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    return setVisible({\n      visible: false,\n      index: 0\n    });\n  }, [setVisible]);\n  var scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  useScrollToIndex(scrollRef, visible.index);\n  usePortalSetup(modalElement);\n  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.createPortal( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Backdrop, {\n      onClick: closeDialog\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: function children(_ref2) {\n        var width = _ref2.width,\n            height = _ref2.height;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectsListWrapper, {\n          height: height,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_window__WEBPACK_IMPORTED_MODULE_5__[\"FixedSizeList\"], {\n            itemCount: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"].length,\n            layout: \"horizontal\",\n            height: \"\".concat(contentHeight, \"rem\"),\n            width: width,\n            itemSize: contentWidth * 10,\n            ref: scrollRef,\n            itemData: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            style: {\n              padding: '0 56rem',\n              overflow: 'scroll',\n              display: 'flex',\n              justifyContent: 'center',\n              alignContent: 'center'\n            },\n            children: ProjectItem\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 7\n  }, _this), modalElement);\n};\n\n_s2(ProjectDialogContents, \"6htfsSUOy87qGCLRa1IvHmjIxFs=\", false, function () {\n  return [useScrollToIndex, usePortalSetup];\n});\n\n_c2 = ProjectDialogContents;\n\nvar ProjectItem = function ProjectItem(_ref3) {\n  _s3();\n\n  var data = _ref3.data,\n      index = _ref3.index,\n      style = _ref3.style;\n  var projectData = data[index];\n  var Image = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return projectData.image();\n  }, [projectData]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDetail, {\n    style: style,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"image\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"image-shadow\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"detail\",\n      children: projectData.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }, _this)]\n  }, \"project-detail-\".concat(index), true, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 5\n  }, _this);\n};\n\n_s3(ProjectItem, \"oHF6iZ4uCM2aIX7eb3MU31h4r7w=\");\n\n_c3 = ProjectItem;\n\nvar useScrollToIndex = function useScrollToIndex(scrollRef, index) {\n  _s4();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (scrollRef.current !== null) {\n      scrollRef.current.scrollToItem(index, 'center');\n    }\n  }, [scrollRef, index]);\n};\n\n_s4(useScrollToIndex, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar usePortalSetup = function usePortalSetup(portal) {\n  _s5();\n\n  var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'modal-root';\n  return Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var modalRoot = document.getElementById(rootId);\n    modalRoot.appendChild(portal);\n    return function () {\n      modalRoot.removeChild(portal);\n    };\n  }, [portal, rootId]);\n}; // rem\n\n\n_s5(usePortalSetup, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar horizontalPadding = 56;\nvar contentWidth = 80;\nvar contentHeight = 84;\nvar contentGap = 5.6;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Container\",\n  componentId: \"sc-1fctgpg-0\"\n})([\"position:fixed;top:0;left:0;right:0;bottom:0;color:white;\"]);\n_c4 = Container;\nvar Backdrop = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Backdrop\",\n  componentId: \"sc-1fctgpg-1\"\n})([\"position:fixed;inset:0;background-color:black;opacity:0.8;z-index:-1;\"]);\n_c5 = Backdrop;\nvar ProjectsListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectsListWrapper\",\n  componentId: \"sc-1fctgpg-2\"\n})([\"display:flex;height:\", \"px;align-items:center;\"], function (_ref4) {\n  var height = _ref4.height;\n  return height;\n});\n_c6 = ProjectsListWrapper;\nvar ProjectDetail = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectDetail\",\n  componentId: \"sc-1fctgpg-3\"\n})([\"position:relative;width:\", \"rem;height:\", \"rem;background-color:#212121;border-radius:3.6rem;opacity:1;margin-left:5.6rem;:first-of-type{margin-left:0;}.image{height:42rem;width:100%;display:flex;justify-content:center;align-items:flex-end;position:relative;.image-shadow{position:absolute;height:19rem;width:100%;background-color:white;}}.detail{height:42rem;width:100%;}\"], contentWidth, contentHeight);\n_c7 = ProjectDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDialog);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"ProjectDialog\");\n$RefreshReg$(_c2, \"ProjectDialogContents\");\n$RefreshReg$(_c3, \"ProjectItem\");\n$RefreshReg$(_c4, \"Container\");\n$RefreshReg$(_c5, \"Backdrop\");\n$RefreshReg$(_c6, \"ProjectsListWrapper\");\n$RefreshReg$(_c7, \"ProjectDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0RGlhbG9nLnRzeD83YTMxIl0sIm5hbWVzIjpbIlByb2plY3REaWFsb2ciLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNDbGllbnRTaWRlIiwic2V0Q2xpZW50U2lkZSIsInZpc2libGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsIlByb2plY3REaWFsb2dDb250ZW50cyIsInNldFZpc2libGUiLCJtb2RhbEVsZW1lbnQiLCJ1c2VNZW1vIiwiY3JlYXRlRWxlbWVudCIsImNsb3NlRGlhbG9nIiwidXNlQ2FsbGJhY2siLCJpbmRleCIsInNjcm9sbFJlZiIsInVzZVJlZiIsInVzZVNjcm9sbFRvSW5kZXgiLCJ1c2VQb3J0YWxTZXR1cCIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9qZWN0c0RhdGEiLCJsZW5ndGgiLCJjb250ZW50SGVpZ2h0IiwiY29udGVudFdpZHRoIiwicGFkZGluZyIsIm92ZXJmbG93IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25Db250ZW50IiwiUHJvamVjdEl0ZW0iLCJkYXRhIiwic3R5bGUiLCJwcm9qZWN0RGF0YSIsIkltYWdlIiwiaW1hZ2UiLCJ0aXRsZSIsImN1cnJlbnQiLCJzY3JvbGxUb0l0ZW0iLCJwb3J0YWwiLCJyb290SWQiLCJtb2RhbFJvb3QiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJob3Jpem9udGFsUGFkZGluZyIsImNvbnRlbnRHYXAiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJCYWNrZHJvcCIsIlByb2plY3RzTGlzdFdyYXBwZXIiLCJQcm9qZWN0RGV0YWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBYUEsSUFBTUEsYUFBcUMs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QXRCLHVFQUErQixZQUEvQjtBQUFBLFNBQWdEdEMsdURBQVMsQ0FBQyxZQUFNO0FBQ3JGLFFBQU11QyxTQUFTLEdBQUd0QyxRQUFRLENBQUN1QyxjQUFULENBQXdCRixNQUF4QixDQUFsQjtBQUNBQyxhQUFTLENBQUNFLFdBQVYsQ0FBc0JKLE1BQXRCO0FBQ0EsV0FBTyxZQUFNO0FBQ1hFLGVBQVMsQ0FBQ0csV0FBVixDQUFzQkwsTUFBdEI7QUFDRCxLQUZEO0FBR0QsR0FOK0UsRUFNN0UsQ0FBQ0EsTUFBRCxFQUFTQyxNQUFULENBTjZFLENBQXpEO0FBQUEsQ0FBdkIsQyxDQVFBOzs7SUFSTXhCLGM7O0FBU04sSUFBTTZCLGlCQUFpQixHQUFHLEVBQTFCO0FBQ0EsSUFBTXJCLFlBQVksR0FBRyxFQUFyQjtBQUNBLElBQU1ELGFBQWEsR0FBRyxFQUF0QjtBQUNBLElBQU11QixVQUFVLEdBQUcsR0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaUVBQWY7TUFBTUYsUztBQVFOLElBQU1HLFFBQVEsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2RUFBZDtNQUFNQyxRO0FBUU4sSUFBTUMsbUJBQW1CLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdURBRWI7QUFBQSxNQUFHN0IsTUFBSCxTQUFHQSxNQUFIO0FBQUEsU0FBZ0JBLE1BQWhCO0FBQUEsQ0FGYSxDQUF6QjtNQUFNK0IsbUI7QUFLTixJQUFNQyxhQUFhLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNlhBRVJ6QixZQUZRLEVBR1BELGFBSE8sQ0FBbkI7TUFBTTZCLGE7QUFnQ1N4RCw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdERpYWxvZy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXkgKi9cbmltcG9ydCB7XG4gIEZDLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmLCBNdXRhYmxlUmVmT2JqZWN0LFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgRml4ZWRTaXplTGlzdCwgTGlzdENoaWxkQ29tcG9uZW50UHJvcHMsXG59IGZyb20gJ3JlYWN0LXdpbmRvdyc7XG5pbXBvcnQgQXV0b1NpemUgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtYXV0by1zaXplcic7XG5pbXBvcnQgcHJvamVjdHNEYXRhIGZyb20gJy4uL3Jlc291cmNlcy9kYXRhL3Byb2plY3RzJztcbmltcG9ydCB7IFByb2plY3REYXRhIH0gZnJvbSAnLi4vcmVzb3VyY2VzL2RhdGEvaW50ZXJmYWNlJztcbmltcG9ydCBsaXN0U3R5bGUgZnJvbSAnLi9wcm9qZWN0LWRpYWxvZy5tb2R1bGUuc2Nzcyc7XG5cbmludGVyZmFjZSBQcm9qZWN0RGlhbG9nVmlzaWJsZUFyZyB7XG4gICAgdmlzaWJsZTogYm9vbGVhbjtcbiAgICBpbmRleDogbnVtYmVyO1xufVxuaW50ZXJmYWNlIFByb2plY3REaWFsb2dQcm9wcyB7XG4gIHZpc2libGU6IFByb2plY3REaWFsb2dWaXNpYmxlQXJnLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgc2V0VmlzaWJsZTogKGFyZzogUHJvamVjdERpYWxvZ1Zpc2libGVBcmcpID0+IHZvaWQ7XG59XG5jb25zdCBQcm9qZWN0RGlhbG9nOiBGQzxQcm9qZWN0RGlhbG9nUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc0NsaWVudFNpZGUsIHNldENsaWVudFNpZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHZpc2libGUgfSA9IHByb3BzO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldENsaWVudFNpZGUodHJ1ZSk7XG4gICAgfVxuICB9LCBbc2V0Q2xpZW50U2lkZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc0NsaWVudFNpZGUgJiYgdmlzaWJsZS52aXNpYmxlICYmIDxQcm9qZWN0RGlhbG9nQ29udGVudHMgey4uLnByb3BzfSAvPn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFByb2plY3REaWFsb2dDb250ZW50czpGQzxQcm9qZWN0RGlhbG9nUHJvcHM+ID0gKHsgdmlzaWJsZSwgc2V0VmlzaWJsZSB9KSA9PiB7XG4gIGNvbnN0IG1vZGFsRWxlbWVudCA9IHVzZU1lbW8oKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIFtdKTtcbiAgY29uc3QgY2xvc2VEaWFsb2cgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHsgdmlzaWJsZTogZmFsc2UsIGluZGV4OiAwIH0pLCBbc2V0VmlzaWJsZV0pO1xuICBjb25zdCBzY3JvbGxSZWYgPSB1c2VSZWY8Rml4ZWRTaXplTGlzdD4obnVsbCk7XG5cbiAgdXNlU2Nyb2xsVG9JbmRleChzY3JvbGxSZWYsIHZpc2libGUuaW5kZXgpO1xuICB1c2VQb3J0YWxTZXR1cChtb2RhbEVsZW1lbnQpO1xuXG4gIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwoXG4gICAgKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJhY2tkcm9wIG9uQ2xpY2s9e2Nsb3NlRGlhbG9nfSAvPlxuICAgICAgICA8QXV0b1NpemU+XG4gICAgICAgICAgeyh7IHdpZHRoLCBoZWlnaHQgfSkgPT4gKFxuICAgICAgICAgICAgPFByb2plY3RzTGlzdFdyYXBwZXIgaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICAgICAgICA8Rml4ZWRTaXplTGlzdFxuICAgICAgICAgICAgICAgIGl0ZW1Db3VudD17cHJvamVjdHNEYXRhLmxlbmd0aH1cbiAgICAgICAgICAgICAgICBsYXlvdXQ9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2Ake2NvbnRlbnRIZWlnaHR9cmVtYH1cbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgaXRlbVNpemU9e2NvbnRlbnRXaWR0aCAqIDEwfVxuICAgICAgICAgICAgICAgIHJlZj17c2Nyb2xsUmVmfVxuICAgICAgICAgICAgICAgIGl0ZW1EYXRhPXtwcm9qZWN0c0RhdGF9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDU2cmVtJyxcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtQcm9qZWN0SXRlbX1cbiAgICAgICAgICAgICAgPC9GaXhlZFNpemVMaXN0PlxuICAgICAgICAgICAgPC9Qcm9qZWN0c0xpc3RXcmFwcGVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQXV0b1NpemU+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApLFxuICAgIG1vZGFsRWxlbWVudCxcbiAgKTtcbn07XG5cbmludGVyZmFjZSBQcm9qZWN0RGF0YVByb3BzIGV4dGVuZHMgTGlzdENoaWxkQ29tcG9uZW50UHJvcHN7XG4gIGRhdGE6IFByb2plY3REYXRhW107XG59XG5jb25zdCBQcm9qZWN0SXRlbTpGQzxQcm9qZWN0RGF0YVByb3BzPiA9ICh7IGRhdGEsIGluZGV4LCBzdHlsZSB9KSA9PiB7XG4gIGNvbnN0IHByb2plY3REYXRhID0gZGF0YVtpbmRleF07XG4gIGNvbnN0IEltYWdlID0gdXNlTWVtbygoKSA9PiBwcm9qZWN0RGF0YS5pbWFnZSgpLCBbcHJvamVjdERhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm9qZWN0RGV0YWlsXG4gICAgICBrZXk9e2Bwcm9qZWN0LWRldGFpbC0ke2luZGV4fWB9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICA8SW1hZ2UgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1zaGFkb3dcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPntwcm9qZWN0RGF0YS50aXRsZX08L2Rpdj5cbiAgICA8L1Byb2plY3REZXRhaWw+XG4gICk7XG59O1xuXG5jb25zdCB1c2VTY3JvbGxUb0luZGV4ID0gKHNjcm9sbFJlZjogTXV0YWJsZVJlZk9iamVjdDxGaXhlZFNpemVMaXN0PiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzY3JvbGxSZWYuY3VycmVudCAhPT0gbnVsbCkgeyBzY3JvbGxSZWYuY3VycmVudC5zY3JvbGxUb0l0ZW0oaW5kZXgsICdjZW50ZXInKTsgfVxuICB9LCBbc2Nyb2xsUmVmLCBpbmRleF0pO1xufTtcblxuY29uc3QgdXNlUG9ydGFsU2V0dXAgPSAocG9ydGFsOiBIVE1MRWxlbWVudCwgcm9vdElkID0gJ21vZGFsLXJvb3QnKSA9PiB1c2VFZmZlY3QoKCkgPT4ge1xuICBjb25zdCBtb2RhbFJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChyb290SWQpO1xuICBtb2RhbFJvb3QuYXBwZW5kQ2hpbGQocG9ydGFsKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBtb2RhbFJvb3QucmVtb3ZlQ2hpbGQocG9ydGFsKTtcbiAgfTtcbn0sIFtwb3J0YWwsIHJvb3RJZF0pO1xuXG4vLyByZW1cbmNvbnN0IGhvcml6b250YWxQYWRkaW5nID0gNTY7XG5jb25zdCBjb250ZW50V2lkdGggPSA4MDtcbmNvbnN0IGNvbnRlbnRIZWlnaHQgPSA4NDtcbmNvbnN0IGNvbnRlbnRHYXAgPSA1LjY7XG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDowO1xuICBsZWZ0OjA7XG4gIHJpZ2h0OjA7XG4gIGJvdHRvbTowO1xuICBjb2xvcjogd2hpdGU7XG5gO1xuY29uc3QgQmFja2Ryb3AgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC44O1xuICB6LWluZGV4OiAtMTtcbmA7XG5cbmNvbnN0IFByb2plY3RzTGlzdFdyYXBwZXIgPSBzdHlsZWQuZGl2PHtoZWlnaHQ6IHN0cmluZ30+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IGhlaWdodH1weDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5jb25zdCBQcm9qZWN0RGV0YWlsID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogJHtjb250ZW50V2lkdGh9cmVtO1xuICBoZWlnaHQ6ICR7Y29udGVudEhlaWdodH1yZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGJvcmRlci1yYWRpdXM6IDMuNnJlbTtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLWxlZnQ6IDUuNnJlbTtcbiAgOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5pbWFnZSB7XG4gICAgaGVpZ2h0OiA0MnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmltYWdlLXNoYWRvdyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IDE5cmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlsIHtcbiAgICBoZWlnaHQ6IDQycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RGlhbG9nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ProjectDialog.tsx\n");

/***/ })

})