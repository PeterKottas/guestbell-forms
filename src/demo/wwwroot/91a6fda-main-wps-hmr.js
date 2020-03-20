webpackHotUpdate("main",{

/***/ "./src/lib/components/time/Time.tsx":
/*!******************************************!*\
  !*** ./src/lib/components/time/Time.tsx ***!
  \******************************************/
/*! exports provided: TimeRaw, Time, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeRaw", function() { return TimeRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
/* harmony import */ var material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg */ "./node_modules/material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg");
/* harmony import */ var material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inputGroup/InputGroup */ "./src/lib/components/inputGroup/InputGroup.tsx");
/* harmony import */ var _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/input/BaseInput */ "./src/lib/components/base/input/BaseInput.tsx");
/* harmony import */ var _form_withFormContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/withFormContext */ "./src/lib/components/form/withFormContext.tsx");
/* harmony import */ var _utils_TimeUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/TimeUtil */ "./src/lib/components/utils/TimeUtil.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
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






var TimeRaw =
/*#__PURE__*/
function (_BaseInput) {
  _inherits(TimeRaw, _BaseInput);

  function TimeRaw(props) {
    var _this;

    _classCallCheck(this, TimeRaw);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimeRaw).call(this, props));

    _this.onBlur = function (e) {
      if (_this.state.hoursText) {
        _this.handleHoursChange(_this.state.hoursText);
      }

      if (_this.state.minutesText) {
        _this.handleMinutesChange(_this.state.minutesText);
      }

      _this.setState({
        minutesText: undefined,
        hoursText: undefined
      }, function () {
        return _this.handleBlur(e);
      });
    };

    _this.onMinutesChanged = function (e) {
      // this.handleMinutesChange(e.target.value);
      _this.setState({
        minutesText: e.target.value
      });
    };

    _this.removeMinuteClick = function (e) {
      e.preventDefault();

      _this.handleMinutesChange((_this.props.time.minutes() - 1).toString());
    };

    _this.addMinuteClick = function (e) {
      e.preventDefault();

      _this.handleMinutesChange((_this.props.time.minutes() + 1).toString());
    };

    _this.removeHourClick = function (e) {
      e.preventDefault();

      _this.handleHoursChange((_this.props.time.hours() - 1).toString());
    };

    _this.onHoursChanged = function (e) {
      // this.handleHoursChange(e.target.value);
      _this.setState({
        hoursText: e.target.value
      });
    };

    _this.addHourClick = function (e) {
      e.preventDefault();

      _this.handleHoursChange((_this.props.time.hours() + 1).toString());
    };

    _this.handleHoursChange = _this.handleHoursChange.bind(_assertThisInitialized(_this));
    _this.handleMinutesChange = _this.handleMinutesChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TimeRaw, [{
    key: "render",
    value: function render() {
      var label = this.props.label;
      var hours = this.props.time.hours();
      var minutes = this.props.time.minutes();

      if (minutes < 0) {
        hours--;
      }

      minutes = (minutes + 60) % 60;
      hours = (hours + 24) % 24;
      var mid = 'AM';

      if (hours % 24 >= 12) {
        hours = hours % 12;
        mid = 'PM';
      }

      if (hours % 12 === 0) {
        // At 00 hours we need to show 12 am
        hours = 12;
      }

      if (this.props.showDateDiff && this.props.min) {
        var diffDays = _utils_TimeUtil__WEBPACK_IMPORTED_MODULE_5__["default"].dayDiff(this.props.min, this.props.time);

        if (diffDays > 0) {
          mid += ' +' + diffDays.toString();
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: this.props.title
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", _extends({}, this.props.id && {
        id: this.props.id
      }, {
        className: 'input__base time-input ' + this.getValidationClass() + ' ' + (this.props.className ? this.props.className : ''),
        ref: this.containerRef
      }), label && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "time-input__label"
      }, label), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "time-input__arrows__container"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", _extends({
        className: "plus",
        onClick: this.addHourClick
      }, this.props.id && {
        id: this.props.id + '-add-hours-button'
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0__, null)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "input-padding"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", _extends({}, this.props.id && {
        id: this.props.id + '-hours-input'
      }, {
        disabled: this.getDisabled(),
        required: this.props.required,
        className: 'time-input__time ' + (this.state.value ? 'filled' : ''),
        onChange: this.onHoursChanged,
        value: this.state.hoursText !== undefined ? this.state.hoursText : hours,
        onBlur: this.onBlur,
        onFocus: this.handleFocus,
        type: "number"
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "highlight"
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", _extends({
        className: "minus",
        onClick: this.removeHourClick
      }, this.props.id && {
        id: this.props.id + '-subtract-hours-button'
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0__, null)))), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: ""
      }, ":"), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "time-input__arrows__container"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", _extends({
        className: "plus",
        onClick: this.addMinuteClick
      }, this.props.id && {
        id: this.props.id + '-add-minutes-button'
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0__, null)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "input-padding"
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", _extends({}, this.props.id && {
        id: this.props.id + '-minutes-input'
      }, {
        disabled: this.getDisabled(),
        required: this.props.required,
        className: 'time-input__time ' + (this.state.value ? 'filled' : ''),
        onChange: this.onMinutesChanged,
        value: this.state.minutesText !== undefined ? this.state.minutesText : minutes < 10 ? '0' + minutes.toString() : minutes.toString(),
        onBlur: this.onBlur,
        onFocus: this.handleFocus,
        type: "number"
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "highlight"
      })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", _extends({
        className: "minus",
        onClick: this.removeMinuteClick
      }, this.props.id && {
        id: this.props.id + '-subtract-minutes-button'
      }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0__, null)))), this.renderDefaultValidation(), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
        className: "time-input__am-pm"
      }, mid)));
    }
  }, {
    key: "handleLimits",
    value: function handleLimits(time) {
      if (this.props.min) {
        if (time.asMilliseconds() - this.props.min.asMilliseconds() <= 0) {
          this.props.timeChange(this.props.min.clone());
          return;
        }
      }

      if (this.props.max) {
        if (this.props.max.asMilliseconds() - time.asMilliseconds() <= 0) {
          this.props.timeChange(this.props.max.clone());
          return;
        }
      }

      this.props.timeChange(time);
    }
  }, {
    key: "handleHoursChange",
    value: function handleHoursChange(hoursString) {
      var num = Number(hoursString);

      if (hoursString === '') {
        num = 0;
      }

      if (!isNaN(num)) {
        var newTime = Object(moment__WEBPACK_IMPORTED_MODULE_6__["duration"])(this.props.time.asMilliseconds(), 'milliseconds').subtract(this.props.time.hours(), 'hours').add(num, 'hours');
        this.handleLimits(newTime);
      }
    }
  }, {
    key: "handleMinutesChange",
    value: function handleMinutesChange(minutesString) {
      var num = Number(minutesString);

      if (minutesString === '') {
        num = 0;
      }

      if (!isNaN(num)) {
        var newTime = Object(moment__WEBPACK_IMPORTED_MODULE_6__["duration"])(this.props.time.asMilliseconds(), 'milliseconds').subtract(this.props.time.minutes(), 'minutes').add(num, 'minutes');
        this.handleLimits(newTime);
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

  return TimeRaw;
}(_base_input_BaseInput__WEBPACK_IMPORTED_MODULE_3__["BaseInput"]);
TimeRaw.defaultProps = Object.assign({}, _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_3__["BaseInput"].defaultProps, {
  type: 'time',
  placeholder: ''
});
var Time = Object(_form_withFormContext__WEBPACK_IMPORTED_MODULE_4__["withFormContext"])(TimeRaw);
var _default = Time;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TimeRaw, "TimeRaw", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\time\\Time.tsx");
  reactHotLoader.register(Time, "Time", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\time\\Time.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\time\\Time.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGltZS9UaW1lLnRzeCJdLCJuYW1lcyI6WyJUaW1lUmF3IiwicHJvcHMiLCJvbkJsdXIiLCJlIiwic3RhdGUiLCJob3Vyc1RleHQiLCJoYW5kbGVIb3Vyc0NoYW5nZSIsIm1pbnV0ZXNUZXh0IiwiaGFuZGxlTWludXRlc0NoYW5nZSIsInNldFN0YXRlIiwidW5kZWZpbmVkIiwiaGFuZGxlQmx1ciIsIm9uTWludXRlc0NoYW5nZWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbW92ZU1pbnV0ZUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJ0aW1lIiwibWludXRlcyIsInRvU3RyaW5nIiwiYWRkTWludXRlQ2xpY2siLCJyZW1vdmVIb3VyQ2xpY2siLCJob3VycyIsIm9uSG91cnNDaGFuZ2VkIiwiYWRkSG91ckNsaWNrIiwiYmluZCIsImxhYmVsIiwibWlkIiwic2hvd0RhdGVEaWZmIiwibWluIiwiZGlmZkRheXMiLCJUaW1lVXRpbCIsImRheURpZmYiLCJ0aXRsZSIsImlkIiwiZ2V0VmFsaWRhdGlvbkNsYXNzIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyUmVmIiwiZ2V0RGlzYWJsZWQiLCJyZXF1aXJlZCIsImhhbmRsZUZvY3VzIiwicmVuZGVyRGVmYXVsdFZhbGlkYXRpb24iLCJhc01pbGxpc2Vjb25kcyIsInRpbWVDaGFuZ2UiLCJjbG9uZSIsIm1heCIsImhvdXJzU3RyaW5nIiwibnVtIiwiTnVtYmVyIiwiaXNOYU4iLCJuZXdUaW1lIiwiZHVyYXRpb24iLCJzdWJ0cmFjdCIsImFkZCIsImhhbmRsZUxpbWl0cyIsIm1pbnV0ZXNTdHJpbmciLCJCYXNlSW5wdXQiLCJkZWZhdWx0UHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJUaW1lIiwid2l0aEZvcm1Db250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQWF4RCxPLENBQ0d5RCxZLEdBQWVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JILCtEQUFTLENBQUNDLFlBQTVCLEVBQTBDO0FBQ3JFRyxNQUFJLEVBQUUsTUFEK0Q7QUFFckVDLGFBQVcsRUFBRTtBQUZ3RCxDQUExQyxDO0FBK094QixJQUFNQyxJQUFJLEdBQUdDLDZFQUFlLENBQVkvRCxPQUFaLENBQTVCO2VBRVE4RCxJO0FBQUE7Ozs7Ozs7Ozs7MEJBbFBGOUQsTzswQkFnUEE4RCxJIiwiZmlsZSI6IjkxYTZmZGEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgQXJyb3dJY29uIGZyb20gJ21hdGVyaWFsLWRlc2lnbi1pY29ucy9oYXJkd2FyZS9zdmcvcHJvZHVjdGlvbi9pY19rZXlib2FyZF9hcnJvd19kb3duXzI0cHguc3ZnJztcclxuXHJcbi8vIExpYnNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gTWlzY1xyXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICcuLi9pbnB1dEdyb3VwL0lucHV0R3JvdXAnO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VJbnB1dFByb3BzLFxyXG4gIEJhc2VJbnB1dFN0YXRlLFxyXG4gIEJhc2VJbnB1dCxcclxufSBmcm9tICcuLi9iYXNlL2lucHV0L0Jhc2VJbnB1dCc7XHJcbmltcG9ydCB7IHdpdGhGb3JtQ29udGV4dCB9IGZyb20gJy4uL2Zvcm0vd2l0aEZvcm1Db250ZXh0JztcclxuaW1wb3J0IFRpbWVVdGlsIGZyb20gJy4uL3V0aWxzL1RpbWVVdGlsJztcclxuaW1wb3J0IHsgRHVyYXRpb24sIGR1cmF0aW9uIH0gZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZVByb3BzIGV4dGVuZHMgQmFzZUlucHV0UHJvcHM8SFRNTElucHV0RWxlbWVudD4ge1xyXG4gIG9uQ2hhbmdlPzogKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xyXG4gIHRpbWVDaGFuZ2U6ICh0aW1lOiBEdXJhdGlvbikgPT4gdm9pZDtcclxuICB0aW1lOiBEdXJhdGlvbjtcclxuICBtaW4/OiBEdXJhdGlvbjtcclxuICBtYXg/OiBEdXJhdGlvbjtcclxuICBzaG93RGF0ZURpZmY/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbWVTdGF0ZSBleHRlbmRzIEJhc2VJbnB1dFN0YXRlIHtcclxuICBob3Vyc1RleHQ/OiBzdHJpbmc7XHJcbiAgbWludXRlc1RleHQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lUmF3IGV4dGVuZHMgQmFzZUlucHV0PFRpbWVQcm9wcywgVGltZVN0YXRlLCBIVE1MSW5wdXRFbGVtZW50PiB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBCYXNlSW5wdXQuZGVmYXVsdFByb3BzLCB7XHJcbiAgICB0eXBlOiAndGltZScsXHJcbiAgICBwbGFjZWhvbGRlcjogJycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBUaW1lUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuaGFuZGxlSG91cnNDaGFuZ2UgPSB0aGlzLmhhbmRsZUhvdXJzQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZU1pbnV0ZXNDaGFuZ2UgPSB0aGlzLmhhbmRsZU1pbnV0ZXNDaGFuZ2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGxhYmVsIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IGhvdXJzID0gdGhpcy5wcm9wcy50aW1lLmhvdXJzKCk7XHJcbiAgICBsZXQgbWludXRlcyA9IHRoaXMucHJvcHMudGltZS5taW51dGVzKCk7XHJcbiAgICBpZiAobWludXRlcyA8IDApIHtcclxuICAgICAgaG91cnMtLTtcclxuICAgIH1cclxuICAgIG1pbnV0ZXMgPSAobWludXRlcyArIDYwKSAlIDYwO1xyXG4gICAgaG91cnMgPSAoaG91cnMgKyAyNCkgJSAyNDtcclxuICAgIHZhciBtaWQgPSAnQU0nO1xyXG4gICAgaWYgKGhvdXJzICUgMjQgPj0gMTIpIHtcclxuICAgICAgaG91cnMgPSBob3VycyAlIDEyO1xyXG4gICAgICBtaWQgPSAnUE0nO1xyXG4gICAgfVxyXG4gICAgaWYgKGhvdXJzICUgMTIgPT09IDApIHtcclxuICAgICAgLy8gQXQgMDAgaG91cnMgd2UgbmVlZCB0byBzaG93IDEyIGFtXHJcbiAgICAgIGhvdXJzID0gMTI7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5zaG93RGF0ZURpZmYgJiYgdGhpcy5wcm9wcy5taW4pIHtcclxuICAgICAgY29uc3QgZGlmZkRheXMgPSBUaW1lVXRpbC5kYXlEaWZmKHRoaXMucHJvcHMubWluLCB0aGlzLnByb3BzLnRpbWUpO1xyXG4gICAgICBpZiAoZGlmZkRheXMgPiAwKSB7XHJcbiAgICAgICAgbWlkICs9ICcgKycgKyBkaWZmRGF5cy50b1N0cmluZygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SW5wdXRHcm91cCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICdpbnB1dF9fYmFzZSB0aW1lLWlucHV0ICcgK1xyXG4gICAgICAgICAgICB0aGlzLmdldFZhbGlkYXRpb25DbGFzcygpICtcclxuICAgICAgICAgICAgJyAnICtcclxuICAgICAgICAgICAgKHRoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlZj17dGhpcy5jb250YWluZXJSZWZ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xhYmVsICYmIDxkaXYgY2xhc3NOYW1lPVwidGltZS1pbnB1dF9fbGFiZWxcIj57bGFiZWx9PC9kaXY+fVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLWlucHV0X19hcnJvd3NfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsdXNcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRIb3VyQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctYWRkLWhvdXJzLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1wYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctaG91cnMtaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuZ2V0RGlzYWJsZWQoKX1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RoaXMucHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpbWUtaW5wdXRfX3RpbWUgJyArICh0aGlzLnN0YXRlLnZhbHVlID8gJ2ZpbGxlZCcgOiAnJylcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkhvdXJzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaG91cnNUZXh0ICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5ob3Vyc1RleHRcclxuICAgICAgICAgICAgICAgICAgICAgIDogaG91cnNcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxyXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbnVzXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVtb3ZlSG91ckNsaWNrfVxyXG4gICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXN1YnRyYWN0LWhvdXJzLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QXJyb3dJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj46PC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLWlucHV0X19hcnJvd3NfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsdXNcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRNaW51dGVDbGlja31cclxuICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy1hZGQtbWludXRlcy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFycm93SWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLW1pbnV0ZXMtaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuZ2V0RGlzYWJsZWQoKX1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RoaXMucHJvcHMucmVxdWlyZWR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RpbWUtaW5wdXRfX3RpbWUgJyArICh0aGlzLnN0YXRlLnZhbHVlID8gJ2ZpbGxlZCcgOiAnJylcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbk1pbnV0ZXNDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5taW51dGVzVGV4dCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUubWludXRlc1RleHRcclxuICAgICAgICAgICAgICAgICAgICAgIDogbWludXRlcyA8IDEwXHJcbiAgICAgICAgICAgICAgICAgICAgICA/ICcwJyArIG1pbnV0ZXMudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBtaW51dGVzLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxyXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbnVzXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVtb3ZlTWludXRlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctc3VidHJhY3QtbWludXRlcy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFycm93SWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3RoaXMucmVuZGVyRGVmYXVsdFZhbGlkYXRpb24oKX1cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWUtaW5wdXRfX2FtLXBtXCI+e21pZH08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQmx1ciA9IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5ob3Vyc1RleHQpIHtcclxuICAgICAgdGhpcy5oYW5kbGVIb3Vyc0NoYW5nZSh0aGlzLnN0YXRlLmhvdXJzVGV4dCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5taW51dGVzVGV4dCkge1xyXG4gICAgICB0aGlzLmhhbmRsZU1pbnV0ZXNDaGFuZ2UodGhpcy5zdGF0ZS5taW51dGVzVGV4dCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbWludXRlc1RleHQ6IHVuZGVmaW5lZCwgaG91cnNUZXh0OiB1bmRlZmluZWQgfSwgKCkgPT5cclxuICAgICAgdGhpcy5oYW5kbGVCbHVyKGUpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25NaW51dGVzQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgLy8gdGhpcy5oYW5kbGVNaW51dGVzQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtaW51dGVzVGV4dDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVNaW51dGVDbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5oYW5kbGVNaW51dGVzQ2hhbmdlKCh0aGlzLnByb3BzLnRpbWUubWludXRlcygpIC0gMSkudG9TdHJpbmcoKSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBhZGRNaW51dGVDbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5oYW5kbGVNaW51dGVzQ2hhbmdlKCh0aGlzLnByb3BzLnRpbWUubWludXRlcygpICsgMSkudG9TdHJpbmcoKSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVIb3VyQ2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuaGFuZGxlSG91cnNDaGFuZ2UoKHRoaXMucHJvcHMudGltZS5ob3VycygpIC0gMSkudG9TdHJpbmcoKSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbkhvdXJzQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgLy8gdGhpcy5oYW5kbGVIb3Vyc0NoYW5nZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaG91cnNUZXh0OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGFkZEhvdXJDbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5oYW5kbGVIb3Vyc0NoYW5nZSgodGhpcy5wcm9wcy50aW1lLmhvdXJzKCkgKyAxKS50b1N0cmluZygpKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGhhbmRsZUxpbWl0cyh0aW1lOiBEdXJhdGlvbikge1xyXG4gICAgaWYgKHRoaXMucHJvcHMubWluKSB7XHJcbiAgICAgIGlmICh0aW1lLmFzTWlsbGlzZWNvbmRzKCkgLSB0aGlzLnByb3BzLm1pbi5hc01pbGxpc2Vjb25kcygpIDw9IDApIHtcclxuICAgICAgICB0aGlzLnByb3BzLnRpbWVDaGFuZ2UodGhpcy5wcm9wcy5taW4uY2xvbmUoKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5tYXgpIHtcclxuICAgICAgaWYgKHRoaXMucHJvcHMubWF4LmFzTWlsbGlzZWNvbmRzKCkgLSB0aW1lLmFzTWlsbGlzZWNvbmRzKCkgPD0gMCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMudGltZUNoYW5nZSh0aGlzLnByb3BzLm1heC5jbG9uZSgpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMudGltZUNoYW5nZSh0aW1lKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlSG91cnNDaGFuZ2UoaG91cnNTdHJpbmc6IHN0cmluZykge1xyXG4gICAgbGV0IG51bSA9IE51bWJlcihob3Vyc1N0cmluZyk7XHJcbiAgICBpZiAoaG91cnNTdHJpbmcgPT09ICcnKSB7XHJcbiAgICAgIG51bSA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzTmFOKG51bSkpIHtcclxuICAgICAgbGV0IG5ld1RpbWU6IER1cmF0aW9uID0gZHVyYXRpb24oXHJcbiAgICAgICAgdGhpcy5wcm9wcy50aW1lLmFzTWlsbGlzZWNvbmRzKCksXHJcbiAgICAgICAgJ21pbGxpc2Vjb25kcydcclxuICAgICAgKVxyXG4gICAgICAgIC5zdWJ0cmFjdCh0aGlzLnByb3BzLnRpbWUuaG91cnMoKSwgJ2hvdXJzJylcclxuICAgICAgICAuYWRkKG51bSwgJ2hvdXJzJyk7XHJcbiAgICAgIHRoaXMuaGFuZGxlTGltaXRzKG5ld1RpbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVNaW51dGVzQ2hhbmdlKG1pbnV0ZXNTdHJpbmc6IHN0cmluZykge1xyXG4gICAgbGV0IG51bSA9IE51bWJlcihtaW51dGVzU3RyaW5nKTtcclxuICAgIGlmIChtaW51dGVzU3RyaW5nID09PSAnJykge1xyXG4gICAgICBudW0gPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc05hTihudW0pKSB7XHJcbiAgICAgIGxldCBuZXdUaW1lOiBEdXJhdGlvbiA9IGR1cmF0aW9uKFxyXG4gICAgICAgIHRoaXMucHJvcHMudGltZS5hc01pbGxpc2Vjb25kcygpLFxyXG4gICAgICAgICdtaWxsaXNlY29uZHMnXHJcbiAgICAgIClcclxuICAgICAgICAuc3VidHJhY3QodGhpcy5wcm9wcy50aW1lLm1pbnV0ZXMoKSwgJ21pbnV0ZXMnKVxyXG4gICAgICAgIC5hZGQobnVtLCAnbWludXRlcycpO1xyXG4gICAgICB0aGlzLmhhbmRsZUxpbWl0cyhuZXdUaW1lKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lID0gd2l0aEZvcm1Db250ZXh0PFRpbWVQcm9wcz4oVGltZVJhdyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9