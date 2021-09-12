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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGV4dC9UZXh0LnRzeCJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwicmVxdWlyZSIsIlRleHRSYXciLCJwcm9wcyIsImNsZWFyQ2xpY2siLCJpbnB1dFJlZiIsImN1cnJlbnQiLCJuYXRpdmVUZXh0QXJlYVZhbHVlU2V0dGVyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwid2luZG93IiwiSFRNTElucHV0RWxlbWVudCIsInByb3RvdHlwZSIsInNldCIsImNhbGwiLCJldmVudCIsIkV2ZW50IiwiYnViYmxlcyIsImRpc3BhdGNoRXZlbnQiLCJjb250YWluZXJDbGljayIsImUiLCJzdG9wQ2xpY2tQcm9wYWdhdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsIm9uS2V5RG93biIsIm51bWJlciIsInVuZGVmaW5lZCIsInZhbHVlIiwidG9TdHJpbmciLCJyZXMiLCJoYW5kbGVWYWx1ZUNoYW5nZSIsInN0YXRlIiwiaXNWYWxpZCIsImVycm9ycyIsImlnbm9yZUNvbnRleHQiLCJmb3JtQ29udGV4dCIsInVwZGF0ZUNhbGxiYWNrIiwiY29tcG9uZW50SWQiLCJ2YWxpZGF0aW9uIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwib25OdW1iZXJDaGFuZ2UiLCJudW0iLCJOdW1iZXIiLCJpc05hTiIsImNsZWFyQnV0dG9uSGlkZGVuIiwibGVuZ3RoIiwiZGlzYWJsZWQiLCJ0aXRsZSIsInRvb2x0aXAiLCJnZXRWYWxpZGF0aW9uQ2xhc3MiLCJyZWFkT25seSIsImNsYXNzTmFtZSIsImNvbnRhaW5lclJlZiIsImJlZm9yZSIsImlkIiwicGxhY2Vob2xkZXIiLCJnZXREaXNhYmxlZCIsInJlcXVpcmVkIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImhhbmRsZUZvY3VzIiwidHlwZSIsIm9uQ2xpY2siLCJtYXhMZW5ndGgiLCJzaXplRnJvbVZhbHVlIiwiYWZ0ZXIiLCJzaG93Q2xlYXJCdXR0b24iLCJyZW5kZXJEZWZhdWx0VmFsaWRhdGlvbiIsImxhYmVsIiwicmVuZGVyTGFiZWwiLCJCYXNlSW5wdXQiLCJkZWZhdWx0UHJvcHMiLCJhc3NpZ24iLCJUZXh0Iiwid2l0aFRoZW1lQ29udGV4dCIsIndpdGhGb3JtQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsc0RBQUQsQ0FBeEI7O0FBcUJPLElBQU1DLE9BQWI7QUFBQTs7QUFBQTs7QUFPRSxtQkFBWUMsS0FBWixFQUE4QjtBQUFBOztBQUFBOztBQUM1Qiw4QkFBTUEsS0FBTjs7QUFENEIsVUFzSHRCQyxVQXRIc0IsR0FzSFQsWUFBTTtBQUN6QixVQUFJLE1BQUtDLFFBQUwsQ0FBY0MsT0FBbEIsRUFBMkI7QUFDekIsWUFBSUMseUJBQXlCLEdBQUdDLE1BQU0sQ0FBQ0Msd0JBQVAsQ0FDOUJDLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0JDLFNBRE0sRUFFOUIsT0FGOEIsRUFHOUJDLEdBSEY7O0FBSUEsWUFBSU4seUJBQUosRUFBK0I7QUFDN0JBLG1DQUF5QixDQUFDTyxJQUExQixDQUErQixNQUFLVCxRQUFMLENBQWNDLE9BQTdDLEVBQXNELEVBQXREO0FBRUEsY0FBTVMsS0FBSyxHQUFHLElBQUlDLEtBQUosQ0FBVSxPQUFWLEVBQW1CO0FBQUVDLG1CQUFPLEVBQUU7QUFBWCxXQUFuQixDQUFkOztBQUNBLGdCQUFLWixRQUFMLENBQWNDLE9BQWQsQ0FBc0JZLGFBQXRCLENBQW9DSCxLQUFwQztBQUNEO0FBQ0Y7QUFDRixLQW5JNkI7O0FBQUEsVUFxSXRCSSxjQXJJc0IsR0FxSUwsVUFBQ0MsQ0FBRDtBQUFBLGFBQ3ZCLE1BQUtqQixLQUFMLENBQVdrQixvQkFBWCxJQUFtQ0QsQ0FBQyxDQUFDRSxlQUFG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LE1BQVAsQ0FBYyxFQUFkLEVBQWtCRiwrREFBUyxDQUFDQyxZQUE1QixFQUEwQztBQUNyRVYsTUFBSSxFQUFFLE1BRCtEO0FBRXJFeEMsc0JBQW9CLEVBQUUsSUFGK0M7QUFHckU2QixVQUFRLEVBQUU7QUFIMkQsQ0FBMUMsQztBQWtKeEIsSUFBTXVCLElBQUksR0FBR0Msd0ZBQWdCLENBQ2xDQyw2RUFBZSxDQUFZekUsT0FBWixDQURtQixFQUVsQyxNQUZrQyxDQUE3QjtlQUtRdUUsSTtBQUFBOzs7Ozs7Ozs7OzBCQXhKRnZFLE87MEJBbUpBdUUsSSIsImZpbGUiOiJiOWRjNjUxLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gTWlzY1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICcuLi9pbnB1dEdyb3VwL0lucHV0R3JvdXAnO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VJbnB1dFByb3BzLFxyXG4gIEJhc2VJbnB1dFN0YXRlLFxyXG4gIEJhc2VJbnB1dCxcclxufSBmcm9tICcuLi9iYXNlL2lucHV0L0Jhc2VJbnB1dCc7XHJcbmltcG9ydCB7IHdpdGhGb3JtQ29udGV4dCB9IGZyb20gJy4uL2Zvcm0vd2l0aEZvcm1Db250ZXh0JztcclxuaW1wb3J0IHsgd2l0aFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL3RoZW1lUHJvdmlkZXIvd2l0aFRoZW1lQ29udGV4dCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJztcclxuaW1wb3J0ICogYXMgUGx1c0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL2NvbnRlbnQvc3ZnL3Byb2R1Y3Rpb24vaWNfYWRkXzI0cHguc3ZnJztcclxudmFyIGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRQcm9wcyBleHRlbmRzIEJhc2VJbnB1dFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcclxuICBtYXNrPzogc3RyaW5nO1xyXG4gIHJldmVyc2U/OiBib29sZWFuO1xyXG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIHN0b3BDbGlja1Byb3BhZ2F0aW9uPzogYm9vbGVhbjtcclxuICBpbnB1dFJlZj86IFJlYWN0LlJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICByZWFkT25seT86IGJvb2xlYW47XHJcbiAgdHlwZT86ICdudW1iZXInIHwgJ3RleHQnO1xyXG4gIG1heExlbmd0aD86IG51bWJlcjtcclxuICBzaG93Q2xlYXJCdXR0b24/OiBib29sZWFuO1xyXG4gIGFmdGVyPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGJlZm9yZT86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBzaXplRnJvbVZhbHVlPzogYm9vbGVhbjtcclxuICBvbk51bWJlckNoYW5nZT86IChudW1iZXI6IG51bWJlciwgaXNWYWxpZDogYm9vbGVhbikgPT4gdm9pZDtcclxuICBudW1iZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFN0YXRlIGV4dGVuZHMgQmFzZUlucHV0U3RhdGUge31cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0UmF3IGV4dGVuZHMgQmFzZUlucHV0PFRleHRQcm9wcywgVGV4dFN0YXRlLCBIVE1MSW5wdXRFbGVtZW50PiB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBCYXNlSW5wdXQuZGVmYXVsdFByb3BzLCB7XHJcbiAgICB0eXBlOiAndGV4dCcsXHJcbiAgICBzdG9wQ2xpY2tQcm9wYWdhdGlvbjogdHJ1ZSxcclxuICAgIHJlYWRPbmx5OiBmYWxzZSxcclxuICB9KSBhcyBUZXh0UHJvcHM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBUZXh0UHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGlmIChwcm9wcy5udW1iZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHByb3BzLm51bWJlcj8udG9TdHJpbmcoKSA/PyAnJztcclxuICAgICAgY29uc3QgcmVzID0gdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSh2YWx1ZSwgdHJ1ZSwgW10sIHByb3BzLCB0cnVlKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgIGlzVmFsaWQ6IHJlcy5pc1ZhbGlkLFxyXG4gICAgICAgIGVycm9yczogcmVzLmVycm9ycyxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgfTtcclxuICAgICAgaWYgKCF0aGlzLnByb3BzLmlnbm9yZUNvbnRleHQpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmZvcm1Db250ZXh0ICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLmZvcm1Db250ZXh0LnVwZGF0ZUNhbGxiYWNrKHRoaXMuY29tcG9uZW50SWQsIHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgICAgIGlzVmFsaWQ6IHJlcy5pc1ZhbGlkLFxyXG4gICAgICAgICAgICAgIGVycm9yczogcmVzLmVycm9ycyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogVGV4dFByb3BzLCBwcmV2U3RhdGU6IFRleHRTdGF0ZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnByb3BzLm9uTnVtYmVyQ2hhbmdlICYmXHJcbiAgICAgICh0aGlzLnN0YXRlLmlzVmFsaWQgIT09IHByZXZTdGF0ZS5pc1ZhbGlkIHx8XHJcbiAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gcHJldlN0YXRlLnZhbHVlKVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IG51bSA9IE51bWJlcih0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgaWYgKCFpc05hTihudW0pKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbk51bWJlckNoYW5nZShudW0sIHRoaXMuc3RhdGUuaXNWYWxpZCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbk51bWJlckNoYW5nZSh1bmRlZmluZWQsIHRoaXMuc3RhdGUuaXNWYWxpZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgKHByZXZQcm9wcy5udW1iZXIgIT09IHVuZGVmaW5lZCB8fCB0aGlzLnByb3BzLm51bWJlciAhPT0gdW5kZWZpbmVkKSAmJlxyXG4gICAgICB0aGlzLnByb3BzLm51bWJlciAhPT0gcHJldlByb3BzLm51bWJlclxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UodGhpcy5wcm9wcy5udW1iZXI/LnRvU3RyaW5nKCkgPz8gJycpO1xyXG4gICAgfVxyXG4gICAgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjbGVhckJ1dHRvbkhpZGRlbiA9ICF0aGlzLnN0YXRlLnZhbHVlPy5sZW5ndGggfHwgdGhpcy5wcm9wcy5kaXNhYmxlZDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxJbnB1dEdyb3VwIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSB0b29sdGlwPXt0aGlzLnByb3BzLnRvb2x0aXB9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0X19iYXNlIHRleHQtaW5wdXQgJHt0aGlzLmdldFZhbGlkYXRpb25DbGFzcygpfSBcclxuICAgICAgICAgICAgICAgICAgICAke3RoaXMucHJvcHMucmVhZE9ubHkgPyAndGV4dC1pbnB1dC0tcmVhZE9ubHknIDogJyd9ICR7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJ1xyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNvbnRhaW5lckNsaWNrfVxyXG4gICAgICAgICAgcmVmPXt0aGlzLmNvbnRhaW5lclJlZn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtaW5wdXRfX3RleHRXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmJlZm9yZX1cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIHJlZj17dGhpcy5pbnB1dFJlZn1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5nZXREaXNhYmxlZCgpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS52YWx1ZSA/ICdmaWxsZWQnIDogJyd9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XHJcbiAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZE9ubHl9XHJcbiAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn1cclxuICAgICAgICAgICAgICB0eXBlPXt0aGlzLnByb3BzLnR5cGV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgICAgICAgIG1heExlbmd0aD17dGhpcy5wcm9wcy5tYXhMZW5ndGh9XHJcbiAgICAgICAgICAgICAgc2l6ZT17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNpemVGcm9tVmFsdWVcclxuICAgICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLnZhbHVlPy5sZW5ndGggfHwgMVxyXG4gICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuYWZ0ZXJ9XHJcbiAgICAgICAgICAgIHshdGhpcy5wcm9wcy5yZWFkT25seSAmJiB0aGlzLnByb3BzLnNob3dDbGVhckJ1dHRvbiAmJiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLWNsZWFyLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjbGVhckJ1dHRvbkhpZGRlbn1cclxuICAgICAgICAgICAgICAgIHVub2J0cnVzaXZlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgbm9TaGFkb3c9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNsZWFyQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICd0ZXh0LWlucHV0X19jbGVhckJ1dHRvbiBsaW5lLWhlaWdodC0tMCcsXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAndGV4dC1pbnB1dF9fY2xlYXJCdXR0b24tLWhpZGRlbic6IGNsZWFyQnV0dG9uSGlkZGVuLFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQbHVzSWNvbiBjbGFzc05hbWU9XCJ0cmFuc2Zvcm0tcm90YXRlLS00NSBsaW5lLWhlaWdodC0tMFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhclwiIC8+XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckRlZmF1bHRWYWxpZGF0aW9uKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsICYmIChcclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnJlYWRPbmx5ID8gJ2xhYmVsLS1mb2N1c2VkJyA6ICcnfT5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckxhYmVsKCl9XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhckNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRSZWYuY3VycmVudCkge1xyXG4gICAgICB2YXIgbmF0aXZlVGV4dEFyZWFWYWx1ZVNldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoXHJcbiAgICAgICAgd2luZG93LkhUTUxJbnB1dEVsZW1lbnQucHJvdG90eXBlLFxyXG4gICAgICAgICd2YWx1ZSdcclxuICAgICAgKS5zZXQ7XHJcbiAgICAgIGlmIChuYXRpdmVUZXh0QXJlYVZhbHVlU2V0dGVyKSB7XHJcbiAgICAgICAgbmF0aXZlVGV4dEFyZWFWYWx1ZVNldHRlci5jYWxsKHRoaXMuaW5wdXRSZWYuY3VycmVudCwgJycpO1xyXG5cclxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnaW5wdXQnLCB7IGJ1YmJsZXM6IHRydWUgfSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dFJlZi5jdXJyZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBjb250YWluZXJDbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT5cclxuICAgIHRoaXMucHJvcHMuc3RvcENsaWNrUHJvcGFnYXRpb24gJiYgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgcHJpdmF0ZSBvbktleURvd24gPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgIHRoaXMucHJvcHMub25LZXlEb3duICYmIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGV4dCA9IHdpdGhUaGVtZUNvbnRleHQ8VGV4dFByb3BzLCBJbnN0YW5jZVR5cGU8dHlwZW9mIFRleHRSYXc+PihcclxuICB3aXRoRm9ybUNvbnRleHQ8VGV4dFByb3BzPihUZXh0UmF3KSxcclxuICAndGV4dCdcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=