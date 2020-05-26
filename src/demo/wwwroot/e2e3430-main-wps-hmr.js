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
/* harmony import */ var react_onclickoutside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-onclickoutside */ "./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js");
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
    value: function handleClickOutside() {
      var _this2 = this;

      if (this.props.addNewOnBlur && this.props.allowNew && this.state.value) {
        var suggestions = this.getSuggestions();
        var existing = suggestions.find(function (s) {
          return s.name === _this2.state.value;
        });

        if (existing) {
          this.onSuggestionSelected(existing);
        } else {
          this.addNewTag();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

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
var Tags = Object(_form_withFormContext__WEBPACK_IMPORTED_MODULE_7__["withFormContext"])(Object(react_onclickoutside__WEBPACK_IMPORTED_MODULE_9__["default"])(TagsRaw));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9UYWdzLnRzeCJdLCJuYW1lcyI6WyJUYWdzUmF3IiwicHJvcHMiLCJ0ZXh0UmVmIiwib25UZXh0RXJyb3JzQ2hhbmdlZCIsInRleHRFcnJvcnMiLCJzZXRTdGF0ZSIsImhhbmRsZUVycm9ycyIsIm9uRm9jdXMiLCJ0ZXh0SXNGb2N1c2VkIiwic3VnZ2VzdGlvbnNWaXNpYmxlIiwidG91Y2hlZCIsImZldGNoRXhpc3RpbmdUYWdzIiwic3RhdGUiLCJ2YWx1ZSIsIm9uS2V5RG93biIsInN1Z2dlc3Rpb25zIiwiZSIsImtleSIsInByZXNlbGVjdGVkU3VnZ2VzdGlvbiIsInVuZGVmaW5lZCIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZXhpc3RpbmdUYWciLCJleGlzdGluZ1RhZ3MiLCJmaW5kIiwiZXQiLCJuYW1lIiwib25UYWdzQ2hhbmdlZCIsInRhZ3MiLCJjb25jYXQiLCJhbGxvd05ldyIsImFkZE5ld1RhZyIsIm9uTmV3VGFnQWRkZWQiLCJuZXdUYWciLCJvblN1Z2dlc3Rpb25TZWxlY3RlZCIsInRhZyIsIm1heFRhZ3MiLCJvbkJsdXIiLCJvbkNsaWNrT3V0c2lkZSIsIm9uVGV4dENoYW5nZWQiLCJpc1ZhbGlkIiwidGFyZ2V0IiwidGV4dElzVmFsaWQiLCJlcnJvcnMiLCJnZXRFcnJvcnMiLCJzZXRJbnZhbGlkIiwic2V0VmFsaWQiLCJ0YWdDbGljayIsIm9uVGFnQ2xpY2siLCJ0YWdSZW1vdmVDbGljayIsIm5ld1RhZ3MiLCJmaWx0ZXIiLCJzdiIsImlkIiwic2V0VGltZW91dCIsImZvY3VzIiwiZmV0Y2hpbmdFeGlzdGluZ1RhZ3MiLCJmZXRjaGVkRXhpc3RpbmdUYWdzIiwiUmVhY3QiLCJjdXJyZW50Iiwib2xkUHJvcHMiLCJ2YWxpZGF0b3JzIiwiY3VzdG9tVmFsaWRhdG9ycyIsInJlcXVpcmVkIiwiYWRkTmV3T25CbHVyIiwiZ2V0U3VnZ2VzdGlvbnMiLCJleGlzdGluZyIsInMiLCJ0ZXh0UHJvcHMiLCJ0aXRsZSIsInRvb2x0aXAiLCJjbGFzc05hbWVzIiwiZ2V0VmFsaWRhdGlvbkNsYXNzIiwiY2xhc3NOYW1lIiwicmVhZE9ubHkiLCJwbGFjZWhvbGRlciIsImNvbnRhaW5lclJlZiIsInJlbmRlclRhZ3MiLCJzaG93U3VnZ2VzdGlvbnMiLCJzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQiLCJzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50IiwicmVuZGVyRGVmYXVsdFZhbGlkYXRpb24iLCJsYWJlbCIsInJlbmRlckxhYmVsIiwiZXJyb3JzVHJhbnNsYXRpb25zIiwidmFsdWVOb3RBZGRlZEVycm9yIiwibWF4VGFnc1N1cnBhc3NlZEVycm9yIiwiaSIsInN0YXJ0c1dpdGgiLCJ0aW1lciIsImxvYWRpbmdEZWxheU1zIiwidGhlbiIsImNsZWFyVGltZW91dCIsImZpbHRlcmVkVGFncyIsImZpbHRlckV4aXN0aW5nVGFncyIsInRvTG93ZXJDYXNlIiwic29tZSIsInQiLCJzbGljZSIsIm1heFN1Z2dlc3Rpb25zIiwiaW5kZXgiLCJib2R5IiwidG9TdHJpbmciLCJwIiwib25DbGljayIsImNoaWxkcmVuIiwic2hvd0NoaXBzIiwibWFwIiwiaXRlbSIsInJlbmRlclRhZyIsInJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlciIsIkJhc2VJbnB1dCIsImRlZmF1bHRQcm9wcyIsImRpc2FibGVkIiwibmV3VGFnTmFtZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiRGF0ZSIsImdldFRpbWUiLCJ0ZXh0IiwiVGFncyIsIndpdGhGb3JtQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQTRDTyxJQUFNQSxPQUFiO0FBQUE7QUFBQTtBQUFBOztBQTZCRSxt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WVMsR0FBRyxDQUFDVCxJQUFKLENBQVNxRSxXQUFULEdBQXVCUCxVQUF2QixDQUFrQytCLElBQWxDLENBQWhCO0FBQUEsS0FBZixDQURrQjtBQUFBLEc7QUFFcEJwQixnQkFBYyxFQUFFLEM7QUFDaEJuQyxjQUFZLEVBQUU7O0FBb2JYLElBQU13RCxJQUFJLEdBQUdDLDZFQUFlLENBQ2hDbkYsb0VBQWMsQ0FBQ3ZDLE9BQUQsQ0FEa0IsQ0FBNUI7ZUFJUXlILEk7QUFBQTs7Ozs7Ozs7OzswQkFoZEZ6SCxPOzBCQTRjQXlILEkiLCJmaWxlIjoiZTJlMzQzMC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMaWJzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW5wdXRHcm91cCB9IGZyb20gJy4uL2lucHV0R3JvdXAvSW5wdXRHcm91cCc7XHJcbmltcG9ydCB7IFRleHQsIFRleHRQcm9wcywgVGV4dFJhdyB9IGZyb20gJy4uL3RleHQvVGV4dCc7XHJcbmltcG9ydCAqIGFzIFBsdXNJY29uIGZyb20gJ21hdGVyaWFsLWRlc2lnbi1pY29ucy9jb250ZW50L3N2Zy9wcm9kdWN0aW9uL2ljX2FkZF9jaXJjbGVfb3V0bGluZV8yNHB4LnN2Zyc7XHJcbmltcG9ydCB7XHJcbiAgQmFzZUlucHV0UHJvcHMsXHJcbiAgQmFzZUlucHV0U3RhdGUsXHJcbiAgQmFzZUlucHV0LFxyXG4gIFZhbGlkYXRpb25FcnJvcixcclxufSBmcm9tICcuLi9iYXNlL2lucHV0L0Jhc2VJbnB1dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgVGFnc1N1Z2dlc3Rpb25zIGZyb20gJy4vc3ViQ29tcG9uZW50cy9UYWdzU3VnZ2VzdGlvbnMnO1xyXG5pbXBvcnQgeyB3aXRoRm9ybUNvbnRleHQgfSBmcm9tICcuLi9mb3JtL3dpdGhGb3JtQ29udGV4dCc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgb25DbGlja091dHNpZGUsIHsgSW5qZWN0ZWRPbkNsaWNrT3V0UHJvcHMgfSBmcm9tICdyZWFjdC1vbmNsaWNrb3V0c2lkZSc7XHJcblxyXG4vLyBNaXNjXHJcbmV4cG9ydCB0eXBlIFRhZyA9IHtcclxuICBpZDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFRhZ3NQcm9wcyA9IHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIHRhZ3M6IFRhZ1tdO1xyXG4gIGV4aXN0aW5nVGFncz86IFRhZ1tdO1xyXG4gIGZldGNoRXhpc3RpbmdUYWdzPzogKHRleHQ6IHN0cmluZykgPT4gUHJvbWlzZTxUYWdbXT47XHJcbiAgb25UYWdzQ2hhbmdlZDogKG5ld1RhZ3M6IFRhZ1tdKSA9PiB2b2lkO1xyXG4gIG9uTmV3VGFnQWRkZWQ/OiAobmV3VGFnTmFtZTogc3RyaW5nKSA9PiBQcm9taXNlPFRhZz47XHJcbiAgb25UYWdDbGljaz86ICh0YWc6IFRhZykgPT4gdm9pZDtcclxuICBzaG93Q2hpcHM/OiBib29sZWFuO1xyXG4gIGFsbG93TmV3PzogYm9vbGVhbjtcclxuICBhZGROZXdPbkJsdXI/OiBib29sZWFuO1xyXG4gIHRleHRQcm9wcz86IFRleHRQcm9wcztcclxuICByZWFkT25seT86IGJvb2xlYW47XHJcbiAgcmVhZG9ubHlFbXB0eVBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gIG1heFRhZ3M/OiBudW1iZXI7XHJcbiAgdmFsdWVOb3RBZGRlZEVycm9yPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgbWF4VGFnc1N1cnBhc3NlZEVycm9yPzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgc2hvd1N1Z2dlc3Rpb25zPzogYm9vbGVhbjtcclxuICBzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgbG9hZGluZ0RlbGF5TXM/OiBudW1iZXI7XHJcbiAgZmlsdGVyRXhpc3RpbmdUYWdzPzogKHRleHQ6IHN0cmluZywgZXhpc3RpbmdUYWdzOiBUYWdbXSkgPT4gVGFnW107XHJcbiAgbWF4U3VnZ2VzdGlvbnM/OiBudW1iZXI7XHJcbn0gJiBCYXNlSW5wdXRQcm9wczxIVE1MSW5wdXRFbGVtZW50PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFnc1N0YXRlIGV4dGVuZHMgQmFzZUlucHV0U3RhdGUge1xyXG4gIHRleHRJc0ZvY3VzZWQ6IGJvb2xlYW47XHJcbiAgdGV4dEVycm9yczogVmFsaWRhdGlvbkVycm9yW107XHJcbiAgdGV4dElzVmFsaWQ6IGJvb2xlYW47XHJcbiAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBib29sZWFuO1xyXG4gIGZldGNoZWRFeGlzdGluZ1RhZ3M6IFRhZ1tdO1xyXG4gIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBib29sZWFuO1xyXG4gIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj86IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBJbmplY3RlZFByb3BzID0gSW5qZWN0ZWRPbkNsaWNrT3V0UHJvcHM7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFnc1JhdyBleHRlbmRzIEJhc2VJbnB1dDxcclxuICBUYWdzUHJvcHMgJiBJbmplY3RlZFByb3BzLFxyXG4gIFRhZ3NTdGF0ZSxcclxuICBIVE1MSW5wdXRFbGVtZW50XHJcbj4ge1xyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBUYWdzUHJvcHMgPSB7XHJcbiAgICAuLi5CYXNlSW5wdXQuZGVmYXVsdFByb3BzLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgZXhpc3RpbmdUYWdzOiBbXSxcclxuICAgIG1heFRhZ3M6IDEwMDAsXHJcbiAgICBvblRhZ3NDaGFuZ2VkOiAoKSA9PiB1bmRlZmluZWQsXHJcbiAgICBvbk5ld1RhZ0FkZGVkOiBuZXdUYWdOYW1lID0+XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSh7IG5hbWU6IG5ld1RhZ05hbWUsIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9KSxcclxuICAgIHZhbHVlTm90QWRkZWRFcnJvcjogPHNwYW4+WW91IGZvcmdvdCB0byBhZGQgdGFnPC9zcGFuPixcclxuICAgIG1heFRhZ3NTdXJwYXNzZWRFcnJvcjogPHNwYW4+TWF4aW11bSBudW1iZXIgb2YgdGFncyBzdXJwYXNzZWQ8L3NwYW4+LFxyXG4gICAgc2hvd1N1Z2dlc3Rpb25zOiB0cnVlLFxyXG4gICAgc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50OiAnTG9hZGluZy4uLicsXHJcbiAgICBzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50OiAnTm8gZXhpc3RpbmcgdGFncy4uLicsXHJcbiAgICBsb2FkaW5nRGVsYXlNczogNTAwLFxyXG4gICAgZmlsdGVyRXhpc3RpbmdUYWdzOiAodGV4dCwgdGFncykgPT5cclxuICAgICAgdGFncy5maWx0ZXIodGFnID0+IHRhZy5uYW1lICYmIHRhZy5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh0ZXh0KSksXHJcbiAgICBtYXhTdWdnZXN0aW9uczogNSxcclxuICAgIGFkZE5ld09uQmx1cjogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHRleHRSZWY6IFJlYWN0LlJlZk9iamVjdDxUZXh0UmF3PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFRhZ3NQcm9wcyAmIEluamVjdGVkUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgIHRleHRFcnJvcnM6IFtdLFxyXG4gICAgICB0ZXh0SXNGb2N1c2VkOiBmYWxzZSxcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgZmV0Y2hpbmdFeGlzdGluZ1RhZ3M6IGZhbHNlLFxyXG4gICAgICB0ZXh0SXNWYWxpZDogZmFsc2UsXHJcbiAgICAgIGZldGNoZWRFeGlzdGluZ1RhZ3M6IFtdLFxyXG4gICAgfTtcclxuICAgIHRoaXMudGV4dFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZvY3VzKCkge1xyXG4gICAgaWYgKHRoaXMudGV4dFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHRoaXMudGV4dFJlZi5jdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29tcG9uZW50RGlkVXBkYXRlKG9sZFByb3BzOiBUYWdzUHJvcHMgJiBJbmplY3RlZFByb3BzKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIG9sZFByb3BzLnRhZ3MgIT09IHRoaXMucHJvcHMudGFncyB8fFxyXG4gICAgICBvbGRQcm9wcy52YWxpZGF0b3JzICE9PSB0aGlzLnByb3BzLnZhbGlkYXRvcnMgfHxcclxuICAgICAgb2xkUHJvcHMuY3VzdG9tVmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy5jdXN0b21WYWxpZGF0b3JzIHx8XHJcbiAgICAgIG9sZFByb3BzLnJlcXVpcmVkICE9PSB0aGlzLnByb3BzLnJlcXVpcmVkXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5oYW5kbGVFcnJvcnModGhpcy5wcm9wcy50YWdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVDbGlja091dHNpZGUoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5hZGROZXdPbkJsdXIgJiYgdGhpcy5wcm9wcy5hbGxvd05ldyAmJiB0aGlzLnN0YXRlLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5nZXRTdWdnZXN0aW9ucygpO1xyXG4gICAgICBjb25zdCBleGlzdGluZyA9IHN1Z2dlc3Rpb25zLmZpbmQocyA9PiBzLm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gICAgICBpZiAoZXhpc3RpbmcpIHtcclxuICAgICAgICB0aGlzLm9uU3VnZ2VzdGlvblNlbGVjdGVkKGV4aXN0aW5nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmFkZE5ld1RhZygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdGV4dFByb3BzID0gdGhpcy5wcm9wcy50ZXh0UHJvcHMgPyB0aGlzLnByb3BzLnRleHRQcm9wcyA6IHt9O1xyXG4gICAgY29uc3Qgc3VnZ2VzdGlvbnMgPSB0aGlzLmdldFN1Z2dlc3Rpb25zKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SW5wdXRHcm91cCB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX0gdG9vbHRpcD17dGhpcy5wcm9wcy50b29sdGlwfT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgICAnaW5wdXRfX2Jhc2UgdGFncy1pbnB1dCcsXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VmFsaWRhdGlvbkNsYXNzKCksXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXQtLXJlYWRPbmx5JzogdGhpcy5wcm9wcy5yZWFkT25seSxcclxuICAgICAgICAgICAgICAndGFncy1pbnB1dC0taGFzUGxhY2Vob2xkZXInOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50ZXh0UHJvcHMgJiYgdGhpcy5wcm9wcy50ZXh0UHJvcHMucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICByZWY9e3RoaXMuY29udGFpbmVyUmVmfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLnJlbmRlclRhZ3MoKX1cclxuICAgICAgICAgIHsoIXRoaXMucHJvcHMubWF4VGFncyB8fFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1heFRhZ3MgPiAodGhpcy5wcm9wcy50YWdzICYmIHRoaXMucHJvcHMudGFncy5sZW5ndGgpKSAmJlxyXG4gICAgICAgICAgICAhdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXRfX3RhZ3NfX3dyYXBwZXIgJyArXHJcbiAgICAgICAgICAgICAgICAgICh0aGlzLnByb3BzLnJlYWRPbmx5ID8gJ2ZpbGxlZCAnIDogJycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgICAgey4uLnRleHRQcm9wc31cclxuICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctdGV4dC1pbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICByZWY9e3RoaXMudGV4dFJlZn1cclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggPiAwID8gZmFsc2UgOiB0aGlzLnByb3BzLnJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAndGFncy1pbnB1dF9fdGV4dC1pbnB1dCAnICtcclxuICAgICAgICAgICAgICAgICAgICAodGV4dFByb3BzLmNsYXNzTmFtZSA/IHRleHRQcm9wcy5jbGFzc05hbWUgOiAnJylcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3duKHN1Z2dlc3Rpb25zKX1cclxuICAgICAgICAgICAgICAgICAgb25FcnJvcnNDaGFuZ2VkPXt0aGlzLm9uVGV4dEVycm9yc0NoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uVGV4dENoYW5nZWR9XHJcbiAgICAgICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMub25Gb2N1c31cclxuICAgICAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLm9uQmx1cn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRPbmx5fVxyXG4gICAgICAgICAgICAgICAgICBzaG93VmFsaWRhdGlvbj17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIGlnbm9yZUNvbnRleHQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e3RoaXMucHJvcHMudmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgICAgY3VzdG9tVmFsaWRhdG9ycz17dGhpcy5wcm9wcy5jdXN0b21WYWxpZGF0b3JzfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZSAmJiB0aGlzLnByb3BzLnNob3dTdWdnZXN0aW9ucyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxUYWdzU3VnZ2VzdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRleHQtaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbG93TmV3PXt0aGlzLnByb3BzLmFsbG93TmV3fVxyXG4gICAgICAgICAgICAgICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj17dGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb259XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5mZXRjaGluZ0V4aXN0aW5nVGFnc31cclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nQ29tcG9uZW50PXt0aGlzLnByb3BzLnN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudH1cclxuICAgICAgICAgICAgICAgICAgICBpc1Zpc2libGU9e3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnNWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIEVtcHR5Q29tcG9uZW50PXt0aGlzLnByb3BzLnN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFncz17c3VnZ2VzdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RlZD17dGhpcy5vblN1Z2dlc3Rpb25TZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrT3V0c2lkZT17dGhpcy5vbkNsaWNrT3V0c2lkZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBBZGROZXdUYWdDb21wb25lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hbGxvd05ldyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuZXhpc3RpbmdUYWdzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBlLm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICghdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnN0YXRlLmZldGNoZWRFeGlzdGluZ1RhZ3MuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlID0+IGUubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50ZXh0SXNWYWxpZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLWFkZC1uZXctYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X19zdWdnZXN0aW9uIHRhZ3MtaW5wdXRfX2FkZC1uZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYWRkTmV3VGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG5ldyBcInt0aGlzLnN0YXRlLnZhbHVlfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJEZWZhdWx0VmFsaWRhdGlvbigpfVxyXG4gICAgICAgICAge3RoaXMucHJvcHMubGFiZWwgJiYgKFxyXG4gICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGV4dElzRm9jdXNlZCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWFkT25seSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA+PSB0aGlzLnByb3BzLm1heFRhZ3NcclxuICAgICAgICAgICAgICAgICAgPyAnbGFiZWwtLWZvY3VzZWQnXHJcbiAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJMYWJlbCgpfVxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25UZXh0RXJyb3JzQ2hhbmdlZCA9ICh0ZXh0RXJyb3JzOiBWYWxpZGF0aW9uRXJyb3JbXSkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7IHRleHRFcnJvcnMgfSksXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcblxyXG4gIHByaXZhdGUgb25Gb2N1cyA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHsgdGV4dElzRm9jdXNlZDogdHJ1ZSwgc3VnZ2VzdGlvbnNWaXNpYmxlOiB0cnVlLCB0b3VjaGVkOiB0cnVlIH0sXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKClcclxuICAgICk7XHJcbiAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKHRoaXMuc3RhdGUudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25LZXlEb3duID0gKHN1Z2dlc3Rpb25zOiBUYWdbXSkgPT4gYXN5bmMgZSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGUua2V5ID09PSAnRW50ZXInICYmXHJcbiAgICAgICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyB8fFxyXG4gICAgICAgIHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICE9PSB1bmRlZmluZWQpICYmXHJcbiAgICAgIHRoaXMuc3RhdGUudGV4dEVycm9ycy5sZW5ndGggPT09IDBcclxuICAgICkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nVGFnID1cclxuICAgICAgICB0aGlzLnByb3BzLmV4aXN0aW5nVGFncyAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzLmZpbmQoZXQgPT4gZXQubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKFxyXG4gICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmNvbmNhdChzdWdnZXN0aW9uc1t0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbl0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnLCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGV4aXN0aW5nVGFnKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKHRoaXMucHJvcHMudGFncy5jb25jYXQoZXhpc3RpbmdUYWcpKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5hbGxvd05ldykge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYWRkTmV3VGFnKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHN1Z2dlc3Rpb25zLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUpIHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICBjb25zdCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gMFxyXG4gICAgICAgICAgICA/IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAtIDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICBjb25zdCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiArIDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGFkZE5ld1RhZyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhZyA9IGF3YWl0IHRoaXMucHJvcHMub25OZXdUYWdBZGRlZCh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgIGlmIChuZXdUYWcpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKFxyXG4gICAgICAgIHRoaXMucHJvcHMudGFncyA/IHRoaXMucHJvcHMudGFncy5jb25jYXQobmV3VGFnKSA6IFtuZXdUYWddXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnLCB0ZXh0RXJyb3JzOiBbXSB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25TdWdnZXN0aW9uU2VsZWN0ZWQgPSAodGFnOiBUYWcpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZCh0aGlzLnByb3BzLnRhZ3MuY29uY2F0KHRhZykpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgeyB2YWx1ZTogJycsIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLCB0ZXh0RXJyb3JzOiBbXSB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIXRoaXMucHJvcHMubWF4VGFncyAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCArIDEgPCB0aGlzLnByb3BzLm1heFRhZ3NcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uQmx1ciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0SXNGb2N1c2VkOiBmYWxzZSxcclxuICAgICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCxcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uQ2xpY2tPdXRzaWRlID0gKCkgPT5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCxcclxuICAgIH0pO1xyXG5cclxuICBwcml2YXRlIG9uVGV4dENoYW5nZWQgPSAoXHJcbiAgICBlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PixcclxuICAgIGlzVmFsaWQ6IGJvb2xlYW5cclxuICApID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAoKSA9PiAoe1xyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIGlzVmFsaWQ6IGlzVmFsaWQsXHJcbiAgICAgICAgdGV4dElzVmFsaWQ6IGlzVmFsaWQsXHJcbiAgICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiB0cnVlLFxyXG4gICAgICB9KSxcclxuICAgICAgKCkgPT4gdGhpcy5oYW5kbGVFcnJvcnMoKVxyXG4gICAgKTtcclxuICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRXJyb3JzID0gKHRhZ3M6IFRhZ1tdID0gdGhpcy5wcm9wcy50YWdzKSA9PiB7XHJcbiAgICBsZXQgZXJyb3JzID0gdGhpcy5nZXRFcnJvcnModGFncyk7XHJcbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZXRJbnZhbGlkKGVycm9ycyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFZhbGlkKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBnZXRFcnJvcnModGFnczogVGFnW10pIHtcclxuICAgIGxldCBlcnJvcnMgPSBbXTtcclxuICAgIGlmICh0YWdzLmxlbmd0aCA8IHRoaXMucHJvcHMubWF4VGFncykge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMuc3RhdGUudGV4dEVycm9ycyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycgJiYgdGFncy5sZW5ndGggPT09IDAgJiYgdGhpcy5wcm9wcy5yZXF1aXJlZCkge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMucHJvcHMuZXJyb3JzVHJhbnNsYXRpb25zLnJlcXVpcmVkKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlICYmIHRoaXMucHJvcHMuYWxsb3dOZXcgJiYgIXRoaXMuc3RhdGUudGV4dElzRm9jdXNlZCkge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMucHJvcHMudmFsdWVOb3RBZGRlZEVycm9yKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLm1heFRhZ3MgPCAodGhpcy5wcm9wcy50YWdzICYmIHRoaXMucHJvcHMudGFncy5sZW5ndGgpKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5wcm9wcy5tYXhUYWdzU3VycGFzc2VkRXJyb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVycm9ycy5maWx0ZXIoaSA9PiBpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmV0Y2hFeGlzdGluZ1RhZ3Moc3RhcnRzV2l0aDogc3RyaW5nID0gJycpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmZldGNoRXhpc3RpbmdUYWdzKSB7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB0aGlzLnNldFN0YXRlKHsgZmV0Y2hpbmdFeGlzdGluZ1RhZ3M6IHRydWUgfSksXHJcbiAgICAgICAgdGhpcy5wcm9wcy5sb2FkaW5nRGVsYXlNc1xyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnByb3BzLmZldGNoRXhpc3RpbmdUYWdzKHN0YXJ0c1dpdGgpLnRoZW4oZmV0Y2hlZEV4aXN0aW5nVGFncyA9PiB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGZldGNoZWRFeGlzdGluZ1RhZ3MsXHJcbiAgICAgICAgICBmZXRjaGluZ0V4aXN0aW5nVGFnczogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTdWdnZXN0aW9ucygpIHtcclxuICAgIGNvbnN0IGV4aXN0aW5nVGFnczogVGFnW10gPSBbXVxyXG4gICAgICAuY29uY2F0KHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzID8gdGhpcy5wcm9wcy5leGlzdGluZ1RhZ3MgOiBbXSlcclxuICAgICAgLmNvbmNhdChcclxuICAgICAgICB0aGlzLnN0YXRlLmZldGNoZWRFeGlzdGluZ1RhZ3MgPyB0aGlzLnN0YXRlLmZldGNoZWRFeGlzdGluZ1RhZ3MgOiBbXVxyXG4gICAgICApO1xyXG4gICAgY29uc3QgZmlsdGVyZWRUYWdzID0gdGhpcy5wcm9wcy5maWx0ZXJFeGlzdGluZ1RhZ3MoXHJcbiAgICAgIHRoaXMuc3RhdGUudmFsdWUgPyB0aGlzLnN0YXRlLnZhbHVlLnRvTG93ZXJDYXNlKCkgOiAnJyxcclxuICAgICAgZXhpc3RpbmdUYWdzXHJcbiAgICApO1xyXG4gICAgbGV0IHN1Z2dlc3Rpb25zID0gZmlsdGVyZWRUYWdzXHJcbiAgICAgIC5maWx0ZXIodGFnID0+ICF0aGlzLnByb3BzLnRhZ3Muc29tZSh0ID0+IHQuaWQgPT09IHRhZy5pZCkpXHJcbiAgICAgIC5zbGljZSgwLCB0aGlzLnByb3BzLm1heFN1Z2dlc3Rpb25zKTtcclxuICAgIHJldHVybiBzdWdnZXN0aW9ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyVGFnKHRhZzogVGFnLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBib2R5ID0gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHt0YWcubmFtZX1cclxuICAgICAgICB7IXRoaXMucHJvcHMucmVhZE9ubHkgJiYgKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy10YWctJyArIGluZGV4LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBjaXJjdWxhcj17dHJ1ZX1cclxuICAgICAgICAgICAgYmxhbms9e3RydWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudGFnUmVtb3ZlQ2xpY2sodGFnKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMSB0cmFuc2Zvcm0tcm90YXRlLS00NSBsaW5lLWhlaWdodC0tMCBwLTBcIlxyXG4gICAgICAgICAgICBDb21wb25lbnQ9e3AgPT4gKFxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cC5jbGFzc05hbWV9IGlkPXtwLmlkfSBvbkNsaWNrPXtwLm9uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAge3AuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8UGx1c0ljb24gLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoJ3RhZ3MtaW5wdXRfX3RhZycsIHtcclxuICAgICAgJ3RhZ3MtaW5wdXRfX3RhZy1jaGlwJzogdGhpcy5wcm9wcy5zaG93Q2hpcHMsXHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uVGFnQ2xpY2spIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRhZ0NsaWNrKHRhZyl9XHJcbiAgICAgICAgICBzbWFsbD17dHJ1ZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7Ym9keX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgb25DbGljaz17dGhpcy50YWdDbGljayh0YWcpfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAge2JvZHl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdGFnQ2xpY2sgPSAodGFnOiBUYWcpID0+ICgpID0+IHtcclxuICAgIHRoaXMucHJvcHMub25UYWdDbGljayAmJiB0aGlzLnByb3BzLm9uVGFnQ2xpY2sodGFnKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHRhZ1JlbW92ZUNsaWNrID0gKHRhZzogVGFnKSA9PiAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCBuZXdUYWdzID0gdGhpcy5wcm9wcy50YWdzLmZpbHRlcihzdiA9PiBzdi5pZCAhPT0gdGFnLmlkKTtcclxuICAgIGlmIChuZXdUYWdzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZm9jdXMoKSwgNTApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIHRoaXMucHJvcHMub25UYWdzQ2hhbmdlZCAmJiB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQobmV3VGFncyk7XHJcbiAgICB0aGlzLmhhbmRsZUVycm9ycyhuZXdUYWdzKTtcclxuICAgIC8vIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJlbmRlclRhZ3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy50YWdzICYmIHRoaXMucHJvcHMudGFncy5sZW5ndGggPiAwID8gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3RhZ19fd3JhcHBlclwiPlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnRhZ3MubWFwKChpdGVtLCBpbmRleCkgPT4gdGhpcy5yZW5kZXJUYWcoaXRlbSwgaW5kZXgpKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApIDogKFxyXG4gICAgICB0aGlzLnByb3BzLnJlYWRPbmx5ICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3RhZ19fd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdcIj5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMucmVhZG9ubHlFbXB0eVBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVGFncyA9IHdpdGhGb3JtQ29udGV4dDxUYWdzUHJvcHM+KFxyXG4gIChvbkNsaWNrT3V0c2lkZShUYWdzUmF3KSBhcyB1bmtub3duKSBhcyBSZWFjdC5Db21wb25lbnRDbGFzczxUYWdzUHJvcHM+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWdzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9