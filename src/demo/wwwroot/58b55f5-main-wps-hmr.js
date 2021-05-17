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




var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

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
    document.removeEventListener('click', hideNavigation);
  }, []);
  var showNavigation = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function () {
    setIsDropdownVisible(true);
    document.addEventListener('click', hideNavigation);
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
  var containerClassName = classNames('guestbell__dropdown', !isDropdownVisible ? 'guestbell__dropdown--closed' : 'guestbell__dropdown--opened', _defineProperty({}, 'guestbell__dropdown--disabled', disabled), _defineProperty({}, 'guestbell__dropdown--inline', inline), className);
  var headerClassNameAll = classNames(['guestbell__dropdown-toggle', _defineProperty({}, 'guestbell__dropdown-toggle__arrow--hidden', !showArrow), _defineProperty({}, 'guestbell__dropdown-toggle--disabled', disabled), headerClassName]);
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
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: classNames('guestbell__dropdown-menu', submenuClassName)
  }, children))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vRHJvcGRvd24udHN4Il0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJyZXF1aXJlIiwiRHJvcGRvd24iLCJwcm9wcyIsInNob3VsZEhhbmRsZUNsaWNrIiwiV3JhcHBlclRhZyIsIm5vdGlmaWNhdGlvbkNvdW50Iiwic2hvd0Fycm93IiwiaW5saW5lIiwib25DbGljayIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwiaGVhZGVyQ2xhc3NOYW1lIiwiaGVhZGVyIiwiaWQiLCJjb2xsYXBzZVByb3BzIiwiY2hpbGRyZW4iLCJzdWJtZW51Q2xhc3NOYW1lIiwiUmVhY3QiLCJpc0Ryb3Bkb3duVmlzaWJsZSIsInNldElzRHJvcGRvd25WaXNpYmxlIiwiaGlkZU5hdmlnYXRpb24iLCJkb2N1bWVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaG93TmF2aWdhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsImUiLCJjb250YWluZXJDbGFzc05hbWUiLCJoZWFkZXJDbGFzc05hbWVBbGwiLCJ3aXRoVGhlbWVDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsc0RBQUQsQ0FBeEI7O0FBeUJBLElBQU1DLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLENBQUFDLEtBQUssRUFBSTtBQUFBLDhCQWdCN0NBLEtBaEI2QyxDQUUvQ0MsaUJBRitDO0FBQUEsTUFFL0NBLGlCQUYrQyxzQ0FFM0IsSUFGMkI7QUFBQSwwQkFnQjdDRCxLQWhCNkMsQ0FHL0NFLFVBSCtDO0FBQUEsTUFHL0NBLFVBSCtDLGtDQUdsQyxLQUhrQztBQUFBLDhCQWdCN0NGLEtBaEI2QyxDQUkvQ0csaUJBSitDO0FBQUEsTUFJL0NBLGlCQUorQyxzQ0FJM0IsQ0FKMkI7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QixNQUFFLEVBQUVJO0FBQWpDLE1BQ0U7QUFDRSxhQUFTLEVBQUVuQixVQUFVLENBQUMsMEJBQUQsRUFBNkJpQixnQkFBN0I7QUFEdkIsS0FHR0QsUUFISCxDQURGLENBREYsQ0FQRixDQURGO0FBbUJELENBN0VEOztjQUFNZCxROztlQStFUzRCLHdGQUFnQixDQUM3QjVCLFFBRDZCLEM7O0FBQWhCOzs7Ozs7Ozs7OzBCQS9FVEEsUSIsImZpbGUiOiI1OGI1NWY1LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29sbGFwc2UsIHsgQ29sbGFwc2VQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlJztcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0UHJvcHMgfSBmcm9tICcuLi90aGVtZVByb3ZpZGVyL1RoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IHdpdGhUaGVtZUNvbnRleHQgfSBmcm9tICcuLi90aGVtZVByb3ZpZGVyL3dpdGhUaGVtZUNvbnRleHQnO1xyXG52YXIgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcclxuXHJcbmV4cG9ydCB0eXBlIERyb3Bkb3duUHJvcHMgPSBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxcclxuICBUaGVtZUNvbnRleHRQcm9wcyAmIHtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgaGVhZGVyPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBzdWJtZW51Q2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgaGVhZGVyQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgbm90aWZpY2F0aW9uQ291bnQ/OiBudW1iZXI7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBXcmFwcGVyVGFnPzoga2V5b2YgSlNYLkludHJpbnNpY0VsZW1lbnRzO1xyXG4gICAgc2hvdWxkSGFuZGxlQ2xpY2s/OiBib29sZWFuO1xyXG4gICAgc2hvd0Fycm93PzogYm9vbGVhbjtcclxuICAgIG9uQ2xpY2s/OiAoZTogUmVhY3QuTW91c2VFdmVudCwgaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgaW5saW5lPzogYm9vbGVhbjtcclxuICAgIGNvbGxhcHNlUHJvcHM/OiBQYXJ0aWFsPENvbGxhcHNlUHJvcHM+O1xyXG4gIH1cclxuPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25TdGF0ZSB7XHJcbiAgaXNEcm9wZG93blZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IERyb3Bkb3duOiBSZWFjdC5GQzxEcm9wZG93blByb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBzaG91bGRIYW5kbGVDbGljayA9IHRydWUsXHJcbiAgICBXcmFwcGVyVGFnID0gJ2RpdicsXHJcbiAgICBub3RpZmljYXRpb25Db3VudCA9IDAsXHJcbiAgICBzaG93QXJyb3cgPSB0cnVlLFxyXG4gICAgaW5saW5lID0gdHJ1ZSxcclxuICAgIG9uQ2xpY2ssXHJcbiAgICBkaXNhYmxlZCxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIGhlYWRlckNsYXNzTmFtZSxcclxuICAgIGhlYWRlcixcclxuICAgIGlkLFxyXG4gICAgY29sbGFwc2VQcm9wcyxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgc3VibWVudUNsYXNzTmFtZSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtpc0Ryb3Bkb3duVmlzaWJsZSwgc2V0SXNEcm9wZG93blZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoaWRlTmF2aWdhdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzRHJvcGRvd25WaXNpYmxlKGZhbHNlKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU5hdmlnYXRpb24pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2hvd05hdmlnYXRpb24gPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc0Ryb3Bkb3duVmlzaWJsZSh0cnVlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU5hdmlnYXRpb24pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChzaG91bGRIYW5kbGVDbGljayAmJiAhZGlzYWJsZWQpIHtcclxuICAgICAgICBvbkNsaWNrICYmIG9uQ2xpY2soZSwgaXNEcm9wZG93blZpc2libGUpO1xyXG4gICAgICAgIGlmICghaXNEcm9wZG93blZpc2libGUpIHtcclxuICAgICAgICAgIHNob3dOYXZpZ2F0aW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGhpZGVOYXZpZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2lzRHJvcGRvd25WaXNpYmxlLCBvbkNsaWNrXVxyXG4gICk7XHJcbiAgY29uc3QgY29udGFpbmVyQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhcclxuICAgICdndWVzdGJlbGxfX2Ryb3Bkb3duJyxcclxuICAgICFpc0Ryb3Bkb3duVmlzaWJsZVxyXG4gICAgICA/ICdndWVzdGJlbGxfX2Ryb3Bkb3duLS1jbG9zZWQnXHJcbiAgICAgIDogJ2d1ZXN0YmVsbF9fZHJvcGRvd24tLW9wZW5lZCcsXHJcbiAgICB7IFsnZ3Vlc3RiZWxsX19kcm9wZG93bi0tZGlzYWJsZWQnXTogZGlzYWJsZWQgfSxcclxuICAgIHsgWydndWVzdGJlbGxfX2Ryb3Bkb3duLS1pbmxpbmUnXTogaW5saW5lIH0sXHJcbiAgICBjbGFzc05hbWVcclxuICApO1xyXG4gIGNvbnN0IGhlYWRlckNsYXNzTmFtZUFsbCA9IGNsYXNzTmFtZXMoW1xyXG4gICAgJ2d1ZXN0YmVsbF9fZHJvcGRvd24tdG9nZ2xlJyxcclxuICAgIHsgWydndWVzdGJlbGxfX2Ryb3Bkb3duLXRvZ2dsZV9fYXJyb3ctLWhpZGRlbiddOiAhc2hvd0Fycm93IH0sXHJcbiAgICB7IFsnZ3Vlc3RiZWxsX19kcm9wZG93bi10b2dnbGUtLWRpc2FibGVkJ106IGRpc2FibGVkIH0sXHJcbiAgICBoZWFkZXJDbGFzc05hbWUsXHJcbiAgXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXcmFwcGVyVGFnIGlkPXtpZCA/PyBudWxsfSBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzTmFtZX0+XHJcbiAgICAgIDxkaXYgcm9sZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17aGVhZGVyQ2xhc3NOYW1lQWxsfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAge2hlYWRlcn1cclxuICAgICAgICB7bm90aWZpY2F0aW9uQ291bnQgPiAwICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd1ZXN0YmVsbF9fbGFiZWwtY291bnRcIj57bm90aWZpY2F0aW9uQ291bnR9PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17J2d1ZXN0YmVsbF9fZHJvcGRvd24tbWVudV9fY29udGFpbmVyJ30+XHJcbiAgICAgICAgPENvbGxhcHNlIHsuLi5jb2xsYXBzZVByb3BzfSBpbj17aXNEcm9wZG93blZpc2libGV9PlxyXG4gICAgICAgICAgPHVsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZ3Vlc3RiZWxsX19kcm9wZG93bi1tZW51Jywgc3VibWVudUNsYXNzTmFtZSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1dyYXBwZXJUYWc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZUNvbnRleHQ8RHJvcGRvd25Qcm9wcywgUmVhY3QuRkM8RHJvcGRvd25Qcm9wcz4+KFxyXG4gIERyb3Bkb3duXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=