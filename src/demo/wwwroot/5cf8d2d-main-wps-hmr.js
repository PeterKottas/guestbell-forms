webpackHotUpdate("main",{

/***/ "./src/lib/validators/UrlValidator.ts":
/*!********************************************!*\
  !*** ./src/lib/validators/UrlValidator.ts ***!
  \********************************************/
/*! exports provided: UrlValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlValidator", function() { return UrlValidator; });
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var UrlValidator =
/*#__PURE__*/
function () {
  function UrlValidator() {
    _classCallCheck(this, UrlValidator);
  }

  _createClass(UrlValidator, [{
    key: "Validate",
    value: function Validate(value, isRequired, addError) {
      if ( // tslint:disable-next-line:max-line-length
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.‌​-]+(:[0-9]+)?|(?:www‌​.|[-;:&=\+\$,\w]+@)[‌​A-Za-z0-9.-]+)((?:\/‌​[\+~%\/.\w-_]*)?\??(‌​?:[-\+=&;%@.\w_]*)#?‌​(?:[\w]*))?)/.test(value)) {
        return true;
      }

      addError('Invalid url');
      return false;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return UrlValidator;
}();
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UrlValidator, "UrlValidator", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\validators\\UrlValidator.ts");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3ZhbGlkYXRvcnMvVXJsVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbIlVybFZhbGlkYXRvciIsInZhbHVlIiwiaXNSZXF1aXJlZCIsImFkZEVycm9yIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDZCQUVJQyxLQUZKLEVBR0lDLFVBSEosRUFJSUMsUUFKSixFQUthO0FBQ1QsV0FDRTtBQUNBLGdNQUEwTEMsSUFBMUwsQ0FDRUgsS0FERixDQUZGLEVBS0U7QUFDQSxlQUFPLElBQVA7QUFDRDs7QUFDREUsY0FBUSxDQUFDLGFBQUQsQ0FBUjtBQUNBLGFBQU8sS0FBUDtBQUNEO0FBaEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7OzswQkFBYUgsWSIsImZpbGUiOiI1Y2Y4ZDJkLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElCYXNlVmFsaWRhdG9yIH0gZnJvbSAnLi9iYXNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVcmxWYWxpZGF0b3IgaW1wbGVtZW50cyBJQmFzZVZhbGlkYXRvciB7XHJcbiAgcHVibGljIFZhbGlkYXRlKFxyXG4gICAgdmFsdWU6IHN0cmluZyxcclxuICAgIGlzUmVxdWlyZWQ6IGJvb2xlYW4sXHJcbiAgICBhZGRFcnJvcjogKGVycm9yOiBzdHJpbmcpID0+IHZvaWRcclxuICApOiBib29sZWFuIHtcclxuICAgIGlmIChcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgICAvKCgoW0EtWmEtel17Myw5fTooPzpcXC9cXC8pPykoPzpbLTs6Jj1cXCtcXCQsXFx3XStAKT9bQS1aYS16MC05LuKAjOKAiy1dKyg6WzAtOV0rKT98KD86d3d34oCM4oCLLnxbLTs6Jj1cXCtcXCQsXFx3XStAKVvigIzigItBLVphLXowLTkuLV0rKSgoPzpcXC/igIzigItbXFwrfiVcXC8uXFx3LV9dKik/XFw/PyjigIzigIs/OlstXFwrPSY7JUAuXFx3X10qKSM/4oCM4oCLKD86W1xcd10qKSk/KS8udGVzdChcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBhZGRFcnJvcignSW52YWxpZCB1cmwnKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==