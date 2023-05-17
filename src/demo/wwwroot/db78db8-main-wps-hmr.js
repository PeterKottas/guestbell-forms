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
    if (laneKey === undefined || laneKey === null) {
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
/******/ 	__webpack_require__.h = () => ("659ce11aa7db5af8e1fe")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGI3OGRiOC1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFVM0MsU0FBU0MsT0FBT0EsQ0FBSUMsS0FBVSxFQUFFQyxRQUFzQyxFQUFFO0VBQzdFLE9BQU9ELEtBQUssQ0FBQ0UsTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsSUFBSSxFQUFLO0lBQ2pDLElBQU1DLEdBQUcsR0FBR0osUUFBUSxDQUFDRyxJQUFJLENBQUM7SUFDMUIsSUFBSSxDQUFDRCxHQUFHLENBQUNHLGNBQWMsQ0FBQ0QsR0FBRyxDQUFDLEVBQUU7TUFDNUJGLEdBQUcsQ0FBQ0UsR0FBRyxDQUFDLEdBQUcsRUFBRTtJQUNmO0lBQ0FGLEdBQUcsQ0FBQ0UsR0FBRyxDQUFDLENBQUNFLElBQUksQ0FBQ0gsSUFBSSxDQUFDO0lBQ25CLE9BQU9ELEdBQUc7RUFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDUjtBQXFCTyxTQUFTSyxvQkFBb0JBLENBQ2xDQyxRQUFhLEVBQ2JDLElBQVksRUFDWkMsYUFBcUIsRUFHckI7RUFBQSxJQUZBQyxXQUEyQyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxFQUFFO0VBQUEsSUFDaERHLGdCQUFnQixHQUFBSCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxJQUFJO0VBRXZCLElBQUksQ0FBQ0osUUFBUSxFQUFFO0lBQ2IsT0FBTyxFQUFFO0VBQ1g7RUFDQSxJQUFJUSxLQUErQixHQUFHLEVBQUU7RUFDeEMsSUFBSUwsV0FBVyxhQUFYQSxXQUFXLGVBQVhBLFdBQVcsQ0FBRUUsTUFBTSxFQUFFO0lBQ3ZCRyxLQUFLLEdBQUdMLFdBQVcsQ0FBQ00sR0FBRyxDQUFDLFVBQUNDLE1BQU07TUFBQSxPQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FDMUJELE1BQU07UUFDVG5CLEtBQUssRUFBRTtNQUFFO0lBQUEsQ0FDVCxDQUFDO0VBQ0w7RUFDQSxJQUFNcUIsc0JBQXNCLEdBQUdaLFFBQVEsQ0FBQ2EsTUFBTSxDQUM1QyxVQUFDQyxDQUFDO0lBQUEsT0FBS0EsQ0FBQyxDQUFDQyxPQUFPLEtBQUtULFNBQVM7RUFBQSxDQUNoQyxDQUFDO0VBQ0QsSUFBTVUsbUJBQW1CLEdBQUdoQixRQUFRLENBQUNhLE1BQU0sQ0FBQyxVQUFDQyxDQUFDO0lBQUEsT0FBS0EsQ0FBQyxDQUFDQyxPQUFPLEtBQUtULFNBQVM7RUFBQSxFQUFDO0VBQzNFLElBQUlVLG1CQUFtQixDQUFDWCxNQUFNLEVBQUU7SUFDOUIsSUFBTVksT0FBTyxHQUFHM0IsT0FBTyxDQUNyQjBCLG1CQUFtQixDQUFDUCxHQUFHLENBQUMsVUFBQ1MsT0FBTyxFQUFFQyxhQUFhO01BQUEsT0FBQVIsYUFBQSxDQUFBQSxhQUFBLEtBQzFDTyxPQUFPO1FBQ1ZDLGFBQWEsRUFBYkE7TUFBYTtJQUFBLENBQ2IsQ0FBQyxFQUNILFVBQUNMLENBQUM7TUFBQSxPQUFLQSxDQUFDLENBQUNDLE9BQU87SUFBQSxDQUNsQixDQUFDO0lBQ0RQLEtBQUssR0FBR1ksTUFBTSxDQUFDQyxJQUFJLENBQUNKLE9BQU8sQ0FBQyxDQUFDUixHQUFHLENBQUMsVUFBQ2IsR0FBRztNQUFBLE9BQUFlLGFBQUE7UUFDbkNJLE9BQU8sRUFBRU8sTUFBTSxDQUFDMUIsR0FBRyxDQUFDO1FBQ3BCTCxLQUFLLEVBQUUwQixPQUFPLENBQUNyQixHQUFHO01BQUMsR0FDaEJPLFdBQVcsYUFBWEEsV0FBVyx1QkFBWEEsV0FBVyxDQUFFb0IsSUFBSSxDQUFDLFVBQUNULENBQUM7UUFBQSxPQUFLQSxDQUFDLENBQUNDLE9BQU8sS0FBS08sTUFBTSxDQUFDMUIsR0FBRyxDQUFDO01BQUEsRUFBQztJQUFBLENBQ3RELENBQUM7SUFDSCxJQUFNNEIsWUFBWSxHQUFHckIsV0FBVyxhQUFYQSxXQUFXLHVCQUFYQSxXQUFXLENBQUVVLE1BQU0sQ0FDdEMsVUFBQ0MsQ0FBQztNQUFBLE9BQUssQ0FBQ04sS0FBSyxDQUFDaUIsSUFBSSxDQUFDLFVBQUNDLENBQUM7UUFBQSxPQUFLQSxDQUFDLENBQUNYLE9BQU8sS0FBS0QsQ0FBQyxDQUFDQyxPQUFPO01BQUEsRUFBQztJQUFBLENBQ3BELENBQUM7SUFDRFAsS0FBSyxHQUFHQSxLQUFLLENBQUNtQixNQUFNLENBQUNILFlBQVksQ0FBQ2YsR0FBRyxDQUFDLFVBQUNLLENBQUM7TUFBQSxPQUFBSCxhQUFBLENBQUFBLGFBQUEsS0FBV0csQ0FBQztRQUFFdkIsS0FBSyxFQUFFO01BQUU7SUFBQSxDQUFHLENBQUMsQ0FBQztFQUN0RTtFQUNBLElBQUlxQixzQkFBc0IsQ0FBQ1AsTUFBTSxFQUFFO0lBQ2pDLElBQUl1QixpQkFBZ0UsR0FDbEVoQixzQkFBc0IsQ0FDbkJILEdBQUcsQ0FBQyxVQUFDUyxPQUFPLEVBQUVDLGFBQWE7TUFBQSxPQUFBUixhQUFBLENBQUFBLGFBQUEsS0FBV08sT0FBTztRQUFFQyxhQUFhLEVBQWJBO01BQWE7SUFBQSxDQUFHLENBQUMsQ0FDaEVVLElBQUksQ0FBQyxVQUFDZixDQUFDLEVBQUVnQixDQUFDO01BQUEsT0FBS2hCLENBQUMsQ0FBQ2IsSUFBSSxDQUFDOEIsT0FBTyxDQUFDLENBQUMsR0FBR0QsQ0FBQyxDQUFDN0IsSUFBSSxDQUFDOEIsT0FBTyxDQUFDLENBQUM7SUFBQSxFQUFDO0lBQUMsSUFBQUMsS0FBQSxZQUFBQSxNQUFBLEVBQ3BCO01BQ25DLElBQUlDLEdBQUcsR0FBRyxjQUFjO01BQ3hCLElBQUlDLFlBQVksR0FBRyxDQUFDLENBQUM7TUFDckIsSUFBSUMsU0FBUyxHQUFHLENBQUMsQ0FBQztNQUNsQjNCLEtBQUssQ0FBQzRCLE9BQU8sQ0FBQyxVQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBSztRQUFBLElBQUFDLGdCQUFBLEVBQUFDLFdBQUE7UUFDN0IsSUFBSXJDLFdBQVcsYUFBWEEsV0FBVyxlQUFYQSxXQUFXLENBQUVzQixJQUFJLENBQUMsVUFBQ0MsQ0FBQztVQUFBLE9BQUtBLENBQUMsQ0FBQ1gsT0FBTyxLQUFLc0IsSUFBSSxDQUFDdEIsT0FBTztRQUFBLEVBQUMsRUFBRTtVQUN4RDtRQUNGO1FBQ0EsSUFBTTBCLFFBQVEsSUFBQUYsZ0JBQUEsSUFBQUMsV0FBQSxHQUFHSCxJQUFJLENBQUM5QyxLQUFLLENBQUM4QyxJQUFJLENBQUM5QyxLQUFLLENBQUNjLE1BQU0sR0FBRyxDQUFDLENBQUMsY0FBQW1DLFdBQUEsdUJBQWpDQSxXQUFBLENBQW1DRSxJQUFJLGNBQUFILGdCQUFBLGNBQUFBLGdCQUFBLEdBQUl0QyxJQUFJO1FBQ2hFLElBQU0wQyxTQUFTLEdBQUdmLGlCQUFpQixDQUFDbkIsR0FBRyxDQUFDLFVBQUNTLE9BQU8sRUFBSztVQUNuRCxJQUFNMEIsSUFBSSxHQUFHMUIsT0FBTyxDQUFDakIsSUFBSSxDQUFDNEMsSUFBSSxDQUFDSixRQUFRLENBQUM7VUFDeEMsSUFBSUosSUFBSSxDQUFDOUMsS0FBSyxDQUFDYyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE9BQU95QyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDO1VBQ3ZCO1VBQ0EsT0FBT0EsSUFBSTtRQUNiLENBQUMsQ0FBQztRQUNGLElBQU1JLElBQUksR0FBR0YsSUFBSSxDQUFDYixHQUFHLENBQUFnQixLQUFBLENBQVJILElBQUksRUFBQUksa0JBQUEsQ0FBUVAsU0FBUyxDQUFDOUIsTUFBTSxDQUFDLFVBQUNDLENBQUM7VUFBQSxPQUFLQSxDQUFDLElBQUksQ0FBQztRQUFBLEVBQUMsRUFBQztRQUN6RCxJQUFJa0MsSUFBSSxHQUFHZixHQUFHLEVBQUU7VUFDZEMsWUFBWSxHQUFHUyxTQUFTLENBQUNRLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDO1VBQ3RDYixTQUFTLEdBQUdHLEtBQUs7UUFDbkI7TUFDRixDQUFDLENBQUM7TUFDRixJQUFJSixZQUFZLElBQUksQ0FBQyxJQUFJQyxTQUFTLElBQUksQ0FBQyxFQUFFO1FBQ3ZDM0IsS0FBSyxDQUFDMkIsU0FBUyxDQUFDLENBQUM1QyxLQUFLLEdBQUdpQixLQUFLLENBQUMyQixTQUFTLENBQUMsQ0FBQzVDLEtBQUssQ0FBQ29DLE1BQU0sQ0FBQWhCLGFBQUEsS0FDakRpQixpQkFBaUIsQ0FBQ00sWUFBWSxDQUFDLENBQ25DLENBQUM7UUFDRk4saUJBQWlCLENBQUN3QixNQUFNLENBQUNsQixZQUFZLEVBQUUsQ0FBQyxDQUFDO01BQzNDLENBQUMsTUFBTTtRQUNMMUIsS0FBSyxHQUFHQSxLQUFLLENBQUNtQixNQUFNLENBQUM7VUFDbkJwQyxLQUFLLEVBQUUsQ0FBQW9CLGFBQUEsS0FBTWlCLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFHO1VBQ3BDYixPQUFPLEVBQUVQLEtBQUssQ0FBQ0gsTUFBTTtVQUNyQmdELElBQUksRUFBRS9DO1FBQ1IsQ0FBQyxDQUFDO1FBQ0ZzQixpQkFBaUIsQ0FBQzBCLEtBQUssQ0FBQyxDQUFDO01BQzNCO0lBQ0YsQ0FBQztJQW5DRCxPQUFPMUIsaUJBQWlCLENBQUN2QixNQUFNLEdBQUcsQ0FBQztNQUFBMkIsS0FBQTtJQUFBO0lBb0NuQztJQUNBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFOztFQUNBLEtBQUssSUFBSU0sS0FBSyxHQUFHLENBQUMsRUFBRUEsS0FBSyxHQUFHOUIsS0FBSyxDQUFDSCxNQUFNLEVBQUVpQyxLQUFLLEVBQUUsRUFBRTtJQUNqRCxJQUFNRCxJQUFJLEdBQUc3QixLQUFLLENBQUM4QixLQUFLLENBQUM7SUFDekI5QixLQUFLLENBQUM4QixLQUFLLENBQUMsQ0FBQy9DLEtBQUssR0FBRzhDLElBQUksQ0FBQzlDLEtBQUssQ0FBQ3NDLElBQUksQ0FDbEMsVUFBQ2YsQ0FBQyxFQUFFZ0IsQ0FBQztNQUFBLE9BQUtoQixDQUFDLENBQUNiLElBQUksQ0FBQzhCLE9BQU8sQ0FBQyxDQUFDLEdBQUdELENBQUMsQ0FBQzdCLElBQUksQ0FBQzhCLE9BQU8sQ0FBQyxDQUFDO0lBQUEsQ0FDL0MsQ0FBQztFQUNIO0VBQ0EsSUFBSXZCLEtBQUssQ0FBQ0gsTUFBTSxHQUFHSCxhQUFhLEVBQUU7SUFDaENNLEtBQUssR0FBR0EsS0FBSyxDQUFDbUIsTUFBTSxDQUNsQixJQUFJNEIsS0FBSyxDQUF5QnJELGFBQWEsR0FBR00sS0FBSyxDQUFDSCxNQUFNLENBQUMsQ0FDNURtRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQ1YvQyxHQUFHLENBQUMsVUFBQ2dELENBQUMsRUFBRW5CLEtBQUs7TUFBQSxPQUFNO1FBQ2xCL0MsS0FBSyxFQUFFLEVBQUU7UUFDVHdCLE9BQU8sRUFBRXVCLEtBQUssR0FBRzlCLEtBQUssQ0FBQ0gsTUFBTTtRQUM3QmdELElBQUksRUFBRTtNQUNSLENBQUM7SUFBQSxDQUFDLENBQ04sQ0FBQztFQUNIO0VBQ0EsSUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQ2JDLEdBQThELEVBQzlENUMsT0FBb0MsRUFDekI7SUFDWCxJQUFNNkMsWUFBWSxHQUFHckQsZ0JBQWdCLEdBQ2pDZSxNQUFNLENBQUN1QyxnQkFBZ0IsR0FDdkJ2QyxNQUFNLENBQUN3QyxnQkFBZ0I7SUFDM0IsSUFBSS9DLE9BQU8sS0FBS1QsU0FBUyxJQUFJUyxPQUFPLEtBQUssSUFBSSxFQUFFO01BQzdDLE9BQU82QyxZQUFZO0lBQ3JCO0lBQ0EsSUFBTXRCLEtBQUssR0FBR3FCLEdBQUcsQ0FBQ0QsU0FBUyxDQUFDLFVBQUMvRCxJQUFJO01BQUEsT0FBS0EsSUFBSSxDQUFDb0IsT0FBTyxLQUFLQSxPQUFPO0lBQUEsRUFBQztJQUMvRCxPQUFPdUIsS0FBSyxLQUFLLENBQUMsQ0FBQyxHQUFHc0IsWUFBWSxHQUFHdEIsS0FBSztFQUM1QyxDQUFDO0VBRUQsSUFBTXlCLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUJBLENBQ3ZCQyxjQUE4QyxFQUM5Q0MsV0FBcUMsRUFDUjtJQUM3QixPQUFPZixrQkFBQSxDQUFJZSxXQUFXLEVBQUVwQyxJQUFJLENBQUMsVUFBQ2YsQ0FBQyxFQUFFZ0IsQ0FBQyxFQUFLO01BQ3JDLElBQU1vQyxNQUFNLEdBQUdSLFNBQVMsQ0FBQ00sY0FBYyxFQUFFbEQsQ0FBQyxDQUFDQyxPQUFPLENBQUM7TUFDbkQsSUFBTW9ELE1BQU0sR0FBR1QsU0FBUyxDQUFDTSxjQUFjLEVBQUVsQyxDQUFDLENBQUNmLE9BQU8sQ0FBQztNQUNuRCxPQUFPbUQsTUFBTSxHQUFHQyxNQUFNO0lBQ3hCLENBQUMsQ0FBQztFQUNKLENBQUM7RUFDRDNELEtBQUssR0FBR3VELG1CQUFtQixDQUFDNUQsV0FBVyxFQUFFSyxLQUFLLENBQUM7RUFDL0MsT0FBT0EsS0FBSztBQUNkO0FBRU8sU0FBUzRELFlBQVlBLENBQWlDdEQsQ0FBSSxFQUFFZ0IsQ0FBSSxFQUFFO0VBQ3ZFLElBQUksRUFBQ2hCLENBQUMsYUFBREEsQ0FBQyxlQUFEQSxDQUFDLENBQUViLElBQUksS0FBSSxFQUFDYSxDQUFDLGFBQURBLENBQUMsZUFBREEsQ0FBQyxDQUFFNEIsSUFBSSxLQUFJLEVBQUNaLENBQUMsYUFBREEsQ0FBQyxlQUFEQSxDQUFDLENBQUU3QixJQUFJLEtBQUksRUFBQzZCLENBQUMsYUFBREEsQ0FBQyxlQUFEQSxDQUFDLENBQUVZLElBQUksR0FBRTtJQUNoRCxPQUFPLEtBQUs7RUFDZDtFQUNBLElBQUlaLENBQUMsQ0FBQ1ksSUFBSSxDQUFDMkIsUUFBUSxDQUFDdkQsQ0FBQyxDQUFDYixJQUFJLENBQUMsRUFBRTtJQUMzQixPQUFPLEtBQUs7RUFDZDtFQUNBLElBQUk2QixDQUFDLENBQUM3QixJQUFJLENBQUNxRSxPQUFPLENBQUN4RCxDQUFDLENBQUM0QixJQUFJLENBQUMsRUFBRTtJQUMxQixPQUFPLEtBQUs7RUFDZDtFQUNBLE9BQU8sSUFBSTtBQUNiO0FBRU8sSUFBTTZCLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUlDLFdBQW1CLEVBQUVDLEtBQWE7RUFBQSxPQUNwRTtJQUNDQyxVQUFVLEtBQUEvQyxNQUFBLENBQUs2QyxXQUFXLEdBQUcsR0FBRyxNQUFHO0lBQ25DQyxLQUFLLEtBQUE5QyxNQUFBLENBQUs4QyxLQUFLLEdBQUcsR0FBRztFQUN2QixDQUFDO0FBQUEsQ0FBd0I7QUFFcEIsU0FBU0Usd0JBQXdCQSxDQUN0Q3BGLEtBQVUsRUFDVlUsSUFBWSxFQUNaeUMsSUFBWSxFQUNaO0VBQ0EsSUFBSWtDLE9BQU8sR0FBRyxDQUFDO0VBQ2YsSUFBTUMsT0FBTyxHQUFHbkMsSUFBSSxDQUFDWCxPQUFPLENBQUMsQ0FBQyxHQUFHOUIsSUFBSSxDQUFDOEIsT0FBTyxDQUFDLENBQUM7RUFDL0MsSUFBTStDLE9BQU8sR0FBRzdFLElBQUksQ0FBQzhCLE9BQU8sQ0FBQyxDQUFDO0VBQzlCLElBQU1nRCxLQUFLLEdBQUdyQyxJQUFJLENBQUNYLE9BQU8sQ0FBQyxDQUFDO0VBQzVCLE9BQU84QyxPQUFPLEdBQUcsQ0FBQyxHQUNkdEYsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUVrQixHQUFHLENBQUMsVUFBQ2QsSUFBSSxFQUFLO0lBQ25CLElBQU1xRixVQUFVLEdBQUdyRixJQUFJLENBQUNNLElBQUksQ0FBQzhCLE9BQU8sQ0FBQyxDQUFDLEdBQUcrQyxPQUFPO0lBQ2hELElBQU1HLFNBQVMsR0FBRyxDQUFDdEYsSUFBSSxDQUFDTSxJQUFJLENBQUM4QixPQUFPLENBQUMsQ0FBQyxHQUFHK0MsT0FBTyxJQUFJRCxPQUFPO0lBQzNELElBQU1LLFFBQVEsR0FBR0YsVUFBVSxHQUFHM0YsNkNBQU0sQ0FBQ3lGLE9BQU8sQ0FBQyxHQUFHekYsNkNBQU0sQ0FBQ00sSUFBSSxDQUFDTSxJQUFJLENBQUM7SUFDakUsSUFBTWtGLEtBQUssR0FBR0gsVUFBVSxHQUFHLENBQUMsR0FBR0MsU0FBUztJQUN4QyxJQUFNRyxRQUFRLEdBQUd6RixJQUFJLENBQUMrQyxJQUFJLENBQUNYLE9BQU8sQ0FBQyxDQUFDLEdBQUdnRCxLQUFLO0lBQzVDLElBQU1NLE9BQU8sR0FBRyxDQUFDMUYsSUFBSSxDQUFDK0MsSUFBSSxDQUFDWCxPQUFPLENBQUMsQ0FBQyxHQUFHK0MsT0FBTyxJQUFJRCxPQUFPO0lBQ3pELElBQU1TLEdBQUcsR0FBR0YsUUFBUSxHQUFHLENBQUNMLEtBQUssR0FBR0QsT0FBTyxJQUFJRCxPQUFPLEdBQUdRLE9BQU87SUFDNUQsSUFBTUUsUUFBUSxHQUFHSCxRQUFRLEdBQUcvRiw2Q0FBTSxDQUFDMEYsS0FBSyxDQUFDLEdBQUcxRiw2Q0FBTSxDQUFDTSxJQUFJLENBQUMrQyxJQUFJLENBQUM7SUFDN0QsSUFBTThCLFdBQVcsR0FBR1csS0FBSyxHQUFHUCxPQUFPO0lBQ25DQSxPQUFPLEdBQUcsQ0FBQ2pGLElBQUksQ0FBQytDLElBQUksQ0FBQ1gsT0FBTyxDQUFDLENBQUMsR0FBRytDLE9BQU8sSUFBSUQsT0FBTztJQUNuRCxPQUFPO01BQ0xsRixJQUFJLEVBQUpBLElBQUk7TUFDSndGLEtBQUssRUFBTEEsS0FBSztNQUNMRixTQUFTLEVBQVRBLFNBQVM7TUFDVEMsUUFBUSxFQUFSQSxRQUFRO01BQ1JGLFVBQVUsRUFBVkEsVUFBVTtNQUNWUCxLQUFLLEVBQUVhLEdBQUcsR0FBR0gsS0FBSztNQUNsQkcsR0FBRyxFQUFIQSxHQUFHO01BQ0hELE9BQU8sRUFBUEEsT0FBTztNQUNQRSxRQUFRLEVBQVJBLFFBQVE7TUFDUkgsUUFBUSxFQUFSQSxRQUFRO01BQ1JaLFdBQVcsRUFBWEE7SUFDRixDQUFDO0VBQ0gsQ0FBQyxDQUFDLEdBQ0YsRUFBRTtBQUNSO0FBRU8sSUFBTWdCLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQy9CdkYsSUFBWSxFQUNaeUMsSUFBWSxFQUNaK0MsSUFBYyxFQUNkQyxXQUFtQixFQUNoQjtFQUNILElBQUksQ0FBQ3pGLElBQUksSUFBSSxDQUFDeUMsSUFBSSxJQUFJLENBQUMrQyxJQUFJLEVBQUU7SUFDM0IsT0FBTyxFQUFFO0VBQ1g7RUFDQSxJQUFJRSxLQUFLLEdBQUc3QyxJQUFJLENBQUM4QyxHQUFHLENBQ2xCOUMsSUFBSSxDQUFDK0MsSUFBSSxDQUFDLENBQUNuRCxJQUFJLENBQUNYLE9BQU8sQ0FBQyxDQUFDLEdBQUc5QixJQUFJLENBQUM4QixPQUFPLENBQUMsQ0FBQyxJQUFJMEQsSUFBSSxDQUFDSyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQ3BFLENBQ0YsQ0FBQztFQUNELElBQUlDLFFBQVEsR0FDVixDQUFDTCxXQUFXLENBQUMzRCxPQUFPLENBQUMsQ0FBQyxHQUFHOUIsSUFBSSxDQUFDOEIsT0FBTyxDQUFDLENBQUMsSUFBSTBELElBQUksQ0FBQ0ssY0FBYyxDQUFDLENBQUM7RUFDbEUsSUFBSUMsUUFBUSxHQUFHLENBQUMsRUFBRTtJQUNoQkEsUUFBUSxJQUFJTixJQUFJLENBQUNLLGNBQWMsQ0FBQyxDQUFDO0VBQ25DO0VBQ0EsSUFBSXBELElBQUksQ0FBQ1gsT0FBTyxDQUFDLENBQUMsR0FBRzlCLElBQUksQ0FBQzhCLE9BQU8sQ0FBQyxDQUFDLEdBQUcwRCxJQUFJLENBQUNLLGNBQWMsQ0FBQyxDQUFDLEVBQUU7SUFDM0RILEtBQUssSUFBSSxDQUFDO0VBQ1o7RUFDQSxPQUFPLElBQUlwQyxLQUFLLENBQUNvQyxLQUFLLENBQUMsQ0FBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQy9DLEdBQUcsQ0FBQyxVQUFDZ0QsQ0FBQyxFQUFFbkIsS0FBSztJQUFBLE9BQU07TUFDakRyQyxJQUFJLEVBQUVBLElBQUksQ0FDUCtGLEtBQUssQ0FBQyxDQUFDLENBQ1BDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDLENBQ2JFLEdBQUcsQ0FBQ1IsSUFBSSxDQUFDSyxjQUFjLENBQUMsQ0FBQyxHQUFHeEQsS0FBSyxDQUFDO01BQ3JDSSxJQUFJLEVBQUV6QyxJQUFJLENBQ1ArRixLQUFLLENBQUMsQ0FBQyxDQUNQQyxHQUFHLENBQUNGLFFBQVEsQ0FBQyxDQUNiRSxHQUFHLENBQUNSLElBQUksQ0FBQ0ssY0FBYyxDQUFDLENBQUMsSUFBSXhELEtBQUssR0FBRyxDQUFDLENBQUM7SUFDNUMsQ0FBQztFQUFBLENBQUMsQ0FBQztBQUNMLENBQUM7QUFTTSxJQUFNNEQsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FDNUJqRyxJQUFZLEVBQ1p5QyxJQUFZLEVBQ1orQyxJQUFjLEVBQ2RVLGdCQUF3QixFQUN4QkMsY0FBMEIsRUFDMUJDLGVBQXVCLEVBQ3ZCWCxXQUFtQixFQUMyQjtFQUM5QyxJQUNFLENBQUN6RixJQUFJLElBQ0wsQ0FBQ3lDLElBQUksSUFDTCxDQUFDeUQsZ0JBQWdCLElBQ2pCLEVBQUNDLGNBQWMsYUFBZEEsY0FBYyxlQUFkQSxjQUFjLENBQUUvRixNQUFNLEtBQ3ZCLENBQUNnRyxlQUFlLElBQ2hCLENBQUNaLElBQUksSUFDTCxDQUFDQyxXQUFXLEVBQ1o7SUFDQSxPQUFPO01BQUVZLFFBQVEsRUFBRUYsY0FBYyxhQUFkQSxjQUFjLHVCQUFkQSxjQUFjLENBQUcsQ0FBQyxDQUFDO01BQUU3RyxLQUFLLEVBQUU7SUFBRyxDQUFDO0VBQ3JEO0VBQ0EsSUFBTWdILE1BQU0sR0FBR2QsSUFBSSxDQUFDSyxjQUFjLENBQUMsQ0FBQztFQUNwQyxJQUFNVSxNQUFNLEdBQUd2RyxJQUFJLENBQUM4QixPQUFPLENBQUMsQ0FBQztFQUM3QixJQUFNMEUsTUFBTSxHQUFHL0QsSUFBSSxDQUFDWCxPQUFPLENBQUMsQ0FBQztFQUM3QixJQUFNMkUsWUFBWSxHQUFHRCxNQUFNLEdBQUdELE1BQU07RUFDcEMsSUFBTUcscUJBQXFCLEdBQUdSLGdCQUFnQixHQUFHRSxlQUFlO0VBQ2hFLElBQU1PLGlCQUFpQixHQUFHRixZQUFZLEdBQUdDLHFCQUFxQjtFQUM5RCxJQUFNRSx5QkFBeUIsR0FBR1QsY0FBYyxDQUFDM0YsR0FBRyxDQUFDLFVBQUNLLENBQUM7SUFBQSxPQUNyRGdDLElBQUksQ0FBQ0MsR0FBRyxDQUFDakMsQ0FBQyxDQUFDZ0YsY0FBYyxDQUFDLENBQUMsR0FBR2MsaUJBQWlCLENBQUM7RUFBQSxDQUNsRCxDQUFDO0VBQ0QsSUFBTUUsZ0JBQWdCLEdBQUdoRSxJQUFJLENBQUNiLEdBQUcsQ0FBQWdCLEtBQUEsQ0FBUkgsSUFBSSxFQUFBSSxrQkFBQSxDQUFRMkQseUJBQXlCLEVBQUM7RUFDL0QsSUFBTUUsYUFBYSxHQUFHRix5QkFBeUIsQ0FBQ25ELFNBQVMsQ0FDdkQsVUFBQzVDLENBQUM7SUFBQSxPQUFLQSxDQUFDLEtBQUtnRyxnQkFBZ0I7RUFBQSxDQUMvQixDQUFDO0VBQ0QsSUFBTVIsUUFBUSxHQUFHRixjQUFjLENBQUNXLGFBQWEsQ0FBQztFQUM5QyxJQUFNaEIsUUFBUSxHQUNaLENBQUNTLE1BQU0sR0FBR3ZHLElBQUksQ0FBQytHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSVYsUUFBUSxDQUFDUixjQUFjLENBQUMsQ0FBQztFQUNyRSxJQUFJaEIsT0FBTyxHQUFHMEIsTUFBTSxHQUFHVCxRQUFRO0VBQy9CLElBQUlKLEtBQWUsR0FBRyxFQUFFO0VBQ3hCLE9BQU9iLE9BQU8sSUFBSTJCLE1BQU0sRUFBRTtJQUN4QmQsS0FBSyxHQUFHQSxLQUFLLENBQUNoRSxNQUFNLENBQUMxQixJQUFJLENBQUMrRixLQUFLLENBQUMsQ0FBQyxDQUFDQyxHQUFHLENBQUNuQixPQUFPLEdBQUcwQixNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQxQixPQUFPLElBQUl3QixRQUFRLENBQUNSLGNBQWMsQ0FBQyxDQUFDO0VBQ3RDO0VBQ0EsT0FBTztJQUNMdkcsS0FBSyxFQUFFb0csS0FBSyxDQUNUOUUsTUFBTSxDQUFDLFVBQUNDLENBQUM7TUFBQSxPQUFLQSxDQUFDLENBQUNpQixPQUFPLENBQUMsQ0FBQyxHQUFHeUUsTUFBTSxJQUFJMUYsQ0FBQyxDQUFDaUIsT0FBTyxDQUFDLENBQUMsR0FBRzBFLE1BQU07SUFBQSxFQUFDLENBQzNEaEcsR0FBRyxDQUFDLFVBQUN3RyxJQUFJLEVBQUs7TUFDYixJQUFNQyxjQUFjLEdBQ2pCLENBQUNELElBQUksQ0FBQ2xGLE9BQU8sQ0FBQyxDQUFDLEdBQUc5QixJQUFJLENBQUMrRyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUlULE1BQU0sR0FBSUEsTUFBTTtNQUNyRSxJQUFJWSxhQUFhLEdBQUcsQ0FBQztNQUNyQixJQUFJQyxPQUFPLEdBQUdGLGNBQWM7TUFDNUIsSUFBSUcsVUFBVSxHQUFHLENBQUM7TUFDbEIsSUFBSUMsU0FBUyxHQUFHLEtBQUs7TUFDckIsT0FBT0YsT0FBTyxHQUFHRSxTQUFTLElBQUlGLE9BQU8sR0FBR0MsVUFBVSxHQUFHQyxTQUFTLEVBQUU7UUFDOURILGFBQWEsSUFBSSxDQUFDO1FBQ2xCRSxVQUFVLEdBQUcsQ0FBQyxHQUFHdkUsSUFBSSxDQUFDeUUsR0FBRyxDQUFDLENBQUMsRUFBRUosYUFBYSxDQUFDO1FBQzNDLElBQUlDLE9BQU8sR0FBR0MsVUFBVSxFQUFFO1VBQ3hCRCxPQUFPLElBQUlDLFVBQVU7UUFDdkI7TUFDRjtNQUNBLE9BQU87UUFDTEcsSUFBSSxFQUFFLENBQUNQLElBQUksQ0FBQ2xGLE9BQU8sQ0FBQyxDQUFDLEdBQUd5RSxNQUFNLElBQUlFLFlBQVk7UUFDOUNPLElBQUksRUFBSkEsSUFBSTtRQUNKQyxjQUFjLEVBQWRBLGNBQWM7UUFDZE8sT0FBTyxFQUFFLENBQUMsSUFBSU4sYUFBYSxJQUFJLENBQUM7TUFDbEMsQ0FBQztJQUNILENBQUMsQ0FBQztJQUNKYixRQUFRLEVBQVJBO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFBQztBQUFBO0VBQUEsSUFBQW9CLGNBQUEsVUFBQUMsb0JBQUEsbUJBQUFBLG9CQUFBLENBQUFDLE9BQUEsR0FBQXRILFNBQUE7RUFBQSxLQUFBb0gsY0FBQTtJQUFBO0VBQUE7RUFBQUEsY0FBQSxDQUFBRyxRQUFBLENBOVVjdkksT0FBTztFQUFBb0ksY0FBQSxDQUFBRyxRQUFBLENBOEJQOUgsb0JBQW9CO0VBQUEySCxjQUFBLENBQUFHLFFBQUEsQ0EySXBCekQsWUFBWTtFQUFBc0QsY0FBQSxDQUFBRyxRQUFBLENBYWZ0RCxvQkFBb0I7RUFBQW1ELGNBQUEsQ0FBQUcsUUFBQSxDQU1qQmxELHdCQUF3QjtFQUFBK0MsY0FBQSxDQUFBRyxRQUFBLENBc0MzQnJDLG9CQUFvQjtFQUFBa0MsY0FBQSxDQUFBRyxRQUFBLENBd0NwQjNCLGlCQUFpQjtBQUFBO0FBQUE7QUFBQTtFQUFBLElBQUE0QixXQUFBLFVBQUFILG9CQUFBLG1CQUFBQSxvQkFBQSxDQUFBRyxXQUFBLEdBQUF4SCxTQUFBO0VBQUF3SCxXQUFBLElBQUFBLFdBQUEsQ0FBQUMsTUFBQTtBQUFBOzs7Ozs7OztVQ3BSOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWVzdGJlbGwtZm9ybXMvLi9zcmMvbGliL2NvbXBvbmVudHMvYm9va2luZ0NhbGVuZGFyL3V0aWxzLnRzIiwid2VicGFjazovL2d1ZXN0YmVsbC1mb3Jtcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCwgeyBNb21lbnQsIER1cmF0aW9uIH0gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFySXRlbVByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJJdGVtJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyTGFuZVByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJMYW5lJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlclByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbVByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtJztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJJdGVtVCxcclxuICBCb29raW5nQ2FsZW5kYXJJdGVtV2l0aE9yaWdpbmFsSW5kZXhULFxyXG59IGZyb20gJy4vY29tbW9uJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBncm91cEJ5PFQ+KGl0ZW1zOiBUW10sIGl0ZXJhdG9yOiAoaXRlbTogVCkgPT4gbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGl0ZW1zLnJlZHVjZSgob2JqLCBpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBrZXkgPSBpdGVyYXRvcihpdGVtKTtcclxuICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgb2JqW2tleV0gPSBbXTtcclxuICAgIH1cclxuICAgIG9ialtrZXldLnB1c2goaXRlbSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH0sIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYW5lU291cmNlRGF0YTxUIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVQsIFRMYW5lRGF0YT4ge1xyXG4gIGxhbmVLZXk6IG51bWJlcjtcclxuICBkYXRhPzogVExhbmVEYXRhO1xyXG4gIHJvd0NsYXNzTmFtZT86IHN0cmluZztcclxuICBCb29raW5nQ2FsZW5kYXJJdGVtPzogUmVhY3QuQ29tcG9uZW50VHlwZTxCb29raW5nQ2FsZW5kYXJJdGVtUHJvcHM8VD4+O1xyXG4gIEJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW0/OiBSZWFjdC5Db21wb25lbnRUeXBlPFxyXG4gICAgQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbVByb3BzPFQ+XHJcbiAgPjtcclxuICBCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyPzogUmVhY3QuQ29tcG9uZW50VHlwZTxcclxuICAgIEJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXJQcm9wczxUTGFuZURhdGE+XHJcbiAgPjtcclxuICBCb29raW5nQ2FsZW5kYXJMYW5lPzogUmVhY3QuQ29tcG9uZW50VHlwZTxCb29raW5nQ2FsZW5kYXJMYW5lUHJvcHM8VD4+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExhbmVEYXRhPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVCwgVExhbmVEYXRhPlxyXG4gIGV4dGVuZHMgTGFuZVNvdXJjZURhdGE8VCwgVExhbmVEYXRhPiB7XHJcbiAgaXRlbXM6IFRbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0Qm9va2luZ3NUb0xhbmVzPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVCwgVExhbmVEYXRhPihcclxuICBib29raW5nczogVFtdLFxyXG4gIGZyb206IE1vbWVudCxcclxuICBtaW5MYW5lc0NvdW50OiBudW1iZXIsXHJcbiAgbGFuZXNTb3VyY2U6IExhbmVTb3VyY2VEYXRhPFQsIFRMYW5lRGF0YT5bXSA9IFtdLFxyXG4gIHVubWF0Y2hlZFRvRnJvbnQgPSB0cnVlXHJcbikge1xyXG4gIGlmICghYm9va2luZ3MpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgbGV0IGxhbmVzOiBMYW5lRGF0YTxULCBUTGFuZURhdGE+W10gPSBbXTtcclxuICBpZiAobGFuZXNTb3VyY2U/Lmxlbmd0aCkge1xyXG4gICAgbGFuZXMgPSBsYW5lc1NvdXJjZS5tYXAoKHNvdXJjZSkgPT4gKHtcclxuICAgICAgLi4uc291cmNlLFxyXG4gICAgICBpdGVtczogW10sXHJcbiAgICB9KSk7XHJcbiAgfVxyXG4gIGNvbnN0IGJvb2tpbmdzV2l0aG91dExhbmVLZXkgPSBib29raW5ncy5maWx0ZXIoXHJcbiAgICAoYSkgPT4gYS5sYW5lS2V5ID09PSB1bmRlZmluZWRcclxuICApO1xyXG4gIGNvbnN0IGJvb2tpbmdzV2l0aExhbmVLZXkgPSBib29raW5ncy5maWx0ZXIoKGEpID0+IGEubGFuZUtleSAhPT0gdW5kZWZpbmVkKTtcclxuICBpZiAoYm9va2luZ3NXaXRoTGFuZUtleS5sZW5ndGgpIHtcclxuICAgIGNvbnN0IGdyb3VwZWQgPSBncm91cEJ5KFxyXG4gICAgICBib29raW5nc1dpdGhMYW5lS2V5Lm1hcCgoYm9va2luZywgb3JpZ2luYWxJbmRleCkgPT4gKHtcclxuICAgICAgICAuLi5ib29raW5nLFxyXG4gICAgICAgIG9yaWdpbmFsSW5kZXgsXHJcbiAgICAgIH0pKSxcclxuICAgICAgKGEpID0+IGEubGFuZUtleVxyXG4gICAgKTtcclxuICAgIGxhbmVzID0gT2JqZWN0LmtleXMoZ3JvdXBlZCkubWFwKChrZXkpID0+ICh7XHJcbiAgICAgIGxhbmVLZXk6IE51bWJlcihrZXkpLFxyXG4gICAgICBpdGVtczogZ3JvdXBlZFtrZXldLFxyXG4gICAgICAuLi5sYW5lc1NvdXJjZT8uZmluZCgoYSkgPT4gYS5sYW5lS2V5ID09PSBOdW1iZXIoa2V5KSksXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBtaXNzaW5nTGFuZXMgPSBsYW5lc1NvdXJjZT8uZmlsdGVyKFxyXG4gICAgICAoYSkgPT4gIWxhbmVzLnNvbWUoKGwpID0+IGwubGFuZUtleSA9PT0gYS5sYW5lS2V5KVxyXG4gICAgKTtcclxuICAgIGxhbmVzID0gbGFuZXMuY29uY2F0KG1pc3NpbmdMYW5lcy5tYXAoKGEpID0+ICh7IC4uLmEsIGl0ZW1zOiBbXSB9KSkpO1xyXG4gIH1cclxuICBpZiAoYm9va2luZ3NXaXRob3V0TGFuZUtleS5sZW5ndGgpIHtcclxuICAgIGxldCByZW1haW5pbmdCb29raW5nczogKFQgJiBCb29raW5nQ2FsZW5kYXJJdGVtV2l0aE9yaWdpbmFsSW5kZXhUKVtdID1cclxuICAgICAgYm9va2luZ3NXaXRob3V0TGFuZUtleVxyXG4gICAgICAgIC5tYXAoKGJvb2tpbmcsIG9yaWdpbmFsSW5kZXgpID0+ICh7IC4uLmJvb2tpbmcsIG9yaWdpbmFsSW5kZXggfSkpXHJcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZnJvbS52YWx1ZU9mKCkgLSBiLmZyb20udmFsdWVPZigpKTtcclxuICAgIHdoaWxlIChyZW1haW5pbmdCb29raW5ncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBtaW4gPSA5OTk5OTk5OTk5OTk5OTtcclxuICAgICAgbGV0IGJvb2tpbmdJbmRleCA9IC0xO1xyXG4gICAgICBsZXQgbGFuZUluZGV4ID0gLTE7XHJcbiAgICAgIGxhbmVzLmZvckVhY2goKGxhbmUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGxhbmVzU291cmNlPy5zb21lKChsKSA9PiBsLmxhbmVLZXkgPT09IGxhbmUubGFuZUtleSkpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGFzdFRpbGwgPSBsYW5lLml0ZW1zW2xhbmUuaXRlbXMubGVuZ3RoIC0gMV0/LnRpbGwgPz8gZnJvbTtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZXMgPSByZW1haW5pbmdCb29raW5ncy5tYXAoKGJvb2tpbmcpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRpc3QgPSBib29raW5nLmZyb20uZGlmZihsYXN0VGlsbCk7XHJcbiAgICAgICAgICBpZiAobGFuZS5pdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKGRpc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGRpc3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgX21pbiA9IE1hdGgubWluKC4uLmRpc3RhbmNlcy5maWx0ZXIoKGEpID0+IGEgPj0gMCkpO1xyXG4gICAgICAgIGlmIChfbWluIDwgbWluKSB7XHJcbiAgICAgICAgICBib29raW5nSW5kZXggPSBkaXN0YW5jZXMuaW5kZXhPZihfbWluKTtcclxuICAgICAgICAgIGxhbmVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChib29raW5nSW5kZXggPj0gMCAmJiBsYW5lSW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxhbmVzW2xhbmVJbmRleF0uaXRlbXMgPSBsYW5lc1tsYW5lSW5kZXhdLml0ZW1zLmNvbmNhdCh7XHJcbiAgICAgICAgICAuLi5yZW1haW5pbmdCb29raW5nc1tib29raW5nSW5kZXhdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlbWFpbmluZ0Jvb2tpbmdzLnNwbGljZShib29raW5nSW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxhbmVzID0gbGFuZXMuY29uY2F0KHtcclxuICAgICAgICAgIGl0ZW1zOiBbeyAuLi5yZW1haW5pbmdCb29raW5nc1swXSB9XSxcclxuICAgICAgICAgIGxhbmVLZXk6IGxhbmVzLmxlbmd0aCxcclxuICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZW1haW5pbmdCb29raW5ncy5zaGlmdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBOYWl2ZSBzb2x1dGlvbiB0aGF0IGlzIG11Y2ggbGVzcyBjb21wdXRhdGlvbmFsbHkgaW50ZW5zaXZlIGJ1dCB5aWVsZHMgbW9yZSBsYW5lcyB0aGFuIG5lY2Vzc2FyeVxyXG4gICAgLypib29raW5ncy5mb3JFYWNoKChib29raW5nLCBvcmlnaW5hbEluZGV4KSA9PiB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGxhbmVzLmZvckVhY2goKGxhbmUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICghbGFuZS5zb21lKGkgPT4gaXRlbXNPdmVybGFwKGJvb2tpbmcsIGkpKSkge1xyXG4gICAgICAgIGxhbmVzW2luZGV4XSA9IGxhbmVzW2luZGV4XS5jb25jYXQoeyAuLi5ib29raW5nLCBvcmlnaW5hbEluZGV4IH0pO1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIGxhbmVzID0gbGFuZXMuY29uY2F0KFtbeyAuLi5ib29raW5nLCBvcmlnaW5hbEluZGV4IH1dXSk7XHJcbiAgICB9XHJcbiAgfSk7Ki9cclxuICB9XHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxhbmVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY29uc3QgbGFuZSA9IGxhbmVzW2luZGV4XTtcclxuICAgIGxhbmVzW2luZGV4XS5pdGVtcyA9IGxhbmUuaXRlbXMuc29ydChcclxuICAgICAgKGEsIGIpID0+IGEuZnJvbS52YWx1ZU9mKCkgLSBiLmZyb20udmFsdWVPZigpXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAobGFuZXMubGVuZ3RoIDwgbWluTGFuZXNDb3VudCkge1xyXG4gICAgbGFuZXMgPSBsYW5lcy5jb25jYXQoXHJcbiAgICAgIG5ldyBBcnJheTxMYW5lRGF0YTxULCBUTGFuZURhdGE+PihtaW5MYW5lc0NvdW50IC0gbGFuZXMubGVuZ3RoKVxyXG4gICAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgICAgLm1hcCgoXywgaW5kZXgpID0+ICh7XHJcbiAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICBsYW5lS2V5OiBpbmRleCArIGxhbmVzLmxlbmd0aCxcclxuICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgfSkpXHJcbiAgICApO1xyXG4gIH1cclxuICBjb25zdCBmaW5kSW5kZXggPSAoXHJcbiAgICBhcnI6IChMYW5lRGF0YTxULCBUTGFuZURhdGE+IHwgTGFuZVNvdXJjZURhdGE8VCwgVExhbmVEYXRhPilbXSxcclxuICAgIGxhbmVLZXk6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bWJlclxyXG4gICk6IG51bWJlciA9PiB7XHJcbiAgICBjb25zdCB1bm1hdGNoZWRWYWwgPSB1bm1hdGNoZWRUb0Zyb250XHJcbiAgICAgID8gTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVJcclxuICAgICAgOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgIGlmIChsYW5lS2V5ID09PSB1bmRlZmluZWQgfHwgbGFuZUtleSA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdW5tYXRjaGVkVmFsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW5kZXggPSBhcnIuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmxhbmVLZXkgPT09IGxhbmVLZXkpO1xyXG4gICAgcmV0dXJuIGluZGV4ID09PSAtMSA/IHVubWF0Y2hlZFZhbCA6IGluZGV4O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNvcnRBcnJheUJ5TGFuZUtleXMgPSAoXHJcbiAgICByZWZlcmVuY2VBcnJheTogTGFuZVNvdXJjZURhdGE8VCwgVExhbmVEYXRhPltdLFxyXG4gICAgYXJyYXlUb1NvcnQ6IExhbmVEYXRhPFQsIFRMYW5lRGF0YT5bXVxyXG4gICk6IExhbmVEYXRhPFQsIFRMYW5lRGF0YT5bXSA9PiB7XHJcbiAgICByZXR1cm4gWy4uLmFycmF5VG9Tb3J0XS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgIGNvbnN0IGluZGV4QSA9IGZpbmRJbmRleChyZWZlcmVuY2VBcnJheSwgYS5sYW5lS2V5KTtcclxuICAgICAgY29uc3QgaW5kZXhCID0gZmluZEluZGV4KHJlZmVyZW5jZUFycmF5LCBiLmxhbmVLZXkpO1xyXG4gICAgICByZXR1cm4gaW5kZXhBIC0gaW5kZXhCO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBsYW5lcyA9IHNvcnRBcnJheUJ5TGFuZUtleXMobGFuZXNTb3VyY2UsIGxhbmVzKTtcclxuICByZXR1cm4gbGFuZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpdGVtc092ZXJsYXA8VCBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckl0ZW1UPihhOiBULCBiOiBUKSB7XHJcbiAgaWYgKCFhPy5mcm9tIHx8ICFhPy50aWxsIHx8ICFiPy5mcm9tIHx8ICFiPy50aWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChiLnRpbGwuaXNCZWZvcmUoYS5mcm9tKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoYi5mcm9tLmlzQWZ0ZXIoYS50aWxsKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEl0ZW1Qb3NpdGlvblN0eWxlID0gKG1hcmdpblN0YXJ0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIpID0+XHJcbiAgKHtcclxuICAgIG1hcmdpbkxlZnQ6IGAke21hcmdpblN0YXJ0ICogMTAwfSVgLFxyXG4gICAgd2lkdGg6IGAke3dpZHRoICogMTAwfSVgLFxyXG4gIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllcyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSXRlbXNEaW1lbnNpb25zPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVD4oXHJcbiAgaXRlbXM6IFRbXSxcclxuICBmcm9tOiBNb21lbnQsXHJcbiAgdGlsbDogTW9tZW50XHJcbikge1xyXG4gIGxldCBsYXN0RW5kID0gMDtcclxuICBjb25zdCB3aWR0aE1zID0gdGlsbC52YWx1ZU9mKCkgLSBmcm9tLnZhbHVlT2YoKTtcclxuICBjb25zdCBzdGFydE1zID0gZnJvbS52YWx1ZU9mKCk7XHJcbiAgY29uc3QgZW5kTXMgPSB0aWxsLnZhbHVlT2YoKTtcclxuICByZXR1cm4gd2lkdGhNcyA+IDBcclxuICAgID8gaXRlbXM/Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0SXNDdXQgPSBpdGVtLmZyb20udmFsdWVPZigpIDwgc3RhcnRNcztcclxuICAgICAgICBjb25zdCByZWFsU3RhcnQgPSAoaXRlbS5mcm9tLnZhbHVlT2YoKSAtIHN0YXJ0TXMpIC8gd2lkdGhNcztcclxuICAgICAgICBjb25zdCByZWFsRnJvbSA9IHN0YXJ0SXNDdXQgPyBtb21lbnQoc3RhcnRNcykgOiBtb21lbnQoaXRlbS5mcm9tKTtcclxuICAgICAgICBjb25zdCBzdGFydCA9IHN0YXJ0SXNDdXQgPyAwIDogcmVhbFN0YXJ0O1xyXG4gICAgICAgIGNvbnN0IGVuZElzQ3V0ID0gaXRlbS50aWxsLnZhbHVlT2YoKSA+IGVuZE1zO1xyXG4gICAgICAgIGNvbnN0IHJlYWxFbmQgPSAoaXRlbS50aWxsLnZhbHVlT2YoKSAtIHN0YXJ0TXMpIC8gd2lkdGhNcztcclxuICAgICAgICBjb25zdCBlbmQgPSBlbmRJc0N1dCA/IChlbmRNcyAtIHN0YXJ0TXMpIC8gd2lkdGhNcyA6IHJlYWxFbmQ7XHJcbiAgICAgICAgY29uc3QgcmVhbFRpbGwgPSBlbmRJc0N1dCA/IG1vbWVudChlbmRNcykgOiBtb21lbnQoaXRlbS50aWxsKTtcclxuICAgICAgICBjb25zdCBtYXJnaW5TdGFydCA9IHN0YXJ0IC0gbGFzdEVuZDtcclxuICAgICAgICBsYXN0RW5kID0gKGl0ZW0udGlsbC52YWx1ZU9mKCkgLSBzdGFydE1zKSAvIHdpZHRoTXM7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICBzdGFydCxcclxuICAgICAgICAgIHJlYWxTdGFydCxcclxuICAgICAgICAgIHJlYWxGcm9tLFxyXG4gICAgICAgICAgc3RhcnRJc0N1dCxcclxuICAgICAgICAgIHdpZHRoOiBlbmQgLSBzdGFydCxcclxuICAgICAgICAgIGVuZCxcclxuICAgICAgICAgIHJlYWxFbmQsXHJcbiAgICAgICAgICByZWFsVGlsbCxcclxuICAgICAgICAgIGVuZElzQ3V0LFxyXG4gICAgICAgICAgbWFyZ2luU3RhcnQsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgIDogW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNvbnRyb2xJdGVtcyA9IChcclxuICBmcm9tOiBNb21lbnQsXHJcbiAgdGlsbDogTW9tZW50LFxyXG4gIHN0ZXA6IER1cmF0aW9uLFxyXG4gIHN0YXJ0T2ZTdGVwOiBNb21lbnRcclxuKSA9PiB7XHJcbiAgaWYgKCFmcm9tIHx8ICF0aWxsIHx8ICFzdGVwKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGxldCBzdGVwcyA9IE1hdGgubWF4KFxyXG4gICAgTWF0aC5jZWlsKCh0aWxsLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpKSAvIHN0ZXAuYXNNaWxsaXNlY29uZHMoKSksXHJcbiAgICAyXHJcbiAgKTtcclxuICBsZXQgc3VidHJhY3QgPVxyXG4gICAgKHN0YXJ0T2ZTdGVwLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpKSAlIHN0ZXAuYXNNaWxsaXNlY29uZHMoKTtcclxuICBpZiAoc3VidHJhY3QgPiAwKSB7XHJcbiAgICBzdWJ0cmFjdCAtPSBzdGVwLmFzTWlsbGlzZWNvbmRzKCk7XHJcbiAgfVxyXG4gIGlmICh0aWxsLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpID4gc3RlcC5hc01pbGxpc2Vjb25kcygpKSB7XHJcbiAgICBzdGVwcyArPSAxO1xyXG4gIH1cclxuICByZXR1cm4gbmV3IEFycmF5KHN0ZXBzKS5maWxsKDApLm1hcCgoXywgaW5kZXgpID0+ICh7XHJcbiAgICBmcm9tOiBmcm9tXHJcbiAgICAgIC5jbG9uZSgpXHJcbiAgICAgIC5hZGQoc3VidHJhY3QpXHJcbiAgICAgIC5hZGQoc3RlcC5hc01pbGxpc2Vjb25kcygpICogaW5kZXgpLFxyXG4gICAgdGlsbDogZnJvbVxyXG4gICAgICAuY2xvbmUoKVxyXG4gICAgICAuYWRkKHN1YnRyYWN0KVxyXG4gICAgICAuYWRkKHN0ZXAuYXNNaWxsaXNlY29uZHMoKSAqIChpbmRleCArIDEpKSxcclxuICB9KSk7XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRJdGVtIHtcclxuICBsZWZ0OiBudW1iZXI7XHJcbiAgZGF0ZTogTW9tZW50O1xyXG4gIHN0ZXBQcm9wb3J0aW9uOiBudW1iZXI7XHJcbiAgb3BhY2l0eTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVHcmlkSXRlbXMgPSAoXHJcbiAgZnJvbTogTW9tZW50LFxyXG4gIHRpbGw6IE1vbWVudCxcclxuICBzdGVwOiBEdXJhdGlvbixcclxuICBjb250YWluZXJXaWR0aFB4OiBudW1iZXIsXHJcbiAgYXZhaWxhYmxlU3RlcHM6IER1cmF0aW9uW10sXHJcbiAgZ29hbEdyaWRXaWR0aFB4OiBudW1iZXIsXHJcbiAgc3RhcnRPZlN0ZXA6IE1vbWVudFxyXG4pOiB7IGl0ZW1zOiBHcmlkSXRlbVtdOyBiZXN0U3RlcDogRHVyYXRpb24gfSA9PiB7XHJcbiAgaWYgKFxyXG4gICAgIWZyb20gfHxcclxuICAgICF0aWxsIHx8XHJcbiAgICAhY29udGFpbmVyV2lkdGhQeCB8fFxyXG4gICAgIWF2YWlsYWJsZVN0ZXBzPy5sZW5ndGggfHxcclxuICAgICFnb2FsR3JpZFdpZHRoUHggfHxcclxuICAgICFzdGVwIHx8XHJcbiAgICAhc3RhcnRPZlN0ZXBcclxuICApIHtcclxuICAgIHJldHVybiB7IGJlc3RTdGVwOiBhdmFpbGFibGVTdGVwcz8uWzBdLCBpdGVtczogW10gfTtcclxuICB9XHJcbiAgY29uc3Qgc3RlcE1zID0gc3RlcC5hc01pbGxpc2Vjb25kcygpO1xyXG4gIGNvbnN0IGZyb21NcyA9IGZyb20udmFsdWVPZigpO1xyXG4gIGNvbnN0IHRpbGxNcyA9IHRpbGwudmFsdWVPZigpO1xyXG4gIGNvbnN0IHRpbWVMZW5ndGhNcyA9IHRpbGxNcyAtIGZyb21NcztcclxuICBjb25zdCBhcHByb3hpbWF0ZVN0ZXBzQ291bnQgPSBjb250YWluZXJXaWR0aFB4IC8gZ29hbEdyaWRXaWR0aFB4O1xyXG4gIGNvbnN0IGFwcHJveGltYXRlU3RlcE1zID0gdGltZUxlbmd0aE1zIC8gYXBwcm94aW1hdGVTdGVwc0NvdW50O1xyXG4gIGNvbnN0IGF2YWlsYWJsZVN0ZXBzRGlzdGFuY2VzTXMgPSBhdmFpbGFibGVTdGVwcy5tYXAoKGEpID0+XHJcbiAgICBNYXRoLmFicyhhLmFzTWlsbGlzZWNvbmRzKCkgLSBhcHByb3hpbWF0ZVN0ZXBNcylcclxuICApO1xyXG4gIGNvbnN0IHNtYWxsZXN0RGlzdGFuY2UgPSBNYXRoLm1pbiguLi5hdmFpbGFibGVTdGVwc0Rpc3RhbmNlc01zKTtcclxuICBjb25zdCBiZXN0U3RlcEluZGV4ID0gYXZhaWxhYmxlU3RlcHNEaXN0YW5jZXNNcy5maW5kSW5kZXgoXHJcbiAgICAoYSkgPT4gYSA9PT0gc21hbGxlc3REaXN0YW5jZVxyXG4gICk7XHJcbiAgY29uc3QgYmVzdFN0ZXAgPSBhdmFpbGFibGVTdGVwc1tiZXN0U3RlcEluZGV4XTtcclxuICBjb25zdCBzdWJ0cmFjdCA9XHJcbiAgICAoZnJvbU1zICsgZnJvbS51dGNPZmZzZXQoKSAqIDYwICogMTAwMCkgJSBiZXN0U3RlcC5hc01pbGxpc2Vjb25kcygpO1xyXG4gIGxldCBzdGFydE1zID0gZnJvbU1zIC0gc3VidHJhY3Q7XHJcbiAgbGV0IHN0ZXBzOiBNb21lbnRbXSA9IFtdO1xyXG4gIHdoaWxlIChzdGFydE1zIDw9IHRpbGxNcykge1xyXG4gICAgc3RlcHMgPSBzdGVwcy5jb25jYXQoZnJvbS5jbG9uZSgpLmFkZChzdGFydE1zIC0gZnJvbU1zLCAnbXMnKSk7XHJcbiAgICBzdGFydE1zICs9IGJlc3RTdGVwLmFzTWlsbGlzZWNvbmRzKCk7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBpdGVtczogc3RlcHNcclxuICAgICAgLmZpbHRlcigoYSkgPT4gYS52YWx1ZU9mKCkgPiBmcm9tTXMgJiYgYS52YWx1ZU9mKCkgPCB0aWxsTXMpXHJcbiAgICAgIC5tYXAoKGRhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBzdGVwUHJvcG9ydGlvbiA9XHJcbiAgICAgICAgICAoKGRhdGUudmFsdWVPZigpICsgZnJvbS51dGNPZmZzZXQoKSAqIDYwICogMTAwMCkgJSBzdGVwTXMpIC8gc3RlcE1zO1xyXG4gICAgICAgIGxldCBudW1iZXJPZlJvb3RzID0gMDtcclxuICAgICAgICBsZXQgY3VycmVudCA9IHN0ZXBQcm9wb3J0aW9uO1xyXG4gICAgICAgIGxldCBjdXJyZW50VG9wID0gMTtcclxuICAgICAgICBsZXQgdG9sZXJhbmNlID0gMC4wMDE7XHJcbiAgICAgICAgd2hpbGUgKGN1cnJlbnQgPiB0b2xlcmFuY2UgJiYgY3VycmVudCA8IGN1cnJlbnRUb3AgLSB0b2xlcmFuY2UpIHtcclxuICAgICAgICAgIG51bWJlck9mUm9vdHMgKz0gMTtcclxuICAgICAgICAgIGN1cnJlbnRUb3AgPSAxIC8gTWF0aC5wb3coMiwgbnVtYmVyT2ZSb290cyk7XHJcbiAgICAgICAgICBpZiAoY3VycmVudCA+IGN1cnJlbnRUb3ApIHtcclxuICAgICAgICAgICAgY3VycmVudCAtPSBjdXJyZW50VG9wO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbGVmdDogKGRhdGUudmFsdWVPZigpIC0gZnJvbU1zKSAvIHRpbWVMZW5ndGhNcyxcclxuICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICBzdGVwUHJvcG9ydGlvbixcclxuICAgICAgICAgIG9wYWNpdHk6IDEgLyAobnVtYmVyT2ZSb290cyB8fCAxKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KSxcclxuICAgIGJlc3RTdGVwLFxyXG4gIH07XHJcbn07XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY1OWNlMTFhYTdkYjVhZjhlMWZlXCIpIl0sIm5hbWVzIjpbIm1vbWVudCIsImdyb3VwQnkiLCJpdGVtcyIsIml0ZXJhdG9yIiwicmVkdWNlIiwib2JqIiwiaXRlbSIsImtleSIsImhhc093blByb3BlcnR5IiwicHVzaCIsInNwbGl0Qm9va2luZ3NUb0xhbmVzIiwiYm9va2luZ3MiLCJmcm9tIiwibWluTGFuZXNDb3VudCIsImxhbmVzU291cmNlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwidW5tYXRjaGVkVG9Gcm9udCIsImxhbmVzIiwibWFwIiwic291cmNlIiwiX29iamVjdFNwcmVhZCIsImJvb2tpbmdzV2l0aG91dExhbmVLZXkiLCJmaWx0ZXIiLCJhIiwibGFuZUtleSIsImJvb2tpbmdzV2l0aExhbmVLZXkiLCJncm91cGVkIiwiYm9va2luZyIsIm9yaWdpbmFsSW5kZXgiLCJPYmplY3QiLCJrZXlzIiwiTnVtYmVyIiwiZmluZCIsIm1pc3NpbmdMYW5lcyIsInNvbWUiLCJsIiwiY29uY2F0IiwicmVtYWluaW5nQm9va2luZ3MiLCJzb3J0IiwiYiIsInZhbHVlT2YiLCJfbG9vcCIsIm1pbiIsImJvb2tpbmdJbmRleCIsImxhbmVJbmRleCIsImZvckVhY2giLCJsYW5lIiwiaW5kZXgiLCJfbGFuZSRpdGVtcyR0aWxsIiwiX2xhbmUkaXRlbXMiLCJsYXN0VGlsbCIsInRpbGwiLCJkaXN0YW5jZXMiLCJkaXN0IiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJfbWluIiwiYXBwbHkiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJpbmRleE9mIiwic3BsaWNlIiwiZGF0YSIsInNoaWZ0IiwiQXJyYXkiLCJmaWxsIiwiXyIsImZpbmRJbmRleCIsImFyciIsInVubWF0Y2hlZFZhbCIsIk1JTl9TQUZFX0lOVEVHRVIiLCJNQVhfU0FGRV9JTlRFR0VSIiwic29ydEFycmF5QnlMYW5lS2V5cyIsInJlZmVyZW5jZUFycmF5IiwiYXJyYXlUb1NvcnQiLCJpbmRleEEiLCJpbmRleEIiLCJpdGVtc092ZXJsYXAiLCJpc0JlZm9yZSIsImlzQWZ0ZXIiLCJnZXRJdGVtUG9zaXRpb25TdHlsZSIsIm1hcmdpblN0YXJ0Iiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwiY2FsY3VsYXRlSXRlbXNEaW1lbnNpb25zIiwibGFzdEVuZCIsIndpZHRoTXMiLCJzdGFydE1zIiwiZW5kTXMiLCJzdGFydElzQ3V0IiwicmVhbFN0YXJ0IiwicmVhbEZyb20iLCJzdGFydCIsImVuZElzQ3V0IiwicmVhbEVuZCIsImVuZCIsInJlYWxUaWxsIiwiZ2VuZXJhdGVDb250cm9sSXRlbXMiLCJzdGVwIiwic3RhcnRPZlN0ZXAiLCJzdGVwcyIsIm1heCIsImNlaWwiLCJhc01pbGxpc2Vjb25kcyIsInN1YnRyYWN0IiwiY2xvbmUiLCJhZGQiLCJnZW5lcmF0ZUdyaWRJdGVtcyIsImNvbnRhaW5lcldpZHRoUHgiLCJhdmFpbGFibGVTdGVwcyIsImdvYWxHcmlkV2lkdGhQeCIsImJlc3RTdGVwIiwic3RlcE1zIiwiZnJvbU1zIiwidGlsbE1zIiwidGltZUxlbmd0aE1zIiwiYXBwcm94aW1hdGVTdGVwc0NvdW50IiwiYXBwcm94aW1hdGVTdGVwTXMiLCJhdmFpbGFibGVTdGVwc0Rpc3RhbmNlc01zIiwic21hbGxlc3REaXN0YW5jZSIsImJlc3RTdGVwSW5kZXgiLCJ1dGNPZmZzZXQiLCJkYXRlIiwic3RlcFByb3BvcnRpb24iLCJudW1iZXJPZlJvb3RzIiwiY3VycmVudCIsImN1cnJlbnRUb3AiLCJ0b2xlcmFuY2UiLCJwb3ciLCJsZWZ0Iiwib3BhY2l0eSIsInJlYWN0SG90TG9hZGVyIiwicmVhY3RIb3RMb2FkZXJHbG9iYWwiLCJkZWZhdWx0IiwicmVnaXN0ZXIiLCJsZWF2ZU1vZHVsZSIsIm1vZHVsZSJdLCJzb3VyY2VSb290IjoiIn0=