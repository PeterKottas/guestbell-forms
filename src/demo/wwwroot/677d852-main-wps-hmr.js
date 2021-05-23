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
      onShow = props.onShow,
      onHide = props.onHide,
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
    onHide === null || onHide === void 0 ? void 0 : onHide();
  }, [onHide]);
  var showNavigation = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function () {
    setIsDropdownVisible(true);
    onShow === null || onShow === void 0 ? void 0 : onShow();
  }, [onShow]);
  var onClickAway = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (e) {
    hideNavigation();
    e.stopPropagation();
    e.preventDefault();
  }, [hideNavigation]);
  var handleClick = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (e) {
    if (shouldHandleClick && !disabled) {
      if (!isDropdownVisible) {
        showNavigation();
      } else {
        hideNavigation();
      }

      onClick === null || onClick === void 0 ? void 0 : onClick(e, isDropdownVisible);
    }
  }, [isDropdownVisible, onClick]);
  var containerClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()('guestbell__dropdown', !isDropdownVisible ? 'guestbell__dropdown--closed' : 'guestbell__dropdown--opened', _defineProperty({}, 'guestbell__dropdown--disabled', disabled), _defineProperty({}, 'guestbell__dropdown--inline', inline), className);
  var headerClassNameAll = classnames__WEBPACK_IMPORTED_MODULE_3___default()(['guestbell__dropdown-toggle', _defineProperty({}, 'guestbell__dropdown-toggle__arrow--hidden', !showArrow), _defineProperty({}, 'guestbell__dropdown-toggle--disabled', disabled), headerClassName]);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClickAway: onClickAway,
    mouseEvent: isDropdownVisible ? 'onMouseDown' : false,
    touchEvent: isDropdownVisible ? 'onTouchStart' : false
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](WrapperTag, {
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
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('guestbell__dropdown-menu', submenuClassName)
  }, children)))));
};

__signature__(Dropdown, "useState{[isDropdownVisible, setIsDropdownVisible](false)}\nuseCallback{hideNavigation}\nuseCallback{showNavigation}\nuseCallback{onClickAway}\nuseCallback{handleClick}");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vRHJvcGRvd24udHN4Il0sIm5hbWVzIjpbIkRyb3Bkb3duIiwicHJvcHMiLCJzaG91bGRIYW5kbGVDbGljayIsIldyYXBwZXJUYWciLCJub3RpZmljYXRpb25Db3VudCIsInNob3dBcnJvdyIsImlubGluZSIsIm9uQ2xpY2siLCJvblNob3ciLCJvbkhpZGUiLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsImhlYWRlckNsYXNzTmFtZSIsImhlYWRlciIsImlkIiwiY29sbGFwc2VQcm9wcyIsImNoaWxkcmVuIiwic3VibWVudUNsYXNzTmFtZSIsIlJlYWN0IiwiaXNEcm9wZG93blZpc2libGUiLCJzZXRJc0Ryb3Bkb3duVmlzaWJsZSIsImhpZGVOYXZpZ2F0aW9uIiwic2hvd05hdmlnYXRpb24iLCJvbkNsaWNrQXdheSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsaWNrIiwiY29udGFpbmVyQ2xhc3NOYW1lIiwiY2xhc3NOYW1lcyIsImhlYWRlckNsYXNzTmFtZUFsbCIsIndpdGhUaGVtZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUEyQkEsSUFBTUEsUUFBaUMsR0FBRyxTQUFwQ0EsUUFBb0MsQ0FBQUMsS0FBSyxFQUFJO0FBQUEsOEJBa0I3Q0EsS0FsQjZDLENBRS9DQyxpQkFGK0M7QUFBQSxNQUUvQ0EsaUJBRitDLHNDQUUzQixJQUYyQjtBQUFBLDBCQWtCN0NELEtBbEI2QyxDQUcvQ0UsVUFIK0M7QUFBQSxNQUcvQ0EsVUFIK0Msa0NBR2xDLEtBSGtDO0FBQUEsOEJBa0I3Q0YsS0FsQjZDLENBSS9DRyxpQkFKK0M7QUFBQSxNQUkvQ0EsaUJBSitDLHNDQUkzQixDQUoyQjtBQUFBLHlCQWtCN0NILEtBbEI2QyxDQUsvQ0ks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aUJBQWlCLEdBQUcsYUFBSCxHQUFtQixLQUZsRDtBQUdFLGNBQVUsRUFBRUEsaUJBQWlCLEdBQUcsY0FBSCxHQUFvQjtBQUhuRCxLQUtFLG9EQUFDLFVBQUQ7QUFBWSxNQUFFLEVBQUVMLEVBQUYsYUFBRUEsRUFBRixjQUFFQSxFQUFGLEdBQVEsSUFBdEI7QUFBNEIsYUFBUyxFQUFFYztBQUF2QyxLQUNFO0FBQUssUUFBSSxFQUFDLFFBQVY7QUFBbUIsYUFBUyxFQUFFRSxrQkFBOUI7QUFBa0QsV0FBTyxFQUFFSDtBQUEzRCxLQUNHZCxNQURILEVBRUdULGlCQUFpQixHQUFHLENBQXBCLElBQ0M7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FBMENBLGlCQUExQyxDQUhKLENBREYsRUFPRTtBQUFLLGFBQVMsRUFBRTtBQUFoQixLQUNFLG9EQUFDLGtFQUFELGVBQWNXLGFBQWQ7QUFBNkIsTUFBRSxFQUFFSTtBQUFqQyxNQUNFO0FBQ0UsYUFBUyxFQUFFVSxpREFBVSxDQUNuQiwwQkFEbUIsRUFFbkJaLGdCQUZtQjtBQUR2QixLQU1HRCxRQU5ILENBREYsQ0FERixDQVBGLENBTEYsQ0FERjtBQTRCRCxDQWpHRDs7Y0FBTWhCLFE7O2VBbUdTK0Isd0ZBQWdCLENBQzdCL0IsUUFENkIsQzs7QUFBaEI7Ozs7Ozs7Ozs7MEJBbkdUQSxRIiwiZmlsZSI6IjY3N2Q4NTItbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlic1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb2xsYXBzZSwgeyBDb2xsYXBzZVByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2UnO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHRQcm9wcyB9IGZyb20gJy4uL3RoZW1lUHJvdmlkZXIvVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgd2l0aFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL3RoZW1lUHJvdmlkZXIvd2l0aFRoZW1lQ29udGV4dCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgQ2xpY2tBd2F5TGlzdGVuZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXInO1xyXG5cclxuZXhwb3J0IHR5cGUgRHJvcGRvd25Qcm9wcyA9IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPFxyXG4gIFRoZW1lQ29udGV4dFByb3BzICYge1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBoZWFkZXI/OiBKU1guRWxlbWVudCB8IHN0cmluZztcclxuICAgIGNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIHN1Ym1lbnVDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBoZWFkZXJDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBub3RpZmljYXRpb25Db3VudD86IG51bWJlcjtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgIFdyYXBwZXJUYWc/OiBrZXlvZiBKU1guSW50cmluc2ljRWxlbWVudHM7XHJcbiAgICBzaG91bGRIYW5kbGVDbGljaz86IGJvb2xlYW47XHJcbiAgICBzaG93QXJyb3c/OiBib29sZWFuO1xyXG4gICAgb25DbGljaz86IChlOiBSZWFjdC5Nb3VzZUV2ZW50LCBpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBvblNob3c/OiAoKSA9PiB2b2lkO1xyXG4gICAgb25IaWRlPzogKCkgPT4gdm9pZDtcclxuICAgIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIGlubGluZT86IGJvb2xlYW47XHJcbiAgICBjb2xsYXBzZVByb3BzPzogUGFydGlhbDxDb2xsYXBzZVByb3BzPjtcclxuICB9XHJcbj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyb3Bkb3duU3RhdGUge1xyXG4gIGlzRHJvcGRvd25WaXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBEcm9wZG93bjogUmVhY3QuRkM8RHJvcGRvd25Qcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgc2hvdWxkSGFuZGxlQ2xpY2sgPSB0cnVlLFxyXG4gICAgV3JhcHBlclRhZyA9ICdkaXYnLFxyXG4gICAgbm90aWZpY2F0aW9uQ291bnQgPSAwLFxyXG4gICAgc2hvd0Fycm93ID0gdHJ1ZSxcclxuICAgIGlubGluZSA9IHRydWUsXHJcbiAgICBvbkNsaWNrLFxyXG4gICAgb25TaG93LFxyXG4gICAgb25IaWRlLFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBoZWFkZXJDbGFzc05hbWUsXHJcbiAgICBoZWFkZXIsXHJcbiAgICBpZCxcclxuICAgIGNvbGxhcHNlUHJvcHMsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIHN1Ym1lbnVDbGFzc05hbWUsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBbaXNEcm9wZG93blZpc2libGUsIHNldElzRHJvcGRvd25WaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGlkZU5hdmlnYXRpb24gPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc0Ryb3Bkb3duVmlzaWJsZShmYWxzZSk7XHJcbiAgICBvbkhpZGU/LigpO1xyXG4gIH0sIFtvbkhpZGVdKTtcclxuXHJcbiAgY29uc3Qgc2hvd05hdmlnYXRpb24gPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRJc0Ryb3Bkb3duVmlzaWJsZSh0cnVlKTtcclxuICAgIG9uU2hvdz8uKCk7XHJcbiAgfSwgW29uU2hvd10pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrQXdheSA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8RG9jdW1lbnQ+KSA9PiB7XHJcbiAgICAgIGhpZGVOYXZpZ2F0aW9uKCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0sXHJcbiAgICBbaGlkZU5hdmlnYXRpb25dXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChzaG91bGRIYW5kbGVDbGljayAmJiAhZGlzYWJsZWQpIHtcclxuICAgICAgICBpZiAoIWlzRHJvcGRvd25WaXNpYmxlKSB7XHJcbiAgICAgICAgICBzaG93TmF2aWdhdGlvbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBoaWRlTmF2aWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvbkNsaWNrPy4oZSwgaXNEcm9wZG93blZpc2libGUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2lzRHJvcGRvd25WaXNpYmxlLCBvbkNsaWNrXVxyXG4gICk7XHJcbiAgY29uc3QgY29udGFpbmVyQ2xhc3NOYW1lID0gY2xhc3NOYW1lcyhcclxuICAgICdndWVzdGJlbGxfX2Ryb3Bkb3duJyxcclxuICAgICFpc0Ryb3Bkb3duVmlzaWJsZVxyXG4gICAgICA/ICdndWVzdGJlbGxfX2Ryb3Bkb3duLS1jbG9zZWQnXHJcbiAgICAgIDogJ2d1ZXN0YmVsbF9fZHJvcGRvd24tLW9wZW5lZCcsXHJcbiAgICB7IFsnZ3Vlc3RiZWxsX19kcm9wZG93bi0tZGlzYWJsZWQnXTogZGlzYWJsZWQgfSxcclxuICAgIHsgWydndWVzdGJlbGxfX2Ryb3Bkb3duLS1pbmxpbmUnXTogaW5saW5lIH0sXHJcbiAgICBjbGFzc05hbWVcclxuICApO1xyXG4gIGNvbnN0IGhlYWRlckNsYXNzTmFtZUFsbCA9IGNsYXNzTmFtZXMoW1xyXG4gICAgJ2d1ZXN0YmVsbF9fZHJvcGRvd24tdG9nZ2xlJyxcclxuICAgIHsgWydndWVzdGJlbGxfX2Ryb3Bkb3duLXRvZ2dsZV9fYXJyb3ctLWhpZGRlbiddOiAhc2hvd0Fycm93IH0sXHJcbiAgICB7IFsnZ3Vlc3RiZWxsX19kcm9wZG93bi10b2dnbGUtLWRpc2FibGVkJ106IGRpc2FibGVkIH0sXHJcbiAgICBoZWFkZXJDbGFzc05hbWUsXHJcbiAgXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDbGlja0F3YXlMaXN0ZW5lclxyXG4gICAgICBvbkNsaWNrQXdheT17b25DbGlja0F3YXl9XHJcbiAgICAgIG1vdXNlRXZlbnQ9e2lzRHJvcGRvd25WaXNpYmxlID8gJ29uTW91c2VEb3duJyA6IGZhbHNlfVxyXG4gICAgICB0b3VjaEV2ZW50PXtpc0Ryb3Bkb3duVmlzaWJsZSA/ICdvblRvdWNoU3RhcnQnIDogZmFsc2V9XHJcbiAgICA+XHJcbiAgICAgIDxXcmFwcGVyVGFnIGlkPXtpZCA/PyBudWxsfSBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzTmFtZX0+XHJcbiAgICAgICAgPGRpdiByb2xlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtoZWFkZXJDbGFzc05hbWVBbGx9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgIHtoZWFkZXJ9XHJcbiAgICAgICAgICB7bm90aWZpY2F0aW9uQ291bnQgPiAwICYmIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ3Vlc3RiZWxsX19sYWJlbC1jb3VudFwiPntub3RpZmljYXRpb25Db3VudH08L3NwYW4+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZ3Vlc3RiZWxsX19kcm9wZG93bi1tZW51X19jb250YWluZXInfT5cclxuICAgICAgICAgIDxDb2xsYXBzZSB7Li4uY29sbGFwc2VQcm9wc30gaW49e2lzRHJvcGRvd25WaXNpYmxlfT5cclxuICAgICAgICAgICAgPHVsXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICAgJ2d1ZXN0YmVsbF9fZHJvcGRvd24tbWVudScsXHJcbiAgICAgICAgICAgICAgICBzdWJtZW51Q2xhc3NOYW1lXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvV3JhcHBlclRhZz5cclxuICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZUNvbnRleHQ8RHJvcGRvd25Qcm9wcywgUmVhY3QuRkM8RHJvcGRvd25Qcm9wcz4+KFxyXG4gIERyb3Bkb3duXHJcbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=