webpackHotUpdate("main",{

/***/ "./src/lib/components/base/input/BaseInput.tsx":
/*!*****************************************************!*\
  !*** ./src/lib/components/base/input/BaseInput.tsx ***!
  \*****************************************************/
/*! exports provided: BaseInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseInput", function() { return BaseInput; });
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
        errors.push('Required');
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
        trigger: "mouseenter focus"
      }, this.props.tooltipProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        tabIndex: 0
      }, content)) : content;
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

  reactHotLoader.register(BaseInput, "BaseInput", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\base\\input\\BaseInput.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\base\\input\\BaseInput.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvYmFzZS9pbnB1dC9CYXNlSW5wdXQudHN4Il0sIm5hbWVzIjpbIkJhc2VJbnB1dCIsInByb3BzIiwic3Vic2NyaWJlIiwiY29tcG9uZW50SWQiLCJndWlkIiwiaW5wdXRSZWYiLCJjb250YWluZXJSZWYiLCJsYXN0VmFsaWRhdGlvbiIsInJlcyIsImhhbmRsZVZhbHVlQ2hhbmdlIiwidmFsdWUiLCJzdGF0ZSIsImlzVmFsaWQiLCJlcnJvcnMiLCJ0b3VjaGVkIiwiZGVmYXVsdFRvdWNoZWQiLCJkaXNhYmxlZCIsImZvY3VzZWQiLCJoYW5kbGVWYWx1ZUNoYW5nZUVuYWJsZWQiLCJSZWFjdCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVCbHVyIiwiaGFuZGxlRm9jdXMiLCJzZXRWYWxpZCIsImZvY3VzIiwic2Nyb2xsVG8iLCJzZXRJbnZhbGlkIiwiZGlzYWJsZUNvbXBvbmVudCIsImVuYWJsZUNvbXBvbmVudCIsInRvdWNoIiwidW5Ub3VjaCIsInN1YnNjcmliZVNlbGYiLCJpZ25vcmVDb250ZXh0IiwiZm9ybUNvbnRleHQiLCJ1blN1YnNjcmliZSIsIm9sZFByb3BzIiwidmFsaWRhdG9ycyIsImN1c3RvbVZhbGlkYXRvcnMiLCJyZXF1aXJlZCIsImRvbU5vZGUiLCJSZWFjdERPTSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwic2V0U3RhdGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJzaG91bGRVcGRhdGUiLCJzaGFsbG93RXF1YWwiLCJyZVJlbmRlcnNXaGVuQ29udGV4dENoYW5nZXMiLCJ1bmRlZmluZWQiLCJleHRyYUVycm9ycyIsInNob3dWYWxpZGF0aW9uIiwibGVuZ3RoIiwiZmluYWxFcnJvcnMiLCJjb25jYXQiLCJmaWx0ZXIiLCJpIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZXZlbnQiLCJ0YXJnZXQiLCJvblRoZUZsaWdodFZhbGlkYXRlIiwib25DaGFuZ2UiLCJjb21wb25lbnRBcGkiLCJ2YWxpZGF0aW9uIiwibmFtZSIsInZhbGlkYXRpb25OYW1lIiwidGl0bGUiLCJsYWJlbCIsImUiLCJvbkJsdXIiLCJ0b3VjaE9uIiwiT2JqZWN0IiwiYXNzaWduIiwib25Gb2N1cyIsInVwZGF0ZUNhbGxiYWNrIiwidG91Y2hhYmxlIiwidG9vbHRpcCIsInJlbmRlclRvb2x0aXAiLCJpbml0aWFsaXppbmciLCJwdXNoIiwiZm9yRWFjaCIsInZhbGlkYXRvciIsInZhbGlkSW5uZXIiLCJWYWxpZGF0b3JzIiwiVmFsaWRhdGUiLCJlcnJvciIsIkVycm9yIiwiY3VzdG9tVmFsaWRhdG9yIiwib25FcnJvcnNDaGFuZ2VkIiwiY29udGVudCIsInRvb2x0aXBQcm9wcyIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFFQTtBQTBETyxJQUFNQSxTQUFiO0FBQUE7QUFBQTtBQUFBOztBQTJCRSxxQkFBWUMsS0FBWixFQUFpRDtBQUFBOztBQUFBLFFBQTNCQyxTQUEyQix1RUFBTixJQUFNOztBQUFBOztBQUMvQyxtRkFBTUQsS0FBTjtBQUQrQyxVQVYxQ0UsV0FVMEMsR0FWNUJDLDJEQUFJLEVBVXdCO0FBQUEsVUFSMUNDLFFBUTBDO0FBQUEsVUFOdkNDLFlBTXVDO0FBQUEsVUFGekNDLGNBRXlDOztBQUUvQyxRQUFNQyxHQUFHLEdBQUcsTUFBS0MsaUJBQUwsQ0FBdUIsTUFBS1IsS0FBTCxDQUFXUyxLQUFsQyxFQUF5QyxJQUF6QyxFQUErQyxFQUEvQyxFQUFtRFQsS0FBbkQsRUFBMEQsSUFBMUQsQ0FBWjs7QUFDQSxVQUFLVSxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQUFFSixHQUFHLENBQUNJLE9BREY7QUFFWEMsWUFBTSxFQUFFTCxHQUFHLENBQUNLLE1BRkQ7QUFHWEgsV0FBSyxFQUFFVCxLQUFL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RUFBRSxLQUFLL0UsS0FBTCxDQUFXK0UsT0FEdEI7QUFFRSxpQkFBUyxFQUFDLFFBRlo7QUFHRSxpQkFBUyxFQUFDLGNBSFo7QUFJRSxhQUFLLEVBQUUsS0FKVDtBQUtFLGdCQUFRLEVBQUUsR0FMWjtBQU1FLGFBQUssRUFBRSxDQUFDLEVBQUQsRUFBSyxDQUFMLENBTlQ7QUFPRSxnQkFBUSxFQUFFLENBUFo7QUFRRSxtQkFBVyxFQUFFLElBUmY7QUFTRSxlQUFPLEVBQUM7QUFUVixTQVVNLEtBQUsvRSxLQUFMLENBQVc2RixZQVZqQixHQVlFO0FBQU0sZ0JBQVEsRUFBRTtBQUFoQixTQUFvQkQsT0FBcEIsQ0FaRixDQURLLEdBZ0JMQSxPQWhCRjtBQWtCRDtBQTlaSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsRUFJVTFFLCtDQUpWO0FBQWFuQixTLENBS0crRixZLEdBQXNDO0FBQ2xEQyxXQUFTLEVBQUU3QyxTQUR1QztBQUVsRFosVUFBUSxFQUFFLEtBRndDO0FBR2xEZ0MsT0FBSyxFQUFFcEIsU0FIMkM7QUFJbERuQyxVQUFRLEVBQUUsS0FKd0M7QUFLbEQwRCxTQUFPLEVBQUUsT0FMeUM7QUFNbER6QyxlQUFhLEVBQUUsS0FObUM7QUFPbERvQixnQkFBYyxFQUFFLElBUGtDO0FBUWxEbkIsYUFBVyxFQUFFaUIsU0FScUM7QUFTbERELDZCQUEyQixFQUFFO0FBVHFCLEM7ZUEyWnZDbEQsUztBQUFBOzs7Ozs7Ozs7OzBCQWhhRkEsUyIsImZpbGUiOiJhMGNlMWJiLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgVGlwcHksIHsgVGlwcHlQcm9wcyB9IGZyb20gJ0B0aXBweS5qcy9yZWFjdCc7XHJcblxyXG4vLyBNaXNjXHJcbmltcG9ydCAqIGFzIFZhbGlkYXRvcnMgZnJvbSAnLi4vLi4vLi4vdmFsaWRhdG9ycyc7XHJcbmltcG9ydCBndWlkIGZyb20gJy4uLy4uL3V0aWxzL0d1aWQnO1xyXG5pbXBvcnQgeyBGb3JtQ29udGV4dFByb3BzIH0gZnJvbSAnLi4vLi4vZm9ybS9Gb3JtQ29udGV4dCc7XHJcbmltcG9ydCB7IHNoYWxsb3dFcXVhbCB9IGZyb20gJy4uLy4uL3V0aWxzL1NoYWxsb3dFcXVhbCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudEFwaSB7XHJcbiAgZm9jdXM6ICgpID0+IHZvaWQ7XHJcbiAgdG91Y2g6ICgpID0+IHZvaWQ7XHJcbiAgdW5Ub3VjaDogKCkgPT4gdm9pZDtcclxuICBlbmFibGVDb21wb25lbnQ6ICgpID0+IHZvaWQ7XHJcbiAgZGlzYWJsZUNvbXBvbmVudDogKCkgPT4gdm9pZDtcclxuICBzY3JvbGxUbzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVmFsaWRhdGlvbkVycm9yID0gc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcblxyXG5leHBvcnQgdHlwZSBBbGxvd2VkSHRtbEVsZW1lbnRzID1cclxuICB8IEhUTUxJbnB1dEVsZW1lbnRcclxuICB8IEhUTUxTZWxlY3RFbGVtZW50XHJcbiAgfCBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG5cclxuZXhwb3J0IHR5cGUgQmFzZUlucHV0UHJvcHM8SFRNTFR5cGUgZXh0ZW5kcyBBbGxvd2VkSHRtbEVsZW1lbnRzPiA9IHtcclxuICBpZD86IHN0cmluZztcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGxhYmVsPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgdG9vbHRpcD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHRvb2x0aXBQcm9wcz86IFRpcHB5UHJvcHM7XHJcbiAgdmFsdWU/OiBzdHJpbmc7XHJcbiAgb25DaGFuZ2U/OiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFR5cGU+LCBpc1ZhbGlkOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcclxuICBjdXN0b21WYWxpZGF0b3JzPzogVmFsaWRhdG9ycy5JQmFzZVZhbGlkYXRvcltdO1xyXG4gIHZhbGlkYXRvcnM/OiBWYWxpZGF0b3JzLlZhbGlkYXRvclR5cGVzW107XHJcbiAgbm9WYWxpZGF0ZT86IGJvb2xlYW47XHJcbiAgdmFsaWRhdGlvbk5hbWU/OiBzdHJpbmc7XHJcbiAgdG91Y2hPbj86ICdmb2N1cycgfCAnYmx1cic7XHJcbiAgaWdub3JlQ29udGV4dD86IGJvb2xlYW47XHJcbiAgb25UaGVGbGlnaHRWYWxpZGF0ZT86ICh2YWx1ZTogc3RyaW5nKSA9PiBib29sZWFuO1xyXG4gIG9uRm9jdXM/OiAoZTogUmVhY3QuU3ludGhldGljRXZlbnQ8e30+KSA9PiB2b2lkO1xyXG4gIG9uQmx1cj86ICgpID0+IHZvaWQ7XHJcbiAgb25DbGljaz86IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB2b2lkO1xyXG4gIHRpdGxlPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgb25LZXlEb3duPzogKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB2b2lkO1xyXG4gIGVycm9ycz86IFZhbGlkYXRpb25FcnJvcltdO1xyXG4gIG9uRXJyb3JzQ2hhbmdlZD86IChlcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdKSA9PiB2b2lkO1xyXG4gIHNob3dWYWxpZGF0aW9uPzogYm9vbGVhbjtcclxuICByZVJlbmRlcnNXaGVuQ29udGV4dENoYW5nZXM/OiBib29sZWFuO1xyXG4gIGRlZmF1bHRUb3VjaGVkPzogYm9vbGVhbjtcclxufSAmIEZvcm1Db250ZXh0UHJvcHM7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VJbnB1dFN0YXRlIHtcclxuICBpc1ZhbGlkOiBib29sZWFuO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JbXTtcclxuICB2YWxpZGF0b3I6IHVuZGVmaW5lZDtcclxuICB0b3VjaGVkOiBib29sZWFuO1xyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIGZvY3VzZWQ6IGJvb2xlYW47XHJcbiAgaGFuZGxlVmFsdWVDaGFuZ2VFbmFibGVkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZUlucHV0PFxyXG4gIFAgZXh0ZW5kcyBCYXNlSW5wdXRQcm9wczxIVE1MVHlwZT4sXHJcbiAgUyBleHRlbmRzIEJhc2VJbnB1dFN0YXRlLFxyXG4gIEhUTUxUeXBlIGV4dGVuZHMgQWxsb3dlZEh0bWxFbGVtZW50c1xyXG4+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFAsIFM+IGltcGxlbWVudHMgQ29tcG9uZW50QXBpIHtcclxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogQmFzZUlucHV0UHJvcHM8bmV2ZXI+ID0ge1xyXG4gICAgY2xhc3NOYW1lOiB1bmRlZmluZWQsXHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICBsYWJlbDogdW5kZWZpbmVkLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgdG91Y2hPbjogJ2ZvY3VzJyxcclxuICAgIGlnbm9yZUNvbnRleHQ6IGZhbHNlLFxyXG4gICAgc2hvd1ZhbGlkYXRpb246IHRydWUsXHJcbiAgICBmb3JtQ29udGV4dDogdW5kZWZpbmVkLFxyXG4gICAgcmVSZW5kZXJzV2hlbkNvbnRleHRDaGFuZ2VzOiBmYWxzZSxcclxuICB9O1xyXG5cclxuICBwdWJsaWMgY29tcG9uZW50SWQgPSBndWlkKCk7XHJcblxyXG4gIHB1YmxpYyBpbnB1dFJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxUeXBlPjtcclxuXHJcbiAgcHJvdGVjdGVkIGNvbnRhaW5lclJlZjpcclxuICAgIHwgUmVhY3QuUmVmPEhUTUxEaXZFbGVtZW50PlxyXG4gICAgfCBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBwcml2YXRlIGxhc3RWYWxpZGF0aW9uOiBKU1guRWxlbWVudFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogUCwgc3Vic2NyaWJlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgY29uc3QgcmVzID0gdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSh0aGlzLnByb3BzLnZhbHVlLCB0cnVlLCBbXSwgcHJvcHMsIHRydWUpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNWYWxpZDogcmVzLmlzVmFsaWQsXHJcbiAgICAgIGVycm9yczogcmVzLmVycm9ycyxcclxuICAgICAgdmFsdWU6IHByb3BzLnZhbHVlID8gcHJvcHMudmFsdWUgOiAnJyxcclxuICAgICAgdG91Y2hlZDogcHJvcHMuZGVmYXVsdFRvdWNoZWQsXHJcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgZm9jdXNlZDogZmFsc2UsXHJcbiAgICAgIGhhbmRsZVZhbHVlQ2hhbmdlRW5hYmxlZDogdHJ1ZSxcclxuICAgIH0gYXMgUztcclxuICAgIHRoaXMuY29udGFpbmVyUmVmID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gICAgdGhpcy5pbnB1dFJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MVHlwZT4oKTtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlQmx1ciA9IHRoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVGb2N1cyA9IHRoaXMuaGFuZGxlRm9jdXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2V0VmFsaWQgPSB0aGlzLnNldFZhbGlkLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZvY3VzID0gdGhpcy5mb2N1cy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zY3JvbGxUbyA9IHRoaXMuc2Nyb2xsVG8uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc2V0SW52YWxpZCA9IHRoaXMuc2V0SW52YWxpZC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kaXNhYmxlQ29tcG9uZW50ID0gdGhpcy5kaXNhYmxlQ29tcG9uZW50LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmVuYWJsZUNvbXBvbmVudCA9IHRoaXMuZW5hYmxlQ29tcG9uZW50LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnRvdWNoID0gdGhpcy50b3VjaC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51blRvdWNoID0gdGhpcy51blRvdWNoLmJpbmQodGhpcyk7XHJcbiAgICBpZiAoc3Vic2NyaWJlKSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaWJlU2VsZihwcm9wcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMuaWdub3JlQ29udGV4dCkge1xyXG4gICAgICB0aGlzLnByb3BzLmZvcm1Db250ZXh0ICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JtQ29udGV4dC51blN1YnNjcmliZSh0aGlzLmNvbXBvbmVudElkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUob2xkUHJvcHM6IFApIHtcclxuICAgIGlmIChcclxuICAgICAgb2xkUHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUgfHxcclxuICAgICAgb2xkUHJvcHMudmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy52YWxpZGF0b3JzIHx8XHJcbiAgICAgIG9sZFByb3BzLmN1c3RvbVZhbGlkYXRvcnMgIT09IHRoaXMucHJvcHMuY3VzdG9tVmFsaWRhdG9ycyB8fFxyXG4gICAgICBvbGRQcm9wcy5yZXF1aXJlZCAhPT0gdGhpcy5wcm9wcy5yZXF1aXJlZFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UodGhpcy5wcm9wcy52YWx1ZSwgdHJ1ZSwgW10sIHRoaXMucHJvcHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNjcm9sbFRvKCkge1xyXG4gICAgY29uc3QgZG9tTm9kZTogSFRNTERpdkVsZW1lbnQgPSBSZWFjdERPTS5maW5kRE9NTm9kZShcclxuICAgICAgKHRoaXMuY29udGFpbmVyUmVmIGFzIFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4pLmN1cnJlbnRcclxuICAgICkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBkb21Ob2RlICYmIGRvbU5vZGUuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG91Y2goKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdG91Y2hlZDogdHJ1ZSB9KTtcclxuICAgIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UodGhpcy5zdGF0ZS52YWx1ZSB8fCAnJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdW5Ub3VjaCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0b3VjaGVkOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkaXNhYmxlQ29tcG9uZW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpc2FibGVkOiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVuYWJsZUNvbXBvbmVudCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNhYmxlZDogZmFsc2UgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZm9jdXMoKSB7XHJcbiAgICBpZiAodGhpcy5pbnB1dFJlZikge1xyXG4gICAgICBjb25zdCBkb21Ob2RlOiBIVE1MRWxlbWVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKFxyXG4gICAgICAgICh0aGlzLmlucHV0UmVmIGFzIFJlYWN0LlJlZk9iamVjdDxIVE1MRWxlbWVudD4pLmN1cnJlbnRcclxuICAgICAgKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgZG9tTm9kZSAmJiBkb21Ob2RlLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRvdWNoKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wczogUCwgbmV4dFN0YXRlOiBTKSB7XHJcbiAgICBsZXQgc2hvdWxkVXBkYXRlID1cclxuICAgICAgIXNoYWxsb3dFcXVhbChcclxuICAgICAgICB0aGlzLnByb3BzLFxyXG4gICAgICAgIG5leHRQcm9wcyxcclxuICAgICAgICAhdGhpcy5wcm9wcy5yZVJlbmRlcnNXaGVuQ29udGV4dENoYW5nZXMgPyAnZm9ybUNvbnRleHQnIDogdW5kZWZpbmVkXHJcbiAgICAgICkgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xyXG4gICAgcmV0dXJuIHNob3VsZFVwZGF0ZTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRWYWxpZGF0aW9uQ2xhc3MoZXh0cmFFcnJvcnM/OiBWYWxpZGF0aW9uRXJyb3JbXSkge1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLnNob3dWYWxpZGF0aW9uIHx8ICF0aGlzLnN0YXRlLnRvdWNoZWQpIHtcclxuICAgICAgcmV0dXJuICd2YWxpZGF0aW9uX19zdWNjZXNzJztcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmlzVmFsaWQgJiZcclxuICAgICAgKCF0aGlzLnByb3BzLmVycm9ycyB8fCB0aGlzLnByb3BzLmVycm9ycy5sZW5ndGggPT09IDApICYmXHJcbiAgICAgICghdGhpcy5zdGF0ZS5lcnJvcnMgfHwgdGhpcy5zdGF0ZS5lcnJvcnMubGVuZ3RoID09PSAwKSAmJlxyXG4gICAgICAoIWV4dHJhRXJyb3JzIHx8IGV4dHJhRXJyb3JzLmxlbmd0aCA9PT0gMClcclxuICAgICAgPyAndmFsaWRhdGlvbl9fc3VjY2VzcydcclxuICAgICAgOiAndmFsaWRhdGlvbl9fZXJyb3InO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHJlbmRlckRlZmF1bHRWYWxpZGF0aW9uKGV4dHJhRXJyb3JzPzogVmFsaWRhdGlvbkVycm9yW10pIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnByb3BzLnNob3dWYWxpZGF0aW9uKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpbmFsRXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JbXSA9IHRoaXMuc3RhdGUuZXJyb3JzO1xyXG4gICAgaWYgKCFmaW5hbEVycm9ycykge1xyXG4gICAgICBmaW5hbEVycm9ycyA9IFtdO1xyXG4gICAgfVxyXG4gICAgaWYgKGV4dHJhRXJyb3JzKSB7XHJcbiAgICAgIGZpbmFsRXJyb3JzID0gZmluYWxFcnJvcnMuY29uY2F0KGV4dHJhRXJyb3JzKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLmVycm9ycykge1xyXG4gICAgICBmaW5hbEVycm9ycyA9IGZpbmFsRXJyb3JzLmNvbmNhdCh0aGlzLnByb3BzLmVycm9ycyk7XHJcbiAgICB9XHJcbiAgICBmaW5hbEVycm9ycyA9IGZpbmFsRXJyb3JzLmZpbHRlcihpID0+IGkpO1xyXG4gICAgaWYgKGZpbmFsRXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5sYXN0VmFsaWRhdGlvbiA9IGZpbmFsRXJyb3JzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidmFsaWRhdGlvbl9faXRlbVwiPlxyXG4gICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhbGlkYXRpb25fX2NvbnRhaW5lclwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJ2YWxpZGF0aW9uX191bFwiPnt0aGlzLmxhc3RWYWxpZGF0aW9ufTwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoYW5kbGVDaGFuZ2UoXHJcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFR5cGU+LFxyXG4gICAgaXNWYWxpZD86IGJvb2xlYW4sXHJcbiAgICBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdID0gW11cclxuICApIHtcclxuICAgIGxldCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIGlmIChcclxuICAgICAgIXRoaXMucHJvcHMub25UaGVGbGlnaHRWYWxpZGF0ZSB8fFxyXG4gICAgICAodGhpcy5wcm9wcy5vblRoZUZsaWdodFZhbGlkYXRlICYmIHRoaXMucHJvcHMub25UaGVGbGlnaHRWYWxpZGF0ZSh2YWx1ZSkpXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgcmVzID0gdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSh2YWx1ZSwgaXNWYWxpZCwgZXJyb3JzKTtcclxuICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCByZXMuaXNWYWxpZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzdWJzY3JpYmVTZWxmKHByb3BzOiBQKSB7XHJcbiAgICBpZiAoIXByb3BzLmlnbm9yZUNvbnRleHQgJiYgcHJvcHMuZm9ybUNvbnRleHQpIHtcclxuICAgICAgcHJvcHMuZm9ybUNvbnRleHQuc3Vic2NyaWJlKHRoaXMuY29tcG9uZW50SWQsIHtcclxuICAgICAgICBjb21wb25lbnRBcGk6IHtcclxuICAgICAgICAgIGRpc2FibGVDb21wb25lbnQ6IHRoaXMuZGlzYWJsZUNvbXBvbmVudCxcclxuICAgICAgICAgIGVuYWJsZUNvbXBvbmVudDogdGhpcy5lbmFibGVDb21wb25lbnQsXHJcbiAgICAgICAgICB0b3VjaDogdGhpcy50b3VjaCxcclxuICAgICAgICAgIHVuVG91Y2g6IHRoaXMudW5Ub3VjaCxcclxuICAgICAgICAgIHNjcm9sbFRvOiB0aGlzLnNjcm9sbFRvLFxyXG4gICAgICAgICAgZm9jdXM6IHRoaXMuZm9jdXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgICAgICBpc1ZhbGlkOiB0aGlzLnN0YXRlLmlzVmFsaWQsXHJcbiAgICAgICAgICBlcnJvcnM6IHRoaXMuc3RhdGUuZXJyb3JzLFxyXG4gICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy52YWxpZGF0aW9uTmFtZVxyXG4gICAgICAgICAgICA/IHRoaXMucHJvcHMudmFsaWRhdGlvbk5hbWVcclxuICAgICAgICAgICAgOiB0aGlzLnByb3BzLnRpdGxlXHJcbiAgICAgICAgICAgID8gdGhpcy5wcm9wcy50aXRsZVxyXG4gICAgICAgICAgICA6IHRoaXMucHJvcHMubGFiZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaGFuZGxlQmx1cihlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxUeXBlPikge1xyXG4gICAgdGhpcy5wcm9wcy5vbkJsdXIgJiYgdGhpcy5wcm9wcy5vbkJsdXIoKTtcclxuICAgIGxldCBzdGF0ZSA9IHsgZm9jdXNlZDogZmFsc2UgfTtcclxuICAgIGlmICghdGhpcy5zdGF0ZS50b3VjaGVkICYmIHRoaXMucHJvcHMudG91Y2hPbiA9PT0gJ2JsdXInKSB7XHJcbiAgICAgIHN0YXRlID0gT2JqZWN0LmFzc2lnbihzdGF0ZSwgeyB0b3VjaGVkOiB0cnVlIH0pO1xyXG4gICAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaGFuZGxlRm9jdXMoZTogUmVhY3QuRm9jdXNFdmVudDxIVE1MVHlwZT4pIHtcclxuICAgIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uRm9jdXMgJiYgdGhpcy5wcm9wcy5vbkZvY3VzKGUpO1xyXG4gICAgICBsZXQgc3RhdGUgPSB7IGZvY3VzZWQ6IHRydWUgfTtcclxuICAgICAgaWYgKCF0aGlzLnN0YXRlLnRvdWNoZWQgJiYgdGhpcy5wcm9wcy50b3VjaE9uID09PSAnZm9jdXMnKSB7XHJcbiAgICAgICAgc3RhdGUgPSBPYmplY3QuYXNzaWduKHN0YXRlLCB7IHRvdWNoZWQ6IHRydWUgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXREaXNhYmxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmRpc2FibGVkID8gdGhpcy5zdGF0ZS5kaXNhYmxlZCA6IHRoaXMucHJvcHMuZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0VmFsaWQoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAoKSA9PiAoeyBpc1ZhbGlkOiB0cnVlLCBlcnJvcnM6IFtdIH0pLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmlnbm9yZUNvbnRleHQpIHtcclxuICAgICAgICAgIHRoaXMucHJvcHMuZm9ybUNvbnRleHQgJiZcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtQ29udGV4dC51cGRhdGVDYWxsYmFjayh0aGlzLmNvbXBvbmVudElkLCB7XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGVycm9yczogW10sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldEludmFsaWQoZXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JbXSA9IFtdKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAoKSA9PiAoeyBpc1ZhbGlkOiBmYWxzZSwgZXJyb3JzIH0pLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmlnbm9yZUNvbnRleHQpIHtcclxuICAgICAgICAgIHRoaXMucHJvcHMuZm9ybUNvbnRleHQgJiZcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtQ29udGV4dC51cGRhdGVDYWxsYmFjayh0aGlzLmNvbXBvbmVudElkLCB7XHJcbiAgICAgICAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBlcnJvcnM6IGVycm9ycyxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcmVuZGVyTGFiZWwodG91Y2hhYmxlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIGlmICghdGhpcy5wcm9wcy50b29sdGlwIHx8ICh0aGlzLnByb3BzLnRvb2x0aXAgJiYgdGhpcy5wcm9wcy50aXRsZSkpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RvdWNoYWJsZSA/ICcnIDogJ2xhYmVsLS1uby10b3VjaCd9PlxyXG4gICAgICAgICAge3RoaXMucHJvcHMubGFiZWx9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dG91Y2hhYmxlID8gJycgOiAnbGFiZWwtLW5vLXRvdWNoJ30+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbH1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAge3RoaXMucmVuZGVyVG9vbHRpcCgpfVxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXJUaXRsZSgpIHtcclxuICAgIGlmICghdGhpcy5wcm9wcy50b29sdGlwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnRpdGxlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnRpdGxlfVxyXG4gICAgICAgIHt0aGlzLnJlbmRlclRvb2x0aXAoKX1cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaGFuZGxlVmFsdWVDaGFuZ2UoXHJcbiAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgaXNWYWxpZDogYm9vbGVhbiA9IHRydWUsXHJcbiAgICBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdID0gW10sXHJcbiAgICBwcm9wczogUCA9IHRoaXMucHJvcHMsXHJcbiAgICBpbml0aWFsaXppbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICk6IHtcclxuICAgIGlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBlcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdO1xyXG4gIH0ge1xyXG4gICAgaWYgKCFpbml0aWFsaXppbmcgJiYgIXRoaXMuc3RhdGUuaGFuZGxlVmFsdWVDaGFuZ2VFbmFibGVkKSB7XHJcbiAgICAgIHJldHVybiB7IGlzVmFsaWQsIGVycm9yczogW10gfTtcclxuICAgIH1cclxuICAgIGlmIChwcm9wcy5yZXF1aXJlZCAmJiAhdmFsdWUpIHtcclxuICAgICAgZXJyb3JzLnB1c2goJ1JlcXVpcmVkJyk7XHJcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghcHJvcHMucmVxdWlyZWQgJiYgIXZhbHVlKSB7XHJcbiAgICAgICAgaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHByb3BzLnZhbGlkYXRvcnMpIHtcclxuICAgICAgICAgIGlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgcHJvcHMudmFsaWRhdG9ycy5mb3JFYWNoKHZhbGlkYXRvciA9PiB7XHJcbiAgICAgICAgICAgIGxldCB2YWxpZElubmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgdmFsaWRJbm5lciA9IG5ldyBWYWxpZGF0b3JzLkVtYWlsVmFsaWRhdG9yKCkuVmFsaWRhdGUoXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBwcm9wcy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gZXJyb3JzLnB1c2goZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcclxuICAgICAgICAgICAgICAgIHZhbGlkSW5uZXIgPSBuZXcgVmFsaWRhdG9ycy5OdW1iZXJWYWxpZGF0b3IoKS5WYWxpZGF0ZShcclxuICAgICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIHByb3BzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICBlcnJvciA9PiBlcnJvcnMucHVzaChlcnJvcilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlICdsYXRpdHVkZSc6XHJcbiAgICAgICAgICAgICAgICB2YWxpZElubmVyID0gbmV3IFZhbGlkYXRvcnMuTGF0aXR1ZGVWYWxpZGF0b3IoKS5WYWxpZGF0ZShcclxuICAgICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIHByb3BzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgICBlcnJvciA9PiBlcnJvcnMucHVzaChlcnJvcilcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlICdsb25naXR1ZGUnOlxyXG4gICAgICAgICAgICAgICAgdmFsaWRJbm5lciA9IG5ldyBWYWxpZGF0b3JzLkxvbmdpdHVkZVZhbGlkYXRvcigpLlZhbGlkYXRlKFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgcHJvcHMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICAgIGVycm9yID0+IGVycm9ycy5wdXNoKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgJ3VybCc6XHJcbiAgICAgICAgICAgICAgICB2YWxpZElubmVyID0gbmV3IFZhbGlkYXRvcnMuVXJsVmFsaWRhdG9yKCkuVmFsaWRhdGUoXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICBwcm9wcy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gZXJyb3JzLnB1c2goZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVmFsaWRhdG9yICR7dmFsaWRhdG9yfSBub3QgaW1wbGVtZW50ZWRgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCAmJiAhdmFsaWRJbm5lcikge1xyXG4gICAgICAgICAgICAgIGlzVmFsaWQgPSB2YWxpZElubmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHByb3BzLmN1c3RvbVZhbGlkYXRvcnMpIHtcclxuICAgICAgICAgIHByb3BzLmN1c3RvbVZhbGlkYXRvcnMuZm9yRWFjaChjdXN0b21WYWxpZGF0b3IgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmFsaWRJbm5lciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YWxpZElubmVyID0gY3VzdG9tVmFsaWRhdG9yLlZhbGlkYXRlKFxyXG4gICAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgICAgIHByb3BzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgIGVycm9yID0+IGVycm9ycy5wdXNoKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoaXNWYWxpZCAmJiAhdmFsaWRJbm5lcikge1xyXG4gICAgICAgICAgICAgIGlzVmFsaWQgPSB2YWxpZElubmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3BzLm9uRXJyb3JzQ2hhbmdlZCAmJiBwcm9wcy5vbkVycm9yc0NoYW5nZWQoZXJyb3JzKTtcclxuICAgIGlmICghaW5pdGlhbGl6aW5nKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSwgaXNWYWxpZCwgZXJyb3JzIH0pO1xyXG4gICAgICBpZiAoIXByb3BzLmlnbm9yZUNvbnRleHQpIHtcclxuICAgICAgICBwcm9wcy5mb3JtQ29udGV4dCAmJlxyXG4gICAgICAgICAgcHJvcHMuZm9ybUNvbnRleHQudXBkYXRlQ2FsbGJhY2sodGhpcy5jb21wb25lbnRJZCwge1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgaXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICAgICAgICBlcnJvcnM6IGVycm9ycyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBpc1ZhbGlkLCBlcnJvcnMgfTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCByZW5kZXJUb29sdGlwKFxyXG4gICAgY29udGVudDogSlNYLkVsZW1lbnQgPSA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbC0taGVscC1pY29uXCI+Pzwvc3Bhbj5cclxuICApIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLnRvb2x0aXAgPyAoXHJcbiAgICAgIDxUaXBweVxyXG4gICAgICAgIGNvbnRlbnQ9e3RoaXMucHJvcHMudG9vbHRpcH1cclxuICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxyXG4gICAgICAgIGFuaW1hdGlvbj1cInNjYWxlLXN1YnRsZVwiXHJcbiAgICAgICAgYXJyb3c9e2ZhbHNlfVxyXG4gICAgICAgIGR1cmF0aW9uPXsyMDB9XHJcbiAgICAgICAgZGVsYXk9e1s3NSwgMF19XHJcbiAgICAgICAgZGlzdGFuY2U9ezh9XHJcbiAgICAgICAgaW50ZXJhY3RpdmU9e3RydWV9XHJcbiAgICAgICAgdHJpZ2dlcj1cIm1vdXNlZW50ZXIgZm9jdXNcIlxyXG4gICAgICAgIHsuLi50aGlzLnByb3BzLnRvb2x0aXBQcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIHRhYkluZGV4PXswfT57Y29udGVudH08L3NwYW4+XHJcbiAgICAgIDwvVGlwcHk+XHJcbiAgICApIDogKFxyXG4gICAgICBjb250ZW50XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBCYXNlSW5wdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=