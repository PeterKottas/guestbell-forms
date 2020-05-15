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
  maxSuggestions: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9UYWdzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbIlRhZ3NSYXciLCJwcm9wcyIsInRleHRSZWYiLCJvblRleHRFcnJvcnNDaGFuZ2VkIiwidGV4dEVycm9ycyIsInNldFN0YXRlIiwiaGFuZGxlRXJyb3JzIiwib25Gb2N1cyIsInRleHRJc0ZvY3VzZWQiLCJzdWdnZXN0aW9uc1Zpc2libGUiLCJ0b3VjaGVkIiwiZmV0Y2hFeGlzdGluZ1RhZ3MiLCJzdGF0ZSIsInZhbHVlIiwib25LZXlEb3duIiwic3VnZ2VzdGlvbnMiLCJlIiwia2V5IiwicHJlc2VsZWN0ZWRTdWdnZXN0aW9uIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJleGlzdGluZ1RhZyIsImV4aXN0aW5nVGFncyIsImZpbmQiLCJldCIsIm5hbWUiLCJvblRhZ3NDaGFuZ2VkIiwidGFncyIsImNvbmNhdCIsImFsbG93TmV3IiwiYWRkTmV3VGFnIiwib25OZXdUYWdBZGRlZCIsIm5ld1RhZyIsIm9uU3VnZ2VzdGlvblNlbGVjdGVkIiwidGFnIiwibWF4VGFncyIsIm9uQmx1ciIsImFkZE5ld09uQmx1ciIsIm9uQ2xpY2tPdXRzaWRlIiwib25UZXh0Q2hhbmdlZCIsImlzVmFsaWQiLCJ0YXJnZXQiLCJ0ZXh0SXNWYWxpZCIsImVycm9ycyIsImdldEVycm9ycyIsInNldEludmFsaWQiLCJzZXRWYWxpZCIsInRhZ0NsaWNrIiwib25UYWdDbGljayIsInRhZ1JlbW92ZUNsaWNrIiwibmV3VGFncyIsImZpbHRlciIsInN2IiwiaWQiLCJzZXRUaW1lb3V0IiwiZm9jdXMiLCJmZXRjaGluZ0V4aXN0aW5nVGFncyIsImZldGNoZWRFeGlzdGluZ1RhZ3MiLCJSZWFjdCIsImN1cnJlbnQiLCJvbGRQcm9wcyIsInZhbGlkYXRvcnMiLCJjdXN0b21WYWxpZGF0b3JzIiwicmVxdWlyZWQiLCJ0ZXh0UHJvcHMiLCJnZXRTdWdnZXN0aW9ucyIsInRpdGxlIiwidG9vbHRpcCIsImNsYXNzTmFtZXMiLCJnZXRWYWxpZGF0aW9uQ2xhc3MiLCJjbGFzc05hbWUiLCJyZWFkT25seSIsInBsYWNlaG9sZGVyIiwiY29udGFpbmVyUmVmIiwicmVuZGVyVGFncyIsInNob3dTdWdnZXN0aW9ucyIsInN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudCIsInN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQiLCJyZW5kZXJEZWZhdWx0VmFsaWRhdGlvbiIsImxhYmVsIiwicmVuZGVyTGFiZWwiLCJlcnJvcnNUcmFuc2xhdGlvbnMiLCJ2YWx1ZU5vdEFkZGVkRXJyb3IiLCJtYXhUYWdzU3VycGFzc2VkRXJyb3IiLCJpIiwic3RhcnRzV2l0aCIsInRpbWVyIiwibG9hZGluZ0RlbGF5TXMiLCJ0aGVuIiwiY2xlYXJUaW1lb3V0IiwiZmlsdGVyZWRUYWdzIiwiZmlsdGVyRXhpc3RpbmdUYWdzIiwidG9Mb3dlckNhc2UiLCJzb21lIiwidCIsInNsaWNlIiwibWF4U3VnZ2VzdGlvbnMiLCJpbmRleCIsImJvZHkiLCJ0b1N0cmluZyIsInAiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJzaG93Q2hpcHMiLCJtYXAiLCJpdGVtIiwicmVuZGVyVGFnIiwicmVhZG9ubHlFbXB0eVBsYWNlaG9sZGVyIiwiQmFzZUlucHV0IiwiZGVmYXVsdFByb3BzIiwiZGlzYWJsZWQiLCJuZXdUYWdOYW1lIiwiUHJvbWlzZSIsInJlc29sdmUiLCJEYXRlIiwiZ2V0VGltZSIsInRleHQiLCJUYWdzIiwid2l0aEZvcm1Db250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0NBR0E7O0FBMENPLElBQU1BLE9BQWI7QUFBQTtBQUFBO0FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hmYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImQyZDQ3M2QtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlic1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElucHV0R3JvdXAgfSBmcm9tICcuLi9pbnB1dEdyb3VwL0lucHV0R3JvdXAnO1xyXG5pbXBvcnQgeyBUZXh0LCBUZXh0UHJvcHMsIFRleHRSYXcgfSBmcm9tICcuLi90ZXh0L1RleHQnO1xyXG5pbXBvcnQgKiBhcyBQbHVzSWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvY29udGVudC9zdmcvcHJvZHVjdGlvbi9pY19hZGRfY2lyY2xlX291dGxpbmVfMjRweC5zdmcnO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VJbnB1dFByb3BzLFxyXG4gIEJhc2VJbnB1dFN0YXRlLFxyXG4gIEJhc2VJbnB1dCxcclxuICBWYWxpZGF0aW9uRXJyb3IsXHJcbn0gZnJvbSAnLi4vYmFzZS9pbnB1dC9CYXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9idXR0b24vQnV0dG9uJztcclxuaW1wb3J0IFRhZ3NTdWdnZXN0aW9ucyBmcm9tICcuL3N1YkNvbXBvbmVudHMvVGFnc1N1Z2dlc3Rpb25zJztcclxuaW1wb3J0IHsgd2l0aEZvcm1Db250ZXh0IH0gZnJvbSAnLi4vZm9ybS93aXRoRm9ybUNvbnRleHQnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbi8vIE1pc2NcclxuZXhwb3J0IHR5cGUgVGFnID0ge1xyXG4gIGlkOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgVGFnc1Byb3BzID0ge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgdGFnczogVGFnW107XHJcbiAgZXhpc3RpbmdUYWdzPzogVGFnW107XHJcbiAgZmV0Y2hFeGlzdGluZ1RhZ3M/OiAodGV4dDogc3RyaW5nKSA9PiBQcm9taXNlPFRhZ1tdPjtcclxuICBvblRhZ3NDaGFuZ2VkOiAobmV3VGFnczogVGFnW10pID0+IHZvaWQ7XHJcbiAgb25OZXdUYWdBZGRlZD86IChuZXdUYWdOYW1lOiBzdHJpbmcpID0+IFByb21pc2U8VGFnPjtcclxuICBvblRhZ0NsaWNrPzogKHRhZzogVGFnKSA9PiB2b2lkO1xyXG4gIHNob3dDaGlwcz86IGJvb2xlYW47XHJcbiAgYWxsb3dOZXc/OiBib29sZWFuO1xyXG4gIGFkZE5ld09uQmx1cj86IGJvb2xlYW47XHJcbiAgdGV4dFByb3BzPzogVGV4dFByb3BzO1xyXG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcclxuICByZWFkb25seUVtcHR5UGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgbWF4VGFncz86IG51bWJlcjtcclxuICB2YWx1ZU5vdEFkZGVkRXJyb3I/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBtYXhUYWdzU3VycGFzc2VkRXJyb3I/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBzaG93U3VnZ2VzdGlvbnM/OiBib29sZWFuO1xyXG4gIHN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBsb2FkaW5nRGVsYXlNcz86IG51bWJlcjtcclxuICBmaWx0ZXJFeGlzdGluZ1RhZ3M/OiAodGV4dDogc3RyaW5nLCBleGlzdGluZ1RhZ3M6IFRhZ1tdKSA9PiBUYWdbXTtcclxuICBtYXhTdWdnZXN0aW9ucz86IG51bWJlcjtcclxufSAmIEJhc2VJbnB1dFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWdzU3RhdGUgZXh0ZW5kcyBCYXNlSW5wdXRTdGF0ZSB7XHJcbiAgdGV4dElzRm9jdXNlZDogYm9vbGVhbjtcclxuICB0ZXh0RXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JbXTtcclxuICB0ZXh0SXNWYWxpZDogYm9vbGVhbjtcclxuICBzdWdnZXN0aW9uc1Zpc2libGU6IGJvb2xlYW47XHJcbiAgZmV0Y2hlZEV4aXN0aW5nVGFnczogVGFnW107XHJcbiAgZmV0Y2hpbmdFeGlzdGluZ1RhZ3M6IGJvb2xlYW47XHJcbiAgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFnc1JhdyBleHRlbmRzIEJhc2VJbnB1dDxUYWdzUHJvcHMsIFRhZ3NTdGF0ZSwgSFRNTElucHV0RWxlbWVudD4ge1xyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBUYWdzUHJvcHMgPSB7XHJcbiAgICAuLi5CYXNlSW5wdXQuZGVmYXVsdFByb3BzLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgZXhpc3RpbmdUYWdzOiBbXSxcclxuICAgIG1heFRhZ3M6IDEwMDAsXHJcbiAgICBvblRhZ3NDaGFuZ2VkOiAoKSA9PiB1bmRlZmluZWQsXHJcbiAgICBvbk5ld1RhZ0FkZGVkOiBuZXdUYWdOYW1lID0+XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSh7IG5hbWU6IG5ld1RhZ05hbWUsIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9KSxcclxuICAgIHZhbHVlTm90QWRkZWRFcnJvcjogPHNwYW4+WW91IGZvcmdvdCB0byBhZGQgdGFnPC9zcGFuPixcclxuICAgIG1heFRhZ3NTdXJwYXNzZWRFcnJvcjogPHNwYW4+TWF4aW11bSBudW1iZXIgb2YgdGFncyBzdXJwYXNzZWQ8L3NwYW4+LFxyXG4gICAgc2hvd1N1Z2dlc3Rpb25zOiB0cnVlLFxyXG4gICAgc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50OiAnTG9hZGluZy4uLicsXHJcbiAgICBzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50OiAnTm8gZXhpc3RpbmcgdGFncy4uLicsXHJcbiAgICBsb2FkaW5nRGVsYXlNczogNTAwLFxyXG4gICAgZmlsdGVyRXhpc3RpbmdUYWdzOiAodGV4dCwgdGFncykgPT5cclxuICAgICAgdGFncy5maWx0ZXIodGFnID0+IHRhZy5uYW1lICYmIHRhZy5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh0ZXh0KSksXHJcbiAgICBtYXhTdWdnZXN0aW9uczogNSxcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHRleHRSZWY6IFJlYWN0LlJlZk9iamVjdDxUZXh0UmF3PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFRhZ3NQcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgdGV4dEVycm9yczogW10sXHJcbiAgICAgIHRleHRJc0ZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgICBmZXRjaGluZ0V4aXN0aW5nVGFnczogZmFsc2UsXHJcbiAgICAgIHRleHRJc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgZmV0Y2hlZEV4aXN0aW5nVGFnczogW10sXHJcbiAgICB9O1xyXG4gICAgdGhpcy50ZXh0UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZm9jdXMoKSB7XHJcbiAgICBpZiAodGhpcy50ZXh0UmVmLmN1cnJlbnQpIHtcclxuICAgICAgdGhpcy50ZXh0UmVmLmN1cnJlbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb21wb25lbnREaWRVcGRhdGUob2xkUHJvcHM6IFRhZ3NQcm9wcykge1xyXG4gICAgaWYgKFxyXG4gICAgICBvbGRQcm9wcy50YWdzICE9PSB0aGlzLnByb3BzLnRhZ3MgfHxcclxuICAgICAgb2xkUHJvcHMudmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy52YWxpZGF0b3JzIHx8XHJcbiAgICAgIG9sZFByb3BzLmN1c3RvbVZhbGlkYXRvcnMgIT09IHRoaXMucHJvcHMuY3VzdG9tVmFsaWRhdG9ycyB8fFxyXG4gICAgICBvbGRQcm9wcy5yZXF1aXJlZCAhPT0gdGhpcy5wcm9wcy5yZXF1aXJlZFxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKHRoaXMucHJvcHMudGFncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdGV4dFByb3BzID0gdGhpcy5wcm9wcy50ZXh0UHJvcHMgPyB0aGlzLnByb3BzLnRleHRQcm9wcyA6IHt9O1xyXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB0aGlzLmdldFN1Z2dlc3Rpb25zKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SW5wdXRHcm91cCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gdG9vbHRpcD17dGhpcy5wcm9wcy50b29sdGlwfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAnaW5wdXRfX2Jhc2UgdGFncy1pbnB1dCcsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VmFsaWRhdGlvbkNsYXNzKCksXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXQtLXJlYWRPbmx5JzogdGhpcy5wcm9wcy5yZWFkT25seSxcclxuICAgICAgICAgICAgICAndGFncy1pbnB1dC0taGFzUGxhY2Vob2xkZXInOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50ZXh0UHJvcHMgJiYgdGhpcy5wcm9wcy50ZXh0UHJvcHMucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICByZWY9e3RoaXMuY29udGFpbmVyUmVmfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLnJlbmRlclRhZ3MoKX1cclxuICAgICAgICAgIHsoIXRoaXMucHJvcHMubWF4VGFncyB8fFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1heFRhZ3MgPiAodGhpcy5wcm9wcy50YWdzICYmIHRoaXMucHJvcHMudGFncy5sZW5ndGgpKSAmJlxyXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXRfX3RhZ3NfX3dyYXBwZXIgJyArXHJcbiAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnJlYWRPbmx5ID8gJ2ZpbGxlZCAnIDogJycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgey4uLnRleHRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctdGV4dC1pbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICByZWY9e3RoaXMudGV4dFJlZn1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggPiAwID8gZmFsc2UgOiB0aGlzLnByb3BzLnJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAndGFncy1pbnB1dF9fdGV4dC1pbnB1dCAnICtcclxuICAgICAgICAgICAgICAgICAgICAodGV4dFByb3BzLmNsYXNzTmFtZSA/IHRleHRQcm9wcy5jbGFzc05hbWUgOiAnJylcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3duKHN1Z2dlc3Rpb25zKX1cclxuICAgICAgICAgICAgICAgICAgb25FcnJvcnNDaGFuZ2VkPXt0aGlzLm9uVGV4dEVycm9yc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25Gb2N1c31cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRPbmx5fVxyXG4gICAgICAgICAgICAgICAgICBzaG93VmFsaWRhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIGlnbm9yZUNvbnRleHQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e3RoaXMucHJvcHMudmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgICAgY3VzdG9tVmFsaWRhdG9ycz17dGhpcy5wcm9wcy5jdXN0b21WYWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSAmJiB0aGlzLnByb3BzLnNob3dTdWdnZXN0aW9ucyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUYWdzU3VnZ2VzdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRleHQtaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0aGlzLnByb3BzLmFsbG93TmV3fVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj17dGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5mZXRjaGluZ0V4aXN0aW5nVGFnc31cclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nQ29tcG9uZW50PXt0aGlzLnByb3BzLnN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICBpc1Zpc2libGU9e3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIEVtcHR5Q29tcG9uZW50PXt0aGlzLnByb3BzLnN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFncz17c3VnZ2VzdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RlZD17dGhpcy5vblN1Z2dlc3Rpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrT3V0c2lkZT17dGhpcy5vbkNsaWNrT3V0c2lkZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBBZGROZXdUYWdDb21wb25lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hbGxvd05ldyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuZXhpc3RpbmdUYWdzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBlLm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLmZldGNoZWRFeGlzdGluZ1RhZ3MuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IGUubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50ZXh0SXNWYWxpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLWFkZC1uZXctYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X19zdWdnZXN0aW9uIHRhZ3MtaW5wdXRfX2FkZC1uZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkTmV3VGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG5ldyBcInt0aGlzLnN0YXRlLnZhbHVlfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJEZWZhdWx0VmFsaWRhdGlvbigpfVxyXG4gICAgICAgICAge3RoaXMucHJvcHMubGFiZWwgJiYgKFxyXG4gICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGV4dElzRm9jdXNlZCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWFkT25seSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA+PSB0aGlzLnByb3BzLm1heFRhZ3NcclxuICAgICAgICAgICAgICAgICAgPyAnbGFiZWwtLWZvY3VzZWQnXHJcbiAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJMYWJlbCgpfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25UZXh0RXJyb3JzQ2hhbmdlZCA9ICh0ZXh0RXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7IHRleHRFcnJvcnMgfSksXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcblxyXG4gIHByaXZhdGUgb25Gb2N1cyA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHsgdGV4dElzRm9jdXNlZDogdHJ1ZSwgc3VnZ2VzdGlvbnNWaXNpYmxlOiB0cnVlLCB0b3VjaGVkOiB0cnVlIH0sXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcbiAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25LZXlEb3duID0gKHN1Z2dlc3Rpb25zOiBUYWdbXSkgPT4gYXN5bmMgZSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGUua2V5ID09PSAnRW50ZXInICYmXHJcbiAgICAgICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyB8fFxyXG4gICAgICAgIHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICE9PSB1bmRlZmluZWQpICYmXHJcbiAgICAgIHRoaXMuc3RhdGUudGV4dEVycm9ycy5sZW5ndGggPT09IDBcclxuICAgICkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nVGFnID1cclxuICAgICAgICB0aGlzLnByb3BzLmV4aXN0aW5nVGFncyAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzLmZpbmQoZXQgPT4gZXQubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKFxyXG4gICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmNvbmNhdChzdWdnZXN0aW9uc1t0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbl0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnLCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGV4aXN0aW5nVGFnKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKHRoaXMucHJvcHMudGFncy5jb25jYXQoZXhpc3RpbmdUYWcpKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5hbGxvd05ldykge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYWRkTmV3VGFnKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHN1Z2dlc3Rpb25zLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUpIHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICBjb25zdCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gMFxyXG4gICAgICAgICAgICA/IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAtIDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICBjb25zdCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiArIDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGFkZE5ld1RhZyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhZyA9IGF3YWl0IHRoaXMucHJvcHMub25OZXdUYWdBZGRlZCh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgIGlmIChuZXdUYWcpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKFxyXG4gICAgICAgIHRoaXMucHJvcHMudGFncyA/IHRoaXMucHJvcHMudGFncy5jb25jYXQobmV3VGFnKSA6IFtuZXdUYWddXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnLCB0ZXh0RXJyb3JzOiBbXSB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25TdWdnZXN0aW9uU2VsZWN0ZWQgPSB0YWcgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKHRoaXMucHJvcHMudGFncy5jb25jYXQodGFnKSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7IHZhbHVlOiAnJywgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsIHRleHRFcnJvcnM6IFtdIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhdGhpcy5wcm9wcy5tYXhUYWdzICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoICsgMSA8IHRoaXMucHJvcHMubWF4VGFnc1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25CbHVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuYWRkTmV3T25CbHVyICYmIHRoaXMucHJvcHMuYWxsb3dOZXcgJiYgdGhpcy5zdGF0ZS52YWx1ZSkge1xyXG4gICAgICBhd2FpdCB0aGlzLmFkZE5ld1RhZygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHRleHRJc0ZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25DbGlja091dHNpZGUgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcblxyXG4gIHByaXZhdGUgb25UZXh0Q2hhbmdlZCA9IChcclxuICAgIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LFxyXG4gICAgaXNWYWxpZDogYm9vbGVhblxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7XHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgaXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICB0ZXh0SXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IHRydWUsXHJcbiAgICAgIH0pLFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMgPSAodGFnczogVGFnW10gPSB0aGlzLnByb3BzLnRhZ3MpID0+IHtcclxuICAgIGxldCBlcnJvcnMgPSB0aGlzLmdldEVycm9ycyh0YWdzKTtcclxuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldEludmFsaWQoZXJyb3JzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsaWQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGdldEVycm9ycyh0YWdzOiBUYWdbXSkge1xyXG4gICAgbGV0IGVycm9ycyA9IFtdO1xyXG4gICAgaWYgKHRhZ3MubGVuZ3RoIDwgdGhpcy5wcm9wcy5tYXhUYWdzKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5zdGF0ZS50ZXh0RXJyb3JzKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyAmJiB0YWdzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLnJlcXVpcmVkKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5wcm9wcy5lcnJvcnNUcmFuc2xhdGlvbnMucmVxdWlyZWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgJiYgdGhpcy5wcm9wcy5hbGxvd05ldyAmJiAhdGhpcy5zdGF0ZS50ZXh0SXNGb2N1c2VkKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5wcm9wcy52YWx1ZU5vdEFkZGVkRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvcHMubWF4VGFncyA8ICh0aGlzLnByb3BzLnRhZ3MgJiYgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCkpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnByb3BzLm1heFRhZ3NTdXJwYXNzZWRFcnJvcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXJyb3JzLmZpbHRlcihpID0+IGkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmZXRjaEV4aXN0aW5nVGFncyhzdGFydHNXaXRoOiBzdHJpbmcgPSAnJykge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZmV0Y2hFeGlzdGluZ1RhZ3MpIHtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KFxyXG4gICAgICAgICgpID0+IHRoaXMuc2V0U3RhdGUoeyBmZXRjaGluZ0V4aXN0aW5nVGFnczogdHJ1ZSB9KSxcclxuICAgICAgICB0aGlzLnByb3BzLmxvYWRpbmdEZWxheU1zXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hFeGlzdGluZ1RhZ3Moc3RhcnRzV2l0aCkudGhlbihmZXRjaGVkRXhpc3RpbmdUYWdzID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgZmV0Y2hlZEV4aXN0aW5nVGFncyxcclxuICAgICAgICAgIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFN1Z2dlc3Rpb25zKCkge1xyXG4gICAgY29uc3QgZXhpc3RpbmdUYWdzOiBUYWdbXSA9IFtdXHJcbiAgICAgIC5jb25jYXQodGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgPyB0aGlzLnByb3BzLmV4aXN0aW5nVGFncyA6IFtdKVxyXG4gICAgICAuY29uY2F0KFxyXG4gICAgICAgIHRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyA/IHRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyA6IFtdXHJcbiAgICAgICk7XHJcbiAgICBjb25zdCBmaWx0ZXJlZFRhZ3MgPSB0aGlzLnByb3BzLmZpbHRlckV4aXN0aW5nVGFncyhcclxuICAgICAgdGhpcy5zdGF0ZS52YWx1ZSA/IHRoaXMuc3RhdGUudmFsdWUudG9Mb3dlckNhc2UoKSA6ICcnLFxyXG4gICAgICBleGlzdGluZ1RhZ3NcclxuICAgICk7XHJcbiAgICBsZXQgc3VnZ2VzdGlvbnMgPSBmaWx0ZXJlZFRhZ3NcclxuICAgICAgLmZpbHRlcih0YWcgPT4gIXRoaXMucHJvcHMudGFncy5zb21lKHQgPT4gdC5pZCA9PT0gdGFnLmlkKSlcclxuICAgICAgLnNsaWNlKDAsIHRoaXMucHJvcHMubWF4U3VnZ2VzdGlvbnMpO1xyXG4gICAgcmV0dXJuIHN1Z2dlc3Rpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJUYWcodGFnOiBUYWcsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGJvZHkgPSAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge3RhZy5uYW1lfVxyXG4gICAgICAgIHshdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRhZy0nICsgaW5kZXgudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIGNpcmN1bGFyPXt0cnVlfVxyXG4gICAgICAgICAgICBibGFuaz17dHJ1ZX1cclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy50YWdSZW1vdmVDbGljayh0YWcpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xIHRyYW5zZm9ybS1yb3RhdGUtLTQ1IGxpbmUtaGVpZ2h0LS0wIHAtMFwiXHJcbiAgICAgICAgICAgIENvbXBvbmVudD17cCA9PiAoXHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtwLmNsYXNzTmFtZX0gaWQ9e3AuaWR9IG9uQ2xpY2s9e3Aub25DbGlja30+XHJcbiAgICAgICAgICAgICAgICB7cC5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxQbHVzSWNvbiAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygndGFncy1pbnB1dF9fdGFnJywge1xyXG4gICAgICAndGFncy1pbnB1dF9fdGFnLWNoaXAnOiB0aGlzLnByb3BzLnNob3dDaGlwcyxcclxuICAgIH0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25UYWdDbGljaykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudGFnQ2xpY2sodGFnKX1cclxuICAgICAgICAgIHNtYWxsPXt0cnVlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLnRhZ0NsaWNrKHRhZyl9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e2luZGV4fT5cclxuICAgICAgICB7Ym9keX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0YWdDbGljayA9ICh0YWc6IFRhZykgPT4gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ0NsaWNrICYmIHRoaXMucHJvcHMub25UYWdDbGljayh0YWcpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgdGFnUmVtb3ZlQ2xpY2sgPSAodGFnOiBUYWcpID0+IChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IG5ld1RhZ3MgPSB0aGlzLnByb3BzLnRhZ3MuZmlsdGVyKHN2ID0+IHN2LmlkICE9PSB0YWcuaWQpO1xyXG4gICAgaWYgKG5ld1RhZ3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5mb2N1cygpLCA1MCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkICYmIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZChuZXdUYWdzKTtcclxuICAgIHRoaXMuaGFuZGxlRXJyb3JzKG5ld1RhZ3MpO1xyXG4gICAgLy8gdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyVGFncygpIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLnRhZ3MgJiYgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnX193cmFwcGVyXCI+XHJcbiAgICAgICAge3RoaXMucHJvcHMudGFncy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB0aGlzLnJlbmRlclRhZyhpdGVtLCBpbmRleCkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgOiAoXHJcbiAgICAgIHRoaXMucHJvcHMucmVhZE9ubHkgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnX193cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3RhZ1wiPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5yZWFkb25seUVtcHR5UGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUYWdzID0gd2l0aEZvcm1Db250ZXh0PFRhZ3NQcm9wcz4oVGFnc1Jhdyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdzO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL3ZhbGlkYXRvcnMvaW5kZXgnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrYm94JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2R5bmFtaWNTdWJtaXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvZm9ybSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9pbnB1dEdyb3VwJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2lucHV0SGVhZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL21vbmV5L01vbmV5JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL29wZW5pbmdIb3Vycy9vcGVuaW5nSG91cnNEYXknO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvb3BlbmluZ0hvdXJzL29wZW5pbmdIb3Vyc1NwZWNpYWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvb3BlbmluZ0hvdXJzL29wZW5pbmdIb3Vyc1dlZWsnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW9Db250YWluZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0L1NlbGVjdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9zdWJtaXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGFncyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy90ZXh0JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RleHRBcmVhJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL3RpbWUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGltZVNwYW4nO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9