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
      zoomLevelsContainerClassName = props.zoomLevelsContainerClassName,
      zoomLevels = props.zoomLevels,
      step = props.step,
      from = props.from,
      till = props.till,
      onRangeChange = props.onRangeChange,
      items = props.items,
      _props$filterBookings = props.filterBookingsToZoom,
      filterBookingsToZoom = _props$filterBookings === void 0 ? function () {
    return true;
  } : _props$filterBookings;

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
  var filteredItems = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return items === null || items === void 0 ? void 0 : items.filter(filterBookingsToZoom);
  }, [filterBookingsToZoom, items]);
  var onZoomBookingsClick = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
    var _Math$min, _Math$max;

    var minFrom = moment__WEBPACK_IMPORTED_MODULE_2___default()((_Math$min = Math.min.apply(Math, _toConsumableArray(filteredItems === null || filteredItems === void 0 ? void 0 : filteredItems.filter(filterBookingsToZoom).map(function (a) {
      return a.from.valueOf();
    })))) !== null && _Math$min !== void 0 ? _Math$min : from === null || from === void 0 ? void 0 : from.valueOf());
    var maxTill = moment__WEBPACK_IMPORTED_MODULE_2___default()((_Math$max = Math.max.apply(Math, _toConsumableArray(filteredItems === null || filteredItems === void 0 ? void 0 : filteredItems.filter(filterBookingsToZoom).map(function (a) {
      return a.till.valueOf();
    })))) !== null && _Math$max !== void 0 ? _Math$max : till === null || till === void 0 ? void 0 : till.valueOf());
    onRangeChange({
      from: minFrom,
      till: maxTill
    });
  }, [from, till, filteredItems]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_3__["bookingCalendarControlsDefaultClasses"].className, className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_3__["bookingCalendarControlsDefaultClasses"].monthLabelClassName, monthLabelClassName)
  }, from.format('MMMM'), ", ", from.format('YYYY')), (zoomLevels === null || zoomLevels === void 0 ? void 0 : zoomLevels.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_3__["bookingCalendarControlsDefaultClasses"].zoomLevelsContainerClassName, zoomLevelsContainerClassName)
  }, zoomLevels.map(function (level, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      type: till.valueOf() - from.valueOf() === level.step.asMilliseconds() ? 'primary' : undefined // blank={true}
      ,
      noShadow: true,
      key: index,
      onClick: function onClick() {
        return onRangeChange({
          from: from,
          till: moment__WEBPACK_IMPORTED_MODULE_2___default()(from).add(level.step)
        });
      }
    }, level.label);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
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
    disabled: !(filteredItems !== null && filteredItems !== void 0 && filteredItems.length),
    onClick: onZoomBookingsClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](material_design_icons_navigation_svg_production_ic_unfold_less_24px_svg__WEBPACK_IMPORTED_MODULE_9__, null))));
}

__signature__(BookingCalendarControls, "useCallback{onStepFactory}\nuseCallback{onBigStepLeftClick}\nuseCallback{onSmallStepLeftClick}\nuseCallback{onBigStepRightClick}\nuseCallback{onSmallStepRightClick}\nuseMemo{filteredItems}\nuseCallback{onZoomBookingsClick}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvYm9va2luZ0NhbGVuZGFyL2Jvb2tpbmdDYWxlbmRhckNvbnRyb2xzL0Jvb2tpbmdDYWxlbmRhckNvbnRyb2xzLnRzeCJdLCJuYW1lcyI6WyJCb29raW5nQ2FsZW5kYXJDb250cm9scyIsInByb3BzIiwiY2xhc3NOYW1lIiwibW9udGhMYWJlbENsYXNzTmFtZSIsImJ1dHRvbnNDb250YWluZXJDbGFzc05hbWUiLCJ6b29tQm9va2luZ3NCdXR0b25DbGFzc05hbWUiLCJ6b29tTGV2ZWxzQ29udGFpbmVyQ2xhc3NOYW1lIiwiem9vbUxldmVscyIsInN0ZXAiLCJmcm9tIiwidGlsbCIsIm9uUmFuZ2VDaGFuZ2UiLCJpdGVtcyIsImZpbHRlckJvb2tpbmdzVG9ab29tIiwib25TdGVwRmFjdG9yeSIsIlJlYWN0IiwiX3N0ZXAiLCJjbG9uZSIsImFkZCIsIm9uQmlnU3RlcExlZnRDbGljayIsImR1cmF0aW9uIiwiZGlmZiIsIm9uU21hbGxTdGVwTGVmdENsaWNrIiwiYXNNaWxsaXNlY29uZHMiLCJvbkJpZ1N0ZXBSaWdodENsaWNrIiwib25TbWFsbFN0ZXBSaWdodENsaWNrIiwiZmlsdGVyZWRJdGVtcyIsImZpbHRlciIsIm9uWm9vbUJvb2tpbmdzQ2xpY2siLCJtaW5Gcm9tIiwibW9tZW50IiwiTWF0aCIsIm1pbiIsIm1hcCIsImEiLCJ2YWx1ZU9mIiwibWF4VGlsbCIsIm1heCIsImNsYXNzTmFtZXMiLCJib29raW5nQ2FsZW5kYXJDb250cm9sc0RlZmF1bHRDbGFzc2VzIiwiZm9ybWF0IiwibGVuZ3RoIiwibGV2ZWwiLCJpbmRleCIsInVuZGVmaW5lZCIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYU8sU0FBU0EsdUJB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O0FBQXdCLFdBQU8sRUFBRUQ7QUFBakMsa0JBQ0Usb0RBQUMsc0dBQUQsT0FERixDQWZGLGVBa0JFLG9EQUFDLHFEQUFEO0FBQ0UsYUFBUyxFQUFFYyxpREFBVSxDQUNuQkMsdUVBQXFDLENBQUNsQywyQkFEbkIsRUFFbkJBLDJCQUZtQixDQUR2QjtBQUtFLFlBQVEsRUFBRSxJQUxaO0FBTUUsWUFBUSxFQUFFLEVBQUNxQixhQUFELGFBQUNBLGFBQUQsZUFBQ0EsYUFBYSxDQUFFZSxNQUFoQixDQU5aO0FBT0UsV0FBTyxFQUFFYjtBQVBYLGtCQVNFLG9EQUFDLG9HQUFELE9BVEYsQ0FsQkYsQ0EzQ0YsQ0FERjtBQTRFRDs7Y0FoSmU1Qix1Qjs7Ozs7Ozs7Ozs7MEJBQUFBLHVCIiwiZmlsZSI6ImUzN2VlZWYtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJEYXRlUmFuZ2UsXHJcbiAgQm9va2luZ0NhbGVuZGFySXRlbVQsXHJcbiAgWm9vbUxldmVsLFxyXG59IGZyb20gJy4uL2NvbW1vbic7XHJcbmltcG9ydCB7IGR1cmF0aW9uLCBEdXJhdGlvbiwgTW9tZW50IH0gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyQ29udHJvbHNDbGFzc2VzIH0gZnJvbSAnLi9jbGFzc2VzJztcclxuaW1wb3J0IHsgYm9va2luZ0NhbGVuZGFyQ29udHJvbHNEZWZhdWx0Q2xhc3NlcyB9IGZyb20gJy4nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b24vQnV0dG9uJztcclxuaW1wb3J0ICogYXMgTGVmdEFycm93TG9uZ0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL25hdmlnYXRpb24vc3ZnL3Byb2R1Y3Rpb24vaWNfYXJyb3dfYmFja18yNHB4LnN2Zyc7XHJcbmltcG9ydCAqIGFzIExlZnRBcnJvd0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL2hhcmR3YXJlL3N2Zy9wcm9kdWN0aW9uL2ljX2tleWJvYXJkX2Fycm93X2xlZnRfMjRweC5zdmcnO1xyXG5pbXBvcnQgKiBhcyBSaWdodEFycm93TG9uZ0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL25hdmlnYXRpb24vc3ZnL3Byb2R1Y3Rpb24vaWNfYXJyb3dfZm9yd2FyZF8yNHB4LnN2Zyc7XHJcbmltcG9ydCAqIGFzIFJpZ2h0QXJyb3dJY29uIGZyb20gJ21hdGVyaWFsLWRlc2lnbi1pY29ucy9oYXJkd2FyZS9zdmcvcHJvZHVjdGlvbi9pY19rZXlib2FyZF9hcnJvd19yaWdodF8yNHB4LnN2Zyc7XHJcbmltcG9ydCAqIGFzIFVuZm9sZExlc3NJY29uIGZyb20gJ21hdGVyaWFsLWRlc2lnbi1pY29ucy9uYXZpZ2F0aW9uL3N2Zy9wcm9kdWN0aW9uL2ljX3VuZm9sZF9sZXNzXzI0cHguc3ZnJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCb29raW5nQ2FsZW5kYXJDb250cm9sc1Byb3BzPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVD5cclxuICBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckNvbnRyb2xzQ2xhc3NlcyB7XHJcbiAgaXRlbXM6IFRbXTtcclxuICBzdGVwOiBEdXJhdGlvbjtcclxuICBmcm9tOiBNb21lbnQ7XHJcbiAgdGlsbDogTW9tZW50O1xyXG4gIHpvb21MZXZlbHM/OiBab29tTGV2ZWxbXTtcclxuICBvblJhbmdlQ2hhbmdlPzogKHJhbmdlOiBCb29raW5nQ2FsZW5kYXJEYXRlUmFuZ2UpID0+IHZvaWQ7XHJcbiAgZmlsdGVyQm9va2luZ3NUb1pvb20/OiAoYm9va2luZzogVCkgPT4gYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJvb2tpbmdDYWxlbmRhckNvbnRyb2xzPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVD4oXHJcbiAgcHJvcHM6IEJvb2tpbmdDYWxlbmRhckNvbnRyb2xzUHJvcHM8VD5cclxuKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgbW9udGhMYWJlbENsYXNzTmFtZSxcclxuICAgIGJ1dHRvbnNDb250YWluZXJDbGFzc05hbWUsXHJcbiAgICB6b29tQm9va2luZ3NCdXR0b25DbGFzc05hbWUsXHJcbiAgICB6b29tTGV2ZWxzQ29udGFpbmVyQ2xhc3NOYW1lLFxyXG4gICAgem9vbUxldmVscyxcclxuICAgIHN0ZXAsXHJcbiAgICBmcm9tLFxyXG4gICAgdGlsbCxcclxuICAgIG9uUmFuZ2VDaGFuZ2UsXHJcbiAgICBpdGVtcyxcclxuICAgIGZpbHRlckJvb2tpbmdzVG9ab29tID0gKCkgPT4gdHJ1ZSxcclxuICB9ID0gcHJvcHM7XHJcbiAgaWYgKCFzdGVwIHx8ICFmcm9tIHx8ICF0aWxsKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgY29uc3Qgb25TdGVwRmFjdG9yeSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKF9zdGVwOiBEdXJhdGlvbikgPT4gKCkgPT5cclxuICAgICAgb25SYW5nZUNoYW5nZSh7XHJcbiAgICAgICAgZnJvbTogZnJvbS5jbG9uZSgpLmFkZChfc3RlcCksXHJcbiAgICAgICAgdGlsbDogdGlsbC5jbG9uZSgpLmFkZChfc3RlcCksXHJcbiAgICAgIH0pLFxyXG4gICAgW2Zyb20sIHRpbGwsIG9uUmFuZ2VDaGFuZ2VdXHJcbiAgKTtcclxuICBjb25zdCBvbkJpZ1N0ZXBMZWZ0Q2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIG9uU3RlcEZhY3RvcnkoZHVyYXRpb24oLTEgKiB0aWxsLmRpZmYoZnJvbSkpKSxcclxuICAgIFtvblN0ZXBGYWN0b3J5LCB0aWxsLCBmcm9tXVxyXG4gICk7XHJcbiAgY29uc3Qgb25TbWFsbFN0ZXBMZWZ0Q2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIG9uU3RlcEZhY3RvcnkoZHVyYXRpb24oc3RlcC5hc01pbGxpc2Vjb25kcygpICogLTEpKSxcclxuICAgIFtvblN0ZXBGYWN0b3J5LCBzdGVwXVxyXG4gICk7XHJcbiAgY29uc3Qgb25CaWdTdGVwUmlnaHRDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgb25TdGVwRmFjdG9yeShkdXJhdGlvbih0aWxsLmRpZmYoZnJvbSkpKSxcclxuICAgIFtvblN0ZXBGYWN0b3J5LCB0aWxsLCBmcm9tXVxyXG4gICk7XHJcbiAgY29uc3Qgb25TbWFsbFN0ZXBSaWdodENsaWNrID0gUmVhY3QudXNlQ2FsbGJhY2sob25TdGVwRmFjdG9yeShzdGVwKSwgW1xyXG4gICAgb25TdGVwRmFjdG9yeSxcclxuICAgIHN0ZXAsXHJcbiAgXSk7XHJcbiAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PiBpdGVtcz8uZmlsdGVyKGZpbHRlckJvb2tpbmdzVG9ab29tKSxcclxuICAgIFtmaWx0ZXJCb29raW5nc1RvWm9vbSwgaXRlbXNdXHJcbiAgKTtcclxuICBjb25zdCBvblpvb21Cb29raW5nc0NsaWNrID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc3QgbWluRnJvbSA9IG1vbWVudChcclxuICAgICAgTWF0aC5taW4oXHJcbiAgICAgICAgLi4uZmlsdGVyZWRJdGVtc1xyXG4gICAgICAgICAgPy5maWx0ZXIoZmlsdGVyQm9va2luZ3NUb1pvb20pXHJcbiAgICAgICAgICAubWFwKGEgPT4gYS5mcm9tLnZhbHVlT2YoKSlcclxuICAgICAgKSA/PyBmcm9tPy52YWx1ZU9mKClcclxuICAgICk7XHJcbiAgICBjb25zdCBtYXhUaWxsID0gbW9tZW50KFxyXG4gICAgICBNYXRoLm1heChcclxuICAgICAgICAuLi5maWx0ZXJlZEl0ZW1zXHJcbiAgICAgICAgICA/LmZpbHRlcihmaWx0ZXJCb29raW5nc1RvWm9vbSlcclxuICAgICAgICAgIC5tYXAoYSA9PiBhLnRpbGwudmFsdWVPZigpKVxyXG4gICAgICApID8/IHRpbGw/LnZhbHVlT2YoKVxyXG4gICAgKTtcclxuICAgIG9uUmFuZ2VDaGFuZ2Uoe1xyXG4gICAgICBmcm9tOiBtaW5Gcm9tLFxyXG4gICAgICB0aWxsOiBtYXhUaWxsLFxyXG4gICAgfSk7XHJcbiAgfSwgW2Zyb20sIHRpbGwsIGZpbHRlcmVkSXRlbXNdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgYm9va2luZ0NhbGVuZGFyQ29udHJvbHNEZWZhdWx0Q2xhc3Nlcy5jbGFzc05hbWUsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICA+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICBib29raW5nQ2FsZW5kYXJDb250cm9sc0RlZmF1bHRDbGFzc2VzLm1vbnRoTGFiZWxDbGFzc05hbWUsXHJcbiAgICAgICAgICBtb250aExhYmVsQ2xhc3NOYW1lXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtmcm9tLmZvcm1hdCgnTU1NTScpfSwge2Zyb20uZm9ybWF0KCdZWVlZJyl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7em9vbUxldmVscz8ubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICBib29raW5nQ2FsZW5kYXJDb250cm9sc0RlZmF1bHRDbGFzc2VzLnpvb21MZXZlbHNDb250YWluZXJDbGFzc05hbWUsXHJcbiAgICAgICAgICAgIHpvb21MZXZlbHNDb250YWluZXJDbGFzc05hbWVcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3pvb21MZXZlbHMubWFwKChsZXZlbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9e1xyXG4gICAgICAgICAgICAgICAgdGlsbC52YWx1ZU9mKCkgLSBmcm9tLnZhbHVlT2YoKSA9PT0gbGV2ZWwuc3RlcC5hc01pbGxpc2Vjb25kcygpXHJcbiAgICAgICAgICAgICAgICAgID8gJ3ByaW1hcnknXHJcbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vIGJsYW5rPXt0cnVlfVxyXG4gICAgICAgICAgICAgIG5vU2hhZG93PXt0cnVlfVxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgIG9uUmFuZ2VDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICBmcm9tOiBmcm9tLFxyXG4gICAgICAgICAgICAgICAgICB0aWxsOiBtb21lbnQoZnJvbSkuYWRkKGxldmVsLnN0ZXApLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bGV2ZWwubGFiZWx9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICBib29raW5nQ2FsZW5kYXJDb250cm9sc0RlZmF1bHRDbGFzc2VzLmJ1dHRvbnNDb250YWluZXJDbGFzc05hbWUsXHJcbiAgICAgICAgICBidXR0b25zQ29udGFpbmVyQ2xhc3NOYW1lXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCdXR0b24gbm9TaGFkb3c9e3RydWV9IG9uQ2xpY2s9e29uQmlnU3RlcExlZnRDbGlja30+XHJcbiAgICAgICAgICA8TGVmdEFycm93TG9uZ0ljb24gLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG5vU2hhZG93PXt0cnVlfSBvbkNsaWNrPXtvblNtYWxsU3RlcExlZnRDbGlja30+XHJcbiAgICAgICAgICA8TGVmdEFycm93SWNvbiAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gbm9TaGFkb3c9e3RydWV9IG9uQ2xpY2s9e29uU21hbGxTdGVwUmlnaHRDbGlja30+XHJcbiAgICAgICAgICA8UmlnaHRBcnJvd0ljb24gLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG5vU2hhZG93PXt0cnVlfSBvbkNsaWNrPXtvbkJpZ1N0ZXBSaWdodENsaWNrfT5cclxuICAgICAgICAgIDxSaWdodEFycm93TG9uZ0ljb24gLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgIGJvb2tpbmdDYWxlbmRhckNvbnRyb2xzRGVmYXVsdENsYXNzZXMuem9vbUJvb2tpbmdzQnV0dG9uQ2xhc3NOYW1lLFxyXG4gICAgICAgICAgICB6b29tQm9va2luZ3NCdXR0b25DbGFzc05hbWVcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBub1NoYWRvdz17dHJ1ZX1cclxuICAgICAgICAgIGRpc2FibGVkPXshZmlsdGVyZWRJdGVtcz8ubGVuZ3RofVxyXG4gICAgICAgICAgb25DbGljaz17b25ab29tQm9va2luZ3NDbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VW5mb2xkTGVzc0ljb24gLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=