webpackHotUpdate("main",{

/***/ "./src/lib/components/bookingCalendar/bookingCalendarRenderItem/BookingCalendarRenderItem.tsx":
/*!****************************************************************************************************!*\
  !*** ./src/lib/components/bookingCalendar/bookingCalendarRenderItem/BookingCalendarRenderItem.tsx ***!
  \****************************************************************************************************/
/*! exports provided: BookingCalendarRenderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingCalendarRenderItem", function() { return BookingCalendarRenderItem; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./src/lib/components/bookingCalendar/bookingCalendarRenderItem/classes.ts");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




function BookingCalendarRenderItem(props) {
  var _item$from, _item$from$format, _item$till, _item$till$format, _classNames;

  var item = props.item,
      className = props.className,
      laneIndex = props.laneIndex,
      itemIndex = props.itemIndex,
      width = props.width,
      endIsCut = props.endIsCut,
      startIsCut = props.startIsCut,
      alwaysShowContent = props.alwaysShowContent,
      _props$children = props.children,
      children = _props$children === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, laneIndex, "-", itemIndex, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null), (_item$from = item.from) === null || _item$from === void 0 ? void 0 : (_item$from$format = _item$from.format) === null || _item$from$format === void 0 ? void 0 : _item$from$format.call(_item$from, 'M/D H:mm'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null), (_item$till = item.till) === null || _item$till === void 0 ? void 0 : (_item$till$format = _item$till.format) === null || _item$till$format === void 0 ? void 0 : _item$till$format.call(_item$till, 'M/D H:mm')) : _props$children;
  /*const stepWidth = React.useMemo(
    () => step.asMilliseconds() / till.diff(from),
    [step, from, till]
  );*/

  return item ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_classes__WEBPACK_IMPORTED_MODULE_2__["bookingCalendarRenderItemDefaultClasses"].className, className, (_classNames = {}, _defineProperty(_classNames, _classes__WEBPACK_IMPORTED_MODULE_2__["bookingCalendarRenderItemDefaultClasses"].cutStartClassname, startIsCut), _defineProperty(_classNames, _classes__WEBPACK_IMPORTED_MODULE_2__["bookingCalendarRenderItemDefaultClasses"].cutEndClassname, endIsCut), _classNames))
  }, (alwaysShowContent || width > 0.1) && children) : null;
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BookingCalendarRenderItem, "BookingCalendarRenderItem", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\bookingCalendar\\bookingCalendarRenderItem\\BookingCalendarRenderItem.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvYm9va2luZ0NhbGVuZGFyL2Jvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW0vQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbS50c3giXSwibmFtZXMiOlsiQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbSIsInByb3BzIiwiaXRlbSIsImNsYXNzTmFtZSIsImxhbmVJbmRleCIsIml0ZW1JbmRleCIsIndpZHRoIiwiZW5kSXNDdXQiLCJzdGFydElzQ3V0IiwiYWx3YXlzU2hvd0NvbnRlbnQiLCJjaGlsZHJlbiIsImZyb20iLCJmb3JtYXQiLCJ0aWxsIiwiY2xhc3NOYW1lcyIsImJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW1EZWZhdWx0Q2xhc3NlcyIsImN1dFN0YXJ0Q2xhc3NuYW1lIiwiY3V0RW5kQ2xhc3NuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBWU8sU0FBU0EseUJBQVQsQ0FDTEMsS0FESyxFQUVMO0FBQUE7O0FBQ0EsTUFDRUMsSUFERixHQWtCSUQsS0FsQkosQ0FDRUMsSUFERjtBQUFBLE1BRUVDLFNBRkYsR0FrQklGLEtBbEJKLENBRUVFLFNBRkY7QUFBQSxNQUdFQyxTQUhGLEdBa0JJSCxLQWxCSixDQUdFRyxTQUhGO0FBQUEsTUFJRUMsU0FKRixHQWtCSUosS0FsQkosQ0FJRUksU0FKRjtBQUFBLE1BS0VDLEtBTEYsR0FrQklMLEtBbEJKLENBS0VLLEtBTEY7QUFBQSxNQU1FQyxRQU5GLEdBa0JJTixLQWxCSixDQU1FTSxRQU5GO0FBQUEsTUFPRUMsVUFQRixHQWtCSVAsS0FsQkosQ0FPRU8sVUFQRjtBQUFBLE1BUUVDLGlCQVJGLEdBa0JJUixLQWxCSixDQVFFUSxpQkFSRjtBQUFBLHdCQWtCSVIsS0FsQkosQ0FTRVMsUUFURjtBQUFBLE1BU0VBLFFBVEYsNkNBVUksMEdBQ0dOLFNBREgsT0FDZUMsU0FEZixlQUVFLCtEQUZGLGdCQUdHSCxJQUFJLENBQUNTLElBSFIsb0VBR0csV0FBV0MsTUFIZCxzREFHRyxtQ0FBb0IsVUFBcEIsQ0FISCxlQUlFLCtEQUpGLGdCQUtHVixJQUFJLENBQUNXLElBTFIsb0VBS0csV0FBV0QsTUFMZCxzREFLRyxtQ0FBb0IsVUFBcEIsQ0FMSCxDQVZKO0FBbUJBO0FBQ0Y7QUFDQTtBQUNBOztBQUNFLFNBQU9WLElBQUksZ0JBQ1Q7QUFDRSxhQUFTLEVBQUVZLGlEQUFVLENBQ25CQyxnRkFBdUMsQ0FBQ1osU0FEckIsRUFFbkJBLFNBRm1CLGtEQUloQlksZ0ZBQXVDLENBQUNDLGlCQUp4QixFQUk0Q1IsVUFKNUMsZ0NBS2hCTyxnRkFBdUMsQ0FBQ0UsZUFMeEIsRUFLMENWLFFBTDFDO0FBRHZCLEtBVUcsQ0FBQ0UsaUJBQWlCLElBQUlILEtBQUssR0FBRyxHQUE5QixLQUFzQ0ksUUFWekMsQ0FEUyxHQWFQLElBYko7QUFjRDs7Ozs7Ozs7OzswQkF4Q2VWLHlCIiwiZmlsZSI6ImUzN2VlZWYtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFySXRlbVByb3BzIH0gZnJvbSAnLi4vYm9va2luZ0NhbGVuZGFySXRlbSc7XHJcbmltcG9ydCB7IEJvb2tpbmdDYWxlbmRhckl0ZW1UIH0gZnJvbSAnLi8uLi9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIGJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW1EZWZhdWx0Q2xhc3NlcyxcclxuICBCb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtQ2xhc3NlcyxcclxufSBmcm9tICcuL2NsYXNzZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtUHJvcHM8VCBleHRlbmRzIEJvb2tpbmdDYWxlbmRhckl0ZW1UPlxyXG4gIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVByb3BzPFQ+LFxyXG4gICAgQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbUNsYXNzZXMge1xyXG4gIGFsd2F5c1Nob3dDb250ZW50PzogYm9vbGVhbjtcclxuICBjaGlsZHJlbj86IEpTWC5FbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbTxUIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVQ+KFxyXG4gIHByb3BzOiBCb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtUHJvcHM8VD5cclxuKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaXRlbSxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIGxhbmVJbmRleCxcclxuICAgIGl0ZW1JbmRleCxcclxuICAgIHdpZHRoLFxyXG4gICAgZW5kSXNDdXQsXHJcbiAgICBzdGFydElzQ3V0LFxyXG4gICAgYWx3YXlzU2hvd0NvbnRlbnQsXHJcbiAgICBjaGlsZHJlbiA9IChcclxuICAgICAgPD5cclxuICAgICAgICB7bGFuZUluZGV4fS17aXRlbUluZGV4fVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIHtpdGVtLmZyb20/LmZvcm1hdD8uKCdNL0QgSDptbScpfVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIHtpdGVtLnRpbGw/LmZvcm1hdD8uKCdNL0QgSDptbScpfVxyXG4gICAgICA8Lz5cclxuICAgICksXHJcbiAgfSA9IHByb3BzO1xyXG4gIC8qY29uc3Qgc3RlcFdpZHRoID0gUmVhY3QudXNlTWVtbyhcclxuICAgICgpID0+IHN0ZXAuYXNNaWxsaXNlY29uZHMoKSAvIHRpbGwuZGlmZihmcm9tKSxcclxuICAgIFtzdGVwLCBmcm9tLCB0aWxsXVxyXG4gICk7Ki9cclxuICByZXR1cm4gaXRlbSA/IChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgIGJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW1EZWZhdWx0Q2xhc3Nlcy5jbGFzc05hbWUsXHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFtib29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtRGVmYXVsdENsYXNzZXMuY3V0U3RhcnRDbGFzc25hbWVdOiBzdGFydElzQ3V0LFxyXG4gICAgICAgICAgW2Jvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW1EZWZhdWx0Q2xhc3Nlcy5jdXRFbmRDbGFzc25hbWVdOiBlbmRJc0N1dCxcclxuICAgICAgICB9XHJcbiAgICAgICl9XHJcbiAgICA+XHJcbiAgICAgIHsoYWx3YXlzU2hvd0NvbnRlbnQgfHwgd2lkdGggPiAwLjEpICYmIGNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKSA6IG51bGw7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==