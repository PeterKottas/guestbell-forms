webpackHotUpdate("main",{

/***/ "./src/demo/ClientApp/pages/basic/Basic.tsx":
/*!**************************************************!*\
  !*** ./src/demo/ClientApp/pages/basic/Basic.tsx ***!
  \**************************************************/
/*! exports provided: AgeValidator, Basic, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgeValidator", function() { return AgeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basic", function() { return Basic; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/index */ "./src/lib/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
var customNumberValidator = [new _lib_index__WEBPACK_IMPORTED_MODULE_1__["NumberValidator"]({
  min: 0
})];
var numberValidator = ['number'];
var types = ['primary', 'warning', 'error', 'info', 'success', 'gray', 'white', 'none'];

var ButtonsShowcase = function ButtonsShowcase(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "px-2",
    style: {
      backgroundColor: 'rgb(248, 247, 247)',
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, types.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({
      type: item
    }, props), item), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({
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
    _this.form = void 0;
    _this.specialDaysInputHeader = void 0;
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
      timeSpan: Object(moment__WEBPACK_IMPORTED_MODULE_2__["duration"])(0),
      time1: Object(moment__WEBPACK_IMPORTED_MODULE_2__["duration"])(0),
      time2: Object(moment__WEBPACK_IMPORTED_MODULE_2__["duration"])(0),
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
    _this.specialDaysInputHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    return _this;
  }

  _createClass(Basic, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var time2Max = Object(moment__WEBPACK_IMPORTED_MODULE_2__["duration"])().add(1, 'hour').add(5, 'minutes');
      var time2Min = Object(moment__WEBPACK_IMPORTED_MODULE_2__["duration"])().subtract(1, 'hour').subtract(5, 'minutes');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "row  mt-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "col-lg-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "card-block p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        noValidate: true,
        className: "input__form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        label: "Turn form validation on or off",
        onChecked: this.formValidationToggle,
        checked: this.state.validateFormSubmit,
        title: "Validate form submit"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["RadioContainer"], {
        title: "Touch on"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
        name: "touch",
        value: "blur",
        label: "Blur",
        result: this.state.touchOn,
        onChecked: this.touchOnChecked
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
        name: "touch",
        value: "focus",
        label: "Focus",
        result: this.state.touchOn,
        onChecked: this.touchOnChecked
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        label: "Disables inputs",
        onChecked: this.disablesInputsChecked,
        checked: this.state.submitDisablesInputs,
        title: "Submit"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        label: "Unmount",
        onChecked: this.simulateUnmountChecked,
        checked: this.state.simulateUnmount,
        title: "Simulate"
      })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "row my-5"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "col-lg-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'card '
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "card-block p-0"
      }, !this.state.simulateUnmount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Form"], {
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

      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["InputHeader"], {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
          className: "material-icons md-48"
        }, "edit"),
        title: 'Example form',
        subTitle: "And this is subtitle. There's also icon on the left",
        showExpandAll: true,
        type: "hero",
        collapsible: true,
        collapsedDefault: false,
        mainButton: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Submit"], {
          type: 'primary',
          onClick: this.submitForm,
          validateForm: this.state.validateFormSubmit
        }, "Submit"),
        extraButtons: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          key: 1,
          dropdown: true,
          onClick: this.touchAll
        }, "Touch all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          key: 2,
          dropdown: true,
          onClick: this.unTouchAll
        }, "Un-touch all")],
        shouldToggleCollapseOnHeaderClick: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["RadioContainer"], {
        title: "Drinks"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
        name: "drink",
        value: "wine",
        label: "Wine",
        result: this.state.drink,
        onChecked: this.drinksChecked
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
        name: "drink",
        value: "whiskey",
        label: "Whiskey",
        result: this.state.drink,
        onChecked: this.drinksChecked
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
        name: "drink",
        value: "water",
        label: "Water",
        result: this.state.drink,
        onChecked: this.drinksChecked
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["RadioContainer"], {
        title: "Drinks (horizontal)",
        horizontal: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
        name: "drink2",
        value: "wine",
        label: "Wine",
        result: this.state.drink,
        onChecked: this.drinksChecked
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
        name: "drink2",
        value: "whiskey",
        label: "Whiskey",
        result: this.state.drink,
        onChecked: this.drinksChecked
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
        name: "drink2",
        value: "water",
        label: "Water",
        result: this.state.drink,
        onChecked: this.drinksChecked
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        required: true,
        label: "Smart",
        onChecked: this.checkbox1Checked,
        checked: this.state.checkbox1,
        title: "Dress code",
        tooltip: "With tooltip"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        label: "(optional)",
        onChecked: this.checkbox2Checked,
        checked: this.state.checkbox2,
        title: "Wallet parking"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        required: true,
        label: "Your name",
        onChange: this.nameChanged,
        value: this.state.name,
        title: "Name",
        showClearButton: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: function onClick() {
          return _this2.setState({
            name: null
          });
        }
      }, "Test"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "px-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        required: true,
        label: "Your name (no title)",
        onChange: this.nameChanged,
        value: this.state.name,
        tooltip: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
          className: "m-0"
        }, "This is some help text. It can also do ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, "bold"), ' ', "and other stuff.")
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        label: "Your name",
        onChange: this.nameChanged,
        value: this.state.name,
        title: "Name readonly",
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Select"], {
        touchOn: this.state.touchOn,
        label: 'Your gender',
        values: genderValues,
        onChange: this.handleGenderChange,
        value: this.state.gender,
        title: "Gender"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["TextArea"], {
        touchOn: this.state.touchOn,
        required: true,
        label: "Textarea",
        onChange: this.textAreaChanged,
        value: this.state.textAreaText,
        title: "Textarea"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["TextArea"], {
        touchOn: this.state.touchOn,
        label: "Textarea",
        onChange: this.textAreaChanged,
        value: this.state.textAreaText,
        title: "Readonly",
        readOnly: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["InputHeader"], {
        title: 'Some collapsed stuff',
        collapsible: true,
        shouldToggleCollapseOnHeaderClick: true,
        subTitle: "Helpful text that describes what's collapsed here",
        tooltip: "With tooltip"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        validators: emailValidators,
        required: false,
        label: "Email",
        value: this.state.email,
        onChange: this.emailChanged,
        title: "Your email"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        readOnly: true,
        value: 'You can select me but I am readonly',
        title: "Readonly"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        validators: urlValidators,
        required: false,
        label: "Website",
        value: this.state.website,
        onChange: this.websiteChanged,
        title: "Your website"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        customValidators: customAgeValidator,
        label: "Your age (optional)",
        value: this.state.age,
        onChange: this.ageChanged,
        title: "Age",
        type: "number"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        customValidators: customNumberValidator,
        label: "Min 1",
        value: this.state.min1,
        onChange: this.min1Changed,
        title: "Number"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: function onClick() {
          return _this2.setState({
            justNumber: 5
          });
        }
      }, "Reset just number to 5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        checked: this.state.hideNumber,
        onChecked: function onChecked(e) {
          return _this2.setState({
            hideNumber: e.target.checked
          });
        },
        label: "Hide/show number inputs",
        supportsIndeterminate: true
      }), !this.state.hideNumber && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        validators: numberValidator,
        label: "Just number (required) - ".concat(this.state.justNumber),
        number: this.state.justNumber,
        onNumberChange: this.justNumberChanged,
        title: "Number",
        required: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        validators: numberValidator,
        label: "Just number - ".concat(this.state.justNumber),
        number: this.state.justNumber,
        onNumberChange: this.justNumberChanged,
        title: "Number"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Money"], {
        currencies: currencies1,
        prices: this.state.prices1,
        touchOn: this.state.touchOn,
        required: true,
        onPricesChange: this.prices1Changed,
        title: "Price",
        disableDelete: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Money"], {
        currencies: currencies2,
        prices: this.state.prices2,
        allowMultiple: true,
        touchOn: this.state.touchOn,
        required: false,
        onPricesChange: this.prices2Changed,
        title: "Price multiple"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Money"], {
        currencies: currencies3,
        prices: this.state.prices3,
        allowMultiple: true,
        touchOn: this.state.touchOn,
        required: false,
        onPricesChange: this.prices3Changed,
        label: "Price multiple forced"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Time"], {
        touchOn: this.state.touchOn,
        time: this.state.time1,
        timeChange: this.time1Changed,
        title: "Time"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Time"], {
        max: time2Max,
        min: time2Min,
        touchOn: this.state.touchOn,
        time: this.state.time2,
        timeChange: this.time2Changed,
        label: "With Min/Max"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Time"], {
        max: time2Max,
        min: time2Min,
        touchOn: this.state.touchOn,
        time: this.state.time2,
        timeChange: this.time2Changed,
        label: "With Min/Max"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["TimeSpan"], {
        touchOn: this.state.touchOn,
        timeSpan: this.state.timeSpan,
        timeSpanChange: this.timeSpanChanged,
        title: "Time span",
        validUnits: _lib_index__WEBPACK_IMPORTED_MODULE_1__["TimeSpanUnit"].Hour | _lib_index__WEBPACK_IMPORTED_MODULE_1__["TimeSpanUnit"].Minute
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["TimeSpan"], {
        touchOn: this.state.touchOn,
        timeSpan: this.state.timeSpan,
        timeSpanChange: this.timeSpanChanged,
        label: "Time span",
        validUnits: _lib_index__WEBPACK_IMPORTED_MODULE_1__["TimeSpanUnit"].Hour | _lib_index__WEBPACK_IMPORTED_MODULE_1__["TimeSpanUnit"].Minute
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["OpeningHoursDay"], {
        label: 'Opening hours sample day',
        touchOn: this.state.touchOn,
        required: false,
        onOpeningHoursChange: this.openingHoursChanged,
        openingHours: this.state.openingHours,
        title: "Opening hours",
        useCapacity: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["InputHeader"], {
        title: 'Opening hours',
        collapsible: true,
        mainButton: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: 'primary'
        }, "Hero button"),
        extraButtons: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          key: 1,
          dropdown: true
        }, "Extra button 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          key: 2,
          dropdown: true
        }, "Extra button 2")]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["OpeningHoursWeek"], {
        touchOn: this.state.touchOn,
        required: false,
        onDaysChange: this.openingHoursWeekChanged,
        days: this.state.openingHoursWeek,
        standardDay: this.state.openingHoursWeekDay,
        onStandardDayChange: this.openingHoursWeekStandardDayChanged,
        useCapacity: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["InputHeader"], {
        className: '',
        title: 'Special days opening hours',
        collapsible: true,
        ref: this.specialDaysInputHeader,
        mainButton: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: 'primary',
          onClick: this.specialDaysAddClick
        }, "Add")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["OpeningHoursSpecial"], {
        touchOn: this.state.touchOn,
        required: false,
        onDaysChange: this.openingHoursSpecialChanged,
        days: this.state.openingHoursSpecial,
        placeholder: "Choose date"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["InputHeader"], {
        className: '',
        title: 'Buttons',
        mainButton: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: 'primary'
        }, "Hero button")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Standard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "No shadow"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        noShadow: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Hero"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        hero: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Outlined"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        outlined: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Blank"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        blank: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Small"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        small: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Circular"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        circular: true
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Dropdown"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        dropdown: true,
        className: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Unobtrusive"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        unobtrusive: true,
        className: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        text: true,
        className: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Disable after click"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        disableAfterClickMs: 2000,
        disableAfterClick: true
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["InputHeader"], {
        className: '',
        title: 'Multiple',
        collapsible: true,
        collapsedDefault: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Checkbox"] // label="Multiple readonly"
      , {
        onChecked: this.multipleReadonlyChecked,
        checked: this.state.multipleReadonly,
        title: "Multiple readonly"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Tags"], {
        title: "Tags example",
        label: "And label",
        textProps: {
          placeholder: 'With placeholder'
        },
        readOnly: this.state.multipleReadonly,
        allowNew: true,
        tags: this.state.tags,
        onTagsChanged: this.tagsChanged
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Tags"], {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Tags"], {
        title: "Tags suggestions",
        label: "Choose tags",
        readOnly: this.state.multipleReadonly,
        allowNew: false,
        maxTags: 2,
        existingTags: existingTags,
        tags: this.state.tags,
        onTagsChanged: this.tagsChanged,
        showChips: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Tags"], {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Tags"], {
        title: "Tags only email",
        label: "With label",
        maxTags: 2,
        allowNew: true,
        readOnly: this.state.multipleReadonly,
        tags: this.state.tags,
        onTagsChanged: this.tagsChanged,
        suggestionsEmptyComponent: null,
        textProps: tagsEmailTextProps
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Select"], {
        required: true,
        label: "One or more",
        title: "Multiselect",
        multiple: true,
        defaultEmpty: true,
        readOnly: this.state.multipleReadonly,
        selectedValues: this.state.selectedValues,
        values: this.state.multipleValues,
        onSelectedValuesChange: this.selectedValuesChanged
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: function onClick(e) {
          return _this2.setState({
            selectedValues: [{
              value: 'One option'
            }]
          });
        }
      }, "Test")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["InputHeader"], {
        className: '',
        title: 'Dropdown',
        collapsible: true,
        collapsedDefault: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row d-flex"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "position-relative mr-3",
        header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
          className: "material-icons"
        }, "notifications"),
        notificationCount: 5,
        submenuClassName: "p-2",
        showArrow: false
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        dropdown: true,
        className: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "position-relative mr-3",
        header: 'String header',
        notificationCount: 5,
        submenuClassName: "p-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, "Item")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "position-relative",
        header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: "primary"
        }, "Function header"),
        showArrow: false,
        submenuClassName: "p-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, "Item")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["FormValidationSummary"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "row justify-content-center align-items-center my-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["DynamicSubmit"], {
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
      }, "Ajax Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["DynamicSubmit"], {
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
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);
var _default = Basic;
/* harmony default export */ __webpack_exports__["default"] = (_default);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DbGllbnRBcHAvcGFnZXMvYmFzaWMvQmFzaWMudHN4Il0sIm5hbWVzIjpbIkFnZVZhbGlkYXRvciIsInZhbHVlIiwiaXNSZXF1aXJlZCIsImFkZEVycm9yIiwibnVtIiwiTnVtYmVyIiwiaXNOYU4iLCJpbnN0YW5jZSIsImV4aXN0aW5nVGFncyIsImlkIiwibmFtZSIsImN1cnJlbmNpZXMxIiwibGFiZWwiLCJjdXJyZW5jaWVzMiIsImN1cnJlbmNpZXMzIiwiZm9yY2VTZWxlY3RlZCIsImdlbmRlclZhbHVlcyIsInRhZ3NFbWFpbFRleHRQcm9wcyIsInZhbGlkYXRvcnMiLCJlbWFpbFZhbGlkYXRvcnMiLCJ1cmxWYWxpZGF0b3JzIiwiY3VzdG9tQWdlVmFsaWRhdG9yIiwiY3VzdG9tTnVtYmVyVmFsaWRhdG9yIiwiTnVtYmVyVmFsaWRhdG9yIiwibWluIiwibnVtYmVyVmFsaWRhdG9yIiwidHlwZXMiLCJCdXR0b25zU2hvd2Nhc2UiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsIkJhc2ljIiwiZm9ybSIsInNwZWNpYWxEYXlzSW5wdXRIZWFkZXIiLCJpbml0aWFsU3RhdGUiLCJnZW5kZXIiLCJlbWFpbCIsImFnZSIsIm1pbjEiLCJjaGVja2JveDEiLCJjaGVja2JveDIiLCJ2YWxpZGF0ZUZvcm1TdWJtaXQiLCJmb29kIiwiZHJpbmsiLCJ0b3VjaE9uIiwic3VibWl0RGlzYWJsZXNJbnB1dHMiLCJzaW11bGF0ZVVubW91bnQiLCJwcmljZXMxIiwicHJpY2VzMiIsInByaWNlczMiLCJ0aW1lU3BhbiIsImR1cmF0aW9uIiwidGltZTEiLCJ0aW1lMiIsIm9wZW5pbmdIb3VycyIsInRpbWVzIiwib3BlbmluZ0hvdXJzV2VlayIsIm9wZW5pbmdIb3Vyc1dlZWtEYXkiLCJvcGVuaW5nSG91cnNTcGVjaWFsIiwid2Vic2l0ZSIsInRhZ3MiLCJzZWxlY3RlZFZhbHVlcyIsIm11bHRpcGxlVmFsdWVzIiwibXVsdGlwbGVSZWFkb25seSIsInRleHRBcmVhVGV4dCIsImp1c3ROdW1iZXIiLCJoaWRlTnVtYmVyIiwidW5kZWZpbmVkIiwiZm9ybVJlZiIsImVsIiwic2VsZWN0ZWRWYWx1ZXNDaGFuZ2VkIiwic2V0U3RhdGUiLCJ0YWdzQ2hhbmdlZCIsIm11bHRpcGxlUmVhZG9ubHlDaGVja2VkIiwic3RhdGUiLCJvcGVuaW5nSG91cnNTcGVjaWFsQ2hhbmdlZCIsImRheXMiLCJzcGVjaWFsRGF5c0FkZENsaWNrIiwiY29uY2F0IiwiZGF0ZSIsImN1cnJlbnQiLCJleHBhbmQiLCJvcGVuaW5nSG91cnNXZWVrU3RhbmRhcmREYXlDaGFuZ2VkIiwiZGF5Iiwib3BlbmluZ0hvdXJzV2Vla0NoYW5nZWQiLCJvcGVuaW5nSG91cnNDaGFuZ2VkIiwidGltZTJDaGFuZ2VkIiwidGltZSIsInRpbWUxQ2hhbmdlZCIsInRpbWVTcGFuQ2hhbmdlZCIsInByaWNlczJDaGFuZ2VkIiwicHJpY2VzIiwicHJpY2VzM0NoYW5nZWQiLCJwcmljZXMxQ2hhbmdlZCIsIm1pbjFDaGFuZ2VkIiwiZSIsInRhcmdldCIsImp1c3ROdW1iZXJDaGFuZ2VkIiwiYWdlQ2hhbmdlZCIsIndlYnNpdGVDaGFuZ2VkIiwiZW1haWxDaGFuZ2VkIiwidGV4dEFyZWFDaGFuZ2VkIiwibmFtZUNoYW5nZWQiLCJjaGVja2JveDJDaGVja2VkIiwiY2hlY2tib3gxQ2hlY2tlZCIsImRyaW5rc0NoZWNrZWQiLCJ1blRvdWNoQWxsIiwicHJldmVudERlZmF1bHQiLCJzaW11bGF0ZVVubW91bnRDaGVja2VkIiwiZGlzYWJsZXNJbnB1dHNDaGVja2VkIiwidG91Y2hPbkNoZWNrZWQiLCJmb3JtVmFsaWRhdGlvblRvZ2dsZSIsInRvdWNoQWxsIiwiaGFuZGxlR2VuZGVyQ2hhbmdlIiwiYmluZCIsInN1Ym1pdEZvcm0iLCJkeW5hbWljU3VibWl0U3VjY2Vzc0Zvcm0iLCJkeW5hbWljU3VibWl0RXJyb3JGb3JtIiwiUmVhY3QiLCJ0aW1lMk1heCIsImFkZCIsInRpbWUyTWluIiwic3VidHJhY3QiLCJjaGVja2VkIiwiVGltZVNwYW5Vbml0IiwiSG91ciIsIk1pbnV0ZSIsInBsYWNlaG9sZGVyIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImZpbHRlciIsImluY2x1ZGVzIiwidCIsImNvbnNvbGUiLCJ3YXJuIiwidmFsIiwic3VibWl0dGluZyIsImVycm9yIiwic3VjY2VzcyIsInJlc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBb0NBO0FBc0NPLElBQU1BLFlBQWI7RUFBQTtJQUFBO0VBQUE7O0VBQUE7SUFBQTtJQUFBLE9BRUUsa0JBQ0VDLEtBREYsRUFFRUMsVUFGRixFQUdFQyxRQUhGLEVBSVc7TUFDVCxJQUFJQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0osS0FBRCxDQUFoQjs7TUFDQSxJQUFJLENBQUNLLEtBQUssQ0FBQ0YsR0FBRCxDQUFWLEVBQWlCO1FBQ2YsSUFBSUEsR0FBRyxJQUFJLENBQVgsRUFBYztVQUNaRCxRQUFRLENBQUMsZUFBRCxDQUFSO1VBQ0EsT0FBTyxLQUFQO1FBQ0Q7O1FBQ0QsSUFBSUMsR0FBRyxHQUFHLEdBQVYsRUFBZTtVQUNiRCxRQUFRLENBQUMsb0NBQUQsQ0FBUjtVQUNBLE9BQU8sS0FBUDtRQUNEOztRQUNELE9BQU8sSUFBUDtNQUNELENBVkQsTUFVTztRQUNMQSxRQUFRLENBQUMsYUFBRCxDQUFSO01BQ0Q7O01BQ0QsT0FBTyxLQUFQO0lBQ0Q7RUF0Qkg7SUFBQTtJQUFBO0lBQUE7TUFBQTtNQUFBO0lBQUE7RUFBQTs7RUFBQTtBQUFBO0FBQWFILFksQ0FDR08sUSxHQUFXLElBQUlQLFlBQUosRTtBQXdCM0IsSUFBTVEsWUFBbUIsR0FBRyxDQUMxQjtFQUNFQyxFQUFFLEVBQUUsQ0FETjtFQUVF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QTJCdkIsbURBQTNCO2VBazJCZXZGLEs7QUFBQTs7Ozs7Ozs7OzswQkFsK0JGckMsWTswQkF5QlBRLFk7MEJBMkJBRyxXOzBCQUtBRSxXOzBCQU1BQyxXOzBCQU1BRSxZOzBCQUtBQyxrQjswQkFJQUUsZTswQkFFQUMsYTswQkFFQUMsa0I7MEJBRUFDLHFCOzBCQUlBRyxlOzBCQUVBQyxLOzBCQVVBQyxlOzBCQTRCT1UsSyIsImZpbGUiOiJhZjRlMzIxLW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBEcm9wZG93bixcclxuICBGb3JtLFxyXG4gIFRpbWUsXHJcbiAgVGV4dCxcclxuICBTZWxlY3QsXHJcbiAgU3VibWl0LFxyXG4gIER5bmFtaWNTdWJtaXQsXHJcbiAgQ2hlY2tib3gsXHJcbiAgUmFkaW8sXHJcbiAgUmFkaW9Db250YWluZXIsXHJcbiAgTW9uZXksXHJcbiAgT3BlbmluZ0hvdXJzRGF5LFxyXG4gIE1vbmV5V2l0aEN1cnJlbmN5LFxyXG4gIE9wZW5pbmdIb3Vyc0RheU9iaixcclxuICBPcGVuaW5nSG91cnNXZWVrLFxyXG4gIE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmosXHJcbiAgT3BlbmluZ0hvdXJzU3BlY2lhbCxcclxuICBJbnB1dEhlYWRlcixcclxuICBCdXR0b24sXHJcbiAgQnV0dG9uVHlwZXMsXHJcbiAgVGFncyxcclxuICBUYWcsXHJcbiAgTnVtYmVyVmFsaWRhdG9yLFxyXG4gIFRleHRBcmVhLFxyXG4gIE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmosXHJcbiAgU2VsZWN0VmFsdWUsXHJcbiAgVGV4dFByb3BzLFxyXG4gIFZhbGlkYXRvclR5cGVzLFxyXG4gIElCYXNlVmFsaWRhdG9yLFxyXG4gIEJ1dHRvblByb3BzLFxyXG4gIEZvcm1WYWxpZGF0aW9uU3VtbWFyeSxcclxuICBJbnB1dEhlYWRlclJhdyxcclxuICBUaW1lU3BhbixcclxuICBUaW1lU3BhblVuaXQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2luZGV4JztcclxuaW1wb3J0IHsgRHVyYXRpb24sIGR1cmF0aW9uIH0gZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzaWNQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNpY1N0YXRlIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZ2VuZGVyOiAnTScgfCAnRicgfCAnJztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGFnZTogc3RyaW5nO1xyXG4gIG1pbjE6IHN0cmluZztcclxuICBoaWRlTnVtYmVyOiBib29sZWFuO1xyXG4gIGp1c3ROdW1iZXI6IG51bWJlcjtcclxuICBjaGVja2JveDE6IGJvb2xlYW47XHJcbiAgY2hlY2tib3gyOiBib29sZWFuO1xyXG4gIHZhbGlkYXRlRm9ybVN1Ym1pdDogYm9vbGVhbjtcclxuICBmb29kOiBzdHJpbmc7XHJcbiAgZHJpbms6IHN0cmluZztcclxuICB0b3VjaE9uOiAnYmx1cicgfCAnZm9jdXMnO1xyXG4gIHN1Ym1pdERpc2FibGVzSW5wdXRzOiBib29sZWFuO1xyXG4gIHNpbXVsYXRlVW5tb3VudDogYm9vbGVhbjtcclxuICBwcmljZXMxOiBNb25leVdpdGhDdXJyZW5jeVtdO1xyXG4gIHByaWNlczI6IE1vbmV5V2l0aEN1cnJlbmN5W107XHJcbiAgcHJpY2VzMzogTW9uZXlXaXRoQ3VycmVuY3lbXTtcclxuICB0aW1lMTogRHVyYXRpb247XHJcbiAgdGltZTI6IER1cmF0aW9uO1xyXG4gIHRpbWVTcGFuOiBEdXJhdGlvbjtcclxuICBvcGVuaW5nSG91cnM6IE9wZW5pbmdIb3Vyc0RheU9iajtcclxuICBvcGVuaW5nSG91cnNXZWVrOiBPcGVuaW5nSG91cnNXZWVrRGF5T2JqW107XHJcbiAgb3BlbmluZ0hvdXJzV2Vla0RheTogT3BlbmluZ0hvdXJzRGF5T2JqO1xyXG4gIG9wZW5pbmdIb3Vyc1NwZWNpYWw6IE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmpbXTtcclxuICB3ZWJzaXRlOiBzdHJpbmc7XHJcbiAgdGFnczogVGFnW107XHJcbiAgc2VsZWN0ZWRWYWx1ZXM6IFNlbGVjdFZhbHVlW107XHJcbiAgbXVsdGlwbGVWYWx1ZXM6IFNlbGVjdFZhbHVlW107XHJcbiAgbXVsdGlwbGVSZWFkb25seTogYm9vbGVhbjtcclxuICB0ZXh0QXJlYVRleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFnZVZhbGlkYXRvciB7XHJcbiAgcHVibGljIHN0YXRpYyBpbnN0YW5jZSA9IG5ldyBBZ2VWYWxpZGF0b3IoKTtcclxuICBwdWJsaWMgVmFsaWRhdGUoXHJcbiAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgaXNSZXF1aXJlZDogYm9vbGVhbixcclxuICAgIGFkZEVycm9yOiAoZXJyb3I6IHN0cmluZykgPT4gdm9pZFxyXG4gICk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IG51bSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICBpZiAoIWlzTmFOKG51bSkpIHtcclxuICAgICAgaWYgKG51bSA8PSAwKSB7XHJcbiAgICAgICAgYWRkRXJyb3IoJ05vdCBib3JuIHlldD8nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bSA+IDEyMikge1xyXG4gICAgICAgIGFkZEVycm9yKCdPbGRlciB0aGFuIEplYW5uZSBDYWxtZW50PyBSZWFsbHk/Jyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWRkRXJyb3IoJ0ludmFsaWQgYWdlJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBleGlzdGluZ1RhZ3M6IFRhZ1tdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogJ0Zvb2QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiAnRHJpbmsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiAnQmVlcicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6ICdXaW5lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgbmFtZTogJ0dsdXRlbiBmcmVlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgbmFtZTogJ0ZydWl0JyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VycmVuY2llczEgPSBbXHJcbiAgeyBsYWJlbDogJ0dCUCcsIHZhbHVlOiAnR0JQJyB9LFxyXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUicgfSxcclxuXTtcclxuXHJcbmNvbnN0IGN1cnJlbmNpZXMyID0gW1xyXG4gIHsgbGFiZWw6ICdHQlAnLCB2YWx1ZTogJ0dCUCcgfSxcclxuICB7IGxhYmVsOiAnRVVSJywgdmFsdWU6ICdFVVInIH0sXHJcbiAgeyBsYWJlbDogJ1VTRCcsIHZhbHVlOiAnVVNEJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VycmVuY2llczMgPSBbXHJcbiAgeyBsYWJlbDogJ0dCUCcsIHZhbHVlOiAnR0JQJywgZm9yY2VTZWxlY3RlZDogdHJ1ZSB9LFxyXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUicgfSxcclxuICB7IGxhYmVsOiAnVVNEJywgdmFsdWU6ICdVU0QnIH0sXHJcbl07XHJcblxyXG5jb25zdCBnZW5kZXJWYWx1ZXMgPSBbXHJcbiAgeyB2YWx1ZTogJ00nLCBsYWJlbDogJ01hbGUnIH0sXHJcbiAgeyB2YWx1ZTogJ0YnLCBsYWJlbDogJ0ZlbWFsZScgfSxcclxuXTtcclxuXHJcbmNvbnN0IHRhZ3NFbWFpbFRleHRQcm9wczogVGV4dFByb3BzID0ge1xyXG4gIHZhbGlkYXRvcnM6IFsnZW1haWwnXSxcclxufTtcclxuXHJcbmNvbnN0IGVtYWlsVmFsaWRhdG9yczogVmFsaWRhdG9yVHlwZXNbXSA9IFsnZW1haWwnXTtcclxuXHJcbmNvbnN0IHVybFZhbGlkYXRvcnM6IFZhbGlkYXRvclR5cGVzW10gPSBbJ3VybCddO1xyXG5cclxuY29uc3QgY3VzdG9tQWdlVmFsaWRhdG9yOiBJQmFzZVZhbGlkYXRvcltdID0gW0FnZVZhbGlkYXRvci5pbnN0YW5jZV07XHJcblxyXG5jb25zdCBjdXN0b21OdW1iZXJWYWxpZGF0b3I6IElCYXNlVmFsaWRhdG9yW10gPSBbXHJcbiAgbmV3IE51bWJlclZhbGlkYXRvcih7IG1pbjogMCB9KSxcclxuXTtcclxuXHJcbmNvbnN0IG51bWJlclZhbGlkYXRvcjogVGV4dFByb3BzWyd2YWxpZGF0b3JzJ10gPSBbJ251bWJlciddO1xyXG5cclxuY29uc3QgdHlwZXM6IEJ1dHRvblR5cGVzW10gPSBbXHJcbiAgJ3ByaW1hcnknLFxyXG4gICd3YXJuaW5nJyxcclxuICAnZXJyb3InLFxyXG4gICdpbmZvJyxcclxuICAnc3VjY2VzcycsXHJcbiAgJ2dyYXknLFxyXG4gICd3aGl0ZScsXHJcbiAgJ25vbmUnLFxyXG5dO1xyXG5jb25zdCBCdXR0b25zU2hvd2Nhc2U6IFJlYWN0LlNGQzxCdXR0b25Qcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwicHgtMlwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0OCwgMjQ3LCAyNDcpJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3R5cGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9e2l0ZW19IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9e2l0ZW19IGRpc2FibGVkPXt0cnVlfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICBEaXNhYmxlZFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQnV0dG9uc1Nob3djYXNlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjbGFzc05hbWU6ICdteS0yIG1yLTInLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2ljIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxCYXNpY1Byb3BzLCBCYXNpY1N0YXRlPiB7XHJcbiAgcHJpdmF0ZSBmb3JtOiBGb3JtO1xyXG5cclxuICBwcml2YXRlIHNwZWNpYWxEYXlzSW5wdXRIZWFkZXI6IFJlYWN0LlJlZk9iamVjdDxJbnB1dEhlYWRlclJhdz47XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbFN0YXRlOiBCYXNpY1N0YXRlID0ge1xyXG4gICAgZ2VuZGVyOiAnJyxcclxuICAgIG5hbWU6ICdUZXN0JyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIGFnZTogJycsXHJcbiAgICBtaW4xOiAnJyxcclxuICAgIGNoZWNrYm94MTogdHJ1ZSxcclxuICAgIGNoZWNrYm94MjogZmFsc2UsXHJcbiAgICB2YWxpZGF0ZUZvcm1TdWJtaXQ6IHRydWUsXHJcbiAgICBmb29kOiAnYnJlYWtmYXN0JyxcclxuICAgIGRyaW5rOiAnYnJlYWtmYXN0JyxcclxuICAgIHRvdWNoT246ICdmb2N1cycsXHJcbiAgICBzdWJtaXREaXNhYmxlc0lucHV0czogdHJ1ZSxcclxuICAgIHNpbXVsYXRlVW5tb3VudDogZmFsc2UsXHJcbiAgICBwcmljZXMxOiBbXSxcclxuICAgIHByaWNlczI6IFtdLFxyXG4gICAgcHJpY2VzMzogW10sXHJcbiAgICB0aW1lU3BhbjogZHVyYXRpb24oMCksXHJcbiAgICB0aW1lMTogZHVyYXRpb24oMCksXHJcbiAgICB0aW1lMjogZHVyYXRpb24oMCksXHJcbiAgICBvcGVuaW5nSG91cnM6IHtcclxuICAgICAgdGltZXM6IFtdLFxyXG4gICAgfSxcclxuICAgIG9wZW5pbmdIb3Vyc1dlZWs6IFtdLFxyXG4gICAgb3BlbmluZ0hvdXJzV2Vla0RheToge1xyXG4gICAgICB0aW1lczogW10sXHJcbiAgICB9LFxyXG4gICAgb3BlbmluZ0hvdXJzU3BlY2lhbDogW10sXHJcbiAgICB3ZWJzaXRlOiAnJyxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgc2VsZWN0ZWRWYWx1ZXM6IFtdLFxyXG4gICAgbXVsdGlwbGVWYWx1ZXM6IFtcclxuICAgICAgeyB2YWx1ZTogJ09uZSBvcHRpb24nIH0sXHJcbiAgICAgIHsgdmFsdWU6ICdTZWNvbmQgb3B0aW9uJyB9LFxyXG4gICAgICB7IHZhbHVlOiAnVGhpcmQgb3B0aW9uJyB9LFxyXG4gICAgICB7IHZhbHVlOiAnb25lIG1vcmUgb3B0aW9uJyB9LFxyXG4gICAgICB7IHZhbHVlOiAncmx5IGxvbmcgbGFzdCBvcHRpb24nIH0sXHJcbiAgICBdLFxyXG4gICAgbXVsdGlwbGVSZWFkb25seTogZmFsc2UsXHJcbiAgICB0ZXh0QXJlYVRleHQ6ICcnLFxyXG4gICAganVzdE51bWJlcjogNSxcclxuICAgIGhpZGVOdW1iZXI6IHVuZGVmaW5lZCxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogQmFzaWNQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5pdGlhbFN0YXRlO1xyXG4gICAgdGhpcy5oYW5kbGVHZW5kZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZUdlbmRlckNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdWJtaXRGb3JtID0gdGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybSA9IHRoaXMuZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmR5bmFtaWNTdWJtaXRFcnJvckZvcm0gPSB0aGlzLmR5bmFtaWNTdWJtaXRFcnJvckZvcm0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3BlY2lhbERheXNJbnB1dEhlYWRlciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIGxldCB0aW1lMk1heCA9IGR1cmF0aW9uKClcclxuICAgICAgLmFkZCgxLCAnaG91cicpXHJcbiAgICAgIC5hZGQoNSwgJ21pbnV0ZXMnKTtcclxuICAgIGxldCB0aW1lMk1pbiA9IGR1cmF0aW9uKClcclxuICAgICAgLnN1YnRyYWN0KDEsICdob3VyJylcclxuICAgICAgLnN1YnRyYWN0KDUsICdtaW51dGVzJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyAgbXQtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZT17dHJ1ZX0gY2xhc3NOYW1lPVwiaW5wdXRfX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUdXJuIGZvcm0gdmFsaWRhdGlvbiBvbiBvciBvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5mb3JtVmFsaWRhdGlvblRvZ2dsZX1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnZhbGlkYXRlRm9ybVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlZhbGlkYXRlIGZvcm0gc3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFJhZGlvQ29udGFpbmVyIHRpdGxlPVwiVG91Y2ggb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3VjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCbHVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLnRvdWNoT25DaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG91Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJmb2N1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZvY3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLnRvdWNoT25DaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvUmFkaW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzYWJsZXMgaW5wdXRzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZGlzYWJsZXNJbnB1dHNDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVubW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5zaW11bGF0ZVVubW91bnRDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuc2ltdWxhdGVVbm1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2ltdWxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG15LTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2FyZCAnfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2sgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuc2ltdWxhdGVVbm1vdW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5mb3JtUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgLypleHRyYUNvbXBvbmVudHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHRlc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50QXBpOiB7fSBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IFsnVGVzdCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdUZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX0qL1xyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBtZC00OFwiPmVkaXQ8L2k+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydFeGFtcGxlIGZvcm0nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3ViVGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFuZCB0aGlzIGlzIHN1YnRpdGxlLiBUaGVyZSdzIGFsc28gaWNvbiBvbiB0aGUgbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaG93RXhwYW5kQWxsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImhlcm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWREZWZhdWx0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1haW5CdXR0b249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3ByaW1hcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3VibWl0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm09e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3VibWl0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmFCdXR0b25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXsxfSBkcm9wZG93bj17dHJ1ZX0gb25DbGljaz17dGhpcy50b3VjaEFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVG91Y2ggYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnVuVG91Y2hBbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBVbi10b3VjaCBhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNob3VsZFRvZ2dsZUNvbGxhcHNlT25IZWFkZXJDbGljaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Db250YWluZXIgdGl0bGU9XCJEcmlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2luZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2hpc2tleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaGlza2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3YXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXYXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0NvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRyaW5rcyAoaG9yaXpvbnRhbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmsyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2luZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmsyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndoaXNrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2hpc2tleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmsyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNtYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmNoZWNrYm94MUNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tib3gxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRyZXNzIGNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiV2l0aCB0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCIob3B0aW9uYWwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmNoZWNrYm94MkNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tib3gyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIldhbGxldCBwYXJraW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm5hbWVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2xlYXJCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogbnVsbCB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRlc3RcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBuYW1lIChubyB0aXRsZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm5hbWVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBzb21lIGhlbHAgdGV4dC4gSXQgY2FuIGFsc28gZG8gPGI+Ym9sZDwvYj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgb3RoZXIgc3R1ZmYuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubmFtZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTmFtZSByZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J1lvdXIgZ2VuZGVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXtnZW5kZXJWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmRlckNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkdlbmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50ZXh0QXJlYUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRleHRBcmVhVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRleHRBcmVhQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGV4dEFyZWFUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnU29tZSBjb2xsYXBzZWQgc3R1ZmYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkVG9nZ2xlQ29sbGFwc2VPbkhlYWRlckNsaWNrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJUaXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJIZWxwZnVsIHRleHQgdGhhdCBkZXNjcmliZXMgd2hhdCdzIGNvbGxhcHNlZCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiV2l0aCB0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17ZW1haWxWYWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbWFpbENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eydZb3UgY2FuIHNlbGVjdCBtZSBidXQgSSBhbSByZWFkb25seSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e3VybFZhbGlkYXRvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2Vic2l0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUud2Vic2l0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy53ZWJzaXRlQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIllvdXIgd2Vic2l0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVZhbGlkYXRvcnM9e2N1c3RvbUFnZVZhbGlkYXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgYWdlIChvcHRpb25hbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5hZ2VDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tVmFsaWRhdG9ycz17Y3VzdG9tTnVtYmVyVmFsaWRhdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWluIDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1pbjF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubWluMUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGp1c3ROdW1iZXI6IDUgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSZXNldCBqdXN0IG51bWJlciB0byA1XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmhpZGVOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17ZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoaWRlTnVtYmVyOiBlLnRhcmdldC5jaGVja2VkIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIaWRlL3Nob3cgbnVtYmVyIGlucHV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRzSW5kZXRlcm1pbmF0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaGlkZU51bWJlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e251bWJlclZhbGlkYXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtgSnVzdCBudW1iZXIgKHJlcXVpcmVkKSAtICR7dGhpcy5zdGF0ZS5qdXN0TnVtYmVyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI9e3RoaXMuc3RhdGUuanVzdE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTnVtYmVyQ2hhbmdlPXt0aGlzLmp1c3ROdW1iZXJDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17bnVtYmVyVmFsaWRhdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2BKdXN0IG51bWJlciAtICR7dGhpcy5zdGF0ZS5qdXN0TnVtYmVyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI9e3RoaXMuc3RhdGUuanVzdE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTnVtYmVyQ2hhbmdlPXt0aGlzLmp1c3ROdW1iZXJDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb25leVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jaWVzPXtjdXJyZW5jaWVzMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzPXt0aGlzLnN0YXRlLnByaWNlczF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJpY2VzQ2hhbmdlPXt0aGlzLnByaWNlczFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURlbGV0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9uZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY2llcz17Y3VycmVuY2llczJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlcz17dGhpcy5zdGF0ZS5wcmljZXMyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QcmljZXNDaGFuZ2U9e3RoaXMucHJpY2VzMkNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJpY2UgbXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb25leVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jaWVzPXtjdXJyZW5jaWVzM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzPXt0aGlzLnN0YXRlLnByaWNlczN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblByaWNlc0NoYW5nZT17dGhpcy5wcmljZXMzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcmljZSBtdWx0aXBsZSBmb3JjZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17dGhpcy5zdGF0ZS50aW1lMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNoYW5nZT17dGhpcy50aW1lMUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXt0aW1lMk1heH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXt0aW1lMk1pbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXt0aGlzLnN0YXRlLnRpbWUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lQ2hhbmdlPXt0aGlzLnRpbWUyQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaXRoIE1pbi9NYXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17dGltZTJNYXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17dGltZTJNaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17dGhpcy5zdGF0ZS50aW1lMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNoYW5nZT17dGhpcy50aW1lMkNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2l0aCBNaW4vTWF4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGltZVNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lU3Bhbj17dGhpcy5zdGF0ZS50aW1lU3Bhbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNwYW5DaGFuZ2U9e3RoaXMudGltZVNwYW5DaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRpbWUgc3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkVW5pdHM9e1RpbWVTcGFuVW5pdC5Ib3VyIHwgVGltZVNwYW5Vbml0Lk1pbnV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGltZVNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lU3Bhbj17dGhpcy5zdGF0ZS50aW1lU3Bhbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNwYW5DaGFuZ2U9e3RoaXMudGltZVNwYW5DaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRpbWUgc3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkVW5pdHM9e1RpbWVTcGFuVW5pdC5Ib3VyIHwgVGltZVNwYW5Vbml0Lk1pbnV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3BlbmluZ0hvdXJzRGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnT3BlbmluZyBob3VycyBzYW1wbGUgZGF5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbmluZ0hvdXJzQ2hhbmdlPXt0aGlzLm9wZW5pbmdIb3Vyc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pbmdIb3Vycz17dGhpcy5zdGF0ZS5vcGVuaW5nSG91cnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiT3BlbmluZyBob3Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUNhcGFjaXR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J09wZW5pbmcgaG91cnMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPXsncHJpbWFyeSd9Pkhlcm8gYnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFCdXR0b25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9ezF9IGRyb3Bkb3duPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4dHJhIGJ1dHRvbiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXsyfSBkcm9wZG93bj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYSBidXR0b24gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wZW5pbmdIb3Vyc1dlZWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGF5c0NoYW5nZT17dGhpcy5vcGVuaW5nSG91cnNXZWVrQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlzPXt0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc1dlZWt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhbmRhcmREYXk9e3RoaXMuc3RhdGUub3BlbmluZ0hvdXJzV2Vla0RheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblN0YW5kYXJkRGF5Q2hhbmdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbmluZ0hvdXJzV2Vla1N0YW5kYXJkRGF5Q2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VDYXBhY2l0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydTcGVjaWFsIGRheXMgb3BlbmluZyBob3Vycyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuc3BlY2lhbERheXNJbnB1dEhlYWRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3ByaW1hcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zcGVjaWFsRGF5c0FkZENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVuaW5nSG91cnNTcGVjaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRheXNDaGFuZ2U9e3RoaXMub3BlbmluZ0hvdXJzU3BlY2lhbENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5cz17dGhpcy5zdGF0ZS5vcGVuaW5nSG91cnNTcGVjaWFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0J1dHRvbnMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQnV0dG9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9eydwcmltYXJ5J30+SGVybyBidXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlN0YW5kYXJkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPk5vIHNoYWRvdzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBub1NoYWRvdz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+SGVybzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBoZXJvPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5PdXRsaW5lZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBvdXRsaW5lZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Qmxhbms8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgYmxhbms9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlNtYWxsPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIHNtYWxsPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5DaXJjdWxhcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBjaXJjdWxhcj17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+RHJvcGRvd248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgZHJvcGRvd249e3RydWV9IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlVub2J0cnVzaXZlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIHVub2J0cnVzaXZlPXt0cnVlfSBjbGFzc05hbWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5UZXh0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIHRleHQ9e3RydWV9IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkRpc2FibGUgYWZ0ZXIgY2xpY2s8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVBZnRlckNsaWNrTXM9ezIwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQWZ0ZXJDbGljaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydNdWx0aXBsZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWREZWZhdWx0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGFiZWw9XCJNdWx0aXBsZSByZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLm11bHRpcGxlUmVhZG9ubHlDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk11bHRpcGxlIHJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3MgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbmQgbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQcm9wcz17eyBwbGFjZWhvbGRlcjogJ1dpdGggcGxhY2Vob2xkZXInIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZD17dGhpcy50YWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3Mgc3VnZ2VzdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2hvb3NlIG9yIGNyZWF0ZSB0YWdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaEV4aXN0aW5nVGFncz17c3RhcnRzV2l0aCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1RhZ3MuZmlsdGVyKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm5hbWUuaW5jbHVkZXMoc3RhcnRzV2l0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudD17J05vdCBmb3VuZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZD17dGhpcy50YWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJFeGlzdGluZ1RhZ3M9eyh0LCB0YWdzKSA9PiB0YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGFncyBzdWdnZXN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaG9vc2UgdGFnc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGFncz17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1RhZ3M9e2V4aXN0aW5nVGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZD17dGhpcy50YWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2hpcHM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIG1heCAzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUYWdzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NoaXBzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnQ2xpY2s9e3QgPT4gY29uc29sZS53YXJuKHQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGFncyBvbmx5IGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldpdGggbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFRhZ3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZD17dGhpcy50YWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50PXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQcm9wcz17dGFnc0VtYWlsVGV4dFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPbmUgb3IgbW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNdWx0aXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEVtcHR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt0aGlzLnN0YXRlLm11bHRpcGxlVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0ZWRWYWx1ZXNDaGFuZ2U9e3RoaXMuc2VsZWN0ZWRWYWx1ZXNDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVzOiBbeyB2YWx1ZTogJ09uZSBvcHRpb24nIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0Ryb3Bkb3duJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZERlZmF1bHQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvdyBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ub3RpZmljYXRpb25zPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQ291bnQ9ezV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtZW51Q2xhc3NOYW1lPVwicC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dBcnJvdz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBkcm9wZG93bj17dHJ1ZX0gY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgbXItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydTdHJpbmcgaGVhZGVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNvdW50PXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWVudUNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkl0ZW08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+RnVuY3Rpb24gaGVhZGVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QXJyb3c9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWVudUNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkl0ZW08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtVmFsaWRhdGlvblN1bW1hcnkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIG15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPER5bmFtaWNTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXREaXNhYmxlc0lucHV0cz17dGhpcy5zdGF0ZS5zdWJtaXREaXNhYmxlc0lucHV0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsQ2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNsYXNzTmFtZT1cImJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmdDbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNoaWxkcmVuPXsnRXJyb3InfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmdDaGlsZHJlbj17J1dvcmtpbmcgb24gaXQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybT17dGhpcy5zdGF0ZS52YWxpZGF0ZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBamF4IEVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHluYW1pY1N1Ym1pdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPER5bmFtaWNTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXREaXNhYmxlc0lucHV0cz17dGhpcy5zdGF0ZS5zdWJtaXREaXNhYmxlc0lucHV0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxDbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydwcmltYXJ5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nQ2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NsYXNzTmFtZT1cImJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nQ2hpbGRyZW49eydXb3JraW5nIG9uIGl0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2hpbGRyZW49eydUaGF0IHdvcmtlZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5keW5hbWljU3VibWl0RXJyb3JGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybT17dGhpcy5zdGF0ZS52YWxpZGF0ZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBamF4IFN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EeW5hbWljU3VibWl0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtUmVmID0gKGVsOiBGb3JtKSA9PiAodGhpcy5mb3JtID0gZWwpO1xyXG5cclxuICBwcml2YXRlIHNlbGVjdGVkVmFsdWVzQ2hhbmdlZCA9IChzZWxlY3RlZFZhbHVlczogU2VsZWN0VmFsdWVbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFZhbHVlcyB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0YWdzQ2hhbmdlZCA9ICh0YWdzOiBUYWdbXSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRhZ3MgfSk7XHJcblxyXG4gIHByaXZhdGUgbXVsdGlwbGVSZWFkb25seUNoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG11bHRpcGxlUmVhZG9ubHk6ICF0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHkgfSk7XHJcblxyXG4gIHByaXZhdGUgb3BlbmluZ0hvdXJzU3BlY2lhbENoYW5nZWQgPSAoZGF5czogT3BlbmluZ0hvdXJzU3BlY2lhbERheU9ialtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5pbmdIb3Vyc1NwZWNpYWw6IGRheXMgfSk7XHJcblxyXG4gIHByaXZhdGUgc3BlY2lhbERheXNBZGRDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBvcGVuaW5nSG91cnNTcGVjaWFsOiB0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc1NwZWNpYWwuY29uY2F0KFtcclxuICAgICAgICAgIHsgZGF0ZTogdW5kZWZpbmVkLCB0aW1lczogW10gfSxcclxuICAgICAgICBdKSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5zcGVjaWFsRGF5c0lucHV0SGVhZGVyLmN1cnJlbnQuZXhwYW5kKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvcGVuaW5nSG91cnNXZWVrU3RhbmRhcmREYXlDaGFuZ2VkID0gKGRheTogT3BlbmluZ0hvdXJzV2Vla0RheU9iaikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnNXZWVrRGF5OiBkYXkgfSk7XHJcblxyXG4gIHByaXZhdGUgb3BlbmluZ0hvdXJzV2Vla0NoYW5nZWQgPSAoZGF5czogT3BlbmluZ0hvdXJzV2Vla0RheU9ialtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5pbmdIb3Vyc1dlZWs6IGRheXMgfSk7XHJcblxyXG4gIHByaXZhdGUgb3BlbmluZ0hvdXJzQ2hhbmdlZCA9IChvcGVuaW5nSG91cnM6IE9wZW5pbmdIb3Vyc0RheU9iaikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnM6IG9wZW5pbmdIb3VycyB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0aW1lMkNoYW5nZWQgPSAodGltZTogRHVyYXRpb24pID0+IHRoaXMuc2V0U3RhdGUoeyB0aW1lMjogdGltZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0aW1lMUNoYW5nZWQgPSAodGltZTogRHVyYXRpb24pID0+IHRoaXMuc2V0U3RhdGUoeyB0aW1lMTogdGltZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0aW1lU3BhbkNoYW5nZWQgPSAodGltZVNwYW46IER1cmF0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgdGltZVNwYW4gfSk7XHJcblxyXG4gIHByaXZhdGUgcHJpY2VzMkNoYW5nZWQgPSAocHJpY2VzOiBNb25leVdpdGhDdXJyZW5jeVtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlczI6IHByaWNlcyB9KTtcclxuXHJcbiAgcHJpdmF0ZSBwcmljZXMzQ2hhbmdlZCA9IChwcmljZXM6IE1vbmV5V2l0aEN1cnJlbmN5W10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2VzMzogcHJpY2VzIH0pO1xyXG5cclxuICBwcml2YXRlIHByaWNlczFDaGFuZ2VkID0gKHByaWNlczogTW9uZXlXaXRoQ3VycmVuY3lbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZXMxOiBwcmljZXMgfSk7XHJcblxyXG4gIHByaXZhdGUgbWluMUNoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbWluMTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUganVzdE51bWJlckNoYW5nZWQgPSAobnVtOiBudW1iZXIpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsganVzdE51bWJlcjogbnVtIH0pO1xyXG5cclxuICBwcml2YXRlIGFnZUNoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWdlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB3ZWJzaXRlQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJzaXRlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBlbWFpbENoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIHRleHRBcmVhQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0QXJlYVRleHQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIG5hbWVDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIGNoZWNrYm94MkNoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrYm94MjogIXRoaXMuc3RhdGUuY2hlY2tib3gyIH0pO1xyXG5cclxuICBwcml2YXRlIGNoZWNrYm94MUNoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrYm94MTogIXRoaXMuc3RhdGUuY2hlY2tib3gxIH0pO1xyXG5cclxuICBwcml2YXRlIGRyaW5rc0NoZWNrZWQgPSAodmFsdWU6IHN0cmluZykgPT4gdGhpcy5zZXRTdGF0ZSh7IGRyaW5rOiB2YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB1blRvdWNoQWxsID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvcm0udW5Ub3VjaEFsbCgpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgc2ltdWxhdGVVbm1vdW50Q2hlY2tlZCA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2ltdWxhdGVVbm1vdW50OiAhdGhpcy5zdGF0ZS5zaW11bGF0ZVVubW91bnQgfSk7XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZXNJbnB1dHNDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJtaXREaXNhYmxlc0lucHV0czogIXRoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHMgfSk7XHJcblxyXG4gIHByaXZhdGUgdG91Y2hPbkNoZWNrZWQgPSAodmFsdWU6ICdibHVyJyB8ICdmb2N1cycpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdG91Y2hPbjogdmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgZm9ybVZhbGlkYXRpb25Ub2dnbGUgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRlRm9ybVN1Ym1pdDogIXRoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0IH0pO1xyXG5cclxuICBwcml2YXRlIHRvdWNoQWxsID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvcm0udG91Y2hBbGwoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGhhbmRsZUdlbmRlckNoYW5nZShlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKHZhbCA9PT0gJ00nIHx8IHZhbCA9PT0gJ0YnKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5kZXI6IHZhbCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3VibWl0Rm9ybShlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcclxuICAgIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybShcclxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxyXG4gICAgc3VibWl0dGluZzogKCkgPT4gdm9pZCxcclxuICAgIGVycm9yOiAoKSA9PiB2b2lkLFxyXG4gICAgc3VjY2VzczogKCkgPT4gdm9pZCxcclxuICAgIHJlc2V0OiAoKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzdWJtaXR0aW5nKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZXJyb3IoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNldCgpLCAzMDAwKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkeW5hbWljU3VibWl0RXJyb3JGb3JtKFxyXG4gICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4sXHJcbiAgICBzdWJtaXR0aW5nOiAoKSA9PiB2b2lkLFxyXG4gICAgZXJyb3I6ICgpID0+IHZvaWQsXHJcbiAgICBzdWNjZXNzOiAoKSA9PiB2b2lkLFxyXG4gICAgcmVzZXQ6ICgpID0+IHZvaWRcclxuICApIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHN1Ym1pdHRpbmcoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzdWNjZXNzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzZXQoKSwgMzAwMCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9