webpackHotUpdate("main",{

/***/ "./src/lib/components/bookingCalendar/bookingCalendarLanesHeader/BookingCalendarLanesHeaderRenderItem.tsx":
/*!****************************************************************************************************************!*\
  !*** ./src/lib/components/bookingCalendar/bookingCalendarLanesHeader/BookingCalendarLanesHeaderRenderItem.tsx ***!
  \****************************************************************************************************************/
/*! exports provided: BookingCalendarLanesHeaderRenderItemFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingCalendarLanesHeaderRenderItemFactory", function() { return BookingCalendarLanesHeaderRenderItemFactory; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bookingCalendarRenderItem_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bookingCalendarRenderItem/classes */ "./src/lib/components/bookingCalendar/bookingCalendarRenderItem/classes.ts");
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../button/Button */ "./src/lib/components/button/Button.tsx");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





var BookingCalendarLanesHeaderRenderItemFactory = function BookingCalendarLanesHeaderRenderItemFactory(onRangeChange) {
  return __signature__(function BookingCalendarLanesHeaderRenderItem(props) {
    var item = props.item,
        className = props.className,
        startIsCut = props.startIsCut,
        endIsCut = props.endIsCut,
        realFrom = props.realFrom,
        realTill = props.realTill;
    var onClick = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
      return onRangeChange({
        from: item.from,
        till: item.till
      });
    }, [item]);
    return item ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_bookingCalendarRenderItem_classes__WEBPACK_IMPORTED_MODULE_2__["bookingCalendarRenderItemDefaultClasses"].className, className)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      className: "bookingCalendar__lanesHeader__renderItem__button",
      noShadow: true,
      onClick: onClick
    }, startIsCut || endIsCut ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, item.from.format('ddd, Do'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
      className: "bookingCalendar__lanesHeader__renderItem__button__mutedText bookingCalendar__lanesHeader__renderItem__button__mutedText--split"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, realFrom.format('M/D H:mm')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", null, realTill.format('M/D H:mm')))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, item.from.format('ddd'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
      className: "bookingCalendar__lanesHeader__renderItem__button__mutedText"
    }, item.from.format('Do'))))) : null;
  }, "useCallback{onClick}");
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BookingCalendarLanesHeaderRenderItemFactory, "BookingCalendarLanesHeaderRenderItemFactory", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\bookingCalendar\\bookingCalendarLanesHeader\\BookingCalendarLanesHeaderRenderItem.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvYm9va2luZ0NhbGVuZGFyL2Jvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyL0Jvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyUmVuZGVySXRlbS50c3giXSwibmFtZXMiOlsiQm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXJSZW5kZXJJdGVtRmFjdG9yeSIsIm9uUmFuZ2VDaGFuZ2UiLCJCb29raW5nQ2FsZW5kYXJMYW5lc0hlYWRlclJlbmRlckl0ZW0iLCJwcm9wcyIsIml0ZW0iLCJjbGFzc05hbWUiLCJzdGFydElzQ3V0IiwiZW5kSXNDdXQiLCJyZWFsRnJvbSIsInJlYWxUaWxsIiwib25DbGljayIsIlJlYWN0IiwiZnJvbSIsInRpbGwiLCJjbGFzc05hbWVzIiwiYm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbURlZmF1bHRDbGFzc2VzIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUdPLElBQU1BLDJDQUEyQyxHQUFHLFNBQTlDQSwyQ0FBOEMsQ0FDekRDLGFBRHlEO0FBQUEsdUJBR3pELFNBQVNDLG9DQUFULENBQ0VDLEtBREYsRUFFRTtBQUNBLFFBQVFDLElBQVIsR0FBc0VELEtBQXRFLENBQVFDLElBQVI7QUFBQSxRQUFjQyxTQUFkLEdBQXNFRixLQUF0RSxDQUFjRSxTQUFkO0FBQUEsUUFBeUJDLFVBQXpCLEdBQXNFSCxLQUF0RSxDQUF5QkcsVUFBekI7QUFBQSxRQUFxQ0MsUUFBckMsR0FBc0VKLEtBQXRFLENBQXFDSSxRQUFyQztBQUFBLFFBQStDQyxRQUEvQyxHQUFzRUwsS0FBdEUsQ0FBK0NLLFFBQS9DO0FBQUEsUUFBeURDLFFBQXpELEdBQXNFTixLQUF0RSxDQUF5RE0sUUFBekQ7QUFDQSxRQUFNQyxPQUFPLEdBQUdDLGlEQUFBLENBQ2Q7QUFBQSxhQUFNVixhQUFhLENBQUM7QUFBRVcsWUFBSSxFQUFFUixJQUFJLENBQUNRLElBQWI7QUFBbUJDLFlBQUksRUFBRVQsSUFBSSxDQUFDUztBQUE5QixPQUFELENBQW5CO0FBQUEsS0FEYyxFQUVkLENBQUNULElBQUQsQ0FGYyxDQUFoQjtBQUlBLFdBQU9BLElBQUksZ0JBQ1Q7QUFDRSxlQUFTLEVBQUVVLGlEQUFVLENBQ25CQywwR0FBdUMsQ0FBQ1YsU0FEckIsRUFFbkJBLFNBRm1CO0FBRHZCLG9CQU1FLG9EQUFDLHFEQUFEO0FBQ0UsZUFBUyxFQUFDLGtEQURaO0FBRUUsY0FBUSxFQUFFLElBRlo7QUFHRSxhQUFPLEVBQUVLO0FBSFgsT0FLR0osVUFBVSxJQUFJQyxRQUFkLGdCQUNDLDBHQUNHSCxJQUFJLENBQUNRLElBQUwsQ0FBVUksTUFBVixDQUFpQixTQUFqQixDQURILGVBRUUsK0RBRkYsZUFHRTtBQUFNLGVBQVMsRUFBQztBQUFoQixvQkFDRSxrRUFBT1IsUUFBUSxDQUFDUSxNQUFULENBQWdCLFVBQWhCLENBQVAsQ0FERixlQUVFLGtFQUFPUCxRQUFRLENBQUNPLE1BQVQsQ0FBZ0IsVUFBaEIsQ0FBUCxDQUZGLENBSEYsQ0FERCxnQkFVQywwR0FDR1osSUFBSSxDQUFDUSxJQUFMLENBQVVJLE1BQVYsQ0FBaUIsS0FBakIsQ0FESCxlQUVFLCtEQUZGLGVBR0U7QUFBTSxlQUFTLEVBQUM7QUFBaEIsT0FDR1osSUFBSSxDQUFDUSxJQUFMLENBQVVJLE1BQVYsQ0FBaUIsSUFBakIsQ0FESCxDQUhGLENBZkosQ0FORixDQURTLEdBZ0NQLElBaENKO0FBaUNELEdBNUN3RDtBQUFBLENBQXBEOzs7Ozs7Ozs7OzBCQUFNaEIsMkMiLCJmaWxlIjoiYmRiYjdiMC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtUHJvcHMgfSBmcm9tICcuLi9ib29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtJztcclxuaW1wb3J0IHsgYm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbURlZmF1bHRDbGFzc2VzIH0gZnJvbSAnLi4vYm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbS9jbGFzc2VzJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFySXRlbVQgfSBmcm9tICcuLi9jb21tb24nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b24vQnV0dG9uJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyRGF0ZVJhbmdlIH0gZnJvbSAnLi4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyUmVuZGVySXRlbUZhY3RvcnkgPSAoXHJcbiAgb25SYW5nZUNoYW5nZTogKHJhbmdlOiBCb29raW5nQ2FsZW5kYXJEYXRlUmFuZ2UpID0+IHZvaWRcclxuKSA9PlxyXG4gIGZ1bmN0aW9uIEJvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyUmVuZGVySXRlbTxUIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVQ+KFxyXG4gICAgcHJvcHM6IEJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW1Qcm9wczxUPlxyXG4gICkge1xyXG4gICAgY29uc3QgeyBpdGVtLCBjbGFzc05hbWUsIHN0YXJ0SXNDdXQsIGVuZElzQ3V0LCByZWFsRnJvbSwgcmVhbFRpbGwgfSA9IHByb3BzO1xyXG4gICAgY29uc3Qgb25DbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgICAoKSA9PiBvblJhbmdlQ2hhbmdlKHsgZnJvbTogaXRlbS5mcm9tLCB0aWxsOiBpdGVtLnRpbGwgfSksXHJcbiAgICAgIFtpdGVtXVxyXG4gICAgKTtcclxuICAgIHJldHVybiBpdGVtID8gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgYm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbURlZmF1bHRDbGFzc2VzLmNsYXNzTmFtZSxcclxuICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib29raW5nQ2FsZW5kYXJfX2xhbmVzSGVhZGVyX19yZW5kZXJJdGVtX19idXR0b25cIlxyXG4gICAgICAgICAgbm9TaGFkb3c9e3RydWV9XHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtzdGFydElzQ3V0IHx8IGVuZElzQ3V0ID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtpdGVtLmZyb20uZm9ybWF0KCdkZGQsIERvJyl9XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm9va2luZ0NhbGVuZGFyX19sYW5lc0hlYWRlcl9fcmVuZGVySXRlbV9fYnV0dG9uX19tdXRlZFRleHQgYm9va2luZ0NhbGVuZGFyX19sYW5lc0hlYWRlcl9fcmVuZGVySXRlbV9fYnV0dG9uX19tdXRlZFRleHQtLXNwbGl0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57cmVhbEZyb20uZm9ybWF0KCdNL0QgSDptbScpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntyZWFsVGlsbC5mb3JtYXQoJ00vRCBIOm1tJyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIHtpdGVtLmZyb20uZm9ybWF0KCdkZGQnKX1cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJib29raW5nQ2FsZW5kYXJfX2xhbmVzSGVhZGVyX19yZW5kZXJJdGVtX19idXR0b25fX211dGVkVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uZnJvbS5mb3JtYXQoJ0RvJyl9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IG51bGw7XHJcbiAgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==