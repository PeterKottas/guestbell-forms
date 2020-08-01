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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9UYWdzLnRzeCJdLCJuYW1lcyI6WyJkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyIsImRlZmF1bHRCYXNlVHJhbnNsYXRpb25zIiwiYWRkTmV3IiwiVGFnc1JhdyIsInByb3BzIiwidGV4dFJlZiIsInN1Z2dlc3Rpb25zUmVmIiwib25UZXh0RXJyb3JzQ2hhbmdlZCIsInRleHRFcnJvcnMiLCJzZXRTdGF0ZSIsImhhbmRsZUVycm9ycyIsIm9uRm9jdXMiLCJ0ZXh0SXNGb2N1c2VkIiwic3VnZ2VzdGlvbnNWaXNpYmxlIiwidG91Y2hlZCIsImZldGNoRXhpc3RpbmdUYWdzIiwic3RhdGUiLCJ2YWx1ZSIsIm9uS2V5RG93biIsInN1Z2dlc3Rpb25zIiwiZSIsImtleSIsInByZXNlbGVjdGVkU3VnZ2VzdGlvbiIsInVuZGVmaW5lZCIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZXhpc3RpbmdUYWciLCJleGlzdGluZ1RhZ3MiLCJmaW5kIiwiZXQiLCJuYW1lIiwib25UYWdzQ2hhbmdlZCIsInRhZ3MiLCJjb25jYXQiLCJhbGxvd05ldyIsImFkZE5ld1RhZyIsIm9uTmV3VGFnQWRkZWQiLCJuZXdUYWciLCJvblN1Z2dlc3Rpb25TZWxlY3RlZCIsInRhZyIsIm5ld1RhZ3MiLCJpc01heCIsIm1heFRhZ3MiLCJmaW5hbFZhbHVlIiwib25CbHVyIiwib25DbGlja091dHNpZGUiLCJvblRleHRDaGFuZ2VkIiwiaXNWYWxpZCIsInRhcmdldCIsInRleHRJc1ZhbGlkIiwiZXJyb3JzIiwiZ2V0RXJyb3JzIiwic2V0SW52YWxpZCIsInNldFZhbGlkIiwidGFnQ2xpY2siLCJvblRhZ0NsaWNrIiwidGFnUmVtb3ZlQ2xpY2siLCJmaWx0ZXIiLCJzdiIsImlkIiwiZmV0Y2hpbmdFeGlzdGluZ1RhZ3MiLCJmZXRjaGVkRXhpc3RpbmdUYWdzIiwiUmVhY3QiLCJoYW5kbGVDbGlja091dHNpZGUiLCJiaW5kIiwiY3VycmVudCIsImZvY3VzIiwib2xkUHJvcHMiLCJ2YWxpZGF0b3JzIiwiY3VzdG9tVmFsaWRhdG9ycyIsInJlcXVpcmVkIiwiY29udGFpbmVyUmVmIiwiY29udGFpbnMiLCJhZGROZXdPbkJsdXIiLCJnZXRTdWdnZXN0aW9ucyIsImV4aXN0aW5nIiwicyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0cmFuc2xhdGlvbnMiLCJnZXRUcmFuc2xhdGlvbnMiLCJ0ZXh0UHJvcHMiLCJ0aXRsZSIsInRvb2x0aXAiLCJjbGFzc05hbWVzIiwiZ2V0VmFsaWRhdGlvbkNsYXNzIiwiY2xhc3NOYW1lIiwicmVhZE9ubHkiLCJwbGFjZWhvbGRlciIsInJlbmRlclRhZ3MiLCJzaG93U3VnZ2VzdGlvbnMiLCJzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQiLCJzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50Iiwid2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudCIsIm1pbkxldHRlcnNUb0ZldGNoIiwicG9wcGVyUHJvcHMiLCJyZW5kZXJEZWZhdWx0VmFsaWRhdGlvbiIsImxhYmVsIiwicmVuZGVyTGFiZWwiLCJ2YWx1ZU5vdEFkZGVkRXJyb3IiLCJtYXhUYWdzU3VycGFzc2VkRXJyb3IiLCJpIiwic3RhcnRzV2l0aCIsInRpbWVyIiwic2V0VGltZW91dCIsImxvYWRpbmdEZWxheU1zIiwidGhlbiIsImNsZWFyVGltZW91dCIsImZpbHRlcmVkVGFncyIsImZpbHRlckV4aXN0aW5nVGFncyIsInRvTG93ZXJDYXNlIiwiYWxsb3dTYW1lVGFnTXVsdGlwbGVUaW1lcyIsInNvbWUiLCJ0Iiwic2xpY2UiLCJtYXhTdWdnZXN0aW9ucyIsImluZGV4IiwiYm9keSIsInRvU3RyaW5nIiwicCIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsInNob3dDaGlwcyIsIm1hcCIsIml0ZW0iLCJyZW5kZXJUYWciLCJyZWFkb25seUVtcHR5UGxhY2Vob2xkZXIiLCJCYXNlSW5wdXQiLCJkZWZhdWx0UHJvcHMiLCJkaXNhYmxlZCIsIm5ld1RhZ05hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsIkRhdGUiLCJnZXRUaW1lIiwidGV4dCIsIlRhZ3MiLCJ3aXRoVGhlbWVDb250ZXh0Iiwid2l0aEZvcm1Db250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU08sSUFBTUEsdUJBQXVCLHFCQUMvQkMsNkVBRCtCO0FBRWxDQyxRQUFNLEVBQUU7QUFGMEIsRUFBN0I7QUFpREEsSUFBTUMsT0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFrQ0UsbUJBQVlDLEtBQVosRUFBOEM7QUFBQTs7QUFBQTs7QUFDNUMsaUZBQU1BLEtBQU47QUFENEMsVUFIdENDLE9BR3NDO0FBQUEsVUFGdENDLGNBRXNDOztBQUFBLFVBa010Q0MsbUJBbE1zQyxHQWtNaEIsVUFBQ0MsVUFBRDtBQUFBLGFBQzVCLE1BQUtDLFFBQUwsQ0FDRTtBQUFBLGVBQU87QUFBRUQsb0JBQVUsRUFBVkE7QUFBRixTQUFQO0FBQUEsT0FERixFQUVFO0FBQUEsZUFBTSxNQUFLRSxZQUFMLEVBQU47QUFBQSxPQUZGLENBRDRCO0FBQUEsS0FsTWdCOztBQUFBLFVBd010Q0MsT0F4TXNDLEdBd001QixZQUFNO0FBQ3RCLFlBQUtGLFFBQUwsQ0FDRTtBQUFFRyxxQkFBYSxFQUFFLElBQWpCO0FBQXVCQywwQkFBa0IsRUFBRSxJQUEzQztBQUFpREMsZUFBTyxFQUFFO0FBQTFELE9BREYsRUFFRTtBQUFBLGVBQU0sTUFBS0osWUFBTCxFQUFOO0FBQUEsT0FGRjs7QUFJQSxZQUFLSyxpQkFBTCxDQUF1QixNQUFLQyxLQUFMLENBQVdDLEtBQWxDO0FBQ0QsS0E5TTZDOztBQUFBLFVBZ050Q0MsU0FoTnNDLEdBZ04xQixVQUFDQyxX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LElBQU0wQyxJQUFJLEdBQUdDLHdGQUFnQixDQUNsQ0MsNkVBQWUsQ0FBWXpJLE9BQVosQ0FEbUIsRUFFbEMsTUFGa0MsQ0FBN0I7ZUFLUXVJLEk7QUFBQTs7Ozs7Ozs7OzswQkF4akJGMUksdUI7MEJBaURBRyxPOzBCQWtnQkF1SSxJIiwiZmlsZSI6IjAxZjM1OWEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlic1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElucHV0R3JvdXAgfSBmcm9tICcuLi9pbnB1dEdyb3VwL0lucHV0R3JvdXAnO1xyXG5pbXBvcnQgeyBUZXh0LCBUZXh0UHJvcHMsIFRleHRSYXcgfSBmcm9tICcuLi90ZXh0L1RleHQnO1xyXG5pbXBvcnQgKiBhcyBQbHVzSWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvY29udGVudC9zdmcvcHJvZHVjdGlvbi9pY19hZGRfY2lyY2xlX291dGxpbmVfMjRweC5zdmcnO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VJbnB1dFByb3BzLFxyXG4gIEJhc2VJbnB1dFN0YXRlLFxyXG4gIEJhc2VJbnB1dCxcclxuICBWYWxpZGF0aW9uRXJyb3IsXHJcbiAgZGVmYXVsdEJhc2VUcmFuc2xhdGlvbnMsXHJcbn0gZnJvbSAnLi4vYmFzZS9pbnB1dC9CYXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9idXR0b24vQnV0dG9uJztcclxuaW1wb3J0IFRhZ3NTdWdnZXN0aW9ucyBmcm9tICcuL3N1YkNvbXBvbmVudHMvVGFnc1N1Z2dlc3Rpb25zJztcclxuaW1wb3J0IHsgd2l0aEZvcm1Db250ZXh0IH0gZnJvbSAnLi4vZm9ybS93aXRoRm9ybUNvbnRleHQnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgd2l0aFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL3RoZW1lUHJvdmlkZXIvd2l0aFRoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IFBvcHBlclByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyL1BvcHBlcic7XHJcblxyXG4vLyBNaXNjXHJcbmV4cG9ydCB0eXBlIFRhZyA9IHtcclxuICBpZDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyA9IHtcclxuICAuLi5kZWZhdWx0QmFzZVRyYW5zbGF0aW9ucyxcclxuICBhZGROZXc6ICdBZGQgbmV3JyxcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFRhZ3NUcmFuc2xhdGlvbnMgPSBQYXJ0aWFsPHR5cGVvZiBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucz47XHJcblxyXG5leHBvcnQgdHlwZSBUYWdzUHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICB0YWdzOiBUYWdbXTtcclxuICBleGlzdGluZ1RhZ3M/OiBUYWdbXTtcclxuICBmZXRjaEV4aXN0aW5nVGFncz86ICh0ZXh0OiBzdHJpbmcpID0+IFByb21pc2U8VGFnW10+O1xyXG4gIG9uVGFnc0NoYW5nZWQ6IChuZXdUYWdzOiBUYWdbXSkgPT4gdm9pZDtcclxuICBvbk5ld1RhZ0FkZGVkPzogKG5ld1RhZ05hbWU6IHN0cmluZykgPT4gUHJvbWlzZTxUYWc+O1xyXG4gIG9uVGFnQ2xpY2s/OiAodGFnOiBUYWcpID0+IHZvaWQ7XHJcbiAgc2hvd0NoaXBzPzogYm9vbGVhbjtcclxuICBhbGxvd05ldz86IGJvb2xlYW47XHJcbiAgYWRkTmV3T25CbHVyPzogYm9vbGVhbjtcclxuICB0ZXh0UHJvcHM/OiBUZXh0UHJvcHM7XHJcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xyXG4gIHJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcj86IHN0cmluZztcclxuICBtYXhUYWdzPzogbnVtYmVyO1xyXG4gIHZhbHVlTm90QWRkZWRFcnJvcj86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIG1heFRhZ3NTdXJwYXNzZWRFcnJvcj86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHNob3dTdWdnZXN0aW9ucz86IGJvb2xlYW47XHJcbiAgc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHdhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBsb2FkaW5nRGVsYXlNcz86IG51bWJlcjtcclxuICBmaWx0ZXJFeGlzdGluZ1RhZ3M/OiAodGV4dDogc3RyaW5nLCBleGlzdGluZ1RhZ3M6IFRhZ1tdKSA9PiBUYWdbXTtcclxuICBhbGxvd1NhbWVUYWdNdWx0aXBsZVRpbWVzPzogYm9vbGVhbjtcclxuICBtYXhTdWdnZXN0aW9ucz86IG51bWJlcjtcclxuICBwb3BwZXJQcm9wcz86IFBhcnRpYWw8UG9wcGVyUHJvcHM+O1xyXG4gIG1pbkxldHRlcnNUb0ZldGNoPzogbnVtYmVyO1xyXG59ICYgQmFzZUlucHV0UHJvcHM8SFRNTElucHV0RWxlbWVudCwgVGFnc1RyYW5zbGF0aW9ucz47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhZ3NTdGF0ZSBleHRlbmRzIEJhc2VJbnB1dFN0YXRlIHtcclxuICB0ZXh0SXNGb2N1c2VkOiBib29sZWFuO1xyXG4gIHRleHRFcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdO1xyXG4gIHRleHRJc1ZhbGlkOiBib29sZWFuO1xyXG4gIHN1Z2dlc3Rpb25zVmlzaWJsZTogYm9vbGVhbjtcclxuICBmZXRjaGVkRXhpc3RpbmdUYWdzOiBUYWdbXTtcclxuICBmZXRjaGluZ0V4aXN0aW5nVGFnczogYm9vbGVhbjtcclxuICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbnR5cGUgSW5qZWN0ZWRQcm9wcyA9IHt9O1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhZ3NSYXcgZXh0ZW5kcyBCYXNlSW5wdXQ8XHJcbiAgVGFnc1Byb3BzICYgSW5qZWN0ZWRQcm9wcyxcclxuICBUYWdzU3RhdGUsXHJcbiAgSFRNTElucHV0RWxlbWVudCxcclxuICBUYWdzVHJhbnNsYXRpb25zXHJcbj4ge1xyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBUYWdzUHJvcHMgPSB7XHJcbiAgICAuLi5CYXNlSW5wdXQuZGVmYXVsdFByb3BzLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgZXhpc3RpbmdUYWdzOiBbXSxcclxuICAgIG1heFRhZ3M6IDEwMDAsXHJcbiAgICBvblRhZ3NDaGFuZ2VkOiAoKSA9PiB1bmRlZmluZWQsXHJcbiAgICBvbk5ld1RhZ0FkZGVkOiBuZXdUYWdOYW1lID0+XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSh7IG5hbWU6IG5ld1RhZ05hbWUsIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9KSxcclxuICAgIHZhbHVlTm90QWRkZWRFcnJvcjogPHNwYW4+WW91IGZvcmdvdCB0byBhZGQgdGFnPC9zcGFuPixcclxuICAgIG1heFRhZ3NTdXJwYXNzZWRFcnJvcjogPHNwYW4+TWF4aW11bSBudW1iZXIgb2YgdGFncyBzdXJwYXNzZWQ8L3NwYW4+LFxyXG4gICAgd2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudDogPHNwYW4+V2FpdGluZyBmb3IgbW9yZSBpbnB1dC4uLjwvc3Bhbj4sXHJcbiAgICBzaG93U3VnZ2VzdGlvbnM6IHRydWUsXHJcbiAgICBzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQ6ICdMb2FkaW5nLi4uJyxcclxuICAgIHN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQ6ICdObyBleGlzdGluZyB0YWdzLi4uJyxcclxuICAgIGxvYWRpbmdEZWxheU1zOiA1MDAsXHJcbiAgICBmaWx0ZXJFeGlzdGluZ1RhZ3M6ICh0ZXh0LCB0YWdzKSA9PlxyXG4gICAgICB0YWdzLmZpbHRlcih0YWcgPT4gdGFnLm5hbWUgJiYgdGFnLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRleHQpKSxcclxuICAgIG1heFN1Z2dlc3Rpb25zOiA1LFxyXG4gICAgYWRkTmV3T25CbHVyOiBmYWxzZSxcclxuICAgIHRyYW5zbGF0aW9uczogZGVmYXVsdFRhZ3NUcmFuc2xhdGlvbnMsXHJcbiAgICBtaW5MZXR0ZXJzVG9GZXRjaDogMCxcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHRleHRSZWY6IFJlYWN0LlJlZk9iamVjdDxUZXh0UmF3PjtcclxuICBwcml2YXRlIHN1Z2dlc3Rpb25zUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogVGFnc1Byb3BzICYgSW5qZWN0ZWRQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgdGV4dEVycm9yczogW10sXHJcbiAgICAgIHRleHRJc0ZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgICBmZXRjaGluZ0V4aXN0aW5nVGFnczogZmFsc2UsXHJcbiAgICAgIHRleHRJc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgZmV0Y2hlZEV4aXN0aW5nVGFnczogW10sXHJcbiAgICB9O1xyXG4gICAgdGhpcy50ZXh0UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLnN1Z2dlc3Rpb25zUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSA9IHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZm9jdXMoKSB7XHJcbiAgICBpZiAodGhpcy50ZXh0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgdGhpcy50ZXh0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUob2xkUHJvcHM6IFRhZ3NQcm9wcyAmIEluamVjdGVkUHJvcHMpIHtcclxuICAgIGlmIChcclxuICAgICAgb2xkUHJvcHMudGFncyAhPT0gdGhpcy5wcm9wcy50YWdzIHx8XHJcbiAgICAgIG9sZFByb3BzLnZhbGlkYXRvcnMgIT09IHRoaXMucHJvcHMudmFsaWRhdG9ycyB8fFxyXG4gICAgICBvbGRQcm9wcy5jdXN0b21WYWxpZGF0b3JzICE9PSB0aGlzLnByb3BzLmN1c3RvbVZhbGlkYXRvcnMgfHxcclxuICAgICAgb2xkUHJvcHMucmVxdWlyZWQgIT09IHRoaXMucHJvcHMucmVxdWlyZWRcclxuICAgICkge1xyXG4gICAgICB0aGlzLmhhbmRsZUVycm9ycyh0aGlzLnByb3BzLnRhZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhbmRsZUNsaWNrT3V0c2lkZShlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICF0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50IHx8XHJcbiAgICAgIHRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpIHx8XHJcbiAgICAgICF0aGlzLnN1Z2dlc3Rpb25zUmVmLmN1cnJlbnQgfHxcclxuICAgICAgdGhpcy5zdWdnZXN0aW9uc1JlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLmFkZE5ld09uQmx1ciAmJiB0aGlzLnN0YXRlLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5nZXRTdWdnZXN0aW9ucygpO1xyXG4gICAgICBjb25zdCBleGlzdGluZyA9IHN1Z2dlc3Rpb25zLmZpbmQocyA9PiBzLm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgICBpZiAoZXhpc3RpbmcpIHtcclxuICAgICAgICB0aGlzLm9uU3VnZ2VzdGlvblNlbGVjdGVkKGV4aXN0aW5nKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmFsbG93TmV3KSB7XHJcbiAgICAgICAgdGhpcy5hZGROZXdUYWcoKTtcclxuICAgICAgfVxyXG4gICAgfSAvKiBlbHNlIGlmICh0aGlzLnN0YXRlLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycgfSk7XHJcbiAgICB9Ki9cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKGRlZmF1bHRUYWdzVHJhbnNsYXRpb25zKTtcclxuICAgIGNvbnN0IHRleHRQcm9wcyA9IHRoaXMucHJvcHMudGV4dFByb3BzID8gdGhpcy5wcm9wcy50ZXh0UHJvcHMgOiB7fTtcclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5nZXRTdWdnZXN0aW9ucygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPElucHV0R3JvdXAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9IHRvb2x0aXA9e3RoaXMucHJvcHMudG9vbHRpcH0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcclxuICAgICAgICAgICAgJ2lucHV0X19iYXNlIHRhZ3MtaW5wdXQnLFxyXG4gICAgICAgICAgICB0aGlzLmdldFZhbGlkYXRpb25DbGFzcygpLFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICd0YWdzLWlucHV0LS1yZWFkT25seSc6IHRoaXMucHJvcHMucmVhZE9ubHksXHJcbiAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXQtLWhhc1BsYWNlaG9sZGVyJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGV4dFByb3BzICYmIHRoaXMucHJvcHMudGV4dFByb3BzLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgcmVmPXt0aGlzLmNvbnRhaW5lclJlZn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJUYWdzKCl9XHJcbiAgICAgICAgICB7KCF0aGlzLnByb3BzLm1heFRhZ3MgfHxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXhUYWdzID4gKHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoKSkgJiZcclxuICAgICAgICAgICAgIXRoaXMucHJvcHMucmVhZE9ubHkgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICd0YWdzLWlucHV0X190YWdzX193cmFwcGVyICcgK1xyXG4gICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5yZWFkT25seSA/ICdmaWxsZWQgJyA6ICcnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIHsuLi50ZXh0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRleHQtaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnRleHRSZWZ9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID4gMCA/IGZhbHNlIDogdGhpcy5wcm9wcy5yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXRfX3RleHQtaW5wdXQgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgKHRleHRQcm9wcy5jbGFzc05hbWUgPyB0ZXh0UHJvcHMuY2xhc3NOYW1lIDogJycpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bihzdWdnZXN0aW9ucyl9XHJcbiAgICAgICAgICAgICAgICAgIG9uRXJyb3JzQ2hhbmdlZD17dGhpcy5vblRleHRFcnJvcnNDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRleHRDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5wcm9wcy5yZWFkT25seX1cclxuICAgICAgICAgICAgICAgICAgc2hvd1ZhbGlkYXRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBpZ25vcmVDb250ZXh0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXt0aGlzLnByb3BzLnZhbGlkYXRvcnN9XHJcbiAgICAgICAgICAgICAgICAgIGN1c3RvbVZhbGlkYXRvcnM9e3RoaXMucHJvcHMuY3VzdG9tVmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUgJiYgdGhpcy5wcm9wcy5zaG93U3VnZ2VzdGlvbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8VGFnc1N1Z2dlc3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy10ZXh0LWlucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBpbm5lclJlZj17dGhpcy5zdWdnZXN0aW9uc1JlZn1cclxuICAgICAgICAgICAgICAgICAgICBhbmNob3JFbD17dGhpcy5jb250YWluZXJSZWYuY3VycmVudH1cclxuICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17dGhpcy5wcm9wcy5hbGxvd05ld31cclxuICAgICAgICAgICAgICAgICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb249e3RoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUuZmV0Y2hpbmdFeGlzdGluZ1RhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZ0NvbXBvbmVudD17dGhpcy5wcm9wcy5zdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlPXt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICBFbXB0eUNvbXBvbmVudD17dGhpcy5wcm9wcy5zdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIFdhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy53YWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzV2FpdGluZ0Zvck1vcmVJbnB1dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnZhbHVlLmxlbmd0aCA8IHRoaXMucHJvcHMubWluTGV0dGVyc1RvRmV0Y2hcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFncz17c3VnZ2VzdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RlZD17dGhpcy5vblN1Z2dlc3Rpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrT3V0c2lkZT17dGhpcy5vbkNsaWNrT3V0c2lkZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBBZGROZXdUYWdDb21wb25lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hbGxvd05ldyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuZXhpc3RpbmdUYWdzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBlLm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLmZldGNoZWRFeGlzdGluZ1RhZ3MuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IGUubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50ZXh0SXNWYWxpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLWFkZC1uZXctYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X19zdWdnZXN0aW9uIHRhZ3MtaW5wdXRfX2FkZC1uZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkTmV3VGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy5hZGROZXd9IFwie3RoaXMuc3RhdGUudmFsdWV9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHBlclByb3BzPXt0aGlzLnByb3BzLnBvcHBlclByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIHt0aGlzLnJlbmRlckRlZmF1bHRWYWxpZGF0aW9uKCl9XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbCAmJiAoXHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50ZXh0SXNGb2N1c2VkIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlYWRPbmx5IHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID49IHRoaXMucHJvcHMubWF4VGFnc1xyXG4gICAgICAgICAgICAgICAgICA/ICdsYWJlbC0tZm9jdXNlZCdcclxuICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckxhYmVsKCl9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblRleHRFcnJvcnNDaGFuZ2VkID0gKHRleHRFcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHsgdGV4dEVycm9ycyB9KSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuXHJcbiAgcHJpdmF0ZSBvbkZvY3VzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgeyB0ZXh0SXNGb2N1c2VkOiB0cnVlLCBzdWdnZXN0aW9uc1Zpc2libGU6IHRydWUsIHRvdWNoZWQ6IHRydWUgfSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3ModGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbktleURvd24gPSAoc3VnZ2VzdGlvbnM6IFRhZ1tdKSA9PiBhc3luYyBlID0+IHtcclxuICAgIGlmIChcclxuICAgICAgZS5rZXkgPT09ICdFbnRlcicgJiZcclxuICAgICAgKHRoaXMuc3RhdGUudmFsdWUgIT09ICcnIHx8XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gIT09IHVuZGVmaW5lZCkgJiZcclxuICAgICAgdGhpcy5zdGF0ZS50ZXh0RXJyb3JzLmxlbmd0aCA9PT0gMFxyXG4gICAgKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgY29uc3QgZXhpc3RpbmdUYWcgPVxyXG4gICAgICAgIHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MuZmluZChldCA9PiBldC5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQoXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MuY29uY2F0KHN1Z2dlc3Rpb25zW3RoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uXSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycsIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXhpc3RpbmdUYWcpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQodGhpcy5wcm9wcy50YWdzLmNvbmNhdChleGlzdGluZ1RhZykpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmFsbG93TmV3KSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hZGROZXdUYWcoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc3VnZ2VzdGlvbnMubGVuZ3RoID4gMCAmJiB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSkge1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICAgIGNvbnN0IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSAwXHJcbiAgICAgICAgICAgID8gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uIC0gMTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgIGNvbnN0IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSBzdWdnZXN0aW9ucy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICsgMTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgYWRkTmV3VGFnID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFnID0gYXdhaXQgdGhpcy5wcm9wcy5vbk5ld1RhZ0FkZGVkKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgaWYgKG5ld1RhZykge1xyXG4gICAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQoXHJcbiAgICAgICAgdGhpcy5wcm9wcy50YWdzID8gdGhpcy5wcm9wcy50YWdzLmNvbmNhdChuZXdUYWcpIDogW25ld1RhZ11cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycsIHRleHRFcnJvcnM6IFtdIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvblN1Z2dlc3Rpb25TZWxlY3RlZCA9ICh0YWc6IFRhZykgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFncyA9IHRoaXMucHJvcHMudGFncy5jb25jYXQodGFnKTtcclxuICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZChuZXdUYWdzKTtcclxuICAgIGNvbnN0IGlzTWF4ID0gbmV3VGFncy5sZW5ndGggPT09IHRoaXMucHJvcHMubWF4VGFncztcclxuICAgIGNvbnN0IGZpbmFsVmFsdWUgPSAhdGhpcy5wcm9wcy5hbGxvd05ldyAmJiAhaXNNYXggPyB0aGlzLnN0YXRlLnZhbHVlIDogJyc7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWU6IGZpbmFsVmFsdWUsXHJcbiAgICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBpc01heCA/IGZhbHNlIDogdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUsXHJcbiAgICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGV4dEVycm9yczogW10sXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhdGhpcy5wcm9wcy5tYXhUYWdzIHx8XHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoICsgMSA8IHRoaXMucHJvcHMubWF4VGFnc1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncyhmaW5hbFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uQmx1ciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0SXNGb2N1c2VkOiBmYWxzZSxcclxuICAgICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uQ2xpY2tPdXRzaWRlID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG5cclxuICBwcml2YXRlIG9uVGV4dENoYW5nZWQgPSAoXHJcbiAgICBlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcclxuICAgIGlzVmFsaWQ6IGJvb2xlYW5cclxuICApID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAoKSA9PiAoe1xyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIGlzVmFsaWQ6IGlzVmFsaWQsXHJcbiAgICAgICAgdGV4dElzVmFsaWQ6IGlzVmFsaWQsXHJcbiAgICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiB0cnVlLFxyXG4gICAgICB9KSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3JzID0gKHRhZ3M6IFRhZ1tdID0gdGhpcy5wcm9wcy50YWdzKSA9PiB7XHJcbiAgICBsZXQgZXJyb3JzID0gdGhpcy5nZXRFcnJvcnModGFncyk7XHJcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZXRJbnZhbGlkKGVycm9ycyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFZhbGlkKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBnZXRFcnJvcnModGFnczogVGFnW10pIHtcclxuICAgIGxldCBlcnJvcnMgPSBbXTtcclxuICAgIGlmICh0YWdzLmxlbmd0aCA8IHRoaXMucHJvcHMubWF4VGFncykge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMuc3RhdGUudGV4dEVycm9ycyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgJiYgdGFncy5sZW5ndGggPT09IDAgJiYgdGhpcy5wcm9wcy5yZXF1aXJlZCkge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KFxyXG4gICAgICAgIHRoaXMuZ2V0VHJhbnNsYXRpb25zKHRoaXMucHJvcHMudHJhbnNsYXRpb25zKS5yZXF1aXJlZFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgJiYgdGhpcy5wcm9wcy5hbGxvd05ldyAmJiAhdGhpcy5zdGF0ZS50ZXh0SXNGb2N1c2VkKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5wcm9wcy52YWx1ZU5vdEFkZGVkRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvcHMubWF4VGFncyA8ICh0aGlzLnByb3BzLnRhZ3MgJiYgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCkpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnByb3BzLm1heFRhZ3NTdXJwYXNzZWRFcnJvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3JzLmZpbHRlcihpID0+IGkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmZXRjaEV4aXN0aW5nVGFncyhzdGFydHNXaXRoOiBzdHJpbmcgPSAnJykge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnByb3BzLmZldGNoRXhpc3RpbmdUYWdzICYmXHJcbiAgICAgIHN0YXJ0c1dpdGgubGVuZ3RoID49IHRoaXMucHJvcHMubWluTGV0dGVyc1RvRmV0Y2hcclxuICAgICkge1xyXG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZldGNoaW5nRXhpc3RpbmdUYWdzOiB0cnVlIH0pLFxyXG4gICAgICAgIHRoaXMucHJvcHMubG9hZGluZ0RlbGF5TXNcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5wcm9wcy5mZXRjaEV4aXN0aW5nVGFncyhzdGFydHNXaXRoKS50aGVuKGZldGNoZWRFeGlzdGluZ1RhZ3MgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBmZXRjaGVkRXhpc3RpbmdUYWdzLFxyXG4gICAgICAgICAgZmV0Y2hpbmdFeGlzdGluZ1RhZ3M6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U3VnZ2VzdGlvbnMoKSB7XHJcbiAgICBjb25zdCBleGlzdGluZ1RhZ3M6IFRhZ1tdID0gW11cclxuICAgICAgLmNvbmNhdCh0aGlzLnByb3BzLmV4aXN0aW5nVGFncyA/IHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzIDogW10pXHJcbiAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzID8gdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzIDogW11cclxuICAgICAgKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkVGFncyA9IHRoaXMucHJvcHMuZmlsdGVyRXhpc3RpbmdUYWdzKFxyXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlID8gdGhpcy5zdGF0ZS52YWx1ZS50b0xvd2VyQ2FzZSgpIDogJycsXHJcbiAgICAgIGV4aXN0aW5nVGFnc1xyXG4gICAgKTtcclxuICAgIGxldCBzdWdnZXN0aW9ucyA9IGZpbHRlcmVkVGFnc1xyXG4gICAgICAuZmlsdGVyKFxyXG4gICAgICAgIHRhZyA9PlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5hbGxvd1NhbWVUYWdNdWx0aXBsZVRpbWVzIHx8XHJcbiAgICAgICAgICAhdGhpcy5wcm9wcy50YWdzLnNvbWUodCA9PiB0LmlkID09PSB0YWcuaWQpXHJcbiAgICAgIClcclxuICAgICAgLnNsaWNlKDAsIHRoaXMucHJvcHMubWF4U3VnZ2VzdGlvbnMpO1xyXG4gICAgcmV0dXJuIHN1Z2dlc3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJUYWcodGFnOiBUYWcsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGJvZHkgPSAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge3RhZy5uYW1lfVxyXG4gICAgICAgIHshdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRhZy0nICsgaW5kZXgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIGNpcmN1bGFyPXt0cnVlfVxyXG4gICAgICAgICAgICBibGFuaz17dHJ1ZX1cclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy50YWdSZW1vdmVDbGljayh0YWcpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xIHRyYW5zZm9ybS1yb3RhdGUtLTQ1IGxpbmUtaGVpZ2h0LS0wIHAtMFwiXHJcbiAgICAgICAgICAgIENvbXBvbmVudD17cCA9PiAoXHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtwLmNsYXNzTmFtZX0gaWQ9e3AuaWR9IG9uQ2xpY2s9e3Aub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICB7cC5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQbHVzSWNvbiAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygndGFncy1pbnB1dF9fdGFnJywge1xyXG4gICAgICAndGFncy1pbnB1dF9fdGFnLWNoaXAnOiB0aGlzLnByb3BzLnNob3dDaGlwcyxcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25UYWdDbGljaykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudGFnQ2xpY2sodGFnKX1cclxuICAgICAgICAgIHNtYWxsPXt0cnVlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnRhZ0NsaWNrKHRhZyl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e2luZGV4fT5cclxuICAgICAgICB7Ym9keX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0YWdDbGljayA9ICh0YWc6IFRhZykgPT4gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ0NsaWNrICYmIHRoaXMucHJvcHMub25UYWdDbGljayh0YWcpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdGFnUmVtb3ZlQ2xpY2sgPSAodGFnOiBUYWcpID0+IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IG5ld1RhZ3MgPSB0aGlzLnByb3BzLnRhZ3MuZmlsdGVyKHN2ID0+IHN2LmlkICE9PSB0YWcuaWQpO1xyXG4gICAgLyppZiAobmV3VGFncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZvY3VzKCksIDUwKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgfSk7Ki9cclxuICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQobmV3VGFncyk7XHJcbiAgICB0aGlzLmhhbmRsZUVycm9ycyhuZXdUYWdzKTtcclxuICAgIC8vIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJlbmRlclRhZ3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50YWdzICYmIHRoaXMucHJvcHMudGFncy5sZW5ndGggPiAwID8gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3RhZ19fd3JhcHBlclwiPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnRhZ3MubWFwKChpdGVtLCBpbmRleCkgPT4gdGhpcy5yZW5kZXJUYWcoaXRlbSwgaW5kZXgpKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApIDogKFxyXG4gICAgICB0aGlzLnByb3BzLnJlYWRPbmx5ICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3RhZ19fd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdcIj5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMucmVhZG9ubHlFbXB0eVBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGFncyA9IHdpdGhUaGVtZUNvbnRleHQ8VGFnc1Byb3BzLCBJbnN0YW5jZVR5cGU8dHlwZW9mIFRhZ3NSYXc+PihcclxuICB3aXRoRm9ybUNvbnRleHQ8VGFnc1Byb3BzPihUYWdzUmF3KSxcclxuICAndGFncydcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ3M7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=