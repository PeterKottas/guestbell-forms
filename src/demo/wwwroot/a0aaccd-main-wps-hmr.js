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
        title: "Name",
        showClearButton: true
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
        minLettersToFetch: 3,
        fetchExistingTags: function fetchExistingTags(startsWith) {
          return new Promise(function (resolve) {
            return setTimeout(function () {
              return resolve([{
                id: -1,
                name: 'Text'
              }]);
            }, 1000);
          });
        },
        readOnly: this.state.multipleReadonly,
        allowNew: true,
        maxTags: 2,
        existingTags: existingTags,
        tags: this.state.tags,
        onTagsChanged: this.tagsChanged,
        showChips: true
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Tags"], {
        title: "Tags suggestions",
        label: "Choose tags",
        readOnly: this.state.multipleReadonly,
        allowNew: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DbGllbnRBcHAvcGFnZXMvYmFzaWMvQmFzaWMudHN4Il0sIm5hbWVzIjpbIkFnZVZhbGlkYXRvciIsInZhbHVlIiwiaXNSZXF1aXJlZCIsImFkZEVycm9yIiwibnVtIiwiTnVtYmVyIiwiaXNOYU4iLCJpbnN0YW5jZSIsImV4aXN0aW5nVGFncyIsImlkIiwibmFtZSIsImN1cnJlbmNpZXMxIiwibGFiZWwiLCJjdXJyZW5jaWVzMiIsImN1cnJlbmNpZXMzIiwiZm9yY2VTZWxlY3RlZCIsImdlbmRlclZhbHVlcyIsInRhZ3NFbWFpbFRleHRQcm9wcyIsInZhbGlkYXRvcnMiLCJlbWFpbFZhbGlkYXRvcnMiLCJ1cmxWYWxpZGF0b3JzIiwiY3VzdG9tQWdlVmFsaWRhdG9yIiwiY3VzdG9tTnVtYmVyVmFsaWRhdG9yIiwiTnVtYmVyVmFsaWRhdG9yIiwibWluIiwidHlwZXMiLCJCdXR0b25zU2hvd2Nhc2UiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsIkJhc2ljIiwiZm9ybSIsInNwZWNpYWxEYXlzSW5wdXRIZWFkZXIiLCJkcm9wZG93bkZ1bmN0aW9uSGVhZGVyIiwiaW5pdGlhbFN0YXRlIiwiZ2VuZGVyIiwiZW1haWwiLCJhZ2UiLCJtaW4xIiwiY2hlY2tib3gxIiwiY2hlY2tib3gyIiwidmFsaWRhdGVGb3JtU3VibWl0IiwiZm9vZCIsImRyaW5rIiwidG91Y2hPbiIsInN1Ym1pdERpc2FibGVzSW5wdXRzIiwic2ltdWxhdGVVbm1vdW50IiwicHJpY2VzMSIsInByaWNlczIiLCJwcmljZXMzIiwidGltZVNwYW4iLCJkdXJhdGlvbiIsInRpbWUxIiwidGltZTIiLCJvcGVuaW5nSG91cnMiLCJ0aW1lcyIsIm9wZW5pbmdIb3Vyc1dlZWsiLCJvcGVuaW5nSG91cnNXZWVrRGF5Iiwib3BlbmluZ0hvdXJzU3BlY2lhbCIsIndlYnNpdGUiLCJ0YWdzIiwic2VsZWN0ZWRWYWx1ZXMiLCJtdWx0aXBsZVZhbHVlcyIsIm11bHRpcGxlUmVhZG9ubHkiLCJ0ZXh0QXJlYVRleHQiLCJmb3JtUmVmIiwiZWwiLCJkcm9wZG93bkZ1bmN0aW9uSGVhZGVyUmVmIiwiZnVuY3Rpb25IZWFkZXJDbGljayIsInNob3dOYXZpZ2F0aW9uIiwic2VsZWN0ZWRWYWx1ZXNDaGFuZ2VkIiwic2V0U3RhdGUiLCJ0YWdzQ2hhbmdlZCIsIm11bHRpcGxlUmVhZG9ubHlDaGVja2VkIiwic3RhdGUiLCJvcGVuaW5nSG91cnNTcGVjaWFsQ2hhbmdlZCIsImRheXMiLCJzcGVjaWFsRGF5c0FkZENsaWNrIiwiY29uY2F0IiwiZGF0ZSIsInVuZGVmaW5lZCIsImN1cnJlbnQiLCJleHBhbmQiLCJvcGVuaW5nSG91cnNXZWVrU3RhbmRhcmREYXlDaGFuZ2VkIiwiZGF5Iiwib3BlbmluZ0hvdXJzV2Vla0NoYW5nZWQiLCJvcGVuaW5nSG91cnNDaGFuZ2VkIiwidGltZTJDaGFuZ2VkIiwidGltZSIsInRpbWUxQ2hhbmdlZCIsInRpbWVTcGFuQ2hhbmdlZCIsInByaWNlczJDaGFuZ2VkIiwicHJpY2VzIiwicHJpY2VzM0NoYW5nZWQiLCJwcmljZXMxQ2hhbmdlZCIsIm1pbjFDaGFuZ2VkIiwiZSIsInRhcmdldCIsImFnZUNoYW5nZWQiLCJ3ZWJzaXRlQ2hhbmdlZCIsImVtYWlsQ2hhbmdlZCIsInRleHRBcmVhQ2hhbmdlZCIsIm5hbWVDaGFuZ2VkIiwiY2hlY2tib3gyQ2hlY2tlZCIsImNoZWNrYm94MUNoZWNrZWQiLCJkcmlua3NDaGVja2VkIiwidW5Ub3VjaEFsbCIsInByZXZlbnREZWZhdWx0Iiwic2ltdWxhdGVVbm1vdW50Q2hlY2tlZCIsImRpc2FibGVzSW5wdXRzQ2hlY2tlZCIsInRvdWNoT25DaGVja2VkIiwiZm9ybVZhbGlkYXRpb25Ub2dnbGUiLCJ0b3VjaEFsbCIsImhhbmRsZUdlbmRlckNoYW5nZSIsImJpbmQiLCJzdWJtaXRGb3JtIiwiZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtIiwiZHluYW1pY1N1Ym1pdEVycm9yRm9ybSIsIlJlYWN0IiwidGltZTJNYXgiLCJhZGQiLCJ0aW1lMk1pbiIsInN1YnRyYWN0IiwiVGltZVNwYW5Vbml0IiwiSG91ciIsIk1pbnV0ZSIsInBsYWNlaG9sZGVyIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInQiLCJjb25zb2xlIiwid2FybiIsInZhbCIsInN1Ym1pdHRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJyZXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBb0NBO0FBb0NPLElBQU1BLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw2QkFHSUMsS0FISixFQUlJQyxVQUpKLEVBS0lDLFFBTEosRUFNYTtBQUNULFVBQUlDLEdBQUcsR0FBR0MsTUFBTSxDQUFDSixLQUFELENBQWhCOztBQUNBLFVBQUksQ0FBQ0ssS0FBSyxDQUFDRixHQUFELENBQVYsRUFBaUI7QUFDZixZQUFJQSxHQUFHLElBQUksQ0FBWCxFQUFjO0FBQ1pELGtCQUFRLENBQUMsZUFBRCxDQUFSO0FBQ0EsaUJBQU8sS0FBUDtBQUNEOztBQUNELFlBQUlDLEdBQUcsR0FBRyxHQUFWLEVBQWU7QUFDYkQsa0JBQVEsQ0FBQyxvQ0FBRCxDQUFSO0FBQ0EsaUJBQU8sS0FBUDtBQUNEOztBQUNELGVBQU8sSUFBUDtBQUNELE9BVkQsTUFVTztBQUNMQSxnQkFBUSxDQUFDLGFBQUQsQ0FBUjtBQUNEOztBQUNELGFBQU8sS0FBUDtBQUNEO0FBdEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFhSCxZLENBQ0dPLFEsR0FBVyxJQUFJUCxZQUFKLEU7QUF3QjNCLElBQU1RLFlBQW1CLEdBQUcsQ0FDMUI7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FEMEIsRUFLMUI7QUFDRUQsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FMMEIsRUFTMUI7QUFDRUQsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FUMEIsRUFhMUI7QUFDRUQsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FiMEIsRUFpQjFCO0FBQ0VELElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBakIwQixFQXFCMUI7QUFDRUQsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FyQjBCLENBQTVCO0FBMkJBLElBQU1DLFdBQVcsR0FBRyxDQUNsQjtBQUFFQyxPQUFLLEVBQUUsS0FBVDtBQUFnQlgsT0FBSyxFQUFFO0FBQXZCLENBRGtCLEVBRWxCO0FBQUVXLE9BQUssRUFBRSxLQUFUO0FBQWdCWCxPQUFLLEVBQUU7QUFBdkIsQ0FGa0IsQ0FBcEI7QUFLQSxJQUFNWSxXQUFXLEdBQUcsQ0FDbEI7QUFBRUQsT0FBSyxFQUFFLEtBQVQ7QUFBZ0JYLE9BQUssRUFBRTtBQUF2QixDQURrQixFQUVsQjtBQUFFVyxPQUFLLEVBQUUsS0FBVDtBQUFnQlgsT0FBSyxFQUFFO0FBQXZCLENBRmtCLEVBR2xCO0FBQUVXLE9BQUssRUFBRSxLQUFUO0FBQWdCWCxPQUFLLEVBQUU7QUFBdkIsQ0FIa0IsQ0FBcEI7QUFNQSxJQUFNYSxXQUFXLEdBQUcsQ0FDbEI7QUFBRUYsT0FBSyxFQUFFLEtBQVQ7QUFBZ0JYLE9BQUssRUFBRSxLQUF2QjtBQUE4QmMsZUFBYSxFQUFFO0FBQTdDLENBRGtCLEVBRWxCO0FBQUVILE9BQUssRUFBRSxLQUFUO0FBQWdCWCxPQUFLLEVBQUU7QUFBdkIsQ0FGa0IsRUFHbEI7QUFBRVcsT0FBSyxFQUFFLEtBQVQ7QUFBZ0JYLE9BQUssRUFBRTtBQUF2QixDQUhrQixDQUFwQjtBQU1BLElBQU1lLFlBQVksR0FBRyxDQUNuQjtBQUFFZixPQUFLLEVBQUUsR0FBVDtBQUFjVyxPQUFLLEVBQUU7QUFBckIsQ0FEbUIsRUFFbkI7QUFBRVgsT0FBSyxFQUFFLEdBQVQ7QUFBY1csT0FBSyxFQUFFO0FBQXJCLENBRm1CLENBQXJCO0FBS0EsSUFBTUssa0JBQTZCLEdBQUc7QUFDcENDLFlBQVUsRUFBRSxDQUFDLE9BQUQ7QUFEd0IsQ0FBdEM7QUFJQSxJQUFNQyxlQUFpQyxHQUFHLENBQUMsT0FBRCxDQUExQztBQUVBLElBQU1DLGFBQStCLEdBQUcsQ0FBQyxLQUFELENBQXhDO0FBRUEsSUFBTUMsa0JBQW9DLEdBQUcsQ0FBQ3JCLFlBQVksQ0FBQ08sUUFBZCxDQUE3QztBQUVBLElBQU1lLHFCQUF1QyxHQUFHLENBQzlDLElBQUlDLDBEQUFKLENBQW9CO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQXBCLENBRDhDLENBQWhEO0FBSUEsSUFBTUMsS0FBb0IsR0FBRyxDQUMzQixTQUQyQixFQUUzQixTQUYyQixFQUczQixPQUgyQixFQUkzQixNQUoyQixFQUszQixTQUwyQixFQU0zQixNQU4yQixFQU8zQixPQVAyQixFQVEzQixNQVIyQixDQUE3Qjs7QUFVQSxJQUFNQyxlQUF1QyxHQUFHLFNBQTFDQSxlQUEwQyxDQUFBQyxLQUFLLEVBQUk7QUFDdkQsU0FDRTtBQUNFLGFBQVMsRUFBQyxNQURaO0FBRUUsU0FBSyxFQUFFO0FBQ0xDLHFCQUFlLEVBQUUsb0JBRFo7QUFFTEMsYUFBTyxFQUFFLE1BRko7QUFHTEMsY0FBUSxFQUFFO0FBSEw7QUFGVCxLQVFHTCxLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUNULG9EQUFDLDhDQUFEO0FBQWdCLFNBQUcsRUFBRUE7QUFBckIsT0FDRSxvREFBQyxpREFBRDtBQUFRLFVBQUksRUFBRUQ7QUFBZCxPQUF3QkwsS0FBeEIsR0FDR0ssSUFESCxDQURGLEVBSUUsb0RBQUMsaURBQUQ7QUFBUSxVQUFJLEVBQUVBLElBQWQ7QUFBb0IsY0FBUSxFQUFFO0FBQTlCLE9BQXdDTCxLQUF4QyxjQUpGLENBRFM7QUFBQSxHQUFWLENBUkgsQ0FERjtBQXFCRCxDQXRCRDs7QUF3QkFELGVBQWUsQ0FBQ1EsWUFBaEIsR0FBK0I7QUFDN0JDLFdBQVMsRUFBRTtBQURrQixDQUEvQjtBQUlPLElBQU1DLEtBQWI7QUFBQTtBQUFBO0FBQUE7O0FBaURFLGlCQUFZVCxLQUFaLEVBQStCO0FBQUE7O0FBQUE7O0FBQzdCLCtFQUFNQSxLQUFOO0FBRDZCLFVBaER2QlUsSUFnRHVCO0FBQUEsVUE5Q3ZCQyxzQkE4Q3VCO0FBQUEsVUE1Q3ZCQyxzQkE0Q3VCO0FBQUEsVUExQ3ZCQyxZQTBDdUIsR0ExQ0k7QUFDakNDLFlBQU0sRUFBRSxFQUR5QjtBQUVqQy9CLFVBQUksRUFBRSxNQUYyQjtBQUdqQ2dDLFdBQUssRUFBRSxFQUgwQjtBQUlqQ0MsU0FBRyxFQUFFLEVBSjRCO0FBS2pDQyxVQUFJLEVBQUUsRUFMMkI7QUFNakNDLGVBQVMsRUFBRSxJQU5zQjtBQU9qQ0MsZUFBUyxFQUFFLEtBUHNCO0FBUWpDQyx3QkFBa0IsRUFBRSxJQVJhO0FBU2pDQyxVQUFJLEVBQUUsV0FUMkI7QUFVakNDLFdBQUssRUFBRSxXQVYwQjtBQVdqQ0MsYUFBTyxFQUFFLE9BWHdCO0FBWWpDQywwQkFBb0IsRUFBRSxJQVpXO0FBYWpDQyxxQkFBZSxFQUFFLEtBYmdCO0FBY2pDQyxhQUFPLEVBQUUsRUFkd0I7QUFlakNDLGFBQU8sRUFBRSxFQWZ3QjtBQWdCakNDLGFBQU8sRUFBRSxFQWhCd0I7QUFpQmpDQyxjQUFRLEVBQUVDLHVEQUFRLENBQUMsQ0FBRCxDQWpCZTtBQWtCakNDLFdBQUssRUFBRUQsdURBQVEsQ0FBQyxDQUFELENBbEJrQjtBQW1CakNFLFdBQUssRUFBRUYsdURBQVEsQ0FBQyxDQUFELENBbkJrQjtBQW9CakNHLGtCQUFZLEVBQUU7QUFDWkMsYUFBSyxFQUFFO0FBREssT0FwQm1CO0FBdUJqQ0Msc0JBQWdCLEVBQUUsRUF2QmU7QUF3QmpDQyx5QkFBbUIsRUFBRTtBQUNuQkYsYUFBSyxFQUFFO0FBRFksT0F4Qlk7QUEyQmpDRyx5QkFBbUIsRUFBRSxFQTNCWTtBQTRCakNDLGFBQU8sRUFBRSxFQTVCd0I7QUE2QmpDQyxVQUFJLEVBQUUsRUE3QjJCO0FBOEJqQ0Msb0JBQWMsRUFBRSxFQTlCaUI7QUErQmpDQyxvQkFBYyxFQUFFLENBQ2Q7QUFBRW5FLGFBQUssRUFBRTtBQUFULE9BRGMsRUFFZDtBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUZjLEVBR2Q7QUFBRUEsYUFBSyxFQUFFO0FBQVQsT0FIYyxFQUlkO0FBQUVBLGFBQUssRUFBRTtBQUFULE9BSmMsRUFLZDtBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUxjLENBL0JpQjtBQXNDakNvRSxzQkFBZ0IsRUFBRSxLQXRDZTtBQXVDakNDLGtCQUFZLEVBQUU7QUF2Q21CLEtBMENKOztBQUFBLFVBNG1CdkJDLE9BNW1CdUIsR0E0bUJiLFVBQUNDLEVBQUQ7QUFBQSxhQUFlLE1BQUtuQyxJQUFMLEdBQVltQyxFQUEzQjtBQUFBLEtBNW1CYTs7QUFBQSxVQThtQnZCQyx5QkE5bUJ1QixHQThtQkssVUFBQ0QsRUFBRDtBQUFBLGFBQ2pDLE1BQUtqQyxzQkFBTCxHQUE4QmlDLEVBREc7QUFBQSxLQTltQkw7O0FBQUEsVUFpbkJ2QkUsbUJBam5CdUIsR0FpbkJEO0FBQUEsYUFDNUIsTUFBS25DLHNCQUFMLENBQTRCb0MsY0FBNUIsRUFENEI7QUFBQSxLQWpuQkM7O0FBQUEsVUFvbkJ2QkMscUJBcG5CdUIsR0FvbkJDLFVBQUNULGNBQUQ7QUFBQSxhQUM5QixNQUFLVSxRQUFMLENBQWM7QUFBRVYsc0JBQWMsRUFBZEE7QUFBRixPQUFkLENBRDhCO0FBQUEsS0FwbkJEOztBQUFBLFVBdW5CdkJXLFdBdm5CdUIsR0F1bkJULFVBQUNaLElBQUQ7QUFBQSxhQUFpQixNQUFLVyxRQUFMLENBQWM7QUFBRVgsWUFBSSxFQUFKQTtBQUFGLE9BQWQsQ0FBakI7QUFBQSxLQXZuQlM7O0FBQUEsVUF5bkJ2QmEsdUJBem5CdUIsR0F5bkJHO0FBQUEsYUFDaEMsTUFBS0YsUUFBTCxDQUFjO0FBQUVSLHdCQUFnQixFQUFFLENBQUMsTUFBS1csS0FBTCxDQUFXWDtBQUFoQyxPQUFkLENBRGdDO0FBQUEsS0F6bkJIOztBQUFBLFVBNG5CdkJZLDBCQTVuQnVCLEdBNG5CTSxVQUFDQyxJQUFEO0FBQUEsYUFDbkMsTUFBS0wsUUFBTCxDQUFjO0FBQUViLDJCQUFtQixFQUFFa0I7QUFBdkIsT0FBZCxDQURtQztBQUFBLEtBNW5CTjs7QUFBQSxVQStuQnZCQyxtQkEvbkJ1QixHQStuQkQsWUFBTTtBQUNsQyxZQUFLTixRQUFMLENBQ0U7QUFDRWIsMkJBQW1CLEVBQUUsTUFBS2dCLEtBQUwsQ0FBV2hCLG1CQUFYLENBQStCb0IsTUFBL0IsQ0FBc0MsQ0FDekQ7QUFBRUMsY0FBSSxFQUFFQyxTQUFSO0FBQW1CekIsZUFBSyxFQUFFO0FBQTFCLFNBRHlELENBQXRDO0FBRHZCLE9BREYsRUFNRTtBQUFBLGVBQU0sTUFBS3ZCLHNCQUFMLENBQTRCaUQsT0FBNUIsQ0FBb0NDLE1BQXBDLEVBQU47QUFBQSxPQU5GO0FBUUQsS0F4b0I4Qjs7QUFBQSxVQTBvQnZCQyxrQ0Exb0J1QixHQTBvQmMsVUFBQ0MsR0FBRDtBQUFBLGFBQzNDLE1BQUtiLFFBQUwsQ0FBYztBQUFFZCwyQkFBbUIsRUFBRTJCO0FBQXZCLE9BQWQsQ0FEMkM7QUFBQSxLQTFvQmQ7O0FBQUEsVUE2b0J2QkMsdUJBN29CdUIsR0E2b0JHLFVBQUNULElBQUQ7QUFBQSxhQUNoQyxNQUFLTCxRQUFMLENBQWM7QUFBRWYsd0JBQWdCLEVBQUVvQjtBQUFwQixPQUFkLENBRGdDO0FBQUEsS0E3b0JIOztBQUFBLFVBZ3BCdkJVLG1CQWhwQnVCLEdBZ3BCRCxVQUFDaEMsWUFBRDtBQUFBLGFBQzVCLE1BQUtpQixRQUFMLENBQWM7QUFBRWpCLG9CQUFZLEVBQUVBO0FBQWhCLE9BQWQsQ0FENEI7QUFBQSxLQWhwQkM7O0FBQUEsVUFtcEJ2QmlDLFlBbnBCdUIsR0FtcEJSLFVBQUNDLElBQUQ7QUFBQSxhQUFvQixNQUFLakIsUUFBTCxDQUFjO0FBQUVsQixhQUFLLEVBQUVtQztBQUFULE9BQWQsQ0FBcEI7QUFBQSxLQW5wQlE7O0FBQUEsVUFxcEJ2QkMsWUFycEJ1QixHQXFwQlIsVUFBQ0QsSUFBRDtBQUFBLGFBQW9CLE1BQUtqQixRQUFMLENBQWM7QUFBRW5CLGFBQUssRUFBRW9DO0FBQVQsT0FBZCxDQUFwQjtBQUFBLEtBcnBCUTs7QUFBQSxVQXVwQnZCRSxlQXZwQnVCLEdBdXBCTCxVQUFDeEMsUUFBRDtBQUFBLGFBQXdCLE1BQUtxQixRQUFMLENBQWM7QUFBRXJCLGdCQUFRLEVBQVJBO0FBQUYsT0FBZCxDQUF4QjtBQUFBLEtBdnBCSzs7QUFBQSxVQXlwQnZCeUMsY0F6cEJ1QixHQXlwQk4sVUFBQ0MsTUFBRDtBQUFBLGFBQ3ZCLE1BQUtyQixRQUFMLENBQWM7QUFBRXZCLGVBQU8sRUFBRTRDO0FBQVgsT0FBZCxDQUR1QjtBQUFBLEtBenBCTTs7QUFBQSxVQTRwQnZCQyxjQTVwQnVCLEdBNHBCTixVQUFDRCxNQUFEO0FBQUEsYUFDdkIsTUFBS3JCLFFBQUwsQ0FBYztBQUFFdEIsZUFBTyxFQUFFMkM7QUFBWCxPQUFkLENBRHVCO0FBQUEsS0E1cEJNOztBQUFBLFVBK3BCdkJFLGNBL3BCdUIsR0ErcEJOLFVBQUNGLE1BQUQ7QUFBQSxhQUN2QixNQUFLckIsUUFBTCxDQUFjO0FBQUV4QixlQUFPLEVBQUU2QztBQUFYLE9BQWQsQ0FEdUI7QUFBQSxLQS9wQk07O0FBQUEsVUFrcUJ2QkcsV0FscUJ1QixHQWtxQlQsVUFBQ0MsQ0FBRDtBQUFBLGFBQ3BCLE1BQUt6QixRQUFMLENBQWM7QUFBRWpDLFlBQUksRUFBRTBELENBQUMsQ0FBQ0MsTUFBRixDQUFTdEc7QUFBakIsT0FBZCxDQURvQjtBQUFBLEtBbHFCUzs7QUFBQSxVQXFxQnZCdUcsVUFycUJ1QixHQXFxQlYsVUFBQ0YsQ0FBRDtBQUFBLGFBQ25CLE1BQUt6QixRQUFMLENBQWM7QUFBRWxDLFdBQUcsRUFBRTJELENBQUMsQ0FBQ0MsTUFBRixDQUFTdEc7QUFBaEIsT0FBZCxDQURtQjtBQUFBLEtBcnFCVTs7QUFBQSxVQXdxQnZCd0csY0F4cUJ1QixHQXdxQk4sVUFBQ0gsQ0FBRDtBQUFBLGFBQ3ZCLE1BQUt6QixRQUFMLENBQWM7QUFBRVosZUFBTyxFQUFFcUMsQ0FBQyxDQUFDQyxNQUFGLENBQVN0RztBQUFwQixPQUFkLENBRHVCO0FBQUEsS0F4cUJNOztBQUFBLFVBMnFCdkJ5RyxZQTNxQnVCLEdBMnFCUixVQUFDSixDQUFEO0FBQUEsYUFDckIsTUFBS3pCLFFBQUwsQ0FBYztBQUFFbkMsYUFBSyxFQUFFNEQsQ0FBQyxDQUFDQyxNQUFGLENBQVN0RztBQUFsQixPQUFkLENBRHFCO0FBQUEsS0EzcUJROztBQUFBLFVBOHFCdkIwRyxlQTlxQnVCLEdBOHFCTCxVQUFDTCxDQUFEO0FBQUEsYUFDeEIsTUFBS3pCLFFBQUwsQ0FBYztBQUFFUCxvQkFBWSxFQUFFZ0MsQ0FBQyxDQUFDQyxNQUFGLENBQVN0RztBQUF6QixPQUFkLENBRHdCO0FBQUEsS0E5cUJLOztBQUFBLFVBaXJCdkIyRyxXQWpyQnVCLEdBaXJCVCxVQUFDTixDQUFEO0FBQUEsYUFDcEIsTUFBS3pCLFFBQUwsQ0FBYztBQUFFbkUsWUFBSSxFQUFFNEYsQ0FBQyxDQUFDQyxNQUFGLENBQVN0RztBQUFqQixPQUFkLENBRG9CO0FBQUEsS0FqckJTOztBQUFBLFVBb3JCdkI0RyxnQkFwckJ1QixHQW9yQko7QUFBQSxhQUN6QixNQUFLaEMsUUFBTCxDQUFjO0FBQUUvQixpQkFBUyxFQUFFLENBQUMsTUFBS2tDLEtBQUwsQ0FBV2xDO0FBQXpCLE9BQWQsQ0FEeUI7QUFBQSxLQXByQkk7O0FBQUEsVUF1ckJ2QmdFLGdCQXZyQnVCLEdBdXJCSjtBQUFBLGFBQ3pCLE1BQUtqQyxRQUFMLENBQWM7QUFBRWhDLGlCQUFTLEVBQUUsQ0FBQyxNQUFLbUMsS0FBTCxDQUFXbkM7QUFBekIsT0FBZCxDQUR5QjtBQUFBLEtBdnJCSTs7QUFBQSxVQTByQnZCa0UsYUExckJ1QixHQTByQlAsVUFBQzlHLEtBQUQ7QUFBQSxhQUFtQixNQUFLNEUsUUFBTCxDQUFjO0FBQUU1QixhQUFLLEVBQUVoRDtBQUFULE9BQWQsQ0FBbkI7QUFBQSxLQTFyQk87O0FBQUEsVUE0ckJ2QitHLFVBNXJCdUIsR0E0ckJWLFVBQUNWLENBQUQsRUFBNEM7QUFDL0RBLE9BQUMsQ0FBQ1csY0FBRjs7QUFDQSxZQUFLNUUsSUFBTCxDQUFVMkUsVUFBVjtBQUNELEtBL3JCOEI7O0FBQUEsVUFpc0J2QkUsc0JBanNCdUIsR0Fpc0JFO0FBQUEsYUFDL0IsTUFBS3JDLFFBQUwsQ0FBYztBQUFFekIsdUJBQWUsRUFBRSxDQUFDLE1BQUs0QixLQUFMLENBQVc1QjtBQUEvQixPQUFkLENBRCtCO0FBQUEsS0Fqc0JGOztBQUFBLFVBb3NCdkIrRCxxQkFwc0J1QixHQW9zQkM7QUFBQSxhQUM5QixNQUFLdEMsUUFBTCxDQUFjO0FBQUUxQiw0QkFBb0IsRUFBRSxDQUFDLE1BQUs2QixLQUFMLENBQVc3QjtBQUFwQyxPQUFkLENBRDhCO0FBQUEsS0Fwc0JEOztBQUFBLFVBdXNCdkJpRSxjQXZzQnVCLEdBdXNCTixVQUFDbkgsS0FBRDtBQUFBLGFBQ3ZCLE1BQUs0RSxRQUFMLENBQWM7QUFBRTNCLGVBQU8sRUFBRWpEO0FBQVgsT0FBZCxDQUR1QjtBQUFBLEtBdnNCTTs7QUFBQSxVQTBzQnZCb0gsb0JBMXNCdUIsR0Ewc0JBO0FBQUEsYUFDN0IsTUFBS3hDLFFBQUwsQ0FBYztBQUFFOUIsMEJBQWtCLEVBQUUsQ0FBQyxNQUFLaUMsS0FBTCxDQUFXakM7QUFBbEMsT0FBZCxDQUQ2QjtBQUFBLEtBMXNCQTs7QUFBQSxVQTZzQnZCdUUsUUE3c0J1QixHQTZzQlosVUFBQ2hCLENBQUQsRUFBNEM7QUFDN0RBLE9BQUMsQ0FBQ1csY0FBRjs7QUFDQSxZQUFLNUUsSUFBTCxDQUFVaUYsUUFBVjtBQUNELEtBaHRCOEI7O0FBRTdCLFVBQUt0QyxLQUFMLEdBQWEsTUFBS3hDLFlBQWxCO0FBQ0EsVUFBSytFLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QiwrQkFBMUI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLCtCQUFsQjtBQUNBLFVBQUtFLHdCQUFMLEdBQWdDLE1BQUtBLHdCQUFMLENBQThCRixJQUE5QiwrQkFBaEM7QUFDQSxVQUFLRyxzQkFBTCxHQUE4QixNQUFLQSxzQkFBTCxDQUE0QkgsSUFBNUIsK0JBQTlCO0FBQ0EsVUFBS2xGLHNCQUFMLEdBQThCc0YsK0NBQUEsRUFBOUI7QUFQNkI7QUFROUI7O0FBekRIO0FBQUE7QUFBQSw2QkEyRGtCO0FBQUE7O0FBQ2QsVUFBSUMsUUFBUSxHQUFHcEUsdURBQVEsR0FDcEJxRSxHQURZLENBQ1IsQ0FEUSxFQUNMLE1BREssRUFFWkEsR0FGWSxDQUVSLENBRlEsRUFFTCxTQUZLLENBQWY7QUFHQSxVQUFJQyxRQUFRLEdBQUd0RSx1REFBUSxHQUNwQnVFLFFBRFksQ0FDSCxDQURHLEVBQ0EsTUFEQSxFQUVaQSxRQUZZLENBRUgsQ0FGRyxFQUVBLFNBRkEsQ0FBZjtBQUlBLGFBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLG9EQUFDLCtDQUFEO0FBQU0sa0JBQVUsRUFBRSxJQUFsQjtBQUF3QixpQkFBUyxFQUFDO0FBQWxDLFNBQ0Usb0RBQUMsbURBQUQ7QUFDRSxhQUFLLEVBQUMsZ0NBRFI7QUFFRSxpQkFBUyxFQUFFLEtBQUtYLG9CQUZsQjtBQUdFLGVBQU8sRUFBRSxLQUFLckMsS0FBTCxDQUFXakMsa0JBSHRCO0FBSUUsYUFBSyxFQUFDO0FBSlIsUUFERixFQU9FLG9EQUFDLHlEQUFEO0FBQWdCLGFBQUssRUFBQztBQUF0QixTQUNFLG9EQUFDLGdEQUFEO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxhQUFLLEVBQUMsTUFGUjtBQUdFLGFBQUssRUFBQyxNQUhSO0FBSUUsY0FBTSxFQUFFLEtBQUtpQyxLQUFMLENBQVc5QixPQUpyQjtBQUtFLGlCQUFTLEVBQUUsS0FBS2tFO0FBTGxCLFFBREYsRUFRRSxvREFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxPQURQO0FBRUUsYUFBSyxFQUFDLE9BRlI7QUFHRSxhQUFLLEVBQUMsT0FIUjtBQUlFLGNBQU0sRUFBRSxLQUFLcEMsS0FBTCxDQUFXOUIsT0FKckI7QUFLRSxpQkFBUyxFQUFFLEtBQUtrRTtBQUxsQixRQVJGLENBUEYsRUF1QkUsb0RBQUMsbURBQUQ7QUFDRSxhQUFLLEVBQUMsaUJBRFI7QUFFRSxpQkFBUyxFQUFFLEtBQUtELHFCQUZsQjtBQUdFLGVBQU8sRUFBRSxLQUFLbkMsS0FBTCxDQUFXN0Isb0JBSHRCO0FBSUUsYUFBSyxFQUFDO0FBSlIsUUF2QkYsRUE2QkUsb0RBQUMsbURBQUQ7QUFDRSxhQUFLLEVBQUMsU0FEUjtBQUVFLGlCQUFTLEVBQUUsS0FBSytELHNCQUZsQjtBQUdFLGVBQU8sRUFBRSxLQUFLbEMsS0FBTCxDQUFXNUIsZUFIdEI7QUFJRSxhQUFLLEVBQUM7QUFKUixRQTdCRixDQURGLENBREYsQ0FERixDQURGLENBREYsRUE2Q0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBRTtBQUFoQixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0csQ0FBQyxLQUFLNEIsS0FBTCxDQUFXNUIsZUFBWixJQUNDLG9EQUFDLCtDQUFEO0FBQ0Usa0JBQVUsRUFBRSxJQURkO0FBRUUsV0FBRyxFQUFFLEtBQUttQixPQUZaO0FBR0UsZ0JBQVEsRUFBRSxLQUFLa0Q7QUFDZjs7Ozs7Ozs7Ozs7O0FBSkYsU0FnQkUsb0RBQUMsc0RBQUQ7QUFDRSxZQUFJLEVBQUU7QUFBRyxtQkFBUyxFQUFDO0FBQWIsa0JBRFI7QUFFRSxhQUFLLEVBQUUsY0FGVDtBQUdFLGdCQUFRLEVBQ04scURBSko7QUFNRSxxQkFBYSxFQUFFLElBTmpCO0FBT0UsWUFBSSxFQUFDLE1BUFA7QUFRRSxtQkFBVyxFQUFFLElBUmY7QUFTRSx3QkFBZ0IsRUFBRSxLQVRwQjtBQVVFLGtCQUFVLEVBQ1Isb0RBQUMsaURBQUQ7QUFDRSxjQUFJLEVBQUUsU0FEUjtBQUVFLGlCQUFPLEVBQUUsS0FBS0EsVUFGaEI7QUFHRSxzQkFBWSxFQUFFLEtBQUt6QyxLQUFMLENBQVdqQztBQUgzQixvQkFYSjtBQW1CRSxvQkFBWSxFQUFFLENBQ1osb0RBQUMsaURBQUQ7QUFBUSxhQUFHLEVBQUUsQ0FBYjtBQUFnQixrQkFBUSxFQUFFLElBQTFCO0FBQWdDLGlCQUFPLEVBQUUsS0FBS3VFO0FBQTlDLHVCQURZLEVBSVosb0RBQUMsaURBQUQ7QUFDRSxhQUFHLEVBQUUsQ0FEUDtBQUVFLGtCQUFRLEVBQUUsSUFGWjtBQUdFLGlCQUFPLEVBQUUsS0FBS047QUFIaEIsMEJBSlksQ0FuQmhCO0FBK0JFLHlDQUFpQyxFQUFFO0FBL0JyQyxTQWlDRSxvREFBQyx5REFBRDtBQUFnQixhQUFLLEVBQUM7QUFBdEIsU0FDRSxvREFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxPQURQO0FBRUUsYUFBSyxFQUFDLE1BRlI7QUFHRSxhQUFLLEVBQUMsTUFIUjtBQUlFLGNBQU0sRUFBRSxLQUFLaEMsS0FBTCxDQUFXL0IsS0FKckI7QUFLRSxpQkFBUyxFQUFFLEtBQUs4RDtBQUxsQixRQURGLEVBUUUsb0RBQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQUMsT0FEUDtBQUVFLGFBQUssRUFBQyxTQUZSO0FBR0UsYUFBSyxFQUFDLFNBSFI7QUFJRSxjQUFNLEVBQUUsS0FBSy9CLEtBQUwsQ0FBVy9CLEtBSnJCO0FBS0UsaUJBQVMsRUFBRSxLQUFLOEQ7QUFMbEIsUUFSRixFQWVFLG9EQUFDLGdEQUFEO0FBQ0UsWUFBSSxFQUFDLE9BRFA7QUFFRSxhQUFLLEVBQUMsT0FGUjtBQUdFLGFBQUssRUFBQyxPQUhSO0FBSUUsY0FBTSxFQUFFLEtBQUsvQixLQUFMLENBQVcvQixLQUpyQjtBQUtFLGlCQUFTLEVBQUUsS0FBSzhEO0FBTGxCLFFBZkYsQ0FqQ0YsRUF3REUsb0RBQUMseURBQUQ7QUFDRSxhQUFLLEVBQUMscUJBRFI7QUFFRSxrQkFBVSxFQUFFO0FBRmQsU0FJRSxvREFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsYUFBSyxFQUFDLE1BRlI7QUFHRSxhQUFLLEVBQUMsTUFIUjtBQUlFLGNBQU0sRUFBRSxLQUFLL0IsS0FBTCxDQUFXL0IsS0FKckI7QUFLRSxpQkFBUyxFQUFFLEtBQUs4RDtBQUxsQixRQUpGLEVBV0Usb0RBQUMsZ0RBQUQ7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGFBQUssRUFBQyxTQUZSO0FBR0UsYUFBSyxFQUFDLFNBSFI7QUFJRSxjQUFNLEVBQUUsS0FBSy9CLEtBQUwsQ0FBVy9CLEtBSnJCO0FBS0UsaUJBQVMsRUFBRSxLQUFLOEQ7QUFMbEIsUUFYRixFQWtCRSxvREFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsYUFBSyxFQUFDLE9BRlI7QUFHRSxhQUFLLEVBQUMsT0FIUjtBQUlFLGNBQU0sRUFBRSxLQUFLL0IsS0FBTCxDQUFXL0IsS0FKckI7QUFLRSxpQkFBUyxFQUFFLEtBQUs4RDtBQUxsQixRQWxCRixDQXhERixFQWtGRSxvREFBQyxtREFBRDtBQUNFLGdCQUFRLEVBQUUsSUFEWjtBQUVFLGFBQUssRUFBQyxPQUZSO0FBR0UsaUJBQVMsRUFBRSxLQUFLRCxnQkFIbEI7QUFJRSxlQUFPLEVBQUUsS0FBSzlCLEtBQUwsQ0FBV25DLFNBSnRCO0FBS0UsYUFBSyxFQUFDLFlBTFI7QUFNRSxlQUFPLEVBQUM7QUFOVixRQWxGRixFQTBGRSxvREFBQyxtREFBRDtBQUNFLGFBQUssRUFBQyxZQURSO0FBRUUsaUJBQVMsRUFBRSxLQUFLZ0UsZ0JBRmxCO0FBR0UsZUFBTyxFQUFFLEtBQUs3QixLQUFMLENBQVdsQyxTQUh0QjtBQUlFLGFBQUssRUFBQztBQUpSLFFBMUZGLEVBZ0dFLG9EQUFDLCtDQUFEO0FBQ0UsZUFBTyxFQUFFLEtBQUtrQyxLQUFMLENBQVc5QixPQUR0QjtBQUVFLGdCQUFRLEVBQUUsSUFGWjtBQUdFLGFBQUssRUFBQyxXQUhSO0FBSUUsZ0JBQVEsRUFBRSxLQUFLMEQsV0FKakI7QUFLRSxhQUFLLEVBQUUsS0FBSzVCLEtBQUwsQ0FBV3RFLElBTHBCO0FBTUUsYUFBSyxFQUFDLE1BTlI7QUFPRSx1QkFBZSxFQUFFO0FBUG5CLFFBaEdGLEVBeUdFLG9EQUFDLGlEQUFEO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU0sTUFBSSxDQUFDbUUsUUFBTCxDQUFjO0FBQUVuRSxnQkFBSSxFQUFFO0FBQVIsV0FBZCxDQUFOO0FBQUE7QUFBakIsZ0JBekdGLEVBNEdFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0Usb0RBQUMsK0NBQUQ7QUFDRSxlQUFPLEVBQUUsS0FBS3NFLEtBQUwsQ0FBVzlCLE9BRHRCO0FBRUUsZ0JBQVEsRUFBRSxJQUZaO0FBR0UsYUFBSyxFQUFDLHNCQUhSO0FBSUUsZ0JBQVEsRUFBRSxLQUFLMEQsV0FKakI7QUFLRSxhQUFLLEVBQUUsS0FBSzVCLEtBQUwsQ0FBV3RFLElBTHBCO0FBTUUsZUFBTyxFQUNMO0FBQUcsbUJBQVMsRUFBQztBQUFiLHNEQUN5QyxzRUFEekMsRUFDcUQsR0FEckQ7QUFQSixRQURGLENBNUdGLEVBMkhFLG9EQUFDLCtDQUFEO0FBQ0UsZUFBTyxFQUFFLEtBQUtzRSxLQUFMLENBQVc5QixPQUR0QjtBQUVFLGFBQUssRUFBQyxXQUZSO0FBR0UsZ0JBQVEsRUFBRSxLQUFLMEQsV0FIakI7QUFJRSxhQUFLLEVBQUUsS0FBSzVCLEtBQUwsQ0FBV3RFLElBSnBCO0FBS0UsYUFBSyxFQUFDLGVBTFI7QUFNRSxnQkFBUSxFQUFFO0FBTlosUUEzSEYsRUFtSUUsb0RBQUMsaURBQUQ7QUFDRSxlQUFPLEVBQUUsS0FBS3NFLEtBQUwsQ0FBVzlCLE9BRHRCO0FBRUUsYUFBSyxFQUFFLGFBRlQ7QUFHRSxjQUFNLEVBQUVsQyxZQUhWO0FBSUUsZ0JBQVEsRUFBRSxLQUFLdUcsa0JBSmpCO0FBS0UsYUFBSyxFQUFFLEtBQUt2QyxLQUFMLENBQVd2QyxNQUxwQjtBQU1FLGFBQUssRUFBQztBQU5SLFFBbklGLEVBMklFLG9EQUFDLG1EQUFEO0FBQ0UsZUFBTyxFQUFFLEtBQUt1QyxLQUFMLENBQVc5QixPQUR0QjtBQUVFLGdCQUFRLEVBQUUsSUFGWjtBQUdFLGFBQUssRUFBQyxVQUhSO0FBSUUsZ0JBQVEsRUFBRSxLQUFLeUQsZUFKakI7QUFLRSxhQUFLLEVBQUUsS0FBSzNCLEtBQUwsQ0FBV1YsWUFMcEI7QUFNRSxhQUFLLEVBQUM7QUFOUixRQTNJRixFQW1KRSxvREFBQyxtREFBRDtBQUNFLGVBQU8sRUFBRSxLQUFLVSxLQUFMLENBQVc5QixPQUR0QjtBQUVFLGFBQUssRUFBQyxVQUZSO0FBR0UsZ0JBQVEsRUFBRSxLQUFLeUQsZUFIakI7QUFJRSxhQUFLLEVBQUUsS0FBSzNCLEtBQUwsQ0FBV1YsWUFKcEI7QUFLRSxhQUFLLEVBQUMsVUFMUjtBQU1FLGdCQUFRLEVBQUU7QUFOWixRQW5KRixFQTJKRSxvREFBQyxzREFBRDtBQUNFLGFBQUssRUFBRSxzQkFEVDtBQUVFLG1CQUFXLEVBQUUsSUFGZjtBQUdFLHlDQUFpQyxFQUFFLElBSHJDO0FBSUUsZ0JBQVEsRUFDTixtREFMSjtBQU9FLGVBQU8sRUFBQztBQVBWLFNBU0Usb0RBQUMsK0NBQUQ7QUFDRSxlQUFPLEVBQUUsS0FBS1UsS0FBTCxDQUFXOUIsT0FEdEI7QUFFRSxrQkFBVSxFQUFFL0IsZUFGZDtBQUdFLGdCQUFRLEVBQUUsS0FIWjtBQUlFLGFBQUssRUFBQyxPQUpSO0FBS0UsYUFBSyxFQUFFLEtBQUs2RCxLQUFMLENBQVd0QyxLQUxwQjtBQU1FLGdCQUFRLEVBQUUsS0FBS2dFLFlBTmpCO0FBT0UsYUFBSyxFQUFDO0FBUFIsUUFURixFQWtCRSxvREFBQywrQ0FBRDtBQUNFLGVBQU8sRUFBRSxLQUFLMUIsS0FBTCxDQUFXOUIsT0FEdEI7QUFFRSxnQkFBUSxFQUFFLElBRlo7QUFHRSxhQUFLLEVBQUUscUNBSFQ7QUFJRSxhQUFLLEVBQUM7QUFKUixRQWxCRixFQXdCRSxvREFBQywrQ0FBRDtBQUNFLGVBQU8sRUFBRSxLQUFLOEIsS0FBTCxDQUFXOUIsT0FEdEI7QUFFRSxrQkFBVSxFQUFFOUIsYUFGZDtBQUdFLGdCQUFRLEVBQUUsS0FIWjtBQUlFLGFBQUssRUFBQyxTQUpSO0FBS0UsYUFBSyxFQUFFLEtBQUs0RCxLQUFMLENBQVdmLE9BTHBCO0FBTUUsZ0JBQVEsRUFBRSxLQUFLd0MsY0FOakI7QUFPRSxhQUFLLEVBQUM7QUFQUixRQXhCRixFQWlDRSxvREFBQywrQ0FBRDtBQUNFLGVBQU8sRUFBRSxLQUFLekIsS0FBTCxDQUFXOUIsT0FEdEI7QUFFRSx3QkFBZ0IsRUFBRTdCLGtCQUZwQjtBQUdFLGFBQUssRUFBQyxxQkFIUjtBQUlFLGFBQUssRUFBRSxLQUFLMkQsS0FBTCxDQUFXckMsR0FKcEI7QUFLRSxnQkFBUSxFQUFFLEtBQUs2RCxVQUxqQjtBQU1FLGFBQUssRUFBQyxLQU5SO0FBT0UsWUFBSSxFQUFDO0FBUFAsUUFqQ0YsRUEwQ0Usb0RBQUMsK0NBQUQ7QUFDRSxlQUFPLEVBQUUsS0FBS3hCLEtBQUwsQ0FBVzlCLE9BRHRCO0FBRUUsd0JBQWdCLEVBQUU1QixxQkFGcEI7QUFHRSxhQUFLLEVBQUMsT0FIUjtBQUlFLGFBQUssRUFBRSxLQUFLMEQsS0FBTCxDQUFXcEMsSUFKcEI7QUFLRSxnQkFBUSxFQUFFLEtBQUt5RCxXQUxqQjtBQU1FLGFBQUssRUFBQztBQU5SLFFBMUNGLENBM0pGLEVBOE1FLG9EQUFDLGdEQUFEO0FBQ0Usa0JBQVUsRUFBRTFGLFdBRGQ7QUFFRSxjQUFNLEVBQUUsS0FBS3FFLEtBQUwsQ0FBVzNCLE9BRnJCO0FBR0UsZUFBTyxFQUFFLEtBQUsyQixLQUFMLENBQVc5QixPQUh0QjtBQUlFLGdCQUFRLEVBQUUsSUFKWjtBQUtFLHNCQUFjLEVBQUUsS0FBS2tELGNBTHZCO0FBTUUsYUFBSyxFQUFDO0FBTlIsUUE5TUYsRUFzTkUsb0RBQUMsZ0RBQUQ7QUFDRSxrQkFBVSxFQUFFdkYsV0FEZDtBQUVFLGNBQU0sRUFBRSxLQUFLbUUsS0FBTCxDQUFXMUIsT0FGckI7QUFHRSxxQkFBYSxFQUFFLElBSGpCO0FBSUUsZUFBTyxFQUFFLEtBQUswQixLQUFMLENBQVc5QixPQUp0QjtBQUtFLGdCQUFRLEVBQUUsS0FMWjtBQU1FLHNCQUFjLEVBQUUsS0FBSytDLGNBTnZCO0FBT0UsYUFBSyxFQUFDO0FBUFIsUUF0TkYsRUErTkUsb0RBQUMsZ0RBQUQ7QUFDRSxrQkFBVSxFQUFFbkYsV0FEZDtBQUVFLGNBQU0sRUFBRSxLQUFLa0UsS0FBTCxDQUFXekIsT0FGckI7QUFHRSxxQkFBYSxFQUFFLElBSGpCO0FBSUUsZUFBTyxFQUFFLEtBQUt5QixLQUFMLENBQVc5QixPQUp0QjtBQUtFLGdCQUFRLEVBQUUsS0FMWjtBQU1FLHNCQUFjLEVBQUUsS0FBS2lELGNBTnZCO0FBT0UsYUFBSyxFQUFDO0FBUFIsUUEvTkYsRUF3T0Usb0RBQUMsK0NBQUQ7QUFDRSxlQUFPLEVBQUUsS0FBS25CLEtBQUwsQ0FBVzlCLE9BRHRCO0FBRUUsWUFBSSxFQUFFLEtBQUs4QixLQUFMLENBQVd0QixLQUZuQjtBQUdFLGtCQUFVLEVBQUUsS0FBS3FDLFlBSG5CO0FBSUUsYUFBSyxFQUFDO0FBSlIsUUF4T0YsRUE4T0Usb0RBQUMsK0NBQUQ7QUFDRSxXQUFHLEVBQUU4QixRQURQO0FBRUUsV0FBRyxFQUFFRSxRQUZQO0FBR0UsZUFBTyxFQUFFLEtBQUsvQyxLQUFMLENBQVc5QixPQUh0QjtBQUlFLFlBQUksRUFBRSxLQUFLOEIsS0FBTCxDQUFXckIsS0FKbkI7QUFLRSxrQkFBVSxFQUFFLEtBQUtrQyxZQUxuQjtBQU1FLGFBQUssRUFBQztBQU5SLFFBOU9GLEVBc1BFLG9EQUFDLG1EQUFEO0FBQ0UsZUFBTyxFQUFFLEtBQUtiLEtBQUwsQ0FBVzlCLE9BRHRCO0FBRUUsZ0JBQVEsRUFBRSxLQUFLOEIsS0FBTCxDQUFXeEIsUUFGdkI7QUFHRSxzQkFBYyxFQUFFLEtBQUt3QyxlQUh2QjtBQUlFLGFBQUssRUFBQyxXQUpSO0FBS0Usa0JBQVUsRUFBRWlDLHVEQUFZLENBQUNDLElBQWIsR0FBb0JELHVEQUFZLENBQUNFO0FBTC9DLFFBdFBGLEVBNlBFLG9EQUFDLDBEQUFEO0FBQ0UsYUFBSyxFQUFFLDBCQURUO0FBRUUsZUFBTyxFQUFFLEtBQUtuRCxLQUFMLENBQVc5QixPQUZ0QjtBQUdFLGdCQUFRLEVBQUUsS0FIWjtBQUlFLDRCQUFvQixFQUFFLEtBQUswQyxtQkFKN0I7QUFLRSxvQkFBWSxFQUFFLEtBQUtaLEtBQUwsQ0FBV3BCLFlBTDNCO0FBTUUsYUFBSyxFQUFDLGVBTlI7QUFPRSxtQkFBVyxFQUFFO0FBUGYsUUE3UEYsRUFzUUUsb0RBQUMsc0RBQUQ7QUFDRSxhQUFLLEVBQUUsZUFEVDtBQUVFLG1CQUFXLEVBQUUsSUFGZjtBQUdFLGtCQUFVLEVBQ1Isb0RBQUMsaURBQUQ7QUFBUSxjQUFJLEVBQUU7QUFBZCx5QkFKSjtBQU1FLG9CQUFZLEVBQUUsQ0FDWixvREFBQyxpREFBRDtBQUFRLGFBQUcsRUFBRSxDQUFiO0FBQWdCLGtCQUFRLEVBQUU7QUFBMUIsNEJBRFksRUFJWixvREFBQyxpREFBRDtBQUFRLGFBQUcsRUFBRSxDQUFiO0FBQWdCLGtCQUFRLEVBQUU7QUFBMUIsNEJBSlk7QUFOaEIsU0FlRSxvREFBQywyREFBRDtBQUNFLGVBQU8sRUFBRSxLQUFLb0IsS0FBTCxDQUFXOUIsT0FEdEI7QUFFRSxnQkFBUSxFQUFFLEtBRlo7QUFHRSxvQkFBWSxFQUFFLEtBQUt5Qyx1QkFIckI7QUFJRSxZQUFJLEVBQUUsS0FBS1gsS0FBTCxDQUFXbEIsZ0JBSm5CO0FBS0UsbUJBQVcsRUFBRSxLQUFLa0IsS0FBTCxDQUFXakIsbUJBTDFCO0FBTUUsMkJBQW1CLEVBQ2pCLEtBQUswQixrQ0FQVDtBQVNFLG1CQUFXLEVBQUU7QUFUZixRQWZGLENBdFFGLEVBaVNFLG9EQUFDLHNEQUFEO0FBQ0UsaUJBQVMsRUFBRSxFQURiO0FBRUUsYUFBSyxFQUFFLDRCQUZUO0FBR0UsbUJBQVcsRUFBRSxJQUhmO0FBSUUsV0FBRyxFQUFFLEtBQUtuRCxzQkFKWjtBQUtFLGtCQUFVLEVBQ1Isb0RBQUMsaURBQUQ7QUFDRSxjQUFJLEVBQUUsU0FEUjtBQUVFLGlCQUFPLEVBQUUsS0FBSzZDO0FBRmhCO0FBTkosU0FjRSxvREFBQyw4REFBRDtBQUNFLGVBQU8sRUFBRSxLQUFLSCxLQUFMLENBQVc5QixPQUR0QjtBQUVFLGdCQUFRLEVBQUUsS0FGWjtBQUdFLG9CQUFZLEVBQUUsS0FBSytCLDBCQUhyQjtBQUlFLFlBQUksRUFBRSxLQUFLRCxLQUFMLENBQVdoQixtQkFKbkI7QUFLRSxtQkFBVyxFQUFDO0FBTGQsUUFkRixDQWpTRixFQXVURSxvREFBQyxzREFBRDtBQUNFLGlCQUFTLEVBQUUsRUFEYjtBQUVFLGFBQUssRUFBRSxTQUZUO0FBR0Usa0JBQVUsRUFDUixvREFBQyxpREFBRDtBQUFRLGNBQUksRUFBRTtBQUFkO0FBSkosU0FPRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUksaUJBQVMsRUFBQztBQUFkLG9CQURGLEVBRUUsb0RBQUMsZUFBRCxPQUZGLENBUEYsRUFXRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUksaUJBQVMsRUFBQztBQUFkLHFCQURGLEVBRUUsb0RBQUMsZUFBRDtBQUFpQixnQkFBUSxFQUFFO0FBQTNCLFFBRkYsQ0FYRixFQWVFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsZ0JBREYsRUFFRSxvREFBQyxlQUFEO0FBQWlCLFlBQUksRUFBRTtBQUF2QixRQUZGLENBZkYsRUFtQkU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFJLGlCQUFTLEVBQUM7QUFBZCxvQkFERixFQUVFLG9EQUFDLGVBQUQ7QUFBaUIsZ0JBQVEsRUFBRTtBQUEzQixRQUZGLENBbkJGLEVBdUJFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsaUJBREYsRUFFRSxvREFBQyxlQUFEO0FBQWlCLGFBQUssRUFBRTtBQUF4QixRQUZGLENBdkJGLEVBMkJFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsaUJBREYsRUFFRSxvREFBQyxlQUFEO0FBQWlCLGFBQUssRUFBRTtBQUF4QixRQUZGLENBM0JGLEVBK0JFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsb0JBREYsRUFFRSxvREFBQyxlQUFEO0FBQWlCLGdCQUFRLEVBQUU7QUFBM0IsUUFGRixDQS9CRixFQW1DRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUksaUJBQVMsRUFBQztBQUFkLG9CQURGLEVBRUUsb0RBQUMsZUFBRDtBQUFpQixnQkFBUSxFQUFFLElBQTNCO0FBQWlDLGlCQUFTLEVBQUM7QUFBM0MsUUFGRixDQW5DRixFQXVDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUksaUJBQVMsRUFBQztBQUFkLHVCQURGLEVBRUUsb0RBQUMsZUFBRDtBQUFpQixtQkFBVyxFQUFFLElBQTlCO0FBQW9DLGlCQUFTLEVBQUM7QUFBOUMsUUFGRixDQXZDRixDQXZURixFQW1XRSxvREFBQyxzREFBRDtBQUNFLGlCQUFTLEVBQUUsRUFEYjtBQUVFLGFBQUssRUFBRSxVQUZUO0FBR0UsbUJBQVcsRUFBRSxJQUhmO0FBSUUsd0JBQWdCLEVBQUU7QUFKcEIsU0FNRSxvREFBQyxtREFBRCxDQUNFO0FBREY7QUFFRSxpQkFBUyxFQUFFLEtBQUtlLHVCQUZsQjtBQUdFLGVBQU8sRUFBRSxLQUFLQyxLQUFMLENBQVdYLGdCQUh0QjtBQUlFLGFBQUssRUFBQztBQUpSLFFBTkYsRUFZRSxvREFBQywrQ0FBRDtBQUNFLGFBQUssRUFBQyxjQURSO0FBRUUsYUFBSyxFQUFDLFdBRlI7QUFHRSxpQkFBUyxFQUFFO0FBQUUrRCxxQkFBVyxFQUFFO0FBQWYsU0FIYjtBQUlFLGdCQUFRLEVBQUUsS0FBS3BELEtBQUwsQ0FBV1gsZ0JBSnZCO0FBS0UsZ0JBQVEsRUFBRSxJQUxaO0FBTUUsWUFBSSxFQUFFLEtBQUtXLEtBQUwsQ0FBV2QsSUFObkI7QUFPRSxxQkFBYSxFQUFFLEtBQUtZO0FBUHRCLFFBWkYsRUFxQkUsb0RBQUMsK0NBQUQ7QUFDRSxhQUFLLEVBQUMsa0JBRFI7QUFFRSxhQUFLLEVBQUMsdUJBRlI7QUFHRSx5QkFBaUIsRUFBRSxDQUhyQjtBQUlFLHlCQUFpQixFQUFFLDJCQUFBdUQsVUFBVTtBQUFBLGlCQUMzQixJQUFJQyxPQUFKLENBQVksVUFBQUMsT0FBTztBQUFBLG1CQUNqQkMsVUFBVSxDQUNSO0FBQUEscUJBQU1ELE9BQU8sQ0FBQyxDQUFDO0FBQUU5SCxrQkFBRSxFQUFFLENBQUMsQ0FBUDtBQUFVQyxvQkFBSSxFQUFFO0FBQWhCLGVBQUQsQ0FBRCxDQUFiO0FBQUEsYUFEUSxFQUVSLElBRlEsQ0FETztBQUFBLFdBQW5CLENBRDJCO0FBQUEsU0FKL0I7QUFZRSxnQkFBUSxFQUFFLEtBQUtzRSxLQUFMLENBQVdYLGdCQVp2QjtBQWFFLGdCQUFRLEVBQUUsSUFiWjtBQWNFLGVBQU8sRUFBRSxDQWRYO0FBZUUsb0JBQVksRUFBRTdELFlBZmhCO0FBZ0JFLFlBQUksRUFBRSxLQUFLd0UsS0FBTCxDQUFXZCxJQWhCbkI7QUFpQkUscUJBQWEsRUFBRSxLQUFLWSxXQWpCdEI7QUFrQkUsaUJBQVMsRUFBRTtBQWxCYixRQXJCRixFQXlDRSxvREFBQywrQ0FBRDtBQUNFLGFBQUssRUFBQyxrQkFEUjtBQUVFLGFBQUssRUFBQyxhQUZSO0FBR0UsZ0JBQVEsRUFBRSxLQUFLRSxLQUFMLENBQVdYLGdCQUh2QjtBQUlFLGdCQUFRLEVBQUUsS0FKWjtBQUtFLGVBQU8sRUFBRSxDQUxYO0FBTUUsb0JBQVksRUFBRTdELFlBTmhCO0FBT0UsWUFBSSxFQUFFLEtBQUt3RSxLQUFMLENBQVdkLElBUG5CO0FBUUUscUJBQWEsRUFBRSxLQUFLWSxXQVJ0QjtBQVNFLGlCQUFTLEVBQUU7QUFUYixRQXpDRixFQW9ERSxvREFBQywrQ0FBRDtBQUNFLGFBQUssRUFBQyxZQURSO0FBRUUsZUFBTyxFQUFFLENBRlg7QUFHRSxnQkFBUSxFQUFFLEtBQUtFLEtBQUwsQ0FBV1gsZ0JBSHZCO0FBSUUsZ0JBQVEsRUFBRSxJQUpaO0FBS0UsWUFBSSxFQUFFLEtBQUtXLEtBQUwsQ0FBV2QsSUFMbkI7QUFNRSxxQkFBYSxFQUFFLEtBQUtZLFdBTnRCO0FBT0UsaUJBQVMsRUFBRSxJQVBiO0FBUUUsa0JBQVUsRUFBRSxvQkFBQTJELENBQUM7QUFBQSxpQkFBSUMsT0FBTyxDQUFDQyxJQUFSLENBQWFGLENBQWIsQ0FBSjtBQUFBO0FBUmYsUUFwREYsRUE4REUsb0RBQUMsK0NBQUQ7QUFDRSxhQUFLLEVBQUMsaUJBRFI7QUFFRSxhQUFLLEVBQUMsWUFGUjtBQUdFLGVBQU8sRUFBRSxDQUhYO0FBSUUsZ0JBQVEsRUFBRSxJQUpaO0FBS0UsZ0JBQVEsRUFBRSxLQUFLekQsS0FBTCxDQUFXWCxnQkFMdkI7QUFNRSxZQUFJLEVBQUUsS0FBS1csS0FBTCxDQUFXZCxJQU5uQjtBQU9FLHFCQUFhLEVBQUUsS0FBS1ksV0FQdEI7QUFRRSxpQ0FBeUIsRUFBRSxJQVI3QjtBQVNFLGlCQUFTLEVBQUU3RDtBQVRiLFFBOURGLEVBeUVFLG9EQUFDLGlEQUFEO0FBQ0UsZ0JBQVEsRUFBRSxJQURaO0FBRUUsYUFBSyxFQUFDLGFBRlI7QUFHRSxhQUFLLEVBQUMsYUFIUjtBQUlFLGdCQUFRLEVBQUUsSUFKWjtBQUtFLG9CQUFZLEVBQUUsSUFMaEI7QUFNRSxnQkFBUSxFQUFFLEtBQUsrRCxLQUFMLENBQVdYLGdCQU52QjtBQU9FLHNCQUFjLEVBQUUsS0FBS1csS0FBTCxDQUFXYixjQVA3QjtBQVFFLGNBQU0sRUFBRSxLQUFLYSxLQUFMLENBQVdaLGNBUnJCO0FBU0UsOEJBQXNCLEVBQUUsS0FBS1E7QUFUL0IsUUF6RUYsRUFvRkUsb0RBQUMsaURBQUQ7QUFDRSxlQUFPLEVBQUUsaUJBQUEwQixDQUFDO0FBQUEsaUJBQ1IsTUFBSSxDQUFDekIsUUFBTCxDQUFjO0FBQ1pWLDBCQUFjLEVBQUUsQ0FBQztBQUFFbEUsbUJBQUssRUFBRTtBQUFULGFBQUQ7QUFESixXQUFkLENBRFE7QUFBQTtBQURaLGdCQXBGRixDQW5XRixFQWljRSxvREFBQyxzREFBRDtBQUNFLGlCQUFTLEVBQUUsRUFEYjtBQUVFLGFBQUssRUFBRSxVQUZUO0FBR0UsbUJBQVcsRUFBRSxJQUhmO0FBSUUsd0JBQWdCLEVBQUU7QUFKcEIsU0FNRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLG9EQUFDLG1EQUFEO0FBQ0UsaUJBQVMsRUFBQyx3QkFEWjtBQUVFLGNBQU0sRUFDSjtBQUFHLG1CQUFTLEVBQUM7QUFBYiwyQkFISjtBQUtFLHlCQUFpQixFQUFFLENBTHJCO0FBTUUsd0JBQWdCLEVBQUMsS0FObkI7QUFPRSxpQkFBUyxFQUFFO0FBUGIsU0FTRSx1RUFURixDQURGLEVBWUUsb0RBQUMsbURBQUQ7QUFDRSxpQkFBUyxFQUFDLHdCQURaO0FBRUUsY0FBTSxFQUFFLGVBRlY7QUFHRSx5QkFBaUIsRUFBRSxDQUhyQjtBQUlFLHdCQUFnQixFQUFDO0FBSm5CLFNBTUUsdUVBTkYsQ0FaRixFQW9CRSxvREFBQyxtREFBRDtBQUNFLGlCQUFTLEVBQUMsbUJBRFo7QUFFRSxXQUFHLEVBQUUsS0FBS3dFLHlCQUZaO0FBR0UsY0FBTSxFQUNKLG9EQUFDLGlEQUFEO0FBQ0UsaUJBQU8sRUFBRSxLQUFLQyxtQkFEaEI7QUFFRSxjQUFJLEVBQUM7QUFGUCw2QkFKSjtBQVdFLGlCQUFTLEVBQUUsS0FYYjtBQVlFLHdCQUFnQixFQUFDO0FBWm5CLFNBY0UsdUVBZEYsQ0FwQkYsQ0FORixDQWpjRixFQTZlRSxvREFBQyxnRUFBRCxPQTdlRixFQThlRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLG9EQUFDLHdEQUFEO0FBQ0UsNEJBQW9CLEVBQUUsS0FBS00sS0FBTCxDQUFXN0Isb0JBRG5DO0FBRUUsaUJBQVMsRUFBQyxNQUZaO0FBR0UsWUFBSSxFQUFFLFNBSFI7QUFJRSx1QkFBZSxFQUFDLEVBSmxCO0FBS0Usc0JBQWMsRUFBQyxZQUxqQjtBQU1FLDJCQUFtQixFQUFDLGVBTnRCO0FBT0UscUJBQWEsRUFBRSxPQVBqQjtBQVFFLDBCQUFrQixFQUFFLGVBUnRCO0FBU0UsZUFBTyxFQUFFLEtBQUt1RSx3QkFUaEI7QUFVRSxvQkFBWSxFQUFFLEtBQUsxQyxLQUFMLENBQVdqQztBQVYzQixzQkFERixFQWVFLG9EQUFDLHdEQUFEO0FBQ0UsNEJBQW9CLEVBQUUsS0FBS2lDLEtBQUwsQ0FBVzdCLG9CQURuQztBQUVFLGlCQUFTLEVBQUMsTUFGWjtBQUdFLHVCQUFlLEVBQUMsRUFIbEI7QUFJRSxZQUFJLEVBQUUsU0FKUjtBQUtFLDJCQUFtQixFQUFDLGVBTHRCO0FBTUUsd0JBQWdCLEVBQUMsYUFObkI7QUFPRSwwQkFBa0IsRUFBRSxlQVB0QjtBQVFFLHVCQUFlLEVBQUUsYUFSbkI7QUFTRSxlQUFPLEVBQUUsS0FBS3dFLHNCQVRoQjtBQVVFLG9CQUFZLEVBQUUsS0FBSzNDLEtBQUwsQ0FBV2pDO0FBVjNCLHdCQWZGLENBOWVGLENBaEJGLENBRkosQ0FERixDQURGLENBREYsQ0E3Q0YsQ0FERjtBQXdsQkQ7QUEzcEJIO0FBQUE7QUFBQSx1Q0Ftd0I2QnVELENBbndCN0IsRUFtd0JzRTtBQUNsRSxVQUFNc0MsR0FBRyxHQUFHdEMsQ0FBQyxDQUFDQyxNQUFGLENBQVN0RyxLQUFyQjs7QUFDQSxVQUFJMkksR0FBRyxLQUFLLEdBQVIsSUFBZUEsR0FBRyxLQUFLLEdBQTNCLEVBQWdDO0FBQzlCLGFBQUsvRCxRQUFMLENBQWM7QUFBRXBDLGdCQUFNLEVBQUVtRztBQUFWLFNBQWQ7QUFDRDtBQUNGO0FBeHdCSDtBQUFBO0FBQUEsK0JBMHdCcUJ0QyxDQTF3QnJCLEVBMHdCOEQ7QUFDMURBLE9BQUMsSUFBSUEsQ0FBQyxDQUFDVyxjQUFGLEVBQUw7QUFDQSxXQUFLcEMsUUFBTCxDQUFjLEtBQUtyQyxZQUFuQjtBQUNEO0FBN3dCSDtBQUFBO0FBQUEsNkNBZ3hCSThELENBaHhCSixFQWl4Qkl1QyxVQWp4QkosRUFreEJJQyxLQWx4QkosRUFteEJJQyxPQW54QkosRUFveEJJQyxLQXB4QkosRUFxeEJJO0FBQ0ExQyxPQUFDLENBQUNXLGNBQUY7QUFDQTRCLGdCQUFVO0FBQ1ZMLGdCQUFVLENBQUMsWUFBTTtBQUNmTSxhQUFLO0FBQ0xOLGtCQUFVLENBQUM7QUFBQSxpQkFBTVEsS0FBSyxFQUFYO0FBQUEsU0FBRCxFQUFnQixJQUFoQixDQUFWO0FBQ0QsT0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlEO0FBNXhCSDtBQUFBO0FBQUEsMkNBK3hCSTFDLENBL3hCSixFQWd5Qkl1QyxVQWh5QkosRUFpeUJJQyxLQWp5QkosRUFreUJJQyxPQWx5QkosRUFteUJJQyxLQW55QkosRUFveUJJO0FBQ0ExQyxPQUFDLENBQUNXLGNBQUY7QUFDQTRCLGdCQUFVO0FBQ1ZMLGdCQUFVLENBQUMsWUFBTTtBQUNmTyxlQUFPO0FBQ1BQLGtCQUFVLENBQUM7QUFBQSxpQkFBTVEsS0FBSyxFQUFYO0FBQUEsU0FBRCxFQUFnQixJQUFoQixDQUFWO0FBQ0QsT0FIUyxFQUdQLElBSE8sQ0FBVjtBQUlEO0FBM3lCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsRUFBMkJwQixtREFBM0I7ZUE4eUJleEYsSztBQUFBOzs7Ozs7Ozs7OzBCQTU2QkZwQyxZOzBCQXlCUFEsWTswQkEyQkFHLFc7MEJBS0FFLFc7MEJBTUFDLFc7MEJBTUFFLFk7MEJBS0FDLGtCOzBCQUlBRSxlOzBCQUVBQyxhOzBCQUVBQyxrQjswQkFFQUMscUI7MEJBSUFHLEs7MEJBVUFDLGU7MEJBNEJPVSxLIiwiZmlsZSI6ImEwYWFjY2QtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIERyb3Bkb3duLFxyXG4gIEZvcm0sXHJcbiAgVGltZSxcclxuICBUZXh0LFxyXG4gIFNlbGVjdCxcclxuICBTdWJtaXQsXHJcbiAgRHluYW1pY1N1Ym1pdCxcclxuICBDaGVja2JveCxcclxuICBSYWRpbyxcclxuICBSYWRpb0NvbnRhaW5lcixcclxuICBNb25leSxcclxuICBPcGVuaW5nSG91cnNEYXksXHJcbiAgTW9uZXlXaXRoQ3VycmVuY3ksXHJcbiAgT3BlbmluZ0hvdXJzRGF5T2JqLFxyXG4gIE9wZW5pbmdIb3Vyc1dlZWssXHJcbiAgT3BlbmluZ0hvdXJzU3BlY2lhbERheU9iaixcclxuICBPcGVuaW5nSG91cnNTcGVjaWFsLFxyXG4gIElucHV0SGVhZGVyLFxyXG4gIEJ1dHRvbixcclxuICBCdXR0b25UeXBlcyxcclxuICBUYWdzLFxyXG4gIFRhZyxcclxuICBOdW1iZXJWYWxpZGF0b3IsXHJcbiAgVGV4dEFyZWEsXHJcbiAgT3BlbmluZ0hvdXJzV2Vla0RheU9iaixcclxuICBTZWxlY3RWYWx1ZSxcclxuICBUZXh0UHJvcHMsXHJcbiAgVmFsaWRhdG9yVHlwZXMsXHJcbiAgSUJhc2VWYWxpZGF0b3IsXHJcbiAgQnV0dG9uUHJvcHMsXHJcbiAgRm9ybVZhbGlkYXRpb25TdW1tYXJ5LFxyXG4gIElucHV0SGVhZGVyUmF3LFxyXG4gIFRpbWVTcGFuLFxyXG4gIFRpbWVTcGFuVW5pdCxcclxufSBmcm9tICcuLi8uLi8uLi8uLi9saWIvaW5kZXgnO1xyXG5pbXBvcnQgeyBEdXJhdGlvbiwgZHVyYXRpb24gfSBmcm9tICdtb21lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNpY1Byb3BzIHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2ljU3RhdGUge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBnZW5kZXI6ICdNJyB8ICdGJyB8ICcnO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgYWdlOiBzdHJpbmc7XHJcbiAgbWluMTogc3RyaW5nO1xyXG4gIGNoZWNrYm94MTogYm9vbGVhbjtcclxuICBjaGVja2JveDI6IGJvb2xlYW47XHJcbiAgdmFsaWRhdGVGb3JtU3VibWl0OiBib29sZWFuO1xyXG4gIGZvb2Q6IHN0cmluZztcclxuICBkcmluazogc3RyaW5nO1xyXG4gIHRvdWNoT246ICdibHVyJyB8ICdmb2N1cyc7XHJcbiAgc3VibWl0RGlzYWJsZXNJbnB1dHM6IGJvb2xlYW47XHJcbiAgc2ltdWxhdGVVbm1vdW50OiBib29sZWFuO1xyXG4gIHByaWNlczE6IE1vbmV5V2l0aEN1cnJlbmN5W107XHJcbiAgcHJpY2VzMjogTW9uZXlXaXRoQ3VycmVuY3lbXTtcclxuICBwcmljZXMzOiBNb25leVdpdGhDdXJyZW5jeVtdO1xyXG4gIHRpbWUxOiBEdXJhdGlvbjtcclxuICB0aW1lMjogRHVyYXRpb247XHJcbiAgdGltZVNwYW46IER1cmF0aW9uO1xyXG4gIG9wZW5pbmdIb3VyczogT3BlbmluZ0hvdXJzRGF5T2JqO1xyXG4gIG9wZW5pbmdIb3Vyc1dlZWs6IE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmpbXTtcclxuICBvcGVuaW5nSG91cnNXZWVrRGF5OiBPcGVuaW5nSG91cnNEYXlPYmo7XHJcbiAgb3BlbmluZ0hvdXJzU3BlY2lhbDogT3BlbmluZ0hvdXJzU3BlY2lhbERheU9ialtdO1xyXG4gIHdlYnNpdGU6IHN0cmluZztcclxuICB0YWdzOiBUYWdbXTtcclxuICBzZWxlY3RlZFZhbHVlczogU2VsZWN0VmFsdWVbXTtcclxuICBtdWx0aXBsZVZhbHVlczogU2VsZWN0VmFsdWVbXTtcclxuICBtdWx0aXBsZVJlYWRvbmx5OiBib29sZWFuO1xyXG4gIHRleHRBcmVhVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWdlVmFsaWRhdG9yIHtcclxuICBwdWJsaWMgc3RhdGljIGluc3RhbmNlID0gbmV3IEFnZVZhbGlkYXRvcigpO1xyXG4gIHB1YmxpYyBWYWxpZGF0ZShcclxuICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICBpc1JlcXVpcmVkOiBib29sZWFuLFxyXG4gICAgYWRkRXJyb3I6IChlcnJvcjogc3RyaW5nKSA9PiB2b2lkXHJcbiAgKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgbnVtID0gTnVtYmVyKHZhbHVlKTtcclxuICAgIGlmICghaXNOYU4obnVtKSkge1xyXG4gICAgICBpZiAobnVtIDw9IDApIHtcclxuICAgICAgICBhZGRFcnJvcignTm90IGJvcm4geWV0PycpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtID4gMTIyKSB7XHJcbiAgICAgICAgYWRkRXJyb3IoJ09sZGVyIHRoYW4gSmVhbm5lIENhbG1lbnQ/IFJlYWxseT8nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhZGRFcnJvcignSW52YWxpZCBhZ2UnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGV4aXN0aW5nVGFnczogVGFnW10gPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiAnRm9vZCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIG5hbWU6ICdEcmluaycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIG5hbWU6ICdCZWVyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgbmFtZTogJ1dpbmUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBuYW1lOiAnR2x1dGVuIGZyZWUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBuYW1lOiAnRnJ1aXQnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBjdXJyZW5jaWVzMSA9IFtcclxuICB7IGxhYmVsOiAnR0JQJywgdmFsdWU6ICdHQlAnIH0sXHJcbiAgeyBsYWJlbDogJ0VVUicsIHZhbHVlOiAnRVVSJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VycmVuY2llczIgPSBbXHJcbiAgeyBsYWJlbDogJ0dCUCcsIHZhbHVlOiAnR0JQJyB9LFxyXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUicgfSxcclxuICB7IGxhYmVsOiAnVVNEJywgdmFsdWU6ICdVU0QnIH0sXHJcbl07XHJcblxyXG5jb25zdCBjdXJyZW5jaWVzMyA9IFtcclxuICB7IGxhYmVsOiAnR0JQJywgdmFsdWU6ICdHQlAnLCBmb3JjZVNlbGVjdGVkOiB0cnVlIH0sXHJcbiAgeyBsYWJlbDogJ0VVUicsIHZhbHVlOiAnRVVSJyB9LFxyXG4gIHsgbGFiZWw6ICdVU0QnLCB2YWx1ZTogJ1VTRCcgfSxcclxuXTtcclxuXHJcbmNvbnN0IGdlbmRlclZhbHVlcyA9IFtcclxuICB7IHZhbHVlOiAnTScsIGxhYmVsOiAnTWFsZScgfSxcclxuICB7IHZhbHVlOiAnRicsIGxhYmVsOiAnRmVtYWxlJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgdGFnc0VtYWlsVGV4dFByb3BzOiBUZXh0UHJvcHMgPSB7XHJcbiAgdmFsaWRhdG9yczogWydlbWFpbCddLFxyXG59O1xyXG5cclxuY29uc3QgZW1haWxWYWxpZGF0b3JzOiBWYWxpZGF0b3JUeXBlc1tdID0gWydlbWFpbCddO1xyXG5cclxuY29uc3QgdXJsVmFsaWRhdG9yczogVmFsaWRhdG9yVHlwZXNbXSA9IFsndXJsJ107XHJcblxyXG5jb25zdCBjdXN0b21BZ2VWYWxpZGF0b3I6IElCYXNlVmFsaWRhdG9yW10gPSBbQWdlVmFsaWRhdG9yLmluc3RhbmNlXTtcclxuXHJcbmNvbnN0IGN1c3RvbU51bWJlclZhbGlkYXRvcjogSUJhc2VWYWxpZGF0b3JbXSA9IFtcclxuICBuZXcgTnVtYmVyVmFsaWRhdG9yKHsgbWluOiAwIH0pLFxyXG5dO1xyXG5cclxuY29uc3QgdHlwZXM6IEJ1dHRvblR5cGVzW10gPSBbXHJcbiAgJ3ByaW1hcnknLFxyXG4gICd3YXJuaW5nJyxcclxuICAnZXJyb3InLFxyXG4gICdpbmZvJyxcclxuICAnc3VjY2VzcycsXHJcbiAgJ2dyYXknLFxyXG4gICd3aGl0ZScsXHJcbiAgJ25vbmUnLFxyXG5dO1xyXG5jb25zdCBCdXR0b25zU2hvd2Nhc2U6IFJlYWN0LlNGQzxCdXR0b25Qcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwicHgtMlwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0OCwgMjQ3LCAyNDcpJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3R5cGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9e2l0ZW19IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9e2l0ZW19IGRpc2FibGVkPXt0cnVlfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICBEaXNhYmxlZFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQnV0dG9uc1Nob3djYXNlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjbGFzc05hbWU6ICdteS0yIG1yLTInLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2ljIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxCYXNpY1Byb3BzLCBCYXNpY1N0YXRlPiB7XHJcbiAgcHJpdmF0ZSBmb3JtOiBGb3JtO1xyXG5cclxuICBwcml2YXRlIHNwZWNpYWxEYXlzSW5wdXRIZWFkZXI6IFJlYWN0LlJlZk9iamVjdDxJbnB1dEhlYWRlclJhdz47XHJcblxyXG4gIHByaXZhdGUgZHJvcGRvd25GdW5jdGlvbkhlYWRlcjogRHJvcGRvd247XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbFN0YXRlOiBCYXNpY1N0YXRlID0ge1xyXG4gICAgZ2VuZGVyOiAnJyxcclxuICAgIG5hbWU6ICdUZXN0JyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIGFnZTogJycsXHJcbiAgICBtaW4xOiAnJyxcclxuICAgIGNoZWNrYm94MTogdHJ1ZSxcclxuICAgIGNoZWNrYm94MjogZmFsc2UsXHJcbiAgICB2YWxpZGF0ZUZvcm1TdWJtaXQ6IHRydWUsXHJcbiAgICBmb29kOiAnYnJlYWtmYXN0JyxcclxuICAgIGRyaW5rOiAnYnJlYWtmYXN0JyxcclxuICAgIHRvdWNoT246ICdmb2N1cycsXHJcbiAgICBzdWJtaXREaXNhYmxlc0lucHV0czogdHJ1ZSxcclxuICAgIHNpbXVsYXRlVW5tb3VudDogZmFsc2UsXHJcbiAgICBwcmljZXMxOiBbXSxcclxuICAgIHByaWNlczI6IFtdLFxyXG4gICAgcHJpY2VzMzogW10sXHJcbiAgICB0aW1lU3BhbjogZHVyYXRpb24oMCksXHJcbiAgICB0aW1lMTogZHVyYXRpb24oMCksXHJcbiAgICB0aW1lMjogZHVyYXRpb24oMCksXHJcbiAgICBvcGVuaW5nSG91cnM6IHtcclxuICAgICAgdGltZXM6IFtdLFxyXG4gICAgfSxcclxuICAgIG9wZW5pbmdIb3Vyc1dlZWs6IFtdLFxyXG4gICAgb3BlbmluZ0hvdXJzV2Vla0RheToge1xyXG4gICAgICB0aW1lczogW10sXHJcbiAgICB9LFxyXG4gICAgb3BlbmluZ0hvdXJzU3BlY2lhbDogW10sXHJcbiAgICB3ZWJzaXRlOiAnJyxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgc2VsZWN0ZWRWYWx1ZXM6IFtdLFxyXG4gICAgbXVsdGlwbGVWYWx1ZXM6IFtcclxuICAgICAgeyB2YWx1ZTogJ09uZSBvcHRpb24nIH0sXHJcbiAgICAgIHsgdmFsdWU6ICdTZWNvbmQgb3B0aW9uJyB9LFxyXG4gICAgICB7IHZhbHVlOiAnVGhpcmQgb3B0aW9uJyB9LFxyXG4gICAgICB7IHZhbHVlOiAnb25lIG1vcmUgb3B0aW9uJyB9LFxyXG4gICAgICB7IHZhbHVlOiAncmx5IGxvbmcgbGFzdCBvcHRpb24nIH0sXHJcbiAgICBdLFxyXG4gICAgbXVsdGlwbGVSZWFkb25seTogZmFsc2UsXHJcbiAgICB0ZXh0QXJlYVRleHQ6ICcnLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBCYXNpY1Byb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGU7XHJcbiAgICB0aGlzLmhhbmRsZUdlbmRlckNoYW5nZSA9IHRoaXMuaGFuZGxlR2VuZGVyQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtID0gdGhpcy5keW5hbWljU3VibWl0U3VjY2Vzc0Zvcm0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHluYW1pY1N1Ym1pdEVycm9yRm9ybSA9IHRoaXMuZHluYW1pY1N1Ym1pdEVycm9yRm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zcGVjaWFsRGF5c0lucHV0SGVhZGVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgbGV0IHRpbWUyTWF4ID0gZHVyYXRpb24oKVxyXG4gICAgICAuYWRkKDEsICdob3VyJylcclxuICAgICAgLmFkZCg1LCAnbWludXRlcycpO1xyXG4gICAgbGV0IHRpbWUyTWluID0gZHVyYXRpb24oKVxyXG4gICAgICAuc3VidHJhY3QoMSwgJ2hvdXInKVxyXG4gICAgICAuc3VidHJhY3QoNSwgJ21pbnV0ZXMnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93ICBtdC01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2sgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlPXt0cnVlfSBjbGFzc05hbWU9XCJpbnB1dF9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlR1cm4gZm9ybSB2YWxpZGF0aW9uIG9uIG9yIG9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmZvcm1WYWxpZGF0aW9uVG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVmFsaWRhdGUgZm9ybSBzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW9Db250YWluZXIgdGl0bGU9XCJUb3VjaCBvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvdWNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMudG91Y2hPbkNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3VjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImZvY3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRm9jdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMudG91Y2hPbkNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9SYWRpb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNhYmxlcyBpbnB1dHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kaXNhYmxlc0lucHV0c0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5zdWJtaXREaXNhYmxlc0lucHV0c31cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVW5tb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLnNpbXVsYXRlVW5tb3VudENoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5zaW11bGF0ZVVubW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTaW11bGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXktNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjYXJkICd9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9jayBwLTBcIj5cclxuICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5zaW11bGF0ZVVubW91bnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLmZvcm1SZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAvKmV4dHJhQ29tcG9uZW50cz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGVzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRBcGk6IHt9IGFzIGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogWydUZXN0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1Rlc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9fSovXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGljb249ezxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1kLTQ4XCI+ZWRpdDwvaT59XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0V4YW1wbGUgZm9ybSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWJUaXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQW5kIHRoaXMgaXMgc3VidGl0bGUuIFRoZXJlJ3MgYWxzbyBpY29uIG9uIHRoZSBsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNob3dFeHBhbmRBbGw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGVyb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZERlZmF1bHQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFpbkJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdWJtaXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybT17dGhpcy5zdGF0ZS52YWxpZGF0ZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdWJtaXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBleHRyYUJ1dHRvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9ezF9IGRyb3Bkb3duPXt0cnVlfSBvbkNsaWNrPXt0aGlzLnRvdWNoQWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUb3VjaCBhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudW5Ub3VjaEFsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFVuLXRvdWNoIGFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2hvdWxkVG9nZ2xlQ29sbGFwc2VPbkhlYWRlckNsaWNrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0NvbnRhaW5lciB0aXRsZT1cIkRyaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2luZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3aGlza2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldoaXNrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRHJpbmtzIChob3Jpem9udGFsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmluazJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2luZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmluazJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2hpc2tleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaGlza2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmluazJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2F0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2F0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuY2hlY2tib3gxQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2JveDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRHJlc3MgY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJXaXRoIHRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIihvcHRpb25hbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuY2hlY2tib3gyQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2JveDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiV2FsbGV0IHBhcmtpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubmFtZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDbGVhckJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBudWxsIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGVzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIG5hbWUgKG5vIHRpdGxlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubmFtZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHNvbWUgaGVscCB0ZXh0LiBJdCBjYW4gYWxzbyBkbyA8Yj5ib2xkPC9iPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBvdGhlciBzdHVmZi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5uYW1lQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOYW1lIHJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnWW91ciBnZW5kZXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e2dlbmRlclZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZGVyQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiR2VuZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRleHRBcmVhQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGV4dEFyZWFUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudGV4dEFyZWFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0QXJlYVRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydTb21lIGNvbGxhcHNlZCBzdHVmZid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRUb2dnbGVDb2xsYXBzZU9uSGVhZGVyQ2xpY2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIkhlbHBmdWwgdGV4dCB0aGF0IGRlc2NyaWJlcyB3aGF0J3MgY29sbGFwc2VkIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJXaXRoIHRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtlbWFpbFZhbGlkYXRvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVtYWlsQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIllvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17J1lvdSBjYW4gc2VsZWN0IG1lIGJ1dCBJIGFtIHJlYWRvbmx5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17dXJsVmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXZWJzaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS53ZWJzaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLndlYnNpdGVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91ciB3ZWJzaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tVmFsaWRhdG9ycz17Y3VzdG9tQWdlVmFsaWRhdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBhZ2UgKG9wdGlvbmFsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmFnZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21WYWxpZGF0b3JzPXtjdXN0b21OdW1iZXJWYWxpZGF0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNaW4gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5taW4xQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vbmV5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmNpZXM9e2N1cnJlbmNpZXMxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZXM9e3RoaXMuc3RhdGUucHJpY2VzMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QcmljZXNDaGFuZ2U9e3RoaXMucHJpY2VzMUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb25leVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jaWVzPXtjdXJyZW5jaWVzMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzPXt0aGlzLnN0YXRlLnByaWNlczJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblByaWNlc0NoYW5nZT17dGhpcy5wcmljZXMyQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQcmljZSBtdWx0aXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vbmV5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmNpZXM9e2N1cnJlbmNpZXMzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZXM9e3RoaXMuc3RhdGUucHJpY2VzM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJpY2VzQ2hhbmdlPXt0aGlzLnByaWNlczNDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlByaWNlIG11bHRpcGxlIGZvcmNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXt0aGlzLnN0YXRlLnRpbWUxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lQ2hhbmdlPXt0aGlzLnRpbWUxQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9e3RpbWUyTWF4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49e3RpbWUyTWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU9e3RoaXMuc3RhdGUudGltZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVDaGFuZ2U9e3RoaXMudGltZTJDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIldpdGggTWluL01heFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRpbWVTcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNwYW49e3RoaXMuc3RhdGUudGltZVNwYW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVTcGFuQ2hhbmdlPXt0aGlzLnRpbWVTcGFuQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUaW1lIHNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZFVuaXRzPXtUaW1lU3BhblVuaXQuSG91ciB8IFRpbWVTcGFuVW5pdC5NaW51dGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE9wZW5pbmdIb3Vyc0RheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J09wZW5pbmcgaG91cnMgc2FtcGxlIGRheSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5pbmdIb3Vyc0NoYW5nZT17dGhpcy5vcGVuaW5nSG91cnNDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuaW5nSG91cnM9e3RoaXMuc3RhdGUub3BlbmluZ0hvdXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk9wZW5pbmcgaG91cnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VDYXBhY2l0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydPcGVuaW5nIGhvdXJzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5CdXR0b249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT17J3ByaW1hcnknfT5IZXJvIGJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQnV0dG9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXsxfSBkcm9wZG93bj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYSBidXR0b24gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT17Mn0gZHJvcGRvd249e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXh0cmEgYnV0dG9uIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVuaW5nSG91cnNXZWVrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRheXNDaGFuZ2U9e3RoaXMub3BlbmluZ0hvdXJzV2Vla0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5cz17dGhpcy5zdGF0ZS5vcGVuaW5nSG91cnNXZWVrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YW5kYXJkRGF5PXt0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc1dlZWtEYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdGFuZGFyZERheUNoYW5nZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5pbmdIb3Vyc1dlZWtTdGFuZGFyZERheUNoYW5nZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlQ2FwYWNpdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnU3BlY2lhbCBkYXlzIG9wZW5pbmcgaG91cnMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnNwZWNpYWxEYXlzSW5wdXRIZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5CdXR0b249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydwcmltYXJ5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3BlY2lhbERheXNBZGRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3BlbmluZ0hvdXJzU3BlY2lhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25EYXlzQ2hhbmdlPXt0aGlzLm9wZW5pbmdIb3Vyc1NwZWNpYWxDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRheXM9e3RoaXMuc3RhdGUub3BlbmluZ0hvdXJzU3BlY2lhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydCdXR0b25zJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPXsncHJpbWFyeSd9Pkhlcm8gYnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5TdGFuZGFyZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5ObyBzaGFkb3c8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2Ugbm9TaGFkb3c9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkhlcm88L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgaGVybz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+T3V0bGluZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2Ugb3V0bGluZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkJsYW5rPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIGJsYW5rPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5TbWFsbDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBzbWFsbD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Q2lyY3VsYXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgY2lyY3VsYXI9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkRyb3Bkb3duPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIGRyb3Bkb3duPXt0cnVlfSBjbGFzc05hbWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Vbm9idHJ1c2l2ZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSB1bm9idHJ1c2l2ZT17dHJ1ZX0gY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnTXVsdGlwbGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkRGVmYXVsdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsPVwiTXVsdGlwbGUgcmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5tdWx0aXBsZVJlYWRvbmx5Q2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNdWx0aXBsZSByZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQW5kIGxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UHJvcHM9e3sgcGxhY2Vob2xkZXI6ICdXaXRoIHBsYWNlaG9sZGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIHN1Z2dlc3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNob29zZSBvciBjcmVhdGUgdGFnc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGV0dGVyc1RvRmV0Y2g9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hFeGlzdGluZ1RhZ3M9e3N0YXJ0c1dpdGggPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiByZXNvbHZlKFt7IGlkOiAtMSwgbmFtZTogJ1RleHQnIH1dKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUYWdzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFncz17ZXhpc3RpbmdUYWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M9e3RoaXMuc3RhdGUudGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhZ3NDaGFuZ2VkPXt0aGlzLnRhZ3NDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDaGlwcz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3Mgc3VnZ2VzdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2hvb3NlIHRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFRhZ3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYWdzPXtleGlzdGluZ1RhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NoaXBzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGFncyBtYXggM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGFncz17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M9e3RoaXMuc3RhdGUudGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhZ3NDaGFuZ2VkPXt0aGlzLnRhZ3NDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDaGlwcz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhZ0NsaWNrPXt0ID0+IGNvbnNvbGUud2Fybih0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3Mgb25seSBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaXRoIGxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUYWdzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudD17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UHJvcHM9e3RhZ3NFbWFpbFRleHRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT25lIG9yIG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTXVsdGlzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRFbXB0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVzPXt0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17dGhpcy5zdGF0ZS5tdWx0aXBsZVZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGVkVmFsdWVzQ2hhbmdlPXt0aGlzLnNlbGVjdGVkVmFsdWVzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlczogW3sgdmFsdWU6ICdPbmUgb3B0aW9uJyB9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGVzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydEcm9wZG93bid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWREZWZhdWx0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3cgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtci0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bm90aWZpY2F0aW9uczwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNvdW50PXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWVudUNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QXJyb3c9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JdGVtPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgbXItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydTdHJpbmcgaGVhZGVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNvdW50PXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWVudUNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkl0ZW08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuZHJvcGRvd25GdW5jdGlvbkhlYWRlclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmZ1bmN0aW9uSGVhZGVyQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRnVuY3Rpb24gaGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Fycm93PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnVDbGFzc05hbWU9XCJwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JdGVtPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVZhbGlkYXRpb25TdW1tYXJ5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEeW5hbWljU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0RGlzYWJsZXNJbnB1dHM9e3RoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3ByaW1hcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbENsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDbGFzc05hbWU9XCJidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nQ2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDaGlsZHJlbj17J0Vycm9yJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nQ2hpbGRyZW49eydXb3JraW5nIG9uIGl0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm09e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWpheCBFcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0R5bmFtaWNTdWJtaXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEeW5hbWljU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0RGlzYWJsZXNJbnB1dHM9e3RoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsQ2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZ0NsYXNzTmFtZT1cImJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDbGFzc05hbWU9XCJidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZ0NoaWxkcmVuPXsnV29ya2luZyBvbiBpdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NoaWxkcmVuPXsnVGhhdCB3b3JrZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZHluYW1pY1N1Ym1pdEVycm9yRm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm09e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWpheCBTdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHluYW1pY1N1Ym1pdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybVJlZiA9IChlbDogRm9ybSkgPT4gKHRoaXMuZm9ybSA9IGVsKTtcclxuXHJcbiAgcHJpdmF0ZSBkcm9wZG93bkZ1bmN0aW9uSGVhZGVyUmVmID0gKGVsOiBEcm9wZG93bikgPT5cclxuICAgICh0aGlzLmRyb3Bkb3duRnVuY3Rpb25IZWFkZXIgPSBlbCk7XHJcblxyXG4gIHByaXZhdGUgZnVuY3Rpb25IZWFkZXJDbGljayA9ICgpID0+XHJcbiAgICB0aGlzLmRyb3Bkb3duRnVuY3Rpb25IZWFkZXIuc2hvd05hdmlnYXRpb24oKTtcclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RlZFZhbHVlc0NoYW5nZWQgPSAoc2VsZWN0ZWRWYWx1ZXM6IFNlbGVjdFZhbHVlW10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRWYWx1ZXMgfSk7XHJcblxyXG4gIHByaXZhdGUgdGFnc0NoYW5nZWQgPSAodGFnczogVGFnW10pID0+IHRoaXMuc2V0U3RhdGUoeyB0YWdzIH0pO1xyXG5cclxuICBwcml2YXRlIG11bHRpcGxlUmVhZG9ubHlDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtdWx0aXBsZVJlYWRvbmx5OiAhdGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5IH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc1NwZWNpYWxDaGFuZ2VkID0gKGRheXM6IE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmpbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnNTcGVjaWFsOiBkYXlzIH0pO1xyXG5cclxuICBwcml2YXRlIHNwZWNpYWxEYXlzQWRkQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgb3BlbmluZ0hvdXJzU3BlY2lhbDogdGhpcy5zdGF0ZS5vcGVuaW5nSG91cnNTcGVjaWFsLmNvbmNhdChbXHJcbiAgICAgICAgICB7IGRhdGU6IHVuZGVmaW5lZCwgdGltZXM6IFtdIH0sXHJcbiAgICAgICAgXSksXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMuc3BlY2lhbERheXNJbnB1dEhlYWRlci5jdXJyZW50LmV4cGFuZCgpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb3BlbmluZ0hvdXJzV2Vla1N0YW5kYXJkRGF5Q2hhbmdlZCA9IChkYXk6IE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmopID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmluZ0hvdXJzV2Vla0RheTogZGF5IH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc1dlZWtDaGFuZ2VkID0gKGRheXM6IE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmpbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnNXZWVrOiBkYXlzIH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc0NoYW5nZWQgPSAob3BlbmluZ0hvdXJzOiBPcGVuaW5nSG91cnNEYXlPYmopID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmluZ0hvdXJzOiBvcGVuaW5nSG91cnMgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZTJDaGFuZ2VkID0gKHRpbWU6IER1cmF0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgdGltZTI6IHRpbWUgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZTFDaGFuZ2VkID0gKHRpbWU6IER1cmF0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgdGltZTE6IHRpbWUgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZVNwYW5DaGFuZ2VkID0gKHRpbWVTcGFuOiBEdXJhdGlvbikgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpbWVTcGFuIH0pO1xyXG5cclxuICBwcml2YXRlIHByaWNlczJDaGFuZ2VkID0gKHByaWNlczogTW9uZXlXaXRoQ3VycmVuY3lbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZXMyOiBwcmljZXMgfSk7XHJcblxyXG4gIHByaXZhdGUgcHJpY2VzM0NoYW5nZWQgPSAocHJpY2VzOiBNb25leVdpdGhDdXJyZW5jeVtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlczM6IHByaWNlcyB9KTtcclxuXHJcbiAgcHJpdmF0ZSBwcmljZXMxQ2hhbmdlZCA9IChwcmljZXM6IE1vbmV5V2l0aEN1cnJlbmN5W10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2VzMTogcHJpY2VzIH0pO1xyXG5cclxuICBwcml2YXRlIG1pbjFDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1pbjE6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIGFnZUNoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWdlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB3ZWJzaXRlQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJzaXRlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBlbWFpbENoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIHRleHRBcmVhQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0QXJlYVRleHQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIG5hbWVDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIGNoZWNrYm94MkNoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrYm94MjogIXRoaXMuc3RhdGUuY2hlY2tib3gyIH0pO1xyXG5cclxuICBwcml2YXRlIGNoZWNrYm94MUNoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrYm94MTogIXRoaXMuc3RhdGUuY2hlY2tib3gxIH0pO1xyXG5cclxuICBwcml2YXRlIGRyaW5rc0NoZWNrZWQgPSAodmFsdWU6IHN0cmluZykgPT4gdGhpcy5zZXRTdGF0ZSh7IGRyaW5rOiB2YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB1blRvdWNoQWxsID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvcm0udW5Ub3VjaEFsbCgpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgc2ltdWxhdGVVbm1vdW50Q2hlY2tlZCA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2ltdWxhdGVVbm1vdW50OiAhdGhpcy5zdGF0ZS5zaW11bGF0ZVVubW91bnQgfSk7XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZXNJbnB1dHNDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJtaXREaXNhYmxlc0lucHV0czogIXRoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHMgfSk7XHJcblxyXG4gIHByaXZhdGUgdG91Y2hPbkNoZWNrZWQgPSAodmFsdWU6ICdibHVyJyB8ICdmb2N1cycpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdG91Y2hPbjogdmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgZm9ybVZhbGlkYXRpb25Ub2dnbGUgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRlRm9ybVN1Ym1pdDogIXRoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0IH0pO1xyXG5cclxuICBwcml2YXRlIHRvdWNoQWxsID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvcm0udG91Y2hBbGwoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGhhbmRsZUdlbmRlckNoYW5nZShlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKHZhbCA9PT0gJ00nIHx8IHZhbCA9PT0gJ0YnKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5kZXI6IHZhbCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3VibWl0Rm9ybShlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcclxuICAgIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybShcclxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxyXG4gICAgc3VibWl0dGluZzogKCkgPT4gdm9pZCxcclxuICAgIGVycm9yOiAoKSA9PiB2b2lkLFxyXG4gICAgc3VjY2VzczogKCkgPT4gdm9pZCxcclxuICAgIHJlc2V0OiAoKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzdWJtaXR0aW5nKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZXJyb3IoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNldCgpLCAzMDAwKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkeW5hbWljU3VibWl0RXJyb3JGb3JtKFxyXG4gICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4sXHJcbiAgICBzdWJtaXR0aW5nOiAoKSA9PiB2b2lkLFxyXG4gICAgZXJyb3I6ICgpID0+IHZvaWQsXHJcbiAgICBzdWNjZXNzOiAoKSA9PiB2b2lkLFxyXG4gICAgcmVzZXQ6ICgpID0+IHZvaWRcclxuICApIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHN1Ym1pdHRpbmcoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzdWNjZXNzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzZXQoKSwgMzAwMCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9