webpackHotUpdate("main",{

/***/ "./src/lib/components/money/Money.tsx":
/*!********************************************!*\
  !*** ./src/lib/components/money/Money.tsx ***!
  \********************************************/
/*! exports provided: defaultMoneyTranslations, MoneyRaw, Money, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMoneyTranslations", function() { return defaultMoneyTranslations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyRaw", function() { return MoneyRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Money", function() { return Money; });
/* harmony import */ var material_design_icons_content_svg_production_ic_add_24px_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! material-design-icons/content/svg/production/ic_add_24px.svg */ "./node_modules/material-design-icons/content/svg/production/ic_add_24px.svg");
/* harmony import */ var material_design_icons_content_svg_production_ic_add_24px_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_content_svg_production_ic_add_24px_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _select_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select/Select */ "./src/lib/components/select/Select.tsx");
/* harmony import */ var _text_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text/Text */ "./src/lib/components/text/Text.tsx");
/* harmony import */ var _inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inputGroup/InputGroup */ "./src/lib/components/inputGroup/InputGroup.tsx");
/* harmony import */ var _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/input/BaseInput */ "./src/lib/components/base/input/BaseInput.tsx");
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button/Button */ "./src/lib/components/button/Button.tsx");
/* harmony import */ var _form_withFormContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form/withFormContext */ "./src/lib/components/form/withFormContext.tsx");
/* harmony import */ var _themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../themeProvider/withThemeContext */ "./src/lib/components/themeProvider/withThemeContext.tsx");
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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

 // Libs

 // Misc








var defaultMoneyTranslations = _objectSpread({}, _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_5__["defaultBaseTranslations"], {
  cannotRemoveDefaultCurrency: 'Cannot remove default currency',
  removePrice: 'Remove price',
  addPrice: 'Add price',
  addNewCurrency: 'Add new currency'
});
var MoneyRaw =
/*#__PURE__*/
function (_BaseInput) {
  _inherits(MoneyRaw, _BaseInput);

  function MoneyRaw(props) {
    var _this;

    _classCallCheck(this, MoneyRaw);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MoneyRaw).call(this, props, false));

    _this.onCurrencyChanged = function (index, currentCurrencies) {
      return function (e) {
        var newPrices = [].concat(_this.props.prices);
        newPrices[index].currency = currentCurrencies.filter(function (cc) {
          return cc.value.toString() === e.target.value;
        })[0];

        _this.props.onPricesChange(newPrices);
      };
    };

    _this.onTheFlightValidate = function (value) {
      var num = Number(value);
      var parts = value.split('.');

      if (parts && parts.length > 1 && parts[parts.length - 1].length > 2) {
        return false;
      }

      if (!isNaN(num)) {
        return true;
      }

      if (num) {
        return false;
      }
    };

    _this.onPriceChanged = function (index) {
      return function (e) {
        var newPrices = [].concat(_this.props.prices);
        var str = e.target.value;
        var num = Number(str);

        if (!isNaN(num)) {
          newPrices[index].value = num;
        }

        _this.props.onPricesChange(newPrices);

        if (!_this.state.touched) {
          _this.touch();
        }
      };
    };

    _this.removePriceClick = function (index) {
      return function () {
        var newPrices = _this.props.prices.filter(function (price, itemIndex) {
          return itemIndex !== index;
        });

        _this.props.onPricesChange(newPrices);

        if (newPrices.length === 0 && _this.props.required) {
          _this.setInvalid([_this.getTranslations(defaultMoneyTranslations).required]);
        }

        if (!_this.state.touched) {
          _this.touch();
        }
      };
    };

    _this.addPriceClick = function (unusedCurrencies) {
      return function () {
        _this.props.onPricesChange(_this.props.prices.concat([{
          value: 0,
          currency: unusedCurrencies[0]
        }]));

        _this.setValid();

        if (!_this.state.touched) {
          _this.touch();
        }
      };
    };

    _this.onFocus = function () {
      return _this.setState({
        focused: true
      });
    };

    _this.onBlur = function () {
      return _this.setState({
        focused: false
      });
    };

    if (!props.currencies || !props.currencies.length) {
      throw Error('No currencies supplied to money input');
    }

    _this.state = Object.assign(_this.state, {
      isValid: props.required ? props.prices.length > 0 : true,
      errors: props.required && props.prices.length === 0 ? [_this.getTranslations(defaultMoneyTranslations).required] : [],
      handleValueChangeEnabled: false
    });
    var forcedCurrencies = props.currencies.filter(function (c) {
      return c.forceSelected;
    });
    var missingForced = forcedCurrencies.filter(function (c) {
      return !props.prices.find(function (p) {
        return p.currency.value === c.value;
      });
    });

    if (missingForced.length > 0) {
      props.onPricesChange(props.prices.concat(missingForced.map(function (c) {
        return {
          currency: c,
          value: undefined
        };
      })));
    }

    _this.subscribeSelf(props);

    return _this;
  }

  _createClass(MoneyRaw, [{
    key: "render",
    value: function render() {
      var _this2 = this,
          _Button$defaultProps2;

      var unusedCurrencies = this.props.currencies;
      var translations = this.getTranslations(defaultMoneyTranslations);
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: this.props.title
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", _extends({}, this.props.id && {
        id: this.props.id
      }, {
        className: 'input__base money-input ' + this.getValidationClass() + (this.props.className ? ' ' + this.props.className : ''),
        ref: this.containerRef
      }), this.props.prices && this.props.prices.map(function (item, index) {
        var _Button$defaultProps;

        var currentCurrencies = _this2.props.currencies.filter(function (c) {
          return _this2.props.prices.filter(function (priceCurrency, priceIndex) {
            return priceIndex !== index && priceCurrency.currency.value === c.value;
          }).length === 0;
        });

        var currency = _this2.props.currencies.find(function (c) {
          return c.value === item.currency.value;
        });

        var retComponents = currentCurrencies.length ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_select_Select__WEBPACK_IMPORTED_MODULE_2__["Select"], _extends({}, _this2.props.id && {
          id: _this2.props.id + '-currency-select-' + index.toString()
        }, {
          onFocus: _this2.onFocus,
          onBlur: _this2.onBlur,
          className: 'money-input__select m-0',
          values: currentCurrencies,
          onChange: _this2.onCurrencyChanged(index, currentCurrencies),
          value: item.currency.value.toString()
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_text_Text__WEBPACK_IMPORTED_MODULE_3__["Text"], _extends({}, _this2.props.id && {
          id: _this2.props.id + '-amount-input-' + index.toString()
        }, {
          onFocus: _this2.onFocus,
          onBlur: _this2.onBlur,
          onTheFlightValidate: _this2.onTheFlightValidate,
          placeholder: '0.00',
          className: 'money-input__text m-0',
          validators: ['number'],
          value: item.value ? item.value.toString() : '',
          onChange: _this2.onPriceChanged(index),
          type: "number"
        })), _this2.props.prices.length > 0 && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], _extends({}, _this2.props.id && {
          id: _this2.props.id + '-remove-button-' + index.toString()
        }, {
          blank: true,
          type: "error",
          onClick: _this2.removePriceClick(index),
          className: "transform-rotate--45 line-height--0",
          buttonProps: _objectSpread({}, (_Button$defaultProps = _button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"].defaultProps) === null || _Button$defaultProps === void 0 ? void 0 : _Button$defaultProps.buttonProps, {
            title: currency && currency.forceSelected ? translations.cannotRemoveDefaultCurrency : translations.removePrice
          }),
          circular: true,
          disabled: currency && currency.forceSelected
        }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](material_design_icons_content_svg_production_ic_add_24px_svg__WEBPACK_IMPORTED_MODULE_0__, null))) : null;
        unusedCurrencies = unusedCurrencies.filter(function (c) {
          return c.value !== item.currency.value;
        });
        return retComponents;
      }), (this.props.allowMultiple || this.props.prices && !this.props.prices.length) && unusedCurrencies.length ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], _extends({
        blank: true
      }, this.props.id && {
        id: this.props.id + '-add-button'
      }, {
        type: "primary",
        className: "line-height--0",
        onClick: this.addPriceClick(unusedCurrencies),
        circular: true,
        buttonProps: _objectSpread({}, (_Button$defaultProps2 = _button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"].defaultProps) === null || _Button$defaultProps2 === void 0 ? void 0 : _Button$defaultProps2.buttonProps, {
          title: this.props.prices && this.props.prices.length === 0 ? translations.addPrice : translations.addNewCurrency
        })
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](material_design_icons_content_svg_production_ic_add_24px_svg__WEBPACK_IMPORTED_MODULE_0__, null)) : null, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "highlight"
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: 'bar ' + (this.state.focused ? 'focused' : '')
      }), this.renderDefaultValidation(), this.props.label && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", {
        className: this.props.prices && this.props.prices ? 'label--focused' : ''
      }, this.renderLabel())));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return MoneyRaw;
}(_base_input_BaseInput__WEBPACK_IMPORTED_MODULE_5__["BaseInput"]);
MoneyRaw.defaultProps = Object.assign({}, _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_5__["BaseInput"].defaultProps, {
  type: 'money',
  allowMultiple: false,
  onChange: undefined
});
var Money = Object(_themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_8__["withThemeContext"])(Object(_form_withFormContext__WEBPACK_IMPORTED_MODULE_7__["withFormContext"])(MoneyRaw), 'money');
var _default = Money;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultMoneyTranslations, "defaultMoneyTranslations", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\money\\Money.tsx");
  reactHotLoader.register(MoneyRaw, "MoneyRaw", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\money\\Money.tsx");
  reactHotLoader.register(Money, "Money", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\money\\Money.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\money\\Money.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvbW9uZXkvTW9uZXkudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRNb25leVRyYW5zbGF0aW9ucyIsImRlZmF1bHRCYXNlVHJhbnNsYXRpb25zIiwiY2Fubm90UmVtb3ZlRGVmYXVsdEN1cnJlbmN5IiwicmVtb3ZlUHJpY2UiLCJhZGRQcmljZSIsImFkZE5ld0N1cnJlbmN5IiwiTW9uZXlSYXciLCJwcm9wcyIsIm9uQ3VycmVuY3lDaGFuZ2VkIiwiaW5kZXgiLCJjdXJyZW50Q3VycmVuY2llcyIsImUiLCJuZXdQcmljZXMiLCJjb25jYXQiLCJwcmljZXMiLCJjdXJyZW5jeSIsImZpbHRlciIsImNjIiwidmFsdWUiLCJ0b1N0cmluZyIsInRhcmdldCIsIm9uUHJpY2VzQ2hhbmdlIiwib25UaGVGbGlnaHRWYWxpZGF0ZSIsIm51bSIsIk51bWJlciIsInBhcnRzIiwic3BsaXQiLCJsZW5ndGgiLCJpc05hTiIsIm9uUHJpY2VDaGFuZ2VkIiwic3RyIiwic3RhdGUiLCJ0b3VjaGVkIiwidG91Y2giLCJyZW1vdmVQcmljZUNsaWNrIiwicHJpY2UiLCJpdGVtSW5kZXgiLCJyZXF1aXJlZCIsInNldEludmFsaWQiLCJnZXRUcmFuc2xhdGlvbnMiLCJhZGRQcmljZUNsaWNrIiwidW51c2VkQ3VycmVuY2llcyIsInNldFZhbGlkIiwib25Gb2N1cyIsInNldFN0YXRlIiwiZm9jdXNlZCIsIm9uQmx1ciIsImN1cnJlbmNpZXMiLCJFcnJvciIsIk9iamVjdCIsImFzc2lnbiIsImlzVmFsaWQiLCJlcnJvcnMiLCJoYW5kbGVWYWx1ZUNoYW5nZUVuYWJsZWQiLCJmb3JjZWRDdXJyZW5jaWVzIiwiYyIsImZvcmNlU2VsZWN0ZWQiLCJtaXNzaW5nRm9yY2VkIiwiZmluZCIsInAiLCJtYXAiLCJ1bmRlZmluZWQiLCJzdWJzY3JpYmVTZWxmIiwidHJhbnNsYXRpb25zIiwidGl0bGUiLCJpZCIsImdldFZhbGlkYXRpb25DbGFzcyIsImNsYXNzTmFtZSIsImNvbnRhaW5lclJlZiIsIml0ZW0iLCJwcmljZUN1cnJlbmN5IiwicHJpY2VJbmRleCIsInJldENvbXBvbmVudHMiLCJCdXR0b24iLCJkZWZhdWx0UHJvcHMiLCJidXR0b25Qcm9wcyIsImFsbG93TXVsdGlwbGUiLCJyZW5kZXJEZWZhdWx0VmFsaWRhdGlvbiIsImxhYmVsIiwicmVuZGVyTGFiZWwiLCJCYXNlSW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJNb25leSIsIndpdGhUaGVtZUNvbnRleHQiLCJ3aXRoRm9ybUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBT08sSUFBTUEsd0JBQXdCLHFCQUNoQ0MsNkVBRGdDO0FBRW5DQyw2QkFBMkIsRUFBRSxnQ0FGTTtBQUduQ0MsYUFBVyxFQUFFLGNBSHNCO0FBSW5DQyxVQUFRLEVBQUUsV0FKeUI7QUFLbkNDLGdCQUFjLEVBQUU7QUFMbUIsRUFBOUI7QUFvQkEsSUFBTUMsUUFBYjtBQUFBO0FBQUE7QUFBQTs7QUFZRSxvQkFBWUMsS0FBWixFQUErQjtBQUFBOztBQUFBOztBQUM3QixrRkFBTUEsS0FBTixFQUFhLEtBQWI7O0FBRDZCLFVBd0p2QkMsaUJBeEp1QixHQXdKSCxVQUMxQkMsS0FEMEIsRUFFMUJDLGlCQUYwQjtBQUFBLGFBR3ZCLFVBQUFDLENBQUMsRUFBSTtBQUNSLFlBQUlDLFNBQThCLEdBQUcsR0FBR0MsTUFBSCxDQUFVLE1BQUtOLEtBQUwsQ0FBV08sTUFBckIsQ0FBckM7QUFDQUYsaUJBQVMsQ0FBQ0gsS0FBRCxDQUFULENBQWlCTSxRQUFqQixHQUE0QkwsaUJBQWlCLENBQUNNLE1BQWxCLENBQzFCLFVBQUFDLEVBQUU7QUFBQSxpQkFBSUEsRUFBRSxDQUFDQyxLQUFILENBQVNDLFFBQVQsT0FBd0JSLENBQUMsQ0FBQ1MsTUFB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TUFBWCxDQUFrQmEsTUFBbEIsS0FBNkIsQ0FBbEQsR0FDSW9DLFlBQVksQ0FBQzNELFFBRGpCLEdBRUkyRCxZQUFZLENBQUMxRDtBQUxWO0FBVGIsVUFpQkUsb0RBQUMseUZBQUQsT0FqQkYsQ0FIRCxHQXNCRyxJQXRHTixFQXVHRTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsUUF2R0YsRUF3R0U7QUFBTSxpQkFBUyxFQUFFLFVBQVUsS0FBSzBCLEtBQUwsQ0FBV2MsT0FBWCxHQUFxQixTQUFyQixHQUFpQyxFQUEzQztBQUFqQixRQXhHRixFQXlHRyxLQUFLZ0MsdUJBQUwsRUF6R0gsRUEwR0csS0FBS3RFLEtBQUwsQ0FBV3VFLEtBQVgsSUFDQztBQUNFLGlCQUFTLEVBQ1AsS0FBS3ZFLEtBQUwsQ0FBV08sTUFBWCxJQUFxQixLQUFLUCxLQUFMLENBQVdPLE1BQWhDLEdBQXlDLGdCQUF6QyxHQUE0RDtBQUZoRSxTQUtHLEtBQUtpRSxXQUFMLEVBTEgsQ0EzR0osQ0FERixDQURGO0FBd0hEO0FBbEtIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxFQUE4QkMsK0RBQTlCO0FBQWExRSxRLENBTUdvRSxZLEdBQWV6QixNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCOEIsK0RBQVMsQ0FBQ04sWUFBNUIsRUFBMEM7QUFDckVPLE1BQUksRUFBRSxPQUQrRDtBQUVyRUwsZUFBYSxFQUFFLEtBRnNEO0FBR3JFTSxVQUFRLEVBQUVyQjtBQUgyRCxDQUExQyxDO0FBb094QixJQUFNc0IsS0FBSyxHQUFHQyx3RkFBZ0IsQ0FHbkNDLDZFQUFlLENBQWEvRSxRQUFiLENBSG9CLEVBR0ksT0FISixDQUE5QjtlQUtRNkUsSztBQUFBOzs7Ozs7Ozs7OzBCQW5RRm5GLHdCOzBCQW9CQU0sUTswQkEwT0E2RSxLIiwiZmlsZSI6IjU4YjU1ZjUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUGx1c0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL2NvbnRlbnQvc3ZnL3Byb2R1Y3Rpb24vaWNfYWRkXzI0cHguc3ZnJztcclxuXHJcbi8vIExpYnNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gTWlzY1xyXG5pbXBvcnQgeyBTZWxlY3QsIFNlbGVjdFZhbHVlIH0gZnJvbSAnLi4vc2VsZWN0L1NlbGVjdCc7XHJcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi90ZXh0L1RleHQnO1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICcuLi9pbnB1dEdyb3VwL0lucHV0R3JvdXAnO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VJbnB1dFByb3BzLFxyXG4gIEJhc2VJbnB1dFN0YXRlLFxyXG4gIEJhc2VJbnB1dCxcclxuICBkZWZhdWx0QmFzZVRyYW5zbGF0aW9ucyxcclxufSBmcm9tICcuLi9iYXNlL2lucHV0L0Jhc2VJbnB1dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgeyB3aXRoRm9ybUNvbnRleHQgfSBmcm9tICcuLi9mb3JtL3dpdGhGb3JtQ29udGV4dCc7XHJcbmltcG9ydCB7IHdpdGhUaGVtZUNvbnRleHQgfSBmcm9tICcuLi90aGVtZVByb3ZpZGVyL3dpdGhUaGVtZUNvbnRleHQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb25leVdpdGhDdXJyZW5jeSB7XHJcbiAgdmFsdWU6IG51bWJlcjtcclxuICBjdXJyZW5jeTogU2VsZWN0VmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0TW9uZXlUcmFuc2xhdGlvbnMgPSB7XHJcbiAgLi4uZGVmYXVsdEJhc2VUcmFuc2xhdGlvbnMsXHJcbiAgY2Fubm90UmVtb3ZlRGVmYXVsdEN1cnJlbmN5OiAnQ2Fubm90IHJlbW92ZSBkZWZhdWx0IGN1cnJlbmN5JyxcclxuICByZW1vdmVQcmljZTogJ1JlbW92ZSBwcmljZScsXHJcbiAgYWRkUHJpY2U6ICdBZGQgcHJpY2UnLFxyXG4gIGFkZE5ld0N1cnJlbmN5OiAnQWRkIG5ldyBjdXJyZW5jeScsXHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBNb25leVRyYW5zbGF0aW9ucyA9IFBhcnRpYWw8dHlwZW9mIGRlZmF1bHRNb25leVRyYW5zbGF0aW9ucz47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vbmV5UHJvcHMgZXh0ZW5kcyBCYXNlSW5wdXRQcm9wczxuZXZlciwgTW9uZXlUcmFuc2xhdGlvbnM+IHtcclxuICBvbkNoYW5nZT86IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcclxuICBvblByaWNlc0NoYW5nZTogKHByaWNlczogTW9uZXlXaXRoQ3VycmVuY3lbXSkgPT4gdm9pZDtcclxuICBhbGxvd011bHRpcGxlPzogYm9vbGVhbjtcclxuICBjdXJyZW5jaWVzOiBTZWxlY3RWYWx1ZVtdO1xyXG4gIHByaWNlczogTW9uZXlXaXRoQ3VycmVuY3lbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb25leVN0YXRlIGV4dGVuZHMgQmFzZUlucHV0U3RhdGUge31cclxuXHJcbmV4cG9ydCBjbGFzcyBNb25leVJhdyBleHRlbmRzIEJhc2VJbnB1dDxcclxuICBNb25leVByb3BzLFxyXG4gIE1vbmV5U3RhdGUsXHJcbiAgbmV2ZXIsXHJcbiAgTW9uZXlUcmFuc2xhdGlvbnNcclxuPiB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBCYXNlSW5wdXQuZGVmYXVsdFByb3BzLCB7XHJcbiAgICB0eXBlOiAnbW9uZXknLFxyXG4gICAgYWxsb3dNdWx0aXBsZTogZmFsc2UsXHJcbiAgICBvbkNoYW5nZTogdW5kZWZpbmVkLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogTW9uZXlQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMsIGZhbHNlKTtcclxuICAgIGlmICghcHJvcHMuY3VycmVuY2llcyB8fCAhcHJvcHMuY3VycmVuY2llcy5sZW5ndGgpIHtcclxuICAgICAgdGhyb3cgRXJyb3IoJ05vIGN1cnJlbmNpZXMgc3VwcGxpZWQgdG8gbW9uZXkgaW5wdXQnKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHtcclxuICAgICAgaXNWYWxpZDogcHJvcHMucmVxdWlyZWQgPyBwcm9wcy5wcmljZXMubGVuZ3RoID4gMCA6IHRydWUsXHJcbiAgICAgIGVycm9yczpcclxuICAgICAgICBwcm9wcy5yZXF1aXJlZCAmJiBwcm9wcy5wcmljZXMubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICA/IFt0aGlzLmdldFRyYW5zbGF0aW9ucyhkZWZhdWx0TW9uZXlUcmFuc2xhdGlvbnMpLnJlcXVpcmVkXVxyXG4gICAgICAgICAgOiBbXSxcclxuICAgICAgaGFuZGxlVmFsdWVDaGFuZ2VFbmFibGVkOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZm9yY2VkQ3VycmVuY2llcyA9IHByb3BzLmN1cnJlbmNpZXMuZmlsdGVyKGMgPT4gYy5mb3JjZVNlbGVjdGVkKTtcclxuICAgIGNvbnN0IG1pc3NpbmdGb3JjZWQgPSBmb3JjZWRDdXJyZW5jaWVzLmZpbHRlcihcclxuICAgICAgYyA9PiAhcHJvcHMucHJpY2VzLmZpbmQocCA9PiBwLmN1cnJlbmN5LnZhbHVlID09PSBjLnZhbHVlKVxyXG4gICAgKTtcclxuICAgIGlmIChtaXNzaW5nRm9yY2VkLmxlbmd0aCA+IDApIHtcclxuICAgICAgcHJvcHMub25QcmljZXNDaGFuZ2UoXHJcbiAgICAgICAgcHJvcHMucHJpY2VzLmNvbmNhdChcclxuICAgICAgICAgIG1pc3NpbmdGb3JjZWQubWFwKGMgPT4gKHsgY3VycmVuY3k6IGMsIHZhbHVlOiB1bmRlZmluZWQgfSkpXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdWJzY3JpYmVTZWxmKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBsZXQgdW51c2VkQ3VycmVuY2llcyA9IHRoaXMucHJvcHMuY3VycmVuY2llcztcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKGRlZmF1bHRNb25leVRyYW5zbGF0aW9ucyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SW5wdXRHcm91cCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHsgaWQ6IHRoaXMucHJvcHMuaWQgfSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAnaW5wdXRfX2Jhc2UgbW9uZXktaW5wdXQgJyArXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VmFsaWRhdGlvbkNsYXNzKCkgK1xyXG4gICAgICAgICAgICAodGhpcy5wcm9wcy5jbGFzc05hbWUgPyAnICcgKyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVmPXt0aGlzLmNvbnRhaW5lclJlZn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5wcmljZXMgJiZcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmljZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBjdXJyZW50Q3VycmVuY2llcyA9IHRoaXMucHJvcHMuY3VycmVuY2llcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICBjID0+XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJpY2VzLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAocHJpY2VDdXJyZW5jeSwgcHJpY2VJbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIHByaWNlSW5kZXggIT09IGluZGV4ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmljZUN1cnJlbmN5LmN1cnJlbmN5LnZhbHVlID09PSBjLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICkubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeSA9IHRoaXMucHJvcHMuY3VycmVuY2llcy5maW5kKFxyXG4gICAgICAgICAgICAgICAgYyA9PiBjLnZhbHVlID09PSBpdGVtLmN1cnJlbmN5LnZhbHVlXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBsZXQgcmV0Q29tcG9uZW50cyA9IGN1cnJlbnRDdXJyZW5jaWVzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaWQgKyAnLWN1cnJlbmN5LXNlbGVjdC0nICsgaW5kZXgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydtb25leS1pbnB1dF9fc2VsZWN0IG0tMCd9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXtjdXJyZW50Q3VycmVuY2llc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkN1cnJlbmN5Q2hhbmdlZChpbmRleCwgY3VycmVudEN1cnJlbmNpZXMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLmN1cnJlbmN5LnZhbHVlLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy1hbW91bnQtaW5wdXQtJyArIGluZGV4LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25UaGVGbGlnaHRWYWxpZGF0ZT17dGhpcy5vblRoZUZsaWdodFZhbGlkYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnMC4wMCd9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnbW9uZXktaW5wdXRfX3RleHQgbS0wJ31cclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtbJ251bWJlciddfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlID8gaXRlbS52YWx1ZS50b1N0cmluZygpIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25QcmljZUNoYW5nZWQoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wcmljZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pZCArICctcmVtb3ZlLWJ1dHRvbi0nICsgaW5kZXgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYmxhbms9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZW1vdmVQcmljZUNsaWNrKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyYW5zZm9ybS1yb3RhdGUtLTQ1IGxpbmUtaGVpZ2h0LS0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLkJ1dHRvbi5kZWZhdWx0UHJvcHM/LmJ1dHRvblByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeSAmJiBjdXJyZW5jeS5mb3JjZVNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRyYW5zbGF0aW9ucy5jYW5ub3RSZW1vdmVEZWZhdWx0Q3VycmVuY3lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJhbnNsYXRpb25zLnJlbW92ZVByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNpcmN1bGFyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbmN5ICYmIGN1cnJlbmN5LmZvcmNlU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFBsdXNJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogbnVsbDtcclxuICAgICAgICAgICAgICB1bnVzZWRDdXJyZW5jaWVzID0gdW51c2VkQ3VycmVuY2llcy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICBjID0+IGMudmFsdWUgIT09IGl0ZW0uY3VycmVuY3kudmFsdWVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHJldHVybiByZXRDb21wb25lbnRzO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIHsodGhpcy5wcm9wcy5hbGxvd011bHRpcGxlIHx8XHJcbiAgICAgICAgICAgICh0aGlzLnByb3BzLnByaWNlcyAmJiAhdGhpcy5wcm9wcy5wcmljZXMubGVuZ3RoKSkgJiZcclxuICAgICAgICAgIHVudXNlZEN1cnJlbmNpZXMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgYmxhbms9e3RydWV9XHJcbiAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy1hZGQtYnV0dG9uJyxcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluZS1oZWlnaHQtLTBcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkUHJpY2VDbGljayh1bnVzZWRDdXJyZW5jaWVzKX1cclxuICAgICAgICAgICAgICBjaXJjdWxhcj17dHJ1ZX1cclxuICAgICAgICAgICAgICBidXR0b25Qcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgLi4uQnV0dG9uLmRlZmF1bHRQcm9wcz8uYnV0dG9uUHJvcHMsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmljZXMgJiYgdGhpcy5wcm9wcy5wcmljZXMubGVuZ3RoID09PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0cmFuc2xhdGlvbnMuYWRkUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICA6IHRyYW5zbGF0aW9ucy5hZGROZXdDdXJyZW5jeSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFBsdXNJY29uIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIiAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnYmFyICcgKyAodGhpcy5zdGF0ZS5mb2N1c2VkID8gJ2ZvY3VzZWQnIDogJycpfSAvPlxyXG4gICAgICAgICAge3RoaXMucmVuZGVyRGVmYXVsdFZhbGlkYXRpb24oKX1cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsICYmIChcclxuICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJpY2VzICYmIHRoaXMucHJvcHMucHJpY2VzID8gJ2xhYmVsLS1mb2N1c2VkJyA6ICcnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyTGFiZWwoKX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ3VycmVuY3lDaGFuZ2VkID0gKFxyXG4gICAgaW5kZXg6IG51bWJlcixcclxuICAgIGN1cnJlbnRDdXJyZW5jaWVzOiBTZWxlY3RWYWx1ZVtdXHJcbiAgKSA9PiBlID0+IHtcclxuICAgIGxldCBuZXdQcmljZXM6IE1vbmV5V2l0aEN1cnJlbmN5W10gPSBbXS5jb25jYXQodGhpcy5wcm9wcy5wcmljZXMpO1xyXG4gICAgbmV3UHJpY2VzW2luZGV4XS5jdXJyZW5jeSA9IGN1cnJlbnRDdXJyZW5jaWVzLmZpbHRlcihcclxuICAgICAgY2MgPT4gY2MudmFsdWUudG9TdHJpbmcoKSA9PT0gZS50YXJnZXQudmFsdWVcclxuICAgIClbMF07XHJcbiAgICB0aGlzLnByb3BzLm9uUHJpY2VzQ2hhbmdlKG5ld1ByaWNlcyk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvblRoZUZsaWdodFZhbGlkYXRlID0gdmFsdWUgPT4ge1xyXG4gICAgbGV0IG51bSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KCcuJyk7XHJcbiAgICBpZiAocGFydHMgJiYgcGFydHMubGVuZ3RoID4gMSAmJiBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXS5sZW5ndGggPiAyKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICghaXNOYU4obnVtKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChudW0pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25QcmljZUNoYW5nZWQgPSAoaW5kZXg6IG51bWJlcikgPT4gKFxyXG4gICAgZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cclxuICApID0+IHtcclxuICAgIGxldCBuZXdQcmljZXM6IE1vbmV5V2l0aEN1cnJlbmN5W10gPSBbXS5jb25jYXQodGhpcy5wcm9wcy5wcmljZXMpO1xyXG4gICAgbGV0IHN0ciA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgbGV0IG51bSA9IE51bWJlcihzdHIpO1xyXG4gICAgaWYgKCFpc05hTihudW0pKSB7XHJcbiAgICAgIG5ld1ByaWNlc1tpbmRleF0udmFsdWUgPSBudW07XHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3BzLm9uUHJpY2VzQ2hhbmdlKG5ld1ByaWNlcyk7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUudG91Y2hlZCkge1xyXG4gICAgICB0aGlzLnRvdWNoKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVQcmljZUNsaWNrID0gKGluZGV4OiBudW1iZXIpID0+ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1ByaWNlcyA9IHRoaXMucHJvcHMucHJpY2VzLmZpbHRlcihcclxuICAgICAgKHByaWNlLCBpdGVtSW5kZXgpID0+IGl0ZW1JbmRleCAhPT0gaW5kZXhcclxuICAgICk7XHJcbiAgICB0aGlzLnByb3BzLm9uUHJpY2VzQ2hhbmdlKG5ld1ByaWNlcyk7XHJcbiAgICBpZiAobmV3UHJpY2VzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLnJlcXVpcmVkKSB7XHJcbiAgICAgIHRoaXMuc2V0SW52YWxpZChbXHJcbiAgICAgICAgdGhpcy5nZXRUcmFuc2xhdGlvbnMoZGVmYXVsdE1vbmV5VHJhbnNsYXRpb25zKS5yZXF1aXJlZCxcclxuICAgICAgXSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUudG91Y2hlZCkge1xyXG4gICAgICB0aGlzLnRvdWNoKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBhZGRQcmljZUNsaWNrID0gKHVudXNlZEN1cnJlbmNpZXM6IFNlbGVjdFZhbHVlW10pID0+ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25QcmljZXNDaGFuZ2UoXHJcbiAgICAgIHRoaXMucHJvcHMucHJpY2VzLmNvbmNhdChbeyB2YWx1ZTogMCwgY3VycmVuY3k6IHVudXNlZEN1cnJlbmNpZXNbMF0gfV0pXHJcbiAgICApO1xyXG4gICAgdGhpcy5zZXRWYWxpZCgpO1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlLnRvdWNoZWQpIHtcclxuICAgICAgdGhpcy50b3VjaCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25Gb2N1cyA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiB0cnVlIH0pO1xyXG5cclxuICBwcml2YXRlIG9uQmx1ciA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkOiBmYWxzZSB9KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1vbmV5ID0gd2l0aFRoZW1lQ29udGV4dDxcclxuICBNb25leVByb3BzLFxyXG4gIEluc3RhbmNlVHlwZTx0eXBlb2YgTW9uZXlSYXc+XHJcbj4od2l0aEZvcm1Db250ZXh0PE1vbmV5UHJvcHM+KE1vbmV5UmF3KSwgJ21vbmV5Jyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb25leTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==