webpackHotUpdate("main",{

/***/ "./src/lib/components/tags/subComponents/TagsSuggestions.tsx":
/*!*******************************************************************!*\
  !*** ./src/lib/components/tags/subComponents/TagsSuggestions.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../.. */ "./src/lib/index.ts");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var popperModifiers = {
  flip: {
    enabled: false
  }
};

var Suggestions = function Suggestions(props) {
  var _props$anchorEl2;

  var onSelected = props.onSelected;
  var onSelectedFactory = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (tag, lastSelected) {
    return function (e) {
      onSelected(tag, lastSelected);
    };
  }, [onSelected]);
  var popperStyle = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    var _props$anchorEl;

    return {
      width: (_props$anchorEl = props.anchorEl) === null || _props$anchorEl === void 0 ? void 0 : _props$anchorEl.scrollWidth,
      zIndex: 10000
    };
  }, [(_props$anchorEl2 = props.anchorEl) === null || _props$anchorEl2 === void 0 ? void 0 : _props$anchorEl2.scrollWidth]);
  return props.anchorEl && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    open: props.isVisible,
    anchorEl: props.anchorEl,
    style: popperStyle,
    placement: "bottom-start",
    modifiers: popperModifiers
  }, props.popperProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, props.id && {
    id: props.id
  }, {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('tags-input__suggestions', 'tags-input__suggestions--loading'),
    ref: props.innerRef
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, props.AddNewTagComponent, props.loading && props.LoadingComponent, props.isWaitingForMoreInput && props.WaitingForMoreInputComponent && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "w-100 text-center p-2"
  }, props.WaitingForMoreInputComponent), !props.isWaitingForMoreInput && props.tags.map(function (tag, index) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](___WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({}, props.id && {
      id: props.id + '-suggestion-' + index.toString()
    }, {
      className: 'w-100 tags-input__suggestion ' + (props.preselectedSuggestion !== undefined && props.preselectedSuggestion === index ? 'tags-input__suggestion--preselected' : ''),
      onClick: onSelectedFactory(tag, props.tags.length === 1),
      dropdown: true
    }), tag.name));
  }), props.EmptyComponent && props.tags.length === 0 && !props.allowNew && !props.isWaitingForMoreInput && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: "w-100 text-center p-2"
  }, props.EmptyComponent))));
};

__signature__(Suggestions, "useCallback{onSelectedFactory}\nuseMemo{popperStyle}");

var SuggestionsWrapped = Suggestions;
var _default = SuggestionsWrapped;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(popperModifiers, "popperModifiers", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\subComponents\\TagsSuggestions.tsx");
  reactHotLoader.register(Suggestions, "Suggestions", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\subComponents\\TagsSuggestions.tsx");
  reactHotLoader.register(SuggestionsWrapped, "SuggestionsWrapped", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\subComponents\\TagsSuggestions.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\subComponents\\TagsSuggestions.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9zdWJDb21wb25lbnRzL1RhZ3NTdWdnZXN0aW9ucy50c3giXSwibmFtZXMiOlsicG9wcGVyTW9kaWZpZXJzIiwiZmxpcCIsImVuYWJsZWQiLCJTdWdnZXN0aW9ucyIsInByb3BzIiwib25TZWxlY3RlZCIsIm9uU2VsZWN0ZWRGYWN0b3J5IiwiUmVhY3QiLCJ0YWciLCJsYXN0U2VsZWN0ZWQiLCJlIiwicG9wcGVyU3R5bGUiLCJ3aWR0aCIsImFuY2hvckVsIiwic2Nyb2xsV2lkdGgiLCJ6SW5kZXgiLCJpc1Zpc2libGUiLCJwb3BwZXJQcm9wcyIsImlkIiwiY2xhc3NOYW1lcyIsImlubmVyUmVmIiwiQWRkTmV3VGFnQ29tcG9uZW50IiwibG9hZGluZyIsIkxvYWRpbmdDb21wb25lbnQiLCJpc1dhaXRpbmdGb3JNb3JlSW5wdXQiLCJXYWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50IiwidGFncyIsIm1hcCIsImluZGV4IiwidG9TdHJpbmciLCJwcmVzZWxlY3RlZFN1Z2dlc3Rpb24iLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJuYW1lIiwiRW1wdHlDb21wb25lbnQiLCJhbGxvd05ldyIsIlN1Z2dlc3Rpb25zV3JhcHBlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBdUJBLElBQU1BLGVBQWUsR0FBRztBQUFFQyxNQUFJLEVBQUU7QUFBRUMsV0FBTyxFQUFFO0FBQVg7QUFBUixDQUF4Qjs7QUFFQSxJQUFNQyxXQUF1RCxHQUFHLFNBQTFEQSxXQUEwRCxDQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFBQSxNQUMvREMsVUFEK0QsR0FDaERELEtBRGdELENBQy9EQyxVQUQrRDtBQUV2RSxNQUFNQyxpQkFBaUIsR0FBR0MsaURBQUEsQ0FDeEIsVUFBQ0MsR0FBRCxFQUFXQyxZQUFYO0FBQUEsV0FBcUMsVUFBQ0MsQ0FBRCxFQUF5QjtBQUM1REwsZ0JBQVUsQ0FBQ0csR0FBRCxFQUFNQyxZQUFOLENBQVY7QUFDRCxLQUZEO0FBQUEsR0FEd0IsRUFJeEIsQ0FBQ0osVUFBRCxDQUp3QixDQUExQjtBQU1BLE1BQU1NLFdBQVcsR0FBR0osNkNBQUEsQ0FDbEI7QUFBQTs7QUFBQSxXQUFPO0FBQUVLLFdBQUsscUJBQUVSLEtBQUssQ0FBQ1MsUUFBUixvREFBRSxnQkFBZ0JDLFdBQXpCO0FBQXNDQyxZQUFNLEVBQUU7QUFBOUMsS0FBUDtBQUFBLEdBRGtCLEVBRWxCLHFCQUFDWCxLQUFLLENBQUNTLFFBQVAscURBQUMsaUJBQWdCQyxXQUFqQixDQUZrQixDQUFwQjtBQUlBLFNBQ0VWLEtBQUssQ0FBQ1MsUUFBTixJQUNFLG9EQUFDLGdFQUFEO0FBQ0UsUUFBSSxFQUFFVCxLQUFLLENBQUNZLFNBRGQ7QUFFRSxZQUFRLEVBQUVaLEtBQUssQ0FBQ1MsUUFGbEI7QUFHRSxTQUFLLEVBQUVGLFdBSFQ7QUFJRSxhQUFTLEVBQUMsY0FKWjtBQUtFLGFBQVMsRUFBRVg7QUFMYixLQU1NSSxLQUFLLENBQUNhLFdBTlosR0FRRSx3RUFDT2IsS0FBSyxDQUFDYyxFQUFOLElBQVk7QUFDZkEsTUFBRSxFQUFFZCxLQUFLLENBQUNjO0FBREssR0FEbkI7QUFJRSxhQUFTLEVBQUVDLGlEQUFVLENBQ25CLHlCQURtQixFQUVuQixrQ0FGbUIsQ0FKdkI7QUFRRSxPQUFHLEVBQUVmLEtBQUssQ0FBQ2dCO0FBUmIsTUFVRSxnRUFDR2hCLEtBQUssQ0FBQ2lCLGtCQURULEVBRUdqQixLQUFLLENBQUNrQixPQUFOLElBQWlCbEIsS0FBSyxDQUFDbUIsZ0JBRjFCLEVBR0duQixLQUFLLENBQUNvQixxQkFBTixJQUNDcEIsS0FBSyxDQUFDcUIsNEJBRFAsSUFFRztBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0dyQixLQUFLLENBQUNxQiw0QkFEVCxDQUxOLEVBU0csQ0FBQ3JCLEtBQUssQ0FBQ29CLHFCQUFQLElBQ0NwQixLQUFLLENBQUNzQixJQUFOLENBQVdDLEdBQVgsQ0FBZSxVQUFDbkIsR0FBRCxFQUFNb0IsS0FBTjtBQUFBLFdBQ2I7QUFBSSxTQUFHLEVBQUVBO0FBQVQsT0FDRSxvREFBQyx3Q0FBRCxlQUNPeEIsS0FBSyxDQUFDYyxFQUFOLElBQVk7QUFDZkEsUUFBRSxFQUFFZCxLQUFLLENBQUNjLEVBQU4sR0FBVyxjQUFYLEdBQTRCVSxLQUFLLENBQUNDLFFBQU47QUFEakIsS0FEbkI7QUFJRSxlQUFTLEVBQ1AsbUNBQ0N6QixLQUFLLENBQUMwQixxQkFBTixLQUFnQ0MsU0FBaEMsSUFDRDNCLEtBQUssQ0FBQzBCLHFCQUFOLEtBQWdDRixLQUQvQixHQUVHLHFDQUZILEdBR0csRUFKSixDQUxKO0FBV0UsYUFBTyxFQUFFdEIsaUJBQWlCLENBQUNFLEdBQUQsRUFBTUosS0FBSyxDQUFDc0IsSUFBTixDQUFXTSxNQUFYLEtBQXNCLENBQTVCLENBWDVCO0FBWUUsY0FBUSxFQUFFO0FBWlosUUFjR3hCLEdBQUcsQ0FBQ3lCLElBZFAsQ0FERixDQURhO0FBQUEsR0FBZixDQVZKLEVBOEJHN0IsS0FBSyxDQUFDOEIsY0FBTixJQUNDOUIsS0FBSyxDQUFDc0IsSUFBTixDQUFXTSxNQUFYLEtBQXNCLENBRHZCLElBRUMsQ0FBQzVCLEtBQUssQ0FBQytCLFFBRlIsSUFHQyxDQUFDL0IsS0FBSyxDQUFDb0IscUJBSFIsSUFJRztBQUFJLGFBQVMsRUFBQztBQUFkLEtBQ0dwQixLQUFLLENBQUM4QixjQURULENBbENOLENBVkYsQ0FSRixDQUZKO0FBK0RELENBM0VEOztjQUFNL0IsVzs7QUE2RU4sSUFBTWlDLGtCQUFrQixHQUFHakMsV0FBM0I7ZUFFZWlDLGtCO0FBQUE7Ozs7Ozs7Ozs7MEJBakZUcEMsZTswQkFFQUcsVzswQkE2RUFpQyxrQiIsImZpbGUiOiJhYTlmY2VkLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi8uLic7XHJcbmltcG9ydCBQb3BwZXIsIHsgUG9wcGVyUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXInO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmV4cG9ydCB0eXBlIFN1Z2dlc3Rpb25zUHJvcHMgPSB7XHJcbiAgaW5uZXJSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcbiAgYW5jaG9yRWw6IEhUTUxFbGVtZW50O1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj86IG51bWJlcjtcclxuICBpc1Zpc2libGU6IGJvb2xlYW47XHJcbiAgaXNXYWl0aW5nRm9yTW9yZUlucHV0OiBib29sZWFuO1xyXG4gIHRhZ3M6IFRhZ1tdO1xyXG4gIG9uU2VsZWN0ZWQ6ICh0YWc6IFRhZywgbGFzdFNlbGVjdGVkOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgbG9hZGluZzogYm9vbGVhbjtcclxuICBMb2FkaW5nQ29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgRW1wdHlDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBBZGROZXdUYWdDb21wb25lbnQ/OiBKU1guRWxlbWVudDtcclxuICBXYWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgYWxsb3dOZXc6IGJvb2xlYW47XHJcbiAgcG9wcGVyUHJvcHM/OiBQYXJ0aWFsPFBvcHBlclByb3BzPjtcclxufTtcclxuXHJcbnR5cGUgSW5qZWN0ZWRQcm9wcyA9IHt9O1xyXG5cclxuY29uc3QgcG9wcGVyTW9kaWZpZXJzID0geyBmbGlwOiB7IGVuYWJsZWQ6IGZhbHNlIH0gfTtcclxuXHJcbmNvbnN0IFN1Z2dlc3Rpb25zOiBSZWFjdC5GQzxTdWdnZXN0aW9uc1Byb3BzICYgSW5qZWN0ZWRQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgeyBvblNlbGVjdGVkIH0gPSBwcm9wcztcclxuICBjb25zdCBvblNlbGVjdGVkRmFjdG9yeSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKHRhZzogVGFnLCBsYXN0U2VsZWN0ZWQ6IGJvb2xlYW4pID0+IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIG9uU2VsZWN0ZWQodGFnLCBsYXN0U2VsZWN0ZWQpO1xyXG4gICAgfSxcclxuICAgIFtvblNlbGVjdGVkXVxyXG4gICk7XHJcbiAgY29uc3QgcG9wcGVyU3R5bGUgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gKHsgd2lkdGg6IHByb3BzLmFuY2hvckVsPy5zY3JvbGxXaWR0aCwgekluZGV4OiAxMDAwMCB9KSxcclxuICAgIFtwcm9wcy5hbmNob3JFbD8uc2Nyb2xsV2lkdGhdXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgcHJvcHMuYW5jaG9yRWwgJiYgKFxyXG4gICAgICA8UG9wcGVyXHJcbiAgICAgICAgb3Blbj17cHJvcHMuaXNWaXNpYmxlfVxyXG4gICAgICAgIGFuY2hvckVsPXtwcm9wcy5hbmNob3JFbH1cclxuICAgICAgICBzdHlsZT17cG9wcGVyU3R5bGV9XHJcbiAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tLXN0YXJ0XCJcclxuICAgICAgICBtb2RpZmllcnM9e3BvcHBlck1vZGlmaWVyc31cclxuICAgICAgICB7Li4ucHJvcHMucG9wcGVyUHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICB7Li4uKHByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgaWQ6IHByb3BzLmlkLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICd0YWdzLWlucHV0X19zdWdnZXN0aW9ucycsXHJcbiAgICAgICAgICAgICd0YWdzLWlucHV0X19zdWdnZXN0aW9ucy0tbG9hZGluZydcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICByZWY9e3Byb3BzLmlubmVyUmVmfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge3Byb3BzLkFkZE5ld1RhZ0NvbXBvbmVudH1cclxuICAgICAgICAgICAge3Byb3BzLmxvYWRpbmcgJiYgcHJvcHMuTG9hZGluZ0NvbXBvbmVudH1cclxuICAgICAgICAgICAge3Byb3BzLmlzV2FpdGluZ0Zvck1vcmVJbnB1dCAmJlxyXG4gICAgICAgICAgICAgIHByb3BzLldhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInctMTAwIHRleHQtY2VudGVyIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvcHMuV2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeyFwcm9wcy5pc1dhaXRpbmdGb3JNb3JlSW5wdXQgJiZcclxuICAgICAgICAgICAgICBwcm9wcy50YWdzLm1hcCgodGFnLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLihwcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogcHJvcHMuaWQgKyAnLXN1Z2dlc3Rpb24tJyArIGluZGV4LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICd3LTEwMCB0YWdzLWlucHV0X19zdWdnZXN0aW9uICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgKHByb3BzLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RhZ3MtaW5wdXRfX3N1Z2dlc3Rpb24tLXByZXNlbGVjdGVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblNlbGVjdGVkRmFjdG9yeSh0YWcsIHByb3BzLnRhZ3MubGVuZ3RoID09PSAxKX1cclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0YWcubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICB7cHJvcHMuRW1wdHlDb21wb25lbnQgJiZcclxuICAgICAgICAgICAgICBwcm9wcy50YWdzLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICFwcm9wcy5hbGxvd05ldyAmJlxyXG4gICAgICAgICAgICAgICFwcm9wcy5pc1dhaXRpbmdGb3JNb3JlSW5wdXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInctMTAwIHRleHQtY2VudGVyIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvcHMuRW1wdHlDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1BvcHBlcj5cclxuICAgIClcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3VnZ2VzdGlvbnNXcmFwcGVkID0gU3VnZ2VzdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uc1dyYXBwZWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=