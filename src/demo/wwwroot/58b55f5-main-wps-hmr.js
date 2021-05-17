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

      e.preventDefault();
      e.stopPropagation();
      onClick && onClick(e, isDropdownVisible);
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
    mouseEvent: isDropdownVisible ? 'onClick' : false,
    touchEvent: isDropdownVisible ? 'onTouchEnd' : false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vRHJvcGRvd24udHN4Il0sIm5hbWVzIjpbIkRyb3Bkb3duIiwicHJvcHMiLCJzaG91bGRIYW5kbGVDbGljayIsIldyYXBwZXJUYWciLCJub3RpZmljYXRpb25Db3VudCIsInNob3dBcnJvdyIsImlubGluZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsImhlYWRlckNsYXNzTmFtZSIsImhlYWRlciIsImlkIiwiY29sbGFwc2VQcm9wcyIsImNoaWxkcmVuIiwic3VibWVudUNsYXNzTmFtZSIsIlJlYWN0IiwiaXNEcm9wZG93blZpc2libGUiLCJzZXRJc0Ryb3Bkb3duVmlzaWJsZSIsImhpZGVOYXZpZ2F0aW9uIiwic2hvd05hdmlnYXRpb24iLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImNvbnRhaW5lckNsYXNzTmFtZSIsImNsYXNzTmFtZXMiLCJoZWFkZXJDbGFzc05hbWVBbGwiLCJ3aXRoVGhlbWVDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBeUJBLElBQU1BLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLENBQUFDLEtBQUssRUFBSTtBQUFBLDhCQWdCN0NBLEtBaEI2QyxDQUUvQ0MsaUJBRitDO0FBQUEsTUFFL0NBLGlCQUYrQyxzQ0FFM0IsSUFGMkI7QUFBQSwwQkFnQjdDRCxLQWhCNkMsQ0FHL0NFLFVBSCtDO0FBQUEsTUFHL0NBLFVBSCtDLGtDQUdsQyxLQUhrQztBQUFBLDhCQWdCN0NGLEtBaEI2QyxDQUkvQ0csaUJBSitDO0FBQUEsTUFJL0NBLGlCQUorQyxzQ0FJM0IsQ0FKMkI7QUFBQSx5QkFnQjdDSCxLQWhCNkMsQ0FLL0NJLFNBTCtDO0FBQUEsTUFLL0NBLFNBTCtDLGlDQUtuQyxJ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O0FBSGpELEtBS0U7QUFDRSxhQUFTLEVBQUVTLGlEQUFVLENBQ25CLDBCQURtQixFQUVuQlgsZ0JBRm1CO0FBRHZCLEtBTUdELFFBTkgsQ0FMRixDQURGLENBREYsQ0FQRixDQURGO0FBNEJELENBcEZEOztjQUFNZCxROztlQXNGUzRCLHdGQUFnQixDQUM3QjVCLFFBRDZCLEM7O0FBQWhCOzs7Ozs7Ozs7OzBCQXRGVEEsUSIsImZpbGUiOiI1OGI1NWY1LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29sbGFwc2UsIHsgQ29sbGFwc2VQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlJztcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0UHJvcHMgfSBmcm9tICcuLi90aGVtZVByb3ZpZGVyL1RoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IHdpdGhUaGVtZUNvbnRleHQgfSBmcm9tICcuLi90aGVtZVByb3ZpZGVyL3dpdGhUaGVtZUNvbnRleHQnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyJztcclxuXHJcbmV4cG9ydCB0eXBlIERyb3Bkb3duUHJvcHMgPSBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxcclxuICBUaGVtZUNvbnRleHRQcm9wcyAmIHtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgaGVhZGVyPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBzdWJtZW51Q2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgaGVhZGVyQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgbm90aWZpY2F0aW9uQ291bnQ/OiBudW1iZXI7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBXcmFwcGVyVGFnPzoga2V5b2YgSlNYLkludHJpbnNpY0VsZW1lbnRzO1xyXG4gICAgc2hvdWxkSGFuZGxlQ2xpY2s/OiBib29sZWFuO1xyXG4gICAgc2hvd0Fycm93PzogYm9vbGVhbjtcclxuICAgIG9uQ2xpY2s/OiAoZTogUmVhY3QuTW91c2VFdmVudCwgaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgaW5saW5lPzogYm9vbGVhbjtcclxuICAgIGNvbGxhcHNlUHJvcHM/OiBQYXJ0aWFsPENvbGxhcHNlUHJvcHM+O1xyXG4gIH1cclxuPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25TdGF0ZSB7XHJcbiAgaXNEcm9wZG93blZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IERyb3Bkb3duOiBSZWFjdC5GQzxEcm9wZG93blByb3BzPiA9IHByb3BzID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBzaG91bGRIYW5kbGVDbGljayA9IHRydWUsXHJcbiAgICBXcmFwcGVyVGFnID0gJ2RpdicsXHJcbiAgICBub3RpZmljYXRpb25Db3VudCA9IDAsXHJcbiAgICBzaG93QXJyb3cgPSB0cnVlLFxyXG4gICAgaW5saW5lID0gdHJ1ZSxcclxuICAgIG9uQ2xpY2ssXHJcbiAgICBkaXNhYmxlZCxcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIGhlYWRlckNsYXNzTmFtZSxcclxuICAgIGhlYWRlcixcclxuICAgIGlkLFxyXG4gICAgY29sbGFwc2VQcm9wcyxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgc3VibWVudUNsYXNzTmFtZSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtpc0Ryb3Bkb3duVmlzaWJsZSwgc2V0SXNEcm9wZG93blZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoaWRlTmF2aWdhdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzRHJvcGRvd25WaXNpYmxlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNob3dOYXZpZ2F0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0SXNEcm9wZG93blZpc2libGUodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKHNob3VsZEhhbmRsZUNsaWNrICYmICFkaXNhYmxlZCkge1xyXG4gICAgICAgIGlmICghaXNEcm9wZG93blZpc2libGUpIHtcclxuICAgICAgICAgIHNob3dOYXZpZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIG9uQ2xpY2sgJiYgb25DbGljayhlLCBpc0Ryb3Bkb3duVmlzaWJsZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbaXNEcm9wZG93blZpc2libGUsIG9uQ2xpY2tdXHJcbiAgKTtcclxuICBjb25zdCBjb250YWluZXJDbGFzc05hbWUgPSBjbGFzc05hbWVzKFxyXG4gICAgJ2d1ZXN0YmVsbF9fZHJvcGRvd24nLFxyXG4gICAgIWlzRHJvcGRvd25WaXNpYmxlXHJcbiAgICAgID8gJ2d1ZXN0YmVsbF9fZHJvcGRvd24tLWNsb3NlZCdcclxuICAgICAgOiAnZ3Vlc3RiZWxsX19kcm9wZG93bi0tb3BlbmVkJyxcclxuICAgIHsgWydndWVzdGJlbGxfX2Ryb3Bkb3duLS1kaXNhYmxlZCddOiBkaXNhYmxlZCB9LFxyXG4gICAgeyBbJ2d1ZXN0YmVsbF9fZHJvcGRvd24tLWlubGluZSddOiBpbmxpbmUgfSxcclxuICAgIGNsYXNzTmFtZVxyXG4gICk7XHJcbiAgY29uc3QgaGVhZGVyQ2xhc3NOYW1lQWxsID0gY2xhc3NOYW1lcyhbXHJcbiAgICAnZ3Vlc3RiZWxsX19kcm9wZG93bi10b2dnbGUnLFxyXG4gICAgeyBbJ2d1ZXN0YmVsbF9fZHJvcGRvd24tdG9nZ2xlX19hcnJvdy0taGlkZGVuJ106ICFzaG93QXJyb3cgfSxcclxuICAgIHsgWydndWVzdGJlbGxfX2Ryb3Bkb3duLXRvZ2dsZS0tZGlzYWJsZWQnXTogZGlzYWJsZWQgfSxcclxuICAgIGhlYWRlckNsYXNzTmFtZSxcclxuICBdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXJUYWcgaWQ9e2lkID8/IG51bGx9IGNsYXNzTmFtZT17Y29udGFpbmVyQ2xhc3NOYW1lfT5cclxuICAgICAgPGRpdiByb2xlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtoZWFkZXJDbGFzc05hbWVBbGx9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICB7aGVhZGVyfVxyXG4gICAgICAgIHtub3RpZmljYXRpb25Db3VudCA+IDAgJiYgKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3Vlc3RiZWxsX19sYWJlbC1jb3VudFwiPntub3RpZmljYXRpb25Db3VudH08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZ3Vlc3RiZWxsX19kcm9wZG93bi1tZW51X19jb250YWluZXInfT5cclxuICAgICAgICA8Q29sbGFwc2Ugey4uLmNvbGxhcHNlUHJvcHN9IGluPXtpc0Ryb3Bkb3duVmlzaWJsZX0+XHJcbiAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXJcclxuICAgICAgICAgICAgb25DbGlja0F3YXk9e2hpZGVOYXZpZ2F0aW9ufVxyXG4gICAgICAgICAgICBtb3VzZUV2ZW50PXtpc0Ryb3Bkb3duVmlzaWJsZSA/ICdvbkNsaWNrJyA6IGZhbHNlfVxyXG4gICAgICAgICAgICB0b3VjaEV2ZW50PXtpc0Ryb3Bkb3duVmlzaWJsZSA/ICdvblRvdWNoRW5kJyA6IGZhbHNlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgICAnZ3Vlc3RiZWxsX19kcm9wZG93bi1tZW51JyxcclxuICAgICAgICAgICAgICAgIHN1Ym1lbnVDbGFzc05hbWVcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvV3JhcHBlclRhZz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lQ29udGV4dDxEcm9wZG93blByb3BzLCBSZWFjdC5GQzxEcm9wZG93blByb3BzPj4oXHJcbiAgRHJvcGRvd25cclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==