webpackHotUpdate("main",{

/***/ "./src/lib/components/tags/Tags.tsx":
/*!******************************************!*\
  !*** ./src/lib/components/tags/Tags.tsx ***!
  \******************************************/
/*! exports provided: TagsRaw, Tags, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsRaw", function() { return TagsRaw; });
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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

// Libs








 // Misc

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
              if (!(_this.props.addNewOnBlur && _this.props.allowNew && _this.state.value)) {
                _context3.next = 3;
                break;
              }

              _context3.next = 3;
              return _this.addNewTag();

            case 3:
              _this.setState({
                textIsFocused: false,
                preselectedSuggestion: undefined
              }, function () {
                return _this.handleErrors();
              });

            case 4:
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
    key: "render",
    value: function render() {
      var _this2 = this;

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
          return e.name === _this2.state.value;
        })) && (!this.state.fetchedExistingTags || !this.state.fetchedExistingTags.find(function (e) {
          return e.name === _this2.state.value;
        })) && this.state.textIsValid && react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], _extends({}, this.props.id && {
          id: this.props.id + '-add-new-button'
        }, {
          className: "tags-input__suggestion tags-input__add-new",
          dropdown: true,
          onClick: this.addNewTag
        }), "Add new \"", this.state.value, "\"")
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
      var _this3 = this;

      var startsWith = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (this.props.fetchExistingTags) {
        var timer = setTimeout(function () {
          return _this3.setState({
            fetchingExistingTags: true
          });
        }, this.props.loadingDelayMs);
        this.props.fetchExistingTags(startsWith).then(function (fetchedExistingTags) {
          clearTimeout(timer);

          _this3.setState({
            fetchedExistingTags: fetchedExistingTags,
            fetchingExistingTags: false
          });
        });
      }
    }
  }, {
    key: "getSuggestions",
    value: function getSuggestions() {
      var _this4 = this;

      var existingTags = [].concat(this.props.existingTags ? this.props.existingTags : []).concat(this.state.fetchedExistingTags ? this.state.fetchedExistingTags : []);
      var filteredTags = this.props.filterExistingTags(this.state.value ? this.state.value.toLowerCase() : '', existingTags);
      var suggestions = filteredTags.filter(function (tag) {
        return !_this4.props.tags.some(function (t) {
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
      var _this5 = this;

      return this.props.tags && this.props.tags.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "tags-input__tag__wrapper"
      }, this.props.tags.map(function (item, index) {
        return _this5.renderTag(item, index);
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _components_select_Select__WEBPACK_IMPORTED_MODULE_14__["Select"]; });

/* harmony import */ var _components_submit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/submit */ "./src/lib/components/submit/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubmitRaw", function() { return _components_submit__WEBPACK_IMPORTED_MODULE_15__["SubmitRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Submit", function() { return _components_submit__WEBPACK_IMPORTED_MODULE_15__["Submit"]; });

/* harmony import */ var _components_tags__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/tags */ "./src/lib/components/tags/index.tsx");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9UYWdzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbIlRhZ3NSYXciLCJwcm9wcyIsInRleHRSZWYiLCJvblRleHRFcnJvcnNDaGFuZ2VkIiwidGV4dEVycm9ycyIsInNldFN0YXRlIiwiaGFuZGxlRXJyb3JzIiwib25Gb2N1cyIsInRleHRJc0ZvY3VzZWQiLCJzdWdnZXN0aW9uc1Zpc2libGUiLCJ0b3VjaGVkIiwiZmV0Y2hFeGlzdGluZ1RhZ3MiLCJzdGF0ZSIsInZhbHVlIiwib25LZXlEb3duIiwic3VnZ2VzdGlvbnMiLCJlIiwia2V5IiwicHJlc2VsZWN0ZWRTdWdnZXN0aW9uIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJleGlzdGluZ1RhZyIsImV4aXN0aW5nVGFncyIsImZpbmQiLCJldCIsIm5hbWUiLCJvblRhZ3NDaGFuZ2VkIiwidGFncyIsImNvbmNhdCIsImFsbG93TmV3IiwiYWRkTmV3VGFnIiwib25OZXdUYWdBZGRlZCIsIm5ld1RhZyIsIm9uU3VnZ2VzdGlvblNlbGVjdGVkIiwidGFnIiwibWF4VGFncyIsIm9uQmx1ciIsImFkZE5ld09uQmx1ciIsIm9uQ2xpY2tPdXRzaWRlIiwib25UZXh0Q2hhbmdlZCIsImlzVmFsaWQiLCJ0YXJnZXQiLCJ0ZXh0SXNWYWxpZCIsImVycm9ycyIsImdldEVycm9ycyIsInNldEludmFsaWQiLCJzZXRWYWxpZCIsInRhZ0NsaWNrIiwib25UYWdDbGljayIsInRhZ1JlbW92ZUNsaWNrIiwibmV3VGFncyIsImZpbHRlciIsInN2IiwiaWQiLCJzZXRUaW1lb3V0IiwiZm9jdXMiLCJmZXRjaGluZ0V4aXN0aW5nVGFncyIsImZldGNoZWRFeGlzdGluZ1RhZ3MiLCJSZWFjdCIsImN1cnJlbnQiLCJvbGRQcm9wcyIsInZhbGlkYXRvcnMiLCJjdXN0b21WYWxpZGF0b3JzIiwicmVxdWlyZWQiLCJ0ZXh0UHJvcHMiLCJnZXRTdWdnZXN0aW9ucyIsInRpdGxlIiwidG9vbHRpcCIsImNsYXNzTmFtZXMiLCJnZXRWYWxpZGF0aW9uQ2xhc3MiLCJjbGFzc05hbWUiLCJyZWFkT25seSIsInBsYWNlaG9sZGVyIiwiY29udGFpbmVyUmVmIiwicmVuZGVyVGFncyIsInNob3dTdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudCIsInN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQiLCJyZW5kZXJEZWZhdWx0VmFsaWRhdGlvbiIsImxhYmVsIiwicmVuZGVyTGFiZWwiLCJlcnJvcnNUcmFuc2xhdGlvbnMiLCJ2YWx1ZU5vdEFkZGVkRXJyb3IiLCJtYXhUYWdzU3VycGFzc2VkRXJyb3IiLCJpIiwic3RhcnRzV2l0aCIsInRpbWVyIiwibG9hZGluZ0RlbGF5TXMiLCJ0aGVuIiwiY2xlYXJUaW1lb3V0IiwiZmlsdGVyZWRUYWdzIiwiZmlsdGVyRXhpc3RpbmdUYWdzIiwidG9Mb3dlckNhc2UiLCJzb21lIiwidCIsInNsaWNlIiwibWF4U3VnZ2VzdGlvbnMiLCJpbmRleCIsImJvZHkiLCJ0b1N0cmluZyIsInAiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJzaG93Q2hpcHMiLCJtYXAiLCJpdGVtIiwicmVuZGVyVGFnIiwicmVhZG9ubHlFbXB0eVBsYWNlaG9sZGVyIiwiQmFzZUlucHV0IiwiZGVmYXVsdFByb3BzIiwiZGlzYWJsZWQiLCJuZXdUYWdOYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJEYXRlIiwiZ2V0VGltZSIsInRleHQiLCJUYWdzIiwid2l0aEZvcm1Db250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0NBR0E7O0FBMENPLElBQU1BLE9BQWI7QUFBQTtBQUFBO0FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDemZiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZTJlMzQzMC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWJzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW5wdXRHcm91cCB9IGZyb20gJy4uL2lucHV0R3JvdXAvSW5wdXRHcm91cCc7XHJcbmltcG9ydCB7IFRleHQsIFRleHRQcm9wcywgVGV4dFJhdyB9IGZyb20gJy4uL3RleHQvVGV4dCc7XHJcbmltcG9ydCAqIGFzIFBsdXNJY29uIGZyb20gJ21hdGVyaWFsLWRlc2lnbi1pY29ucy9jb250ZW50L3N2Zy9wcm9kdWN0aW9uL2ljX2FkZF9jaXJjbGVfb3V0bGluZV8yNHB4LnN2Zyc7XHJcbmltcG9ydCB7XHJcbiAgQmFzZUlucHV0UHJvcHMsXHJcbiAgQmFzZUlucHV0U3RhdGUsXHJcbiAgQmFzZUlucHV0LFxyXG4gIFZhbGlkYXRpb25FcnJvcixcclxufSBmcm9tICcuLi9iYXNlL2lucHV0L0Jhc2VJbnB1dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgVGFnc1N1Z2dlc3Rpb25zIGZyb20gJy4vc3ViQ29tcG9uZW50cy9UYWdzU3VnZ2VzdGlvbnMnO1xyXG5pbXBvcnQgeyB3aXRoRm9ybUNvbnRleHQgfSBmcm9tICcuLi9mb3JtL3dpdGhGb3JtQ29udGV4dCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuLy8gTWlzY1xyXG5leHBvcnQgdHlwZSBUYWcgPSB7XHJcbiAgaWQ6IG51bWJlciB8IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBUYWdzUHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICB0YWdzOiBUYWdbXTtcclxuICBleGlzdGluZ1RhZ3M/OiBUYWdbXTtcclxuICBmZXRjaEV4aXN0aW5nVGFncz86ICh0ZXh0OiBzdHJpbmcpID0+IFByb21pc2U8VGFnW10+O1xyXG4gIG9uVGFnc0NoYW5nZWQ6IChuZXdUYWdzOiBUYWdbXSkgPT4gdm9pZDtcclxuICBvbk5ld1RhZ0FkZGVkPzogKG5ld1RhZ05hbWU6IHN0cmluZykgPT4gUHJvbWlzZTxUYWc+O1xyXG4gIG9uVGFnQ2xpY2s/OiAodGFnOiBUYWcpID0+IHZvaWQ7XHJcbiAgc2hvd0NoaXBzPzogYm9vbGVhbjtcclxuICBhbGxvd05ldz86IGJvb2xlYW47XHJcbiAgYWRkTmV3T25CbHVyPzogYm9vbGVhbjtcclxuICB0ZXh0UHJvcHM/OiBUZXh0UHJvcHM7XHJcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xyXG4gIHJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcj86IHN0cmluZztcclxuICBtYXhUYWdzPzogbnVtYmVyO1xyXG4gIHZhbHVlTm90QWRkZWRFcnJvcj86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIG1heFRhZ3NTdXJwYXNzZWRFcnJvcj86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHNob3dTdWdnZXN0aW9ucz86IGJvb2xlYW47XHJcbiAgc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIGxvYWRpbmdEZWxheU1zPzogbnVtYmVyO1xyXG4gIGZpbHRlckV4aXN0aW5nVGFncz86ICh0ZXh0OiBzdHJpbmcsIGV4aXN0aW5nVGFnczogVGFnW10pID0+IFRhZ1tdO1xyXG4gIG1heFN1Z2dlc3Rpb25zPzogbnVtYmVyO1xyXG59ICYgQmFzZUlucHV0UHJvcHM8SFRNTElucHV0RWxlbWVudD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRhZ3NTdGF0ZSBleHRlbmRzIEJhc2VJbnB1dFN0YXRlIHtcclxuICB0ZXh0SXNGb2N1c2VkOiBib29sZWFuO1xyXG4gIHRleHRFcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdO1xyXG4gIHRleHRJc1ZhbGlkOiBib29sZWFuO1xyXG4gIHN1Z2dlc3Rpb25zVmlzaWJsZTogYm9vbGVhbjtcclxuICBmZXRjaGVkRXhpc3RpbmdUYWdzOiBUYWdbXTtcclxuICBmZXRjaGluZ0V4aXN0aW5nVGFnczogYm9vbGVhbjtcclxuICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWdzUmF3IGV4dGVuZHMgQmFzZUlucHV0PFRhZ3NQcm9wcywgVGFnc1N0YXRlLCBIVE1MSW5wdXRFbGVtZW50PiB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFRhZ3NQcm9wcyA9IHtcclxuICAgIC4uLkJhc2VJbnB1dC5kZWZhdWx0UHJvcHMsXHJcbiAgICBkaXNhYmxlZDogZmFsc2UsXHJcbiAgICBjbGFzc05hbWU6ICcnLFxyXG4gICAgdGFnczogW10sXHJcbiAgICBleGlzdGluZ1RhZ3M6IFtdLFxyXG4gICAgbWF4VGFnczogMTAwMCxcclxuICAgIG9uVGFnc0NoYW5nZWQ6ICgpID0+IHVuZGVmaW5lZCxcclxuICAgIG9uTmV3VGFnQWRkZWQ6IG5ld1RhZ05hbWUgPT5cclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKHsgbmFtZTogbmV3VGFnTmFtZSwgaWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpIH0pLFxyXG4gICAgdmFsdWVOb3RBZGRlZEVycm9yOiA8c3Bhbj5Zb3UgZm9yZ290IHRvIGFkZCB0YWc8L3NwYW4+LFxyXG4gICAgbWF4VGFnc1N1cnBhc3NlZEVycm9yOiA8c3Bhbj5NYXhpbXVtIG51bWJlciBvZiB0YWdzIHN1cnBhc3NlZDwvc3Bhbj4sXHJcbiAgICBzaG93U3VnZ2VzdGlvbnM6IHRydWUsXHJcbiAgICBzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQ6ICdMb2FkaW5nLi4uJyxcclxuICAgIHN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQ6ICdObyBleGlzdGluZyB0YWdzLi4uJyxcclxuICAgIGxvYWRpbmdEZWxheU1zOiA1MDAsXHJcbiAgICBmaWx0ZXJFeGlzdGluZ1RhZ3M6ICh0ZXh0LCB0YWdzKSA9PlxyXG4gICAgICB0YWdzLmZpbHRlcih0YWcgPT4gdGFnLm5hbWUgJiYgdGFnLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKHRleHQpKSxcclxuICAgIG1heFN1Z2dlc3Rpb25zOiA1LFxyXG4gICAgYWRkTmV3T25CbHVyOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdGV4dFJlZjogUmVhY3QuUmVmT2JqZWN0PFRleHRSYXc+O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogVGFnc1Byb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICB0ZXh0RXJyb3JzOiBbXSxcclxuICAgICAgdGV4dElzRm9jdXNlZDogZmFsc2UsXHJcbiAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBmYWxzZSxcclxuICAgICAgdGV4dElzVmFsaWQ6IGZhbHNlLFxyXG4gICAgICBmZXRjaGVkRXhpc3RpbmdUYWdzOiBbXSxcclxuICAgIH07XHJcbiAgICB0aGlzLnRleHRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb2N1cygpIHtcclxuICAgIGlmICh0aGlzLnRleHRSZWYuY3VycmVudCkge1xyXG4gICAgICB0aGlzLnRleHRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShvbGRQcm9wczogVGFnc1Byb3BzKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG9sZFByb3BzLnRhZ3MgIT09IHRoaXMucHJvcHMudGFncyB8fFxyXG4gICAgICBvbGRQcm9wcy52YWxpZGF0b3JzICE9PSB0aGlzLnByb3BzLnZhbGlkYXRvcnMgfHxcclxuICAgICAgb2xkUHJvcHMuY3VzdG9tVmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy5jdXN0b21WYWxpZGF0b3JzIHx8XHJcbiAgICAgIG9sZFByb3BzLnJlcXVpcmVkICE9PSB0aGlzLnByb3BzLnJlcXVpcmVkXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5oYW5kbGVFcnJvcnModGhpcy5wcm9wcy50YWdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB0ZXh0UHJvcHMgPSB0aGlzLnByb3BzLnRleHRQcm9wcyA/IHRoaXMucHJvcHMudGV4dFByb3BzIDoge307XHJcbiAgICBjb25zdCBzdWdnZXN0aW9ucyA9IHRoaXMuZ2V0U3VnZ2VzdGlvbnMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxJbnB1dEdyb3VwIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfSB0b29sdGlwPXt0aGlzLnByb3BzLnRvb2x0aXB9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICAgICdpbnB1dF9fYmFzZSB0YWdzLWlucHV0JyxcclxuICAgICAgICAgICAgdGhpcy5nZXRWYWxpZGF0aW9uQ2xhc3MoKSxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWUsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAndGFncy1pbnB1dC0tcmVhZE9ubHknOiB0aGlzLnByb3BzLnJlYWRPbmx5LFxyXG4gICAgICAgICAgICAgICd0YWdzLWlucHV0LS1oYXNQbGFjZWhvbGRlcic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRleHRQcm9wcyAmJiB0aGlzLnByb3BzLnRleHRQcm9wcy5wbGFjZWhvbGRlcixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHJlZj17dGhpcy5jb250YWluZXJSZWZ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RoaXMucmVuZGVyVGFncygpfVxyXG4gICAgICAgICAgeyghdGhpcy5wcm9wcy5tYXhUYWdzIHx8XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMubWF4VGFncyA+ICh0aGlzLnByb3BzLnRhZ3MgJiYgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCkpICYmXHJcbiAgICAgICAgICAgICF0aGlzLnByb3BzLnJlYWRPbmx5ICYmIChcclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAndGFncy1pbnB1dF9fdGFnc19fd3JhcHBlciAnICtcclxuICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMucmVhZE9ubHkgPyAnZmlsbGVkICcgOiAnJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICB7Li4udGV4dFByb3BzfVxyXG4gICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy10ZXh0LWlucHV0JyxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy50ZXh0UmVmfVxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRoaXMucHJvcHMucmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICd0YWdzLWlucHV0X190ZXh0LWlucHV0ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICh0ZXh0UHJvcHMuY2xhc3NOYW1lID8gdGV4dFByb3BzLmNsYXNzTmFtZSA6ICcnKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbktleURvd24oc3VnZ2VzdGlvbnMpfVxyXG4gICAgICAgICAgICAgICAgICBvbkVycm9yc0NoYW5nZWQ9e3RoaXMub25UZXh0RXJyb3JzQ2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25UZXh0Q2hhbmdlZH1cclxuICAgICAgICAgICAgICAgICAgb25Gb2N1cz17dGhpcy5vbkZvY3VzfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMub25CbHVyfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3RoaXMucHJvcHMucmVhZE9ubHl9XHJcbiAgICAgICAgICAgICAgICAgIHNob3dWYWxpZGF0aW9uPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgaWdub3JlQ29udGV4dD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17dGhpcy5wcm9wcy52YWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgICBjdXN0b21WYWxpZGF0b3JzPXt0aGlzLnByb3BzLmN1c3RvbVZhbGlkYXRvcnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlICYmIHRoaXMucHJvcHMuc2hvd1N1Z2dlc3Rpb25zICYmIChcclxuICAgICAgICAgICAgICAgICAgPFRhZ3NTdWdnZXN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctdGV4dC1pbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dOZXc9e3RoaXMucHJvcHMuYWxsb3dOZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uPXt0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmZldGNoaW5nRXhpc3RpbmdUYWdzfVxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmdDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZT17dGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgRW1wdHlDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGlvbnNFbXB0eUNvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICB0YWdzPXtzdWdnZXN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGVkPXt0aGlzLm9uU3VnZ2VzdGlvblNlbGVjdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tPdXRzaWRlPXt0aGlzLm9uQ2xpY2tPdXRzaWRlfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIEFkZE5ld1RhZ0NvbXBvbmVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmFsbG93TmV3ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnByb3BzLmV4aXN0aW5nVGFncyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IGUubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLnN0YXRlLmZldGNoZWRFeGlzdGluZ1RhZ3MgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gZS5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRleHRJc1ZhbGlkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctYWRkLW5ldy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3N1Z2dlc3Rpb24gdGFncy1pbnB1dF9fYWRkLW5ld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGROZXdUYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgbmV3IFwie3RoaXMuc3RhdGUudmFsdWV9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIHt0aGlzLnJlbmRlckRlZmF1bHRWYWxpZGF0aW9uKCl9XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbCAmJiAoXHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50ZXh0SXNGb2N1c2VkIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlYWRPbmx5IHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID49IHRoaXMucHJvcHMubWF4VGFnc1xyXG4gICAgICAgICAgICAgICAgICA/ICdsYWJlbC0tZm9jdXNlZCdcclxuICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckxhYmVsKCl9XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblRleHRFcnJvcnNDaGFuZ2VkID0gKHRleHRFcnJvcnM6IFZhbGlkYXRpb25FcnJvcltdKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHsgdGV4dEVycm9ycyB9KSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuXHJcbiAgcHJpdmF0ZSBvbkZvY3VzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgeyB0ZXh0SXNGb2N1c2VkOiB0cnVlLCBzdWdnZXN0aW9uc1Zpc2libGU6IHRydWUsIHRvdWNoZWQ6IHRydWUgfSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3ModGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbktleURvd24gPSAoc3VnZ2VzdGlvbnM6IFRhZ1tdKSA9PiBhc3luYyBlID0+IHtcclxuICAgIGlmIChcclxuICAgICAgZS5rZXkgPT09ICdFbnRlcicgJiZcclxuICAgICAgKHRoaXMuc3RhdGUudmFsdWUgIT09ICcnIHx8XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gIT09IHVuZGVmaW5lZCkgJiZcclxuICAgICAgdGhpcy5zdGF0ZS50ZXh0RXJyb3JzLmxlbmd0aCA9PT0gMFxyXG4gICAgKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgY29uc3QgZXhpc3RpbmdUYWcgPVxyXG4gICAgICAgIHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MuZmluZChldCA9PiBldC5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQoXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MuY29uY2F0KHN1Z2dlc3Rpb25zW3RoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uXSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycsIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXhpc3RpbmdUYWcpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQodGhpcy5wcm9wcy50YWdzLmNvbmNhdChleGlzdGluZ1RhZykpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmFsbG93TmV3KSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5hZGROZXdUYWcoKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc3VnZ2VzdGlvbnMubGVuZ3RoID4gMCAmJiB0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSkge1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICAgIGNvbnN0IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSAwXHJcbiAgICAgICAgICAgID8gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uIC0gMTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgIGNvbnN0IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9XHJcbiAgICAgICAgICB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSBzdWdnZXN0aW9ucy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgID8gMFxyXG4gICAgICAgICAgICA6IHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICsgMTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgYWRkTmV3VGFnID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3VGFnID0gYXdhaXQgdGhpcy5wcm9wcy5vbk5ld1RhZ0FkZGVkKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgaWYgKG5ld1RhZykge1xyXG4gICAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQoXHJcbiAgICAgICAgdGhpcy5wcm9wcy50YWdzID8gdGhpcy5wcm9wcy50YWdzLmNvbmNhdChuZXdUYWcpIDogW25ld1RhZ11cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogJycsIHRleHRFcnJvcnM6IFtdIH0sICgpID0+IHtcclxuICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvblN1Z2dlc3Rpb25TZWxlY3RlZCA9IHRhZyA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQodGhpcy5wcm9wcy50YWdzLmNvbmNhdCh0YWcpKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHsgdmFsdWU6ICcnLCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCwgdGV4dEVycm9yczogW10gfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICF0aGlzLnByb3BzLm1heFRhZ3MgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggKyAxIDwgdGhpcy5wcm9wcy5tYXhUYWdzXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbkJsdXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5hZGROZXdPbkJsdXIgJiYgdGhpcy5wcm9wcy5hbGxvd05ldyAmJiB0aGlzLnN0YXRlLnZhbHVlKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuYWRkTmV3VGFnKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dElzRm9jdXNlZDogZmFsc2UsXHJcbiAgICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvbkNsaWNrT3V0c2lkZSA9ICgpID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsXHJcbiAgICB9KTtcclxuXHJcbiAgcHJpdmF0ZSBvblRleHRDaGFuZ2VkID0gKFxyXG4gICAgZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXHJcbiAgICBpc1ZhbGlkOiBib29sZWFuXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKCkgPT4gKHtcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBpc1ZhbGlkOiBpc1ZhbGlkLFxyXG4gICAgICAgIHRleHRJc1ZhbGlkOiBpc1ZhbGlkLFxyXG4gICAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgfSksXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcbiAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGhhbmRsZUVycm9ycyA9ICh0YWdzOiBUYWdbXSA9IHRoaXMucHJvcHMudGFncykgPT4ge1xyXG4gICAgbGV0IGVycm9ycyA9IHRoaXMuZ2V0RXJyb3JzKHRhZ3MpO1xyXG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0SW52YWxpZChlcnJvcnMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRWYWxpZCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgZ2V0RXJyb3JzKHRhZ3M6IFRhZ1tdKSB7XHJcbiAgICBsZXQgZXJyb3JzID0gW107XHJcbiAgICBpZiAodGFncy5sZW5ndGggPCB0aGlzLnByb3BzLm1heFRhZ3MpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnN0YXRlLnRleHRFcnJvcnMpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgIT09ICcnICYmIHRhZ3MubGVuZ3RoID09PSAwICYmIHRoaXMucHJvcHMucmVxdWlyZWQpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnByb3BzLmVycm9yc1RyYW5zbGF0aW9ucy5yZXF1aXJlZCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSAmJiB0aGlzLnByb3BzLmFsbG93TmV3ICYmICF0aGlzLnN0YXRlLnRleHRJc0ZvY3VzZWQpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnByb3BzLnZhbHVlTm90QWRkZWRFcnJvcik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5tYXhUYWdzIDwgKHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoKSkge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMucHJvcHMubWF4VGFnc1N1cnBhc3NlZEVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcnMuZmlsdGVyKGkgPT4gaSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZldGNoRXhpc3RpbmdUYWdzKHN0YXJ0c1dpdGg6IHN0cmluZyA9ICcnKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5mZXRjaEV4aXN0aW5nVGFncykge1xyXG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZldGNoaW5nRXhpc3RpbmdUYWdzOiB0cnVlIH0pLFxyXG4gICAgICAgIHRoaXMucHJvcHMubG9hZGluZ0RlbGF5TXNcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5wcm9wcy5mZXRjaEV4aXN0aW5nVGFncyhzdGFydHNXaXRoKS50aGVuKGZldGNoZWRFeGlzdGluZ1RhZ3MgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBmZXRjaGVkRXhpc3RpbmdUYWdzLFxyXG4gICAgICAgICAgZmV0Y2hpbmdFeGlzdGluZ1RhZ3M6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U3VnZ2VzdGlvbnMoKSB7XHJcbiAgICBjb25zdCBleGlzdGluZ1RhZ3M6IFRhZ1tdID0gW11cclxuICAgICAgLmNvbmNhdCh0aGlzLnByb3BzLmV4aXN0aW5nVGFncyA/IHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzIDogW10pXHJcbiAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzID8gdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzIDogW11cclxuICAgICAgKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkVGFncyA9IHRoaXMucHJvcHMuZmlsdGVyRXhpc3RpbmdUYWdzKFxyXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlID8gdGhpcy5zdGF0ZS52YWx1ZS50b0xvd2VyQ2FzZSgpIDogJycsXHJcbiAgICAgIGV4aXN0aW5nVGFnc1xyXG4gICAgKTtcclxuICAgIGxldCBzdWdnZXN0aW9ucyA9IGZpbHRlcmVkVGFnc1xyXG4gICAgICAuZmlsdGVyKHRhZyA9PiAhdGhpcy5wcm9wcy50YWdzLnNvbWUodCA9PiB0LmlkID09PSB0YWcuaWQpKVxyXG4gICAgICAuc2xpY2UoMCwgdGhpcy5wcm9wcy5tYXhTdWdnZXN0aW9ucyk7XHJcbiAgICByZXR1cm4gc3VnZ2VzdGlvbnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclRhZyh0YWc6IFRhZywgaW5kZXg6IG51bWJlcikge1xyXG4gICAgY29uc3QgYm9keSA9IChcclxuICAgICAgPD5cclxuICAgICAgICB7dGFnLm5hbWV9XHJcbiAgICAgICAgeyF0aGlzLnByb3BzLnJlYWRPbmx5ICYmIChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctdGFnLScgKyBpbmRleC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgY2lyY3VsYXI9e3RydWV9XHJcbiAgICAgICAgICAgIGJsYW5rPXt0cnVlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRhZ1JlbW92ZUNsaWNrKHRhZyl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTEgdHJhbnNmb3JtLXJvdGF0ZS0tNDUgbGluZS1oZWlnaHQtLTAgcC0wXCJcclxuICAgICAgICAgICAgQ29tcG9uZW50PXtwID0+IChcclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3AuY2xhc3NOYW1lfSBpZD17cC5pZH0gb25DbGljaz17cC5vbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgIHtwLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBsdXNJY29uIC8+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCd0YWdzLWlucHV0X190YWcnLCB7XHJcbiAgICAgICd0YWdzLWlucHV0X190YWctY2hpcCc6IHRoaXMucHJvcHMuc2hvd0NoaXBzLFxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblRhZ0NsaWNrKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy50YWdDbGljayh0YWcpfVxyXG4gICAgICAgICAgc21hbGw9e3RydWV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2JvZHl9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMudGFnQ2xpY2sodGFnKX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGtleT17aW5kZXh9PlxyXG4gICAgICAgIHtib2R5fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRhZ0NsaWNrID0gKHRhZzogVGFnKSA9PiAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uVGFnQ2xpY2sgJiYgdGhpcy5wcm9wcy5vblRhZ0NsaWNrKHRhZyk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSB0YWdSZW1vdmVDbGljayA9ICh0YWc6IFRhZykgPT4gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgbmV3VGFncyA9IHRoaXMucHJvcHMudGFncy5maWx0ZXIoc3YgPT4gc3YuaWQgIT09IHRhZy5pZCk7XHJcbiAgICBpZiAobmV3VGFncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZvY3VzKCksIDUwKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKG5ld1RhZ3MpO1xyXG4gICAgdGhpcy5oYW5kbGVFcnJvcnMobmV3VGFncyk7XHJcbiAgICAvLyB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJUYWdzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID4gMCA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdfX3dyYXBwZXJcIj5cclxuICAgICAgICB7dGhpcy5wcm9wcy50YWdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHRoaXMucmVuZGVyVGFnKGl0ZW0sIGluZGV4KSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IChcclxuICAgICAgdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdfX3dyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ3MgPSB3aXRoRm9ybUNvbnRleHQ8VGFnc1Byb3BzPihUYWdzUmF3KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ3M7XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vdmFsaWRhdG9ycy9pbmRleCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9idXR0b24nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tib3gnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvZHluYW1pY1N1Ym1pdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9mb3JtJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2lucHV0R3JvdXAnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvaW5wdXRIZWFkZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvbW9uZXkvTW9uZXknO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvb3BlbmluZ0hvdXJzL29wZW5pbmdIb3Vyc0RheSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9vcGVuaW5nSG91cnMvb3BlbmluZ0hvdXJzU3BlY2lhbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9vcGVuaW5nSG91cnMvb3BlbmluZ0hvdXJzV2Vlayc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9yYWRpbyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9yYWRpb0NvbnRhaW5lcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QvU2VsZWN0JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3N1Ym1pdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90YWdzJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGV4dEFyZWEnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGltZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90aW1lU3Bhbic7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=