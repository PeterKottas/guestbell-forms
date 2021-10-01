webpackHotUpdate("main",{

/***/ "./src/lib/components/bookingCalendar/bookingCalendarControls/BookingCalendarControls.tsx":
/*!************************************************************************************************!*\
  !*** ./src/lib/components/bookingCalendar/bookingCalendarControls/BookingCalendarControls.tsx ***!
  \************************************************************************************************/
/*! exports provided: BookingCalendarControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingCalendarControls", function() { return BookingCalendarControls; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/lib/components/bookingCalendar/bookingCalendarControls/index.ts");
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../button/Button */ "./src/lib/components/button/Button.tsx");
/* harmony import */ var material_design_icons_navigation_svg_production_ic_arrow_back_24px_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-design-icons/navigation/svg/production/ic_arrow_back_24px.svg */ "./node_modules/material-design-icons/navigation/svg/production/ic_arrow_back_24px.svg");
/* harmony import */ var material_design_icons_navigation_svg_production_ic_arrow_back_24px_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_navigation_svg_production_ic_arrow_back_24px_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var material_design_icons_hardware_svg_production_ic_keyboard_arrow_left_24px_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! material-design-icons/hardware/svg/production/ic_keyboard_arrow_left_24px.svg */ "./node_modules/material-design-icons/hardware/svg/production/ic_keyboard_arrow_left_24px.svg");
/* harmony import */ var material_design_icons_hardware_svg_production_ic_keyboard_arrow_left_24px_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_hardware_svg_production_ic_keyboard_arrow_left_24px_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var material_design_icons_navigation_svg_production_ic_arrow_forward_24px_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-design-icons/navigation/svg/production/ic_arrow_forward_24px.svg */ "./node_modules/material-design-icons/navigation/svg/production/ic_arrow_forward_24px.svg");
/* harmony import */ var material_design_icons_navigation_svg_production_ic_arrow_forward_24px_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_navigation_svg_production_ic_arrow_forward_24px_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var material_design_icons_hardware_svg_production_ic_keyboard_arrow_right_24px_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! material-design-icons/hardware/svg/production/ic_keyboard_arrow_right_24px.svg */ "./node_modules/material-design-icons/hardware/svg/production/ic_keyboard_arrow_right_24px.svg");
/* harmony import */ var material_design_icons_hardware_svg_production_ic_keyboard_arrow_right_24px_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_hardware_svg_production_ic_keyboard_arrow_right_24px_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var material_design_icons_navigation_svg_production_ic_unfold_less_24px_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-design-icons/navigation/svg/production/ic_unfold_less_24px.svg */ "./node_modules/material-design-icons/navigation/svg/production/ic_unfold_less_24px.svg");
/* harmony import */ var material_design_icons_navigation_svg_production_ic_unfold_less_24px_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_navigation_svg_production_ic_unfold_less_24px_svg__WEBPACK_IMPORTED_MODULE_9__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};












function BookingCalendarControls(props) {
  var className = props.className,
      monthLabelClassName = props.monthLabelClassName,
      buttonsContainerClassName = props.buttonsContainerClassName,
      zoomBookingsButtonClassName = props.zoomBookingsButtonClassName,
      step = props.step,
      from = props.from,
      till = props.till,
      onRangeChange = props.onRangeChange,
      items = props.items;

  if (!step || !from || !till) {
    return null;
  }

  var onStepFactory = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (_step) {
    return function () {
      return onRangeChange({
        from: from.clone().add(_step),
        till: till.clone().add(_step)
      });
    };
  }, [from, till, onRangeChange]);
  var onBigStepLeftClick = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](onStepFactory(Object(moment__WEBPACK_IMPORTED_MODULE_2__["duration"])(-1 * till.diff(from))), [onStepFactory, till, from]);
  var onSmallStepLeftClick = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](onStepFactory(Object(moment__WEBPACK_IMPORTED_MODULE_2__["duration"])(step.asMilliseconds() * -1)), [onStepFactory, step]);
  var onBigStepRightClick = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](onStepFactory(Object(moment__WEBPACK_IMPORTED_MODULE_2__["duration"])(till.diff(from))), [onStepFactory, till, from]);
  var onSmallStepRightClick = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](onStepFactory(step), [onStepFactory, step]);
  var onZoomBookingsClick = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
    var _Math$min, _Math$max;

    var minFrom = moment__WEBPACK_IMPORTED_MODULE_2___default()((_Math$min = Math.min.apply(Math, _toConsumableArray(items === null || items === void 0 ? void 0 : items.map(function (a) {
      return a.from.valueOf();
    })))) !== null && _Math$min !== void 0 ? _Math$min : from === null || from === void 0 ? void 0 : from.valueOf());
    var maxTill = moment__WEBPACK_IMPORTED_MODULE_2___default()((_Math$max = Math.max.apply(Math, _toConsumableArray(items === null || items === void 0 ? void 0 : items.map(function (a) {
      return a.till.valueOf();
    })))) !== null && _Math$max !== void 0 ? _Math$max : till === null || till === void 0 ? void 0 : till.valueOf());
    onRangeChange({
      from: minFrom,
      till: maxTill
    });
  }, [from, till, items]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_3__["bookingCalendarControlsDefaultClasses"].className, className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_3__["bookingCalendarControlsDefaultClasses"].monthLabelClassName, monthLabelClassName)
  }, from.format('MMMM'), ", ", from.format('YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_3__["bookingCalendarControlsDefaultClasses"].buttonsContainerClassName, buttonsContainerClassName)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    noShadow: true,
    onClick: onBigStepLeftClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](material_design_icons_navigation_svg_production_ic_arrow_back_24px_svg__WEBPACK_IMPORTED_MODULE_5__, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    noShadow: true,
    onClick: onSmallStepLeftClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](material_design_icons_hardware_svg_production_ic_keyboard_arrow_left_24px_svg__WEBPACK_IMPORTED_MODULE_6__, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    noShadow: true,
    onClick: onSmallStepRightClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](material_design_icons_hardware_svg_production_ic_keyboard_arrow_right_24px_svg__WEBPACK_IMPORTED_MODULE_8__, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    noShadow: true,
    onClick: onBigStepRightClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](material_design_icons_navigation_svg_production_ic_arrow_forward_24px_svg__WEBPACK_IMPORTED_MODULE_7__, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_3__["bookingCalendarControlsDefaultClasses"].zoomBookingsButtonClassName, zoomBookingsButtonClassName),
    noShadow: true,
    disabled: !(items !== null && items !== void 0 && items.length),
    onClick: onZoomBookingsClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](material_design_icons_navigation_svg_production_ic_unfold_less_24px_svg__WEBPACK_IMPORTED_MODULE_9__, null))));
}

__signature__(BookingCalendarControls, "useCallback{onStepFactory}\nuseCallback{onBigStepLeftClick}\nuseCallback{onSmallStepLeftClick}\nuseCallback{onBigStepRightClick}\nuseCallback{onSmallStepRightClick}\nuseCallback{onZoomBookingsClick}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BookingCalendarControls, "BookingCalendarControls", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\bookingCalendar\\bookingCalendarControls\\BookingCalendarControls.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvYm9va2luZ0NhbGVuZGFyL2Jvb2tpbmdDYWxlbmRhckNvbnRyb2xzL0Jvb2tpbmdDYWxlbmRhckNvbnRyb2xzLnRzeCJdLCJuYW1lcyI6WyJCb29raW5nQ2FsZW5kYXJDb250cm9scyIsInByb3BzIiwiY2xhc3NOYW1lIiwibW9udGhMYWJlbENsYXNzTmFtZSIsImJ1dHRvbnNDb250YWluZXJDbGFzc05hbWUiLCJ6b29tQm9va2luZ3NCdXR0b25DbGFzc05hbWUiLCJzdGVwIiwiZnJvbSIsInRpbGwiLCJvblJhbmdlQ2hhbmdlIiwiaXRlbXMiLCJvblN0ZXBGYWN0b3J5IiwiUmVhY3QiLCJfc3RlcCIsImNsb25lIiwiYWRkIiwib25CaWdTdGVwTGVmdENsaWNrIiwiZHVyYXRpb24iLCJkaWZmIiwib25TbWFsbFN0ZXBMZWZ0Q2xpY2siLCJhc01pbGxpc2Vjb25kcyIsIm9uQmlnU3RlcFJpZ2h0Q2xpY2siLCJvblNtYWxsU3RlcFJpZ2h0Q2xpY2siLCJvblpvb21Cb29raW5nc0NsaWNrIiwibWluRnJvbSIsIm1vbWVudCIsIk1hdGgiLCJtaW4iLCJtYXAiLCJhIiwidmFsdWVPZiIsIm1heFRpbGwiLCJtYXgiLCJjbGFzc05hbWVzIiwiYm9va2luZ0NhbGVuZGFyQ29udHJvbHNEZWZhdWx0Q2xhc3NlcyIsImZvcm1hdCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdPLFNBQVNBLHVCQUFULENBQ0xDLEtBREssRUFFTDtBQUNBLE1BQ0VDLFNBREYsR0FVSUQsS0FWSixDQUNFQyxTQURGO0FBQUEsTUFFRUMsbUJBRkYsR0FVSUYsS0FWSixDQUVFRSxtQkFGRjtBQUFBLE1BR0VDLHlCQUhGLEdBVUlILEtBVkosQ0FHRUcseUJBSEY7QUFBQSxNQUlFQywyQkFKRixHQVVJSixLQVZKLENBSUVJLDJCQUpGO0FBQUEsTUFLRUMsSUFMRixHQVVJTCxLQVZKLENBS0VLLElBTEY7QUFBQSxNQU1FQyxJQU5GLEdBVUlOLEtBVkosQ0FNRU0sSUFORjtBQUFBLE1BT0VDLElBUEYsR0FVSVAsS0FWSixDQU9FTyxJQVBGO0FBQUEsTUFRRUMsYUFSRixHQVVJUixLQVZKLENBUUVRLGFBUkY7QUFBQSxNQVNFQyxLQVRGLEdBVUlULEtBVkosQ0FTRVMsS0FURjs7QUFXQSxNQUFJLENBQUNKLElBQUQsSUFBUyxDQUFDQyxJQUFWLElBQWtCLENBQUNDLElBQXZCLEVBQTZCO0FBQzNCLFdBQU8sSUFBUDtBQUNEOztBQUNELE1BQU1HLGFBQWEsR0FBR0MsaURBQUEsQ0FDcEIsVUFBQ0MsS0FBRDtBQUFBLFdBQXFCO0FBQUEsYUFDbkJKLGFBQWEsQ0FBQztBQUNaRixZQUFJLEVBQUVBLElBQUksQ0FBQ08sS0FBTCxHQUFhQyxHQUFiLENBQWlCRixLQUFqQixDQURNO0FBRVpMLFlBQUksRUFBRUEsSUFBSSxDQUFDTSxLQUFMLEdBQWFDLEdBQWIsQ0FBaUJGLEtBQWpCO0FBRk0sT0FBRCxDQURNO0FBQUEsS0FBckI7QUFBQSxHQURvQixFQU1wQixDQUFDTixJQUFELEVBQU9DLElBQVAsRUFBYUMsYUFBYixDQU5vQixDQUF0QjtBQVFBLE1BQU1PLGtCQUFrQixHQUFHSixpREFBQSxDQUN6QkQsYUFBYSxDQUFDTSx1REFBUSxDQUFDLENBQUMsQ0FBRCxHQUFLVCxJQUFJLENBQUNVLElBQUwsQ0FBVVgsSUFBVixDQUFOLENBQVQsQ0FEWSxFQUV6QixDQUFDSSxhQUFELEVBQWdCSCxJQUFoQixFQUFzQkQsSUFBdEIsQ0FGeUIsQ0FBM0I7QUFJQSxNQUFNWSxvQkFBb0IsR0FBR1AsaURBQUEsQ0FDM0JELGFBQWEsQ0FBQ00sdURBQVEsQ0FBQ1gsSUFBSSxDQUFDYyxjQUFMLEtBQXdCLENBQUMsQ0FBMUIsQ0FBVCxDQURjLEVBRTNCLENBQUNULGFBQUQsRUFBZ0JMLElBQWhCLENBRjJCLENBQTdCO0FBSUEsTUFBTWUsbUJBQW1CLEdBQUdULGlEQUFBLENBQzFCRCxhQUFhLENBQUNNLHVEQUFRLENBQUNULElBQUksQ0FBQ1UsSUFBTCxDQUFVWCxJQUFWLENBQUQsQ0FBVCxDQURhLEVBRTFCLENBQUNJLGFBQUQsRUFBZ0JILElBQWhCLEVBQXNCRCxJQUF0QixDQUYwQixDQUE1QjtBQUlBLE1BQU1lLHFCQUFxQixHQUFHVixpREFBQSxDQUFrQkQsYUFBYSxDQUFDTCxJQUFELENBQS9CLEVBQXVDLENBQ25FSyxhQURtRSxFQUVuRUwsSUFGbUUsQ0FBdkMsQ0FBOUI7QUFJQSxNQUFNaUIsbUJBQW1CLEdBQUdYLGlEQUFBLENBQWtCLFlBQU07QUFBQTs7QUFDbEQsUUFBTVksT0FBTyxHQUFHQyw2Q0FBTSxjQUNwQkMsSUFBSSxDQUFDQyxHQUFMLE9BQUFELElBQUkscUJBQVFoQixLQUFSLGFBQVFBLEtBQVIsdUJBQVFBLEtBQUssQ0FBRWtCLEdBQVAsQ0FBVyxVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDdEIsSUFBRixDQUFPdUIsT0FBUCxFQUFKO0FBQUEsS0FBWixDQUFSLEVBRGdCLGlEQUM4QnZCLElBRDlCLGFBQzhCQSxJQUQ5Qix1QkFDOEJBLElBQUksQ0FBRXVCLE9BQU4sRUFEOUIsQ0FBdEI7QUFHQSxRQUFNQyxPQUFPLEdBQUdOLDZDQUFNLGNBQ3BCQyxJQUFJLENBQUNNLEdBQUwsT0FBQU4sSUFBSSxxQkFBUWhCLEtBQVIsYUFBUUEsS0FBUix1QkFBUUEsS0FBSyxDQUFFa0IsR0FBUCxDQUFXLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNyQixJQUFGLENBQU9zQixPQUFQLEVBQUo7QUFBQSxLQUFaLENBQVIsRUFEZ0IsaURBQzhCdEIsSUFEOUIsYUFDOEJBLElBRDlCLHVCQUM4QkEsSUFBSSxDQUFFc0IsT0FBTixFQUQ5QixDQUF0QjtBQUdBckIsaUJBQWEsQ0FBQztBQUNaRixVQUFJLEVBQUVpQixPQURNO0FBRVpoQixVQUFJLEVBQUV1QjtBQUZNLEtBQUQsQ0FBYjtBQUlELEdBWDJCLEVBV3pCLENBQUN4QixJQUFELEVBQU9DLElBQVAsRUFBYUUsS0FBYixDQVh5QixDQUE1QjtBQVlBLHNCQUNFO0FBQ0UsYUFBUyxFQUFFdUIsaURBQVUsQ0FDbkJDLHVFQUFxQyxDQUFDaEMsU0FEbkIsRUFFbkJBLFNBRm1CO0FBRHZCLGtCQU1FO0FBQ0UsYUFBUyxFQUFFK0IsaURBQVUsQ0FDbkJDLHVFQUFxQyxDQUFDL0IsbUJBRG5CLEVBRW5CQSxtQkFGbUI7QUFEdkIsS0FNR0ksSUFBSSxDQUFDNEIsTUFBTCxDQUFZLE1BQVosQ0FOSCxRQU0wQjVCLElBQUksQ0FBQzRCLE1BQUwsQ0FBWSxNQUFaLENBTjFCLENBTkYsZUFjRSxnRUFkRixlQWVFO0FBQ0UsYUFBUyxFQUFFRixpREFBVSxDQUNuQkMsdUVBQXFDLENBQUM5Qix5QkFEbkIsRUFFbkJBLHlCQUZtQjtBQUR2QixrQkFNRSxvREFBQyxxREFBRDtBQUFRLFlBQVEsRUFBRSxJQUFsQjtBQUF3QixXQUFPLEVBQUVZO0FBQWpDLGtCQUNFLG9EQUFDLG1HQUFELE9BREYsQ0FORixlQVNFLG9EQUFDLHFEQUFEO0FBQVEsWUFBUSxFQUFFLElBQWxCO0FBQXdCLFdBQU8sRUFBRUc7QUFBakMsa0JBQ0Usb0RBQUMsMEdBQUQsT0FERixDQVRGLGVBWUUsb0RBQUMscURBQUQ7QUFBUSxZQUFRLEVBQUUsSUFBbEI7QUFBd0IsV0FBTyxFQUFFRztBQUFqQyxrQkFDRSxvREFBQywyR0FBRCxPQURGLENBWkYsZUFlRSxvREFBQyxxREFBRDtBQUFRLFlBQVEsRUFBRSxJQUFsQjtBQUF3QixXQUFPLEVBQUVEO0FBQWpDLGtCQUNFLG9EQUFDLHNHQUFELE9BREYsQ0FmRixlQWtCRSxvREFBQyxxREFBRDtBQUNFLGFBQVMsRUFBRVksaURBQVUsQ0FDbkJDLHVFQUFxQyxDQUFDN0IsMkJBRG5CLEVBRW5CQSwyQkFGbUIsQ0FEdkI7QUFLRSxZQUFRLEVBQUUsSUFMWjtBQU1FLFlBQVEsRUFBRSxFQUFDSyxLQUFELGFBQUNBLEtBQUQsZUFBQ0EsS0FBSyxDQUFFMEIsTUFBUixDQU5aO0FBT0UsV0FBTyxFQUFFYjtBQVBYLGtCQVNFLG9EQUFDLG9HQUFELE9BVEYsQ0FsQkYsQ0FmRixDQURGO0FBZ0REOztjQXJHZXZCLHVCOzs7Ozs7Ozs7OzswQkFBQUEsdUIiLCJmaWxlIjoiYmRiYjdiMC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb29raW5nQ2FsZW5kYXJEYXRlUmFuZ2UsIEJvb2tpbmdDYWxlbmRhckl0ZW1UIH0gZnJvbSAnLi4vY29tbW9uJztcclxuaW1wb3J0IHsgZHVyYXRpb24sIER1cmF0aW9uLCBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBCb29raW5nQ2FsZW5kYXJDb250cm9sc0NsYXNzZXMgfSBmcm9tICcuL2NsYXNzZXMnO1xyXG5pbXBvcnQgeyBib29raW5nQ2FsZW5kYXJDb250cm9sc0RlZmF1bHRDbGFzc2VzIH0gZnJvbSAnLic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgKiBhcyBMZWZ0QXJyb3dMb25nSWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvbmF2aWdhdGlvbi9zdmcvcHJvZHVjdGlvbi9pY19hcnJvd19iYWNrXzI0cHguc3ZnJztcclxuaW1wb3J0ICogYXMgTGVmdEFycm93SWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvaGFyZHdhcmUvc3ZnL3Byb2R1Y3Rpb24vaWNfa2V5Ym9hcmRfYXJyb3dfbGVmdF8yNHB4LnN2Zyc7XHJcbmltcG9ydCAqIGFzIFJpZ2h0QXJyb3dMb25nSWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvbmF2aWdhdGlvbi9zdmcvcHJvZHVjdGlvbi9pY19hcnJvd19mb3J3YXJkXzI0cHguc3ZnJztcclxuaW1wb3J0ICogYXMgUmlnaHRBcnJvd0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL2hhcmR3YXJlL3N2Zy9wcm9kdWN0aW9uL2ljX2tleWJvYXJkX2Fycm93X3JpZ2h0XzI0cHguc3ZnJztcclxuaW1wb3J0ICogYXMgVW5mb2xkTGVzc0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL25hdmlnYXRpb24vc3ZnL3Byb2R1Y3Rpb24vaWNfdW5mb2xkX2xlc3NfMjRweC5zdmcnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJvb2tpbmdDYWxlbmRhckNvbnRyb2xzUHJvcHM8VCBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckl0ZW1UPlxyXG4gIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFyQ29udHJvbHNDbGFzc2VzIHtcclxuICBpdGVtczogVFtdO1xyXG4gIHN0ZXA6IER1cmF0aW9uO1xyXG4gIGZyb206IE1vbWVudDtcclxuICB0aWxsOiBNb21lbnQ7XHJcbiAgb25SYW5nZUNoYW5nZT86IChyYW5nZTogQm9va2luZ0NhbGVuZGFyRGF0ZVJhbmdlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQm9va2luZ0NhbGVuZGFyQ29udHJvbHM8VCBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckl0ZW1UPihcclxuICBwcm9wczogQm9va2luZ0NhbGVuZGFyQ29udHJvbHNQcm9wczxUPlxyXG4pIHtcclxuICBjb25zdCB7XHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBtb250aExhYmVsQ2xhc3NOYW1lLFxyXG4gICAgYnV0dG9uc0NvbnRhaW5lckNsYXNzTmFtZSxcclxuICAgIHpvb21Cb29raW5nc0J1dHRvbkNsYXNzTmFtZSxcclxuICAgIHN0ZXAsXHJcbiAgICBmcm9tLFxyXG4gICAgdGlsbCxcclxuICAgIG9uUmFuZ2VDaGFuZ2UsXHJcbiAgICBpdGVtcyxcclxuICB9ID0gcHJvcHM7XHJcbiAgaWYgKCFzdGVwIHx8ICFmcm9tIHx8ICF0aWxsKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgY29uc3Qgb25TdGVwRmFjdG9yeSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKF9zdGVwOiBEdXJhdGlvbikgPT4gKCkgPT5cclxuICAgICAgb25SYW5nZUNoYW5nZSh7XHJcbiAgICAgICAgZnJvbTogZnJvbS5jbG9uZSgpLmFkZChfc3RlcCksXHJcbiAgICAgICAgdGlsbDogdGlsbC5jbG9uZSgpLmFkZChfc3RlcCksXHJcbiAgICAgIH0pLFxyXG4gICAgW2Zyb20sIHRpbGwsIG9uUmFuZ2VDaGFuZ2VdXHJcbiAgKTtcclxuICBjb25zdCBvbkJpZ1N0ZXBMZWZ0Q2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIG9uU3RlcEZhY3RvcnkoZHVyYXRpb24oLTEgKiB0aWxsLmRpZmYoZnJvbSkpKSxcclxuICAgIFtvblN0ZXBGYWN0b3J5LCB0aWxsLCBmcm9tXVxyXG4gICk7XHJcbiAgY29uc3Qgb25TbWFsbFN0ZXBMZWZ0Q2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIG9uU3RlcEZhY3RvcnkoZHVyYXRpb24oc3RlcC5hc01pbGxpc2Vjb25kcygpICogLTEpKSxcclxuICAgIFtvblN0ZXBGYWN0b3J5LCBzdGVwXVxyXG4gICk7XHJcbiAgY29uc3Qgb25CaWdTdGVwUmlnaHRDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgb25TdGVwRmFjdG9yeShkdXJhdGlvbih0aWxsLmRpZmYoZnJvbSkpKSxcclxuICAgIFtvblN0ZXBGYWN0b3J5LCB0aWxsLCBmcm9tXVxyXG4gICk7XHJcbiAgY29uc3Qgb25TbWFsbFN0ZXBSaWdodENsaWNrID0gUmVhY3QudXNlQ2FsbGJhY2sob25TdGVwRmFjdG9yeShzdGVwKSwgW1xyXG4gICAgb25TdGVwRmFjdG9yeSxcclxuICAgIHN0ZXAsXHJcbiAgXSk7XHJcbiAgY29uc3Qgb25ab29tQm9va2luZ3NDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IG1pbkZyb20gPSBtb21lbnQoXHJcbiAgICAgIE1hdGgubWluKC4uLml0ZW1zPy5tYXAoYSA9PiBhLmZyb20udmFsdWVPZigpKSkgPz8gZnJvbT8udmFsdWVPZigpXHJcbiAgICApO1xyXG4gICAgY29uc3QgbWF4VGlsbCA9IG1vbWVudChcclxuICAgICAgTWF0aC5tYXgoLi4uaXRlbXM/Lm1hcChhID0+IGEudGlsbC52YWx1ZU9mKCkpKSA/PyB0aWxsPy52YWx1ZU9mKClcclxuICAgICk7XHJcbiAgICBvblJhbmdlQ2hhbmdlKHtcclxuICAgICAgZnJvbTogbWluRnJvbSxcclxuICAgICAgdGlsbDogbWF4VGlsbCxcclxuICAgIH0pO1xyXG4gIH0sIFtmcm9tLCB0aWxsLCBpdGVtc10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICBib29raW5nQ2FsZW5kYXJDb250cm9sc0RlZmF1bHRDbGFzc2VzLmNsYXNzTmFtZSxcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgIGJvb2tpbmdDYWxlbmRhckNvbnRyb2xzRGVmYXVsdENsYXNzZXMubW9udGhMYWJlbENsYXNzTmFtZSxcclxuICAgICAgICAgIG1vbnRoTGFiZWxDbGFzc05hbWVcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAge2Zyb20uZm9ybWF0KCdNTU1NJyl9LCB7ZnJvbS5mb3JtYXQoJ1lZWVknKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICBib29raW5nQ2FsZW5kYXJDb250cm9sc0RlZmF1bHRDbGFzc2VzLmJ1dHRvbnNDb250YWluZXJDbGFzc05hbWUsXHJcbiAgICAgICAgICBidXR0b25zQ29udGFpbmVyQ2xhc3NOYW1lXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCdXR0b24gbm9TaGFkb3c9e3RydWV9IG9uQ2xpY2s9e29uQmlnU3RlcExlZnRDbGlja30+XHJcbiAgICAgICAgICA8TGVmdEFycm93TG9uZ0ljb24gLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG5vU2hhZG93PXt0cnVlfSBvbkNsaWNrPXtvblNtYWxsU3RlcExlZnRDbGlja30+XHJcbiAgICAgICAgICA8TGVmdEFycm93SWNvbiAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gbm9TaGFkb3c9e3RydWV9IG9uQ2xpY2s9e29uU21hbGxTdGVwUmlnaHRDbGlja30+XHJcbiAgICAgICAgICA8UmlnaHRBcnJvd0ljb24gLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG5vU2hhZG93PXt0cnVlfSBvbkNsaWNrPXtvbkJpZ1N0ZXBSaWdodENsaWNrfT5cclxuICAgICAgICAgIDxSaWdodEFycm93TG9uZ0ljb24gLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgIGJvb2tpbmdDYWxlbmRhckNvbnRyb2xzRGVmYXVsdENsYXNzZXMuem9vbUJvb2tpbmdzQnV0dG9uQ2xhc3NOYW1lLFxyXG4gICAgICAgICAgICB6b29tQm9va2luZ3NCdXR0b25DbGFzc05hbWVcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBub1NoYWRvdz17dHJ1ZX1cclxuICAgICAgICAgIGRpc2FibGVkPXshaXRlbXM/Lmxlbmd0aH1cclxuICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbUJvb2tpbmdzQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFVuZm9sZExlc3NJY29uIC8+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9