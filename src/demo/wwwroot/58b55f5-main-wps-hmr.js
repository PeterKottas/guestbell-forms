webpackHotUpdate("main",{

/***/ "./src/lib/components/dropdown/Dropdown.tsx":
/*!**************************************************!*\
  !*** ./src/lib/components/dropdown/Dropdown.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themeProvider/withThemeContext */ "./src/lib/components/themeProvider/withThemeContext.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Libs






var Dropdown = function Dropdown(props) {
  var _props$shouldHandleCl = props.shouldHandleClick,
      shouldHandleClick = _props$shouldHandleCl === void 0 ? true : _props$shouldHandleCl,
      _props$WrapperTag = props.WrapperTag,
      WrapperTag = _props$WrapperTag === void 0 ? 'div' : _props$WrapperTag,
      _props$notificationCo = props.notificationCount,
      notificationCount = _props$notificationCo === void 0 ? 0 : _props$notificationCo,
      _props$showArrow = props.showArrow,
      showArrow = _props$showArrow === void 0 ? true : _props$showArrow,
      _props$inline = props.inline,
      inline = _props$inline === void 0 ? true : _props$inline,
      onClick = props.onClick,
      disabled = props.disabled,
      className = props.className,
      headerClassName = props.headerClassName,
      header = props.header,
      id = props.id,
      collapseProps = props.collapseProps,
      children = props.children,
      submenuClassName = props.submenuClassName;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isDropdownVisible = _React$useState2[0],
      setIsDropdownVisible = _React$useState2[1];

  var hideNavigation = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function () {
    setIsDropdownVisible(false);
  }, []);
  var showNavigation = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function () {
    setIsDropdownVisible(true);
  }, []);
  var handleClick = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (e) {
    if (shouldHandleClick && !disabled) {
      onClick && onClick(e, isDropdownVisible);

      if (!isDropdownVisible) {
        showNavigation();
      } else {
        hideNavigation();
      }
    }
  }, [isDropdownVisible, onClick]);
  var containerClassName = classnames__WEBPACK_IMPORTED_MODULE_3__('guestbell__dropdown', !isDropdownVisible ? 'guestbell__dropdown--closed' : 'guestbell__dropdown--opened', _defineProperty({}, 'guestbell__dropdown--disabled', disabled), _defineProperty({}, 'guestbell__dropdown--inline', inline), className);
  var headerClassNameAll = classnames__WEBPACK_IMPORTED_MODULE_3__(['guestbell__dropdown-toggle', _defineProperty({}, 'guestbell__dropdown-toggle__arrow--hidden', !showArrow), _defineProperty({}, 'guestbell__dropdown-toggle--disabled', disabled), headerClassName]);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrapperTag, {
    id: id !== null && id !== void 0 ? id : null,
    className: containerClassName
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    role: "button",
    className: headerClassNameAll,
    onClick: handleClick
  }, header, notificationCount > 0 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "guestbell__label-count"
  }, notificationCount)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: 'guestbell__dropdown-menu__container'
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, collapseProps, {
    in: isDropdownVisible
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClickAway: hideNavigation,
    mouseEvent: isDropdownVisible ? 'onClick' : false,
    touchEvent: isDropdownVisible ? 'onTouchEnd' : false
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3__('guestbell__dropdown-menu', submenuClassName)
  }, children)))));
};

__signature__(Dropdown, "useState{[isDropdownVisible, setIsDropdownVisible](false)}\nuseCallback{hideNavigation}\nuseCallback{showNavigation}\nuseCallback{handleClick}");

var _default = Object(_themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_2__["withThemeContext"])(Dropdown);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Dropdown, "Dropdown", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\dropdown\\Dropdown.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\dropdown\\Dropdown.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vRHJvcGRvd24udHN4Il0sIm5hbWVzIjpbIkRyb3Bkb3duIiwicHJvcHMiLCJzaG91bGRIYW5kbGVDbGljayIsIldyYXBwZXJUYWciLCJub3RpZmljYXRpb25Db3VudCIsInNob3dBcnJvdyIsImlubGluZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsImhlYWRlckNsYXNzTmFtZSIsImhlYWRlciIsImlkIiwiY29sbGFwc2VQcm9wcyIsImNoaWxkcmVuIiwic3VibWVudUNsYXNzTmFtZSIsIlJlYWN0IiwiaXNEcm9wZG93blZpc2libGUiLCJzZXRJc0Ryb3Bkb3duVmlzaWJsZSIsImhpZGVOYXZpZ2F0aW9uIiwic2hvd05hdmlnYXRpb24iLCJoYW5kbGVDbGljayIsImUiLCJjb250YWluZXJDbGFzc05hbWUiLCJjbGFzc05hbWVzIiwiaGVhZGVyQ2xhc3NOYW1lQWxsIiwid2l0aFRoZW1lQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQXlCQSxJQUFNQSxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxDQUFBQyxLQUFLLEVBQUk7QUFBQSw4QkFnQjdDQSxLQWhCNkMsQ0FFL0NDLGlCQUYrQztBQUFBLE1BRS9DQSxpQkFGK0Msc0NBRTNCLElBRjJCO0FBQUEsMEJBZ0I3Q0QsS0FoQjZDLENBRy9DRSxVQUgrQztBQUFBLE1BRy9DQSxVQUgrQyxrQ0FHbEMsS0FIa0M7QUFBQSw4QkFnQjdDRixLQWhCNkMsQ0FJL0NHLGlCQUorQztBQUFBLE1BSS9DQSxpQkFKK0Msc0NBSTNCLENBSjJCO0FBQUEseUJBZ0I3Q0gsS0FoQjZDLENBSy9DSSxTQUwrQztBQUFBLE1BSy9DQSxTQUwrQyxpQ0FLbkMsSUFMbUM7QUFBQSxzQkFnQjdDSixLQWhCNkMsQ0FNL0NLLE1B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LGdCQUZtQjtBQUR2QixLQU1HRCxRQU5ILENBTEYsQ0FERixDQURGLENBUEYsQ0FERjtBQTRCRCxDQXBGRDs7Y0FBTWQsUTs7ZUFzRlMwQix3RkFBZ0IsQ0FDN0IxQixRQUQ2QixDOztBQUFoQjs7Ozs7Ozs7OzswQkF0RlRBLFEiLCJmaWxlIjoiNThiNTVmNS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWJzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbGxhcHNlLCB7IENvbGxhcHNlUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZSc7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dFByb3BzIH0gZnJvbSAnLi4vdGhlbWVQcm92aWRlci9UaGVtZUNvbnRleHQnO1xyXG5pbXBvcnQgeyB3aXRoVGhlbWVDb250ZXh0IH0gZnJvbSAnLi4vdGhlbWVQcm92aWRlci93aXRoVGhlbWVDb250ZXh0JztcclxuaW1wb3J0ICogYXMgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyJztcclxuXHJcbmV4cG9ydCB0eXBlIERyb3Bkb3duUHJvcHMgPSBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxcclxuICBUaGVtZUNvbnRleHRQcm9wcyAmIHtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgaGVhZGVyPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBzdWJtZW51Q2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgaGVhZGVyQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgbm90aWZpY2F0aW9uQ291bnQ/OiBudW1iZXI7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBXcmFwcGVyVGFnPzoga2V5b2YgSlNYLkludHJpbnNpY0VsZW1lbnRzO1xyXG4gICAgc2hvdWxkSGFuZGxlQ2xpY2s/OiBib29sZWFuO1xyXG4gICAgc2hvd0Fycm93PzogYm9vbGVhbjtcclxuICAgIG9uQ2xpY2s/OiAoZTogUmVhY3QuTW91c2VFdmVudCwgaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgaW5saW5lPzogYm9vbGVhbjtcclxuICAgIGNvbGxhcHNlUHJvcHM/OiBQYXJ0aWFsPENvbGxhcHNlUHJvcHM+O1xyXG4gIH1cclxuPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25TdGF0ZSB7XHJcbiAgaXNEcm9wZG93blZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IERyb3Bkb3duOiBSZWFjdC5GQzxEcm9wZG93blByb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBzaG91bGRIYW5kbGVDbGljayA9IHRydWUsXHJcbiAgICBXcmFwcGVyVGFnID0gJ2RpdicsXHJcbiAgICBub3RpZmljYXRpb25Db3VudCA9IDAsXHJcbiAgICBzaG93QXJyb3cgPSB0cnVlLFxyXG4gICAgaW5saW5lID0gdHJ1ZSxcclxuICAgIG9uQ2xpY2ssXHJcbiAgICBkaXNhYmxlZCxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIGhlYWRlckNsYXNzTmFtZSxcclxuICAgIGhlYWRlcixcclxuICAgIGlkLFxyXG4gICAgY29sbGFwc2VQcm9wcyxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgc3VibWVudUNsYXNzTmFtZSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtpc0Ryb3Bkb3duVmlzaWJsZSwgc2V0SXNEcm9wZG93blZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoaWRlTmF2aWdhdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzRHJvcGRvd25WaXNpYmxlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNob3dOYXZpZ2F0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0SXNEcm9wZG93blZpc2libGUodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKHNob3VsZEhhbmRsZUNsaWNrICYmICFkaXNhYmxlZCkge1xyXG4gICAgICAgIG9uQ2xpY2sgJiYgb25DbGljayhlLCBpc0Ryb3Bkb3duVmlzaWJsZSk7XHJcbiAgICAgICAgaWYgKCFpc0Ryb3Bkb3duVmlzaWJsZSkge1xyXG4gICAgICAgICAgc2hvd05hdmlnYXRpb24oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaGlkZU5hdmlnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbaXNEcm9wZG93blZpc2libGUsIG9uQ2xpY2tdXHJcbiAgKTtcclxuICBjb25zdCBjb250YWluZXJDbGFzc05hbWUgPSBjbGFzc05hbWVzKFxyXG4gICAgJ2d1ZXN0YmVsbF9fZHJvcGRvd24nLFxyXG4gICAgIWlzRHJvcGRvd25WaXNpYmxlXHJcbiAgICAgID8gJ2d1ZXN0YmVsbF9fZHJvcGRvd24tLWNsb3NlZCdcclxuICAgICAgOiAnZ3Vlc3RiZWxsX19kcm9wZG93bi0tb3BlbmVkJyxcclxuICAgIHsgWydndWVzdGJlbGxfX2Ryb3Bkb3duLS1kaXNhYmxlZCddOiBkaXNhYmxlZCB9LFxyXG4gICAgeyBbJ2d1ZXN0YmVsbF9fZHJvcGRvd24tLWlubGluZSddOiBpbmxpbmUgfSxcclxuICAgIGNsYXNzTmFtZVxyXG4gICk7XHJcbiAgY29uc3QgaGVhZGVyQ2xhc3NOYW1lQWxsID0gY2xhc3NOYW1lcyhbXHJcbiAgICAnZ3Vlc3RiZWxsX19kcm9wZG93bi10b2dnbGUnLFxyXG4gICAgeyBbJ2d1ZXN0YmVsbF9fZHJvcGRvd24tdG9nZ2xlX19hcnJvdy0taGlkZGVuJ106ICFzaG93QXJyb3cgfSxcclxuICAgIHsgWydndWVzdGJlbGxfX2Ryb3Bkb3duLXRvZ2dsZS0tZGlzYWJsZWQnXTogZGlzYWJsZWQgfSxcclxuICAgIGhlYWRlckNsYXNzTmFtZSxcclxuICBdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXJUYWcgaWQ9e2lkID8/IG51bGx9IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3NOYW1lfT5cclxuICAgICAgPGRpdiByb2xlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtoZWFkZXJDbGFzc05hbWVBbGx9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICB7aGVhZGVyfVxyXG4gICAgICAgIHtub3RpZmljYXRpb25Db3VudCA+IDAgJiYgKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3Vlc3RiZWxsX19sYWJlbC1jb3VudFwiPntub3RpZmljYXRpb25Db3VudH08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZ3Vlc3RiZWxsX19kcm9wZG93bi1tZW51X19jb250YWluZXInfT5cclxuICAgICAgICA8Q29sbGFwc2Ugey4uLmNvbGxhcHNlUHJvcHN9IGluPXtpc0Ryb3Bkb3duVmlzaWJsZX0+XHJcbiAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXJcclxuICAgICAgICAgICAgb25DbGlja0F3YXk9e2hpZGVOYXZpZ2F0aW9ufVxyXG4gICAgICAgICAgICBtb3VzZUV2ZW50PXtpc0Ryb3Bkb3duVmlzaWJsZSA/ICdvbkNsaWNrJyA6IGZhbHNlfVxyXG4gICAgICAgICAgICB0b3VjaEV2ZW50PXtpc0Ryb3Bkb3duVmlzaWJsZSA/ICdvblRvdWNoRW5kJyA6IGZhbHNlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAnZ3Vlc3RiZWxsX19kcm9wZG93bi1tZW51JyxcclxuICAgICAgICAgICAgICAgIHN1Ym1lbnVDbGFzc05hbWVcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvV3JhcHBlclRhZz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lQ29udGV4dDxEcm9wZG93blByb3BzLCBSZWFjdC5GQzxEcm9wZG93blByb3BzPj4oXHJcbiAgRHJvcGRvd25cclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==