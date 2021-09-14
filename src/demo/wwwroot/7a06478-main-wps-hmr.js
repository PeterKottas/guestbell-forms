webpackHotUpdate("main",{

/***/ "./src/lib/components/numberInput/NumberInput.tsx":
/*!********************************************************!*\
  !*** ./src/lib/components/numberInput/NumberInput.tsx ***!
  \********************************************************/
/*! exports provided: NumberInputRaw, NumberInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberInputRaw", function() { return NumberInputRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberInput", function() { return NumberInput; });
/* harmony import */ var material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg */ "./node_modules/material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg");
/* harmony import */ var material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inputGroup/InputGroup */ "./src/lib/components/inputGroup/InputGroup.tsx");
/* harmony import */ var _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/input/BaseInput */ "./src/lib/components/base/input/BaseInput.tsx");
/* harmony import */ var _form_withFormContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/withFormContext */ "./src/lib/components/form/withFormContext.tsx");
/* harmony import */ var _themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../themeProvider/withThemeContext */ "./src/lib/components/themeProvider/withThemeContext.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

 // Libs

 // Misc






var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var NumberInputRaw = /*#__PURE__*/function (_BaseInput) {
  _inherits(NumberInputRaw, _BaseInput);

  var _super = _createSuper(NumberInputRaw);

  function NumberInputRaw(props) {
    var _this;

    _classCallCheck(this, NumberInputRaw);

    _this = _super.call(this, props);

    _this.onBlur = function (e) {
      _this.commitState();

      _this.handleBlur(e);
    };

    _this.removeUnitClick = function (e) {
      e.preventDefault();

      _this.handleLimits((_this.props.number || 0) - 1);
    };

    _this.onUnitChanged = function (e) {
      _this.setState({
        currentText: e.target.value
      });
    };

    _this.onKeyDown = function (e) {
      if (e.key === 'Enter') {
        _this.commitState();
      }
    };

    _this.addUnitClick = function (e) {
      e.preventDefault();

      _this.handleLimits((_this.props.number || 0) + 1);
    };

    _this.removeUnitClick = _this.removeUnitClick.bind(_assertThisInitialized(_this));
    _this.addUnitClick = _this.addUnitClick.bind(_assertThisInitialized(_this));
    _this.onUnitChanged = _this.onUnitChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NumberInputRaw, [{
    key: "render",
    value: function render() {
      var unit = this.props.unit;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: this.props.title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", _extends({}, this.props.id && {
        id: this.props.id
      }, {
        className: 'input__base number-input ' + this.getValidationClass() + ' ' + (this.props.className ? this.props.className : ''),
        ref: this.containerRef
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "number-input__arrows__container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", _extends({
        className: "plus",
        onClick: this.addUnitClick
      }, this.props.id && {
        id: this.props.id + '-add-hours-button'
      }, {
        tabIndex: 0
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0__, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "input-padding"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", _extends({}, this.props.id && {
        id: this.props.id + '-input'
      }, {
        disabled: this.getDisabled(),
        required: this.props.required,
        className: classNames('number-input__time', {
          filled: this.props.number !== undefined
        }),
        onChange: this.onUnitChanged,
        value: this.state.currentText !== undefined ? this.state.currentText : this.props.number,
        onBlur: this.onBlur,
        onFocus: this.handleFocus,
        type: "number",
        onKeyDown: this.onKeyDown
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "highlight"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", _extends({
        className: "minus",
        onClick: this.removeUnitClick
      }, this.props.id && {
        id: this.props.id + '-subtract-hours-button'
      }, {
        tabIndex: 0
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0__, null))), unit), this.renderDefaultValidation(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "highlight"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: 'bar ' + (this.state.focused ? 'focused' : '')
      }), this.props.label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
        className: classNames('number-input__label label--focused')
      }, this.renderLabel())));
    }
  }, {
    key: "commitState",
    value: function commitState() {
      if (this.state.currentText) {
        var num = Number(this.state.currentText);

        if (!isNaN(num)) {
          this.handleLimits(num);
        }

        this.setState({
          currentText: undefined
        });
      }
    }
  }, {
    key: "handleLimits",
    value: function handleLimits(num) {
      if (this.props.min !== undefined) {
        if (num - this.props.min <= 0) {
          this.props.onNumberChange(this.props.min);
          return;
        }
      }

      if (this.props.max !== undefined) {
        if (this.props.max - num <= 0) {
          this.props.onNumberChange(this.props.max);
          return;
        }
      }

      this.props.onNumberChange(num);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return NumberInputRaw;
}(_base_input_BaseInput__WEBPACK_IMPORTED_MODULE_3__["BaseInput"]);
NumberInputRaw.defaultProps = Object.assign({}, _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_3__["BaseInput"].defaultProps, {
  type: 'time',
  placeholder: ''
});
var NumberInput = Object(_themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_5__["withThemeContext"])(Object(_form_withFormContext__WEBPACK_IMPORTED_MODULE_4__["withFormContext"])(NumberInputRaw), 'numberInput');
var _default = NumberInput;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NumberInputRaw, "NumberInputRaw", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\numberInput\\NumberInput.tsx");
  reactHotLoader.register(NumberInput, "NumberInput", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\numberInput\\NumberInput.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\numberInput\\NumberInput.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvbnVtYmVySW5wdXQvTnVtYmVySW5wdXQudHN4Il0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJyZXF1aXJlIiwiTnVtYmVySW5wdXRSYXciLCJwcm9wcyIsIm9uQmx1ciIsImUiLCJjb21taXRTdGF0ZSIsImhhbmRsZUJsdXIiLCJyZW1vdmVVbml0Q2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUxpbWl0cyIsIm51bWJlciIsIm9uVW5pdENoYW5nZWQiLCJzZXRTdGF0ZSIsImN1cnJlbnRUZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJvbktleURvd24iLCJrZXkiLCJhZGRVbml0Q2xpY2siLCJiaW5kIiwidW5pdCIsInRpdGxlIiwiaWQiLCJnZXRWYWxpZGF0aW9uQ2xhc3MiLCJjbGFzc05hbWUiLCJjb250YWluZXJSZWYiLCJnZXREaXNhYmxlZCIsInJlcXVpcmVkIiwiZmlsbGVkIiwidW5kZWZpbmVkIiwic3RhdGUiLCJoYW5kbGVGb2N1cyIsInJlbmRlckRlZmF1bHRWYWxpZGF0aW9uIiwiZm9jdXNlZCIsImxhYmVsIiwicmVuZGVyTGFiZWwiLCJudW0iLCJOdW1iZXIiLCJpc05hTiIsIm1pbiIsIm9uTnVtYmVyQ2hhbmdlIiwibWF4IiwiQmFzZUlucHV0IiwiZGVmYXVsdFByb3BzIiwiT2JqZWN0IiwiYXNzaWduIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiTnVtYmVySW5wdXQiLCJ3aXRoVGhlbWVDb250ZXh0Iiwid2l0aEZvcm1Db250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7Q0FHQTs7QUFDQTtBQUNBO0FBS0E7QUFDQTs7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsc0RBQUQsQ0FBeEI7O0FBZ0JPLElBQU1DLGNBQWI7QUFBQTs7QUFBQTs7QUFVRSwwQkFBWUMsS0FBWixFQUFx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R1UsYUFIVixDQUFwQztlQUtRK0MsVztBQUFBOzs7Ozs7Ozs7OzBCQXZKRi9DLGM7MEJBa0pBK0MsVyIsImZpbGUiOiI3YTA2NDc4LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFycm93SWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvaGFyZHdhcmUvc3ZnL3Byb2R1Y3Rpb24vaWNfa2V5Ym9hcmRfYXJyb3dfZG93bl8yNHB4LnN2Zyc7XHJcblxyXG4vLyBMaWJzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIE1pc2NcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSAnLi4vaW5wdXRHcm91cC9JbnB1dEdyb3VwJztcclxuaW1wb3J0IHtcclxuICBCYXNlSW5wdXRQcm9wcyxcclxuICBCYXNlSW5wdXRTdGF0ZSxcclxuICBCYXNlSW5wdXQsXHJcbn0gZnJvbSAnLi4vYmFzZS9pbnB1dC9CYXNlSW5wdXQnO1xyXG5pbXBvcnQgeyB3aXRoRm9ybUNvbnRleHQgfSBmcm9tICcuLi9mb3JtL3dpdGhGb3JtQ29udGV4dCc7XHJcbmltcG9ydCB7IHdpdGhUaGVtZUNvbnRleHQgfSBmcm9tICcuLi90aGVtZVByb3ZpZGVyL3dpdGhUaGVtZUNvbnRleHQnO1xyXG52YXIgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnVtYmVySW5wdXRQcm9wcyBleHRlbmRzIEJhc2VJbnB1dFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcclxuICB2YWx1ZT86IG5ldmVyO1xyXG4gIG9uQ2hhbmdlPzogbmV2ZXI7XHJcbiAgb25OdW1iZXJDaGFuZ2U6IChudW06IG51bWJlcikgPT4gdm9pZDtcclxuICBudW1iZXI6IG51bWJlcjtcclxuICBtaW4/OiBudW1iZXI7XHJcbiAgbWF4PzogbnVtYmVyO1xyXG4gIHVuaXQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnVtYmVySW5wdXRTdGF0ZSBleHRlbmRzIEJhc2VJbnB1dFN0YXRlIHtcclxuICBjdXJyZW50VGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTnVtYmVySW5wdXRSYXcgZXh0ZW5kcyBCYXNlSW5wdXQ8XHJcbiAgTnVtYmVySW5wdXRQcm9wcyxcclxuICBOdW1iZXJJbnB1dFN0YXRlLFxyXG4gIEhUTUxJbnB1dEVsZW1lbnRcclxuPiB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSAoT2JqZWN0LmFzc2lnbih7fSwgQmFzZUlucHV0LmRlZmF1bHRQcm9wcywge1xyXG4gICAgdHlwZTogJ3RpbWUnLFxyXG4gICAgcGxhY2Vob2xkZXI6ICcnLFxyXG4gIH0pIGFzIHVua25vd24pIGFzIFBhcnRpYWw8TnVtYmVySW5wdXRQcm9wcz47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBOdW1iZXJJbnB1dFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnJlbW92ZVVuaXRDbGljayA9IHRoaXMucmVtb3ZlVW5pdENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmFkZFVuaXRDbGljayA9IHRoaXMuYWRkVW5pdENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uVW5pdENoYW5nZWQgPSB0aGlzLm9uVW5pdENoYW5nZWQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHVuaXQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SW5wdXRHcm91cCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICdpbnB1dF9fYmFzZSBudW1iZXItaW5wdXQgJyArXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VmFsaWRhdGlvbkNsYXNzKCkgK1xyXG4gICAgICAgICAgICAnICcgK1xyXG4gICAgICAgICAgICAodGhpcy5wcm9wcy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVmPXt0aGlzLmNvbnRhaW5lclJlZn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bWJlci1pbnB1dF9fYXJyb3dzX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbHVzXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkVW5pdENsaWNrfVxyXG4gICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLWFkZC1ob3Vycy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD17MH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1wYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuZ2V0RGlzYWJsZWQoKX1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RoaXMucHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbnVtYmVyLWlucHV0X190aW1lJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxlZDogdGhpcy5wcm9wcy5udW1iZXIgIT09IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVW5pdENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmN1cnJlbnRUZXh0ICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5jdXJyZW50VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzLm51bWJlclxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWludXNcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZW1vdmVVbml0Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctc3VidHJhY3QtaG91cnMtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFycm93SWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3VuaXR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHt0aGlzLnJlbmRlckRlZmF1bHRWYWxpZGF0aW9uKCl9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIiAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnYmFyICcgKyAodGhpcy5zdGF0ZS5mb2N1c2VkID8gJ2ZvY3VzZWQnIDogJycpfSAvPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMubGFiZWwgJiYgKFxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdudW1iZXItaW5wdXRfX2xhYmVsIGxhYmVsLS1mb2N1c2VkJyl9PlxyXG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckxhYmVsKCl9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb21taXRTdGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRUZXh0KSB7XHJcbiAgICAgIHZhciBudW0gPSBOdW1iZXIodGhpcy5zdGF0ZS5jdXJyZW50VGV4dCk7XHJcbiAgICAgIGlmICghaXNOYU4obnVtKSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlTGltaXRzKG51bSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRUZXh0OiB1bmRlZmluZWQgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQmx1ciA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICB0aGlzLmNvbW1pdFN0YXRlKCk7XHJcbiAgICB0aGlzLmhhbmRsZUJsdXIoZSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVVbml0Q2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuaGFuZGxlTGltaXRzKCh0aGlzLnByb3BzLm51bWJlciB8fCAwKSAtIDEpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25Vbml0Q2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRUZXh0OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgdGhpcy5jb21taXRTdGF0ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgYWRkVW5pdENsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmhhbmRsZUxpbWl0cygodGhpcy5wcm9wcy5udW1iZXIgfHwgMCkgKyAxKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGhhbmRsZUxpbWl0cyhudW06IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMucHJvcHMubWluICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKG51bSAtIHRoaXMucHJvcHMubWluIDw9IDApIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uTnVtYmVyQ2hhbmdlKHRoaXMucHJvcHMubWluKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLm1heCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLm1heCAtIG51bSA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbk51bWJlckNoYW5nZSh0aGlzLnByb3BzLm1heCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3BzLm9uTnVtYmVyQ2hhbmdlKG51bSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTnVtYmVySW5wdXQgPSB3aXRoVGhlbWVDb250ZXh0PFxyXG4gIE51bWJlcklucHV0UHJvcHMsXHJcbiAgSW5zdGFuY2VUeXBlPHR5cGVvZiBOdW1iZXJJbnB1dFJhdz5cclxuPih3aXRoRm9ybUNvbnRleHQ8TnVtYmVySW5wdXRQcm9wcz4oTnVtYmVySW5wdXRSYXcpLCAnbnVtYmVySW5wdXQnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE51bWJlcklucHV0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9