webpackHotUpdate("main",{

/***/ "./src/lib/components/select/Select.tsx":
/*!**********************************************!*\
  !*** ./src/lib/components/select/Select.tsx ***!
  \**********************************************/
/*! exports provided: SelectRaw, Select, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectRaw", function() { return SelectRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inputGroup/InputGroup */ "./src/lib/components/inputGroup/InputGroup.tsx");
/* harmony import */ var material_design_icons_content_svg_production_ic_add_circle_outline_24px_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg */ "./node_modules/material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg");
/* harmony import */ var material_design_icons_content_svg_production_ic_add_circle_outline_24px_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_content_svg_production_ic_add_circle_outline_24px_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/input/BaseInput */ "./src/lib/components/base/input/BaseInput.tsx");
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/Button */ "./src/lib/components/button/Button.tsx");
/* harmony import */ var _form_withFormContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form/withFormContext */ "./src/lib/components/form/withFormContext.tsx");
/* harmony import */ var _themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../themeProvider/withThemeContext */ "./src/lib/components/themeProvider/withThemeContext.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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







var SelectRaw = /*#__PURE__*/function (_BaseInput) {
  _inherits(SelectRaw, _BaseInput);

  var _super = _createSuper(SelectRaw);

  function SelectRaw(props) {
    var _this;

    _classCallCheck(this, SelectRaw);

    _this = _super.call(this, props);

    _this.removeItemClick = function (item) {
      return function () {
        var newValues = _this.props.selectedValues.filter(function (sv) {
          return sv.value !== item.value;
        });

        _this.handleValid(newValues);

        _this.props.onSelectedValuesChange && _this.props.onSelectedValuesChange(newValues);
      };
    };

    var val = !props.value ? props.defaultEmpty ? '' : props.values && props.values.length > 0 ? props.values[0] : '' : props.value;
    _this.state = Object.assign(_this.state, {
      value: val
    });
    _this.handleChangeCustom = _this.handleChangeCustom.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SelectRaw, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.multiple && this.handleValid(this.props.selectedValues);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (oldProps.value !== this.props.value || oldProps.validators !== this.props.validators || oldProps.customValidators !== this.props.customValidators || oldProps.required !== this.props.required || oldProps.selectedValues !== this.props.selectedValues) {
        if (this.props.multiple) {
          this.handleValid(this.props.selectedValues);
        } else {
          this.handleValueChange(this.props.value, true, [], this.props);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var finalValues = this.props.multiple ? this.props.values.filter(function (item) {
        return _this2.props.selectedValues.findIndex(function (t) {
          return t.value === item.value;
        }) < 0;
      }) : this.props.values;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        title: this.props.title,
        tooltip: this.props.tooltip
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'input__base select-input ' + this.getValidationClass() + ' ' + (this.props.className ? this.props.className : '') + ' ' + (this.props.readOnly ? 'readonly' : '') + ' ' + (this.props.multiple ? 'multiple' : ''),
        ref: this.containerRef
      }, this.renderSelectedValues(), finalValues.length > 0 && (this.props.multiple && !this.props.readOnly || !this.props.multiple) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "select-input__select__wrapper"
      }, !this.props.multiple && !this.props.readOnly || this.props.multiple ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", _extends({}, this.props.id && {
        id: this.props.id
      }, {
        ref: this.inputRef,
        disabled: this.getDisabled(),
        required: this.props.required,
        onChange: this.handleChangeCustom,
        value: this.state.value,
        className: 'select-input__select ' + (this.state.value !== '' || this.props.selectedValues && this.props.selectedValues.length > 0 ? 'filled' : ''),
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        tabIndex: 0
      }), this.props.defaultEmpty && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
        key: -1,
        disabled: true,
        value: "",
        style: {
          display: 'none'
        }
      }), finalValues.map(function (value, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
          key: index,
          value: value.value
        }, value.label ? value.label : value.value);
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: 'select-input__select ' + (this.state.value !== '' || this.props.selectedValues && this.props.selectedValues.length > 0 ? 'filled' : '')
      }, this.renderReadonly()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "highlight"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "bar"
      }), this.renderDefaultValidation(), this.props.label && finalValues.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", null, this.renderLabel()))));
    }
  }, {
    key: "handleValueChange",
    value: function handleValueChange(value) {
      var isValid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var errors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.props;
      var initializing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (!this.props.multiple) {
        return _get(_getPrototypeOf(SelectRaw.prototype), "handleValueChange", this).call(this, value, isValid, errors, props, initializing);
      } else {
        this.handleValid(this.props.selectedValues);
      }

      return {
        isValid: true,
        errors: []
      };
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(e) {
      this.props.onBlur && this.props.onBlur();
      var state = {
        focused: false
      };

      if (!this.state.touched && this.props.touchOn === 'blur') {
        state = Object.assign(state, {
          touched: true
        });

        if (!this.props.multiple) {
          this.handleValueChange(this.state.value);
        } else {
          this.handleValid(this.props.selectedValues);
        }
      }

      this.setState(state);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      this.props.onFocus && this.props.onFocus(e);
      var state = {
        focused: true
      };

      if (!this.state.touched && this.props.touchOn === 'focus') {
        state = Object.assign(state, {
          touched: true
        });

        if (!this.props.multiple) {
          this.handleValueChange(this.state.value);
        } else {
          this.handleValid(this.props.selectedValues);
        }
      }

      this.setState(state);
    }
  }, {
    key: "handleChangeCustom",
    value: function handleChangeCustom(event) {
      if (this.props.multiple) {
        var value = event.target.value;
        var val = this.props.values.filter(function (item) {
          return item.value === value;
        })[0];

        if (!val) {
          if (!isNaN(Number(value))) {
            var valNumber = Number(value);
            val = this.props.values.filter(function (item) {
              return item.value === valNumber;
            })[0];
          }
        }

        var _newValues = this.props.selectedValues.concat(val);

        if (val) {
          this.props.onSelectedValuesChange && this.props.onSelectedValuesChange(_newValues);
          this.handleValid(_newValues);
          this.setState({
            value: ''
          });
        }
      } else {
        this.handleChange(event);
      }
    }
  }, {
    key: "handleValid",
    value: function handleValid(newValues) {
      var _this3 = this;

      var isValid = true;
      var errors = [];

      if (this.props.required) {
        if (newValues.length === 0) {
          isValid = false;
          errors.push(this.getTranslations(_base_input_BaseInput__WEBPACK_IMPORTED_MODULE_3__["defaultBaseTranslations"]).required);
        }
      }

      if (this.props.customValidators) {
        this.props.customValidators.forEach(function (customValidator) {
          var _this3$state;

          var validInner = false;
          validInner = customValidator.Validate((_this3$state = _this3.state) === null || _this3$state === void 0 ? void 0 : _this3$state.value, _this3.props.required, function (error) {
            return errors.push(error);
          });

          if (isValid && !validInner) {
            isValid = validInner;
          }
        });
      }

      if (isValid) {
        this.setValid();
      } else {
        this.setInvalid(errors);
      }
    }
  }, {
    key: "renderReadonly",
    value: function renderReadonly() {
      var _this4 = this;

      var value = this.props.values.filter(function (item) {
        return item.value.toString() === _this4.state.value;
      })[0];
      return value ? value.label ? value.label : value.value : '';
    }
  }, {
    key: "renderSelectedValues",
    value: function renderSelectedValues() {
      var _this5 = this;

      return this.props.multiple ? this.props.selectedValues.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "select-input__selectedValue__wrapper"
      }, this.props.selectedValues.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "select-input__selectedValue",
          key: index
        }, item.label ? item.label : item.value, !_this5.props.readOnly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          disabled: item.forceSelected,
          circular: true,
          blank: true,
          onClick: _this5.removeItemClick(item),
          className: "ml-1 transform-rotate--45 line-height--0 p-0"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](material_design_icons_content_svg_production_ic_add_circle_outline_24px_svg__WEBPACK_IMPORTED_MODULE_2__, null)));
      })) : this.props.readOnly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "select-input__selectedValue__wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "select-input__selectedValue"
      }, this.props.readonlyEmptyPlaceholder)) : null;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SelectRaw;
}(_base_input_BaseInput__WEBPACK_IMPORTED_MODULE_3__["BaseInput"]);
SelectRaw.defaultProps = Object.assign({}, _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_3__["BaseInput"].defaultProps, {
  defaultEmpty: true,
  multiple: false,
  readOnly: false,
  readonlyEmptyPlaceholder: 'N/A'
});
var Select = Object(_themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_6__["withThemeContext"])(Object(_form_withFormContext__WEBPACK_IMPORTED_MODULE_5__["withFormContext"])(SelectRaw), 'select');
var _default = Select;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SelectRaw, "SelectRaw", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\select\\Select.tsx");
  reactHotLoader.register(Select, "Select", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\select\\Select.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\select\\Select.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvc2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsiU2VsZWN0UmF3IiwicHJvcHMiLCJyZW1vdmVJdGVtQ2xpY2siLCJpdGVtIiwibmV3VmFsdWVzIiwic2VsZWN0ZWRWYWx1ZXMiLCJmaWx0ZXIiLCJzdiIsInZhbHVlIiwiaGFuZGxlVmFsaWQiLCJvblNlbGVjdGVkVmFsdWVzQ2hhbmdlIiwidmFsIiwiZGVmYXVsdEVtcHR5IiwidmFsdWVzIiwibGVuZ3RoIiwic3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJoYW5kbGVDaGFuZ2VDdXN0b20iLCJiaW5kIiwibXVsdGlwbGUiLCJvbGRQcm9wcyIsInZhbGlkYXRvcnMiLCJjdXN0b21WYWxpZGF0b3JzIiwicmVxdWlyZWQiLCJoYW5kbGVWYWx1ZUNoYW5nZSIsImZpbmFsVmFsdWVzIiwiZmluZEluZGV4IiwidCIsInRpdGxlIiwidG9vbHRpcCIsImdldFZhbGlkYXRpb25DbGFzcyIsImNsYXNzTmFtZSIsInJlYWRPbmx5IiwiY29udGFpbmVyUmVmIiwicmVuZGVyU2VsZWN0ZWRWYWx1ZXMiLCJpZCIsImlucHV0UmVmIiwiZ2V0RGlzYWJsZWQiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJkaXNwbGF5IiwibWFwIiwiaW5kZXgiLCJsYWJlbCIsInJlbmRlclJlYWRvbmx5IiwicmVuZGVyRGVmYXVsdFZhbGlkYXRpb24iLCJyZW5kZXJMYWJlbCIsImlzVmFsaWQiLCJlcnJvcnMiLCJpbml0aWFsaXppbmciLCJlIiwib25CbHVyIiwiZm9jdXNlZCIsInRvdWNoZWQiLCJ0b3VjaE9uIiwic2V0U3RhdGUiLCJvbkZvY3VzIiwiZXZlbnQiLCJ0YXJnZXQiLCJpc05hTiIsIk51bWJlciIsInZhbE51bWJlciIsImNvbmNhdCIsImhhbmRsZUNoYW5nZSIsInB1c2giLCJnZXRUcmFuc2xhdGlvbnMiLCJkZWZhdWx0QmFzZVRyYW5zbGF0aW9ucyIsImZvckVhY2giLCJjdXN0b21WYWxpZGF0b3IiLCJ2YWxpZElubmVyIiwiVmFsaWRhdGUiLCJlcnJvciIsInNldFZhbGlkIiwic2V0SW52YWxpZCIsInRvU3RyaW5nIiwiZm9yY2VTZWxlY3RlZCIsInJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlciIsIkJhc2VJbnB1dCIsImRlZmF1bHRQcm9wcyIsIlNlbGVjdCIsIndpdGhUaGVtZUNvbnRleHQiLCJ3aXRoRm9ybUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFxQk8sSUFBTUEsU0FBYjtBQUFBOztBQUFBOztBQVlFLHFCQUFZQyxLQUFaLEVBQWdDO0FBQUE7O0FBQUE7O0FBQzlCLDhCQUFNQSxLQUFOOztBQUQ4QixVQTJReEJDLGVBM1F3QixHQTJRTixVQUFDQyxJQUFEO0FBQUEsYUFBdUIsWUFBTTtBQUNyRCxZQUFNQyxTQUFTLEdBQUcsTUFBS0gsS0FBTCxDQUFXSSxjQUFYLENBQTBCQyxNQUExQixDQUNoQixVQUFBQyxFQUFFO0FBQUEsaUJBQUlBLEVBQUUsQ0FBQ0MsS0FBSCxLQUFhTCxJQUFJLENBQUNLLEtBQXRCO0FBQUEsU0FEYyxDQUFsQjs7QUFHQSxjQUFLQyxXQUFMLENBQWlCTCxTQUFqQjs7QUFDQSxjQUFLSCxLQUFMLENBQVdTLHNCQUFYLElBQ0UsTUFBS1QsS0FBTCxDQUFXUyxzQkFBWCxDQUFrQ04sU0FBbEMsQ0FERjtBQUVELE9BUHlCO0FBQUEsS0EzUU07O0FBRTlCLFFBQU1PLEdBQUcsR0FBRyxDQUFDVixLQUFLLENBQUNPLEtBQVAsR0FDUlAsS0FBSyxDQUFDVyxZQUFOLEdBQ0UsRUFERixHQUVFWCxLQUFLLENBQUNZLE1BQU4sSUFBZ0JaLEtBQUssQ0FBQ1ksTUFBTixDQUFhQyxNQUFiLEdBQXNCLENBQXRDLEdBQ0FiLEtBQUssQ0FBQ1ksTUFBTixDQUFhLENBQWIs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b0JFLEtBQUtGLEtBQUwsQ0FBV2dDLFFBQVgsaUJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRyxLQUFLaEMsS0FBTCxDQUFXNEUsd0JBRGQsQ0FERixDQXRCQyxHQTZCSCxJQTdCSjtBQThCRDtBQXJSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsRUFBK0JDLCtEQUEvQjtBQUFhOUUsUyxDQUtHK0UsWSxHQUFlL0QsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQjZELCtEQUFTLENBQUNDLFlBQTVCLEVBQTBDO0FBQ3JFbkUsY0FBWSxFQUFFLElBRHVEO0FBRXJFUSxVQUFRLEVBQUUsS0FGMkQ7QUFHckVhLFVBQVEsRUFBRSxLQUgyRDtBQUlyRTRDLDBCQUF3QixFQUFFO0FBSjJDLENBQTFDLEM7QUE0UnhCLElBQU1HLE1BQU0sR0FBR0Msd0ZBQWdCLENBR3BDQyw2RUFBZSxDQUFjbEYsU0FBZCxDQUhxQixFQUdLLFFBSEwsQ0FBL0I7ZUFLUWdGLE07QUFBQTs7Ozs7Ozs7OzswQkF0U0ZoRixTOzBCQWlTQWdGLE0iLCJmaWxlIjoiMWYwN2UwNS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWJzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIE1pc2NcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSAnLi4vaW5wdXRHcm91cC9JbnB1dEdyb3VwJztcclxuaW1wb3J0ICogYXMgUGx1c0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL2NvbnRlbnQvc3ZnL3Byb2R1Y3Rpb24vaWNfYWRkX2NpcmNsZV9vdXRsaW5lXzI0cHguc3ZnJztcclxuaW1wb3J0IHtcclxuICBCYXNlSW5wdXRQcm9wcyxcclxuICBCYXNlSW5wdXRTdGF0ZSxcclxuICBCYXNlSW5wdXQsXHJcbiAgVmFsaWRhdGlvbkVycm9yLFxyXG4gIGRlZmF1bHRCYXNlVHJhbnNsYXRpb25zLFxyXG59IGZyb20gJy4uL2Jhc2UvaW5wdXQvQmFzZUlucHV0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCB7IHdpdGhGb3JtQ29udGV4dCB9IGZyb20gJy4uL2Zvcm0vd2l0aEZvcm1Db250ZXh0JztcclxuaW1wb3J0IHsgd2l0aFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL3RoZW1lUHJvdmlkZXIvd2l0aFRoZW1lQ29udGV4dCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdFZhbHVlIHtcclxuICB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG4gIGZvcmNlU2VsZWN0ZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdFByb3BzIGV4dGVuZHMgQmFzZUlucHV0UHJvcHM8SFRNTFNlbGVjdEVsZW1lbnQ+IHtcclxuICB2YWx1ZXM/OiBTZWxlY3RWYWx1ZVtdO1xyXG4gIGRlZmF1bHRFbXB0eT86IGJvb2xlYW47XHJcbiAgbXVsdGlwbGU/OiBib29sZWFuO1xyXG4gIHNlbGVjdGVkVmFsdWVzPzogU2VsZWN0VmFsdWVbXTtcclxuICBvblNlbGVjdGVkVmFsdWVzQ2hhbmdlPzogKG5ld1ZhbHVlczogU2VsZWN0VmFsdWVbXSkgPT4gdm9pZDtcclxuICBpbnB1dFJlZj86IChpbnB1dDogSFRNTFNlbGVjdEVsZW1lbnQpID0+IHZvaWQ7XHJcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xyXG4gIHJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RTdGF0ZSBleHRlbmRzIEJhc2VJbnB1dFN0YXRlIHt9XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0UmF3IGV4dGVuZHMgQmFzZUlucHV0PFxyXG4gIFNlbGVjdFByb3BzLFxyXG4gIFNlbGVjdFN0YXRlLFxyXG4gIEhUTUxTZWxlY3RFbGVtZW50XHJcbj4ge1xyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgQmFzZUlucHV0LmRlZmF1bHRQcm9wcywge1xyXG4gICAgZGVmYXVsdEVtcHR5OiB0cnVlLFxyXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxyXG4gICAgcmVhZE9ubHk6IGZhbHNlLFxyXG4gICAgcmVhZG9ubHlFbXB0eVBsYWNlaG9sZGVyOiAnTi9BJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFNlbGVjdFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICBjb25zdCB2YWwgPSAhcHJvcHMudmFsdWVcclxuICAgICAgPyBwcm9wcy5kZWZhdWx0RW1wdHlcclxuICAgICAgICA/ICcnXHJcbiAgICAgICAgOiBwcm9wcy52YWx1ZXMgJiYgcHJvcHMudmFsdWVzLmxlbmd0aCA+IDBcclxuICAgICAgICA/IHByb3BzLnZhbHVlc1swXVxyXG4gICAgICAgIDogJydcclxuICAgICAgOiBwcm9wcy52YWx1ZTtcclxuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHsgdmFsdWU6IHZhbCB9KTtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlQ3VzdG9tID0gdGhpcy5oYW5kbGVDaGFuZ2VDdXN0b20uYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMubXVsdGlwbGUgJiYgdGhpcy5oYW5kbGVWYWxpZCh0aGlzLnByb3BzLnNlbGVjdGVkVmFsdWVzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUob2xkUHJvcHM6IFNlbGVjdFByb3BzKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG9sZFByb3BzLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlIHx8XHJcbiAgICAgIG9sZFByb3BzLnZhbGlkYXRvcnMgIT09IHRoaXMucHJvcHMudmFsaWRhdG9ycyB8fFxyXG4gICAgICBvbGRQcm9wcy5jdXN0b21WYWxpZGF0b3JzICE9PSB0aGlzLnByb3BzLmN1c3RvbVZhbGlkYXRvcnMgfHxcclxuICAgICAgb2xkUHJvcHMucmVxdWlyZWQgIT09IHRoaXMucHJvcHMucmVxdWlyZWQgfHxcclxuICAgICAgb2xkUHJvcHMuc2VsZWN0ZWRWYWx1ZXMgIT09IHRoaXMucHJvcHMuc2VsZWN0ZWRWYWx1ZXNcclxuICAgICkge1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5tdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVmFsaWQodGhpcy5wcm9wcy5zZWxlY3RlZFZhbHVlcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSh0aGlzLnByb3BzLnZhbHVlLCB0cnVlLCBbXSwgdGhpcy5wcm9wcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBmaW5hbFZhbHVlcyA9IHRoaXMucHJvcHMubXVsdGlwbGVcclxuICAgICAgPyB0aGlzLnByb3BzLnZhbHVlcy5maWx0ZXIoXHJcbiAgICAgICAgICBpdGVtID0+XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRWYWx1ZXMuZmluZEluZGV4KHQgPT4gdC52YWx1ZSA9PT0gaXRlbS52YWx1ZSkgPCAwXHJcbiAgICAgICAgKVxyXG4gICAgICA6IHRoaXMucHJvcHMudmFsdWVzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPElucHV0R3JvdXAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9IHRvb2x0aXA9e3RoaXMucHJvcHMudG9vbHRpcH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgJ2lucHV0X19iYXNlIHNlbGVjdC1pbnB1dCAnICtcclxuICAgICAgICAgICAgdGhpcy5nZXRWYWxpZGF0aW9uQ2xhc3MoKSArXHJcbiAgICAgICAgICAgICcgJyArXHJcbiAgICAgICAgICAgICh0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJycpICtcclxuICAgICAgICAgICAgJyAnICtcclxuICAgICAgICAgICAgKHRoaXMucHJvcHMucmVhZE9ubHkgPyAncmVhZG9ubHknIDogJycpICtcclxuICAgICAgICAgICAgJyAnICtcclxuICAgICAgICAgICAgKHRoaXMucHJvcHMubXVsdGlwbGUgPyAnbXVsdGlwbGUnIDogJycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZWY9e3RoaXMuY29udGFpbmVyUmVmfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLnJlbmRlclNlbGVjdGVkVmFsdWVzKCl9XHJcbiAgICAgICAgICB7ZmluYWxWYWx1ZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAoKHRoaXMucHJvcHMubXVsdGlwbGUgJiYgIXRoaXMucHJvcHMucmVhZE9ubHkpIHx8XHJcbiAgICAgICAgICAgICAgIXRoaXMucHJvcHMubXVsdGlwbGUpICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1pbnB1dF9fc2VsZWN0X193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7KCF0aGlzLnByb3BzLm11bHRpcGxlICYmICF0aGlzLnByb3BzLnJlYWRPbmx5KSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5tdWx0aXBsZSA/IChcclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuaW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuZ2V0RGlzYWJsZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dGhpcy5wcm9wcy5yZXF1aXJlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VDdXN0b219XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICdzZWxlY3QtaW5wdXRfX3NlbGVjdCAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuc2VsZWN0ZWRWYWx1ZXMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZFZhbHVlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdmaWxsZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZWZhdWx0RW1wdHkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9ey0xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICB7ZmluYWxWYWx1ZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e3ZhbHVlLnZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLmxhYmVsID8gdmFsdWUubGFiZWwgOiB2YWx1ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICdzZWxlY3QtaW5wdXRfX3NlbGVjdCAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMuc2VsZWN0ZWRWYWx1ZXMgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZFZhbHVlcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICdmaWxsZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJycpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUmVhZG9ubHkoKX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRGVmYXVsdFZhbGlkYXRpb24oKX1cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsICYmIGZpbmFsVmFsdWVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWw+e3RoaXMucmVuZGVyTGFiZWwoKX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoYW5kbGVWYWx1ZUNoYW5nZShcclxuICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICBpc1ZhbGlkOiBib29sZWFuID0gdHJ1ZSxcclxuICAgIGVycm9yczogVmFsaWRhdGlvbkVycm9yW10gPSBbXSxcclxuICAgIHByb3BzOiBTZWxlY3RQcm9wcyA9IHRoaXMucHJvcHMsXHJcbiAgICBpbml0aWFsaXppbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICkge1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLm11bHRpcGxlKSB7XHJcbiAgICAgIHJldHVybiBzdXBlci5oYW5kbGVWYWx1ZUNoYW5nZShcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBpc1ZhbGlkLFxyXG4gICAgICAgIGVycm9ycyxcclxuICAgICAgICBwcm9wcyxcclxuICAgICAgICBpbml0aWFsaXppbmdcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlVmFsaWQodGhpcy5wcm9wcy5zZWxlY3RlZFZhbHVlcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICBlcnJvcnM6IFtdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoYW5kbGVCbHVyKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XHJcbiAgICB0aGlzLnByb3BzLm9uQmx1ciAmJiB0aGlzLnByb3BzLm9uQmx1cigpO1xyXG4gICAgbGV0IHN0YXRlID0geyBmb2N1c2VkOiBmYWxzZSB9O1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLnRvdWNoZWQgJiYgdGhpcy5wcm9wcy50b3VjaE9uID09PSAnYmx1cicpIHtcclxuICAgICAgc3RhdGUgPSBPYmplY3QuYXNzaWduKHN0YXRlLCB7IHRvdWNoZWQ6IHRydWUgfSk7XHJcbiAgICAgIGlmICghdGhpcy5wcm9wcy5tdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVWYWxpZCh0aGlzLnByb3BzLnNlbGVjdGVkVmFsdWVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaGFuZGxlRm9jdXMoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcclxuICAgIHRoaXMucHJvcHMub25Gb2N1cyAmJiB0aGlzLnByb3BzLm9uRm9jdXMoZSk7XHJcbiAgICBsZXQgc3RhdGUgPSB7IGZvY3VzZWQ6IHRydWUgfTtcclxuICAgIGlmICghdGhpcy5zdGF0ZS50b3VjaGVkICYmIHRoaXMucHJvcHMudG91Y2hPbiA9PT0gJ2ZvY3VzJykge1xyXG4gICAgICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oc3RhdGUsIHsgdG91Y2hlZDogdHJ1ZSB9KTtcclxuICAgICAgaWYgKCF0aGlzLnByb3BzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVZhbGlkKHRoaXMucHJvcHMuc2VsZWN0ZWRWYWx1ZXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlQ2hhbmdlQ3VzdG9tKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcclxuICAgIGlmICh0aGlzLnByb3BzLm11bHRpcGxlKSB7XHJcbiAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgbGV0IHZhbCA9IHRoaXMucHJvcHMudmFsdWVzLmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgPT09IHZhbHVlKVswXTtcclxuICAgICAgaWYgKCF2YWwpIHtcclxuICAgICAgICBpZiAoIWlzTmFOKE51bWJlcih2YWx1ZSkpKSB7XHJcbiAgICAgICAgICBsZXQgdmFsTnVtYmVyID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgICAgIHZhbCA9IHRoaXMucHJvcHMudmFsdWVzLmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgPT09IHZhbE51bWJlcilbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnNlbGVjdGVkVmFsdWVzLmNvbmNhdCh2YWwpO1xyXG4gICAgICBpZiAodmFsKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdGVkVmFsdWVzQ2hhbmdlICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0ZWRWYWx1ZXNDaGFuZ2UobmV3VmFsdWVzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVZhbGlkKG5ld1ZhbHVlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJyB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVWYWxpZChuZXdWYWx1ZXM6IFNlbGVjdFZhbHVlW10pIHtcclxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgIGxldCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdID0gW107XHJcbiAgICBpZiAodGhpcy5wcm9wcy5yZXF1aXJlZCkge1xyXG4gICAgICBpZiAobmV3VmFsdWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICBlcnJvcnMucHVzaCh0aGlzLmdldFRyYW5zbGF0aW9ucyhkZWZhdWx0QmFzZVRyYW5zbGF0aW9ucykucmVxdWlyZWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5jdXN0b21WYWxpZGF0b3JzKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuY3VzdG9tVmFsaWRhdG9ycy5mb3JFYWNoKGN1c3RvbVZhbGlkYXRvciA9PiB7XHJcbiAgICAgICAgbGV0IHZhbGlkSW5uZXIgPSBmYWxzZTtcclxuICAgICAgICB2YWxpZElubmVyID0gY3VzdG9tVmFsaWRhdG9yLlZhbGlkYXRlKFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZT8udmFsdWUsXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgZXJyb3IgPT4gZXJyb3JzLnB1c2goZXJyb3IpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoaXNWYWxpZCAmJiAhdmFsaWRJbm5lcikge1xyXG4gICAgICAgICAgaXNWYWxpZCA9IHZhbGlkSW5uZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsaWQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0SW52YWxpZChlcnJvcnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJSZWFkb25seSgpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZXMuZmlsdGVyKFxyXG4gICAgICBpdGVtID0+IGl0ZW0udmFsdWUudG9TdHJpbmcoKSA9PT0gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgKVswXTtcclxuICAgIHJldHVybiB2YWx1ZSA/ICh2YWx1ZS5sYWJlbCA/IHZhbHVlLmxhYmVsIDogdmFsdWUudmFsdWUpIDogJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclNlbGVjdGVkVmFsdWVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMubXVsdGlwbGUgPyAoXHJcbiAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1pbnB1dF9fc2VsZWN0ZWRWYWx1ZV9fd3JhcHBlclwiPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuc2VsZWN0ZWRWYWx1ZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1pbnB1dF9fc2VsZWN0ZWRWYWx1ZVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIHtpdGVtLmxhYmVsID8gaXRlbS5sYWJlbCA6IGl0ZW0udmFsdWV9XHJcbiAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLnJlYWRPbmx5ICYmIChcclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2l0ZW0uZm9yY2VTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgY2lyY3VsYXI9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIGJsYW5rPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlbW92ZUl0ZW1DbGljayhpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMSB0cmFuc2Zvcm0tcm90YXRlLS00NSBsaW5lLWhlaWdodC0tMCBwLTBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8UGx1c0ljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1pbnB1dF9fc2VsZWN0ZWRWYWx1ZV9fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1pbnB1dF9fc2VsZWN0ZWRWYWx1ZVwiPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgICkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVJdGVtQ2xpY2sgPSAoaXRlbTogU2VsZWN0VmFsdWUpID0+ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlcyA9IHRoaXMucHJvcHMuc2VsZWN0ZWRWYWx1ZXMuZmlsdGVyKFxyXG4gICAgICBzdiA9PiBzdi52YWx1ZSAhPT0gaXRlbS52YWx1ZVxyXG4gICAgKTtcclxuICAgIHRoaXMuaGFuZGxlVmFsaWQobmV3VmFsdWVzKTtcclxuICAgIHRoaXMucHJvcHMub25TZWxlY3RlZFZhbHVlc0NoYW5nZSAmJlxyXG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0ZWRWYWx1ZXNDaGFuZ2UobmV3VmFsdWVzKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2VsZWN0ID0gd2l0aFRoZW1lQ29udGV4dDxcclxuICBTZWxlY3RQcm9wcyxcclxuICBJbnN0YW5jZVR5cGU8dHlwZW9mIFNlbGVjdFJhdz5cclxuPih3aXRoRm9ybUNvbnRleHQ8U2VsZWN0UHJvcHM+KFNlbGVjdFJhdyksICdzZWxlY3QnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==