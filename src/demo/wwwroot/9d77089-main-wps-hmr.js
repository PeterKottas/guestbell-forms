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
      time1: new Date(),
      time2: new Date(),
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

      var time2Max = new Date();
      time2Max.setHours(time2Max.getHours() + 1);
      time2Max.setMinutes(time2Max.getMinutes() + 5);
      var time2Min = new Date();
      time2Min.setHours(time2Min.getHours() - 1);
      time2Min.setMinutes(time2Min.getMinutes() - 5);
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
        subTitle: "Helpful text that describes what's collapsed here"
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
        title: "Age"
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
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["OpeningHoursDay"], {
        label: 'Opening hours sample day',
        touchOn: this.state.touchOn,
        required: false,
        onOpeningHoursChange: this.openingHoursChanged,
        openingHours: this.state.openingHours,
        title: "Opening hours"
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
        onStandardDayChange: this.openingHoursWeekStandardDayChanged
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DbGllbnRBcHAvcGFnZXMvYmFzaWMvQmFzaWMudHN4Il0sIm5hbWVzIjpbIkFnZVZhbGlkYXRvciIsInZhbHVlIiwiaXNSZXF1aXJlZCIsImFkZEVycm9yIiwibnVtIiwiTnVtYmVyIiwiaXNOYU4iLCJpbnN0YW5jZSIsImV4aXN0aW5nVGFncyIsImlkIiwibmFtZSIsImN1cnJlbmNpZXMxIiwibGFiZWwiLCJjdXJyZW5jaWVzMiIsImN1cnJlbmNpZXMzIiwiZm9yY2VTZWxlY3RlZCIsImdlbmRlclZhbHVlcyIsInRhZ3NFbWFpbFRleHRQcm9wcyIsInZhbGlkYXRvcnMiLCJlbWFpbFZhbGlkYXRvcnMiLCJ1cmxWYWxpZGF0b3JzIiwiY3VzdG9tQWdlVmFsaWRhdG9yIiwiY3VzdG9tTnVtYmVyVmFsaWRhdG9yIiwiTnVtYmVyVmFsaWRhdG9yIiwibWluIiwidHlwZXMiLCJCdXR0b25zU2hvd2Nhc2UiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsIkJhc2ljIiwiZm9ybSIsInNwZWNpYWxEYXlzSW5wdXRIZWFkZXIiLCJkcm9wZG93bkZ1bmN0aW9uSGVhZGVyIiwiaW5pdGlhbFN0YXRlIiwiZ2VuZGVyIiwiZW1haWwiLCJhZ2UiLCJtaW4xIiwiY2hlY2tib3gxIiwiY2hlY2tib3gyIiwidmFsaWRhdGVGb3JtU3VibWl0IiwiZm9vZCIsImRyaW5rIiwidG91Y2hPbiIsInN1Ym1pdERpc2FibGVzSW5wdXRzIiwic2ltdWxhdGVVbm1vdW50IiwicHJpY2VzMSIsInByaWNlczIiLCJwcmljZXMzIiwidGltZTEiLCJEYXRlIiwidGltZTIiLCJvcGVuaW5nSG91cnMiLCJ0aW1lcyIsIm9wZW5pbmdIb3Vyc1dlZWsiLCJvcGVuaW5nSG91cnNXZWVrRGF5Iiwib3BlbmluZ0hvdXJzU3BlY2lhbCIsIndlYnNpdGUiLCJ0YWdzIiwic2VsZWN0ZWRWYWx1ZXMiLCJtdWx0aXBsZVZhbHVlcyIsIm11bHRpcGxlUmVhZG9ubHkiLCJ0ZXh0QXJlYVRleHQiLCJmb3JtUmVmIiwiZWwiLCJkcm9wZG93bkZ1bmN0aW9uSGVhZGVyUmVmIiwiZnVuY3Rpb25IZWFkZXJDbGljayIsInNob3dOYXZpZ2F0aW9uIiwic2VsZWN0ZWRWYWx1ZXNDaGFuZ2VkIiwic2V0U3RhdGUiLCJ0YWdzQ2hhbmdlZCIsIm11bHRpcGxlUmVhZG9ubHlDaGVja2VkIiwic3RhdGUiLCJvcGVuaW5nSG91cnNTcGVjaWFsQ2hhbmdlZCIsImRheXMiLCJzcGVjaWFsRGF5c0FkZENsaWNrIiwiY29uY2F0IiwiZGF0ZSIsInVuZGVmaW5lZCIsImN1cnJlbnQiLCJleHBhbmQiLCJvcGVuaW5nSG91cnNXZWVrU3RhbmRhcmREYXlDaGFuZ2VkIiwiZGF5Iiwib3BlbmluZ0hvdXJzV2Vla0NoYW5nZWQiLCJvcGVuaW5nSG91cnNDaGFuZ2VkIiwidGltZTJDaGFuZ2VkIiwidGltZSIsInRpbWUxQ2hhbmdlZCIsInByaWNlczJDaGFuZ2VkIiwicHJpY2VzIiwicHJpY2VzM0NoYW5nZWQiLCJwcmljZXMxQ2hhbmdlZCIsIm1pbjFDaGFuZ2VkIiwiZSIsInRhcmdldCIsImFnZUNoYW5nZWQiLCJ3ZWJzaXRlQ2hhbmdlZCIsImVtYWlsQ2hhbmdlZCIsInRleHRBcmVhQ2hhbmdlZCIsIm5hbWVDaGFuZ2VkIiwiY2hlY2tib3gyQ2hlY2tlZCIsImNoZWNrYm94MUNoZWNrZWQiLCJkcmlua3NDaGVja2VkIiwidW5Ub3VjaEFsbCIsInByZXZlbnREZWZhdWx0Iiwic2ltdWxhdGVVbm1vdW50Q2hlY2tlZCIsImRpc2FibGVzSW5wdXRzQ2hlY2tlZCIsInRvdWNoT25DaGVja2VkIiwiZm9ybVZhbGlkYXRpb25Ub2dnbGUiLCJ0b3VjaEFsbCIsImhhbmRsZUdlbmRlckNoYW5nZSIsImJpbmQiLCJzdWJtaXRGb3JtIiwiZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtIiwiZHluYW1pY1N1Ym1pdEVycm9yRm9ybSIsIlJlYWN0IiwidGltZTJNYXgiLCJzZXRIb3VycyIsImdldEhvdXJzIiwic2V0TWludXRlcyIsImdldE1pbnV0ZXMiLCJ0aW1lMk1pbiIsInBsYWNlaG9sZGVyIiwidCIsImNvbnNvbGUiLCJ3YXJuIiwidmFsIiwic3VibWl0dGluZyIsImVycm9yIiwic3VjY2VzcyIsInJlc2V0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQW9FTyxJQUFNQSxZQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBR0lDLEtBSEosRUFJSUMsVUFKSixFQUtJQyxRQUxKLEVBTWE7QUFDVCxVQUFJQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0osS0FBRCxDQUFoQjs7QUFDQSxVQUFJLENBQUNLLEtBQUssQ0FBQ0YsR0FBRCxDQUFWLEVBQWlCO0FBQ2YsWUFBSUEsR0FBRyxJQUFJLENBQVgsRUFBYztBQUNaRCxrQkFBUSxDQUFDLGVBQUQsQ0FBUjtBQUNBLGlCQUFPLEtBQVA7QUFDRDs7QUFDRCxZQUFJQyxHQUFHLEdBQUcsR0FBVixFQUFlO0FBQ2JELGtCQUFRLENBQUMsb0NBQUQsQ0FBUjtBQUNBLGlCQUFPLEtBQVA7QUFDRDs7QUFDRCxlQUFPLElBQVA7QUFDRCxPQVZELE1BVU87QUFDTEEsZ0JBQVEsQ0FBQyxhQUFELENBQVI7QUFDRDs7QUFDRCxhQUFPLEtBQVA7QUFDRDtBQXRCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBYUgsWSxDQUNHTyxRLEdBQVcsSUFBSVAsWUFBSixFO0FBd0IzQixJQUFNUSxZQUFtQixHQUFHLENBQzFCO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBRDBCLEVBSzFCO0FBQ0VELElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRTtBQUZS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QUFDZkYsZUFBTztBQUNQRSxrQkFBVSxDQUFDO0FBQUEsaUJBQU1ELEtBQUssRUFBWDtBQUFBLFNBQUQsRUFBZ0IsSUFBaEIsQ0FBVjtBQUNELE9BSFMsRUFHUCxJQUhPLENBQVY7QUFJRDtBQTF2Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEVBQTJCZixtREFBM0I7ZUE2dkJldEYsSztBQUFBOzs7Ozs7Ozs7OzBCQTMzQkZwQyxZOzBCQXlCUFEsWTswQkEyQkFHLFc7MEJBS0FFLFc7MEJBTUFDLFc7MEJBTUFFLFk7MEJBS0FDLGtCOzBCQUlBRSxlOzBCQUVBQyxhOzBCQUVBQyxrQjswQkFFQUMscUI7MEJBSUFHLEs7MEJBVUFDLGU7MEJBNEJPVSxLIiwiZmlsZSI6IjlkNzcwODktbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIERyb3Bkb3duLFxyXG4gIEZvcm0sXHJcbiAgVGltZSxcclxuICBUZXh0LFxyXG4gIFNlbGVjdCxcclxuICBTdWJtaXQsXHJcbiAgRHluYW1pY1N1Ym1pdCxcclxuICBDaGVja2JveCxcclxuICBSYWRpbyxcclxuICBSYWRpb0NvbnRhaW5lcixcclxuICBNb25leSxcclxuICBPcGVuaW5nSG91cnNEYXksXHJcbiAgTW9uZXlXaXRoQ3VycmVuY3ksXHJcbiAgT3BlbmluZ0hvdXJzRGF5T2JqLFxyXG4gIE9wZW5pbmdIb3Vyc1dlZWssXHJcbiAgT3BlbmluZ0hvdXJzU3BlY2lhbERheU9iaixcclxuICBPcGVuaW5nSG91cnNTcGVjaWFsLFxyXG4gIElucHV0SGVhZGVyLFxyXG4gIEJ1dHRvbixcclxuICBCdXR0b25UeXBlcyxcclxuICBUYWdzLFxyXG4gIFRhZyxcclxuICBOdW1iZXJWYWxpZGF0b3IsXHJcbiAgVGV4dEFyZWEsXHJcbiAgT3BlbmluZ0hvdXJzV2Vla0RheU9iaixcclxuICBTZWxlY3RWYWx1ZSxcclxuICBUZXh0UHJvcHMsXHJcbiAgVmFsaWRhdG9yVHlwZXMsXHJcbiAgSUJhc2VWYWxpZGF0b3IsXHJcbiAgQnV0dG9uUHJvcHMsXHJcbiAgRm9ybVZhbGlkYXRpb25TdW1tYXJ5LFxyXG4gIElucHV0SGVhZGVyUmF3LFxyXG59IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9pbmRleCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2ljUHJvcHMge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzaWNTdGF0ZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGdlbmRlcjogJ00nIHwgJ0YnIHwgJyc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBhZ2U6IHN0cmluZztcclxuICBtaW4xOiBzdHJpbmc7XHJcbiAgY2hlY2tib3gxOiBib29sZWFuO1xyXG4gIGNoZWNrYm94MjogYm9vbGVhbjtcclxuICB2YWxpZGF0ZUZvcm1TdWJtaXQ6IGJvb2xlYW47XHJcbiAgZm9vZDogc3RyaW5nO1xyXG4gIGRyaW5rOiBzdHJpbmc7XHJcbiAgdG91Y2hPbjogJ2JsdXInIHwgJ2ZvY3VzJztcclxuICBzdWJtaXREaXNhYmxlc0lucHV0czogYm9vbGVhbjtcclxuICBzaW11bGF0ZVVubW91bnQ6IGJvb2xlYW47XHJcbiAgcHJpY2VzMTogTW9uZXlXaXRoQ3VycmVuY3lbXTtcclxuICBwcmljZXMyOiBNb25leVdpdGhDdXJyZW5jeVtdO1xyXG4gIHByaWNlczM6IE1vbmV5V2l0aEN1cnJlbmN5W107XHJcbiAgdGltZTE6IERhdGU7XHJcbiAgdGltZTI6IERhdGU7XHJcbiAgb3BlbmluZ0hvdXJzOiBPcGVuaW5nSG91cnNEYXlPYmo7XHJcbiAgb3BlbmluZ0hvdXJzV2VlazogT3BlbmluZ0hvdXJzRGF5T2JqW107XHJcbiAgb3BlbmluZ0hvdXJzV2Vla0RheTogT3BlbmluZ0hvdXJzRGF5T2JqO1xyXG4gIG9wZW5pbmdIb3Vyc1NwZWNpYWw6IE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmpbXTtcclxuICB3ZWJzaXRlOiBzdHJpbmc7XHJcbiAgdGFnczogVGFnW107XHJcbiAgc2VsZWN0ZWRWYWx1ZXM6IFNlbGVjdFZhbHVlW107XHJcbiAgbXVsdGlwbGVWYWx1ZXM6IFNlbGVjdFZhbHVlW107XHJcbiAgbXVsdGlwbGVSZWFkb25seTogYm9vbGVhbjtcclxuICB0ZXh0QXJlYVRleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFnZVZhbGlkYXRvciB7XHJcbiAgcHVibGljIHN0YXRpYyBpbnN0YW5jZSA9IG5ldyBBZ2VWYWxpZGF0b3IoKTtcclxuICBwdWJsaWMgVmFsaWRhdGUoXHJcbiAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgaXNSZXF1aXJlZDogYm9vbGVhbixcclxuICAgIGFkZEVycm9yOiAoZXJyb3I6IHN0cmluZykgPT4gdm9pZFxyXG4gICk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IG51bSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICBpZiAoIWlzTmFOKG51bSkpIHtcclxuICAgICAgaWYgKG51bSA8PSAwKSB7XHJcbiAgICAgICAgYWRkRXJyb3IoJ05vdCBib3JuIHlldD8nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bSA+IDEyMikge1xyXG4gICAgICAgIGFkZEVycm9yKCdPbGRlciB0aGFuIEplYW5uZSBDYWxtZW50PyBSZWFsbHk/Jyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWRkRXJyb3IoJ0ludmFsaWQgYWdlJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBleGlzdGluZ1RhZ3M6IFRhZ1tdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogJ0Zvb2QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiAnRHJpbmsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiAnQmVlcicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6ICdXaW5lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgbmFtZTogJ0dsdXRlbiBmcmVlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgbmFtZTogJ0ZydWl0JyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VycmVuY2llczEgPSBbXHJcbiAgeyBsYWJlbDogJ0dCUCcsIHZhbHVlOiAnR0JQJyB9LFxyXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUicgfSxcclxuXTtcclxuXHJcbmNvbnN0IGN1cnJlbmNpZXMyID0gW1xyXG4gIHsgbGFiZWw6ICdHQlAnLCB2YWx1ZTogJ0dCUCcgfSxcclxuICB7IGxhYmVsOiAnRVVSJywgdmFsdWU6ICdFVVInIH0sXHJcbiAgeyBsYWJlbDogJ1VTRCcsIHZhbHVlOiAnVVNEJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VycmVuY2llczMgPSBbXHJcbiAgeyBsYWJlbDogJ0dCUCcsIHZhbHVlOiAnR0JQJywgZm9yY2VTZWxlY3RlZDogdHJ1ZSB9LFxyXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUicgfSxcclxuICB7IGxhYmVsOiAnVVNEJywgdmFsdWU6ICdVU0QnIH0sXHJcbl07XHJcblxyXG5jb25zdCBnZW5kZXJWYWx1ZXMgPSBbXHJcbiAgeyB2YWx1ZTogJ00nLCBsYWJlbDogJ01hbGUnIH0sXHJcbiAgeyB2YWx1ZTogJ0YnLCBsYWJlbDogJ0ZlbWFsZScgfSxcclxuXTtcclxuXHJcbmNvbnN0IHRhZ3NFbWFpbFRleHRQcm9wczogVGV4dFByb3BzID0ge1xyXG4gIHZhbGlkYXRvcnM6IFsnZW1haWwnXSxcclxufTtcclxuXHJcbmNvbnN0IGVtYWlsVmFsaWRhdG9yczogVmFsaWRhdG9yVHlwZXNbXSA9IFsnZW1haWwnXTtcclxuXHJcbmNvbnN0IHVybFZhbGlkYXRvcnM6IFZhbGlkYXRvclR5cGVzW10gPSBbJ3VybCddO1xyXG5cclxuY29uc3QgY3VzdG9tQWdlVmFsaWRhdG9yOiBJQmFzZVZhbGlkYXRvcltdID0gW0FnZVZhbGlkYXRvci5pbnN0YW5jZV07XHJcblxyXG5jb25zdCBjdXN0b21OdW1iZXJWYWxpZGF0b3I6IElCYXNlVmFsaWRhdG9yW10gPSBbXHJcbiAgbmV3IE51bWJlclZhbGlkYXRvcih7IG1pbjogMCB9KSxcclxuXTtcclxuXHJcbmNvbnN0IHR5cGVzOiBCdXR0b25UeXBlc1tdID0gW1xyXG4gICdwcmltYXJ5JyxcclxuICAnd2FybmluZycsXHJcbiAgJ2Vycm9yJyxcclxuICAnaW5mbycsXHJcbiAgJ3N1Y2Nlc3MnLFxyXG4gICdncmF5JyxcclxuICAnd2hpdGUnLFxyXG4gICdub25lJyxcclxuXTtcclxuY29uc3QgQnV0dG9uc1Nob3djYXNlOiBSZWFjdC5TRkM8QnV0dG9uUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInB4LTJcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsIDI0NywgMjQ3KScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHt0eXBlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPXtpdGVtfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPXtpdGVtfSBkaXNhYmxlZD17dHJ1ZX0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAgRGlzYWJsZWRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkJ1dHRvbnNTaG93Y2FzZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lOiAnbXktMiBtci0yJyxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNpYyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QmFzaWNQcm9wcywgQmFzaWNTdGF0ZT4ge1xyXG4gIHByaXZhdGUgZm9ybTogRm9ybTtcclxuXHJcbiAgcHJpdmF0ZSBzcGVjaWFsRGF5c0lucHV0SGVhZGVyOiBSZWFjdC5SZWZPYmplY3Q8SW5wdXRIZWFkZXJSYXc+O1xyXG5cclxuICBwcml2YXRlIGRyb3Bkb3duRnVuY3Rpb25IZWFkZXI6IERyb3Bkb3duO1xyXG5cclxuICBwcml2YXRlIGluaXRpYWxTdGF0ZTogQmFzaWNTdGF0ZSA9IHtcclxuICAgIGdlbmRlcjogJycsXHJcbiAgICBuYW1lOiAnVGVzdCcsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBhZ2U6ICcnLFxyXG4gICAgbWluMTogJycsXHJcbiAgICBjaGVja2JveDE6IHRydWUsXHJcbiAgICBjaGVja2JveDI6IGZhbHNlLFxyXG4gICAgdmFsaWRhdGVGb3JtU3VibWl0OiB0cnVlLFxyXG4gICAgZm9vZDogJ2JyZWFrZmFzdCcsXHJcbiAgICBkcmluazogJ2JyZWFrZmFzdCcsXHJcbiAgICB0b3VjaE9uOiAnZm9jdXMnLFxyXG4gICAgc3VibWl0RGlzYWJsZXNJbnB1dHM6IHRydWUsXHJcbiAgICBzaW11bGF0ZVVubW91bnQ6IGZhbHNlLFxyXG4gICAgcHJpY2VzMTogW10sXHJcbiAgICBwcmljZXMyOiBbXSxcclxuICAgIHByaWNlczM6IFtdLFxyXG4gICAgdGltZTE6IG5ldyBEYXRlKCksXHJcbiAgICB0aW1lMjogbmV3IERhdGUoKSxcclxuICAgIG9wZW5pbmdIb3Vyczoge1xyXG4gICAgICB0aW1lczogW10sXHJcbiAgICB9LFxyXG4gICAgb3BlbmluZ0hvdXJzV2VlazogW10sXHJcbiAgICBvcGVuaW5nSG91cnNXZWVrRGF5OiB7XHJcbiAgICAgIHRpbWVzOiBbXSxcclxuICAgIH0sXHJcbiAgICBvcGVuaW5nSG91cnNTcGVjaWFsOiBbXSxcclxuICAgIHdlYnNpdGU6ICcnLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBzZWxlY3RlZFZhbHVlczogW10sXHJcbiAgICBtdWx0aXBsZVZhbHVlczogW1xyXG4gICAgICB7IHZhbHVlOiAnT25lIG9wdGlvbicgfSxcclxuICAgICAgeyB2YWx1ZTogJ1NlY29uZCBvcHRpb24nIH0sXHJcbiAgICAgIHsgdmFsdWU6ICdUaGlyZCBvcHRpb24nIH0sXHJcbiAgICAgIHsgdmFsdWU6ICdvbmUgbW9yZSBvcHRpb24nIH0sXHJcbiAgICAgIHsgdmFsdWU6ICdybHkgbG9uZyBsYXN0IG9wdGlvbicgfSxcclxuICAgIF0sXHJcbiAgICBtdWx0aXBsZVJlYWRvbmx5OiBmYWxzZSxcclxuICAgIHRleHRBcmVhVGV4dDogJycsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IEJhc2ljUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZTtcclxuICAgIHRoaXMuaGFuZGxlR2VuZGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVHZW5kZXJDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5keW5hbWljU3VibWl0U3VjY2Vzc0Zvcm0gPSB0aGlzLmR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5keW5hbWljU3VibWl0RXJyb3JGb3JtID0gdGhpcy5keW5hbWljU3VibWl0RXJyb3JGb3JtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNwZWNpYWxEYXlzSW5wdXRIZWFkZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBsZXQgdGltZTJNYXggPSBuZXcgRGF0ZSgpO1xyXG4gICAgdGltZTJNYXguc2V0SG91cnModGltZTJNYXguZ2V0SG91cnMoKSArIDEpO1xyXG4gICAgdGltZTJNYXguc2V0TWludXRlcyh0aW1lMk1heC5nZXRNaW51dGVzKCkgKyA1KTtcclxuXHJcbiAgICBsZXQgdGltZTJNaW4gPSBuZXcgRGF0ZSgpO1xyXG4gICAgdGltZTJNaW4uc2V0SG91cnModGltZTJNaW4uZ2V0SG91cnMoKSAtIDEpO1xyXG4gICAgdGltZTJNaW4uc2V0TWludXRlcyh0aW1lMk1pbi5nZXRNaW51dGVzKCkgLSA1KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93ICBtdC01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2sgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlPXt0cnVlfSBjbGFzc05hbWU9XCJpbnB1dF9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlR1cm4gZm9ybSB2YWxpZGF0aW9uIG9uIG9yIG9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmZvcm1WYWxpZGF0aW9uVG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVmFsaWRhdGUgZm9ybSBzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW9Db250YWluZXIgdGl0bGU9XCJUb3VjaCBvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvdWNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMudG91Y2hPbkNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3VjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImZvY3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRm9jdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMudG91Y2hPbkNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9SYWRpb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNhYmxlcyBpbnB1dHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kaXNhYmxlc0lucHV0c0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5zdWJtaXREaXNhYmxlc0lucHV0c31cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVW5tb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLnNpbXVsYXRlVW5tb3VudENoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5zaW11bGF0ZVVubW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTaW11bGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXktNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjYXJkICd9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9jayBwLTBcIj5cclxuICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5zaW11bGF0ZVVubW91bnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLmZvcm1SZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbWQtNDhcIj5lZGl0PC9pPn1cclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnRXhhbXBsZSBmb3JtJ31cclxuICAgICAgICAgICAgICAgICAgICAgIHN1YlRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBbmQgdGhpcyBpcyBzdWJ0aXRsZS4gVGhlcmUncyBhbHNvIGljb24gb24gdGhlIGxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2hvd0V4cGFuZEFsbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoZXJvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkRGVmYXVsdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYWluQnV0dG9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydwcmltYXJ5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN1Ym1pdEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVGb3JtPXt0aGlzLnN0YXRlLnZhbGlkYXRlRm9ybVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N1Ym1pdD5cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQnV0dG9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT17MX0gZHJvcGRvd249e3RydWV9IG9uQ2xpY2s9e3RoaXMudG91Y2hBbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRvdWNoIGFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy51blRvdWNoQWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVW4tdG91Y2ggYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaG91bGRUb2dnbGVDb2xsYXBzZU9uSGVhZGVyQ2xpY2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQ29udGFpbmVyIHRpdGxlPVwiRHJpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3aW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndoaXNrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2hpc2tleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2F0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2F0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Db250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEcmlua3MgKGhvcml6b250YWwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3aW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3aGlza2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldoaXNrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3YXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXYXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTbWFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5jaGVja2JveDFDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrYm94MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEcmVzcyBjb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIldpdGggdG9vbHRpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiKG9wdGlvbmFsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5jaGVja2JveDJDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrYm94Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJXYWxsZXQgcGFya2luZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5uYW1lQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBudWxsIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGVzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIG5hbWUgKG5vIHRpdGxlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubmFtZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHNvbWUgaGVscCB0ZXh0LiBJdCBjYW4gYWxzbyBkbyA8Yj5ib2xkPC9iPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBvdGhlciBzdHVmZi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5uYW1lQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOYW1lIHJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnWW91ciBnZW5kZXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e2dlbmRlclZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZGVyQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiR2VuZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRleHRBcmVhQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGV4dEFyZWFUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudGV4dEFyZWFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0QXJlYVRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydTb21lIGNvbGxhcHNlZCBzdHVmZid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRUb2dnbGVDb2xsYXBzZU9uSGVhZGVyQ2xpY2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIkhlbHBmdWwgdGV4dCB0aGF0IGRlc2NyaWJlcyB3aGF0J3MgY29sbGFwc2VkIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e2VtYWlsVmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZW1haWxDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsnWW91IGNhbiBzZWxlY3QgbWUgYnV0IEkgYW0gcmVhZG9ubHknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXt1cmxWYWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldlYnNpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLndlYnNpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMud2Vic2l0ZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3VyIHdlYnNpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21WYWxpZGF0b3JzPXtjdXN0b21BZ2VWYWxpZGF0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIGFnZSAob3B0aW9uYWwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuYWdlQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVZhbGlkYXRvcnM9e2N1c3RvbU51bWJlclZhbGlkYXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1pbiAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5taW4xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1pbjFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9uZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY2llcz17Y3VycmVuY2llczF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlcz17dGhpcy5zdGF0ZS5wcmljZXMxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblByaWNlc0NoYW5nZT17dGhpcy5wcmljZXMxQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vbmV5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmNpZXM9e2N1cnJlbmNpZXMyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZXM9e3RoaXMuc3RhdGUucHJpY2VzMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJpY2VzQ2hhbmdlPXt0aGlzLnByaWNlczJDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlByaWNlIG11bHRpcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9uZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY2llcz17Y3VycmVuY2llczN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlcz17dGhpcy5zdGF0ZS5wcmljZXMzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QcmljZXNDaGFuZ2U9e3RoaXMucHJpY2VzM0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJpY2UgbXVsdGlwbGUgZm9yY2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU9e3RoaXMuc3RhdGUudGltZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVDaGFuZ2U9e3RoaXMudGltZTFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17dGltZTJNYXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17dGltZTJNaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17dGhpcy5zdGF0ZS50aW1lMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNoYW5nZT17dGhpcy50aW1lMkNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiV2l0aCBNaW4vTWF4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3BlbmluZ0hvdXJzRGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnT3BlbmluZyBob3VycyBzYW1wbGUgZGF5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbmluZ0hvdXJzQ2hhbmdlPXt0aGlzLm9wZW5pbmdIb3Vyc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pbmdIb3Vycz17dGhpcy5zdGF0ZS5vcGVuaW5nSG91cnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiT3BlbmluZyBob3Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnT3BlbmluZyBob3Vycyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQnV0dG9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9eydwcmltYXJ5J30+SGVybyBidXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYUJ1dHRvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT17MX0gZHJvcGRvd249e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXh0cmEgYnV0dG9uIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9ezJ9IGRyb3Bkb3duPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4dHJhIGJ1dHRvbiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3BlbmluZ0hvdXJzV2Vla1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25EYXlzQ2hhbmdlPXt0aGlzLm9wZW5pbmdIb3Vyc1dlZWtDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRheXM9e3RoaXMuc3RhdGUub3BlbmluZ0hvdXJzV2Vla31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFuZGFyZERheT17dGhpcy5zdGF0ZS5vcGVuaW5nSG91cnNXZWVrRGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3RhbmRhcmREYXlDaGFuZ2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuaW5nSG91cnNXZWVrU3RhbmRhcmREYXlDaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1NwZWNpYWwgZGF5cyBvcGVuaW5nIGhvdXJzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5zcGVjaWFsRGF5c0lucHV0SGVhZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQnV0dG9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNwZWNpYWxEYXlzQWRkQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wZW5pbmdIb3Vyc1NwZWNpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGF5c0NoYW5nZT17dGhpcy5vcGVuaW5nSG91cnNTcGVjaWFsQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlzPXt0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc1NwZWNpYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnQnV0dG9ucyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5CdXR0b249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT17J3ByaW1hcnknfT5IZXJvIGJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+U3RhbmRhcmQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Tm8gc2hhZG93PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIG5vU2hhZG93PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5IZXJvPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIGhlcm89e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPk91dGxpbmVkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIG91dGxpbmVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5CbGFuazwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBibGFuaz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+U21hbGw8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2Ugc21hbGw9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkNpcmN1bGFyPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIGNpcmN1bGFyPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Ecm9wZG93bjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBkcm9wZG93bj17dHJ1ZX0gY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnTXVsdGlwbGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkRGVmYXVsdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsPVwiTXVsdGlwbGUgcmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5tdWx0aXBsZVJlYWRvbmx5Q2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNdWx0aXBsZSByZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQW5kIGxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UHJvcHM9e3sgcGxhY2Vob2xkZXI6ICdXaXRoIHBsYWNlaG9sZGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIHN1Z2dlc3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNob29zZSBvciBjcmVhdGUgdGFnc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUYWdzPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFncz17ZXhpc3RpbmdUYWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M9e3RoaXMuc3RhdGUudGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhZ3NDaGFuZ2VkPXt0aGlzLnRhZ3NDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDaGlwcz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3MgbWF4IDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFRhZ3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZD17dGhpcy50YWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2hpcHM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdDbGljaz17dCA9PiBjb25zb2xlLndhcm4odCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIG9ubHkgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2l0aCBsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGFncz17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M9e3RoaXMuc3RhdGUudGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhZ3NDaGFuZ2VkPXt0aGlzLnRhZ3NDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQ9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFByb3BzPXt0YWdzRW1haWxUZXh0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9uZSBvciBtb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk11bHRpc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0RW1wdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3RoaXMuc3RhdGUubXVsdGlwbGVWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RlZFZhbHVlc0NoYW5nZT17dGhpcy5zZWxlY3RlZFZhbHVlc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZXM6IFt7IHZhbHVlOiAnT25lIG9wdGlvbicgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRlc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnRHJvcGRvd24nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkRGVmYXVsdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgbXItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm5vdGlmaWNhdGlvbnM8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25Db3VudD17NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnVDbGFzc05hbWU9XCJwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Fycm93PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SXRlbTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnU3RyaW5nIGhlYWRlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25Db3VudD17NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnVDbGFzc05hbWU9XCJwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JdGVtPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLmRyb3Bkb3duRnVuY3Rpb25IZWFkZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5mdW5jdGlvbkhlYWRlckNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1bmN0aW9uIGhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dBcnJvdz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtZW51Q2xhc3NOYW1lPVwicC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SXRlbTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1WYWxpZGF0aW9uU3VtbWFyeSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgbXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHluYW1pY1N1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdERpc2FibGVzSW5wdXRzPXt0aGlzLnN0YXRlLnN1Ym1pdERpc2FibGVzSW5wdXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydwcmltYXJ5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxDbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ2xhc3NOYW1lPVwiYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZ0NsYXNzTmFtZT1cImJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ2hpbGRyZW49eydFcnJvcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZ0NoaWxkcmVuPXsnV29ya2luZyBvbiBpdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5keW5hbWljU3VibWl0U3VjY2Vzc0Zvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVGb3JtPXt0aGlzLnN0YXRlLnZhbGlkYXRlRm9ybVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFqYXggRXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EeW5hbWljU3VibWl0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHluYW1pY1N1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdERpc2FibGVzSW5wdXRzPXt0aGlzLnN0YXRlLnN1Ym1pdERpc2FibGVzSW5wdXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbENsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3ByaW1hcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmdDbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2xhc3NOYW1lPVwiYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmdDaGlsZHJlbj17J1dvcmtpbmcgb24gaXQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDaGlsZHJlbj17J1RoYXQgd29ya2VkJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmR5bmFtaWNTdWJtaXRFcnJvckZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVGb3JtPXt0aGlzLnN0YXRlLnZhbGlkYXRlRm9ybVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFqYXggU3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0R5bmFtaWNTdWJtaXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1SZWYgPSAoZWw6IEZvcm0pID0+ICh0aGlzLmZvcm0gPSBlbCk7XHJcblxyXG4gIHByaXZhdGUgZHJvcGRvd25GdW5jdGlvbkhlYWRlclJlZiA9IChlbDogRHJvcGRvd24pID0+XHJcbiAgICAodGhpcy5kcm9wZG93bkZ1bmN0aW9uSGVhZGVyID0gZWwpO1xyXG5cclxuICBwcml2YXRlIGZ1bmN0aW9uSGVhZGVyQ2xpY2sgPSAoKSA9PlxyXG4gICAgdGhpcy5kcm9wZG93bkZ1bmN0aW9uSGVhZGVyLnNob3dOYXZpZ2F0aW9uKCk7XHJcblxyXG4gIHByaXZhdGUgc2VsZWN0ZWRWYWx1ZXNDaGFuZ2VkID0gKHNlbGVjdGVkVmFsdWVzOiBTZWxlY3RWYWx1ZVtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkVmFsdWVzIH0pO1xyXG5cclxuICBwcml2YXRlIHRhZ3NDaGFuZ2VkID0gKHRhZ3M6IFRhZ1tdKSA9PiB0aGlzLnNldFN0YXRlKHsgdGFncyB9KTtcclxuXHJcbiAgcHJpdmF0ZSBtdWx0aXBsZVJlYWRvbmx5Q2hlY2tlZCA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbXVsdGlwbGVSZWFkb25seTogIXRoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBvcGVuaW5nSG91cnNTcGVjaWFsQ2hhbmdlZCA9IChkYXlzOiBPcGVuaW5nSG91cnNTcGVjaWFsRGF5T2JqW10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmluZ0hvdXJzU3BlY2lhbDogZGF5cyB9KTtcclxuXHJcbiAgcHJpdmF0ZSBzcGVjaWFsRGF5c0FkZENsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIG9wZW5pbmdIb3Vyc1NwZWNpYWw6IHRoaXMuc3RhdGUub3BlbmluZ0hvdXJzU3BlY2lhbC5jb25jYXQoW1xyXG4gICAgICAgICAgeyBkYXRlOiB1bmRlZmluZWQsIHRpbWVzOiBbXSB9LFxyXG4gICAgICAgIF0pLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLnNwZWNpYWxEYXlzSW5wdXRIZWFkZXIuY3VycmVudC5leHBhbmQoKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc1dlZWtTdGFuZGFyZERheUNoYW5nZWQgPSAoZGF5OiBPcGVuaW5nSG91cnNXZWVrRGF5T2JqKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5pbmdIb3Vyc1dlZWtEYXk6IGRheSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBvcGVuaW5nSG91cnNXZWVrQ2hhbmdlZCA9IChkYXlzOiBPcGVuaW5nSG91cnNXZWVrRGF5T2JqW10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmluZ0hvdXJzV2VlazogZGF5cyB9KTtcclxuXHJcbiAgcHJpdmF0ZSBvcGVuaW5nSG91cnNDaGFuZ2VkID0gKG9wZW5pbmdIb3VyczogT3BlbmluZ0hvdXJzRGF5T2JqKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5pbmdIb3Vyczogb3BlbmluZ0hvdXJzIH0pO1xyXG5cclxuICBwcml2YXRlIHRpbWUyQ2hhbmdlZCA9ICh0aW1lOiBEYXRlKSA9PiB0aGlzLnNldFN0YXRlKHsgdGltZTI6IHRpbWUgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZTFDaGFuZ2VkID0gKHRpbWU6IERhdGUpID0+IHRoaXMuc2V0U3RhdGUoeyB0aW1lMTogdGltZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBwcmljZXMyQ2hhbmdlZCA9IChwcmljZXM6IE1vbmV5V2l0aEN1cnJlbmN5W10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2VzMjogcHJpY2VzIH0pO1xyXG5cclxuICBwcml2YXRlIHByaWNlczNDaGFuZ2VkID0gKHByaWNlczogTW9uZXlXaXRoQ3VycmVuY3lbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZXMzOiBwcmljZXMgfSk7XHJcblxyXG4gIHByaXZhdGUgcHJpY2VzMUNoYW5nZWQgPSAocHJpY2VzOiBNb25leVdpdGhDdXJyZW5jeVtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlczE6IHByaWNlcyB9KTtcclxuXHJcbiAgcHJpdmF0ZSBtaW4xQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtaW4xOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBhZ2VDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFnZTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgd2Vic2l0ZUNoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgd2Vic2l0ZTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgZW1haWxDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0ZXh0QXJlYUNoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dEFyZWFUZXh0OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBuYW1lQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBjaGVja2JveDJDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja2JveDI6ICF0aGlzLnN0YXRlLmNoZWNrYm94MiB9KTtcclxuXHJcbiAgcHJpdmF0ZSBjaGVja2JveDFDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja2JveDE6ICF0aGlzLnN0YXRlLmNoZWNrYm94MSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBkcmlua3NDaGVja2VkID0gKHZhbHVlOiBzdHJpbmcpID0+IHRoaXMuc2V0U3RhdGUoeyBkcmluazogdmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgdW5Ub3VjaEFsbCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5mb3JtLnVuVG91Y2hBbGwoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHNpbXVsYXRlVW5tb3VudENoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNpbXVsYXRlVW5tb3VudDogIXRoaXMuc3RhdGUuc2ltdWxhdGVVbm1vdW50IH0pO1xyXG5cclxuICBwcml2YXRlIGRpc2FibGVzSW5wdXRzQ2hlY2tlZCA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0RGlzYWJsZXNJbnB1dHM6ICF0aGlzLnN0YXRlLnN1Ym1pdERpc2FibGVzSW5wdXRzIH0pO1xyXG5cclxuICBwcml2YXRlIHRvdWNoT25DaGVja2VkID0gKHZhbHVlOiAnYmx1cicgfCAnZm9jdXMnKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRvdWNoT246IHZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIGZvcm1WYWxpZGF0aW9uVG9nZ2xlID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0ZUZvcm1TdWJtaXQ6ICF0aGlzLnN0YXRlLnZhbGlkYXRlRm9ybVN1Ym1pdCB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0b3VjaEFsbCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5mb3JtLnRvdWNoQWxsKCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVHZW5kZXJDaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGlmICh2YWwgPT09ICdNJyB8fCB2YWwgPT09ICdGJykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2VuZGVyOiB2YWwgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1Ym1pdEZvcm0oZT86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XHJcbiAgICBlICYmIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5pbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkeW5hbWljU3VibWl0U3VjY2Vzc0Zvcm0oXHJcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PixcclxuICAgIHN1Ym1pdHRpbmc6ICgpID0+IHZvaWQsXHJcbiAgICBlcnJvcjogKCkgPT4gdm9pZCxcclxuICAgIHN1Y2Nlc3M6ICgpID0+IHZvaWQsXHJcbiAgICByZXNldDogKCkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc3VibWl0dGluZygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGVycm9yKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzZXQoKSwgMzAwMCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHluYW1pY1N1Ym1pdEVycm9yRm9ybShcclxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxyXG4gICAgc3VibWl0dGluZzogKCkgPT4gdm9pZCxcclxuICAgIGVycm9yOiAoKSA9PiB2b2lkLFxyXG4gICAgc3VjY2VzczogKCkgPT4gdm9pZCxcclxuICAgIHJlc2V0OiAoKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzdWJtaXR0aW5nKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc3VjY2VzcygpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc2V0KCksIDMwMDApO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNpYztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==