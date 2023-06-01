"use strict";
self["webpackHotUpdateguestbell_forms"]("main",{

/***/ "./src/demo/ClientApp/components/header/Header.tsx":
/*!*********************************************************!*\
  !*** ./src/demo/ClientApp/components/header/Header.tsx ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/logo.svg */ "./src/demo/ClientApp/assets/images/logo.svg");
/* module decorator */ module = __webpack_require__.hmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
__webpack_require__(/*! ./header.scss */ "./src/demo/ClientApp/components/header/header.scss");


var Header = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Header, _React$PureComponent);
  var _super = _createSuper(Header);
  function Header() {
    _classCallCheck(this, Header);
    return _super.apply(this, arguments);
  }
  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "navbar z-depth-1 p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: "https://guestbell.com",
        className: "navbar__logo text-center p-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
        className: "navbar__logo text-left",
        alt: "Logo"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "navbar__text"
      }, " Forms")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: "https://github.com/PeterKottas/guestbell-forms",
        className: "github-corner",
        "aria-label": "View source on GitHub"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
        width: "80",
        height: "80",
        viewBox: "0 0 250 250",
        "aria-hidden": "true"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        // tslint:disable-next-line: max-line-length
        d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",
        fill: "currentColor",
        className: "octo-arm"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        // tslint:disable-next-line: max-line-length
        d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",
        fill: "currentColor",
        className: "octo-body"
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);

;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(Header, "Header", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\components\\header\\Header.tsx");
})();
;
(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8429b5f946424c0ab0ac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiM2Q5Yzc2NC1tYWluLXdwcy1obXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLG1CQUFPLENBQUMseUVBQWUsQ0FBQztBQUNPO0FBQ2lCO0FBQUEsSUFJM0JHLE1BQU0sMEJBQUFDLG9CQUFBO0VBQUFDLFNBQUEsQ0FBQUYsTUFBQSxFQUFBQyxvQkFBQTtFQUFBLElBQUFFLE1BQUEsR0FBQUMsWUFBQSxDQUFBSixNQUFBO0VBQUEsU0FBQUEsT0FBQTtJQUFBSyxlQUFBLE9BQUFMLE1BQUE7SUFBQSxPQUFBRyxNQUFBLENBQUFHLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLFlBQUEsQ0FBQVIsTUFBQTtJQUFBUyxHQUFBO0lBQUFDLEtBQUEsRUFDekIsU0FBQUMsT0FBQSxFQUFnQjtNQUNkLG9CQUNFYixnREFBQTtRQUFLZSxTQUFTLEVBQUM7TUFBc0IsZ0JBQ25DZixnREFBQTtRQUNFZ0IsSUFBSSxFQUFDLHVCQUF1QjtRQUM1QkQsU0FBUyxFQUFDO01BQThCLGdCQUV4Q2YsZ0RBQUE7UUFBS2lCLEdBQUcsRUFBRWhCLCtEQUFLO1FBQUNjLFNBQVMsRUFBQyx3QkFBd0I7UUFBQ0csR0FBRyxFQUFDO01BQU0sQ0FBRSxDQUFDLGVBQ2hFbEIsZ0RBQUE7UUFBTWUsU0FBUyxFQUFDO01BQWMsR0FBQyxRQUFZLENBQzFDLENBQUMsZUFDSmYsZ0RBQUE7UUFDRWdCLElBQUksRUFBQyxnREFBZ0Q7UUFDckRELFNBQVMsRUFBQyxlQUFlO1FBQ3pCLGNBQVc7TUFBdUIsZ0JBRWxDZixnREFBQTtRQUFLbUIsS0FBSyxFQUFDLElBQUk7UUFBQ0MsTUFBTSxFQUFDLElBQUk7UUFBQ0MsT0FBTyxFQUFDLGFBQWE7UUFBQyxlQUFZO01BQU0sZ0JBQ2xFckIsZ0RBQUE7UUFBTXNCLENBQUMsRUFBQztNQUFtRCxDQUFFLENBQUMsZUFDOUR0QixnREFBQTtRQUNFO1FBQ0FzQixDQUFDLEVBQUMsMExBQTBMO1FBQzVMQyxJQUFJLEVBQUMsY0FBYztRQUNuQlIsU0FBUyxFQUFDO01BQVUsQ0FDckIsQ0FBQyxlQUNGZixnREFBQTtRQUNFO1FBQ0FzQixDQUFDLEVBQUMscWhCQUFxaEI7UUFDdmhCQyxJQUFJLEVBQUMsY0FBYztRQUNuQlIsU0FBUyxFQUFDO01BQVcsQ0FDdEIsQ0FDRSxDQUNKLENBQ0EsQ0FBQztJQUVWO0VBQUM7SUFBQUosR0FBQTtJQUFBQyxLQUFBO0lBQUEsU0FBQVksaUNBQUFiLEdBQUEsRUFBQWMsSUFBQTtNQUFBO01BQUEsS0FBQWQsR0FBQSxJQUFBZSxJQUFBLENBQUFELElBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQXZCLE1BQUE7QUFBQSxFQWxDaUNGLGdEQUFtQjtBQUE1QjtBQUFBO0FBQUE7RUFBQSxJQUFBNkIsY0FBQSxVQUFBQyxvQkFBQSxtQkFBQUEsb0JBQUEsQ0FBQUYsT0FBQSxHQUFBRyxTQUFBO0VBQUEsS0FBQUYsY0FBQTtJQUFBO0VBQUE7RUFBQUEsY0FBQSxDQUFBRyxRQUFBLENBQU45QixNQUFNO0FBQUE7QUFBQTtBQUFBO0VBQUEsSUFBQStCLFdBQUEsVUFBQUgsb0JBQUEsbUJBQUFBLG9CQUFBLENBQUFHLFdBQUEsR0FBQUYsU0FBQTtFQUFBRSxXQUFBLElBQUFBLFdBQUEsQ0FBQUMsTUFBQTtBQUFBOzs7Ozs7OztVQ04zQiIsInNvdXJjZXMiOlsid2VicGFjazovL2d1ZXN0YmVsbC1mb3Jtcy8uL3NyYy9kZW1vL0NsaWVudEFwcC9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovL2d1ZXN0YmVsbC1mb3Jtcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9oZWFkZXIuc2NzcycpO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmcnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIZWFkZXJDdXN0b21Qcm9wcyB7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxIZWFkZXJDdXN0b21Qcm9wcywge30+IHtcclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgei1kZXB0aC0xIHAtMFwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ndWVzdGJlbGwuY29tXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhcl9fbG9nbyB0ZXh0LWNlbnRlciBwLTNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBjbGFzc05hbWU9XCJuYXZiYXJfX2xvZ28gdGV4dC1sZWZ0XCIgYWx0PVwiTG9nb1wiIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXJfX3RleHRcIj4gRm9ybXM8L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1BldGVyS290dGFzL2d1ZXN0YmVsbC1mb3Jtc1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJnaXRodWItY29ybmVyXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJWaWV3IHNvdXJjZSBvbiBHaXRIdWJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdmcgd2lkdGg9XCI4MFwiIGhlaWdodD1cIjgwXCIgdmlld0JveD1cIjAgMCAyNTAgMjUwXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCwwIEwxMTUsMTE1IEwxMzAsMTE1IEwxNDIsMTQyIEwyNTAsMjUwIEwyNTAsMCBaXCIgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICAgIGQ9XCJNMTI4LjMsMTA5LjAgQzExMy44LDk5LjcgMTE5LjAsODkuNiAxMTkuMCw4OS42IEMxMjIuMCw4Mi43IDEyMC41LDc4LjYgMTIwLjUsNzguNiBDMTE5LjIsNzIuMCAxMjMuNCw3Ni4zIDEyMy40LDc2LjMgQzEyNy4zLDgwLjkgMTI1LjUsODcuMyAxMjUuNSw4Ny4zIEMxMjIuOSw5Ny42IDEzMC42LDEwMS45IDEzNC40LDEwMy4yXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvY3RvLWFybVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgICBkPVwiTTExNS4wLDExNS4wIEMxMTQuOSwxMTUuMSAxMTguNywxMTYuNSAxMTkuOCwxMTUuNCBMMTMzLjcsMTAxLjYgQzEzNi45LDk5LjIgMTM5LjksOTguNCAxNDIuMiw5OC42IEMxMzMuOCw4OC4wIDEyNy41LDc0LjQgMTQzLjgsNTguMCBDMTQ4LjUsNTMuNCAxNTQuMCw1MS4yIDE1OS43LDUxLjAgQzE2MC4zLDQ5LjQgMTYzLjIsNDMuNiAxNzEuNCw0MC4xIEMxNzEuNCw0MC4xIDE3Ni4xLDQyLjUgMTc4LjgsNTYuMiBDMTgzLjEsNTguNiAxODcuMiw2MS44IDE5MC45LDY1LjQgQzE5NC41LDY5LjAgMTk3LjcsNzMuMiAyMDAuMSw3Ny42IEMyMTMuOCw4MC4yIDIxNi4zLDg0LjkgMjE2LjMsODQuOSBDMjEyLjcsOTMuMSAyMDYuOSw5Ni4wIDIwNS40LDk2LjYgQzIwNS4xLDEwMi40IDIwMy4wLDEwNy44IDE5OC4zLDExMi41IEMxODEuOSwxMjguOSAxNjguMywxMjIuNSAxNTcuNywxMTQuMSBDMTU3LjksMTE2LjkgMTU2LjcsMTIwLjkgMTUyLjcsMTI0LjkgTDE0MS4wLDEzNi41IEMxMzkuOCwxMzcuNyAxNDEuNiwxNDEuOSAxNDEuOCwxNDEuOCBaXCJcclxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvY3RvLWJvZHlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg0MjliNWY5NDY0MjRjMGFiMGFjXCIpIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJSZWFjdCIsImxvZ28iLCJIZWFkZXIiLCJfUmVhY3QkUHVyZUNvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImQiLCJmaWxsIiwiX19yZWFjdHN0YW5kaW5fX3JlZ2VuZXJhdGVCeUV2YWwiLCJjb2RlIiwiZXZhbCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0IiwicmVhY3RIb3RMb2FkZXIiLCJyZWFjdEhvdExvYWRlckdsb2JhbCIsInVuZGVmaW5lZCIsInJlZ2lzdGVyIiwibGVhdmVNb2R1bGUiLCJtb2R1bGUiXSwic291cmNlUm9vdCI6IiJ9