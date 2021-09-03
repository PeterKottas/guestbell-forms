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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      justNumber: 5
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

    _this.justNumberChanged = function (number) {
      return _this.setState({
        justNumber: number
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
      }, "Reset just number to 5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Text"], {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["Money"], {
        currencies: currencies1,
        prices: this.state.prices1,
        touchOn: this.state.touchOn,
        required: true,
        onPricesChange: this.prices1Changed,
        title: "Price"
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
        title: "Price multiple forced"
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
        title: "With Min/Max"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_index__WEBPACK_IMPORTED_MODULE_1__["TimeSpan"], {
        touchOn: this.state.touchOn,
        timeSpan: this.state.timeSpan,
        timeSpanChange: this.timeSpanChanged,
        title: "Time span",
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

/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/*! exports provided: defaultMoneyTranslations, MoneyRaw, Money, SelectRaw, Select, EmailValidator, LatitudeValidator, LongitudeValidator, NumberValidator, UrlValidator, Button, CheckboxRaw, Checkbox, Dropdown, DynamicSubmitMode, DynamicSubmitRaw, DynamicSubmit, Form, DefaultComponent, FormValidationSummaryRaw, FormValidationSummary, InputGroup, InputHeaderRaw, InputHeader, defaultDayTranslations, OpeningHoursDayRaw, OpeningHoursDay, DateInput, OpeningHoursSpecialRaw, OpeningHoursSpecial, Weekday, defaultWeekTranslations, OpeningHoursWeekRaw, OpeningHoursWeek, RadioRaw, Radio, RadioContainer, defaultSubmitTranslations, SubmitRaw, Submit, defaultTagsTranslations, TagsRaw, Tags, TextRaw, Text, TextAreaRaw, TextArea, TimeRaw, Time, TimeSpanUnit, allTimeSpanUnits, TimeSpanRaw, TimeSpan, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validators_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validators/index */ "./src/lib/validators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmailValidator", function() { return _validators_index__WEBPACK_IMPORTED_MODULE_0__["EmailValidator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LatitudeValidator", function() { return _validators_index__WEBPACK_IMPORTED_MODULE_0__["LatitudeValidator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LongitudeValidator", function() { return _validators_index__WEBPACK_IMPORTED_MODULE_0__["LongitudeValidator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberValidator", function() { return _validators_index__WEBPACK_IMPORTED_MODULE_0__["NumberValidator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlValidator", function() { return _validators_index__WEBPACK_IMPORTED_MODULE_0__["UrlValidator"]; });

/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/button */ "./src/lib/components/button/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _components_button__WEBPACK_IMPORTED_MODULE_1__["Button"]; });

/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/checkbox */ "./src/lib/components/checkbox/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxRaw", function() { return _components_checkbox__WEBPACK_IMPORTED_MODULE_2__["CheckboxRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _components_checkbox__WEBPACK_IMPORTED_MODULE_2__["Checkbox"]; });

/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dropdown */ "./src/lib/components/dropdown/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return _components_dropdown__WEBPACK_IMPORTED_MODULE_3__["Dropdown"]; });

/* harmony import */ var _components_dynamicSubmit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dynamicSubmit */ "./src/lib/components/dynamicSubmit/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicSubmitMode", function() { return _components_dynamicSubmit__WEBPACK_IMPORTED_MODULE_4__["DynamicSubmitMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicSubmitRaw", function() { return _components_dynamicSubmit__WEBPACK_IMPORTED_MODULE_4__["DynamicSubmitRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DynamicSubmit", function() { return _components_dynamicSubmit__WEBPACK_IMPORTED_MODULE_4__["DynamicSubmit"]; });

/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form */ "./src/lib/components/form/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _components_form__WEBPACK_IMPORTED_MODULE_5__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return _components_form__WEBPACK_IMPORTED_MODULE_5__["DefaultComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormValidationSummaryRaw", function() { return _components_form__WEBPACK_IMPORTED_MODULE_5__["FormValidationSummaryRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormValidationSummary", function() { return _components_form__WEBPACK_IMPORTED_MODULE_5__["FormValidationSummary"]; });

/* harmony import */ var _components_inputGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/inputGroup */ "./src/lib/components/inputGroup/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return _components_inputGroup__WEBPACK_IMPORTED_MODULE_6__["InputGroup"]; });

/* harmony import */ var _components_inputHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/inputHeader */ "./src/lib/components/inputHeader/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputHeaderRaw", function() { return _components_inputHeader__WEBPACK_IMPORTED_MODULE_7__["InputHeaderRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputHeader", function() { return _components_inputHeader__WEBPACK_IMPORTED_MODULE_7__["InputHeader"]; });

/* harmony import */ var _components_money_Money__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/money/Money */ "./src/lib/components/money/Money.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultMoneyTranslations", function() { return _components_money_Money__WEBPACK_IMPORTED_MODULE_8__["defaultMoneyTranslations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoneyRaw", function() { return _components_money_Money__WEBPACK_IMPORTED_MODULE_8__["MoneyRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Money", function() { return _components_money_Money__WEBPACK_IMPORTED_MODULE_8__["Money"]; });

/* harmony import */ var _components_openingHours_openingHoursDay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/openingHours/openingHoursDay */ "./src/lib/components/openingHours/openingHoursDay/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDayTranslations", function() { return _components_openingHours_openingHoursDay__WEBPACK_IMPORTED_MODULE_9__["defaultDayTranslations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursDayRaw", function() { return _components_openingHours_openingHoursDay__WEBPACK_IMPORTED_MODULE_9__["OpeningHoursDayRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursDay", function() { return _components_openingHours_openingHoursDay__WEBPACK_IMPORTED_MODULE_9__["OpeningHoursDay"]; });

/* harmony import */ var _components_openingHours_openingHoursSpecial__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/openingHours/openingHoursSpecial */ "./src/lib/components/openingHours/openingHoursSpecial/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateInput", function() { return _components_openingHours_openingHoursSpecial__WEBPACK_IMPORTED_MODULE_10__["DateInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursSpecialRaw", function() { return _components_openingHours_openingHoursSpecial__WEBPACK_IMPORTED_MODULE_10__["OpeningHoursSpecialRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursSpecial", function() { return _components_openingHours_openingHoursSpecial__WEBPACK_IMPORTED_MODULE_10__["OpeningHoursSpecial"]; });

/* harmony import */ var _components_openingHours_openingHoursWeek__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/openingHours/openingHoursWeek */ "./src/lib/components/openingHours/openingHoursWeek/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Weekday", function() { return _components_openingHours_openingHoursWeek__WEBPACK_IMPORTED_MODULE_11__["Weekday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultWeekTranslations", function() { return _components_openingHours_openingHoursWeek__WEBPACK_IMPORTED_MODULE_11__["defaultWeekTranslations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursWeekRaw", function() { return _components_openingHours_openingHoursWeek__WEBPACK_IMPORTED_MODULE_11__["OpeningHoursWeekRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursWeek", function() { return _components_openingHours_openingHoursWeek__WEBPACK_IMPORTED_MODULE_11__["OpeningHoursWeek"]; });

/* harmony import */ var _components_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/radio */ "./src/lib/components/radio/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioRaw", function() { return _components_radio__WEBPACK_IMPORTED_MODULE_12__["RadioRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return _components_radio__WEBPACK_IMPORTED_MODULE_12__["Radio"]; });

/* harmony import */ var _components_radioContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/radioContainer */ "./src/lib/components/radioContainer/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioContainer", function() { return _components_radioContainer__WEBPACK_IMPORTED_MODULE_13__["RadioContainer"]; });

/* harmony import */ var _components_select_Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/select/Select */ "./src/lib/components/select/Select.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectRaw", function() { return _components_select_Select__WEBPACK_IMPORTED_MODULE_14__["SelectRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _components_select_Select__WEBPACK_IMPORTED_MODULE_14__["Select"]; });

/* harmony import */ var _components_submit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/submit */ "./src/lib/components/submit/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSubmitTranslations", function() { return _components_submit__WEBPACK_IMPORTED_MODULE_15__["defaultSubmitTranslations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitRaw", function() { return _components_submit__WEBPACK_IMPORTED_MODULE_15__["SubmitRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Submit", function() { return _components_submit__WEBPACK_IMPORTED_MODULE_15__["Submit"]; });

/* harmony import */ var _components_tags__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tags */ "./src/lib/components/tags/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTagsTranslations", function() { return _components_tags__WEBPACK_IMPORTED_MODULE_16__["defaultTagsTranslations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagsRaw", function() { return _components_tags__WEBPACK_IMPORTED_MODULE_16__["TagsRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tags", function() { return _components_tags__WEBPACK_IMPORTED_MODULE_16__["Tags"]; });

/* harmony import */ var _components_text__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/text */ "./src/lib/components/text/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextRaw", function() { return _components_text__WEBPACK_IMPORTED_MODULE_17__["TextRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _components_text__WEBPACK_IMPORTED_MODULE_17__["Text"]; });

/* harmony import */ var _components_textArea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/textArea */ "./src/lib/components/textArea/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextAreaRaw", function() { return _components_textArea__WEBPACK_IMPORTED_MODULE_18__["TextAreaRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return _components_textArea__WEBPACK_IMPORTED_MODULE_18__["TextArea"]; });

/* harmony import */ var _components_time__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/time */ "./src/lib/components/time/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeRaw", function() { return _components_time__WEBPACK_IMPORTED_MODULE_19__["TimeRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return _components_time__WEBPACK_IMPORTED_MODULE_19__["Time"]; });

/* harmony import */ var _components_timeSpan__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/timeSpan */ "./src/lib/components/timeSpan/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeSpanUnit", function() { return _components_timeSpan__WEBPACK_IMPORTED_MODULE_20__["TimeSpanUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allTimeSpanUnits", function() { return _components_timeSpan__WEBPACK_IMPORTED_MODULE_20__["allTimeSpanUnits"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeSpanRaw", function() { return _components_timeSpan__WEBPACK_IMPORTED_MODULE_20__["TimeSpanRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeSpan", function() { return _components_timeSpan__WEBPACK_IMPORTED_MODULE_20__["TimeSpan"]; });

/* harmony import */ var _components_themeProvider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/themeProvider */ "./src/lib/components/themeProvider/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _components_themeProvider__WEBPACK_IMPORTED_MODULE_21__["ThemeProvider"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};
























/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DbGllbnRBcHAvcGFnZXMvYmFzaWMvQmFzaWMudHN4Iiwid2VicGFjazovLy8uL3NyYy9saWIvaW5kZXgudHMiXSwibmFtZXMiOlsiQWdlVmFsaWRhdG9yIiwidmFsdWUiLCJpc1JlcXVpcmVkIiwiYWRkRXJyb3IiLCJudW0iLCJOdW1iZXIiLCJpc05hTiIsImluc3RhbmNlIiwiZXhpc3RpbmdUYWdzIiwiaWQiLCJuYW1lIiwiY3VycmVuY2llczEiLCJsYWJlbCIsImN1cnJlbmNpZXMyIiwiY3VycmVuY2llczMiLCJmb3JjZVNlbGVjdGVkIiwiZ2VuZGVyVmFsdWVzIiwidGFnc0VtYWlsVGV4dFByb3BzIiwidmFsaWRhdG9ycyIsImVtYWlsVmFsaWRhdG9ycyIsInVybFZhbGlkYXRvcnMiLCJjdXN0b21BZ2VWYWxpZGF0b3IiLCJjdXN0b21OdW1iZXJWYWxpZGF0b3IiLCJOdW1iZXJWYWxpZGF0b3IiLCJtaW4iLCJudW1iZXJWYWxpZGF0b3IiLCJ0eXBlcyIsIkJ1dHRvbnNTaG93Y2FzZSIsInByb3BzIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImZsZXhXcmFwIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGVmYXVsdFByb3BzIiwiY2xhc3NOYW1lIiwiQmFzaWMiLCJmb3JtIiwic3BlY2lhbERheXNJbnB1dEhlYWRlciIsImluaXRpYWxTdGF0ZSIsImdlbmRlciIsImVtYWlsIiwiYWdlIiwibWluMSIsImNoZWNrYm94MSIsImNoZWNrYm94MiIsInZhbGlkYXRlRm9ybVN1Ym1pdCIsImZvb2QiLCJkcmluayIsInRvdWNoT24iLCJzdWJtaXREaXNhYmxlc0lucHV0cyIsInNpbXVsYXRlVW5tb3VudCIsInByaWNlczEiLCJwcmljZXMyIiwicHJpY2VzMyIsInRpbWVTcGFuIiwiZHVyYXRpb24iLCJ0aW1lMSIsInRpbWUyIiwib3BlbmluZ0hvdXJzIiwidGltZXMiLCJvcGVuaW5nSG91cnNXZWVrIiwib3BlbmluZ0hvdXJzV2Vla0RheSIsIm9wZW5pbmdIb3Vyc1NwZWNpYWwiLCJ3ZWJzaXRlIiwidGFncyIsInNlbGVjdGVkVmFsdWVzIiwibXVsdGlwbGVWYWx1ZXMiLCJtdWx0aXBsZVJlYWRvbmx5IiwidGV4dEFyZWFUZXh0IiwianVzdE51bWJlciIsImZvcm1SZWYiLCJlbCIsInNlbGVjdGVkVmFsdWVzQ2hhbmdlZCIsInNldFN0YXRlIiwidGFnc0NoYW5nZWQiLCJtdWx0aXBsZVJlYWRvbmx5Q2hlY2tlZCIsInN0YXRlIiwib3BlbmluZ0hvdXJzU3BlY2lhbENoYW5nZWQiLCJkYXlzIiwic3BlY2lhbERheXNBZGRDbGljayIsImNvbmNhdCIsImRhdGUiLCJ1bmRlZmluZWQiLCJjdXJyZW50IiwiZXhwYW5kIiwib3BlbmluZ0hvdXJzV2Vla1N0YW5kYXJkRGF5Q2hhbmdlZCIsImRheSIsIm9wZW5pbmdIb3Vyc1dlZWtDaGFuZ2VkIiwib3BlbmluZ0hvdXJzQ2hhbmdlZCIsInRpbWUyQ2hhbmdlZCIsInRpbWUiLCJ0aW1lMUNoYW5nZWQiLCJ0aW1lU3BhbkNoYW5nZWQiLCJwcmljZXMyQ2hhbmdlZCIsInByaWNlcyIsInByaWNlczNDaGFuZ2VkIiwicHJpY2VzMUNoYW5nZWQiLCJtaW4xQ2hhbmdlZCIsImUiLCJ0YXJnZXQiLCJqdXN0TnVtYmVyQ2hhbmdlZCIsIm51bWJlciIsImFnZUNoYW5nZWQiLCJ3ZWJzaXRlQ2hhbmdlZCIsImVtYWlsQ2hhbmdlZCIsInRleHRBcmVhQ2hhbmdlZCIsIm5hbWVDaGFuZ2VkIiwiY2hlY2tib3gyQ2hlY2tlZCIsImNoZWNrYm94MUNoZWNrZWQiLCJkcmlua3NDaGVja2VkIiwidW5Ub3VjaEFsbCIsInByZXZlbnREZWZhdWx0Iiwic2ltdWxhdGVVbm1vdW50Q2hlY2tlZCIsImRpc2FibGVzSW5wdXRzQ2hlY2tlZCIsInRvdWNoT25DaGVja2VkIiwiZm9ybVZhbGlkYXRpb25Ub2dnbGUiLCJ0b3VjaEFsbCIsImhhbmRsZUdlbmRlckNoYW5nZSIsImJpbmQiLCJzdWJtaXRGb3JtIiwiZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtIiwiZHluYW1pY1N1Ym1pdEVycm9yRm9ybSIsIlJlYWN0IiwidGltZTJNYXgiLCJhZGQiLCJ0aW1lMk1pbiIsInN1YnRyYWN0IiwiVGltZVNwYW5Vbml0IiwiSG91ciIsIk1pbnV0ZSIsInBsYWNlaG9sZGVyIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImZpbHRlciIsImluY2x1ZGVzIiwidCIsImNvbnNvbGUiLCJ3YXJuIiwidmFsIiwic3VibWl0dGluZyIsImVycm9yIiwic3VjY2VzcyIsInJlc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBb0NBO0FBcUNPLElBQU1BLFlBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFdBRUUsa0JBQ0VDLEtBREYsRUFFRUMsVUFGRixFQUdFQyxRQUhGLEVBSVc7QUFDVCxVQUFJQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0osS0FBRCxDQUFoQjs7QUFDQSxVQUFJLENBQUNLLEtBQUssQ0FBQ0YsR0FBRCxDQUFWLEVBQWlCO0FBQ2YsWUFBSUEsR0FBRyxJQUFJLENBQVgsRUFBYztBQUNaRCxrQkFBUSxDQUFDLGVBQUQsQ0FBUjtBQUNBLGlCQUFPLEtBQVA7QUFDRDs7QUFDRCxZQUFJQyxHQUFHLEdBQUcsR0FBVixFQUFlO0FBQ2JELGtCQUFRLENBQUMsb0NBQUQsQ0FBUjtBQUNBLGlCQUFPLEtBQVA7QUFDRDs7QUFDRCxlQUFPLElBQVA7QUFDRCxPQVZELE1BVU87QUFDTEEsZ0JBQVEsQ0FBQyxhQUFELENBQVI7QUFDRDs7QUFDRCxhQUFPLEtBQVA7QUFDRDtBQXRCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBYUgsWSxDQUNHTyxRLEdBQVcsSUFBSVAsWUFBSixFO0FBd0IzQixJQUFNUSxZQUFtQixHQUFHLENBQzFCO0FB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cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBEcm9wZG93bixcclxuICBGb3JtLFxyXG4gIFRpbWUsXHJcbiAgVGV4dCxcclxuICBTZWxlY3QsXHJcbiAgU3VibWl0LFxyXG4gIER5bmFtaWNTdWJtaXQsXHJcbiAgQ2hlY2tib3gsXHJcbiAgUmFkaW8sXHJcbiAgUmFkaW9Db250YWluZXIsXHJcbiAgTW9uZXksXHJcbiAgT3BlbmluZ0hvdXJzRGF5LFxyXG4gIE1vbmV5V2l0aEN1cnJlbmN5LFxyXG4gIE9wZW5pbmdIb3Vyc0RheU9iaixcclxuICBPcGVuaW5nSG91cnNXZWVrLFxyXG4gIE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmosXHJcbiAgT3BlbmluZ0hvdXJzU3BlY2lhbCxcclxuICBJbnB1dEhlYWRlcixcclxuICBCdXR0b24sXHJcbiAgQnV0dG9uVHlwZXMsXHJcbiAgVGFncyxcclxuICBUYWcsXHJcbiAgTnVtYmVyVmFsaWRhdG9yLFxyXG4gIFRleHRBcmVhLFxyXG4gIE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmosXHJcbiAgU2VsZWN0VmFsdWUsXHJcbiAgVGV4dFByb3BzLFxyXG4gIFZhbGlkYXRvclR5cGVzLFxyXG4gIElCYXNlVmFsaWRhdG9yLFxyXG4gIEJ1dHRvblByb3BzLFxyXG4gIEZvcm1WYWxpZGF0aW9uU3VtbWFyeSxcclxuICBJbnB1dEhlYWRlclJhdyxcclxuICBUaW1lU3BhbixcclxuICBUaW1lU3BhblVuaXQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2luZGV4JztcclxuaW1wb3J0IHsgRHVyYXRpb24sIGR1cmF0aW9uIH0gZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzaWNQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNpY1N0YXRlIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZ2VuZGVyOiAnTScgfCAnRicgfCAnJztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGFnZTogc3RyaW5nO1xyXG4gIG1pbjE6IHN0cmluZztcclxuICBqdXN0TnVtYmVyOiBudW1iZXI7XHJcbiAgY2hlY2tib3gxOiBib29sZWFuO1xyXG4gIGNoZWNrYm94MjogYm9vbGVhbjtcclxuICB2YWxpZGF0ZUZvcm1TdWJtaXQ6IGJvb2xlYW47XHJcbiAgZm9vZDogc3RyaW5nO1xyXG4gIGRyaW5rOiBzdHJpbmc7XHJcbiAgdG91Y2hPbjogJ2JsdXInIHwgJ2ZvY3VzJztcclxuICBzdWJtaXREaXNhYmxlc0lucHV0czogYm9vbGVhbjtcclxuICBzaW11bGF0ZVVubW91bnQ6IGJvb2xlYW47XHJcbiAgcHJpY2VzMTogTW9uZXlXaXRoQ3VycmVuY3lbXTtcclxuICBwcmljZXMyOiBNb25leVdpdGhDdXJyZW5jeVtdO1xyXG4gIHByaWNlczM6IE1vbmV5V2l0aEN1cnJlbmN5W107XHJcbiAgdGltZTE6IER1cmF0aW9uO1xyXG4gIHRpbWUyOiBEdXJhdGlvbjtcclxuICB0aW1lU3BhbjogRHVyYXRpb247XHJcbiAgb3BlbmluZ0hvdXJzOiBPcGVuaW5nSG91cnNEYXlPYmo7XHJcbiAgb3BlbmluZ0hvdXJzV2VlazogT3BlbmluZ0hvdXJzV2Vla0RheU9ialtdO1xyXG4gIG9wZW5pbmdIb3Vyc1dlZWtEYXk6IE9wZW5pbmdIb3Vyc0RheU9iajtcclxuICBvcGVuaW5nSG91cnNTcGVjaWFsOiBPcGVuaW5nSG91cnNTcGVjaWFsRGF5T2JqW107XHJcbiAgd2Vic2l0ZTogc3RyaW5nO1xyXG4gIHRhZ3M6IFRhZ1tdO1xyXG4gIHNlbGVjdGVkVmFsdWVzOiBTZWxlY3RWYWx1ZVtdO1xyXG4gIG11bHRpcGxlVmFsdWVzOiBTZWxlY3RWYWx1ZVtdO1xyXG4gIG11bHRpcGxlUmVhZG9ubHk6IGJvb2xlYW47XHJcbiAgdGV4dEFyZWFUZXh0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZ2VWYWxpZGF0b3Ige1xyXG4gIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UgPSBuZXcgQWdlVmFsaWRhdG9yKCk7XHJcbiAgcHVibGljIFZhbGlkYXRlKFxyXG4gICAgdmFsdWU6IHN0cmluZyxcclxuICAgIGlzUmVxdWlyZWQ6IGJvb2xlYW4sXHJcbiAgICBhZGRFcnJvcjogKGVycm9yOiBzdHJpbmcpID0+IHZvaWRcclxuICApOiBib29sZWFuIHtcclxuICAgIGxldCBudW0gPSBOdW1iZXIodmFsdWUpO1xyXG4gICAgaWYgKCFpc05hTihudW0pKSB7XHJcbiAgICAgIGlmIChudW0gPD0gMCkge1xyXG4gICAgICAgIGFkZEVycm9yKCdOb3QgYm9ybiB5ZXQ/Jyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChudW0gPiAxMjIpIHtcclxuICAgICAgICBhZGRFcnJvcignT2xkZXIgdGhhbiBKZWFubmUgQ2FsbWVudD8gUmVhbGx5PycpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFkZEVycm9yKCdJbnZhbGlkIGFnZScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZXhpc3RpbmdUYWdzOiBUYWdbXSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIG5hbWU6ICdGb29kJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbmFtZTogJ0RyaW5rJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgbmFtZTogJ0JlZXInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBuYW1lOiAnV2luZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIG5hbWU6ICdHbHV0ZW4gZnJlZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIG5hbWU6ICdGcnVpdCcsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IGN1cnJlbmNpZXMxID0gW1xyXG4gIHsgbGFiZWw6ICdHQlAnLCB2YWx1ZTogJ0dCUCcgfSxcclxuICB7IGxhYmVsOiAnRVVSJywgdmFsdWU6ICdFVVInIH0sXHJcbl07XHJcblxyXG5jb25zdCBjdXJyZW5jaWVzMiA9IFtcclxuICB7IGxhYmVsOiAnR0JQJywgdmFsdWU6ICdHQlAnIH0sXHJcbiAgeyBsYWJlbDogJ0VVUicsIHZhbHVlOiAnRVVSJyB9LFxyXG4gIHsgbGFiZWw6ICdVU0QnLCB2YWx1ZTogJ1VTRCcgfSxcclxuXTtcclxuXHJcbmNvbnN0IGN1cnJlbmNpZXMzID0gW1xyXG4gIHsgbGFiZWw6ICdHQlAnLCB2YWx1ZTogJ0dCUCcsIGZvcmNlU2VsZWN0ZWQ6IHRydWUgfSxcclxuICB7IGxhYmVsOiAnRVVSJywgdmFsdWU6ICdFVVInIH0sXHJcbiAgeyBsYWJlbDogJ1VTRCcsIHZhbHVlOiAnVVNEJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgZ2VuZGVyVmFsdWVzID0gW1xyXG4gIHsgdmFsdWU6ICdNJywgbGFiZWw6ICdNYWxlJyB9LFxyXG4gIHsgdmFsdWU6ICdGJywgbGFiZWw6ICdGZW1hbGUnIH0sXHJcbl07XHJcblxyXG5jb25zdCB0YWdzRW1haWxUZXh0UHJvcHM6IFRleHRQcm9wcyA9IHtcclxuICB2YWxpZGF0b3JzOiBbJ2VtYWlsJ10sXHJcbn07XHJcblxyXG5jb25zdCBlbWFpbFZhbGlkYXRvcnM6IFZhbGlkYXRvclR5cGVzW10gPSBbJ2VtYWlsJ107XHJcblxyXG5jb25zdCB1cmxWYWxpZGF0b3JzOiBWYWxpZGF0b3JUeXBlc1tdID0gWyd1cmwnXTtcclxuXHJcbmNvbnN0IGN1c3RvbUFnZVZhbGlkYXRvcjogSUJhc2VWYWxpZGF0b3JbXSA9IFtBZ2VWYWxpZGF0b3IuaW5zdGFuY2VdO1xyXG5cclxuY29uc3QgY3VzdG9tTnVtYmVyVmFsaWRhdG9yOiBJQmFzZVZhbGlkYXRvcltdID0gW1xyXG4gIG5ldyBOdW1iZXJWYWxpZGF0b3IoeyBtaW46IDAgfSksXHJcbl07XHJcblxyXG5jb25zdCBudW1iZXJWYWxpZGF0b3I6IFRleHRQcm9wc1sndmFsaWRhdG9ycyddID0gWydudW1iZXInXTtcclxuXHJcbmNvbnN0IHR5cGVzOiBCdXR0b25UeXBlc1tdID0gW1xyXG4gICdwcmltYXJ5JyxcclxuICAnd2FybmluZycsXHJcbiAgJ2Vycm9yJyxcclxuICAnaW5mbycsXHJcbiAgJ3N1Y2Nlc3MnLFxyXG4gICdncmF5JyxcclxuICAnd2hpdGUnLFxyXG4gICdub25lJyxcclxuXTtcclxuY29uc3QgQnV0dG9uc1Nob3djYXNlOiBSZWFjdC5TRkM8QnV0dG9uUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInB4LTJcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsIDI0NywgMjQ3KScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHt0eXBlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPXtpdGVtfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPXtpdGVtfSBkaXNhYmxlZD17dHJ1ZX0gey4uLnByb3BzfT5cclxuICAgICAgICAgICAgRGlzYWJsZWRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkJ1dHRvbnNTaG93Y2FzZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lOiAnbXktMiBtci0yJyxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNpYyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QmFzaWNQcm9wcywgQmFzaWNTdGF0ZT4ge1xyXG4gIHByaXZhdGUgZm9ybTogRm9ybTtcclxuXHJcbiAgcHJpdmF0ZSBzcGVjaWFsRGF5c0lucHV0SGVhZGVyOiBSZWFjdC5SZWZPYmplY3Q8SW5wdXRIZWFkZXJSYXc+O1xyXG5cclxuICBwcml2YXRlIGluaXRpYWxTdGF0ZTogQmFzaWNTdGF0ZSA9IHtcclxuICAgIGdlbmRlcjogJycsXHJcbiAgICBuYW1lOiAnVGVzdCcsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBhZ2U6ICcnLFxyXG4gICAgbWluMTogJycsXHJcbiAgICBjaGVja2JveDE6IHRydWUsXHJcbiAgICBjaGVja2JveDI6IGZhbHNlLFxyXG4gICAgdmFsaWRhdGVGb3JtU3VibWl0OiB0cnVlLFxyXG4gICAgZm9vZDogJ2JyZWFrZmFzdCcsXHJcbiAgICBkcmluazogJ2JyZWFrZmFzdCcsXHJcbiAgICB0b3VjaE9uOiAnZm9jdXMnLFxyXG4gICAgc3VibWl0RGlzYWJsZXNJbnB1dHM6IHRydWUsXHJcbiAgICBzaW11bGF0ZVVubW91bnQ6IGZhbHNlLFxyXG4gICAgcHJpY2VzMTogW10sXHJcbiAgICBwcmljZXMyOiBbXSxcclxuICAgIHByaWNlczM6IFtdLFxyXG4gICAgdGltZVNwYW46IGR1cmF0aW9uKDApLFxyXG4gICAgdGltZTE6IGR1cmF0aW9uKDApLFxyXG4gICAgdGltZTI6IGR1cmF0aW9uKDApLFxyXG4gICAgb3BlbmluZ0hvdXJzOiB7XHJcbiAgICAgIHRpbWVzOiBbXSxcclxuICAgIH0sXHJcbiAgICBvcGVuaW5nSG91cnNXZWVrOiBbXSxcclxuICAgIG9wZW5pbmdIb3Vyc1dlZWtEYXk6IHtcclxuICAgICAgdGltZXM6IFtdLFxyXG4gICAgfSxcclxuICAgIG9wZW5pbmdIb3Vyc1NwZWNpYWw6IFtdLFxyXG4gICAgd2Vic2l0ZTogJycsXHJcbiAgICB0YWdzOiBbXSxcclxuICAgIHNlbGVjdGVkVmFsdWVzOiBbXSxcclxuICAgIG11bHRpcGxlVmFsdWVzOiBbXHJcbiAgICAgIHsgdmFsdWU6ICdPbmUgb3B0aW9uJyB9LFxyXG4gICAgICB7IHZhbHVlOiAnU2Vjb25kIG9wdGlvbicgfSxcclxuICAgICAgeyB2YWx1ZTogJ1RoaXJkIG9wdGlvbicgfSxcclxuICAgICAgeyB2YWx1ZTogJ29uZSBtb3JlIG9wdGlvbicgfSxcclxuICAgICAgeyB2YWx1ZTogJ3JseSBsb25nIGxhc3Qgb3B0aW9uJyB9LFxyXG4gICAgXSxcclxuICAgIG11bHRpcGxlUmVhZG9ubHk6IGZhbHNlLFxyXG4gICAgdGV4dEFyZWFUZXh0OiAnJyxcclxuICAgIGp1c3ROdW1iZXI6IDUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IEJhc2ljUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluaXRpYWxTdGF0ZTtcclxuICAgIHRoaXMuaGFuZGxlR2VuZGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVHZW5kZXJDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5keW5hbWljU3VibWl0U3VjY2Vzc0Zvcm0gPSB0aGlzLmR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5keW5hbWljU3VibWl0RXJyb3JGb3JtID0gdGhpcy5keW5hbWljU3VibWl0RXJyb3JGb3JtLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNwZWNpYWxEYXlzSW5wdXRIZWFkZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBsZXQgdGltZTJNYXggPSBkdXJhdGlvbigpXHJcbiAgICAgIC5hZGQoMSwgJ2hvdXInKVxyXG4gICAgICAuYWRkKDUsICdtaW51dGVzJyk7XHJcbiAgICBsZXQgdGltZTJNaW4gPSBkdXJhdGlvbigpXHJcbiAgICAgIC5zdWJ0cmFjdCgxLCAnaG91cicpXHJcbiAgICAgIC5zdWJ0cmFjdCg1LCAnbWludXRlcycpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgIG10LTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9jayBwLTBcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtIG5vVmFsaWRhdGU9e3RydWV9IGNsYXNzTmFtZT1cImlucHV0X19mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHVybiBmb3JtIHZhbGlkYXRpb24gb24gb3Igb2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZm9ybVZhbGlkYXRpb25Ub2dnbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS52YWxpZGF0ZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJWYWxpZGF0ZSBmb3JtIHN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpb0NvbnRhaW5lciB0aXRsZT1cIlRvdWNoIG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG91Y2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJibHVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy50b3VjaE9uQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvdWNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZm9jdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGb2N1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy50b3VjaE9uQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1JhZGlvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2FibGVzIGlucHV0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRpc2FibGVzSW5wdXRzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnN1Ym1pdERpc2FibGVzSW5wdXRzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVbm1vdW50XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuc2ltdWxhdGVVbm1vdW50Q2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnNpbXVsYXRlVW5tb3VudH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNpbXVsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteS01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NhcmQgJ30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJsb2NrIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgeyF0aGlzLnN0YXRlLnNpbXVsYXRlVW5tb3VudCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuZm9ybVJlZn1cclxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgIC8qZXh0cmFDb21wb25lbnRzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEFwaToge30gYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBbJ1Rlc3QnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnVGVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH19Ki9cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj17PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgbWQtNDhcIj5lZGl0PC9pPn1cclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnRXhhbXBsZSBmb3JtJ31cclxuICAgICAgICAgICAgICAgICAgICAgIHN1YlRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBbmQgdGhpcyBpcyBzdWJ0aXRsZS4gVGhlcmUncyBhbHNvIGljb24gb24gdGhlIGxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2hvd0V4cGFuZEFsbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJoZXJvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkRGVmYXVsdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYWluQnV0dG9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydwcmltYXJ5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN1Ym1pdEZvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVGb3JtPXt0aGlzLnN0YXRlLnZhbGlkYXRlRm9ybVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N1Ym1pdD5cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQnV0dG9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT17MX0gZHJvcGRvd249e3RydWV9IG9uQ2xpY2s9e3RoaXMudG91Y2hBbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRvdWNoIGFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy51blRvdWNoQWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVW4tdG91Y2ggYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaG91bGRUb2dnbGVDb2xsYXBzZU9uSGVhZGVyQ2xpY2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQ29udGFpbmVyIHRpdGxlPVwiRHJpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3aW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndoaXNrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2hpc2tleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2F0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2F0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9Db250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEcmlua3MgKGhvcml6b250YWwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3aW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3aGlza2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldoaXNrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3YXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXYXRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLmRyaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kcmlua3NDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTbWFydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5jaGVja2JveDFDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrYm94MX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEcmVzcyBjb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIldpdGggdG9vbHRpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiKG9wdGlvbmFsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5jaGVja2JveDJDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrYm94Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJXYWxsZXQgcGFya2luZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5uYW1lQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NsZWFyQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IG51bGwgfSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZSAobm8gdGl0bGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5uYW1lQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgc29tZSBoZWxwIHRleHQuIEl0IGNhbiBhbHNvIGRvIDxiPmJvbGQ8L2I+eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIG90aGVyIHN0dWZmLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm5hbWVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk5hbWUgcmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9eydZb3VyIGdlbmRlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17Z2VuZGVyVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVHZW5kZXJDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmdlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJHZW5kZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudGV4dEFyZWFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0QXJlYVRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50ZXh0QXJlYUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRleHRBcmVhVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1NvbWUgY29sbGFwc2VkIHN0dWZmJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZFRvZ2dsZUNvbGxhcHNlT25IZWFkZXJDbGljaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViVGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiSGVscGZ1bCB0ZXh0IHRoYXQgZGVzY3JpYmVzIHdoYXQncyBjb2xsYXBzZWQgaGVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIldpdGggdG9vbHRpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e2VtYWlsVmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuZW1haWxDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91ciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsnWW91IGNhbiBzZWxlY3QgbWUgYnV0IEkgYW0gcmVhZG9ubHknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXt1cmxWYWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldlYnNpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLndlYnNpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMud2Vic2l0ZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJZb3VyIHdlYnNpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21WYWxpZGF0b3JzPXtjdXN0b21BZ2VWYWxpZGF0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIGFnZSAob3B0aW9uYWwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuYWdlQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVZhbGlkYXRvcnM9e2N1c3RvbU51bWJlclZhbGlkYXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1pbiAxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5taW4xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1pbjFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBqdXN0TnVtYmVyOiA1IH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUmVzZXQganVzdCBudW1iZXIgdG8gNVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e251bWJlclZhbGlkYXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2BKdXN0IG51bWJlciAocmVxdWlyZWQpIC0gJHt0aGlzLnN0YXRlLmp1c3ROdW1iZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyPXt0aGlzLnN0YXRlLmp1c3ROdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTnVtYmVyQ2hhbmdlPXt0aGlzLmp1c3ROdW1iZXJDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17bnVtYmVyVmFsaWRhdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17YEp1c3QgbnVtYmVyIC0gJHt0aGlzLnN0YXRlLmp1c3ROdW1iZXJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyPXt0aGlzLnN0YXRlLmp1c3ROdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTnVtYmVyQ2hhbmdlPXt0aGlzLmp1c3ROdW1iZXJDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vbmV5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmNpZXM9e2N1cnJlbmNpZXMxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZXM9e3RoaXMuc3RhdGUucHJpY2VzMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QcmljZXNDaGFuZ2U9e3RoaXMucHJpY2VzMUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb25leVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jaWVzPXtjdXJyZW5jaWVzMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzPXt0aGlzLnN0YXRlLnByaWNlczJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblByaWNlc0NoYW5nZT17dGhpcy5wcmljZXMyQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQcmljZSBtdWx0aXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1vbmV5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmNpZXM9e2N1cnJlbmNpZXMzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZXM9e3RoaXMuc3RhdGUucHJpY2VzM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dNdWx0aXBsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJpY2VzQ2hhbmdlPXt0aGlzLnByaWNlczNDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlByaWNlIG11bHRpcGxlIGZvcmNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXt0aGlzLnN0YXRlLnRpbWUxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lQ2hhbmdlPXt0aGlzLnRpbWUxQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg9e3RpbWUyTWF4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49e3RpbWUyTWlufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU9e3RoaXMuc3RhdGUudGltZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVDaGFuZ2U9e3RoaXMudGltZTJDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIldpdGggTWluL01heFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRpbWVTcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNwYW49e3RoaXMuc3RhdGUudGltZVNwYW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVTcGFuQ2hhbmdlPXt0aGlzLnRpbWVTcGFuQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUaW1lIHNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZFVuaXRzPXtUaW1lU3BhblVuaXQuSG91ciB8IFRpbWVTcGFuVW5pdC5NaW51dGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE9wZW5pbmdIb3Vyc0RheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17J09wZW5pbmcgaG91cnMgc2FtcGxlIGRheSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5pbmdIb3Vyc0NoYW5nZT17dGhpcy5vcGVuaW5nSG91cnNDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVuaW5nSG91cnM9e3RoaXMuc3RhdGUub3BlbmluZ0hvdXJzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk9wZW5pbmcgaG91cnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VDYXBhY2l0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydPcGVuaW5nIGhvdXJzJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5CdXR0b249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT17J3ByaW1hcnknfT5IZXJvIGJ1dHRvbjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhQnV0dG9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXsxfSBkcm9wZG93bj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYSBidXR0b24gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGtleT17Mn0gZHJvcGRvd249e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXh0cmEgYnV0dG9uIDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVuaW5nSG91cnNXZWVrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRheXNDaGFuZ2U9e3RoaXMub3BlbmluZ0hvdXJzV2Vla0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5cz17dGhpcy5zdGF0ZS5vcGVuaW5nSG91cnNXZWVrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YW5kYXJkRGF5PXt0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc1dlZWtEYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TdGFuZGFyZERheUNoYW5nZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5pbmdIb3Vyc1dlZWtTdGFuZGFyZERheUNoYW5nZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlQ2FwYWNpdHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnU3BlY2lhbCBkYXlzIG9wZW5pbmcgaG91cnMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnNwZWNpYWxEYXlzSW5wdXRIZWFkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5CdXR0b249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydwcmltYXJ5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3BlY2lhbERheXNBZGRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3BlbmluZ0hvdXJzU3BlY2lhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25EYXlzQ2hhbmdlPXt0aGlzLm9wZW5pbmdIb3Vyc1NwZWNpYWxDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRheXM9e3RoaXMuc3RhdGUub3BlbmluZ0hvdXJzU3BlY2lhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNob29zZSBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydCdXR0b25zJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPXsncHJpbWFyeSd9Pkhlcm8gYnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5TdGFuZGFyZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5ObyBzaGFkb3c8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2Ugbm9TaGFkb3c9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkhlcm88L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgaGVybz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+T3V0bGluZWQ8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2Ugb3V0bGluZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkJsYW5rPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIGJsYW5rPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5TbWFsbDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBzbWFsbD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Q2lyY3VsYXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgY2lyY3VsYXI9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkRyb3Bkb3duPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIGRyb3Bkb3duPXt0cnVlfSBjbGFzc05hbWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5Vbm9idHJ1c2l2ZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSB1bm9idHJ1c2l2ZT17dHJ1ZX0gY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+VGV4dDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSB0ZXh0PXt0cnVlfSBjbGFzc05hbWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5EaXNhYmxlIGFmdGVyIGNsaWNrPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQWZ0ZXJDbGlja01zPXsyMDAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUFmdGVyQ2xpY2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0SGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnTXVsdGlwbGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkRGVmYXVsdD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhYmVsPVwiTXVsdGlwbGUgcmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5tdWx0aXBsZVJlYWRvbmx5Q2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNdWx0aXBsZSByZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQW5kIGxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UHJvcHM9e3sgcGxhY2Vob2xkZXI6ICdXaXRoIHBsYWNlaG9sZGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIHN1Z2dlc3Rpb25zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNob29zZSBvciBjcmVhdGUgdGFnc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hFeGlzdGluZ1RhZ3M9e3N0YXJ0c1dpdGggPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYWdzLmZpbHRlcihlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5uYW1lLmluY2x1ZGVzKHN0YXJ0c1dpdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQ9eydOb3QgZm91bmQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyRXhpc3RpbmdUYWdzPXsodCwgdGFncykgPT4gdGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3Mgc3VnZ2VzdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2hvb3NlIHRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFRhZ3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYWdzPXtleGlzdGluZ1RhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NoaXBzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGFncyBtYXggM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGFncz17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M9e3RoaXMuc3RhdGUudGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhZ3NDaGFuZ2VkPXt0aGlzLnRhZ3NDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDaGlwcz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhZ0NsaWNrPXt0ID0+IGNvbnNvbGUud2Fybih0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3Mgb25seSBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaXRoIGxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUYWdzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudD17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0UHJvcHM9e3RhZ3NFbWFpbFRleHRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT25lIG9yIG1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTXVsdGlzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRFbXB0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVzPXt0aGlzLnN0YXRlLnNlbGVjdGVkVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17dGhpcy5zdGF0ZS5tdWx0aXBsZVZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGVkVmFsdWVzQ2hhbmdlPXt0aGlzLnNlbGVjdGVkVmFsdWVzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlczogW3sgdmFsdWU6ICdPbmUgb3B0aW9uJyB9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGVzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydEcm9wZG93bid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWREZWZhdWx0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3cgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtci0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bm90aWZpY2F0aW9uczwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNvdW50PXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWVudUNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QXJyb3c9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgZHJvcGRvd249e3RydWV9IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXsnU3RyaW5nIGhlYWRlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25Db3VudD17NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnVDbGFzc05hbWU9XCJwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JdGVtPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPkZ1bmN0aW9uIGhlYWRlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Fycm93PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnVDbGFzc05hbWU9XCJwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JdGVtPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybVZhbGlkYXRpb25TdW1tYXJ5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEeW5hbWljU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0RGlzYWJsZXNJbnB1dHM9e3RoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3ByaW1hcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbENsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDbGFzc05hbWU9XCJidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nQ2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDaGlsZHJlbj17J0Vycm9yJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nQ2hpbGRyZW49eydXb3JraW5nIG9uIGl0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm09e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWpheCBFcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0R5bmFtaWNTdWJtaXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEeW5hbWljU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0RGlzYWJsZXNJbnB1dHM9e3RoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsQ2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZ0NsYXNzTmFtZT1cImJ0bi1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDbGFzc05hbWU9XCJidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0dGluZ0NoaWxkcmVuPXsnV29ya2luZyBvbiBpdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NoaWxkcmVuPXsnVGhhdCB3b3JrZWQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZHluYW1pY1N1Ym1pdEVycm9yRm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZUZvcm09e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWpheCBTdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHluYW1pY1N1Ym1pdD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybVJlZiA9IChlbDogRm9ybSkgPT4gKHRoaXMuZm9ybSA9IGVsKTtcclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RlZFZhbHVlc0NoYW5nZWQgPSAoc2VsZWN0ZWRWYWx1ZXM6IFNlbGVjdFZhbHVlW10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRWYWx1ZXMgfSk7XHJcblxyXG4gIHByaXZhdGUgdGFnc0NoYW5nZWQgPSAodGFnczogVGFnW10pID0+IHRoaXMuc2V0U3RhdGUoeyB0YWdzIH0pO1xyXG5cclxuICBwcml2YXRlIG11bHRpcGxlUmVhZG9ubHlDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBtdWx0aXBsZVJlYWRvbmx5OiAhdGhpcy5zdGF0ZS5tdWx0aXBsZVJlYWRvbmx5IH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc1NwZWNpYWxDaGFuZ2VkID0gKGRheXM6IE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmpbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnNTcGVjaWFsOiBkYXlzIH0pO1xyXG5cclxuICBwcml2YXRlIHNwZWNpYWxEYXlzQWRkQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgb3BlbmluZ0hvdXJzU3BlY2lhbDogdGhpcy5zdGF0ZS5vcGVuaW5nSG91cnNTcGVjaWFsLmNvbmNhdChbXHJcbiAgICAgICAgICB7IGRhdGU6IHVuZGVmaW5lZCwgdGltZXM6IFtdIH0sXHJcbiAgICAgICAgXSksXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMuc3BlY2lhbERheXNJbnB1dEhlYWRlci5jdXJyZW50LmV4cGFuZCgpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb3BlbmluZ0hvdXJzV2Vla1N0YW5kYXJkRGF5Q2hhbmdlZCA9IChkYXk6IE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmopID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmluZ0hvdXJzV2Vla0RheTogZGF5IH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc1dlZWtDaGFuZ2VkID0gKGRheXM6IE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmpbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnNXZWVrOiBkYXlzIH0pO1xyXG5cclxuICBwcml2YXRlIG9wZW5pbmdIb3Vyc0NoYW5nZWQgPSAob3BlbmluZ0hvdXJzOiBPcGVuaW5nSG91cnNEYXlPYmopID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmluZ0hvdXJzOiBvcGVuaW5nSG91cnMgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZTJDaGFuZ2VkID0gKHRpbWU6IER1cmF0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgdGltZTI6IHRpbWUgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZTFDaGFuZ2VkID0gKHRpbWU6IER1cmF0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgdGltZTE6IHRpbWUgfSk7XHJcblxyXG4gIHByaXZhdGUgdGltZVNwYW5DaGFuZ2VkID0gKHRpbWVTcGFuOiBEdXJhdGlvbikgPT4gdGhpcy5zZXRTdGF0ZSh7IHRpbWVTcGFuIH0pO1xyXG5cclxuICBwcml2YXRlIHByaWNlczJDaGFuZ2VkID0gKHByaWNlczogTW9uZXlXaXRoQ3VycmVuY3lbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZXMyOiBwcmljZXMgfSk7XHJcblxyXG4gIHByaXZhdGUgcHJpY2VzM0NoYW5nZWQgPSAocHJpY2VzOiBNb25leVdpdGhDdXJyZW5jeVtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlczM6IHByaWNlcyB9KTtcclxuXHJcbiAgcHJpdmF0ZSBwcmljZXMxQ2hhbmdlZCA9IChwcmljZXM6IE1vbmV5V2l0aEN1cnJlbmN5W10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2VzMTogcHJpY2VzIH0pO1xyXG5cclxuICBwcml2YXRlIG1pbjFDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1pbjE6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIGp1c3ROdW1iZXJDaGFuZ2VkID0gKG51bWJlcjogbnVtYmVyKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGp1c3ROdW1iZXI6IG51bWJlciB9KTtcclxuXHJcbiAgcHJpdmF0ZSBhZ2VDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFnZTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgd2Vic2l0ZUNoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgd2Vic2l0ZTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgZW1haWxDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0ZXh0QXJlYUNoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdGV4dEFyZWFUZXh0OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBuYW1lQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBjaGVja2JveDJDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja2JveDI6ICF0aGlzLnN0YXRlLmNoZWNrYm94MiB9KTtcclxuXHJcbiAgcHJpdmF0ZSBjaGVja2JveDFDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja2JveDE6ICF0aGlzLnN0YXRlLmNoZWNrYm94MSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBkcmlua3NDaGVja2VkID0gKHZhbHVlOiBzdHJpbmcpID0+IHRoaXMuc2V0U3RhdGUoeyBkcmluazogdmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgdW5Ub3VjaEFsbCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5mb3JtLnVuVG91Y2hBbGwoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHNpbXVsYXRlVW5tb3VudENoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNpbXVsYXRlVW5tb3VudDogIXRoaXMuc3RhdGUuc2ltdWxhdGVVbm1vdW50IH0pO1xyXG5cclxuICBwcml2YXRlIGRpc2FibGVzSW5wdXRzQ2hlY2tlZCA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc3VibWl0RGlzYWJsZXNJbnB1dHM6ICF0aGlzLnN0YXRlLnN1Ym1pdERpc2FibGVzSW5wdXRzIH0pO1xyXG5cclxuICBwcml2YXRlIHRvdWNoT25DaGVja2VkID0gKHZhbHVlOiAnYmx1cicgfCAnZm9jdXMnKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRvdWNoT246IHZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIGZvcm1WYWxpZGF0aW9uVG9nZ2xlID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0ZUZvcm1TdWJtaXQ6ICF0aGlzLnN0YXRlLnZhbGlkYXRlRm9ybVN1Ym1pdCB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0b3VjaEFsbCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5mb3JtLnRvdWNoQWxsKCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVHZW5kZXJDaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSB7XHJcbiAgICBjb25zdCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGlmICh2YWwgPT09ICdNJyB8fCB2YWwgPT09ICdGJykge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZ2VuZGVyOiB2YWwgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1Ym1pdEZvcm0oZT86IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XHJcbiAgICBlICYmIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUodGhpcy5pbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkeW5hbWljU3VibWl0U3VjY2Vzc0Zvcm0oXHJcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PixcclxuICAgIHN1Ym1pdHRpbmc6ICgpID0+IHZvaWQsXHJcbiAgICBlcnJvcjogKCkgPT4gdm9pZCxcclxuICAgIHN1Y2Nlc3M6ICgpID0+IHZvaWQsXHJcbiAgICByZXNldDogKCkgPT4gdm9pZFxyXG4gICkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc3VibWl0dGluZygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGVycm9yKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzZXQoKSwgMzAwMCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHluYW1pY1N1Ym1pdEVycm9yRm9ybShcclxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxyXG4gICAgc3VibWl0dGluZzogKCkgPT4gdm9pZCxcclxuICAgIGVycm9yOiAoKSA9PiB2b2lkLFxyXG4gICAgc3VjY2VzczogKCkgPT4gdm9pZCxcclxuICAgIHJlc2V0OiAoKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzdWJtaXR0aW5nKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc3VjY2VzcygpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc2V0KCksIDMwMDApO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYXNpYztcclxuIiwiZXhwb3J0ICogZnJvbSAnLi92YWxpZGF0b3JzL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jaGVja2JveCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9kcm9wZG93bic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9keW5hbWljU3VibWl0JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXRHcm91cCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9pbnB1dEhlYWRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9tb25leS9Nb25leSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9vcGVuaW5nSG91cnMvb3BlbmluZ0hvdXJzRGF5JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL29wZW5pbmdIb3Vycy9vcGVuaW5nSG91cnNTcGVjaWFsJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL29wZW5pbmdIb3Vycy9vcGVuaW5nSG91cnNXZWVrJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvQ29udGFpbmVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC9TZWxlY3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvc3VibWl0JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RhZ3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGV4dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90ZXh0QXJlYSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90aW1lJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RpbWVTcGFuJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RoZW1lUHJvdmlkZXInO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9