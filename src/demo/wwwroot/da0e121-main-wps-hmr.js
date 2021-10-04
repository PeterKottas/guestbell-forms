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

  var steps = Math.min(0, Math.floor((till.valueOf() - from.valueOf()) / step.asMilliseconds() * subdivisions) + (doEdges ? 1 : -1));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvYm9va2luZ0NhbGVuZGFyL3V0aWxzLnRzIl0sIm5hbWVzIjpbImdyb3VwQnkiLCJpdGVtcyIsIml0ZXJhdG9yIiwicmVkdWNlIiwib2JqIiwiaXRlbSIsImtleSIsImhhc093blByb3BlcnR5IiwicHVzaCIsInNwbGl0Qm9va2luZ3NUb0xhbmVzIiwiYm9va2luZ3MiLCJmcm9tIiwibWluTGFuZXNDb3VudCIsImxhbmVzU291cmNlIiwibGFuZXMiLCJsZW5ndGgiLCJtYXAiLCJzb3VyY2UiLCJib29raW5nc1dpdGhvdXRMYW5lS2V5IiwiZmlsdGVyIiwiYSIsImxhbmVLZXkiLCJ1bmRlZmluZWQiLCJib29raW5nc1dpdGhMYW5lS2V5IiwiZ3JvdXBlZCIsImJvb2tpbmciLCJvcmlnaW5hbEluZGV4IiwiT2JqZWN0Iiwia2V5cyIsIk51bWJlciIsImZpbmQiLCJtaXNzaW5nTGFuZXMiLCJzb21lIiwibCIsImNvbmNhdCIsInJlbWFpbmluZ0Jvb2tpbmdzIiwic29ydCIsImIiLCJ2YWx1ZU9mIiwibWluIiwiYm9va2luZ0luZGV4IiwibGFuZUluZGV4IiwiZm9yRWFjaCIsImxhbmUiLCJpbmRleCIsImxhc3RUaWxsIiwidGlsbCIsImRpc3RhbmNlcyIsImRpc3QiLCJkaWZmIiwiTWF0aCIsImFicyIsIl9taW4iLCJpbmRleE9mIiwic3BsaWNlIiwiZGF0YSIsInNoaWZ0IiwiQXJyYXkiLCJmaWxsIiwiXyIsIml0ZW1zT3ZlcmxhcCIsImlzQmVmb3JlIiwiaXNBZnRlciIsImdldEl0ZW1Qb3NpdGlvblN0eWxlIiwibWFyZ2luU3RhcnQiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJjYWxjdWxhdGVJdGVtc0RpbWVuc2lvbnMiLCJsYXN0RW5kIiwid2lkdGhNcyIsInN0YXJ0TXMiLCJlbmRNcyIsInN0YXJ0SXNDdXQiLCJyZWFsU3RhcnQiLCJyZWFsRnJvbSIsIm1vbWVudCIsInN0YXJ0IiwiZW5kSXNDdXQiLCJyZWFsRW5kIiwiZW5kIiwicmVhbFRpbGwiLCJnZW5lcmF0ZUNvbnRyb2xJdGVtcyIsInN0ZXAiLCJzdGFydE9mU3RlcCIsInN0ZXBzIiwiY2VpbCIsImFzTWlsbGlzZWNvbmRzIiwic3VidHJhY3QiLCJhZGQiLCJnZW5lcmF0ZUdyaWRJdGVtcyIsInN1YmRpdmlzaW9ucyIsImRvRWRnZXMiLCJmbG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVPLFNBQVNBLE9BQVQsQ0FBb0JDLEtBQXBCLEVBQWdDQyxRQUFoQyxFQUF3RTtBQUM3RSxTQUFPRCxLQUFLLENBQUNFLE1BQU4sQ0FBYSxVQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBZTtBQUNqQyxRQUFNQyxHQUFHLEdBQUdKLFFBQVEsQ0FBQ0csSUFBRCxDQUFwQjs7QUFDQSxRQUFJLENBQUNELEdBQUcsQ0FBQ0csY0FBSixDQUFtQkQsR0FBbkIsQ0FBTCxFQUE4QjtBQUM1QkYsU0FBRyxDQUFDRSxHQUFELENBQUgsR0FBVyxFQUFYO0FBQ0Q7O0FBQ0RGLE9BQUcsQ0FBQ0UsR0FBRCxDQUFILENBQVNFLElBQVQsQ0FBY0gsSUFBZDtBQUNBLFdBQU9ELEdBQVA7QUFDRCxHQVBNLEVBT0osRUFQSSxDQUFQO0FBUUQ7QUFxQk0sU0FBU0ssb0JBQVQsQ0FDTEMsUUFESyxFQUVMQyxJQUZLLEVBR0xDLGFBSEssRUFLTDtBQUFBLE1BREFDLFdBQ0EsdUVBRDhDLEVBQzlDOztBQUNBLE1BQUksQ0FBQ0gsUUFBTCxFQUFlO0FBQ2IsV0FBTyxFQUFQO0FBQ0Q7O0FBQ0QsTUFBSUksS0FBK0IsR0FBRyxFQUF0Qzs7QUFDQSxNQUFJRCxXQUFKLGFBQUlBLFdBQUosZUFBSUEsV0FBVyxDQUFFRSxNQUFqQixFQUF5QjtBQUN2QkQsU0FBSyxHQUFHRCxXQUFXLENBQUNHLEdBQVosQ0FBZ0IsVUFBQUMsTUFBTTtBQUFBLDZDQUN6QkEsTUFEeUI7QUFFNUJoQixhQUFLLEVBQUU7QUFGcUI7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QUFWLElBQWtCLENBQUNvQyxJQUFuQixJQUEyQlEsWUFBWSxHQUFHLENBQTlDLEVBQWlEO0FBQy9DLFdBQU8sRUFBUDtBQUNEOztBQUNELE1BQU1OLEtBQUssR0FBR2xDLElBQUksQ0FBQ1gsR0FBTCxDQUNaLENBRFksRUFFWlcsSUFBSSxDQUFDMEMsS0FBTCxDQUNHLENBQUM5QyxJQUFJLENBQUNSLE9BQUwsS0FBaUIzQixJQUFJLENBQUMyQixPQUFMLEVBQWxCLElBQW9DNEMsSUFBSSxDQUFDSSxjQUFMLEVBQXJDLEdBQThESSxZQURoRSxLQUVLQyxPQUFPLEdBQUcsQ0FBSCxHQUFPLENBQUMsQ0FGcEIsQ0FGWSxDQUFkO0FBTUEsTUFBTTFCLEtBQUssR0FBR25CLElBQUksQ0FBQ1IsT0FBTCxLQUFpQjNCLElBQUksQ0FBQzJCLE9BQUwsRUFBL0I7QUFDQSxTQUFPLElBQUltQixLQUFKLENBQVUyQixLQUFWLEVBQ0oxQixJQURJLENBQ0MsQ0FERCxFQUVKMUMsR0FGSSxDQUdILFVBQUMyQyxDQUFELEVBQUlmLEtBQUo7QUFBQSxXQUNJc0MsSUFBSSxDQUFDSSxjQUFMLEtBQXdCSSxZQUF6QixJQUEwQzlDLEtBQUssSUFBSStDLE9BQU8sR0FBRyxDQUFILEdBQU8sQ0FBbEIsQ0FBL0MsQ0FBRCxHQUNBMUIsS0FGRjtBQUFBLEdBSEcsQ0FBUDtBQU9ELENBeEJNOzs7Ozs7Ozs7OzBCQXJPU2pFLE87MEJBOEJBUyxvQjswQkFnSEFtRCxZOzBCQWFIRyxvQjswQkFNR0ksd0I7MEJBc0NIYyxvQjswQkE4QkFRLGlCIiwiZmlsZSI6ImRhMGUxMjEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCwgeyBNb21lbnQsIER1cmF0aW9uIH0gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFySXRlbVByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJJdGVtJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyTGFuZVByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJMYW5lJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlclByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbVByb3BzIH0gZnJvbSAnLi9ib29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtJztcclxuaW1wb3J0IHtcclxuICBCb29raW5nQ2FsZW5kYXJJdGVtVCxcclxuICBCb29raW5nQ2FsZW5kYXJJdGVtV2l0aE9yaWdpbmFsSW5kZXhULFxyXG59IGZyb20gJy4vY29tbW9uJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBncm91cEJ5PFQ+KGl0ZW1zOiBUW10sIGl0ZXJhdG9yOiAoaXRlbTogVCkgPT4gbnVtYmVyIHwgc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGl0ZW1zLnJlZHVjZSgob2JqLCBpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBrZXkgPSBpdGVyYXRvcihpdGVtKTtcclxuICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgb2JqW2tleV0gPSBbXTtcclxuICAgIH1cclxuICAgIG9ialtrZXldLnB1c2goaXRlbSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG4gIH0sIHt9KTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYW5lU291cmNlRGF0YTxUIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVQsIFRMYW5lRGF0YT4ge1xyXG4gIGxhbmVLZXk6IG51bWJlcjtcclxuICBkYXRhPzogVExhbmVEYXRhO1xyXG4gIHJvd0NsYXNzTmFtZT86IHN0cmluZztcclxuICBCb29raW5nQ2FsZW5kYXJJdGVtPzogUmVhY3QuQ29tcG9uZW50VHlwZTxCb29raW5nQ2FsZW5kYXJJdGVtUHJvcHM8VD4+O1xyXG4gIEJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW0/OiBSZWFjdC5Db21wb25lbnRUeXBlPFxyXG4gICAgQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbVByb3BzPFQ+XHJcbiAgPjtcclxuICBCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyPzogUmVhY3QuQ29tcG9uZW50VHlwZTxcclxuICAgIEJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXJQcm9wczxUTGFuZURhdGE+XHJcbiAgPjtcclxuICBCb29raW5nQ2FsZW5kYXJMYW5lPzogUmVhY3QuQ29tcG9uZW50VHlwZTxCb29raW5nQ2FsZW5kYXJMYW5lUHJvcHM8VD4+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExhbmVEYXRhPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVCwgVExhbmVEYXRhPlxyXG4gIGV4dGVuZHMgTGFuZVNvdXJjZURhdGE8VCwgVExhbmVEYXRhPiB7XHJcbiAgaXRlbXM6IFRbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0Qm9va2luZ3NUb0xhbmVzPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVCwgVExhbmVEYXRhPihcclxuICBib29raW5nczogVFtdLFxyXG4gIGZyb206IE1vbWVudCxcclxuICBtaW5MYW5lc0NvdW50OiBudW1iZXIsXHJcbiAgbGFuZXNTb3VyY2U6IExhbmVTb3VyY2VEYXRhPFQsIFRMYW5lRGF0YT5bXSA9IFtdXHJcbikge1xyXG4gIGlmICghYm9va2luZ3MpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgbGV0IGxhbmVzOiBMYW5lRGF0YTxULCBUTGFuZURhdGE+W10gPSBbXTtcclxuICBpZiAobGFuZXNTb3VyY2U/Lmxlbmd0aCkge1xyXG4gICAgbGFuZXMgPSBsYW5lc1NvdXJjZS5tYXAoc291cmNlID0+ICh7XHJcbiAgICAgIC4uLnNvdXJjZSxcclxuICAgICAgaXRlbXM6IFtdLFxyXG4gICAgfSkpO1xyXG4gIH1cclxuICBjb25zdCBib29raW5nc1dpdGhvdXRMYW5lS2V5ID0gYm9va2luZ3MuZmlsdGVyKGEgPT4gYS5sYW5lS2V5ID09PSB1bmRlZmluZWQpO1xyXG4gIGNvbnN0IGJvb2tpbmdzV2l0aExhbmVLZXkgPSBib29raW5ncy5maWx0ZXIoYSA9PiBhLmxhbmVLZXkgIT09IHVuZGVmaW5lZCk7XHJcbiAgaWYgKGJvb2tpbmdzV2l0aExhbmVLZXkubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBncm91cGVkID0gZ3JvdXBCeShcclxuICAgICAgYm9va2luZ3NXaXRoTGFuZUtleS5tYXAoKGJvb2tpbmcsIG9yaWdpbmFsSW5kZXgpID0+ICh7XHJcbiAgICAgICAgLi4uYm9va2luZyxcclxuICAgICAgICBvcmlnaW5hbEluZGV4LFxyXG4gICAgICB9KSksXHJcbiAgICAgIGEgPT4gYS5sYW5lS2V5XHJcbiAgICApO1xyXG4gICAgbGFuZXMgPSBPYmplY3Qua2V5cyhncm91cGVkKS5tYXAoa2V5ID0+ICh7XHJcbiAgICAgIGxhbmVLZXk6IE51bWJlcihrZXkpLFxyXG4gICAgICBpdGVtczogZ3JvdXBlZFtrZXldLFxyXG4gICAgICAuLi5sYW5lc1NvdXJjZT8uZmluZChhID0+IGEubGFuZUtleSA9PT0gTnVtYmVyKGtleSkpLFxyXG4gICAgfSkpO1xyXG4gICAgY29uc3QgbWlzc2luZ0xhbmVzID0gbGFuZXNTb3VyY2U/LmZpbHRlcihcclxuICAgICAgYSA9PiAhbGFuZXMuc29tZShsID0+IGwubGFuZUtleSA9PT0gYS5sYW5lS2V5KVxyXG4gICAgKTtcclxuICAgIGxhbmVzID0gbGFuZXMuY29uY2F0KG1pc3NpbmdMYW5lcy5tYXAoYSA9PiAoeyAuLi5hLCBpdGVtczogW10gfSkpKTtcclxuICB9XHJcbiAgaWYgKGJvb2tpbmdzV2l0aG91dExhbmVLZXkubGVuZ3RoKSB7XHJcbiAgICBsZXQgcmVtYWluaW5nQm9va2luZ3M6IChUICZcclxuICAgICAgQm9va2luZ0NhbGVuZGFySXRlbVdpdGhPcmlnaW5hbEluZGV4VClbXSA9IGJvb2tpbmdzV2l0aG91dExhbmVLZXlcclxuICAgICAgLm1hcCgoYm9va2luZywgb3JpZ2luYWxJbmRleCkgPT4gKHsgLi4uYm9va2luZywgb3JpZ2luYWxJbmRleCB9KSlcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZnJvbS52YWx1ZU9mKCkgLSBiLmZyb20udmFsdWVPZigpKTtcclxuICAgIHdoaWxlIChyZW1haW5pbmdCb29raW5ncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBtaW4gPSA5OTk5OTk5OTk5OTk5OTtcclxuICAgICAgbGV0IGJvb2tpbmdJbmRleCA9IC0xO1xyXG4gICAgICBsZXQgbGFuZUluZGV4ID0gLTE7XHJcbiAgICAgIGxhbmVzLmZvckVhY2goKGxhbmUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKGxhbmVzU291cmNlPy5zb21lKGwgPT4gbC5sYW5lS2V5ID09PSBsYW5lLmxhbmVLZXkpKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxhc3RUaWxsID0gbGFuZS5pdGVtc1tsYW5lLml0ZW1zLmxlbmd0aCAtIDFdPy50aWxsID8/IGZyb207XHJcbiAgICAgICAgY29uc3QgZGlzdGFuY2VzID0gcmVtYWluaW5nQm9va2luZ3MubWFwKGJvb2tpbmcgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZGlzdCA9IGJvb2tpbmcuZnJvbS5kaWZmKGxhc3RUaWxsKTtcclxuICAgICAgICAgIGlmIChsYW5lLml0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hYnMoZGlzdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gZGlzdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBfbWluID0gTWF0aC5taW4oLi4uZGlzdGFuY2VzLmZpbHRlcihhID0+IGEgPj0gMCkpO1xyXG4gICAgICAgIGlmIChfbWluIDwgbWluKSB7XHJcbiAgICAgICAgICBib29raW5nSW5kZXggPSBkaXN0YW5jZXMuaW5kZXhPZihfbWluKTtcclxuICAgICAgICAgIGxhbmVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChib29raW5nSW5kZXggPj0gMCAmJiBsYW5lSW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxhbmVzW2xhbmVJbmRleF0uaXRlbXMgPSBsYW5lc1tsYW5lSW5kZXhdLml0ZW1zLmNvbmNhdCh7XHJcbiAgICAgICAgICAuLi5yZW1haW5pbmdCb29raW5nc1tib29raW5nSW5kZXhdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlbWFpbmluZ0Jvb2tpbmdzLnNwbGljZShib29raW5nSW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxhbmVzID0gbGFuZXMuY29uY2F0KHtcclxuICAgICAgICAgIGl0ZW1zOiBbeyAuLi5yZW1haW5pbmdCb29raW5nc1swXSB9XSxcclxuICAgICAgICAgIGxhbmVLZXk6IGxhbmVzLmxlbmd0aCxcclxuICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZW1haW5pbmdCb29raW5ncy5zaGlmdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBOYWl2ZSBzb2x1dGlvbiB0aGF0IGlzIG11Y2ggbGVzcyBjb21wdXRhdGlvbmFsbHkgaW50ZW5zaXZlIGJ1dCB5aWVsZHMgbW9yZSBsYW5lcyB0aGFuIG5lY2Vzc2FyeVxyXG4gICAgLypib29raW5ncy5mb3JFYWNoKChib29raW5nLCBvcmlnaW5hbEluZGV4KSA9PiB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGxhbmVzLmZvckVhY2goKGxhbmUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICghbGFuZS5zb21lKGkgPT4gaXRlbXNPdmVybGFwKGJvb2tpbmcsIGkpKSkge1xyXG4gICAgICAgIGxhbmVzW2luZGV4XSA9IGxhbmVzW2luZGV4XS5jb25jYXQoeyAuLi5ib29raW5nLCBvcmlnaW5hbEluZGV4IH0pO1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIGxhbmVzID0gbGFuZXMuY29uY2F0KFtbeyAuLi5ib29raW5nLCBvcmlnaW5hbEluZGV4IH1dXSk7XHJcbiAgICB9XHJcbiAgfSk7Ki9cclxuICB9XHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxhbmVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY29uc3QgbGFuZSA9IGxhbmVzW2luZGV4XTtcclxuICAgIGxhbmVzW2luZGV4XS5pdGVtcyA9IGxhbmUuaXRlbXMuc29ydChcclxuICAgICAgKGEsIGIpID0+IGEuZnJvbS52YWx1ZU9mKCkgLSBiLmZyb20udmFsdWVPZigpXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAobGFuZXMubGVuZ3RoIDwgbWluTGFuZXNDb3VudCkge1xyXG4gICAgbGFuZXMgPSBsYW5lcy5jb25jYXQoXHJcbiAgICAgIG5ldyBBcnJheTxMYW5lRGF0YTxULCBUTGFuZURhdGE+PihtaW5MYW5lc0NvdW50IC0gbGFuZXMubGVuZ3RoKVxyXG4gICAgICAgIC5maWxsKG51bGwpXHJcbiAgICAgICAgLm1hcCgoXywgaW5kZXgpID0+ICh7XHJcbiAgICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgICBsYW5lS2V5OiBpbmRleCArIGxhbmVzLmxlbmd0aCxcclxuICAgICAgICAgIGRhdGE6IG51bGwsXHJcbiAgICAgICAgfSkpXHJcbiAgICApO1xyXG4gIH1cclxuICBsYW5lcyA9IGxhbmVzLnNvcnQoKGEsIGIpID0+IGEubGFuZUtleSAtIGIubGFuZUtleSk7XHJcbiAgcmV0dXJuIGxhbmVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXRlbXNPdmVybGFwPFQgZXh0ZW5kcyBCb29raW5nQ2FsZW5kYXJJdGVtVD4oYTogVCwgYjogVCkge1xyXG4gIGlmICghYT8uZnJvbSB8fCAhYT8udGlsbCB8fCAhYj8uZnJvbSB8fCAhYj8udGlsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoYi50aWxsLmlzQmVmb3JlKGEuZnJvbSkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKGIuZnJvbS5pc0FmdGVyKGEudGlsbCkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJdGVtUG9zaXRpb25TdHlsZSA9IChtYXJnaW5TdGFydDogbnVtYmVyLCB3aWR0aDogbnVtYmVyKSA9PlxyXG4gICh7XHJcbiAgICBtYXJnaW5MZWZ0OiBgJHttYXJnaW5TdGFydCAqIDEwMH0lYCxcclxuICAgIHdpZHRoOiBgJHt3aWR0aCAqIDEwMH0lYCxcclxuICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXMpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUl0ZW1zRGltZW5zaW9uczxUIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVQ+KFxyXG4gIGl0ZW1zOiBUW10sXHJcbiAgZnJvbTogTW9tZW50LFxyXG4gIHRpbGw6IE1vbWVudFxyXG4pIHtcclxuICBsZXQgbGFzdEVuZCA9IDA7XHJcbiAgY29uc3Qgd2lkdGhNcyA9IHRpbGwudmFsdWVPZigpIC0gZnJvbS52YWx1ZU9mKCk7XHJcbiAgY29uc3Qgc3RhcnRNcyA9IGZyb20udmFsdWVPZigpO1xyXG4gIGNvbnN0IGVuZE1zID0gdGlsbC52YWx1ZU9mKCk7XHJcbiAgcmV0dXJuIHdpZHRoTXMgPiAwXHJcbiAgICA/IGl0ZW1zPy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRJc0N1dCA9IGl0ZW0uZnJvbS52YWx1ZU9mKCkgPCBzdGFydE1zO1xyXG4gICAgICAgIGNvbnN0IHJlYWxTdGFydCA9IChpdGVtLmZyb20udmFsdWVPZigpIC0gc3RhcnRNcykgLyB3aWR0aE1zO1xyXG4gICAgICAgIGNvbnN0IHJlYWxGcm9tID0gc3RhcnRJc0N1dCA/IG1vbWVudChzdGFydE1zKSA6IG1vbWVudChpdGVtLmZyb20pO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gc3RhcnRJc0N1dCA/IDAgOiByZWFsU3RhcnQ7XHJcbiAgICAgICAgY29uc3QgZW5kSXNDdXQgPSBpdGVtLnRpbGwudmFsdWVPZigpID4gZW5kTXM7XHJcbiAgICAgICAgY29uc3QgcmVhbEVuZCA9IChpdGVtLnRpbGwudmFsdWVPZigpIC0gc3RhcnRNcykgLyB3aWR0aE1zO1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IGVuZElzQ3V0ID8gKGVuZE1zIC0gc3RhcnRNcykgLyB3aWR0aE1zIDogcmVhbEVuZDtcclxuICAgICAgICBjb25zdCByZWFsVGlsbCA9IGVuZElzQ3V0ID8gbW9tZW50KGVuZE1zKSA6IG1vbWVudChpdGVtLnRpbGwpO1xyXG4gICAgICAgIGNvbnN0IG1hcmdpblN0YXJ0ID0gc3RhcnQgLSBsYXN0RW5kO1xyXG4gICAgICAgIGxhc3RFbmQgPSAoaXRlbS50aWxsLnZhbHVlT2YoKSAtIHN0YXJ0TXMpIC8gd2lkdGhNcztcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaXRlbSxcclxuICAgICAgICAgIHN0YXJ0LFxyXG4gICAgICAgICAgcmVhbFN0YXJ0LFxyXG4gICAgICAgICAgcmVhbEZyb20sXHJcbiAgICAgICAgICBzdGFydElzQ3V0LFxyXG4gICAgICAgICAgd2lkdGg6IGVuZCAtIHN0YXJ0LFxyXG4gICAgICAgICAgZW5kLFxyXG4gICAgICAgICAgcmVhbEVuZCxcclxuICAgICAgICAgIHJlYWxUaWxsLFxyXG4gICAgICAgICAgZW5kSXNDdXQsXHJcbiAgICAgICAgICBtYXJnaW5TdGFydCxcclxuICAgICAgICB9O1xyXG4gICAgICB9KVxyXG4gICAgOiBbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQ29udHJvbEl0ZW1zID0gKFxyXG4gIGZyb206IE1vbWVudCxcclxuICB0aWxsOiBNb21lbnQsXHJcbiAgc3RlcDogRHVyYXRpb24sXHJcbiAgc3RhcnRPZlN0ZXA6IE1vbWVudFxyXG4pID0+IHtcclxuICBpZiAoIWZyb20gfHwgIXRpbGwgfHwgIXN0ZXApIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgbGV0IHN0ZXBzID0gTWF0aC5jZWlsKFxyXG4gICAgKHRpbGwudmFsdWVPZigpIC0gZnJvbS52YWx1ZU9mKCkpIC8gc3RlcC5hc01pbGxpc2Vjb25kcygpXHJcbiAgKTtcclxuICBsZXQgc3VidHJhY3QgPVxyXG4gICAgKHN0YXJ0T2ZTdGVwLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpKSAlIHN0ZXAuYXNNaWxsaXNlY29uZHMoKTtcclxuICBpZiAoc3VidHJhY3QgPiAwKSB7XHJcbiAgICBzdWJ0cmFjdCAtPSBzdGVwLmFzTWlsbGlzZWNvbmRzKCk7XHJcbiAgfVxyXG4gIGlmICh0aWxsLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpID4gc3RlcC5hc01pbGxpc2Vjb25kcygpKSB7XHJcbiAgICBzdGVwcyArPSAxO1xyXG4gIH1cclxuICByZXR1cm4gbmV3IEFycmF5KHN0ZXBzKS5maWxsKDApLm1hcCgoXywgaW5kZXgpID0+ICh7XHJcbiAgICBmcm9tOiBtb21lbnQoZnJvbSlcclxuICAgICAgLmFkZChzdWJ0cmFjdClcclxuICAgICAgLmFkZChzdGVwLmFzTWlsbGlzZWNvbmRzKCkgKiBpbmRleCksXHJcbiAgICB0aWxsOiBtb21lbnQoZnJvbSlcclxuICAgICAgLmFkZChzdWJ0cmFjdClcclxuICAgICAgLmFkZChzdGVwLmFzTWlsbGlzZWNvbmRzKCkgKiAoaW5kZXggKyAxKSksXHJcbiAgfSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlR3JpZEl0ZW1zID0gKFxyXG4gIGZyb206IE1vbWVudCxcclxuICB0aWxsOiBNb21lbnQsXHJcbiAgc3RlcDogRHVyYXRpb24sXHJcbiAgc3ViZGl2aXNpb25zOiBudW1iZXIgPSAxLFxyXG4gIGRvRWRnZXMgPSBmYWxzZVxyXG4pID0+IHtcclxuICBpZiAoIWZyb20gfHwgIXRpbGwgfHwgIXN0ZXAgfHwgc3ViZGl2aXNpb25zIDwgMSkge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICBjb25zdCBzdGVwcyA9IE1hdGgubWluKFxyXG4gICAgMCxcclxuICAgIE1hdGguZmxvb3IoXHJcbiAgICAgICgodGlsbC52YWx1ZU9mKCkgLSBmcm9tLnZhbHVlT2YoKSkgLyBzdGVwLmFzTWlsbGlzZWNvbmRzKCkpICogc3ViZGl2aXNpb25zXHJcbiAgICApICsgKGRvRWRnZXMgPyAxIDogLTEpXHJcbiAgKTtcclxuICBjb25zdCB3aWR0aCA9IHRpbGwudmFsdWVPZigpIC0gZnJvbS52YWx1ZU9mKCk7XHJcbiAgcmV0dXJuIG5ldyBBcnJheShzdGVwcylcclxuICAgIC5maWxsKDApXHJcbiAgICAubWFwKFxyXG4gICAgICAoXywgaW5kZXgpID0+XHJcbiAgICAgICAgKChzdGVwLmFzTWlsbGlzZWNvbmRzKCkgLyBzdWJkaXZpc2lvbnMpICogKGluZGV4ICsgKGRvRWRnZXMgPyAwIDogMSkpKSAvXHJcbiAgICAgICAgd2lkdGhcclxuICAgICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=