webpackHotUpdate("main",{

/***/ "./src/lib/components/inputHeader/InputHeader.tsx":
/*!********************************************************!*\
  !*** ./src/lib/components/inputHeader/InputHeader.tsx ***!
  \********************************************************/
/*! exports provided: InputHeaderRaw, InputHeader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputHeaderRaw", function() { return InputHeaderRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputHeader", function() { return InputHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_design_icons_navigation_svg_production_ic_more_vert_24px_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-design-icons/navigation/svg/production/ic_more_vert_24px.svg */ "./node_modules/material-design-icons/navigation/svg/production/ic_more_vert_24px.svg");
/* harmony import */ var material_design_icons_navigation_svg_production_ic_more_vert_24px_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_navigation_svg_production_ic_more_vert_24px_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg */ "./node_modules/material-design-icons/hardware/svg/production/ic_keyboard_arrow_down_24px.svg");
/* harmony import */ var material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button/Button */ "./src/lib/components/button/Button.tsx");
/* harmony import */ var _utils_Guid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Guid */ "./src/lib/components/utils/Guid.ts");
/* harmony import */ var _dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dropdown/Dropdown */ "./src/lib/components/dropdown/Dropdown.tsx");
/* harmony import */ var _smoothCollapse_SmoothCollapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../smoothCollapse/SmoothCollapse */ "./src/lib/components/smoothCollapse/SmoothCollapse.tsx");
/* harmony import */ var _withInputHeaderContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./withInputHeaderContext */ "./src/lib/components/inputHeader/withInputHeaderContext.tsx");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

// Libs


var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"); // Misc










var CollapseExpandButtonComponent = function CollapseExpandButtonComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    className: props.className,
    onClick: props.onClick,
    href: "#"
  }, props.children);
};

var InputHeaderRaw =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(InputHeaderRaw, _React$PureComponent);

  function InputHeaderRaw(props) {
    var _this;

    _classCallCheck(this, InputHeaderRaw);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputHeaderRaw).call(this, props));
    _this.componentId = Object(_utils_Guid__WEBPACK_IMPORTED_MODULE_4__["default"])();

    _this.smoothCollapseDone = function () {
      return _this.setState(function (previousState) {
        return {
          smoothCollapseDone: true
        };
      });
    };

    _this.toggleClick = function () {
      return _this.toggle();
    };

    _this.mainButtonClick = function (e) {
      return e.stopPropagation();
    };

    _this.containerClick = function (e) {
      return e.stopPropagation();
    };

    _this.expandAllClick = function () {
      Object.keys(_this.state.inputHeaderContext.components).forEach(function (key) {
        var component = _this.state.inputHeaderContext.components[key];
        component.componentApi.expand();
      });
    };

    _this.collapseAllClick = function () {
      Object.keys(_this.state.inputHeaderContext.components).forEach(function (key) {
        var component = _this.state.inputHeaderContext.components[key];
        component.componentApi.collapse();
      });
    };

    _this.state = {
      collapsed: props.collapsedDefault,
      inputHeaderContext: {
        registerInputHeader: _this.registerInputHeader,
        unregisterInputHeader: _this.unregisterInputHeader,
        stateChanged: function stateChanged() {
          return _this.forceUpdate();
        },
        components: {}
      },
      smoothCollapseDone: true
    };
    _this.registerInputHeader = _this.registerInputHeader.bind(_assertThisInitialized(_this));
    _this.unregisterInputHeader = _this.unregisterInputHeader.bind(_assertThisInitialized(_this));
    _this.expand = _this.expand.bind(_assertThisInitialized(_this));
    _this.collapse = _this.collapse.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InputHeaderRaw, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!this.props.ignoreContext && this.props.inputHeaderContext) {
        this.props.inputHeaderContext.unregisterInputHeader(this.componentId);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.ignoreContext && this.props.inputHeaderContext) {
        this.props.inputHeaderContext.registerInputHeader(this.componentId, {
          componentId: this.componentId,
          componentApi: {
            expand: this.expand,
            collapse: this.collapse,
            toggle: this.toggle
          },
          props: _objectSpread({}, {}, {}, this.props),
          state: _objectSpread({}, {}, {}, this.state)
        });
      }
    }
  }, {
    key: "expand",
    value: function expand() {
      var _this2 = this;

      this.props.collapsable && this.setState({
        collapsed: false,
        smoothCollapseDone: false
      }, function () {
        return _this2.props.inputHeaderContext && _this2.props.inputHeaderContext.stateChanged();
      });
    }
  }, {
    key: "collapse",
    value: function collapse() {
      var _this3 = this;

      this.props.collapsable && this.setState({
        collapsed: true,
        smoothCollapseDone: false
      }, function () {
        return _this3.props.inputHeaderContext && _this3.props.inputHeaderContext.stateChanged();
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      var _this4 = this;

      this.props.collapsable && this.setState({
        collapsed: !this.state.collapsed,
        smoothCollapseDone: false
      }, function () {
        return _this4.props.inputHeaderContext && _this4.props.inputHeaderContext.stateChanged();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "input__header " + (this.props.className ? this.props.className : '') + ' ' + this.getTypeClass()
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: classNames('input__header__top', {
          'input__header__top--tall': this.props.showExpandAll
        }, {
          'input__header__top--no-bg': this.props.noBg
        }, {
          'input__header__top--clickable': this.props.collapsable && this.props.shouldToggleCollapseOnHeaderClick
        }, this.props.headerClassName),
        role: this.props.collapsable && this.props.shouldToggleCollapseOnHeaderClick ? 'button' : undefined,
        onClick: this.props.collapsable && this.props.shouldToggleCollapseOnHeaderClick ? this.toggleClick : undefined
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'input__header__top__header-container '
      }, this.props.icon && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "input__header__icon line-height--0"
      }, this.props.icon), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "input__header__title__container"
      }, this.props.title && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "input__header__title"
      }, this.props.title), this.props.subTitle && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "input__header__sub-title"
      }, this.props.subTitle))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "input__header__top__button-container",
        onClick: this.mainButtonClick
      }, this.props.mainButton && this.props.mainButton, this.props.extraButtons ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_5__["Dropdown"], {
        header: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], _extends({
          blank: true,
          circular: true
        }, this.props.extraButtonsButtonProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](material_design_icons_navigation_svg_production_ic_more_vert_24px_svg__WEBPACK_IMPORTED_MODULE_1__, null)),
        showArrow: false,
        headerClassName: 'line-height--0',
        className: ''
      }, this.renderExtraButtons()) : null, this.props.collapsable && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], _extends({
        circular: true,
        blank: true,
        className: "input__header__collapse-button line-height--0 ".concat(this.state.collapsed ? 'collapsed' : '')
      }, this.props.collapseButtonsButtonProps, {
        onClick: this.toggleClick
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](material_design_icons_hardware_svg_production_ic_keyboard_arrow_down_24px_svg__WEBPACK_IMPORTED_MODULE_2__, null))), this.props.showExpandAll && Object.keys(this.state.inputHeaderContext.components).length > 0 && this.renderCollapseExpandAll()), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'input__header__bottom ' + (this.props.contentClassName ? this.props.contentClassName : '')
      }, this.props.collapsable ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: !this.state.collapsed && this.state.smoothCollapseDone ? 'smooth-collapse__container' : ''
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_smoothCollapse_SmoothCollapse__WEBPACK_IMPORTED_MODULE_6__["SmoothCollapse"], {
        collapsedHeight: '0.0001px',
        expanded: this.props.collapsed !== undefined ? !this.props.collapsed : !this.state.collapsed,
        onChangeEnd: this.smoothCollapseDone
      }, this.props.children)) : this.props.children));
    }
  }, {
    key: "registerInputHeader",
    value: function registerInputHeader(componentId, component) {
      this.setState(function (previousState) {
        var components = Object.assign({}, previousState.inputHeaderContext.components);
        components[componentId] = component;
        return {
          inputHeaderContext: _objectSpread({}, previousState.inputHeaderContext, {
            components: components
          })
        };
      });
    }
  }, {
    key: "unregisterInputHeader",
    value: function unregisterInputHeader(componentId) {
      this.setState(function (previousState) {
        var components = Object.assign({}, previousState.inputHeaderContext.components);
        delete components[componentId];
        return {
          inputHeaderContext: _objectSpread({}, previousState.inputHeaderContext, {
            components: components
          })
        };
      });
    }
  }, {
    key: "getTypeClass",
    value: function getTypeClass() {
      switch (this.props.type) {
        case 'hero':
          return 'input__header--hero';

        case 'small':
          return 'input__header--small';

        default:
          return '';
      }
    }
  }, {
    key: "renderExtraButtons",
    value: function renderExtraButtons() {
      var arr = [];

      if (typeof this.props.extraButtons === 'function') {
        arr = this.props.extraButtons;
      } else {
        arr = this.props.extraButtons;
      }

      return arr.map(function (extraButton, index) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
          key: index
        }, extraButton);
      });
    }
  }, {
    key: "renderCollapseExpandAll",
    value: function renderCollapseExpandAll() {
      var _this5 = this;

      var allCollapsed = true;
      var allExpanded = true;
      Object.keys(this.state.inputHeaderContext.components).forEach(function (key) {
        var component = _this5.state.inputHeaderContext.components[key];

        if (component && component.props.collapsable) {
          if (component.state.collapsed) {
            allExpanded = false;
          } else {
            allCollapsed = false;
          }
        }
      });
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "input__header__expand-collapse--all",
        onClick: this.containerClick
      }, (allCollapsed || !allExpanded) && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        noRipples: true,
        small: true,
        className: allExpanded || !allCollapsed ? 'mr-2' : '',
        onClick: this.expandAllClick,
        blank: true,
        Component: CollapseExpandButtonComponent
      }, "Expand all"), (allExpanded || !allCollapsed) && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        noRipples: true,
        small: true,
        onClick: this.collapseAllClick,
        blank: true,
        Component: CollapseExpandButtonComponent
      }, "Collapse all"));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return InputHeaderRaw;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
InputHeaderRaw.defaultProps = {
  ignoreContext: false,
  showExpandAll: false,
  collapsedDefault: true,
  type: 'standard',
  noBg: false,
  shouldToggleCollapseOnHeaderClick: false
};
var InputHeader = Object(_withInputHeaderContext__WEBPACK_IMPORTED_MODULE_7__["withInputHeaderContext"])(InputHeaderRaw);
var _default = InputHeader;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CollapseExpandButtonComponent, "CollapseExpandButtonComponent", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\inputHeader\\InputHeader.tsx");
  reactHotLoader.register(InputHeaderRaw, "InputHeaderRaw", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\inputHeader\\InputHeader.tsx");
  reactHotLoader.register(InputHeader, "InputHeader", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\inputHeader\\InputHeader.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\inputHeader\\InputHeader.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXRIZWFkZXIvSW5wdXRIZWFkZXIudHN4Il0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJyZXF1aXJlIiwiQ29sbGFwc2VFeHBhbmRCdXR0b25Db21wb25lbnQiLCJwcm9wcyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsIklucHV0SGVhZGVyUmF3IiwiY29tcG9uZW50SWQiLCJndWlkIiwic21vb3RoQ29sbGFwc2VEb25lIiwic2V0U3RhdGUiLCJwcmV2aW91c1N0YXRlIiwidG9nZ2xlQ2xpY2siLCJ0b2dnbGUiLCJtYWluQnV0dG9uQ2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiY29udGFpbmVyQ2xpY2siLCJleHBhbmRBbGxDbGljayIsIk9iamVjdCIsImtleXMiLCJzdGF0ZSIsImlucHV0SGVhZGVyQ29udGV4dCIsImNvbXBvbmVudHMiLCJmb3JFYWNoIiwia2V5IiwiY29tcG9uZW50IiwiY29tcG9uZW50QXBpIiwiZXhwYW5kIiwiY29sbGFwc2VBbGxDbGljayIsImNvbGxhcHNlIiwiY29sbGFwc2VkIiwiY29sbGFwc2VkRGVmYXVsdCIsInJlZ2lzdGVySW5wdXRIZWFkZXIiLCJ1bnJlZ2lzdGVySW5wdXRIZWFkZXIiLCJzdGF0ZUNoYW5nZWQiLCJmb3JjZVVwZGF0ZSIsImJpbmQiLCJpZ25vcmVDb250ZXh0IiwiY29sbGFwc2FibGUiLCJnZXRUeXBlQ2xhc3MiLCJzaG93RXhwYW5kQWxsIiwibm9CZyIsInNob3VsZFRvZ2dsZUNvbGxhcHNlT25IZWFkZXJDbGljayIsImhlYWRlckNsYXNzTmFtZSIsInVuZGVmaW5lZCIsImljb24iLCJ0aXRsZSIsInN1YlRpdGxlIiwibWFpbkJ1dHRvbiIsImV4dHJhQnV0dG9ucyIsImV4dHJhQnV0dG9uc0J1dHRvblByb3BzIiwicmVuZGVyRXh0cmFCdXR0b25zIiwiY29sbGFwc2VCdXR0b25zQnV0dG9uUHJvcHMiLCJsZW5ndGgiLCJyZW5kZXJDb2xsYXBzZUV4cGFuZEFsbCIsImNvbnRlbnRDbGFzc05hbWUiLCJhc3NpZ24iLCJ0eXBlIiwiYXJyIiwibWFwIiwiZXh0cmFCdXR0b24iLCJpbmRleCIsImFsbENvbGxhcHNlZCIsImFsbEV4cGFuZGVkIiwiUmVhY3QiLCJkZWZhdWx0UHJvcHMiLCJJbnB1dEhlYWRlciIsIndpdGhJbnB1dEhlYWRlckNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsc0RBQUQsQ0FBMUIsQyxDQUVBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7QUF1Q0EsSUFBTUMsNkJBRUwsR0FBRyxTQUZFQSw2QkFFRixDQUFBQyxLQUFLO0FBQUEsU0FDUDtBQUFHLGFBQVMsRUFBRUEsS0FBSyxDQUFDQyxTQUFwQjtBQUErQixXQUFPLEVBQUVELEtBQUssQ0FBQ0UsT0FBOUM7QUFBdUQsUUFBSSxFQUFDO0FBQTVELEtBQ0dGLEtBQUssQ0FBQ0csUUFEVCxDQURPO0FBQUEsQ0FGVDs7QUFRTyxJQUFNQyxjQUFiO0FBQUE7QUFBQTtBQUFBOztBQWNFLDBCQUFZSixLQUFaLEVBQXdDO0FBQUE7O0FBQUE7O0FBQ3RDLHdGQUFNQSxLQUFOO0FBRHNDLFVBRmpDSyxXQUVpQyxHQUZuQkMsMkRBQUksRUFFZTs7QUFBQSxVQWtNaENDLGtCQWxNZ0MsR0FrTVg7QUFBQSxhQUMzQixNQUFLQyxRQUFMLENBQWMsVUFBQUMsYUFBYTtBQUFBLGVBQUs7QUFBRUYsNEJBQWtCLEVBQUU7QUFBdEIsU0FBTDtBQUFBLE9BQTNCLENBRDJCO0FBQUEsS0FsTVc7O0FBQUEsVUFxTWhDRyxXQXJNZ0MsR0FxTWxCO0FBQUEsYUFBTSxNQUFLQyxNQUFMLEVBQU47QUFBQSxLQXJNa0I7O0FBQUEsVUErT2hDQyxlQS9PZ0MsR0ErT2QsVUFBQ0MsQ0FB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cy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWJzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuY29uc3QgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcclxuXHJcbi8vIE1pc2NcclxuaW1wb3J0ICogYXMgTW9yZUljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL25hdmlnYXRpb24vc3ZnL3Byb2R1Y3Rpb24vaWNfbW9yZV92ZXJ0XzI0cHguc3ZnJztcclxuaW1wb3J0ICogYXMgUGx1c0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL2hhcmR3YXJlL3N2Zy9wcm9kdWN0aW9uL2ljX2tleWJvYXJkX2Fycm93X2Rvd25fMjRweC5zdmcnO1xyXG5pbXBvcnQgeyBCdXR0b25Qcm9wcywgQnV0dG9uLCBCdXR0b25Db21wb25lbnRQcm9wcyB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgZ3VpZCBmcm9tICcuLi91dGlscy9HdWlkJztcclxuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICcuLi9kcm9wZG93bi9Ecm9wZG93bic7XHJcbmltcG9ydCB7IFNtb290aENvbGxhcHNlIH0gZnJvbSAnLi4vc21vb3RoQ29sbGFwc2UvU21vb3RoQ29sbGFwc2UnO1xyXG5pbXBvcnQge1xyXG4gIE9taXRJbnB1dEhlYWRlckNvbnRleHQsXHJcbiAgSW5wdXRIZWFkZXJDb250ZXh0UHJvcHMsXHJcbiAgSW5wdXRIZWFkZXJDb250ZXh0U3RhdGUsXHJcbiAgSW5wdXRIZWFkZXJDb21wb25lbnRDb250ZXh0U3RhdGVcclxufSBmcm9tICcuLi9JbnB1dEhlYWRlci9JbnB1dEhlYWRlckNvbnRleHQnO1xyXG5pbXBvcnQgeyB3aXRoSW5wdXRIZWFkZXJDb250ZXh0IH0gZnJvbSAnLi93aXRoSW5wdXRIZWFkZXJDb250ZXh0JztcclxuaW1wb3J0IHsgSW5uZXJSZWZQcm9wcyB9IGZyb20gJy4vLi4vLi4vdHlwZXMvSW5uZXJSZWZQcm9wcyc7XHJcblxyXG5leHBvcnQgdHlwZSBJbnB1dEhlYWRlclJhd1Byb3BzID0ge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICB0aXRsZT86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIGljb24/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBzdWJUaXRsZT86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIG1haW5CdXR0b24/OiBKU1guRWxlbWVudDtcclxuICBleHRyYUJ1dHRvbnM/OiBKU1guRWxlbWVudFtdO1xyXG4gIGNvbGxhcHNhYmxlPzogYm9vbGVhbjtcclxuICBjb2xsYXBzZWQ/OiBib29sZWFuO1xyXG4gIGNvbGxhcHNlZERlZmF1bHQ/OiBib29sZWFuO1xyXG4gIGlnbm9yZUNvbnRleHQ/OiBib29sZWFuO1xyXG4gIHNob3dFeHBhbmRBbGw/OiBib29sZWFuO1xyXG4gIHR5cGU/OiAnaGVybycgfCAnc3RhbmRhcmQnIHwgJ3NtYWxsJztcclxuICBub0JnPzogYm9vbGVhbjtcclxuICBoZWFkZXJDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgY29udGVudENsYXNzTmFtZT86IHN0cmluZztcclxuICBleHRyYUJ1dHRvbnNCdXR0b25Qcm9wcz86IEJ1dHRvblByb3BzO1xyXG4gIGNvbGxhcHNlQnV0dG9uc0J1dHRvblByb3BzPzogQnV0dG9uUHJvcHM7XHJcbiAgc2hvdWxkVG9nZ2xlQ29sbGFwc2VPbkhlYWRlckNsaWNrPzogYm9vbGVhbjtcclxufSAmIElucHV0SGVhZGVyQ29udGV4dFByb3BzO1xyXG5cclxuZXhwb3J0IHR5cGUgSW5wdXRIZWFkZXJQcm9wcyA9IE9taXRJbnB1dEhlYWRlckNvbnRleHQ8SW5wdXRIZWFkZXJSYXdQcm9wcz4gJlxyXG4gIElubmVyUmVmUHJvcHM8SW5wdXRIZWFkZXJSYXdQcm9wcz47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0SGVhZGVyQXBpIHtcclxuICBleHBhbmQ6ICgpID0+IHZvaWQ7XHJcbiAgY29sbGFwc2U6ICgpID0+IHZvaWQ7XHJcbiAgdG9nZ2xlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0SGVhZGVyU3RhdGUge1xyXG4gIGNvbGxhcHNlZDogYm9vbGVhbjtcclxuICBpbnB1dEhlYWRlckNvbnRleHQ6IElucHV0SGVhZGVyQ29udGV4dFN0YXRlO1xyXG4gIHNtb290aENvbGxhcHNlRG9uZTogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgQ29sbGFwc2VFeHBhbmRCdXR0b25Db21wb25lbnQ6IFJlYWN0LlNGQzxcclxuICBCdXR0b25Db21wb25lbnRQcm9wc1xyXG4+ID0gcHJvcHMgPT4gKFxyXG4gIDxhIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfSBocmVmPVwiI1wiPlxyXG4gICAge3Byb3BzLmNoaWxkcmVufVxyXG4gIDwvYT5cclxuKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dEhlYWRlclJhd1xyXG4gIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJbnB1dEhlYWRlclJhd1Byb3BzLCBJbnB1dEhlYWRlclN0YXRlPlxyXG4gIGltcGxlbWVudHMgSW5wdXRIZWFkZXJBcGkge1xyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBJbnB1dEhlYWRlclByb3BzID0ge1xyXG4gICAgaWdub3JlQ29udGV4dDogZmFsc2UsXHJcbiAgICBzaG93RXhwYW5kQWxsOiBmYWxzZSxcclxuICAgIGNvbGxhcHNlZERlZmF1bHQ6IHRydWUsXHJcbiAgICB0eXBlOiAnc3RhbmRhcmQnLFxyXG4gICAgbm9CZzogZmFsc2UsXHJcbiAgICBzaG91bGRUb2dnbGVDb2xsYXBzZU9uSGVhZGVyQ2xpY2s6IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGNvbXBvbmVudElkID0gZ3VpZCgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogSW5wdXRIZWFkZXJSYXdQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY29sbGFwc2VkOiBwcm9wcy5jb2xsYXBzZWREZWZhdWx0LFxyXG4gICAgICBpbnB1dEhlYWRlckNvbnRleHQ6IHtcclxuICAgICAgICByZWdpc3RlcklucHV0SGVhZGVyOiB0aGlzLnJlZ2lzdGVySW5wdXRIZWFkZXIsXHJcbiAgICAgICAgdW5yZWdpc3RlcklucHV0SGVhZGVyOiB0aGlzLnVucmVnaXN0ZXJJbnB1dEhlYWRlcixcclxuICAgICAgICBzdGF0ZUNoYW5nZWQ6ICgpID0+IHRoaXMuZm9yY2VVcGRhdGUoKSxcclxuICAgICAgICBjb21wb25lbnRzOiB7fVxyXG4gICAgICB9LFxyXG4gICAgICBzbW9vdGhDb2xsYXBzZURvbmU6IHRydWVcclxuICAgIH07XHJcbiAgICB0aGlzLnJlZ2lzdGVySW5wdXRIZWFkZXIgPSB0aGlzLnJlZ2lzdGVySW5wdXRIZWFkZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMudW5yZWdpc3RlcklucHV0SGVhZGVyID0gdGhpcy51bnJlZ2lzdGVySW5wdXRIZWFkZXIuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZXhwYW5kID0gdGhpcy5leHBhbmQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuY29sbGFwc2UgPSB0aGlzLmNvbGxhcHNlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMuaWdub3JlQ29udGV4dCAmJiB0aGlzLnByb3BzLmlucHV0SGVhZGVyQ29udGV4dCkge1xyXG4gICAgICB0aGlzLnByb3BzLmlucHV0SGVhZGVyQ29udGV4dC51bnJlZ2lzdGVySW5wdXRIZWFkZXIodGhpcy5jb21wb25lbnRJZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBpZiAoIXRoaXMucHJvcHMuaWdub3JlQ29udGV4dCAmJiB0aGlzLnByb3BzLmlucHV0SGVhZGVyQ29udGV4dCkge1xyXG4gICAgICB0aGlzLnByb3BzLmlucHV0SGVhZGVyQ29udGV4dC5yZWdpc3RlcklucHV0SGVhZGVyKHRoaXMuY29tcG9uZW50SWQsIHtcclxuICAgICAgICBjb21wb25lbnRJZDogdGhpcy5jb21wb25lbnRJZCxcclxuICAgICAgICBjb21wb25lbnRBcGk6IHtcclxuICAgICAgICAgIGV4cGFuZDogdGhpcy5leHBhbmQsXHJcbiAgICAgICAgICBjb2xsYXBzZTogdGhpcy5jb2xsYXBzZSxcclxuICAgICAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOiB7IC4uLnt9LCAuLi4odGhpcy5wcm9wcyBhcyBJbnB1dEhlYWRlclByb3BzKSB9LFxyXG4gICAgICAgIHN0YXRlOiB7IC4uLnt9LCAuLi50aGlzLnN0YXRlIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhwYW5kKCkge1xyXG4gICAgdGhpcy5wcm9wcy5jb2xsYXBzYWJsZSAmJlxyXG4gICAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAgIHsgY29sbGFwc2VkOiBmYWxzZSwgc21vb3RoQ29sbGFwc2VEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgICgpID0+XHJcbiAgICAgICAgICB0aGlzLnByb3BzLmlucHV0SGVhZGVyQ29udGV4dCAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5pbnB1dEhlYWRlckNvbnRleHQuc3RhdGVDaGFuZ2VkKClcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb2xsYXBzZSgpIHtcclxuICAgIHRoaXMucHJvcHMuY29sbGFwc2FibGUgJiZcclxuICAgICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgICB7IGNvbGxhcHNlZDogdHJ1ZSwgc21vb3RoQ29sbGFwc2VEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgICgpID0+XHJcbiAgICAgICAgICB0aGlzLnByb3BzLmlucHV0SGVhZGVyQ29udGV4dCAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5pbnB1dEhlYWRlckNvbnRleHQuc3RhdGVDaGFuZ2VkKClcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLnByb3BzLmNvbGxhcHNhYmxlICYmXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICAgeyBjb2xsYXBzZWQ6ICF0aGlzLnN0YXRlLmNvbGxhcHNlZCwgc21vb3RoQ29sbGFwc2VEb25lOiBmYWxzZSB9LFxyXG4gICAgICAgICgpID0+XHJcbiAgICAgICAgICB0aGlzLnByb3BzLmlucHV0SGVhZGVyQ29udGV4dCAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5pbnB1dEhlYWRlckNvbnRleHQuc3RhdGVDaGFuZ2VkKClcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgIGBpbnB1dF9faGVhZGVyIGAgK1xyXG4gICAgICAgICAgKHRoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJykgK1xyXG4gICAgICAgICAgJyAnICtcclxuICAgICAgICAgIHRoaXMuZ2V0VHlwZUNsYXNzKClcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICdpbnB1dF9faGVhZGVyX190b3AnLFxyXG4gICAgICAgICAgICB7ICdpbnB1dF9faGVhZGVyX190b3AtLXRhbGwnOiB0aGlzLnByb3BzLnNob3dFeHBhbmRBbGwgfSxcclxuICAgICAgICAgICAgeyAnaW5wdXRfX2hlYWRlcl9fdG9wLS1uby1iZyc6IHRoaXMucHJvcHMubm9CZyB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgJ2lucHV0X19oZWFkZXJfX3RvcC0tY2xpY2thYmxlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY29sbGFwc2FibGUgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvdWxkVG9nZ2xlQ29sbGFwc2VPbkhlYWRlckNsaWNrXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGVhZGVyQ2xhc3NOYW1lXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgcm9sZT17XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY29sbGFwc2FibGUgJiZcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5zaG91bGRUb2dnbGVDb2xsYXBzZU9uSGVhZGVyQ2xpY2tcclxuICAgICAgICAgICAgICA/ICdidXR0b24nXHJcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNvbGxhcHNhYmxlICYmXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2hvdWxkVG9nZ2xlQ29sbGFwc2VPbkhlYWRlckNsaWNrXHJcbiAgICAgICAgICAgICAgPyB0aGlzLnRvZ2dsZUNsaWNrXHJcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2lucHV0X19oZWFkZXJfX3RvcF9faGVhZGVyLWNvbnRhaW5lciAnfT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuaWNvbiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dF9faGVhZGVyX19pY29uIGxpbmUtaGVpZ2h0LS0wXCI+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5pY29ufVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X19oZWFkZXJfX3RpdGxlX19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aXRsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X19oZWFkZXJfX3RpdGxlXCI+e3RoaXMucHJvcHMudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zdWJUaXRsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X19oZWFkZXJfX3N1Yi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zdWJUaXRsZX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X19oZWFkZXJfX3RvcF9fYnV0dG9uLWNvbnRhaW5lclwiIG9uQ2xpY2s9e3RoaXMubWFpbkJ1dHRvbkNsaWNrfT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMubWFpbkJ1dHRvbiAmJiB0aGlzLnByb3BzLm1haW5CdXR0b259XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmV4dHJhQnV0dG9ucyA/IChcclxuICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBibGFuaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBjaXJjdWxhcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICB7Li4udGhpcy5wcm9wcy5leHRyYUJ1dHRvbnNCdXR0b25Qcm9wc31cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb3JlSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNob3dBcnJvdz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJDbGFzc05hbWU9eydsaW5lLWhlaWdodC0tMCd9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycnfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckV4dHJhQnV0dG9ucygpfVxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jb2xsYXBzYWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2lyY3VsYXI9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBibGFuaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlucHV0X19oZWFkZXJfX2NvbGxhcHNlLWJ1dHRvbiBsaW5lLWhlaWdodC0tMCAke1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmNvbGxhcHNlZCA/ICdjb2xsYXBzZWQnIDogJydcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHMuY29sbGFwc2VCdXR0b25zQnV0dG9uUHJvcHN9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNsaWNrfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxQbHVzSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93RXhwYW5kQWxsICYmXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuaW5wdXRIZWFkZXJDb250ZXh0LmNvbXBvbmVudHMpLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJDb2xsYXBzZUV4cGFuZEFsbCgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICdpbnB1dF9faGVhZGVyX19ib3R0b20gJyArXHJcbiAgICAgICAgICAgICh0aGlzLnByb3BzLmNvbnRlbnRDbGFzc05hbWUgPyB0aGlzLnByb3BzLmNvbnRlbnRDbGFzc05hbWUgOiAnJylcclxuICAgICAgICAgIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5jb2xsYXBzYWJsZSA/IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5jb2xsYXBzZWQgJiYgdGhpcy5zdGF0ZS5zbW9vdGhDb2xsYXBzZURvbmVcclxuICAgICAgICAgICAgICAgICAgPyAnc21vb3RoLWNvbGxhcHNlX19jb250YWluZXInXHJcbiAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U21vb3RoQ29sbGFwc2VcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZEhlaWdodD17JzAuMDAwMXB4J31cclxuICAgICAgICAgICAgICAgIGV4cGFuZGVkPXtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb2xsYXBzZWQgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgID8gIXRoaXMucHJvcHMuY29sbGFwc2VkXHJcbiAgICAgICAgICAgICAgICAgICAgOiAhdGhpcy5zdGF0ZS5jb2xsYXBzZWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRW5kPXt0aGlzLnNtb290aENvbGxhcHNlRG9uZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICA8L1Ntb290aENvbGxhcHNlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc21vb3RoQ29sbGFwc2VEb25lID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoeyBzbW9vdGhDb2xsYXBzZURvbmU6IHRydWUgfSkpXHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlQ2xpY2sgPSAoKSA9PiB0aGlzLnRvZ2dsZSgpO1xyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVySW5wdXRIZWFkZXIoXHJcbiAgICBjb21wb25lbnRJZDogc3RyaW5nLFxyXG4gICAgY29tcG9uZW50OiBJbnB1dEhlYWRlckNvbXBvbmVudENvbnRleHRTdGF0ZVxyXG4gICkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+IHtcclxuICAgICAgbGV0IGNvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHByZXZpb3VzU3RhdGUuaW5wdXRIZWFkZXJDb250ZXh0LmNvbXBvbmVudHNcclxuICAgICAgKTtcclxuICAgICAgY29tcG9uZW50c1tjb21wb25lbnRJZF0gPSBjb21wb25lbnQ7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5wdXRIZWFkZXJDb250ZXh0OiB7IC4uLnByZXZpb3VzU3RhdGUuaW5wdXRIZWFkZXJDb250ZXh0LCBjb21wb25lbnRzIH1cclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1bnJlZ2lzdGVySW5wdXRIZWFkZXIoY29tcG9uZW50SWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2aW91c1N0YXRlID0+IHtcclxuICAgICAgbGV0IGNvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICAgIHt9LFxyXG4gICAgICAgIHByZXZpb3VzU3RhdGUuaW5wdXRIZWFkZXJDb250ZXh0LmNvbXBvbmVudHNcclxuICAgICAgKTtcclxuICAgICAgZGVsZXRlIGNvbXBvbmVudHNbY29tcG9uZW50SWRdO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlucHV0SGVhZGVyQ29udGV4dDogeyAuLi5wcmV2aW91c1N0YXRlLmlucHV0SGVhZGVyQ29udGV4dCwgY29tcG9uZW50cyB9XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VHlwZUNsYXNzKCkge1xyXG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcclxuICAgICAgY2FzZSAnaGVybyc6XHJcbiAgICAgICAgcmV0dXJuICdpbnB1dF9faGVhZGVyLS1oZXJvJztcclxuICAgICAgY2FzZSAnc21hbGwnOlxyXG4gICAgICAgIHJldHVybiAnaW5wdXRfX2hlYWRlci0tc21hbGwnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFpbkJ1dHRvbkNsaWNrID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PlxyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG5cclxuICBwcml2YXRlIHJlbmRlckV4dHJhQnV0dG9ucygpIHtcclxuICAgIGxldCBhcnIgPSBbXTtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5leHRyYUJ1dHRvbnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgYXJyID0gdGhpcy5wcm9wcy5leHRyYUJ1dHRvbnM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcnIgPSB0aGlzLnByb3BzLmV4dHJhQnV0dG9ucztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyLm1hcCgoZXh0cmFCdXR0b24sIGluZGV4KSA9PiA8bGkga2V5PXtpbmRleH0+e2V4dHJhQnV0dG9ufTwvbGk+KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyQ29sbGFwc2VFeHBhbmRBbGwoKSB7XHJcbiAgICBsZXQgYWxsQ29sbGFwc2VkID0gdHJ1ZTtcclxuICAgIGxldCBhbGxFeHBhbmRlZCA9IHRydWU7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmlucHV0SGVhZGVyQ29udGV4dC5jb21wb25lbnRzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuc3RhdGUuaW5wdXRIZWFkZXJDb250ZXh0LmNvbXBvbmVudHNba2V5XTtcclxuICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQucHJvcHMuY29sbGFwc2FibGUpIHtcclxuICAgICAgICBpZiAoY29tcG9uZW50LnN0YXRlLmNvbGxhcHNlZCkge1xyXG4gICAgICAgICAgYWxsRXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYWxsQ29sbGFwc2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJpbnB1dF9faGVhZGVyX19leHBhbmQtY29sbGFwc2UtLWFsbFwiXHJcbiAgICAgICAgb25DbGljaz17dGhpcy5jb250YWluZXJDbGlja31cclxuICAgICAgPlxyXG4gICAgICAgIHsoYWxsQ29sbGFwc2VkIHx8ICFhbGxFeHBhbmRlZCkgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBub1JpcHBsZXM9e3RydWV9XHJcbiAgICAgICAgICAgIHNtYWxsPXt0cnVlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2FsbEV4cGFuZGVkIHx8ICFhbGxDb2xsYXBzZWQgPyAnbXItMicgOiAnJ31cclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5leHBhbmRBbGxDbGlja31cclxuICAgICAgICAgICAgYmxhbms9e3RydWV9XHJcbiAgICAgICAgICAgIENvbXBvbmVudD17Q29sbGFwc2VFeHBhbmRCdXR0b25Db21wb25lbnR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEV4cGFuZCBhbGxcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyhhbGxFeHBhbmRlZCB8fCAhYWxsQ29sbGFwc2VkKSAmJiAoXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG5vUmlwcGxlcz17dHJ1ZX1cclxuICAgICAgICAgICAgc21hbGw9e3RydWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY29sbGFwc2VBbGxDbGlja31cclxuICAgICAgICAgICAgYmxhbms9e3RydWV9XHJcbiAgICAgICAgICAgIENvbXBvbmVudD17Q29sbGFwc2VFeHBhbmRCdXR0b25Db21wb25lbnR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENvbGxhcHNlIGFsbFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb250YWluZXJDbGljayA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT5cclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuXHJcbiAgcHJpdmF0ZSBleHBhbmRBbGxDbGljayA9ICgpID0+IHtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuaW5wdXRIZWFkZXJDb250ZXh0LmNvbXBvbmVudHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5zdGF0ZS5pbnB1dEhlYWRlckNvbnRleHQuY29tcG9uZW50c1trZXldO1xyXG4gICAgICBjb21wb25lbnQuY29tcG9uZW50QXBpLmV4cGFuZCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbGxhcHNlQWxsQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmlucHV0SGVhZGVyQ29udGV4dC5jb21wb25lbnRzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuc3RhdGUuaW5wdXRIZWFkZXJDb250ZXh0LmNvbXBvbmVudHNba2V5XTtcclxuICAgICAgY29tcG9uZW50LmNvbXBvbmVudEFwaS5jb2xsYXBzZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXRIZWFkZXIgPSB3aXRoSW5wdXRIZWFkZXJDb250ZXh0PFxyXG4gIElucHV0SGVhZGVyUmF3UHJvcHMsXHJcbiAgSW5wdXRIZWFkZXJQcm9wc1xyXG4+KElucHV0SGVhZGVyUmF3KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0SGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9