/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = react;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(45);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NumberValidator = (function () {
    function NumberValidator() {
    }
    NumberValidator.prototype.Validate = function (value, isRequired, addError) {
        if (isRequired && !value) {
            addError('Required');
            return false;
        }
        if (!isRequired && !value) {
            return true;
        }
        var number = Number(value);
        if (!isNaN(number)) {
            return true;
        }
        addError('Invalid number');
        return false;
    };
    return NumberValidator;
}());
NumberValidator.instance = new NumberValidator();
exports.NumberValidator = NumberValidator;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//Styles
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//Libs
var React = __webpack_require__(7);
//Misc
var Validators = __webpack_require__(24);
var Form = __webpack_require__(25);
var BaseInput = (function (_super) {
    __extends(BaseInput, _super);
    function BaseInput(props) {
        var _this = _super.call(this) || this;
        _this.inputId = _this.guid();
        _this.state = {
            valid: props.required ? false : true,
            value: '',
            validationValid: true
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }
    BaseInput.prototype.guid = function () {
        var s4 = function () { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); };
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + (s4() + s4() + s4());
    };
    BaseInput.prototype.getValidationClass = function () {
        return this.state.validationValid ? 'validation__success' : 'validation__error';
    };
    BaseInput.prototype.renderDefaultValidation = function () {
        return React.createElement("div", { className: "validation__container" },
            React.createElement("ul", { className: "validation__ul" }, this.state.errors && this.state.errors.map(function (item, index) { return React.createElement("span", { key: index, className: "validation__item" }, item); })));
    };
    BaseInput.prototype.componentWillUnmount = function () {
        this.context.unregister(this);
    };
    BaseInput.prototype.componentDidMount = function () {
        this.context.register(this);
    };
    BaseInput.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.value != this.props.value) {
            this.handleValueChange(nextProps.value);
        }
    };
    BaseInput.prototype.handleValueChange = function (value) {
        var errors = [];
        var valid = true;
        if (this.props.required && !value) {
            errors.push('Required');
            valid = false;
        }
        if (this.props.validator) {
            valid = false;
            switch (this.props.validator) {
                case 'email':
                    valid = Validators.EmailValidator.instance.Validate(value, this.props.required, function (error) { return errors.push(error); });
                    break;
                case 'number':
                    valid = Validators.NumberValidator.instance.Validate(value, this.props.required, function (error) { return errors.push(error); });
                    break;
                case 'latitude':
                    valid = Validators.LatitudeValidator.instance.Validate(value, this.props.required, function (error) { return errors.push(error); });
                    break;
                case 'longitude':
                    valid = Validators.LongitudeValidator.instance.Validate(value, this.props.required, function (error) { return errors.push(error); });
                    break;
                default:
                    throw new Error("Validator " + this.props.validator + " not implmeneted");
            }
            if (this.state.errors && this.state.errors.length > 0 && errors.length == 0) {
                errors = errors.concat(this.state.errors);
            }
        }
        this.setState(Object.assign({}, this.state, { value: value, valid: valid, validationValid: valid, errors: errors }));
        this.context.updateCallback(valid, this.inputId);
    };
    BaseInput.prototype.handleChange = function (event) {
        var value = event.target.value;
        if (this.props.onChange) {
            this.props.onChange(event);
        }
        this.setState(Object.assign({}, this.state, { value: value }));
    };
    BaseInput.prototype.getValue = function () {
        return this.props.value ? this.props.value : this.state.value;
    };
    return BaseInput;
}(React.Component));
BaseInput.defaultProps = {
    className: undefined,
    required: false,
    label: undefined,
    errors: []
};
BaseInput.contextTypes = Form.FormContextType;
exports.BaseInput = BaseInput;
exports.default = BaseInput;


/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EmailValidator_1 = __webpack_require__(40);
exports.EmailValidator = EmailValidator_1.EmailValidator;
var LatitudeValidator_1 = __webpack_require__(41);
exports.LatitudeValidator = LatitudeValidator_1.LatitudeValidator;
var LongitudeValidator_1 = __webpack_require__(42);
exports.LongitudeValidator = LongitudeValidator_1.LongitudeValidator;
var NumberValidator_1 = __webpack_require__(17);
exports.NumberValidator = NumberValidator_1.NumberValidator;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//Styles
__webpack_require__(43);
//Libs
var React = __webpack_require__(7);
var prop_types_1 = __webpack_require__(46);
exports.FormContextType = {
    register: prop_types_1.default.func.isRequired,
    unregister: prop_types_1.default.func.isRequired,
    isFormValid: prop_types_1.default.func.isRequired,
    updateCallback: prop_types_1.default.func.isRequired
};
var Form = (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this) || this;
        _this.components = {};
        _this.register = _this.register.bind(_this);
        _this.unregister = _this.unregister.bind(_this);
        _this.updateCallback = _this.updateCallback.bind(_this);
        _this.state = {
            isFormValid: false
        };
        return _this;
    }
    Form.prototype.register = function (component) {
        this.components[component.inputId] = component;
        this.updateCallback();
    };
    ;
    Form.prototype.unregister = function (component) {
        delete this.components[component.inputId];
    };
    ;
    Form.prototype.getChildContext = function () {
        var _this = this;
        return {
            register: this.register,
            unregister: this.unregister,
            isFormValid: function () { return _this.state.isFormValid; },
            updateCallback: this.updateCallback
        };
    };
    Form.prototype.updateCallback = function (isComponentValid, inputId) {
        var _this = this;
        if (isComponentValid === void 0) { isComponentValid = true; }
        if (inputId === void 0) { inputId = ''; }
        var valid = false;
        if (isComponentValid) {
            valid = true;
            Object.keys(this.components).forEach(function (key) {
                var component = _this.components[key];
                if (component.inputId != inputId && !component.state.valid) {
                    valid = false;
                }
            });
        }
        this.setState(Object.assign({}, this.state, { isFormValid: valid }));
    };
    Form.prototype.render = function () {
        return React.createElement("form", { role: "form", className: "validation-form " + (this.props.className ? this.props.className : '') }, this.props.children);
    };
    return Form;
}(React.Component));
Form.defaultProps = {};
Form.childContextTypes = exports.FormContextType;
exports.Form = Form;
exports.default = Form;


/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(24));
var Form_1 = __webpack_require__(25);
exports.Form = Form_1.Form;
__export(__webpack_require__(47));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.prototype.Validate = function (value, isRequired, addError) {
        if (isRequired && !value) {
            addError('Required');
            return false;
        }
        if (!isRequired && !value) {
            return true;
        }
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            return true;
        }
        addError('Invalid email');
        return false;
    };
    return EmailValidator;
}());
EmailValidator.instance = new EmailValidator();
exports.EmailValidator = EmailValidator;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NumberValidator_1 = __webpack_require__(17);
var LatitudeValidator = (function () {
    function LatitudeValidator() {
    }
    LatitudeValidator.prototype.Validate = function (value, isRequired, addError) {
        var validNumber = NumberValidator_1.NumberValidator.instance.Validate(value, isRequired, addError);
        if (validNumber) {
            var number = Number(value);
            if (-90 > number || number > 90) {
                addError('Invalid latitude');
                return false;
            }
            return true;
        }
        return false;
    };
    return LatitudeValidator;
}());
LatitudeValidator.instance = new LatitudeValidator();
exports.LatitudeValidator = LatitudeValidator;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NumberValidator_1 = __webpack_require__(17);
var LongitudeValidator = (function () {
    function LongitudeValidator() {
    }
    LongitudeValidator.prototype.Validate = function (value, isRequired, addError) {
        var validNumber = NumberValidator_1.NumberValidator.instance.Validate(value, isRequired, addError);
        if (validNumber) {
            var number = Number(value);
            if (-180 > number || number > 180) {
                addError('Invalid longitude');
                return false;
            }
            return true;
        }
        return false;
    };
    return LongitudeValidator;
}());
LongitudeValidator.instance = new LongitudeValidator();
exports.LongitudeValidator = LongitudeValidator;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--1-2!../../../../node_modules/postcss-loader/lib/index.js??ref--1-3!../../../../node_modules/sass-loader/lib/loader.js??ref--1-4!./form.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js??ref--1-2!../../../../node_modules/postcss-loader/lib/index.js??ref--1-3!../../../../node_modules/sass-loader/lib/loader.js??ref--1-4!./form.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"form.scss","sourceRoot":""}]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = prop-types;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//Styles
__webpack_require__(48);
//Misc
var TextInput_1 = __webpack_require__(50);
exports.TextInput = TextInput_1.TextInput;
var SelectInput_1 = __webpack_require__(53);
exports.SelectInput = SelectInput_1.SelectInput;
var SubmitInput_1 = __webpack_require__(56);
exports.SubmitInput = SubmitInput_1.SubmitInput;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--1-2!../../../../node_modules/postcss-loader/lib/index.js??ref--1-3!../../../../node_modules/sass-loader/lib/loader.js??ref--1-4!./input.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js??ref--1-2!../../../../node_modules/postcss-loader/lib/index.js??ref--1-3!../../../../node_modules/sass-loader/lib/loader.js??ref--1-4!./input.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(true);
// imports


// module
exports.push([module.i, ".input__group {\n  position: relative;\n  margin-bottom: 35px;\n  border-bottom: 1px solid #eeeeee;\n  /* VALIDATION ======================================= */\n  /* LABEL ======================================= */\n  /* active state */\n  /* BOTTOM BARS ================================= */\n  /* active state */\n  /* HIGHLIGHTER ================================== */\n  /* active state */ }\n  .input__group .validation__container {\n    position: absolute;\n    top: 100%;\n    right: 0;\n    color: red;\n    overflow: hidden;\n    font-size: 12px; }\n  .input__group .validation__ul {\n    padding: 0;\n    margin: 0;\n    position: relative;\n    margin-top: -20px;\n    transition: 0.5s; }\n  .input__group.validation__error {\n    border-bottom: 1px solid #ffbbbb; }\n    .input__group.validation__error .validation__ul {\n      margin-top: 0; }\n    .input__group.validation__error .bar:before, .input__group.validation__error .bar:after {\n      background: red; }\n  .input__group label {\n    color: #999999;\n    font-size: 18px;\n    font-weight: normal;\n    position: absolute;\n    pointer-events: none;\n    left: 5px;\n    top: 10px;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all; }\n  .input__group input:focus ~ label, .input__group input.filled ~ label, .input__group select:focus ~ label, .input__group select.filled ~ label {\n    top: -15px;\n    font-size: 14px;\n    color: #10bdc7; }\n  .input__group .bar {\n    display: block;\n    width: 100%; }\n  .input__group .bar:before, .input__group .bar:after {\n    content: '';\n    height: 2px;\n    width: 0;\n    bottom: 0px;\n    position: absolute;\n    background: #10bdc7;\n    transition: 0.2s ease all;\n    -moz-transition: 0.2s ease all;\n    -webkit-transition: 0.2s ease all; }\n  .input__group .bar:before {\n    left: 50%; }\n  .input__group .bar:after {\n    right: 50%; }\n  .input__group input:focus ~ .bar:before, .input__group input:focus ~ .bar:after, .input__group select:focus ~ .bar:before, .input__group select:focus ~ .bar:after {\n    width: 50%; }\n  .input__group .highlight {\n    position: absolute;\n    height: 60%;\n    width: 100px;\n    top: 25%;\n    left: 0;\n    pointer-events: none;\n    opacity: 0.5; }\n  .input__group input:focus ~ .highlight, .input__group select:focus ~ .highlight {\n    -webkit-animation: inputHighlighter 0.3s ease;\n    animation: inputHighlighter 0.3s ease; }\n  .input__group input:focus {\n    outline: none; }\n\n/* ANIMATIONS ================ */\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #10bdc7; }\n  to {\n    width: 0;\n    background: transparent; } }\n@keyframes inputHighlighter {\n  from {\n    background: #10bdc7; }\n  to {\n    width: 0;\n    background: transparent; } }\n", "", {"version":3,"sources":["F:/coding/GuestBell/guestbell-forms/src/lib/components/input/F:/coding/GuestBell/guestbell-forms/src/lib/components/input/input.scss","F:/coding/GuestBell/guestbell-forms/src/lib/components/input/F:/coding/GuestBell/guestbell-forms/src/lib/components/input/variables.scss"],"names":[],"mappings":"AAEA;EACI,mBAAkB;EAClB,oBAAmB;EACnB,iCCJqC;EDKrC,wDAAwD;EA6BxD,mDAAmD;EAanD,kBAAkB;EAMlB,mDAAmD;EAyBnD,kBAAkB;EAIlB,oDAAoD;EAUpD,kBAAkB,EAUrB;EArGD;IAMQ,mBAAkB;IAClB,UAAS;IACT,SAAQ;IACR,WCNoB;IDOpB,iBAAgB;IAChB,gBCPwB,EDQ3B;EAZL;IAeQ,WAAU;IACV,UAAS;IACT,mBAAkB;IAClB,kBAAiB;IACjB,iBAAgB,EACnB;EApBL;IA+BQ,iCCzBqC,ED0BxC;IAhCL;MAwBY,cAAa,EAChB;IAzBT;MA4BY,gBCvB0B,EDwB7B;EA7BT;IAmCQ,eCnC8B;IDoC9B,gBAAe;IACf,oBAAmB;IACnB,mBAAkB;IAClB,qBAAoB;IACpB,UAAS;IACT,UAAS;IACT,0BAAyB;IACzB,+BAA8B;IAC9B,kCAAiC,EACpC;EA7CL;IAgDQ,WAAU;IACV,gBAAe;IACf,eCpDuB,EDqD1B;EAnDL;IAsDQ,eAAc;IACd,YAAW,EACd;EAxDL;IA2DQ,YAAW;IACX,YAAW;IACX,SAAQ;IACR,YAAW;IACX,mBAAkB;IAClB,oBClEuB;IDmEvB,0BAAyB;IACzB,+BAA8B;IAC9B,kCAAiC,EACpC;EApEL;IAuEQ,UAAS,EACZ;EAxEL;IA2EQ,WAAU,EACb;EA5EL;IA+EQ,WAAU,EACb;EAhFL;IAmFQ,mBAAkB;IAClB,YAAW;IACX,aAAY;IACZ,SAAQ;IACR,QAAO;IACP,qBAAoB;IACpB,aAAY,EACf;EA1FL;IA6FQ,8CAA6C;IAE7C,sCAAqC,EACxC;EAhGL;IAmGQ,cAAa,EAChB;;AAGL,iCAAiC;AACjC;EACI;IACI,oBC5GuB,EAAA;ED+G3B;IACI,SAAQ;IACR,wBAAuB,EAAA,EAAA;AAP/B;EACI;IACI,oBC5GuB,EAAA;ED+G3B;IACI,SAAQ;IACR,wBAAuB,EAAA,EAAA","file":"input.scss","sourcesContent":["@import 'variables.scss';\r\n\r\n.input__group {\r\n    position: relative;\r\n    margin-bottom: 35px;\r\n    border-bottom: 1px solid $input-border-color;\r\n    /* VALIDATION ======================================= */\r\n    .validation__container {\r\n        position: absolute;\r\n        top: 100%;\r\n        right: 0;\r\n        color: $input-validation-color;\r\n        overflow: hidden;\r\n        font-size: $input-validation-fontsize;\r\n    }\r\n\r\n    .validation__ul {\r\n        padding: 0;\r\n        margin: 0;\r\n        position: relative;\r\n        margin-top: -20px;\r\n        transition: 0.5s;\r\n    }\r\n\r\n    &.validation__error {\r\n        .validation__ul {\r\n            margin-top: 0;\r\n        }\r\n\r\n        .bar:before, .bar:after {\r\n            background: $input-validation-error-bar-color;\r\n        }\r\n\r\n        border-bottom: 1px solid $input-validation-error-border-color;\r\n    }\r\n    /* LABEL ======================================= */\r\n    label {\r\n        color: $input-label-color;\r\n        font-size: 18px;\r\n        font-weight: normal;\r\n        position: absolute;\r\n        pointer-events: none;\r\n        left: 5px;\r\n        top: 10px;\r\n        transition: 0.2s ease all;\r\n        -moz-transition: 0.2s ease all;\r\n        -webkit-transition: 0.2s ease all;\r\n    }\r\n    /* active state */\r\n    input:focus ~ label, input.filled ~ label, select:focus ~ label, select.filled ~ label {\r\n        top: -15px;\r\n        font-size: 14px;\r\n        color: $input-highlight-color;\r\n    }\r\n    /* BOTTOM BARS ================================= */\r\n    .bar {\r\n        display: block;\r\n        width: 100%;\r\n    }\r\n\r\n    .bar:before, .bar:after {\r\n        content: '';\r\n        height: 2px;\r\n        width: 0;\r\n        bottom: 0px;\r\n        position: absolute;\r\n        background: $input-highlight-color;\r\n        transition: 0.2s ease all;\r\n        -moz-transition: 0.2s ease all;\r\n        -webkit-transition: 0.2s ease all;\r\n    }\r\n\r\n    .bar:before {\r\n        left: 50%;\r\n    }\r\n\r\n    .bar:after {\r\n        right: 50%;\r\n    }\r\n    /* active state */\r\n    input:focus ~ .bar:before, input:focus ~ .bar:after, select:focus ~ .bar:before, select:focus ~ .bar:after {\r\n        width: 50%;\r\n    }\r\n    /* HIGHLIGHTER ================================== */\r\n    .highlight {\r\n        position: absolute;\r\n        height: 60%;\r\n        width: 100px;\r\n        top: 25%;\r\n        left: 0;\r\n        pointer-events: none;\r\n        opacity: 0.5;\r\n    }\r\n    /* active state */\r\n    input:focus ~ .highlight, select:focus ~ .highlight {\r\n        -webkit-animation: inputHighlighter 0.3s ease;\r\n        -moz-animation: inputHighlighter 0.3s ease;\r\n        animation: inputHighlighter 0.3s ease;\r\n    }\r\n\r\n    input:focus {\r\n        outline: none;\r\n    }\r\n}\r\n\r\n/* ANIMATIONS ================ */\r\n@keyframes inputHighlighter {\r\n    from {\r\n        background: $input-highlight-color;\r\n    }\r\n\r\n    to {\r\n        width: 0;\r\n        background: transparent;\r\n    }\r\n}\r\n","﻿$input-highlight-color: #10bdc7;\r\n$input-border-color: lighten(#000, 93.5%);\r\n$input-label-color: lighten(#000, 60%);\r\n$input-text-color: lighten(#000, 33.5%);\r\n\r\n$input-validation-color: red;\r\n$input-validation-fontsize: 12px;\r\n$input-validation-error-bar-color: red;\r\n$input-validation-error-border-color: #ffbbbb;\r\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//Styles
__webpack_require__(51);
//Libs
var React = __webpack_require__(7);
//Misc
var BaseInput = __webpack_require__(18);
var TextInput = (function (_super) {
    __extends(TextInput, _super);
    function TextInput(props) {
        return _super.call(this, props) || this;
    }
    TextInput.prototype.render = function () {
        return React.createElement("div", { className: "input__group text-input " + this.getValidationClass() },
            React.createElement("input", { type: this.props.type, required: this.props.required, className: this.getValue() ? 'filled' : '', onChange: this.handleChange, value: this.getValue() }),
            React.createElement("span", { className: "highlight" }),
            React.createElement("span", { className: "bar" }),
            this.renderDefaultValidation(),
            this.props.label && React.createElement("label", null, this.props.label));
    };
    return TextInput;
}(BaseInput.BaseInput));
TextInput.defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { type: "text" });
exports.TextInput = TextInput;
exports.default = TextInput;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js??ref--1-2!../../../../../../node_modules/postcss-loader/lib/index.js??ref--1-3!../../../../../../node_modules/sass-loader/lib/loader.js??ref--1-4!./textInput.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js??ref--1-2!../../../../../../node_modules/postcss-loader/lib/index.js??ref--1-3!../../../../../../node_modules/sass-loader/lib/loader.js??ref--1-4!./textInput.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(true);
// imports


// module
exports.push([module.i, ".text-input {\n  display: block;\n  margin-top: 20px; }\n  .text-input input {\n    padding: 10px 10px 10px 5px;\n    color: #555555;\n    outline: 0;\n    border: none;\n    width: 100%; }\n", "", {"version":3,"sources":["F:/coding/GuestBell/guestbell-forms/src/lib/components/input/subComponents/textInput/F:/coding/GuestBell/guestbell-forms/src/lib/components/input/subComponents/textInput/textInput.scss","F:/coding/GuestBell/guestbell-forms/src/lib/components/input/subComponents/textInput/F:/coding/GuestBell/guestbell-forms/src/lib/components/input/variables.scss"],"names":[],"mappings":"AAEA;EACI,eAAc;EACd,iBAAgB,EASnB;EAXD;IAKQ,4BAA2B;IAC3B,eCL+B;IDM/B,WAAU;IACV,aAAY;IACZ,YAAW,EACd","file":"textInput.scss","sourcesContent":["@import '../../variables.scss';\r\n\r\n.text-input {\r\n    display: block;\r\n    margin-top: 20px;\r\n\r\n    input {\r\n        padding: 10px 10px 10px 5px;\r\n        color: $input-text-color;\r\n        outline: 0;\r\n        border: none;\r\n        width: 100%;\r\n    }\r\n}\r\n","﻿$input-highlight-color: #10bdc7;\r\n$input-border-color: lighten(#000, 93.5%);\r\n$input-label-color: lighten(#000, 60%);\r\n$input-text-color: lighten(#000, 33.5%);\r\n\r\n$input-validation-color: red;\r\n$input-validation-fontsize: 12px;\r\n$input-validation-error-bar-color: red;\r\n$input-validation-error-border-color: #ffbbbb;\r\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//Styles
__webpack_require__(54);
//Libs
var React = __webpack_require__(7);
//Misc
var BaseInput = __webpack_require__(18);
var SelectInput = (function (_super) {
    __extends(SelectInput, _super);
    function SelectInput(props) {
        var _this = _super.call(this, props) || this;
        var val = props.defaultEmpty ?
            '' :
            props.values && props.values.length > 0 ?
                props.values[0]
                :
                    '';
        _this.state = Object.assign(_this.state, { value: val });
        return _this;
    }
    SelectInput.prototype.render = function () {
        return React.createElement("div", { className: "input__group select-input" },
            React.createElement("select", { required: this.props.required, onChange: this.handleChange, value: this.getValue(), className: "select-input__select " + (this.getValue() != '' ? 'filled' : '') },
                this.props.defaultEmpty && React.createElement("option", { key: 0, disabled: true, value: "", style: { display: 'none' } }),
                this.props.values && this.props.values.map(function (value, index) { return React.createElement("option", { key: index, value: value.value }, value.label ? value.label : value.value); })),
            React.createElement("span", { className: "highlight" }),
            React.createElement("span", { className: "bar" }),
            React.createElement("span", { className: "validation" }),
            this.props.label && React.createElement("label", null, this.props.label));
    };
    return SelectInput;
}(BaseInput.BaseInput));
SelectInput.defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { defaultEmpty: true });
exports.SelectInput = SelectInput;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js??ref--1-2!../../../../../../node_modules/postcss-loader/lib/index.js??ref--1-3!../../../../../../node_modules/sass-loader/lib/loader.js??ref--1-4!./selectInput.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js??ref--1-2!../../../../../../node_modules/postcss-loader/lib/index.js??ref--1-3!../../../../../../node_modules/sass-loader/lib/loader.js??ref--1-4!./selectInput.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(true);
// imports


// module
exports.push([module.i, ".select-input {\n  display: block;\n  border: none;\n  border-bottom: 1px solid #eeeeee;\n  margin-top: 20px; }\n  .select-input::after {\n    position: absolute;\n    top: 18px;\n    right: 10px;\n    /* Styling the down arrow */\n    width: 0;\n    height: 0;\n    padding: 0;\n    content: '';\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-top: 6px solid rgba(0, 0, 0, 0.12);\n    pointer-events: none; }\n\n.select-input__select {\n  color: #555555;\n  outline: 0;\n  border: none;\n  width: 100%;\n  max-height: 100px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 10px 10px 10px 5px; }\n", "", {"version":3,"sources":["F:/coding/GuestBell/guestbell-forms/src/lib/components/input/subComponents/selectInput/F:/coding/GuestBell/guestbell-forms/src/lib/components/input/subComponents/selectInput/selectInput.scss","F:/coding/GuestBell/guestbell-forms/src/lib/components/input/subComponents/selectInput/F:/coding/GuestBell/guestbell-forms/src/lib/components/input/variables.scss"],"names":[],"mappings":"AAEA;EACI,eAAc;EACd,aAAY;EACZ,iCCJqC;EDKrC,iBAAgB,EAgBnB;EApBD;IAOQ,mBAAkB;IAClB,UAAS;IACT,YAAW;IACX,4BAA4B;IAC5B,SAAQ;IACR,UAAS;IACT,WAAU;IACV,YAAW;IACX,mCAAkC;IAClC,oCAAmC;IACnC,0CAAyC;IACzC,qBAAoB,EACvB;;AAGL;EACI,eCtBmC;EDuBnC,WAAU;EACV,aAAY;EACZ,YAAW;EACX,kBAAiB;EACjB,yBAAgB;KAAhB,sBAAgB;UAAhB,iBAAgB;EAChB,4BAA2B,EAC9B","file":"selectInput.scss","sourcesContent":["@import '../../variables.scss';\r\n\r\n.select-input {\r\n    display: block;\r\n    border: none;\r\n    border-bottom: 1px solid $input-border-color;\r\n    margin-top: 20px;\r\n\r\n    &::after {\r\n        position: absolute;\r\n        top: 18px;\r\n        right: 10px;\r\n        /* Styling the down arrow */\r\n        width: 0;\r\n        height: 0;\r\n        padding: 0;\r\n        content: '';\r\n        border-left: 6px solid transparent;\r\n        border-right: 6px solid transparent;\r\n        border-top: 6px solid rgba(0, 0, 0, 0.12);\r\n        pointer-events: none;\r\n    }\r\n}\r\n\r\n.select-input__select {\r\n    color: $input-text-color;\r\n    outline: 0;\r\n    border: none;\r\n    width: 100%;\r\n    max-height: 100px;\r\n    appearance: none;\r\n    padding: 10px 10px 10px 5px;\r\n}\r\n","﻿$input-highlight-color: #10bdc7;\r\n$input-border-color: lighten(#000, 93.5%);\r\n$input-label-color: lighten(#000, 60%);\r\n$input-text-color: lighten(#000, 33.5%);\r\n\r\n$input-validation-color: red;\r\n$input-validation-fontsize: 12px;\r\n$input-validation-error-bar-color: red;\r\n$input-validation-error-border-color: #ffbbbb;\r\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//Styles
__webpack_require__(57);
//Libs
var React = __webpack_require__(7);
//Misc
var BaseInput = __webpack_require__(18);
var SubmitInput = (function (_super) {
    __extends(SubmitInput, _super);
    function SubmitInput(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    SubmitInput.prototype.handleClick = function (e) {
        e.preventDefault();
        debugger;
        this.props.onClick && this.props.onClick(e);
    };
    SubmitInput.prototype.render = function () {
        return React.createElement("button", { type: "submit", className: "" + (this.props.className ? this.props.className : '') + (this.getValue() ? 'filled' : ''), onClick: this.handleClick, disabled: this.props.validateForm ? this.context.isFormValid && !this.context.isFormValid() : false }, this.props.children);
    };
    return SubmitInput;
}(BaseInput.BaseInput));
SubmitInput.defaultProps = Object.assign(BaseInput.BaseInput.defaultProps, { validateForm: true });
exports.SubmitInput = SubmitInput;
exports.default = SubmitInput;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(11)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js??ref--1-2!../../../../../../node_modules/postcss-loader/lib/index.js??ref--1-3!../../../../../../node_modules/sass-loader/lib/loader.js??ref--1-4!./submitInput.scss", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js??ref--1-2!../../../../../../node_modules/postcss-loader/lib/index.js??ref--1-3!../../../../../../node_modules/sass-loader/lib/loader.js??ref--1-4!./submitInput.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(true);
// imports


// module
exports.push([module.i, ".text-input {\n  display: block;\n  margin-top: 20px; }\n  .text-input input {\n    padding: 10px 10px 10px 5px;\n    color: #555555;\n    outline: 0;\n    border: none;\n    width: 100%; }\n", "", {"version":3,"sources":["F:/coding/GuestBell/guestbell-forms/src/lib/components/input/subComponents/submitInput/F:/coding/GuestBell/guestbell-forms/src/lib/components/input/subComponents/submitInput/submitInput.scss","F:/coding/GuestBell/guestbell-forms/src/lib/components/input/subComponents/submitInput/F:/coding/GuestBell/guestbell-forms/src/lib/components/input/variables.scss"],"names":[],"mappings":"AAEA;EACI,eAAc;EACd,iBAAgB,EASnB;EAXD;IAKQ,4BAA2B;IAC3B,eCL+B;IDM/B,WAAU;IACV,aAAY;IACZ,YAAW,EACd","file":"submitInput.scss","sourcesContent":["@import '../../variables.scss';\r\n\r\n.text-input {\r\n    display: block;\r\n    margin-top: 20px;\r\n\r\n    input {\r\n        padding: 10px 10px 10px 5px;\r\n        color: $input-text-color;\r\n        outline: 0;\r\n        border: none;\r\n        width: 100%;\r\n    }\r\n}\r\n","﻿$input-highlight-color: #10bdc7;\r\n$input-border-color: lighten(#000, 93.5%);\r\n$input-label-color: lighten(#000, 60%);\r\n$input-text-color: lighten(#000, 33.5%);\r\n\r\n$input-validation-color: red;\r\n$input-validation-fontsize: 12px;\r\n$input-validation-error-bar-color: red;\r\n$input-validation-error-border-color: #ffbbbb;\r\n"],"sourceRoot":""}]);

// exports


/***/ })
/******/ ]);
//# sourceMappingURL=guestbell-forms-material.js.map