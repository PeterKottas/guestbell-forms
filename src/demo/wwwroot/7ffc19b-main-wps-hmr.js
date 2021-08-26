webpackHotUpdate("main",{

/***/ "./src/lib/components/text/Text.tsx":
/*!******************************************!*\
  !*** ./src/lib/components/text/Text.tsx ***!
  \******************************************/
/*! exports provided: TextRaw, Text, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextRaw", function() { return TextRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inputGroup/InputGroup */ "./src/lib/components/inputGroup/InputGroup.tsx");
/* harmony import */ var _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/input/BaseInput */ "./src/lib/components/base/input/BaseInput.tsx");
/* harmony import */ var _form_withFormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form/withFormContext */ "./src/lib/components/form/withFormContext.tsx");
/* harmony import */ var _themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../themeProvider/withThemeContext */ "./src/lib/components/themeProvider/withThemeContext.tsx");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button */ "./src/lib/components/button/index.tsx");
/* harmony import */ var material_design_icons_content_svg_production_ic_add_24px_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-design-icons/content/svg/production/ic_add_24px.svg */ "./node_modules/material-design-icons/content/svg/production/ic_add_24px.svg");
/* harmony import */ var material_design_icons_content_svg_production_ic_add_24px_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_content_svg_production_ic_add_24px_svg__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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

var TextRaw = /*#__PURE__*/function (_BaseInput) {
  _inherits(TextRaw, _BaseInput);

  var _super = _createSuper(TextRaw);

  function TextRaw(props) {
    var _this;

    _classCallCheck(this, TextRaw);

    _this = _super.call(this, props);

    _this.clearClick = function () {
      if (_this.inputRef.current) {
        var nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;

        if (nativeTextAreaValueSetter) {
          nativeTextAreaValueSetter.call(_this.inputRef.current, '');
          var event = new Event('input', {
            bubbles: true
          });

          _this.inputRef.current.dispatchEvent(event);
        }
      }
    };

    _this.containerClick = function (e) {
      return _this.props.stopClickPropagation && e.stopPropagation();
    };

    _this.onKeyDown = function (e) {
      return _this.props.onKeyDown && _this.props.onKeyDown(e);
    };

    if (props.number !== undefined) {
      var _props$number$toStrin, _props$number;

      var value = (_props$number$toStrin = (_props$number = props.number) === null || _props$number === void 0 ? void 0 : _props$number.toString()) !== null && _props$number$toStrin !== void 0 ? _props$number$toStrin : '';

      var res = _this.handleValueChange(value, true, [], props, true);

      _this.state = _objectSpread(_objectSpread({}, _this.state), {}, {
        isValid: res.isValid,
        errors: res.errors,
        value: value
      });
    }

    return _this;
  }

  _createClass(TextRaw, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.onNumberChange && (this.state.isValid !== prevState.isValid || this.state.value !== prevState.value)) {
        var num = Number(this.state.value);

        if (!isNaN(num)) {
          this.props.onNumberChange(num, this.state.isValid);
        }

        if (this.state.value === '') {
          this.props.onNumberChange(undefined, this.state.isValid);
        }
      }

      if ((prevProps.number !== undefined || this.props.number !== undefined) && this.props.number !== prevProps.number) {
        var _this$props$number$to, _this$props$number;

        this.handleValueChange((_this$props$number$to = (_this$props$number = this.props.number) === null || _this$props$number === void 0 ? void 0 : _this$props$number.toString()) !== null && _this$props$number$to !== void 0 ? _this$props$number$to : '');
      }

      _get(_getPrototypeOf(TextRaw.prototype), "componentDidUpdate", this).call(this, prevProps, prevState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state$value, _this$props$value;

      var clearButtonHidden = !((_this$state$value = this.state.value) !== null && _this$state$value !== void 0 && _this$state$value.length) || this.props.disabled;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: this.props.title,
        tooltip: this.props.tooltip
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "input__base text-input ".concat(this.getValidationClass(), " \n                    ").concat(this.props.readOnly ? 'text-input--readOnly' : '', " ").concat(this.props.className ? this.props.className : ''),
        onClick: this.containerClick,
        ref: this.containerRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "text-input__textWrapper"
      }, this.props.before, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", _extends({}, this.props.id && {
        id: this.props.id
      }, {
        ref: this.inputRef,
        placeholder: this.props.placeholder,
        disabled: this.getDisabled(),
        required: this.props.required,
        className: this.state.value ? 'filled' : '',
        onChange: this.handleChange,
        value: this.state.value,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        readOnly: this.props.readOnly,
        onKeyDown: this.onKeyDown,
        type: this.props.type,
        onClick: this.props.onClick,
        maxLength: this.props.maxLength,
        size: this.props.sizeFromValue ? ((_this$props$value = this.props.value) === null || _this$props$value === void 0 ? void 0 : _this$props$value.length) || 1 : undefined
      })), this.props.after, !this.props.readOnly && this.props.showClearButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, this.props.id && {
        id: this.props.id + '-clear-button'
      }, {
        disabled: clearButtonHidden,
        unobtrusive: true,
        noShadow: true,
        onClick: this.clearClick,
        className: classNames('text-input__clearButton line-height--0', {
          'text-input__clearButton--hidden': clearButtonHidden
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](material_design_icons_content_svg_production_ic_add_24px_svg__WEBPACK_IMPORTED_MODULE_6__, {
        className: "transform-rotate--45 line-height--0"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "highlight"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "bar"
      }), this.renderDefaultValidation(), this.props.label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
        className: this.props.readOnly ? 'label--focused' : ''
      }, this.renderLabel()))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return TextRaw;
}(_base_input_BaseInput__WEBPACK_IMPORTED_MODULE_2__["BaseInput"]);
TextRaw.defaultProps = Object.assign({}, _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_2__["BaseInput"].defaultProps, {
  type: 'text',
  stopClickPropagation: true,
  readOnly: false
});
var Text = Object(_themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_4__["withThemeContext"])(Object(_form_withFormContext__WEBPACK_IMPORTED_MODULE_3__["withFormContext"])(TextRaw), 'text');
var _default = Text;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextRaw, "TextRaw", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\text\\Text.tsx");
  reactHotLoader.register(Text, "Text", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\text\\Text.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\text\\Text.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGV4dC9UZXh0LnRzeCJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwicmVxdWlyZSIsIlRleHRSYXciLCJwcm9wcyIsImNsZWFyQ2xpY2siLCJpbnB1dFJlZiIsImN1cnJlbnQiLCJuYXRpdmVUZXh0QXJlYVZhbHVlU2V0dGVyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwid2luZG93IiwiSFRNTElucHV0RWxlbWVudCIsInByb3RvdHlwZSIsInNldCIsImNhbGwiLCJldmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImRpc3BhdGNoRXZlbnQiLCJjb250YWluZXJDbGljayIsImUiLCJzdG9wQ2xpY2tQcm9wYWdhdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uS2V5RG93biIsIm51bWJlciIsInVuZGVmaW5lZCIsInZhbHVlIiwidG9TdHJpbmciLCJyZXMiLCJoYW5kbGVWYWx1ZUNoYW5nZSIsInN0YXRlIiwiaXNWYWxpZCIsImVycm9ycyIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsIm9uTnVtYmVyQ2hhbmdlIiwibnVtIiwiTnVtYmVyIiwiaXNOYU4iLCJjbGVhckJ1dHRvbkhpZGRlbiIsImxlbmd0aCIsImRpc2FibGVkIiwidGl0bGUiLCJ0b29sdGlwIiwiZ2V0VmFsaWRhdGlvbkNsYXNzIiwicmVhZE9ubHkiLCJjbGFzc05hbWUiLCJjb250YWluZXJSZWYiLCJiZWZvcmUiLCJpZCIsInBsYWNlaG9sZGVyIiwiZ2V0RGlzYWJsZWQiLCJyZXF1aXJlZCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJoYW5kbGVGb2N1cyIsInR5cGUiLCJvbkNsaWNrIiwibWF4TGVuZ3RoIiwic2l6ZUZyb21WYWx1ZSIsImFmdGVyIiwic2hvd0NsZWFyQnV0dG9uIiwicmVuZGVyRGVmYXVsdFZhbGlkYXRpb24iLCJsYWJlbCIsInJlbmRlckxhYmVsIiwiQmFzZUlucHV0IiwiZGVmYXVsdFBy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LE9BRHhCO0FBSUUsZ0JBQVEsRUFBRVYsaUJBSlo7QUFLRSxtQkFBVyxFQUFFLElBTGY7QUFNRSxnQkFBUSxFQUFFLElBTlo7QUFPRSxlQUFPLEVBQUUsS0FBS25DLFVBUGhCO0FBUUUsaUJBQVMsRUFBRUosVUFBVSxDQUNuQix3Q0FEbUIsRUFFbkI7QUFDRSw2Q0FBbUN1QztBQURyQyxTQUZtQjtBQVJ2Qix1QkFlRSxvREFBQyx5RkFBRDtBQUFVLGlCQUFTLEVBQUM7QUFBcEIsUUFmRixDQTVCSixlQThDRTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsUUE5Q0YsZUErQ0U7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFFBL0NGLEVBZ0RHLEtBQUt1Qix1QkFBTCxFQWhESCxFQWlERyxLQUFLM0QsS0FBTCxDQUFXNEQsS0FBWCxpQkFDQztBQUFPLGlCQUFTLEVBQUUsS0FBSzVELEtBQUwsQ0FBVzBDLFFBQVgsR0FBc0IsZ0JBQXRCLEdBQXlDO0FBQTNELFNBQ0csS0FBS21CLFdBQUwsRUFESCxDQWxESixDQVJGLENBREYsQ0FERjtBQW9FRDtBQWxISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsRUFBNkJDLCtEQUE3QjtBQUFhL0QsTyxDQUNHZ0UsWSxHQUFlMUQsTUFBTSxDQUFDMkQsTUFBUCxDQUFjLEVBQWQsRUFBa0JGLCtEQUFTLENBQUNDLFlBQTVCLEVBQTBDO0FBQ3JFVixNQUFJLEVBQUUsTUFEK0Q7QUFFckVuQyxzQkFBb0IsRUFBRSxJQUYrQztBQUdyRXdCLFVBQVEsRUFBRTtBQUgyRCxDQUExQyxDO0FBeUl4QixJQUFNdUIsSUFBSSxHQUFHQyx3RkFBZ0IsQ0FDbENDLDZFQUFlLENBQVlwRSxPQUFaLENBRG1CLEVBRWxDLE1BRmtDLENBQTdCO2VBS1FrRSxJO0FBQUE7Ozs7Ozs7Ozs7MEJBL0lGbEUsTzswQkEwSUFrRSxJIiwiZmlsZSI6IjdmZmMxOWItbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlic1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBNaXNjXHJcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gJy4uL2lucHV0R3JvdXAvSW5wdXRHcm91cCc7XHJcbmltcG9ydCB7XHJcbiAgQmFzZUlucHV0UHJvcHMsXHJcbiAgQmFzZUlucHV0U3RhdGUsXHJcbiAgQmFzZUlucHV0LFxyXG59IGZyb20gJy4uL2Jhc2UvaW5wdXQvQmFzZUlucHV0JztcclxuaW1wb3J0IHsgd2l0aEZvcm1Db250ZXh0IH0gZnJvbSAnLi4vZm9ybS93aXRoRm9ybUNvbnRleHQnO1xyXG5pbXBvcnQgeyB3aXRoVGhlbWVDb250ZXh0IH0gZnJvbSAnLi4vdGhlbWVQcm92aWRlci93aXRoVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nO1xyXG5pbXBvcnQgKiBhcyBQbHVzSWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvY29udGVudC9zdmcvcHJvZHVjdGlvbi9pY19hZGRfMjRweC5zdmcnO1xyXG52YXIgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFByb3BzIGV4dGVuZHMgQmFzZUlucHV0UHJvcHM8SFRNTElucHV0RWxlbWVudD4ge1xyXG4gIG1hc2s/OiBzdHJpbmc7XHJcbiAgcmV2ZXJzZT86IGJvb2xlYW47XHJcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgc3RvcENsaWNrUHJvcGFnYXRpb24/OiBib29sZWFuO1xyXG4gIGlucHV0UmVmPzogUmVhY3QuUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcclxuICB0eXBlPzogJ251bWJlcicgfCAndGV4dCc7XHJcbiAgbWF4TGVuZ3RoPzogbnVtYmVyO1xyXG4gIHNob3dDbGVhckJ1dHRvbj86IGJvb2xlYW47XHJcbiAgYWZ0ZXI/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgYmVmb3JlPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIHNpemVGcm9tVmFsdWU/OiBib29sZWFuO1xyXG4gIG9uTnVtYmVyQ2hhbmdlPzogKG51bWJlcjogbnVtYmVyLCBpc1ZhbGlkOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIG51bWJlcj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0U3RhdGUgZXh0ZW5kcyBCYXNlSW5wdXRTdGF0ZSB7fVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRSYXcgZXh0ZW5kcyBCYXNlSW5wdXQ8VGV4dFByb3BzLCBUZXh0U3RhdGUsIEhUTUxJbnB1dEVsZW1lbnQ+IHtcclxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIEJhc2VJbnB1dC5kZWZhdWx0UHJvcHMsIHtcclxuICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgIHN0b3BDbGlja1Byb3BhZ2F0aW9uOiB0cnVlLFxyXG4gICAgcmVhZE9ubHk6IGZhbHNlLFxyXG4gIH0pIGFzIFRleHRQcm9wcztcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFRleHRQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgaWYgKHByb3BzLm51bWJlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHMubnVtYmVyPy50b1N0cmluZygpID8/ICcnO1xyXG4gICAgICBjb25zdCByZXMgPSB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKHZhbHVlLCB0cnVlLCBbXSwgcHJvcHMsIHRydWUpO1xyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgICAgaXNWYWxpZDogcmVzLmlzVmFsaWQsXHJcbiAgICAgICAgZXJyb3JzOiByZXMuZXJyb3JzLFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFRleHRQcm9wcywgcHJldlN0YXRlOiBUZXh0U3RhdGUpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5wcm9wcy5vbk51bWJlckNoYW5nZSAmJlxyXG4gICAgICAodGhpcy5zdGF0ZS5pc1ZhbGlkICE9PSBwcmV2U3RhdGUuaXNWYWxpZCB8fFxyXG4gICAgICAgIHRoaXMuc3RhdGUudmFsdWUgIT09IHByZXZTdGF0ZS52YWx1ZSlcclxuICAgICkge1xyXG4gICAgICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgIGlmICghaXNOYU4obnVtKSkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25OdW1iZXJDaGFuZ2UobnVtLCB0aGlzLnN0YXRlLmlzVmFsaWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlID09PSAnJykge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25OdW1iZXJDaGFuZ2UodW5kZWZpbmVkLCB0aGlzLnN0YXRlLmlzVmFsaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIChwcmV2UHJvcHMubnVtYmVyICE9PSB1bmRlZmluZWQgfHwgdGhpcy5wcm9wcy5udW1iZXIgIT09IHVuZGVmaW5lZCkgJiZcclxuICAgICAgdGhpcy5wcm9wcy5udW1iZXIgIT09IHByZXZQcm9wcy5udW1iZXJcclxuICAgICkge1xyXG4gICAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKHRoaXMucHJvcHMubnVtYmVyPy50b1N0cmluZygpID8/ICcnKTtcclxuICAgIH1cclxuICAgIHN1cGVyLmNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY2xlYXJCdXR0b25IaWRkZW4gPSAhdGhpcy5zdGF0ZS52YWx1ZT8ubGVuZ3RoIHx8IHRoaXMucHJvcHMuZGlzYWJsZWQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SW5wdXRHcm91cCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gdG9vbHRpcD17dGhpcy5wcm9wcy50b29sdGlwfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BpbnB1dF9fYmFzZSB0ZXh0LWlucHV0ICR7dGhpcy5nZXRWYWxpZGF0aW9uQ2xhc3MoKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnByb3BzLnJlYWRPbmx5ID8gJ3RleHQtaW5wdXQtLXJlYWRPbmx5JyA6ICcnfSAke1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJydcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5jb250YWluZXJDbGlja31cclxuICAgICAgICAgIHJlZj17dGhpcy5jb250YWluZXJSZWZ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0X190ZXh0V3JhcHBlclwiPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5iZWZvcmV9XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICByZWY9e3RoaXMuaW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuZ2V0RGlzYWJsZWQoKX1cclxuICAgICAgICAgICAgICByZXF1aXJlZD17dGhpcy5wcm9wcy5yZXF1aXJlZH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUudmFsdWUgPyAnZmlsbGVkJyA6ICcnfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxyXG4gICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRPbmx5fVxyXG4gICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd259XHJcbiAgICAgICAgICAgICAgdHlwZT17dGhpcy5wcm9wcy50eXBlfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja31cclxuICAgICAgICAgICAgICBtYXhMZW5ndGg9e3RoaXMucHJvcHMubWF4TGVuZ3RofVxyXG4gICAgICAgICAgICAgIHNpemU9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zaXplRnJvbVZhbHVlXHJcbiAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy52YWx1ZT8ubGVuZ3RoIHx8IDFcclxuICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmFmdGVyfVxyXG4gICAgICAgICAgICB7IXRoaXMucHJvcHMucmVhZE9ubHkgJiYgdGhpcy5wcm9wcy5zaG93Q2xlYXJCdXR0b24gJiYgKFxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy1jbGVhci1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2xlYXJCdXR0b25IaWRkZW59XHJcbiAgICAgICAgICAgICAgICB1bm9idHJ1c2l2ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG5vU2hhZG93PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbGVhckNsaWNrfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAndGV4dC1pbnB1dF9fY2xlYXJCdXR0b24gbGluZS1oZWlnaHQtLTAnLFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RleHQtaW5wdXRfX2NsZWFyQnV0dG9uLS1oaWRkZW4nOiBjbGVhckJ1dHRvbkhpZGRlbixcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UGx1c0ljb24gY2xhc3NOYW1lPVwidHJhbnNmb3JtLXJvdGF0ZS0tNDUgbGluZS1oZWlnaHQtLTBcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIiAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJcIiAvPlxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJEZWZhdWx0VmFsaWRhdGlvbigpfVxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbCAmJiAoXHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5yZWFkT25seSA/ICdsYWJlbC0tZm9jdXNlZCcgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJMYWJlbCgpfVxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xlYXJDbGljayA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmlucHV0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgdmFyIG5hdGl2ZVRleHRBcmVhVmFsdWVTZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFxyXG4gICAgICAgIHdpbmRvdy5IVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSxcclxuICAgICAgICAndmFsdWUnXHJcbiAgICAgICkuc2V0O1xyXG4gICAgICBpZiAobmF0aXZlVGV4dEFyZWFWYWx1ZVNldHRlcikge1xyXG4gICAgICAgIG5hdGl2ZVRleHRBcmVhVmFsdWVTZXR0ZXIuY2FsbCh0aGlzLmlucHV0UmVmLmN1cnJlbnQsICcnKTtcclxuXHJcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2lucHV0JywgeyBidWJibGVzOiB0cnVlIH0pO1xyXG4gICAgICAgIHRoaXMuaW5wdXRSZWYuY3VycmVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgY29udGFpbmVyQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnByb3BzLnN0b3BDbGlja1Byb3BhZ2F0aW9uICYmIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gIHByaXZhdGUgb25LZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnByb3BzLm9uS2V5RG93biAmJiB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRleHQgPSB3aXRoVGhlbWVDb250ZXh0PFRleHRQcm9wcywgSW5zdGFuY2VUeXBlPHR5cGVvZiBUZXh0UmF3Pj4oXHJcbiAgd2l0aEZvcm1Db250ZXh0PFRleHRQcm9wcz4oVGV4dFJhdyksXHJcbiAgJ3RleHQnXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9