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
/* harmony import */ var _themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../themeProvider/withThemeContext */ "./src/lib/components/themeProvider/withThemeContext.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
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










var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");


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
      _this.setState(function () {
        return {
          textIsFocused: true,
          suggestionsVisible: true,
          touched: true
        };
      }, function () {
        return _this.handleErrors();
      });

      _this.fetchExistingTags(_this.state.value);

      var showMobileVersion = _this.props.mobileVersionEnabled && _this.isMobile && (_this.state.textIsFocused || _this.state.suggestionsVisible);

      if (!showMobileVersion && _this.props.mobileVersionEnabled && _this.isMobile) {
        setTimeout(function () {
          var _this$textRef$current;

          return (_this$textRef$current = _this.textRef.current) === null || _this$textRef$current === void 0 ? void 0 : _this$textRef$current.focus();
        }, 100);
      }
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
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Portal"], {
        container: document.body,
        disablePortal: !showMobileVersion
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        title: this.props.title,
        tooltip: this.props.tooltip
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, this.props.id && {
        id: this.props.id
      }, {
        className: classNames('input__base tags-input', this.getValidationClass(), this.props.className, {
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
        loading: this.state.fetchingExistingTags || this.props.isLoading,
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
          return _this4.setState(function () {
            return {
              fetchingExistingTags: true
            };
          });
        }, this.props.loadingDelayMs);
        this.props.fetchExistingTags(startsWith).then(function (fetchedExistingTags) {
          clearTimeout(timer);

          _this4.setState(function () {
            return {
              fetchedExistingTags: fetchedExistingTags,
              fetchingExistingTags: false
            };
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
      var className = classNames('tags-input__tag', {
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
var Tags = Object(_themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_9__["withThemeContext"])( // tslint:disable-next-line: no-any
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9UYWdzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJyZXF1aXJlIiwiZGVmYXVsdFRhZ3NUcmFuc2xhdGlvbnMiLCJkZWZhdWx0QmFzZVRyYW5zbGF0aW9ucyIsImFkZE5ldyIsIlRhZ3NSYXciLCJwcm9wcyIsInRleHRSZWYiLCJzdWdnZXN0aW9uc1JlZiIsImlzTW9iaWxlIiwib25UZXh0RXJyb3JzQ2hhbmdlZCIsInRleHRFcnJvcnMiLCJzZXRTdGF0ZSIsImhhbmRsZUVycm9ycyIsIm9uRm9jdXMiLCJ0ZXh0SXNGb2N1c2VkIiwic3VnZ2VzdGlvbnNWaXNpYmxlIiwidG91Y2hlZCIsImZldGNoRXhpc3RpbmdUYWdzIiwic3RhdGUiLCJ2YWx1ZSIsInNob3dNb2JpbGVWZXJzaW9uIiwibW9iaWxlVmVyc2lvbkVuYWJsZWQiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsImZvY3VzIiwib25LZXlEb3duIiwic3VnZ2VzdGlvbnMiLCJlIiwia2V5IiwicHJlc2VsZWN0ZWRTdWdnZXN0aW9uIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJleGlzdGluZ1RhZyIsImV4aXN0aW5nVGFncyIsImZpbmQiLCJldCIsIm5hbWUiLCJvblRhZ3NDaGFuZ2VkIiwidGFncyIsImNvbmNhdCIsImFsbG93TmV3IiwiYWRkTmV3VGFnIiwib25OZXdUYWdBZGRlZCIsIm5ld1RhZyIsIm9uU3VnZ2VzdGlvblNlbGVjdGVkIiwidGFnIiwibmV3VGFncyIsImlzTWF4IiwibWF4VGFncyIsImZpbmFsVmFsdWUiLCJvbkJsdXIiLCJvblRleHRDaGFuZ2VkIiwiaXNWYWxpZCIsInRhcmdldCIsInRleHRJc1ZhbGlkIiwiZXJyb3JzIiwiZ2V0RXJyb3JzIiwic2V0SW52YWxpZCIsInNldFZhbGlkIiwidGFnQ2xpY2siLCJvblRhZ0NsaWNrIiwidGFnUmVtb3ZlQ2xpY2siLCJmaWx0ZXIiLCJzdiIsImlkIiwiZmV0Y2hpbmdFeGlzdGluZ1RhZ3MiLCJmZXRjaGVkRXhpc3RpbmdUYWdzIiwiUmVhY3QiLCJoYW5kbGVDbGlja091dHNpZGUiLCJiaW5kIiwiaGFuZGxlTGVhdmVNb2JpbGVDbGljayIsIm9sZFByb3BzIiwidmFsaWRhdG9ycyIsImN1c3RvbVZhbGlkYXRvcnMiLCJyZXF1aXJlZCIsImNvbnRhaW5lclJlZiIsImNvbnRhaW5zIiwiYWRkTmV3T25CbHVyIiwiZ2V0U3VnZ2VzdGlvbnMiLCJleGlzdGluZyIsInMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHJhbnNsYXRpb25zIiwiZ2V0VHJhbnNsYXRpb25zIiwidGV4dFByb3BzIiwiTGVhdmVNb2JpbGVCdXR0b24iLCJzaG93SW5wdXQiLCJCb29sZWFuIiwicmVhZE9ubHkiLCJib2R5IiwidGl0bGUiLCJ0b29sdGlwIiwiZ2V0VmFsaWRhdGlvbkNsYXNzIiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyZW5kZXJUYWciLCJyZWFkb25seUVtcHR5UGxhY2Vob2xkZXIiLCJzaG93U3VnZ2VzdGlvbnMiLCJpc0xvYWRpbmciLCJzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQiLCJzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50Iiwid2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudCIsIm1pbkxldHRlcnNUb0ZldGNoIiwicG9wcGVyUHJvcHMiLCJyZW5kZXJEZWZhdWx0VmFsaWRhdGlvbiIsImxhYmVsIiwicmVuZGVyTGFiZWwiLCJ2YWx1ZU5vdEFkZGVkRXJyb3IiLCJtYXhUYWdzU3VycGFzc2VkRXJyb3IiLCJpIiwic3RhcnRzV2l0aCIsInRpbWVyIiwibG9hZGluZ0RlbGF5TXMiLCJ0aGVuIiwiY2xlYXJUaW1lb3V0IiwiZmlsdGVyZWRUYWdzIiwiZmlsdGVyRXhpc3RpbmdUYWdzIiwidG9Mb3dlckNhc2UiLCJhbGxvd1NhbWVUYWdNdWx0aXBsZVRpbWVzIiwic29tZSIsInQiLCJzbGljZSIsIm1heFN1Z2dlc3Rpb25zIiwidG9TdHJpbmciLCJwIiwib25DbGljayIsImNoaWxkcmVuIiwic2hvd0NoaXBzIiwiQmFzZUlucHV0IiwiZGVmYXVsdFByb3BzIiwiZGlzYWJsZWQiLCJuZXdUYWdOYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJEYXRlIiwiZ2V0VGltZSIsInRleHQiLCJUYWdzIiwid2l0aFRoZW1lQ29udGV4dCIsIndpdGhGb3JtQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBOztBQUNBLElBQUlBLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyxzREFBRCxDQUF4Qjs7QUFDQTtDQUlBOztBQU1PLElBQU1DLHVCQUF1QixxQkFDL0JDLDZFQUQrQjtBQUVsQ0MsUUFBTSxFQUFFO0FBRjBCLEVBQTdCO0FBbURBLElBQU1DLE9BQWI7QUFBQTtBQUFBO0FBQUE7O0FBb0NFLG1CQUFZQyxLQUFaLEVBQThDO0FBQUE7O0FBQUE7O0FBQzVDLGlGQUFNQSxLQUFOO0FBRDRDLFVBSnRDQyxPQUlzQztBQUFBLFVBSHRDQyxjQUdzQztBQUFBLFVBRnRDQyxRQUVzQyxHQUZsQixLQUVrQjs7QUFBQSxVQWdRdENDLG1CQWhRc0MsR0FnUWhCLFVBQUNDLFVBQUQ7QUFBQSxhQUM1QixNQUFLQyxRQUFMLENBQ0U7QUFBQSxlQUFPO0FBQUVELG9CQUFVLEVBQVZBO0FBQUYsU0FBUDtBQUFBLE9BREYsRUFFRTtBQUFBLGVBQU0sTUFBS0UsWUFBTCxFQUFOO0FBQUEsT0FGRixDQUQ0QjtBQUFBLEtBaFFnQjs7QUFBQSxVQXNRdENDLE9BdFFzQyxHQXNRNUIsWUFBTTtBQUN0QixZQUFLRixRQUFMLENBQ0U7QUFBQSxlQUFPO0FBQUVHLHVCQUFhLEVBQUUsSUFBakI7QUFBdUJDLDRCQUFrQixFQUFFLElBQTNDO0FBQWlEQyxpQkFBTyxFQUFFO0FBQTFELFNBQVA7QUFBQSxPQURGLEVBRUU7QUFBQSxlQUFNLE1BQUtKLFlBQUwsRUFBTjtBQUFBLE9BRkY7O0FBSUEsWUFBS0ssaUJBQUwsQ0FBdUIsTUFBS0MsS0FBTCxDQUFXQyxLQUFsQzs7QUFDQSxVQUFNQyxpQkFBaUIsR0FDckIsTUFBS2YsS0FBTCxDQUFXZ0Isb0JBQVgsSUFDQSxNQUFLYixRQURMLEtBRUMsTUFBS1UsS0FBTCxDQUFXSixhQUFYLElBQTRCLE1BQUtJLEtBQUwsQ0FBV0gsa0JBRnhDLENBREY7O0FBSUEsVUFDRSxDQUFDSyxpQkFBRCxJQUNBLE1BQUtmLEtBQUwsQ0FBV2dCLG9CQURYLElBRUEsTUFBS2IsUUFIUCxFQUlFO0FBQ0FjLGtCQUFVLENBQUM7QUFBQTs7QUFBQSwwQ0FBTSxNQUFLaEIsT0FBTCxDQUFhaUIsT0FBbkIsMERBQU0sc0JBQXNCQyxLQUF0QixFQUFOO0FBQUEsU0FBRCxFQUFzQyxHQUF0QyxDQUFWO0FBQ0Q7QUFDRixLQXZSNkM7O0FBQUEsVUF5UnRDQyxTQXpSc0MsR0F5UjFCLFVBQUNDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQXdCLGlCQUFNQyxDQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFFeENBLENBQUMsQ0FBQ0MsR0FBRixLQUFVLE9BQVYsS0FDQyxNQUFLVixLQUFMLENBQVdDLEtBQVgsS0FBcUIsRUFBckIsSUFDQyxNQUFLRCxLQUFMLENBQVdXLHFCQUFYLEtBQXFDQyxTQUZ2QyxLQUdBLE1BQUtaLEtBQUwsQ0FBV1IsVUFBWCxDQUFzQnFCLE1BQXRCLEtBQWlDLENBTE87QUFBQTtBQUFBO0FBQUE7O0FBT3hDSixxQkFBQyxDQUFDSyxjQUFGO0FBQ0FMLHFCQUFDLENBQUNNLGVBQUY7QUFDTUMsK0JBVGtDLEdBVXRDLE1BQUs3QixLQUFMLENBQVc4QixZQUFYLElBQ0EsTUFBSzlCLEtBQUwsQ0FBVzhCLFlBQVgsQ0FBd0JDLElBQXhCLENBQTZCLFVBQUFDLEVBQUU7QUFBQSw2QkFBSUEsRUFBRSxDQUFDQyxJQUFILEtBQVksTUFBS3BCLEtBQUwsQ0FBV0MsS0FBM0I7QUFBQSxxQkFBL0IsQ0FYc0M7O0FBQUEsMEJBWXBDLE1BQUtELEtBQUwsQ0FBV1cscUJBQVgsS0FBcUNDLFNBWkQ7QUFBQTtBQUFBO0FBQUE7O0FBYXRDLDBCQUFLekIsS0FBTCxDQUFXa0MsYUFBWCxDQUNFLE1BQUtsQyxLQUFMLENBQVdtQyxJQUFYLENBQWdCQyxNQUFoQixDQUF1QmYsV0FBVyxDQUFDLE1BQUtSLEtBQUwsQ0FBV1cscUJBQVosQ0FBbEMsQ0FERjs7QUFHQSwwQkFBS2xCLFFBQUwsQ0FBYztBQUFFUSwyQkFBSyxFQUFFLEVBQVQ7QUFBYVUsMkNBQXFCLEVBQUVDO0FBQXBDLHFCQUFkLEVBQStELFlBQU07QUFDbkUsNEJBQUtiLGlCQUFMOztBQUNBLDRCQUFLTCxZQUFMO0FBQ0QscUJBSEQ7O0FBaEJzQztBQUFBOztBQUFBO0FBQUEseUJBb0I3QnNCLFdBcEI2QjtBQUFBO0FBQUE7QUFBQTs7QUFxQnRDLDBCQUFLN0IsS0FBTCxDQUFXa0MsYUFBWCxDQUF5QixNQUFLbEMsS0FBTCxDQUFXbUMsSUFBWCxDQUFnQkMsTUFBaEIsQ0FBdUJQLFdBQXZCLENBQXpCOztBQUNBLDBCQUFLdkIsUUFBTCxDQUFjO0FBQUVRLDJCQUFLLEVBQUU7QUFBVCxxQkFBZCxFQUE2QixZQUFNO0FBQ2pDLDRCQUFLRixpQkFBTDs7QUFDQSw0QkFBS0wsWUFBTDtBQUNELHFCQUhEOztBQXRCc0M7QUFBQTs7QUFBQTtBQUFBLHlCQTBCN0IsTUFBS1AsS0FBTCxDQUFXcUMsUUExQmtCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsMkJBMkJoQyxNQUFLQyxTQUFMLEVBM0JnQzs7QUFBQTtBQTRCdEMsMEJBQUsvQixZQUFMOztBQTVCc0M7QUErQjFDLHdCQUFJYyxXQUFXLENBQUNLLE1BQVosR0FBcUIsQ0FBckIsSUFBMEIsTUFBS2IsS0FBTCxDQUFXSCxrQkFBekMsRUFBNkQ7QUFDM0QsMEJBQUlZLENBQUMsQ0FBQ0MsR0FBRixLQUFVLFNBQWQsRUFBeUI7QUFDakJDLDZDQURpQixHQUVyQixNQUFLWCxLQUFMLENBQVdXLHFCQUFYLEtBQXFDQyxTQUFyQyxHQUNJSixXQUFXLENBQUNLLE1BQVosR0FBcUIsQ0FEekIsR0FFSSxNQUFLYixLQUFMLENBQVdXLHFCQUFYLEtBQXFDLENBQXJDLEdBQ0FILFdBQVcsQ0FBQ0ssTUFBWixHQUFxQixDQURyQixHQUVBLE1BQUtiLEtBQUwsQ0FBV1cscUJBQVgsR0FBbUMsQ0FObEI7O0FBT3ZCLDhCQUFLbEIsUUFBTCxDQUFjO0FBQUVrQiwrQ0FBcUIsRUFBckJBO0FBQUYseUJBQWQ7QUFDRCx1QkFSRCxNQVFPLElBQUlGLENBQUMsQ0FBQ0MsR0FBRixLQUFVLFdBQWQsRUFBMkI7QUFDMUJDLDhDQUQwQixHQUU5QixNQUFLWCxLQUFMLENBQVdXLHFCQUFYLEtBQXFDQyxTQUFyQyxHQUNJLENBREosR0FFSSxNQUFLWixLQUFMLENBQVdXLHFCQUFYLEtBQXFDSCxXQUFXLENBQUNLLE1BQVosR0FBcUIsQ0FBMUQsR0FDQSxDQURBLEdBRUEsTUFBS2IsS0FBTCxDQUFXVyxxQkFBWCxHQUFtQyxDQU5UOztBQU9oQyw4QkFBS2xCLFFBQUwsQ0FBYztBQUFFa0IsK0NBQXFCLEVBQXJCQTtBQUFGLHlCQUFkO0FBQ0QsdUJBUk0sTUFRQTtBQUNMLDhCQUFLbEIsUUFBTCxDQUFjO0FBQUVrQiwrQ0FBcUIsRUFBRUM7QUFBekIseUJBQWQ7QUFDRDtBQUNGOztBQW5EeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBelIwQjs7QUFBQSxVQStVdENhLFNBL1VzQztBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQStVMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRyxNQUFLdEMsS0FBTCxDQUFXdUMsYUFBWCxDQUF5QixNQUFLMUIsS0FBTCxDQUFXQyxLQUFwQyxDQURIOztBQUFBO0FBQ1owQixvQkFEWTs7QUFFbEIsa0JBQUlBLE1BQUosRUFBWTtBQUNWLHNCQUFLeEMsS0FBTCxDQUFXa0MsYUFBWCxDQUNFLE1BQUtsQyxLQUFMLENBQVdtQyxJQUFYLEdBQWtCLE1BQUtuQyxLQUFMLENBQVdtQyxJQUFYLENBQWdCQyxNQUFoQixDQUF1QkksTUFBdkIsQ0FBbEIsR0FBbUQsQ0FBQ0EsTUFBRCxDQURyRDtBQUdEOztBQUNELG9CQUFLbEMsUUFBTCxDQUFjO0FBQUVRLHFCQUFLLEVBQUUsRUFBVDtBQUFhVCwwQkFBVSxFQUFFO0FBQXpCLGVBQWQsRUFBNkMsWUFBTTtBQUNqRCxzQkFBS08saUJBQUw7O0FBQ0Esc0JBQUtMLFlBQUw7QUFDRCxlQUhEOztBQVBrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQS9VMEI7O0FBQUEsVUE0VnRDa0Msb0JBNVZzQyxHQTRWZixVQUFDQyxHQUFELEVBQWM7QUFDM0MsVUFBTUMsT0FBTyxHQUFHLE1BQUszQyxLQUFMLENBQVdtQyxJQUFYLENBQWdCQyxNQUFoQixDQUF1Qk0sR0FBdkIsQ0FBaEI7O0FBQ0EsWUFBSzFDLEtBQUwsQ0FBV2tDLGFBQVgsQ0FBeUJTLE9BQXpCOztBQUNBLFVBQU1DLEtBQUssR0FBR0QsT0FBTyxDQUFDakIsTUFBUixLQUFtQixNQUFLMUIsS0FBTCxDQUFXNkMsT0FBNUM7QUFDQSxVQUFNQyxVQUFVLEdBQUcsQ0FBQyxNQUFLOUMsS0FBTCxDQUFXcUMsUUFBWixJQUF3QixDQUFDTyxLQUF6QixHQUFpQyxNQUFLL0IsS0FBTCxDQUFXQyxLQUE1QyxHQUFvRCxFQUF2RTs7QUFDQSxZQUFLUixRQUFMLENBQ0U7QUFDRVEsYUFBSyxFQUFFZ0MsVUFEVDtBQUVFcEMsMEJBQWtCLEVBQUVrQyxLQUFLLEdBQUcsS0FBSCxHQUFXLE1BQUsvQixLQUFMLENBQVdILGtCQUZqRDtBQUdFYyw2QkFBcUIsRUFBRUMsU0FIekI7QUFJRXBCLGtCQUFVLEVBQUU7QUFKZCxPQURGLEVBT0UsWUFBTTtBQUNKLFlBQ0UsQ0FBQyxNQUFLTCxLQUFMLENBQVc2QyxPQUFaLElBQ0EsTUFBSzdDLEtBQUwsQ0FBV21DLElBQVgsQ0FBZ0JULE1BQWhCLEdBQXlCLENBQXpCLEdBQTZCLE1BQUsxQixLQUFMLENBQVc2QyxPQUYxQyxFQUdFO0FBQ0EsZ0JBQUtqQyxpQkFBTCxDQUF1QmtDLFVBQXZCO0FBQ0Q7O0FBQ0QsY0FBS3ZDLFlBQUw7QUFDRCxPQWZIO0FBaUJELEtBbFg2Qzs7QUFBQSxVQW9YdEN3QyxNQXBYc0M7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFvWDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZixvQkFBS3pDLFFBQUwsQ0FDRTtBQUNFRyw2QkFBYSxFQUFFLEtBRGpCO0FBRUVlLHFDQUFxQixFQUFFQztBQUZ6QixlQURGLEVBS0U7QUFBQSx1QkFBTSxNQUFLbEIsWUFBTCxFQUFOO0FBQUEsZUFMRjs7QUFEZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXBYNkI7O0FBQUEsVUE4WHRDeUMsYUE5WHNDLEdBOFh0QixVQUN0QjFCLENBRHNCLEVBRXRCMkIsT0FGc0IsRUFHbkI7QUFDSCxVQUFNbkMsS0FBSyxHQUFHUSxDQUFDLENBQUM0QixNQUFGLENBQVNwQyxLQUF2Qjs7QUFDQSxZQUFLUixRQUFMLENBQ0U7QUFBQSxlQUFPO0FBQ0xRLGVBQUssRUFBTEEsS0FESztBQUVMbUMsaUJBQU8sRUFBRUEsT0FGSjtBQUdMRSxxQkFBVyxFQUFFRixPQUhSO0FBSUx2Qyw0QkFBa0IsRUFBRTtBQUpmLFNBQVA7QUFBQSxPQURGLEVBT0U7QUFBQSxlQUFNLE1BQUtILFlBQUwsRUFBTjtBQUFBLE9BUEY7O0FBU0EsWUFBS0ssaUJBQUwsQ0FBdUJVLENBQUMsQ0FBQzRCLE1BQUYsQ0FBU3BDLEtBQWhDO0FBQ0QsS0E3WTZDOztBQUFBLFVBK1l0Q1AsWUEvWXNDLEdBK1l2QixZQUFtQztBQUFBLFVBQWxDNEIsSUFBa0MsdUVBQXBCLE1BQUtuQyxLQUFMLENBQVdtQyxJQUFTOztBQUN4RCxVQUFJaUIsTUFBTSxHQUFHLE1BQUtDLFNBQUwsQ0FBZWxCLElBQWYsQ0FBYjs7QUFDQSxVQUFJaUIsTUFBTSxDQUFDMUIsTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQixjQUFLNEIsVUFBTCxDQUFnQkYsTUFBaEI7QUFDRCxPQUZELE1BRU87QUFDTCxjQUFLRyxRQUFMO0FBQ0Q7QUFDRixLQXRaNkM7O0FBQUEsVUFnZ0J0Q0MsUUFoZ0JzQyxHQWdnQjNCLFVBQUNkLEdBQUQ7QUFBQSxhQUFjLFlBQU07QUFDckMsY0FBSzFDLEtBQUwsQ0FBV3lELFVBQVgsSUFBeUIsTUFBS3pELEtBQUwsQ0FBV3lELFVBQVgsQ0FBc0JmLEdBQXRCLENBQXpCO0FBQ0QsT0FGa0I7QUFBQSxLQWhnQjJCOztBQUFBLFVBb2dCdENnQixjQXBnQnNDLEdBb2dCckIsVUFBQ2hCLEdBQUQ7QUFBQSxhQUFjLFVBQUNwQixDQUFELEVBQXNDO0FBQzNFQSxTQUFDLENBQUNNLGVBQUY7O0FBQ0EsWUFBTWUsT0FBTyxHQUFHLE1BQUszQyxLQUFMLENBQVdtQyxJQUFYLENBQWdCd0IsTUFBaEIsQ0FBdUIsVUFBQUMsRUFBRTtBQUFBLGlCQUFJQSxFQUFFLENBQUNDLEVBQUgsS0FBVW5CLEdBQUcsQ0FBQ21CLEVBQWxCO0FBQUEsU0FBekIsQ0FBaEI7QUFDQTs7Ozs7Ozs7QUFNQSxjQUFLN0QsS0FBTCxDQUFXa0MsYUFBWCxJQUE0QixNQUFLbEMsS0FBTCxDQUFXa0MsYUFBWCxDQUF5QlMsT0FBekIsQ0FBNUI7O0FBQ0EsY0FBS3BDLFlBQUwsQ0FBa0JvQyxPQUFsQixFQVYyRSxDQVczRTs7QUFDRCxPQVp3QjtBQUFBLEtBcGdCcUI7O0FBRTVDLFVBQUs5QixLQUFMLHFCQUNLLE1BQUtBLEtBRFY7QUFFRVIsZ0JBQVUsRUFBRSxFQUZkO0FBR0VJLG1CQUFhLEVBQUUsS0FIakI7QUFJRUMsd0JBQWtCLEVBQUUsS0FKdEI7QUFLRW9ELDBCQUFvQixFQUFFLEtBTHhCO0FBTUVYLGlCQUFXLEVBQUUsS0FOZjtBQU9FWSx5QkFBbUIsRUFBRTtBQVB2QjtBQVNBLFVBQUs5RCxPQUFMLEdBQWUrRCwrQ0FBQSxFQUFmO0FBQ0EsVUFBSzlELGNBQUwsR0FBc0I4RCwrQ0FBQSxFQUF0QjtBQUNBLFVBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QiwrQkFBMUI7QUFDQSxVQUFLQyxzQkFBTCxHQUE4QixNQUFLQSxzQkFBTCxDQUE0QkQsSUFBNUIsK0JBQTlCOztBQUNBLFFBQUlsRSxLQUFLLENBQUNnQixvQkFBVixFQUFnQztBQUFBOztBQUM5QixZQUFLYixRQUFMLGVBQWdCUixtQkFBTyxDQUFDLHVFQUFELENBQXZCLDZDQUFnQixTQUFnQ1EsUUFBaEQ7QUFDRDs7QUFqQjJDO0FBa0I3Qzs7QUF0REg7QUFBQTtBQUFBLDRCQXdEaUI7QUFDYixVQUFJLEtBQUtGLE9BQUwsQ0FBYWlCLE9BQWpCLEVBQTBCO0FBQ3hCLGFBQUtqQixPQUFMLENBQWFpQixPQUFiLENBQXFCQyxLQUFyQjtBQUNEO0FBQ0Y7QUE1REg7QUFBQTtBQUFBLHVDQThENEJpRCxRQTlENUIsRUE4RGlFO0FBQzdELFVBQ0VBLFFBQVEsQ0FBQ2pDLElBQVQsS0FBa0IsS0FBS25DLEtBQUwsQ0FBV21DLElBQTdCLElBQ0FpQyxRQUFRLENBQUNDLFVBQVQsS0FBd0IsS0FBS3JFLEtBQUwsQ0FBV3FFLFVBRG5DLElBRUFELFFBQVEsQ0FBQ0UsZ0JBQVQsS0FBOEIsS0FBS3RFLEtBQUwsQ0FBV3NFLGdCQUZ6QyxJQUdBRixRQUFRLENBQUNHLFFBQVQsS0FBc0IsS0FBS3ZFLEtBQUwsQ0FBV3VFLFFBSm5DLEVBS0U7QUFDQSxhQUFLaEUsWUFBTCxDQUFrQixLQUFLUCxLQUFMLENBQVdtQyxJQUE3QjtBQUNEO0FBQ0Y7QUF2RUg7QUFBQTtBQUFBLDZDQXlFa0M7QUFDOUIsV0FBSzdCLFFBQUwsQ0FBYztBQUNaRyxxQkFBYSxFQUFFLEtBREg7QUFFWkMsMEJBQWtCLEVBQUUsS0FGUjtBQUdaYyw2QkFBcUIsRUFBRUM7QUFIWCxPQUFkO0FBS0Q7QUEvRUg7QUFBQTtBQUFBLHVDQWlGNEJILENBakY1QixFQWlGMkM7QUFBQTs7QUFDdkMsVUFDRSxDQUFDLEtBQUtrRCxZQUFMLENBQWtCdEQsT0FBbkIsSUFDQSxLQUFLc0QsWUFBTCxDQUFrQnRELE9BQWxCLENBQTBCdUQsUUFBMUIsQ0FBbUNuRCxDQUFDLENBQUM0QixNQUFyQyxDQURBLElBRUEsQ0FBQyxLQUFLaEQsY0FBTCxDQUFvQmdCLE9BRnJCLElBR0EsS0FBS2hCLGNBQUwsQ0FBb0JnQixPQUFwQixDQUE0QnVELFFBQTVCLENBQXFDbkQsQ0FBQyxDQUFDNEIsTUFBdkMsQ0FKRixFQUtFO0FBQ0E7QUFDRDs7QUFDRCxXQUFLNUMsUUFBTCxDQUFjO0FBQ1pJLDBCQUFrQixFQUFFLEtBRFI7QUFFWmMsNkJBQXFCLEVBQUVDO0FBRlgsT0FBZDs7QUFJQSxVQUFJLEtBQUt6QixLQUFMLENBQVcwRSxZQUFYLElBQTJCLEtBQUs3RCxLQUFMLENBQVdDLEtBQTFDLEVBQWlEO0FBQy9DLFlBQU1PLFdBQVcsR0FBRyxLQUFLc0QsY0FBTCxFQUFwQjtBQUNBLFlBQU1DLFFBQVEsR0FBR3ZELFdBQVcsQ0FBQ1UsSUFBWixDQUFpQixVQUFBOEMsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUM1QyxJQUFGLEtBQVcsTUFBSSxDQUFDcEIsS0FBTCxDQUFXQyxLQUExQjtBQUFBLFNBQWxCLENBQWpCOztBQUNBLFlBQUk4RCxRQUFKLEVBQWM7QUFDWixlQUFLbkMsb0JBQUwsQ0FBMEJtQyxRQUExQjtBQUNELFNBRkQsTUFFTyxJQUFJLEtBQUs1RSxLQUFMLENBQVdxQyxRQUFmLEVBQXlCO0FBQzlCLGVBQUtDLFNBQUw7QUFDRDtBQUNGO0FBQUM7Ozs7QUFHSDtBQXpHSDtBQUFBO0FBQUEsd0NBMkc2QjtBQUN6QndDLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBS2Qsa0JBQTVDO0FBQ0FhLGNBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsRUFBd0MsS0FBS2Qsa0JBQTdDO0FBQ0Q7QUE5R0g7QUFBQTtBQUFBLDJDQWdIZ0M7QUFDNUJhLGNBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMEMsS0FBS2Ysa0JBQS9DO0FBQ0FhLGNBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsWUFBN0IsRUFBMkMsS0FBS2Ysa0JBQWhEO0FBQ0Q7QUFuSEg7QUFBQTtBQUFBLDZCQXFIa0I7QUFBQTs7QUFDZCxVQUFNZ0IsWUFBWSxHQUFHLEtBQUtDLGVBQUwsQ0FBcUJ0Rix1QkFBckIsQ0FBckI7QUFDQSxVQUFNdUYsU0FBUyxHQUFHLEtBQUtuRixLQUFMLENBQVdtRixTQUFYLEdBQXVCLEtBQUtuRixLQUFMLENBQVdtRixTQUFsQyxHQUE4QyxFQUFoRTtBQUNBLFVBQU05RCxXQUFXLEdBQUcsS0FBS3NELGNBQUwsRUFBcEI7QUFDQSxVQUFNNUQsaUJBQWlCLEdBQ3JCLEtBQUtmLEtBQUwsQ0FBV2dCLG9CQUFYLElBQ0EsS0FBS2IsUUFETCxLQUVDLEtBQUtVLEtBQUwsQ0FBV0osYUFBWCxJQUE0QixLQUFLSSxLQUFMLENBQVdILGtCQUZ4QyxDQURGO0FBSUEsVUFBTTBFLGlCQUFpQixHQUFHckUsaUJBQWlCLEdBQ3pDLG9EQUFDLHFEQUFEO0FBQ0UsaUJBQVMsRUFBQyxrREFEWjtBQUVFLGVBQU8sRUFBRSxLQUFLb0Qsc0JBRmhCO0FBR0UsZ0JBQVEsRUFBRSxJQUhaO0FBSUUsbUJBQVcsRUFBRTtBQUpmLFNBTUUsb0RBQUMsbUdBQUQsT0FORixDQUR5QyxHQVV6QzFDLFNBVkY7QUFZQSxVQUFNNEQsU0FBUyxHQUFHQyxPQUFPLENBQ3ZCLENBQUMsQ0FBQyxLQUFLdEYsS0FBTCxDQUFXNkMsT0FBWixJQUNDLEtBQUs3QyxLQUFMLENBQVc2QyxPQUFYLElBQXNCLEtBQUs3QyxLQUFMLENBQVdtQyxJQUFYLElBQW1CLEtBQUtuQyxLQUFMLENBQVdtQyxJQUFYLENBQWdCVCxNQUF6RCxDQURGLEtBRUUsQ0FBQyxLQUFLMUIsS0FBTCxDQUFXdUYsUUFIUyxDQUF6QjtBQUtBLGFBQ0Usb0RBQUMseURBQUQ7QUFBUSxpQkFBUyxFQUFFVCxRQUFRLENBQUNVLElBQTVCO0FBQWtDLHFCQUFhLEVBQUUsQ0FBQ3pFO0FBQWxELFNBQ0Usb0RBQUMsaUVBQUQ7QUFBWSxhQUFLLEVBQUUsS0FBS2YsS0FBTCxDQUFXeUYsS0FBOUI7QUFBcUMsZUFBTyxFQUFFLEtBQUt6RixLQUFMLENBQVcwRjtBQUF6RCxTQUNFLHdFQUNPLEtBQUsxRixLQUFMLENBQVc2RCxFQUFYLElBQWlCO0FBQ3BCQSxVQUFFLEVBQUUsS0FBSzdELEtBQUwsQ0FBVzZEO0FBREssT0FEeEI7QUFJRSxpQkFBUyxFQUFFbkUsVUFBVSxDQUNuQix3QkFEbUIsRUFFbkIsS0FBS2lHLGtCQUFMLEVBRm1CLEVBR25CLEtBQUszRixLQUFMLENBQVc0RixTQUhRLEVBSW5CO0FBQ0Usa0NBQXdCLEtBQUs1RixLQUFMLENBQVd1RixRQURyQztBQUVFLHdDQUNFLEtBQUt2RixLQUFMLENBQVdtRixTQUFYLElBQXdCLEtBQUtuRixLQUFMLENBQVdtRixTQUFYLENBQXFCVSxXQUhqRDtBQUlFLGdDQUFzQjlFO0FBSnhCLFNBSm1CLENBSnZCO0FBZUUsV0FBRyxFQUFFLEtBQUt5RDtBQWZaLFVBaUJHekQsaUJBQWlCLElBQ2hCO0FBQUssaUJBQVMsRUFBQztBQUFmLFFBbEJKLEVBb0JFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0csQ0FBQ3NFLFNBQUQsSUFBY3RFLGlCQUFkLElBQW1DcUUsaUJBRHRDLEVBRUcsS0FBS3BGLEtBQUwsQ0FBV21DLElBQVgsSUFBbUIsS0FBS25DLEtBQUwsQ0FBV21DLElBQVgsQ0FBZ0JULE1BQWhCLEdBQXlCLENBQTVDLEdBQ0M7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRyxLQUFLMUIsS0FBTCxDQUFXbUMsSUFBWCxDQUFnQjJELEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLGVBQ25CLE1BQUksQ0FBQ0MsU0FBTCxDQUFlRixJQUFmLEVBQXFCQyxLQUFyQixDQURtQjtBQUFBLE9BQXBCLENBREgsQ0FERCxHQU9DLEtBQUtoRyxLQUFMLENBQVd1RixRQUFYLElBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHLEtBQUt2RixLQUFMLENBQVdrRyx3QkFEZCxDQURGLENBVk4sQ0FwQkYsRUFzQ0diLFNBQVMsSUFDUjtBQUNFLGlCQUFTLEVBQ1AsZ0NBQ0MsS0FBS3JGLEtBQUwsQ0FBV3VGLFFBQVgsR0FBc0IsU0FBdEIsR0FBa0MsRUFEbkM7QUFGSixTQU1FLG9EQUFDLCtDQUFEO0FBQ0UsdUJBQWUsRUFBRTtBQURuQixTQUVNSixTQUZOLEVBR08sS0FBS25GLEtBQUwsQ0FBVzZELEVBQVgsSUFBaUI7QUFDcEJBLFVBQUUsRUFBRSxLQUFLN0QsS0FBTCxDQUFXNkQsRUFBWCxHQUFnQjtBQURBLE9BSHhCO0FBTUUsV0FBRyxFQUFFLEtBQUs1RCxPQU5aO0FBT0UsZ0JBQVEsRUFDTixLQUFLRCxLQUFMLENBQVdtQyxJQUFYLENBQWdCVCxNQUFoQixHQUF5QixDQUF6QixHQUE2QixLQUE3QixHQUFxQyxLQUFLMUIsS0FBTCxDQUFXdUUsUUFScEQ7QUFVRSxpQkFBUyxFQUNQLDZCQUNDWSxTQUFTLENBQUNTLFNBQVYsR0FBc0JULFNBQVMsQ0FBQ1MsU0FBaEMsR0FBNEMsRUFEN0MsQ0FYSjtBQWNFLGlCQUFTLEVBQUUsS0FBS3hFLFNBQUwsQ0FBZUMsV0FBZixDQWRiO0FBZUUsdUJBQWUsRUFBRSxLQUFLakIsbUJBZnhCO0FBZ0JFLGdCQUFRLEVBQUUsS0FBSzRDLGFBaEJqQjtBQWlCRSxlQUFPLEVBQUUsS0FBS3hDLE9BakJoQjtBQWtCRSxjQUFNLEVBQUUsS0FBS3VDLE1BbEJmO0FBbUJFLGFBQUssRUFBRSxLQUFLbEMsS0FBTCxDQUFXQyxLQW5CcEI7QUFvQkUsZ0JBQVEsRUFBRSxLQUFLZCxLQUFMLENBQVd1RixRQXBCdkI7QUFxQkUsc0JBQWMsRUFBRSxLQXJCbEI7QUFzQkUscUJBQWEsRUFBRSxJQXRCakI7QUF1QkUsa0JBQVUsRUFBRSxLQUFLdkYsS0FBTCxDQUFXcUUsVUF2QnpCO0FBd0JFLHdCQUFnQixFQUFFLEtBQUtyRSxLQUFMLENBQVdzRSxnQkF4Qi9CO0FBeUJFLGNBQU0sRUFBRWM7QUF6QlYsU0FORixFQWlDRyxLQUFLdkUsS0FBTCxDQUFXSCxrQkFBWCxJQUFpQyxLQUFLVixLQUFMLENBQVdtRyxlQUE1QyxJQUNDLG9EQUFDLHNFQUFELGVBQ08sS0FBS25HLEtBQUwsQ0FBVzZELEVBQVgsSUFBaUI7QUFDcEJBLFVBQUUsRUFBRSxLQUFLN0QsS0FBTCxDQUFXNkQsRUFBWCxHQUFnQjtBQURBLE9BRHhCO0FBSUUsZ0JBQVEsRUFBRSxLQUFLM0QsY0FKakI7QUFLRSxnQkFBUSxFQUFFLEtBQUtzRSxZQUFMLENBQWtCdEQsT0FMOUI7QUFNRSxnQkFBUSxFQUFFLEtBQUtsQixLQUFMLENBQVdxQyxRQU52QjtBQU9FLDZCQUFxQixFQUFFLEtBQUt4QixLQUFMLENBQVdXLHFCQVBwQztBQVFFLGVBQU8sRUFDTCxLQUFLWCxLQUFMLENBQVdpRCxvQkFBWCxJQUFtQyxLQUFLOUQsS0FBTCxDQUFXb0csU0FUbEQ7QUFXRSx3QkFBZ0IsRUFBRSxLQUFLcEcsS0FBTCxDQUFXcUcsMkJBWC9CO0FBWUUsaUJBQVMsRUFBRSxLQUFLeEYsS0FBTCxDQUFXSCxrQkFaeEI7QUFhRSxzQkFBYyxFQUFFLEtBQUtWLEtBQUwsQ0FBV3NHLHlCQWI3QjtBQWNFLG9DQUE0QixFQUMxQixLQUFLdEcsS0FBTCxDQUFXdUcsNEJBZmY7QUFpQkUsNkJBQXFCLEVBQ25CLEtBQUsxRixLQUFMLENBQVdDLEtBQVgsQ0FBaUJZLE1BQWpCLEdBQTBCLEtBQUsxQixLQUFMLENBQVd3RyxpQkFsQnpDO0FBb0JFLFlBQUksRUFBRW5GLFdBcEJSO0FBcUJFLGtCQUFVLEVBQUUsS0FBS29CLG9CQXJCbkI7QUFzQkUsYUFBSyxFQUFFLEtBQUs1QixLQUFMLENBQVdDLEtBdEJwQjtBQXVCRSwwQkFBa0IsRUFDaEIsS0FBS2QsS0FBTCxDQUFXcUMsUUFBWCxJQUNBLEtBQUt4QixLQUFMLENBQVdDLEtBQVgsS0FBcUIsRUFEckIsS0FFQyxDQUFDLEtBQUtkLEtBQUwsQ0FBVzhCLFlBQVosSUFDQyxDQUFDLEtBQUs5QixLQUFMLENBQVc4QixZQUFYLENBQXdCQyxJQUF4QixDQUNDLFVBQUFULENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxDQUFDVyxJQUFGLEtBQVcsTUFBSSxDQUFDcEIsS0FBTCxDQUFXQyxLQUExQjtBQUFBLFNBREYsQ0FISCxNQU1DLENBQUMsS0FBS0QsS0FBTCxDQUFXa0QsbUJBQVosSUFDQyxDQUFDLEtBQUtsRCxLQUFMLENBQVdrRCxtQkFBWCxDQUErQmhDLElBQS9CLENBQ0MsVUFBQVQsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNXLElBQUYsS0FBVyxNQUFJLENBQUNwQixLQUFMLENBQVdDLEtBQTFCO0FBQUEsU0FERixDQVBILEtBVUEsS0FBS0QsS0FBTCxDQUFXc0MsV0FWWCxJQVdFLG9EQUFDLHFEQUFELGVBQ08sS0FBS25ELEtBQUwsQ0FBVzZELEVBQVgsSUFBaUI7QUFDcEJBLFlBQUUsRUFBRSxLQUFLN0QsS0FBTCxDQUFXNkQsRUFBWCxHQUFnQjtBQURBLFNBRHhCO0FBSUUsbUJBQVMsRUFBQyw0Q0FKWjtBQUtFLGtCQUFRLEVBQUUsSUFMWjtBQU1FLGlCQUFPLEVBQUUsS0FBS3ZCO0FBTmhCLFlBUUcyQyxZQUFZLENBQUNuRixNQVJoQixTQVEwQixLQUFLZSxLQUFMLENBQVdDLEtBUnJDLE9BbkNOO0FBK0NFLG1CQUFXLEVBQUUsS0FBS2QsS0FBTCxDQUFXeUc7QUEvQzFCLFNBbENKLENBdkNKLEVBNkhHLEtBQUtDLHVCQUFMLEVBN0hILEVBOEhHLEtBQUsxRyxLQUFMLENBQVcyRyxLQUFYLElBQ0M7QUFDRSxpQkFBUyxFQUNQLEtBQUs5RixLQUFMLENBQVdDLEtBQVgsS0FBcUIsRUFBckIsSUFDQSxLQUFLRCxLQUFMLENBQVdKLGFBRFgsSUFFQSxLQUFLVCxLQUFMLENBQVd1RixRQUZYLElBR0EsS0FBS3ZGLEtBQUwsQ0FBV21DLElBQVgsQ0FBZ0JULE1BQWhCLElBQTBCLEtBQUsxQixLQUFMLENBQVc2QyxPQUhyQyxJQUlBOUIsaUJBSkEsR0FLSSxnQkFMSixHQU1JO0FBUlIsU0FXRyxLQUFLNkYsV0FBTCxFQVhILENBL0hKLENBREYsQ0FERixDQURGO0FBb0pEO0FBbFNIO0FBQUE7QUFBQSw4QkE0Ym9CekUsSUE1YnBCLEVBNGJpQztBQUM3QixVQUFJaUIsTUFBTSxHQUFHLEVBQWI7O0FBQ0EsVUFBSWpCLElBQUksQ0FBQ1QsTUFBTCxHQUFjLEtBQUsxQixLQUFMLENBQVc2QyxPQUE3QixFQUFzQztBQUNwQ08sY0FBTSxHQUFHQSxNQUFNLENBQUNoQixNQUFQLENBQWMsS0FBS3ZCLEtBQUwsQ0FBV1IsVUFBekIsQ0FBVDtBQUNEOztBQUNELFVBQUksS0FBS1EsS0FBTCxDQUFXQyxLQUFYLEtBQXFCLEVBQXJCLElBQTJCcUIsSUFBSSxDQUFDVCxNQUFMLEtBQWdCLENBQTNDLElBQWdELEtBQUsxQixLQUFMLENBQVd1RSxRQUEvRCxFQUF5RTtBQUN2RW5CLGNBQU0sR0FBR0EsTUFBTSxDQUFDaEIsTUFBUCxDQUNQLEtBQUs4QyxlQUFMLENBQXFCLEtBQUtsRixLQUFMLENBQVdpRixZQUFoQyxFQUE4Q1YsUUFEdkMsQ0FBVDtBQUdEOztBQUNELFVBQUksS0FBSzFELEtBQUwsQ0FBV0MsS0FBWCxJQUFvQixLQUFLZCxLQUFMLENBQVdxQyxRQUEvQixJQUEyQyxDQUFDLEtBQUt4QixLQUFMLENBQVdKLGFBQTNELEVBQTBFO0FBQ3hFMkMsY0FBTSxHQUFHQSxNQUFNLENBQUNoQixNQUFQLENBQWMsS0FBS3BDLEtBQUwsQ0FBVzZHLGtCQUF6QixDQUFUO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFLN0csS0FBTCxDQUFXNkMsT0FBWCxJQUFzQixLQUFLN0MsS0FBTCxDQUFXbUMsSUFBWCxJQUFtQixLQUFLbkMsS0FBTCxDQUFXbUMsSUFBWCxDQUFnQlQsTUFBekQsQ0FBSixFQUFzRTtBQUNwRTBCLGNBQU0sR0FBR0EsTUFBTSxDQUFDaEIsTUFBUCxDQUFjLEtBQUtwQyxLQUFMLENBQVc4RyxxQkFBekIsQ0FBVDtBQUNEOztBQUNELGFBQU8xRCxNQUFNLENBQUNPLE1BQVAsQ0FBYyxVQUFBb0QsQ0FBQztBQUFBLGVBQUlBLENBQUo7QUFBQSxPQUFmLENBQVA7QUFDRDtBQTdjSDtBQUFBO0FBQUEsd0NBK2NxRDtBQUFBOztBQUFBLFVBQXpCQyxVQUF5Qix1RUFBSixFQUFJOztBQUNqRCxVQUNFLEtBQUtoSCxLQUFMLENBQVdZLGlCQUFYLElBQ0FvRyxVQUFVLENBQUN0RixNQUFYLElBQXFCLEtBQUsxQixLQUFMLENBQVd3RyxpQkFGbEMsRUFHRTtBQUNBLFlBQU1TLEtBQUssR0FBR2hHLFVBQVUsQ0FDdEI7QUFBQSxpQkFBTSxNQUFJLENBQUNYLFFBQUwsQ0FBYztBQUFBLG1CQUFPO0FBQUV3RCxrQ0FBb0IsRUFBRTtBQUF4QixhQUFQO0FBQUEsV0FBZCxDQUFOO0FBQUEsU0FEc0IsRUFFdEIsS0FBSzlELEtBQUwsQ0FBV2tILGNBRlcsQ0FBeEI7QUFJQSxhQUFLbEgsS0FBTCxDQUFXWSxpQkFBWCxDQUE2Qm9HLFVBQTdCLEVBQXlDRyxJQUF6QyxDQUE4QyxVQUFBcEQsbUJBQW1CLEVBQUk7QUFDbkVxRCxzQkFBWSxDQUFDSCxLQUFELENBQVo7O0FBQ0EsZ0JBQUksQ0FBQzNHLFFBQUwsQ0FBYztBQUFBLG1CQUFPO0FBQ25CeUQsaUNBQW1CLEVBQW5CQSxtQkFEbUI7QUFFbkJELGtDQUFvQixFQUFFO0FBRkgsYUFBUDtBQUFBLFdBQWQ7QUFJRCxTQU5EO0FBT0Q7QUFDRjtBQWhlSDtBQUFBO0FBQUEscUNBa2UyQjtBQUFBOztBQUN2QixVQUFNaEMsWUFBbUIsR0FBRyxHQUN6Qk0sTUFEeUIsQ0FDbEIsS0FBS3BDLEtBQUwsQ0FBVzhCLFlBQVgsR0FBMEIsS0FBSzlCLEtBQUwsQ0FBVzhCLFlBQXJDLEdBQW9ELEVBRGxDLEVBRXpCTSxNQUZ5QixDQUd4QixLQUFLdkIsS0FBTCxDQUFXa0QsbUJBQVgsR0FBaUMsS0FBS2xELEtBQUwsQ0FBV2tELG1CQUE1QyxHQUFrRSxFQUgxQyxDQUE1QjtBQUtBLFVBQU1zRCxZQUFZLEdBQUcsS0FBS3JILEtBQUwsQ0FBV3NILGtCQUFYLENBQ25CLEtBQUt6RyxLQUFMLENBQVdDLEtBQVgsR0FBbUIsS0FBS0QsS0FBTCxDQUFXQyxLQUFYLENBQWlCeUcsV0FBakIsRUFBbkIsR0FBb0QsRUFEakMsRUFFbkJ6RixZQUZtQixDQUFyQjtBQUlBLFVBQUlULFdBQVcsR0FBR2dHLFlBQVksQ0FDM0IxRCxNQURlLENBRWQsVUFBQWpCLEdBQUc7QUFBQSxlQUNELE1BQUksQ0FBQzFDLEtBQUwsQ0FBV3dILHlCQUFYLElBQ0EsQ0FBQyxNQUFJLENBQUN4SCxLQUFMLENBQVdtQyxJQUFYLENBQWdCc0YsSUFBaEIsQ0FBcUIsVUFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUM3RCxFQUFGLEtBQVNuQixHQUFHLENBQUNtQixFQUFqQjtBQUFBLFNBQXRCLENBRkE7QUFBQSxPQUZXLEVBTWY4RCxLQU5lLENBTVQsQ0FOUyxFQU1OLEtBQUszSCxLQUFMLENBQVc0SCxjQU5MLENBQWxCO0FBT0EsYUFBT3ZHLFdBQVA7QUFDRDtBQXBmSDtBQUFBO0FBQUEsOEJBc2ZvQnFCLEdBdGZwQixFQXNmOEJzRCxLQXRmOUIsRUFzZjZDO0FBQ3pDLFVBQU1SLElBQUksR0FDUiwwR0FDRzlDLEdBQUcsQ0FBQ1QsSUFEUCxFQUVHLENBQUMsS0FBS2pDLEtBQUwsQ0FBV3VGLFFBQVosSUFDQyxvREFBQyxxREFBRCxlQUNPLEtBQUt2RixLQUFMLENBQVc2RCxFQUFYLElBQWlCO0FBQ3BCQSxVQUFFLEVBQUUsS0FBSzdELEtBQUwsQ0FBVzZELEVBQVgsR0FBZ0IsT0FBaEIsR0FBMEJtQyxLQUFLLENBQUM2QixRQUFOO0FBRFYsT0FEeEI7QUFJRSxnQkFBUSxFQUFFLElBSlo7QUFLRSxhQUFLLEVBQUUsSUFMVDtBQU1FLGVBQU8sRUFBRSxLQUFLbkUsY0FBTCxDQUFvQmhCLEdBQXBCLENBTlg7QUFPRSxpQkFBUyxFQUFDLDhDQVBaO0FBUUUsaUJBQVMsRUFBRSxtQkFBQW9GLENBQUM7QUFBQSxpQkFDVjtBQUFHLHFCQUFTLEVBQUVBLENBQUMsQ0FBQ2xDLFNBQWhCO0FBQTJCLGNBQUUsRUFBRWtDLENBQUMsQ0FBQ2pFLEVBQWpDO0FBQXFDLG1CQUFPLEVBQUVpRSxDQUFDLENBQUNDO0FBQWhELGFBQ0dELENBQUMsQ0FBQ0UsUUFETCxDQURVO0FBQUE7QUFSZCxVQWNFLG9EQUFDLHdHQUFELE9BZEYsQ0FISixDQURGO0FBdUJBLFVBQU1wQyxTQUFTLEdBQUdsRyxVQUFVLENBQUMsaUJBQUQsRUFBb0I7QUFDOUMsZ0NBQXdCLEtBQUtNLEtBQUwsQ0FBV2lJO0FBRFcsT0FBcEIsQ0FBNUI7O0FBR0EsVUFBSSxLQUFLakksS0FBTCxDQUFXeUQsVUFBZixFQUEyQjtBQUN6QixlQUNFLG9EQUFDLHFEQUFEO0FBQ0UsaUJBQU8sRUFBRSxLQUFLRCxRQUFMLENBQWNkLEdBQWQsQ0FEWDtBQUVFLGVBQUssRUFBRSxJQUZUO0FBR0UsbUJBQVMsRUFBRWtELFNBSGI7QUFJRSxhQUFHLEVBQUVJO0FBSlAsV0FNR1IsSUFOSCxDQURGO0FBVUQ7O0FBQ0QsYUFDRTtBQUFLLGVBQU8sRUFBRSxLQUFLaEMsUUFBTCxDQUFjZCxHQUFkLENBQWQ7QUFBa0MsaUJBQVMsRUFBRWtELFNBQTdDO0FBQXdELFdBQUcsRUFBRUk7QUFBN0QsU0FDR1IsSUFESCxDQURGO0FBS0Q7QUFsaUJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxFQUE2QjBDLCtEQUE3QjtBQUFhbkksTyxDQU1Hb0ksWSxxQkFDVEQsK0RBQVMsQ0FBQ0MsWTtBQUNiQyxVQUFRLEVBQUUsSztBQUNWeEMsV0FBUyxFQUFFLEU7QUFDWHpELE1BQUksRUFBRSxFO0FBQ05MLGNBQVksRUFBRSxFO0FBQ2RlLFNBQU8sRUFBRSxJO0FBQ1RYLGVBQWEsRUFBRTtBQUFBLFdBQU1ULFNBQU47QUFBQSxHO0FBQ2ZjLGVBQWEsRUFBRSx1QkFBQThGLFVBQVU7QUFBQSxXQUN2QkMsT0FBTyxDQUFDQyxPQUFSLENBQWdCO0FBQUV0RyxVQUFJLEVBQUVvRyxVQUFSO0FBQW9CeEUsUUFBRSxFQUFFLElBQUkyRSxJQUFKLEdBQVdDLE9BQVg7QUFBeEIsS0FBaEIsQ0FEdUI7QUFBQSxHO0FBRXpCNUIsb0JBQWtCLEVBQUUsMEY7QUFDcEJDLHVCQUFxQixFQUFFLHFHO0FBQ3ZCUCw4QkFBNEIsRUFBRSw4RjtBQUM5QkosaUJBQWUsRUFBRSxJO0FBQ2pCRSw2QkFBMkIsRUFBRSxZO0FBQzdCQywyQkFBeUIsRUFBRSxxQjtBQUMzQlksZ0JBQWMsRUFBRSxHO0FBQ2hCSSxvQkFBa0IsRUFBRSw0QkFBQ29CLElBQUQsRUFBT3ZHLElBQVA7QUFBQSxXQUNsQkEsSUFBSSxDQUFDd0IsTUFBTCxDQUFZLFVBQUFqQixHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDVCxJQUFKLElBQVlTLEdBQUcsQ0FBQ1QsSUFBSixDQUFTc0YsV0FBVCxHQUF1QlAsVUFBdkIsQ0FBa0MwQixJQUFsQyxDQUFoQjtBQUFBLEtBQWYsQ0FEa0I7QUFBQSxHO0FBRXBCZCxnQkFBYyxFQUFFLEM7QUFDaEJsRCxjQUFZLEVBQUUsSztBQUNkTyxjQUFZLEVBQUVyRix1QjtBQUNkNEcsbUJBQWlCLEVBQUUsQztBQUNuQnhGLHNCQUFvQixFQUFFOztBQTBoQm5CLElBQU0ySCxJQUFJLEdBQUdDLHdGQUFnQixFQUNsQztBQUNBQyw2RUFBZSxDQUFZOUksT0FBWixDQUZtQixFQUdsQyxNQUhrQyxDQUE3QjtlQU1RNEksSTtBQUFBOzs7Ozs7Ozs7OzBCQWhuQkYvSSx1QjswQkFtREFHLE87MEJBdWpCQTRJLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyb0JiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI1N2I5MDI4LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbnB1dEdyb3VwIH0gZnJvbSAnLi4vaW5wdXRHcm91cC9JbnB1dEdyb3VwJztcclxuaW1wb3J0IHsgVGV4dCwgVGV4dFByb3BzLCBUZXh0UmF3IH0gZnJvbSAnLi4vdGV4dC9UZXh0JztcclxuaW1wb3J0ICogYXMgUGx1c0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL2NvbnRlbnQvc3ZnL3Byb2R1Y3Rpb24vaWNfYWRkX2NpcmNsZV9vdXRsaW5lXzI0cHguc3ZnJztcclxuaW1wb3J0ICogYXMgTGVmdEFycm93SWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvbmF2aWdhdGlvbi9zdmcvcHJvZHVjdGlvbi9pY19hcnJvd19iYWNrXzI0cHguc3ZnJztcclxuaW1wb3J0IHtcclxuICBCYXNlSW5wdXRQcm9wcyxcclxuICBCYXNlSW5wdXRTdGF0ZSxcclxuICBCYXNlSW5wdXQsXHJcbiAgVmFsaWRhdGlvbkVycm9yLFxyXG4gIGRlZmF1bHRCYXNlVHJhbnNsYXRpb25zLFxyXG59IGZyb20gJy4uL2Jhc2UvaW5wdXQvQmFzZUlucHV0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBUYWdzU3VnZ2VzdGlvbnMgZnJvbSAnLi9zdWJDb21wb25lbnRzL1RhZ3NTdWdnZXN0aW9ucyc7XHJcbmltcG9ydCB7IHdpdGhGb3JtQ29udGV4dCB9IGZyb20gJy4uL2Zvcm0vd2l0aEZvcm1Db250ZXh0JztcclxudmFyIGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XHJcbmltcG9ydCB7IHdpdGhUaGVtZUNvbnRleHQgfSBmcm9tICcuLi90aGVtZVByb3ZpZGVyL3dpdGhUaGVtZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBQb3BwZXJQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BvcHBlci9Qb3BwZXInO1xyXG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG4vLyBNaXNjXHJcbmV4cG9ydCB0eXBlIFRhZyA9IHtcclxuICBpZDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyA9IHtcclxuICAuLi5kZWZhdWx0QmFzZVRyYW5zbGF0aW9ucyxcclxuICBhZGROZXc6ICdBZGQgbmV3JyxcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFRhZ3NUcmFuc2xhdGlvbnMgPSBQYXJ0aWFsPHR5cGVvZiBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucz47XHJcblxyXG5leHBvcnQgdHlwZSBUYWdzUHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICB0YWdzOiBUYWdbXTtcclxuICBleGlzdGluZ1RhZ3M/OiBUYWdbXTtcclxuICBmZXRjaEV4aXN0aW5nVGFncz86ICh0ZXh0OiBzdHJpbmcpID0+IFByb21pc2U8VGFnW10+O1xyXG4gIG9uVGFnc0NoYW5nZWQ6IChuZXdUYWdzOiBUYWdbXSkgPT4gdm9pZDtcclxuICBvbk5ld1RhZ0FkZGVkPzogKG5ld1RhZ05hbWU6IHN0cmluZykgPT4gUHJvbWlzZTxUYWc+O1xyXG4gIG9uVGFnQ2xpY2s/OiAodGFnOiBUYWcpID0+IHZvaWQ7XHJcbiAgc2hvd0NoaXBzPzogYm9vbGVhbjtcclxuICBhbGxvd05ldz86IGJvb2xlYW47XHJcbiAgYWRkTmV3T25CbHVyPzogYm9vbGVhbjtcclxuICB0ZXh0UHJvcHM/OiBUZXh0UHJvcHM7XHJcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xyXG4gIHJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcj86IHN0cmluZztcclxuICBtYXhUYWdzPzogbnVtYmVyO1xyXG4gIHZhbHVlTm90QWRkZWRFcnJvcj86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIG1heFRhZ3NTdXJwYXNzZWRFcnJvcj86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHNob3dTdWdnZXN0aW9ucz86IGJvb2xlYW47XHJcbiAgc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHdhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBsb2FkaW5nRGVsYXlNcz86IG51bWJlcjtcclxuICBmaWx0ZXJFeGlzdGluZ1RhZ3M/OiAodGV4dDogc3RyaW5nLCBleGlzdGluZ1RhZ3M6IFRhZ1tdKSA9PiBUYWdbXTtcclxuICBhbGxvd1NhbWVUYWdNdWx0aXBsZVRpbWVzPzogYm9vbGVhbjtcclxuICBtYXhTdWdnZXN0aW9ucz86IG51bWJlcjtcclxuICBwb3BwZXJQcm9wcz86IFBhcnRpYWw8UG9wcGVyUHJvcHM+O1xyXG4gIG1pbkxldHRlcnNUb0ZldGNoPzogbnVtYmVyO1xyXG4gIG1vYmlsZVZlcnNpb25FbmFibGVkPzogYm9vbGVhbjtcclxuICBpc0xvYWRpbmc/OiBib29sZWFuO1xyXG59ICYgQmFzZUlucHV0UHJvcHM8SFRNTElucHV0RWxlbWVudCwgVGFnc1RyYW5zbGF0aW9ucz47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhZ3NTdGF0ZSBleHRlbmRzIEJhc2VJbnB1dFN0YXRlIHtcclxuICB0ZXh0SXNGb2N1c2VkOiBib29sZWFuO1xyXG4gIHRleHRFcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdO1xyXG4gIHRleHRJc1ZhbGlkOiBib29sZWFuO1xyXG4gIHN1Z2dlc3Rpb25zVmlzaWJsZTogYm9vbGVhbjtcclxuICBmZXRjaGVkRXhpc3RpbmdUYWdzOiBUYWdbXTtcclxuICBmZXRjaGluZ0V4aXN0aW5nVGFnczogYm9vbGVhbjtcclxuICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbnR5cGUgSW5qZWN0ZWRQcm9wcyA9IHt9O1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhZ3NSYXcgZXh0ZW5kcyBCYXNlSW5wdXQ8XHJcbiAgVGFnc1Byb3BzICYgSW5qZWN0ZWRQcm9wcyxcclxuICBUYWdzU3RhdGUsXHJcbiAgSFRNTElucHV0RWxlbWVudCxcclxuICBUYWdzVHJhbnNsYXRpb25zXHJcbj4ge1xyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBUYWdzUHJvcHMgPSB7XHJcbiAgICAuLi5CYXNlSW5wdXQuZGVmYXVsdFByb3BzLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgZXhpc3RpbmdUYWdzOiBbXSxcclxuICAgIG1heFRhZ3M6IDEwMDAsXHJcbiAgICBvblRhZ3NDaGFuZ2VkOiAoKSA9PiB1bmRlZmluZWQsXHJcbiAgICBvbk5ld1RhZ0FkZGVkOiBuZXdUYWdOYW1lID0+XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSh7IG5hbWU6IG5ld1RhZ05hbWUsIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9KSxcclxuICAgIHZhbHVlTm90QWRkZWRFcnJvcjogPHNwYW4+WW91IGZvcmdvdCB0byBhZGQgdGFnPC9zcGFuPixcclxuICAgIG1heFRhZ3NTdXJwYXNzZWRFcnJvcjogPHNwYW4+TWF4aW11bSBudW1iZXIgb2YgdGFncyBzdXJwYXNzZWQ8L3NwYW4+LFxyXG4gICAgd2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudDogPHNwYW4+V2FpdGluZyBmb3IgbW9yZSBpbnB1dC4uLjwvc3Bhbj4sXHJcbiAgICBzaG93U3VnZ2VzdGlvbnM6IHRydWUsXHJcbiAgICBzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQ6ICdMb2FkaW5nLi4uJyxcclxuICAgIHN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQ6ICdObyBleGlzdGluZyB0YWdzLi4uJyxcclxuICAgIGxvYWRpbmdEZWxheU1zOiA1MDAsXHJcbiAgICBmaWx0ZXJFeGlzdGluZ1RhZ3M6ICh0ZXh0LCB0YWdzKSA9PlxyXG4gICAgICB0YWdzLmZpbHRlcih0YWcgPT4gdGFnLm5hbWUgJiYgdGFnLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRleHQpKSxcclxuICAgIG1heFN1Z2dlc3Rpb25zOiA1LFxyXG4gICAgYWRkTmV3T25CbHVyOiBmYWxzZSxcclxuICAgIHRyYW5zbGF0aW9uczogZGVmYXVsdFRhZ3NUcmFuc2xhdGlvbnMsXHJcbiAgICBtaW5MZXR0ZXJzVG9GZXRjaDogMCxcclxuICAgIG1vYmlsZVZlcnNpb25FbmFibGVkOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdGV4dFJlZjogUmVhY3QuUmVmT2JqZWN0PFRleHRSYXc+O1xyXG4gIHByaXZhdGUgc3VnZ2VzdGlvbnNSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcbiAgcHJpdmF0ZSBpc01vYmlsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogVGFnc1Byb3BzICYgSW5qZWN0ZWRQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgdGV4dEVycm9yczogW10sXHJcbiAgICAgIHRleHRJc0ZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgICBmZXRjaGluZ0V4aXN0aW5nVGFnczogZmFsc2UsXHJcbiAgICAgIHRleHRJc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgZmV0Y2hlZEV4aXN0aW5nVGFnczogW10sXHJcbiAgICB9O1xyXG4gICAgdGhpcy50ZXh0UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLnN1Z2dlc3Rpb25zUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSA9IHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUxlYXZlTW9iaWxlQ2xpY2sgPSB0aGlzLmhhbmRsZUxlYXZlTW9iaWxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIGlmIChwcm9wcy5tb2JpbGVWZXJzaW9uRW5hYmxlZCkge1xyXG4gICAgICB0aGlzLmlzTW9iaWxlID0gcmVxdWlyZSgncmVhY3QtZGV2aWNlLWRldGVjdCcpPy5pc01vYmlsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb2N1cygpIHtcclxuICAgIGlmICh0aGlzLnRleHRSZWYuY3VycmVudCkge1xyXG4gICAgICB0aGlzLnRleHRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wczogVGFnc1Byb3BzICYgSW5qZWN0ZWRQcm9wcykge1xyXG4gICAgaWYgKFxyXG4gICAgICBvbGRQcm9wcy50YWdzICE9PSB0aGlzLnByb3BzLnRhZ3MgfHxcclxuICAgICAgb2xkUHJvcHMudmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy52YWxpZGF0b3JzIHx8XHJcbiAgICAgIG9sZFByb3BzLmN1c3RvbVZhbGlkYXRvcnMgIT09IHRoaXMucHJvcHMuY3VzdG9tVmFsaWRhdG9ycyB8fFxyXG4gICAgICBvbGRQcm9wcy5yZXF1aXJlZCAhPT0gdGhpcy5wcm9wcy5yZXF1aXJlZFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKHRoaXMucHJvcHMudGFncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlTGVhdmVNb2JpbGVDbGljaygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB0ZXh0SXNGb2N1c2VkOiBmYWxzZSxcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVDbGlja091dHNpZGUoZTogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5jb250YWluZXJSZWYuY3VycmVudCB8fFxyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KSB8fFxyXG4gICAgICAhdGhpcy5zdWdnZXN0aW9uc1JlZi5jdXJyZW50IHx8XHJcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnNSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudClcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLnByb3BzLmFkZE5ld09uQmx1ciAmJiB0aGlzLnN0YXRlLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5nZXRTdWdnZXN0aW9ucygpO1xyXG4gICAgICBjb25zdCBleGlzdGluZyA9IHN1Z2dlc3Rpb25zLmZpbmQocyA9PiBzLm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgICBpZiAoZXhpc3RpbmcpIHtcclxuICAgICAgICB0aGlzLm9uU3VnZ2VzdGlvblNlbGVjdGVkKGV4aXN0aW5nKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmFsbG93TmV3KSB7XHJcbiAgICAgICAgdGhpcy5hZGROZXdUYWcoKTtcclxuICAgICAgfVxyXG4gICAgfSAvKiBlbHNlIGlmICh0aGlzLnN0YXRlLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycgfSk7XHJcbiAgICB9Ki9cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKGRlZmF1bHRUYWdzVHJhbnNsYXRpb25zKTtcclxuICAgIGNvbnN0IHRleHRQcm9wcyA9IHRoaXMucHJvcHMudGV4dFByb3BzID8gdGhpcy5wcm9wcy50ZXh0UHJvcHMgOiB7fTtcclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5nZXRTdWdnZXN0aW9ucygpO1xyXG4gICAgY29uc3Qgc2hvd01vYmlsZVZlcnNpb24gPVxyXG4gICAgICB0aGlzLnByb3BzLm1vYmlsZVZlcnNpb25FbmFibGVkICYmXHJcbiAgICAgIHRoaXMuaXNNb2JpbGUgJiZcclxuICAgICAgKHRoaXMuc3RhdGUudGV4dElzRm9jdXNlZCB8fCB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSk7XHJcbiAgICBjb25zdCBMZWF2ZU1vYmlsZUJ1dHRvbiA9IHNob3dNb2JpbGVWZXJzaW9uID8gKFxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fbGVhdmVNb2JpbGVUYWdzQnV0dG9uIGxpbmUtaGVpZ2h0LS0wXCJcclxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUxlYXZlTW9iaWxlQ2xpY2t9XHJcbiAgICAgICAgbm9TaGFkb3c9e3RydWV9XHJcbiAgICAgICAgdW5vYnRydXNpdmU9e3RydWV9XHJcbiAgICAgID5cclxuICAgICAgICA8TGVmdEFycm93SWNvbiAvPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICkgOiAoXHJcbiAgICAgIHVuZGVmaW5lZFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHNob3dJbnB1dCA9IEJvb2xlYW4oXHJcbiAgICAgICghdGhpcy5wcm9wcy5tYXhUYWdzIHx8XHJcbiAgICAgICAgdGhpcy5wcm9wcy5tYXhUYWdzID4gKHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoKSkgJiZcclxuICAgICAgICAhdGhpcy5wcm9wcy5yZWFkT25seVxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxQb3J0YWwgY29udGFpbmVyPXtkb2N1bWVudC5ib2R5fSBkaXNhYmxlUG9ydGFsPXshc2hvd01vYmlsZVZlcnNpb259PlxyXG4gICAgICAgIDxJbnB1dEdyb3VwIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSB0b29sdGlwPXt0aGlzLnByb3BzLnRvb2x0aXB9PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICdpbnB1dF9fYmFzZSB0YWdzLWlucHV0JyxcclxuICAgICAgICAgICAgICB0aGlzLmdldFZhbGlkYXRpb25DbGFzcygpLFxyXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0YWdzLWlucHV0LS1yZWFkT25seSc6IHRoaXMucHJvcHMucmVhZE9ubHksXHJcbiAgICAgICAgICAgICAgICAndGFncy1pbnB1dC0taGFzUGxhY2Vob2xkZXInOlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRleHRQcm9wcyAmJiB0aGlzLnByb3BzLnRleHRQcm9wcy5wbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgICAgICd0YWdzLWlucHV0LS1tb2JpbGUnOiBzaG93TW9iaWxlVmVyc2lvbixcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5jb250YWluZXJSZWZ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzaG93TW9iaWxlVmVyc2lvbiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X19tb2JpbGVCYWNrZHJvcFwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnc19fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIHshc2hvd0lucHV0ICYmIHNob3dNb2JpbGVWZXJzaW9uICYmIExlYXZlTW9iaWxlQnV0dG9ufVxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRhZ3MgJiYgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3RhZ19fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50YWdzLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUYWcoaXRlbSwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93SW5wdXQgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICd0YWdzLWlucHV0X190YWdzX193cmFwcGVyICcgK1xyXG4gICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5yZWFkT25seSA/ICdmaWxsZWQgJyA6ICcnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIHNob3dDbGVhckJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgey4uLnRleHRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctdGV4dC1pbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICByZWY9e3RoaXMudGV4dFJlZn1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggPiAwID8gZmFsc2UgOiB0aGlzLnByb3BzLnJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAndGFncy1pbnB1dF9fdGV4dC1pbnB1dCAnICtcclxuICAgICAgICAgICAgICAgICAgICAodGV4dFByb3BzLmNsYXNzTmFtZSA/IHRleHRQcm9wcy5jbGFzc05hbWUgOiAnJylcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3duKHN1Z2dlc3Rpb25zKX1cclxuICAgICAgICAgICAgICAgICAgb25FcnJvcnNDaGFuZ2VkPXt0aGlzLm9uVGV4dEVycm9yc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25Gb2N1c31cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRPbmx5fVxyXG4gICAgICAgICAgICAgICAgICBzaG93VmFsaWRhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIGlnbm9yZUNvbnRleHQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e3RoaXMucHJvcHMudmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgICAgY3VzdG9tVmFsaWRhdG9ycz17dGhpcy5wcm9wcy5jdXN0b21WYWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgICBiZWZvcmU9e0xlYXZlTW9iaWxlQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSAmJiB0aGlzLnByb3BzLnNob3dTdWdnZXN0aW9ucyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUYWdzU3VnZ2VzdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRleHQtaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyUmVmPXt0aGlzLnN1Z2dlc3Rpb25zUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXt0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0aGlzLnByb3BzLmFsbG93TmV3fVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj17dGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZldGNoaW5nRXhpc3RpbmdUYWdzIHx8IHRoaXMucHJvcHMuaXNMb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmdDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZT17dGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgRW1wdHlDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICBXYWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMud2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc1dhaXRpbmdGb3JNb3JlSW5wdXQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZS5sZW5ndGggPCB0aGlzLnByb3BzLm1pbkxldHRlcnNUb0ZldGNoXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M9e3N1Z2dlc3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0ZWQ9e3RoaXMub25TdWdnZXN0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkTmV3VGFnQ29tcG9uZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWxsb3dOZXcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFsdWUgIT09ICcnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMucHJvcHMuZXhpc3RpbmdUYWdzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmV4aXN0aW5nVGFncy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gZS5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBlLm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGV4dElzVmFsaWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy1hZGQtbmV3LWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fc3VnZ2VzdGlvbiB0YWdzLWlucHV0X19hZGQtbmV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZE5ld1RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMuYWRkTmV3fSBcInt0aGlzLnN0YXRlLnZhbHVlfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwb3BwZXJQcm9wcz17dGhpcy5wcm9wcy5wb3BwZXJQcm9wc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckRlZmF1bHRWYWxpZGF0aW9uKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsICYmIChcclxuICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFsdWUgIT09ICcnIHx8XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGV4dElzRm9jdXNlZCB8fFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlYWRPbmx5IHx8XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggPj0gdGhpcy5wcm9wcy5tYXhUYWdzIHx8XHJcbiAgICAgICAgICAgICAgICAgIHNob3dNb2JpbGVWZXJzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnbGFiZWwtLWZvY3VzZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckxhYmVsKCl9XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgPC9Qb3J0YWw+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblRleHRFcnJvcnNDaGFuZ2VkID0gKHRleHRFcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHsgdGV4dEVycm9ycyB9KSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuXHJcbiAgcHJpdmF0ZSBvbkZvY3VzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHsgdGV4dElzRm9jdXNlZDogdHJ1ZSwgc3VnZ2VzdGlvbnNWaXNpYmxlOiB0cnVlLCB0b3VjaGVkOiB0cnVlIH0pLFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncyh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgIGNvbnN0IHNob3dNb2JpbGVWZXJzaW9uID1cclxuICAgICAgdGhpcy5wcm9wcy5tb2JpbGVWZXJzaW9uRW5hYmxlZCAmJlxyXG4gICAgICB0aGlzLmlzTW9iaWxlICYmXHJcbiAgICAgICh0aGlzLnN0YXRlLnRleHRJc0ZvY3VzZWQgfHwgdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUpO1xyXG4gICAgaWYgKFxyXG4gICAgICAhc2hvd01vYmlsZVZlcnNpb24gJiZcclxuICAgICAgdGhpcy5wcm9wcy5tb2JpbGVWZXJzaW9uRW5hYmxlZCAmJlxyXG4gICAgICB0aGlzLmlzTW9iaWxlXHJcbiAgICApIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRleHRSZWYuY3VycmVudD8uZm9jdXMoKSwgMTAwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uS2V5RG93biA9IChzdWdnZXN0aW9uczogVGFnW10pID0+IGFzeW5jIGUgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBlLmtleSA9PT0gJ0VudGVyJyAmJlxyXG4gICAgICAodGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgfHxcclxuICAgICAgICB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAhPT0gdW5kZWZpbmVkKSAmJlxyXG4gICAgICB0aGlzLnN0YXRlLnRleHRFcnJvcnMubGVuZ3RoID09PSAwXHJcbiAgICApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBjb25zdCBleGlzdGluZ1RhZyA9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmV4aXN0aW5nVGFncy5maW5kKGV0ID0+IGV0Lm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZChcclxuICAgICAgICAgIHRoaXMucHJvcHMudGFncy5jb25jYXQoc3VnZ2VzdGlvbnNbdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb25dKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJywgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChleGlzdGluZ1RhZykge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZCh0aGlzLnByb3BzLnRhZ3MuY29uY2F0KGV4aXN0aW5nVGFnKSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJyB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuYWxsb3dOZXcpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmFkZE5ld1RhZygpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzdWdnZXN0aW9ucy5sZW5ndGggPiAwICYmIHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlKSB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgY29uc3QgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uID1cclxuICAgICAgICAgIHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBzdWdnZXN0aW9ucy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IDBcclxuICAgICAgICAgICAgPyBzdWdnZXN0aW9ucy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gLSAxO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgICAgY29uc3QgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uID1cclxuICAgICAgICAgIHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gKyAxO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBhZGROZXdUYWcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUYWcgPSBhd2FpdCB0aGlzLnByb3BzLm9uTmV3VGFnQWRkZWQodGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICBpZiAobmV3VGFnKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZChcclxuICAgICAgICB0aGlzLnByb3BzLnRhZ3MgPyB0aGlzLnByb3BzLnRhZ3MuY29uY2F0KG5ld1RhZykgOiBbbmV3VGFnXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJywgdGV4dEVycm9yczogW10gfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uU3VnZ2VzdGlvblNlbGVjdGVkID0gKHRhZzogVGFnKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUYWdzID0gdGhpcy5wcm9wcy50YWdzLmNvbmNhdCh0YWcpO1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKG5ld1RhZ3MpO1xyXG4gICAgY29uc3QgaXNNYXggPSBuZXdUYWdzLmxlbmd0aCA9PT0gdGhpcy5wcm9wcy5tYXhUYWdzO1xyXG4gICAgY29uc3QgZmluYWxWYWx1ZSA9ICF0aGlzLnByb3BzLmFsbG93TmV3ICYmICFpc01heCA/IHRoaXMuc3RhdGUudmFsdWUgOiAnJztcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZTogZmluYWxWYWx1ZSxcclxuICAgICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGlzTWF4ID8gZmFsc2UgOiB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSxcclxuICAgICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCxcclxuICAgICAgICB0ZXh0RXJyb3JzOiBbXSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICF0aGlzLnByb3BzLm1heFRhZ3MgfHxcclxuICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggKyAxIDwgdGhpcy5wcm9wcy5tYXhUYWdzXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKGZpbmFsVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25CbHVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHRleHRJc0ZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25UZXh0Q2hhbmdlZCA9IChcclxuICAgIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LFxyXG4gICAgaXNWYWxpZDogYm9vbGVhblxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7XHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgaXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICB0ZXh0SXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IHRydWUsXHJcbiAgICAgIH0pLFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMgPSAodGFnczogVGFnW10gPSB0aGlzLnByb3BzLnRhZ3MpID0+IHtcclxuICAgIGxldCBlcnJvcnMgPSB0aGlzLmdldEVycm9ycyh0YWdzKTtcclxuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldEludmFsaWQoZXJyb3JzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsaWQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGdldEVycm9ycyh0YWdzOiBUYWdbXSkge1xyXG4gICAgbGV0IGVycm9ycyA9IFtdO1xyXG4gICAgaWYgKHRhZ3MubGVuZ3RoIDwgdGhpcy5wcm9wcy5tYXhUYWdzKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5zdGF0ZS50ZXh0RXJyb3JzKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyAmJiB0YWdzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLnJlcXVpcmVkKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQoXHJcbiAgICAgICAgdGhpcy5nZXRUcmFuc2xhdGlvbnModGhpcy5wcm9wcy50cmFuc2xhdGlvbnMpLnJlcXVpcmVkXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSAmJiB0aGlzLnByb3BzLmFsbG93TmV3ICYmICF0aGlzLnN0YXRlLnRleHRJc0ZvY3VzZWQpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnByb3BzLnZhbHVlTm90QWRkZWRFcnJvcik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5tYXhUYWdzIDwgKHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoKSkge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMucHJvcHMubWF4VGFnc1N1cnBhc3NlZEVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcnMuZmlsdGVyKGkgPT4gaSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZldGNoRXhpc3RpbmdUYWdzKHN0YXJ0c1dpdGg6IHN0cmluZyA9ICcnKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hFeGlzdGluZ1RhZ3MgJiZcclxuICAgICAgc3RhcnRzV2l0aC5sZW5ndGggPj0gdGhpcy5wcm9wcy5taW5MZXR0ZXJzVG9GZXRjaFxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGZldGNoaW5nRXhpc3RpbmdUYWdzOiB0cnVlIH0pKSxcclxuICAgICAgICB0aGlzLnByb3BzLmxvYWRpbmdEZWxheU1zXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hFeGlzdGluZ1RhZ3Moc3RhcnRzV2l0aCkudGhlbihmZXRjaGVkRXhpc3RpbmdUYWdzID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcclxuICAgICAgICAgIGZldGNoZWRFeGlzdGluZ1RhZ3MsXHJcbiAgICAgICAgICBmZXRjaGluZ0V4aXN0aW5nVGFnczogZmFsc2UsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U3VnZ2VzdGlvbnMoKSB7XHJcbiAgICBjb25zdCBleGlzdGluZ1RhZ3M6IFRhZ1tdID0gW11cclxuICAgICAgLmNvbmNhdCh0aGlzLnByb3BzLmV4aXN0aW5nVGFncyA/IHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzIDogW10pXHJcbiAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzID8gdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzIDogW11cclxuICAgICAgKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkVGFncyA9IHRoaXMucHJvcHMuZmlsdGVyRXhpc3RpbmdUYWdzKFxyXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlID8gdGhpcy5zdGF0ZS52YWx1ZS50b0xvd2VyQ2FzZSgpIDogJycsXHJcbiAgICAgIGV4aXN0aW5nVGFnc1xyXG4gICAgKTtcclxuICAgIGxldCBzdWdnZXN0aW9ucyA9IGZpbHRlcmVkVGFnc1xyXG4gICAgICAuZmlsdGVyKFxyXG4gICAgICAgIHRhZyA9PlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5hbGxvd1NhbWVUYWdNdWx0aXBsZVRpbWVzIHx8XHJcbiAgICAgICAgICAhdGhpcy5wcm9wcy50YWdzLnNvbWUodCA9PiB0LmlkID09PSB0YWcuaWQpXHJcbiAgICAgIClcclxuICAgICAgLnNsaWNlKDAsIHRoaXMucHJvcHMubWF4U3VnZ2VzdGlvbnMpO1xyXG4gICAgcmV0dXJuIHN1Z2dlc3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJUYWcodGFnOiBUYWcsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGJvZHkgPSAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge3RhZy5uYW1lfVxyXG4gICAgICAgIHshdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRhZy0nICsgaW5kZXgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIGNpcmN1bGFyPXt0cnVlfVxyXG4gICAgICAgICAgICBibGFuaz17dHJ1ZX1cclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy50YWdSZW1vdmVDbGljayh0YWcpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xIHRyYW5zZm9ybS1yb3RhdGUtLTQ1IGxpbmUtaGVpZ2h0LS0wIHAtMFwiXHJcbiAgICAgICAgICAgIENvbXBvbmVudD17cCA9PiAoXHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtwLmNsYXNzTmFtZX0gaWQ9e3AuaWR9IG9uQ2xpY2s9e3Aub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICB7cC5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQbHVzSWNvbiAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygndGFncy1pbnB1dF9fdGFnJywge1xyXG4gICAgICAndGFncy1pbnB1dF9fdGFnLWNoaXAnOiB0aGlzLnByb3BzLnNob3dDaGlwcyxcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25UYWdDbGljaykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudGFnQ2xpY2sodGFnKX1cclxuICAgICAgICAgIHNtYWxsPXt0cnVlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnRhZ0NsaWNrKHRhZyl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e2luZGV4fT5cclxuICAgICAgICB7Ym9keX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0YWdDbGljayA9ICh0YWc6IFRhZykgPT4gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ0NsaWNrICYmIHRoaXMucHJvcHMub25UYWdDbGljayh0YWcpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdGFnUmVtb3ZlQ2xpY2sgPSAodGFnOiBUYWcpID0+IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IG5ld1RhZ3MgPSB0aGlzLnByb3BzLnRhZ3MuZmlsdGVyKHN2ID0+IHN2LmlkICE9PSB0YWcuaWQpO1xyXG4gICAgLyppZiAobmV3VGFncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZvY3VzKCksIDUwKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgfSk7Ki9cclxuICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQobmV3VGFncyk7XHJcbiAgICB0aGlzLmhhbmRsZUVycm9ycyhuZXdUYWdzKTtcclxuICAgIC8vIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGFncyA9IHdpdGhUaGVtZUNvbnRleHQ8VGFnc1Byb3BzLCBJbnN0YW5jZVR5cGU8dHlwZW9mIFRhZ3NSYXc+PihcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG4gIHdpdGhGb3JtQ29udGV4dDxUYWdzUHJvcHM+KFRhZ3NSYXcpLFxyXG4gICd0YWdzJ1xyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFncztcclxuIiwiZXhwb3J0ICogZnJvbSAnLi92YWxpZGF0b3JzL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jaGVja2JveCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9kcm9wZG93bic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9keW5hbWljU3VibWl0JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXRHcm91cCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9pbnB1dEhlYWRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9tb25leS9Nb25leSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9vcGVuaW5nSG91cnMvb3BlbmluZ0hvdXJzRGF5JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL29wZW5pbmdIb3Vycy9vcGVuaW5nSG91cnNTcGVjaWFsJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL29wZW5pbmdIb3Vycy9vcGVuaW5nSG91cnNXZWVrJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvQ29udGFpbmVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC9TZWxlY3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvc3VibWl0JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RhZ3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGV4dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90ZXh0QXJlYSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90aW1lJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RpbWVTcGFuJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RoZW1lUHJvdmlkZXInO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9