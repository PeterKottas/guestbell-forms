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
      justNumber: 5,
      hideNumber: false
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
        label: "Hide/show number inputs"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGVtby9DbGllbnRBcHAvcGFnZXMvYmFzaWMvQmFzaWMudHN4Il0sIm5hbWVzIjpbIkFnZVZhbGlkYXRvciIsInZhbHVlIiwiaXNSZXF1aXJlZCIsImFkZEVycm9yIiwibnVtIiwiTnVtYmVyIiwiaXNOYU4iLCJpbnN0YW5jZSIsImV4aXN0aW5nVGFncyIsImlkIiwibmFtZSIsImN1cnJlbmNpZXMxIiwibGFiZWwiLCJjdXJyZW5jaWVzMiIsImN1cnJlbmNpZXMzIiwiZm9yY2VTZWxlY3RlZCIsImdlbmRlclZhbHVlcyIsInRhZ3NFbWFpbFRleHRQcm9wcyIsInZhbGlkYXRvcnMiLCJlbWFpbFZhbGlkYXRvcnMiLCJ1cmxWYWxpZGF0b3JzIiwiY3VzdG9tQWdlVmFsaWRhdG9yIiwiY3VzdG9tTnVtYmVyVmFsaWRhdG9yIiwiTnVtYmVyVmFsaWRhdG9yIiwibWluIiwibnVtYmVyVmFsaWRhdG9yIiwidHlwZXMiLCJCdXR0b25zU2hvd2Nhc2UiLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJmbGV4V3JhcCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsIkJhc2ljIiwiZm9ybSIsInNwZWNpYWxEYXlzSW5wdXRIZWFkZXIiLCJpbml0aWFsU3RhdGUiLCJnZW5kZXIiLCJlbWFpbCIsImFnZSIsIm1pbjEiLCJjaGVja2JveDEiLCJjaGVja2JveDIiLCJ2YWxpZGF0ZUZvcm1TdWJtaXQiLCJmb29kIiwiZHJpbmsiLCJ0b3VjaE9uIiwic3VibWl0RGlzYWJsZXNJbnB1dHMiLCJzaW11bGF0ZVVubW91bnQiLCJwcmljZXMxIiwicHJpY2VzMiIsInByaWNlczMiLCJ0aW1lU3BhbiIsImR1cmF0aW9uIiwidGltZTEiLCJ0aW1lMiIsIm9wZW5pbmdIb3VycyIsInRpbWVzIiwib3BlbmluZ0hvdXJzV2VlayIsIm9wZW5pbmdIb3Vyc1dlZWtEYXkiLCJvcGVuaW5nSG91cnNTcGVjaWFsIiwid2Vic2l0ZSIsInRhZ3MiLCJzZWxlY3RlZFZhbHVlcyIsIm11bHRpcGxlVmFsdWVzIiwibXVsdGlwbGVSZWFkb25seSIsInRleHRBcmVhVGV4dCIsImp1c3ROdW1iZXIiLCJoaWRlTnVtYmVyIiwiZm9ybVJlZiIsImVsIiwic2VsZWN0ZWRWYWx1ZXNDaGFuZ2VkIiwic2V0U3RhdGUiLCJ0YWdzQ2hhbmdlZCIsIm11bHRpcGxlUmVhZG9ubHlDaGVja2VkIiwic3RhdGUiLCJvcGVuaW5nSG91cnNTcGVjaWFsQ2hhbmdlZCIsImRheXMiLCJzcGVjaWFsRGF5c0FkZENsaWNrIiwiY29uY2F0IiwiZGF0ZSIsInVuZGVmaW5lZCIsImN1cnJlbnQiLCJleHBhbmQiLCJvcGVuaW5nSG91cnNXZWVrU3RhbmRhcmREYXlDaGFuZ2VkIiwiZGF5Iiwib3BlbmluZ0hvdXJzV2Vla0NoYW5nZWQiLCJvcGVuaW5nSG91cnNDaGFuZ2VkIiwidGltZTJDaGFuZ2VkIiwidGltZSIsInRpbWUxQ2hhbmdlZCIsInRpbWVTcGFuQ2hhbmdlZCIsInByaWNlczJDaGFuZ2VkIiwicHJpY2VzIiwicHJpY2VzM0NoYW5nZWQiLCJwcmljZXMxQ2hhbmdlZCIsIm1pbjFDaGFuZ2VkIiwiZSIsInRhcmdldCIsImp1c3ROdW1iZXJDaGFuZ2VkIiwiYWdlQ2hhbmdlZCIsIndlYnNpdGVDaGFuZ2VkIiwiZW1haWxDaGFuZ2VkIiwidGV4dEFyZWFDaGFuZ2VkIiwibmFtZUNoYW5nZWQiLCJjaGVja2JveDJDaGVja2VkIiwiY2hlY2tib3gxQ2hlY2tlZCIsImRyaW5rc0NoZWNrZWQiLCJ1blRvdWNoQWxsIiwicHJldmVudERlZmF1bHQiLCJzaW11bGF0ZVVubW91bnRDaGVja2VkIiwiZGlzYWJsZXNJbnB1dHNDaGVja2VkIiwidG91Y2hPbkNoZWNrZWQiLCJmb3JtVmFsaWRhdGlvblRvZ2dsZSIsInRvdWNoQWxsIiwiaGFuZGxlR2VuZGVyQ2hhbmdlIiwiYmluZCIsInN1Ym1pdEZvcm0iLCJkeW5hbWljU3VibWl0U3VjY2Vzc0Zvcm0iLCJkeW5hbWljU3VibWl0RXJyb3JGb3JtIiwiUmVhY3QiLCJ0aW1lMk1heCIsImFkZCIsInRpbWUyTWluIiwic3VidHJhY3QiLCJjaGVja2VkIiwiVGltZVNwYW5Vbml0IiwiSG91ciIsIk1pbnV0ZSIsInBsYWNlaG9sZGVyIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImZpbHRlciIsImluY2x1ZGVzIiwidCIsImNvbnNvbGUiLCJ3YXJuIiwidmFsIiwic3VibWl0dGluZyIsImVycm9yIiwic3VjY2VzcyIsInJlc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBb0NBO0FBc0NPLElBQU1BLFlBQWI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFdBRUUsa0JBQ0VDLEtBREYsRUFFRUMsVUFGRixFQUdFQyxRQUhGLEVBSVc7QUFDVCxVQUFJQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0osS0FBRCxDQUFoQjs7QUFDQSxVQUFJLENBQUNLLEtBQUssQ0FBQ0YsR0FBRCxDQUFWLEVBQWlCO0FBQ2YsWUFBSUEsR0FBRyxJQUFJLENBQVgsRUFBYztBQUNaRCxrQkFBUSxDQUFDLGVBQUQsQ0FBUjtBQUNBLGlCQUFPLEtBQVA7QUFDRDs7QUFDRCxZQUFJQyxHQUFHLEdBQUcsR0FBVixFQUFlO0FBQ2JELGtCQUFRLENBQUMsb0NBQUQsQ0FBUjtBQUNBLGlCQUFPLEtBQVA7QUFDRDs7QUFDRCxlQUFPLElBQVA7QUFDRCxPQVZELE1BVU87QUFDTEEsZ0JBQVEsQ0FBQyxhQUFELENBQVI7QUFDRDs7QUFDRCxhQUFPLEtBQVA7QUFDRDtBQXRCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBYUgsWSxDQUNHTyxRLEdBQVcsSUFBSVAsWUFBSixFO0FBd0IzQixJQUFNUSxZQUFtQixHQUFHLENBQzFCO0FBQ0VDLElBQUUsRUFBRSxDQURO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RUFNRTtBQUNBOUMsT0FBQyxDQUFDWSxjQUFGO0FBQ0ErQixnQkFBVTtBQUNWUCxnQkFBVSxDQUFDLFlBQU07QUFDZlMsZUFBTztBQUNQVCxrQkFBVSxDQUFDO0FBQUEsaUJBQU1VLEtBQUssRUFBWDtBQUFBLFNBQUQsRUFBZ0IsSUFBaEIsQ0FBVjtBQUNELE9BSFMsRUFHUCxJQUhPLENBQVY7QUFJRDtBQTkxQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLEVBQTJCdkIsbURBQTNCO2VBaTJCZXZGLEs7QUFBQTs7Ozs7Ozs7OzswQkFqK0JGckMsWTswQkF5QlBRLFk7MEJBMkJBRyxXOzBCQUtBRSxXOzBCQU1BQyxXOzBCQU1BRSxZOzBCQUtBQyxrQjswQkFJQUUsZTswQkFFQUMsYTswQkFFQUMsa0I7MEJBRUFDLHFCOzBCQUlBRyxlOzBCQUVBQyxLOzBCQVVBQyxlOzBCQTRCT1UsSyIsImZpbGUiOiI2NGU1M2M0LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBEcm9wZG93bixcclxuICBGb3JtLFxyXG4gIFRpbWUsXHJcbiAgVGV4dCxcclxuICBTZWxlY3QsXHJcbiAgU3VibWl0LFxyXG4gIER5bmFtaWNTdWJtaXQsXHJcbiAgQ2hlY2tib3gsXHJcbiAgUmFkaW8sXHJcbiAgUmFkaW9Db250YWluZXIsXHJcbiAgTW9uZXksXHJcbiAgT3BlbmluZ0hvdXJzRGF5LFxyXG4gIE1vbmV5V2l0aEN1cnJlbmN5LFxyXG4gIE9wZW5pbmdIb3Vyc0RheU9iaixcclxuICBPcGVuaW5nSG91cnNXZWVrLFxyXG4gIE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmosXHJcbiAgT3BlbmluZ0hvdXJzU3BlY2lhbCxcclxuICBJbnB1dEhlYWRlcixcclxuICBCdXR0b24sXHJcbiAgQnV0dG9uVHlwZXMsXHJcbiAgVGFncyxcclxuICBUYWcsXHJcbiAgTnVtYmVyVmFsaWRhdG9yLFxyXG4gIFRleHRBcmVhLFxyXG4gIE9wZW5pbmdIb3Vyc1dlZWtEYXlPYmosXHJcbiAgU2VsZWN0VmFsdWUsXHJcbiAgVGV4dFByb3BzLFxyXG4gIFZhbGlkYXRvclR5cGVzLFxyXG4gIElCYXNlVmFsaWRhdG9yLFxyXG4gIEJ1dHRvblByb3BzLFxyXG4gIEZvcm1WYWxpZGF0aW9uU3VtbWFyeSxcclxuICBJbnB1dEhlYWRlclJhdyxcclxuICBUaW1lU3BhbixcclxuICBUaW1lU3BhblVuaXQsXHJcbn0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2luZGV4JztcclxuaW1wb3J0IHsgRHVyYXRpb24sIGR1cmF0aW9uIH0gZnJvbSAnbW9tZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzaWNQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNpY1N0YXRlIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZ2VuZGVyOiAnTScgfCAnRicgfCAnJztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGFnZTogc3RyaW5nO1xyXG4gIG1pbjE6IHN0cmluZztcclxuICBoaWRlTnVtYmVyOiBib29sZWFuO1xyXG4gIGp1c3ROdW1iZXI6IG51bWJlcjtcclxuICBjaGVja2JveDE6IGJvb2xlYW47XHJcbiAgY2hlY2tib3gyOiBib29sZWFuO1xyXG4gIHZhbGlkYXRlRm9ybVN1Ym1pdDogYm9vbGVhbjtcclxuICBmb29kOiBzdHJpbmc7XHJcbiAgZHJpbms6IHN0cmluZztcclxuICB0b3VjaE9uOiAnYmx1cicgfCAnZm9jdXMnO1xyXG4gIHN1Ym1pdERpc2FibGVzSW5wdXRzOiBib29sZWFuO1xyXG4gIHNpbXVsYXRlVW5tb3VudDogYm9vbGVhbjtcclxuICBwcmljZXMxOiBNb25leVdpdGhDdXJyZW5jeVtdO1xyXG4gIHByaWNlczI6IE1vbmV5V2l0aEN1cnJlbmN5W107XHJcbiAgcHJpY2VzMzogTW9uZXlXaXRoQ3VycmVuY3lbXTtcclxuICB0aW1lMTogRHVyYXRpb247XHJcbiAgdGltZTI6IER1cmF0aW9uO1xyXG4gIHRpbWVTcGFuOiBEdXJhdGlvbjtcclxuICBvcGVuaW5nSG91cnM6IE9wZW5pbmdIb3Vyc0RheU9iajtcclxuICBvcGVuaW5nSG91cnNXZWVrOiBPcGVuaW5nSG91cnNXZWVrRGF5T2JqW107XHJcbiAgb3BlbmluZ0hvdXJzV2Vla0RheTogT3BlbmluZ0hvdXJzRGF5T2JqO1xyXG4gIG9wZW5pbmdIb3Vyc1NwZWNpYWw6IE9wZW5pbmdIb3Vyc1NwZWNpYWxEYXlPYmpbXTtcclxuICB3ZWJzaXRlOiBzdHJpbmc7XHJcbiAgdGFnczogVGFnW107XHJcbiAgc2VsZWN0ZWRWYWx1ZXM6IFNlbGVjdFZhbHVlW107XHJcbiAgbXVsdGlwbGVWYWx1ZXM6IFNlbGVjdFZhbHVlW107XHJcbiAgbXVsdGlwbGVSZWFkb25seTogYm9vbGVhbjtcclxuICB0ZXh0QXJlYVRleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFnZVZhbGlkYXRvciB7XHJcbiAgcHVibGljIHN0YXRpYyBpbnN0YW5jZSA9IG5ldyBBZ2VWYWxpZGF0b3IoKTtcclxuICBwdWJsaWMgVmFsaWRhdGUoXHJcbiAgICB2YWx1ZTogc3RyaW5nLFxyXG4gICAgaXNSZXF1aXJlZDogYm9vbGVhbixcclxuICAgIGFkZEVycm9yOiAoZXJyb3I6IHN0cmluZykgPT4gdm9pZFxyXG4gICk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IG51bSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICBpZiAoIWlzTmFOKG51bSkpIHtcclxuICAgICAgaWYgKG51bSA8PSAwKSB7XHJcbiAgICAgICAgYWRkRXJyb3IoJ05vdCBib3JuIHlldD8nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bSA+IDEyMikge1xyXG4gICAgICAgIGFkZEVycm9yKCdPbGRlciB0aGFuIEplYW5uZSBDYWxtZW50PyBSZWFsbHk/Jyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWRkRXJyb3IoJ0ludmFsaWQgYWdlJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBleGlzdGluZ1RhZ3M6IFRhZ1tdID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogJ0Zvb2QnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiAnRHJpbmsnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBuYW1lOiAnQmVlcicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6ICdXaW5lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgbmFtZTogJ0dsdXRlbiBmcmVlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgbmFtZTogJ0ZydWl0JyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VycmVuY2llczEgPSBbXHJcbiAgeyBsYWJlbDogJ0dCUCcsIHZhbHVlOiAnR0JQJyB9LFxyXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUicgfSxcclxuXTtcclxuXHJcbmNvbnN0IGN1cnJlbmNpZXMyID0gW1xyXG4gIHsgbGFiZWw6ICdHQlAnLCB2YWx1ZTogJ0dCUCcgfSxcclxuICB7IGxhYmVsOiAnRVVSJywgdmFsdWU6ICdFVVInIH0sXHJcbiAgeyBsYWJlbDogJ1VTRCcsIHZhbHVlOiAnVVNEJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgY3VycmVuY2llczMgPSBbXHJcbiAgeyBsYWJlbDogJ0dCUCcsIHZhbHVlOiAnR0JQJywgZm9yY2VTZWxlY3RlZDogdHJ1ZSB9LFxyXG4gIHsgbGFiZWw6ICdFVVInLCB2YWx1ZTogJ0VVUicgfSxcclxuICB7IGxhYmVsOiAnVVNEJywgdmFsdWU6ICdVU0QnIH0sXHJcbl07XHJcblxyXG5jb25zdCBnZW5kZXJWYWx1ZXMgPSBbXHJcbiAgeyB2YWx1ZTogJ00nLCBsYWJlbDogJ01hbGUnIH0sXHJcbiAgeyB2YWx1ZTogJ0YnLCBsYWJlbDogJ0ZlbWFsZScgfSxcclxuXTtcclxuXHJcbmNvbnN0IHRhZ3NFbWFpbFRleHRQcm9wczogVGV4dFByb3BzID0ge1xyXG4gIHZhbGlkYXRvcnM6IFsnZW1haWwnXSxcclxufTtcclxuXHJcbmNvbnN0IGVtYWlsVmFsaWRhdG9yczogVmFsaWRhdG9yVHlwZXNbXSA9IFsnZW1haWwnXTtcclxuXHJcbmNvbnN0IHVybFZhbGlkYXRvcnM6IFZhbGlkYXRvclR5cGVzW10gPSBbJ3VybCddO1xyXG5cclxuY29uc3QgY3VzdG9tQWdlVmFsaWRhdG9yOiBJQmFzZVZhbGlkYXRvcltdID0gW0FnZVZhbGlkYXRvci5pbnN0YW5jZV07XHJcblxyXG5jb25zdCBjdXN0b21OdW1iZXJWYWxpZGF0b3I6IElCYXNlVmFsaWRhdG9yW10gPSBbXHJcbiAgbmV3IE51bWJlclZhbGlkYXRvcih7IG1pbjogMCB9KSxcclxuXTtcclxuXHJcbmNvbnN0IG51bWJlclZhbGlkYXRvcjogVGV4dFByb3BzWyd2YWxpZGF0b3JzJ10gPSBbJ251bWJlciddO1xyXG5cclxuY29uc3QgdHlwZXM6IEJ1dHRvblR5cGVzW10gPSBbXHJcbiAgJ3ByaW1hcnknLFxyXG4gICd3YXJuaW5nJyxcclxuICAnZXJyb3InLFxyXG4gICdpbmZvJyxcclxuICAnc3VjY2VzcycsXHJcbiAgJ2dyYXknLFxyXG4gICd3aGl0ZScsXHJcbiAgJ25vbmUnLFxyXG5dO1xyXG5jb25zdCBCdXR0b25zU2hvd2Nhc2U6IFJlYWN0LlNGQzxCdXR0b25Qcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwicHgtMlwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiKDI0OCwgMjQ3LCAyNDcpJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3R5cGVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9e2l0ZW19IHsuLi5wcm9wc30+XHJcbiAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9e2l0ZW19IGRpc2FibGVkPXt0cnVlfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICBEaXNhYmxlZFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuQnV0dG9uc1Nob3djYXNlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBjbGFzc05hbWU6ICdteS0yIG1yLTInLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2ljIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxCYXNpY1Byb3BzLCBCYXNpY1N0YXRlPiB7XHJcbiAgcHJpdmF0ZSBmb3JtOiBGb3JtO1xyXG5cclxuICBwcml2YXRlIHNwZWNpYWxEYXlzSW5wdXRIZWFkZXI6IFJlYWN0LlJlZk9iamVjdDxJbnB1dEhlYWRlclJhdz47XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbFN0YXRlOiBCYXNpY1N0YXRlID0ge1xyXG4gICAgZ2VuZGVyOiAnJyxcclxuICAgIG5hbWU6ICdUZXN0JyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIGFnZTogJycsXHJcbiAgICBtaW4xOiAnJyxcclxuICAgIGNoZWNrYm94MTogdHJ1ZSxcclxuICAgIGNoZWNrYm94MjogZmFsc2UsXHJcbiAgICB2YWxpZGF0ZUZvcm1TdWJtaXQ6IHRydWUsXHJcbiAgICBmb29kOiAnYnJlYWtmYXN0JyxcclxuICAgIGRyaW5rOiAnYnJlYWtmYXN0JyxcclxuICAgIHRvdWNoT246ICdmb2N1cycsXHJcbiAgICBzdWJtaXREaXNhYmxlc0lucHV0czogdHJ1ZSxcclxuICAgIHNpbXVsYXRlVW5tb3VudDogZmFsc2UsXHJcbiAgICBwcmljZXMxOiBbXSxcclxuICAgIHByaWNlczI6IFtdLFxyXG4gICAgcHJpY2VzMzogW10sXHJcbiAgICB0aW1lU3BhbjogZHVyYXRpb24oMCksXHJcbiAgICB0aW1lMTogZHVyYXRpb24oMCksXHJcbiAgICB0aW1lMjogZHVyYXRpb24oMCksXHJcbiAgICBvcGVuaW5nSG91cnM6IHtcclxuICAgICAgdGltZXM6IFtdLFxyXG4gICAgfSxcclxuICAgIG9wZW5pbmdIb3Vyc1dlZWs6IFtdLFxyXG4gICAgb3BlbmluZ0hvdXJzV2Vla0RheToge1xyXG4gICAgICB0aW1lczogW10sXHJcbiAgICB9LFxyXG4gICAgb3BlbmluZ0hvdXJzU3BlY2lhbDogW10sXHJcbiAgICB3ZWJzaXRlOiAnJyxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgc2VsZWN0ZWRWYWx1ZXM6IFtdLFxyXG4gICAgbXVsdGlwbGVWYWx1ZXM6IFtcclxuICAgICAgeyB2YWx1ZTogJ09uZSBvcHRpb24nIH0sXHJcbiAgICAgIHsgdmFsdWU6ICdTZWNvbmQgb3B0aW9uJyB9LFxyXG4gICAgICB7IHZhbHVlOiAnVGhpcmQgb3B0aW9uJyB9LFxyXG4gICAgICB7IHZhbHVlOiAnb25lIG1vcmUgb3B0aW9uJyB9LFxyXG4gICAgICB7IHZhbHVlOiAncmx5IGxvbmcgbGFzdCBvcHRpb24nIH0sXHJcbiAgICBdLFxyXG4gICAgbXVsdGlwbGVSZWFkb25seTogZmFsc2UsXHJcbiAgICB0ZXh0QXJlYVRleHQ6ICcnLFxyXG4gICAganVzdE51bWJlcjogNSxcclxuICAgIGhpZGVOdW1iZXI6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBCYXNpY1Byb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGU7XHJcbiAgICB0aGlzLmhhbmRsZUdlbmRlckNoYW5nZSA9IHRoaXMuaGFuZGxlR2VuZGVyQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtID0gdGhpcy5keW5hbWljU3VibWl0U3VjY2Vzc0Zvcm0uYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZHluYW1pY1N1Ym1pdEVycm9yRm9ybSA9IHRoaXMuZHluYW1pY1N1Ym1pdEVycm9yRm9ybS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5zcGVjaWFsRGF5c0lucHV0SGVhZGVyID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgbGV0IHRpbWUyTWF4ID0gZHVyYXRpb24oKVxyXG4gICAgICAuYWRkKDEsICdob3VyJylcclxuICAgICAgLmFkZCg1LCAnbWludXRlcycpO1xyXG4gICAgbGV0IHRpbWUyTWluID0gZHVyYXRpb24oKVxyXG4gICAgICAuc3VidHJhY3QoMSwgJ2hvdXInKVxyXG4gICAgICAuc3VidHJhY3QoNSwgJ21pbnV0ZXMnKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93ICBtdC01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmxvY2sgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBub1ZhbGlkYXRlPXt0cnVlfSBjbGFzc05hbWU9XCJpbnB1dF9fZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlR1cm4gZm9ybSB2YWxpZGF0aW9uIG9uIG9yIG9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmZvcm1WYWxpZGF0aW9uVG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVmFsaWRhdGUgZm9ybSBzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW9Db250YWluZXIgdGl0bGU9XCJUb3VjaCBvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvdWNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJsdXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMudG91Y2hPbkNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0b3VjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImZvY3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRm9jdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMudG91Y2hPbkNoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9SYWRpb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNhYmxlcyBpbnB1dHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZD17dGhpcy5kaXNhYmxlc0lucHV0c0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5zdWJtaXREaXNhYmxlc0lucHV0c31cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVW5tb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLnNpbXVsYXRlVW5tb3VudENoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5zaW11bGF0ZVVubW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTaW11bGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXktNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjYXJkICd9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ibG9jayBwLTBcIj5cclxuICAgICAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5zaW11bGF0ZVVubW91bnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLmZvcm1SZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX1cclxuICAgICAgICAgICAgICAgICAgICAvKmV4dHJhQ29tcG9uZW50cz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGVzdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRBcGk6IHt9IGFzIGFueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogWydUZXN0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1Rlc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9fSovXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGljb249ezxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zIG1kLTQ4XCI+ZWRpdDwvaT59XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0V4YW1wbGUgZm9ybSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWJUaXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQW5kIHRoaXMgaXMgc3VidGl0bGUuIFRoZXJlJ3MgYWxzbyBpY29uIG9uIHRoZSBsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNob3dFeHBhbmRBbGw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaGVyb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZERlZmF1bHQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWFpbkJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdWJtaXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybT17dGhpcy5zdGF0ZS52YWxpZGF0ZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdWJtaXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBleHRyYUJ1dHRvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9ezF9IGRyb3Bkb3duPXt0cnVlfSBvbkNsaWNrPXt0aGlzLnRvdWNoQWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUb3VjaCBhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudW5Ub3VjaEFsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFVuLXRvdWNoIGFsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj4sXHJcbiAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2hvdWxkVG9nZ2xlQ29sbGFwc2VPbkhlYWRlckNsaWNrPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb0NvbnRhaW5lciB0aXRsZT1cIkRyaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmFkaW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZHJpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2luZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3aGlza2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldoaXNrZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRyaW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIndhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldhdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRHJpbmtzIChob3Jpem9udGFsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmluazJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2luZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmluazJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2hpc2tleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaGlza2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ9e3RoaXMuc3RhdGUuZHJpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLmRyaW5rc0NoZWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSYWRpb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkcmluazJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwid2F0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2F0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdD17dGhpcy5zdGF0ZS5kcmlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuZHJpbmtzQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU21hcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuY2hlY2tib3gxQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2JveDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRHJlc3MgY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJXaXRoIHRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIihvcHRpb25hbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoZWNrZWQ9e3RoaXMuY2hlY2tib3gyQ2hlY2tlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5jaGVja2JveDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiV2FsbGV0IHBhcmtpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubmFtZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDbGVhckJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBudWxsIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGVzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIG5hbWUgKG5vIHRpdGxlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMubmFtZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHNvbWUgaGVscCB0ZXh0LiBJdCBjYW4gYWxzbyBkbyA8Yj5ib2xkPC9iPnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBvdGhlciBzdHVmZi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIG5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5uYW1lQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOYW1lIHJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnWW91ciBnZW5kZXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e2dlbmRlclZhbHVlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlR2VuZGVyQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5nZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiR2VuZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZXh0YXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRleHRBcmVhQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGV4dEFyZWFUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRleHRhcmVhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudGV4dEFyZWFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0QXJlYVRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVhZG9ubHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydTb21lIGNvbGxhcHNlZCBzdHVmZid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRUb2dnbGVDb2xsYXBzZU9uSGVhZGVyQ2xpY2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YlRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIkhlbHBmdWwgdGV4dCB0aGF0IGRlc2NyaWJlcyB3aGF0J3MgY29sbGFwc2VkIGhlcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJXaXRoIHRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtlbWFpbFZhbGlkYXRvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmVtYWlsQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIllvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17J1lvdSBjYW4gc2VsZWN0IG1lIGJ1dCBJIGFtIHJlYWRvbmx5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17dXJsVmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXZWJzaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS53ZWJzaXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLndlYnNpdGVDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91ciB3ZWJzaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tVmFsaWRhdG9ycz17Y3VzdG9tQWdlVmFsaWRhdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiWW91ciBhZ2UgKG9wdGlvbmFsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmFnZUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21WYWxpZGF0b3JzPXtjdXN0b21OdW1iZXJWYWxpZGF0b3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNaW4gMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5taW4xQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsganVzdE51bWJlcjogNSB9KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlc2V0IGp1c3QgbnVtYmVyIHRvIDVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuaGlkZU51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXtlID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGhpZGVOdW1iZXI6IGUudGFyZ2V0LmNoZWNrZWQgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkhpZGUvc2hvdyBudW1iZXIgaW5wdXRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7IXRoaXMuc3RhdGUuaGlkZU51bWJlciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e251bWJlclZhbGlkYXRvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtgSnVzdCBudW1iZXIgKHJlcXVpcmVkKSAtICR7dGhpcy5zdGF0ZS5qdXN0TnVtYmVyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI9e3RoaXMuc3RhdGUuanVzdE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTnVtYmVyQ2hhbmdlPXt0aGlzLmp1c3ROdW1iZXJDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17bnVtYmVyVmFsaWRhdG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2BKdXN0IG51bWJlciAtICR7dGhpcy5zdGF0ZS5qdXN0TnVtYmVyfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI9e3RoaXMuc3RhdGUuanVzdE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTnVtYmVyQ2hhbmdlPXt0aGlzLmp1c3ROdW1iZXJDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb25leVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jaWVzPXtjdXJyZW5jaWVzMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzPXt0aGlzLnN0YXRlLnByaWNlczF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJpY2VzQ2hhbmdlPXt0aGlzLnByaWNlczFDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURlbGV0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TW9uZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY2llcz17Y3VycmVuY2llczJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlcz17dGhpcy5zdGF0ZS5wcmljZXMyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd011bHRpcGxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25QcmljZXNDaGFuZ2U9e3RoaXMucHJpY2VzMkNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJpY2UgbXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNb25leVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jaWVzPXtjdXJyZW5jaWVzM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzPXt0aGlzLnN0YXRlLnByaWNlczN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93TXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblByaWNlc0NoYW5nZT17dGhpcy5wcmljZXMzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcmljZSBtdWx0aXBsZSBmb3JjZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17dGhpcy5zdGF0ZS50aW1lMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNoYW5nZT17dGhpcy50aW1lMUNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXt0aW1lMk1heH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluPXt0aW1lMk1pbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lPXt0aGlzLnN0YXRlLnRpbWUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lQ2hhbmdlPXt0aGlzLnRpbWUyQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJXaXRoIE1pbi9NYXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heD17dGltZTJNYXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17dGltZTJNaW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoT249e3RoaXMuc3RhdGUudG91Y2hPbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZT17dGhpcy5zdGF0ZS50aW1lMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZUNoYW5nZT17dGhpcy50aW1lMkNoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiV2l0aCBNaW4vTWF4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGltZVNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lU3Bhbj17dGhpcy5zdGF0ZS50aW1lU3Bhbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNwYW5DaGFuZ2U9e3RoaXMudGltZVNwYW5DaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRpbWUgc3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkVW5pdHM9e1RpbWVTcGFuVW5pdC5Ib3VyIHwgVGltZVNwYW5Vbml0Lk1pbnV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGltZVNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lU3Bhbj17dGhpcy5zdGF0ZS50aW1lU3Bhbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVNwYW5DaGFuZ2U9e3RoaXMudGltZVNwYW5DaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRpbWUgc3BhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkVW5pdHM9e1RpbWVTcGFuVW5pdC5Ib3VyIHwgVGltZVNwYW5Vbml0Lk1pbnV0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3BlbmluZ0hvdXJzRGF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnT3BlbmluZyBob3VycyBzYW1wbGUgZGF5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbmluZ0hvdXJzQ2hhbmdlPXt0aGlzLm9wZW5pbmdIb3Vyc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5pbmdIb3Vycz17dGhpcy5zdGF0ZS5vcGVuaW5nSG91cnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiT3BlbmluZyBob3Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUNhcGFjaXR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J09wZW5pbmcgaG91cnMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPXsncHJpbWFyeSd9Pkhlcm8gYnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFCdXR0b25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9ezF9IGRyb3Bkb3duPXt0cnVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4dHJhIGJ1dHRvbiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24ga2V5PXsyfSBkcm9wZG93bj17dHJ1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYSBidXR0b24gMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE9wZW5pbmdIb3Vyc1dlZWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE9uPXt0aGlzLnN0YXRlLnRvdWNoT259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGF5c0NoYW5nZT17dGhpcy5vcGVuaW5nSG91cnNXZWVrQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlzPXt0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc1dlZWt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhbmRhcmREYXk9e3RoaXMuc3RhdGUub3BlbmluZ0hvdXJzV2Vla0RheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblN0YW5kYXJkRGF5Q2hhbmdlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbmluZ0hvdXJzV2Vla1N0YW5kYXJkRGF5Q2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VDYXBhY2l0eT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydTcGVjaWFsIGRheXMgb3BlbmluZyBob3Vycyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMuc3BlY2lhbERheXNJbnB1dEhlYWRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkJ1dHRvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17J3ByaW1hcnknfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zcGVjaWFsRGF5c0FkZENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcGVuaW5nSG91cnNTcGVjaWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hPbj17dGhpcy5zdGF0ZS50b3VjaE9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRheXNDaGFuZ2U9e3RoaXMub3BlbmluZ0hvdXJzU3BlY2lhbENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5cz17dGhpcy5zdGF0ZS5vcGVuaW5nSG91cnNTcGVjaWFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2hvb3NlIGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0J1dHRvbnMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQnV0dG9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9eydwcmltYXJ5J30+SGVybyBidXR0b248L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlN0YW5kYXJkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPk5vIHNoYWRvdzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBub1NoYWRvdz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+SGVybzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBoZXJvPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5PdXRsaW5lZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBvdXRsaW5lZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+Qmxhbms8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgYmxhbms9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlNtYWxsPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIHNtYWxsPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5DaXJjdWxhcjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBjaXJjdWxhcj17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGJ1dHRvbnMtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+RHJvcGRvd248L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2UgZHJvcGRvd249e3RydWV9IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlVub2J0cnVzaXZlPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIHVub2J0cnVzaXZlPXt0cnVlfSBjbGFzc05hbWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgYnV0dG9ucy1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5UZXh0PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uc1Nob3djYXNlIHRleHQ9e3RydWV9IGNsYXNzTmFtZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkRpc2FibGUgYWZ0ZXIgY2xpY2s8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25zU2hvd2Nhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVBZnRlckNsaWNrTXM9ezIwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQWZ0ZXJDbGljaz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eydNdWx0aXBsZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWREZWZhdWx0PXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGFiZWw9XCJNdWx0aXBsZSByZWFkb25seVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGVja2VkPXt0aGlzLm11bHRpcGxlUmVhZG9ubHlDaGVja2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk11bHRpcGxlIHJlYWRvbmx5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3MgZXhhbXBsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbmQgbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQcm9wcz17eyBwbGFjZWhvbGRlcjogJ1dpdGggcGxhY2Vob2xkZXInIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZD17dGhpcy50YWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRhZ3Mgc3VnZ2VzdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2hvb3NlIG9yIGNyZWF0ZSB0YWdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaEV4aXN0aW5nVGFncz17c3RhcnRzV2l0aCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1RhZ3MuZmlsdGVyKGUgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm5hbWUuaW5jbHVkZXMoc3RhcnRzV2l0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudD17J05vdCBmb3VuZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZD17dGhpcy50YWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJFeGlzdGluZ1RhZ3M9eyh0LCB0YWdzKSA9PiB0YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGFncyBzdWdnZXN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaG9vc2UgdGFnc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGFncz17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1RhZ3M9e2V4aXN0aW5nVGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZD17dGhpcy50YWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2hpcHM9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUYWdzIG1heCAzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUYWdzPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dGhpcy5zdGF0ZS50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnc0NoYW5nZWQ9e3RoaXMudGFnc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NoaXBzPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGFnQ2xpY2s9e3QgPT4gY29uc29sZS53YXJuKHQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGFncyBvbmx5IGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIldpdGggbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1heFRhZ3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMuc3RhdGUubXVsdGlwbGVSZWFkb25seX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25UYWdzQ2hhbmdlZD17dGhpcy50YWdzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50PXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRQcm9wcz17dGFnc0VtYWlsVGV4dFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPbmUgb3IgbW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNdWx0aXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEVtcHR5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt0aGlzLnN0YXRlLm11bHRpcGxlVmFsdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0ZWRWYWx1ZXNDaGFuZ2U9e3RoaXMuc2VsZWN0ZWRWYWx1ZXNDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVzOiBbeyB2YWx1ZTogJ09uZSBvcHRpb24nIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBUZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0Ryb3Bkb3duJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZERlZmF1bHQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBidXR0b25zLXJvdyBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1yLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ub3RpZmljYXRpb25zPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uQ291bnQ9ezV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtZW51Q2xhc3NOYW1lPVwicC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dBcnJvdz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbnNTaG93Y2FzZSBkcm9wZG93bj17dHJ1ZX0gY2xhc3NOYW1lPVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgbXItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9eydTdHJpbmcgaGVhZGVyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkNvdW50PXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWVudUNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkl0ZW08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+RnVuY3Rpb24gaGVhZGVyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QXJyb3c9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWVudUNsYXNzTmFtZT1cInAtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkl0ZW08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtVmFsaWRhdGlvblN1bW1hcnkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIG15LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPER5bmFtaWNTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXREaXNhYmxlc0lucHV0cz17dGhpcy5zdGF0ZS5zdWJtaXREaXNhYmxlc0lucHV0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXsncHJpbWFyeSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsQ2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNsYXNzTmFtZT1cImJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmdDbGFzc05hbWU9XCJidG4tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNoaWxkcmVuPXsnRXJyb3InfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdHRpbmdDaGlsZHJlbj17J1dvcmtpbmcgb24gaXQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZHluYW1pY1N1Ym1pdFN1Y2Nlc3NGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybT17dGhpcy5zdGF0ZS52YWxpZGF0ZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBamF4IEVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHluYW1pY1N1Ym1pdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPER5bmFtaWNTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXREaXNhYmxlc0lucHV0cz17dGhpcy5zdGF0ZS5zdWJtaXREaXNhYmxlc0lucHV0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBub3JtYWxDbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9eydwcmltYXJ5J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nQ2xhc3NOYW1lPVwiYnRuLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NsYXNzTmFtZT1cImJ0bi1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXR0aW5nQ2hpbGRyZW49eydXb3JraW5nIG9uIGl0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQ2hpbGRyZW49eydUaGF0IHdvcmtlZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5keW5hbWljU3VibWl0RXJyb3JGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybT17dGhpcy5zdGF0ZS52YWxpZGF0ZUZvcm1TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBamF4IFN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EeW5hbWljU3VibWl0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtUmVmID0gKGVsOiBGb3JtKSA9PiAodGhpcy5mb3JtID0gZWwpO1xyXG5cclxuICBwcml2YXRlIHNlbGVjdGVkVmFsdWVzQ2hhbmdlZCA9IChzZWxlY3RlZFZhbHVlczogU2VsZWN0VmFsdWVbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFZhbHVlcyB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0YWdzQ2hhbmdlZCA9ICh0YWdzOiBUYWdbXSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHRhZ3MgfSk7XHJcblxyXG4gIHByaXZhdGUgbXVsdGlwbGVSZWFkb25seUNoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG11bHRpcGxlUmVhZG9ubHk6ICF0aGlzLnN0YXRlLm11bHRpcGxlUmVhZG9ubHkgfSk7XHJcblxyXG4gIHByaXZhdGUgb3BlbmluZ0hvdXJzU3BlY2lhbENoYW5nZWQgPSAoZGF5czogT3BlbmluZ0hvdXJzU3BlY2lhbERheU9ialtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5pbmdIb3Vyc1NwZWNpYWw6IGRheXMgfSk7XHJcblxyXG4gIHByaXZhdGUgc3BlY2lhbERheXNBZGRDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICBvcGVuaW5nSG91cnNTcGVjaWFsOiB0aGlzLnN0YXRlLm9wZW5pbmdIb3Vyc1NwZWNpYWwuY29uY2F0KFtcclxuICAgICAgICAgIHsgZGF0ZTogdW5kZWZpbmVkLCB0aW1lczogW10gfSxcclxuICAgICAgICBdKSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5zcGVjaWFsRGF5c0lucHV0SGVhZGVyLmN1cnJlbnQuZXhwYW5kKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvcGVuaW5nSG91cnNXZWVrU3RhbmRhcmREYXlDaGFuZ2VkID0gKGRheTogT3BlbmluZ0hvdXJzV2Vla0RheU9iaikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnNXZWVrRGF5OiBkYXkgfSk7XHJcblxyXG4gIHByaXZhdGUgb3BlbmluZ0hvdXJzV2Vla0NoYW5nZWQgPSAoZGF5czogT3BlbmluZ0hvdXJzV2Vla0RheU9ialtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5pbmdIb3Vyc1dlZWs6IGRheXMgfSk7XHJcblxyXG4gIHByaXZhdGUgb3BlbmluZ0hvdXJzQ2hhbmdlZCA9IChvcGVuaW5nSG91cnM6IE9wZW5pbmdIb3Vyc0RheU9iaikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuaW5nSG91cnM6IG9wZW5pbmdIb3VycyB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0aW1lMkNoYW5nZWQgPSAodGltZTogRHVyYXRpb24pID0+IHRoaXMuc2V0U3RhdGUoeyB0aW1lMjogdGltZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0aW1lMUNoYW5nZWQgPSAodGltZTogRHVyYXRpb24pID0+IHRoaXMuc2V0U3RhdGUoeyB0aW1lMTogdGltZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB0aW1lU3BhbkNoYW5nZWQgPSAodGltZVNwYW46IER1cmF0aW9uKSA9PiB0aGlzLnNldFN0YXRlKHsgdGltZVNwYW4gfSk7XHJcblxyXG4gIHByaXZhdGUgcHJpY2VzMkNoYW5nZWQgPSAocHJpY2VzOiBNb25leVdpdGhDdXJyZW5jeVtdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlczI6IHByaWNlcyB9KTtcclxuXHJcbiAgcHJpdmF0ZSBwcmljZXMzQ2hhbmdlZCA9IChwcmljZXM6IE1vbmV5V2l0aEN1cnJlbmN5W10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2VzMzogcHJpY2VzIH0pO1xyXG5cclxuICBwcml2YXRlIHByaWNlczFDaGFuZ2VkID0gKHByaWNlczogTW9uZXlXaXRoQ3VycmVuY3lbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZXMxOiBwcmljZXMgfSk7XHJcblxyXG4gIHByaXZhdGUgbWluMUNoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbWluMTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUganVzdE51bWJlckNoYW5nZWQgPSAobnVtOiBudW1iZXIpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsganVzdE51bWJlcjogbnVtIH0pO1xyXG5cclxuICBwcml2YXRlIGFnZUNoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWdlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB3ZWJzaXRlQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB3ZWJzaXRlOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSBlbWFpbENoYW5nZWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIHRleHRBcmVhQ2hhbmdlZCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXh0QXJlYVRleHQ6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIG5hbWVDaGFuZ2VkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICBwcml2YXRlIGNoZWNrYm94MkNoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrYm94MjogIXRoaXMuc3RhdGUuY2hlY2tib3gyIH0pO1xyXG5cclxuICBwcml2YXRlIGNoZWNrYm94MUNoZWNrZWQgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrYm94MTogIXRoaXMuc3RhdGUuY2hlY2tib3gxIH0pO1xyXG5cclxuICBwcml2YXRlIGRyaW5rc0NoZWNrZWQgPSAodmFsdWU6IHN0cmluZykgPT4gdGhpcy5zZXRTdGF0ZSh7IGRyaW5rOiB2YWx1ZSB9KTtcclxuXHJcbiAgcHJpdmF0ZSB1blRvdWNoQWxsID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvcm0udW5Ub3VjaEFsbCgpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgc2ltdWxhdGVVbm1vdW50Q2hlY2tlZCA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2ltdWxhdGVVbm1vdW50OiAhdGhpcy5zdGF0ZS5zaW11bGF0ZVVubW91bnQgfSk7XHJcblxyXG4gIHByaXZhdGUgZGlzYWJsZXNJbnB1dHNDaGVja2VkID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdWJtaXREaXNhYmxlc0lucHV0czogIXRoaXMuc3RhdGUuc3VibWl0RGlzYWJsZXNJbnB1dHMgfSk7XHJcblxyXG4gIHByaXZhdGUgdG91Y2hPbkNoZWNrZWQgPSAodmFsdWU6ICdibHVyJyB8ICdmb2N1cycpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdG91Y2hPbjogdmFsdWUgfSk7XHJcblxyXG4gIHByaXZhdGUgZm9ybVZhbGlkYXRpb25Ub2dnbGUgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRlRm9ybVN1Ym1pdDogIXRoaXMuc3RhdGUudmFsaWRhdGVGb3JtU3VibWl0IH0pO1xyXG5cclxuICBwcml2YXRlIHRvdWNoQWxsID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmZvcm0udG91Y2hBbGwoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGhhbmRsZUdlbmRlckNoYW5nZShlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pIHtcclxuICAgIGNvbnN0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKHZhbCA9PT0gJ00nIHx8IHZhbCA9PT0gJ0YnKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBnZW5kZXI6IHZhbCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3VibWl0Rm9ybShlPzogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pIHtcclxuICAgIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGR5bmFtaWNTdWJtaXRTdWNjZXNzRm9ybShcclxuICAgIGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+LFxyXG4gICAgc3VibWl0dGluZzogKCkgPT4gdm9pZCxcclxuICAgIGVycm9yOiAoKSA9PiB2b2lkLFxyXG4gICAgc3VjY2VzczogKCkgPT4gdm9pZCxcclxuICAgIHJlc2V0OiAoKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzdWJtaXR0aW5nKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZXJyb3IoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiByZXNldCgpLCAzMDAwKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkeW5hbWljU3VibWl0RXJyb3JGb3JtKFxyXG4gICAgZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4sXHJcbiAgICBzdWJtaXR0aW5nOiAoKSA9PiB2b2lkLFxyXG4gICAgZXJyb3I6ICgpID0+IHZvaWQsXHJcbiAgICBzdWNjZXNzOiAoKSA9PiB2b2lkLFxyXG4gICAgcmVzZXQ6ICgpID0+IHZvaWRcclxuICApIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHN1Ym1pdHRpbmcoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzdWNjZXNzKCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVzZXQoKSwgMzAwMCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9