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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9UYWdzLnRzeCJdLCJuYW1lcyI6WyJkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyIsImRlZmF1bHRCYXNlVHJhbnNsYXRpb25zIiwiYWRkTmV3IiwiVGFnc1JhdyIsInByb3BzIiwidGV4dFJlZiIsInN1Z2dlc3Rpb25zUmVmIiwiaXNNb2JpbGUiLCJvblRleHRFcnJvcnNDaGFuZ2VkIiwidGV4dEVycm9ycyIsInNldFN0YXRlIiwiaGFuZGxlRXJyb3JzIiwib25Gb2N1cyIsInRleHRJc0ZvY3VzZWQiLCJzdWdnZXN0aW9uc1Zpc2libGUiLCJ0b3VjaGVkIiwiZmV0Y2hFeGlzdGluZ1RhZ3MiLCJzdGF0ZSIsInZhbHVlIiwic2hvd01vYmlsZVZlcnNpb24iLCJtb2JpbGVWZXJzaW9uRW5hYmxlZCIsInNldFRpbWVvdXQiLCJjdXJyZW50IiwiZm9jdXMiLCJvbktleURvd24iLCJzdWdnZXN0aW9ucyIsImUiLCJrZXkiLCJwcmVzZWxlY3RlZFN1Z2dlc3Rpb24iLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImV4aXN0aW5nVGFnIiwiZXhpc3RpbmdUYWdzIiwiZmluZCIsImV0IiwibmFtZSIsIm9uVGFnc0NoYW5nZWQiLCJ0YWdzIiwiY29uY2F0IiwiYWxsb3dOZXciLCJhZGROZXdUYWciLCJvbk5ld1RhZ0FkZGVkIiwibmV3VGFnIiwib25TdWdnZXN0aW9uU2VsZWN0ZWQiLCJ0YWciLCJuZXdUYWdzIiwiaXNNYXgiLCJtYXhUYWdzIiwiZmluYWxWYWx1ZSIsIm9uQmx1ciIsIm9uVGV4dENoYW5nZWQiLCJpc1ZhbGlkIiwidGFyZ2V0IiwidGV4dElzVmFsaWQiLCJlcnJvcnMiLCJnZXRFcnJvcnMiLCJzZXRJbnZhbGlkIiwic2V0VmFsaWQiLCJ0YWdDbGljayIsIm9uVGFnQ2xpY2siLCJ0YWdSZW1vdmVDbGljayIsImZpbHRlciIsInN2IiwiaWQiLCJmZXRjaGluZ0V4aXN0aW5nVGFncyIsImZldGNoZWRFeGlzdGluZ1RhZ3MiLCJSZWFjdCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImJpbmQiLCJoYW5kbGVMZWF2ZU1vYmlsZUNsaWNrIiwicmVxdWlyZSIsIm9sZFByb3BzIiwidmFsaWRhdG9ycyIsImN1c3RvbVZhbGlkYXRvcnMiLCJyZXF1aXJlZCIsImNvbnRhaW5lclJlZiIsImNvbnRhaW5zIiwiYWRkTmV3T25CbHVyIiwiZ2V0U3VnZ2VzdGlvbnMiLCJleGlzdGluZyIsInMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHJhbnNsYXRpb25zIiwiZ2V0VHJhbnNsYXRpb25zIiwidGV4dFByb3BzIiwiTGVhdmVNb2JpbGVCdXR0b24iLCJzaG93SW5wdXQiLCJCb29sZWFuIiwicmVhZE9ubHkiLCJib2R5IiwidGl0bGUiLCJ0b29sdGlwIiwiY2xhc3NOYW1lcyIsImdldFZhbGlkYXRpb25DbGFzcyIsImNsYXNzTmFtZSIsInBsYWNlaG9sZGVyIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmVuZGVyVGFnIiwicmVhZG9ubHlFbXB0eVBsYWNlaG9sZGVyIiwic2hvd1N1Z2dlc3Rpb25zIiwic3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50Iiwic3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudCIsIndhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnQiLCJtaW5MZXR0ZXJzVG9GZXRjaCIsInBvcHBlclByb3BzIiwicmVuZGVyRGVmYXVsdFZhbGlkYXRpb24iLCJsYWJlbCIsInJlbmRlckxhYmVsIiwidmFsdWVOb3RBZGRlZEVycm9yIiwibWF4VGFnc1N1cnBhc3NlZEVycm9yIiwiaSIsInN0YXJ0c1dpdGgiLCJ0aW1lciIsImxvYWRpbmdEZWxheU1zIiwidGhlbiIsImNsZWFyVGltZW91dCIsImZpbHRlcmVkVGFncyIsImZpbHRlckV4aXN0aW5nVGFncyIsInRvTG93ZXJDYXNlIiwiYWxsb3dTYW1lVGFnTXVsdGlwbGVUaW1lcyIsInNvbWUiLCJ0Iiwic2xpY2UiLCJtYXhTdWdnZXN0aW9ucyIsInRvU3RyaW5nIiwicCIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsInNob3dDaGlwcyIsIkJhc2VJbnB1dCIsImRlZmF1bHRQcm9wcyIsImRpc2FibGVkIiwibmV3VGFnTmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiRGF0ZSIsImdldFRpbWUiLCJ0ZXh0IiwiVGFncyIsIndpdGhUaGVtZUNvbnRleHQiLCJ3aXRoRm9ybUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQU1PLElBQU1BLHVCQUF1QixxQkFDL0JDLDZFQUQrQjtBQUVsQ0MsUUFBTSxFQUFFO0FBRjBCLEVBQTdCO0FBa0RBLElBQU1DLE9BQWI7QUFBQTtBQUFBO0FBQUE7O0FBb0NFLG1CQUFZQyxLQUFaLEVBQThDO0FBQUE7O0FBQUE7O0FBQzVDLGlGQUFNQSxLQUFOO0FBRDRDLFVBSnRDQyxPQUlzQztBQUFBLFVBSHRDQyxjQUdzQztBQUFBLFVBRnRDQyxRQUVzQyxHQUZsQixLQUVrQjs7QUFBQSxVQThQdENDLG1CQTlQc0MsR0E4UGhCLFVBQUNDLFVBQUQ7QUFBQSxhQUM1QixNQUFLQyxRQUFMLENBQ0U7QUFBQSxlQUFPO0FBQUVELG9CQUFVLEVBQVZBO0FBQUYsU0FBUDtBQUFBLE9BREYsRUFFRTtBQUFBLGVBQU0sTUFBS0UsWUFBTCxFQUFOO0FBQUEsT0FGRixDQUQ0QjtBQUFBLEtBOVBnQjs7QUFBQSxVQW9RdENDLE9BcFFzQyxHQW9RNUIsWUFBTTtBQUN0QixZQUFLRixRQUFMLENBQ0U7QUFBQSxlQUFPO0FBQUVHLHVCQUFhLEVBQUUsSUFBakI7QUFBdUJDLDRCQUFrQixFQUFFLElBQTNDO0FBQWlEQyxp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dUI7QUFBQSxHO0FBRXpCNUIsb0JBQWtCLEVBQUUsMEY7QUFDcEJDLHVCQUFxQixFQUFFLHFHO0FBQ3ZCUCw4QkFBNEIsRUFBRSw4RjtBQUM5QkgsaUJBQWUsRUFBRSxJO0FBQ2pCQyw2QkFBMkIsRUFBRSxZO0FBQzdCQywyQkFBeUIsRUFBRSxxQjtBQUMzQlksZ0JBQWMsRUFBRSxHO0FBQ2hCSSxvQkFBa0IsRUFBRSw0QkFBQ29CLElBQUQsRUFBT3hHLElBQVA7QUFBQSxXQUNsQkEsSUFBSSxDQUFDd0IsTUFBTCxDQUFZLFVBQUFqQixHQUFHO0FBQUEsYUFBSUEsR0FBRyxDQUFDVCxJQUFKLElBQVlTLEdBQUcsQ0FBQ1QsSUFBSixDQUFTdUYsV0FBVCxHQUF1QlAsVUFBdkIsQ0FBa0MwQixJQUFsQyxDQUFoQjtBQUFBLEtBQWYsQ0FEa0I7QUFBQSxHO0FBRXBCZCxnQkFBYyxFQUFFLEM7QUFDaEJsRCxjQUFZLEVBQUUsSztBQUNkTyxjQUFZLEVBQUV0Rix1QjtBQUNkNkcsbUJBQWlCLEVBQUUsQztBQUNuQnpGLHNCQUFvQixFQUFFOztBQXdoQm5CLElBQU00SCxJQUFJLEdBQUdDLHlGQUFnQixFQUNsQztBQUNBQyw2RUFBZSxDQUFZL0ksT0FBWixDQUZtQixFQUdsQyxNQUhrQyxDQUE3QjtlQU1RNkksSTtBQUFBOzs7Ozs7Ozs7OzBCQTdtQkZoSix1QjswQkFrREFHLE87MEJBcWpCQTZJLEkiLCJmaWxlIjoiYTBhYWNjZC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWJzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW5wdXRHcm91cCB9IGZyb20gJy4uL2lucHV0R3JvdXAvSW5wdXRHcm91cCc7XHJcbmltcG9ydCB7IFRleHQsIFRleHRQcm9wcywgVGV4dFJhdyB9IGZyb20gJy4uL3RleHQvVGV4dCc7XHJcbmltcG9ydCAqIGFzIFBsdXNJY29uIGZyb20gJ21hdGVyaWFsLWRlc2lnbi1pY29ucy9jb250ZW50L3N2Zy9wcm9kdWN0aW9uL2ljX2FkZF9jaXJjbGVfb3V0bGluZV8yNHB4LnN2Zyc7XHJcbmltcG9ydCAqIGFzIExlZnRBcnJvd0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL25hdmlnYXRpb24vc3ZnL3Byb2R1Y3Rpb24vaWNfYXJyb3dfYmFja18yNHB4LnN2Zyc7XHJcbmltcG9ydCB7XHJcbiAgQmFzZUlucHV0UHJvcHMsXHJcbiAgQmFzZUlucHV0U3RhdGUsXHJcbiAgQmFzZUlucHV0LFxyXG4gIFZhbGlkYXRpb25FcnJvcixcclxuICBkZWZhdWx0QmFzZVRyYW5zbGF0aW9ucyxcclxufSBmcm9tICcuLi9iYXNlL2lucHV0L0Jhc2VJbnB1dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgVGFnc1N1Z2dlc3Rpb25zIGZyb20gJy4vc3ViQ29tcG9uZW50cy9UYWdzU3VnZ2VzdGlvbnMnO1xyXG5pbXBvcnQgeyB3aXRoRm9ybUNvbnRleHQgfSBmcm9tICcuLi9mb3JtL3dpdGhGb3JtQ29udGV4dCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB3aXRoVGhlbWVDb250ZXh0IH0gZnJvbSAnLi4vdGhlbWVQcm92aWRlci93aXRoVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgUG9wcGVyUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXIvUG9wcGVyJztcclxuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuLy8gTWlzY1xyXG5leHBvcnQgdHlwZSBUYWcgPSB7XHJcbiAgaWQ6IG51bWJlciB8IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdFRhZ3NUcmFuc2xhdGlvbnMgPSB7XHJcbiAgLi4uZGVmYXVsdEJhc2VUcmFuc2xhdGlvbnMsXHJcbiAgYWRkTmV3OiAnQWRkIG5ldycsXHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBUYWdzVHJhbnNsYXRpb25zID0gUGFydGlhbDx0eXBlb2YgZGVmYXVsdFRhZ3NUcmFuc2xhdGlvbnM+O1xyXG5cclxuZXhwb3J0IHR5cGUgVGFnc1Byb3BzID0ge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgdGFnczogVGFnW107XHJcbiAgZXhpc3RpbmdUYWdzPzogVGFnW107XHJcbiAgZmV0Y2hFeGlzdGluZ1RhZ3M/OiAodGV4dDogc3RyaW5nKSA9PiBQcm9taXNlPFRhZ1tdPjtcclxuICBvblRhZ3NDaGFuZ2VkOiAobmV3VGFnczogVGFnW10pID0+IHZvaWQ7XHJcbiAgb25OZXdUYWdBZGRlZD86IChuZXdUYWdOYW1lOiBzdHJpbmcpID0+IFByb21pc2U8VGFnPjtcclxuICBvblRhZ0NsaWNrPzogKHRhZzogVGFnKSA9PiB2b2lkO1xyXG4gIHNob3dDaGlwcz86IGJvb2xlYW47XHJcbiAgYWxsb3dOZXc/OiBib29sZWFuO1xyXG4gIGFkZE5ld09uQmx1cj86IGJvb2xlYW47XHJcbiAgdGV4dFByb3BzPzogVGV4dFByb3BzO1xyXG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcclxuICByZWFkb25seUVtcHR5UGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgbWF4VGFncz86IG51bWJlcjtcclxuICB2YWx1ZU5vdEFkZGVkRXJyb3I/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBtYXhUYWdzU3VycGFzc2VkRXJyb3I/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBzaG93U3VnZ2VzdGlvbnM/OiBib29sZWFuO1xyXG4gIHN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICB3YWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgbG9hZGluZ0RlbGF5TXM/OiBudW1iZXI7XHJcbiAgZmlsdGVyRXhpc3RpbmdUYWdzPzogKHRleHQ6IHN0cmluZywgZXhpc3RpbmdUYWdzOiBUYWdbXSkgPT4gVGFnW107XHJcbiAgYWxsb3dTYW1lVGFnTXVsdGlwbGVUaW1lcz86IGJvb2xlYW47XHJcbiAgbWF4U3VnZ2VzdGlvbnM/OiBudW1iZXI7XHJcbiAgcG9wcGVyUHJvcHM/OiBQYXJ0aWFsPFBvcHBlclByb3BzPjtcclxuICBtaW5MZXR0ZXJzVG9GZXRjaD86IG51bWJlcjtcclxuICBtb2JpbGVWZXJzaW9uRW5hYmxlZD86IGJvb2xlYW47XHJcbn0gJiBCYXNlSW5wdXRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCBUYWdzVHJhbnNsYXRpb25zPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFnc1N0YXRlIGV4dGVuZHMgQmFzZUlucHV0U3RhdGUge1xyXG4gIHRleHRJc0ZvY3VzZWQ6IGJvb2xlYW47XHJcbiAgdGV4dEVycm9yczogVmFsaWRhdGlvbkVycm9yW107XHJcbiAgdGV4dElzVmFsaWQ6IGJvb2xlYW47XHJcbiAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBib29sZWFuO1xyXG4gIGZldGNoZWRFeGlzdGluZ1RhZ3M6IFRhZ1tdO1xyXG4gIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBib29sZWFuO1xyXG4gIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj86IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBJbmplY3RlZFByb3BzID0ge307XHJcblxyXG5leHBvcnQgY2xhc3MgVGFnc1JhdyBleHRlbmRzIEJhc2VJbnB1dDxcclxuICBUYWdzUHJvcHMgJiBJbmplY3RlZFByb3BzLFxyXG4gIFRhZ3NTdGF0ZSxcclxuICBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIFRhZ3NUcmFuc2xhdGlvbnNcclxuPiB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFRhZ3NQcm9wcyA9IHtcclxuICAgIC4uLkJhc2VJbnB1dC5kZWZhdWx0UHJvcHMsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBjbGFzc05hbWU6ICcnLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBleGlzdGluZ1RhZ3M6IFtdLFxyXG4gICAgbWF4VGFnczogMTAwMCxcclxuICAgIG9uVGFnc0NoYW5nZWQ6ICgpID0+IHVuZGVmaW5lZCxcclxuICAgIG9uTmV3VGFnQWRkZWQ6IG5ld1RhZ05hbWUgPT5cclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKHsgbmFtZTogbmV3VGFnTmFtZSwgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH0pLFxyXG4gICAgdmFsdWVOb3RBZGRlZEVycm9yOiA8c3Bhbj5Zb3UgZm9yZ290IHRvIGFkZCB0YWc8L3NwYW4+LFxyXG4gICAgbWF4VGFnc1N1cnBhc3NlZEVycm9yOiA8c3Bhbj5NYXhpbXVtIG51bWJlciBvZiB0YWdzIHN1cnBhc3NlZDwvc3Bhbj4sXHJcbiAgICB3YWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50OiA8c3Bhbj5XYWl0aW5nIGZvciBtb3JlIGlucHV0Li4uPC9zcGFuPixcclxuICAgIHNob3dTdWdnZXN0aW9uczogdHJ1ZSxcclxuICAgIHN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudDogJ0xvYWRpbmcuLi4nLFxyXG4gICAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudDogJ05vIGV4aXN0aW5nIHRhZ3MuLi4nLFxyXG4gICAgbG9hZGluZ0RlbGF5TXM6IDUwMCxcclxuICAgIGZpbHRlckV4aXN0aW5nVGFnczogKHRleHQsIHRhZ3MpID0+XHJcbiAgICAgIHRhZ3MuZmlsdGVyKHRhZyA9PiB0YWcubmFtZSAmJiB0YWcubmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgodGV4dCkpLFxyXG4gICAgbWF4U3VnZ2VzdGlvbnM6IDUsXHJcbiAgICBhZGROZXdPbkJsdXI6IGZhbHNlLFxyXG4gICAgdHJhbnNsYXRpb25zOiBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyxcclxuICAgIG1pbkxldHRlcnNUb0ZldGNoOiAwLFxyXG4gICAgbW9iaWxlVmVyc2lvbkVuYWJsZWQ6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSB0ZXh0UmVmOiBSZWFjdC5SZWZPYmplY3Q8VGV4dFJhdz47XHJcbiAgcHJpdmF0ZSBzdWdnZXN0aW9uc1JlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcclxuICBwcml2YXRlIGlzTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBUYWdzUHJvcHMgJiBJbmplY3RlZFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICB0ZXh0RXJyb3JzOiBbXSxcclxuICAgICAgdGV4dElzRm9jdXNlZDogZmFsc2UsXHJcbiAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBmYWxzZSxcclxuICAgICAgdGV4dElzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICBmZXRjaGVkRXhpc3RpbmdUYWdzOiBbXSxcclxuICAgIH07XHJcbiAgICB0aGlzLnRleHRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuc3VnZ2VzdGlvbnNSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlID0gdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlTGVhdmVNb2JpbGVDbGljayA9IHRoaXMuaGFuZGxlTGVhdmVNb2JpbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgaWYgKHByb3BzLm1vYmlsZVZlcnNpb25FbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSByZXF1aXJlKCdyZWFjdC1kZXZpY2UtZGV0ZWN0Jyk/LmlzTW9iaWxlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvY3VzKCkge1xyXG4gICAgaWYgKHRoaXMudGV4dFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHRoaXMudGV4dFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKG9sZFByb3BzOiBUYWdzUHJvcHMgJiBJbmplY3RlZFByb3BzKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG9sZFByb3BzLnRhZ3MgIT09IHRoaXMucHJvcHMudGFncyB8fFxyXG4gICAgICBvbGRQcm9wcy52YWxpZGF0b3JzICE9PSB0aGlzLnByb3BzLnZhbGlkYXRvcnMgfHxcclxuICAgICAgb2xkUHJvcHMuY3VzdG9tVmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy5jdXN0b21WYWxpZGF0b3JzIHx8XHJcbiAgICAgIG9sZFByb3BzLnJlcXVpcmVkICE9PSB0aGlzLnByb3BzLnJlcXVpcmVkXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5oYW5kbGVFcnJvcnModGhpcy5wcm9wcy50YWdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVMZWF2ZU1vYmlsZUNsaWNrKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHRleHRJc0ZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhbmRsZUNsaWNrT3V0c2lkZShlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICF0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50IHx8XHJcbiAgICAgIHRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpIHx8XHJcbiAgICAgICF0aGlzLnN1Z2dlc3Rpb25zUmVmLmN1cnJlbnQgfHxcclxuICAgICAgdGhpcy5zdWdnZXN0aW9uc1JlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMuYWRkTmV3T25CbHVyICYmIHRoaXMuc3RhdGUudmFsdWUpIHtcclxuICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB0aGlzLmdldFN1Z2dlc3Rpb25zKCk7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gc3VnZ2VzdGlvbnMuZmluZChzID0+IHMubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgIGlmIChleGlzdGluZykge1xyXG4gICAgICAgIHRoaXMub25TdWdnZXN0aW9uU2VsZWN0ZWQoZXhpc3RpbmcpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuYWxsb3dOZXcpIHtcclxuICAgICAgICB0aGlzLmFkZE5ld1RhZygpO1xyXG4gICAgICB9XHJcbiAgICB9IC8qIGVsc2UgaWYgKHRoaXMuc3RhdGUudmFsdWUpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJyB9KTtcclxuICAgIH0qL1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb25zID0gdGhpcy5nZXRUcmFuc2xhdGlvbnMoZGVmYXVsdFRhZ3NUcmFuc2xhdGlvbnMpO1xyXG4gICAgY29uc3QgdGV4dFByb3BzID0gdGhpcy5wcm9wcy50ZXh0UHJvcHMgPyB0aGlzLnByb3BzLnRleHRQcm9wcyA6IHt9O1xyXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB0aGlzLmdldFN1Z2dlc3Rpb25zKCk7XHJcbiAgICBjb25zdCBzaG93TW9iaWxlVmVyc2lvbiA9XHJcbiAgICAgIHRoaXMucHJvcHMubW9iaWxlVmVyc2lvbkVuYWJsZWQgJiZcclxuICAgICAgdGhpcy5pc01vYmlsZSAmJlxyXG4gICAgICAodGhpcy5zdGF0ZS50ZXh0SXNGb2N1c2VkIHx8IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlKTtcclxuICAgIGNvbnN0IExlYXZlTW9iaWxlQnV0dG9uID0gc2hvd01vYmlsZVZlcnNpb24gPyAoXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X19sZWF2ZU1vYmlsZVRhZ3NCdXR0b24gbGluZS1oZWlnaHQtLTBcIlxyXG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGVhdmVNb2JpbGVDbGlja31cclxuICAgICAgICBub1NoYWRvdz17dHJ1ZX1cclxuICAgICAgICB1bm9idHJ1c2l2ZT17dHJ1ZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxMZWZ0QXJyb3dJY29uIC8+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKSA6IChcclxuICAgICAgdW5kZWZpbmVkXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc2hvd0lucHV0ID0gQm9vbGVhbihcclxuICAgICAgKCF0aGlzLnByb3BzLm1heFRhZ3MgfHxcclxuICAgICAgICB0aGlzLnByb3BzLm1heFRhZ3MgPiAodGhpcy5wcm9wcy50YWdzICYmIHRoaXMucHJvcHMudGFncy5sZW5ndGgpKSAmJlxyXG4gICAgICAgICF0aGlzLnByb3BzLnJlYWRPbmx5XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFBvcnRhbCBjb250YWluZXI9e2RvY3VtZW50LmJvZHl9IGRpc2FibGVQb3J0YWw9eyFzaG93TW9iaWxlVmVyc2lvbn0+XHJcbiAgICAgICAgPElucHV0R3JvdXAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9IHRvb2x0aXA9e3RoaXMucHJvcHMudG9vbHRpcH0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICAgJ2lucHV0X19iYXNlIHRhZ3MtaW5wdXQnLFxyXG4gICAgICAgICAgICAgIHRoaXMuZ2V0VmFsaWRhdGlvbkNsYXNzKCksXHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXQtLXJlYWRPbmx5JzogdGhpcy5wcm9wcy5yZWFkT25seSxcclxuICAgICAgICAgICAgICAgICd0YWdzLWlucHV0LS1oYXNQbGFjZWhvbGRlcic6XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGV4dFByb3BzICYmIHRoaXMucHJvcHMudGV4dFByb3BzLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXQtLW1vYmlsZSc6IHNob3dNb2JpbGVWZXJzaW9uLFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgcmVmPXt0aGlzLmNvbnRhaW5lclJlZn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Nob3dNb2JpbGVWZXJzaW9uICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX21vYmlsZUJhY2tkcm9wXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdzX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgeyFzaG93SW5wdXQgJiYgc2hvd01vYmlsZVZlcnNpb24gJiYgTGVhdmVNb2JpbGVCdXR0b259XHJcbiAgICAgICAgICAgICAge3RoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRhZ3MubWFwKChpdGVtLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRhZyhpdGVtLCBpbmRleClcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlYWRPbmx5ICYmIChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdfX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3RhZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMucmVhZG9ubHlFbXB0eVBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Nob3dJbnB1dCAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXRfX3RhZ3NfX3dyYXBwZXIgJyArXHJcbiAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnJlYWRPbmx5ID8gJ2ZpbGxlZCAnIDogJycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgc2hvd0NsZWFyQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICB7Li4udGV4dFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy10ZXh0LWlucHV0JyxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy50ZXh0UmVmfVxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRoaXMucHJvcHMucmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICd0YWdzLWlucHV0X190ZXh0LWlucHV0ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICh0ZXh0UHJvcHMuY2xhc3NOYW1lID8gdGV4dFByb3BzLmNsYXNzTmFtZSA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd24oc3VnZ2VzdGlvbnMpfVxyXG4gICAgICAgICAgICAgICAgICBvbkVycm9yc0NoYW5nZWQ9e3RoaXMub25UZXh0RXJyb3JzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UZXh0Q2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZE9ubHl9XHJcbiAgICAgICAgICAgICAgICAgIHNob3dWYWxpZGF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgaWdub3JlQ29udGV4dD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17dGhpcy5wcm9wcy52YWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgICBjdXN0b21WYWxpZGF0b3JzPXt0aGlzLnByb3BzLmN1c3RvbVZhbGlkYXRvcnN9XHJcbiAgICAgICAgICAgICAgICAgIGJlZm9yZT17TGVhdmVNb2JpbGVCdXR0b259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlICYmIHRoaXMucHJvcHMuc2hvd1N1Z2dlc3Rpb25zICYmIChcclxuICAgICAgICAgICAgICAgICAgPFRhZ3NTdWdnZXN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctdGV4dC1pbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJSZWY9e3RoaXMuc3VnZ2VzdGlvbnNSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e3RoaXMuY29udGFpbmVyUmVmLmN1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RoaXMucHJvcHMuYWxsb3dOZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uPXt0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmZldGNoaW5nRXhpc3RpbmdUYWdzfVxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmdDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZT17dGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgRW1wdHlDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICBXYWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMud2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc1dhaXRpbmdGb3JNb3JlSW5wdXQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZS5sZW5ndGggPCB0aGlzLnByb3BzLm1pbkxldHRlcnNUb0ZldGNoXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M9e3N1Z2dlc3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0ZWQ9e3RoaXMub25TdWdnZXN0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkTmV3VGFnQ29tcG9uZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWxsb3dOZXcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFsdWUgIT09ICcnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMucHJvcHMuZXhpc3RpbmdUYWdzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmV4aXN0aW5nVGFncy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gZS5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBlLm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGV4dElzVmFsaWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy1hZGQtbmV3LWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fc3VnZ2VzdGlvbiB0YWdzLWlucHV0X19hZGQtbmV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZE5ld1RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMuYWRkTmV3fSBcInt0aGlzLnN0YXRlLnZhbHVlfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwb3BwZXJQcm9wcz17dGhpcy5wcm9wcy5wb3BwZXJQcm9wc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckRlZmF1bHRWYWxpZGF0aW9uKCl9XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsICYmIChcclxuICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFsdWUgIT09ICcnIHx8XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGV4dElzRm9jdXNlZCB8fFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlYWRPbmx5IHx8XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggPj0gdGhpcy5wcm9wcy5tYXhUYWdzIHx8XHJcbiAgICAgICAgICAgICAgICAgIHNob3dNb2JpbGVWZXJzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnbGFiZWwtLWZvY3VzZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckxhYmVsKCl9XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgPC9Qb3J0YWw+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblRleHRFcnJvcnNDaGFuZ2VkID0gKHRleHRFcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHsgdGV4dEVycm9ycyB9KSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuXHJcbiAgcHJpdmF0ZSBvbkZvY3VzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHsgdGV4dElzRm9jdXNlZDogdHJ1ZSwgc3VnZ2VzdGlvbnNWaXNpYmxlOiB0cnVlLCB0b3VjaGVkOiB0cnVlIH0pLFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncyh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgIGNvbnN0IHNob3dNb2JpbGVWZXJzaW9uID1cclxuICAgICAgdGhpcy5wcm9wcy5tb2JpbGVWZXJzaW9uRW5hYmxlZCAmJlxyXG4gICAgICB0aGlzLmlzTW9iaWxlICYmXHJcbiAgICAgICh0aGlzLnN0YXRlLnRleHRJc0ZvY3VzZWQgfHwgdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUpO1xyXG4gICAgaWYgKFxyXG4gICAgICAhc2hvd01vYmlsZVZlcnNpb24gJiZcclxuICAgICAgdGhpcy5wcm9wcy5tb2JpbGVWZXJzaW9uRW5hYmxlZCAmJlxyXG4gICAgICB0aGlzLmlzTW9iaWxlXHJcbiAgICApIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRleHRSZWYuY3VycmVudD8uZm9jdXMoKSwgMTAwKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uS2V5RG93biA9IChzdWdnZXN0aW9uczogVGFnW10pID0+IGFzeW5jIGUgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBlLmtleSA9PT0gJ0VudGVyJyAmJlxyXG4gICAgICAodGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgfHxcclxuICAgICAgICB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAhPT0gdW5kZWZpbmVkKSAmJlxyXG4gICAgICB0aGlzLnN0YXRlLnRleHRFcnJvcnMubGVuZ3RoID09PSAwXHJcbiAgICApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBjb25zdCBleGlzdGluZ1RhZyA9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmV4aXN0aW5nVGFncy5maW5kKGV0ID0+IGV0Lm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZChcclxuICAgICAgICAgIHRoaXMucHJvcHMudGFncy5jb25jYXQoc3VnZ2VzdGlvbnNbdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb25dKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJywgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChleGlzdGluZ1RhZykge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZCh0aGlzLnByb3BzLnRhZ3MuY29uY2F0KGV4aXN0aW5nVGFnKSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJyB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuYWxsb3dOZXcpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmFkZE5ld1RhZygpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzdWdnZXN0aW9ucy5sZW5ndGggPiAwICYmIHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlKSB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgY29uc3QgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uID1cclxuICAgICAgICAgIHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBzdWdnZXN0aW9ucy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IDBcclxuICAgICAgICAgICAgPyBzdWdnZXN0aW9ucy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gLSAxO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgICAgY29uc3QgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uID1cclxuICAgICAgICAgIHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gKyAxO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBhZGROZXdUYWcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUYWcgPSBhd2FpdCB0aGlzLnByb3BzLm9uTmV3VGFnQWRkZWQodGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICBpZiAobmV3VGFnKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZChcclxuICAgICAgICB0aGlzLnByb3BzLnRhZ3MgPyB0aGlzLnByb3BzLnRhZ3MuY29uY2F0KG5ld1RhZykgOiBbbmV3VGFnXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJywgdGV4dEVycm9yczogW10gfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uU3VnZ2VzdGlvblNlbGVjdGVkID0gKHRhZzogVGFnKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUYWdzID0gdGhpcy5wcm9wcy50YWdzLmNvbmNhdCh0YWcpO1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKG5ld1RhZ3MpO1xyXG4gICAgY29uc3QgaXNNYXggPSBuZXdUYWdzLmxlbmd0aCA9PT0gdGhpcy5wcm9wcy5tYXhUYWdzO1xyXG4gICAgY29uc3QgZmluYWxWYWx1ZSA9ICF0aGlzLnByb3BzLmFsbG93TmV3ICYmICFpc01heCA/IHRoaXMuc3RhdGUudmFsdWUgOiAnJztcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZTogZmluYWxWYWx1ZSxcclxuICAgICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGlzTWF4ID8gZmFsc2UgOiB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSxcclxuICAgICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCxcclxuICAgICAgICB0ZXh0RXJyb3JzOiBbXSxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICF0aGlzLnByb3BzLm1heFRhZ3MgfHxcclxuICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggKyAxIDwgdGhpcy5wcm9wcy5tYXhUYWdzXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKGZpbmFsVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25CbHVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHRleHRJc0ZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25UZXh0Q2hhbmdlZCA9IChcclxuICAgIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LFxyXG4gICAgaXNWYWxpZDogYm9vbGVhblxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7XHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgaXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICB0ZXh0SXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IHRydWUsXHJcbiAgICAgIH0pLFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMgPSAodGFnczogVGFnW10gPSB0aGlzLnByb3BzLnRhZ3MpID0+IHtcclxuICAgIGxldCBlcnJvcnMgPSB0aGlzLmdldEVycm9ycyh0YWdzKTtcclxuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldEludmFsaWQoZXJyb3JzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsaWQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGdldEVycm9ycyh0YWdzOiBUYWdbXSkge1xyXG4gICAgbGV0IGVycm9ycyA9IFtdO1xyXG4gICAgaWYgKHRhZ3MubGVuZ3RoIDwgdGhpcy5wcm9wcy5tYXhUYWdzKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5zdGF0ZS50ZXh0RXJyb3JzKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyAmJiB0YWdzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLnJlcXVpcmVkKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQoXHJcbiAgICAgICAgdGhpcy5nZXRUcmFuc2xhdGlvbnModGhpcy5wcm9wcy50cmFuc2xhdGlvbnMpLnJlcXVpcmVkXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSAmJiB0aGlzLnByb3BzLmFsbG93TmV3ICYmICF0aGlzLnN0YXRlLnRleHRJc0ZvY3VzZWQpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnByb3BzLnZhbHVlTm90QWRkZWRFcnJvcik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5tYXhUYWdzIDwgKHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoKSkge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMucHJvcHMubWF4VGFnc1N1cnBhc3NlZEVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcnMuZmlsdGVyKGkgPT4gaSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZldGNoRXhpc3RpbmdUYWdzKHN0YXJ0c1dpdGg6IHN0cmluZyA9ICcnKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hFeGlzdGluZ1RhZ3MgJiZcclxuICAgICAgc3RhcnRzV2l0aC5sZW5ndGggPj0gdGhpcy5wcm9wcy5taW5MZXR0ZXJzVG9GZXRjaFxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKCgpID0+ICh7IGZldGNoaW5nRXhpc3RpbmdUYWdzOiB0cnVlIH0pKSxcclxuICAgICAgICB0aGlzLnByb3BzLmxvYWRpbmdEZWxheU1zXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hFeGlzdGluZ1RhZ3Moc3RhcnRzV2l0aCkudGhlbihmZXRjaGVkRXhpc3RpbmdUYWdzID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKCkgPT4gKHtcclxuICAgICAgICAgIGZldGNoZWRFeGlzdGluZ1RhZ3MsXHJcbiAgICAgICAgICBmZXRjaGluZ0V4aXN0aW5nVGFnczogZmFsc2UsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U3VnZ2VzdGlvbnMoKSB7XHJcbiAgICBjb25zdCBleGlzdGluZ1RhZ3M6IFRhZ1tdID0gW11cclxuICAgICAgLmNvbmNhdCh0aGlzLnByb3BzLmV4aXN0aW5nVGFncyA/IHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzIDogW10pXHJcbiAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzID8gdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzIDogW11cclxuICAgICAgKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkVGFncyA9IHRoaXMucHJvcHMuZmlsdGVyRXhpc3RpbmdUYWdzKFxyXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlID8gdGhpcy5zdGF0ZS52YWx1ZS50b0xvd2VyQ2FzZSgpIDogJycsXHJcbiAgICAgIGV4aXN0aW5nVGFnc1xyXG4gICAgKTtcclxuICAgIGxldCBzdWdnZXN0aW9ucyA9IGZpbHRlcmVkVGFnc1xyXG4gICAgICAuZmlsdGVyKFxyXG4gICAgICAgIHRhZyA9PlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5hbGxvd1NhbWVUYWdNdWx0aXBsZVRpbWVzIHx8XHJcbiAgICAgICAgICAhdGhpcy5wcm9wcy50YWdzLnNvbWUodCA9PiB0LmlkID09PSB0YWcuaWQpXHJcbiAgICAgIClcclxuICAgICAgLnNsaWNlKDAsIHRoaXMucHJvcHMubWF4U3VnZ2VzdGlvbnMpO1xyXG4gICAgcmV0dXJuIHN1Z2dlc3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJUYWcodGFnOiBUYWcsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGJvZHkgPSAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge3RhZy5uYW1lfVxyXG4gICAgICAgIHshdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRhZy0nICsgaW5kZXgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIGNpcmN1bGFyPXt0cnVlfVxyXG4gICAgICAgICAgICBibGFuaz17dHJ1ZX1cclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy50YWdSZW1vdmVDbGljayh0YWcpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xIHRyYW5zZm9ybS1yb3RhdGUtLTQ1IGxpbmUtaGVpZ2h0LS0wIHAtMFwiXHJcbiAgICAgICAgICAgIENvbXBvbmVudD17cCA9PiAoXHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtwLmNsYXNzTmFtZX0gaWQ9e3AuaWR9IG9uQ2xpY2s9e3Aub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICB7cC5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQbHVzSWNvbiAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygndGFncy1pbnB1dF9fdGFnJywge1xyXG4gICAgICAndGFncy1pbnB1dF9fdGFnLWNoaXAnOiB0aGlzLnByb3BzLnNob3dDaGlwcyxcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25UYWdDbGljaykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudGFnQ2xpY2sodGFnKX1cclxuICAgICAgICAgIHNtYWxsPXt0cnVlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnRhZ0NsaWNrKHRhZyl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e2luZGV4fT5cclxuICAgICAgICB7Ym9keX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0YWdDbGljayA9ICh0YWc6IFRhZykgPT4gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ0NsaWNrICYmIHRoaXMucHJvcHMub25UYWdDbGljayh0YWcpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdGFnUmVtb3ZlQ2xpY2sgPSAodGFnOiBUYWcpID0+IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IG5ld1RhZ3MgPSB0aGlzLnByb3BzLnRhZ3MuZmlsdGVyKHN2ID0+IHN2LmlkICE9PSB0YWcuaWQpO1xyXG4gICAgLyppZiAobmV3VGFncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZvY3VzKCksIDUwKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgfSk7Ki9cclxuICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQobmV3VGFncyk7XHJcbiAgICB0aGlzLmhhbmRsZUVycm9ycyhuZXdUYWdzKTtcclxuICAgIC8vIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGFncyA9IHdpdGhUaGVtZUNvbnRleHQ8VGFnc1Byb3BzLCBJbnN0YW5jZVR5cGU8dHlwZW9mIFRhZ3NSYXc+PihcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueVxyXG4gIHdpdGhGb3JtQ29udGV4dDxUYWdzUHJvcHM+KFRhZ3NSYXcpLFxyXG4gICd0YWdzJ1xyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFncztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==