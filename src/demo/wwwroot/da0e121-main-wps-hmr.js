webpackHotUpdate("main",{

/***/ "./src/lib/components/bookingCalendar/utils.ts":
/*!*****************************************************!*\
  !*** ./src/lib/components/bookingCalendar/utils.ts ***!
  \*****************************************************/
/*! exports provided: groupBy, splitBookingsToLanes, itemsOverlap, getItemPositionStyle, calculateItemsDimensions, generateControlItems, generateGridItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitBookingsToLanes", function() { return splitBookingsToLanes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemsOverlap", function() { return itemsOverlap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemPositionStyle", function() { return getItemPositionStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateItemsDimensions", function() { return calculateItemsDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateControlItems", function() { return generateControlItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGridItems", function() { return generateGridItems; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    (function () {
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
      } // Naive solution that is much less computationally intensive but yields more lanes than necessary

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

    })();
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

  lanes = lanes.sort(function (a, b) {
    return a.laneKey - b.laneKey;
  });
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

  var steps = Math.ceil((till.valueOf() - from.valueOf()) / step.asMilliseconds());
  var subtract = (startOfStep.valueOf() - from.valueOf()) % step.asMilliseconds();

  if (subtract > 0) {
    subtract -= step.asMilliseconds();
  }

  if (till.valueOf() - from.valueOf() > step.asMilliseconds()) {
    steps += 1;
  }

  return new Array(steps).fill(0).map(function (_, index) {
    return {
      from: moment__WEBPACK_IMPORTED_MODULE_0___default()(from).add(subtract).add(step.asMilliseconds() * index),
      till: moment__WEBPACK_IMPORTED_MODULE_0___default()(from).add(subtract).add(step.asMilliseconds() * (index + 1))
    };
  });
};
var generateGridItems = function generateGridItems(from, till, step) {
  var subdivisions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var doEdges = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (!from || !till || !step || subdivisions < 1) {
    return [];
  }

  var steps = Math.max(0, Math.floor((till.valueOf() - from.valueOf()) / step.asMilliseconds() * subdivisions) + (doEdges ? 1 : -1));
  var width = till.valueOf() - from.valueOf();
  return new Array(steps).fill(0).map(function (_, index) {
    return step.asMilliseconds() / subdivisions * (index + (doEdges ? 0 : 1)) / width;
  });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvYm9va2luZ0NhbGVuZGFyL3V0aWxzLnRzIl0sIm5hbWVzIjpbImdyb3VwQnkiLCJpdGVtcyIsIml0ZXJhdG9yIiwicmVkdWNlIiwib2JqIiwiaXRlbSIsImtleSIsImhhc093blByb3BlcnR5IiwicHVzaCIsInNwbGl0Qm9va2luZ3NUb0xhbmVzIiwiYm9va2luZ3MiLCJmcm9tIiwibWluTGFuZXNDb3VudCIsImxhbmVzU291cmNlIiwibGFuZXMiLCJsZW5ndGgiLCJtYXAiLCJzb3VyY2UiLCJib29raW5nc1dpdGhvdXRMYW5lS2V5IiwiZmlsdGVyIiwiYSIsImxhbmVLZXkiLCJ1bmRlZmluZWQiLCJib29raW5nc1dpdGhMYW5lS2V5IiwiZ3JvdXBlZCIsImJvb2tpbmciLCJvcmlnaW5hbEluZGV4IiwiT2JqZWN0Iiwia2V5cyIsIk51bWJlciIsImZpbmQiLCJtaXNzaW5nTGFuZXMiLCJzb21lIiwibCIsImNvbmNhdCIsInJlbWFpbmluZ0Jvb2tpbmdzIiwic29ydCIsImIiLCJ2YWx1ZU9mIiwibWluIiwiYm9va2luZ0luZGV4IiwibGFuZUluZGV4IiwiZm9yRWFjaCIsImxhbmUiLCJpbmRleCIsImxhc3RUaWxsIiwidGlsbCIsImRpc3RhbmNlcyIsImRpc3QiLCJkaWZmIiwiTWF0aCIsImFicyIsIl9taW4iLCJpbmRleE9mIiwic3BsaWNlIiwiZGF0YSIsInNoaWZ0IiwiQXJyYXkiLCJmaWxsIiwiXyIsIml0ZW1zT3ZlcmxhcCIsImlzQmVmb3JlIiwiaXNBZnRlciIsImdldEl0ZW1Qb3NpdGlvblN0eWxlIiwibWFyZ2luU3RhcnQiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJjYWxjdWxhdGVJdGVtc0RpbWVuc2lvbnMiLCJsYXN0RW5kIiwid2lkdGhNcyIsInN0YXJ0TXMiLCJlbmRNcyIsInN0YXJ0SXNDdXQiLCJyZWFsU3RhcnQiLCJyZWFsRnJvbSIsIm1vbWVudCIsInN0YXJ0IiwiZW5kSXNDdXQiLCJyZWFsRW5kIiwiZW5kIiwicmVhbFRpbGwiLCJnZW5lcmF0ZUNvbnRyb2xJdGVtcyIsInN0ZXAiLCJzdGFydE9mU3RlcCIsInN0ZXBzIiwiY2VpbCIsImFzTWlsbGlzZWNvbmRzIiwic3VidHJhY3QiLCJhZGQiLCJnZW5lcmF0ZUdyaWRJdGVtcyIsInN1YmRpdmlzaW9ucyIsImRvRWRnZXMiLCJtYXgiLCJmbG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVPLFNBQVNBLE9BQVQsQ0FBb0JDLEtBQXBCLEVBQWdDQyxRQUFoQyxFQUF3RTtBQUM3RSxTQUFPRCxLQUFLLENBQUNFLE1BQU4sQ0FBYSxVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUNqQyxRQUFNQyxHQUFHLEdBQUdKLFFBQVEsQ0FBQ0csSUFBRCxDQUFwQjs7QUFDQSxRQUFJLENBQUNELEdBQUcsQ0FBQ0csY0FBSixDQUFtQkQsR0FBbkIsQ0FBTCxFQUE4QjtBQUM1QkYsU0FBRyxDQUFDRSxHQUFELENBQUgsR0FBVyxFQUFYO0FBQ0Q7O0FBQ0RGLE9BQUcsQ0FBQ0UsR0FBRCxDQUFILENBQVNFLElBQVQsQ0FBY0gsSUFBZDtBQUNBLFdBQU9ELEdBQVA7QUFDRCxHQVBNLEVBT0osRUFQSSxDQUFQO0FBUUQ7QUFxQk0sU0FBU0ssb0JBQVQsQ0FDTEMsUUFESyxFQUVMQyxJQUZLLEVBR0xDLGFBSEssRUFLTDtBQUFBLE1BREFDLFdBQ0EsdUVBRDhDLEVBQzlDOztBQUNBLE1BQUksQ0FBQ0gsUUFBTCxFQUFlO0FBQ2IsV0FBTyxFQUFQO0FBQ0Q7O0FBQ0QsTUFBSUksS0FBK0IsR0FBRyxFQUF0Qzs7QUFDQSxNQUFJRCxXQUFKLGFBQUlBLFdBQUosZUFBSUEsV0FBVyxDQUFFRSxNQUFqQixFQUF5QjtBQUN2QkQsU0FBSyxHQUFHRCxXQUFXLENBQUNHLEdBQVosQ0FBZ0IsVUFBQUMsTUFBTTtBQUFBLDZDQUN6QkEsTUFEeUI7QUFFNUJoQixhQUFLLEVBQUU7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QUNtQyxJQUFWLElBQWtCLENBQUNvQyxJQUFuQixJQUEyQlEsWUFBWSxHQUFHLENBQTlDLEVBQWlEO0FBQy9DLFdBQU8sRUFBUDtBQUNEOztBQUNELE1BQU1OLEtBQUssR0FBR2xDLElBQUksQ0FBQzBDLEdBQUwsQ0FDWixDQURZLEVBRVoxQyxJQUFJLENBQUMyQyxLQUFMLENBQ0csQ0FBQy9DLElBQUksQ0FBQ1IsT0FBTCxLQUFpQjNCLElBQUksQ0FBQzJCLE9BQUwsRUFBbEIsSUFBb0M0QyxJQUFJLENBQUNJLGNBQUwsRUFBckMsR0FBOERJLFlBRGhFLEtBRUtDLE9BQU8sR0FBRyxDQUFILEdBQU8sQ0FBQyxDQUZwQixDQUZZLENBQWQ7QUFNQSxNQUFNMUIsS0FBSyxHQUFHbkIsSUFBSSxDQUFDUixPQUFMLEtBQWlCM0IsSUFBSSxDQUFDMkIsT0FBTCxFQUEvQjtBQUNBLFNBQU8sSUFBSW1CLEtBQUosQ0FBVTJCLEtBQVYsRUFDSjFCLElBREksQ0FDQyxDQURELEVBRUoxQyxHQUZJLENBR0gsVUFBQzJDLENBQUQsRUFBSWYsS0FBSjtBQUFBLFdBQ0lzQyxJQUFJLENBQUNJLGNBQUwsS0FBd0JJLFlBQXpCLElBQTBDOUMsS0FBSyxJQUFJK0MsT0FBTyxHQUFHLENBQUgsR0FBTyxDQUFsQixDQUEvQyxDQUFELEdBQ0ExQixLQUZGO0FBQUEsR0FIRyxDQUFQO0FBT0QsQ0F4Qk07Ozs7Ozs7Ozs7MEJBck9TakUsTzswQkE4QkFTLG9COzBCQWdIQW1ELFk7MEJBYUhHLG9COzBCQU1HSSx3QjswQkFzQ0hjLG9COzBCQThCQVEsaUIiLCJmaWxlIjoiZGEwZTEyMS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50LCB7IE1vbWVudCwgRHVyYXRpb24gfSBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBCb29raW5nQ2FsZW5kYXJJdGVtUHJvcHMgfSBmcm9tICcuL2Jvb2tpbmdDYWxlbmRhckl0ZW0nO1xyXG5pbXBvcnQgeyBCb29raW5nQ2FsZW5kYXJMYW5lUHJvcHMgfSBmcm9tICcuL2Jvb2tpbmdDYWxlbmRhckxhbmUnO1xyXG5pbXBvcnQgeyBCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyUHJvcHMgfSBmcm9tICcuL2Jvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXInO1xyXG5pbXBvcnQgeyBCb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtUHJvcHMgfSBmcm9tICcuL2Jvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW0nO1xyXG5pbXBvcnQge1xyXG4gIEJvb2tpbmdDYWxlbmRhckl0ZW1ULFxyXG4gIEJvb2tpbmdDYWxlbmRhckl0ZW1XaXRoT3JpZ2luYWxJbmRleFQsXHJcbn0gZnJvbSAnLi9jb21tb24nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwQnk8VD4oaXRlbXM6IFRbXSwgaXRlcmF0b3I6IChpdGVtOiBUKSA9PiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICByZXR1cm4gaXRlbXMucmVkdWNlKChvYmosIGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGtleSA9IGl0ZXJhdG9yKGl0ZW0pO1xyXG4gICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICBvYmpba2V5XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgb2JqW2tleV0ucHVzaChpdGVtKTtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExhbmVTb3VyY2VEYXRhPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVCwgVExhbmVEYXRhPiB7XHJcbiAgbGFuZUtleTogbnVtYmVyO1xyXG4gIGRhdGE/OiBUTGFuZURhdGE7XHJcbiAgcm93Q2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIEJvb2tpbmdDYWxlbmRhckl0ZW0/OiBSZWFjdC5Db21wb25lbnRUeXBlPEJvb2tpbmdDYWxlbmRhckl0ZW1Qcm9wczxUPj47XHJcbiAgQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbT86IFJlYWN0LkNvbXBvbmVudFR5cGU8XHJcbiAgICBCb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtUHJvcHM8VD5cclxuICA+O1xyXG4gIEJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXI/OiBSZWFjdC5Db21wb25lbnRUeXBlPFxyXG4gICAgQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlclByb3BzPFRMYW5lRGF0YT5cclxuICA+O1xyXG4gIEJvb2tpbmdDYWxlbmRhckxhbmU/OiBSZWFjdC5Db21wb25lbnRUeXBlPEJvb2tpbmdDYWxlbmRhckxhbmVQcm9wczxUPj47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGFuZURhdGE8VCBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckl0ZW1ULCBUTGFuZURhdGE+XHJcbiAgZXh0ZW5kcyBMYW5lU291cmNlRGF0YTxULCBUTGFuZURhdGE+IHtcclxuICBpdGVtczogVFtdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3BsaXRCb29raW5nc1RvTGFuZXM8VCBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckl0ZW1ULCBUTGFuZURhdGE+KFxyXG4gIGJvb2tpbmdzOiBUW10sXHJcbiAgZnJvbTogTW9tZW50LFxyXG4gIG1pbkxhbmVzQ291bnQ6IG51bWJlcixcclxuICBsYW5lc1NvdXJjZTogTGFuZVNvdXJjZURhdGE8VCwgVExhbmVEYXRhPltdID0gW11cclxuKSB7XHJcbiAgaWYgKCFib29raW5ncykge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICBsZXQgbGFuZXM6IExhbmVEYXRhPFQsIFRMYW5lRGF0YT5bXSA9IFtdO1xyXG4gIGlmIChsYW5lc1NvdXJjZT8ubGVuZ3RoKSB7XHJcbiAgICBsYW5lcyA9IGxhbmVzU291cmNlLm1hcChzb3VyY2UgPT4gKHtcclxuICAgICAgLi4uc291cmNlLFxyXG4gICAgICBpdGVtczogW10sXHJcbiAgICB9KSk7XHJcbiAgfVxyXG4gIGNvbnN0IGJvb2tpbmdzV2l0aG91dExhbmVLZXkgPSBib29raW5ncy5maWx0ZXIoYSA9PiBhLmxhbmVLZXkgPT09IHVuZGVmaW5lZCk7XHJcbiAgY29uc3QgYm9va2luZ3NXaXRoTGFuZUtleSA9IGJvb2tpbmdzLmZpbHRlcihhID0+IGEubGFuZUtleSAhPT0gdW5kZWZpbmVkKTtcclxuICBpZiAoYm9va2luZ3NXaXRoTGFuZUtleS5sZW5ndGgpIHtcclxuICAgIGNvbnN0IGdyb3VwZWQgPSBncm91cEJ5KFxyXG4gICAgICBib29raW5nc1dpdGhMYW5lS2V5Lm1hcCgoYm9va2luZywgb3JpZ2luYWxJbmRleCkgPT4gKHtcclxuICAgICAgICAuLi5ib29raW5nLFxyXG4gICAgICAgIG9yaWdpbmFsSW5kZXgsXHJcbiAgICAgIH0pKSxcclxuICAgICAgYSA9PiBhLmxhbmVLZXlcclxuICAgICk7XHJcbiAgICBsYW5lcyA9IE9iamVjdC5rZXlzKGdyb3VwZWQpLm1hcChrZXkgPT4gKHtcclxuICAgICAgbGFuZUtleTogTnVtYmVyKGtleSksXHJcbiAgICAgIGl0ZW1zOiBncm91cGVkW2tleV0sXHJcbiAgICAgIC4uLmxhbmVzU291cmNlPy5maW5kKGEgPT4gYS5sYW5lS2V5ID09PSBOdW1iZXIoa2V5KSksXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBtaXNzaW5nTGFuZXMgPSBsYW5lc1NvdXJjZT8uZmlsdGVyKFxyXG4gICAgICBhID0+ICFsYW5lcy5zb21lKGwgPT4gbC5sYW5lS2V5ID09PSBhLmxhbmVLZXkpXHJcbiAgICApO1xyXG4gICAgbGFuZXMgPSBsYW5lcy5jb25jYXQobWlzc2luZ0xhbmVzLm1hcChhID0+ICh7IC4uLmEsIGl0ZW1zOiBbXSB9KSkpO1xyXG4gIH1cclxuICBpZiAoYm9va2luZ3NXaXRob3V0TGFuZUtleS5sZW5ndGgpIHtcclxuICAgIGxldCByZW1haW5pbmdCb29raW5nczogKFQgJlxyXG4gICAgICBCb29raW5nQ2FsZW5kYXJJdGVtV2l0aE9yaWdpbmFsSW5kZXhUKVtdID0gYm9va2luZ3NXaXRob3V0TGFuZUtleVxyXG4gICAgICAubWFwKChib29raW5nLCBvcmlnaW5hbEluZGV4KSA9PiAoeyAuLi5ib29raW5nLCBvcmlnaW5hbEluZGV4IH0pKVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5mcm9tLnZhbHVlT2YoKSAtIGIuZnJvbS52YWx1ZU9mKCkpO1xyXG4gICAgd2hpbGUgKHJlbWFpbmluZ0Jvb2tpbmdzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IG1pbiA9IDk5OTk5OTk5OTk5OTk5O1xyXG4gICAgICBsZXQgYm9va2luZ0luZGV4ID0gLTE7XHJcbiAgICAgIGxldCBsYW5lSW5kZXggPSAtMTtcclxuICAgICAgbGFuZXMuZm9yRWFjaCgobGFuZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAobGFuZXNTb3VyY2U/LnNvbWUobCA9PiBsLmxhbmVLZXkgPT09IGxhbmUubGFuZUtleSkpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbGFzdFRpbGwgPSBsYW5lLml0ZW1zW2xhbmUuaXRlbXMubGVuZ3RoIC0gMV0/LnRpbGwgPz8gZnJvbTtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZXMgPSByZW1haW5pbmdCb29raW5ncy5tYXAoYm9va2luZyA9PiB7XHJcbiAgICAgICAgICBjb25zdCBkaXN0ID0gYm9va2luZy5mcm9tLmRpZmYobGFzdFRpbGwpO1xyXG4gICAgICAgICAgaWYgKGxhbmUuaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyhkaXN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IF9taW4gPSBNYXRoLm1pbiguLi5kaXN0YW5jZXMuZmlsdGVyKGEgPT4gYSA+PSAwKSk7XHJcbiAgICAgICAgaWYgKF9taW4gPCBtaW4pIHtcclxuICAgICAgICAgIGJvb2tpbmdJbmRleCA9IGRpc3RhbmNlcy5pbmRleE9mKF9taW4pO1xyXG4gICAgICAgICAgbGFuZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGJvb2tpbmdJbmRleCA+PSAwICYmIGxhbmVJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgbGFuZXNbbGFuZUluZGV4XS5pdGVtcyA9IGxhbmVzW2xhbmVJbmRleF0uaXRlbXMuY29uY2F0KHtcclxuICAgICAgICAgIC4uLnJlbWFpbmluZ0Jvb2tpbmdzW2Jvb2tpbmdJbmRleF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVtYWluaW5nQm9va2luZ3Muc3BsaWNlKGJvb2tpbmdJbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGFuZXMgPSBsYW5lcy5jb25jYXQoe1xyXG4gICAgICAgICAgaXRlbXM6IFt7IC4uLnJlbWFpbmluZ0Jvb2tpbmdzWzBdIH1dLFxyXG4gICAgICAgICAgbGFuZUtleTogbGFuZXMubGVuZ3RoLFxyXG4gICAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlbWFpbmluZ0Jvb2tpbmdzLnNoaWZ0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIE5haXZlIHNvbHV0aW9uIHRoYXQgaXMgbXVjaCBsZXNzIGNvbXB1dGF0aW9uYWxseSBpbnRlbnNpdmUgYnV0IHlpZWxkcyBtb3JlIGxhbmVzIHRoYW4gbmVjZXNzYXJ5XHJcbiAgICAvKmJvb2tpbmdzLmZvckVhY2goKGJvb2tpbmcsIG9yaWdpbmFsSW5kZXgpID0+IHtcclxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgbGFuZXMuZm9yRWFjaCgobGFuZSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKCFsYW5lLnNvbWUoaSA9PiBpdGVtc092ZXJsYXAoYm9va2luZywgaSkpKSB7XHJcbiAgICAgICAgbGFuZXNbaW5kZXhdID0gbGFuZXNbaW5kZXhdLmNvbmNhdCh7IC4uLmJvb2tpbmcsIG9yaWdpbmFsSW5kZXggfSk7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgbGFuZXMgPSBsYW5lcy5jb25jYXQoW1t7IC4uLmJvb2tpbmcsIG9yaWdpbmFsSW5kZXggfV1dKTtcclxuICAgIH1cclxuICB9KTsqL1xyXG4gIH1cclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGFuZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBjb25zdCBsYW5lID0gbGFuZXNbaW5kZXhdO1xyXG4gICAgbGFuZXNbaW5kZXhdLml0ZW1zID0gbGFuZS5pdGVtcy5zb3J0KFxyXG4gICAgICAoYSwgYikgPT4gYS5mcm9tLnZhbHVlT2YoKSAtIGIuZnJvbS52YWx1ZU9mKClcclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChsYW5lcy5sZW5ndGggPCBtaW5MYW5lc0NvdW50KSB7XHJcbiAgICBsYW5lcyA9IGxhbmVzLmNvbmNhdChcclxuICAgICAgbmV3IEFycmF5PExhbmVEYXRhPFQsIFRMYW5lRGF0YT4+KG1pbkxhbmVzQ291bnQgLSBsYW5lcy5sZW5ndGgpXHJcbiAgICAgICAgLmZpbGwobnVsbClcclxuICAgICAgICAubWFwKChfLCBpbmRleCkgPT4gKHtcclxuICAgICAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgICAgIGxhbmVLZXk6IGluZGV4ICsgbGFuZXMubGVuZ3RoLFxyXG4gICAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgICB9KSlcclxuICAgICk7XHJcbiAgfVxyXG4gIGxhbmVzID0gbGFuZXMuc29ydCgoYSwgYikgPT4gYS5sYW5lS2V5IC0gYi5sYW5lS2V5KTtcclxuICByZXR1cm4gbGFuZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpdGVtc092ZXJsYXA8VCBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckl0ZW1UPihhOiBULCBiOiBUKSB7XHJcbiAgaWYgKCFhPy5mcm9tIHx8ICFhPy50aWxsIHx8ICFiPy5mcm9tIHx8ICFiPy50aWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChiLnRpbGwuaXNCZWZvcmUoYS5mcm9tKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoYi5mcm9tLmlzQWZ0ZXIoYS50aWxsKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEl0ZW1Qb3NpdGlvblN0eWxlID0gKG1hcmdpblN0YXJ0OiBudW1iZXIsIHdpZHRoOiBudW1iZXIpID0+XHJcbiAgKHtcclxuICAgIG1hcmdpbkxlZnQ6IGAke21hcmdpblN0YXJ0ICogMTAwfSVgLFxyXG4gICAgd2lkdGg6IGAke3dpZHRoICogMTAwfSVgLFxyXG4gIH0gYXMgUmVhY3QuQ1NTUHJvcGVydGllcyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSXRlbXNEaW1lbnNpb25zPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVD4oXHJcbiAgaXRlbXM6IFRbXSxcclxuICBmcm9tOiBNb21lbnQsXHJcbiAgdGlsbDogTW9tZW50XHJcbikge1xyXG4gIGxldCBsYXN0RW5kID0gMDtcclxuICBjb25zdCB3aWR0aE1zID0gdGlsbC52YWx1ZU9mKCkgLSBmcm9tLnZhbHVlT2YoKTtcclxuICBjb25zdCBzdGFydE1zID0gZnJvbS52YWx1ZU9mKCk7XHJcbiAgY29uc3QgZW5kTXMgPSB0aWxsLnZhbHVlT2YoKTtcclxuICByZXR1cm4gd2lkdGhNcyA+IDBcclxuICAgID8gaXRlbXM/Lm1hcChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBzdGFydElzQ3V0ID0gaXRlbS5mcm9tLnZhbHVlT2YoKSA8IHN0YXJ0TXM7XHJcbiAgICAgICAgY29uc3QgcmVhbFN0YXJ0ID0gKGl0ZW0uZnJvbS52YWx1ZU9mKCkgLSBzdGFydE1zKSAvIHdpZHRoTXM7XHJcbiAgICAgICAgY29uc3QgcmVhbEZyb20gPSBzdGFydElzQ3V0ID8gbW9tZW50KHN0YXJ0TXMpIDogbW9tZW50KGl0ZW0uZnJvbSk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBzdGFydElzQ3V0ID8gMCA6IHJlYWxTdGFydDtcclxuICAgICAgICBjb25zdCBlbmRJc0N1dCA9IGl0ZW0udGlsbC52YWx1ZU9mKCkgPiBlbmRNcztcclxuICAgICAgICBjb25zdCByZWFsRW5kID0gKGl0ZW0udGlsbC52YWx1ZU9mKCkgLSBzdGFydE1zKSAvIHdpZHRoTXM7XHJcbiAgICAgICAgY29uc3QgZW5kID0gZW5kSXNDdXQgPyAoZW5kTXMgLSBzdGFydE1zKSAvIHdpZHRoTXMgOiByZWFsRW5kO1xyXG4gICAgICAgIGNvbnN0IHJlYWxUaWxsID0gZW5kSXNDdXQgPyBtb21lbnQoZW5kTXMpIDogbW9tZW50KGl0ZW0udGlsbCk7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luU3RhcnQgPSBzdGFydCAtIGxhc3RFbmQ7XHJcbiAgICAgICAgbGFzdEVuZCA9IChpdGVtLnRpbGwudmFsdWVPZigpIC0gc3RhcnRNcykgLyB3aWR0aE1zO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgc3RhcnQsXHJcbiAgICAgICAgICByZWFsU3RhcnQsXHJcbiAgICAgICAgICByZWFsRnJvbSxcclxuICAgICAgICAgIHN0YXJ0SXNDdXQsXHJcbiAgICAgICAgICB3aWR0aDogZW5kIC0gc3RhcnQsXHJcbiAgICAgICAgICBlbmQsXHJcbiAgICAgICAgICByZWFsRW5kLFxyXG4gICAgICAgICAgcmVhbFRpbGwsXHJcbiAgICAgICAgICBlbmRJc0N1dCxcclxuICAgICAgICAgIG1hcmdpblN0YXJ0LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICA6IFtdO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVDb250cm9sSXRlbXMgPSAoXHJcbiAgZnJvbTogTW9tZW50LFxyXG4gIHRpbGw6IE1vbWVudCxcclxuICBzdGVwOiBEdXJhdGlvbixcclxuICBzdGFydE9mU3RlcDogTW9tZW50XHJcbikgPT4ge1xyXG4gIGlmICghZnJvbSB8fCAhdGlsbCB8fCAhc3RlcCkge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICBsZXQgc3RlcHMgPSBNYXRoLmNlaWwoXHJcbiAgICAodGlsbC52YWx1ZU9mKCkgLSBmcm9tLnZhbHVlT2YoKSkgLyBzdGVwLmFzTWlsbGlzZWNvbmRzKClcclxuICApO1xyXG4gIGxldCBzdWJ0cmFjdCA9XHJcbiAgICAoc3RhcnRPZlN0ZXAudmFsdWVPZigpIC0gZnJvbS52YWx1ZU9mKCkpICUgc3RlcC5hc01pbGxpc2Vjb25kcygpO1xyXG4gIGlmIChzdWJ0cmFjdCA+IDApIHtcclxuICAgIHN1YnRyYWN0IC09IHN0ZXAuYXNNaWxsaXNlY29uZHMoKTtcclxuICB9XHJcbiAgaWYgKHRpbGwudmFsdWVPZigpIC0gZnJvbS52YWx1ZU9mKCkgPiBzdGVwLmFzTWlsbGlzZWNvbmRzKCkpIHtcclxuICAgIHN0ZXBzICs9IDE7XHJcbiAgfVxyXG4gIHJldHVybiBuZXcgQXJyYXkoc3RlcHMpLmZpbGwoMCkubWFwKChfLCBpbmRleCkgPT4gKHtcclxuICAgIGZyb206IG1vbWVudChmcm9tKVxyXG4gICAgICAuYWRkKHN1YnRyYWN0KVxyXG4gICAgICAuYWRkKHN0ZXAuYXNNaWxsaXNlY29uZHMoKSAqIGluZGV4KSxcclxuICAgIHRpbGw6IG1vbWVudChmcm9tKVxyXG4gICAgICAuYWRkKHN1YnRyYWN0KVxyXG4gICAgICAuYWRkKHN0ZXAuYXNNaWxsaXNlY29uZHMoKSAqIChpbmRleCArIDEpKSxcclxuICB9KSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVHcmlkSXRlbXMgPSAoXHJcbiAgZnJvbTogTW9tZW50LFxyXG4gIHRpbGw6IE1vbWVudCxcclxuICBzdGVwOiBEdXJhdGlvbixcclxuICBzdWJkaXZpc2lvbnM6IG51bWJlciA9IDEsXHJcbiAgZG9FZGdlcyA9IGZhbHNlXHJcbikgPT4ge1xyXG4gIGlmICghZnJvbSB8fCAhdGlsbCB8fCAhc3RlcCB8fCBzdWJkaXZpc2lvbnMgPCAxKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGNvbnN0IHN0ZXBzID0gTWF0aC5tYXgoXHJcbiAgICAwLFxyXG4gICAgTWF0aC5mbG9vcihcclxuICAgICAgKCh0aWxsLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpKSAvIHN0ZXAuYXNNaWxsaXNlY29uZHMoKSkgKiBzdWJkaXZpc2lvbnNcclxuICAgICkgKyAoZG9FZGdlcyA/IDEgOiAtMSlcclxuICApO1xyXG4gIGNvbnN0IHdpZHRoID0gdGlsbC52YWx1ZU9mKCkgLSBmcm9tLnZhbHVlT2YoKTtcclxuICByZXR1cm4gbmV3IEFycmF5KHN0ZXBzKVxyXG4gICAgLmZpbGwoMClcclxuICAgIC5tYXAoXHJcbiAgICAgIChfLCBpbmRleCkgPT5cclxuICAgICAgICAoKHN0ZXAuYXNNaWxsaXNlY29uZHMoKSAvIHN1YmRpdmlzaW9ucykgKiAoaW5kZXggKyAoZG9FZGdlcyA/IDAgOiAxKSkpIC9cclxuICAgICAgICB3aWR0aFxyXG4gICAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==