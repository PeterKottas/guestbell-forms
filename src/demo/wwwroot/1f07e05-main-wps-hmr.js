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
      } else if (!initializing) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvc2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsiU2VsZWN0UmF3IiwicHJvcHMiLCJyZW1vdmVJdGVtQ2xpY2siLCJpdGVtIiwibmV3VmFsdWVzIiwic2VsZWN0ZWRWYWx1ZXMiLCJmaWx0ZXIiLCJzdiIsInZhbHVlIiwiaGFuZGxlVmFsaWQiLCJvblNlbGVjdGVkVmFsdWVzQ2hhbmdlIiwidmFsIiwiZGVmYXVsdEVtcHR5IiwidmFsdWVzIiwibGVuZ3RoIiwic3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJoYW5kbGVDaGFuZ2VDdXN0b20iLCJiaW5kIiwibXVsdGlwbGUiLCJvbGRQcm9wcyIsInZhbGlkYXRvcnMiLCJjdXN0b21WYWxpZGF0b3JzIiwicmVxdWlyZWQiLCJoYW5kbGVWYWx1ZUNoYW5nZSIsImZpbmFsVmFsdWVzIiwiZmluZEluZGV4IiwidCIsInRpdGxlIiwidG9vbHRpcCIsImdldFZhbGlkYXRpb25DbGFzcyIsImNsYXNzTmFtZSIsInJlYWRPbmx5IiwiY29udGFpbmVyUmVmIiwicmVuZGVyU2VsZWN0ZWRWYWx1ZXMiLCJpZCIsImlucHV0UmVmIiwiZ2V0RGlzYWJsZWQiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJkaXNwbGF5IiwibWFwIiwiaW5kZXgiLCJsYWJlbCIsInJlbmRlclJlYWRvbmx5IiwicmVuZGVyRGVmYXVsdFZhbGlkYXRpb24iLCJyZW5kZXJMYWJlbCIsImlzVmFsaWQiLCJlcnJvcnMiLCJpbml0aWFsaXppbmciLCJlIiwib25CbHVyIiwiZm9jdXNlZCIsInRvdWNoZWQiLCJ0b3VjaE9uIiwic2V0U3RhdGUiLCJvbkZvY3VzIiwiZXZlbnQiLCJ0YXJnZXQiLCJpc05hTiIsIk51bWJlciIsInZhbE51bWJlciIsImNvbmNhdCIsImhhbmRsZUNoYW5nZSIsInB1c2giLCJnZXRUcmFuc2xhdGlvbnMiLCJkZWZhdWx0QmFzZVRyYW5zbGF0aW9ucyIsImZvckVhY2giLCJjdXN0b21WYWxpZGF0b3IiLCJ2YWxpZElubmVyIiwiVmFsaWRhdGUiLCJlcnJvciIsInNldFZhbGlkIiwic2V0SW52YWxpZCIsInRvU3RyaW5nIiwiZm9yY2VTZWxlY3RlZCIsInJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlciIsIkJhc2VJbnB1dCIsImRlZmF1bHRQcm9wcyIsIlNlbGVjdCIsIndpdGhUaGVtZUNvbnRleHQiLCJ3aXRoRm9ybUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFxQk8sSUFBTUEsU0FBYjtBQUFBOztBQUFBOztBQVlFLHFCQUFZQyxLQUFaLEVBQWdDO0FBQUE7O0FBQUE7O0FBQzlCLDhCQUFNQSxLQUFOOztBQUQ4QixVQTJReEJDLGVBM1F3QixHQTJRTixVQUFDQyxJQUFEO0FBQUEsYUFBdUIsWUFBTTtBQUNyRCxZQUFNQyxTQUFTLEdBQUcsTUFBS0gsS0FBTCxDQUFXSSxjQUFYLENBQTBCQyxNQUExQixDQUNoQixVQUFBQyxFQUFFO0FBQUEsaUJBQUlBLEVBQUUsQ0FBQ0MsS0FBSCxLQUFhTCxJQUFJLENBQUNLLEtBQXRCO0FBQUEsU0FEYyxDQUFsQjs7QUFHQSxjQUFLQyxXQUFMLENBQWlCTCxTQUFqQjs7QUFDQSxjQUFLSCxLQUFMLENBQVdTLHNCQUFYLElBQ0UsTUFBS1QsS0FBTCxDQUFXUyxzQkFBWCxDQUFrQ04sU0FBbEMsQ0FERjtBQUVELE9BUHlCO0FBQUEsS0EzUU07O0FBRTlCLFFBQU1PLEdBQUcsR0FBRyxDQUFDVixLQUFLLENBQUNPLEtBQVAsR0FDUlAsS0FBSyxDQUFDVyxZQUFOLEdBQ0UsRUFERixHQUVFWCxLQUFLLENBQUNZLE1BQU4sSUFBZ0JaLEtBQUssQ0FBQ1ksTUFBTixDQUFhQyxNQUFiLEdBQXNCLENBQXRDLEdBQ0FiLEtBQUssQ0FBQ1ksTUFBTixDQUFhLENBQWIs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QUFBQSxPQUE5QixDQURILENBREYsR0FvQkUsS0FBS0YsS0FBTCxDQUFXZ0MsUUFBWCxpQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHLEtBQUtoQyxLQUFMLENBQVc0RSx3QkFEZCxDQURGLENBdEJDLEdBNkJILElBN0JKO0FBOEJEO0FBclJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxFQUErQkMsK0RBQS9CO0FBQWE5RSxTLENBS0crRSxZLEdBQWUvRCxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCNkQsK0RBQVMsQ0FBQ0MsWUFBNUIsRUFBMEM7QUFDckVuRSxjQUFZLEVBQUUsSUFEdUQ7QUFFckVRLFVBQVEsRUFBRSxLQUYyRDtBQUdyRWEsVUFBUSxFQUFFLEtBSDJEO0FBSXJFNEMsMEJBQXdCLEVBQUU7QUFKMkMsQ0FBMUMsQztBQTRSeEIsSUFBTUcsTUFBTSxHQUFHQyx3RkFBZ0IsQ0FHcENDLDZFQUFlLENBQWNsRixTQUFkLENBSHFCLEVBR0ssUUFITCxDQUEvQjtlQUtRZ0YsTTtBQUFBOzs7Ozs7Ozs7OzBCQXRTRmhGLFM7MEJBaVNBZ0YsTSIsImZpbGUiOiIxZjA3ZTA1LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gTWlzY1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICcuLi9pbnB1dEdyb3VwL0lucHV0R3JvdXAnO1xyXG5pbXBvcnQgKiBhcyBQbHVzSWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvY29udGVudC9zdmcvcHJvZHVjdGlvbi9pY19hZGRfY2lyY2xlX291dGxpbmVfMjRweC5zdmcnO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VJbnB1dFByb3BzLFxyXG4gIEJhc2VJbnB1dFN0YXRlLFxyXG4gIEJhc2VJbnB1dCxcclxuICBWYWxpZGF0aW9uRXJyb3IsXHJcbiAgZGVmYXVsdEJhc2VUcmFuc2xhdGlvbnMsXHJcbn0gZnJvbSAnLi4vYmFzZS9pbnB1dC9CYXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9idXR0b24vQnV0dG9uJztcclxuaW1wb3J0IHsgd2l0aEZvcm1Db250ZXh0IH0gZnJvbSAnLi4vZm9ybS93aXRoRm9ybUNvbnRleHQnO1xyXG5pbXBvcnQgeyB3aXRoVGhlbWVDb250ZXh0IH0gZnJvbSAnLi4vdGhlbWVQcm92aWRlci93aXRoVGhlbWVDb250ZXh0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0VmFsdWUge1xyXG4gIHZhbHVlOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgZm9yY2VTZWxlY3RlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0UHJvcHMgZXh0ZW5kcyBCYXNlSW5wdXRQcm9wczxIVE1MU2VsZWN0RWxlbWVudD4ge1xyXG4gIHZhbHVlcz86IFNlbGVjdFZhbHVlW107XHJcbiAgZGVmYXVsdEVtcHR5PzogYm9vbGVhbjtcclxuICBtdWx0aXBsZT86IGJvb2xlYW47XHJcbiAgc2VsZWN0ZWRWYWx1ZXM/OiBTZWxlY3RWYWx1ZVtdO1xyXG4gIG9uU2VsZWN0ZWRWYWx1ZXNDaGFuZ2U/OiAobmV3VmFsdWVzOiBTZWxlY3RWYWx1ZVtdKSA9PiB2b2lkO1xyXG4gIGlucHV0UmVmPzogKGlucHV0OiBIVE1MU2VsZWN0RWxlbWVudCkgPT4gdm9pZDtcclxuICByZWFkT25seT86IGJvb2xlYW47XHJcbiAgcmVhZG9ubHlFbXB0eVBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdFN0YXRlIGV4dGVuZHMgQmFzZUlucHV0U3RhdGUge31cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RSYXcgZXh0ZW5kcyBCYXNlSW5wdXQ8XHJcbiAgU2VsZWN0UHJvcHMsXHJcbiAgU2VsZWN0U3RhdGUsXHJcbiAgSFRNTFNlbGVjdEVsZW1lbnRcclxuPiB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBCYXNlSW5wdXQuZGVmYXVsdFByb3BzLCB7XHJcbiAgICBkZWZhdWx0RW1wdHk6IHRydWUsXHJcbiAgICBtdWx0aXBsZTogZmFsc2UsXHJcbiAgICByZWFkT25seTogZmFsc2UsXHJcbiAgICByZWFkb25seUVtcHR5UGxhY2Vob2xkZXI6ICdOL0EnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogU2VsZWN0UHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGNvbnN0IHZhbCA9ICFwcm9wcy52YWx1ZVxyXG4gICAgICA/IHByb3BzLmRlZmF1bHRFbXB0eVxyXG4gICAgICAgID8gJydcclxuICAgICAgICA6IHByb3BzLnZhbHVlcyAmJiBwcm9wcy52YWx1ZXMubGVuZ3RoID4gMFxyXG4gICAgICAgID8gcHJvcHMudmFsdWVzWzBdXHJcbiAgICAgICAgOiAnJ1xyXG4gICAgICA6IHByb3BzLnZhbHVlO1xyXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgeyB2YWx1ZTogdmFsIH0pO1xyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2VDdXN0b20gPSB0aGlzLmhhbmRsZUNoYW5nZUN1c3RvbS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5tdWx0aXBsZSAmJiB0aGlzLmhhbmRsZVZhbGlkKHRoaXMucHJvcHMuc2VsZWN0ZWRWYWx1ZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wczogU2VsZWN0UHJvcHMpIHtcclxuICAgIGlmIChcclxuICAgICAgb2xkUHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUgfHxcclxuICAgICAgb2xkUHJvcHMudmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy52YWxpZGF0b3JzIHx8XHJcbiAgICAgIG9sZFByb3BzLmN1c3RvbVZhbGlkYXRvcnMgIT09IHRoaXMucHJvcHMuY3VzdG9tVmFsaWRhdG9ycyB8fFxyXG4gICAgICBvbGRQcm9wcy5yZXF1aXJlZCAhPT0gdGhpcy5wcm9wcy5yZXF1aXJlZCB8fFxyXG4gICAgICBvbGRQcm9wcy5zZWxlY3RlZFZhbHVlcyAhPT0gdGhpcy5wcm9wcy5zZWxlY3RlZFZhbHVlc1xyXG4gICAgKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVWYWxpZCh0aGlzLnByb3BzLnNlbGVjdGVkVmFsdWVzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKHRoaXMucHJvcHMudmFsdWUsIHRydWUsIFtdLCB0aGlzLnByb3BzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGZpbmFsVmFsdWVzID0gdGhpcy5wcm9wcy5tdWx0aXBsZVxyXG4gICAgICA/IHRoaXMucHJvcHMudmFsdWVzLmZpbHRlcihcclxuICAgICAgICAgIGl0ZW0gPT5cclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zZWxlY3RlZFZhbHVlcy5maW5kSW5kZXgodCA9PiB0LnZhbHVlID09PSBpdGVtLnZhbHVlKSA8IDBcclxuICAgICAgICApXHJcbiAgICAgIDogdGhpcy5wcm9wcy52YWx1ZXM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SW5wdXRHcm91cCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gdG9vbHRpcD17dGhpcy5wcm9wcy50b29sdGlwfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAnaW5wdXRfX2Jhc2Ugc2VsZWN0LWlucHV0ICcgK1xyXG4gICAgICAgICAgICB0aGlzLmdldFZhbGlkYXRpb25DbGFzcygpICtcclxuICAgICAgICAgICAgJyAnICtcclxuICAgICAgICAgICAgKHRoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJykgK1xyXG4gICAgICAgICAgICAnICcgK1xyXG4gICAgICAgICAgICAodGhpcy5wcm9wcy5yZWFkT25seSA/ICdyZWFkb25seScgOiAnJykgK1xyXG4gICAgICAgICAgICAnICcgK1xyXG4gICAgICAgICAgICAodGhpcy5wcm9wcy5tdWx0aXBsZSA/ICdtdWx0aXBsZScgOiAnJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlZj17dGhpcy5jb250YWluZXJSZWZ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RoaXMucmVuZGVyU2VsZWN0ZWRWYWx1ZXMoKX1cclxuICAgICAgICAgIHtmaW5hbFZhbHVlcy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICgodGhpcy5wcm9wcy5tdWx0aXBsZSAmJiAhdGhpcy5wcm9wcy5yZWFkT25seSkgfHxcclxuICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5tdWx0aXBsZSkgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0LWlucHV0X19zZWxlY3RfX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIHsoIXRoaXMucHJvcHMubXVsdGlwbGUgJiYgIXRoaXMucHJvcHMucmVhZE9ubHkpIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm11bHRpcGxlID8gKFxyXG4gICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5pbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5nZXREaXNhYmxlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUN1c3RvbX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdC1pbnB1dF9fc2VsZWN0ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUudmFsdWUgIT09ICcnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5zZWxlY3RlZFZhbHVlcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkVmFsdWVzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2ZpbGxlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5oYW5kbGVGb2N1c31cclxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17MH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRlZmF1bHRFbXB0eSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17LTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIHtmaW5hbFZhbHVlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17dmFsdWUudmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUubGFiZWwgPyB2YWx1ZS5sYWJlbCA6IHZhbHVlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdC1pbnB1dF9fc2VsZWN0ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUudmFsdWUgIT09ICcnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5zZWxlY3RlZFZhbHVlcyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkVmFsdWVzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ2ZpbGxlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSZWFkb25seSgpfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhclwiIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJEZWZhdWx0VmFsaWRhdGlvbigpfVxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubGFiZWwgJiYgZmluYWxWYWx1ZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbD57dGhpcy5yZW5kZXJMYWJlbCgpfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGhhbmRsZVZhbHVlQ2hhbmdlKFxyXG4gICAgdmFsdWU6IHN0cmluZyxcclxuICAgIGlzVmFsaWQ6IGJvb2xlYW4gPSB0cnVlLFxyXG4gICAgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JbXSA9IFtdLFxyXG4gICAgcHJvcHM6IFNlbGVjdFByb3BzID0gdGhpcy5wcm9wcyxcclxuICAgIGluaXRpYWxpemluZzogYm9vbGVhbiA9IGZhbHNlXHJcbiAgKSB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMubXVsdGlwbGUpIHtcclxuICAgICAgcmV0dXJuIHN1cGVyLmhhbmRsZVZhbHVlQ2hhbmdlKFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIGlzVmFsaWQsXHJcbiAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgIHByb3BzLFxyXG4gICAgICAgIGluaXRpYWxpemluZ1xyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmICghaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlVmFsaWQodGhpcy5wcm9wcy5zZWxlY3RlZFZhbHVlcyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICBlcnJvcnM6IFtdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoYW5kbGVCbHVyKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XHJcbiAgICB0aGlzLnByb3BzLm9uQmx1ciAmJiB0aGlzLnByb3BzLm9uQmx1cigpO1xyXG4gICAgbGV0IHN0YXRlID0geyBmb2N1c2VkOiBmYWxzZSB9O1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLnRvdWNoZWQgJiYgdGhpcy5wcm9wcy50b3VjaE9uID09PSAnYmx1cicpIHtcclxuICAgICAgc3RhdGUgPSBPYmplY3QuYXNzaWduKHN0YXRlLCB7IHRvdWNoZWQ6IHRydWUgfSk7XHJcbiAgICAgIGlmICghdGhpcy5wcm9wcy5tdWx0aXBsZSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVWYWxpZCh0aGlzLnByb3BzLnNlbGVjdGVkVmFsdWVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaGFuZGxlRm9jdXMoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcclxuICAgIHRoaXMucHJvcHMub25Gb2N1cyAmJiB0aGlzLnByb3BzLm9uRm9jdXMoZSk7XHJcbiAgICBsZXQgc3RhdGUgPSB7IGZvY3VzZWQ6IHRydWUgfTtcclxuICAgIGlmICghdGhpcy5zdGF0ZS50b3VjaGVkICYmIHRoaXMucHJvcHMudG91Y2hPbiA9PT0gJ2ZvY3VzJykge1xyXG4gICAgICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oc3RhdGUsIHsgdG91Y2hlZDogdHJ1ZSB9KTtcclxuICAgICAgaWYgKCF0aGlzLnByb3BzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVZhbGlkKHRoaXMucHJvcHMuc2VsZWN0ZWRWYWx1ZXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlQ2hhbmdlQ3VzdG9tKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcclxuICAgIGlmICh0aGlzLnByb3BzLm11bHRpcGxlKSB7XHJcbiAgICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgbGV0IHZhbCA9IHRoaXMucHJvcHMudmFsdWVzLmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgPT09IHZhbHVlKVswXTtcclxuICAgICAgaWYgKCF2YWwpIHtcclxuICAgICAgICBpZiAoIWlzTmFOKE51bWJlcih2YWx1ZSkpKSB7XHJcbiAgICAgICAgICBsZXQgdmFsTnVtYmVyID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgICAgIHZhbCA9IHRoaXMucHJvcHMudmFsdWVzLmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgPT09IHZhbE51bWJlcilbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxldCBuZXdWYWx1ZXMgPSB0aGlzLnByb3BzLnNlbGVjdGVkVmFsdWVzLmNvbmNhdCh2YWwpO1xyXG4gICAgICBpZiAodmFsKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdGVkVmFsdWVzQ2hhbmdlICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0ZWRWYWx1ZXNDaGFuZ2UobmV3VmFsdWVzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVZhbGlkKG5ld1ZhbHVlcyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJyB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVWYWxpZChuZXdWYWx1ZXM6IFNlbGVjdFZhbHVlW10pIHtcclxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgIGxldCBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdID0gW107XHJcbiAgICBpZiAodGhpcy5wcm9wcy5yZXF1aXJlZCkge1xyXG4gICAgICBpZiAobmV3VmFsdWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICBlcnJvcnMucHVzaCh0aGlzLmdldFRyYW5zbGF0aW9ucyhkZWZhdWx0QmFzZVRyYW5zbGF0aW9ucykucmVxdWlyZWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5jdXN0b21WYWxpZGF0b3JzKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuY3VzdG9tVmFsaWRhdG9ycy5mb3JFYWNoKGN1c3RvbVZhbGlkYXRvciA9PiB7XHJcbiAgICAgICAgbGV0IHZhbGlkSW5uZXIgPSBmYWxzZTtcclxuICAgICAgICB2YWxpZElubmVyID0gY3VzdG9tVmFsaWRhdG9yLlZhbGlkYXRlKFxyXG4gICAgICAgICAgdGhpcy5zdGF0ZT8udmFsdWUsXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgZXJyb3IgPT4gZXJyb3JzLnB1c2goZXJyb3IpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoaXNWYWxpZCAmJiAhdmFsaWRJbm5lcikge1xyXG4gICAgICAgICAgaXNWYWxpZCA9IHZhbGlkSW5uZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsaWQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0SW52YWxpZChlcnJvcnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJSZWFkb25seSgpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZXMuZmlsdGVyKFxyXG4gICAgICBpdGVtID0+IGl0ZW0udmFsdWUudG9TdHJpbmcoKSA9PT0gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgKVswXTtcclxuICAgIHJldHVybiB2YWx1ZSA/ICh2YWx1ZS5sYWJlbCA/IHZhbHVlLmxhYmVsIDogdmFsdWUudmFsdWUpIDogJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclNlbGVjdGVkVmFsdWVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMubXVsdGlwbGUgPyAoXHJcbiAgICAgIHRoaXMucHJvcHMuc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1pbnB1dF9fc2VsZWN0ZWRWYWx1ZV9fd3JhcHBlclwiPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuc2VsZWN0ZWRWYWx1ZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1pbnB1dF9fc2VsZWN0ZWRWYWx1ZVwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIHtpdGVtLmxhYmVsID8gaXRlbS5sYWJlbCA6IGl0ZW0udmFsdWV9XHJcbiAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLnJlYWRPbmx5ICYmIChcclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2l0ZW0uZm9yY2VTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgY2lyY3VsYXI9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIGJsYW5rPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlbW92ZUl0ZW1DbGljayhpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMSB0cmFuc2Zvcm0tcm90YXRlLS00NSBsaW5lLWhlaWdodC0tMCBwLTBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8UGx1c0ljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1pbnB1dF9fc2VsZWN0ZWRWYWx1ZV9fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdC1pbnB1dF9fc2VsZWN0ZWRWYWx1ZVwiPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgICkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVJdGVtQ2xpY2sgPSAoaXRlbTogU2VsZWN0VmFsdWUpID0+ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlcyA9IHRoaXMucHJvcHMuc2VsZWN0ZWRWYWx1ZXMuZmlsdGVyKFxyXG4gICAgICBzdiA9PiBzdi52YWx1ZSAhPT0gaXRlbS52YWx1ZVxyXG4gICAgKTtcclxuICAgIHRoaXMuaGFuZGxlVmFsaWQobmV3VmFsdWVzKTtcclxuICAgIHRoaXMucHJvcHMub25TZWxlY3RlZFZhbHVlc0NoYW5nZSAmJlxyXG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0ZWRWYWx1ZXNDaGFuZ2UobmV3VmFsdWVzKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2VsZWN0ID0gd2l0aFRoZW1lQ29udGV4dDxcclxuICBTZWxlY3RQcm9wcyxcclxuICBJbnN0YW5jZVR5cGU8dHlwZW9mIFNlbGVjdFJhdz5cclxuPih3aXRoRm9ybUNvbnRleHQ8U2VsZWN0UHJvcHM+KFNlbGVjdFJhdyksICdzZWxlY3QnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==