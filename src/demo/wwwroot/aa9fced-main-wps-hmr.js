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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var Suggestions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Suggestions, _React$Component);

  function Suggestions(props) {
    var _this;

    _classCallCheck(this, Suggestions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Suggestions).call(this, props));

    _this.onSelected = function (tag, lastSelected) {
      return function (e) {
        _this.setState({
          key: _this.state.key + 1
        });

        _this.props.onSelected(tag, lastSelected);
      };
    };

    _this.state = {
      key: 0
    };
    _this.onSelected = _this.onSelected.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Suggestions, [{
    key: "render",
    value: function render() {
      var _this$props$anchorEl,
          _this2 = this;

      return this.props.anchorEl && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        key: this.state.key,
        open: this.props.isVisible,
        anchorEl: this.props.anchorEl,
        style: {
          width: (_this$props$anchorEl = this.props.anchorEl) === null || _this$props$anchorEl === void 0 ? void 0 : _this$props$anchorEl.scrollWidth,
          zIndex: 10000
        },
        placement: "bottom-start",
        modifiers: {
          flip: {
            enabled: false
          }
        }
      }, this.props.popperProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, this.props.id && {
        id: this.props.id
      }, {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('tags-input__suggestions', 'tags-input__suggestions--loading'),
        ref: this.props.innerRef
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, this.props.AddNewTagComponent, this.props.loading && this.props.LoadingComponent, this.props.isWaitingForMoreInput && this.props.WaitingForMoreInputComponent && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        className: "w-100 text-center p-2"
      }, this.props.WaitingForMoreInputComponent), !this.props.isWaitingForMoreInput && this.props.tags.map(function (tag, index) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](___WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({}, _this2.props.id && {
          id: _this2.props.id + '-suggestion-' + index.toString()
        }, {
          className: 'w-100 tags-input__suggestion ' + (_this2.props.preselectedSuggestion !== undefined && _this2.props.preselectedSuggestion === index ? 'tags-input__suggestion--preselected' : ''),
          onClick: _this2.onSelected(tag, _this2.props.tags.length === 1),
          dropdown: true
        }), tag.name));
      }), this.props.EmptyComponent && this.props.tags.length === 0 && !this.props.allowNew && !this.props.isWaitingForMoreInput && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        className: "w-100 text-center p-2"
      }, this.props.EmptyComponent))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Suggestions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var SuggestionsWrapped = Suggestions;
var _default = SuggestionsWrapped;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9zdWJDb21wb25lbnRzL1RhZ3NTdWdnZXN0aW9ucy50c3giXSwibmFtZXMiOlsiU3VnZ2VzdGlvbnMiLCJwcm9wcyIsIm9uU2VsZWN0ZWQiLCJ0YWciLCJsYXN0U2VsZWN0ZWQiLCJlIiwic2V0U3RhdGUiLCJrZXkiLCJzdGF0ZSIsImJpbmQiLCJhbmNob3JFbCIsImlzVmlzaWJsZSIsIndpZHRoIiwic2Nyb2xsV2lkdGgiLCJ6SW5kZXgiLCJmbGlwIiwiZW5hYmxlZCIsInBvcHBlclByb3BzIiwiaWQiLCJjbGFzc05hbWVzIiwiaW5uZXJSZWYiLCJBZGROZXdUYWdDb21wb25lbnQiLCJsb2FkaW5nIiwiTG9hZGluZ0NvbXBvbmVudCIsImlzV2FpdGluZ0Zvck1vcmVJbnB1dCIsIldhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnQiLCJ0YWdzIiwibWFwIiwiaW5kZXgiLCJ0b1N0cmluZyIsInByZXNlbGVjdGVkU3VnZ2VzdGlvbiIsInVuZGVmaW5lZCIsImxlbmd0aCIsIm5hbWUiLCJFbXB0eUNvbXBvbmVudCIsImFsbG93TmV3IiwiUmVhY3QiLCJTdWdnZXN0aW9uc1dyYXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7SUEwQk1BLFc7Ozs7O0FBSUosdUJBQVlDLEtBQVosRUFBcUQ7QUFBQTs7QUFBQTs7QUFDbkQscUZBQU1BLEtBQU47O0FBRG1ELFVBMkU3Q0MsVUEzRTZDLEdBMkVoQyxVQUFDQyxHQUFELEVBQVdDLFlBQVg7QUFBQSxhQUFxQyxVQUN4REMsQ0FEd0QsRUFFckQ7QUFDSCxjQUFLQyxRQUFMLENBQWM7QUFBRUMsYUFBRyxFQUFFLE1BQUtDLEtBQUwsQ0FBV0QsR0FBWCxHQUFpQjtBQUF4QixTQUFkOztBQUNBLGNBQUtOLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQkMsR0FB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Ozs7Ozs7Ozs7RUE3RXVCRSwrQzs7QUF1RjFCLElBQU1DLGtCQUFrQixHQUFHckMsV0FBM0I7ZUFFZXFDLGtCO0FBQUE7Ozs7Ozs7Ozs7MEJBekZUckMsVzswQkF1RkFxQyxrQiIsImZpbGUiOiJhYTlmY2VkLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi8uLic7XHJcbmltcG9ydCBQb3BwZXIsIHsgUG9wcGVyUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXInO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmV4cG9ydCB0eXBlIFN1Z2dlc3Rpb25zUHJvcHMgPSB7XHJcbiAgaW5uZXJSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcbiAgYW5jaG9yRWw6IEhUTUxFbGVtZW50O1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj86IG51bWJlcjtcclxuICBpc1Zpc2libGU6IGJvb2xlYW47XHJcbiAgaXNXYWl0aW5nRm9yTW9yZUlucHV0OiBib29sZWFuO1xyXG4gIHRhZ3M6IFRhZ1tdO1xyXG4gIG9uU2VsZWN0ZWQ6ICh0YWc6IFRhZywgbGFzdFNlbGVjdGVkOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgbG9hZGluZzogYm9vbGVhbjtcclxuICBMb2FkaW5nQ29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgRW1wdHlDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBBZGROZXdUYWdDb21wb25lbnQ/OiBKU1guRWxlbWVudDtcclxuICBXYWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgYWxsb3dOZXc6IGJvb2xlYW47XHJcbiAgcG9wcGVyUHJvcHM/OiBQYXJ0aWFsPFBvcHBlclByb3BzPjtcclxufTtcclxuXHJcbmludGVyZmFjZSBTdWdnZXN0aW9uc1N0YXRlIHtcclxuICBrZXk6IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBJbmplY3RlZFByb3BzID0ge307XHJcbmNsYXNzIFN1Z2dlc3Rpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4gIFN1Z2dlc3Rpb25zUHJvcHMgJiBJbmplY3RlZFByb3BzLFxyXG4gIFN1Z2dlc3Rpb25zU3RhdGVcclxuPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFN1Z2dlc3Rpb25zUHJvcHMgJiBJbmplY3RlZFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBrZXk6IDAgfTtcclxuICAgIHRoaXMub25TZWxlY3RlZCA9IHRoaXMub25TZWxlY3RlZC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5wcm9wcy5hbmNob3JFbCAmJiAoXHJcbiAgICAgICAgPFBvcHBlclxyXG4gICAgICAgICAga2V5PXt0aGlzLnN0YXRlLmtleX1cclxuICAgICAgICAgIG9wZW49e3RoaXMucHJvcHMuaXNWaXNpYmxlfVxyXG4gICAgICAgICAgYW5jaG9yRWw9e3RoaXMucHJvcHMuYW5jaG9yRWx9XHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogdGhpcy5wcm9wcy5hbmNob3JFbD8uc2Nyb2xsV2lkdGgsIHpJbmRleDogMTAwMDAgfX1cclxuICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbS1zdGFydFwiXHJcbiAgICAgICAgICBtb2RpZmllcnM9e3sgZmxpcDogeyBlbmFibGVkOiBmYWxzZSB9IH19XHJcbiAgICAgICAgICB7Li4udGhpcy5wcm9wcy5wb3BwZXJQcm9wc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXRfX3N1Z2dlc3Rpb25zJyxcclxuICAgICAgICAgICAgICAndGFncy1pbnB1dF9fc3VnZ2VzdGlvbnMtLWxvYWRpbmcnXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5wcm9wcy5pbm5lclJlZn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLkFkZE5ld1RhZ0NvbXBvbmVudH1cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sb2FkaW5nICYmIHRoaXMucHJvcHMuTG9hZGluZ0NvbXBvbmVudH1cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pc1dhaXRpbmdGb3JNb3JlSW5wdXQgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuV2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3LTEwMCB0ZXh0LWNlbnRlciBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5XYWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7IXRoaXMucHJvcHMuaXNXYWl0aW5nRm9yTW9yZUlucHV0ICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctc3VnZ2VzdGlvbi0nICsgaW5kZXgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ctMTAwIHRhZ3MtaW5wdXRfX3N1Z2dlc3Rpb24gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RhZ3MtaW5wdXRfX3N1Z2dlc3Rpb24tLXByZXNlbGVjdGVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2VsZWN0ZWQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA9PT0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0YWcubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLkVtcHR5Q29tcG9uZW50ICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5hbGxvd05ldyAmJlxyXG4gICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuaXNXYWl0aW5nRm9yTW9yZUlucHV0ICYmIChcclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInctMTAwIHRleHQtY2VudGVyIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkVtcHR5Q29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUG9wcGVyPlxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblNlbGVjdGVkID0gKHRhZzogVGFnLCBsYXN0U2VsZWN0ZWQ6IGJvb2xlYW4pID0+IChcclxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnRcclxuICApID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBrZXk6IHRoaXMuc3RhdGUua2V5ICsgMSB9KTtcclxuICAgIHRoaXMucHJvcHMub25TZWxlY3RlZCh0YWcsIGxhc3RTZWxlY3RlZCk7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgU3VnZ2VzdGlvbnNXcmFwcGVkID0gU3VnZ2VzdGlvbnM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uc1dyYXBwZWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=