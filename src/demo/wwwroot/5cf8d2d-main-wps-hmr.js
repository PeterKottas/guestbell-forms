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
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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







var DAY_FORMAT = 'dd/M/YYYY';
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
        var allDaysHaveDates = this.props.days.every(function (d) {
          return Boolean(d.date);
        });

        if (allDaysHaveDates) {
          this.setValid();
        } else {
          this.setInvalid(['Please choose date']);
        }
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.days !== nextProps.days) {
        var allDaysHaveDates = !nextProps.days || nextProps.days.every(function (d) {
          return Boolean(d.date);
        });

        if (allDaysHaveDates) {
          this.setValid();
        } else {
          this.setInvalid(['Please choose date']);
        }
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

      return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", _extends({}, this.props.id && {
        id: this.props.id
      }, {
        className: 'input__base openingHoursSpecial-input ' + this.getValidationClass() + ' ' + (this.props.className ? this.props.className : ''),
        ref: this.containerRef
      }), this.props.days.map(function (day, index) {
        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_openingHoursDay_OpeningHoursDay__WEBPACK_IMPORTED_MODULE_4__["OpeningHoursDay"], _extends({}, _this2.props.id && {
          id: _this2.props.id + '-opening-hours-day-' + index.toString()
        }, {
          key: index,
          label: react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", null, _utils_OpeningHoursUtil__WEBPACK_IMPORTED_MODULE_3__["default"].getLabelSuffix(day), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
            className: "float-right"
          }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], _extends({}, _this2.props.id && {
            id: _this2.props.id + '-remove-button-' + index.toString()
          }, {
            blank: true,
            className: "openingHoursSpecial-input__button openingHoursSpecial-input__button--remove",
            onClick: _this2.removeDayClick(index)
          }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](material_design_icons_content_svg_production_ic_add_circle_outline_24px_svg__WEBPACK_IMPORTED_MODULE_0__, null)))),
          openingHours: {
            times: day.times
          },
          onOpeningHoursChange: _this2.openingHoursChanged(index, day),
          title: react__WEBPACK_IMPORTED_MODULE_2__["createElement"](DatePicker, _extends({}, _this2.props.id && {
            id: _this2.props.id + '-date-picker-' + index.toString()
          }, {
            customInput: react__WEBPACK_IMPORTED_MODULE_2__["createElement"](DateInput, null, !day.date && 'Choose date'),
            placeholder: _this2.props.placeholder,
            selected: day.date,
            dateFormat: DAY_FORMAT,
            onChange: _this2.dateChanged(index, day),
            excludeDates: _this2.props.days.filter(function (d) {
              return d.date;
            }),
            withPortal: true,
            minDate: new Date()
          }))
        }));
      }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
        className: "bar"
      }), this.renderDefaultValidation());
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
var OpeningHoursSpecial = Object(_form_withFormContext__WEBPACK_IMPORTED_MODULE_7__["withFormContext"])(OpeningHoursSpecialRaw);
var _default = OpeningHoursSpecial;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DatePicker, "DatePicker", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\openingHours\\openingHoursSpecial\\OpeningHoursSpecial.tsx");
  reactHotLoader.register(DAY_FORMAT, "DAY_FORMAT", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\openingHours\\openingHoursSpecial\\OpeningHoursSpecial.tsx");
  reactHotLoader.register(DateInput, "DateInput", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\openingHours\\openingHoursSpecial\\OpeningHoursSpecial.tsx");
  reactHotLoader.register(OpeningHoursSpecialRaw, "OpeningHoursSpecialRaw", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\openingHours\\openingHoursSpecial\\OpeningHoursSpecial.tsx");
  reactHotLoader.register(OpeningHoursSpecial, "OpeningHoursSpecial", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\openingHours\\openingHoursSpecial\\OpeningHoursSpecial.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\openingHours\\openingHoursSpecial\\OpeningHoursSpecial.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvb3BlbmluZ0hvdXJzL29wZW5pbmdIb3Vyc1NwZWNpYWwvT3BlbmluZ0hvdXJzU3BlY2lhbC50c3giXSwibmFtZXMiOlsiRGF0ZVBpY2tlciIsInJlcXVpcmUiLCJkZWZhdWx0IiwidW5kZWZpbmVkIiwiREFZX0ZPUk1BVCIsIkRhdGVJbnB1dCIsInByb3BzIiwib25DbGljayIsImRpc3BsYXkiLCJtYXJnaW5SaWdodCIsImNoaWxkcmVuIiwidmFsdWUiLCJSZWFjdCIsIk9wZW5pbmdIb3Vyc1NwZWNpYWxSYXciLCJyZW1vdmVEYXlDbGljayIsImluZGV4Iiwib25EYXlzQ2hhbmdlIiwiZGF5cyIsImZpbHRlciIsImQiLCJpbmRleElubmVyIiwiZGF0ZUNoYW5nZWQiLCJkYXkiLCJkYXRlIiwic2xpY2UiLCJvcGVuaW5nSG91cnNDaGFuZ2VkIiwib3BlbmluZ0hvdXJzIiwic3RhdGUiLCJ0b3VjaGVkIiwiYWxsRGF5c0hhdmVEYXRlcyIsImV2ZXJ5IiwiQm9vbGVhbiIsInNldFZhbGlkIiwic2V0SW52YWxpZCIsIm5leHRQcm9wcyIsIkVycm9yIiwiaWQiLCJnZXRWYWxpZGF0aW9uQ2xhc3MiLCJjbGFzc05hbWUiLCJjb250YWluZXJSZWYiLCJtYXAiLCJ0b1N0cmluZyIsIk9wZW5pbmdIb3Vyc1V0aWwiLCJnZXRMYWJlbFN1ZmZpeCIsInRpbWVzIiwicGxhY2Vob2xkZXIiLCJEYXRlIiwicmVuZGVyRGVmYXVsdFZhbGlkYXRpb24iLCJCYXNlSW5wdXQiLCJkZWZhdWx0UHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0eXBlIiwiT3BlbmluZ0hvdXJzU3BlY2lhbCIsIndpdGhGb3JtQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTs7QUFDQSxJQUFJO0FBQ0YsTUFBSUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLHFFQUFELENBQVAsQ0FBNEJDLE9BQTdDO0FBQ0QsQ0FGRCxDQUVFLGdCQUFNO0FBQ05GLFlBQVUsR0FBR0csU0FBYjtBQUNELEMsQ0FFRDs7O0FBQ0E7QUFDQTtBQUlBO0FBS0E7QUFFQTtBQW9CQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFFTyxJQUFNQyxTQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBSWtCO0FBQ2QsYUFDRSxvREFBQyxxREFBRDtBQUFRLGFBQUssRUFBRSxJQUFmO0FBQXFCLFlBQUksRUFBQyxTQUExQjtBQUFvQyxlQUFPLEVBQUUsS0FBS0MsS0FBTCxDQUFXQztBQUF4RCxTQUNFO0FBQUssYUFBSyxFQUFFO0FBQUVDLGlCQUFPLEVBQUU7QUFBWDtBQUFaLFNBQ0Usb0RBQUMsMEZBQUQ7QUFBVSxhQUFLLEVBQUU7QUFBRUMscUJBQVcsRUFBRTtBQUFmO0FBQWpCLFFBREYsRUFFRyxLQUFLSCxLQUFMLENBQVdJLFFBQVgsR0FBc0IsS0FBS0osS0FBTCxDQUFXSSxRQUFqQyxHQUE0QyxLQUFLSixLQUFMLENBQVdLLEtBRjFELENBREYsQ0FERjtBQVFEO0FBYkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEVBQStCQyxtREFBL0I7QUFnQk8sSUFBTUMsc0JBQWI7QUFBQTtBQUFBO0FBQUE7O0FBVUUsa0NBQVlQLEtBQVosRUFBZ0Q7QUFBQTs7QUFBQTs7QUFDOUMsZ0dBQU1BLEtBQU47O0FBRDhDLFVBdUd4Q1EsY0F2R3dDLEdBdUd2QixVQUFDQyxLQUFEO0FBQUEsYUFBbUI7QUFBQSxlQUMxQyxNQUFLVCxLQUFMLENBQVdVLFlBQVgsQ0FDRSxNQUFLVixLQUFMLENBQVdXLElBQVgsQ0FBZ0JDLE1BQWhCLENBQXVCLFVBQUNDLENBQUQsRUFBSUMsVUFBSjtBQUFBLGlCQUFtQkEsVUFBVSxLQUFLTCxLQUFsQztBQUFBLFNBQXZCLENBREYsQ0FEMEM7QUFBQSxPQUFuQjtBQUFBLEtBdkd1Qjs7QUFBQSxVQTRHeENNLFdBNUd3QyxHQTRHMUIsVUFBQ04sS0FBRCxFQUFnQk8sR0FBaEI7QUFBQSxhQUE0QyxVQUNoRUMsSUFEZ0UsRUFFN0Q7QUFDSCxZQUFJTixJQUFJLEdBQUcsTUFBS1gsS0FBTCxDQUFXVyxJQUFYLENBQWdCTyxLQUFoQixDQUFzQixDQUF0QixDQUFYOztBQUNBUCxZQUFJLENBQUNGLEtBQUQsQ0FBSixxQkFBbUJPLEdBQW5CO0FBQXdCQyxjQUFJLEVBQUpBO0FBQXhCOztBQUNBLGNBQUtqQixLQUFMLENBQVdVLFlBQVgsQ0FBd0JDLElBQXhCO0FBQ0QsT0FOcUI7QUFBQSxLQTVHMEI7O0FBQUEsVUFvSHhDUSxtQkFwSHdDLEdBb0hsQixVQUM1QlYsS0FENEIsRUFFNUJPLEdBRjRCO0FBQUEsYUFHekIsVUFBQUksWUFBWSxFQUFJO0FBQ25CLFlBQUlULElBQUksR0FBRyxNQUFLWCxLQUFMLENBQVdXLElBQVgsQ0FBZ0JPLEtBQWhCLENBQXNCLENBQXRCLENBQVg7O0FBQ0FQLFlBQUksQ0FBQ0YsS0FBRCxDQUFKLHFCQUFtQk8sR0FBbkIsTUFBMkJJLFlBQTNCOztBQUNBLGNBQUtwQixLQUFMLENBQVdVLFlBQVgsQ0FBd0JDLElBQXhCO0FBQ0QsT0FQNkI7QUFBQSxLQXBIa0I7O0FBRTlDLFVBQUtVLEtBQUwscUJBQWtCLE1BQUtBLEtBQXZCLE1BQWlDO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQWpDO0FBRjhDO0FBRy9DOztBQWJIO0FBQUE7QUFBQSx3Q0FlNkI7QUFDekIsVUFBSSxLQUFLdEIsS0FBTCxDQUFXVyxJQUFmLEVBQXFCO0FBQ25CLFlBQU1ZLGdCQUFnQixHQUFHLEtBQUt2QixLQUFMLENBQVdXLElBQVgsQ0FBZ0JhLEtBQWhCLENBQXNCLFVBQUFYLENBQUM7QUFBQSxpQkFBSVksT0FBTyxDQUFDWixDQUFDLENBQUNJLElBQUgsQ0FBWDtBQUFBLFNBQXZCLENBQXpCOztBQUNBLFlBQUlNLGdCQUFKLEVBQXNCO0FBQ3BCLGVBQUtHLFFBQUw7QUFDRCxTQUZELE1BRU87QUFDTCxlQUFLQyxVQUFMLENBQWdCLENBQUMsb0JBQUQsQ0FBaEI7QUFDRDtBQUNGO0FBQ0Y7QUF4Qkg7QUFBQTtBQUFBLDhDQTBCbUNDLFNBMUJuQyxFQTBCMkU7QUFDdkUsVUFBSSxLQUFLNUIsS0FBTCxDQUFXVyxJQUFYLEtBQW9CaUIsU0FBUyxDQUFDakIsSUFBbEMsRUFBd0M7QUFDdEMsWUFBTVksZ0JBQWdCLEdBQ3BCLENBQUNLLFNBQVMsQ0FBQ2pCLElBQVgsSUFBbUJpQixTQUFTLENBQUNqQixJQUFWLENBQWVhLEtBQWYsQ0FBcUIsVUFBQVgsQ0FBQztBQUFBLGlCQUFJWSxPQUFPLENBQUNaLENBQUMsQ0FBQ0ksSUFBSCxDQUFYO0FBQUEsU0FBdEIsQ0FEckI7O0FBRUEsWUFBSU0sZ0JBQUosRUFBc0I7QUFDcEIsZUFBS0csUUFBTDtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtDLFVBQUwsQ0FBZ0IsQ0FBQyxvQkFBRCxDQUFoQjtBQUNEO0FBQ0Y7QUFDRjtBQXBDSDtBQUFBO0FBQUEsNEJBc0NpQjtBQUNiO0FBQ0Q7QUF4Q0g7QUFBQTtBQUFBLDZCQTBDa0I7QUFBQTs7QUFDZCxVQUFJLENBQUNqQyxVQUFMLEVBQWlCO0FBQ2YsY0FBTSxJQUFJbUMsS0FBSixDQUNKLHlFQURJLENBQU47QUFHRDs7QUFDRCxhQUNFLHdFQUNPLEtBQUs3QixLQUFMLENBQVc4QixFQUFYLElBQWlCO0FBQ3BCQSxVQUFFLEVBQUUsS0FBSzlCLEtBQUwsQ0FBVzhCO0FBREssT0FEeEI7QUFJRSxpQkFBUyxFQUNQLDJDQUNBLEtBQUtDLGtCQUFMLEVBREEsR0FFQSxHQUZBLElBR0MsS0FBSy9CLEtBQUwsQ0FBV2dDLFNBQVgsR0FBdUIsS0FBS2hDLEtBQUwsQ0FBV2dDLFNBQWxDLEdBQThDLEVBSC9DLENBTEo7QUFVRSxXQUFHLEVBQUUsS0FBS0M7QUFWWixVQVlHLEtBQUtqQyxLQUFMLENBQVdXLElBQVgsQ0FBZ0J1QixHQUFoQixDQUFvQixVQUFDbEIsR0FBRCxFQUFNUCxLQUFOO0FBQUEsZUFDbkIsb0RBQUMsZ0ZBQUQsZUFDTyxNQUFJLENBQUNULEtBQUwsQ0FBVzhCLEVBQVgsSUFBaUI7QUFDcEJBLFlBQUUsRUFBRSxNQUFJLENBQUM5QixLQUFMLENBQVc4QixFQUFYLEdBQWdCLHFCQUFoQixHQUF3Q3JCLEtBQUssQ0FBQzBCLFFBQU47QUFEeEIsU0FEeEI7QUFJRSxhQUFHLEVBQUUxQixLQUpQO0FBS0UsZUFBSyxFQUNILGtFQUNHMkIsK0RBQWdCLENBQUNDLGNBQWpCLENBQWdDckIsR0FBaEMsQ0FESCxFQUVFO0FBQU0scUJBQVMsRUFBQztBQUFoQixhQUNFLG9EQUFDLHFEQUFELGVBQ08sTUFBSSxDQUFDaEIsS0FBTCxDQUFXOEIsRUFBWCxJQUFpQjtBQUNwQkEsY0FBRSxFQUFFLE1BQUksQ0FBQzlCLEtBQUwsQ0FBVzhCLEVBQVgsR0FBZ0IsaUJBQWhCLEdBQW9DckIsS0FBSyxDQUFDMEIsUUFBTjtBQURwQixXQUR4QjtBQUlFLGlCQUFLLEVBQUUsSUFKVDtBQUtFLHFCQUFTLEVBQUMsNkVBTFo7QUFNRSxtQkFBTyxFQUFFLE1BQUksQ0FBQzNCLGNBQUwsQ0FBb0JDLEtBQXBCO0FBTlgsY0FRRSxvREFBQyx3R0FBRCxPQVJGLENBREYsQ0FGRixDQU5KO0FBc0JFLHNCQUFZLEVBQUU7QUFDWjZCLGlCQUFLLEVBQUV0QixHQUFHLENBQUNzQjtBQURDLFdBdEJoQjtBQXlCRSw4QkFBb0IsRUFBRSxNQUFJLENBQUNuQixtQkFBTCxDQUF5QlYsS0FBekIsRUFBZ0NPLEdBQWhDLENBekJ4QjtBQTBCRSxlQUFLLEVBQ0gsb0RBQUMsVUFBRCxlQUNPLE1BQUksQ0FBQ2hCLEtBQUwsQ0FBVzhCLEVBQVgsSUFBaUI7QUFDcEJBLGNBQUUsRUFBRSxNQUFJLENBQUM5QixLQUFMLENBQVc4QixFQUFYLEdBQWdCLGVBQWhCLEdBQWtDckIsS0FBSyxDQUFDMEIsUUFBTjtBQURsQixXQUR4QjtBQUlFLHVCQUFXLEVBQ1Qsb0RBQUMsU0FBRCxRQUFZLENBQUNuQixHQUFHLENBQUNDLElBQUwsSUFBYSxhQUF6QixDQUxKO0FBT0UsdUJBQVcsRUFBRSxNQUFJLENBQUNqQixLQUFMLENBQVd1QyxXQVAxQjtBQVFFLG9CQUFRLEVBQUV2QixHQUFHLENBQUNDLElBUmhCO0FBU0Usc0JBQVUsRUFBRW5CLFVBVGQ7QUFVRSxvQkFBUSxFQUFFLE1BQUksQ0FBQ2lCLFdBQUwsQ0FBaUJOLEtBQWpCLEVBQXdCTyxHQUF4QixDQVZaO0FBV0Usd0JBQVksRUFBRSxNQUFJLENBQUNoQixLQUFMLENBQVdXLElBQVgsQ0FBZ0JDLE1BQWhCLENBQXVCLFVBQUFDLENBQUM7QUFBQSxxQkFBSUEsQ0FBQyxDQUFDSSxJQUFOO0FBQUEsYUFBeEIsQ0FYaEI7QUFZRSxzQkFBVSxFQUFFLElBWmQ7QUFhRSxtQkFBTyxFQUFFLElBQUl1QixJQUFKO0FBYlg7QUEzQkosV0FEbUI7QUFBQSxPQUFwQixDQVpILEVBMERFO0FBQU0saUJBQVMsRUFBQztBQUFoQixRQTFERixFQTJERyxLQUFLQyx1QkFBTCxFQTNESCxDQURGO0FBK0REO0FBL0dIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxFQUE0Q0MsK0RBQTVDO0FBQWFuQyxzQixDQUtHb0MsWSxHQUFlQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCSCwrREFBUyxDQUFDQyxZQUE1QixFQUEwQztBQUNyRUcsTUFBSSxFQUFFLHFCQUQrRDtBQUVyRVAsYUFBVyxFQUFFekM7QUFGd0QsQ0FBMUMsQztBQW1JeEIsSUFBTWlELG1CQUFtQixHQUFHQyw2RUFBZSxDQUdoRHpDLHNCQUhnRCxDQUEzQztlQUtRd0MsbUI7QUFBQTs7Ozs7Ozs7OzswQkFyTVRyRCxVOzBCQXNDQUksVTswQkFFT0MsUzswQkFnQkFRLHNCOzBCQXdJQXdDLG1CIiwiZmlsZSI6IjVjZjhkMmQtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUGx1c0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL2NvbnRlbnQvc3ZnL3Byb2R1Y3Rpb24vaWNfYWRkX2NpcmNsZV9vdXRsaW5lXzI0cHguc3ZnJztcclxuaW1wb3J0ICogYXMgRGF0ZUljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL2FjdGlvbi9zdmcvcHJvZHVjdGlvbi9pY19ldmVudF8yNHB4LnN2Zyc7XHJcblxyXG4vLyBMaWJzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxudHJ5IHtcclxuICB2YXIgRGF0ZVBpY2tlciA9IHJlcXVpcmUoJ3JlYWN0LWRhdGVwaWNrZXInKS5kZWZhdWx0O1xyXG59IGNhdGNoIHtcclxuICBEYXRlUGlja2VyID0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG4vLyBNaXNjXHJcbmltcG9ydCBPcGVuaW5nSG91cnNVdGlsIGZyb20gJy4uL3V0aWxzL09wZW5pbmdIb3Vyc1V0aWwnO1xyXG5pbXBvcnQge1xyXG4gIE9wZW5pbmdIb3Vyc0RheU9iaixcclxuICBPcGVuaW5nSG91cnNEYXksXHJcbn0gZnJvbSAnLi4vb3BlbmluZ0hvdXJzRGF5L09wZW5pbmdIb3Vyc0RheSc7XHJcbmltcG9ydCB7XHJcbiAgQmFzZUlucHV0UHJvcHMsXHJcbiAgQmFzZUlucHV0U3RhdGUsXHJcbiAgQmFzZUlucHV0LFxyXG59IGZyb20gJy4uLy4uL2Jhc2UvaW5wdXQvQmFzZUlucHV0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vYnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCB7IE9taXRGb3JtQ29udGV4dCB9IGZyb20gJy4uLy4uL2Zvcm0vRm9ybUNvbnRleHQnO1xyXG5pbXBvcnQgeyB3aXRoRm9ybUNvbnRleHQgfSBmcm9tICcuLi8uLi9mb3JtL3dpdGhGb3JtQ29udGV4dCc7XHJcbmltcG9ydCB7IElubmVyUmVmUHJvcHMgfSBmcm9tICcuLy4uLy4uLy4uL3R5cGVzL0lubmVyUmVmUHJvcHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcGVuaW5nSG91cnNTcGVjaWFsRGF5T2JqIGV4dGVuZHMgT3BlbmluZ0hvdXJzRGF5T2JqIHtcclxuICBkYXRlPzogRGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcGVuaW5nSG91cnNTcGVjaWFsUmF3UHJvcHMgZXh0ZW5kcyBCYXNlSW5wdXRQcm9wczxuZXZlcj4ge1xyXG4gIGRheXM6IE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmpbXTtcclxuICBvbkRheXNDaGFuZ2U6IChkYXlzOiBPcGVuaW5nSG91cnNTcGVjaWFsRGF5T2JqW10pID0+IHZvaWQ7XHJcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE9wZW5pbmdIb3Vyc1NwZWNpYWxQcm9wcyA9IE9taXRGb3JtQ29udGV4dDxcclxuICBPcGVuaW5nSG91cnNTcGVjaWFsUmF3UHJvcHNcclxuPiAmXHJcbiAgSW5uZXJSZWZQcm9wczxPcGVuaW5nSG91cnNTcGVjaWFsUmF3UHJvcHM+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcGVuaW5nSG91cnNTcGVjaWFsU3RhdGUgZXh0ZW5kcyBCYXNlSW5wdXRTdGF0ZSB7fVxyXG5cclxuY29uc3QgREFZX0ZPUk1BVCA9ICdkZC9NL1lZWVknO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVJbnB1dCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8e1xyXG4gIHZhbHVlPzogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG59PiB7XHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxCdXR0b24gYmxhbms9e3RydWV9IHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgIDxEYXRlSWNvbiBzdHlsZT17eyBtYXJnaW5SaWdodDogNCB9fSAvPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4gPyB0aGlzLnByb3BzLmNoaWxkcmVuIDogdGhpcy5wcm9wcy52YWx1ZX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9wZW5pbmdIb3Vyc1NwZWNpYWxSYXcgZXh0ZW5kcyBCYXNlSW5wdXQ8XHJcbiAgT3BlbmluZ0hvdXJzU3BlY2lhbFJhd1Byb3BzLFxyXG4gIE9wZW5pbmdIb3Vyc1NwZWNpYWxTdGF0ZSxcclxuICBuZXZlclxyXG4+IHtcclxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIEJhc2VJbnB1dC5kZWZhdWx0UHJvcHMsIHtcclxuICAgIHR5cGU6ICdvcGVuaW5nSG91cnNTcGVjaWFsJyxcclxuICAgIHBsYWNlaG9sZGVyOiBEQVlfRk9STUFULFxyXG4gIH0pO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogT3BlbmluZ0hvdXJzU3BlY2lhbFJhd1Byb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi57IHRvdWNoZWQ6IHRydWUgfSB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZGF5cykge1xyXG4gICAgICBjb25zdCBhbGxEYXlzSGF2ZURhdGVzID0gdGhpcy5wcm9wcy5kYXlzLmV2ZXJ5KGQgPT4gQm9vbGVhbihkLmRhdGUpKTtcclxuICAgICAgaWYgKGFsbERheXNIYXZlRGF0ZXMpIHtcclxuICAgICAgICB0aGlzLnNldFZhbGlkKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRJbnZhbGlkKFsnUGxlYXNlIGNob29zZSBkYXRlJ10pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IE9wZW5pbmdIb3Vyc1NwZWNpYWxSYXdQcm9wcykge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZGF5cyAhPT0gbmV4dFByb3BzLmRheXMpIHtcclxuICAgICAgY29uc3QgYWxsRGF5c0hhdmVEYXRlcyA9XHJcbiAgICAgICAgIW5leHRQcm9wcy5kYXlzIHx8IG5leHRQcm9wcy5kYXlzLmV2ZXJ5KGQgPT4gQm9vbGVhbihkLmRhdGUpKTtcclxuICAgICAgaWYgKGFsbERheXNIYXZlRGF0ZXMpIHtcclxuICAgICAgICB0aGlzLnNldFZhbGlkKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRJbnZhbGlkKFsnUGxlYXNlIGNob29zZSBkYXRlJ10pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG91Y2goKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgaWYgKCFEYXRlUGlja2VyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAnWW91IG5lZWQgdG8gaW5zdGFsbCByZWFjdC1kYXRlcGlja2VyIGluIG9yZGVyIHRvIHVzZSBzcGVjaWFsIGRheSBwaWNrZXInXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAnaW5wdXRfX2Jhc2Ugb3BlbmluZ0hvdXJzU3BlY2lhbC1pbnB1dCAnICtcclxuICAgICAgICAgIHRoaXMuZ2V0VmFsaWRhdGlvbkNsYXNzKCkgK1xyXG4gICAgICAgICAgJyAnICtcclxuICAgICAgICAgICh0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlZj17dGhpcy5jb250YWluZXJSZWZ9XHJcbiAgICAgID5cclxuICAgICAgICB7dGhpcy5wcm9wcy5kYXlzLm1hcCgoZGF5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPE9wZW5pbmdIb3Vyc0RheVxyXG4gICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy1vcGVuaW5nLWhvdXJzLWRheS0nICsgaW5kZXgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGxhYmVsPXtcclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtPcGVuaW5nSG91cnNVdGlsLmdldExhYmVsU3VmZml4KGRheSl9XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy1yZW1vdmUtYnV0dG9uLScgKyBpbmRleC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGJsYW5rPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9wZW5pbmdIb3Vyc1NwZWNpYWwtaW5wdXRfX2J1dHRvbiBvcGVuaW5nSG91cnNTcGVjaWFsLWlucHV0X19idXR0b24tLXJlbW92ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZW1vdmVEYXlDbGljayhpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8UGx1c0ljb24gLz5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wZW5pbmdIb3Vycz17e1xyXG4gICAgICAgICAgICAgIHRpbWVzOiBkYXkudGltZXMsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uT3BlbmluZ0hvdXJzQ2hhbmdlPXt0aGlzLm9wZW5pbmdIb3Vyc0NoYW5nZWQoaW5kZXgsIGRheSl9XHJcbiAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLWRhdGUtcGlja2VyLScgKyBpbmRleC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICBjdXN0b21JbnB1dD17XHJcbiAgICAgICAgICAgICAgICAgIDxEYXRlSW5wdXQ+eyFkYXkuZGF0ZSAmJiAnQ2hvb3NlIGRhdGUnfTwvRGF0ZUlucHV0PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZGF5LmRhdGV9XHJcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PXtEQVlfRk9STUFUfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZGF0ZUNoYW5nZWQoaW5kZXgsIGRheSl9XHJcbiAgICAgICAgICAgICAgICBleGNsdWRlRGF0ZXM9e3RoaXMucHJvcHMuZGF5cy5maWx0ZXIoZCA9PiBkLmRhdGUpfVxyXG4gICAgICAgICAgICAgICAgd2l0aFBvcnRhbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG1pbkRhdGU9e25ldyBEYXRlKCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYXJcIiAvPlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckRlZmF1bHRWYWxpZGF0aW9uKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlRGF5Q2xpY2sgPSAoaW5kZXg6IG51bWJlcikgPT4gKCkgPT5cclxuICAgIHRoaXMucHJvcHMub25EYXlzQ2hhbmdlKFxyXG4gICAgICB0aGlzLnByb3BzLmRheXMuZmlsdGVyKChkLCBpbmRleElubmVyKSA9PiBpbmRleElubmVyICE9PSBpbmRleClcclxuICAgICk7XHJcblxyXG4gIHByaXZhdGUgZGF0ZUNoYW5nZWQgPSAoaW5kZXg6IG51bWJlciwgZGF5OiBPcGVuaW5nSG91cnNEYXlPYmopID0+IChcclxuICAgIGRhdGU6IERhdGVcclxuICApID0+IHtcclxuICAgIGxldCBkYXlzID0gdGhpcy5wcm9wcy5kYXlzLnNsaWNlKDApO1xyXG4gICAgZGF5c1tpbmRleF0gPSB7IC4uLmRheSwgZGF0ZSB9O1xyXG4gICAgdGhpcy5wcm9wcy5vbkRheXNDaGFuZ2UoZGF5cyk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvcGVuaW5nSG91cnNDaGFuZ2VkID0gKFxyXG4gICAgaW5kZXg6IG51bWJlcixcclxuICAgIGRheTogT3BlbmluZ0hvdXJzRGF5T2JqXHJcbiAgKSA9PiBvcGVuaW5nSG91cnMgPT4ge1xyXG4gICAgbGV0IGRheXMgPSB0aGlzLnByb3BzLmRheXMuc2xpY2UoMCk7XHJcbiAgICBkYXlzW2luZGV4XSA9IHsgLi4uZGF5LCAuLi5vcGVuaW5nSG91cnMgfTtcclxuICAgIHRoaXMucHJvcHMub25EYXlzQ2hhbmdlKGRheXMpO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBPcGVuaW5nSG91cnNTcGVjaWFsID0gd2l0aEZvcm1Db250ZXh0PFxyXG4gIE9wZW5pbmdIb3Vyc1NwZWNpYWxSYXdQcm9wcyxcclxuICBPcGVuaW5nSG91cnNTcGVjaWFsUHJvcHNcclxuPihPcGVuaW5nSG91cnNTcGVjaWFsUmF3KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZW5pbmdIb3Vyc1NwZWNpYWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=