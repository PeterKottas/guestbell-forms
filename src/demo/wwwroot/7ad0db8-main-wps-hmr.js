"use strict";
self["webpackHotUpdateguestbell_forms"]("main",{

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
    if (!laneKey) return -1;
    var index = arr.findIndex(function (item) {
      return item.laneKey === laneKey;
    });
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
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
/******/ 	__webpack_require__.h = () => ("446d0156e0dac87517e5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQzNDLElBQUlDLE9BQU8sR0FBR0MsVUFBVSxFQUFFO1VBQ3hCRCxPQUFPLElBQUlDLFVBQVU7UUFDdkI7TUFDRjtNQUNBLE9BQU87UUFDTEcsSUFBSSxFQUFFLENBQUNQLElBQUksQ0FBQ2hGLE9BQU8sQ0FBQyxDQUFDLEdBQUd1RSxNQUFNLElBQUlFLFlBQVk7UUFDOUNPLElBQUksRUFBSkEsSUFBSTtRQUNKQyxjQUFjLEVBQWRBLGNBQWM7UUFDZE8sT0FBTyxFQUFFLENBQUMsSUFBSU4sYUFBYSxJQUFJLENBQUM7TUFDbEMsQ0FBQztJQUNILENBQUMsQ0FBQztJQUNKYixRQUFRLEVBQVJBO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFBQztBQUFBO0VBQUEsSUFBQW9CLGNBQUEsVUFBQUMsb0JBQUEsbUJBQUFBLG9CQUFBLENBQUFDLE9BQUEsR0FBQW5ILFNBQUE7RUFBQSxLQUFBaUgsY0FBQTtJQUFBO0VBQUE7RUFBQUEsY0FBQSxDQUFBRyxRQUFBLENBeFVjcEksT0FBTztFQUFBaUksY0FBQSxDQUFBRyxRQUFBLENBOEJQM0gsb0JBQW9CO0VBQUF3SCxjQUFBLENBQUFHLFFBQUEsQ0FxSXBCekQsWUFBWTtFQUFBc0QsY0FBQSxDQUFBRyxRQUFBLENBYWZ0RCxvQkFBb0I7RUFBQW1ELGNBQUEsQ0FBQUcsUUFBQSxDQU1qQmxELHdCQUF3QjtFQUFBK0MsY0FBQSxDQUFBRyxRQUFBLENBc0MzQnJDLG9CQUFvQjtFQUFBa0MsY0FBQSxDQUFBRyxRQUFBLENBd0NwQjNCLGlCQUFpQjtBQUFBO0FBQUE7QUFBQTtFQUFBLElBQUE0QixXQUFBLFVBQUFILG9CQUFBLG1CQUFBQSxvQkFBQSxDQUFBRyxXQUFBLEdBQUFySCxTQUFBO0VBQUFxSCxXQUFBLElBQUFBLFdBQUEsQ0FBQUMsTUFBQTtBQUFBOzs7Ozs7OztVQzlROUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWVzdGJlbGwtZm9ybXMvLi9zcmMvbGliL2NvbXBvbmVudHMvYm9va2luZ0NhbGVuZGFyL3V0aWxzLnRzIiwid2VicGFjazovL2d1ZXN0YmVsbC1mb3Jtcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCwgeyBNb21lbnQsIER1cmF0aW9uIH0gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFySXRlbVByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJJdGVtJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyTGFuZVByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJMYW5lJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlclByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbVByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtJztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJJdGVtVCxcclxuICBCb29raW5nQ2FsZW5kYXJJdGVtV2l0aE9yaWdpbmFsSW5kZXhULFxyXG59IGZyb20gJy4vY29tbW9uJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBncm91cEJ5PFQ+KGl0ZW1zOiBUW10sIGl0ZXJhdG9yOiAoaXRlbTogVCkgPT4gbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGl0ZW1zLnJlZHVjZSgob2JqLCBpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBrZXkgPSBpdGVyYXRvcihpdGVtKTtcclxuICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgb2JqW2tleV0gPSBbXTtcclxuICAgIH1cclxuICAgIG9ialtrZXldLnB1c2goaXRlbSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH0sIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYW5lU291cmNlRGF0YTxUIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVQsIFRMYW5lRGF0YT4ge1xyXG4gIGxhbmVLZXk6IG51bWJlcjtcclxuICBkYXRhPzogVExhbmVEYXRhO1xyXG4gIHJvd0NsYXNzTmFtZT86IHN0cmluZztcclxuICBCb29raW5nQ2FsZW5kYXJJdGVtPzogUmVhY3QuQ29tcG9uZW50VHlwZTxCb29raW5nQ2FsZW5kYXJJdGVtUHJvcHM8VD4+O1xyXG4gIEJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW0/OiBSZWFjdC5Db21wb25lbnRUeXBlPFxyXG4gICAgQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbVByb3BzPFQ+XHJcbiAgPjtcclxuICBCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyPzogUmVhY3QuQ29tcG9uZW50VHlwZTxcclxuICAgIEJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXJQcm9wczxUTGFuZURhdGE+XHJcbiAgPjtcclxuICBCb29raW5nQ2FsZW5kYXJMYW5lPzogUmVhY3QuQ29tcG9uZW50VHlwZTxCb29raW5nQ2FsZW5kYXJMYW5lUHJvcHM8VD4+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExhbmVEYXRhPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVCwgVExhbmVEYXRhPlxyXG4gIGV4dGVuZHMgTGFuZVNvdXJjZURhdGE8VCwgVExhbmVEYXRhPiB7XHJcbiAgaXRlbXM6IFRbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0Qm9va2luZ3NUb0xhbmVzPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVCwgVExhbmVEYXRhPihcclxuICBib29raW5nczogVFtdLFxyXG4gIGZyb206IE1vbWVudCxcclxuICBtaW5MYW5lc0NvdW50OiBudW1iZXIsXHJcbiAgbGFuZXNTb3VyY2U6IExhbmVTb3VyY2VEYXRhPFQsIFRMYW5lRGF0YT5bXSA9IFtdXHJcbikge1xyXG4gIGlmICghYm9va2luZ3MpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgbGV0IGxhbmVzOiBMYW5lRGF0YTxULCBUTGFuZURhdGE+W10gPSBbXTtcclxuICBpZiAobGFuZXNTb3VyY2U/Lmxlbmd0aCkge1xyXG4gICAgbGFuZXMgPSBsYW5lc1NvdXJjZS5tYXAoKHNvdXJjZSkgPT4gKHtcclxuICAgICAgLi4uc291cmNlLFxyXG4gICAgICBpdGVtczogW10sXHJcbiAgICB9KSk7XHJcbiAgfVxyXG4gIGNvbnN0IGJvb2tpbmdzV2l0aG91dExhbmVLZXkgPSBib29raW5ncy5maWx0ZXIoXHJcbiAgICAoYSkgPT4gYS5sYW5lS2V5ID09PSB1bmRlZmluZWRcclxuICApO1xyXG4gIGNvbnN0IGJvb2tpbmdzV2l0aExhbmVLZXkgPSBib29raW5ncy5maWx0ZXIoKGEpID0+IGEubGFuZUtleSAhPT0gdW5kZWZpbmVkKTtcclxuICBpZiAoYm9va2luZ3NXaXRoTGFuZUtleS5sZW5ndGgpIHtcclxuICAgIGNvbnN0IGdyb3VwZWQgPSBncm91cEJ5KFxyXG4gICAgICBib29raW5nc1dpdGhMYW5lS2V5Lm1hcCgoYm9va2luZywgb3JpZ2luYWxJbmRleCkgPT4gKHtcclxuICAgICAgICAuLi5ib29raW5nLFxyXG4gICAgICAgIG9yaWdpbmFsSW5kZXgsXHJcbiAgICAgIH0pKSxcclxuICAgICAgKGEpID0+IGEubGFuZUtleVxyXG4gICAgKTtcclxuICAgIGxhbmVzID0gT2JqZWN0LmtleXMoZ3JvdXBlZCkubWFwKChrZXkpID0+ICh7XHJcbiAgICAgIGxhbmVLZXk6IE51bWJlcihrZXkpLFxyXG4gICAgICBpdGVtczogZ3JvdXBlZFtrZXldLFxyXG4gICAgICAuLi5sYW5lc1NvdXJjZT8uZmluZCgoYSkgPT4gYS5sYW5lS2V5ID09PSBOdW1iZXIoa2V5KSksXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBtaXNzaW5nTGFuZXMgPSBsYW5lc1NvdXJjZT8uZmlsdGVyKFxyXG4gICAgICAoYSkgPT4gIWxhbmVzLnNvbWUoKGwpID0+IGwubGFuZUtleSA9PT0gYS5sYW5lS2V5KVxyXG4gICAgKTtcclxuICAgIGxhbmVzID0gbGFuZXMuY29uY2F0KG1pc3NpbmdMYW5lcy5tYXAoKGEpID0+ICh7IC4uLmEsIGl0ZW1zOiBbXSB9KSkpO1xyXG4gIH1cclxuICBpZiAoYm9va2luZ3NXaXRob3V0TGFuZUtleS5sZW5ndGgpIHtcclxuICAgIGxldCByZW1haW5pbmdCb29raW5nczogKFQgJiBCb29raW5nQ2FsZW5kYXJJdGVtV2l0aE9yaWdpbmFsSW5kZXhUKVtdID1cclxuICAgICAgYm9va2luZ3NXaXRob3V0TGFuZUtleVxyXG4gICAgICAgIC5tYXAoKGJvb2tpbmcsIG9yaWdpbmFsSW5kZXgpID0+ICh7IC4uLmJvb2tpbmcsIG9yaWdpbmFsSW5kZXggfSkpXHJcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZnJvbS52YWx1ZU9mKCkgLSBiLmZyb20udmFsdWVPZigpKTtcclxuICAgIHdoaWxlIChyZW1haW5pbmdCb29raW5ncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBtaW4gPSA5OTk5OTk5OTk5OTk5OTtcclxuICAgICAgbGV0IGJvb2tpbmdJbmRleCA9IC0xO1xyXG4gICAgICBsZXQgbGFuZUluZGV4ID0gLTE7XHJcbiAgICAgIGxhbmVzLmZvckVhY2goKGxhbmUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGxhbmVzU291cmNlPy5zb21lKChsKSA9PiBsLmxhbmVLZXkgPT09IGxhbmUubGFuZUtleSkpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGFzdFRpbGwgPSBsYW5lLml0ZW1zW2xhbmUuaXRlbXMubGVuZ3RoIC0gMV0/LnRpbGwgPz8gZnJvbTtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZXMgPSByZW1haW5pbmdCb29raW5ncy5tYXAoKGJvb2tpbmcpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRpc3QgPSBib29raW5nLmZyb20uZGlmZihsYXN0VGlsbCk7XHJcbiAgICAgICAgICBpZiAobGFuZS5pdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKGRpc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGRpc3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgX21pbiA9IE1hdGgubWluKC4uLmRpc3RhbmNlcy5maWx0ZXIoKGEpID0+IGEgPj0gMCkpO1xyXG4gICAgICAgIGlmIChfbWluIDwgbWluKSB7XHJcbiAgICAgICAgICBib29raW5nSW5kZXggPSBkaXN0YW5jZXMuaW5kZXhPZihfbWluKTtcclxuICAgICAgICAgIGxhbmVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChib29raW5nSW5kZXggPj0gMCAmJiBsYW5lSW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxhbmVzW2xhbmVJbmRleF0uaXRlbXMgPSBsYW5lc1tsYW5lSW5kZXhdLml0ZW1zLmNvbmNhdCh7XHJcbiAgICAgICAgICAuLi5yZW1haW5pbmdCb29raW5nc1tib29raW5nSW5kZXhdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlbWFpbmluZ0Jvb2tpbmdzLnNwbGljZShib29raW5nSW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxhbmVzID0gbGFuZXMuY29uY2F0KHtcclxuICAgICAgICAgIGl0ZW1zOiBbeyAuLi5yZW1haW5pbmdCb29raW5nc1swXSB9XSxcclxuICAgICAgICAgIGxhbmVLZXk6IGxhbmVzLmxlbmd0aCxcclxuICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZW1haW5pbmdCb29raW5ncy5zaGlmdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBOYWl2ZSBzb2x1dGlvbiB0aGF0IGlzIG11Y2ggbGVzcyBjb21wdXRhdGlvbmFsbHkgaW50ZW5zaXZlIGJ1dCB5aWVsZHMgbW9yZSBsYW5lcyB0aGFuIG5lY2Vzc2FyeVxyXG4gICAgLypib29raW5ncy5mb3JFYWNoKChib29raW5nLCBvcmlnaW5hbEluZGV4KSA9PiB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGxhbmVzLmZvckVhY2goKGxhbmUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICghbGFuZS5zb21lKGkgPT4gaXRlbXNPdmVybGFwKGJvb2tpbmcsIGkpKSkge1xyXG4gICAgICAgIGxhbmVzW2luZGV4XSA9IGxhbmVzW2luZGV4XS5jb25jYXQoeyAuLi5ib29raW5nLCBvcmlnaW5hbEluZGV4IH0pO1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIGxhbmVzID0gbGFuZXMuY29uY2F0KFtbeyAuLi5ib29raW5nLCBvcmlnaW5hbEluZGV4IH1dXSk7XHJcbiAgICB9XHJcbiAgfSk7Ki9cclxuICB9XHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxhbmVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY29uc3QgbGFuZSA9IGxhbmVzW2luZGV4XTtcclxuICAgIGxhbmVzW2luZGV4XS5pdGVtcyA9IGxhbmUuaXRlbXMuc29ydChcclxuICAgICAgKGEsIGIpID0+IGEuZnJvbS52YWx1ZU9mKCkgLSBiLmZyb20udmFsdWVPZigpXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAobGFuZXMubGVuZ3RoIDwgbWluTGFuZXNDb3VudCkge1xyXG4gICAgbGFuZXMgPSBsYW5lcy5jb25jYXQoXHJcbiAgICAgIG5ldyBBcnJheTxMYW5lRGF0YTxULCBUTGFuZURhdGE+PihtaW5MYW5lc0NvdW50IC0gbGFuZXMubGVuZ3RoKVxyXG4gICAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgICAgLm1hcCgoXywgaW5kZXgpID0+ICh7XHJcbiAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICBsYW5lS2V5OiBpbmRleCArIGxhbmVzLmxlbmd0aCxcclxuICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgfSkpXHJcbiAgICApO1xyXG4gIH1cclxuICBjb25zdCBmaW5kSW5kZXggPSAoXHJcbiAgICBhcnI6IChMYW5lRGF0YTxULCBUTGFuZURhdGE+IHwgTGFuZVNvdXJjZURhdGE8VCwgVExhbmVEYXRhPilbXSxcclxuICAgIGxhbmVLZXk6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bWJlclxyXG4gICk6IG51bWJlciA9PiB7XHJcbiAgICBpZiAoIWxhbmVLZXkpIHJldHVybiAtMTtcclxuICAgIGNvbnN0IGluZGV4ID0gYXJyLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5sYW5lS2V5ID09PSBsYW5lS2V5KTtcclxuICAgIHJldHVybiBpbmRleCA9PT0gLTEgPyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA6IGluZGV4O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNvcnRBcnJheUJ5TGFuZUtleXMgPSAoXHJcbiAgICByZWZlcmVuY2VBcnJheTogTGFuZVNvdXJjZURhdGE8VCwgVExhbmVEYXRhPltdLFxyXG4gICAgYXJyYXlUb1NvcnQ6IExhbmVEYXRhPFQsIFRMYW5lRGF0YT5bXVxyXG4gICk6IExhbmVEYXRhPFQsIFRMYW5lRGF0YT5bXSA9PiB7XHJcbiAgICByZXR1cm4gWy4uLmFycmF5VG9Tb3J0XS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4QSA9IGZpbmRJbmRleChyZWZlcmVuY2VBcnJheSwgYS5sYW5lS2V5KTtcclxuICAgICAgY29uc3QgaW5kZXhCID0gZmluZEluZGV4KHJlZmVyZW5jZUFycmF5LCBiLmxhbmVLZXkpO1xyXG4gICAgICByZXR1cm4gaW5kZXhBIC0gaW5kZXhCO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBsYW5lcyA9IHNvcnRBcnJheUJ5TGFuZUtleXMobGFuZXNTb3VyY2UsIGxhbmVzKTtcclxuICByZXR1cm4gbGFuZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpdGVtc092ZXJsYXA8VCBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckl0ZW1UPihhOiBULCBiOiBUKSB7XHJcbiAgaWYgKCFhPy5mcm9tIHx8ICFhPy50aWxsIHx8ICFiPy5mcm9tIHx8ICFiPy50aWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChiLnRpbGwuaXNCZWZvcmUoYS5mcm9tKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoYi5mcm9tLmlzQWZ0ZXIoYS50aWxsKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEl0ZW1Qb3NpdGlvblN0eWxlID0gKG1hcmdpblN0YXJ0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIpID0+XHJcbiAgKHtcclxuICAgIG1hcmdpbkxlZnQ6IGAke21hcmdpblN0YXJ0ICogMTAwfSVgLFxyXG4gICAgd2lkdGg6IGAke3dpZHRoICogMTAwfSVgLFxyXG4gIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllcyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSXRlbXNEaW1lbnNpb25zPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVD4oXHJcbiAgaXRlbXM6IFRbXSxcclxuICBmcm9tOiBNb21lbnQsXHJcbiAgdGlsbDogTW9tZW50XHJcbikge1xyXG4gIGxldCBsYXN0RW5kID0gMDtcclxuICBjb25zdCB3aWR0aE1zID0gdGlsbC52YWx1ZU9mKCkgLSBmcm9tLnZhbHVlT2YoKTtcclxuICBjb25zdCBzdGFydE1zID0gZnJvbS52YWx1ZU9mKCk7XHJcbiAgY29uc3QgZW5kTXMgPSB0aWxsLnZhbHVlT2YoKTtcclxuICByZXR1cm4gd2lkdGhNcyA+IDBcclxuICAgID8gaXRlbXM/Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0SXNDdXQgPSBpdGVtLmZyb20udmFsdWVPZigpIDwgc3RhcnRNcztcclxuICAgICAgICBjb25zdCByZWFsU3RhcnQgPSAoaXRlbS5mcm9tLnZhbHVlT2YoKSAtIHN0YXJ0TXMpIC8gd2lkdGhNcztcclxuICAgICAgICBjb25zdCByZWFsRnJvbSA9IHN0YXJ0SXNDdXQgPyBtb21lbnQoc3RhcnRNcykgOiBtb21lbnQoaXRlbS5mcm9tKTtcclxuICAgICAgICBjb25zdCBzdGFydCA9IHN0YXJ0SXNDdXQgPyAwIDogcmVhbFN0YXJ0O1xyXG4gICAgICAgIGNvbnN0IGVuZElzQ3V0ID0gaXRlbS50aWxsLnZhbHVlT2YoKSA+IGVuZE1zO1xyXG4gICAgICAgIGNvbnN0IHJlYWxFbmQgPSAoaXRlbS50aWxsLnZhbHVlT2YoKSAtIHN0YXJ0TXMpIC8gd2lkdGhNcztcclxuICAgICAgICBjb25zdCBlbmQgPSBlbmRJc0N1dCA/IChlbmRNcyAtIHN0YXJ0TXMpIC8gd2lkdGhNcyA6IHJlYWxFbmQ7XHJcbiAgICAgICAgY29uc3QgcmVhbFRpbGwgPSBlbmRJc0N1dCA/IG1vbWVudChlbmRNcykgOiBtb21lbnQoaXRlbS50aWxsKTtcclxuICAgICAgICBjb25zdCBtYXJnaW5TdGFydCA9IHN0YXJ0IC0gbGFzdEVuZDtcclxuICAgICAgICBsYXN0RW5kID0gKGl0ZW0udGlsbC52YWx1ZU9mKCkgLSBzdGFydE1zKSAvIHdpZHRoTXM7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICBzdGFydCxcclxuICAgICAgICAgIHJlYWxTdGFydCxcclxuICAgICAgICAgIHJlYWxGcm9tLFxyXG4gICAgICAgICAgc3RhcnRJc0N1dCxcclxuICAgICAgICAgIHdpZHRoOiBlbmQgLSBzdGFydCxcclxuICAgICAgICAgIGVuZCxcclxuICAgICAgICAgIHJlYWxFbmQsXHJcbiAgICAgICAgICByZWFsVGlsbCxcclxuICAgICAgICAgIGVuZElzQ3V0LFxyXG4gICAgICAgICAgbWFyZ2luU3RhcnQsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgIDogW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNvbnRyb2xJdGVtcyA9IChcclxuICBmcm9tOiBNb21lbnQsXHJcbiAgdGlsbDogTW9tZW50LFxyXG4gIHN0ZXA6IER1cmF0aW9uLFxyXG4gIHN0YXJ0T2ZTdGVwOiBNb21lbnRcclxuKSA9PiB7XHJcbiAgaWYgKCFmcm9tIHx8ICF0aWxsIHx8ICFzdGVwKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGxldCBzdGVwcyA9IE1hdGgubWF4KFxyXG4gICAgTWF0aC5jZWlsKCh0aWxsLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpKSAvIHN0ZXAuYXNNaWxsaXNlY29uZHMoKSksXHJcbiAgICAyXHJcbiAgKTtcclxuICBsZXQgc3VidHJhY3QgPVxyXG4gICAgKHN0YXJ0T2ZTdGVwLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpKSAlIHN0ZXAuYXNNaWxsaXNlY29uZHMoKTtcclxuICBpZiAoc3VidHJhY3QgPiAwKSB7XHJcbiAgICBzdWJ0cmFjdCAtPSBzdGVwLmFzTWlsbGlzZWNvbmRzKCk7XHJcbiAgfVxyXG4gIGlmICh0aWxsLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpID4gc3RlcC5hc01pbGxpc2Vjb25kcygpKSB7XHJcbiAgICBzdGVwcyArPSAxO1xyXG4gIH1cclxuICByZXR1cm4gbmV3IEFycmF5KHN0ZXBzKS5maWxsKDApLm1hcCgoXywgaW5kZXgpID0+ICh7XHJcbiAgICBmcm9tOiBmcm9tXHJcbiAgICAgIC5jbG9uZSgpXHJcbiAgICAgIC5hZGQoc3VidHJhY3QpXHJcbiAgICAgIC5hZGQoc3RlcC5hc01pbGxpc2Vjb25kcygpICogaW5kZXgpLFxyXG4gICAgdGlsbDogZnJvbVxyXG4gICAgICAuY2xvbmUoKVxyXG4gICAgICAuYWRkKHN1YnRyYWN0KVxyXG4gICAgICAuYWRkKHN0ZXAuYXNNaWxsaXNlY29uZHMoKSAqIChpbmRleCArIDEpKSxcclxuICB9KSk7XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRJdGVtIHtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgZGF0ZTogTW9tZW50O1xyXG4gIHN0ZXBQcm9wb3J0aW9uOiBudW1iZXI7XHJcbiAgb3BhY2l0eTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVHcmlkSXRlbXMgPSAoXHJcbiAgZnJvbTogTW9tZW50LFxyXG4gIHRpbGw6IE1vbWVudCxcclxuICBzdGVwOiBEdXJhdGlvbixcclxuICBjb250YWluZXJXaWR0aFB4OiBudW1iZXIsXHJcbiAgYXZhaWxhYmxlU3RlcHM6IER1cmF0aW9uW10sXHJcbiAgZ29hbEdyaWRXaWR0aFB4OiBudW1iZXIsXHJcbiAgc3RhcnRPZlN0ZXA6IE1vbWVudFxyXG4pOiB7IGl0ZW1zOiBHcmlkSXRlbVtdOyBiZXN0U3RlcDogRHVyYXRpb24gfSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgIWZyb20gfHxcclxuICAgICF0aWxsIHx8XHJcbiAgICAhY29udGFpbmVyV2lkdGhQeCB8fFxyXG4gICAgIWF2YWlsYWJsZVN0ZXBzPy5sZW5ndGggfHxcclxuICAgICFnb2FsR3JpZFdpZHRoUHggfHxcclxuICAgICFzdGVwIHx8XHJcbiAgICAhc3RhcnRPZlN0ZXBcclxuICApIHtcclxuICAgIHJldHVybiB7IGJlc3RTdGVwOiBhdmFpbGFibGVTdGVwcz8uWzBdLCBpdGVtczogW10gfTtcclxuICB9XHJcbiAgY29uc3Qgc3RlcE1zID0gc3RlcC5hc01pbGxpc2Vjb25kcygpO1xyXG4gIGNvbnN0IGZyb21NcyA9IGZyb20udmFsdWVPZigpO1xyXG4gIGNvbnN0IHRpbGxNcyA9IHRpbGwudmFsdWVPZigpO1xyXG4gIGNvbnN0IHRpbWVMZW5ndGhNcyA9IHRpbGxNcyAtIGZyb21NcztcclxuICBjb25zdCBhcHByb3hpbWF0ZVN0ZXBzQ291bnQgPSBjb250YWluZXJXaWR0aFB4IC8gZ29hbEdyaWRXaWR0aFB4O1xyXG4gIGNvbnN0IGFwcHJveGltYXRlU3RlcE1zID0gdGltZUxlbmd0aE1zIC8gYXBwcm94aW1hdGVTdGVwc0NvdW50O1xyXG4gIGNvbnN0IGF2YWlsYWJsZVN0ZXBzRGlzdGFuY2VzTXMgPSBhdmFpbGFibGVTdGVwcy5tYXAoKGEpID0+XHJcbiAgICBNYXRoLmFicyhhLmFzTWlsbGlzZWNvbmRzKCkgLSBhcHByb3hpbWF0ZVN0ZXBNcylcclxuICApO1xyXG4gIGNvbnN0IHNtYWxsZXN0RGlzdGFuY2UgPSBNYXRoLm1pbiguLi5hdmFpbGFibGVTdGVwc0Rpc3RhbmNlc01zKTtcclxuICBjb25zdCBiZXN0U3RlcEluZGV4ID0gYXZhaWxhYmxlU3RlcHNEaXN0YW5jZXNNcy5maW5kSW5kZXgoXHJcbiAgICAoYSkgPT4gYSA9PT0gc21hbGxlc3REaXN0YW5jZVxyXG4gICk7XHJcbiAgY29uc3QgYmVzdFN0ZXAgPSBhdmFpbGFibGVTdGVwc1tiZXN0U3RlcEluZGV4XTtcclxuICBjb25zdCBzdWJ0cmFjdCA9XHJcbiAgICAoZnJvbU1zICsgZnJvbS51dGNPZmZzZXQoKSAqIDYwICogMTAwMCkgJSBiZXN0U3RlcC5hc01pbGxpc2Vjb25kcygpO1xyXG4gIGxldCBzdGFydE1zID0gZnJvbU1zIC0gc3VidHJhY3Q7XHJcbiAgbGV0IHN0ZXBzOiBNb21lbnRbXSA9IFtdO1xyXG4gIHdoaWxlIChzdGFydE1zIDw9IHRpbGxNcykge1xyXG4gICAgc3RlcHMgPSBzdGVwcy5jb25jYXQoZnJvbS5jbG9uZSgpLmFkZChzdGFydE1zIC0gZnJvbU1zLCAnbXMnKSk7XHJcbiAgICBzdGFydE1zICs9IGJlc3RTdGVwLmFzTWlsbGlzZWNvbmRzKCk7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBpdGVtczogc3RlcHNcclxuICAgICAgLmZpbHRlcigoYSkgPT4gYS52YWx1ZU9mKCkgPiBmcm9tTXMgJiYgYS52YWx1ZU9mKCkgPCB0aWxsTXMpXHJcbiAgICAgIC5tYXAoKGRhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBzdGVwUHJvcG9ydGlvbiA9XHJcbiAgICAgICAgICAoKGRhdGUudmFsdWVPZigpICsgZnJvbS51dGNPZmZzZXQoKSAqIDYwICogMTAwMCkgJSBzdGVwTXMpIC8gc3RlcE1zO1xyXG4gICAgICAgIGxldCBudW1iZXJPZlJvb3RzID0gMDtcclxuICAgICAgICBsZXQgY3VycmVudCA9IHN0ZXBQcm9wb3J0aW9uO1xyXG4gICAgICAgIGxldCBjdXJyZW50VG9wID0gMTtcclxuICAgICAgICBsZXQgdG9sZXJhbmNlID0gMC4wMDE7XHJcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQgPiB0b2xlcmFuY2UgJiYgY3VycmVudCA8IGN1cnJlbnRUb3AgLSB0b2xlcmFuY2UpIHtcclxuICAgICAgICAgIG51bWJlck9mUm9vdHMgKz0gMTtcclxuICAgICAgICAgIGN1cnJlbnRUb3AgPSAxIC8gTWF0aC5wb3coMiwgbnVtYmVyT2ZSb290cyk7XHJcbiAgICAgICAgICBpZiAoY3VycmVudCA+IGN1cnJlbnRUb3ApIHtcclxuICAgICAgICAgICAgY3VycmVudCAtPSBjdXJyZW50VG9wO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbGVmdDogKGRhdGUudmFsdWVPZigpIC0gZnJvbU1zKSAvIHRpbWVMZW5ndGhNcyxcclxuICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICBzdGVwUHJvcG9ydGlvbixcclxuICAgICAgICAgIG9wYWNpdHk6IDEgLyAobnVtYmVyT2ZSb290cyB8fCAxKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KSxcclxuICAgIGJlc3RTdGVwLFxyXG4gIH07XHJcbn07XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ0NmQwMTU2ZTBkYWM4NzUxN2U1XCIpIl0sIm5hbWVzIjpbIm1vbWVudCIsImdyb3VwQnkiLCJpdGVtcyIsIml0ZXJhdG9yIiwicmVkdWNlIiwib2JqIiwiaXRlbSIsImtleSIsImhhc093blByb3BlcnR5IiwicHVzaCIsInNwbGl0Qm9va2luZ3NUb0xhbmVzIiwiYm9va2luZ3MiLCJmcm9tIiwibWluTGFuZXNDb3VudCIsImxhbmVzU291cmNlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwibGFuZXMiLCJtYXAiLCJzb3VyY2UiLCJfb2JqZWN0U3ByZWFkIiwiYm9va2luZ3NXaXRob3V0TGFuZUtleSIsImZpbHRlciIsImEiLCJsYW5lS2V5IiwiYm9va2luZ3NXaXRoTGFuZUtleSIsImdyb3VwZWQiLCJib29raW5nIiwib3JpZ2luYWxJbmRleCIsIk9iamVjdCIsImtleXMiLCJOdW1iZXIiLCJmaW5kIiwibWlzc2luZ0xhbmVzIiwic29tZSIsImwiLCJjb25jYXQiLCJyZW1haW5pbmdCb29raW5ncyIsInNvcnQiLCJiIiwidmFsdWVPZiIsIl9sb29wIiwibWluIiwiYm9va2luZ0luZGV4IiwibGFuZUluZGV4IiwiZm9yRWFjaCIsImxhbmUiLCJpbmRleCIsIl9sYW5lJGl0ZW1zJHRpbGwiLCJfbGFuZSRpdGVtcyIsImxhc3RUaWxsIiwidGlsbCIsImRpc3RhbmNlcyIsImRpc3QiLCJkaWZmIiwiTWF0aCIsImFicyIsIl9taW4iLCJhcHBseSIsIl90b0NvbnN1bWFibGVBcnJheSIsImluZGV4T2YiLCJzcGxpY2UiLCJkYXRhIiwic2hpZnQiLCJBcnJheSIsImZpbGwiLCJfIiwiZmluZEluZGV4IiwiYXJyIiwiTUFYX1NBRkVfSU5URUdFUiIsInNvcnRBcnJheUJ5TGFuZUtleXMiLCJyZWZlcmVuY2VBcnJheSIsImFycmF5VG9Tb3J0IiwiaW5kZXhBIiwiaW5kZXhCIiwiaXRlbXNPdmVybGFwIiwiaXNCZWZvcmUiLCJpc0FmdGVyIiwiZ2V0SXRlbVBvc2l0aW9uU3R5bGUiLCJtYXJnaW5TdGFydCIsIndpZHRoIiwibWFyZ2luTGVmdCIsImNhbGN1bGF0ZUl0ZW1zRGltZW5zaW9ucyIsImxhc3RFbmQiLCJ3aWR0aE1zIiwic3RhcnRNcyIsImVuZE1zIiwic3RhcnRJc0N1dCIsInJlYWxTdGFydCIsInJlYWxGcm9tIiwic3RhcnQiLCJlbmRJc0N1dCIsInJlYWxFbmQiLCJlbmQiLCJyZWFsVGlsbCIsImdlbmVyYXRlQ29udHJvbEl0ZW1zIiwic3RlcCIsInN0YXJ0T2ZTdGVwIiwic3RlcHMiLCJtYXgiLCJjZWlsIiwiYXNNaWxsaXNlY29uZHMiLCJzdWJ0cmFjdCIsImNsb25lIiwiYWRkIiwiZ2VuZXJhdGVHcmlkSXRlbXMiLCJjb250YWluZXJXaWR0aFB4IiwiYXZhaWxhYmxlU3RlcHMiLCJnb2FsR3JpZFdpZHRoUHgiLCJiZXN0U3RlcCIsInN0ZXBNcyIsImZyb21NcyIsInRpbGxNcyIsInRpbWVMZW5ndGhNcyIsImFwcHJveGltYXRlU3RlcHNDb3VudCIsImFwcHJveGltYXRlU3RlcE1zIiwiYXZhaWxhYmxlU3RlcHNEaXN0YW5jZXNNcyIsInNtYWxsZXN0RGlzdGFuY2UiLCJiZXN0U3RlcEluZGV4IiwidXRjT2Zmc2V0IiwiZGF0ZSIsInN0ZXBQcm9wb3J0aW9uIiwibnVtYmVyT2ZSb290cyIsImN1cnJlbnQiLCJjdXJyZW50VG9wIiwidG9sZXJhbmNlIiwicG93IiwibGVmdCIsIm9wYWNpdHkiLCJyZWFjdEhvdExvYWRlciIsInJlYWN0SG90TG9hZGVyR2xvYmFsIiwiZGVmYXVsdCIsInJlZ2lzdGVyIiwibGVhdmVNb2R1bGUiLCJtb2R1bGUiXSwic291cmNlUm9vdCI6IiJ9