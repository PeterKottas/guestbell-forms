webpackHotUpdate("main",{

/***/ "./src/lib/components/button/Button.tsx":
/*!**********************************************!*\
  !*** ./src/lib/components/button/Button.tsx ***!
  \**********************************************/
/*! exports provided: Button, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tippy_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tippy.js/react */ "./node_modules/@tippy.js/react/esm/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Libs



var Ink = __webpack_require__(/*! react-ink */ "./node_modules/react-ink/dist/ink.js");

var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"); // Misc


var DefaultButtonComponent = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", _extends({
    ref: ref // tslint:disable-next-line:no-any

  }, props.buttonProps ? props.buttonProps : {}, props.id && {
    id: props.id
  }, {
    role: "button",
    className: props.className,
    onClick: props.onClick,
    style: props.style
  }), props.children);
});
var Button =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));
    _this.preventMultipleClick = false;
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var btnClassName = classNames(['guestbell-btn', this.getButtonClassName(), this.props.className, _defineProperty({}, 'guestbell-btn--disabled', this.props.disabled), _defineProperty({}, 'guestbell-btn--circular', this.props.circular), _defineProperty({}, 'guestbell-btn--small', this.props.small), _defineProperty({}, 'guestbell-btn--no-shadow', this.props.noShadow), _defineProperty({}, 'guestbell-btn--blank', this.props.blank), _defineProperty({}, 'guestbell-btn--outlined', this.props.outlined), _defineProperty({}, 'guestbell-btn--dropdown', this.props.dropdown), _defineProperty({}, 'guestbell-btn--icon', this.props.icon), _defineProperty({}, 'guestbell-btn--hero', this.props.hero)]);
      var button = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](this.props.Component, _extends({}, this.props.id && {
        id: this.props.id
      }, {
        onClick: this.handleClick,
        buttonProps: this.props.buttonProps,
        className: btnClassName,
        style: this.props.style
      }), !this.props.noRipples && !this.props.disabled && Ink && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Ink, null), this.props.children);

      if (this.props.tooltip) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tippy_js_react__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
          content: this.props.tooltip,
          placement: "bottom",
          trigger: "mouseenter",
          interactive: true,
          animateFill: false
        }, this.props.tooltipProps), button);
      }

      return button;
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this2 = this;

      e.preventDefault();

      if (!this.preventMultipleClick) {
        !this.props.disabled && this.props.onClick && this.props.onClick(e);

        if (this.props.disableAfterClickMs !== 0) {
          this.preventMultipleClick = true;
          setTimeout(function () {
            _this2.preventMultipleClick = false;
          }, this.props.disableAfterClickMs);
        }
      }
    }
  }, {
    key: "getButtonClassName",
    value: function getButtonClassName() {
      return this.props.type && 'guestbell-btn-' + this.props.type;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
Button.defaultProps = {
  disabled: false,
  className: '',
  onClick: function onClick() {
    return null;
  },
  circular: false,
  noRipples: false,
  small: false,
  disableAfterClickMs: 500,
  Component: DefaultButtonComponent,
  buttonProps: {
    type: 'button'
  },
  type: 'none'
};
var _default = Button;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DefaultButtonComponent, "DefaultButtonComponent", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\button\\Button.tsx");
  reactHotLoader.register(Button, "Button", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\button\\Button.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\button\\Button.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvYnV0dG9uL0J1dHRvbi50c3giXSwibmFtZXMiOlsiSW5rIiwicmVxdWlyZSIsImNsYXNzTmFtZXMiLCJEZWZhdWx0QnV0dG9uQ29tcG9uZW50IiwiUmVhY3QiLCJwcm9wcyIsInJlZiIsImJ1dHRvblByb3BzIiwiaWQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3R5bGUiLCJjaGlsZHJlbiIsIkJ1dHRvbiIsInByZXZlbnRNdWx0aXBsZUNsaWNrIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiYnRuQ2xhc3NOYW1lIiwiZ2V0QnV0dG9uQ2xhc3NOYW1lIiwiZGlzYWJsZWQiLCJjaXJjdWxhciIsInNtYWxsIiwibm9TaGFkb3ciLCJibGFuayIsIm91dGxpbmVkIiwiZHJvcGRvd24iLCJpY29uIiwiaGVybyIsImJ1dHRvbiIsIm5vUmlwcGxlcyIsInRvb2x0aXAiLCJ0b29sdGlwUHJvcHMiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXNhYmxlQWZ0ZXJDbGlja01zIiwic2V0VGltZW91dCIsInR5cGUiLCJkZWZhdWx0UHJvcHMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLHVEQUFELENBQWpCOztBQUNBLElBQUlDLFVBQVUsR0FBR0QsbUJBQU8sQ0FBQyxzREFBRCxDQUF4QixDLENBRUE7OztBQThDQSxJQUFNRSxzQkFBc0QsR0FBR0MsZ0RBQUEsQ0FBaUIsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEsU0FDOUU7QUFDRSxPQUFHLEVBQUVBLEdBRFAsQ0FFRTs7QUFGRixLQUdPRCxLQUFLLENBQUNFLFdBQU4sR0FBb0JGLEtBQUssQ0FBQ0UsV0FBMUIsR0FBd0MsRUFIL0MsRUFJTUYsS0FBSyxDQUFDRyxFQUFOLElBQVk7QUFBRUEs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RUFBMEM7QUFDeEMsZUFBS3BCLG9CQUFMLEdBQTRCLElBQTVCO0FBQ0FxQixvQkFBVSxDQUFDLFlBQU07QUFDZixrQkFBSSxDQUFDckIsb0JBQUwsR0FBNEIsS0FBNUI7QUFDRCxXQUZTLEVBRVAsS0FBS1QsS0FBTCxDQUFXNkIsbUJBRkosQ0FBVjtBQUdEO0FBQ0Y7QUFDRjtBQTlFSDtBQUFBO0FBQUEseUNBZ0YrQjtBQUMzQixhQUFPLEtBQUs3QixLQUFMLENBQVcrQixJQUFYLElBQW1CLG1CQUFtQixLQUFLL0IsS0FBTCxDQUFXK0IsSUFBeEQ7QUFDRDtBQWxGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsRUFBNEJoQyxtREFBNUI7QUFBYVMsTSxDQUNHd0IsWSxHQUE0QjtBQUN4Q2xCLFVBQVEsRUFBRSxLQUQ4QjtBQUV4Q1YsV0FBUyxFQUFFLEVBRjZCO0FBR3hDQyxTQUFPLEVBQUU7QUFBQSxXQUFNLElBQU47QUFBQSxHQUgrQjtBQUl4Q1UsVUFBUSxFQUFFLEtBSjhCO0FBS3hDUyxXQUFTLEVBQUUsS0FMNkI7QUFNeENSLE9BQUssRUFBRSxLQU5pQztBQU94Q2EscUJBQW1CLEVBQUUsR0FQbUI7QUFReENJLFdBQVMsRUFBRW5DLHNCQVI2QjtBQVN4Q0ksYUFBVyxFQUFFO0FBQ1g2QixRQUFJLEVBQUU7QUFESyxHQVQyQjtBQVl4Q0EsTUFBSSxFQUFFO0FBWmtDLEM7ZUFtRjdCdkIsTTtBQUFBOzs7Ozs7Ozs7OzBCQW5HVFYsc0I7MEJBZU9VLE0iLCJmaWxlIjoiNzc3Mzk0MC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWJzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRpcHB5LCB7IFRpcHB5UHJvcHMgfSBmcm9tICdAdGlwcHkuanMvcmVhY3QnO1xyXG52YXIgSW5rID0gcmVxdWlyZSgncmVhY3QtaW5rJyk7XHJcbnZhciBjbGFzc05hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xyXG5cclxuLy8gTWlzY1xyXG5cclxuZXhwb3J0IHR5cGUgQnV0dG9uVHlwZXMgPVxyXG4gIHwgJ3ByaW1hcnknXHJcbiAgfCAnc3VjY2VzcydcclxuICB8ICdlcnJvcidcclxuICB8ICd3YXJuaW5nJ1xyXG4gIHwgJ2luZm8nXHJcbiAgfCAnZ3JheSdcclxuICB8ICd3aGl0ZSdcclxuICB8ICdub25lJztcclxuXHJcbmV4cG9ydCB0eXBlIEJ1dHRvbkNvbXBvbmVudFByb3BzID0ge1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4gdm9pZDtcclxuICBjbGFzc05hbWU6IHN0cmluZztcclxuICBidXR0b25Qcm9wczogUmVhY3QuQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgc3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXM7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBCdXR0b25Qcm9wcyA9IHtcclxuICBpZD86IHN0cmluZztcclxuICBvbkNsaWNrPzogKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB2b2lkO1xyXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIHR5cGU/OiBCdXR0b25UeXBlcztcclxuICBjaXJjdWxhcj86IGJvb2xlYW47XHJcbiAgbm9SaXBwbGVzPzogYm9vbGVhbjtcclxuICBzbWFsbD86IGJvb2xlYW47XHJcbiAgaWNvbj86IGJvb2xlYW47XHJcbiAgb3V0bGluZWQ/OiBib29sZWFuO1xyXG4gIGRpc2FibGVBZnRlckNsaWNrTXM/OiBudW1iZXI7XHJcbiAgYnV0dG9uUHJvcHM/OiBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD47XHJcbiAgaGVybz86IGJvb2xlYW47XHJcbiAgbm9TaGFkb3c/OiBib29sZWFuO1xyXG4gIGJsYW5rPzogYm9vbGVhbjtcclxuICBkcm9wZG93bj86IGJvb2xlYW47XHJcbiAgQ29tcG9uZW50PzogKHByb3BzOiBCdXR0b25Db21wb25lbnRQcm9wcykgPT4gSlNYLkVsZW1lbnQ7XHJcbiAgdG9vbHRpcD86IEpTWC5FbGVtZW50IHwgc3RyaW5nO1xyXG4gIHRvb2x0aXBQcm9wcz86IFRpcHB5UHJvcHM7XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblN0YXRlIHt9XHJcblxyXG5jb25zdCBEZWZhdWx0QnV0dG9uQ29tcG9uZW50OiBSZWFjdC5GQzxCdXR0b25Db21wb25lbnRQcm9wcz4gPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiAoXHJcbiAgPGJ1dHRvblxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICB7Li4uKHByb3BzLmJ1dHRvblByb3BzID8gcHJvcHMuYnV0dG9uUHJvcHMgOiB7fSkgYXMgYW55fVxyXG4gICAgey4uLnByb3BzLmlkICYmIHsgaWQ6IHByb3BzLmlkIH19XHJcbiAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfVxyXG4gICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgIHN0eWxlPXtwcm9wcy5zdHlsZX1cclxuICA+XHJcbiAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgPC9idXR0b24+XHJcbikpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QnV0dG9uUHJvcHMsIEJ1dHRvblN0YXRlPiB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IEJ1dHRvblByb3BzID0ge1xyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIG9uQ2xpY2s6ICgpID0+IG51bGwsXHJcbiAgICBjaXJjdWxhcjogZmFsc2UsXHJcbiAgICBub1JpcHBsZXM6IGZhbHNlLFxyXG4gICAgc21hbGw6IGZhbHNlLFxyXG4gICAgZGlzYWJsZUFmdGVyQ2xpY2tNczogNTAwLFxyXG4gICAgQ29tcG9uZW50OiBEZWZhdWx0QnV0dG9uQ29tcG9uZW50LFxyXG4gICAgYnV0dG9uUHJvcHM6IHtcclxuICAgICAgdHlwZTogJ2J1dHRvbidcclxuICAgIH0sXHJcbiAgICB0eXBlOiAnbm9uZSdcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHByZXZlbnRNdWx0aXBsZUNsaWNrID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBCdXR0b25Qcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBsZXQgYnRuQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhbXHJcbiAgICAgICdndWVzdGJlbGwtYnRuJyxcclxuICAgICAgdGhpcy5nZXRCdXR0b25DbGFzc05hbWUoKSxcclxuICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUsXHJcbiAgICAgIHsgWydndWVzdGJlbGwtYnRuLS1kaXNhYmxlZCddOiB0aGlzLnByb3BzLmRpc2FibGVkIH0sXHJcbiAgICAgIHsgWydndWVzdGJlbGwtYnRuLS1jaXJjdWxhciddOiB0aGlzLnByb3BzLmNpcmN1bGFyIH0sXHJcbiAgICAgIHsgWydndWVzdGJlbGwtYnRuLS1zbWFsbCddOiB0aGlzLnByb3BzLnNtYWxsIH0sXHJcbiAgICAgIHsgWydndWVzdGJlbGwtYnRuLS1uby1zaGFkb3cnXTogdGhpcy5wcm9wcy5ub1NoYWRvdyB9LFxyXG4gICAgICB7IFsnZ3Vlc3RiZWxsLWJ0bi0tYmxhbmsnXTogdGhpcy5wcm9wcy5ibGFuayB9LFxyXG4gICAgICB7IFsnZ3Vlc3RiZWxsLWJ0bi0tb3V0bGluZWQnXTogdGhpcy5wcm9wcy5vdXRsaW5lZCB9LFxyXG4gICAgICB7IFsnZ3Vlc3RiZWxsLWJ0bi0tZHJvcGRvd24nXTogdGhpcy5wcm9wcy5kcm9wZG93biB9LFxyXG4gICAgICB7IFsnZ3Vlc3RiZWxsLWJ0bi0taWNvbiddOiB0aGlzLnByb3BzLmljb24gfSxcclxuICAgICAgeyBbJ2d1ZXN0YmVsbC1idG4tLWhlcm8nXTogdGhpcy5wcm9wcy5oZXJvIH1cclxuICAgIF0pO1xyXG4gICAgY29uc3QgYnV0dG9uID0gKFxyXG4gICAgICA8dGhpcy5wcm9wcy5Db21wb25lbnRcclxuICAgICAgICB7Li4udGhpcy5wcm9wcy5pZCAmJiB7IGlkOiB0aGlzLnByb3BzLmlkIH19XHJcbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICBidXR0b25Qcm9wcz17dGhpcy5wcm9wcy5idXR0b25Qcm9wc31cclxuICAgICAgICBjbGFzc05hbWU9e2J0bkNsYXNzTmFtZX1cclxuICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cclxuICAgICAgPlxyXG4gICAgICAgIHshdGhpcy5wcm9wcy5ub1JpcHBsZXMgJiYgIXRoaXMucHJvcHMuZGlzYWJsZWQgJiYgSW5rICYmIDxJbmsgLz59XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvdGhpcy5wcm9wcy5Db21wb25lbnQ+XHJcbiAgICApO1xyXG4gICAgaWYgKHRoaXMucHJvcHMudG9vbHRpcCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUaXBweVxyXG4gICAgICAgICAgY29udGVudD17dGhpcy5wcm9wcy50b29sdGlwfVxyXG4gICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcclxuICAgICAgICAgIHRyaWdnZXI9XCJtb3VzZWVudGVyXCJcclxuICAgICAgICAgIGludGVyYWN0aXZlPXt0cnVlfVxyXG4gICAgICAgICAgYW5pbWF0ZUZpbGw9e2ZhbHNlfVxyXG4gICAgICAgICAgey4uLnRoaXMucHJvcHMudG9vbHRpcFByb3BzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtidXR0b259XHJcbiAgICAgICAgPC9UaXBweT5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBidXR0b247XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZUNsaWNrKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIXRoaXMucHJldmVudE11bHRpcGxlQ2xpY2spIHtcclxuICAgICAgIXRoaXMucHJvcHMuZGlzYWJsZWQgJiYgdGhpcy5wcm9wcy5vbkNsaWNrICYmIHRoaXMucHJvcHMub25DbGljayhlKTtcclxuICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZUFmdGVyQ2xpY2tNcyAhPT0gMCkge1xyXG4gICAgICAgIHRoaXMucHJldmVudE11bHRpcGxlQ2xpY2sgPSB0cnVlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcmV2ZW50TXVsdGlwbGVDbGljayA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMucHJvcHMuZGlzYWJsZUFmdGVyQ2xpY2tNcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QnV0dG9uQ2xhc3NOYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMudHlwZSAmJiAnZ3Vlc3RiZWxsLWJ0bi0nICsgdGhpcy5wcm9wcy50eXBlO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=