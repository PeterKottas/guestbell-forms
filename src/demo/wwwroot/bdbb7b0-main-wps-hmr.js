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
        className = props.className;
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
    }, item.from.format('ddd'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
      className: "bookingCalendar__lanesHeader__renderItem__button__mutedText"
    }, item.from.format('Do')))) : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvYm9va2luZ0NhbGVuZGFyL2Jvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyL0Jvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyUmVuZGVySXRlbS50c3giXSwibmFtZXMiOlsiQm9va2luZ0NhbGVuZGFyTGFuZXNIZWFkZXJSZW5kZXJJdGVtRmFjdG9yeSIsIm9uUmFuZ2VDaGFuZ2UiLCJCb29raW5nQ2FsZW5kYXJMYW5lc0hlYWRlclJlbmRlckl0ZW0iLCJwcm9wcyIsIml0ZW0iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiUmVhY3QiLCJmcm9tIiwidGlsbCIsImNsYXNzTmFtZXMiLCJib29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtRGVmYXVsdENsYXNzZXMiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBR08sSUFBTUEsMkNBQTJDLEdBQUcsU0FBOUNBLDJDQUE4QyxDQUN6REMsYUFEeUQ7QUFBQSx1QkFHekQsU0FBU0Msb0NBQVQsQ0FDRUMsS0FERixFQUVFO0FBQ0EsUUFBUUMsSUFBUixHQUE0QkQsS0FBNUIsQ0FBUUMsSUFBUjtBQUFBLFFBQWNDLFNBQWQsR0FBNEJGLEtBQTVCLENBQWNFLFNBQWQ7QUFDQSxRQUFNQyxPQUFPLEdBQUdDLGlEQUFBLENBQ2Q7QUFBQSxhQUFNTixhQUFhLENBQUM7QUFBRU8sWUFBSSxFQUFFSixJQUFJLENBQUNJLElBQWI7QUFBbUJDLFlBQUksRUFBRUwsSUFBSSxDQUFDSztBQUE5QixPQUFELENBQW5CO0FBQUEsS0FEYyxFQUVkLENBQUNMLElBQUQsQ0FGYyxDQUFoQjtBQUlBLFdBQU9BLElBQUksZ0JBQ1Q7QUFDRSxlQUFTLEVBQUVNLGlEQUFVLENBQ25CQywwR0FBdUMsQ0FBQ04sU0FEckIsRUFFbkJBLFNBRm1CO0FBRHZCLG9CQU1FLG9EQUFDLHFEQUFEO0FBQ0UsZUFBUyxFQUFDLGtEQURaO0FBRUUsY0FBUSxFQUFFLElBRlo7QUFHRSxhQUFPLEVBQUVDO0FBSFgsT0FLR0YsSUFBSSxDQUFDSSxJQUFMLENBQVVJLE1BQVYsQ0FBaUIsS0FBakIsQ0FMSCxlQU1FLCtEQU5GLGVBT0U7QUFBTSxlQUFTLEVBQUM7QUFBaEIsT0FDR1IsSUFBSSxDQUFDSSxJQUFMLENBQVVJLE1BQVYsQ0FBaUIsSUFBakIsQ0FESCxDQVBGLENBTkYsQ0FEUyxHQW1CUCxJQW5CSjtBQW9CRCxHQS9Cd0Q7QUFBQSxDQUFwRDs7Ozs7Ozs7OzswQkFBTVosMkMiLCJmaWxlIjoiYmRiYjdiMC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtUHJvcHMgfSBmcm9tICcuLi9ib29raW5nQ2FsZW5kYXJSZW5kZXJJdGVtJztcclxuaW1wb3J0IHsgYm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbURlZmF1bHRDbGFzc2VzIH0gZnJvbSAnLi4vYm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbS9jbGFzc2VzJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFySXRlbVQgfSBmcm9tICcuLi9jb21tb24nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b24vQnV0dG9uJztcclxuaW1wb3J0IHsgQm9va2luZ0NhbGVuZGFyRGF0ZVJhbmdlIH0gZnJvbSAnLi4nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyUmVuZGVySXRlbUZhY3RvcnkgPSAoXHJcbiAgb25SYW5nZUNoYW5nZTogKHJhbmdlOiBCb29raW5nQ2FsZW5kYXJEYXRlUmFuZ2UpID0+IHZvaWRcclxuKSA9PlxyXG4gIGZ1bmN0aW9uIEJvb2tpbmdDYWxlbmRhckxhbmVzSGVhZGVyUmVuZGVySXRlbTxUIGV4dGVuZHMgQm9va2luZ0NhbGVuZGFySXRlbVQ+KFxyXG4gICAgcHJvcHM6IEJvb2tpbmdDYWxlbmRhclJlbmRlckl0ZW1Qcm9wczxUPlxyXG4gICkge1xyXG4gICAgY29uc3QgeyBpdGVtLCBjbGFzc05hbWUgfSA9IHByb3BzO1xyXG4gICAgY29uc3Qgb25DbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgICAoKSA9PiBvblJhbmdlQ2hhbmdlKHsgZnJvbTogaXRlbS5mcm9tLCB0aWxsOiBpdGVtLnRpbGwgfSksXHJcbiAgICAgIFtpdGVtXVxyXG4gICAgKTtcclxuICAgIHJldHVybiBpdGVtID8gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgYm9va2luZ0NhbGVuZGFyUmVuZGVySXRlbURlZmF1bHRDbGFzc2VzLmNsYXNzTmFtZSxcclxuICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJib29raW5nQ2FsZW5kYXJfX2xhbmVzSGVhZGVyX19yZW5kZXJJdGVtX19idXR0b25cIlxyXG4gICAgICAgICAgbm9TaGFkb3c9e3RydWV9XHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpdGVtLmZyb20uZm9ybWF0KCdkZGQnKX1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm9va2luZ0NhbGVuZGFyX19sYW5lc0hlYWRlcl9fcmVuZGVySXRlbV9fYnV0dG9uX19tdXRlZFRleHRcIj5cclxuICAgICAgICAgICAge2l0ZW0uZnJvbS5mb3JtYXQoJ0RvJyl9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IG51bGw7XHJcbiAgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==