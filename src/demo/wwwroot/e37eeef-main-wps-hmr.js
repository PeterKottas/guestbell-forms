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

  if (!from || !till || !step || subdivisions < 1) {
    return [];
  }

  var steps = Math.floor((till.valueOf() - from.valueOf()) / step.asMilliseconds() * subdivisions) + 1;
  var width = till.valueOf() - from.valueOf();
  return new Array(steps).fill(0).map(function (_, index) {
    return step.asMilliseconds() / subdivisions * index / width;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvYm9va2luZ0NhbGVuZGFyL3V0aWxzLnRzIl0sIm5hbWVzIjpbImdyb3VwQnkiLCJpdGVtcyIsIml0ZXJhdG9yIiwicmVkdWNlIiwib2JqIiwiaXRlbSIsImtleSIsImhhc093blByb3BlcnR5IiwicHVzaCIsInNwbGl0Qm9va2luZ3NUb0xhbmVzIiwiYm9va2luZ3MiLCJmcm9tIiwibWluTGFuZXNDb3VudCIsImxhbmVzU291cmNlIiwibGFuZXMiLCJsZW5ndGgiLCJtYXAiLCJzb3VyY2UiLCJib29raW5nc1dpdGhvdXRMYW5lS2V5IiwiZmlsdGVyIiwiYSIsImxhbmVLZXkiLCJ1bmRlZmluZWQiLCJib29raW5nc1dpdGhMYW5lS2V5IiwiZ3JvdXBlZCIsImJvb2tpbmciLCJvcmlnaW5hbEluZGV4IiwiT2JqZWN0Iiwia2V5cyIsIk51bWJlciIsImZpbmQiLCJtaXNzaW5nTGFuZXMiLCJzb21lIiwibCIsImNvbmNhdCIsInJlbWFpbmluZ0Jvb2tpbmdzIiwic29ydCIsImIiLCJ2YWx1ZU9mIiwibWluIiwiYm9va2luZ0luZGV4IiwibGFuZUluZGV4IiwiZm9yRWFjaCIsImxhbmUiLCJpbmRleCIsImxhc3RUaWxsIiwidGlsbCIsImRpc3RhbmNlcyIsImRpc3QiLCJkaWZmIiwiTWF0aCIsImFicyIsIl9taW4iLCJpbmRleE9mIiwic3BsaWNlIiwiZGF0YSIsInNoaWZ0IiwiQXJyYXkiLCJmaWxsIiwiXyIsIml0ZW1zT3ZlcmxhcCIsImlzQmVmb3JlIiwiaXNBZnRlciIsImdldEl0ZW1Qb3NpdGlvblN0eWxlIiwibWFyZ2luU3RhcnQiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJjYWxjdWxhdGVJdGVtc0RpbWVuc2lvbnMiLCJsYXN0RW5kIiwid2lkdGhNcyIsInN0YXJ0TXMiLCJlbmRNcyIsInN0YXJ0SXNDdXQiLCJyZWFsU3RhcnQiLCJyZWFsRnJvbSIsIm1vbWVudCIsInN0YXJ0IiwiZW5kSXNDdXQiLCJyZWFsRW5kIiwiZW5kIiwicmVhbFRpbGwiLCJnZW5lcmF0ZUNvbnRyb2xJdGVtcyIsInN0ZXAiLCJzdGFydE9mU3RlcCIsInN0ZXBzIiwiY2VpbCIsImFzTWlsbGlzZWNvbmRzIiwic3VidHJhY3QiLCJhZGQiLCJnZW5lcmF0ZUdyaWRJdGVtcyIsInN1YmRpdmlzaW9ucyIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBVU8sU0FBU0EsT0FBVCxDQUFvQkMsS0FBcEIsRUFBZ0NDLFFBQWhDLEVBQXdFO0FBQzdFLFNBQU9ELEtBQUssQ0FBQ0UsTUFBTixDQUFhLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQ2pDLFFBQU1DLEdBQUcsR0FBR0osUUFBUSxDQUFDRyxJQUFELENBQXBCOztBQUNBLFFBQUksQ0FBQ0QsR0FBRyxDQUFDRyxjQUFKLENBQW1CRCxHQUFuQixDQUFMLEVBQThCO0FBQzVCRixTQUFHLENBQUNFLEdBQUQsQ0FBSCxHQUFXLEVBQVg7QUFDRDs7QUFDREYsT0FBRyxDQUFDRSxHQUFELENBQUgsQ0FBU0UsSUFBVCxDQUFjSCxJQUFkO0FBQ0EsV0FBT0QsR0FBUDtBQUNELEdBUE0sRUFPSixFQVBJLENBQVA7QUFRRDtBQXFCTSxTQUFTSyxvQkFBVCxDQUNMQyxRQURLLEVBRUxDLElBRkssRUFHTEMsYUFISyxFQUtMO0FBQUEsTUFEQUMsV0FDQSx1RUFEOEMsRUFDOUM7O0FBQ0EsTUFBSSxDQUFDSCxRQUFMLEVBQWU7QUFDYixXQUFPLEVBQVA7QUFDRDs7QUFDRCxNQUFJSSxLQUErQixHQUFHLEVBQXRDOztBQUNBLE1BQUlELFdBQUosYUFBSUEsV0FBSixlQUFJQSxXQUFXLENBQUVFLE1BQWpCLEVBQXlCO0FBQ3ZCRCxTQUFLLEdBQUdELFdBQVcsQ0FBQ0csR0FBWixDQUFnQixVQUFBQyxNQUFNO0FBQUEsNkNBQ3pCQSxNQUR5QjtBQUU1QmhCLGFBQUssRUFBRTtBQUZxQjtBQUFBLEtBQXRC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QUcsQ0FBOUMsRUFBaUQ7QUFDL0MsV0FBTyxFQUFQO0FBQ0Q7O0FBQ0QsTUFBTU4sS0FBSyxHQUNUbEMsSUFBSSxDQUFDeUMsS0FBTCxDQUNHLENBQUM3QyxJQUFJLENBQUNSLE9BQUwsS0FBaUIzQixJQUFJLENBQUMyQixPQUFMLEVBQWxCLElBQW9DNEMsSUFBSSxDQUFDSSxjQUFMLEVBQXJDLEdBQThESSxZQURoRSxJQUVJLENBSE47QUFJQSxNQUFNekIsS0FBSyxHQUFHbkIsSUFBSSxDQUFDUixPQUFMLEtBQWlCM0IsSUFBSSxDQUFDMkIsT0FBTCxFQUEvQjtBQUNBLFNBQU8sSUFBSW1CLEtBQUosQ0FBVTJCLEtBQVYsRUFDSjFCLElBREksQ0FDQyxDQURELEVBRUoxQyxHQUZJLENBR0gsVUFBQzJDLENBQUQsRUFBSWYsS0FBSjtBQUFBLFdBQWdCc0MsSUFBSSxDQUFDSSxjQUFMLEtBQXdCSSxZQUF6QixHQUF5QzlDLEtBQTFDLEdBQW1EcUIsS0FBakU7QUFBQSxHQUhHLENBQVA7QUFLRCxDQW5CTTs7Ozs7Ozs7OzswQkFyT1NqRSxPOzBCQThCQVMsb0I7MEJBZ0hBbUQsWTswQkFhSEcsb0I7MEJBTUdJLHdCOzBCQXNDSGMsb0I7MEJBOEJBUSxpQiIsImZpbGUiOiJlMzdlZWVmLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQsIHsgTW9tZW50LCBEdXJhdGlvbiB9IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IEJvb2tpbmdDYWxlbmRhckl0ZW1Qcm9wcyB9IGZyb20gJy4vYm9va2luZ0NhbGVuZGFySXRlbSc7XHJcbmltcG9ydCB7IEJvb2tpbmdDYWxlbmRhckxhbmVQcm9wcyB9IGZyb20gJy4vYm9va2luZ0NhbGVuZGFyTGFuZSc7XHJcbmltcG9ydCB7IEJvb2tpbmdDYWxlbmRhckxhbmVIZWFkZXJQcm9wcyB9IGZyb20gJy4vYm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlcic7XHJcbmltcG9ydCB7IEJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW1Qcm9wcyB9IGZyb20gJy4vYm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbSc7XHJcbmltcG9ydCB7XHJcbiAgQm9va2luZ0NhbGVuZGFySXRlbVQsXHJcbiAgQm9va2luZ0NhbGVuZGFySXRlbVdpdGhPcmlnaW5hbEluZGV4VCxcclxufSBmcm9tICcuL2NvbW1vbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBCeTxUPihpdGVtczogVFtdLCBpdGVyYXRvcjogKGl0ZW06IFQpID0+IG51bWJlciB8IHN0cmluZykge1xyXG4gIHJldHVybiBpdGVtcy5yZWR1Y2UoKG9iaiwgaXRlbSkgPT4ge1xyXG4gICAgY29uc3Qga2V5ID0gaXRlcmF0b3IoaXRlbSk7XHJcbiAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgIG9ialtrZXldID0gW107XHJcbiAgICB9XHJcbiAgICBvYmpba2V5XS5wdXNoKGl0ZW0pO1xyXG4gICAgcmV0dXJuIG9iajtcclxuICB9LCB7fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGFuZVNvdXJjZURhdGE8VCBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckl0ZW1ULCBUTGFuZURhdGE+IHtcclxuICBsYW5lS2V5OiBudW1iZXI7XHJcbiAgZGF0YT86IFRMYW5lRGF0YTtcclxuICByb3dDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgQm9va2luZ0NhbGVuZGFySXRlbT86IFJlYWN0LkNvbXBvbmVudFR5cGU8Qm9va2luZ0NhbGVuZGFySXRlbVByb3BzPFQ+PjtcclxuICBCb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtPzogUmVhY3QuQ29tcG9uZW50VHlwZTxcclxuICAgIEJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW1Qcm9wczxUPlxyXG4gID47XHJcbiAgQm9va2luZ0NhbGVuZGFyTGFuZUhlYWRlcj86IFJlYWN0LkNvbXBvbmVudFR5cGU8XHJcbiAgICBCb29raW5nQ2FsZW5kYXJMYW5lSGVhZGVyUHJvcHM8VExhbmVEYXRhPlxyXG4gID47XHJcbiAgQm9va2luZ0NhbGVuZGFyTGFuZT86IFJlYWN0LkNvbXBvbmVudFR5cGU8Qm9va2luZ0NhbGVuZGFyTGFuZVByb3BzPFQ+PjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMYW5lRGF0YTxUIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVQsIFRMYW5lRGF0YT5cclxuICBleHRlbmRzIExhbmVTb3VyY2VEYXRhPFQsIFRMYW5lRGF0YT4ge1xyXG4gIGl0ZW1zOiBUW107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEJvb2tpbmdzVG9MYW5lczxUIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVQsIFRMYW5lRGF0YT4oXHJcbiAgYm9va2luZ3M6IFRbXSxcclxuICBmcm9tOiBNb21lbnQsXHJcbiAgbWluTGFuZXNDb3VudDogbnVtYmVyLFxyXG4gIGxhbmVzU291cmNlOiBMYW5lU291cmNlRGF0YTxULCBUTGFuZURhdGE+W10gPSBbXVxyXG4pIHtcclxuICBpZiAoIWJvb2tpbmdzKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGxldCBsYW5lczogTGFuZURhdGE8VCwgVExhbmVEYXRhPltdID0gW107XHJcbiAgaWYgKGxhbmVzU291cmNlPy5sZW5ndGgpIHtcclxuICAgIGxhbmVzID0gbGFuZXNTb3VyY2UubWFwKHNvdXJjZSA9PiAoe1xyXG4gICAgICAuLi5zb3VyY2UsXHJcbiAgICAgIGl0ZW1zOiBbXSxcclxuICAgIH0pKTtcclxuICB9XHJcbiAgY29uc3QgYm9va2luZ3NXaXRob3V0TGFuZUtleSA9IGJvb2tpbmdzLmZpbHRlcihhID0+IGEubGFuZUtleSA9PT0gdW5kZWZpbmVkKTtcclxuICBjb25zdCBib29raW5nc1dpdGhMYW5lS2V5ID0gYm9va2luZ3MuZmlsdGVyKGEgPT4gYS5sYW5lS2V5ICE9PSB1bmRlZmluZWQpO1xyXG4gIGlmIChib29raW5nc1dpdGhMYW5lS2V5Lmxlbmd0aCkge1xyXG4gICAgY29uc3QgZ3JvdXBlZCA9IGdyb3VwQnkoXHJcbiAgICAgIGJvb2tpbmdzV2l0aExhbmVLZXkubWFwKChib29raW5nLCBvcmlnaW5hbEluZGV4KSA9PiAoe1xyXG4gICAgICAgIC4uLmJvb2tpbmcsXHJcbiAgICAgICAgb3JpZ2luYWxJbmRleCxcclxuICAgICAgfSkpLFxyXG4gICAgICBhID0+IGEubGFuZUtleVxyXG4gICAgKTtcclxuICAgIGxhbmVzID0gT2JqZWN0LmtleXMoZ3JvdXBlZCkubWFwKGtleSA9PiAoe1xyXG4gICAgICBsYW5lS2V5OiBOdW1iZXIoa2V5KSxcclxuICAgICAgaXRlbXM6IGdyb3VwZWRba2V5XSxcclxuICAgICAgLi4ubGFuZXNTb3VyY2U/LmZpbmQoYSA9PiBhLmxhbmVLZXkgPT09IE51bWJlcihrZXkpKSxcclxuICAgIH0pKTtcclxuICAgIGNvbnN0IG1pc3NpbmdMYW5lcyA9IGxhbmVzU291cmNlPy5maWx0ZXIoXHJcbiAgICAgIGEgPT4gIWxhbmVzLnNvbWUobCA9PiBsLmxhbmVLZXkgPT09IGEubGFuZUtleSlcclxuICAgICk7XHJcbiAgICBsYW5lcyA9IGxhbmVzLmNvbmNhdChtaXNzaW5nTGFuZXMubWFwKGEgPT4gKHsgLi4uYSwgaXRlbXM6IFtdIH0pKSk7XHJcbiAgfVxyXG4gIGlmIChib29raW5nc1dpdGhvdXRMYW5lS2V5Lmxlbmd0aCkge1xyXG4gICAgbGV0IHJlbWFpbmluZ0Jvb2tpbmdzOiAoVCAmXHJcbiAgICAgIEJvb2tpbmdDYWxlbmRhckl0ZW1XaXRoT3JpZ2luYWxJbmRleFQpW10gPSBib29raW5nc1dpdGhvdXRMYW5lS2V5XHJcbiAgICAgIC5tYXAoKGJvb2tpbmcsIG9yaWdpbmFsSW5kZXgpID0+ICh7IC4uLmJvb2tpbmcsIG9yaWdpbmFsSW5kZXggfSkpXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLmZyb20udmFsdWVPZigpIC0gYi5mcm9tLnZhbHVlT2YoKSk7XHJcbiAgICB3aGlsZSAocmVtYWluaW5nQm9va2luZ3MubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgbWluID0gOTk5OTk5OTk5OTk5OTk7XHJcbiAgICAgIGxldCBib29raW5nSW5kZXggPSAtMTtcclxuICAgICAgbGV0IGxhbmVJbmRleCA9IC0xO1xyXG4gICAgICBsYW5lcy5mb3JFYWNoKChsYW5lLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChsYW5lc1NvdXJjZT8uc29tZShsID0+IGwubGFuZUtleSA9PT0gbGFuZS5sYW5lS2V5KSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsYXN0VGlsbCA9IGxhbmUuaXRlbXNbbGFuZS5pdGVtcy5sZW5ndGggLSAxXT8udGlsbCA/PyBmcm9tO1xyXG4gICAgICAgIGNvbnN0IGRpc3RhbmNlcyA9IHJlbWFpbmluZ0Jvb2tpbmdzLm1hcChib29raW5nID0+IHtcclxuICAgICAgICAgIGNvbnN0IGRpc3QgPSBib29raW5nLmZyb20uZGlmZihsYXN0VGlsbCk7XHJcbiAgICAgICAgICBpZiAobGFuZS5pdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKGRpc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGRpc3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgX21pbiA9IE1hdGgubWluKC4uLmRpc3RhbmNlcy5maWx0ZXIoYSA9PiBhID49IDApKTtcclxuICAgICAgICBpZiAoX21pbiA8IG1pbikge1xyXG4gICAgICAgICAgYm9va2luZ0luZGV4ID0gZGlzdGFuY2VzLmluZGV4T2YoX21pbik7XHJcbiAgICAgICAgICBsYW5lSW5kZXggPSBpbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoYm9va2luZ0luZGV4ID49IDAgJiYgbGFuZUluZGV4ID49IDApIHtcclxuICAgICAgICBsYW5lc1tsYW5lSW5kZXhdLml0ZW1zID0gbGFuZXNbbGFuZUluZGV4XS5pdGVtcy5jb25jYXQoe1xyXG4gICAgICAgICAgLi4ucmVtYWluaW5nQm9va2luZ3NbYm9va2luZ0luZGV4XSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZW1haW5pbmdCb29raW5ncy5zcGxpY2UoYm9va2luZ0luZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsYW5lcyA9IGxhbmVzLmNvbmNhdCh7XHJcbiAgICAgICAgICBpdGVtczogW3sgLi4ucmVtYWluaW5nQm9va2luZ3NbMF0gfV0sXHJcbiAgICAgICAgICBsYW5lS2V5OiBsYW5lcy5sZW5ndGgsXHJcbiAgICAgICAgICBkYXRhOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVtYWluaW5nQm9va2luZ3Muc2hpZnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gTmFpdmUgc29sdXRpb24gdGhhdCBpcyBtdWNoIGxlc3MgY29tcHV0YXRpb25hbGx5IGludGVuc2l2ZSBidXQgeWllbGRzIG1vcmUgbGFuZXMgdGhhbiBuZWNlc3NhcnlcclxuICAgIC8qYm9va2luZ3MuZm9yRWFjaCgoYm9va2luZywgb3JpZ2luYWxJbmRleCkgPT4ge1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICBsYW5lcy5mb3JFYWNoKChsYW5lLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoIWxhbmUuc29tZShpID0+IGl0ZW1zT3ZlcmxhcChib29raW5nLCBpKSkpIHtcclxuICAgICAgICBsYW5lc1tpbmRleF0gPSBsYW5lc1tpbmRleF0uY29uY2F0KHsgLi4uYm9va2luZywgb3JpZ2luYWxJbmRleCB9KTtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBsYW5lcyA9IGxhbmVzLmNvbmNhdChbW3sgLi4uYm9va2luZywgb3JpZ2luYWxJbmRleCB9XV0pO1xyXG4gICAgfVxyXG4gIH0pOyovXHJcbiAgfVxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsYW5lcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIGNvbnN0IGxhbmUgPSBsYW5lc1tpbmRleF07XHJcbiAgICBsYW5lc1tpbmRleF0uaXRlbXMgPSBsYW5lLml0ZW1zLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PiBhLmZyb20udmFsdWVPZigpIC0gYi5mcm9tLnZhbHVlT2YoKVxyXG4gICAgKTtcclxuICB9XHJcbiAgaWYgKGxhbmVzLmxlbmd0aCA8IG1pbkxhbmVzQ291bnQpIHtcclxuICAgIGxhbmVzID0gbGFuZXMuY29uY2F0KFxyXG4gICAgICBuZXcgQXJyYXk8TGFuZURhdGE8VCwgVExhbmVEYXRhPj4obWluTGFuZXNDb3VudCAtIGxhbmVzLmxlbmd0aClcclxuICAgICAgICAuZmlsbChudWxsKVxyXG4gICAgICAgIC5tYXAoKF8sIGluZGV4KSA9PiAoe1xyXG4gICAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgICAgbGFuZUtleTogaW5kZXggKyBsYW5lcy5sZW5ndGgsXHJcbiAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgIH0pKVxyXG4gICAgKTtcclxuICB9XHJcbiAgbGFuZXMgPSBsYW5lcy5zb3J0KChhLCBiKSA9PiBhLmxhbmVLZXkgLSBiLmxhbmVLZXkpO1xyXG4gIHJldHVybiBsYW5lcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGl0ZW1zT3ZlcmxhcDxUIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVQ+KGE6IFQsIGI6IFQpIHtcclxuICBpZiAoIWE/LmZyb20gfHwgIWE/LnRpbGwgfHwgIWI/LmZyb20gfHwgIWI/LnRpbGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKGIudGlsbC5pc0JlZm9yZShhLmZyb20pKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChiLmZyb20uaXNBZnRlcihhLnRpbGwpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SXRlbVBvc2l0aW9uU3R5bGUgPSAobWFyZ2luU3RhcnQ6IG51bWJlciwgd2lkdGg6IG51bWJlcikgPT5cclxuICAoe1xyXG4gICAgbWFyZ2luTGVmdDogYCR7bWFyZ2luU3RhcnQgKiAxMDB9JWAsXHJcbiAgICB3aWR0aDogYCR7d2lkdGggKiAxMDB9JWAsXHJcbiAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJdGVtc0RpbWVuc2lvbnM8VCBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckl0ZW1UPihcclxuICBpdGVtczogVFtdLFxyXG4gIGZyb206IE1vbWVudCxcclxuICB0aWxsOiBNb21lbnRcclxuKSB7XHJcbiAgbGV0IGxhc3RFbmQgPSAwO1xyXG4gIGNvbnN0IHdpZHRoTXMgPSB0aWxsLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpO1xyXG4gIGNvbnN0IHN0YXJ0TXMgPSBmcm9tLnZhbHVlT2YoKTtcclxuICBjb25zdCBlbmRNcyA9IHRpbGwudmFsdWVPZigpO1xyXG4gIHJldHVybiB3aWR0aE1zID4gMFxyXG4gICAgPyBpdGVtcz8ubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0SXNDdXQgPSBpdGVtLmZyb20udmFsdWVPZigpIDwgc3RhcnRNcztcclxuICAgICAgICBjb25zdCByZWFsU3RhcnQgPSAoaXRlbS5mcm9tLnZhbHVlT2YoKSAtIHN0YXJ0TXMpIC8gd2lkdGhNcztcclxuICAgICAgICBjb25zdCByZWFsRnJvbSA9IHN0YXJ0SXNDdXQgPyBtb21lbnQoc3RhcnRNcykgOiBtb21lbnQoaXRlbS5mcm9tKTtcclxuICAgICAgICBjb25zdCBzdGFydCA9IHN0YXJ0SXNDdXQgPyAwIDogcmVhbFN0YXJ0O1xyXG4gICAgICAgIGNvbnN0IGVuZElzQ3V0ID0gaXRlbS50aWxsLnZhbHVlT2YoKSA+IGVuZE1zO1xyXG4gICAgICAgIGNvbnN0IHJlYWxFbmQgPSAoaXRlbS50aWxsLnZhbHVlT2YoKSAtIHN0YXJ0TXMpIC8gd2lkdGhNcztcclxuICAgICAgICBjb25zdCBlbmQgPSBlbmRJc0N1dCA/IChlbmRNcyAtIHN0YXJ0TXMpIC8gd2lkdGhNcyA6IHJlYWxFbmQ7XHJcbiAgICAgICAgY29uc3QgcmVhbFRpbGwgPSBlbmRJc0N1dCA/IG1vbWVudChlbmRNcykgOiBtb21lbnQoaXRlbS50aWxsKTtcclxuICAgICAgICBjb25zdCBtYXJnaW5TdGFydCA9IHN0YXJ0IC0gbGFzdEVuZDtcclxuICAgICAgICBsYXN0RW5kID0gKGl0ZW0udGlsbC52YWx1ZU9mKCkgLSBzdGFydE1zKSAvIHdpZHRoTXM7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGl0ZW0sXHJcbiAgICAgICAgICBzdGFydCxcclxuICAgICAgICAgIHJlYWxTdGFydCxcclxuICAgICAgICAgIHJlYWxGcm9tLFxyXG4gICAgICAgICAgc3RhcnRJc0N1dCxcclxuICAgICAgICAgIHdpZHRoOiBlbmQgLSBzdGFydCxcclxuICAgICAgICAgIGVuZCxcclxuICAgICAgICAgIHJlYWxFbmQsXHJcbiAgICAgICAgICByZWFsVGlsbCxcclxuICAgICAgICAgIGVuZElzQ3V0LFxyXG4gICAgICAgICAgbWFyZ2luU3RhcnQsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgIDogW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNvbnRyb2xJdGVtcyA9IChcclxuICBmcm9tOiBNb21lbnQsXHJcbiAgdGlsbDogTW9tZW50LFxyXG4gIHN0ZXA6IER1cmF0aW9uLFxyXG4gIHN0YXJ0T2ZTdGVwOiBNb21lbnRcclxuKSA9PiB7XHJcbiAgaWYgKCFmcm9tIHx8ICF0aWxsIHx8ICFzdGVwKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGxldCBzdGVwcyA9IE1hdGguY2VpbChcclxuICAgICh0aWxsLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpKSAvIHN0ZXAuYXNNaWxsaXNlY29uZHMoKVxyXG4gICk7XHJcbiAgbGV0IHN1YnRyYWN0ID1cclxuICAgIChzdGFydE9mU3RlcC52YWx1ZU9mKCkgLSBmcm9tLnZhbHVlT2YoKSkgJSBzdGVwLmFzTWlsbGlzZWNvbmRzKCk7XHJcbiAgaWYgKHN1YnRyYWN0ID4gMCkge1xyXG4gICAgc3VidHJhY3QgLT0gc3RlcC5hc01pbGxpc2Vjb25kcygpO1xyXG4gIH1cclxuICBpZiAodGlsbC52YWx1ZU9mKCkgLSBmcm9tLnZhbHVlT2YoKSA+IHN0ZXAuYXNNaWxsaXNlY29uZHMoKSkge1xyXG4gICAgc3RlcHMgKz0gMTtcclxuICB9XHJcbiAgcmV0dXJuIG5ldyBBcnJheShzdGVwcykuZmlsbCgwKS5tYXAoKF8sIGluZGV4KSA9PiAoe1xyXG4gICAgZnJvbTogbW9tZW50KGZyb20pXHJcbiAgICAgIC5hZGQoc3VidHJhY3QpXHJcbiAgICAgIC5hZGQoc3RlcC5hc01pbGxpc2Vjb25kcygpICogaW5kZXgpLFxyXG4gICAgdGlsbDogbW9tZW50KGZyb20pXHJcbiAgICAgIC5hZGQoc3VidHJhY3QpXHJcbiAgICAgIC5hZGQoc3RlcC5hc01pbGxpc2Vjb25kcygpICogKGluZGV4ICsgMSkpLFxyXG4gIH0pKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUdyaWRJdGVtcyA9IChcclxuICBmcm9tOiBNb21lbnQsXHJcbiAgdGlsbDogTW9tZW50LFxyXG4gIHN0ZXA6IER1cmF0aW9uLFxyXG4gIHN1YmRpdmlzaW9uczogbnVtYmVyID0gMVxyXG4pID0+IHtcclxuICBpZiAoIWZyb20gfHwgIXRpbGwgfHwgIXN0ZXAgfHwgc3ViZGl2aXNpb25zIDwgMSkge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuICBjb25zdCBzdGVwcyA9XHJcbiAgICBNYXRoLmZsb29yKFxyXG4gICAgICAoKHRpbGwudmFsdWVPZigpIC0gZnJvbS52YWx1ZU9mKCkpIC8gc3RlcC5hc01pbGxpc2Vjb25kcygpKSAqIHN1YmRpdmlzaW9uc1xyXG4gICAgKSArIDE7XHJcbiAgY29uc3Qgd2lkdGggPSB0aWxsLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpO1xyXG4gIHJldHVybiBuZXcgQXJyYXkoc3RlcHMpXHJcbiAgICAuZmlsbCgwKVxyXG4gICAgLm1hcChcclxuICAgICAgKF8sIGluZGV4KSA9PiAoKHN0ZXAuYXNNaWxsaXNlY29uZHMoKSAvIHN1YmRpdmlzaW9ucykgKiBpbmRleCkgLyB3aWR0aFxyXG4gICAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==