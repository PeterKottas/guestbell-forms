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
/* harmony import */ var _themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../themeProvider/withThemeContext */ "./src/lib/components/themeProvider/withThemeContext.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
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
      menuProps = props.menuProps,
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
  var defaultMenuProps = {
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    }
  };
  var handleClick = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (e) {
    if (shouldHandleClick && !disabled) {
      if (!isDropdownVisible) {
        showNavigation();
      }

      onClick === null || onClick === void 0 ? void 0 : onClick(e, isDropdownVisible);
    }
  }, [isDropdownVisible, onClick]);
  var containerClassName = classnames__WEBPACK_IMPORTED_MODULE_2___default()('guestbell__dropdown', !isDropdownVisible ? 'guestbell__dropdown--closed' : 'guestbell__dropdown--opened', _defineProperty({}, 'guestbell__dropdown--disabled', disabled), _defineProperty({}, 'guestbell__dropdown--inline', inline), className);
  var headerClassNameAll = classnames__WEBPACK_IMPORTED_MODULE_2___default()(['guestbell__dropdown-toggle', _defineProperty({}, 'guestbell__dropdown-toggle__arrow--hidden', !showArrow), _defineProperty({}, 'guestbell__dropdown-toggle--disabled', disabled), headerClassName]);
  var elemRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]();
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrapperTag, {
    id: id !== null && id !== void 0 ? id : null,
    className: containerClassName
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    ref: elemRef,
    role: "button",
    className: headerClassNameAll,
    onClick: handleClick
  }, header, notificationCount > 0 && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "guestbell__label-count"
  }, notificationCount)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, defaultMenuProps, menuProps, {
    onClose: hideNavigation,
    open: isDropdownVisible,
    anchorEl: elemRef.current
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('guestbell__dropdown-menu', submenuClassName)
  }, children)));
};

__signature__(Dropdown, "useState{[isDropdownVisible, setIsDropdownVisible](false)}\nuseCallback{hideNavigation}\nuseCallback{showNavigation}\nuseCallback{handleClick}\nuseRef{elemRef}");

var _default = Object(_themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_1__["withThemeContext"])(Dropdown);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vRHJvcGRvd24udHN4Il0sIm5hbWVzIjpbIkRyb3Bkb3duIiwicHJvcHMiLCJzaG91bGRIYW5kbGVDbGljayIsIldyYXBwZXJUYWciLCJub3RpZmljYXRpb25Db3VudCIsInNob3dBcnJvdyIsImlubGluZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsImhlYWRlckNsYXNzTmFtZSIsImhlYWRlciIsImlkIiwibWVudVByb3BzIiwiY2hpbGRyZW4iLCJzdWJtZW51Q2xhc3NOYW1lIiwiUmVhY3QiLCJpc0Ryb3Bkb3duVmlzaWJsZSIsInNldElzRHJvcGRvd25WaXNpYmxlIiwiaGlkZU5hdmlnYXRpb24iLCJzaG93TmF2aWdhdGlvbiIsImRlZmF1bHRNZW51UHJvcHMiLCJnZXRDb250ZW50QW5jaG9yRWwiLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJoYW5kbGVDbGljayIsImUiLCJjb250YWluZXJDbGFzc05hbWUiLCJjbGFzc05hbWVzIiwiaGVhZGVyQ2xhc3NOYW1lQWxsIiwiZWxlbVJlZiIsImN1cnJlbnQiLCJ3aXRoVGhlbWVDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBeUJBLElBQU1BLFFBQWlDLEdBQUcsU0FBcENBLFFBQW9DLENBQUFDLEtBQUssRUFBSTtBQUFBLDhCQWdCN0NBLEtBaEI2QyxDQUUvQ0MsaUJBRitDO0FBQUEsTUFFL0NBLGlCQUYrQyxzQ0FFM0IsSUFGMkI7QUFBQSwwQkFnQjdDRCxLQWhCNkMsQ0FHL0NFLFVBSCtDO0FBQUEsTUFHL0NBLFVBSCtDLGtDQUdsQyxLQUhrQztBQUFBLDhCQWdCN0NGLEtBaEI2QyxDQUkvQ0csaUJBSitDO0FBQUEsTUFJL0NBLGlCQUorQyxz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RUo7QUFKWCxLQU1HaEIsTUFOSCxFQU9HUCxpQkFBaUIsR0FBRyxDQUFwQixJQUNDO0FBQU0sYUFBUyxFQUFDO0FBQWhCLEtBQTBDQSxpQkFBMUMsQ0FSSixDQURGLEVBYUUsb0RBQUMsOERBQUQsZUFDTWlCLGdCQUROLEVBRU1SLFNBRk47QUFHRSxXQUFPLEVBQUVNLGNBSFg7QUFJRSxRQUFJLEVBQUVGLGlCQUpSO0FBS0UsWUFBUSxFQUFFZSxPQUFPLENBQUNDO0FBTHBCLE1BT0U7QUFDRSxhQUFTLEVBQUVILGlEQUFVLENBQUMsMEJBQUQsRUFBNkJmLGdCQUE3QjtBQUR2QixLQUdHRCxRQUhILENBUEYsQ0FiRixDQURGO0FBNkJELENBaEdEOztjQUFNZCxROztlQWtHU2tDLHdGQUFnQixDQUM3QmxDLFFBRDZCLEM7O0FBQWhCOzs7Ozs7Ozs7OzBCQWxHVEEsUSIsImZpbGUiOiI1OGI1NWY1LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHRQcm9wcyB9IGZyb20gJy4uL3RoZW1lUHJvdmlkZXIvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgd2l0aFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL3RoZW1lUHJvdmlkZXIvd2l0aFRoZW1lQ29udGV4dCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgTWVudSwgeyBNZW51UHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcclxuXHJcbmV4cG9ydCB0eXBlIERyb3Bkb3duUHJvcHMgPSBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxcclxuICBUaGVtZUNvbnRleHRQcm9wcyAmIHtcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgaGVhZGVyPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBzdWJtZW51Q2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgaGVhZGVyQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgbm90aWZpY2F0aW9uQ291bnQ/OiBudW1iZXI7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBXcmFwcGVyVGFnPzoga2V5b2YgSlNYLkludHJpbnNpY0VsZW1lbnRzO1xyXG4gICAgc2hvdWxkSGFuZGxlQ2xpY2s/OiBib29sZWFuO1xyXG4gICAgc2hvd0Fycm93PzogYm9vbGVhbjtcclxuICAgIG9uQ2xpY2s/OiAoZTogUmVhY3QuTW91c2VFdmVudCwgaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgaW5saW5lPzogYm9vbGVhbjtcclxuICAgIG1lbnVQcm9wcz86IFBhcnRpYWw8TWVudVByb3BzPjtcclxuICB9XHJcbj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duU3RhdGUge1xyXG4gIGlzRHJvcGRvd25WaXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBEcm9wZG93bjogUmVhY3QuRkM8RHJvcGRvd25Qcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgc2hvdWxkSGFuZGxlQ2xpY2sgPSB0cnVlLFxyXG4gICAgV3JhcHBlclRhZyA9ICdkaXYnLFxyXG4gICAgbm90aWZpY2F0aW9uQ291bnQgPSAwLFxyXG4gICAgc2hvd0Fycm93ID0gdHJ1ZSxcclxuICAgIGlubGluZSA9IHRydWUsXHJcbiAgICBvbkNsaWNrLFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBoZWFkZXJDbGFzc05hbWUsXHJcbiAgICBoZWFkZXIsXHJcbiAgICBpZCxcclxuICAgIG1lbnVQcm9wcyxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgc3VibWVudUNsYXNzTmFtZSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IFtpc0Ryb3Bkb3duVmlzaWJsZSwgc2V0SXNEcm9wZG93blZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoaWRlTmF2aWdhdGlvbiA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldElzRHJvcGRvd25WaXNpYmxlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNob3dOYXZpZ2F0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0SXNEcm9wZG93blZpc2libGUodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBkZWZhdWx0TWVudVByb3BzOiBQYXJ0aWFsPE1lbnVQcm9wcz4gPSB7XHJcbiAgICBnZXRDb250ZW50QW5jaG9yRWw6IG51bGwsXHJcbiAgICBhbmNob3JPcmlnaW46IHtcclxuICAgICAgdmVydGljYWw6ICdib3R0b20nLFxyXG4gICAgICBob3Jpem9udGFsOiAnbGVmdCcsXHJcbiAgICB9LFxyXG4gICAgdHJhbnNmb3JtT3JpZ2luOiB7XHJcbiAgICAgIHZlcnRpY2FsOiAndG9wJyxcclxuICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKHNob3VsZEhhbmRsZUNsaWNrICYmICFkaXNhYmxlZCkge1xyXG4gICAgICAgIGlmICghaXNEcm9wZG93blZpc2libGUpIHtcclxuICAgICAgICAgIHNob3dOYXZpZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uQ2xpY2s/LihlLCBpc0Ryb3Bkb3duVmlzaWJsZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbaXNEcm9wZG93blZpc2libGUsIG9uQ2xpY2tdXHJcbiAgKTtcclxuICBjb25zdCBjb250YWluZXJDbGFzc05hbWUgPSBjbGFzc05hbWVzKFxyXG4gICAgJ2d1ZXN0YmVsbF9fZHJvcGRvd24nLFxyXG4gICAgIWlzRHJvcGRvd25WaXNpYmxlXHJcbiAgICAgID8gJ2d1ZXN0YmVsbF9fZHJvcGRvd24tLWNsb3NlZCdcclxuICAgICAgOiAnZ3Vlc3RiZWxsX19kcm9wZG93bi0tb3BlbmVkJyxcclxuICAgIHsgWydndWVzdGJlbGxfX2Ryb3Bkb3duLS1kaXNhYmxlZCddOiBkaXNhYmxlZCB9LFxyXG4gICAgeyBbJ2d1ZXN0YmVsbF9fZHJvcGRvd24tLWlubGluZSddOiBpbmxpbmUgfSxcclxuICAgIGNsYXNzTmFtZVxyXG4gICk7XHJcbiAgY29uc3QgaGVhZGVyQ2xhc3NOYW1lQWxsID0gY2xhc3NOYW1lcyhbXHJcbiAgICAnZ3Vlc3RiZWxsX19kcm9wZG93bi10b2dnbGUnLFxyXG4gICAgeyBbJ2d1ZXN0YmVsbF9fZHJvcGRvd24tdG9nZ2xlX19hcnJvdy0taGlkZGVuJ106ICFzaG93QXJyb3cgfSxcclxuICAgIHsgWydndWVzdGJlbGxfX2Ryb3Bkb3duLXRvZ2dsZS0tZGlzYWJsZWQnXTogZGlzYWJsZWQgfSxcclxuICAgIGhlYWRlckNsYXNzTmFtZSxcclxuICBdKTtcclxuICBjb25zdCBlbGVtUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlclRhZyBpZD17aWQgPz8gbnVsbH0gY2xhc3NOYW1lPXtjb250YWluZXJDbGFzc05hbWV9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgcmVmPXtlbGVtUmVmfVxyXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgIGNsYXNzTmFtZT17aGVhZGVyQ2xhc3NOYW1lQWxsfVxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICA+XHJcbiAgICAgICAge2hlYWRlcn1cclxuICAgICAgICB7bm90aWZpY2F0aW9uQ291bnQgPiAwICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImd1ZXN0YmVsbF9fbGFiZWwtY291bnRcIj57bm90aWZpY2F0aW9uQ291bnR9PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPE1lbnVcclxuICAgICAgICB7Li4uZGVmYXVsdE1lbnVQcm9wc31cclxuICAgICAgICB7Li4ubWVudVByb3BzfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hpZGVOYXZpZ2F0aW9ufVxyXG4gICAgICAgIG9wZW49e2lzRHJvcGRvd25WaXNpYmxlfVxyXG4gICAgICAgIGFuY2hvckVsPXtlbGVtUmVmLmN1cnJlbnR9XHJcbiAgICAgID5cclxuICAgICAgICA8dWxcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnZ3Vlc3RiZWxsX19kcm9wZG93bi1tZW51Jywgc3VibWVudUNsYXNzTmFtZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvTWVudT5cclxuICAgIDwvV3JhcHBlclRhZz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lQ29udGV4dDxEcm9wZG93blByb3BzLCBSZWFjdC5GQzxEcm9wZG93blByb3BzPj4oXHJcbiAgRHJvcGRvd25cclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==