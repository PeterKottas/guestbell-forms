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
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
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
      name: '',
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

    _this.specialDaysInputHeaderRef = function (el) {
      return _this.specialDaysInputHeader = el;
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
        return _this.specialDaysInputHeader.expand();
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
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
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
        innerRef: this.specialDaysInputHeaderRef,
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
        readOnly: this.state.multipleReadonly,
        allowNew: true,
        tags: this.state.tags,
        onTagsChanged: this.tagsChanged
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Tags"], {
        title: "Tags suggestions",
        label: "Choose or create tags",
        openSuggestionsOnTagRemove: true,
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
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

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
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DbGllbnRBcHAvcGFnZXMvYmFzaWMvQmFzaWMudHN4Il0sIm5hbWVzIjpbIkFnZVZhbGlkYXRvciIsInZhbHVlIiwiaXNSZXF1aXJlZCIsImFkZEVycm9yIiwibnVtIiwiTnVtYmVyIiwiaXNOYU4iLCJpbnN0YW5jZSIsImV4aXN0aW5nVGFncyIsImlkIiwibmFtZSIsImN1cnJlbmNpZXMxIiwibGFiZWwiLCJjdXJyZW5jaWVzMiIsImN1cnJlbmNpZXMzIiwiZm9yY2VTZWxlY3RlZCIsImdlbmRlclZhbHVlcyIsInRhZ3NFbWFpbFRleHRQcm9wcyIsInZhbGlkYXRvcnMiLCJlbWFpbFZhbGlkYXRvcnMiLCJ1cmxWYWxpZGF0b3JzIiwiY3VzdG9tQWdlVmFsaWRhdG9yIiwiY3VzdG9tTnVtYmVyVmFsaWRhdG9yIiwiTnVtYmVyVmFsaWRhdG9yIiwibWluIiwidHlwZXMiLCJCdXR0b25zU2hvd2Nhc2UiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsIkJhc2ljIiwiZm9ybSIsInNwZWNpYWxEYXlzSW5wdXRIZWFkZXIiLCJkcm9wZG93bkZ1bmN0aW9uSGVhZGVyIiwiaW5pdGlhbFN0YXRlIiwiZ2VuZGVyIiwiZW1haWwiLCJhZ2UiLCJtaW4xIiwiY2hlY2tib3gxIiwiY2hlY2tib3gyIiwidmFsaWRhdGVGb3JtU3VibWl0IiwiZm9vZCIsImRyaW5rIiwidG91Y2hPbiIsInN1Ym1pdERpc2FibGVzSW5wdXRzIiwic2ltdWxhdGVVbm1vdW50IiwicHJpY2VzMSIsInByaWNlczIiLCJwcmljZXMzIiwidGltZTEiLCJEYXRlIiwidGltZTIiLCJvcGVuaW5nSG91cnMiLCJ0aW1lcyIsIm9wZW5pbmdIb3Vyc1dlZWsiLCJvcGVuaW5nSG91cnNXZWVrRGF5Iiwib3BlbmluZ0hvdXJzU3BlY2lhbCIsIndlYnNpdGUiLCJ0YWdzIiwic2VsZWN0ZWRWYWx1ZXMiLCJtdWx0aXBsZVZhbHVlcyIsIm11bHRpcGxlUmVhZG9ubHkiLCJ0ZXh0QXJlYVRleHQiLCJzcGVjaWFsRGF5c0lucHV0SGVhZGVyUmVmIiwiZWwiLCJmb3JtUmVmIiwiZHJvcGRvd25GdW5jdGlvbkhlYWRlclJlZiIsImZ1bmN0aW9uSGVhZGVyQ2xpY2siLCJzaG93TmF2aWdhdGlvbiIsInNlbGVjdGVkVmFsdWVzQ2hhbmdlZCIsInNldFN0YXRlIiwidGFnc0NoYW5nZWQiLCJtdWx0aXBsZVJlYWRvbmx5Q2hlY2tlZCIsInN0YXRlIiwib3BlbmluZ0hvdXJzU3BlY2lhbENoYW5nZWQiLCJkYXlzIiwic3BlY2lhbERheXNBZGRDbGljayIsImNvbmNhdCIsImRhdGUiLCJ1bmRlZmluZWQiLCJleHBhbmQiLCJvcGVuaW5nSG91cnNXZWVrU3RhbmRhcmREYXlDaGFuZ2VkIiwiZGF5Iiwib3BlbmluZ0hvdXJzV2Vla0NoYW5nZWQiLCJvcGVuaW5nSG91cnNDaGFuZ2VkIiwidGltZTJDaGFuZ2VkIiwidGltZSIsInRpbWUxQ2hhbmdlZCIsInByaWNlczJDaGFuZ2VkIiwicHJpY2VzIiwicHJpY2VzM0NoYW5nZWQiLCJwcmljZXMxQ2hhbmdlZCIsIm1pbjFDaGFuZ2VkIiwiZSIsInRhcmdldCIsImFnZUNoYW5nZWQiLCJ3ZWJzaXRlQ2hhbmdlZCIsImVtYWlsQ2hhbmdlZCIsInRleHRBcmVhQ2hhbmdlZCIsIm5hbWVDaGFuZ2VkIiwiY2hlY2tib3gyQ2hlY2tlZCIsImNoZWNrYm94MUNoZWNrZWQiLCJkcmlua3NDaGVja2VkIiwidW5Ub3VjaEFsbCIsInByZXZlbnREZWZhdWx0Iiwic2ltdWxhdGVVbm1vdW50Q2hlY2tlZCIsImRpc2FibGVzSW5wdXRzQ2hlY2tlZCIsInRvdWNoT25DaGVja2VkIiwiZm9ybVZhbGlkYXRpb25Ub2dnbGUiLCJ0b3VjaEFsbCIsImhhbmRsZUdlbmRlckNoYW5nZSIsImJpbmQiLCJzdWJtaXRGb3JtIiwiZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtIiwiZHluYW1pY1N1Ym1pdEVycm9yRm9ybSIsInRpbWUyTWF4Iiwic2V0SG91cnMiLCJnZXRIb3VycyIsInNldE1pbnV0ZXMiLCJnZXRNaW51dGVzIiwidGltZTJNaW4iLCJ0IiwiY29uc29sZSIsIndhcm4iLCJ2YWwiLCJzdWJtaXR0aW5nIiwiZXJyb3IiLCJzdWNjZXNzIiwicmVzZXQiLCJzZXRUaW1lb3V0IiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFvRU8sSUFBTUEsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLDZCQUdJQyxLQUhKLEVBSUlDLFVBSkosRUFLSUMsUUFMSixFQU1hO0FBQ1QsVUFBSUMsR0FBRyxHQUFHQyxNQUFNLENBQUNKLEtBQUQsQ0FBaEI7O0FBQ0EsVUFBSSxDQUFDSyxLQUFLLENBQUNGLEdBQUQsQ0FBVixFQUFpQjtBQUNmLFlBQUlBLEdBQUcsSUFBSSxDQUFYLEVBQWM7QUFDWkQsa0JBQVEsQ0FBQyxlQUFELENBQVI7QUFDQSxpQkFBTyxLQUFQO0FBQ0Q7O0FBQ0QsWUFBSUMsR0FBRyxHQUFHLEdBQVYsRUFBZTtBQUNiRCxrQkFBUSxDQUFDLG9DQUFELENBQVI7QUFDQSxpQkFBTyxLQUFQO0FBQ0Q7O0FBQ0QsZUFBTyxJQUFQO0FBQ0QsT0FWRCxNQVVPO0FBQ0xBLGdCQUFRLENBQUMsYUFBRCxDQUFSO0FBQ0Q7O0FBQ0QsYUFBTyxLQUFQO0FBQ0Q7QUF0Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQWFILFksQ0FDR08sUSxHQUFXLElBQUlQLFlBQUosRTtBQXdCM0IsSUFBTVEsWUFBbUIsR0FBRyxDQUMxQjtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQUQwQixFQUsxQjtBQUNFRCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUU7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Qkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEVBQTJCRSxtREFBM0I7ZUEydkJlckcsSztBQUFBOzs7Ozs7Ozs7OzBCQXozQkZwQyxZOzBCQXlCUFEsWTswQkEyQkFHLFc7MEJBS0FFLFc7MEJBTUFDLFc7MEJBTUFFLFk7MEJBS0FDLGtCOzBCQUlBRSxlOzBCQUVBQyxhOzBCQUVBQyxrQjswQkFFQUMscUI7MEJBSUFHLEs7MEJBVUFDLGU7MEJBNEJPVSxLIiwiZmlsZSI6ImVkOWZkMGUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIERyb3Bkb3duLFxyXG4gIEZvcm0sXHJcbiAgVGltZSxcclxuICBUZXh0LFxyXG4gIFNlbGVjdCxcclxuICBTdWJtaXQsXHJcbiAgRHluYW1pY1N1Ym1pdCxcclxuICBDaGVja2JveCxcclxuICBSYWRpbyxcclxuICBSYWRpb0NvbnRhaW5lcixcclxuICBNb25leSxcclxuICBPcGVuaW5nSG91cnNEYXksXHJcbiAgTW9uZXlXaXRoQ3VycmVuY3ksXHJcbiAgT3BlbmluZ0hvdXJzRGF5T2JqLFxyXG4gIE9wZW5pbmdIb3Vyc1dlZWssXHJcbiAgT3BlbmluZ0hvdXJzU3BlY2lhbERheU9iaixcclxuICBPcGVuaW5nSG91cnNTcGVjaWFsLFxyXG4gIElucHV0SGVhZGVyLFxyXG4gIEJ1dHRvbixcclxuICBCdXR0b25UeXBlcyxcclxuICBUYWdzLFxyXG4gIFRhZyxcclxuICBOdW1iZXJWYWxpZGF0b3IsXHJcbiAgVGV4dEFyZWEsXHJcbiAgT3BlbmluZ0hvdXJzV2Vla0RheU9iaixcclxuICBTZWxlY3RWYWx1ZSxcclxuICBUZXh0UHJvcHMsXHJcbiAgVmFsaWRhdG9yVHlwZXMsXHJcbiAgSUJhc2VWYWxpZGF0b3IsXHJcbiAgQnV0dG9uUHJvcHMsXHJcbiAgRm9ybVZhbGlkYXRpb25TdW1tYXJ5LFxyXG4gIElucHV0SGVhZGVyUmF3LFxyXG59IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9pbmRleCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2ljUHJvcHMge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzaWNTdGF0ZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGdlbmRlcjogJ00nIHwgJ0YnIHwgJyc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBhZ2U6IHN0cmluZztcclxuICBtaW4xOiBzdHJpbmc7XHJcbiAgY2hlY2tib3gxOiBib29sZWFuO1xyXG4gIGNoZWNrYm94MjogYm9vbGVhbjtcclxuICB2YWxpZGF0ZUZvcm1TdWJtaXQ6IGJvb2xlYW47XHJcbiAgZm9vZDogc3RyaW5nO1xyXG4gIGRyaW5rOiBzdHJpbmc7XHJcbiAgdG91Y2hPbjogJ2JsdXInIHwgJ2ZvY3VzJztcclxuICBzdWJtaXREaXNhYmxlc0lucHV0czogYm9vbGVhbjtcclxuICBzaW11bGF0ZVVubW91bnQ6IGJvb2xlYW47XHJcbiAgcHJpY2VzMTogTW9uZXlXaXRoQ3VycmVuY3lbXTtcclxuICBwcmljZXMyOiBNb25leVdpdGhDdXJyZW5jeVtdO1xyXG4gIHByaWNlczM6IE1vbmV5V2l0aEN1cnJlbmN5W107XHJcbiAgdGltZTE6IERhdGU7XHJcbiAgdGltZTI6IERhdGU7XHJcbiAgb3BlbmluZ0hvdXJzOiBPcGVuaW5nSG91cnNEYXlPYmo7XHJcbiAgb3BlbmluZ0hvdXJzV2VlazogT3BlbmluZ0hvdXJzRGF5T2JqW107XHJcbiAgb3BlbmluZ0hvdXJzV2Vla0RheTogT3BlbmluZ0hvdXJzRGF5T2JqO1xyXG4gIG9wZW5pbmdIb3Vyc1NwZWNpYWw6IE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmpbXTtcclxuICB3ZWJzaXRlOiBzdHJpbmc7XHJcbiAgdGFnczogVGFnW107XHJcbiAgc2VsZWN0ZWRWYWx1ZXM6IFNlbGVjdFZhbHVlW107XHJcbiAgbXVsdGlwbGVWYWx1ZXM6IFNlbGVjdFZhbHVlW107XHJcbiAgbXVsdGlwbGVSZWFkb25seTogYm9vbGVhbjtcclxuICB0ZXh0QXJlYVRleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFnZVZhbGlkYXRvciB7XHJcbiAgcHVibGljIHN0YXRpYyBpbnN0YW5jZSA9IG5ldyBBZ2VWYWxpZGF0b3IoKTtcclxuICBwdWJsaWMgVmFsaWRhdGUoXHJcbiAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgaXNSZXF1aXJlZDogYm9vbGVhbixcclxuICAgIGFkZEVycm9yOiAoZXJyb3I6IHN0cmluZykgPT4gdm9pZFxyXG4gICk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IG51bSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICBpZiAoIWlzTmFOKG51bSkpIHtcclxuICAgICAgaWYgKG51bSA8PSAwKSB7XHJcbiAgICAgICAgYWRkRXJyb3IoJ05vdCBib3JuIHlldD8nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bSA+IDEyMikge1xyXG4gICAgICAgIGFkZEVycm9yKCdPbGRlciB0aGFuIEplYW5uZSBDYWxtZW50PyBSZWFsbHk/Jyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWRkRXJyb3IoJ0ludmFsaWQgYWdlJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBleGlzdGluZ1RhZ3M6IFRhZ1tdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogJ0Zvb2QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiAnRHJpbmsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiAnQmVlcicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6ICdXaW5lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgbmFtZTogJ0dsdXRlbiBmcmVlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgbmFtZTogJ0ZydWl0JyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VycmVuY2llczEgPSBbXHJcbiAgeyBsYWJlbDogJ0dCUCcsIHZhbHVlOiAnR0JQJyB9LFxyXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUicgfSxcclxuXTtcclxuXHJcbmNvbnN0IGN1cnJlbmNpZXMyID0gW1xyXG4gIHsgbGFiZWw6ICdHQlAnLCB2YWx1ZTogJ0dCUCcgfSxcclxuICB7IGxhYmVsOiAnRVVSJywgdmFsdWU6ICdFVVInIH0sXHJcbiAgeyBsYWJlbDogJ1VTRCcsIHZhbHVlOiAnVVNEJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VycmVuY2llczMgPSBbXHJcbiAgeyBsYWJlbDogJ0dCUCcsIHZhbHVlOiAnR0JQJywgZm9yY2VTZWxlY3RlZDogdHJ1ZSB9LFxyXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUicgfSxcclxuICB7IGxhYmVsOiAnVVNEJywgdmFsdWU6ICdVU0QnIH0sXHJcbl07XHJcblxyXG5jb25zdCBnZW5kZXJWYWx1ZXMgPSBbXHJcbiAgeyB2YWx1ZTogJ00nLCBsYWJlbDogJ01hbGUnIH0sXHJcbiAgeyB2YWx1ZTogJ0YnLCBsYWJlbDogJ0ZlbWFsZScgfSxcclxuXTtcclxuXHJcbmNvbnN0IHRhZ3NFbWFpbFRleHRQcm9wczogVGV4dFByb3BzID0ge1xyXG4gIHZhbGlkYXRvcnM6IFsnZW1haWwnXSxcclxufTtcclxuXHJcbmNvbnN0IGVtYWlsVmFsaWRhdG9yczogVmFsaWRhdG9yVHlwZXNbXSA9IFsnZW1haWwnXTtcclxuXHJcbmNvbnN0IHVybFZhbGlkYXRvcnM6IFZhbGlkYXRvclR5cGVzW10gPSBbJ3VybCddO1xyXG5cclxuY29uc3QgY3VzdG9tQWdlVmFsaWRhdG9yOiBJQmFzZVZhbGlkYXRvcltdID0gW0FnZVZhbGlkYXRvci5pbnN0YW5jZV07XHJcblxyXG5jb25zdCBjdXN0b21OdW1iZXJWYWxpZGF0b3I6IElCYXNlVmFsaWRhdG9yW10gPSBbXHJcbiAgbmV3IE51bWJlclZhbGlkYXRvcih7IG1pbjogMCB9KSxcclxuXTtcclxuXHJcbmNvbnN0IHR5cGVzOiBCdXR0b25UeXBlc1tdID0gW1xyXG4gICdwcmltYXJ5JyxcclxuICAnd2FybmluZycsXHJcbiAgJ2Vycm9yJyxcclxuICAnaW5mbycsXHJcbiAgJ3N1Y2Nlc3MnLFxyXG4gICdncmF5JyxcclxuICAnd2hpdGUnLFxyXG4gICdub25lJyxcclxuXTtcclxuY29uc3QgQnV0dG9uc1Nob3djYXNlOiBSZWFjdC5TRkM8QnV0dG9uUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInB4LTJcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsIDI0NywgMjQ3KScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHt0eXBlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPXtpdGVtfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPXtpdGVtfSBkaXNhYmxlZD17dHJ1ZX0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAgRGlzYWJsZWRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkJ1dHRvbnNTaG93Y2FzZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lOiAnbXktMiBtci0yJyxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNpYyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QmFzaWNQcm9wcywgQmFzaWNTdGF0ZT4ge1xyXG4gIHByaXZhdGUgZm9ybTogRm9ybTtcclxuXHJcbiAgcHJpdmF0ZSBzcGVjaWFsRGF5c0lucHV0SGVhZGVyOiBJbnB1dEhlYWRlclJhdztcclxuXHJcbiAgcHJpdmF0ZSBkcm9wZG93bkZ1bmN0aW9uSGVhZGVyOiBEcm9wZG93bjtcclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsU3RhdGU6IEJhc2ljU3RhdGUgPSB7XHJcbiAgICBnZW5kZXI6ICcnLFxyXG4gICAgbmFtZTogJycsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBhZ2U6ICcnLFxyXG4gICAgbWluMTogJycsXHJcbiAgICBjaGVja2JveDE6IHRydWUsXHJcbiAgICBjaGVja2JveDI6IGZhbHNlLFxyXG4gICAgdmFsaWRhdGVGb3JtU3VibWl0OiB0cnVlLFxyXG4gICAgZm9vZDogJ2JyZWFrZmFzdCcsXHJcbiAgICBkcmluazogJ2JyZWFrZmFzdCcsXHJcbiAgICB0b3VjaE9uOiAnZm9jdXMnLFxyXG4gICAgc3VibWl0RGlzYWJsZXNJbnB1dHM6IHRydWUsXHJcbiAgICBzaW11bGF0ZVVubW91bnQ6IGZhbHNlLFxyXG4gICAgcHJpY2VzMTogW10sXHJcbiAgICBwcmljZXMyOiBbXSxcclxuICAgIHByaWNlczM6IFtdLFxyXG4gICAgdGltZTE6IG5ldyBEYXRlKCksXHJcbiAgICB0aW1lMjogbmV3IERhdGUoKSxcclxuICAgIG9wZW5pbmdIb3Vyczoge1xyXG4gICAgICB0aW1lczogW10sXHJcbiAgICB9LFxyXG4gICAgb3BlbmluZ0hvdXJzV2VlazogW10sXHJcbiAgICBvcGVuaW5nSG91cnNXZWVrRGF5OiB7XHJcbiAgICAgIHRpbWVzOiBbXSxcclxuICAgIH0sXHJcbiAgICBvcGVuaW5nSG91cnNTcGVjaWFsOiBbXSxcclxuICAgIHdlYnNpdGU6ICcnLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBzZWxlY3RlZFZhbHVlczogW10sXHJcbiAgICBtdWx0aXBsZVZhbHVlczogW1xyXG4gICAgICB7IHZhbHVlOiAnT25lIG9wdGlvbicgfSxcclxuICAgICAgeyB2YWx1ZTogJ1NlY29uZCBvcHRpb24nIH0sXHJcbiAgICAgIHsgdmFsdWU6ICdUaGlyZCBvcHRpb24nIH0sXHJcbiAgICAgIHsgdmFsdWU6ICdvbmUgbW9yZSBvcHRpb24nIH0sXHJcbiAgICAgIHsgdmFsdWU6ICdybHkgbG9uZyBsYXN0IG9wdGlvbicgfSxcclxuICAgIF0sXHJcbiAgICBtdWx0aXBsZVJlYWRvbmx5OiBmYWxzZSxcclxuICAgIHRleHRBcmVhVGV4dDogJycsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IEJhc2ljUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZTtcclxuICAgIHRoaXMuaGFuZGxlR2VuZGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVHZW5kZXJDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5keW5hbWljU3VibWl0U3VjY2Vzc0Zvcm0gPSB0aGlzLmR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5keW5hbWljU3VibWl0RXJyb3JGb3JtID0gdGhpcy5keW5hbWljU3VibWl0RXJyb3JGb3JtLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgbGV0IHRpbWUyTWF4ID0gbmV3IERhdGUoKTtcclxuICAgIHRpbWUyTWF4LnNldEhvdXJzKHRpbWUyTWF4LmdldEhvdXJzKCkgKyAxKTtcclxuICAgIHRpbWUyTWF4LnNldE1pbnV0ZXModGltZTJNYXguZ2V0TWludXRlcygpICsgNSk7XHJcblxyXG4gICAgbGV0IHRpbWUyTWluID0gbmV3IERhdGUoKTtcclxuICAgIHRpbWUyTWluLnNldEhvdXJzKHRpbWUyTWluLmdldEhvdXJzKCkgLSAxKTtcclxuICAgIHRpbWUyTWluLnNldE1pbnV0ZXModGltZTJNaW4uZ2V0TWludXRlcygpIC0gNSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyAgbXQtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gbm9WYWxpZGF0ZT17dHJ1ZX0gY2xhc3NOYW1lPVwiaW5wdXRfX2Zvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUdXJuIGZvcm0gdmFsaWRhdGlvbiBvbiBvciBvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5mb3JtVmFsaWRhdGlvblRvZ2dsZX1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnZhbGlkYXRlRm9ybVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlZhbGlkYXRlIGZvcm0gc3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFJhZGlvQ29udGFpbmVyIHRpdGxlPVwiVG91Y2ggb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3VjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCbHVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLnRvdWNoT25DaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG91Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJmb2N1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZvY3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLnRvdWNoT25DaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvUmFkaW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzYWJsZXMgaW5wdXRzXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZGlzYWJsZXNJbnB1dHNDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVubW91bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5zaW11bGF0ZVVubW91bnRDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuc2ltdWxhdGVVbm1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2ltdWxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG15LTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY2FyZCAnfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2sgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuc2ltdWxhdGVVbm1vdW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5mb3JtUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGljb249ezxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1kLTQ4XCI+ZWRpdDwvaT59XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0V4YW1wbGUgZm9ybSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWJUaXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQW5kIHRoaXMgaXMgc3VidGl0bGUuIFRoZXJlJ3MgYWxzbyBpY29uIG9uIHRoZSBsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNob3dFeHBhbmRBbGw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGVyb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZERlZmF1bHQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFpbkJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdWJtaXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybT17dGhpcy5zdGF0ZS52YWxpZGF0ZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdWJtaXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBleHRyYUJ1dHRvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9ezF9IGRyb3Bkb3duPXt0cnVlfSBvbkNsaWNrPXt0aGlzLnRvdWNoQWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUb3VjaCBhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudW5Ub3VjaEFsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFVuLXRvdWNoIGFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2hvdWxkVG9nZ2xlQ29sbGFwc2VPbkhlYWRlckNsaWNrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0NvbnRhaW5lciB0aXRsZT1cIkRyaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2luZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3aGlza2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldoaXNrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRHJpbmtzIChob3Jpem9udGFsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmluazJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2luZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmluazJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2hpc2tleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaGlza2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmluazJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2F0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2F0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuY2hlY2tib3gxQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2JveDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRHJlc3MgY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJXaXRoIHRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIihvcHRpb25hbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuY2hlY2tib3gyQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2JveDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiV2FsbGV0IHBhcmtpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubmFtZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBuYW1lIChubyB0aXRsZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm5hbWVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyBzb21lIGhlbHAgdGV4dC4gSXQgY2FuIGFsc28gZG8gPGI+Ym9sZDwvYj57JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgb3RoZXIgc3R1ZmYuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubmFtZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTmFtZSByZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J1lvdXIgZ2VuZGVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXtnZW5kZXJWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUdlbmRlckNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZ2VuZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkdlbmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50ZXh0QXJlYUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRleHRBcmVhVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRleHRBcmVhQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGV4dEFyZWFUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnU29tZSBjb2xsYXBzZWQgc3R1ZmYnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkVG9nZ2xlQ29sbGFwc2VPbkhlYWRlckNsaWNrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJUaXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJIZWxwZnVsIHRleHQgdGhhdCBkZXNjcmliZXMgd2hhdCdzIGNvbGxhcHNlZCBoZXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtlbWFpbFZhbGlkYXRvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVtYWlsQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIllvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17J1lvdSBjYW4gc2VsZWN0IG1lIGJ1dCBJIGFtIHJlYWRvbmx5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17dXJsVmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXZWJzaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS53ZWJzaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLndlYnNpdGVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91ciB3ZWJzaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tVmFsaWRhdG9ycz17Y3VzdG9tQWdlVmFsaWRhdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBhZ2UgKG9wdGlvbmFsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmFnZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21WYWxpZGF0b3JzPXtjdXN0b21OdW1iZXJWYWxpZGF0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNaW4gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5taW4xQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vbmV5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmNpZXM9e2N1cnJlbmNpZXMxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZXM9e3RoaXMuc3RhdGUucHJpY2VzMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QcmljZXNDaGFuZ2U9e3RoaXMucHJpY2VzMUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb25leVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jaWVzPXtjdXJyZW5jaWVzMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzPXt0aGlzLnN0YXRlLnByaWNlczJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblByaWNlc0NoYW5nZT17dGhpcy5wcmljZXMyQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQcmljZSBtdWx0aXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vbmV5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmNpZXM9e2N1cnJlbmNpZXMzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZXM9e3RoaXMuc3RhdGUucHJpY2VzM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJpY2VzQ2hhbmdlPXt0aGlzLnByaWNlczNDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlByaWNlIG11bHRpcGxlIGZvcmNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXt0aGlzLnN0YXRlLnRpbWUxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lQ2hhbmdlPXt0aGlzLnRpbWUxQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9e3RpbWUyTWF4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49e3RpbWUyTWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU9e3RoaXMuc3RhdGUudGltZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVDaGFuZ2U9e3RoaXMudGltZTJDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIldpdGggTWluL01heFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE9wZW5pbmdIb3Vyc0RheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J09wZW5pbmcgaG91cnMgc2FtcGxlIGRheSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5pbmdIb3Vyc0NoYW5nZT17dGhpcy5vcGVuaW5nSG91cnNDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuaW5nSG91cnM9e3RoaXMuc3RhdGUub3BlbmluZ0hvdXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk9wZW5pbmcgaG91cnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J09wZW5pbmcgaG91cnMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPXsncHJpbWFyeSd9Pkhlcm8gYnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFCdXR0b25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9ezF9IGRyb3Bkb3duPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4dHJhIGJ1dHRvbiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXsyfSBkcm9wZG93bj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYSBidXR0b24gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wZW5pbmdIb3Vyc1dlZWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGF5c0NoYW5nZT17dGhpcy5vcGVuaW5nSG91cnNXZWVrQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlzPXt0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc1dlZWt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhbmRhcmREYXk9e3RoaXMuc3RhdGUub3BlbmluZ0hvdXJzV2Vla0RheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblN0YW5kYXJkRGF5Q2hhbmdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbmluZ0hvdXJzV2Vla1N0YW5kYXJkRGF5Q2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydTcGVjaWFsIGRheXMgb3BlbmluZyBob3Vycyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbm5lclJlZj17dGhpcy5zcGVjaWFsRGF5c0lucHV0SGVhZGVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQnV0dG9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNwZWNpYWxEYXlzQWRkQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wZW5pbmdIb3Vyc1NwZWNpYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGF5c0NoYW5nZT17dGhpcy5vcGVuaW5nSG91cnNTcGVjaWFsQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlzPXt0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc1NwZWNpYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaG9vc2UgZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnQnV0dG9ucyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5CdXR0b249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT17J3ByaW1hcnknfT5IZXJvIGJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+U3RhbmRhcmQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Tm8gc2hhZG93PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIG5vU2hhZG93PXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5IZXJvPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIGhlcm89e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPk91dGxpbmVkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIG91dGxpbmVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5CbGFuazwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBibGFuaz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+U21hbGw8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2Ugc21hbGw9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkNpcmN1bGFyPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIGNpcmN1bGFyPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Ecm9wZG93bjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBkcm9wZG93bj17dHJ1ZX0gY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnTXVsdGlwbGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkRGVmYXVsdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsPVwiTXVsdGlwbGUgcmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5tdWx0aXBsZVJlYWRvbmx5Q2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNdWx0aXBsZSByZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIHN1Z2dlc3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNob29zZSBvciBjcmVhdGUgdGFnc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlblN1Z2dlc3Rpb25zT25UYWdSZW1vdmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUYWdzPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFncz17ZXhpc3RpbmdUYWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M9e3RoaXMuc3RhdGUudGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhZ3NDaGFuZ2VkPXt0aGlzLnRhZ3NDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDaGlwcz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3MgbWF4IDNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFRhZ3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZD17dGhpcy50YWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2hpcHM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdDbGljaz17dCA9PiBjb25zb2xlLndhcm4odCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIG9ubHkgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2l0aCBsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGFncz17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M9e3RoaXMuc3RhdGUudGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhZ3NDaGFuZ2VkPXt0aGlzLnRhZ3NDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQ9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFByb3BzPXt0YWdzRW1haWxUZXh0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9uZSBvciBtb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk11bHRpc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0RW1wdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlcz17dGhpcy5zdGF0ZS5zZWxlY3RlZFZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3RoaXMuc3RhdGUubXVsdGlwbGVWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RlZFZhbHVlc0NoYW5nZT17dGhpcy5zZWxlY3RlZFZhbHVlc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZXM6IFt7IHZhbHVlOiAnT25lIG9wdGlvbicgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRlc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnRHJvcGRvd24nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkRGVmYXVsdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93IGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgbXItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm5vdGlmaWNhdGlvbnM8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25Db3VudD17NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnVDbGFzc05hbWU9XCJwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Fycm93PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SXRlbTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnU3RyaW5nIGhlYWRlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25Db3VudD17NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnVDbGFzc05hbWU9XCJwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JdGVtPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLmRyb3Bkb3duRnVuY3Rpb25IZWFkZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5mdW5jdGlvbkhlYWRlckNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZ1bmN0aW9uIGhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dBcnJvdz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtZW51Q2xhc3NOYW1lPVwicC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+SXRlbTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1WYWxpZGF0aW9uU3VtbWFyeSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgbXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHluYW1pY1N1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdERpc2FibGVzSW5wdXRzPXt0aGlzLnN0YXRlLnN1Ym1pdERpc2FibGVzSW5wdXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydwcmltYXJ5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxDbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ2xhc3NOYW1lPVwiYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZ0NsYXNzTmFtZT1cImJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ2hpbGRyZW49eydFcnJvcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZ0NoaWxkcmVuPXsnV29ya2luZyBvbiBpdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5keW5hbWljU3VibWl0U3VjY2Vzc0Zvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVGb3JtPXt0aGlzLnN0YXRlLnZhbGlkYXRlRm9ybVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFqYXggRXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EeW5hbWljU3VibWl0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHluYW1pY1N1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdERpc2FibGVzSW5wdXRzPXt0aGlzLnN0YXRlLnN1Ym1pdERpc2FibGVzSW5wdXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbENsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3ByaW1hcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmdDbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2xhc3NOYW1lPVwiYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmdDaGlsZHJlbj17J1dvcmtpbmcgb24gaXQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDaGlsZHJlbj17J1RoYXQgd29ya2VkJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmR5bmFtaWNTdWJtaXRFcnJvckZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVGb3JtPXt0aGlzLnN0YXRlLnZhbGlkYXRlRm9ybVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFqYXggU3VjY2Vzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0R5bmFtaWNTdWJtaXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNwZWNpYWxEYXlzSW5wdXRIZWFkZXJSZWYgPSAoZWw6IElucHV0SGVhZGVyUmF3KSA9PlxyXG4gICAgKHRoaXMuc3BlY2lhbERheXNJbnB1dEhlYWRlciA9IGVsKTtcclxuXHJcbiAgcHJpdmF0ZSBmb3JtUmVmID0gKGVsOiBGb3JtKSA9PiAodGhpcy5mb3JtID0gZWwpO1xyXG5cclxuICBwcml2YXRlIGRyb3Bkb3duRnVuY3Rpb25IZWFkZXJSZWYgPSAoZWw6IERyb3Bkb3duKSA9PlxyXG4gICAgKHRoaXMuZHJvcGRvd25GdW5jdGlvbkhlYWRlciA9IGVsKTtcclxuXHJcbiAgcHJpdmF0ZSBmdW5jdGlvbkhlYWRlckNsaWNrID0gKCkgPT5cclxuICAgIHRoaXMuZHJvcGRvd25GdW5jdGlvbkhlYWRlci5zaG93TmF2aWdhdGlvbigpO1xyXG5cclxuICBwcml2YXRlIHNlbGVjdGVkVmFsdWVzQ2hhbmdlZCA9IChzZWxlY3RlZFZhbHVlczogU2VsZWN0VmFsdWVbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFZhbHVlcyB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0YWdzQ2hhbmdlZCA9ICh0YWdzOiBUYWdbXSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRhZ3MgfSk7XHJcblxyXG4gIHByaXZhdGUgbXVsdGlwbGVSZWFkb25seUNoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG11bHRpcGxlUmVhZG9ubHk6ICF0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHkgfSk7XHJcblxyXG4gIHByaXZhdGUgb3BlbmluZ0hvdXJzU3BlY2lhbENoYW5nZWQgPSAoZGF5czogT3BlbmluZ0hvdXJzU3BlY2lhbERheU9ialtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5pbmdIb3Vyc1NwZWNpYWw6IGRheXMgfSk7XHJcblxyXG4gIHByaXZhdGUgc3BlY2lhbERheXNBZGRDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBvcGVuaW5nSG91cnNTcGVjaWFsOiB0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc1NwZWNpYWwuY29uY2F0KFtcclxuICAgICAgICAgIHsgZGF0ZTogdW5kZWZpbmVkLCB0aW1lczogW10gfSxcclxuICAgICAgICBdKSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5zcGVjaWFsRGF5c0lucHV0SGVhZGVyLmV4cGFuZCgpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb3BlbmluZ0hvdXJzV2Vla1N0YW5kYXJkRGF5Q2hhbmdlZCA9IChkYXk6IE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmopID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmluZ0hvdXJzV2Vla0RheTogZGF5IH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc1dlZWtDaGFuZ2VkID0gKGRheXM6IE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmpbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnNXZWVrOiBkYXlzIH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc0NoYW5nZWQgPSAob3BlbmluZ0hvdXJzOiBPcGVuaW5nSG91cnNEYXlPYmopID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmluZ0hvdXJzOiBvcGVuaW5nSG91cnMgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZTJDaGFuZ2VkID0gKHRpbWU6IERhdGUpID0+IHRoaXMuc2V0U3RhdGUoeyB0aW1lMjogdGltZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0aW1lMUNoYW5nZWQgPSAodGltZTogRGF0ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpbWUxOiB0aW1lIH0pO1xyXG5cclxuICBwcml2YXRlIHByaWNlczJDaGFuZ2VkID0gKHByaWNlczogTW9uZXlXaXRoQ3VycmVuY3lbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZXMyOiBwcmljZXMgfSk7XHJcblxyXG4gIHByaXZhdGUgcHJpY2VzM0NoYW5nZWQgPSAocHJpY2VzOiBNb25leVdpdGhDdXJyZW5jeVtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlczM6IHByaWNlcyB9KTtcclxuXHJcbiAgcHJpdmF0ZSBwcmljZXMxQ2hhbmdlZCA9IChwcmljZXM6IE1vbmV5V2l0aEN1cnJlbmN5W10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2VzMTogcHJpY2VzIH0pO1xyXG5cclxuICBwcml2YXRlIG1pbjFDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1pbjE6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIGFnZUNoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWdlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB3ZWJzaXRlQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJzaXRlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBlbWFpbENoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIHRleHRBcmVhQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0QXJlYVRleHQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIG5hbWVDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIGNoZWNrYm94MkNoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrYm94MjogIXRoaXMuc3RhdGUuY2hlY2tib3gyIH0pO1xyXG5cclxuICBwcml2YXRlIGNoZWNrYm94MUNoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrYm94MTogIXRoaXMuc3RhdGUuY2hlY2tib3gxIH0pO1xyXG5cclxuICBwcml2YXRlIGRyaW5rc0NoZWNrZWQgPSAodmFsdWU6IHN0cmluZykgPT4gdGhpcy5zZXRTdGF0ZSh7IGRyaW5rOiB2YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB1blRvdWNoQWxsID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvcm0udW5Ub3VjaEFsbCgpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgc2ltdWxhdGVVbm1vdW50Q2hlY2tlZCA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2ltdWxhdGVVbm1vdW50OiAhdGhpcy5zdGF0ZS5zaW11bGF0ZVVubW91bnQgfSk7XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZXNJbnB1dHNDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJtaXREaXNhYmxlc0lucHV0czogIXRoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHMgfSk7XHJcblxyXG4gIHByaXZhdGUgdG91Y2hPbkNoZWNrZWQgPSAodmFsdWU6ICdibHVyJyB8ICdmb2N1cycpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdG91Y2hPbjogdmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgZm9ybVZhbGlkYXRpb25Ub2dnbGUgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRlRm9ybVN1Ym1pdDogIXRoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0IH0pO1xyXG5cclxuICBwcml2YXRlIHRvdWNoQWxsID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvcm0udG91Y2hBbGwoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGhhbmRsZUdlbmRlckNoYW5nZShlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKHZhbCA9PT0gJ00nIHx8IHZhbCA9PT0gJ0YnKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5kZXI6IHZhbCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3VibWl0Rm9ybShlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcclxuICAgIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybShcclxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxyXG4gICAgc3VibWl0dGluZzogKCkgPT4gdm9pZCxcclxuICAgIGVycm9yOiAoKSA9PiB2b2lkLFxyXG4gICAgc3VjY2VzczogKCkgPT4gdm9pZCxcclxuICAgIHJlc2V0OiAoKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzdWJtaXR0aW5nKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZXJyb3IoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNldCgpLCAzMDAwKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkeW5hbWljU3VibWl0RXJyb3JGb3JtKFxyXG4gICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4sXHJcbiAgICBzdWJtaXR0aW5nOiAoKSA9PiB2b2lkLFxyXG4gICAgZXJyb3I6ICgpID0+IHZvaWQsXHJcbiAgICBzdWNjZXNzOiAoKSA9PiB2b2lkLFxyXG4gICAgcmVzZXQ6ICgpID0+IHZvaWRcclxuICApIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHN1Ym1pdHRpbmcoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzdWNjZXNzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzZXQoKSwgMzAwMCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9