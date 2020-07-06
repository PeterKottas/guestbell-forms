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
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};




var AgeValidator =
/*#__PURE__*/
function () {
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
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
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
var types = ['primary', 'warning', 'error', 'info', 'success', 'gray', 'white', 'none'];

var ButtonsShowcase = function ButtonsShowcase(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "px-2",
    style: {
      backgroundColor: 'rgb(248, 247, 247)',
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, types.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({
      type: item
    }, props), item), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({
      type: item,
      disabled: true
    }, props), "Disabled"));
  }));
};

ButtonsShowcase.defaultProps = {
  className: 'my-2 mr-2'
};
var Basic =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Basic, _React$PureComponent);

  function Basic(props) {
    var _this;

    _classCallCheck(this, Basic);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Basic).call(this, props));
    _this.form = void 0;
    _this.specialDaysInputHeader = void 0;
    _this.dropdownFunctionHeader = void 0;
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
      textAreaText: ''
    };

    _this.formRef = function (el) {
      return _this.form = el;
    };

    _this.dropdownFunctionHeaderRef = function (el) {
      return _this.dropdownFunctionHeader = el;
    };

    _this.functionHeaderClick = function () {
      return _this.dropdownFunctionHeader.showNavigation();
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
    _this.specialDaysInputHeader = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    return _this;
  }

  _createClass(Basic, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var time2Max = Object(moment__WEBPACK_IMPORTED_MODULE_2__["duration"])().add(1, 'hour').add(5, 'minutes');
      var time2Min = Object(moment__WEBPACK_IMPORTED_MODULE_2__["duration"])().subtract(1, 'hour').subtract(5, 'minutes');
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "row  mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "card-block p-0"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        noValidate: true,
        className: "input__form"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        label: "Turn form validation on or off",
        onChecked: this.formValidationToggle,
        checked: this.state.validateFormSubmit,
        title: "Validate form submit"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["RadioContainer"], {
        title: "Touch on"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
        name: "touch",
        value: "blur",
        label: "Blur",
        result: this.state.touchOn,
        onChecked: this.touchOnChecked
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
        name: "touch",
        value: "focus",
        label: "Focus",
        result: this.state.touchOn,
        onChecked: this.touchOnChecked
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        label: "Disables inputs",
        onChecked: this.disablesInputsChecked,
        checked: this.state.submitDisablesInputs,
        title: "Submit"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        label: "Unmount",
        onChecked: this.simulateUnmountChecked,
        checked: this.state.simulateUnmount,
        title: "Simulate"
      })))))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "row my-5"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "col-lg-12"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'card '
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "card-block p-0"
      }, !this.state.simulateUnmount && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Form"], {
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

      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["InputHeader"], {
        icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
          className: "material-icons md-48"
        }, "edit"),
        title: 'Example form',
        subTitle: "And this is subtitle. There's also icon on the left",
        showExpandAll: true,
        type: "hero",
        collapsible: true,
        collapsedDefault: false,
        mainButton: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Submit"], {
          type: 'primary',
          onClick: this.submitForm,
          validateForm: this.state.validateFormSubmit
        }, "Submit"),
        extraButtons: [react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          key: 1,
          dropdown: true,
          onClick: this.touchAll
        }, "Touch all"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          key: 2,
          dropdown: true,
          onClick: this.unTouchAll
        }, "Un-touch all")],
        shouldToggleCollapseOnHeaderClick: true
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["RadioContainer"], {
        title: "Drinks"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
        name: "drink",
        value: "wine",
        label: "Wine",
        result: this.state.drink,
        onChecked: this.drinksChecked
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
        name: "drink",
        value: "whiskey",
        label: "Whiskey",
        result: this.state.drink,
        onChecked: this.drinksChecked
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
        name: "drink",
        value: "water",
        label: "Water",
        result: this.state.drink,
        onChecked: this.drinksChecked
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["RadioContainer"], {
        title: "Drinks (horizontal)",
        horizontal: true
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
        name: "drink2",
        value: "wine",
        label: "Wine",
        result: this.state.drink,
        onChecked: this.drinksChecked
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
        name: "drink2",
        value: "whiskey",
        label: "Whiskey",
        result: this.state.drink,
        onChecked: this.drinksChecked
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Radio"], {
        name: "drink2",
        value: "water",
        label: "Water",
        result: this.state.drink,
        onChecked: this.drinksChecked
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        required: true,
        label: "Smart",
        onChecked: this.checkbox1Checked,
        checked: this.state.checkbox1,
        title: "Dress code",
        tooltip: "With tooltip"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        label: "(optional)",
        onChecked: this.checkbox2Checked,
        checked: this.state.checkbox2,
        title: "Wallet parking"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        required: true,
        label: "Your name",
        onChange: this.nameChanged,
        value: this.state.name,
        title: "Name"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: function onClick() {
          return _this2.setState({
            name: null
          });
        }
      }, "Test"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "px-3"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        required: true,
        label: "Your name (no title)",
        onChange: this.nameChanged,
        value: this.state.name,
        tooltip: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
          className: "m-0"
        }, "This is some help text. It can also do ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, "bold"), ' ', "and other stuff.")
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        label: "Your name",
        onChange: this.nameChanged,
        value: this.state.name,
        title: "Name readonly",
        readOnly: true
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Select"], {
        touchOn: this.state.touchOn,
        label: 'Your gender',
        values: genderValues,
        onChange: this.handleGenderChange,
        value: this.state.gender,
        title: "Gender"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["TextArea"], {
        touchOn: this.state.touchOn,
        required: true,
        label: "Textarea",
        onChange: this.textAreaChanged,
        value: this.state.textAreaText,
        title: "Textarea"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["TextArea"], {
        touchOn: this.state.touchOn,
        label: "Textarea",
        onChange: this.textAreaChanged,
        value: this.state.textAreaText,
        title: "Readonly",
        readOnly: true
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["InputHeader"], {
        title: 'Some collapsed stuff',
        collapsible: true,
        shouldToggleCollapseOnHeaderClick: true,
        subTitle: "Helpful text that describes what's collapsed here",
        tooltip: "With tooltip"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        validators: emailValidators,
        required: false,
        label: "Email",
        value: this.state.email,
        onChange: this.emailChanged,
        title: "Your email"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        readOnly: true,
        value: 'You can select me but I am readonly',
        title: "Readonly"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        validators: urlValidators,
        required: false,
        label: "Website",
        value: this.state.website,
        onChange: this.websiteChanged,
        title: "Your website"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        customValidators: customAgeValidator,
        label: "Your age (optional)",
        value: this.state.age,
        onChange: this.ageChanged,
        title: "Age",
        type: "number"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        touchOn: this.state.touchOn,
        customValidators: customNumberValidator,
        label: "Min 1",
        value: this.state.min1,
        onChange: this.min1Changed,
        title: "Number"
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Money"], {
        currencies: currencies1,
        prices: this.state.prices1,
        touchOn: this.state.touchOn,
        required: true,
        onPricesChange: this.prices1Changed,
        title: "Price"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Money"], {
        currencies: currencies2,
        prices: this.state.prices2,
        allowMultiple: true,
        touchOn: this.state.touchOn,
        required: false,
        onPricesChange: this.prices2Changed,
        title: "Price multiple"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Money"], {
        currencies: currencies3,
        prices: this.state.prices3,
        allowMultiple: true,
        touchOn: this.state.touchOn,
        required: false,
        onPricesChange: this.prices3Changed,
        title: "Price multiple forced"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Time"], {
        touchOn: this.state.touchOn,
        time: this.state.time1,
        timeChange: this.time1Changed,
        title: "Time"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Time"], {
        max: time2Max,
        min: time2Min,
        touchOn: this.state.touchOn,
        time: this.state.time2,
        timeChange: this.time2Changed,
        title: "With Min/Max"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["TimeSpan"], {
        touchOn: this.state.touchOn,
        timeSpan: this.state.timeSpan,
        timeSpanChange: this.timeSpanChanged,
        title: "Time span",
        validUnits: _lib_index__WEBPACK_IMPORTED_MODULE_1__["TimeSpanUnit"].Hour | _lib_index__WEBPACK_IMPORTED_MODULE_1__["TimeSpanUnit"].Minute
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["OpeningHoursDay"], {
        label: 'Opening hours sample day',
        touchOn: this.state.touchOn,
        required: false,
        onOpeningHoursChange: this.openingHoursChanged,
        openingHours: this.state.openingHours,
        title: "Opening hours",
        useCapacity: true
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["InputHeader"], {
        title: 'Opening hours',
        collapsible: true,
        mainButton: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: 'primary'
        }, "Hero button"),
        extraButtons: [react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          key: 1,
          dropdown: true
        }, "Extra button 1"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          key: 2,
          dropdown: true
        }, "Extra button 2")]
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["OpeningHoursWeek"], {
        touchOn: this.state.touchOn,
        required: false,
        onDaysChange: this.openingHoursWeekChanged,
        days: this.state.openingHoursWeek,
        standardDay: this.state.openingHoursWeekDay,
        onStandardDayChange: this.openingHoursWeekStandardDayChanged,
        useCapacity: true
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["InputHeader"], {
        className: '',
        title: 'Special days opening hours',
        collapsible: true,
        ref: this.specialDaysInputHeader,
        mainButton: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: 'primary',
          onClick: this.specialDaysAddClick
        }, "Add")
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["OpeningHoursSpecial"], {
        touchOn: this.state.touchOn,
        required: false,
        onDaysChange: this.openingHoursSpecialChanged,
        days: this.state.openingHoursSpecial,
        placeholder: "Choose date"
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["InputHeader"], {
        className: '',
        title: 'Buttons',
        mainButton: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          type: 'primary'
        }, "Hero button")
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Standard"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, null)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "No shadow"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        noShadow: true
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Hero"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        hero: true
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Outlined"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        outlined: true
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Blank"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        blank: true
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Small"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        small: true
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Circular"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        circular: true
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Dropdown"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        dropdown: true,
        className: ""
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Unobtrusive"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        unobtrusive: true,
        className: ""
      }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["InputHeader"], {
        className: '',
        title: 'Multiple',
        collapsible: true,
        collapsedDefault: false
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Checkbox"] // label="Multiple readonly"
      , {
        onChecked: this.multipleReadonlyChecked,
        checked: this.state.multipleReadonly,
        title: "Multiple readonly"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Tags"], {
        title: "Tags example",
        label: "And label",
        textProps: {
          placeholder: 'With placeholder'
        },
        readOnly: this.state.multipleReadonly,
        allowNew: true,
        tags: this.state.tags,
        onTagsChanged: this.tagsChanged
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Tags"], {
        title: "Tags suggestions",
        label: "Choose or create tags",
        readOnly: this.state.multipleReadonly,
        allowNew: true,
        maxTags: 2,
        existingTags: existingTags,
        tags: this.state.tags,
        onTagsChanged: this.tagsChanged,
        showChips: true
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Tags"], {
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
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Tags"], {
        title: "Tags only email",
        label: "With label",
        maxTags: 2,
        allowNew: true,
        readOnly: this.state.multipleReadonly,
        tags: this.state.tags,
        onTagsChanged: this.tagsChanged,
        suggestionsEmptyComponent: null,
        textProps: tagsEmailTextProps
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Select"], {
        required: true,
        label: "One or more",
        title: "Multiselect",
        multiple: true,
        defaultEmpty: true,
        readOnly: this.state.multipleReadonly,
        selectedValues: this.state.selectedValues,
        values: this.state.multipleValues,
        onSelectedValuesChange: this.selectedValuesChanged
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: function onClick(e) {
          return _this2.setState({
            selectedValues: [{
              value: 'One option'
            }]
          });
        }
      }, "Test")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["InputHeader"], {
        className: '',
        title: 'Dropdown',
        collapsible: true,
        collapsedDefault: false
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row d-flex"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "position-relative mr-3",
        header: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
          className: "material-icons"
        }, "notifications"),
        notificationCount: 5,
        submenuClassName: "p-2",
        showArrow: false
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, "Item")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "position-relative mr-3",
        header: 'String header',
        notificationCount: 5,
        submenuClassName: "p-2"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, "Item")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "position-relative",
        ref: this.dropdownFunctionHeaderRef,
        header: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          onClick: this.functionHeaderClick,
          type: "primary"
        }, "Function header"),
        showArrow: false,
        submenuClassName: "p-2"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, "Item")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["FormValidationSummary"], null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "row justify-content-center align-items-center my-2"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["DynamicSubmit"], {
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
      }, "Ajax Error"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["DynamicSubmit"], {
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
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DbGllbnRBcHAvcGFnZXMvYmFzaWMvQmFzaWMudHN4Il0sIm5hbWVzIjpbIkFnZVZhbGlkYXRvciIsInZhbHVlIiwiaXNSZXF1aXJlZCIsImFkZEVycm9yIiwibnVtIiwiTnVtYmVyIiwiaXNOYU4iLCJpbnN0YW5jZSIsImV4aXN0aW5nVGFncyIsImlkIiwibmFtZSIsImN1cnJlbmNpZXMxIiwibGFiZWwiLCJjdXJyZW5jaWVzMiIsImN1cnJlbmNpZXMzIiwiZm9yY2VTZWxlY3RlZCIsImdlbmRlclZhbHVlcyIsInRhZ3NFbWFpbFRleHRQcm9wcyIsInZhbGlkYXRvcnMiLCJlbWFpbFZhbGlkYXRvcnMiLCJ1cmxWYWxpZGF0b3JzIiwiY3VzdG9tQWdlVmFsaWRhdG9yIiwiY3VzdG9tTnVtYmVyVmFsaWRhdG9yIiwiTnVtYmVyVmFsaWRhdG9yIiwibWluIiwidHlwZXMiLCJCdXR0b25zU2hvd2Nhc2UiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsIkJhc2ljIiwiZm9ybSIsInNwZWNpYWxEYXlzSW5wdXRIZWFkZXIiLCJkcm9wZG93bkZ1bmN0aW9uSGVhZGVyIiwiaW5pdGlhbFN0YXRlIiwiZ2VuZGVyIiwiZW1haWwiLCJhZ2UiLCJtaW4xIiwiY2hlY2tib3gxIiwiY2hlY2tib3gyIiwidmFsaWRhdGVGb3JtU3VibWl0IiwiZm9vZCIsImRyaW5rIiwidG91Y2hPbiIsInN1Ym1pdERpc2FibGVzSW5wdXRzIiwic2ltdWxhdGVVbm1vdW50IiwicHJpY2VzMSIsInByaWNlczIiLCJwcmljZXMzIiwidGltZVNwYW4iLCJkdXJhdGlvbiIsInRpbWUxIiwidGltZTIiLCJvcGVuaW5nSG91cnMiLCJ0aW1lcyIsIm9wZW5pbmdIb3Vyc1dlZWsiLCJvcGVuaW5nSG91cnNXZWVrRGF5Iiwib3BlbmluZ0hvdXJzU3BlY2lhbCIsIndlYnNpdGUiLCJ0YWdzIiwic2VsZWN0ZWRWYWx1ZXMiLCJtdWx0aXBsZVZhbHVlcyIsIm11bHRpcGxlUmVhZG9ubHkiLCJ0ZXh0QXJlYVRleHQiLCJmb3JtUmVmIiwiZWwiLCJkcm9wZG93bkZ1bmN0aW9uSGVhZGVyUmVmIiwiZnVuY3Rpb25IZWFkZXJDbGljayIsInNob3dOYXZpZ2F0aW9uIiwic2VsZWN0ZWRWYWx1ZXNDaGFuZ2VkIiwic2V0U3RhdGUiLCJ0YWdzQ2hhbmdlZCIsIm11bHRpcGxlUmVhZG9ubHlDaGVja2VkIiwic3RhdGUiLCJvcGVuaW5nSG91cnNTcGVjaWFsQ2hhbmdlZCIsImRheXMiLCJzcGVjaWFsRGF5c0FkZENsaWNrIiwiY29uY2F0IiwiZGF0ZSIsInVuZGVmaW5lZCIsImN1cnJlbnQiLCJleHBhbmQiLCJvcGVuaW5nSG91cnNXZWVrU3RhbmRhcmREYXlDaGFuZ2VkIiwiZGF5Iiwib3BlbmluZ0hvdXJzV2Vla0NoYW5nZWQiLCJvcGVuaW5nSG91cnNDaGFuZ2VkIiwidGltZTJDaGFuZ2VkIiwidGltZSIsInRpbWUxQ2hhbmdlZCIsInRpbWVTcGFuQ2hhbmdlZCIsInByaWNlczJDaGFuZ2VkIiwicHJpY2VzIiwicHJpY2VzM0NoYW5nZWQiLCJwcmljZXMxQ2hhbmdlZCIsIm1pbjFDaGFuZ2VkIiwiZSIsInRhcmdldCIsImFnZUNoYW5nZWQiLCJ3ZWJzaXRlQ2hhbmdlZCIsImVtYWlsQ2hhbmdlZCIsInRleHRBcmVhQ2hhbmdlZCIsIm5hbWVDaGFuZ2VkIiwiY2hlY2tib3gyQ2hlY2tlZCIsImNoZWNrYm94MUNoZWNrZWQiLCJkcmlua3NDaGVja2VkIiwidW5Ub3VjaEFsbCIsInByZXZlbnREZWZhdWx0Iiwic2ltdWxhdGVVbm1vdW50Q2hlY2tlZCIsImRpc2FibGVzSW5wdXRzQ2hlY2tlZCIsInRvdWNoT25DaGVja2VkIiwiZm9ybVZhbGlkYXRpb25Ub2dnbGUiLCJ0b3VjaEFsbCIsImhhbmRsZUdlbmRlckNoYW5nZSIsImJpbmQiLCJzdWJtaXRGb3JtIiwiZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtIiwiZHluYW1pY1N1Ym1pdEVycm9yRm9ybSIsIlJlYWN0IiwidGltZTJNYXgiLCJhZGQiLCJ0aW1lMk1pbiIsInN1YnRyYWN0IiwiVGltZVNwYW5Vbml0IiwiSG91ciIsIk1pbnV0ZSIsInBsYWNlaG9sZGVyIiwidCIsImNvbnNvbGUiLCJ3YXJuIiwidmFsIiwic3VibWl0dGluZyIsImVycm9yIiwic3VjY2VzcyIsInJlc2V0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBb0NBO0FBb0NPLElBQU1BLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw2QkFHSUMsS0FISixFQUlJQyxVQUpKLEVBS0lDLFFBTEosRUFNYTtBQUNULFVBQUlDLEdBQUcsR0FBR0MsTUFBTSxDQUFDSixLQUFELENBQWhCOztBQUNBLFVBQUksQ0FBQ0ssS0FBSyxDQUFDRixHQUFELENBQVYsRUFBaUI7QUFDZixZQUFJQSxHQUFHLElBQUksQ0FBWCxFQUFjO0FBQ1pELGtCQUFRLENBQUMsZUFBRCxDQUFSO0FBQ0EsaUJBQU8sS0FBUDtBQUNEOztBQUNELFlBQUlDLEdBQUcsR0FBRyxHQUFWLEVBQWU7QUFDYkQsa0JBQVEsQ0FBQyxvQ0FBRCxDQUFSO0FBQ0EsaUJBQU8sS0FBUDtBQUNEOztBQUNELGVBQU8sSUFBUDtBQUNELE9BVkQsTUFVTztBQUNMQSxnQkFBUSxDQUFDLGFBQUQsQ0FBUjtBQUNEOztBQUNELGFBQU8sS0FBUDtBQUNEO0FBdEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFhSCxZLENBQ0dPLFEsR0FBVyxJQUFJUCxZQUFKLEU7QUF3QjNCLElBQU1RLFlBQW1CLEdBQUcsQ0FDMUI7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FEMEIsRUFLMUI7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LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBEcm9wZG93bixcclxuICBGb3JtLFxyXG4gIFRpbWUsXHJcbiAgVGV4dCxcclxuICBTZWxlY3QsXHJcbiAgU3VibWl0LFxyXG4gIER5bmFtaWNTdWJtaXQsXHJcbiAgQ2hlY2tib3gsXHJcbiAgUmFkaW8sXHJcbiAgUmFkaW9Db250YWluZXIsXHJcbiAgTW9uZXksXHJcbiAgT3BlbmluZ0hvdXJzRGF5LFxyXG4gIE1vbmV5V2l0aEN1cnJlbmN5LFxyXG4gIE9wZW5pbmdIb3Vyc0RheU9iaixcclxuICBPcGVuaW5nSG91cnNXZWVrLFxyXG4gIE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmosXHJcbiAgT3BlbmluZ0hvdXJzU3BlY2lhbCxcclxuICBJbnB1dEhlYWRlcixcclxuICBCdXR0b24sXHJcbiAgQnV0dG9uVHlwZXMsXHJcbiAgVGFncyxcclxuICBUYWcsXHJcbiAgTnVtYmVyVmFsaWRhdG9yLFxyXG4gIFRleHRBcmVhLFxyXG4gIE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmosXHJcbiAgU2VsZWN0VmFsdWUsXHJcbiAgVGV4dFByb3BzLFxyXG4gIFZhbGlkYXRvclR5cGVzLFxyXG4gIElCYXNlVmFsaWRhdG9yLFxyXG4gIEJ1dHRvblByb3BzLFxyXG4gIEZvcm1WYWxpZGF0aW9uU3VtbWFyeSxcclxuICBJbnB1dEhlYWRlclJhdyxcclxuICBUaW1lU3BhbixcclxuICBUaW1lU3BhblVuaXQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2luZGV4JztcclxuaW1wb3J0IHsgRHVyYXRpb24sIGR1cmF0aW9uIH0gZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzaWNQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNpY1N0YXRlIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZ2VuZGVyOiAnTScgfCAnRicgfCAnJztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGFnZTogc3RyaW5nO1xyXG4gIG1pbjE6IHN0cmluZztcclxuICBjaGVja2JveDE6IGJvb2xlYW47XHJcbiAgY2hlY2tib3gyOiBib29sZWFuO1xyXG4gIHZhbGlkYXRlRm9ybVN1Ym1pdDogYm9vbGVhbjtcclxuICBmb29kOiBzdHJpbmc7XHJcbiAgZHJpbms6IHN0cmluZztcclxuICB0b3VjaE9uOiAnYmx1cicgfCAnZm9jdXMnO1xyXG4gIHN1Ym1pdERpc2FibGVzSW5wdXRzOiBib29sZWFuO1xyXG4gIHNpbXVsYXRlVW5tb3VudDogYm9vbGVhbjtcclxuICBwcmljZXMxOiBNb25leVdpdGhDdXJyZW5jeVtdO1xyXG4gIHByaWNlczI6IE1vbmV5V2l0aEN1cnJlbmN5W107XHJcbiAgcHJpY2VzMzogTW9uZXlXaXRoQ3VycmVuY3lbXTtcclxuICB0aW1lMTogRHVyYXRpb247XHJcbiAgdGltZTI6IER1cmF0aW9uO1xyXG4gIHRpbWVTcGFuOiBEdXJhdGlvbjtcclxuICBvcGVuaW5nSG91cnM6IE9wZW5pbmdIb3Vyc0RheU9iajtcclxuICBvcGVuaW5nSG91cnNXZWVrOiBPcGVuaW5nSG91cnNXZWVrRGF5T2JqW107XHJcbiAgb3BlbmluZ0hvdXJzV2Vla0RheTogT3BlbmluZ0hvdXJzRGF5T2JqO1xyXG4gIG9wZW5pbmdIb3Vyc1NwZWNpYWw6IE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmpbXTtcclxuICB3ZWJzaXRlOiBzdHJpbmc7XHJcbiAgdGFnczogVGFnW107XHJcbiAgc2VsZWN0ZWRWYWx1ZXM6IFNlbGVjdFZhbHVlW107XHJcbiAgbXVsdGlwbGVWYWx1ZXM6IFNlbGVjdFZhbHVlW107XHJcbiAgbXVsdGlwbGVSZWFkb25seTogYm9vbGVhbjtcclxuICB0ZXh0QXJlYVRleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFnZVZhbGlkYXRvciB7XHJcbiAgcHVibGljIHN0YXRpYyBpbnN0YW5jZSA9IG5ldyBBZ2VWYWxpZGF0b3IoKTtcclxuICBwdWJsaWMgVmFsaWRhdGUoXHJcbiAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgaXNSZXF1aXJlZDogYm9vbGVhbixcclxuICAgIGFkZEVycm9yOiAoZXJyb3I6IHN0cmluZykgPT4gdm9pZFxyXG4gICk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IG51bSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICBpZiAoIWlzTmFOKG51bSkpIHtcclxuICAgICAgaWYgKG51bSA8PSAwKSB7XHJcbiAgICAgICAgYWRkRXJyb3IoJ05vdCBib3JuIHlldD8nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bSA+IDEyMikge1xyXG4gICAgICAgIGFkZEVycm9yKCdPbGRlciB0aGFuIEplYW5uZSBDYWxtZW50PyBSZWFsbHk/Jyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWRkRXJyb3IoJ0ludmFsaWQgYWdlJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBleGlzdGluZ1RhZ3M6IFRhZ1tdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogJ0Zvb2QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiAnRHJpbmsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiAnQmVlcicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6ICdXaW5lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgbmFtZTogJ0dsdXRlbiBmcmVlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgbmFtZTogJ0ZydWl0JyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VycmVuY2llczEgPSBbXHJcbiAgeyBsYWJlbDogJ0dCUCcsIHZhbHVlOiAnR0JQJyB9LFxyXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUicgfSxcclxuXTtcclxuXHJcbmNvbnN0IGN1cnJlbmNpZXMyID0gW1xyXG4gIHsgbGFiZWw6ICdHQlAnLCB2YWx1ZTogJ0dCUCcgfSxcclxuICB7IGxhYmVsOiAnRVVSJywgdmFsdWU6ICdFVVInIH0sXHJcbiAgeyBsYWJlbDogJ1VTRCcsIHZhbHVlOiAnVVNEJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VycmVuY2llczMgPSBbXHJcbiAgeyBsYWJlbDogJ0dCUCcsIHZhbHVlOiAnR0JQJywgZm9yY2VTZWxlY3RlZDogdHJ1ZSB9LFxyXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUicgfSxcclxuICB7IGxhYmVsOiAnVVNEJywgdmFsdWU6ICdVU0QnIH0sXHJcbl07XHJcblxyXG5jb25zdCBnZW5kZXJWYWx1ZXMgPSBbXHJcbiAgeyB2YWx1ZTogJ00nLCBsYWJlbDogJ01hbGUnIH0sXHJcbiAgeyB2YWx1ZTogJ0YnLCBsYWJlbDogJ0ZlbWFsZScgfSxcclxuXTtcclxuXHJcbmNvbnN0IHRhZ3NFbWFpbFRleHRQcm9wczogVGV4dFByb3BzID0ge1xyXG4gIHZhbGlkYXRvcnM6IFsnZW1haWwnXSxcclxufTtcclxuXHJcbmNvbnN0IGVtYWlsVmFsaWRhdG9yczogVmFsaWRhdG9yVHlwZXNbXSA9IFsnZW1haWwnXTtcclxuXHJcbmNvbnN0IHVybFZhbGlkYXRvcnM6IFZhbGlkYXRvclR5cGVzW10gPSBbJ3VybCddO1xyXG5cclxuY29uc3QgY3VzdG9tQWdlVmFsaWRhdG9yOiBJQmFzZVZhbGlkYXRvcltdID0gW0FnZVZhbGlkYXRvci5pbnN0YW5jZV07XHJcblxyXG5jb25zdCBjdXN0b21OdW1iZXJWYWxpZGF0b3I6IElCYXNlVmFsaWRhdG9yW10gPSBbXHJcbiAgbmV3IE51bWJlclZhbGlkYXRvcih7IG1pbjogMCB9KSxcclxuXTtcclxuXHJcbmNvbnN0IHR5cGVzOiBCdXR0b25UeXBlc1tdID0gW1xyXG4gICdwcmltYXJ5JyxcclxuICAnd2FybmluZycsXHJcbiAgJ2Vycm9yJyxcclxuICAnaW5mbycsXHJcbiAgJ3N1Y2Nlc3MnLFxyXG4gICdncmF5JyxcclxuICAnd2hpdGUnLFxyXG4gICdub25lJyxcclxuXTtcclxuY29uc3QgQnV0dG9uc1Nob3djYXNlOiBSZWFjdC5TRkM8QnV0dG9uUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInB4LTJcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsIDI0NywgMjQ3KScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHt0eXBlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPXtpdGVtfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPXtpdGVtfSBkaXNhYmxlZD17dHJ1ZX0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAgRGlzYWJsZWRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkJ1dHRvbnNTaG93Y2FzZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lOiAnbXktMiBtci0yJyxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNpYyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QmFzaWNQcm9wcywgQmFzaWNTdGF0ZT4ge1xyXG4gIHByaXZhdGUgZm9ybTogRm9ybTtcclxuXHJcbiAgcHJpdmF0ZSBzcGVjaWFsRGF5c0lucHV0SGVhZGVyOiBSZWFjdC5SZWZPYmplY3Q8SW5wdXRIZWFkZXJSYXc+O1xyXG5cclxuICBwcml2YXRlIGRyb3Bkb3duRnVuY3Rpb25IZWFkZXI6IERyb3Bkb3duO1xyXG5cclxuICBwcml2YXRlIGluaXRpYWxTdGF0ZTogQmFzaWNTdGF0ZSA9IHtcclxuICAgIGdlbmRlcjogJycsXHJcbiAgICBuYW1lOiAnVGVzdCcsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBhZ2U6ICcnLFxyXG4gICAgbWluMTogJycsXHJcbiAgICBjaGVja2JveDE6IHRydWUsXHJcbiAgICBjaGVja2JveDI6IGZhbHNlLFxyXG4gICAgdmFsaWRhdGVGb3JtU3VibWl0OiB0cnVlLFxyXG4gICAgZm9vZDogJ2JyZWFrZmFzdCcsXHJcbiAgICBkcmluazogJ2JyZWFrZmFzdCcsXHJcbiAgICB0b3VjaE9uOiAnZm9jdXMnLFxyXG4gICAgc3VibWl0RGlzYWJsZXNJbnB1dHM6IHRydWUsXHJcbiAgICBzaW11bGF0ZVVubW91bnQ6IGZhbHNlLFxyXG4gICAgcHJpY2VzMTogW10sXHJcbiAgICBwcmljZXMyOiBbXSxcclxuICAgIHByaWNlczM6IFtdLFxyXG4gICAgdGltZVNwYW46IGR1cmF0aW9uKDApLFxyXG4gICAgdGltZTE6IGR1cmF0aW9uKDApLFxyXG4gICAgdGltZTI6IGR1cmF0aW9uKDApLFxyXG4gICAgb3BlbmluZ0hvdXJzOiB7XHJcbiAgICAgIHRpbWVzOiBbXSxcclxuICAgIH0sXHJcbiAgICBvcGVuaW5nSG91cnNXZWVrOiBbXSxcclxuICAgIG9wZW5pbmdIb3Vyc1dlZWtEYXk6IHtcclxuICAgICAgdGltZXM6IFtdLFxyXG4gICAgfSxcclxuICAgIG9wZW5pbmdIb3Vyc1NwZWNpYWw6IFtdLFxyXG4gICAgd2Vic2l0ZTogJycsXHJcbiAgICB0YWdzOiBbXSxcclxuICAgIHNlbGVjdGVkVmFsdWVzOiBbXSxcclxuICAgIG11bHRpcGxlVmFsdWVzOiBbXHJcbiAgICAgIHsgdmFsdWU6ICdPbmUgb3B0aW9uJyB9LFxyXG4gICAgICB7IHZhbHVlOiAnU2Vjb25kIG9wdGlvbicgfSxcclxuICAgICAgeyB2YWx1ZTogJ1RoaXJkIG9wdGlvbicgfSxcclxuICAgICAgeyB2YWx1ZTogJ29uZSBtb3JlIG9wdGlvbicgfSxcclxuICAgICAgeyB2YWx1ZTogJ3JseSBsb25nIGxhc3Qgb3B0aW9uJyB9LFxyXG4gICAgXSxcclxuICAgIG11bHRpcGxlUmVhZG9ubHk6IGZhbHNlLFxyXG4gICAgdGV4dEFyZWFUZXh0OiAnJyxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogQmFzaWNQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5pdGlhbFN0YXRlO1xyXG4gICAgdGhpcy5oYW5kbGVHZW5kZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZUdlbmRlckNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdWJtaXRGb3JtID0gdGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybSA9IHRoaXMuZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmR5bmFtaWNTdWJtaXRFcnJvckZvcm0gPSB0aGlzLmR5bmFtaWNTdWJtaXRFcnJvckZvcm0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3BlY2lhbERheXNJbnB1dEhlYWRlciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIGxldCB0aW1lMk1heCA9IGR1cmF0aW9uKClcclxuICAgICAgLmFkZCgxLCAnaG91cicpXHJcbiAgICAgIC5hZGQoNSwgJ21pbnV0ZXMnKTtcclxuICAgIGxldCB0aW1lMk1pbiA9IGR1cmF0aW9uKClcclxuICAgICAgLnN1YnRyYWN0KDEsICdob3VyJylcclxuICAgICAgLnN1YnRyYWN0KDUsICdtaW51dGVzJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyAgbXQtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZT17dHJ1ZX0gY2xhc3NOYW1lPVwiaW5wdXRfX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUdXJuIGZvcm0gdmFsaWRhdGlvbiBvbiBvciBvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5mb3JtVmFsaWRhdGlvblRvZ2dsZX1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnZhbGlkYXRlRm9ybVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlZhbGlkYXRlIGZvcm0gc3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFJhZGlvQ29udGFpbmVyIHRpdGxlPVwiVG91Y2ggb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3VjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCbHVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLnRvdWNoT25DaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG91Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJmb2N1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZvY3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLnRvdWNoT25DaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvUmFkaW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzYWJsZXMgaW5wdXRzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZGlzYWJsZXNJbnB1dHNDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVubW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5zaW11bGF0ZVVubW91bnRDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuc2ltdWxhdGVVbm1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2ltdWxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG15LTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2FyZCAnfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2sgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuc2ltdWxhdGVVbm1vdW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5mb3JtUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgLypleHRyYUNvbXBvbmVudHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHRlc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50QXBpOiB7fSBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IFsnVGVzdCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdUZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX0qL1xyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBtZC00OFwiPmVkaXQ8L2k+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydFeGFtcGxlIGZvcm0nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3ViVGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFuZCB0aGlzIGlzIHN1YnRpdGxlLiBUaGVyZSdzIGFsc28gaWNvbiBvbiB0aGUgbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaG93RXhwYW5kQWxsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImhlcm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWREZWZhdWx0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1haW5CdXR0b249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3ByaW1hcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3VibWl0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm09e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3VibWl0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmFCdXR0b25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXsxfSBkcm9wZG93bj17dHJ1ZX0gb25DbGljaz17dGhpcy50b3VjaEFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVG91Y2ggYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnVuVG91Y2hBbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBVbi10b3VjaCBhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNob3VsZFRvZ2dsZUNvbGxhcHNlT25IZWFkZXJDbGljaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Db250YWluZXIgdGl0bGU9XCJEcmlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2luZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2hpc2tleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaGlza2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3YXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXYXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0NvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRyaW5rcyAoaG9yaXpvbnRhbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmsyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2luZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmsyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndoaXNrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2hpc2tleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmsyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNtYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmNoZWNrYm94MUNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tib3gxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRyZXNzIGNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiV2l0aCB0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCIob3B0aW9uYWwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmNoZWNrYm94MkNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tib3gyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIldhbGxldCBwYXJraW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm5hbWVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IG51bGwgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZSAobm8gdGl0bGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5uYW1lQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgc29tZSBoZWxwIHRleHQuIEl0IGNhbiBhbHNvIGRvIDxiPmJvbGQ8L2I+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIG90aGVyIHN0dWZmLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm5hbWVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5hbWUgcmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydZb3VyIGdlbmRlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17Z2VuZGVyVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVHZW5kZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJHZW5kZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudGV4dEFyZWFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0QXJlYVRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50ZXh0QXJlYUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRleHRBcmVhVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1NvbWUgY29sbGFwc2VkIHN0dWZmJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZFRvZ2dsZUNvbGxhcHNlT25IZWFkZXJDbGljaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiSGVscGZ1bCB0ZXh0IHRoYXQgZGVzY3JpYmVzIHdoYXQncyBjb2xsYXBzZWQgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIldpdGggdG9vbHRpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e2VtYWlsVmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZW1haWxDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsnWW91IGNhbiBzZWxlY3QgbWUgYnV0IEkgYW0gcmVhZG9ubHknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXt1cmxWYWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldlYnNpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLndlYnNpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMud2Vic2l0ZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3VyIHdlYnNpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21WYWxpZGF0b3JzPXtjdXN0b21BZ2VWYWxpZGF0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIGFnZSAob3B0aW9uYWwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuYWdlQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVZhbGlkYXRvcnM9e2N1c3RvbU51bWJlclZhbGlkYXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1pbiAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5taW4xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1pbjFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9uZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY2llcz17Y3VycmVuY2llczF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlcz17dGhpcy5zdGF0ZS5wcmljZXMxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblByaWNlc0NoYW5nZT17dGhpcy5wcmljZXMxQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vbmV5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmNpZXM9e2N1cnJlbmNpZXMyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZXM9e3RoaXMuc3RhdGUucHJpY2VzMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJpY2VzQ2hhbmdlPXt0aGlzLnByaWNlczJDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlByaWNlIG11bHRpcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9uZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY2llcz17Y3VycmVuY2llczN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlcz17dGhpcy5zdGF0ZS5wcmljZXMzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QcmljZXNDaGFuZ2U9e3RoaXMucHJpY2VzM0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJpY2UgbXVsdGlwbGUgZm9yY2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU9e3RoaXMuc3RhdGUudGltZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVDaGFuZ2U9e3RoaXMudGltZTFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17dGltZTJNYXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17dGltZTJNaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17dGhpcy5zdGF0ZS50aW1lMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNoYW5nZT17dGhpcy50aW1lMkNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiV2l0aCBNaW4vTWF4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGltZVNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lU3Bhbj17dGhpcy5zdGF0ZS50aW1lU3Bhbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNwYW5DaGFuZ2U9e3RoaXMudGltZVNwYW5DaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRpbWUgc3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkVW5pdHM9e1RpbWVTcGFuVW5pdC5Ib3VyIHwgVGltZVNwYW5Vbml0Lk1pbnV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3BlbmluZ0hvdXJzRGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnT3BlbmluZyBob3VycyBzYW1wbGUgZGF5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbmluZ0hvdXJzQ2hhbmdlPXt0aGlzLm9wZW5pbmdIb3Vyc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pbmdIb3Vycz17dGhpcy5zdGF0ZS5vcGVuaW5nSG91cnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiT3BlbmluZyBob3Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUNhcGFjaXR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J09wZW5pbmcgaG91cnMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPXsncHJpbWFyeSd9Pkhlcm8gYnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFCdXR0b25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9ezF9IGRyb3Bkb3duPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4dHJhIGJ1dHRvbiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXsyfSBkcm9wZG93bj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYSBidXR0b24gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wZW5pbmdIb3Vyc1dlZWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGF5c0NoYW5nZT17dGhpcy5vcGVuaW5nSG91cnNXZWVrQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlzPXt0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc1dlZWt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhbmRhcmREYXk9e3RoaXMuc3RhdGUub3BlbmluZ0hvdXJzV2Vla0RheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblN0YW5kYXJkRGF5Q2hhbmdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbmluZ0hvdXJzV2Vla1N0YW5kYXJkRGF5Q2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VDYXBhY2l0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydTcGVjaWFsIGRheXMgb3BlbmluZyBob3Vycyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuc3BlY2lhbERheXNJbnB1dEhlYWRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3ByaW1hcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zcGVjaWFsRGF5c0FkZENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVuaW5nSG91cnNTcGVjaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRheXNDaGFuZ2U9e3RoaXMub3BlbmluZ0hvdXJzU3BlY2lhbENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5cz17dGhpcy5zdGF0ZS5vcGVuaW5nSG91cnNTcGVjaWFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0J1dHRvbnMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQnV0dG9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9eydwcmltYXJ5J30+SGVybyBidXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlN0YW5kYXJkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPk5vIHNoYWRvdzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBub1NoYWRvdz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+SGVybzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBoZXJvPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5PdXRsaW5lZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBvdXRsaW5lZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Qmxhbms8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgYmxhbms9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlNtYWxsPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIHNtYWxsPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5DaXJjdWxhcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBjaXJjdWxhcj17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+RHJvcGRvd248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgZHJvcGRvd249e3RydWV9IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlVub2J0cnVzaXZlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIHVub2J0cnVzaXZlPXt0cnVlfSBjbGFzc05hbWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydNdWx0aXBsZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWREZWZhdWx0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGFiZWw9XCJNdWx0aXBsZSByZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLm11bHRpcGxlUmVhZG9ubHlDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk11bHRpcGxlIHJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3MgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbmQgbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQcm9wcz17eyBwbGFjZWhvbGRlcjogJ1dpdGggcGxhY2Vob2xkZXInIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZD17dGhpcy50YWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3Mgc3VnZ2VzdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2hvb3NlIG9yIGNyZWF0ZSB0YWdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFRhZ3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYWdzPXtleGlzdGluZ1RhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NoaXBzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGFncyBtYXggM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGFncz17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M9e3RoaXMuc3RhdGUudGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhZ3NDaGFuZ2VkPXt0aGlzLnRhZ3NDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDaGlwcz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhZ0NsaWNrPXt0ID0+IGNvbnNvbGUud2Fybih0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3Mgb25seSBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaXRoIGxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUYWdzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudD17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UHJvcHM9e3RhZ3NFbWFpbFRleHRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT25lIG9yIG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTXVsdGlzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRFbXB0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVzPXt0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17dGhpcy5zdGF0ZS5tdWx0aXBsZVZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGVkVmFsdWVzQ2hhbmdlPXt0aGlzLnNlbGVjdGVkVmFsdWVzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlczogW3sgdmFsdWU6ICdPbmUgb3B0aW9uJyB9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGVzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydEcm9wZG93bid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWREZWZhdWx0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3cgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtci0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bm90aWZpY2F0aW9uczwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNvdW50PXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWVudUNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QXJyb3c9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JdGVtPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgbXItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydTdHJpbmcgaGVhZGVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNvdW50PXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWVudUNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkl0ZW08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuZHJvcGRvd25GdW5jdGlvbkhlYWRlclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmZ1bmN0aW9uSGVhZGVyQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVuY3Rpb24gaGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Fycm93PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnVDbGFzc05hbWU9XCJwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JdGVtPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVZhbGlkYXRpb25TdW1tYXJ5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEeW5hbWljU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0RGlzYWJsZXNJbnB1dHM9e3RoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3ByaW1hcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbENsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDbGFzc05hbWU9XCJidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nQ2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDaGlsZHJlbj17J0Vycm9yJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nQ2hpbGRyZW49eydXb3JraW5nIG9uIGl0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm09e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWpheCBFcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0R5bmFtaWNTdWJtaXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEeW5hbWljU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0RGlzYWJsZXNJbnB1dHM9e3RoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsQ2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZ0NsYXNzTmFtZT1cImJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDbGFzc05hbWU9XCJidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZ0NoaWxkcmVuPXsnV29ya2luZyBvbiBpdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NoaWxkcmVuPXsnVGhhdCB3b3JrZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZHluYW1pY1N1Ym1pdEVycm9yRm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm09e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWpheCBTdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHluYW1pY1N1Ym1pdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybVJlZiA9IChlbDogRm9ybSkgPT4gKHRoaXMuZm9ybSA9IGVsKTtcclxuXHJcbiAgcHJpdmF0ZSBkcm9wZG93bkZ1bmN0aW9uSGVhZGVyUmVmID0gKGVsOiBEcm9wZG93bikgPT5cclxuICAgICh0aGlzLmRyb3Bkb3duRnVuY3Rpb25IZWFkZXIgPSBlbCk7XHJcblxyXG4gIHByaXZhdGUgZnVuY3Rpb25IZWFkZXJDbGljayA9ICgpID0+XHJcbiAgICB0aGlzLmRyb3Bkb3duRnVuY3Rpb25IZWFkZXIuc2hvd05hdmlnYXRpb24oKTtcclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RlZFZhbHVlc0NoYW5nZWQgPSAoc2VsZWN0ZWRWYWx1ZXM6IFNlbGVjdFZhbHVlW10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRWYWx1ZXMgfSk7XHJcblxyXG4gIHByaXZhdGUgdGFnc0NoYW5nZWQgPSAodGFnczogVGFnW10pID0+IHRoaXMuc2V0U3RhdGUoeyB0YWdzIH0pO1xyXG5cclxuICBwcml2YXRlIG11bHRpcGxlUmVhZG9ubHlDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtdWx0aXBsZVJlYWRvbmx5OiAhdGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5IH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc1NwZWNpYWxDaGFuZ2VkID0gKGRheXM6IE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmpbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnNTcGVjaWFsOiBkYXlzIH0pO1xyXG5cclxuICBwcml2YXRlIHNwZWNpYWxEYXlzQWRkQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgb3BlbmluZ0hvdXJzU3BlY2lhbDogdGhpcy5zdGF0ZS5vcGVuaW5nSG91cnNTcGVjaWFsLmNvbmNhdChbXHJcbiAgICAgICAgICB7IGRhdGU6IHVuZGVmaW5lZCwgdGltZXM6IFtdIH0sXHJcbiAgICAgICAgXSksXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMuc3BlY2lhbERheXNJbnB1dEhlYWRlci5jdXJyZW50LmV4cGFuZCgpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb3BlbmluZ0hvdXJzV2Vla1N0YW5kYXJkRGF5Q2hhbmdlZCA9IChkYXk6IE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmopID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmluZ0hvdXJzV2Vla0RheTogZGF5IH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc1dlZWtDaGFuZ2VkID0gKGRheXM6IE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmpbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnNXZWVrOiBkYXlzIH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc0NoYW5nZWQgPSAob3BlbmluZ0hvdXJzOiBPcGVuaW5nSG91cnNEYXlPYmopID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmluZ0hvdXJzOiBvcGVuaW5nSG91cnMgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZTJDaGFuZ2VkID0gKHRpbWU6IER1cmF0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgdGltZTI6IHRpbWUgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZTFDaGFuZ2VkID0gKHRpbWU6IER1cmF0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgdGltZTE6IHRpbWUgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZVNwYW5DaGFuZ2VkID0gKHRpbWVTcGFuOiBEdXJhdGlvbikgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpbWVTcGFuIH0pO1xyXG5cclxuICBwcml2YXRlIHByaWNlczJDaGFuZ2VkID0gKHByaWNlczogTW9uZXlXaXRoQ3VycmVuY3lbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZXMyOiBwcmljZXMgfSk7XHJcblxyXG4gIHByaXZhdGUgcHJpY2VzM0NoYW5nZWQgPSAocHJpY2VzOiBNb25leVdpdGhDdXJyZW5jeVtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlczM6IHByaWNlcyB9KTtcclxuXHJcbiAgcHJpdmF0ZSBwcmljZXMxQ2hhbmdlZCA9IChwcmljZXM6IE1vbmV5V2l0aEN1cnJlbmN5W10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2VzMTogcHJpY2VzIH0pO1xyXG5cclxuICBwcml2YXRlIG1pbjFDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1pbjE6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIGFnZUNoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWdlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB3ZWJzaXRlQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJzaXRlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBlbWFpbENoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIHRleHRBcmVhQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0QXJlYVRleHQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIG5hbWVDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIGNoZWNrYm94MkNoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrYm94MjogIXRoaXMuc3RhdGUuY2hlY2tib3gyIH0pO1xyXG5cclxuICBwcml2YXRlIGNoZWNrYm94MUNoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrYm94MTogIXRoaXMuc3RhdGUuY2hlY2tib3gxIH0pO1xyXG5cclxuICBwcml2YXRlIGRyaW5rc0NoZWNrZWQgPSAodmFsdWU6IHN0cmluZykgPT4gdGhpcy5zZXRTdGF0ZSh7IGRyaW5rOiB2YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB1blRvdWNoQWxsID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvcm0udW5Ub3VjaEFsbCgpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgc2ltdWxhdGVVbm1vdW50Q2hlY2tlZCA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2ltdWxhdGVVbm1vdW50OiAhdGhpcy5zdGF0ZS5zaW11bGF0ZVVubW91bnQgfSk7XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZXNJbnB1dHNDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJtaXREaXNhYmxlc0lucHV0czogIXRoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHMgfSk7XHJcblxyXG4gIHByaXZhdGUgdG91Y2hPbkNoZWNrZWQgPSAodmFsdWU6ICdibHVyJyB8ICdmb2N1cycpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdG91Y2hPbjogdmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgZm9ybVZhbGlkYXRpb25Ub2dnbGUgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRlRm9ybVN1Ym1pdDogIXRoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0IH0pO1xyXG5cclxuICBwcml2YXRlIHRvdWNoQWxsID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvcm0udG91Y2hBbGwoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGhhbmRsZUdlbmRlckNoYW5nZShlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKHZhbCA9PT0gJ00nIHx8IHZhbCA9PT0gJ0YnKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5kZXI6IHZhbCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3VibWl0Rm9ybShlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcclxuICAgIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybShcclxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxyXG4gICAgc3VibWl0dGluZzogKCkgPT4gdm9pZCxcclxuICAgIGVycm9yOiAoKSA9PiB2b2lkLFxyXG4gICAgc3VjY2VzczogKCkgPT4gdm9pZCxcclxuICAgIHJlc2V0OiAoKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzdWJtaXR0aW5nKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZXJyb3IoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNldCgpLCAzMDAwKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkeW5hbWljU3VibWl0RXJyb3JGb3JtKFxyXG4gICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4sXHJcbiAgICBzdWJtaXR0aW5nOiAoKSA9PiB2b2lkLFxyXG4gICAgZXJyb3I6ICgpID0+IHZvaWQsXHJcbiAgICBzdWNjZXNzOiAoKSA9PiB2b2lkLFxyXG4gICAgcmVzZXQ6ICgpID0+IHZvaWRcclxuICApIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHN1Ym1pdHRpbmcoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzdWNjZXNzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzZXQoKSwgMzAwMCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9