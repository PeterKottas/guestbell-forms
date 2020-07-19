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

      _this.setState({
        value: !_this.props.allowNew && !isMax ? _this.state.value : '',
        suggestionsVisible: isMax ? false : _this.state.suggestionsVisible,
        preselectedSuggestion: undefined,
        textErrors: []
      }, function () {
        if (!_this.props.maxTags || _this.props.tags.length + 1 < _this.props.maxTags) {
          _this.fetchExistingTags();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9UYWdzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbImRlZmF1bHRUYWdzVHJhbnNsYXRpb25zIiwiZGVmYXVsdEJhc2VUcmFuc2xhdGlvbnMiLCJhZGROZXciLCJUYWdzUmF3IiwicHJvcHMiLCJ0ZXh0UmVmIiwic3VnZ2VzdGlvbnNSZWYiLCJvblRleHRFcnJvcnNDaGFuZ2VkIiwidGV4dEVycm9ycyIsInNldFN0YXRlIiwiaGFuZGxlRXJyb3JzIiwib25Gb2N1cyIsInRleHRJc0ZvY3VzZWQiLCJzdWdnZXN0aW9uc1Zpc2libGUiLCJ0b3VjaGVkIiwiZmV0Y2hFeGlzdGluZ1RhZ3MiLCJzdGF0ZSIsInZhbHVlIiwib25LZXlEb3duIiwic3VnZ2VzdGlvbnMiLCJlIiwia2V5IiwicHJlc2VsZWN0ZWRTdWdnZXN0aW9uIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJleGlzdGluZ1RhZyIsImV4aXN0aW5nVGFncyIsImZpbmQiLCJldCIsIm5hbWUiLCJvblRhZ3NDaGFuZ2VkIiwidGFncyIsImNvbmNhdCIsImFsbG93TmV3IiwiYWRkTmV3VGFnIiwib25OZXdUYWdBZGRlZCIsIm5ld1RhZyIsIm9uU3VnZ2VzdGlvblNlbGVjdGVkIiwidGFnIiwibmV3VGFncyIsImlzTWF4IiwibWF4VGFncyIsIm9uQmx1ciIsIm9uQ2xpY2tPdXRzaWRlIiwib25UZXh0Q2hhbmdlZCIsImlzVmFsaWQiLCJ0YXJnZXQiLCJ0ZXh0SXNWYWxpZCIsImVycm9ycyIsImdldEVycm9ycyIsInNldEludmFsaWQiLCJzZXRWYWxpZCIsInRhZ0NsaWNrIiwib25UYWdDbGljayIsInRhZ1JlbW92ZUNsaWNrIiwiZmlsdGVyIiwic3YiLCJpZCIsImZldGNoaW5nRXhpc3RpbmdUYWdzIiwiZmV0Y2hlZEV4aXN0aW5nVGFncyIsIlJlYWN0IiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiYmluZCIsImN1cnJlbnQiLCJmb2N1cyIsIm9sZFByb3BzIiwidmFsaWRhdG9ycyIsImN1c3RvbVZhbGlkYXRvcnMiLCJyZXF1aXJlZCIsImNvbnRhaW5lclJlZiIsImNvbnRhaW5zIiwiYWRkTmV3T25CbHVyIiwiZ2V0U3VnZ2VzdGlvbnMiLCJleGlzdGluZyIsInMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHJhbnNsYXRpb25zIiwiZ2V0VHJhbnNsYXRpb25zIiwidGV4dFByb3BzIiwidGl0bGUiLCJ0b29sdGlwIiwiY2xhc3NOYW1lcyIsImdldFZhbGlkYXRpb25DbGFzcyIsImNsYXNzTmFtZSIsInJlYWRPbmx5IiwicGxhY2Vob2xkZXIiLCJyZW5kZXJUYWdzIiwic2hvd1N1Z2dlc3Rpb25zIiwic3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50Iiwic3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudCIsIndhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnQiLCJtaW5MZXR0ZXJzVG9GZXRjaCIsInBvcHBlclByb3BzIiwicmVuZGVyRGVmYXVsdFZhbGlkYXRpb24iLCJsYWJlbCIsInJlbmRlckxhYmVsIiwidmFsdWVOb3RBZGRlZEVycm9yIiwibWF4VGFnc1N1cnBhc3NlZEVycm9yIiwiaSIsInN0YXJ0c1dpdGgiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJsb2FkaW5nRGVsYXlNcyIsInRoZW4iLCJjbGVhclRpbWVvdXQiLCJmaWx0ZXJlZFRhZ3MiLCJmaWx0ZXJFeGlzdGluZ1RhZ3MiLCJ0b0xvd2VyQ2FzZSIsImFsbG93U2FtZVRhZ011bHRpcGxlVGltZXMiLCJzb21lIiwidCIsInNsaWNlIiwibWF4U3VnZ2VzdGlvbnMiLCJpbmRleCIsImJvZHkiLCJ0b1N0cmluZyIsInAiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJzaG93Q2hpcHMiLCJtYXAiLCJpdGVtIiwicmVuZGVyVGFnIiwicmVhZG9ubHlFbXB0eVBsYWNlaG9sZGVyIiwiQmFzZUlucHV0IiwiZGVmYXVsdFByb3BzIiwiZGlzYWJsZWQiLCJuZXdUYWdOYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJEYXRlIiwiZ2V0VGltZSIsInRleHQiLCJUYWdzIiwid2l0aFRoZW1lQ29udGV4dCIsIndpdGhGb3JtQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNPLElBQU1BLHVCQUF1QixxQkFDL0JDLDZFQUQrQjtBQUVsQ0MsUUFBTSxFQUFFO0FBRjBCLEVBQTdCO0FBaURBLElBQU1DLE9BQWI7QUFBQTtBQUFBO0FBQUE7O0FBa0NFLG1CQUFZQyxLQUFaLEVBQThDO0FBQUE7O0FBQUE7O0FBQzVDLGlGQUFNQSxLQUFOO0FBRDRDLFVBSHRDQyxPQUdzQztBQUFBLFVBRnRDQyxjQUVzQzs7QUFBQSxVQWtNdENDLG1CQWxNc0MsR0FrTWhCLFVBQUNDLFVBQUQ7QUFBQSxhQUM1QixNQUFLQyxRQUFMLENBQ0U7QUFBQSxlQUFPO0FBQUVELG9CQUFVLEVBQVZBO0FBQUYsU0FBUDtBQUFBLE9BREYsRUFFRTtBQUFBLGVBQU0sTUFBS0UsWUFBTCxFQUFOO0FBQUEsT0FGRixDQUQ0QjtBQUFBLEtBbE1nQjs7QUFBQSxVQXdNdENDLE9BeE1zQyxHQXdNNUIsWUFBTTtBQUN0QixZQUFLRixRQUFMLENBQ0U7QUFBRUcscUJBQWEsRUFBRSxJQUFqQjtBQUF1QkMsMEJBQWtCLEVBQUUsSUFBM0M7QUFBaURDLGVBQU8sRUFBRTtBQUExRCxPQURGLEVBRUU7QUFBQSxlQUFNLE1BQUtKLFlBQUwsRUFBTjtBQUFBLE9BRkY7O0FBSUEsWUFBS0ssaUJBQUwsQ0FBdUIsTUFBS0MsS0FBTCxDQUFXQyxLQUFsQztBQUNELEtBOU02Qzs7QUFBQSxVQWdOdENDLFNB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QjNDLGNBQVksRUFBRSxJO0FBQ2RPLGNBQVksRUFBRWhGLHVCO0FBQ2QrRixtQkFBaUIsRUFBRTs7QUFxZWhCLElBQU0wQyxJQUFJLEdBQUdDLHdGQUFnQixDQUNsQ0MsNkVBQWUsQ0FBWXhJLE9BQVosQ0FEbUIsRUFFbEMsTUFGa0MsQ0FBN0I7ZUFLUXNJLEk7QUFBQTs7Ozs7Ozs7OzswQkF2akJGekksdUI7MEJBaURBRyxPOzBCQWlnQkFzSSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM2tCYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMWQ3MjA4YS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWJzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW5wdXRHcm91cCB9IGZyb20gJy4uL2lucHV0R3JvdXAvSW5wdXRHcm91cCc7XHJcbmltcG9ydCB7IFRleHQsIFRleHRQcm9wcywgVGV4dFJhdyB9IGZyb20gJy4uL3RleHQvVGV4dCc7XHJcbmltcG9ydCAqIGFzIFBsdXNJY29uIGZyb20gJ21hdGVyaWFsLWRlc2lnbi1pY29ucy9jb250ZW50L3N2Zy9wcm9kdWN0aW9uL2ljX2FkZF9jaXJjbGVfb3V0bGluZV8yNHB4LnN2Zyc7XHJcbmltcG9ydCB7XHJcbiAgQmFzZUlucHV0UHJvcHMsXHJcbiAgQmFzZUlucHV0U3RhdGUsXHJcbiAgQmFzZUlucHV0LFxyXG4gIFZhbGlkYXRpb25FcnJvcixcclxuICBkZWZhdWx0QmFzZVRyYW5zbGF0aW9ucyxcclxufSBmcm9tICcuLi9iYXNlL2lucHV0L0Jhc2VJbnB1dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgVGFnc1N1Z2dlc3Rpb25zIGZyb20gJy4vc3ViQ29tcG9uZW50cy9UYWdzU3VnZ2VzdGlvbnMnO1xyXG5pbXBvcnQgeyB3aXRoRm9ybUNvbnRleHQgfSBmcm9tICcuLi9mb3JtL3dpdGhGb3JtQ29udGV4dCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgeyB3aXRoVGhlbWVDb250ZXh0IH0gZnJvbSAnLi4vdGhlbWVQcm92aWRlci93aXRoVGhlbWVDb250ZXh0JztcclxuaW1wb3J0IHsgUG9wcGVyUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXIvUG9wcGVyJztcclxuXHJcbi8vIE1pc2NcclxuZXhwb3J0IHR5cGUgVGFnID0ge1xyXG4gIGlkOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRUYWdzVHJhbnNsYXRpb25zID0ge1xyXG4gIC4uLmRlZmF1bHRCYXNlVHJhbnNsYXRpb25zLFxyXG4gIGFkZE5ldzogJ0FkZCBuZXcnLFxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgVGFnc1RyYW5zbGF0aW9ucyA9IFBhcnRpYWw8dHlwZW9mIGRlZmF1bHRUYWdzVHJhbnNsYXRpb25zPjtcclxuXHJcbmV4cG9ydCB0eXBlIFRhZ3NQcm9wcyA9IHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIHRhZ3M6IFRhZ1tdO1xyXG4gIGV4aXN0aW5nVGFncz86IFRhZ1tdO1xyXG4gIGZldGNoRXhpc3RpbmdUYWdzPzogKHRleHQ6IHN0cmluZykgPT4gUHJvbWlzZTxUYWdbXT47XHJcbiAgb25UYWdzQ2hhbmdlZDogKG5ld1RhZ3M6IFRhZ1tdKSA9PiB2b2lkO1xyXG4gIG9uTmV3VGFnQWRkZWQ/OiAobmV3VGFnTmFtZTogc3RyaW5nKSA9PiBQcm9taXNlPFRhZz47XHJcbiAgb25UYWdDbGljaz86ICh0YWc6IFRhZykgPT4gdm9pZDtcclxuICBzaG93Q2hpcHM/OiBib29sZWFuO1xyXG4gIGFsbG93TmV3PzogYm9vbGVhbjtcclxuICBhZGROZXdPbkJsdXI/OiBib29sZWFuO1xyXG4gIHRleHRQcm9wcz86IFRleHRQcm9wcztcclxuICByZWFkT25seT86IGJvb2xlYW47XHJcbiAgcmVhZG9ubHlFbXB0eVBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIG1heFRhZ3M/OiBudW1iZXI7XHJcbiAgdmFsdWVOb3RBZGRlZEVycm9yPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgbWF4VGFnc1N1cnBhc3NlZEVycm9yPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgc2hvd1N1Z2dlc3Rpb25zPzogYm9vbGVhbjtcclxuICBzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgd2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIGxvYWRpbmdEZWxheU1zPzogbnVtYmVyO1xyXG4gIGZpbHRlckV4aXN0aW5nVGFncz86ICh0ZXh0OiBzdHJpbmcsIGV4aXN0aW5nVGFnczogVGFnW10pID0+IFRhZ1tdO1xyXG4gIGFsbG93U2FtZVRhZ011bHRpcGxlVGltZXM/OiBib29sZWFuO1xyXG4gIG1heFN1Z2dlc3Rpb25zPzogbnVtYmVyO1xyXG4gIHBvcHBlclByb3BzPzogUGFydGlhbDxQb3BwZXJQcm9wcz47XHJcbiAgbWluTGV0dGVyc1RvRmV0Y2g/OiBudW1iZXI7XHJcbn0gJiBCYXNlSW5wdXRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCBUYWdzVHJhbnNsYXRpb25zPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFnc1N0YXRlIGV4dGVuZHMgQmFzZUlucHV0U3RhdGUge1xyXG4gIHRleHRJc0ZvY3VzZWQ6IGJvb2xlYW47XHJcbiAgdGV4dEVycm9yczogVmFsaWRhdGlvbkVycm9yW107XHJcbiAgdGV4dElzVmFsaWQ6IGJvb2xlYW47XHJcbiAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBib29sZWFuO1xyXG4gIGZldGNoZWRFeGlzdGluZ1RhZ3M6IFRhZ1tdO1xyXG4gIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBib29sZWFuO1xyXG4gIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj86IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBJbmplY3RlZFByb3BzID0ge307XHJcblxyXG5leHBvcnQgY2xhc3MgVGFnc1JhdyBleHRlbmRzIEJhc2VJbnB1dDxcclxuICBUYWdzUHJvcHMgJiBJbmplY3RlZFByb3BzLFxyXG4gIFRhZ3NTdGF0ZSxcclxuICBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIFRhZ3NUcmFuc2xhdGlvbnNcclxuPiB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFRhZ3NQcm9wcyA9IHtcclxuICAgIC4uLkJhc2VJbnB1dC5kZWZhdWx0UHJvcHMsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBjbGFzc05hbWU6ICcnLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBleGlzdGluZ1RhZ3M6IFtdLFxyXG4gICAgbWF4VGFnczogMTAwMCxcclxuICAgIG9uVGFnc0NoYW5nZWQ6ICgpID0+IHVuZGVmaW5lZCxcclxuICAgIG9uTmV3VGFnQWRkZWQ6IG5ld1RhZ05hbWUgPT5cclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKHsgbmFtZTogbmV3VGFnTmFtZSwgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH0pLFxyXG4gICAgdmFsdWVOb3RBZGRlZEVycm9yOiA8c3Bhbj5Zb3UgZm9yZ290IHRvIGFkZCB0YWc8L3NwYW4+LFxyXG4gICAgbWF4VGFnc1N1cnBhc3NlZEVycm9yOiA8c3Bhbj5NYXhpbXVtIG51bWJlciBvZiB0YWdzIHN1cnBhc3NlZDwvc3Bhbj4sXHJcbiAgICB3YWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50OiA8c3Bhbj5XYWl0aW5nIGZvciBtb3JlIGlucHV0Li4uPC9zcGFuPixcclxuICAgIHNob3dTdWdnZXN0aW9uczogdHJ1ZSxcclxuICAgIHN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudDogJ0xvYWRpbmcuLi4nLFxyXG4gICAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudDogJ05vIGV4aXN0aW5nIHRhZ3MuLi4nLFxyXG4gICAgbG9hZGluZ0RlbGF5TXM6IDUwMCxcclxuICAgIGZpbHRlckV4aXN0aW5nVGFnczogKHRleHQsIHRhZ3MpID0+XHJcbiAgICAgIHRhZ3MuZmlsdGVyKHRhZyA9PiB0YWcubmFtZSAmJiB0YWcubmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgodGV4dCkpLFxyXG4gICAgbWF4U3VnZ2VzdGlvbnM6IDUsXHJcbiAgICBhZGROZXdPbkJsdXI6IHRydWUsXHJcbiAgICB0cmFuc2xhdGlvbnM6IGRlZmF1bHRUYWdzVHJhbnNsYXRpb25zLFxyXG4gICAgbWluTGV0dGVyc1RvRmV0Y2g6IDAsXHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSB0ZXh0UmVmOiBSZWFjdC5SZWZPYmplY3Q8VGV4dFJhdz47XHJcbiAgcHJpdmF0ZSBzdWdnZXN0aW9uc1JlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFRhZ3NQcm9wcyAmIEluamVjdGVkUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgIHRleHRFcnJvcnM6IFtdLFxyXG4gICAgICB0ZXh0SXNGb2N1c2VkOiBmYWxzZSxcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgZmV0Y2hpbmdFeGlzdGluZ1RhZ3M6IGZhbHNlLFxyXG4gICAgICB0ZXh0SXNWYWxpZDogZmFsc2UsXHJcbiAgICAgIGZldGNoZWRFeGlzdGluZ1RhZ3M6IFtdLFxyXG4gICAgfTtcclxuICAgIHRoaXMudGV4dFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5zdWdnZXN0aW9uc1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5oYW5kbGVDbGlja091dHNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvY3VzKCkge1xyXG4gICAgaWYgKHRoaXMudGV4dFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHRoaXMudGV4dFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKG9sZFByb3BzOiBUYWdzUHJvcHMgJiBJbmplY3RlZFByb3BzKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG9sZFByb3BzLnRhZ3MgIT09IHRoaXMucHJvcHMudGFncyB8fFxyXG4gICAgICBvbGRQcm9wcy52YWxpZGF0b3JzICE9PSB0aGlzLnByb3BzLnZhbGlkYXRvcnMgfHxcclxuICAgICAgb2xkUHJvcHMuY3VzdG9tVmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy5jdXN0b21WYWxpZGF0b3JzIHx8XHJcbiAgICAgIG9sZFByb3BzLnJlcXVpcmVkICE9PSB0aGlzLnByb3BzLnJlcXVpcmVkXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5oYW5kbGVFcnJvcnModGhpcy5wcm9wcy50YWdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVDbGlja091dHNpZGUoZTogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5jb250YWluZXJSZWYuY3VycmVudCB8fFxyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KSB8fFxyXG4gICAgICAhdGhpcy5zdWdnZXN0aW9uc1JlZi5jdXJyZW50IHx8XHJcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnNSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudClcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5hZGROZXdPbkJsdXIgJiYgdGhpcy5zdGF0ZS52YWx1ZSkge1xyXG4gICAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHRoaXMuZ2V0U3VnZ2VzdGlvbnMoKTtcclxuICAgICAgY29uc3QgZXhpc3RpbmcgPSBzdWdnZXN0aW9ucy5maW5kKHMgPT4gcy5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgdGhpcy5vblN1Z2dlc3Rpb25TZWxlY3RlZChleGlzdGluZyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5hbGxvd05ldykge1xyXG4gICAgICAgIHRoaXMuYWRkTmV3VGFnKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS52YWx1ZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb25zID0gdGhpcy5nZXRUcmFuc2xhdGlvbnMoZGVmYXVsdFRhZ3NUcmFuc2xhdGlvbnMpO1xyXG4gICAgY29uc3QgdGV4dFByb3BzID0gdGhpcy5wcm9wcy50ZXh0UHJvcHMgPyB0aGlzLnByb3BzLnRleHRQcm9wcyA6IHt9O1xyXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB0aGlzLmdldFN1Z2dlc3Rpb25zKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SW5wdXRHcm91cCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gdG9vbHRpcD17dGhpcy5wcm9wcy50b29sdGlwfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAnaW5wdXRfX2Jhc2UgdGFncy1pbnB1dCcsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VmFsaWRhdGlvbkNsYXNzKCksXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXQtLXJlYWRPbmx5JzogdGhpcy5wcm9wcy5yZWFkT25seSxcclxuICAgICAgICAgICAgICAndGFncy1pbnB1dC0taGFzUGxhY2Vob2xkZXInOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50ZXh0UHJvcHMgJiYgdGhpcy5wcm9wcy50ZXh0UHJvcHMucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICByZWY9e3RoaXMuY29udGFpbmVyUmVmfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLnJlbmRlclRhZ3MoKX1cclxuICAgICAgICAgIHsoIXRoaXMucHJvcHMubWF4VGFncyB8fFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1heFRhZ3MgPiAodGhpcy5wcm9wcy50YWdzICYmIHRoaXMucHJvcHMudGFncy5sZW5ndGgpKSAmJlxyXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXRfX3RhZ3NfX3dyYXBwZXIgJyArXHJcbiAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnJlYWRPbmx5ID8gJ2ZpbGxlZCAnIDogJycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgey4uLnRleHRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctdGV4dC1pbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICByZWY9e3RoaXMudGV4dFJlZn1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggPiAwID8gZmFsc2UgOiB0aGlzLnByb3BzLnJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAndGFncy1pbnB1dF9fdGV4dC1pbnB1dCAnICtcclxuICAgICAgICAgICAgICAgICAgICAodGV4dFByb3BzLmNsYXNzTmFtZSA/IHRleHRQcm9wcy5jbGFzc05hbWUgOiAnJylcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3duKHN1Z2dlc3Rpb25zKX1cclxuICAgICAgICAgICAgICAgICAgb25FcnJvcnNDaGFuZ2VkPXt0aGlzLm9uVGV4dEVycm9yc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25Gb2N1c31cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRPbmx5fVxyXG4gICAgICAgICAgICAgICAgICBzaG93VmFsaWRhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIGlnbm9yZUNvbnRleHQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e3RoaXMucHJvcHMudmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgICAgY3VzdG9tVmFsaWRhdG9ycz17dGhpcy5wcm9wcy5jdXN0b21WYWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSAmJiB0aGlzLnByb3BzLnNob3dTdWdnZXN0aW9ucyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUYWdzU3VnZ2VzdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRleHQtaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyUmVmPXt0aGlzLnN1Z2dlc3Rpb25zUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXt0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0aGlzLnByb3BzLmFsbG93TmV3fVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj17dGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5mZXRjaGluZ0V4aXN0aW5nVGFnc31cclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nQ29tcG9uZW50PXt0aGlzLnByb3BzLnN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICBpc1Zpc2libGU9e3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIEVtcHR5Q29tcG9uZW50PXt0aGlzLnByb3BzLnN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgV2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLndhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNXYWl0aW5nRm9yTW9yZUlucHV0PXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFsdWUubGVuZ3RoIDwgdGhpcy5wcm9wcy5taW5MZXR0ZXJzVG9GZXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0YWdzPXtzdWdnZXN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGVkPXt0aGlzLm9uU3VnZ2VzdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tPdXRzaWRlPXt0aGlzLm9uQ2xpY2tPdXRzaWRlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIEFkZE5ld1RhZ0NvbXBvbmVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFsbG93TmV3ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnByb3BzLmV4aXN0aW5nVGFncyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IGUubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnN0YXRlLmZldGNoZWRFeGlzdGluZ1RhZ3MgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gZS5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRleHRJc1ZhbGlkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctYWRkLW5ldy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3N1Z2dlc3Rpb24gdGFncy1pbnB1dF9fYWRkLW5ld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGROZXdUYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zLmFkZE5ld30gXCJ7dGhpcy5zdGF0ZS52YWx1ZX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcG9wcGVyUHJvcHM9e3RoaXMucHJvcHMucG9wcGVyUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAge3RoaXMucmVuZGVyRGVmYXVsdFZhbGlkYXRpb24oKX1cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsICYmIChcclxuICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFsdWUgIT09ICcnIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRleHRJc0ZvY3VzZWQgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVhZE9ubHkgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggPj0gdGhpcy5wcm9wcy5tYXhUYWdzXHJcbiAgICAgICAgICAgICAgICAgID8gJ2xhYmVsLS1mb2N1c2VkJ1xyXG4gICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyTGFiZWwoKX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uVGV4dEVycm9yc0NoYW5nZWQgPSAodGV4dEVycm9yczogVmFsaWRhdGlvbkVycm9yW10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAoKSA9PiAoeyB0ZXh0RXJyb3JzIH0pLFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG5cclxuICBwcml2YXRlIG9uRm9jdXMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7IHRleHRJc0ZvY3VzZWQ6IHRydWUsIHN1Z2dlc3Rpb25zVmlzaWJsZTogdHJ1ZSwgdG91Y2hlZDogdHJ1ZSB9LFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncyh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uS2V5RG93biA9IChzdWdnZXN0aW9uczogVGFnW10pID0+IGFzeW5jIGUgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBlLmtleSA9PT0gJ0VudGVyJyAmJlxyXG4gICAgICAodGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgfHxcclxuICAgICAgICB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAhPT0gdW5kZWZpbmVkKSAmJlxyXG4gICAgICB0aGlzLnN0YXRlLnRleHRFcnJvcnMubGVuZ3RoID09PSAwXHJcbiAgICApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBjb25zdCBleGlzdGluZ1RhZyA9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgJiZcclxuICAgICAgICB0aGlzLnByb3BzLmV4aXN0aW5nVGFncy5maW5kKGV0ID0+IGV0Lm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZChcclxuICAgICAgICAgIHRoaXMucHJvcHMudGFncy5jb25jYXQoc3VnZ2VzdGlvbnNbdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb25dKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJywgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmIChleGlzdGluZ1RhZykge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZCh0aGlzLnByb3BzLnRhZ3MuY29uY2F0KGV4aXN0aW5nVGFnKSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJyB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuYWxsb3dOZXcpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmFkZE5ld1RhZygpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChzdWdnZXN0aW9ucy5sZW5ndGggPiAwICYmIHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlKSB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgY29uc3QgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uID1cclxuICAgICAgICAgIHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBzdWdnZXN0aW9ucy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IDBcclxuICAgICAgICAgICAgPyBzdWdnZXN0aW9ucy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gLSAxO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgICAgY29uc3QgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uID1cclxuICAgICAgICAgIHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgPyAwXHJcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gKyAxO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBhZGROZXdUYWcgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUYWcgPSBhd2FpdCB0aGlzLnByb3BzLm9uTmV3VGFnQWRkZWQodGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICBpZiAobmV3VGFnKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZChcclxuICAgICAgICB0aGlzLnByb3BzLnRhZ3MgPyB0aGlzLnByb3BzLnRhZ3MuY29uY2F0KG5ld1RhZykgOiBbbmV3VGFnXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJywgdGV4dEVycm9yczogW10gfSwgKCkgPT4ge1xyXG4gICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uU3VnZ2VzdGlvblNlbGVjdGVkID0gKHRhZzogVGFnKSA9PiB7XHJcbiAgICBjb25zdCBuZXdUYWdzID0gdGhpcy5wcm9wcy50YWdzLmNvbmNhdCh0YWcpO1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKG5ld1RhZ3MpO1xyXG4gICAgY29uc3QgaXNNYXggPSBuZXdUYWdzLmxlbmd0aCA9PT0gdGhpcy5wcm9wcy5tYXhUYWdzO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlOiAhdGhpcy5wcm9wcy5hbGxvd05ldyAmJiAhaXNNYXggPyB0aGlzLnN0YXRlLnZhbHVlIDogJycsXHJcbiAgICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBpc01heCA/IGZhbHNlIDogdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUsXHJcbiAgICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICAgICAgdGV4dEVycm9yczogW10sXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhdGhpcy5wcm9wcy5tYXhUYWdzIHx8XHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoICsgMSA8IHRoaXMucHJvcHMubWF4VGFnc1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25CbHVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHRleHRJc0ZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25DbGlja091dHNpZGUgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcblxyXG4gIHByaXZhdGUgb25UZXh0Q2hhbmdlZCA9IChcclxuICAgIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LFxyXG4gICAgaXNWYWxpZDogYm9vbGVhblxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7XHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgaXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICB0ZXh0SXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IHRydWUsXHJcbiAgICAgIH0pLFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMgPSAodGFnczogVGFnW10gPSB0aGlzLnByb3BzLnRhZ3MpID0+IHtcclxuICAgIGxldCBlcnJvcnMgPSB0aGlzLmdldEVycm9ycyh0YWdzKTtcclxuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldEludmFsaWQoZXJyb3JzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsaWQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGdldEVycm9ycyh0YWdzOiBUYWdbXSkge1xyXG4gICAgbGV0IGVycm9ycyA9IFtdO1xyXG4gICAgaWYgKHRhZ3MubGVuZ3RoIDwgdGhpcy5wcm9wcy5tYXhUYWdzKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5zdGF0ZS50ZXh0RXJyb3JzKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyAmJiB0YWdzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLnJlcXVpcmVkKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQoXHJcbiAgICAgICAgdGhpcy5nZXRUcmFuc2xhdGlvbnModGhpcy5wcm9wcy50cmFuc2xhdGlvbnMpLnJlcXVpcmVkXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSAmJiB0aGlzLnByb3BzLmFsbG93TmV3ICYmICF0aGlzLnN0YXRlLnRleHRJc0ZvY3VzZWQpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnByb3BzLnZhbHVlTm90QWRkZWRFcnJvcik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5tYXhUYWdzIDwgKHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoKSkge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMucHJvcHMubWF4VGFnc1N1cnBhc3NlZEVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcnMuZmlsdGVyKGkgPT4gaSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZldGNoRXhpc3RpbmdUYWdzKHN0YXJ0c1dpdGg6IHN0cmluZyA9ICcnKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hFeGlzdGluZ1RhZ3MgJiZcclxuICAgICAgc3RhcnRzV2l0aC5sZW5ndGggPj0gdGhpcy5wcm9wcy5taW5MZXR0ZXJzVG9GZXRjaFxyXG4gICAgKSB7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZmV0Y2hpbmdFeGlzdGluZ1RhZ3M6IHRydWUgfSksXHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkaW5nRGVsYXlNc1xyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnByb3BzLmZldGNoRXhpc3RpbmdUYWdzKHN0YXJ0c1dpdGgpLnRoZW4oZmV0Y2hlZEV4aXN0aW5nVGFncyA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGZldGNoZWRFeGlzdGluZ1RhZ3MsXHJcbiAgICAgICAgICBmZXRjaGluZ0V4aXN0aW5nVGFnczogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTdWdnZXN0aW9ucygpIHtcclxuICAgIGNvbnN0IGV4aXN0aW5nVGFnczogVGFnW10gPSBbXVxyXG4gICAgICAuY29uY2F0KHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzID8gdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgOiBbXSlcclxuICAgICAgLmNvbmNhdChcclxuICAgICAgICB0aGlzLnN0YXRlLmZldGNoZWRFeGlzdGluZ1RhZ3MgPyB0aGlzLnN0YXRlLmZldGNoZWRFeGlzdGluZ1RhZ3MgOiBbXVxyXG4gICAgICApO1xyXG4gICAgY29uc3QgZmlsdGVyZWRUYWdzID0gdGhpcy5wcm9wcy5maWx0ZXJFeGlzdGluZ1RhZ3MoXHJcbiAgICAgIHRoaXMuc3RhdGUudmFsdWUgPyB0aGlzLnN0YXRlLnZhbHVlLnRvTG93ZXJDYXNlKCkgOiAnJyxcclxuICAgICAgZXhpc3RpbmdUYWdzXHJcbiAgICApO1xyXG4gICAgbGV0IHN1Z2dlc3Rpb25zID0gZmlsdGVyZWRUYWdzXHJcbiAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgdGFnID0+XHJcbiAgICAgICAgICB0aGlzLnByb3BzLmFsbG93U2FtZVRhZ011bHRpcGxlVGltZXMgfHxcclxuICAgICAgICAgICF0aGlzLnByb3BzLnRhZ3Muc29tZSh0ID0+IHQuaWQgPT09IHRhZy5pZClcclxuICAgICAgKVxyXG4gICAgICAuc2xpY2UoMCwgdGhpcy5wcm9wcy5tYXhTdWdnZXN0aW9ucyk7XHJcbiAgICByZXR1cm4gc3VnZ2VzdGlvbnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclRhZyh0YWc6IFRhZywgaW5kZXg6IG51bWJlcikge1xyXG4gICAgY29uc3QgYm9keSA9IChcclxuICAgICAgPD5cclxuICAgICAgICB7dGFnLm5hbWV9XHJcbiAgICAgICAgeyF0aGlzLnByb3BzLnJlYWRPbmx5ICYmIChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctdGFnLScgKyBpbmRleC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgY2lyY3VsYXI9e3RydWV9XHJcbiAgICAgICAgICAgIGJsYW5rPXt0cnVlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRhZ1JlbW92ZUNsaWNrKHRhZyl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTEgdHJhbnNmb3JtLXJvdGF0ZS0tNDUgbGluZS1oZWlnaHQtLTAgcC0wXCJcclxuICAgICAgICAgICAgQ29tcG9uZW50PXtwID0+IChcclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3AuY2xhc3NOYW1lfSBpZD17cC5pZH0gb25DbGljaz17cC5vbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgIHtwLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBsdXNJY29uIC8+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCd0YWdzLWlucHV0X190YWcnLCB7XHJcbiAgICAgICd0YWdzLWlucHV0X190YWctY2hpcCc6IHRoaXMucHJvcHMuc2hvd0NoaXBzLFxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblRhZ0NsaWNrKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy50YWdDbGljayh0YWcpfVxyXG4gICAgICAgICAgc21hbGw9e3RydWV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2JvZHl9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMudGFnQ2xpY2sodGFnKX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGtleT17aW5kZXh9PlxyXG4gICAgICAgIHtib2R5fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRhZ0NsaWNrID0gKHRhZzogVGFnKSA9PiAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uVGFnQ2xpY2sgJiYgdGhpcy5wcm9wcy5vblRhZ0NsaWNrKHRhZyk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSB0YWdSZW1vdmVDbGljayA9ICh0YWc6IFRhZykgPT4gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgbmV3VGFncyA9IHRoaXMucHJvcHMudGFncy5maWx0ZXIoc3YgPT4gc3YuaWQgIT09IHRhZy5pZCk7XHJcbiAgICAvKmlmIChuZXdUYWdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZm9jdXMoKSwgNTApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICB9KTsqL1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkICYmIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZChuZXdUYWdzKTtcclxuICAgIHRoaXMuaGFuZGxlRXJyb3JzKG5ld1RhZ3MpO1xyXG4gICAgLy8gdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyVGFncygpIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLnRhZ3MgJiYgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnX193cmFwcGVyXCI+XHJcbiAgICAgICAge3RoaXMucHJvcHMudGFncy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB0aGlzLnJlbmRlclRhZyhpdGVtLCBpbmRleCkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgOiAoXHJcbiAgICAgIHRoaXMucHJvcHMucmVhZE9ubHkgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnX193cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3RhZ1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5yZWFkb25seUVtcHR5UGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUYWdzID0gd2l0aFRoZW1lQ29udGV4dDxUYWdzUHJvcHMsIEluc3RhbmNlVHlwZTx0eXBlb2YgVGFnc1Jhdz4+KFxyXG4gIHdpdGhGb3JtQ29udGV4dDxUYWdzUHJvcHM+KFRhZ3NSYXcpLFxyXG4gICd0YWdzJ1xyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFncztcclxuIiwiZXhwb3J0ICogZnJvbSAnLi92YWxpZGF0b3JzL2luZGV4JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2J1dHRvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9jaGVja2JveCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9kcm9wZG93bic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9keW5hbWljU3VibWl0JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXRHcm91cCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9pbnB1dEhlYWRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9tb25leS9Nb25leSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9vcGVuaW5nSG91cnMvb3BlbmluZ0hvdXJzRGF5JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL29wZW5pbmdIb3Vycy9vcGVuaW5nSG91cnNTcGVjaWFsJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL29wZW5pbmdIb3Vycy9vcGVuaW5nSG91cnNXZWVrJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3JhZGlvQ29udGFpbmVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC9TZWxlY3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvc3VibWl0JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RhZ3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGV4dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90ZXh0QXJlYSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90aW1lJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RpbWVTcGFuJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RoZW1lUHJvdmlkZXInO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9