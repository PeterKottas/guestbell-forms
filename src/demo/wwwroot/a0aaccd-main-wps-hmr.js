webpackHotUpdate("main",{

/***/ "./src/lib/components/tags/subComponents/TagsSuggestions.tsx":
/*!*******************************************************************!*\
  !*** ./src/lib/components/tags/subComponents/TagsSuggestions.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../.. */ "./src/lib/index.ts");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
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





var Suggestions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Suggestions, _React$Component);

  function Suggestions(props) {
    var _this;

    _classCallCheck(this, Suggestions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Suggestions).call(this, props));

    _this.onSelected = function (tag) {
      return function () {
        _this.setState({
          key: _this.state.key + 1
        });

        _this.props.onSelected(tag);
      };
    };

    _this.state = {
      key: 0
    };
    _this.onSelected = _this.onSelected.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Suggestions, [{
    key: "render",
    value: function render() {
      var _this$props$anchorEl,
          _this2 = this;

      return this.props.anchorEl && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        key: this.state.key,
        open: this.props.isVisible,
        anchorEl: this.props.anchorEl,
        style: {
          width: (_this$props$anchorEl = this.props.anchorEl) === null || _this$props$anchorEl === void 0 ? void 0 : _this$props$anchorEl.scrollWidth,
          zIndex: 10000
        },
        placement: "bottom-start",
        modifiers: {
          flip: {
            enabled: false
          }
        }
      }, this.props.popperProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, this.props.id && {
        id: this.props.id
      }, {
        className: "tags-input__suggestions",
        ref: this.props.innerRef
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, this.props.AddNewTagComponent, this.props.loading && this.props.LoadingComponent && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        className: "w-100 text-center p-2"
      }, this.props.LoadingComponent), !this.props.loading && this.props.isWaitingForMoreInput && this.props.WaitingForMoreInputComponent && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        className: "w-100 text-center p-2"
      }, this.props.WaitingForMoreInputComponent), !this.props.loading && !this.props.isWaitingForMoreInput && this.props.tags.map(function (tag, index) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](___WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({}, _this2.props.id && {
          id: _this2.props.id + '-suggestion-' + index.toString()
        }, {
          className: 'w-100 tags-input__suggestion ' + (_this2.props.preselectedSuggestion !== undefined && _this2.props.preselectedSuggestion === index ? 'tags-input__suggestion--preselected' : ''),
          onClick: _this2.onSelected(tag),
          dropdown: true
        }), tag.name));
      }), !this.props.loading && this.props.EmptyComponent && this.props.tags.length === 0 && !this.props.allowNew && !this.props.isWaitingForMoreInput && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        className: "w-100 text-center p-2"
      }, this.props.EmptyComponent))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Suggestions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var SuggestionsWrapped = Suggestions;
var _default = SuggestionsWrapped;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Suggestions, "Suggestions", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\subComponents\\TagsSuggestions.tsx");
  reactHotLoader.register(SuggestionsWrapped, "SuggestionsWrapped", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\subComponents\\TagsSuggestions.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\subComponents\\TagsSuggestions.tsx");
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Weekday", function() { return _components_openingHours_openingHoursWeek__WEBPACK_IMPORTED_MODULE_11__["Weekday"]; });

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

/* harmony import */ var _components_themeProvider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/themeProvider */ "./src/lib/components/themeProvider/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _components_themeProvider__WEBPACK_IMPORTED_MODULE_21__["ThemeProvider"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
























/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9zdWJDb21wb25lbnRzL1RhZ3NTdWdnZXN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9pbmRleC50cyJdLCJuYW1lcyI6WyJTdWdnZXN0aW9ucyIsInByb3BzIiwib25TZWxlY3RlZCIsInRhZyIsInNldFN0YXRlIiwia2V5Iiwic3RhdGUiLCJiaW5kIiwiYW5jaG9yRWwiLCJpc1Zpc2libGUiLCJ3aWR0aCIsInNjcm9sbFdpZHRoIiwiekluZGV4IiwiZmxpcCIsImVuYWJsZWQiLCJwb3BwZXJQcm9wcyIsImlkIiwiaW5uZXJSZWYiLCJBZGROZXdUYWdDb21wb25lbnQiLCJsb2FkaW5nIiwiTG9hZGluZ0NvbXBvbmVudCIsImlzV2FpdGluZ0Zvck1vcmVJbnB1dCIsIldhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnQiLCJ0YWdzIiwibWFwIiwiaW5kZXgiLCJ0b1N0cmluZyIsInByZXNlbGVjdGVkU3VnZ2VzdGlvbiIsInVuZGVmaW5lZCIsIm5hbWUiLCJFbXB0eUNvbXBvbmVudCIsImxlbmd0aCIsImFsbG93TmV3IiwiUmVhY3QiLCJTdWdnZXN0aW9uc1dyYXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztJQTBCTUEsVzs7Ozs7QUFJSix1QkFBWUMsS0FBWixFQUFxRDtBQUFBOztBQUFBOztBQUNuRCxxRkFBTUEsS0FBTjs7QUFEbUQsVUE0RTdDQyxVQTVFNkMsR0E0RWhDLFVBQUNDLEdBQUQ7QUFBQSxhQUFjLFlBQU07QUFDdkMsY0FBS0MsUUFBTCxDQUFjO0FBQUVDLGFBQUcsRUFBRSxNQUFLQyxLQUFMLENBQVdELEdBQVgsR0FBaUI7QUFBeEIsU0FBZDs7QUFDQSxjQUFLSixLQUFMLENBQVdDLFVBQVgsQ0FBc0JDLEdBQXRCO0FBQ0QsT0FIb0I7QUFBQSxLQTVFZ0M7O0FBRW5E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LENBVEYsQ0FGSjtBQW9FRDs7Ozs7Ozs7Ozs7RUE5RXVCRywrQzs7QUFzRjFCLElBQU1DLGtCQUFrQixHQUFHbEMsV0FBM0I7ZUFFZWtDLGtCO0FBQUE7Ozs7Ozs7Ozs7MEJBeEZUbEMsVzswQkFzRkFrQyxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25ITjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYTBhYWNjZC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRhZyB9IGZyb20gJy4uJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4nO1xyXG5pbXBvcnQgUG9wcGVyLCB7IFBvcHBlclByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyJztcclxuXHJcbmV4cG9ydCB0eXBlIFN1Z2dlc3Rpb25zUHJvcHMgPSB7XHJcbiAgaW5uZXJSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcbiAgYW5jaG9yRWw6IEhUTUxFbGVtZW50O1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj86IG51bWJlcjtcclxuICBpc1Zpc2libGU6IGJvb2xlYW47XHJcbiAgaXNXYWl0aW5nRm9yTW9yZUlucHV0OiBib29sZWFuO1xyXG4gIHRhZ3M6IFRhZ1tdO1xyXG4gIG9uU2VsZWN0ZWQ6ICh0YWc6IFRhZykgPT4gdm9pZDtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgTG9hZGluZ0NvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIEVtcHR5Q29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgQWRkTmV3VGFnQ29tcG9uZW50PzogSlNYLkVsZW1lbnQ7XHJcbiAgV2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIGFsbG93TmV3OiBib29sZWFuO1xyXG4gIHBvcHBlclByb3BzPzogUGFydGlhbDxQb3BwZXJQcm9wcz47XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgU3VnZ2VzdGlvbnNTdGF0ZSB7XHJcbiAga2V5OiBudW1iZXI7XHJcbn1cclxuXHJcbnR5cGUgSW5qZWN0ZWRQcm9wcyA9IHt9O1xyXG5jbGFzcyBTdWdnZXN0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcclxuICBTdWdnZXN0aW9uc1Byb3BzICYgSW5qZWN0ZWRQcm9wcyxcclxuICBTdWdnZXN0aW9uc1N0YXRlXHJcbj4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTdWdnZXN0aW9uc1Byb3BzICYgSW5qZWN0ZWRQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsga2V5OiAwIH07XHJcbiAgICB0aGlzLm9uU2VsZWN0ZWQgPSB0aGlzLm9uU2VsZWN0ZWQuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMucHJvcHMuYW5jaG9yRWwgJiYgKFxyXG4gICAgICAgIDxQb3BwZXJcclxuICAgICAgICAgIGtleT17dGhpcy5zdGF0ZS5rZXl9XHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnByb3BzLmlzVmlzaWJsZX1cclxuICAgICAgICAgIGFuY2hvckVsPXt0aGlzLnByb3BzLmFuY2hvckVsfVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMuYW5jaG9yRWw/LnNjcm9sbFdpZHRoLCB6SW5kZXg6IDEwMDAwIH19XHJcbiAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b20tc3RhcnRcIlxyXG4gICAgICAgICAgbW9kaWZpZXJzPXt7IGZsaXA6IHsgZW5hYmxlZDogZmFsc2UgfSB9fVxyXG4gICAgICAgICAgey4uLnRoaXMucHJvcHMucG9wcGVyUHJvcHN9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fc3VnZ2VzdGlvbnNcIlxyXG4gICAgICAgICAgICByZWY9e3RoaXMucHJvcHMuaW5uZXJSZWZ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5BZGROZXdUYWdDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMubG9hZGluZyAmJiB0aGlzLnByb3BzLkxvYWRpbmdDb21wb25lbnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInctMTAwIHRleHQtY2VudGVyIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5Mb2FkaW5nQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHshdGhpcy5wcm9wcy5sb2FkaW5nICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmlzV2FpdGluZ0Zvck1vcmVJbnB1dCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5XYWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInctMTAwIHRleHQtY2VudGVyIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLldhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHshdGhpcy5wcm9wcy5sb2FkaW5nICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5pc1dhaXRpbmdGb3JNb3JlSW5wdXQgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGFncy5tYXAoKHRhZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy1zdWdnZXN0aW9uLScgKyBpbmRleC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAndy0xMDAgdGFncy1pbnB1dF9fc3VnZ2VzdGlvbiAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAndGFncy1pbnB1dF9fc3VnZ2VzdGlvbi0tcHJlc2VsZWN0ZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TZWxlY3RlZCh0YWcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3RhZy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLmxvYWRpbmcgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuRW1wdHlDb21wb25lbnQgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmFsbG93TmV3ICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5pc1dhaXRpbmdGb3JNb3JlSW5wdXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidy0xMDAgdGV4dC1jZW50ZXIgcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRW1wdHlDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Qb3BwZXI+XHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uU2VsZWN0ZWQgPSAodGFnOiBUYWcpID0+ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBrZXk6IHRoaXMuc3RhdGUua2V5ICsgMSB9KTtcclxuICAgIHRoaXMucHJvcHMub25TZWxlY3RlZCh0YWcpO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IFN1Z2dlc3Rpb25zV3JhcHBlZCA9IFN1Z2dlc3Rpb25zO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3VnZ2VzdGlvbnNXcmFwcGVkO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3ZhbGlkYXRvcnMvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrYm94JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2R5bmFtaWNTdWJtaXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvZm9ybSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9pbnB1dEdyb3VwJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2lucHV0SGVhZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL21vbmV5L01vbmV5JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL29wZW5pbmdIb3Vycy9vcGVuaW5nSG91cnNEYXknO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvb3BlbmluZ0hvdXJzL29wZW5pbmdIb3Vyc1NwZWNpYWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvb3BlbmluZ0hvdXJzL29wZW5pbmdIb3Vyc1dlZWsnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW9Db250YWluZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0L1NlbGVjdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9zdWJtaXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGFncyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90ZXh0JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RleHRBcmVhJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RpbWUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGltZVNwYW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGhlbWVQcm92aWRlcic7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=