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

    if (props.debounceFetchExisting) {
      var debounce = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");

      _this.fetchExistingTags = debounce(_this.fetchExistingTags, 500, {
        leading: true,
        trailing: true
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9UYWdzLnRzeCJdLCJuYW1lcyI6WyJkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyIsImRlZmF1bHRCYXNlVHJhbnNsYXRpb25zIiwiYWRkTmV3IiwiVGFnc1JhdyIsInByb3BzIiwidGV4dFJlZiIsInN1Z2dlc3Rpb25zUmVmIiwib25UZXh0RXJyb3JzQ2hhbmdlZCIsInRleHRFcnJvcnMiLCJzZXRTdGF0ZSIsImhhbmRsZUVycm9ycyIsIm9uRm9jdXMiLCJ0ZXh0SXNGb2N1c2VkIiwic3VnZ2VzdGlvbnNWaXNpYmxlIiwidG91Y2hlZCIsImZldGNoRXhpc3RpbmdUYWdzIiwic3RhdGUiLCJ2YWx1ZSIsIm9uS2V5RG93biIsInN1Z2dlc3Rpb25zIiwiZSIsImtleSIsInByZXNlbGVjdGVkU3VnZ2VzdGlvbiIsInVuZGVmaW5lZCIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZXhpc3RpbmdUYWciLCJleGlzdGluZ1RhZ3MiLCJmaW5kIiwiZXQiLCJuYW1lIiwib25UYWdzQ2hhbmdlZCIsInRhZ3MiLCJjb25jYXQiLCJhbGxvd05ldyIsImFkZE5ld1RhZyIsIm9uTmV3VGFnQWRkZWQiLCJuZXdUYWciLCJvblN1Z2dlc3Rpb25TZWxlY3RlZCIsInRhZyIsIm5ld1RhZ3MiLCJpc01heCIsIm1heFRhZ3MiLCJmaW5hbFZhbHVlIiwib25CbHVyIiwib25DbGlja091dHNpZGUiLCJvblRleHRDaGFuZ2VkIiwiaXNWYWxpZCIsInRhcmdldCIsInRleHRJc1ZhbGlkIiwiZXJyb3JzIiwiZ2V0RXJyb3JzIiwic2V0SW52YWxpZCIsInNldFZhbGlkIiwidGFnQ2xpY2siLCJvblRhZ0NsaWNrIiwidGFnUmVtb3ZlQ2xpY2siLCJmaWx0ZXIiLCJzdiIsImlkIiwiZmV0Y2hpbmdFeGlzdGluZ1RhZ3MiLCJmZXRjaGVkRXhpc3RpbmdUYWdzIiwiUmVhY3QiLCJoYW5kbGVDbGlja091dHNpZGUiLCJiaW5kIiwiZGVib3VuY2VGZXRjaEV4aXN0aW5nIiwiZGVib3VuY2UiLCJyZXF1aXJlIiwibGVhZGluZyIsInRyYWlsaW5nIiwiY3VycmVudCIsImZvY3VzIiwib2xkUHJvcHMiLCJ2YWxpZGF0b3JzIiwiY3VzdG9tVmFsaWRhdG9ycyIsInJlcXVpcmVkIiwiY29udGFpbmVyUmVmIiwiY29udGFpbnMiLCJhZGROZXdPbkJsdXIiLCJnZXRTdWdnZXN0aW9ucyIsImV4aXN0aW5nIiwicyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0cmFuc2xhdGlvbnMiLCJnZXRUcmFuc2xhdGlvbnMiLCJ0ZXh0UHJvcHMiLCJ0aXRsZSIsInRvb2x0aXAiLCJjbGFzc05hbWVzIiwiZ2V0VmFsaWRhdGlvbkNsYXNzIiwiY2xhc3NOYW1lIiwicmVhZE9ubHkiLCJwbGFjZWhvbGRlciIsInJlbmRlclRhZ3MiLCJzaG93U3VnZ2VzdGlvbnMiLCJzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQiLCJzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50Iiwid2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudCIsIm1pbkxldHRlcnNUb0ZldGNoIiwicG9wcGVyUHJvcHMiLCJyZW5kZXJEZWZhdWx0VmFsaWRhdGlvbiIsImxhYmVsIiwicmVuZGVyTGFiZWwiLCJ2YWx1ZU5vdEFkZGVkRXJyb3IiLCJtYXhUYWdzU3VycGFzc2VkRXJyb3IiLCJpIiwic3RhcnRzV2l0aCIsInRpbWVyIiwic2V0VGltZW91dCIsImxvYWRpbmdEZWxheU1zIiwidGhlbiIsImNsZWFyVGltZW91dCIsImZpbHRlcmVkVGFncyIsImZpbHRlckV4aXN0aW5nVGFncyIsInRvTG93ZXJDYXNlIiwiYWxsb3dTYW1lVGFnTXVsdGlwbGVUaW1lcyIsInNvbWUiLCJ0Iiwic2xpY2UiLCJtYXhTdWdnZXN0aW9ucyIsImluZGV4IiwiYm9keSIsInRvU3RyaW5nIiwicCIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsInNob3dDaGlwcyIsIm1hcCIsIml0ZW0iLCJyZW5kZXJUYWciLCJyZWFkb25seUVtcHR5UGxhY2Vob2xkZXIiLCJCYXNlSW5wdXQiLCJkZWZhdWx0UHJvcHMiLCJkaXNhYmxlZCIsIm5ld1RhZ05hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsIkRhdGUiLCJnZXRUaW1lIiwidGV4dCIsIlRhZ3MiLCJ3aXRoVGhlbWVDb250ZXh0Iiwid2l0aEZvcm1Db250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU08sSUFBTUEsdUJBQXVCLHFCQUMvQkMsNkVBRCtCO0FBRWxDQyxRQUFNLEVBQUU7QUFGMEIsRUFBN0I7QUFrREEsSUFBTUMsT0FBYjtBQUFBO0FBQUE7QUFBQTs7QUFrQ0UsbUJBQVlDLEtBQVosRUFBOEM7QUFBQTs7QUFBQTs7QUFDNUMsaUZBQU1BLEtBQU47QUFENEMsVUFIdENDLE9BR3NDO0FBQUEsVUFGdENDLGNBRXNDOztBQUFBLFVBeU10Q0MsbUJBek1zQyxHQXlNaEIsVUFBQ0MsVUFBRDtBQUFBLGFBQzVCLE1BQUtDLFFBQUwsQ0FDRTtBQUFBLGVBQU87QUFBRUQsb0JBQVUsRUFBVkE7QUFBRixTQUFQO0FBQUEsT0FERixFQUVFO0FBQUEsZUFBTSxNQUFLRSxZQUFMLEVBQU47QUFBQSxPQUZGLENBRDRCO0FBQUEsS0F6TWdCOztBQUFBLFVBK010Q0MsT0EvTXNDLEdBK001QixZQUFNO0FBQ3RCLFlBQUtGLFFBQUwsQ0FDRTtBQUFFRyxxQkFBYSxFQUFFLElBQWpCO0FBQXVCQywwQkFBa0IsRUFBRSxJQUEzQztBQUFpREMsZUFBTyxFQUFFO0FBQTFELE9BREYsRUFFRTtBQUFBLGVBQU0sTUFBS0osWUFBTCxFQUFOO0FBQUEsT0FGRjs7QUFJQSxZQUFLSyxpQkFBTCxDQUF1QixNQUFL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Qkksb0JBQWtCLEVBQUUsNEJBQUMwQixJQUFELEVBQU83RyxJQUFQO0FBQUEsV0FDbEJBLElBQUksQ0FBQ3lCLE1BQUwsQ0FBWSxVQUFBbEIsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ1QsSUFBSixJQUFZUyxHQUFHLENBQUNULElBQUosQ0FBU3NGLFdBQVQsR0FBdUJSLFVBQXZCLENBQWtDaUMsSUFBbEMsQ0FBaEI7QUFBQSxLQUFmLENBRGtCO0FBQUEsRztBQUVwQnBCLGdCQUFjLEVBQUUsQztBQUNoQjNDLGNBQVksRUFBRSxLO0FBQ2RPLGNBQVksRUFBRXRGLHVCO0FBQ2RxRyxtQkFBaUIsRUFBRTs7QUE2ZWhCLElBQU0wQyxJQUFJLEdBQUdDLHdGQUFnQixDQUNsQ0MsNkVBQWUsQ0FBWTlJLE9BQVosQ0FEbUIsRUFFbEMsTUFGa0MsQ0FBN0I7ZUFLUTRJLEk7QUFBQTs7Ozs7Ozs7OzswQkFoa0JGL0ksdUI7MEJBa0RBRyxPOzBCQXlnQkE0SSxJIiwiZmlsZSI6IjU0YTUzZGUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlic1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElucHV0R3JvdXAgfSBmcm9tICcuLi9pbnB1dEdyb3VwL0lucHV0R3JvdXAnO1xyXG5pbXBvcnQgeyBUZXh0LCBUZXh0UHJvcHMsIFRleHRSYXcgfSBmcm9tICcuLi90ZXh0L1RleHQnO1xyXG5pbXBvcnQgKiBhcyBQbHVzSWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvY29udGVudC9zdmcvcHJvZHVjdGlvbi9pY19hZGRfY2lyY2xlX291dGxpbmVfMjRweC5zdmcnO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VJbnB1dFByb3BzLFxyXG4gIEJhc2VJbnB1dFN0YXRlLFxyXG4gIEJhc2VJbnB1dCxcclxuICBWYWxpZGF0aW9uRXJyb3IsXHJcbiAgZGVmYXVsdEJhc2VUcmFuc2xhdGlvbnMsXHJcbn0gZnJvbSAnLi4vYmFzZS9pbnB1dC9CYXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9idXR0b24vQnV0dG9uJztcclxuaW1wb3J0IFRhZ3NTdWdnZXN0aW9ucyBmcm9tICcuL3N1YkNvbXBvbmVudHMvVGFnc1N1Z2dlc3Rpb25zJztcclxuaW1wb3J0IHsgd2l0aEZvcm1Db250ZXh0IH0gZnJvbSAnLi4vZm9ybS93aXRoRm9ybUNvbnRleHQnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgd2l0aFRoZW1lQ29udGV4dCB9IGZyb20gJy4uL3RoZW1lUHJvdmlkZXIvd2l0aFRoZW1lQ29udGV4dCc7XHJcbmltcG9ydCB7IFBvcHBlclByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyL1BvcHBlcic7XHJcblxyXG4vLyBNaXNjXHJcbmV4cG9ydCB0eXBlIFRhZyA9IHtcclxuICBpZDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyA9IHtcclxuICAuLi5kZWZhdWx0QmFzZVRyYW5zbGF0aW9ucyxcclxuICBhZGROZXc6ICdBZGQgbmV3JyxcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFRhZ3NUcmFuc2xhdGlvbnMgPSBQYXJ0aWFsPHR5cGVvZiBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucz47XHJcblxyXG5leHBvcnQgdHlwZSBUYWdzUHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICB0YWdzOiBUYWdbXTtcclxuICBleGlzdGluZ1RhZ3M/OiBUYWdbXTtcclxuICBmZXRjaEV4aXN0aW5nVGFncz86ICh0ZXh0OiBzdHJpbmcpID0+IFByb21pc2U8VGFnW10+O1xyXG4gIG9uVGFnc0NoYW5nZWQ6IChuZXdUYWdzOiBUYWdbXSkgPT4gdm9pZDtcclxuICBvbk5ld1RhZ0FkZGVkPzogKG5ld1RhZ05hbWU6IHN0cmluZykgPT4gUHJvbWlzZTxUYWc+O1xyXG4gIG9uVGFnQ2xpY2s/OiAodGFnOiBUYWcpID0+IHZvaWQ7XHJcbiAgc2hvd0NoaXBzPzogYm9vbGVhbjtcclxuICBhbGxvd05ldz86IGJvb2xlYW47XHJcbiAgYWRkTmV3T25CbHVyPzogYm9vbGVhbjtcclxuICB0ZXh0UHJvcHM/OiBUZXh0UHJvcHM7XHJcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xyXG4gIHJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcj86IHN0cmluZztcclxuICBtYXhUYWdzPzogbnVtYmVyO1xyXG4gIHZhbHVlTm90QWRkZWRFcnJvcj86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIG1heFRhZ3NTdXJwYXNzZWRFcnJvcj86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHNob3dTdWdnZXN0aW9ucz86IGJvb2xlYW47XHJcbiAgc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHdhaXRpbmdGb3JNb3JlSW5wdXRDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBsb2FkaW5nRGVsYXlNcz86IG51bWJlcjtcclxuICBmaWx0ZXJFeGlzdGluZ1RhZ3M/OiAodGV4dDogc3RyaW5nLCBleGlzdGluZ1RhZ3M6IFRhZ1tdKSA9PiBUYWdbXTtcclxuICBhbGxvd1NhbWVUYWdNdWx0aXBsZVRpbWVzPzogYm9vbGVhbjtcclxuICBtYXhTdWdnZXN0aW9ucz86IG51bWJlcjtcclxuICBwb3BwZXJQcm9wcz86IFBhcnRpYWw8UG9wcGVyUHJvcHM+O1xyXG4gIG1pbkxldHRlcnNUb0ZldGNoPzogbnVtYmVyO1xyXG4gIGRlYm91bmNlRmV0Y2hFeGlzdGluZz86IGJvb2xlYW47XHJcbn0gJiBCYXNlSW5wdXRQcm9wczxIVE1MSW5wdXRFbGVtZW50LCBUYWdzVHJhbnNsYXRpb25zPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFnc1N0YXRlIGV4dGVuZHMgQmFzZUlucHV0U3RhdGUge1xyXG4gIHRleHRJc0ZvY3VzZWQ6IGJvb2xlYW47XHJcbiAgdGV4dEVycm9yczogVmFsaWRhdGlvbkVycm9yW107XHJcbiAgdGV4dElzVmFsaWQ6IGJvb2xlYW47XHJcbiAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBib29sZWFuO1xyXG4gIGZldGNoZWRFeGlzdGluZ1RhZ3M6IFRhZ1tdO1xyXG4gIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBib29sZWFuO1xyXG4gIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj86IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBJbmplY3RlZFByb3BzID0ge307XHJcblxyXG5leHBvcnQgY2xhc3MgVGFnc1JhdyBleHRlbmRzIEJhc2VJbnB1dDxcclxuICBUYWdzUHJvcHMgJiBJbmplY3RlZFByb3BzLFxyXG4gIFRhZ3NTdGF0ZSxcclxuICBIVE1MSW5wdXRFbGVtZW50LFxyXG4gIFRhZ3NUcmFuc2xhdGlvbnNcclxuPiB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFRhZ3NQcm9wcyA9IHtcclxuICAgIC4uLkJhc2VJbnB1dC5kZWZhdWx0UHJvcHMsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBjbGFzc05hbWU6ICcnLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBleGlzdGluZ1RhZ3M6IFtdLFxyXG4gICAgbWF4VGFnczogMTAwMCxcclxuICAgIG9uVGFnc0NoYW5nZWQ6ICgpID0+IHVuZGVmaW5lZCxcclxuICAgIG9uTmV3VGFnQWRkZWQ6IG5ld1RhZ05hbWUgPT5cclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKHsgbmFtZTogbmV3VGFnTmFtZSwgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH0pLFxyXG4gICAgdmFsdWVOb3RBZGRlZEVycm9yOiA8c3Bhbj5Zb3UgZm9yZ290IHRvIGFkZCB0YWc8L3NwYW4+LFxyXG4gICAgbWF4VGFnc1N1cnBhc3NlZEVycm9yOiA8c3Bhbj5NYXhpbXVtIG51bWJlciBvZiB0YWdzIHN1cnBhc3NlZDwvc3Bhbj4sXHJcbiAgICB3YWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50OiA8c3Bhbj5XYWl0aW5nIGZvciBtb3JlIGlucHV0Li4uPC9zcGFuPixcclxuICAgIHNob3dTdWdnZXN0aW9uczogdHJ1ZSxcclxuICAgIHN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudDogJ0xvYWRpbmcuLi4nLFxyXG4gICAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudDogJ05vIGV4aXN0aW5nIHRhZ3MuLi4nLFxyXG4gICAgbG9hZGluZ0RlbGF5TXM6IDUwMCxcclxuICAgIGZpbHRlckV4aXN0aW5nVGFnczogKHRleHQsIHRhZ3MpID0+XHJcbiAgICAgIHRhZ3MuZmlsdGVyKHRhZyA9PiB0YWcubmFtZSAmJiB0YWcubmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgodGV4dCkpLFxyXG4gICAgbWF4U3VnZ2VzdGlvbnM6IDUsXHJcbiAgICBhZGROZXdPbkJsdXI6IGZhbHNlLFxyXG4gICAgdHJhbnNsYXRpb25zOiBkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyxcclxuICAgIG1pbkxldHRlcnNUb0ZldGNoOiAwLFxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdGV4dFJlZjogUmVhY3QuUmVmT2JqZWN0PFRleHRSYXc+O1xyXG4gIHByaXZhdGUgc3VnZ2VzdGlvbnNSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBUYWdzUHJvcHMgJiBJbmplY3RlZFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICB0ZXh0RXJyb3JzOiBbXSxcclxuICAgICAgdGV4dElzRm9jdXNlZDogZmFsc2UsXHJcbiAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBmYWxzZSxcclxuICAgICAgdGV4dElzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICBmZXRjaGVkRXhpc3RpbmdUYWdzOiBbXSxcclxuICAgIH07XHJcbiAgICB0aGlzLnRleHRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuc3VnZ2VzdGlvbnNSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlID0gdGhpcy5oYW5kbGVDbGlja091dHNpZGUuYmluZCh0aGlzKTtcclxuICAgIGlmIChwcm9wcy5kZWJvdW5jZUZldGNoRXhpc3RpbmcpIHtcclxuICAgICAgY29uc3QgZGVib3VuY2UgPSByZXF1aXJlKCdsb2Rhc2guZGVib3VuY2UnKTtcclxuICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncyA9IGRlYm91bmNlKHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MsIDUwMCwge1xyXG4gICAgICAgIGxlYWRpbmc6IHRydWUsXHJcbiAgICAgICAgdHJhaWxpbmc6IHRydWUsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvY3VzKCkge1xyXG4gICAgaWYgKHRoaXMudGV4dFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHRoaXMudGV4dFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKG9sZFByb3BzOiBUYWdzUHJvcHMgJiBJbmplY3RlZFByb3BzKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG9sZFByb3BzLnRhZ3MgIT09IHRoaXMucHJvcHMudGFncyB8fFxyXG4gICAgICBvbGRQcm9wcy52YWxpZGF0b3JzICE9PSB0aGlzLnByb3BzLnZhbGlkYXRvcnMgfHxcclxuICAgICAgb2xkUHJvcHMuY3VzdG9tVmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy5jdXN0b21WYWxpZGF0b3JzIHx8XHJcbiAgICAgIG9sZFByb3BzLnJlcXVpcmVkICE9PSB0aGlzLnByb3BzLnJlcXVpcmVkXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5oYW5kbGVFcnJvcnModGhpcy5wcm9wcy50YWdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVDbGlja091dHNpZGUoZTogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5jb250YWluZXJSZWYuY3VycmVudCB8fFxyXG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KSB8fFxyXG4gICAgICAhdGhpcy5zdWdnZXN0aW9uc1JlZi5jdXJyZW50IHx8XHJcbiAgICAgIHRoaXMuc3VnZ2VzdGlvbnNSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudClcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5hZGROZXdPbkJsdXIgJiYgdGhpcy5zdGF0ZS52YWx1ZSkge1xyXG4gICAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHRoaXMuZ2V0U3VnZ2VzdGlvbnMoKTtcclxuICAgICAgY29uc3QgZXhpc3RpbmcgPSBzdWdnZXN0aW9ucy5maW5kKHMgPT4gcy5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgaWYgKGV4aXN0aW5nKSB7XHJcbiAgICAgICAgdGhpcy5vblN1Z2dlc3Rpb25TZWxlY3RlZChleGlzdGluZyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5hbGxvd05ldykge1xyXG4gICAgICAgIHRoaXMuYWRkTmV3VGFnKCk7XHJcbiAgICAgIH1cclxuICAgIH0gLyogZWxzZSBpZiAodGhpcy5zdGF0ZS52YWx1ZSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnIH0pO1xyXG4gICAgfSovXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSB0aGlzLmdldFRyYW5zbGF0aW9ucyhkZWZhdWx0VGFnc1RyYW5zbGF0aW9ucyk7XHJcbiAgICBjb25zdCB0ZXh0UHJvcHMgPSB0aGlzLnByb3BzLnRleHRQcm9wcyA/IHRoaXMucHJvcHMudGV4dFByb3BzIDoge307XHJcbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHRoaXMuZ2V0U3VnZ2VzdGlvbnMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxJbnB1dEdyb3VwIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSB0b29sdGlwPXt0aGlzLnByb3BzLnRvb2x0aXB9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICdpbnB1dF9fYmFzZSB0YWdzLWlucHV0JyxcclxuICAgICAgICAgICAgdGhpcy5nZXRWYWxpZGF0aW9uQ2xhc3MoKSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAndGFncy1pbnB1dC0tcmVhZE9ubHknOiB0aGlzLnByb3BzLnJlYWRPbmx5LFxyXG4gICAgICAgICAgICAgICd0YWdzLWlucHV0LS1oYXNQbGFjZWhvbGRlcic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRleHRQcm9wcyAmJiB0aGlzLnByb3BzLnRleHRQcm9wcy5wbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHJlZj17dGhpcy5jb250YWluZXJSZWZ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RoaXMucmVuZGVyVGFncygpfVxyXG4gICAgICAgICAgeyghdGhpcy5wcm9wcy5tYXhUYWdzIHx8XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWF4VGFncyA+ICh0aGlzLnByb3BzLnRhZ3MgJiYgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCkpICYmXHJcbiAgICAgICAgICAgICF0aGlzLnByb3BzLnJlYWRPbmx5ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAndGFncy1pbnB1dF9fdGFnc19fd3JhcHBlciAnICtcclxuICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMucmVhZE9ubHkgPyAnZmlsbGVkICcgOiAnJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICB7Li4udGV4dFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy10ZXh0LWlucHV0JyxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy50ZXh0UmVmfVxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRoaXMucHJvcHMucmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICd0YWdzLWlucHV0X190ZXh0LWlucHV0ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICh0ZXh0UHJvcHMuY2xhc3NOYW1lID8gdGV4dFByb3BzLmNsYXNzTmFtZSA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd24oc3VnZ2VzdGlvbnMpfVxyXG4gICAgICAgICAgICAgICAgICBvbkVycm9yc0NoYW5nZWQ9e3RoaXMub25UZXh0RXJyb3JzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UZXh0Q2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZE9ubHl9XHJcbiAgICAgICAgICAgICAgICAgIHNob3dWYWxpZGF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgaWdub3JlQ29udGV4dD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17dGhpcy5wcm9wcy52YWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgICBjdXN0b21WYWxpZGF0b3JzPXt0aGlzLnByb3BzLmN1c3RvbVZhbGlkYXRvcnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlICYmIHRoaXMucHJvcHMuc2hvd1N1Z2dlc3Rpb25zICYmIChcclxuICAgICAgICAgICAgICAgICAgPFRhZ3NTdWdnZXN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctdGV4dC1pbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJSZWY9e3RoaXMuc3VnZ2VzdGlvbnNSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e3RoaXMuY29udGFpbmVyUmVmLmN1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RoaXMucHJvcHMuYWxsb3dOZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uPXt0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmZldGNoaW5nRXhpc3RpbmdUYWdzfVxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmdDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZT17dGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgRW1wdHlDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICBXYWl0aW5nRm9yTW9yZUlucHV0Q29tcG9uZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMud2FpdGluZ0Zvck1vcmVJbnB1dENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc1dhaXRpbmdGb3JNb3JlSW5wdXQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZS5sZW5ndGggPCB0aGlzLnByb3BzLm1pbkxldHRlcnNUb0ZldGNoXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M9e3N1Z2dlc3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0ZWQ9e3RoaXMub25TdWdnZXN0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGlja091dHNpZGU9e3RoaXMub25DbGlja091dHNpZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkTmV3VGFnQ29tcG9uZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWxsb3dOZXcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFsdWUgIT09ICcnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMucHJvcHMuZXhpc3RpbmdUYWdzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmV4aXN0aW5nVGFncy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gZS5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBlLm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGV4dElzVmFsaWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy1hZGQtbmV3LWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fc3VnZ2VzdGlvbiB0YWdzLWlucHV0X19hZGQtbmV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZE5ld1RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnMuYWRkTmV3fSBcInt0aGlzLnN0YXRlLnZhbHVlfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwb3BwZXJQcm9wcz17dGhpcy5wcm9wcy5wb3BwZXJQcm9wc31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJEZWZhdWx0VmFsaWRhdGlvbigpfVxyXG4gICAgICAgICAge3RoaXMucHJvcHMubGFiZWwgJiYgKFxyXG4gICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGV4dElzRm9jdXNlZCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWFkT25seSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA+PSB0aGlzLnByb3BzLm1heFRhZ3NcclxuICAgICAgICAgICAgICAgICAgPyAnbGFiZWwtLWZvY3VzZWQnXHJcbiAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJMYWJlbCgpfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25UZXh0RXJyb3JzQ2hhbmdlZCA9ICh0ZXh0RXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7IHRleHRFcnJvcnMgfSksXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcblxyXG4gIHByaXZhdGUgb25Gb2N1cyA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHsgdGV4dElzRm9jdXNlZDogdHJ1ZSwgc3VnZ2VzdGlvbnNWaXNpYmxlOiB0cnVlLCB0b3VjaGVkOiB0cnVlIH0sXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcbiAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25LZXlEb3duID0gKHN1Z2dlc3Rpb25zOiBUYWdbXSkgPT4gYXN5bmMgZSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGUua2V5ID09PSAnRW50ZXInICYmXHJcbiAgICAgICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyB8fFxyXG4gICAgICAgIHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICE9PSB1bmRlZmluZWQpICYmXHJcbiAgICAgIHRoaXMuc3RhdGUudGV4dEVycm9ycy5sZW5ndGggPT09IDBcclxuICAgICkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nVGFnID1cclxuICAgICAgICB0aGlzLnByb3BzLmV4aXN0aW5nVGFncyAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzLmZpbmQoZXQgPT4gZXQubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKFxyXG4gICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmNvbmNhdChzdWdnZXN0aW9uc1t0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbl0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnLCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGV4aXN0aW5nVGFnKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKHRoaXMucHJvcHMudGFncy5jb25jYXQoZXhpc3RpbmdUYWcpKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5hbGxvd05ldykge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYWRkTmV3VGFnKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHN1Z2dlc3Rpb25zLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUpIHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICBjb25zdCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gMFxyXG4gICAgICAgICAgICA/IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAtIDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICBjb25zdCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiArIDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGFkZE5ld1RhZyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhZyA9IGF3YWl0IHRoaXMucHJvcHMub25OZXdUYWdBZGRlZCh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgIGlmIChuZXdUYWcpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKFxyXG4gICAgICAgIHRoaXMucHJvcHMudGFncyA/IHRoaXMucHJvcHMudGFncy5jb25jYXQobmV3VGFnKSA6IFtuZXdUYWddXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnLCB0ZXh0RXJyb3JzOiBbXSB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25TdWdnZXN0aW9uU2VsZWN0ZWQgPSAodGFnOiBUYWcpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhZ3MgPSB0aGlzLnByb3BzLnRhZ3MuY29uY2F0KHRhZyk7XHJcbiAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQobmV3VGFncyk7XHJcbiAgICBjb25zdCBpc01heCA9IG5ld1RhZ3MubGVuZ3RoID09PSB0aGlzLnByb3BzLm1heFRhZ3M7XHJcbiAgICBjb25zdCBmaW5hbFZhbHVlID0gIXRoaXMucHJvcHMuYWxsb3dOZXcgJiYgIWlzTWF4ID8gdGhpcy5zdGF0ZS52YWx1ZSA6ICcnO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlOiBmaW5hbFZhbHVlLFxyXG4gICAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogaXNNYXggPyBmYWxzZSA6IHRoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlLFxyXG4gICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICAgIHRleHRFcnJvcnM6IFtdLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIXRoaXMucHJvcHMubWF4VGFncyB8fFxyXG4gICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCArIDEgPCB0aGlzLnByb3BzLm1heFRhZ3NcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoZmluYWxWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbkJsdXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dElzRm9jdXNlZDogZmFsc2UsXHJcbiAgICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbkNsaWNrT3V0c2lkZSA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuXHJcbiAgcHJpdmF0ZSBvblRleHRDaGFuZ2VkID0gKFxyXG4gICAgZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXHJcbiAgICBpc1ZhbGlkOiBib29sZWFuXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHtcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBpc1ZhbGlkOiBpc1ZhbGlkLFxyXG4gICAgICAgIHRleHRJc1ZhbGlkOiBpc1ZhbGlkLFxyXG4gICAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgfSksXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcbiAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9ycyA9ICh0YWdzOiBUYWdbXSA9IHRoaXMucHJvcHMudGFncykgPT4ge1xyXG4gICAgbGV0IGVycm9ycyA9IHRoaXMuZ2V0RXJyb3JzKHRhZ3MpO1xyXG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0SW52YWxpZChlcnJvcnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRWYWxpZCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZ2V0RXJyb3JzKHRhZ3M6IFRhZ1tdKSB7XHJcbiAgICBsZXQgZXJyb3JzID0gW107XHJcbiAgICBpZiAodGFncy5sZW5ndGggPCB0aGlzLnByb3BzLm1heFRhZ3MpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnN0YXRlLnRleHRFcnJvcnMpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgIT09ICcnICYmIHRhZ3MubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMucmVxdWlyZWQpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdChcclxuICAgICAgICB0aGlzLmdldFRyYW5zbGF0aW9ucyh0aGlzLnByb3BzLnRyYW5zbGF0aW9ucykucmVxdWlyZWRcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlICYmIHRoaXMucHJvcHMuYWxsb3dOZXcgJiYgIXRoaXMuc3RhdGUudGV4dElzRm9jdXNlZCkge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMucHJvcHMudmFsdWVOb3RBZGRlZEVycm9yKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLm1heFRhZ3MgPCAodGhpcy5wcm9wcy50YWdzICYmIHRoaXMucHJvcHMudGFncy5sZW5ndGgpKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5wcm9wcy5tYXhUYWdzU3VycGFzc2VkRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9ycy5maWx0ZXIoaSA9PiBpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmV0Y2hFeGlzdGluZ1RhZ3Moc3RhcnRzV2l0aDogc3RyaW5nID0gJycpIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5wcm9wcy5mZXRjaEV4aXN0aW5nVGFncyAmJlxyXG4gICAgICBzdGFydHNXaXRoLmxlbmd0aCA+PSB0aGlzLnByb3BzLm1pbkxldHRlcnNUb0ZldGNoXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmZXRjaGluZ0V4aXN0aW5nVGFnczogdHJ1ZSB9KSxcclxuICAgICAgICB0aGlzLnByb3BzLmxvYWRpbmdEZWxheU1zXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hFeGlzdGluZ1RhZ3Moc3RhcnRzV2l0aCkudGhlbihmZXRjaGVkRXhpc3RpbmdUYWdzID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZmV0Y2hlZEV4aXN0aW5nVGFncyxcclxuICAgICAgICAgIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFN1Z2dlc3Rpb25zKCkge1xyXG4gICAgY29uc3QgZXhpc3RpbmdUYWdzOiBUYWdbXSA9IFtdXHJcbiAgICAgIC5jb25jYXQodGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgPyB0aGlzLnByb3BzLmV4aXN0aW5nVGFncyA6IFtdKVxyXG4gICAgICAuY29uY2F0KFxyXG4gICAgICAgIHRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyA/IHRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyA6IFtdXHJcbiAgICAgICk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFRhZ3MgPSB0aGlzLnByb3BzLmZpbHRlckV4aXN0aW5nVGFncyhcclxuICAgICAgdGhpcy5zdGF0ZS52YWx1ZSA/IHRoaXMuc3RhdGUudmFsdWUudG9Mb3dlckNhc2UoKSA6ICcnLFxyXG4gICAgICBleGlzdGluZ1RhZ3NcclxuICAgICk7XHJcbiAgICBsZXQgc3VnZ2VzdGlvbnMgPSBmaWx0ZXJlZFRhZ3NcclxuICAgICAgLmZpbHRlcihcclxuICAgICAgICB0YWcgPT5cclxuICAgICAgICAgIHRoaXMucHJvcHMuYWxsb3dTYW1lVGFnTXVsdGlwbGVUaW1lcyB8fFxyXG4gICAgICAgICAgIXRoaXMucHJvcHMudGFncy5zb21lKHQgPT4gdC5pZCA9PT0gdGFnLmlkKVxyXG4gICAgICApXHJcbiAgICAgIC5zbGljZSgwLCB0aGlzLnByb3BzLm1heFN1Z2dlc3Rpb25zKTtcclxuICAgIHJldHVybiBzdWdnZXN0aW9ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyVGFnKHRhZzogVGFnLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBib2R5ID0gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHt0YWcubmFtZX1cclxuICAgICAgICB7IXRoaXMucHJvcHMucmVhZE9ubHkgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy10YWctJyArIGluZGV4LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBjaXJjdWxhcj17dHJ1ZX1cclxuICAgICAgICAgICAgYmxhbms9e3RydWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudGFnUmVtb3ZlQ2xpY2sodGFnKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMSB0cmFuc2Zvcm0tcm90YXRlLS00NSBsaW5lLWhlaWdodC0tMCBwLTBcIlxyXG4gICAgICAgICAgICBDb21wb25lbnQ9e3AgPT4gKFxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cC5jbGFzc05hbWV9IGlkPXtwLmlkfSBvbkNsaWNrPXtwLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAge3AuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGx1c0ljb24gLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3RhZ3MtaW5wdXRfX3RhZycsIHtcclxuICAgICAgJ3RhZ3MtaW5wdXRfX3RhZy1jaGlwJzogdGhpcy5wcm9wcy5zaG93Q2hpcHMsXHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uVGFnQ2xpY2spIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRhZ0NsaWNrKHRhZyl9XHJcbiAgICAgICAgICBzbWFsbD17dHJ1ZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Ym9keX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy50YWdDbGljayh0YWcpfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAge2JvZHl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdGFnQ2xpY2sgPSAodGFnOiBUYWcpID0+ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25UYWdDbGljayAmJiB0aGlzLnByb3BzLm9uVGFnQ2xpY2sodGFnKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHRhZ1JlbW92ZUNsaWNrID0gKHRhZzogVGFnKSA9PiAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBuZXdUYWdzID0gdGhpcy5wcm9wcy50YWdzLmZpbHRlcihzdiA9PiBzdi5pZCAhPT0gdGFnLmlkKTtcclxuICAgIC8qaWYgKG5ld1RhZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5mb2N1cygpLCA1MCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgIH0pOyovXHJcbiAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKG5ld1RhZ3MpO1xyXG4gICAgdGhpcy5oYW5kbGVFcnJvcnMobmV3VGFncyk7XHJcbiAgICAvLyB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJUYWdzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID4gMCA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdfX3dyYXBwZXJcIj5cclxuICAgICAgICB7dGhpcy5wcm9wcy50YWdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHRoaXMucmVuZGVyVGFnKGl0ZW0sIGluZGV4KSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IChcclxuICAgICAgdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdfX3dyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ3MgPSB3aXRoVGhlbWVDb250ZXh0PFRhZ3NQcm9wcywgSW5zdGFuY2VUeXBlPHR5cGVvZiBUYWdzUmF3Pj4oXHJcbiAgd2l0aEZvcm1Db250ZXh0PFRhZ3NQcm9wcz4oVGFnc1JhdyksXHJcbiAgJ3RhZ3MnXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9