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

    if (props.number !== undefined || props.onNumberChange) {
      var _props$number$toStrin, _props$number;

      var value = (_props$number$toStrin = (_props$number = props.number) === null || _props$number === void 0 ? void 0 : _props$number.toString()) !== null && _props$number$toStrin !== void 0 ? _props$number$toStrin : '';

      var res = _this.handleValueChange(value, true, [], props, true);

      _this.state = _objectSpread(_objectSpread({}, _this.state), {}, {
        isValid: res.isValid,
        errors: res.errors,
        value: value
      });

      if (!_this.props.ignoreContext) {
        _this.props.formContext && _this.props.formContext.updateCallback(_this.componentId, {
          validation: {
            isValid: res.isValid,
            errors: res.errors
          }
        });
      }
    }

    return _this;
  }

  _createClass(TextRaw, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.onNumberChange && (this.state.isValid !== prevState.isValid || this.state.value !== prevState.value) && this.props.number !== Number(this.state.value)) {
        var num = Number(this.state.value);

        if (this.state.value === '') {
          this.props.onNumberChange(undefined, this.state.isValid);
        } else if (!isNaN(num)) {
          this.props.onNumberChange(num, this.state.isValid);
        }
      }

      if ((prevProps.number !== undefined || this.props.number !== undefined) && this.props.number !== prevProps.number) {
        var _this$props$number$to, _this$props$number;

        this.handleValueChange((_this$props$number$to = (_this$props$number = this.props.number) === null || _this$props$number === void 0 ? void 0 : _this$props$number.toString()) !== null && _this$props$number$to !== void 0 ? _this$props$number$to : '');
      }

      if (!this.props.onNumberChange && (prevProps.value !== this.props.value || prevProps.validators !== this.props.validators || prevProps.customValidators !== this.props.customValidators || prevProps.required !== this.props.required)) {
        this.handleValueChange(this.props.value, true, [], this.props);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state$value, _this$state$value2, _this$props$value;

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
        value: (_this$state$value2 = this.state.value) !== null && _this$state$value2 !== void 0 ? _this$state$value2 : '',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGV4dC9UZXh0LnRzeCJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwicmVxdWlyZSIsIlRleHRSYXciLCJwcm9wcyIsImNsZWFyQ2xpY2siLCJpbnB1dFJlZiIsImN1cnJlbnQiLCJuYXRpdmVUZXh0QXJlYVZhbHVlU2V0dGVyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwid2luZG93IiwiSFRNTElucHV0RWxlbWVudCIsInByb3RvdHlwZSIsInNldCIsImNhbGwiLCJldmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImRpc3BhdGNoRXZlbnQiLCJjb250YWluZXJDbGljayIsImUiLCJzdG9wQ2xpY2tQcm9wYWdhdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uS2V5RG93biIsIm51bWJlciIsInVuZGVmaW5lZCIsIm9uTnVtYmVyQ2hhbmdlIiwidmFsdWUiLCJ0b1N0cmluZyIsInJlcyIsImhhbmRsZVZhbHVlQ2hhbmdlIiwic3RhdGUiLCJpc1ZhbGlkIiwiZXJyb3JzIiwiaWdub3JlQ29udGV4dCIsImZvcm1Db250ZXh0IiwidXBkYXRlQ2FsbGJhY2siLCJjb21wb25lbnRJZCIsInZhbGlkYXRpb24iLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJOdW1iZXIiLCJudW0iLCJpc05hTiIsInZhbGlkYXRvcnMiLCJjdXN0b21WYWxpZGF0b3JzIiwicmVxdWlyZWQiLCJjbGVhckJ1dHRvbkhpZGRlbiIsImxlbmd0aCIsImRpc2FibGVkIiwidGl0bGUiLCJ0b29sdGlwIiwiZ2V0VmFsaWRhdGlvbkNsYXNzIiwicmVhZE9ubHkiLCJjbGFzc05hbWUiLCJjb250YWluZXJSZWYiLCJiZWZvcmUiLCJpZCIsInBsYWNlaG9sZGVyIiwiZ2V0RGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJ0eXBlIiwib25DbGljayIsIm1heExlbmd0aCIsInNpemVGcm9tVmFsdWUiLCJhZnRlciIsInNob3dDbGVhckJ1dHRvbiIsInJlbmRlckRlZmF1bHRWYWxpZGF0aW9uIiwibGFiZWwiLCJyZW5kZXJMYWJlbCIsIkJhc2VJbnB1dCIsImRlZmF1bHRQcm9wcyIsImFzc2lnbiIsIlRleHQiLCJ3aXRoVGhlbWVDb250ZXh0Iiwid2l0aEZvcm1Db250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLHNEQUFELENBQXhCOztBQXFCTyxJQUFNQyxPQUFiO0FBQUE7O0FBQUE7O0FBT0UsbUJBQVlDLEtBQVosRUFBOEI7QUFBQTs7QUFBQTs7QUFDNUIsOEJBQU1BLEtBQU47O0FBRDRCLFVBOEh0QkMsVUE5SHNCLEdBOEhULFlBQU07QUFDekIsVUFBSSxNQUFLQyxRQUFMLENBQWNDLE9BQWxCLEVBQTJCO0FBQ3pCLFlBQUlDLHlCQUF5QixHQUFHQyxNQUFNLENBQUNDLHdCQUFQLENBQzlCQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCQyxTQURNLEVBRTlCLE9BRjhCLEVBRzlCQyxHQUhGOztBQUlBLFlBQUlOLHlCQUFKLEVBQStCO0FBQzdCQSxtQ0FBeUIsQ0FBQ08sSUFBMUIsQ0FBK0IsTUFBS1QsUUFBTCxDQUFjQyxPQUE3QyxFQUFzRCxFQUF0RDtBQUVBLGNBQU1TLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVUsT0FBVixFQUFtQjtBQUFFQyxtQkFBTyxFQUFFO0FBQVgsV0FBbkIsQ0FBZDs7QUFDQSxnQkFBS1osUUFBTCxDQUFjQyxPQUFkLENBQXNCWSxhQUF0QixDQUFvQ0gsS0FBcEM7QUFDRDtBQUNGO0FBQ0YsS0EzSTZCOztBQUFBLFVBNkl0QkksY0E3SXNCLEdBNklMLFVBQUNDLENBQUQ7QUFBQSxhQUN2QixNQUFLakIsS0FBTCxDQUFXa0Is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QjtBQVFFLGlCQUFTLEVBQUVKLFVBQVUsQ0FDbkIsd0NBRG1CLEVBRW5CO0FBQ0UsNkNBQW1DK0M7QUFEckMsU0FGbUI7QUFSdkIsdUJBZUUsb0RBQUMseUZBQUQ7QUFBVSxpQkFBUyxFQUFDO0FBQXBCLFFBZkYsQ0E1QkosZUE4Q0U7QUFBTSxpQkFBUyxFQUFDO0FBQWhCLFFBOUNGLGVBK0NFO0FBQU0saUJBQVMsRUFBQztBQUFoQixRQS9DRixFQWdERyxLQUFLc0IsdUJBQUwsRUFoREgsRUFpREcsS0FBS2xFLEtBQUwsQ0FBV21FLEtBQVgsaUJBQ0M7QUFBTyxpQkFBUyxFQUFFLEtBQUtuRSxLQUFMLENBQVdrRCxRQUFYLEdBQXNCLGdCQUF0QixHQUF5QztBQUEzRCxTQUNHLEtBQUtrQixXQUFMLEVBREgsQ0FsREosQ0FSRixDQURGLENBREY7QUFvRUQ7QUFuSUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEVBQTZCQywrREFBN0I7QUFBYXRFLE8sQ0FDR3VFLFksR0FBZWpFLE1BQU0sQ0FBQ2tFLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRiwrREFBUyxDQUFDQyxZQUE1QixFQUEwQztBQUNyRVYsTUFBSSxFQUFFLE1BRCtEO0FBRXJFMUMsc0JBQW9CLEVBQUUsSUFGK0M7QUFHckVnQyxVQUFRLEVBQUU7QUFIMkQsQ0FBMUMsQztBQTBKeEIsSUFBTXNCLElBQUksR0FBR0Msd0ZBQWdCLENBQ2xDQyw2RUFBZSxDQUFZM0UsT0FBWixDQURtQixFQUVsQyxNQUZrQyxDQUE3QjtlQUtReUUsSTtBQUFBOzs7Ozs7Ozs7OzBCQWhLRnpFLE87MEJBMkpBeUUsSSIsImZpbGUiOiIwOGQ2YTIxLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gTWlzY1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICcuLi9pbnB1dEdyb3VwL0lucHV0R3JvdXAnO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VJbnB1dFByb3BzLFxyXG4gIEJhc2VJbnB1dFN0YXRlLFxyXG4gIEJhc2VJbnB1dCxcclxufSBmcm9tICcuLi9iYXNlL2lucHV0L0Jhc2VJbnB1dCc7XHJcbmltcG9ydCB7IHdpdGhGb3JtQ29udGV4dCB9IGZyb20gJy4uL2Zvcm0vd2l0aEZvcm1Db250ZXh0JztcclxuaW1wb3J0IHsgd2l0aFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL3RoZW1lUHJvdmlkZXIvd2l0aFRoZW1lQ29udGV4dCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJztcclxuaW1wb3J0ICogYXMgUGx1c0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL2NvbnRlbnQvc3ZnL3Byb2R1Y3Rpb24vaWNfYWRkXzI0cHguc3ZnJztcclxudmFyIGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRQcm9wcyBleHRlbmRzIEJhc2VJbnB1dFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcclxuICBtYXNrPzogc3RyaW5nO1xyXG4gIHJldmVyc2U/OiBib29sZWFuO1xyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIHN0b3BDbGlja1Byb3BhZ2F0aW9uPzogYm9vbGVhbjtcclxuICBpbnB1dFJlZj86IFJlYWN0LlJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICByZWFkT25seT86IGJvb2xlYW47XHJcbiAgdHlwZT86ICdudW1iZXInIHwgJ3RleHQnO1xyXG4gIG1heExlbmd0aD86IG51bWJlcjtcclxuICBzaG93Q2xlYXJCdXR0b24/OiBib29sZWFuO1xyXG4gIGFmdGVyPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGJlZm9yZT86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBzaXplRnJvbVZhbHVlPzogYm9vbGVhbjtcclxuICBvbk51bWJlckNoYW5nZT86IChudW1iZXI6IG51bWJlciwgaXNWYWxpZDogYm9vbGVhbikgPT4gdm9pZDtcclxuICBudW1iZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFN0YXRlIGV4dGVuZHMgQmFzZUlucHV0U3RhdGUge31cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0UmF3IGV4dGVuZHMgQmFzZUlucHV0PFRleHRQcm9wcywgVGV4dFN0YXRlLCBIVE1MSW5wdXRFbGVtZW50PiB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBCYXNlSW5wdXQuZGVmYXVsdFByb3BzLCB7XHJcbiAgICB0eXBlOiAndGV4dCcsXHJcbiAgICBzdG9wQ2xpY2tQcm9wYWdhdGlvbjogdHJ1ZSxcclxuICAgIHJlYWRPbmx5OiBmYWxzZSxcclxuICB9KSBhcyBUZXh0UHJvcHM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBUZXh0UHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGlmIChwcm9wcy5udW1iZXIgIT09IHVuZGVmaW5lZCB8fCBwcm9wcy5vbk51bWJlckNoYW5nZSkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHByb3BzLm51bWJlcj8udG9TdHJpbmcoKSA/PyAnJztcclxuICAgICAgY29uc3QgcmVzID0gdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSh2YWx1ZSwgdHJ1ZSwgW10sIHByb3BzLCB0cnVlKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgIGlzVmFsaWQ6IHJlcy5pc1ZhbGlkLFxyXG4gICAgICAgIGVycm9yczogcmVzLmVycm9ycyxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgfTtcclxuICAgICAgaWYgKCF0aGlzLnByb3BzLmlnbm9yZUNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmZvcm1Db250ZXh0ICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLmZvcm1Db250ZXh0LnVwZGF0ZUNhbGxiYWNrKHRoaXMuY29tcG9uZW50SWQsIHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgICAgIGlzVmFsaWQ6IHJlcy5pc1ZhbGlkLFxyXG4gICAgICAgICAgICAgIGVycm9yczogcmVzLmVycm9ycyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogVGV4dFByb3BzLCBwcmV2U3RhdGU6IFRleHRTdGF0ZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnByb3BzLm9uTnVtYmVyQ2hhbmdlICYmXHJcbiAgICAgICh0aGlzLnN0YXRlLmlzVmFsaWQgIT09IHByZXZTdGF0ZS5pc1ZhbGlkIHx8XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gcHJldlN0YXRlLnZhbHVlKSAmJlxyXG4gICAgICB0aGlzLnByb3BzLm51bWJlciAhPT0gTnVtYmVyKHRoaXMuc3RhdGUudmFsdWUpXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uTnVtYmVyQ2hhbmdlKHVuZGVmaW5lZCwgdGhpcy5zdGF0ZS5pc1ZhbGlkKTtcclxuICAgICAgfSBlbHNlIGlmICghaXNOYU4obnVtKSkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25OdW1iZXJDaGFuZ2UobnVtLCB0aGlzLnN0YXRlLmlzVmFsaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIChwcmV2UHJvcHMubnVtYmVyICE9PSB1bmRlZmluZWQgfHwgdGhpcy5wcm9wcy5udW1iZXIgIT09IHVuZGVmaW5lZCkgJiZcclxuICAgICAgdGhpcy5wcm9wcy5udW1iZXIgIT09IHByZXZQcm9wcy5udW1iZXJcclxuICAgICkge1xyXG4gICAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKHRoaXMucHJvcHMubnVtYmVyPy50b1N0cmluZygpID8/ICcnKTtcclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgIXRoaXMucHJvcHMub25OdW1iZXJDaGFuZ2UgJiZcclxuICAgICAgKHByZXZQcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSB8fFxyXG4gICAgICAgIHByZXZQcm9wcy52YWxpZGF0b3JzICE9PSB0aGlzLnByb3BzLnZhbGlkYXRvcnMgfHxcclxuICAgICAgICBwcmV2UHJvcHMuY3VzdG9tVmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy5jdXN0b21WYWxpZGF0b3JzIHx8XHJcbiAgICAgICAgcHJldlByb3BzLnJlcXVpcmVkICE9PSB0aGlzLnByb3BzLnJlcXVpcmVkKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UodGhpcy5wcm9wcy52YWx1ZSwgdHJ1ZSwgW10sIHRoaXMucHJvcHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGNsZWFyQnV0dG9uSGlkZGVuID0gIXRoaXMuc3RhdGUudmFsdWU/Lmxlbmd0aCB8fCB0aGlzLnByb3BzLmRpc2FibGVkO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPElucHV0R3JvdXAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9IHRvb2x0aXA9e3RoaXMucHJvcHMudG9vbHRpcH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgaW5wdXRfX2Jhc2UgdGV4dC1pbnB1dCAke3RoaXMuZ2V0VmFsaWRhdGlvbkNsYXNzKCl9IFxyXG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5wcm9wcy5yZWFkT25seSA/ICd0ZXh0LWlucHV0LS1yZWFkT25seScgOiAnJ30gJHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY29udGFpbmVyQ2xpY2t9XHJcbiAgICAgICAgICByZWY9e3RoaXMuY29udGFpbmVyUmVmfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1pbnB1dF9fdGV4dFdyYXBwZXJcIj5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuYmVmb3JlfVxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgcmVmPXt0aGlzLmlucHV0UmVmfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLmdldERpc2FibGVkKCl9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RoaXMucHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnZhbHVlID8gJ2ZpbGxlZCcgOiAnJ31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWUgPz8gJyd9XHJcbiAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cclxuICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5wcm9wcy5yZWFkT25seX1cclxuICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxyXG4gICAgICAgICAgICAgIHR5cGU9e3RoaXMucHJvcHMudHlwZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPXt0aGlzLnByb3BzLm1heExlbmd0aH1cclxuICAgICAgICAgICAgICBzaXplPXtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2l6ZUZyb21WYWx1ZVxyXG4gICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMudmFsdWU/Lmxlbmd0aCB8fCAxXHJcbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5hZnRlcn1cclxuICAgICAgICAgICAgeyF0aGlzLnByb3BzLnJlYWRPbmx5ICYmIHRoaXMucHJvcHMuc2hvd0NsZWFyQnV0dG9uICYmIChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctY2xlYXItYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NsZWFyQnV0dG9uSGlkZGVufVxyXG4gICAgICAgICAgICAgICAgdW5vYnRydXNpdmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBub1NoYWRvdz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xlYXJDbGlja31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgJ3RleHQtaW5wdXRfX2NsZWFyQnV0dG9uIGxpbmUtaGVpZ2h0LS0wJyxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICd0ZXh0LWlucHV0X19jbGVhckJ1dHRvbi0taGlkZGVuJzogY2xlYXJCdXR0b25IaWRkZW4sXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFBsdXNJY29uIGNsYXNzTmFtZT1cInRyYW5zZm9ybS1yb3RhdGUtLTQ1IGxpbmUtaGVpZ2h0LS0wXCIgLz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFyXCIgLz5cclxuICAgICAgICAgICAge3RoaXMucmVuZGVyRGVmYXVsdFZhbGlkYXRpb24oKX1cclxuICAgICAgICAgICAge3RoaXMucHJvcHMubGFiZWwgJiYgKFxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3RoaXMucHJvcHMucmVhZE9ubHkgPyAnbGFiZWwtLWZvY3VzZWQnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyTGFiZWwoKX1cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNsZWFyQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5pbnB1dFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHZhciBuYXRpdmVUZXh0QXJlYVZhbHVlU2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihcclxuICAgICAgICB3aW5kb3cuSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsXHJcbiAgICAgICAgJ3ZhbHVlJ1xyXG4gICAgICApLnNldDtcclxuICAgICAgaWYgKG5hdGl2ZVRleHRBcmVhVmFsdWVTZXR0ZXIpIHtcclxuICAgICAgICBuYXRpdmVUZXh0QXJlYVZhbHVlU2V0dGVyLmNhbGwodGhpcy5pbnB1dFJlZi5jdXJyZW50LCAnJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdpbnB1dCcsIHsgYnViYmxlczogdHJ1ZSB9KTtcclxuICAgICAgICB0aGlzLmlucHV0UmVmLmN1cnJlbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGNvbnRhaW5lckNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5wcm9wcy5zdG9wQ2xpY2tQcm9wYWdhdGlvbiAmJiBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICBwcml2YXRlIG9uS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5wcm9wcy5vbktleURvd24gJiYgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0ID0gd2l0aFRoZW1lQ29udGV4dDxUZXh0UHJvcHMsIEluc3RhbmNlVHlwZTx0eXBlb2YgVGV4dFJhdz4+KFxyXG4gIHdpdGhGb3JtQ29udGV4dDxUZXh0UHJvcHM+KFRleHRSYXcpLFxyXG4gICd0ZXh0J1xyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==