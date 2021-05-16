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

var TagButtonComponent = function TagButtonComponent(p) {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    className: p.className,
    id: p.id,
    onClick: p.onClick
  }, p.children);
};

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
                    if (e.key === 'Tab') {
                      _this.setState({
                        suggestionsVisible: false,
                        preselectedSuggestion: undefined
                      });
                    }

                    if (!(e.key === 'Enter' && (_this.state.value !== '' || _this.state.preselectedSuggestion !== undefined) && _this.state.textErrors.length === 0)) {
                      _context.next = 19;
                      break;
                    }

                    e.preventDefault();
                    e.stopPropagation();
                    existingTag = _this.props.existingTags && _this.props.existingTags.find(function (et) {
                      return et.name === _this.state.value;
                    });

                    if (!(_this.state.preselectedSuggestion !== undefined)) {
                      _context.next = 10;
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

                    _context.next = 19;
                    break;

                  case 10:
                    if (!existingTag) {
                      _context.next = 15;
                      break;
                    }

                    _this.props.onTagsChanged(_this.props.tags.concat(existingTag));

                    _this.setState({
                      value: ''
                    }, function () {
                      _this.fetchExistingTags();

                      _this.handleErrors();
                    });

                    _context.next = 19;
                    break;

                  case 15:
                    if (!_this.props.allowNew) {
                      _context.next = 19;
                      break;
                    }

                    _context.next = 18;
                    return _this.addNewTag();

                  case 18:
                    _this.handleErrors();

                  case 19:
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

                  case 20:
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

    _this.onSuggestionSelected = function (tag, lastSelected) {
      var newTags = _this.props.tags.concat(tag);

      _this.props.onTagsChanged(newTags);

      var isMax = newTags.length === _this.props.maxTags;
      var finalValue = !_this.props.allowNew && !isMax && !lastSelected ? _this.state.value : '';

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

    _this.onBlur = function () {
      _this.setState({
        textIsFocused: false,
        preselectedSuggestion: undefined
      }, function () {
        return _this.handleErrors();
      });
    };

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
          this.onSuggestionSelected(existing, suggestions.length === 1);
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
        Component: TagButtonComponent,
        preventsDefault: false
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
  reactHotLoader.register(TagButtonComponent, "TagButtonComponent", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\Tags.tsx");
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9UYWdzLnRzeCJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwicmVxdWlyZSIsImRlZmF1bHRUYWdzVHJhbnNsYXRpb25zIiwiZGVmYXVsdEJhc2VUcmFuc2xhdGlvbnMiLCJhZGROZXciLCJUYWdCdXR0b25Db21wb25lbnQiLCJwIiwiY2xhc3NOYW1lIiwiaWQiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJUYWdzUmF3IiwicHJvcHMiLCJ0ZXh0UmVmIiwic3VnZ2VzdGlvbnNSZWYiLCJpc01vYmlsZSIsIm9uVGV4dEVycm9yc0NoYW5nZWQiLCJ0ZXh0RXJyb3JzIiwic2V0U3RhdGUiLCJoYW5kbGVFcnJvcnMiLCJvbkZvY3VzIiwidGV4dElzRm9jdXNlZCIsInN1Z2dlc3Rpb25zVmlzaWJsZSIsInRvdWNoZWQiLCJmZXRjaEV4aXN0aW5nVGFncyIsInN0YXRlIiwidmFsdWUiLCJzaG93TW9iaWxlVmVyc2lvbiIsIm1vYmlsZVZlcnNpb25FbmFibGVkIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJmb2N1cyIsIm9uS2V5RG93biIsInN1Z2dlc3Rpb25zIiwiZSIsImtleSIsInByZXNlbGVjdGVkU3VnZ2VzdGlvbiIsInVuZGVmaW5lZCIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZXhpc3RpbmdUYWciLCJleGlzdGluZ1RhZ3MiLCJmaW5kIiwiZXQiLCJuYW1lIiwib25UYWdzQ2hhbmdlZCIsInRhZ3MiLCJjb25jYXQiLCJhbGxvd05ldyIsImFkZE5ld1RhZyIsIm9uTmV3VGFnQWRkZWQiLCJuZXdUYWciLCJvblN1Z2dlc3Rpb25TZWxlY3RlZCIsInRhZyIsImxhc3RTZWxlY3RlZCIsIm5ld1RhZ3MiLCJpc01heCIsIm1heFRhZ3MiLCJmaW5hbFZhbHVlIiwib25CbHVyIiwib25UZXh0Q2hhbmdlZCIsImlzVmFsaWQiLCJ0YXJnZXQiLCJ0ZXh0SXNWYWxpZCIsImVycm9ycyIsImdldEVycm9ycyIsInNldEludmFsaWQiLCJzZXRWYWxpZCIsInRhZ0NsaWNrIiwib25UYWdDbGljayIsInRhZ1JlbW92ZUNsaWNrIiwiZmlsdGVyIiwic3YiLCJmZXRjaGluZ0V4aXN0aW5nVGFncyIsImZldGNoZWRFeGlzdGluZ1RhZ3MiLCJSZWFjdCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImJpbmQiLCJoYW5kbGVMZWF2ZU1vYmlsZUNsaWNrIiwib2xkUHJvcHMiLCJ2YWxpZGF0b3JzIiwiY3VzdG9tVmFsaWRhdG9ycyIsInJlcXVpcmVkIiwiY29udGFpbmVyUmVmIiwiY29udGFpbnMiLCJhZGROZXdPbkJsdXIiLCJnZXRTdWdnZXN0aW9ucyIsImV4aXN0aW5nIiwicyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0cmFuc2xhdGlvbnMiLCJnZXRUcmFuc2xhdGlvbnMiLCJ0ZXh0UHJvcHMiLCJMZWF2ZU1vYmlsZUJ1dHRvbiIsInNob3dJbnB1dCIsIkJvb2xlYW4iLCJyZWFkT25seSIsImJvZHkiLCJ0aXRsZSIsInRvb2x0aXAiLCJnZXRWYWxpZGF0aW9uQ2xhc3MiLCJwbGFjZWhvbGRlciIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInJlbmRlclRhZyIsInJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlciIsInNob3dTdWdnZXN0aW9ucyIsImlzTG9hZGluZyIsInN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudCIsInN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQiLCJ3YWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50IiwibWluTGV0dGVyc1RvRmV0Y2giLCJwb3BwZXJQcm9wcyIsInJlbmRlckRlZmF1bHRWYWxpZGF0aW9uIiwibGFiZWwiLCJyZW5kZXJMYWJlbCIsInZhbHVlTm90QWRkZWRFcnJvciIsIm1heFRhZ3NTdXJwYXNzZWRFcnJvciIsImkiLCJzdGFydHNXaXRoIiwidGltZXIiLCJsb2FkaW5nRGVsYXlNcyIsInRoZW4iLCJjbGVhclRpbWVvdXQiLCJmaWx0ZXJlZFRhZ3MiLCJmaWx0ZXJFeGlzdGluZ1RhZ3MiLCJ0b0xvd2VyQ2FzZSIsImFsbG93U2FtZVRhZ011bHRpcGxlVGltZXMiLCJzb21lIiwidCIsInNsaWNlIiwibWF4U3VnZ2VzdGlvbnMiLCJ0b1N0cmluZyIsInNob3dDaGlwcyIsIkJhc2VJbnB1dCIsImRlZmF1bHRQcm9wcyIsImRpc2FibGVkIiwibmV3VGFnTmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiRGF0ZSIsImdldFRpbWUiLCJ0ZXh0IiwiVGFncyIsIndpdGhUaGVtZUNvbnRleHQiLCJ3aXRoRm9ybUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTs7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsc0RBQUQsQ0FBeEI7O0FBQ0E7Q0FJQTs7QUFNTyxJQUFNQyx1QkFBdUIscUJBQy9CQyw2RUFEK0I7QUFFbENDLFFBQU0sRUFBRTtBQUYwQixFQUE3Qjs7QUFtRFAsSUFBTUMsa0JBQWtELEdBQUcsU0FBckRBLGtCQUFxRCxDQUFBQyxDQUFDO0FBQUEsU0FDMUQ7QUFBRyxhQUFTLEVBQUVBLENBQUMsQ0FBQ0MsU0FBaEI7QUFBMkIsTUFBRSxFQUFFRCxDQUFDLENBQUNFLEVBQWpDO0FBQXFDLFdBQU8sRUFBRUYsQ0FBQyxDQUFDRztBQUFoRCxLQUNHSCxDQUFDLENBQUNJLFFBREwsQ0FEMEQ7QUFBQSxDQUE1RDs7QUFNTyxJQUFNQyxPQUFiO0FBQUE7QUFBQTtBQUFBOztBQW9DRSxtQkFBWUMsS0FBWixFQUE4QztBQUFBOztBQUFBOztBQUM1QyxpRkFBTUEsS0FBTjtBQUQ0QyxVQUp0Q0MsT0FJc0M7QUFBQSxVQUh0Q0MsY0FHc0M7QUFBQSxVQUZ0Q0MsUUFFc0MsR0FGbEIsS0FFa0I7O0FBQUEs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RFBHLGtCOzBCQU1PTSxPOzBCQTZqQkF3SSxJIiwiZmlsZSI6IjU4YjU1ZjUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlic1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElucHV0R3JvdXAgfSBmcm9tICcuLi9pbnB1dEdyb3VwL0lucHV0R3JvdXAnO1xyXG5pbXBvcnQgeyBUZXh0LCBUZXh0UHJvcHMsIFRleHRSYXcgfSBmcm9tICcuLi90ZXh0L1RleHQnO1xyXG5pbXBvcnQgKiBhcyBQbHVzSWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvY29udGVudC9zdmcvcHJvZHVjdGlvbi9pY19hZGRfY2lyY2xlX291dGxpbmVfMjRweC5zdmcnO1xyXG5pbXBvcnQgKiBhcyBMZWZ0QXJyb3dJY29uIGZyb20gJ21hdGVyaWFsLWRlc2lnbi1pY29ucy9uYXZpZ2F0aW9uL3N2Zy9wcm9kdWN0aW9uL2ljX2Fycm93X2JhY2tfMjRweC5zdmcnO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VJbnB1dFByb3BzLFxyXG4gIEJhc2VJbnB1dFN0YXRlLFxyXG4gIEJhc2VJbnB1dCxcclxuICBWYWxpZGF0aW9uRXJyb3IsXHJcbiAgZGVmYXVsdEJhc2VUcmFuc2xhdGlvbnMsXHJcbn0gZnJvbSAnLi4vYmFzZS9pbnB1dC9CYXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEJ1dHRvbkNvbXBvbmVudFByb3BzIH0gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBUYWdzU3VnZ2VzdGlvbnMgZnJvbSAnLi9zdWJDb21wb25lbnRzL1RhZ3NTdWdnZXN0aW9ucyc7XHJcbmltcG9ydCB7IHdpdGhGb3JtQ29udGV4dCB9IGZyb20gJy4uL2Zvcm0vd2l0aEZvcm1Db250ZXh0JztcclxudmFyIGNsYXNzTmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XHJcbmltcG9ydCB7IHdpdGhUaGVtZUNvbnRleHQgfSBmcm9tICcuLi90aGVtZVByb3ZpZGVyL3dpdGhUaGVtZUNvbnRleHQnO1xyXG5pbXBvcnQgeyBQb3BwZXJQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BvcHBlci9Qb3BwZXInO1xyXG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG4vLyBNaXNjXHJcbmV4cG9ydCB0eXBlIFRhZyA9IHtcclxuICBpZDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyA9IHtcclxuICAuLi5kZWZhdWx0QmFzZVRyYW5zbGF0aW9ucyxcclxuICBhZGROZXc6ICdBZGQgbmV3JyxcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFRhZ3NUcmFuc2xhdGlvbnMgPSBQYXJ0aWFsPHR5cGVvZiBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucz47XHJcblxyXG5leHBvcnQgdHlwZSBUYWdzUHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICB0YWdzOiBUYWdbXTtcclxuICBleGlzdGluZ1RhZ3M/OiBUYWdbXTtcclxuICBmZXRjaEV4aXN0aW5nVGFncz86ICh0ZXh0OiBzdHJpbmcpID0+IFByb21pc2U8VGFnW10+O1xyXG4gIG9uVGFnc0NoYW5nZWQ6IChuZXdUYWdzOiBUYWdbXSkgPT4gdm9pZDtcclxuICBvbk5ld1RhZ0FkZGVkPzogKG5ld1RhZ05hbWU6IHN0cmluZykgPT4gUHJvbWlzZTxUYWc+O1xyXG4gIG9uVGFnQ2xpY2s/OiAodGFnOiBUYWcpID0+IHZvaWQ7XHJcbiAgc2hvd0NoaXBzPzogYm9vbGVhbjtcclxuICBhbGxvd05ldz86IGJvb2xlYW47XHJcbiAgYWRkTmV3T25CbHVyPzogYm9vbGVhbjtcclxuICB0ZXh0UHJvcHM/OiBUZXh0UHJvcHM7XHJcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xyXG4gIHJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcj86IHN0cmluZztcclxuICBtYXhUYWdzPzogbnVtYmVyO1xyXG4gIHZhbHVlTm90QWRkZWRFcnJvcj86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIG1heFRhZ3NTdXJwYXNzZWRFcnJvcj86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHNob3dTdWdnZXN0aW9ucz86IGJvb2xlYW47XHJcbiAgc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHdhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBsb2FkaW5nRGVsYXlNcz86IG51bWJlcjtcclxuICBmaWx0ZXJFeGlzdGluZ1RhZ3M/OiAodGV4dDogc3RyaW5nLCBleGlzdGluZ1RhZ3M6IFRhZ1tdKSA9PiBUYWdbXTtcclxuICBhbGxvd1NhbWVUYWdNdWx0aXBsZVRpbWVzPzogYm9vbGVhbjtcclxuICBtYXhTdWdnZXN0aW9ucz86IG51bWJlcjtcclxuICBwb3BwZXJQcm9wcz86IFBhcnRpYWw8UG9wcGVyUHJvcHM+O1xyXG4gIG1pbkxldHRlcnNUb0ZldGNoPzogbnVtYmVyO1xyXG4gIG1vYmlsZVZlcnNpb25FbmFibGVkPzogYm9vbGVhbjtcclxuICBpc0xvYWRpbmc/OiBib29sZWFuO1xyXG59ICYgQmFzZUlucHV0UHJvcHM8SFRNTElucHV0RWxlbWVudCwgVGFnc1RyYW5zbGF0aW9ucz47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhZ3NTdGF0ZSBleHRlbmRzIEJhc2VJbnB1dFN0YXRlIHtcclxuICB0ZXh0SXNGb2N1c2VkOiBib29sZWFuO1xyXG4gIHRleHRFcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdO1xyXG4gIHRleHRJc1ZhbGlkOiBib29sZWFuO1xyXG4gIHN1Z2dlc3Rpb25zVmlzaWJsZTogYm9vbGVhbjtcclxuICBmZXRjaGVkRXhpc3RpbmdUYWdzOiBUYWdbXTtcclxuICBmZXRjaGluZ0V4aXN0aW5nVGFnczogYm9vbGVhbjtcclxuICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbnR5cGUgSW5qZWN0ZWRQcm9wcyA9IHt9O1xyXG5cclxuY29uc3QgVGFnQnV0dG9uQ29tcG9uZW50OiBSZWFjdC5GQzxCdXR0b25Db21wb25lbnRQcm9wcz4gPSBwID0+IChcclxuICA8YSBjbGFzc05hbWU9e3AuY2xhc3NOYW1lfSBpZD17cC5pZH0gb25DbGljaz17cC5vbkNsaWNrfT5cclxuICAgIHtwLmNoaWxkcmVufVxyXG4gIDwvYT5cclxuKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBUYWdzUmF3IGV4dGVuZHMgQmFzZUlucHV0PFxyXG4gIFRhZ3NQcm9wcyAmIEluamVjdGVkUHJvcHMsXHJcbiAgVGFnc1N0YXRlLFxyXG4gIEhUTUxJbnB1dEVsZW1lbnQsXHJcbiAgVGFnc1RyYW5zbGF0aW9uc1xyXG4+IHtcclxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogVGFnc1Byb3BzID0ge1xyXG4gICAgLi4uQmFzZUlucHV0LmRlZmF1bHRQcm9wcyxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGNsYXNzTmFtZTogJycsXHJcbiAgICB0YWdzOiBbXSxcclxuICAgIGV4aXN0aW5nVGFnczogW10sXHJcbiAgICBtYXhUYWdzOiAxMDAwLFxyXG4gICAgb25UYWdzQ2hhbmdlZDogKCkgPT4gdW5kZWZpbmVkLFxyXG4gICAgb25OZXdUYWdBZGRlZDogbmV3VGFnTmFtZSA9PlxyXG4gICAgICBQcm9taXNlLnJlc29sdmUoeyBuYW1lOiBuZXdUYWdOYW1lLCBpZDogbmV3IERhdGUoKS5nZXRUaW1lKCkgfSksXHJcbiAgICB2YWx1ZU5vdEFkZGVkRXJyb3I6IDxzcGFuPllvdSBmb3Jnb3QgdG8gYWRkIHRhZzwvc3Bhbj4sXHJcbiAgICBtYXhUYWdzU3VycGFzc2VkRXJyb3I6IDxzcGFuPk1heGltdW0gbnVtYmVyIG9mIHRhZ3Mgc3VycGFzc2VkPC9zcGFuPixcclxuICAgIHdhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnQ6IDxzcGFuPldhaXRpbmcgZm9yIG1vcmUgaW5wdXQuLi48L3NwYW4+LFxyXG4gICAgc2hvd1N1Z2dlc3Rpb25zOiB0cnVlLFxyXG4gICAgc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50OiAnTG9hZGluZy4uLicsXHJcbiAgICBzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50OiAnTm8gZXhpc3RpbmcgdGFncy4uLicsXHJcbiAgICBsb2FkaW5nRGVsYXlNczogNTAwLFxyXG4gICAgZmlsdGVyRXhpc3RpbmdUYWdzOiAodGV4dCwgdGFncykgPT5cclxuICAgICAgdGFncy5maWx0ZXIodGFnID0+IHRhZy5uYW1lICYmIHRhZy5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh0ZXh0KSksXHJcbiAgICBtYXhTdWdnZXN0aW9uczogNSxcclxuICAgIGFkZE5ld09uQmx1cjogZmFsc2UsXHJcbiAgICB0cmFuc2xhdGlvbnM6IGRlZmF1bHRUYWdzVHJhbnNsYXRpb25zLFxyXG4gICAgbWluTGV0dGVyc1RvRmV0Y2g6IDAsXHJcbiAgICBtb2JpbGVWZXJzaW9uRW5hYmxlZDogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHRleHRSZWY6IFJlYWN0LlJlZk9iamVjdDxUZXh0UmF3PjtcclxuICBwcml2YXRlIHN1Z2dlc3Rpb25zUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xyXG4gIHByaXZhdGUgaXNNb2JpbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFRhZ3NQcm9wcyAmIEluamVjdGVkUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgIHRleHRFcnJvcnM6IFtdLFxyXG4gICAgICB0ZXh0SXNGb2N1c2VkOiBmYWxzZSxcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgZmV0Y2hpbmdFeGlzdGluZ1RhZ3M6IGZhbHNlLFxyXG4gICAgICB0ZXh0SXNWYWxpZDogZmFsc2UsXHJcbiAgICAgIGZldGNoZWRFeGlzdGluZ1RhZ3M6IFtdLFxyXG4gICAgfTtcclxuICAgIHRoaXMudGV4dFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5zdWdnZXN0aW9uc1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5oYW5kbGVDbGlja091dHNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVMZWF2ZU1vYmlsZUNsaWNrID0gdGhpcy5oYW5kbGVMZWF2ZU1vYmlsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICBpZiAocHJvcHMubW9iaWxlVmVyc2lvbkVuYWJsZWQpIHtcclxuICAgICAgdGhpcy5pc01vYmlsZSA9IHJlcXVpcmUoJ3JlYWN0LWRldmljZS1kZXRlY3QnKT8uaXNNb2JpbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZm9jdXMoKSB7XHJcbiAgICBpZiAodGhpcy50ZXh0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgdGhpcy50ZXh0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUob2xkUHJvcHM6IFRhZ3NQcm9wcyAmIEluamVjdGVkUHJvcHMpIHtcclxuICAgIGlmIChcclxuICAgICAgb2xkUHJvcHMudGFncyAhPT0gdGhpcy5wcm9wcy50YWdzIHx8XHJcbiAgICAgIG9sZFByb3BzLnZhbGlkYXRvcnMgIT09IHRoaXMucHJvcHMudmFsaWRhdG9ycyB8fFxyXG4gICAgICBvbGRQcm9wcy5jdXN0b21WYWxpZGF0b3JzICE9PSB0aGlzLnByb3BzLmN1c3RvbVZhbGlkYXRvcnMgfHxcclxuICAgICAgb2xkUHJvcHMucmVxdWlyZWQgIT09IHRoaXMucHJvcHMucmVxdWlyZWRcclxuICAgICkge1xyXG4gICAgICB0aGlzLmhhbmRsZUVycm9ycyh0aGlzLnByb3BzLnRhZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhbmRsZUxlYXZlTW9iaWxlQ2xpY2soKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdGV4dElzRm9jdXNlZDogZmFsc2UsXHJcbiAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlQ2xpY2tPdXRzaWRlKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmIChcclxuICAgICAgIXRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQgfHxcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudCkgfHxcclxuICAgICAgIXRoaXMuc3VnZ2VzdGlvbnNSZWYuY3VycmVudCB8fFxyXG4gICAgICB0aGlzLnN1Z2dlc3Rpb25zUmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5hZGROZXdPbkJsdXIgJiYgdGhpcy5zdGF0ZS52YWx1ZSkge1xyXG4gICAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHRoaXMuZ2V0U3VnZ2VzdGlvbnMoKTtcclxuICAgICAgY29uc3QgZXhpc3RpbmcgPSBzdWdnZXN0aW9ucy5maW5kKHMgPT4gcy5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgdGhpcy5vblN1Z2dlc3Rpb25TZWxlY3RlZChleGlzdGluZywgc3VnZ2VzdGlvbnMubGVuZ3RoID09PSAxKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmFsbG93TmV3KSB7XHJcbiAgICAgICAgdGhpcy5hZGROZXdUYWcoKTtcclxuICAgICAgfVxyXG4gICAgfSAvKiBlbHNlIGlmICh0aGlzLnN0YXRlLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycgfSk7XHJcbiAgICB9Ki9cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKGRlZmF1bHRUYWdzVHJhbnNsYXRpb25zKTtcclxuICAgIGNvbnN0IHRleHRQcm9wcyA9IHRoaXMucHJvcHMudGV4dFByb3BzID8gdGhpcy5wcm9wcy50ZXh0UHJvcHMgOiB7fTtcclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5nZXRTdWdnZXN0aW9ucygpO1xyXG4gICAgY29uc3Qgc2hvd01vYmlsZVZlcnNpb24gPVxyXG4gICAgICB0aGlzLnByb3BzLm1vYmlsZVZlcnNpb25FbmFibGVkICYmXHJcbiAgICAgIHRoaXMuaXNNb2JpbGUgJiZcclxuICAgICAgKHRoaXMuc3RhdGUudGV4dElzRm9jdXNlZCB8fCB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSk7XHJcbiAgICBjb25zdCBMZWF2ZU1vYmlsZUJ1dHRvbiA9IHNob3dNb2JpbGVWZXJzaW9uID8gKFxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fbGVhdmVNb2JpbGVUYWdzQnV0dG9uIGxpbmUtaGVpZ2h0LS0wXCJcclxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUxlYXZlTW9iaWxlQ2xpY2t9XHJcbiAgICAgICAgbm9TaGFkb3c9e3RydWV9XHJcbiAgICAgICAgdW5vYnRydXNpdmU9e3RydWV9XHJcbiAgICAgID5cclxuICAgICAgICA8TGVmdEFycm93SWNvbiAvPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICkgOiAoXHJcbiAgICAgIHVuZGVmaW5lZFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHNob3dJbnB1dCA9IEJvb2xlYW4oXHJcbiAgICAgICghdGhpcy5wcm9wcy5tYXhUYWdzIHx8XHJcbiAgICAgICAgdGhpcy5wcm9wcy5tYXhUYWdzID4gKHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoKSkgJiZcclxuICAgICAgICAhdGhpcy5wcm9wcy5yZWFkT25seVxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxQb3J0YWwgY29udGFpbmVyPXtkb2N1bWVudC5ib2R5fSBkaXNhYmxlUG9ydGFsPXshc2hvd01vYmlsZVZlcnNpb259PlxyXG4gICAgICAgIDxJbnB1dEdyb3VwIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSB0b29sdGlwPXt0aGlzLnByb3BzLnRvb2x0aXB9PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAgICdpbnB1dF9fYmFzZSB0YWdzLWlucHV0JyxcclxuICAgICAgICAgICAgICB0aGlzLmdldFZhbGlkYXRpb25DbGFzcygpLFxyXG4gICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICd0YWdzLWlucHV0LS1yZWFkT25seSc6IHRoaXMucHJvcHMucmVhZE9ubHksXHJcbiAgICAgICAgICAgICAgICAndGFncy1pbnB1dC0taGFzUGxhY2Vob2xkZXInOlxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRleHRQcm9wcyAmJiB0aGlzLnByb3BzLnRleHRQcm9wcy5wbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgICAgICd0YWdzLWlucHV0LS1tb2JpbGUnOiBzaG93TW9iaWxlVmVyc2lvbixcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHJlZj17dGhpcy5jb250YWluZXJSZWZ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtzaG93TW9iaWxlVmVyc2lvbiAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X19tb2JpbGVCYWNrZHJvcFwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnc19fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgIHshc2hvd0lucHV0ICYmIHNob3dNb2JpbGVWZXJzaW9uICYmIExlYXZlTW9iaWxlQnV0dG9ufVxyXG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRhZ3MgJiYgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3RhZ19fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50YWdzLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUYWcoaXRlbSwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93SW5wdXQgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICd0YWdzLWlucHV0X190YWdzX193cmFwcGVyICcgK1xyXG4gICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5yZWFkT25seSA/ICdmaWxsZWQgJyA6ICcnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIHNob3dDbGVhckJ1dHRvbj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgey4uLnRleHRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctdGV4dC1pbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICByZWY9e3RoaXMudGV4dFJlZn1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggPiAwID8gZmFsc2UgOiB0aGlzLnByb3BzLnJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAndGFncy1pbnB1dF9fdGV4dC1pbnB1dCAnICtcclxuICAgICAgICAgICAgICAgICAgICAodGV4dFByb3BzLmNsYXNzTmFtZSA/IHRleHRQcm9wcy5jbGFzc05hbWUgOiAnJylcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3duKHN1Z2dlc3Rpb25zKX1cclxuICAgICAgICAgICAgICAgICAgb25FcnJvcnNDaGFuZ2VkPXt0aGlzLm9uVGV4dEVycm9yc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25Gb2N1c31cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRPbmx5fVxyXG4gICAgICAgICAgICAgICAgICBzaG93VmFsaWRhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIGlnbm9yZUNvbnRleHQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e3RoaXMucHJvcHMudmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgICAgY3VzdG9tVmFsaWRhdG9ycz17dGhpcy5wcm9wcy5jdXN0b21WYWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgICBiZWZvcmU9e0xlYXZlTW9iaWxlQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSAmJiB0aGlzLnByb3BzLnNob3dTdWdnZXN0aW9ucyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUYWdzU3VnZ2VzdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRleHQtaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyUmVmPXt0aGlzLnN1Z2dlc3Rpb25zUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXt0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0aGlzLnByb3BzLmFsbG93TmV3fVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj17dGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmZldGNoaW5nRXhpc3RpbmdUYWdzIHx8IHRoaXMucHJvcHMuaXNMb2FkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmdDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZT17dGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgRW1wdHlDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICBXYWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMud2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc1dhaXRpbmdGb3JNb3JlSW5wdXQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZS5sZW5ndGggPCB0aGlzLnByb3BzLm1pbkxldHRlcnNUb0ZldGNoXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M9e3N1Z2dlc3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0ZWQ9e3RoaXMub25TdWdnZXN0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkTmV3VGFnQ29tcG9uZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWxsb3dOZXcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFsdWUgIT09ICcnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMucHJvcHMuZXhpc3RpbmdUYWdzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmV4aXN0aW5nVGFncy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gZS5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBlLm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGV4dElzVmFsaWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy1hZGQtbmV3LWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fc3VnZ2VzdGlvbiB0YWdzLWlucHV0X19hZGQtbmV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZE5ld1RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMuYWRkTmV3fSBcInt0aGlzLnN0YXRlLnZhbHVlfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwb3BwZXJQcm9wcz17dGhpcy5wcm9wcy5wb3BwZXJQcm9wc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckRlZmF1bHRWYWxpZGF0aW9uKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsICYmIChcclxuICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFsdWUgIT09ICcnIHx8XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGV4dElzRm9jdXNlZCB8fFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlYWRPbmx5IHx8XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggPj0gdGhpcy5wcm9wcy5tYXhUYWdzIHx8XHJcbiAgICAgICAgICAgICAgICAgIHNob3dNb2JpbGVWZXJzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnbGFiZWwtLWZvY3VzZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckxhYmVsKCl9XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgPC9Qb3J0YWw+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblRleHRFcnJvcnNDaGFuZ2VkID0gKHRleHRFcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHsgdGV4dEVycm9ycyB9KSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuXHJcbiAgcHJpdmF0ZSBvbkZvY3VzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHsgdGV4dElzRm9jdXNlZDogdHJ1ZSwgc3VnZ2VzdGlvbnNWaXNpYmxlOiB0cnVlLCB0b3VjaGVkOiB0cnVlIH0pLFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncyh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgIGNvbnN0IHNob3dNb2JpbGVWZXJzaW9uID1cclxuICAgICAgdGhpcy5wcm9wcy5tb2JpbGVWZXJzaW9uRW5hYmxlZCAmJlxyXG4gICAgICB0aGlzLmlzTW9iaWxlICYmXHJcbiAgICAgICh0aGlzLnN0YXRlLnRleHRJc0ZvY3VzZWQgfHwgdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUpO1xyXG4gICAgaWYgKFxyXG4gICAgICAhc2hvd01vYmlsZVZlcnNpb24gJiZcclxuICAgICAgdGhpcy5wcm9wcy5tb2JpbGVWZXJzaW9uRW5hYmxlZCAmJlxyXG4gICAgICB0aGlzLmlzTW9iaWxlXHJcbiAgICApIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRleHRSZWYuY3VycmVudD8uZm9jdXMoKSwgMTAwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uS2V5RG93biA9IChzdWdnZXN0aW9uczogVGFnW10pID0+IGFzeW5jIChcclxuICAgIGU6IFJlYWN0LktleWJvYXJkRXZlbnRcclxuICApID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ1RhYicpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgIGUua2V5ID09PSAnRW50ZXInICYmXHJcbiAgICAgICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyB8fFxyXG4gICAgICAgIHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICE9PSB1bmRlZmluZWQpICYmXHJcbiAgICAgIHRoaXMuc3RhdGUudGV4dEVycm9ycy5sZW5ndGggPT09IDBcclxuICAgICkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nVGFnID1cclxuICAgICAgICB0aGlzLnByb3BzLmV4aXN0aW5nVGFncyAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzLmZpbmQoZXQgPT4gZXQubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKFxyXG4gICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmNvbmNhdChzdWdnZXN0aW9uc1t0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbl0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnLCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGV4aXN0aW5nVGFnKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKHRoaXMucHJvcHMudGFncy5jb25jYXQoZXhpc3RpbmdUYWcpKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5hbGxvd05ldykge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYWRkTmV3VGFnKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHN1Z2dlc3Rpb25zLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUpIHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICBjb25zdCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gMFxyXG4gICAgICAgICAgICA/IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAtIDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICBjb25zdCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiArIDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGFkZE5ld1RhZyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhZyA9IGF3YWl0IHRoaXMucHJvcHMub25OZXdUYWdBZGRlZCh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgIGlmIChuZXdUYWcpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKFxyXG4gICAgICAgIHRoaXMucHJvcHMudGFncyA/IHRoaXMucHJvcHMudGFncy5jb25jYXQobmV3VGFnKSA6IFtuZXdUYWddXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnLCB0ZXh0RXJyb3JzOiBbXSB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25TdWdnZXN0aW9uU2VsZWN0ZWQgPSAodGFnOiBUYWcsIGxhc3RTZWxlY3RlZDogYm9vbGVhbikgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFncyA9IHRoaXMucHJvcHMudGFncy5jb25jYXQodGFnKTtcclxuICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZChuZXdUYWdzKTtcclxuICAgIGNvbnN0IGlzTWF4ID0gbmV3VGFncy5sZW5ndGggPT09IHRoaXMucHJvcHMubWF4VGFncztcclxuICAgIGNvbnN0IGZpbmFsVmFsdWUgPVxyXG4gICAgICAhdGhpcy5wcm9wcy5hbGxvd05ldyAmJiAhaXNNYXggJiYgIWxhc3RTZWxlY3RlZCA/IHRoaXMuc3RhdGUudmFsdWUgOiAnJztcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZTogZmluYWxWYWx1ZSxcclxuICAgICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGlzTWF4ID8gZmFsc2UgOiB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSxcclxuICAgICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCxcclxuICAgICAgICB0ZXh0RXJyb3JzOiBbXSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICF0aGlzLnByb3BzLm1heFRhZ3MgfHxcclxuICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggKyAxIDwgdGhpcy5wcm9wcy5tYXhUYWdzXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKGZpbmFsVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25CbHVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHRleHRJc0ZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25UZXh0Q2hhbmdlZCA9IChcclxuICAgIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LFxyXG4gICAgaXNWYWxpZDogYm9vbGVhblxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7XHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgaXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICB0ZXh0SXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IHRydWUsXHJcbiAgICAgIH0pLFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMgPSAodGFnczogVGFnW10gPSB0aGlzLnByb3BzLnRhZ3MpID0+IHtcclxuICAgIGxldCBlcnJvcnMgPSB0aGlzLmdldEVycm9ycyh0YWdzKTtcclxuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldEludmFsaWQoZXJyb3JzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsaWQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGdldEVycm9ycyh0YWdzOiBUYWdbXSkge1xyXG4gICAgbGV0IGVycm9ycyA9IFtdO1xyXG4gICAgaWYgKHRhZ3MubGVuZ3RoIDwgdGhpcy5wcm9wcy5tYXhUYWdzKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5zdGF0ZS50ZXh0RXJyb3JzKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyAmJiB0YWdzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLnJlcXVpcmVkKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQoXHJcbiAgICAgICAgdGhpcy5nZXRUcmFuc2xhdGlvbnModGhpcy5wcm9wcy50cmFuc2xhdGlvbnMpLnJlcXVpcmVkXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSAmJiB0aGlzLnByb3BzLmFsbG93TmV3ICYmICF0aGlzLnN0YXRlLnRleHRJc0ZvY3VzZWQpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnByb3BzLnZhbHVlTm90QWRkZWRFcnJvcik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5tYXhUYWdzIDwgKHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoKSkge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMucHJvcHMubWF4VGFnc1N1cnBhc3NlZEVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcnMuZmlsdGVyKGkgPT4gaSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZldGNoRXhpc3RpbmdUYWdzKHN0YXJ0c1dpdGg6IHN0cmluZyA9ICcnKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hFeGlzdGluZ1RhZ3MgJiZcclxuICAgICAgc3RhcnRzV2l0aC5sZW5ndGggPj0gdGhpcy5wcm9wcy5taW5MZXR0ZXJzVG9GZXRjaFxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGZldGNoaW5nRXhpc3RpbmdUYWdzOiB0cnVlIH0pKSxcclxuICAgICAgICB0aGlzLnByb3BzLmxvYWRpbmdEZWxheU1zXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hFeGlzdGluZ1RhZ3Moc3RhcnRzV2l0aCkudGhlbihmZXRjaGVkRXhpc3RpbmdUYWdzID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcclxuICAgICAgICAgIGZldGNoZWRFeGlzdGluZ1RhZ3MsXHJcbiAgICAgICAgICBmZXRjaGluZ0V4aXN0aW5nVGFnczogZmFsc2UsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U3VnZ2VzdGlvbnMoKSB7XHJcbiAgICBjb25zdCBleGlzdGluZ1RhZ3M6IFRhZ1tdID0gW11cclxuICAgICAgLmNvbmNhdCh0aGlzLnByb3BzLmV4aXN0aW5nVGFncyA/IHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzIDogW10pXHJcbiAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzID8gdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzIDogW11cclxuICAgICAgKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkVGFncyA9IHRoaXMucHJvcHMuZmlsdGVyRXhpc3RpbmdUYWdzKFxyXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlID8gdGhpcy5zdGF0ZS52YWx1ZS50b0xvd2VyQ2FzZSgpIDogJycsXHJcbiAgICAgIGV4aXN0aW5nVGFnc1xyXG4gICAgKTtcclxuICAgIGxldCBzdWdnZXN0aW9ucyA9IGZpbHRlcmVkVGFnc1xyXG4gICAgICAuZmlsdGVyKFxyXG4gICAgICAgIHRhZyA9PlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5hbGxvd1NhbWVUYWdNdWx0aXBsZVRpbWVzIHx8XHJcbiAgICAgICAgICAhdGhpcy5wcm9wcy50YWdzLnNvbWUodCA9PiB0LmlkID09PSB0YWcuaWQpXHJcbiAgICAgIClcclxuICAgICAgLnNsaWNlKDAsIHRoaXMucHJvcHMubWF4U3VnZ2VzdGlvbnMpO1xyXG4gICAgcmV0dXJuIHN1Z2dlc3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJUYWcodGFnOiBUYWcsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGJvZHkgPSAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge3RhZy5uYW1lfVxyXG4gICAgICAgIHshdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRhZy0nICsgaW5kZXgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIGNpcmN1bGFyPXt0cnVlfVxyXG4gICAgICAgICAgICBibGFuaz17dHJ1ZX1cclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy50YWdSZW1vdmVDbGljayh0YWcpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xIHRyYW5zZm9ybS1yb3RhdGUtLTQ1IGxpbmUtaGVpZ2h0LS0wIHAtMFwiXHJcbiAgICAgICAgICAgIENvbXBvbmVudD17VGFnQnV0dG9uQ29tcG9uZW50fVxyXG4gICAgICAgICAgICBwcmV2ZW50c0RlZmF1bHQ9e2ZhbHNlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGx1c0ljb24gLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3RhZ3MtaW5wdXRfX3RhZycsIHtcclxuICAgICAgJ3RhZ3MtaW5wdXRfX3RhZy1jaGlwJzogdGhpcy5wcm9wcy5zaG93Q2hpcHMsXHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uVGFnQ2xpY2spIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRhZ0NsaWNrKHRhZyl9XHJcbiAgICAgICAgICBzbWFsbD17dHJ1ZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Ym9keX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy50YWdDbGljayh0YWcpfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAge2JvZHl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdGFnQ2xpY2sgPSAodGFnOiBUYWcpID0+ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25UYWdDbGljayAmJiB0aGlzLnByb3BzLm9uVGFnQ2xpY2sodGFnKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHRhZ1JlbW92ZUNsaWNrID0gKHRhZzogVGFnKSA9PiAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBuZXdUYWdzID0gdGhpcy5wcm9wcy50YWdzLmZpbHRlcihzdiA9PiBzdi5pZCAhPT0gdGFnLmlkKTtcclxuICAgIC8qaWYgKG5ld1RhZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5mb2N1cygpLCA1MCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgIH0pOyovXHJcbiAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKG5ld1RhZ3MpO1xyXG4gICAgdGhpcy5oYW5kbGVFcnJvcnMobmV3VGFncyk7XHJcbiAgICAvLyB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ3MgPSB3aXRoVGhlbWVDb250ZXh0PFRhZ3NQcm9wcywgSW5zdGFuY2VUeXBlPHR5cGVvZiBUYWdzUmF3Pj4oXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuICB3aXRoRm9ybUNvbnRleHQ8VGFnc1Byb3BzPihUYWdzUmF3KSxcclxuICAndGFncydcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=