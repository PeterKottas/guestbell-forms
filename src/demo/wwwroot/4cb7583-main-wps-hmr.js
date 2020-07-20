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
      } else if (this.state.value) {
        this.setState({
          value: ''
        });
      }
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
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_text_Text__WEBPACK_IMPORTED_MODULE_2__["Text"], _extends({}, textProps, this.props.id && {
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
  addNewOnBlur: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9UYWdzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbImRlZmF1bHRUYWdzVHJhbnNsYXRpb25zIiwiZGVmYXVsdEJhc2VUcmFuc2xhdGlvbnMiLCJhZGROZXciLCJUYWdzUmF3IiwicHJvcHMiLCJ0ZXh0UmVmIiwic3VnZ2VzdGlvbnNSZWYiLCJvblRleHRFcnJvcnNDaGFuZ2VkIiwidGV4dEVycm9ycyIsInNldFN0YXRlIiwiaGFuZGxlRXJyb3JzIiwib25Gb2N1cyIsInRleHRJc0ZvY3VzZWQiLCJzdWdnZXN0aW9uc1Zpc2libGUiLCJ0b3VjaGVkIiwiZmV0Y2hFeGlzdGluZ1RhZ3MiLCJzdGF0ZSIsInZhbHVlIiwib25LZXlEb3duIiwic3VnZ2VzdGlvbnMiLCJlIiwia2V5IiwicHJlc2VsZWN0ZWRTdWdnZXN0aW9uIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJleGlzdGluZ1RhZyIsImV4aXN0aW5nVGFncyIsImZpbmQiLCJldCIsIm5hbWUiLCJvblRhZ3NDaGFuZ2VkIiwidGFncyIsImNvbmNhdCIsImFsbG93TmV3IiwiYWRkTmV3VGFnIiwib25OZXdUYWdBZGRlZCIsIm5ld1RhZyIsIm9uU3VnZ2VzdGlvblNlbGVjdGVkIiwidGFnIiwibmV3VGFncyIsImlzTWF4IiwibWF4VGFncyIsImZpbmFsVmFsdWUiLCJvbkJsdXIiLCJvbkNsaWNrT3V0c2lkZSIsIm9uVGV4dENoYW5nZWQiLCJpc1ZhbGlkIiwidGFyZ2V0IiwidGV4dElzVmFsaWQiLCJlcnJvcnMiLCJnZXRFcnJvcnMiLCJzZXRJbnZhbGlkIiwic2V0VmFsaWQiLCJ0YWdDbGljayIsIm9uVGFnQ2xpY2siLCJ0YWdSZW1vdmVDbGljayIsImZpbHRlciIsInN2IiwiaWQiLCJmZXRjaGluZ0V4aXN0aW5nVGFncyIsImZldGNoZWRFeGlzdGluZ1RhZ3MiLCJSZWFjdCIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImJpbmQiLCJjdXJyZW50IiwiZm9jdXMiLCJvbGRQcm9wcyIsInZhbGlkYXRvcnMiLCJjdXN0b21WYWxpZGF0b3JzIiwicmVxdWlyZWQiLCJjb250YWluZXJSZWYiLCJjb250YWlucyIsImFkZE5ld09uQmx1ciIsImdldFN1Z2dlc3Rpb25zIiwiZXhpc3RpbmciLCJzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRyYW5zbGF0aW9ucyIsImdldFRyYW5zbGF0aW9ucyIsInRleHRQcm9wcyIsInRpdGxlIiwidG9vbHRpcCIsImNsYXNzTmFtZXMiLCJnZXRWYWxpZGF0aW9uQ2xhc3MiLCJjbGFzc05hbWUiLCJyZWFkT25seSIsInBsYWNlaG9sZGVyIiwicmVuZGVyVGFncyIsInNob3dTdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudCIsInN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQiLCJ3YWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50IiwibWluTGV0dGVyc1RvRmV0Y2giLCJwb3BwZXJQcm9wcyIsInJlbmRlckRlZmF1bHRWYWxpZGF0aW9uIiwibGFiZWwiLCJyZW5kZXJMYWJlbCIsInZhbHVlTm90QWRkZWRFcnJvciIsIm1heFRhZ3NTdXJwYXNzZWRFcnJvciIsImkiLCJzdGFydHNXaXRoIiwidGltZXIiLCJzZXRUaW1lb3V0IiwibG9hZGluZ0RlbGF5TXMiLCJ0aGVuIiwiY2xlYXJUaW1lb3V0IiwiZmlsdGVyZWRUYWdzIiwiZmlsdGVyRXhpc3RpbmdUYWdzIiwidG9Mb3dlckNhc2UiLCJhbGxvd1NhbWVUYWdNdWx0aXBsZVRpbWVzIiwic29tZSIsInQiLCJzbGljZSIsIm1heFN1Z2dlc3Rpb25zIiwiaW5kZXgiLCJib2R5IiwidG9TdHJpbmciLCJwIiwib25DbGljayIsImNoaWxkcmVuIiwic2hvd0NoaXBzIiwibWFwIiwiaXRlbSIsInJlbmRlclRhZyIsInJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlciIsIkJhc2VJbnB1dCIsImRlZmF1bHRQcm9wcyIsImRpc2FibGVkIiwibmV3VGFnTmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiRGF0ZSIsImdldFRpbWUiLCJ0ZXh0IiwiVGFncyIsIndpdGhUaGVtZUNvbnRleHQiLCJ3aXRoRm9ybUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTTyxJQUFNQSx1QkFBdUIscUJBQy9CQyw2RUFEK0I7QUFFbENDLFFBQU0sRUFBRTtBQUYwQixFQUE3QjtBQWlEQSxJQUFNQyxPQUFiO0FBQUE7QUFBQTtBQUFBOztBQWtDRSxtQkFBWUMsS0FBWixFQUE4QztBQUFBOztBQUFBOztBQUM1QyxpRkFBTUEsS0FBTjtBQUQ0QyxVQUh0Q0MsT0FHc0M7QUFBQSxVQUZ0Q0MsY0FFc0M7O0FBQUEsVUFrTXRDQyxtQkFsTXNDLEdBa01oQixVQUFDQyxVQUFEO0FBQUEsYUFDNUIsTUFBS0MsUUFBTCxDQUNFO0FBQUEsZUFBTztBQUFFRCxvQkFBVSxFQUFWQTtBQUFGLFNBQVA7QUFBQSxPQURGLEVBRUU7QUFBQSxlQUFNLE1BQUtFLFlBQUwsRUFBTjtBQUFBLE9BRkYsQ0FENEI7QUFBQSxLQWxNZ0I7O0FBQUEsVUF3TXRDQyxPQXhNc0MsR0F3TTVCLFlBQU07QUFDdEIsWUFBS0YsUUFBTCxDQUNFO0FBQUVHLHFCQUFhLEVBQUUsSUFBakI7QUFBdUJDLDBCQUFrQixFQUFFLElBQTNDO0FBQWlEQyxlQUFPLEVBQUU7QUFBMUQsT0FERixFQUVFO0FBQUEsZUFBTSxNQUFLSixZQUFMLEVBQU47QUFBQSxPQUZGOztBQUlBLFlBQUtLLGlCQUFMLENBQXVCLE1BQUtDLEtBQUwsQ0FBV0MsS0FBbEM7QUFDRCxLQTlNNkM7O0FB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QWxDLENBQWhCO0FBQUEsS0FBZixDQURrQjtBQUFBLEc7QUFFcEJwQixnQkFBYyxFQUFFLEM7QUFDaEIzQyxjQUFZLEVBQUUsSTtBQUNkTyxjQUFZLEVBQUVqRix1QjtBQUNkZ0csbUJBQWlCLEVBQUU7O0FBc2VoQixJQUFNMEMsSUFBSSxHQUFHQyx3RkFBZ0IsQ0FDbENDLDZFQUFlLENBQVl6SSxPQUFaLENBRG1CLEVBRWxDLE1BRmtDLENBQTdCO2VBS1F1SSxJO0FBQUE7Ozs7Ozs7Ozs7MEJBeGpCRjFJLHVCOzBCQWlEQUcsTzswQkFrZ0JBdUksSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVrQmI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjRjYjc1ODMtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlic1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElucHV0R3JvdXAgfSBmcm9tICcuLi9pbnB1dEdyb3VwL0lucHV0R3JvdXAnO1xyXG5pbXBvcnQgeyBUZXh0LCBUZXh0UHJvcHMsIFRleHRSYXcgfSBmcm9tICcuLi90ZXh0L1RleHQnO1xyXG5pbXBvcnQgKiBhcyBQbHVzSWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvY29udGVudC9zdmcvcHJvZHVjdGlvbi9pY19hZGRfY2lyY2xlX291dGxpbmVfMjRweC5zdmcnO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VJbnB1dFByb3BzLFxyXG4gIEJhc2VJbnB1dFN0YXRlLFxyXG4gIEJhc2VJbnB1dCxcclxuICBWYWxpZGF0aW9uRXJyb3IsXHJcbiAgZGVmYXVsdEJhc2VUcmFuc2xhdGlvbnMsXHJcbn0gZnJvbSAnLi4vYmFzZS9pbnB1dC9CYXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9idXR0b24vQnV0dG9uJztcclxuaW1wb3J0IFRhZ3NTdWdnZXN0aW9ucyBmcm9tICcuL3N1YkNvbXBvbmVudHMvVGFnc1N1Z2dlc3Rpb25zJztcclxuaW1wb3J0IHsgd2l0aEZvcm1Db250ZXh0IH0gZnJvbSAnLi4vZm9ybS93aXRoRm9ybUNvbnRleHQnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgd2l0aFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL3RoZW1lUHJvdmlkZXIvd2l0aFRoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IFBvcHBlclByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyL1BvcHBlcic7XHJcblxyXG4vLyBNaXNjXHJcbmV4cG9ydCB0eXBlIFRhZyA9IHtcclxuICBpZDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyA9IHtcclxuICAuLi5kZWZhdWx0QmFzZVRyYW5zbGF0aW9ucyxcclxuICBhZGROZXc6ICdBZGQgbmV3JyxcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFRhZ3NUcmFuc2xhdGlvbnMgPSBQYXJ0aWFsPHR5cGVvZiBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucz47XHJcblxyXG5leHBvcnQgdHlwZSBUYWdzUHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICB0YWdzOiBUYWdbXTtcclxuICBleGlzdGluZ1RhZ3M/OiBUYWdbXTtcclxuICBmZXRjaEV4aXN0aW5nVGFncz86ICh0ZXh0OiBzdHJpbmcpID0+IFByb21pc2U8VGFnW10+O1xyXG4gIG9uVGFnc0NoYW5nZWQ6IChuZXdUYWdzOiBUYWdbXSkgPT4gdm9pZDtcclxuICBvbk5ld1RhZ0FkZGVkPzogKG5ld1RhZ05hbWU6IHN0cmluZykgPT4gUHJvbWlzZTxUYWc+O1xyXG4gIG9uVGFnQ2xpY2s/OiAodGFnOiBUYWcpID0+IHZvaWQ7XHJcbiAgc2hvd0NoaXBzPzogYm9vbGVhbjtcclxuICBhbGxvd05ldz86IGJvb2xlYW47XHJcbiAgYWRkTmV3T25CbHVyPzogYm9vbGVhbjtcclxuICB0ZXh0UHJvcHM/OiBUZXh0UHJvcHM7XHJcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xyXG4gIHJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcj86IHN0cmluZztcclxuICBtYXhUYWdzPzogbnVtYmVyO1xyXG4gIHZhbHVlTm90QWRkZWRFcnJvcj86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIG1heFRhZ3NTdXJwYXNzZWRFcnJvcj86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHNob3dTdWdnZXN0aW9ucz86IGJvb2xlYW47XHJcbiAgc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHdhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBsb2FkaW5nRGVsYXlNcz86IG51bWJlcjtcclxuICBmaWx0ZXJFeGlzdGluZ1RhZ3M/OiAodGV4dDogc3RyaW5nLCBleGlzdGluZ1RhZ3M6IFRhZ1tdKSA9PiBUYWdbXTtcclxuICBhbGxvd1NhbWVUYWdNdWx0aXBsZVRpbWVzPzogYm9vbGVhbjtcclxuICBtYXhTdWdnZXN0aW9ucz86IG51bWJlcjtcclxuICBwb3BwZXJQcm9wcz86IFBhcnRpYWw8UG9wcGVyUHJvcHM+O1xyXG4gIG1pbkxldHRlcnNUb0ZldGNoPzogbnVtYmVyO1xyXG59ICYgQmFzZUlucHV0UHJvcHM8SFRNTElucHV0RWxlbWVudCwgVGFnc1RyYW5zbGF0aW9ucz47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhZ3NTdGF0ZSBleHRlbmRzIEJhc2VJbnB1dFN0YXRlIHtcclxuICB0ZXh0SXNGb2N1c2VkOiBib29sZWFuO1xyXG4gIHRleHRFcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdO1xyXG4gIHRleHRJc1ZhbGlkOiBib29sZWFuO1xyXG4gIHN1Z2dlc3Rpb25zVmlzaWJsZTogYm9vbGVhbjtcclxuICBmZXRjaGVkRXhpc3RpbmdUYWdzOiBUYWdbXTtcclxuICBmZXRjaGluZ0V4aXN0aW5nVGFnczogYm9vbGVhbjtcclxuICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbnR5cGUgSW5qZWN0ZWRQcm9wcyA9IHt9O1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhZ3NSYXcgZXh0ZW5kcyBCYXNlSW5wdXQ8XHJcbiAgVGFnc1Byb3BzICYgSW5qZWN0ZWRQcm9wcyxcclxuICBUYWdzU3RhdGUsXHJcbiAgSFRNTElucHV0RWxlbWVudCxcclxuICBUYWdzVHJhbnNsYXRpb25zXHJcbj4ge1xyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBUYWdzUHJvcHMgPSB7XHJcbiAgICAuLi5CYXNlSW5wdXQuZGVmYXVsdFByb3BzLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgZXhpc3RpbmdUYWdzOiBbXSxcclxuICAgIG1heFRhZ3M6IDEwMDAsXHJcbiAgICBvblRhZ3NDaGFuZ2VkOiAoKSA9PiB1bmRlZmluZWQsXHJcbiAgICBvbk5ld1RhZ0FkZGVkOiBuZXdUYWdOYW1lID0+XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSh7IG5hbWU6IG5ld1RhZ05hbWUsIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9KSxcclxuICAgIHZhbHVlTm90QWRkZWRFcnJvcjogPHNwYW4+WW91IGZvcmdvdCB0byBhZGQgdGFnPC9zcGFuPixcclxuICAgIG1heFRhZ3NTdXJwYXNzZWRFcnJvcjogPHNwYW4+TWF4aW11bSBudW1iZXIgb2YgdGFncyBzdXJwYXNzZWQ8L3NwYW4+LFxyXG4gICAgd2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudDogPHNwYW4+V2FpdGluZyBmb3IgbW9yZSBpbnB1dC4uLjwvc3Bhbj4sXHJcbiAgICBzaG93U3VnZ2VzdGlvbnM6IHRydWUsXHJcbiAgICBzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQ6ICdMb2FkaW5nLi4uJyxcclxuICAgIHN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQ6ICdObyBleGlzdGluZyB0YWdzLi4uJyxcclxuICAgIGxvYWRpbmdEZWxheU1zOiA1MDAsXHJcbiAgICBmaWx0ZXJFeGlzdGluZ1RhZ3M6ICh0ZXh0LCB0YWdzKSA9PlxyXG4gICAgICB0YWdzLmZpbHRlcih0YWcgPT4gdGFnLm5hbWUgJiYgdGFnLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRleHQpKSxcclxuICAgIG1heFN1Z2dlc3Rpb25zOiA1LFxyXG4gICAgYWRkTmV3T25CbHVyOiB0cnVlLFxyXG4gICAgdHJhbnNsYXRpb25zOiBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyxcclxuICAgIG1pbkxldHRlcnNUb0ZldGNoOiAwLFxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdGV4dFJlZjogUmVhY3QuUmVmT2JqZWN0PFRleHRSYXc+O1xyXG4gIHByaXZhdGUgc3VnZ2VzdGlvbnNSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBUYWdzUHJvcHMgJiBJbmplY3RlZFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICB0ZXh0RXJyb3JzOiBbXSxcclxuICAgICAgdGV4dElzRm9jdXNlZDogZmFsc2UsXHJcbiAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBmYWxzZSxcclxuICAgICAgdGV4dElzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICBmZXRjaGVkRXhpc3RpbmdUYWdzOiBbXSxcclxuICAgIH07XHJcbiAgICB0aGlzLnRleHRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuc3VnZ2VzdGlvbnNSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlID0gdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb2N1cygpIHtcclxuICAgIGlmICh0aGlzLnRleHRSZWYuY3VycmVudCkge1xyXG4gICAgICB0aGlzLnRleHRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wczogVGFnc1Byb3BzICYgSW5qZWN0ZWRQcm9wcykge1xyXG4gICAgaWYgKFxyXG4gICAgICBvbGRQcm9wcy50YWdzICE9PSB0aGlzLnByb3BzLnRhZ3MgfHxcclxuICAgICAgb2xkUHJvcHMudmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy52YWxpZGF0b3JzIHx8XHJcbiAgICAgIG9sZFByb3BzLmN1c3RvbVZhbGlkYXRvcnMgIT09IHRoaXMucHJvcHMuY3VzdG9tVmFsaWRhdG9ycyB8fFxyXG4gICAgICBvbGRQcm9wcy5yZXF1aXJlZCAhPT0gdGhpcy5wcm9wcy5yZXF1aXJlZFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKHRoaXMucHJvcHMudGFncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlQ2xpY2tPdXRzaWRlKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmIChcclxuICAgICAgIXRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQgfHxcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudCkgfHxcclxuICAgICAgIXRoaXMuc3VnZ2VzdGlvbnNSZWYuY3VycmVudCB8fFxyXG4gICAgICB0aGlzLnN1Z2dlc3Rpb25zUmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvcHMuYWRkTmV3T25CbHVyICYmIHRoaXMuc3RhdGUudmFsdWUpIHtcclxuICAgICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB0aGlzLmdldFN1Z2dlc3Rpb25zKCk7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gc3VnZ2VzdGlvbnMuZmluZChzID0+IHMubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgIGlmIChleGlzdGluZykge1xyXG4gICAgICAgIHRoaXMub25TdWdnZXN0aW9uU2VsZWN0ZWQoZXhpc3RpbmcpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuYWxsb3dOZXcpIHtcclxuICAgICAgICB0aGlzLmFkZE5ld1RhZygpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUudmFsdWUpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKGRlZmF1bHRUYWdzVHJhbnNsYXRpb25zKTtcclxuICAgIGNvbnN0IHRleHRQcm9wcyA9IHRoaXMucHJvcHMudGV4dFByb3BzID8gdGhpcy5wcm9wcy50ZXh0UHJvcHMgOiB7fTtcclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5nZXRTdWdnZXN0aW9ucygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPElucHV0R3JvdXAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9IHRvb2x0aXA9e3RoaXMucHJvcHMudG9vbHRpcH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgJ2lucHV0X19iYXNlIHRhZ3MtaW5wdXQnLFxyXG4gICAgICAgICAgICB0aGlzLmdldFZhbGlkYXRpb25DbGFzcygpLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICd0YWdzLWlucHV0LS1yZWFkT25seSc6IHRoaXMucHJvcHMucmVhZE9ubHksXHJcbiAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXQtLWhhc1BsYWNlaG9sZGVyJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGV4dFByb3BzICYmIHRoaXMucHJvcHMudGV4dFByb3BzLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgcmVmPXt0aGlzLmNvbnRhaW5lclJlZn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJUYWdzKCl9XHJcbiAgICAgICAgICB7KCF0aGlzLnByb3BzLm1heFRhZ3MgfHxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXhUYWdzID4gKHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoKSkgJiZcclxuICAgICAgICAgICAgIXRoaXMucHJvcHMucmVhZE9ubHkgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICd0YWdzLWlucHV0X190YWdzX193cmFwcGVyICcgK1xyXG4gICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5yZWFkT25seSA/ICdmaWxsZWQgJyA6ICcnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIHsuLi50ZXh0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRleHQtaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnRleHRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID4gMCA/IGZhbHNlIDogdGhpcy5wcm9wcy5yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXRfX3RleHQtaW5wdXQgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgKHRleHRQcm9wcy5jbGFzc05hbWUgPyB0ZXh0UHJvcHMuY2xhc3NOYW1lIDogJycpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bihzdWdnZXN0aW9ucyl9XHJcbiAgICAgICAgICAgICAgICAgIG9uRXJyb3JzQ2hhbmdlZD17dGhpcy5vblRleHRFcnJvcnNDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRleHRDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5wcm9wcy5yZWFkT25seX1cclxuICAgICAgICAgICAgICAgICAgc2hvd1ZhbGlkYXRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBpZ25vcmVDb250ZXh0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXt0aGlzLnByb3BzLnZhbGlkYXRvcnN9XHJcbiAgICAgICAgICAgICAgICAgIGN1c3RvbVZhbGlkYXRvcnM9e3RoaXMucHJvcHMuY3VzdG9tVmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUgJiYgdGhpcy5wcm9wcy5zaG93U3VnZ2VzdGlvbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8VGFnc1N1Z2dlc3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy10ZXh0LWlucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBpbm5lclJlZj17dGhpcy5zdWdnZXN0aW9uc1JlZn1cclxuICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17dGhpcy5jb250YWluZXJSZWYuY3VycmVudH1cclxuICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17dGhpcy5wcm9wcy5hbGxvd05ld31cclxuICAgICAgICAgICAgICAgICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb249e3RoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUuZmV0Y2hpbmdFeGlzdGluZ1RhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZ0NvbXBvbmVudD17dGhpcy5wcm9wcy5zdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlPXt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICBFbXB0eUNvbXBvbmVudD17dGhpcy5wcm9wcy5zdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIFdhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy53YWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzV2FpdGluZ0Zvck1vcmVJbnB1dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnZhbHVlLmxlbmd0aCA8IHRoaXMucHJvcHMubWluTGV0dGVyc1RvRmV0Y2hcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFncz17c3VnZ2VzdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RlZD17dGhpcy5vblN1Z2dlc3Rpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrT3V0c2lkZT17dGhpcy5vbkNsaWNrT3V0c2lkZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBBZGROZXdUYWdDb21wb25lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hbGxvd05ldyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuZXhpc3RpbmdUYWdzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBlLm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLmZldGNoZWRFeGlzdGluZ1RhZ3MuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IGUubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50ZXh0SXNWYWxpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLWFkZC1uZXctYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X19zdWdnZXN0aW9uIHRhZ3MtaW5wdXRfX2FkZC1uZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkTmV3VGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy5hZGROZXd9IFwie3RoaXMuc3RhdGUudmFsdWV9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHBlclByb3BzPXt0aGlzLnByb3BzLnBvcHBlclByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIHt0aGlzLnJlbmRlckRlZmF1bHRWYWxpZGF0aW9uKCl9XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbCAmJiAoXHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50ZXh0SXNGb2N1c2VkIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlYWRPbmx5IHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID49IHRoaXMucHJvcHMubWF4VGFnc1xyXG4gICAgICAgICAgICAgICAgICA/ICdsYWJlbC0tZm9jdXNlZCdcclxuICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckxhYmVsKCl9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblRleHRFcnJvcnNDaGFuZ2VkID0gKHRleHRFcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHsgdGV4dEVycm9ycyB9KSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuXHJcbiAgcHJpdmF0ZSBvbkZvY3VzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgeyB0ZXh0SXNGb2N1c2VkOiB0cnVlLCBzdWdnZXN0aW9uc1Zpc2libGU6IHRydWUsIHRvdWNoZWQ6IHRydWUgfSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3ModGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbktleURvd24gPSAoc3VnZ2VzdGlvbnM6IFRhZ1tdKSA9PiBhc3luYyBlID0+IHtcclxuICAgIGlmIChcclxuICAgICAgZS5rZXkgPT09ICdFbnRlcicgJiZcclxuICAgICAgKHRoaXMuc3RhdGUudmFsdWUgIT09ICcnIHx8XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gIT09IHVuZGVmaW5lZCkgJiZcclxuICAgICAgdGhpcy5zdGF0ZS50ZXh0RXJyb3JzLmxlbmd0aCA9PT0gMFxyXG4gICAgKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgY29uc3QgZXhpc3RpbmdUYWcgPVxyXG4gICAgICAgIHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MuZmluZChldCA9PiBldC5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQoXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MuY29uY2F0KHN1Z2dlc3Rpb25zW3RoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uXSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycsIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXhpc3RpbmdUYWcpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQodGhpcy5wcm9wcy50YWdzLmNvbmNhdChleGlzdGluZ1RhZykpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmFsbG93TmV3KSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hZGROZXdUYWcoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc3VnZ2VzdGlvbnMubGVuZ3RoID4gMCAmJiB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSkge1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICAgIGNvbnN0IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSAwXHJcbiAgICAgICAgICAgID8gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uIC0gMTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgIGNvbnN0IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSBzdWdnZXN0aW9ucy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICsgMTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgYWRkTmV3VGFnID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFnID0gYXdhaXQgdGhpcy5wcm9wcy5vbk5ld1RhZ0FkZGVkKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgaWYgKG5ld1RhZykge1xyXG4gICAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQoXHJcbiAgICAgICAgdGhpcy5wcm9wcy50YWdzID8gdGhpcy5wcm9wcy50YWdzLmNvbmNhdChuZXdUYWcpIDogW25ld1RhZ11cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycsIHRleHRFcnJvcnM6IFtdIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvblN1Z2dlc3Rpb25TZWxlY3RlZCA9ICh0YWc6IFRhZykgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFncyA9IHRoaXMucHJvcHMudGFncy5jb25jYXQodGFnKTtcclxuICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZChuZXdUYWdzKTtcclxuICAgIGNvbnN0IGlzTWF4ID0gbmV3VGFncy5sZW5ndGggPT09IHRoaXMucHJvcHMubWF4VGFncztcclxuICAgIGNvbnN0IGZpbmFsVmFsdWUgPSAhdGhpcy5wcm9wcy5hbGxvd05ldyAmJiAhaXNNYXggPyB0aGlzLnN0YXRlLnZhbHVlIDogJyc7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWU6IGZpbmFsVmFsdWUsXHJcbiAgICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBpc01heCA/IGZhbHNlIDogdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUsXHJcbiAgICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGV4dEVycm9yczogW10sXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhdGhpcy5wcm9wcy5tYXhUYWdzIHx8XHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoICsgMSA8IHRoaXMucHJvcHMubWF4VGFnc1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncyhmaW5hbFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uQmx1ciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0SXNGb2N1c2VkOiBmYWxzZSxcclxuICAgICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uQ2xpY2tPdXRzaWRlID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG5cclxuICBwcml2YXRlIG9uVGV4dENoYW5nZWQgPSAoXHJcbiAgICBlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcclxuICAgIGlzVmFsaWQ6IGJvb2xlYW5cclxuICApID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAoKSA9PiAoe1xyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIGlzVmFsaWQ6IGlzVmFsaWQsXHJcbiAgICAgICAgdGV4dElzVmFsaWQ6IGlzVmFsaWQsXHJcbiAgICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiB0cnVlLFxyXG4gICAgICB9KSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3JzID0gKHRhZ3M6IFRhZ1tdID0gdGhpcy5wcm9wcy50YWdzKSA9PiB7XHJcbiAgICBsZXQgZXJyb3JzID0gdGhpcy5nZXRFcnJvcnModGFncyk7XHJcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZXRJbnZhbGlkKGVycm9ycyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFZhbGlkKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBnZXRFcnJvcnModGFnczogVGFnW10pIHtcclxuICAgIGxldCBlcnJvcnMgPSBbXTtcclxuICAgIGlmICh0YWdzLmxlbmd0aCA8IHRoaXMucHJvcHMubWF4VGFncykge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMuc3RhdGUudGV4dEVycm9ycyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgJiYgdGFncy5sZW5ndGggPT09IDAgJiYgdGhpcy5wcm9wcy5yZXF1aXJlZCkge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KFxyXG4gICAgICAgIHRoaXMuZ2V0VHJhbnNsYXRpb25zKHRoaXMucHJvcHMudHJhbnNsYXRpb25zKS5yZXF1aXJlZFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgJiYgdGhpcy5wcm9wcy5hbGxvd05ldyAmJiAhdGhpcy5zdGF0ZS50ZXh0SXNGb2N1c2VkKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5wcm9wcy52YWx1ZU5vdEFkZGVkRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvcHMubWF4VGFncyA8ICh0aGlzLnByb3BzLnRhZ3MgJiYgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCkpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnByb3BzLm1heFRhZ3NTdXJwYXNzZWRFcnJvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3JzLmZpbHRlcihpID0+IGkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmZXRjaEV4aXN0aW5nVGFncyhzdGFydHNXaXRoOiBzdHJpbmcgPSAnJykge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnByb3BzLmZldGNoRXhpc3RpbmdUYWdzICYmXHJcbiAgICAgIHN0YXJ0c1dpdGgubGVuZ3RoID49IHRoaXMucHJvcHMubWluTGV0dGVyc1RvRmV0Y2hcclxuICAgICkge1xyXG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZldGNoaW5nRXhpc3RpbmdUYWdzOiB0cnVlIH0pLFxyXG4gICAgICAgIHRoaXMucHJvcHMubG9hZGluZ0RlbGF5TXNcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5wcm9wcy5mZXRjaEV4aXN0aW5nVGFncyhzdGFydHNXaXRoKS50aGVuKGZldGNoZWRFeGlzdGluZ1RhZ3MgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBmZXRjaGVkRXhpc3RpbmdUYWdzLFxyXG4gICAgICAgICAgZmV0Y2hpbmdFeGlzdGluZ1RhZ3M6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U3VnZ2VzdGlvbnMoKSB7XHJcbiAgICBjb25zdCBleGlzdGluZ1RhZ3M6IFRhZ1tdID0gW11cclxuICAgICAgLmNvbmNhdCh0aGlzLnByb3BzLmV4aXN0aW5nVGFncyA/IHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzIDogW10pXHJcbiAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzID8gdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzIDogW11cclxuICAgICAgKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkVGFncyA9IHRoaXMucHJvcHMuZmlsdGVyRXhpc3RpbmdUYWdzKFxyXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlID8gdGhpcy5zdGF0ZS52YWx1ZS50b0xvd2VyQ2FzZSgpIDogJycsXHJcbiAgICAgIGV4aXN0aW5nVGFnc1xyXG4gICAgKTtcclxuICAgIGxldCBzdWdnZXN0aW9ucyA9IGZpbHRlcmVkVGFnc1xyXG4gICAgICAuZmlsdGVyKFxyXG4gICAgICAgIHRhZyA9PlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5hbGxvd1NhbWVUYWdNdWx0aXBsZVRpbWVzIHx8XHJcbiAgICAgICAgICAhdGhpcy5wcm9wcy50YWdzLnNvbWUodCA9PiB0LmlkID09PSB0YWcuaWQpXHJcbiAgICAgIClcclxuICAgICAgLnNsaWNlKDAsIHRoaXMucHJvcHMubWF4U3VnZ2VzdGlvbnMpO1xyXG4gICAgcmV0dXJuIHN1Z2dlc3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJUYWcodGFnOiBUYWcsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGJvZHkgPSAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge3RhZy5uYW1lfVxyXG4gICAgICAgIHshdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRhZy0nICsgaW5kZXgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIGNpcmN1bGFyPXt0cnVlfVxyXG4gICAgICAgICAgICBibGFuaz17dHJ1ZX1cclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy50YWdSZW1vdmVDbGljayh0YWcpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xIHRyYW5zZm9ybS1yb3RhdGUtLTQ1IGxpbmUtaGVpZ2h0LS0wIHAtMFwiXHJcbiAgICAgICAgICAgIENvbXBvbmVudD17cCA9PiAoXHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtwLmNsYXNzTmFtZX0gaWQ9e3AuaWR9IG9uQ2xpY2s9e3Aub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICB7cC5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQbHVzSWNvbiAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygndGFncy1pbnB1dF9fdGFnJywge1xyXG4gICAgICAndGFncy1pbnB1dF9fdGFnLWNoaXAnOiB0aGlzLnByb3BzLnNob3dDaGlwcyxcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25UYWdDbGljaykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudGFnQ2xpY2sodGFnKX1cclxuICAgICAgICAgIHNtYWxsPXt0cnVlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnRhZ0NsaWNrKHRhZyl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e2luZGV4fT5cclxuICAgICAgICB7Ym9keX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0YWdDbGljayA9ICh0YWc6IFRhZykgPT4gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ0NsaWNrICYmIHRoaXMucHJvcHMub25UYWdDbGljayh0YWcpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdGFnUmVtb3ZlQ2xpY2sgPSAodGFnOiBUYWcpID0+IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IG5ld1RhZ3MgPSB0aGlzLnByb3BzLnRhZ3MuZmlsdGVyKHN2ID0+IHN2LmlkICE9PSB0YWcuaWQpO1xyXG4gICAgLyppZiAobmV3VGFncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZvY3VzKCksIDUwKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgfSk7Ki9cclxuICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQobmV3VGFncyk7XHJcbiAgICB0aGlzLmhhbmRsZUVycm9ycyhuZXdUYWdzKTtcclxuICAgIC8vIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJlbmRlclRhZ3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50YWdzICYmIHRoaXMucHJvcHMudGFncy5sZW5ndGggPiAwID8gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3RhZ19fd3JhcHBlclwiPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnRhZ3MubWFwKChpdGVtLCBpbmRleCkgPT4gdGhpcy5yZW5kZXJUYWcoaXRlbSwgaW5kZXgpKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApIDogKFxyXG4gICAgICB0aGlzLnByb3BzLnJlYWRPbmx5ICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3RhZ19fd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdcIj5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMucmVhZG9ubHlFbXB0eVBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGFncyA9IHdpdGhUaGVtZUNvbnRleHQ8VGFnc1Byb3BzLCBJbnN0YW5jZVR5cGU8dHlwZW9mIFRhZ3NSYXc+PihcclxuICB3aXRoRm9ybUNvbnRleHQ8VGFnc1Byb3BzPihUYWdzUmF3KSxcclxuICAndGFncydcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ3M7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdmFsaWRhdG9ycy9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9idXR0b24nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tib3gnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvZHluYW1pY1N1Ym1pdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9mb3JtJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2lucHV0R3JvdXAnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXRIZWFkZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvbW9uZXkvTW9uZXknO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvb3BlbmluZ0hvdXJzL29wZW5pbmdIb3Vyc0RheSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9vcGVuaW5nSG91cnMvb3BlbmluZ0hvdXJzU3BlY2lhbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9vcGVuaW5nSG91cnMvb3BlbmluZ0hvdXJzV2Vlayc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9yYWRpbyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9yYWRpb0NvbnRhaW5lcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QvU2VsZWN0JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3N1Ym1pdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90YWdzJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGV4dEFyZWEnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGltZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90aW1lU3Bhbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90aGVtZVByb3ZpZGVyJztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==