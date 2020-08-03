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
/* harmony import */ var _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base/input/BaseInput */ "./src/lib/components/base/input/BaseInput.tsx");
/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button/Button */ "./src/lib/components/button/Button.tsx");
/* harmony import */ var _subComponents_TagsSuggestions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subComponents/TagsSuggestions */ "./src/lib/components/tags/subComponents/TagsSuggestions.tsx");
/* harmony import */ var _form_withFormContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form/withFormContext */ "./src/lib/components/form/withFormContext.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../themeProvider/withThemeContext */ "./src/lib/components/themeProvider/withThemeContext.tsx");
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










var defaultTagsTranslations = _objectSpread({}, _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_4__["defaultBaseTranslations"], {
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

    _this.onClickOutside = function () {
      return _this.setState({
        suggestionsVisible: false,
        preselectedSuggestion: undefined
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
    key: "handleClickOutside",
    value: function handleClickOutside(e) {
      var _this2 = this;

      if (!this.containerRef.current || this.containerRef.current.contains(e.target) || !this.suggestionsRef.current || this.suggestionsRef.current.contains(e.target)) {
        return;
      }

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
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        title: this.props.title,
        tooltip: this.props.tooltip
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, this.props.id && {
        id: this.props.id
      }, {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('input__base tags-input', this.getValidationClass(), this.props.className, {
          'tags-input--readOnly': this.props.readOnly,
          'tags-input--hasPlaceholder': this.props.textProps && this.props.textProps.placeholder
        }),
        ref: this.containerRef
      }), this.renderTags(), (!this.props.maxTags || this.props.maxTags > (this.props.tags && this.props.tags.length)) && !this.props.readOnly && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
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
        customValidators: this.props.customValidators
      })), this.state.suggestionsVisible && this.props.showSuggestions && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_subComponents_TagsSuggestions__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, this.props.id && {
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
        onClickOutside: this.onClickOutside,
        value: this.state.value,
        AddNewTagComponent: this.props.allowNew && this.state.value !== '' && (!this.props.existingTags || !this.props.existingTags.find(function (e) {
          return e.name === _this3.state.value;
        })) && (!this.state.fetchedExistingTags || !this.state.fetchedExistingTags.find(function (e) {
          return e.name === _this3.state.value;
        })) && this.state.textIsValid && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], _extends({}, this.props.id && {
          id: this.props.id + '-add-new-button'
        }, {
          className: "tags-input__suggestion tags-input__add-new",
          dropdown: true,
          onClick: this.addNewTag
        }), translations.addNew, " \"", this.state.value, "\""),
        popperProps: this.props.popperProps
      }))), this.renderDefaultValidation(), this.props.label && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
        className: this.state.value !== '' || this.state.textIsFocused || this.props.readOnly || this.props.tags.length >= this.props.maxTags ? 'label--focused' : ''
      }, this.renderLabel())));
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
      var body = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, tag.name, !this.props.readOnly && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], _extends({}, this.props.id && {
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
      var className = classnames__WEBPACK_IMPORTED_MODULE_8___default()('tags-input__tag', {
        'tags-input__tag-chip': this.props.showChips
      });

      if (this.props.onTagClick) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
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
    key: "renderTags",
    value: function renderTags() {
      var _this6 = this;

      return this.props.tags && this.props.tags.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "tags-input__tag__wrapper"
      }, this.props.tags.map(function (item, index) {
        return _this6.renderTag(item, index);
      })) : this.props.readOnly && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "tags-input__tag__wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "tags-input__tag"
      }, this.props.readonlyEmptyPlaceholder));
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
}(_base_input_BaseInput__WEBPACK_IMPORTED_MODULE_4__["BaseInput"]);
TagsRaw.defaultProps = _objectSpread({}, _base_input_BaseInput__WEBPACK_IMPORTED_MODULE_4__["BaseInput"].defaultProps, {
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
  minLettersToFetch: 0
});
var Tags = Object(_themeProvider_withThemeContext__WEBPACK_IMPORTED_MODULE_9__["withThemeContext"])(Object(_form_withFormContext__WEBPACK_IMPORTED_MODULE_7__["withFormContext"])(TagsRaw), 'tags');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9UYWdzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbImRlZmF1bHRUYWdzVHJhbnNsYXRpb25zIiwiZGVmYXVsdEJhc2VUcmFuc2xhdGlvbnMiLCJhZGROZXciLCJUYWdzUmF3IiwicHJvcHMiLCJ0ZXh0UmVmIiwic3VnZ2VzdGlvbnNSZWYiLCJvblRleHRFcnJvcnNDaGFuZ2VkIiwidGV4dEVycm9ycyIsInNldFN0YXRlIiwiaGFuZGxlRXJyb3JzIiwib25Gb2N1cyIsInRleHRJc0ZvY3VzZWQiLCJzdWdnZXN0aW9uc1Zpc2libGUiLCJ0b3VjaGVkIiwiZmV0Y2hFeGlzdGluZ1RhZ3MiLCJzdGF0ZSIsInZhbHVlIiwib25LZXlEb3duIiwic3VnZ2VzdGlvbnMiLCJlIiwia2V5IiwicHJlc2VsZWN0ZWRTdWdnZXN0aW9uIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJleGlzdGluZ1RhZyIsImV4aXN0aW5nVGFncyIsImZpbmQiLCJldCIsIm5hbWUiLCJvblRhZ3NDaGFuZ2VkIiwidGFncyIsImNvbmNhdCIsImFsbG93TmV3IiwiYWRkTmV3VGFnIiwib25OZXdUYWdBZGRlZCIsIm5ld1RhZyIsIm9uU3VnZ2VzdGlvblNlbGVjdGVkIiwidGFnIiwibmV3VGFncyIsImlzTWF4IiwibWF4VGFncyIsImZpbmFsVmFsdWUiLCJvbkJsdXIiLCJvbkNsaWNrT3V0c2lkZSIsIm9uVGV4dENoYW5nZWQiLCJpc1ZhbGlkIiwidGFyZ2V0IiwidGV4dElzVmFsaWQiLCJlcnJvcnMiLCJnZXRFcnJvcnMiLCJzZXRJbnZhbGlkIiwic2V0VmFsaWQiLCJ0YWdDbGljayIsIm9uVGFnQ2xpY2siLCJ0YWdSZW1vdmVDbGljayIsImZpbHRlciIsInN2IiwiaWQiLCJmZXRjaGluZ0V4aXN0aW5nVGFncyIsImZldGNoZWRFeGlzdGluZ1RhZ3MiLCJSZWFjdCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImJpbmQiLCJjdXJyZW50IiwiZm9jdXMiLCJvbGRQcm9wcyIsInZhbGlkYXRvcnMiLCJjdXN0b21WYWxpZGF0b3JzIiwicmVxdWlyZWQiLCJjb250YWluZXJSZWYiLCJjb250YWlucyIsImFkZE5ld09uQmx1ciIsImdldFN1Z2dlc3Rpb25zIiwiZXhpc3RpbmciLCJzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRyYW5zbGF0aW9ucyIsImdldFRyYW5zbGF0aW9ucyIsInRleHRQcm9wcyIsInRpdGxlIiwidG9vbHRpcCIsImNsYXNzTmFtZXMiLCJnZXRWYWxpZGF0aW9uQ2xhc3MiLCJjbGFzc05hbWUiLCJyZWFkT25seSIsInBsYWNlaG9sZGVyIiwicmVuZGVyVGFncyIsInNob3dTdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudCIsInN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQiLCJ3YWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50IiwibWluTGV0dGVyc1RvRmV0Y2giLCJwb3BwZXJQcm9wcyIsInJlbmRlckRlZmF1bHRWYWxpZGF0aW9uIiwibGFiZWwiLCJyZW5kZXJMYWJlbCIsInZhbHVlTm90QWRkZWRFcnJvciIsIm1heFRhZ3NTdXJwYXNzZWRFcnJvciIsImkiLCJzdGFydHNXaXRoIiwidGltZXIiLCJzZXRUaW1lb3V0IiwibG9hZGluZ0RlbGF5TXMiLCJ0aGVuIiwiY2xlYXJUaW1lb3V0IiwiZmlsdGVyZWRUYWdzIiwiZmlsdGVyRXhpc3RpbmdUYWdzIiwidG9Mb3dlckNhc2UiLCJhbGxvd1NhbWVUYWdNdWx0aXBsZVRpbWVzIiwic29tZSIsInQiLCJzbGljZSIsIm1heFN1Z2dlc3Rpb25zIiwiaW5kZXgiLCJib2R5IiwidG9TdHJpbmciLCJwIiwib25DbGljayIsImNoaWxkcmVuIiwic2hvd0NoaXBzIiwibWFwIiwiaXRlbSIsInJlbmRlclRhZyIsInJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlciIsIkJhc2VJbnB1dCIsImRlZmF1bHRQcm9wcyIsImRpc2FibGVkIiwibmV3VGFnTmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiRGF0ZSIsImdldFRpbWUiLCJ0ZXh0IiwiVGFncyIsIndpdGhUaGVtZUNvbnRleHQiLCJ3aXRoRm9ybUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTTyxJQUFNQSx1QkFBdUIscUJBQy9CQyw2RUFEK0I7QUFFbENDLFFBQU0sRUFBRTtBQUYwQixFQUE3QjtBQWlEQSxJQUFNQyxPQUFiO0FBQUE7QUFBQTtBQUFBOztBQWtDRSxtQkFBWUMsS0FBWixFQUE4QztBQUFBOztBQUFBOztBQUM1QyxpRkFBTUEsS0FBTjtBQUQ0QyxVQUh0Q0MsT0FHc0M7QUFBQSxVQUZ0Q0MsY0FFc0M7O0FBQUEsVUFtTXRDQyxtQkFuTXNDLEdBbU1oQixVQUFDQyxVQUFEO0FBQUEsYUFDNUIsTUFBS0MsUUFBTCxDQUNFO0FBQUEsZUFBTztBQUFFRCxvQkFBVSxFQUFWQTtBQUFGLFNBQVA7QUFBQSxPQURGLEVBRUU7QUFBQSxlQUFNLE1BQUtFLFlBQUwsRUFBTjtBQUFBLE9BRkYsQ0FENEI7QUFBQSxLQW5NZ0I7O0FBQUEsVUF5TXRDQyxPQXpNc0MsR0F5TTVCLFlBQU07QUFDdEIsWUFBS0YsUUFBTCxDQUNFO0FBQUVHLHFCQUFhLEVBQUUsSUFBakI7QUFBdUJDLDBCQUFrQixFQUFFLElBQTNDO0FBQWlEQyxlQUFPLEVBQUU7QUFBMUQsT0FERixFQUVFO0FBQUEsZUFBTSxNQUFLSixZQUFMLEVBQU47QUFBQSxPQUZGOztBQUlBLFlBQUtLLGlCQUFMLENBQXVCLE1BQUtDLEtBQUwsQ0FBV0MsS0FBbEM7QUFDRCxLQS9NNkM7O0FB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QVksRUFBRSxLO0FBQ2RPLGNBQVksRUFBRWpGLHVCO0FBQ2RnRyxtQkFBaUIsRUFBRTs7QUF1ZWhCLElBQU0wQyxJQUFJLEdBQUdDLHdGQUFnQixDQUNsQ0MsNkVBQWUsQ0FBWXpJLE9BQVosQ0FEbUIsRUFFbEMsTUFGa0MsQ0FBN0I7ZUFLUXVJLEk7QUFBQTs7Ozs7Ozs7OzswQkF6akJGMUksdUI7MEJBaURBRyxPOzBCQW1nQkF1SSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN2tCYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNTRhNTNkZS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWJzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW5wdXRHcm91cCB9IGZyb20gJy4uL2lucHV0R3JvdXAvSW5wdXRHcm91cCc7XHJcbmltcG9ydCB7IFRleHQsIFRleHRQcm9wcywgVGV4dFJhdyB9IGZyb20gJy4uL3RleHQvVGV4dCc7XHJcbmltcG9ydCAqIGFzIFBsdXNJY29uIGZyb20gJ21hdGVyaWFsLWRlc2lnbi1pY29ucy9jb250ZW50L3N2Zy9wcm9kdWN0aW9uL2ljX2FkZF9jaXJjbGVfb3V0bGluZV8yNHB4LnN2Zyc7XHJcbmltcG9ydCB7XHJcbiAgQmFzZUlucHV0UHJvcHMsXHJcbiAgQmFzZUlucHV0U3RhdGUsXHJcbiAgQmFzZUlucHV0LFxyXG4gIFZhbGlkYXRpb25FcnJvcixcclxuICBkZWZhdWx0QmFzZVRyYW5zbGF0aW9ucyxcclxufSBmcm9tICcuLi9iYXNlL2lucHV0L0Jhc2VJbnB1dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgVGFnc1N1Z2dlc3Rpb25zIGZyb20gJy4vc3ViQ29tcG9uZW50cy9UYWdzU3VnZ2VzdGlvbnMnO1xyXG5pbXBvcnQgeyB3aXRoRm9ybUNvbnRleHQgfSBmcm9tICcuLi9mb3JtL3dpdGhGb3JtQ29udGV4dCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB3aXRoVGhlbWVDb250ZXh0IH0gZnJvbSAnLi4vdGhlbWVQcm92aWRlci93aXRoVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgUG9wcGVyUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXIvUG9wcGVyJztcclxuXHJcbi8vIE1pc2NcclxuZXhwb3J0IHR5cGUgVGFnID0ge1xyXG4gIGlkOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUYWdzVHJhbnNsYXRpb25zID0ge1xyXG4gIC4uLmRlZmF1bHRCYXNlVHJhbnNsYXRpb25zLFxyXG4gIGFkZE5ldzogJ0FkZCBuZXcnLFxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgVGFnc1RyYW5zbGF0aW9ucyA9IFBhcnRpYWw8dHlwZW9mIGRlZmF1bHRUYWdzVHJhbnNsYXRpb25zPjtcclxuXHJcbmV4cG9ydCB0eXBlIFRhZ3NQcm9wcyA9IHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIHRhZ3M6IFRhZ1tdO1xyXG4gIGV4aXN0aW5nVGFncz86IFRhZ1tdO1xyXG4gIGZldGNoRXhpc3RpbmdUYWdzPzogKHRleHQ6IHN0cmluZykgPT4gUHJvbWlzZTxUYWdbXT47XHJcbiAgb25UYWdzQ2hhbmdlZDogKG5ld1RhZ3M6IFRhZ1tdKSA9PiB2b2lkO1xyXG4gIG9uTmV3VGFnQWRkZWQ/OiAobmV3VGFnTmFtZTogc3RyaW5nKSA9PiBQcm9taXNlPFRhZz47XHJcbiAgb25UYWdDbGljaz86ICh0YWc6IFRhZykgPT4gdm9pZDtcclxuICBzaG93Q2hpcHM/OiBib29sZWFuO1xyXG4gIGFsbG93TmV3PzogYm9vbGVhbjtcclxuICBhZGROZXdPbkJsdXI/OiBib29sZWFuO1xyXG4gIHRleHRQcm9wcz86IFRleHRQcm9wcztcclxuICByZWFkT25seT86IGJvb2xlYW47XHJcbiAgcmVhZG9ubHlFbXB0eVBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIG1heFRhZ3M/OiBudW1iZXI7XHJcbiAgdmFsdWVOb3RBZGRlZEVycm9yPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgbWF4VGFnc1N1cnBhc3NlZEVycm9yPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgc2hvd1N1Z2dlc3Rpb25zPzogYm9vbGVhbjtcclxuICBzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgd2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIGxvYWRpbmdEZWxheU1zPzogbnVtYmVyO1xyXG4gIGZpbHRlckV4aXN0aW5nVGFncz86ICh0ZXh0OiBzdHJpbmcsIGV4aXN0aW5nVGFnczogVGFnW10pID0+IFRhZ1tdO1xyXG4gIGFsbG93U2FtZVRhZ011bHRpcGxlVGltZXM/OiBib29sZWFuO1xyXG4gIG1heFN1Z2dlc3Rpb25zPzogbnVtYmVyO1xyXG4gIHBvcHBlclByb3BzPzogUGFydGlhbDxQb3BwZXJQcm9wcz47XHJcbiAgbWluTGV0dGVyc1RvRmV0Y2g/OiBudW1iZXI7XHJcbn0gJiBCYXNlSW5wdXRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCBUYWdzVHJhbnNsYXRpb25zPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFnc1N0YXRlIGV4dGVuZHMgQmFzZUlucHV0U3RhdGUge1xyXG4gIHRleHRJc0ZvY3VzZWQ6IGJvb2xlYW47XHJcbiAgdGV4dEVycm9yczogVmFsaWRhdGlvbkVycm9yW107XHJcbiAgdGV4dElzVmFsaWQ6IGJvb2xlYW47XHJcbiAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBib29sZWFuO1xyXG4gIGZldGNoZWRFeGlzdGluZ1RhZ3M6IFRhZ1tdO1xyXG4gIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBib29sZWFuO1xyXG4gIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj86IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBJbmplY3RlZFByb3BzID0ge307XHJcblxyXG5leHBvcnQgY2xhc3MgVGFnc1JhdyBleHRlbmRzIEJhc2VJbnB1dDxcclxuICBUYWdzUHJvcHMgJiBJbmplY3RlZFByb3BzLFxyXG4gIFRhZ3NTdGF0ZSxcclxuICBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIFRhZ3NUcmFuc2xhdGlvbnNcclxuPiB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFRhZ3NQcm9wcyA9IHtcclxuICAgIC4uLkJhc2VJbnB1dC5kZWZhdWx0UHJvcHMsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBjbGFzc05hbWU6ICcnLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBleGlzdGluZ1RhZ3M6IFtdLFxyXG4gICAgbWF4VGFnczogMTAwMCxcclxuICAgIG9uVGFnc0NoYW5nZWQ6ICgpID0+IHVuZGVmaW5lZCxcclxuICAgIG9uTmV3VGFnQWRkZWQ6IG5ld1RhZ05hbWUgPT5cclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKHsgbmFtZTogbmV3VGFnTmFtZSwgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH0pLFxyXG4gICAgdmFsdWVOb3RBZGRlZEVycm9yOiA8c3Bhbj5Zb3UgZm9yZ290IHRvIGFkZCB0YWc8L3NwYW4+LFxyXG4gICAgbWF4VGFnc1N1cnBhc3NlZEVycm9yOiA8c3Bhbj5NYXhpbXVtIG51bWJlciBvZiB0YWdzIHN1cnBhc3NlZDwvc3Bhbj4sXHJcbiAgICB3YWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50OiA8c3Bhbj5XYWl0aW5nIGZvciBtb3JlIGlucHV0Li4uPC9zcGFuPixcclxuICAgIHNob3dTdWdnZXN0aW9uczogdHJ1ZSxcclxuICAgIHN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudDogJ0xvYWRpbmcuLi4nLFxyXG4gICAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudDogJ05vIGV4aXN0aW5nIHRhZ3MuLi4nLFxyXG4gICAgbG9hZGluZ0RlbGF5TXM6IDUwMCxcclxuICAgIGZpbHRlckV4aXN0aW5nVGFnczogKHRleHQsIHRhZ3MpID0+XHJcbiAgICAgIHRhZ3MuZmlsdGVyKHRhZyA9PiB0YWcubmFtZSAmJiB0YWcubmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgodGV4dCkpLFxyXG4gICAgbWF4U3VnZ2VzdGlvbnM6IDUsXHJcbiAgICBhZGROZXdPbkJsdXI6IGZhbHNlLFxyXG4gICAgdHJhbnNsYXRpb25zOiBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyxcclxuICAgIG1pbkxldHRlcnNUb0ZldGNoOiAwLFxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdGV4dFJlZjogUmVhY3QuUmVmT2JqZWN0PFRleHRSYXc+O1xyXG4gIHByaXZhdGUgc3VnZ2VzdGlvbnNSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBUYWdzUHJvcHMgJiBJbmplY3RlZFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICB0ZXh0RXJyb3JzOiBbXSxcclxuICAgICAgdGV4dElzRm9jdXNlZDogZmFsc2UsXHJcbiAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBmYWxzZSxcclxuICAgICAgdGV4dElzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICBmZXRjaGVkRXhpc3RpbmdUYWdzOiBbXSxcclxuICAgIH07XHJcbiAgICB0aGlzLnRleHRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuc3VnZ2VzdGlvbnNSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlID0gdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb2N1cygpIHtcclxuICAgIGlmICh0aGlzLnRleHRSZWYuY3VycmVudCkge1xyXG4gICAgICB0aGlzLnRleHRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wczogVGFnc1Byb3BzICYgSW5qZWN0ZWRQcm9wcykge1xyXG4gICAgaWYgKFxyXG4gICAgICBvbGRQcm9wcy50YWdzICE9PSB0aGlzLnByb3BzLnRhZ3MgfHxcclxuICAgICAgb2xkUHJvcHMudmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy52YWxpZGF0b3JzIHx8XHJcbiAgICAgIG9sZFByb3BzLmN1c3RvbVZhbGlkYXRvcnMgIT09IHRoaXMucHJvcHMuY3VzdG9tVmFsaWRhdG9ycyB8fFxyXG4gICAgICBvbGRQcm9wcy5yZXF1aXJlZCAhPT0gdGhpcy5wcm9wcy5yZXF1aXJlZFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKHRoaXMucHJvcHMudGFncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlQ2xpY2tPdXRzaWRlKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmIChcclxuICAgICAgIXRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQgfHxcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudCkgfHxcclxuICAgICAgIXRoaXMuc3VnZ2VzdGlvbnNSZWYuY3VycmVudCB8fFxyXG4gICAgICB0aGlzLnN1Z2dlc3Rpb25zUmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvcHMuYWRkTmV3T25CbHVyICYmIHRoaXMuc3RhdGUudmFsdWUpIHtcclxuICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB0aGlzLmdldFN1Z2dlc3Rpb25zKCk7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gc3VnZ2VzdGlvbnMuZmluZChzID0+IHMubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgIGlmIChleGlzdGluZykge1xyXG4gICAgICAgIHRoaXMub25TdWdnZXN0aW9uU2VsZWN0ZWQoZXhpc3RpbmcpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuYWxsb3dOZXcpIHtcclxuICAgICAgICB0aGlzLmFkZE5ld1RhZygpO1xyXG4gICAgICB9XHJcbiAgICB9IC8qIGVsc2UgaWYgKHRoaXMuc3RhdGUudmFsdWUpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJyB9KTtcclxuICAgIH0qL1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb25zID0gdGhpcy5nZXRUcmFuc2xhdGlvbnMoZGVmYXVsdFRhZ3NUcmFuc2xhdGlvbnMpO1xyXG4gICAgY29uc3QgdGV4dFByb3BzID0gdGhpcy5wcm9wcy50ZXh0UHJvcHMgPyB0aGlzLnByb3BzLnRleHRQcm9wcyA6IHt9O1xyXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB0aGlzLmdldFN1Z2dlc3Rpb25zKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SW5wdXRHcm91cCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gdG9vbHRpcD17dGhpcy5wcm9wcy50b29sdGlwfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAnaW5wdXRfX2Jhc2UgdGFncy1pbnB1dCcsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VmFsaWRhdGlvbkNsYXNzKCksXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXQtLXJlYWRPbmx5JzogdGhpcy5wcm9wcy5yZWFkT25seSxcclxuICAgICAgICAgICAgICAndGFncy1pbnB1dC0taGFzUGxhY2Vob2xkZXInOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50ZXh0UHJvcHMgJiYgdGhpcy5wcm9wcy50ZXh0UHJvcHMucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICByZWY9e3RoaXMuY29udGFpbmVyUmVmfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLnJlbmRlclRhZ3MoKX1cclxuICAgICAgICAgIHsoIXRoaXMucHJvcHMubWF4VGFncyB8fFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1heFRhZ3MgPiAodGhpcy5wcm9wcy50YWdzICYmIHRoaXMucHJvcHMudGFncy5sZW5ndGgpKSAmJlxyXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXRfX3RhZ3NfX3dyYXBwZXIgJyArXHJcbiAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnJlYWRPbmx5ID8gJ2ZpbGxlZCAnIDogJycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgc2hvd0NsZWFyQnV0dG9uPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICB7Li4udGV4dFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy10ZXh0LWlucHV0JyxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy50ZXh0UmVmfVxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRoaXMucHJvcHMucmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICd0YWdzLWlucHV0X190ZXh0LWlucHV0ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICh0ZXh0UHJvcHMuY2xhc3NOYW1lID8gdGV4dFByb3BzLmNsYXNzTmFtZSA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd24oc3VnZ2VzdGlvbnMpfVxyXG4gICAgICAgICAgICAgICAgICBvbkVycm9yc0NoYW5nZWQ9e3RoaXMub25UZXh0RXJyb3JzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UZXh0Q2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZE9ubHl9XHJcbiAgICAgICAgICAgICAgICAgIHNob3dWYWxpZGF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgaWdub3JlQ29udGV4dD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17dGhpcy5wcm9wcy52YWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgICBjdXN0b21WYWxpZGF0b3JzPXt0aGlzLnByb3BzLmN1c3RvbVZhbGlkYXRvcnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlICYmIHRoaXMucHJvcHMuc2hvd1N1Z2dlc3Rpb25zICYmIChcclxuICAgICAgICAgICAgICAgICAgPFRhZ3NTdWdnZXN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctdGV4dC1pbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJSZWY9e3RoaXMuc3VnZ2VzdGlvbnNSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e3RoaXMuY29udGFpbmVyUmVmLmN1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RoaXMucHJvcHMuYWxsb3dOZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uPXt0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmZldGNoaW5nRXhpc3RpbmdUYWdzfVxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmdDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZT17dGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgRW1wdHlDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICBXYWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMud2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc1dhaXRpbmdGb3JNb3JlSW5wdXQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZS5sZW5ndGggPCB0aGlzLnByb3BzLm1pbkxldHRlcnNUb0ZldGNoXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M9e3N1Z2dlc3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0ZWQ9e3RoaXMub25TdWdnZXN0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGlja091dHNpZGU9e3RoaXMub25DbGlja091dHNpZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkTmV3VGFnQ29tcG9uZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWxsb3dOZXcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFsdWUgIT09ICcnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMucHJvcHMuZXhpc3RpbmdUYWdzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmV4aXN0aW5nVGFncy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gZS5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBlLm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGV4dElzVmFsaWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy1hZGQtbmV3LWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fc3VnZ2VzdGlvbiB0YWdzLWlucHV0X19hZGQtbmV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZE5ld1RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMuYWRkTmV3fSBcInt0aGlzLnN0YXRlLnZhbHVlfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwb3BwZXJQcm9wcz17dGhpcy5wcm9wcy5wb3BwZXJQcm9wc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJEZWZhdWx0VmFsaWRhdGlvbigpfVxyXG4gICAgICAgICAge3RoaXMucHJvcHMubGFiZWwgJiYgKFxyXG4gICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGV4dElzRm9jdXNlZCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWFkT25seSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA+PSB0aGlzLnByb3BzLm1heFRhZ3NcclxuICAgICAgICAgICAgICAgICAgPyAnbGFiZWwtLWZvY3VzZWQnXHJcbiAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJMYWJlbCgpfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25UZXh0RXJyb3JzQ2hhbmdlZCA9ICh0ZXh0RXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7IHRleHRFcnJvcnMgfSksXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcblxyXG4gIHByaXZhdGUgb25Gb2N1cyA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHsgdGV4dElzRm9jdXNlZDogdHJ1ZSwgc3VnZ2VzdGlvbnNWaXNpYmxlOiB0cnVlLCB0b3VjaGVkOiB0cnVlIH0sXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcbiAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25LZXlEb3duID0gKHN1Z2dlc3Rpb25zOiBUYWdbXSkgPT4gYXN5bmMgZSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGUua2V5ID09PSAnRW50ZXInICYmXHJcbiAgICAgICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyB8fFxyXG4gICAgICAgIHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICE9PSB1bmRlZmluZWQpICYmXHJcbiAgICAgIHRoaXMuc3RhdGUudGV4dEVycm9ycy5sZW5ndGggPT09IDBcclxuICAgICkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nVGFnID1cclxuICAgICAgICB0aGlzLnByb3BzLmV4aXN0aW5nVGFncyAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzLmZpbmQoZXQgPT4gZXQubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKFxyXG4gICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmNvbmNhdChzdWdnZXN0aW9uc1t0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbl0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnLCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGV4aXN0aW5nVGFnKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKHRoaXMucHJvcHMudGFncy5jb25jYXQoZXhpc3RpbmdUYWcpKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5hbGxvd05ldykge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYWRkTmV3VGFnKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHN1Z2dlc3Rpb25zLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUpIHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICBjb25zdCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gMFxyXG4gICAgICAgICAgICA/IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAtIDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICBjb25zdCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiArIDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGFkZE5ld1RhZyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhZyA9IGF3YWl0IHRoaXMucHJvcHMub25OZXdUYWdBZGRlZCh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgIGlmIChuZXdUYWcpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKFxyXG4gICAgICAgIHRoaXMucHJvcHMudGFncyA/IHRoaXMucHJvcHMudGFncy5jb25jYXQobmV3VGFnKSA6IFtuZXdUYWddXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnLCB0ZXh0RXJyb3JzOiBbXSB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25TdWdnZXN0aW9uU2VsZWN0ZWQgPSAodGFnOiBUYWcpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhZ3MgPSB0aGlzLnByb3BzLnRhZ3MuY29uY2F0KHRhZyk7XHJcbiAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQobmV3VGFncyk7XHJcbiAgICBjb25zdCBpc01heCA9IG5ld1RhZ3MubGVuZ3RoID09PSB0aGlzLnByb3BzLm1heFRhZ3M7XHJcbiAgICBjb25zdCBmaW5hbFZhbHVlID0gIXRoaXMucHJvcHMuYWxsb3dOZXcgJiYgIWlzTWF4ID8gdGhpcy5zdGF0ZS52YWx1ZSA6ICcnO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlOiBmaW5hbFZhbHVlLFxyXG4gICAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogaXNNYXggPyBmYWxzZSA6IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlLFxyXG4gICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICAgIHRleHRFcnJvcnM6IFtdLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIXRoaXMucHJvcHMubWF4VGFncyB8fFxyXG4gICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCArIDEgPCB0aGlzLnByb3BzLm1heFRhZ3NcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoZmluYWxWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbkJsdXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dElzRm9jdXNlZDogZmFsc2UsXHJcbiAgICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbkNsaWNrT3V0c2lkZSA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuXHJcbiAgcHJpdmF0ZSBvblRleHRDaGFuZ2VkID0gKFxyXG4gICAgZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXHJcbiAgICBpc1ZhbGlkOiBib29sZWFuXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHtcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBpc1ZhbGlkOiBpc1ZhbGlkLFxyXG4gICAgICAgIHRleHRJc1ZhbGlkOiBpc1ZhbGlkLFxyXG4gICAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgfSksXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcbiAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9ycyA9ICh0YWdzOiBUYWdbXSA9IHRoaXMucHJvcHMudGFncykgPT4ge1xyXG4gICAgbGV0IGVycm9ycyA9IHRoaXMuZ2V0RXJyb3JzKHRhZ3MpO1xyXG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0SW52YWxpZChlcnJvcnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRWYWxpZCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZ2V0RXJyb3JzKHRhZ3M6IFRhZ1tdKSB7XHJcbiAgICBsZXQgZXJyb3JzID0gW107XHJcbiAgICBpZiAodGFncy5sZW5ndGggPCB0aGlzLnByb3BzLm1heFRhZ3MpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnN0YXRlLnRleHRFcnJvcnMpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgIT09ICcnICYmIHRhZ3MubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMucmVxdWlyZWQpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdChcclxuICAgICAgICB0aGlzLmdldFRyYW5zbGF0aW9ucyh0aGlzLnByb3BzLnRyYW5zbGF0aW9ucykucmVxdWlyZWRcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlICYmIHRoaXMucHJvcHMuYWxsb3dOZXcgJiYgIXRoaXMuc3RhdGUudGV4dElzRm9jdXNlZCkge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMucHJvcHMudmFsdWVOb3RBZGRlZEVycm9yKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLm1heFRhZ3MgPCAodGhpcy5wcm9wcy50YWdzICYmIHRoaXMucHJvcHMudGFncy5sZW5ndGgpKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5wcm9wcy5tYXhUYWdzU3VycGFzc2VkRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9ycy5maWx0ZXIoaSA9PiBpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmV0Y2hFeGlzdGluZ1RhZ3Moc3RhcnRzV2l0aDogc3RyaW5nID0gJycpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5wcm9wcy5mZXRjaEV4aXN0aW5nVGFncyAmJlxyXG4gICAgICBzdGFydHNXaXRoLmxlbmd0aCA+PSB0aGlzLnByb3BzLm1pbkxldHRlcnNUb0ZldGNoXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmZXRjaGluZ0V4aXN0aW5nVGFnczogdHJ1ZSB9KSxcclxuICAgICAgICB0aGlzLnByb3BzLmxvYWRpbmdEZWxheU1zXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hFeGlzdGluZ1RhZ3Moc3RhcnRzV2l0aCkudGhlbihmZXRjaGVkRXhpc3RpbmdUYWdzID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZmV0Y2hlZEV4aXN0aW5nVGFncyxcclxuICAgICAgICAgIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFN1Z2dlc3Rpb25zKCkge1xyXG4gICAgY29uc3QgZXhpc3RpbmdUYWdzOiBUYWdbXSA9IFtdXHJcbiAgICAgIC5jb25jYXQodGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgPyB0aGlzLnByb3BzLmV4aXN0aW5nVGFncyA6IFtdKVxyXG4gICAgICAuY29uY2F0KFxyXG4gICAgICAgIHRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyA/IHRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyA6IFtdXHJcbiAgICAgICk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFRhZ3MgPSB0aGlzLnByb3BzLmZpbHRlckV4aXN0aW5nVGFncyhcclxuICAgICAgdGhpcy5zdGF0ZS52YWx1ZSA/IHRoaXMuc3RhdGUudmFsdWUudG9Mb3dlckNhc2UoKSA6ICcnLFxyXG4gICAgICBleGlzdGluZ1RhZ3NcclxuICAgICk7XHJcbiAgICBsZXQgc3VnZ2VzdGlvbnMgPSBmaWx0ZXJlZFRhZ3NcclxuICAgICAgLmZpbHRlcihcclxuICAgICAgICB0YWcgPT5cclxuICAgICAgICAgIHRoaXMucHJvcHMuYWxsb3dTYW1lVGFnTXVsdGlwbGVUaW1lcyB8fFxyXG4gICAgICAgICAgIXRoaXMucHJvcHMudGFncy5zb21lKHQgPT4gdC5pZCA9PT0gdGFnLmlkKVxyXG4gICAgICApXHJcbiAgICAgIC5zbGljZSgwLCB0aGlzLnByb3BzLm1heFN1Z2dlc3Rpb25zKTtcclxuICAgIHJldHVybiBzdWdnZXN0aW9ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyVGFnKHRhZzogVGFnLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBib2R5ID0gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHt0YWcubmFtZX1cclxuICAgICAgICB7IXRoaXMucHJvcHMucmVhZE9ubHkgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy10YWctJyArIGluZGV4LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBjaXJjdWxhcj17dHJ1ZX1cclxuICAgICAgICAgICAgYmxhbms9e3RydWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudGFnUmVtb3ZlQ2xpY2sodGFnKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMSB0cmFuc2Zvcm0tcm90YXRlLS00NSBsaW5lLWhlaWdodC0tMCBwLTBcIlxyXG4gICAgICAgICAgICBDb21wb25lbnQ9e3AgPT4gKFxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cC5jbGFzc05hbWV9IGlkPXtwLmlkfSBvbkNsaWNrPXtwLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAge3AuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGx1c0ljb24gLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3RhZ3MtaW5wdXRfX3RhZycsIHtcclxuICAgICAgJ3RhZ3MtaW5wdXRfX3RhZy1jaGlwJzogdGhpcy5wcm9wcy5zaG93Q2hpcHMsXHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uVGFnQ2xpY2spIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRhZ0NsaWNrKHRhZyl9XHJcbiAgICAgICAgICBzbWFsbD17dHJ1ZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Ym9keX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy50YWdDbGljayh0YWcpfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAge2JvZHl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdGFnQ2xpY2sgPSAodGFnOiBUYWcpID0+ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25UYWdDbGljayAmJiB0aGlzLnByb3BzLm9uVGFnQ2xpY2sodGFnKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHRhZ1JlbW92ZUNsaWNrID0gKHRhZzogVGFnKSA9PiAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBuZXdUYWdzID0gdGhpcy5wcm9wcy50YWdzLmZpbHRlcihzdiA9PiBzdi5pZCAhPT0gdGFnLmlkKTtcclxuICAgIC8qaWYgKG5ld1RhZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5mb2N1cygpLCA1MCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgIH0pOyovXHJcbiAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKG5ld1RhZ3MpO1xyXG4gICAgdGhpcy5oYW5kbGVFcnJvcnMobmV3VGFncyk7XHJcbiAgICAvLyB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJUYWdzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID4gMCA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdfX3dyYXBwZXJcIj5cclxuICAgICAgICB7dGhpcy5wcm9wcy50YWdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHRoaXMucmVuZGVyVGFnKGl0ZW0sIGluZGV4KSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IChcclxuICAgICAgdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdfX3dyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ3MgPSB3aXRoVGhlbWVDb250ZXh0PFRhZ3NQcm9wcywgSW5zdGFuY2VUeXBlPHR5cGVvZiBUYWdzUmF3Pj4oXHJcbiAgd2l0aEZvcm1Db250ZXh0PFRhZ3NQcm9wcz4oVGFnc1JhdyksXHJcbiAgJ3RhZ3MnXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdzO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3ZhbGlkYXRvcnMvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrYm94JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2R5bmFtaWNTdWJtaXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvZm9ybSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9pbnB1dEdyb3VwJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2lucHV0SGVhZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL21vbmV5L01vbmV5JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL29wZW5pbmdIb3Vycy9vcGVuaW5nSG91cnNEYXknO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvb3BlbmluZ0hvdXJzL29wZW5pbmdIb3Vyc1NwZWNpYWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvb3BlbmluZ0hvdXJzL29wZW5pbmdIb3Vyc1dlZWsnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW9Db250YWluZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0L1NlbGVjdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9zdWJtaXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGFncyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90ZXh0JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RleHRBcmVhJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RpbWUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGltZVNwYW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGhlbWVQcm92aWRlcic7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=