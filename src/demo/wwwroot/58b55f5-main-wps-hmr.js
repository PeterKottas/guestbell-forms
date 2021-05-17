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
      var _this$containerRef$cu,
          _this$containerRef$cu2,
          _this2 = this;

      if (!this.containerRef.current || ((_this$containerRef$cu = this.containerRef.current.querySelector('.tags-input__tag__wrapper')) === null || _this$containerRef$cu === void 0 ? void 0 : _this$containerRef$cu.contains(e.target)) || ((_this$containerRef$cu2 = this.containerRef.current.querySelector('.tags-input__text-input')) === null || _this$containerRef$cu2 === void 0 ? void 0 : _this$containerRef$cu2.contains(e.target)) || !this.suggestionsRef.current || this.suggestionsRef.current.contains(e.target)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9UYWdzLnRzeCJdLCJuYW1lcyI6WyJjbGFzc05hbWVzIiwicmVxdWlyZSIsImRlZmF1bHRUYWdzVHJhbnNsYXRpb25zIiwiZGVmYXVsdEJhc2VUcmFuc2xhdGlvbnMiLCJhZGROZXciLCJUYWdCdXR0b25Db21wb25lbnQiLCJwIiwiY2xhc3NOYW1lIiwiaWQiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJUYWdzUmF3IiwicHJvcHMiLCJ0ZXh0UmVmIiwic3VnZ2VzdGlvbnNSZWYiLCJpc01vYmlsZSIsIm9uVGV4dEVycm9yc0NoYW5nZWQiLCJ0ZXh0RXJyb3JzIiwic2V0U3RhdGUiLCJoYW5kbGVFcnJvcnMiLCJvbkZvY3VzIiwidGV4dElzRm9jdXNlZCIsInN1Z2dlc3Rpb25zVmlzaWJsZSIsInRvdWNoZWQiLCJmZXRjaEV4aXN0aW5nVGFncyIsInN0YXRlIiwidmFsdWUiLCJzaG93TW9iaWxlVmVyc2lvbiIsIm1vYmlsZVZlcnNpb25FbmFibGVkIiwic2V0VGltZW91dCIsImN1cnJlbnQiLCJmb2N1cyIsIm9uS2V5RG93biIsInN1Z2dlc3Rpb25zIiwiZSIsImtleSIsInByZXNlbGVjdGVkU3VnZ2VzdGlvbiIsInVuZGVmaW5lZCIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZXhpc3RpbmdUYWciLCJleGlzdGluZ1RhZ3MiLCJmaW5kIiwiZXQiLCJuYW1lIiwib25UYWdzQ2hhbmdlZCIsInRhZ3MiLCJjb25jYXQiLCJhbGxvd05ldyIsImFkZE5ld1RhZyIsIm9uTmV3VGFnQWRkZWQiLCJuZXdUYWciLCJvblN1Z2dlc3Rpb25TZWxlY3RlZCIsInRhZyIsImxhc3RTZWxlY3RlZCIsIm5ld1RhZ3MiLCJpc01heCIsIm1heFRhZ3MiLCJmaW5hbFZhbHVlIiwib25CbHVyIiwib25UZXh0Q2hhbmdlZCIsImlzVmFsaWQiLCJ0YXJnZXQiLCJ0ZXh0SXNWYWxpZCIsImVycm9ycyIsImdldEVycm9ycyIsInNldEludmFsaWQiLCJzZXRWYWxpZCIsInRhZ0NsaWNrIiwib25UYWdDbGljayIsInRhZ1JlbW92ZUNsaWNrIiwiZmlsdGVyIiwic3YiLCJmZXRjaGluZ0V4aXN0aW5nVGFncyIsImZldGNoZWRFeGlzdGluZ1RhZ3MiLCJSZWFjdCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImJpbmQiLCJoYW5kbGVMZWF2ZU1vYmlsZUNsaWNrIiwib2xkUHJvcHMiLCJ2YWxpZGF0b3JzIiwiY3VzdG9tVmFsaWRhdG9ycyIsInJlcXVpcmVkIiwiY29udGFpbmVyUmVmIiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5zIiwiYWRkTmV3T25CbHVyIiwiZ2V0U3VnZ2VzdGlvbnMiLCJleGlzdGluZyIsInMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHJhbnNsYXRpb25zIiwiZ2V0VHJhbnNsYXRpb25zIiwidGV4dFByb3BzIiwiTGVhdmVNb2JpbGVCdXR0b24iLCJzaG93SW5wdXQiLCJCb29sZWFuIiwicmVhZE9ubHkiLCJib2R5IiwidGl0bGUiLCJ0b29sdGlwIiwiZ2V0VmFsaWRhdGlvbkNsYXNzIiwicGxhY2Vob2xkZXIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyZW5kZXJUYWciLCJyZWFkb25seUVtcHR5UGxhY2Vob2xkZXIiLCJzaG93U3VnZ2VzdGlvbnMiLCJpc0xvYWRpbmciLCJzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQiLCJzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50Iiwid2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudCIsIm1pbkxldHRlcnNUb0ZldGNoIiwicG9wcGVyUHJvcHMiLCJyZW5kZXJEZWZhdWx0VmFsaWRhdGlvbiIsImxhYmVsIiwicmVuZGVyTGFiZWwiLCJ2YWx1ZU5vdEFkZGVkRXJyb3IiLCJtYXhUYWdzU3VycGFzc2VkRXJyb3IiLCJpIiwic3RhcnRzV2l0aCIsInRpbWVyIiwibG9hZGluZ0RlbGF5TXMiLCJ0aGVuIiwiY2xlYXJUaW1lb3V0IiwiZmlsdGVyZWRUYWdzIiwiZmlsdGVyRXhpc3RpbmdUYWdzIiwidG9Mb3dlckNhc2UiLCJhbGxvd1NhbWVUYWdNdWx0aXBsZVRpbWVzIiwic29tZSIsInQiLCJzbGljZSIsIm1heFN1Z2dlc3Rpb25zIiwidG9TdHJpbmciLCJzaG93Q2hpcHMiLCJCYXNlSW5wdXQiLCJkZWZhdWx0UHJvcHMiLCJkaXNhYmxlZCIsIm5ld1RhZ05hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsIkRhdGUiLCJnZXRUaW1lIiwidGV4dCIsIlRhZ3MiLCJ3aXRoVGhlbWVDb250ZXh0Iiwid2l0aEZvcm1Db250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxtQkFBTyxDQUFDLHNEQUFELENBQXhCOztBQUNBO0NBSUE7O0FBTU8sSUFBTUMsdUJBQXVCLHFCQUMvQkMsNkVBRCtCO0FBRWxDQyxRQUFNLEVBQUU7QUFGMEIsRUFBN0I7O0FBbURQLElBQU1DLGtCQUFrRCxHQUFHLFNBQXJEQSxrQkFBcUQsQ0FBQUMsQ0FBQztBQUFBLFNBQzFEO0FBQUcsYUFBUyxFQUFFQSxDQUFDLENBQUNDLFNBQWhCO0FBQTJCLE1BQUUsRUFBRUQsQ0FBQyxDQUFDRSxFQUFqQztBQUFxQyxXQUFPLEVBQUVGLENBQUMsQ0FBQ0c7QUFBaEQsS0FDR0gsQ0FBQyxDQUFDSSxRQURMLENBRDBEO0FBQUEsQ0FBNUQ7O0FBTU8sSUFBTUMsT0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFvQ0UsbUJBQVlDLEtBQVosRUFBOEM7QUFBQTs7QUFBQTs7QUFDNUMsaUZBQU1BLEtBQU47QUFENEMsVUFKdENDLE9BSXNDO0FBQUEsVUFIdENDLGNBR3NDO0FBQUEsVUFGdENDLFFBRXNDLEdB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RTVGLHVCO0FBQ2RrSCxtQkFBaUIsRUFBRSxDO0FBQ25CeEYsc0JBQW9CLEVBQUU7O0FBcWlCbkIsSUFBTXdILElBQUksR0FBR0Msd0ZBQWdCLEVBQ2xDO0FBQ0FDLDZFQUFlLENBQVkzSSxPQUFaLENBRm1CLEVBR2xDLE1BSGtDLENBQTdCO2VBTVF5SSxJO0FBQUE7Ozs7Ozs7Ozs7MEJBam9CRmxKLHVCOzBCQW1EUEcsa0I7MEJBTU9NLE87MEJBa2tCQXlJLEkiLCJmaWxlIjoiNThiNTVmNS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWJzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW5wdXRHcm91cCB9IGZyb20gJy4uL2lucHV0R3JvdXAvSW5wdXRHcm91cCc7XHJcbmltcG9ydCB7IFRleHQsIFRleHRQcm9wcywgVGV4dFJhdyB9IGZyb20gJy4uL3RleHQvVGV4dCc7XHJcbmltcG9ydCAqIGFzIFBsdXNJY29uIGZyb20gJ21hdGVyaWFsLWRlc2lnbi1pY29ucy9jb250ZW50L3N2Zy9wcm9kdWN0aW9uL2ljX2FkZF9jaXJjbGVfb3V0bGluZV8yNHB4LnN2Zyc7XHJcbmltcG9ydCAqIGFzIExlZnRBcnJvd0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL25hdmlnYXRpb24vc3ZnL3Byb2R1Y3Rpb24vaWNfYXJyb3dfYmFja18yNHB4LnN2Zyc7XHJcbmltcG9ydCB7XHJcbiAgQmFzZUlucHV0UHJvcHMsXHJcbiAgQmFzZUlucHV0U3RhdGUsXHJcbiAgQmFzZUlucHV0LFxyXG4gIFZhbGlkYXRpb25FcnJvcixcclxuICBkZWZhdWx0QmFzZVRyYW5zbGF0aW9ucyxcclxufSBmcm9tICcuLi9iYXNlL2lucHV0L0Jhc2VJbnB1dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uQ29tcG9uZW50UHJvcHMgfSBmcm9tICcuLi9idXR0b24vQnV0dG9uJztcclxuaW1wb3J0IFRhZ3NTdWdnZXN0aW9ucyBmcm9tICcuL3N1YkNvbXBvbmVudHMvVGFnc1N1Z2dlc3Rpb25zJztcclxuaW1wb3J0IHsgd2l0aEZvcm1Db250ZXh0IH0gZnJvbSAnLi4vZm9ybS93aXRoRm9ybUNvbnRleHQnO1xyXG52YXIgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcclxuaW1wb3J0IHsgd2l0aFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL3RoZW1lUHJvdmlkZXIvd2l0aFRoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IFBvcHBlclByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyL1BvcHBlcic7XHJcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuXHJcbi8vIE1pc2NcclxuZXhwb3J0IHR5cGUgVGFnID0ge1xyXG4gIGlkOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUYWdzVHJhbnNsYXRpb25zID0ge1xyXG4gIC4uLmRlZmF1bHRCYXNlVHJhbnNsYXRpb25zLFxyXG4gIGFkZE5ldzogJ0FkZCBuZXcnLFxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgVGFnc1RyYW5zbGF0aW9ucyA9IFBhcnRpYWw8dHlwZW9mIGRlZmF1bHRUYWdzVHJhbnNsYXRpb25zPjtcclxuXHJcbmV4cG9ydCB0eXBlIFRhZ3NQcm9wcyA9IHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIHRhZ3M6IFRhZ1tdO1xyXG4gIGV4aXN0aW5nVGFncz86IFRhZ1tdO1xyXG4gIGZldGNoRXhpc3RpbmdUYWdzPzogKHRleHQ6IHN0cmluZykgPT4gUHJvbWlzZTxUYWdbXT47XHJcbiAgb25UYWdzQ2hhbmdlZDogKG5ld1RhZ3M6IFRhZ1tdKSA9PiB2b2lkO1xyXG4gIG9uTmV3VGFnQWRkZWQ/OiAobmV3VGFnTmFtZTogc3RyaW5nKSA9PiBQcm9taXNlPFRhZz47XHJcbiAgb25UYWdDbGljaz86ICh0YWc6IFRhZykgPT4gdm9pZDtcclxuICBzaG93Q2hpcHM/OiBib29sZWFuO1xyXG4gIGFsbG93TmV3PzogYm9vbGVhbjtcclxuICBhZGROZXdPbkJsdXI/OiBib29sZWFuO1xyXG4gIHRleHRQcm9wcz86IFRleHRQcm9wcztcclxuICByZWFkT25seT86IGJvb2xlYW47XHJcbiAgcmVhZG9ubHlFbXB0eVBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIG1heFRhZ3M/OiBudW1iZXI7XHJcbiAgdmFsdWVOb3RBZGRlZEVycm9yPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgbWF4VGFnc1N1cnBhc3NlZEVycm9yPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgc2hvd1N1Z2dlc3Rpb25zPzogYm9vbGVhbjtcclxuICBzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgd2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIGxvYWRpbmdEZWxheU1zPzogbnVtYmVyO1xyXG4gIGZpbHRlckV4aXN0aW5nVGFncz86ICh0ZXh0OiBzdHJpbmcsIGV4aXN0aW5nVGFnczogVGFnW10pID0+IFRhZ1tdO1xyXG4gIGFsbG93U2FtZVRhZ011bHRpcGxlVGltZXM/OiBib29sZWFuO1xyXG4gIG1heFN1Z2dlc3Rpb25zPzogbnVtYmVyO1xyXG4gIHBvcHBlclByb3BzPzogUGFydGlhbDxQb3BwZXJQcm9wcz47XHJcbiAgbWluTGV0dGVyc1RvRmV0Y2g/OiBudW1iZXI7XHJcbiAgbW9iaWxlVmVyc2lvbkVuYWJsZWQ/OiBib29sZWFuO1xyXG4gIGlzTG9hZGluZz86IGJvb2xlYW47XHJcbn0gJiBCYXNlSW5wdXRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCBUYWdzVHJhbnNsYXRpb25zPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFnc1N0YXRlIGV4dGVuZHMgQmFzZUlucHV0U3RhdGUge1xyXG4gIHRleHRJc0ZvY3VzZWQ6IGJvb2xlYW47XHJcbiAgdGV4dEVycm9yczogVmFsaWRhdGlvbkVycm9yW107XHJcbiAgdGV4dElzVmFsaWQ6IGJvb2xlYW47XHJcbiAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBib29sZWFuO1xyXG4gIGZldGNoZWRFeGlzdGluZ1RhZ3M6IFRhZ1tdO1xyXG4gIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBib29sZWFuO1xyXG4gIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj86IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBJbmplY3RlZFByb3BzID0ge307XHJcblxyXG5jb25zdCBUYWdCdXR0b25Db21wb25lbnQ6IFJlYWN0LkZDPEJ1dHRvbkNvbXBvbmVudFByb3BzPiA9IHAgPT4gKFxyXG4gIDxhIGNsYXNzTmFtZT17cC5jbGFzc05hbWV9IGlkPXtwLmlkfSBvbkNsaWNrPXtwLm9uQ2xpY2t9PlxyXG4gICAge3AuY2hpbGRyZW59XHJcbiAgPC9hPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhZ3NSYXcgZXh0ZW5kcyBCYXNlSW5wdXQ8XHJcbiAgVGFnc1Byb3BzICYgSW5qZWN0ZWRQcm9wcyxcclxuICBUYWdzU3RhdGUsXHJcbiAgSFRNTElucHV0RWxlbWVudCxcclxuICBUYWdzVHJhbnNsYXRpb25zXHJcbj4ge1xyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBUYWdzUHJvcHMgPSB7XHJcbiAgICAuLi5CYXNlSW5wdXQuZGVmYXVsdFByb3BzLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgZXhpc3RpbmdUYWdzOiBbXSxcclxuICAgIG1heFRhZ3M6IDEwMDAsXHJcbiAgICBvblRhZ3NDaGFuZ2VkOiAoKSA9PiB1bmRlZmluZWQsXHJcbiAgICBvbk5ld1RhZ0FkZGVkOiBuZXdUYWdOYW1lID0+XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSh7IG5hbWU6IG5ld1RhZ05hbWUsIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9KSxcclxuICAgIHZhbHVlTm90QWRkZWRFcnJvcjogPHNwYW4+WW91IGZvcmdvdCB0byBhZGQgdGFnPC9zcGFuPixcclxuICAgIG1heFRhZ3NTdXJwYXNzZWRFcnJvcjogPHNwYW4+TWF4aW11bSBudW1iZXIgb2YgdGFncyBzdXJwYXNzZWQ8L3NwYW4+LFxyXG4gICAgd2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudDogPHNwYW4+V2FpdGluZyBmb3IgbW9yZSBpbnB1dC4uLjwvc3Bhbj4sXHJcbiAgICBzaG93U3VnZ2VzdGlvbnM6IHRydWUsXHJcbiAgICBzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQ6ICdMb2FkaW5nLi4uJyxcclxuICAgIHN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQ6ICdObyBleGlzdGluZyB0YWdzLi4uJyxcclxuICAgIGxvYWRpbmdEZWxheU1zOiA1MDAsXHJcbiAgICBmaWx0ZXJFeGlzdGluZ1RhZ3M6ICh0ZXh0LCB0YWdzKSA9PlxyXG4gICAgICB0YWdzLmZpbHRlcih0YWcgPT4gdGFnLm5hbWUgJiYgdGFnLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRleHQpKSxcclxuICAgIG1heFN1Z2dlc3Rpb25zOiA1LFxyXG4gICAgYWRkTmV3T25CbHVyOiBmYWxzZSxcclxuICAgIHRyYW5zbGF0aW9uczogZGVmYXVsdFRhZ3NUcmFuc2xhdGlvbnMsXHJcbiAgICBtaW5MZXR0ZXJzVG9GZXRjaDogMCxcclxuICAgIG1vYmlsZVZlcnNpb25FbmFibGVkOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdGV4dFJlZjogUmVhY3QuUmVmT2JqZWN0PFRleHRSYXc+O1xyXG4gIHByaXZhdGUgc3VnZ2VzdGlvbnNSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcbiAgcHJpdmF0ZSBpc01vYmlsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogVGFnc1Byb3BzICYgSW5qZWN0ZWRQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgdGV4dEVycm9yczogW10sXHJcbiAgICAgIHRleHRJc0ZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgICBmZXRjaGluZ0V4aXN0aW5nVGFnczogZmFsc2UsXHJcbiAgICAgIHRleHRJc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgZmV0Y2hlZEV4aXN0aW5nVGFnczogW10sXHJcbiAgICB9O1xyXG4gICAgdGhpcy50ZXh0UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLnN1Z2dlc3Rpb25zUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSA9IHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZUxlYXZlTW9iaWxlQ2xpY2sgPSB0aGlzLmhhbmRsZUxlYXZlTW9iaWxlQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIGlmIChwcm9wcy5tb2JpbGVWZXJzaW9uRW5hYmxlZCkge1xyXG4gICAgICB0aGlzLmlzTW9iaWxlID0gcmVxdWlyZSgncmVhY3QtZGV2aWNlLWRldGVjdCcpPy5pc01vYmlsZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb2N1cygpIHtcclxuICAgIGlmICh0aGlzLnRleHRSZWYuY3VycmVudCkge1xyXG4gICAgICB0aGlzLnRleHRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wczogVGFnc1Byb3BzICYgSW5qZWN0ZWRQcm9wcykge1xyXG4gICAgaWYgKFxyXG4gICAgICBvbGRQcm9wcy50YWdzICE9PSB0aGlzLnByb3BzLnRhZ3MgfHxcclxuICAgICAgb2xkUHJvcHMudmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy52YWxpZGF0b3JzIHx8XHJcbiAgICAgIG9sZFByb3BzLmN1c3RvbVZhbGlkYXRvcnMgIT09IHRoaXMucHJvcHMuY3VzdG9tVmFsaWRhdG9ycyB8fFxyXG4gICAgICBvbGRQcm9wcy5yZXF1aXJlZCAhPT0gdGhpcy5wcm9wcy5yZXF1aXJlZFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKHRoaXMucHJvcHMudGFncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlTGVhdmVNb2JpbGVDbGljaygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICB0ZXh0SXNGb2N1c2VkOiBmYWxzZSxcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVDbGlja091dHNpZGUoZTogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5jb250YWluZXJSZWYuY3VycmVudCB8fFxyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy50YWdzLWlucHV0X190YWdfX3dyYXBwZXInKVxyXG4gICAgICAgID8uY29udGFpbnMoZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpIHx8XHJcbiAgICAgIHRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignLnRhZ3MtaW5wdXRfX3RleHQtaW5wdXQnKVxyXG4gICAgICAgID8uY29udGFpbnMoZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpIHx8XHJcbiAgICAgICF0aGlzLnN1Z2dlc3Rpb25zUmVmLmN1cnJlbnQgfHxcclxuICAgICAgdGhpcy5zdWdnZXN0aW9uc1JlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMuYWRkTmV3T25CbHVyICYmIHRoaXMuc3RhdGUudmFsdWUpIHtcclxuICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB0aGlzLmdldFN1Z2dlc3Rpb25zKCk7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gc3VnZ2VzdGlvbnMuZmluZChzID0+IHMubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgIGlmIChleGlzdGluZykge1xyXG4gICAgICAgIHRoaXMub25TdWdnZXN0aW9uU2VsZWN0ZWQoZXhpc3RpbmcsIHN1Z2dlc3Rpb25zLmxlbmd0aCA9PT0gMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5hbGxvd05ldykge1xyXG4gICAgICAgIHRoaXMuYWRkTmV3VGFnKCk7XHJcbiAgICAgIH1cclxuICAgIH0gLyogZWxzZSBpZiAodGhpcy5zdGF0ZS52YWx1ZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnIH0pO1xyXG4gICAgfSovXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSB0aGlzLmdldFRyYW5zbGF0aW9ucyhkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyk7XHJcbiAgICBjb25zdCB0ZXh0UHJvcHMgPSB0aGlzLnByb3BzLnRleHRQcm9wcyA/IHRoaXMucHJvcHMudGV4dFByb3BzIDoge307XHJcbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHRoaXMuZ2V0U3VnZ2VzdGlvbnMoKTtcclxuICAgIGNvbnN0IHNob3dNb2JpbGVWZXJzaW9uID1cclxuICAgICAgdGhpcy5wcm9wcy5tb2JpbGVWZXJzaW9uRW5hYmxlZCAmJlxyXG4gICAgICB0aGlzLmlzTW9iaWxlICYmXHJcbiAgICAgICh0aGlzLnN0YXRlLnRleHRJc0ZvY3VzZWQgfHwgdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUpO1xyXG4gICAgY29uc3QgTGVhdmVNb2JpbGVCdXR0b24gPSBzaG93TW9iaWxlVmVyc2lvbiA/IChcclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX2xlYXZlTW9iaWxlVGFnc0J1dHRvbiBsaW5lLWhlaWdodC0tMFwiXHJcbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVMZWF2ZU1vYmlsZUNsaWNrfVxyXG4gICAgICAgIG5vU2hhZG93PXt0cnVlfVxyXG4gICAgICAgIHVub2J0cnVzaXZlPXt0cnVlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPExlZnRBcnJvd0ljb24gLz5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICApIDogKFxyXG4gICAgICB1bmRlZmluZWRcclxuICAgICk7XHJcbiAgICBjb25zdCBzaG93SW5wdXQgPSBCb29sZWFuKFxyXG4gICAgICAoIXRoaXMucHJvcHMubWF4VGFncyB8fFxyXG4gICAgICAgIHRoaXMucHJvcHMubWF4VGFncyA+ICh0aGlzLnByb3BzLnRhZ3MgJiYgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCkpICYmXHJcbiAgICAgICAgIXRoaXMucHJvcHMucmVhZE9ubHlcclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UG9ydGFsIGNvbnRhaW5lcj17ZG9jdW1lbnQuYm9keX0gZGlzYWJsZVBvcnRhbD17IXNob3dNb2JpbGVWZXJzaW9ufT5cclxuICAgICAgICA8SW5wdXRHcm91cCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gdG9vbHRpcD17dGhpcy5wcm9wcy50b29sdGlwfT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgICAnaW5wdXRfX2Jhc2UgdGFncy1pbnB1dCcsXHJcbiAgICAgICAgICAgICAgdGhpcy5nZXRWYWxpZGF0aW9uQ2xhc3MoKSxcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZSxcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAndGFncy1pbnB1dC0tcmVhZE9ubHknOiB0aGlzLnByb3BzLnJlYWRPbmx5LFxyXG4gICAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXQtLWhhc1BsYWNlaG9sZGVyJzpcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50ZXh0UHJvcHMgJiYgdGhpcy5wcm9wcy50ZXh0UHJvcHMucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgICAgICAndGFncy1pbnB1dC0tbW9iaWxlJzogc2hvd01vYmlsZVZlcnNpb24sXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICByZWY9e3RoaXMuY29udGFpbmVyUmVmfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2hvd01vYmlsZVZlcnNpb24gJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fbW9iaWxlQmFja2Ryb3BcIiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3RhZ3NfX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICB7IXNob3dJbnB1dCAmJiBzaG93TW9iaWxlVmVyc2lvbiAmJiBMZWF2ZU1vYmlsZUJ1dHRvbn1cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50YWdzICYmIHRoaXMucHJvcHMudGFncy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdfX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGFncy5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGFnKGl0ZW0sIGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVhZE9ubHkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3RhZ19fd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yZWFkb25seUVtcHR5UGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2hvd0lucHV0ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAndGFncy1pbnB1dF9fdGFnc19fd3JhcHBlciAnICtcclxuICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMucmVhZE9ubHkgPyAnZmlsbGVkICcgOiAnJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICBzaG93Q2xlYXJCdXR0b249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi50ZXh0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRleHQtaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnRleHRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID4gMCA/IGZhbHNlIDogdGhpcy5wcm9wcy5yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXRfX3RleHQtaW5wdXQgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgKHRleHRQcm9wcy5jbGFzc05hbWUgPyB0ZXh0UHJvcHMuY2xhc3NOYW1lIDogJycpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bihzdWdnZXN0aW9ucyl9XHJcbiAgICAgICAgICAgICAgICAgIG9uRXJyb3JzQ2hhbmdlZD17dGhpcy5vblRleHRFcnJvcnNDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRleHRDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5wcm9wcy5yZWFkT25seX1cclxuICAgICAgICAgICAgICAgICAgc2hvd1ZhbGlkYXRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBpZ25vcmVDb250ZXh0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXt0aGlzLnByb3BzLnZhbGlkYXRvcnN9XHJcbiAgICAgICAgICAgICAgICAgIGN1c3RvbVZhbGlkYXRvcnM9e3RoaXMucHJvcHMuY3VzdG9tVmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgICAgYmVmb3JlPXtMZWF2ZU1vYmlsZUJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUgJiYgdGhpcy5wcm9wcy5zaG93U3VnZ2VzdGlvbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8VGFnc1N1Z2dlc3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy10ZXh0LWlucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBpbm5lclJlZj17dGhpcy5zdWdnZXN0aW9uc1JlZn1cclxuICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17dGhpcy5jb250YWluZXJSZWYuY3VycmVudH1cclxuICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17dGhpcy5wcm9wcy5hbGxvd05ld31cclxuICAgICAgICAgICAgICAgICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb249e3RoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaGluZ0V4aXN0aW5nVGFncyB8fCB0aGlzLnByb3BzLmlzTG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nQ29tcG9uZW50PXt0aGlzLnByb3BzLnN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICBpc1Zpc2libGU9e3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIEVtcHR5Q29tcG9uZW50PXt0aGlzLnByb3BzLnN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgV2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLndhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNXYWl0aW5nRm9yTW9yZUlucHV0PXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFsdWUubGVuZ3RoIDwgdGhpcy5wcm9wcy5taW5MZXR0ZXJzVG9GZXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0YWdzPXtzdWdnZXN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGVkPXt0aGlzLm9uU3VnZ2VzdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIEFkZE5ld1RhZ0NvbXBvbmVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFsbG93TmV3ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnByb3BzLmV4aXN0aW5nVGFncyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IGUubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnN0YXRlLmZldGNoZWRFeGlzdGluZ1RhZ3MgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gZS5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRleHRJc1ZhbGlkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctYWRkLW5ldy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3N1Z2dlc3Rpb24gdGFncy1pbnB1dF9fYWRkLW5ld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGROZXdUYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zLmFkZE5ld30gXCJ7dGhpcy5zdGF0ZS52YWx1ZX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wcGVyUHJvcHM9e3RoaXMucHJvcHMucG9wcGVyUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJEZWZhdWx0VmFsaWRhdGlvbigpfVxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbCAmJiAoXHJcbiAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyB8fFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRleHRJc0ZvY3VzZWQgfHxcclxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWFkT25seSB8fFxyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID49IHRoaXMucHJvcHMubWF4VGFncyB8fFxyXG4gICAgICAgICAgICAgICAgICBzaG93TW9iaWxlVmVyc2lvblxyXG4gICAgICAgICAgICAgICAgICAgID8gJ2xhYmVsLS1mb2N1c2VkJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJMYWJlbCgpfVxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgIDwvUG9ydGFsPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25UZXh0RXJyb3JzQ2hhbmdlZCA9ICh0ZXh0RXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7IHRleHRFcnJvcnMgfSksXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcblxyXG4gIHByaXZhdGUgb25Gb2N1cyA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7IHRleHRJc0ZvY3VzZWQ6IHRydWUsIHN1Z2dlc3Rpb25zVmlzaWJsZTogdHJ1ZSwgdG91Y2hlZDogdHJ1ZSB9KSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3ModGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICBjb25zdCBzaG93TW9iaWxlVmVyc2lvbiA9XHJcbiAgICAgIHRoaXMucHJvcHMubW9iaWxlVmVyc2lvbkVuYWJsZWQgJiZcclxuICAgICAgdGhpcy5pc01vYmlsZSAmJlxyXG4gICAgICAodGhpcy5zdGF0ZS50ZXh0SXNGb2N1c2VkIHx8IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlKTtcclxuICAgIGlmIChcclxuICAgICAgIXNob3dNb2JpbGVWZXJzaW9uICYmXHJcbiAgICAgIHRoaXMucHJvcHMubW9iaWxlVmVyc2lvbkVuYWJsZWQgJiZcclxuICAgICAgdGhpcy5pc01vYmlsZVxyXG4gICAgKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy50ZXh0UmVmLmN1cnJlbnQ/LmZvY3VzKCksIDEwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbktleURvd24gPSAoc3VnZ2VzdGlvbnM6IFRhZ1tdKSA9PiBhc3luYyAoXHJcbiAgICBlOiBSZWFjdC5LZXlib2FyZEV2ZW50XHJcbiAgKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09ICdUYWInKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKFxyXG4gICAgICBlLmtleSA9PT0gJ0VudGVyJyAmJlxyXG4gICAgICAodGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgfHxcclxuICAgICAgICB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAhPT0gdW5kZWZpbmVkKSAmJlxyXG4gICAgICB0aGlzLnN0YXRlLnRleHRFcnJvcnMubGVuZ3RoID09PSAwXHJcbiAgICApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBjb25zdCBleGlzdGluZ1RhZyA9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmV4aXN0aW5nVGFncy5maW5kKGV0ID0+IGV0Lm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZChcclxuICAgICAgICAgIHRoaXMucHJvcHMudGFncy5jb25jYXQoc3VnZ2VzdGlvbnNbdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb25dKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJywgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChleGlzdGluZ1RhZykge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZCh0aGlzLnByb3BzLnRhZ3MuY29uY2F0KGV4aXN0aW5nVGFnKSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJyB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuYWxsb3dOZXcpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmFkZE5ld1RhZygpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzdWdnZXN0aW9ucy5sZW5ndGggPiAwICYmIHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlKSB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgY29uc3QgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uID1cclxuICAgICAgICAgIHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBzdWdnZXN0aW9ucy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IDBcclxuICAgICAgICAgICAgPyBzdWdnZXN0aW9ucy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gLSAxO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgICAgY29uc3QgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uID1cclxuICAgICAgICAgIHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gKyAxO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBhZGROZXdUYWcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUYWcgPSBhd2FpdCB0aGlzLnByb3BzLm9uTmV3VGFnQWRkZWQodGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICBpZiAobmV3VGFnKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZChcclxuICAgICAgICB0aGlzLnByb3BzLnRhZ3MgPyB0aGlzLnByb3BzLnRhZ3MuY29uY2F0KG5ld1RhZykgOiBbbmV3VGFnXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJywgdGV4dEVycm9yczogW10gfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uU3VnZ2VzdGlvblNlbGVjdGVkID0gKHRhZzogVGFnLCBsYXN0U2VsZWN0ZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgIGNvbnN0IG5ld1RhZ3MgPSB0aGlzLnByb3BzLnRhZ3MuY29uY2F0KHRhZyk7XHJcbiAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQobmV3VGFncyk7XHJcbiAgICBjb25zdCBpc01heCA9IG5ld1RhZ3MubGVuZ3RoID09PSB0aGlzLnByb3BzLm1heFRhZ3M7XHJcbiAgICBjb25zdCBmaW5hbFZhbHVlID1cclxuICAgICAgIXRoaXMucHJvcHMuYWxsb3dOZXcgJiYgIWlzTWF4ICYmICFsYXN0U2VsZWN0ZWQgPyB0aGlzLnN0YXRlLnZhbHVlIDogJyc7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWU6IGZpbmFsVmFsdWUsXHJcbiAgICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBpc01heCA/IGZhbHNlIDogdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUsXHJcbiAgICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGV4dEVycm9yczogW10sXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhdGhpcy5wcm9wcy5tYXhUYWdzIHx8XHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoICsgMSA8IHRoaXMucHJvcHMubWF4VGFnc1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncyhmaW5hbFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uQmx1ciA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0SXNGb2N1c2VkOiBmYWxzZSxcclxuICAgICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uVGV4dENoYW5nZWQgPSAoXHJcbiAgICBlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcclxuICAgIGlzVmFsaWQ6IGJvb2xlYW5cclxuICApID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAoKSA9PiAoe1xyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIGlzVmFsaWQ6IGlzVmFsaWQsXHJcbiAgICAgICAgdGV4dElzVmFsaWQ6IGlzVmFsaWQsXHJcbiAgICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiB0cnVlLFxyXG4gICAgICB9KSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3JzID0gKHRhZ3M6IFRhZ1tdID0gdGhpcy5wcm9wcy50YWdzKSA9PiB7XHJcbiAgICBsZXQgZXJyb3JzID0gdGhpcy5nZXRFcnJvcnModGFncyk7XHJcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZXRJbnZhbGlkKGVycm9ycyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFZhbGlkKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBnZXRFcnJvcnModGFnczogVGFnW10pIHtcclxuICAgIGxldCBlcnJvcnMgPSBbXTtcclxuICAgIGlmICh0YWdzLmxlbmd0aCA8IHRoaXMucHJvcHMubWF4VGFncykge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMuc3RhdGUudGV4dEVycm9ycyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgJiYgdGFncy5sZW5ndGggPT09IDAgJiYgdGhpcy5wcm9wcy5yZXF1aXJlZCkge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KFxyXG4gICAgICAgIHRoaXMuZ2V0VHJhbnNsYXRpb25zKHRoaXMucHJvcHMudHJhbnNsYXRpb25zKS5yZXF1aXJlZFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgJiYgdGhpcy5wcm9wcy5hbGxvd05ldyAmJiAhdGhpcy5zdGF0ZS50ZXh0SXNGb2N1c2VkKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5wcm9wcy52YWx1ZU5vdEFkZGVkRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvcHMubWF4VGFncyA8ICh0aGlzLnByb3BzLnRhZ3MgJiYgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCkpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnByb3BzLm1heFRhZ3NTdXJwYXNzZWRFcnJvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3JzLmZpbHRlcihpID0+IGkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmZXRjaEV4aXN0aW5nVGFncyhzdGFydHNXaXRoOiBzdHJpbmcgPSAnJykge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnByb3BzLmZldGNoRXhpc3RpbmdUYWdzICYmXHJcbiAgICAgIHN0YXJ0c1dpdGgubGVuZ3RoID49IHRoaXMucHJvcHMubWluTGV0dGVyc1RvRmV0Y2hcclxuICAgICkge1xyXG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgKCkgPT4gdGhpcy5zZXRTdGF0ZSgoKSA9PiAoeyBmZXRjaGluZ0V4aXN0aW5nVGFnczogdHJ1ZSB9KSksXHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkaW5nRGVsYXlNc1xyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnByb3BzLmZldGNoRXhpc3RpbmdUYWdzKHN0YXJ0c1dpdGgpLnRoZW4oZmV0Y2hlZEV4aXN0aW5nVGFncyA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7XHJcbiAgICAgICAgICBmZXRjaGVkRXhpc3RpbmdUYWdzLFxyXG4gICAgICAgICAgZmV0Y2hpbmdFeGlzdGluZ1RhZ3M6IGZhbHNlLFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFN1Z2dlc3Rpb25zKCkge1xyXG4gICAgY29uc3QgZXhpc3RpbmdUYWdzOiBUYWdbXSA9IFtdXHJcbiAgICAgIC5jb25jYXQodGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgPyB0aGlzLnByb3BzLmV4aXN0aW5nVGFncyA6IFtdKVxyXG4gICAgICAuY29uY2F0KFxyXG4gICAgICAgIHRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyA/IHRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyA6IFtdXHJcbiAgICAgICk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFRhZ3MgPSB0aGlzLnByb3BzLmZpbHRlckV4aXN0aW5nVGFncyhcclxuICAgICAgdGhpcy5zdGF0ZS52YWx1ZSA/IHRoaXMuc3RhdGUudmFsdWUudG9Mb3dlckNhc2UoKSA6ICcnLFxyXG4gICAgICBleGlzdGluZ1RhZ3NcclxuICAgICk7XHJcbiAgICBsZXQgc3VnZ2VzdGlvbnMgPSBmaWx0ZXJlZFRhZ3NcclxuICAgICAgLmZpbHRlcihcclxuICAgICAgICB0YWcgPT5cclxuICAgICAgICAgIHRoaXMucHJvcHMuYWxsb3dTYW1lVGFnTXVsdGlwbGVUaW1lcyB8fFxyXG4gICAgICAgICAgIXRoaXMucHJvcHMudGFncy5zb21lKHQgPT4gdC5pZCA9PT0gdGFnLmlkKVxyXG4gICAgICApXHJcbiAgICAgIC5zbGljZSgwLCB0aGlzLnByb3BzLm1heFN1Z2dlc3Rpb25zKTtcclxuICAgIHJldHVybiBzdWdnZXN0aW9ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyVGFnKHRhZzogVGFnLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBib2R5ID0gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHt0YWcubmFtZX1cclxuICAgICAgICB7IXRoaXMucHJvcHMucmVhZE9ubHkgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy10YWctJyArIGluZGV4LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBjaXJjdWxhcj17dHJ1ZX1cclxuICAgICAgICAgICAgYmxhbms9e3RydWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudGFnUmVtb3ZlQ2xpY2sodGFnKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMSB0cmFuc2Zvcm0tcm90YXRlLS00NSBsaW5lLWhlaWdodC0tMCBwLTBcIlxyXG4gICAgICAgICAgICBDb21wb25lbnQ9e1RhZ0J1dHRvbkNvbXBvbmVudH1cclxuICAgICAgICAgICAgcHJldmVudHNEZWZhdWx0PXtmYWxzZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBsdXNJY29uIC8+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCd0YWdzLWlucHV0X190YWcnLCB7XHJcbiAgICAgICd0YWdzLWlucHV0X190YWctY2hpcCc6IHRoaXMucHJvcHMuc2hvd0NoaXBzLFxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblRhZ0NsaWNrKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy50YWdDbGljayh0YWcpfVxyXG4gICAgICAgICAgc21hbGw9e3RydWV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2JvZHl9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMudGFnQ2xpY2sodGFnKX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGtleT17aW5kZXh9PlxyXG4gICAgICAgIHtib2R5fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRhZ0NsaWNrID0gKHRhZzogVGFnKSA9PiAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uVGFnQ2xpY2sgJiYgdGhpcy5wcm9wcy5vblRhZ0NsaWNrKHRhZyk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSB0YWdSZW1vdmVDbGljayA9ICh0YWc6IFRhZykgPT4gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgbmV3VGFncyA9IHRoaXMucHJvcHMudGFncy5maWx0ZXIoc3YgPT4gc3YuaWQgIT09IHRhZy5pZCk7XHJcbiAgICAvKmlmIChuZXdUYWdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZm9jdXMoKSwgNTApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICB9KTsqL1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkICYmIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZChuZXdUYWdzKTtcclxuICAgIHRoaXMuaGFuZGxlRXJyb3JzKG5ld1RhZ3MpO1xyXG4gICAgLy8gdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUYWdzID0gd2l0aFRoZW1lQ29udGV4dDxUYWdzUHJvcHMsIEluc3RhbmNlVHlwZTx0eXBlb2YgVGFnc1Jhdz4+KFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55XHJcbiAgd2l0aEZvcm1Db250ZXh0PFRhZ3NQcm9wcz4oVGFnc1JhdyksXHJcbiAgJ3RhZ3MnXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9