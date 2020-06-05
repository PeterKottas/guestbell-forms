webpackHotUpdate("main",{

/***/ "./src/lib/components/tags/Tags.tsx":
/*!******************************************!*\
  !*** ./src/lib/components/tags/Tags.tsx ***!
  \******************************************/
/*! exports provided: defaultTranslations, TagsRaw, Tags, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTranslations", function() { return defaultTranslations; });
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
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Libs








 // Misc

var defaultTranslations = {
  addNew: 'Add new'
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

      var translations = this.getTranslations();
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
        }), translations.addNew, " \"", this.state.value, "\"")
      }))), this.renderDefaultValidation(), this.props.label && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
        className: this.state.value !== '' || this.state.textIsFocused || this.props.readOnly || this.props.tags.length >= this.props.maxTags ? 'label--focused' : ''
      }, this.renderLabel())));
    }
  }, {
    key: "getTranslations",
    value: function getTranslations() {
      var _this$props$translati = this.props.translations,
          translations = _this$props$translati === void 0 ? defaultTranslations : _this$props$translati;
      return _objectSpread({}, defaultTranslations, {}, translations);
    }
  }, {
    key: "getErrors",
    value: function getErrors(tags) {
      var errors = [];

      if (tags.length < this.props.maxTags) {
        errors = errors.concat(this.state.textErrors);
      }

      if (this.state.value !== '' && tags.length === 0 && this.props.required) {
        errors = errors.concat(this.props.errorsTranslations.required);
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
        return !_this5.props.tags.some(function (t) {
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
  addNewOnBlur: true
});
var Tags = Object(_form_withFormContext__WEBPACK_IMPORTED_MODULE_7__["withFormContext"])(TagsRaw);
var _default = Tags;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultTranslations, "defaultTranslations", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\Tags.tsx");
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoneyRaw", function() { return _components_money_Money__WEBPACK_IMPORTED_MODULE_8__["MoneyRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Money", function() { return _components_money_Money__WEBPACK_IMPORTED_MODULE_8__["Money"]; });

/* harmony import */ var _components_openingHours_openingHoursDay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/openingHours/openingHoursDay */ "./src/lib/components/openingHours/openingHoursDay/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultOpeningHoursDayTranslations", function() { return _components_openingHours_openingHoursDay__WEBPACK_IMPORTED_MODULE_9__["defaultOpeningHoursDayTranslations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursDayRaw", function() { return _components_openingHours_openingHoursDay__WEBPACK_IMPORTED_MODULE_9__["OpeningHoursDayRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursDay", function() { return _components_openingHours_openingHoursDay__WEBPACK_IMPORTED_MODULE_9__["OpeningHoursDay"]; });

/* harmony import */ var _components_openingHours_openingHoursSpecial__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/openingHours/openingHoursSpecial */ "./src/lib/components/openingHours/openingHoursSpecial/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateInput", function() { return _components_openingHours_openingHoursSpecial__WEBPACK_IMPORTED_MODULE_10__["DateInput"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursSpecialRaw", function() { return _components_openingHours_openingHoursSpecial__WEBPACK_IMPORTED_MODULE_10__["OpeningHoursSpecialRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpeningHoursSpecial", function() { return _components_openingHours_openingHoursSpecial__WEBPACK_IMPORTED_MODULE_10__["OpeningHoursSpecial"]; });

/* harmony import */ var _components_openingHours_openingHoursWeek__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/openingHours/openingHoursWeek */ "./src/lib/components/openingHours/openingHoursWeek/index.tsx");
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitRaw", function() { return _components_submit__WEBPACK_IMPORTED_MODULE_15__["SubmitRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Submit", function() { return _components_submit__WEBPACK_IMPORTED_MODULE_15__["Submit"]; });

/* harmony import */ var _components_tags__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tags */ "./src/lib/components/tags/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTranslations", function() { return _components_tags__WEBPACK_IMPORTED_MODULE_16__["defaultTranslations"]; });

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

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};























/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9UYWdzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbImRlZmF1bHRUcmFuc2xhdGlvbnMiLCJhZGROZXciLCJUYWdzUmF3IiwicHJvcHMiLCJ0ZXh0UmVmIiwib25UZXh0RXJyb3JzQ2hhbmdlZCIsInRleHRFcnJvcnMiLCJzZXRTdGF0ZSIsImhhbmRsZUVycm9ycyIsIm9uRm9jdXMiLCJ0ZXh0SXNGb2N1c2VkIiwic3VnZ2VzdGlvbnNWaXNpYmxlIiwidG91Y2hlZCIsImZldGNoRXhpc3RpbmdUYWdzIiwic3RhdGUiLCJ2YWx1ZSIsIm9uS2V5RG93biIsInN1Z2dlc3Rpb25zIiwiZSIsImtleSIsInByZXNlbGVjdGVkU3VnZ2VzdGlvbiIsInVuZGVmaW5lZCIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZXhpc3RpbmdUYWciLCJleGlzdGluZ1RhZ3MiLCJmaW5kIiwiZXQiLCJuYW1lIiwib25UYWdzQ2hhbmdlZCIsInRhZ3MiLCJjb25jYXQiLCJhbGxvd05ldyIsImFkZE5ld1RhZyIsIm9uTmV3VGFnQWRkZWQiLCJuZXdUYWciLCJvblN1Z2dlc3Rpb25TZWxlY3RlZCIsInRhZyIsIm1heFRhZ3MiLCJvbkJsdXIiLCJvbkNsaWNrT3V0c2lkZSIsIm9uVGV4dENoYW5nZWQiLCJpc1ZhbGlkIiwidGFyZ2V0IiwidGV4dElzVmFsaWQiLCJlcnJvcnMiLCJnZXRFcnJvcnMiLCJzZXRJbnZhbGlkIiwic2V0VmFsaWQiLCJ0YWdDbGljayIsIm9uVGFnQ2xpY2siLCJ0YWdSZW1vdmVDbGljayIsIm5ld1RhZ3MiLCJmaWx0ZXIiLCJzdiIsImlkIiwic2V0VGltZW91dCIsImZvY3VzIiwiZmV0Y2hpbmdFeGlzdGluZ1RhZ3MiLCJmZXRjaGVkRXhpc3RpbmdUYWdzIiwiUmVhY3QiLCJoYW5kbGVDbGlja091dHNpZGUiLCJiaW5kIiwiY3VycmVudCIsIm9sZFByb3BzIiwidmFsaWRhdG9ycyIsImN1c3RvbVZhbGlkYXRvcnMiLCJyZXF1aXJlZCIsImNvbnRhaW5lclJlZiIsImNvbnRhaW5zIiwiYWRkTmV3T25CbHVyIiwiZ2V0U3VnZ2VzdGlvbnMiLCJleGlzdGluZyIsInMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidHJhbnNsYXRpb25zIiwiZ2V0VHJhbnNsYXRpb25zIiwidGV4dFByb3BzIiwidGl0bGUiLCJ0b29sdGlwIiwiY2xhc3NOYW1lcyIsImdldFZhbGlkYXRpb25DbGFzcyIsImNsYXNzTmFtZSIsInJlYWRPbmx5IiwicGxhY2Vob2xkZXIiLCJyZW5kZXJUYWdzIiwic2hvd1N1Z2dlc3Rpb25zIiwic3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50Iiwic3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudCIsInJlbmRlckRlZmF1bHRWYWxpZGF0aW9uIiwibGFiZWwiLCJyZW5kZXJMYWJlbCIsImVycm9yc1RyYW5zbGF0aW9ucyIsInZhbHVlTm90QWRkZWRFcnJvciIsIm1heFRhZ3NTdXJwYXNzZWRFcnJvciIsImkiLCJzdGFydHNXaXRoIiwidGltZXIiLCJsb2FkaW5nRGVsYXlNcyIsInRoZW4iLCJjbGVhclRpbWVvdXQiLCJmaWx0ZXJlZFRhZ3MiLCJmaWx0ZXJFeGlzdGluZ1RhZ3MiLCJ0b0xvd2VyQ2FzZSIsInNvbWUiLCJ0Iiwic2xpY2UiLCJtYXhTdWdnZXN0aW9ucyIsImluZGV4IiwiYm9keSIsInRvU3RyaW5nIiwicCIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsInNob3dDaGlwcyIsIm1hcCIsIml0ZW0iLCJyZW5kZXJUYWciLCJyZWFkb25seUVtcHR5UGxhY2Vob2xkZXIiLCJCYXNlSW5wdXQiLCJkZWZhdWx0UHJvcHMiLCJkaXNhYmxlZCIsIm5ld1RhZ05hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsIkRhdGUiLCJnZXRUaW1lIiwidGV4dCIsIlRhZ3MiLCJ3aXRoRm9ybUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0NBR0E7O0FBTU8sSUFBTUEsbUJBQW1CLEdBQUc7QUFDakNDLFFBQU0sRUFBRTtBQUR5QixDQUE1QjtBQTZDQSxJQUFNQyxPQUFiO0FBQUE7QUFBQTtBQUFBOztBQTZCRSxtQkFBWUMsS0FBWixFQUE4QztBQUFBOztBQUFBOztBQUM1QyxpRkFBTUEsS0FBTjtBQUQ0QyxVQUZ0Q0MsT0FFc0M7O0FBQUEsVUE0THRDQyxtQkE1THNDLEdBNExoQixVQUFDQyxVQUFEO0FBQUEsYUFDNUIsTUFBS0MsUUFBTCxDQUNFO0FBQUEsZUFBTztBQUFFRCxvQkFBVSxFQUFWQTtBQUFGLFNBQVA7QUFBQSxPQURGLEVBRUU7QUFBQSxlQUFNLE1BQUtFLFlBQUwsRUFBTjtBQUFBLE9BRkYsQ0FENEI7QUFBQSxLQTVMZ0I7O0FBQUEsVUFrTXRDQyxPQWxNc0MsR0FrTTVCLFlBQU07QUFDdEIsWUFBS0YsUUFBTCxDQUNFO0FBQUVHLHFCQUFhLEVBQUUsSUFBakI7QUFBdUJDLDBCQUFrQixFQUFFLElBQTNDO0FBQWlEQyxlQUFPLEVBQUU7QUFBMUQsT0FERixFQUVFO0FBQUEsZUFBTSxNQUFLSixZQUFMLEVBQU47QUFBQSxPQUZGOztBQUlBLFlBQUtLLGlCQUFMLENBQXVCLE1BQUtDLEtBQUwsQ0FBV0MsS0FBbEM7QUFDRCxLQXhNNkM7O0FBQUEsVUEwTXRDQyxTQTFNc0MsR0EwTTFCLFVBQUNDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQXdCLGlCQUFNQyxDQUFOO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFFeENBLENBQUMsQ0FBQ0MsR0FBRixLQUFVLE9BQVYsS0FDQyxNQUFLTCxLQUFMLENBQVdDLEtBQVgsS0FBcUIsRUFBckIsSUFDQyxNQUFLRCxLQUFMLENBQVdNLHFCQUFYLEtBQXFDQyxTQUZ2QyxLQUdBLE1BQUtQLEtBQUwsQ0FBV1IsVUFBWCxDQUFzQmdCLE1BQXRCLEtBQWlDLENBTE87QUFBQTtBQUFBO0FBQUE7O0FBT3hDSixxQkFBQyxDQUFDSyxjQUFGO0FBQ0FMLHFCQUFDLENBQUNNLGVBQUY7QUFDTUMsK0JBVGtDLEdBVXRDLE1BQUt0QixLQUFMLENBQVd1QixZQUFYLElBQ0EsTUFBS3ZCLEtBQUwsQ0FBV3VCLFlBQVgsQ0FBd0JDLElBQXhCLENBQTZCLFVBQUFDLEVBQUU7QUFBQSw2QkFBSUEsRUFBRSxDQUFDQyxJQUFILEtBQVksTUFBS2YsS0FBTCxDQUFXQyxLQUEzQjtBQUFBLHFCQUEvQixDQVhzQzs7QUFBQSwwQkFZcEMsTUFBS0QsS0FBTCxDQUFXTSxxQkFBWCxLQUFxQ0MsU0FaRDtBQUFBO0FBQUE7QUFBQTs7QUFhdEMsMEJBQUtsQixLQUFMLENBQVcyQixhQUFYLENBQ0UsTUFBSzNCLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JDLE1BQWhCLENBQXVCZixXQUFXLENBQUMsTUFBS0gsS0FBTCxDQUFXTSxxQkFBWixDQUFsQyxDQURGOztBQUdBLDBCQUFLYixRQUFMLENBQWM7QUFBRVEsMkJBQUssRUFBRSxFQUFUO0FBQWFLLDJDQUFxQixFQUFFQztBQUFwQyxxQkFBZCxFQUErRCxZQUFNO0FBQ25FLDRCQUFLUixpQkFBTDs7QUFDQSw0QkFBS0wsWUFBTDtBQUNELHFCQUhEOztBQWhCc0M7QUFBQTs7QUFBQTtBQUFBLHlCQW9CN0JpQixXQXBCNkI7QUFBQTtBQUFBO0FBQUE7O0FBcUJ0QywwQkFBS3RCLEtBQUwsQ0FBVzJCLGFBQVgsQ0FBeUIsTUFBSzNCLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JDLE1BQWhCLENBQXVCUCxXQUF2QixDQUF6Qjs7QUFDQSwwQkFBS2xCLFFBQUwsQ0FBYztBQUFFUSwyQkFBSyxFQUFFO0FBQVQscUJBQWQsRUFBNkIsWUFBTTtBQUNqQyw0QkFBS0YsaUJBQUw7O0FBQ0EsNEJBQUtMLFlBQUw7QUFDRCxxQkFIRDs7QUF0QnNDO0FBQUE7O0FBQUE7QUFBQSx5QkEwQjdCLE1BQUtMLEtBQUwsQ0FBVzhCLFFBMUJrQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDJCQTJCaEMsTUFBS0MsU0FBTCxFQTNCZ0M7O0FBQUE7QUE0QnRDLDBCQUFLMUIsWUFBTDs7QUE1QnNDO0FBK0IxQyx3QkFBSVMsV0FBVyxDQUFDSyxNQUFaLEdBQXFCLENBQXJCLElBQTBCLE1BQUtSLEtBQUwsQ0FBV0gsa0JBQXpDLEVBQTZEO0FBQzNELDBCQUFJTyxDQUFDLENBQUNDLEdBQUYsS0FBVSxTQUFkLEVBQXlCO0FBQ2pCQyw2Q0FEaUIsR0FFckIsTUFBS04sS0FBTCxDQUFXTSxxQkFBWCxLQUFxQ0MsU0FBckMsR0FDSUosV0FBVyxDQUFDSyxNQUFaLEdBQXFCLENBRHpCLEdBRUksTUFBS1IsS0FBTCxDQUFXTSxxQkFBWCxLQUFxQyxDQUFyQyxHQUNBSCxXQUFXLENBQUNLLE1BQVosR0FBcUIsQ0FEckIsR0FFQSxNQUFLUixLQUFMLENBQVdNLHFCQUFYLEdBQW1DLENBTmxCOztBQU92Qiw4QkFBS2IsUUFBTCxDQUFjO0FBQUVhLCtDQUFxQixFQUFyQkE7QUFBRix5QkFBZDtBQUNELHVCQVJELE1BUU8sSUFBSUYsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsV0FBZCxFQUEyQjtBQUMxQkMsOENBRDBCLEdBRTlCLE1BQUtOLEtBQUwsQ0FBV00scUJBQVgsS0FBcUNDLFNBQXJDLEdBQ0ksQ0FESixHQUVJLE1BQUtQLEtBQUwsQ0FBV00scUJBQVgsS0FBcUNILFdBQVcsQ0FBQ0ssTUFBWixHQUFxQixDQUExRCxHQUNBLENBREEsR0FFQSxNQUFLUixLQUFMLENBQVdNLHFCQUFYLEdBQW1DLENBTlQ7O0FBT2hDLDhCQUFLYixRQUFMLENBQWM7QUFBRWEsK0NBQXFCLEVBQXJCQTtBQUFGLHlCQUFkO0FBQ0QsdUJBUk0sTUFRQTtBQUNMLDhCQUFLYixRQUFMLENBQWM7QUFBRWEsK0NBQXFCLEVBQUVDO0FBQXpCLHlCQUFkO0FBQ0Q7QUFDRjs7QUFuRHlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTFNMEI7O0FBQUEsVUFnUXRDYSxTQWhRc0M7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFnUTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0csTUFBSy9CLEtBQUwsQ0FBV2dDLGFBQVgsQ0FBeUIsTUFBS3JCLEtBQUwsQ0FBV0MsS0FBcEMsQ0FESDs7QUFBQTtBQUNacUIsb0JBRFk7O0FBRWxCLGtCQUFJQSxNQUFKLEVBQVk7QUFDVixzQkFBS2pDLEtBQUwsQ0FBVzJCLGFBQVgsQ0FDRSxNQUFLM0IsS0FBTCxDQUFXNEIsSUFBWCxHQUFrQixNQUFLNUIsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQkMsTUFBaEIsQ0FBdUJJLE1BQXZCLENBQWxCLEdBQW1ELENBQUNBLE1BQUQsQ0FEckQ7QUFHRDs7QUFDRCxvQkFBSzdCLFFBQUwsQ0FBYztBQUFFUSxxQkFBSyxFQUFFLEVBQVQ7QUFBYVQsMEJBQVUsRUFBRTtBQUF6QixlQUFkLEVBQTZDLFlBQU07QUFDakQsc0JBQUtPLGlCQUFMOztBQUNBLHNCQUFLTCxZQUFMO0FBQ0QsZUFIRDs7QUFQa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FoUTBCOztBQUFBLFVBNlF0QzZCLG9CQTdRc0MsR0E2UWYsVUFBQ0MsR0FBRCxFQUFjO0FBQzNDLFlBQUtuQyxLQUFMLENBQVcyQixhQUFYLENBQXlCLE1BQUszQixLQUFMLENBQVc0QixJQUFYLENBQWdCQyxNQUFoQixDQUF1Qk0sR0FBdkIsQ0FBekI7O0FBQ0EsWUFBSy9CLFFBQUwsQ0FDRTtBQUFFUSxhQUFLLEVBQUUsRUFBVDtBQUFhSyw2QkFBcUIsRUFBRUMsU0FBcEM7QUFBK0NmLGtCQUFVLEVBQUU7QUFBM0QsT0FERixFQUVFLFlBQU07QUFDSixZQUNFLENBQUMsTUFBS0gsS0FBTCxDQUFXb0MsT0FBWixJQUNBLE1BQUtwQyxLQUFMLENBQVc0QixJQUFYLENBQWdCVCxNQUFoQixHQUF5QixDQUF6QixHQUE2QixNQUFLbkIsS0FBTCxDQUFXb0MsT0FGMUMsRUFHRTtBQUNBLGdCQUFLMUIsaUJBQUw7QUFDRDs7QUFDRCxjQUFLTCxZQUFMO0FBQ0QsT0FWSDtBQVlELEtBM1I2Qzs7QUFBQSxVQTZSdENnQyxNQTdSc0M7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkE2UjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZixvQkFBS2pDLFFBQUwsQ0FDRTtBQUNFRyw2QkFBYSxFQUFFLEtBRGpCO0FBRUVVLHFDQUFxQixFQUFFQztBQUZ6QixlQURGLEVBS0U7QUFBQSx1QkFBTSxNQUFLYixZQUFMLEVBQU47QUFBQSxlQUxGOztBQURlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBN1I2Qjs7QUFBQSxVQXVTdENpQyxjQXZTc0MsR0F1U3JCO0FBQUEsYUFDdkIsTUFBS2xDLFFBQUwsQ0FBYztBQUNaSSwwQkFBa0IsRUFBRSxLQURSO0FBRVpTLDZCQUFxQixFQUFFQztBQUZYLE9BQWQsQ0FEdUI7QUFBQSxLQXZTcUI7O0FBQUEsVUE2U3RDcUIsYUE3U3NDLEdBNlN0QixVQUN0QnhCLENBRHNCLEVBRXRCeUIsT0FGc0IsRUFHbkI7QUFDSCxVQUFNNUIsS0FBSyxHQUFHRyxDQUFDLENBQUMwQixNQUFGLENBQVM3QixLQUF2Qjs7QUFDQSxZQUFLUixRQUFMLENBQ0U7QUFBQSxlQUFPO0FBQ0xRLGVBQUssRUFBTEEsS0FESztBQUVMNEIsaUJBQU8sRUFBRUEsT0FGSjtBQUdMRSxxQkFBVyxFQUFFRixPQUhSO0FBSUxoQyw0QkFBa0IsRUFBRTtBQUpmLFNBQVA7QUFBQSxPQURGLEVBT0U7QUFBQSxlQUFNLE1BQUtILFlBQUwsRUFBTjtBQUFBLE9BUEY7O0FBU0EsWUFBS0ssaUJBQUwsQ0FBdUJLLENBQUMsQ0FBQzBCLE1BQUYsQ0FBUzdCLEtBQWhDO0FBQ0QsS0E1VDZDOztBQUFBLFVBOFR0Q1AsWUE5VHNDLEdBOFR2QixZQUFtQztBQUFBLFVBQWxDdUIsSUFBa0MsdUVBQXBCLE1BQUs1QixLQUFMLENBQVc0QixJQUFTOztBQUN4RCxVQUFJZSxNQUFNLEdBQUcsTUFBS0MsU0FBTCxDQUFlaEIsSUFBZixDQUFiOztBQUNBLFVBQUllLE1BQU0sQ0FBQ3hCLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsY0FBSzBCLFVBQUwsQ0FBZ0JGLE1BQWhCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsY0FBS0csUUFBTDtBQUNEO0FBQ0YsS0FyVTZDOztBQUFBLFVBc2F0Q0MsUUF0YXNDLEdBc2EzQixVQUFDWixHQUFEO0FBQUEsYUFBYyxZQUFNO0FBQ3JDLGNBQUtuQyxLQUFMLENBQVdnRCxVQUFYLElBQXlCLE1BQUtoRCxLQUFMLENBQVdnRCxVQUFYLENBQXNCYixHQUF0QixDQUF6QjtBQUNELE9BRmtCO0FBQUEsS0F0YTJCOztBQUFBLFVBMGF0Q2MsY0ExYXNDLEdBMGFyQixVQUFDZCxHQUFEO0FBQUEsYUFBYyxVQUFDcEIsQ0FBRCxFQUFzQztBQUMzRUEsU0FBQyxDQUFDTSxlQUFGOztBQUNBLFlBQU02QixPQUFPLEdBQUcsTUFBS2xELEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0J1QixNQUFoQixDQUF1QixVQUFBQyxFQUFFO0FBQUEsaUJBQUlBLEVBQUUsQ0FBQ0MsRUFBSCxLQUFVbEIsR0FBRyxDQUFDa0IsRUFBbEI7QUFBQSxTQUF6QixDQUFoQjs7QUFDQSxZQUFJSCxPQUFPLENBQUMvQixNQUFSLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3hCbUMsb0JBQVUsQ0FBQztBQUFBLG1CQUFNLE1BQUtDLEtBQUwsRUFBTjtBQUFBLFdBQUQsRUFBcUIsRUFBckIsQ0FBVjtBQUNEOztBQUNELGNBQUtuRCxRQUFMLENBQWM7QUFDWkksNEJBQWtCLEVBQUU7QUFEUixTQUFkOztBQUdBLGNBQUtSLEtBQUwsQ0FBVzJCLGFBQVgsSUFBNEIsTUFBSzNCLEtBQUwsQ0FBVzJCLGFBQVgsQ0FBeUJ1QixPQUF6QixDQUE1Qjs7QUFDQSxjQUFLN0MsWUFBTCxDQUFrQjZDLE9BQWxCLEVBVjJFLENBVzNFOztBQUNELE9BWndCO0FBQUEsS0ExYXFCOztBQUU1QyxVQUFLdkMsS0FBTCxxQkFDSyxNQUFLQSxLQURWO0FBRUVSLGdCQUFVLEVBQUUsRUFGZDtBQUdFSSxtQkFBYSxFQUFFLEtBSGpCO0FBSUVDLHdCQUFrQixFQUFFLEtBSnRCO0FBS0VnRCwwQkFBb0IsRUFBRSxLQUx4QjtBQU1FZCxpQkFBVyxFQUFFLEtBTmY7QUFPRWUseUJBQW1CLEVBQUU7QUFQdkI7QUFTQSxVQUFLeEQsT0FBTCxHQUFleUQsK0NBQUEsRUFBZjtBQUNBLFVBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QiwrQkFBMUI7QUFaNEM7QUFhN0M7O0FBMUNIO0FBQUE7QUFBQSw0QkE0Q2lCO0FBQ2IsVUFBSSxLQUFLM0QsT0FBTCxDQUFhNEQsT0FBakIsRUFBMEI7QUFDeEIsYUFBSzVELE9BQUwsQ0FBYTRELE9BQWIsQ0FBcUJOLEtBQXJCO0FBQ0Q7QUFDRjtBQWhESDtBQUFBO0FBQUEsdUNBa0Q0Qk8sUUFsRDVCLEVBa0RpRTtBQUM3RCxVQUNFQSxRQUFRLENBQUNsQyxJQUFULEtBQWtCLEtBQUs1QixLQUFMLENBQVc0QixJQUE3QixJQUNBa0MsUUFBUSxDQUFDQyxVQUFULEtBQXdCLEtBQUsvRCxLQUFMLENBQVcrRCxVQURuQyxJQUVBRCxRQUFRLENBQUNFLGdCQUFULEtBQThCLEtBQUtoRSxLQUFMLENBQVdnRSxnQkFGekMsSUFHQUYsUUFBUSxDQUFDRyxRQUFULEtBQXNCLEtBQUtqRSxLQUFMLENBQVdpRSxRQUpuQyxFQUtFO0FBQ0EsYUFBSzVELFlBQUwsQ0FBa0IsS0FBS0wsS0FBTCxDQUFXNEIsSUFBN0I7QUFDRDtBQUNGO0FBM0RIO0FBQUE7QUFBQSx1Q0E2RDRCYixDQTdENUIsRUE2RDJDO0FBQUE7O0FBQ3ZDLFVBQ0UsQ0FBQyxLQUFLbUQsWUFBTCxDQUFrQkwsT0FBbkIsSUFDQSxLQUFLSyxZQUFMLENBQWtCTCxPQUFsQixDQUEwQk0sUUFBMUIsQ0FBbUNwRCxDQUFDLENBQUMwQixNQUFyQyxDQUZGLEVBR0U7QUFDQTtBQUNEOztBQUNELFVBQUksS0FBS3pDLEtBQUwsQ0FBV29FLFlBQVgsSUFBMkIsS0FBS3pELEtBQUwsQ0FBV0MsS0FBMUMsRUFBaUQ7QUFDL0MsWUFBTUUsV0FBVyxHQUFHLEtBQUt1RCxjQUFMLEVBQXBCO0FBQ0EsWUFBTUMsUUFBUSxHQUFHeEQsV0FBVyxDQUFDVSxJQUFaLENBQWlCLFVBQUErQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQzdDLElBQUYsS0FBVyxNQUFJLENBQUNmLEtBQUwsQ0FBV0MsS0FBMUI7QUFBQSxTQUFsQixDQUFqQjs7QUFDQSxZQUFJMEQsUUFBSixFQUFjO0FBQ1osZUFBS3BDLG9CQUFMLENBQTBCb0MsUUFBMUI7QUFDRCxTQUZELE1BRU8sSUFBSSxLQUFLdEUsS0FBTCxDQUFXOEIsUUFBZixFQUF5QjtBQUM5QixlQUFLQyxTQUFMO0FBQ0Q7QUFDRjtBQUNGO0FBN0VIO0FBQUE7QUFBQSx3Q0ErRTZCO0FBQ3pCeUMsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixFQUF1QyxLQUFLZCxrQkFBNUM7QUFDQWEsY0FBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixFQUF3QyxLQUFLZCxrQkFBN0M7QUFDRDtBQWxGSDtBQUFBO0FBQUEsMkNBb0ZnQztBQUM1QmEsY0FBUSxDQUFDRSxtQkFBVCxDQUE2QixXQUE3QixFQUEwQyxLQUFLZixrQkFBL0M7QUFDQWEsY0FBUSxDQUFDRSxtQkFBVCxDQUE2QixZQUE3QixFQUEyQyxLQUFLZixrQkFBaEQ7QUFDRDtBQXZGSDtBQUFBO0FBQUEsNkJBeUZrQjtBQUFBOztBQUNkLFVBQU1nQixZQUFZLEdBQUcsS0FBS0MsZUFBTCxFQUFyQjtBQUNBLFVBQU1DLFNBQVMsR0FBRyxLQUFLN0UsS0FBTCxDQUFXNkUsU0FBWCxHQUF1QixLQUFLN0UsS0FBTCxDQUFXNkUsU0FBbEMsR0FBOEMsRUFBaEU7QUFDQSxVQUFNL0QsV0FBVyxHQUFHLEtBQUt1RCxjQUFMLEVBQXBCO0FBQ0EsYUFDRSxvREFBQyxpRUFBRDtBQUFZLGFBQUssRUFBRSxLQUFLckUsS0FBTCxDQUFXOEUsS0FBOUI7QUFBcUMsZUFBTyxFQUFFLEtBQUs5RSxLQUFMLENBQVcrRTtBQUF6RCxTQUNFLHdFQUNPLEtBQUsvRSxLQUFMLENBQVdxRCxFQUFYLElBQWlCO0FBQ3BCQSxVQUFFLEVBQUUsS0FBS3JELEtBQUwsQ0FBV3FEO0FBREssT0FEeEI7QUFJRSxpQkFBUyxFQUFFMkIsaURBQVUsQ0FDbkIsd0JBRG1CLEVBRW5CLEtBQUtDLGtCQUFMLEVBRm1CLEVBR25CLEtBQUtqRixLQUFMLENBQVdrRixTQUhRLEVBSW5CO0FBQ0Usa0NBQXdCLEtBQUtsRixLQUFMLENBQVdtRixRQURyQztBQUVFLHdDQUNFLEtBQUtuRixLQUFMLENBQVc2RSxTQUFYLElBQXdCLEtBQUs3RSxLQUFMLENBQVc2RSxTQUFYLENBQXFCTztBQUhqRCxTQUptQixDQUp2QjtBQWNFLFdBQUcsRUFBRSxLQUFLbEI7QUFkWixVQWdCRyxLQUFLbUIsVUFBTCxFQWhCSCxFQWlCRyxDQUFDLENBQUMsS0FBS3JGLEtBQUwsQ0FBV29DLE9BQVosSUFDQSxLQUFLcEMsS0FBTCxDQUFXb0MsT0FBWCxJQUFzQixLQUFLcEMsS0FBTCxDQUFXNEIsSUFBWCxJQUFtQixLQUFLNUIsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQlQsTUFBekQsQ0FERCxLQUVDLENBQUMsS0FBS25CLEtBQUwsQ0FBV21GLFFBRmIsSUFHRztBQUNFLGlCQUFTLEVBQ1AsZ0NBQ0MsS0FBS25GLEtBQUwsQ0FBV21GLFFBQVgsR0FBc0IsU0FBdEIsR0FBa0MsRUFEbkM7QUFGSixTQU1FLG9EQUFDLCtDQUFELGVBQ01OLFNBRE4sRUFFTyxLQUFLN0UsS0FBTCxDQUFXcUQsRUFBWCxJQUFpQjtBQUNwQkEsVUFBRSxFQUFFLEtBQUtyRCxLQUFMLENBQVdxRCxFQUFYLEdBQWdCO0FBREEsT0FGeEI7QUFLRSxXQUFHLEVBQUUsS0FBS3BELE9BTFo7QUFNRSxnQkFBUSxFQUNOLEtBQUtELEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JULE1BQWhCLEdBQXlCLENBQXpCLEdBQTZCLEtBQTdCLEdBQXFDLEtBQUtuQixLQUFMLENBQVdpRSxRQVBwRDtBQVNFLGlCQUFTLEVBQ1AsNkJBQ0NZLFNBQVMsQ0FBQ0ssU0FBVixHQUFzQkwsU0FBUyxDQUFDSyxTQUFoQyxHQUE0QyxFQUQ3QyxDQVZKO0FBYUUsaUJBQVMsRUFBRSxLQUFLckUsU0FBTCxDQUFlQyxXQUFmLENBYmI7QUFjRSx1QkFBZSxFQUFFLEtBQUtaLG1CQWR4QjtBQWVFLGdCQUFRLEVBQUUsS0FBS3FDLGFBZmpCO0FBZ0JFLGVBQU8sRUFBRSxLQUFLakMsT0FoQmhCO0FBaUJFLGNBQU0sRUFBRSxLQUFLK0IsTUFqQmY7QUFrQkUsYUFBSyxFQUFFLEtBQUsxQixLQUFMLENBQVdDLEtBbEJwQjtBQW1CRSxnQkFBUSxFQUFFLEtBQUtaLEtBQUwsQ0FBV21GLFFBbkJ2QjtBQW9CRSxzQkFBYyxFQUFFLEtBcEJsQjtBQXFCRSxxQkFBYSxFQUFFLElBckJqQjtBQXNCRSxrQkFBVSxFQUFFLEtBQUtuRixLQUFMLENBQVcrRCxVQXRCekI7QUF1QkUsd0JBQWdCLEVBQUUsS0FBSy9ELEtBQUwsQ0FBV2dFO0FBdkIvQixTQU5GLEVBK0JHLEtBQUtyRCxLQUFMLENBQVdILGtCQUFYLElBQWlDLEtBQUtSLEtBQUwsQ0FBV3NGLGVBQTVDLElBQ0Msb0RBQUMsc0VBQUQsZUFDTyxLQUFLdEYsS0FBTCxDQUFXcUQsRUFBWCxJQUFpQjtBQUNwQkEsVUFBRSxFQUFFLEtBQUtyRCxLQUFMLENBQVdxRCxFQUFYLEdBQWdCO0FBREEsT0FEeEI7QUFJRSxnQkFBUSxFQUFFLEtBQUtyRCxLQUFMLENBQVc4QixRQUp2QjtBQUtFLDZCQUFxQixFQUFFLEtBQUtuQixLQUFMLENBQVdNLHFCQUxwQztBQU1FLGVBQU8sRUFBRSxLQUFLTixLQUFMLENBQVc2QyxvQkFOdEI7QUFPRSx3QkFBZ0IsRUFBRSxLQUFLeEQsS0FBTCxDQUFXdUYsMkJBUC9CO0FBUUUsaUJBQVMsRUFBRSxLQUFLNUUsS0FBTCxDQUFXSCxrQkFSeEI7QUFTRSxzQkFBYyxFQUFFLEtBQUtSLEtBQUwsQ0FBV3dGLHlCQVQ3QjtBQVVFLFlBQUksRUFBRTFFLFdBVlI7QUFXRSxrQkFBVSxFQUFFLEtBQUtvQixvQkFYbkI7QUFZRSxzQkFBYyxFQUFFLEtBQUtJLGNBWnZCO0FBYUUsYUFBSyxFQUFFLEtBQUszQixLQUFMLENBQVdDLEtBYnBCO0FBY0UsMEJBQWtCLEVBQ2hCLEtBQUtaLEtBQUwsQ0FBVzhCLFFBQVgsSUFDQSxLQUFLbkIsS0FBTCxDQUFXQyxLQUFYLEtBQXFCLEVBRHJCLEtBRUMsQ0FBQyxLQUFLWixLQUFMLENBQVd1QixZQUFaLElBQ0MsQ0FBQyxLQUFLdkIsS0FBTCxDQUFXdUIsWUFBWCxDQUF3QkMsSUFBeEIsQ0FDQyxVQUFBVCxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ1csSUFBRixLQUFXLE1BQUksQ0FBQ2YsS0FBTCxDQUFXQyxLQUExQjtBQUFBLFNBREYsQ0FISCxNQU1DLENBQUMsS0FBS0QsS0FBTCxDQUFXOEMsbUJBQVosSUFDQyxDQUFDLEtBQUs5QyxLQUFMLENBQVc4QyxtQkFBWCxDQUErQmpDLElBQS9CLENBQ0MsVUFBQVQsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNXLElBQUYsS0FBVyxNQUFJLENBQUNmLEtBQUwsQ0FBV0MsS0FBMUI7QUFBQSxTQURGLENBUEgsS0FVQSxLQUFLRCxLQUFMLENBQVcrQixXQVZYLElBV0Usb0RBQUMscURBQUQsZUFDTyxLQUFLMUMsS0FBTCxDQUFXcUQsRUFBWCxJQUFpQjtBQUNwQkEsWUFBRSxFQUFFLEtBQUtyRCxLQUFMLENBQVdxRCxFQUFYLEdBQWdCO0FBREEsU0FEeEI7QUFJRSxtQkFBUyxFQUFDLDRDQUpaO0FBS0Usa0JBQVEsRUFBRSxJQUxaO0FBTUUsaUJBQU8sRUFBRSxLQUFLdEI7QUFOaEIsWUFRRzRDLFlBQVksQ0FBQzdFLE1BUmhCLFNBUTBCLEtBQUthLEtBQUwsQ0FBV0MsS0FSckM7QUExQk4sU0FoQ0osQ0FwQk4sRUE4RkcsS0FBSzZFLHVCQUFMLEVBOUZILEVBK0ZHLEtBQUt6RixLQUFMLENBQVcwRixLQUFYLElBQ0M7QUFDRSxpQkFBUyxFQUNQLEtBQUsvRSxLQUFMLENBQVdDLEtBQVgsS0FBcUIsRUFBckIsSUFDQSxLQUFLRCxLQUFMLENBQVdKLGFBRFgsSUFFQSxLQUFLUCxLQUFMLENBQVdtRixRQUZYLElBR0EsS0FBS25GLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JULE1BQWhCLElBQTBCLEtBQUtuQixLQUFMLENBQVdvQyxPQUhyQyxHQUlJLGdCQUpKLEdBS0k7QUFQUixTQVVHLEtBQUt1RCxXQUFMLEVBVkgsQ0FoR0osQ0FERixDQURGO0FBa0hEO0FBL01IO0FBQUE7QUFBQSxzQ0FpTjRCO0FBQUEsa0NBQ3FCLEtBQUszRixLQUQxQixDQUNsQjJFLFlBRGtCO0FBQUEsVUFDbEJBLFlBRGtCLHNDQUNIOUUsbUJBREc7QUFFeEIsK0JBQ0tBLG1CQURMLE1BRUs4RSxZQUZMO0FBSUQ7QUF2Tkg7QUFBQTtBQUFBLDhCQW9Xb0IvQyxJQXBXcEIsRUFvV2lDO0FBQzdCLFVBQUllLE1BQU0sR0FBRyxFQUFiOztBQUNBLFVBQUlmLElBQUksQ0FBQ1QsTUFBTCxHQUFjLEtBQUtuQixLQUFMLENBQVdvQyxPQUE3QixFQUFzQztBQUNwQ08sY0FBTSxHQUFHQSxNQUFNLENBQUNkLE1BQVAsQ0FBYyxLQUFLbEIsS0FBTCxDQUFXUixVQUF6QixDQUFUO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFLUSxLQUFMLENBQVdDLEtBQVgsS0FBcUIsRUFBckIsSUFBMkJnQixJQUFJLENBQUNULE1BQUwsS0FBZ0IsQ0FBM0MsSUFBZ0QsS0FBS25CLEtBQUwsQ0FBV2lFLFFBQS9ELEVBQXlFO0FBQ3ZFdEIsY0FBTSxHQUFHQSxNQUFNLENBQUNkLE1BQVAsQ0FBYyxLQUFLN0IsS0FBTCxDQUFXNEYsa0JBQVgsQ0FBOEIzQixRQUE1QyxDQUFUO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFLdEQsS0FBTCxDQUFXQyxLQUFYLElBQW9CLEtBQUtaLEtBQUwsQ0FBVzhCLFFBQS9CLElBQTJDLENBQUMsS0FBS25CLEtBQUwsQ0FBV0osYUFBM0QsRUFBMEU7QUFDeEVvQyxjQUFNLEdBQUdBLE1BQU0sQ0FBQ2QsTUFBUCxDQUFjLEtBQUs3QixLQUFMLENBQVc2RixrQkFBekIsQ0FBVDtBQUNEOztBQUNELFVBQUksS0FBSzdGLEtBQUwsQ0FBV29DLE9BQVgsSUFBc0IsS0FBS3BDLEtBQUwsQ0FBVzRCLElBQVgsSUFBbUIsS0FBSzVCLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JULE1BQXpELENBQUosRUFBc0U7QUFDcEV3QixjQUFNLEdBQUdBLE1BQU0sQ0FBQ2QsTUFBUCxDQUFjLEtBQUs3QixLQUFMLENBQVc4RixxQkFBekIsQ0FBVDtBQUNEOztBQUNELGFBQU9uRCxNQUFNLENBQUNRLE1BQVAsQ0FBYyxVQUFBNEMsQ0FBQztBQUFBLGVBQUlBLENBQUo7QUFBQSxPQUFmLENBQVA7QUFDRDtBQW5YSDtBQUFBO0FBQUEsd0NBcVhxRDtBQUFBOztBQUFBLFVBQXpCQyxVQUF5Qix1RUFBSixFQUFJOztBQUNqRCxVQUFJLEtBQUtoRyxLQUFMLENBQVdVLGlCQUFmLEVBQWtDO0FBQ2hDLFlBQU11RixLQUFLLEdBQUczQyxVQUFVLENBQ3RCO0FBQUEsaUJBQU0sTUFBSSxDQUFDbEQsUUFBTCxDQUFjO0FBQUVvRCxnQ0FBb0IsRUFBRTtBQUF4QixXQUFkLENBQU47QUFBQSxTQURzQixFQUV0QixLQUFLeEQsS0FBTCxDQUFXa0csY0FGVyxDQUF4QjtBQUlBLGFBQUtsRyxLQUFMLENBQVdVLGlCQUFYLENBQTZCc0YsVUFBN0IsRUFBeUNHLElBQXpDLENBQThDLFVBQUExQyxtQkFBbUIsRUFBSTtBQUNuRTJDLHNCQUFZLENBQUNILEtBQUQsQ0FBWjs7QUFDQSxnQkFBSSxDQUFDN0YsUUFBTCxDQUFjO0FBQ1pxRCwrQkFBbUIsRUFBbkJBLG1CQURZO0FBRVpELGdDQUFvQixFQUFFO0FBRlYsV0FBZDtBQUlELFNBTkQ7QUFPRDtBQUNGO0FBbllIO0FBQUE7QUFBQSxxQ0FxWTJCO0FBQUE7O0FBQ3ZCLFVBQU1qQyxZQUFtQixHQUFHLEdBQ3pCTSxNQUR5QixDQUNsQixLQUFLN0IsS0FBTCxDQUFXdUIsWUFBWCxHQUEwQixLQUFLdkIsS0FBTCxDQUFXdUIsWUFBckMsR0FBb0QsRUFEbEMsRUFFekJNLE1BRnlCLENBR3hCLEtBQUtsQixLQUFMLENBQVc4QyxtQkFBWCxHQUFpQyxLQUFLOUMsS0FBTCxDQUFXOEMsbUJBQTVDLEdBQWtFLEVBSDFDLENBQTVCO0FBS0EsVUFBTTRDLFlBQVksR0FBRyxLQUFLckcsS0FBTCxDQUFXc0csa0JBQVgsQ0FDbkIsS0FBSzNGLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixLQUFLRCxLQUFMLENBQVdDLEtBQVgsQ0FBaUIyRixXQUFqQixFQUFuQixHQUFvRCxFQURqQyxFQUVuQmhGLFlBRm1CLENBQXJCO0FBSUEsVUFBSVQsV0FBVyxHQUFHdUYsWUFBWSxDQUMzQmxELE1BRGUsQ0FDUixVQUFBaEIsR0FBRztBQUFBLGVBQUksQ0FBQyxNQUFJLENBQUNuQyxLQUFMLENBQVc0QixJQUFYLENBQWdCNEUsSUFBaEIsQ0FBcUIsVUFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNwRCxFQUFGLEtBQVNsQixHQUFHLENBQUNrQixFQUFqQjtBQUFBLFNBQXRCLENBQUw7QUFBQSxPQURLLEVBRWZxRCxLQUZlLENBRVQsQ0FGUyxFQUVOLEtBQUsxRyxLQUFMLENBQVcyRyxjQUZMLENBQWxCO0FBR0EsYUFBTzdGLFdBQVA7QUFDRDtBQW5aSDtBQUFBO0FBQUEsOEJBcVpvQnFCLEdBclpwQixFQXFaOEJ5RSxLQXJaOUIsRUFxWjZDO0FBQ3pDLFVBQU1DLElBQUksR0FDUiwwR0FDRzFFLEdBQUcsQ0FBQ1QsSUFEUCxFQUVHLENBQUMsS0FBSzFCLEtBQUwsQ0FBV21GLFFBQVosSUFDQyxvREFBQyxxREFBRCxlQUNPLEtBQUtuRixLQUFMLENBQVdxRCxFQUFYLElBQWlCO0FBQ3BCQSxVQUFFLEVBQUUsS0FBS3JELEtBQUwsQ0FBV3FELEVBQVgsR0FBZ0IsT0FBaEIsR0FBMEJ1RCxLQUFLLENBQUNFLFFBQU47QUFEVixPQUR4QjtBQUlFLGdCQUFRLEVBQUUsSUFKWjtBQUtFLGFBQUssRUFBRSxJQUxUO0FBTUUsZUFBTyxFQUFFLEtBQUs3RCxjQUFMLENBQW9CZCxHQUFwQixDQU5YO0FBT0UsaUJBQVMsRUFBQyw4Q0FQWjtBQVFFLGlCQUFTLEVBQUUsbUJBQUE0RSxDQUFDO0FBQUEsaUJBQ1Y7QUFBRyxxQkFBUyxFQUFFQSxDQUFDLENBQUM3QixTQUFoQjtBQUEyQixjQUFFLEVBQUU2QixDQUFDLENBQUMxRCxFQUFqQztBQUFxQyxtQkFBTyxFQUFFMEQsQ0FBQyxDQUFDQztBQUFoRCxhQUNHRCxDQUFDLENBQUNFLFFBREwsQ0FEVTtBQUFBO0FBUmQsVUFjRSxvREFBQyx3R0FBRCxPQWRGLENBSEosQ0FERjtBQXVCQSxVQUFNL0IsU0FBUyxHQUFHRixpREFBVSxDQUFDLGlCQUFELEVBQW9CO0FBQzlDLGdDQUF3QixLQUFLaEYsS0FBTCxDQUFXa0g7QUFEVyxPQUFwQixDQUE1Qjs7QUFHQSxVQUFJLEtBQUtsSCxLQUFMLENBQVdnRCxVQUFmLEVBQTJCO0FBQ3pCLGVBQ0Usb0RBQUMscURBQUQ7QUFDRSxpQkFBTyxFQUFFLEtBQUtELFFBQUwsQ0FBY1osR0FBZCxDQURYO0FBRUUsZUFBSyxFQUFFLElBRlQ7QUFHRSxtQkFBUyxFQUFFK0MsU0FIYjtBQUlFLGFBQUcsRUFBRTBCO0FBSlAsV0FNR0MsSUFOSCxDQURGO0FBVUQ7O0FBQ0QsYUFDRTtBQUFLLGVBQU8sRUFBRSxLQUFLOUQsUUFBTCxDQUFjWixHQUFkLENBQWQ7QUFBa0MsaUJBQVMsRUFBRStDLFNBQTdDO0FBQXdELFdBQUcsRUFBRTBCO0FBQTdELFNBQ0dDLElBREgsQ0FERjtBQUtEO0FBamNIO0FBQUE7QUFBQSxpQ0FxZHVCO0FBQUE7O0FBQ25CLGFBQU8sS0FBSzdHLEtBQUwsQ0FBVzRCLElBQVgsSUFBbUIsS0FBSzVCLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JULE1BQWhCLEdBQXlCLENBQTVDLEdBQ0w7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRyxLQUFLbkIsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQnVGLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBT1IsS0FBUDtBQUFBLGVBQWlCLE1BQUksQ0FBQ1MsU0FBTCxDQUFlRCxJQUFmLEVBQXFCUixLQUFyQixDQUFqQjtBQUFBLE9BQXBCLENBREgsQ0FESyxHQUtMLEtBQUs1RyxLQUFMLENBQVdtRixRQUFYLElBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHLEtBQUtuRixLQUFMLENBQVdzSCx3QkFEZCxDQURGLENBTko7QUFhRDtBQW5lSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsRUFBNkJDLCtEQUE3QjtBQUFheEgsTyxDQUtHeUgsWSxxQkFDVEQsK0RBQVMsQ0FBQ0MsWTtBQUNiQyxVQUFRLEVBQUUsSztBQUNWdkMsV0FBUyxFQUFFLEU7QUFDWHRELE1BQUksRUFBRSxFO0FBQ05MLGNBQVksRUFBRSxFO0FBQ2RhLFNBQU8sRUFBRSxJO0FBQ1RULGVBQWEsRUFBRTtBQUFBLFdBQU1ULFNBQU47QUFBQSxHO0FBQ2ZjLGVBQWEsRUFBRSx1QkFBQTBGLFVBQVU7QUFBQSxXQUN2QkMsT0FBTyxDQUFDQyxPQUFSLENBQWdCO0FBQUVsRyxVQUFJLEVBQUVnRyxVQUFSO0FBQW9CckUsUUFBRSxFQUFFLElBQUl3RSxJQUFKLEdBQVdDLE9BQVg7QUFBeEIsS0FBaEIsQ0FEdUI7QUFBQSxHO0FBRXpCakMsb0JBQWtCLEVBQUUsMEY7QUFDcEJDLHVCQUFxQixFQUFFLHFHO0FBQ3ZCUixpQkFBZSxFQUFFLEk7QUFDakJDLDZCQUEyQixFQUFFLFk7QUFDN0JDLDJCQUF5QixFQUFFLHFCO0FBQzNCVSxnQkFBYyxFQUFFLEc7QUFDaEJJLG9CQUFrQixFQUFFLDRCQUFDeUIsSUFBRCxFQUFPbkcsSUFBUDtBQUFBLFdBQ2xCQSxJQUFJLENBQUN1QixNQUFMLENBQVksVUFBQWhCLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNULElBQUosSUFBWVMsR0FBRyxDQUFDVCxJQUFKLENBQVM2RSxXQUFULEdBQXVCUCxVQUF2QixDQUFrQytCLElBQWxDLENBQWhCO0FBQUEsS0FBZixDQURrQjtBQUFBLEc7QUFFcEJwQixnQkFBYyxFQUFFLEM7QUFDaEJ2QyxjQUFZLEVBQUU7O0FBOGNYLElBQU00RCxJQUFJLEdBQUdDLDZFQUFlLENBQVlsSSxPQUFaLENBQTVCO2VBRVFpSSxJO0FBQUE7Ozs7Ozs7Ozs7MEJBcmhCRm5JLG1COzBCQTZDQUUsTzswQkFzZUFpSSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ppQmI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkZTdhYWM2LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExpYnNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbnB1dEdyb3VwIH0gZnJvbSAnLi4vaW5wdXRHcm91cC9JbnB1dEdyb3VwJztcclxuaW1wb3J0IHsgVGV4dCwgVGV4dFByb3BzLCBUZXh0UmF3IH0gZnJvbSAnLi4vdGV4dC9UZXh0JztcclxuaW1wb3J0ICogYXMgUGx1c0ljb24gZnJvbSAnbWF0ZXJpYWwtZGVzaWduLWljb25zL2NvbnRlbnQvc3ZnL3Byb2R1Y3Rpb24vaWNfYWRkX2NpcmNsZV9vdXRsaW5lXzI0cHguc3ZnJztcclxuaW1wb3J0IHtcclxuICBCYXNlSW5wdXRQcm9wcyxcclxuICBCYXNlSW5wdXRTdGF0ZSxcclxuICBCYXNlSW5wdXQsXHJcbiAgVmFsaWRhdGlvbkVycm9yLFxyXG59IGZyb20gJy4uL2Jhc2UvaW5wdXQvQmFzZUlucHV0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCBUYWdzU3VnZ2VzdGlvbnMgZnJvbSAnLi9zdWJDb21wb25lbnRzL1RhZ3NTdWdnZXN0aW9ucyc7XHJcbmltcG9ydCB7IHdpdGhGb3JtQ29udGV4dCB9IGZyb20gJy4uL2Zvcm0vd2l0aEZvcm1Db250ZXh0JztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG4vLyBNaXNjXHJcbmV4cG9ydCB0eXBlIFRhZyA9IHtcclxuICBpZDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0VHJhbnNsYXRpb25zID0ge1xyXG4gIGFkZE5ldzogJ0FkZCBuZXcnLFxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgVGFnc1RyYW5zbGF0aW9ucyA9IHR5cGVvZiBkZWZhdWx0VHJhbnNsYXRpb25zO1xyXG5cclxuZXhwb3J0IHR5cGUgVGFnc1Byb3BzID0ge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgdGFnczogVGFnW107XHJcbiAgZXhpc3RpbmdUYWdzPzogVGFnW107XHJcbiAgZmV0Y2hFeGlzdGluZ1RhZ3M/OiAodGV4dDogc3RyaW5nKSA9PiBQcm9taXNlPFRhZ1tdPjtcclxuICBvblRhZ3NDaGFuZ2VkOiAobmV3VGFnczogVGFnW10pID0+IHZvaWQ7XHJcbiAgb25OZXdUYWdBZGRlZD86IChuZXdUYWdOYW1lOiBzdHJpbmcpID0+IFByb21pc2U8VGFnPjtcclxuICBvblRhZ0NsaWNrPzogKHRhZzogVGFnKSA9PiB2b2lkO1xyXG4gIHNob3dDaGlwcz86IGJvb2xlYW47XHJcbiAgYWxsb3dOZXc/OiBib29sZWFuO1xyXG4gIGFkZE5ld09uQmx1cj86IGJvb2xlYW47XHJcbiAgdGV4dFByb3BzPzogVGV4dFByb3BzO1xyXG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcclxuICByZWFkb25seUVtcHR5UGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgbWF4VGFncz86IG51bWJlcjtcclxuICB2YWx1ZU5vdEFkZGVkRXJyb3I/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBtYXhUYWdzU3VycGFzc2VkRXJyb3I/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBzaG93U3VnZ2VzdGlvbnM/OiBib29sZWFuO1xyXG4gIHN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBsb2FkaW5nRGVsYXlNcz86IG51bWJlcjtcclxuICBmaWx0ZXJFeGlzdGluZ1RhZ3M/OiAodGV4dDogc3RyaW5nLCBleGlzdGluZ1RhZ3M6IFRhZ1tdKSA9PiBUYWdbXTtcclxuICBtYXhTdWdnZXN0aW9ucz86IG51bWJlcjtcclxuICB0cmFuc2xhdGlvbnM/OiBUYWdzVHJhbnNsYXRpb25zO1xyXG59ICYgQmFzZUlucHV0UHJvcHM8SFRNTElucHV0RWxlbWVudD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhZ3NTdGF0ZSBleHRlbmRzIEJhc2VJbnB1dFN0YXRlIHtcclxuICB0ZXh0SXNGb2N1c2VkOiBib29sZWFuO1xyXG4gIHRleHRFcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdO1xyXG4gIHRleHRJc1ZhbGlkOiBib29sZWFuO1xyXG4gIHN1Z2dlc3Rpb25zVmlzaWJsZTogYm9vbGVhbjtcclxuICBmZXRjaGVkRXhpc3RpbmdUYWdzOiBUYWdbXTtcclxuICBmZXRjaGluZ0V4aXN0aW5nVGFnczogYm9vbGVhbjtcclxuICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbnR5cGUgSW5qZWN0ZWRQcm9wcyA9IHt9O1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhZ3NSYXcgZXh0ZW5kcyBCYXNlSW5wdXQ8XHJcbiAgVGFnc1Byb3BzICYgSW5qZWN0ZWRQcm9wcyxcclxuICBUYWdzU3RhdGUsXHJcbiAgSFRNTElucHV0RWxlbWVudFxyXG4+IHtcclxuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogVGFnc1Byb3BzID0ge1xyXG4gICAgLi4uQmFzZUlucHV0LmRlZmF1bHRQcm9wcyxcclxuICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgIGNsYXNzTmFtZTogJycsXHJcbiAgICB0YWdzOiBbXSxcclxuICAgIGV4aXN0aW5nVGFnczogW10sXHJcbiAgICBtYXhUYWdzOiAxMDAwLFxyXG4gICAgb25UYWdzQ2hhbmdlZDogKCkgPT4gdW5kZWZpbmVkLFxyXG4gICAgb25OZXdUYWdBZGRlZDogbmV3VGFnTmFtZSA9PlxyXG4gICAgICBQcm9taXNlLnJlc29sdmUoeyBuYW1lOiBuZXdUYWdOYW1lLCBpZDogbmV3IERhdGUoKS5nZXRUaW1lKCkgfSksXHJcbiAgICB2YWx1ZU5vdEFkZGVkRXJyb3I6IDxzcGFuPllvdSBmb3Jnb3QgdG8gYWRkIHRhZzwvc3Bhbj4sXHJcbiAgICBtYXhUYWdzU3VycGFzc2VkRXJyb3I6IDxzcGFuPk1heGltdW0gbnVtYmVyIG9mIHRhZ3Mgc3VycGFzc2VkPC9zcGFuPixcclxuICAgIHNob3dTdWdnZXN0aW9uczogdHJ1ZSxcclxuICAgIHN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudDogJ0xvYWRpbmcuLi4nLFxyXG4gICAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudDogJ05vIGV4aXN0aW5nIHRhZ3MuLi4nLFxyXG4gICAgbG9hZGluZ0RlbGF5TXM6IDUwMCxcclxuICAgIGZpbHRlckV4aXN0aW5nVGFnczogKHRleHQsIHRhZ3MpID0+XHJcbiAgICAgIHRhZ3MuZmlsdGVyKHRhZyA9PiB0YWcubmFtZSAmJiB0YWcubmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgodGV4dCkpLFxyXG4gICAgbWF4U3VnZ2VzdGlvbnM6IDUsXHJcbiAgICBhZGROZXdPbkJsdXI6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSB0ZXh0UmVmOiBSZWFjdC5SZWZPYmplY3Q8VGV4dFJhdz47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBUYWdzUHJvcHMgJiBJbmplY3RlZFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICB0ZXh0RXJyb3JzOiBbXSxcclxuICAgICAgdGV4dElzRm9jdXNlZDogZmFsc2UsXHJcbiAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBmYWxzZSxcclxuICAgICAgdGV4dElzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICBmZXRjaGVkRXhpc3RpbmdUYWdzOiBbXSxcclxuICAgIH07XHJcbiAgICB0aGlzLnRleHRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlID0gdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb2N1cygpIHtcclxuICAgIGlmICh0aGlzLnRleHRSZWYuY3VycmVudCkge1xyXG4gICAgICB0aGlzLnRleHRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wczogVGFnc1Byb3BzICYgSW5qZWN0ZWRQcm9wcykge1xyXG4gICAgaWYgKFxyXG4gICAgICBvbGRQcm9wcy50YWdzICE9PSB0aGlzLnByb3BzLnRhZ3MgfHxcclxuICAgICAgb2xkUHJvcHMudmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy52YWxpZGF0b3JzIHx8XHJcbiAgICAgIG9sZFByb3BzLmN1c3RvbVZhbGlkYXRvcnMgIT09IHRoaXMucHJvcHMuY3VzdG9tVmFsaWRhdG9ycyB8fFxyXG4gICAgICBvbGRQcm9wcy5yZXF1aXJlZCAhPT0gdGhpcy5wcm9wcy5yZXF1aXJlZFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKHRoaXMucHJvcHMudGFncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlQ2xpY2tPdXRzaWRlKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmIChcclxuICAgICAgIXRoaXMuY29udGFpbmVyUmVmLmN1cnJlbnQgfHxcclxuICAgICAgdGhpcy5jb250YWluZXJSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudClcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5hZGROZXdPbkJsdXIgJiYgdGhpcy5zdGF0ZS52YWx1ZSkge1xyXG4gICAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHRoaXMuZ2V0U3VnZ2VzdGlvbnMoKTtcclxuICAgICAgY29uc3QgZXhpc3RpbmcgPSBzdWdnZXN0aW9ucy5maW5kKHMgPT4gcy5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgdGhpcy5vblN1Z2dlc3Rpb25TZWxlY3RlZChleGlzdGluZyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5hbGxvd05ldykge1xyXG4gICAgICAgIHRoaXMuYWRkTmV3VGFnKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0VHJhbnNsYXRpb25zKCk7XHJcbiAgICBjb25zdCB0ZXh0UHJvcHMgPSB0aGlzLnByb3BzLnRleHRQcm9wcyA/IHRoaXMucHJvcHMudGV4dFByb3BzIDoge307XHJcbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHRoaXMuZ2V0U3VnZ2VzdGlvbnMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxJbnB1dEdyb3VwIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSB0b29sdGlwPXt0aGlzLnByb3BzLnRvb2x0aXB9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICdpbnB1dF9fYmFzZSB0YWdzLWlucHV0JyxcclxuICAgICAgICAgICAgdGhpcy5nZXRWYWxpZGF0aW9uQ2xhc3MoKSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAndGFncy1pbnB1dC0tcmVhZE9ubHknOiB0aGlzLnByb3BzLnJlYWRPbmx5LFxyXG4gICAgICAgICAgICAgICd0YWdzLWlucHV0LS1oYXNQbGFjZWhvbGRlcic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRleHRQcm9wcyAmJiB0aGlzLnByb3BzLnRleHRQcm9wcy5wbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHJlZj17dGhpcy5jb250YWluZXJSZWZ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RoaXMucmVuZGVyVGFncygpfVxyXG4gICAgICAgICAgeyghdGhpcy5wcm9wcy5tYXhUYWdzIHx8XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWF4VGFncyA+ICh0aGlzLnByb3BzLnRhZ3MgJiYgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCkpICYmXHJcbiAgICAgICAgICAgICF0aGlzLnByb3BzLnJlYWRPbmx5ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAndGFncy1pbnB1dF9fdGFnc19fd3JhcHBlciAnICtcclxuICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMucmVhZE9ubHkgPyAnZmlsbGVkICcgOiAnJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICB7Li4udGV4dFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy10ZXh0LWlucHV0JyxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy50ZXh0UmVmfVxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRoaXMucHJvcHMucmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICd0YWdzLWlucHV0X190ZXh0LWlucHV0ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICh0ZXh0UHJvcHMuY2xhc3NOYW1lID8gdGV4dFByb3BzLmNsYXNzTmFtZSA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd24oc3VnZ2VzdGlvbnMpfVxyXG4gICAgICAgICAgICAgICAgICBvbkVycm9yc0NoYW5nZWQ9e3RoaXMub25UZXh0RXJyb3JzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UZXh0Q2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZE9ubHl9XHJcbiAgICAgICAgICAgICAgICAgIHNob3dWYWxpZGF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgaWdub3JlQ29udGV4dD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17dGhpcy5wcm9wcy52YWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgICBjdXN0b21WYWxpZGF0b3JzPXt0aGlzLnByb3BzLmN1c3RvbVZhbGlkYXRvcnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlICYmIHRoaXMucHJvcHMuc2hvd1N1Z2dlc3Rpb25zICYmIChcclxuICAgICAgICAgICAgICAgICAgPFRhZ3NTdWdnZXN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctdGV4dC1pbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RoaXMucHJvcHMuYWxsb3dOZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uPXt0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmZldGNoaW5nRXhpc3RpbmdUYWdzfVxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmdDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZT17dGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgRW1wdHlDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICB0YWdzPXtzdWdnZXN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGVkPXt0aGlzLm9uU3VnZ2VzdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tPdXRzaWRlPXt0aGlzLm9uQ2xpY2tPdXRzaWRlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIEFkZE5ld1RhZ0NvbXBvbmVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFsbG93TmV3ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnByb3BzLmV4aXN0aW5nVGFncyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IGUubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnN0YXRlLmZldGNoZWRFeGlzdGluZ1RhZ3MgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gZS5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRleHRJc1ZhbGlkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctYWRkLW5ldy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3N1Z2dlc3Rpb24gdGFncy1pbnB1dF9fYWRkLW5ld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGROZXdUYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zLmFkZE5ld30gXCJ7dGhpcy5zdGF0ZS52YWx1ZX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAge3RoaXMucmVuZGVyRGVmYXVsdFZhbGlkYXRpb24oKX1cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsICYmIChcclxuICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFsdWUgIT09ICcnIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRleHRJc0ZvY3VzZWQgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVhZE9ubHkgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggPj0gdGhpcy5wcm9wcy5tYXhUYWdzXHJcbiAgICAgICAgICAgICAgICAgID8gJ2xhYmVsLS1mb2N1c2VkJ1xyXG4gICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyTGFiZWwoKX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFRyYW5zbGF0aW9ucygpIHtcclxuICAgIGxldCB7IHRyYW5zbGF0aW9ucyA9IGRlZmF1bHRUcmFuc2xhdGlvbnMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5kZWZhdWx0VHJhbnNsYXRpb25zLFxyXG4gICAgICAuLi50cmFuc2xhdGlvbnMsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblRleHRFcnJvcnNDaGFuZ2VkID0gKHRleHRFcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHsgdGV4dEVycm9ycyB9KSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuXHJcbiAgcHJpdmF0ZSBvbkZvY3VzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgeyB0ZXh0SXNGb2N1c2VkOiB0cnVlLCBzdWdnZXN0aW9uc1Zpc2libGU6IHRydWUsIHRvdWNoZWQ6IHRydWUgfSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3ModGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbktleURvd24gPSAoc3VnZ2VzdGlvbnM6IFRhZ1tdKSA9PiBhc3luYyBlID0+IHtcclxuICAgIGlmIChcclxuICAgICAgZS5rZXkgPT09ICdFbnRlcicgJiZcclxuICAgICAgKHRoaXMuc3RhdGUudmFsdWUgIT09ICcnIHx8XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gIT09IHVuZGVmaW5lZCkgJiZcclxuICAgICAgdGhpcy5zdGF0ZS50ZXh0RXJyb3JzLmxlbmd0aCA9PT0gMFxyXG4gICAgKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgY29uc3QgZXhpc3RpbmdUYWcgPVxyXG4gICAgICAgIHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MuZmluZChldCA9PiBldC5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQoXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MuY29uY2F0KHN1Z2dlc3Rpb25zW3RoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uXSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycsIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXhpc3RpbmdUYWcpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQodGhpcy5wcm9wcy50YWdzLmNvbmNhdChleGlzdGluZ1RhZykpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmFsbG93TmV3KSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hZGROZXdUYWcoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc3VnZ2VzdGlvbnMubGVuZ3RoID4gMCAmJiB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSkge1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICAgIGNvbnN0IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSAwXHJcbiAgICAgICAgICAgID8gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uIC0gMTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgIGNvbnN0IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSBzdWdnZXN0aW9ucy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICsgMTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgYWRkTmV3VGFnID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFnID0gYXdhaXQgdGhpcy5wcm9wcy5vbk5ld1RhZ0FkZGVkKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgaWYgKG5ld1RhZykge1xyXG4gICAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQoXHJcbiAgICAgICAgdGhpcy5wcm9wcy50YWdzID8gdGhpcy5wcm9wcy50YWdzLmNvbmNhdChuZXdUYWcpIDogW25ld1RhZ11cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycsIHRleHRFcnJvcnM6IFtdIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvblN1Z2dlc3Rpb25TZWxlY3RlZCA9ICh0YWc6IFRhZykgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKHRoaXMucHJvcHMudGFncy5jb25jYXQodGFnKSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7IHZhbHVlOiAnJywgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsIHRleHRFcnJvcnM6IFtdIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhdGhpcy5wcm9wcy5tYXhUYWdzICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoICsgMSA8IHRoaXMucHJvcHMubWF4VGFnc1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25CbHVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHRleHRJc0ZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25DbGlja091dHNpZGUgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcblxyXG4gIHByaXZhdGUgb25UZXh0Q2hhbmdlZCA9IChcclxuICAgIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LFxyXG4gICAgaXNWYWxpZDogYm9vbGVhblxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7XHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgaXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICB0ZXh0SXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IHRydWUsXHJcbiAgICAgIH0pLFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMgPSAodGFnczogVGFnW10gPSB0aGlzLnByb3BzLnRhZ3MpID0+IHtcclxuICAgIGxldCBlcnJvcnMgPSB0aGlzLmdldEVycm9ycyh0YWdzKTtcclxuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldEludmFsaWQoZXJyb3JzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsaWQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGdldEVycm9ycyh0YWdzOiBUYWdbXSkge1xyXG4gICAgbGV0IGVycm9ycyA9IFtdO1xyXG4gICAgaWYgKHRhZ3MubGVuZ3RoIDwgdGhpcy5wcm9wcy5tYXhUYWdzKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5zdGF0ZS50ZXh0RXJyb3JzKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyAmJiB0YWdzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLnJlcXVpcmVkKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5wcm9wcy5lcnJvcnNUcmFuc2xhdGlvbnMucmVxdWlyZWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgJiYgdGhpcy5wcm9wcy5hbGxvd05ldyAmJiAhdGhpcy5zdGF0ZS50ZXh0SXNGb2N1c2VkKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5wcm9wcy52YWx1ZU5vdEFkZGVkRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvcHMubWF4VGFncyA8ICh0aGlzLnByb3BzLnRhZ3MgJiYgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCkpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnByb3BzLm1heFRhZ3NTdXJwYXNzZWRFcnJvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3JzLmZpbHRlcihpID0+IGkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmZXRjaEV4aXN0aW5nVGFncyhzdGFydHNXaXRoOiBzdHJpbmcgPSAnJykge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZmV0Y2hFeGlzdGluZ1RhZ3MpIHtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmZXRjaGluZ0V4aXN0aW5nVGFnczogdHJ1ZSB9KSxcclxuICAgICAgICB0aGlzLnByb3BzLmxvYWRpbmdEZWxheU1zXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hFeGlzdGluZ1RhZ3Moc3RhcnRzV2l0aCkudGhlbihmZXRjaGVkRXhpc3RpbmdUYWdzID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZmV0Y2hlZEV4aXN0aW5nVGFncyxcclxuICAgICAgICAgIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFN1Z2dlc3Rpb25zKCkge1xyXG4gICAgY29uc3QgZXhpc3RpbmdUYWdzOiBUYWdbXSA9IFtdXHJcbiAgICAgIC5jb25jYXQodGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgPyB0aGlzLnByb3BzLmV4aXN0aW5nVGFncyA6IFtdKVxyXG4gICAgICAuY29uY2F0KFxyXG4gICAgICAgIHRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyA/IHRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyA6IFtdXHJcbiAgICAgICk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFRhZ3MgPSB0aGlzLnByb3BzLmZpbHRlckV4aXN0aW5nVGFncyhcclxuICAgICAgdGhpcy5zdGF0ZS52YWx1ZSA/IHRoaXMuc3RhdGUudmFsdWUudG9Mb3dlckNhc2UoKSA6ICcnLFxyXG4gICAgICBleGlzdGluZ1RhZ3NcclxuICAgICk7XHJcbiAgICBsZXQgc3VnZ2VzdGlvbnMgPSBmaWx0ZXJlZFRhZ3NcclxuICAgICAgLmZpbHRlcih0YWcgPT4gIXRoaXMucHJvcHMudGFncy5zb21lKHQgPT4gdC5pZCA9PT0gdGFnLmlkKSlcclxuICAgICAgLnNsaWNlKDAsIHRoaXMucHJvcHMubWF4U3VnZ2VzdGlvbnMpO1xyXG4gICAgcmV0dXJuIHN1Z2dlc3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJUYWcodGFnOiBUYWcsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGJvZHkgPSAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge3RhZy5uYW1lfVxyXG4gICAgICAgIHshdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRhZy0nICsgaW5kZXgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIGNpcmN1bGFyPXt0cnVlfVxyXG4gICAgICAgICAgICBibGFuaz17dHJ1ZX1cclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy50YWdSZW1vdmVDbGljayh0YWcpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xIHRyYW5zZm9ybS1yb3RhdGUtLTQ1IGxpbmUtaGVpZ2h0LS0wIHAtMFwiXHJcbiAgICAgICAgICAgIENvbXBvbmVudD17cCA9PiAoXHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtwLmNsYXNzTmFtZX0gaWQ9e3AuaWR9IG9uQ2xpY2s9e3Aub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICB7cC5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQbHVzSWNvbiAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygndGFncy1pbnB1dF9fdGFnJywge1xyXG4gICAgICAndGFncy1pbnB1dF9fdGFnLWNoaXAnOiB0aGlzLnByb3BzLnNob3dDaGlwcyxcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25UYWdDbGljaykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudGFnQ2xpY2sodGFnKX1cclxuICAgICAgICAgIHNtYWxsPXt0cnVlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnRhZ0NsaWNrKHRhZyl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e2luZGV4fT5cclxuICAgICAgICB7Ym9keX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0YWdDbGljayA9ICh0YWc6IFRhZykgPT4gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ0NsaWNrICYmIHRoaXMucHJvcHMub25UYWdDbGljayh0YWcpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdGFnUmVtb3ZlQ2xpY2sgPSAodGFnOiBUYWcpID0+IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IG5ld1RhZ3MgPSB0aGlzLnByb3BzLnRhZ3MuZmlsdGVyKHN2ID0+IHN2LmlkICE9PSB0YWcuaWQpO1xyXG4gICAgaWYgKG5ld1RhZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5mb2N1cygpLCA1MCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkICYmIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZChuZXdUYWdzKTtcclxuICAgIHRoaXMuaGFuZGxlRXJyb3JzKG5ld1RhZ3MpO1xyXG4gICAgLy8gdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyVGFncygpIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLnRhZ3MgJiYgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnX193cmFwcGVyXCI+XHJcbiAgICAgICAge3RoaXMucHJvcHMudGFncy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB0aGlzLnJlbmRlclRhZyhpdGVtLCBpbmRleCkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgOiAoXHJcbiAgICAgIHRoaXMucHJvcHMucmVhZE9ubHkgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnX193cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3RhZ1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5yZWFkb25seUVtcHR5UGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUYWdzID0gd2l0aEZvcm1Db250ZXh0PFRhZ3NQcm9wcz4oVGFnc1Jhdyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdzO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3ZhbGlkYXRvcnMvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrYm94JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2R5bmFtaWNTdWJtaXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvZm9ybSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9pbnB1dEdyb3VwJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2lucHV0SGVhZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL21vbmV5L01vbmV5JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL29wZW5pbmdIb3Vycy9vcGVuaW5nSG91cnNEYXknO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvb3BlbmluZ0hvdXJzL29wZW5pbmdIb3Vyc1NwZWNpYWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvb3BlbmluZ0hvdXJzL29wZW5pbmdIb3Vyc1dlZWsnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW9Db250YWluZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0L1NlbGVjdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9zdWJtaXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGFncyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90ZXh0JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RleHRBcmVhJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RpbWUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGltZVNwYW4nO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9