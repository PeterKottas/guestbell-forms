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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

      _this.fetchExistingTags();
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

    _this.onBlur = function () {
      _this.setState({
        textIsFocused: false,
        preselectedSuggestion: undefined
      }, function () {
        return _this.handleErrors();
      });
    };

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
    return _this;
  }

  _createClass(TagsRaw, [{
    key: "focus",
    value: function focus() {
      if (this.textRef && this.textRef.inputRef) {
        var domNode = react_dom__WEBPACK_IMPORTED_MODULE_8__["findDOMNode"](this.textRef.inputRef.current);
        domNode && domNode.focus();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.tags !== this.props.tags || nextProps.validators !== this.props.validators || nextProps.customValidators !== this.props.customValidators || nextProps.required !== this.props.required) {
        this.handleErrors(nextProps.tags);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var textProps = this.props.textProps ? this.props.textProps : {};
      var suggestions = this.getSuggestions();
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_inputGroup_InputGroup__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
        title: this.props.title
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, this.props.id && {
        id: this.props.id
      }, {
        className: 'input__base tags-input ' + this.getValidationClass() + (this.props.className ? ' ' + this.props.className : '') + ' ' + (this.props.readOnly ? 'tags-input--readOnly ' : ''),
        ref: this.containerRef
      }), this.renderTags(), (!this.props.maxTags || this.props.maxTags > (this.props.tags && this.props.tags.length)) && !this.props.readOnly && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: 'tags-input__tags__wrapper ' + (this.props.readOnly ? 'filled ' : '')
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_text_Text__WEBPACK_IMPORTED_MODULE_2__["Text"], _extends({}, textProps, this.props.id && {
        id: this.props.id + '-text-input'
      }, {
        // tslint:disable-next-line: no-any
        innerRef: function innerRef(val) {
          return _this2.textRef = val;
        },
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
        errors = errors.concat('Required');
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
      var className = classnames__WEBPACK_IMPORTED_MODULE_9___default()('tags-input__tag', {
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
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TagsRaw, "TagsRaw", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\Tags.tsx");
  reactHotLoader.register(Tags, "Tags", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\Tags.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\Tags.tsx");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2NvbXBvbmVudHMvdGFncy9UYWdzLnRzeCJdLCJuYW1lcyI6WyJUYWdzUmF3IiwicHJvcHMiLCJ0ZXh0UmVmIiwib25UZXh0RXJyb3JzQ2hhbmdlZCIsInRleHRFcnJvcnMiLCJzZXRTdGF0ZSIsImhhbmRsZUVycm9ycyIsIm9uRm9jdXMiLCJ0ZXh0SXNGb2N1c2VkIiwic3VnZ2VzdGlvbnNWaXNpYmxlIiwidG91Y2hlZCIsImZldGNoRXhpc3RpbmdUYWdzIiwib25LZXlEb3duIiwic3VnZ2VzdGlvbnMiLCJlIiwia2V5Iiwic3RhdGUiLCJ2YWx1ZSIsInByZXNlbGVjdGVkU3VnZ2VzdGlvbiIsInVuZGVmaW5lZCIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZXhpc3RpbmdUYWciLCJleGlzdGluZ1RhZ3MiLCJmaW5kIiwiZXQiLCJuYW1lIiwib25UYWdzQ2hhbmdlZCIsInRhZ3MiLCJjb25jYXQiLCJhbGxvd05ldyIsImFkZE5ld1RhZyIsIm9uTmV3VGFnQWRkZWQiLCJuZXdUYWciLCJvblN1Z2dlc3Rpb25TZWxlY3RlZCIsInRhZyIsIm1heFRhZ3MiLCJvbkJsdXIiLCJvbkNsaWNrT3V0c2lkZSIsIm9uVGV4dENoYW5nZWQiLCJpc1ZhbGlkIiwidGFyZ2V0IiwidGV4dElzVmFsaWQiLCJlcnJvcnMiLCJnZXRFcnJvcnMiLCJzZXRJbnZhbGlkIiwic2V0VmFsaWQiLCJ0YWdDbGljayIsIm9uVGFnQ2xpY2siLCJ0YWdSZW1vdmVDbGljayIsIm5ld1RhZ3MiLCJmaWx0ZXIiLCJzdiIsImlkIiwic2V0VGltZW91dCIsImZvY3VzIiwiZmV0Y2hpbmdFeGlzdGluZ1RhZ3MiLCJmZXRjaGVkRXhpc3RpbmdUYWdzIiwiaW5wdXRSZWYiLCJkb21Ob2RlIiwiUmVhY3RET00iLCJjdXJyZW50IiwibmV4dFByb3BzIiwidmFsaWRhdG9ycyIsImN1c3RvbVZhbGlkYXRvcnMiLCJyZXF1aXJlZCIsInRleHRQcm9wcyIsImdldFN1Z2dlc3Rpb25zIiwidGl0bGUiLCJnZXRWYWxpZGF0aW9uQ2xhc3MiLCJjbGFzc05hbWUiLCJyZWFkT25seSIsImNvbnRhaW5lclJlZiIsInJlbmRlclRhZ3MiLCJ2YWwiLCJzaG93U3VnZ2VzdGlvbnMiLCJzdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnQiLCJzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50IiwicmVuZGVyRGVmYXVsdFZhbGlkYXRpb24iLCJsYWJlbCIsInJlbmRlckxhYmVsIiwidmFsdWVOb3RBZGRlZEVycm9yIiwibWF4VGFnc1N1cnBhc3NlZEVycm9yIiwiaSIsInN0YXJ0c1dpdGgiLCJ0aW1lciIsImxvYWRpbmdEZWxheU1zIiwidGhlbiIsImNsZWFyVGltZW91dCIsImZpbHRlcmVkVGFncyIsImZpbHRlckV4aXN0aW5nVGFncyIsInRvTG93ZXJDYXNlIiwic29tZSIsInQiLCJzbGljZSIsIm1heFN1Z2dlc3Rpb25zIiwiaW5kZXgiLCJib2R5IiwidG9TdHJpbmciLCJwIiwib25DbGljayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lcyIsInNob3dDaGlwcyIsIm1hcCIsIml0ZW0iLCJyZW5kZXJUYWciLCJyZWFkb25seUVtcHR5UGxhY2Vob2xkZXIiLCJCYXNlSW5wdXQiLCJkZWZhdWx0UHJvcHMiLCJkaXNhYmxlZCIsIm5ld1RhZ05hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsIkRhdGUiLCJnZXRUaW1lIiwidGV4dCIsIlRhZ3MiLCJ3aXRoRm9ybUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFFQTtBQUVBO0NBR0E7O0FBNENPLElBQU1BLE9BQWI7QUFBQTtBQUFBO0FBQUE7O0FBNEJFLG1CQUFZQyxLQUFaLEVBQWlDO0FBQUE7O0FBQUE7O0FBQy9CLGlGQUFNQSxLQUFOO0FBRCtCLFVBRnpCQyxPQUV5Qjs7QUFBQSxVQXNKekJDLG1CQXRKeUIsR0FzSkgsVUFBQ0MsVUFBRDtBQUFBLGFBQzVCLE1BQUtDLFFBQUwsQ0FBYztBQUFBLGVBQU87QUFBRUQsb0JBQVUsRUFBVkE7QUFBRixTQUFQO0FBQUEsT0FBZCxFQUFzQztBQUFBLGVBQU0sTUFBS0UsWUFBTCxFQUFOO0FBQUEsT0FBdEMsQ0FENEI7QUFBQSxLQXRKRzs7QUFBQSxVQXlKekJDLE9Bekp5QixHQXlKZixZQUFNO0FBQ3RCLFlBQUtGLFFBQUwsQ0FDRTtBQUFFRyxxQkFBYSxFQUFFLElBQWpCO0FBQXVCQywwQkFBa0IsRUFBRSxJQUEzQztBQUFpREMsZUFBTyxFQUFFO0FBQTFELE9BREYsRUFFRTtBQUFBLGVBQU0sTUFBS0osWUFBTCxFQUFOO0FBQUEsT0FGRjs7QUFJQSxZQUFLSyxpQkFBTDtBQUNELEtBL0pnQzs7QUFBQSxVQWlLekJDLFNBakt5QixHQWlLYixVQUFDQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUF3QixpQkFBTUMsQ0FBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRXhDQSxDQUFDLENBQUNDLEdBQUYsS0FBVSxPQUFWLEtBQ0MsTUFBS0MsS0FBTCxDQUFXQyxLQUFYLEtBQXFCLEVBQXJCLElBQ0MsTUFBS0QsS0FBTCxDQUFXRSxxQkFBWCxLQUFxQ0MsU0FGdkMsS0FHQSxNQUFLSCxLQUFMLENBQVdaLFVBQVgsQ0FBc0JnQixNQUF0QixLQUFpQyxDQUxPO0FBQUE7QUFBQTtBQUFBOztBQU94Q04scUJBQUMsQ0FBQ08sY0FBRjtBQUNBUCxxQkFBQyxDQUFDUSxlQUFGO0FBQ01DLCtCQVRrQyxHQVV0QyxNQUFLdEIsS0FBTCxDQUFXdUIsWUFBWCxJQUNBLE1BQUt2QixLQUFMLENBQVd1QixZQUFYLENBQXdCQyxJQUF4QixDQUE2QixVQUFBQyxFQUFFO0FBQUEsNkJBQUlBLEVBQUUsQ0FBQ0MsSUFBSCxLQUFZLE1BQUtYLEtBQUwsQ0FBV0MsS0FBM0I7QUFBQSxxQkFBL0IsQ0FYc0M7O0FBQUEsMEJBWXBDLE1BQUtELEtBQUwsQ0FBV0UscUJBQVgsS0FBcUNDLFNBWkQ7QUFBQTtBQUFBO0FBQUE7O0FBYXRDLDBCQUFLbEIsS0FBTCxDQUFXMkIsYUFBWCxDQUNFLE1BQUszQixLQUFMLENBQVc0QixJQUFYLENBQWdCQyxNQUFoQixDQUF1QmpCLFdBQVcsQ0FBQyxNQUFLRyxLQUFMLENBQVdFLHFCQUFaLENBQWxDLENBREY7O0FBR0EsMEJBQUtiLFFBQUwsQ0FBYztBQUFFWSwyQkFBSyxFQUFFLEVBQVQ7QUFBYUMsMkNBQXFCLEVBQUVDO0FBQXBDLHFCQUFkLEVBQStELFlBQU07QUFDbkUsNEJBQUtSLGlCQUFMOztBQUNBLDRCQUFLTCxZQUFMO0FBQ0QscUJBSEQ7O0FBaEJzQztBQUFBOztBQUFBO0FBQUEseUJBb0I3QmlCLFdBcEI2QjtBQUFBO0FBQUE7QUFBQTs7QUFxQnRDLDBCQUFLdEIsS0FBTCxDQUFXMkIsYUFBWCxDQUF5QixNQUFLM0IsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQkMsTUFBaEIsQ0FBdUJQLFdBQXZCLENBQXpCOztBQUNBLDBCQUFLbEIsUUFBTCxDQUFjO0FBQUVZLDJCQUFLLEVBQUU7QUFBVCxxQkFBZCxFQUE2QixZQUFNO0FBQ2pDLDRCQUFLTixpQkFBTDs7QUFDQSw0QkFBS0wsWUFBTDtBQUNELHFCQUhEOztBQXRCc0M7QUFBQTs7QUFBQTtBQUFBLHlCQTBCN0IsTUFBS0wsS0FBTCxDQUFXOEIsUUExQmtCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsMkJBMkJoQyxNQUFLQyxTQUFMLEVBM0JnQzs7QUFBQTtBQTRCdEMsMEJBQUsxQixZQUFMOztBQTVCc0M7QUErQjFDLHdCQUFJTyxXQUFXLENBQUNPLE1BQVosR0FBcUIsQ0FBckIsSUFBMEIsTUFBS0osS0FBTCxDQUFXUCxrQkFBekMsRUFBNkQ7QUFDM0QsMEJBQUlLLENBQUMsQ0FBQ0MsR0FBRixLQUFVLFNBQWQsRUFBeUI7QUFDakJHLDZDQURpQixHQUVyQixNQUFLRixLQUFMLENBQVdFLHFCQUFYLEtBQXFDQyxTQUFyQyxHQUNJTixXQUFXLENBQUNPLE1BQVosR0FBcUIsQ0FEekIsR0FFSSxNQUFLSixLQUFMLENBQVdFLHFCQUFYLEtBQXFDLENBQXJDLEdBQ0FMLFdBQVcsQ0FBQ08sTUFBWixHQUFxQixDQURyQixHQUVBLE1BQUtKLEtBQUwsQ0FBV0UscUJBQVgsR0FBbUMsQ0FObEI7O0FBT3ZCLDhCQUFLYixRQUFMLENBQWM7QUFBRWEsK0NBQXFCLEVBQXJCQTtBQUFGLHlCQUFkO0FBQ0QsdUJBUkQsTUFRTyxJQUFJSixDQUFDLENBQUNDLEdBQUYsS0FBVSxXQUFkLEVBQTJCO0FBQzFCRyw4Q0FEMEIsR0FFOUIsTUFBS0YsS0FBTCxDQUFXRSxxQkFBWCxLQUFxQ0MsU0FBckMsR0FDSSxDQURKLEdBRUksTUFBS0gsS0FBTCxDQUFXRSxxQkFBWCxLQUFxQ0wsV0FBVyxDQUFDTyxNQUFaLEdBQXFCLENBQTFELEdBQ0EsQ0FEQSxHQUVBLE1BQUtKLEtBQUwsQ0FBV0UscUJBQVgsR0FBbUMsQ0FOVDs7QUFPaEMsOEJBQUtiLFFBQUwsQ0FBYztBQUFFYSwrQ0FBcUIsRUFBckJBO0FBQUYseUJBQWQ7QUFDRCx1QkFSTSxNQVFBO0FBQ0wsOEJBQUtiLFFBQUwsQ0FBYztBQUFFYSwrQ0FBcUIsRUFBRUM7QUFBekIseUJBQWQ7QUFDRDtBQUNGOztBQW5EeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBeEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBakthOztBQUFBLFVBdU56QmEsU0F2TnlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBdU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0csTUFBSy9CLEtBQUwsQ0FBV2dDLGFBQVgsQ0FBeUIsTUFBS2pCLEtBQUwsQ0FBV0MsS0FBcEMsQ0FESDs7QUFBQTtBQUNaaUIsb0JBRFk7O0FBRWxCLGtCQUFJQSxNQUFKLEVBQVk7QUFDVixzQkFBS2pDLEtBQUwsQ0FBVzJCLGFBQVgsQ0FDRSxNQUFLM0IsS0FBTCxDQUFXNEIsSUFBWCxHQUFrQixNQUFLNUIsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQkMsTUFBaEIsQ0FBdUJJLE1BQXZCLENBQWxCLEdBQW1ELENBQUNBLE1BQUQsQ0FEckQ7QUFHRDs7QUFDRCxvQkFBSzdCLFFBQUwsQ0FBYztBQUFFWSxxQkFBSyxFQUFFLEVBQVQ7QUFBYWIsMEJBQVUsRUFBRTtBQUF6QixlQUFkLEVBQTZDLFlBQU07QUFDakQsc0JBQUtPLGlCQUFMOztBQUNBLHNCQUFLTCxZQUFMO0FBQ0QsZUFIRDs7QUFQa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F2TmE7O0FBQUEsVUFvT3pCNkIsb0JBcE95QixHQW9PRixVQUFBQyxHQUFHLEVBQUk7QUFDcEMsWUFBS25DLEtBQUwsQ0FBVzJCLGFBQVgsQ0FBeUIsTUFBSzNCLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JDLE1BQWhCLENBQXVCTSxHQUF2QixDQUF6Qjs7QUFDQSxZQUFLL0IsUUFBTCxDQUNFO0FBQUVZLGFBQUssRUFBRSxFQUFUO0FBQWFDLDZCQUFxQixFQUFFQyxTQUFwQztBQUErQ2Ysa0JBQVUsRUFBRTtBQUEzRCxPQURGLEVBRUUsWUFBTTtBQUNKLFlBQ0UsQ0FBQyxNQUFLSCxLQUFMLENBQVdvQyxPQUFaLElBQ0EsTUFBS3BDLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JULE1BQWhCLEdBQXlCLENBQXpCLEdBQTZCLE1BQUtuQixLQUFMLENBQVdvQyxPQUYxQyxFQUdFO0FBQ0EsZ0JBQUsxQixpQkFBTDtBQUNEOztBQUNELGNBQUtMLFlBQUw7QUFDRCxPQVZIO0FBWUQsS0FsUGdDOztBQUFBLFVBb1B6QmdDLE1BcFB5QixHQW9QaEIsWUFBTTtBQUNyQixZQUFLakMsUUFBTCxDQUNFO0FBQ0VHLHFCQUFhLEVBQUUsS0FEakI7QUFFRVUsNkJBQXFCLEVBQUVDO0FBRnpCLE9BREYsRUFLRTtBQUFBLGVBQU0sTUFBS2IsWUFBTCxFQUFOO0FBQUEsT0FMRjtBQU9ELEtBNVBnQzs7QUFBQSxVQThQekJpQyxjQTlQeUIsR0E4UFI7QUFBQSxhQUN2QixNQUFLbEMsUUFBTCxDQUFjO0FBQ1pJLDBCQUFrQixFQUFFLEtBRFI7QUFFWlMsNkJBQXFCLEVBQUVDO0FBRlgsT0FBZCxDQUR1QjtBQUFBLEtBOVBROztBQUFBLFVBb1F6QnFCLGFBcFF5QixHQW9RVCxVQUN0QjFCLENBRHNCLEVBRXRCMkIsT0FGc0IsRUFHbkI7QUFDSCxVQUFNeEIsS0FBSyxHQUFHSCxDQUFDLENBQUM0QixNQUFGLENBQVN6QixLQUF2Qjs7QUFDQSxZQUFLWixRQUFMLENBQ0U7QUFBQSxlQUFPO0FBQ0xZLGVBQUssRUFBTEEsS0FESztBQUVMd0IsaUJBQU8sRUFBRUEsT0FGSjtBQUdMRSxxQkFBVyxFQUFFRixPQUhSO0FBSUxoQyw0QkFBa0IsRUFBRTtBQUpmLFNBQVA7QUFBQSxPQURGLEVBT0U7QUFBQSxlQUFNLE1BQUtILFlBQUwsRUFBTjtBQUFBLE9BUEY7O0FBU0EsWUFBS0ssaUJBQUwsQ0FBdUJHLENBQUMsQ0FBQzRCLE1BQUYsQ0FBU3pCLEtBQWhDO0FBQ0QsS0FuUmdDOztBQUFBLFVBcVJ6QlgsWUFyUnlCLEdBcVJWLFlBQW1DO0FBQUEsVUFBbEN1QixJQUFrQyx1RUFBcEIsTUFBSzVCLEtBQUwsQ0FBVzRCLElBQVM7O0FBQ3hELFVBQUllLE1BQU0sR0FBRyxNQUFLQyxTQUFMLENBQWVoQixJQUFmLENBQWI7O0FBQ0EsVUFBSWUsTUFBTSxDQUFDeEIsTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQixjQUFLMEIsVUFBTCxDQUFnQkYsTUFBaEI7QUFDRCxPQUZELE1BRU87QUFDTCxjQUFLRyxRQUFMO0FBQ0Q7QUFDRixLQTVSZ0M7O0FBQUEsVUE2WHpCQyxRQTdYeUIsR0E2WGQsVUFBQ1osR0FBRDtBQUFBLGFBQWMsWUFBTTtBQUNyQyxjQUFLbkMsS0FBTCxDQUFXZ0QsVUFBWCxJQUF5QixNQUFLaEQsS0FBTCxDQUFXZ0QsVUFBWCxDQUFzQmIsR0FBdEIsQ0FBekI7QUFDRCxPQUZrQjtBQUFBLEtBN1hjOztBQUFBLFVBaVl6QmMsY0FqWXlCLEdBaVlSLFVBQUNkLEdBQUQ7QUFBQSxhQUFjLFVBQUN0QixDQUFELEVBQXNDO0FBQzNFQSxTQUFDLENBQUNRLGVBQUY7O0FBQ0EsWUFBTTZCLE9BQU8sR0FBRyxNQUFLbEQsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQnVCLE1BQWhCLENBQXVCLFVBQUFDLEVBQUU7QUFBQSxpQkFBSUEsRUFBRSxDQUFDQyxFQUFILEtBQVVsQixHQUFHLENBQUNrQixFQUFsQjtBQUFBLFNBQXpCLENBQWhCOztBQUNBLFlBQUlILE9BQU8sQ0FBQy9CLE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEJtQyxvQkFBVSxDQUFDO0FBQUEsbUJBQU0sTUFBS0MsS0FBTCxFQUFOO0FBQUEsV0FBRCxFQUFxQixFQUFyQixDQUFWO0FBQ0Q7O0FBQ0QsY0FBS25ELFFBQUwsQ0FBYztBQUNaSSw0QkFBa0IsRUFBRTtBQURSLFNBQWQ7O0FBR0EsY0FBS1IsS0FBTCxDQUFXMkIsYUFBWCxJQUE0QixNQUFLM0IsS0FBTCxDQUFXMkIsYUFBWCxDQUF5QnVCLE9BQXpCLENBQTVCOztBQUNBLGNBQUs3QyxZQUFMLENBQWtCNkMsT0FBbEIsRUFWMkUsQ0FXM0U7O0FBQ0QsT0Fad0I7QUFBQSxLQWpZUTs7QUFFL0IsVUFBS25DLEtBQUwscUJBQ0ssTUFBS0EsS0FEVjtBQUVFWixnQkFBVSxFQUFFLEVBRmQ7QUFHRUksbUJBQWEsRUFBRSxLQUhqQjtBQUlFQyx3QkFBa0IsRUFBRSxLQUp0QjtBQUtFZ0QsMEJBQW9CLEVBQUUsS0FMeEI7QUFNRWQsaUJBQVcsRUFBRSxLQU5mO0FBT0VlLHlCQUFtQixFQUFFO0FBUHZCO0FBRitCO0FBV2hDOztBQXZDSDtBQUFBO0FBQUEsNEJBeUNpQjtBQUNiLFVBQUksS0FBS3hELE9BQUwsSUFBZ0IsS0FBS0EsT0FBTCxDQUFheUQsUUFBakMsRUFBMkM7QUFDekMsWUFBTUMsT0FBb0IsR0FBR0MscURBQUEsQ0FDMUIsS0FBSzNELE9BQUwsQ0FBYXlELFFBQWQsQ0FBd0RHLE9BRDdCLENBQTdCO0FBR0FGLGVBQU8sSUFBSUEsT0FBTyxDQUFDSixLQUFSLEVBQVg7QUFDRDtBQUNGO0FBaERIO0FBQUE7QUFBQSw4Q0FrRG1DTyxTQWxEbkMsRUFrRDREO0FBQ3hELFVBQ0VBLFNBQVMsQ0FBQ2xDLElBQVYsS0FBbUIsS0FBSzVCLEtBQUwsQ0FBVzRCLElBQTlCLElBQ0FrQyxTQUFTLENBQUNDLFVBQVYsS0FBeUIsS0FBSy9ELEtBQUwsQ0FBVytELFVBRHBDLElBRUFELFNBQVMsQ0FBQ0UsZ0JBQVYsS0FBK0IsS0FBS2hFLEtBQUwsQ0FBV2dFLGdCQUYxQyxJQUdBRixTQUFTLENBQUNHLFFBQVYsS0FBdUIsS0FBS2pFLEtBQUwsQ0FBV2lFLFFBSnBDLEVBS0U7QUFDQSxhQUFLNUQsWUFBTCxDQUFrQnlELFNBQVMsQ0FBQ2xDLElBQTVCO0FBQ0Q7QUFDRjtBQTNESDtBQUFBO0FBQUEsNkJBNkRrQjtBQUFBOztBQUNkLFVBQU1zQyxTQUFTLEdBQUcsS0FBS2xFLEtBQUwsQ0FBV2tFLFNBQVgsR0FBdUIsS0FBS2xFLEtBQUwsQ0FBV2tFLFNBQWxDLEdBQThDLEVBQWhFO0FBQ0EsVUFBTXRELFdBQVcsR0FBRyxLQUFLdUQsY0FBTCxFQUFwQjtBQUNBLGFBQ0Usb0RBQUMsaUVBQUQ7QUFBWSxhQUFLLEVBQUUsS0FBS25FLEtBQUwsQ0FBV29FO0FBQTlCLFNBQ0Usd0VBQ08sS0FBS3BFLEtBQUwsQ0FBV3FELEVBQVgsSUFBaUI7QUFDcEJBLFVBQUUsRUFBRSxLQUFLckQsS0FBTCxDQUFXcUQ7QUFESyxPQUR4QjtBQUlFLGlCQUFTLEVBQ1AsNEJBQ0EsS0FBS2dCLGtCQUFMLEVBREEsSUFFQyxLQUFLckUsS0FBTCxDQUFXc0UsU0FBWCxHQUF1QixNQUFNLEtBQUt0RSxLQUFMLENBQVdzRSxTQUF4QyxHQUFvRCxFQUZyRCxJQUdBLEdBSEEsSUFJQyxLQUFLdEUsS0FBTCxDQUFXdUUsUUFBWCxHQUFzQix1QkFBdEIsR0FBZ0QsRUFKakQsQ0FMSjtBQVdFLFdBQUcsRUFBRSxLQUFLQztBQVhaLFVBYUcsS0FBS0MsVUFBTCxFQWJILEVBY0csQ0FBQyxDQUFDLEtBQUt6RSxLQUFMLENBQVdvQyxPQUFaLElBQ0EsS0FBS3BDLEtBQUwsQ0FBV29DLE9BQVgsSUFBc0IsS0FBS3BDLEtBQUwsQ0FBVzRCLElBQVgsSUFBbUIsS0FBSzVCLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JULE1BQXpELENBREQsS0FFQyxDQUFDLEtBQUtuQixLQUFMLENBQVd1RSxRQUZiLElBR0c7QUFDRSxpQkFBUyxFQUNQLGdDQUNDLEtBQUt2RSxLQUFMLENBQVd1RSxRQUFYLEdBQXNCLFNBQXRCLEdBQWtDLEVBRG5DO0FBRkosU0FNRSxvREFBQywrQ0FBRCxlQUNNTCxTQUROLEVBRU8sS0FBS2xFLEtBQUwsQ0FBV3FELEVBQVgsSUFBaUI7QUFDcEJBLFVBQUUsRUFBRSxLQUFLckQsS0FBTCxDQUFXcUQsRUFBWCxHQUFnQjtBQURBLE9BRnhCO0FBS0U7QUFDQSxnQkFBUSxFQUFFLGtCQUFBcUIsR0FBRztBQUFBLGlCQUFLLE1BQUksQ0FBQ3pFLE9BQUwsR0FBZXlFLEdBQXBCO0FBQUEsU0FOZjtBQU9FLGdCQUFRLEVBQ04sS0FBSzFFLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JULE1BQWhCLEdBQXlCLENBQXpCLEdBQTZCLEtBQTdCLEdBQXFDLEtBQUtuQixLQUFMLENBQVdpRSxRQVJwRDtBQVVFLGlCQUFTLEVBQ1AsNkJBQ0NDLFNBQVMsQ0FBQ0ksU0FBVixHQUFzQkosU0FBUyxDQUFDSSxTQUFoQyxHQUE0QyxFQUQ3QyxDQVhKO0FBY0UsaUJBQVMsRUFBRSxLQUFLM0QsU0FBTCxDQUFlQyxXQUFmLENBZGI7QUFlRSx1QkFBZSxFQUFFLEtBQUtWLG1CQWZ4QjtBQWdCRSxnQkFBUSxFQUFFLEtBQUtxQyxhQWhCakI7QUFpQkUsZUFBTyxFQUFFLEtBQUtqQyxPQWpCaEI7QUFrQkUsY0FBTSxFQUFFLEtBQUsrQixNQWxCZjtBQW1CRSxhQUFLLEVBQUUsS0FBS3RCLEtBQUwsQ0FBV0MsS0FuQnBCO0FBb0JFLGdCQUFRLEVBQUUsS0FBS2hCLEtBQUwsQ0FBV3VFLFFBcEJ2QjtBQXFCRSxzQkFBYyxFQUFFLEtBckJsQjtBQXNCRSxxQkFBYSxFQUFFLElBdEJqQjtBQXVCRSxrQkFBVSxFQUFFLEtBQUt2RSxLQUFMLENBQVcrRCxVQXZCekI7QUF3QkUsd0JBQWdCLEVBQUUsS0FBSy9ELEtBQUwsQ0FBV2dFO0FBeEIvQixTQU5GLEVBZ0NHLEtBQUtqRCxLQUFMLENBQVdQLGtCQUFYLElBQWlDLEtBQUtSLEtBQUwsQ0FBVzJFLGVBQTVDLElBQ0Msb0RBQUMsc0VBQUQsZUFDTyxLQUFLM0UsS0FBTCxDQUFXcUQsRUFBWCxJQUFpQjtBQUNwQkEsVUFBRSxFQUFFLEtBQUtyRCxLQUFMLENBQVdxRCxFQUFYLEdBQWdCO0FBREEsT0FEeEI7QUFJRSxnQkFBUSxFQUFFLEtBQUtyRCxLQUFMLENBQVc4QixRQUp2QjtBQUtFLDZCQUFxQixFQUFFLEtBQUtmLEtBQUwsQ0FBV0UscUJBTHBDO0FBTUUsZUFBTyxFQUFFLEtBQUtGLEtBQUwsQ0FBV3lDLG9CQU50QjtBQU9FLHdCQUFnQixFQUFFLEtBQUt4RCxLQUFMLENBQVc0RSwyQkFQL0I7QUFRRSxpQkFBUyxFQUFFLEtBQUs3RCxLQUFMLENBQVdQLGtCQVJ4QjtBQVNFLHNCQUFjLEVBQUUsS0FBS1IsS0FBTCxDQUFXNkUseUJBVDdCO0FBVUUsWUFBSSxFQUFFakUsV0FWUjtBQVdFLGtCQUFVLEVBQUUsS0FBS3NCLG9CQVhuQjtBQVlFLHNCQUFjLEVBQUUsS0FBS0ksY0FadkI7QUFhRSxhQUFLLEVBQUUsS0FBS3ZCLEtBQUwsQ0FBV0MsS0FicEI7QUFjRSwwQkFBa0IsRUFDaEIsS0FBS2hCLEtBQUwsQ0FBVzhCLFFBQVgsSUFDQSxLQUFLZixLQUFMLENBQVdDLEtBQVgsS0FBcUIsRUFEckIsS0FFQyxDQUFDLEtBQUtoQixLQUFMLENBQVd1QixZQUFaLElBQ0MsQ0FBQyxLQUFLdkIsS0FBTCxDQUFXdUIsWUFBWCxDQUF3QkMsSUFBeEIsQ0FDQyxVQUFBWCxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ2EsSUFBRixLQUFXLE1BQUksQ0FBQ1gsS0FBTCxDQUFXQyxLQUExQjtBQUFBLFNBREYsQ0FISCxNQU1DLENBQUMsS0FBS0QsS0FBTCxDQUFXMEMsbUJBQVosSUFDQyxDQUFDLEtBQUsxQyxLQUFMLENBQVcwQyxtQkFBWCxDQUErQmpDLElBQS9CLENBQ0MsVUFBQVgsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNhLElBQUYsS0FBVyxNQUFJLENBQUNYLEtBQUwsQ0FBV0MsS0FBMUI7QUFBQSxTQURGLENBUEgsS0FVQSxLQUFLRCxLQUFMLENBQVcyQixXQVZYLElBV0Usb0RBQUMscURBQUQsZUFDTyxLQUFLMUMsS0FBTCxDQUFXcUQsRUFBWCxJQUFpQjtBQUNwQkEsWUFBRSxFQUFFLEtBQUtyRCxLQUFMLENBQVdxRCxFQUFYLEdBQWdCO0FBREEsU0FEeEI7QUFJRSxtQkFBUyxFQUFDLDRDQUpaO0FBS0Usa0JBQVEsRUFBRSxJQUxaO0FBTUUsaUJBQU8sRUFBRSxLQUFLdEI7QUFOaEIsMEJBUVksS0FBS2hCLEtBQUwsQ0FBV0MsS0FSdkI7QUExQk4sU0FqQ0osQ0FqQk4sRUE0RkcsS0FBSzhELHVCQUFMLEVBNUZILEVBNkZHLEtBQUs5RSxLQUFMLENBQVcrRSxLQUFYLElBQ0M7QUFDRSxpQkFBUyxFQUNQLEtBQUtoRSxLQUFMLENBQVdDLEtBQVgsS0FBcUIsRUFBckIsSUFDQSxLQUFLRCxLQUFMLENBQVdSLGFBRFgsSUFFQSxLQUFLUCxLQUFMLENBQVd1RSxRQUZYLElBR0EsS0FBS3ZFLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JULE1BQWhCLElBQTBCLEtBQUtuQixLQUFMLENBQVdvQyxPQUhyQyxHQUlJLGdCQUpKLEdBS0k7QUFQUixTQVVHLEtBQUs0QyxXQUFMLEVBVkgsQ0E5RkosQ0FERixDQURGO0FBZ0hEO0FBaExIO0FBQUE7QUFBQSw4QkEwVG9CcEQsSUExVHBCLEVBMFRpQztBQUM3QixVQUFJZSxNQUFNLEdBQUcsRUFBYjs7QUFDQSxVQUFJZixJQUFJLENBQUNULE1BQUwsR0FBYyxLQUFLbkIsS0FBTCxDQUFXb0MsT0FBN0IsRUFBc0M7QUFDcENPLGNBQU0sR0FBR0EsTUFBTSxDQUFDZCxNQUFQLENBQWMsS0FBS2QsS0FBTCxDQUFXWixVQUF6QixDQUFUO0FBQ0Q7O0FBQ0QsVUFBSSxLQUFLWSxLQUFMLENBQVdDLEtBQVgsS0FBcUIsRUFBckIsSUFBMkJZLElBQUksQ0FBQ1QsTUFBTCxLQUFnQixDQUEzQyxJQUFnRCxLQUFLbkIsS0FBTCxDQUFXaUUsUUFBL0QsRUFBeUU7QUFDdkV0QixjQUFNLEdBQUdBLE1BQU0sQ0FBQ2QsTUFBUCxDQUFjLFVBQWQsQ0FBVDtBQUNEOztBQUNELFVBQUksS0FBS2QsS0FBTCxDQUFXQyxLQUFYLElBQW9CLEtBQUtoQixLQUFMLENBQVc4QixRQUEvQixJQUEyQyxDQUFDLEtBQUtmLEtBQUwsQ0FBV1IsYUFBM0QsRUFBMEU7QUFDeEVvQyxjQUFNLEdBQUdBLE1BQU0sQ0FBQ2QsTUFBUCxDQUFjLEtBQUs3QixLQUFMLENBQVdpRixrQkFBekIsQ0FBVDtBQUNEOztBQUNELFVBQUksS0FBS2pGLEtBQUwsQ0FBV29DLE9BQVgsSUFBc0IsS0FBS3BDLEtBQUwsQ0FBVzRCLElBQVgsSUFBbUIsS0FBSzVCLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JULE1BQXpELENBQUosRUFBc0U7QUFDcEV3QixjQUFNLEdBQUdBLE1BQU0sQ0FBQ2QsTUFBUCxDQUFjLEtBQUs3QixLQUFMLENBQVdrRixxQkFBekIsQ0FBVDtBQUNEOztBQUNELGFBQU92QyxNQUFNLENBQUNRLE1BQVAsQ0FBYyxVQUFBZ0MsQ0FBQztBQUFBLGVBQUlBLENBQUo7QUFBQSxPQUFmLENBQVA7QUFDRDtBQXpVSDtBQUFBO0FBQUEsd0NBMlVxRDtBQUFBOztBQUFBLFVBQXpCQyxVQUF5Qix1RUFBSixFQUFJOztBQUNqRCxVQUFJLEtBQUtwRixLQUFMLENBQVdVLGlCQUFmLEVBQWtDO0FBQ2hDLFlBQU0yRSxLQUFLLEdBQUcvQixVQUFVLENBQ3RCO0FBQUEsaUJBQU0sTUFBSSxDQUFDbEQsUUFBTCxDQUFjO0FBQUVvRCxnQ0FBb0IsRUFBRTtBQUF4QixXQUFkLENBQU47QUFBQSxTQURzQixFQUV0QixLQUFLeEQsS0FBTCxDQUFXc0YsY0FGVyxDQUF4QjtBQUlBLGFBQUt0RixLQUFMLENBQVdVLGlCQUFYLENBQTZCMEUsVUFBN0IsRUFBeUNHLElBQXpDLENBQThDLFVBQUE5QixtQkFBbUIsRUFBSTtBQUNuRStCLHNCQUFZLENBQUNILEtBQUQsQ0FBWjs7QUFDQSxnQkFBSSxDQUFDakYsUUFBTCxDQUFjO0FBQ1pxRCwrQkFBbUIsRUFBbkJBLG1CQURZO0FBRVpELGdDQUFvQixFQUFFO0FBRlYsV0FBZDtBQUlELFNBTkQ7QUFPRDtBQUNGO0FBelZIO0FBQUE7QUFBQSxxQ0EyVjJCO0FBQUE7O0FBQ3ZCLFVBQU1qQyxZQUFtQixHQUFHLEdBQ3pCTSxNQUR5QixDQUNsQixLQUFLN0IsS0FBTCxDQUFXdUIsWUFBWCxHQUEwQixLQUFLdkIsS0FBTCxDQUFXdUIsWUFBckMsR0FBb0QsRUFEbEMsRUFFekJNLE1BRnlCLENBR3hCLEtBQUtkLEtBQUwsQ0FBVzBDLG1CQUFYLEdBQWlDLEtBQUsxQyxLQUFMLENBQVcwQyxtQkFBNUMsR0FBa0UsRUFIMUMsQ0FBNUI7QUFLQSxVQUFNZ0MsWUFBWSxHQUFHLEtBQUt6RixLQUFMLENBQVcwRixrQkFBWCxDQUNuQixLQUFLM0UsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLEtBQUtELEtBQUwsQ0FBV0MsS0FBWCxDQUFpQjJFLFdBQWpCLEVBQW5CLEdBQW9ELEVBRGpDLEVBRW5CcEUsWUFGbUIsQ0FBckI7QUFJQSxVQUFJWCxXQUFXLEdBQUc2RSxZQUFZLENBQzNCdEMsTUFEZSxDQUNSLFVBQUFoQixHQUFHO0FBQUEsZUFBSSxDQUFDLE1BQUksQ0FBQ25DLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JnRSxJQUFoQixDQUFxQixVQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ3hDLEVBQUYsS0FBU2xCLEdBQUcsQ0FBQ2tCLEVBQWpCO0FBQUEsU0FBdEIsQ0FBTDtBQUFBLE9BREssRUFFZnlDLEtBRmUsQ0FFVCxDQUZTLEVBRU4sS0FBSzlGLEtBQUwsQ0FBVytGLGNBRkwsQ0FBbEI7QUFHQSxhQUFPbkYsV0FBUDtBQUNEO0FBeldIO0FBQUE7QUFBQSw4QkEyV29CdUIsR0EzV3BCLEVBMlc4QjZELEtBM1c5QixFQTJXNkM7QUFDekMsVUFBTUMsSUFBSSxHQUNSLDBHQUNHOUQsR0FBRyxDQUFDVCxJQURQLEVBRUcsQ0FBQyxLQUFLMUIsS0FBTCxDQUFXdUUsUUFBWixJQUNDLG9EQUFDLHFEQUFELGVBQ08sS0FBS3ZFLEtBQUwsQ0FBV3FELEVBQVgsSUFBaUI7QUFDcEJBLFVBQUUsRUFBRSxLQUFLckQsS0FBTCxDQUFXcUQsRUFBWCxHQUFnQixPQUFoQixHQUEwQjJDLEtBQUssQ0FBQ0UsUUFBTjtBQURWLE9BRHhCO0FBSUUsZ0JBQVEsRUFBRSxJQUpaO0FBS0UsYUFBSyxFQUFFLElBTFQ7QUFNRSxlQUFPLEVBQUUsS0FBS2pELGNBQUwsQ0FBb0JkLEdBQXBCLENBTlg7QUFPRSxpQkFBUyxFQUFDLDhDQVBaO0FBUUUsaUJBQVMsRUFBRSxtQkFBQWdFLENBQUM7QUFBQSxpQkFDVjtBQUFHLHFCQUFTLEVBQUVBLENBQUMsQ0FBQzdCLFNBQWhCO0FBQTJCLGNBQUUsRUFBRTZCLENBQUMsQ0FBQzlDLEVBQWpDO0FBQXFDLG1CQUFPLEVBQUU4QyxDQUFDLENBQUNDO0FBQWhELGFBQ0dELENBQUMsQ0FBQ0UsUUFETCxDQURVO0FBQUE7QUFSZCxVQWNFLG9EQUFDLHdHQUFELE9BZEYsQ0FISixDQURGO0FBdUJBLFVBQU0vQixTQUFTLEdBQUdnQyxpREFBVSxDQUFDLGlCQUFELEVBQW9CO0FBQzlDLGdDQUF3QixLQUFLdEcsS0FBTCxDQUFXdUc7QUFEVyxPQUFwQixDQUE1Qjs7QUFHQSxVQUFJLEtBQUt2RyxLQUFMLENBQVdnRCxVQUFmLEVBQTJCO0FBQ3pCLGVBQ0Usb0RBQUMscURBQUQ7QUFDRSxpQkFBTyxFQUFFLEtBQUtELFFBQUwsQ0FBY1osR0FBZCxDQURYO0FBRUUsZUFBSyxFQUFFLElBRlQ7QUFHRSxtQkFBUyxFQUFFbUMsU0FIYjtBQUlFLGFBQUcsRUFBRTBCO0FBSlAsV0FNR0MsSUFOSCxDQURGO0FBVUQ7O0FBQ0QsYUFDRTtBQUFLLGVBQU8sRUFBRSxLQUFLbEQsUUFBTCxDQUFjWixHQUFkLENBQWQ7QUFBa0MsaUJBQVMsRUFBRW1DLFNBQTdDO0FBQXdELFdBQUcsRUFBRTBCO0FBQTdELFNBQ0dDLElBREgsQ0FERjtBQUtEO0FBdlpIO0FBQUE7QUFBQSxpQ0EyYXVCO0FBQUE7O0FBQ25CLGFBQU8sS0FBS2pHLEtBQUwsQ0FBVzRCLElBQVgsSUFBbUIsS0FBSzVCLEtBQUwsQ0FBVzRCLElBQVgsQ0FBZ0JULE1BQWhCLEdBQXlCLENBQTVDLEdBQ0w7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRyxLQUFLbkIsS0FBTCxDQUFXNEIsSUFBWCxDQUFnQjRFLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBT1QsS0FBUDtBQUFBLGVBQWlCLE1BQUksQ0FBQ1UsU0FBTCxDQUFlRCxJQUFmLEVBQXFCVCxLQUFyQixDQUFqQjtBQUFBLE9BQXBCLENBREgsQ0FESyxHQUtMLEtBQUtoRyxLQUFMLENBQVd1RSxRQUFYLElBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHLEtBQUt2RSxLQUFMLENBQVcyRyx3QkFEZCxDQURGLENBTko7QUFhRDtBQXpiSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsRUFBNkJDLCtEQUE3QjtBQUFhN0csTyxDQUtHOEcsWSxxQkFDVEQsK0RBQVMsQ0FBQ0MsWTtBQUNiQyxVQUFRLEVBQUUsSztBQUNWeEMsV0FBUyxFQUFFLEU7QUFDWDFDLE1BQUksRUFBRSxFO0FBQ05MLGNBQVksRUFBRSxFO0FBQ2RhLFNBQU8sRUFBRSxJO0FBQ1RULGVBQWEsRUFBRTtBQUFBLFdBQU1ULFNBQU47QUFBQSxHO0FBQ2ZjLGVBQWEsRUFBRSx1QkFBQStFLFVBQVU7QUFBQSxXQUN2QkMsT0FBTyxDQUFDQyxPQUFSLENBQWdCO0FBQUV2RixVQUFJLEVBQUVxRixVQUFSO0FBQW9CMUQsUUFBRSxFQUFFLElBQUk2RCxJQUFKLEdBQVdDLE9BQVg7QUFBeEIsS0FBaEIsQ0FEdUI7QUFBQSxHO0FBRXpCbEMsb0JBQWtCLEVBQUUsMEY7QUFDcEJDLHVCQUFxQixFQUFFLHFHO0FBQ3ZCUCxpQkFBZSxFQUFFLEk7QUFDakJDLDZCQUEyQixFQUFFLFk7QUFDN0JDLDJCQUF5QixFQUFFLHFCO0FBQzNCUyxnQkFBYyxFQUFFLEc7QUFDaEJJLG9CQUFrQixFQUFFLDRCQUFDMEIsSUFBRCxFQUFPeEYsSUFBUDtBQUFBLFdBQ2xCQSxJQUFJLENBQUN1QixNQUFMLENBQVksVUFBQWhCLEdBQUc7QUFBQSxhQUFJQSxHQUFHLENBQUNULElBQUosSUFBWVMsR0FBRyxDQUFDVCxJQUFKLENBQVNpRSxXQUFULEdBQXVCUCxVQUF2QixDQUFrQ2dDLElBQWxDLENBQWhCO0FBQUEsS0FBZixDQURrQjtBQUFBLEc7QUFFcEJyQixnQkFBYyxFQUFFOztBQXFhYixJQUFNc0IsSUFBSSxHQUFHQyw2RUFBZSxDQUEwQnZILE9BQTFCLENBQTVCO2VBRVFzSCxJO0FBQUE7Ozs7Ozs7Ozs7MEJBOWJGdEgsTzswQkE0YkFzSCxJIiwiZmlsZSI6ImVkOWZkMGUtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGlic1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElucHV0R3JvdXAgfSBmcm9tICcuLi9pbnB1dEdyb3VwL0lucHV0R3JvdXAnO1xyXG5pbXBvcnQgeyBUZXh0LCBUZXh0UHJvcHMsIFRleHRSYXcgfSBmcm9tICcuLi90ZXh0L1RleHQnO1xyXG5pbXBvcnQgKiBhcyBQbHVzSWNvbiBmcm9tICdtYXRlcmlhbC1kZXNpZ24taWNvbnMvY29udGVudC9zdmcvcHJvZHVjdGlvbi9pY19hZGRfY2lyY2xlX291dGxpbmVfMjRweC5zdmcnO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VJbnB1dFByb3BzLFxyXG4gIEJhc2VJbnB1dFN0YXRlLFxyXG4gIEJhc2VJbnB1dCxcclxuICBWYWxpZGF0aW9uRXJyb3IsXHJcbn0gZnJvbSAnLi4vYmFzZS9pbnB1dC9CYXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9idXR0b24vQnV0dG9uJztcclxuaW1wb3J0IFRhZ3NTdWdnZXN0aW9ucyBmcm9tICcuL3N1YkNvbXBvbmVudHMvVGFnc1N1Z2dlc3Rpb25zJztcclxuaW1wb3J0IHsgT21pdEZvcm1Db250ZXh0IH0gZnJvbSAnLi4vZm9ybS9Gb3JtQ29udGV4dCc7XHJcbmltcG9ydCB7IHdpdGhGb3JtQ29udGV4dCB9IGZyb20gJy4uL2Zvcm0vd2l0aEZvcm1Db250ZXh0JztcclxuaW1wb3J0IHsgSW5uZXJSZWZQcm9wcyB9IGZyb20gJy4vLi4vLi4vdHlwZXMvSW5uZXJSZWZQcm9wcyc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuLy8gTWlzY1xyXG5leHBvcnQgdHlwZSBUYWcgPSB7XHJcbiAgaWQ6IG51bWJlciB8IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBUYWdzUmF3UHJvcHMgPSB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICB0YWdzOiBUYWdbXTtcclxuICBleGlzdGluZ1RhZ3M/OiBUYWdbXTtcclxuICBmZXRjaEV4aXN0aW5nVGFncz86ICh0ZXh0OiBzdHJpbmcpID0+IFByb21pc2U8VGFnW10+O1xyXG4gIG9uVGFnc0NoYW5nZWQ6IChuZXdUYWdzOiBUYWdbXSkgPT4gdm9pZDtcclxuICBvbk5ld1RhZ0FkZGVkPzogKG5ld1RhZ05hbWU6IHN0cmluZykgPT4gUHJvbWlzZTxUYWc+O1xyXG4gIG9uVGFnQ2xpY2s/OiAodGFnOiBUYWcpID0+IHZvaWQ7XHJcbiAgc2hvd0NoaXBzPzogYm9vbGVhbjtcclxuICBhbGxvd05ldz86IGJvb2xlYW47XHJcbiAgdGV4dFByb3BzPzogVGV4dFByb3BzO1xyXG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcclxuICByZWFkb25seUVtcHR5UGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgbWF4VGFncz86IG51bWJlcjtcclxuICB2YWx1ZU5vdEFkZGVkRXJyb3I/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBtYXhUYWdzU3VycGFzc2VkRXJyb3I/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBzaG93U3VnZ2VzdGlvbnM/OiBib29sZWFuO1xyXG4gIHN1Z2dlc3Rpb25zTG9hZGluZ0NvbXBvbmVudD86IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIHN1Z2dlc3Rpb25zRW1wdHlDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBsb2FkaW5nRGVsYXlNcz86IG51bWJlcjtcclxuICBmaWx0ZXJFeGlzdGluZ1RhZ3M/OiAodGV4dDogc3RyaW5nLCBleGlzdGluZ1RhZ3M6IFRhZ1tdKSA9PiBUYWdbXTtcclxuICBtYXhTdWdnZXN0aW9ucz86IG51bWJlcjtcclxufSAmIEJhc2VJbnB1dFByb3BzPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG5cclxuZXhwb3J0IHR5cGUgVGFnc1Byb3BzID0gT21pdEZvcm1Db250ZXh0PFRhZ3NSYXdQcm9wcz4gJlxyXG4gIElubmVyUmVmUHJvcHM8VGFnc1Jhd1Byb3BzPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFnc1N0YXRlIGV4dGVuZHMgQmFzZUlucHV0U3RhdGUge1xyXG4gIHRleHRJc0ZvY3VzZWQ6IGJvb2xlYW47XHJcbiAgdGV4dEVycm9yczogVmFsaWRhdGlvbkVycm9yW107XHJcbiAgdGV4dElzVmFsaWQ6IGJvb2xlYW47XHJcbiAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBib29sZWFuO1xyXG4gIGZldGNoZWRFeGlzdGluZ1RhZ3M6IFRhZ1tdO1xyXG4gIGZldGNoaW5nRXhpc3RpbmdUYWdzOiBib29sZWFuO1xyXG4gIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhZ3NSYXcgZXh0ZW5kcyBCYXNlSW5wdXQ8XHJcbiAgVGFnc1Jhd1Byb3BzLFxyXG4gIFRhZ3NTdGF0ZSxcclxuICBIVE1MSW5wdXRFbGVtZW50XHJcbj4ge1xyXG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBUYWdzUmF3UHJvcHMgPSB7XHJcbiAgICAuLi5CYXNlSW5wdXQuZGVmYXVsdFByb3BzLFxyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgY2xhc3NOYW1lOiAnJyxcclxuICAgIHRhZ3M6IFtdLFxyXG4gICAgZXhpc3RpbmdUYWdzOiBbXSxcclxuICAgIG1heFRhZ3M6IDEwMDAsXHJcbiAgICBvblRhZ3NDaGFuZ2VkOiAoKSA9PiB1bmRlZmluZWQsXHJcbiAgICBvbk5ld1RhZ0FkZGVkOiBuZXdUYWdOYW1lID0+XHJcbiAgICAgIFByb21pc2UucmVzb2x2ZSh7IG5hbWU6IG5ld1RhZ05hbWUsIGlkOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSB9KSxcclxuICAgIHZhbHVlTm90QWRkZWRFcnJvcjogPHNwYW4+WW91IGZvcmdvdCB0byBhZGQgdGFnPC9zcGFuPixcclxuICAgIG1heFRhZ3NTdXJwYXNzZWRFcnJvcjogPHNwYW4+TWF4aW11bSBudW1iZXIgb2YgdGFncyBzdXJwYXNzZWQ8L3NwYW4+LFxyXG4gICAgc2hvd1N1Z2dlc3Rpb25zOiB0cnVlLFxyXG4gICAgc3VnZ2VzdGlvbnNMb2FkaW5nQ29tcG9uZW50OiAnTG9hZGluZy4uLicsXHJcbiAgICBzdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50OiAnTm8gZXhpc3RpbmcgdGFncy4uLicsXHJcbiAgICBsb2FkaW5nRGVsYXlNczogNTAwLFxyXG4gICAgZmlsdGVyRXhpc3RpbmdUYWdzOiAodGV4dCwgdGFncykgPT5cclxuICAgICAgdGFncy5maWx0ZXIodGFnID0+IHRhZy5uYW1lICYmIHRhZy5uYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh0ZXh0KSksXHJcbiAgICBtYXhTdWdnZXN0aW9uczogNSxcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHRleHRSZWY6IFRleHRSYXc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBUYWdzUmF3UHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC4uLnRoaXMuc3RhdGUsXHJcbiAgICAgIHRleHRFcnJvcnM6IFtdLFxyXG4gICAgICB0ZXh0SXNGb2N1c2VkOiBmYWxzZSxcclxuICAgICAgc3VnZ2VzdGlvbnNWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgZmV0Y2hpbmdFeGlzdGluZ1RhZ3M6IGZhbHNlLFxyXG4gICAgICB0ZXh0SXNWYWxpZDogZmFsc2UsXHJcbiAgICAgIGZldGNoZWRFeGlzdGluZ1RhZ3M6IFtdLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb2N1cygpIHtcclxuICAgIGlmICh0aGlzLnRleHRSZWYgJiYgdGhpcy50ZXh0UmVmLmlucHV0UmVmKSB7XHJcbiAgICAgIGNvbnN0IGRvbU5vZGU6IEhUTUxFbGVtZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUoXHJcbiAgICAgICAgKHRoaXMudGV4dFJlZi5pbnB1dFJlZiBhcyBSZWFjdC5SZWZPYmplY3Q8SFRNTEVsZW1lbnQ+KS5jdXJyZW50XHJcbiAgICAgICkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGRvbU5vZGUgJiYgZG9tTm9kZS5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBUYWdzUmF3UHJvcHMpIHtcclxuICAgIGlmIChcclxuICAgICAgbmV4dFByb3BzLnRhZ3MgIT09IHRoaXMucHJvcHMudGFncyB8fFxyXG4gICAgICBuZXh0UHJvcHMudmFsaWRhdG9ycyAhPT0gdGhpcy5wcm9wcy52YWxpZGF0b3JzIHx8XHJcbiAgICAgIG5leHRQcm9wcy5jdXN0b21WYWxpZGF0b3JzICE9PSB0aGlzLnByb3BzLmN1c3RvbVZhbGlkYXRvcnMgfHxcclxuICAgICAgbmV4dFByb3BzLnJlcXVpcmVkICE9PSB0aGlzLnByb3BzLnJlcXVpcmVkXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5oYW5kbGVFcnJvcnMobmV4dFByb3BzLnRhZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHRleHRQcm9wcyA9IHRoaXMucHJvcHMudGV4dFByb3BzID8gdGhpcy5wcm9wcy50ZXh0UHJvcHMgOiB7fTtcclxuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdGhpcy5nZXRTdWdnZXN0aW9ucygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPElucHV0R3JvdXAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAnaW5wdXRfX2Jhc2UgdGFncy1pbnB1dCAnICtcclxuICAgICAgICAgICAgdGhpcy5nZXRWYWxpZGF0aW9uQ2xhc3MoKSArXHJcbiAgICAgICAgICAgICh0aGlzLnByb3BzLmNsYXNzTmFtZSA/ICcgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJycpICtcclxuICAgICAgICAgICAgJyAnICtcclxuICAgICAgICAgICAgKHRoaXMucHJvcHMucmVhZE9ubHkgPyAndGFncy1pbnB1dC0tcmVhZE9ubHkgJyA6ICcnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVmPXt0aGlzLmNvbnRhaW5lclJlZn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGhpcy5yZW5kZXJUYWdzKCl9XHJcbiAgICAgICAgICB7KCF0aGlzLnByb3BzLm1heFRhZ3MgfHxcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXhUYWdzID4gKHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoKSkgJiZcclxuICAgICAgICAgICAgIXRoaXMucHJvcHMucmVhZE9ubHkgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICd0YWdzLWlucHV0X190YWdzX193cmFwcGVyICcgK1xyXG4gICAgICAgICAgICAgICAgICAodGhpcy5wcm9wcy5yZWFkT25seSA/ICdmaWxsZWQgJyA6ICcnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICAgIHsuLi50ZXh0UHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgIHsuLi4odGhpcy5wcm9wcy5pZCAmJiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXRleHQtaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnlcclxuICAgICAgICAgICAgICAgICAgaW5uZXJSZWY9e3ZhbCA9PiAodGhpcy50ZXh0UmVmID0gdmFsIGFzIGFueSl9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID4gMCA/IGZhbHNlIDogdGhpcy5wcm9wcy5yZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgJ3RhZ3MtaW5wdXRfX3RleHQtaW5wdXQgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgKHRleHRQcm9wcy5jbGFzc05hbWUgPyB0ZXh0UHJvcHMuY2xhc3NOYW1lIDogJycpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bihzdWdnZXN0aW9ucyl9XHJcbiAgICAgICAgICAgICAgICAgIG9uRXJyb3JzQ2hhbmdlZD17dGhpcy5vblRleHRFcnJvcnNDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblRleHRDaGFuZ2VkfVxyXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLm9uRm9jdXN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICByZWFkT25seT17dGhpcy5wcm9wcy5yZWFkT25seX1cclxuICAgICAgICAgICAgICAgICAgc2hvd1ZhbGlkYXRpb249e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBpZ25vcmVDb250ZXh0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXt0aGlzLnByb3BzLnZhbGlkYXRvcnN9XHJcbiAgICAgICAgICAgICAgICAgIGN1c3RvbVZhbGlkYXRvcnM9e3RoaXMucHJvcHMuY3VzdG9tVmFsaWRhdG9yc31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUgJiYgdGhpcy5wcm9wcy5zaG93U3VnZ2VzdGlvbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8VGFnc1N1Z2dlc3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy10ZXh0LWlucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICBhbGxvd05ldz17dGhpcy5wcm9wcy5hbGxvd05ld31cclxuICAgICAgICAgICAgICAgICAgICBwcmVzZWxlY3RlZFN1Z2dlc3Rpb249e3RoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUuZmV0Y2hpbmdFeGlzdGluZ1RhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZ0NvbXBvbmVudD17dGhpcy5wcm9wcy5zdWdnZXN0aW9uc0xvYWRpbmdDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlPXt0aGlzLnN0YXRlLnN1Z2dlc3Rpb25zVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICBFbXB0eUNvbXBvbmVudD17dGhpcy5wcm9wcy5zdWdnZXN0aW9uc0VtcHR5Q29tcG9uZW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M9e3N1Z2dlc3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0ZWQ9e3RoaXMub25TdWdnZXN0aW9uU2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGlja091dHNpZGU9e3RoaXMub25DbGlja091dHNpZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkTmV3VGFnQ29tcG9uZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuYWxsb3dOZXcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFsdWUgIT09ICcnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMucHJvcHMuZXhpc3RpbmdUYWdzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmV4aXN0aW5nVGFncy5maW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUgPT4gZS5uYW1lID09PSB0aGlzLnN0YXRlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAoIXRoaXMuc3RhdGUuZmV0Y2hlZEV4aXN0aW5nVGFncyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9PiBlLm5hbWUgPT09IHRoaXMuc3RhdGUudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudGV4dElzVmFsaWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkICsgJy1hZGQtbmV3LWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fc3VnZ2VzdGlvbiB0YWdzLWlucHV0X19hZGQtbmV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wZG93bj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZE5ld1RhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBuZXcgXCJ7dGhpcy5zdGF0ZS52YWx1ZX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAge3RoaXMucmVuZGVyRGVmYXVsdFZhbGlkYXRpb24oKX1cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsICYmIChcclxuICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUudmFsdWUgIT09ICcnIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnRleHRJc0ZvY3VzZWQgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucmVhZE9ubHkgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudGFncy5sZW5ndGggPj0gdGhpcy5wcm9wcy5tYXhUYWdzXHJcbiAgICAgICAgICAgICAgICAgID8gJ2xhYmVsLS1mb2N1c2VkJ1xyXG4gICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyTGFiZWwoKX1cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uVGV4dEVycm9yc0NoYW5nZWQgPSAodGV4dEVycm9yczogVmFsaWRhdGlvbkVycm9yW10pID0+XHJcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+ICh7IHRleHRFcnJvcnMgfSksICgpID0+IHRoaXMuaGFuZGxlRXJyb3JzKCkpO1xyXG5cclxuICBwcml2YXRlIG9uRm9jdXMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7IHRleHRJc0ZvY3VzZWQ6IHRydWUsIHN1Z2dlc3Rpb25zVmlzaWJsZTogdHJ1ZSwgdG91Y2hlZDogdHJ1ZSB9LFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25LZXlEb3duID0gKHN1Z2dlc3Rpb25zOiBUYWdbXSkgPT4gYXN5bmMgZSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGUua2V5ID09PSAnRW50ZXInICYmXHJcbiAgICAgICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyB8fFxyXG4gICAgICAgIHRoaXMuc3RhdGUucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICE9PSB1bmRlZmluZWQpICYmXHJcbiAgICAgIHRoaXMuc3RhdGUudGV4dEVycm9ycy5sZW5ndGggPT09IDBcclxuICAgICkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IGV4aXN0aW5nVGFnID1cclxuICAgICAgICB0aGlzLnByb3BzLmV4aXN0aW5nVGFncyAmJlxyXG4gICAgICAgIHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzLmZpbmQoZXQgPT4gZXQubmFtZSA9PT0gdGhpcy5zdGF0ZS52YWx1ZSk7XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKFxyXG4gICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmNvbmNhdChzdWdnZXN0aW9uc1t0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbl0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnLCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb246IHVuZGVmaW5lZCB9LCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKGV4aXN0aW5nVGFnKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKHRoaXMucHJvcHMudGFncy5jb25jYXQoZXhpc3RpbmdUYWcpKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnIH0sICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3JzKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5hbGxvd05ldykge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuYWRkTmV3VGFnKCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHN1Z2dlc3Rpb25zLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5zdWdnZXN0aW9uc1Zpc2libGUpIHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgICBjb25zdCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gMFxyXG4gICAgICAgICAgICA/IHN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiAtIDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiB9KTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgICBjb25zdCBwcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5zdGF0ZS5wcmVzZWxlY3RlZFN1Z2dlc3Rpb24gPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiA9PT0gc3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA/IDBcclxuICAgICAgICAgICAgOiB0aGlzLnN0YXRlLnByZXNlbGVjdGVkU3VnZ2VzdGlvbiArIDE7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByZXNlbGVjdGVkU3VnZ2VzdGlvbiB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGFkZE5ld1RhZyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1RhZyA9IGF3YWl0IHRoaXMucHJvcHMub25OZXdUYWdBZGRlZCh0aGlzLnN0YXRlLnZhbHVlKTtcclxuICAgIGlmIChuZXdUYWcpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKFxyXG4gICAgICAgIHRoaXMucHJvcHMudGFncyA/IHRoaXMucHJvcHMudGFncy5jb25jYXQobmV3VGFnKSA6IFtuZXdUYWddXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6ICcnLCB0ZXh0RXJyb3JzOiBbXSB9LCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuZmV0Y2hFeGlzdGluZ1RhZ3MoKTtcclxuICAgICAgdGhpcy5oYW5kbGVFcnJvcnMoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25TdWdnZXN0aW9uU2VsZWN0ZWQgPSB0YWcgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKHRoaXMucHJvcHMudGFncy5jb25jYXQodGFnKSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICB7IHZhbHVlOiAnJywgcHJlc2VsZWN0ZWRTdWdnZXN0aW9uOiB1bmRlZmluZWQsIHRleHRFcnJvcnM6IFtdIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhdGhpcy5wcm9wcy5tYXhUYWdzICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoICsgMSA8IHRoaXMucHJvcHMubWF4VGFnc1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZUVycm9ycygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25CbHVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAge1xyXG4gICAgICAgIHRleHRJc0ZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgb25DbGlja091dHNpZGUgPSAoKSA9PlxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHN1Z2dlc3Rpb25zVmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByZXNlbGVjdGVkU3VnZ2VzdGlvbjogdW5kZWZpbmVkLFxyXG4gICAgfSk7XHJcblxyXG4gIHByaXZhdGUgb25UZXh0Q2hhbmdlZCA9IChcclxuICAgIGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LFxyXG4gICAgaXNWYWxpZDogYm9vbGVhblxyXG4gICkgPT4ge1xyXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgICgpID0+ICh7XHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgaXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICB0ZXh0SXNWYWxpZDogaXNWYWxpZCxcclxuICAgICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IHRydWUsXHJcbiAgICAgIH0pLFxyXG4gICAgICAoKSA9PiB0aGlzLmhhbmRsZUVycm9ycygpXHJcbiAgICApO1xyXG4gICAgdGhpcy5mZXRjaEV4aXN0aW5nVGFncyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMgPSAodGFnczogVGFnW10gPSB0aGlzLnByb3BzLnRhZ3MpID0+IHtcclxuICAgIGxldCBlcnJvcnMgPSB0aGlzLmdldEVycm9ycyh0YWdzKTtcclxuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldEludmFsaWQoZXJyb3JzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsaWQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBwcml2YXRlIGdldEVycm9ycyh0YWdzOiBUYWdbXSkge1xyXG4gICAgbGV0IGVycm9ycyA9IFtdO1xyXG4gICAgaWYgKHRhZ3MubGVuZ3RoIDwgdGhpcy5wcm9wcy5tYXhUYWdzKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQodGhpcy5zdGF0ZS50ZXh0RXJyb3JzKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJyAmJiB0YWdzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnByb3BzLnJlcXVpcmVkKSB7XHJcbiAgICAgIGVycm9ycyA9IGVycm9ycy5jb25jYXQoJ1JlcXVpcmVkJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSAmJiB0aGlzLnByb3BzLmFsbG93TmV3ICYmICF0aGlzLnN0YXRlLnRleHRJc0ZvY3VzZWQpIHtcclxuICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdCh0aGlzLnByb3BzLnZhbHVlTm90QWRkZWRFcnJvcik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5tYXhUYWdzIDwgKHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoKSkge1xyXG4gICAgICBlcnJvcnMgPSBlcnJvcnMuY29uY2F0KHRoaXMucHJvcHMubWF4VGFnc1N1cnBhc3NlZEVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcnMuZmlsdGVyKGkgPT4gaSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZldGNoRXhpc3RpbmdUYWdzKHN0YXJ0c1dpdGg6IHN0cmluZyA9ICcnKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5mZXRjaEV4aXN0aW5nVGFncykge1xyXG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoXHJcbiAgICAgICAgKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZldGNoaW5nRXhpc3RpbmdUYWdzOiB0cnVlIH0pLFxyXG4gICAgICAgIHRoaXMucHJvcHMubG9hZGluZ0RlbGF5TXNcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5wcm9wcy5mZXRjaEV4aXN0aW5nVGFncyhzdGFydHNXaXRoKS50aGVuKGZldGNoZWRFeGlzdGluZ1RhZ3MgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBmZXRjaGVkRXhpc3RpbmdUYWdzLFxyXG4gICAgICAgICAgZmV0Y2hpbmdFeGlzdGluZ1RhZ3M6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U3VnZ2VzdGlvbnMoKSB7XHJcbiAgICBjb25zdCBleGlzdGluZ1RhZ3M6IFRhZ1tdID0gW11cclxuICAgICAgLmNvbmNhdCh0aGlzLnByb3BzLmV4aXN0aW5nVGFncyA/IHRoaXMucHJvcHMuZXhpc3RpbmdUYWdzIDogW10pXHJcbiAgICAgIC5jb25jYXQoXHJcbiAgICAgICAgdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzID8gdGhpcy5zdGF0ZS5mZXRjaGVkRXhpc3RpbmdUYWdzIDogW11cclxuICAgICAgKTtcclxuICAgIGNvbnN0IGZpbHRlcmVkVGFncyA9IHRoaXMucHJvcHMuZmlsdGVyRXhpc3RpbmdUYWdzKFxyXG4gICAgICB0aGlzLnN0YXRlLnZhbHVlID8gdGhpcy5zdGF0ZS52YWx1ZS50b0xvd2VyQ2FzZSgpIDogJycsXHJcbiAgICAgIGV4aXN0aW5nVGFnc1xyXG4gICAgKTtcclxuICAgIGxldCBzdWdnZXN0aW9ucyA9IGZpbHRlcmVkVGFnc1xyXG4gICAgICAuZmlsdGVyKHRhZyA9PiAhdGhpcy5wcm9wcy50YWdzLnNvbWUodCA9PiB0LmlkID09PSB0YWcuaWQpKVxyXG4gICAgICAuc2xpY2UoMCwgdGhpcy5wcm9wcy5tYXhTdWdnZXN0aW9ucyk7XHJcbiAgICByZXR1cm4gc3VnZ2VzdGlvbnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlclRhZyh0YWc6IFRhZywgaW5kZXg6IG51bWJlcikge1xyXG4gICAgY29uc3QgYm9keSA9IChcclxuICAgICAgPD5cclxuICAgICAgICB7dGFnLm5hbWV9XHJcbiAgICAgICAgeyF0aGlzLnByb3BzLnJlYWRPbmx5ICYmIChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCArICctdGFnLScgKyBpbmRleC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgY2lyY3VsYXI9e3RydWV9XHJcbiAgICAgICAgICAgIGJsYW5rPXt0cnVlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRhZ1JlbW92ZUNsaWNrKHRhZyl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTEgdHJhbnNmb3JtLXJvdGF0ZS0tNDUgbGluZS1oZWlnaHQtLTAgcC0wXCJcclxuICAgICAgICAgICAgQ29tcG9uZW50PXtwID0+IChcclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3AuY2xhc3NOYW1lfSBpZD17cC5pZH0gb25DbGljaz17cC5vbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgIHtwLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBsdXNJY29uIC8+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKCd0YWdzLWlucHV0X190YWcnLCB7XHJcbiAgICAgICd0YWdzLWlucHV0X190YWctY2hpcCc6IHRoaXMucHJvcHMuc2hvd0NoaXBzLFxyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblRhZ0NsaWNrKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy50YWdDbGljayh0YWcpfVxyXG4gICAgICAgICAgc21hbGw9e3RydWV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2JvZHl9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMudGFnQ2xpY2sodGFnKX0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGtleT17aW5kZXh9PlxyXG4gICAgICAgIHtib2R5fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRhZ0NsaWNrID0gKHRhZzogVGFnKSA9PiAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uVGFnQ2xpY2sgJiYgdGhpcy5wcm9wcy5vblRhZ0NsaWNrKHRhZyk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSB0YWdSZW1vdmVDbGljayA9ICh0YWc6IFRhZykgPT4gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgY29uc3QgbmV3VGFncyA9IHRoaXMucHJvcHMudGFncy5maWx0ZXIoc3YgPT4gc3YuaWQgIT09IHRhZy5pZCk7XHJcbiAgICBpZiAobmV3VGFncy5sZW5ndGggPT09IDApIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmZvY3VzKCksIDUwKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBzdWdnZXN0aW9uc1Zpc2libGU6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnByb3BzLm9uVGFnc0NoYW5nZWQgJiYgdGhpcy5wcm9wcy5vblRhZ3NDaGFuZ2VkKG5ld1RhZ3MpO1xyXG4gICAgdGhpcy5oYW5kbGVFcnJvcnMobmV3VGFncyk7XHJcbiAgICAvLyB0aGlzLmZldGNoRXhpc3RpbmdUYWdzKCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJUYWdzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMudGFncyAmJiB0aGlzLnByb3BzLnRhZ3MubGVuZ3RoID4gMCA/IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdfX3dyYXBwZXJcIj5cclxuICAgICAgICB7dGhpcy5wcm9wcy50YWdzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHRoaXMucmVuZGVyVGFnKGl0ZW0sIGluZGV4KSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IChcclxuICAgICAgdGhpcy5wcm9wcy5yZWFkT25seSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWlucHV0X190YWdfX3dyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1pbnB1dF9fdGFnXCI+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnJlYWRvbmx5RW1wdHlQbGFjZWhvbGRlcn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ3MgPSB3aXRoRm9ybUNvbnRleHQ8VGFnc1Jhd1Byb3BzLCBUYWdzUHJvcHM+KFRhZ3NSYXcpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFncztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==