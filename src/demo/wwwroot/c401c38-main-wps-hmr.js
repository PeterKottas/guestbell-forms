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
        maxTags: 1,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DbGllbnRBcHAvcGFnZXMvYmFzaWMvQmFzaWMudHN4Il0sIm5hbWVzIjpbIkFnZVZhbGlkYXRvciIsInZhbHVlIiwiaXNSZXF1aXJlZCIsImFkZEVycm9yIiwibnVtIiwiTnVtYmVyIiwiaXNOYU4iLCJpbnN0YW5jZSIsImV4aXN0aW5nVGFncyIsImlkIiwibmFtZSIsImN1cnJlbmNpZXMxIiwibGFiZWwiLCJjdXJyZW5jaWVzMiIsImN1cnJlbmNpZXMzIiwiZm9yY2VTZWxlY3RlZCIsImdlbmRlclZhbHVlcyIsInRhZ3NFbWFpbFRleHRQcm9wcyIsInZhbGlkYXRvcnMiLCJlbWFpbFZhbGlkYXRvcnMiLCJ1cmxWYWxpZGF0b3JzIiwiY3VzdG9tQWdlVmFsaWRhdG9yIiwiY3VzdG9tTnVtYmVyVmFsaWRhdG9yIiwiTnVtYmVyVmFsaWRhdG9yIiwibWluIiwidHlwZXMiLCJCdXR0b25zU2hvd2Nhc2UiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsIkJhc2ljIiwiZm9ybSIsInNwZWNpYWxEYXlzSW5wdXRIZWFkZXIiLCJkcm9wZG93bkZ1bmN0aW9uSGVhZGVyIiwiaW5pdGlhbFN0YXRlIiwiZ2VuZGVyIiwiZW1haWwiLCJhZ2UiLCJtaW4xIiwiY2hlY2tib3gxIiwiY2hlY2tib3gyIiwidmFsaWRhdGVGb3JtU3VibWl0IiwiZm9vZCIsImRyaW5rIiwidG91Y2hPbiIsInN1Ym1pdERpc2FibGVzSW5wdXRzIiwic2ltdWxhdGVVbm1vdW50IiwicHJpY2VzMSIsInByaWNlczIiLCJwcmljZXMzIiwidGltZVNwYW4iLCJkdXJhdGlvbiIsInRpbWUxIiwidGltZTIiLCJvcGVuaW5nSG91cnMiLCJ0aW1lcyIsIm9wZW5pbmdIb3Vyc1dlZWsiLCJvcGVuaW5nSG91cnNXZWVrRGF5Iiwib3BlbmluZ0hvdXJzU3BlY2lhbCIsIndlYnNpdGUiLCJ0YWdzIiwic2VsZWN0ZWRWYWx1ZXMiLCJtdWx0aXBsZVZhbHVlcyIsIm11bHRpcGxlUmVhZG9ubHkiLCJ0ZXh0QXJlYVRleHQiLCJmb3JtUmVmIiwiZWwiLCJkcm9wZG93bkZ1bmN0aW9uSGVhZGVyUmVmIiwiZnVuY3Rpb25IZWFkZXJDbGljayIsInNob3dOYXZpZ2F0aW9uIiwic2VsZWN0ZWRWYWx1ZXNDaGFuZ2VkIiwic2V0U3RhdGUiLCJ0YWdzQ2hhbmdlZCIsIm11bHRpcGxlUmVhZG9ubHlDaGVja2VkIiwic3RhdGUiLCJvcGVuaW5nSG91cnNTcGVjaWFsQ2hhbmdlZCIsImRheXMiLCJzcGVjaWFsRGF5c0FkZENsaWNrIiwiY29uY2F0IiwiZGF0ZSIsInVuZGVmaW5lZCIsImN1cnJlbnQiLCJleHBhbmQiLCJvcGVuaW5nSG91cnNXZWVrU3RhbmRhcmREYXlDaGFuZ2VkIiwiZGF5Iiwib3BlbmluZ0hvdXJzV2Vla0NoYW5nZWQiLCJvcGVuaW5nSG91cnNDaGFuZ2VkIiwidGltZTJDaGFuZ2VkIiwidGltZSIsInRpbWUxQ2hhbmdlZCIsInRpbWVTcGFuQ2hhbmdlZCIsInByaWNlczJDaGFuZ2VkIiwicHJpY2VzIiwicHJpY2VzM0NoYW5nZWQiLCJwcmljZXMxQ2hhbmdlZCIsIm1pbjFDaGFuZ2VkIiwiZSIsInRhcmdldCIsImFnZUNoYW5nZWQiLCJ3ZWJzaXRlQ2hhbmdlZCIsImVtYWlsQ2hhbmdlZCIsInRleHRBcmVhQ2hhbmdlZCIsIm5hbWVDaGFuZ2VkIiwiY2hlY2tib3gyQ2hlY2tlZCIsImNoZWNrYm94MUNoZWNrZWQiLCJkcmlua3NDaGVja2VkIiwidW5Ub3VjaEFsbCIsInByZXZlbnREZWZhdWx0Iiwic2ltdWxhdGVVbm1vdW50Q2hlY2tlZCIsImRpc2FibGVzSW5wdXRzQ2hlY2tlZCIsInRvdWNoT25DaGVja2VkIiwiZm9ybVZhbGlkYXRpb25Ub2dnbGUiLCJ0b3VjaEFsbCIsImhhbmRsZUdlbmRlckNoYW5nZSIsImJpbmQiLCJzdWJtaXRGb3JtIiwiZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtIiwiZHluYW1pY1N1Ym1pdEVycm9yRm9ybSIsIlJlYWN0IiwidGltZTJNYXgiLCJhZGQiLCJ0aW1lMk1pbiIsInN1YnRyYWN0IiwiVGltZVNwYW5Vbml0IiwiSG91ciIsIk1pbnV0ZSIsInBsYWNlaG9sZGVyIiwidCIsImNvbnNvbGUiLCJ3YXJuIiwidmFsIiwic3VibWl0dGluZyIsImVycm9yIiwic3VjY2VzcyIsInJlc2V0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBb0NBO0FBb0NPLElBQU1BLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw2QkFHSUMsS0FISixFQUlJQyxVQUpKLEVBS0lDLFFBTEosRUFNYTtBQUNULFVBQUlDLEdBQUcsR0FBR0MsTUFBTSxDQUFDSixLQUFELENBQWhCOztBQUNBLFVBQUksQ0FBQ0ssS0FBSyxDQUFDRixHQUFELENBQVYsRUFBaUI7QUFDZixZQUFJQSxHQUFHLElBQUksQ0FBWCxFQUFjO0FBQ1pELGtCQUFRLENBQUMsZUFBRCxDQUFSO0FBQ0EsaUJBQU8sS0FBUDtBQUNEOztBQUNELFlBQUlDLEdBQUcsR0FBRyxHQUFWLEVBQWU7QUFDYkQsa0JBQVEsQ0FBQyxvQ0FBRCxDQUFSO0FBQ0EsaUJBQU8sS0FBUDtBQUNEOztBQUNELGVBQU8sSUFBUDtBQUNELE9BVkQsTUFVTztBQUNMQSxnQkFBUSxDQUFDLGFBQUQsQ0FBUjtBQUNEOztBQUNELGFBQU8sS0FBUDtBQUNEO0FBdEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFhSCxZLENBQ0dPLFEsR0FBVyxJQUFJUCxZQUFKLEU7QUF3QjNCLElBQU1RLFlBQW1CLEdBQUcsQ0FDMUI7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FEMEIsRUFLMUI7QUFDRUQsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FMMEIsRUFTMUI7QUFDRUQsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FUMEIsRUFhMUI7QUFDRUQsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FiMEIsRUFpQjFCO0FBQ0VELElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBakIwQixFQXFCMUI7QUFDRUQsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FyQjBCLENBQTVCO0FBMkJBLElBQU1DLFdBQVcsR0FBRyxDQUNsQjtBQUFFQyxPQUFLLEVBQUUsS0FBVDtBQUFnQlgsT0FBSyxFQUFFO0FBQXZCLENBRGtCLEVBRWxCO0FBQUVXLE9BQUssRUFBRSxLQUFUO0FBQWdCWCxPQUFLLEVBQUU7QUFBdkIsQ0FGa0IsQ0FBcEI7QUFLQSxJQUFNWSxXQUFXLEdBQUcsQ0FDbEI7QUFBRUQsT0FBSyxFQUFFLEtBQVQ7QUFBZ0JYLE9BQUssRUFBRTtBQUF2QixDQURrQixFQUVsQjtBQUFFVyxPQUFLLEVBQUUsS0FBVDtBQUFnQlgsT0FBSyxFQUFFO0FBQXZCLENBRmtCLEVBR2xCO0FBQUVXLE9BQUssRUFBRSxLQUFUO0FBQWdCWCxPQUFLLEVBQUU7QUFBdkIsQ0FIa0IsQ0FBcEI7QUFNQSxJQUFNYSxXQUFXLEdBQUcsQ0FDbEI7QUFBRUYsT0FBSyxFQUFFLEtBQVQ7QUFBZ0JYLE9BQUssRUFBRSxLQUF2QjtBQUE4QmMsZUFBYSxFQUFFO0FBQTdDLENBRGtCLEVBRWxCO0FBQUVILE9BQUssRUFBRSxLQUFUO0FBQWdCWCxPQUFLLEVBQUU7QUFBdkIsQ0FGa0IsRUFHbEI7QUFBRVcsT0FBSyxFQUFFLEtBQVQ7QUFBZ0JYLE9BQUssRUFBRTtBQUF2QixDQUhrQixDQUFwQjtBQU1BLElBQU1lLFlBQVksR0FBRyxDQUNuQjtBQUFFZixPQUFLLEVBQUUsR0FBVDtBQUFjVyxPQUFLLEVBQUU7QUFBckIsQ0FEbUIsRUFFbkI7QUFBRVgsT0FBSyxFQUFFLEdBQVQ7QUFBY1csT0FBSyxFQUFFO0FBQXJCLENBRm1CLENBQXJCO0FBS0EsSUFBTUssa0JBQTZCLEdBQUc7QUFDcENDLFlBQVUsRUFBRSxDQUFDLE9BQUQ7QUFEd0IsQ0FBdEM7QUFJQSxJQUFNQyxlQUFpQyxHQUFHLENBQUMsT0FBRCxDQUExQztBQUVBLElBQU1DLGFBQStCLEdBQUcsQ0FBQyxLQUFELENBQXhDO0FBRUEsSUFBTUMsa0JBQW9DLEdBQUcsQ0FBQ3JCLFlBQVksQ0FBQ08sUUFBZCxDQUE3QztBQUVBLElBQU1lLHFCQUF1QyxHQUFHLENBQzlDLElBQUlDLDBEQUFKLENBQW9CO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQXBCLENBRDhDLENBQWhEO0FBSUEsSUFBTUMsS0FBb0IsR0FBRyxDQUMzQixTQUQyQixFQUUzQixTQUYyQixFQUczQixPQUgyQixFQUkzQixNQUoyQixFQUszQixTQUwyQixFQU0zQixNQU4yQixFQU8zQixPQVAyQixFQVEzQixNQVIyQixDQUE3Qjs7QUFVQSxJQUFNQyxlQUF1QyxHQUFHLFNBQTFDQSxlQUEwQyxDQUFBQyxLQUFLLEVBQUk7QUFDdkQsU0FDRTtBQUNFLGFBQVMsRUFBQyxNQURaO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLHFCQUFlLEVBQUUsb0JBRFo7QUFFTEMsYUFBTyxFQUFFLE1BRko7QUFHTEMsY0FBUSxFQUFFO0FBSEw7QUFGVCxLQVFHTCxLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUNULG9EQUFDLDhDQUFEO0FBQWdCLFNBQUcsRUFBRUE7QUFBckIsT0FDRSxvREFBQyxpREFBRDtBQUFRLFVBQUksRUFBRUQ7QUFBZCxPQUF3QkwsS0FBeEIsR0FDR0ssSUFESCxDQURGLEVBSUUsb0RBQUMsaURBQUQ7QUFBUSxVQUFJLEVBQUVBLElBQWQ7QUFBb0IsY0FBUSxFQUFFO0FBQTlCLE9BQXdDTCxLQUF4QyxjQUpGLENBRFM7QUFBQSxHQUFWLENBUkgsQ0FERjtBQXFCRCxDQXRCRDs7QUF3QkFELGVBQWUsQ0FBQ1EsWUFBaEIsR0FBK0I7QUFDN0JDLFdBQVMsRUFBRTtBQURrQixDQUEvQjtBQUlPLElBQU1DLEtBQWI7QUFBQTtBQUFBO0FBQUE7O0FBaURFLGlCQUFZVCxLQUFaLEVBQStCO0FBQUE7O0FBQUE7O0FBQzdCLCtFQUFNQSxLQUFOO0FBRDZCLFVBaER2QlUsSUFnRHVCO0FBQUEsVUE5Q3ZCQyxzQkE4Q3VCO0FBQUEsVUE1Q3ZCQyxzQkE0Q3VCO0FBQUEsVUExQ3ZCQyxZQTBDdUIsR0ExQ0k7QUFDakNDLFlBQU0sRUFBRSxFQUR5QjtBQUVqQy9CLFVBQUksRUFBRSxNQUYyQjtBQUdqQ2dDLFdBQUssRUFBRSxFQUgwQjtBQUlqQ0MsU0FBRyxFQUFFLEVBSjRCO0FBS2pDQyxVQUFJLEVBQUUsRUFMMkI7QUFNakNDLGVBQVMsRUFBRSxJQU5zQjtBQU9qQ0MsZUFBUyxFQUFFLEtBUHNCO0FBUWpDQyx3QkFBa0IsRUFBRSxJQVJhO0FBU2pDQyxVQUFJLEVBQUUsV0FUMkI7QUFVakNDLFdBQUssRUFBRSxXQVYwQjtBQVdqQ0MsYUFBTyxFQUFFLE9BWHdCO0FBWWpDQywwQkFBb0IsRUFBRSxJQVpXO0FBYWpDQyxxQkFBZSxFQUFFLEtBYmdCO0FBY2pDQyxhQUFPLEVBQUUsRUFkd0I7QUFlakNDLGFBQU8sRUFBRSxFQWZ3QjtBQWdCakNDLGFBQU8sRUFBRSxFQWhCd0I7QUFpQmpDQyxjQUFRLEVBQUVDLHVEQUFRLENBQUMsQ0FBRCxDQWpCZTtBQWtCakNDLFdBQUssRUFBRUQsdURBQVEsQ0FBQyxDQUFELENBbEJrQjtBQW1CakNFLFdBQUssRUFBRUYsdURBQVEsQ0FBQyxDQUFELENBbkJrQjtBQW9CakNHLGtCQUFZLEVBQUU7QUFDWkMsYUFBSyxFQUFFO0FBREssT0FwQm1CO0FBdUJqQ0Msc0JBQWdCLEVBQUUsRUF2QmU7QUF3QmpDQyx5QkFBbUIsRUFBRTtBQUNuQkYsYUFBSyxFQUFFO0FBRFksT0F4Qlk7QUEyQmpDRyx5QkFBbUIsRUFBRSxFQTNCWTtBQTRCakNDLGFBQU8sRUFBRSxFQTVCd0I7QUE2QmpDQyxVQUFJLEVBQUUsRUE3QjJCO0FBOEJqQ0Msb0JBQWMsRUFBRSxFQTlCaUI7QUErQmpDQyxvQkFBYyxFQUFFLENBQ2Q7QUFBRW5FLGFBQUssRUFBRTtBQUFULE9BRGMsRUFFZDtBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUZjLEVBR2Q7QUFBRUEsYUFBSyxFQUFFO0FBQVQsT0FIYyxFQUlkO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BSmMsRUFLZDtBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUxjLENBL0JpQjtBQXNDakNvRSxzQkFBZ0IsRUFBRSxLQXRDZTtBQXVDakNDLGtCQUFZLEVBQUU7QUF2Q21CLEtBMENKOztBQUFBLFVBdWxCdkJDLE9BdmxCdUIsR0F1bEJiLFVBQUNDLEVBQUQ7QUFBQSxhQUFlLE1BQUtuQyxJQUFMLEdBQVltQyxFQUEzQjtBQUFBLEtBdmxCYTs7QUFBQSxVQXlsQnZCQyx5QkF6bEJ1QixHQXlsQkssVUFBQ0QsRUFBRDtBQUFBLGFBQ2pDLE1BQUtqQyxzQkFBTCxHQUE4QmlDLEVBREc7QUFBQSxLQXpsQkw7O0FBQUEsVUE0bEJ2QkUsbUJBNWxCdUIsR0E0bEJEO0FBQUEsYUFDNUIsTUFBS25DLHNCQUFMLENBQTRCb0MsY0FBNUIsRUFENEI7QUFBQSxLQTVsQkM7O0FBQUEsVUErbEJ2QkMscUJBL2xCdUIsR0ErbEJDLFVBQUNULGNBQUQ7QUFBQSxhQUM5QixNQUFLVSxRQUFMLENBQWM7QUFBRVYsc0JBQWMsRUFBZEE7QUFBRixPQUFkLENBRDhCO0FBQUEsS0EvbEJEOztBQUFBLFVBa21CdkJXLFdBbG1CdUIsR0FrbUJULFVBQUNaLElBQUQ7QUFBQSxhQUFpQixNQUFLVyxRQUFMLENBQWM7QUFBRVgsWUFBSSxFQUFKQTtBQUFGLE9BQWQsQ0FBakI7QUFBQSxLQWxtQlM7O0FBQUEsVUFvbUJ2QmEsdUJBcG1CdUIsR0FvbUJHO0FBQUEsYUFDaEMsTUFBS0YsUUFBTCxDQUFjO0FBQUVSLHdCQUFnQixFQUFFLENBQUMsTUFBS1csS0FBTCxDQUFXWDtBQUFoQyxPQUFkLENBRGdDO0FBQUEsS0FwbUJIOztBQUFBLFVBdW1CdkJZLDBCQXZtQnVCLEdBdW1CTSxVQUFDQyxJQUFEO0FBQUEsYUFDbkMsTUFBS0wsUUFBTCxDQUFjO0FBQUViLDJCQUFtQixFQUFFa0I7QUFBdkIsT0FBZCxDQURtQztBQUFBLEtBdm1CTjs7QUFBQSxVQTBtQnZCQyxtQkExbUJ1QixHQTBtQkQsWUFBTTtBQUNsQyxZQUFLTixRQUFMLENBQ0U7QUFDRWIsMkJBQW1CLEVBQUUsTUFBS2dCLEtBQUwsQ0FBV2hCLG1CQUFYLENBQStCb0IsTUFBL0IsQ0FBc0MsQ0FDekQ7QUFBRUMsY0FBSSxFQUFFQyxTQUFSO0FBQW1CekIsZUFBSyxFQUFFO0FBQTFCLFNBRHlELENBQXRDO0FBRHZCLE9BREYsRUFNRTtBQUFBLGVBQU0sTUFBS3ZCLHNCQUFMLENBQTRCaUQsT0FBNUIsQ0FBb0NDLE1BQXBDLEVBQU47QUFBQSxPQU5GO0FBUUQsS0FubkI4Qjs7QUFBQSxVQXFuQnZCQyxrQ0FybkJ1QixHQXFuQmMsVUFBQ0MsR0FBRDtBQUFBLGFBQzNDLE1BQUtiLFFBQUwsQ0FBYztBQUFFZCwyQkFBbUIsRUFBRTJCO0FBQXZCLE9BQWQsQ0FEMkM7QUFBQSxLQXJuQmQ7O0FBQUEsVUF3bkJ2QkMsdUJBeG5CdUIsR0F3bkJHLFVBQUNULElBQUQ7QUFBQSxhQUNoQyxNQUFLTCxRQUFMLENBQWM7QUFBRWYsd0JBQWdCLEVBQUVvQjtBQUFwQixPQUFkLENBRGdDO0FBQUEsS0F4bkJIOztBQUFBLFVBMm5CdkJVLG1CQTNuQnVCLEdBMm5CRCxVQUFDaEMsWUFBRDtBQUFBLGFBQzVCLE1BQUtpQixRQUFMLENBQWM7QUFBRWpCLG9CQUFZLEVBQUVBO0FBQWhCLE9BQWQsQ0FENEI7QUFBQSxLQTNuQkM7O0FBQUEsVUE4bkJ2QmlDLFlBOW5CdUIsR0E4bkJSLFVBQUNDLElBQUQ7QUFBQSxhQUFvQixNQUFLakIsUUFBTCxDQUFjO0FBQUVsQixhQUFLLEVBQUVtQztBQUFULE9BQWQsQ0FBcEI7QUFBQSxLQTluQlE7O0FBQUEsVUFnb0J2QkMsWUFob0J1QixHQWdvQlIsVUFBQ0QsSUFBRDtBQUFBLGFBQW9CLE1BQUtqQixRQUFMLENBQWM7QUFBRW5CLGFBQUssRUFBRW9DO0FBQVQsT0FBZCxDQUFwQjtBQUFBLEtBaG9CUTs7QUFBQSxVQWtvQnZCRSxlQWxvQnVCLEdBa29CTCxVQUFDeEMsUUFBRDtBQUFBLGFBQXdCLE1BQUtxQixRQUFMLENBQWM7QUFBRXJCLGdCQUFRLEVBQVJBO0FBQUYsT0FBZCxDQUF4QjtBQUFBLEtBbG9CSzs7QUFBQSxVQW9vQnZCeUMsY0Fwb0J1QixHQW9vQk4sVUFBQ0MsTUFBRDtBQUFBLGFBQ3ZCLE1BQUtyQixRQUFMLENBQWM7QUFBRXZCLGVBQU8sRUFBRTRDO0FBQVgsT0FBZCxDQUR1QjtBQUFBLEtBcG9CTTs7QUFBQSxVQXVvQnZCQyxjQXZvQnVCLEdBdW9CTixVQUFDRCxNQUFEO0FBQUEsYUFDdkIsTUFBS3JCLFFBQUwsQ0FBYztBQUFFdEIsZUFBTyxFQUFFMkM7QUFBWCxPQUFkLENBRHVCO0FBQUEsS0F2b0JNOztBQUFBLFVBMG9CdkJFLGNBMW9CdUIsR0Ewb0JOLFVBQUNGLE1BQUQ7QUFBQSxhQUN2QixNQUFLckIsUUFBTCxDQUFjO0FBQUV4QixlQUFPLEVBQUU2QztBQUFYLE9BQWQsQ0FEdUI7QUFBQSxLQTFvQk07O0FBQUEsVUE2b0J2QkcsV0E3b0J1QixHQTZvQlQsVUFBQ0MsQ0FBRDtBQUFBLGFBQ3BCLE1BQUt6QixRQUFMLENBQWM7QUFBRWpDLFlBQUksRUFBRTBELENBQUMsQ0FBQ0MsTUFBRixDQUFTdEc7QUFBakIsT0FBZCxDQURvQjtBQUFBLEtBN29CUzs7QUFBQSxVQWdwQnZCdUcsVUFocEJ1QixHQWdwQlYsVUFBQ0YsQ0FBRDtBQUFBLGFBQ25CLE1BQUt6QixRQUFMLENBQWM7QUFBRWxDLFdBQUcsRUFBRTJELENBQUMsQ0FBQ0MsTUFBRixDQUFTdEc7QUFBaEIsT0FBZCxDQURtQjtBQUFBLEtBaHBCVTs7QUFBQSxVQW1wQnZCd0csY0FucEJ1QixHQW1wQk4sVUFBQ0gsQ0FBRDtBQUFBLGFBQ3ZCLE1BQUt6QixRQUFMLENBQWM7QUFBRVosZUFBTyxFQUFFcUMsQ0FBQyxDQUFDQyxNQUFGLENBQVN0RztBQUFwQixPQUFkLENBRHVCO0FBQUEsS0FucEJNOztBQUFBLFVBc3BCdkJ5RyxZQXRwQnVCLEdBc3BCUixVQUFDSixDQUFEO0FBQUEsYUFDckIsTUFBS3pCLFFBQUwsQ0FBYztBQUFFbkMsYUFBSyxFQUFFNEQsQ0FBQyxDQUFDQyxNQUFGLENBQVN0RztBQUFsQixPQUFkLENBRHFCO0FBQUEsS0F0cEJROztBQUFBLFVBeXBCdkIwRyxlQXpwQnVCLEdBeXBCTCxVQUFDTCxDQUFEO0FBQUEsYUFDeEIsTUFBS3pCLFFBQUwsQ0FBYztBQUFFUCxvQkFBWSxFQUFFZ0MsQ0FBQyxDQUFDQyxNQUFGLENBQVN0RztBQUF6QixPQUFkLENBRHdCO0FBQUEsS0F6cEJLOztBQUFBLFVBNHBCdkIyRyxXQTVwQnVCLEdBNHBCVCxVQUFDTixDQUFEO0FBQUEsYUFDcEIsTUFBS3pCLFFBQUwsQ0FBYztBQUFFbkUsWUFBSSxFQUFFNEYsQ0FBQyxDQUFDQyxNQUFGLENBQVN0RztBQUFqQixPQUFkLENBRG9CO0FBQUEsS0E1cEJTOztBQUFBLFVBK3BCdkI0RyxnQkEvcEJ1QixHQStwQko7QUFBQSxhQUN6QixNQUFLaEMsUUFBTCxDQUFjO0FBQUUvQixpQkFBUyxFQUFFLENBQUMsTUFBS2tDLEtBQUwsQ0FBV2xDO0FBQXpCLE9BQWQsQ0FEeUI7QUFBQSxLQS9wQkk7O0FBQUEsVUFrcUJ2QmdFLGdCQWxxQnVCLEdBa3FCSjtBQUFBLGFBQ3pCLE1BQUtqQyxRQUFMLENBQWM7QUFBRWhDLGlCQUFTLEVBQUUsQ0FBQyxNQUFLbUMsS0FBTCxDQUFXbkM7QUFBekIsT0FBZCxDQUR5QjtBQUFBLEtBbHFCSTs7QUFBQSxVQXFxQnZCa0UsYUFycUJ1QixHQXFxQlAsVUFBQzlHLEtBQUQ7QUFBQSxhQUFtQixNQUFLNEUsUUFBTCxDQUFjO0FBQUU1QixhQUFLLEVBQUVoRDtBQUFULE9BQWQsQ0FBbkI7QUFBQSxLQXJxQk87O0FBQUEsVUF1cUJ2QitHLFVBdnFCdUIsR0F1cUJWLFVBQUNWLENBQUQsRUFBNEM7QUFDL0RBLE9BQUMsQ0FBQ1csY0FBRjs7QUFDQSxZQUFLNUUsSUFBTCxDQUFVMkUsVUFBVjtBQUNELEtBMXFCOEI7O0FBQUEsVUE0cUJ2QkUsc0JBNXFCdUIsR0E0cUJFO0FBQUEsYUFDL0IsTUFBS3JDLFFBQUwsQ0FBYztBQUFFekIsdUJBQWUsRUFBRSxDQUFDLE1BQUs0QixLQUFMLENBQVc1QjtBQUEvQixPQUFkLENBRCtCO0FBQUEsS0E1cUJGOztBQUFBLFVBK3FCdkIrRCxxQkEvcUJ1QixHQStxQkM7QUFBQSxhQUM5QixNQUFLdEMsUUFBTCxDQUFjO0FBQUUxQiw0QkFBb0IsRUFBRSxDQUFDLE1BQUs2QixLQUFMLENBQVc3QjtBQUFwQyxPQUFkLENBRDhCO0FBQUEsS0EvcUJEOztBQUFBLFVBa3JCdkJpRSxjQWxyQnVCLEdBa3JCTixVQUFDbkgsS0FBRDtBQUFBLGFBQ3ZCLE1BQUs0RSxRQUFMLENBQWM7QUFBRTNCLGVBQU8sRUFBRWpEO0FBQVgsT0FBZCxDQUR1QjtBQUFBLEtBbHJCTTs7QUFBQSxVQXFyQnZCb0gsb0JBcnJCdUIsR0FxckJBO0FBQUEsYUFDN0IsTUFBS3hDLFFBQUwsQ0FBYztBQUFFOUIsMEJBQWtCLEVBQUUsQ0FBQyxNQUFLaUMsS0FBTCxDQUFXakM7QUFBbEMsT0FBZCxDQUQ2QjtBQUFBLEtBcnJCQTs7QUFBQSxVQXdyQnZCdUUsUUF4ckJ1QixHQXdyQlosVUFBQ2hCLENBQUQsRUFBNEM7QUFDN0RBLE9BQUMsQ0FBQ1csY0FBRjs7QUFDQSxZQUFLNUUsSUFBTCxDQUFVaUYsUUFBVjtBQUNELEtBM3JCOEI7O0FBRTdCLFVBQUt0QyxLQUFMLEdBQWEsTUFBS3hDLFlBQWxCO0FBQ0EsVUFBSytFLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QiwrQkFBMUI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLCtCQUFsQjtBQUNBLFVBQUtFLHdCQUFMLEdBQWdDLE1BQUtBLHdCQUFMLENBQThCRixJQUE5QiwrQkFBaEM7QUFDQSxVQUFLRyxzQkFBTCxHQUE4QixNQUFLQSxzQkFBTCxDQUE0QkgsSUFBNUIsK0JBQTlCO0FBQ0EsVUFBS2xGLHNCQUFMLEdBQThCc0YsK0NBQUEsRUFBOUI7QUFQNkI7QUFROUI7O0FBekRIO0FBQUE7QUFBQSw2QkEyRGtCO0FBQUE7O0FBQ2QsVUFBSUMsUUFBUSxHQUFHcEUsdURBQVEsR0FDcEJxRSxHQURZLENBQ1IsQ0FEUSxFQUNMLE1BREssRUFFWkEsR0FGWSxDQUVSLENBRlEsRUFFTCxTQUZLLENBQWY7QUFHQSxVQUFJQyxRQUFRLEdBQUd0RSx1REFBUSxHQUNwQnVFLFFBRFksQ0FDSCxDQURHLEVBQ0EsTUFEQSxFQUVaQSxRQUZZLENBRUgsQ0FGRyxFQUVBLFNBRkEsQ0FBZjtBQUlBLGFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLG9EQUFDLCtDQUFEO0FBQU0sa0JBQVUsRUFBRSxJQUFsQjtBQUF3QixpQkFBUyxFQUFDO0FBQWxDLFNBQ0Usb0RBQUMsbURBQUQ7QUFDRSxhQUFLLEVBQUMsZ0NBRFI7QUFFRSxpQkFBUyxFQUFFLEtBQUtYLG9CQUZsQjtBQUdFLGVBQU8sRUFBRSxLQUFLckMsS0FBTCxDQUFXakMsa0JBSHRCO0FBSUUsYUFBSyxFQUFDO0FBSlIsUUFERixFQU9FLG9EQUFDLHlEQUFEO0FBQWdCLGFBQUssRUFBQztBQUF0QixTQUNFLG9EQUFDLGdEQUFEO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxhQUFLLEVBQUMsTUFGUjtBQUdFLGFBQUssRUFBQyxNQUhSO0FBSUUsY0FBTSxFQUFFLEtBQUtpQyxLQUFMLENBQVc5QixPQUpyQjtBQUtFLGlCQUFTLEVBQUUsS0FBS2tFO0FBTGxCLFFBREYsRUFRRSxvREFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxPQURQO0FBRUUsYUFBSyxFQUFDLE9BRlI7QUFHRSxhQUFLLEVBQUMsT0FIUjtBQUlFLGNBQU0sRUFBRSxLQUFLcEMsS0FBTCxDQUFXOUIsT0FKckI7QUFLRSxpQkFBUyxFQUFFLEtBQUtrRTtBQUxsQixRQVJGLENBUEYsRUF1QkUsb0RBQUMsbURBQUQ7QUFDRSxhQUFLLEVBQUMsaUJBRFI7QUFFRSxpQkFBUyxFQUFFLEtBQUtELHFCQUZsQjtBQUdFLGVBQU8sRUFBRSxLQUFLbkMsS0FBTCxDQUFXN0Isb0JBSHRCO0FBSUUsYUFBSyxFQUFDO0FBSlIsUUF2QkYsRUE2QkUsb0RBQUMsbURBQUQ7QUFDRSxhQUFLLEVBQUMsU0FEUjtBQUVFLGlCQUFTLEVBQUUsS0FBSytELHNCQUZsQjtBQUdFLGVBQU8sRUFBRSxLQUFLbEMsS0FBTCxDQUFXNUIsZUFIdEI7QUFJRSxhQUFLLEVBQUM7QUFKUixRQTdCRixDQURGLENBREYsQ0FERixDQURGLENBREYsRUE2Q0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBRTtBQUFoQixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0csQ0FBQyxLQUFLNEIsS0FBTCxDQUFXNUIsZUFBWixJQUNDLG9EQUFDLCtDQUFEO0FBQ0Usa0JBQVUsRUFBRSxJQURkO0FBRUUsV0FBRyxFQUFFLEtBQUttQixPQUZaO0FBR0UsZ0JBQVEsRUFBRSxLQUFLa0Q7QUFDZjs7Ozs7Ozs7Ozs7O0FBSkYsU0FnQkUsb0RBQUMsc0RBQUQ7QUFDRSxZQUFJLEVBQUU7QUFBRyxtQkFBUyxFQUFDO0FBQWIsa0JBRFI7QUFFRSxhQUFLLEVBQUUsY0FGVDtBQUdFLGdCQUFRLEVBQ04scURBSko7QUFNRSxxQkFBYSxFQUFFLElBTmpCO0FBT0UsWUFBSSxFQUFDLE1BUFA7QUFRRSxtQkFBVyxFQUFFLElBUmY7QUFTRSx3QkFBZ0IsRUFBRSxLQVRwQjtBQVVFLGtCQUFVLEVBQ1Isb0RBQUMsaURBQUQ7QUFDRSxjQUFJLEVBQUUsU0FEUjtBQUVFLGlCQUFPLEVBQUUsS0FBS0EsVUFGaEI7QUFHRSxzQkFBWSxFQUFFLEtBQUt6QyxLQUFMLENBQVdqQztBQUgzQixvQkFYSjtBQW1CRSxvQkFBWSxFQUFFLENBQ1osb0RBQUMsaURBQUQ7QUFBUSxhQUFHLEVBQUUsQ0FBYjtBQUFnQixrQkFBUSxFQUFFLElBQTFCO0FBQWdDLGlCQUFPLEVBQUUsS0FBS3VFO0FBQTlDLHVCQURZLEVBSVosb0RBQUMsaURBQUQ7QUFDRSxhQUFHLEVBQUUsQ0FEUDtBQUVFLGtCQUFRLEVBQUUsSUFGWjtBQUdFLGlCQUFPLEVBQUUsS0FBS047QUFIaEIsMEJBSlksQ0FuQmhCO0FBK0JFLHlDQUFpQyxFQUFFO0FBL0JyQyxTQWlDRSxvREFBQyx5REFBRDtBQUFnQixhQUFLLEVBQUM7QUFBdEIsU0FDRSxvREFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxPQURQO0FBRUUsYUFBSyxFQUFDLE1BRlI7QUFHRSxhQUFLLEVBQUMsTUFIUjtBQUlFLGNBQU0sRUFBRSxLQUFLaEMsS0FBTCxDQUFXL0IsS0FKckI7QUFLRSxpQkFBUyxFQUFFLEtBQUs4RDtBQUxsQixRQURGLEVBUUUsb0RBQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQUMsT0FEUDtBQUVFLGFBQUssRUFBQyxTQUZSO0FBR0UsYUFBSyxFQUFDLFNBSFI7QUFJRSxjQUFNLEVBQUUsS0FBSy9CLEtBQUwsQ0FBVy9CLEtBSnJCO0FBS0UsaUJBQVMsRUFBRSxLQUFLOEQ7QUFMbEIsUUFSRixFQWVFLG9EQUFDLGdEQUFEO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxhQUFLLEVBQUMsT0FGUjtBQUdFLGFBQUssRUFBQyxPQUhSO0FBSUUsY0FBTSxFQUFFLEtBQUsvQixLQUFMLENBQVcvQixLQUpyQjtBQUtFLGlCQUFTLEVBQUUsS0FBSzhEO0FBTGxCLFFBZkYsQ0FqQ0YsRUF3REUsb0RBQUMseURBQUQ7QUFDRSxhQUFLLEVBQUMscUJBRFI7QUFFRSxrQkFBVSxFQUFFO0FBRmQsU0FJRSxvREFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsYUFBSyxFQUFDLE1BRlI7QUFHRSxhQUFLLEVBQUMsTUFIUjtBQUlFLGNBQU0sRUFBRSxLQUFLL0IsS0FBTCxDQUFXL0IsS0FKckI7QUFLRSxpQkFBUyxFQUFFLEtBQUs4RDtBQUxsQixRQUpGLEVBV0Usb0RBQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGFBQUssRUFBQyxTQUZSO0FBR0UsYUFBSyxFQUFDLFNBSFI7QUFJRSxjQUFNLEVBQUUsS0FBSy9CLEtBQUwsQ0FBVy9CLEtBSnJCO0FBS0UsaUJBQVMsRUFBRSxLQUFLOEQ7QUFMbEIsUUFYRixFQWtCRSxvREFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsYUFBSyxFQUFDLE9BRlI7QUFHRSxhQUFLLEVBQUMsT0FIUjtBQUlFLGNBQU0sRUFBRSxLQUFLL0IsS0FBTCxDQUFXL0IsS0FKckI7QUFLRSxpQkFBUyxFQUFFLEtBQUs4RDtBQUxsQixRQWxCRixDQXhERixFQWtGRSxvREFBQyxtREFBRDtBQUNFLGdCQUFRLEVBQUUsSUFEWjtBQUVFLGFBQUssRUFBQyxPQUZSO0FBR0UsaUJBQVMsRUFBRSxLQUFLRCxnQkFIbEI7QUFJRSxlQUFPLEVBQUUsS0FBSzlCLEtBQUwsQ0FBV25DLFNBSnRCO0FBS0UsYUFBSyxFQUFDLFlBTFI7QUFNRSxlQUFPLEVBQUM7QUFOVixRQWxGRixFQTBGRSxvREFBQyxtREFBRDtBQUNFLGFBQUssRUFBQyxZQURSO0FBRUUsaUJBQVMsRUFBRSxLQUFLZ0UsZ0JBRmxCO0FBR0UsZUFBTyxFQUFFLEtBQUs3QixLQUFMLENBQVdsQyxTQUh0QjtBQUlFLGFBQUssRUFBQztBQUpSLFFBMUZGLEVBZ0dFLG9EQUFDLCtDQUFEO0FBQ0UsZUFBTyxFQUFFLEtBQUtrQyxLQUFMLENBQVc5QixPQUR0QjtBQUVFLGdCQUFRLEVBQUUsSUFGWjtBQUdFLGFBQUssRUFBQyxXQUhSO0FBSUUsZ0JBQVEsRUFBRSxLQUFLMEQsV0FKakI7QUFLRSxhQUFLLEVBQUUsS0FBSzVCLEtBQUwsQ0FBV3RFLElBTHBCO0FBTUUsYUFBSyxFQUFDO0FBTlIsUUFoR0YsRUF3R0Usb0RBQUMsaURBQUQ7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNtRSxRQUFMLENBQWM7QUFBRW5FLGdCQUFJLEVBQUU7QUFBUixXQUFkLENBQU47QUFBQTtBQUFqQixnQkF4R0YsRUEyR0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRSxvREFBQywrQ0FBRDtBQUNFLGVBQU8sRUFBRSxLQUFLc0UsS0FBTCxDQUFXOUIsT0FEdEI7QUFFRSxnQkFBUSxFQUFFLElBRlo7QUFHRSxhQUFLLEVBQUMsc0JBSFI7QUFJRSxnQkFBUSxFQUFFLEtBQUswRCxXQUpqQjtBQUtFLGFBQUssRUFBRSxLQUFLNUIsS0FBTCxDQUFXdEUsSUFMcEI7QUFNRSxlQUFPLEVBQ0w7QUFBRyxtQkFBUyxFQUFDO0FBQWIsc0RBQ3lDLHNFQUR6QyxFQUNxRCxHQURyRDtBQVBKLFFBREYsQ0EzR0YsRUEwSEUsb0RBQUMsK0NBQUQ7QUFDRSxlQUFPLEVBQUUsS0FBS3NFLEtBQUwsQ0FBVzlCLE9BRHRCO0FBRUUsYUFBSyxFQUFDLFdBRlI7QUFHRSxnQkFBUSxFQUFFLEtBQUswRCxXQUhqQjtBQUlFLGFBQUssRUFBRSxLQUFLNUIsS0FBTCxDQUFXdEUsSUFKcEI7QUFLRSxhQUFLLEVBQUMsZUFMUjtBQU1FLGdCQUFRLEVBQUU7QUFOWixRQTFIRixFQWtJRSxvREFBQyxpREFBRDtBQUNFLGVBQU8sRUFBRSxLQUFLc0UsS0FBTCxDQUFXOUIsT0FEdEI7QUFFRSxhQUFLLEVBQUUsYUFGVDtBQUdFLGNBQU0sRUFBRWxDLFlBSFY7QUFJRSxnQkFBUSxFQUFFLEtBQUt1RyxrQkFKakI7QUFLRSxhQUFLLEVBQUUsS0FBS3ZDLEtBQUwsQ0FBV3ZDLE1BTHBCO0FBTUUsYUFBSyxFQUFDO0FBTlIsUUFsSUYsRUEwSUUsb0RBQUMsbURBQUQ7QUFDRSxlQUFPLEVBQUUsS0FBS3VDLEtBQUwsQ0FBVzlCLE9BRHRCO0FBRUUsZ0JBQVEsRUFBRSxJQUZaO0FBR0UsYUFBSyxFQUFDLFVBSFI7QUFJRSxnQkFBUSxFQUFFLEtBQUt5RCxlQUpqQjtBQUtFLGFBQUssRUFBRSxLQUFLM0IsS0FBTCxDQUFXVixZQUxwQjtBQU1FLGFBQUssRUFBQztBQU5SLFFBMUlGLEVBa0pFLG9EQUFDLG1EQUFEO0FBQ0UsZUFBTyxFQUFFLEtBQUtVLEtBQUwsQ0FBVzlCLE9BRHRCO0FBRUUsYUFBSyxFQUFDLFVBRlI7QUFHRSxnQkFBUSxFQUFFLEtBQUt5RCxlQUhqQjtBQUlFLGFBQUssRUFBRSxLQUFLM0IsS0FBTCxDQUFXVixZQUpwQjtBQUtFLGFBQUssRUFBQyxVQUxSO0FBTUUsZ0JBQVEsRUFBRTtBQU5aLFFBbEpGLEVBMEpFLG9EQUFDLHNEQUFEO0FBQ0UsYUFBSyxFQUFFLHNCQURUO0FBRUUsbUJBQVcsRUFBRSxJQUZmO0FBR0UseUNBQWlDLEVBQUUsSUFIckM7QUFJRSxnQkFBUSxFQUNOLG1EQUxKO0FBT0UsZUFBTyxFQUFDO0FBUFYsU0FTRSxvREFBQywrQ0FBRDtBQUNFLGVBQU8sRUFBRSxLQUFLVSxLQUFMLENBQVc5QixPQUR0QjtBQUVFLGtCQUFVLEVBQUUvQixlQUZkO0FBR0UsZ0JBQVEsRUFBRSxLQUhaO0FBSUUsYUFBSyxFQUFDLE9BSlI7QUFLRSxhQUFLLEVBQUUsS0FBSzZELEtBQUwsQ0FBV3RDLEtBTHBCO0FBTUUsZ0JBQVEsRUFBRSxLQUFLZ0UsWUFOakI7QUFPRSxhQUFLLEVBQUM7QUFQUixRQVRGLEVBa0JFLG9EQUFDLCtDQUFEO0FBQ0UsZUFBTyxFQUFFLEtBQUsxQixLQUFMLENBQVc5QixPQUR0QjtBQUVFLGdCQUFRLEVBQUUsSUFGWjtBQUdFLGFBQUssRUFBRSxxQ0FIVDtBQUlFLGFBQUssRUFBQztBQUpSLFFBbEJGLEVBd0JFLG9EQUFDLCtDQUFEO0FBQ0UsZUFBTyxFQUFFLEtBQUs4QixLQUFMLENBQVc5QixPQUR0QjtBQUVFLGtCQUFVLEVBQUU5QixhQUZkO0FBR0UsZ0JBQVEsRUFBRSxLQUhaO0FBSUUsYUFBSyxFQUFDLFNBSlI7QUFLRSxhQUFLLEVBQUUsS0FBSzRELEtBQUwsQ0FBV2YsT0FMcEI7QUFNRSxnQkFBUSxFQUFFLEtBQUt3QyxjQU5qQjtBQU9FLGFBQUssRUFBQztBQVBSLFFBeEJGLEVBaUNFLG9EQUFDLCtDQUFEO0FBQ0UsZUFBTyxFQUFFLEtBQUt6QixLQUFMLENBQVc5QixPQUR0QjtBQUVFLHdCQUFnQixFQUFFN0Isa0JBRnBCO0FBR0UsYUFBSyxFQUFDLHFCQUhSO0FBSUUsYUFBSyxFQUFFLEtBQUsyRCxLQUFMLENBQVdyQyxHQUpwQjtBQUtFLGdCQUFRLEVBQUUsS0FBSzZELFVBTGpCO0FBTUUsYUFBSyxFQUFDLEtBTlI7QUFPRSxZQUFJLEVBQUM7QUFQUCxRQWpDRixFQTBDRSxvREFBQywrQ0FBRDtBQUNFLGVBQU8sRUFBRSxLQUFLeEIsS0FBTCxDQUFXOUIsT0FEdEI7QUFFRSx3QkFBZ0IsRUFBRTVCLHFCQUZwQjtBQUdFLGFBQUssRUFBQyxPQUhSO0FBSUUsYUFBSyxFQUFFLEtBQUswRCxLQUFMLENBQVdwQyxJQUpwQjtBQUtFLGdCQUFRLEVBQUUsS0FBS3lELFdBTGpCO0FBTUUsYUFBSyxFQUFDO0FBTlIsUUExQ0YsQ0ExSkYsRUE2TUUsb0RBQUMsZ0RBQUQ7QUFDRSxrQkFBVSxFQUFFMUYsV0FEZDtBQUVFLGNBQU0sRUFBRSxLQUFLcUUsS0FBTCxDQUFXM0IsT0FGckI7QUFHRSxlQUFPLEVBQUUsS0FBSzJCLEtBQUwsQ0FBVzlCLE9BSHRCO0FBSUUsZ0JBQVEsRUFBRSxJQUpaO0FBS0Usc0JBQWMsRUFBRSxLQUFLa0QsY0FMdkI7QUFNRSxhQUFLLEVBQUM7QUFOUixRQTdNRixFQXFORSxvREFBQyxnREFBRDtBQUNFLGtCQUFVLEVBQUV2RixXQURkO0FBRUUsY0FBTSxFQUFFLEtBQUttRSxLQUFMLENBQVcxQixPQUZyQjtBQUdFLHFCQUFhLEVBQUUsSUFIakI7QUFJRSxlQUFPLEVBQUUsS0FBSzBCLEtBQUwsQ0FBVzlCLE9BSnRCO0FBS0UsZ0JBQVEsRUFBRSxLQUxaO0FBTUUsc0JBQWMsRUFBRSxLQUFLK0MsY0FOdkI7QUFPRSxhQUFLLEVBQUM7QUFQUixRQXJORixFQThORSxvREFBQyxnREFBRDtBQUNFLGtCQUFVLEVBQUVuRixXQURkO0FBRUUsY0FBTSxFQUFFLEtBQUtrRSxLQUFMLENBQVd6QixPQUZyQjtBQUdFLHFCQUFhLEVBQUUsSUFIakI7QUFJRSxlQUFPLEVBQUUsS0FBS3lCLEtBQUwsQ0FBVzlCLE9BSnRCO0FBS0UsZ0JBQVEsRUFBRSxLQUxaO0FBTUUsc0JBQWMsRUFBRSxLQUFLaUQsY0FOdkI7QUFPRSxhQUFLLEVBQUM7QUFQUixRQTlORixFQXVPRSxvREFBQywrQ0FBRDtBQUNFLGVBQU8sRUFBRSxLQUFLbkIsS0FBTCxDQUFXOUIsT0FEdEI7QUFFRSxZQUFJLEVBQUUsS0FBSzhCLEtBQUwsQ0FBV3RCLEtBRm5CO0FBR0Usa0JBQVUsRUFBRSxLQUFLcUMsWUFIbkI7QUFJRSxhQUFLLEVBQUM7QUFKUixRQXZPRixFQTZPRSxvREFBQywrQ0FBRDtBQUNFLFdBQUcsRUFBRThCLFFBRFA7QUFFRSxXQUFHLEVBQUVFLFFBRlA7QUFHRSxlQUFPLEVBQUUsS0FBSy9DLEtBQUwsQ0FBVzlCLE9BSHRCO0FBSUUsWUFBSSxFQUFFLEtBQUs4QixLQUFMLENBQVdyQixLQUpuQjtBQUtFLGtCQUFVLEVBQUUsS0FBS2tDLFlBTG5CO0FBTUUsYUFBSyxFQUFDO0FBTlIsUUE3T0YsRUFxUEUsb0RBQUMsbURBQUQ7QUFDRSxlQUFPLEVBQUUsS0FBS2IsS0FBTCxDQUFXOUIsT0FEdEI7QUFFRSxnQkFBUSxFQUFFLEtBQUs4QixLQUFMLENBQVd4QixRQUZ2QjtBQUdFLHNCQUFjLEVBQUUsS0FBS3dDLGVBSHZCO0FBSUUsYUFBSyxFQUFDLFdBSlI7QUFLRSxrQkFBVSxFQUFFaUMsdURBQVksQ0FBQ0MsSUFBYixHQUFvQkQsdURBQVksQ0FBQ0U7QUFML0MsUUFyUEYsRUE0UEUsb0RBQUMsMERBQUQ7QUFDRSxhQUFLLEVBQUUsMEJBRFQ7QUFFRSxlQUFPLEVBQUUsS0FBS25ELEtBQUwsQ0FBVzlCLE9BRnRCO0FBR0UsZ0JBQVEsRUFBRSxLQUhaO0FBSUUsNEJBQW9CLEVBQUUsS0FBSzBDLG1CQUo3QjtBQUtFLG9CQUFZLEVBQUUsS0FBS1osS0FBTCxDQUFXcEIsWUFMM0I7QUFNRSxhQUFLLEVBQUMsZUFOUjtBQU9FLG1CQUFXLEVBQUU7QUFQZixRQTVQRixFQXFRRSxvREFBQyxzREFBRDtBQUNFLGFBQUssRUFBRSxlQURUO0FBRUUsbUJBQVcsRUFBRSxJQUZmO0FBR0Usa0JBQVUsRUFDUixvREFBQyxpREFBRDtBQUFRLGNBQUksRUFBRTtBQUFkLHlCQUpKO0FBTUUsb0JBQVksRUFBRSxDQUNaLG9EQUFDLGlEQUFEO0FBQVEsYUFBRyxFQUFFLENBQWI7QUFBZ0Isa0JBQVEsRUFBRTtBQUExQiw0QkFEWSxFQUlaLG9EQUFDLGlEQUFEO0FBQVEsYUFBRyxFQUFFLENBQWI7QUFBZ0Isa0JBQVEsRUFBRTtBQUExQiw0QkFKWTtBQU5oQixTQWVFLG9EQUFDLDJEQUFEO0FBQ0UsZUFBTyxFQUFFLEtBQUtvQixLQUFMLENBQVc5QixPQUR0QjtBQUVFLGdCQUFRLEVBQUUsS0FGWjtBQUdFLG9CQUFZLEVBQUUsS0FBS3lDLHVCQUhyQjtBQUlFLFlBQUksRUFBRSxLQUFLWCxLQUFMLENBQVdsQixnQkFKbkI7QUFLRSxtQkFBVyxFQUFFLEtBQUtrQixLQUFMLENBQVdqQixtQkFMMUI7QUFNRSwyQkFBbUIsRUFDakIsS0FBSzBCLGtDQVBUO0FBU0UsbUJBQVcsRUFBRTtBQVRmLFFBZkYsQ0FyUUYsRUFnU0Usb0RBQUMsc0RBQUQ7QUFDRSxpQkFBUyxFQUFFLEVBRGI7QUFFRSxhQUFLLEVBQUUsNEJBRlQ7QUFHRSxtQkFBVyxFQUFFLElBSGY7QUFJRSxXQUFHLEVBQUUsS0FBS25ELHNCQUpaO0FBS0Usa0JBQVUsRUFDUixvREFBQyxpREFBRDtBQUNFLGNBQUksRUFBRSxTQURSO0FBRUUsaUJBQU8sRUFBRSxLQUFLNkM7QUFGaEI7QUFOSixTQWNFLG9EQUFDLDhEQUFEO0FBQ0UsZUFBTyxFQUFFLEtBQUtILEtBQUwsQ0FBVzlCLE9BRHRCO0FBRUUsZ0JBQVEsRUFBRSxLQUZaO0FBR0Usb0JBQVksRUFBRSxLQUFLK0IsMEJBSHJCO0FBSUUsWUFBSSxFQUFFLEtBQUtELEtBQUwsQ0FBV2hCLG1CQUpuQjtBQUtFLG1CQUFXLEVBQUM7QUFMZCxRQWRGLENBaFNGLEVBc1RFLG9EQUFDLHNEQUFEO0FBQ0UsaUJBQVMsRUFBRSxFQURiO0FBRUUsYUFBSyxFQUFFLFNBRlQ7QUFHRSxrQkFBVSxFQUNSLG9EQUFDLGlEQUFEO0FBQVEsY0FBSSxFQUFFO0FBQWQ7QUFKSixTQU9FO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsb0JBREYsRUFFRSxvREFBQyxlQUFELE9BRkYsQ0FQRixFQVdFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQscUJBREYsRUFFRSxvREFBQyxlQUFEO0FBQWlCLGdCQUFRLEVBQUU7QUFBM0IsUUFGRixDQVhGLEVBZUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxnQkFERixFQUVFLG9EQUFDLGVBQUQ7QUFBaUIsWUFBSSxFQUFFO0FBQXZCLFFBRkYsQ0FmRixFQW1CRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUksaUJBQVMsRUFBQztBQUFkLG9CQURGLEVBRUUsb0RBQUMsZUFBRDtBQUFpQixnQkFBUSxFQUFFO0FBQTNCLFFBRkYsQ0FuQkYsRUF1QkU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxpQkFERixFQUVFLG9EQUFDLGVBQUQ7QUFBaUIsYUFBSyxFQUFFO0FBQXhCLFFBRkYsQ0F2QkYsRUEyQkU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxpQkFERixFQUVFLG9EQUFDLGVBQUQ7QUFBaUIsYUFBSyxFQUFFO0FBQXhCLFFBRkYsQ0EzQkYsRUErQkU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxvQkFERixFQUVFLG9EQUFDLGVBQUQ7QUFBaUIsZ0JBQVEsRUFBRTtBQUEzQixRQUZGLENBL0JGLEVBbUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsb0JBREYsRUFFRSxvREFBQyxlQUFEO0FBQWlCLGdCQUFRLEVBQUUsSUFBM0I7QUFBaUMsaUJBQVMsRUFBQztBQUEzQyxRQUZGLENBbkNGLEVBdUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsdUJBREYsRUFFRSxvREFBQyxlQUFEO0FBQWlCLG1CQUFXLEVBQUUsSUFBOUI7QUFBb0MsaUJBQVMsRUFBQztBQUE5QyxRQUZGLENBdkNGLENBdFRGLEVBa1dFLG9EQUFDLHNEQUFEO0FBQ0UsaUJBQVMsRUFBRSxFQURiO0FBRUUsYUFBSyxFQUFFLFVBRlQ7QUFHRSxtQkFBVyxFQUFFLElBSGY7QUFJRSx3QkFBZ0IsRUFBRTtBQUpwQixTQU1FLG9EQUFDLG1EQUFELENBQ0U7QUFERjtBQUVFLGlCQUFTLEVBQUUsS0FBS2UsdUJBRmxCO0FBR0UsZUFBTyxFQUFFLEtBQUtDLEtBQUwsQ0FBV1gsZ0JBSHRCO0FBSUUsYUFBSyxFQUFDO0FBSlIsUUFORixFQVlFLG9EQUFDLCtDQUFEO0FBQ0UsYUFBSyxFQUFDLGNBRFI7QUFFRSxhQUFLLEVBQUMsV0FGUjtBQUdFLGlCQUFTLEVBQUU7QUFBRStELHFCQUFXLEVBQUU7QUFBZixTQUhiO0FBSUUsZ0JBQVEsRUFBRSxLQUFLcEQsS0FBTCxDQUFXWCxnQkFKdkI7QUFLRSxnQkFBUSxFQUFFLElBTFo7QUFNRSxZQUFJLEVBQUUsS0FBS1csS0FBTCxDQUFXZCxJQU5uQjtBQU9FLHFCQUFhLEVBQUUsS0FBS1k7QUFQdEIsUUFaRixFQXFCRSxvREFBQywrQ0FBRDtBQUNFLGFBQUssRUFBQyxrQkFEUjtBQUVFLGFBQUssRUFBQyx1QkFGUjtBQUdFLGdCQUFRLEVBQUUsS0FBS0UsS0FBTCxDQUFXWCxnQkFIdkI7QUFJRSxnQkFBUSxFQUFFLElBSlo7QUFLRSxlQUFPLEVBQUUsQ0FMWDtBQU1FLG9CQUFZLEVBQUU3RCxZQU5oQjtBQU9FLFlBQUksRUFBRSxLQUFLd0UsS0FBTCxDQUFXZCxJQVBuQjtBQVFFLHFCQUFhLEVBQUUsS0FBS1ksV0FSdEI7QUFTRSxpQkFBUyxFQUFFO0FBVGIsUUFyQkYsRUFnQ0Usb0RBQUMsK0NBQUQ7QUFDRSxhQUFLLEVBQUMsWUFEUjtBQUVFLGVBQU8sRUFBRSxDQUZYO0FBR0UsZ0JBQVEsRUFBRSxLQUFLRSxLQUFMLENBQVdYLGdCQUh2QjtBQUlFLGdCQUFRLEVBQUUsSUFKWjtBQUtFLFlBQUksRUFBRSxLQUFLVyxLQUFMLENBQVdkLElBTG5CO0FBTUUscUJBQWEsRUFBRSxLQUFLWSxXQU50QjtBQU9FLGlCQUFTLEVBQUUsSUFQYjtBQVFFLGtCQUFVLEVBQUUsb0JBQUF1RCxDQUFDO0FBQUEsaUJBQUlDLE9BQU8sQ0FBQ0MsSUFBUixDQUFhRixDQUFiLENBQUo7QUFBQTtBQVJmLFFBaENGLEVBMENFLG9EQUFDLCtDQUFEO0FBQ0UsYUFBSyxFQUFDLGlCQURSO0FBRUUsYUFBSyxFQUFDLFlBRlI7QUFHRSxlQUFPLEVBQUUsQ0FIWDtBQUlFLGdCQUFRLEVBQUUsSUFKWjtBQUtFLGdCQUFRLEVBQUUsS0FBS3JELEtBQUwsQ0FBV1gsZ0JBTHZCO0FBTUUsWUFBSSxFQUFFLEtBQUtXLEtBQUwsQ0FBV2QsSUFObkI7QUFPRSxxQkFBYSxFQUFFLEtBQUtZLFdBUHRCO0FBUUUsaUNBQXlCLEVBQUUsSUFSN0I7QUFTRSxpQkFBUyxFQUFFN0Q7QUFUYixRQTFDRixFQXFERSxvREFBQyxpREFBRDtBQUNFLGdCQUFRLEVBQUUsSUFEWjtBQUVFLGFBQUssRUFBQyxhQUZSO0FBR0UsYUFBSyxFQUFDLGFBSFI7QUFJRSxnQkFBUSxFQUFFLElBSlo7QUFLRSxvQkFBWSxFQUFFLElBTGhCO0FBTUUsZ0JBQVEsRUFBRSxLQUFLK0QsS0FBTCxDQUFXWCxnQkFOdkI7QUFPRSxzQkFBYyxFQUFFLEtBQUtXLEtBQUwsQ0FBV2IsY0FQN0I7QUFRRSxjQUFNLEVBQUUsS0FBS2EsS0FBTCxDQUFXWixjQVJyQjtBQVNFLDhCQUFzQixFQUFFLEtBQUtRO0FBVC9CLFFBckRGLEVBZ0VFLG9EQUFDLGlEQUFEO0FBQ0UsZUFBTyxFQUFFLGlCQUFBMEIsQ0FBQztBQUFBLGlCQUNSLE1BQUksQ0FBQ3pCLFFBQUwsQ0FBYztBQUNaViwwQkFBYyxFQUFFLENBQUM7QUFBRWxFLG1CQUFLLEVBQUU7QUFBVCxhQUFEO0FBREosV0FBZCxDQURRO0FBQUE7QUFEWixnQkFoRUYsQ0FsV0YsRUE0YUUsb0RBQUMsc0RBQUQ7QUFDRSxpQkFBUyxFQUFFLEVBRGI7QUFFRSxhQUFLLEVBQUUsVUFGVDtBQUdFLG1CQUFXLEVBQUUsSUFIZjtBQUlFLHdCQUFnQixFQUFFO0FBSnBCLFNBTUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRSxvREFBQyxtREFBRDtBQUNFLGlCQUFTLEVBQUMsd0JBRFo7QUFFRSxjQUFNLEVBQ0o7QUFBRyxtQkFBUyxFQUFDO0FBQWIsMkJBSEo7QUFLRSx5QkFBaUIsRUFBRSxDQUxyQjtBQU1FLHdCQUFnQixFQUFDLEtBTm5CO0FBT0UsaUJBQVMsRUFBRTtBQVBiLFNBU0UsdUVBVEYsQ0FERixFQVlFLG9EQUFDLG1EQUFEO0FBQ0UsaUJBQVMsRUFBQyx3QkFEWjtBQUVFLGNBQU0sRUFBRSxlQUZWO0FBR0UseUJBQWlCLEVBQUUsQ0FIckI7QUFJRSx3QkFBZ0IsRUFBQztBQUpuQixTQU1FLHVFQU5GLENBWkYsRUFvQkUsb0RBQUMsbURBQUQ7QUFDRSxpQkFBUyxFQUFDLG1CQURaO0FBRUUsV0FBRyxFQUFFLEtBQUt3RSx5QkFGWjtBQUdFLGNBQU0sRUFDSixvREFBQyxpREFBRDtBQUNFLGlCQUFPLEVBQUUsS0FBS0MsbUJBRGhCO0FBRUUsY0FBSSxFQUFDO0FBRlAsNkJBSko7QUFXRSxpQkFBUyxFQUFFLEtBWGI7QUFZRSx3QkFBZ0IsRUFBQztBQVpuQixTQWNFLHVFQWRGLENBcEJGLENBTkYsQ0E1YUYsRUF3ZEUsb0RBQUMsZ0VBQUQsT0F4ZEYsRUF5ZEU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRSxvREFBQyx3REFBRDtBQUNFLDRCQUFvQixFQUFFLEtBQUtNLEtBQUwsQ0FBVzdCLG9CQURuQztBQUVFLGlCQUFTLEVBQUMsTUFGWjtBQUdFLFlBQUksRUFBRSxTQUhSO0FBSUUsdUJBQWUsRUFBQyxFQUpsQjtBQUtFLHNCQUFjLEVBQUMsWUFMakI7QUFNRSwyQkFBbUIsRUFBQyxlQU50QjtBQU9FLHFCQUFhLEVBQUUsT0FQakI7QUFRRSwwQkFBa0IsRUFBRSxlQVJ0QjtBQVNFLGVBQU8sRUFBRSxLQUFLdUUsd0JBVGhCO0FBVUUsb0JBQVksRUFBRSxLQUFLMUMsS0FBTCxDQUFXakM7QUFWM0Isc0JBREYsRUFlRSxvREFBQyx3REFBRDtBQUNFLDRCQUFvQixFQUFFLEtBQUtpQyxLQUFMLENBQVc3QixvQkFEbkM7QUFFRSxpQkFBUyxFQUFDLE1BRlo7QUFHRSx1QkFBZSxFQUFDLEVBSGxCO0FBSUUsWUFBSSxFQUFFLFNBSlI7QUFLRSwyQkFBbUIsRUFBQyxlQUx0QjtBQU1FLHdCQUFnQixFQUFDLGFBTm5CO0FBT0UsMEJBQWtCLEVBQUUsZUFQdEI7QUFRRSx1QkFBZSxFQUFFLGFBUm5CO0FBU0UsZUFBTyxFQUFFLEtBQUt3RSxzQkFUaEI7QUFVRSxvQkFBWSxFQUFFLEtBQUszQyxLQUFMLENBQVdqQztBQVYzQix3QkFmRixDQXpkRixDQWhCRixDQUZKLENBREYsQ0FERixDQURGLENBN0NGLENBREY7QUFta0JEO0FBdG9CSDtBQUFBO0FBQUEsdUNBOHVCNkJ1RCxDQTl1QjdCLEVBOHVCc0U7QUFDbEUsVUFBTWtDLEdBQUcsR0FBR2xDLENBQUMsQ0FBQ0MsTUFBRixDQUFTdEcsS0FBckI7O0FBQ0EsVUFBSXVJLEdBQUcsS0FBSyxHQUFSLElBQWVBLEdBQUcsS0FBSyxHQUEzQixFQUFnQztBQUM5QixhQUFLM0QsUUFBTCxDQUFjO0FBQUVwQyxnQkFBTSxFQUFFK0Y7QUFBVixTQUFkO0FBQ0Q7QUFDRjtBQW52Qkg7QUFBQTtBQUFBLCtCQXF2QnFCbEMsQ0FydkJyQixFQXF2QjhEO0FBQzFEQSxPQUFDLElBQUlBLENBQUMsQ0FBQ1csY0FBRixFQUFMO0FBQ0EsV0FBS3BDLFFBQUwsQ0FBYyxLQUFLckMsWUFBbkI7QUFDRDtBQXh2Qkg7QUFBQTtBQUFBLDZDQTJ2Qkk4RCxDQTN2QkosRUE0dkJJbUMsVUE1dkJKLEVBNnZCSUMsS0E3dkJKLEVBOHZCSUMsT0E5dkJKLEVBK3ZCSUMsS0EvdkJKLEVBZ3dCSTtBQUNBdEMsT0FBQyxDQUFDVyxjQUFGO0FBQ0F3QixnQkFBVTtBQUNWSSxnQkFBVSxDQUFDLFlBQU07QUFDZkgsYUFBSztBQUNMRyxrQkFBVSxDQUFDO0FBQUEsaUJBQU1ELEtBQUssRUFBWDtBQUFBLFNBQUQsRUFBZ0IsSUFBaEIsQ0FBVjtBQUNELE9BSFMsRUFHUCxJQUhPLENBQVY7QUFJRDtBQXZ3Qkg7QUFBQTtBQUFBLDJDQTB3Qkl0QyxDQTF3QkosRUEyd0JJbUMsVUEzd0JKLEVBNHdCSUMsS0E1d0JKLEVBNndCSUMsT0E3d0JKLEVBOHdCSUMsS0E5d0JKLEVBK3dCSTtBQUNBdEMsT0FBQyxDQUFDVyxjQUFGO0FBQ0F3QixnQkFBVTtBQUNWSSxnQkFBVSxDQUFDLFlBQU07QUFDZkYsZUFBTztBQUNQRSxrQkFBVSxDQUFDO0FBQUEsaUJBQU1ELEtBQUssRUFBWDtBQUFBLFNBQUQsRUFBZ0IsSUFBaEIsQ0FBVjtBQUNELE9BSFMsRUFHUCxJQUhPLENBQVY7QUFJRDtBQXR4Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEVBQTJCaEIsbURBQTNCO2VBeXhCZXhGLEs7QUFBQTs7Ozs7Ozs7OzswQkF2NUJGcEMsWTswQkF5QlBRLFk7MEJBMkJBRyxXOzBCQUtBRSxXOzBCQU1BQyxXOzBCQU1BRSxZOzBCQUtBQyxrQjswQkFJQUUsZTswQkFFQUMsYTswQkFFQUMsa0I7MEJBRUFDLHFCOzBCQUlBRyxLOzBCQVVBQyxlOzBCQTRCT1UsSyIsImZpbGUiOiJjNDAxYzM4LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBEcm9wZG93bixcclxuICBGb3JtLFxyXG4gIFRpbWUsXHJcbiAgVGV4dCxcclxuICBTZWxlY3QsXHJcbiAgU3VibWl0LFxyXG4gIER5bmFtaWNTdWJtaXQsXHJcbiAgQ2hlY2tib3gsXHJcbiAgUmFkaW8sXHJcbiAgUmFkaW9Db250YWluZXIsXHJcbiAgTW9uZXksXHJcbiAgT3BlbmluZ0hvdXJzRGF5LFxyXG4gIE1vbmV5V2l0aEN1cnJlbmN5LFxyXG4gIE9wZW5pbmdIb3Vyc0RheU9iaixcclxuICBPcGVuaW5nSG91cnNXZWVrLFxyXG4gIE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmosXHJcbiAgT3BlbmluZ0hvdXJzU3BlY2lhbCxcclxuICBJbnB1dEhlYWRlcixcclxuICBCdXR0b24sXHJcbiAgQnV0dG9uVHlwZXMsXHJcbiAgVGFncyxcclxuICBUYWcsXHJcbiAgTnVtYmVyVmFsaWRhdG9yLFxyXG4gIFRleHRBcmVhLFxyXG4gIE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmosXHJcbiAgU2VsZWN0VmFsdWUsXHJcbiAgVGV4dFByb3BzLFxyXG4gIFZhbGlkYXRvclR5cGVzLFxyXG4gIElCYXNlVmFsaWRhdG9yLFxyXG4gIEJ1dHRvblByb3BzLFxyXG4gIEZvcm1WYWxpZGF0aW9uU3VtbWFyeSxcclxuICBJbnB1dEhlYWRlclJhdyxcclxuICBUaW1lU3BhbixcclxuICBUaW1lU3BhblVuaXQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2luZGV4JztcclxuaW1wb3J0IHsgRHVyYXRpb24sIGR1cmF0aW9uIH0gZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzaWNQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNpY1N0YXRlIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZ2VuZGVyOiAnTScgfCAnRicgfCAnJztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGFnZTogc3RyaW5nO1xyXG4gIG1pbjE6IHN0cmluZztcclxuICBjaGVja2JveDE6IGJvb2xlYW47XHJcbiAgY2hlY2tib3gyOiBib29sZWFuO1xyXG4gIHZhbGlkYXRlRm9ybVN1Ym1pdDogYm9vbGVhbjtcclxuICBmb29kOiBzdHJpbmc7XHJcbiAgZHJpbms6IHN0cmluZztcclxuICB0b3VjaE9uOiAnYmx1cicgfCAnZm9jdXMnO1xyXG4gIHN1Ym1pdERpc2FibGVzSW5wdXRzOiBib29sZWFuO1xyXG4gIHNpbXVsYXRlVW5tb3VudDogYm9vbGVhbjtcclxuICBwcmljZXMxOiBNb25leVdpdGhDdXJyZW5jeVtdO1xyXG4gIHByaWNlczI6IE1vbmV5V2l0aEN1cnJlbmN5W107XHJcbiAgcHJpY2VzMzogTW9uZXlXaXRoQ3VycmVuY3lbXTtcclxuICB0aW1lMTogRHVyYXRpb247XHJcbiAgdGltZTI6IER1cmF0aW9uO1xyXG4gIHRpbWVTcGFuOiBEdXJhdGlvbjtcclxuICBvcGVuaW5nSG91cnM6IE9wZW5pbmdIb3Vyc0RheU9iajtcclxuICBvcGVuaW5nSG91cnNXZWVrOiBPcGVuaW5nSG91cnNEYXlPYmpbXTtcclxuICBvcGVuaW5nSG91cnNXZWVrRGF5OiBPcGVuaW5nSG91cnNEYXlPYmo7XHJcbiAgb3BlbmluZ0hvdXJzU3BlY2lhbDogT3BlbmluZ0hvdXJzU3BlY2lhbERheU9ialtdO1xyXG4gIHdlYnNpdGU6IHN0cmluZztcclxuICB0YWdzOiBUYWdbXTtcclxuICBzZWxlY3RlZFZhbHVlczogU2VsZWN0VmFsdWVbXTtcclxuICBtdWx0aXBsZVZhbHVlczogU2VsZWN0VmFsdWVbXTtcclxuICBtdWx0aXBsZVJlYWRvbmx5OiBib29sZWFuO1xyXG4gIHRleHRBcmVhVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWdlVmFsaWRhdG9yIHtcclxuICBwdWJsaWMgc3RhdGljIGluc3RhbmNlID0gbmV3IEFnZVZhbGlkYXRvcigpO1xyXG4gIHB1YmxpYyBWYWxpZGF0ZShcclxuICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICBpc1JlcXVpcmVkOiBib29sZWFuLFxyXG4gICAgYWRkRXJyb3I6IChlcnJvcjogc3RyaW5nKSA9PiB2b2lkXHJcbiAgKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgbnVtID0gTnVtYmVyKHZhbHVlKTtcclxuICAgIGlmICghaXNOYU4obnVtKSkge1xyXG4gICAgICBpZiAobnVtIDw9IDApIHtcclxuICAgICAgICBhZGRFcnJvcignTm90IGJvcm4geWV0PycpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtID4gMTIyKSB7XHJcbiAgICAgICAgYWRkRXJyb3IoJ09sZGVyIHRoYW4gSmVhbm5lIENhbG1lbnQ/IFJlYWxseT8nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhZGRFcnJvcignSW52YWxpZCBhZ2UnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGV4aXN0aW5nVGFnczogVGFnW10gPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiAnRm9vZCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6ICdEcmluaycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIG5hbWU6ICdCZWVyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgbmFtZTogJ1dpbmUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBuYW1lOiAnR2x1dGVuIGZyZWUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBuYW1lOiAnRnJ1aXQnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBjdXJyZW5jaWVzMSA9IFtcclxuICB7IGxhYmVsOiAnR0JQJywgdmFsdWU6ICdHQlAnIH0sXHJcbiAgeyBsYWJlbDogJ0VVUicsIHZhbHVlOiAnRVVSJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VycmVuY2llczIgPSBbXHJcbiAgeyBsYWJlbDogJ0dCUCcsIHZhbHVlOiAnR0JQJyB9LFxyXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUicgfSxcclxuICB7IGxhYmVsOiAnVVNEJywgdmFsdWU6ICdVU0QnIH0sXHJcbl07XHJcblxyXG5jb25zdCBjdXJyZW5jaWVzMyA9IFtcclxuICB7IGxhYmVsOiAnR0JQJywgdmFsdWU6ICdHQlAnLCBmb3JjZVNlbGVjdGVkOiB0cnVlIH0sXHJcbiAgeyBsYWJlbDogJ0VVUicsIHZhbHVlOiAnRVVSJyB9LFxyXG4gIHsgbGFiZWw6ICdVU0QnLCB2YWx1ZTogJ1VTRCcgfSxcclxuXTtcclxuXHJcbmNvbnN0IGdlbmRlclZhbHVlcyA9IFtcclxuICB7IHZhbHVlOiAnTScsIGxhYmVsOiAnTWFsZScgfSxcclxuICB7IHZhbHVlOiAnRicsIGxhYmVsOiAnRmVtYWxlJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgdGFnc0VtYWlsVGV4dFByb3BzOiBUZXh0UHJvcHMgPSB7XHJcbiAgdmFsaWRhdG9yczogWydlbWFpbCddLFxyXG59O1xyXG5cclxuY29uc3QgZW1haWxWYWxpZGF0b3JzOiBWYWxpZGF0b3JUeXBlc1tdID0gWydlbWFpbCddO1xyXG5cclxuY29uc3QgdXJsVmFsaWRhdG9yczogVmFsaWRhdG9yVHlwZXNbXSA9IFsndXJsJ107XHJcblxyXG5jb25zdCBjdXN0b21BZ2VWYWxpZGF0b3I6IElCYXNlVmFsaWRhdG9yW10gPSBbQWdlVmFsaWRhdG9yLmluc3RhbmNlXTtcclxuXHJcbmNvbnN0IGN1c3RvbU51bWJlclZhbGlkYXRvcjogSUJhc2VWYWxpZGF0b3JbXSA9IFtcclxuICBuZXcgTnVtYmVyVmFsaWRhdG9yKHsgbWluOiAwIH0pLFxyXG5dO1xyXG5cclxuY29uc3QgdHlwZXM6IEJ1dHRvblR5cGVzW10gPSBbXHJcbiAgJ3ByaW1hcnknLFxyXG4gICd3YXJuaW5nJyxcclxuICAnZXJyb3InLFxyXG4gICdpbmZvJyxcclxuICAnc3VjY2VzcycsXHJcbiAgJ2dyYXknLFxyXG4gICd3aGl0ZScsXHJcbiAgJ25vbmUnLFxyXG5dO1xyXG5jb25zdCBCdXR0b25zU2hvd2Nhc2U6IFJlYWN0LlNGQzxCdXR0b25Qcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwicHgtMlwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0OCwgMjQ3LCAyNDcpJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3R5cGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9e2l0ZW19IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9e2l0ZW19IGRpc2FibGVkPXt0cnVlfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICBEaXNhYmxlZFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQnV0dG9uc1Nob3djYXNlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjbGFzc05hbWU6ICdteS0yIG1yLTInLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2ljIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxCYXNpY1Byb3BzLCBCYXNpY1N0YXRlPiB7XHJcbiAgcHJpdmF0ZSBmb3JtOiBGb3JtO1xyXG5cclxuICBwcml2YXRlIHNwZWNpYWxEYXlzSW5wdXRIZWFkZXI6IFJlYWN0LlJlZk9iamVjdDxJbnB1dEhlYWRlclJhdz47XHJcblxyXG4gIHByaXZhdGUgZHJvcGRvd25GdW5jdGlvbkhlYWRlcjogRHJvcGRvd247XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbFN0YXRlOiBCYXNpY1N0YXRlID0ge1xyXG4gICAgZ2VuZGVyOiAnJyxcclxuICAgIG5hbWU6ICdUZXN0JyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIGFnZTogJycsXHJcbiAgICBtaW4xOiAnJyxcclxuICAgIGNoZWNrYm94MTogdHJ1ZSxcclxuICAgIGNoZWNrYm94MjogZmFsc2UsXHJcbiAgICB2YWxpZGF0ZUZvcm1TdWJtaXQ6IHRydWUsXHJcbiAgICBmb29kOiAnYnJlYWtmYXN0JyxcclxuICAgIGRyaW5rOiAnYnJlYWtmYXN0JyxcclxuICAgIHRvdWNoT246ICdmb2N1cycsXHJcbiAgICBzdWJtaXREaXNhYmxlc0lucHV0czogdHJ1ZSxcclxuICAgIHNpbXVsYXRlVW5tb3VudDogZmFsc2UsXHJcbiAgICBwcmljZXMxOiBbXSxcclxuICAgIHByaWNlczI6IFtdLFxyXG4gICAgcHJpY2VzMzogW10sXHJcbiAgICB0aW1lU3BhbjogZHVyYXRpb24oMCksXHJcbiAgICB0aW1lMTogZHVyYXRpb24oMCksXHJcbiAgICB0aW1lMjogZHVyYXRpb24oMCksXHJcbiAgICBvcGVuaW5nSG91cnM6IHtcclxuICAgICAgdGltZXM6IFtdLFxyXG4gICAgfSxcclxuICAgIG9wZW5pbmdIb3Vyc1dlZWs6IFtdLFxyXG4gICAgb3BlbmluZ0hvdXJzV2Vla0RheToge1xyXG4gICAgICB0aW1lczogW10sXHJcbiAgICB9LFxyXG4gICAgb3BlbmluZ0hvdXJzU3BlY2lhbDogW10sXHJcbiAgICB3ZWJzaXRlOiAnJyxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgc2VsZWN0ZWRWYWx1ZXM6IFtdLFxyXG4gICAgbXVsdGlwbGVWYWx1ZXM6IFtcclxuICAgICAgeyB2YWx1ZTogJ09uZSBvcHRpb24nIH0sXHJcbiAgICAgIHsgdmFsdWU6ICdTZWNvbmQgb3B0aW9uJyB9LFxyXG4gICAgICB7IHZhbHVlOiAnVGhpcmQgb3B0aW9uJyB9LFxyXG4gICAgICB7IHZhbHVlOiAnb25lIG1vcmUgb3B0aW9uJyB9LFxyXG4gICAgICB7IHZhbHVlOiAncmx5IGxvbmcgbGFzdCBvcHRpb24nIH0sXHJcbiAgICBdLFxyXG4gICAgbXVsdGlwbGVSZWFkb25seTogZmFsc2UsXHJcbiAgICB0ZXh0QXJlYVRleHQ6ICcnLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBCYXNpY1Byb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGU7XHJcbiAgICB0aGlzLmhhbmRsZUdlbmRlckNoYW5nZSA9IHRoaXMuaGFuZGxlR2VuZGVyQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtID0gdGhpcy5keW5hbWljU3VibWl0U3VjY2Vzc0Zvcm0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHluYW1pY1N1Ym1pdEVycm9yRm9ybSA9IHRoaXMuZHluYW1pY1N1Ym1pdEVycm9yRm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zcGVjaWFsRGF5c0lucHV0SGVhZGVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgbGV0IHRpbWUyTWF4ID0gZHVyYXRpb24oKVxyXG4gICAgICAuYWRkKDEsICdob3VyJylcclxuICAgICAgLmFkZCg1LCAnbWludXRlcycpO1xyXG4gICAgbGV0IHRpbWUyTWluID0gZHVyYXRpb24oKVxyXG4gICAgICAuc3VidHJhY3QoMSwgJ2hvdXInKVxyXG4gICAgICAuc3VidHJhY3QoNSwgJ21pbnV0ZXMnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93ICBtdC01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2sgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlPXt0cnVlfSBjbGFzc05hbWU9XCJpbnB1dF9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlR1cm4gZm9ybSB2YWxpZGF0aW9uIG9uIG9yIG9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmZvcm1WYWxpZGF0aW9uVG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVmFsaWRhdGUgZm9ybSBzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW9Db250YWluZXIgdGl0bGU9XCJUb3VjaCBvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvdWNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMudG91Y2hPbkNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3VjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImZvY3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRm9jdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMudG91Y2hPbkNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9SYWRpb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNhYmxlcyBpbnB1dHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kaXNhYmxlc0lucHV0c0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5zdWJtaXREaXNhYmxlc0lucHV0c31cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVW5tb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLnNpbXVsYXRlVW5tb3VudENoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5zaW11bGF0ZVVubW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTaW11bGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXktNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjYXJkICd9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9jayBwLTBcIj5cclxuICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5zaW11bGF0ZVVubW91bnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLmZvcm1SZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAvKmV4dHJhQ29tcG9uZW50cz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGVzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRBcGk6IHt9IGFzIGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogWydUZXN0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1Rlc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9fSovXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGljb249ezxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1kLTQ4XCI+ZWRpdDwvaT59XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0V4YW1wbGUgZm9ybSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWJUaXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQW5kIHRoaXMgaXMgc3VidGl0bGUuIFRoZXJlJ3MgYWxzbyBpY29uIG9uIHRoZSBsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNob3dFeHBhbmRBbGw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGVyb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZERlZmF1bHQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFpbkJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdWJtaXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybT17dGhpcy5zdGF0ZS52YWxpZGF0ZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdWJtaXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBleHRyYUJ1dHRvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9ezF9IGRyb3Bkb3duPXt0cnVlfSBvbkNsaWNrPXt0aGlzLnRvdWNoQWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUb3VjaCBhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudW5Ub3VjaEFsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFVuLXRvdWNoIGFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2hvdWxkVG9nZ2xlQ29sbGFwc2VPbkhlYWRlckNsaWNrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0NvbnRhaW5lciB0aXRsZT1cIkRyaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2luZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3aGlza2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldoaXNrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRHJpbmtzIChob3Jpem9udGFsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmluazJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2luZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmluazJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2hpc2tleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaGlza2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmluazJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2F0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2F0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuY2hlY2tib3gxQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2JveDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRHJlc3MgY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJXaXRoIHRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIihvcHRpb25hbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuY2hlY2tib3gyQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2JveDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiV2FsbGV0IHBhcmtpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubmFtZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogbnVsbCB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRlc3RcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBuYW1lIChubyB0aXRsZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm5hbWVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBzb21lIGhlbHAgdGV4dC4gSXQgY2FuIGFsc28gZG8gPGI+Ym9sZDwvYj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgb3RoZXIgc3R1ZmYuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubmFtZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTmFtZSByZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J1lvdXIgZ2VuZGVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXtnZW5kZXJWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmRlckNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkdlbmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50ZXh0QXJlYUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRleHRBcmVhVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRleHRBcmVhQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGV4dEFyZWFUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnU29tZSBjb2xsYXBzZWQgc3R1ZmYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkVG9nZ2xlQ29sbGFwc2VPbkhlYWRlckNsaWNrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJUaXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJIZWxwZnVsIHRleHQgdGhhdCBkZXNjcmliZXMgd2hhdCdzIGNvbGxhcHNlZCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiV2l0aCB0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17ZW1haWxWYWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbWFpbENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eydZb3UgY2FuIHNlbGVjdCBtZSBidXQgSSBhbSByZWFkb25seSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e3VybFZhbGlkYXRvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2Vic2l0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUud2Vic2l0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy53ZWJzaXRlQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIllvdXIgd2Vic2l0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVZhbGlkYXRvcnM9e2N1c3RvbUFnZVZhbGlkYXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgYWdlIChvcHRpb25hbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5hZ2VDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tVmFsaWRhdG9ycz17Y3VzdG9tTnVtYmVyVmFsaWRhdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWluIDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1pbjF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubWluMUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb25leVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jaWVzPXtjdXJyZW5jaWVzMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzPXt0aGlzLnN0YXRlLnByaWNlczF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJpY2VzQ2hhbmdlPXt0aGlzLnByaWNlczFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9uZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY2llcz17Y3VycmVuY2llczJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlcz17dGhpcy5zdGF0ZS5wcmljZXMyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QcmljZXNDaGFuZ2U9e3RoaXMucHJpY2VzMkNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJpY2UgbXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb25leVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jaWVzPXtjdXJyZW5jaWVzM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzPXt0aGlzLnN0YXRlLnByaWNlczN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblByaWNlc0NoYW5nZT17dGhpcy5wcmljZXMzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQcmljZSBtdWx0aXBsZSBmb3JjZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17dGhpcy5zdGF0ZS50aW1lMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNoYW5nZT17dGhpcy50aW1lMUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXt0aW1lMk1heH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXt0aW1lMk1pbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXt0aGlzLnN0YXRlLnRpbWUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lQ2hhbmdlPXt0aGlzLnRpbWUyQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJXaXRoIE1pbi9NYXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaW1lU3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVTcGFuPXt0aGlzLnN0YXRlLnRpbWVTcGFufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lU3BhbkNoYW5nZT17dGhpcy50aW1lU3BhbkNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGltZSBzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRVbml0cz17VGltZVNwYW5Vbml0LkhvdXIgfCBUaW1lU3BhblVuaXQuTWludXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPcGVuaW5nSG91cnNEYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydPcGVuaW5nIGhvdXJzIHNhbXBsZSBkYXknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuaW5nSG91cnNDaGFuZ2U9e3RoaXMub3BlbmluZ0hvdXJzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmluZ0hvdXJzPXt0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJPcGVuaW5nIGhvdXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlQ2FwYWNpdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnT3BlbmluZyBob3Vycyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQnV0dG9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9eydwcmltYXJ5J30+SGVybyBidXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUJ1dHRvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT17MX0gZHJvcGRvd249e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXh0cmEgYnV0dG9uIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9ezJ9IGRyb3Bkb3duPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4dHJhIGJ1dHRvbiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3BlbmluZ0hvdXJzV2Vla1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25EYXlzQ2hhbmdlPXt0aGlzLm9wZW5pbmdIb3Vyc1dlZWtDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRheXM9e3RoaXMuc3RhdGUub3BlbmluZ0hvdXJzV2Vla31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFuZGFyZERheT17dGhpcy5zdGF0ZS5vcGVuaW5nSG91cnNXZWVrRGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhbmRhcmREYXlDaGFuZ2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuaW5nSG91cnNXZWVrU3RhbmRhcmREYXlDaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUNhcGFjaXR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1NwZWNpYWwgZGF5cyBvcGVuaW5nIGhvdXJzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5zcGVjaWFsRGF5c0lucHV0SGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQnV0dG9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNwZWNpYWxEYXlzQWRkQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wZW5pbmdIb3Vyc1NwZWNpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGF5c0NoYW5nZT17dGhpcy5vcGVuaW5nSG91cnNTcGVjaWFsQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlzPXt0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc1NwZWNpYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnQnV0dG9ucyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5CdXR0b249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT17J3ByaW1hcnknfT5IZXJvIGJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+U3RhbmRhcmQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Tm8gc2hhZG93PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIG5vU2hhZG93PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5IZXJvPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIGhlcm89e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPk91dGxpbmVkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIG91dGxpbmVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5CbGFuazwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBibGFuaz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+U21hbGw8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2Ugc21hbGw9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkNpcmN1bGFyPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIGNpcmN1bGFyPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Ecm9wZG93bjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBkcm9wZG93bj17dHJ1ZX0gY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+VW5vYnRydXNpdmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgdW5vYnRydXNpdmU9e3RydWV9IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J011bHRpcGxlJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZERlZmF1bHQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsYWJlbD1cIk11bHRpcGxlIHJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMubXVsdGlwbGVSZWFkb25seUNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTXVsdGlwbGUgcmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGFncyBleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFuZCBsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFByb3BzPXt7IHBsYWNlaG9sZGVyOiAnV2l0aCBwbGFjZWhvbGRlcicgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M9e3RoaXMuc3RhdGUudGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhZ3NDaGFuZ2VkPXt0aGlzLnRhZ3NDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGFncyBzdWdnZXN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaG9vc2Ugb3IgY3JlYXRlIHRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGFncz17MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1RhZ3M9e2V4aXN0aW5nVGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZD17dGhpcy50YWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2hpcHM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIG1heCAzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUYWdzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NoaXBzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnQ2xpY2s9e3QgPT4gY29uc29sZS53YXJuKHQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGFncyBvbmx5IGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldpdGggbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFRhZ3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZD17dGhpcy50YWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50PXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQcm9wcz17dGFnc0VtYWlsVGV4dFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPbmUgb3IgbW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNdWx0aXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEVtcHR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt0aGlzLnN0YXRlLm11bHRpcGxlVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0ZWRWYWx1ZXNDaGFuZ2U9e3RoaXMuc2VsZWN0ZWRWYWx1ZXNDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVzOiBbeyB2YWx1ZTogJ09uZSBvcHRpb24nIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0Ryb3Bkb3duJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZERlZmF1bHQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvdyBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ub3RpZmljYXRpb25zPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQ291bnQ9ezV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtZW51Q2xhc3NOYW1lPVwicC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dBcnJvdz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkl0ZW08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtci0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17J1N0cmluZyBoZWFkZXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQ291bnQ9ezV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtZW51Q2xhc3NOYW1lPVwicC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SXRlbTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5kcm9wZG93bkZ1bmN0aW9uSGVhZGVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZnVuY3Rpb25IZWFkZXJDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGdW5jdGlvbiBoZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QXJyb3c9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWVudUNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkl0ZW08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtVmFsaWRhdGlvblN1bW1hcnkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIG15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPER5bmFtaWNTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXREaXNhYmxlc0lucHV0cz17dGhpcy5zdGF0ZS5zdWJtaXREaXNhYmxlc0lucHV0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsQ2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNsYXNzTmFtZT1cImJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmdDbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNoaWxkcmVuPXsnRXJyb3InfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmdDaGlsZHJlbj17J1dvcmtpbmcgb24gaXQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybT17dGhpcy5zdGF0ZS52YWxpZGF0ZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBamF4IEVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHluYW1pY1N1Ym1pdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPER5bmFtaWNTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXREaXNhYmxlc0lucHV0cz17dGhpcy5zdGF0ZS5zdWJtaXREaXNhYmxlc0lucHV0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxDbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydwcmltYXJ5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nQ2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NsYXNzTmFtZT1cImJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nQ2hpbGRyZW49eydXb3JraW5nIG9uIGl0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2hpbGRyZW49eydUaGF0IHdvcmtlZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5keW5hbWljU3VibWl0RXJyb3JGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybT17dGhpcy5zdGF0ZS52YWxpZGF0ZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBamF4IFN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EeW5hbWljU3VibWl0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtUmVmID0gKGVsOiBGb3JtKSA9PiAodGhpcy5mb3JtID0gZWwpO1xyXG5cclxuICBwcml2YXRlIGRyb3Bkb3duRnVuY3Rpb25IZWFkZXJSZWYgPSAoZWw6IERyb3Bkb3duKSA9PlxyXG4gICAgKHRoaXMuZHJvcGRvd25GdW5jdGlvbkhlYWRlciA9IGVsKTtcclxuXHJcbiAgcHJpdmF0ZSBmdW5jdGlvbkhlYWRlckNsaWNrID0gKCkgPT5cclxuICAgIHRoaXMuZHJvcGRvd25GdW5jdGlvbkhlYWRlci5zaG93TmF2aWdhdGlvbigpO1xyXG5cclxuICBwcml2YXRlIHNlbGVjdGVkVmFsdWVzQ2hhbmdlZCA9IChzZWxlY3RlZFZhbHVlczogU2VsZWN0VmFsdWVbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFZhbHVlcyB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0YWdzQ2hhbmdlZCA9ICh0YWdzOiBUYWdbXSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRhZ3MgfSk7XHJcblxyXG4gIHByaXZhdGUgbXVsdGlwbGVSZWFkb25seUNoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG11bHRpcGxlUmVhZG9ubHk6ICF0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHkgfSk7XHJcblxyXG4gIHByaXZhdGUgb3BlbmluZ0hvdXJzU3BlY2lhbENoYW5nZWQgPSAoZGF5czogT3BlbmluZ0hvdXJzU3BlY2lhbERheU9ialtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5pbmdIb3Vyc1NwZWNpYWw6IGRheXMgfSk7XHJcblxyXG4gIHByaXZhdGUgc3BlY2lhbERheXNBZGRDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBvcGVuaW5nSG91cnNTcGVjaWFsOiB0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc1NwZWNpYWwuY29uY2F0KFtcclxuICAgICAgICAgIHsgZGF0ZTogdW5kZWZpbmVkLCB0aW1lczogW10gfSxcclxuICAgICAgICBdKSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5zcGVjaWFsRGF5c0lucHV0SGVhZGVyLmN1cnJlbnQuZXhwYW5kKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvcGVuaW5nSG91cnNXZWVrU3RhbmRhcmREYXlDaGFuZ2VkID0gKGRheTogT3BlbmluZ0hvdXJzV2Vla0RheU9iaikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnNXZWVrRGF5OiBkYXkgfSk7XHJcblxyXG4gIHByaXZhdGUgb3BlbmluZ0hvdXJzV2Vla0NoYW5nZWQgPSAoZGF5czogT3BlbmluZ0hvdXJzV2Vla0RheU9ialtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5pbmdIb3Vyc1dlZWs6IGRheXMgfSk7XHJcblxyXG4gIHByaXZhdGUgb3BlbmluZ0hvdXJzQ2hhbmdlZCA9IChvcGVuaW5nSG91cnM6IE9wZW5pbmdIb3Vyc0RheU9iaikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnM6IG9wZW5pbmdIb3VycyB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0aW1lMkNoYW5nZWQgPSAodGltZTogRHVyYXRpb24pID0+IHRoaXMuc2V0U3RhdGUoeyB0aW1lMjogdGltZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0aW1lMUNoYW5nZWQgPSAodGltZTogRHVyYXRpb24pID0+IHRoaXMuc2V0U3RhdGUoeyB0aW1lMTogdGltZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0aW1lU3BhbkNoYW5nZWQgPSAodGltZVNwYW46IER1cmF0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgdGltZVNwYW4gfSk7XHJcblxyXG4gIHByaXZhdGUgcHJpY2VzMkNoYW5nZWQgPSAocHJpY2VzOiBNb25leVdpdGhDdXJyZW5jeVtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlczI6IHByaWNlcyB9KTtcclxuXHJcbiAgcHJpdmF0ZSBwcmljZXMzQ2hhbmdlZCA9IChwcmljZXM6IE1vbmV5V2l0aEN1cnJlbmN5W10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2VzMzogcHJpY2VzIH0pO1xyXG5cclxuICBwcml2YXRlIHByaWNlczFDaGFuZ2VkID0gKHByaWNlczogTW9uZXlXaXRoQ3VycmVuY3lbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZXMxOiBwcmljZXMgfSk7XHJcblxyXG4gIHByaXZhdGUgbWluMUNoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbWluMTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgYWdlQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIHdlYnNpdGVDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdlYnNpdGU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIGVtYWlsQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBlbWFpbDogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgdGV4dEFyZWFDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHRBcmVhVGV4dDogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgbmFtZUNoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbmFtZTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgY2hlY2tib3gyQ2hlY2tlZCA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tib3gyOiAhdGhpcy5zdGF0ZS5jaGVja2JveDIgfSk7XHJcblxyXG4gIHByaXZhdGUgY2hlY2tib3gxQ2hlY2tlZCA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tib3gxOiAhdGhpcy5zdGF0ZS5jaGVja2JveDEgfSk7XHJcblxyXG4gIHByaXZhdGUgZHJpbmtzQ2hlY2tlZCA9ICh2YWx1ZTogc3RyaW5nKSA9PiB0aGlzLnNldFN0YXRlKHsgZHJpbms6IHZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIHVuVG91Y2hBbGwgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZm9ybS51blRvdWNoQWxsKCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBzaW11bGF0ZVVubW91bnRDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaW11bGF0ZVVubW91bnQ6ICF0aGlzLnN0YXRlLnNpbXVsYXRlVW5tb3VudCB9KTtcclxuXHJcbiAgcHJpdmF0ZSBkaXNhYmxlc0lucHV0c0NoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdERpc2FibGVzSW5wdXRzOiAhdGhpcy5zdGF0ZS5zdWJtaXREaXNhYmxlc0lucHV0cyB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0b3VjaE9uQ2hlY2tlZCA9ICh2YWx1ZTogJ2JsdXInIHwgJ2ZvY3VzJykgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0b3VjaE9uOiB2YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBmb3JtVmFsaWRhdGlvblRvZ2dsZSA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGVGb3JtU3VibWl0OiAhdGhpcy5zdGF0ZS52YWxpZGF0ZUZvcm1TdWJtaXQgfSk7XHJcblxyXG4gIHByaXZhdGUgdG91Y2hBbGwgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuZm9ybS50b3VjaEFsbCgpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlR2VuZGVyQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50Pikge1xyXG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBpZiAodmFsID09PSAnTScgfHwgdmFsID09PSAnRicpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGdlbmRlcjogdmFsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJtaXRGb3JtKGU/OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pikge1xyXG4gICAgZSAmJiBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHRoaXMuaW5pdGlhbFN0YXRlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtKFxyXG4gICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4sXHJcbiAgICBzdWJtaXR0aW5nOiAoKSA9PiB2b2lkLFxyXG4gICAgZXJyb3I6ICgpID0+IHZvaWQsXHJcbiAgICBzdWNjZXNzOiAoKSA9PiB2b2lkLFxyXG4gICAgcmVzZXQ6ICgpID0+IHZvaWRcclxuICApIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHN1Ym1pdHRpbmcoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBlcnJvcigpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc2V0KCksIDMwMDApO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGR5bmFtaWNTdWJtaXRFcnJvckZvcm0oXHJcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PixcclxuICAgIHN1Ym1pdHRpbmc6ICgpID0+IHZvaWQsXHJcbiAgICBlcnJvcjogKCkgPT4gdm9pZCxcclxuICAgIHN1Y2Nlc3M6ICgpID0+IHZvaWQsXHJcbiAgICByZXNldDogKCkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc3VibWl0dGluZygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHN1Y2Nlc3MoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNldCgpLCAzMDAwKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzaWM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=