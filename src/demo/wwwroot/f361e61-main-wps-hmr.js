webpackHotUpdate("main",{

/***/ "./src/lib/components/tags/subComponents/TagsSuggestions.tsx":
/*!*******************************************************************!*\
  !*** ./src/lib/components/tags/subComponents/TagsSuggestions.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_onclickoutside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-onclickoutside */ "./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../.. */ "./src/lib/index.ts");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};






var Suggestions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Suggestions, _React$Component);

  function Suggestions(props) {
    var _this;

    _classCallCheck(this, Suggestions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Suggestions).call(this, props));

    _this.onSelected = function (tag) {
      return function () {
        _this.setState({
          key: _this.state.key + 1
        });

        _this.props.onSelected(tag);
      };
    };

    _this.state = {
      key: 0
    };
    _this.onSelected = _this.onSelected.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Suggestions, [{
    key: "render",
    value: function render() {
      var _this$props$anchorEl,
          _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        key: this.state.key,
        open: this.props.isVisible,
        anchorEl: this.props.anchorEl,
        style: {
          width: (_this$props$anchorEl = this.props.anchorEl) === null || _this$props$anchorEl === void 0 ? void 0 : _this$props$anchorEl.scrollWidth,
          zIndex: 10000
        },
        placement: "bottom-start",
        modifiers: {
          flip: {
            enabled: false
          }
        }
      }, this.props.popperProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, this.props.id && {
        id: this.props.id
      }, {
        className: "tags-input__suggestions"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, this.props.AddNewTagComponent, this.props.loading && this.props.LoadingComponent && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        className: "w-100 text-center p-2"
      }, this.props.LoadingComponent), !this.props.loading && this.props.tags.map(function (tag, index) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](___WEBPACK_IMPORTED_MODULE_2__["Button"], _extends({}, _this2.props.id && {
          id: _this2.props.id + '-suggestion-' + index.toString()
        }, {
          className: 'w-100 tags-input__suggestion ' + (_this2.props.preselectedSuggestion !== undefined && _this2.props.preselectedSuggestion === index ? 'tags-input__suggestion--preselected' : ''),
          onClick: _this2.onSelected(tag),
          dropdown: true
        }), tag.name));
      }), !this.props.loading && this.props.EmptyComponent && this.props.tags.length === 0 && !this.props.allowNew && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        className: "w-100 text-center p-2"
      }, this.props.EmptyComponent))));
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside() {
      this.props.onClickOutside();
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Suggestions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var SuggestionsWrapped = Object(react_onclickoutside__WEBPACK_IMPORTED_MODULE_1__["default"])(Suggestions);
var _default = SuggestionsWrapped;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Suggestions, "Suggestions", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\subComponents\\TagsSuggestions.tsx");
  reactHotLoader.register(SuggestionsWrapped, "SuggestionsWrapped", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\subComponents\\TagsSuggestions.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\subComponents\\TagsSuggestions.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9zdWJDb21wb25lbnRzL1RhZ3NTdWdnZXN0aW9ucy50c3giXSwibmFtZXMiOlsiU3VnZ2VzdGlvbnMiLCJwcm9wcyIsIm9uU2VsZWN0ZWQiLCJ0YWciLCJzZXRTdGF0ZSIsImtleSIsInN0YXRlIiwiYmluZCIsImlzVmlzaWJsZSIsImFuY2hvckVsIiwid2lkdGgiLCJzY3JvbGxXaWR0aCIsInpJbmRleCIsImZsaXAiLCJlbmFibGVkIiwicG9wcGVyUHJvcHMiLCJpZCIsIkFkZE5ld1RhZ0NvbXBvbmVudCIsImxvYWRpbmciLCJMb2FkaW5nQ29tcG9uZW50IiwidGFncyIsIm1hcCIsImluZGV4IiwidG9TdHJpbmciLCJwcmVzZWxlY3RlZFN1Z2dlc3Rpb24iLCJ1bmRlZmluZWQiLCJuYW1lIiwiRW1wdHlDb21wb25lbnQiLCJsZW5ndGgiLCJhbGxvd05ldyIsIm9uQ2xpY2tPdXRzaWRlIiwiUmVhY3QiLCJTdWdnZXN0aW9uc1dyYXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBOztJQXdCTUEsVzs7Ozs7QUFJSix1QkFBWUMsS0FBWixFQUFxRDtBQUFBOztBQUFBOztBQUNuRCxxRkFBTUEsS0FBTjs7QUFEbUQsVUFvRTdDQyxVQXBFNkMsR0FvRWhDLFVBQUNDLEdBQUQ7QUFBQSxhQUFjLFlBQU07QUFDdkMsY0FBS0MsUUFBTCxDQUFjO0FBQUVDLGFBQUcsRUFBRSxNQUFLQyxLQUFMLENBQVdELEdBQVgsR0FBaUI7QUFBeEIsU0FBZDs7QUFDQSxjQUFLSixLQUFMLENBQVdDLFVBQVgsQ0FBc0JDLEdBQXRCO0FBQ0QsT0FIb0I7QUFBQSxLQXBFZ0M7O0FBRW5ELFVBQUtHLEtBQUwsR0FBYTtBQUFFRCxTQUFHLEVBQUU7QUFBUCxLQUFiO0FBQ0EsVUFBS0gsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCSyxJQUFoQiwrQkFBbEI7QUFIbUQ7QUFJcEQ7Ozs7NkJBQ2U7QUFBQTtBQUFBOztBQUNkLGFBQ0Usb0RBQUMsZ0VBQUQ7QUFDRSxXQUFHLEVBQUUsS0FBS0QsS0FBTCxDQUFXRCxHQURsQjtBQUVFLFlBQUksRUFBRSxLQUFLSixLQUFMLENBQVdPLFNBRm5CO0FBR0UsZ0JBQVEsRUFBRSxLQUFLUCxLQUFMLENBQVdRLFFBSHZCO0FBSUUsYUFBSyxFQUFFO0FBQUVDLGVBQUssMEJBQUUsS0FBS1QsS0FBTCxDQUFXUSxRQUFiLHlEQUFFLHFCQUFxQkUsV0FBOUI7QUFBMkNDLGdCQUFNLEVBQUU7QUFBbkQsU0FKVDtBQUtFLGlCQUFTLEVBQUMsY0FMWjtBQU1FLGlCQUFTLEVBQUU7QUFBRUMsY0FBSSxFQUFFO0FBQUVDLG1CQUFPLEVBQUU7QUFBWDtBQUFSO0FBTmIsU0FPTSxLQUFLYixLQUFMLENBQVdjLFdBUGpCLEdBU0Usd0VBQ08sS0FBS2QsS0FBTCxDQUFXZSxFQUFYLElBQWlCO0FBQ3BCQSxVQUFFLEVBQUUsS0FBS2YsS0FBTCxDQUFXZTtBQURLLE9BRHhCO0FBSUUsaUJBQVMsRUFBQztBQUpaLFVBTUUsZ0VBQ0csS0FBS2YsS0FBTCxDQUFXZ0Isa0JBRGQsRUFFRyxLQUFLaEIsS0FBTCxDQUFXaUIsT0FBWCxJQUFzQixLQUFLakIsS0FBTCxDQUFXa0IsZ0JBQWpDLElBQ0M7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRyxLQUFLbEIsS0FBTCxDQUFXa0IsZ0JBRGQsQ0FISixFQU9HLENBQUMsS0FBS2xCLEtBQUwsQ0FBV2lCLE9BQVosSUFDQyxLQUFLakIsS0FBTCxDQUFXbUIsSUFBWCxDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ2xCLEdBQUQsRUFBTW1CLEtBQU47QUFBQSxlQUNsQjtBQUFJLGFBQUcsRUFBRUE7QUFBVCxXQUNFLG9EQUFDLHdDQUFELGVBQ08sTUFBSSxDQUFDckIsS0FBTCxDQUFXZSxFQUFYLElBQWlCO0FBQ3BCQSxZQUFFLEVBQUUsTUFBSSxDQUFDZixLQUFMLENBQVdlLEVBQVgsR0FBZ0IsY0FBaEIsR0FBaUNNLEtBQUssQ0FBQ0MsUUFBTjtBQURqQixTQUR4QjtBQUlFLG1CQUFTLEVBQ1AsbUNBQ0MsTUFBSSxDQUFDdEIsS0FBTCxDQUFXdUIscUJBQVgsS0FBcUNDLFNBQXJDLElBQ0QsTUFBSSxDQUFDeEIsS0FBTCxDQUFXdUIscUJBQVgsS0FBcUNGLEtBRHBDLEdBRUcscUNBRkgsR0FHRyxFQUpKLENBTEo7QUFXRSxpQkFBTyxFQUFFLE1BQUksQ0FBQ3BCLFVBQUwsQ0FBZ0JDLEdBQWhCLENBWFg7QUFZRSxrQkFBUSxFQUFFO0FBWlosWUFjR0EsR0FBRyxDQUFDdUIsSUFkUCxDQURGLENBRGtCO0FBQUEsT0FBcEIsQ0FSSixFQTRCRyxDQUFDLEtBQUt6QixLQUFMLENBQVdpQixPQUFaLElBQ0MsS0FBS2pCLEtBQUwsQ0FBVzBCLGNBRFosSUFFQyxLQUFLMUIsS0FBTCxDQUFXbUIsSUFBWCxDQUFnQlEsTUFBaEIsS0FBMkIsQ0FGNUIsSUFHQyxDQUFDLEtBQUszQixLQUFMLENBQVc0QixRQUhiLElBSUc7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRyxLQUFLNUIsS0FBTCxDQUFXMEIsY0FEZCxDQWhDTixDQU5GLENBVEYsQ0FERjtBQXdERDs7O3lDQUUyQjtBQUMxQixXQUFLMUIsS0FBTCxDQUFXNkIsY0FBWDtBQUNEOzs7Ozs7Ozs7OztFQXRFdUJDLCtDOztBQThFMUIsSUFBTUMsa0JBQWtCLEdBQUdGLG9FQUFjLENBQUM5QixXQUFELENBQXpDO2VBRWVnQyxrQjtBQUFBOzs7Ozs7Ozs7OzBCQWhGVGhDLFc7MEJBOEVBZ0Msa0IiLCJmaWxlIjoiZjM2MWU2MS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBvbkNsaWNrT3V0c2lkZSwgeyBJbmplY3RlZE9uQ2xpY2tPdXRQcm9wcyB9IGZyb20gJ3JlYWN0LW9uY2xpY2tvdXRzaWRlJztcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSAnLi4nO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi8uLic7XHJcbmltcG9ydCBQb3BwZXIsIHsgUG9wcGVyUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXInO1xyXG5cclxuZXhwb3J0IHR5cGUgU3VnZ2VzdGlvbnNQcm9wcyA9IHtcclxuICBhbmNob3JFbDogSFRNTEVsZW1lbnQ7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbiAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uPzogbnVtYmVyO1xyXG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcclxuICB0YWdzOiBUYWdbXTtcclxuICBvblNlbGVjdGVkOiAodGFnOiBUYWcpID0+IHZvaWQ7XHJcbiAgb25DbGlja091dHNpZGU6ICgpID0+IHZvaWQ7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBsb2FkaW5nOiBib29sZWFuO1xyXG4gIExvYWRpbmdDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBFbXB0eUNvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIEFkZE5ld1RhZ0NvbXBvbmVudD86IEpTWC5FbGVtZW50O1xyXG4gIGFsbG93TmV3OiBib29sZWFuO1xyXG4gIHBvcHBlclByb3BzPzogUGFydGlhbDxQb3BwZXJQcm9wcz47XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgU3VnZ2VzdGlvbnNTdGF0ZSB7XHJcbiAga2V5OiBudW1iZXI7XHJcbn1cclxuXHJcbnR5cGUgSW5qZWN0ZWRQcm9wcyA9IEluamVjdGVkT25DbGlja091dFByb3BzO1xyXG5jbGFzcyBTdWdnZXN0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcclxuICBTdWdnZXN0aW9uc1Byb3BzICYgSW5qZWN0ZWRQcm9wcyxcclxuICBTdWdnZXN0aW9uc1N0YXRlXHJcbj4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTdWdnZXN0aW9uc1Byb3BzICYgSW5qZWN0ZWRQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsga2V5OiAwIH07XHJcbiAgICB0aGlzLm9uU2VsZWN0ZWQgPSB0aGlzLm9uU2VsZWN0ZWQuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxQb3BwZXJcclxuICAgICAgICBrZXk9e3RoaXMuc3RhdGUua2V5fVxyXG4gICAgICAgIG9wZW49e3RoaXMucHJvcHMuaXNWaXNpYmxlfVxyXG4gICAgICAgIGFuY2hvckVsPXt0aGlzLnByb3BzLmFuY2hvckVsfVxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiB0aGlzLnByb3BzLmFuY2hvckVsPy5zY3JvbGxXaWR0aCwgekluZGV4OiAxMDAwMCB9fVxyXG4gICAgICAgIHBsYWNlbWVudD1cImJvdHRvbS1zdGFydFwiXHJcbiAgICAgICAgbW9kaWZpZXJzPXt7IGZsaXA6IHsgZW5hYmxlZDogZmFsc2UgfSB9fVxyXG4gICAgICAgIHsuLi50aGlzLnByb3BzLnBvcHBlclByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3N1Z2dlc3Rpb25zXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLkFkZE5ld1RhZ0NvbXBvbmVudH1cclxuICAgICAgICAgICAge3RoaXMucHJvcHMubG9hZGluZyAmJiB0aGlzLnByb3BzLkxvYWRpbmdDb21wb25lbnQgJiYgKFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3LTEwMCB0ZXh0LWNlbnRlciBwLTJcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkxvYWRpbmdDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeyF0aGlzLnByb3BzLmxvYWRpbmcgJiZcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXN1Z2dlc3Rpb24tJyArIGluZGV4LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICd3LTEwMCB0YWdzLWlucHV0X19zdWdnZXN0aW9uICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICd0YWdzLWlucHV0X19zdWdnZXN0aW9uLS1wcmVzZWxlY3RlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNlbGVjdGVkKHRhZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGFnLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgeyF0aGlzLnByb3BzLmxvYWRpbmcgJiZcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLkVtcHR5Q29tcG9uZW50ICYmXHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICF0aGlzLnByb3BzLmFsbG93TmV3ICYmIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3LTEwMCB0ZXh0LWNlbnRlciBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRW1wdHlDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1BvcHBlcj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlQ2xpY2tPdXRzaWRlKCkge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrT3V0c2lkZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblNlbGVjdGVkID0gKHRhZzogVGFnKSA9PiAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsga2V5OiB0aGlzLnN0YXRlLmtleSArIDEgfSk7XHJcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0ZWQodGFnKTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBTdWdnZXN0aW9uc1dyYXBwZWQgPSBvbkNsaWNrT3V0c2lkZShTdWdnZXN0aW9ucyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uc1dyYXBwZWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=