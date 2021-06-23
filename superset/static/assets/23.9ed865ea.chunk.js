(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/array/from */ "./node_modules/core-js-pure/stable/array/from.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/starts-with.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/starts-with.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/starts-with */ "./node_modules/core-js-pure/stable/instance/starts-with.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/string/raw.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/string/raw.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/string/raw */ "./node_modules/core-js-pure/stable/string/raw.js");

/***/ }),

/***/ "./node_modules/antd/es/radio/context.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/es/radio/context.js ***!
  \***********************************************/
/*! exports provided: RadioGroupContextProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroupContextProvider", function() { return RadioGroupContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var RadioGroupContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
var RadioGroupContextProvider = RadioGroupContext.Provider;
/* harmony default export */ __webpack_exports__["default"] = (RadioGroupContext);

/***/ }),

/***/ "./node_modules/antd/es/radio/group.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/es/radio/group.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/hooks/useMergedState */ "./node_modules/antd/node_modules/rc-util/es/hooks/useMergedState.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radio */ "./node_modules/antd/es/radio/radio.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _config_provider_SizeContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/es/config-provider/SizeContext.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context */ "./node_modules/antd/es/radio/context.js");









var RadioGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function (props, ref) {
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_config_provider__WEBPACK_IMPORTED_MODULE_6__["ConfigContext"]),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var size = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_config_provider_SizeContext__WEBPACK_IMPORTED_MODULE_7__["default"]);

  var _useMergedState = Object(rc_util_es_hooks_useMergedState__WEBPACK_IMPORTED_MODULE_4__["default"])(props.defaultValue, {
    value: props.value
  }),
      _useMergedState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useMergedState, 2),
      value = _useMergedState2[0],
      setValue = _useMergedState2[1];

  var onRadioChange = function onRadioChange(ev) {
    var lastValue = value;
    var val = ev.target.value;

    if (!('value' in props)) {
      setValue(val);
    }

    var onChange = props.onChange;

    if (onChange && val !== lastValue) {
      onChange(ev);
    }
  };

  var renderGroup = function renderGroup() {
    var _classNames;

    var customizePrefixCls = props.prefixCls,
        _props$className = props.className,
        className = _props$className === void 0 ? '' : _props$className,
        options = props.options,
        optionType = props.optionType,
        _props$buttonStyle = props.buttonStyle,
        buttonStyle = _props$buttonStyle === void 0 ? 'outline' : _props$buttonStyle,
        disabled = props.disabled,
        children = props.children,
        customizeSize = props.size,
        style = props.style,
        id = props.id,
        onMouseEnter = props.onMouseEnter,
        onMouseLeave = props.onMouseLeave;
    var prefixCls = getPrefixCls('radio', customizePrefixCls);
    var groupPrefixCls = "".concat(prefixCls, "-group");
    var childrenToRender = children; // 如果存在 options, 优先使用

    if (options && options.length > 0) {
      var optionsPrefixCls = optionType === 'button' ? "".concat(prefixCls, "-button") : prefixCls;
      childrenToRender = options.map(function (option) {
        if (typeof option === 'string') {
          // 此处类型自动推导为 string
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_5__["default"], {
            key: option,
            prefixCls: optionsPrefixCls,
            disabled: disabled,
            value: option,
            checked: value === option
          }, option);
        } // 此处类型自动推导为 { label: string value: string }


        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: "radio-group-value-options-".concat(option.value),
          prefixCls: optionsPrefixCls,
          disabled: option.disabled || disabled,
          value: option.value,
          checked: value === option.value,
          style: option.style
        }, option.label);
      });
    }

    var mergedSize = customizeSize || size;
    var classString = classnames__WEBPACK_IMPORTED_MODULE_3___default()(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), (_classNames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, "".concat(groupPrefixCls, "-").concat(mergedSize), mergedSize), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: classString,
      style: style,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      id: id,
      ref: ref
    }, childrenToRender);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_context__WEBPACK_IMPORTED_MODULE_8__["RadioGroupContextProvider"], {
    value: {
      onChange: onRadioChange,
      value: value,
      disabled: props.disabled,
      name: props.name
    }
  }, renderGroup());
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["memo"](RadioGroup));

/***/ }),

/***/ "./node_modules/antd/es/radio/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/es/radio/index.js ***!
  \*********************************************/
/*! exports provided: Button, Group, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio */ "./node_modules/antd/es/radio/radio.js");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group */ "./node_modules/antd/es/radio/group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _group__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _radioButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radioButton */ "./node_modules/antd/es/radio/radioButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _radioButton__WEBPACK_IMPORTED_MODULE_2__["default"]; });




var Radio = _radio__WEBPACK_IMPORTED_MODULE_0__["default"];
Radio.Button = _radioButton__WEBPACK_IMPORTED_MODULE_2__["default"];
Radio.Group = _group__WEBPACK_IMPORTED_MODULE_1__["default"];

/* harmony default export */ __webpack_exports__["default"] = (Radio);

/***/ }),

/***/ "./node_modules/antd/es/radio/radio.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/es/radio/radio.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-checkbox */ "./node_modules/rc-checkbox/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-util/es/ref */ "./node_modules/antd/node_modules/rc-util/es/ref.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context */ "./node_modules/antd/es/radio/context.js");
/* harmony import */ var _util_devWarning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/es/_util/devWarning.js");



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};









var InternalRadio = function InternalRadio(props, ref) {
  var _classNames;

  var context = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_context__WEBPACK_IMPORTED_MODULE_7__["default"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_config_provider__WEBPACK_IMPORTED_MODULE_6__["ConfigContext"]),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var innerRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"]();
  var mergedRef = Object(rc_util_es_ref__WEBPACK_IMPORTED_MODULE_5__["composeRef"])(ref, innerRef);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    Object(_util_devWarning__WEBPACK_IMPORTED_MODULE_8__["default"])(!('optionType' in props), 'Radio', '`optionType` is only support in Radio.Group.');
  }, []);

  var onChange = function onChange(e) {
    if (props.onChange) {
      props.onChange(e);
    }

    if (context === null || context === void 0 ? void 0 : context.onChange) {
      context.onChange(e);
    }
  };

  var customizePrefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      style = props.style,
      restProps = __rest(props, ["prefixCls", "className", "children", "style"]);

  var prefixCls = getPrefixCls('radio', customizePrefixCls);

  var radioProps = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, restProps);

  if (context) {
    radioProps.name = context.name;
    radioProps.onChange = onChange;
    radioProps.checked = props.value === context.value;
    radioProps.disabled = props.disabled || context.disabled;
  }

  var wrapperClassString = classnames__WEBPACK_IMPORTED_MODULE_4___default()("".concat(prefixCls, "-wrapper"), (_classNames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, "".concat(prefixCls, "-wrapper-checked"), radioProps.checked), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, "".concat(prefixCls, "-wrapper-disabled"), radioProps.disabled), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, "".concat(prefixCls, "-wrapper-rtl"), direction === 'rtl'), _classNames), className);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("label", {
      className: wrapperClassString,
      style: style,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](rc_checkbox__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, radioProps, {
      prefixCls: prefixCls,
      ref: mergedRef
    })), children !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", null, children) : null)
  );
};

var Radio = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](InternalRadio);
Radio.displayName = 'Radio';
Radio.defaultProps = {
  type: 'radio'
};
/* harmony default export */ __webpack_exports__["default"] = (Radio);

/***/ }),

/***/ "./node_modules/antd/es/radio/radioButton.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/es/radio/radioButton.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio */ "./node_modules/antd/es/radio/radio.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/es/config-provider/context.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./node_modules/antd/es/radio/context.js");


var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var RadioButton = function RadioButton(props, ref) {
  var radioGroupContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_context__WEBPACK_IMPORTED_MODULE_4__["default"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_config_provider__WEBPACK_IMPORTED_MODULE_3__["ConfigContext"]),
      getPrefixCls = _React$useContext.getPrefixCls;

  var customizePrefixCls = props.prefixCls,
      radioProps = __rest(props, ["prefixCls"]);

  var prefixCls = getPrefixCls('radio-button', customizePrefixCls);

  if (radioGroupContext) {
    radioProps.checked = props.value === radioGroupContext.value;
    radioProps.disabled = props.disabled || radioGroupContext.disabled;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_2__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    prefixCls: prefixCls
  }, radioProps, {
    type: "radio",
    ref: ref
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](RadioButton));

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/from.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/from.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js-pure/modules/es.string.iterator.js");
__webpack_require__(/*! ../../modules/es.array.from */ "./node_modules/core-js-pure/modules/es.array.from.js");
var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js-pure/internals/path.js");

module.exports = path.Array.from;


/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/starts-with.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/starts-with.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var startsWith = __webpack_require__(/*! ../string/virtual/starts-with */ "./node_modules/core-js-pure/es/string/virtual/starts-with.js");

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.startsWith;
  return typeof it === 'string' || it === StringPrototype
    || (it instanceof String && own === StringPrototype.startsWith) ? startsWith : own;
};


/***/ }),

/***/ "./node_modules/core-js-pure/es/string/raw.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js-pure/es/string/raw.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es.string.raw */ "./node_modules/core-js-pure/modules/es.string.raw.js");
var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js-pure/internals/path.js");

module.exports = path.String.raw;


/***/ }),

/***/ "./node_modules/core-js-pure/es/string/virtual/starts-with.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/es/string/virtual/starts-with.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.string.starts-with */ "./node_modules/core-js-pure/modules/es.string.starts-with.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "./node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('String').startsWith;


/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-from.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-from.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js-pure/internals/function-bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js-pure/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js-pure/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js-pure/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js-pure/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js-pure/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.from.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.from.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js-pure/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js-pure/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.raw.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.raw.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js-pure/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js-pure/internals/to-length.js");

// `String.raw` method
// https://tc39.github.io/ecma262/#sec-string.raw
$({ target: 'String', stat: true }, {
  raw: function raw(template) {
    var rawTemplate = toIndexedObject(template.raw);
    var literalSegments = toLength(rawTemplate.length);
    var argumentsLength = arguments.length;
    var elements = [];
    var i = 0;
    while (literalSegments > i) {
      elements.push(String(rawTemplate[i++]));
      if (i < argumentsLength) elements.push(String(arguments[i]));
    } return elements.join('');
  }
});


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.string.starts-with.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.string.starts-with.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js-pure/internals/object-get-own-property-descriptor.js").f;
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js-pure/internals/to-length.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js-pure/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js-pure/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js-pure/internals/correct-is-regexp-logic.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js-pure/internals/is-pure.js");

var nativeStartsWith = ''.startsWith;
var min = Math.min;

var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic('startsWith');
// https://github.com/zloirock/core-js/pull/702
var MDN_POLYFILL_BUG = !IS_PURE && !CORRECT_IS_REGEXP_LOGIC && !!function () {
  var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
  return descriptor && !descriptor.writable;
}();

// `String.prototype.startsWith` method
// https://tc39.github.io/ecma262/#sec-string.prototype.startswith
$({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = String(requireObjectCoercible(this));
    notARegExp(searchString);
    var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return nativeStartsWith
      ? nativeStartsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "./node_modules/core-js-pure/stable/array/from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/array/from */ "./node_modules/core-js-pure/es/array/from.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/starts-with.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/starts-with.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/starts-with */ "./node_modules/core-js-pure/es/instance/starts-with.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js-pure/stable/string/raw.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/string/raw.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/string/raw */ "./node_modules/core-js-pure/es/string/raw.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "./node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/lodash/isInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/isInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/**
 * Checks if `value` is an integer.
 *
 * **Note:** This method is based on
 * [`Number.isInteger`](https://mdn.io/Number/isInteger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * _.isInteger(3);
 * // => true
 *
 * _.isInteger(Number.MIN_VALUE);
 * // => false
 *
 * _.isInteger(Infinity);
 * // => false
 *
 * _.isInteger('3');
 * // => false
 */
function isInteger(value) {
  return typeof value == 'number' && value == toInteger(value);
}

module.exports = isInteger;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/urijs/src/IPv6.js":
/*!****************************************!*\
  !*** ./node_modules/urijs/src/IPv6.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * URI.js - Mutating URLs
 * IPv6 Support
 *
 * Version: 1.19.6
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */

(function (root, factory) {
  'use strict';
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if ( true && module.exports) {
    // Node
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function (root) {
  'use strict';

  /*
  var _in = "fe80:0000:0000:0000:0204:61ff:fe9d:f156";
  var _out = IPv6.best(_in);
  var _expected = "fe80::204:61ff:fe9d:f156";

  console.log(_in, _out, _expected, _out === _expected);
  */

  // save current IPv6 variable, if any
  var _IPv6 = root && root.IPv6;

  function bestPresentation(address) {
    // based on:
    // Javascript to test an IPv6 address for proper format, and to
    // present the "best text representation" according to IETF Draft RFC at
    // http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04
    // 8 Feb 2010 Rich Brown, Dartware, LLC
    // Please feel free to use this code as long as you provide a link to
    // http://www.intermapper.com
    // http://intermapper.com/support/tools/IPV6-Validator.aspx
    // http://download.dartware.com/thirdparty/ipv6validator.js

    var _address = address.toLowerCase();
    var segments = _address.split(':');
    var length = segments.length;
    var total = 8;

    // trim colons (:: or ::a:b:c… or …a:b:c::)
    if (segments[0] === '' && segments[1] === '' && segments[2] === '') {
      // must have been ::
      // remove first two items
      segments.shift();
      segments.shift();
    } else if (segments[0] === '' && segments[1] === '') {
      // must have been ::xxxx
      // remove the first item
      segments.shift();
    } else if (segments[length - 1] === '' && segments[length - 2] === '') {
      // must have been xxxx::
      segments.pop();
    }

    length = segments.length;

    // adjust total segments for IPv4 trailer
    if (segments[length - 1].indexOf('.') !== -1) {
      // found a "." which means IPv4
      total = 7;
    }

    // fill empty segments them with "0000"
    var pos;
    for (pos = 0; pos < length; pos++) {
      if (segments[pos] === '') {
        break;
      }
    }

    if (pos < total) {
      segments.splice(pos, 1, '0000');
      while (segments.length < total) {
        segments.splice(pos, 0, '0000');
      }
    }

    // strip leading zeros
    var _segments;
    for (var i = 0; i < total; i++) {
      _segments = segments[i].split('');
      for (var j = 0; j < 3 ; j++) {
        if (_segments[0] === '0' && _segments.length > 1) {
          _segments.splice(0,1);
        } else {
          break;
        }
      }

      segments[i] = _segments.join('');
    }

    // find longest sequence of zeroes and coalesce them into one segment
    var best = -1;
    var _best = 0;
    var _current = 0;
    var current = -1;
    var inzeroes = false;
    // i; already declared

    for (i = 0; i < total; i++) {
      if (inzeroes) {
        if (segments[i] === '0') {
          _current += 1;
        } else {
          inzeroes = false;
          if (_current > _best) {
            best = current;
            _best = _current;
          }
        }
      } else {
        if (segments[i] === '0') {
          inzeroes = true;
          current = i;
          _current = 1;
        }
      }
    }

    if (_current > _best) {
      best = current;
      _best = _current;
    }

    if (_best > 1) {
      segments.splice(best, _best, '');
    }

    length = segments.length;

    // assemble remaining segments
    var result = '';
    if (segments[0] === '')  {
      result = ':';
    }

    for (i = 0; i < length; i++) {
      result += segments[i];
      if (i === length - 1) {
        break;
      }

      result += ':';
    }

    if (segments[length - 1] === '') {
      result += ':';
    }

    return result;
  }

  function noConflict() {
    /*jshint validthis: true */
    if (root.IPv6 === this) {
      root.IPv6 = _IPv6;
    }

    return this;
  }

  return {
    best: bestPresentation,
    noConflict: noConflict
  };
}));


/***/ }),

/***/ "./node_modules/urijs/src/SecondLevelDomains.js":
/*!******************************************************!*\
  !*** ./node_modules/urijs/src/SecondLevelDomains.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * URI.js - Mutating URLs
 * Second Level Domain (SLD) Support
 *
 * Version: 1.19.6
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */

(function (root, factory) {
  'use strict';
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if ( true && module.exports) {
    // Node
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function (root) {
  'use strict';

  // save current SecondLevelDomains variable, if any
  var _SecondLevelDomains = root && root.SecondLevelDomains;

  var SLD = {
    // list of known Second Level Domains
    // converted list of SLDs from https://github.com/gavingmiller/second-level-domains
    // ----
    // publicsuffix.org is more current and actually used by a couple of browsers internally.
    // downside is it also contains domains like "dyndns.org" - which is fine for the security
    // issues browser have to deal with (SOP for cookies, etc) - but is way overboard for URI.js
    // ----
    list: {
      'ac':' com gov mil net org ',
      'ae':' ac co gov mil name net org pro sch ',
      'af':' com edu gov net org ',
      'al':' com edu gov mil net org ',
      'ao':' co ed gv it og pb ',
      'ar':' com edu gob gov int mil net org tur ',
      'at':' ac co gv or ',
      'au':' asn com csiro edu gov id net org ',
      'ba':' co com edu gov mil net org rs unbi unmo unsa untz unze ',
      'bb':' biz co com edu gov info net org store tv ',
      'bh':' biz cc com edu gov info net org ',
      'bn':' com edu gov net org ',
      'bo':' com edu gob gov int mil net org tv ',
      'br':' adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ',
      'bs':' com edu gov net org ',
      'bz':' du et om ov rg ',
      'ca':' ab bc mb nb nf nl ns nt nu on pe qc sk yk ',
      'ck':' biz co edu gen gov info net org ',
      'cn':' ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ',
      'co':' com edu gov mil net nom org ',
      'cr':' ac c co ed fi go or sa ',
      'cy':' ac biz com ekloges gov ltd name net org parliament press pro tm ',
      'do':' art com edu gob gov mil net org sld web ',
      'dz':' art asso com edu gov net org pol ',
      'ec':' com edu fin gov info med mil net org pro ',
      'eg':' com edu eun gov mil name net org sci ',
      'er':' com edu gov ind mil net org rochest w ',
      'es':' com edu gob nom org ',
      'et':' biz com edu gov info name net org ',
      'fj':' ac biz com info mil name net org pro ',
      'fk':' ac co gov net nom org ',
      'fr':' asso com f gouv nom prd presse tm ',
      'gg':' co net org ',
      'gh':' com edu gov mil org ',
      'gn':' ac com gov net org ',
      'gr':' com edu gov mil net org ',
      'gt':' com edu gob ind mil net org ',
      'gu':' com edu gov net org ',
      'hk':' com edu gov idv net org ',
      'hu':' 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ',
      'id':' ac co go mil net or sch web ',
      'il':' ac co gov idf k12 muni net org ',
      'in':' ac co edu ernet firm gen gov i ind mil net nic org res ',
      'iq':' com edu gov i mil net org ',
      'ir':' ac co dnssec gov i id net org sch ',
      'it':' edu gov ',
      'je':' co net org ',
      'jo':' com edu gov mil name net org sch ',
      'jp':' ac ad co ed go gr lg ne or ',
      'ke':' ac co go info me mobi ne or sc ',
      'kh':' com edu gov mil net org per ',
      'ki':' biz com de edu gov info mob net org tel ',
      'km':' asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ',
      'kn':' edu gov net org ',
      'kr':' ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ',
      'kw':' com edu gov net org ',
      'ky':' com edu gov net org ',
      'kz':' com edu gov mil net org ',
      'lb':' com edu gov net org ',
      'lk':' assn com edu gov grp hotel int ltd net ngo org sch soc web ',
      'lr':' com edu gov net org ',
      'lv':' asn com conf edu gov id mil net org ',
      'ly':' com edu gov id med net org plc sch ',
      'ma':' ac co gov m net org press ',
      'mc':' asso tm ',
      'me':' ac co edu gov its net org priv ',
      'mg':' com edu gov mil nom org prd tm ',
      'mk':' com edu gov inf name net org pro ',
      'ml':' com edu gov net org presse ',
      'mn':' edu gov org ',
      'mo':' com edu gov net org ',
      'mt':' com edu gov net org ',
      'mv':' aero biz com coop edu gov info int mil museum name net org pro ',
      'mw':' ac co com coop edu gov int museum net org ',
      'mx':' com edu gob net org ',
      'my':' com edu gov mil name net org sch ',
      'nf':' arts com firm info net other per rec store web ',
      'ng':' biz com edu gov mil mobi name net org sch ',
      'ni':' ac co com edu gob mil net nom org ',
      'np':' com edu gov mil net org ',
      'nr':' biz com edu gov info net org ',
      'om':' ac biz co com edu gov med mil museum net org pro sch ',
      'pe':' com edu gob mil net nom org sld ',
      'ph':' com edu gov i mil net ngo org ',
      'pk':' biz com edu fam gob gok gon gop gos gov net org web ',
      'pl':' art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ',
      'pr':' ac biz com edu est gov info isla name net org pro prof ',
      'ps':' com edu gov net org plo sec ',
      'pw':' belau co ed go ne or ',
      'ro':' arts com firm info nom nt org rec store tm www ',
      'rs':' ac co edu gov in org ',
      'sb':' com edu gov net org ',
      'sc':' com edu gov net org ',
      'sh':' co com edu gov net nom org ',
      'sl':' com edu gov net org ',
      'st':' co com consulado edu embaixada gov mil net org principe saotome store ',
      'sv':' com edu gob org red ',
      'sz':' ac co org ',
      'tr':' av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ',
      'tt':' aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ',
      'tw':' club com ebiz edu game gov idv mil net org ',
      'mu':' ac co com gov net or org ',
      'mz':' ac co edu gov org ',
      'na':' co com ',
      'nz':' ac co cri geek gen govt health iwi maori mil net org parliament school ',
      'pa':' abo ac com edu gob ing med net nom org sld ',
      'pt':' com edu gov int net nome org publ ',
      'py':' com edu gov mil net org ',
      'qa':' com edu gov mil net org ',
      're':' asso com nom ',
      'ru':' ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ',
      'rw':' ac co com edu gouv gov int mil net ',
      'sa':' com edu gov med net org pub sch ',
      'sd':' com edu gov info med net org tv ',
      'se':' a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ',
      'sg':' com edu gov idn net org per ',
      'sn':' art com edu gouv org perso univ ',
      'sy':' com edu gov mil net news org ',
      'th':' ac co go in mi net or ',
      'tj':' ac biz co com edu go gov info int mil name net nic org test web ',
      'tn':' agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ',
      'tz':' ac co go ne or ',
      'ua':' biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ',
      'ug':' ac co go ne or org sc ',
      'uk':' ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ',
      'us':' dni fed isa kids nsn ',
      'uy':' com edu gub mil net org ',
      've':' co com edu gob info mil net org web ',
      'vi':' co com k12 net org ',
      'vn':' ac biz com edu gov health info int name net org pro ',
      'ye':' co com gov ltd me net org plc ',
      'yu':' ac co edu gov org ',
      'za':' ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ',
      'zm':' ac co com edu gov net org sch ',
      // https://en.wikipedia.org/wiki/CentralNic#Second-level_domains
      'com': 'ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ',
      'net': 'gb jp se uk ',
      'org': 'ae',
      'de': 'com '
    },
    // gorhill 2013-10-25: Using indexOf() instead Regexp(). Significant boost
    // in both performance and memory footprint. No initialization required.
    // http://jsperf.com/uri-js-sld-regex-vs-binary-search/4
    // Following methods use lastIndexOf() rather than array.split() in order
    // to avoid any memory allocations.
    has: function(domain) {
      var tldOffset = domain.lastIndexOf('.');
      if (tldOffset <= 0 || tldOffset >= (domain.length-1)) {
        return false;
      }
      var sldOffset = domain.lastIndexOf('.', tldOffset-1);
      if (sldOffset <= 0 || sldOffset >= (tldOffset-1)) {
        return false;
      }
      var sldList = SLD.list[domain.slice(tldOffset+1)];
      if (!sldList) {
        return false;
      }
      return sldList.indexOf(' ' + domain.slice(sldOffset+1, tldOffset) + ' ') >= 0;
    },
    is: function(domain) {
      var tldOffset = domain.lastIndexOf('.');
      if (tldOffset <= 0 || tldOffset >= (domain.length-1)) {
        return false;
      }
      var sldOffset = domain.lastIndexOf('.', tldOffset-1);
      if (sldOffset >= 0) {
        return false;
      }
      var sldList = SLD.list[domain.slice(tldOffset+1)];
      if (!sldList) {
        return false;
      }
      return sldList.indexOf(' ' + domain.slice(0, tldOffset) + ' ') >= 0;
    },
    get: function(domain) {
      var tldOffset = domain.lastIndexOf('.');
      if (tldOffset <= 0 || tldOffset >= (domain.length-1)) {
        return null;
      }
      var sldOffset = domain.lastIndexOf('.', tldOffset-1);
      if (sldOffset <= 0 || sldOffset >= (tldOffset-1)) {
        return null;
      }
      var sldList = SLD.list[domain.slice(tldOffset+1)];
      if (!sldList) {
        return null;
      }
      if (sldList.indexOf(' ' + domain.slice(sldOffset+1, tldOffset) + ' ') < 0) {
        return null;
      }
      return domain.slice(sldOffset+1);
    },
    noConflict: function(){
      if (root.SecondLevelDomains === this) {
        root.SecondLevelDomains = _SecondLevelDomains;
      }
      return this;
    }
  };

  return SLD;
}));


/***/ }),

/***/ "./node_modules/urijs/src/URI.js":
/*!***************************************!*\
  !*** ./node_modules/urijs/src/URI.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * URI.js - Mutating URLs
 *
 * Version: 1.19.6
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */
(function (root, factory) {
  'use strict';
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if ( true && module.exports) {
    // Node
    module.exports = factory(__webpack_require__(/*! ./punycode */ "./node_modules/urijs/src/punycode.js"), __webpack_require__(/*! ./IPv6 */ "./node_modules/urijs/src/IPv6.js"), __webpack_require__(/*! ./SecondLevelDomains */ "./node_modules/urijs/src/SecondLevelDomains.js"));
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./punycode */ "./node_modules/urijs/src/punycode.js"), __webpack_require__(/*! ./IPv6 */ "./node_modules/urijs/src/IPv6.js"), __webpack_require__(/*! ./SecondLevelDomains */ "./node_modules/urijs/src/SecondLevelDomains.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function (punycode, IPv6, SLD, root) {
  'use strict';
  /*global location, escape, unescape */
  // FIXME: v2.0.0 renamce non-camelCase properties to uppercase
  /*jshint camelcase: false */

  // save current URI variable, if any
  var _URI = root && root.URI;

  function URI(url, base) {
    var _urlSupplied = arguments.length >= 1;
    var _baseSupplied = arguments.length >= 2;

    // Allow instantiation without the 'new' keyword
    if (!(this instanceof URI)) {
      if (_urlSupplied) {
        if (_baseSupplied) {
          return new URI(url, base);
        }

        return new URI(url);
      }

      return new URI();
    }

    if (url === undefined) {
      if (_urlSupplied) {
        throw new TypeError('undefined is not a valid argument for URI');
      }

      if (typeof location !== 'undefined') {
        url = location.href + '';
      } else {
        url = '';
      }
    }

    if (url === null) {
      if (_urlSupplied) {
        throw new TypeError('null is not a valid argument for URI');
      }
    }

    this.href(url);

    // resolve to base according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#constructor
    if (base !== undefined) {
      return this.absoluteTo(base);
    }

    return this;
  }

  function isInteger(value) {
    return /^[0-9]+$/.test(value);
  }

  URI.version = '1.19.6';

  var p = URI.prototype;
  var hasOwn = Object.prototype.hasOwnProperty;

  function escapeRegEx(string) {
    // https://github.com/medialize/URI.js/commit/85ac21783c11f8ccab06106dba9735a31a86924d#commitcomment-821963
    return string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  }

  function getType(value) {
    // IE8 doesn't return [Object Undefined] but [Object Object] for undefined value
    if (value === undefined) {
      return 'Undefined';
    }

    return String(Object.prototype.toString.call(value)).slice(8, -1);
  }

  function isArray(obj) {
    return getType(obj) === 'Array';
  }

  function filterArrayValues(data, value) {
    var lookup = {};
    var i, length;

    if (getType(value) === 'RegExp') {
      lookup = null;
    } else if (isArray(value)) {
      for (i = 0, length = value.length; i < length; i++) {
        lookup[value[i]] = true;
      }
    } else {
      lookup[value] = true;
    }

    for (i = 0, length = data.length; i < length; i++) {
      /*jshint laxbreak: true */
      var _match = lookup && lookup[data[i]] !== undefined
        || !lookup && value.test(data[i]);
      /*jshint laxbreak: false */
      if (_match) {
        data.splice(i, 1);
        length--;
        i--;
      }
    }

    return data;
  }

  function arrayContains(list, value) {
    var i, length;

    // value may be string, number, array, regexp
    if (isArray(value)) {
      // Note: this can be optimized to O(n) (instead of current O(m * n))
      for (i = 0, length = value.length; i < length; i++) {
        if (!arrayContains(list, value[i])) {
          return false;
        }
      }

      return true;
    }

    var _type = getType(value);
    for (i = 0, length = list.length; i < length; i++) {
      if (_type === 'RegExp') {
        if (typeof list[i] === 'string' && list[i].match(value)) {
          return true;
        }
      } else if (list[i] === value) {
        return true;
      }
    }

    return false;
  }

  function arraysEqual(one, two) {
    if (!isArray(one) || !isArray(two)) {
      return false;
    }

    // arrays can't be equal if they have different amount of content
    if (one.length !== two.length) {
      return false;
    }

    one.sort();
    two.sort();

    for (var i = 0, l = one.length; i < l; i++) {
      if (one[i] !== two[i]) {
        return false;
      }
    }

    return true;
  }

  function trimSlashes(text) {
    var trim_expression = /^\/+|\/+$/g;
    return text.replace(trim_expression, '');
  }

  URI._parts = function() {
    return {
      protocol: null,
      username: null,
      password: null,
      hostname: null,
      urn: null,
      port: null,
      path: null,
      query: null,
      fragment: null,
      // state
      preventInvalidHostname: URI.preventInvalidHostname,
      duplicateQueryParameters: URI.duplicateQueryParameters,
      escapeQuerySpace: URI.escapeQuerySpace
    };
  };
  // state: throw on invalid hostname
  // see https://github.com/medialize/URI.js/pull/345
  // and https://github.com/medialize/URI.js/issues/354
  URI.preventInvalidHostname = false;
  // state: allow duplicate query parameters (a=1&a=1)
  URI.duplicateQueryParameters = false;
  // state: replaces + with %20 (space in query strings)
  URI.escapeQuerySpace = true;
  // static properties
  URI.protocol_expression = /^[a-z][a-z0-9.+-]*$/i;
  URI.idn_expression = /[^a-z0-9\._-]/i;
  URI.punycode_expression = /(xn--)/i;
  // well, 333.444.555.666 matches, but it sure ain't no IPv4 - do we care?
  URI.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  // credits to Rich Brown
  // source: http://forums.intermapper.com/viewtopic.php?p=1096#1096
  // specification: http://www.ietf.org/rfc/rfc4291.txt
  URI.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  // expression used is "gruber revised" (@gruber v2) determined to be the
  // best solution in a regex-golf we did a couple of ages ago at
  // * http://mathiasbynens.be/demo/url-regex
  // * http://rodneyrehm.de/t/url-regex.html
  URI.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;
  URI.findUri = {
    // valid "scheme://" or "www."
    start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
    // everything up to the next whitespace
    end: /[\s\r\n]|$/,
    // trim trailing punctuation captured by end RegExp
    trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,
    // balanced parens inclusion (), [], {}, <>
    parens: /(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g,
  };
  // http://www.iana.org/assignments/uri-schemes.html
  // http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports
  URI.defaultPorts = {
    http: '80',
    https: '443',
    ftp: '21',
    gopher: '70',
    ws: '80',
    wss: '443'
  };
  // list of protocols which always require a hostname
  URI.hostProtocols = [
    'http',
    'https'
  ];

  // allowed hostname characters according to RFC 3986
  // ALPHA DIGIT "-" "." "_" "~" "!" "$" "&" "'" "(" ")" "*" "+" "," ";" "=" %encoded
  // I've never seen a (non-IDN) hostname other than: ALPHA DIGIT . - _
  URI.invalid_hostname_characters = /[^a-zA-Z0-9\.\-:_]/;
  // map DOM Elements to their URI attribute
  URI.domAttributes = {
    'a': 'href',
    'blockquote': 'cite',
    'link': 'href',
    'base': 'href',
    'script': 'src',
    'form': 'action',
    'img': 'src',
    'area': 'href',
    'iframe': 'src',
    'embed': 'src',
    'source': 'src',
    'track': 'src',
    'input': 'src', // but only if type="image"
    'audio': 'src',
    'video': 'src'
  };
  URI.getDomAttribute = function(node) {
    if (!node || !node.nodeName) {
      return undefined;
    }

    var nodeName = node.nodeName.toLowerCase();
    // <input> should only expose src for type="image"
    if (nodeName === 'input' && node.type !== 'image') {
      return undefined;
    }

    return URI.domAttributes[nodeName];
  };

  function escapeForDumbFirefox36(value) {
    // https://github.com/medialize/URI.js/issues/91
    return escape(value);
  }

  // encoding / decoding according to RFC3986
  function strictEncodeURIComponent(string) {
    // see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/encodeURIComponent
    return encodeURIComponent(string)
      .replace(/[!'()*]/g, escapeForDumbFirefox36)
      .replace(/\*/g, '%2A');
  }
  URI.encode = strictEncodeURIComponent;
  URI.decode = decodeURIComponent;
  URI.iso8859 = function() {
    URI.encode = escape;
    URI.decode = unescape;
  };
  URI.unicode = function() {
    URI.encode = strictEncodeURIComponent;
    URI.decode = decodeURIComponent;
  };
  URI.characters = {
    pathname: {
      encode: {
        // RFC3986 2.1: For consistency, URI producers and normalizers should
        // use uppercase hexadecimal digits for all percent-encodings.
        expression: /%(24|26|2B|2C|3B|3D|3A|40)/ig,
        map: {
          // -._~!'()*
          '%24': '$',
          '%26': '&',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '=',
          '%3A': ':',
          '%40': '@'
        }
      },
      decode: {
        expression: /[\/\?#]/g,
        map: {
          '/': '%2F',
          '?': '%3F',
          '#': '%23'
        }
      }
    },
    reserved: {
      encode: {
        // RFC3986 2.1: For consistency, URI producers and normalizers should
        // use uppercase hexadecimal digits for all percent-encodings.
        expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,
        map: {
          // gen-delims
          '%3A': ':',
          '%2F': '/',
          '%3F': '?',
          '%23': '#',
          '%5B': '[',
          '%5D': ']',
          '%40': '@',
          // sub-delims
          '%21': '!',
          '%24': '$',
          '%26': '&',
          '%27': '\'',
          '%28': '(',
          '%29': ')',
          '%2A': '*',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '='
        }
      }
    },
    urnpath: {
      // The characters under `encode` are the characters called out by RFC 2141 as being acceptable
      // for usage in a URN. RFC2141 also calls out "-", ".", and "_" as acceptable characters, but
      // these aren't encoded by encodeURIComponent, so we don't have to call them out here. Also
      // note that the colon character is not featured in the encoding map; this is because URI.js
      // gives the colons in URNs semantic meaning as the delimiters of path segements, and so it
      // should not appear unencoded in a segment itself.
      // See also the note above about RFC3986 and capitalalized hex digits.
      encode: {
        expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,
        map: {
          '%21': '!',
          '%24': '$',
          '%27': '\'',
          '%28': '(',
          '%29': ')',
          '%2A': '*',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '=',
          '%40': '@'
        }
      },
      // These characters are the characters called out by RFC2141 as "reserved" characters that
      // should never appear in a URN, plus the colon character (see note above).
      decode: {
        expression: /[\/\?#:]/g,
        map: {
          '/': '%2F',
          '?': '%3F',
          '#': '%23',
          ':': '%3A'
        }
      }
    }
  };
  URI.encodeQuery = function(string, escapeQuerySpace) {
    var escaped = URI.encode(string + '');
    if (escapeQuerySpace === undefined) {
      escapeQuerySpace = URI.escapeQuerySpace;
    }

    return escapeQuerySpace ? escaped.replace(/%20/g, '+') : escaped;
  };
  URI.decodeQuery = function(string, escapeQuerySpace) {
    string += '';
    if (escapeQuerySpace === undefined) {
      escapeQuerySpace = URI.escapeQuerySpace;
    }

    try {
      return URI.decode(escapeQuerySpace ? string.replace(/\+/g, '%20') : string);
    } catch(e) {
      // we're not going to mess with weird encodings,
      // give up and return the undecoded original string
      // see https://github.com/medialize/URI.js/issues/87
      // see https://github.com/medialize/URI.js/issues/92
      return string;
    }
  };
  // generate encode/decode path functions
  var _parts = {'encode':'encode', 'decode':'decode'};
  var _part;
  var generateAccessor = function(_group, _part) {
    return function(string) {
      try {
        return URI[_part](string + '').replace(URI.characters[_group][_part].expression, function(c) {
          return URI.characters[_group][_part].map[c];
        });
      } catch (e) {
        // we're not going to mess with weird encodings,
        // give up and return the undecoded original string
        // see https://github.com/medialize/URI.js/issues/87
        // see https://github.com/medialize/URI.js/issues/92
        return string;
      }
    };
  };

  for (_part in _parts) {
    URI[_part + 'PathSegment'] = generateAccessor('pathname', _parts[_part]);
    URI[_part + 'UrnPathSegment'] = generateAccessor('urnpath', _parts[_part]);
  }

  var generateSegmentedPathFunction = function(_sep, _codingFuncName, _innerCodingFuncName) {
    return function(string) {
      // Why pass in names of functions, rather than the function objects themselves? The
      // definitions of some functions (but in particular, URI.decode) will occasionally change due
      // to URI.js having ISO8859 and Unicode modes. Passing in the name and getting it will ensure
      // that the functions we use here are "fresh".
      var actualCodingFunc;
      if (!_innerCodingFuncName) {
        actualCodingFunc = URI[_codingFuncName];
      } else {
        actualCodingFunc = function(string) {
          return URI[_codingFuncName](URI[_innerCodingFuncName](string));
        };
      }

      var segments = (string + '').split(_sep);

      for (var i = 0, length = segments.length; i < length; i++) {
        segments[i] = actualCodingFunc(segments[i]);
      }

      return segments.join(_sep);
    };
  };

  // This takes place outside the above loop because we don't want, e.g., encodeUrnPath functions.
  URI.decodePath = generateSegmentedPathFunction('/', 'decodePathSegment');
  URI.decodeUrnPath = generateSegmentedPathFunction(':', 'decodeUrnPathSegment');
  URI.recodePath = generateSegmentedPathFunction('/', 'encodePathSegment', 'decode');
  URI.recodeUrnPath = generateSegmentedPathFunction(':', 'encodeUrnPathSegment', 'decode');

  URI.encodeReserved = generateAccessor('reserved', 'encode');

  URI.parse = function(string, parts) {
    var pos;
    if (!parts) {
      parts = {
        preventInvalidHostname: URI.preventInvalidHostname
      };
    }
    // [protocol"://"[username[":"password]"@"]hostname[":"port]"/"?][path]["?"querystring]["#"fragment]

    // extract fragment
    pos = string.indexOf('#');
    if (pos > -1) {
      // escaping?
      parts.fragment = string.substring(pos + 1) || null;
      string = string.substring(0, pos);
    }

    // extract query
    pos = string.indexOf('?');
    if (pos > -1) {
      // escaping?
      parts.query = string.substring(pos + 1) || null;
      string = string.substring(0, pos);
    }

    // extract protocol
    if (string.substring(0, 2) === '//') {
      // relative-scheme
      parts.protocol = null;
      string = string.substring(2);
      // extract "user:pass@host:port"
      string = URI.parseAuthority(string, parts);
    } else {
      pos = string.indexOf(':');
      if (pos > -1) {
        parts.protocol = string.substring(0, pos) || null;
        if (parts.protocol && !parts.protocol.match(URI.protocol_expression)) {
          // : may be within the path
          parts.protocol = undefined;
        } else if (string.substring(pos + 1, pos + 3).replace(/\\/g, '/') === '//') {
          string = string.substring(pos + 3);

          // extract "user:pass@host:port"
          string = URI.parseAuthority(string, parts);
        } else {
          string = string.substring(pos + 1);
          parts.urn = true;
        }
      }
    }

    // what's left must be the path
    parts.path = string;

    // and we're done
    return parts;
  };
  URI.parseHost = function(string, parts) {
    if (!string) {
      string = '';
    }

    // Copy chrome, IE, opera backslash-handling behavior.
    // Back slashes before the query string get converted to forward slashes
    // See: https://github.com/joyent/node/blob/386fd24f49b0e9d1a8a076592a404168faeecc34/lib/url.js#L115-L124
    // See: https://code.google.com/p/chromium/issues/detail?id=25916
    // https://github.com/medialize/URI.js/pull/233
    string = string.replace(/\\/g, '/');

    // extract host:port
    var pos = string.indexOf('/');
    var bracketPos;
    var t;

    if (pos === -1) {
      pos = string.length;
    }

    if (string.charAt(0) === '[') {
      // IPv6 host - http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04#section-6
      // I claim most client software breaks on IPv6 anyways. To simplify things, URI only accepts
      // IPv6+port in the format [2001:db8::1]:80 (for the time being)
      bracketPos = string.indexOf(']');
      parts.hostname = string.substring(1, bracketPos) || null;
      parts.port = string.substring(bracketPos + 2, pos) || null;
      if (parts.port === '/') {
        parts.port = null;
      }
    } else {
      var firstColon = string.indexOf(':');
      var firstSlash = string.indexOf('/');
      var nextColon = string.indexOf(':', firstColon + 1);
      if (nextColon !== -1 && (firstSlash === -1 || nextColon < firstSlash)) {
        // IPv6 host contains multiple colons - but no port
        // this notation is actually not allowed by RFC 3986, but we're a liberal parser
        parts.hostname = string.substring(0, pos) || null;
        parts.port = null;
      } else {
        t = string.substring(0, pos).split(':');
        parts.hostname = t[0] || null;
        parts.port = t[1] || null;
      }
    }

    if (parts.hostname && string.substring(pos).charAt(0) !== '/') {
      pos++;
      string = '/' + string;
    }

    if (parts.preventInvalidHostname) {
      URI.ensureValidHostname(parts.hostname, parts.protocol);
    }

    if (parts.port) {
      URI.ensureValidPort(parts.port);
    }

    return string.substring(pos) || '/';
  };
  URI.parseAuthority = function(string, parts) {
    string = URI.parseUserinfo(string, parts);
    return URI.parseHost(string, parts);
  };
  URI.parseUserinfo = function(string, parts) {
    // extract username:password
    var _string = string
    var firstBackSlash = string.indexOf('\\');
    if (firstBackSlash !== -1) {
      string = string.replace(/\\/g, '/')
    }
    var firstSlash = string.indexOf('/');
    var pos = string.lastIndexOf('@', firstSlash > -1 ? firstSlash : string.length - 1);
    var t;

    // authority@ must come before /path or \path
    if (pos > -1 && (firstSlash === -1 || pos < firstSlash)) {
      t = string.substring(0, pos).split(':');
      parts.username = t[0] ? URI.decode(t[0]) : null;
      t.shift();
      parts.password = t[0] ? URI.decode(t.join(':')) : null;
      string = _string.substring(pos + 1);
    } else {
      parts.username = null;
      parts.password = null;
    }

    return string;
  };
  URI.parseQuery = function(string, escapeQuerySpace) {
    if (!string) {
      return {};
    }

    // throw out the funky business - "?"[name"="value"&"]+
    string = string.replace(/&+/g, '&').replace(/^\?*&*|&+$/g, '');

    if (!string) {
      return {};
    }

    var items = {};
    var splits = string.split('&');
    var length = splits.length;
    var v, name, value;

    for (var i = 0; i < length; i++) {
      v = splits[i].split('=');
      name = URI.decodeQuery(v.shift(), escapeQuerySpace);
      // no "=" is null according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#collect-url-parameters
      value = v.length ? URI.decodeQuery(v.join('='), escapeQuerySpace) : null;

      if (hasOwn.call(items, name)) {
        if (typeof items[name] === 'string' || items[name] === null) {
          items[name] = [items[name]];
        }

        items[name].push(value);
      } else {
        items[name] = value;
      }
    }

    return items;
  };

  URI.build = function(parts) {
    var t = '';
    var requireAbsolutePath = false

    if (parts.protocol) {
      t += parts.protocol + ':';
    }

    if (!parts.urn && (t || parts.hostname)) {
      t += '//';
      requireAbsolutePath = true
    }

    t += (URI.buildAuthority(parts) || '');

    if (typeof parts.path === 'string') {
      if (parts.path.charAt(0) !== '/' && requireAbsolutePath) {
        t += '/';
      }

      t += parts.path;
    }

    if (typeof parts.query === 'string' && parts.query) {
      t += '?' + parts.query;
    }

    if (typeof parts.fragment === 'string' && parts.fragment) {
      t += '#' + parts.fragment;
    }
    return t;
  };
  URI.buildHost = function(parts) {
    var t = '';

    if (!parts.hostname) {
      return '';
    } else if (URI.ip6_expression.test(parts.hostname)) {
      t += '[' + parts.hostname + ']';
    } else {
      t += parts.hostname;
    }

    if (parts.port) {
      t += ':' + parts.port;
    }

    return t;
  };
  URI.buildAuthority = function(parts) {
    return URI.buildUserinfo(parts) + URI.buildHost(parts);
  };
  URI.buildUserinfo = function(parts) {
    var t = '';

    if (parts.username) {
      t += URI.encode(parts.username);
    }

    if (parts.password) {
      t += ':' + URI.encode(parts.password);
    }

    if (t) {
      t += '@';
    }

    return t;
  };
  URI.buildQuery = function(data, duplicateQueryParameters, escapeQuerySpace) {
    // according to http://tools.ietf.org/html/rfc3986 or http://labs.apache.org/webarch/uri/rfc/rfc3986.html
    // being »-._~!$&'()*+,;=:@/?« %HEX and alnum are allowed
    // the RFC explicitly states ?/foo being a valid use case, no mention of parameter syntax!
    // URI.js treats the query string as being application/x-www-form-urlencoded
    // see http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type

    var t = '';
    var unique, key, i, length;
    for (key in data) {
      if (hasOwn.call(data, key)) {
        if (isArray(data[key])) {
          unique = {};
          for (i = 0, length = data[key].length; i < length; i++) {
            if (data[key][i] !== undefined && unique[data[key][i] + ''] === undefined) {
              t += '&' + URI.buildQueryParameter(key, data[key][i], escapeQuerySpace);
              if (duplicateQueryParameters !== true) {
                unique[data[key][i] + ''] = true;
              }
            }
          }
        } else if (data[key] !== undefined) {
          t += '&' + URI.buildQueryParameter(key, data[key], escapeQuerySpace);
        }
      }
    }

    return t.substring(1);
  };
  URI.buildQueryParameter = function(name, value, escapeQuerySpace) {
    // http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type -- application/x-www-form-urlencoded
    // don't append "=" for null values, according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#url-parameter-serialization
    return URI.encodeQuery(name, escapeQuerySpace) + (value !== null ? '=' + URI.encodeQuery(value, escapeQuerySpace) : '');
  };

  URI.addQuery = function(data, name, value) {
    if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          URI.addQuery(data, key, name[key]);
        }
      }
    } else if (typeof name === 'string') {
      if (data[name] === undefined) {
        data[name] = value;
        return;
      } else if (typeof data[name] === 'string') {
        data[name] = [data[name]];
      }

      if (!isArray(value)) {
        value = [value];
      }

      data[name] = (data[name] || []).concat(value);
    } else {
      throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
    }
  };

  URI.setQuery = function(data, name, value) {
    if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          URI.setQuery(data, key, name[key]);
        }
      }
    } else if (typeof name === 'string') {
      data[name] = value === undefined ? null : value;
    } else {
      throw new TypeError('URI.setQuery() accepts an object, string as the name parameter');
    }
  };

  URI.removeQuery = function(data, name, value) {
    var i, length, key;

    if (isArray(name)) {
      for (i = 0, length = name.length; i < length; i++) {
        data[name[i]] = undefined;
      }
    } else if (getType(name) === 'RegExp') {
      for (key in data) {
        if (name.test(key)) {
          data[key] = undefined;
        }
      }
    } else if (typeof name === 'object') {
      for (key in name) {
        if (hasOwn.call(name, key)) {
          URI.removeQuery(data, key, name[key]);
        }
      }
    } else if (typeof name === 'string') {
      if (value !== undefined) {
        if (getType(value) === 'RegExp') {
          if (!isArray(data[name]) && value.test(data[name])) {
            data[name] = undefined;
          } else {
            data[name] = filterArrayValues(data[name], value);
          }
        } else if (data[name] === String(value) && (!isArray(value) || value.length === 1)) {
          data[name] = undefined;
        } else if (isArray(data[name])) {
          data[name] = filterArrayValues(data[name], value);
        }
      } else {
        data[name] = undefined;
      }
    } else {
      throw new TypeError('URI.removeQuery() accepts an object, string, RegExp as the first parameter');
    }
  };
  URI.hasQuery = function(data, name, value, withinArray) {
    switch (getType(name)) {
      case 'String':
        // Nothing to do here
        break;

      case 'RegExp':
        for (var key in data) {
          if (hasOwn.call(data, key)) {
            if (name.test(key) && (value === undefined || URI.hasQuery(data, key, value))) {
              return true;
            }
          }
        }

        return false;

      case 'Object':
        for (var _key in name) {
          if (hasOwn.call(name, _key)) {
            if (!URI.hasQuery(data, _key, name[_key])) {
              return false;
            }
          }
        }

        return true;

      default:
        throw new TypeError('URI.hasQuery() accepts a string, regular expression or object as the name parameter');
    }

    switch (getType(value)) {
      case 'Undefined':
        // true if exists (but may be empty)
        return name in data; // data[name] !== undefined;

      case 'Boolean':
        // true if exists and non-empty
        var _booly = Boolean(isArray(data[name]) ? data[name].length : data[name]);
        return value === _booly;

      case 'Function':
        // allow complex comparison
        return !!value(data[name], name, data);

      case 'Array':
        if (!isArray(data[name])) {
          return false;
        }

        var op = withinArray ? arrayContains : arraysEqual;
        return op(data[name], value);

      case 'RegExp':
        if (!isArray(data[name])) {
          return Boolean(data[name] && data[name].match(value));
        }

        if (!withinArray) {
          return false;
        }

        return arrayContains(data[name], value);

      case 'Number':
        value = String(value);
        /* falls through */
      case 'String':
        if (!isArray(data[name])) {
          return data[name] === value;
        }

        if (!withinArray) {
          return false;
        }

        return arrayContains(data[name], value);

      default:
        throw new TypeError('URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter');
    }
  };


  URI.joinPaths = function() {
    var input = [];
    var segments = [];
    var nonEmptySegments = 0;

    for (var i = 0; i < arguments.length; i++) {
      var url = new URI(arguments[i]);
      input.push(url);
      var _segments = url.segment();
      for (var s = 0; s < _segments.length; s++) {
        if (typeof _segments[s] === 'string') {
          segments.push(_segments[s]);
        }

        if (_segments[s]) {
          nonEmptySegments++;
        }
      }
    }

    if (!segments.length || !nonEmptySegments) {
      return new URI('');
    }

    var uri = new URI('').segment(segments);

    if (input[0].path() === '' || input[0].path().slice(0, 1) === '/') {
      uri.path('/' + uri.path());
    }

    return uri.normalize();
  };

  URI.commonPath = function(one, two) {
    var length = Math.min(one.length, two.length);
    var pos;

    // find first non-matching character
    for (pos = 0; pos < length; pos++) {
      if (one.charAt(pos) !== two.charAt(pos)) {
        pos--;
        break;
      }
    }

    if (pos < 1) {
      return one.charAt(0) === two.charAt(0) && one.charAt(0) === '/' ? '/' : '';
    }

    // revert to last /
    if (one.charAt(pos) !== '/' || two.charAt(pos) !== '/') {
      pos = one.substring(0, pos).lastIndexOf('/');
    }

    return one.substring(0, pos + 1);
  };

  URI.withinString = function(string, callback, options) {
    options || (options = {});
    var _start = options.start || URI.findUri.start;
    var _end = options.end || URI.findUri.end;
    var _trim = options.trim || URI.findUri.trim;
    var _parens = options.parens || URI.findUri.parens;
    var _attributeOpen = /[a-z0-9-]=["']?$/i;

    _start.lastIndex = 0;
    while (true) {
      var match = _start.exec(string);
      if (!match) {
        break;
      }

      var start = match.index;
      if (options.ignoreHtml) {
        // attribut(e=["']?$)
        var attributeOpen = string.slice(Math.max(start - 3, 0), start);
        if (attributeOpen && _attributeOpen.test(attributeOpen)) {
          continue;
        }
      }

      var end = start + string.slice(start).search(_end);
      var slice = string.slice(start, end);
      // make sure we include well balanced parens
      var parensEnd = -1;
      while (true) {
        var parensMatch = _parens.exec(slice);
        if (!parensMatch) {
          break;
        }

        var parensMatchEnd = parensMatch.index + parensMatch[0].length;
        parensEnd = Math.max(parensEnd, parensMatchEnd);
      }

      if (parensEnd > -1) {
        slice = slice.slice(0, parensEnd) + slice.slice(parensEnd).replace(_trim, '');
      } else {
        slice = slice.replace(_trim, '');
      }

      if (slice.length <= match[0].length) {
        // the extract only contains the starting marker of a URI,
        // e.g. "www" or "http://"
        continue;
      }

      if (options.ignore && options.ignore.test(slice)) {
        continue;
      }

      end = start + slice.length;
      var result = callback(slice, start, end, string);
      if (result === undefined) {
        _start.lastIndex = end;
        continue;
      }

      result = String(result);
      string = string.slice(0, start) + result + string.slice(end);
      _start.lastIndex = start + result.length;
    }

    _start.lastIndex = 0;
    return string;
  };

  URI.ensureValidHostname = function(v, protocol) {
    // Theoretically URIs allow percent-encoding in Hostnames (according to RFC 3986)
    // they are not part of DNS and therefore ignored by URI.js

    var hasHostname = !!v; // not null and not an empty string
    var hasProtocol = !!protocol;
    var rejectEmptyHostname = false;

    if (hasProtocol) {
      rejectEmptyHostname = arrayContains(URI.hostProtocols, protocol);
    }

    if (rejectEmptyHostname && !hasHostname) {
      throw new TypeError('Hostname cannot be empty, if protocol is ' + protocol);
    } else if (v && v.match(URI.invalid_hostname_characters)) {
      // test punycode
      if (!punycode) {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');
      }
      if (punycode.toASCII(v).match(URI.invalid_hostname_characters)) {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-:_]');
      }
    }
  };

  URI.ensureValidPort = function (v) {
    if (!v) {
      return;
    }

    var port = Number(v);
    if (isInteger(port) && (port > 0) && (port < 65536)) {
      return;
    }

    throw new TypeError('Port "' + v + '" is not a valid port');
  };

  // noConflict
  URI.noConflict = function(removeAll) {
    if (removeAll) {
      var unconflicted = {
        URI: this.noConflict()
      };

      if (root.URITemplate && typeof root.URITemplate.noConflict === 'function') {
        unconflicted.URITemplate = root.URITemplate.noConflict();
      }

      if (root.IPv6 && typeof root.IPv6.noConflict === 'function') {
        unconflicted.IPv6 = root.IPv6.noConflict();
      }

      if (root.SecondLevelDomains && typeof root.SecondLevelDomains.noConflict === 'function') {
        unconflicted.SecondLevelDomains = root.SecondLevelDomains.noConflict();
      }

      return unconflicted;
    } else if (root.URI === this) {
      root.URI = _URI;
    }

    return this;
  };

  p.build = function(deferBuild) {
    if (deferBuild === true) {
      this._deferred_build = true;
    } else if (deferBuild === undefined || this._deferred_build) {
      this._string = URI.build(this._parts);
      this._deferred_build = false;
    }

    return this;
  };

  p.clone = function() {
    return new URI(this);
  };

  p.valueOf = p.toString = function() {
    return this.build(false)._string;
  };


  function generateSimpleAccessor(_part){
    return function(v, build) {
      if (v === undefined) {
        return this._parts[_part] || '';
      } else {
        this._parts[_part] = v || null;
        this.build(!build);
        return this;
      }
    };
  }

  function generatePrefixAccessor(_part, _key){
    return function(v, build) {
      if (v === undefined) {
        return this._parts[_part] || '';
      } else {
        if (v !== null) {
          v = v + '';
          if (v.charAt(0) === _key) {
            v = v.substring(1);
          }
        }

        this._parts[_part] = v;
        this.build(!build);
        return this;
      }
    };
  }

  p.protocol = generateSimpleAccessor('protocol');
  p.username = generateSimpleAccessor('username');
  p.password = generateSimpleAccessor('password');
  p.hostname = generateSimpleAccessor('hostname');
  p.port = generateSimpleAccessor('port');
  p.query = generatePrefixAccessor('query', '?');
  p.fragment = generatePrefixAccessor('fragment', '#');

  p.search = function(v, build) {
    var t = this.query(v, build);
    return typeof t === 'string' && t.length ? ('?' + t) : t;
  };
  p.hash = function(v, build) {
    var t = this.fragment(v, build);
    return typeof t === 'string' && t.length ? ('#' + t) : t;
  };

  p.pathname = function(v, build) {
    if (v === undefined || v === true) {
      var res = this._parts.path || (this._parts.hostname ? '/' : '');
      return v ? (this._parts.urn ? URI.decodeUrnPath : URI.decodePath)(res) : res;
    } else {
      if (this._parts.urn) {
        this._parts.path = v ? URI.recodeUrnPath(v) : '';
      } else {
        this._parts.path = v ? URI.recodePath(v) : '/';
      }
      this.build(!build);
      return this;
    }
  };
  p.path = p.pathname;
  p.href = function(href, build) {
    var key;

    if (href === undefined) {
      return this.toString();
    }

    this._string = '';
    this._parts = URI._parts();

    var _URI = href instanceof URI;
    var _object = typeof href === 'object' && (href.hostname || href.path || href.pathname);
    if (href.nodeName) {
      var attribute = URI.getDomAttribute(href);
      href = href[attribute] || '';
      _object = false;
    }

    // window.location is reported to be an object, but it's not the sort
    // of object we're looking for:
    // * location.protocol ends with a colon
    // * location.query != object.search
    // * location.hash != object.fragment
    // simply serializing the unknown object should do the trick
    // (for location, not for everything...)
    if (!_URI && _object && href.pathname !== undefined) {
      href = href.toString();
    }

    if (typeof href === 'string' || href instanceof String) {
      this._parts = URI.parse(String(href), this._parts);
    } else if (_URI || _object) {
      var src = _URI ? href._parts : href;
      for (key in src) {
        if (key === 'query') { continue; }
        if (hasOwn.call(this._parts, key)) {
          this._parts[key] = src[key];
        }
      }
      if (src.query) {
        this.query(src.query, false);
      }
    } else {
      throw new TypeError('invalid input');
    }

    this.build(!build);
    return this;
  };

  // identification accessors
  p.is = function(what) {
    var ip = false;
    var ip4 = false;
    var ip6 = false;
    var name = false;
    var sld = false;
    var idn = false;
    var punycode = false;
    var relative = !this._parts.urn;

    if (this._parts.hostname) {
      relative = false;
      ip4 = URI.ip4_expression.test(this._parts.hostname);
      ip6 = URI.ip6_expression.test(this._parts.hostname);
      ip = ip4 || ip6;
      name = !ip;
      sld = name && SLD && SLD.has(this._parts.hostname);
      idn = name && URI.idn_expression.test(this._parts.hostname);
      punycode = name && URI.punycode_expression.test(this._parts.hostname);
    }

    switch (what.toLowerCase()) {
      case 'relative':
        return relative;

      case 'absolute':
        return !relative;

      // hostname identification
      case 'domain':
      case 'name':
        return name;

      case 'sld':
        return sld;

      case 'ip':
        return ip;

      case 'ip4':
      case 'ipv4':
      case 'inet4':
        return ip4;

      case 'ip6':
      case 'ipv6':
      case 'inet6':
        return ip6;

      case 'idn':
        return idn;

      case 'url':
        return !this._parts.urn;

      case 'urn':
        return !!this._parts.urn;

      case 'punycode':
        return punycode;
    }

    return null;
  };

  // component specific input validation
  var _protocol = p.protocol;
  var _port = p.port;
  var _hostname = p.hostname;

  p.protocol = function(v, build) {
    if (v) {
      // accept trailing ://
      v = v.replace(/:(\/\/)?$/, '');

      if (!v.match(URI.protocol_expression)) {
        throw new TypeError('Protocol "' + v + '" contains characters other than [A-Z0-9.+-] or doesn\'t start with [A-Z]');
      }
    }

    return _protocol.call(this, v, build);
  };
  p.scheme = p.protocol;
  p.port = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v !== undefined) {
      if (v === 0) {
        v = null;
      }

      if (v) {
        v += '';
        if (v.charAt(0) === ':') {
          v = v.substring(1);
        }

        URI.ensureValidPort(v);
      }
    }
    return _port.call(this, v, build);
  };
  p.hostname = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v !== undefined) {
      var x = { preventInvalidHostname: this._parts.preventInvalidHostname };
      var res = URI.parseHost(v, x);
      if (res !== '/') {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
      }

      v = x.hostname;
      if (this._parts.preventInvalidHostname) {
        URI.ensureValidHostname(v, this._parts.protocol);
      }
    }

    return _hostname.call(this, v, build);
  };

  // compound accessors
  p.origin = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      var protocol = this.protocol();
      var authority = this.authority();
      if (!authority) {
        return '';
      }

      return (protocol ? protocol + '://' : '') + this.authority();
    } else {
      var origin = URI(v);
      this
        .protocol(origin.protocol())
        .authority(origin.authority())
        .build(!build);
      return this;
    }
  };
  p.host = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      return this._parts.hostname ? URI.buildHost(this._parts) : '';
    } else {
      var res = URI.parseHost(v, this._parts);
      if (res !== '/') {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
      }

      this.build(!build);
      return this;
    }
  };
  p.authority = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      return this._parts.hostname ? URI.buildAuthority(this._parts) : '';
    } else {
      var res = URI.parseAuthority(v, this._parts);
      if (res !== '/') {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
      }

      this.build(!build);
      return this;
    }
  };
  p.userinfo = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      var t = URI.buildUserinfo(this._parts);
      return t ? t.substring(0, t.length -1) : t;
    } else {
      if (v[v.length-1] !== '@') {
        v += '@';
      }

      URI.parseUserinfo(v, this._parts);
      this.build(!build);
      return this;
    }
  };
  p.resource = function(v, build) {
    var parts;

    if (v === undefined) {
      return this.path() + this.search() + this.hash();
    }

    parts = URI.parse(v);
    this._parts.path = parts.path;
    this._parts.query = parts.query;
    this._parts.fragment = parts.fragment;
    this.build(!build);
    return this;
  };

  // fraction accessors
  p.subdomain = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    // convenience, return "www" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      // grab domain and add another segment
      var end = this._parts.hostname.length - this.domain().length - 1;
      return this._parts.hostname.substring(0, end) || '';
    } else {
      var e = this._parts.hostname.length - this.domain().length;
      var sub = this._parts.hostname.substring(0, e);
      var replace = new RegExp('^' + escapeRegEx(sub));

      if (v && v.charAt(v.length - 1) !== '.') {
        v += '.';
      }

      if (v.indexOf(':') !== -1) {
        throw new TypeError('Domains cannot contain colons');
      }

      if (v) {
        URI.ensureValidHostname(v, this._parts.protocol);
      }

      this._parts.hostname = this._parts.hostname.replace(replace, v);
      this.build(!build);
      return this;
    }
  };
  p.domain = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v === 'boolean') {
      build = v;
      v = undefined;
    }

    // convenience, return "example.org" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      // if hostname consists of 1 or 2 segments, it must be the domain
      var t = this._parts.hostname.match(/\./g);
      if (t && t.length < 2) {
        return this._parts.hostname;
      }

      // grab tld and add another segment
      var end = this._parts.hostname.length - this.tld(build).length - 1;
      end = this._parts.hostname.lastIndexOf('.', end -1) + 1;
      return this._parts.hostname.substring(end) || '';
    } else {
      if (!v) {
        throw new TypeError('cannot set domain empty');
      }

      if (v.indexOf(':') !== -1) {
        throw new TypeError('Domains cannot contain colons');
      }

      URI.ensureValidHostname(v, this._parts.protocol);

      if (!this._parts.hostname || this.is('IP')) {
        this._parts.hostname = v;
      } else {
        var replace = new RegExp(escapeRegEx(this.domain()) + '$');
        this._parts.hostname = this._parts.hostname.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.tld = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v === 'boolean') {
      build = v;
      v = undefined;
    }

    // return "org" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      var pos = this._parts.hostname.lastIndexOf('.');
      var tld = this._parts.hostname.substring(pos + 1);

      if (build !== true && SLD && SLD.list[tld.toLowerCase()]) {
        return SLD.get(this._parts.hostname) || tld;
      }

      return tld;
    } else {
      var replace;

      if (!v) {
        throw new TypeError('cannot set TLD empty');
      } else if (v.match(/[^a-zA-Z0-9-]/)) {
        if (SLD && SLD.is(v)) {
          replace = new RegExp(escapeRegEx(this.tld()) + '$');
          this._parts.hostname = this._parts.hostname.replace(replace, v);
        } else {
          throw new TypeError('TLD "' + v + '" contains characters other than [A-Z0-9]');
        }
      } else if (!this._parts.hostname || this.is('IP')) {
        throw new ReferenceError('cannot set TLD on non-domain host');
      } else {
        replace = new RegExp(escapeRegEx(this.tld()) + '$');
        this._parts.hostname = this._parts.hostname.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.directory = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined || v === true) {
      if (!this._parts.path && !this._parts.hostname) {
        return '';
      }

      if (this._parts.path === '/') {
        return '/';
      }

      var end = this._parts.path.length - this.filename().length - 1;
      var res = this._parts.path.substring(0, end) || (this._parts.hostname ? '/' : '');

      return v ? URI.decodePath(res) : res;

    } else {
      var e = this._parts.path.length - this.filename().length;
      var directory = this._parts.path.substring(0, e);
      var replace = new RegExp('^' + escapeRegEx(directory));

      // fully qualifier directories begin with a slash
      if (!this.is('relative')) {
        if (!v) {
          v = '/';
        }

        if (v.charAt(0) !== '/') {
          v = '/' + v;
        }
      }

      // directories always end with a slash
      if (v && v.charAt(v.length - 1) !== '/') {
        v += '/';
      }

      v = URI.recodePath(v);
      this._parts.path = this._parts.path.replace(replace, v);
      this.build(!build);
      return this;
    }
  };
  p.filename = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v !== 'string') {
      if (!this._parts.path || this._parts.path === '/') {
        return '';
      }

      var pos = this._parts.path.lastIndexOf('/');
      var res = this._parts.path.substring(pos+1);

      return v ? URI.decodePathSegment(res) : res;
    } else {
      var mutatedDirectory = false;

      if (v.charAt(0) === '/') {
        v = v.substring(1);
      }

      if (v.match(/\.?\//)) {
        mutatedDirectory = true;
      }

      var replace = new RegExp(escapeRegEx(this.filename()) + '$');
      v = URI.recodePath(v);
      this._parts.path = this._parts.path.replace(replace, v);

      if (mutatedDirectory) {
        this.normalizePath(build);
      } else {
        this.build(!build);
      }

      return this;
    }
  };
  p.suffix = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined || v === true) {
      if (!this._parts.path || this._parts.path === '/') {
        return '';
      }

      var filename = this.filename();
      var pos = filename.lastIndexOf('.');
      var s, res;

      if (pos === -1) {
        return '';
      }

      // suffix may only contain alnum characters (yup, I made this up.)
      s = filename.substring(pos+1);
      res = (/^[a-z0-9%]+$/i).test(s) ? s : '';
      return v ? URI.decodePathSegment(res) : res;
    } else {
      if (v.charAt(0) === '.') {
        v = v.substring(1);
      }

      var suffix = this.suffix();
      var replace;

      if (!suffix) {
        if (!v) {
          return this;
        }

        this._parts.path += '.' + URI.recodePath(v);
      } else if (!v) {
        replace = new RegExp(escapeRegEx('.' + suffix) + '$');
      } else {
        replace = new RegExp(escapeRegEx(suffix) + '$');
      }

      if (replace) {
        v = URI.recodePath(v);
        this._parts.path = this._parts.path.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.segment = function(segment, v, build) {
    var separator = this._parts.urn ? ':' : '/';
    var path = this.path();
    var absolute = path.substring(0, 1) === '/';
    var segments = path.split(separator);

    if (segment !== undefined && typeof segment !== 'number') {
      build = v;
      v = segment;
      segment = undefined;
    }

    if (segment !== undefined && typeof segment !== 'number') {
      throw new Error('Bad segment "' + segment + '", must be 0-based integer');
    }

    if (absolute) {
      segments.shift();
    }

    if (segment < 0) {
      // allow negative indexes to address from the end
      segment = Math.max(segments.length + segment, 0);
    }

    if (v === undefined) {
      /*jshint laxbreak: true */
      return segment === undefined
        ? segments
        : segments[segment];
      /*jshint laxbreak: false */
    } else if (segment === null || segments[segment] === undefined) {
      if (isArray(v)) {
        segments = [];
        // collapse empty elements within array
        for (var i=0, l=v.length; i < l; i++) {
          if (!v[i].length && (!segments.length || !segments[segments.length -1].length)) {
            continue;
          }

          if (segments.length && !segments[segments.length -1].length) {
            segments.pop();
          }

          segments.push(trimSlashes(v[i]));
        }
      } else if (v || typeof v === 'string') {
        v = trimSlashes(v);
        if (segments[segments.length -1] === '') {
          // empty trailing elements have to be overwritten
          // to prevent results such as /foo//bar
          segments[segments.length -1] = v;
        } else {
          segments.push(v);
        }
      }
    } else {
      if (v) {
        segments[segment] = trimSlashes(v);
      } else {
        segments.splice(segment, 1);
      }
    }

    if (absolute) {
      segments.unshift('');
    }

    return this.path(segments.join(separator), build);
  };
  p.segmentCoded = function(segment, v, build) {
    var segments, i, l;

    if (typeof segment !== 'number') {
      build = v;
      v = segment;
      segment = undefined;
    }

    if (v === undefined) {
      segments = this.segment(segment, v, build);
      if (!isArray(segments)) {
        segments = segments !== undefined ? URI.decode(segments) : undefined;
      } else {
        for (i = 0, l = segments.length; i < l; i++) {
          segments[i] = URI.decode(segments[i]);
        }
      }

      return segments;
    }

    if (!isArray(v)) {
      v = (typeof v === 'string' || v instanceof String) ? URI.encode(v) : v;
    } else {
      for (i = 0, l = v.length; i < l; i++) {
        v[i] = URI.encode(v[i]);
      }
    }

    return this.segment(segment, v, build);
  };

  // mutating query string
  var q = p.query;
  p.query = function(v, build) {
    if (v === true) {
      return URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    } else if (typeof v === 'function') {
      var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
      var result = v.call(this, data);
      this._parts.query = URI.buildQuery(result || data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
      this.build(!build);
      return this;
    } else if (v !== undefined && typeof v !== 'string') {
      this._parts.query = URI.buildQuery(v, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
      this.build(!build);
      return this;
    } else {
      return q.call(this, v, build);
    }
  };
  p.setQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);

    if (typeof name === 'string' || name instanceof String) {
      data[name] = value !== undefined ? value : null;
    } else if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          data[key] = name[key];
        }
      }
    } else {
      throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
    }

    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.addQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    URI.addQuery(data, name, value === undefined ? null : value);
    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.removeQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    URI.removeQuery(data, name, value);
    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.hasQuery = function(name, value, withinArray) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    return URI.hasQuery(data, name, value, withinArray);
  };
  p.setSearch = p.setQuery;
  p.addSearch = p.addQuery;
  p.removeSearch = p.removeQuery;
  p.hasSearch = p.hasQuery;

  // sanitizing URLs
  p.normalize = function() {
    if (this._parts.urn) {
      return this
        .normalizeProtocol(false)
        .normalizePath(false)
        .normalizeQuery(false)
        .normalizeFragment(false)
        .build();
    }

    return this
      .normalizeProtocol(false)
      .normalizeHostname(false)
      .normalizePort(false)
      .normalizePath(false)
      .normalizeQuery(false)
      .normalizeFragment(false)
      .build();
  };
  p.normalizeProtocol = function(build) {
    if (typeof this._parts.protocol === 'string') {
      this._parts.protocol = this._parts.protocol.toLowerCase();
      this.build(!build);
    }

    return this;
  };
  p.normalizeHostname = function(build) {
    if (this._parts.hostname) {
      if (this.is('IDN') && punycode) {
        this._parts.hostname = punycode.toASCII(this._parts.hostname);
      } else if (this.is('IPv6') && IPv6) {
        this._parts.hostname = IPv6.best(this._parts.hostname);
      }

      this._parts.hostname = this._parts.hostname.toLowerCase();
      this.build(!build);
    }

    return this;
  };
  p.normalizePort = function(build) {
    // remove port of it's the protocol's default
    if (typeof this._parts.protocol === 'string' && this._parts.port === URI.defaultPorts[this._parts.protocol]) {
      this._parts.port = null;
      this.build(!build);
    }

    return this;
  };
  p.normalizePath = function(build) {
    var _path = this._parts.path;
    if (!_path) {
      return this;
    }

    if (this._parts.urn) {
      this._parts.path = URI.recodeUrnPath(this._parts.path);
      this.build(!build);
      return this;
    }

    if (this._parts.path === '/') {
      return this;
    }

    _path = URI.recodePath(_path);

    var _was_relative;
    var _leadingParents = '';
    var _parent, _pos;

    // handle relative paths
    if (_path.charAt(0) !== '/') {
      _was_relative = true;
      _path = '/' + _path;
    }

    // handle relative files (as opposed to directories)
    if (_path.slice(-3) === '/..' || _path.slice(-2) === '/.') {
      _path += '/';
    }

    // resolve simples
    _path = _path
      .replace(/(\/(\.\/)+)|(\/\.$)/g, '/')
      .replace(/\/{2,}/g, '/');

    // remember leading parents
    if (_was_relative) {
      _leadingParents = _path.substring(1).match(/^(\.\.\/)+/) || '';
      if (_leadingParents) {
        _leadingParents = _leadingParents[0];
      }
    }

    // resolve parents
    while (true) {
      _parent = _path.search(/\/\.\.(\/|$)/);
      if (_parent === -1) {
        // no more ../ to resolve
        break;
      } else if (_parent === 0) {
        // top level cannot be relative, skip it
        _path = _path.substring(3);
        continue;
      }

      _pos = _path.substring(0, _parent).lastIndexOf('/');
      if (_pos === -1) {
        _pos = _parent;
      }
      _path = _path.substring(0, _pos) + _path.substring(_parent + 3);
    }

    // revert to relative
    if (_was_relative && this.is('relative')) {
      _path = _leadingParents + _path.substring(1);
    }

    this._parts.path = _path;
    this.build(!build);
    return this;
  };
  p.normalizePathname = p.normalizePath;
  p.normalizeQuery = function(build) {
    if (typeof this._parts.query === 'string') {
      if (!this._parts.query.length) {
        this._parts.query = null;
      } else {
        this.query(URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace));
      }

      this.build(!build);
    }

    return this;
  };
  p.normalizeFragment = function(build) {
    if (!this._parts.fragment) {
      this._parts.fragment = null;
      this.build(!build);
    }

    return this;
  };
  p.normalizeSearch = p.normalizeQuery;
  p.normalizeHash = p.normalizeFragment;

  p.iso8859 = function() {
    // expect unicode input, iso8859 output
    var e = URI.encode;
    var d = URI.decode;

    URI.encode = escape;
    URI.decode = decodeURIComponent;
    try {
      this.normalize();
    } finally {
      URI.encode = e;
      URI.decode = d;
    }
    return this;
  };

  p.unicode = function() {
    // expect iso8859 input, unicode output
    var e = URI.encode;
    var d = URI.decode;

    URI.encode = strictEncodeURIComponent;
    URI.decode = unescape;
    try {
      this.normalize();
    } finally {
      URI.encode = e;
      URI.decode = d;
    }
    return this;
  };

  p.readable = function() {
    var uri = this.clone();
    // removing username, password, because they shouldn't be displayed according to RFC 3986
    uri.username('').password('').normalize();
    var t = '';
    if (uri._parts.protocol) {
      t += uri._parts.protocol + '://';
    }

    if (uri._parts.hostname) {
      if (uri.is('punycode') && punycode) {
        t += punycode.toUnicode(uri._parts.hostname);
        if (uri._parts.port) {
          t += ':' + uri._parts.port;
        }
      } else {
        t += uri.host();
      }
    }

    if (uri._parts.hostname && uri._parts.path && uri._parts.path.charAt(0) !== '/') {
      t += '/';
    }

    t += uri.path(true);
    if (uri._parts.query) {
      var q = '';
      for (var i = 0, qp = uri._parts.query.split('&'), l = qp.length; i < l; i++) {
        var kv = (qp[i] || '').split('=');
        q += '&' + URI.decodeQuery(kv[0], this._parts.escapeQuerySpace)
          .replace(/&/g, '%26');

        if (kv[1] !== undefined) {
          q += '=' + URI.decodeQuery(kv[1], this._parts.escapeQuerySpace)
            .replace(/&/g, '%26');
        }
      }
      t += '?' + q.substring(1);
    }

    t += URI.decodeQuery(uri.hash(), true);
    return t;
  };

  // resolving relative and absolute URLs
  p.absoluteTo = function(base) {
    var resolved = this.clone();
    var properties = ['protocol', 'username', 'password', 'hostname', 'port'];
    var basedir, i, p;

    if (this._parts.urn) {
      throw new Error('URNs do not have any generally defined hierarchical components');
    }

    if (!(base instanceof URI)) {
      base = new URI(base);
    }

    if (resolved._parts.protocol) {
      // Directly returns even if this._parts.hostname is empty.
      return resolved;
    } else {
      resolved._parts.protocol = base._parts.protocol;
    }

    if (this._parts.hostname) {
      return resolved;
    }

    for (i = 0; (p = properties[i]); i++) {
      resolved._parts[p] = base._parts[p];
    }

    if (!resolved._parts.path) {
      resolved._parts.path = base._parts.path;
      if (!resolved._parts.query) {
        resolved._parts.query = base._parts.query;
      }
    } else {
      if (resolved._parts.path.substring(-2) === '..') {
        resolved._parts.path += '/';
      }

      if (resolved.path().charAt(0) !== '/') {
        basedir = base.directory();
        basedir = basedir ? basedir : base.path().indexOf('/') === 0 ? '/' : '';
        resolved._parts.path = (basedir ? (basedir + '/') : '') + resolved._parts.path;
        resolved.normalizePath();
      }
    }

    resolved.build();
    return resolved;
  };
  p.relativeTo = function(base) {
    var relative = this.clone().normalize();
    var relativeParts, baseParts, common, relativePath, basePath;

    if (relative._parts.urn) {
      throw new Error('URNs do not have any generally defined hierarchical components');
    }

    base = new URI(base).normalize();
    relativeParts = relative._parts;
    baseParts = base._parts;
    relativePath = relative.path();
    basePath = base.path();

    if (relativePath.charAt(0) !== '/') {
      throw new Error('URI is already relative');
    }

    if (basePath.charAt(0) !== '/') {
      throw new Error('Cannot calculate a URI relative to another relative URI');
    }

    if (relativeParts.protocol === baseParts.protocol) {
      relativeParts.protocol = null;
    }

    if (relativeParts.username !== baseParts.username || relativeParts.password !== baseParts.password) {
      return relative.build();
    }

    if (relativeParts.protocol !== null || relativeParts.username !== null || relativeParts.password !== null) {
      return relative.build();
    }

    if (relativeParts.hostname === baseParts.hostname && relativeParts.port === baseParts.port) {
      relativeParts.hostname = null;
      relativeParts.port = null;
    } else {
      return relative.build();
    }

    if (relativePath === basePath) {
      relativeParts.path = '';
      return relative.build();
    }

    // determine common sub path
    common = URI.commonPath(relativePath, basePath);

    // If the paths have nothing in common, return a relative URL with the absolute path.
    if (!common) {
      return relative.build();
    }

    var parents = baseParts.path
      .substring(common.length)
      .replace(/[^\/]*$/, '')
      .replace(/.*?\//g, '../');

    relativeParts.path = (parents + relativeParts.path.substring(common.length)) || './';

    return relative.build();
  };

  // comparing URIs
  p.equals = function(uri) {
    var one = this.clone();
    var two = new URI(uri);
    var one_map = {};
    var two_map = {};
    var checked = {};
    var one_query, two_query, key;

    one.normalize();
    two.normalize();

    // exact match
    if (one.toString() === two.toString()) {
      return true;
    }

    // extract query string
    one_query = one.query();
    two_query = two.query();
    one.query('');
    two.query('');

    // definitely not equal if not even non-query parts match
    if (one.toString() !== two.toString()) {
      return false;
    }

    // query parameters have the same length, even if they're permuted
    if (one_query.length !== two_query.length) {
      return false;
    }

    one_map = URI.parseQuery(one_query, this._parts.escapeQuerySpace);
    two_map = URI.parseQuery(two_query, this._parts.escapeQuerySpace);

    for (key in one_map) {
      if (hasOwn.call(one_map, key)) {
        if (!isArray(one_map[key])) {
          if (one_map[key] !== two_map[key]) {
            return false;
          }
        } else if (!arraysEqual(one_map[key], two_map[key])) {
          return false;
        }

        checked[key] = true;
      }
    }

    for (key in two_map) {
      if (hasOwn.call(two_map, key)) {
        if (!checked[key]) {
          // two contains a parameter not present in one
          return false;
        }
      }
    }

    return true;
  };

  // state
  p.preventInvalidHostname = function(v) {
    this._parts.preventInvalidHostname = !!v;
    return this;
  };

  p.duplicateQueryParameters = function(v) {
    this._parts.duplicateQueryParameters = !!v;
    return this;
  };

  p.escapeQuerySpace = function(v) {
    this._parts.escapeQuerySpace = !!v;
    return this;
  };

  return URI;
}));


/***/ }),

/***/ "./node_modules/urijs/src/punycode.js":
/*!********************************************!*\
  !*** ./node_modules/urijs/src/punycode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.0 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.2',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/components/DatePicker/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/DatePicker/index.tsx ***!
  \*********************************************/
/*! exports provided: RangePicker, DatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePicker", function() { return RangePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return DatePicker; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/date-picker/index.js");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const { RangePicker } = antd__WEBPACK_IMPORTED_MODULE_0__["default"];
const DatePicker = antd__WEBPACK_IMPORTED_MODULE_0__["default"];;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(RangePicker, "RangePicker", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\DatePicker\\index.tsx");reactHotLoader.register(DatePicker, "DatePicker", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\DatePicker\\index.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Popover/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Popover/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/popover/index.js");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Eventually Popover can be wrapped and customized in this file
// for now we're just redirecting
const _default = antd__WEBPACK_IMPORTED_MODULE_0__["default"];/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\Popover\\index.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Radio/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Radio/index.tsx ***!
  \****************************************/
/*! exports provided: Radio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return Radio; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/assign */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/radio/index.js");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


const StyledRadio = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["styled"])(antd__WEBPACK_IMPORTED_MODULE_2__["default"])`
  .ant-radio-inner {
    top: -1px;
    left: 2px;
    width: ${({ theme }) => theme.gridUnit * 4}px;
    height: ${({ theme }) => theme.gridUnit * 4}px;
    border-width: 2px;
    border-color: ${({ theme }) => theme.colors.grayscale.light2};
  }

  .ant-radio.ant-radio-checked {
    .ant-radio-inner {
      border-width: ${({ theme }) => theme.gridUnit + 1}px;
      border-color: ${({ theme }) => theme.colors.primary.base};
    }

    .ant-radio-inner::after {
      background-color: ${({ theme }) => theme.colors.grayscale.light5};
      top: 0;
      left: 0;
      width: ${({ theme }) => theme.gridUnit + 2}px;
      height: ${({ theme }) => theme.gridUnit + 2}px;
    }
  }

  .ant-radio:hover,
  .ant-radio:focus {
    .ant-radio-inner {
      border-color: ${({ theme }) => theme.colors.primary.dark1};
    }
  }
`;
const StyledGroup = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["styled"])(antd__WEBPACK_IMPORTED_MODULE_2__["default"].Group)`
  font-size: inherit;
`;
const Radio = _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_0___default()(StyledRadio, {
  Group: StyledGroup });;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(StyledRadio, "StyledRadio", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\Radio\\index.tsx");reactHotLoader.register(StyledGroup, "StyledGroup", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\Radio\\index.tsx");reactHotLoader.register(Radio, "Radio", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\Radio\\index.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: DATETIME_WITH_TIME_ZONE, TIME_WITH_MS, BOOL_TRUE_DISPLAY, BOOL_FALSE_DISPLAY, URL_PARAMS, FAST_DEBOUNCE, SLOW_DEBOUNCE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATETIME_WITH_TIME_ZONE", function() { return DATETIME_WITH_TIME_ZONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_WITH_MS", function() { return TIME_WITH_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOL_TRUE_DISPLAY", function() { return BOOL_TRUE_DISPLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOL_FALSE_DISPLAY", function() { return BOOL_FALSE_DISPLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_PARAMS", function() { return URL_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAST_DEBOUNCE", function() { return FAST_DEBOUNCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLOW_DEBOUNCE", function() { return SLOW_DEBOUNCE; });
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const DATETIME_WITH_TIME_ZONE = 'YYYY-MM-DD HH:mm:ssZ';
const TIME_WITH_MS = 'HH:mm:ss.SSS';
const BOOL_TRUE_DISPLAY = 'True';
const BOOL_FALSE_DISPLAY = 'False';
const URL_PARAMS = {
  standalone: {
    name: 'standalone',
    type: 'number' },

  preselectFilters: {
    name: 'preselect_filters',
    type: 'object' },

  showFilters: {
    name: 'show_filters',
    type: 'boolean' } };


/**
 * Faster debounce delay for inputs without expensive operation.
 */
const FAST_DEBOUNCE = 250;
/**
 * Slower debounce delay for inputs with expensive API calls.
 */
const SLOW_DEBOUNCE = 500;;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(DATETIME_WITH_TIME_ZONE, "DATETIME_WITH_TIME_ZONE", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\constants.ts");reactHotLoader.register(TIME_WITH_MS, "TIME_WITH_MS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\constants.ts");reactHotLoader.register(BOOL_TRUE_DISPLAY, "BOOL_TRUE_DISPLAY", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\constants.ts");reactHotLoader.register(BOOL_FALSE_DISPLAY, "BOOL_FALSE_DISPLAY", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\constants.ts");reactHotLoader.register(URL_PARAMS, "URL_PARAMS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\constants.ts");reactHotLoader.register(FAST_DEBOUNCE, "FAST_DEBOUNCE", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\constants.ts");reactHotLoader.register(SLOW_DEBOUNCE, "SLOW_DEBOUNCE", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\constants.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/explore/components/controls/DateFilterControl/DateFilterLabel.tsx":
/*!*******************************************************************************!*\
  !*** ./src/explore/components/controls/DateFilterControl/DateFilterLabel.tsx ***!
  \*******************************************************************************/
/*! exports provided: DATE_FILTER_CONTROL_TEST_ID, getDateFilterControlTestId, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_FILTER_CONTROL_TEST_ID", function() { return DATE_FILTER_CONTROL_TEST_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDateFilterControlTestId", function() { return getDateFilterControlTestId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateFilterLabel; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ "./node_modules/@babel/runtime-corejs3/helpers/extends.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rison */ "./node_modules/rison/js/rison.js");
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rison__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/connection/SupersetClient.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/explore/components/controls/DateFilterControl/utils */ "./src/explore/components/controls/DateFilterControl/utils/index.ts");
/* harmony import */ var src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/utils/getClientErrorObject */ "./src/utils/getClientErrorObject.ts");
/* harmony import */ var src_components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/components/Button */ "./src/components/Button/index.tsx");
/* harmony import */ var src_explore_components_ControlHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/explore/components/ControlHeader */ "./src/explore/components/ControlHeader.jsx");
/* harmony import */ var src_components_Label__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/components/Label */ "./src/components/Label/index.tsx");
/* harmony import */ var src_components_Popover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/components/Popover */ "./src/components/Popover/index.tsx");
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/common/components */ "./src/common/components/index.tsx");
/* harmony import */ var src_components_Icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/components/Icon */ "./src/components/Icon/index.tsx");
/* harmony import */ var src_components_Select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/components/Select */ "./src/components/Select/index.ts");
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/components/Tooltip */ "./src/components/Tooltip/index.tsx");
/* harmony import */ var src_explore_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/explore/constants */ "./src/explore/constants.ts");
/* harmony import */ var src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/explore/exploreUtils */ "./src/explore/exploreUtils/index.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var src_utils_testUtils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/utils/testUtils */ "./src/utils/testUtils.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components */ "./src/explore/components/controls/DateFilterControl/components/index.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


















const guessFrame = timeRange => {
  if (src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_8__["COMMON_RANGE_VALUES_SET"].has(timeRange)) {
    return 'Common';
  }
  if (src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_8__["CALENDAR_RANGE_VALUES_SET"].has(timeRange)) {
    return 'Calendar';
  }
  if (timeRange === 'No filter') {
    return 'No filter';
  }
  if (Object(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_8__["customTimeRangeDecode"])(timeRange).matchedFlag) {
    return 'Custom';
  }
  return 'Advanced';
};
const fetchTimeRange = async (timeRange, endpoints) => {
  const query = rison__WEBPACK_IMPORTED_MODULE_4___default.a.encode(timeRange);
  const endpoint = `/api/v1/time_range/?q=${query}`;
  try {var _response$json, _response$json$result, _response$json2, _response$json2$resul;
    const response = await _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"].get({ endpoint });
    const timeRangeString = Object(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_8__["buildTimeRangeString"])((response == null ? void 0 : (_response$json = response.json) == null ? void 0 : (_response$json$result = _response$json.result) == null ? void 0 : _response$json$result.since) || '', (response == null ? void 0 : (_response$json2 = response.json) == null ? void 0 : (_response$json2$resul = _response$json2.result) == null ? void 0 : _response$json2$resul.until) || '');
    return {
      value: Object(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_8__["formatTimeRange"])(timeRangeString, endpoints) };

  }
  catch (response) {
    const clientError = await Object(src_utils_getClientErrorObject__WEBPACK_IMPORTED_MODULE_9__["getClientErrorObject"])(response);
    return {
      error: clientError.message || clientError.error };

  }
};
const StyledPopover = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["styled"])(src_components_Popover__WEBPACK_IMPORTED_MODULE_13__["default"])``;
const ContentStyleWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["styled"].div`
  .ant-row {
    margin-top: 8px;
  }

  .ant-input-number {
    width: 100%;
  }

  .frame-dropdown {
    width: 272px;
  }

  .ant-picker {
    padding: 4px 17px 4px;
    border-radius: 4px;
    width: 100%;
  }

  .ant-divider-horizontal {
    margin: 16px 0;
  }

  .control-label {
    font-size: 11px;
    font-weight: 500;
    color: #b2b2b2;
    line-height: 16px;
    text-transform: uppercase;
    margin: 8px 0;
  }

  .vertical-radio {
    display: block;
    height: 40px;
    line-height: 40px;
  }

  .section-title {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 8px;
  }

  .control-anchor-to {
    margin-top: 16px;
  }

  .control-anchor-to-datetime {
    width: 217px;
  }

  .footer {
    text-align: right;
  }
`;
const IconWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["styled"].span`
  svg {
    margin-right: ${({ theme }) => 2 * theme.gridUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
  .error {
    color: ${({ theme }) => theme.colors.error.base};
  }
`;
const DATE_FILTER_CONTROL_TEST_ID = 'date-filter-control';
const getDateFilterControlTestId = Object(src_utils_testUtils__WEBPACK_IMPORTED_MODULE_21__["testWithId"])(DATE_FILTER_CONTROL_TEST_ID);
function DateFilterLabel(props) {
  const { value = src_explore_constants__WEBPACK_IMPORTED_MODULE_18__["DEFAULT_TIME_RANGE"], endpoints, onChange } = props;
  const [actualTimeRange, setActualTimeRange] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(value);
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const guessedFrame = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(() => guessFrame(value), [value]);
  const [frame, setFrame] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(guessedFrame);
  const [timeRangeValue, setTimeRangeValue] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(value);
  const [validTimeRange, setValidTimeRange] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const [evalResponse, setEvalResponse] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(value);
  const [tooltipTitle, setTooltipTitle] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    fetchTimeRange(value, endpoints).then(({ value: actualRange, error }) => {
      if (error) {
        setEvalResponse(error || '');
        setValidTimeRange(false);
        setTooltipTitle(value || '');
      } else
      {
        /*
          HRT == human readable text
          ADR == actual datetime range
          +--------------+------+----------+--------+----------+-----------+
          |              | Last | Previous | Custom | Advanced | No Filter |
          +--------------+------+----------+--------+----------+-----------+
          | control pill | HRT  | HRT      | ADR    | ADR      |   HRT     |
          +--------------+------+----------+--------+----------+-----------+
          | tooltip      | ADR  | ADR      | HRT    | HRT      |   ADR     |
          +--------------+------+----------+--------+----------+-----------+
        */
        if (guessedFrame === 'Common' ||
        guessedFrame === 'Calendar' ||
        guessedFrame === 'No filter') {
          setActualTimeRange(value);
          setTooltipTitle(actualRange || '');
        } else
        {
          setActualTimeRange(actualRange || '');
          setTooltipTitle(value || '');
        }
        setValidTimeRange(true);
      }
    });
  }, [value]);
  Object(src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_19__["useDebouncedEffect"])(() => {
    fetchTimeRange(timeRangeValue, endpoints).then(({ value, error }) => {
      if (error) {
        setEvalResponse(error || '');
        setValidTimeRange(false);
      } else
      {
        setEvalResponse(value || '');
        setValidTimeRange(true);
      }
    });
  }, src_constants__WEBPACK_IMPORTED_MODULE_20__["SLOW_DEBOUNCE"], [timeRangeValue]);
  function onSave() {
    onChange(timeRangeValue);
    setShow(false);
  }
  function onOpen() {
    setTimeRangeValue(value);
    setFrame(guessedFrame);
    setShow(true);
  }
  function onHide() {
    setTimeRangeValue(value);
    setFrame(guessedFrame);
    setShow(false);
  }
  const togglePopover = () => {
    if (show) {
      onHide();
    } else
    {
      setShow(true);
    }
  };
  function onChangeFrame(option) {
    if (option.value === 'No filter') {
      setTimeRangeValue('No filter');
    }
    setFrame(option.value);
  }
  const overlayConetent = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(ContentStyleWrapper, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", { className: "control-label" }, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["t"])('RANGE TYPE')),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(src_components_Select__WEBPACK_IMPORTED_MODULE_16__["Select"], { options: src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_8__["FRAME_OPTIONS"], value: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_8__["FRAME_OPTIONS"]).call(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_8__["FRAME_OPTIONS"], ({ value }) => value === frame), onChange: onChangeFrame, className: "frame-dropdown" }),
  frame !== 'No filter' && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_14__["Divider"], null),
  frame === 'Common' && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_22__["CommonFrame"], { value: timeRangeValue, onChange: setTimeRangeValue }),
  frame === 'Calendar' && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_22__["CalendarFrame"], { value: timeRangeValue, onChange: setTimeRangeValue }),
  frame === 'Advanced' && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_22__["AdvancedFrame"], { value: timeRangeValue, onChange: setTimeRangeValue }),
  frame === 'Custom' && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_components__WEBPACK_IMPORTED_MODULE_22__["CustomFrame"], { value: timeRangeValue, onChange: setTimeRangeValue }),
  frame === 'No filter' && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", { "data-test": "no-filter" }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_14__["Divider"], null),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", { className: "section-title" }, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["t"])('Actual time range')),
  validTimeRange && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", null, evalResponse),
  !validTimeRange && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(IconWrapper, { className: "warning" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(src_components_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], { name: "error-solid-small", color: _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["supersetTheme"].colors.error.base }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])("span", { className: "text error" }, evalResponse))),


  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_14__["Divider"], null),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", { className: "footer" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(src_components_Button__WEBPACK_IMPORTED_MODULE_10__["default"], { buttonStyle: "secondary", cta: true, key: "cancel", onClick: onHide, "data-test": "cancel-button" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["t"])('CANCEL')),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(src_components_Button__WEBPACK_IMPORTED_MODULE_10__["default"], _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ buttonStyle: "primary", cta: true, disabled: !validTimeRange, key: "apply", onClick: onSave }, getDateFilterControlTestId('apply-button')),
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["t"])('APPLY'))));



  const title = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(IconWrapper, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(src_components_Icon__WEBPACK_IMPORTED_MODULE_15__["default"], { name: "edit-alt" }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])("span", { className: "text" }, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["t"])('Edit time range')));

  const overlayStyle = {
    width: '600px' };

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(src_explore_components_ControlHeader__WEBPACK_IMPORTED_MODULE_11__["default"], props),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(StyledPopover, { placement: "right", trigger: "click", content: overlayConetent, title: title, defaultVisible: show, visible: show, onVisibleChange: togglePopover, overlayStyle: overlayStyle },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], { placement: "top", title: tooltipTitle },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_23__["jsx"])(src_components_Label__WEBPACK_IMPORTED_MODULE_12__["default"], { className: "pointer", "data-test": "time-range-trigger", onClick: onOpen },
  actualTimeRange))));




}__signature__(DateFilterLabel, "useState{[actualTimeRange, setActualTimeRange](value)}\nuseState{[show, setShow](false)}\nuseMemo{guessedFrame}\nuseState{[frame, setFrame](guessedFrame)}\nuseState{[timeRangeValue, setTimeRangeValue](value)}\nuseState{[validTimeRange, setValidTimeRange](false)}\nuseState{[evalResponse, setEvalResponse](value)}\nuseState{[tooltipTitle, setTooltipTitle](value)}\nuseEffect{}\nuseDebouncedEffect{}", () => [src_explore_exploreUtils__WEBPACK_IMPORTED_MODULE_19__["useDebouncedEffect"]]);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(guessFrame, "guessFrame", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\DateFilterLabel.tsx");reactHotLoader.register(fetchTimeRange, "fetchTimeRange", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\DateFilterLabel.tsx");reactHotLoader.register(StyledPopover, "StyledPopover", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\DateFilterLabel.tsx");reactHotLoader.register(ContentStyleWrapper, "ContentStyleWrapper", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\DateFilterLabel.tsx");reactHotLoader.register(IconWrapper, "IconWrapper", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\DateFilterLabel.tsx");reactHotLoader.register(DATE_FILTER_CONTROL_TEST_ID, "DATE_FILTER_CONTROL_TEST_ID", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\DateFilterLabel.tsx");reactHotLoader.register(getDateFilterControlTestId, "getDateFilterControlTestId", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\DateFilterLabel.tsx");reactHotLoader.register(DateFilterLabel, "DateFilterLabel", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\DateFilterLabel.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/explore/components/controls/DateFilterControl/components/AdvancedFrame.tsx":
/*!****************************************************************************************!*\
  !*** ./src/explore/components/controls/DateFilterControl/components/AdvancedFrame.tsx ***!
  \****************************************************************************************/
/*! exports provided: AdvancedFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedFrame", function() { return AdvancedFrame; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/starts-with */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/starts-with.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/explore/components/controls/DateFilterControl/utils */ "./src/explore/components/controls/DateFilterControl/utils/index.ts");
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/common/components */ "./src/common/components/index.tsx");
/* harmony import */ var _superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @superset-ui/chart-controls */ "./node_modules/@superset-ui/chart-controls/esm/components/InfoTooltipWithTrigger.js");
/* harmony import */ var _DateFunctionTooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DateFunctionTooltip */ "./src/explore/components/controls/DateFilterControl/components/DateFunctionTooltip.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */






function AdvancedFrame(props) {
  const advancedRange = getAdvancedRange(props.value || '');
  const [since, until] = advancedRange.split(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_5__["SEPARATOR"]);
  if (advancedRange !== props.value) {
    props.onChange(getAdvancedRange(props.value || ''));
  }
  function getAdvancedRange(value) {
    if (_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_2___default()(value).call(value, src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_5__["SEPARATOR"])) {
      return value;
    }
    if (_babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_1___default()(value).call(value, 'Last')) {
      return [value, ''].join(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_5__["SEPARATOR"]);
    }
    if (_babel_runtime_corejs3_core_js_stable_instance_starts_with__WEBPACK_IMPORTED_MODULE_1___default()(value).call(value, 'Next')) {
      return ['', value].join(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_5__["SEPARATOR"]);
    }
    return src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_5__["SEPARATOR"];
  }
  function onChange(control, value) {
    if (control === 'since') {
      props.onChange(`${value}${src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_5__["SEPARATOR"]}${until}`);
    } else
    {
      props.onChange(`${since}${src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_5__["SEPARATOR"]}${value}`);
    }
  }
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", { className: "section-title" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Configure Advanced Time Range '),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_DateFunctionTooltip__WEBPACK_IMPORTED_MODULE_8__["default"], { placement: "rightBottom" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])("i", { className: "fa fa-info-circle text-muted" }))),


  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", { className: "control-label" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('START (INCLUSIVE)'), ' ',
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_7__["InfoTooltipWithTrigger"], { tooltip: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Start date included in time range'), placement: "right" })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_6__["Input"], { key: "since", value: since, onChange: e => onChange('since', e.target.value) }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", { className: "control-label" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('END (EXCLUSIVE)'), ' ',
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_7__["InfoTooltipWithTrigger"], { tooltip: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('End date excluded from time range'), placement: "right" })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_6__["Input"], { key: "until", value: until, onChange: e => onChange('until', e.target.value) }));

};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(AdvancedFrame, "AdvancedFrame", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\components\\AdvancedFrame.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/explore/components/controls/DateFilterControl/components/CalendarFrame.tsx":
/*!****************************************************************************************!*\
  !*** ./src/explore/components/controls/DateFilterControl/components/CalendarFrame.tsx ***!
  \****************************************************************************************/
/*! exports provided: CalendarFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarFrame", function() { return CalendarFrame; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var src_components_Radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/Radio */ "./src/components/Radio/index.tsx");
/* harmony import */ var src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/explore/components/controls/DateFilterControl/utils */ "./src/explore/components/controls/DateFilterControl/utils/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types */ "./src/explore/components/controls/DateFilterControl/types.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





function CalendarFrame(props) {
  let calendarRange = _types__WEBPACK_IMPORTED_MODULE_5__["PreviousCalendarWeek"];
  if (src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_RANGE_SET"].has(props.value)) {
    calendarRange = props.value;
  } else
  {
    props.onChange(calendarRange);
  }
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", { className: "section-title" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Configure Time Range: Previous...')),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(src_components_Radio__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, { value: calendarRange, onChange: e => props.onChange(e.target.value) },
  _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_RANGE_OPTIONS"]).call(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_RANGE_OPTIONS"], ({ value, label }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(src_components_Radio__WEBPACK_IMPORTED_MODULE_3__["Radio"], { key: value, value: value, className: "vertical-radio" },
  label))));



};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(CalendarFrame, "CalendarFrame", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\components\\CalendarFrame.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/explore/components/controls/DateFilterControl/components/CommonFrame.tsx":
/*!**************************************************************************************!*\
  !*** ./src/explore/components/controls/DateFilterControl/components/CommonFrame.tsx ***!
  \**************************************************************************************/
/*! exports provided: CommonFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonFrame", function() { return CommonFrame; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var src_components_Radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/Radio */ "./src/components/Radio/index.tsx");
/* harmony import */ var src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/explore/components/controls/DateFilterControl/utils */ "./src/explore/components/controls/DateFilterControl/utils/index.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




function CommonFrame(props) {
  let commonRange = 'Last week';
  if (src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_4__["COMMON_RANGE_SET"].has(props.value)) {
    commonRange = props.value;
  } else
  {
    props.onChange(commonRange);
  }
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", { className: "section-title" }, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Configure Time Range: Last...')),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(src_components_Radio__WEBPACK_IMPORTED_MODULE_3__["Radio"].Group, { value: commonRange, onChange: e => props.onChange(e.target.value) },
  _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_4__["COMMON_RANGE_OPTIONS"]).call(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_4__["COMMON_RANGE_OPTIONS"], ({ value, label }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(src_components_Radio__WEBPACK_IMPORTED_MODULE_3__["Radio"], { key: value, value: value, className: "vertical-radio" },
  label))));



};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(CommonFrame, "CommonFrame", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\components\\CommonFrame.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/explore/components/controls/DateFilterControl/components/CustomFrame.tsx":
/*!**************************************************************************************!*\
  !*** ./src/explore/components/controls/DateFilterControl/components/CustomFrame.tsx ***!
  \**************************************************************************************/
/*! exports provided: CustomFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFrame", function() { return CustomFrame; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isInteger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isInteger */ "./node_modules/lodash/isInteger.js");
/* harmony import */ var lodash_isInteger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isInteger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/common/components */ "./src/common/components/index.tsx");
/* harmony import */ var src_components_DatePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/DatePicker */ "./src/components/DatePicker/index.tsx");
/* harmony import */ var src_components_Radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Radio */ "./src/components/Radio/index.tsx");
/* harmony import */ var src_components_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/Select */ "./src/components/Select/index.ts");
/* harmony import */ var _superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @superset-ui/chart-controls */ "./node_modules/@superset-ui/chart-controls/esm/components/InfoTooltipWithTrigger.js");
/* harmony import */ var src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/explore/components/controls/DateFilterControl/utils */ "./src/explore/components/controls/DateFilterControl/utils/index.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */









function CustomFrame(props) {
  const { customRange, matchedFlag } = Object(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["customTimeRangeDecode"])(props.value);
  if (!matchedFlag) {
    props.onChange(Object(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["customTimeRangeEncode"])(customRange));
  }
  const { sinceDatetime, sinceMode, sinceGrain, sinceGrainValue, untilDatetime, untilMode, untilGrain, untilGrainValue, anchorValue, anchorMode } = { ...customRange };
  function onChange(control, value) {
    props.onChange(Object(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["customTimeRangeEncode"])({
      ...customRange,
      [control]: value }));

  }
  function onGrainValue(control, value) {
    // only positive values in grainValue controls
    if (lodash_isInteger__WEBPACK_IMPORTED_MODULE_1___default()(value) && value > 0) {
      props.onChange(Object(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["customTimeRangeEncode"])({
        ...customRange,
        [control]: value }));

    }
  }
  function onAnchorMode(option) {
    const radioValue = option.target.value;
    if (radioValue === 'now') {
      props.onChange(Object(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["customTimeRangeEncode"])({
        ...customRange,
        anchorValue: 'now',
        anchorMode: radioValue }));

    } else
    {
      props.onChange(Object(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["customTimeRangeEncode"])({
        ...customRange,
        anchorValue: src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["MIDNIGHT"],
        anchorMode: radioValue }));

    }
  }
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", { "data-test": "custom-frame" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", { className: "section-title" }, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["t"])('Configure custom time range')),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["Row"], { gutter: 24 },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["Col"], { span: 12 },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", { className: "control-label" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["t"])('START (INCLUSIVE)'), ' ',
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_8__["InfoTooltipWithTrigger"], { tooltip: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["t"])('Start date included in time range'), placement: "right" })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_components_Select__WEBPACK_IMPORTED_MODULE_7__["Select"], { options: src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["SINCE_MODE_OPTIONS"], value: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["SINCE_MODE_OPTIONS"]).call(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["SINCE_MODE_OPTIONS"], option => option.value === sinceMode), onChange: option => onChange('sinceMode', option.value) }),
  sinceMode === 'specific' && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["Row"], null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_components_DatePicker__WEBPACK_IMPORTED_MODULE_5__["DatePicker"], { showTime: true, defaultValue: Object(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["dttmToMoment"])(sinceDatetime), onChange: datetime => onChange('sinceDatetime', datetime.format(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["MOMENT_FORMAT"])), allowClear: false })),

  sinceMode === 'relative' && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["Row"], { gutter: 8 },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["Col"], { span: 11 },

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["InputNumber"], { placeholder: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["t"])('Relative quantity'), value: Math.abs(sinceGrainValue), min: 1, defaultValue: 1, onChange: value => onGrainValue('sinceGrainValue', value || 1), onStep: value => onGrainValue('sinceGrainValue', value || 1) })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["Col"], { span: 13 },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_components_Select__WEBPACK_IMPORTED_MODULE_7__["Select"], { options: src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["SINCE_GRAIN_OPTIONS"], value: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["SINCE_GRAIN_OPTIONS"]).call(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["SINCE_GRAIN_OPTIONS"], option => option.value === sinceGrain), onChange: option => onChange('sinceGrain', option.value) })))),



  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["Col"], { span: 12 },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", { className: "control-label" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["t"])('END (EXCLUSIVE)'), ' ',
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_8__["InfoTooltipWithTrigger"], { tooltip: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["t"])('End date excluded from time range'), placement: "right" })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_components_Select__WEBPACK_IMPORTED_MODULE_7__["Select"], { options: src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["UNTIL_MODE_OPTIONS"], value: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["UNTIL_MODE_OPTIONS"]).call(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["UNTIL_MODE_OPTIONS"], option => option.value === untilMode), onChange: option => onChange('untilMode', option.value) }),
  untilMode === 'specific' && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["Row"], null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_components_DatePicker__WEBPACK_IMPORTED_MODULE_5__["DatePicker"], { showTime: true, defaultValue: Object(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["dttmToMoment"])(untilDatetime), onChange: datetime => onChange('untilDatetime', datetime.format(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["MOMENT_FORMAT"])), allowClear: false })),

  untilMode === 'relative' && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["Row"], { gutter: 8 },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["Col"], { span: 11 },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["InputNumber"], { placeholder: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["t"])('Relative quantity'), value: untilGrainValue, min: 1, defaultValue: 1, onChange: value => onGrainValue('untilGrainValue', value || 1), onStep: value => onGrainValue('untilGrainValue', value || 1) })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["Col"], { span: 13 },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_components_Select__WEBPACK_IMPORTED_MODULE_7__["Select"], { options: src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["UNTIL_GRAIN_OPTIONS"], value: _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_0___default()(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["UNTIL_GRAIN_OPTIONS"]).call(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["UNTIL_GRAIN_OPTIONS"], option => option.value === untilGrain), onChange: option => onChange('untilGrain', option.value) }))))),




  sinceMode === 'relative' && untilMode === 'relative' && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", { className: "control-anchor-to" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", { className: "control-label" }, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["t"])('Anchor to')),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["Row"], { align: "middle" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["Col"], null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_components_Radio__WEBPACK_IMPORTED_MODULE_6__["Radio"].Group, { onChange: onAnchorMode, defaultValue: "now", value: anchorMode },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_components_Radio__WEBPACK_IMPORTED_MODULE_6__["Radio"], { key: "now", value: "now" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["t"])('NOW')),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_components_Radio__WEBPACK_IMPORTED_MODULE_6__["Radio"], { key: "specific", value: "specific" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["t"])('Date/Time')))),



  anchorMode !== 'now' && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["Col"], null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_components_DatePicker__WEBPACK_IMPORTED_MODULE_5__["DatePicker"], { showTime: true, defaultValue: Object(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["dttmToMoment"])(anchorValue), onChange: datetime => onChange('anchorValue', datetime.format(src_explore_components_controls_DateFilterControl_utils__WEBPACK_IMPORTED_MODULE_9__["MOMENT_FORMAT"])), allowClear: false, className: "control-anchor-to-datetime" })))));




};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(CustomFrame, "CustomFrame", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\components\\CustomFrame.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/explore/components/controls/DateFilterControl/components/DateFunctionTooltip.tsx":
/*!**********************************************************************************************!*\
  !*** ./src/explore/components/controls/DateFilterControl/components/DateFunctionTooltip.tsx ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateFunctionTooltip; });
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ "./node_modules/@babel/runtime-corejs3/helpers/extends.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Tooltip */ "./src/components/Tooltip/index.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




const TIME_PICKER_HELPER = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h3", null, "DATETIME"),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Return to specific datetime.')),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h4", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Syntax')),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("pre", null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("code", null, "datetime([string])")),

Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h4", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Example')),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("pre", null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("code", null, `datetime("2020-03-01 12:00:00")
datetime("now")
datetime("last year")`))),


Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h3", null, "DATEADD"),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Moves the given set of dates by a specified interval.')),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h4", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Syntax')),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("pre", null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("code", null, `dateadd([datetime], [integer], [dateunit])
dateunit = (year | quarter | month | week | day | hour | minute | second)`)),

Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h4", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Example')),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("pre", null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("code", null, `dateadd(datetime("today"), -13, day)
dateadd(datetime("2020-03-01"), 2, day)`))),


Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h3", null, "DATETRUNC"),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", null,
Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Truncates the specified date to the accuracy specified by the date unit.')),

Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h4", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Syntax')),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("pre", null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("code", null, `datetrunc([datetime], [dateunit])
dateunit = (year | month | week)`)),

Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h4", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Example')),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("pre", null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("code", null, `datetrunc(datetime("2020-03-01"), week)
datetrunc(datetime("2020-03-01"), month)`))),


Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h3", null, "LASTDAY"),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Get the last date by the date unit.')),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h4", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Syntax')),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("pre", null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("code", null, `lastday([datetime], [dateunit])
dateunit = (year | month | week)`)),

Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h4", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Example')),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("pre", null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("code", null, "lastday(datetime(\"today\"), month)"))),


Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h3", null, "HOLIDAY"),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Get the specify date for the holiday')),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h4", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Syntax')),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("pre", null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("code", null, `holiday([string])
holiday([holiday string], [datetime])
holiday([holiday string], [datetime], [country name])`)),

Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h4", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Example')),
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("pre", null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("code", null, `holiday("new year")
holiday("christmas", datetime("2019"))
holiday("christmas", dateadd(datetime("2019"), 1, year))
holiday("christmas", datetime("2 years ago"))
holiday("Easter Monday", datetime("2019"), "UK")`))));



const StyledTooltip = props => {
  const theme = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["ClassNames"], null,
  ({ css }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ overlayClassName: css`
            .ant-tooltip-content {
              min-width: ${theme.gridUnit * 125}px;
              max-height: 410px;
              overflow-y: scroll;

              .ant-tooltip-inner {
                max-width: ${theme.gridUnit * 125}px;
                h3 {
                  font-size: ${theme.typography.sizes.m}px;
                  font-weight: ${theme.typography.weights.bold};
                }
                h4 {
                  font-size: ${theme.typography.sizes.m}px;
                  font-weight: ${theme.typography.weights.bold};
                }
                pre {
                  border: none;
                  text-align: left;
                  word-break: break-word;
                  font-size: ${theme.typography.sizes.s}px;
                }
              }
            }
          ` }, props)));

};__signature__(StyledTooltip, "useTheme{theme}", () => [_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"]]);
function DateFunctionTooltip(props) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(StyledTooltip, _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ title: TIME_PICKER_HELPER }, props));
};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(TIME_PICKER_HELPER, "TIME_PICKER_HELPER", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\components\\DateFunctionTooltip.tsx");reactHotLoader.register(StyledTooltip, "StyledTooltip", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\components\\DateFunctionTooltip.tsx");reactHotLoader.register(DateFunctionTooltip, "DateFunctionTooltip", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\components\\DateFunctionTooltip.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/explore/components/controls/DateFilterControl/components/index.ts":
/*!*******************************************************************************!*\
  !*** ./src/explore/components/controls/DateFilterControl/components/index.ts ***!
  \*******************************************************************************/
/*! exports provided: CommonFrame, CalendarFrame, CustomFrame, AdvancedFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommonFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonFrame */ "./src/explore/components/controls/DateFilterControl/components/CommonFrame.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonFrame", function() { return _CommonFrame__WEBPACK_IMPORTED_MODULE_0__["CommonFrame"]; });

/* harmony import */ var _CalendarFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendarFrame */ "./src/explore/components/controls/DateFilterControl/components/CalendarFrame.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarFrame", function() { return _CalendarFrame__WEBPACK_IMPORTED_MODULE_1__["CalendarFrame"]; });

/* harmony import */ var _CustomFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomFrame */ "./src/explore/components/controls/DateFilterControl/components/CustomFrame.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomFrame", function() { return _CustomFrame__WEBPACK_IMPORTED_MODULE_2__["CustomFrame"]; });

/* harmony import */ var _AdvancedFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdvancedFrame */ "./src/explore/components/controls/DateFilterControl/components/AdvancedFrame.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdvancedFrame", function() { return _AdvancedFrame__WEBPACK_IMPORTED_MODULE_3__["AdvancedFrame"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */





/***/ }),

/***/ "./src/explore/components/controls/DateFilterControl/index.ts":
/*!********************************************************************!*\
  !*** ./src/explore/components/controls/DateFilterControl/index.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateFilterLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateFilterLabel */ "./src/explore/components/controls/DateFilterControl/DateFilterLabel.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DateFilterLabel__WEBPACK_IMPORTED_MODULE_0__["default"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


/***/ }),

/***/ "./src/explore/components/controls/DateFilterControl/types.ts":
/*!********************************************************************!*\
  !*** ./src/explore/components/controls/DateFilterControl/types.ts ***!
  \********************************************************************/
/*! exports provided: PreviousCalendarWeek, PreviousCalendarMonth, PreviousCalendarYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousCalendarWeek", function() { return PreviousCalendarWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousCalendarMonth", function() { return PreviousCalendarMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousCalendarYear", function() { return PreviousCalendarYear; });
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;};const PreviousCalendarWeek = 'previous calendar week';
const PreviousCalendarMonth = 'previous calendar month';
const PreviousCalendarYear = 'previous calendar year';;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(PreviousCalendarWeek, "PreviousCalendarWeek", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\types.ts");reactHotLoader.register(PreviousCalendarMonth, "PreviousCalendarMonth", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\types.ts");reactHotLoader.register(PreviousCalendarYear, "PreviousCalendarYear", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\types.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/explore/components/controls/DateFilterControl/utils/constants.ts":
/*!******************************************************************************!*\
  !*** ./src/explore/components/controls/DateFilterControl/utils/constants.ts ***!
  \******************************************************************************/
/*! exports provided: FRAME_OPTIONS, COMMON_RANGE_OPTIONS, COMMON_RANGE_VALUES_SET, CALENDAR_RANGE_OPTIONS, CALENDAR_RANGE_VALUES_SET, SINCE_GRAIN_OPTIONS, UNTIL_GRAIN_OPTIONS, SINCE_MODE_OPTIONS, UNTIL_MODE_OPTIONS, COMMON_RANGE_SET, CALENDAR_RANGE_SET, MOMENT_FORMAT, SEVEN_DAYS_AGO, MIDNIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRAME_OPTIONS", function() { return FRAME_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON_RANGE_OPTIONS", function() { return COMMON_RANGE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON_RANGE_VALUES_SET", function() { return COMMON_RANGE_VALUES_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_RANGE_OPTIONS", function() { return CALENDAR_RANGE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_RANGE_VALUES_SET", function() { return CALENDAR_RANGE_VALUES_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINCE_GRAIN_OPTIONS", function() { return SINCE_GRAIN_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNTIL_GRAIN_OPTIONS", function() { return UNTIL_GRAIN_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINCE_MODE_OPTIONS", function() { return SINCE_MODE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNTIL_MODE_OPTIONS", function() { return UNTIL_MODE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON_RANGE_SET", function() { return COMMON_RANGE_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_RANGE_SET", function() { return CALENDAR_RANGE_SET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOMENT_FORMAT", function() { return MOMENT_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEVEN_DAYS_AGO", function() { return SEVEN_DAYS_AGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIDNIGHT", function() { return MIDNIGHT; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set */ "./node_modules/@babel/runtime-corejs3/core-js-stable/set.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var src_explore_components_controls_DateFilterControl_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/explore/components/controls/DateFilterControl/types */ "./src/explore/components/controls/DateFilterControl/types.ts");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



const FRAME_OPTIONS = [
{ value: 'Common', label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Last') },
{ value: 'Calendar', label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Previous') },
{ value: 'Custom', label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Custom') },
{ value: 'Advanced', label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Advanced') },
{ value: 'No filter', label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('No filter') }];

const COMMON_RANGE_OPTIONS = [
{ value: 'Last day', label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('last day') },
{ value: 'Last week', label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('last week') },
{ value: 'Last month', label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('last month') },
{ value: 'Last quarter', label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('last quarter') },
{ value: 'Last year', label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('last year') }];

const COMMON_RANGE_VALUES_SET = new _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2___default.a(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(COMMON_RANGE_OPTIONS).call(COMMON_RANGE_OPTIONS, ({ value }) => value));
const CALENDAR_RANGE_OPTIONS = [
{ value: src_explore_components_controls_DateFilterControl_types__WEBPACK_IMPORTED_MODULE_5__["PreviousCalendarWeek"], label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('previous calendar week') },
{ value: src_explore_components_controls_DateFilterControl_types__WEBPACK_IMPORTED_MODULE_5__["PreviousCalendarMonth"], label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('previous calendar month') },
{ value: src_explore_components_controls_DateFilterControl_types__WEBPACK_IMPORTED_MODULE_5__["PreviousCalendarYear"], label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('previous calendar year') }];

const CALENDAR_RANGE_VALUES_SET = new _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2___default.a(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(CALENDAR_RANGE_OPTIONS).call(CALENDAR_RANGE_OPTIONS, ({ value }) => value));
const GRAIN_OPTIONS = [
{ value: 'second', label: rel => `${Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Seconds')} ${rel}` },
{ value: 'minute', label: rel => `${Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Minutes')} ${rel}` },
{ value: 'hour', label: rel => `${Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Hours')} ${rel}` },
{ value: 'day', label: rel => `${Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Days')} ${rel}` },
{ value: 'week', label: rel => `${Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Weeks')} ${rel}` },
{ value: 'month', label: rel => `${Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Months')} ${rel}` },
{ value: 'quarter', label: rel => `${Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Quarters')} ${rel}` },
{ value: 'year', label: rel => `${Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Years')} ${rel}` }];

const SINCE_GRAIN_OPTIONS = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(GRAIN_OPTIONS).call(GRAIN_OPTIONS, item => ({
  value: item.value,
  label: item.label(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Before')) }));

const UNTIL_GRAIN_OPTIONS = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(GRAIN_OPTIONS).call(GRAIN_OPTIONS, item => ({
  value: item.value,
  label: item.label(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('After')) }));

const SINCE_MODE_OPTIONS = [
{ value: 'specific', label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Specific Date/Time') },
{ value: 'relative', label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Relative Date/Time') },
{ value: 'now', label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Now') },
{ value: 'today', label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Midnight') }];

const UNTIL_MODE_OPTIONS = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_0___default()(SINCE_MODE_OPTIONS).call(SINCE_MODE_OPTIONS);
const COMMON_RANGE_SET = new _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2___default.a([
'Last day',
'Last week',
'Last month',
'Last quarter',
'Last year']);

const CALENDAR_RANGE_SET = new _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2___default.a([
src_explore_components_controls_DateFilterControl_types__WEBPACK_IMPORTED_MODULE_5__["PreviousCalendarWeek"],
src_explore_components_controls_DateFilterControl_types__WEBPACK_IMPORTED_MODULE_5__["PreviousCalendarMonth"],
src_explore_components_controls_DateFilterControl_types__WEBPACK_IMPORTED_MODULE_5__["PreviousCalendarYear"]]);

const MOMENT_FORMAT = 'YYYY-MM-DD[T]HH:mm:ss';
const SEVEN_DAYS_AGO = moment__WEBPACK_IMPORTED_MODULE_3___default()().
utc().
startOf('day').
subtract(7, 'days').
format(MOMENT_FORMAT);
const MIDNIGHT = moment__WEBPACK_IMPORTED_MODULE_3___default()().utc().startOf('day').format(MOMENT_FORMAT);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(FRAME_OPTIONS, "FRAME_OPTIONS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\constants.ts");reactHotLoader.register(COMMON_RANGE_OPTIONS, "COMMON_RANGE_OPTIONS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\constants.ts");reactHotLoader.register(COMMON_RANGE_VALUES_SET, "COMMON_RANGE_VALUES_SET", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\constants.ts");reactHotLoader.register(CALENDAR_RANGE_OPTIONS, "CALENDAR_RANGE_OPTIONS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\constants.ts");reactHotLoader.register(CALENDAR_RANGE_VALUES_SET, "CALENDAR_RANGE_VALUES_SET", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\constants.ts");reactHotLoader.register(GRAIN_OPTIONS, "GRAIN_OPTIONS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\constants.ts");reactHotLoader.register(SINCE_GRAIN_OPTIONS, "SINCE_GRAIN_OPTIONS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\constants.ts");reactHotLoader.register(UNTIL_GRAIN_OPTIONS, "UNTIL_GRAIN_OPTIONS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\constants.ts");reactHotLoader.register(SINCE_MODE_OPTIONS, "SINCE_MODE_OPTIONS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\constants.ts");reactHotLoader.register(UNTIL_MODE_OPTIONS, "UNTIL_MODE_OPTIONS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\constants.ts");reactHotLoader.register(COMMON_RANGE_SET, "COMMON_RANGE_SET", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\constants.ts");reactHotLoader.register(CALENDAR_RANGE_SET, "CALENDAR_RANGE_SET", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\constants.ts");reactHotLoader.register(MOMENT_FORMAT, "MOMENT_FORMAT", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\constants.ts");reactHotLoader.register(SEVEN_DAYS_AGO, "SEVEN_DAYS_AGO", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\constants.ts");reactHotLoader.register(MIDNIGHT, "MIDNIGHT", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\constants.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/explore/components/controls/DateFilterControl/utils/dateFilterUtils.ts":
/*!************************************************************************************!*\
  !*** ./src/explore/components/controls/DateFilterControl/utils/dateFilterUtils.ts ***!
  \************************************************************************************/
/*! exports provided: SEPARATOR, buildTimeRangeString, formatTimeRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEPARATOR", function() { return SEPARATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTimeRangeString", function() { return buildTimeRangeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeRange", function() { return formatTimeRange; });
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;};const SEPARATOR = ' : ';
const buildTimeRangeString = (since, until) => `${since}${SEPARATOR}${until}`;
const formatDateEndpoint = (dttm, isStart) => dttm.replace('T00:00:00', '') || (isStart ? '-∞' : '∞');
const formatTimeRange = (timeRange, endpoints) => {var _context;
  const splitDateRange = timeRange.split(SEPARATOR);
  if (splitDateRange.length === 1)
  return timeRange;
  const formattedEndpoints = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context = endpoints || ['unknown', 'unknown']).call(_context, endpoint => endpoint === 'inclusive' ? '≤' : '<');
  return `${formatDateEndpoint(splitDateRange[0], true)} ${formattedEndpoints[0]} col ${formattedEndpoints[1]} ${formatDateEndpoint(splitDateRange[1])}`;
};;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(SEPARATOR, "SEPARATOR", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateFilterUtils.ts");reactHotLoader.register(buildTimeRangeString, "buildTimeRangeString", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateFilterUtils.ts");reactHotLoader.register(formatDateEndpoint, "formatDateEndpoint", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateFilterUtils.ts");reactHotLoader.register(formatTimeRange, "formatTimeRange", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateFilterUtils.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/explore/components/controls/DateFilterControl/utils/dateParser.ts":
/*!*******************************************************************************!*\
  !*** ./src/explore/components/controls/DateFilterControl/utils/dateParser.ts ***!
  \*******************************************************************************/
/*! exports provided: ISO8601_AND_CONSTANT, dttmToMoment, dttmToString, customTimeRangeDecode, customTimeRangeEncode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ISO8601_AND_CONSTANT", function() { return ISO8601_AND_CONSTANT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dttmToMoment", function() { return dttmToMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dttmToString", function() { return dttmToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customTimeRangeDecode", function() { return customTimeRangeDecode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customTimeRangeEncode", function() { return customTimeRangeEncode; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_string_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/string/raw */ "./node_modules/@babel/runtime-corejs3/core-js-stable/string/raw.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_string_raw__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_string_raw__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _dateFilterUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dateFilterUtils */ "./src/explore/components/controls/DateFilterControl/utils/dateFilterUtils.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./src/explore/components/controls/DateFilterControl/utils/constants.ts");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/**
 * RegExp to test a string for a full ISO 8601 Date
 * Does not do any sort of date validation, only checks if the string is according to the ISO 8601 spec.
 *  YYYY-MM-DDThh:mm:ss
 *  YYYY-MM-DDThh:mm:ssTZD
 *  YYYY-MM-DDThh:mm:ss.sTZD
 * @see: https://www.w3.org/TR/NOTE-datetime
 */
const iso8601 = _babel_runtime_corejs3_core_js_stable_string_raw__WEBPACK_IMPORTED_MODULE_4___default.a`\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?(?:(?:[+-]\d\d:\d\d)|Z)?`;
const datetimeConstant = _babel_runtime_corejs3_core_js_stable_string_raw__WEBPACK_IMPORTED_MODULE_4___default.a`TODAY|NOW`;
const grainValue = _babel_runtime_corejs3_core_js_stable_string_raw__WEBPACK_IMPORTED_MODULE_4___default.a`[+-]?[1-9][0-9]*`;
const grain = _babel_runtime_corejs3_core_js_stable_string_raw__WEBPACK_IMPORTED_MODULE_4___default.a`YEAR|QUARTER|MONTH|WEEK|DAY|HOUR|MINUTE|SECOND`;
const CUSTOM_RANGE_EXPRESSION = RegExp(_babel_runtime_corejs3_core_js_stable_string_raw__WEBPACK_IMPORTED_MODULE_4___default.a`^DATEADD\(DATETIME\("(${iso8601}|${datetimeConstant})"\),\s(${grainValue}),\s(${grain})\)$`, 'i');
const ISO8601_AND_CONSTANT = RegExp(_babel_runtime_corejs3_core_js_stable_string_raw__WEBPACK_IMPORTED_MODULE_4___default.a`^${iso8601}$|^${datetimeConstant}$`, 'i');
const DATETIME_CONSTANT = ['now', 'today'];
const defaultCustomRange = {
  sinceDatetime: _constants__WEBPACK_IMPORTED_MODULE_7__["SEVEN_DAYS_AGO"],
  sinceMode: 'relative',
  sinceGrain: 'day',
  sinceGrainValue: -7,
  untilDatetime: _constants__WEBPACK_IMPORTED_MODULE_7__["MIDNIGHT"],
  untilMode: 'specific',
  untilGrain: 'day',
  untilGrainValue: 7,
  anchorMode: 'now',
  anchorValue: 'now' };

const SPECIFIC_MODE = ['specific', 'today', 'now'];
const dttmToMoment = dttm => {
  if (dttm === 'now') {
    return moment__WEBPACK_IMPORTED_MODULE_5___default()().utc().startOf('second');
  }
  if (dttm === 'today') {
    return moment__WEBPACK_IMPORTED_MODULE_5___default()().utc().startOf('day');
  }
  return moment__WEBPACK_IMPORTED_MODULE_5___default()(dttm);
};
const dttmToString = dttm => dttmToMoment(dttm).format(_constants__WEBPACK_IMPORTED_MODULE_7__["MOMENT_FORMAT"]);
const customTimeRangeDecode = timeRange => {
  const splitDateRange = timeRange.split(_dateFilterUtils__WEBPACK_IMPORTED_MODULE_6__["SEPARATOR"]);
  if (splitDateRange.length === 2) {
    const [since, until] = splitDateRange;
    // specific : specific
    if (ISO8601_AND_CONSTANT.test(since) && ISO8601_AND_CONSTANT.test(until)) {
      const sinceMode = _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3___default()(DATETIME_CONSTANT).call(DATETIME_CONSTANT, since) ?
      since :
      'specific';
      const untilMode = _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3___default()(DATETIME_CONSTANT).call(DATETIME_CONSTANT, until) ?
      until :
      'specific';
      return {
        customRange: {
          ...defaultCustomRange,
          sinceDatetime: since,
          untilDatetime: until,
          sinceMode,
          untilMode },

        matchedFlag: true };

    }
    // relative : specific
    const sinceCapturedGroup = since.match(CUSTOM_RANGE_EXPRESSION);
    if (sinceCapturedGroup &&
    ISO8601_AND_CONSTANT.test(until) &&
    _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3___default()(since).call(since, until)) {
      const [dttm, grainValue, grain] = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default()(sinceCapturedGroup).call(sinceCapturedGroup, 1);
      const untilMode = _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3___default()(DATETIME_CONSTANT).call(DATETIME_CONSTANT, until) ?
      until :
      'specific';
      return {
        customRange: {
          ...defaultCustomRange,
          sinceGrain: grain,
          sinceGrainValue: _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(grainValue, 10),
          sinceDatetime: dttm,
          untilDatetime: dttm,
          sinceMode: 'relative',
          untilMode },

        matchedFlag: true };

    }
    // specific : relative
    const untilCapturedGroup = until.match(CUSTOM_RANGE_EXPRESSION);
    if (ISO8601_AND_CONSTANT.test(since) &&
    untilCapturedGroup &&
    _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3___default()(until).call(until, since)) {
      const [dttm, grainValue, grain] = [..._babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default()(untilCapturedGroup).call(untilCapturedGroup, 1)];
      const sinceMode = _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3___default()(DATETIME_CONSTANT).call(DATETIME_CONSTANT, since) ?
      since :
      'specific';
      return {
        customRange: {
          ...defaultCustomRange,
          untilGrain: grain,
          untilGrainValue: _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(grainValue, 10),
          sinceDatetime: dttm,
          untilDatetime: dttm,
          untilMode: 'relative',
          sinceMode },

        matchedFlag: true };

    }
    // relative : relative
    if (sinceCapturedGroup && untilCapturedGroup) {
      const [sinceDttm, sinceGrainValue, sinceGrain] = [
      ..._babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default()(sinceCapturedGroup).call(sinceCapturedGroup, 1)];

      const [untileDttm, untilGrainValue, untilGrain] = [
      ..._babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default()(untilCapturedGroup).call(untilCapturedGroup, 1)];

      if (sinceDttm === untileDttm) {
        return {
          customRange: {
            ...defaultCustomRange,
            sinceGrain: sinceGrain,
            sinceGrainValue: _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(sinceGrainValue, 10),
            sinceDatetime: sinceDttm,
            untilGrain: untilGrain,
            untilGrainValue: _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(untilGrainValue, 10),
            untilDatetime: untileDttm,
            anchorValue: sinceDttm,
            sinceMode: 'relative',
            untilMode: 'relative',
            anchorMode: sinceDttm === 'now' ? 'now' : 'specific' },

          matchedFlag: true };

      }
    }
  }
  return {
    customRange: defaultCustomRange,
    matchedFlag: false };

};
const customTimeRangeEncode = customRange => {
  const { sinceDatetime, sinceMode, sinceGrain, sinceGrainValue, untilDatetime, untilMode, untilGrain, untilGrainValue, anchorValue } = { ...customRange };
  // specific : specific
  if (_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3___default()(SPECIFIC_MODE).call(SPECIFIC_MODE, sinceMode) && _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3___default()(SPECIFIC_MODE).call(SPECIFIC_MODE, untilMode)) {
    const since = sinceMode === 'specific' ? dttmToString(sinceDatetime) : sinceMode;
    const until = untilMode === 'specific' ? dttmToString(untilDatetime) : untilMode;
    return `${since} : ${until}`;
  }
  // specific : relative
  if (_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3___default()(SPECIFIC_MODE).call(SPECIFIC_MODE, sinceMode) && untilMode === 'relative') {
    const since = sinceMode === 'specific' ? dttmToString(sinceDatetime) : sinceMode;
    const until = `DATEADD(DATETIME("${since}"), ${untilGrainValue}, ${untilGrain})`;
    return `${since} : ${until}`;
  }
  // relative : specific
  if (sinceMode === 'relative' && _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_3___default()(SPECIFIC_MODE).call(SPECIFIC_MODE, untilMode)) {
    const until = untilMode === 'specific' ? dttmToString(untilDatetime) : untilMode;
    const since = `DATEADD(DATETIME("${until}"), ${-Math.abs(sinceGrainValue)}, ${sinceGrain})`;
    return `${since} : ${until}`;
  }
  // relative : relative
  const since = `DATEADD(DATETIME("${anchorValue}"), ${-Math.abs(sinceGrainValue)}, ${sinceGrain})`;
  const until = `DATEADD(DATETIME("${anchorValue}"), ${untilGrainValue}, ${untilGrain})`;
  return `${since} : ${until}`;
};;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(iso8601, "iso8601", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateParser.ts");reactHotLoader.register(datetimeConstant, "datetimeConstant", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateParser.ts");reactHotLoader.register(grainValue, "grainValue", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateParser.ts");reactHotLoader.register(grain, "grain", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateParser.ts");reactHotLoader.register(CUSTOM_RANGE_EXPRESSION, "CUSTOM_RANGE_EXPRESSION", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateParser.ts");reactHotLoader.register(ISO8601_AND_CONSTANT, "ISO8601_AND_CONSTANT", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateParser.ts");reactHotLoader.register(DATETIME_CONSTANT, "DATETIME_CONSTANT", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateParser.ts");reactHotLoader.register(defaultCustomRange, "defaultCustomRange", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateParser.ts");reactHotLoader.register(SPECIFIC_MODE, "SPECIFIC_MODE", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateParser.ts");reactHotLoader.register(dttmToMoment, "dttmToMoment", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateParser.ts");reactHotLoader.register(dttmToString, "dttmToString", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateParser.ts");reactHotLoader.register(customTimeRangeDecode, "customTimeRangeDecode", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateParser.ts");reactHotLoader.register(customTimeRangeEncode, "customTimeRangeEncode", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\components\\controls\\DateFilterControl\\utils\\dateParser.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/explore/components/controls/DateFilterControl/utils/index.ts":
/*!**************************************************************************!*\
  !*** ./src/explore/components/controls/DateFilterControl/utils/index.ts ***!
  \**************************************************************************/
/*! exports provided: ISO8601_AND_CONSTANT, dttmToMoment, dttmToString, customTimeRangeDecode, customTimeRangeEncode, FRAME_OPTIONS, COMMON_RANGE_OPTIONS, COMMON_RANGE_VALUES_SET, CALENDAR_RANGE_OPTIONS, CALENDAR_RANGE_VALUES_SET, SINCE_GRAIN_OPTIONS, UNTIL_GRAIN_OPTIONS, SINCE_MODE_OPTIONS, UNTIL_MODE_OPTIONS, COMMON_RANGE_SET, CALENDAR_RANGE_SET, MOMENT_FORMAT, SEVEN_DAYS_AGO, MIDNIGHT, SEPARATOR, buildTimeRangeString, formatTimeRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dateParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateParser */ "./src/explore/components/controls/DateFilterControl/utils/dateParser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ISO8601_AND_CONSTANT", function() { return _dateParser__WEBPACK_IMPORTED_MODULE_0__["ISO8601_AND_CONSTANT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dttmToMoment", function() { return _dateParser__WEBPACK_IMPORTED_MODULE_0__["dttmToMoment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dttmToString", function() { return _dateParser__WEBPACK_IMPORTED_MODULE_0__["dttmToString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customTimeRangeDecode", function() { return _dateParser__WEBPACK_IMPORTED_MODULE_0__["customTimeRangeDecode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customTimeRangeEncode", function() { return _dateParser__WEBPACK_IMPORTED_MODULE_0__["customTimeRangeEncode"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/explore/components/controls/DateFilterControl/utils/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FRAME_OPTIONS", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["FRAME_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMMON_RANGE_OPTIONS", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["COMMON_RANGE_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMMON_RANGE_VALUES_SET", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["COMMON_RANGE_VALUES_SET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_RANGE_OPTIONS", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_RANGE_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_RANGE_VALUES_SET", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_RANGE_VALUES_SET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SINCE_GRAIN_OPTIONS", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["SINCE_GRAIN_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UNTIL_GRAIN_OPTIONS", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["UNTIL_GRAIN_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SINCE_MODE_OPTIONS", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["SINCE_MODE_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UNTIL_MODE_OPTIONS", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["UNTIL_MODE_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COMMON_RANGE_SET", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["COMMON_RANGE_SET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_RANGE_SET", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_RANGE_SET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MOMENT_FORMAT", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["MOMENT_FORMAT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SEVEN_DAYS_AGO", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["SEVEN_DAYS_AGO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIDNIGHT", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["MIDNIGHT"]; });

/* harmony import */ var _dateFilterUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dateFilterUtils */ "./src/explore/components/controls/DateFilterControl/utils/dateFilterUtils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SEPARATOR", function() { return _dateFilterUtils__WEBPACK_IMPORTED_MODULE_2__["SEPARATOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildTimeRangeString", function() { return _dateFilterUtils__WEBPACK_IMPORTED_MODULE_2__["buildTimeRangeString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatTimeRange", function() { return _dateFilterUtils__WEBPACK_IMPORTED_MODULE_2__["formatTimeRange"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




/***/ }),

/***/ "./src/explore/constants.ts":
/*!**********************************!*\
  !*** ./src/explore/constants.ts ***!
  \**********************************/
/*! exports provided: AGGREGATES, AGGREGATES_OPTIONS, OPERATORS, OPERATORS_OPTIONS, TABLE_ONLY_OPERATORS, DRUID_ONLY_OPERATORS, HAVING_OPERATORS, MULTI_OPERATORS, CUSTOM_OPERATORS, DISABLE_INPUT_OPERATORS, sqlaAutoGeneratedMetricNameRegex, sqlaAutoGeneratedMetricRegex, druidAutoGeneratedMetricRegex, TIME_FILTER_LABELS, FILTER_CONFIG_ATTRIBUTES, FILTER_OPTIONS_LIMIT, TIME_FILTER_MAP, DEFAULT_TIME_RANGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGGREGATES", function() { return AGGREGATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGGREGATES_OPTIONS", function() { return AGGREGATES_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATORS", function() { return OPERATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATORS_OPTIONS", function() { return OPERATORS_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_ONLY_OPERATORS", function() { return TABLE_ONLY_OPERATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRUID_ONLY_OPERATORS", function() { return DRUID_ONLY_OPERATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAVING_OPERATORS", function() { return HAVING_OPERATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTI_OPERATORS", function() { return MULTI_OPERATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_OPERATORS", function() { return CUSTOM_OPERATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISABLE_INPUT_OPERATORS", function() { return DISABLE_INPUT_OPERATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlaAutoGeneratedMetricNameRegex", function() { return sqlaAutoGeneratedMetricNameRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlaAutoGeneratedMetricRegex", function() { return sqlaAutoGeneratedMetricRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "druidAutoGeneratedMetricRegex", function() { return druidAutoGeneratedMetricRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_FILTER_LABELS", function() { return TIME_FILTER_LABELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_CONFIG_ATTRIBUTES", function() { return FILTER_CONFIG_ATTRIBUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_OPTIONS_LIMIT", function() { return FILTER_OPTIONS_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_FILTER_MAP", function() { return TIME_FILTER_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TIME_RANGE", function() { return DEFAULT_TIME_RANGE; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set */ "./node_modules/@babel/runtime-corejs3/core-js-stable/set.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/values */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/values.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const AGGREGATES = {
  AVG: 'AVG',
  COUNT: 'COUNT',
  COUNT_DISTINCT: 'COUNT_DISTINCT',
  MAX: 'MAX',
  MIN: 'MIN',
  SUM: 'SUM' };

const AGGREGATES_OPTIONS = _babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_1___default()(AGGREGATES);
const OPERATORS = {
  '==': '==',
  '!=': '!=',
  '>': '>',
  '<': '<',
  '>=': '>=',
  '<=': '<=',
  IN: 'IN',
  'NOT IN': 'NOT IN',
  ILIKE: 'ILIKE',
  LIKE: 'LIKE',
  REGEX: 'REGEX',
  'IS NOT NULL': 'IS NOT NULL',
  'IS NULL': 'IS NULL',
  'LATEST PARTITION': 'LATEST PARTITION',
  'IS TRUE': 'IS TRUE',
  'IS FALSE': 'IS FALSE' };

const OPERATORS_OPTIONS = _babel_runtime_corejs3_core_js_stable_object_values__WEBPACK_IMPORTED_MODULE_1___default()(OPERATORS);
const TABLE_ONLY_OPERATORS = [OPERATORS.LIKE, OPERATORS.ILIKE];
const DRUID_ONLY_OPERATORS = [OPERATORS.REGEX];
const HAVING_OPERATORS = [
OPERATORS['=='],
OPERATORS['!='],
OPERATORS['>'],
OPERATORS['<'],
OPERATORS['>='],
OPERATORS['<=']];

const MULTI_OPERATORS = new _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_0___default.a([OPERATORS.IN, OPERATORS['NOT IN']]);
// CUSTOM_OPERATORS will show operator in simple mode,
// but will generate customized sqlExpression
const CUSTOM_OPERATORS = new _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_0___default.a([OPERATORS['LATEST PARTITION']]);
// DISABLE_INPUT_OPERATORS will disable filter value input
// in adhocFilter control
const DISABLE_INPUT_OPERATORS = [
OPERATORS['IS NOT NULL'],
OPERATORS['IS NULL'],
OPERATORS['LATEST PARTITION'],
OPERATORS['IS TRUE'],
OPERATORS['IS FALSE']];

const sqlaAutoGeneratedMetricNameRegex = /^(sum|min|max|avg|count|count_distinct)__.*$/i;
const sqlaAutoGeneratedMetricRegex = /^(LONG|DOUBLE|FLOAT)?(SUM|AVG|MAX|MIN|COUNT)\([A-Z0-9_."]*\)$/i;
const druidAutoGeneratedMetricRegex = /^(LONG|DOUBLE|FLOAT)?(SUM|MAX|MIN|COUNT)\([A-Z0-9_."]*\)$/i;
const TIME_FILTER_LABELS = {
  time_range: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Time range'),
  granularity_sqla: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Time column'),
  time_grain_sqla: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Time grain'),
  druid_time_origin: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Origin'),
  granularity: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Time granularity') };

const FILTER_CONFIG_ATTRIBUTES = {
  DEFAULT_VALUE: 'defaultValue',
  MULTIPLE: 'multiple',
  SEARCH_ALL_OPTIONS: 'searchAllOptions',
  CLEARABLE: 'clearable' };

const FILTER_OPTIONS_LIMIT = 1000;
/**
 * Map control names to their key in extra_filters
 */
const TIME_FILTER_MAP = {
  time_range: '__time_range',
  granularity_sqla: '__time_col',
  time_grain_sqla: '__time_grain',
  druid_time_origin: '__time_origin',
  granularity: '__granularity' };

// TODO: make this configurable per Superset installation
const DEFAULT_TIME_RANGE = 'No filter';;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(AGGREGATES, "AGGREGATES", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(AGGREGATES_OPTIONS, "AGGREGATES_OPTIONS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(OPERATORS, "OPERATORS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(OPERATORS_OPTIONS, "OPERATORS_OPTIONS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(TABLE_ONLY_OPERATORS, "TABLE_ONLY_OPERATORS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(DRUID_ONLY_OPERATORS, "DRUID_ONLY_OPERATORS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(HAVING_OPERATORS, "HAVING_OPERATORS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(MULTI_OPERATORS, "MULTI_OPERATORS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(CUSTOM_OPERATORS, "CUSTOM_OPERATORS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(DISABLE_INPUT_OPERATORS, "DISABLE_INPUT_OPERATORS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(sqlaAutoGeneratedMetricNameRegex, "sqlaAutoGeneratedMetricNameRegex", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(sqlaAutoGeneratedMetricRegex, "sqlaAutoGeneratedMetricRegex", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(druidAutoGeneratedMetricRegex, "druidAutoGeneratedMetricRegex", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(TIME_FILTER_LABELS, "TIME_FILTER_LABELS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(FILTER_CONFIG_ATTRIBUTES, "FILTER_CONFIG_ATTRIBUTES", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(FILTER_OPTIONS_LIMIT, "FILTER_OPTIONS_LIMIT", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(TIME_FILTER_MAP, "TIME_FILTER_MAP", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");reactHotLoader.register(DEFAULT_TIME_RANGE, "DEFAULT_TIME_RANGE", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\constants.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/explore/exploreUtils/index.js":
/*!*******************************************!*\
  !*** ./src/explore/exploreUtils/index.js ***!
  \*******************************************/
/*! exports provided: getChartKey, getHostName, getAnnotationJsonUrl, getURIDirectory, getExploreLongUrl, getChartDataUri, getExploreUrl, shouldUseLegacyApi, buildV1ChartDataPayload, getLegacyEndpointType, postForm, exportChart, exploreChart, useDebouncedEffect, getSimpleSQLExpression */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartKey", function() { return getChartKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHostName", function() { return getHostName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnnotationJsonUrl", function() { return getAnnotationJsonUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getURIDirectory", function() { return getURIDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExploreLongUrl", function() { return getExploreLongUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartDataUri", function() { return getChartDataUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExploreUrl", function() { return getExploreUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldUseLegacyApi", function() { return shouldUseLegacyApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildV1ChartDataPayload", function() { return buildV1ChartDataPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLegacyEndpointType", function() { return getLegacyEndpointType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postForm", function() { return postForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportChart", function() { return exportChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exploreChart", function() { return exploreChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDebouncedEffect", function() { return useDebouncedEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSimpleSQLExpression", function() { return getSimpleSQLExpression; });
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/number/is-nan */ "./node_modules/@babel/runtime-corejs3/core-js-stable/number/is-nan.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/is-array */ "./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set-timeout */ "./node_modules/@babel/runtime-corejs3/core-js-stable/set-timeout.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! urijs */ "./node_modules/urijs/src/URI.js");
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/chart/registries/ChartMetadataRegistrySingleton.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/chart/registries/ChartBuildQueryRegistrySingleton.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/query/buildQueryContext.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/utils/ensureIsArray.js");
/* harmony import */ var src_utils_hostNamesConfig__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/utils/hostNamesConfig */ "./src/utils/hostNamesConfig.js");
/* harmony import */ var src_utils_safeStringify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/utils/safeStringify */ "./src/utils/safeStringify.ts");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var src_explore_constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/explore/constants */ "./src/explore/constants.ts");
/* harmony import */ var src_dashboard_util_constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/dashboard/util/constants */ "./src/dashboard/util/constants.ts");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


/* eslint camelcase: 0 */








const MAX_URL_LENGTH = 8000;

function getChartKey(explore) {
  const { slice } = explore;
  return slice ? slice.slice_id : 0;
}

let requestCounter = 0;
function getHostName(allowDomainSharding = false) {
  let currentIndex = 0;
  if (allowDomainSharding) {
    currentIndex = requestCounter % src_utils_hostNamesConfig__WEBPACK_IMPORTED_MODULE_16__["availableDomains"].length;
    requestCounter += 1;

    // if domain sharding is enabled, skip main domain for fetching chart API
    // leave main domain free for other calls like fav star, save change, etc.
    // to make dashboard be responsive when it's loading large number of charts
    if (currentIndex === 0) {
      currentIndex += 1;
      requestCounter += 1;
    }
  }
  return src_utils_hostNamesConfig__WEBPACK_IMPORTED_MODULE_16__["availableDomains"][currentIndex];
}

function getAnnotationJsonUrl(slice_id, form_data, isNative, force) {
  if (slice_id === null || slice_id === undefined) {
    return null;
  }
  const uri = urijs__WEBPACK_IMPORTED_MODULE_11___default()(window.location.search);
  const endpoint = isNative ? 'annotation_json' : 'slice_json';
  return uri.
  pathname(`/superset/${endpoint}/${slice_id}`).
  search({
    form_data: Object(src_utils_safeStringify__WEBPACK_IMPORTED_MODULE_17__["safeStringify"])(form_data, (key, value) =>
    value === null ? undefined : value),

    force }).

  toString();
}

function getURIDirectory(endpointType = 'base') {var _context;
  // Building the directory part of the URI
  if (
  _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_9___default()(_context = ['full', 'json', 'csv', 'query', 'results', 'samples']).call(_context,
  endpointType))

  {
    return '/superset/explore_json/';
  }
  return '/superset/explore/';
}

function getExploreLongUrl(
formData,
endpointType,
allowOverflow = true,
extraSearch = {})
{var _context2;
  if (!formData.datasource) {
    return null;
  }

  const uri = new urijs__WEBPACK_IMPORTED_MODULE_11___default.a('/');
  const directory = getURIDirectory(endpointType);
  const search = uri.search(true);
  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default()(_context2 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(extraSearch)).call(_context2, key => {
    search[key] = extraSearch[key];
  });
  search.form_data = Object(src_utils_safeStringify__WEBPACK_IMPORTED_MODULE_17__["safeStringify"])(formData);
  if (endpointType === src_constants__WEBPACK_IMPORTED_MODULE_18__["URL_PARAMS"].standalone.name) {
    search.standalone = src_dashboard_util_constants__WEBPACK_IMPORTED_MODULE_20__["DashboardStandaloneMode"].HIDE_NAV;
  }
  const url = uri.directory(directory).search(search).toString();
  if (!allowOverflow && url.length > MAX_URL_LENGTH) {
    const minimalFormData = {
      datasource: formData.datasource,
      viz_type: formData.viz_type };

    return getExploreLongUrl(minimalFormData, endpointType, false, {
      URL_IS_TOO_LONG_TO_SHARE: null });

  }
  return url;
}

function getChartDataUri({ path, qs, allowDomainSharding = false }) {var _context3;
  // The search params from the window.location are carried through,
  // but can be specified with curUrl (used for unit tests to spoof
  // the window.location).
  let uri = new urijs__WEBPACK_IMPORTED_MODULE_11___default.a({
    protocol: _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_6___default()(_context3 = window.location.protocol).call(_context3, 0, -1),
    hostname: getHostName(allowDomainSharding),
    port: window.location.port ? window.location.port : '',
    path });

  if (qs) {
    uri = uri.search(qs);
  }
  return uri;
}

function getExploreUrl({
  formData,
  endpointType = 'base',
  force = false,
  curUrl = null,
  requestParams = {},
  allowDomainSharding = false,
  method = 'POST' })
{
  if (!formData.datasource) {
    return null;
  }
  let uri = getChartDataUri({ path: '/', allowDomainSharding });
  if (curUrl) {
    uri = urijs__WEBPACK_IMPORTED_MODULE_11___default()(urijs__WEBPACK_IMPORTED_MODULE_11___default()(curUrl).search());
  }

  const directory = getURIDirectory(endpointType);

  // Building the querystring (search) part of the URI
  const search = uri.search(true);
  const { slice_id, extra_filters, adhoc_filters, viz_type } = formData;
  if (slice_id) {
    const form_data = { slice_id };
    if (method === 'GET') {
      form_data.viz_type = viz_type;
      if (extra_filters && extra_filters.length) {
        form_data.extra_filters = extra_filters;
      }
      if (adhoc_filters && adhoc_filters.length) {
        form_data.adhoc_filters = adhoc_filters;
      }
    }
    search.form_data = Object(src_utils_safeStringify__WEBPACK_IMPORTED_MODULE_17__["safeStringify"])(form_data);
  }
  if (force) {
    search.force = 'true';
  }
  if (endpointType === 'csv') {
    search.csv = 'true';
  }
  if (endpointType === src_constants__WEBPACK_IMPORTED_MODULE_18__["URL_PARAMS"].standalone.name) {
    search.standalone = '1';
  }
  if (endpointType === 'query') {
    search.query = 'true';
  }
  if (endpointType === 'results') {
    search.results = 'true';
  }
  if (endpointType === 'samples') {
    search.samples = 'true';
  }
  const paramNames = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_7___default()(requestParams);
  if (paramNames.length) {
    _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_8___default()(paramNames).call(paramNames, name => {
      if (requestParams.hasOwnProperty(name)) {
        search[name] = requestParams[name];
      }
    });
  }
  return uri.search(search).directory(directory).toString();
}

const shouldUseLegacyApi = formData => {
  const vizMetadata = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__["default"])().get(formData.viz_type);
  return vizMetadata ? vizMetadata.useLegacyApi : false;
};

const buildV1ChartDataPayload = ({
  formData,
  force,
  resultFormat,
  resultType,
  setDataMask,
  ownState }) =>
{var _getChartBuildQueryRe;
  const buildQuery = (_getChartBuildQueryRe =
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_13__["default"])().get(formData.viz_type)) != null ? _getChartBuildQueryRe :
  (buildQueryformData) =>
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_14__["default"])(buildQueryformData, baseQueryObject => [
  {
    ...baseQueryObject }]);


  return buildQuery(
  {
    ...formData,
    force,
    result_format: resultFormat,
    result_type: resultType },

  {
    ownState,
    hooks: {
      setDataMask } });



};

const getLegacyEndpointType = ({ resultType, resultFormat }) =>
resultFormat === 'csv' ? resultFormat : resultType;

function postForm(url, payload, target = '_blank') {
  if (!url) {
    return;
  }

  const hiddenForm = document.createElement('form');
  hiddenForm.action = url;
  hiddenForm.method = 'POST';
  hiddenForm.target = target;
  const token = document.createElement('input');
  token.type = 'hidden';
  token.name = 'csrf_token';
  token.value = (document.getElementById('csrf_token') || {}).value;
  hiddenForm.appendChild(token);
  const data = document.createElement('input');
  data.type = 'hidden';
  data.name = 'form_data';
  data.value = Object(src_utils_safeStringify__WEBPACK_IMPORTED_MODULE_17__["safeStringify"])(payload);
  hiddenForm.appendChild(data);

  document.body.appendChild(hiddenForm);
  hiddenForm.submit();
  document.body.removeChild(hiddenForm);
}

const exportChart = ({
  formData,
  resultFormat = 'json',
  resultType = 'full',
  force = false,
  ownState = {} }) =>
{
  let url;
  let payload;
  if (shouldUseLegacyApi(formData)) {
    const endpointType = getLegacyEndpointType({ resultFormat, resultType });
    url = getExploreUrl({
      formData,
      endpointType,
      allowDomainSharding: false });

    payload = formData;
  } else {
    url = '/api/v1/chart/data';
    payload = buildV1ChartDataPayload({
      formData,
      force,
      resultFormat,
      resultType,
      ownState });

  }
  postForm(url, payload);
};

const exploreChart = formData => {
  const url = getExploreUrl({
    formData,
    endpointType: 'base',
    allowDomainSharding: false });

  postForm(url, formData);
};

const useDebouncedEffect = (effect, delay, deps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = Object(react__WEBPACK_IMPORTED_MODULE_10__["useCallback"])(effect, deps);

  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(() => {
    const handler = _babel_runtime_corejs3_core_js_stable_set_timeout__WEBPACK_IMPORTED_MODULE_5___default()(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
};__signature__(useDebouncedEffect, "useCallback{callback}\nuseEffect{}");

const getSimpleSQLExpression = (subject, operator, comparator) => {
  const isMulti = src_explore_constants__WEBPACK_IMPORTED_MODULE_19__["MULTI_OPERATORS"].has(operator);
  let expression = subject != null ? subject : '';
  if (subject && operator) {
    expression += ` ${operator}`;
    const firstValue =
    isMulti && _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_4___default()(comparator) ? comparator[0] : comparator;
    const comparatorArray = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_15__["default"])(comparator);
    const isString =
    firstValue !== undefined && _babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_3___default()(Number(firstValue));
    const quote = isString ? "'" : '';
    const [prefix, suffix] = isMulti ? ['(', ')'] : ['', ''];
    const formattedComparators = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(comparatorArray).call(comparatorArray,
    (val) =>
    `${quote}${isString ? String(val).replace("'", "''") : val}${quote}`);

    if (comparatorArray.length > 0) {
      expression += ` ${prefix}${formattedComparators.join(', ')}${suffix}`;
    }
  }
  return expression;
};;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(MAX_URL_LENGTH, "MAX_URL_LENGTH", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");reactHotLoader.register(getChartKey, "getChartKey", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");reactHotLoader.register(requestCounter, "requestCounter", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");reactHotLoader.register(getHostName, "getHostName", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");reactHotLoader.register(getAnnotationJsonUrl, "getAnnotationJsonUrl", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");reactHotLoader.register(getURIDirectory, "getURIDirectory", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");reactHotLoader.register(getExploreLongUrl, "getExploreLongUrl", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");reactHotLoader.register(getChartDataUri, "getChartDataUri", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");reactHotLoader.register(getExploreUrl, "getExploreUrl", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");reactHotLoader.register(shouldUseLegacyApi, "shouldUseLegacyApi", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");reactHotLoader.register(buildV1ChartDataPayload, "buildV1ChartDataPayload", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");reactHotLoader.register(getLegacyEndpointType, "getLegacyEndpointType", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");reactHotLoader.register(postForm, "postForm", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");reactHotLoader.register(exportChart, "exportChart", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");reactHotLoader.register(exploreChart, "exploreChart", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");reactHotLoader.register(useDebouncedEffect, "useDebouncedEffect", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");reactHotLoader.register(getSimpleSQLExpression, "getSimpleSQLExpression", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\explore\\exploreUtils\\index.js");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/filters/components/Time/TimeFilterPlugin.tsx":
/*!**********************************************************!*\
  !*** ./src/filters/components/Time/TimeFilterPlugin.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeFilterPlugin; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_explore_components_controls_DateFilterControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/explore/components/controls/DateFilterControl */ "./src/explore/components/controls/DateFilterControl/index.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./src/filters/components/common.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */




const DEFAULT_VALUE = 'Last week';
const TimeFilterStyles = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["styled"])(_common__WEBPACK_IMPORTED_MODULE_4__["Styles"])`
  overflow-x: scroll;
`;
const ControlContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["styled"].div`
  display: inline-block;
`;
function TimeFilterPlugin(props) {
  const { formData, setDataMask, setFocusedFilter, unsetFocusedFilter, width, filterState } = props;
  const { defaultValue } = formData;
  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultValue != null ? defaultValue : DEFAULT_VALUE);
  const handleTimeRangeChange = timeRange => {
    setValue(timeRange);
    setDataMask({
      extraFormData: {
        time_range: timeRange },

      filterState: { value: timeRange } });

  };
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {var _filterState$value;
    handleTimeRangeChange((_filterState$value = filterState.value) != null ? _filterState$value : DEFAULT_VALUE);
  }, [filterState.value]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    handleTimeRangeChange(defaultValue != null ? defaultValue : DEFAULT_VALUE);
  }, [defaultValue]);
  return (
    // @ts-ignore
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(TimeFilterStyles, { width: width },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(ControlContainer, { onMouseEnter: setFocusedFilter, onMouseLeave: unsetFocusedFilter },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(src_explore_components_controls_DateFilterControl__WEBPACK_IMPORTED_MODULE_3__["default"], { value: value, name: "time_range", onChange: handleTimeRangeChange }))));


}__signature__(TimeFilterPlugin, "useState{[value, setValue](defaultValue ?? DEFAULT_VALUE)}\nuseEffect{}\nuseEffect{}");;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(DEFAULT_VALUE, "DEFAULT_VALUE", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\filters\\components\\Time\\TimeFilterPlugin.tsx");reactHotLoader.register(TimeFilterStyles, "TimeFilterStyles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\filters\\components\\Time\\TimeFilterPlugin.tsx");reactHotLoader.register(ControlContainer, "ControlContainer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\filters\\components\\Time\\TimeFilterPlugin.tsx");reactHotLoader.register(TimeFilterPlugin, "TimeFilterPlugin", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\filters\\components\\Time\\TimeFilterPlugin.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/filters/components/common.ts":
/*!******************************************!*\
  !*** ./src/filters/components/common.ts ***!
  \******************************************/
/*! exports provided: Styles, StyledSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Styles", function() { return Styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSelect", function() { return StyledSelect; });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/common/components */ "./src/common/components/index.tsx");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


const Styles = _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"].div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;
const StyledSelect = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"])(src_common_components__WEBPACK_IMPORTED_MODULE_1__["Select"])`
  width: 100%;
`;;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(Styles, "Styles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\filters\\components\\common.ts");reactHotLoader.register(StyledSelect, "StyledSelect", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\filters\\components\\common.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/hostNamesConfig.js":
/*!**************************************!*\
  !*** ./src/utils/hostNamesConfig.js ***!
  \**************************************/
/*! exports provided: availableDomains, allowCrossDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "availableDomains", function() { return availableDomains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allowCrossDomain", function() { return allowCrossDomain; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/from */ "./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set */ "./node_modules/@babel/runtime-corejs3/core-js-stable/set.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/featureFlags */ "./src/featureFlags.ts");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


function getDomainsConfig() {var _bootstrapData$common;
  const appContainer = document.getElementById('app');
  if (!appContainer) {
    return [];
  }

  const bootstrapData = JSON.parse(appContainer.getAttribute('data-bootstrap'));
  // this module is a little special, it may be loaded before index.jsx,
  // where window.featureFlags get initialized
  // eslint-disable-next-line camelcase
  Object(src_featureFlags__WEBPACK_IMPORTED_MODULE_3__["initFeatureFlags"])(bootstrapData == null ? void 0 : (_bootstrapData$common = bootstrapData.common) == null ? void 0 : _bootstrapData$common.feature_flags);
  const availableDomains = new _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_2___default.a([window.location.hostname]);
  if (
  Object(src_featureFlags__WEBPACK_IMPORTED_MODULE_3__["isFeatureEnabled"])(src_featureFlags__WEBPACK_IMPORTED_MODULE_3__["FeatureFlag"].ALLOW_DASHBOARD_DOMAIN_SHARDING) &&
  bootstrapData &&
  bootstrapData.common &&
  bootstrapData.common.conf &&
  bootstrapData.common.conf.SUPERSET_WEBSERVER_DOMAINS)
  {var _context;
    _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(_context = bootstrapData.common.conf.SUPERSET_WEBSERVER_DOMAINS).call(_context, hostName => {
      availableDomains.add(hostName);
    });
  }
  return _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_0___default()(availableDomains);
}

const availableDomains = getDomainsConfig();

const allowCrossDomain = availableDomains.length > 1;;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(getDomainsConfig, "getDomainsConfig", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\utils\\hostNamesConfig.js");reactHotLoader.register(availableDomains, "availableDomains", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\utils\\hostNamesConfig.js");reactHotLoader.register(allowCrossDomain, "allowCrossDomain", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\utils\\hostNamesConfig.js");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/safeStringify.ts":
/*!************************************!*\
  !*** ./src/utils/safeStringify.ts ***!
  \************************************/
/*! exports provided: safeStringify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeStringify", function() { return safeStringify; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/set */ "./node_modules/@babel/runtime-corejs3/core-js-stable/set.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_1__);
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
/**
 * A Stringify function that will not crash when it runs into circular JSON references,
 * unlike JSON.stringify. Any circular references are simply omitted, as if there had
 * been no data present
 * @param object any JSON object to be stringified
 */
function safeStringify(object) {
  const cache = new _babel_runtime_corejs3_core_js_stable_set__WEBPACK_IMPORTED_MODULE_1___default.a();
  return _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(object, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        // We've seen this object before
        try {
          // Quick deep copy to duplicate if this is a repeat rather than a circle.
          return JSON.parse(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(value));
        }
        catch (err) {
          // Discard key if value cannot be duplicated.
          return; // eslint-disable-line consistent-return
        }
      }
      // Store the value in our cache.
      cache.add(value);
    }
    return value;
  });
};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(safeStringify, "safeStringify", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\utils\\safeStringify.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/utils/testUtils.ts":
/*!********************************!*\
  !*** ./src/utils/testUtils.ts ***!
  \********************************/
/*! exports provided: testWithId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testWithId", function() { return testWithId; });
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; // Using bem standard
const testWithId = (prefix, idOnly = false) => id => {
  if (!id && prefix) {
    return idOnly ? prefix : { 'data-test': prefix };
  }
  if (id && !prefix) {
    return idOnly ? id : { 'data-test': id };
  }
  if (!id && !prefix) {
    console.warn('testWithId function has missed "prefix" and "id" params');
    return idOnly ? '' : { 'data-test': '' };
  }
  const newId = `${prefix}__${id}`;
  return idOnly ? newId : { 'data-test': newId };
};;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(testWithId, "testWithId", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\utils\\testUtils.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=23.9ed865ea.chunk.js.map