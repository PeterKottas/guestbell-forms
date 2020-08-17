webpackHotUpdate("main",{

/***/ "./src/lib/components/tags/Tags.tsx":
/*!******************************************!*\
  !*** ./src/lib/components/tags/Tags.tsx ***!
  \******************************************/
/*! exports provided: defaultTagsTranslations, TagsRaw, Tags, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTagsTranslations", function() { return defaultTagsTranslations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsRaw", function() { return TagsRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tags", function() { return Tags; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inputGroup/InputGroup */ "./src/lib/components/inputGroup/InputGroup.tsx");
/* harmony import */ var _text_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text/Text */ "./src/lib/components/text/Text.tsx");
/* harmony import */ var material_design_icons_content_svg_production_ic_add_circle_outline_24px_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg */ "./node_modules/material-design-icons/content/svg/production/ic_add_circle_outline_24px.svg");
/* harmony import */ var material_design_icons_content_svg_production_ic_add_circle_outline_24px_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_content_svg_production_ic_add_circle_outline_24px_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var material_design_icons_navigation_svg_production_ic_arrow_back_24px_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-design-icons/navigation/svg/production/ic_arrow_back_24px.svg */ "./node_modules/material-design-icons/navigation/svg/production/ic_arrow_back_24px.svg");
/* harmony import */ var material_design_icons_navigation_svg_production_ic_arrow_back_24px_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(material_design_icons_navigation_svg_production_ic_arrow_back_24px_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base/input/BaseInput */ "./src/lib/components/base/input/BaseInput.tsx");
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button/Button */ "./src/lib/components/button/Button.tsx");
/* harmony import */ var _subComponents_TagsSuggestions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subComponents/TagsSuggestions */ "./src/lib/components/tags/subComponents/TagsSuggestions.tsx");
/* harmony import */ var _form_withFormContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form/withFormContext */ "./src/lib/components/form/withFormContext.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../themeProvider/withThemeContext */ "./src/lib/components/themeProvider/withThemeContext.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Libs











 // Misc

var defaultTagsTranslations = _objectSpread({}, _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_5__["defaultBaseTranslations"], {
  addNew: 'Add new'
});
var TagsRaw =
/*#__PURE__*/
function (_BaseInput) {
  _inherits(TagsRaw, _BaseInput);

  function TagsRaw(props) {
    var _this;

    _classCallCheck(this, TagsRaw);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TagsRaw).call(this, props));
    _this.textRef = void 0;
    _this.suggestionsRef = void 0;
    _this.isMobile = false;

    _this.onTextErrorsChanged = function (textErrors) {
      return _this.setState(function () {
        return {
          textErrors: textErrors
        };
      }, function () {
        return _this.handleErrors();
      });
    };

    _this.onFocus = function () {
      _this.setState({
        textIsFocused: true,
        suggestionsVisible: true,
        touched: true
      }, function () {
        return _this.handleErrors();
      });

      _this.fetchExistingTags(_this.state.value);

      setTimeout(function () {
        var _this$textRef$current;

        (_this$textRef$current = _this.textRef.current) === null || _this$textRef$current === void 0 ? void 0 : _this$textRef$current.focus();
      }, 10);
    };

    _this.onKeyDown = function (suggestions) {
      return (
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(e) {
            var existingTag, preselectedSuggestion, _preselectedSuggestion;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(e.key === 'Enter' && (_this.state.value !== '' || _this.state.preselectedSuggestion !== undefined) && _this.state.textErrors.length === 0)) {
                      _context.next = 18;
                      break;
                    }

                    e.preventDefault();
                    e.stopPropagation();
                    existingTag = _this.props.existingTags && _this.props.existingTags.find(function (et) {
                      return et.name === _this.state.value;
                    });

                    if (!(_this.state.preselectedSuggestion !== undefined)) {
                      _context.next = 9;
                      break;
                    }

                    _this.props.onTagsChanged(_this.props.tags.concat(suggestions[_this.state.preselectedSuggestion]));

                    _this.setState({
                      value: '',
                      preselectedSuggestion: undefined
                    }, function () {
                      _this.fetchExistingTags();

                      _this.handleErrors();
                    });

                    _context.next = 18;
                    break;

                  case 9:
                    if (!existingTag) {
                      _context.next = 14;
                      break;
                    }

                    _this.props.onTagsChanged(_this.props.tags.concat(existingTag));

                    _this.setState({
                      value: ''
                    }, function () {
                      _this.fetchExistingTags();

                      _this.handleErrors();
                    });

                    _context.next = 18;
                    break;

                  case 14:
                    if (!_this.props.allowNew) {
                      _context.next = 18;
                      break;
                    }

                    _context.next = 17;
                    return _this.addNewTag();

                  case 17:
                    _this.handleErrors();

                  case 18:
                    if (suggestions.length > 0 && _this.state.suggestionsVisible) {
                      if (e.key === 'ArrowUp') {
                        preselectedSuggestion = _this.state.preselectedSuggestion === undefined ? suggestions.length - 1 : _this.state.preselectedSuggestion === 0 ? suggestions.length - 1 : _this.state.preselectedSuggestion - 1;

                        _this.setState({
                          preselectedSuggestion: preselectedSuggestion
                        });
                      } else if (e.key === 'ArrowDown') {
                        _preselectedSuggestion = _this.state.preselectedSuggestion === undefined ? 0 : _this.state.preselectedSuggestion === suggestions.length - 1 ? 0 : _this.state.preselectedSuggestion + 1;

                        _this.setState({
                          preselectedSuggestion: _preselectedSuggestion
                        });
                      } else {
                        _this.setState({
                          preselectedSuggestion: undefined
                        });
                      }
                    }

                  case 19:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()
      );
    };

    _this.addNewTag =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var newTag;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.props.onNewTagAdded(_this.state.value);

            case 2:
              newTag = _context2.sent;

              if (newTag) {
                _this.props.onTagsChanged(_this.props.tags ? _this.props.tags.concat(newTag) : [newTag]);
              }

              _this.setState({
                value: '',
                textErrors: []
              }, function () {
                _this.fetchExistingTags();

                _this.handleErrors();
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    _this.onSuggestionSelected = function (tag) {
      var newTags = _this.props.tags.concat(tag);

      _this.props.onTagsChanged(newTags);

      var isMax = newTags.length === _this.props.maxTags;
      var finalValue = !_this.props.allowNew && !isMax ? _this.state.value : '';

      _this.setState({
        value: finalValue,
        suggestionsVisible: isMax ? false : _this.state.suggestionsVisible,
        preselectedSuggestion: undefined,
        textErrors: []
      }, function () {
        if (!_this.props.maxTags || _this.props.tags.length + 1 < _this.props.maxTags) {
          _this.fetchExistingTags(finalValue);
        }

        _this.handleErrors();
      });
    };

    _this.onBlur =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this.setState({
                textIsFocused: false,
                preselectedSuggestion: undefined
              }, function () {
                return _this.handleErrors();
              });

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    _this.onTextChanged = function (e, isValid) {
      var value = e.target.value;

      _this.setState(function () {
        return {
          value: value,
          isValid: isValid,
          textIsValid: isValid,
          suggestionsVisible: true
        };
      }, function () {
        return _this.handleErrors();
      });

      _this.fetchExistingTags(e.target.value);
    };

    _this.handleErrors = function () {
      var tags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.tags;

      var errors = _this.getErrors(tags);

      if (errors.length > 0) {
        _this.setInvalid(errors);
      } else {
        _this.setValid();
      }
    };

    _this.tagClick = function (tag) {
      return function () {
        _this.props.onTagClick && _this.props.onTagClick(tag);
      };
    };

    _this.tagRemoveClick = function (tag) {
      return function (e) {
        e.stopPropagation();

        var newTags = _this.props.tags.filter(function (sv) {
          return sv.id !== tag.id;
        });
        /*if (newTags.length === 0) {
          setTimeout(() => this.focus(), 50);
        }
        this.setState({
          suggestionsVisible: false,
        });*/


        _this.props.onTagsChanged && _this.props.onTagsChanged(newTags);

        _this.handleErrors(newTags); // this.fetchExistingTags();

      };
    };

    _this.state = _objectSpread({}, _this.state, {
      textErrors: [],
      textIsFocused: false,
      suggestionsVisible: false,
      fetchingExistingTags: false,
      textIsValid: false,
      fetchedExistingTags: []
    });
    _this.textRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    _this.suggestionsRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();
    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized(_this));
    _this.handleLeaveMobileClick = _this.handleLeaveMobileClick.bind(_assertThisInitialized(_this));

    if (props.mobileVersionEnabled) {
      var _require;

      _this.isMobile = (_require = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/main.js")) === null || _require === void 0 ? void 0 : _require.isMobile;
    }

    return _this;
  }

  _createClass(TagsRaw, [{
    key: "focus",
    value: function focus() {
      if (this.textRef.current) {
        this.textRef.current.focus();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (oldProps.tags !== this.props.tags || oldProps.validators !== this.props.validators || oldProps.customValidators !== this.props.customValidators || oldProps.required !== this.props.required) {
        this.handleErrors(this.props.tags);
      }
    }
  }, {
    key: "handleLeaveMobileClick",
    value: function handleLeaveMobileClick() {
      this.setState({
        textIsFocused: false,
        suggestionsVisible: false,
        preselectedSuggestion: undefined
      });
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(e) {
      var _this2 = this;

      if (!this.containerRef.current || this.containerRef.current.contains(e.target) || !this.suggestionsRef.current || this.suggestionsRef.current.contains(e.target)) {
        return;
      }

      this.setState({
        suggestionsVisible: false,
        preselectedSuggestion: undefined
      });

      if (this.props.addNewOnBlur && this.state.value) {
        var suggestions = this.getSuggestions();
        var existing = suggestions.find(function (s) {
          return s.name === _this2.state.value;
        });

        if (existing) {
          this.onSuggestionSelected(existing);
        } else if (this.props.allowNew) {
          this.addNewTag();
        }
      }
      /* else if (this.state.value) {
      this.setState({ value: '' });
      }*/

    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
      document.addEventListener('touchstart', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
      document.removeEventListener('touchstart', this.handleClickOutside);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var translations = this.getTranslations(defaultTagsTranslations);
      var textProps = this.props.textProps ? this.props.textProps : {};
      var suggestions = this.getSuggestions();
      var showMobileVersion = this.props.mobileVersionEnabled && this.isMobile && (this.state.textIsFocused || this.state.suggestionsVisible);
      var LeaveMobileButton = showMobileVersion ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        className: "tags-input__leaveMobileTagsButton line-height--0",
        onClick: this.handleLeaveMobileClick,
        noShadow: true,
        unobtrusive: true
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](material_design_icons_navigation_svg_production_ic_arrow_back_24px_svg__WEBPACK_IMPORTED_MODULE_4__, null)) : undefined;
      var showInput = Boolean((!this.props.maxTags || this.props.maxTags > (this.props.tags && this.props.tags.length)) && !this.props.readOnly);
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_11__["Portal"], {
        container: document.body,
        disablePortal: !showMobileVersion
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        title: this.props.title,
        tooltip: this.props.tooltip
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, this.props.id && {
        id: this.props.id
      }, {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('input__base tags-input', this.getValidationClass(), this.props.className, {
          'tags-input--readOnly': this.props.readOnly,
          'tags-input--hasPlaceholder': this.props.textProps && this.props.textProps.placeholder,
          'tags-input--mobile': showMobileVersion
        }),
        ref: this.containerRef
      }), showMobileVersion && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "tags-input__mobileBackdrop"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "tags-input__tags__wrapper"
      }, !showInput && showMobileVersion && LeaveMobileButton, this.props.tags && this.props.tags.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "tags-input__tag__wrapper"
      }, this.props.tags.map(function (item, index) {
        return _this3.renderTag(item, index);
      })) : this.props.readOnly && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "tags-input__tag__wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "tags-input__tag"
      }, this.props.readonlyEmptyPlaceholder))), showInput && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'tags-input__tags__wrapper ' + (this.props.readOnly ? 'filled ' : '')
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_text_Text__WEBPACK_IMPORTED_MODULE_2__["Text"], _extends({
        showClearButton: true
      }, textProps, this.props.id && {
        id: this.props.id + '-text-input'
      }, {
        ref: this.textRef,
        required: this.props.tags.length > 0 ? false : this.props.required,
        className: 'tags-input__text-input ' + (textProps.className ? textProps.className : ''),
        onKeyDown: this.onKeyDown(suggestions),
        onErrorsChanged: this.onTextErrorsChanged,
        onChange: this.onTextChanged,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        value: this.state.value,
        readOnly: this.props.readOnly,
        showValidation: false,
        ignoreContext: true,
        validators: this.props.validators,
        customValidators: this.props.customValidators,
        before: LeaveMobileButton
      })), this.state.suggestionsVisible && this.props.showSuggestions && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_subComponents_TagsSuggestions__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, this.props.id && {
        id: this.props.id + '-text-input'
      }, {
        innerRef: this.suggestionsRef,
        anchorEl: this.containerRef.current,
        allowNew: this.props.allowNew,
        preselectedSuggestion: this.state.preselectedSuggestion,
        loading: this.state.fetchingExistingTags,
        LoadingComponent: this.props.suggestionsLoadingComponent,
        isVisible: this.state.suggestionsVisible,
        EmptyComponent: this.props.suggestionsEmptyComponent,
        WaitingForMoreInputComponent: this.props.waitingForMoreInputComponent,
        isWaitingForMoreInput: this.state.value.length < this.props.minLettersToFetch,
        tags: suggestions,
        onSelected: this.onSuggestionSelected,
        value: this.state.value,
        AddNewTagComponent: this.props.allowNew && this.state.value !== '' && (!this.props.existingTags || !this.props.existingTags.find(function (e) {
          return e.name === _this3.state.value;
        })) && (!this.state.fetchedExistingTags || !this.state.fetchedExistingTags.find(function (e) {
          return e.name === _this3.state.value;
        })) && this.state.textIsValid && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], _extends({}, this.props.id && {
          id: this.props.id + '-add-new-button'
        }, {
          className: "tags-input__suggestion tags-input__add-new",
          dropdown: true,
          onClick: this.addNewTag
        }), translations.addNew, " \"", this.state.value, "\""),
        popperProps: this.props.popperProps
      }))), this.renderDefaultValidation(), this.props.label && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
        className: this.state.value !== '' || this.state.textIsFocused || this.props.readOnly || this.props.tags.length >= this.props.maxTags || showMobileVersion ? 'label--focused' : ''
      }, this.renderLabel()))));
    }
  }, {
    key: "getErrors",
    value: function getErrors(tags) {
      var errors = [];

      if (tags.length < this.props.maxTags) {
        errors = errors.concat(this.state.textErrors);
      }

      if (this.state.value !== '' && tags.length === 0 && this.props.required) {
        errors = errors.concat(this.getTranslations(this.props.translations).required);
      }

      if (this.state.value && this.props.allowNew && !this.state.textIsFocused) {
        errors = errors.concat(this.props.valueNotAddedError);
      }

      if (this.props.maxTags < (this.props.tags && this.props.tags.length)) {
        errors = errors.concat(this.props.maxTagsSurpassedError);
      }

      return errors.filter(function (i) {
        return i;
      });
    }
  }, {
    key: "fetchExistingTags",
    value: function fetchExistingTags() {
      var _this4 = this;

      var startsWith = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (this.props.fetchExistingTags && startsWith.length >= this.props.minLettersToFetch) {
        var timer = setTimeout(function () {
          return _this4.setState({
            fetchingExistingTags: true
          });
        }, this.props.loadingDelayMs);
        this.props.fetchExistingTags(startsWith).then(function (fetchedExistingTags) {
          clearTimeout(timer);

          _this4.setState({
            fetchedExistingTags: fetchedExistingTags,
            fetchingExistingTags: false
          });
        });
      }
    }
  }, {
    key: "getSuggestions",
    value: function getSuggestions() {
      var _this5 = this;

      var existingTags = [].concat(this.props.existingTags ? this.props.existingTags : []).concat(this.state.fetchedExistingTags ? this.state.fetchedExistingTags : []);
      var filteredTags = this.props.filterExistingTags(this.state.value ? this.state.value.toLowerCase() : '', existingTags);
      var suggestions = filteredTags.filter(function (tag) {
        return _this5.props.allowSameTagMultipleTimes || !_this5.props.tags.some(function (t) {
          return t.id === tag.id;
        });
      }).slice(0, this.props.maxSuggestions);
      return suggestions;
    }
  }, {
    key: "renderTag",
    value: function renderTag(tag, index) {
      var body = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, tag.name, !this.props.readOnly && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], _extends({}, this.props.id && {
        id: this.props.id + '-tag-' + index.toString()
      }, {
        circular: true,
        blank: true,
        onClick: this.tagRemoveClick(tag),
        className: "ml-1 transform-rotate--45 line-height--0 p-0",
        Component: function Component(p) {
          return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
            className: p.className,
            id: p.id,
            onClick: p.onClick
          }, p.children);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](material_design_icons_content_svg_production_ic_add_circle_outline_24px_svg__WEBPACK_IMPORTED_MODULE_3__, null)));
      var className = classnames__WEBPACK_IMPORTED_MODULE_9___default()('tags-input__tag', {
        'tags-input__tag-chip': this.props.showChips
      });

      if (this.props.onTagClick) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          onClick: this.tagClick(tag),
          small: true,
          className: className,
          key: index
        }, body);
      }

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        onClick: this.tagClick(tag),
        className: className,
        key: index
      }, body);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return TagsRaw;
}(_base_input_BaseInput__WEBPACK_IMPORTED_MODULE_5__["BaseInput"]);
TagsRaw.defaultProps = _objectSpread({}, _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_5__["BaseInput"].defaultProps, {
  disabled: false,
  className: '',
  tags: [],
  existingTags: [],
  maxTags: 1000,
  onTagsChanged: function onTagsChanged() {
    return undefined;
  },
  onNewTagAdded: function onNewTagAdded(newTagName) {
    return Promise.resolve({
      name: newTagName,
      id: new Date().getTime()
    });
  },
  valueNotAddedError: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "You forgot to add tag"),
  maxTagsSurpassedError: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "Maximum number of tags surpassed"),
  waitingForMoreInputComponent: react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, "Waiting for more input..."),
  showSuggestions: true,
  suggestionsLoadingComponent: 'Loading...',
  suggestionsEmptyComponent: 'No existing tags...',
  loadingDelayMs: 500,
  filterExistingTags: function filterExistingTags(text, tags) {
    return tags.filter(function (tag) {
      return tag.name && tag.name.toLowerCase().startsWith(text);
    });
  },
  maxSuggestions: 5,
  addNewOnBlur: false,
  translations: defaultTagsTranslations,
  minLettersToFetch: 0,
  mobileVersionEnabled: true
});
var Tags = Object(_themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_10__["withThemeContext"])( // tslint:disable-next-line: no-any
Object(_form_withFormContext__WEBPACK_IMPORTED_MODULE_8__["withFormContext"])(TagsRaw), 'tags');
var _default = Tags;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultTagsTranslations, "defaultTagsTranslations", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\Tags.tsx");
  reactHotLoader.register(TagsRaw, "TagsRaw", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\Tags.tsx");
  reactHotLoader.register(Tags, "Tags", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\Tags.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\Tags.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validators_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validators/index */ "./src/lib/validators/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _validators_index__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _validators_index__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9UYWdzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbImRlZmF1bHRUYWdzVHJhbnNsYXRpb25zIiwiZGVmYXVsdEJhc2VUcmFuc2xhdGlvbnMiLCJhZGROZXciLCJUYWdzUmF3IiwicHJvcHMiLCJ0ZXh0UmVmIiwic3VnZ2VzdGlvbnNSZWYiLCJpc01vYmlsZSIsIm9uVGV4dEVycm9yc0NoYW5nZWQiLCJ0ZXh0RXJyb3JzIiwic2V0U3RhdGUiLCJoYW5kbGVFcnJvcnMiLCJvbkZvY3VzIiwidGV4dElzRm9jdXNlZCIsInN1Z2dlc3Rpb25zVmlzaWJsZSIsInRvdWNoZWQiLCJmZXRjaEV4aXN0aW5nVGFncyIsInN0YXRlIiwidmFsdWUiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsImZvY3VzIiwib25LZXlEb3duIiwic3VnZ2VzdGlvbnMiLCJlIiwia2V5IiwicHJlc2VsZWN0ZWRTdWdnZXN0aW9uIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJleGlzdGluZ1RhZyIsImV4aXN0aW5nVGFncyIsImZpbmQiLCJldCIsIm5hbWUiLCJvblRhZ3NDaGFuZ2VkIiwidGFncyIsImNvbmNhdCIsImFsbG93TmV3IiwiYWRkTmV3VGFnIiwib25OZXdUYWdBZGRlZCIsIm5ld1RhZyIsIm9uU3VnZ2VzdGlvblNlbGVjdGVkIiwidGFnIiwibmV3VGFncyIsImlzTWF4IiwibWF4VGFncyIsImZpbmFsVmFsdWUiLCJvbkJsdXIiLCJvblRleHRDaGFuZ2VkIiwiaXNWYWxpZCIsInRhcmdldCIsInRleHRJc1ZhbGlkIiwiZXJyb3JzIiwiZ2V0RXJyb3JzIiwic2V0SW52YWxpZCIsInNldFZhbGlkIiwidGFnQ2xpY2siLCJvblRhZ0NsaWNrIiwidGFnUmVtb3ZlQ2xpY2siLCJmaWx0ZXIiLCJzdiIsImlkIiwiZmV0Y2hpbmdFeGlzdGluZ1RhZ3MiLCJmZXRjaGVkRXhpc3RpbmdUYWdzIiwiUmVhY3QiLCJoYW5kbGVDbGlja091dHNpZGUiLCJiaW5kIiwiaGFuZGxlTGVhdmVNb2JpbGVDbGljayIsIm1vYmlsZVZlcnNpb25FbmFibGVkIiwicmVxdWlyZSIsIm9sZFByb3BzIiwidmFsaWRhdG9ycyIsImN1c3RvbVZhbGlkYXRvcnMiLCJyZXF1aXJlZCIsImNvbnRhaW5lclJlZiIsImNvbnRhaW5zIiwiYWRkTmV3T25CbHVyIiwiZ2V0U3VnZ2VzdGlvbnMiLCJleGlzdGluZyIsInMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHJhbnNsYXRpb25zIiwiZ2V0VHJhbnNsYXRpb25zIiwidGV4dFByb3BzIiwic2hvd01vYmlsZVZlcnNpb24iLCJMZWF2ZU1vYmlsZUJ1dHRvbiIsInNob3dJbnB1dCIsIkJvb2xlYW4iLCJyZWFkT25seSIsImJvZHkiLCJ0aXRsZSIsInRvb2x0aXAiLCJjbGFzc05hbWVzIiwiZ2V0VmFsaWRhdGlvbkNsYXNzIiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyZW5kZXJUYWciLCJyZWFkb25seUVtcHR5UGxhY2Vob2xkZXIiLCJzaG93U3VnZ2VzdGlvbnMiLCJzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQiLCJzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50Iiwid2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudCIsIm1pbkxldHRlcnNUb0ZldGNoIiwicG9wcGVyUHJvcHMiLCJyZW5kZXJEZWZhdWx0VmFsaWRhdGlvbiIsImxhYmVsIiwicmVuZGVyTGFiZWwiLCJ2YWx1ZU5vdEFkZGVkRXJyb3IiLCJtYXhUYWdzU3VycGFzc2VkRXJyb3IiLCJpIiwic3RhcnRzV2l0aCIsInRpbWVyIiwibG9hZGluZ0RlbGF5TXMiLCJ0aGVuIiwiY2xlYXJUaW1lb3V0IiwiZmlsdGVyZWRUYWdzIiwiZmlsdGVyRXhpc3RpbmdUYWdzIiwidG9Mb3dlckNhc2UiLCJhbGxvd1NhbWVUYWdNdWx0aXBsZVRpbWVzIiwic29tZSIsInQiLCJzbGljZSIsIm1heFN1Z2dlc3Rpb25zIiwidG9TdHJpbmciLCJwIiwib25DbGljayIsImNoaWxkcmVuIiwic2hvd0NoaXBzIiwiQmFzZUlucHV0IiwiZGVmYXVsdFByb3BzIiwiZGlzYWJsZWQiLCJuZXdUYWdOYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJEYXRlIiwiZ2V0VGltZSIsInRleHQiLCJUYWdzIiwid2l0aFRoZW1lQ29udGV4dCIsIndpdGhGb3JtQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBTU8sSUFBTUEsdUJBQXVCLHFCQUMvQkMsNkVBRCtCO0FBRWxDQyxRQUFNLEVBQUU7QUFGMEIsRUFBN0I7QUFrREEsSUFBTUMsT0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFvQ0UsbUJBQVlDLEtBQVosRUFBOEM7QUFBQTs7QUFBQTs7QUFDNUMsaUZBQU1BLEtBQU47QUFENEMsVUFKdENDLE9BSXNDO0FBQUEsVUFIdENDLGNBR3NDO0FBQUEsVUFGdENDLFFBRXNDLEdBRmxCLEtBRWtCOztBQUFBLFVBOFB0Q0MsbUJBOVBzQyxHQThQaEIsVUFBQ0MsVUFBRDtBQUFBLGFBQzVCLE1BQUtDLFFBQUwsQ0FDRTtBQUFBLGVBQU87QUFBRUQsb0JBQVUsRUFBVkE7QUFBRixTQUFQO0FBQUEsT0FERixFQUVFO0FBQUEsZUFBTSxNQUFLRSxZQUFMLEVBQU47QUFBQSxPQUZGLENBRDRCO0FBQUEsS0E5UGdCOztBQUFBLFVBb1F0Q0MsT0FwUXNDLEdBb1E1QixZQUFNO0FBQ3RCLFlBQUtGLFFBQUwsQ0FDRTtBQUFFRyxxQkFBYSxFQUFFLElBQWpCO0FBQXVCQywwQkFB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QUNULElBQUosSUFBWVMsR0FBRyxDQUFDVCxJQUFKLENBQVN5RixXQUFULEdBQXVCUCxVQUF2QixDQUFrQzBCLElBQWxDLENBQWhCO0FBQUEsS0FBZixDQURrQjtBQUFBLEc7QUFFcEJkLGdCQUFjLEVBQUUsQztBQUNoQm5ELGNBQVksRUFBRSxLO0FBQ2RPLGNBQVksRUFBRXJGLHVCO0FBQ2Q2RyxtQkFBaUIsRUFBRSxDO0FBQ25CdkMsc0JBQW9CLEVBQUU7O0FBZ2hCbkIsSUFBTTBFLElBQUksR0FBR0MseUZBQWdCLEVBQ2xDO0FBQ0FDLDZFQUFlLENBQVkvSSxPQUFaLENBRm1CLEVBR2xDLE1BSGtDLENBQTdCO2VBTVE2SSxJO0FBQUE7Ozs7Ozs7Ozs7MEJBcm1CRmhKLHVCOzBCQWtEQUcsTzswQkE2aUJBNkksSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFuQmI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImEwYWFjY2QtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlic1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElucHV0R3JvdXAgfSBmcm9tICcuLi9pbnB1dEdyb3VwL0lucHV0R3JvdXAnO1xyXG5pbXBvcnQgeyBUZXh0LCBUZXh0UHJvcHMsIFRleHRSYXcgfSBmcm9tICcuLi90ZXh0L1RleHQnO1xyXG5pbXBvcnQgKiBhcyBQbHVzSWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvY29udGVudC9zdmcvcHJvZHVjdGlvbi9pY19hZGRfY2lyY2xlX291dGxpbmVfMjRweC5zdmcnO1xyXG5pbXBvcnQgKiBhcyBMZWZ0QXJyb3dJY29uIGZyb20gJ21hdGVyaWFsLWRlc2lnbi1pY29ucy9uYXZpZ2F0aW9uL3N2Zy9wcm9kdWN0aW9uL2ljX2Fycm93X2JhY2tfMjRweC5zdmcnO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VJbnB1dFByb3BzLFxyXG4gIEJhc2VJbnB1dFN0YXRlLFxyXG4gIEJhc2VJbnB1dCxcclxuICBWYWxpZGF0aW9uRXJyb3IsXHJcbiAgZGVmYXVsdEJhc2VUcmFuc2xhdGlvbnMsXHJcbn0gZnJvbSAnLi4vYmFzZS9pbnB1dC9CYXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9idXR0b24vQnV0dG9uJztcclxuaW1wb3J0IFRhZ3NTdWdnZXN0aW9ucyBmcm9tICcuL3N1YkNvbXBvbmVudHMvVGFnc1N1Z2dlc3Rpb25zJztcclxuaW1wb3J0IHsgd2l0aEZvcm1Db250ZXh0IH0gZnJvbSAnLi4vZm9ybS93aXRoRm9ybUNvbnRleHQnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgd2l0aFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL3RoZW1lUHJvdmlkZXIvd2l0aFRoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IFBvcHBlclByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyL1BvcHBlcic7XHJcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbi8vIE1pc2NcclxuZXhwb3J0IHR5cGUgVGFnID0ge1xyXG4gIGlkOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUYWdzVHJhbnNsYXRpb25zID0ge1xyXG4gIC4uLmRlZmF1bHRCYXNlVHJhbnNsYXRpb25zLFxyXG4gIGFkZE5ldzogJ0FkZCBuZXcnLFxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgVGFnc1RyYW5zbGF0aW9ucyA9IFBhcnRpYWw8dHlwZW9mIGRlZmF1bHRUYWdzVHJhbnNsYXRpb25zPjtcclxuXHJcbmV4cG9ydCB0eXBlIFRhZ3NQcm9wcyA9IHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIHRhZ3M6IFRhZ1tdO1xyXG4gIGV4aXN0aW5nVGFncz86IFRhZ1tdO1xyXG4gIGZldGNoRXhpc3RpbmdUYWdzPzogKHRleHQ6IHN0cmluZykgPT4gUHJvbWlzZTxUYWdbXT47XHJcbiAgb25UYWdzQ2hhbmdlZDogKG5ld1RhZ3M6IFRhZ1tdKSA9PiB2b2lkO1xyXG4gIG9uTmV3VGFnQWRkZWQ/OiAobmV3VGFnTmFtZTogc3RyaW5nKSA9PiBQcm9taXNlPFRhZz47XHJcbiAgb25UYWdDbGljaz86ICh0YWc6IFRhZykgPT4gdm9pZDtcclxuICBzaG93Q2hpcHM/OiBib29sZWFuO1xyXG4gIGFsbG93TmV3PzogYm9vbGVhbjtcclxuICBhZGROZXdPbkJsdXI/OiBib29sZWFuO1xyXG4gIHRleHRQcm9wcz86IFRleHRQcm9wcztcclxuICByZWFkT25seT86IGJvb2xlYW47XHJcbiAgcmVhZG9ubHlFbXB0eVBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIG1heFRhZ3M/OiBudW1iZXI7XHJcbiAgdmFsdWVOb3RBZGRlZEVycm9yPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgbWF4VGFnc1N1cnBhc3NlZEVycm9yPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgc2hvd1N1Z2dlc3Rpb25zPzogYm9vbGVhbjtcclxuICBzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgd2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIGxvYWRpbmdEZWxheU1zPzogbnVtYmVyO1xyXG4gIGZpbHRlckV4aXN0aW5nVGFncz86ICh0ZXh0OiBzdHJpbmcsIGV4aXN0aW5nVGFnczogVGFnW10pID0+IFRhZ1tdO1xyXG4gIGFsbG93U2FtZVRhZ011bHRpcGxlVGltZXM/OiBib29sZWFuO1xyXG4gIG1heFN1Z2dlc3Rpb25zPzogbnVtYmVyO1xyXG4gIHBvcHBlclByb3BzPzogUGFydGlhbDxQb3BwZXJQcm9wcz47XHJcbiAgbWluTGV0dGVyc1RvRmV0Y2g/OiBudW1iZXI7XHJcbiAgbW9iaWxlVmVyc2lvbkVuYWJsZWQ/OiBib29sZWFuO1xyXG59ICYgQmFzZUlucHV0UHJvcHM8SFRNTElucHV0RWxlbWVudCwgVGFnc1RyYW5zbGF0aW9ucz47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhZ3NTdGF0ZSBleHRlbmRzIEJhc2VJbnB1dFN0YXRlIHtcclxuICB0ZXh0SXNGb2N1c2VkOiBib29sZWFuO1xyXG4gIHRleHRFcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdO1xyXG4gIHRleHRJc1ZhbGlkOiBib29sZWFuO1xyXG4gIHN1Z2dlc3Rpb25zVmlzaWJsZTogYm9vbGVhbjtcclxuICBmZXRjaGVkRXhpc3RpbmdUYWdzOiBUYWdbXTtcclxuICBmZXRjaGluZ0V4aXN0aW5nVGFnczogYm9vbGVhbjtcclxuICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbnR5cGUgSW5qZWN0ZWRQcm9wcyA9IHt9O1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhZ3NSYXcgZXh0ZW5kcyBCYXNlSW5wdXQ8XHJcbiAgVGFnc1Byb3BzICYgSW5qZWN0ZWRQcm9wcyxcclxuICBUYWdzU3RhdGUsXHJcbiAgSFRNTElucHV0RWxlbWVudCxcclxuICBUYWdzVHJhbnNsYXRpb25zXHJcbj4ge1xyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBUYWdzUHJvcHMgPSB7XHJcbiAgICAuLi5CYXNlSW5wdXQuZGVmYXVsdFByb3BzLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgZXhpc3RpbmdUYWdzOiBbXSxcclxuICAgIG1heFRhZ3M6IDEwMDAsXHJcbiAgICBvblRhZ3NDaGFuZ2VkOiAoKSA9PiB1bmRlZmluZWQsXHJcbiAgICBvbk5ld1RhZ0FkZGVkOiBuZXdUYWdOYW1lID0+XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSh7IG5hbWU6IG5ld1RhZ05hbWUsIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9KSxcclxuICAgIHZhbHVlTm90QWRkZWRFcnJvcjogPHNwYW4+WW91IGZvcmdvdCB0byBhZGQgdGFnPC9zcGFuPixcclxuICAgIG1heFRhZ3NTdXJwYXNzZWRFcnJvcjogPHNwYW4+TWF4aW11bSBudW1iZXIgb2YgdGFncyBzdXJwYXNzZWQ8L3NwYW4+LFxyXG4gICAgd2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudDogPHNwYW4+V2FpdGluZyBmb3IgbW9yZSBpbnB1dC4uLjwvc3Bhbj4sXHJcbiAgICBzaG93U3VnZ2VzdGlvbnM6IHRydWUsXHJcbiAgICBzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQ6ICdMb2FkaW5nLi4uJyxcclxuICAgIHN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQ6ICdObyBleGlzdGluZyB0YWdzLi4uJyxcclxuICAgIGxvYWRpbmdEZWxheU1zOiA1MDAsXHJcbiAgICBmaWx0ZXJFeGlzdGluZ1RhZ3M6ICh0ZXh0LCB0YWdzKSA9PlxyXG4gICAgICB0YWdzLmZpbHRlcih0YWcgPT4gdGFnLm5hbWUgJiYgdGFnLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRleHQpKSxcclxuICAgIG1heFN1Z2dlc3Rpb25zOiA1LFxyXG4gICAgYWRkTmV3T25CbHVyOiBmYWxzZSxcclxuICAgIHRyYW5zbGF0aW9uczogZGVmYXVsdFRhZ3NUcmFuc2xhdGlvbnMsXHJcbiAgICBtaW5MZXR0ZXJzVG9GZXRjaDogMCxcclxuICAgIG1vYmlsZVZlcnNpb25FbmFibGVkOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdGV4dFJlZjogUmVhY3QuUmVmT2JqZWN0PFRleHRSYXc+O1xyXG4gIHByaXZhdGUgc3VnZ2VzdGlvbnNSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcbiAgcHJpdmF0ZSBpc01vYmlsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogVGFnc1Byb3BzICYgSW5qZWN0ZWRQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgdGV4dEVycm9yczogW10sXHJcbiAgICAgIHRleHRJc0ZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgICBmZXRjaGluZ0V4aXN0aW5nVGFnczogZmFsc2UsXHJcbiAgICAgIHRleHRJc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgZmV0Y2hlZEV4aXN0aW5nVGFnczogW10sXHJcbiAgICB9O1xyXG4gICAgdGhpcy50ZXh0UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLnN1Z2dlc3Rpb25zUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSA9IHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUxlYXZlTW9iaWxlQ2xpY2sgPSB0aGlzLmhhbmRsZUxlYXZlTW9iaWxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIGlmIChwcm9wcy5tb2JpbGVWZXJzaW9uRW5hYmxlZCkge1xyXG4gICAgICB0aGlzLmlzTW9iaWxlID0gcmVxdWlyZSgncmVhY3QtZGV2aWNlLWRldGVjdCcpPy5pc01vYmlsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb2N1cygpIHtcclxuICAgIGlmICh0aGlzLnRleHRSZWYuY3VycmVudCkge1xyXG4gICAgICB0aGlzLnRleHRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wczogVGFnc1Byb3BzICYgSW5qZWN0ZWRQcm9wcykge1xyXG4gICAgaWYgKFxyXG4gICAgICBvbGRQcm9wcy50YWdzICE9PSB0aGlzLnByb3BzLnRhZ3MgfHxcclxuICAgICAgb2xkUHJvcHMudmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy52YWxpZGF0b3JzIHx8XHJcbiAgICAgIG9sZFByb3BzLmN1c3RvbVZhbGlkYXRvcnMgIT09IHRoaXMucHJvcHMuY3VzdG9tVmFsaWRhdG9ycyB8fFxyXG4gICAgICBvbGRQcm9wcy5yZXF1aXJlZCAhPT0gdGhpcy5wcm9wcy5yZXF1aXJlZFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKHRoaXMucHJvcHMudGFncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlTGVhdmVNb2JpbGVDbGljaygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB0ZXh0SXNGb2N1c2VkOiBmYWxzZSxcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVDbGlja091dHNpZGUoZTogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5jb250YWluZXJSZWYuY3VycmVudCB8fFxyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KSB8fFxyXG4gICAgICAhdGhpcy5zdWdnZXN0aW9uc1JlZi5jdXJyZW50IHx8XHJcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnNSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudClcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLnByb3BzLmFkZE5ld09uQmx1ciAmJiB0aGlzLnN0YXRlLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5nZXRTdWdnZXN0aW9ucygpO1xyXG4gICAgICBjb25zdCBleGlzdGluZyA9IHN1Z2dlc3Rpb25zLmZpbmQocyA9PiBzLm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgICBpZiAoZXhpc3RpbmcpIHtcclxuICAgICAgICB0aGlzLm9uU3VnZ2VzdGlvblNlbGVjdGVkKGV4aXN0aW5nKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmFsbG93TmV3KSB7XHJcbiAgICAgICAgdGhpcy5hZGROZXdUYWcoKTtcclxuICAgICAgfVxyXG4gICAgfSAvKiBlbHNlIGlmICh0aGlzLnN0YXRlLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycgfSk7XHJcbiAgICB9Ki9cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKGRlZmF1bHRUYWdzVHJhbnNsYXRpb25zKTtcclxuICAgIGNvbnN0IHRleHRQcm9wcyA9IHRoaXMucHJvcHMudGV4dFByb3BzID8gdGhpcy5wcm9wcy50ZXh0UHJvcHMgOiB7fTtcclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5nZXRTdWdnZXN0aW9ucygpO1xyXG4gICAgY29uc3Qgc2hvd01vYmlsZVZlcnNpb24gPVxyXG4gICAgICB0aGlzLnByb3BzLm1vYmlsZVZlcnNpb25FbmFibGVkICYmXHJcbiAgICAgIHRoaXMuaXNNb2JpbGUgJiZcclxuICAgICAgKHRoaXMuc3RhdGUudGV4dElzRm9jdXNlZCB8fCB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSk7XHJcbiAgICBjb25zdCBMZWF2ZU1vYmlsZUJ1dHRvbiA9IHNob3dNb2JpbGVWZXJzaW9uID8gKFxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fbGVhdmVNb2JpbGVUYWdzQnV0dG9uIGxpbmUtaGVpZ2h0LS0wXCJcclxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUxlYXZlTW9iaWxlQ2xpY2t9XHJcbiAgICAgICAgbm9TaGFkb3c9e3RydWV9XHJcbiAgICAgICAgdW5vYnRydXNpdmU9e3RydWV9XHJcbiAgICAgID5cclxuICAgICAgICA8TGVmdEFycm93SWNvbiAvPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICkgOiAoXHJcbiAgICAgIHVuZGVmaW5lZFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHNob3dJbnB1dCA9IEJvb2xlYW4oXHJcbiAgICAgICghdGhpcy5wcm9wcy5tYXhUYWdzIHx8XHJcbiAgICAgICAgdGhpcy5wcm9wcy5tYXhUYWdzID4gKHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoKSkgJiZcclxuICAgICAgICAhdGhpcy5wcm9wcy5yZWFkT25seVxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxQb3J0YWwgY29udGFpbmVyPXtkb2N1bWVudC5ib2R5fSBkaXNhYmxlUG9ydGFsPXshc2hvd01vYmlsZVZlcnNpb259PlxyXG4gICAgICAgIDxJbnB1dEdyb3VwIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSB0b29sdGlwPXt0aGlzLnByb3BzLnRvb2x0aXB9PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICdpbnB1dF9fYmFzZSB0YWdzLWlucHV0JyxcclxuICAgICAgICAgICAgICB0aGlzLmdldFZhbGlkYXRpb25DbGFzcygpLFxyXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0YWdzLWlucHV0LS1yZWFkT25seSc6IHRoaXMucHJvcHMucmVhZE9ubHksXHJcbiAgICAgICAgICAgICAgICAndGFncy1pbnB1dC0taGFzUGxhY2Vob2xkZXInOlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRleHRQcm9wcyAmJiB0aGlzLnByb3BzLnRleHRQcm9wcy5wbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgICAgICd0YWdzLWlucHV0LS1tb2JpbGUnOiBzaG93TW9iaWxlVmVyc2lvbixcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5jb250YWluZXJSZWZ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzaG93TW9iaWxlVmVyc2lvbiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X19tb2JpbGVCYWNrZHJvcFwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnc19fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIHshc2hvd0lucHV0ICYmIHNob3dNb2JpbGVWZXJzaW9uICYmIExlYXZlTW9iaWxlQnV0dG9ufVxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRhZ3MgJiYgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3RhZ19fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50YWdzLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUYWcoaXRlbSwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93SW5wdXQgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICd0YWdzLWlucHV0X190YWdzX193cmFwcGVyICcgK1xyXG4gICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5yZWFkT25seSA/ICdmaWxsZWQgJyA6ICcnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIHNob3dDbGVhckJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgey4uLnRleHRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctdGV4dC1pbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICByZWY9e3RoaXMudGV4dFJlZn1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggPiAwID8gZmFsc2UgOiB0aGlzLnByb3BzLnJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAndGFncy1pbnB1dF9fdGV4dC1pbnB1dCAnICtcclxuICAgICAgICAgICAgICAgICAgICAodGV4dFByb3BzLmNsYXNzTmFtZSA/IHRleHRQcm9wcy5jbGFzc05hbWUgOiAnJylcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3duKHN1Z2dlc3Rpb25zKX1cclxuICAgICAgICAgICAgICAgICAgb25FcnJvcnNDaGFuZ2VkPXt0aGlzLm9uVGV4dEVycm9yc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25Gb2N1c31cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRPbmx5fVxyXG4gICAgICAgICAgICAgICAgICBzaG93VmFsaWRhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIGlnbm9yZUNvbnRleHQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e3RoaXMucHJvcHMudmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgICAgY3VzdG9tVmFsaWRhdG9ycz17dGhpcy5wcm9wcy5jdXN0b21WYWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgICBiZWZvcmU9e0xlYXZlTW9iaWxlQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSAmJiB0aGlzLnByb3BzLnNob3dTdWdnZXN0aW9ucyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUYWdzU3VnZ2VzdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRleHQtaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyUmVmPXt0aGlzLnN1Z2dlc3Rpb25zUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXt0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0aGlzLnByb3BzLmFsbG93TmV3fVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj17dGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5mZXRjaGluZ0V4aXN0aW5nVGFnc31cclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nQ29tcG9uZW50PXt0aGlzLnByb3BzLnN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICBpc1Zpc2libGU9e3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIEVtcHR5Q29tcG9uZW50PXt0aGlzLnByb3BzLnN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgV2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLndhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNXYWl0aW5nRm9yTW9yZUlucHV0PXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFsdWUubGVuZ3RoIDwgdGhpcy5wcm9wcy5taW5MZXR0ZXJzVG9GZXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0YWdzPXtzdWdnZXN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGVkPXt0aGlzLm9uU3VnZ2VzdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIEFkZE5ld1RhZ0NvbXBvbmVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFsbG93TmV3ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnByb3BzLmV4aXN0aW5nVGFncyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IGUubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnN0YXRlLmZldGNoZWRFeGlzdGluZ1RhZ3MgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gZS5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRleHRJc1ZhbGlkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctYWRkLW5ldy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3N1Z2dlc3Rpb24gdGFncy1pbnB1dF9fYWRkLW5ld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGROZXdUYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zLmFkZE5ld30gXCJ7dGhpcy5zdGF0ZS52YWx1ZX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wcGVyUHJvcHM9e3RoaXMucHJvcHMucG9wcGVyUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJEZWZhdWx0VmFsaWRhdGlvbigpfVxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbCAmJiAoXHJcbiAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyB8fFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRleHRJc0ZvY3VzZWQgfHxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWFkT25seSB8fFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID49IHRoaXMucHJvcHMubWF4VGFncyB8fFxyXG4gICAgICAgICAgICAgICAgICBzaG93TW9iaWxlVmVyc2lvblxyXG4gICAgICAgICAgICAgICAgICAgID8gJ2xhYmVsLS1mb2N1c2VkJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJMYWJlbCgpfVxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgIDwvUG9ydGFsPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25UZXh0RXJyb3JzQ2hhbmdlZCA9ICh0ZXh0RXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7IHRleHRFcnJvcnMgfSksXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcblxyXG4gIHByaXZhdGUgb25Gb2N1cyA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHsgdGV4dElzRm9jdXNlZDogdHJ1ZSwgc3VnZ2VzdGlvbnNWaXNpYmxlOiB0cnVlLCB0b3VjaGVkOiB0cnVlIH0sXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcbiAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMudGV4dFJlZi5jdXJyZW50Py5mb2N1cygpO1xyXG4gICAgfSwgMTApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25LZXlEb3duID0gKHN1Z2dlc3Rpb25zOiBUYWdbXSkgPT4gYXN5bmMgZSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGUua2V5ID09PSAnRW50ZXInICYmXHJcbiAgICAgICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyB8fFxyXG4gICAgICAgIHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICE9PSB1bmRlZmluZWQpICYmXHJcbiAgICAgIHRoaXMuc3RhdGUudGV4dEVycm9ycy5sZW5ndGggPT09IDBcclxuICAgICkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nVGFnID1cclxuICAgICAgICB0aGlzLnByb3BzLmV4aXN0aW5nVGFncyAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzLmZpbmQoZXQgPT4gZXQubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKFxyXG4gICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmNvbmNhdChzdWdnZXN0aW9uc1t0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbl0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnLCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGV4aXN0aW5nVGFnKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKHRoaXMucHJvcHMudGFncy5jb25jYXQoZXhpc3RpbmdUYWcpKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5hbGxvd05ldykge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYWRkTmV3VGFnKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHN1Z2dlc3Rpb25zLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUpIHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICBjb25zdCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gMFxyXG4gICAgICAgICAgICA/IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAtIDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICBjb25zdCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiArIDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGFkZE5ld1RhZyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhZyA9IGF3YWl0IHRoaXMucHJvcHMub25OZXdUYWdBZGRlZCh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgIGlmIChuZXdUYWcpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKFxyXG4gICAgICAgIHRoaXMucHJvcHMudGFncyA/IHRoaXMucHJvcHMudGFncy5jb25jYXQobmV3VGFnKSA6IFtuZXdUYWddXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnLCB0ZXh0RXJyb3JzOiBbXSB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25TdWdnZXN0aW9uU2VsZWN0ZWQgPSAodGFnOiBUYWcpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhZ3MgPSB0aGlzLnByb3BzLnRhZ3MuY29uY2F0KHRhZyk7XHJcbiAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQobmV3VGFncyk7XHJcbiAgICBjb25zdCBpc01heCA9IG5ld1RhZ3MubGVuZ3RoID09PSB0aGlzLnByb3BzLm1heFRhZ3M7XHJcbiAgICBjb25zdCBmaW5hbFZhbHVlID0gIXRoaXMucHJvcHMuYWxsb3dOZXcgJiYgIWlzTWF4ID8gdGhpcy5zdGF0ZS52YWx1ZSA6ICcnO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlOiBmaW5hbFZhbHVlLFxyXG4gICAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogaXNNYXggPyBmYWxzZSA6IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlLFxyXG4gICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICAgIHRleHRFcnJvcnM6IFtdLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIXRoaXMucHJvcHMubWF4VGFncyB8fFxyXG4gICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCArIDEgPCB0aGlzLnByb3BzLm1heFRhZ3NcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoZmluYWxWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbkJsdXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dElzRm9jdXNlZDogZmFsc2UsXHJcbiAgICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvblRleHRDaGFuZ2VkID0gKFxyXG4gICAgZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXHJcbiAgICBpc1ZhbGlkOiBib29sZWFuXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHtcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBpc1ZhbGlkOiBpc1ZhbGlkLFxyXG4gICAgICAgIHRleHRJc1ZhbGlkOiBpc1ZhbGlkLFxyXG4gICAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgfSksXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcbiAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9ycyA9ICh0YWdzOiBUYWdbXSA9IHRoaXMucHJvcHMudGFncykgPT4ge1xyXG4gICAgbGV0IGVycm9ycyA9IHRoaXMuZ2V0RXJyb3JzKHRhZ3MpO1xyXG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0SW52YWxpZChlcnJvcnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRWYWxpZCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZ2V0RXJyb3JzKHRhZ3M6IFRhZ1tdKSB7XHJcbiAgICBsZXQgZXJyb3JzID0gW107XHJcbiAgICBpZiAodGFncy5sZW5ndGggPCB0aGlzLnByb3BzLm1heFRhZ3MpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnN0YXRlLnRleHRFcnJvcnMpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgIT09ICcnICYmIHRhZ3MubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMucmVxdWlyZWQpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdChcclxuICAgICAgICB0aGlzLmdldFRyYW5zbGF0aW9ucyh0aGlzLnByb3BzLnRyYW5zbGF0aW9ucykucmVxdWlyZWRcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlICYmIHRoaXMucHJvcHMuYWxsb3dOZXcgJiYgIXRoaXMuc3RhdGUudGV4dElzRm9jdXNlZCkge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMucHJvcHMudmFsdWVOb3RBZGRlZEVycm9yKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLm1heFRhZ3MgPCAodGhpcy5wcm9wcy50YWdzICYmIHRoaXMucHJvcHMudGFncy5sZW5ndGgpKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5wcm9wcy5tYXhUYWdzU3VycGFzc2VkRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9ycy5maWx0ZXIoaSA9PiBpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmV0Y2hFeGlzdGluZ1RhZ3Moc3RhcnRzV2l0aDogc3RyaW5nID0gJycpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5wcm9wcy5mZXRjaEV4aXN0aW5nVGFncyAmJlxyXG4gICAgICBzdGFydHNXaXRoLmxlbmd0aCA+PSB0aGlzLnByb3BzLm1pbkxldHRlcnNUb0ZldGNoXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmZXRjaGluZ0V4aXN0aW5nVGFnczogdHJ1ZSB9KSxcclxuICAgICAgICB0aGlzLnByb3BzLmxvYWRpbmdEZWxheU1zXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hFeGlzdGluZ1RhZ3Moc3RhcnRzV2l0aCkudGhlbihmZXRjaGVkRXhpc3RpbmdUYWdzID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZmV0Y2hlZEV4aXN0aW5nVGFncyxcclxuICAgICAgICAgIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFN1Z2dlc3Rpb25zKCkge1xyXG4gICAgY29uc3QgZXhpc3RpbmdUYWdzOiBUYWdbXSA9IFtdXHJcbiAgICAgIC5jb25jYXQodGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgPyB0aGlzLnByb3BzLmV4aXN0aW5nVGFncyA6IFtdKVxyXG4gICAgICAuY29uY2F0KFxyXG4gICAgICAgIHRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyA/IHRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyA6IFtdXHJcbiAgICAgICk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFRhZ3MgPSB0aGlzLnByb3BzLmZpbHRlckV4aXN0aW5nVGFncyhcclxuICAgICAgdGhpcy5zdGF0ZS52YWx1ZSA/IHRoaXMuc3RhdGUudmFsdWUudG9Mb3dlckNhc2UoKSA6ICcnLFxyXG4gICAgICBleGlzdGluZ1RhZ3NcclxuICAgICk7XHJcbiAgICBsZXQgc3VnZ2VzdGlvbnMgPSBmaWx0ZXJlZFRhZ3NcclxuICAgICAgLmZpbHRlcihcclxuICAgICAgICB0YWcgPT5cclxuICAgICAgICAgIHRoaXMucHJvcHMuYWxsb3dTYW1lVGFnTXVsdGlwbGVUaW1lcyB8fFxyXG4gICAgICAgICAgIXRoaXMucHJvcHMudGFncy5zb21lKHQgPT4gdC5pZCA9PT0gdGFnLmlkKVxyXG4gICAgICApXHJcbiAgICAgIC5zbGljZSgwLCB0aGlzLnByb3BzLm1heFN1Z2dlc3Rpb25zKTtcclxuICAgIHJldHVybiBzdWdnZXN0aW9ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyVGFnKHRhZzogVGFnLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBib2R5ID0gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHt0YWcubmFtZX1cclxuICAgICAgICB7IXRoaXMucHJvcHMucmVhZE9ubHkgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy10YWctJyArIGluZGV4LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBjaXJjdWxhcj17dHJ1ZX1cclxuICAgICAgICAgICAgYmxhbms9e3RydWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudGFnUmVtb3ZlQ2xpY2sodGFnKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMSB0cmFuc2Zvcm0tcm90YXRlLS00NSBsaW5lLWhlaWdodC0tMCBwLTBcIlxyXG4gICAgICAgICAgICBDb21wb25lbnQ9e3AgPT4gKFxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cC5jbGFzc05hbWV9IGlkPXtwLmlkfSBvbkNsaWNrPXtwLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAge3AuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGx1c0ljb24gLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3RhZ3MtaW5wdXRfX3RhZycsIHtcclxuICAgICAgJ3RhZ3MtaW5wdXRfX3RhZy1jaGlwJzogdGhpcy5wcm9wcy5zaG93Q2hpcHMsXHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uVGFnQ2xpY2spIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRhZ0NsaWNrKHRhZyl9XHJcbiAgICAgICAgICBzbWFsbD17dHJ1ZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Ym9keX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy50YWdDbGljayh0YWcpfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAge2JvZHl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdGFnQ2xpY2sgPSAodGFnOiBUYWcpID0+ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25UYWdDbGljayAmJiB0aGlzLnByb3BzLm9uVGFnQ2xpY2sodGFnKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHRhZ1JlbW92ZUNsaWNrID0gKHRhZzogVGFnKSA9PiAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBuZXdUYWdzID0gdGhpcy5wcm9wcy50YWdzLmZpbHRlcihzdiA9PiBzdi5pZCAhPT0gdGFnLmlkKTtcclxuICAgIC8qaWYgKG5ld1RhZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5mb2N1cygpLCA1MCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgIH0pOyovXHJcbiAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKG5ld1RhZ3MpO1xyXG4gICAgdGhpcy5oYW5kbGVFcnJvcnMobmV3VGFncyk7XHJcbiAgICAvLyB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ3MgPSB3aXRoVGhlbWVDb250ZXh0PFRhZ3NQcm9wcywgSW5zdGFuY2VUeXBlPHR5cGVvZiBUYWdzUmF3Pj4oXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuICB3aXRoRm9ybUNvbnRleHQ8VGFnc1Byb3BzPihUYWdzUmF3KSxcclxuICAndGFncydcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ3M7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdmFsaWRhdG9ycy9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9idXR0b24nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tib3gnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvZHluYW1pY1N1Ym1pdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9mb3JtJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2lucHV0R3JvdXAnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXRIZWFkZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvbW9uZXkvTW9uZXknO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvb3BlbmluZ0hvdXJzL29wZW5pbmdIb3Vyc0RheSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9vcGVuaW5nSG91cnMvb3BlbmluZ0hvdXJzU3BlY2lhbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9vcGVuaW5nSG91cnMvb3BlbmluZ0hvdXJzV2Vlayc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9yYWRpbyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9yYWRpb0NvbnRhaW5lcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QvU2VsZWN0JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3N1Ym1pdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90YWdzJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGV4dEFyZWEnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGltZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90aW1lU3Bhbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90aGVtZVByb3ZpZGVyJztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==