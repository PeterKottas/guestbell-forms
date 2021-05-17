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
      if (!isDropdownVisible) {
        showNavigation();
      }

      onClick === null || onClick === void 0 ? void 0 : onClick(e, isDropdownVisible);
    }
  }, [isDropdownVisible, onClick]);
  var containerClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()('guestbell__dropdown', !isDropdownVisible ? 'guestbell__dropdown--closed' : 'guestbell__dropdown--opened', _defineProperty({}, 'guestbell__dropdown--disabled', disabled), _defineProperty({}, 'guestbell__dropdown--inline', inline), className);
  var headerClassNameAll = classnames__WEBPACK_IMPORTED_MODULE_3___default()(['guestbell__dropdown-toggle', _defineProperty({}, 'guestbell__dropdown-toggle__arrow--hidden', !showArrow), _defineProperty({}, 'guestbell__dropdown-toggle--disabled', disabled), headerClassName]);
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
    mouseEvent: isDropdownVisible ? 'onMouseDown' : false,
    touchEvent: isDropdownVisible ? 'onTouchStart' : false
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('guestbell__dropdown-menu', submenuClassName)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vRHJvcGRvd24udHN4Il0sIm5hbWVzIjpbIkRyb3Bkb3duIiwicHJvcHMiLCJzaG91bGRIYW5kbGVDbGljayIsIldyYXBwZXJUYWciLCJub3RpZmljYXRpb25Db3VudCIsInNob3dBcnJvdyIsImlubGluZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsImhlYWRlckNsYXNzTmFtZSIsImhlYWRlciIsImlkIiwiY29sbGFwc2VQcm9wcyIsImNoaWxkcmVuIiwic3VibWVudUNsYXNzTmFtZSIsIlJlYWN0IiwiaXNEcm9wZG93blZpc2libGUiLCJzZXRJc0Ryb3Bkb3duVmlzaWJsZSIsImhpZGVOYXZpZ2F0aW9uIiwic2hvd05hdmlnYXRpb24iLCJoYW5kbGVDbGljayIsImUiLCJjb250YWluZXJDbGFzc05hbWUiLCJjbGFzc05hbWVzIiwiaGVhZGVyQ2xhc3NOYW1lQWxsIiwid2l0aFRoZW1lQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQXlCQSxJQUFNQSxRQUFpQyxHQUFHLFNBQXBDQSxRQUFvQyxDQUFBQyxLQUFLLEVBQUk7QUFBQSw4QkFnQjdDQSxLQWhCNkMsQ0FFL0NDLGlCQUYrQztBQUFBLE1BRS9DQSxpQkFGK0Msc0NBRTNCLElBRjJCO0FBQUEsMEJBZ0I3Q0QsS0FoQjZDLENBRy9DRSxVQUgrQztBQUFBLE1BRy9DQSxVQUgrQyxrQ0FHbEMsS0FIa0M7QUFBQSw4QkFnQjdDRixLQWhCNkMsQ0FJL0NHLGlCQUorQztBQUFBLE1BSS9DQSxpQkFKK0Msc0NBSTNCLENBSjJCO0FBQUEseUJBZ0I3Q0gsS0FoQjZDLENBSy9DSSxTQUwrQztBQUFBLE1BSy9DQSxTQUwrQyxpQ0FLbkMsSUFMbUM7QUFBQSxzQkFnQjdDSixLQWhCNkMsQ0FNL0NLLE1B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QjtBQUR2QixLQU1HRCxRQU5ILENBTEYsQ0FERixDQURGLENBUEYsQ0FERjtBQTRCRCxDQWxGRDs7Y0FBTWQsUTs7ZUFvRlMwQix3RkFBZ0IsQ0FDN0IxQixRQUQ2QixDOztBQUFoQjs7Ozs7Ozs7OzswQkFwRlRBLFEiLCJmaWxlIjoiNThiNTVmNS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWJzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbGxhcHNlLCB7IENvbGxhcHNlUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZSc7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dFByb3BzIH0gZnJvbSAnLi4vdGhlbWVQcm92aWRlci9UaGVtZUNvbnRleHQnO1xyXG5pbXBvcnQgeyB3aXRoVGhlbWVDb250ZXh0IH0gZnJvbSAnLi4vdGhlbWVQcm92aWRlci93aXRoVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBDbGlja0F3YXlMaXN0ZW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lcic7XHJcblxyXG5leHBvcnQgdHlwZSBEcm9wZG93blByb3BzID0gUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48XHJcbiAgVGhlbWVDb250ZXh0UHJvcHMgJiB7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIGhlYWRlcj86IEpTWC5FbGVtZW50IHwgc3RyaW5nO1xyXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgc3VibWVudUNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIGhlYWRlckNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIG5vdGlmaWNhdGlvbkNvdW50PzogbnVtYmVyO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gICAgV3JhcHBlclRhZz86IGtleW9mIEpTWC5JbnRyaW5zaWNFbGVtZW50cztcclxuICAgIHNob3VsZEhhbmRsZUNsaWNrPzogYm9vbGVhbjtcclxuICAgIHNob3dBcnJvdz86IGJvb2xlYW47XHJcbiAgICBvbkNsaWNrPzogKGU6IFJlYWN0Lk1vdXNlRXZlbnQsIGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZDtcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIGlubGluZT86IGJvb2xlYW47XHJcbiAgICBjb2xsYXBzZVByb3BzPzogUGFydGlhbDxDb2xsYXBzZVByb3BzPjtcclxuICB9XHJcbj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duU3RhdGUge1xyXG4gIGlzRHJvcGRvd25WaXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBEcm9wZG93bjogUmVhY3QuRkM8RHJvcGRvd25Qcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgc2hvdWxkSGFuZGxlQ2xpY2sgPSB0cnVlLFxyXG4gICAgV3JhcHBlclRhZyA9ICdkaXYnLFxyXG4gICAgbm90aWZpY2F0aW9uQ291bnQgPSAwLFxyXG4gICAgc2hvd0Fycm93ID0gdHJ1ZSxcclxuICAgIGlubGluZSA9IHRydWUsXHJcbiAgICBvbkNsaWNrLFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBoZWFkZXJDbGFzc05hbWUsXHJcbiAgICBoZWFkZXIsXHJcbiAgICBpZCxcclxuICAgIGNvbGxhcHNlUHJvcHMsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIHN1Ym1lbnVDbGFzc05hbWUsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBbaXNEcm9wZG93blZpc2libGUsIHNldElzRHJvcGRvd25WaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGlkZU5hdmlnYXRpb24gPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc0Ryb3Bkb3duVmlzaWJsZShmYWxzZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzaG93TmF2aWdhdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzRHJvcGRvd25WaXNpYmxlKHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChzaG91bGRIYW5kbGVDbGljayAmJiAhZGlzYWJsZWQpIHtcclxuICAgICAgICBpZiAoIWlzRHJvcGRvd25WaXNpYmxlKSB7XHJcbiAgICAgICAgICBzaG93TmF2aWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvbkNsaWNrPy4oZSwgaXNEcm9wZG93blZpc2libGUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2lzRHJvcGRvd25WaXNpYmxlLCBvbkNsaWNrXVxyXG4gICk7XHJcbiAgY29uc3QgY29udGFpbmVyQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhcclxuICAgICdndWVzdGJlbGxfX2Ryb3Bkb3duJyxcclxuICAgICFpc0Ryb3Bkb3duVmlzaWJsZVxyXG4gICAgICA/ICdndWVzdGJlbGxfX2Ryb3Bkb3duLS1jbG9zZWQnXHJcbiAgICAgIDogJ2d1ZXN0YmVsbF9fZHJvcGRvd24tLW9wZW5lZCcsXHJcbiAgICB7IFsnZ3Vlc3RiZWxsX19kcm9wZG93bi0tZGlzYWJsZWQnXTogZGlzYWJsZWQgfSxcclxuICAgIHsgWydndWVzdGJlbGxfX2Ryb3Bkb3duLS1pbmxpbmUnXTogaW5saW5lIH0sXHJcbiAgICBjbGFzc05hbWVcclxuICApO1xyXG4gIGNvbnN0IGhlYWRlckNsYXNzTmFtZUFsbCA9IGNsYXNzTmFtZXMoW1xyXG4gICAgJ2d1ZXN0YmVsbF9fZHJvcGRvd24tdG9nZ2xlJyxcclxuICAgIHsgWydndWVzdGJlbGxfX2Ryb3Bkb3duLXRvZ2dsZV9fYXJyb3ctLWhpZGRlbiddOiAhc2hvd0Fycm93IH0sXHJcbiAgICB7IFsnZ3Vlc3RiZWxsX19kcm9wZG93bi10b2dnbGUtLWRpc2FibGVkJ106IGRpc2FibGVkIH0sXHJcbiAgICBoZWFkZXJDbGFzc05hbWUsXHJcbiAgXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyVGFnIGlkPXtpZCA/PyBudWxsfSBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzTmFtZX0+XHJcbiAgICAgIDxkaXYgcm9sZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17aGVhZGVyQ2xhc3NOYW1lQWxsfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAge2hlYWRlcn1cclxuICAgICAgICB7bm90aWZpY2F0aW9uQ291bnQgPiAwICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd1ZXN0YmVsbF9fbGFiZWwtY291bnRcIj57bm90aWZpY2F0aW9uQ291bnR9PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2d1ZXN0YmVsbF9fZHJvcGRvd24tbWVudV9fY29udGFpbmVyJ30+XHJcbiAgICAgICAgPENvbGxhcHNlIHsuLi5jb2xsYXBzZVByb3BzfSBpbj17aXNEcm9wZG93blZpc2libGV9PlxyXG4gICAgICAgICAgPENsaWNrQXdheUxpc3RlbmVyXHJcbiAgICAgICAgICAgIG9uQ2xpY2tBd2F5PXtoaWRlTmF2aWdhdGlvbn1cclxuICAgICAgICAgICAgbW91c2VFdmVudD17aXNEcm9wZG93blZpc2libGUgPyAnb25Nb3VzZURvd24nIDogZmFsc2V9XHJcbiAgICAgICAgICAgIHRvdWNoRXZlbnQ9e2lzRHJvcGRvd25WaXNpYmxlID8gJ29uVG91Y2hTdGFydCcgOiBmYWxzZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHVsXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgJ2d1ZXN0YmVsbF9fZHJvcGRvd24tbWVudScsXHJcbiAgICAgICAgICAgICAgICBzdWJtZW51Q2xhc3NOYW1lXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1dyYXBwZXJUYWc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZUNvbnRleHQ8RHJvcGRvd25Qcm9wcywgUmVhY3QuRkM8RHJvcGRvd25Qcm9wcz4+KFxyXG4gIERyb3Bkb3duXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=