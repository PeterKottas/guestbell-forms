webpackHotUpdate("main",{

/***/ "./src/lib/components/bookingCalendar/BookingCalendar.tsx":
/*!****************************************************************!*\
  !*** ./src/lib/components/bookingCalendar/BookingCalendar.tsx ***!
  \****************************************************************/
/*! exports provided: BookingCalendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingCalendar", function() { return BookingCalendar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/lib/components/bookingCalendar/classes.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bookingCalendarControls_BookingCalendarControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookingCalendarControls/BookingCalendarControls */ "./src/lib/components/bookingCalendar/bookingCalendarControls/BookingCalendarControls.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/lib/components/bookingCalendar/utils.ts");
/* harmony import */ var _bookingCalendarLane_BookingCalendarLane__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookingCalendarLane/BookingCalendarLane */ "./src/lib/components/bookingCalendar/bookingCalendarLane/BookingCalendarLane.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bookingCalendarGrid_BookingCalendarGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bookingCalendarGrid/BookingCalendarGrid */ "./src/lib/components/bookingCalendar/bookingCalendarGrid/BookingCalendarGrid.tsx");
/* harmony import */ var _bookingCalendarLaneHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bookingCalendarLaneHeader */ "./src/lib/components/bookingCalendar/bookingCalendarLaneHeader/index.ts");
/* harmony import */ var _bookingCalendarLanesHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bookingCalendarLanesHeader */ "./src/lib/components/bookingCalendar/bookingCalendarLanesHeader/index.ts");
/* harmony import */ var _bookingCalendarDatePicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bookingCalendarDatePicker */ "./src/lib/components/bookingCalendar/bookingCalendarDatePicker/index.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};













var defaultStep = Object(moment__WEBPACK_IMPORTED_MODULE_6__["duration"])(1, 'day');
var defaultStartOfStep = moment__WEBPACK_IMPORTED_MODULE_6___default()().startOf('day');
function BookingCalendar(props) {
  var bookings = props.bookings,
      className = props.className,
      laneTdClassName = props.laneTdClassName,
      controlsClasses = props.controlsClasses,
      tableClassName = props.tableClassName,
      from = props.from,
      till = props.till,
      onRangeChange = props.onRangeChange,
      onExtraBookingsChange = props.onExtraBookingsChange,
      _props$step = props.step,
      step = _props$step === void 0 ? defaultStep : _props$step,
      _props$startOfStep = props.startOfStep,
      startOfStep = _props$startOfStep === void 0 ? defaultStartOfStep : _props$startOfStep,
      _props$showGrid = props.showGrid,
      showGrid = _props$showGrid === void 0 ? true : _props$showGrid,
      _props$gridSubdivisio = props.gridSubdivisions,
      gridSubdivisions = _props$gridSubdivisio === void 0 ? 1 : _props$gridSubdivisio,
      minLanesCount = props.minLanesCount,
      lanesSource = props.lanesSource,
      _props$BookingCalenda = props.BookingCalendarControls,
      BookingCalendarControls = _props$BookingCalenda === void 0 ? _bookingCalendarControls_BookingCalendarControls__WEBPACK_IMPORTED_MODULE_3__["BookingCalendarControls"] : _props$BookingCalenda,
      BookingCalendarItem = props.BookingCalendarItem,
      _props$BookingCalenda2 = props.BookingCalendarLane,
      BookingCalendarLane = _props$BookingCalenda2 === void 0 ? _bookingCalendarLane_BookingCalendarLane__WEBPACK_IMPORTED_MODULE_5__["BookingCalendarLane"] : _props$BookingCalenda2,
      BookingCalendarRenderItem = props.BookingCalendarRenderItem,
      _props$BookingCalenda3 = props.BookingCalendarGrid,
      BookingCalendarGrid = _props$BookingCalenda3 === void 0 ? _bookingCalendarGrid_BookingCalendarGrid__WEBPACK_IMPORTED_MODULE_7__["BookingCalendarGrid"] : _props$BookingCalenda3,
      _props$BookingCalenda4 = props.BookingCalendarLaneHeader,
      BookingCalendarLaneHeader = _props$BookingCalenda4 === void 0 ? _bookingCalendarLaneHeader__WEBPACK_IMPORTED_MODULE_8__["BookingCalendarLaneHeader"] : _props$BookingCalenda4,
      _props$BookingCalenda5 = props.BookingCalendarLanesHeader,
      BookingCalendarLanesHeader = _props$BookingCalenda5 === void 0 ? _bookingCalendarLanesHeader__WEBPACK_IMPORTED_MODULE_9__["BookingCalendarLanesHeader"] : _props$BookingCalenda5,
      _props$BookingCalenda6 = props.BookingCalendarDatePicker,
      BookingCalendarDatePicker = _props$BookingCalenda6 === void 0 ? _bookingCalendarDatePicker__WEBPACK_IMPORTED_MODULE_10__["BookingCalendarDatePicker"] : _props$BookingCalenda6;

  var _React$useMemo = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["splitBookingsToLanes"])(bookings, from, minLanesCount, lanesSource);
  }, [bookings, from, minLanesCount, lanesSource]),
      lanes = _React$useMemo.lanes,
      extraBookings = _React$useMemo.extraBookings;

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    onExtraBookingsChange === null || onExtraBookingsChange === void 0 ? void 0 : onExtraBookingsChange(extraBookings);
  }, [extraBookings]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_classes__WEBPACK_IMPORTED_MODULE_1__["bookingCalendarDefaultClasses"].className, className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BookingCalendarControls, _extends({}, controlsClasses, {
    items: bookings,
    from: from,
    till: till,
    onRangeChange: onRangeChange,
    step: step
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("table", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_classes__WEBPACK_IMPORTED_MODULE_1__["bookingCalendarDefaultClasses"].tableClassName, tableClassName)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BookingCalendarDatePicker, {
    from: from,
    till: till,
    onRangeChange: onRangeChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BookingCalendarLanesHeader, _extends({}, controlsClasses, {
    from: from,
    till: till,
    onRangeChange: onRangeChange,
    step: step,
    startOfStep: startOfStep
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tbody", null, lanes.map(function (lane, laneIndex) {
    var _lane$BookingCalendar, _lane$BookingCalendar2, _lane$laneKey, _lane$BookingCalendar3, _lane$BookingCalendar4;

    var LaneBookingCalendarLaneHeader = (_lane$BookingCalendar = lane.BookingCalendarLaneHeader) !== null && _lane$BookingCalendar !== void 0 ? _lane$BookingCalendar : BookingCalendarLaneHeader;
    var LaneBookingCalendarLane = (_lane$BookingCalendar2 = lane.BookingCalendarLane) !== null && _lane$BookingCalendar2 !== void 0 ? _lane$BookingCalendar2 : BookingCalendarLane;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tr", {
      key: laneIndex,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(lane.rowClassName)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LaneBookingCalendarLaneHeader, {
      laneKey: (_lane$laneKey = lane.laneKey) !== null && _lane$laneKey !== void 0 ? _lane$laneKey : laneIndex,
      data: lane.data
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("td", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_classes__WEBPACK_IMPORTED_MODULE_1__["bookingCalendarDefaultClasses"].laneTdClassName, laneTdClassName)
    }, showGrid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](BookingCalendarGrid, {
      from: from,
      till: till,
      step: step,
      subdivisions: gridSubdivisions
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](LaneBookingCalendarLane, {
      laneIndex: laneIndex,
      items: lane.items,
      from: from,
      till: till,
      BookingCalendarItem: (_lane$BookingCalendar3 = lane.BookingCalendarItem) !== null && _lane$BookingCalendar3 !== void 0 ? _lane$BookingCalendar3 : BookingCalendarItem,
      BookingCalendarRenderItem: (_lane$BookingCalendar4 = lane.BookingCalendarRenderItem) !== null && _lane$BookingCalendar4 !== void 0 ? _lane$BookingCalendar4 : BookingCalendarRenderItem,
      step: step
    })));
  }))));
}

__signature__(BookingCalendar, "useMemo{{ lanes, extraBookings }}\nuseEffect{}");

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultStep, "defaultStep", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\bookingCalendar\\BookingCalendar.tsx");
  reactHotLoader.register(defaultStartOfStep, "defaultStartOfStep", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\bookingCalendar\\BookingCalendar.tsx");
  reactHotLoader.register(BookingCalendar, "BookingCalendar", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\bookingCalendar\\BookingCalendar.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvYm9va2luZ0NhbGVuZGFyL0Jvb2tpbmdDYWxlbmRhci50c3giXSwibmFtZXMiOlsiZGVmYXVsdFN0ZXAiLCJkdXJhdGlvbiIsImRlZmF1bHRTdGFydE9mU3RlcCIsIm1vbWVudCIsInN0YXJ0T2YiLCJCb29raW5nQ2FsZW5kYXIiLCJwcm9wcyIsImJvb2tpbmdzIiwiY2xhc3NOYW1lIiwibGFuZVRkQ2xhc3NOYW1lIiwiY29udHJvbHNDbGFzc2VzIiwidGFibGVDbGFzc05hbWUiLCJmcm9tIiwidGlsbCIsIm9uUmFuZ2VDaGFuZ2UiLCJvbkV4dHJhQm9va2luZ3NDaGFuZ2UiLCJzdGVwIiwic3RhcnRPZlN0ZXAiLCJzaG93R3JpZCIsImdyaWRTdWJkaXZpc2lvbnMiLCJtaW5MYW5lc0NvdW50IiwibGFuZXNTb3VyY2UiLCJCb29raW5nQ2FsZW5kYXJDb250cm9scyIsIkRlZmF1bHRCb29raW5nQ2FsZW5kYXJDb250cm9scyIsIkJvb2tpbmdDYWxlbmRhckl0ZW0iLCJCb29raW5nQ2FsZW5kYXJMYW5lIiwiRGVmYXVsdEJvb2tpbmdDYWxlbmRhckxhbmUiLCJCb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtIiwiQm9va2luZ0NhbGVuZGFyR3JpZCIsIkRlZmF1bHRCb29raW5nQ2FsZW5kYXJHcmlkIiwiQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlciIsIkRlZmF1bHRCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyIiwiQm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXIiLCJEZWZhdWx0Qm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXIiLCJCb29raW5nQ2FsZW5kYXJEYXRlUGlja2VyIiwiRGVmYXVsdEJvb2tpbmdDYWxlbmRhckRhdGVQaWNrZXIiLCJSZWFjdCIsInNwbGl0Qm9va2luZ3NUb0xhbmVzIiwibGFuZXMiLCJleHRyYUJvb2tpbmdzIiwiY2xhc3NOYW1lcyIsImJvb2tpbmdDYWxlbmRhckRlZmF1bHRDbGFzc2VzIiwibWFwIiwibGFuZSIsImxhbmVJbmRleCIsIkxhbmVCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyIiwiTGFuZUJvb2tpbmdDYWxlbmRhckxhbmUiLCJyb3dDbGFzc05hbWUiLCJsYW5lS2V5IiwiZGF0YSIsIml0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBO0FBRUE7QUFJQTtBQUNBO0FBSUE7QUFHQTtBQUlBO0FBSUE7QUFJQTtBQUlBO0FBc0NBLElBQU1BLFdBQVcsR0FBR0MsdURBQVEsQ0FBQyxDQUFELEVBQUksS0FBSixDQUE1QjtBQUNBLElBQU1DLGtCQUFrQixHQUFHQyw2Q0FBTSxHQUFHQyxPQUFULENBQWlCLEtBQWpCLENBQTNCO0FBRU8sU0FBU0MsZUFBVCxDQUNMQyxLQURLLEVBRUw7QUFDQSxNQUNFQyxRQURGLEdBd0JJRCxLQXhCSixDQUNFQyxRQURGO0FBQUEsTUFFRUMsU0FGRixHQXdCSUYsS0F4QkosQ0FFRUUsU0FGRjtBQUFBLE1BR0VDLGVBSEYsR0F3QklILEtBeEJKLENBR0VHLGVBSEY7QUFBQSxNQUlFQyxlQUpGLEdBd0JJSixLQXhCSixDQUlFSSxlQUpGO0FBQUEsTUFLRUMsY0FMRixHQXdCSUwsS0F4QkosQ0FLRUssY0FMRjtBQUFBLE1BTUVDLElBTkYsR0F3QklOLEtBeEJKLENBTUVNLElBTkY7QUFBQSxNQU9FQyxJQVBGLEdBd0JJUCxLQXhCSixDQU9FTyxJQVBGO0FBQUEsTUFRRUMsYUFSRixHQXdCSVIsS0F4QkosQ0FRRVEsYUFSRjtBQUFBLE1BU0VDLHFCQVRGLEdBd0JJVCxLQXhCSixDQVNFUyxxQkFURjtBQUFBLG9CQXdCSVQsS0F4QkosQ0FVRVUsSUFWRjtBQUFBLE1BVUVBLElBVkYsNEJBVVNoQixXQVZUO0FBQUEsMkJBd0JJTSxLQXhCSixDQVdFVyxXQVhGO0FBQUEsTUFXRUEsV0FYRixtQ0FXZ0JmLGtCQVhoQjtBQUFBLHdCQXdCSUksS0F4QkosQ0FZRVksUUFaRjtB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RDlCO0FBRUEsd0JBQ0U7QUFBSSxTQUFHLEVBQUVtQixTQUFUO0FBQW9CLGVBQVMsRUFBRUosaURBQVUsQ0FBQ0csSUFBSSxDQUFDSSxZQUFOO0FBQXpDLG9CQUNFLDZFQUNFLG9EQUFDLDZCQUFEO0FBQ0UsYUFBTyxtQkFBRUosSUFBSSxDQUFDSyxPQUFQLHlEQUFrQkosU0FEM0I7QUFFRSxVQUFJLEVBQUVELElBQUksQ0FBQ007QUFGYixNQURGLENBREYsZUFPRTtBQUNFLGVBQVMsRUFBRVQsaURBQVUsQ0FDbkJDLHNFQUE2QixDQUFDaEMsZUFEWCxFQUVuQkEsZUFGbUI7QUFEdkIsT0FNR1MsUUFBUSxpQkFDUCxvREFBQyxtQkFBRDtBQUNFLFVBQUksRUFBRU4sSUFEUjtBQUVFLFVBQUksRUFBRUMsSUFGUjtBQUdFLFVBQUksRUFBRUcsSUFIUjtBQUlFLGtCQUFZLEVBQUVHO0FBSmhCLE1BUEosZUFjRSxvREFBQyx1QkFBRDtBQUNFLGVBQVMsRUFBRXlCLFNBRGI7QUFFRSxXQUFLLEVBQUVELElBQUksQ0FBQ08sS0FGZDtBQUdFLFVBQUksRUFBRXRDLElBSFI7QUFJRSxVQUFJLEVBQUVDLElBSlI7QUFLRSx5QkFBbUIsNEJBQ2pCOEIsSUFBSSxDQUFDbkIsbUJBRFksMkVBQ1dBLG1CQU5oQztBQVFFLCtCQUF5Qiw0QkFDdkJtQixJQUFJLENBQUNoQix5QkFEa0IsMkVBRXZCQSx5QkFWSjtBQVlFLFVBQUksRUFBRVg7QUFaUixNQWRGLENBUEYsQ0FERjtBQXVDRCxHQTVDQSxDQURILENBM0JGLENBWEYsQ0FERjtBQXlGRDs7Y0FsSWVYLGU7Ozs7Ozs7Ozs7OzBCQUhWTCxXOzBCQUNBRSxrQjswQkFFVUcsZSIsImZpbGUiOiJlMzdlZWVmLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJDbGFzc2VzLFxyXG4gIGJvb2tpbmdDYWxlbmRhckRlZmF1bHRDbGFzc2VzLFxyXG59IGZyb20gJy4vY2xhc3Nlcyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyBCb29raW5nQ2FsZW5kYXJEYXRlUmFuZ2UsIEJvb2tpbmdDYWxlbmRhckl0ZW1UIH0gZnJvbSAnLi9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEJvb2tpbmdDYWxlbmRhckNvbnRyb2xzIGFzIERlZmF1bHRCb29raW5nQ2FsZW5kYXJDb250cm9scyxcclxuICBCb29raW5nQ2FsZW5kYXJDb250cm9sc1Byb3BzLFxyXG59IGZyb20gJy4vYm9va2luZ0NhbGVuZGFyQ29udHJvbHMvQm9va2luZ0NhbGVuZGFyQ29udHJvbHMnO1xyXG5pbXBvcnQgeyBMYW5lU291cmNlRGF0YSwgc3BsaXRCb29raW5nc1RvTGFuZXMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJMYW5lIGFzIERlZmF1bHRCb29raW5nQ2FsZW5kYXJMYW5lLFxyXG4gIEJvb2tpbmdDYWxlbmRhckxhbmVQcm9wcyxcclxufSBmcm9tICcuL2Jvb2tpbmdDYWxlbmRhckxhbmUvQm9va2luZ0NhbGVuZGFyTGFuZSc7XHJcbmltcG9ydCB7IE1vbWVudCwgRHVyYXRpb24sIGR1cmF0aW9uIH0gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFySXRlbVByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJJdGVtJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbVByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtJztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJHcmlkIGFzIERlZmF1bHRCb29raW5nQ2FsZW5kYXJHcmlkLFxyXG4gIEJvb2tpbmdDYWxlbmRhckdyaWRQcm9wcyxcclxufSBmcm9tICcuL2Jvb2tpbmdDYWxlbmRhckdyaWQvQm9va2luZ0NhbGVuZGFyR3JpZCc7XHJcbmltcG9ydCB7XHJcbiAgQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlciBhcyBEZWZhdWx0Qm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlcixcclxuICBCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyUHJvcHMsXHJcbn0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyJztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJMYW5lc0hlYWRlciBhcyBEZWZhdWx0Qm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXIsXHJcbiAgQm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXJQcm9wcyxcclxufSBmcm9tICcuL2Jvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyJztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJEYXRlUGlja2VyIGFzIERlZmF1bHRCb29raW5nQ2FsZW5kYXJEYXRlUGlja2VyLFxyXG4gIEJvb2tpbmdDYWxlbmRhckRhdGVQaWNrZXJQcm9wcyxcclxufSBmcm9tICcuL2Jvb2tpbmdDYWxlbmRhckRhdGVQaWNrZXInO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJvb2tpbmdDYWxlbmRhclByb3BzPFxyXG4gIFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVCxcclxuICBUTGFuZURhdGFcclxuPiBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckNsYXNzZXMge1xyXG4gIGJvb2tpbmdzOiBUW107XHJcbiAgZnJvbTogTW9tZW50O1xyXG4gIHRpbGw6IE1vbWVudDtcclxuICBvblJhbmdlQ2hhbmdlPzogKHJhbmdlOiBCb29raW5nQ2FsZW5kYXJEYXRlUmFuZ2UpID0+IHZvaWQ7XHJcbiAgb25FeHRyYUJvb2tpbmdzQ2hhbmdlPzogKGV4dHJhQm9va2luZ3M6IFRbXSkgPT4gdm9pZDtcclxuICBzdGFydE9mU3RlcD86IE1vbWVudDtcclxuICBzdGVwPzogRHVyYXRpb247XHJcbiAgc2hvd0dyaWQ/OiBib29sZWFuO1xyXG4gIGdyaWRTdWJkaXZpc2lvbnM/OiBudW1iZXI7XHJcbiAgbWluTGFuZXNDb3VudD86IG51bWJlcjtcclxuICBsYW5lc1NvdXJjZT86IExhbmVTb3VyY2VEYXRhPFQsIFRMYW5lRGF0YT5bXTtcclxuXHJcbiAgQm9va2luZ0NhbGVuZGFySXRlbT86IFJlYWN0LkNvbXBvbmVudFR5cGU8Qm9va2luZ0NhbGVuZGFySXRlbVByb3BzPFQ+PjtcclxuICBCb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtPzogUmVhY3QuQ29tcG9uZW50VHlwZTxcclxuICAgIEJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW1Qcm9wczxUPlxyXG4gID47XHJcbiAgQm9va2luZ0NhbGVuZGFyTGFuZT86IFJlYWN0LkNvbXBvbmVudFR5cGU8Qm9va2luZ0NhbGVuZGFyTGFuZVByb3BzPFQ+PjtcclxuICBCb29raW5nQ2FsZW5kYXJDb250cm9scz86IFJlYWN0LkNvbXBvbmVudFR5cGU8XHJcbiAgICBCb29raW5nQ2FsZW5kYXJDb250cm9sc1Byb3BzPFQ+XHJcbiAgPjtcclxuICBCb29raW5nQ2FsZW5kYXJHcmlkPzogUmVhY3QuQ29tcG9uZW50VHlwZTxCb29raW5nQ2FsZW5kYXJHcmlkUHJvcHM+O1xyXG4gIEJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXI/OiBSZWFjdC5Db21wb25lbnRUeXBlPFxyXG4gICAgQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlclByb3BzPFRMYW5lRGF0YT5cclxuICA+O1xyXG4gIEJvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyPzogUmVhY3QuQ29tcG9uZW50VHlwZTxcclxuICAgIEJvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyUHJvcHM8VD5cclxuICA+O1xyXG4gIEJvb2tpbmdDYWxlbmRhckRhdGVQaWNrZXI/OiBSZWFjdC5Db21wb25lbnRUeXBlPFxyXG4gICAgQm9va2luZ0NhbGVuZGFyRGF0ZVBpY2tlclByb3BzPFQ+XHJcbiAgPjtcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFN0ZXAgPSBkdXJhdGlvbigxLCAnZGF5Jyk7XHJcbmNvbnN0IGRlZmF1bHRTdGFydE9mU3RlcCA9IG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJvb2tpbmdDYWxlbmRhcjxUIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVQsIFRMYW5lRGF0YT4oXHJcbiAgcHJvcHM6IEJvb2tpbmdDYWxlbmRhclByb3BzPFQsIFRMYW5lRGF0YT5cclxuKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgYm9va2luZ3MsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBsYW5lVGRDbGFzc05hbWUsXHJcbiAgICBjb250cm9sc0NsYXNzZXMsXHJcbiAgICB0YWJsZUNsYXNzTmFtZSxcclxuICAgIGZyb20sXHJcbiAgICB0aWxsLFxyXG4gICAgb25SYW5nZUNoYW5nZSxcclxuICAgIG9uRXh0cmFCb29raW5nc0NoYW5nZSxcclxuICAgIHN0ZXAgPSBkZWZhdWx0U3RlcCxcclxuICAgIHN0YXJ0T2ZTdGVwID0gZGVmYXVsdFN0YXJ0T2ZTdGVwLFxyXG4gICAgc2hvd0dyaWQgPSB0cnVlLFxyXG4gICAgZ3JpZFN1YmRpdmlzaW9ucyA9IDEsXHJcbiAgICBtaW5MYW5lc0NvdW50LFxyXG4gICAgbGFuZXNTb3VyY2UsXHJcbiAgICBCb29raW5nQ2FsZW5kYXJDb250cm9scyA9IERlZmF1bHRCb29raW5nQ2FsZW5kYXJDb250cm9scyxcclxuICAgIEJvb2tpbmdDYWxlbmRhckl0ZW0sXHJcbiAgICBCb29raW5nQ2FsZW5kYXJMYW5lID0gRGVmYXVsdEJvb2tpbmdDYWxlbmRhckxhbmUsXHJcbiAgICBCb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtLFxyXG4gICAgQm9va2luZ0NhbGVuZGFyR3JpZCA9IERlZmF1bHRCb29raW5nQ2FsZW5kYXJHcmlkLFxyXG4gICAgQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlciA9IERlZmF1bHRCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyLFxyXG4gICAgQm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXIgPSBEZWZhdWx0Qm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXIsXHJcbiAgICBCb29raW5nQ2FsZW5kYXJEYXRlUGlja2VyID0gRGVmYXVsdEJvb2tpbmdDYWxlbmRhckRhdGVQaWNrZXIsXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHsgbGFuZXMsIGV4dHJhQm9va2luZ3MgfSA9IFJlYWN0LnVzZU1lbW8oXHJcbiAgICAoKSA9PlxyXG4gICAgICBzcGxpdEJvb2tpbmdzVG9MYW5lczxULCBUTGFuZURhdGE+KFxyXG4gICAgICAgIGJvb2tpbmdzLFxyXG4gICAgICAgIGZyb20sXHJcbiAgICAgICAgbWluTGFuZXNDb3VudCxcclxuICAgICAgICBsYW5lc1NvdXJjZVxyXG4gICAgICApLFxyXG4gICAgW2Jvb2tpbmdzLCBmcm9tLCBtaW5MYW5lc0NvdW50LCBsYW5lc1NvdXJjZV1cclxuICApO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBvbkV4dHJhQm9va2luZ3NDaGFuZ2U/LihleHRyYUJvb2tpbmdzKTtcclxuICB9LCBbZXh0cmFCb29raW5nc10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhib29raW5nQ2FsZW5kYXJEZWZhdWx0Q2xhc3Nlcy5jbGFzc05hbWUsIGNsYXNzTmFtZSl9XHJcbiAgICA+XHJcbiAgICAgIDxCb29raW5nQ2FsZW5kYXJDb250cm9sczxUPlxyXG4gICAgICAgIHsuLi5jb250cm9sc0NsYXNzZXN9XHJcbiAgICAgICAgaXRlbXM9e2Jvb2tpbmdzfVxyXG4gICAgICAgIGZyb209e2Zyb219XHJcbiAgICAgICAgdGlsbD17dGlsbH1cclxuICAgICAgICBvblJhbmdlQ2hhbmdlPXtvblJhbmdlQ2hhbmdlfVxyXG4gICAgICAgIHN0ZXA9e3N0ZXB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDx0YWJsZVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgIGJvb2tpbmdDYWxlbmRhckRlZmF1bHRDbGFzc2VzLnRhYmxlQ2xhc3NOYW1lLFxyXG4gICAgICAgICAgdGFibGVDbGFzc05hbWVcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgPEJvb2tpbmdDYWxlbmRhckRhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgIGZyb209e2Zyb219XHJcbiAgICAgICAgICAgICAgICB0aWxsPXt0aWxsfVxyXG4gICAgICAgICAgICAgICAgb25SYW5nZUNoYW5nZT17b25SYW5nZUNoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgPEJvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyPFQ+XHJcbiAgICAgICAgICAgICAgICB7Li4uY29udHJvbHNDbGFzc2VzfVxyXG4gICAgICAgICAgICAgICAgZnJvbT17ZnJvbX1cclxuICAgICAgICAgICAgICAgIHRpbGw9e3RpbGx9XHJcbiAgICAgICAgICAgICAgICBvblJhbmdlQ2hhbmdlPXtvblJhbmdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgc3RlcD17c3RlcH1cclxuICAgICAgICAgICAgICAgIHN0YXJ0T2ZTdGVwPXtzdGFydE9mU3RlcH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtsYW5lcy5tYXAoKGxhbmUsIGxhbmVJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBMYW5lQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlciA9XHJcbiAgICAgICAgICAgICAgbGFuZS5Cb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyID8/IEJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXI7XHJcbiAgICAgICAgICAgIGNvbnN0IExhbmVCb29raW5nQ2FsZW5kYXJMYW5lID1cclxuICAgICAgICAgICAgICBsYW5lLkJvb2tpbmdDYWxlbmRhckxhbmUgPz8gQm9va2luZ0NhbGVuZGFyTGFuZTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8dHIga2V5PXtsYW5lSW5kZXh9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhsYW5lLnJvd0NsYXNzTmFtZSl9PlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICA8TGFuZUJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXI8VExhbmVEYXRhPlxyXG4gICAgICAgICAgICAgICAgICAgIGxhbmVLZXk9e2xhbmUubGFuZUtleSA/PyBsYW5lSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17bGFuZS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgYm9va2luZ0NhbGVuZGFyRGVmYXVsdENsYXNzZXMubGFuZVRkQ2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhbmVUZENsYXNzTmFtZVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7c2hvd0dyaWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb29raW5nQ2FsZW5kYXJHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICBmcm9tPXtmcm9tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGlsbD17dGlsbH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWJkaXZpc2lvbnM9e2dyaWRTdWJkaXZpc2lvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPExhbmVCb29raW5nQ2FsZW5kYXJMYW5lXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZUluZGV4PXtsYW5lSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e2xhbmUuaXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbT17ZnJvbX1cclxuICAgICAgICAgICAgICAgICAgICB0aWxsPXt0aWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIEJvb2tpbmdDYWxlbmRhckl0ZW09e1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFuZS5Cb29raW5nQ2FsZW5kYXJJdGVtID8/IEJvb2tpbmdDYWxlbmRhckl0ZW1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbT17XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYW5lLkJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW0gPz9cclxuICAgICAgICAgICAgICAgICAgICAgIEJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD17c3RlcH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=