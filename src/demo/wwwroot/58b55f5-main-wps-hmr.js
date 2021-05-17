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
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "p-3 buttons-row"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
        className: "text-center"
      }, "Text"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        text: true,
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
        fetchExistingTags: function fetchExistingTags(startsWith) {
          return new Promise(function (resolve) {
            return setTimeout(function () {
              return resolve(existingTags.filter(function (e) {
                return e.name.includes(startsWith);
              }));
            }, 1000);
          });
        },
        readOnly: this.state.multipleReadonly,
        tags: this.state.tags,
        onTagsChanged: this.tagsChanged,
        filterExistingTags: function filterExistingTags(t, tags) {
          return tags;
        }
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
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](ButtonsShowcase, {
        dropdown: true,
        className: ""
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "position-relative mr-3",
        header: 'String header',
        notificationCount: 5,
        submenuClassName: "p-2"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", null, "Item")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
        className: "position-relative",
        header: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Button"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DbGllbnRBcHAvcGFnZXMvYmFzaWMvQmFzaWMudHN4Il0sIm5hbWVzIjpbIkFnZVZhbGlkYXRvciIsInZhbHVlIiwiaXNSZXF1aXJlZCIsImFkZEVycm9yIiwibnVtIiwiTnVtYmVyIiwiaXNOYU4iLCJpbnN0YW5jZSIsImV4aXN0aW5nVGFncyIsImlkIiwibmFtZSIsImN1cnJlbmNpZXMxIiwibGFiZWwiLCJjdXJyZW5jaWVzMiIsImN1cnJlbmNpZXMzIiwiZm9yY2VTZWxlY3RlZCIsImdlbmRlclZhbHVlcyIsInRhZ3NFbWFpbFRleHRQcm9wcyIsInZhbGlkYXRvcnMiLCJlbWFpbFZhbGlkYXRvcnMiLCJ1cmxWYWxpZGF0b3JzIiwiY3VzdG9tQWdlVmFsaWRhdG9yIiwiY3VzdG9tTnVtYmVyVmFsaWRhdG9yIiwiTnVtYmVyVmFsaWRhdG9yIiwibWluIiwidHlwZXMiLCJCdXR0b25zU2hvd2Nhc2UiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsIkJhc2ljIiwiZm9ybSIsInNwZWNpYWxEYXlzSW5wdXRIZWFkZXIiLCJpbml0aWFsU3RhdGUiLCJnZW5kZXIiLCJlbWFpbCIsImFnZSIsIm1pbjEiLCJjaGVja2JveDEiLCJjaGVja2JveDIiLCJ2YWxpZGF0ZUZvcm1TdWJtaXQiLCJmb29kIiwiZHJpbmsiLCJ0b3VjaE9uIiwic3VibWl0RGlzYWJsZXNJbnB1dHMiLCJzaW11bGF0ZVVubW91bnQiLCJwcmljZXMxIiwicHJpY2VzMiIsInByaWNlczMiLCJ0aW1lU3BhbiIsImR1cmF0aW9uIiwidGltZTEiLCJ0aW1lMiIsIm9wZW5pbmdIb3VycyIsInRpbWVzIiwib3BlbmluZ0hvdXJzV2VlayIsIm9wZW5pbmdIb3Vyc1dlZWtEYXkiLCJvcGVuaW5nSG91cnNTcGVjaWFsIiwid2Vic2l0ZSIsInRhZ3MiLCJzZWxlY3RlZFZhbHVlcyIsIm11bHRpcGxlVmFsdWVzIiwibXVsdGlwbGVSZWFkb25seSIsInRleHRBcmVhVGV4dCIsImZvcm1SZWYiLCJlbCIsInNlbGVjdGVkVmFsdWVzQ2hhbmdlZCIsInNldFN0YXRlIiwidGFnc0NoYW5nZWQiLCJtdWx0aXBsZVJlYWRvbmx5Q2hlY2tlZCIsInN0YXRlIiwib3BlbmluZ0hvdXJzU3BlY2lhbENoYW5nZWQiLCJkYXlzIiwic3BlY2lhbERheXNBZGRDbGljayIsImNvbmNhdCIsImRhdGUiLCJ1bmRlZmluZWQiLCJjdXJyZW50IiwiZXhwYW5kIiwib3BlbmluZ0hvdXJzV2Vla1N0YW5kYXJkRGF5Q2hhbmdlZCIsImRheSIsIm9wZW5pbmdIb3Vyc1dlZWtDaGFuZ2VkIiwib3BlbmluZ0hvdXJzQ2hhbmdlZCIsInRpbWUyQ2hhbmdlZCIsInRpbWUiLCJ0aW1lMUNoYW5nZWQiLCJ0aW1lU3BhbkNoYW5nZWQiLCJwcmljZXMyQ2hhbmdlZCIsInByaWNlcyIsInByaWNlczNDaGFuZ2VkIiwicHJpY2VzMUNoYW5nZWQiLCJtaW4xQ2hhbmdlZCIsImUiLCJ0YXJnZXQiLCJhZ2VDaGFuZ2VkIiwid2Vic2l0ZUNoYW5nZWQiLCJlbWFpbENoYW5nZWQiLCJ0ZXh0QXJlYUNoYW5nZWQiLCJuYW1lQ2hhbmdlZCIsImNoZWNrYm94MkNoZWNrZWQiLCJjaGVja2JveDFDaGVja2VkIiwiZHJpbmtzQ2hlY2tlZCIsInVuVG91Y2hBbGwiLCJwcmV2ZW50RGVmYXVsdCIsInNpbXVsYXRlVW5tb3VudENoZWNrZWQiLCJkaXNhYmxlc0lucHV0c0NoZWNrZWQiLCJ0b3VjaE9uQ2hlY2tlZCIsImZvcm1WYWxpZGF0aW9uVG9nZ2xlIiwidG91Y2hBbGwiLCJoYW5kbGVHZW5kZXJDaGFuZ2UiLCJiaW5kIiwic3VibWl0Rm9ybSIsImR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybSIsImR5bmFtaWNTdWJtaXRFcnJvckZvcm0iLCJSZWFjdCIsInRpbWUyTWF4IiwiYWRkIiwidGltZTJNaW4iLCJzdWJ0cmFjdCIsIlRpbWVTcGFuVW5pdCIsIkhvdXIiLCJNaW51dGUiLCJwbGFjZWhvbGRlciIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInQiLCJjb25zb2xlIiwid2FybiIsInZhbCIsInN1Ym1pdHRpbmciLCJlcnJvciIsInN1Y2Nlc3MiLCJyZXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBb0NBO0FBb0NPLElBQU1BLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSw2QkFHSUMsS0FISixFQUlJQyxVQUpKLEVBS0lDLFFBTEosRUFNYTtBQUNULFVBQUlDLEdBQUcsR0FBR0MsTUFBTSxDQUFDSixLQUFELENBQWhCOztBQUNBLFVBQUksQ0FBQ0ssS0FBSyxDQUFDRixHQUFELENBQVYsRUFBaUI7QUFDZixZQUFJQSxHQUFHLElBQUksQ0FBWCxFQUFjO0FBQ1pELGtCQUFRLENBQUMsZUFBRCxDQUFSO0FBQ0EsaUJBQU8sS0FBUDtBQUNEOztBQUNELFlBQUlDLEdBQUcsR0FBRyxHQUFWLEVBQWU7QUFDYkQsa0JBQVEsQ0FBQyxvQ0FBRCxDQUFSO0FBQ0EsaUJBQU8sS0FBUDtBQUNEOztBQUNELGVBQU8sSUFBUDtBQUNELE9BVkQsTUFVTztBQUNMQSxnQkFBUSxDQUFDLGFBQUQsQ0FBUjtBQUNEOztBQUNELGFBQU8sS0FBUDtBQUNEO0FBdEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFhSCxZLENBQ0dPLFEsR0FBVyxJQUFJUCxZQUFKLEU7QUF3QjNCLElBQU1RLFlBQW1CLEdBQUcsQ0FDMUI7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FEMEIsRUFLMUI7QUFDRUQsSUFBRSxFQUFFLENBRE47QUFFRUMsTUFBSSxFQUFFO0FB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SUMsT0F6eEJKLEVBMHhCSUMsS0ExeEJKLEVBMnhCSTtBQUNBNUMsT0FBQyxDQUFDVyxjQUFGO0FBQ0E4QixnQkFBVTtBQUNWUCxnQkFBVSxDQUFDLFlBQU07QUFDZlMsZUFBTztBQUNQVCxrQkFBVSxDQUFDO0FBQUEsaUJBQU1VLEtBQUssRUFBWDtBQUFBLFNBQUQsRUFBZ0IsSUFBaEIsQ0FBVjtBQUNELE9BSFMsRUFHUCxJQUhPLENBQVY7QUFJRDtBQWx5Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEVBQTJCdEIsbURBQTNCO2VBcXlCZXBGLEs7QUFBQTs7Ozs7Ozs7OzswQkFuNkJGcEMsWTswQkF5QlBRLFk7MEJBMkJBRyxXOzBCQUtBRSxXOzBCQU1BQyxXOzBCQU1BRSxZOzBCQUtBQyxrQjswQkFJQUUsZTswQkFFQUMsYTswQkFFQUMsa0I7MEJBRUFDLHFCOzBCQUlBRyxLOzBCQVVBQyxlOzBCQTRCT1UsSyIsImZpbGUiOiI1OGI1NWY1LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBEcm9wZG93bixcclxuICBGb3JtLFxyXG4gIFRpbWUsXHJcbiAgVGV4dCxcclxuICBTZWxlY3QsXHJcbiAgU3VibWl0LFxyXG4gIER5bmFtaWNTdWJtaXQsXHJcbiAgQ2hlY2tib3gsXHJcbiAgUmFkaW8sXHJcbiAgUmFkaW9Db250YWluZXIsXHJcbiAgTW9uZXksXHJcbiAgT3BlbmluZ0hvdXJzRGF5LFxyXG4gIE1vbmV5V2l0aEN1cnJlbmN5LFxyXG4gIE9wZW5pbmdIb3Vyc0RheU9iaixcclxuICBPcGVuaW5nSG91cnNXZWVrLFxyXG4gIE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmosXHJcbiAgT3BlbmluZ0hvdXJzU3BlY2lhbCxcclxuICBJbnB1dEhlYWRlcixcclxuICBCdXR0b24sXHJcbiAgQnV0dG9uVHlwZXMsXHJcbiAgVGFncyxcclxuICBUYWcsXHJcbiAgTnVtYmVyVmFsaWRhdG9yLFxyXG4gIFRleHRBcmVhLFxyXG4gIE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmosXHJcbiAgU2VsZWN0VmFsdWUsXHJcbiAgVGV4dFByb3BzLFxyXG4gIFZhbGlkYXRvclR5cGVzLFxyXG4gIElCYXNlVmFsaWRhdG9yLFxyXG4gIEJ1dHRvblByb3BzLFxyXG4gIEZvcm1WYWxpZGF0aW9uU3VtbWFyeSxcclxuICBJbnB1dEhlYWRlclJhdyxcclxuICBUaW1lU3BhbixcclxuICBUaW1lU3BhblVuaXQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2luZGV4JztcclxuaW1wb3J0IHsgRHVyYXRpb24sIGR1cmF0aW9uIH0gZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzaWNQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNpY1N0YXRlIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZ2VuZGVyOiAnTScgfCAnRicgfCAnJztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGFnZTogc3RyaW5nO1xyXG4gIG1pbjE6IHN0cmluZztcclxuICBjaGVja2JveDE6IGJvb2xlYW47XHJcbiAgY2hlY2tib3gyOiBib29sZWFuO1xyXG4gIHZhbGlkYXRlRm9ybVN1Ym1pdDogYm9vbGVhbjtcclxuICBmb29kOiBzdHJpbmc7XHJcbiAgZHJpbms6IHN0cmluZztcclxuICB0b3VjaE9uOiAnYmx1cicgfCAnZm9jdXMnO1xyXG4gIHN1Ym1pdERpc2FibGVzSW5wdXRzOiBib29sZWFuO1xyXG4gIHNpbXVsYXRlVW5tb3VudDogYm9vbGVhbjtcclxuICBwcmljZXMxOiBNb25leVdpdGhDdXJyZW5jeVtdO1xyXG4gIHByaWNlczI6IE1vbmV5V2l0aEN1cnJlbmN5W107XHJcbiAgcHJpY2VzMzogTW9uZXlXaXRoQ3VycmVuY3lbXTtcclxuICB0aW1lMTogRHVyYXRpb247XHJcbiAgdGltZTI6IER1cmF0aW9uO1xyXG4gIHRpbWVTcGFuOiBEdXJhdGlvbjtcclxuICBvcGVuaW5nSG91cnM6IE9wZW5pbmdIb3Vyc0RheU9iajtcclxuICBvcGVuaW5nSG91cnNXZWVrOiBPcGVuaW5nSG91cnNXZWVrRGF5T2JqW107XHJcbiAgb3BlbmluZ0hvdXJzV2Vla0RheTogT3BlbmluZ0hvdXJzRGF5T2JqO1xyXG4gIG9wZW5pbmdIb3Vyc1NwZWNpYWw6IE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmpbXTtcclxuICB3ZWJzaXRlOiBzdHJpbmc7XHJcbiAgdGFnczogVGFnW107XHJcbiAgc2VsZWN0ZWRWYWx1ZXM6IFNlbGVjdFZhbHVlW107XHJcbiAgbXVsdGlwbGVWYWx1ZXM6IFNlbGVjdFZhbHVlW107XHJcbiAgbXVsdGlwbGVSZWFkb25seTogYm9vbGVhbjtcclxuICB0ZXh0QXJlYVRleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFnZVZhbGlkYXRvciB7XHJcbiAgcHVibGljIHN0YXRpYyBpbnN0YW5jZSA9IG5ldyBBZ2VWYWxpZGF0b3IoKTtcclxuICBwdWJsaWMgVmFsaWRhdGUoXHJcbiAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgaXNSZXF1aXJlZDogYm9vbGVhbixcclxuICAgIGFkZEVycm9yOiAoZXJyb3I6IHN0cmluZykgPT4gdm9pZFxyXG4gICk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IG51bSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICBpZiAoIWlzTmFOKG51bSkpIHtcclxuICAgICAgaWYgKG51bSA8PSAwKSB7XHJcbiAgICAgICAgYWRkRXJyb3IoJ05vdCBib3JuIHlldD8nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bSA+IDEyMikge1xyXG4gICAgICAgIGFkZEVycm9yKCdPbGRlciB0aGFuIEplYW5uZSBDYWxtZW50PyBSZWFsbHk/Jyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWRkRXJyb3IoJ0ludmFsaWQgYWdlJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBleGlzdGluZ1RhZ3M6IFRhZ1tdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogJ0Zvb2QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiAnRHJpbmsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiAnQmVlcicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6ICdXaW5lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgbmFtZTogJ0dsdXRlbiBmcmVlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgbmFtZTogJ0ZydWl0JyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VycmVuY2llczEgPSBbXHJcbiAgeyBsYWJlbDogJ0dCUCcsIHZhbHVlOiAnR0JQJyB9LFxyXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUicgfSxcclxuXTtcclxuXHJcbmNvbnN0IGN1cnJlbmNpZXMyID0gW1xyXG4gIHsgbGFiZWw6ICdHQlAnLCB2YWx1ZTogJ0dCUCcgfSxcclxuICB7IGxhYmVsOiAnRVVSJywgdmFsdWU6ICdFVVInIH0sXHJcbiAgeyBsYWJlbDogJ1VTRCcsIHZhbHVlOiAnVVNEJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VycmVuY2llczMgPSBbXHJcbiAgeyBsYWJlbDogJ0dCUCcsIHZhbHVlOiAnR0JQJywgZm9yY2VTZWxlY3RlZDogdHJ1ZSB9LFxyXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUicgfSxcclxuICB7IGxhYmVsOiAnVVNEJywgdmFsdWU6ICdVU0QnIH0sXHJcbl07XHJcblxyXG5jb25zdCBnZW5kZXJWYWx1ZXMgPSBbXHJcbiAgeyB2YWx1ZTogJ00nLCBsYWJlbDogJ01hbGUnIH0sXHJcbiAgeyB2YWx1ZTogJ0YnLCBsYWJlbDogJ0ZlbWFsZScgfSxcclxuXTtcclxuXHJcbmNvbnN0IHRhZ3NFbWFpbFRleHRQcm9wczogVGV4dFByb3BzID0ge1xyXG4gIHZhbGlkYXRvcnM6IFsnZW1haWwnXSxcclxufTtcclxuXHJcbmNvbnN0IGVtYWlsVmFsaWRhdG9yczogVmFsaWRhdG9yVHlwZXNbXSA9IFsnZW1haWwnXTtcclxuXHJcbmNvbnN0IHVybFZhbGlkYXRvcnM6IFZhbGlkYXRvclR5cGVzW10gPSBbJ3VybCddO1xyXG5cclxuY29uc3QgY3VzdG9tQWdlVmFsaWRhdG9yOiBJQmFzZVZhbGlkYXRvcltdID0gW0FnZVZhbGlkYXRvci5pbnN0YW5jZV07XHJcblxyXG5jb25zdCBjdXN0b21OdW1iZXJWYWxpZGF0b3I6IElCYXNlVmFsaWRhdG9yW10gPSBbXHJcbiAgbmV3IE51bWJlclZhbGlkYXRvcih7IG1pbjogMCB9KSxcclxuXTtcclxuXHJcbmNvbnN0IHR5cGVzOiBCdXR0b25UeXBlc1tdID0gW1xyXG4gICdwcmltYXJ5JyxcclxuICAnd2FybmluZycsXHJcbiAgJ2Vycm9yJyxcclxuICAnaW5mbycsXHJcbiAgJ3N1Y2Nlc3MnLFxyXG4gICdncmF5JyxcclxuICAnd2hpdGUnLFxyXG4gICdub25lJyxcclxuXTtcclxuY29uc3QgQnV0dG9uc1Nob3djYXNlOiBSZWFjdC5TRkM8QnV0dG9uUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInB4LTJcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsIDI0NywgMjQ3KScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHt0eXBlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPXtpdGVtfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPXtpdGVtfSBkaXNhYmxlZD17dHJ1ZX0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAgRGlzYWJsZWRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkJ1dHRvbnNTaG93Y2FzZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lOiAnbXktMiBtci0yJyxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNpYyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QmFzaWNQcm9wcywgQmFzaWNTdGF0ZT4ge1xyXG4gIHByaXZhdGUgZm9ybTogRm9ybTtcclxuXHJcbiAgcHJpdmF0ZSBzcGVjaWFsRGF5c0lucHV0SGVhZGVyOiBSZWFjdC5SZWZPYmplY3Q8SW5wdXRIZWFkZXJSYXc+O1xyXG5cclxuICBwcml2YXRlIGluaXRpYWxTdGF0ZTogQmFzaWNTdGF0ZSA9IHtcclxuICAgIGdlbmRlcjogJycsXHJcbiAgICBuYW1lOiAnVGVzdCcsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBhZ2U6ICcnLFxyXG4gICAgbWluMTogJycsXHJcbiAgICBjaGVja2JveDE6IHRydWUsXHJcbiAgICBjaGVja2JveDI6IGZhbHNlLFxyXG4gICAgdmFsaWRhdGVGb3JtU3VibWl0OiB0cnVlLFxyXG4gICAgZm9vZDogJ2JyZWFrZmFzdCcsXHJcbiAgICBkcmluazogJ2JyZWFrZmFzdCcsXHJcbiAgICB0b3VjaE9uOiAnZm9jdXMnLFxyXG4gICAgc3VibWl0RGlzYWJsZXNJbnB1dHM6IHRydWUsXHJcbiAgICBzaW11bGF0ZVVubW91bnQ6IGZhbHNlLFxyXG4gICAgcHJpY2VzMTogW10sXHJcbiAgICBwcmljZXMyOiBbXSxcclxuICAgIHByaWNlczM6IFtdLFxyXG4gICAgdGltZVNwYW46IGR1cmF0aW9uKDApLFxyXG4gICAgdGltZTE6IGR1cmF0aW9uKDApLFxyXG4gICAgdGltZTI6IGR1cmF0aW9uKDApLFxyXG4gICAgb3BlbmluZ0hvdXJzOiB7XHJcbiAgICAgIHRpbWVzOiBbXSxcclxuICAgIH0sXHJcbiAgICBvcGVuaW5nSG91cnNXZWVrOiBbXSxcclxuICAgIG9wZW5pbmdIb3Vyc1dlZWtEYXk6IHtcclxuICAgICAgdGltZXM6IFtdLFxyXG4gICAgfSxcclxuICAgIG9wZW5pbmdIb3Vyc1NwZWNpYWw6IFtdLFxyXG4gICAgd2Vic2l0ZTogJycsXHJcbiAgICB0YWdzOiBbXSxcclxuICAgIHNlbGVjdGVkVmFsdWVzOiBbXSxcclxuICAgIG11bHRpcGxlVmFsdWVzOiBbXHJcbiAgICAgIHsgdmFsdWU6ICdPbmUgb3B0aW9uJyB9LFxyXG4gICAgICB7IHZhbHVlOiAnU2Vjb25kIG9wdGlvbicgfSxcclxuICAgICAgeyB2YWx1ZTogJ1RoaXJkIG9wdGlvbicgfSxcclxuICAgICAgeyB2YWx1ZTogJ29uZSBtb3JlIG9wdGlvbicgfSxcclxuICAgICAgeyB2YWx1ZTogJ3JseSBsb25nIGxhc3Qgb3B0aW9uJyB9LFxyXG4gICAgXSxcclxuICAgIG11bHRpcGxlUmVhZG9ubHk6IGZhbHNlLFxyXG4gICAgdGV4dEFyZWFUZXh0OiAnJyxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogQmFzaWNQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5pdGlhbFN0YXRlO1xyXG4gICAgdGhpcy5oYW5kbGVHZW5kZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZUdlbmRlckNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zdWJtaXRGb3JtID0gdGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybSA9IHRoaXMuZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmR5bmFtaWNTdWJtaXRFcnJvckZvcm0gPSB0aGlzLmR5bmFtaWNTdWJtaXRFcnJvckZvcm0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3BlY2lhbERheXNJbnB1dEhlYWRlciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIGxldCB0aW1lMk1heCA9IGR1cmF0aW9uKClcclxuICAgICAgLmFkZCgxLCAnaG91cicpXHJcbiAgICAgIC5hZGQoNSwgJ21pbnV0ZXMnKTtcclxuICAgIGxldCB0aW1lMk1pbiA9IGR1cmF0aW9uKClcclxuICAgICAgLnN1YnRyYWN0KDEsICdob3VyJylcclxuICAgICAgLnN1YnRyYWN0KDUsICdtaW51dGVzJyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyAgbXQtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZT17dHJ1ZX0gY2xhc3NOYW1lPVwiaW5wdXRfX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUdXJuIGZvcm0gdmFsaWRhdGlvbiBvbiBvciBvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5mb3JtVmFsaWRhdGlvblRvZ2dsZX1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnZhbGlkYXRlRm9ybVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlZhbGlkYXRlIGZvcm0gc3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFJhZGlvQ29udGFpbmVyIHRpdGxlPVwiVG91Y2ggb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3VjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCbHVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLnRvdWNoT25DaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG91Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJmb2N1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZvY3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLnRvdWNoT25DaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvUmFkaW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzYWJsZXMgaW5wdXRzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZGlzYWJsZXNJbnB1dHNDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVubW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5zaW11bGF0ZVVubW91bnRDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuc2ltdWxhdGVVbm1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2ltdWxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG15LTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2FyZCAnfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2sgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuc2ltdWxhdGVVbm1vdW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5mb3JtUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgLypleHRyYUNvbXBvbmVudHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHRlc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50QXBpOiB7fSBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IFsnVGVzdCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdUZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX0qL1xyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBtZC00OFwiPmVkaXQ8L2k+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydFeGFtcGxlIGZvcm0nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3ViVGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkFuZCB0aGlzIGlzIHN1YnRpdGxlLiBUaGVyZSdzIGFsc28gaWNvbiBvbiB0aGUgbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaG93RXhwYW5kQWxsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImhlcm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWREZWZhdWx0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG1haW5CdXR0b249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3ByaW1hcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3VibWl0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm09e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3VibWl0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZXh0cmFCdXR0b25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXsxfSBkcm9wZG93bj17dHJ1ZX0gb25DbGljaz17dGhpcy50b3VjaEFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVG91Y2ggYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnVuVG91Y2hBbGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBVbi10b3VjaCBhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNob3VsZFRvZ2dsZUNvbGxhcHNlT25IZWFkZXJDbGljaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Db250YWluZXIgdGl0bGU9XCJEcmlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2luZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2hpc2tleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaGlza2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3YXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXYXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0NvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRyaW5rcyAoaG9yaXpvbnRhbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmsyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2luZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmsyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndoaXNrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2hpc2tleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmsyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNtYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmNoZWNrYm94MUNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tib3gxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRyZXNzIGNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiV2l0aCB0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCIob3B0aW9uYWwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmNoZWNrYm94MkNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuY2hlY2tib3gyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIldhbGxldCBwYXJraW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm5hbWVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2xlYXJCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgbmFtZTogbnVsbCB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRlc3RcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBuYW1lIChubyB0aXRsZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm5hbWVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBzb21lIGhlbHAgdGV4dC4gSXQgY2FuIGFsc28gZG8gPGI+Ym9sZDwvYj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgb3RoZXIgc3R1ZmYuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubmFtZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTmFtZSByZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J1lvdXIgZ2VuZGVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXtnZW5kZXJWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmRlckNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkdlbmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50ZXh0QXJlYUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRleHRBcmVhVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRleHRBcmVhQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGV4dEFyZWFUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnU29tZSBjb2xsYXBzZWQgc3R1ZmYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkVG9nZ2xlQ29sbGFwc2VPbkhlYWRlckNsaWNrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJUaXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJIZWxwZnVsIHRleHQgdGhhdCBkZXNjcmliZXMgd2hhdCdzIGNvbGxhcHNlZCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiV2l0aCB0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17ZW1haWxWYWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5lbWFpbENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eydZb3UgY2FuIHNlbGVjdCBtZSBidXQgSSBhbSByZWFkb25seSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e3VybFZhbGlkYXRvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2Vic2l0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUud2Vic2l0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy53ZWJzaXRlQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIllvdXIgd2Vic2l0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVZhbGlkYXRvcnM9e2N1c3RvbUFnZVZhbGlkYXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgYWdlIChvcHRpb25hbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5hZ2VDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tVmFsaWRhdG9ycz17Y3VzdG9tTnVtYmVyVmFsaWRhdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWluIDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm1pbjF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubWluMUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb25leVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jaWVzPXtjdXJyZW5jaWVzMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzPXt0aGlzLnN0YXRlLnByaWNlczF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJpY2VzQ2hhbmdlPXt0aGlzLnByaWNlczFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9uZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY2llcz17Y3VycmVuY2llczJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlcz17dGhpcy5zdGF0ZS5wcmljZXMyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QcmljZXNDaGFuZ2U9e3RoaXMucHJpY2VzMkNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJpY2UgbXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb25leVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jaWVzPXtjdXJyZW5jaWVzM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzPXt0aGlzLnN0YXRlLnByaWNlczN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblByaWNlc0NoYW5nZT17dGhpcy5wcmljZXMzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQcmljZSBtdWx0aXBsZSBmb3JjZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17dGhpcy5zdGF0ZS50aW1lMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNoYW5nZT17dGhpcy50aW1lMUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXt0aW1lMk1heH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXt0aW1lMk1pbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXt0aGlzLnN0YXRlLnRpbWUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lQ2hhbmdlPXt0aGlzLnRpbWUyQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJXaXRoIE1pbi9NYXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaW1lU3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVTcGFuPXt0aGlzLnN0YXRlLnRpbWVTcGFufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lU3BhbkNoYW5nZT17dGhpcy50aW1lU3BhbkNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGltZSBzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRVbml0cz17VGltZVNwYW5Vbml0LkhvdXIgfCBUaW1lU3BhblVuaXQuTWludXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPcGVuaW5nSG91cnNEYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydPcGVuaW5nIGhvdXJzIHNhbXBsZSBkYXknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuaW5nSG91cnNDaGFuZ2U9e3RoaXMub3BlbmluZ0hvdXJzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmluZ0hvdXJzPXt0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJPcGVuaW5nIGhvdXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlQ2FwYWNpdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnT3BlbmluZyBob3Vycyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQnV0dG9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9eydwcmltYXJ5J30+SGVybyBidXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUJ1dHRvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT17MX0gZHJvcGRvd249e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXh0cmEgYnV0dG9uIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9ezJ9IGRyb3Bkb3duPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4dHJhIGJ1dHRvbiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3BlbmluZ0hvdXJzV2Vla1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25EYXlzQ2hhbmdlPXt0aGlzLm9wZW5pbmdIb3Vyc1dlZWtDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRheXM9e3RoaXMuc3RhdGUub3BlbmluZ0hvdXJzV2Vla31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFuZGFyZERheT17dGhpcy5zdGF0ZS5vcGVuaW5nSG91cnNXZWVrRGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhbmRhcmREYXlDaGFuZ2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuaW5nSG91cnNXZWVrU3RhbmRhcmREYXlDaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUNhcGFjaXR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1NwZWNpYWwgZGF5cyBvcGVuaW5nIGhvdXJzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5zcGVjaWFsRGF5c0lucHV0SGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQnV0dG9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNwZWNpYWxEYXlzQWRkQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wZW5pbmdIb3Vyc1NwZWNpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGF5c0NoYW5nZT17dGhpcy5vcGVuaW5nSG91cnNTcGVjaWFsQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlzPXt0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc1NwZWNpYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnQnV0dG9ucyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5CdXR0b249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT17J3ByaW1hcnknfT5IZXJvIGJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+U3RhbmRhcmQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Tm8gc2hhZG93PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIG5vU2hhZG93PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5IZXJvPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIGhlcm89e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPk91dGxpbmVkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIG91dGxpbmVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5CbGFuazwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBibGFuaz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+U21hbGw8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2Ugc21hbGw9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkNpcmN1bGFyPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIGNpcmN1bGFyPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Ecm9wZG93bjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBkcm9wZG93bj17dHJ1ZX0gY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+VW5vYnRydXNpdmU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgdW5vYnRydXNpdmU9e3RydWV9IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlRleHQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgdGV4dD17dHJ1ZX0gY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnTXVsdGlwbGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkRGVmYXVsdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsPVwiTXVsdGlwbGUgcmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5tdWx0aXBsZVJlYWRvbmx5Q2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNdWx0aXBsZSByZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQW5kIGxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UHJvcHM9e3sgcGxhY2Vob2xkZXI6ICdXaXRoIHBsYWNlaG9sZGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIHN1Z2dlc3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNob29zZSBvciBjcmVhdGUgdGFnc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hFeGlzdGluZ1RhZ3M9e3N0YXJ0c1dpdGggPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYWdzLmZpbHRlcihlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5uYW1lLmluY2x1ZGVzKHN0YXJ0c1dpdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRXhpc3RpbmdUYWdzPXsodCwgdGFncykgPT4gdGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3Mgc3VnZ2VzdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2hvb3NlIHRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFRhZ3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYWdzPXtleGlzdGluZ1RhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NoaXBzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGFncyBtYXggM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGFncz17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M9e3RoaXMuc3RhdGUudGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhZ3NDaGFuZ2VkPXt0aGlzLnRhZ3NDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDaGlwcz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhZ0NsaWNrPXt0ID0+IGNvbnNvbGUud2Fybih0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3Mgb25seSBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaXRoIGxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUYWdzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudD17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UHJvcHM9e3RhZ3NFbWFpbFRleHRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT25lIG9yIG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTXVsdGlzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRFbXB0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVzPXt0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17dGhpcy5zdGF0ZS5tdWx0aXBsZVZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGVkVmFsdWVzQ2hhbmdlPXt0aGlzLnNlbGVjdGVkVmFsdWVzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlczogW3sgdmFsdWU6ICdPbmUgb3B0aW9uJyB9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGVzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydEcm9wZG93bid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWREZWZhdWx0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3cgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtci0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bm90aWZpY2F0aW9uczwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNvdW50PXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWVudUNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QXJyb3c9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgZHJvcGRvd249e3RydWV9IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnU3RyaW5nIGhlYWRlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25Db3VudD17NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnVDbGFzc05hbWU9XCJwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JdGVtPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPkZ1bmN0aW9uIGhlYWRlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Fycm93PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnVDbGFzc05hbWU9XCJwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JdGVtPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVZhbGlkYXRpb25TdW1tYXJ5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEeW5hbWljU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0RGlzYWJsZXNJbnB1dHM9e3RoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3ByaW1hcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbENsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDbGFzc05hbWU9XCJidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nQ2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDaGlsZHJlbj17J0Vycm9yJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nQ2hpbGRyZW49eydXb3JraW5nIG9uIGl0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm09e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWpheCBFcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0R5bmFtaWNTdWJtaXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEeW5hbWljU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0RGlzYWJsZXNJbnB1dHM9e3RoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsQ2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZ0NsYXNzTmFtZT1cImJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDbGFzc05hbWU9XCJidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZ0NoaWxkcmVuPXsnV29ya2luZyBvbiBpdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NoaWxkcmVuPXsnVGhhdCB3b3JrZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZHluYW1pY1N1Ym1pdEVycm9yRm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm09e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWpheCBTdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHluYW1pY1N1Ym1pdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybVJlZiA9IChlbDogRm9ybSkgPT4gKHRoaXMuZm9ybSA9IGVsKTtcclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RlZFZhbHVlc0NoYW5nZWQgPSAoc2VsZWN0ZWRWYWx1ZXM6IFNlbGVjdFZhbHVlW10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRWYWx1ZXMgfSk7XHJcblxyXG4gIHByaXZhdGUgdGFnc0NoYW5nZWQgPSAodGFnczogVGFnW10pID0+IHRoaXMuc2V0U3RhdGUoeyB0YWdzIH0pO1xyXG5cclxuICBwcml2YXRlIG11bHRpcGxlUmVhZG9ubHlDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtdWx0aXBsZVJlYWRvbmx5OiAhdGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5IH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc1NwZWNpYWxDaGFuZ2VkID0gKGRheXM6IE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmpbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnNTcGVjaWFsOiBkYXlzIH0pO1xyXG5cclxuICBwcml2YXRlIHNwZWNpYWxEYXlzQWRkQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgb3BlbmluZ0hvdXJzU3BlY2lhbDogdGhpcy5zdGF0ZS5vcGVuaW5nSG91cnNTcGVjaWFsLmNvbmNhdChbXHJcbiAgICAgICAgICB7IGRhdGU6IHVuZGVmaW5lZCwgdGltZXM6IFtdIH0sXHJcbiAgICAgICAgXSksXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMuc3BlY2lhbERheXNJbnB1dEhlYWRlci5jdXJyZW50LmV4cGFuZCgpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb3BlbmluZ0hvdXJzV2Vla1N0YW5kYXJkRGF5Q2hhbmdlZCA9IChkYXk6IE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmopID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmluZ0hvdXJzV2Vla0RheTogZGF5IH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc1dlZWtDaGFuZ2VkID0gKGRheXM6IE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmpbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnNXZWVrOiBkYXlzIH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc0NoYW5nZWQgPSAob3BlbmluZ0hvdXJzOiBPcGVuaW5nSG91cnNEYXlPYmopID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmluZ0hvdXJzOiBvcGVuaW5nSG91cnMgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZTJDaGFuZ2VkID0gKHRpbWU6IER1cmF0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgdGltZTI6IHRpbWUgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZTFDaGFuZ2VkID0gKHRpbWU6IER1cmF0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgdGltZTE6IHRpbWUgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZVNwYW5DaGFuZ2VkID0gKHRpbWVTcGFuOiBEdXJhdGlvbikgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpbWVTcGFuIH0pO1xyXG5cclxuICBwcml2YXRlIHByaWNlczJDaGFuZ2VkID0gKHByaWNlczogTW9uZXlXaXRoQ3VycmVuY3lbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZXMyOiBwcmljZXMgfSk7XHJcblxyXG4gIHByaXZhdGUgcHJpY2VzM0NoYW5nZWQgPSAocHJpY2VzOiBNb25leVdpdGhDdXJyZW5jeVtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlczM6IHByaWNlcyB9KTtcclxuXHJcbiAgcHJpdmF0ZSBwcmljZXMxQ2hhbmdlZCA9IChwcmljZXM6IE1vbmV5V2l0aEN1cnJlbmN5W10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2VzMTogcHJpY2VzIH0pO1xyXG5cclxuICBwcml2YXRlIG1pbjFDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1pbjE6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIGFnZUNoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWdlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB3ZWJzaXRlQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJzaXRlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBlbWFpbENoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIHRleHRBcmVhQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0QXJlYVRleHQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIG5hbWVDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIGNoZWNrYm94MkNoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrYm94MjogIXRoaXMuc3RhdGUuY2hlY2tib3gyIH0pO1xyXG5cclxuICBwcml2YXRlIGNoZWNrYm94MUNoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrYm94MTogIXRoaXMuc3RhdGUuY2hlY2tib3gxIH0pO1xyXG5cclxuICBwcml2YXRlIGRyaW5rc0NoZWNrZWQgPSAodmFsdWU6IHN0cmluZykgPT4gdGhpcy5zZXRTdGF0ZSh7IGRyaW5rOiB2YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB1blRvdWNoQWxsID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvcm0udW5Ub3VjaEFsbCgpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgc2ltdWxhdGVVbm1vdW50Q2hlY2tlZCA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2ltdWxhdGVVbm1vdW50OiAhdGhpcy5zdGF0ZS5zaW11bGF0ZVVubW91bnQgfSk7XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZXNJbnB1dHNDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJtaXREaXNhYmxlc0lucHV0czogIXRoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHMgfSk7XHJcblxyXG4gIHByaXZhdGUgdG91Y2hPbkNoZWNrZWQgPSAodmFsdWU6ICdibHVyJyB8ICdmb2N1cycpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdG91Y2hPbjogdmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgZm9ybVZhbGlkYXRpb25Ub2dnbGUgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRlRm9ybVN1Ym1pdDogIXRoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0IH0pO1xyXG5cclxuICBwcml2YXRlIHRvdWNoQWxsID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvcm0udG91Y2hBbGwoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGhhbmRsZUdlbmRlckNoYW5nZShlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKHZhbCA9PT0gJ00nIHx8IHZhbCA9PT0gJ0YnKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5kZXI6IHZhbCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3VibWl0Rm9ybShlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcclxuICAgIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybShcclxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxyXG4gICAgc3VibWl0dGluZzogKCkgPT4gdm9pZCxcclxuICAgIGVycm9yOiAoKSA9PiB2b2lkLFxyXG4gICAgc3VjY2VzczogKCkgPT4gdm9pZCxcclxuICAgIHJlc2V0OiAoKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzdWJtaXR0aW5nKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZXJyb3IoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNldCgpLCAzMDAwKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkeW5hbWljU3VibWl0RXJyb3JGb3JtKFxyXG4gICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4sXHJcbiAgICBzdWJtaXR0aW5nOiAoKSA9PiB2b2lkLFxyXG4gICAgZXJyb3I6ICgpID0+IHZvaWQsXHJcbiAgICBzdWNjZXNzOiAoKSA9PiB2b2lkLFxyXG4gICAgcmVzZXQ6ICgpID0+IHZvaWRcclxuICApIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHN1Ym1pdHRpbmcoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzdWNjZXNzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzZXQoKSwgMzAwMCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9