"use strict";
self["webpackHotUpdateguestbell_forms"]("main",{

/***/ "./src/demo/ClientApp/pages/basic/Basic.tsx":
/*!**************************************************!*\
  !*** ./src/demo/ClientApp/pages/basic/Basic.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgeValidator": () => (/* binding */ AgeValidator),
/* harmony export */   "Basic": () => (/* binding */ Basic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/index */ "./src/lib/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var AgeValidator = /*#__PURE__*/function () {
  function AgeValidator() {
    _classCallCheck(this, AgeValidator);
  }
  _createClass(AgeValidator, [{
    key: "Validate",
    value: function Validate(value, isRequired, addError) {
      var num = Number(value);
      if (!isNaN(num)) {
        if (num <= 0) {
          addError('Not born yet?');
          return false;
        }
        if (num > 122) {
          addError('Older than Jeanne Calment? Really?');
          return false;
        }
        return true;
      } else {
        addError('Invalid age');
      }
      return false;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return AgeValidator;
}();
AgeValidator.instance = new AgeValidator();
var existingTags = [{
  id: 1,
  name: 'Food'
}, {
  id: 2,
  name: 'Drink'
}, {
  id: 3,
  name: 'Beer'
}, {
  id: 4,
  name: 'Wine'
}, {
  id: 5,
  name: 'Gluten free'
}, {
  id: 6,
  name: 'Fruit'
}];
var currencies1 = [{
  label: 'GBP',
  value: 'GBP'
}, {
  label: 'EUR',
  value: 'EUR'
}];
var currencies2 = [{
  label: 'GBP',
  value: 'GBP'
}, {
  label: 'EUR',
  value: 'EUR'
}, {
  label: 'USD',
  value: 'USD'
}];
var currencies3 = [{
  label: 'GBP',
  value: 'GBP',
  forceSelected: true
}, {
  label: 'EUR',
  value: 'EUR'
}, {
  label: 'USD',
  value: 'USD'
}];
var genderValues = [{
  value: 'M',
  label: 'Male'
}, {
  value: 'F',
  label: 'Female'
}];
var tagsEmailTextProps = {
  validators: ['email']
};
var emailValidators = ['email'];
var urlValidators = ['url'];
var customAgeValidator = [AgeValidator.instance];
var customNumberValidator = [new _lib_index__WEBPACK_IMPORTED_MODULE_1__.NumberValidator({
  min: 0
})];
var numberValidator = ['number'];
var types = ['primary', 'warning', 'error', 'info', 'success', 'gray', 'white', 'none'];
var ButtonsShowcase = function ButtonsShowcase(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-2",
    style: {
      backgroundColor: 'rgb(248, 247, 247)',
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, types.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Button, _extends({
      type: item
    }, props), item), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Button, _extends({
      type: item,
      disabled: true
    }, props), "Disabled"));
  }));
};
ButtonsShowcase.defaultProps = {
  className: 'my-2 mr-2'
};
var Basic = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Basic, _React$PureComponent);
  var _super = _createSuper(Basic);
  function Basic(props) {
    var _this;
    _classCallCheck(this, Basic);
    _this = _super.call(this, props);
    _this.initialState = {
      gender: '',
      name: 'Test',
      email: '',
      age: '',
      min1: '',
      checkbox1: true,
      checkbox2: false,
      validateFormSubmit: true,
      food: 'breakfast',
      drink: 'breakfast',
      touchOn: 'focus',
      submitDisablesInputs: true,
      simulateUnmount: false,
      prices1: [],
      prices2: [],
      prices3: [],
      timeSpan: (0,moment__WEBPACK_IMPORTED_MODULE_2__.duration)(0),
      time1: (0,moment__WEBPACK_IMPORTED_MODULE_2__.duration)(0),
      time2: (0,moment__WEBPACK_IMPORTED_MODULE_2__.duration)(0),
      openingHours: {
        times: []
      },
      openingHoursWeek: [],
      openingHoursWeekDay: {
        times: []
      },
      openingHoursSpecial: [],
      website: '',
      tags: [],
      selectedValues: [],
      multipleValues: [{
        value: 'One option'
      }, {
        value: 'Second option'
      }, {
        value: 'Third option'
      }, {
        value: 'one more option'
      }, {
        value: 'rly long last option'
      }],
      multipleReadonly: false,
      textAreaText: '',
      justNumber: 5,
      hideNumber: undefined
    };
    _this.formRef = function (el) {
      return _this.form = el;
    };
    _this.selectedValuesChanged = function (selectedValues) {
      return _this.setState({
        selectedValues: selectedValues
      });
    };
    _this.tagsChanged = function (tags) {
      return _this.setState({
        tags: tags
      });
    };
    _this.multipleReadonlyChecked = function () {
      return _this.setState({
        multipleReadonly: !_this.state.multipleReadonly
      });
    };
    _this.openingHoursSpecialChanged = function (days) {
      return _this.setState({
        openingHoursSpecial: days
      });
    };
    _this.specialDaysAddClick = function () {
      _this.setState({
        openingHoursSpecial: _this.state.openingHoursSpecial.concat([{
          date: undefined,
          times: []
        }])
      }, function () {
        return _this.specialDaysInputHeader.current.expand();
      });
    };
    _this.openingHoursWeekStandardDayChanged = function (day) {
      return _this.setState({
        openingHoursWeekDay: day
      });
    };
    _this.openingHoursWeekChanged = function (days) {
      return _this.setState({
        openingHoursWeek: days
      });
    };
    _this.openingHoursChanged = function (openingHours) {
      return _this.setState({
        openingHours: openingHours
      });
    };
    _this.time2Changed = function (time) {
      return _this.setState({
        time2: time
      });
    };
    _this.time1Changed = function (time) {
      return _this.setState({
        time1: time
      });
    };
    _this.timeSpanChanged = function (timeSpan) {
      return _this.setState({
        timeSpan: timeSpan
      });
    };
    _this.prices2Changed = function (prices) {
      return _this.setState({
        prices2: prices
      });
    };
    _this.prices3Changed = function (prices) {
      return _this.setState({
        prices3: prices
      });
    };
    _this.prices1Changed = function (prices) {
      return _this.setState({
        prices1: prices
      });
    };
    _this.min1Changed = function (e) {
      return _this.setState({
        min1: e.target.value
      });
    };
    _this.justNumberChanged = function (num) {
      return _this.setState({
        justNumber: num
      });
    };
    _this.ageChanged = function (e) {
      return _this.setState({
        age: e.target.value
      });
    };
    _this.websiteChanged = function (e) {
      return _this.setState({
        website: e.target.value
      });
    };
    _this.emailChanged = function (e) {
      return _this.setState({
        email: e.target.value
      });
    };
    _this.textAreaChanged = function (e) {
      return _this.setState({
        textAreaText: e.target.value
      });
    };
    _this.nameChanged = function (e) {
      return _this.setState({
        name: e.target.value
      });
    };
    _this.checkbox2Checked = function () {
      return _this.setState({
        checkbox2: !_this.state.checkbox2
      });
    };
    _this.checkbox1Checked = function () {
      return _this.setState({
        checkbox1: !_this.state.checkbox1
      });
    };
    _this.drinksChecked = function (value) {
      return _this.setState({
        drink: value
      });
    };
    _this.unTouchAll = function (e) {
      e.preventDefault();
      _this.form.unTouchAll();
    };
    _this.simulateUnmountChecked = function () {
      return _this.setState({
        simulateUnmount: !_this.state.simulateUnmount
      });
    };
    _this.disablesInputsChecked = function () {
      return _this.setState({
        submitDisablesInputs: !_this.state.submitDisablesInputs
      });
    };
    _this.touchOnChecked = function (value) {
      return _this.setState({
        touchOn: value
      });
    };
    _this.formValidationToggle = function () {
      return _this.setState({
        validateFormSubmit: !_this.state.validateFormSubmit
      });
    };
    _this.touchAll = function (e) {
      e.preventDefault();
      _this.form.touchAll();
    };
    _this.state = _this.initialState;
    _this.handleGenderChange = _this.handleGenderChange.bind(_assertThisInitialized(_this));
    _this.submitForm = _this.submitForm.bind(_assertThisInitialized(_this));
    _this.dynamicSubmitSuccessForm = _this.dynamicSubmitSuccessForm.bind(_assertThisInitialized(_this));
    _this.dynamicSubmitErrorForm = _this.dynamicSubmitErrorForm.bind(_assertThisInitialized(_this));
    _this.specialDaysInputHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    return _this;
  }
  _createClass(Basic, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var time2Max = (0,moment__WEBPACK_IMPORTED_MODULE_2__.duration)().add(1, 'hour').add(5, 'minutes');
      var time2Min = (0,moment__WEBPACK_IMPORTED_MODULE_2__.duration)().subtract(1, 'hour').subtract(5, 'minutes');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row  mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-lg-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "card-block p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Form, {
        noValidate: true,
        className: "input__form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
        label: "Turn form validation on or off",
        onChecked: this.formValidationToggle,
        checked: this.state.validateFormSubmit,
        title: "Validate form submit"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.RadioContainer, {
        title: "Touch on"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Radio, {
        name: "touch",
        value: "blur",
        label: "Blur",
        result: this.state.touchOn,
        onChecked: this.touchOnChecked
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Radio, {
        name: "touch",
        value: "focus",
        label: "Focus",
        result: this.state.touchOn,
        onChecked: this.touchOnChecked
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
        label: "Disables inputs",
        onChecked: this.disablesInputsChecked,
        checked: this.state.submitDisablesInputs,
        title: "Submit"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
        label: "Unmount",
        onChecked: this.simulateUnmountChecked,
        checked: this.state.simulateUnmount,
        title: "Simulate"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row my-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "col-lg-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: 'card '
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "card-block p-0"
      }, !this.state.simulateUnmount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Form, {
        noValidate: true,
        ref: this.formRef,
        onSubmit: this.submitForm
        /*extraComponents={{
          test: {
            // tslint:disable-next-line: no-any
            componentApi: {} as any,
            validation: {
              isValid: false,
              errors: ['Test'],
              name: 'Test',
            },
          },
        }}*/
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.InputHeader, {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          className: "material-icons md-48"
        }, "edit"),
        title: 'Example form',
        subTitle: "And this is subtitle. There's also icon on the left",
        showExpandAll: true,
        collapsible: true,
        collapsedDefault: false,
        mainButton: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Submit, {
          type: 'primary',
          onClick: this.submitForm,
          validateForm: this.state.validateFormSubmit
        }, "Submit"),
        extraButtons: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Button, {
          key: 1,
          dropdown: true,
          onClick: this.touchAll
        }, "Touch all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Button, {
          key: 2,
          dropdown: true,
          onClick: this.unTouchAll
        }, "Un-touch all")],
        shouldToggleCollapseOnHeaderClick: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.RadioContainer, {
        title: "Drinks"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Radio, {
        name: "drink",
        value: "wine",
        label: "Wine",
        result: this.state.drink,
        onChecked: this.drinksChecked
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Radio, {
        name: "drink",
        value: "whiskey",
        label: "Whiskey",
        result: this.state.drink,
        onChecked: this.drinksChecked
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Radio, {
        name: "drink",
        value: "water",
        label: "Water",
        result: this.state.drink,
        onChecked: this.drinksChecked
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.RadioContainer, {
        title: "Drinks (horizontal)",
        horizontal: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Radio, {
        name: "drink2",
        value: "wine",
        label: "Wine",
        result: this.state.drink,
        onChecked: this.drinksChecked
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Radio, {
        name: "drink2",
        value: "whiskey",
        label: "Whiskey",
        result: this.state.drink,
        onChecked: this.drinksChecked
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Radio, {
        name: "drink2",
        value: "water",
        label: "Water",
        result: this.state.drink,
        onChecked: this.drinksChecked
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
        required: true,
        label: "Smart",
        onChecked: this.checkbox1Checked,
        checked: this.state.checkbox1,
        title: "Dress code",
        tooltip: "With tooltip"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
        label: "(optional)",
        onChecked: this.checkbox2Checked,
        checked: this.state.checkbox2,
        title: "Wallet parking"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Text, {
        touchOn: this.state.touchOn,
        required: true,
        label: "Your name",
        onChange: this.nameChanged,
        value: this.state.name,
        title: "Name",
        showClearButton: true,
        infoText: "This is some info text"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: function onClick() {
          return _this2.setState({
            name: null
          });
        }
      }, "Test"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "px-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Text, {
        touchOn: this.state.touchOn,
        required: true,
        label: "Your name (no title)",
        onChange: this.nameChanged,
        value: this.state.name,
        tooltip: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
          className: "m-0"
        }, "This is some help text. It can also do ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "bold"), ' ', "and other stuff.")
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Text, {
        touchOn: this.state.touchOn,
        label: "Your name",
        onChange: this.nameChanged,
        value: this.state.name,
        title: "Name readonly",
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Select, {
        touchOn: this.state.touchOn,
        label: 'Your gender',
        values: genderValues,
        onChange: this.handleGenderChange,
        value: this.state.gender,
        title: "Gender"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.TextArea, {
        touchOn: this.state.touchOn,
        required: true,
        label: "Textarea",
        onChange: this.textAreaChanged,
        value: this.state.textAreaText,
        title: "Textarea"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.TextArea, {
        touchOn: this.state.touchOn,
        label: "Textarea",
        onChange: this.textAreaChanged,
        value: this.state.textAreaText,
        title: "Readonly",
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.InputHeader, {
        title: 'Some collapsed stuff',
        collapsible: true,
        shouldToggleCollapseOnHeaderClick: true,
        subTitle: "Helpful text that describes what's collapsed here",
        tooltip: "With tooltip"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Text, {
        touchOn: this.state.touchOn,
        validators: emailValidators,
        required: false,
        label: "Email",
        value: this.state.email,
        onChange: this.emailChanged,
        title: "Your email"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Text, {
        touchOn: this.state.touchOn,
        readOnly: true,
        value: 'You can select me but I am readonly',
        title: "Readonly"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Text, {
        touchOn: this.state.touchOn,
        validators: urlValidators,
        required: false,
        label: "Website",
        value: this.state.website,
        onChange: this.websiteChanged,
        title: "Your website"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Text, {
        touchOn: this.state.touchOn,
        customValidators: customAgeValidator,
        label: "Your age (optional)",
        value: this.state.age,
        onChange: this.ageChanged,
        title: "Age",
        type: "number"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Text, {
        touchOn: this.state.touchOn,
        customValidators: customNumberValidator,
        label: "Min 1",
        value: this.state.min1,
        onChange: this.min1Changed,
        title: "Number"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: function onClick() {
          return _this2.setState({
            justNumber: 5
          });
        }
      }, "Reset just number to 5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
        checked: this.state.hideNumber,
        onChecked: function onChecked(e) {
          return _this2.setState({
            hideNumber: e.target.checked
          });
        },
        label: "Hide/show number inputs",
        supportsIndeterminate: true
      }), !this.state.hideNumber && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Text, {
        touchOn: this.state.touchOn,
        validators: numberValidator,
        label: "Just number (required) - ".concat(this.state.justNumber),
        number: this.state.justNumber,
        onNumberChange: this.justNumberChanged,
        title: "Number",
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Text, {
        touchOn: this.state.touchOn,
        validators: numberValidator,
        label: "Just number - ".concat(this.state.justNumber),
        number: this.state.justNumber,
        onNumberChange: this.justNumberChanged,
        title: "Number"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Money, {
        currencies: currencies1,
        prices: this.state.prices1,
        touchOn: this.state.touchOn,
        required: true,
        onPricesChange: this.prices1Changed,
        title: "Price",
        disableDelete: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Money, {
        currencies: currencies2,
        prices: this.state.prices2,
        allowMultiple: true,
        touchOn: this.state.touchOn,
        required: false,
        onPricesChange: this.prices2Changed,
        title: "Price multiple"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Money, {
        currencies: currencies3,
        prices: this.state.prices3,
        allowMultiple: true,
        touchOn: this.state.touchOn,
        required: false,
        onPricesChange: this.prices3Changed,
        label: "Price multiple forced"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Time, {
        touchOn: this.state.touchOn,
        time: this.state.time1,
        timeChange: this.time1Changed,
        title: "Time"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Time, {
        max: time2Max,
        min: time2Min,
        touchOn: this.state.touchOn,
        time: this.state.time2,
        timeChange: this.time2Changed,
        label: "With Min/Max"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Time, {
        max: time2Max,
        min: time2Min,
        touchOn: this.state.touchOn,
        time: this.state.time2,
        timeChange: this.time2Changed,
        label: "With Min/Max"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.TimeSpan, {
        touchOn: this.state.touchOn,
        timeSpan: this.state.timeSpan,
        timeSpanChange: this.timeSpanChanged,
        title: "Time span",
        validUnits: _lib_index__WEBPACK_IMPORTED_MODULE_1__.TimeSpanUnit.Hour | _lib_index__WEBPACK_IMPORTED_MODULE_1__.TimeSpanUnit.Minute
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.TimeSpan, {
        touchOn: this.state.touchOn,
        timeSpan: this.state.timeSpan,
        timeSpanChange: this.timeSpanChanged,
        label: "Time span",
        validUnits: _lib_index__WEBPACK_IMPORTED_MODULE_1__.TimeSpanUnit.Hour | _lib_index__WEBPACK_IMPORTED_MODULE_1__.TimeSpanUnit.Minute
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.OpeningHoursDay, {
        label: 'Opening hours sample day',
        touchOn: this.state.touchOn,
        required: false,
        onOpeningHoursChange: this.openingHoursChanged,
        openingHours: this.state.openingHours,
        title: "Opening hours",
        useCapacity: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.InputHeader, {
        title: 'Opening hours',
        collapsible: true,
        mainButton: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Button, {
          type: 'primary'
        }, "Hero button"),
        extraButtons: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Button, {
          key: 1,
          dropdown: true
        }, "Extra button 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Button, {
          key: 2,
          dropdown: true
        }, "Extra button 2")]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.OpeningHoursWeek, {
        touchOn: this.state.touchOn,
        required: false,
        onDaysChange: this.openingHoursWeekChanged,
        days: this.state.openingHoursWeek,
        standardDay: this.state.openingHoursWeekDay,
        onStandardDayChange: this.openingHoursWeekStandardDayChanged,
        useCapacity: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.InputHeader, {
        className: '',
        title: 'Special days opening hours',
        collapsible: true,
        ref: this.specialDaysInputHeader,
        mainButton: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Button, {
          type: 'primary',
          onClick: this.specialDaysAddClick
        }, "Add")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.OpeningHoursSpecial, {
        touchOn: this.state.touchOn,
        required: false,
        onDaysChange: this.openingHoursSpecialChanged,
        days: this.state.openingHoursSpecial,
        placeholder: "Choose date"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.InputHeader, {
        className: '',
        title: 'Buttons',
        mainButton: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Button, {
          type: 'primary'
        }, "Hero button")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        className: "text-center"
      }, "Standard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonsShowcase, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        className: "text-center"
      }, "No shadow"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonsShowcase, {
        noShadow: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        className: "text-center"
      }, "Hero"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonsShowcase, {
        hero: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        className: "text-center"
      }, "Outlined"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonsShowcase, {
        outlined: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        className: "text-center"
      }, "Blank"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonsShowcase, {
        blank: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        className: "text-center"
      }, "Small"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonsShowcase, {
        small: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        className: "text-center"
      }, "Circular"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonsShowcase, {
        circular: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        className: "text-center"
      }, "Dropdown"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonsShowcase, {
        dropdown: true,
        className: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        className: "text-center"
      }, "Unobtrusive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonsShowcase, {
        unobtrusive: true,
        className: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        className: "text-center"
      }, "Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonsShowcase, {
        text: true,
        className: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        className: "text-center"
      }, "Disable after click"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonsShowcase, {
        disableAfterClickMs: 2000,
        disableAfterClick: true
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.InputHeader, {
        className: '',
        title: 'Multiple',
        collapsible: true,
        collapsedDefault: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Checkbox
      // label="Multiple readonly"
      , {
        onChecked: this.multipleReadonlyChecked,
        checked: this.state.multipleReadonly,
        title: "Multiple readonly"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Tags, {
        title: "Tags example",
        label: "And label",
        textProps: {
          placeholder: 'With placeholder'
        },
        readOnly: this.state.multipleReadonly,
        allowNew: true,
        tags: this.state.tags,
        onTagsChanged: this.tagsChanged
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Tags, {
        title: "Tags suggestions",
        label: "Choose or create tags",
        fetchExistingTags: function fetchExistingTags(startsWith) {
          return new Promise(function (resolve) {
            return setTimeout(function () {
              return resolve(existingTags.filter(function (e) {
                return e.name.includes(startsWith);
              }));
            }, 1000);
          });
        },
        suggestionsEmptyComponent: 'Not found',
        readOnly: this.state.multipleReadonly,
        tags: this.state.tags,
        onTagsChanged: this.tagsChanged,
        filterExistingTags: function filterExistingTags(t, tags) {
          return tags;
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Tags, {
        title: "Tags suggestions",
        label: "Choose tags",
        readOnly: this.state.multipleReadonly,
        allowNew: false,
        maxTags: 2,
        existingTags: existingTags,
        tags: this.state.tags,
        onTagsChanged: this.tagsChanged,
        showChips: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Tags, {
        title: "Tags max 3",
        maxTags: 2,
        readOnly: this.state.multipleReadonly,
        allowNew: true,
        tags: this.state.tags,
        onTagsChanged: this.tagsChanged,
        showChips: true,
        onTagClick: function onTagClick(t) {
          return console.warn(t);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Tags, {
        title: "Tags only email",
        label: "With label",
        maxTags: 2,
        allowNew: true,
        readOnly: this.state.multipleReadonly,
        tags: this.state.tags,
        onTagsChanged: this.tagsChanged,
        suggestionsEmptyComponent: null,
        textProps: tagsEmailTextProps
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Select, {
        required: true,
        label: "One or more",
        title: "Multiselect",
        multiple: true,
        defaultEmpty: true,
        readOnly: this.state.multipleReadonly,
        selectedValues: this.state.selectedValues,
        values: this.state.multipleValues,
        onSelectedValuesChange: this.selectedValuesChanged
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: function onClick(e) {
          return _this2.setState({
            selectedValues: [{
              value: 'One option'
            }]
          });
        }
      }, "Test")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.InputHeader, {
        className: '',
        title: 'Dropdown',
        collapsible: true,
        collapsedDefault: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "p-3 buttons-row d-flex"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
        className: "position-relative mr-3",
        header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          className: "material-icons"
        }, "notifications"),
        notificationCount: 5,
        submenuClassName: "p-2",
        showArrow: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonsShowcase, {
        dropdown: true,
        className: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
        className: "position-relative mr-3",
        header: 'String header',
        notificationCount: 5,
        submenuClassName: "p-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
        className: "position-relative",
        header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.Button, {
          type: "primary"
        }, "Function header"),
        showArrow: false,
        submenuClassName: "p-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Item")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.FormValidationSummary, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "row justify-content-center align-items-center my-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.DynamicSubmit, {
        submitDisablesInputs: this.state.submitDisablesInputs,
        className: "ml-2",
        type: 'primary',
        normalClassName: "",
        errorClassName: "btn-danger",
        submittingClassName: "btn-secondary",
        errorChildren: 'Error',
        submittingChildren: 'Working on it',
        onClick: this.dynamicSubmitSuccessForm,
        validateForm: this.state.validateFormSubmit
      }, "Ajax Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_lib_index__WEBPACK_IMPORTED_MODULE_1__.DynamicSubmit, {
        submitDisablesInputs: this.state.submitDisablesInputs,
        className: "ml-2",
        normalClassName: "",
        type: 'primary',
        submittingClassName: "btn-secondary",
        successClassName: "btn-success",
        submittingChildren: 'Working on it',
        successChildren: 'That worked',
        onClick: this.dynamicSubmitErrorForm,
        validateForm: this.state.validateFormSubmit
      }, "Ajax Success")))))))));
    }
  }, {
    key: "handleGenderChange",
    value: function handleGenderChange(e) {
      var val = e.target.value;
      if (val === 'M' || val === 'F') {
        this.setState({
          gender: val
        });
      }
    }
  }, {
    key: "submitForm",
    value: function submitForm(e) {
      e && e.preventDefault();
      this.setState(this.initialState);
    }
  }, {
    key: "dynamicSubmitSuccessForm",
    value: function dynamicSubmitSuccessForm(e, submitting, error, success, reset) {
      e.preventDefault();
      submitting();
      setTimeout(function () {
        error();
        setTimeout(function () {
          return reset();
        }, 3000);
      }, 1000);
    }
  }, {
    key: "dynamicSubmitErrorForm",
    value: function dynamicSubmitErrorForm(e, submitting, error, success, reset) {
      e.preventDefault();
      submitting();
      setTimeout(function () {
        success();
        setTimeout(function () {
          return reset();
        }, 3000);
      }, 1000);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Basic;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
var _default = Basic;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;
(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;
  if (!reactHotLoader) {
    return;
  }
  reactHotLoader.register(AgeValidator, "AgeValidator", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(existingTags, "existingTags", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(currencies1, "currencies1", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(currencies2, "currencies2", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(currencies3, "currencies3", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(genderValues, "genderValues", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(tagsEmailTextProps, "tagsEmailTextProps", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(emailValidators, "emailValidators", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(urlValidators, "urlValidators", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(customAgeValidator, "customAgeValidator", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(customNumberValidator, "customNumberValidator", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(numberValidator, "numberValidator", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(types, "types", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(ButtonsShowcase, "ButtonsShowcase", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(Basic, "Basic", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\demo\\ClientApp\\pages\\basic\\Basic.tsx");
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
/******/ 	__webpack_require__.h = () => ("ec107f74892a15bbdb4b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQW9CO0VBQUFvTixjQUFBLENBQUFHLFFBQUEsQ0FVcEJ0TixlQUF1QztFQUFBbU4sY0FBQSxDQUFBRyxRQUFBLENBNEJoQ3RNLEtBQUs7RUFBQW1NLGNBQUEsQ0FBQUcsUUFBQSxDQUFBSixRQUFBO0FBQUE7QUFBQTtBQUFBO0VBQUEsSUFBQUssV0FBQSxVQUFBSCxvQkFBQSxtQkFBQUEsb0JBQUEsQ0FBQUcsV0FBQSxHQUFBaEssU0FBQTtFQUFBZ0ssV0FBQSxJQUFBQSxXQUFBLENBQUFDLE1BQUE7QUFBQTs7Ozs7Ozs7VUMzTWxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3Vlc3RiZWxsLWZvcm1zLy4vc3JjL2RlbW8vQ2xpZW50QXBwL3BhZ2VzL2Jhc2ljL0Jhc2ljLnRzeCIsIndlYnBhY2s6Ly9ndWVzdGJlbGwtZm9ybXMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBEcm9wZG93bixcclxuICBGb3JtLFxyXG4gIFRpbWUsXHJcbiAgVGV4dCxcclxuICBTZWxlY3QsXHJcbiAgU3VibWl0LFxyXG4gIER5bmFtaWNTdWJtaXQsXHJcbiAgQ2hlY2tib3gsXHJcbiAgUmFkaW8sXHJcbiAgUmFkaW9Db250YWluZXIsXHJcbiAgTW9uZXksXHJcbiAgT3BlbmluZ0hvdXJzRGF5LFxyXG4gIE1vbmV5V2l0aEN1cnJlbmN5LFxyXG4gIE9wZW5pbmdIb3Vyc0RheU9iaixcclxuICBPcGVuaW5nSG91cnNXZWVrLFxyXG4gIE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmosXHJcbiAgT3BlbmluZ0hvdXJzU3BlY2lhbCxcclxuICBJbnB1dEhlYWRlcixcclxuICBCdXR0b24sXHJcbiAgQnV0dG9uVHlwZXMsXHJcbiAgVGFncyxcclxuICBUYWcsXHJcbiAgTnVtYmVyVmFsaWRhdG9yLFxyXG4gIFRleHRBcmVhLFxyXG4gIE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmosXHJcbiAgU2VsZWN0VmFsdWUsXHJcbiAgVGV4dFByb3BzLFxyXG4gIFZhbGlkYXRvclR5cGVzLFxyXG4gIElCYXNlVmFsaWRhdG9yLFxyXG4gIEJ1dHRvblByb3BzLFxyXG4gIEZvcm1WYWxpZGF0aW9uU3VtbWFyeSxcclxuICBJbnB1dEhlYWRlclJhdyxcclxuICBUaW1lU3BhbixcclxuICBUaW1lU3BhblVuaXQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2luZGV4JztcclxuaW1wb3J0IHsgRHVyYXRpb24sIGR1cmF0aW9uIH0gZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzaWNQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNpY1N0YXRlIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZ2VuZGVyOiAnTScgfCAnRicgfCAnJztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGFnZTogc3RyaW5nO1xyXG4gIG1pbjE6IHN0cmluZztcclxuICBoaWRlTnVtYmVyOiBib29sZWFuO1xyXG4gIGp1c3ROdW1iZXI6IG51bWJlcjtcclxuICBjaGVja2JveDE6IGJvb2xlYW47XHJcbiAgY2hlY2tib3gyOiBib29sZWFuO1xyXG4gIHZhbGlkYXRlRm9ybVN1Ym1pdDogYm9vbGVhbjtcclxuICBmb29kOiBzdHJpbmc7XHJcbiAgZHJpbms6IHN0cmluZztcclxuICB0b3VjaE9uOiAnYmx1cicgfCAnZm9jdXMnO1xyXG4gIHN1Ym1pdERpc2FibGVzSW5wdXRzOiBib29sZWFuO1xyXG4gIHNpbXVsYXRlVW5tb3VudDogYm9vbGVhbjtcclxuICBwcmljZXMxOiBNb25leVdpdGhDdXJyZW5jeVtdO1xyXG4gIHByaWNlczI6IE1vbmV5V2l0aEN1cnJlbmN5W107XHJcbiAgcHJpY2VzMzogTW9uZXlXaXRoQ3VycmVuY3lbXTtcclxuICB0aW1lMTogRHVyYXRpb247XHJcbiAgdGltZTI6IER1cmF0aW9uO1xyXG4gIHRpbWVTcGFuOiBEdXJhdGlvbjtcclxuICBvcGVuaW5nSG91cnM6IE9wZW5pbmdIb3Vyc0RheU9iajtcclxuICBvcGVuaW5nSG91cnNXZWVrOiBPcGVuaW5nSG91cnNXZWVrRGF5T2JqW107XHJcbiAgb3BlbmluZ0hvdXJzV2Vla0RheTogT3BlbmluZ0hvdXJzRGF5T2JqO1xyXG4gIG9wZW5pbmdIb3Vyc1NwZWNpYWw6IE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmpbXTtcclxuICB3ZWJzaXRlOiBzdHJpbmc7XHJcbiAgdGFnczogVGFnW107XHJcbiAgc2VsZWN0ZWRWYWx1ZXM6IFNlbGVjdFZhbHVlW107XHJcbiAgbXVsdGlwbGVWYWx1ZXM6IFNlbGVjdFZhbHVlW107XHJcbiAgbXVsdGlwbGVSZWFkb25seTogYm9vbGVhbjtcclxuICB0ZXh0QXJlYVRleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFnZVZhbGlkYXRvciB7XHJcbiAgcHVibGljIHN0YXRpYyBpbnN0YW5jZSA9IG5ldyBBZ2VWYWxpZGF0b3IoKTtcclxuICBwdWJsaWMgVmFsaWRhdGUoXHJcbiAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgaXNSZXF1aXJlZDogYm9vbGVhbixcclxuICAgIGFkZEVycm9yOiAoZXJyb3I6IHN0cmluZykgPT4gdm9pZFxyXG4gICk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IG51bSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICBpZiAoIWlzTmFOKG51bSkpIHtcclxuICAgICAgaWYgKG51bSA8PSAwKSB7XHJcbiAgICAgICAgYWRkRXJyb3IoJ05vdCBib3JuIHlldD8nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bSA+IDEyMikge1xyXG4gICAgICAgIGFkZEVycm9yKCdPbGRlciB0aGFuIEplYW5uZSBDYWxtZW50PyBSZWFsbHk/Jyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWRkRXJyb3IoJ0ludmFsaWQgYWdlJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBleGlzdGluZ1RhZ3M6IFRhZ1tdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogJ0Zvb2QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiAnRHJpbmsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiAnQmVlcicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6ICdXaW5lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgbmFtZTogJ0dsdXRlbiBmcmVlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgbmFtZTogJ0ZydWl0JyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VycmVuY2llczEgPSBbXHJcbiAgeyBsYWJlbDogJ0dCUCcsIHZhbHVlOiAnR0JQJyB9LFxyXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUicgfSxcclxuXTtcclxuXHJcbmNvbnN0IGN1cnJlbmNpZXMyID0gW1xyXG4gIHsgbGFiZWw6ICdHQlAnLCB2YWx1ZTogJ0dCUCcgfSxcclxuICB7IGxhYmVsOiAnRVVSJywgdmFsdWU6ICdFVVInIH0sXHJcbiAgeyBsYWJlbDogJ1VTRCcsIHZhbHVlOiAnVVNEJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VycmVuY2llczMgPSBbXHJcbiAgeyBsYWJlbDogJ0dCUCcsIHZhbHVlOiAnR0JQJywgZm9yY2VTZWxlY3RlZDogdHJ1ZSB9LFxyXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUicgfSxcclxuICB7IGxhYmVsOiAnVVNEJywgdmFsdWU6ICdVU0QnIH0sXHJcbl07XHJcblxyXG5jb25zdCBnZW5kZXJWYWx1ZXMgPSBbXHJcbiAgeyB2YWx1ZTogJ00nLCBsYWJlbDogJ01hbGUnIH0sXHJcbiAgeyB2YWx1ZTogJ0YnLCBsYWJlbDogJ0ZlbWFsZScgfSxcclxuXTtcclxuXHJcbmNvbnN0IHRhZ3NFbWFpbFRleHRQcm9wczogVGV4dFByb3BzID0ge1xyXG4gIHZhbGlkYXRvcnM6IFsnZW1haWwnXSxcclxufTtcclxuXHJcbmNvbnN0IGVtYWlsVmFsaWRhdG9yczogVmFsaWRhdG9yVHlwZXNbXSA9IFsnZW1haWwnXTtcclxuXHJcbmNvbnN0IHVybFZhbGlkYXRvcnM6IFZhbGlkYXRvclR5cGVzW10gPSBbJ3VybCddO1xyXG5cclxuY29uc3QgY3VzdG9tQWdlVmFsaWRhdG9yOiBJQmFzZVZhbGlkYXRvcltdID0gW0FnZVZhbGlkYXRvci5pbnN0YW5jZV07XHJcblxyXG5jb25zdCBjdXN0b21OdW1iZXJWYWxpZGF0b3I6IElCYXNlVmFsaWRhdG9yW10gPSBbXHJcbiAgbmV3IE51bWJlclZhbGlkYXRvcih7IG1pbjogMCB9KSxcclxuXTtcclxuXHJcbmNvbnN0IG51bWJlclZhbGlkYXRvcjogVGV4dFByb3BzWyd2YWxpZGF0b3JzJ10gPSBbJ251bWJlciddO1xyXG5cclxuY29uc3QgdHlwZXM6IEJ1dHRvblR5cGVzW10gPSBbXHJcbiAgJ3ByaW1hcnknLFxyXG4gICd3YXJuaW5nJyxcclxuICAnZXJyb3InLFxyXG4gICdpbmZvJyxcclxuICAnc3VjY2VzcycsXHJcbiAgJ2dyYXknLFxyXG4gICd3aGl0ZScsXHJcbiAgJ25vbmUnLFxyXG5dO1xyXG5jb25zdCBCdXR0b25zU2hvd2Nhc2U6IFJlYWN0LlNGQzxCdXR0b25Qcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJweC0yXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ4LCAyNDcsIDI0NyknLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7dHlwZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT17aXRlbX0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gdHlwZT17aXRlbX0gZGlzYWJsZWQ9e3RydWV9IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIERpc2FibGVkXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5CdXR0b25zU2hvd2Nhc2UuZGVmYXVsdFByb3BzID0ge1xyXG4gIGNsYXNzTmFtZTogJ215LTIgbXItMicsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzaWMgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEJhc2ljUHJvcHMsIEJhc2ljU3RhdGU+IHtcclxuICBwcml2YXRlIGZvcm06IEZvcm07XHJcblxyXG4gIHByaXZhdGUgc3BlY2lhbERheXNJbnB1dEhlYWRlcjogUmVhY3QuUmVmT2JqZWN0PElucHV0SGVhZGVyUmF3PjtcclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsU3RhdGU6IEJhc2ljU3RhdGUgPSB7XHJcbiAgICBnZW5kZXI6ICcnLFxyXG4gICAgbmFtZTogJ1Rlc3QnLFxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgYWdlOiAnJyxcclxuICAgIG1pbjE6ICcnLFxyXG4gICAgY2hlY2tib3gxOiB0cnVlLFxyXG4gICAgY2hlY2tib3gyOiBmYWxzZSxcclxuICAgIHZhbGlkYXRlRm9ybVN1Ym1pdDogdHJ1ZSxcclxuICAgIGZvb2Q6ICdicmVha2Zhc3QnLFxyXG4gICAgZHJpbms6ICdicmVha2Zhc3QnLFxyXG4gICAgdG91Y2hPbjogJ2ZvY3VzJyxcclxuICAgIHN1Ym1pdERpc2FibGVzSW5wdXRzOiB0cnVlLFxyXG4gICAgc2ltdWxhdGVVbm1vdW50OiBmYWxzZSxcclxuICAgIHByaWNlczE6IFtdLFxyXG4gICAgcHJpY2VzMjogW10sXHJcbiAgICBwcmljZXMzOiBbXSxcclxuICAgIHRpbWVTcGFuOiBkdXJhdGlvbigwKSxcclxuICAgIHRpbWUxOiBkdXJhdGlvbigwKSxcclxuICAgIHRpbWUyOiBkdXJhdGlvbigwKSxcclxuICAgIG9wZW5pbmdIb3Vyczoge1xyXG4gICAgICB0aW1lczogW10sXHJcbiAgICB9LFxyXG4gICAgb3BlbmluZ0hvdXJzV2VlazogW10sXHJcbiAgICBvcGVuaW5nSG91cnNXZWVrRGF5OiB7XHJcbiAgICAgIHRpbWVzOiBbXSxcclxuICAgIH0sXHJcbiAgICBvcGVuaW5nSG91cnNTcGVjaWFsOiBbXSxcclxuICAgIHdlYnNpdGU6ICcnLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBzZWxlY3RlZFZhbHVlczogW10sXHJcbiAgICBtdWx0aXBsZVZhbHVlczogW1xyXG4gICAgICB7IHZhbHVlOiAnT25lIG9wdGlvbicgfSxcclxuICAgICAgeyB2YWx1ZTogJ1NlY29uZCBvcHRpb24nIH0sXHJcbiAgICAgIHsgdmFsdWU6ICdUaGlyZCBvcHRpb24nIH0sXHJcbiAgICAgIHsgdmFsdWU6ICdvbmUgbW9yZSBvcHRpb24nIH0sXHJcbiAgICAgIHsgdmFsdWU6ICdybHkgbG9uZyBsYXN0IG9wdGlvbicgfSxcclxuICAgIF0sXHJcbiAgICBtdWx0aXBsZVJlYWRvbmx5OiBmYWxzZSxcclxuICAgIHRleHRBcmVhVGV4dDogJycsXHJcbiAgICBqdXN0TnVtYmVyOiA1LFxyXG4gICAgaGlkZU51bWJlcjogdW5kZWZpbmVkLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBCYXNpY1Byb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGU7XHJcbiAgICB0aGlzLmhhbmRsZUdlbmRlckNoYW5nZSA9IHRoaXMuaGFuZGxlR2VuZGVyQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtID0gdGhpcy5keW5hbWljU3VibWl0U3VjY2Vzc0Zvcm0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHluYW1pY1N1Ym1pdEVycm9yRm9ybSA9IHRoaXMuZHluYW1pY1N1Ym1pdEVycm9yRm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zcGVjaWFsRGF5c0lucHV0SGVhZGVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgbGV0IHRpbWUyTWF4ID0gZHVyYXRpb24oKS5hZGQoMSwgJ2hvdXInKS5hZGQoNSwgJ21pbnV0ZXMnKTtcclxuICAgIGxldCB0aW1lMk1pbiA9IGR1cmF0aW9uKCkuc3VidHJhY3QoMSwgJ2hvdXInKS5zdWJ0cmFjdCg1LCAnbWludXRlcycpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgIG10LTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9jayBwLTBcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGU9e3RydWV9IGNsYXNzTmFtZT1cImlucHV0X19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHVybiBmb3JtIHZhbGlkYXRpb24gb24gb3Igb2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZm9ybVZhbGlkYXRpb25Ub2dnbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS52YWxpZGF0ZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJWYWxpZGF0ZSBmb3JtIHN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpb0NvbnRhaW5lciB0aXRsZT1cIlRvdWNoIG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG91Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJibHVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy50b3VjaE9uQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvdWNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZm9jdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGb2N1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy50b3VjaE9uQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1JhZGlvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2FibGVzIGlucHV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRpc2FibGVzSW5wdXRzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnN1Ym1pdERpc2FibGVzSW5wdXRzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVbm1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuc2ltdWxhdGVVbm1vdW50Q2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnNpbXVsYXRlVW5tb3VudH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNpbXVsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteS01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NhcmQgJ30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLnNpbXVsYXRlVW5tb3VudCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuZm9ybVJlZn1cclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgIC8qZXh0cmFDb21wb25lbnRzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEFwaToge30gYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBbJ1Rlc3QnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVGVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH19Ki9cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbWQtNDhcIj5lZGl0PC9pPn1cclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnRXhhbXBsZSBmb3JtJ31cclxuICAgICAgICAgICAgICAgICAgICAgIHN1YlRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBbmQgdGhpcyBpcyBzdWJ0aXRsZS4gVGhlcmUncyBhbHNvIGljb24gb24gdGhlIGxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2hvd0V4cGFuZEFsbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkRGVmYXVsdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYWluQnV0dG9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydwcmltYXJ5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN1Ym1pdEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVGb3JtPXt0aGlzLnN0YXRlLnZhbGlkYXRlRm9ybVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N1Ym1pdD5cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQnV0dG9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT17MX0gZHJvcGRvd249e3RydWV9IG9uQ2xpY2s9e3RoaXMudG91Y2hBbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRvdWNoIGFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy51blRvdWNoQWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVW4tdG91Y2ggYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaG91bGRUb2dnbGVDb2xsYXBzZU9uSGVhZGVyQ2xpY2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQ29udGFpbmVyIHRpdGxlPVwiRHJpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3aW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndoaXNrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2hpc2tleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2F0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2F0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Db250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEcmlua3MgKGhvcml6b250YWwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3aW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3aGlza2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldoaXNrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3YXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXYXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTbWFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5jaGVja2JveDFDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrYm94MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEcmVzcyBjb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIldpdGggdG9vbHRpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiKG9wdGlvbmFsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5jaGVja2JveDJDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrYm94Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJXYWxsZXQgcGFya2luZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5uYW1lQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NsZWFyQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZvVGV4dD1cIlRoaXMgaXMgc29tZSBpbmZvIHRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IG51bGwgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZSAobm8gdGl0bGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5uYW1lQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgc29tZSBoZWxwIHRleHQuIEl0IGNhbiBhbHNvIGRvIDxiPmJvbGQ8L2I+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIG90aGVyIHN0dWZmLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm5hbWVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5hbWUgcmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydZb3VyIGdlbmRlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17Z2VuZGVyVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVHZW5kZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJHZW5kZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudGV4dEFyZWFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0QXJlYVRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50ZXh0QXJlYUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRleHRBcmVhVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1NvbWUgY29sbGFwc2VkIHN0dWZmJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZFRvZ2dsZUNvbGxhcHNlT25IZWFkZXJDbGljaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiSGVscGZ1bCB0ZXh0IHRoYXQgZGVzY3JpYmVzIHdoYXQncyBjb2xsYXBzZWQgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIldpdGggdG9vbHRpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e2VtYWlsVmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZW1haWxDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsnWW91IGNhbiBzZWxlY3QgbWUgYnV0IEkgYW0gcmVhZG9ubHknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXt1cmxWYWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldlYnNpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLndlYnNpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMud2Vic2l0ZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3VyIHdlYnNpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21WYWxpZGF0b3JzPXtjdXN0b21BZ2VWYWxpZGF0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIGFnZSAob3B0aW9uYWwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuYWdlQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVZhbGlkYXRvcnM9e2N1c3RvbU51bWJlclZhbGlkYXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1pbiAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5taW4xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1pbjFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBqdXN0TnVtYmVyOiA1IH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVzZXQganVzdCBudW1iZXIgdG8gNVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5oaWRlTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWRlTnVtYmVyOiBlLnRhcmdldC5jaGVja2VkIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIaWRlL3Nob3cgbnVtYmVyIGlucHV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzSW5kZXRlcm1pbmF0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaGlkZU51bWJlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e251bWJlclZhbGlkYXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtgSnVzdCBudW1iZXIgKHJlcXVpcmVkKSAtICR7dGhpcy5zdGF0ZS5qdXN0TnVtYmVyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI9e3RoaXMuc3RhdGUuanVzdE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTnVtYmVyQ2hhbmdlPXt0aGlzLmp1c3ROdW1iZXJDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17bnVtYmVyVmFsaWRhdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2BKdXN0IG51bWJlciAtICR7dGhpcy5zdGF0ZS5qdXN0TnVtYmVyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI9e3RoaXMuc3RhdGUuanVzdE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTnVtYmVyQ2hhbmdlPXt0aGlzLmp1c3ROdW1iZXJDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb25leVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jaWVzPXtjdXJyZW5jaWVzMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzPXt0aGlzLnN0YXRlLnByaWNlczF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJpY2VzQ2hhbmdlPXt0aGlzLnByaWNlczFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURlbGV0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9uZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY2llcz17Y3VycmVuY2llczJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlcz17dGhpcy5zdGF0ZS5wcmljZXMyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QcmljZXNDaGFuZ2U9e3RoaXMucHJpY2VzMkNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJpY2UgbXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb25leVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jaWVzPXtjdXJyZW5jaWVzM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzPXt0aGlzLnN0YXRlLnByaWNlczN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblByaWNlc0NoYW5nZT17dGhpcy5wcmljZXMzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcmljZSBtdWx0aXBsZSBmb3JjZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17dGhpcy5zdGF0ZS50aW1lMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNoYW5nZT17dGhpcy50aW1lMUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXt0aW1lMk1heH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXt0aW1lMk1pbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXt0aGlzLnN0YXRlLnRpbWUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lQ2hhbmdlPXt0aGlzLnRpbWUyQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaXRoIE1pbi9NYXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17dGltZTJNYXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17dGltZTJNaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17dGhpcy5zdGF0ZS50aW1lMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNoYW5nZT17dGhpcy50aW1lMkNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2l0aCBNaW4vTWF4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGltZVNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lU3Bhbj17dGhpcy5zdGF0ZS50aW1lU3Bhbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNwYW5DaGFuZ2U9e3RoaXMudGltZVNwYW5DaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRpbWUgc3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkVW5pdHM9e1RpbWVTcGFuVW5pdC5Ib3VyIHwgVGltZVNwYW5Vbml0Lk1pbnV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGltZVNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lU3Bhbj17dGhpcy5zdGF0ZS50aW1lU3Bhbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNwYW5DaGFuZ2U9e3RoaXMudGltZVNwYW5DaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRpbWUgc3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkVW5pdHM9e1RpbWVTcGFuVW5pdC5Ib3VyIHwgVGltZVNwYW5Vbml0Lk1pbnV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3BlbmluZ0hvdXJzRGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnT3BlbmluZyBob3VycyBzYW1wbGUgZGF5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbmluZ0hvdXJzQ2hhbmdlPXt0aGlzLm9wZW5pbmdIb3Vyc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pbmdIb3Vycz17dGhpcy5zdGF0ZS5vcGVuaW5nSG91cnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiT3BlbmluZyBob3Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUNhcGFjaXR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J09wZW5pbmcgaG91cnMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPXsncHJpbWFyeSd9Pkhlcm8gYnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFCdXR0b25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9ezF9IGRyb3Bkb3duPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4dHJhIGJ1dHRvbiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXsyfSBkcm9wZG93bj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYSBidXR0b24gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wZW5pbmdIb3Vyc1dlZWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGF5c0NoYW5nZT17dGhpcy5vcGVuaW5nSG91cnNXZWVrQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlzPXt0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc1dlZWt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhbmRhcmREYXk9e3RoaXMuc3RhdGUub3BlbmluZ0hvdXJzV2Vla0RheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblN0YW5kYXJkRGF5Q2hhbmdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbmluZ0hvdXJzV2Vla1N0YW5kYXJkRGF5Q2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VDYXBhY2l0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydTcGVjaWFsIGRheXMgb3BlbmluZyBob3Vycyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuc3BlY2lhbERheXNJbnB1dEhlYWRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3ByaW1hcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zcGVjaWFsRGF5c0FkZENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVuaW5nSG91cnNTcGVjaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRheXNDaGFuZ2U9e3RoaXMub3BlbmluZ0hvdXJzU3BlY2lhbENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5cz17dGhpcy5zdGF0ZS5vcGVuaW5nSG91cnNTcGVjaWFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0J1dHRvbnMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQnV0dG9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9eydwcmltYXJ5J30+SGVybyBidXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlN0YW5kYXJkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPk5vIHNoYWRvdzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBub1NoYWRvdz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+SGVybzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBoZXJvPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5PdXRsaW5lZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBvdXRsaW5lZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Qmxhbms8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgYmxhbms9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlNtYWxsPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIHNtYWxsPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5DaXJjdWxhcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBjaXJjdWxhcj17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+RHJvcGRvd248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgZHJvcGRvd249e3RydWV9IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlVub2J0cnVzaXZlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIHVub2J0cnVzaXZlPXt0cnVlfSBjbGFzc05hbWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5UZXh0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIHRleHQ9e3RydWV9IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkRpc2FibGUgYWZ0ZXIgY2xpY2s8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVBZnRlckNsaWNrTXM9ezIwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQWZ0ZXJDbGljaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydNdWx0aXBsZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWREZWZhdWx0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGFiZWw9XCJNdWx0aXBsZSByZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLm11bHRpcGxlUmVhZG9ubHlDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk11bHRpcGxlIHJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3MgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbmQgbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQcm9wcz17eyBwbGFjZWhvbGRlcjogJ1dpdGggcGxhY2Vob2xkZXInIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZD17dGhpcy50YWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3Mgc3VnZ2VzdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2hvb3NlIG9yIGNyZWF0ZSB0YWdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaEV4aXN0aW5nVGFncz17KHN0YXJ0c1dpdGgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYWdzLmZpbHRlcigoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm5hbWUuaW5jbHVkZXMoc3RhcnRzV2l0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudD17J05vdCBmb3VuZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZD17dGhpcy50YWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJFeGlzdGluZ1RhZ3M9eyh0LCB0YWdzKSA9PiB0YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGFncyBzdWdnZXN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaG9vc2UgdGFnc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGFncz17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1RhZ3M9e2V4aXN0aW5nVGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZD17dGhpcy50YWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2hpcHM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIG1heCAzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUYWdzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NoaXBzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnQ2xpY2s9eyh0KSA9PiBjb25zb2xlLndhcm4odCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIG9ubHkgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2l0aCBsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGFncz17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M9e3RoaXMuc3RhdGUudGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhZ3NDaGFuZ2VkPXt0aGlzLnRhZ3NDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQ9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFByb3BzPXt0YWdzRW1haWxUZXh0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9uZSBvciBtb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk11bHRpc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0RW1wdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3RoaXMuc3RhdGUubXVsdGlwbGVWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RlZFZhbHVlc0NoYW5nZT17dGhpcy5zZWxlY3RlZFZhbHVlc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlczogW3sgdmFsdWU6ICdPbmUgb3B0aW9uJyB9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGVzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydEcm9wZG93bid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWREZWZhdWx0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3cgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtci0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bm90aWZpY2F0aW9uczwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNvdW50PXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWVudUNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QXJyb3c9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgZHJvcGRvd249e3RydWV9IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnU3RyaW5nIGhlYWRlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25Db3VudD17NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnVDbGFzc05hbWU9XCJwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JdGVtPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPkZ1bmN0aW9uIGhlYWRlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Fycm93PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnVDbGFzc05hbWU9XCJwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JdGVtPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVZhbGlkYXRpb25TdW1tYXJ5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEeW5hbWljU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0RGlzYWJsZXNJbnB1dHM9e3RoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3ByaW1hcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbENsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDbGFzc05hbWU9XCJidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nQ2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDaGlsZHJlbj17J0Vycm9yJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nQ2hpbGRyZW49eydXb3JraW5nIG9uIGl0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm09e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWpheCBFcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0R5bmFtaWNTdWJtaXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEeW5hbWljU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0RGlzYWJsZXNJbnB1dHM9e3RoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsQ2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZ0NsYXNzTmFtZT1cImJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDbGFzc05hbWU9XCJidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZ0NoaWxkcmVuPXsnV29ya2luZyBvbiBpdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NoaWxkcmVuPXsnVGhhdCB3b3JrZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZHluYW1pY1N1Ym1pdEVycm9yRm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm09e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWpheCBTdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHluYW1pY1N1Ym1pdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybVJlZiA9IChlbDogRm9ybSkgPT4gKHRoaXMuZm9ybSA9IGVsKTtcclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RlZFZhbHVlc0NoYW5nZWQgPSAoc2VsZWN0ZWRWYWx1ZXM6IFNlbGVjdFZhbHVlW10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRWYWx1ZXMgfSk7XHJcblxyXG4gIHByaXZhdGUgdGFnc0NoYW5nZWQgPSAodGFnczogVGFnW10pID0+IHRoaXMuc2V0U3RhdGUoeyB0YWdzIH0pO1xyXG5cclxuICBwcml2YXRlIG11bHRpcGxlUmVhZG9ubHlDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtdWx0aXBsZVJlYWRvbmx5OiAhdGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5IH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc1NwZWNpYWxDaGFuZ2VkID0gKGRheXM6IE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmpbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnNTcGVjaWFsOiBkYXlzIH0pO1xyXG5cclxuICBwcml2YXRlIHNwZWNpYWxEYXlzQWRkQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgb3BlbmluZ0hvdXJzU3BlY2lhbDogdGhpcy5zdGF0ZS5vcGVuaW5nSG91cnNTcGVjaWFsLmNvbmNhdChbXHJcbiAgICAgICAgICB7IGRhdGU6IHVuZGVmaW5lZCwgdGltZXM6IFtdIH0sXHJcbiAgICAgICAgXSksXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMuc3BlY2lhbERheXNJbnB1dEhlYWRlci5jdXJyZW50LmV4cGFuZCgpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb3BlbmluZ0hvdXJzV2Vla1N0YW5kYXJkRGF5Q2hhbmdlZCA9IChkYXk6IE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmopID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmluZ0hvdXJzV2Vla0RheTogZGF5IH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc1dlZWtDaGFuZ2VkID0gKGRheXM6IE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmpbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnNXZWVrOiBkYXlzIH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc0NoYW5nZWQgPSAob3BlbmluZ0hvdXJzOiBPcGVuaW5nSG91cnNEYXlPYmopID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmluZ0hvdXJzOiBvcGVuaW5nSG91cnMgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZTJDaGFuZ2VkID0gKHRpbWU6IER1cmF0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgdGltZTI6IHRpbWUgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZTFDaGFuZ2VkID0gKHRpbWU6IER1cmF0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgdGltZTE6IHRpbWUgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZVNwYW5DaGFuZ2VkID0gKHRpbWVTcGFuOiBEdXJhdGlvbikgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpbWVTcGFuIH0pO1xyXG5cclxuICBwcml2YXRlIHByaWNlczJDaGFuZ2VkID0gKHByaWNlczogTW9uZXlXaXRoQ3VycmVuY3lbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZXMyOiBwcmljZXMgfSk7XHJcblxyXG4gIHByaXZhdGUgcHJpY2VzM0NoYW5nZWQgPSAocHJpY2VzOiBNb25leVdpdGhDdXJyZW5jeVtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlczM6IHByaWNlcyB9KTtcclxuXHJcbiAgcHJpdmF0ZSBwcmljZXMxQ2hhbmdlZCA9IChwcmljZXM6IE1vbmV5V2l0aEN1cnJlbmN5W10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2VzMTogcHJpY2VzIH0pO1xyXG5cclxuICBwcml2YXRlIG1pbjFDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1pbjE6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIGp1c3ROdW1iZXJDaGFuZ2VkID0gKG51bTogbnVtYmVyKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGp1c3ROdW1iZXI6IG51bSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBhZ2VDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFnZTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgd2Vic2l0ZUNoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgd2Vic2l0ZTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgZW1haWxDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0ZXh0QXJlYUNoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dEFyZWFUZXh0OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBuYW1lQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBjaGVja2JveDJDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja2JveDI6ICF0aGlzLnN0YXRlLmNoZWNrYm94MiB9KTtcclxuXHJcbiAgcHJpdmF0ZSBjaGVja2JveDFDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja2JveDE6ICF0aGlzLnN0YXRlLmNoZWNrYm94MSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBkcmlua3NDaGVja2VkID0gKHZhbHVlOiBzdHJpbmcpID0+IHRoaXMuc2V0U3RhdGUoeyBkcmluazogdmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgdW5Ub3VjaEFsbCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5mb3JtLnVuVG91Y2hBbGwoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHNpbXVsYXRlVW5tb3VudENoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNpbXVsYXRlVW5tb3VudDogIXRoaXMuc3RhdGUuc2ltdWxhdGVVbm1vdW50IH0pO1xyXG5cclxuICBwcml2YXRlIGRpc2FibGVzSW5wdXRzQ2hlY2tlZCA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0RGlzYWJsZXNJbnB1dHM6ICF0aGlzLnN0YXRlLnN1Ym1pdERpc2FibGVzSW5wdXRzIH0pO1xyXG5cclxuICBwcml2YXRlIHRvdWNoT25DaGVja2VkID0gKHZhbHVlOiAnYmx1cicgfCAnZm9jdXMnKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRvdWNoT246IHZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIGZvcm1WYWxpZGF0aW9uVG9nZ2xlID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0ZUZvcm1TdWJtaXQ6ICF0aGlzLnN0YXRlLnZhbGlkYXRlRm9ybVN1Ym1pdCB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0b3VjaEFsbCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5mb3JtLnRvdWNoQWxsKCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVHZW5kZXJDaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGlmICh2YWwgPT09ICdNJyB8fCB2YWwgPT09ICdGJykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2VuZGVyOiB2YWwgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1Ym1pdEZvcm0oZT86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XHJcbiAgICBlICYmIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5pbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkeW5hbWljU3VibWl0U3VjY2Vzc0Zvcm0oXHJcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PixcclxuICAgIHN1Ym1pdHRpbmc6ICgpID0+IHZvaWQsXHJcbiAgICBlcnJvcjogKCkgPT4gdm9pZCxcclxuICAgIHN1Y2Nlc3M6ICgpID0+IHZvaWQsXHJcbiAgICByZXNldDogKCkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc3VibWl0dGluZygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGVycm9yKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzZXQoKSwgMzAwMCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHluYW1pY1N1Ym1pdEVycm9yRm9ybShcclxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxyXG4gICAgc3VibWl0dGluZzogKCkgPT4gdm9pZCxcclxuICAgIGVycm9yOiAoKSA9PiB2b2lkLFxyXG4gICAgc3VjY2VzczogKCkgPT4gdm9pZCxcclxuICAgIHJlc2V0OiAoKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzdWJtaXR0aW5nKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc3VjY2VzcygpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc2V0KCksIDMwMDApO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNpYztcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWMxMDdmNzQ4OTJhMTViYmRiNGJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJEcm9wZG93biIsIkZvcm0iLCJUaW1lIiwiVGV4dCIsIlNlbGVjdCIsIlN1Ym1pdCIsIkR5bmFtaWNTdWJtaXQiLCJDaGVja2JveCIsIlJhZGlvIiwiUmFkaW9Db250YWluZXIiLCJNb25leSIsIk9wZW5pbmdIb3Vyc0RheSIsIk9wZW5pbmdIb3Vyc1dlZWsiLCJPcGVuaW5nSG91cnNTcGVjaWFsIiwiSW5wdXRIZWFkZXIiLCJCdXR0b24iLCJUYWdzIiwiTnVtYmVyVmFsaWRhdG9yIiwiVGV4dEFyZWEiLCJGb3JtVmFsaWRhdGlvblN1bW1hcnkiLCJUaW1lU3BhbiIsIlRpbWVTcGFuVW5pdCIsImR1cmF0aW9uIiwiQWdlVmFsaWRhdG9yIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJWYWxpZGF0ZSIsImlzUmVxdWlyZWQiLCJhZGRFcnJvciIsIm51bSIsIk51bWJlciIsImlzTmFOIiwiX19yZWFjdHN0YW5kaW5fX3JlZ2VuZXJhdGVCeUV2YWwiLCJjb2RlIiwiZXZhbCIsImluc3RhbmNlIiwiZXhpc3RpbmdUYWdzIiwiaWQiLCJuYW1lIiwiY3VycmVuY2llczEiLCJsYWJlbCIsImN1cnJlbmNpZXMyIiwiY3VycmVuY2llczMiLCJmb3JjZVNlbGVjdGVkIiwiZ2VuZGVyVmFsdWVzIiwidGFnc0VtYWlsVGV4dFByb3BzIiwidmFsaWRhdG9ycyIsImVtYWlsVmFsaWRhdG9ycyIsInVybFZhbGlkYXRvcnMiLCJjdXN0b21BZ2VWYWxpZGF0b3IiLCJjdXN0b21OdW1iZXJWYWxpZGF0b3IiLCJtaW4iLCJudW1iZXJWYWxpZGF0b3IiLCJ0eXBlcyIsIkJ1dHRvbnNTaG93Y2FzZSIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWFwIiwiaXRlbSIsImluZGV4IiwiRnJhZ21lbnQiLCJfZXh0ZW5kcyIsInR5cGUiLCJkaXNhYmxlZCIsImRlZmF1bHRQcm9wcyIsIkJhc2ljIiwiX1JlYWN0JFB1cmVDb21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsImNhbGwiLCJpbml0aWFsU3RhdGUiLCJnZW5kZXIiLCJlbWFpbCIsImFnZSIsIm1pbjEiLCJjaGVja2JveDEiLCJjaGVja2JveDIiLCJ2YWxpZGF0ZUZvcm1TdWJtaXQiLCJmb29kIiwiZHJpbmsiLCJ0b3VjaE9uIiwic3VibWl0RGlzYWJsZXNJbnB1dHMiLCJzaW11bGF0ZVVubW91bnQiLCJwcmljZXMxIiwicHJpY2VzMiIsInByaWNlczMiLCJ0aW1lU3BhbiIsInRpbWUxIiwidGltZTIiLCJvcGVuaW5nSG91cnMiLCJ0aW1lcyIsIm9wZW5pbmdIb3Vyc1dlZWsiLCJvcGVuaW5nSG91cnNXZWVrRGF5Iiwib3BlbmluZ0hvdXJzU3BlY2lhbCIsIndlYnNpdGUiLCJ0YWdzIiwic2VsZWN0ZWRWYWx1ZXMiLCJtdWx0aXBsZVZhbHVlcyIsIm11bHRpcGxlUmVhZG9ubHkiLCJ0ZXh0QXJlYVRleHQiLCJqdXN0TnVtYmVyIiwiaGlkZU51bWJlciIsInVuZGVmaW5lZCIsImZvcm1SZWYiLCJlbCIsImZvcm0iLCJzZWxlY3RlZFZhbHVlc0NoYW5nZWQiLCJzZXRTdGF0ZSIsInRhZ3NDaGFuZ2VkIiwibXVsdGlwbGVSZWFkb25seUNoZWNrZWQiLCJzdGF0ZSIsIm9wZW5pbmdIb3Vyc1NwZWNpYWxDaGFuZ2VkIiwiZGF5cyIsInNwZWNpYWxEYXlzQWRkQ2xpY2siLCJjb25jYXQiLCJkYXRlIiwic3BlY2lhbERheXNJbnB1dEhlYWRlciIsImN1cnJlbnQiLCJleHBhbmQiLCJvcGVuaW5nSG91cnNXZWVrU3RhbmRhcmREYXlDaGFuZ2VkIiwiZGF5Iiwib3BlbmluZ0hvdXJzV2Vla0NoYW5nZWQiLCJvcGVuaW5nSG91cnNDaGFuZ2VkIiwidGltZTJDaGFuZ2VkIiwidGltZSIsInRpbWUxQ2hhbmdlZCIsInRpbWVTcGFuQ2hhbmdlZCIsInByaWNlczJDaGFuZ2VkIiwicHJpY2VzIiwicHJpY2VzM0NoYW5nZWQiLCJwcmljZXMxQ2hhbmdlZCIsIm1pbjFDaGFuZ2VkIiwiZSIsInRhcmdldCIsImp1c3ROdW1iZXJDaGFuZ2VkIiwiYWdlQ2hhbmdlZCIsIndlYnNpdGVDaGFuZ2VkIiwiZW1haWxDaGFuZ2VkIiwidGV4dEFyZWFDaGFuZ2VkIiwibmFtZUNoYW5nZWQiLCJjaGVja2JveDJDaGVja2VkIiwiY2hlY2tib3gxQ2hlY2tlZCIsImRyaW5rc0NoZWNrZWQiLCJ1blRvdWNoQWxsIiwicHJldmVudERlZmF1bHQiLCJzaW11bGF0ZVVubW91bnRDaGVja2VkIiwiZGlzYWJsZXNJbnB1dHNDaGVja2VkIiwidG91Y2hPbkNoZWNrZWQiLCJmb3JtVmFsaWRhdGlvblRvZ2dsZSIsInRvdWNoQWxsIiwiaGFuZGxlR2VuZGVyQ2hhbmdlIiwiYmluZCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzdWJtaXRGb3JtIiwiZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtIiwiZHluYW1pY1N1Ym1pdEVycm9yRm9ybSIsImNyZWF0ZVJlZiIsInJlbmRlciIsIl90aGlzMiIsInRpbWUyTWF4IiwiYWRkIiwidGltZTJNaW4iLCJzdWJ0cmFjdCIsIm5vVmFsaWRhdGUiLCJvbkNoZWNrZWQiLCJjaGVja2VkIiwidGl0bGUiLCJyZXN1bHQiLCJyZWYiLCJvblN1Ym1pdCIsImljb24iLCJzdWJUaXRsZSIsInNob3dFeHBhbmRBbGwiLCJjb2xsYXBzaWJsZSIsImNvbGxhcHNlZERlZmF1bHQiLCJtYWluQnV0dG9uIiwib25DbGljayIsInZhbGlkYXRlRm9ybSIsImV4dHJhQnV0dG9ucyIsImRyb3Bkb3duIiwic2hvdWxkVG9nZ2xlQ29sbGFwc2VPbkhlYWRlckNsaWNrIiwiaG9yaXpvbnRhbCIsInJlcXVpcmVkIiwidG9vbHRpcCIsIm9uQ2hhbmdlIiwic2hvd0NsZWFyQnV0dG9uIiwiaW5mb1RleHQiLCJyZWFkT25seSIsInZhbHVlcyIsImN1c3RvbVZhbGlkYXRvcnMiLCJzdXBwb3J0c0luZGV0ZXJtaW5hdGUiLCJudW1iZXIiLCJvbk51bWJlckNoYW5nZSIsImN1cnJlbmNpZXMiLCJvblByaWNlc0NoYW5nZSIsImRpc2FibGVEZWxldGUiLCJhbGxvd011bHRpcGxlIiwidGltZUNoYW5nZSIsIm1heCIsInRpbWVTcGFuQ2hhbmdlIiwidmFsaWRVbml0cyIsIkhvdXIiLCJNaW51dGUiLCJvbk9wZW5pbmdIb3Vyc0NoYW5nZSIsInVzZUNhcGFjaXR5Iiwib25EYXlzQ2hhbmdlIiwic3RhbmRhcmREYXkiLCJvblN0YW5kYXJkRGF5Q2hhbmdlIiwicGxhY2Vob2xkZXIiLCJub1NoYWRvdyIsImhlcm8iLCJvdXRsaW5lZCIsImJsYW5rIiwic21hbGwiLCJjaXJjdWxhciIsInVub2J0cnVzaXZlIiwidGV4dCIsImRpc2FibGVBZnRlckNsaWNrTXMiLCJkaXNhYmxlQWZ0ZXJDbGljayIsInRleHRQcm9wcyIsImFsbG93TmV3Iiwib25UYWdzQ2hhbmdlZCIsImZldGNoRXhpc3RpbmdUYWdzIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImZpbHRlciIsImluY2x1ZGVzIiwic3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudCIsImZpbHRlckV4aXN0aW5nVGFncyIsInQiLCJtYXhUYWdzIiwic2hvd0NoaXBzIiwib25UYWdDbGljayIsImNvbnNvbGUiLCJ3YXJuIiwibXVsdGlwbGUiLCJkZWZhdWx0RW1wdHkiLCJvblNlbGVjdGVkVmFsdWVzQ2hhbmdlIiwiaGVhZGVyIiwibm90aWZpY2F0aW9uQ291bnQiLCJzdWJtZW51Q2xhc3NOYW1lIiwic2hvd0Fycm93Iiwibm9ybWFsQ2xhc3NOYW1lIiwiZXJyb3JDbGFzc05hbWUiLCJzdWJtaXR0aW5nQ2xhc3NOYW1lIiwiZXJyb3JDaGlsZHJlbiIsInN1Ym1pdHRpbmdDaGlsZHJlbiIsInN1Y2Nlc3NDbGFzc05hbWUiLCJzdWNjZXNzQ2hpbGRyZW4iLCJ2YWwiLCJzdWJtaXR0aW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwicmVzZXQiLCJQdXJlQ29tcG9uZW50IiwiX2RlZmF1bHQiLCJyZWFjdEhvdExvYWRlciIsInJlYWN0SG90TG9hZGVyR2xvYmFsIiwiZGVmYXVsdCIsInJlZ2lzdGVyIiwibGVhdmVNb2R1bGUiLCJtb2R1bGUiXSwic291cmNlUm9vdCI6IiJ9