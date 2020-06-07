webpackHotUpdate("main",{

/***/ "./src/lib/components/base/input/BaseInput.tsx":
/*!*****************************************************!*\
  !*** ./src/lib/components/base/input/BaseInput.tsx ***!
  \*****************************************************/
/*! exports provided: defaultBaseTranslations, BaseInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBaseTranslations", function() { return defaultBaseTranslations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseInput", function() { return BaseInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tippy_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tippy.js/react */ "./node_modules/@tippy.js/react/dist/tippy-react.esm.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../validators */ "./src/lib/validators/index.ts");
/* harmony import */ var _utils_Guid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Guid */ "./src/lib/components/utils/Guid.ts");
/* harmony import */ var _utils_ShallowEqual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/ShallowEqual */ "./src/lib/components/utils/ShallowEqual.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

// Libs


 // Misc




var defaultBaseTranslations = {
  required: 'Required'
};
var BaseInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseInput, _React$Component);

  function BaseInput(props) {
    var _this;

    var subscribe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _classCallCheck(this, BaseInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseInput).call(this, props));
    _this.componentId = Object(_utils_Guid__WEBPACK_IMPORTED_MODULE_4__["default"])();
    _this.inputRef = void 0;
    _this.containerRef = void 0;
    _this.lastValidation = void 0;

    var res = _this.handleValueChange(_this.props.value, true, [], props, true);

    _this.state = {
      isValid: res.isValid,
      errors: res.errors,
      value: props.value ? props.value : '',
      touched: props.defaultTouched,
      disabled: false,
      focused: false,
      handleValueChangeEnabled: true
    };
    _this.containerRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    _this.inputRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.setValid = _this.setValid.bind(_assertThisInitialized(_this));
    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
    _this.scrollTo = _this.scrollTo.bind(_assertThisInitialized(_this));
    _this.setInvalid = _this.setInvalid.bind(_assertThisInitialized(_this));
    _this.disableComponent = _this.disableComponent.bind(_assertThisInitialized(_this));
    _this.enableComponent = _this.enableComponent.bind(_assertThisInitialized(_this));
    _this.touch = _this.touch.bind(_assertThisInitialized(_this));
    _this.unTouch = _this.unTouch.bind(_assertThisInitialized(_this));

    if (subscribe) {
      _this.subscribeSelf(props);
    }

    return _this;
  }

  _createClass(BaseInput, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.props.ignoreContext) {
        this.props.formContext && this.props.formContext.unSubscribe(this.componentId);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (oldProps.value !== this.props.value || oldProps.validators !== this.props.validators || oldProps.customValidators !== this.props.customValidators || oldProps.required !== this.props.required) {
        this.handleValueChange(this.props.value, true, [], this.props);
      }
    }
  }, {
    key: "scrollTo",
    value: function scrollTo() {
      var domNode = react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"](this.containerRef.current);
      domNode && domNode.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, {
    key: "touch",
    value: function touch() {
      this.setState({
        touched: true
      });
      this.handleValueChange(this.state.value || '');
    }
  }, {
    key: "unTouch",
    value: function unTouch() {
      this.setState({
        touched: false
      });
    }
  }, {
    key: "disableComponent",
    value: function disableComponent() {
      this.setState({
        disabled: true
      });
    }
  }, {
    key: "enableComponent",
    value: function enableComponent() {
      this.setState({
        disabled: false
      });
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.inputRef) {
        var domNode = react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"](this.inputRef.current);
        domNode && domNode.focus();
      }

      this.touch();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var shouldUpdate = !Object(_utils_ShallowEqual__WEBPACK_IMPORTED_MODULE_5__["shallowEqual"])(this.props, nextProps, !this.props.reRendersWhenContextChanges ? 'formContext' : undefined) || !Object(_utils_ShallowEqual__WEBPACK_IMPORTED_MODULE_5__["shallowEqual"])(this.state, nextState);
      return shouldUpdate;
    }
  }, {
    key: "getValidationClass",
    value: function getValidationClass(extraErrors) {
      if (!this.props.showValidation || !this.state.touched) {
        return 'validation__success';
      }

      return this.state.isValid && (!this.props.errors || this.props.errors.length === 0) && (!this.state.errors || this.state.errors.length === 0) && (!extraErrors || extraErrors.length === 0) ? 'validation__success' : 'validation__error';
    }
  }, {
    key: "renderDefaultValidation",
    value: function renderDefaultValidation(extraErrors) {
      if (this.props.disabled) {
        return null;
      }

      if (!this.props.showValidation) {
        return null;
      }

      var finalErrors = this.state.errors;

      if (!finalErrors) {
        finalErrors = [];
      }

      if (extraErrors) {
        finalErrors = finalErrors.concat(extraErrors);
      }

      if (this.props.errors) {
        finalErrors = finalErrors.concat(this.props.errors);
      }

      finalErrors = finalErrors.filter(function (i) {
        return i;
      });

      if (finalErrors.length > 0) {
        this.lastValidation = finalErrors.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
            key: index,
            className: "validation__item"
          }, item);
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "validation__container"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
        className: "validation__ul"
      }, this.lastValidation));
    }
  }, {
    key: "handleChange",
    value: function handleChange(event, isValid) {
      var errors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var value = event.target.value;

      if (!this.props.onTheFlightValidate || this.props.onTheFlightValidate && this.props.onTheFlightValidate(value)) {
        var res = this.handleValueChange(value, isValid, errors);

        if (this.props.onChange) {
          this.props.onChange(event, res.isValid);
        }
      }
    }
  }, {
    key: "subscribeSelf",
    value: function subscribeSelf(props) {
      if (!props.ignoreContext && props.formContext) {
        props.formContext.subscribe(this.componentId, {
          componentApi: {
            disableComponent: this.disableComponent,
            enableComponent: this.enableComponent,
            touch: this.touch,
            unTouch: this.unTouch,
            scrollTo: this.scrollTo,
            focus: this.focus
          },
          validation: {
            isValid: this.state.isValid,
            errors: this.state.errors,
            name: this.props.validationName ? this.props.validationName : this.props.title ? this.props.title : this.props.label
          }
        });
      }
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
        this.handleValueChange(this.state.value);
      }

      this.setState(state);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(e) {
      if (!this.props.disabled) {
        this.props.onFocus && this.props.onFocus(e);
        var state = {
          focused: true
        };

        if (!this.state.touched && this.props.touchOn === 'focus') {
          state = Object.assign(state, {
            touched: true
          });
          this.handleValueChange(this.state.value);
        }

        this.setState(state);
      }
    }
  }, {
    key: "getDisabled",
    value: function getDisabled() {
      return this.state.disabled ? this.state.disabled : this.props.disabled;
    }
  }, {
    key: "setValid",
    value: function setValid() {
      var _this2 = this;

      this.setState(function () {
        return {
          isValid: true,
          errors: []
        };
      }, function () {
        if (!_this2.props.ignoreContext) {
          _this2.props.formContext && _this2.props.formContext.updateCallback(_this2.componentId, {
            validation: {
              isValid: true,
              errors: []
            }
          });
        }
      });
    }
  }, {
    key: "setInvalid",
    value: function setInvalid() {
      var _this3 = this;

      var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.setState(function () {
        return {
          isValid: false,
          errors: errors
        };
      }, function () {
        if (!_this3.props.ignoreContext) {
          _this3.props.formContext && _this3.props.formContext.updateCallback(_this3.componentId, {
            validation: {
              isValid: false,
              errors: errors
            }
          });
        }
      });
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var touchable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.props.tooltip || this.props.tooltip && this.props.title) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
          className: touchable ? '' : 'label--no-touch'
        }, this.props.label);
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: touchable ? '' : 'label--no-touch'
      }, this.props.label), this.renderTooltip());
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      if (!this.props.tooltip) {
        return this.props.title;
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, this.props.title, this.renderTooltip());
    }
  }, {
    key: "handleValueChange",
    value: function handleValueChange(value) {
      var isValid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var errors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.props;
      var initializing = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

      if (!initializing && !this.state.handleValueChangeEnabled) {
        return {
          isValid: isValid,
          errors: []
        };
      }

      if (props.required && !value) {
        var translations = this.getTranslations(defaultBaseTranslations);
        errors.push(translations.required);
        isValid = false;
      } else {
        if (!props.required && !value) {
          isValid = true;
        } else {
          if (props.validators) {
            isValid = true;
            props.validators.forEach(function (validator) {
              var validInner = false;

              switch (validator) {
                case 'email':
                  validInner = new _validators__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"]().Validate(value, props.required, function (error) {
                    return errors.push(error);
                  });
                  break;

                case 'number':
                  validInner = new _validators__WEBPACK_IMPORTED_MODULE_3__["NumberValidator"]().Validate(value, props.required, function (error) {
                    return errors.push(error);
                  });
                  break;

                case 'latitude':
                  validInner = new _validators__WEBPACK_IMPORTED_MODULE_3__["LatitudeValidator"]().Validate(value, props.required, function (error) {
                    return errors.push(error);
                  });
                  break;

                case 'longitude':
                  validInner = new _validators__WEBPACK_IMPORTED_MODULE_3__["LongitudeValidator"]().Validate(value, props.required, function (error) {
                    return errors.push(error);
                  });
                  break;

                case 'url':
                  validInner = new _validators__WEBPACK_IMPORTED_MODULE_3__["UrlValidator"]().Validate(value, props.required, function (error) {
                    return errors.push(error);
                  });
                  break;

                default:
                  throw new Error("Validator ".concat(validator, " not implemented"));
              }

              if (isValid && !validInner) {
                isValid = validInner;
              }
            });
          }

          if (props.customValidators) {
            props.customValidators.forEach(function (customValidator) {
              var validInner = false;
              validInner = customValidator.Validate(value, props.required, function (error) {
                return errors.push(error);
              });

              if (isValid && !validInner) {
                isValid = validInner;
              }
            });
          }
        }
      }

      props.onErrorsChanged && props.onErrorsChanged(errors);

      if (!initializing) {
        this.setState({
          value: value,
          isValid: isValid,
          errors: errors
        });

        if (!props.ignoreContext) {
          props.formContext && props.formContext.updateCallback(this.componentId, {
            validation: {
              isValid: isValid,
              errors: errors
            }
          });
        }
      }

      return {
        isValid: isValid,
        errors: errors
      };
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      var _document;

      var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: "label--help-icon"
      }, "?");
      return this.props.tooltip ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_tippy_js_react__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        content: this.props.tooltip,
        placement: "bottom",
        animation: "scale-subtle",
        arrow: false,
        duration: 200,
        delay: [75, 0],
        distance: 8,
        interactive: true,
        appendTo: (_document = document) === null || _document === void 0 ? void 0 : _document.body,
        trigger: "mouseenter focus"
      }, this.props.tooltipProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        tabIndex: 0
      }, content)) : content;
    }
  }, {
    key: "getTranslations",
    value: function getTranslations(_defaultTranslations) {
      return _objectSpread({}, _defaultTranslations, {}, this.props.translations);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return BaseInput;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
BaseInput.defaultProps = {
  className: undefined,
  required: false,
  label: undefined,
  disabled: false,
  touchOn: 'focus',
  ignoreContext: false,
  showValidation: true,
  formContext: undefined,
  reRendersWhenContextChanges: false
};
var _default = BaseInput;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultBaseTranslations, "defaultBaseTranslations", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\base\\input\\BaseInput.tsx");
  reactHotLoader.register(BaseInput, "BaseInput", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\base\\input\\BaseInput.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\base\\input\\BaseInput.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validators_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validators/index */ "./src/lib/validators/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _validators_index__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _validators_index__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/button */ "./src/lib/components/button/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _components_button__WEBPACK_IMPORTED_MODULE_1__["Button"]; });

/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/checkbox */ "./src/lib/components/checkbox/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxRaw", function() { return _components_checkbox__WEBPACK_IMPORTED_MODULE_2__["CheckboxRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _components_checkbox__WEBPACK_IMPORTED_MODULE_2__["Checkbox"]; });

/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dropdown */ "./src/lib/components/dropdown/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _components_dropdown__WEBPACK_IMPORTED_MODULE_3__["Dropdown"]; });

/* harmony import */ var _components_dynamicSubmit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dynamicSubmit */ "./src/lib/components/dynamicSubmit/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicSubmitMode", function() { return _components_dynamicSubmit__WEBPACK_IMPORTED_MODULE_4__["DynamicSubmitMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicSubmitRaw", function() { return _components_dynamicSubmit__WEBPACK_IMPORTED_MODULE_4__["DynamicSubmitRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicSubmit", function() { return _components_dynamicSubmit__WEBPACK_IMPORTED_MODULE_4__["DynamicSubmit"]; });

/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form */ "./src/lib/components/form/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _components_form__WEBPACK_IMPORTED_MODULE_5__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return _components_form__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormValidationSummaryRaw", function() { return _components_form__WEBPACK_IMPORTED_MODULE_5__["FormValidationSummaryRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormValidationSummary", function() { return _components_form__WEBPACK_IMPORTED_MODULE_5__["FormValidationSummary"]; });

/* harmony import */ var _components_inputGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/inputGroup */ "./src/lib/components/inputGroup/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return _components_inputGroup__WEBPACK_IMPORTED_MODULE_6__["InputGroup"]; });

/* harmony import */ var _components_inputHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inputHeader */ "./src/lib/components/inputHeader/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputHeaderRaw", function() { return _components_inputHeader__WEBPACK_IMPORTED_MODULE_7__["InputHeaderRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputHeader", function() { return _components_inputHeader__WEBPACK_IMPORTED_MODULE_7__["InputHeader"]; });

/* harmony import */ var _components_money_Money__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/money/Money */ "./src/lib/components/money/Money.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultMoneyTranslations", function() { return _components_money_Money__WEBPACK_IMPORTED_MODULE_8__["defaultMoneyTranslations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoneyRaw", function() { return _components_money_Money__WEBPACK_IMPORTED_MODULE_8__["MoneyRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Money", function() { return _components_money_Money__WEBPACK_IMPORTED_MODULE_8__["Money"]; });

/* harmony import */ var _components_openingHours_openingHoursDay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/openingHours/openingHoursDay */ "./src/lib/components/openingHours/openingHoursDay/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDayTranslations", function() { return _components_openingHours_openingHoursDay__WEBPACK_IMPORTED_MODULE_9__["defaultDayTranslations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursDayRaw", function() { return _components_openingHours_openingHoursDay__WEBPACK_IMPORTED_MODULE_9__["OpeningHoursDayRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursDay", function() { return _components_openingHours_openingHoursDay__WEBPACK_IMPORTED_MODULE_9__["OpeningHoursDay"]; });

/* harmony import */ var _components_openingHours_openingHoursSpecial__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/openingHours/openingHoursSpecial */ "./src/lib/components/openingHours/openingHoursSpecial/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateInput", function() { return _components_openingHours_openingHoursSpecial__WEBPACK_IMPORTED_MODULE_10__["DateInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursSpecialRaw", function() { return _components_openingHours_openingHoursSpecial__WEBPACK_IMPORTED_MODULE_10__["OpeningHoursSpecialRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursSpecial", function() { return _components_openingHours_openingHoursSpecial__WEBPACK_IMPORTED_MODULE_10__["OpeningHoursSpecial"]; });

/* harmony import */ var _components_openingHours_openingHoursWeek__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/openingHours/openingHoursWeek */ "./src/lib/components/openingHours/openingHoursWeek/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultWeekTranslations", function() { return _components_openingHours_openingHoursWeek__WEBPACK_IMPORTED_MODULE_11__["defaultWeekTranslations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursWeekRaw", function() { return _components_openingHours_openingHoursWeek__WEBPACK_IMPORTED_MODULE_11__["OpeningHoursWeekRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursWeek", function() { return _components_openingHours_openingHoursWeek__WEBPACK_IMPORTED_MODULE_11__["OpeningHoursWeek"]; });

/* harmony import */ var _components_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/radio */ "./src/lib/components/radio/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioRaw", function() { return _components_radio__WEBPACK_IMPORTED_MODULE_12__["RadioRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _components_radio__WEBPACK_IMPORTED_MODULE_12__["Radio"]; });

/* harmony import */ var _components_radioContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/radioContainer */ "./src/lib/components/radioContainer/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioContainer", function() { return _components_radioContainer__WEBPACK_IMPORTED_MODULE_13__["RadioContainer"]; });

/* harmony import */ var _components_select_Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/select/Select */ "./src/lib/components/select/Select.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectRaw", function() { return _components_select_Select__WEBPACK_IMPORTED_MODULE_14__["SelectRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _components_select_Select__WEBPACK_IMPORTED_MODULE_14__["Select"]; });

/* harmony import */ var _components_submit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/submit */ "./src/lib/components/submit/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSubmitTranslations", function() { return _components_submit__WEBPACK_IMPORTED_MODULE_15__["defaultSubmitTranslations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitRaw", function() { return _components_submit__WEBPACK_IMPORTED_MODULE_15__["SubmitRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Submit", function() { return _components_submit__WEBPACK_IMPORTED_MODULE_15__["Submit"]; });

/* harmony import */ var _components_tags__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tags */ "./src/lib/components/tags/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTagsTranslations", function() { return _components_tags__WEBPACK_IMPORTED_MODULE_16__["defaultTagsTranslations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagsRaw", function() { return _components_tags__WEBPACK_IMPORTED_MODULE_16__["TagsRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tags", function() { return _components_tags__WEBPACK_IMPORTED_MODULE_16__["Tags"]; });

/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/text */ "./src/lib/components/text/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextRaw", function() { return _components_text__WEBPACK_IMPORTED_MODULE_17__["TextRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _components_text__WEBPACK_IMPORTED_MODULE_17__["Text"]; });

/* harmony import */ var _components_textArea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/textArea */ "./src/lib/components/textArea/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaRaw", function() { return _components_textArea__WEBPACK_IMPORTED_MODULE_18__["TextAreaRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return _components_textArea__WEBPACK_IMPORTED_MODULE_18__["TextArea"]; });

/* harmony import */ var _components_time__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/time */ "./src/lib/components/time/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeRaw", function() { return _components_time__WEBPACK_IMPORTED_MODULE_19__["TimeRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return _components_time__WEBPACK_IMPORTED_MODULE_19__["Time"]; });

/* harmony import */ var _components_timeSpan__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/timeSpan */ "./src/lib/components/timeSpan/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeSpanUnit", function() { return _components_timeSpan__WEBPACK_IMPORTED_MODULE_20__["TimeSpanUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allTimeSpanUnits", function() { return _components_timeSpan__WEBPACK_IMPORTED_MODULE_20__["allTimeSpanUnits"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeSpanRaw", function() { return _components_timeSpan__WEBPACK_IMPORTED_MODULE_20__["TimeSpanRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeSpan", function() { return _components_timeSpan__WEBPACK_IMPORTED_MODULE_20__["TimeSpan"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};























/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvYmFzZS9pbnB1dC9CYXNlSW5wdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9saWIvaW5kZXgudHMiXSwibmFtZXMiOlsiZGVmYXVsdEJhc2VUcmFuc2xhdGlvbnMiLCJyZXF1aXJlZCIsIkJhc2VJbnB1dCIsInByb3BzIiwic3Vic2NyaWJlIiwiY29tcG9uZW50SWQiLCJndWlkIiwiaW5wdXRSZWYiLCJjb250YWluZXJSZWYiLCJsYXN0VmFsaWRhdGlvbiIsInJlcyIsImhhbmRsZVZhbHVlQ2hhbmdlIiwidmFsdWUiLCJzdGF0ZSIsImlzVmFsaWQiLCJlcnJvcnMiLCJ0b3VjaGVkIiwiZGVmYXVsdFRvdWNoZWQiLCJkaXNhYmxlZCIsImZvY3VzZWQiLCJoYW5kbGVWYWx1ZUNoYW5nZUVuYWJsZWQiLCJSZWFjdCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJzZXRWYWxpZCIsImZvY3VzIiwic2Nyb2xsVG8iLCJzZXRJbnZhbGlkIiwiZGlzYWJsZUNvbXBvbmVudCIsImVuYWJsZUNvbXBvbmVudCIsInRvdWNoIiwidW5Ub3VjaCIsInN1YnNjcmliZVNlbGYiLCJpZ25vcmVDb250ZXh0IiwiZm9ybUNvbnRleHQiLCJ1blN1YnNjcmliZSIsIm9sZFByb3BzIiwidmFsaWRhdG9ycyIsImN1c3RvbVZhbGlkYXRvcnMiLCJkb21Ob2RlIiwiUmVhY3RET00iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsInNldFN0YXRlIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwic2hvdWxkVXBkYXRlIiwic2hhbGxvd0VxdWFsIiwicmVSZW5kZXJzV2hlbkNvbnRleHRDaGFuZ2VzIiwidW5kZWZpbmVkIiwiZXh0cmFFcnJvcnMiLCJzaG93VmFsaWRhdGlvbiIsImxlbmd0aCIsImZpbmFsRXJyb3JzIiwiY29uY2F0IiwiZmlsdGVyIiwiaSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImV2ZW50IiwidGFyZ2V0Iiwib25UaGVGbGlnaHRWYWxpZGF0ZSIsIm9uQ2hhbmdlIiwiY29tcG9uZW50QXBpIiwidmFsaWRhdGlvbiIsIm5hbWUiLCJ2YWxpZGF0aW9uTmFtZSIsInRpdGxlIiwibGFiZWwiLCJlIiwib25CbHVyIiwidG91Y2hPbiIsIk9iamVjdCIsImFzc2lnbiIsIm9uRm9jdXMiLCJ1cGRhdGVDYWxsYmFjayIsInRvdWNoYWJsZSIsInRvb2x0aXAiLCJyZW5kZXJUb29sdGlwIiwiaW5pdGlhbGl6aW5nIiwidHJhbnNsYXRpb25zIiwiZ2V0VHJhbnNsYXRpb25zIiwicHVzaCIsImZvckVhY2giLCJ2YWxpZGF0b3IiLCJ2YWxpZElubmVyIiwiVmFsaWRhdG9ycyIsIlZhbGlkYXRlIiwiZXJyb3IiLCJFcnJvciIsImN1c3RvbVZhbGlkYXRvciIsIm9uRXJyb3JzQ2hhbmdlZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsImJvZHkiLCJ0b29sdGlwUHJvcHMiLCJfZGVmYXVsdFRyYW5zbGF0aW9ucyIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBRUE7QUFrQk8sSUFBTUEsdUJBQXVCLEdBQUc7QUFDckNDLFVBQVEsRUFBRTtBQUQyQixDQUFoQztBQWtEQSxJQUFNQyxTQUFiO0FBQUE7QUFBQTtBQUFBOztBQTBCRSxxQkFBWUMsS0FBWixFQUFpRDtBQUFBOztBQUFBLFFBQTNCQyxTQUEyQix1RUFBTixJQUFNOztBQUFBOztBQUMvQyxtRkFBTUQsS0FBTjtBQUQrQyxVQVIxQ0UsV0FRMEMsR0FSNUJDLDJEQUFJLEVBUXdCO0FBQUEsVUFOMUNDLFFBTTBDO0FBQUEsVUFKdkNDLFlBSXVDO0FBQUEsVUFGekNDLGNBRXlDOztBQUUvQyxRQUFNQyxHQUFHLEdBQUcsTUFBS0MsaUJBQUws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QUFFLE9BTHlDO0FBTWxEeEMsZUFBYSxFQUFFLEtBTm1DO0FBT2xEbUIsZ0JBQWMsRUFBRSxJQVBrQztBQVFsRGxCLGFBQVcsRUFBRWdCLFNBUnFDO0FBU2xERCw2QkFBMkIsRUFBRTtBQVRxQixDO2VBb2F2Q2pELFM7QUFBQTs7Ozs7Ozs7OzswQkE1ZEZGLHVCOzBCQWtEQUUsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJlODE3ZjU5LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgVGlwcHksIHsgVGlwcHlQcm9wcyB9IGZyb20gJ0B0aXBweS5qcy9yZWFjdCc7XHJcblxyXG4vLyBNaXNjXHJcbmltcG9ydCAqIGFzIFZhbGlkYXRvcnMgZnJvbSAnLi4vLi4vLi4vdmFsaWRhdG9ycyc7XHJcbmltcG9ydCBndWlkIGZyb20gJy4uLy4uL3V0aWxzL0d1aWQnO1xyXG5pbXBvcnQgeyBGb3JtQ29udGV4dFByb3BzIH0gZnJvbSAnLi4vLi4vZm9ybS9Gb3JtQ29udGV4dCc7XHJcbmltcG9ydCB7IHNoYWxsb3dFcXVhbCB9IGZyb20gJy4uLy4uL3V0aWxzL1NoYWxsb3dFcXVhbCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudEFwaSB7XHJcbiAgZm9jdXM6ICgpID0+IHZvaWQ7XHJcbiAgdG91Y2g6ICgpID0+IHZvaWQ7XHJcbiAgdW5Ub3VjaDogKCkgPT4gdm9pZDtcclxuICBlbmFibGVDb21wb25lbnQ6ICgpID0+IHZvaWQ7XHJcbiAgZGlzYWJsZUNvbXBvbmVudDogKCkgPT4gdm9pZDtcclxuICBzY3JvbGxUbzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVmFsaWRhdGlvbkVycm9yID0gc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcblxyXG5leHBvcnQgdHlwZSBBbGxvd2VkSHRtbEVsZW1lbnRzID1cclxuICB8IEhUTUxJbnB1dEVsZW1lbnRcclxuICB8IEhUTUxTZWxlY3RFbGVtZW50XHJcbiAgfCBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRCYXNlVHJhbnNsYXRpb25zID0ge1xyXG4gIHJlcXVpcmVkOiAnUmVxdWlyZWQnLFxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgQmFzZVRyYW5zbGF0aW9ucyA9IFBhcnRpYWw8dHlwZW9mIGRlZmF1bHRCYXNlVHJhbnNsYXRpb25zPjtcclxuXHJcbmV4cG9ydCB0eXBlIEJhc2VJbnB1dFByb3BzPFxyXG4gIEhUTUxUeXBlIGV4dGVuZHMgQWxsb3dlZEh0bWxFbGVtZW50cyxcclxuICBUcmFuc2xhdGlvbnNUIGV4dGVuZHMgQmFzZVRyYW5zbGF0aW9ucyA9IEJhc2VUcmFuc2xhdGlvbnNcclxuPiA9IHtcclxuICBpZD86IHN0cmluZztcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGxhYmVsPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgdG9vbHRpcD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHRvb2x0aXBQcm9wcz86IFRpcHB5UHJvcHM7XHJcbiAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgb25DaGFuZ2U/OiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFR5cGU+LCBpc1ZhbGlkOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcclxuICBjdXN0b21WYWxpZGF0b3JzPzogVmFsaWRhdG9ycy5JQmFzZVZhbGlkYXRvcltdO1xyXG4gIHZhbGlkYXRvcnM/OiBWYWxpZGF0b3JzLlZhbGlkYXRvclR5cGVzW107XHJcbiAgbm9WYWxpZGF0ZT86IGJvb2xlYW47XHJcbiAgdmFsaWRhdGlvbk5hbWU/OiBzdHJpbmc7XHJcbiAgdG91Y2hPbj86ICdmb2N1cycgfCAnYmx1cic7XHJcbiAgaWdub3JlQ29udGV4dD86IGJvb2xlYW47XHJcbiAgb25UaGVGbGlnaHRWYWxpZGF0ZT86ICh2YWx1ZTogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gIG9uRm9jdXM/OiAoZTogUmVhY3QuU3ludGhldGljRXZlbnQ8e30+KSA9PiB2b2lkO1xyXG4gIG9uQmx1cj86ICgpID0+IHZvaWQ7XHJcbiAgb25DbGljaz86IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB2b2lkO1xyXG4gIHRpdGxlPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgb25LZXlEb3duPzogKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB2b2lkO1xyXG4gIGVycm9ycz86IFZhbGlkYXRpb25FcnJvcltdO1xyXG4gIG9uRXJyb3JzQ2hhbmdlZD86IChlcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdKSA9PiB2b2lkO1xyXG4gIHNob3dWYWxpZGF0aW9uPzogYm9vbGVhbjtcclxuICByZVJlbmRlcnNXaGVuQ29udGV4dENoYW5nZXM/OiBib29sZWFuO1xyXG4gIGRlZmF1bHRUb3VjaGVkPzogYm9vbGVhbjtcclxuICB0cmFuc2xhdGlvbnM/OiBUcmFuc2xhdGlvbnNUO1xyXG59ICYgRm9ybUNvbnRleHRQcm9wcztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUlucHV0U3RhdGUge1xyXG4gIGlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdO1xyXG4gIHZhbGlkYXRvcjogdW5kZWZpbmVkO1xyXG4gIHRvdWNoZWQ6IGJvb2xlYW47XHJcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgZm9jdXNlZDogYm9vbGVhbjtcclxuICBoYW5kbGVWYWx1ZUNoYW5nZUVuYWJsZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlSW5wdXQ8XHJcbiAgUCBleHRlbmRzIEJhc2VJbnB1dFByb3BzPEhUTUxUeXBlLCBUcmFuc2xhdGlvbnNUPixcclxuICBTIGV4dGVuZHMgQmFzZUlucHV0U3RhdGUsXHJcbiAgSFRNTFR5cGUgZXh0ZW5kcyBBbGxvd2VkSHRtbEVsZW1lbnRzLFxyXG4gIFRyYW5zbGF0aW9uc1QgZXh0ZW5kcyBCYXNlVHJhbnNsYXRpb25zID0gQmFzZVRyYW5zbGF0aW9uc1xyXG4+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFAsIFM+IGltcGxlbWVudHMgQ29tcG9uZW50QXBpIHtcclxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogQmFzZUlucHV0UHJvcHM8bmV2ZXI+ID0ge1xyXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICBsYWJlbDogdW5kZWZpbmVkLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hPbjogJ2ZvY3VzJyxcclxuICAgIGlnbm9yZUNvbnRleHQ6IGZhbHNlLFxyXG4gICAgc2hvd1ZhbGlkYXRpb246IHRydWUsXHJcbiAgICBmb3JtQ29udGV4dDogdW5kZWZpbmVkLFxyXG4gICAgcmVSZW5kZXJzV2hlbkNvbnRleHRDaGFuZ2VzOiBmYWxzZSxcclxuICB9O1xyXG5cclxuICBwdWJsaWMgY29tcG9uZW50SWQgPSBndWlkKCk7XHJcblxyXG4gIHB1YmxpYyBpbnB1dFJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxUeXBlPjtcclxuXHJcbiAgcHJvdGVjdGVkIGNvbnRhaW5lclJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgcHJpdmF0ZSBsYXN0VmFsaWRhdGlvbjogSlNYLkVsZW1lbnRbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFAsIHN1YnNjcmliZTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIGNvbnN0IHJlcyA9IHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UodGhpcy5wcm9wcy52YWx1ZSwgdHJ1ZSwgW10sIHByb3BzLCB0cnVlKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzVmFsaWQ6IHJlcy5pc1ZhbGlkLFxyXG4gICAgICBlcnJvcnM6IHJlcy5lcnJvcnMsXHJcbiAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSA/IHByb3BzLnZhbHVlIDogJycsXHJcbiAgICAgIHRvdWNoZWQ6IHByb3BzLmRlZmF1bHRUb3VjaGVkLFxyXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICAgIGZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICBoYW5kbGVWYWx1ZUNoYW5nZUVuYWJsZWQ6IHRydWUsXHJcbiAgICB9IGFzIFM7XHJcbiAgICB0aGlzLmNvbnRhaW5lclJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICAgIHRoaXMuaW5wdXRSZWYgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTFR5cGU+KCk7XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUJsdXIgPSB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlRm9jdXMgPSB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldFZhbGlkID0gdGhpcy5zZXRWYWxpZC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mb2N1cyA9IHRoaXMuZm9jdXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2Nyb2xsVG8gPSB0aGlzLnNjcm9sbFRvLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldEludmFsaWQgPSB0aGlzLnNldEludmFsaWQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZGlzYWJsZUNvbXBvbmVudCA9IHRoaXMuZGlzYWJsZUNvbXBvbmVudC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5lbmFibGVDb21wb25lbnQgPSB0aGlzLmVuYWJsZUNvbXBvbmVudC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy50b3VjaCA9IHRoaXMudG91Y2guYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5Ub3VjaCA9IHRoaXMudW5Ub3VjaC5iaW5kKHRoaXMpO1xyXG4gICAgaWYgKHN1YnNjcmliZSkge1xyXG4gICAgICB0aGlzLnN1YnNjcmliZVNlbGYocHJvcHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLmlnbm9yZUNvbnRleHQpIHtcclxuICAgICAgdGhpcy5wcm9wcy5mb3JtQ29udGV4dCAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZm9ybUNvbnRleHQudW5TdWJzY3JpYmUodGhpcy5jb21wb25lbnRJZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKG9sZFByb3BzOiBQKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG9sZFByb3BzLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlIHx8XHJcbiAgICAgIG9sZFByb3BzLnZhbGlkYXRvcnMgIT09IHRoaXMucHJvcHMudmFsaWRhdG9ycyB8fFxyXG4gICAgICBvbGRQcm9wcy5jdXN0b21WYWxpZGF0b3JzICE9PSB0aGlzLnByb3BzLmN1c3RvbVZhbGlkYXRvcnMgfHxcclxuICAgICAgb2xkUHJvcHMucmVxdWlyZWQgIT09IHRoaXMucHJvcHMucmVxdWlyZWRcclxuICAgICkge1xyXG4gICAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKHRoaXMucHJvcHMudmFsdWUsIHRydWUsIFtdLCB0aGlzLnByb3BzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzY3JvbGxUbygpIHtcclxuICAgIGNvbnN0IGRvbU5vZGU6IEhUTUxEaXZFbGVtZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUoXHJcbiAgICAgICh0aGlzLmNvbnRhaW5lclJlZiBhcyBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+KS5jdXJyZW50XHJcbiAgICApIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgZG9tTm9kZSAmJiBkb21Ob2RlLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvdWNoKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRvdWNoZWQ6IHRydWUgfSk7XHJcbiAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKHRoaXMuc3RhdGUudmFsdWUgfHwgJycpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVuVG91Y2goKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdG91Y2hlZDogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGlzYWJsZUNvbXBvbmVudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNhYmxlZDogdHJ1ZSB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlbmFibGVDb21wb25lbnQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzYWJsZWQ6IGZhbHNlIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvY3VzKCkge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRSZWYpIHtcclxuICAgICAgY29uc3QgZG9tTm9kZTogSFRNTEVsZW1lbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZShcclxuICAgICAgICAodGhpcy5pbnB1dFJlZiBhcyBSZWFjdC5SZWZPYmplY3Q8SFRNTEVsZW1lbnQ+KS5jdXJyZW50XHJcbiAgICAgICkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGRvbU5vZGUgJiYgZG9tTm9kZS5mb2N1cygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50b3VjaCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHM6IFAsIG5leHRTdGF0ZTogUykge1xyXG4gICAgbGV0IHNob3VsZFVwZGF0ZSA9XHJcbiAgICAgICFzaGFsbG93RXF1YWwoXHJcbiAgICAgICAgdGhpcy5wcm9wcyxcclxuICAgICAgICBuZXh0UHJvcHMsXHJcbiAgICAgICAgIXRoaXMucHJvcHMucmVSZW5kZXJzV2hlbkNvbnRleHRDaGFuZ2VzID8gJ2Zvcm1Db250ZXh0JyA6IHVuZGVmaW5lZFxyXG4gICAgICApIHx8ICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcclxuICAgIHJldHVybiBzaG91bGRVcGRhdGU7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0VmFsaWRhdGlvbkNsYXNzKGV4dHJhRXJyb3JzPzogVmFsaWRhdGlvbkVycm9yW10pIHtcclxuICAgIGlmICghdGhpcy5wcm9wcy5zaG93VmFsaWRhdGlvbiB8fCAhdGhpcy5zdGF0ZS50b3VjaGVkKSB7XHJcbiAgICAgIHJldHVybiAndmFsaWRhdGlvbl9fc3VjY2Vzcyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5pc1ZhbGlkICYmXHJcbiAgICAgICghdGhpcy5wcm9wcy5lcnJvcnMgfHwgdGhpcy5wcm9wcy5lcnJvcnMubGVuZ3RoID09PSAwKSAmJlxyXG4gICAgICAoIXRoaXMuc3RhdGUuZXJyb3JzIHx8IHRoaXMuc3RhdGUuZXJyb3JzLmxlbmd0aCA9PT0gMCkgJiZcclxuICAgICAgKCFleHRyYUVycm9ycyB8fCBleHRyYUVycm9ycy5sZW5ndGggPT09IDApXHJcbiAgICAgID8gJ3ZhbGlkYXRpb25fX3N1Y2Nlc3MnXHJcbiAgICAgIDogJ3ZhbGlkYXRpb25fX2Vycm9yJztcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXJEZWZhdWx0VmFsaWRhdGlvbihleHRyYUVycm9ycz86IFZhbGlkYXRpb25FcnJvcltdKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5wcm9wcy5zaG93VmFsaWRhdGlvbikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGxldCBmaW5hbEVycm9yczogVmFsaWRhdGlvbkVycm9yW10gPSB0aGlzLnN0YXRlLmVycm9ycztcclxuICAgIGlmICghZmluYWxFcnJvcnMpIHtcclxuICAgICAgZmluYWxFcnJvcnMgPSBbXTtcclxuICAgIH1cclxuICAgIGlmIChleHRyYUVycm9ycykge1xyXG4gICAgICBmaW5hbEVycm9ycyA9IGZpbmFsRXJyb3JzLmNvbmNhdChleHRyYUVycm9ycyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5lcnJvcnMpIHtcclxuICAgICAgZmluYWxFcnJvcnMgPSBmaW5hbEVycm9ycy5jb25jYXQodGhpcy5wcm9wcy5lcnJvcnMpO1xyXG4gICAgfVxyXG4gICAgZmluYWxFcnJvcnMgPSBmaW5hbEVycm9ycy5maWx0ZXIoaSA9PiBpKTtcclxuICAgIGlmIChmaW5hbEVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMubGFzdFZhbGlkYXRpb24gPSBmaW5hbEVycm9ycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInZhbGlkYXRpb25fX2l0ZW1cIj5cclxuICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YWxpZGF0aW9uX19jb250YWluZXJcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidmFsaWRhdGlvbl9fdWxcIj57dGhpcy5sYXN0VmFsaWRhdGlvbn08L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaGFuZGxlQ2hhbmdlKFxyXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUeXBlPixcclxuICAgIGlzVmFsaWQ/OiBib29sZWFuLFxyXG4gICAgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JbXSA9IFtdXHJcbiAgKSB7XHJcbiAgICBsZXQgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBpZiAoXHJcbiAgICAgICF0aGlzLnByb3BzLm9uVGhlRmxpZ2h0VmFsaWRhdGUgfHxcclxuICAgICAgKHRoaXMucHJvcHMub25UaGVGbGlnaHRWYWxpZGF0ZSAmJiB0aGlzLnByb3BzLm9uVGhlRmxpZ2h0VmFsaWRhdGUodmFsdWUpKVxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UodmFsdWUsIGlzVmFsaWQsIGVycm9ycyk7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgcmVzLmlzVmFsaWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc3Vic2NyaWJlU2VsZihwcm9wczogUCkge1xyXG4gICAgaWYgKCFwcm9wcy5pZ25vcmVDb250ZXh0ICYmIHByb3BzLmZvcm1Db250ZXh0KSB7XHJcbiAgICAgIHByb3BzLmZvcm1Db250ZXh0LnN1YnNjcmliZSh0aGlzLmNvbXBvbmVudElkLCB7XHJcbiAgICAgICAgY29tcG9uZW50QXBpOiB7XHJcbiAgICAgICAgICBkaXNhYmxlQ29tcG9uZW50OiB0aGlzLmRpc2FibGVDb21wb25lbnQsXHJcbiAgICAgICAgICBlbmFibGVDb21wb25lbnQ6IHRoaXMuZW5hYmxlQ29tcG9uZW50LFxyXG4gICAgICAgICAgdG91Y2g6IHRoaXMudG91Y2gsXHJcbiAgICAgICAgICB1blRvdWNoOiB0aGlzLnVuVG91Y2gsXHJcbiAgICAgICAgICBzY3JvbGxUbzogdGhpcy5zY3JvbGxUbyxcclxuICAgICAgICAgIGZvY3VzOiB0aGlzLmZvY3VzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgaXNWYWxpZDogdGhpcy5zdGF0ZS5pc1ZhbGlkLFxyXG4gICAgICAgICAgZXJyb3JzOiB0aGlzLnN0YXRlLmVycm9ycyxcclxuICAgICAgICAgIG5hbWU6IHRoaXMucHJvcHMudmFsaWRhdGlvbk5hbWVcclxuICAgICAgICAgICAgPyB0aGlzLnByb3BzLnZhbGlkYXRpb25OYW1lXHJcbiAgICAgICAgICAgIDogdGhpcy5wcm9wcy50aXRsZVxyXG4gICAgICAgICAgICA/IHRoaXMucHJvcHMudGl0bGVcclxuICAgICAgICAgICAgOiB0aGlzLnByb3BzLmxhYmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGhhbmRsZUJsdXIoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MVHlwZT4pIHtcclxuICAgIHRoaXMucHJvcHMub25CbHVyICYmIHRoaXMucHJvcHMub25CbHVyKCk7XHJcbiAgICBsZXQgc3RhdGUgPSB7IGZvY3VzZWQ6IGZhbHNlIH07XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUudG91Y2hlZCAmJiB0aGlzLnByb3BzLnRvdWNoT24gPT09ICdibHVyJykge1xyXG4gICAgICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oc3RhdGUsIHsgdG91Y2hlZDogdHJ1ZSB9KTtcclxuICAgICAgdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGhhbmRsZUZvY3VzKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTFR5cGU+KSB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzICYmIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcclxuICAgICAgbGV0IHN0YXRlID0geyBmb2N1c2VkOiB0cnVlIH07XHJcbiAgICAgIGlmICghdGhpcy5zdGF0ZS50b3VjaGVkICYmIHRoaXMucHJvcHMudG91Y2hPbiA9PT0gJ2ZvY3VzJykge1xyXG4gICAgICAgIHN0YXRlID0gT2JqZWN0LmFzc2lnbihzdGF0ZSwgeyB0b3VjaGVkOiB0cnVlIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0RGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5kaXNhYmxlZCA/IHRoaXMuc3RhdGUuZGlzYWJsZWQgOiB0aGlzLnByb3BzLmRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldFZhbGlkKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHsgaXNWYWxpZDogdHJ1ZSwgZXJyb3JzOiBbXSB9KSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pZ25vcmVDb250ZXh0KSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLmZvcm1Db250ZXh0ICYmXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZm9ybUNvbnRleHQudXBkYXRlQ2FsbGJhY2sodGhpcy5jb21wb25lbnRJZCwge1xyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcnM6IFtdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzZXRJbnZhbGlkKGVycm9yczogVmFsaWRhdGlvbkVycm9yW10gPSBbXSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHsgaXNWYWxpZDogZmFsc2UsIGVycm9ycyB9KSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5pZ25vcmVDb250ZXh0KSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLmZvcm1Db250ZXh0ICYmXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZm9ybUNvbnRleHQudXBkYXRlQ2FsbGJhY2sodGhpcy5jb21wb25lbnRJZCwge1xyXG4gICAgICAgICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3JzOiBlcnJvcnMsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlckxhYmVsKHRvdWNoYWJsZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMudG9vbHRpcCB8fCAodGhpcy5wcm9wcy50b29sdGlwICYmIHRoaXMucHJvcHMudGl0bGUpKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0b3VjaGFibGUgPyAnJyA6ICdsYWJlbC0tbm8tdG91Y2gnfT5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RvdWNoYWJsZSA/ICcnIDogJ2xhYmVsLS1uby10b3VjaCd9PlxyXG4gICAgICAgICAge3RoaXMucHJvcHMubGFiZWx9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIHt0aGlzLnJlbmRlclRvb2x0aXAoKX1cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVuZGVyVGl0bGUoKSB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMudG9vbHRpcCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy50aXRsZTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICB7dGhpcy5wcm9wcy50aXRsZX1cclxuICAgICAgICB7dGhpcy5yZW5kZXJUb29sdGlwKCl9XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGhhbmRsZVZhbHVlQ2hhbmdlKFxyXG4gICAgdmFsdWU6IHN0cmluZyxcclxuICAgIGlzVmFsaWQ6IGJvb2xlYW4gPSB0cnVlLFxyXG4gICAgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JbXSA9IFtdLFxyXG4gICAgcHJvcHM6IFAgPSB0aGlzLnByb3BzLFxyXG4gICAgaW5pdGlhbGl6aW5nOiBib29sZWFuID0gZmFsc2VcclxuICApOiB7XHJcbiAgICBpc1ZhbGlkOiBib29sZWFuO1xyXG4gICAgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JbXTtcclxuICB9IHtcclxuICAgIGlmICghaW5pdGlhbGl6aW5nICYmICF0aGlzLnN0YXRlLmhhbmRsZVZhbHVlQ2hhbmdlRW5hYmxlZCkge1xyXG4gICAgICByZXR1cm4geyBpc1ZhbGlkLCBlcnJvcnM6IFtdIH07XHJcbiAgICB9XHJcbiAgICBpZiAocHJvcHMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKGRlZmF1bHRCYXNlVHJhbnNsYXRpb25zKTtcclxuICAgICAgZXJyb3JzLnB1c2godHJhbnNsYXRpb25zLnJlcXVpcmVkKTtcclxuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFwcm9wcy5yZXF1aXJlZCAmJiAhdmFsdWUpIHtcclxuICAgICAgICBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAocHJvcHMudmFsaWRhdG9ycykge1xyXG4gICAgICAgICAgaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICBwcm9wcy52YWxpZGF0b3JzLmZvckVhY2godmFsaWRhdG9yID0+IHtcclxuICAgICAgICAgICAgbGV0IHZhbGlkSW5uZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgc3dpdGNoICh2YWxpZGF0b3IpIHtcclxuICAgICAgICAgICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgICAgICAgICB2YWxpZElubmVyID0gbmV3IFZhbGlkYXRvcnMuRW1haWxWYWxpZGF0b3IoKS5WYWxpZGF0ZShcclxuICAgICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIHByb3BzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICBlcnJvciA9PiBlcnJvcnMucHVzaChlcnJvcilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgICAgICAgICAgdmFsaWRJbm5lciA9IG5ldyBWYWxpZGF0b3JzLk51bWJlclZhbGlkYXRvcigpLlZhbGlkYXRlKFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgcHJvcHMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICAgIGVycm9yID0+IGVycm9ycy5wdXNoKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgJ2xhdGl0dWRlJzpcclxuICAgICAgICAgICAgICAgIHZhbGlkSW5uZXIgPSBuZXcgVmFsaWRhdG9ycy5MYXRpdHVkZVZhbGlkYXRvcigpLlZhbGlkYXRlKFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgcHJvcHMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICAgIGVycm9yID0+IGVycm9ycy5wdXNoKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgJ2xvbmdpdHVkZSc6XHJcbiAgICAgICAgICAgICAgICB2YWxpZElubmVyID0gbmV3IFZhbGlkYXRvcnMuTG9uZ2l0dWRlVmFsaWRhdG9yKCkuVmFsaWRhdGUoXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBwcm9wcy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gZXJyb3JzLnB1c2goZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSAndXJsJzpcclxuICAgICAgICAgICAgICAgIHZhbGlkSW5uZXIgPSBuZXcgVmFsaWRhdG9ycy5VcmxWYWxpZGF0b3IoKS5WYWxpZGF0ZShcclxuICAgICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIHByb3BzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICBlcnJvciA9PiBlcnJvcnMucHVzaChlcnJvcilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWYWxpZGF0b3IgJHt2YWxpZGF0b3J9IG5vdCBpbXBsZW1lbnRlZGApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkICYmICF2YWxpZElubmVyKSB7XHJcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IHZhbGlkSW5uZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvcHMuY3VzdG9tVmFsaWRhdG9ycykge1xyXG4gICAgICAgICAgcHJvcHMuY3VzdG9tVmFsaWRhdG9ycy5mb3JFYWNoKGN1c3RvbVZhbGlkYXRvciA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2YWxpZElubmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhbGlkSW5uZXIgPSBjdXN0b21WYWxpZGF0b3IuVmFsaWRhdGUoXHJcbiAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgcHJvcHMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgZXJyb3IgPT4gZXJyb3JzLnB1c2goZXJyb3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkICYmICF2YWxpZElubmVyKSB7XHJcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IHZhbGlkSW5uZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJvcHMub25FcnJvcnNDaGFuZ2VkICYmIHByb3BzLm9uRXJyb3JzQ2hhbmdlZChlcnJvcnMpO1xyXG4gICAgaWYgKCFpbml0aWFsaXppbmcpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlLCBpc1ZhbGlkLCBlcnJvcnMgfSk7XHJcbiAgICAgIGlmICghcHJvcHMuaWdub3JlQ29udGV4dCkge1xyXG4gICAgICAgIHByb3BzLmZvcm1Db250ZXh0ICYmXHJcbiAgICAgICAgICBwcm9wcy5mb3JtQ29udGV4dC51cGRhdGVDYWxsYmFjayh0aGlzLmNvbXBvbmVudElkLCB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgICBpc1ZhbGlkOiBpc1ZhbGlkLFxyXG4gICAgICAgICAgICAgIGVycm9yczogZXJyb3JzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7IGlzVmFsaWQsIGVycm9ycyB9O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlclRvb2x0aXAoXHJcbiAgICBjb250ZW50OiBKU1guRWxlbWVudCA9IDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsLS1oZWxwLWljb25cIj4/PC9zcGFuPlxyXG4gICkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMudG9vbHRpcCA/IChcclxuICAgICAgPFRpcHB5XHJcbiAgICAgICAgY29udGVudD17dGhpcy5wcm9wcy50b29sdGlwfVxyXG4gICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgYW5pbWF0aW9uPVwic2NhbGUtc3VidGxlXCJcclxuICAgICAgICBhcnJvdz17ZmFsc2V9XHJcbiAgICAgICAgZHVyYXRpb249ezIwMH1cclxuICAgICAgICBkZWxheT17Wzc1LCAwXX1cclxuICAgICAgICBkaXN0YW5jZT17OH1cclxuICAgICAgICBpbnRlcmFjdGl2ZT17dHJ1ZX1cclxuICAgICAgICBhcHBlbmRUbz17ZG9jdW1lbnQ/LmJvZHl9XHJcbiAgICAgICAgdHJpZ2dlcj1cIm1vdXNlZW50ZXIgZm9jdXNcIlxyXG4gICAgICAgIHsuLi50aGlzLnByb3BzLnRvb2x0aXBQcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIHRhYkluZGV4PXswfT57Y29udGVudH08L3NwYW4+XHJcbiAgICAgIDwvVGlwcHk+XHJcbiAgICApIDogKFxyXG4gICAgICBjb250ZW50XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldFRyYW5zbGF0aW9ucyhcclxuICAgIF9kZWZhdWx0VHJhbnNsYXRpb25zOiBCYXNlVHJhbnNsYXRpb25zXHJcbiAgKTogVHJhbnNsYXRpb25zVCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5fZGVmYXVsdFRyYW5zbGF0aW9ucyxcclxuICAgICAgLi4udGhpcy5wcm9wcy50cmFuc2xhdGlvbnMsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCYXNlSW5wdXQ7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdmFsaWRhdG9ycy9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9idXR0b24nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tib3gnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvZHluYW1pY1N1Ym1pdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9mb3JtJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2lucHV0R3JvdXAnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXRIZWFkZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvbW9uZXkvTW9uZXknO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvb3BlbmluZ0hvdXJzL29wZW5pbmdIb3Vyc0RheSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9vcGVuaW5nSG91cnMvb3BlbmluZ0hvdXJzU3BlY2lhbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9vcGVuaW5nSG91cnMvb3BlbmluZ0hvdXJzV2Vlayc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9yYWRpbyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9yYWRpb0NvbnRhaW5lcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QvU2VsZWN0JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3N1Ym1pdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90YWdzJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGV4dEFyZWEnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGltZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90aW1lU3Bhbic7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=