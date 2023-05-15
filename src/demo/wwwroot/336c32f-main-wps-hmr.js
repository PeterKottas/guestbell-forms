"use strict";
self["webpackHotUpdateguestbell_forms"]("main",{

/***/ "./src/lib/components/bookingCalendar/BookingCalendar.tsx":
/*!****************************************************************!*\
  !*** ./src/lib/components/bookingCalendar/BookingCalendar.tsx ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingCalendar": () => (/* binding */ BookingCalendar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/lib/components/bookingCalendar/classes.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./src/lib/components/bookingCalendar/common.ts");
/* harmony import */ var _bookingCalendarControls_BookingCalendarControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookingCalendarControls/BookingCalendarControls */ "./src/lib/components/bookingCalendar/bookingCalendarControls/BookingCalendarControls.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/lib/components/bookingCalendar/utils.ts");
/* harmony import */ var _bookingCalendarLane_BookingCalendarLane__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookingCalendarLane/BookingCalendarLane */ "./src/lib/components/bookingCalendar/bookingCalendarLane/BookingCalendarLane.tsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _bookingCalendarGrid_BookingCalendarGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bookingCalendarGrid/BookingCalendarGrid */ "./src/lib/components/bookingCalendar/bookingCalendarGrid/BookingCalendarGrid.tsx");
/* harmony import */ var _bookingCalendarLaneHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bookingCalendarLaneHeader */ "./src/lib/components/bookingCalendar/bookingCalendarLaneHeader/index.ts");
/* harmony import */ var _bookingCalendarLanesHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bookingCalendarLanesHeader */ "./src/lib/components/bookingCalendar/bookingCalendarLanesHeader/index.ts");
/* harmony import */ var _bookingCalendarDatePicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bookingCalendarDatePicker */ "./src/lib/components/bookingCalendar/bookingCalendarDatePicker/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! . */ "./src/lib/components/bookingCalendar/index.ts");
/* harmony import */ var _bookingCalendarTimeAxis_BookingCalendarTimeAxis__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bookingCalendarTimeAxis/BookingCalendarTimeAxis */ "./src/lib/components/bookingCalendar/bookingCalendarTimeAxis/BookingCalendarTimeAxis.tsx");
/* harmony import */ var react_cool_dimensions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-cool-dimensions */ "./node_modules/react-cool-dimensions/dist/index.esm.js");
/* harmony import */ var _bookingCalendarSelection_BookingCalendarSelection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bookingCalendarSelection/BookingCalendarSelection */ "./src/lib/components/bookingCalendar/bookingCalendarSelection/BookingCalendarSelection.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
















var defaultStep = (0,moment__WEBPACK_IMPORTED_MODULE_7__.duration)(1, 'day');
function BookingCalendar(props) {
  var _entry$target$scrollW, _entry$target;
  var bookings = props.bookings,
    className = props.className,
    laneContainerClassName = props.laneContainerClassName,
    laneHeaderContainerClassName = props.laneHeaderContainerClassName,
    lanesHeaderContainerClassName = props.lanesHeaderContainerClassName,
    lanesHeaderHeaderContainerClassName = props.lanesHeaderHeaderContainerClassName,
    controlsClasses = props.controlsClasses,
    tableClassName = props.tableClassName,
    from = props.from,
    till = props.till,
    onRangeChange = props.onRangeChange,
    _props$step = props.step,
    step = _props$step === void 0 ? defaultStep : _props$step,
    _props$showGrid = props.showGrid,
    showGrid = _props$showGrid === void 0 ? true : _props$showGrid,
    _props$showSelection = props.showSelection,
    showSelection = _props$showSelection === void 0 ? true : _props$showSelection,
    _props$gridAvailableS = props.gridAvailableSteps,
    gridAvailableSteps = _props$gridAvailableS === void 0 ? ___WEBPACK_IMPORTED_MODULE_12__.defaultGridAvailableSteps : _props$gridAvailableS,
    _props$getMomentForma = props.getMomentFormatFunction,
    getMomentFormatFunction = _props$getMomentForma === void 0 ? _common__WEBPACK_IMPORTED_MODULE_3__.defaultGetMomentFormatFunction : _props$getMomentForma,
    _props$getNewMomentFu = props.getNewMomentFunction,
    getNewMomentFunction = _props$getNewMomentFu === void 0 ? ___WEBPACK_IMPORTED_MODULE_12__.defaultGetNewMomentFunction : _props$getNewMomentFu,
    _props$goalGridWidthP = props.goalGridWidthPx,
    goalGridWidthPx = _props$goalGridWidthP === void 0 ? 60 : _props$goalGridWidthP,
    _props$minSelectionSi = props.minSelectionSize,
    minSelectionSize = _props$minSelectionSi === void 0 ? 10 : _props$minSelectionSi,
    minLanesCount = props.minLanesCount,
    lanesSource = props.lanesSource,
    filterBookingsToZoom = props.filterBookingsToZoom,
    zoomLevels = props.zoomLevels,
    _props$BookingCalenda = props.BookingCalendarControls,
    BookingCalendarControls = _props$BookingCalenda === void 0 ? _bookingCalendarControls_BookingCalendarControls__WEBPACK_IMPORTED_MODULE_4__.BookingCalendarControls : _props$BookingCalenda,
    BookingCalendarItem = props.BookingCalendarItem,
    _props$BookingCalenda2 = props.BookingCalendarLane,
    BookingCalendarLane = _props$BookingCalenda2 === void 0 ? _bookingCalendarLane_BookingCalendarLane__WEBPACK_IMPORTED_MODULE_6__.BookingCalendarLane : _props$BookingCalenda2,
    BookingCalendarRenderItem = props.BookingCalendarRenderItem,
    _props$BookingCalenda3 = props.BookingCalendarGrid,
    BookingCalendarGrid = _props$BookingCalenda3 === void 0 ? _bookingCalendarGrid_BookingCalendarGrid__WEBPACK_IMPORTED_MODULE_8__.BookingCalendarGrid : _props$BookingCalenda3,
    _props$BookingCalenda4 = props.BookingCalendarLaneHeader,
    BookingCalendarLaneHeader = _props$BookingCalenda4 === void 0 ? _bookingCalendarLaneHeader__WEBPACK_IMPORTED_MODULE_9__.BookingCalendarLaneHeader : _props$BookingCalenda4,
    _props$BookingCalenda5 = props.BookingCalendarLanesHeader,
    BookingCalendarLanesHeader = _props$BookingCalenda5 === void 0 ? _bookingCalendarLanesHeader__WEBPACK_IMPORTED_MODULE_10__.BookingCalendarLanesHeader : _props$BookingCalenda5,
    _props$BookingCalenda6 = props.BookingCalendarDatePicker,
    BookingCalendarDatePicker = _props$BookingCalenda6 === void 0 ? _bookingCalendarDatePicker__WEBPACK_IMPORTED_MODULE_11__.BookingCalendarDatePicker : _props$BookingCalenda6,
    bookingCalendarTopLeftHeader = props.bookingCalendarTopLeftHeader,
    children = props.children;
  var lanes = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.splitBookingsToLanes)(bookings, from, minLanesCount, lanesSource);
  }, [bookings, from, minLanesCount, lanesSource]);
  var _useDimensions = (0,react_cool_dimensions__WEBPACK_IMPORTED_MODULE_14__["default"])(),
    observe = _useDimensions.observe,
    entry = _useDimensions.entry;
  var width = (_entry$target$scrollW = entry === null || entry === void 0 ? void 0 : (_entry$target = entry.target) === null || _entry$target === void 0 ? void 0 : _entry$target.scrollWidth) !== null && _entry$target$scrollW !== void 0 ? _entry$target$scrollW : 0;
  var _React$useMemo = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
      var _from$clone;
      return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.generateGridItems)(from, till, step, width, gridAvailableSteps, goalGridWidthPx, from === null || from === void 0 ? void 0 : (_from$clone = from.clone()) === null || _from$clone === void 0 ? void 0 : _from$clone.startOf('day'));
    }, [from, till, step, width, gridAvailableSteps, goalGridWidthPx]),
    gridItems = _React$useMemo.items,
    bestStep = _React$useMemo.bestStep;
  var onSelected = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (data) {
    if (!from || !till || !width || !onRangeChange) {
      return;
    }
    var screenSpaceStartX = Math.min(data.origin[0], data.target[0]);
    var screenSpaceEndX = Math.max(data.origin[0], data.target[0]);
    var durationMs = till.valueOf() - from.valueOf();
    var toTimeSpace = function toTimeSpace(num) {
      return num / (width || 1) * durationMs;
    };
    var timeSpaceStart = from.clone().add(toTimeSpace(screenSpaceStartX), 'ms');
    var timeSpaceEnd = from.clone().add(toTimeSpace(screenSpaceEndX), 'ms');
    onRangeChange({
      from: timeSpaceStart,
      till: timeSpaceEnd
    });
  }, [from, till, width, onRangeChange]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_classes__WEBPACK_IMPORTED_MODULE_1__.bookingCalendarDefaultClasses.className, className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BookingCalendarControls, _extends({}, controlsClasses, {
    items: bookings,
    from: from,
    till: till,
    onRangeChange: onRangeChange,
    step: step,
    filterBookingsToZoom: filterBookingsToZoom,
    zoomLevels: zoomLevels,
    bookingCalendarDatePicker: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, typeof BookingCalendarDatePicker === 'function' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BookingCalendarDatePicker, {
      from: from,
      till: till,
      onRangeChange: onRangeChange,
      getNewMomentFunction: getNewMomentFunction
    }) : BookingCalendarDatePicker, from.format('MMMM'), ", ", from.format('YYYY'))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_classes__WEBPACK_IMPORTED_MODULE_1__.bookingCalendarDefaultClasses.tableClassName, tableClassName)
  }, showGrid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BookingCalendarGrid, {
    items: gridItems,
    dataRowsCount: lanes.length,
    width: width
  }), showSelection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_bookingCalendarSelection_BookingCalendarSelection__WEBPACK_IMPORTED_MODULE_15__["default"], {
    dataRowsCount: lanes.length,
    onSelected: onSelected,
    minSelectionSize: minSelectionSize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_classes__WEBPACK_IMPORTED_MODULE_1__.bookingCalendarDefaultClasses.lanesHeaderHeaderContainerClassName, lanesHeaderHeaderContainerClassName)
  }, bookingCalendarTopLeftHeader), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_classes__WEBPACK_IMPORTED_MODULE_1__.bookingCalendarDefaultClasses.lanesHeaderContainerClassName, lanesHeaderContainerClassName),
    ref: observe
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BookingCalendarLanesHeader, _extends({}, controlsClasses, {
    from: from,
    till: till,
    onRangeChange: onRangeChange,
    step: step
  }))), lanes.map(function (lane, laneIndex) {
    var _lane$BookingCalendar, _lane$BookingCalendar2, _classNames, _lane$laneKey, _classNames2, _lane$BookingCalendar3, _lane$BookingCalendar4;
    var LaneBookingCalendarLaneHeader = (_lane$BookingCalendar = lane.BookingCalendarLaneHeader) !== null && _lane$BookingCalendar !== void 0 ? _lane$BookingCalendar : BookingCalendarLaneHeader;
    var LaneBookingCalendarLane = (_lane$BookingCalendar2 = lane.BookingCalendarLane) !== null && _lane$BookingCalendar2 !== void 0 ? _lane$BookingCalendar2 : BookingCalendarLane;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: laneIndex
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_classes__WEBPACK_IMPORTED_MODULE_1__.bookingCalendarDefaultClasses.laneHeaderContainerClassName, laneHeaderContainerClassName, lane.rowClassName, (_classNames = {}, _defineProperty(_classNames, "".concat(_classes__WEBPACK_IMPORTED_MODULE_1__.bookingCalendarDefaultClasses.laneHeaderContainerClassName, "--last"), laneIndex === lanes.length - 1), _defineProperty(_classNames, "".concat(_classes__WEBPACK_IMPORTED_MODULE_1__.bookingCalendarDefaultClasses.laneHeaderContainerClassName, "--first"), laneIndex === 0), _classNames))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LaneBookingCalendarLaneHeader, {
      laneKey: (_lane$laneKey = lane.laneKey) !== null && _lane$laneKey !== void 0 ? _lane$laneKey : laneIndex,
      data: lane.data
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_classes__WEBPACK_IMPORTED_MODULE_1__.bookingCalendarDefaultClasses.laneContainerClassName, laneContainerClassName, lane.rowClassName, (_classNames2 = {}, _defineProperty(_classNames2, "".concat(_classes__WEBPACK_IMPORTED_MODULE_1__.bookingCalendarDefaultClasses.laneContainerClassName, "--last"), laneIndex === lanes.length - 1), _defineProperty(_classNames2, "".concat(_classes__WEBPACK_IMPORTED_MODULE_1__.bookingCalendarDefaultClasses.laneContainerClassName, "--first"), laneIndex === 0), _classNames2))
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LaneBookingCalendarLane, {
      laneIndex: laneIndex,
      items: lane.items,
      from: from,
      till: till,
      BookingCalendarItem: (_lane$BookingCalendar3 = lane.BookingCalendarItem) !== null && _lane$BookingCalendar3 !== void 0 ? _lane$BookingCalendar3 : BookingCalendarItem,
      BookingCalendarRenderItem: (_lane$BookingCalendar4 = lane.BookingCalendarRenderItem) !== null && _lane$BookingCalendar4 !== void 0 ? _lane$BookingCalendar4 : BookingCalendarRenderItem,
      step: step
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_bookingCalendarTimeAxis_BookingCalendarTimeAxis__WEBPACK_IMPORTED_MODULE_13__.BookingCalendarTimeAxis, {
    items: gridItems,
    bestStep: bestStep,
    getMomentFormatFunction: getMomentFormatFunction
  }))), children);
}
__signature__(BookingCalendar, "useMemo{lanes}\nuseDimensions{{ observe, entry }}\nuseMemo{{ items: gridItems, bestStep }}\nuseCallback{onSelected}", function () {
  return [react_cool_dimensions__WEBPACK_IMPORTED_MODULE_14__["default"]];
});
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(defaultStep, "defaultStep", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\bookingCalendar\\BookingCalendar.tsx");
  reactHotLoader.register(BookingCalendar, "BookingCalendar", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\bookingCalendar\\BookingCalendar.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ }),

/***/ "./src/lib/components/bookingCalendar/bookingCalendarControls/BookingCalendarControls.tsx":
/*!************************************************************************************************!*\
  !*** ./src/lib/components/bookingCalendar/bookingCalendarControls/BookingCalendarControls.tsx ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingCalendarControls": () => (/* binding */ BookingCalendarControls)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
    } : _props$filterBookings,
    bookingCalendarDatePicker = props.bookingCalendarDatePicker;
  if (!step || !from || !till) {
    return null;
  }
  var onStepFactory = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (_step) {
    return function () {
      return onRangeChange({
        from: from.clone().add(_step),
        till: till.clone().add(_step)
      });
    };
  }, [from, till, onRangeChange]);
  var onBigStepLeftClick = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(onStepFactory((0,moment__WEBPACK_IMPORTED_MODULE_2__.duration)(-7, 'days')), [onStepFactory, till, from]);
  var onSmallStepLeftClick = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(onStepFactory((0,moment__WEBPACK_IMPORTED_MODULE_2__.duration)(-1, 'day')), [onStepFactory, step]);
  var onBigStepRightClick = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(onStepFactory((0,moment__WEBPACK_IMPORTED_MODULE_2__.duration)(7, 'days')), [onStepFactory, till, from]);
  var onSmallStepRightClick = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(onStepFactory((0,moment__WEBPACK_IMPORTED_MODULE_2__.duration)(1, 'day')), [onStepFactory, step]);
  var filteredItems = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(function () {
    return items === null || items === void 0 ? void 0 : items.filter(filterBookingsToZoom);
  }, [filterBookingsToZoom, items]);
  var onZoomBookingsClick = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function () {
    var _Math$min, _Math$max;
    var minFromMs = (_Math$min = Math.min.apply(Math, _toConsumableArray(filteredItems === null || filteredItems === void 0 ? void 0 : filteredItems.filter(filterBookingsToZoom).map(function (a) {
      return a.from.valueOf();
    })))) !== null && _Math$min !== void 0 ? _Math$min : from === null || from === void 0 ? void 0 : from.valueOf();
    var minFrom = from.clone().subtract(from.valueOf() - minFromMs, 'ms');
    var maxTillMs = (_Math$max = Math.max.apply(Math, _toConsumableArray(filteredItems === null || filteredItems === void 0 ? void 0 : filteredItems.filter(filterBookingsToZoom).map(function (a) {
      return a.till.valueOf();
    })))) !== null && _Math$max !== void 0 ? _Math$max : till === null || till === void 0 ? void 0 : till.valueOf();
    var maxTill = till.clone().subtract(till.valueOf() - maxTillMs, 'ms');
    onRangeChange({
      from: minFrom,
      till: maxTill
    });
  }, [from, till, filteredItems]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_3__.bookingCalendarControlsDefaultClasses.className, className)
  }, bookingCalendarDatePicker && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_3__.bookingCalendarControlsDefaultClasses.monthLabelClassName, monthLabelClassName)
  }, bookingCalendarDatePicker), (zoomLevels === null || zoomLevels === void 0 ? void 0 : zoomLevels.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_3__.bookingCalendarControlsDefaultClasses.zoomLevelsContainerClassName, zoomLevelsContainerClassName)
  }, zoomLevels.map(function (level, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
      type: till.valueOf() - from.valueOf() === level.step.asMilliseconds() ? 'primary' : undefined
      // blank={true}
      ,
      noShadow: true,
      key: index,
      onClick: function onClick() {
        return onRangeChange({
          from: from.clone().startOf('day'),
          till: from.clone().startOf('day').add(level.step)
        });
      }
    }, level.label);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_3__.bookingCalendarControlsDefaultClasses.buttonsContainerClassName, buttonsContainerClassName)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
    noShadow: true,
    onClick: onBigStepLeftClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(material_design_icons_navigation_svg_production_ic_arrow_back_24px_svg__WEBPACK_IMPORTED_MODULE_5__, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
    noShadow: true,
    onClick: onSmallStepLeftClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(material_design_icons_hardware_svg_production_ic_keyboard_arrow_left_24px_svg__WEBPACK_IMPORTED_MODULE_6__, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
    noShadow: true,
    onClick: onSmallStepRightClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(material_design_icons_hardware_svg_production_ic_keyboard_arrow_right_24px_svg__WEBPACK_IMPORTED_MODULE_8__, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
    noShadow: true,
    onClick: onBigStepRightClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(material_design_icons_navigation_svg_production_ic_arrow_forward_24px_svg__WEBPACK_IMPORTED_MODULE_7__, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(___WEBPACK_IMPORTED_MODULE_3__.bookingCalendarControlsDefaultClasses.zoomBookingsButtonClassName, zoomBookingsButtonClassName),
    noShadow: true,
    disabled: !(filteredItems !== null && filteredItems !== void 0 && filteredItems.length),
    onClick: onZoomBookingsClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(material_design_icons_navigation_svg_production_ic_unfold_less_24px_svg__WEBPACK_IMPORTED_MODULE_9__, null))));
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1aa0e2c34c2fd533c529")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9CLGdCQUNuRHRKLGdEQUFBLENBQUMwSSxzR0FBa0IsTUFBRSxDQUNmLENBQUMsZUFDVDFJLGdEQUFBLENBQUN1SSxrREFBTTtJQUNMekcsU0FBUyxFQUFFNUIsaURBQVUsQ0FDbkJvSSxnR0FBaUUsRUFDakVTLDJCQUNGLENBQUU7SUFDRjBCLFFBQVEsRUFBRSxJQUFLO0lBQ2ZHLFFBQVEsRUFBRSxFQUFDcEIsYUFBYSxhQUFiQSxhQUFhLGVBQWJBLGFBQWEsQ0FBRTdDLE1BQU0sQ0FBQztJQUNqQytELE9BQU8sRUFBRWhCO0VBQW9CLGdCQUU3QjFKLGdEQUFBLENBQUM0SSxvR0FBYyxNQUFFLENBQ1gsQ0FDTCxDQUNGLENBQUM7QUFFVjtBQUFDZCxhQUFBLENBbkplMUgsdUJBQXVCO0FBQUE7QUFBQTtFQUFBLElBQUEySCxjQUFBLFVBQUFDLG9CQUFBLG1CQUFBQSxvQkFBQSxDQUFBQyxPQUFBLEdBQUFDLFNBQUE7RUFBQSxLQUFBSCxjQUFBO0lBQUE7RUFBQTtFQUFBQSxjQUFBLENBQUFJLFFBQUEsQ0FBdkIvSCx1QkFBdUI7QUFBQTtBQUFBO0FBQUE7RUFBQSxJQUFBZ0ksV0FBQSxVQUFBSixvQkFBQSxtQkFBQUEsb0JBQUEsQ0FBQUksV0FBQSxHQUFBRixTQUFBO0VBQUFFLFdBQUEsSUFBQUEsV0FBQSxDQUFBQyxNQUFBO0FBQUE7Ozs7Ozs7O1VDN0J2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2d1ZXN0YmVsbC1mb3Jtcy8uL3NyYy9saWIvY29tcG9uZW50cy9ib29raW5nQ2FsZW5kYXIvQm9va2luZ0NhbGVuZGFyLnRzeCIsIndlYnBhY2s6Ly9ndWVzdGJlbGwtZm9ybXMvLi9zcmMvbGliL2NvbXBvbmVudHMvYm9va2luZ0NhbGVuZGFyL2Jvb2tpbmdDYWxlbmRhckNvbnRyb2xzL0Jvb2tpbmdDYWxlbmRhckNvbnRyb2xzLnRzeCIsIndlYnBhY2s6Ly9ndWVzdGJlbGwtZm9ybXMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJDbGFzc2VzLFxyXG4gIGJvb2tpbmdDYWxlbmRhckRlZmF1bHRDbGFzc2VzLFxyXG59IGZyb20gJy4vY2xhc3Nlcyc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQge1xyXG4gIEJvb2tpbmdDYWxlbmRhckRhdGVSYW5nZSxcclxuICBCb29raW5nQ2FsZW5kYXJJdGVtVCxcclxuICBkZWZhdWx0R2V0TW9tZW50Rm9ybWF0RnVuY3Rpb24sXHJcbiAgR2V0TmV3TW9tZW50RnVuY3Rpb25UeXBlLFxyXG59IGZyb20gJy4vY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJDb250cm9scyBhcyBEZWZhdWx0Qm9va2luZ0NhbGVuZGFyQ29udHJvbHMsXHJcbiAgQm9va2luZ0NhbGVuZGFyQ29udHJvbHNQcm9wcyxcclxufSBmcm9tICcuL2Jvb2tpbmdDYWxlbmRhckNvbnRyb2xzL0Jvb2tpbmdDYWxlbmRhckNvbnRyb2xzJztcclxuaW1wb3J0IHtcclxuICBnZW5lcmF0ZUdyaWRJdGVtcyxcclxuICBMYW5lU291cmNlRGF0YSxcclxuICBzcGxpdEJvb2tpbmdzVG9MYW5lcyxcclxufSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJMYW5lIGFzIERlZmF1bHRCb29raW5nQ2FsZW5kYXJMYW5lLFxyXG4gIEJvb2tpbmdDYWxlbmRhckxhbmVQcm9wcyxcclxufSBmcm9tICcuL2Jvb2tpbmdDYWxlbmRhckxhbmUvQm9va2luZ0NhbGVuZGFyTGFuZSc7XHJcbmltcG9ydCB7IE1vbWVudCwgRHVyYXRpb24sIGR1cmF0aW9uIH0gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFySXRlbVByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJJdGVtJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbVByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtJztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJHcmlkIGFzIERlZmF1bHRCb29raW5nQ2FsZW5kYXJHcmlkLFxyXG4gIEJvb2tpbmdDYWxlbmRhckdyaWRQcm9wcyxcclxufSBmcm9tICcuL2Jvb2tpbmdDYWxlbmRhckdyaWQvQm9va2luZ0NhbGVuZGFyR3JpZCc7XHJcbmltcG9ydCB7XHJcbiAgQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlciBhcyBEZWZhdWx0Qm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlcixcclxuICBCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyUHJvcHMsXHJcbn0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyJztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJMYW5lc0hlYWRlciBhcyBEZWZhdWx0Qm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXIsXHJcbiAgQm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXJQcm9wcyxcclxufSBmcm9tICcuL2Jvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyJztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJEYXRlUGlja2VyIGFzIERlZmF1bHRCb29raW5nQ2FsZW5kYXJEYXRlUGlja2VyLFxyXG4gIEJvb2tpbmdDYWxlbmRhckRhdGVQaWNrZXJQcm9wcyxcclxufSBmcm9tICcuL2Jvb2tpbmdDYWxlbmRhckRhdGVQaWNrZXInO1xyXG5pbXBvcnQge1xyXG4gIGRlZmF1bHRHZXROZXdNb21lbnRGdW5jdGlvbixcclxuICBkZWZhdWx0R3JpZEF2YWlsYWJsZVN0ZXBzLFxyXG4gIEdldE1vbWVudEZvcm1hdEZ1bmN0aW9uVHlwZSxcclxuICBab29tTGV2ZWwsXHJcbn0gZnJvbSAnLic7XHJcbmltcG9ydCB7IEJvb2tpbmdDYWxlbmRhclRpbWVBeGlzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJUaW1lQXhpcy9Cb29raW5nQ2FsZW5kYXJUaW1lQXhpcyc7XHJcbmltcG9ydCB1c2VEaW1lbnNpb25zIGZyb20gJ3JlYWN0LWNvb2wtZGltZW5zaW9ucyc7XHJcbmltcG9ydCBCb29raW5nQ2FsZW5kYXJTZWxlY3Rpb24sIHtcclxuICBCb29raW5nQ2FsZW5kYXJTZWxlY3Rpb25EYXRhLFxyXG59IGZyb20gJy4vYm9va2luZ0NhbGVuZGFyU2VsZWN0aW9uL0Jvb2tpbmdDYWxlbmRhclNlbGVjdGlvbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJvb2tpbmdDYWxlbmRhclByb3BzPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVCwgVExhbmVEYXRhPlxyXG4gIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFyQ2xhc3NlcyB7XHJcbiAgYm9va2luZ3M6IFRbXTtcclxuICBmcm9tOiBNb21lbnQ7XHJcbiAgdGlsbDogTW9tZW50O1xyXG4gIGdldE1vbWVudEZvcm1hdEZ1bmN0aW9uPzogR2V0TW9tZW50Rm9ybWF0RnVuY3Rpb25UeXBlO1xyXG4gIGdldE5ld01vbWVudEZ1bmN0aW9uPzogR2V0TmV3TW9tZW50RnVuY3Rpb25UeXBlO1xyXG4gIG9uUmFuZ2VDaGFuZ2U/OiAocmFuZ2U6IEJvb2tpbmdDYWxlbmRhckRhdGVSYW5nZSkgPT4gdm9pZDtcclxuICBzdGVwPzogRHVyYXRpb247XHJcbiAgc2hvd0dyaWQ/OiBib29sZWFuO1xyXG4gIHNob3dTZWxlY3Rpb24/OiBib29sZWFuO1xyXG4gIG1pblNlbGVjdGlvblNpemU/OiBudW1iZXI7XHJcbiAgZ3JpZEF2YWlsYWJsZVN0ZXBzPzogRHVyYXRpb25bXTtcclxuICBnb2FsR3JpZFdpZHRoUHg/OiBudW1iZXI7XHJcbiAgbWluTGFuZXNDb3VudD86IG51bWJlcjtcclxuICBsYW5lc1NvdXJjZT86IExhbmVTb3VyY2VEYXRhPFQsIFRMYW5lRGF0YT5bXTtcclxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBib29raW5nQ2FsZW5kYXJUb3BMZWZ0SGVhZGVyPzogUmVhY3QuUmVhY3ROb2RlO1xyXG5cclxuICB6b29tTGV2ZWxzPzogWm9vbUxldmVsW107XHJcbiAgZmlsdGVyQm9va2luZ3NUb1pvb20/OiAoYm9va2luZzogVCkgPT4gYm9vbGVhbjtcclxuXHJcbiAgQm9va2luZ0NhbGVuZGFySXRlbT86IFJlYWN0LkNvbXBvbmVudFR5cGU8Qm9va2luZ0NhbGVuZGFySXRlbVByb3BzPFQ+PjtcclxuICBCb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtPzogUmVhY3QuQ29tcG9uZW50VHlwZTxcclxuICAgIEJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW1Qcm9wczxUPlxyXG4gID47XHJcbiAgQm9va2luZ0NhbGVuZGFyTGFuZT86IFJlYWN0LkNvbXBvbmVudFR5cGU8Qm9va2luZ0NhbGVuZGFyTGFuZVByb3BzPFQ+PjtcclxuICBCb29raW5nQ2FsZW5kYXJDb250cm9scz86IFJlYWN0LkNvbXBvbmVudFR5cGU8XHJcbiAgICBCb29raW5nQ2FsZW5kYXJDb250cm9sc1Byb3BzPFQ+XHJcbiAgPjtcclxuICBCb29raW5nQ2FsZW5kYXJHcmlkPzogUmVhY3QuQ29tcG9uZW50VHlwZTxCb29raW5nQ2FsZW5kYXJHcmlkUHJvcHM+O1xyXG4gIEJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXI/OiBSZWFjdC5Db21wb25lbnRUeXBlPFxyXG4gICAgQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlclByb3BzPFRMYW5lRGF0YT5cclxuICA+O1xyXG4gIEJvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyPzogUmVhY3QuQ29tcG9uZW50VHlwZTxcclxuICAgIEJvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyUHJvcHM8VD5cclxuICA+O1xyXG4gIEJvb2tpbmdDYWxlbmRhckRhdGVQaWNrZXI/OlxyXG4gICAgfCBSZWFjdC5Db21wb25lbnRUeXBlPEJvb2tpbmdDYWxlbmRhckRhdGVQaWNrZXJQcm9wczxUPj5cclxuICAgIHwgUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0U3RlcCA9IGR1cmF0aW9uKDEsICdkYXknKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCb29raW5nQ2FsZW5kYXI8VCBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckl0ZW1ULCBUTGFuZURhdGE+KFxyXG4gIHByb3BzOiBCb29raW5nQ2FsZW5kYXJQcm9wczxULCBUTGFuZURhdGE+XHJcbikge1xyXG4gIGNvbnN0IHtcclxuICAgIGJvb2tpbmdzLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgbGFuZUNvbnRhaW5lckNsYXNzTmFtZSxcclxuICAgIGxhbmVIZWFkZXJDb250YWluZXJDbGFzc05hbWUsXHJcbiAgICBsYW5lc0hlYWRlckNvbnRhaW5lckNsYXNzTmFtZSxcclxuICAgIGxhbmVzSGVhZGVySGVhZGVyQ29udGFpbmVyQ2xhc3NOYW1lLFxyXG4gICAgY29udHJvbHNDbGFzc2VzLFxyXG4gICAgdGFibGVDbGFzc05hbWUsXHJcbiAgICBmcm9tLFxyXG4gICAgdGlsbCxcclxuICAgIG9uUmFuZ2VDaGFuZ2UsXHJcbiAgICBzdGVwID0gZGVmYXVsdFN0ZXAsXHJcbiAgICBzaG93R3JpZCA9IHRydWUsXHJcbiAgICBzaG93U2VsZWN0aW9uID0gdHJ1ZSxcclxuICAgIGdyaWRBdmFpbGFibGVTdGVwcyA9IGRlZmF1bHRHcmlkQXZhaWxhYmxlU3RlcHMsXHJcbiAgICBnZXRNb21lbnRGb3JtYXRGdW5jdGlvbiA9IGRlZmF1bHRHZXRNb21lbnRGb3JtYXRGdW5jdGlvbixcclxuICAgIGdldE5ld01vbWVudEZ1bmN0aW9uID0gZGVmYXVsdEdldE5ld01vbWVudEZ1bmN0aW9uLFxyXG4gICAgZ29hbEdyaWRXaWR0aFB4ID0gNjAsXHJcbiAgICBtaW5TZWxlY3Rpb25TaXplID0gMTAsXHJcbiAgICBtaW5MYW5lc0NvdW50LFxyXG4gICAgbGFuZXNTb3VyY2UsXHJcbiAgICBmaWx0ZXJCb29raW5nc1RvWm9vbSxcclxuICAgIHpvb21MZXZlbHMsXHJcbiAgICBCb29raW5nQ2FsZW5kYXJDb250cm9scyA9IERlZmF1bHRCb29raW5nQ2FsZW5kYXJDb250cm9scyxcclxuICAgIEJvb2tpbmdDYWxlbmRhckl0ZW0sXHJcbiAgICBCb29raW5nQ2FsZW5kYXJMYW5lID0gRGVmYXVsdEJvb2tpbmdDYWxlbmRhckxhbmUsXHJcbiAgICBCb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtLFxyXG4gICAgQm9va2luZ0NhbGVuZGFyR3JpZCA9IERlZmF1bHRCb29raW5nQ2FsZW5kYXJHcmlkLFxyXG4gICAgQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlciA9IERlZmF1bHRCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyLFxyXG4gICAgQm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXIgPSBEZWZhdWx0Qm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXIsXHJcbiAgICBCb29raW5nQ2FsZW5kYXJEYXRlUGlja2VyID0gRGVmYXVsdEJvb2tpbmdDYWxlbmRhckRhdGVQaWNrZXIsXHJcbiAgICBib29raW5nQ2FsZW5kYXJUb3BMZWZ0SGVhZGVyLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGxhbmVzID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+XHJcbiAgICAgIHNwbGl0Qm9va2luZ3NUb0xhbmVzPFQsIFRMYW5lRGF0YT4oXHJcbiAgICAgICAgYm9va2luZ3MsXHJcbiAgICAgICAgZnJvbSxcclxuICAgICAgICBtaW5MYW5lc0NvdW50LFxyXG4gICAgICAgIGxhbmVzU291cmNlXHJcbiAgICAgICksXHJcbiAgICBbYm9va2luZ3MsIGZyb20sIG1pbkxhbmVzQ291bnQsIGxhbmVzU291cmNlXVxyXG4gICk7XHJcbiAgY29uc3QgeyBvYnNlcnZlLCBlbnRyeSB9ID0gdXNlRGltZW5zaW9uczxIVE1MRGl2RWxlbWVudD4oKTtcclxuICBjb25zdCB3aWR0aCA9IGVudHJ5Py50YXJnZXQ/LnNjcm9sbFdpZHRoID8/IDA7XHJcbiAgY29uc3QgeyBpdGVtczogZ3JpZEl0ZW1zLCBiZXN0U3RlcCB9ID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+XHJcbiAgICAgIGdlbmVyYXRlR3JpZEl0ZW1zKFxyXG4gICAgICAgIGZyb20sXHJcbiAgICAgICAgdGlsbCxcclxuICAgICAgICBzdGVwLFxyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGdyaWRBdmFpbGFibGVTdGVwcyxcclxuICAgICAgICBnb2FsR3JpZFdpZHRoUHgsXHJcbiAgICAgICAgZnJvbT8uY2xvbmUoKT8uc3RhcnRPZignZGF5JylcclxuICAgICAgKSxcclxuICAgIFtmcm9tLCB0aWxsLCBzdGVwLCB3aWR0aCwgZ3JpZEF2YWlsYWJsZVN0ZXBzLCBnb2FsR3JpZFdpZHRoUHhdXHJcbiAgKTtcclxuICBjb25zdCBvblNlbGVjdGVkID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoZGF0YTogQm9va2luZ0NhbGVuZGFyU2VsZWN0aW9uRGF0YSkgPT4ge1xyXG4gICAgICBpZiAoIWZyb20gfHwgIXRpbGwgfHwgIXdpZHRoIHx8ICFvblJhbmdlQ2hhbmdlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNjcmVlblNwYWNlU3RhcnRYID0gTWF0aC5taW4oZGF0YS5vcmlnaW5bMF0sIGRhdGEudGFyZ2V0WzBdKTtcclxuICAgICAgY29uc3Qgc2NyZWVuU3BhY2VFbmRYID0gTWF0aC5tYXgoZGF0YS5vcmlnaW5bMF0sIGRhdGEudGFyZ2V0WzBdKTtcclxuICAgICAgY29uc3QgZHVyYXRpb25NcyA9IHRpbGwudmFsdWVPZigpIC0gZnJvbS52YWx1ZU9mKCk7XHJcbiAgICAgIGNvbnN0IHRvVGltZVNwYWNlID0gKG51bTogbnVtYmVyKSA9PiAobnVtIC8gKHdpZHRoIHx8IDEpKSAqIGR1cmF0aW9uTXM7XHJcbiAgICAgIGNvbnN0IHRpbWVTcGFjZVN0YXJ0ID0gZnJvbVxyXG4gICAgICAgIC5jbG9uZSgpXHJcbiAgICAgICAgLmFkZCh0b1RpbWVTcGFjZShzY3JlZW5TcGFjZVN0YXJ0WCksICdtcycpO1xyXG4gICAgICBjb25zdCB0aW1lU3BhY2VFbmQgPSBmcm9tLmNsb25lKCkuYWRkKHRvVGltZVNwYWNlKHNjcmVlblNwYWNlRW5kWCksICdtcycpO1xyXG4gICAgICBvblJhbmdlQ2hhbmdlKHsgZnJvbTogdGltZVNwYWNlU3RhcnQsIHRpbGw6IHRpbWVTcGFjZUVuZCB9KTtcclxuICAgIH0sXHJcbiAgICBbZnJvbSwgdGlsbCwgd2lkdGgsIG9uUmFuZ2VDaGFuZ2VdXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYm9va2luZ0NhbGVuZGFyRGVmYXVsdENsYXNzZXMuY2xhc3NOYW1lLCBjbGFzc05hbWUpfVxyXG4gICAgPlxyXG4gICAgICA8Qm9va2luZ0NhbGVuZGFyQ29udHJvbHM8VD5cclxuICAgICAgICB7Li4uY29udHJvbHNDbGFzc2VzfVxyXG4gICAgICAgIGl0ZW1zPXtib29raW5nc31cclxuICAgICAgICBmcm9tPXtmcm9tfVxyXG4gICAgICAgIHRpbGw9e3RpbGx9XHJcbiAgICAgICAgb25SYW5nZUNoYW5nZT17b25SYW5nZUNoYW5nZX1cclxuICAgICAgICBzdGVwPXtzdGVwfVxyXG4gICAgICAgIGZpbHRlckJvb2tpbmdzVG9ab29tPXtmaWx0ZXJCb29raW5nc1RvWm9vbX1cclxuICAgICAgICB6b29tTGV2ZWxzPXt6b29tTGV2ZWxzfVxyXG4gICAgICAgIGJvb2tpbmdDYWxlbmRhckRhdGVQaWNrZXI9e1xyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge3R5cGVvZiBCb29raW5nQ2FsZW5kYXJEYXRlUGlja2VyID09PSAnZnVuY3Rpb24nID8gKFxyXG4gICAgICAgICAgICAgIDxCb29raW5nQ2FsZW5kYXJEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICBmcm9tPXtmcm9tfVxyXG4gICAgICAgICAgICAgICAgdGlsbD17dGlsbH1cclxuICAgICAgICAgICAgICAgIG9uUmFuZ2VDaGFuZ2U9e29uUmFuZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBnZXROZXdNb21lbnRGdW5jdGlvbj17Z2V0TmV3TW9tZW50RnVuY3Rpb259XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICBCb29raW5nQ2FsZW5kYXJEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtmcm9tLmZvcm1hdCgnTU1NTScpfSwge2Zyb20uZm9ybWF0KCdZWVlZJyl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICBib29raW5nQ2FsZW5kYXJEZWZhdWx0Q2xhc3Nlcy50YWJsZUNsYXNzTmFtZSxcclxuICAgICAgICAgIHRhYmxlQ2xhc3NOYW1lXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtzaG93R3JpZCAmJiAoXHJcbiAgICAgICAgICA8Qm9va2luZ0NhbGVuZGFyR3JpZFxyXG4gICAgICAgICAgICBpdGVtcz17Z3JpZEl0ZW1zfVxyXG4gICAgICAgICAgICBkYXRhUm93c0NvdW50PXtsYW5lcy5sZW5ndGh9XHJcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7c2hvd1NlbGVjdGlvbiAmJiAoXHJcbiAgICAgICAgICA8Qm9va2luZ0NhbGVuZGFyU2VsZWN0aW9uXHJcbiAgICAgICAgICAgIGRhdGFSb3dzQ291bnQ9e2xhbmVzLmxlbmd0aH1cclxuICAgICAgICAgICAgb25TZWxlY3RlZD17b25TZWxlY3RlZH1cclxuICAgICAgICAgICAgbWluU2VsZWN0aW9uU2l6ZT17bWluU2VsZWN0aW9uU2l6ZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgIGJvb2tpbmdDYWxlbmRhckRlZmF1bHRDbGFzc2VzLmxhbmVzSGVhZGVySGVhZGVyQ29udGFpbmVyQ2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBsYW5lc0hlYWRlckhlYWRlckNvbnRhaW5lckNsYXNzTmFtZVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Ym9va2luZ0NhbGVuZGFyVG9wTGVmdEhlYWRlcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgIGJvb2tpbmdDYWxlbmRhckRlZmF1bHRDbGFzc2VzLmxhbmVzSGVhZGVyQ29udGFpbmVyQ2xhc3NOYW1lLFxyXG4gICAgICAgICAgICBsYW5lc0hlYWRlckNvbnRhaW5lckNsYXNzTmFtZVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHJlZj17b2JzZXJ2ZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Qm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXI8VD5cclxuICAgICAgICAgICAgey4uLmNvbnRyb2xzQ2xhc3Nlc31cclxuICAgICAgICAgICAgZnJvbT17ZnJvbX1cclxuICAgICAgICAgICAgdGlsbD17dGlsbH1cclxuICAgICAgICAgICAgb25SYW5nZUNoYW5nZT17b25SYW5nZUNoYW5nZX1cclxuICAgICAgICAgICAgc3RlcD17c3RlcH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtsYW5lcy5tYXAoKGxhbmUsIGxhbmVJbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgTGFuZUJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXIgPVxyXG4gICAgICAgICAgICBsYW5lLkJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXIgPz8gQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlcjtcclxuICAgICAgICAgIGNvbnN0IExhbmVCb29raW5nQ2FsZW5kYXJMYW5lID1cclxuICAgICAgICAgICAgbGFuZS5Cb29raW5nQ2FsZW5kYXJMYW5lID8/IEJvb2tpbmdDYWxlbmRhckxhbmU7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtsYW5lSW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAgICAgYm9va2luZ0NhbGVuZGFyRGVmYXVsdENsYXNzZXMubGFuZUhlYWRlckNvbnRhaW5lckNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgICAgbGFuZUhlYWRlckNvbnRhaW5lckNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgICAgbGFuZS5yb3dDbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBbYCR7Ym9va2luZ0NhbGVuZGFyRGVmYXVsdENsYXNzZXMubGFuZUhlYWRlckNvbnRhaW5lckNsYXNzTmFtZX0tLWxhc3RgXTpcclxuICAgICAgICAgICAgICAgICAgICAgIGxhbmVJbmRleCA9PT0gbGFuZXMubGVuZ3RoIC0gMSxcclxuICAgICAgICAgICAgICAgICAgICBbYCR7Ym9va2luZ0NhbGVuZGFyRGVmYXVsdENsYXNzZXMubGFuZUhlYWRlckNvbnRhaW5lckNsYXNzTmFtZX0tLWZpcnN0YF06XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYW5lSW5kZXggPT09IDAsXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExhbmVCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyPFRMYW5lRGF0YT5cclxuICAgICAgICAgICAgICAgICAgbGFuZUtleT17bGFuZS5sYW5lS2V5ID8/IGxhbmVJbmRleH1cclxuICAgICAgICAgICAgICAgICAgZGF0YT17bGFuZS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgIGJvb2tpbmdDYWxlbmRhckRlZmF1bHRDbGFzc2VzLmxhbmVDb250YWluZXJDbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICAgIGxhbmVDb250YWluZXJDbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICAgIGxhbmUucm93Q2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgW2Ake2Jvb2tpbmdDYWxlbmRhckRlZmF1bHRDbGFzc2VzLmxhbmVDb250YWluZXJDbGFzc05hbWV9LS1sYXN0YF06XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYW5lSW5kZXggPT09IGxhbmVzLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgW2Ake2Jvb2tpbmdDYWxlbmRhckRlZmF1bHRDbGFzc2VzLmxhbmVDb250YWluZXJDbGFzc05hbWV9LS1maXJzdGBdOlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFuZUluZGV4ID09PSAwLFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMYW5lQm9va2luZ0NhbGVuZGFyTGFuZVxyXG4gICAgICAgICAgICAgICAgICBsYW5lSW5kZXg9e2xhbmVJbmRleH1cclxuICAgICAgICAgICAgICAgICAgaXRlbXM9e2xhbmUuaXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgIGZyb209e2Zyb219XHJcbiAgICAgICAgICAgICAgICAgIHRpbGw9e3RpbGx9XHJcbiAgICAgICAgICAgICAgICAgIEJvb2tpbmdDYWxlbmRhckl0ZW09e1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmUuQm9va2luZ0NhbGVuZGFySXRlbSA/PyBCb29raW5nQ2FsZW5kYXJJdGVtXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbT17XHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZS5Cb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtID8/IEJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBzdGVwPXtzdGVwfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Qm9va2luZ0NhbGVuZGFyVGltZUF4aXNcclxuICAgICAgICAgICAgaXRlbXM9e2dyaWRJdGVtc31cclxuICAgICAgICAgICAgYmVzdFN0ZXA9e2Jlc3RTdGVwfVxyXG4gICAgICAgICAgICBnZXRNb21lbnRGb3JtYXRGdW5jdGlvbj17Z2V0TW9tZW50Rm9ybWF0RnVuY3Rpb259XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJvb2tpbmdDYWxlbmRhckRhdGVSYW5nZSxcclxuICBCb29raW5nQ2FsZW5kYXJJdGVtVCxcclxuICBab29tTGV2ZWwsXHJcbn0gZnJvbSAnLi4vY29tbW9uJztcclxuaW1wb3J0IHsgZHVyYXRpb24sIER1cmF0aW9uLCBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBCb29raW5nQ2FsZW5kYXJDb250cm9sc0NsYXNzZXMgfSBmcm9tICcuL2NsYXNzZXMnO1xyXG5pbXBvcnQgeyBib29raW5nQ2FsZW5kYXJDb250cm9sc0RlZmF1bHRDbGFzc2VzIH0gZnJvbSAnLic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgKiBhcyBMZWZ0QXJyb3dMb25nSWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvbmF2aWdhdGlvbi9zdmcvcHJvZHVjdGlvbi9pY19hcnJvd19iYWNrXzI0cHguc3ZnJztcclxuaW1wb3J0ICogYXMgTGVmdEFycm93SWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvaGFyZHdhcmUvc3ZnL3Byb2R1Y3Rpb24vaWNfa2V5Ym9hcmRfYXJyb3dfbGVmdF8yNHB4LnN2Zyc7XHJcbmltcG9ydCAqIGFzIFJpZ2h0QXJyb3dMb25nSWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvbmF2aWdhdGlvbi9zdmcvcHJvZHVjdGlvbi9pY19hcnJvd19mb3J3YXJkXzI0cHguc3ZnJztcclxuaW1wb3J0ICogYXMgUmlnaHRBcnJvd0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL2hhcmR3YXJlL3N2Zy9wcm9kdWN0aW9uL2ljX2tleWJvYXJkX2Fycm93X3JpZ2h0XzI0cHguc3ZnJztcclxuaW1wb3J0ICogYXMgVW5mb2xkTGVzc0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL25hdmlnYXRpb24vc3ZnL3Byb2R1Y3Rpb24vaWNfdW5mb2xkX2xlc3NfMjRweC5zdmcnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCb29raW5nQ2FsZW5kYXJDb250cm9sc1Byb3BzPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVD5cclxuICBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckNvbnRyb2xzQ2xhc3NlcyB7XHJcbiAgaXRlbXM6IFRbXTtcclxuICBzdGVwOiBEdXJhdGlvbjtcclxuICBmcm9tOiBNb21lbnQ7XHJcbiAgdGlsbDogTW9tZW50O1xyXG4gIHpvb21MZXZlbHM/OiBab29tTGV2ZWxbXTtcclxuICBvblJhbmdlQ2hhbmdlPzogKHJhbmdlOiBCb29raW5nQ2FsZW5kYXJEYXRlUmFuZ2UpID0+IHZvaWQ7XHJcbiAgZmlsdGVyQm9va2luZ3NUb1pvb20/OiAoYm9va2luZzogVCkgPT4gYm9vbGVhbjtcclxuICBib29raW5nQ2FsZW5kYXJEYXRlUGlja2VyPzogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQm9va2luZ0NhbGVuZGFyQ29udHJvbHM8VCBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckl0ZW1UPihcclxuICBwcm9wczogQm9va2luZ0NhbGVuZGFyQ29udHJvbHNQcm9wczxUPlxyXG4pIHtcclxuICBjb25zdCB7XHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBtb250aExhYmVsQ2xhc3NOYW1lLFxyXG4gICAgYnV0dG9uc0NvbnRhaW5lckNsYXNzTmFtZSxcclxuICAgIHpvb21Cb29raW5nc0J1dHRvbkNsYXNzTmFtZSxcclxuICAgIHpvb21MZXZlbHNDb250YWluZXJDbGFzc05hbWUsXHJcbiAgICB6b29tTGV2ZWxzLFxyXG4gICAgc3RlcCxcclxuICAgIGZyb20sXHJcbiAgICB0aWxsLFxyXG4gICAgb25SYW5nZUNoYW5nZSxcclxuICAgIGl0ZW1zLFxyXG4gICAgZmlsdGVyQm9va2luZ3NUb1pvb20gPSAoKSA9PiB0cnVlLFxyXG4gICAgYm9va2luZ0NhbGVuZGFyRGF0ZVBpY2tlcixcclxuICB9ID0gcHJvcHM7XHJcbiAgaWYgKCFzdGVwIHx8ICFmcm9tIHx8ICF0aWxsKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgY29uc3Qgb25TdGVwRmFjdG9yeSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKF9zdGVwOiBEdXJhdGlvbikgPT4gKCkgPT5cclxuICAgICAgb25SYW5nZUNoYW5nZSh7XHJcbiAgICAgICAgZnJvbTogZnJvbS5jbG9uZSgpLmFkZChfc3RlcCksXHJcbiAgICAgICAgdGlsbDogdGlsbC5jbG9uZSgpLmFkZChfc3RlcCksXHJcbiAgICAgIH0pLFxyXG4gICAgW2Zyb20sIHRpbGwsIG9uUmFuZ2VDaGFuZ2VdXHJcbiAgKTtcclxuICBjb25zdCBvbkJpZ1N0ZXBMZWZ0Q2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIG9uU3RlcEZhY3RvcnkoZHVyYXRpb24oLTcsICdkYXlzJykpLFxyXG4gICAgW29uU3RlcEZhY3RvcnksIHRpbGwsIGZyb21dXHJcbiAgKTtcclxuICBjb25zdCBvblNtYWxsU3RlcExlZnRDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgb25TdGVwRmFjdG9yeShkdXJhdGlvbigtMSwgJ2RheScpKSxcclxuICAgIFtvblN0ZXBGYWN0b3J5LCBzdGVwXVxyXG4gICk7XHJcbiAgY29uc3Qgb25CaWdTdGVwUmlnaHRDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgb25TdGVwRmFjdG9yeShkdXJhdGlvbig3LCAnZGF5cycpKSxcclxuICAgIFtvblN0ZXBGYWN0b3J5LCB0aWxsLCBmcm9tXVxyXG4gICk7XHJcbiAgY29uc3Qgb25TbWFsbFN0ZXBSaWdodENsaWNrID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICBvblN0ZXBGYWN0b3J5KGR1cmF0aW9uKDEsICdkYXknKSksXHJcbiAgICBbb25TdGVwRmFjdG9yeSwgc3RlcF1cclxuICApO1xyXG4gIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBSZWFjdC51c2VNZW1vKFxyXG4gICAgKCkgPT4gaXRlbXM/LmZpbHRlcihmaWx0ZXJCb29raW5nc1RvWm9vbSksXHJcbiAgICBbZmlsdGVyQm9va2luZ3NUb1pvb20sIGl0ZW1zXVxyXG4gICk7XHJcbiAgY29uc3Qgb25ab29tQm9va2luZ3NDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IG1pbkZyb21NcyA9XHJcbiAgICAgIE1hdGgubWluKFxyXG4gICAgICAgIC4uLmZpbHRlcmVkSXRlbXNcclxuICAgICAgICAgID8uZmlsdGVyKGZpbHRlckJvb2tpbmdzVG9ab29tKVxyXG4gICAgICAgICAgLm1hcCgoYSkgPT4gYS5mcm9tLnZhbHVlT2YoKSlcclxuICAgICAgKSA/PyBmcm9tPy52YWx1ZU9mKCk7XHJcbiAgICBjb25zdCBtaW5Gcm9tID0gZnJvbS5jbG9uZSgpLnN1YnRyYWN0KGZyb20udmFsdWVPZigpIC0gbWluRnJvbU1zLCAnbXMnKTtcclxuICAgIGNvbnN0IG1heFRpbGxNcyA9XHJcbiAgICAgIE1hdGgubWF4KFxyXG4gICAgICAgIC4uLmZpbHRlcmVkSXRlbXNcclxuICAgICAgICAgID8uZmlsdGVyKGZpbHRlckJvb2tpbmdzVG9ab29tKVxyXG4gICAgICAgICAgLm1hcCgoYSkgPT4gYS50aWxsLnZhbHVlT2YoKSlcclxuICAgICAgKSA/PyB0aWxsPy52YWx1ZU9mKCk7XHJcbiAgICBjb25zdCBtYXhUaWxsID0gdGlsbC5jbG9uZSgpLnN1YnRyYWN0KHRpbGwudmFsdWVPZigpIC0gbWF4VGlsbE1zLCAnbXMnKTtcclxuICAgIG9uUmFuZ2VDaGFuZ2Uoe1xyXG4gICAgICBmcm9tOiBtaW5Gcm9tLFxyXG4gICAgICB0aWxsOiBtYXhUaWxsLFxyXG4gICAgfSk7XHJcbiAgfSwgW2Zyb20sIHRpbGwsIGZpbHRlcmVkSXRlbXNdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgYm9va2luZ0NhbGVuZGFyQ29udHJvbHNEZWZhdWx0Q2xhc3Nlcy5jbGFzc05hbWUsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICA+XHJcbiAgICAgIHtib29raW5nQ2FsZW5kYXJEYXRlUGlja2VyICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgIGJvb2tpbmdDYWxlbmRhckNvbnRyb2xzRGVmYXVsdENsYXNzZXMubW9udGhMYWJlbENsYXNzTmFtZSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbENsYXNzTmFtZVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Ym9va2luZ0NhbGVuZGFyRGF0ZVBpY2tlcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAge3pvb21MZXZlbHM/Lmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgYm9va2luZ0NhbGVuZGFyQ29udHJvbHNEZWZhdWx0Q2xhc3Nlcy56b29tTGV2ZWxzQ29udGFpbmVyQ2xhc3NOYW1lLFxyXG4gICAgICAgICAgICB6b29tTGV2ZWxzQ29udGFpbmVyQ2xhc3NOYW1lXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt6b29tTGV2ZWxzLm1hcCgobGV2ZWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB0eXBlPXtcclxuICAgICAgICAgICAgICAgIHRpbGwudmFsdWVPZigpIC0gZnJvbS52YWx1ZU9mKCkgPT09IGxldmVsLnN0ZXAuYXNNaWxsaXNlY29uZHMoKVxyXG4gICAgICAgICAgICAgICAgICA/ICdwcmltYXJ5J1xyXG4gICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAvLyBibGFuaz17dHJ1ZX1cclxuICAgICAgICAgICAgICBub1NoYWRvdz17dHJ1ZX1cclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICBvblJhbmdlQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgZnJvbTogZnJvbS5jbG9uZSgpLnN0YXJ0T2YoJ2RheScpLFxyXG4gICAgICAgICAgICAgICAgICB0aWxsOiBmcm9tLmNsb25lKCkuc3RhcnRPZignZGF5JykuYWRkKGxldmVsLnN0ZXApLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bGV2ZWwubGFiZWx9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICBib29raW5nQ2FsZW5kYXJDb250cm9sc0RlZmF1bHRDbGFzc2VzLmJ1dHRvbnNDb250YWluZXJDbGFzc05hbWUsXHJcbiAgICAgICAgICBidXR0b25zQ29udGFpbmVyQ2xhc3NOYW1lXHJcbiAgICAgICAgKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCdXR0b24gbm9TaGFkb3c9e3RydWV9IG9uQ2xpY2s9e29uQmlnU3RlcExlZnRDbGlja30+XHJcbiAgICAgICAgICA8TGVmdEFycm93TG9uZ0ljb24gLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG5vU2hhZG93PXt0cnVlfSBvbkNsaWNrPXtvblNtYWxsU3RlcExlZnRDbGlja30+XHJcbiAgICAgICAgICA8TGVmdEFycm93SWNvbiAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gbm9TaGFkb3c9e3RydWV9IG9uQ2xpY2s9e29uU21hbGxTdGVwUmlnaHRDbGlja30+XHJcbiAgICAgICAgICA8UmlnaHRBcnJvd0ljb24gLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIG5vU2hhZG93PXt0cnVlfSBvbkNsaWNrPXtvbkJpZ1N0ZXBSaWdodENsaWNrfT5cclxuICAgICAgICAgIDxSaWdodEFycm93TG9uZ0ljb24gLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgIGJvb2tpbmdDYWxlbmRhckNvbnRyb2xzRGVmYXVsdENsYXNzZXMuem9vbUJvb2tpbmdzQnV0dG9uQ2xhc3NOYW1lLFxyXG4gICAgICAgICAgICB6b29tQm9va2luZ3NCdXR0b25DbGFzc05hbWVcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBub1NoYWRvdz17dHJ1ZX1cclxuICAgICAgICAgIGRpc2FibGVkPXshZmlsdGVyZWRJdGVtcz8ubGVuZ3RofVxyXG4gICAgICAgICAgb25DbGljaz17b25ab29tQm9va2luZ3NDbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VW5mb2xkTGVzc0ljb24gLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFhYTBlMmMzNGMyZmQ1MzNjNTI5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiYm9va2luZ0NhbGVuZGFyRGVmYXVsdENsYXNzZXMiLCJjbGFzc05hbWVzIiwiZGVmYXVsdEdldE1vbWVudEZvcm1hdEZ1bmN0aW9uIiwiQm9va2luZ0NhbGVuZGFyQ29udHJvbHMiLCJEZWZhdWx0Qm9va2luZ0NhbGVuZGFyQ29udHJvbHMiLCJnZW5lcmF0ZUdyaWRJdGVtcyIsInNwbGl0Qm9va2luZ3NUb0xhbmVzIiwiQm9va2luZ0NhbGVuZGFyTGFuZSIsIkRlZmF1bHRCb29raW5nQ2FsZW5kYXJMYW5lIiwiZHVyYXRpb24iLCJCb29raW5nQ2FsZW5kYXJHcmlkIiwiRGVmYXVsdEJvb2tpbmdDYWxlbmRhckdyaWQiLCJCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyIiwiRGVmYXVsdEJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXIiLCJCb29raW5nQ2FsZW5kYXJMYW5lc0hlYWRlciIsIkRlZmF1bHRCb29raW5nQ2FsZW5kYXJMYW5lc0hlYWRlciIsIkJvb2tpbmdDYWxlbmRhckRhdGVQaWNrZXIiLCJEZWZhdWx0Qm9va2luZ0NhbGVuZGFyRGF0ZVBpY2tlciIsImRlZmF1bHRHZXROZXdNb21lbnRGdW5jdGlvbiIsImRlZmF1bHRHcmlkQXZhaWxhYmxlU3RlcHMiLCJCb29raW5nQ2FsZW5kYXJUaW1lQXhpcyIsInVzZURpbWVuc2lvbnMiLCJCb29raW5nQ2FsZW5kYXJTZWxlY3Rpb24iLCJkZWZhdWx0U3RlcCIsIkJvb2tpbmdDYWxlbmRhciIsInByb3BzIiwiX2VudHJ5JHRhcmdldCRzY3JvbGxXIiwiX2VudHJ5JHRhcmdldCIsImJvb2tpbmdzIiwiY2xhc3NOYW1lIiwibGFuZUNvbnRhaW5lckNsYXNzTmFtZSIsImxhbmVIZWFkZXJDb250YWluZXJDbGFzc05hbWUiLCJsYW5lc0hlYWRlckNvbnRhaW5lckNsYXNzTmFtZSIsImxhbmVzSGVhZGVySGVhZGVyQ29udGFpbmVyQ2xhc3NOYW1lIiwiY29udHJvbHNDbGFzc2VzIiwidGFibGVDbGFzc05hbWUiLCJmcm9tIiwidGlsbCIsIm9uUmFuZ2VDaGFuZ2UiLCJfcHJvcHMkc3RlcCIsInN0ZXAiLCJfcHJvcHMkc2hvd0dyaWQiLCJzaG93R3JpZCIsIl9wcm9wcyRzaG93U2VsZWN0aW9uIiwic2hvd1NlbGVjdGlvbiIsIl9wcm9wcyRncmlkQXZhaWxhYmxlUyIsImdyaWRBdmFpbGFibGVTdGVwcyIsIl9wcm9wcyRnZXRNb21lbnRGb3JtYSIsImdldE1vbWVudEZvcm1hdEZ1bmN0aW9uIiwiX3Byb3BzJGdldE5ld01vbWVudEZ1IiwiZ2V0TmV3TW9tZW50RnVuY3Rpb24iLCJfcHJvcHMkZ29hbEdyaWRXaWR0aFAiLCJnb2FsR3JpZFdpZHRoUHgiLCJfcHJvcHMkbWluU2VsZWN0aW9uU2kiLCJtaW5TZWxlY3Rpb25TaXplIiwibWluTGFuZXNDb3VudCIsImxhbmVzU291cmNlIiwiZmlsdGVyQm9va2luZ3NUb1pvb20iLCJ6b29tTGV2ZWxzIiwiX3Byb3BzJEJvb2tpbmdDYWxlbmRhIiwiQm9va2luZ0NhbGVuZGFySXRlbSIsIl9wcm9wcyRCb29raW5nQ2FsZW5kYTIiLCJCb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtIiwiX3Byb3BzJEJvb2tpbmdDYWxlbmRhMyIsIl9wcm9wcyRCb29raW5nQ2FsZW5kYTQiLCJfcHJvcHMkQm9va2luZ0NhbGVuZGE1IiwiX3Byb3BzJEJvb2tpbmdDYWxlbmRhNiIsImJvb2tpbmdDYWxlbmRhclRvcExlZnRIZWFkZXIiLCJjaGlsZHJlbiIsImxhbmVzIiwidXNlTWVtbyIsIl91c2VEaW1lbnNpb25zIiwib2JzZXJ2ZSIsImVudHJ5Iiwid2lkdGgiLCJ0YXJnZXQiLCJzY3JvbGxXaWR0aCIsIl9SZWFjdCR1c2VNZW1vIiwiX2Zyb20kY2xvbmUiLCJjbG9uZSIsInN0YXJ0T2YiLCJncmlkSXRlbXMiLCJpdGVtcyIsImJlc3RTdGVwIiwib25TZWxlY3RlZCIsInVzZUNhbGxiYWNrIiwiZGF0YSIsInNjcmVlblNwYWNlU3RhcnRYIiwiTWF0aCIsIm1pbiIsIm9yaWdpbiIsInNjcmVlblNwYWNlRW5kWCIsIm1heCIsImR1cmF0aW9uTXMiLCJ2YWx1ZU9mIiwidG9UaW1lU3BhY2UiLCJudW0iLCJ0aW1lU3BhY2VTdGFydCIsImFkZCIsInRpbWVTcGFjZUVuZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImJvb2tpbmdDYWxlbmRhckRhdGVQaWNrZXIiLCJGcmFnbWVudCIsImZvcm1hdCIsImRhdGFSb3dzQ291bnQiLCJsZW5ndGgiLCJyZWYiLCJtYXAiLCJsYW5lIiwibGFuZUluZGV4IiwiX2xhbmUkQm9va2luZ0NhbGVuZGFyIiwiX2xhbmUkQm9va2luZ0NhbGVuZGFyMiIsIl9jbGFzc05hbWVzIiwiX2xhbmUkbGFuZUtleSIsIl9jbGFzc05hbWVzMiIsIl9sYW5lJEJvb2tpbmdDYWxlbmRhcjMiLCJfbGFuZSRCb29raW5nQ2FsZW5kYXI0IiwiTGFuZUJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXIiLCJMYW5lQm9va2luZ0NhbGVuZGFyTGFuZSIsImtleSIsInJvd0NsYXNzTmFtZSIsIl9kZWZpbmVQcm9wZXJ0eSIsImNvbmNhdCIsImxhbmVLZXkiLCJfX3NpZ25hdHVyZV9fIiwicmVhY3RIb3RMb2FkZXIiLCJyZWFjdEhvdExvYWRlckdsb2JhbCIsImRlZmF1bHQiLCJ1bmRlZmluZWQiLCJyZWdpc3RlciIsImxlYXZlTW9kdWxlIiwibW9kdWxlIiwiYm9va2luZ0NhbGVuZGFyQ29udHJvbHNEZWZhdWx0Q2xhc3NlcyIsIkJ1dHRvbiIsIkxlZnRBcnJvd0xvbmdJY29uIiwiTGVmdEFycm93SWNvbiIsIlJpZ2h0QXJyb3dMb25nSWNvbiIsIlJpZ2h0QXJyb3dJY29uIiwiVW5mb2xkTGVzc0ljb24iLCJtb250aExhYmVsQ2xhc3NOYW1lIiwiYnV0dG9uc0NvbnRhaW5lckNsYXNzTmFtZSIsInpvb21Cb29raW5nc0J1dHRvbkNsYXNzTmFtZSIsInpvb21MZXZlbHNDb250YWluZXJDbGFzc05hbWUiLCJfcHJvcHMkZmlsdGVyQm9va2luZ3MiLCJvblN0ZXBGYWN0b3J5IiwiX3N0ZXAiLCJvbkJpZ1N0ZXBMZWZ0Q2xpY2siLCJvblNtYWxsU3RlcExlZnRDbGljayIsIm9uQmlnU3RlcFJpZ2h0Q2xpY2siLCJvblNtYWxsU3RlcFJpZ2h0Q2xpY2siLCJmaWx0ZXJlZEl0ZW1zIiwiZmlsdGVyIiwib25ab29tQm9va2luZ3NDbGljayIsIl9NYXRoJG1pbiIsIl9NYXRoJG1heCIsIm1pbkZyb21NcyIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYSIsIm1pbkZyb20iLCJzdWJ0cmFjdCIsIm1heFRpbGxNcyIsIm1heFRpbGwiLCJsZXZlbCIsImluZGV4IiwidHlwZSIsImFzTWlsbGlzZWNvbmRzIiwibm9TaGFkb3ciLCJvbkNsaWNrIiwibGFiZWwiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=