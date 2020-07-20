webpackHotUpdate("main",{

/***/ "./src/lib/components/openingHours/openingHoursSpecial/OpeningHoursSpecial.tsx":
/*!*************************************************************************************!*\
  !*** ./src/lib/components/openingHours/openingHoursSpecial/OpeningHoursSpecial.tsx ***!
  \*************************************************************************************/
/*! exports provided: DateInput, OpeningHoursSpecialRaw, OpeningHoursSpecial, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateInput", function() { return DateInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursSpecialRaw", function() { return OpeningHoursSpecialRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursSpecial", function() { return OpeningHoursSpecial; });
/* harmony import */ var material_design_icons_content_svg_production_ic_add_circle_outline_24px_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg */ "./node_modules/material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg");
/* harmony import */ var material_design_icons_content_svg_production_ic_add_circle_outline_24px_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_content_svg_production_ic_add_circle_outline_24px_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_design_icons_action_svg_production_ic_event_24px_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-design-icons/action/svg/production/ic_event_24px.svg */ "./node_modules/material-design-icons/action/svg/production/ic_event_24px.svg");
/* harmony import */ var material_design_icons_action_svg_production_ic_event_24px_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_action_svg_production_ic_event_24px_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_OpeningHoursUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/OpeningHoursUtil */ "./src/lib/components/openingHours/utils/OpeningHoursUtil.tsx");
/* harmony import */ var _openingHoursDay_OpeningHoursDay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../openingHoursDay/OpeningHoursDay */ "./src/lib/components/openingHours/openingHoursDay/OpeningHoursDay.tsx");
/* harmony import */ var _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../base/input/BaseInput */ "./src/lib/components/base/input/BaseInput.tsx");
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../button/Button */ "./src/lib/components/button/Button.tsx");
/* harmony import */ var _form_withFormContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../form/withFormContext */ "./src/lib/components/form/withFormContext.tsx");
/* harmony import */ var _themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../themeProvider/withThemeContext */ "./src/lib/components/themeProvider/withThemeContext.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};


 // Libs



try {
  var DatePicker = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/es/index.js").default;
} catch (_unused) {
  DatePicker = undefined;
} // Misc








var DAY_FORMAT = 'dd/M/yyyy';
var DateInput =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(DateInput, _React$PureComponent);

  function DateInput() {
    _classCallCheck(this, DateInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(DateInput).apply(this, arguments));
  }

  _createClass(DateInput, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        blank: true,
        type: "primary",
        onClick: this.props.onClick
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        style: {
          display: 'flex'
        }
      }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](material_design_icons_action_svg_production_ic_event_24px_svg__WEBPACK_IMPORTED_MODULE_1__, {
        style: {
          marginRight: 4
        }
      }), this.props.children ? this.props.children : this.props.value));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return DateInput;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);

var defaultSpecialTranslations = _objectSpread({
  chooseDateError: 'Date not selected',
  chooseDate: 'Choose date'
}, _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_5__["defaultBaseTranslations"], {}, _openingHoursDay_OpeningHoursDay__WEBPACK_IMPORTED_MODULE_4__["defaultDayTranslations"], {}, _utils_OpeningHoursUtil__WEBPACK_IMPORTED_MODULE_3__["defaultTranslations"]);

var OpeningHoursSpecialRaw =
/*#__PURE__*/
function (_BaseInput) {
  _inherits(OpeningHoursSpecialRaw, _BaseInput);

  function OpeningHoursSpecialRaw(props) {
    var _this;

    _classCallCheck(this, OpeningHoursSpecialRaw);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OpeningHoursSpecialRaw).call(this, props));

    _this.removeDayClick = function (index) {
      return function () {
        return _this.props.onDaysChange(_this.props.days.filter(function (d, indexInner) {
          return indexInner !== index;
        }));
      };
    };

    _this.dateChanged = function (index, day) {
      return function (date) {
        var days = _this.props.days.slice(0);

        days[index] = _objectSpread({}, day, {
          date: date
        });

        _this.props.onDaysChange(days);
      };
    };

    _this.openingHoursChanged = function (index, day) {
      return function (openingHours) {
        var days = _this.props.days.slice(0);

        days[index] = _objectSpread({}, day, {}, openingHours);

        _this.props.onDaysChange(days);
      };
    };

    _this.state = _objectSpread({}, _this.state, {}, {
      touched: true
    });
    return _this;
  }

  _createClass(OpeningHoursSpecialRaw, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.days) {
        this.handleDates();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (this.props.days !== oldProps.days) {
        this.handleDates();
      }
    }
  }, {
    key: "touch",
    value: function touch() {
      return;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!DatePicker) {
        throw new Error('You need to install react-datepicker in order to use special day picker');
      }

      var translations = this.getTranslations(defaultSpecialTranslations);
      return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", _extends({}, this.props.id && {
        id: this.props.id
      }, {
        className: 'input__base openingHoursSpecial-input ' + this.getValidationClass() + ' ' + (this.props.className ? this.props.className : ''),
        ref: this.containerRef
      }), this.props.days.map(function (day, index) {
        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_openingHoursDay_OpeningHoursDay__WEBPACK_IMPORTED_MODULE_4__["OpeningHoursDay"], _extends({
          useCapacity: _this2.props.useCapacity
        }, _this2.props.id && {
          id: _this2.props.id + '-opening-hours-day-' + index.toString()
        }, {
          key: index,
          label: react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", null, _utils_OpeningHoursUtil__WEBPACK_IMPORTED_MODULE_3__["default"].getLabelSuffix(day, _this2.props.translations), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
            className: "float-right"
          }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], _extends({}, _this2.props.id && {
            id: _this2.props.id + '-remove-button-' + index.toString()
          }, {
            className: "openingHoursDay-input__button--remove line-height--0",
            circular: true,
            blank: true,
            type: "error",
            onClick: _this2.removeDayClick(index)
          }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](material_design_icons_content_svg_production_ic_add_circle_outline_24px_svg__WEBPACK_IMPORTED_MODULE_0__, null)))),
          openingHours: {
            times: day.times
          },
          onOpeningHoursChange: _this2.openingHoursChanged(index, day),
          title: react__WEBPACK_IMPORTED_MODULE_2__["createElement"](DatePicker, _extends({}, _this2.props.id && {
            id: _this2.props.id + '-date-picker-' + index.toString()
          }, {
            customInput: react__WEBPACK_IMPORTED_MODULE_2__["createElement"](DateInput, null, !day.date && translations.chooseDate),
            placeholder: _this2.props.placeholder,
            selected: day.date,
            dateFormat: DAY_FORMAT,
            onChange: _this2.dateChanged(index, day),
            excludeDates: _this2.props.days.filter(function (d) {
              return d.date;
            }),
            withPortal: true,
            minDate: new Date()
          })),
          translations: _this2.props.translations
        }));
      }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
        className: "bar"
      }), this.renderDefaultValidation());
    }
  }, {
    key: "handleDates",
    value: function handleDates() {
      var translations = this.getTranslations(defaultSpecialTranslations);
      var allDaysHaveDates = !this.props.days || this.props.days.every(function (d) {
        return Boolean(d.date);
      });

      if (allDaysHaveDates) {
        this.setValid();
      } else {
        this.setInvalid([translations.chooseDateError]);
      }
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return OpeningHoursSpecialRaw;
}(_base_input_BaseInput__WEBPACK_IMPORTED_MODULE_5__["BaseInput"]);
OpeningHoursSpecialRaw.defaultProps = Object.assign({}, _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_5__["BaseInput"].defaultProps, {
  type: 'openingHoursSpecial',
  placeholder: DAY_FORMAT
});
var OpeningHoursSpecial = Object(_themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_8__["withThemeContext"])(Object(_form_withFormContext__WEBPACK_IMPORTED_MODULE_7__["withFormContext"])(OpeningHoursSpecialRaw), 'openingHoursSpecial');
var _default = OpeningHoursSpecial;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DatePicker, "DatePicker", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\openingHours\\openingHoursSpecial\\OpeningHoursSpecial.tsx");
  reactHotLoader.register(DAY_FORMAT, "DAY_FORMAT", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\openingHours\\openingHoursSpecial\\OpeningHoursSpecial.tsx");
  reactHotLoader.register(DateInput, "DateInput", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\openingHours\\openingHoursSpecial\\OpeningHoursSpecial.tsx");
  reactHotLoader.register(defaultSpecialTranslations, "defaultSpecialTranslations", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\openingHours\\openingHoursSpecial\\OpeningHoursSpecial.tsx");
  reactHotLoader.register(OpeningHoursSpecialRaw, "OpeningHoursSpecialRaw", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\openingHours\\openingHoursSpecial\\OpeningHoursSpecial.tsx");
  reactHotLoader.register(OpeningHoursSpecial, "OpeningHoursSpecial", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\openingHours\\openingHoursSpecial\\OpeningHoursSpecial.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\openingHours\\openingHoursSpecial\\OpeningHoursSpecial.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvb3BlbmluZ0hvdXJzL29wZW5pbmdIb3Vyc1NwZWNpYWwvT3BlbmluZ0hvdXJzU3BlY2lhbC50c3giXSwibmFtZXMiOlsiRGF0ZVBpY2tlciIsInJlcXVpcmUiLCJkZWZhdWx0IiwidW5kZWZpbmVkIiwiREFZX0ZPUk1BVCIsIkRhdGVJbnB1dCIsInByb3BzIiwib25DbGljayIsImRpc3BsYXkiLCJtYXJnaW5SaWdodCIsImNoaWxkcmVuIiwidmFsdWUiLCJSZWFjdCIsImRlZmF1bHRTcGVjaWFsVHJhbnNsYXRpb25zIiwiY2hvb3NlRGF0ZUVycm9yIiwiY2hvb3NlRGF0ZSIsImRlZmF1bHRCYXNlVHJhbnNsYXRpb25zIiwiZGVmYXVsdERheVRyYW5zbGF0aW9ucyIsImRlZmF1bHRMYWJlbFRyYW5zbGF0aW9ucyIsIk9wZW5pbmdIb3Vyc1NwZWNpYWxSYXciLCJyZW1vdmVEYXlDbGljayIsImluZGV4Iiwib25EYXlzQ2hhbmdlIiwiZGF5cyIsImZpbHRlciIsImQiLCJpbmRleElubmVyIiwiZGF0ZUNoYW5nZWQiLCJkYXkiLCJkYXRlIiwic2xpY2UiLCJvcGVuaW5nSG91cnNDaGFuZ2VkIiwib3BlbmluZ0hvdXJzIiwic3RhdGUiLCJ0b3VjaGVkIiwiaGFuZGxlRGF0ZXMiLCJvbGRQcm9wcyIsIkVycm9yIiwidHJhbnNsYXRpb25zIiwiZ2V0VHJhbnNsYXRpb25zIiwiaWQiLCJnZXRWYWxpZGF0aW9uQ2xhc3MiLCJjbGFzc05hbWUiLCJjb250YWluZXJSZWYiLCJtYXAiLCJ1c2VDYXBhY2l0eSIsInRvU3RyaW5nIiwiT3BlbmluZ0hvdXJzVXRpbCIsImdldExhYmVsU3VmZml4IiwidGltZXMiLCJwbGFjZWhvbGRlciIsIkRhdGUiLCJyZW5kZXJEZWZhdWx0VmFsaWRhdGlvbiIsImFsbERheXNIYXZlRGF0ZXMiLCJldmVyeSIsIkJvb2xlYW4iLCJzZXRWYWxpZCIsInNldEludmFsaWQiLCJCYXNlSW5wdXQiLCJkZWZhdWx0UHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0eXBlIiwiT3BlbmluZ0hvdXJzU3BlY2lhbCIsIndpdGhUaGVtZUNvbnRleHQiLCJ3aXRoRm9ybUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBOztBQUNBLElBQUk7QUFDRixNQUFJQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMscUVBQUQsQ0FBUCxDQUE0QkMsT0FBN0M7QUFDRCxDQUZELENBRUUsZ0JBQU07QUFDTkYsWUFBVSxHQUFHRyxTQUFiO0FBQ0QsQyxDQUVEOzs7QUFDQTtBQUdBO0FBS0E7QUFNQTtBQUNBO0FBQ0E7QUFnQkEsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBRU8sSUFBTUMsU0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDZCQUlrQjtBQUNkLGFBQ0Usb0RBQUMscURBQUQ7QUFBUSxhQUFLLEVBQUUsSUFBZjtBQUFxQixZQUFJLEVBQUMsU0FBMUI7QUFBb0MsZUFBTyxFQUFFLEtBQUtDLEtBQUwsQ0FBV0M7QUFBeEQsU0FDRTtBQUFLLGFBQUssRUFBRTtBQUFFQyxpQkFBTyxFQUFFO0FBQVg7QUFBWixTQUNFLG9EQUFDLDBGQUFEO0FBQVUsYUFBSyxFQUFFO0FBQUVDLHFCQUFXLEVBQUU7QUFBZjtBQUFqQixRQURGLEVBRUcsS0FBS0gsS0FBTCxDQUFXSSxRQUFYLEdBQXNCLEtBQUtKLEtBQUwsQ0FBV0ksUUFBakMsR0FBNEMsS0FBS0osS0FBTCxDQUFXSyxLQUYxRCxDQURGLENBREY7QUFRRDtBQWJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxFQUErQkMsbURBQS9COztBQWdCQSxJQUFNQywwQkFBMEI7QUFDOUJDLGlCQUFlLEVBQUUsbUJBRGE7QUFFOUJDLFlBQVUsRUFBRTtBQUZrQixHQUczQkMsNkVBSDJCLE1BSTNCQyx1RkFKMkIsTUFLM0JDLDJFQUwyQixDQUFoQzs7QUFZTyxJQUFNQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFXRSxrQ0FBWWIsS0FBWixFQUE2QztBQUFBOztBQUFBOztBQUMzQyxnR0FBTUEsS0FBTjs7QUFEMkMsVUE0R3JDYyxjQTVHcUMsR0E0R3BCLFVBQUNDLEtBQUQ7QUFBQSxhQUFtQjtBQUFBLGVBQzFDLE1BQUtmLEtBQUwsQ0FBV2dCLFlBQVgsQ0FDRSxNQUFLaEIsS0FBTCxDQUFXaUIsSUFBWCxDQUFnQkMsTUFBaEIsQ0FBdUIsVUFBQ0MsQ0FBRCxFQUFJQyxVQUFKO0FBQUEsaUJBQW1CQSxVQUFVLEtBQUtMLEtBQWxDO0FBQUEsU0FBdkIsQ0FERixDQUQwQztBQUFBLE9BQW5CO0FBQUEsS0E1R29COztBQUFBLFVBaUhyQ00sV0FqSHFDLEdBaUh2QixVQUFDTixLQUFELEVBQWdCTyxHQUFoQjtBQUFBLGFBQTRDLFVBQ2hFQyxJQURnRSxFQUU3RDtBQUNILFlBQUlOLElBQUksR0FBRyxNQUFLakIsS0FBTCxDQUFXaUIsSUFBWCxDQUFnQk8sS0FBaEIsQ0FBc0IsQ0FBdEIsQ0FBWDs7QUFDQVAsWUFBSSxDQUFDRixLQUFELENBQUoscUJBQW1CTyxHQUFuQjtBQUF3QkMsY0FBSSxFQUFKQTtBQUF4Qjs7QUFDQSxjQUFLdkIsS0FBTCxDQUFXZ0IsWUFBWCxDQUF3QkMsSUFBeEI7QUFDRCxPQU5xQjtBQUFBLEtBakh1Qjs7QUFBQSxVQXlIckNRLG1CQXpIcUMsR0F5SGYsVUFDNUJWLEtBRDRCLEVBRTVCTyxHQUY0QjtBQUFBLGFBR3pCLFVBQUFJLFlBQVksRUFBSTtBQUNuQixZQUFJVCxJQUFJLEdBQUcsTUFBS2pCLEtBQUwsQ0FBV2lCLElBQVgsQ0FBZ0JPLEtBQWhCLENBQXNCLENBQXRCLENBQVg7O0FBQ0FQLFlBQUksQ0FBQ0YsS0FBRCxDQUFKLHFCQUFtQk8sR0FBbkIsTUFBMkJJLFlBQTNCOztBQUNBLGNBQUsxQixLQUFMLENBQVdnQixZQUFYLENBQXdCQyxJQUF4QjtBQUNELE9BUDZCO0FBQUEsS0F6SGU7O0FBRTNDLFVBQUtVLEtBQUwscUJBQWtCLE1BQUtBLEtBQXZCLE1BQWlDO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQWpDO0FBRjJDO0FBRzVDOztBQWRIO0FBQUE7QUFBQSx3Q0FnQjZCO0FBQ3pCLFVBQUksS0FBSzVCLEtBQUwsQ0FBV2lCLElBQWYsRUFBcUI7QUFDbkIsYUFBS1ksV0FBTDtBQUNEO0FBQ0Y7QUFwQkg7QUFBQTtBQUFBLHVDQXNCNEJDLFFBdEI1QixFQXNCZ0U7QUFDNUQsVUFBSSxLQUFLOUIsS0FBTCxDQUFXaUIsSUFBWCxLQUFvQmEsUUFBUSxDQUFDYixJQUFqQyxFQUF1QztBQUNyQyxhQUFLWSxXQUFMO0FBQ0Q7QUFDRjtBQTFCSDtBQUFBO0FBQUEsNEJBNEJpQjtBQUNiO0FBQ0Q7QUE5Qkg7QUFBQTtBQUFBLDZCQWdDa0I7QUFBQTs7QUFDZCxVQUFJLENBQUNuQyxVQUFMLEVBQWlCO0FBQ2YsY0FBTSxJQUFJcUMsS0FBSixDQUNKLHlFQURJLENBQU47QUFHRDs7QUFDRCxVQUFNQyxZQUFZLEdBQUcsS0FBS0MsZUFBTCxDQUFxQjFCLDBCQUFyQixDQUFyQjtBQUNBLGFBQ0Usd0VBQ08sS0FBS1AsS0FBTCxDQUFXa0MsRUFBWCxJQUFpQjtBQUNwQkEsVUFBRSxFQUFFLEtBQUtsQyxLQUFMLENBQVdrQztBQURLLE9BRHhCO0FBSUUsaUJBQVMsRUFDUCwyQ0FDQSxLQUFLQyxrQkFBTCxFQURBLEdBRUEsR0FGQSxJQUdDLEtBQUtuQyxLQUFMLENBQVdvQyxTQUFYLEdBQXVCLEtBQUtwQyxLQUFMLENBQVdvQyxTQUFsQyxHQUE4QyxFQUgvQyxDQUxKO0FBVUUsV0FBRyxFQUFFLEtBQUtDO0FBVlosVUFZRyxLQUFLckMsS0FBTCxDQUFXaUIsSUFBWCxDQUFnQnFCLEdBQWhCLENBQW9CLFVBQUNoQixHQUFELEVBQU1QLEtBQU47QUFBQSxlQUNuQixvREFBQyxnRkFBRDtBQUNFLHFCQUFXLEVBQUUsTUFBSSxDQUFDZixLQUFMLENBQVd1QztBQUQxQixXQUVPLE1BQUksQ0FBQ3ZDLEtBQUwsQ0FBV2tDLEVBQVgsSUFBaUI7QUFDcEJBLFlBQUUsRUFBRSxNQUFJLENBQUNsQyxLQUFMLENBQVdrQyxFQUFYLEdBQWdCLHFCQUFoQixHQUF3Q25CLEtBQUssQ0FBQ3lCLFFBQU47QUFEeEIsU0FGeEI7QUFLRSxhQUFHLEVBQUV6QixLQUxQO0FBTUUsZUFBSyxFQUNILGtFQUNHMEIsK0RBQWdCLENBQUNDLGNBQWpCLENBQWdDcEIsR0FBaEMsRUFBcUMsTUFBSSxDQUFDdEIsS0FBTCxDQUFXZ0MsWUFBaEQsQ0FESCxFQUVFO0FBQU0scUJBQVMsRUFBQztBQUFoQixhQUNFLG9EQUFDLHFEQUFELGVBQ08sTUFBSSxDQUFDaEMsS0FBTCxDQUFXa0MsRUFBWCxJQUFpQjtBQUNwQkEsY0FBRSxFQUFFLE1BQUksQ0FBQ2xDLEtBQUwsQ0FBV2tDLEVBQVgsR0FBZ0IsaUJBQWhCLEdBQW9DbkIsS0FBSyxDQUFDeUIsUUFBTjtBQURwQixXQUR4QjtBQUlFLHFCQUFTLEVBQUMsc0RBSlo7QUFLRSxvQkFBUSxFQUFFLElBTFo7QUFNRSxpQkFBSyxFQUFFLElBTlQ7QUFPRSxnQkFBSSxFQUFDLE9BUFA7QUFRRSxtQkFBTyxFQUFFLE1BQUksQ0FBQzFCLGNBQUwsQ0FBb0JDLEtBQXBCO0FBUlgsY0FVRSxvREFBQyx3R0FBRCxPQVZGLENBREYsQ0FGRixDQVBKO0FBeUJFLHNCQUFZLEVBQUU7QUFDWjRCLGlCQUFLLEVBQUVyQixHQUFHLENBQUNxQjtBQURDLFdBekJoQjtBQTRCRSw4QkFBb0IsRUFBRSxNQUFJLENBQUNsQixtQkFBTCxDQUF5QlYsS0FBekIsRUFBZ0NPLEdBQWhDLENBNUJ4QjtBQTZCRSxlQUFLLEVBQ0gsb0RBQUMsVUFBRCxlQUNPLE1BQUksQ0FBQ3RCLEtBQUwsQ0FBV2tDLEVBQVgsSUFBaUI7QUFDcEJBLGNBQUUsRUFBRSxNQUFJLENBQUNsQyxLQUFMLENBQVdrQyxFQUFYLEdBQWdCLGVBQWhCLEdBQWtDbkIsS0FBSyxDQUFDeUIsUUFBTjtBQURsQixXQUR4QjtBQUlFLHVCQUFXLEVBQ1Qsb0RBQUMsU0FBRCxRQUFZLENBQUNsQixHQUFHLENBQUNDLElBQUwsSUFBYVMsWUFBWSxDQUFDdkIsVUFBdEMsQ0FMSjtBQU9FLHVCQUFXLEVBQUUsTUFBSSxDQUFDVCxLQUFMLENBQVc0QyxXQVAxQjtBQVFFLG9CQUFRLEVBQUV0QixHQUFHLENBQUNDLElBUmhCO0FBU0Usc0JBQVUsRUFBRXpCLFVBVGQ7QUFVRSxvQkFBUSxFQUFFLE1BQUksQ0FBQ3VCLFdBQUwsQ0FBaUJOLEtBQWpCLEVBQXdCTyxHQUF4QixDQVZaO0FBV0Usd0JBQVksRUFBRSxNQUFJLENBQUN0QixLQUFMLENBQVdpQixJQUFYLENBQWdCQyxNQUFoQixDQUF1QixVQUFBQyxDQUFDO0FBQUEscUJBQUlBLENBQUMsQ0FBQ0ksSUFBTjtBQUFBLGFBQXhCLENBWGhCO0FBWUUsc0JBQVUsRUFBRSxJQVpkO0FBYUUsbUJBQU8sRUFBRSxJQUFJc0IsSUFBSjtBQWJYLGFBOUJKO0FBOENFLHNCQUFZLEVBQUUsTUFBSSxDQUFDN0MsS0FBTCxDQUFXZ0M7QUE5QzNCLFdBRG1CO0FBQUEsT0FBcEIsQ0FaSCxFQThERTtBQUFNLGlCQUFTLEVBQUM7QUFBaEIsUUE5REYsRUErREcsS0FBS2MsdUJBQUwsRUEvREgsQ0FERjtBQW1FRDtBQTFHSDtBQUFBO0FBQUEsa0NBNEd3QjtBQUNwQixVQUFNZCxZQUFZLEdBQUcsS0FBS0MsZUFBTCxDQUFxQjFCLDBCQUFyQixDQUFyQjtBQUNBLFVBQU13QyxnQkFBZ0IsR0FDcEIsQ0FBQyxLQUFLL0MsS0FBTCxDQUFXaUIsSUFBWixJQUFvQixLQUFLakIsS0FBTCxDQUFXaUIsSUFBWCxDQUFnQitCLEtBQWhCLENBQXNCLFVBQUE3QixDQUFDO0FBQUEsZUFBSThCLE9BQU8sQ0FBQzlCLENBQUMsQ0FBQ0ksSUFBSCxDQUFYO0FBQUEsT0FBdkIsQ0FEdEI7O0FBRUEsVUFBSXdCLGdCQUFKLEVBQXNCO0FBQ3BCLGFBQUtHLFFBQUw7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLQyxVQUFMLENBQWdCLENBQUNuQixZQUFZLENBQUN4QixlQUFkLENBQWhCO0FBQ0Q7QUFDRjtBQXJISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsRUFBNEM0QywrREFBNUM7QUFBYXZDLHNCLENBTUd3QyxZLEdBQWVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JILCtEQUFTLENBQUNDLFlBQTVCLEVBQTBDO0FBQ3JFRyxNQUFJLEVBQUUscUJBRCtEO0FBRXJFWixhQUFXLEVBQUU5QztBQUZ3RCxDQUExQyxDO0FBd0l4QixJQUFNMkQsbUJBQW1CLEdBQUdDLHdGQUFnQixDQUlqREMsNkVBQWUsQ0FBMkI5QyxzQkFBM0IsQ0FKa0MsRUFLakQscUJBTGlELENBQTVDO2VBUVE0QyxtQjtBQUFBOzs7Ozs7Ozs7OzBCQTFOVC9ELFU7MEJBc0NBSSxVOzBCQUVPQyxTOzBCQWdCUFEsMEI7MEJBWU9NLHNCOzBCQThJQTRDLG1CIiwiZmlsZSI6IjRjYjc1ODMtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUGx1c0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL2NvbnRlbnQvc3ZnL3Byb2R1Y3Rpb24vaWNfYWRkX2NpcmNsZV9vdXRsaW5lXzI0cHguc3ZnJztcclxuaW1wb3J0ICogYXMgRGF0ZUljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL2FjdGlvbi9zdmcvcHJvZHVjdGlvbi9pY19ldmVudF8yNHB4LnN2Zyc7XHJcblxyXG4vLyBMaWJzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxudHJ5IHtcclxuICB2YXIgRGF0ZVBpY2tlciA9IHJlcXVpcmUoJ3JlYWN0LWRhdGVwaWNrZXInKS5kZWZhdWx0O1xyXG59IGNhdGNoIHtcclxuICBEYXRlUGlja2VyID0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG4vLyBNaXNjXHJcbmltcG9ydCBPcGVuaW5nSG91cnNVdGlsLCB7XHJcbiAgZGVmYXVsdFRyYW5zbGF0aW9ucyBhcyBkZWZhdWx0TGFiZWxUcmFuc2xhdGlvbnMsXHJcbn0gZnJvbSAnLi4vdXRpbHMvT3BlbmluZ0hvdXJzVXRpbCc7XHJcbmltcG9ydCB7XHJcbiAgT3BlbmluZ0hvdXJzRGF5T2JqLFxyXG4gIE9wZW5pbmdIb3Vyc0RheSxcclxuICBkZWZhdWx0RGF5VHJhbnNsYXRpb25zLFxyXG59IGZyb20gJy4uL29wZW5pbmdIb3Vyc0RheS9PcGVuaW5nSG91cnNEYXknO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VJbnB1dFByb3BzLFxyXG4gIEJhc2VJbnB1dFN0YXRlLFxyXG4gIEJhc2VJbnB1dCxcclxuICBkZWZhdWx0QmFzZVRyYW5zbGF0aW9ucyxcclxufSBmcm9tICcuLi8uLi9iYXNlL2lucHV0L0Jhc2VJbnB1dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgeyB3aXRoRm9ybUNvbnRleHQgfSBmcm9tICcuLi8uLi9mb3JtL3dpdGhGb3JtQ29udGV4dCc7XHJcbmltcG9ydCB7IHdpdGhUaGVtZUNvbnRleHQgfSBmcm9tICcuLi8uLi90aGVtZVByb3ZpZGVyL3dpdGhUaGVtZUNvbnRleHQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcGVuaW5nSG91cnNTcGVjaWFsRGF5T2JqIGV4dGVuZHMgT3BlbmluZ0hvdXJzRGF5T2JqIHtcclxuICBkYXRlPzogRGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcGVuaW5nSG91cnNTcGVjaWFsUHJvcHNcclxuICBleHRlbmRzIEJhc2VJbnB1dFByb3BzPG5ldmVyLCBPcGVuaW5nSG91cnNTcGVjaWFsVHJhbnNsYXRpb25zPiB7XHJcbiAgZGF5czogT3BlbmluZ0hvdXJzU3BlY2lhbERheU9ialtdO1xyXG4gIG9uRGF5c0NoYW5nZTogKGRheXM6IE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmpbXSkgPT4gdm9pZDtcclxuICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICB1c2VDYXBhY2l0eT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3BlbmluZ0hvdXJzU3BlY2lhbFN0YXRlIGV4dGVuZHMgQmFzZUlucHV0U3RhdGUge31cclxuXHJcbmNvbnN0IERBWV9GT1JNQVQgPSAnZGQvTS95eXl5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PHtcclxuICB2YWx1ZT86IHN0cmluZztcclxuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcclxufT4ge1xyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QnV0dG9uIGJsYW5rPXt0cnVlfSB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICA8RGF0ZUljb24gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDQgfX0gLz5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuID8gdGhpcy5wcm9wcy5jaGlsZHJlbiA6IHRoaXMucHJvcHMudmFsdWV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRTcGVjaWFsVHJhbnNsYXRpb25zID0ge1xyXG4gIGNob29zZURhdGVFcnJvcjogJ0RhdGUgbm90IHNlbGVjdGVkJyxcclxuICBjaG9vc2VEYXRlOiAnQ2hvb3NlIGRhdGUnLFxyXG4gIC4uLmRlZmF1bHRCYXNlVHJhbnNsYXRpb25zLFxyXG4gIC4uLmRlZmF1bHREYXlUcmFuc2xhdGlvbnMsXHJcbiAgLi4uZGVmYXVsdExhYmVsVHJhbnNsYXRpb25zLFxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgT3BlbmluZ0hvdXJzU3BlY2lhbFRyYW5zbGF0aW9ucyA9IFBhcnRpYWw8XHJcbiAgdHlwZW9mIGRlZmF1bHRTcGVjaWFsVHJhbnNsYXRpb25zXHJcbj47XHJcblxyXG5leHBvcnQgY2xhc3MgT3BlbmluZ0hvdXJzU3BlY2lhbFJhdyBleHRlbmRzIEJhc2VJbnB1dDxcclxuICBPcGVuaW5nSG91cnNTcGVjaWFsUHJvcHMsXHJcbiAgT3BlbmluZ0hvdXJzU3BlY2lhbFN0YXRlLFxyXG4gIG5ldmVyLFxyXG4gIE9wZW5pbmdIb3Vyc1NwZWNpYWxUcmFuc2xhdGlvbnNcclxuPiB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBCYXNlSW5wdXQuZGVmYXVsdFByb3BzLCB7XHJcbiAgICB0eXBlOiAnb3BlbmluZ0hvdXJzU3BlY2lhbCcsXHJcbiAgICBwbGFjZWhvbGRlcjogREFZX0ZPUk1BVCxcclxuICB9KTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IE9wZW5pbmdIb3Vyc1NwZWNpYWxQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgLi4ueyB0b3VjaGVkOiB0cnVlIH0gfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmRheXMpIHtcclxuICAgICAgdGhpcy5oYW5kbGVEYXRlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wczogT3BlbmluZ0hvdXJzU3BlY2lhbFByb3BzKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5kYXlzICE9PSBvbGRQcm9wcy5kYXlzKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlRGF0ZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b3VjaCgpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBpZiAoIURhdGVQaWNrZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdZb3UgbmVlZCB0byBpbnN0YWxsIHJlYWN0LWRhdGVwaWNrZXIgaW4gb3JkZXIgdG8gdXNlIHNwZWNpYWwgZGF5IHBpY2tlcidcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKGRlZmF1bHRTcGVjaWFsVHJhbnNsYXRpb25zKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICdpbnB1dF9fYmFzZSBvcGVuaW5nSG91cnNTcGVjaWFsLWlucHV0ICcgK1xyXG4gICAgICAgICAgdGhpcy5nZXRWYWxpZGF0aW9uQ2xhc3MoKSArXHJcbiAgICAgICAgICAnICcgK1xyXG4gICAgICAgICAgKHRoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVmPXt0aGlzLmNvbnRhaW5lclJlZn1cclxuICAgICAgPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmRheXMubWFwKChkYXksIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8T3BlbmluZ0hvdXJzRGF5XHJcbiAgICAgICAgICAgIHVzZUNhcGFjaXR5PXt0aGlzLnByb3BzLnVzZUNhcGFjaXR5fVxyXG4gICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy1vcGVuaW5nLWhvdXJzLWRheS0nICsgaW5kZXgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGxhYmVsPXtcclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtPcGVuaW5nSG91cnNVdGlsLmdldExhYmVsU3VmZml4KGRheSwgdGhpcy5wcm9wcy50cmFuc2xhdGlvbnMpfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctcmVtb3ZlLWJ1dHRvbi0nICsgaW5kZXgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcGVuaW5nSG91cnNEYXktaW5wdXRfX2J1dHRvbi0tcmVtb3ZlIGxpbmUtaGVpZ2h0LS0wXCJcclxuICAgICAgICAgICAgICAgICAgICBjaXJjdWxhcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBibGFuaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVtb3ZlRGF5Q2xpY2soaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsdXNJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcGVuaW5nSG91cnM9e3tcclxuICAgICAgICAgICAgICB0aW1lczogZGF5LnRpbWVzLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbk9wZW5pbmdIb3Vyc0NoYW5nZT17dGhpcy5vcGVuaW5nSG91cnNDaGFuZ2VkKGluZGV4LCBkYXkpfVxyXG4gICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy1kYXRlLXBpY2tlci0nICsgaW5kZXgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgY3VzdG9tSW5wdXQ9e1xyXG4gICAgICAgICAgICAgICAgICA8RGF0ZUlucHV0PnshZGF5LmRhdGUgJiYgdHJhbnNsYXRpb25zLmNob29zZURhdGV9PC9EYXRlSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtkYXkuZGF0ZX1cclxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9e0RBWV9GT1JNQVR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5kYXRlQ2hhbmdlZChpbmRleCwgZGF5KX1cclxuICAgICAgICAgICAgICAgIGV4Y2x1ZGVEYXRlcz17dGhpcy5wcm9wcy5kYXlzLmZpbHRlcihkID0+IGQuZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICB3aXRoUG9ydGFsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgbWluRGF0ZT17bmV3IERhdGUoKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucz17dGhpcy5wcm9wcy50cmFuc2xhdGlvbnN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhclwiIC8+XHJcbiAgICAgICAge3RoaXMucmVuZGVyRGVmYXVsdFZhbGlkYXRpb24oKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVEYXRlcygpIHtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKGRlZmF1bHRTcGVjaWFsVHJhbnNsYXRpb25zKTtcclxuICAgIGNvbnN0IGFsbERheXNIYXZlRGF0ZXMgPVxyXG4gICAgICAhdGhpcy5wcm9wcy5kYXlzIHx8IHRoaXMucHJvcHMuZGF5cy5ldmVyeShkID0+IEJvb2xlYW4oZC5kYXRlKSk7XHJcbiAgICBpZiAoYWxsRGF5c0hhdmVEYXRlcykge1xyXG4gICAgICB0aGlzLnNldFZhbGlkKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldEludmFsaWQoW3RyYW5zbGF0aW9ucy5jaG9vc2VEYXRlRXJyb3JdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRGF5Q2xpY2sgPSAoaW5kZXg6IG51bWJlcikgPT4gKCkgPT5cclxuICAgIHRoaXMucHJvcHMub25EYXlzQ2hhbmdlKFxyXG4gICAgICB0aGlzLnByb3BzLmRheXMuZmlsdGVyKChkLCBpbmRleElubmVyKSA9PiBpbmRleElubmVyICE9PSBpbmRleClcclxuICAgICk7XHJcblxyXG4gIHByaXZhdGUgZGF0ZUNoYW5nZWQgPSAoaW5kZXg6IG51bWJlciwgZGF5OiBPcGVuaW5nSG91cnNEYXlPYmopID0+IChcclxuICAgIGRhdGU6IERhdGVcclxuICApID0+IHtcclxuICAgIGxldCBkYXlzID0gdGhpcy5wcm9wcy5kYXlzLnNsaWNlKDApO1xyXG4gICAgZGF5c1tpbmRleF0gPSB7IC4uLmRheSwgZGF0ZSB9O1xyXG4gICAgdGhpcy5wcm9wcy5vbkRheXNDaGFuZ2UoZGF5cyk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvcGVuaW5nSG91cnNDaGFuZ2VkID0gKFxyXG4gICAgaW5kZXg6IG51bWJlcixcclxuICAgIGRheTogT3BlbmluZ0hvdXJzRGF5T2JqXHJcbiAgKSA9PiBvcGVuaW5nSG91cnMgPT4ge1xyXG4gICAgbGV0IGRheXMgPSB0aGlzLnByb3BzLmRheXMuc2xpY2UoMCk7XHJcbiAgICBkYXlzW2luZGV4XSA9IHsgLi4uZGF5LCAuLi5vcGVuaW5nSG91cnMgfTtcclxuICAgIHRoaXMucHJvcHMub25EYXlzQ2hhbmdlKGRheXMpO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBPcGVuaW5nSG91cnNTcGVjaWFsID0gd2l0aFRoZW1lQ29udGV4dDxcclxuICBPcGVuaW5nSG91cnNTcGVjaWFsUHJvcHMsXHJcbiAgSW5zdGFuY2VUeXBlPHR5cGVvZiBPcGVuaW5nSG91cnNTcGVjaWFsUmF3PlxyXG4+KFxyXG4gIHdpdGhGb3JtQ29udGV4dDxPcGVuaW5nSG91cnNTcGVjaWFsUHJvcHM+KE9wZW5pbmdIb3Vyc1NwZWNpYWxSYXcpLFxyXG4gICdvcGVuaW5nSG91cnNTcGVjaWFsJ1xyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlbmluZ0hvdXJzU3BlY2lhbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==