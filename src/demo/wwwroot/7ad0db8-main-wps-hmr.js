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
    _props$showZoomAllBut = props.showZoomAllButton,
    showZoomAllButton = _props$showZoomAllBut === void 0 ? true : _props$showZoomAllBut,
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
    _props$unmatchedLanes = props.unmatchedLanesToFront,
    unmatchedLanesToFront = _props$unmatchedLanes === void 0 ? true : _props$unmatchedLanes,
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
    filteringButton = props.filteringButton,
    children = props.children;
  var lanes = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_5__.splitBookingsToLanes)(bookings, from, minLanesCount, lanesSource, unmatchedLanesToFront);
  }, [bookings, from, minLanesCount, lanesSource, unmatchedLanesToFront]);
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
    filteringButton: filteringButton,
    showZoomAllButton: showZoomAllButton,
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

/***/ "./src/lib/components/bookingCalendar/utils.ts":
/*!*****************************************************!*\
  !*** ./src/lib/components/bookingCalendar/utils.ts ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateItemsDimensions": () => (/* binding */ calculateItemsDimensions),
/* harmony export */   "generateControlItems": () => (/* binding */ generateControlItems),
/* harmony export */   "generateGridItems": () => (/* binding */ generateGridItems),
/* harmony export */   "getItemPositionStyle": () => (/* binding */ getItemPositionStyle),
/* harmony export */   "groupBy": () => (/* binding */ groupBy),
/* harmony export */   "itemsOverlap": () => (/* binding */ itemsOverlap),
/* harmony export */   "splitBookingsToLanes": () => (/* binding */ splitBookingsToLanes)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function groupBy(items, iterator) {
  return items.reduce(function (obj, item) {
    var key = iterator(item);
    if (!obj.hasOwnProperty(key)) {
      obj[key] = [];
    }
    obj[key].push(item);
    return obj;
  }, {});
}
function splitBookingsToLanes(bookings, from, minLanesCount) {
  var lanesSource = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var unmatchedToFront = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  if (!bookings) {
    return [];
  }
  var lanes = [];
  if (lanesSource !== null && lanesSource !== void 0 && lanesSource.length) {
    lanes = lanesSource.map(function (source) {
      return _objectSpread(_objectSpread({}, source), {}, {
        items: []
      });
    });
  }
  var bookingsWithoutLaneKey = bookings.filter(function (a) {
    return a.laneKey === undefined;
  });
  var bookingsWithLaneKey = bookings.filter(function (a) {
    return a.laneKey !== undefined;
  });
  if (bookingsWithLaneKey.length) {
    var grouped = groupBy(bookingsWithLaneKey.map(function (booking, originalIndex) {
      return _objectSpread(_objectSpread({}, booking), {}, {
        originalIndex: originalIndex
      });
    }), function (a) {
      return a.laneKey;
    });
    lanes = Object.keys(grouped).map(function (key) {
      return _objectSpread({
        laneKey: Number(key),
        items: grouped[key]
      }, lanesSource === null || lanesSource === void 0 ? void 0 : lanesSource.find(function (a) {
        return a.laneKey === Number(key);
      }));
    });
    var missingLanes = lanesSource === null || lanesSource === void 0 ? void 0 : lanesSource.filter(function (a) {
      return !lanes.some(function (l) {
        return l.laneKey === a.laneKey;
      });
    });
    lanes = lanes.concat(missingLanes.map(function (a) {
      return _objectSpread(_objectSpread({}, a), {}, {
        items: []
      });
    }));
  }
  if (bookingsWithoutLaneKey.length) {
    var remainingBookings = bookingsWithoutLaneKey.map(function (booking, originalIndex) {
      return _objectSpread(_objectSpread({}, booking), {}, {
        originalIndex: originalIndex
      });
    }).sort(function (a, b) {
      return a.from.valueOf() - b.from.valueOf();
    });
    var _loop = function _loop() {
      var min = 99999999999999;
      var bookingIndex = -1;
      var laneIndex = -1;
      lanes.forEach(function (lane, index) {
        var _lane$items$till, _lane$items;
        if (lanesSource !== null && lanesSource !== void 0 && lanesSource.some(function (l) {
          return l.laneKey === lane.laneKey;
        })) {
          return;
        }
        var lastTill = (_lane$items$till = (_lane$items = lane.items[lane.items.length - 1]) === null || _lane$items === void 0 ? void 0 : _lane$items.till) !== null && _lane$items$till !== void 0 ? _lane$items$till : from;
        var distances = remainingBookings.map(function (booking) {
          var dist = booking.from.diff(lastTill);
          if (lane.items.length === 0) {
            return Math.abs(dist);
          }
          return dist;
        });
        var _min = Math.min.apply(Math, _toConsumableArray(distances.filter(function (a) {
          return a >= 0;
        })));
        if (_min < min) {
          bookingIndex = distances.indexOf(_min);
          laneIndex = index;
        }
      });
      if (bookingIndex >= 0 && laneIndex >= 0) {
        lanes[laneIndex].items = lanes[laneIndex].items.concat(_objectSpread({}, remainingBookings[bookingIndex]));
        remainingBookings.splice(bookingIndex, 1);
      } else {
        lanes = lanes.concat({
          items: [_objectSpread({}, remainingBookings[0])],
          laneKey: lanes.length,
          data: undefined
        });
        remainingBookings.shift();
      }
    };
    while (remainingBookings.length > 0) {
      _loop();
    }
    // Naive solution that is much less computationally intensive but yields more lanes than necessary
    /*bookings.forEach((booking, originalIndex) => {
    let found = false;
    lanes.forEach((lane, index) => {
      if (!lane.some(i => itemsOverlap(booking, i))) {
        lanes[index] = lanes[index].concat({ ...booking, originalIndex });
        found = true;
      }
    });
    if (!found) {
      lanes = lanes.concat([[{ ...booking, originalIndex }]]);
    }
    });*/
  }

  for (var index = 0; index < lanes.length; index++) {
    var lane = lanes[index];
    lanes[index].items = lane.items.sort(function (a, b) {
      return a.from.valueOf() - b.from.valueOf();
    });
  }
  if (lanes.length < minLanesCount) {
    lanes = lanes.concat(new Array(minLanesCount - lanes.length).fill(null).map(function (_, index) {
      return {
        items: [],
        laneKey: index + lanes.length,
        data: null
      };
    }));
  }
  var findIndex = function findIndex(arr, laneKey) {
    var unmatchedVal = unmatchedToFront ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
    if (!laneKey) {
      return unmatchedVal;
    }
    var index = arr.findIndex(function (item) {
      return item.laneKey === laneKey;
    });
    return index === -1 ? unmatchedVal : index;
  };
  var sortArrayByLaneKeys = function sortArrayByLaneKeys(referenceArray, arrayToSort) {
    return _toConsumableArray(arrayToSort).sort(function (a, b) {
      var indexA = findIndex(referenceArray, a.laneKey);
      var indexB = findIndex(referenceArray, b.laneKey);
      return indexA - indexB;
    });
  };
  lanes = sortArrayByLaneKeys(lanesSource, lanes);
  return lanes;
}
function itemsOverlap(a, b) {
  if (!(a !== null && a !== void 0 && a.from) || !(a !== null && a !== void 0 && a.till) || !(b !== null && b !== void 0 && b.from) || !(b !== null && b !== void 0 && b.till)) {
    return false;
  }
  if (b.till.isBefore(a.from)) {
    return false;
  }
  if (b.from.isAfter(a.till)) {
    return false;
  }
  return true;
}
var getItemPositionStyle = function getItemPositionStyle(marginStart, width) {
  return {
    marginLeft: "".concat(marginStart * 100, "%"),
    width: "".concat(width * 100, "%")
  };
};
function calculateItemsDimensions(items, from, till) {
  var lastEnd = 0;
  var widthMs = till.valueOf() - from.valueOf();
  var startMs = from.valueOf();
  var endMs = till.valueOf();
  return widthMs > 0 ? items === null || items === void 0 ? void 0 : items.map(function (item) {
    var startIsCut = item.from.valueOf() < startMs;
    var realStart = (item.from.valueOf() - startMs) / widthMs;
    var realFrom = startIsCut ? moment__WEBPACK_IMPORTED_MODULE_0___default()(startMs) : moment__WEBPACK_IMPORTED_MODULE_0___default()(item.from);
    var start = startIsCut ? 0 : realStart;
    var endIsCut = item.till.valueOf() > endMs;
    var realEnd = (item.till.valueOf() - startMs) / widthMs;
    var end = endIsCut ? (endMs - startMs) / widthMs : realEnd;
    var realTill = endIsCut ? moment__WEBPACK_IMPORTED_MODULE_0___default()(endMs) : moment__WEBPACK_IMPORTED_MODULE_0___default()(item.till);
    var marginStart = start - lastEnd;
    lastEnd = (item.till.valueOf() - startMs) / widthMs;
    return {
      item: item,
      start: start,
      realStart: realStart,
      realFrom: realFrom,
      startIsCut: startIsCut,
      width: end - start,
      end: end,
      realEnd: realEnd,
      realTill: realTill,
      endIsCut: endIsCut,
      marginStart: marginStart
    };
  }) : [];
}
var generateControlItems = function generateControlItems(from, till, step, startOfStep) {
  if (!from || !till || !step) {
    return [];
  }
  var steps = Math.max(Math.ceil((till.valueOf() - from.valueOf()) / step.asMilliseconds()), 2);
  var subtract = (startOfStep.valueOf() - from.valueOf()) % step.asMilliseconds();
  if (subtract > 0) {
    subtract -= step.asMilliseconds();
  }
  if (till.valueOf() - from.valueOf() > step.asMilliseconds()) {
    steps += 1;
  }
  return new Array(steps).fill(0).map(function (_, index) {
    return {
      from: from.clone().add(subtract).add(step.asMilliseconds() * index),
      till: from.clone().add(subtract).add(step.asMilliseconds() * (index + 1))
    };
  });
};
var generateGridItems = function generateGridItems(from, till, step, containerWidthPx, availableSteps, goalGridWidthPx, startOfStep) {
  if (!from || !till || !containerWidthPx || !(availableSteps !== null && availableSteps !== void 0 && availableSteps.length) || !goalGridWidthPx || !step || !startOfStep) {
    return {
      bestStep: availableSteps === null || availableSteps === void 0 ? void 0 : availableSteps[0],
      items: []
    };
  }
  var stepMs = step.asMilliseconds();
  var fromMs = from.valueOf();
  var tillMs = till.valueOf();
  var timeLengthMs = tillMs - fromMs;
  var approximateStepsCount = containerWidthPx / goalGridWidthPx;
  var approximateStepMs = timeLengthMs / approximateStepsCount;
  var availableStepsDistancesMs = availableSteps.map(function (a) {
    return Math.abs(a.asMilliseconds() - approximateStepMs);
  });
  var smallestDistance = Math.min.apply(Math, _toConsumableArray(availableStepsDistancesMs));
  var bestStepIndex = availableStepsDistancesMs.findIndex(function (a) {
    return a === smallestDistance;
  });
  var bestStep = availableSteps[bestStepIndex];
  var subtract = (fromMs + from.utcOffset() * 60 * 1000) % bestStep.asMilliseconds();
  var startMs = fromMs - subtract;
  var steps = [];
  while (startMs <= tillMs) {
    steps = steps.concat(from.clone().add(startMs - fromMs, 'ms'));
    startMs += bestStep.asMilliseconds();
  }
  return {
    items: steps.filter(function (a) {
      return a.valueOf() > fromMs && a.valueOf() < tillMs;
    }).map(function (date) {
      var stepProportion = (date.valueOf() + from.utcOffset() * 60 * 1000) % stepMs / stepMs;
      var numberOfRoots = 0;
      var current = stepProportion;
      var currentTop = 1;
      var tolerance = 0.001;
      while (current > tolerance && current < currentTop - tolerance) {
        numberOfRoots += 1;
        currentTop = 1 / Math.pow(2, numberOfRoots);
        if (current > currentTop) {
          current -= currentTop;
        }
      }
      return {
        left: (date.valueOf() - fromMs) / timeLengthMs,
        date: date,
        stepProportion: stepProportion,
        opacity: 1 / (numberOfRoots || 1)
      };
    }),
    bestStep: bestStep
  };
};
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(groupBy, "groupBy", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\bookingCalendar\\utils.ts");
  reactHotLoader.register(splitBookingsToLanes, "splitBookingsToLanes", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\bookingCalendar\\utils.ts");
  reactHotLoader.register(itemsOverlap, "itemsOverlap", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\bookingCalendar\\utils.ts");
  reactHotLoader.register(getItemPositionStyle, "getItemPositionStyle", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\bookingCalendar\\utils.ts");
  reactHotLoader.register(calculateItemsDimensions, "calculateItemsDimensions", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\bookingCalendar\\utils.ts");
  reactHotLoader.register(generateControlItems, "generateControlItems", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\bookingCalendar\\utils.ts");
  reactHotLoader.register(generateGridItems, "generateGridItems", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\bookingCalendar\\utils.ts");
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
/******/ 	__webpack_require__.h = () => ("8041befa6b92d6c6f4c0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksRUFBSkEsSUFBSTtRQUNKQyxjQUFjLEVBQWRBLGNBQWM7UUFDZE8sT0FBTyxFQUFFLENBQUMsSUFBSU4sYUFBYSxJQUFJLENBQUM7TUFDbEMsQ0FBQztJQUNILENBQUMsQ0FBQztJQUNKcEosUUFBUSxFQUFSQTtFQUNGLENBQUM7QUFDSCxDQUFDO0FBQUM7QUFBQTtFQUFBLElBQUEyQyxjQUFBLFVBQUFDLG9CQUFBLG1CQUFBQSxvQkFBQSxDQUFBQyxPQUFBLEdBQUFDLFNBQUE7RUFBQSxLQUFBSCxjQUFBO0lBQUE7RUFBQTtFQUFBQSxjQUFBLENBQUFJLFFBQUEsQ0E5VWNJLE9BQU87RUFBQVIsY0FBQSxDQUFBSSxRQUFBLENBOEJQakksb0JBQW9CO0VBQUE2SCxjQUFBLENBQUFJLFFBQUEsQ0EySXBCOEQsWUFBWTtFQUFBbEUsY0FBQSxDQUFBSSxRQUFBLENBYWZpRSxvQkFBb0I7RUFBQXJFLGNBQUEsQ0FBQUksUUFBQSxDQU1qQm9FLHdCQUF3QjtFQUFBeEUsY0FBQSxDQUFBSSxRQUFBLENBc0MzQmlGLG9CQUFvQjtFQUFBckYsY0FBQSxDQUFBSSxRQUFBLENBd0NwQmxJLGlCQUFpQjtBQUFBO0FBQUE7QUFBQTtFQUFBLElBQUFtSSxXQUFBLFVBQUFKLG9CQUFBLG1CQUFBQSxvQkFBQSxDQUFBSSxXQUFBLEdBQUFGLFNBQUE7RUFBQUUsV0FBQSxJQUFBQSxXQUFBLENBQUFDLE1BQUE7QUFBQTs7Ozs7Ozs7VUNwUjlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3Vlc3RiZWxsLWZvcm1zLy4vc3JjL2xpYi9jb21wb25lbnRzL2Jvb2tpbmdDYWxlbmRhci9Cb29raW5nQ2FsZW5kYXIudHN4Iiwid2VicGFjazovL2d1ZXN0YmVsbC1mb3Jtcy8uL3NyYy9saWIvY29tcG9uZW50cy9ib29raW5nQ2FsZW5kYXIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ3Vlc3RiZWxsLWZvcm1zL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgQm9va2luZ0NhbGVuZGFyQ2xhc3NlcyxcclxuICBib29raW5nQ2FsZW5kYXJEZWZhdWx0Q2xhc3NlcyxcclxufSBmcm9tICcuL2NsYXNzZXMnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJEYXRlUmFuZ2UsXHJcbiAgQm9va2luZ0NhbGVuZGFySXRlbVQsXHJcbiAgZGVmYXVsdEdldE1vbWVudEZvcm1hdEZ1bmN0aW9uLFxyXG4gIEdldE5ld01vbWVudEZ1bmN0aW9uVHlwZSxcclxufSBmcm9tICcuL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQm9va2luZ0NhbGVuZGFyQ29udHJvbHMgYXMgRGVmYXVsdEJvb2tpbmdDYWxlbmRhckNvbnRyb2xzLFxyXG4gIEJvb2tpbmdDYWxlbmRhckNvbnRyb2xzUHJvcHMsXHJcbn0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJDb250cm9scy9Cb29raW5nQ2FsZW5kYXJDb250cm9scyc7XHJcbmltcG9ydCB7XHJcbiAgZ2VuZXJhdGVHcmlkSXRlbXMsXHJcbiAgTGFuZVNvdXJjZURhdGEsXHJcbiAgc3BsaXRCb29raW5nc1RvTGFuZXMsXHJcbn0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7XHJcbiAgQm9va2luZ0NhbGVuZGFyTGFuZSBhcyBEZWZhdWx0Qm9va2luZ0NhbGVuZGFyTGFuZSxcclxuICBCb29raW5nQ2FsZW5kYXJMYW5lUHJvcHMsXHJcbn0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJMYW5lL0Jvb2tpbmdDYWxlbmRhckxhbmUnO1xyXG5pbXBvcnQgeyBNb21lbnQsIER1cmF0aW9uLCBkdXJhdGlvbiB9IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IEJvb2tpbmdDYWxlbmRhckl0ZW1Qcm9wcyB9IGZyb20gJy4vYm9va2luZ0NhbGVuZGFySXRlbSc7XHJcbmltcG9ydCB7IEJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW1Qcm9wcyB9IGZyb20gJy4vYm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbSc7XHJcbmltcG9ydCB7XHJcbiAgQm9va2luZ0NhbGVuZGFyR3JpZCBhcyBEZWZhdWx0Qm9va2luZ0NhbGVuZGFyR3JpZCxcclxuICBCb29raW5nQ2FsZW5kYXJHcmlkUHJvcHMsXHJcbn0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJHcmlkL0Jvb2tpbmdDYWxlbmRhckdyaWQnO1xyXG5pbXBvcnQge1xyXG4gIEJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXIgYXMgRGVmYXVsdEJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXIsXHJcbiAgQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlclByb3BzLFxyXG59IGZyb20gJy4vYm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlcic7XHJcbmltcG9ydCB7XHJcbiAgQm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXIgYXMgRGVmYXVsdEJvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyLFxyXG4gIEJvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyUHJvcHMsXHJcbn0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJMYW5lc0hlYWRlcic7XHJcbmltcG9ydCB7XHJcbiAgQm9va2luZ0NhbGVuZGFyRGF0ZVBpY2tlciBhcyBEZWZhdWx0Qm9va2luZ0NhbGVuZGFyRGF0ZVBpY2tlcixcclxuICBCb29raW5nQ2FsZW5kYXJEYXRlUGlja2VyUHJvcHMsXHJcbn0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJEYXRlUGlja2VyJztcclxuaW1wb3J0IHtcclxuICBkZWZhdWx0R2V0TmV3TW9tZW50RnVuY3Rpb24sXHJcbiAgZGVmYXVsdEdyaWRBdmFpbGFibGVTdGVwcyxcclxuICBHZXRNb21lbnRGb3JtYXRGdW5jdGlvblR5cGUsXHJcbiAgWm9vbUxldmVsLFxyXG59IGZyb20gJy4nO1xyXG5pbXBvcnQgeyBCb29raW5nQ2FsZW5kYXJUaW1lQXhpcyB9IGZyb20gJy4vYm9va2luZ0NhbGVuZGFyVGltZUF4aXMvQm9va2luZ0NhbGVuZGFyVGltZUF4aXMnO1xyXG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tICdyZWFjdC1jb29sLWRpbWVuc2lvbnMnO1xyXG5pbXBvcnQgQm9va2luZ0NhbGVuZGFyU2VsZWN0aW9uLCB7XHJcbiAgQm9va2luZ0NhbGVuZGFyU2VsZWN0aW9uRGF0YSxcclxufSBmcm9tICcuL2Jvb2tpbmdDYWxlbmRhclNlbGVjdGlvbi9Cb29raW5nQ2FsZW5kYXJTZWxlY3Rpb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCb29raW5nQ2FsZW5kYXJQcm9wczxUIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVQsIFRMYW5lRGF0YT5cclxuICBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckNsYXNzZXMge1xyXG4gIGJvb2tpbmdzOiBUW107XHJcbiAgZnJvbTogTW9tZW50O1xyXG4gIHRpbGw6IE1vbWVudDtcclxuICBnZXRNb21lbnRGb3JtYXRGdW5jdGlvbj86IEdldE1vbWVudEZvcm1hdEZ1bmN0aW9uVHlwZTtcclxuICBnZXROZXdNb21lbnRGdW5jdGlvbj86IEdldE5ld01vbWVudEZ1bmN0aW9uVHlwZTtcclxuICBvblJhbmdlQ2hhbmdlPzogKHJhbmdlOiBCb29raW5nQ2FsZW5kYXJEYXRlUmFuZ2UpID0+IHZvaWQ7XHJcbiAgc3RlcD86IER1cmF0aW9uO1xyXG4gIHNob3dab29tQWxsQnV0dG9uPzogYm9vbGVhbjtcclxuICBzaG93R3JpZD86IGJvb2xlYW47XHJcbiAgc2hvd1NlbGVjdGlvbj86IGJvb2xlYW47XHJcbiAgbWluU2VsZWN0aW9uU2l6ZT86IG51bWJlcjtcclxuICBncmlkQXZhaWxhYmxlU3RlcHM/OiBEdXJhdGlvbltdO1xyXG4gIGdvYWxHcmlkV2lkdGhQeD86IG51bWJlcjtcclxuICBtaW5MYW5lc0NvdW50PzogbnVtYmVyO1xyXG4gIGxhbmVzU291cmNlPzogTGFuZVNvdXJjZURhdGE8VCwgVExhbmVEYXRhPltdO1xyXG4gIHVubWF0Y2hlZExhbmVzVG9Gcm9udD86IGJvb2xlYW47XHJcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgYm9va2luZ0NhbGVuZGFyVG9wTGVmdEhlYWRlcj86IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBmaWx0ZXJpbmdCdXR0b24/OiBSZWFjdC5SZWFjdE5vZGU7XHJcblxyXG4gIHpvb21MZXZlbHM/OiBab29tTGV2ZWxbXTtcclxuICBmaWx0ZXJCb29raW5nc1RvWm9vbT86IChib29raW5nOiBUKSA9PiBib29sZWFuO1xyXG5cclxuICBCb29raW5nQ2FsZW5kYXJJdGVtPzogUmVhY3QuQ29tcG9uZW50VHlwZTxCb29raW5nQ2FsZW5kYXJJdGVtUHJvcHM8VD4+O1xyXG4gIEJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW0/OiBSZWFjdC5Db21wb25lbnRUeXBlPFxyXG4gICAgQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbVByb3BzPFQ+XHJcbiAgPjtcclxuICBCb29raW5nQ2FsZW5kYXJMYW5lPzogUmVhY3QuQ29tcG9uZW50VHlwZTxCb29raW5nQ2FsZW5kYXJMYW5lUHJvcHM8VD4+O1xyXG4gIEJvb2tpbmdDYWxlbmRhckNvbnRyb2xzPzogUmVhY3QuQ29tcG9uZW50VHlwZTxcclxuICAgIEJvb2tpbmdDYWxlbmRhckNvbnRyb2xzUHJvcHM8VD5cclxuICA+O1xyXG4gIEJvb2tpbmdDYWxlbmRhckdyaWQ/OiBSZWFjdC5Db21wb25lbnRUeXBlPEJvb2tpbmdDYWxlbmRhckdyaWRQcm9wcz47XHJcbiAgQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlcj86IFJlYWN0LkNvbXBvbmVudFR5cGU8XHJcbiAgICBCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyUHJvcHM8VExhbmVEYXRhPlxyXG4gID47XHJcbiAgQm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXI/OiBSZWFjdC5Db21wb25lbnRUeXBlPFxyXG4gICAgQm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXJQcm9wczxUPlxyXG4gID47XHJcbiAgQm9va2luZ0NhbGVuZGFyRGF0ZVBpY2tlcj86XHJcbiAgICB8IFJlYWN0LkNvbXBvbmVudFR5cGU8Qm9va2luZ0NhbGVuZGFyRGF0ZVBpY2tlclByb3BzPFQ+PlxyXG4gICAgfCBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRTdGVwID0gZHVyYXRpb24oMSwgJ2RheScpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJvb2tpbmdDYWxlbmRhcjxUIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVQsIFRMYW5lRGF0YT4oXHJcbiAgcHJvcHM6IEJvb2tpbmdDYWxlbmRhclByb3BzPFQsIFRMYW5lRGF0YT5cclxuKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgYm9va2luZ3MsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBsYW5lQ29udGFpbmVyQ2xhc3NOYW1lLFxyXG4gICAgbGFuZUhlYWRlckNvbnRhaW5lckNsYXNzTmFtZSxcclxuICAgIGxhbmVzSGVhZGVyQ29udGFpbmVyQ2xhc3NOYW1lLFxyXG4gICAgbGFuZXNIZWFkZXJIZWFkZXJDb250YWluZXJDbGFzc05hbWUsXHJcbiAgICBjb250cm9sc0NsYXNzZXMsXHJcbiAgICB0YWJsZUNsYXNzTmFtZSxcclxuICAgIGZyb20sXHJcbiAgICB0aWxsLFxyXG4gICAgb25SYW5nZUNoYW5nZSxcclxuICAgIHN0ZXAgPSBkZWZhdWx0U3RlcCxcclxuICAgIHNob3dHcmlkID0gdHJ1ZSxcclxuICAgIHNob3dTZWxlY3Rpb24gPSB0cnVlLFxyXG4gICAgc2hvd1pvb21BbGxCdXR0b24gPSB0cnVlLFxyXG4gICAgZ3JpZEF2YWlsYWJsZVN0ZXBzID0gZGVmYXVsdEdyaWRBdmFpbGFibGVTdGVwcyxcclxuICAgIGdldE1vbWVudEZvcm1hdEZ1bmN0aW9uID0gZGVmYXVsdEdldE1vbWVudEZvcm1hdEZ1bmN0aW9uLFxyXG4gICAgZ2V0TmV3TW9tZW50RnVuY3Rpb24gPSBkZWZhdWx0R2V0TmV3TW9tZW50RnVuY3Rpb24sXHJcbiAgICBnb2FsR3JpZFdpZHRoUHggPSA2MCxcclxuICAgIG1pblNlbGVjdGlvblNpemUgPSAxMCxcclxuICAgIG1pbkxhbmVzQ291bnQsXHJcbiAgICBsYW5lc1NvdXJjZSxcclxuICAgIHVubWF0Y2hlZExhbmVzVG9Gcm9udCA9IHRydWUsXHJcbiAgICBmaWx0ZXJCb29raW5nc1RvWm9vbSxcclxuICAgIHpvb21MZXZlbHMsXHJcbiAgICBCb29raW5nQ2FsZW5kYXJDb250cm9scyA9IERlZmF1bHRCb29raW5nQ2FsZW5kYXJDb250cm9scyxcclxuICAgIEJvb2tpbmdDYWxlbmRhckl0ZW0sXHJcbiAgICBCb29raW5nQ2FsZW5kYXJMYW5lID0gRGVmYXVsdEJvb2tpbmdDYWxlbmRhckxhbmUsXHJcbiAgICBCb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtLFxyXG4gICAgQm9va2luZ0NhbGVuZGFyR3JpZCA9IERlZmF1bHRCb29raW5nQ2FsZW5kYXJHcmlkLFxyXG4gICAgQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlciA9IERlZmF1bHRCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyLFxyXG4gICAgQm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXIgPSBEZWZhdWx0Qm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXIsXHJcbiAgICBCb29raW5nQ2FsZW5kYXJEYXRlUGlja2VyID0gRGVmYXVsdEJvb2tpbmdDYWxlbmRhckRhdGVQaWNrZXIsXHJcbiAgICBib29raW5nQ2FsZW5kYXJUb3BMZWZ0SGVhZGVyLFxyXG4gICAgZmlsdGVyaW5nQnV0dG9uLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGxhbmVzID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+XHJcbiAgICAgIHNwbGl0Qm9va2luZ3NUb0xhbmVzPFQsIFRMYW5lRGF0YT4oXHJcbiAgICAgICAgYm9va2luZ3MsXHJcbiAgICAgICAgZnJvbSxcclxuICAgICAgICBtaW5MYW5lc0NvdW50LFxyXG4gICAgICAgIGxhbmVzU291cmNlLFxyXG4gICAgICAgIHVubWF0Y2hlZExhbmVzVG9Gcm9udFxyXG4gICAgICApLFxyXG4gICAgW2Jvb2tpbmdzLCBmcm9tLCBtaW5MYW5lc0NvdW50LCBsYW5lc1NvdXJjZSwgdW5tYXRjaGVkTGFuZXNUb0Zyb250XVxyXG4gICk7XHJcbiAgY29uc3QgeyBvYnNlcnZlLCBlbnRyeSB9ID0gdXNlRGltZW5zaW9uczxIVE1MRGl2RWxlbWVudD4oKTtcclxuICBjb25zdCB3aWR0aCA9IGVudHJ5Py50YXJnZXQ/LnNjcm9sbFdpZHRoID8/IDA7XHJcbiAgY29uc3QgeyBpdGVtczogZ3JpZEl0ZW1zLCBiZXN0U3RlcCB9ID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+XHJcbiAgICAgIGdlbmVyYXRlR3JpZEl0ZW1zKFxyXG4gICAgICAgIGZyb20sXHJcbiAgICAgICAgdGlsbCxcclxuICAgICAgICBzdGVwLFxyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGdyaWRBdmFpbGFibGVTdGVwcyxcclxuICAgICAgICBnb2FsR3JpZFdpZHRoUHgsXHJcbiAgICAgICAgZnJvbT8uY2xvbmUoKT8uc3RhcnRPZignZGF5JylcclxuICAgICAgKSxcclxuICAgIFtmcm9tLCB0aWxsLCBzdGVwLCB3aWR0aCwgZ3JpZEF2YWlsYWJsZVN0ZXBzLCBnb2FsR3JpZFdpZHRoUHhdXHJcbiAgKTtcclxuICBjb25zdCBvblNlbGVjdGVkID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoZGF0YTogQm9va2luZ0NhbGVuZGFyU2VsZWN0aW9uRGF0YSkgPT4ge1xyXG4gICAgICBpZiAoIWZyb20gfHwgIXRpbGwgfHwgIXdpZHRoIHx8ICFvblJhbmdlQ2hhbmdlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHNjcmVlblNwYWNlU3RhcnRYID0gTWF0aC5taW4oZGF0YS5vcmlnaW5bMF0sIGRhdGEudGFyZ2V0WzBdKTtcclxuICAgICAgY29uc3Qgc2NyZWVuU3BhY2VFbmRYID0gTWF0aC5tYXgoZGF0YS5vcmlnaW5bMF0sIGRhdGEudGFyZ2V0WzBdKTtcclxuICAgICAgY29uc3QgZHVyYXRpb25NcyA9IHRpbGwudmFsdWVPZigpIC0gZnJvbS52YWx1ZU9mKCk7XHJcbiAgICAgIGNvbnN0IHRvVGltZVNwYWNlID0gKG51bTogbnVtYmVyKSA9PiAobnVtIC8gKHdpZHRoIHx8IDEpKSAqIGR1cmF0aW9uTXM7XHJcbiAgICAgIGNvbnN0IHRpbWVTcGFjZVN0YXJ0ID0gZnJvbVxyXG4gICAgICAgIC5jbG9uZSgpXHJcbiAgICAgICAgLmFkZCh0b1RpbWVTcGFjZShzY3JlZW5TcGFjZVN0YXJ0WCksICdtcycpO1xyXG4gICAgICBjb25zdCB0aW1lU3BhY2VFbmQgPSBmcm9tLmNsb25lKCkuYWRkKHRvVGltZVNwYWNlKHNjcmVlblNwYWNlRW5kWCksICdtcycpO1xyXG4gICAgICBvblJhbmdlQ2hhbmdlKHsgZnJvbTogdGltZVNwYWNlU3RhcnQsIHRpbGw6IHRpbWVTcGFjZUVuZCB9KTtcclxuICAgIH0sXHJcbiAgICBbZnJvbSwgdGlsbCwgd2lkdGgsIG9uUmFuZ2VDaGFuZ2VdXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoYm9va2luZ0NhbGVuZGFyRGVmYXVsdENsYXNzZXMuY2xhc3NOYW1lLCBjbGFzc05hbWUpfVxyXG4gICAgPlxyXG4gICAgICA8Qm9va2luZ0NhbGVuZGFyQ29udHJvbHM8VD5cclxuICAgICAgICB7Li4uY29udHJvbHNDbGFzc2VzfVxyXG4gICAgICAgIGl0ZW1zPXtib29raW5nc31cclxuICAgICAgICBmcm9tPXtmcm9tfVxyXG4gICAgICAgIHRpbGw9e3RpbGx9XHJcbiAgICAgICAgb25SYW5nZUNoYW5nZT17b25SYW5nZUNoYW5nZX1cclxuICAgICAgICBzdGVwPXtzdGVwfVxyXG4gICAgICAgIGZpbHRlckJvb2tpbmdzVG9ab29tPXtmaWx0ZXJCb29raW5nc1RvWm9vbX1cclxuICAgICAgICB6b29tTGV2ZWxzPXt6b29tTGV2ZWxzfVxyXG4gICAgICAgIGZpbHRlcmluZ0J1dHRvbj17ZmlsdGVyaW5nQnV0dG9ufVxyXG4gICAgICAgIHNob3dab29tQWxsQnV0dG9uPXtzaG93Wm9vbUFsbEJ1dHRvbn1cclxuICAgICAgICBib29raW5nQ2FsZW5kYXJEYXRlUGlja2VyPXtcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHt0eXBlb2YgQm9va2luZ0NhbGVuZGFyRGF0ZVBpY2tlciA9PT0gJ2Z1bmN0aW9uJyA/IChcclxuICAgICAgICAgICAgICA8Qm9va2luZ0NhbGVuZGFyRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgZnJvbT17ZnJvbX1cclxuICAgICAgICAgICAgICAgIHRpbGw9e3RpbGx9XHJcbiAgICAgICAgICAgICAgICBvblJhbmdlQ2hhbmdlPXtvblJhbmdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgZ2V0TmV3TW9tZW50RnVuY3Rpb249e2dldE5ld01vbWVudEZ1bmN0aW9ufVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgQm9va2luZ0NhbGVuZGFyRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7ZnJvbS5mb3JtYXQoJ01NTU0nKX0sIHtmcm9tLmZvcm1hdCgnWVlZWScpfVxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgYm9va2luZ0NhbGVuZGFyRGVmYXVsdENsYXNzZXMudGFibGVDbGFzc05hbWUsXHJcbiAgICAgICAgICB0YWJsZUNsYXNzTmFtZVxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICB7c2hvd0dyaWQgJiYgKFxyXG4gICAgICAgICAgPEJvb2tpbmdDYWxlbmRhckdyaWRcclxuICAgICAgICAgICAgaXRlbXM9e2dyaWRJdGVtc31cclxuICAgICAgICAgICAgZGF0YVJvd3NDb3VudD17bGFuZXMubGVuZ3RofVxyXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3Nob3dTZWxlY3Rpb24gJiYgKFxyXG4gICAgICAgICAgPEJvb2tpbmdDYWxlbmRhclNlbGVjdGlvblxyXG4gICAgICAgICAgICBkYXRhUm93c0NvdW50PXtsYW5lcy5sZW5ndGh9XHJcbiAgICAgICAgICAgIG9uU2VsZWN0ZWQ9e29uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgIG1pblNlbGVjdGlvblNpemU9e21pblNlbGVjdGlvblNpemV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICBib29raW5nQ2FsZW5kYXJEZWZhdWx0Q2xhc3Nlcy5sYW5lc0hlYWRlckhlYWRlckNvbnRhaW5lckNsYXNzTmFtZSxcclxuICAgICAgICAgICAgbGFuZXNIZWFkZXJIZWFkZXJDb250YWluZXJDbGFzc05hbWVcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2Jvb2tpbmdDYWxlbmRhclRvcExlZnRIZWFkZXJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICBib29raW5nQ2FsZW5kYXJEZWZhdWx0Q2xhc3Nlcy5sYW5lc0hlYWRlckNvbnRhaW5lckNsYXNzTmFtZSxcclxuICAgICAgICAgICAgbGFuZXNIZWFkZXJDb250YWluZXJDbGFzc05hbWVcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICByZWY9e29ic2VydmV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyPFQ+XHJcbiAgICAgICAgICAgIHsuLi5jb250cm9sc0NsYXNzZXN9XHJcbiAgICAgICAgICAgIGZyb209e2Zyb219XHJcbiAgICAgICAgICAgIHRpbGw9e3RpbGx9XHJcbiAgICAgICAgICAgIG9uUmFuZ2VDaGFuZ2U9e29uUmFuZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7bGFuZXMubWFwKChsYW5lLCBsYW5lSW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IExhbmVCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyID1cclxuICAgICAgICAgICAgbGFuZS5Cb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyID8/IEJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXI7XHJcbiAgICAgICAgICBjb25zdCBMYW5lQm9va2luZ0NhbGVuZGFyTGFuZSA9XHJcbiAgICAgICAgICAgIGxhbmUuQm9va2luZ0NhbGVuZGFyTGFuZSA/PyBCb29raW5nQ2FsZW5kYXJMYW5lO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17bGFuZUluZGV4fT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAgIGJvb2tpbmdDYWxlbmRhckRlZmF1bHRDbGFzc2VzLmxhbmVIZWFkZXJDb250YWluZXJDbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICAgIGxhbmVIZWFkZXJDb250YWluZXJDbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICAgIGxhbmUucm93Q2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgW2Ake2Jvb2tpbmdDYWxlbmRhckRlZmF1bHRDbGFzc2VzLmxhbmVIZWFkZXJDb250YWluZXJDbGFzc05hbWV9LS1sYXN0YF06XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYW5lSW5kZXggPT09IGxhbmVzLmxlbmd0aCAtIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgW2Ake2Jvb2tpbmdDYWxlbmRhckRlZmF1bHRDbGFzc2VzLmxhbmVIZWFkZXJDb250YWluZXJDbGFzc05hbWV9LS1maXJzdGBdOlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFuZUluZGV4ID09PSAwLFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMYW5lQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlcjxUTGFuZURhdGE+XHJcbiAgICAgICAgICAgICAgICAgIGxhbmVLZXk9e2xhbmUubGFuZUtleSA/PyBsYW5lSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIGRhdGE9e2xhbmUuZGF0YX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgICBib29raW5nQ2FsZW5kYXJEZWZhdWx0Q2xhc3Nlcy5sYW5lQ29udGFpbmVyQ2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgICBsYW5lQ29udGFpbmVyQ2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgICBsYW5lLnJvd0NsYXNzTmFtZSxcclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFtgJHtib29raW5nQ2FsZW5kYXJEZWZhdWx0Q2xhc3Nlcy5sYW5lQ29udGFpbmVyQ2xhc3NOYW1lfS0tbGFzdGBdOlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFuZUluZGV4ID09PSBsYW5lcy5sZW5ndGggLSAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFtgJHtib29raW5nQ2FsZW5kYXJEZWZhdWx0Q2xhc3Nlcy5sYW5lQ29udGFpbmVyQ2xhc3NOYW1lfS0tZmlyc3RgXTpcclxuICAgICAgICAgICAgICAgICAgICAgIGxhbmVJbmRleCA9PT0gMCxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGFuZUJvb2tpbmdDYWxlbmRhckxhbmVcclxuICAgICAgICAgICAgICAgICAgbGFuZUluZGV4PXtsYW5lSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zPXtsYW5lLml0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICBmcm9tPXtmcm9tfVxyXG4gICAgICAgICAgICAgICAgICB0aWxsPXt0aWxsfVxyXG4gICAgICAgICAgICAgICAgICBCb29raW5nQ2FsZW5kYXJJdGVtPXtcclxuICAgICAgICAgICAgICAgICAgICBsYW5lLkJvb2tpbmdDYWxlbmRhckl0ZW0gPz8gQm9va2luZ0NhbGVuZGFySXRlbVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIEJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW09e1xyXG4gICAgICAgICAgICAgICAgICAgIGxhbmUuQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbSA/PyBCb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgc3RlcD17c3RlcH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxkaXYgLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEJvb2tpbmdDYWxlbmRhclRpbWVBeGlzXHJcbiAgICAgICAgICAgIGl0ZW1zPXtncmlkSXRlbXN9XHJcbiAgICAgICAgICAgIGJlc3RTdGVwPXtiZXN0U3RlcH1cclxuICAgICAgICAgICAgZ2V0TW9tZW50Rm9ybWF0RnVuY3Rpb249e2dldE1vbWVudEZvcm1hdEZ1bmN0aW9ufVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IG1vbWVudCwgeyBNb21lbnQsIER1cmF0aW9uIH0gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFySXRlbVByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJJdGVtJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyTGFuZVByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJMYW5lJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlclByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbVByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtJztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJJdGVtVCxcclxuICBCb29raW5nQ2FsZW5kYXJJdGVtV2l0aE9yaWdpbmFsSW5kZXhULFxyXG59IGZyb20gJy4vY29tbW9uJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBncm91cEJ5PFQ+KGl0ZW1zOiBUW10sIGl0ZXJhdG9yOiAoaXRlbTogVCkgPT4gbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGl0ZW1zLnJlZHVjZSgob2JqLCBpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBrZXkgPSBpdGVyYXRvcihpdGVtKTtcclxuICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgb2JqW2tleV0gPSBbXTtcclxuICAgIH1cclxuICAgIG9ialtrZXldLnB1c2goaXRlbSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH0sIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYW5lU291cmNlRGF0YTxUIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVQsIFRMYW5lRGF0YT4ge1xyXG4gIGxhbmVLZXk6IG51bWJlcjtcclxuICBkYXRhPzogVExhbmVEYXRhO1xyXG4gIHJvd0NsYXNzTmFtZT86IHN0cmluZztcclxuICBCb29raW5nQ2FsZW5kYXJJdGVtPzogUmVhY3QuQ29tcG9uZW50VHlwZTxCb29raW5nQ2FsZW5kYXJJdGVtUHJvcHM8VD4+O1xyXG4gIEJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW0/OiBSZWFjdC5Db21wb25lbnRUeXBlPFxyXG4gICAgQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbVByb3BzPFQ+XHJcbiAgPjtcclxuICBCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyPzogUmVhY3QuQ29tcG9uZW50VHlwZTxcclxuICAgIEJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXJQcm9wczxUTGFuZURhdGE+XHJcbiAgPjtcclxuICBCb29raW5nQ2FsZW5kYXJMYW5lPzogUmVhY3QuQ29tcG9uZW50VHlwZTxCb29raW5nQ2FsZW5kYXJMYW5lUHJvcHM8VD4+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExhbmVEYXRhPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVCwgVExhbmVEYXRhPlxyXG4gIGV4dGVuZHMgTGFuZVNvdXJjZURhdGE8VCwgVExhbmVEYXRhPiB7XHJcbiAgaXRlbXM6IFRbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0Qm9va2luZ3NUb0xhbmVzPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVCwgVExhbmVEYXRhPihcclxuICBib29raW5nczogVFtdLFxyXG4gIGZyb206IE1vbWVudCxcclxuICBtaW5MYW5lc0NvdW50OiBudW1iZXIsXHJcbiAgbGFuZXNTb3VyY2U6IExhbmVTb3VyY2VEYXRhPFQsIFRMYW5lRGF0YT5bXSA9IFtdLFxyXG4gIHVubWF0Y2hlZFRvRnJvbnQgPSB0cnVlXHJcbikge1xyXG4gIGlmICghYm9va2luZ3MpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgbGV0IGxhbmVzOiBMYW5lRGF0YTxULCBUTGFuZURhdGE+W10gPSBbXTtcclxuICBpZiAobGFuZXNTb3VyY2U/Lmxlbmd0aCkge1xyXG4gICAgbGFuZXMgPSBsYW5lc1NvdXJjZS5tYXAoKHNvdXJjZSkgPT4gKHtcclxuICAgICAgLi4uc291cmNlLFxyXG4gICAgICBpdGVtczogW10sXHJcbiAgICB9KSk7XHJcbiAgfVxyXG4gIGNvbnN0IGJvb2tpbmdzV2l0aG91dExhbmVLZXkgPSBib29raW5ncy5maWx0ZXIoXHJcbiAgICAoYSkgPT4gYS5sYW5lS2V5ID09PSB1bmRlZmluZWRcclxuICApO1xyXG4gIGNvbnN0IGJvb2tpbmdzV2l0aExhbmVLZXkgPSBib29raW5ncy5maWx0ZXIoKGEpID0+IGEubGFuZUtleSAhPT0gdW5kZWZpbmVkKTtcclxuICBpZiAoYm9va2luZ3NXaXRoTGFuZUtleS5sZW5ndGgpIHtcclxuICAgIGNvbnN0IGdyb3VwZWQgPSBncm91cEJ5KFxyXG4gICAgICBib29raW5nc1dpdGhMYW5lS2V5Lm1hcCgoYm9va2luZywgb3JpZ2luYWxJbmRleCkgPT4gKHtcclxuICAgICAgICAuLi5ib29raW5nLFxyXG4gICAgICAgIG9yaWdpbmFsSW5kZXgsXHJcbiAgICAgIH0pKSxcclxuICAgICAgKGEpID0+IGEubGFuZUtleVxyXG4gICAgKTtcclxuICAgIGxhbmVzID0gT2JqZWN0LmtleXMoZ3JvdXBlZCkubWFwKChrZXkpID0+ICh7XHJcbiAgICAgIGxhbmVLZXk6IE51bWJlcihrZXkpLFxyXG4gICAgICBpdGVtczogZ3JvdXBlZFtrZXldLFxyXG4gICAgICAuLi5sYW5lc1NvdXJjZT8uZmluZCgoYSkgPT4gYS5sYW5lS2V5ID09PSBOdW1iZXIoa2V5KSksXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBtaXNzaW5nTGFuZXMgPSBsYW5lc1NvdXJjZT8uZmlsdGVyKFxyXG4gICAgICAoYSkgPT4gIWxhbmVzLnNvbWUoKGwpID0+IGwubGFuZUtleSA9PT0gYS5sYW5lS2V5KVxyXG4gICAgKTtcclxuICAgIGxhbmVzID0gbGFuZXMuY29uY2F0KG1pc3NpbmdMYW5lcy5tYXAoKGEpID0+ICh7IC4uLmEsIGl0ZW1zOiBbXSB9KSkpO1xyXG4gIH1cclxuICBpZiAoYm9va2luZ3NXaXRob3V0TGFuZUtleS5sZW5ndGgpIHtcclxuICAgIGxldCByZW1haW5pbmdCb29raW5nczogKFQgJiBCb29raW5nQ2FsZW5kYXJJdGVtV2l0aE9yaWdpbmFsSW5kZXhUKVtdID1cclxuICAgICAgYm9va2luZ3NXaXRob3V0TGFuZUtleVxyXG4gICAgICAgIC5tYXAoKGJvb2tpbmcsIG9yaWdpbmFsSW5kZXgpID0+ICh7IC4uLmJvb2tpbmcsIG9yaWdpbmFsSW5kZXggfSkpXHJcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZnJvbS52YWx1ZU9mKCkgLSBiLmZyb20udmFsdWVPZigpKTtcclxuICAgIHdoaWxlIChyZW1haW5pbmdCb29raW5ncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBtaW4gPSA5OTk5OTk5OTk5OTk5OTtcclxuICAgICAgbGV0IGJvb2tpbmdJbmRleCA9IC0xO1xyXG4gICAgICBsZXQgbGFuZUluZGV4ID0gLTE7XHJcbiAgICAgIGxhbmVzLmZvckVhY2goKGxhbmUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGxhbmVzU291cmNlPy5zb21lKChsKSA9PiBsLmxhbmVLZXkgPT09IGxhbmUubGFuZUtleSkpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGFzdFRpbGwgPSBsYW5lLml0ZW1zW2xhbmUuaXRlbXMubGVuZ3RoIC0gMV0/LnRpbGwgPz8gZnJvbTtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZXMgPSByZW1haW5pbmdCb29raW5ncy5tYXAoKGJvb2tpbmcpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRpc3QgPSBib29raW5nLmZyb20uZGlmZihsYXN0VGlsbCk7XHJcbiAgICAgICAgICBpZiAobGFuZS5pdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKGRpc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGRpc3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgX21pbiA9IE1hdGgubWluKC4uLmRpc3RhbmNlcy5maWx0ZXIoKGEpID0+IGEgPj0gMCkpO1xyXG4gICAgICAgIGlmIChfbWluIDwgbWluKSB7XHJcbiAgICAgICAgICBib29raW5nSW5kZXggPSBkaXN0YW5jZXMuaW5kZXhPZihfbWluKTtcclxuICAgICAgICAgIGxhbmVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChib29raW5nSW5kZXggPj0gMCAmJiBsYW5lSW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxhbmVzW2xhbmVJbmRleF0uaXRlbXMgPSBsYW5lc1tsYW5lSW5kZXhdLml0ZW1zLmNvbmNhdCh7XHJcbiAgICAgICAgICAuLi5yZW1haW5pbmdCb29raW5nc1tib29raW5nSW5kZXhdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlbWFpbmluZ0Jvb2tpbmdzLnNwbGljZShib29raW5nSW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxhbmVzID0gbGFuZXMuY29uY2F0KHtcclxuICAgICAgICAgIGl0ZW1zOiBbeyAuLi5yZW1haW5pbmdCb29raW5nc1swXSB9XSxcclxuICAgICAgICAgIGxhbmVLZXk6IGxhbmVzLmxlbmd0aCxcclxuICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZW1haW5pbmdCb29raW5ncy5zaGlmdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBOYWl2ZSBzb2x1dGlvbiB0aGF0IGlzIG11Y2ggbGVzcyBjb21wdXRhdGlvbmFsbHkgaW50ZW5zaXZlIGJ1dCB5aWVsZHMgbW9yZSBsYW5lcyB0aGFuIG5lY2Vzc2FyeVxyXG4gICAgLypib29raW5ncy5mb3JFYWNoKChib29raW5nLCBvcmlnaW5hbEluZGV4KSA9PiB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGxhbmVzLmZvckVhY2goKGxhbmUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICghbGFuZS5zb21lKGkgPT4gaXRlbXNPdmVybGFwKGJvb2tpbmcsIGkpKSkge1xyXG4gICAgICAgIGxhbmVzW2luZGV4XSA9IGxhbmVzW2luZGV4XS5jb25jYXQoeyAuLi5ib29raW5nLCBvcmlnaW5hbEluZGV4IH0pO1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIGxhbmVzID0gbGFuZXMuY29uY2F0KFtbeyAuLi5ib29raW5nLCBvcmlnaW5hbEluZGV4IH1dXSk7XHJcbiAgICB9XHJcbiAgfSk7Ki9cclxuICB9XHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxhbmVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY29uc3QgbGFuZSA9IGxhbmVzW2luZGV4XTtcclxuICAgIGxhbmVzW2luZGV4XS5pdGVtcyA9IGxhbmUuaXRlbXMuc29ydChcclxuICAgICAgKGEsIGIpID0+IGEuZnJvbS52YWx1ZU9mKCkgLSBiLmZyb20udmFsdWVPZigpXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAobGFuZXMubGVuZ3RoIDwgbWluTGFuZXNDb3VudCkge1xyXG4gICAgbGFuZXMgPSBsYW5lcy5jb25jYXQoXHJcbiAgICAgIG5ldyBBcnJheTxMYW5lRGF0YTxULCBUTGFuZURhdGE+PihtaW5MYW5lc0NvdW50IC0gbGFuZXMubGVuZ3RoKVxyXG4gICAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgICAgLm1hcCgoXywgaW5kZXgpID0+ICh7XHJcbiAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICBsYW5lS2V5OiBpbmRleCArIGxhbmVzLmxlbmd0aCxcclxuICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgfSkpXHJcbiAgICApO1xyXG4gIH1cclxuICBjb25zdCBmaW5kSW5kZXggPSAoXHJcbiAgICBhcnI6IChMYW5lRGF0YTxULCBUTGFuZURhdGE+IHwgTGFuZVNvdXJjZURhdGE8VCwgVExhbmVEYXRhPilbXSxcclxuICAgIGxhbmVLZXk6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bWJlclxyXG4gICk6IG51bWJlciA9PiB7XHJcbiAgICBjb25zdCB1bm1hdGNoZWRWYWwgPSB1bm1hdGNoZWRUb0Zyb250XHJcbiAgICAgID8gTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVJcclxuICAgICAgOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgIGlmICghbGFuZUtleSkge1xyXG4gICAgICByZXR1cm4gdW5tYXRjaGVkVmFsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW5kZXggPSBhcnIuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmxhbmVLZXkgPT09IGxhbmVLZXkpO1xyXG4gICAgcmV0dXJuIGluZGV4ID09PSAtMSA/IHVubWF0Y2hlZFZhbCA6IGluZGV4O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNvcnRBcnJheUJ5TGFuZUtleXMgPSAoXHJcbiAgICByZWZlcmVuY2VBcnJheTogTGFuZVNvdXJjZURhdGE8VCwgVExhbmVEYXRhPltdLFxyXG4gICAgYXJyYXlUb1NvcnQ6IExhbmVEYXRhPFQsIFRMYW5lRGF0YT5bXVxyXG4gICk6IExhbmVEYXRhPFQsIFRMYW5lRGF0YT5bXSA9PiB7XHJcbiAgICByZXR1cm4gWy4uLmFycmF5VG9Tb3J0XS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4QSA9IGZpbmRJbmRleChyZWZlcmVuY2VBcnJheSwgYS5sYW5lS2V5KTtcclxuICAgICAgY29uc3QgaW5kZXhCID0gZmluZEluZGV4KHJlZmVyZW5jZUFycmF5LCBiLmxhbmVLZXkpO1xyXG4gICAgICByZXR1cm4gaW5kZXhBIC0gaW5kZXhCO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBsYW5lcyA9IHNvcnRBcnJheUJ5TGFuZUtleXMobGFuZXNTb3VyY2UsIGxhbmVzKTtcclxuICByZXR1cm4gbGFuZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpdGVtc092ZXJsYXA8VCBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckl0ZW1UPihhOiBULCBiOiBUKSB7XHJcbiAgaWYgKCFhPy5mcm9tIHx8ICFhPy50aWxsIHx8ICFiPy5mcm9tIHx8ICFiPy50aWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChiLnRpbGwuaXNCZWZvcmUoYS5mcm9tKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoYi5mcm9tLmlzQWZ0ZXIoYS50aWxsKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEl0ZW1Qb3NpdGlvblN0eWxlID0gKG1hcmdpblN0YXJ0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIpID0+XHJcbiAgKHtcclxuICAgIG1hcmdpbkxlZnQ6IGAke21hcmdpblN0YXJ0ICogMTAwfSVgLFxyXG4gICAgd2lkdGg6IGAke3dpZHRoICogMTAwfSVgLFxyXG4gIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllcyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSXRlbXNEaW1lbnNpb25zPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVD4oXHJcbiAgaXRlbXM6IFRbXSxcclxuICBmcm9tOiBNb21lbnQsXHJcbiAgdGlsbDogTW9tZW50XHJcbikge1xyXG4gIGxldCBsYXN0RW5kID0gMDtcclxuICBjb25zdCB3aWR0aE1zID0gdGlsbC52YWx1ZU9mKCkgLSBmcm9tLnZhbHVlT2YoKTtcclxuICBjb25zdCBzdGFydE1zID0gZnJvbS52YWx1ZU9mKCk7XHJcbiAgY29uc3QgZW5kTXMgPSB0aWxsLnZhbHVlT2YoKTtcclxuICByZXR1cm4gd2lkdGhNcyA+IDBcclxuICAgID8gaXRlbXM/Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0SXNDdXQgPSBpdGVtLmZyb20udmFsdWVPZigpIDwgc3RhcnRNcztcclxuICAgICAgICBjb25zdCByZWFsU3RhcnQgPSAoaXRlbS5mcm9tLnZhbHVlT2YoKSAtIHN0YXJ0TXMpIC8gd2lkdGhNcztcclxuICAgICAgICBjb25zdCByZWFsRnJvbSA9IHN0YXJ0SXNDdXQgPyBtb21lbnQoc3RhcnRNcykgOiBtb21lbnQoaXRlbS5mcm9tKTtcclxuICAgICAgICBjb25zdCBzdGFydCA9IHN0YXJ0SXNDdXQgPyAwIDogcmVhbFN0YXJ0O1xyXG4gICAgICAgIGNvbnN0IGVuZElzQ3V0ID0gaXRlbS50aWxsLnZhbHVlT2YoKSA+IGVuZE1zO1xyXG4gICAgICAgIGNvbnN0IHJlYWxFbmQgPSAoaXRlbS50aWxsLnZhbHVlT2YoKSAtIHN0YXJ0TXMpIC8gd2lkdGhNcztcclxuICAgICAgICBjb25zdCBlbmQgPSBlbmRJc0N1dCA/IChlbmRNcyAtIHN0YXJ0TXMpIC8gd2lkdGhNcyA6IHJlYWxFbmQ7XHJcbiAgICAgICAgY29uc3QgcmVhbFRpbGwgPSBlbmRJc0N1dCA/IG1vbWVudChlbmRNcykgOiBtb21lbnQoaXRlbS50aWxsKTtcclxuICAgICAgICBjb25zdCBtYXJnaW5TdGFydCA9IHN0YXJ0IC0gbGFzdEVuZDtcclxuICAgICAgICBsYXN0RW5kID0gKGl0ZW0udGlsbC52YWx1ZU9mKCkgLSBzdGFydE1zKSAvIHdpZHRoTXM7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICBzdGFydCxcclxuICAgICAgICAgIHJlYWxTdGFydCxcclxuICAgICAgICAgIHJlYWxGcm9tLFxyXG4gICAgICAgICAgc3RhcnRJc0N1dCxcclxuICAgICAgICAgIHdpZHRoOiBlbmQgLSBzdGFydCxcclxuICAgICAgICAgIGVuZCxcclxuICAgICAgICAgIHJlYWxFbmQsXHJcbiAgICAgICAgICByZWFsVGlsbCxcclxuICAgICAgICAgIGVuZElzQ3V0LFxyXG4gICAgICAgICAgbWFyZ2luU3RhcnQsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgIDogW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNvbnRyb2xJdGVtcyA9IChcclxuICBmcm9tOiBNb21lbnQsXHJcbiAgdGlsbDogTW9tZW50LFxyXG4gIHN0ZXA6IER1cmF0aW9uLFxyXG4gIHN0YXJ0T2ZTdGVwOiBNb21lbnRcclxuKSA9PiB7XHJcbiAgaWYgKCFmcm9tIHx8ICF0aWxsIHx8ICFzdGVwKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGxldCBzdGVwcyA9IE1hdGgubWF4KFxyXG4gICAgTWF0aC5jZWlsKCh0aWxsLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpKSAvIHN0ZXAuYXNNaWxsaXNlY29uZHMoKSksXHJcbiAgICAyXHJcbiAgKTtcclxuICBsZXQgc3VidHJhY3QgPVxyXG4gICAgKHN0YXJ0T2ZTdGVwLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpKSAlIHN0ZXAuYXNNaWxsaXNlY29uZHMoKTtcclxuICBpZiAoc3VidHJhY3QgPiAwKSB7XHJcbiAgICBzdWJ0cmFjdCAtPSBzdGVwLmFzTWlsbGlzZWNvbmRzKCk7XHJcbiAgfVxyXG4gIGlmICh0aWxsLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpID4gc3RlcC5hc01pbGxpc2Vjb25kcygpKSB7XHJcbiAgICBzdGVwcyArPSAxO1xyXG4gIH1cclxuICByZXR1cm4gbmV3IEFycmF5KHN0ZXBzKS5maWxsKDApLm1hcCgoXywgaW5kZXgpID0+ICh7XHJcbiAgICBmcm9tOiBmcm9tXHJcbiAgICAgIC5jbG9uZSgpXHJcbiAgICAgIC5hZGQoc3VidHJhY3QpXHJcbiAgICAgIC5hZGQoc3RlcC5hc01pbGxpc2Vjb25kcygpICogaW5kZXgpLFxyXG4gICAgdGlsbDogZnJvbVxyXG4gICAgICAuY2xvbmUoKVxyXG4gICAgICAuYWRkKHN1YnRyYWN0KVxyXG4gICAgICAuYWRkKHN0ZXAuYXNNaWxsaXNlY29uZHMoKSAqIChpbmRleCArIDEpKSxcclxuICB9KSk7XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRJdGVtIHtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgZGF0ZTogTW9tZW50O1xyXG4gIHN0ZXBQcm9wb3J0aW9uOiBudW1iZXI7XHJcbiAgb3BhY2l0eTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVHcmlkSXRlbXMgPSAoXHJcbiAgZnJvbTogTW9tZW50LFxyXG4gIHRpbGw6IE1vbWVudCxcclxuICBzdGVwOiBEdXJhdGlvbixcclxuICBjb250YWluZXJXaWR0aFB4OiBudW1iZXIsXHJcbiAgYXZhaWxhYmxlU3RlcHM6IER1cmF0aW9uW10sXHJcbiAgZ29hbEdyaWRXaWR0aFB4OiBudW1iZXIsXHJcbiAgc3RhcnRPZlN0ZXA6IE1vbWVudFxyXG4pOiB7IGl0ZW1zOiBHcmlkSXRlbVtdOyBiZXN0U3RlcDogRHVyYXRpb24gfSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgIWZyb20gfHxcclxuICAgICF0aWxsIHx8XHJcbiAgICAhY29udGFpbmVyV2lkdGhQeCB8fFxyXG4gICAgIWF2YWlsYWJsZVN0ZXBzPy5sZW5ndGggfHxcclxuICAgICFnb2FsR3JpZFdpZHRoUHggfHxcclxuICAgICFzdGVwIHx8XHJcbiAgICAhc3RhcnRPZlN0ZXBcclxuICApIHtcclxuICAgIHJldHVybiB7IGJlc3RTdGVwOiBhdmFpbGFibGVTdGVwcz8uWzBdLCBpdGVtczogW10gfTtcclxuICB9XHJcbiAgY29uc3Qgc3RlcE1zID0gc3RlcC5hc01pbGxpc2Vjb25kcygpO1xyXG4gIGNvbnN0IGZyb21NcyA9IGZyb20udmFsdWVPZigpO1xyXG4gIGNvbnN0IHRpbGxNcyA9IHRpbGwudmFsdWVPZigpO1xyXG4gIGNvbnN0IHRpbWVMZW5ndGhNcyA9IHRpbGxNcyAtIGZyb21NcztcclxuICBjb25zdCBhcHByb3hpbWF0ZVN0ZXBzQ291bnQgPSBjb250YWluZXJXaWR0aFB4IC8gZ29hbEdyaWRXaWR0aFB4O1xyXG4gIGNvbnN0IGFwcHJveGltYXRlU3RlcE1zID0gdGltZUxlbmd0aE1zIC8gYXBwcm94aW1hdGVTdGVwc0NvdW50O1xyXG4gIGNvbnN0IGF2YWlsYWJsZVN0ZXBzRGlzdGFuY2VzTXMgPSBhdmFpbGFibGVTdGVwcy5tYXAoKGEpID0+XHJcbiAgICBNYXRoLmFicyhhLmFzTWlsbGlzZWNvbmRzKCkgLSBhcHByb3hpbWF0ZVN0ZXBNcylcclxuICApO1xyXG4gIGNvbnN0IHNtYWxsZXN0RGlzdGFuY2UgPSBNYXRoLm1pbiguLi5hdmFpbGFibGVTdGVwc0Rpc3RhbmNlc01zKTtcclxuICBjb25zdCBiZXN0U3RlcEluZGV4ID0gYXZhaWxhYmxlU3RlcHNEaXN0YW5jZXNNcy5maW5kSW5kZXgoXHJcbiAgICAoYSkgPT4gYSA9PT0gc21hbGxlc3REaXN0YW5jZVxyXG4gICk7XHJcbiAgY29uc3QgYmVzdFN0ZXAgPSBhdmFpbGFibGVTdGVwc1tiZXN0U3RlcEluZGV4XTtcclxuICBjb25zdCBzdWJ0cmFjdCA9XHJcbiAgICAoZnJvbU1zICsgZnJvbS51dGNPZmZzZXQoKSAqIDYwICogMTAwMCkgJSBiZXN0U3RlcC5hc01pbGxpc2Vjb25kcygpO1xyXG4gIGxldCBzdGFydE1zID0gZnJvbU1zIC0gc3VidHJhY3Q7XHJcbiAgbGV0IHN0ZXBzOiBNb21lbnRbXSA9IFtdO1xyXG4gIHdoaWxlIChzdGFydE1zIDw9IHRpbGxNcykge1xyXG4gICAgc3RlcHMgPSBzdGVwcy5jb25jYXQoZnJvbS5jbG9uZSgpLmFkZChzdGFydE1zIC0gZnJvbU1zLCAnbXMnKSk7XHJcbiAgICBzdGFydE1zICs9IGJlc3RTdGVwLmFzTWlsbGlzZWNvbmRzKCk7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBpdGVtczogc3RlcHNcclxuICAgICAgLmZpbHRlcigoYSkgPT4gYS52YWx1ZU9mKCkgPiBmcm9tTXMgJiYgYS52YWx1ZU9mKCkgPCB0aWxsTXMpXHJcbiAgICAgIC5tYXAoKGRhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBzdGVwUHJvcG9ydGlvbiA9XHJcbiAgICAgICAgICAoKGRhdGUudmFsdWVPZigpICsgZnJvbS51dGNPZmZzZXQoKSAqIDYwICogMTAwMCkgJSBzdGVwTXMpIC8gc3RlcE1zO1xyXG4gICAgICAgIGxldCBudW1iZXJPZlJvb3RzID0gMDtcclxuICAgICAgICBsZXQgY3VycmVudCA9IHN0ZXBQcm9wb3J0aW9uO1xyXG4gICAgICAgIGxldCBjdXJyZW50VG9wID0gMTtcclxuICAgICAgICBsZXQgdG9sZXJhbmNlID0gMC4wMDE7XHJcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQgPiB0b2xlcmFuY2UgJiYgY3VycmVudCA8IGN1cnJlbnRUb3AgLSB0b2xlcmFuY2UpIHtcclxuICAgICAgICAgIG51bWJlck9mUm9vdHMgKz0gMTtcclxuICAgICAgICAgIGN1cnJlbnRUb3AgPSAxIC8gTWF0aC5wb3coMiwgbnVtYmVyT2ZSb290cyk7XHJcbiAgICAgICAgICBpZiAoY3VycmVudCA+IGN1cnJlbnRUb3ApIHtcclxuICAgICAgICAgICAgY3VycmVudCAtPSBjdXJyZW50VG9wO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbGVmdDogKGRhdGUudmFsdWVPZigpIC0gZnJvbU1zKSAvIHRpbWVMZW5ndGhNcyxcclxuICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICBzdGVwUHJvcG9ydGlvbixcclxuICAgICAgICAgIG9wYWNpdHk6IDEgLyAobnVtYmVyT2ZSb290cyB8fCAxKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KSxcclxuICAgIGJlc3RTdGVwLFxyXG4gIH07XHJcbn07XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjgwNDFiZWZhNmI5MmQ2YzZmNGMwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiYm9va2luZ0NhbGVuZGFyRGVmYXVsdENsYXNzZXMiLCJjbGFzc05hbWVzIiwiZGVmYXVsdEdldE1vbWVudEZvcm1hdEZ1bmN0aW9uIiwiQm9va2luZ0NhbGVuZGFyQ29udHJvbHMiLCJEZWZhdWx0Qm9va2luZ0NhbGVuZGFyQ29udHJvbHMiLCJnZW5lcmF0ZUdyaWRJdGVtcyIsInNwbGl0Qm9va2luZ3NUb0xhbmVzIiwiQm9va2luZ0NhbGVuZGFyTGFuZSIsIkRlZmF1bHRCb29raW5nQ2FsZW5kYXJMYW5lIiwiZHVyYXRpb24iLCJCb29raW5nQ2FsZW5kYXJHcmlkIiwiRGVmYXVsdEJvb2tpbmdDYWxlbmRhckdyaWQiLCJCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyIiwiRGVmYXVsdEJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXIiLCJCb29raW5nQ2FsZW5kYXJMYW5lc0hlYWRlciIsIkRlZmF1bHRCb29raW5nQ2FsZW5kYXJMYW5lc0hlYWRlciIsIkJvb2tpbmdDYWxlbmRhckRhdGVQaWNrZXIiLCJEZWZhdWx0Qm9va2luZ0NhbGVuZGFyRGF0ZVBpY2tlciIsImRlZmF1bHRHZXROZXdNb21lbnRGdW5jdGlvbiIsImRlZmF1bHRHcmlkQXZhaWxhYmxlU3RlcHMiLCJCb29raW5nQ2FsZW5kYXJUaW1lQXhpcyIsInVzZURpbWVuc2lvbnMiLCJCb29raW5nQ2FsZW5kYXJTZWxlY3Rpb24iLCJkZWZhdWx0U3RlcCIsIkJvb2tpbmdDYWxlbmRhciIsInByb3BzIiwiX2VudHJ5JHRhcmdldCRzY3JvbGxXIiwiX2VudHJ5JHRhcmdldCIsImJvb2tpbmdzIiwiY2xhc3NOYW1lIiwibGFuZUNvbnRhaW5lckNsYXNzTmFtZSIsImxhbmVIZWFkZXJDb250YWluZXJDbGFzc05hbWUiLCJsYW5lc0hlYWRlckNvbnRhaW5lckNsYXNzTmFtZSIsImxhbmVzSGVhZGVySGVhZGVyQ29udGFpbmVyQ2xhc3NOYW1lIiwiY29udHJvbHNDbGFzc2VzIiwidGFibGVDbGFzc05hbWUiLCJmcm9tIiwidGlsbCIsIm9uUmFuZ2VDaGFuZ2UiLCJfcHJvcHMkc3RlcCIsInN0ZXAiLCJfcHJvcHMkc2hvd0dyaWQiLCJzaG93R3JpZCIsIl9wcm9wcyRzaG93U2VsZWN0aW9uIiwic2hvd1NlbGVjdGlvbiIsIl9wcm9wcyRzaG93Wm9vbUFsbEJ1dCIsInNob3dab29tQWxsQnV0dG9uIiwiX3Byb3BzJGdyaWRBdmFpbGFibGVTIiwiZ3JpZEF2YWlsYWJsZVN0ZXBzIiwiX3Byb3BzJGdldE1vbWVudEZvcm1hIiwiZ2V0TW9tZW50Rm9ybWF0RnVuY3Rpb24iLCJfcHJvcHMkZ2V0TmV3TW9tZW50RnUiLCJnZXROZXdNb21lbnRGdW5jdGlvbiIsIl9wcm9wcyRnb2FsR3JpZFdpZHRoUCIsImdvYWxHcmlkV2lkdGhQeCIsIl9wcm9wcyRtaW5TZWxlY3Rpb25TaSIsIm1pblNlbGVjdGlvblNpemUiLCJtaW5MYW5lc0NvdW50IiwibGFuZXNTb3VyY2UiLCJfcHJvcHMkdW5tYXRjaGVkTGFuZXMiLCJ1bm1hdGNoZWRMYW5lc1RvRnJvbnQiLCJmaWx0ZXJCb29raW5nc1RvWm9vbSIsInpvb21MZXZlbHMiLCJfcHJvcHMkQm9va2luZ0NhbGVuZGEiLCJCb29raW5nQ2FsZW5kYXJJdGVtIiwiX3Byb3BzJEJvb2tpbmdDYWxlbmRhMiIsIkJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW0iLCJfcHJvcHMkQm9va2luZ0NhbGVuZGEzIiwiX3Byb3BzJEJvb2tpbmdDYWxlbmRhNCIsIl9wcm9wcyRCb29raW5nQ2FsZW5kYTUiLCJfcHJvcHMkQm9va2luZ0NhbGVuZGE2IiwiYm9va2luZ0NhbGVuZGFyVG9wTGVmdEhlYWRlciIsImZpbHRlcmluZ0J1dHRvbiIsImNoaWxkcmVuIiwibGFuZXMiLCJ1c2VNZW1vIiwiX3VzZURpbWVuc2lvbnMiLCJvYnNlcnZlIiwiZW50cnkiLCJ3aWR0aCIsInRhcmdldCIsInNjcm9sbFdpZHRoIiwiX1JlYWN0JHVzZU1lbW8iLCJfZnJvbSRjbG9uZSIsImNsb25lIiwic3RhcnRPZiIsImdyaWRJdGVtcyIsIml0ZW1zIiwiYmVzdFN0ZXAiLCJvblNlbGVjdGVkIiwidXNlQ2FsbGJhY2siLCJkYXRhIiwic2NyZWVuU3BhY2VTdGFydFgiLCJNYXRoIiwibWluIiwib3JpZ2luIiwic2NyZWVuU3BhY2VFbmRYIiwibWF4IiwiZHVyYXRpb25NcyIsInZhbHVlT2YiLCJ0b1RpbWVTcGFjZSIsIm51bSIsInRpbWVTcGFjZVN0YXJ0IiwiYWRkIiwidGltZVNwYWNlRW5kIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiYm9va2luZ0NhbGVuZGFyRGF0ZVBpY2tlciIsIkZyYWdtZW50IiwiZm9ybWF0IiwiZGF0YVJvd3NDb3VudCIsImxlbmd0aCIsInJlZiIsIm1hcCIsImxhbmUiLCJsYW5lSW5kZXgiLCJfbGFuZSRCb29raW5nQ2FsZW5kYXIiLCJfbGFuZSRCb29raW5nQ2FsZW5kYXIyIiwiX2NsYXNzTmFtZXMiLCJfbGFuZSRsYW5lS2V5IiwiX2NsYXNzTmFtZXMyIiwiX2xhbmUkQm9va2luZ0NhbGVuZGFyMyIsIl9sYW5lJEJvb2tpbmdDYWxlbmRhcjQiLCJMYW5lQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlciIsIkxhbmVCb29raW5nQ2FsZW5kYXJMYW5lIiwia2V5Iiwicm93Q2xhc3NOYW1lIiwiX2RlZmluZVByb3BlcnR5IiwiY29uY2F0IiwibGFuZUtleSIsIl9fc2lnbmF0dXJlX18iLCJyZWFjdEhvdExvYWRlciIsInJlYWN0SG90TG9hZGVyR2xvYmFsIiwiZGVmYXVsdCIsInVuZGVmaW5lZCIsInJlZ2lzdGVyIiwibGVhdmVNb2R1bGUiLCJtb2R1bGUiLCJtb21lbnQiLCJncm91cEJ5IiwiaXRlcmF0b3IiLCJyZWR1Y2UiLCJvYmoiLCJpdGVtIiwiaGFzT3duUHJvcGVydHkiLCJwdXNoIiwiYXJndW1lbnRzIiwidW5tYXRjaGVkVG9Gcm9udCIsInNvdXJjZSIsIl9vYmplY3RTcHJlYWQiLCJib29raW5nc1dpdGhvdXRMYW5lS2V5IiwiZmlsdGVyIiwiYSIsImJvb2tpbmdzV2l0aExhbmVLZXkiLCJncm91cGVkIiwiYm9va2luZyIsIm9yaWdpbmFsSW5kZXgiLCJPYmplY3QiLCJrZXlzIiwiTnVtYmVyIiwiZmluZCIsIm1pc3NpbmdMYW5lcyIsInNvbWUiLCJsIiwicmVtYWluaW5nQm9va2luZ3MiLCJzb3J0IiwiYiIsIl9sb29wIiwiYm9va2luZ0luZGV4IiwiZm9yRWFjaCIsImluZGV4IiwiX2xhbmUkaXRlbXMkdGlsbCIsIl9sYW5lJGl0ZW1zIiwibGFzdFRpbGwiLCJkaXN0YW5jZXMiLCJkaXN0IiwiZGlmZiIsImFicyIsIl9taW4iLCJhcHBseSIsIl90b0NvbnN1bWFibGVBcnJheSIsImluZGV4T2YiLCJzcGxpY2UiLCJzaGlmdCIsIkFycmF5IiwiZmlsbCIsIl8iLCJmaW5kSW5kZXgiLCJhcnIiLCJ1bm1hdGNoZWRWYWwiLCJNSU5fU0FGRV9JTlRFR0VSIiwiTUFYX1NBRkVfSU5URUdFUiIsInNvcnRBcnJheUJ5TGFuZUtleXMiLCJyZWZlcmVuY2VBcnJheSIsImFycmF5VG9Tb3J0IiwiaW5kZXhBIiwiaW5kZXhCIiwiaXRlbXNPdmVybGFwIiwiaXNCZWZvcmUiLCJpc0FmdGVyIiwiZ2V0SXRlbVBvc2l0aW9uU3R5bGUiLCJtYXJnaW5TdGFydCIsIm1hcmdpbkxlZnQiLCJjYWxjdWxhdGVJdGVtc0RpbWVuc2lvbnMiLCJsYXN0RW5kIiwid2lkdGhNcyIsInN0YXJ0TXMiLCJlbmRNcyIsInN0YXJ0SXNDdXQiLCJyZWFsU3RhcnQiLCJyZWFsRnJvbSIsInN0YXJ0IiwiZW5kSXNDdXQiLCJyZWFsRW5kIiwiZW5kIiwicmVhbFRpbGwiLCJnZW5lcmF0ZUNvbnRyb2xJdGVtcyIsInN0YXJ0T2ZTdGVwIiwic3RlcHMiLCJjZWlsIiwiYXNNaWxsaXNlY29uZHMiLCJzdWJ0cmFjdCIsImNvbnRhaW5lcldpZHRoUHgiLCJhdmFpbGFibGVTdGVwcyIsInN0ZXBNcyIsImZyb21NcyIsInRpbGxNcyIsInRpbWVMZW5ndGhNcyIsImFwcHJveGltYXRlU3RlcHNDb3VudCIsImFwcHJveGltYXRlU3RlcE1zIiwiYXZhaWxhYmxlU3RlcHNEaXN0YW5jZXNNcyIsInNtYWxsZXN0RGlzdGFuY2UiLCJiZXN0U3RlcEluZGV4IiwidXRjT2Zmc2V0IiwiZGF0ZSIsInN0ZXBQcm9wb3J0aW9uIiwibnVtYmVyT2ZSb290cyIsImN1cnJlbnQiLCJjdXJyZW50VG9wIiwidG9sZXJhbmNlIiwicG93IiwibGVmdCIsIm9wYWNpdHkiXSwic291cmNlUm9vdCI6IiJ9