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
      _this.props.onTagsChanged(_this.props.tags.concat(tag));

      _this.setState({
        value: '',
        preselectedSuggestion: undefined,
        textErrors: []
      }, function () {
        if (!_this.props.maxTags && _this.props.tags.length + 1 < _this.props.maxTags) {
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

        if (newTags.length === 0) {
          setTimeout(function () {
            return _this.focus();
          }, 50);
        }

        _this.setState({
          suggestionsVisible: false
        });

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

      if (!this.containerRef.current || this.containerRef.current.contains(e.target)) {
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
        anchorEl: this.containerRef.current,
        allowNew: this.props.allowNew,
        preselectedSuggestion: this.state.preselectedSuggestion,
        loading: this.state.fetchingExistingTags,
        LoadingComponent: this.props.suggestionsLoadingComponent,
        isVisible: this.state.suggestionsVisible,
        EmptyComponent: this.props.suggestionsEmptyComponent,
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

      if (this.props.fetchExistingTags) {
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
  translations: defaultTagsTranslations
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9UYWdzLnRzeCJdLCJuYW1lcyI6WyJkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyIsImRlZmF1bHRCYXNlVHJhbnNsYXRpb25zIiwiYWRkTmV3IiwiVGFnc1JhdyIsInByb3BzIiwidGV4dFJlZiIsIm9uVGV4dEVycm9yc0NoYW5nZWQiLCJ0ZXh0RXJyb3JzIiwic2V0U3RhdGUiLCJoYW5kbGVFcnJvcnMiLCJvbkZvY3VzIiwidGV4dElzRm9jdXNlZCIsInN1Z2dlc3Rpb25zVmlzaWJsZSIsInRvdWNoZWQiLCJmZXRjaEV4aXN0aW5nVGFncyIsInN0YXRlIiwidmFsdWUiLCJvbktleURvd24iLCJzdWdnZXN0aW9ucyIsImUiLCJrZXkiLCJwcmVzZWxlY3RlZFN1Z2dlc3Rpb24iLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImV4aXN0aW5nVGFnIiwiZXhpc3RpbmdUYWdzIiwiZmluZCIsImV0IiwibmFtZSIsIm9uVGFnc0NoYW5nZWQiLCJ0YWdzIiwiY29uY2F0IiwiYWxsb3dOZXciLCJhZGROZXdUYWciLCJvbk5ld1RhZ0FkZGVkIiwibmV3VGFnIiwib25TdWdnZXN0aW9uU2VsZWN0ZWQiLCJ0YWciLCJtYXhUYWdzIiwib25CbHVyIiwib25DbGlja091dHNpZGUiLCJvblRleHRDaGFuZ2VkIiwiaXNWYWxpZCIsInRhcmdldCIsInRleHRJc1ZhbGlkIiwiZXJyb3JzIiwiZ2V0RXJyb3JzIiwic2V0SW52YWxpZCIsInNldFZhbGlkIiwidGFnQ2xpY2siLCJvblRhZ0NsaWNrIiwidGFnUmVtb3ZlQ2xpY2siLCJuZXdUYWdzIiwiZmlsdGVyIiwic3YiLCJpZCIsInNldFRpbWVvdXQiLCJmb2N1cyIsImZldGNoaW5nRXhpc3RpbmdUYWdzIiwiZmV0Y2hlZEV4aXN0aW5nVGFncyIsIlJlYWN0IiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiYmluZCIsImN1cnJlbnQiLCJvbGRQcm9wcyIsInZhbGlkYXRvcnMiLCJjdXN0b21WYWxpZGF0b3JzIiwicmVxdWlyZWQiLCJjb250YWluZXJSZWYiLCJjb250YWlucyIsImFkZE5ld09uQmx1ciIsImdldFN1Z2dlc3Rpb25zIiwiZXhpc3RpbmciLCJzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRyYW5zbGF0aW9ucyIsImdldFRyYW5zbGF0aW9ucyIsInRleHRQcm9wcyIsInRpdGxlIiwidG9vbHRpcCIsImNsYXNzTmFtZXMiLCJnZXRWYWxpZGF0aW9uQ2xhc3MiLCJjbGFzc05hbWUiLCJyZWFkT25seSIsInBsYWNlaG9sZGVyIiwicmVuZGVyVGFncyIsInNob3dTdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudCIsInN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQiLCJwb3BwZXJQcm9wcyIsInJlbmRlckRlZmF1bHRWYWxpZGF0aW9uIiwibGFiZWwiLCJyZW5kZXJMYWJlbCIsInZhbHVlTm90QWRkZWRFcnJvciIsIm1heFRhZ3NTdXJwYXNzZWRFcnJvciIsImkiLCJzdGFydHNXaXRoIiwidGltZXIiLCJsb2FkaW5nRGVsYXlNcyIsInRoZW4iLCJjbGVhclRpbWVvdXQiLCJmaWx0ZXJlZFRhZ3MiLCJmaWx0ZXJFeGlzdGluZ1RhZ3MiLCJ0b0xvd2VyQ2FzZSIsImFsbG93U2FtZVRhZ011bHRpcGxlVGltZXMiLCJzb21lIiwidCIsInNsaWNlIiwibWF4U3VnZ2VzdGlvbnMiLCJpbmRleCIsImJvZHkiLCJ0b1N0cmluZyIsInAiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJzaG93Q2hpcHMiLCJtYXAiLCJpdGVtIiwicmVuZGVyVGFnIiwicmVhZG9ubHlFbXB0eVBsYWNlaG9sZGVyIiwiQmFzZUlucHV0IiwiZGVmYXVsdFByb3BzIiwiZGlzYWJsZWQiLCJuZXdUYWdOYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJEYXRlIiwiZ2V0VGltZSIsInRleHQiLCJUYWdzIiwid2l0aFRoZW1lQ29udGV4dCIsIndpdGhGb3JtQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNPLElBQU1BLHVCQUF1QixxQkFDL0JDLDZFQUQrQjtBQUVsQ0MsUUFBTSxFQUFFO0FBRjBCLEVBQTdCO0FBK0NBLElBQU1DLE9BQWI7QUFBQTtBQUFBO0FBQUE7O0FBK0JFLG1CQUFZQyxLQUFaLEVBQThDO0FBQUE7O0FBQUE7O0FBQzVDLGlGQUFNQSxLQUFOO0FBRDRDLFVBRnRDQyxPQUVzQzs7QUFBQSxVQXNMdENDLG1CQXRMc0MsR0FzTGhCLFVBQUNDLFVBQUQ7QUFBQSxhQUM1QixNQUFLQyxRQUFMLENBQ0U7QUFBQSxlQUFPO0FBQUVELG9CQUFVLEVBQVZBO0FBQUYsU0FBUDtBQUFBLE9BREYsRUFFRTtBQUFBLGVBQU0sTUFBS0UsWUFBTCxFQUFOO0FBQUEsT0FGRixDQUQ0QjtBQUFBLEtBdExnQjs7QUFBQSxVQTRMdENDLE9BNUxzQyxHQTRMNUIsWUFBTTtBQUN0QixZQUFLRixRQUFMLENBQ0U7QUFBRUcscUJBQWEsRUFBRSxJQUFqQjtBQUF1QkMsMEJBQWtCLEVBQUUsSUFBM0M7QUFBaURDLGVBQU8sRUFBRTtBQUExRCxPQURGLEVBRUU7QUFBQSxlQUFNLE1BQUtKLFlBQUwsRUFBTjtBQUFBLE9BRkY7O0FBSUEsWUFBS0ssaUJBQUwsQ0FBdUIsTUFBS0MsS0FBTCxDQUFXQyxLQUFsQztBQUNELEtBbE02Qzs7QUFBQSxVQW9NdENDLFNBcE1zQyxHQW9NMUIsVUFBQ0MsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBd0IsaUJBQU1DLENBQU47QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUV4Q0EsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsT0FBVixLQUNDLE1BQUtMLEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixFQUFyQixJQUNDLE1BQUtELEtBQUwsQ0FBV00scUJBQVgsS0FBcUNDLFNBRnZDLEtBR0EsTUFBS1AsS0FBTCxDQUFXUixVQUFYLENBQXNCZ0IsTUFBdEIsS0FBaUMsQ0FMTztBQUFBO0FBQUE7QUFBQTs7QUFPeENKLHFCQUFDLENBQUNLLGNBQUY7QUFDQUwscUJBQUMsQ0FBQ00sZUFBRjtBQUNNQywrQkFUa0MsR0FVdEMsTUFBS3RCLEtBQUwsQ0FBV3VCLFlBQVgsSUFDQSxNQUFLdkIsS0FBTCxDQUFXdUIsWUFBWCxDQUF3QkMsSUFBeEIsQ0FBNkIsVUFBQUMsRUFBRTtBQUFBLDZCQUFJQSxFQUFFLENBQUNDLElBQUgsS0FBWSxNQUFLZixLQUFMLENBQVdDLEtBQTNCO0FBQUEscUJBQS9CLENBWHNDOztBQUFBLDBCQVlwQyxNQUFLRCxLQUFMLENBQVdNLHFCQUFYLEtBQXFDQyxTQVpEO0FBQUE7QUFBQTtBQUFBOztBQWF0QywwQkFBS2xCLEtBQUwsQ0FBVzJCLGFBQVgsQ0FDRSxNQUFLM0IsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQkMsTUFBaEIsQ0FBdUJmLFdBQVcsQ0FBQyxNQUFLSCxLQUFMLENBQVdNLHFCQUFaLENBQWxDLENBREY7O0FBR0EsMEJBQUtiLFFBQUwsQ0FBYztBQUFFUSwyQkFBSyxFQUFFLEVBQVQ7QUFBYUssMkNBQXFCLEVBQUVDO0FBQXBDLHFCQUFkLEVBQStELFlBQU07QUFDbkUsNEJBQUtSLGlCQUFMOztBQUNBLDRCQUFLTCxZQUFMO0FBQ0QscUJBSEQ7O0FBaEJzQztBQUFBOztBQUFBO0FBQUEseUJBb0I3QmlCLFdBcEI2QjtBQUFBO0FBQUE7QUFBQTs7QUFxQnRDLDBCQUFLdEIsS0FBTCxDQUFXMkIsYUFBWCxDQUF5QixNQUFLM0IsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQkMsTUFBaEIsQ0FBdUJQLFdBQXZCLENBQXpCOztBQUNBLDBCQUFLbEIsUUFBTCxDQUFjO0FBQUVRLDJCQUFLLEVBQUU7QUFBVCxxQkFBZCxFQUE2QixZQUFNO0FBQ2pDLDRCQUFLRixpQkFBTDs7QUFDQSw0QkFBS0wsWUFBTDtBQUNELHFCQUhEOztBQXRCc0M7QUFBQTs7QUFBQTtBQUFBLHlCQTBCN0IsTUFBS0wsS0FBTCxDQUFXOEIsUUExQmtCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsMkJBMkJoQyxNQUFLQyxTQUFMLEVBM0JnQzs7QUFBQTtBQTRCdEMsMEJBQUsxQixZQUFMOztBQTVCc0M7QUErQjFDLHdCQUFJUyxXQUFXLENBQUNLLE1BQVosR0FBcUIsQ0FBckIsSUFBMEIsTUFBS1IsS0FBTCxDQUFXSCxrQkFBekMsRUFBNkQ7QUFDM0QsMEJBQUlPLENBQUMsQ0FBQ0MsR0FBRixLQUFVLFNBQWQsRUFBeUI7QUFDakJDLDZDQURpQixHQUVyQixNQUFLTixLQUFMLENBQVdNLHFCQUFYLEtBQXFDQyxTQUFyQyxHQUNJSixXQUFXLENBQUNLLE1BQVosR0FBcUIsQ0FEekIsR0FFSSxNQUFLUixLQUFMLENBQVdNLHFCQUFYLEtBQXFDLENBQXJDLEdBQ0FILFdBQVcsQ0FBQ0ssTUFBWixHQUFxQixDQURyQixHQUVBLE1BQUtSLEtBQUwsQ0FBV00scUJBQVgsR0FBbUMsQ0FObEI7O0FBT3ZCLDhCQUFLYixRQUFMLENBQWM7QUFBRWEsK0NBQXFCLEVBQXJCQTtBQUFGLHlCQUFkO0FBQ0QsdUJBUkQsTUFRTyxJQUFJRixDQUFDLENBQUNDLEdBQUYsS0FBVSxXQUFkLEVBQTJCO0FBQzFCQyw4Q0FEMEIsR0FFOUIsTUFBS04sS0FBTCxDQUFXTSxxQkFBWCxLQUFxQ0MsU0FBckMsR0FDSSxDQURKLEdBRUksTUFBS1AsS0FBTCxDQUFXTSxxQkFBWCxLQUFxQ0gsV0FBVyxDQUFDSyxNQUFaLEdBQXFCLENBQTFELEdBQ0EsQ0FEQSxHQUVBLE1BQUtSLEtBQUwsQ0FBV00scUJBQVgsR0FBbUMsQ0FOVDs7QUFPaEMsOEJBQUtiLFFBQUwsQ0FBYztBQUFFYSwrQ0FBcUIsRUFBckJBO0FBQUYseUJBQWQ7QUFDRCx1QkFSTSxNQVFBO0FBQ0wsOEJBQUtiLFFBQUwsQ0FBYztBQUFFYSwrQ0FBcUIsRUFBRUM7QUFBekIseUJBQWQ7QUFDRDtBQUNGOztBQW5EeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBcE0wQjs7QUFBQSxVQTBQdENhLFNBMVBzQztBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQTBQMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDRyxNQUFLL0IsS0FBTCxDQUFXZ0MsYUFBWCxDQUF5QixNQUFLckIsS0FBTCxDQUFXQyxLQUFwQyxDQURIOztBQUFBO0FBQ1pxQixvQkFEWTs7QUFFbEIsa0JBQUlBLE1BQUosRUFBWTtBQUNWLHNCQUFLakMsS0FBTCxDQUFXMkIsYUFBWCxDQUNFLE1BQUszQixLQUFMLENBQVc0QixJQUFYLEdBQWtCLE1BQUs1QixLQUFMLENBQVc0QixJQUFYLENBQWdCQyxNQUFoQixDQUF1QkksTUFBdkIsQ0FBbEIsR0FBbUQsQ0FBQ0EsTUFBRCxDQURyRDtBQUdEOztBQUNELG9CQUFLN0IsUUFBTCxDQUFjO0FBQUVRLHFCQUFLLEVBQUUsRUFBVDtBQUFhVCwwQkFBVSxFQUFFO0FBQXpCLGVBQWQsRUFBNkMsWUFBTTtBQUNqRCxzQkFBS08saUJBQUw7O0FBQ0Esc0JBQUtMLFlBQUw7QUFDRCxlQUhEOztBQVBrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTFQMEI7O0FBQUEsVUF1UXRDNkIsb0JBdlFzQyxHQXVRZixVQUFDQyxHQUFELEVBQWM7QUFDM0MsWUFBS25DLEtBQUwsQ0FBVzJCLGFBQVgsQ0FBeUIsTUFBSzNCLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JDLE1BQWhCLENBQXVCTSxHQUF2QixDQUF6Qjs7QUFDQSxZQUFLL0IsUUFBTCxDQUNFO0FBQUVRLGFBQUssRUFBRSxFQUFUO0FBQWFLLDZCQUFxQixFQUFFQyxTQUFwQztBQUErQ2Ysa0JBQVUsRUFBRTtBQUEzRCxPQURGLEVBRUUsWUFBTTtBQUNKLFlBQ0UsQ0FBQyxNQUFLSCxLQUFMLENBQVdvQyxPQUFaLElBQ0EsTUFBS3BDLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JULE1BQWhCLEdBQXlCLENBQXpCLEdBQTZCLE1BQUtuQixLQUFMLENBQVdvQyxPQUYxQyxFQUdFO0FBQ0EsZ0JBQUsxQixpQkFBTDtBQUNEOztBQUNELGNBQUtMLFlBQUw7QUFDRCxPQVZIO0FBWUQsS0FyUjZDOztBQUFBLFVBdVJ0Q2dDLE1BdlJzQztBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQXVSN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmLG9CQUFLakMsUUFBTCxDQUNFO0FBQ0VHLDZCQUFhLEVBQUUsS0FEakI7QUFFRVUscUNBQXFCLEVBQUVDO0FBRnpCLGVBREYsRUFLRTtBQUFBLHVCQUFNLE1BQUtiLFlBQUwsRUFBTjtBQUFBLGVBTEY7O0FBRGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F2UjZCOztBQUFBLFVBaVN0Q2lDLGNBalNzQyxHQWlTckI7QUFBQSxhQUN2QixNQUFLbEMsUUFBTCxDQUFjO0FBQ1pJLDBCQUFrQixFQUFFLEtBRFI7QUFFWlMsNkJBQXFCLEVBQUVDO0FBRlgsT0FBZCxDQUR1QjtBQUFBLEtBalNxQjs7QUFBQSxVQXVTdENxQixhQXZTc0MsR0F1U3RCLFVBQ3RCeEIsQ0FEc0IsRUFFdEJ5QixPQUZzQixFQUduQjtBQUNILFVBQU01QixLQUFLLEdBQUdHLENBQUMsQ0FBQzBCLE1BQUYsQ0FBUzdCLEtBQXZCOztBQUNBLFlBQUtSLFFBQUwsQ0FDRTtBQUFBLGVBQU87QUFDTFEsZUFBSyxFQUFMQSxLQURLO0FBRUw0QixpQkFBTyxFQUFFQSxPQUZKO0FBR0xFLHFCQUFXLEVBQUVGLE9BSFI7QUFJTGhDLDRCQUFrQixFQUFFO0FBSmYsU0FBUDtBQUFBLE9BREYsRUFPRTtBQUFBLGVBQU0sTUFBS0gsWUFBTCxFQUFOO0FBQUEsT0FQRjs7QUFTQSxZQUFLSyxpQkFBTCxDQUF1QkssQ0FBQyxDQUFDMEIsTUFBRixDQUFTN0IsS0FBaEM7QUFDRCxLQXRUNkM7O0FBQUEsVUF3VHRDUCxZQXhUc0MsR0F3VHZCLFlBQW1DO0FBQUEsVUFBbEN1QixJQUFrQyx1RUFBcEIsTUFBSzVCLEtBQUwsQ0FBVzRCLElBQVM7O0FBQ3hELFVBQUllLE1BQU0sR0FBRyxNQUFLQyxTQUFMLENBQWVoQixJQUFmLENBQWI7O0FBQ0EsVUFBSWUsTUFBTSxDQUFDeEIsTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQixjQUFLMEIsVUFBTCxDQUFnQkYsTUFBaEI7QUFDRCxPQUZELE1BRU87QUFDTCxjQUFLRyxRQUFMO0FBQ0Q7QUFDRixLQS9UNkM7O0FBQUEsVUFzYXRDQyxRQXRhc0MsR0FzYTNCLFVBQUNaLEdBQUQ7QUFBQSxhQUFjLFlBQU07QUFDckMsY0FBS25DLEtBQUwsQ0FBV2dELFVBQVgsSUFBeUIsTUFBS2hELEtBQUwsQ0FBV2dELFVBQVgsQ0FBc0JiLEdBQXRCLENBQXpCO0FBQ0QsT0FGa0I7QUFBQSxLQXRhMkI7O0FBQUEsVUEwYXRDYyxjQTFhc0MsR0EwYXJCLFVBQUNkLEdBQUQ7QUFBQSxhQUFjLFVBQUNwQixDQUFELEVBQXNDO0FBQzNFQSxTQUFDLENBQUNNLGVBQUY7O0FBQ0EsWUFBTTZCLE9BQU8sR0FBRyxNQUFLbEQsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQnVCLE1BQWhCLENBQXVCLFVBQUFDLEVBQUU7QUFBQSxpQkFBSUEsRUFBRSxDQUFDQyxFQUFILEtBQVVsQixHQUFHLENBQUNrQixFQUFsQjtBQUFBLFNBQXpCLENBQWhCOztBQUNBLFlBQUlILE9BQU8sQ0FBQy9CLE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEJtQyxvQkFBVSxDQUFDO0FBQUEsbUJBQU0sTUFBS0MsS0FBTCxFQUFOO0FBQUEsV0FBRCxFQUFxQixFQUFyQixDQUFWO0FBQ0Q7O0FBQ0QsY0FBS25ELFFBQUwsQ0FBYztBQUNaSSw0QkFBa0IsRUFBRTtBQURSLFNBQWQ7O0FBR0EsY0FBS1IsS0FBTCxDQUFXMkIsYUFBWCxJQUE0QixNQUFLM0IsS0FBTCxDQUFXMkIsYUFBWCxDQUF5QnVCLE9BQXpCLENBQTVCOztBQUNBLGNBQUs3QyxZQUFMLENBQWtCNkMsT0FBbEIsRUFWMkUsQ0FXM0U7O0FBQ0QsT0Fad0I7QUFBQSxLQTFhcUI7O0FBRTVDLFVBQUt2QyxLQUFMLHFCQUNLLE1BQUtBLEtBRFY7QUFFRVIsZ0JBQVUsRUFBRSxFQUZkO0FBR0VJLG1CQUFhLEVBQUUsS0FIakI7QUFJRUMsd0JBQWtCLEVBQUUsS0FKdEI7QUFLRWdELDBCQUFvQixFQUFFLEtBTHhCO0FBTUVkLGlCQUFXLEVBQUUsS0FOZjtBQU9FZSx5QkFBbUIsRUFBRTtBQVB2QjtBQVNBLFVBQUt4RCxPQUFMLEdBQWV5RCwrQ0FBQSxFQUFmO0FBQ0EsVUFBS0Msa0JBQUwsR0FBMEIsTUFBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLCtCQUExQjtBQVo0QztBQWE3Qzs7QUE1Q0g7QUFBQTtBQUFBLDRCQThDaUI7QUFDYixVQUFJLEtBQUszRCxPQUFMLENBQWE0RCxPQUFqQixFQUEwQjtBQUN4QixhQUFLNUQsT0FBTCxDQUFhNEQsT0FBYixDQUFxQk4sS0FBckI7QUFDRDtBQUNGO0FBbERIO0FBQUE7QUFBQSx1Q0FvRDRCTyxRQXBENUIsRUFvRGlFO0FBQzdELFVBQ0VBLFFBQVEsQ0FBQ2xDLElBQVQsS0FBa0IsS0FBSzVCLEtBQUwsQ0FBVzRCLElBQTdCLElBQ0FrQyxRQUFRLENBQUNDLFVBQVQsS0FBd0IsS0FBSy9ELEtBQUwsQ0FBVytELFVBRG5DLElBRUFELFFBQVEsQ0FBQ0UsZ0JBQVQsS0FBOEIsS0FBS2hFLEtBQUwsQ0FBV2dFLGdCQUZ6QyxJQUdBRixRQUFRLENBQUNHLFFBQVQsS0FBc0IsS0FBS2pFLEtBQUwsQ0FBV2lFLFFBSm5DLEVBS0U7QUFDQSxhQUFLNUQsWUFBTCxDQUFrQixLQUFLTCxLQUFMLENBQVc0QixJQUE3QjtBQUNEO0FBQ0Y7QUE3REg7QUFBQTtBQUFBLHVDQStENEJiLENBL0Q1QixFQStEMkM7QUFBQTs7QUFDdkMsVUFDRSxDQUFDLEtBQUttRCxZQUFMLENBQWtCTCxPQUFuQixJQUNBLEtBQUtLLFlBQUwsQ0FBa0JMLE9BQWxCLENBQTBCTSxRQUExQixDQUFtQ3BELENBQUMsQ0FBQzBCLE1BQXJDLENBRkYsRUFHRTtBQUNBO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFLekMsS0FBTCxDQUFXb0UsWUFBWCxJQUEyQixLQUFLekQsS0FBTCxDQUFXQyxLQUExQyxFQUFpRDtBQUMvQyxZQUFNRSxXQUFXLEdBQUcsS0FBS3VELGNBQUwsRUFBcEI7QUFDQSxZQUFNQyxRQUFRLEdBQUd4RCxXQUFXLENBQUNVLElBQVosQ0FBaUIsVUFBQStDLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxDQUFDN0MsSUFBRixLQUFXLE1BQUksQ0FBQ2YsS0FBTCxDQUFXQyxLQUExQjtBQUFBLFNBQWxCLENBQWpCOztBQUNBLFlBQUkwRCxRQUFKLEVBQWM7QUFDWixlQUFLcEMsb0JBQUwsQ0FBMEJvQyxRQUExQjtBQUNELFNBRkQsTUFFTyxJQUFJLEtBQUt0RSxLQUFMLENBQVc4QixRQUFmLEVBQXlCO0FBQzlCLGVBQUtDLFNBQUw7QUFDRDtBQUNGO0FBQ0Y7QUEvRUg7QUFBQTtBQUFBLHdDQWlGNkI7QUFDekJ5QyxjQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLEtBQUtkLGtCQUE1QztBQUNBYSxjQUFRLENBQUNDLGdCQUFULENBQTBCLFlBQTFCLEVBQXdDLEtBQUtkLGtCQUE3QztBQUNEO0FBcEZIO0FBQUE7QUFBQSwyQ0FzRmdDO0FBQzVCYSxjQUFRLENBQUNFLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDLEtBQUtmLGtCQUEvQztBQUNBYSxjQUFRLENBQUNFLG1CQUFULENBQTZCLFlBQTdCLEVBQTJDLEtBQUtmLGtCQUFoRDtBQUNEO0FBekZIO0FBQUE7QUFBQSw2QkEyRmtCO0FBQUE7O0FBQ2QsVUFBTWdCLFlBQVksR0FBRyxLQUFLQyxlQUFMLENBQXFCaEYsdUJBQXJCLENBQXJCO0FBQ0EsVUFBTWlGLFNBQVMsR0FBRyxLQUFLN0UsS0FBTCxDQUFXNkUsU0FBWCxHQUF1QixLQUFLN0UsS0FBTCxDQUFXNkUsU0FBbEMsR0FBOEMsRUFBaEU7QUFDQSxVQUFNL0QsV0FBVyxHQUFHLEtBQUt1RCxjQUFMLEVBQXBCO0FBQ0EsYUFDRSxvREFBQyxpRUFBRDtBQUFZLGFBQUssRUFBRSxLQUFLckUsS0FBTCxDQUFXOEUsS0FBOUI7QUFBcUMsZUFBTyxFQUFFLEtBQUs5RSxLQUFMLENBQVcrRTtBQUF6RCxTQUNFLHdFQUNPLEtBQUsvRSxLQUFMLENBQVdxRCxFQUFYLElBQWlCO0FBQ3BCQSxVQUFFLEVBQUUsS0FBS3JELEtBQUwsQ0FBV3FEO0FBREssT0FEeEI7QUFJRSxpQkFBUyxFQUFFMkIsaURBQVUsQ0FDbkIsd0JBRG1CLEVBRW5CLEtBQUtDLGtCQUFMLEVBRm1CLEVBR25CLEtBQUtqRixLQUFMLENBQVdrRixTQUhRLEVBSW5CO0FBQ0Usa0NBQXdCLEtBQUtsRixLQUFMLENBQVdtRixRQURyQztBQUVFLHdDQUNFLEtBQUtuRixLQUFMLENBQVc2RSxTQUFYLElBQXdCLEtBQUs3RSxLQUFMLENBQVc2RSxTQUFYLENBQXFCTztBQUhqRCxTQUptQixDQUp2QjtBQWNFLFdBQUcsRUFBRSxLQUFLbEI7QUFkWixVQWdCRyxLQUFLbUIsVUFBTCxFQWhCSCxFQWlCRyxDQUFDLENBQUMsS0FBS3JGLEtBQUwsQ0FBV29DLE9BQVosSUFDQSxLQUFLcEMsS0FBTCxDQUFXb0MsT0FBWCxJQUFzQixLQUFLcEMsS0FBTCxDQUFXNEIsSUFBWCxJQUFtQixLQUFLNUIsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQlQsTUFBekQsQ0FERCxLQUVDLENBQUMsS0FBS25CLEtBQUwsQ0FBV21GLFFBRmIsSUFHRztBQUNFLGlCQUFTLEVBQ1AsZ0NBQ0MsS0FBS25GLEtBQUwsQ0FBV21GLFFBQVgsR0FBc0IsU0FBdEIsR0FBa0MsRUFEbkM7QUFGSixTQU1FLG9EQUFDLCtDQUFELGVBQ01OLFNBRE4sRUFFTyxLQUFLN0UsS0FBTCxDQUFXcUQsRUFBWCxJQUFpQjtBQUNwQkEsVUFBRSxFQUFFLEtBQUtyRCxLQUFMLENBQVdxRCxFQUFYLEdBQWdCO0FBREEsT0FGeEI7QUFLRSxXQUFHLEVBQUUsS0FBS3BELE9BTFo7QUFNRSxnQkFBUSxFQUNOLEtBQUtELEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JULE1BQWhCLEdBQXlCLENBQXpCLEdBQTZCLEtBQTdCLEdBQXFDLEtBQUtuQixLQUFMLENBQVdpRSxRQVBwRDtBQVNFLGlCQUFTLEVBQ1AsNkJBQ0NZLFNBQVMsQ0FBQ0ssU0FBVixHQUFzQkwsU0FBUyxDQUFDSyxTQUFoQyxHQUE0QyxFQUQ3QyxDQVZKO0FBYUUsaUJBQVMsRUFBRSxLQUFLckUsU0FBTCxDQUFlQyxXQUFmLENBYmI7QUFjRSx1QkFBZSxFQUFFLEtBQUtaLG1CQWR4QjtBQWVFLGdCQUFRLEVBQUUsS0FBS3FDLGFBZmpCO0FBZ0JFLGVBQU8sRUFBRSxLQUFLakMsT0FoQmhCO0FBaUJFLGNBQU0sRUFBRSxLQUFLK0IsTUFqQmY7QUFrQkUsYUFBSyxFQUFFLEtBQUsxQixLQUFMLENBQVdDLEtBbEJwQjtBQW1CRSxnQkFBUSxFQUFFLEtBQUtaLEtBQUwsQ0FBV21GLFFBbkJ2QjtBQW9CRSxzQkFBYyxFQUFFLEtBcEJsQjtBQXFCRSxxQkFBYSxFQUFFLElBckJqQjtBQXNCRSxrQkFBVSxFQUFFLEtBQUtuRixLQUFMLENBQVcrRCxVQXRCekI7QUF1QkUsd0JBQWdCLEVBQUUsS0FBSy9ELEtBQUwsQ0FBV2dFO0FBdkIvQixTQU5GLEVBK0JHLEtBQUtyRCxLQUFMLENBQVdILGtCQUFYLElBQWlDLEtBQUtSLEtBQUwsQ0FBV3NGLGVBQTVDLElBQ0Msb0RBQUMsc0VBQUQsZUFDTyxLQUFLdEYsS0FBTCxDQUFXcUQsRUFBWCxJQUFpQjtBQUNwQkEsVUFBRSxFQUFFLEtBQUtyRCxLQUFMLENBQVdxRCxFQUFYLEdBQWdCO0FBREEsT0FEeEI7QUFJRSxnQkFBUSxFQUFFLEtBQUthLFlBQUwsQ0FBa0JMLE9BSjlCO0FBS0UsZ0JBQVEsRUFBRSxLQUFLN0QsS0FBTCxDQUFXOEIsUUFMdkI7QUFNRSw2QkFBcUIsRUFBRSxLQUFLbkIsS0FBTCxDQUFXTSxxQkFOcEM7QUFPRSxlQUFPLEVBQUUsS0FBS04sS0FBTCxDQUFXNkMsb0JBUHRCO0FBUUUsd0JBQWdCLEVBQUUsS0FBS3hELEtBQUwsQ0FBV3VGLDJCQVIvQjtBQVNFLGlCQUFTLEVBQUUsS0FBSzVFLEtBQUwsQ0FBV0gsa0JBVHhCO0FBVUUsc0JBQWMsRUFBRSxLQUFLUixLQUFMLENBQVd3Rix5QkFWN0I7QUFXRSxZQUFJLEVBQUUxRSxXQVhSO0FBWUUsa0JBQVUsRUFBRSxLQUFLb0Isb0JBWm5CO0FBYUUsc0JBQWMsRUFBRSxLQUFLSSxjQWJ2QjtBQWNFLGFBQUssRUFBRSxLQUFLM0IsS0FBTCxDQUFXQyxLQWRwQjtBQWVFLDBCQUFrQixFQUNoQixLQUFLWixLQUFMLENBQVc4QixRQUFYLElBQ0EsS0FBS25CLEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixFQURyQixLQUVDLENBQUMsS0FBS1osS0FBTCxDQUFXdUIsWUFBWixJQUNDLENBQUMsS0FBS3ZCLEtBQUwsQ0FBV3VCLFlBQVgsQ0FBd0JDLElBQXhCLENBQ0MsVUFBQVQsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNXLElBQUYsS0FBVyxNQUFJLENBQUNmLEtBQUwsQ0FBV0MsS0FBMUI7QUFBQSxTQURGLENBSEgsTUFNQyxDQUFDLEtBQUtELEtBQUwsQ0FBVzhDLG1CQUFaLElBQ0MsQ0FBQyxLQUFLOUMsS0FBTCxDQUFXOEMsbUJBQVgsQ0FBK0JqQyxJQUEvQixDQUNDLFVBQUFULENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxDQUFDVyxJQUFGLEtBQVcsTUFBSSxDQUFDZixLQUFMLENBQVdDLEtBQTFCO0FBQUEsU0FERixDQVBILEtBVUEsS0FBS0QsS0FBTCxDQUFXK0IsV0FWWCxJQVdFLG9EQUFDLHFEQUFELGVBQ08sS0FBSzFDLEtBQUwsQ0FBV3FELEVBQVgsSUFBaUI7QUFDcEJBLFlBQUUsRUFBRSxLQUFLckQsS0FBTCxDQUFXcUQsRUFBWCxHQUFnQjtBQURBLFNBRHhCO0FBSUUsbUJBQVMsRUFBQyw0Q0FKWjtBQUtFLGtCQUFRLEVBQUUsSUFMWjtBQU1FLGlCQUFPLEVBQUUsS0FBS3RCO0FBTmhCLFlBUUc0QyxZQUFZLENBQUM3RSxNQVJoQixTQVEwQixLQUFLYSxLQUFMLENBQVdDLEtBUnJDLE9BM0JOO0FBdUNFLG1CQUFXLEVBQUUsS0FBS1osS0FBTCxDQUFXeUY7QUF2QzFCLFNBaENKLENBcEJOLEVBZ0dHLEtBQUtDLHVCQUFMLEVBaEdILEVBaUdHLEtBQUsxRixLQUFMLENBQVcyRixLQUFYLElBQ0M7QUFDRSxpQkFBUyxFQUNQLEtBQUtoRixLQUFMLENBQVdDLEtBQVgsS0FBcUIsRUFBckIsSUFDQSxLQUFLRCxLQUFMLENBQVdKLGFBRFgsSUFFQSxLQUFLUCxLQUFMLENBQVdtRixRQUZYLElBR0EsS0FBS25GLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JULE1BQWhCLElBQTBCLEtBQUtuQixLQUFMLENBQVdvQyxPQUhyQyxHQUlJLGdCQUpKLEdBS0k7QUFQUixTQVVHLEtBQUt3RCxXQUFMLEVBVkgsQ0FsR0osQ0FERixDQURGO0FBb0hEO0FBbk5IO0FBQUE7QUFBQSw4QkFnV29CaEUsSUFoV3BCLEVBZ1dpQztBQUM3QixVQUFJZSxNQUFNLEdBQUcsRUFBYjs7QUFDQSxVQUFJZixJQUFJLENBQUNULE1BQUwsR0FBYyxLQUFLbkIsS0FBTCxDQUFXb0MsT0FBN0IsRUFBc0M7QUFDcENPLGNBQU0sR0FBR0EsTUFBTSxDQUFDZCxNQUFQLENBQWMsS0FBS2xCLEtBQUwsQ0FBV1IsVUFBekIsQ0FBVDtBQUNEOztBQUNELFVBQUksS0FBS1EsS0FBTCxDQUFXQyxLQUFYLEtBQXFCLEVBQXJCLElBQTJCZ0IsSUFBSSxDQUFDVCxNQUFMLEtBQWdCLENBQTNDLElBQWdELEtBQUtuQixLQUFMLENBQVdpRSxRQUEvRCxFQUF5RTtBQUN2RXRCLGNBQU0sR0FBR0EsTUFBTSxDQUFDZCxNQUFQLENBQ1AsS0FBSytDLGVBQUwsQ0FBcUIsS0FBSzVFLEtBQUwsQ0FBVzJFLFlBQWhDLEVBQThDVixRQUR2QyxDQUFUO0FBR0Q7O0FBQ0QsVUFBSSxLQUFLdEQsS0FBTCxDQUFXQyxLQUFYLElBQW9CLEtBQUtaLEtBQUwsQ0FBVzhCLFFBQS9CLElBQTJDLENBQUMsS0FBS25CLEtBQUwsQ0FBV0osYUFBM0QsRUFBMEU7QUFDeEVvQyxjQUFNLEdBQUdBLE1BQU0sQ0FBQ2QsTUFBUCxDQUFjLEtBQUs3QixLQUFMLENBQVc2RixrQkFBekIsQ0FBVDtBQUNEOztBQUNELFVBQUksS0FBSzdGLEtBQUwsQ0FBV29DLE9BQVgsSUFBc0IsS0FBS3BDLEtBQUwsQ0FBVzRCLElBQVgsSUFBbUIsS0FBSzVCLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JULE1BQXpELENBQUosRUFBc0U7QUFDcEV3QixjQUFNLEdBQUdBLE1BQU0sQ0FBQ2QsTUFBUCxDQUFjLEtBQUs3QixLQUFMLENBQVc4RixxQkFBekIsQ0FBVDtBQUNEOztBQUNELGFBQU9uRCxNQUFNLENBQUNRLE1BQVAsQ0FBYyxVQUFBNEMsQ0FBQztBQUFBLGVBQUlBLENBQUo7QUFBQSxPQUFmLENBQVA7QUFDRDtBQWpYSDtBQUFBO0FBQUEsd0NBbVhxRDtBQUFBOztBQUFBLFVBQXpCQyxVQUF5Qix1RUFBSixFQUFJOztBQUNqRCxVQUFJLEtBQUtoRyxLQUFMLENBQVdVLGlCQUFmLEVBQWtDO0FBQ2hDLFlBQU11RixLQUFLLEdBQUczQyxVQUFVLENBQ3RCO0FBQUEsaUJBQU0sTUFBSSxDQUFDbEQsUUFBTCxDQUFjO0FBQUVvRCxnQ0FBb0IsRUFBRTtBQUF4QixXQUFkLENBQU47QUFBQSxTQURzQixFQUV0QixLQUFLeEQsS0FBTCxDQUFXa0csY0FGVyxDQUF4QjtBQUlBLGFBQUtsRyxLQUFMLENBQVdVLGlCQUFYLENBQTZCc0YsVUFBN0IsRUFBeUNHLElBQXpDLENBQThDLFVBQUExQyxtQkFBbUIsRUFBSTtBQUNuRTJDLHNCQUFZLENBQUNILEtBQUQsQ0FBWjs7QUFDQSxnQkFBSSxDQUFDN0YsUUFBTCxDQUFjO0FBQ1pxRCwrQkFBbUIsRUFBbkJBLG1CQURZO0FBRVpELGdDQUFvQixFQUFFO0FBRlYsV0FBZDtBQUlELFNBTkQ7QUFPRDtBQUNGO0FBallIO0FBQUE7QUFBQSxxQ0FtWTJCO0FBQUE7O0FBQ3ZCLFVBQU1qQyxZQUFtQixHQUFHLEdBQ3pCTSxNQUR5QixDQUNsQixLQUFLN0IsS0FBTCxDQUFXdUIsWUFBWCxHQUEwQixLQUFLdkIsS0FBTCxDQUFXdUIsWUFBckMsR0FBb0QsRUFEbEMsRUFFekJNLE1BRnlCLENBR3hCLEtBQUtsQixLQUFMLENBQVc4QyxtQkFBWCxHQUFpQyxLQUFLOUMsS0FBTCxDQUFXOEMsbUJBQTVDLEdBQWtFLEVBSDFDLENBQTVCO0FBS0EsVUFBTTRDLFlBQVksR0FBRyxLQUFLckcsS0FBTCxDQUFXc0csa0JBQVgsQ0FDbkIsS0FBSzNGLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixLQUFLRCxLQUFMLENBQVdDLEtBQVgsQ0FBaUIyRixXQUFqQixFQUFuQixHQUFvRCxFQURqQyxFQUVuQmhGLFlBRm1CLENBQXJCO0FBSUEsVUFBSVQsV0FBVyxHQUFHdUYsWUFBWSxDQUMzQmxELE1BRGUsQ0FFZCxVQUFBaEIsR0FBRztBQUFBLGVBQ0QsTUFBSSxDQUFDbkMsS0FBTCxDQUFXd0cseUJBQVgsSUFDQSxDQUFDLE1BQUksQ0FBQ3hHLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0I2RSxJQUFoQixDQUFxQixVQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ3JELEVBQUYsS0FBU2xCLEdBQUcsQ0FBQ2tCLEVBQWpCO0FBQUEsU0FBdEIsQ0FGQTtBQUFBLE9BRlcsRUFNZnNELEtBTmUsQ0FNVCxDQU5TLEVBTU4sS0FBSzNHLEtBQUwsQ0FBVzRHLGNBTkwsQ0FBbEI7QUFPQSxhQUFPOUYsV0FBUDtBQUNEO0FBclpIO0FBQUE7QUFBQSw4QkF1Wm9CcUIsR0F2WnBCLEVBdVo4QjBFLEtBdlo5QixFQXVaNkM7QUFDekMsVUFBTUMsSUFBSSxHQUNSLDBHQUNHM0UsR0FBRyxDQUFDVCxJQURQLEVBRUcsQ0FBQyxLQUFLMUIsS0FBTCxDQUFXbUYsUUFBWixJQUNDLG9EQUFDLHFEQUFELGVBQ08sS0FBS25GLEtBQUwsQ0FBV3FELEVBQVgsSUFBaUI7QUFDcEJBLFVBQUUsRUFBRSxLQUFLckQsS0FBTCxDQUFXcUQsRUFBWCxHQUFnQixPQUFoQixHQUEwQndELEtBQUssQ0FBQ0UsUUFBTjtBQURWLE9BRHhCO0FBSUUsZ0JBQVEsRUFBRSxJQUpaO0FBS0UsYUFBSyxFQUFFLElBTFQ7QUFNRSxlQUFPLEVBQUUsS0FBSzlELGNBQUwsQ0FBb0JkLEdBQXBCLENBTlg7QUFPRSxpQkFBUyxFQUFDLDhDQVBaO0FBUUUsaUJBQVMsRUFBRSxtQkFBQTZFLENBQUM7QUFBQSxpQkFDVjtBQUFHLHFCQUFTLEVBQUVBLENBQUMsQ0FBQzlCLFNBQWhCO0FBQTJCLGNBQUUsRUFBRThCLENBQUMsQ0FBQzNELEVBQWpDO0FBQXFDLG1CQUFPLEVBQUUyRCxDQUFDLENBQUNDO0FBQWhELGFBQ0dELENBQUMsQ0FBQ0UsUUFETCxDQURVO0FBQUE7QUFSZCxVQWNFLG9EQUFDLHdHQUFELE9BZEYsQ0FISixDQURGO0FBdUJBLFVBQU1oQyxTQUFTLEdBQUdGLGlEQUFVLENBQUMsaUJBQUQsRUFBb0I7QUFDOUMsZ0NBQXdCLEtBQUtoRixLQUFMLENBQVdtSDtBQURXLE9BQXBCLENBQTVCOztBQUdBLFVBQUksS0FBS25ILEtBQUwsQ0FBV2dELFVBQWYsRUFBMkI7QUFDekIsZUFDRSxvREFBQyxxREFBRDtBQUNFLGlCQUFPLEVBQUUsS0FBS0QsUUFBTCxDQUFjWixHQUFkLENBRFg7QUFFRSxlQUFLLEVBQUUsSUFGVDtBQUdFLG1CQUFTLEVBQUUrQyxTQUhiO0FBSUUsYUFBRyxFQUFFMkI7QUFKUCxXQU1HQyxJQU5ILENBREY7QUFVRDs7QUFDRCxhQUNFO0FBQUssZUFBTyxFQUFFLEtBQUsvRCxRQUFMLENBQWNaLEdBQWQsQ0FBZDtBQUFrQyxpQkFBUyxFQUFFK0MsU0FBN0M7QUFBd0QsV0FBRyxFQUFFMkI7QUFBN0QsU0FDR0MsSUFESCxDQURGO0FBS0Q7QUFuY0g7QUFBQTtBQUFBLGlDQXVkdUI7QUFBQTs7QUFDbkIsYUFBTyxLQUFLOUcsS0FBTCxDQUFXNEIsSUFBWCxJQUFtQixLQUFLNUIsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQlQsTUFBaEIsR0FBeUIsQ0FBNUMsR0FDTDtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHLEtBQUtuQixLQUFMLENBQVc0QixJQUFYLENBQWdCd0YsR0FBaEIsQ0FBb0IsVUFBQ0MsSUFBRCxFQUFPUixLQUFQO0FBQUEsZUFBaUIsTUFBSSxDQUFDUyxTQUFMLENBQWVELElBQWYsRUFBcUJSLEtBQXJCLENBQWpCO0FBQUEsT0FBcEIsQ0FESCxDQURLLEdBS0wsS0FBSzdHLEtBQUwsQ0FBV21GLFFBQVgsSUFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0csS0FBS25GLEtBQUwsQ0FBV3VILHdCQURkLENBREYsQ0FOSjtBQWFEO0FBcmVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxFQUE2QkMsK0RBQTdCO0FBQWF6SCxPLENBTUcwSCxZLHFCQUNURCwrREFBUyxDQUFDQyxZO0FBQ2JDLFVBQVEsRUFBRSxLO0FBQ1Z4QyxXQUFTLEVBQUUsRTtBQUNYdEQsTUFBSSxFQUFFLEU7QUFDTkwsY0FBWSxFQUFFLEU7QUFDZGEsU0FBTyxFQUFFLEk7QUFDVFQsZUFBYSxFQUFFO0FBQUEsV0FBTVQsU0FBTjtBQUFBLEc7QUFDZmMsZUFBYSxFQUFFLHVCQUFBMkYsVUFBVTtBQUFBLFdBQ3ZCQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0I7QUFBRW5HLFVBQUksRUFBRWlHLFVBQVI7QUFBb0J0RSxRQUFFLEVBQUUsSUFBSXlFLElBQUosR0FBV0MsT0FBWDtBQUF4QixLQUFoQixDQUR1QjtBQUFBLEc7QUFFekJsQyxvQkFBa0IsRUFBRSwwRjtBQUNwQkMsdUJBQXFCLEVBQUUscUc7QUFDdkJSLGlCQUFlLEVBQUUsSTtBQUNqQkMsNkJBQTJCLEVBQUUsWTtBQUM3QkMsMkJBQXlCLEVBQUUscUI7QUFDM0JVLGdCQUFjLEVBQUUsRztBQUNoQkksb0JBQWtCLEVBQUUsNEJBQUMwQixJQUFELEVBQU9wRyxJQUFQO0FBQUEsV0FDbEJBLElBQUksQ0FBQ3VCLE1BQUwsQ0FBWSxVQUFBaEIsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ1QsSUFBSixJQUFZUyxHQUFHLENBQUNULElBQUosQ0FBUzZFLFdBQVQsR0FBdUJQLFVBQXZCLENBQWtDZ0MsSUFBbEMsQ0FBaEI7QUFBQSxLQUFmLENBRGtCO0FBQUEsRztBQUVwQnBCLGdCQUFjLEVBQUUsQztBQUNoQnhDLGNBQVksRUFBRSxJO0FBQ2RPLGNBQVksRUFBRS9FOztBQThjWCxJQUFNcUksSUFBSSxHQUFHQyx3RkFBZ0IsQ0FDbENDLDZFQUFlLENBQVlwSSxPQUFaLENBRG1CLEVBRWxDLE1BRmtDLENBQTdCO2VBS1FrSSxJO0FBQUE7Ozs7Ozs7Ozs7MEJBNWhCRnJJLHVCOzBCQStDQUcsTzswQkF3ZUFrSSxJIiwiZmlsZSI6ImYzNjFlNjEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlic1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElucHV0R3JvdXAgfSBmcm9tICcuLi9pbnB1dEdyb3VwL0lucHV0R3JvdXAnO1xyXG5pbXBvcnQgeyBUZXh0LCBUZXh0UHJvcHMsIFRleHRSYXcgfSBmcm9tICcuLi90ZXh0L1RleHQnO1xyXG5pbXBvcnQgKiBhcyBQbHVzSWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvY29udGVudC9zdmcvcHJvZHVjdGlvbi9pY19hZGRfY2lyY2xlX291dGxpbmVfMjRweC5zdmcnO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VJbnB1dFByb3BzLFxyXG4gIEJhc2VJbnB1dFN0YXRlLFxyXG4gIEJhc2VJbnB1dCxcclxuICBWYWxpZGF0aW9uRXJyb3IsXHJcbiAgZGVmYXVsdEJhc2VUcmFuc2xhdGlvbnMsXHJcbn0gZnJvbSAnLi4vYmFzZS9pbnB1dC9CYXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9idXR0b24vQnV0dG9uJztcclxuaW1wb3J0IFRhZ3NTdWdnZXN0aW9ucyBmcm9tICcuL3N1YkNvbXBvbmVudHMvVGFnc1N1Z2dlc3Rpb25zJztcclxuaW1wb3J0IHsgd2l0aEZvcm1Db250ZXh0IH0gZnJvbSAnLi4vZm9ybS93aXRoRm9ybUNvbnRleHQnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgd2l0aFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL3RoZW1lUHJvdmlkZXIvd2l0aFRoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IFBvcHBlclByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyL1BvcHBlcic7XHJcblxyXG4vLyBNaXNjXHJcbmV4cG9ydCB0eXBlIFRhZyA9IHtcclxuICBpZDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyA9IHtcclxuICAuLi5kZWZhdWx0QmFzZVRyYW5zbGF0aW9ucyxcclxuICBhZGROZXc6ICdBZGQgbmV3JyxcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFRhZ3NUcmFuc2xhdGlvbnMgPSBQYXJ0aWFsPHR5cGVvZiBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucz47XHJcblxyXG5leHBvcnQgdHlwZSBUYWdzUHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICB0YWdzOiBUYWdbXTtcclxuICBleGlzdGluZ1RhZ3M/OiBUYWdbXTtcclxuICBmZXRjaEV4aXN0aW5nVGFncz86ICh0ZXh0OiBzdHJpbmcpID0+IFByb21pc2U8VGFnW10+O1xyXG4gIG9uVGFnc0NoYW5nZWQ6IChuZXdUYWdzOiBUYWdbXSkgPT4gdm9pZDtcclxuICBvbk5ld1RhZ0FkZGVkPzogKG5ld1RhZ05hbWU6IHN0cmluZykgPT4gUHJvbWlzZTxUYWc+O1xyXG4gIG9uVGFnQ2xpY2s/OiAodGFnOiBUYWcpID0+IHZvaWQ7XHJcbiAgc2hvd0NoaXBzPzogYm9vbGVhbjtcclxuICBhbGxvd05ldz86IGJvb2xlYW47XHJcbiAgYWRkTmV3T25CbHVyPzogYm9vbGVhbjtcclxuICB0ZXh0UHJvcHM/OiBUZXh0UHJvcHM7XHJcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xyXG4gIHJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcj86IHN0cmluZztcclxuICBtYXhUYWdzPzogbnVtYmVyO1xyXG4gIHZhbHVlTm90QWRkZWRFcnJvcj86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIG1heFRhZ3NTdXJwYXNzZWRFcnJvcj86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHNob3dTdWdnZXN0aW9ucz86IGJvb2xlYW47XHJcbiAgc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIGxvYWRpbmdEZWxheU1zPzogbnVtYmVyO1xyXG4gIGZpbHRlckV4aXN0aW5nVGFncz86ICh0ZXh0OiBzdHJpbmcsIGV4aXN0aW5nVGFnczogVGFnW10pID0+IFRhZ1tdO1xyXG4gIGFsbG93U2FtZVRhZ011bHRpcGxlVGltZXM/OiBib29sZWFuO1xyXG4gIG1heFN1Z2dlc3Rpb25zPzogbnVtYmVyO1xyXG4gIHBvcHBlclByb3BzPzogUG9wcGVyUHJvcHM7XHJcbn0gJiBCYXNlSW5wdXRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCBUYWdzVHJhbnNsYXRpb25zPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFnc1N0YXRlIGV4dGVuZHMgQmFzZUlucHV0U3RhdGUge1xyXG4gIHRleHRJc0ZvY3VzZWQ6IGJvb2xlYW47XHJcbiAgdGV4dEVycm9yczogVmFsaWRhdGlvbkVycm9yW107XHJcbiAgdGV4dElzVmFsaWQ6IGJvb2xlYW47XHJcbiAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBib29sZWFuO1xyXG4gIGZldGNoZWRFeGlzdGluZ1RhZ3M6IFRhZ1tdO1xyXG4gIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBib29sZWFuO1xyXG4gIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj86IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBJbmplY3RlZFByb3BzID0ge307XHJcblxyXG5leHBvcnQgY2xhc3MgVGFnc1JhdyBleHRlbmRzIEJhc2VJbnB1dDxcclxuICBUYWdzUHJvcHMgJiBJbmplY3RlZFByb3BzLFxyXG4gIFRhZ3NTdGF0ZSxcclxuICBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIFRhZ3NUcmFuc2xhdGlvbnNcclxuPiB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFRhZ3NQcm9wcyA9IHtcclxuICAgIC4uLkJhc2VJbnB1dC5kZWZhdWx0UHJvcHMsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBjbGFzc05hbWU6ICcnLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBleGlzdGluZ1RhZ3M6IFtdLFxyXG4gICAgbWF4VGFnczogMTAwMCxcclxuICAgIG9uVGFnc0NoYW5nZWQ6ICgpID0+IHVuZGVmaW5lZCxcclxuICAgIG9uTmV3VGFnQWRkZWQ6IG5ld1RhZ05hbWUgPT5cclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKHsgbmFtZTogbmV3VGFnTmFtZSwgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH0pLFxyXG4gICAgdmFsdWVOb3RBZGRlZEVycm9yOiA8c3Bhbj5Zb3UgZm9yZ290IHRvIGFkZCB0YWc8L3NwYW4+LFxyXG4gICAgbWF4VGFnc1N1cnBhc3NlZEVycm9yOiA8c3Bhbj5NYXhpbXVtIG51bWJlciBvZiB0YWdzIHN1cnBhc3NlZDwvc3Bhbj4sXHJcbiAgICBzaG93U3VnZ2VzdGlvbnM6IHRydWUsXHJcbiAgICBzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQ6ICdMb2FkaW5nLi4uJyxcclxuICAgIHN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQ6ICdObyBleGlzdGluZyB0YWdzLi4uJyxcclxuICAgIGxvYWRpbmdEZWxheU1zOiA1MDAsXHJcbiAgICBmaWx0ZXJFeGlzdGluZ1RhZ3M6ICh0ZXh0LCB0YWdzKSA9PlxyXG4gICAgICB0YWdzLmZpbHRlcih0YWcgPT4gdGFnLm5hbWUgJiYgdGFnLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRleHQpKSxcclxuICAgIG1heFN1Z2dlc3Rpb25zOiA1LFxyXG4gICAgYWRkTmV3T25CbHVyOiB0cnVlLFxyXG4gICAgdHJhbnNsYXRpb25zOiBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyxcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHRleHRSZWY6IFJlYWN0LlJlZk9iamVjdDxUZXh0UmF3PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFRhZ3NQcm9wcyAmIEluamVjdGVkUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgIHRleHRFcnJvcnM6IFtdLFxyXG4gICAgICB0ZXh0SXNGb2N1c2VkOiBmYWxzZSxcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgZmV0Y2hpbmdFeGlzdGluZ1RhZ3M6IGZhbHNlLFxyXG4gICAgICB0ZXh0SXNWYWxpZDogZmFsc2UsXHJcbiAgICAgIGZldGNoZWRFeGlzdGluZ1RhZ3M6IFtdLFxyXG4gICAgfTtcclxuICAgIHRoaXMudGV4dFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gICAgdGhpcy5oYW5kbGVDbGlja091dHNpZGUgPSB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvY3VzKCkge1xyXG4gICAgaWYgKHRoaXMudGV4dFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHRoaXMudGV4dFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKG9sZFByb3BzOiBUYWdzUHJvcHMgJiBJbmplY3RlZFByb3BzKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG9sZFByb3BzLnRhZ3MgIT09IHRoaXMucHJvcHMudGFncyB8fFxyXG4gICAgICBvbGRQcm9wcy52YWxpZGF0b3JzICE9PSB0aGlzLnByb3BzLnZhbGlkYXRvcnMgfHxcclxuICAgICAgb2xkUHJvcHMuY3VzdG9tVmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy5jdXN0b21WYWxpZGF0b3JzIHx8XHJcbiAgICAgIG9sZFByb3BzLnJlcXVpcmVkICE9PSB0aGlzLnByb3BzLnJlcXVpcmVkXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5oYW5kbGVFcnJvcnModGhpcy5wcm9wcy50YWdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVDbGlja091dHNpZGUoZTogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5jb250YWluZXJSZWYuY3VycmVudCB8fFxyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLmFkZE5ld09uQmx1ciAmJiB0aGlzLnN0YXRlLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5nZXRTdWdnZXN0aW9ucygpO1xyXG4gICAgICBjb25zdCBleGlzdGluZyA9IHN1Z2dlc3Rpb25zLmZpbmQocyA9PiBzLm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgICBpZiAoZXhpc3RpbmcpIHtcclxuICAgICAgICB0aGlzLm9uU3VnZ2VzdGlvblNlbGVjdGVkKGV4aXN0aW5nKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmFsbG93TmV3KSB7XHJcbiAgICAgICAgdGhpcy5hZGROZXdUYWcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb25zID0gdGhpcy5nZXRUcmFuc2xhdGlvbnMoZGVmYXVsdFRhZ3NUcmFuc2xhdGlvbnMpO1xyXG4gICAgY29uc3QgdGV4dFByb3BzID0gdGhpcy5wcm9wcy50ZXh0UHJvcHMgPyB0aGlzLnByb3BzLnRleHRQcm9wcyA6IHt9O1xyXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB0aGlzLmdldFN1Z2dlc3Rpb25zKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SW5wdXRHcm91cCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gdG9vbHRpcD17dGhpcy5wcm9wcy50b29sdGlwfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAnaW5wdXRfX2Jhc2UgdGFncy1pbnB1dCcsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VmFsaWRhdGlvbkNsYXNzKCksXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXQtLXJlYWRPbmx5JzogdGhpcy5wcm9wcy5yZWFkT25seSxcclxuICAgICAgICAgICAgICAndGFncy1pbnB1dC0taGFzUGxhY2Vob2xkZXInOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50ZXh0UHJvcHMgJiYgdGhpcy5wcm9wcy50ZXh0UHJvcHMucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICByZWY9e3RoaXMuY29udGFpbmVyUmVmfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLnJlbmRlclRhZ3MoKX1cclxuICAgICAgICAgIHsoIXRoaXMucHJvcHMubWF4VGFncyB8fFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1heFRhZ3MgPiAodGhpcy5wcm9wcy50YWdzICYmIHRoaXMucHJvcHMudGFncy5sZW5ndGgpKSAmJlxyXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXRfX3RhZ3NfX3dyYXBwZXIgJyArXHJcbiAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnJlYWRPbmx5ID8gJ2ZpbGxlZCAnIDogJycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgey4uLnRleHRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctdGV4dC1pbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICByZWY9e3RoaXMudGV4dFJlZn1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggPiAwID8gZmFsc2UgOiB0aGlzLnByb3BzLnJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAndGFncy1pbnB1dF9fdGV4dC1pbnB1dCAnICtcclxuICAgICAgICAgICAgICAgICAgICAodGV4dFByb3BzLmNsYXNzTmFtZSA/IHRleHRQcm9wcy5jbGFzc05hbWUgOiAnJylcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3duKHN1Z2dlc3Rpb25zKX1cclxuICAgICAgICAgICAgICAgICAgb25FcnJvcnNDaGFuZ2VkPXt0aGlzLm9uVGV4dEVycm9yc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25Gb2N1c31cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRPbmx5fVxyXG4gICAgICAgICAgICAgICAgICBzaG93VmFsaWRhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIGlnbm9yZUNvbnRleHQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e3RoaXMucHJvcHMudmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgICAgY3VzdG9tVmFsaWRhdG9ycz17dGhpcy5wcm9wcy5jdXN0b21WYWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSAmJiB0aGlzLnByb3BzLnNob3dTdWdnZXN0aW9ucyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUYWdzU3VnZ2VzdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRleHQtaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXt0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0aGlzLnByb3BzLmFsbG93TmV3fVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj17dGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5mZXRjaGluZ0V4aXN0aW5nVGFnc31cclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nQ29tcG9uZW50PXt0aGlzLnByb3BzLnN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICBpc1Zpc2libGU9e3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIEVtcHR5Q29tcG9uZW50PXt0aGlzLnByb3BzLnN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFncz17c3VnZ2VzdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RlZD17dGhpcy5vblN1Z2dlc3Rpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrT3V0c2lkZT17dGhpcy5vbkNsaWNrT3V0c2lkZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBBZGROZXdUYWdDb21wb25lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hbGxvd05ldyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuZXhpc3RpbmdUYWdzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBlLm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLmZldGNoZWRFeGlzdGluZ1RhZ3MuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IGUubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50ZXh0SXNWYWxpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLWFkZC1uZXctYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X19zdWdnZXN0aW9uIHRhZ3MtaW5wdXRfX2FkZC1uZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkTmV3VGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zbGF0aW9ucy5hZGROZXd9IFwie3RoaXMuc3RhdGUudmFsdWV9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHBvcHBlclByb3BzPXt0aGlzLnByb3BzLnBvcHBlclByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIHt0aGlzLnJlbmRlckRlZmF1bHRWYWxpZGF0aW9uKCl9XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbCAmJiAoXHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50ZXh0SXNGb2N1c2VkIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlYWRPbmx5IHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID49IHRoaXMucHJvcHMubWF4VGFnc1xyXG4gICAgICAgICAgICAgICAgICA/ICdsYWJlbC0tZm9jdXNlZCdcclxuICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckxhYmVsKCl9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblRleHRFcnJvcnNDaGFuZ2VkID0gKHRleHRFcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHsgdGV4dEVycm9ycyB9KSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuXHJcbiAgcHJpdmF0ZSBvbkZvY3VzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgeyB0ZXh0SXNGb2N1c2VkOiB0cnVlLCBzdWdnZXN0aW9uc1Zpc2libGU6IHRydWUsIHRvdWNoZWQ6IHRydWUgfSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3ModGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbktleURvd24gPSAoc3VnZ2VzdGlvbnM6IFRhZ1tdKSA9PiBhc3luYyBlID0+IHtcclxuICAgIGlmIChcclxuICAgICAgZS5rZXkgPT09ICdFbnRlcicgJiZcclxuICAgICAgKHRoaXMuc3RhdGUudmFsdWUgIT09ICcnIHx8XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gIT09IHVuZGVmaW5lZCkgJiZcclxuICAgICAgdGhpcy5zdGF0ZS50ZXh0RXJyb3JzLmxlbmd0aCA9PT0gMFxyXG4gICAgKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgY29uc3QgZXhpc3RpbmdUYWcgPVxyXG4gICAgICAgIHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MuZmluZChldCA9PiBldC5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQoXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MuY29uY2F0KHN1Z2dlc3Rpb25zW3RoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uXSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycsIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXhpc3RpbmdUYWcpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQodGhpcy5wcm9wcy50YWdzLmNvbmNhdChleGlzdGluZ1RhZykpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmFsbG93TmV3KSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hZGROZXdUYWcoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc3VnZ2VzdGlvbnMubGVuZ3RoID4gMCAmJiB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSkge1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICAgIGNvbnN0IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSAwXHJcbiAgICAgICAgICAgID8gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uIC0gMTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgIGNvbnN0IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSBzdWdnZXN0aW9ucy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICsgMTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgYWRkTmV3VGFnID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFnID0gYXdhaXQgdGhpcy5wcm9wcy5vbk5ld1RhZ0FkZGVkKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgaWYgKG5ld1RhZykge1xyXG4gICAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQoXHJcbiAgICAgICAgdGhpcy5wcm9wcy50YWdzID8gdGhpcy5wcm9wcy50YWdzLmNvbmNhdChuZXdUYWcpIDogW25ld1RhZ11cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycsIHRleHRFcnJvcnM6IFtdIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvblN1Z2dlc3Rpb25TZWxlY3RlZCA9ICh0YWc6IFRhZykgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKHRoaXMucHJvcHMudGFncy5jb25jYXQodGFnKSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7IHZhbHVlOiAnJywgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsIHRleHRFcnJvcnM6IFtdIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhdGhpcy5wcm9wcy5tYXhUYWdzICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoICsgMSA8IHRoaXMucHJvcHMubWF4VGFnc1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25CbHVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHRleHRJc0ZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25DbGlja091dHNpZGUgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcblxyXG4gIHByaXZhdGUgb25UZXh0Q2hhbmdlZCA9IChcclxuICAgIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LFxyXG4gICAgaXNWYWxpZDogYm9vbGVhblxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7XHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgaXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICB0ZXh0SXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IHRydWUsXHJcbiAgICAgIH0pLFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMgPSAodGFnczogVGFnW10gPSB0aGlzLnByb3BzLnRhZ3MpID0+IHtcclxuICAgIGxldCBlcnJvcnMgPSB0aGlzLmdldEVycm9ycyh0YWdzKTtcclxuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldEludmFsaWQoZXJyb3JzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsaWQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGdldEVycm9ycyh0YWdzOiBUYWdbXSkge1xyXG4gICAgbGV0IGVycm9ycyA9IFtdO1xyXG4gICAgaWYgKHRhZ3MubGVuZ3RoIDwgdGhpcy5wcm9wcy5tYXhUYWdzKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5zdGF0ZS50ZXh0RXJyb3JzKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyAmJiB0YWdzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLnJlcXVpcmVkKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQoXHJcbiAgICAgICAgdGhpcy5nZXRUcmFuc2xhdGlvbnModGhpcy5wcm9wcy50cmFuc2xhdGlvbnMpLnJlcXVpcmVkXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSAmJiB0aGlzLnByb3BzLmFsbG93TmV3ICYmICF0aGlzLnN0YXRlLnRleHRJc0ZvY3VzZWQpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnByb3BzLnZhbHVlTm90QWRkZWRFcnJvcik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5tYXhUYWdzIDwgKHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoKSkge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMucHJvcHMubWF4VGFnc1N1cnBhc3NlZEVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcnMuZmlsdGVyKGkgPT4gaSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZldGNoRXhpc3RpbmdUYWdzKHN0YXJ0c1dpdGg6IHN0cmluZyA9ICcnKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5mZXRjaEV4aXN0aW5nVGFncykge1xyXG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZldGNoaW5nRXhpc3RpbmdUYWdzOiB0cnVlIH0pLFxyXG4gICAgICAgIHRoaXMucHJvcHMubG9hZGluZ0RlbGF5TXNcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5wcm9wcy5mZXRjaEV4aXN0aW5nVGFncyhzdGFydHNXaXRoKS50aGVuKGZldGNoZWRFeGlzdGluZ1RhZ3MgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBmZXRjaGVkRXhpc3RpbmdUYWdzLFxyXG4gICAgICAgICAgZmV0Y2hpbmdFeGlzdGluZ1RhZ3M6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U3VnZ2VzdGlvbnMoKSB7XHJcbiAgICBjb25zdCBleGlzdGluZ1RhZ3M6IFRhZ1tdID0gW11cclxuICAgICAgLmNvbmNhdCh0aGlzLnByb3BzLmV4aXN0aW5nVGFncyA/IHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzIDogW10pXHJcbiAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzID8gdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzIDogW11cclxuICAgICAgKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkVGFncyA9IHRoaXMucHJvcHMuZmlsdGVyRXhpc3RpbmdUYWdzKFxyXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlID8gdGhpcy5zdGF0ZS52YWx1ZS50b0xvd2VyQ2FzZSgpIDogJycsXHJcbiAgICAgIGV4aXN0aW5nVGFnc1xyXG4gICAgKTtcclxuICAgIGxldCBzdWdnZXN0aW9ucyA9IGZpbHRlcmVkVGFnc1xyXG4gICAgICAuZmlsdGVyKFxyXG4gICAgICAgIHRhZyA9PlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy5hbGxvd1NhbWVUYWdNdWx0aXBsZVRpbWVzIHx8XHJcbiAgICAgICAgICAhdGhpcy5wcm9wcy50YWdzLnNvbWUodCA9PiB0LmlkID09PSB0YWcuaWQpXHJcbiAgICAgIClcclxuICAgICAgLnNsaWNlKDAsIHRoaXMucHJvcHMubWF4U3VnZ2VzdGlvbnMpO1xyXG4gICAgcmV0dXJuIHN1Z2dlc3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJUYWcodGFnOiBUYWcsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGJvZHkgPSAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge3RhZy5uYW1lfVxyXG4gICAgICAgIHshdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRhZy0nICsgaW5kZXgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIGNpcmN1bGFyPXt0cnVlfVxyXG4gICAgICAgICAgICBibGFuaz17dHJ1ZX1cclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy50YWdSZW1vdmVDbGljayh0YWcpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xIHRyYW5zZm9ybS1yb3RhdGUtLTQ1IGxpbmUtaGVpZ2h0LS0wIHAtMFwiXHJcbiAgICAgICAgICAgIENvbXBvbmVudD17cCA9PiAoXHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtwLmNsYXNzTmFtZX0gaWQ9e3AuaWR9IG9uQ2xpY2s9e3Aub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICB7cC5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQbHVzSWNvbiAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygndGFncy1pbnB1dF9fdGFnJywge1xyXG4gICAgICAndGFncy1pbnB1dF9fdGFnLWNoaXAnOiB0aGlzLnByb3BzLnNob3dDaGlwcyxcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25UYWdDbGljaykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudGFnQ2xpY2sodGFnKX1cclxuICAgICAgICAgIHNtYWxsPXt0cnVlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnRhZ0NsaWNrKHRhZyl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e2luZGV4fT5cclxuICAgICAgICB7Ym9keX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0YWdDbGljayA9ICh0YWc6IFRhZykgPT4gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ0NsaWNrICYmIHRoaXMucHJvcHMub25UYWdDbGljayh0YWcpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdGFnUmVtb3ZlQ2xpY2sgPSAodGFnOiBUYWcpID0+IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IG5ld1RhZ3MgPSB0aGlzLnByb3BzLnRhZ3MuZmlsdGVyKHN2ID0+IHN2LmlkICE9PSB0YWcuaWQpO1xyXG4gICAgaWYgKG5ld1RhZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5mb2N1cygpLCA1MCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkICYmIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZChuZXdUYWdzKTtcclxuICAgIHRoaXMuaGFuZGxlRXJyb3JzKG5ld1RhZ3MpO1xyXG4gICAgLy8gdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyVGFncygpIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLnRhZ3MgJiYgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnX193cmFwcGVyXCI+XHJcbiAgICAgICAge3RoaXMucHJvcHMudGFncy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB0aGlzLnJlbmRlclRhZyhpdGVtLCBpbmRleCkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgOiAoXHJcbiAgICAgIHRoaXMucHJvcHMucmVhZE9ubHkgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnX193cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3RhZ1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5yZWFkb25seUVtcHR5UGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUYWdzID0gd2l0aFRoZW1lQ29udGV4dDxUYWdzUHJvcHMsIEluc3RhbmNlVHlwZTx0eXBlb2YgVGFnc1Jhdz4+KFxyXG4gIHdpdGhGb3JtQ29udGV4dDxUYWdzUHJvcHM+KFRhZ3NSYXcpLFxyXG4gICd0YWdzJ1xyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFncztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==