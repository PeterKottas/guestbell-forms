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
/* harmony import */ var react_onclickoutside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-onclickoutside */ "./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../.. */ "./src/lib/index.ts");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
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

    _this.onSelected = function (tag) {
      return function () {
        _this.setState({
          key: _this.state.key + 1
        });

        _this.props.onSelected(tag);
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

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
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
        className: "tags-input__suggestions",
        ref: this.props.innerRef
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, this.props.AddNewTagComponent, this.props.loading && this.props.LoadingComponent && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        className: "w-100 text-center p-2"
      }, this.props.LoadingComponent), !this.props.loading && this.props.isWaitingForMoreInput && this.props.WaitingForMoreInputComponent && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        className: "w-100 text-center p-2"
      }, this.props.WaitingForMoreInputComponent), !this.props.loading && !this.props.isWaitingForMoreInput && this.props.tags.map(function (tag, index) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](___WEBPACK_IMPORTED_MODULE_2__["Button"], _extends({}, _this2.props.id && {
          id: _this2.props.id + '-suggestion-' + index.toString()
        }, {
          className: 'w-100 tags-input__suggestion ' + (_this2.props.preselectedSuggestion !== undefined && _this2.props.preselectedSuggestion === index ? 'tags-input__suggestion--preselected' : ''),
          onClick: _this2.onSelected(tag),
          dropdown: true
        }), tag.name));
      }), !this.props.loading && this.props.EmptyComponent && this.props.tags.length === 0 && !this.props.allowNew && !this.props.isWaitingForMoreInput && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        className: "w-100 text-center p-2"
      }, this.props.EmptyComponent))));
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside() {
      this.props.onClickOutside();
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

var SuggestionsWrapped = Object(react_onclickoutside__WEBPACK_IMPORTED_MODULE_1__["default"])(Suggestions);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9zdWJDb21wb25lbnRzL1RhZ3NTdWdnZXN0aW9ucy50c3giXSwibmFtZXMiOlsiU3VnZ2VzdGlvbnMiLCJwcm9wcyIsIm9uU2VsZWN0ZWQiLCJ0YWciLCJzZXRTdGF0ZSIsImtleSIsInN0YXRlIiwiYmluZCIsImlzVmlzaWJsZSIsImFuY2hvckVsIiwid2lkdGgiLCJzY3JvbGxXaWR0aCIsInpJbmRleCIsImZsaXAiLCJlbmFibGVkIiwicG9wcGVyUHJvcHMiLCJpZCIsImlubmVyUmVmIiwiQWRkTmV3VGFnQ29tcG9uZW50IiwibG9hZGluZyIsIkxvYWRpbmdDb21wb25lbnQiLCJpc1dhaXRpbmdGb3JNb3JlSW5wdXQiLCJXYWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50IiwidGFncyIsIm1hcCIsImluZGV4IiwidG9TdHJpbmciLCJwcmVzZWxlY3RlZFN1Z2dlc3Rpb24iLCJ1bmRlZmluZWQiLCJuYW1lIiwiRW1wdHlDb21wb25lbnQiLCJsZW5ndGgiLCJhbGxvd05ldyIsIm9uQ2xpY2tPdXRzaWRlIiwiUmVhY3QiLCJTdWdnZXN0aW9uc1dyYXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztJQTJCTUEsVzs7Ozs7QUFJSix1QkFBWUMsS0FBWixFQUFxRDtBQUFBOztBQUFBOztBQUNuRCxxRkFBTUEsS0FBTjs7QUFEbUQsVUE4RTdDQyxVQTlFNkMsR0E4RWhDLFVBQUNDLEdBQUQ7QUFBQSxhQUFjLFlBQU07QUFDdkMsY0FBS0MsUUFBTCxDQUFjO0FBQUVDLGFBQUcsRUFBRSxNQUFLQyxLQUFMLENBQVdELEdBQVgsR0FBaUI7QUFBeEIsU0FBZDs7QUFDQSxjQUFLSixLQUFMLENBQVdDLFVBQVgsQ0FBc0JDLEdBQXRCO0FBQ0QsT0FIb0I7QUFBQSxLQTlFZ0M7O0FBRW5ELFVBQUtHLEtB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N0IsS0FBTCxDQUFXZ0MsY0FBWDtBQUNEOzs7Ozs7Ozs7OztFQWhGdUJDLCtDOztBQXdGMUIsSUFBTUMsa0JBQWtCLEdBQUdGLG9FQUFjLENBQUNqQyxXQUFELENBQXpDO2VBRWVtQyxrQjtBQUFBOzs7Ozs7Ozs7OzBCQTFGVG5DLFc7MEJBd0ZBbUMsa0IiLCJmaWxlIjoiMWQ3MjA4YS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBvbkNsaWNrT3V0c2lkZSwgeyBJbmplY3RlZE9uQ2xpY2tPdXRQcm9wcyB9IGZyb20gJ3JlYWN0LW9uY2xpY2tvdXRzaWRlJztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi8uLic7XHJcbmltcG9ydCBQb3BwZXIsIHsgUG9wcGVyUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXInO1xyXG5cclxuZXhwb3J0IHR5cGUgU3VnZ2VzdGlvbnNQcm9wcyA9IHtcclxuICBpbm5lclJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcclxuICBhbmNob3JFbDogSFRNTEVsZW1lbnQ7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbiAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uPzogbnVtYmVyO1xyXG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcclxuICBpc1dhaXRpbmdGb3JNb3JlSW5wdXQ6IGJvb2xlYW47XHJcbiAgdGFnczogVGFnW107XHJcbiAgb25TZWxlY3RlZDogKHRhZzogVGFnKSA9PiB2b2lkO1xyXG4gIG9uQ2xpY2tPdXRzaWRlOiAoKSA9PiB2b2lkO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgbG9hZGluZzogYm9vbGVhbjtcclxuICBMb2FkaW5nQ29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgRW1wdHlDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBBZGROZXdUYWdDb21wb25lbnQ/OiBKU1guRWxlbWVudDtcclxuICBXYWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgYWxsb3dOZXc6IGJvb2xlYW47XHJcbiAgcG9wcGVyUHJvcHM/OiBQYXJ0aWFsPFBvcHBlclByb3BzPjtcclxufTtcclxuXHJcbmludGVyZmFjZSBTdWdnZXN0aW9uc1N0YXRlIHtcclxuICBrZXk6IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBJbmplY3RlZFByb3BzID0gSW5qZWN0ZWRPbkNsaWNrT3V0UHJvcHM7XHJcbmNsYXNzIFN1Z2dlc3Rpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxyXG4gIFN1Z2dlc3Rpb25zUHJvcHMgJiBJbmplY3RlZFByb3BzLFxyXG4gIFN1Z2dlc3Rpb25zU3RhdGVcclxuPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFN1Z2dlc3Rpb25zUHJvcHMgJiBJbmplY3RlZFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBrZXk6IDAgfTtcclxuICAgIHRoaXMub25TZWxlY3RlZCA9IHRoaXMub25TZWxlY3RlZC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFBvcHBlclxyXG4gICAgICAgIGtleT17dGhpcy5zdGF0ZS5rZXl9XHJcbiAgICAgICAgb3Blbj17dGhpcy5wcm9wcy5pc1Zpc2libGV9XHJcbiAgICAgICAgYW5jaG9yRWw9e3RoaXMucHJvcHMuYW5jaG9yRWx9XHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMuYW5jaG9yRWw/LnNjcm9sbFdpZHRoLCB6SW5kZXg6IDEwMDAwIH19XHJcbiAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tLXN0YXJ0XCJcclxuICAgICAgICBtb2RpZmllcnM9e3sgZmxpcDogeyBlbmFibGVkOiBmYWxzZSB9IH19XHJcbiAgICAgICAgey4uLnRoaXMucHJvcHMucG9wcGVyUHJvcHN9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fc3VnZ2VzdGlvbnNcIlxyXG4gICAgICAgICAgcmVmPXt0aGlzLnByb3BzLmlubmVyUmVmfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuQWRkTmV3VGFnQ29tcG9uZW50fVxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5sb2FkaW5nICYmIHRoaXMucHJvcHMuTG9hZGluZ0NvbXBvbmVudCAmJiAoXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInctMTAwIHRleHQtY2VudGVyIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuTG9hZGluZ0NvbXBvbmVudH1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7IXRoaXMucHJvcHMubG9hZGluZyAmJlxyXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuaXNXYWl0aW5nRm9yTW9yZUlucHV0ICYmXHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5XYWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50ICYmIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3LTEwMCB0ZXh0LWNlbnRlciBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuV2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeyF0aGlzLnByb3BzLmxvYWRpbmcgJiZcclxuICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5pc1dhaXRpbmdGb3JNb3JlSW5wdXQgJiZcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXN1Z2dlc3Rpb24tJyArIGluZGV4LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICd3LTEwMCB0YWdzLWlucHV0X19zdWdnZXN0aW9uICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICd0YWdzLWlucHV0X19zdWdnZXN0aW9uLS1wcmVzZWxlY3RlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNlbGVjdGVkKHRhZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGFnLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgeyF0aGlzLnByb3BzLmxvYWRpbmcgJiZcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLkVtcHR5Q29tcG9uZW50ICYmXHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICF0aGlzLnByb3BzLmFsbG93TmV3ICYmXHJcbiAgICAgICAgICAgICAgIXRoaXMucHJvcHMuaXNXYWl0aW5nRm9yTW9yZUlucHV0ICYmIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3LTEwMCB0ZXh0LWNlbnRlciBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRW1wdHlDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1BvcHBlcj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlQ2xpY2tPdXRzaWRlKCkge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrT3V0c2lkZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblNlbGVjdGVkID0gKHRhZzogVGFnKSA9PiAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsga2V5OiB0aGlzLnN0YXRlLmtleSArIDEgfSk7XHJcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0ZWQodGFnKTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBTdWdnZXN0aW9uc1dyYXBwZWQgPSBvbkNsaWNrT3V0c2lkZShTdWdnZXN0aW9ucyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uc1dyYXBwZWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=