webpackHotUpdate_N_E("pages/project",{

/***/ "./components/ProjectDialog.tsx":
/*!**************************************!*\
  !*** ./components/ProjectDialog.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-virtualized-auto-sizer */ \"./node_modules/react-virtualized-auto-sizer/dist/index.esm.js\");\n/* harmony import */ var _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resources/data/projects */ \"./resources/data/projects/index.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/gohhwain/work/depromeet/www.depromeet.com/components/ProjectDialog.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$(),\n    _s4 = $RefreshSig$(),\n    _s5 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* eslint-disable react/no-array-index-key */\n\n\n\n\n\n\n\nvar ProjectDialog = function ProjectDialog(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isClientSide = _useState[0],\n      setClientSide = _useState[1];\n\n  var visible = props.visible;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (document !== undefined) {\n      setClientSide(true);\n    }\n  }, [setClientSide]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: isClientSide && visible.visible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDialogContents, _objectSpread({}, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 43\n    }, _this)\n  }, void 0, false);\n};\n\n_s(ProjectDialog, \"TqvjQmpctxuQ3TxXSGPB8VZpGC8=\");\n\n_c = ProjectDialog;\n\nvar ProjectDialogContents = function ProjectDialogContents(_ref) {\n  _s2();\n\n  var visible = _ref.visible,\n      setVisible = _ref.setVisible;\n  var modalElement = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return document.createElement('div');\n  }, []);\n  var closeDialog = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    return setVisible({\n      visible: false,\n      index: 0\n    });\n  }, [setVisible]);\n  var scrollRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  useScrollToIndex(scrollRef, visible.index);\n  usePortalSetup(modalElement);\n  return /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.createPortal( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Backdrop, {\n      onClick: closeDialog\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      children: function children(_ref2) {\n        var width = _ref2.width,\n            height = _ref2.height;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectsListWrapper, {\n          height: height,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_window__WEBPACK_IMPORTED_MODULE_5__[\"FixedSizeList\"], {\n            itemCount: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"].length,\n            layout: \"horizontal\",\n            height: \"\".concat(contentHeight, \"rem\"),\n            width: width,\n            itemSize: contentWidth * 10,\n            ref: scrollRef,\n            itemData: _resources_data_projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            style: {\n              padding: '0 56rem',\n              overflow: 'scroll',\n              display: 'flex',\n              justifyContent: 'center',\n              alignContent: 'center'\n            },\n            children: ProjectItem\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 7\n  }, _this), modalElement);\n};\n\n_s2(ProjectDialogContents, \"6htfsSUOy87qGCLRa1IvHmjIxFs=\", false, function () {\n  return [useScrollToIndex, usePortalSetup];\n});\n\n_c2 = ProjectDialogContents;\n\nvar useScrollToIndex = function useScrollToIndex(scrollRef, index) {\n  _s3();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (scrollRef.current !== null) {\n      scrollRef.current.scrollToItem(index, 'center');\n    }\n  }, [scrollRef, index]);\n};\n\n_s3(useScrollToIndex, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar usePortalSetup = function usePortalSetup(portal) {\n  _s4();\n\n  var rootId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'modal-root';\n  return Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var modalRoot = document.getElementById(rootId);\n    modalRoot.appendChild(portal);\n    return function () {\n      modalRoot.removeChild(portal);\n    };\n  }, [portal, rootId]);\n};\n\n_s4(usePortalSetup, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar ProjectItem = function ProjectItem(_ref3) {\n  _s5();\n\n  var data = _ref3.data,\n      index = _ref3.index,\n      style = _ref3.style;\n  var projectData = data[index];\n  var Image = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\n    return projectData.image();\n  }, [projectData]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ProjectDetail, {\n    style: style,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"image\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Image, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"image-shadow\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"detail\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"title\",\n        children: projectData.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"catchphrase\",\n        children: projectData.catchphrase\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"buttons\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"button\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: \"hi\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: \"bye\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, _this)]\n  }, \"project-detail-\".concat(index), true, {\n    fileName: _jsxFileName,\n    lineNumber: 107,\n    columnNumber: 5\n  }, _this);\n};\n\n_s5(ProjectItem, \"oHF6iZ4uCM2aIX7eb3MU31h4r7w=\");\n\n_c3 = ProjectItem;\n\nvar LinkButton = function LinkButton(_ref4) {\n  var link = _ref4.link;\n\n  if (link !== undefined) {\n    return;\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: \" \"\n  }, void 0, false);\n}; // rem\n\n\n_c4 = LinkButton;\nvar horizontalPadding = 56;\nvar contentWidth = 80;\nvar contentHeight = 84;\nvar contentGap = 5.6;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Container\",\n  componentId: \"sc-1fctgpg-0\"\n})([\"position:fixed;top:0;left:0;right:0;bottom:0;\"]);\n_c5 = Container;\nvar Backdrop = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__Backdrop\",\n  componentId: \"sc-1fctgpg-1\"\n})([\"position:fixed;inset:0;background-color:black;opacity:0.8;z-index:-1;\"]);\n_c6 = Backdrop;\nvar ProjectsListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectsListWrapper\",\n  componentId: \"sc-1fctgpg-2\"\n})([\"display:flex;height:\", \"px;align-items:center;\"], function (_ref5) {\n  var height = _ref5.height;\n  return height;\n});\n_c7 = ProjectsListWrapper;\nvar ProjectDetail = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"ProjectDialog__ProjectDetail\",\n  componentId: \"sc-1fctgpg-3\"\n})([\"position:relative;width:\", \"rem;height:\", \"rem;background-color:#212121;border-radius:3.6rem;opacity:1;margin-left:5.6rem;z-index:1;:first-of-type{margin-left:0;}.image{height:42rem;width:100%;display:flex;justify-content:center;align-items:flex-end;position:relative;.image-shadow{position:absolute;height:19rem;width:100%;bottom:0;z-index:-1;background:linear-gradient(180deg,rgba(0,0,0,0) 12.63%,rgba(0,0,0,0.9) 100%);}}.detail{height:42rem;width:100%;font-family:Apple SD Gothic Neo;color:white;padding:4.8rem 5.6rem 0;box-sizing:border-box;.title{margin-bottom:1.6rem;font-weight:800;font-size:3rem;line-height:5.6rem;}.catchphrase{margin-bottom:3.2rem;font-weight:bold;font-size:2rem;line-height:3.2rem;}.buttons{display:grid;grid-template:repeat(3,minmax(17.2rem,17.2rem)) / 1fr;gap:1.6rem 0;.button{font-weight:500;font-size:1.6rem;line-height:2rem;border-radius:1.2rem;background-color:black;width:17.2rem;height:4.8rem;box-sizing:border-box;display:flex;align-items:center;justify-content:center;&--link{}&--construction{background-color:#363636;}}}}\"], contentWidth, contentHeight);\n_c8 = ProjectDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDialog);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"ProjectDialog\");\n$RefreshReg$(_c2, \"ProjectDialogContents\");\n$RefreshReg$(_c3, \"ProjectItem\");\n$RefreshReg$(_c4, \"LinkButton\");\n$RefreshReg$(_c5, \"Container\");\n$RefreshReg$(_c6, \"Backdrop\");\n$RefreshReg$(_c7, \"ProjectsListWrapper\");\n$RefreshReg$(_c8, \"ProjectDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0RGlhbG9nLnRzeD83YTMxIl0sIm5hbWVzIjpbIlByb2plY3REaWFsb2ciLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNDbGllbnRTaWRlIiwic2V0Q2xpZW50U2lkZSIsInZpc2libGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsIlByb2plY3REaWFsb2dDb250ZW50cyIsInNldFZpc2libGUiLCJtb2RhbEVsZW1lbnQiLCJ1c2VNZW1vIiwiY3JlYXRlRWxlbWVudCIsImNsb3NlRGlhbG9nIiwidXNlQ2FsbGJhY2siLCJpbmRleCIsInNjcm9sbFJlZiIsInVzZVJlZiIsInVzZVNjcm9sbFRvSW5kZXgiLCJ1c2VQb3J0YWxTZXR1cCIsIlJlYWN0RE9NIiwiY3JlYXRlUG9ydGFsIiwid2lkdGgiLCJoZWlnaHQiLCJwcm9qZWN0c0RhdGEiLCJsZW5ndGgiLCJjb250ZW50SGVpZ2h0IiwiY29udGVudFdpZHRoIiwicGFkZGluZyIsIm92ZXJmbG93IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25Db250ZW50IiwiUHJvamVjdEl0ZW0iLCJjdXJyZW50Iiwic2Nyb2xsVG9JdGVtIiwicG9ydGFsIiwicm9vdElkIiwibW9kYWxSb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiZGF0YSIsInN0eWxlIiwicHJvamVjdERhdGEiLCJJbWFnZSIsImltYWdlIiwidGl0bGUiLCJjYXRjaHBocmFzZSIsIkxpbmtCdXR0b24iLCJsaW5rIiwiaG9yaXpvbnRhbFBhZGRpbmciLCJjb250ZW50R2FwIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQmFja2Ryb3AiLCJQcm9qZWN0c0xpc3RXcmFwcGVyIiwiUHJvamVjdERldGFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNB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QXRCO0FBQ0EsSUFBTTBCLFVBQVUsR0FBRyxHQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxREFBZjtNQUFNRixTO0FBT04sSUFBTUcsUUFBUSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZFQUFkO01BQU1DLFE7QUFRTixJQUFNQyxtQkFBbUIsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1REFFYjtBQUFBLE1BQUdoQyxNQUFILFNBQUdBLE1BQUg7QUFBQSxTQUFnQkEsTUFBaEI7QUFBQSxDQUZhLENBQXpCO01BQU1rQyxtQjtBQUtOLElBQU1DLGFBQWEsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw2aUNBRVI1QixZQUZRLEVBR1BELGFBSE8sQ0FBbkI7TUFBTWdDLGE7QUEyRVMzRCw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdERpYWxvZy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXkgKi9cbmltcG9ydCB7XG4gIEZDLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmLCBNdXRhYmxlUmVmT2JqZWN0LFxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgRml4ZWRTaXplTGlzdCwgTGlzdENoaWxkQ29tcG9uZW50UHJvcHMsXG59IGZyb20gJ3JlYWN0LXdpbmRvdyc7XG5pbXBvcnQgQXV0b1NpemUgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQtYXV0by1zaXplcic7XG5pbXBvcnQgcHJvamVjdHNEYXRhIGZyb20gJy4uL3Jlc291cmNlcy9kYXRhL3Byb2plY3RzJztcbmltcG9ydCB7IFByb2plY3REYXRhIH0gZnJvbSAnLi4vcmVzb3VyY2VzL2RhdGEvaW50ZXJmYWNlJztcbmltcG9ydCB7XG4gIGljb25BcHBsZVN0b3JlLCBpY29uQ29uc3RydWN0aW9uLCBpY29uR29vZ2xlU3RvcmUsIGljb25XZWJMaW5rLFxufSBmcm9tICcuLi9yZXNvdXJjZXMvaW1hZ2VzJztcblxuaW50ZXJmYWNlIFByb2plY3REaWFsb2dWaXNpYmxlQXJnIHtcbiAgICB2aXNpYmxlOiBib29sZWFuO1xuICAgIGluZGV4OiBudW1iZXI7XG59XG5pbnRlcmZhY2UgUHJvamVjdERpYWxvZ1Byb3BzIHtcbiAgdmlzaWJsZTogUHJvamVjdERpYWxvZ1Zpc2libGVBcmcsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBzZXRWaXNpYmxlOiAoYXJnOiBQcm9qZWN0RGlhbG9nVmlzaWJsZUFyZykgPT4gdm9pZDtcbn1cbmNvbnN0IFByb2plY3REaWFsb2c6IEZDPFByb2plY3REaWFsb2dQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2lzQ2xpZW50U2lkZSwgc2V0Q2xpZW50U2lkZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgdmlzaWJsZSB9ID0gcHJvcHM7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0Q2xpZW50U2lkZSh0cnVlKTtcbiAgICB9XG4gIH0sIFtzZXRDbGllbnRTaWRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2lzQ2xpZW50U2lkZSAmJiB2aXNpYmxlLnZpc2libGUgJiYgPFByb2plY3REaWFsb2dDb250ZW50cyB7Li4ucHJvcHN9IC8+fVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgUHJvamVjdERpYWxvZ0NvbnRlbnRzOkZDPFByb2plY3REaWFsb2dQcm9wcz4gPSAoeyB2aXNpYmxlLCBzZXRWaXNpYmxlIH0pID0+IHtcbiAgY29uc3QgbW9kYWxFbGVtZW50ID0gdXNlTWVtbygoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgW10pO1xuICBjb25zdCBjbG9zZURpYWxvZyA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUoeyB2aXNpYmxlOiBmYWxzZSwgaW5kZXg6IDAgfSksIFtzZXRWaXNpYmxlXSk7XG4gIGNvbnN0IHNjcm9sbFJlZiA9IHVzZVJlZjxGaXhlZFNpemVMaXN0PihudWxsKTtcblxuICB1c2VTY3JvbGxUb0luZGV4KHNjcm9sbFJlZiwgdmlzaWJsZS5pbmRleCk7XG4gIHVzZVBvcnRhbFNldHVwKG1vZGFsRWxlbWVudCk7XG5cbiAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcbiAgICAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8QmFja2Ryb3Agb25DbGljaz17Y2xvc2VEaWFsb2d9IC8+XG4gICAgICAgIDxBdXRvU2l6ZT5cbiAgICAgICAgICB7KHsgd2lkdGgsIGhlaWdodCB9KSA9PiAoXG4gICAgICAgICAgICA8UHJvamVjdHNMaXN0V3JhcHBlciBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgICAgICAgIDxGaXhlZFNpemVMaXN0XG4gICAgICAgICAgICAgICAgaXRlbUNvdW50PXtwcm9qZWN0c0RhdGEubGVuZ3RofVxuICAgICAgICAgICAgICAgIGxheW91dD1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgIGhlaWdodD17YCR7Y29udGVudEhlaWdodH1yZW1gfVxuICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgICBpdGVtU2l6ZT17Y29udGVudFdpZHRoICogMTB9XG4gICAgICAgICAgICAgICAgcmVmPXtzY3JvbGxSZWZ9XG4gICAgICAgICAgICAgICAgaXRlbURhdGE9e3Byb2plY3RzRGF0YX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzAgNTZyZW0nLFxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdzY3JvbGwnLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1Byb2plY3RJdGVtfVxuICAgICAgICAgICAgICA8L0ZpeGVkU2l6ZUxpc3Q+XG4gICAgICAgICAgICA8L1Byb2plY3RzTGlzdFdyYXBwZXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BdXRvU2l6ZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICksXG4gICAgbW9kYWxFbGVtZW50LFxuICApO1xufTtcblxuY29uc3QgdXNlU2Nyb2xsVG9JbmRleCA9IChzY3JvbGxSZWY6IE11dGFibGVSZWZPYmplY3Q8Rml4ZWRTaXplTGlzdD4sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2Nyb2xsUmVmLmN1cnJlbnQgIT09IG51bGwpIHsgc2Nyb2xsUmVmLmN1cnJlbnQuc2Nyb2xsVG9JdGVtKGluZGV4LCAnY2VudGVyJyk7IH1cbiAgfSwgW3Njcm9sbFJlZiwgaW5kZXhdKTtcbn07XG5cbmNvbnN0IHVzZVBvcnRhbFNldHVwID0gKHBvcnRhbDogSFRNTEVsZW1lbnQsIHJvb3RJZCA9ICdtb2RhbC1yb290JykgPT4gdXNlRWZmZWN0KCgpID0+IHtcbiAgY29uc3QgbW9kYWxSb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocm9vdElkKTtcbiAgbW9kYWxSb290LmFwcGVuZENoaWxkKHBvcnRhbCk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgbW9kYWxSb290LnJlbW92ZUNoaWxkKHBvcnRhbCk7XG4gIH07XG59LCBbcG9ydGFsLCByb290SWRdKTtcblxuaW50ZXJmYWNlIFByb2plY3REYXRhUHJvcHMgZXh0ZW5kcyBMaXN0Q2hpbGRDb21wb25lbnRQcm9wc3tcbiAgZGF0YTogUHJvamVjdERhdGFbXTtcbn1cbmNvbnN0IFByb2plY3RJdGVtOkZDPFByb2plY3REYXRhUHJvcHM+ID0gKHsgZGF0YSwgaW5kZXgsIHN0eWxlIH0pID0+IHtcbiAgY29uc3QgcHJvamVjdERhdGEgPSBkYXRhW2luZGV4XTtcbiAgY29uc3QgSW1hZ2UgPSB1c2VNZW1vKCgpID0+IHByb2plY3REYXRhLmltYWdlKCksIFtwcm9qZWN0RGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFByb2plY3REZXRhaWxcbiAgICAgIGtleT17YHByb2plY3QtZGV0YWlsLSR7aW5kZXh9YH1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgIDxJbWFnZSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXNoYWRvd1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICB7cHJvamVjdERhdGEudGl0bGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGNocGhyYXNlXCI+XG4gICAgICAgICAge3Byb2plY3REYXRhLmNhdGNocGhyYXNlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIDxkaXY+aGk8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+YnllPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9Qcm9qZWN0RGV0YWlsPlxuICApO1xufTtcblxuY29uc3QgTGlua0J1dHRvbjogRkM8e2xpbms6IHN0cmluZ30+ID0gKHsgbGluayB9KSA9PiB7XG4gIGlmIChsaW5rICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIDw+IDwvPjtcbn07XG5cbi8vIHJlbVxuY29uc3QgaG9yaXpvbnRhbFBhZGRpbmcgPSA1NjtcbmNvbnN0IGNvbnRlbnRXaWR0aCA9IDgwO1xuY29uc3QgY29udGVudEhlaWdodCA9IDg0O1xuY29uc3QgY29udGVudEdhcCA9IDUuNjtcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOjA7XG4gIGxlZnQ6MDtcbiAgcmlnaHQ6MDtcbiAgYm90dG9tOjA7XG5gO1xuY29uc3QgQmFja2Ryb3AgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC44O1xuICB6LWluZGV4OiAtMTtcbmA7XG5cbmNvbnN0IFByb2plY3RzTGlzdFdyYXBwZXIgPSBzdHlsZWQuZGl2PHtoZWlnaHQ6IHN0cmluZ30+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6ICR7KHsgaGVpZ2h0IH0pID0+IGhlaWdodH1weDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5jb25zdCBQcm9qZWN0RGV0YWlsID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogJHtjb250ZW50V2lkdGh9cmVtO1xuICBoZWlnaHQ6ICR7Y29udGVudEhlaWdodH1yZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGJvcmRlci1yYWRpdXM6IDMuNnJlbTtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLWxlZnQ6IDUuNnJlbTtcbiAgei1pbmRleDogMTtcbiAgOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5pbWFnZSB7XG4gICAgaGVpZ2h0OiA0MnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmltYWdlLXNoYWRvdyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IDE5cmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3R0b206IDA7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMCkgMTIuNjMlLCByZ2JhKDAsIDAsIDAsIDAuOSkgMTAwJSk7XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbCB7XG4gICAgaGVpZ2h0OiA0MnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LWZhbWlseTogQXBwbGUgU0QgR290aGljIE5lbztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzo0LjhyZW0gNS42cmVtIDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAudGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1LjZyZW07XG4gICAgfVxuICAgIC5jYXRjaHBocmFzZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzLjJyZW07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzLjJyZW07XG4gICAgfVxuICAgIC5idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMywgbWlubWF4KDE3LjJyZW0sIDE3LjJyZW0pKSAvIDFmcjtcbiAgICAgIGdhcDogMS42cmVtIDA7XG5cbiAgICAgIC5idXR0b24ge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMnJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgIHdpZHRoOiAxNy4ycmVtO1xuICAgICAgICBoZWlnaHQ6IDQuOHJlbTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICYtLWxpbmsge1xuICAgICAgICB9XG4gICAgICAgICYtLWNvbnN0cnVjdGlvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdERpYWxvZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProjectDialog.tsx\n");

/***/ })

})