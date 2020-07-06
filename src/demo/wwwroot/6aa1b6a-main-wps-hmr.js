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

      return this.props.isVisible ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: this.state.key,
        open: true,
        anchorEl: this.props.anchorEl,
        style: {
          width: (_this$props$anchorEl = this.props.anchorEl) === null || _this$props$anchorEl === void 0 ? void 0 : _this$props$anchorEl.scrollWidth
        }
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, this.props.id && {
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
      }, this.props.EmptyComponent)))) : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9zdWJDb21wb25lbnRzL1RhZ3NTdWdnZXN0aW9ucy50c3giXSwibmFtZXMiOlsiU3VnZ2VzdGlvbnMiLCJwcm9wcyIsIm9uU2VsZWN0ZWQiLCJ0YWciLCJzZXRTdGF0ZSIsImtleSIsInN0YXRlIiwiYmluZCIsImlzVmlzaWJsZSIsImFuY2hvckVsIiwid2lkdGgiLCJzY3JvbGxXaWR0aCIsImlkIiwiQWRkTmV3VGFnQ29tcG9uZW50IiwibG9hZGluZyIsIkxvYWRpbmdDb21wb25lbnQiLCJ0YWdzIiwibWFwIiwiaW5kZXgiLCJ0b1N0cmluZyIsInByZXNlbGVjdGVkU3VnZ2VzdGlvbiIsInVuZGVmaW5lZCIsIm5hbWUiLCJFbXB0eUNvbXBvbmVudCIsImxlbmd0aCIsImFsbG93TmV3Iiwib25DbGlja091dHNpZGUiLCJSZWFjdCIsIlN1Z2dlc3Rpb25zV3JhcHBlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0lBdUJNQSxXOzs7OztBQUlKLHVCQUFZQyxLQUFaLEVBQXFEO0FBQUE7O0FBQUE7O0FBQ25ELHFGQUFNQSxLQUFOOztBQURtRCxVQWlFN0NDLFVBakU2QyxHQWlFaEMsVUFBQ0MsR0FBRDtBQUFBLGFBQWMsWUFBTTtBQUN2QyxjQUFLQyxRQUFMLENBQWM7QUFBRUMsYUFBRyxFQUFFLE1BQUtDLEtBQUwsQ0FBV0QsR0FBWCxHQUFpQjtBQUF4QixTQUFkOztBQUNBLGNBQUtKLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQkMsR0FBdEI7QUFDRCxPQUhvQjtBQUFBLEtBakVnQzs7QUFFbkQsVUFBS0csS0FBTCxHQUFhO0FBQUVELFNBQUcsRUFBRTtBQUFQLEtBQWI7QUFDQSxVQUFLSCxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JLLElBQWhCLCtCQUFsQjtBQUhtRDtBQUlwRDs7Ozs2QkFDZTtBQUFBO0FBQUE7O0FBQ2QsYUFBTyxLQUFLTixLQUFMLENBQVdPLFNBQVgsR0FDTCxvREFBQyxnRUFBRDtBQUNFLFdBQUcsRUFBRSxLQUFLRixLQUFMLENBQVdELEdBRGxCO0FBRUUsWUFBSSxFQUFFLElBRlI7QUFHRSxnQkFBUSxFQUFFLEtBQUtKLEtBQUwsQ0FBV1EsUUFIdkI7QUFJRSxhQUFLLEVBQUU7QUFBRUMsZUFBSywwQkFBRSxLQUFLVCxLQUFMLENBQVdRLFFBQWIseURBQUUscUJBQXFCRTtBQUE5QjtBQUpULFNBTUUsd0VBQ08sS0FBS1YsS0FBTCxDQUFXVyxFQUFYLElBQWlCO0FBQ3BCQSxVQUFFLEVBQUUsS0FBS1gsS0FBTCxDQUFXVztBQURLLE9BRHhCO0FBSUUsaUJBQVMsRUFBQztBQUpaLFVBTUUsZ0VBQ0csS0FBS1gsS0FBTCxDQUFXWSxrQkFEZCxFQUVHLEtBQUtaLEtBQUwsQ0FBV2EsT0FBWCxJQUFzQixLQUFLYixLQUFMLENBQVdjLGdCQUFqQyxJQUNDO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0csS0FBS2QsS0FBTCxDQUFXYyxnQkFEZCxDQUhKLEVBT0csQ0FBQyxLQUFLZCxLQUFMLENBQVdhLE9BQVosSUFDQyxLQUFLYixLQUFMLENBQVdlLElBQVgsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNkLEdBQUQsRUFBTWUsS0FBTjtBQUFBLGVBQ2xCO0FBQUksYUFBRyxFQUFFQTtBQUFULFdBQ0Usb0RBQUMsd0NBQUQsZUFDTyxNQUFJLENBQUNqQixLQUFMLENBQVdXLEVBQVgsSUFBaUI7QUFDcEJBLFlBQUUsRUFBRSxNQUFJLENBQUNYLEtBQUwsQ0FBV1csRUFBWCxHQUFnQixjQUFoQixHQUFpQ00sS0FBSyxDQUFDQyxRQUFOO0FBRGpCLFNBRHhCO0FBSUUsbUJBQVMsRUFDUCxtQ0FDQyxNQUFJLENBQUNsQixLQUFMLENBQVdtQixxQkFBWCxLQUFxQ0MsU0FBckMsSUFDRCxNQUFJLENBQUNwQixLQUFMLENBQVdtQixxQkFBWCxLQUFxQ0YsS0FEcEMsR0FFRyxxQ0FGSCxHQUdHLEVBSkosQ0FMSjtBQVdFLGlCQUFPLEVBQUUsTUFBSSxDQUFDaEIsVUFBTCxDQUFnQkMsR0FBaEIsQ0FYWDtBQVlFLGtCQUFRLEVBQUU7QUFaWixZQWNHQSxHQUFHLENBQUNtQixJQWRQLENBREYsQ0FEa0I7QUFBQSxPQUFwQixDQVJKLEVBNEJHLENBQUMsS0FBS3JCLEtBQUwsQ0FBV2EsT0FBWixJQUNDLEtBQUtiLEtBQUwsQ0FBV3NCLGNBRFosSUFFQyxLQUFLdEIsS0FBTCxDQUFXZSxJQUFYLENBQWdCUSxNQUFoQixLQUEyQixDQUY1QixJQUdDLENBQUMsS0FBS3ZCLEtBQUwsQ0FBV3dCLFFBSGIsSUFJRztBQUFJLGlCQUFTLEVBQUM7QUFBZCxTQUNHLEtBQUt4QixLQUFMLENBQVdzQixjQURkLENBaENOLENBTkYsQ0FORixDQURLLEdBb0RILElBcERKO0FBcUREOzs7eUNBRTJCO0FBQzFCLFdBQUt0QixLQUFMLENBQVd5QixjQUFYO0FBQ0Q7Ozs7Ozs7Ozs7O0VBbkV1QkMsK0M7O0FBMkUxQixJQUFNQyxrQkFBa0IsR0FBR0Ysb0VBQWMsQ0FBQzFCLFdBQUQsQ0FBekM7ZUFFZTRCLGtCO0FBQUE7Ozs7Ozs7Ozs7MEJBN0VUNUIsVzswQkEyRUE0QixrQiIsImZpbGUiOiI2YWExYjZhLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG9uQ2xpY2tPdXRzaWRlLCB7IEluamVjdGVkT25DbGlja091dFByb3BzIH0gZnJvbSAncmVhY3Qtb25jbGlja291dHNpZGUnO1xyXG5pbXBvcnQgeyBUYWcgfSBmcm9tICcuLic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uJztcclxuaW1wb3J0IFBvcHBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXInO1xyXG5cclxuZXhwb3J0IHR5cGUgU3VnZ2VzdGlvbnNQcm9wcyA9IHtcclxuICBhbmNob3JFbDogSFRNTEVsZW1lbnQ7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbiAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uPzogbnVtYmVyO1xyXG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcclxuICB0YWdzOiBUYWdbXTtcclxuICBvblNlbGVjdGVkOiAodGFnOiBUYWcpID0+IHZvaWQ7XHJcbiAgb25DbGlja091dHNpZGU6ICgpID0+IHZvaWQ7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBsb2FkaW5nOiBib29sZWFuO1xyXG4gIExvYWRpbmdDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBFbXB0eUNvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIEFkZE5ld1RhZ0NvbXBvbmVudD86IEpTWC5FbGVtZW50O1xyXG4gIGFsbG93TmV3OiBib29sZWFuO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFN1Z2dlc3Rpb25zU3RhdGUge1xyXG4gIGtleTogbnVtYmVyO1xyXG59XHJcblxyXG50eXBlIEluamVjdGVkUHJvcHMgPSBJbmplY3RlZE9uQ2xpY2tPdXRQcm9wcztcclxuY2xhc3MgU3VnZ2VzdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XHJcbiAgU3VnZ2VzdGlvbnNQcm9wcyAmIEluamVjdGVkUHJvcHMsXHJcbiAgU3VnZ2VzdGlvbnNTdGF0ZVxyXG4+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogU3VnZ2VzdGlvbnNQcm9wcyAmIEluamVjdGVkUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IGtleTogMCB9O1xyXG4gICAgdGhpcy5vblNlbGVjdGVkID0gdGhpcy5vblNlbGVjdGVkLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pc1Zpc2libGUgPyAoXHJcbiAgICAgIDxQb3BwZXJcclxuICAgICAgICBrZXk9e3RoaXMuc3RhdGUua2V5fVxyXG4gICAgICAgIG9wZW49e3RydWV9XHJcbiAgICAgICAgYW5jaG9yRWw9e3RoaXMucHJvcHMuYW5jaG9yRWx9XHJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IHRoaXMucHJvcHMuYW5jaG9yRWw/LnNjcm9sbFdpZHRoIH19XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fc3VnZ2VzdGlvbnNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuQWRkTmV3VGFnQ29tcG9uZW50fVxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5sb2FkaW5nICYmIHRoaXMucHJvcHMuTG9hZGluZ0NvbXBvbmVudCAmJiAoXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInctMTAwIHRleHQtY2VudGVyIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuTG9hZGluZ0NvbXBvbmVudH1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7IXRoaXMucHJvcHMubG9hZGluZyAmJlxyXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMudGFncy5tYXAoKHRhZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctc3VnZ2VzdGlvbi0nICsgaW5kZXgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ3ctMTAwIHRhZ3MtaW5wdXRfX3N1Z2dlc3Rpb24gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IGluZGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3RhZ3MtaW5wdXRfX3N1Z2dlc3Rpb24tLXByZXNlbGVjdGVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2VsZWN0ZWQodGFnKX1cclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0YWcubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICB7IXRoaXMucHJvcHMubG9hZGluZyAmJlxyXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuRW1wdHlDb21wb25lbnQgJiZcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgICAgICAgIXRoaXMucHJvcHMuYWxsb3dOZXcgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInctMTAwIHRleHQtY2VudGVyIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5FbXB0eUNvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUG9wcGVyPlxyXG4gICAgKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlQ2xpY2tPdXRzaWRlKCkge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrT3V0c2lkZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblNlbGVjdGVkID0gKHRhZzogVGFnKSA9PiAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsga2V5OiB0aGlzLnN0YXRlLmtleSArIDEgfSk7XHJcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0ZWQodGFnKTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBTdWdnZXN0aW9uc1dyYXBwZWQgPSBvbkNsaWNrT3V0c2lkZShTdWdnZXN0aW9ucyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uc1dyYXBwZWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=