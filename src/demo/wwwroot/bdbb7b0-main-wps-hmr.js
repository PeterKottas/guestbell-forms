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
function splitBookingsToLanes(bookings, from, lanesCount) {
  var lanesSource = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  if (!bookings) {
    return {
      lanes: [],
      extraBookings: []
    };
  }

  var lanes = [];
  var extraBookings = [];

  if (lanesCount) {
    lanes = new Array(lanesCount).fill(null).map(function (_, index) {
      return {
        items: [],
        laneKey: index,
        data: null
      };
    });
  }

  if (lanesSource !== null && lanesSource !== void 0 && lanesSource.length) {
    lanes = lanesSource.map(function (source) {
      return {
        items: [],
        laneKey: source.laneKey,
        data: source.data
      };
    });
  }

  if (bookings.every(function (b) {
    return b.laneKey !== undefined;
  })) {
    var grouped = groupBy(bookings.map(function (booking, originalIndex) {
      return _objectSpread(_objectSpread({}, booking), {}, {
        originalIndex: originalIndex
      });
    }), function (a) {
      return a.laneKey;
    });
    lanes = Object.keys(grouped).map(function (key) {
      var _lanesSource$find;

      return {
        laneKey: Number(key),
        items: grouped[key],
        data: lanesSource === null || lanesSource === void 0 ? void 0 : (_lanesSource$find = lanesSource.find(function (a) {
          return a.laneKey === Number(key);
        })) === null || _lanesSource$find === void 0 ? void 0 : _lanesSource$find.data
      };
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
  } else {
    (function () {
      var remainingBookings = bookings.map(function (booking, originalIndex) {
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
        } else if (!lanesCount) {
          lanes = lanes.concat({
            items: [_objectSpread({}, remainingBookings[0])],
            laneKey: lanes.length,
            data: null
          });
          remainingBookings.shift();
        } else {
          // lanes = lanes.concat([[{ ...remainingBookings[0] }]]);
          extraBookings = extraBookings.concat(remainingBookings.shift());
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

  lanes = lanes.sort(function (a, b) {
    return a.laneKey - b.laneKey;
  });
  return {
    lanes: lanes,
    extraBookings: extraBookings
  };
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
    var start = startIsCut ? 0 : realStart;
    var endIsCut = item.till.valueOf() > endMs;
    var realEnd = (item.till.valueOf() - startMs) / widthMs;
    var end = endIsCut ? (endMs - startMs) / widthMs : realEnd;
    var marginStart = start - lastEnd;
    lastEnd = (item.till.valueOf() - startMs) / widthMs;
    return {
      item: item,
      start: start,
      realStart: realStart,
      startIsCut: startIsCut,
      width: end - start,
      end: end,
      realEnd: realEnd,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvYm9va2luZ0NhbGVuZGFyL3V0aWxzLnRzIl0sIm5hbWVzIjpbImdyb3VwQnkiLCJpdGVtcyIsIml0ZXJhdG9yIiwicmVkdWNlIiwib2JqIiwiaXRlbSIsImtleSIsImhhc093blByb3BlcnR5IiwicHVzaCIsInNwbGl0Qm9va2luZ3NUb0xhbmVzIiwiYm9va2luZ3MiLCJmcm9tIiwibGFuZXNDb3VudCIsImxhbmVzU291cmNlIiwibGFuZXMiLCJleHRyYUJvb2tpbmdzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImluZGV4IiwibGFuZUtleSIsImRhdGEiLCJsZW5ndGgiLCJzb3VyY2UiLCJldmVyeSIsImIiLCJ1bmRlZmluZWQiLCJncm91cGVkIiwiYm9va2luZyIsIm9yaWdpbmFsSW5kZXgiLCJhIiwiT2JqZWN0Iiwia2V5cyIsIk51bWJlciIsImZpbmQiLCJtaXNzaW5nTGFuZXMiLCJmaWx0ZXIiLCJzb21lIiwibCIsImNvbmNhdCIsInJlbWFpbmluZ0Jvb2tpbmdzIiwic29ydCIsInZhbHVlT2YiLCJtaW4iLCJib29raW5nSW5kZXgiLCJsYW5lSW5kZXgiLCJmb3JFYWNoIiwibGFuZSIsImxhc3RUaWxsIiwidGlsbCIsImRpc3RhbmNlcyIsImRpc3QiLCJkaWZmIiwiTWF0aCIsImFicyIsIl9taW4iLCJpbmRleE9mIiwic3BsaWNlIiwic2hpZnQiLCJpdGVtc092ZXJsYXAiLCJpc0JlZm9yZSIsImlzQWZ0ZXIiLCJnZXRJdGVtUG9zaXRpb25TdHlsZSIsIm1hcmdpblN0YXJ0Iiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwiY2FsY3VsYXRlSXRlbXNEaW1lbnNpb25zIiwibGFzdEVuZCIsIndpZHRoTXMiLCJzdGFydE1zIiwiZW5kTXMiLCJzdGFydElzQ3V0IiwicmVhbFN0YXJ0Iiwic3RhcnQiLCJlbmRJc0N1dCIsInJlYWxFbmQiLCJlbmQiLCJnZW5lcmF0ZUNvbnRyb2xJdGVtcyIsInN0ZXAiLCJzdGFydE9mU3RlcCIsInN0ZXBzIiwiY2VpbCIsImFzTWlsbGlzZWNvbmRzIiwic3VidHJhY3QiLCJtb21lbnQiLCJhZGQiLCJnZW5lcmF0ZUdyaWRJdGVtcyIsInN1YmRpdmlzaW9ucyIsImZsb29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBTU8sU0FBU0EsT0FBVCxDQUFvQkMsS0FBcEIsRUFBZ0NDLFFBQWhDLEVBQXdFO0FBQzdFLFNBQU9ELEtBQUssQ0FBQ0UsTUFBTixDQUFhLFVBQUNDLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQ2pDLFFBQU1DLEdBQUcsR0FBR0osUUFBUSxDQUFDRyxJQUFELENBQXBCOztBQUNBLFFBQUksQ0FBQ0QsR0FBRyxDQUFDRyxjQUFKLENBQW1CRCxHQUFuQixDQUFMLEVBQThCO0FBQzVCRixTQUFHLENBQUNFLEdBQUQsQ0FBSCxHQUFXLEVBQVg7QUFDRDs7QUFDREYsT0FBRyxDQUFDRSxHQUFELENBQUgsQ0FBU0UsSUFBVCxDQUFjSCxJQUFkO0FBQ0EsV0FBT0QsR0FBUDtBQUNELEdBUE0sRUFPSixFQVBJLENBQVA7QUFRRDtBQVlNLFNBQVNLLG9CQUFULENBQ0xDLFFBREssRUFFTEMsSUFGSyxFQUdMQyxVQUhLLEVBS0w7QUFBQSxNQURBQyxXQUNBLHVFQURtQyxFQUNuQzs7QUFDQSxNQUFJLENBQUNILFFBQUwsRUFBZTtBQUNiLFdBQU87QUFBRUksV0FBSyxFQUFFLEVBQVQ7QUFBYUMsbUJBQWEsRUFBRTtBQUE1QixLQUFQO0FBQ0Q7O0FBQ0QsTUFBSUQsS0FBdUIsR0FBRyxFQUE5QjtBQUNBLE1BQUlDLGFBQTRELEdBQUcsRUFBbkU7O0FBQ0EsTUFBSUgsVUFBSixFQUFnQjtBQUNkRSxTQUFLLEdBQUcsSUFBSUUsS0FBSixDQUEwQkosVUFBMUIsRUFDTEssSUFESyxDQUNBLElBREEsRUFFTEMsR0FGSyxDQUVELFVBQUNDLENBQUQsRUFBSUMsS0FBSjtBQUFBLGFBQWU7QUFBRW5C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YmRiYjdiMC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50LCB7IE1vbWVudCwgRHVyYXRpb24gfSBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQge1xyXG4gIEJvb2tpbmdDYWxlbmRhckl0ZW1ULFxyXG4gIEJvb2tpbmdDYWxlbmRhckl0ZW1XaXRoT3JpZ2luYWxJbmRleFQsXHJcbn0gZnJvbSAnLi9jb21tb24nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwQnk8VD4oaXRlbXM6IFRbXSwgaXRlcmF0b3I6IChpdGVtOiBUKSA9PiBudW1iZXIgfCBzdHJpbmcpIHtcclxuICByZXR1cm4gaXRlbXMucmVkdWNlKChvYmosIGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGtleSA9IGl0ZXJhdG9yKGl0ZW0pO1xyXG4gICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICBvYmpba2V5XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgb2JqW2tleV0ucHVzaChpdGVtKTtcclxuICAgIHJldHVybiBvYmo7XHJcbiAgfSwge30pO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExhbmVTb3VyY2VEYXRhPFQ+IHtcclxuICBsYW5lS2V5OiBudW1iZXI7XHJcbiAgZGF0YT86IFQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGFuZURhdGE8VCBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckl0ZW1ULCBCPlxyXG4gIGV4dGVuZHMgTGFuZVNvdXJjZURhdGE8Qj4ge1xyXG4gIGl0ZW1zOiBUW107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEJvb2tpbmdzVG9MYW5lczxUIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVQsIEI+KFxyXG4gIGJvb2tpbmdzOiBUW10sXHJcbiAgZnJvbTogTW9tZW50LFxyXG4gIGxhbmVzQ291bnQ6IG51bWJlcixcclxuICBsYW5lc1NvdXJjZTogTGFuZVNvdXJjZURhdGE8Qj5bXSA9IFtdXHJcbikge1xyXG4gIGlmICghYm9va2luZ3MpIHtcclxuICAgIHJldHVybiB7IGxhbmVzOiBbXSwgZXh0cmFCb29raW5nczogW10gfTtcclxuICB9XHJcbiAgbGV0IGxhbmVzOiBMYW5lRGF0YTxULCBCPltdID0gW107XHJcbiAgbGV0IGV4dHJhQm9va2luZ3M6IChUICYgQm9va2luZ0NhbGVuZGFySXRlbVdpdGhPcmlnaW5hbEluZGV4VClbXSA9IFtdO1xyXG4gIGlmIChsYW5lc0NvdW50KSB7XHJcbiAgICBsYW5lcyA9IG5ldyBBcnJheTxMYW5lRGF0YTxULCBCPj4obGFuZXNDb3VudClcclxuICAgICAgLmZpbGwobnVsbClcclxuICAgICAgLm1hcCgoXywgaW5kZXgpID0+ICh7IGl0ZW1zOiBbXSwgbGFuZUtleTogaW5kZXgsIGRhdGE6IG51bGwgfSkpO1xyXG4gIH1cclxuICBpZiAobGFuZXNTb3VyY2U/Lmxlbmd0aCkge1xyXG4gICAgbGFuZXMgPSBsYW5lc1NvdXJjZS5tYXAoc291cmNlID0+ICh7XHJcbiAgICAgIGl0ZW1zOiBbXSxcclxuICAgICAgbGFuZUtleTogc291cmNlLmxhbmVLZXksXHJcbiAgICAgIGRhdGE6IHNvdXJjZS5kYXRhLFxyXG4gICAgfSkpO1xyXG4gIH1cclxuICBpZiAoYm9va2luZ3MuZXZlcnkoYiA9PiBiLmxhbmVLZXkgIT09IHVuZGVmaW5lZCkpIHtcclxuICAgIGNvbnN0IGdyb3VwZWQgPSBncm91cEJ5KFxyXG4gICAgICBib29raW5ncy5tYXAoKGJvb2tpbmcsIG9yaWdpbmFsSW5kZXgpID0+ICh7IC4uLmJvb2tpbmcsIG9yaWdpbmFsSW5kZXggfSkpLFxyXG4gICAgICBhID0+IGEubGFuZUtleVxyXG4gICAgKTtcclxuICAgIGxhbmVzID0gT2JqZWN0LmtleXMoZ3JvdXBlZCkubWFwKGtleSA9PiAoe1xyXG4gICAgICBsYW5lS2V5OiBOdW1iZXIoa2V5KSxcclxuICAgICAgaXRlbXM6IGdyb3VwZWRba2V5XSxcclxuICAgICAgZGF0YTogbGFuZXNTb3VyY2U/LmZpbmQoYSA9PiBhLmxhbmVLZXkgPT09IE51bWJlcihrZXkpKT8uZGF0YSxcclxuICAgIH0pKTtcclxuICAgIGNvbnN0IG1pc3NpbmdMYW5lcyA9IGxhbmVzU291cmNlPy5maWx0ZXIoXHJcbiAgICAgIGEgPT4gIWxhbmVzLnNvbWUobCA9PiBsLmxhbmVLZXkgPT09IGEubGFuZUtleSlcclxuICAgICk7XHJcbiAgICBsYW5lcyA9IGxhbmVzLmNvbmNhdChtaXNzaW5nTGFuZXMubWFwKGEgPT4gKHsgLi4uYSwgaXRlbXM6IFtdIH0pKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxldCByZW1haW5pbmdCb29raW5nczogKFQgJlxyXG4gICAgICBCb29raW5nQ2FsZW5kYXJJdGVtV2l0aE9yaWdpbmFsSW5kZXhUKVtdID0gYm9va2luZ3NcclxuICAgICAgLm1hcCgoYm9va2luZywgb3JpZ2luYWxJbmRleCkgPT4gKHsgLi4uYm9va2luZywgb3JpZ2luYWxJbmRleCB9KSlcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZnJvbS52YWx1ZU9mKCkgLSBiLmZyb20udmFsdWVPZigpKTtcclxuICAgIHdoaWxlIChyZW1haW5pbmdCb29raW5ncy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBtaW4gPSA5OTk5OTk5OTk5OTk5OTtcclxuICAgICAgbGV0IGJvb2tpbmdJbmRleCA9IC0xO1xyXG4gICAgICBsZXQgbGFuZUluZGV4ID0gLTE7XHJcbiAgICAgIGxhbmVzLmZvckVhY2goKGxhbmUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGFzdFRpbGwgPSBsYW5lLml0ZW1zW2xhbmUuaXRlbXMubGVuZ3RoIC0gMV0/LnRpbGwgPz8gZnJvbTtcclxuICAgICAgICBjb25zdCBkaXN0YW5jZXMgPSByZW1haW5pbmdCb29raW5ncy5tYXAoYm9va2luZyA9PiB7XHJcbiAgICAgICAgICBjb25zdCBkaXN0ID0gYm9va2luZy5mcm9tLmRpZmYobGFzdFRpbGwpO1xyXG4gICAgICAgICAgaWYgKGxhbmUuaXRlbXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyhkaXN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBkaXN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IF9taW4gPSBNYXRoLm1pbiguLi5kaXN0YW5jZXMuZmlsdGVyKGEgPT4gYSA+PSAwKSk7XHJcbiAgICAgICAgaWYgKF9taW4gPCBtaW4pIHtcclxuICAgICAgICAgIGJvb2tpbmdJbmRleCA9IGRpc3RhbmNlcy5pbmRleE9mKF9taW4pO1xyXG4gICAgICAgICAgbGFuZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGJvb2tpbmdJbmRleCA+PSAwICYmIGxhbmVJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgbGFuZXNbbGFuZUluZGV4XS5pdGVtcyA9IGxhbmVzW2xhbmVJbmRleF0uaXRlbXMuY29uY2F0KHtcclxuICAgICAgICAgIC4uLnJlbWFpbmluZ0Jvb2tpbmdzW2Jvb2tpbmdJbmRleF0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVtYWluaW5nQm9va2luZ3Muc3BsaWNlKGJvb2tpbmdJbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoIWxhbmVzQ291bnQpIHtcclxuICAgICAgICBsYW5lcyA9IGxhbmVzLmNvbmNhdCh7XHJcbiAgICAgICAgICBpdGVtczogW3sgLi4ucmVtYWluaW5nQm9va2luZ3NbMF0gfV0sXHJcbiAgICAgICAgICBsYW5lS2V5OiBsYW5lcy5sZW5ndGgsXHJcbiAgICAgICAgICBkYXRhOiBudWxsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlbWFpbmluZ0Jvb2tpbmdzLnNoaWZ0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gbGFuZXMgPSBsYW5lcy5jb25jYXQoW1t7IC4uLnJlbWFpbmluZ0Jvb2tpbmdzWzBdIH1dXSk7XHJcbiAgICAgICAgZXh0cmFCb29raW5ncyA9IGV4dHJhQm9va2luZ3MuY29uY2F0KHJlbWFpbmluZ0Jvb2tpbmdzLnNoaWZ0KCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBOYWl2ZSBzb2x1dGlvbiB0aGF0IGlzIG11Y2ggbGVzcyBjb21wdXRhdGlvbmFsbHkgaW50ZW5zaXZlIGJ1dCB5aWVsZHMgbW9yZSBsYW5lcyB0aGFuIG5lY2Vzc2FyeVxyXG4gICAgLypib29raW5ncy5mb3JFYWNoKChib29raW5nLCBvcmlnaW5hbEluZGV4KSA9PiB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIGxhbmVzLmZvckVhY2goKGxhbmUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICghbGFuZS5zb21lKGkgPT4gaXRlbXNPdmVybGFwKGJvb2tpbmcsIGkpKSkge1xyXG4gICAgICAgIGxhbmVzW2luZGV4XSA9IGxhbmVzW2luZGV4XS5jb25jYXQoeyAuLi5ib29raW5nLCBvcmlnaW5hbEluZGV4IH0pO1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIGxhbmVzID0gbGFuZXMuY29uY2F0KFtbeyAuLi5ib29raW5nLCBvcmlnaW5hbEluZGV4IH1dXSk7XHJcbiAgICB9XHJcbiAgfSk7Ki9cclxuICB9XHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxhbmVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgY29uc3QgbGFuZSA9IGxhbmVzW2luZGV4XTtcclxuICAgIGxhbmVzW2luZGV4XS5pdGVtcyA9IGxhbmUuaXRlbXMuc29ydChcclxuICAgICAgKGEsIGIpID0+IGEuZnJvbS52YWx1ZU9mKCkgLSBiLmZyb20udmFsdWVPZigpXHJcbiAgICApO1xyXG4gIH1cclxuICBsYW5lcyA9IGxhbmVzLnNvcnQoKGEsIGIpID0+IGEubGFuZUtleSAtIGIubGFuZUtleSk7XHJcbiAgcmV0dXJuIHsgbGFuZXMsIGV4dHJhQm9va2luZ3MgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGl0ZW1zT3ZlcmxhcDxUIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVQ+KGE6IFQsIGI6IFQpIHtcclxuICBpZiAoIWE/LmZyb20gfHwgIWE/LnRpbGwgfHwgIWI/LmZyb20gfHwgIWI/LnRpbGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKGIudGlsbC5pc0JlZm9yZShhLmZyb20pKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChiLmZyb20uaXNBZnRlcihhLnRpbGwpKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SXRlbVBvc2l0aW9uU3R5bGUgPSAobWFyZ2luU3RhcnQ6IG51bWJlciwgd2lkdGg6IG51bWJlcikgPT5cclxuICAoe1xyXG4gICAgbWFyZ2luTGVmdDogYCR7bWFyZ2luU3RhcnQgKiAxMDB9JWAsXHJcbiAgICB3aWR0aDogYCR7d2lkdGggKiAxMDB9JWAsXHJcbiAgfSBhcyBSZWFjdC5DU1NQcm9wZXJ0aWVzKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJdGVtc0RpbWVuc2lvbnM8VCBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckl0ZW1UPihcclxuICBpdGVtczogVFtdLFxyXG4gIGZyb206IE1vbWVudCxcclxuICB0aWxsOiBNb21lbnRcclxuKSB7XHJcbiAgbGV0IGxhc3RFbmQgPSAwO1xyXG4gIGNvbnN0IHdpZHRoTXMgPSB0aWxsLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpO1xyXG4gIGNvbnN0IHN0YXJ0TXMgPSBmcm9tLnZhbHVlT2YoKTtcclxuICBjb25zdCBlbmRNcyA9IHRpbGwudmFsdWVPZigpO1xyXG4gIHJldHVybiB3aWR0aE1zID4gMFxyXG4gICAgPyBpdGVtcz8ubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0SXNDdXQgPSBpdGVtLmZyb20udmFsdWVPZigpIDwgc3RhcnRNcztcclxuICAgICAgICBjb25zdCByZWFsU3RhcnQgPSAoaXRlbS5mcm9tLnZhbHVlT2YoKSAtIHN0YXJ0TXMpIC8gd2lkdGhNcztcclxuICAgICAgICBjb25zdCBzdGFydCA9IHN0YXJ0SXNDdXQgPyAwIDogcmVhbFN0YXJ0O1xyXG4gICAgICAgIGNvbnN0IGVuZElzQ3V0ID0gaXRlbS50aWxsLnZhbHVlT2YoKSA+IGVuZE1zO1xyXG4gICAgICAgIGNvbnN0IHJlYWxFbmQgPSAoaXRlbS50aWxsLnZhbHVlT2YoKSAtIHN0YXJ0TXMpIC8gd2lkdGhNcztcclxuICAgICAgICBjb25zdCBlbmQgPSBlbmRJc0N1dCA/IChlbmRNcyAtIHN0YXJ0TXMpIC8gd2lkdGhNcyA6IHJlYWxFbmQ7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luU3RhcnQgPSBzdGFydCAtIGxhc3RFbmQ7XHJcbiAgICAgICAgbGFzdEVuZCA9IChpdGVtLnRpbGwudmFsdWVPZigpIC0gc3RhcnRNcykgLyB3aWR0aE1zO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpdGVtLFxyXG4gICAgICAgICAgc3RhcnQsXHJcbiAgICAgICAgICByZWFsU3RhcnQsXHJcbiAgICAgICAgICBzdGFydElzQ3V0LFxyXG4gICAgICAgICAgd2lkdGg6IGVuZCAtIHN0YXJ0LFxyXG4gICAgICAgICAgZW5kLFxyXG4gICAgICAgICAgcmVhbEVuZCxcclxuICAgICAgICAgIGVuZElzQ3V0LFxyXG4gICAgICAgICAgbWFyZ2luU3RhcnQsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgIDogW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNvbnRyb2xJdGVtcyA9IChcclxuICBmcm9tOiBNb21lbnQsXHJcbiAgdGlsbDogTW9tZW50LFxyXG4gIHN0ZXA6IER1cmF0aW9uLFxyXG4gIHN0YXJ0T2ZTdGVwOiBNb21lbnRcclxuKSA9PiB7XHJcbiAgaWYgKCFmcm9tIHx8ICF0aWxsIHx8ICFzdGVwKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIGNvbnN0IHN0ZXBzID0gTWF0aC5jZWlsKFxyXG4gICAgKHRpbGwudmFsdWVPZigpIC0gZnJvbS52YWx1ZU9mKCkpIC8gc3RlcC5hc01pbGxpc2Vjb25kcygpXHJcbiAgKTtcclxuICBsZXQgc3VidHJhY3QgPVxyXG4gICAgKHN0YXJ0T2ZTdGVwLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpKSAlIHN0ZXAuYXNNaWxsaXNlY29uZHMoKTtcclxuICBpZiAoc3VidHJhY3QgPiAwKSB7XHJcbiAgICBzdWJ0cmFjdCAtPSBzdGVwLmFzTWlsbGlzZWNvbmRzKCk7XHJcbiAgfVxyXG4gIHJldHVybiBuZXcgQXJyYXkoc3RlcHMpLmZpbGwoMCkubWFwKChfLCBpbmRleCkgPT4gKHtcclxuICAgIGZyb206IG1vbWVudChmcm9tKVxyXG4gICAgICAuYWRkKHN1YnRyYWN0KVxyXG4gICAgICAuYWRkKHN0ZXAuYXNNaWxsaXNlY29uZHMoKSAqIGluZGV4KSxcclxuICAgIHRpbGw6IG1vbWVudChmcm9tKVxyXG4gICAgICAuYWRkKHN1YnRyYWN0KVxyXG4gICAgICAuYWRkKHN0ZXAuYXNNaWxsaXNlY29uZHMoKSAqIChpbmRleCArIDEpKSxcclxuICB9KSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVHcmlkSXRlbXMgPSAoXHJcbiAgZnJvbTogTW9tZW50LFxyXG4gIHRpbGw6IE1vbWVudCxcclxuICBzdGVwOiBEdXJhdGlvbixcclxuICBzdWJkaXZpc2lvbnM6IG51bWJlciA9IDFcclxuKSA9PiB7XHJcbiAgaWYgKCFmcm9tIHx8ICF0aWxsIHx8ICFzdGVwIHx8IHN1YmRpdmlzaW9ucyA8IDEpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgY29uc3Qgc3RlcHMgPVxyXG4gICAgTWF0aC5mbG9vcihcclxuICAgICAgKCh0aWxsLnZhbHVlT2YoKSAtIGZyb20udmFsdWVPZigpKSAvIHN0ZXAuYXNNaWxsaXNlY29uZHMoKSkgKiBzdWJkaXZpc2lvbnNcclxuICAgICkgKyAxO1xyXG4gIGNvbnN0IHdpZHRoID0gdGlsbC52YWx1ZU9mKCkgLSBmcm9tLnZhbHVlT2YoKTtcclxuICByZXR1cm4gbmV3IEFycmF5KHN0ZXBzKVxyXG4gICAgLmZpbGwoMClcclxuICAgIC5tYXAoXHJcbiAgICAgIChfLCBpbmRleCkgPT4gKChzdGVwLmFzTWlsbGlzZWNvbmRzKCkgLyBzdWJkaXZpc2lvbnMpICogaW5kZXgpIC8gd2lkdGhcclxuICAgICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=