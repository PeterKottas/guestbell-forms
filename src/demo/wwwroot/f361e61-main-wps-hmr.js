webpackHotUpdate("main",{

/***/ "./node_modules/@material-ui/core/esm/Popper/Popper.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Popper/Popper.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Portal */ "./node_modules/@material-ui/core/esm/Portal/index.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/createChainedFunction */ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");













function flipPlacement(placement, theme) {
  var direction = theme && theme.direction || 'ltr';

  if (direction === 'ltr') {
    return placement;
  }

  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';

    case 'bottom-start':
      return 'bottom-end';

    case 'top-end':
      return 'top-start';

    case 'top-start':
      return 'top-end';

    default:
      return placement;
  }
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect;
var defaultPopperOptions = {};
/**
 * Poppers rely on the 3rd party library [Popper.js](https://github.com/FezVrasta/popper.js) for positioning.
 */

var Popper = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Popper(props, ref) {
  var anchorEl = props.anchorEl,
      children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      _props$keepMounted = props.keepMounted,
      keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
      modifiers = props.modifiers,
      open = props.open,
      _props$placement = props.placement,
      initialPlacement = _props$placement === void 0 ? 'bottom' : _props$placement,
      _props$popperOptions = props.popperOptions,
      popperOptions = _props$popperOptions === void 0 ? defaultPopperOptions : _props$popperOptions,
      popperRefProp = props.popperRef,
      _props$transition = props.transition,
      transition = _props$transition === void 0 ? false : _props$transition,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["anchorEl", "children", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition"]);

  var tooltipRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  var ownRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(tooltipRef, ref);
  var popperRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  var handlePopperRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(popperRef, popperRefProp);
  var handlePopperRefRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(handlePopperRef);
  useEnhancedEffect(function () {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useImperativeHandle(popperRefProp, function () {
    return popperRef.current;
  }, []);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  var rtlPlacement = flipPlacement(initialPlacement, theme);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(rtlPlacement),
      placement = _React$useState2[0],
      setPlacement = _React$useState2[1];

  var handleOpen = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function () {
    if (!tooltipRef.current || !anchorEl || !open) {
      return;
    }

    if (popperRef.current) {
      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    }

    var handlePopperUpdate = function handlePopperUpdate(data) {
      setPlacement(data.placement);
    };

    var resolvedAnchorEl = getAnchorEl(anchorEl);

    if (true) {
      var containerWindow = Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_11__["default"])(resolvedAnchorEl);

      if (resolvedAnchorEl instanceof containerWindow.Element) {
        var box = resolvedAnchorEl.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(['Material-UI: the `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      }
    }

    var popper = new popper_js__WEBPACK_IMPORTED_MODULE_4__["default"](getAnchorEl(anchorEl), tooltipRef.current, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, disablePortal ? {} : {
        // It's using scrollParent by default, we can use the viewport when using a portal.
        preventOverflow: {
          boundariesElement: 'window'
        }
      }, {}, modifiers, {}, popperOptions.modifiers),
      // We could have been using a custom modifier like react-popper is doing.
      // But it seems this is the best public API for this use case.
      onCreate: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__["default"])(handlePopperUpdate, popperOptions.onCreate),
      onUpdate: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__["default"])(handlePopperUpdate, popperOptions.onUpdate)
    }));
    handlePopperRefRef.current(popper);
  }, [anchorEl, disablePortal, modifiers, open, rtlPlacement, popperOptions]);
  var handleRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (node) {
    Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_9__["default"])(ownRef, node);
    handleOpen();
  }, [ownRef, handleOpen]);

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  var handleClose = function handleClose() {
    if (!popperRef.current) {
      return;
    }

    popperRef.current.destroy();
    handlePopperRefRef.current(null);
  };

  var handleExited = function handleExited() {
    setExited(true);
    handleClose();
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    // Let's update the popper position.
    handleOpen();
  }, [handleOpen]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    return function () {
      handleClose();
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (!open && !transition) {
      // Otherwise handleExited will call this.
      handleClose();
    }
  }, [open, transition]);

  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }

  var childProps = {
    placement: placement
  };

  if (transition) {
    childProps.TransitionProps = {
      in: open,
      onEnter: handleEnter,
      onExited: handleExited
    };
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disablePortal: disablePortal,
    container: container
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: handleRef,
    role: "tooltip"
  }, other, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
      position: 'fixed',
      // Fix Popper.js display issue
      top: 0,
      left: 0
    }, other.style)
  }), typeof children === 'function' ? children(childProps) : children));
});
 true ? Popper.propTypes = {
  /**
   * This is the reference element, or a function that returns the reference element,
   * that may be used to set the position of the popover.
   * The return value will passed as the reference object of the Popper
   * instance.
   *
   * The reference element should be an HTML Element instance or a referenceObject:
   * https://popper.js.org/popper-documentation.html#referenceObject.
   */
  anchorEl: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]), function (props) {
    if (props.open) {
      var resolvedAnchorEl = getAnchorEl(props.anchorEl);
      var containerWindow = Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_11__["default"])(resolvedAnchorEl);

      if (resolvedAnchorEl instanceof containerWindow.Element) {
        var box = resolvedAnchorEl.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(['Material-UI: the `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.clientWidth !== 'number' || typeof resolvedAnchorEl.clientHeight !== 'number' || typeof resolvedAnchorEl.getBoundingClientRect !== 'function') {
        return new Error(['Material-UI: the `anchorEl` prop provided to the component is invalid.', 'It should be an HTML Element instance or a referenceObject:', 'https://popper.js.org/popper-documentation.html#referenceObject.'].join('\n'));
      }
    }

    return null;
  }),

  /**
   * Popper render function or node.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]).isRequired,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   */
  keepMounted: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#modifiers--object).
   */
  modifiers: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * If `true`, the popper is visible.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,

  /**
   * Popper placement.
   */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),

  /**
   * Options provided to the [`popper.js`](https://github.com/FezVrasta/popper.js) instance.
   */
  popperOptions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * A ref that points to the used popper instance.
   */
  popperRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * Help supporting a react-transition-group/Transition component.
   */
  transition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Popper);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popper/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Popper/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popper */ "./node_modules/@material-ui/core/esm/Popper/Popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Portal/Portal.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Portal/Portal.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");







function getContainer(container) {
  container = typeof container === 'function' ? container() : container; // #StrictMode ready

  return react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(container);
}

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect;
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */

var Portal = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function Portal(props, ref) {
  var children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      onRendered = props.onRendered;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null),
      mountNode = _React$useState[0],
      setMountNode = _React$useState[1];

  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__["default"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect(function () {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(function () {
    if (mountNode && !disablePortal) {
      Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_4__["default"])(ref, mountNode);
      return function () {
        Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_4__["default"])(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect(function () {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);

  if (disablePortal) {
    if (react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(children)) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
        ref: handleRef
      });
    }

    return children;
  }

  return mountNode ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal(children, mountNode) : mountNode;
});
 true ? Portal.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The children to render into the `container`.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component), prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(typeof Element === 'undefined' ? Object : Element)]),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Callback fired once the children has been mounted into the `container`.
   *
   * This prop will be deprecated and removed in v5, the ref can be used instead.
   */
  onRendered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
} : undefined;

if (true) {
  // eslint-disable-next-line
  Portal['propTypes' + ''] = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_3__["exactProp"])(Portal.propTypes);
}

/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Portal/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Portal/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Portal */ "./node_modules/@material-ui/core/esm/Portal/Portal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Portal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/createChainedFunction.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createChainedFunction; });
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (acc, func) {
    if (func == null) {
      return acc;
    }

    if (true) {
      if (typeof func !== 'function') {
        console.error('Material-UI: invalid Argument Type, must only provide functions, undefined, or null.');
      }
    }

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function () {});
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/ownerDocument.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/* harmony default export */ __webpack_exports__["default"] = (ownerDocument);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/ownerWindow.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");


function ownerWindow(node) {
  var doc = Object(_ownerDocument__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
  return doc.defaultView || window;
}

/* harmony default export */ __webpack_exports__["default"] = (ownerWindow);

/***/ }),

/***/ "./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js ***!
  \***************************************************************************/
/*! exports provided: IGNORE_CLASS_NAME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IGNORE_CLASS_NAME", function() { return IGNORE_CLASS_NAME; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/**
 * Check whether some DOM node is our Component's node.
 */
function isNodeFound(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // SVG <use/> elements do not technically reside in the rendered DOM, so
  // they do not have classList directly, but they offer a link to their
  // corresponding element, which can have classList. This extra check is for
  // that case.
  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17


  if (current.correspondingElement) {
    return current.correspondingElement.classList.contains(ignoreClass);
  }

  return current.classList.contains(ignoreClass);
}
/**
 * Try to find our node in a hierarchy of nodes, returning the document
 * node as highest node if our node is not found in the path up.
 */

function findHighest(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // If source=local then this event came from 'somewhere'
  // inside and should be ignored. We could handle this with
  // a layered approach, too, but that requires going back to
  // thinking in terms of Dom node nesting, running counter
  // to React's 'you shouldn't care about the DOM' philosophy.


  while (current.parentNode) {
    if (isNodeFound(current, componentNode, ignoreClass)) {
      return true;
    }

    current = current.parentNode;
  }

  return current;
}
/**
 * Check if the browser scrollbar was clicked
 */

function clickedScrollbar(evt) {
  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
}

// ideally will get replaced with external dep
// when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in
var testPassiveEventSupport = function testPassiveEventSupport() {
  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
    return;
  }

  var passive = false;
  var options = Object.defineProperty({}, 'passive', {
    get: function get() {
      passive = true;
    }
  });

  var noop = function noop() {};

  window.addEventListener('testPassiveEventSupport', noop, options);
  window.removeEventListener('testPassiveEventSupport', noop, options);
  return passive;
};

function autoInc(seed) {
  if (seed === void 0) {
    seed = 0;
  }

  return function () {
    return ++seed;
  };
}

var uid = autoInc();

var passiveEventSupport;
var handlersMap = {};
var enabledInstances = {};
var touchEvents = ['touchstart', 'touchmove'];
var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
/**
 * Options for addEventHandler and removeEventHandler
 */

function getEventHandlerOptions(instance, eventName) {
  var handlerOptions = null;
  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;

  if (isTouchEvent && passiveEventSupport) {
    handlerOptions = {
      passive: !instance.props.preventDefault
    };
  }

  return handlerOptions;
}
/**
 * This function generates the HOC function that you'll use
 * in order to impart onOutsideClick listening to an
 * arbitrary component. It gets called at the end of the
 * bootstrapping code to yield an instance of the
 * onClickOutsideHOC function defined inside setupHOC().
 */


function onClickOutsideHOC(WrappedComponent, config) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(onClickOutside, _Component);

    function onClickOutside(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _this.__outsideClickHandler = function (event) {
        if (typeof _this.__clickOutsideHandlerProp === 'function') {
          _this.__clickOutsideHandlerProp(event);

          return;
        }

        var instance = _this.getInstance();

        if (typeof instance.props.handleClickOutside === 'function') {
          instance.props.handleClickOutside(event);
          return;
        }

        if (typeof instance.handleClickOutside === 'function') {
          instance.handleClickOutside(event);
          return;
        }

        throw new Error('WrappedComponent lacks a handleClickOutside(event) function for processing outside click events.');
      };

      _this.enableOnClickOutside = function () {
        if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
          return;
        }

        if (typeof passiveEventSupport === 'undefined') {
          passiveEventSupport = testPassiveEventSupport();
        }

        enabledInstances[_this._uid] = true;
        var events = _this.props.eventTypes;

        if (!events.forEach) {
          events = [events];
        }

        handlersMap[_this._uid] = function (event) {
          if (_this.props.disableOnClickOutside) return;
          if (_this.componentNode === null) return;

          if (_this.props.preventDefault) {
            event.preventDefault();
          }

          if (_this.props.stopPropagation) {
            event.stopPropagation();
          }

          if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;
          var current = event.target;

          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
            return;
          }

          _this.__outsideClickHandler(event);
        };

        events.forEach(function (eventName) {
          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_this, eventName));
        });
      };

      _this.disableOnClickOutside = function () {
        delete enabledInstances[_this._uid];
        var fn = handlersMap[_this._uid];

        if (fn && typeof document !== 'undefined') {
          var events = _this.props.eventTypes;

          if (!events.forEach) {
            events = [events];
          }

          events.forEach(function (eventName) {
            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_this, eventName));
          });
          delete handlersMap[_this._uid];
        }
      };

      _this.getRef = function (ref) {
        return _this.instanceRef = ref;
      };

      _this._uid = uid();
      return _this;
    }
    /**
     * Access the WrappedComponent's instance.
     */


    var _proto = onClickOutside.prototype;

    _proto.getInstance = function getInstance() {
      if (!WrappedComponent.prototype.isReactComponent) {
        return this;
      }

      var ref = this.instanceRef;
      return ref.getInstance ? ref.getInstance() : ref;
    };

    /**
     * Add click listeners to the current document,
     * linked to this component's state.
     */
    _proto.componentDidMount = function componentDidMount() {
      // If we are in an environment without a DOM such
      // as shallow rendering or snapshots then we exit
      // early to prevent any unhandled errors being thrown.
      if (typeof document === 'undefined' || !document.createElement) {
        return;
      }

      var instance = this.getInstance();

      if (config && typeof config.handleClickOutside === 'function') {
        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);

        if (typeof this.__clickOutsideHandlerProp !== 'function') {
          throw new Error('WrappedComponent lacks a function for processing outside click events specified by the handleClickOutside config option.');
        }
      }

      this.componentNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(this.getInstance());
      this.enableOnClickOutside();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      this.componentNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(this.getInstance());
    };
    /**
     * Remove all document's event listeners for this component
     */


    _proto.componentWillUnmount = function componentWillUnmount() {
      this.disableOnClickOutside();
    };
    /**
     * Can be called to explicitly enable event listening
     * for clicks and touches outside of this element.
     */


    /**
     * Pass-through render
     */
    _proto.render = function render() {
      // eslint-disable-next-line no-unused-vars
      var _props = this.props,
          excludeScrollbar = _props.excludeScrollbar,
          props = _objectWithoutProperties(_props, ["excludeScrollbar"]);

      if (WrappedComponent.prototype.isReactComponent) {
        props.ref = this.getRef;
      } else {
        props.wrappedRef = this.getRef;
      }

      props.disableOnClickOutside = this.disableOnClickOutside;
      props.enableOnClickOutside = this.enableOnClickOutside;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrappedComponent, props);
    };

    return onClickOutside;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.displayName = "OnClickOutside(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")", _class.defaultProps = {
    eventTypes: ['mousedown', 'touchstart'],
    excludeScrollbar: config && config.excludeScrollbar || false,
    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
    preventDefault: false,
    stopPropagation: false
  }, _class.getClass = function () {
    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
  }, _temp;
}


/* harmony default export */ __webpack_exports__["default"] = (onClickOutsideHOC);


/***/ }),

/***/ "./src/lib/components/tags/subComponents/TagsSuggestions.tsx":
/*!*******************************************************************!*\
  !*** ./src/lib/components/tags/subComponents/TagsSuggestions.tsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_onclickoutside__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-onclickoutside */ "./node_modules/react-onclickoutside/dist/react-onclickoutside.es.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../.. */ "./src/lib/index.ts");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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






var Suggestions =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Suggestions, _React$Component);

  function Suggestions(props) {
    var _this;

    _classCallCheck(this, Suggestions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Suggestions).call(this, props));

    _this.onSelected = function (tag) {
      return function () {
        _this.setState({
          key: _this.state.key + 1
        });

        _this.props.onSelected(tag);
      };
    };

    _this.state = {
      key: 0
    };
    _this.onSelected = _this.onSelected.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Suggestions, [{
    key: "render",
    value: function render() {
      var _this$props$anchorEl,
          _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        key: this.state.key,
        open: this.props.isVisible,
        anchorEl: this.props.anchorEl,
        style: {
          width: (_this$props$anchorEl = this.props.anchorEl) === null || _this$props$anchorEl === void 0 ? void 0 : _this$props$anchorEl.scrollWidth,
          zIndex: 10000
        },
        placement: "bottom-start"
      }, this.props.popperProps), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", _extends({}, this.props.id && {
        id: this.props.id
      }, {
        className: "tags-input__suggestions"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, this.props.AddNewTagComponent, this.props.loading && this.props.LoadingComponent && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        className: "w-100 text-center p-2"
      }, this.props.LoadingComponent), !this.props.loading && this.props.tags.map(function (tag, index) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](___WEBPACK_IMPORTED_MODULE_2__["Button"], _extends({}, _this2.props.id && {
          id: _this2.props.id + '-suggestion-' + index.toString()
        }, {
          className: 'w-100 tags-input__suggestion ' + (_this2.props.preselectedSuggestion !== undefined && _this2.props.preselectedSuggestion === index ? 'tags-input__suggestion--preselected' : ''),
          onClick: _this2.onSelected(tag),
          dropdown: true
        }), tag.name));
      }), !this.props.loading && this.props.EmptyComponent && this.props.tags.length === 0 && !this.props.allowNew && react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        className: "w-100 text-center p-2"
      }, this.props.EmptyComponent))));
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside() {
      this.props.onClickOutside();
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Suggestions;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var SuggestionsWrapped = Object(react_onclickoutside__WEBPACK_IMPORTED_MODULE_1__["default"])(Suggestions);
var _default = SuggestionsWrapped;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Suggestions, "Suggestions", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\subComponents\\TagsSuggestions.tsx");
  reactHotLoader.register(SuggestionsWrapped, "SuggestionsWrapped", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\subComponents\\TagsSuggestions.tsx");
  reactHotLoader.register(_default, "default", "C:\\Coding\\GuestBell\\guestbell-forms\\src\\lib\\components\\tags\\subComponents\\TagsSuggestions.tsx");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1BvcHBlci9Qb3BwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Qb3BwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Qb3J0YWwvUG9ydGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vUG9ydGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvb3duZXJEb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL293bmVyV2luZG93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1vbmNsaWNrb3V0c2lkZS9kaXN0L3JlYWN0LW9uY2xpY2tvdXRzaWRlLmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvY29tcG9uZW50cy90YWdzL3N1YkNvbXBvbmVudHMvVGFnc1N1Z2dlc3Rpb25zLnRzeCJdLCJuYW1lcyI6WyJTdWdnZXN0aW9ucyIsInByb3BzIiwib25TZWxlY3RlZCIsInRhZyIsInNldFN0YXRlIiwia2V5Iiwic3RhdGUiLCJiaW5kIiwiaXNWaXNpYmxlIiwiYW5jaG9yRWwiLCJ3aWR0aCIsInNjcm9sbFdpZHRoIiwiekluZGV4IiwicG9wcGVyUHJvcHMiLCJpZCIsIkFkZE5ld1RhZ0NvbXBvbmVudCIsImxvYWRpbmciLCJMb2FkaW5nQ29tcG9uZW50IiwidGFncyIsIm1hcCIsImluZGV4IiwidG9TdHJpbmciLCJwcmVzZWxlY3RlZFN1Z2dlc3Rpb24iLCJ1bmRlZmluZWQiLCJuYW1lIiwiRW1wdHlDb21wb25lbnQiLCJsZW5ndGgiLCJhbGxvd05ldyIsIm9uQ2xpY2tPdXRzaWRlIiwiUmVhY3QiLCJTdWdnZXN0aW9uc1dyYXBwZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7QUFDZ0M7QUFDaEU7QUFDUztBQUNGO0FBQzRCO0FBQ2Q7QUFDaEI7QUFDb0M7QUFDOUI7QUFDUTtBQUNFOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdEQUF3RCw0Q0FBSyxtQkFBbUIsNENBQUs7QUFDckY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSw0Q0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0dBQXdCOztBQUV0QyxtQkFBbUIsNENBQUs7QUFDeEIsZUFBZSxrRUFBVTtBQUN6QixrQkFBa0IsNENBQUs7QUFDdkIsd0JBQXdCLGtFQUFVO0FBQ2xDLDJCQUEyQiw0Q0FBSztBQUNoQztBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsNENBQUs7QUFDUDtBQUNBLEdBQUc7O0FBRUgsd0JBQXdCLDRDQUFLO0FBQzdCO0FBQ0E7O0FBRUEsY0FBYyxvRUFBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qiw0Q0FBSztBQUM5QjtBQUNBOztBQUVBLG1CQUFtQiw0Q0FBSztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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OzBCQS9FVDlCLFc7MEJBNkVBOEIsa0IiLCJmaWxlIjoiZjM2MWU2MS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBQb3BwZXJKUyBmcm9tICdwb3BwZXIuanMnO1xuaW1wb3J0IHsgY2hhaW5Qcm9wVHlwZXMsIHJlZlR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vUG9ydGFsJztcbmltcG9ydCBjcmVhdGVDaGFpbmVkRnVuY3Rpb24gZnJvbSAnLi4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJztcbmltcG9ydCBzZXRSZWYgZnJvbSAnLi4vdXRpbHMvc2V0UmVmJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuaW1wb3J0IG93bmVyV2luZG93IGZyb20gJy4uL3V0aWxzL293bmVyV2luZG93JztcblxuZnVuY3Rpb24gZmxpcFBsYWNlbWVudChwbGFjZW1lbnQsIHRoZW1lKSB7XG4gIHZhciBkaXJlY3Rpb24gPSB0aGVtZSAmJiB0aGVtZS5kaXJlY3Rpb24gfHwgJ2x0cic7XG5cbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ2x0cicpIHtcbiAgICByZXR1cm4gcGxhY2VtZW50O1xuICB9XG5cbiAgc3dpdGNoIChwbGFjZW1lbnQpIHtcbiAgICBjYXNlICdib3R0b20tZW5kJzpcbiAgICAgIHJldHVybiAnYm90dG9tLXN0YXJ0JztcblxuICAgIGNhc2UgJ2JvdHRvbS1zdGFydCc6XG4gICAgICByZXR1cm4gJ2JvdHRvbS1lbmQnO1xuXG4gICAgY2FzZSAndG9wLWVuZCc6XG4gICAgICByZXR1cm4gJ3RvcC1zdGFydCc7XG5cbiAgICBjYXNlICd0b3Atc3RhcnQnOlxuICAgICAgcmV0dXJuICd0b3AtZW5kJztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcGxhY2VtZW50O1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEFuY2hvckVsKGFuY2hvckVsKSB7XG4gIHJldHVybiB0eXBlb2YgYW5jaG9yRWwgPT09ICdmdW5jdGlvbicgPyBhbmNob3JFbCgpIDogYW5jaG9yRWw7XG59XG5cbnZhciB1c2VFbmhhbmNlZEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gUmVhY3QudXNlTGF5b3V0RWZmZWN0IDogUmVhY3QudXNlRWZmZWN0O1xudmFyIGRlZmF1bHRQb3BwZXJPcHRpb25zID0ge307XG4vKipcbiAqIFBvcHBlcnMgcmVseSBvbiB0aGUgM3JkIHBhcnR5IGxpYnJhcnkgW1BvcHBlci5qc10oaHR0cHM6Ly9naXRodWIuY29tL0ZlelZyYXN0YS9wb3BwZXIuanMpIGZvciBwb3NpdGlvbmluZy5cbiAqL1xuXG52YXIgUG9wcGVyID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBQb3BwZXIocHJvcHMsIHJlZikge1xuICB2YXIgYW5jaG9yRWwgPSBwcm9wcy5hbmNob3JFbCxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjb250YWluZXIgPSBwcm9wcy5jb250YWluZXIsXG4gICAgICBfcHJvcHMkZGlzYWJsZVBvcnRhbCA9IHByb3BzLmRpc2FibGVQb3J0YWwsXG4gICAgICBkaXNhYmxlUG9ydGFsID0gX3Byb3BzJGRpc2FibGVQb3J0YWwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVQb3J0YWwsXG4gICAgICBfcHJvcHMka2VlcE1vdW50ZWQgPSBwcm9wcy5rZWVwTW91bnRlZCxcbiAgICAgIGtlZXBNb3VudGVkID0gX3Byb3BzJGtlZXBNb3VudGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRrZWVwTW91bnRlZCxcbiAgICAgIG1vZGlmaWVycyA9IHByb3BzLm1vZGlmaWVycyxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgX3Byb3BzJHBsYWNlbWVudCA9IHByb3BzLnBsYWNlbWVudCxcbiAgICAgIGluaXRpYWxQbGFjZW1lbnQgPSBfcHJvcHMkcGxhY2VtZW50ID09PSB2b2lkIDAgPyAnYm90dG9tJyA6IF9wcm9wcyRwbGFjZW1lbnQsXG4gICAgICBfcHJvcHMkcG9wcGVyT3B0aW9ucyA9IHByb3BzLnBvcHBlck9wdGlvbnMsXG4gICAgICBwb3BwZXJPcHRpb25zID0gX3Byb3BzJHBvcHBlck9wdGlvbnMgPT09IHZvaWQgMCA/IGRlZmF1bHRQb3BwZXJPcHRpb25zIDogX3Byb3BzJHBvcHBlck9wdGlvbnMsXG4gICAgICBwb3BwZXJSZWZQcm9wID0gcHJvcHMucG9wcGVyUmVmLFxuICAgICAgX3Byb3BzJHRyYW5zaXRpb24gPSBwcm9wcy50cmFuc2l0aW9uLFxuICAgICAgdHJhbnNpdGlvbiA9IF9wcm9wcyR0cmFuc2l0aW9uID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyR0cmFuc2l0aW9uLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFuY2hvckVsXCIsIFwiY2hpbGRyZW5cIiwgXCJjb250YWluZXJcIiwgXCJkaXNhYmxlUG9ydGFsXCIsIFwia2VlcE1vdW50ZWRcIiwgXCJtb2RpZmllcnNcIiwgXCJvcGVuXCIsIFwicGxhY2VtZW50XCIsIFwicG9wcGVyT3B0aW9uc1wiLCBcInBvcHBlclJlZlwiLCBcInRyYW5zaXRpb25cIl0pO1xuXG4gIHZhciB0b29sdGlwUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgb3duUmVmID0gdXNlRm9ya1JlZih0b29sdGlwUmVmLCByZWYpO1xuICB2YXIgcG9wcGVyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgaGFuZGxlUG9wcGVyUmVmID0gdXNlRm9ya1JlZihwb3BwZXJSZWYsIHBvcHBlclJlZlByb3ApO1xuICB2YXIgaGFuZGxlUG9wcGVyUmVmUmVmID0gUmVhY3QudXNlUmVmKGhhbmRsZVBvcHBlclJlZik7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBoYW5kbGVQb3BwZXJSZWZSZWYuY3VycmVudCA9IGhhbmRsZVBvcHBlclJlZjtcbiAgfSwgW2hhbmRsZVBvcHBlclJlZl0pO1xuICBSZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKHBvcHBlclJlZlByb3AsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcG9wcGVyUmVmLmN1cnJlbnQ7XG4gIH0sIFtdKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUodHJ1ZSksXG4gICAgICBleGl0ZWQgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRFeGl0ZWQgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgdmFyIHJ0bFBsYWNlbWVudCA9IGZsaXBQbGFjZW1lbnQoaW5pdGlhbFBsYWNlbWVudCwgdGhlbWUpO1xuICAvKipcbiAgICogcGxhY2VtZW50IGluaXRpYWxpemVkIGZyb20gcHJvcCBidXQgY2FuIGNoYW5nZSBkdXJpbmcgbGlmZXRpbWUgaWYgbW9kaWZpZXJzLmZsaXAuXG4gICAqIG1vZGlmaWVycy5mbGlwIGlzIGVzc2VudGlhbGx5IGEgZmxpcCBmb3IgY29udHJvbGxlZC91bmNvbnRyb2xsZWQgYmVoYXZpb3JcbiAgICovXG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTIgPSBSZWFjdC51c2VTdGF0ZShydGxQbGFjZW1lbnQpLFxuICAgICAgcGxhY2VtZW50ID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldFBsYWNlbWVudCA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIGhhbmRsZU9wZW4gPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0b29sdGlwUmVmLmN1cnJlbnQgfHwgIWFuY2hvckVsIHx8ICFvcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHBvcHBlclJlZi5jdXJyZW50KSB7XG4gICAgICBwb3BwZXJSZWYuY3VycmVudC5kZXN0cm95KCk7XG4gICAgICBoYW5kbGVQb3BwZXJSZWZSZWYuY3VycmVudChudWxsKTtcbiAgICB9XG5cbiAgICB2YXIgaGFuZGxlUG9wcGVyVXBkYXRlID0gZnVuY3Rpb24gaGFuZGxlUG9wcGVyVXBkYXRlKGRhdGEpIHtcbiAgICAgIHNldFBsYWNlbWVudChkYXRhLnBsYWNlbWVudCk7XG4gICAgfTtcblxuICAgIHZhciByZXNvbHZlZEFuY2hvckVsID0gZ2V0QW5jaG9yRWwoYW5jaG9yRWwpO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBjb250YWluZXJXaW5kb3cgPSBvd25lcldpbmRvdyhyZXNvbHZlZEFuY2hvckVsKTtcblxuICAgICAgaWYgKHJlc29sdmVkQW5jaG9yRWwgaW5zdGFuY2VvZiBjb250YWluZXJXaW5kb3cuRWxlbWVudCkge1xuICAgICAgICB2YXIgYm94ID0gcmVzb2x2ZWRBbmNob3JFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiBib3gudG9wID09PSAwICYmIGJveC5sZWZ0ID09PSAwICYmIGJveC5yaWdodCA9PT0gMCAmJiBib3guYm90dG9tID09PSAwKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFsnTWF0ZXJpYWwtVUk6IHRoZSBgYW5jaG9yRWxgIHByb3AgcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudCBpcyBpbnZhbGlkLicsICdUaGUgYW5jaG9yIGVsZW1lbnQgc2hvdWxkIGJlIHBhcnQgb2YgdGhlIGRvY3VtZW50IGxheW91dC4nLCBcIk1ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyBwcmVzZW50IGluIHRoZSBkb2N1bWVudCBvciB0aGF0IGl0J3Mgbm90IGRpc3BsYXkgbm9uZS5cIl0uam9pbignXFxuJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHBvcHBlciA9IG5ldyBQb3BwZXJKUyhnZXRBbmNob3JFbChhbmNob3JFbCksIHRvb2x0aXBSZWYuY3VycmVudCwgX2V4dGVuZHMoe1xuICAgICAgcGxhY2VtZW50OiBydGxQbGFjZW1lbnRcbiAgICB9LCBwb3BwZXJPcHRpb25zLCB7XG4gICAgICBtb2RpZmllcnM6IF9leHRlbmRzKHt9LCBkaXNhYmxlUG9ydGFsID8ge30gOiB7XG4gICAgICAgIC8vIEl0J3MgdXNpbmcgc2Nyb2xsUGFyZW50IGJ5IGRlZmF1bHQsIHdlIGNhbiB1c2UgdGhlIHZpZXdwb3J0IHdoZW4gdXNpbmcgYSBwb3J0YWwuXG4gICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiAnd2luZG93J1xuICAgICAgICB9XG4gICAgICB9LCB7fSwgbW9kaWZpZXJzLCB7fSwgcG9wcGVyT3B0aW9ucy5tb2RpZmllcnMpLFxuICAgICAgLy8gV2UgY291bGQgaGF2ZSBiZWVuIHVzaW5nIGEgY3VzdG9tIG1vZGlmaWVyIGxpa2UgcmVhY3QtcG9wcGVyIGlzIGRvaW5nLlxuICAgICAgLy8gQnV0IGl0IHNlZW1zIHRoaXMgaXMgdGhlIGJlc3QgcHVibGljIEFQSSBmb3IgdGhpcyB1c2UgY2FzZS5cbiAgICAgIG9uQ3JlYXRlOiBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oaGFuZGxlUG9wcGVyVXBkYXRlLCBwb3BwZXJPcHRpb25zLm9uQ3JlYXRlKSxcbiAgICAgIG9uVXBkYXRlOiBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oaGFuZGxlUG9wcGVyVXBkYXRlLCBwb3BwZXJPcHRpb25zLm9uVXBkYXRlKVxuICAgIH0pKTtcbiAgICBoYW5kbGVQb3BwZXJSZWZSZWYuY3VycmVudChwb3BwZXIpO1xuICB9LCBbYW5jaG9yRWwsIGRpc2FibGVQb3J0YWwsIG1vZGlmaWVycywgb3BlbiwgcnRsUGxhY2VtZW50LCBwb3BwZXJPcHRpb25zXSk7XG4gIHZhciBoYW5kbGVSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAobm9kZSkge1xuICAgIHNldFJlZihvd25SZWYsIG5vZGUpO1xuICAgIGhhbmRsZU9wZW4oKTtcbiAgfSwgW293blJlZiwgaGFuZGxlT3Blbl0pO1xuXG4gIHZhciBoYW5kbGVFbnRlciA9IGZ1bmN0aW9uIGhhbmRsZUVudGVyKCkge1xuICAgIHNldEV4aXRlZChmYWxzZSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUNsb3NlID0gZnVuY3Rpb24gaGFuZGxlQ2xvc2UoKSB7XG4gICAgaWYgKCFwb3BwZXJSZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBvcHBlclJlZi5jdXJyZW50LmRlc3Ryb3koKTtcbiAgICBoYW5kbGVQb3BwZXJSZWZSZWYuY3VycmVudChudWxsKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlRXhpdGVkID0gZnVuY3Rpb24gaGFuZGxlRXhpdGVkKCkge1xuICAgIHNldEV4aXRlZCh0cnVlKTtcbiAgICBoYW5kbGVDbG9zZSgpO1xuICB9O1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gTGV0J3MgdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb24uXG4gICAgaGFuZGxlT3BlbigpO1xuICB9LCBbaGFuZGxlT3Blbl0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBoYW5kbGVDbG9zZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIW9wZW4gJiYgIXRyYW5zaXRpb24pIHtcbiAgICAgIC8vIE90aGVyd2lzZSBoYW5kbGVFeGl0ZWQgd2lsbCBjYWxsIHRoaXMuXG4gICAgICBoYW5kbGVDbG9zZSgpO1xuICAgIH1cbiAgfSwgW29wZW4sIHRyYW5zaXRpb25dKTtcblxuICBpZiAoIWtlZXBNb3VudGVkICYmICFvcGVuICYmICghdHJhbnNpdGlvbiB8fCBleGl0ZWQpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgY2hpbGRQcm9wcyA9IHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9O1xuXG4gIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgY2hpbGRQcm9wcy5UcmFuc2l0aW9uUHJvcHMgPSB7XG4gICAgICBpbjogb3BlbixcbiAgICAgIG9uRW50ZXI6IGhhbmRsZUVudGVyLFxuICAgICAgb25FeGl0ZWQ6IGhhbmRsZUV4aXRlZFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChQb3J0YWwsIHtcbiAgICBkaXNhYmxlUG9ydGFsOiBkaXNhYmxlUG9ydGFsLFxuICAgIGNvbnRhaW5lcjogY29udGFpbmVyXG4gIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIHJlZjogaGFuZGxlUmVmLFxuICAgIHJvbGU6IFwidG9vbHRpcFwiXG4gIH0sIG90aGVyLCB7XG4gICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgIC8vIFByZXZlbnRzIHNjcm9sbCBpc3N1ZSwgd2FpdGluZyBmb3IgUG9wcGVyLmpzIHRvIGFkZCB0aGlzIHN0eWxlIG9uY2UgaW5pdGlhdGVkLlxuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAvLyBGaXggUG9wcGVyLmpzIGRpc3BsYXkgaXNzdWVcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDBcbiAgICB9LCBvdGhlci5zdHlsZSlcbiAgfSksIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJyA/IGNoaWxkcmVuKGNoaWxkUHJvcHMpIDogY2hpbGRyZW4pKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gUG9wcGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHJlZmVyZW5jZSBlbGVtZW50LCBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgcmVmZXJlbmNlIGVsZW1lbnQsXG4gICAqIHRoYXQgbWF5IGJlIHVzZWQgdG8gc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wb3Zlci5cbiAgICogVGhlIHJldHVybiB2YWx1ZSB3aWxsIHBhc3NlZCBhcyB0aGUgcmVmZXJlbmNlIG9iamVjdCBvZiB0aGUgUG9wcGVyXG4gICAqIGluc3RhbmNlLlxuICAgKlxuICAgKiBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgc2hvdWxkIGJlIGFuIEhUTUwgRWxlbWVudCBpbnN0YW5jZSBvciBhIHJlZmVyZW5jZU9iamVjdDpcbiAgICogaHR0cHM6Ly9wb3BwZXIuanMub3JnL3BvcHBlci1kb2N1bWVudGF0aW9uLmh0bWwjcmVmZXJlbmNlT2JqZWN0LlxuICAgKi9cbiAgYW5jaG9yRWw6IGNoYWluUHJvcFR5cGVzKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICB2YXIgcmVzb2x2ZWRBbmNob3JFbCA9IGdldEFuY2hvckVsKHByb3BzLmFuY2hvckVsKTtcbiAgICAgIHZhciBjb250YWluZXJXaW5kb3cgPSBvd25lcldpbmRvdyhyZXNvbHZlZEFuY2hvckVsKTtcblxuICAgICAgaWYgKHJlc29sdmVkQW5jaG9yRWwgaW5zdGFuY2VvZiBjb250YWluZXJXaW5kb3cuRWxlbWVudCkge1xuICAgICAgICB2YXIgYm94ID0gcmVzb2x2ZWRBbmNob3JFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiBib3gudG9wID09PSAwICYmIGJveC5sZWZ0ID09PSAwICYmIGJveC5yaWdodCA9PT0gMCAmJiBib3guYm90dG9tID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihbJ01hdGVyaWFsLVVJOiB0aGUgYGFuY2hvckVsYCBwcm9wIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQgaXMgaW52YWxpZC4nLCAnVGhlIGFuY2hvciBlbGVtZW50IHNob3VsZCBiZSBwYXJ0IG9mIHRoZSBkb2N1bWVudCBsYXlvdXQuJywgXCJNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgcHJlc2VudCBpbiB0aGUgZG9jdW1lbnQgb3IgdGhhdCBpdCdzIG5vdCBkaXNwbGF5IG5vbmUuXCJdLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghcmVzb2x2ZWRBbmNob3JFbCB8fCB0eXBlb2YgcmVzb2x2ZWRBbmNob3JFbC5jbGllbnRXaWR0aCAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHJlc29sdmVkQW5jaG9yRWwuY2xpZW50SGVpZ2h0ICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgcmVzb2x2ZWRBbmNob3JFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihbJ01hdGVyaWFsLVVJOiB0aGUgYGFuY2hvckVsYCBwcm9wIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQgaXMgaW52YWxpZC4nLCAnSXQgc2hvdWxkIGJlIGFuIEhUTUwgRWxlbWVudCBpbnN0YW5jZSBvciBhIHJlZmVyZW5jZU9iamVjdDonLCAnaHR0cHM6Ly9wb3BwZXIuanMub3JnL3BvcHBlci1kb2N1bWVudGF0aW9uLmh0bWwjcmVmZXJlbmNlT2JqZWN0LiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSksXG5cbiAgLyoqXG4gICAqIFBvcHBlciByZW5kZXIgZnVuY3Rpb24gb3Igbm9kZS5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBBIG5vZGUsIGNvbXBvbmVudCBpbnN0YW5jZSwgb3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVpdGhlci5cbiAgICogVGhlIGBjb250YWluZXJgIHdpbGwgcGFzc2VkIHRvIHRoZSBNb2RhbCBjb21wb25lbnQuXG4gICAqIEJ5IGRlZmF1bHQsIGl0IHVzZXMgdGhlIGJvZHkgb2YgdGhlIGFuY2hvckVsJ3MgdG9wLWxldmVsIGRvY3VtZW50IG9iamVjdCxcbiAgICogc28gaXQncyBzaW1wbHkgYGRvY3VtZW50LmJvZHlgIG1vc3Qgb2YgdGhlIHRpbWUuXG4gICAqL1xuICBjb250YWluZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIHBvcnRhbCBiZWhhdmlvci5cbiAgICogVGhlIGNoaWxkcmVuIHN0YXkgd2l0aGluIGl0J3MgcGFyZW50IERPTSBoaWVyYXJjaHkuXG4gICAqL1xuICBkaXNhYmxlUG9ydGFsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQWx3YXlzIGtlZXAgdGhlIGNoaWxkcmVuIGluIHRoZSBET00uXG4gICAqIFRoaXMgcHJvcCBjYW4gYmUgdXNlZnVsIGluIFNFTyBzaXR1YXRpb24gb3JcbiAgICogd2hlbiB5b3Ugd2FudCB0byBtYXhpbWl6ZSB0aGUgcmVzcG9uc2l2ZW5lc3Mgb2YgdGhlIFBvcHBlci5cbiAgICovXG4gIGtlZXBNb3VudGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUG9wcGVyLmpzIGlzIGJhc2VkIG9uIGEgXCJwbHVnaW4tbGlrZVwiIGFyY2hpdGVjdHVyZSxcbiAgICogbW9zdCBvZiBpdHMgZmVhdHVyZXMgYXJlIGZ1bGx5IGVuY2Fwc3VsYXRlZCBcIm1vZGlmaWVyc1wiLlxuICAgKlxuICAgKiBBIG1vZGlmaWVyIGlzIGEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgZWFjaCB0aW1lIFBvcHBlci5qcyBuZWVkcyB0b1xuICAgKiBjb21wdXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyLlxuICAgKiBGb3IgdGhpcyByZWFzb24sIG1vZGlmaWVycyBzaG91bGQgYmUgdmVyeSBwZXJmb3JtYW50IHRvIGF2b2lkIGJvdHRsZW5lY2tzLlxuICAgKiBUbyBsZWFybiBob3cgdG8gY3JlYXRlIGEgbW9kaWZpZXIsIFtyZWFkIHRoZSBtb2RpZmllcnMgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0ZlelZyYXN0YS9wb3BwZXIuanMvYmxvYi9tYXN0ZXIvZG9jcy9faW5jbHVkZXMvcG9wcGVyLWRvY3VtZW50YXRpb24ubWQjbW9kaWZpZXJzLS1vYmplY3QpLlxuICAgKi9cbiAgbW9kaWZpZXJzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBwb3BwZXIgaXMgdmlzaWJsZS5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFBvcHBlciBwbGFjZW1lbnQuXG4gICAqL1xuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2JvdHRvbS1lbmQnLCAnYm90dG9tLXN0YXJ0JywgJ2JvdHRvbScsICdsZWZ0LWVuZCcsICdsZWZ0LXN0YXJ0JywgJ2xlZnQnLCAncmlnaHQtZW5kJywgJ3JpZ2h0LXN0YXJ0JywgJ3JpZ2h0JywgJ3RvcC1lbmQnLCAndG9wLXN0YXJ0JywgJ3RvcCddKSxcblxuICAvKipcbiAgICogT3B0aW9ucyBwcm92aWRlZCB0byB0aGUgW2Bwb3BwZXIuanNgXShodHRwczovL2dpdGh1Yi5jb20vRmV6VnJhc3RhL3BvcHBlci5qcykgaW5zdGFuY2UuXG4gICAqL1xuICBwb3BwZXJPcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBBIHJlZiB0aGF0IHBvaW50cyB0byB0aGUgdXNlZCBwb3BwZXIgaW5zdGFuY2UuXG4gICAqL1xuICBwb3BwZXJSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIEhlbHAgc3VwcG9ydGluZyBhIHJlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbiBjb21wb25lbnQuXG4gICAqL1xuICB0cmFuc2l0aW9uOiBQcm9wVHlwZXMuYm9vbFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IFBvcHBlcjsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Qb3BwZXInOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBleGFjdFByb3AgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IHNldFJlZiBmcm9tICcuLi91dGlscy9zZXRSZWYnO1xuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vdXRpbHMvdXNlRm9ya1JlZic7XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5lcihjb250YWluZXIpIHtcbiAgY29udGFpbmVyID0gdHlwZW9mIGNvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJyA/IGNvbnRhaW5lcigpIDogY29udGFpbmVyOyAvLyAjU3RyaWN0TW9kZSByZWFkeVxuXG4gIHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZShjb250YWluZXIpO1xufVxuXG52YXIgdXNlRW5oYW5jZWRFZmZlY3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDtcbi8qKlxuICogUG9ydGFscyBwcm92aWRlIGEgZmlyc3QtY2xhc3Mgd2F5IHRvIHJlbmRlciBjaGlsZHJlbiBpbnRvIGEgRE9NIG5vZGVcbiAqIHRoYXQgZXhpc3RzIG91dHNpZGUgdGhlIERPTSBoaWVyYXJjaHkgb2YgdGhlIHBhcmVudCBjb21wb25lbnQuXG4gKi9cblxudmFyIFBvcnRhbCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gUG9ydGFsKHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjb250YWluZXIgPSBwcm9wcy5jb250YWluZXIsXG4gICAgICBfcHJvcHMkZGlzYWJsZVBvcnRhbCA9IHByb3BzLmRpc2FibGVQb3J0YWwsXG4gICAgICBkaXNhYmxlUG9ydGFsID0gX3Byb3BzJGRpc2FibGVQb3J0YWwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVQb3J0YWwsXG4gICAgICBvblJlbmRlcmVkID0gcHJvcHMub25SZW5kZXJlZDtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUobnVsbCksXG4gICAgICBtb3VudE5vZGUgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRNb3VudE5vZGUgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIGhhbmRsZVJlZiA9IHVzZUZvcmtSZWYoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pID8gY2hpbGRyZW4ucmVmIDogbnVsbCwgcmVmKTtcbiAgdXNlRW5oYW5jZWRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghZGlzYWJsZVBvcnRhbCkge1xuICAgICAgc2V0TW91bnROb2RlKGdldENvbnRhaW5lcihjb250YWluZXIpIHx8IGRvY3VtZW50LmJvZHkpO1xuICAgIH1cbiAgfSwgW2NvbnRhaW5lciwgZGlzYWJsZVBvcnRhbF0pO1xuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG1vdW50Tm9kZSAmJiAhZGlzYWJsZVBvcnRhbCkge1xuICAgICAgc2V0UmVmKHJlZiwgbW91bnROb2RlKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFJlZihyZWYsIG51bGwpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LCBbcmVmLCBtb3VudE5vZGUsIGRpc2FibGVQb3J0YWxdKTtcbiAgdXNlRW5oYW5jZWRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChvblJlbmRlcmVkICYmIChtb3VudE5vZGUgfHwgZGlzYWJsZVBvcnRhbCkpIHtcbiAgICAgIG9uUmVuZGVyZWQoKTtcbiAgICB9XG4gIH0sIFtvblJlbmRlcmVkLCBtb3VudE5vZGUsIGRpc2FibGVQb3J0YWxdKTtcblxuICBpZiAoZGlzYWJsZVBvcnRhbCkge1xuICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAgcmVmOiBoYW5kbGVSZWZcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHJldHVybiBtb3VudE5vZGUgPyBSZWFjdERPTS5jcmVhdGVQb3J0YWwoY2hpbGRyZW4sIG1vdW50Tm9kZSkgOiBtb3VudE5vZGU7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFBvcnRhbC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY2hpbGRyZW4gdG8gcmVuZGVyIGludG8gdGhlIGBjb250YWluZXJgLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBBIG5vZGUsIGNvbXBvbmVudCBpbnN0YW5jZSwgb3IgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVpdGhlci5cbiAgICogVGhlIGBjb250YWluZXJgIHdpbGwgaGF2ZSB0aGUgcG9ydGFsIGNoaWxkcmVuIGFwcGVuZGVkIHRvIGl0LlxuICAgKiBCeSBkZWZhdWx0LCBpdCB1c2VzIHRoZSBib2R5IG9mIHRoZSB0b3AtbGV2ZWwgZG9jdW1lbnQgb2JqZWN0LFxuICAgKiBzbyBpdCdzIHNpbXBseSBgZG9jdW1lbnQuYm9keWAgbW9zdCBvZiB0aGUgdGltZS5cbiAgICovXG4gIGNvbnRhaW5lcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5pbnN0YW5jZU9mKFJlYWN0LkNvbXBvbmVudCksIFByb3BUeXBlcy5pbnN0YW5jZU9mKHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJyA/IE9iamVjdCA6IEVsZW1lbnQpXSksXG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIHBvcnRhbCBiZWhhdmlvci5cbiAgICogVGhlIGNoaWxkcmVuIHN0YXkgd2l0aGluIGl0J3MgcGFyZW50IERPTSBoaWVyYXJjaHkuXG4gICAqL1xuICBkaXNhYmxlUG9ydGFsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgb25jZSB0aGUgY2hpbGRyZW4gaGFzIGJlZW4gbW91bnRlZCBpbnRvIHRoZSBgY29udGFpbmVyYC5cbiAgICpcbiAgICogVGhpcyBwcm9wIHdpbGwgYmUgZGVwcmVjYXRlZCBhbmQgcmVtb3ZlZCBpbiB2NSwgdGhlIHJlZiBjYW4gYmUgdXNlZCBpbnN0ZWFkLlxuICAgKi9cbiAgb25SZW5kZXJlZDogUHJvcFR5cGVzLmZ1bmNcbn0gOiB2b2lkIDA7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBQb3J0YWxbJ3Byb3BUeXBlcycgKyAnJ10gPSBleGFjdFByb3AoUG9ydGFsLnByb3BUeXBlcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRhbDsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Qb3J0YWwnOyIsIi8qKlxuICogU2FmZSBjaGFpbmVkIGZ1bmN0aW9uXG4gKlxuICogV2lsbCBvbmx5IGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBpZiBuZWVkZWQsXG4gKiBvdGhlcndpc2Ugd2lsbCBwYXNzIGJhY2sgZXhpc3RpbmcgZnVuY3Rpb25zIG9yIG51bGwuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY3Rpb25zIHRvIGNoYWluXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb258bnVsbH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGZ1bmMpIHtcbiAgICBpZiAoZnVuYyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignTWF0ZXJpYWwtVUk6IGludmFsaWQgQXJndW1lbnQgVHlwZSwgbXVzdCBvbmx5IHByb3ZpZGUgZnVuY3Rpb25zLCB1bmRlZmluZWQsIG9yIG51bGwuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNoYWluZWRGdW5jdGlvbigpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIGFjYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKCkge30pO1xufSIsImZ1bmN0aW9uIG93bmVyRG9jdW1lbnQobm9kZSkge1xuICByZXR1cm4gbm9kZSAmJiBub2RlLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG93bmVyRG9jdW1lbnQ7IiwiaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi9vd25lckRvY3VtZW50JztcblxuZnVuY3Rpb24gb3duZXJXaW5kb3cobm9kZSkge1xuICB2YXIgZG9jID0gb3duZXJEb2N1bWVudChub2RlKTtcbiAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG93bmVyV2luZG93OyIsImltcG9ydCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgc29tZSBET00gbm9kZSBpcyBvdXIgQ29tcG9uZW50J3Mgbm9kZS5cbiAqL1xuZnVuY3Rpb24gaXNOb2RlRm91bmQoY3VycmVudCwgY29tcG9uZW50Tm9kZSwgaWdub3JlQ2xhc3MpIHtcbiAgaWYgKGN1cnJlbnQgPT09IGNvbXBvbmVudE5vZGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBTVkcgPHVzZS8+IGVsZW1lbnRzIGRvIG5vdCB0ZWNobmljYWxseSByZXNpZGUgaW4gdGhlIHJlbmRlcmVkIERPTSwgc29cbiAgLy8gdGhleSBkbyBub3QgaGF2ZSBjbGFzc0xpc3QgZGlyZWN0bHksIGJ1dCB0aGV5IG9mZmVyIGEgbGluayB0byB0aGVpclxuICAvLyBjb3JyZXNwb25kaW5nIGVsZW1lbnQsIHdoaWNoIGNhbiBoYXZlIGNsYXNzTGlzdC4gVGhpcyBleHRyYSBjaGVjayBpcyBmb3JcbiAgLy8gdGhhdCBjYXNlLlxuICAvLyBTZWU6IGh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL3N0cnVjdC5odG1sI0ludGVyZmFjZVNWR1VzZUVsZW1lbnRcbiAgLy8gRGlzY3Vzc2lvbjogaHR0cHM6Ly9naXRodWIuY29tL1BvbWF4L3JlYWN0LW9uY2xpY2tvdXRzaWRlL3B1bGwvMTdcblxuXG4gIGlmIChjdXJyZW50LmNvcnJlc3BvbmRpbmdFbGVtZW50KSB7XG4gICAgcmV0dXJuIGN1cnJlbnQuY29ycmVzcG9uZGluZ0VsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGlnbm9yZUNsYXNzKTtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW50LmNsYXNzTGlzdC5jb250YWlucyhpZ25vcmVDbGFzcyk7XG59XG4vKipcbiAqIFRyeSB0byBmaW5kIG91ciBub2RlIGluIGEgaGllcmFyY2h5IG9mIG5vZGVzLCByZXR1cm5pbmcgdGhlIGRvY3VtZW50XG4gKiBub2RlIGFzIGhpZ2hlc3Qgbm9kZSBpZiBvdXIgbm9kZSBpcyBub3QgZm91bmQgaW4gdGhlIHBhdGggdXAuXG4gKi9cblxuZnVuY3Rpb24gZmluZEhpZ2hlc3QoY3VycmVudCwgY29tcG9uZW50Tm9kZSwgaWdub3JlQ2xhc3MpIHtcbiAgaWYgKGN1cnJlbnQgPT09IGNvbXBvbmVudE5vZGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBJZiBzb3VyY2U9bG9jYWwgdGhlbiB0aGlzIGV2ZW50IGNhbWUgZnJvbSAnc29tZXdoZXJlJ1xuICAvLyBpbnNpZGUgYW5kIHNob3VsZCBiZSBpZ25vcmVkLiBXZSBjb3VsZCBoYW5kbGUgdGhpcyB3aXRoXG4gIC8vIGEgbGF5ZXJlZCBhcHByb2FjaCwgdG9vLCBidXQgdGhhdCByZXF1aXJlcyBnb2luZyBiYWNrIHRvXG4gIC8vIHRoaW5raW5nIGluIHRlcm1zIG9mIERvbSBub2RlIG5lc3RpbmcsIHJ1bm5pbmcgY291bnRlclxuICAvLyB0byBSZWFjdCdzICd5b3Ugc2hvdWxkbid0IGNhcmUgYWJvdXQgdGhlIERPTScgcGhpbG9zb3BoeS5cblxuXG4gIHdoaWxlIChjdXJyZW50LnBhcmVudE5vZGUpIHtcbiAgICBpZiAoaXNOb2RlRm91bmQoY3VycmVudCwgY29tcG9uZW50Tm9kZSwgaWdub3JlQ2xhc3MpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnQ7XG59XG4vKipcbiAqIENoZWNrIGlmIHRoZSBicm93c2VyIHNjcm9sbGJhciB3YXMgY2xpY2tlZFxuICovXG5cbmZ1bmN0aW9uIGNsaWNrZWRTY3JvbGxiYXIoZXZ0KSB7XG4gIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPD0gZXZ0LmNsaWVudFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA8PSBldnQuY2xpZW50WTtcbn1cblxuLy8gaWRlYWxseSB3aWxsIGdldCByZXBsYWNlZCB3aXRoIGV4dGVybmFsIGRlcFxuLy8gd2hlbiByYWZyZXgvZGV0ZWN0LXBhc3NpdmUtZXZlbnRzIzQgYW5kIHJhZnJleC9kZXRlY3QtcGFzc2l2ZS1ldmVudHMjNSBnZXQgbWVyZ2VkIGluXG52YXIgdGVzdFBhc3NpdmVFdmVudFN1cHBvcnQgPSBmdW5jdGlvbiB0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYXNzaXZlID0gZmFsc2U7XG4gIHZhciBvcHRpb25zID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHBhc3NpdmUgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3RQYXNzaXZlRXZlbnRTdXBwb3J0Jywgbm9vcCwgb3B0aW9ucyk7XG4gIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0UGFzc2l2ZUV2ZW50U3VwcG9ydCcsIG5vb3AsIG9wdGlvbnMpO1xuICByZXR1cm4gcGFzc2l2ZTtcbn07XG5cbmZ1bmN0aW9uIGF1dG9JbmMoc2VlZCkge1xuICBpZiAoc2VlZCA9PT0gdm9pZCAwKSB7XG4gICAgc2VlZCA9IDA7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiArK3NlZWQ7XG4gIH07XG59XG5cbnZhciB1aWQgPSBhdXRvSW5jKCk7XG5cbnZhciBwYXNzaXZlRXZlbnRTdXBwb3J0O1xudmFyIGhhbmRsZXJzTWFwID0ge307XG52YXIgZW5hYmxlZEluc3RhbmNlcyA9IHt9O1xudmFyIHRvdWNoRXZlbnRzID0gWyd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZSddO1xudmFyIElHTk9SRV9DTEFTU19OQU1FID0gJ2lnbm9yZS1yZWFjdC1vbmNsaWNrb3V0c2lkZSc7XG4vKipcbiAqIE9wdGlvbnMgZm9yIGFkZEV2ZW50SGFuZGxlciBhbmQgcmVtb3ZlRXZlbnRIYW5kbGVyXG4gKi9cblxuZnVuY3Rpb24gZ2V0RXZlbnRIYW5kbGVyT3B0aW9ucyhpbnN0YW5jZSwgZXZlbnROYW1lKSB7XG4gIHZhciBoYW5kbGVyT3B0aW9ucyA9IG51bGw7XG4gIHZhciBpc1RvdWNoRXZlbnQgPSB0b3VjaEV2ZW50cy5pbmRleE9mKGV2ZW50TmFtZSkgIT09IC0xO1xuXG4gIGlmIChpc1RvdWNoRXZlbnQgJiYgcGFzc2l2ZUV2ZW50U3VwcG9ydCkge1xuICAgIGhhbmRsZXJPcHRpb25zID0ge1xuICAgICAgcGFzc2l2ZTogIWluc3RhbmNlLnByb3BzLnByZXZlbnREZWZhdWx0XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBoYW5kbGVyT3B0aW9ucztcbn1cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgdGhlIEhPQyBmdW5jdGlvbiB0aGF0IHlvdSdsbCB1c2VcbiAqIGluIG9yZGVyIHRvIGltcGFydCBvbk91dHNpZGVDbGljayBsaXN0ZW5pbmcgdG8gYW5cbiAqIGFyYml0cmFyeSBjb21wb25lbnQuIEl0IGdldHMgY2FsbGVkIGF0IHRoZSBlbmQgb2YgdGhlXG4gKiBib290c3RyYXBwaW5nIGNvZGUgdG8geWllbGQgYW4gaW5zdGFuY2Ugb2YgdGhlXG4gKiBvbkNsaWNrT3V0c2lkZUhPQyBmdW5jdGlvbiBkZWZpbmVkIGluc2lkZSBzZXR1cEhPQygpLlxuICovXG5cblxuZnVuY3Rpb24gb25DbGlja091dHNpZGVIT0MoV3JhcHBlZENvbXBvbmVudCwgY29uZmlnKSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHJldHVybiBfdGVtcCA9IF9jbGFzcyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHNMb29zZShvbkNsaWNrT3V0c2lkZSwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrT3V0c2lkZShwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcblxuICAgICAgX3RoaXMuX19vdXRzaWRlQ2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgX3RoaXMuX19jbGlja091dHNpZGVIYW5kbGVyUHJvcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIF90aGlzLl9fY2xpY2tPdXRzaWRlSGFuZGxlclByb3AoZXZlbnQpO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGluc3RhbmNlID0gX3RoaXMuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlLnByb3BzLmhhbmRsZUNsaWNrT3V0c2lkZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGluc3RhbmNlLnByb3BzLmhhbmRsZUNsaWNrT3V0c2lkZShldmVudCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZS5oYW5kbGVDbGlja091dHNpZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpbnN0YW5jZS5oYW5kbGVDbGlja091dHNpZGUoZXZlbnQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignV3JhcHBlZENvbXBvbmVudCBsYWNrcyBhIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkgZnVuY3Rpb24gZm9yIHByb2Nlc3Npbmcgb3V0c2lkZSBjbGljayBldmVudHMuJyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5lbmFibGVPbkNsaWNrT3V0c2lkZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgZW5hYmxlZEluc3RhbmNlc1tfdGhpcy5fdWlkXSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgcGFzc2l2ZUV2ZW50U3VwcG9ydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBwYXNzaXZlRXZlbnRTdXBwb3J0ID0gdGVzdFBhc3NpdmVFdmVudFN1cHBvcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVuYWJsZWRJbnN0YW5jZXNbX3RoaXMuX3VpZF0gPSB0cnVlO1xuICAgICAgICB2YXIgZXZlbnRzID0gX3RoaXMucHJvcHMuZXZlbnRUeXBlcztcblxuICAgICAgICBpZiAoIWV2ZW50cy5mb3JFYWNoKSB7XG4gICAgICAgICAgZXZlbnRzID0gW2V2ZW50c107XG4gICAgICAgIH1cblxuICAgICAgICBoYW5kbGVyc01hcFtfdGhpcy5fdWlkXSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5kaXNhYmxlT25DbGlja091dHNpZGUpIHJldHVybjtcbiAgICAgICAgICBpZiAoX3RoaXMuY29tcG9uZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgICAgaWYgKF90aGlzLnByb3BzLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5leGNsdWRlU2Nyb2xsYmFyICYmIGNsaWNrZWRTY3JvbGxiYXIoZXZlbnQpKSByZXR1cm47XG4gICAgICAgICAgdmFyIGN1cnJlbnQgPSBldmVudC50YXJnZXQ7XG5cbiAgICAgICAgICBpZiAoZmluZEhpZ2hlc3QoY3VycmVudCwgX3RoaXMuY29tcG9uZW50Tm9kZSwgX3RoaXMucHJvcHMub3V0c2lkZUNsaWNrSWdub3JlQ2xhc3MpICE9PSBkb2N1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLl9fb3V0c2lkZUNsaWNrSGFuZGxlcihldmVudCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyc01hcFtfdGhpcy5fdWlkXSwgZ2V0RXZlbnRIYW5kbGVyT3B0aW9ucyhfdGhpcywgZXZlbnROYW1lKSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuZGlzYWJsZU9uQ2xpY2tPdXRzaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWxldGUgZW5hYmxlZEluc3RhbmNlc1tfdGhpcy5fdWlkXTtcbiAgICAgICAgdmFyIGZuID0gaGFuZGxlcnNNYXBbX3RoaXMuX3VpZF07XG5cbiAgICAgICAgaWYgKGZuICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB2YXIgZXZlbnRzID0gX3RoaXMucHJvcHMuZXZlbnRUeXBlcztcblxuICAgICAgICAgIGlmICghZXZlbnRzLmZvckVhY2gpIHtcbiAgICAgICAgICAgIGV2ZW50cyA9IFtldmVudHNdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4sIGdldEV2ZW50SGFuZGxlck9wdGlvbnMoX3RoaXMsIGV2ZW50TmFtZSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRlbGV0ZSBoYW5kbGVyc01hcFtfdGhpcy5fdWlkXTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuZ2V0UmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgICByZXR1cm4gX3RoaXMuaW5zdGFuY2VSZWYgPSByZWY7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fdWlkID0gdWlkKCk7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFjY2VzcyB0aGUgV3JhcHBlZENvbXBvbmVudCdzIGluc3RhbmNlLlxuICAgICAqL1xuXG5cbiAgICB2YXIgX3Byb3RvID0gb25DbGlja091dHNpZGUucHJvdG90eXBlO1xuXG4gICAgX3Byb3RvLmdldEluc3RhbmNlID0gZnVuY3Rpb24gZ2V0SW5zdGFuY2UoKSB7XG4gICAgICBpZiAoIVdyYXBwZWRDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWYgPSB0aGlzLmluc3RhbmNlUmVmO1xuICAgICAgcmV0dXJuIHJlZi5nZXRJbnN0YW5jZSA/IHJlZi5nZXRJbnN0YW5jZSgpIDogcmVmO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgY2xpY2sgbGlzdGVuZXJzIHRvIHRoZSBjdXJyZW50IGRvY3VtZW50LFxuICAgICAqIGxpbmtlZCB0byB0aGlzIGNvbXBvbmVudCdzIHN0YXRlLlxuICAgICAqL1xuICAgIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgLy8gSWYgd2UgYXJlIGluIGFuIGVudmlyb25tZW50IHdpdGhvdXQgYSBET00gc3VjaFxuICAgICAgLy8gYXMgc2hhbGxvdyByZW5kZXJpbmcgb3Igc25hcHNob3RzIHRoZW4gd2UgZXhpdFxuICAgICAgLy8gZWFybHkgdG8gcHJldmVudCBhbnkgdW5oYW5kbGVkIGVycm9ycyBiZWluZyB0aHJvd24uXG4gICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCAhZG9jdW1lbnQuY3JlYXRlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgaWYgKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnLmhhbmRsZUNsaWNrT3V0c2lkZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLl9fY2xpY2tPdXRzaWRlSGFuZGxlclByb3AgPSBjb25maWcuaGFuZGxlQ2xpY2tPdXRzaWRlKGluc3RhbmNlKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX19jbGlja091dHNpZGVIYW5kbGVyUHJvcCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignV3JhcHBlZENvbXBvbmVudCBsYWNrcyBhIGZ1bmN0aW9uIGZvciBwcm9jZXNzaW5nIG91dHNpZGUgY2xpY2sgZXZlbnRzIHNwZWNpZmllZCBieSB0aGUgaGFuZGxlQ2xpY2tPdXRzaWRlIGNvbmZpZyBvcHRpb24uJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jb21wb25lbnROb2RlID0gZmluZERPTU5vZGUodGhpcy5nZXRJbnN0YW5jZSgpKTtcbiAgICAgIHRoaXMuZW5hYmxlT25DbGlja091dHNpZGUoKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50Tm9kZSA9IGZpbmRET01Ob2RlKHRoaXMuZ2V0SW5zdGFuY2UoKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIGRvY3VtZW50J3MgZXZlbnQgbGlzdGVuZXJzIGZvciB0aGlzIGNvbXBvbmVudFxuICAgICAqL1xuXG5cbiAgICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuZGlzYWJsZU9uQ2xpY2tPdXRzaWRlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYW4gYmUgY2FsbGVkIHRvIGV4cGxpY2l0bHkgZW5hYmxlIGV2ZW50IGxpc3RlbmluZ1xuICAgICAqIGZvciBjbGlja3MgYW5kIHRvdWNoZXMgb3V0c2lkZSBvZiB0aGlzIGVsZW1lbnQuXG4gICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIFBhc3MtdGhyb3VnaCByZW5kZXJcbiAgICAgKi9cbiAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBleGNsdWRlU2Nyb2xsYmFyID0gX3Byb3BzLmV4Y2x1ZGVTY3JvbGxiYXIsXG4gICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbXCJleGNsdWRlU2Nyb2xsYmFyXCJdKTtcblxuICAgICAgaWYgKFdyYXBwZWRDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpIHtcbiAgICAgICAgcHJvcHMucmVmID0gdGhpcy5nZXRSZWY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wcy53cmFwcGVkUmVmID0gdGhpcy5nZXRSZWY7XG4gICAgICB9XG5cbiAgICAgIHByb3BzLmRpc2FibGVPbkNsaWNrT3V0c2lkZSA9IHRoaXMuZGlzYWJsZU9uQ2xpY2tPdXRzaWRlO1xuICAgICAgcHJvcHMuZW5hYmxlT25DbGlja091dHNpZGUgPSB0aGlzLmVuYWJsZU9uQ2xpY2tPdXRzaWRlO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgcHJvcHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gb25DbGlja091dHNpZGU7XG4gIH0oQ29tcG9uZW50KSwgX2NsYXNzLmRpc3BsYXlOYW1lID0gXCJPbkNsaWNrT3V0c2lkZShcIiArIChXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JykgKyBcIilcIiwgX2NsYXNzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBldmVudFR5cGVzOiBbJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0J10sXG4gICAgZXhjbHVkZVNjcm9sbGJhcjogY29uZmlnICYmIGNvbmZpZy5leGNsdWRlU2Nyb2xsYmFyIHx8IGZhbHNlLFxuICAgIG91dHNpZGVDbGlja0lnbm9yZUNsYXNzOiBJR05PUkVfQ0xBU1NfTkFNRSxcbiAgICBwcmV2ZW50RGVmYXVsdDogZmFsc2UsXG4gICAgc3RvcFByb3BhZ2F0aW9uOiBmYWxzZVxuICB9LCBfY2xhc3MuZ2V0Q2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFdyYXBwZWRDb21wb25lbnQuZ2V0Q2xhc3MgPyBXcmFwcGVkQ29tcG9uZW50LmdldENsYXNzKCkgOiBXcmFwcGVkQ29tcG9uZW50O1xuICB9LCBfdGVtcDtcbn1cblxuZXhwb3J0IHsgSUdOT1JFX0NMQVNTX05BTUUgfTtcbmV4cG9ydCBkZWZhdWx0IG9uQ2xpY2tPdXRzaWRlSE9DO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgb25DbGlja091dHNpZGUsIHsgSW5qZWN0ZWRPbkNsaWNrT3V0UHJvcHMgfSBmcm9tICdyZWFjdC1vbmNsaWNrb3V0c2lkZSc7XHJcbmltcG9ydCB7IFRhZyB9IGZyb20gJy4uJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4nO1xyXG5pbXBvcnQgUG9wcGVyLCB7IFBvcHBlclByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyJztcclxuXHJcbmV4cG9ydCB0eXBlIFN1Z2dlc3Rpb25zUHJvcHMgPSB7XHJcbiAgYW5jaG9yRWw6IEhUTUxFbGVtZW50O1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIHByZXNlbGVjdGVkU3VnZ2VzdGlvbj86IG51bWJlcjtcclxuICBpc1Zpc2libGU6IGJvb2xlYW47XHJcbiAgdGFnczogVGFnW107XHJcbiAgb25TZWxlY3RlZDogKHRhZzogVGFnKSA9PiB2b2lkO1xyXG4gIG9uQ2xpY2tPdXRzaWRlOiAoKSA9PiB2b2lkO1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgbG9hZGluZzogYm9vbGVhbjtcclxuICBMb2FkaW5nQ29tcG9uZW50Pzogc3RyaW5nIHwgSlNYLkVsZW1lbnQ7XHJcbiAgRW1wdHlDb21wb25lbnQ/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcclxuICBBZGROZXdUYWdDb21wb25lbnQ/OiBKU1guRWxlbWVudDtcclxuICBhbGxvd05ldzogYm9vbGVhbjtcclxuICBwb3BwZXJQcm9wcz86IFBhcnRpYWw8UG9wcGVyUHJvcHM+O1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFN1Z2dlc3Rpb25zU3RhdGUge1xyXG4gIGtleTogbnVtYmVyO1xyXG59XHJcblxyXG50eXBlIEluamVjdGVkUHJvcHMgPSBJbmplY3RlZE9uQ2xpY2tPdXRQcm9wcztcclxuY2xhc3MgU3VnZ2VzdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XHJcbiAgU3VnZ2VzdGlvbnNQcm9wcyAmIEluamVjdGVkUHJvcHMsXHJcbiAgU3VnZ2VzdGlvbnNTdGF0ZVxyXG4+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogU3VnZ2VzdGlvbnNQcm9wcyAmIEluamVjdGVkUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IGtleTogMCB9O1xyXG4gICAgdGhpcy5vblNlbGVjdGVkID0gdGhpcy5vblNlbGVjdGVkLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UG9wcGVyXHJcbiAgICAgICAga2V5PXt0aGlzLnN0YXRlLmtleX1cclxuICAgICAgICBvcGVuPXt0aGlzLnByb3BzLmlzVmlzaWJsZX1cclxuICAgICAgICBhbmNob3JFbD17dGhpcy5wcm9wcy5hbmNob3JFbH1cclxuICAgICAgICBzdHlsZT17eyB3aWR0aDogdGhpcy5wcm9wcy5hbmNob3JFbD8uc2Nyb2xsV2lkdGgsIHpJbmRleDogMTAwMDAgfX1cclxuICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b20tc3RhcnRcIlxyXG4gICAgICAgIHsuLi50aGlzLnByb3BzLnBvcHBlclByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgey4uLih0aGlzLnByb3BzLmlkICYmIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRhZ3MtaW5wdXRfX3N1Z2dlc3Rpb25zXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHt0aGlzLnByb3BzLkFkZE5ld1RhZ0NvbXBvbmVudH1cclxuICAgICAgICAgICAge3RoaXMucHJvcHMubG9hZGluZyAmJiB0aGlzLnByb3BzLkxvYWRpbmdDb21wb25lbnQgJiYgKFxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3LTEwMCB0ZXh0LWNlbnRlciBwLTJcIj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLkxvYWRpbmdDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgeyF0aGlzLnByb3BzLmxvYWRpbmcgJiZcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB7Li4uKHRoaXMucHJvcHMuaWQgJiYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQgKyAnLXN1Z2dlc3Rpb24tJyArIGluZGV4LnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICd3LTEwMCB0YWdzLWlucHV0X19zdWdnZXN0aW9uICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgKHRoaXMucHJvcHMucHJlc2VsZWN0ZWRTdWdnZXN0aW9uICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMucHJlc2VsZWN0ZWRTdWdnZXN0aW9uID09PSBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICd0YWdzLWlucHV0X19zdWdnZXN0aW9uLS1wcmVzZWxlY3RlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNlbGVjdGVkKHRhZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd249e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGFnLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgeyF0aGlzLnByb3BzLmxvYWRpbmcgJiZcclxuICAgICAgICAgICAgICB0aGlzLnByb3BzLkVtcHR5Q29tcG9uZW50ICYmXHJcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy50YWdzLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgICAgICAgICF0aGlzLnByb3BzLmFsbG93TmV3ICYmIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3LTEwMCB0ZXh0LWNlbnRlciBwLTJcIj5cclxuICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuRW1wdHlDb21wb25lbnR9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1BvcHBlcj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlQ2xpY2tPdXRzaWRlKCkge1xyXG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrT3V0c2lkZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblNlbGVjdGVkID0gKHRhZzogVGFnKSA9PiAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsga2V5OiB0aGlzLnN0YXRlLmtleSArIDEgfSk7XHJcbiAgICB0aGlzLnByb3BzLm9uU2VsZWN0ZWQodGFnKTtcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBTdWdnZXN0aW9uc1dyYXBwZWQgPSBvbkNsaWNrT3V0c2lkZShTdWdnZXN0aW9ucyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWdnZXN0aW9uc1dyYXBwZWQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=