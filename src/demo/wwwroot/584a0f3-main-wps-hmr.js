webpackHotUpdate("main",{

/***/ "./src/lib/components/timeSpan/TimeSpan.tsx":
/*!**************************************************!*\
  !*** ./src/lib/components/timeSpan/TimeSpan.tsx ***!
  \**************************************************/
/*! exports provided: TimeSpanUnit, allTimeSpanUnits, TimeSpanRaw, TimeSpan, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSpanUnit", function() { return TimeSpanUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allTimeSpanUnits", function() { return allTimeSpanUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSpanRaw", function() { return TimeSpanRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSpan", function() { return TimeSpan; });
/* harmony import */ var material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg */ "./node_modules/material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg");
/* harmony import */ var material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inputGroup/InputGroup */ "./src/lib/components/inputGroup/InputGroup.tsx");
/* harmony import */ var _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/input/BaseInput */ "./src/lib/components/base/input/BaseInput.tsx");
/* harmony import */ var _form_withFormContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/withFormContext */ "./src/lib/components/form/withFormContext.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
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





var TimeSpanUnit;

(function (TimeSpanUnit) {
  TimeSpanUnit[TimeSpanUnit["Dynamic"] = 0] = "Dynamic";
  TimeSpanUnit[TimeSpanUnit["Millisecond"] = 1] = "Millisecond";
  TimeSpanUnit[TimeSpanUnit["Second"] = 2] = "Second";
  TimeSpanUnit[TimeSpanUnit["Minute"] = 4] = "Minute";
  TimeSpanUnit[TimeSpanUnit["Hour"] = 8] = "Hour";
  TimeSpanUnit[TimeSpanUnit["Day"] = 16] = "Day";
  TimeSpanUnit[TimeSpanUnit["Year"] = 32] = "Year";
})(TimeSpanUnit || (TimeSpanUnit = {}));

var allTimeSpanUnits = TimeSpanUnit.Day | TimeSpanUnit.Hour | TimeSpanUnit.Millisecond | TimeSpanUnit.Minute | TimeSpanUnit.Second | TimeSpanUnit.Year;

function getValues(enumeration) {
  var values = [];

  for (var value in enumeration) {
    if (isNaN(Number(value))) {
      values.push(enumeration[value]);
    }
  }

  return values;
}

var allUnits = getValues(TimeSpanUnit);
var TimeSpanRaw =
/*#__PURE__*/
function (_BaseInput) {
  _inherits(TimeSpanRaw, _BaseInput);

  function TimeSpanRaw(props) {
    var _this;

    _classCallCheck(this, TimeSpanRaw);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimeSpanRaw).call(this, props));

    _this.onBlur = function (e) {
      _this.commitState();

      _this.handleBlur(e);
    };

    _this.removeUnitClick = function (e) {
      var _this$props$timeSpan;

      e.preventDefault();
      var unit = Number(e.currentTarget.dataset.unit);

      var diff = -1 * _this.oneUnitInMs(unit);

      var newDate = new Date((((_this$props$timeSpan = _this.props.timeSpan) === null || _this$props$timeSpan === void 0 ? void 0 : _this$props$timeSpan.getTime()) || 0) + diff);

      _this.handleLimits(newDate);
    };

    _this.onUnitChanged = function (e) {
      // this.handleHoursChange(e.target.value);
      var unit = Number(e.currentTarget.dataset.unit);

      _this.setState({
        currentUnitText: e.target.value,
        currentUnit: unit
      });
    };

    _this.onKeyDown = function (e) {
      if (e.key === 'Enter') {
        _this.commitState();
      }
    };

    _this.addUnitClick = function (e) {
      var _this$props$timeSpan2;

      e.preventDefault();
      var unit = Number(e.currentTarget.dataset.unit);

      var diff = _this.oneUnitInMs(unit);

      var newDate = new Date((((_this$props$timeSpan2 = _this.props.timeSpan) === null || _this$props$timeSpan2 === void 0 ? void 0 : _this$props$timeSpan2.getTime()) || 0) + diff);

      _this.handleLimits(newDate);
    };

    _this.removeUnitClick = _this.removeUnitClick.bind(_assertThisInitialized(_this));
    _this.addUnitClick = _this.addUnitClick.bind(_assertThisInitialized(_this));
    _this.onUnitChanged = _this.onUnitChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TimeSpanRaw, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          label = _this$props.label,
          timeSpan = _this$props.timeSpan,
          validUnits = _this$props.validUnits,
          initialUnits = _this$props.initialUnits,
          _units = _this$props.units;

      var units = _units || this.getUnits(timeSpan, validUnits, initialUnits);

      var unitsArr = allUnits.filter(function (u) {
        return (units & u) !== 0;
      }).reverse();
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: this.props.title
      }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", _extends({}, this.props.id && {
        id: this.props.id
      }, {
        className: 'input__base timeSpan-input ' + this.getValidationClass() + ' ' + (this.props.className ? this.props.className : ''),
        ref: this.containerRef
      }), label && react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
        className: "timeSpan-input__label"
      }, label), unitsArr.map(function (unit) {
        return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: "",
          key: unit
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: "timeSpan-input__arrows__container"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", _extends({
          className: "plus",
          onClick: _this2.addUnitClick
        }, _this2.props.id && {
          id: _this2.props.id + '-add-hours-button'
        }, {
          "data-unit": unit
        }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0__, null)), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
          className: "input-padding"
        }, react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("input", _extends({}, _this2.props.id && {
          id: _this2.props.id + '-' + unit + '-input'
        }, {
          disabled: _this2.getDisabled(),
          required: _this2.props.required,
          className: classnames__WEBPACK_IMPORTED_MODULE_5__('timeSpan-input__time', {
            filled: _this2.state.value,
            'timeSpan-input__time--ms': unit === TimeSpanUnit.Millisecond
          }),
          onChange: _this2.onUnitChanged,
          value: _this2.state.currentUnit === unit ? _this2.state.currentUnitText : _this2.getValue(timeSpan, unit),
          onBlur: _this2.onBlur,
          onFocus: _this2.handleFocus,
          type: "number",
          "data-unit": unit,
          onKeyDown: _this2.onKeyDown
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
          className: "highlight"
        })), react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("button", _extends({
          className: "minus",
          onClick: _this2.removeUnitClick
        }, _this2.props.id && {
          id: _this2.props.id + '-subtract-hours-button'
        }, {
          "data-unit": unit
        }), react__WEBPACK_IMPORTED_MODULE_1__["createElement"](material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_0__, null))), _this2.props.unitToString(unit));
      }), this.renderDefaultValidation()));
    }
  }, {
    key: "getUnits",
    value: function getUnits(time, validUnits, initialUnits) {
      if (!time) {
        return initialUnits;
      }

      var ms = time.getTime();
      var units = TimeSpanUnit.Millisecond | TimeSpanUnit.Second;

      if (ms >= 1000) {
        units += TimeSpanUnit.Minute;
      }

      if (ms >= 60000) {
        units += TimeSpanUnit.Hour;
      }

      if (ms >= 60 * 60000) {
        units += TimeSpanUnit.Day;
      }

      if (ms >= 24 * 60 * 60000) {
        units += TimeSpanUnit.Year;
      }

      var tagMask = allTimeSpanUnits & ~validUnits;
      units &= ~tagMask;
      return units || initialUnits;
    }
  }, {
    key: "getValue",
    value: function getValue(time, unit) {
      if (!time || !unit) {
        return 0;
      }

      switch (unit) {
        case TimeSpanUnit.Millisecond:
          return Math.floor(time.getTime() % 1000);

        case TimeSpanUnit.Second:
          return Math.floor(time.getTime() / 1000 % 60);

        case TimeSpanUnit.Minute:
          return Math.floor(time.getTime() / (60 * 1000) % 60);

        case TimeSpanUnit.Hour:
          return Math.floor(time.getTime() / (3600 * 1000) % 24);

        case TimeSpanUnit.Day:
          return Math.floor(time.getTime() / (24 * 3600 * 1000) % 365);

        case TimeSpanUnit.Year:
          return Math.floor(time.getTime() / (365 * 24 * 3600 * 1000));

        default:
          return 0;
      }
    }
  }, {
    key: "oneUnitInMs",
    value: function oneUnitInMs(unit) {
      if (!unit) {
        return 0;
      }

      switch (unit) {
        case TimeSpanUnit.Millisecond:
          return 1;

        case TimeSpanUnit.Second:
          return 1000;

        case TimeSpanUnit.Minute:
          return 60000;

        case TimeSpanUnit.Hour:
          return 3600000;

        case TimeSpanUnit.Day:
          return 24 * 3600000;

        case TimeSpanUnit.Year:
          return 24 * 365 * 3600000;

        default:
          return 0;
      }
    }
  }, {
    key: "maxOfUnit",
    value: function maxOfUnit(unit) {
      if (!unit) {
        return 0;
      }

      switch (unit) {
        case TimeSpanUnit.Millisecond:
          return 1000;

        case TimeSpanUnit.Second:
          return 60;

        case TimeSpanUnit.Minute:
          return 60;

        case TimeSpanUnit.Hour:
          return 24;

        case TimeSpanUnit.Day:
          return 365;

        case TimeSpanUnit.Year:
          return 9999;

        default:
          return 0;
      }
    }
  }, {
    key: "commitState",
    value: function commitState() {
      if (this.state.currentUnit) {
        var num = Number(this.state.currentUnitText);

        if (!isNaN(num)) {
          var newOfUnitMs = num * this.oneUnitInMs(this.state.currentUnit);
          var oldOfUnitMs = this.getValue(this.props.timeSpan, this.state.currentUnit) * this.oneUnitInMs(this.state.currentUnit);
          var maxOfUnitMs = this.maxOfUnit(this.state.currentUnit) * this.oneUnitInMs(this.state.currentUnit);
          var moreThanMax = maxOfUnitMs < newOfUnitMs;
          var diff = newOfUnitMs - oldOfUnitMs;

          if (moreThanMax) {
            this.handleLimits(new Date(newOfUnitMs));
          } else {
            var _this$props$timeSpan3;

            this.handleLimits(new Date((((_this$props$timeSpan3 = this.props.timeSpan) === null || _this$props$timeSpan3 === void 0 ? void 0 : _this$props$timeSpan3.getTime()) || 0) + diff));
          }
        }

        this.setState({
          currentUnit: undefined,
          currentUnitText: undefined
        });
      }
    }
  }, {
    key: "handleLimits",
    value: function handleLimits(time) {
      if (this.props.min) {
        if (time.getTime() - this.props.min.getTime() <= 0) {
          this.props.timeSpanChange(new Date(this.props.min.getTime()));
          return;
        }
      }

      if (this.props.max) {
        if (this.props.max.getTime() - time.getTime() <= 0) {
          this.props.timeSpanChange(new Date(this.props.max.getTime()));
          return;
        }
      }

      this.props.timeSpanChange(time);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return TimeSpanRaw;
}(_base_input_BaseInput__WEBPACK_IMPORTED_MODULE_3__["BaseInput"]);
TimeSpanRaw.defaultProps = Object.assign({}, _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_3__["BaseInput"].defaultProps, {
  type: 'time',
  placeholder: '',
  validUnits: allTimeSpanUnits,
  initialUnits: allTimeSpanUnits,
  units: TimeSpanUnit.Dynamic,
  unitToString: function unitToString(unit) {
    switch (unit) {
      case TimeSpanUnit.Millisecond:
        return 'ms';

      case TimeSpanUnit.Second:
        return 's';

      case TimeSpanUnit.Minute:
        return 'm';

      case TimeSpanUnit.Hour:
        return 'h';

      case TimeSpanUnit.Day:
        return 'd';

      case TimeSpanUnit.Year:
        return 'y';

      default:
        return '';
    }
  },
  min: new Date(0)
});
var TimeSpan = Object(_form_withFormContext__WEBPACK_IMPORTED_MODULE_4__["withFormContext"])(TimeSpanRaw);
var _default = TimeSpan;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(allTimeSpanUnits, "allTimeSpanUnits", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\timeSpan\\TimeSpan.tsx");
  reactHotLoader.register(getValues, "getValues", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\timeSpan\\TimeSpan.tsx");
  reactHotLoader.register(allUnits, "allUnits", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\timeSpan\\TimeSpan.tsx");
  reactHotLoader.register(TimeSpanRaw, "TimeSpanRaw", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\timeSpan\\TimeSpan.tsx");
  reactHotLoader.register(TimeSpan, "TimeSpan", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\timeSpan\\TimeSpan.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\timeSpan\\TimeSpan.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGltZVNwYW4vVGltZVNwYW4udHN4Il0sIm5hbWVzIjpbIlRpbWVTcGFuVW5pdCIsImFsbFRpbWVTcGFuVW5pdHMiLCJEYXkiLCJIb3VyIiwiTWlsbGlzZWNvbmQiLCJNaW51dGUiLCJTZWNvbmQiLCJZZWFyIiwiZ2V0VmFsdWVzIiwiZW51bWVyYXRpb24iLCJ2YWx1ZXMiLCJ2YWx1ZSIsImlzTmFOIiwiTnVtYmVyIiwicHVzaCIsImFsbFVuaXRzIiwiVGltZVNwYW5SYXciLCJwcm9wcyIsIm9uQmx1ciIsImUiLCJjb21taXRTdGF0ZSIsImhhbmRsZUJsdXIiLCJyZW1vdmVVbml0Q2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsInVuaXQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImRpZmYiLCJvbmVVbml0SW5NcyIsIm5ld0RhdGUiLCJEYXRlIiwidGltZVNwYW4iLCJnZXRUaW1lIiwiaGFuZGxlTGltaXRzIiwib25Vbml0Q2hhbmdlZCIsInNldFN0YXRlIiwiY3VycmVudFVuaXRUZXh0IiwidGFyZ2V0IiwiY3VycmVudFVuaXQiLCJvbktleURvd24iLCJrZXkiLCJhZGRVbml0Q2xpY2siLCJiaW5kIiwibGFiZWwiLCJ2YWxpZFVuaXRzIiwiaW5pdGlhbFVuaXRzIiwiX3VuaXRzIiwidW5pdHMiLCJnZXRVbml0cyIsInVuaXRzQXJyIiwiZmlsdGVyIiwidSIsInJldmVyc2UiLCJ0aXRsZSIsImlkIiwiZ2V0VmFsaWRhdGlvbkNsYXNzIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyUmVmIiwibWFwIiwiZ2V0RGlzYWJsZWQiLCJyZXF1aXJlZCIsImNsYXNzTmFtZXMiLCJmaWxsZWQiLCJzdGF0ZSIsImdldFZhbHVlIiwiaGFuZGxlRm9jdXMiLCJ1bml0VG9TdHJpbmciLCJyZW5kZXJEZWZhdWx0VmFsaWRhdGlvbiIsInRpbWUiLCJtcyIsInRhZ01hc2siLCJNYXRoIiwiZmxvb3IiLCJudW0iLCJuZXdPZlVuaXRNcyIsIm9sZE9mVW5pdE1zIiwibWF4T2ZVbml0TXMiLCJtYXhPZlVuaXQiLCJtb3JlVGhhbk1heCIsInVuZGVmaW5lZCIsIm1pbiIsInRpbWVTcGFuQ2hhbmdlIiwibWF4IiwiQmFzZUlucHV0IiwiZGVmYXVsdFByb3BzIiwiT2JqZWN0IiwiYXNzaWduIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiRHluYW1pYyIsIlRpbWVTcGFuIiwid2l0aEZvcm1Db250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztDQUdBOztBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRU8sSUFBS0EsWUFBWjs7V0FBWUEsWTtBQUFBQSxjLENBQUFBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtBQUFBQSxjLENBQUFBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtBQUFBQSxjLENBQUFBLFk7R0FBQUEsWSxLQUFBQSxZOztBQVVMLElBQU1DLGdCQUE4QixHQUN6Q0QsWUFBWSxDQUFDRSxHQUFiLEdBQ0FGLFlBQVksQ0FBQ0csSUFEYixHQUVBSCxZQUFZLENBQUNJLFdBRmIsR0FHQUosWUFBWSxDQUFDSyxNQUhiLEdBSUFMLFlBQVksQ0FBQ00sTUFKYixHQUtBTixZQUFZLENBQUNPLElBTlI7O0FBUVAsU0FBU0MsU0FBVCxDQUFzQkMsV0FBdEIsRUFBb0Q7QUFDbEQsTUFBSUMsTUFBb0IsR0FBRyxFQUEzQjs7QUFDQSxPQUFLLElBQUlDLEtBQVQsSUFBa0JGLFdBQWxCLEVBQStCO0FBQzdCLFFBQUlHLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRixLQUFELENBQVAsQ0FBVCxFQUEwQjtBQUN4QkQsWUFBTSxDQUFDSSxJQUFQLENBQVlMLFdBQVcsQ0FBQ0UsS0FBRCxDQUF2QjtBQUNEO0FBQ0Y7O0FBQ0QsU0FBT0QsTUFBUDtBQUNEOztBQUVELElBQU1LLFFBQVEsR0FBR1AsU0FBUyxDQUFDUixZQUFELENBQTFC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QWxCO0FBQ0UsZUFBTyxHQUFQOztBQUNGO0FBQ0UsZUFBTyxFQUFQO0FBZEo7QUFnQkQsR0F2Qm9FO0FBd0JyRXlFLEtBQUcsRUFBRSxJQUFJbEQsSUFBSixDQUFTLENBQVQ7QUF4QmdFLENBQTFDLEM7QUErUnhCLElBQU00RCxRQUFRLEdBQUdDLDZFQUFlLENBQWdCM0UsV0FBaEIsQ0FBaEM7ZUFFUTBFLFE7QUFBQTs7Ozs7Ozs7OzswQkEzVUZ6RixnQjswQkFRSk8sUzswQkFVSE8sUTswQkFtQk9DLFc7MEJBb1NBMEUsUSIsImZpbGUiOiI1ODRhMGYzLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEFycm93SWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvaGFyZHdhcmUvc3ZnL3Byb2R1Y3Rpb24vaWNfa2V5Ym9hcmRfYXJyb3dfZG93bl8yNHB4LnN2Zyc7XHJcblxyXG4vLyBMaWJzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIE1pc2NcclxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSAnLi4vaW5wdXRHcm91cC9JbnB1dEdyb3VwJztcclxuaW1wb3J0IHtcclxuICBCYXNlSW5wdXRQcm9wcyxcclxuICBCYXNlSW5wdXRTdGF0ZSxcclxuICBCYXNlSW5wdXQsXHJcbn0gZnJvbSAnLi4vYmFzZS9pbnB1dC9CYXNlSW5wdXQnO1xyXG5pbXBvcnQgeyB3aXRoRm9ybUNvbnRleHQgfSBmcm9tICcuLi9mb3JtL3dpdGhGb3JtQ29udGV4dCc7XHJcbmltcG9ydCAqIGFzIGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5leHBvcnQgZW51bSBUaW1lU3BhblVuaXQge1xyXG4gIER5bmFtaWMgPSAwLFxyXG4gIE1pbGxpc2Vjb25kID0gMSxcclxuICBTZWNvbmQgPSAyLFxyXG4gIE1pbnV0ZSA9IDQsXHJcbiAgSG91ciA9IDgsXHJcbiAgRGF5ID0gMTYsXHJcbiAgWWVhciA9IDMyLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWxsVGltZVNwYW5Vbml0czogVGltZVNwYW5Vbml0ID1cclxuICBUaW1lU3BhblVuaXQuRGF5IHxcclxuICBUaW1lU3BhblVuaXQuSG91ciB8XHJcbiAgVGltZVNwYW5Vbml0Lk1pbGxpc2Vjb25kIHxcclxuICBUaW1lU3BhblVuaXQuTWludXRlIHxcclxuICBUaW1lU3BhblVuaXQuU2Vjb25kIHxcclxuICBUaW1lU3BhblVuaXQuWWVhcjtcclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlczxUPihlbnVtZXJhdGlvbjogVCk6IFRba2V5b2YgVF1bXSB7XHJcbiAgdmFyIHZhbHVlczogVFtrZXlvZiBUXVtdID0gW107XHJcbiAgZm9yICh2YXIgdmFsdWUgaW4gZW51bWVyYXRpb24pIHtcclxuICAgIGlmIChpc05hTihOdW1iZXIodmFsdWUpKSkge1xyXG4gICAgICB2YWx1ZXMucHVzaChlbnVtZXJhdGlvblt2YWx1ZV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdmFsdWVzO1xyXG59XHJcblxyXG5jb25zdCBhbGxVbml0cyA9IGdldFZhbHVlcyhUaW1lU3BhblVuaXQpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaW1lU3BhblByb3BzIGV4dGVuZHMgQmFzZUlucHV0UHJvcHM8SFRNTElucHV0RWxlbWVudD4ge1xyXG4gIG9uQ2hhbmdlPzogbmV2ZXI7XHJcbiAgdGltZVNwYW5DaGFuZ2U6ICh0aW1lOiBEYXRlKSA9PiB2b2lkO1xyXG4gIHRpbWVTcGFuOiBEYXRlO1xyXG4gIG1pbj86IERhdGU7XHJcbiAgbWF4PzogRGF0ZTtcclxuICBpbml0aWFsVW5pdHM/OiBUaW1lU3BhblVuaXQ7XHJcbiAgdW5pdHM/OiBUaW1lU3BhblVuaXQ7XHJcbiAgdmFsaWRVbml0cz86IFRpbWVTcGFuVW5pdDtcclxuICB1bml0VG9TdHJpbmc/OiAodW5pdDogVGltZVNwYW5Vbml0KSA9PiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZVNwYW5TdGF0ZSBleHRlbmRzIEJhc2VJbnB1dFN0YXRlIHtcclxuICBjdXJyZW50VW5pdFRleHQ6IHN0cmluZztcclxuICBjdXJyZW50VW5pdDogVGltZVNwYW5Vbml0O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGltZVNwYW5SYXcgZXh0ZW5kcyBCYXNlSW5wdXQ8XHJcbiAgVGltZVNwYW5Qcm9wcyxcclxuICBUaW1lU3BhblN0YXRlLFxyXG4gIEhUTUxJbnB1dEVsZW1lbnRcclxuPiB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBCYXNlSW5wdXQuZGVmYXVsdFByb3BzLCB7XHJcbiAgICB0eXBlOiAndGltZScsXHJcbiAgICBwbGFjZWhvbGRlcjogJycsXHJcbiAgICB2YWxpZFVuaXRzOiBhbGxUaW1lU3BhblVuaXRzLFxyXG4gICAgaW5pdGlhbFVuaXRzOiBhbGxUaW1lU3BhblVuaXRzLFxyXG4gICAgdW5pdHM6IFRpbWVTcGFuVW5pdC5EeW5hbWljLFxyXG4gICAgdW5pdFRvU3RyaW5nOiAodW5pdDogVGltZVNwYW5Vbml0KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodW5pdCkge1xyXG4gICAgICAgIGNhc2UgVGltZVNwYW5Vbml0Lk1pbGxpc2Vjb25kOlxyXG4gICAgICAgICAgcmV0dXJuICdtcyc7XHJcbiAgICAgICAgY2FzZSBUaW1lU3BhblVuaXQuU2Vjb25kOlxyXG4gICAgICAgICAgcmV0dXJuICdzJztcclxuICAgICAgICBjYXNlIFRpbWVTcGFuVW5pdC5NaW51dGU6XHJcbiAgICAgICAgICByZXR1cm4gJ20nO1xyXG4gICAgICAgIGNhc2UgVGltZVNwYW5Vbml0LkhvdXI6XHJcbiAgICAgICAgICByZXR1cm4gJ2gnO1xyXG4gICAgICAgIGNhc2UgVGltZVNwYW5Vbml0LkRheTpcclxuICAgICAgICAgIHJldHVybiAnZCc7XHJcbiAgICAgICAgY2FzZSBUaW1lU3BhblVuaXQuWWVhcjpcclxuICAgICAgICAgIHJldHVybiAneSc7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1pbjogbmV3IERhdGUoMCksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBUaW1lU3BhblByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnJlbW92ZVVuaXRDbGljayA9IHRoaXMucmVtb3ZlVW5pdENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmFkZFVuaXRDbGljayA9IHRoaXMuYWRkVW5pdENsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uVW5pdENoYW5nZWQgPSB0aGlzLm9uVW5pdENoYW5nZWQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIGxhYmVsLFxyXG4gICAgICB0aW1lU3BhbixcclxuICAgICAgdmFsaWRVbml0cyxcclxuICAgICAgaW5pdGlhbFVuaXRzLFxyXG4gICAgICB1bml0czogX3VuaXRzLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB1bml0cyA9IF91bml0cyB8fCB0aGlzLmdldFVuaXRzKHRpbWVTcGFuLCB2YWxpZFVuaXRzLCBpbml0aWFsVW5pdHMpO1xyXG4gICAgY29uc3QgdW5pdHNBcnIgPSBhbGxVbml0cy5maWx0ZXIodSA9PiAodW5pdHMgJiB1KSAhPT0gMCkucmV2ZXJzZSgpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPElucHV0R3JvdXAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAnaW5wdXRfX2Jhc2UgdGltZVNwYW4taW5wdXQgJyArXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VmFsaWRhdGlvbkNsYXNzKCkgK1xyXG4gICAgICAgICAgICAnICcgK1xyXG4gICAgICAgICAgICAodGhpcy5wcm9wcy5jbGFzc05hbWUgPyB0aGlzLnByb3BzLmNsYXNzTmFtZSA6ICcnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVmPXt0aGlzLmNvbnRhaW5lclJlZn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bGFiZWwgJiYgPGRpdiBjbGFzc05hbWU9XCJ0aW1lU3Bhbi1pbnB1dF9fbGFiZWxcIj57bGFiZWx9PC9kaXY+fVxyXG4gICAgICAgICAge3VuaXRzQXJyLm1hcCh1bml0ID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBrZXk9e3VuaXR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZVNwYW4taW5wdXRfX2Fycm93c19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsdXNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZFVuaXRDbGlja31cclxuICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctYWRkLWhvdXJzLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXVuaXQ9e3VuaXR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxBcnJvd0ljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1wYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctJyArIHVuaXQgKyAnLWlucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5nZXREaXNhYmxlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0aGlzLnByb3BzLnJlcXVpcmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygndGltZVNwYW4taW5wdXRfX3RpbWUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsZWQ6IHRoaXMuc3RhdGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAndGltZVNwYW4taW5wdXRfX3RpbWUtLW1zJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5pdCA9PT0gVGltZVNwYW5Vbml0Lk1pbGxpc2Vjb25kLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVW5pdENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5jdXJyZW50VW5pdCA9PT0gdW5pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUuY3VycmVudFVuaXRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRWYWx1ZSh0aW1lU3BhbiwgdW5pdClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cclxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdW5pdD17dW5pdH1cclxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1pbnVzXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZW1vdmVVbml0Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXN1YnRyYWN0LWhvdXJzLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXVuaXQ9e3VuaXR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxBcnJvd0ljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVuaXRUb1N0cmluZyh1bml0KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJEZWZhdWx0VmFsaWRhdGlvbigpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRVbml0cyhcclxuICAgIHRpbWU6IERhdGUsXHJcbiAgICB2YWxpZFVuaXRzOiBUaW1lU3BhblVuaXQsXHJcbiAgICBpbml0aWFsVW5pdHM6IFRpbWVTcGFuVW5pdFxyXG4gICkge1xyXG4gICAgaWYgKCF0aW1lKSB7XHJcbiAgICAgIHJldHVybiBpbml0aWFsVW5pdHM7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtcyA9IHRpbWUuZ2V0VGltZSgpO1xyXG4gICAgbGV0IHVuaXRzOiBUaW1lU3BhblVuaXQgPSBUaW1lU3BhblVuaXQuTWlsbGlzZWNvbmQgfCBUaW1lU3BhblVuaXQuU2Vjb25kO1xyXG4gICAgaWYgKG1zID49IDEwMDApIHtcclxuICAgICAgdW5pdHMgKz0gVGltZVNwYW5Vbml0Lk1pbnV0ZTtcclxuICAgIH1cclxuICAgIGlmIChtcyA+PSA2MDAwMCkge1xyXG4gICAgICB1bml0cyArPSBUaW1lU3BhblVuaXQuSG91cjtcclxuICAgIH1cclxuICAgIGlmIChtcyA+PSA2MCAqIDYwMDAwKSB7XHJcbiAgICAgIHVuaXRzICs9IFRpbWVTcGFuVW5pdC5EYXk7XHJcbiAgICB9XHJcbiAgICBpZiAobXMgPj0gMjQgKiA2MCAqIDYwMDAwKSB7XHJcbiAgICAgIHVuaXRzICs9IFRpbWVTcGFuVW5pdC5ZZWFyO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGFnTWFzayA9IGFsbFRpbWVTcGFuVW5pdHMgJiB+dmFsaWRVbml0cztcclxuICAgIHVuaXRzICY9IH50YWdNYXNrO1xyXG4gICAgcmV0dXJuIHVuaXRzIHx8IGluaXRpYWxVbml0cztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VmFsdWUodGltZTogRGF0ZSwgdW5pdDogVGltZVNwYW5Vbml0KSB7XHJcbiAgICBpZiAoIXRpbWUgfHwgIXVuaXQpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgICAgY2FzZSBUaW1lU3BhblVuaXQuTWlsbGlzZWNvbmQ6XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGltZS5nZXRUaW1lKCkgJSAxMDAwKTtcclxuICAgICAgY2FzZSBUaW1lU3BhblVuaXQuU2Vjb25kOlxyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCh0aW1lLmdldFRpbWUoKSAvIDEwMDApICUgNjApO1xyXG4gICAgICBjYXNlIFRpbWVTcGFuVW5pdC5NaW51dGU6XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHRpbWUuZ2V0VGltZSgpIC8gKDYwICogMTAwMCkpICUgNjApO1xyXG4gICAgICBjYXNlIFRpbWVTcGFuVW5pdC5Ib3VyOlxyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCh0aW1lLmdldFRpbWUoKSAvICgzNjAwICogMTAwMCkpICUgMjQpO1xyXG4gICAgICBjYXNlIFRpbWVTcGFuVW5pdC5EYXk6XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHRpbWUuZ2V0VGltZSgpIC8gKDI0ICogMzYwMCAqIDEwMDApKSAlIDM2NSk7XHJcbiAgICAgIGNhc2UgVGltZVNwYW5Vbml0LlllYXI6XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGltZS5nZXRUaW1lKCkgLyAoMzY1ICogMjQgKiAzNjAwICogMTAwMCkpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbmVVbml0SW5Ncyh1bml0OiBUaW1lU3BhblVuaXQpIHtcclxuICAgIGlmICghdW5pdCkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHN3aXRjaCAodW5pdCkge1xyXG4gICAgICBjYXNlIFRpbWVTcGFuVW5pdC5NaWxsaXNlY29uZDpcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgICAgY2FzZSBUaW1lU3BhblVuaXQuU2Vjb25kOlxyXG4gICAgICAgIHJldHVybiAxMDAwO1xyXG4gICAgICBjYXNlIFRpbWVTcGFuVW5pdC5NaW51dGU6XHJcbiAgICAgICAgcmV0dXJuIDYwMDAwO1xyXG4gICAgICBjYXNlIFRpbWVTcGFuVW5pdC5Ib3VyOlxyXG4gICAgICAgIHJldHVybiAzNjAwMDAwO1xyXG4gICAgICBjYXNlIFRpbWVTcGFuVW5pdC5EYXk6XHJcbiAgICAgICAgcmV0dXJuIDI0ICogMzYwMDAwMDtcclxuICAgICAgY2FzZSBUaW1lU3BhblVuaXQuWWVhcjpcclxuICAgICAgICByZXR1cm4gMjQgKiAzNjUgKiAzNjAwMDAwO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYXhPZlVuaXQodW5pdDogVGltZVNwYW5Vbml0KSB7XHJcbiAgICBpZiAoIXVuaXQpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgICAgY2FzZSBUaW1lU3BhblVuaXQuTWlsbGlzZWNvbmQ6XHJcbiAgICAgICAgcmV0dXJuIDEwMDA7XHJcbiAgICAgIGNhc2UgVGltZVNwYW5Vbml0LlNlY29uZDpcclxuICAgICAgICByZXR1cm4gNjA7XHJcbiAgICAgIGNhc2UgVGltZVNwYW5Vbml0Lk1pbnV0ZTpcclxuICAgICAgICByZXR1cm4gNjA7XHJcbiAgICAgIGNhc2UgVGltZVNwYW5Vbml0LkhvdXI6XHJcbiAgICAgICAgcmV0dXJuIDI0O1xyXG4gICAgICBjYXNlIFRpbWVTcGFuVW5pdC5EYXk6XHJcbiAgICAgICAgcmV0dXJuIDM2NTtcclxuICAgICAgY2FzZSBUaW1lU3BhblVuaXQuWWVhcjpcclxuICAgICAgICByZXR1cm4gOTk5OTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29tbWl0U3RhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50VW5pdCkge1xyXG4gICAgICB2YXIgbnVtID0gTnVtYmVyKHRoaXMuc3RhdGUuY3VycmVudFVuaXRUZXh0KTtcclxuICAgICAgaWYgKCFpc05hTihudW0pKSB7XHJcbiAgICAgICAgY29uc3QgbmV3T2ZVbml0TXMgPSBudW0gKiB0aGlzLm9uZVVuaXRJbk1zKHRoaXMuc3RhdGUuY3VycmVudFVuaXQpO1xyXG4gICAgICAgIGNvbnN0IG9sZE9mVW5pdE1zID1cclxuICAgICAgICAgIHRoaXMuZ2V0VmFsdWUodGhpcy5wcm9wcy50aW1lU3BhbiwgdGhpcy5zdGF0ZS5jdXJyZW50VW5pdCkgKlxyXG4gICAgICAgICAgdGhpcy5vbmVVbml0SW5Ncyh0aGlzLnN0YXRlLmN1cnJlbnRVbml0KTtcclxuICAgICAgICBjb25zdCBtYXhPZlVuaXRNcyA9XHJcbiAgICAgICAgICB0aGlzLm1heE9mVW5pdCh0aGlzLnN0YXRlLmN1cnJlbnRVbml0KSAqXHJcbiAgICAgICAgICB0aGlzLm9uZVVuaXRJbk1zKHRoaXMuc3RhdGUuY3VycmVudFVuaXQpO1xyXG4gICAgICAgIGNvbnN0IG1vcmVUaGFuTWF4ID0gbWF4T2ZVbml0TXMgPCBuZXdPZlVuaXRNcztcclxuICAgICAgICBjb25zdCBkaWZmID0gbmV3T2ZVbml0TXMgLSBvbGRPZlVuaXRNcztcclxuICAgICAgICBpZiAobW9yZVRoYW5NYXgpIHtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlTGltaXRzKG5ldyBEYXRlKG5ld09mVW5pdE1zKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlTGltaXRzKFxyXG4gICAgICAgICAgICBuZXcgRGF0ZSgodGhpcy5wcm9wcy50aW1lU3Bhbj8uZ2V0VGltZSgpIHx8IDApICsgZGlmZilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50VW5pdDogdW5kZWZpbmVkLCBjdXJyZW50VW5pdFRleHQ6IHVuZGVmaW5lZCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25CbHVyID0gKGU6IFJlYWN0LkZvY3VzRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHRoaXMuY29tbWl0U3RhdGUoKTtcclxuICAgIHRoaXMuaGFuZGxlQmx1cihlKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJlbW92ZVVuaXRDbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdW5pdDogVGltZVNwYW5Vbml0ID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnVuaXQpO1xyXG4gICAgY29uc3QgZGlmZiA9IC0xICogdGhpcy5vbmVVbml0SW5Ncyh1bml0KTtcclxuICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSgodGhpcy5wcm9wcy50aW1lU3Bhbj8uZ2V0VGltZSgpIHx8IDApICsgZGlmZik7XHJcbiAgICB0aGlzLmhhbmRsZUxpbWl0cyhuZXdEYXRlKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uVW5pdENoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIC8vIHRoaXMuaGFuZGxlSG91cnNDaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgdW5pdDogVGltZVNwYW5Vbml0ID0gTnVtYmVyKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnVuaXQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRVbml0VGV4dDogZS50YXJnZXQudmFsdWUsIGN1cnJlbnRVbml0OiB1bml0IH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25LZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICB0aGlzLmNvbW1pdFN0YXRlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBhZGRVbml0Q2xpY2sgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHVuaXQ6IFRpbWVTcGFuVW5pdCA9IE51bWJlcihlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC51bml0KTtcclxuICAgIGNvbnN0IGRpZmYgPSB0aGlzLm9uZVVuaXRJbk1zKHVuaXQpO1xyXG4gICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKCh0aGlzLnByb3BzLnRpbWVTcGFuPy5nZXRUaW1lKCkgfHwgMCkgKyBkaWZmKTtcclxuICAgIHRoaXMuaGFuZGxlTGltaXRzKG5ld0RhdGUpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlTGltaXRzKHRpbWU6IERhdGUpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLm1pbikge1xyXG4gICAgICBpZiAodGltZS5nZXRUaW1lKCkgLSB0aGlzLnByb3BzLm1pbi5nZXRUaW1lKCkgPD0gMCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMudGltZVNwYW5DaGFuZ2UobmV3IERhdGUodGhpcy5wcm9wcy5taW4uZ2V0VGltZSgpKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5tYXgpIHtcclxuICAgICAgaWYgKHRoaXMucHJvcHMubWF4LmdldFRpbWUoKSAtIHRpbWUuZ2V0VGltZSgpIDw9IDApIHtcclxuICAgICAgICB0aGlzLnByb3BzLnRpbWVTcGFuQ2hhbmdlKG5ldyBEYXRlKHRoaXMucHJvcHMubWF4LmdldFRpbWUoKSkpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy50aW1lU3BhbkNoYW5nZSh0aW1lKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lU3BhbiA9IHdpdGhGb3JtQ29udGV4dDxUaW1lU3BhblByb3BzPihUaW1lU3BhblJhdyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lU3BhbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==