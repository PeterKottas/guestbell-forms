webpackHotUpdate("main",{

/***/ "./src/lib/components/submit/Submit.tsx":
/*!**********************************************!*\
  !*** ./src/lib/components/submit/Submit.tsx ***!
  \**********************************************/
/*! exports provided: defaultSubmitTranslations, SubmitRaw, Submit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSubmitTranslations", function() { return defaultSubmitTranslations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitRaw", function() { return SubmitRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Submit", function() { return Submit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/input/BaseInput */ "./src/lib/components/base/input/BaseInput.tsx");
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/Button */ "./src/lib/components/button/Button.tsx");
/* harmony import */ var _form_withFormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form/withFormContext */ "./src/lib/components/form/withFormContext.tsx");
/* harmony import */ var _form_FormValidationSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../form/FormValidationSummary */ "./src/lib/components/form/FormValidationSummary.tsx");
/* harmony import */ var _subComponents_SubmitValidationSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subComponents/SubmitValidationSummary */ "./src/lib/components/submit/subComponents/SubmitValidationSummary.tsx");
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Libs





 // Misc

var defaultSubmitTranslations = _objectSpread({}, _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_1__["defaultBaseTranslations"], {
  hangOn: 'Hang on',
  needsFixing: '... needs fixing'
});
var SubmitRaw =
/*#__PURE__*/
function (_BaseInput) {
  _inherits(SubmitRaw, _BaseInput);

  function SubmitRaw(props) {
    var _this;

    _classCallCheck(this, SubmitRaw);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SubmitRaw).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SubmitRaw, [{
    key: "render",
    value: function render() {
      var disabled = this.isDisabled();
      var translations = this.getTranslations(defaultSubmitTranslations);
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], _extends({}, this.props, {
        className: "".concat(this.props.className ? this.props.className : ''),
        onClick: this.handleClick,
        disabled: disabled,
        buttonProps: _objectSpread({}, this.props.buttonProps, {
          type: 'submit',
          title: disabled ? this.props.disabledTitle : this.props.buttonProps && this.props.buttonProps.title
        }),
        tooltip: this.props.tooltip ? this.props.tooltip : this.props.showValidationSummaryTooltip && !this.props.formContext.isFormValid && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_form_FormValidationSummary__WEBPACK_IMPORTED_MODULE_4__["FormValidationSummaryRaw"], {
          title: translations.hangOn,
          footer: translations.needsFixing,
          containerClassName: "",
          headerClassName: "submitValidationSummary__header",
          footerClassName: "submitValidationSummary__footer",
          Component: _subComponents_SubmitValidationSummary__WEBPACK_IMPORTED_MODULE_5__["default"],
          formContext: this.props.formContext
        }),
        tooltipProps: _objectSpread({
          theme: 'validation'
        }, this.props.tooltipProps)
      }), this.props.children);
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      if (this.props.preventsDefault) {
        e.preventDefault();
      }

      this.props.onClick && this.props.onClick(e);
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      var disabled = this.getDisabled();
      return disabled ? disabled : this.props.validateForm && this.props.formContext ? !this.props.formContext.isFormValid : false;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SubmitRaw;
}(_base_input_BaseInput__WEBPACK_IMPORTED_MODULE_1__["BaseInput"]);
SubmitRaw.defaultProps = Object.assign({}, _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_1__["BaseInput"].defaultProps, {
  validateForm: true,
  ignoreContext: true,
  reRendersWhenContextChanges: true,
  showValidationSummaryTooltip: true,
  preventsDefault: true
});
var Submit = Object(_form_withFormContext__WEBPACK_IMPORTED_MODULE_3__["withFormContext"])(SubmitRaw);
var _default = Submit;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultSubmitTranslations, "defaultSubmitTranslations", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\submit\\Submit.tsx");
  reactHotLoader.register(SubmitRaw, "SubmitRaw", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\submit\\Submit.tsx");
  reactHotLoader.register(Submit, "Submit", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\submit\\Submit.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\submit\\Submit.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvc3VibWl0L1N1Ym1pdC50c3giXSwibmFtZXMiOlsiZGVmYXVsdFN1Ym1pdFRyYW5zbGF0aW9ucyIsImRlZmF1bHRCYXNlVHJhbnNsYXRpb25zIiwiaGFuZ09uIiwibmVlZHNGaXhpbmciLCJTdWJtaXRSYXciLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiYmluZCIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInRyYW5zbGF0aW9ucyIsImdldFRyYW5zbGF0aW9ucyIsImNsYXNzTmFtZSIsImJ1dHRvblByb3BzIiwidHlwZSIsInRpdGxlIiwiZGlzYWJsZWRUaXRsZSIsInRvb2x0aXAiLCJzaG93VmFsaWRhdGlvblN1bW1hcnlUb29sdGlwIiwiZm9ybUNvbnRleHQiLCJpc0Zvcm1WYWxpZCIsIlN1Ym1pdFZhbGlkYXRpb25TdW1tYXJ5IiwidGhlbWUiLCJ0b29sdGlwUHJvcHMiLCJjaGlsZHJlbiIsImUiLCJwcmV2ZW50c0RlZmF1bHQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2xpY2siLCJnZXREaXNhYmxlZCIsInZhbGlkYXRlRm9ybSIsIkJhc2VJbnB1dCIsImRlZmF1bHRQcm9wcyIsIk9iamVjdCIsImFzc2lnbiIsImlnbm9yZUNvbnRleHQiLCJyZVJlbmRlcnNXaGVuQ29udGV4dENoYW5nZXMiLCJTdWJtaXQiLCJ3aXRoRm9ybUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0NBR0E7O0FBQ08sSUFBTUEseUJBQXlCLHFCQUNqQ0MsNkVBRGlDO0FBRXBDQyxRQUFNLEVBQUUsU0FGNEI7QUFHcENDLGFBQVcsRUFBRTtBQUh1QixFQUEvQjtBQWtCQSxJQUFNQyxTQUFiO0FBQUE7QUFBQTtBQUFBOztBQWNFLHFCQUFZQyxLQUFaLEVBQWdDO0FBQUE7O0FBQUE7O0FBQzlCLG1GQUFNQSxLQUFOO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQiwrQkFBbkI7QUFGOEI7QUFHL0I7O0FBakJIO0FBQUE7QUFBQSw2QkFtQmtCO0FBQ2QsVUFBTUMsUUFBUSxHQUFHLEtBQUtDLFVBQUwsRUFBakI7QUFDQSxVQUFNQyxZQUFZLEdBQUcsS0FBS0MsZUFBTCxDQUFxQlgseUJBQXJCLENBQXJCO0FBQ0EsYUFDRSxvREFBQyxxREFBRCxlQUNNLEtBQUtLLEtBRFg7QUFFRSxpQkFBUyxZQUFLLEtBQUtBLEtBQUwsQ0FBV08sU0FBWCxHQUF1QixLQUFLUCxLQUFMLENBQVdPLFNBQWxDLEdBQThDLEVBQW5ELENBRlg7QUFHRSxlQUFPLEVBQUUsS0FBS04sV0FIaEI7QUFJRSxnQkFBUSxFQUFFRSxRQUpaO0FBS0UsbUJBQVcsb0JBQ04sS0FBS0gsS0FBTCxDQUFXUSxXQURMO0FBRVRDLGNBQUksRUFBRSxRQUZHO0FBR1RDLGVBQUssRUFBRVAsUUFBUSxHQUNYLEtBQUtILEtBQUwsQ0FBV1csYUFEQSxHQUVYLEtBQUtYLEtBQUwsQ0FBV1EsV0FBWCxJQUEwQixLQUFLUixLQUFMLENBQVdRLFdBQVgsQ0FBdUJFO0FBTDVDLFVBTGI7QUFZRSxlQUFPLEVBQ0wsS0FBS1YsS0FBTCxDQUFXWSxPQUFYLEdBQ0ksS0FBS1osS0FBTCxDQUFXWSxPQURmLEdBRUksS0FBS1osS0FBTCxDQUFXYSw0QkFBWCxJQUNBLENBQUMsS0FBS2IsS0FBTCxDQUFXYyxXQUFYLENBQXVCQyxXQUR4QixJQUVFLG9EQUFDLG9GQUFEO0FBQ0UsZUFBSyxFQUFFVixZQUFZLENBQUNSLE1BRHRCO0FBRUUsZ0JBQU0sRUFBRVEsWUFBWSxDQUFDUCxXQUZ2QjtBQUdFLDRCQUFrQixFQUFDLEVBSHJCO0FBSUUseUJBQWUsRUFBQyxpQ0FKbEI7QUFLRSx5QkFBZSxFQUFDLGlDQUxsQjtBQU1FLG1CQUFTLEVBQUVrQiw4RUFOYjtBQU9FLHFCQUFXLEVBQUUsS0FBS2hCLEtBQUwsQ0FBV2M7QUFQMUIsVUFqQlY7QUE0QkUsb0JBQVk7QUFDVkcsZUFBSyxFQUFFO0FBREcsV0FFUCxLQUFLakIsS0FBTCxDQUFXa0IsWUFGSjtBQTVCZCxVQWlDRyxLQUFLbEIsS0FBTCxDQUFXbUIsUUFqQ2QsQ0FERjtBQXFDRDtBQTNESDtBQUFBO0FBQUEsZ0NBNkRzQkMsQ0E3RHRCLEVBNkQ4RDtBQUMxRCxVQUFJLEtBQUtwQixLQUFMLENBQVdxQixlQUFmLEVBQWdDO0FBQzlCRCxTQUFDLENBQUNFLGNBQUY7QUFDRDs7QUFDRCxXQUFLdEIsS0FBTCxDQUFXdUIsT0FBWCxJQUFzQixLQUFLdkIsS0FBTCxDQUFXdUIsT0FBWCxDQUFtQkgsQ0FBbkIsQ0FBdEI7QUFDRDtBQWxFSDtBQUFBO0FBQUEsaUNBb0V1QjtBQUNuQixVQUFNakIsUUFBUSxHQUFHLEtBQUtxQixXQUFMLEVBQWpCO0FBQ0EsYUFBT3JCLFFBQVEsR0FDWEEsUUFEVyxHQUVYLEtBQUtILEtBQUwsQ0FBV3lCLFlBQVgsSUFBMkIsS0FBS3pCLEtBQUwsQ0FBV2MsV0FBdEMsR0FDQSxDQUFDLEtBQUtkLEtBQUwsQ0FBV2MsV0FBWCxDQUF1QkMsV0FEeEIsR0FFQSxLQUpKO0FBS0Q7QUEzRUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEVBQStCVywrREFBL0I7QUFBYTNCLFMsQ0FNRzRCLFksR0FBZUMsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkgsK0RBQVMsQ0FBQ0MsWUFBNUIsRUFBMEM7QUFDckVGLGNBQVksRUFBRSxJQUR1RDtBQUVyRUssZUFBYSxFQUFFLElBRnNEO0FBR3JFQyw2QkFBMkIsRUFBRSxJQUh3QztBQUlyRWxCLDhCQUE0QixFQUFFLElBSnVDO0FBS3JFUSxpQkFBZSxFQUFFO0FBTG9ELENBQTFDLEM7QUF3RXhCLElBQU1XLE1BQU0sR0FBR0MsNkVBQWUsQ0FBY2xDLFNBQWQsQ0FBOUI7ZUFFUWlDLE07QUFBQTs7Ozs7Ozs7OzswQkFsR0ZyQyx5QjswQkFrQkFJLFM7MEJBOEVBaUMsTSIsImZpbGUiOiI3MDQ3NGFkLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VJbnB1dFByb3BzLFxyXG4gIEJhc2VJbnB1dFN0YXRlLFxyXG4gIEJhc2VJbnB1dCxcclxuICBkZWZhdWx0QmFzZVRyYW5zbGF0aW9ucyxcclxufSBmcm9tICcuLi9iYXNlL2lucHV0L0Jhc2VJbnB1dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uUHJvcHMgfSBmcm9tICcuLi9idXR0b24vQnV0dG9uJztcclxuaW1wb3J0IHsgd2l0aEZvcm1Db250ZXh0IH0gZnJvbSAnLi4vZm9ybS93aXRoRm9ybUNvbnRleHQnO1xyXG5pbXBvcnQgeyBGb3JtVmFsaWRhdGlvblN1bW1hcnlSYXcgfSBmcm9tICcuLy4uL2Zvcm0vRm9ybVZhbGlkYXRpb25TdW1tYXJ5JztcclxuaW1wb3J0IFN1Ym1pdFZhbGlkYXRpb25TdW1tYXJ5IGZyb20gJy4vc3ViQ29tcG9uZW50cy9TdWJtaXRWYWxpZGF0aW9uU3VtbWFyeSc7XHJcblxyXG4vLyBNaXNjXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0U3VibWl0VHJhbnNsYXRpb25zID0ge1xyXG4gIC4uLmRlZmF1bHRCYXNlVHJhbnNsYXRpb25zLFxyXG4gIGhhbmdPbjogJ0hhbmcgb24nLFxyXG4gIG5lZWRzRml4aW5nOiAnLi4uIG5lZWRzIGZpeGluZycsXHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBTdWJtaXRUcmFuc2xhdGlvbnMgPSBQYXJ0aWFsPHR5cGVvZiBkZWZhdWx0U3VibWl0VHJhbnNsYXRpb25zPjtcclxuXHJcbmV4cG9ydCB0eXBlIFN1Ym1pdFByb3BzID0gQmFzZUlucHV0UHJvcHM8bmV2ZXI+ICZcclxuICBCdXR0b25Qcm9wcyAmIHtcclxuICAgIG9uQ2xpY2s/OiAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHZvaWQ7XHJcbiAgICB2YWxpZGF0ZUZvcm0/OiBib29sZWFuO1xyXG4gICAgZGlzYWJsZWRUaXRsZT86IHN0cmluZztcclxuICAgIHNob3dWYWxpZGF0aW9uU3VtbWFyeVRvb2x0aXA/OiBib29sZWFuO1xyXG4gIH07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN1Ym1pdFN0YXRlIGV4dGVuZHMgQmFzZUlucHV0U3RhdGUge31cclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJtaXRSYXcgZXh0ZW5kcyBCYXNlSW5wdXQ8XHJcbiAgU3VibWl0UHJvcHMsXHJcbiAgU3VibWl0U3RhdGUsXHJcbiAgbmV2ZXIsXHJcbiAgU3VibWl0VHJhbnNsYXRpb25zXHJcbj4ge1xyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgQmFzZUlucHV0LmRlZmF1bHRQcm9wcywge1xyXG4gICAgdmFsaWRhdGVGb3JtOiB0cnVlLFxyXG4gICAgaWdub3JlQ29udGV4dDogdHJ1ZSxcclxuICAgIHJlUmVuZGVyc1doZW5Db250ZXh0Q2hhbmdlczogdHJ1ZSxcclxuICAgIHNob3dWYWxpZGF0aW9uU3VtbWFyeVRvb2x0aXA6IHRydWUsXHJcbiAgICBwcmV2ZW50c0RlZmF1bHQ6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTdWJtaXRQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb25zID0gdGhpcy5nZXRUcmFuc2xhdGlvbnMoZGVmYXVsdFN1Ym1pdFRyYW5zbGF0aW9ucyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJyd9YH1cclxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxyXG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICBidXR0b25Qcm9wcz17e1xyXG4gICAgICAgICAgLi4udGhpcy5wcm9wcy5idXR0b25Qcm9wcyxcclxuICAgICAgICAgIHR5cGU6ICdzdWJtaXQnLFxyXG4gICAgICAgICAgdGl0bGU6IGRpc2FibGVkXHJcbiAgICAgICAgICAgID8gdGhpcy5wcm9wcy5kaXNhYmxlZFRpdGxlXHJcbiAgICAgICAgICAgIDogdGhpcy5wcm9wcy5idXR0b25Qcm9wcyAmJiB0aGlzLnByb3BzLmJ1dHRvblByb3BzLnRpdGxlLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdG9vbHRpcD17XHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRvb2x0aXBcclxuICAgICAgICAgICAgPyB0aGlzLnByb3BzLnRvb2x0aXBcclxuICAgICAgICAgICAgOiB0aGlzLnByb3BzLnNob3dWYWxpZGF0aW9uU3VtbWFyeVRvb2x0aXAgJiZcclxuICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5mb3JtQ29udGV4dC5pc0Zvcm1WYWxpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Rm9ybVZhbGlkYXRpb25TdW1tYXJ5UmF3XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXt0cmFuc2xhdGlvbnMuaGFuZ09ufVxyXG4gICAgICAgICAgICAgICAgICBmb290ZXI9e3RyYW5zbGF0aW9ucy5uZWVkc0ZpeGluZ31cclxuICAgICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgaGVhZGVyQ2xhc3NOYW1lPVwic3VibWl0VmFsaWRhdGlvblN1bW1hcnlfX2hlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgIGZvb3RlckNsYXNzTmFtZT1cInN1Ym1pdFZhbGlkYXRpb25TdW1tYXJ5X19mb290ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBDb21wb25lbnQ9e1N1Ym1pdFZhbGlkYXRpb25TdW1tYXJ5fVxyXG4gICAgICAgICAgICAgICAgICBmb3JtQ29udGV4dD17dGhpcy5wcm9wcy5mb3JtQ29udGV4dH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0b29sdGlwUHJvcHM9e3tcclxuICAgICAgICAgIHRoZW1lOiAndmFsaWRhdGlvbicsXHJcbiAgICAgICAgICAuLi50aGlzLnByb3BzLnRvb2x0aXBQcm9wcyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlQ2xpY2soZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcclxuICAgIGlmICh0aGlzLnByb3BzLnByZXZlbnRzRGVmYXVsdCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2sgJiYgdGhpcy5wcm9wcy5vbkNsaWNrKGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0Rpc2FibGVkKCkge1xyXG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmdldERpc2FibGVkKCk7XHJcbiAgICByZXR1cm4gZGlzYWJsZWRcclxuICAgICAgPyBkaXNhYmxlZFxyXG4gICAgICA6IHRoaXMucHJvcHMudmFsaWRhdGVGb3JtICYmIHRoaXMucHJvcHMuZm9ybUNvbnRleHRcclxuICAgICAgPyAhdGhpcy5wcm9wcy5mb3JtQ29udGV4dC5pc0Zvcm1WYWxpZFxyXG4gICAgICA6IGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN1Ym1pdCA9IHdpdGhGb3JtQ29udGV4dDxTdWJtaXRQcm9wcz4oU3VibWl0UmF3KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1Ym1pdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==