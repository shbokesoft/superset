(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@data-ui/shared/esm/components/FocusBlurHandler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@data-ui/shared/esm/components/FocusBlurHandler.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FocusBlurHandler; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _inheritsLoose(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}var propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,onFocus:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,onBlur:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func},defaultProps={children:null,onFocus:null,onBlur:null},FocusBlurHandler=/*#__PURE__*/function(a){function b(b){var c;return c=a.call(this,b)||this,c.handleOnClick=c.handleOnClick.bind(_assertThisInitialized(_assertThisInitialized(c))),c}_inheritsLoose(b,a);var c=b.prototype;return c.handleOnClick=function b(a){a.preventDefault()},c.render=function e(){var a=this.props,b=a.children,c=a.onFocus,d=a.onBlur;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{// eslint-disable-line jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid
xlinkHref:(d||c)&&"#",role:"presentation",onBlur:d,onFocus:c,onClick:this.handleOnClick},b)},b}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);FocusBlurHandler.propTypes=propTypes,FocusBlurHandler.defaultProps=defaultProps,FocusBlurHandler.displayName="FocusBlurHandler";

/***/ }),

/***/ "./node_modules/@data-ui/shared/esm/enhancer/WithTooltip.js":
/*!******************************************************************!*\
  !*** ./node_modules/@data-ui/shared/esm/enhancer/WithTooltip.js ***!
  \******************************************************************/
/*! exports provided: Tooltip, withTooltipPropTypes, propTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTooltipPropTypes", function() { return withTooltipPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_event_build_localPoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/event/build/localPoint */ "./node_modules/@data-ui/shared/node_modules/@vx/event/build/localPoint.js");
/* harmony import */ var _vx_event_build_localPoint__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vx_event_build_localPoint__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vx_tooltip_build_enhancers_withTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/tooltip/build/enhancers/withTooltip */ "./node_modules/@data-ui/shared/node_modules/@vx/tooltip/build/enhancers/withTooltip.js");
/* harmony import */ var _vx_tooltip_build_enhancers_withTooltip__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vx_tooltip_build_enhancers_withTooltip__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vx_tooltip_build_tooltips_TooltipWithBounds__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/tooltip/build/tooltips/TooltipWithBounds */ "./node_modules/@data-ui/shared/node_modules/@vx/tooltip/build/tooltips/TooltipWithBounds.js");
/* harmony import */ var _vx_tooltip_build_tooltips_TooltipWithBounds__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vx_tooltip_build_tooltips_TooltipWithBounds__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vx_tooltip_build_tooltips_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/tooltip/build/tooltips/Tooltip */ "./node_modules/@data-ui/shared/node_modules/@vx/tooltip/build/tooltips/Tooltip.js");
/* harmony import */ var _vx_tooltip_build_tooltips_Tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vx_tooltip_build_tooltips_Tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _vx_tooltip_build_tooltips_Tooltip__WEBPACK_IMPORTED_MODULE_5___default.a; });
function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _inheritsLoose(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var withTooltipPropTypes={onMouseMove:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,// expects to be called like func({ event, datum })
onMouseLeave:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,// expects to be called like func({ event, datum })
tooltipData:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any};var propTypes=_extends({},_vx_tooltip_build_tooltips_TooltipWithBounds__WEBPACK_IMPORTED_MODULE_4__["withTooltipPropTypes"],{children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]).isRequired,className:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,HoverStyles:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),renderTooltip:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,styles:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])),TooltipComponent:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),tooltipProps:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,// eslint-disable-line react/forbid-prop-types
tooltipTimeout:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number});var defaultProps={className:null,HoverStyles:function a(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style",{type:"text/css"},"\n      .vx-arc:hover,\n      .vx-bar:hover,\n      .vx-glyph-dot:hover {\n        opacity: 0.7;\n      }\n    ")},renderTooltip:null,styles:{display:"inline-block",position:"relative"},TooltipComponent:_vx_tooltip_build_tooltips_TooltipWithBounds__WEBPACK_IMPORTED_MODULE_4___default.a,tooltipProps:null,tooltipTimeout:200},WithTooltip=/*#__PURE__*/function(a){function b(b){var c;return c=a.call(this,b)||this,c.handleMouseMove=c.handleMouseMove.bind(_assertThisInitialized(_assertThisInitialized(c))),c.handleMouseLeave=c.handleMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(c))),c.tooltipTimeout=null,c}_inheritsLoose(b,a);var c=b.prototype;return c.componentWillUnmount=function a(){this.tooltipTimeout&&clearTimeout(this.tooltipTimeout)},c.handleMouseMove=function h(a){var b=a.event,c=a.datum,d=a.coords,e=_objectWithoutPropertiesLoose(a,["event","datum","coords"]),f=this.props.showTooltip;this.tooltipTimeout&&clearTimeout(this.tooltipTimeout);var g={x:0,y:0};b&&b.target&&"focus"!==b.type&&b.target.ownerSVGElement&&(g=_vx_event_build_localPoint__WEBPACK_IMPORTED_MODULE_2___default()(b.target.ownerSVGElement,b)),g=_extends({},g,d),f({tooltipLeft:g.x,tooltipTop:g.y,tooltipData:_extends({event:b,datum:c},e)})},c.handleMouseLeave=function d(){var a=this.props,b=a.tooltipTimeout,c=a.hideTooltip;this.tooltipTimeout=setTimeout(function(){c()},b)},c.render=function o(){var a=this.props,b=a.children,c=a.className,d=a.HoverStyles,e=a.tooltipData,f=a.tooltipOpen,g=a.tooltipLeft,h=a.tooltipTop,i=a.tooltipProps,j=a.renderTooltip,k=a.styles,l=a.TooltipComponent,m={onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,tooltipData:e},n=j&&f&&l&&j(e);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:k,className:c},"function"==typeof b?b(m):react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(b),m),!!n&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(l,_extends({key:Math.random(),top:h,left:g},i),n),d&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(d,null))},b}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);WithTooltip.propTypes=propTypes,WithTooltip.defaultProps=defaultProps;/* harmony default export */ __webpack_exports__["default"] = (_vx_tooltip_build_enhancers_withTooltip__WEBPACK_IMPORTED_MODULE_3___default()(WithTooltip));

/***/ }),

/***/ "./node_modules/@data-ui/shared/node_modules/@vx/bounds/dist/vx-bounds.es.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@data-ui/shared/node_modules/@vx/bounds/dist/vx-bounds.es.js ***!
  \***********************************************************************************/
/*! exports provided: withBoundingRects, withBoundingRectsProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withBoundingRects", function() { return withBoundingRects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withBoundingRectsProps", function() { return withBoundingRectsProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/* eslint react/no-did-mount-set-state: 0, react/no-find-dom-node: 0 */

var emptyRect = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0
};

var rectShape = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
  top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  right: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
});

var withBoundingRectsProps = {
  getRects: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  rect: rectShape,
  parentRect: rectShape
};

function withBoundingRects(BaseComponent) {
  var WrappedComponent = function (_React$PureComponent) {
    inherits(WrappedComponent, _React$PureComponent);

    function WrappedComponent(props) {
      classCallCheck(this, WrappedComponent);

      var _this = possibleConstructorReturn(this, (WrappedComponent.__proto__ || Object.getPrototypeOf(WrappedComponent)).call(this, props));

      _this.state = {
        rect: undefined,
        parentRect: undefined
      };
      _this.getRects = _this.getRects.bind(_this);
      return _this;
    }

    createClass(WrappedComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);
        this.setState(function () {
          return _this2.getRects();
        });
      }
    }, {
      key: 'getRects',
      value: function getRects() {
        if (!this.node) return this.state;

        var node = this.node;
        var parentNode = this.node.parentNode;

        var rect = node.getBoundingClientRect ? node.getBoundingClientRect() : emptyRect;

        var parentRect = parentNode && parentNode.getBoundingClientRect ? parentNode.getBoundingClientRect() : emptyRect;

        return { rect: rect, parentRect: parentRect };
      }
    }, {
      key: 'render',
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseComponent, _extends({ getRects: this.getRects }, this.state, this.props));
      }
    }]);
    return WrappedComponent;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

  WrappedComponent.propTypes = BaseComponent.propTypes;
  WrappedComponent.defaultProps = BaseComponent.defaultProps;
  WrappedComponent.displayName = 'withBoundingRects(' + (BaseComponent.displayName || '') + ')';

  return WrappedComponent;
}




/***/ }),

/***/ "./node_modules/@data-ui/shared/node_modules/@vx/event/build/localPoint.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@data-ui/shared/node_modules/@vx/event/build/localPoint.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = localPoint;

var _point = __webpack_require__(/*! @vx/point */ "./node_modules/@data-ui/shared/node_modules/@vx/point/dist/vx-point.es.js");

function localPoint(node, event) {
  // called with no args
  if (!node) return;

  // called with localPoint(event)
  if (node.target) {
    event = node;

    // set node to targets owner svg
    node = event.target.ownerSVGElement;

    // find the outermost svg
    while (node.ownerSVGElement) {
      node = node.ownerSVGElement;
    }
  }

  // default to mouse event
  var _event = event,
      clientX = _event.clientX,
      clientY = _event.clientY;

  // support touch event

  if (event.changedTouches) {
    clientX = event.changedTouches[0].clientX;
    clientY = event.changedTouches[0].clientY;
  }

  // calculate coordinates from svg
  if (node.createSVGPoint) {
    var point = node.createSVGPoint();
    point.x = clientX;
    point.y = clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return new _point.Point({
      x: point.x,
      y: point.y
    });
  }

  // fallback to calculating position from non-svg dom node
  var rect = node.getBoundingClientRect();
  return new _point.Point({
    x: clientX - rect.left - node.clientLeft,
    y: clientY - rect.top - node.clientTop
  });
}

/***/ }),

/***/ "./node_modules/@data-ui/shared/node_modules/@vx/point/dist/vx-point.es.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@data-ui/shared/node_modules/@vx/point/dist/vx-point.es.js ***!
  \*********************************************************************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Point = function () {
  function Point(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y;
    classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  createClass(Point, [{
    key: "value",
    value: function value() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "toArray",
    value: function toArray$$1() {
      return [this.x, this.y];
    }
  }]);
  return Point;
}();




/***/ }),

/***/ "./node_modules/@data-ui/shared/node_modules/@vx/tooltip/build/enhancers/withTooltip.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@data-ui/shared/node_modules/@vx/tooltip/build/enhancers/withTooltip.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTooltipPropTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = withTooltip;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withTooltipPropTypes = exports.withTooltipPropTypes = {
  tooltipOpen: _propTypes2.default.bool,
  tooltipLeft: _propTypes2.default.number,
  tooltipTop: _propTypes2.default.number,
  tooltipData: _propTypes2.default.object,
  updateTooltip: _propTypes2.default.func,
  showTooltip: _propTypes2.default.func,
  hideTooltip: _propTypes2.default.func
};

function withTooltip(BaseComponent) {
  var containerProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    style: {
      position: 'relative',
      width: 'inherit',
      height: 'inherit'
    }
  };

  var WrappedComponent = function (_React$PureComponent) {
    _inherits(WrappedComponent, _React$PureComponent);

    function WrappedComponent(props) {
      _classCallCheck(this, WrappedComponent);

      var _this = _possibleConstructorReturn(this, (WrappedComponent.__proto__ || Object.getPrototypeOf(WrappedComponent)).call(this, props));

      _this.state = {
        tooltipOpen: false,
        tooltipLeft: undefined,
        tooltipTop: undefined,
        tooltipData: undefined
      };
      _this.updateTooltip = _this.updateTooltip.bind(_this);
      _this.showTooltip = _this.showTooltip.bind(_this);
      _this.hideTooltip = _this.hideTooltip.bind(_this);
      return _this;
    }

    _createClass(WrappedComponent, [{
      key: 'updateTooltip',
      value: function updateTooltip(_ref) {
        var tooltipOpen = _ref.tooltipOpen,
            tooltipLeft = _ref.tooltipLeft,
            tooltipTop = _ref.tooltipTop,
            tooltipData = _ref.tooltipData;

        this.setState(function (prevState) {
          return _extends({}, prevState, {
            tooltipOpen: tooltipOpen,
            tooltipLeft: tooltipLeft,
            tooltipTop: tooltipTop,
            tooltipData: tooltipData
          });
        });
      }
    }, {
      key: 'showTooltip',
      value: function showTooltip(_ref2) {
        var tooltipLeft = _ref2.tooltipLeft,
            tooltipTop = _ref2.tooltipTop,
            tooltipData = _ref2.tooltipData;

        this.updateTooltip({
          tooltipOpen: true,
          tooltipLeft: tooltipLeft,
          tooltipTop: tooltipTop,
          tooltipData: tooltipData
        });
      }
    }, {
      key: 'hideTooltip',
      value: function hideTooltip() {
        this.updateTooltip({
          tooltipOpen: false,
          tooltipLeft: undefined,
          tooltipTop: undefined,
          tooltipData: undefined
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          containerProps,
          _react2.default.createElement(BaseComponent, _extends({
            updateTooltip: this.updateTooltip,
            showTooltip: this.showTooltip,
            hideTooltip: this.hideTooltip
          }, this.state, this.props))
        );
      }
    }]);

    return WrappedComponent;
  }(_react2.default.PureComponent);

  return WrappedComponent;
}

/***/ }),

/***/ "./node_modules/@data-ui/shared/node_modules/@vx/tooltip/build/tooltips/Tooltip.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@data-ui/shared/node_modules/@vx/tooltip/build/tooltips/Tooltip.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Tooltip;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Tooltip(_ref) {
  var className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      style = _ref.style,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['className', 'top', 'left', 'style', 'children']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames2.default)('vx-tooltip-portal', className),
      style: _extends({
        position: 'absolute',
        backgroundColor: 'white',
        color: '#666666',
        padding: '.3rem .5rem',
        borderRadius: '3px',
        fontSize: '14px',
        boxShadow: '0 1px 2px rgba(33,33,33,0.2)',
        lineHeight: '1em',
        pointerEvents: 'none',
        top: top,
        left: left
      }, style)
    }, restProps),
    children
  );
}

Tooltip.propTypes = {
  left: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  top: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  children: _propTypes2.default.any
};

/***/ }),

/***/ "./node_modules/@data-ui/shared/node_modules/@vx/tooltip/build/tooltips/TooltipWithBounds.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@data-ui/shared/node_modules/@vx/tooltip/build/tooltips/TooltipWithBounds.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/forbid-prop-types: 0 */


var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _bounds = __webpack_require__(/*! @vx/bounds */ "./node_modules/@data-ui/shared/node_modules/@vx/bounds/dist/vx-bounds.es.js");

var _Tooltip = __webpack_require__(/*! ./Tooltip */ "./node_modules/@data-ui/shared/node_modules/@vx/tooltip/build/tooltips/Tooltip.js");

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = _extends({}, _bounds.withBoundingRectsProps, _Tooltip2.default.propTypes, {
  offsetLeft: _propTypes2.default.number,
  offsetTop: _propTypes2.default.number
});

var defaultProps = {};

function TooltipWithBounds(_ref) {
  var initialLeft = _ref.left,
      initialTop = _ref.top,
      _ref$offsetLeft = _ref.offsetLeft,
      offsetLeft = _ref$offsetLeft === undefined ? 10 : _ref$offsetLeft,
      _ref$offsetTop = _ref.offsetTop,
      offsetTop = _ref$offsetTop === undefined ? 10 : _ref$offsetTop,
      rect = _ref.rect,
      parentRect = _ref.parentRect,
      getRects = _ref.getRects,
      children = _ref.children,
      style = _ref.style,
      otherProps = _objectWithoutProperties(_ref, ['left', 'top', 'offsetLeft', 'offsetTop', 'rect', 'parentRect', 'getRects', 'children', 'style']);

  var left = initialLeft;
  var top = initialTop;

  if (rect && parentRect) {
    left = offsetLeft + rect.right > parentRect.right || offsetLeft + rect.right > window.innerWidth ? left - rect.width - offsetLeft : left + offsetLeft;

    top = offsetTop + rect.bottom > parentRect.bottom || offsetTop + rect.bottom > window.innerHeight ? top - rect.height - offsetTop : top + offsetTop;
  }

  return _react2.default.createElement(
    _Tooltip2.default,
    _extends({
      style: _extends({ top: 0, transform: 'translate(' + left + 'px, ' + top + 'px)' }, style)
    }, otherProps),
    children
  );
}

TooltipWithBounds.propTypes = propTypes;
TooltipWithBounds.defaultProps = defaultProps;

exports.default = (0, _bounds.withBoundingRects)(TooltipWithBounds);

/***/ }),

/***/ "./node_modules/@data-ui/theme/esm/color.js":
/*!**************************************************!*\
  !*** ./node_modules/@data-ui/theme/esm/color.js ***!
  \**************************************************/
/*! exports provided: allColors, grayColors, getPaletteForBrightness, colorHues, textColor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allColors", function() { return allColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayColors", function() { return grayColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPaletteForBrightness", function() { return getPaletteForBrightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorHues", function() { return colorHues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textColor", function() { return textColor; });
// source https://yeun.github.io/open-color/
var allColors={red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e8f7ff","#ccedff","#a3daff","#72c3fc","#4dadf7","#329af0","#228ae6","#1c7cd6","#1b6ec2","#1862ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"]};var grayColors=allColors.gray;var DEFAULT_BRIGHTNESS=6,DEFAULT_BRIGHTNESS_DARK=2;var getPaletteForBrightness=function(a,b){void 0===a&&(a=DEFAULT_BRIGHTNESS),void 0===b&&(b=["cyan","yellow","pink","grape","blue","lime","teal","red","violet","orange","indigo","green"]);// sanity check indices
var c=Math.max(0,Math.min(a,allColors.red.length-1));// filter non-sensical hues
return b.map(function(a){return allColors[a]&&allColors[a][c]}).filter(function(a){return a})};var primaryHue="cyan";var colorHues=Object.keys(allColors).sort();var textColor=grayColors[7];/* harmony default export */ __webpack_exports__["default"] = ({default:allColors[primaryHue][5],dark:allColors[primaryHue][7],light:allColors[primaryHue][3],disabled:textColor,lightDisabled:grayColors[3],text:textColor,black:grayColors[9],darkGray:grayColors[8],lightGray:grayColors[3],grid:grayColors[4],gridDark:grayColors[8],label:textColor,tickLabel:textColor,grays:grayColors,categories:[].concat(getPaletteForBrightness(DEFAULT_BRIGHTNESS),getPaletteForBrightness(DEFAULT_BRIGHTNESS_DARK))});

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/aesthetic/LinearGradient.js":
/*!************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/aesthetic/LinearGradient.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vx_gradient_build_gradients_LinearGradient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vx/gradient/build/gradients/LinearGradient */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/gradient/build/gradients/LinearGradient.js");
/* harmony import */ var _vx_gradient_build_gradients_LinearGradient__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vx_gradient_build_gradients_LinearGradient__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_vx_gradient_build_gradients_LinearGradient__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/chart/CrossHair.js":
/*!***************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/chart/CrossHair.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data-ui/theme */ "./node_modules/@data-ui/theme/esm/color.js");
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/group */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/shape */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/shape/dist/vx-shape.es.js");
/* harmony import */ var _utils_chartUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/chartUtils */ "./node_modules/@data-ui/xy-chart/esm/utils/chartUtils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var GROUP_STYLE = {
  pointerEvents: 'none'
};
var propTypes = {
  fullHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  circleSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  circleFill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  circleStroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  circleStyles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]))]),
  lineStyles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])),
  showCircle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showMultipleCircles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showHorizontalLine: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showVerticalLine: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  // likely injected by parent
  datum: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  // eslint-disable-line react/forbid-prop-types
  series: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
  getScaledX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  getScaledY: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var defaultProps = {
  circleSize: 4,
  circleFill: _data_ui_theme__WEBPACK_IMPORTED_MODULE_3__["default"].grays[7],
  circleStroke: '#ffffff',
  circleStyles: {
    pointerEvents: 'none'
  },
  datum: {},
  getScaledX: null,
  getScaledY: null,
  lineStyles: {
    pointerEvents: 'none'
  },
  fullHeight: false,
  fullWidth: false,
  series: {},
  showCircle: true,
  showMultipleCircles: false,
  showHorizontalLine: true,
  showVerticalLine: true,
  stroke: _data_ui_theme__WEBPACK_IMPORTED_MODULE_3__["default"].grays[6],
  strokeDasharray: '5,2',
  strokeWidth: 1,
  xScale: null,
  yScale: null
};

function CrossHair(_ref) {
  var circleFill = _ref.circleFill,
      circleSize = _ref.circleSize,
      circleStroke = _ref.circleStroke,
      circleStyles = _ref.circleStyles,
      datum = _ref.datum,
      getScaledX = _ref.getScaledX,
      getScaledY = _ref.getScaledY,
      fullHeight = _ref.fullHeight,
      fullWidth = _ref.fullWidth,
      lineStyles = _ref.lineStyles,
      series = _ref.series,
      showHorizontalLine = _ref.showHorizontalLine,
      showCircle = _ref.showCircle,
      showMultipleCircles = _ref.showMultipleCircles,
      showVerticalLine = _ref.showVerticalLine,
      stroke = _ref.stroke,
      strokeDasharray = _ref.strokeDasharray,
      strokeWidth = _ref.strokeWidth,
      xScale = _ref.xScale,
      yScale = _ref.yScale;
  if (!xScale || !yScale || !getScaledX || !getScaledY) return null;

  var _extent = Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["extent"])(xScale.range()),
      xMin = _extent[0],
      xMax = _extent[1];

  var _extent2 = Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["extent"])(yScale.range()),
      yMin = _extent2[0],
      yMax = _extent2[1];

  var circleData = showMultipleCircles && series && Object.keys(series).length > 0 ? Object.keys(series).map(function (seriesKey) {
    return _extends({
      seriesKey: seriesKey
    }, series[seriesKey]);
  }) : [datum];
  var circlePositions = circleData.map(function (d) {
    return {
      x: getScaledX(d),
      y: getScaledY(d)
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_4__["Group"], {
    style: GROUP_STYLE
  }, showHorizontalLine && !showMultipleCircles && Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_6__["isDefined"])(circlePositions[0].y) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_5__["Line"], {
    from: {
      x: xMin,
      y: circlePositions[0].y
    },
    to: {
      x: fullWidth ? xMax : circlePositions[0].x,
      y: circlePositions[0].y
    },
    style: lineStyles,
    stroke: stroke,
    strokeDasharray: strokeDasharray,
    strokeWidth: strokeWidth
  }), showVerticalLine && Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_6__["isDefined"])(circlePositions[0].x) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_5__["Line"], {
    from: {
      x: circlePositions[0].x,
      y: yMax
    },
    to: {
      x: circlePositions[0].x,
      y: fullHeight ? yMin : circlePositions[0].y
    },
    style: lineStyles,
    stroke: stroke,
    strokeDasharray: strokeDasharray,
    strokeWidth: strokeWidth
  }), (showCircle || showMultipleCircles) && circleData.map(function (d, i) {
    var _circlePositions$i = circlePositions[i],
        x = _circlePositions$i.x,
        y = _circlePositions$i.y;
    return Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_6__["isDefined"])(x) && Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_6__["isDefined"])(y) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      key: "circle-" + (d.seriesKey || i),
      cx: x,
      cy: y,
      r: Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_6__["callOrValue"])(circleSize, d, i),
      fill: Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_6__["callOrValue"])(circleFill, d, i),
      strokeWidth: 1,
      stroke: Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_6__["callOrValue"])(circleStroke, d, i),
      style: Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_6__["callOrValue"])(circleStyles, d, i)
    });
  }));
}

CrossHair.propTypes = propTypes;
CrossHair.defaultProps = defaultProps;
CrossHair.displayName = 'CrossHair';
/* harmony default export */ __webpack_exports__["default"] = (CrossHair);

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/chart/Voronoi.js":
/*!*************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/chart/Voronoi.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/group */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var _vx_voronoi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/voronoi */ "./node_modules/@vx/voronoi/dist/vx-voronoi.es.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/* eslint react/no-array-index-key: 0, react/no-unused-prop-types: 0 */




var propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  showVoronoi: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  x: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
var defaultProps = {
  onClick: null,
  onMouseMove: null,
  onMouseLeave: null,
  onMouseDown: null,
  showVoronoi: false
};

var Voronoi =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Voronoi, _React$PureComponent);

  Voronoi.getVoronoi = function getVoronoi(props) {
    var x = props.x,
        y = props.y,
        data = props.data,
        width = props.width,
        height = props.height;
    return Object(_vx_voronoi__WEBPACK_IMPORTED_MODULE_3__["voronoi"])({
      x: x,
      y: y,
      width: width,
      height: height
    })(data);
  };

  function Voronoi(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this.state = {
      voronoi: Voronoi.getVoronoi(props)
    };
    return _this;
  }

  var _proto = Voronoi.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (['data', 'x', 'y', 'width', 'height'].some(function (prop) {
      return _this2.props[prop] !== nextProps[prop];
    } // eslint-disable-line react/destructuring-assignment
    )) {
      this.setState({
        voronoi: Voronoi.getVoronoi(nextProps)
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        onMouseLeave = _this$props.onMouseLeave,
        onMouseMove = _this$props.onMouseMove,
        onClick = _this$props.onClick,
        showVoronoi = _this$props.showVoronoi,
        onMouseDown = _this$props.onMouseDown;
    var voronoi = this.state.voronoi;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_2__["Group"], null, voronoi.polygons().map(function (polygon, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_voronoi__WEBPACK_IMPORTED_MODULE_3__["VoronoiPolygon"], {
        key: "voronoi-" + polygon.length + "-" + i,
        polygon: polygon,
        fill: "transparent",
        stroke: showVoronoi ? '#ddd' : 'transparent',
        strokeWidth: 1,
        onClick: onClick && function () {
          return function (event) {
            onClick({
              event: event,
              datum: polygon.data
            });
          };
        },
        onMouseMove: onMouseMove && function () {
          return function (event) {
            onMouseMove({
              event: event,
              datum: polygon.data
            });
          };
        },
        onMouseLeave: onMouseLeave && function () {
          return onMouseLeave;
        },
        onMouseDown: onMouseDown && function () {
          return onMouseDown;
        }
      });
    }));
  };

  return Voronoi;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

Voronoi.propTypes = propTypes;
Voronoi.defaultProps = defaultProps;
Voronoi.displayName = 'Voronoi';
/* harmony default export */ __webpack_exports__["default"] = (Voronoi);

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/chart/XYChart.js":
/*!*************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/chart/XYChart.js ***!
  \*************************************************************/
/*! exports provided: CONTAINER_TRIGGER, SERIES_TRIGGER, VORONOI_TRIGGER, propTypes, defaultProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINER_TRIGGER", function() { return CONTAINER_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERIES_TRIGGER", function() { return SERIES_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VORONOI_TRIGGER", function() { return VORONOI_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/grid */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/grid/dist/vx-grid.es.js");
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/group */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var _data_ui_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-ui/shared */ "./node_modules/@data-ui/shared/esm/enhancer/WithTooltip.js");
/* harmony import */ var _utils_collectVoronoiData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/collectVoronoiData */ "./node_modules/@data-ui/xy-chart/esm/utils/collectVoronoiData.js");
/* harmony import */ var _utils_findClosestDatums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/findClosestDatums */ "./node_modules/@data-ui/xy-chart/esm/utils/findClosestDatums.js");
/* harmony import */ var _utils_shallowCompareObjectEntries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/shallowCompareObjectEntries */ "./node_modules/@data-ui/xy-chart/esm/utils/shallowCompareObjectEntries.js");
/* harmony import */ var _Voronoi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Voronoi */ "./node_modules/@data-ui/xy-chart/esm/chart/Voronoi.js");
/* harmony import */ var _utils_chartUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/chartUtils */ "./node_modules/@data-ui/xy-chart/esm/utils/chartUtils.js");
/* harmony import */ var _utils_collectScalesFromProps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/collectScalesFromProps */ "./node_modules/@data-ui/xy-chart/esm/utils/collectScalesFromProps.js");
/* harmony import */ var _utils_getChartDimensions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/getChartDimensions */ "./node_modules/@data-ui/xy-chart/esm/utils/getChartDimensions.js");
/* harmony import */ var _utils_propShapes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/propShapes */ "./node_modules/@data-ui/xy-chart/esm/utils/propShapes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }














var CONTAINER_TRIGGER = 'container';
var SERIES_TRIGGER = 'series';
var VORONOI_TRIGGER = 'voronoi';
var Y_LABEL_OFFSET = 0.7;
var propTypes = {
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  disableMouseEvents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  eventTrigger: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([CONTAINER_TRIGGER, SERIES_TRIGGER, VORONOI_TRIGGER]),
  eventTriggerRefs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }),
  renderTooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  showXGrid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  xGridValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(_utils_propShapes__WEBPACK_IMPORTED_MODULE_12__["stringNumberDateObjectPropType"]),
  xGridOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  showYGrid: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  yGridValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(_utils_propShapes__WEBPACK_IMPORTED_MODULE_12__["stringNumberDateObjectPropType"]),
  yGridOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  showVoronoi: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  snapTooltipToDataX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  snapTooltipToDataY: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  theme: _utils_propShapes__WEBPACK_IMPORTED_MODULE_12__["themeShape"],
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  xScale: _utils_propShapes__WEBPACK_IMPORTED_MODULE_12__["scaleShape"].isRequired,
  yScale: _utils_propShapes__WEBPACK_IMPORTED_MODULE_12__["scaleShape"].isRequired,
  // these may be passed from WithTooltip
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // expects to be called like func({ event, datum })
  onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // expects to be called like func({ event, datum })
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // expects to be called like func({ event, datum })
  tooltipData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    event: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    datum: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    series: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  })
};
var defaultProps = {
  children: null,
  disableMouseEvents: false,
  eventTrigger: SERIES_TRIGGER,
  eventTriggerRefs: null,
  innerRef: null,
  margin: _utils_chartUtils__WEBPACK_IMPORTED_MODULE_9__["DEFAULT_CHART_MARGIN"],
  renderTooltip: null,
  showVoronoi: false,
  showXGrid: false,
  xGridValues: null,
  xGridOffset: null,
  showYGrid: false,
  yGridValues: null,
  yGridOffset: null,
  snapTooltipToDataX: false,
  snapTooltipToDataY: false,
  theme: {},
  onClick: null,
  onMouseMove: null,
  onMouseLeave: null,
  tooltipData: null
}; // accessors

var getX = function getX(d) {
  return d && d.x;
};

var getY = function getY(d) {
  return d && d.y;
};

var XYChart =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(XYChart, _React$PureComponent);

  function XYChart(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this; // if renderTooltip is passed we return another XYChart wrapped in WithTooltip
    // therefore we don't want to compute state if the nested chart will do so

    _this.state = props.renderTooltip ? {} : XYChart.getStateFromProps(props);
    _this.getDatumCoords = _this.getDatumCoords.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMouseMove = _this.handleMouseMove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleMouseDown = _this.handleMouseDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleContainerEvent = _this.handleContainerEvent.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  var _proto = XYChart.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        renderTooltip = _this$props.renderTooltip,
        eventTriggerRefs = _this$props.eventTriggerRefs;

    if (!renderTooltip && eventTriggerRefs) {
      eventTriggerRefs({
        mousemove: this.handleMouseMove,
        mouseleave: this.handleMouseLeave,
        click: this.handleClick
      });
    }
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var shouldComputeScales = false;

    if (['width', 'height', 'children'].some(function (prop) {
      return _this2.props[prop] !== nextProps[prop];
    } // eslint-disable-line react/destructuring-assignment
    )) {
      shouldComputeScales = true;
    }

    if (['margin', 'xScale', 'yScale'].some( // eslint-disable-next-line react/destructuring-assignment
    function (prop) {
      return !Object(_utils_shallowCompareObjectEntries__WEBPACK_IMPORTED_MODULE_7__["default"])(_this2.props[prop], nextProps[prop]);
    })) {
      shouldComputeScales = true;
    }

    if (shouldComputeScales) this.setState(XYChart.getStateFromProps(nextProps));
  };

  XYChart.getStateFromProps = function getStateFromProps(props) {
    var _getChartDimensions = Object(_utils_getChartDimensions__WEBPACK_IMPORTED_MODULE_11__["default"])(props),
        margin = _getChartDimensions.margin,
        innerWidth = _getChartDimensions.innerWidth,
        innerHeight = _getChartDimensions.innerHeight;

    var _collectScalesFromPro = Object(_utils_collectScalesFromProps__WEBPACK_IMPORTED_MODULE_10__["default"])(props),
        xScale = _collectScalesFromPro.xScale,
        yScale = _collectScalesFromPro.yScale;

    var voronoiData = Object(_utils_collectVoronoiData__WEBPACK_IMPORTED_MODULE_5__["default"])({
      children: props.children,
      getX: getX,
      getY: getY
    });
    return {
      innerHeight: innerHeight,
      innerWidth: innerWidth,
      margin: margin,
      xScale: xScale,
      yScale: yScale,
      voronoiData: voronoiData,
      voronoiX: function voronoiX(d) {
        return xScale(getX(d));
      },
      voronoiY: function voronoiY(d) {
        return yScale(getY(d));
      }
    };
  };

  _proto.getNumTicksAndGridValues = function getNumTicksAndGridValues(innerWidth, innerHeight) {
    var _this$props2 = this.props,
        children = _this$props2.children,
        xGridValues = _this$props2.xGridValues,
        yGridValues = _this$props2.yGridValues;
    var xAxis = Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_9__["getChildWithName"])('XAxis', children);
    var yAxis = Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_9__["getChildWithName"])('YAxis', children); // use num ticks and tickValues defined on Axes, if relevant

    return {
      numXTicks: Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_9__["propOrFallback"])(xAxis && xAxis.props, 'numTicks', Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_9__["numTicksForWidth"])(innerWidth)),
      numYTicks: Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_9__["propOrFallback"])(yAxis && yAxis.props, 'numTicks', Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_9__["numTicksForHeight"])(innerHeight)),
      xGridValues: xGridValues || (xAxis && xAxis.props && xAxis.props.tickValues ? xAxis.props.tickValues : null),
      yGridValues: yGridValues || (yAxis && yAxis.props && yAxis.props.tickValues ? yAxis.props.tickValues : null)
    };
  };

  _proto.getDatumCoords = function getDatumCoords(datum) {
    var _this$state = this.state,
        xScale = _this$state.xScale,
        yScale = _this$state.yScale,
        margin = _this$state.margin;
    var coords = {}; // tooltip operates in full width/height space so we must account for margins

    if (datum) coords.x = xScale(getX(datum)) + margin.left;
    if (datum) coords.y = yScale(getY(datum)) + margin.top;
    return coords;
  };

  _proto.handleContainerEvent = function handleContainerEvent(event) {
    var _this$state2 = this.state,
        xScale = _this$state2.xScale,
        yScale = _this$state2.yScale,
        margin = _this$state2.margin;
    var children = this.props.children;

    var _findClosestDatums = Object(_utils_findClosestDatums__WEBPACK_IMPORTED_MODULE_6__["default"])({
      children: children,
      event: event,
      getX: getX,
      getY: getY,
      xScale: xScale,
      yScale: yScale,
      margin: margin
    }),
        closestDatum = _findClosestDatums.closestDatum,
        series = _findClosestDatums.series;

    if (closestDatum || Object.keys(series).length > 0) {
      event.persist();
      var args = {
        event: event,
        datum: closestDatum,
        series: series
      };
      if (event.type === 'mousemove') this.handleMouseMove(args);else if (event.type === 'click') this.handleClick(args);
    }
  };

  _proto.handleMouseDown = function handleMouseDown(event) {
    if (this.fireBrushStart) {
      this.fireBrushStart(event);
    }
  };

  _proto.handleMouseMove = function handleMouseMove(args) {
    var _this$props3 = this.props,
        snapTooltipToDataX = _this$props3.snapTooltipToDataX,
        snapTooltipToDataY = _this$props3.snapTooltipToDataY,
        onMouseMove = _this$props3.onMouseMove;
    var isFocusEvent = args.event && args.event.type === 'focus';

    if (onMouseMove) {
      var _this$getDatumCoords = this.getDatumCoords(args.datum),
          x = _this$getDatumCoords.x,
          y = _this$getDatumCoords.y;

      onMouseMove(_extends({}, args, {
        coords: _extends({}, (isFocusEvent || snapTooltipToDataX) && {
          x: x
        }, (isFocusEvent || snapTooltipToDataY) && {
          y: y
        }, args.coords)
      }));
    }
  };

  _proto.handleMouseLeave = function handleMouseLeave(args) {
    var onMouseLeave = this.props.onMouseLeave;
    if (onMouseLeave) onMouseLeave(args);
  };

  _proto.handleClick = function handleClick(args) {
    var _this$props4 = this.props,
        snapTooltipToDataX = _this$props4.snapTooltipToDataX,
        snapTooltipToDataY = _this$props4.snapTooltipToDataY,
        onClick = _this$props4.onClick;

    if (onClick) {
      var coords = this.getDatumCoords(args.datum);
      onClick(_extends({}, args, {
        coords: _extends({
          x: snapTooltipToDataX ? coords.x : undefined,
          y: snapTooltipToDataY ? coords.y : undefined
        }, args.coords)
      }));
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var renderTooltip = this.props.renderTooltip;

    if (renderTooltip) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_data_ui_shared__WEBPACK_IMPORTED_MODULE_4__["default"], {
        renderTooltip: renderTooltip
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(XYChart, _extends({}, this.props, {
        renderTooltip: null
      })));
    }

    var _this$props5 = this.props,
        ariaLabel = _this$props5.ariaLabel,
        eventTrigger = _this$props5.eventTrigger,
        children = _this$props5.children,
        showXGrid = _this$props5.showXGrid,
        showYGrid = _this$props5.showYGrid,
        theme = _this$props5.theme,
        height = _this$props5.height,
        width = _this$props5.width,
        innerRef = _this$props5.innerRef,
        tooltipData = _this$props5.tooltipData,
        showVoronoi = _this$props5.showVoronoi,
        xGridOffset = _this$props5.xGridOffset,
        yGridOffset = _this$props5.yGridOffset;
    var _this$state3 = this.state,
        innerWidth = _this$state3.innerWidth,
        innerHeight = _this$state3.innerHeight,
        margin = _this$state3.margin,
        voronoiData = _this$state3.voronoiData,
        voronoiX = _this$state3.voronoiX,
        voronoiY = _this$state3.voronoiY,
        xScale = _this$state3.xScale,
        yScale = _this$state3.yScale;

    var _this$getNumTicksAndG = this.getNumTicksAndGridValues(innerWidth, innerHeight),
        numXTicks = _this$getNumTicksAndG.numXTicks,
        numYTicks = _this$getNumTicksAndG.numYTicks,
        xGridValues = _this$getNumTicksAndG.xGridValues,
        yGridValues = _this$getNumTicksAndG.yGridValues;

    var CrossHairs = []; // ensure these are the top-most layer

    var Brush = null;
    var xAxisOrientation;
    var yAxisOrientation;
    return innerWidth > 0 && innerHeight > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      "aria-label": ariaLabel,
      role: "img",
      width: width,
      height: height,
      ref: innerRef
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"], {
      left: margin.left,
      top: margin.top
    }, showXGrid && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_grid__WEBPACK_IMPORTED_MODULE_2__["GridColumns"], {
      scale: xScale,
      height: innerHeight,
      numTicks: numXTicks,
      stroke: theme.gridStyles && theme.gridStyles.stroke,
      strokeWidth: theme.gridStyles && theme.gridStyles.strokeWidth,
      tickValues: xGridValues,
      offset: Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_9__["isDefined"])(xGridOffset) ? xGridOffset : xScale.bandwidth && xScale.bandwidth() / 2 || 0
    }), showYGrid && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_grid__WEBPACK_IMPORTED_MODULE_2__["GridRows"], {
      scale: yScale,
      width: innerWidth,
      numTicks: numYTicks,
      stroke: theme.gridStyles && theme.gridStyles.stroke,
      strokeWidth: theme.gridStyles && theme.gridStyles.strokeWidth,
      tickValues: yGridValues,
      offset: Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_9__["isDefined"])(yGridOffset) ? yGridOffset : yScale.bandwidth && yScale.bandwidth() / 2 || 0
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (Child) {
      var name = Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_9__["componentName"])(Child);

      if (Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_9__["isAxis"])(name)) {
        var styleKey = name[0].toLowerCase();
        var labelOffset = typeof Child.props.labelOffset === 'number' ? Child.props.labelOffset : name === 'YAxis' && Y_LABEL_OFFSET * margin[Child.props.orientation] || 0;

        if (name === 'XAxis') {
          xAxisOrientation = Child.props.orientation;
        } else {
          yAxisOrientation = Child.props.orientation;
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(Child, {
          innerHeight: innerHeight,
          innerWidth: innerWidth,
          height: height,
          width: width,
          labelOffset: labelOffset,
          numTicks: name === 'XAxis' ? numXTicks : numYTicks,
          scale: name === 'XAxis' ? xScale : yScale,
          rangePadding: Child.props.rangePadding || (name === 'XAxis' ? xScale.offset : undefined),
          axisStyles: _extends({}, theme[styleKey + "AxisStyles"], Child.props.axisStyles),
          tickStyles: _extends({}, theme[styleKey + "TickStyles"], Child.props.tickStyles)
        });
      } else if (Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_9__["isSeries"])(name)) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(Child, {
          xScale: xScale,
          yScale: yScale,
          margin: margin,
          onClick: Child.props.onClick || (Child.props.disableMouseEvents ? undefined : _this3.handleClick),
          onMouseLeave: Child.props.onMouseLeave || (Child.props.disableMouseEvents ? undefined : _this3.handleMouseLeave),
          onMouseMove: Child.props.onMouseMove || (Child.props.disableMouseEvents ? undefined : _this3.handleMouseMove)
        });
      } else if (Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_9__["isCrossHair"])(name)) {
        CrossHairs.push(Child);
        return null;
      } else if (Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_9__["isReferenceLine"])(name)) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(Child, {
          xScale: xScale,
          yScale: yScale
        });
      } else if (Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_9__["isBrush"])(name)) {
        Brush = Child;
        return null;
      }

      return Child;
    }), eventTrigger === VORONOI_TRIGGER && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Voronoi__WEBPACK_IMPORTED_MODULE_8__["default"], {
      data: voronoiData,
      x: voronoiX,
      y: voronoiY,
      width: innerWidth,
      height: innerHeight,
      onClick: this.handleClick,
      onMouseDown: this.handleMouseDown,
      onMouseMove: this.handleMouseMove,
      onMouseLeave: this.handleMouseLeave,
      showVoronoi: showVoronoi
    }), eventTrigger === CONTAINER_TRIGGER && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      x: 0,
      y: 0,
      width: innerWidth,
      height: innerHeight,
      fill: "transparent",
      fillOpacity: 0,
      onMouseDown: this.handleMouseDown,
      onClick: this.handleContainerEvent,
      onMouseMove: this.handleContainerEvent,
      onMouseLeave: this.handleMouseLeave
    }), Brush && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(Brush, {
      xScale: xScale,
      yScale: yScale,
      innerHeight: innerHeight,
      innerWidth: innerWidth,
      margin: margin,
      onMouseMove: this.handleContainerEvent,
      onMouseLeave: this.handleMouseLeave,
      onClick: this.handleContainerEvent,
      xAxisOrientation: xAxisOrientation,
      yAxisOrientation: yAxisOrientation
    }), tooltipData && CrossHairs.length > 0 && CrossHairs.map(function (CrossHair, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(CrossHair, {
        key: "crosshair-" + i,
        // eslint-disable-line react/no-array-index-key
        datum: tooltipData.datum,
        series: tooltipData.series,
        getScaledX: function getScaledX(d) {
          return xScale(getX(d) || 0) + (xScale.bandwidth ? xScale.bandwidth() / 2 : 0);
        },
        getScaledY: function getScaledY(d) {
          return yScale(getY(d) || 0) + (yScale.bandwidth ? yScale.bandwidth() / 2 : 0);
        },
        xScale: xScale,
        yScale: yScale
      });
    })));
  };

  return XYChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

XYChart.propTypes = propTypes;
XYChart.defaultProps = defaultProps;
XYChart.displayName = 'XYChart';
/* harmony default export */ __webpack_exports__["default"] = (XYChart);

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/series/AreaDifferenceSeries.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/series/AreaDifferenceSeries.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AreaDifferenceSeries; });
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @data-ui/theme */ "./node_modules/@data-ui/theme/esm/color.js");
/* harmony import */ var _vx_threshold__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vx/threshold */ "./node_modules/@vx/threshold/dist/vx-threshold.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_interpolatorLookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/interpolatorLookup */ "./node_modules/@data-ui/xy-chart/esm/utils/interpolatorLookup.js");
/* harmony import */ var _utils_propShapes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/propShapes */ "./node_modules/@data-ui/xy-chart/esm/utils/propShapes.js");
/* harmony import */ var _utils_sharedSeriesProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/sharedSeriesProps */ "./node_modules/@data-ui/xy-chart/esm/utils/sharedSeriesProps.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var propTypes = _extends({}, _utils_sharedSeriesProps__WEBPACK_IMPORTED_MODULE_6__["default"], {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired,
  // AreaSeries type
  interpolation: _utils_propShapes__WEBPACK_IMPORTED_MODULE_5__["interpolationShape"]
});

var defaultProps = {
  interpolation: 'monotoneX'
};
var DEFAULT_OPACITY = 0.4;

var getX = function getX(d) {
  return d.x;
};

var getY0 = function getY0(d) {
  return d.y0;
};

var getY1 = function getY1(d) {
  return d.y1;
};

var AreaDifferenceSeries =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(AreaDifferenceSeries, _React$PureComponent);

  function AreaDifferenceSeries() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = AreaDifferenceSeries.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        disableMouseEvents = _this$props.disableMouseEvents,
        interpolation = _this$props.interpolation,
        xScale = _this$props.xScale,
        yScale = _this$props.yScale,
        onClick = _this$props.onClick,
        onMouseMove = _this$props.onMouseMove,
        onMouseLeave = _this$props.onMouseLeave,
        children = _this$props.children,
        margin = _this$props.margin;
    if (!xScale || !yScale) return null;
    var childArray = react__WEBPACK_IMPORTED_MODULE_3__["Children"].toArray(children);
    var child1 = childArray[0],
        child2 = childArray[1];

    if (childArray.length !== 2 || child1.type.displayName !== 'AreaSeries' || child2.type.displayName !== 'AreaSeries') {
      console.warn('AreaDifferenceSeries expects exactly two AreaSeries children');
      return null;
    }

    var _child1$props = child1.props,
        data1 = _child1$props.data,
        fill1 = _child1$props.fill,
        opacity1 = _child1$props.fillOpacity;
    var _child2$props = child2.props,
        data2 = _child2$props.data,
        fill2 = _child2$props.fill,
        opacity2 = _child2$props.fillOpacity;

    if (data1.length !== data2.length) {
      console.warn('AreaDifferenceSeries children should have the same data length');
      return null;
    }

    var curve = _utils_interpolatorLookup__WEBPACK_IMPORTED_MODULE_4__["default"][interpolation] || _utils_interpolatorLookup__WEBPACK_IMPORTED_MODULE_4__["default"].monotoneX;
    var yExtent = yScale.range();
    var mergedData = data1.map(function (d, i) {
      return {
        x: d.x,
        y0: d.y,
        y1: data2[i].y
      };
    });
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_vx_threshold__WEBPACK_IMPORTED_MODULE_1__["Threshold"], {
      data: mergedData,
      x: getX,
      y0: getY0,
      y1: getY1,
      xScale: xScale,
      yScale: yScale,
      clipAboveTo: Math.min.apply(Math, yExtent),
      clipBelowTo: Math.max.apply(Math, yExtent),
      curve: curve,
      aboveAreaProps: {
        fill: fill1 || _data_ui_theme__WEBPACK_IMPORTED_MODULE_0__["default"].categories[0],
        fillOpacity: opacity1 || DEFAULT_OPACITY
      },
      belowAreaProps: {
        fill: fill2 || _data_ui_theme__WEBPACK_IMPORTED_MODULE_0__["default"].categories[0],
        fillOpacity: opacity2 || DEFAULT_OPACITY
      }
    }), childArray.map(function (Child) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(Child, {
        xScale: xScale,
        yScale: yScale,
        onClick: onClick,
        onMouseMove: onMouseMove,
        onMouseLeave: onMouseLeave,
        interpolation: interpolation,
        disableMouseEvents: Child.props.disableMouseEvents || disableMouseEvents,
        fill: 'transparent',
        margin: margin
      });
    }));
  };

  return AreaDifferenceSeries;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.PureComponent);


AreaDifferenceSeries.propTypes = propTypes;
AreaDifferenceSeries.defaultProps = defaultProps;
AreaDifferenceSeries.displayName = 'AreaDifferenceSeries';

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/series/AreaSeries.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/series/AreaSeries.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AreaSeries; });
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vx/shape */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/shape/dist/vx-shape.es.js");
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @data-ui/theme */ "./node_modules/@data-ui/theme/esm/color.js");
/* harmony import */ var _data_ui_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-ui/shared */ "./node_modules/@data-ui/shared/esm/components/FocusBlurHandler.js");
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/group */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_propShapes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/propShapes */ "./node_modules/@data-ui/xy-chart/esm/utils/propShapes.js");
/* harmony import */ var _utils_chartUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/chartUtils */ "./node_modules/@data-ui/xy-chart/esm/utils/chartUtils.js");
/* harmony import */ var _utils_findClosestDatum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/findClosestDatum */ "./node_modules/@data-ui/xy-chart/esm/utils/findClosestDatum.js");
/* harmony import */ var _utils_interpolatorLookup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/interpolatorLookup */ "./node_modules/@data-ui/xy-chart/esm/utils/interpolatorLookup.js");
/* harmony import */ var _utils_sharedSeriesProps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/sharedSeriesProps */ "./node_modules/@data-ui/xy-chart/esm/utils/sharedSeriesProps.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













var propTypes = _extends({}, _utils_sharedSeriesProps__WEBPACK_IMPORTED_MODULE_10__["default"], {
  data: _utils_propShapes__WEBPACK_IMPORTED_MODULE_6__["areaSeriesDataShape"].isRequired,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),
  fillOpacity: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),
  interpolation: _utils_propShapes__WEBPACK_IMPORTED_MODULE_6__["interpolationShape"],
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]),
  strokeLinecap: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['butt', 'square', 'round', 'inherit'])
});

var defaultProps = {
  interpolation: 'monotoneX',
  stroke: _data_ui_theme__WEBPACK_IMPORTED_MODULE_1__["default"].default,
  strokeWidth: 3,
  strokeDasharray: null,
  strokeLinecap: 'round',
  fill: _data_ui_theme__WEBPACK_IMPORTED_MODULE_1__["default"].default,
  fillOpacity: 0.3
};

var x = function x(d) {
  return d && d.x;
};

var getY = function getY(d) {
  return d && d.y;
};

var getY0 = function getY0(d) {
  return d && d.y0;
};

var getY1 = function getY1(d) {
  return d && d.y1;
};

var definedClosed = function definedClosed(d) {
  return Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_7__["isDefined"])(getY(d));
};

var definedOpen = function definedOpen(d) {
  return Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_7__["isDefined"])(getY0(d)) && Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_7__["isDefined"])(getY1(d));
};

var noEventsStyles = {
  pointerEvents: 'none'
};

var AreaSeries =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(AreaSeries, _React$PureComponent);

  function AreaSeries() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = AreaSeries.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        data = _this$props.data,
        disableMouseEvents = _this$props.disableMouseEvents,
        xScale = _this$props.xScale,
        yScale = _this$props.yScale,
        margin = _this$props.margin,
        stroke = _this$props.stroke,
        strokeWidth = _this$props.strokeWidth,
        strokeDasharray = _this$props.strokeDasharray,
        strokeLinecap = _this$props.strokeLinecap,
        fill = _this$props.fill,
        fillOpacity = _this$props.fillOpacity,
        interpolation = _this$props.interpolation,
        onClick = _this$props.onClick,
        onMouseMove = _this$props.onMouseMove,
        onMouseLeave = _this$props.onMouseLeave;
    if (!xScale || !yScale) return null;
    var datum0 = data[0] || {};
    var isClosed = !definedOpen(datum0);
    var yMin = yScale.domain()[0];
    var y0 = isClosed ? function () {
      return yMin;
    } : getY0;
    var y1 = isClosed ? getY : getY1;
    var defined = isClosed ? definedClosed : definedOpen;
    var strokeDasharrayValue = Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_7__["callOrValue"])(strokeDasharray, data);
    var strokeValue = Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_7__["callOrValue"])(stroke, data);
    var strokeWidthValue = Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_7__["callOrValue"])(strokeWidth, data);
    var fillValue = Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_7__["callOrValue"])(fill, data);
    var curve = _utils_interpolatorLookup__WEBPACK_IMPORTED_MODULE_9__["default"][interpolation] || _utils_interpolatorLookup__WEBPACK_IMPORTED_MODULE_9__["default"].monotoneX;
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"], {
      style: disableMouseEvents ? noEventsStyles : null,
      onClick: disableMouseEvents ? null : onClick && function (event) {
        var d = Object(_utils_findClosestDatum__WEBPACK_IMPORTED_MODULE_8__["default"])({
          data: data,
          getX: x,
          event: event,
          xScale: xScale,
          marginLeft: margin.left
        });
        onClick({
          event: event,
          data: data,
          datum: d,
          color: fillValue
        });
      },
      onMouseMove: disableMouseEvents ? null : onMouseMove && function (event) {
        var d = Object(_utils_findClosestDatum__WEBPACK_IMPORTED_MODULE_8__["default"])({
          data: data,
          getX: x,
          event: event,
          xScale: xScale,
          marginLeft: margin.left
        });
        onMouseMove({
          event: event,
          data: data,
          datum: d,
          color: fillValue
        });
      },
      onMouseLeave: disableMouseEvents ? null : onMouseLeave
    }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_0__["Area"], {
      data: data,
      x: x,
      y0: y0,
      y1: y1,
      xScale: xScale,
      yScale: yScale,
      fill: fillValue,
      fillOpacity: Object(_utils_chartUtils__WEBPACK_IMPORTED_MODULE_7__["callOrValue"])(fillOpacity, data),
      stroke: "transparent",
      strokeWidth: strokeWidthValue,
      curve: curve,
      defined: defined
    }), strokeWidthValue > 0 && !isClosed && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_0__["LinePath"], {
      data: data,
      x: x,
      y: y0,
      xScale: xScale,
      yScale: yScale,
      stroke: strokeValue,
      strokeWidth: strokeWidthValue,
      strokeDasharray: strokeDasharrayValue,
      strokeLinecap: strokeLinecap,
      curve: curve,
      glyph: null,
      defined: defined
    }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_0__["LinePath"], {
      data: data,
      x: x,
      y: y1,
      xScale: xScale,
      yScale: yScale,
      stroke: strokeValue,
      strokeWidth: strokeWidthValue,
      strokeDasharray: strokeDasharrayValue,
      strokeLinecap: strokeLinecap,
      curve: curve,
      defined: defined,
      glyph: function glyph(d, i) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_data_ui_shared__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: "areapoint-" + i,
          onBlur: disableMouseEvents ? null : onMouseLeave,
          onFocus: disableMouseEvents ? null : function (event) {
            onMouseMove({
              event: event,
              data: data,
              datum: d,
              color: strokeValue,
              index: i
            });
          }
        });
      }
    }));
  };

  return AreaSeries;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.PureComponent);


AreaSeries.propTypes = propTypes;
AreaSeries.defaultProps = defaultProps;
AreaSeries.displayName = 'AreaSeries';

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/utils/chartUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/utils/chartUtils.js ***!
  \****************************************************************/
/*! exports provided: callOrValue, componentName, getChildWithName, isDefined, isAxis, isBarSeries, isBrush, isCirclePackSeries, isCrossHair, isReferenceLine, isSeries, isStackedSeries, numTicksForHeight, numTicksForWidth, propOrFallback, scaleInvert, getDomainFromExtent, DEFAULT_CHART_MARGIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callOrValue", function() { return callOrValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentName", function() { return componentName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildWithName", function() { return getChildWithName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAxis", function() { return isAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBarSeries", function() { return isBarSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrush", function() { return isBrush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCirclePackSeries", function() { return isCirclePackSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCrossHair", function() { return isCrossHair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReferenceLine", function() { return isReferenceLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSeries", function() { return isSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStackedSeries", function() { return isStackedSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numTicksForHeight", function() { return numTicksForHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numTicksForWidth", function() { return numTicksForWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propOrFallback", function() { return propOrFallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleInvert", function() { return scaleInvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomainFromExtent", function() { return getDomainFromExtent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CHART_MARGIN", function() { return DEFAULT_CHART_MARGIN; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint no-magic-numbers: 'off' */

function callOrValue(maybeFn) {
  if (typeof maybeFn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return maybeFn.apply(void 0, args);
  }

  return maybeFn;
}
function componentName(component) {
  if (component && component.type) {
    return component.type.displayName || component.type.name || 'Component';
  }

  return '';
}
function getChildWithName(name, children) {
  var ChildOfInterest = react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children).filter(function (c) {
    return componentName(c) === name;
  });
  return ChildOfInterest.length ? ChildOfInterest[0] : null;
}
function isDefined(val) {
  return typeof val !== 'undefined' && val !== null;
}
function isAxis(name) {
  return /axis/gi.test(name);
}
function isBarSeries(name) {
  return /bar/gi.test(name);
}
function isBrush(name) {
  return name === 'Brush';
}
function isCirclePackSeries(name) {
  return name === 'CirclePackSeries';
}
function isCrossHair(name) {
  return /crosshair/gi.test(name);
}
function isReferenceLine(name) {
  return /reference/gi.test(name);
}
function isSeries(name) {
  return /series/gi.test(name);
}
function isStackedSeries(name) {
  return /stacked/gi.test(name);
}
function numTicksForHeight(height) {
  if (height <= 300) return 3;
  if (height <= 600) return 5;
  return 8;
}
function numTicksForWidth(width) {
  if (width <= 300) return 3;
  if (width <= 400) return 5;
  return 10;
}
function propOrFallback(props, propName, fallback) {
  return props && isDefined(props[propName]) ? props[propName] : fallback;
}
function scaleInvert(scale, value) {
  // Test if the scale is an ordinalScale or not,
  // Since an ordinalScale doesn't support invert function.
  if (!scale.invert) {
    var _scale$range = scale.range(),
        start = _scale$range[0],
        end = _scale$range[1];

    var i = 0;
    var width = scale.step() * (end - start) / Math.abs(end - start);

    if (width > 0) {
      while (value > start + width * (i + 1)) {
        i += 1;
      }
    } else {
      while (value < start + width * (i + 1)) {
        i += 1;
      }
    }

    return i;
  }

  return scale.invert(value);
}
function getDomainFromExtent(scale, start, end, tolerentDelta) {
  var domain;
  var invertedStart = scaleInvert(scale, start + (start < end ? -tolerentDelta : tolerentDelta));
  var invertedEnd = scaleInvert(scale, end + (end < start ? -tolerentDelta : tolerentDelta));
  var minValue = Math.min(invertedStart, invertedEnd);
  var maxValue = Math.max(invertedStart, invertedEnd);

  if (scale.invert) {
    domain = {
      start: minValue,
      end: maxValue
    };
  } else {
    var values = [];
    var scaleDomain = scale.domain();

    for (var i = minValue; i <= maxValue; i += 1) {
      values.push(scaleDomain[i]);
    }

    domain = {
      values: values
    };
  }

  return domain;
}
var DEFAULT_CHART_MARGIN = {
  top: 64,
  right: 64,
  bottom: 64,
  left: 64
};

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/utils/collectDataFromChildSeries.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/utils/collectDataFromChildSeries.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collectDataFromChildSeries; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chartUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartUtils */ "./node_modules/@data-ui/xy-chart/esm/utils/chartUtils.js");
/* harmony import */ var _series_AreaDifferenceSeries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../series/AreaDifferenceSeries */ "./node_modules/@data-ui/xy-chart/esm/series/AreaDifferenceSeries.js");



function collectDataFromChildSeries(children) {
  var allData = [];
  react__WEBPACK_IMPORTED_MODULE_0__["Children"].forEach(children, function (Child) {
    if (Child && Child.props) {
      var data = Child.props.data;
      var name = Object(_chartUtils__WEBPACK_IMPORTED_MODULE_1__["componentName"])(Child);

      if (name === _series_AreaDifferenceSeries__WEBPACK_IMPORTED_MODULE_2__["default"].displayName) {
        allData = allData.concat(collectDataFromChildSeries(Child.props.children));
      } else if (data && Object(_chartUtils__WEBPACK_IMPORTED_MODULE_1__["isSeries"])(name)) {
        allData = allData.concat(Child.props.data);
      }
    }
  });
  return allData;
}

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/utils/collectScalesFromProps.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/utils/collectScalesFromProps.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collectScalesFromProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _collectDataFromChildSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collectDataFromChildSeries */ "./node_modules/@data-ui/xy-chart/esm/utils/collectDataFromChildSeries.js");
/* harmony import */ var _getChartDimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getChartDimensions */ "./node_modules/@data-ui/xy-chart/esm/utils/getChartDimensions.js");
/* harmony import */ var _getScaleForAccessor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getScaleForAccessor */ "./node_modules/@data-ui/xy-chart/esm/utils/getScaleForAccessor.js");
/* harmony import */ var _chartUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chartUtils */ "./node_modules/@data-ui/xy-chart/esm/utils/chartUtils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


 // import collectExtentsFromChildSeries from './collectExtentsFromChildSeries';





var getX = function getX(d) {
  return d && d.x;
};

var xString = function xString(d) {
  return getX(d).toString();
};

var getY = function getY(d) {
  return d && d.y;
};

var yString = function yString(d) {
  return getY(d).toString();
};

function collectScalesFromProps(props) {
  var xScaleObject = props.xScale,
      yScaleObject = props.yScale,
      children = props.children;

  var _getChartDimensions = Object(_getChartDimensions__WEBPACK_IMPORTED_MODULE_2__["default"])(props),
      innerWidth = _getChartDimensions.innerWidth,
      innerHeight = _getChartDimensions.innerHeight;

  var allData = Object(_collectDataFromChildSeries__WEBPACK_IMPORTED_MODULE_1__["default"])(children); // TODO could collect data extents from child series
  // which would support passing arbitrary x/y accessors
  // const [xExtent, yExtent] = collectExtentsFromChildSeries(children);
  // issues:
  //  voronoi transforms data via scale(getXorY(d))
  //    => Could be solved by transforming in data collection
  //  tooltip/crosshair transforms data via scale(getXorY(d))
  //    => could be solved by transforming in the mousemove call so series own it?

  var xScale = Object(_getScaleForAccessor__WEBPACK_IMPORTED_MODULE_3__["default"])(_extends({
    allData: allData,
    minAccessor: function minAccessor(d) {
      return typeof d.x0 === 'undefined' ? d.x : d.x0;
    },
    maxAccessor: function maxAccessor(d) {
      return typeof d.x1 === 'undefined' ? d.x : d.x1;
    },
    range: [0, innerWidth]
  }, xScaleObject));
  var yScale = Object(_getScaleForAccessor__WEBPACK_IMPORTED_MODULE_3__["default"])(_extends({
    allData: allData,
    minAccessor: function minAccessor(d) {
      return typeof d.y0 === 'undefined' ? d.y : d.y0;
    },
    maxAccessor: function maxAccessor(d) {
      return typeof d.y1 === 'undefined' ? d.y : d.y1;
    },
    range: [innerHeight, 0]
  }, yScaleObject));
  react__WEBPACK_IMPORTED_MODULE_0__["Children"].forEach(children, function (Child) {
    // Child-specific scales or adjustments here
    var name = Object(_chartUtils__WEBPACK_IMPORTED_MODULE_4__["componentName"])(Child);

    if (Object(_chartUtils__WEBPACK_IMPORTED_MODULE_4__["isBarSeries"])(name)) {
      var horizontal = Child.props.horizontal;
      var categoryScaleObject = horizontal ? yScaleObject : xScaleObject;

      if (categoryScaleObject.type !== 'band') {
        var categoryScale = horizontal ? yScale : xScale;
        var range = horizontal ? innerHeight : innerWidth;
        var dummyBand = Object(_getScaleForAccessor__WEBPACK_IMPORTED_MODULE_3__["default"])({
          allData: allData,
          minAccessor: horizontal ? yString : xString,
          maxAccessor: horizontal ? yString : xString,
          type: 'band',
          rangeRound: [0, range],
          paddingOuter: 1
        });
        var offset = dummyBand.bandwidth() / 2;
        categoryScale.range([offset, range - offset]);
        categoryScale.barWidth = dummyBand.bandwidth();
        categoryScale.offset = offset;
      }
    }

    if (Object(_chartUtils__WEBPACK_IMPORTED_MODULE_4__["isCirclePackSeries"])(name)) {
      yScale.domain([-innerHeight / 2, innerHeight / 2]);
    }
  });
  return {
    xScale: xScale,
    yScale: yScale
  };
}

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/utils/collectVoronoiData.js":
/*!************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/utils/collectVoronoiData.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collectVoronoiData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _series_AreaDifferenceSeries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../series/AreaDifferenceSeries */ "./node_modules/@data-ui/xy-chart/esm/series/AreaDifferenceSeries.js");
/* harmony import */ var _chartUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartUtils */ "./node_modules/@data-ui/xy-chart/esm/utils/chartUtils.js");


 // this function collects all data from child series to defines a voronoi overlay
// because x,y coordinates are required to define a voronoi, it filters any points
// with undefined x or y values

function collectVoronoiData(_ref) {
  var children = _ref.children,
      getX = _ref.getX,
      getY = _ref.getY;
  return react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children).reduce(function (result, Child) {
    var name = Object(_chartUtils__WEBPACK_IMPORTED_MODULE_2__["componentName"])(Child);

    if (Object(_chartUtils__WEBPACK_IMPORTED_MODULE_2__["isSeries"])(name) && !Child.props.disableMouseEvents) {
      if (name === _series_AreaDifferenceSeries__WEBPACK_IMPORTED_MODULE_1__["default"].displayName) {
        return result.concat(collectVoronoiData({
          children: Child.props.children,
          getX: getX,
          getY: getY
        }));
      }

      return result.concat(Child.props.data.filter(function (d) {
        return Object(_chartUtils__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(getX(d)) && Object(_chartUtils__WEBPACK_IMPORTED_MODULE_2__["isDefined"])(getY(d));
      }));
    }

    return result;
  }, []);
}

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/utils/findClosestDatum.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/utils/findClosestDatum.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return findClosestDatum; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _vx_event_build_localPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vx/event/build/localPoint */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/event/build/localPoint.js");
/* harmony import */ var _vx_event_build_localPoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vx_event_build_localPoint__WEBPACK_IMPORTED_MODULE_1__);


function findClosestDatum(_ref) {
  var data = _ref.data,
      getX = _ref.getX,
      xScale = _ref.xScale,
      event = _ref.event,
      _ref$marginLeft = _ref.marginLeft,
      marginLeft = _ref$marginLeft === void 0 ? 0 : _ref$marginLeft;
  if (!event || !event.target || !event.target.ownerSVGElement) return null;
  var bisect = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisector"])(getX).left; // if the g element has a transform we need to be in g coords not svg coords

  var svgCoords = _vx_event_build_localPoint__WEBPACK_IMPORTED_MODULE_1___default()(event.target.ownerSVGElement, event);
  var mouseX = svgCoords.x - marginLeft;
  var isOrdinalScale = typeof xScale.invert !== 'function';
  var d;

  if (isOrdinalScale) {
    // Ordinal scales don't have an invert function so we do it maually
    var xDomain = xScale.domain();
    var scaledXValues = xDomain.map(function (val) {
      return xScale(val);
    });
    var index = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisectLeft"])(scaledXValues, mouseX);
    var d0 = data[index - 1];
    var d1 = data[index];
    d = d0 || d1;
  } else {
    var dataX = xScale.invert(mouseX);

    var _index = bisect(data, dataX, 0);

    var _d = data[_index - 1];

    var _d2 = data[_index] || {};

    d = !_d || Math.abs(dataX - getX(_d)) > Math.abs(dataX - getX(_d2)) ? _d2 : _d;
  }

  return d;
}

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/utils/findClosestDatums.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/utils/findClosestDatums.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return findClosestDatums; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vx_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vx/event */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/event/dist/vx-event.es.js");
/* harmony import */ var _findClosestDatum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findClosestDatum */ "./node_modules/@data-ui/xy-chart/esm/utils/findClosestDatum.js");
/* harmony import */ var _chartUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartUtils */ "./node_modules/@data-ui/xy-chart/esm/utils/chartUtils.js");




var DEFAULT_MAX_DISTANCE_PX = 1000;
function findClosestDatums(_ref) {
  var children = _ref.children,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? {} : _ref$margin,
      getX = _ref.getX,
      getY = _ref.getY,
      event = _ref.event,
      _ref$maxXDistancePx = _ref.maxXDistancePx,
      maxXDistancePx = _ref$maxXDistancePx === void 0 ? DEFAULT_MAX_DISTANCE_PX : _ref$maxXDistancePx;
  if (!event || !event.target || !event.target.ownerSVGElement) return null;
  var series = {};
  var gElement = event.target.ownerSVGElement;

  var _localPoint = Object(_vx_event__WEBPACK_IMPORTED_MODULE_1__["localPoint"])(gElement, event),
      svgMouseX = _localPoint.x,
      svgMouseY = _localPoint.y;

  var mouseX = svgMouseX - (margin.left || 0);
  var mouseY = svgMouseY - (margin.top || 0);
  var closestDatum;
  var minDeltaX = Infinity;
  var minDeltaY = Infinity;
  var flatSeriesChildren = [];
  react__WEBPACK_IMPORTED_MODULE_0__["Children"].forEach(children, function (Child) {
    var name = Object(_chartUtils__WEBPACK_IMPORTED_MODULE_3__["componentName"])(Child);

    if (name === 'AreaDifferenceSeries') {
      react__WEBPACK_IMPORTED_MODULE_0__["Children"].forEach(Child.props.children, function (NestedChild) {
        flatSeriesChildren.push(NestedChild);
      });
    } else if (Object(_chartUtils__WEBPACK_IMPORTED_MODULE_3__["isSeries"])(name)) {
      flatSeriesChildren.push(Child);
    }
  }); // collect data from all series that have an x value near this point

  flatSeriesChildren.forEach(function (Child, childIndex) {
    if (!Child.props.disableMouseEvents) {
      var _Child$props = Child.props,
          data = _Child$props.data,
          seriesKey = _Child$props.seriesKey; // @TODO data should be sorted, come up with a way to enforce+cache instead of relying on user

      var datum = Object(_findClosestDatum__WEBPACK_IMPORTED_MODULE_2__["default"])({
        data: data,
        getX: getX,
        xScale: xScale,
        event: event,
        marginLeft: margin.left
      });
      var deltaX = Math.abs(xScale(getX(datum || {})) - mouseX);

      if (datum && deltaX <= maxXDistancePx) {
        var key = seriesKey || childIndex; // fall back to child index

        series[key] = datum;
        var deltaY = Math.abs(yScale(getY(datum)) - mouseY);
        closestDatum = deltaY < minDeltaY && deltaX <= minDeltaX ? datum : closestDatum;
        minDeltaX = closestDatum === datum ? deltaX : minDeltaX;
        minDeltaY = closestDatum === datum ? deltaY : minDeltaY;
      }
    }
  });
  return {
    series: series,
    closestDatum: closestDatum
  };
}

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/utils/getChartDimensions.js":
/*!************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/utils/getChartDimensions.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getChartDimensions; });
/* harmony import */ var _chartUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartUtils */ "./node_modules/@data-ui/xy-chart/esm/utils/chartUtils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function getChartDimensions(_ref) {
  var margin = _ref.margin,
      width = _ref.width,
      height = _ref.height;

  var completeMargin = _extends({}, _chartUtils__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CHART_MARGIN"], margin);

  return {
    margin: completeMargin,
    innerHeight: Math.max(0, height - completeMargin.top - completeMargin.bottom),
    innerWidth: Math.max(0, width - completeMargin.left - completeMargin.right)
  };
}

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/utils/getScaleForAccessor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/utils/getScaleForAccessor.js ***!
  \*************************************************************************/
/*! exports provided: scaleTypeToScale, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTypeToScale", function() { return scaleTypeToScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScaleForAccessor; });
/* harmony import */ var _vx_scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vx/scale */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/scale/dist/vx-scale.es.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var scaleTypeToScale = {
  time: _vx_scale__WEBPACK_IMPORTED_MODULE_0__["scaleTime"],
  timeUtc: _vx_scale__WEBPACK_IMPORTED_MODULE_0__["scaleUtc"],
  linear: _vx_scale__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"],
  band: _vx_scale__WEBPACK_IMPORTED_MODULE_0__["scaleBand"],
  ordinal: _vx_scale__WEBPACK_IMPORTED_MODULE_0__["scaleOrdinal"]
};
function getScaleForAccessor(_ref) {
  var allData = _ref.allData,
      minAccessor = _ref.minAccessor,
      maxAccessor = _ref.maxAccessor,
      type = _ref.type,
      _ref$includeZero = _ref.includeZero,
      includeZero = _ref$includeZero === void 0 ? true : _ref$includeZero,
      range = _ref.range,
      rest = _objectWithoutPropertiesLoose(_ref, ["allData", "minAccessor", "maxAccessor", "type", "includeZero", "range"]);

  var domain;

  if (type === 'band' || type === 'ordinal') {
    domain = allData.map(minAccessor);
  }

  if (type === 'linear' || type === 'time' || type === 'timeUtc') {
    var _extent = Object(d3_array__WEBPACK_IMPORTED_MODULE_1__["extent"])([].concat(Object(d3_array__WEBPACK_IMPORTED_MODULE_1__["extent"])(allData, minAccessor), Object(d3_array__WEBPACK_IMPORTED_MODULE_1__["extent"])(allData, maxAccessor))),
        min = _extent[0],
        max = _extent[1];

    domain = [type === 'linear' && includeZero ? Math.min(0, min) : min, type === 'linear' && includeZero ? Math.max(0, max) : max];
  }

  return scaleTypeToScale[type](_extends({
    domain: domain,
    range: range
  }, rest));
}

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/utils/interpolatorLookup.js":
/*!************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/utils/interpolatorLookup.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vx_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vx/curve */ "./node_modules/d3-shape/src/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  linear: _vx_curve__WEBPACK_IMPORTED_MODULE_0__["curveLinear"],
  cardinal: _vx_curve__WEBPACK_IMPORTED_MODULE_0__["curveCardinal"],
  monotoneX: _vx_curve__WEBPACK_IMPORTED_MODULE_0__["curveMonotoneX"],
  monotoneY: _vx_curve__WEBPACK_IMPORTED_MODULE_0__["curveMonotoneY"],
  natural: _vx_curve__WEBPACK_IMPORTED_MODULE_0__["curveNatural"]
});

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/utils/propShapes.js":
/*!****************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/utils/propShapes.js ***!
  \****************************************************************/
/*! exports provided: stringNumberDateObjectPropType, scaleShape, boxPlotSeriesDataShape, violinPlotSeriesDataShape, lineSeriesDataShape, areaSeriesDataShape, barSeriesDataShape, groupedBarSeriesDataShape, stackedBarSeriesDataShape, pointSeriesDataShape, intervalSeriesDataShape, axisStylesShape, tickStylesShape, gridStylesShape, themeShape, interpolationShape, pointComponentPropTypes, generalStyleShape, marginShape, brushShape, dragShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringNumberDateObjectPropType", function() { return stringNumberDateObjectPropType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleShape", function() { return scaleShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxPlotSeriesDataShape", function() { return boxPlotSeriesDataShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "violinPlotSeriesDataShape", function() { return violinPlotSeriesDataShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineSeriesDataShape", function() { return lineSeriesDataShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaSeriesDataShape", function() { return areaSeriesDataShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barSeriesDataShape", function() { return barSeriesDataShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupedBarSeriesDataShape", function() { return groupedBarSeriesDataShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackedBarSeriesDataShape", function() { return stackedBarSeriesDataShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointSeriesDataShape", function() { return pointSeriesDataShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intervalSeriesDataShape", function() { return intervalSeriesDataShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisStylesShape", function() { return axisStylesShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStylesShape", function() { return tickStylesShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridStylesShape", function() { return gridStylesShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeShape", function() { return themeShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolationShape", function() { return interpolationShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointComponentPropTypes", function() { return pointComponentPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalStyleShape", function() { return generalStyleShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marginShape", function() { return marginShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brushShape", function() { return brushShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragShape", function() { return dragShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interpolatorLookup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interpolatorLookup */ "./node_modules/@data-ui/xy-chart/esm/utils/interpolatorLookup.js");


var stringNumberDateObjectPropType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(Date), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]);
var scaleShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['time', 'timeUtc', 'linear', 'band']).isRequired,
  includeZero: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  // these would override any computation done by xyplot
  // and would allow specifying colors for scales, etc.
  range: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string])),
  rangeRound: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string])),
  domain: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]))
});
var boxPlotSeriesDataShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  x: stringNumberDateObjectPropType,
  median: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  min: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  max: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  firstQuartile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  thirdQuartile: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  outliers: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array.isRequired
}));
var violinPlotSeriesDataShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  x: stringNumberDateObjectPropType,
  binData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array.isRequired
}));
var lineSeriesDataShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  x: stringNumberDateObjectPropType,
  y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number // null data are not rendered

}));
var areaSeriesDataShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  x: stringNumberDateObjectPropType,
  y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  // null data are not rendered
  y0: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  y1: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}));
var barSeriesDataShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  x: stringNumberDateObjectPropType,
  y: stringNumberDateObjectPropType,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}));
var groupedBarSeriesDataShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  x: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]).isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
}));
var stackedBarSeriesDataShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  x: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]).isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
}));
var pointSeriesDataShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  x: stringNumberDateObjectPropType,
  y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}));
var intervalSeriesDataShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  x0: stringNumberDateObjectPropType,
  x1: stringNumberDateObjectPropType,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}));
var axisStylesShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    left: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    right: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    top: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
  })
});
var tickStylesShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  tickLength: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    left: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    right: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
    top: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
  })
});
var gridStylesShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
var themeShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  gridStyles: gridStylesShape,
  xAxisStyles: axisStylesShape,
  xTickStyles: tickStylesShape,
  yAxisStyles: axisStylesShape,
  yTickStyles: tickStylesShape
});
var interpolationShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(Object.keys(_interpolatorLookup__WEBPACK_IMPORTED_MODULE_1__["default"]));
var pointComponentPropTypes = {
  x: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  fillOpacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  data: pointSeriesDataShape.isRequired,
  datum: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object.isRequired
};
var generalStyleShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  strokeOpacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  fillOpacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
var marginShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  top: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  right: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
var brushShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  start: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
    y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
  }),
  end: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
    y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
  }),
  extent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    x0: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
    y0: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
    x1: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
    y1: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
  }),
  bounds: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    x0: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
    y0: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
    x1: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
    y1: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
  })
});
var dragShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  x: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  dx: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  dy: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  isDragging: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  dragEnd: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  dragMove: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  dragStart: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
});

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/utils/shallowCompareObjectEntries.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/utils/shallowCompareObjectEntries.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowCompareObjectEntries; });
function shallowCompareObjectEntries(a, b) {
  var keysA = Object.keys(a);
  var keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(function (k) {
    return a[k] === b[k];
  });
}

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/esm/utils/sharedSeriesProps.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/esm/utils/sharedSeriesProps.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _propShapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propShapes */ "./node_modules/@data-ui/xy-chart/esm/utils/propShapes.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  disableMouseEvents: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  seriesKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  margin: _propShapes__WEBPACK_IMPORTED_MODULE_1__["marginShape"]
});

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/node_modules/@vx/event/build/localPoint.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/node_modules/@vx/event/build/localPoint.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = localPoint;

var _point = __webpack_require__(/*! @vx/point */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/point/dist/vx-point.es.js");

function localPoint(node, event) {
  // called with no args
  if (!node) return;

  // called with localPoint(event)
  if (node.target) {
    event = node;

    // set node to targets owner svg
    node = event.target.ownerSVGElement;

    // find the outermost svg
    while (node.ownerSVGElement) {
      node = node.ownerSVGElement;
    }
  }

  // default to mouse event
  var _event = event,
      clientX = _event.clientX,
      clientY = _event.clientY;

  // support touch event

  if (event.changedTouches) {
    clientX = event.changedTouches[0].clientX;
    clientY = event.changedTouches[0].clientY;
  }

  // calculate coordinates from svg
  if (node.createSVGPoint) {
    var point = node.createSVGPoint();
    point.x = clientX;
    point.y = clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return new _point.Point({
      x: point.x,
      y: point.y
    });
  }

  // fallback to calculating position from non-svg dom node
  var rect = node.getBoundingClientRect();
  return new _point.Point({
    x: clientX - rect.left - node.clientLeft,
    y: clientY - rect.top - node.clientTop
  });
}

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/node_modules/@vx/event/dist/vx-event.es.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/node_modules/@vx/event/dist/vx-event.es.js ***!
  \***********************************************************************************/
/*! exports provided: localPoint, touchPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localPoint", function() { return localPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchPoint", function() { return touchPoint; });
/* harmony import */ var _vx_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vx/point */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/point/dist/vx-point.es.js");


function localPoint(node, event) {
  // called with no args
  if (!node) return;

  // called with localPoint(event)
  if (node.target) {
    event = node;

    // set node to targets owner svg
    node = event.target.ownerSVGElement;

    // find the outermost svg
    while (node.ownerSVGElement) {
      node = node.ownerSVGElement;
    }
  }

  // default to mouse event
  var _event = event,
      clientX = _event.clientX,
      clientY = _event.clientY;

  // support touch event

  if (event.changedTouches) {
    clientX = event.changedTouches[0].clientX;
    clientY = event.changedTouches[0].clientY;
  }

  // calculate coordinates from svg
  if (node.createSVGPoint) {
    var point = node.createSVGPoint();
    point.x = clientX;
    point.y = clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return new _vx_point__WEBPACK_IMPORTED_MODULE_0__["Point"]({
      x: point.x,
      y: point.y
    });
  }

  // fallback to calculating position from non-svg dom node
  var rect = node.getBoundingClientRect();
  return new _vx_point__WEBPACK_IMPORTED_MODULE_0__["Point"]({
    x: clientX - rect.left - node.clientLeft,
    y: clientY - rect.top - node.clientTop
  });
}

function touchPoint(node, event) {
  if (!node) return;
  var svg = node.ownerSVGElement || node;
  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.changedTouches[0].clientX;
    point.y = event.changedTouches[0].clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return new _vx_point__WEBPACK_IMPORTED_MODULE_0__["Point"]({
      x: point.x,
      y: point.y
    });
  }
  var rect = node.getBoundingClientRect();
  return new _vx_point__WEBPACK_IMPORTED_MODULE_0__["Point"]({
    x: event.changedTouches[0].clientX - rect.left - node.clientLeft,
    y: event.changedTouches[0].clientY - rect.top - node.clientTop
  });
}




/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/node_modules/@vx/gradient/build/gradients/LinearGradient.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/node_modules/@vx/gradient/build/gradients/LinearGradient.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinearGradient;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinearGradient.propTypes = {
  id: _propTypes2.default.string.isRequired,
  from: _propTypes2.default.string,
  to: _propTypes2.default.string,
  x1: _propTypes2.default.string,
  y1: _propTypes2.default.string,
  y2: _propTypes2.default.string,
  fromOffset: _propTypes2.default.string,
  fromOpacity: _propTypes2.default.number,
  toOffset: _propTypes2.default.string,
  toOpacity: _propTypes2.default.number,
  rotate: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  transform: _propTypes2.default.string
};

function LinearGradient(_ref) {
  var children = _ref.children,
      id = _ref.id,
      from = _ref.from,
      to = _ref.to,
      x1 = _ref.x1,
      y1 = _ref.y1,
      x2 = _ref.x2,
      y2 = _ref.y2,
      _ref$fromOffset = _ref.fromOffset,
      fromOffset = _ref$fromOffset === undefined ? '0%' : _ref$fromOffset,
      _ref$fromOpacity = _ref.fromOpacity,
      fromOpacity = _ref$fromOpacity === undefined ? 1 : _ref$fromOpacity,
      _ref$toOffset = _ref.toOffset,
      toOffset = _ref$toOffset === undefined ? '100%' : _ref$toOffset,
      _ref$toOpacity = _ref.toOpacity,
      toOpacity = _ref$toOpacity === undefined ? 1 : _ref$toOpacity,
      rotate = _ref.rotate,
      transform = _ref.transform,
      _ref$vertical = _ref.vertical,
      vertical = _ref$vertical === undefined ? true : _ref$vertical,
      restProps = _objectWithoutProperties(_ref, ['children', 'id', 'from', 'to', 'x1', 'y1', 'x2', 'y2', 'fromOffset', 'fromOpacity', 'toOffset', 'toOpacity', 'rotate', 'transform', 'vertical']);

  if (vertical && !x1 && !x2 && !y1 && !y2) {
    x1 = '0';
    x2 = '0';
    y1 = '0';
    y2 = '1';
  }
  return _react2.default.createElement(
    'defs',
    null,
    _react2.default.createElement(
      'linearGradient',
      _extends({
        id: id,
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        gradientTransform: rotate ? 'rotate(' + rotate + ')' : transform
      }, restProps),
      !!children && children,
      !children && _react2.default.createElement('stop', { offset: fromOffset, stopColor: from, stopOpacity: fromOpacity }),
      !children && _react2.default.createElement('stop', { offset: toOffset, stopColor: to, stopOpacity: toOpacity })
    )
  );
}

/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/node_modules/@vx/grid/dist/vx-grid.es.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/node_modules/@vx/grid/dist/vx-grid.es.js ***!
  \*********************************************************************************/
/*! exports provided: GridRows, GridColumns, Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridRows", function() { return Rows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridColumns", function() { return Columns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/shape */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/grid/node_modules/@vx/shape/dist/vx-shape.es.js");
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/group */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/grid/node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var _vx_point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/point */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/point/dist/vx-point.es.js");







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

Rows.propTypes = {
  top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  numTicks: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  lineStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  scale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  tickValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

function Rows(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      scale = _ref.scale,
      width = _ref.width,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? '#eaf0f6' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 1 : _ref$strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      className = _ref.className,
      _ref$numTicks = _ref.numTicks,
      numTicks = _ref$numTicks === undefined ? 10 : _ref$numTicks,
      lineStyle = _ref.lineStyle,
      offset = _ref.offset,
      tickValues = _ref.tickValues,
      restProps = objectWithoutProperties(_ref, ['top', 'left', 'scale', 'width', 'stroke', 'strokeWidth', 'strokeDasharray', 'className', 'numTicks', 'lineStyle', 'offset', 'tickValues']);

  var ticks = scale.ticks ? scale.ticks(numTicks) : scale.domain();
  if (tickValues) ticks = tickValues;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_4__["Group"],
    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-rows', className), top: top, left: left },
    ticks.map(function (d, i) {
      var y = offset ? scale(d) + offset : scale(d);
      var fromPoint = new _vx_point__WEBPACK_IMPORTED_MODULE_5__["Point"]({
        x: 0,
        y: y
      });
      var toPoint = new _vx_point__WEBPACK_IMPORTED_MODULE_5__["Point"]({
        x: width,
        y: y
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_3__["Line"], _extends({
        key: 'row-line-' + d + '-' + i,
        from: fromPoint,
        to: toPoint,
        stroke: stroke,
        strokeWidth: strokeWidth,
        strokeDasharray: strokeDasharray,
        style: lineStyle
      }, restProps));
    })
  );
}

Columns.propTypes = {
  top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  numTicks: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  lineStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  scale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  tickValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

function Columns(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      scale = _ref.scale,
      height = _ref.height,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? '#eaf0f6' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 1 : _ref$strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      className = _ref.className,
      _ref$numTicks = _ref.numTicks,
      numTicks = _ref$numTicks === undefined ? 10 : _ref$numTicks,
      lineStyle = _ref.lineStyle,
      offset = _ref.offset,
      tickValues = _ref.tickValues,
      restProps = objectWithoutProperties(_ref, ['top', 'left', 'scale', 'height', 'stroke', 'strokeWidth', 'strokeDasharray', 'className', 'numTicks', 'lineStyle', 'offset', 'tickValues']);

  var ticks = scale.ticks ? scale.ticks(numTicks) : scale.domain();
  if (tickValues) ticks = tickValues;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_4__["Group"],
    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-columns', className), top: top, left: left },
    ticks.map(function (d, i) {
      var x = offset ? scale(d) + offset : scale(d);
      var fromPoint = new _vx_point__WEBPACK_IMPORTED_MODULE_5__["Point"]({
        x: x,
        y: 0
      });
      var toPoint = new _vx_point__WEBPACK_IMPORTED_MODULE_5__["Point"]({
        x: x,
        y: height
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_3__["Line"], _extends({
        key: 'column-line-' + d + '-' + i,
        from: fromPoint,
        to: toPoint,
        stroke: stroke,
        strokeWidth: strokeWidth,
        strokeDasharray: strokeDasharray,
        style: lineStyle
      }, restProps));
    })
  );
}

Grid.propTypes = {
  top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  numTicksRows: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  numTicksColumns: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  rowLineStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  columnLineStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  xOffset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  yOffset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  rowTickValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  columnTickValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

function Grid(_ref) {
  var top = _ref.top,
      left = _ref.left,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      width = _ref.width,
      height = _ref.height,
      className = _ref.className,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      numTicksRows = _ref.numTicksRows,
      numTicksColumns = _ref.numTicksColumns,
      rowLineStyle = _ref.rowLineStyle,
      columnLineStyle = _ref.columnLineStyle,
      xOffset = _ref.xOffset,
      yOffset = _ref.yOffset,
      rowTickValues = _ref.rowTickValues,
      columnTickValues = _ref.columnTickValues,
      restProps = objectWithoutProperties(_ref, ['top', 'left', 'xScale', 'yScale', 'width', 'height', 'className', 'stroke', 'strokeWidth', 'strokeDasharray', 'numTicksRows', 'numTicksColumns', 'rowLineStyle', 'columnLineStyle', 'xOffset', 'yOffset', 'rowTickValues', 'columnTickValues']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_4__["Group"],
    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-grid', className), top: top, left: left },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rows, _extends({
      className: className,
      scale: yScale,
      width: width,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      numTicks: numTicksRows,
      style: rowLineStyle,
      offset: yOffset,
      tickValues: rowTickValues
    }, restProps)),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Columns, _extends({
      className: className,
      scale: xScale,
      height: height,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      numTicks: numTicksColumns,
      style: columnLineStyle,
      offset: xOffset,
      tickValues: columnTickValues
    }, restProps))
  );
}




/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/node_modules/@vx/grid/node_modules/@vx/group/dist/vx-group.es.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/node_modules/@vx/grid/node_modules/@vx/group/dist/vx-group.es.js ***!
  \*********************************************************************************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

function Group(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      transform = _ref.transform,
      className = _ref.className,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['top', 'left', 'transform', 'className', 'children']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-group', className),
      transform: transform || 'translate(' + left + ', ' + top + ')'
    }, restProps),
    children
  );
}




/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/node_modules/@vx/grid/node_modules/@vx/shape/dist/vx-shape.es.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/node_modules/@vx/grid/node_modules/@vx/shape/dist/vx-shape.es.js ***!
  \*********************************************************************************************************/
/*! exports provided: Arc, Pie, Line, LinePath, LineRadial, Area, AreaClosed, AreaStack, Bar, BarGroup, BarGroupHorizontal, BarStack, BarStackHorizontal, Stack, callOrValue, stackOffset, STACK_OFFSETS, STACK_OFFSET_NAMES, stackOrder, STACK_ORDERS, STACK_ORDER_NAMES, degreesToRadians, LinkHorizontal, pathHorizontalDiagonal, LinkVertical, pathVerticalDiagonal, LinkRadial, pathRadialDiagonal, LinkHorizontalCurve, pathHorizontalCurve, LinkVerticalCurve, pathVerticalCurve, LinkRadialCurve, pathRadialCurve, LinkHorizontalLine, pathHorizontalLine, LinkVerticalLine, pathVerticalLine, LinkRadialLine, pathRadialLine, LinkHorizontalStep, pathHorizontalStep, LinkVerticalStep, pathVerticalStep, LinkRadialStep, pathRadialStep, Polygon, getPoints, getPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arc", function() { return Arc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return Pie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinePath", function() { return LinePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineRadial", function() { return LineRadial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaClosed", function() { return AreaClosed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaStack", function() { return AreaStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarGroup", function() { return BarGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarGroupHorizontal", function() { return BarGroupHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarStack", function() { return BarStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarStackHorizontal", function() { return BarStackHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callOrValue", function() { return callOrValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffset", function() { return stackOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STACK_OFFSETS", function() { return STACK_OFFSETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STACK_OFFSET_NAMES", function() { return STACK_OFFSET_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrder", function() { return stackOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STACK_ORDERS", function() { return STACK_ORDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STACK_ORDER_NAMES", function() { return STACK_ORDER_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreesToRadians", function() { return degreesToRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHorizontal", function() { return LinkHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathHorizontalDiagonal", function() { return pathHorizontalDiagonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVertical", function() { return LinkVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathVerticalDiagonal", function() { return pathVerticalDiagonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRadial", function() { return LinkRadial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRadialDiagonal", function() { return pathRadialDiagonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHorizontalCurve", function() { return LinkHorizontalCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathHorizontalCurve", function() { return pathHorizontalCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVerticalCurve", function() { return LinkVerticalCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathVerticalCurve", function() { return pathVerticalCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRadialCurve", function() { return LinkRadialCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRadialCurve", function() { return pathRadialCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHorizontalLine", function() { return LinkHorizontalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathHorizontalLine", function() { return pathHorizontalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVerticalLine", function() { return LinkVerticalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathVerticalLine", function() { return pathVerticalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRadialLine", function() { return LinkRadialStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRadialLine", function() { return pathRadialLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHorizontalStep", function() { return LinkHorizontalStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathHorizontalStep", function() { return pathHorizontalStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVerticalStep", function() { return LinkVerticalStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathVerticalStep", function() { return pathVerticalStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRadialStep", function() { return LinkRadialStep$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRadialStep", function() { return pathRadialStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoints", function() { return getPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoint", function() { return getPoint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/group */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/grid/node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var _vx_point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/point */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/point/dist/vx-point.es.js");
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");









function callOrValue(maybeFn, data) {
  if (typeof maybeFn === 'function') {
    return maybeFn(data);
  }
  return maybeFn;
}

function additionalProps(restProps, data) {
  return Object.keys(restProps).reduce(function (ret, cur) {
    ret[cur] = callOrValue(restProps[cur], data);
    return ret;
  }, {});
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

Arc.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  centroid: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  innerRadius: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  outerRadius: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  cornerRadius: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  startAngle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  endAngle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  padAngle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  padRadius: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number])
};

function Arc(_ref) {
  var className = _ref.className,
      data = _ref.data,
      centroid = _ref.centroid,
      innerRadius = _ref.innerRadius,
      outerRadius = _ref.outerRadius,
      cornerRadius = _ref.cornerRadius,
      startAngle = _ref.startAngle,
      endAngle = _ref.endAngle,
      padAngle = _ref.padAngle,
      padRadius = _ref.padRadius,
      restProps = objectWithoutProperties(_ref, ['className', 'data', 'centroid', 'innerRadius', 'outerRadius', 'cornerRadius', 'startAngle', 'endAngle', 'padAngle', 'padRadius']);

  var arc$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_3__["arc"])();
  if (centroid) arc$$1.centroid(centroid);
  if (innerRadius) arc$$1.innerRadius(innerRadius);
  if (outerRadius) arc$$1.outerRadius(outerRadius);
  if (cornerRadius) arc$$1.cornerRadius(cornerRadius);
  if (startAngle) arc$$1.startAngle(startAngle);
  if (endAngle) arc$$1.endAngle(endAngle);
  if (padAngle) arc$$1.padAngle(padAngle);
  if (padRadius) arc$$1.padRadius(padRadius);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({ className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-arc', className), d: arc$$1(data) }, additionalProps(restProps, data)));
}

Pie.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  centroid: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  innerRadius: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  outerRadius: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  cornerRadius: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  startAngle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  endAngle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  padAngle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  padRadius: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  pieSort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  pieSortValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  pieValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function Pie(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      data = _ref.data,
      centroid = _ref.centroid,
      _ref$innerRadius = _ref.innerRadius,
      innerRadius = _ref$innerRadius === undefined ? 0 : _ref$innerRadius,
      outerRadius = _ref.outerRadius,
      cornerRadius = _ref.cornerRadius,
      _ref$startAngle = _ref.startAngle,
      startAngle = _ref$startAngle === undefined ? 0 : _ref$startAngle,
      endAngle = _ref.endAngle,
      padAngle = _ref.padAngle,
      padRadius = _ref.padRadius,
      pieSort = _ref.pieSort,
      pieSortValues = _ref.pieSortValues,
      pieValue = _ref.pieValue,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['className', 'top', 'left', 'data', 'centroid', 'innerRadius', 'outerRadius', 'cornerRadius', 'startAngle', 'endAngle', 'padAngle', 'padRadius', 'pieSort', 'pieSortValues', 'pieValue', 'children']);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_3__["arc"])();
  path$$1.innerRadius(innerRadius);
  if (outerRadius) path$$1.outerRadius(outerRadius);
  if (cornerRadius) path$$1.cornerRadius(cornerRadius);
  if (padRadius) path$$1.padRadius(padRadius);
  var pie$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_3__["pie"])();
  if (pieSort !== undefined) pie$$1.sort(pieSort);
  if (pieSortValues !== undefined) pie$$1.sortValues(pieSortValues);
  if (pieValue) pie$$1.value(pieValue);
  if (padAngle != null) pie$$1.padAngle(padAngle);
  if (startAngle != null) pie$$1.startAngle(startAngle);
  if (endAngle != null) pie$$1.endAngle(endAngle);
  var arcs = pie$$1(data);
  var renderFunctionArg = {
    arcs: arcs,
    generatePathProps: function generatePathProps(arc$$1, index) {
      return _extends({
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-pie-arc', className),
        d: path$$1(arc$$1)
      }, additionalProps(restProps, _extends({}, arc$$1, {
        index: index,
        centroid: centroid ? path$$1.centroid(arc$$1) : undefined
      })));
    },
    generateCentroid: function generateCentroid(arc$$1) {
      return centroid && centroid(path$$1.centroid(arc$$1), arc$$1);
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_4__["Group"],
    { className: 'vx-pie-arcs-group', top: top, left: left },
    children ? children(renderFunctionArg) : arcs.map(function (arc$$1, i) {
      var pathProps = renderFunctionArg.generatePathProps(arc$$1, i);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'g',
        { key: 'pie-arc-' + i },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', pathProps),
        renderFunctionArg.generateCentroid(arc$$1)
      );
    })
  );
}

Line.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function Line(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === undefined ? new _vx_point__WEBPACK_IMPORTED_MODULE_5__["Point"]({ x: 0, y: 0 }) : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === undefined ? new _vx_point__WEBPACK_IMPORTED_MODULE_5__["Point"]({ x: 1, y: 1 }) : _ref$to,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 1 : _ref$strokeWidth,
      _ref$strokeDasharray = _ref.strokeDasharray,
      strokeDasharray = _ref$strokeDasharray === undefined ? '' : _ref$strokeDasharray,
      _ref$transform = _ref.transform,
      transform = _ref$transform === undefined ? '' : _ref$transform,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      data = _ref.data,
      innerRef = _ref.innerRef,
      restProps = objectWithoutProperties(_ref, ['from', 'to', 'stroke', 'strokeWidth', 'strokeDasharray', 'transform', 'className', 'data', 'innerRef']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('line', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-line', className),
    x1: from.x,
    y1: from.y,
    x2: to.x,
    y2: to.y,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    transform: transform
  }, additionalProps(restProps, data)));
}

LinePath.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  defined: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  glyph: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  curve: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function LinePath(_ref) {
  var children = _ref.children,
      data = _ref.data,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      x = _ref.x,
      y = _ref.y,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'steelblue' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$strokeDasharray = _ref.strokeDasharray,
      strokeDasharray = _ref$strokeDasharray === undefined ? '' : _ref$strokeDasharray,
      _ref$strokeDashoffset = _ref.strokeDashoffset,
      strokeDashoffset = _ref$strokeDashoffset === undefined ? 0 : _ref$strokeDashoffset,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'none' : _ref$fill,
      _ref$curve = _ref.curve,
      curve = _ref$curve === undefined ? d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveLinear"] : _ref$curve,
      glyph = _ref.glyph,
      innerRef = _ref.innerRef,
      restProps = objectWithoutProperties(_ref, ['children', 'data', 'xScale', 'yScale', 'x', 'y', 'defined', 'className', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeDashoffset', 'fill', 'curve', 'glyph', 'innerRef']);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_3__["line"])().x(function () {
    return xScale(x.apply(undefined, arguments));
  }).y(function () {
    return yScale(y.apply(undefined, arguments));
  }).defined(defined).curve(curve);
  if (children) return children({ path: path$$1 });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-linepath', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      strokeDashoffset: strokeDashoffset,
      fill: fill
    }, additionalProps(restProps, data))),
    glyph && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'g',
      { className: 'vx-linepath-glyphs' },
      data.map(glyph)
    )
  );
}

LineRadial.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function LineRadial(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      angle = _ref.angle,
      radius = _ref.radius,
      defined = _ref.defined,
      curve = _ref.curve,
      data = _ref.data,
      innerRef = _ref.innerRef,
      restProps = objectWithoutProperties(_ref, ['className', 'angle', 'radius', 'defined', 'curve', 'data', 'innerRef']);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_3__["radialLine"])();
  if (angle) path$$1.angle(angle);
  if (radius) path$$1.radius(radius);
  if (defined) path$$1.defined(defined);
  if (curve) path$$1.curve(curve);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-line-radial', className),
      d: path$$1(data)
    }, additionalProps(restProps, data)))
  );
}

Area.propTypes = {
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  x0: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  x1: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  y0: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  y1: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  defined: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  curve: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function Area(_ref) {
  var children = _ref.children,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y = _ref.y,
      y0 = _ref.y0,
      y1 = _ref.y1,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      strokeDasharray = _ref.strokeDasharray,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'rgba(0,0,0,0.3)' : _ref$fill,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      restProps = objectWithoutProperties(_ref, ['children', 'x', 'x0', 'x1', 'y', 'y0', 'y1', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_3__["area"])();
  if (x) path$$1.x(function () {
    return xScale(x.apply(undefined, arguments));
  });
  if (x0) path$$1.x0(function () {
    return xScale(x0.apply(undefined, arguments));
  });
  if (x1) path$$1.x1(function () {
    return xScale(x1.apply(undefined, arguments));
  });
  if (y) path$$1.y(function () {
    return yScale(y.apply(undefined, arguments));
  });
  if (y0) path$$1.y0(function () {
    return yScale(y0.apply(undefined, arguments));
  });
  if (y1) path$$1.y1(function () {
    return yScale(y1.apply(undefined, arguments));
  });
  if (defined) path$$1.defined(defined);
  if (curve) path$$1.curve(curve);
  if (children) return children({ path: path$$1 });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-area', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, additionalProps(restProps, data)))
  );
}

AreaClosed.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function AreaClosed(_ref) {
  var x = _ref.x,
      y = _ref.y,
      y0 = _ref.y0,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      data = _ref.data,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      strokeDasharray = _ref.strokeDasharray,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'rgba(0,0,0,0.3)' : _ref$fill,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      restProps = objectWithoutProperties(_ref, ['x', 'y', 'y0', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_3__["area"])().x(function () {
    return xScale(x.apply(undefined, arguments));
  }).y0(y0 || yScale.range()[0]).y1(function () {
    return yScale(y.apply(undefined, arguments));
  }).defined(defined);
  if (curve) path$$1.curve(curve);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-area-closed', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, additionalProps(restProps, data)))
  );
}

AreaStack.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  curve: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  defined: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool]),
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  x0: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  x1: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  y0: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  y1: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  glyph: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

function AreaStack(_ref) {
  var className = _ref.className,
      keys = _ref.keys,
      data = _ref.data,
      curve = _ref.curve,
      defined = _ref.defined,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y0 = _ref.y0,
      y1 = _ref.y1,
      glyph = _ref.glyph,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      restProps = objectWithoutProperties(_ref, ['className', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'glyph', 'reverse']);

  var stack$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_3__["stack"])();
  if (keys) stack$$1.keys(keys);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_3__["area"])();
  if (x) path$$1.x(x);
  if (x0) path$$1.x0(x0);
  if (x1) path$$1.x1(x1);
  if (y0) path$$1.y0(y0);
  if (y1) path$$1.y1(y1);
  if (curve) path$$1.curve(curve);
  if (defined) path$$1.defined(defined);

  var seriesData = stack$$1(data);
  if (reverse) seriesData.reverse();

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    seriesData.map(function (series, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-area-stack', className),
        key: 'area-stack-' + i + '-' + (series.key || ''),
        d: path$$1(series)
      }, additionalProps(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    }),
    !!glyph && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'g',
      { className: 'vx-area-stack-glyphs' },
      data.map(glyph)
    )
  );
}

Bar.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function Bar(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      width = _ref.width,
      height = _ref.height,
      rx = _ref.rx,
      ry = _ref.ry,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'steelblue' : _ref$fill,
      fillOpacity = _ref.fillOpacity,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      strokeLinecap = _ref.strokeLinecap,
      strokeLinejoin = _ref.strokeLinejoin,
      strokeMiterlimit = _ref.strokeMiterlimit,
      strokeOpacity = _ref.strokeOpacity,
      restProps = objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y', 'width', 'height', 'rx', 'ry', 'fill', 'fillOpacity', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-bar', className),
    x: x,
    y: y,
    width: width,
    height: height,
    rx: rx,
    ry: ry,
    fill: fill,
    fillOpacity: fillOpacity,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    strokeLinecap: strokeLinecap,
    strokeLinejoin: strokeLinejoin,
    strokeMiterlimit: strokeMiterlimit,
    strokeOpacity: strokeOpacity
  }, additionalProps(restProps, data)));
}

BarGroup.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  x0: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  x0Scale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  x1Scale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  zScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};

function BarGroup(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x0 = _ref.x0,
      x0Scale = _ref.x0Scale,
      x1Scale = _ref.x1Scale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x0', 'x0Scale', 'x1Scale', 'yScale', 'zScale', 'keys', 'height']);

  var format = x0Scale.tickFormat ? x0Scale.tickFormat() : function (d) {
    return d;
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_4__["Group"],
    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-bar-group', className), top: top, left: left },
    data && data.map(function (d, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _vx_group__WEBPACK_IMPORTED_MODULE_4__["Group"],
        { key: 'bar-group-' + i + '-' + x0(d), left: x0Scale(x0(d)) },
        keys && keys.map(function (key, j) {
          var value = d[key];
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, _extends({
            key: 'bar-group-bar-' + i + '-' + j + '-' + value + '-' + key,
            x: x1Scale(key),
            y: yScale(value),
            width: x1Scale.bandwidth(),
            height: height - yScale(value),
            fill: zScale(key),
            data: {
              key: key,
              value: value,
              x: format(x0(d)),
              data: d
            }
          }, restProps));
        })
      );
    })
  );
}

BarGroupHorizontal.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  y0: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  y0Scale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  y1Scale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  zScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};

function BarGroupHorizontal(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      y0 = _ref.y0,
      y0Scale = _ref.y0Scale,
      y1Scale = _ref.y1Scale,
      xScale = _ref.xScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      width = _ref.width,
      restProps = objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'y0', 'y0Scale', 'y1Scale', 'xScale', 'zScale', 'keys', 'width']);

  var format = y0Scale.tickFormat ? y0Scale.tickFormat() : function (d) {
    return d;
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_4__["Group"],
    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-bar-group-horizontal', className), top: top, left: left },
    data && data.map(function (d, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _vx_group__WEBPACK_IMPORTED_MODULE_4__["Group"],
        { key: 'bar-group-' + i + '-' + y0(d), top: y0Scale(y0(d)) },
        keys && keys.map(function (key, j) {
          var value = d[key];
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, _extends({
            key: 'bar-group-bar-' + i + '-' + j + '-' + value + '-' + key,
            x: 0,
            y: y1Scale(key),
            width: width - xScale(value),
            height: y1Scale.bandwidth(),
            fill: zScale(key),
            data: {
              key: key,
              value: value,
              y: format(y0(d)),
              data: d
            }
          }, restProps));
        })
      );
    })
  );
}

function objHasMethod(obj, funcName) {
  return !!obj[funcName] && typeof obj[funcName] === 'function';
}

BarStack.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  zScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};

function BarStack(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x = _ref.x,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      width = _ref.width,
      height = _ref.height,
      restProps = objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x', 'xScale', 'yScale', 'zScale', 'keys', 'width', 'height']);

  var series = Object(d3_shape__WEBPACK_IMPORTED_MODULE_3__["stack"])().keys(keys)(data);
  var format = xScale.tickFormat ? xScale.tickFormat() : function (d) {
    return d;
  };
  var xRange = xScale.range();
  var xDomain = xScale.domain();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_4__["Group"],
    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-bar-stack', className), top: top, left: left },
    series && series.map(function (s, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _vx_group__WEBPACK_IMPORTED_MODULE_4__["Group"],
        { key: 'vx-bar-stack-' + i },
        s.map(function (d, ii) {
          var barHeight = yScale(d[0]) - yScale(d[1]);
          var barWidth = width || (objHasMethod(xScale, 'bandwidth') ? xScale.bandwidth() : Math.abs(xRange[xRange.length - 1] - xRange[0]) / xDomain.length);

          var barX = objHasMethod(xScale, 'bandwidth') ? xScale(x(d.data)) : xScale(x(d.data)) - barWidth / 2;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, _extends({
            key: 'bar-group-bar-' + i + '-' + ii + '-' + s.key,
            x: barX,
            y: yScale(d[1]),
            width: barWidth,
            height: barHeight,
            fill: zScale(s.key),
            data: {
              paddingInner: objHasMethod(xScale, 'paddingInner') && xScale.paddingInner(),
              paddingOuter: objHasMethod(xScale, 'paddingOuter') && xScale.paddingOuter(),
              step: objHasMethod(xScale, 'step') && xScale.step(),
              key: s.key,
              value: d[1],
              height: barHeight,
              width: barWidth,
              x: x(d.data),
              xFormatted: format(x(d.data)),
              data: d.data
            }
          }, restProps));
        })
      );
    })
  );
}

BarStackHorizontal.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  zScale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};

function BarStackHorizontal(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      y = _ref.y,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      width = _ref.width,
      height = _ref.height,
      restProps = objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'y', 'xScale', 'yScale', 'zScale', 'keys', 'width', 'height']);

  var series = Object(d3_shape__WEBPACK_IMPORTED_MODULE_3__["stack"])().keys(keys)(data);
  var format = yScale.tickFormat ? yScale.tickFormat() : function (d) {
    return d;
  };
  var yRange = yScale.range();
  var yDomain = yScale.domain();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_4__["Group"],
    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-bar-stack-horizontal', className), top: top, left: left },
    series && series.map(function (s, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _vx_group__WEBPACK_IMPORTED_MODULE_4__["Group"],
        { key: 'vx-bar-stack-horizontal-' + i },
        s.map(function (d, ii) {
          var barWidth = xScale(d[1]) - xScale(d[0]);
          var barHeight = width || (objHasMethod(yScale, 'bandwidth') ? yScale.bandwidth() : Math.abs(yRange[yRange.length - 1] - yRange[0]) / yDomain.length);

          var barY = objHasMethod(yScale, 'bandwidth') ? yScale(y(d.data)) : yScale(y(d.data)) - barHeight / 2;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, _extends({
            key: 'bar-group-bar-' + i + '-' + ii + '-' + s.key,
            x: xScale(d[0]),
            y: barY,
            width: barWidth,
            height: barHeight,
            fill: zScale(s.key),
            data: {
              paddingInner: objHasMethod(yScale, 'paddingInner') && yScale.paddingInner(),
              paddingOuter: objHasMethod(yScale, 'paddingOuter') && yScale.paddingOuter(),
              step: objHasMethod(yScale, 'step') && yScale.step(),
              key: s.key,
              value: d[0],
              height: barHeight,
              width: barWidth,
              y: y(d.data),
              yFormatted: format(y(d.data)),
              data: d.data
            }
          }, restProps));
        })
      );
    })
  );
}

var STACK_ORDERS = {
  ascending: d3_shape__WEBPACK_IMPORTED_MODULE_3__["stackOrderAscending"],
  descending: d3_shape__WEBPACK_IMPORTED_MODULE_3__["stackOrderDescending"],
  insideout: d3_shape__WEBPACK_IMPORTED_MODULE_3__["stackOrderInsideOut"],
  none: d3_shape__WEBPACK_IMPORTED_MODULE_3__["stackOrderNone"],
  reverse: d3_shape__WEBPACK_IMPORTED_MODULE_3__["stackOrderReverse"]
};

var STACK_ORDER_NAMES = Object.keys(STACK_ORDERS);

function stackOrder(order) {
  return STACK_ORDERS[order] || STACK_ORDERS.none;
}

var STACK_OFFSETS = {
  expand: d3_shape__WEBPACK_IMPORTED_MODULE_3__["stackOffsetExpand"],
  diverging: d3_shape__WEBPACK_IMPORTED_MODULE_3__["stackOffsetDiverging"],
  none: d3_shape__WEBPACK_IMPORTED_MODULE_3__["stackOffsetNone"],
  silhouette: d3_shape__WEBPACK_IMPORTED_MODULE_3__["stackOffsetSilhouette"],
  wiggle: d3_shape__WEBPACK_IMPORTED_MODULE_3__["stackOffsetWiggle"]
};

var STACK_OFFSET_NAMES = Object.keys(STACK_OFFSETS);

function stackOffset(offset) {
  return STACK_OFFSETS[offset] || STACK_OFFSETS.none;
}

Stack.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  curve: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  defined: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool]),
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  x0: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  x1: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  y0: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  y1: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  order: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  render: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

function Stack(_ref) {
  var className = _ref.className,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      keys = _ref.keys,
      data = _ref.data,
      curve = _ref.curve,
      defined = _ref.defined,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y0 = _ref.y0,
      y1 = _ref.y1,
      value = _ref.value,
      order = _ref.order,
      offset = _ref.offset,
      render = _ref.render,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      restProps = objectWithoutProperties(_ref, ['className', 'top', 'left', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'value', 'order', 'offset', 'render', 'reverse']);

  var stack$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_3__["stack"])();
  if (keys) stack$$1.keys(keys);
  if (value) stack$$1.value(value);
  if (order) stack$$1.order(stackOrder(order));
  if (offset) stack$$1.offset(stackOffset(offset));

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_3__["area"])();
  if (x) path$$1.x(x);
  if (x0) path$$1.x0(x0);
  if (x1) path$$1.x1(x1);
  if (y0) path$$1.y0(y0);
  if (y1) path$$1.y1(y1);
  if (curve) path$$1.curve(curve);
  if (defined) path$$1.defined(defined);

  var seriesData = stack$$1(data);
  if (reverse) seriesData.reverse();

  if (render) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _vx_group__WEBPACK_IMPORTED_MODULE_4__["Group"],
      { top: top, left: left },
      render({ seriesData: seriesData, path: path$$1 })
    );
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_4__["Group"],
    { top: top, left: left },
    seriesData.map(function (series, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-stack', className),
        key: 'stack-' + i + '-' + (series.key || ''),
        d: path$$1(series)
      }, additionalProps(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    })
  );
}

var degreesToRadians = function degreesToRadians(degrees) {
  return Math.PI / 180 * degrees;
};

function pathHorizontalDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var link = Object(d3_shape__WEBPACK_IMPORTED_MODULE_3__["linkHorizontal"])();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

LinkHorizontal.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function LinkHorizontal(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathHorizontalDiagonal({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link-horizontal', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathVerticalDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var link = Object(d3_shape__WEBPACK_IMPORTED_MODULE_3__["linkVertical"])();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

LinkVertical.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function LinkVertical(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathVerticalDiagonal({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link-vertical', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathRadialDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      angle = _ref.angle,
      radius = _ref.radius;

  return function (data) {
    var link = Object(d3_shape__WEBPACK_IMPORTED_MODULE_3__["linkRadial"])();
    link.angle(angle);
    link.radius(radius);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

LinkRadial.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  angle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  radius: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function LinkRadial(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$angle = _ref2.angle,
      angle = _ref2$angle === undefined ? function (d) {
    return d.x;
  } : _ref2$angle,
      _ref2$radius = _ref2.radius,
      radius = _ref2$radius === undefined ? function (d) {
    return d.y;
  } : _ref2$radius,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'angle', 'radius', 'source', 'target']);

  path$$1 = path$$1 || pathRadialDiagonal({ source: source, target: target, angle: angle, radius: radius });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link-radius', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathHorizontalCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);

    return path$$1.toString();
  };
}

LinkHorizontalCurve.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function LinkHorizontalCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.2 : _ref2$percent,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || pathHorizontalCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathVerticalCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);

    return path$$1.toString();
  };
}

LinkVerticalCurve.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function LinkVerticalCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.2 : _ref2$percent,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || pathVerticalCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathRadialCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sa = x(sourceData) - Math.PI / 2;
    var sr = y(sourceData);
    var ta = x(targetData) - Math.PI / 2;
    var tr = y(targetData);

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);

    var sx = sr * sc;
    var sy = sr * ss;
    var tx = tr * tc;
    var ty = tr * ts;

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);

    return path$$1.toString();
  };
}

LinkRadialCurve.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function LinkRadialCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.2 : _ref2$percent,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || pathRadialCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathHorizontalLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(tx, ty);

    return path$$1.toString();
  };
}

LinkHorizontalLine.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function LinkHorizontalLine(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathHorizontalLine({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathVerticalLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(tx, ty);

    return path$$1.toString();
  };
}

LinkVerticalLine.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function LinkVerticalLine(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathVerticalLine({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathRadialLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sa = x(sourceData) - Math.PI / 2;
    var sr = y(sourceData);
    var ta = x(targetData) - Math.PI / 2;
    var tr = y(targetData);

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sr * sc, sr * ss);
    path$$1.lineTo(tr * tc, tr * ts);

    return path$$1.toString();
  };
}

LinkRadialStep.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function LinkRadialStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathRadialLine({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathHorizontalStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(sx + (tx - sx) * percent, sy);
    path$$1.lineTo(sx + (tx - sx) * percent, ty);
    path$$1.lineTo(tx, ty);

    return path$$1.toString();
  };
}

LinkHorizontalStep.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function LinkHorizontalStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.5 : _ref2$percent,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'percent', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathHorizontalStep({ source: source, target: target, x: x, y: y, percent: percent });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathVerticalStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(sx, sy + (ty - sy) * percent);
    path$$1.lineTo(tx, sy + (ty - sy) * percent);
    path$$1.lineTo(tx, ty);

    return path$$1.toString();
  };
}

LinkVerticalStep.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function LinkVerticalStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.5 : _ref2$percent,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'percent', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathVerticalStep({ source: source, target: target, x: x, y: y, percent: percent });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathRadialStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var sa = sx - Math.PI / 2;
    var sr = sy;
    var ta = tx - Math.PI / 2;
    var tr = ty;

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);
    var sf = Math.abs(ta - sa) > Math.PI ? ta <= sa : ta > sa;

    return '\n      M' + sr * sc + ',' + sr * ss + '\n      A' + sr + ',' + sr + ',0,0,' + (sf ? 1 : 0) + ',' + sr * tc + ',' + sr * ts + '\n      L' + tr * tc + ',' + tr * ts + '\n    ';
  };
}

LinkRadialStep$1.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function LinkRadialStep$1(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathRadialStep({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

Polygon.propTypes = {
  sides: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  rotate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};

var getPoint = function getPoint(_ref) {
  var sides = _ref.sides,
      size = _ref.size,
      center = _ref.center,
      rotate = _ref.rotate,
      side = _ref.side;

  var degrees = 360 / sides * side - rotate;
  var radians = degreesToRadians(degrees);

  return new _vx_point__WEBPACK_IMPORTED_MODULE_5__["Point"]({
    x: center.x + size * Math.cos(radians),
    y: center.y + size * Math.sin(radians)
  });
};

var getPoints = function getPoints(_ref2) {
  var sides = _ref2.sides,
      size = _ref2.size,
      center = _ref2.center,
      rotate = _ref2.rotate;

  return [].concat(toConsumableArray(Array(sides).keys())).map(function (side) {
    return getPoint({
      sides: sides,
      size: size,
      center: center,
      rotate: rotate,
      side: side
    });
  });
};

function Polygon(_ref3) {
  var sides = _ref3.sides,
      _ref3$size = _ref3.size,
      size = _ref3$size === undefined ? 25 : _ref3$size,
      _ref3$center = _ref3.center,
      center = _ref3$center === undefined ? new _vx_point__WEBPACK_IMPORTED_MODULE_5__["Point"]({ x: 0, y: 0 }) : _ref3$center,
      _ref3$rotate = _ref3.rotate,
      rotate = _ref3$rotate === undefined ? 0 : _ref3$rotate,
      className = _ref3.className,
      restProps = objectWithoutProperties(_ref3, ['sides', 'size', 'center', 'rotate', 'className']);

  var points = getPoints({
    sides: sides,
    size: size,
    center: center,
    rotate: rotate
  }).map(function (p) {
    return p.toArray();
  }).join(' ');

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('polygon', _extends({ points: points, className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-polygon', className) }, restProps));
}




/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/node_modules/@vx/group/dist/vx-group.es.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/node_modules/@vx/group/dist/vx-group.es.js ***!
  \***********************************************************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

function Group(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      transform = _ref.transform,
      className = _ref.className,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['top', 'left', 'transform', 'className', 'children']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('cx-group', className),
      transform: transform || 'translate(' + left + ', ' + top + ')'
    }, restProps),
    children
  );
}




/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/node_modules/@vx/point/dist/vx-point.es.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/node_modules/@vx/point/dist/vx-point.es.js ***!
  \***********************************************************************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Point = function () {
  function Point(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y;
    classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  createClass(Point, [{
    key: "value",
    value: function value() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "toArray",
    value: function toArray$$1() {
      return [this.x, this.y];
    }
  }]);
  return Point;
}();




/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/node_modules/@vx/scale/dist/vx-scale.es.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/node_modules/@vx/scale/dist/vx-scale.es.js ***!
  \***********************************************************************************/
/*! exports provided: scaleBand, scalePoint, scaleLinear, scaleTime, scaleUtc, scaleLog, scalePower, scaleOrdinal, scaleQuantize, scaleQuantile, scaleThreshold, updateScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return band; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return utc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scalePower", function() { return power; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return ordinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return quantize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return quantile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return threshold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateScale", function() { return updateScale; });
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");


var band = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      padding = _ref.padding,
      paddingInner = _ref.paddingInner,
      paddingOuter = _ref.paddingOuter,
      align = _ref.align,
      tickFormat = _ref.tickFormat;

  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleBand"])();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (padding) scale.padding(padding);
  if (paddingInner) scale.paddingInner(paddingInner);
  if (paddingOuter) scale.paddingOuter(paddingOuter);
  if (align) scale.align(align);
  if (tickFormat) scale.tickFormat = tickFormat;

  return scale;
});

var point = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      padding = _ref.padding,
      align = _ref.align,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice;

  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["scalePoint"])();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (padding) scale.padding(padding);
  if (align) scale.align(align);

  return scale;
});

var linear = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"])();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);

  return scale;
});

var time = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleTime"])();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);

  return scale;
});

var utc = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleUtc"])();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);

  return scale;
});

var log = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      base = _ref.base,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleLog"])();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);
  if (base) scale.base(base);

  return scale;
});

var power = (function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      exponent = _ref.exponent,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["scalePow"])();

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);
  if (exponent) scale.exponent(exponent);

  return scale;
});

var ordinal = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain,
      unknown = _ref.unknown;

  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleOrdinal"])();

  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  if (unknown) scale.unknown(unknown);

  return scale;
});

var quantize = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain,
      ticks = _ref.ticks,
      tickFormat = _ref.tickFormat,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice;

  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleQuantize"])();

  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (ticks) scale.ticks(ticks);
  if (tickFormat) scale.tickFormat(tickFormat);

  return scale;
});

var quantile = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain;

  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleQuantile"])();

  if (range) scale.range(range);
  if (domain) scale.domain(domain);

  return scale;
});

var threshold = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain;

  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleThreshold"])();

  if (range) scale.range(range);
  if (domain) scale.domain(domain);

  return scale;
});

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

function updateScale(scale, _ref) {
  var args = objectWithoutProperties(_ref, []);

  var nextScale = scale.copy();
  Object.keys(args).forEach(function (key) {
    if (nextScale.hasOwnProperty(key)) nextScale[key](args[key]);
  });
  return nextScale;
}




/***/ }),

/***/ "./node_modules/@data-ui/xy-chart/node_modules/@vx/shape/dist/vx-shape.es.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@data-ui/xy-chart/node_modules/@vx/shape/dist/vx-shape.es.js ***!
  \***********************************************************************************/
/*! exports provided: Arc, Pie, Line, LinePath, LineRadial, Area, AreaClosed, AreaStack, Bar, BarGroup, BarStack, BarStackHorizontal, Stack, callOrValue, stackOffset, STACK_OFFSETS, STACK_OFFSET_NAMES, stackOrder, STACK_ORDERS, STACK_ORDER_NAMES, LinkHorizontal, pathHorizontalDiagonal, LinkVertical, pathVerticalDiagonal, LinkRadial, pathRadialDiagonal, LinkHorizontalCurve, pathHorizontalCurve, LinkVerticalCurve, pathVerticalCurve, LinkRadialCurve, pathRadialCurve, LinkHorizontalLine, pathHorizontalLine, LinkVerticalLine, pathVerticalLine, LinkRadialLine, pathRadialLine, LinkHorizontalStep, pathHorizontalStep, LinkVerticalStep, pathVerticalStep, LinkRadialStep, pathRadialStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arc", function() { return Arc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return Pie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinePath", function() { return LinePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineRadial", function() { return LineRadial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaClosed", function() { return AreaClosed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaStack", function() { return AreaStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarGroup", function() { return BarGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarStack", function() { return BarStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarStackHorizontal", function() { return BarStackHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callOrValue", function() { return callOrValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffset", function() { return stackOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STACK_OFFSETS", function() { return STACK_OFFSETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STACK_OFFSET_NAMES", function() { return STACK_OFFSET_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrder", function() { return stackOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STACK_ORDERS", function() { return STACK_ORDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STACK_ORDER_NAMES", function() { return STACK_ORDER_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHorizontal", function() { return LinkHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathHorizontalDiagonal", function() { return pathHorizontalDiagonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVertical", function() { return LinkVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathVerticalDiagonal", function() { return pathVerticalDiagonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRadial", function() { return LinkRadial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRadialDiagonal", function() { return pathRadialDiagonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHorizontalCurve", function() { return LinkHorizontalCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathHorizontalCurve", function() { return pathHorizontalCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVerticalCurve", function() { return LinkVerticalCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathVerticalCurve", function() { return pathVerticalCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRadialCurve", function() { return LinkRadialCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRadialCurve", function() { return pathRadialCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHorizontalLine", function() { return LinkHorizontalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathHorizontalLine", function() { return pathHorizontalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVerticalLine", function() { return LinkVerticalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathVerticalLine", function() { return pathVerticalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRadialLine", function() { return LinkRadialStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRadialLine", function() { return pathRadialLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHorizontalStep", function() { return LinkHorizontalStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathHorizontalStep", function() { return pathHorizontalStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVerticalStep", function() { return LinkVerticalStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathVerticalStep", function() { return pathVerticalStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRadialStep", function() { return LinkRadialStep$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRadialStep", function() { return pathRadialStep; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/group */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vx_point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/point */ "./node_modules/@data-ui/xy-chart/node_modules/@vx/point/dist/vx-point.es.js");
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");









function callOrValue(maybeFn, data) {
  if (typeof maybeFn === 'function') {
    return maybeFn(data);
  }
  return maybeFn;
}

function additionalProps(restProps, data) {
  return Object.keys(restProps).reduce(function (ret, cur) {
    ret[cur] = callOrValue(restProps[cur], data);
    return ret;
  }, {});
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

function Arc(_ref) {
  var className = _ref.className,
      data = _ref.data,
      centroid = _ref.centroid,
      innerRadius = _ref.innerRadius,
      outerRadius = _ref.outerRadius,
      cornerRadius = _ref.cornerRadius,
      startAngle = _ref.startAngle,
      endAngle = _ref.endAngle,
      padAngle = _ref.padAngle,
      padRadius = _ref.padRadius,
      restProps = objectWithoutProperties(_ref, ['className', 'data', 'centroid', 'innerRadius', 'outerRadius', 'cornerRadius', 'startAngle', 'endAngle', 'padAngle', 'padRadius']);

  var arc$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["arc"])();
  if (centroid) arc$$1.centroid(centroid);
  if (innerRadius) arc$$1.innerRadius(innerRadius);
  if (outerRadius) arc$$1.outerRadius(outerRadius);
  if (cornerRadius) arc$$1.cornerRadius(cornerRadius);
  if (startAngle) arc$$1.startAngle(startAngle);
  if (endAngle) arc$$1.endAngle(endAngle);
  if (padAngle) arc$$1.padAngle(padAngle);
  if (padRadius) arc$$1.padRadius(padRadius);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({ className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-arc', className), d: arc$$1(data) }, additionalProps(restProps, data)));
}

function Pie(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      data = _ref.data,
      centroid = _ref.centroid,
      _ref$innerRadius = _ref.innerRadius,
      innerRadius = _ref$innerRadius === undefined ? 0 : _ref$innerRadius,
      outerRadius = _ref.outerRadius,
      cornerRadius = _ref.cornerRadius,
      _ref$startAngle = _ref.startAngle,
      startAngle = _ref$startAngle === undefined ? 0 : _ref$startAngle,
      endAngle = _ref.endAngle,
      padAngle = _ref.padAngle,
      padRadius = _ref.padRadius,
      pieSort = _ref.pieSort,
      pieSortValues = _ref.pieSortValues,
      pieValue = _ref.pieValue,
      restProps = objectWithoutProperties(_ref, ['className', 'top', 'left', 'data', 'centroid', 'innerRadius', 'outerRadius', 'cornerRadius', 'startAngle', 'endAngle', 'padAngle', 'padRadius', 'pieSort', 'pieSortValues', 'pieValue']);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["arc"])();
  path$$1.innerRadius(innerRadius);
  if (outerRadius) path$$1.outerRadius(outerRadius);
  if (cornerRadius) path$$1.cornerRadius(cornerRadius);
  if (padRadius) path$$1.padRadius(padRadius);
  var pie$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["pie"])();
  if (pieSort) pie$$1.sort(pieSort);
  if (pieSortValues) pie$$1.sortValues(pieSortValues);
  if (pieValue) pie$$1.value(pieValue);
  if (padAngle != null) pie$$1.padAngle(padAngle);
  if (startAngle != null) pie$$1.startAngle(startAngle);
  if (endAngle != null) pie$$1.endAngle(endAngle);
  var arcs = pie$$1(data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
    { className: 'vx-pie-arcs-group', top: top, left: left },
    arcs.map(function (arc$$1, i) {
      var c = void 0;
      if (centroid) c = path$$1.centroid(arc$$1);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'g',
        { key: 'pie-arc-' + i },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-pie-arc', className),
          d: path$$1(arc$$1)
        }, additionalProps(restProps, _extends({}, arc$$1, {
          index: i,
          centroid: c
        })))),
        centroid && centroid(c, arc$$1)
      );
    })
  );
}

Line.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function Line(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === undefined ? new _vx_point__WEBPACK_IMPORTED_MODULE_5__["Point"]({ x: 0, y: 0 }) : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === undefined ? new _vx_point__WEBPACK_IMPORTED_MODULE_5__["Point"]({ x: 1, y: 1 }) : _ref$to,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 1 : _ref$strokeWidth,
      _ref$strokeDasharray = _ref.strokeDasharray,
      strokeDasharray = _ref$strokeDasharray === undefined ? '' : _ref$strokeDasharray,
      _ref$transform = _ref.transform,
      transform = _ref$transform === undefined ? '' : _ref$transform,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      data = _ref.data,
      innerRef = _ref.innerRef,
      restProps = objectWithoutProperties(_ref, ['from', 'to', 'stroke', 'strokeWidth', 'strokeDasharray', 'transform', 'className', 'data', 'innerRef']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('line', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-line', className),
    x1: from.x,
    y1: from.y,
    x2: to.x,
    y2: to.y,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    transform: transform
  }, additionalProps(restProps, data)));
}

LinePath.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinePath(_ref) {
  var data = _ref.data,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      x = _ref.x,
      y = _ref.y,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'steelblue' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$strokeDasharray = _ref.strokeDasharray,
      strokeDasharray = _ref$strokeDasharray === undefined ? '' : _ref$strokeDasharray,
      _ref$strokeDashoffset = _ref.strokeDashoffset,
      strokeDashoffset = _ref$strokeDashoffset === undefined ? 0 : _ref$strokeDashoffset,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'none' : _ref$fill,
      _ref$curve = _ref.curve,
      curve = _ref$curve === undefined ? d3_shape__WEBPACK_IMPORTED_MODULE_2__["curveLinear"] : _ref$curve,
      glyph = _ref.glyph,
      innerRef = _ref.innerRef,
      restProps = objectWithoutProperties(_ref, ['data', 'xScale', 'yScale', 'x', 'y', 'defined', 'className', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeDashoffset', 'fill', 'curve', 'glyph', 'innerRef']);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["line"])().x(function (d) {
    return xScale(x(d));
  }).y(function (d) {
    return yScale(y(d));
  }).defined(defined).curve(curve);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-linepath', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      strokeDashoffset: strokeDashoffset,
      fill: fill
    }, additionalProps(restProps, data))),
    glyph && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'g',
      { className: 'vx-linepath-glyphs' },
      data.map(glyph)
    )
  );
}

LineRadial.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LineRadial(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      angle = _ref.angle,
      radius = _ref.radius,
      defined = _ref.defined,
      curve = _ref.curve,
      data = _ref.data,
      innerRef = _ref.innerRef,
      restProps = objectWithoutProperties(_ref, ['className', 'angle', 'radius', 'defined', 'curve', 'data', 'innerRef']);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["radialLine"])();
  if (angle) path$$1.angle(angle);
  if (radius) path$$1.radius(radius);
  if (defined) path$$1.defined(defined);
  if (curve) path$$1.curve(curve);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-line-radial', className),
      d: path$$1(data)
    }, additionalProps(restProps, data)))
  );
}

Area.propTypes = {
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  x0: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  x1: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y0: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y1: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  defined: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  curve: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function Area(_ref) {
  var children = _ref.children,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y = _ref.y,
      y0 = _ref.y0,
      y1 = _ref.y1,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      strokeDasharray = _ref.strokeDasharray,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'rgba(0,0,0,0.3)' : _ref$fill,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      restProps = objectWithoutProperties(_ref, ['children', 'x', 'x0', 'x1', 'y', 'y0', 'y1', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])();
  if (x) path$$1.x(function (d) {
    return xScale(x(d));
  });
  if (x0) path$$1.x0(function (d) {
    return xScale(x0(d));
  });
  if (x1) path$$1.x1(function (d) {
    return xScale(x1(d));
  });
  if (y) path$$1.y(function (d) {
    return yScale(y(d));
  });
  if (y0) path$$1.y0(function (d) {
    return yScale(y0(d));
  });
  if (y1) path$$1.y1(function (d) {
    return yScale(y1(d));
  });
  if (defined) path$$1.defined(defined);
  if (curve) path$$1.curve(curve);
  if (children) return children({ path: path$$1 });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-area', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, additionalProps(restProps, data)))
  );
}

AreaClosed.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function AreaClosed(_ref) {
  var x = _ref.x,
      y = _ref.y,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      data = _ref.data,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      strokeDasharray = _ref.strokeDasharray,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'rgba(0,0,0,0.3)' : _ref$fill,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      restProps = objectWithoutProperties(_ref, ['x', 'y', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])().x(function (d) {
    return xScale(x(d));
  }).y0(yScale.range()[0]).y1(function (d) {
    return yScale(y(d));
  }).defined(defined);
  if (curve) path$$1.curve(curve);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-area-closed', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, additionalProps(restProps, data)))
  );
}

function AreaStack(_ref) {
  var className = _ref.className,
      _ref$top = _ref.top,
      _ref$left = _ref.left,
      keys = _ref.keys,
      data = _ref.data,
      curve = _ref.curve,
      defined = _ref.defined,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y0 = _ref.y0,
      y1 = _ref.y1,
      glyph = _ref.glyph,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      restProps = objectWithoutProperties(_ref, ['className', 'top', 'left', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'glyph', 'reverse']);

  var stack$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["stack"])();
  if (keys) stack$$1.keys(keys);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])();
  if (x) path$$1.x(x);
  if (x0) path$$1.x0(x0);
  if (x1) path$$1.x1(x1);
  if (y0) path$$1.y0(y0);
  if (y1) path$$1.y1(y1);
  if (curve) path$$1.curve(curve);
  if (defined) path$$1.defined(defined);

  var seriesData = stack$$1(data);
  if (reverse) seriesData.reverse();

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    seriesData.map(function (series, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-area-stack', className),
        key: 'area-stack-' + i + '-' + (series.key || ''),
        d: path$$1(series)
      }, additionalProps(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    }),
    !!glyph && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'g',
      { className: 'vx-area-stack-glyphs' },
      data.map(glyph)
    )
  );
}

Bar.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function Bar(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      width = _ref.width,
      height = _ref.height,
      rx = _ref.rx,
      ry = _ref.ry,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'steelblue' : _ref$fill,
      fillOpacity = _ref.fillOpacity,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      strokeLinecap = _ref.strokeLinecap,
      strokeLinejoin = _ref.strokeLinejoin,
      strokeMiterlimit = _ref.strokeMiterlimit,
      strokeOpacity = _ref.strokeOpacity,
      restProps = objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y', 'width', 'height', 'rx', 'ry', 'fill', 'fillOpacity', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-bar', className),
    x: x,
    y: y,
    width: width,
    height: height,
    rx: rx,
    ry: ry,
    fill: fill,
    fillOpacity: fillOpacity,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    strokeLinecap: strokeLinecap,
    strokeLinejoin: strokeLinejoin,
    strokeMiterlimit: strokeMiterlimit,
    strokeOpacity: strokeOpacity
  }, additionalProps(restProps, data)));
}

function BarGroup(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x0 = _ref.x0,
      x0Scale = _ref.x0Scale,
      x1Scale = _ref.x1Scale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x0', 'x0Scale', 'x1Scale', 'yScale', 'zScale', 'keys', 'height']);

  var format = x0Scale.tickFormat ? x0Scale.tickFormat() : function (d) {
    return d;
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-bar-group', className), top: top, left: left },
    data && data.map(function (d, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
        { key: 'bar-group-' + i + '-' + x0(d), left: x0Scale(x0(d)) },
        keys && keys.map(function (key, i) {
          var value = d[key];
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, _extends({
            key: 'bar-group-bar-' + i + '-' + value + '-' + key,
            x: x1Scale(key),
            y: yScale(value),
            width: x1Scale.bandwidth(),
            height: height - yScale(value),
            fill: zScale(key),
            data: {
              key: key,
              value: value,
              x: format(x0(d)),
              data: d
            }
          }, restProps));
        })
      );
    })
  );
}

BarGroup.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  x0: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  x0Scale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  x1Scale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  zScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
};

function BarStack(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x = _ref.x,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x', 'xScale', 'yScale', 'zScale', 'keys', 'height']);

  var series = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["stack"])().keys(keys)(data);
  var format = xScale.tickFormat ? xScale.tickFormat() : function (d) {
    return d;
  };
  var bandwidth = xScale.bandwidth();
  var step = xScale.step();
  var paddingInner = xScale.paddingInner();
  var paddingOuter = xScale.paddingOuter();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-bar-stack', className), top: top, left: left },
    series && series.map(function (s, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
        { key: 'vx-bar-stack-' + i },
        s.map(function (d, ii) {
          var barHeight = yScale(d[0]) - yScale(d[1]);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, _extends({
            key: 'bar-group-bar-' + i + '-' + ii + '-' + s.key,
            x: xScale(x(d.data)),
            y: yScale(d[1]),
            width: bandwidth,
            height: barHeight,
            fill: zScale(s.key),
            data: {
              bandwidth: bandwidth,
              paddingInner: paddingInner,
              paddingOuter: paddingOuter,
              step: step,
              key: s.key,
              value: d[1],
              height: barHeight,
              width: bandwidth,
              x: x(d.data),
              xFormatted: format(x(d.data)),
              data: d.data
            }
          }, restProps));
        })
      );
    })
  );
}

BarStack.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  zScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
};

function BarStackHorizontal(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      y = _ref.y,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'y', 'xScale', 'yScale', 'zScale', 'keys', 'height']);

  var series = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["stack"])().keys(keys)(data);
  var format = yScale.tickFormat ? yScale.tickFormat() : function (d) {
    return d;
  };
  var bandwidth = yScale.bandwidth();
  var step = yScale.step();
  var paddingInner = yScale.paddingInner();
  var paddingOuter = yScale.paddingOuter();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-bar-stack-horizontal', className), top: top, left: left },
    series && series.map(function (s, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
        { key: 'vx-bar-stack-horizontal-' + i },
        s.map(function (d, ii) {
          var barWidth = xScale(d[1]) - xScale(d[0]);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, _extends({
            key: 'bar-group-bar-' + i + '-' + ii + '-' + s.key,
            x: xScale(d[0]),
            y: yScale(y(d.data)),
            width: barWidth,
            height: bandwidth,
            fill: zScale(s.key),
            data: {
              bandwidth: bandwidth,
              paddingInner: paddingInner,
              paddingOuter: paddingOuter,
              step: step,
              key: s.key,
              value: d[0],
              height: bandwidth,
              width: barWidth,
              y: y(d.data),
              yFormatted: format(y(d.data)),
              data: d.data
            }
          }, restProps));
        })
      );
    })
  );
}

BarStackHorizontal.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  zScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
};

var STACK_ORDERS = {
  ascending: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOrderAscending"],
  descending: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOrderDescending"],
  insideout: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOrderInsideOut"],
  none: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOrderNone"],
  reverse: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOrderReverse"]
};

var STACK_ORDER_NAMES = Object.keys(STACK_ORDERS);

function stackOrder(order) {
  return STACK_ORDERS[order] || STACK_ORDERS.none;
}

var STACK_OFFSETS = {
  expand: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOffsetExpand"],
  diverging: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOffsetDiverging"],
  none: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOffsetNone"],
  silhouette: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOffsetSilhouette"],
  wiggle: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOffsetWiggle"]
};

var STACK_OFFSET_NAMES = Object.keys(STACK_OFFSETS);

function stackOffset(offset) {
  return STACK_OFFSETS[offset] || STACK_OFFSETS.none;
}

function Stack(_ref) {
  var className = _ref.className,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      keys = _ref.keys,
      data = _ref.data,
      curve = _ref.curve,
      defined = _ref.defined,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y0 = _ref.y0,
      y1 = _ref.y1,
      value = _ref.value,
      order = _ref.order,
      offset = _ref.offset,
      render = _ref.render,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      restProps = objectWithoutProperties(_ref, ['className', 'top', 'left', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'value', 'order', 'offset', 'render', 'reverse']);

  var stack$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["stack"])();
  if (keys) stack$$1.keys(keys);
  if (value) stack$$1.value(value);
  if (order) stack$$1.order(stackOrder(order));
  if (offset) stack$$1.offset(stackOffset(offset));

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])();
  if (x) path$$1.x(x);
  if (x0) path$$1.x0(x0);
  if (x1) path$$1.x1(x1);
  if (y0) path$$1.y0(y0);
  if (y1) path$$1.y1(y1);
  if (curve) path$$1.curve(curve);
  if (defined) path$$1.defined(defined);

  var seriesData = stack$$1(data);
  if (reverse) seriesData.reverse();

  if (render) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
    { top: top, left: left },
    render({ seriesData: seriesData, path: path$$1 })
  );

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
    { top: top, left: left },
    seriesData.map(function (series, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-stack', className),
        key: 'stack-' + i + '-' + (series.key || ''),
        d: path$$1(series)
      }, additionalProps(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    })
  );
}

function pathHorizontalDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var link = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["linkHorizontal"])();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

LinkHorizontal.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkHorizontal(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathHorizontalDiagonal({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link-horizontal', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathVerticalDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var link = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["linkVertical"])();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

LinkVertical.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkVertical(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathVerticalDiagonal({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link-vertical', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathRadialDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      angle = _ref.angle,
      radius = _ref.radius;

  return function (data) {
    var link = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["linkRadial"])();
    link.angle(angle);
    link.radius(radius);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

LinkRadial.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  angle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  radius: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkRadial(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$angle = _ref2.angle,
      angle = _ref2$angle === undefined ? function (d) {
    return d.x;
  } : _ref2$angle,
      _ref2$radius = _ref2.radius,
      radius = _ref2$radius === undefined ? function (d) {
    return d.y;
  } : _ref2$radius,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'angle', 'radius', 'source', 'target']);

  path$$1 = path$$1 || pathRadialDiagonal({ source: source, target: target, angle: angle, radius: radius });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link-radius', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathHorizontalCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);

    return path$$1.toString();
  };
}

LinkHorizontalCurve.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkHorizontalCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.2 : _ref2$percent,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || pathHorizontalCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathVerticalCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);

    return path$$1.toString();
  };
}

LinkVerticalCurve.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkVerticalCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.2 : _ref2$percent,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || pathVerticalCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathRadialCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sa = x(sourceData) - Math.PI / 2;
    var sr = y(sourceData);
    var ta = x(targetData) - Math.PI / 2;
    var tr = y(targetData);

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);

    var sx = sr * sc;
    var sy = sr * ss;
    var tx = tr * tc;
    var ty = tr * ts;

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);

    return path$$1.toString();
  };
}

LinkRadialCurve.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkRadialCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.2 : _ref2$percent,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || pathRadialCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathHorizontalLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(tx, ty);

    return path$$1.toString();
  };
}

LinkHorizontalLine.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkHorizontalLine(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathHorizontalLine({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathVerticalLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(tx, ty);

    return path$$1.toString();
  };
}

LinkVerticalLine.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkVerticalLine(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathVerticalLine({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathRadialLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sa = x(sourceData) - Math.PI / 2;
    var sr = y(sourceData);
    var ta = x(targetData) - Math.PI / 2;
    var tr = y(targetData);

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sr * sc, sr * ss);
    path$$1.lineTo(tr * tc, tr * ts);

    return path$$1.toString();
  };
}

LinkRadialStep.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkRadialStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathRadialLine({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathHorizontalStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(sx + (tx - sx) * percent, sy);
    path$$1.lineTo(sx + (tx - sx) * percent, ty);
    path$$1.lineTo(tx, ty);

    return path$$1.toString();
  };
}

LinkHorizontalStep.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkHorizontalStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.5 : _ref2$percent,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'percent', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathHorizontalStep({ source: source, target: target, x: x, y: y, percent: percent });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathVerticalStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(sx, sy + (ty - sy) * percent);
    path$$1.lineTo(tx, sy + (ty - sy) * percent);
    path$$1.lineTo(tx, ty);

    return path$$1.toString();
  };
}

LinkVerticalStep.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkVerticalStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.5 : _ref2$percent,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'percent', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathVerticalStep({ source: source, target: target, x: x, y: y, percent: percent });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathRadialStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var sa = sx - Math.PI / 2;
    var sr = sy;
    var ta = tx - Math.PI / 2;
    var tr = ty;

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);
    var sf = Math.abs(ta - sa) > Math.PI ? ta <= sa : ta > sa;

    return '\n      M' + sr * sc + ',' + sr * ss + '\n      A' + sr + ',' + sr + ',0,0,' + (sf ? 1 : 0) + ',' + sr * tc + ',' + sr * ts + '\n      L' + tr * tc + ',' + tr * ts + '\n    ';
  };
}

LinkRadialStep$1.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkRadialStep$1(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathRadialStep({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}




/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-big-number/esm/BigNumber/BigNumber.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-big-number/esm/BigNumber/BigNumber.js ***!
  \*********************************************************************************************/
/*! exports provided: renderTooltipFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTooltipFactory", function() { return renderTooltipFactory; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/time-format/formatters/smartDateVerbose.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/dimension/computeMaxFontSize.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/color/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _data_ui_xy_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @data-ui/xy-chart */ "./node_modules/@data-ui/xy-chart/esm/chart/XYChart.js");
/* harmony import */ var _data_ui_xy_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @data-ui/xy-chart */ "./node_modules/@data-ui/xy-chart/esm/aesthetic/LinearGradient.js");
/* harmony import */ var _data_ui_xy_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @data-ui/xy-chart */ "./node_modules/@data-ui/xy-chart/esm/series/AreaSeries.js");
/* harmony import */ var _data_ui_xy_chart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @data-ui/xy-chart */ "./node_modules/@data-ui/xy-chart/esm/chart/CrossHair.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");


/**
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





const defaultNumberFormatter = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["getNumberFormatter"])();
const CHART_MARGIN = {
  top: 4,
  right: 4,
  bottom: 4,
  left: 4
};
const PROPORTION = {
  // text size: proportion of the chart container sans trendline
  HEADER: 0.3,
  SUBHEADER: 0.125,
  // trendline size: proportion of the whole chart container
  TRENDLINE: 0.3
};
function renderTooltipFactory(formatDate = _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"], formatValue = defaultNumberFormatter) {
  return function renderTooltip({
    datum: {
      x,
      y
    }
  }) {
    // even though `formatDate` supports timestamp as numbers, we need
    // `new Date` to pass type check
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
      style: {
        padding: '4px 8px'
      }
    }, formatDate(new Date(x)), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("br", null), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("strong", null, y === null ? Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('N/A') : formatValue(y)));
  };
}

class BigNumberVis extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(...args) {
    super(...args);
    this.gradientId = shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate();
  }

  getClassName() {
    const {
      className,
      showTrendLine,
      bigNumberFallback
    } = this.props;
    const names = `superset-legacy-chart-big-number ${className} ${bigNumberFallback ? 'is-fallback-value' : ''}`;
    if (showTrendLine) return names;
    return `${names} no-trendline`;
  }

  createTemporaryContainer() {
    const container = document.createElement('div');
    container.className = this.getClassName();
    container.style.position = 'absolute'; // so it won't disrupt page layout

    container.style.opacity = '0'; // and not visible

    return container;
  }

  renderFallbackWarning() {
    const {
      bigNumberFallback,
      formatTime
    } = this.props;
    if (!bigNumberFallback) return null;
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("span", {
      className: "alert alert-warning",
      role: "alert",
      title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])(`Last available value seen on %s`, formatTime(bigNumberFallback.x))
    }, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Not up to date'));
  }

  renderHeader(maxHeight) {
    const {
      bigNumber,
      formatNumber,
      width
    } = this.props;
    const text = bigNumber === null ? Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('No data') : formatNumber(bigNumber);
    const container = this.createTemporaryContainer();
    document.body.append(container);
    const fontSize = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"])({
      text,
      maxWidth: width,
      maxHeight,
      className: 'header-line',
      container
    });
    container.remove();
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
      className: "header-line",
      style: {
        fontSize,
        height: maxHeight
      }
    }, text);
  }

  renderSubheader(maxHeight) {
    const {
      bigNumber,
      subheader,
      width,
      bigNumberFallback
    } = this.props;
    let fontSize = 0;
    const NO_DATA_OR_HASNT_LANDED = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('No data after filtering or data is NULL for the latest time record');
    const NO_DATA = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Try applying different filters or ensuring your datasource has data');
    let text = subheader;

    if (bigNumber === null) {
      text = bigNumberFallback ? NO_DATA : NO_DATA_OR_HASNT_LANDED;
    }

    if (text) {
      const container = this.createTemporaryContainer();
      document.body.append(container);
      fontSize = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"])({
        text,
        maxWidth: width,
        maxHeight,
        className: 'subheader-line',
        container
      });
      container.remove();
      return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
        className: "subheader-line",
        style: {
          fontSize,
          height: maxHeight
        }
      }, text);
    }

    return null;
  }

  renderTrendline(maxHeight) {
    const {
      width,
      trendLineData,
      mainColor,
      subheader,
      startYAxisAtZero,
      formatNumber,
      formatTime,
      fromDatetime,
      timeRangeFixed
    } = this.props; // if can't find any non-null values, no point rendering the trendline

    if (!(trendLineData != null && trendLineData.some(d => d.y !== null))) {
      return null;
    } // Apply a fixed X range if a time range is specified.
    //
    // XYChart checks the existence of `domain` property and decide whether to
    // apply a domain or not, so it must not be `null` or `undefined`


    const xScale = {
      type: 'timeUtc'
    };
    const tooltipData = trendLineData && [...trendLineData];

    if (tooltipData && timeRangeFixed && fromDatetime) {
      var _this$props$toDatetim;

      const toDatetime = (_this$props$toDatetim = this.props.toDatetime) != null ? _this$props$toDatetim : Date.now();

      if (tooltipData[0].x > fromDatetime) {
        tooltipData.unshift({
          x: fromDatetime,
          y: null
        });
      }

      if (tooltipData[tooltipData.length - 1].x < toDatetime) {
        tooltipData.push({
          x: toDatetime,
          y: null
        });
      }

      xScale.domain = [fromDatetime, toDatetime];
    }

    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_data_ui_xy_chart__WEBPACK_IMPORTED_MODULE_9__["default"], {
      snapTooltipToDataX: true,
      ariaLabel: `Big number visualization ${subheader}`,
      renderTooltip: renderTooltipFactory(formatTime, formatNumber),
      xScale: xScale,
      yScale: {
        type: 'linear',
        includeZero: startYAxisAtZero
      },
      width: Math.floor(width),
      height: maxHeight,
      margin: CHART_MARGIN,
      eventTrigger: "container"
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_data_ui_xy_chart__WEBPACK_IMPORTED_MODULE_10__["default"], {
      id: this.gradientId,
      from: mainColor,
      to: "#fff"
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_data_ui_xy_chart__WEBPACK_IMPORTED_MODULE_11__["default"], {
      data: tooltipData,
      fill: `url(#${this.gradientId})`,
      stroke: mainColor
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_data_ui_xy_chart__WEBPACK_IMPORTED_MODULE_12__["default"], {
      fullHeight: true,
      stroke: mainColor,
      circleFill: mainColor,
      circleStroke: "#fff",
      showHorizontalLine: false,
      strokeDasharray: "5,2"
    }));
  }

  render() {
    const {
      showTrendLine,
      height,
      headerFontSize,
      subheaderFontSize
    } = this.props;
    const className = this.getClassName();

    if (showTrendLine) {
      const chartHeight = Math.floor(PROPORTION.TRENDLINE * height);
      const allTextHeight = height - chartHeight;
      return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
        className: className
      }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
        className: "text-container",
        style: {
          height: allTextHeight
        }
      }, this.renderFallbackWarning(), this.renderHeader(Math.ceil(headerFontSize * (1 - PROPORTION.TRENDLINE) * height)), this.renderSubheader(Math.ceil(subheaderFontSize * (1 - PROPORTION.TRENDLINE) * height))), this.renderTrendline(chartHeight));
    }

    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
      className: className,
      style: {
        height
      }
    }, this.renderHeader(Math.ceil(headerFontSize * height)), this.renderSubheader(Math.ceil(subheaderFontSize * height)));
  }

}

BigNumberVis.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  bigNumber: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([null])]),
  bigNumberFallback: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
    y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([null])])
  }),
  fromDatetime: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  toDatetime: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  headerFontSize: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  subheader: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  subheaderFontSize: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  showTrendLine: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  startYAxisAtZero: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  timeRangeFixed: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  trendLineData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    x: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
    y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([null])])
  })),
  mainColor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
BigNumberVis.defaultProps = {
  className: '',
  formatNumber: defaultNumberFormatter,
  formatTime: _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"],
  headerFontSize: PROPORTION.HEADER,
  mainColor: _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["BRAND_COLOR"],
  showTrendLine: false,
  startYAxisAtZero: true,
  subheader: '',
  subheaderFontSize: PROPORTION.SUBHEADER,
  timeRangeFixed: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_8__["styled"])(BigNumberVis)`
  font-family: ${({
  theme
}) => theme.typography.families.sansSerif};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.no-trendline .subheader-line {
    padding-bottom: 0.3em;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .alert {
      font-size: ${({
  theme
}) => theme.typography.sizes.s};
      margin: -0.5em 0 0.4em;
      line-height: 1;
      padding: 2px 4px 3px;
      border-radius: 3px;
    }
  }

  .header-line {
    font-weight: ${({
  theme
}) => theme.typography.weights.normal};
    position: relative;
    line-height: 1em;
    span {
      position: absolute;
      bottom: 0;
    }
  }

  .subheader-line {
    font-weight: ${({
  theme
}) => theme.typography.weights.light};
    line-height: 1em;
    padding-bottom: 0;
  }

  &.is-fallback-value {
    .header-line,
    .subheader-line {
      opacity: 0.5;
    }
  }

  .superset-data-ui-tooltip {
    z-index: 1000;
    background: #000;
  }
`);

/***/ }),

/***/ "./node_modules/@vx/threshold/dist/vx-threshold.es.js":
/*!************************************************************!*\
  !*** ./node_modules/@vx/threshold/dist/vx-threshold.es.js ***!
  \************************************************************/
/*! exports provided: Threshold */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Threshold", function() { return Threshold; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/shape */ "./node_modules/@vx/threshold/node_modules/@vx/shape/dist/vx-shape.es.js");
/* harmony import */ var _vx_clip_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/clip-path */ "./node_modules/@vx/threshold/node_modules/@vx/clip-path/dist/vx-clip-path.es.js");





var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function Threshold(_ref) {
  var className = _ref.className,
      curve = _ref.curve,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      clipAboveTo = _ref.clipAboveTo,
      clipBelowTo = _ref.clipBelowTo,
      data = _ref.data,
      x = _ref.x,
      y0 = _ref.y0,
      y1 = _ref.y1,
      aboveAreaProps = _ref.aboveAreaProps,
      belowAreaProps = _ref.belowAreaProps;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-threshold', className) },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _vx_shape__WEBPACK_IMPORTED_MODULE_2__["Area"],
      { curve: curve, data: data, x: x, y1: y1, xScale: xScale, yScale: yScale },
      function (_ref2) {
        var path = _ref2.path;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'g',
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _vx_clip_path__WEBPACK_IMPORTED_MODULE_3__["ClipPath"],
            { id: 'threshold-clip-below' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', { d: path.y0(clipBelowTo)(data) })
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _vx_clip_path__WEBPACK_IMPORTED_MODULE_3__["ClipPath"],
            { id: 'threshold-clip-above' },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', { d: path.y0(clipAboveTo)(data) })
          )
        );
      }
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_2__["Area"], _extends({
      curve: curve,
      data: data,
      x: x,
      y0: y0,
      y1: y1,
      xScale: xScale,
      yScale: yScale,
      strokeWidth: 0,
      clipPath: 'url(#threshold-clip-below)'
    }, belowAreaProps)),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_2__["Area"], _extends({
      curve: curve,
      data: data,
      x: x,
      y0: y0,
      y1: y1,
      xScale: xScale,
      yScale: yScale,
      strokeWidth: 0,
      clipPath: 'url(#threshold-clip-above)'
    }, aboveAreaProps))
  );
}




/***/ }),

/***/ "./node_modules/@vx/threshold/node_modules/@vx/clip-path/dist/vx-clip-path.es.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@vx/threshold/node_modules/@vx/clip-path/dist/vx-clip-path.es.js ***!
  \***************************************************************************************/
/*! exports provided: ClipPath, CircleClipPath, RectClipPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipPath", function() { return ClipPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleClipPath", function() { return CircleClipPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectClipPath", function() { return RectClipPath; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var ClipPath = (function (_ref) {
  var id = _ref.id,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['id', 'children']);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'defs',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'clipPath',
      _extends({ id: id }, restProps),
      children
    )
  );
});

var CircleClipPath = (function (_ref) {
  var id = _ref.id,
      cx = _ref.cx,
      cy = _ref.cy,
      r = _ref.r,
      restProps = objectWithoutProperties(_ref, ['id', 'cx', 'cy', 'r']);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    ClipPath,
    { id: id },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('circle', _extends({ cx: cx, cy: cy, r: r }, restProps))
  );
});

var RectClipPath = (function (_ref) {
  var id = _ref.id,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 1 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 1 : _ref$height,
      restProps = objectWithoutProperties(_ref, ['id', 'x', 'y', 'width', 'height']);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    ClipPath,
    { id: id },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', _extends({ x: x, y: y, width: width, height: height }, restProps))
  );
});




/***/ }),

/***/ "./node_modules/@vx/threshold/node_modules/@vx/group/dist/vx-group.es.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vx/threshold/node_modules/@vx/group/dist/vx-group.es.js ***!
  \*******************************************************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

function Group(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      transform = _ref.transform,
      className = _ref.className,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['top', 'left', 'transform', 'className', 'children']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    _extends({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-group', className),
      transform: transform || 'translate(' + left + ', ' + top + ')'
    }, restProps),
    children
  );
}




/***/ }),

/***/ "./node_modules/@vx/threshold/node_modules/@vx/point/dist/vx-point.es.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vx/threshold/node_modules/@vx/point/dist/vx-point.es.js ***!
  \*******************************************************************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var Point = function () {
  function Point(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y;
    classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  createClass(Point, [{
    key: "value",
    value: function value() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "toArray",
    value: function toArray$$1() {
      return [this.x, this.y];
    }
  }]);
  return Point;
}();




/***/ }),

/***/ "./node_modules/@vx/threshold/node_modules/@vx/shape/dist/vx-shape.es.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vx/threshold/node_modules/@vx/shape/dist/vx-shape.es.js ***!
  \*******************************************************************************/
/*! exports provided: Arc, Pie, Line, LinePath, LineRadial, Area, AreaClosed, AreaStack, Bar, BarGroup, BarGroupHorizontal, BarStack, BarStackHorizontal, Stack, callOrValue, stackOffset, STACK_OFFSETS, STACK_OFFSET_NAMES, stackOrder, STACK_ORDERS, STACK_ORDER_NAMES, LinkHorizontal, pathHorizontalDiagonal, LinkVertical, pathVerticalDiagonal, LinkRadial, pathRadialDiagonal, LinkHorizontalCurve, pathHorizontalCurve, LinkVerticalCurve, pathVerticalCurve, LinkRadialCurve, pathRadialCurve, LinkHorizontalLine, pathHorizontalLine, LinkVerticalLine, pathVerticalLine, LinkRadialLine, pathRadialLine, LinkHorizontalStep, pathHorizontalStep, LinkVerticalStep, pathVerticalStep, LinkRadialStep, pathRadialStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arc", function() { return Arc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return Pie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinePath", function() { return LinePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineRadial", function() { return LineRadial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaClosed", function() { return AreaClosed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaStack", function() { return AreaStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarGroup", function() { return BarGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarGroupHorizontal", function() { return BarGroupHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarStack", function() { return BarStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarStackHorizontal", function() { return BarStackHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callOrValue", function() { return callOrValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffset", function() { return stackOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STACK_OFFSETS", function() { return STACK_OFFSETS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STACK_OFFSET_NAMES", function() { return STACK_OFFSET_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrder", function() { return stackOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STACK_ORDERS", function() { return STACK_ORDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STACK_ORDER_NAMES", function() { return STACK_ORDER_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHorizontal", function() { return LinkHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathHorizontalDiagonal", function() { return pathHorizontalDiagonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVertical", function() { return LinkVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathVerticalDiagonal", function() { return pathVerticalDiagonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRadial", function() { return LinkRadial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRadialDiagonal", function() { return pathRadialDiagonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHorizontalCurve", function() { return LinkHorizontalCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathHorizontalCurve", function() { return pathHorizontalCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVerticalCurve", function() { return LinkVerticalCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathVerticalCurve", function() { return pathVerticalCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRadialCurve", function() { return LinkRadialCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRadialCurve", function() { return pathRadialCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHorizontalLine", function() { return LinkHorizontalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathHorizontalLine", function() { return pathHorizontalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVerticalLine", function() { return LinkVerticalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathVerticalLine", function() { return pathVerticalLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRadialLine", function() { return LinkRadialStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRadialLine", function() { return pathRadialLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkHorizontalStep", function() { return LinkHorizontalStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathHorizontalStep", function() { return pathHorizontalStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVerticalStep", function() { return LinkVerticalStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathVerticalStep", function() { return pathVerticalStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRadialStep", function() { return LinkRadialStep$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathRadialStep", function() { return pathRadialStep; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/group */ "./node_modules/@vx/threshold/node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vx_point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/point */ "./node_modules/@vx/threshold/node_modules/@vx/point/dist/vx-point.es.js");
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");









function callOrValue(maybeFn, data) {
  if (typeof maybeFn === 'function') {
    return maybeFn(data);
  }
  return maybeFn;
}

function additionalProps(restProps, data) {
  return Object.keys(restProps).reduce(function (ret, cur) {
    ret[cur] = callOrValue(restProps[cur], data);
    return ret;
  }, {});
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

function Arc(_ref) {
  var className = _ref.className,
      data = _ref.data,
      centroid = _ref.centroid,
      innerRadius = _ref.innerRadius,
      outerRadius = _ref.outerRadius,
      cornerRadius = _ref.cornerRadius,
      startAngle = _ref.startAngle,
      endAngle = _ref.endAngle,
      padAngle = _ref.padAngle,
      padRadius = _ref.padRadius,
      restProps = objectWithoutProperties(_ref, ['className', 'data', 'centroid', 'innerRadius', 'outerRadius', 'cornerRadius', 'startAngle', 'endAngle', 'padAngle', 'padRadius']);

  var arc$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["arc"])();
  if (centroid) arc$$1.centroid(centroid);
  if (innerRadius) arc$$1.innerRadius(innerRadius);
  if (outerRadius) arc$$1.outerRadius(outerRadius);
  if (cornerRadius) arc$$1.cornerRadius(cornerRadius);
  if (startAngle) arc$$1.startAngle(startAngle);
  if (endAngle) arc$$1.endAngle(endAngle);
  if (padAngle) arc$$1.padAngle(padAngle);
  if (padRadius) arc$$1.padRadius(padRadius);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({ className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-arc', className), d: arc$$1(data) }, additionalProps(restProps, data)));
}

function Pie(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      data = _ref.data,
      centroid = _ref.centroid,
      _ref$innerRadius = _ref.innerRadius,
      innerRadius = _ref$innerRadius === undefined ? 0 : _ref$innerRadius,
      outerRadius = _ref.outerRadius,
      cornerRadius = _ref.cornerRadius,
      _ref$startAngle = _ref.startAngle,
      startAngle = _ref$startAngle === undefined ? 0 : _ref$startAngle,
      endAngle = _ref.endAngle,
      padAngle = _ref.padAngle,
      padRadius = _ref.padRadius,
      pieSort = _ref.pieSort,
      pieSortValues = _ref.pieSortValues,
      pieValue = _ref.pieValue,
      children = _ref.children,
      restProps = objectWithoutProperties(_ref, ['className', 'top', 'left', 'data', 'centroid', 'innerRadius', 'outerRadius', 'cornerRadius', 'startAngle', 'endAngle', 'padAngle', 'padRadius', 'pieSort', 'pieSortValues', 'pieValue', 'children']);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["arc"])();
  path$$1.innerRadius(innerRadius);
  if (outerRadius) path$$1.outerRadius(outerRadius);
  if (cornerRadius) path$$1.cornerRadius(cornerRadius);
  if (padRadius) path$$1.padRadius(padRadius);
  var pie$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["pie"])();
  if (pieSort) pie$$1.sort(pieSort);
  if (pieSortValues) pie$$1.sortValues(pieSortValues);
  if (pieValue) pie$$1.value(pieValue);
  if (padAngle != null) pie$$1.padAngle(padAngle);
  if (startAngle != null) pie$$1.startAngle(startAngle);
  if (endAngle != null) pie$$1.endAngle(endAngle);
  var arcs = pie$$1(data);
  var renderFunctionArg = {
    arcs: arcs,
    generatePathProps: function generatePathProps(arc$$1, index) {
      return _extends({
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-pie-arc', className),
        d: path$$1(arc$$1)
      }, additionalProps(restProps, _extends({}, arc$$1, {
        index: index,
        centroid: centroid ? path$$1.centroid(arc$$1) : undefined
      })));
    },
    generateCentroid: function generateCentroid(arc$$1) {
      return centroid && centroid(path$$1.centroid(arc$$1), arc$$1);
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
    { className: 'vx-pie-arcs-group', top: top, left: left },
    children ? children(renderFunctionArg) : arcs.map(function (arc$$1, i) {
      var pathProps = renderFunctionArg.generatePathProps(arc$$1, i);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'g',
        { key: 'pie-arc-' + i },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', pathProps),
        renderFunctionArg.generateCentroid(arc$$1)
      );
    })
  );
}

Line.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function Line(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === undefined ? new _vx_point__WEBPACK_IMPORTED_MODULE_5__["Point"]({ x: 0, y: 0 }) : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === undefined ? new _vx_point__WEBPACK_IMPORTED_MODULE_5__["Point"]({ x: 1, y: 1 }) : _ref$to,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 1 : _ref$strokeWidth,
      _ref$strokeDasharray = _ref.strokeDasharray,
      strokeDasharray = _ref$strokeDasharray === undefined ? '' : _ref$strokeDasharray,
      _ref$transform = _ref.transform,
      transform = _ref$transform === undefined ? '' : _ref$transform,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      data = _ref.data,
      innerRef = _ref.innerRef,
      restProps = objectWithoutProperties(_ref, ['from', 'to', 'stroke', 'strokeWidth', 'strokeDasharray', 'transform', 'className', 'data', 'innerRef']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('line', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-line', className),
    x1: from.x,
    y1: from.y,
    x2: to.x,
    y2: to.y,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    transform: transform
  }, additionalProps(restProps, data)));
}

LinePath.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  defined: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  glyph: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  curve: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinePath(_ref) {
  var children = _ref.children,
      data = _ref.data,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      x = _ref.x,
      y = _ref.y,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'steelblue' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$strokeDasharray = _ref.strokeDasharray,
      strokeDasharray = _ref$strokeDasharray === undefined ? '' : _ref$strokeDasharray,
      _ref$strokeDashoffset = _ref.strokeDashoffset,
      strokeDashoffset = _ref$strokeDashoffset === undefined ? 0 : _ref$strokeDashoffset,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'none' : _ref$fill,
      _ref$curve = _ref.curve,
      curve = _ref$curve === undefined ? d3_shape__WEBPACK_IMPORTED_MODULE_2__["curveLinear"] : _ref$curve,
      glyph = _ref.glyph,
      innerRef = _ref.innerRef,
      restProps = objectWithoutProperties(_ref, ['children', 'data', 'xScale', 'yScale', 'x', 'y', 'defined', 'className', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeDashoffset', 'fill', 'curve', 'glyph', 'innerRef']);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["line"])().x(function () {
    return xScale(x.apply(undefined, arguments));
  }).y(function () {
    return yScale(y.apply(undefined, arguments));
  }).defined(defined).curve(curve);
  if (children) return children({ path: path$$1 });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-linepath', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      strokeDashoffset: strokeDashoffset,
      fill: fill
    }, additionalProps(restProps, data))),
    glyph && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'g',
      { className: 'vx-linepath-glyphs' },
      data.map(glyph)
    )
  );
}

LineRadial.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LineRadial(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      angle = _ref.angle,
      radius = _ref.radius,
      defined = _ref.defined,
      curve = _ref.curve,
      data = _ref.data,
      innerRef = _ref.innerRef,
      restProps = objectWithoutProperties(_ref, ['className', 'angle', 'radius', 'defined', 'curve', 'data', 'innerRef']);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["radialLine"])();
  if (angle) path$$1.angle(angle);
  if (radius) path$$1.radius(radius);
  if (defined) path$$1.defined(defined);
  if (curve) path$$1.curve(curve);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-line-radial', className),
      d: path$$1(data)
    }, additionalProps(restProps, data)))
  );
}

Area.propTypes = {
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  x0: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  x1: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y0: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y1: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  defined: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  curve: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function Area(_ref) {
  var children = _ref.children,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y = _ref.y,
      y0 = _ref.y0,
      y1 = _ref.y1,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      strokeDasharray = _ref.strokeDasharray,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'rgba(0,0,0,0.3)' : _ref$fill,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      restProps = objectWithoutProperties(_ref, ['children', 'x', 'x0', 'x1', 'y', 'y0', 'y1', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])();
  if (x) path$$1.x(function () {
    return xScale(x.apply(undefined, arguments));
  });
  if (x0) path$$1.x0(function () {
    return xScale(x0.apply(undefined, arguments));
  });
  if (x1) path$$1.x1(function () {
    return xScale(x1.apply(undefined, arguments));
  });
  if (y) path$$1.y(function () {
    return yScale(y.apply(undefined, arguments));
  });
  if (y0) path$$1.y0(function () {
    return yScale(y0.apply(undefined, arguments));
  });
  if (y1) path$$1.y1(function () {
    return yScale(y1.apply(undefined, arguments));
  });
  if (defined) path$$1.defined(defined);
  if (curve) path$$1.curve(curve);
  if (children) return children({ path: path$$1 });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-area', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, additionalProps(restProps, data)))
  );
}

AreaClosed.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function AreaClosed(_ref) {
  var x = _ref.x,
      y = _ref.y,
      y0 = _ref.y0,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      data = _ref.data,
      _ref$defined = _ref.defined,
      defined = _ref$defined === undefined ? function () {
    return true;
  } : _ref$defined,
      className = _ref.className,
      strokeDasharray = _ref.strokeDasharray,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 2 : _ref$strokeWidth,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'rgba(0,0,0,0.3)' : _ref$fill,
      curve = _ref.curve,
      innerRef = _ref.innerRef,
      restProps = objectWithoutProperties(_ref, ['x', 'y', 'y0', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])().x(function () {
    return xScale(x.apply(undefined, arguments));
  }).y0(y0 || yScale.range()[0]).y1(function () {
    return yScale(y.apply(undefined, arguments));
  }).defined(defined);
  if (curve) path$$1.curve(curve);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-area-closed', className),
      d: path$$1(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, additionalProps(restProps, data)))
  );
}

function AreaStack(_ref) {
  var className = _ref.className,
      _ref$top = _ref.top,
      _ref$left = _ref.left,
      keys = _ref.keys,
      data = _ref.data,
      curve = _ref.curve,
      defined = _ref.defined,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y0 = _ref.y0,
      y1 = _ref.y1,
      glyph = _ref.glyph,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      restProps = objectWithoutProperties(_ref, ['className', 'top', 'left', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'glyph', 'reverse']);

  var stack$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["stack"])();
  if (keys) stack$$1.keys(keys);

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])();
  if (x) path$$1.x(x);
  if (x0) path$$1.x0(x0);
  if (x1) path$$1.x1(x1);
  if (y0) path$$1.y0(y0);
  if (y1) path$$1.y1(y1);
  if (curve) path$$1.curve(curve);
  if (defined) path$$1.defined(defined);

  var seriesData = stack$$1(data);
  if (reverse) seriesData.reverse();

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    null,
    seriesData.map(function (series, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-area-stack', className),
        key: 'area-stack-' + i + '-' + (series.key || ''),
        d: path$$1(series)
      }, additionalProps(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    }),
    !!glyph && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'g',
      { className: 'vx-area-stack-glyphs' },
      data.map(glyph)
    )
  );
}

Bar.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function Bar(_ref) {
  var className = _ref.className,
      innerRef = _ref.innerRef,
      data = _ref.data,
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y,
      width = _ref.width,
      height = _ref.height,
      rx = _ref.rx,
      ry = _ref.ry,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'steelblue' : _ref$fill,
      fillOpacity = _ref.fillOpacity,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      strokeLinecap = _ref.strokeLinecap,
      strokeLinejoin = _ref.strokeLinejoin,
      strokeMiterlimit = _ref.strokeMiterlimit,
      strokeOpacity = _ref.strokeOpacity,
      restProps = objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y', 'width', 'height', 'rx', 'ry', 'fill', 'fillOpacity', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity']);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-bar', className),
    x: x,
    y: y,
    width: width,
    height: height,
    rx: rx,
    ry: ry,
    fill: fill,
    fillOpacity: fillOpacity,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    strokeLinecap: strokeLinecap,
    strokeLinejoin: strokeLinejoin,
    strokeMiterlimit: strokeMiterlimit,
    strokeOpacity: strokeOpacity
  }, additionalProps(restProps, data)));
}

function BarGroup(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x0 = _ref.x0,
      x0Scale = _ref.x0Scale,
      x1Scale = _ref.x1Scale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x0', 'x0Scale', 'x1Scale', 'yScale', 'zScale', 'keys', 'height']);

  var format = x0Scale.tickFormat ? x0Scale.tickFormat() : function (d) {
    return d;
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-bar-group', className), top: top, left: left },
    data && data.map(function (d, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
        { key: 'bar-group-' + i + '-' + x0(d), left: x0Scale(x0(d)) },
        keys && keys.map(function (key, i) {
          var value = d[key];
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, _extends({
            key: 'bar-group-bar-' + i + '-' + value + '-' + key,
            x: x1Scale(key),
            y: yScale(value),
            width: x1Scale.bandwidth(),
            height: height - yScale(value),
            fill: zScale(key),
            data: {
              key: key,
              value: value,
              x: format(x0(d)),
              data: d
            }
          }, restProps));
        })
      );
    })
  );
}

BarGroup.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  x0: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  x0Scale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  x1Scale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  zScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
};

function BarGroupHorizontal(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      y0 = _ref.y0,
      y0Scale = _ref.y0Scale,
      y1Scale = _ref.y1Scale,
      xScale = _ref.xScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      width = _ref.width,
      restProps = objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'y0', 'y0Scale', 'y1Scale', 'xScale', 'zScale', 'keys', 'width']);

  var format = y0Scale.tickFormat ? y0Scale.tickFormat() : function (d) {
    return d;
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-bar-group-horizontal', className), top: top, left: left },
    data && data.map(function (d, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
        { key: 'bar-group-' + i + '-' + y0(d), top: y0Scale(y0(d)) },
        keys && keys.map(function (key, i) {
          var value = d[key];
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, _extends({
            key: 'bar-group-bar-' + i + '-' + value + '-' + key,
            x: 0,
            y: y1Scale(key),
            width: width - xScale(value),
            height: y1Scale.bandwidth(),
            fill: zScale(key),
            data: {
              key: key,
              value: value,
              y: format(y0(d)),
              data: d
            }
          }, restProps));
        })
      );
    })
  );
}

BarGroupHorizontal.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  y0: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  y0Scale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  y1Scale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  zScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
};

function BarStack(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      x = _ref.x,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'x', 'xScale', 'yScale', 'zScale', 'keys', 'height']);

  var series = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["stack"])().keys(keys)(data);
  var format = xScale.tickFormat ? xScale.tickFormat() : function (d) {
    return d;
  };
  var bandwidth = xScale.bandwidth();
  var step = xScale.step();
  var paddingInner = xScale.paddingInner();
  var paddingOuter = xScale.paddingOuter();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-bar-stack', className), top: top, left: left },
    series && series.map(function (s, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
        { key: 'vx-bar-stack-' + i },
        s.map(function (d, ii) {
          var barHeight = yScale(d[0]) - yScale(d[1]);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, _extends({
            key: 'bar-group-bar-' + i + '-' + ii + '-' + s.key,
            x: xScale(x(d.data)),
            y: yScale(d[1]),
            width: bandwidth,
            height: barHeight,
            fill: zScale(s.key),
            data: {
              bandwidth: bandwidth,
              paddingInner: paddingInner,
              paddingOuter: paddingOuter,
              step: step,
              key: s.key,
              value: d[1],
              height: barHeight,
              width: bandwidth,
              x: x(d.data),
              xFormatted: format(x(d.data)),
              data: d.data
            }
          }, restProps));
        })
      );
    })
  );
}

BarStack.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  zScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
};

function BarStackHorizontal(_ref) {
  var data = _ref.data,
      className = _ref.className,
      top = _ref.top,
      left = _ref.left,
      y = _ref.y,
      xScale = _ref.xScale,
      yScale = _ref.yScale,
      zScale = _ref.zScale,
      keys = _ref.keys,
      height = _ref.height,
      restProps = objectWithoutProperties(_ref, ['data', 'className', 'top', 'left', 'y', 'xScale', 'yScale', 'zScale', 'keys', 'height']);

  var series = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["stack"])().keys(keys)(data);
  var format = yScale.tickFormat ? yScale.tickFormat() : function (d) {
    return d;
  };
  var bandwidth = yScale.bandwidth();
  var step = yScale.step();
  var paddingInner = yScale.paddingInner();
  var paddingOuter = yScale.paddingOuter();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
    { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-bar-stack-horizontal', className), top: top, left: left },
    series && series.map(function (s, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
        { key: 'vx-bar-stack-horizontal-' + i },
        s.map(function (d, ii) {
          var barWidth = xScale(d[1]) - xScale(d[0]);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, _extends({
            key: 'bar-group-bar-' + i + '-' + ii + '-' + s.key,
            x: xScale(d[0]),
            y: yScale(y(d.data)),
            width: barWidth,
            height: bandwidth,
            fill: zScale(s.key),
            data: {
              bandwidth: bandwidth,
              paddingInner: paddingInner,
              paddingOuter: paddingOuter,
              step: step,
              key: s.key,
              value: d[0],
              height: bandwidth,
              width: barWidth,
              y: y(d.data),
              yFormatted: format(y(d.data)),
              data: d.data
            }
          }, restProps));
        })
      );
    })
  );
}

BarStackHorizontal.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  zScale: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  keys: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number
};

var STACK_ORDERS = {
  ascending: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOrderAscending"],
  descending: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOrderDescending"],
  insideout: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOrderInsideOut"],
  none: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOrderNone"],
  reverse: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOrderReverse"]
};

var STACK_ORDER_NAMES = Object.keys(STACK_ORDERS);

function stackOrder(order) {
  return STACK_ORDERS[order] || STACK_ORDERS.none;
}

var STACK_OFFSETS = {
  expand: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOffsetExpand"],
  diverging: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOffsetDiverging"],
  none: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOffsetNone"],
  silhouette: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOffsetSilhouette"],
  wiggle: d3_shape__WEBPACK_IMPORTED_MODULE_2__["stackOffsetWiggle"]
};

var STACK_OFFSET_NAMES = Object.keys(STACK_OFFSETS);

function stackOffset(offset) {
  return STACK_OFFSETS[offset] || STACK_OFFSETS.none;
}

function Stack(_ref) {
  var className = _ref.className,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      keys = _ref.keys,
      data = _ref.data,
      curve = _ref.curve,
      defined = _ref.defined,
      x = _ref.x,
      x0 = _ref.x0,
      x1 = _ref.x1,
      y0 = _ref.y0,
      y1 = _ref.y1,
      value = _ref.value,
      order = _ref.order,
      offset = _ref.offset,
      render = _ref.render,
      _ref$reverse = _ref.reverse,
      reverse = _ref$reverse === undefined ? false : _ref$reverse,
      restProps = objectWithoutProperties(_ref, ['className', 'top', 'left', 'keys', 'data', 'curve', 'defined', 'x', 'x0', 'x1', 'y0', 'y1', 'value', 'order', 'offset', 'render', 'reverse']);

  var stack$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["stack"])();
  if (keys) stack$$1.keys(keys);
  if (value) stack$$1.value(value);
  if (order) stack$$1.order(stackOrder(order));
  if (offset) stack$$1.offset(stackOffset(offset));

  var path$$1 = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["area"])();
  if (x) path$$1.x(x);
  if (x0) path$$1.x0(x0);
  if (x1) path$$1.x1(x1);
  if (y0) path$$1.y0(y0);
  if (y1) path$$1.y1(y1);
  if (curve) path$$1.curve(curve);
  if (defined) path$$1.defined(defined);

  var seriesData = stack$$1(data);
  if (reverse) seriesData.reverse();

  if (render) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
    { top: top, left: left },
    render({ seriesData: seriesData, path: path$$1 })
  );

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"],
    { top: top, left: left },
    seriesData.map(function (series, i) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-stack', className),
        key: 'stack-' + i + '-' + (series.key || ''),
        d: path$$1(series)
      }, additionalProps(restProps, {
        datum: series[i],
        index: i,
        series: series
      })));
    })
  );
}

function pathHorizontalDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var link = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["linkHorizontal"])();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

LinkHorizontal.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkHorizontal(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathHorizontalDiagonal({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link-horizontal', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathVerticalDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var link = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["linkVertical"])();
    link.x(x);
    link.y(y);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

LinkVertical.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkVertical(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathVerticalDiagonal({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link-vertical', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathRadialDiagonal(_ref) {
  var source = _ref.source,
      target = _ref.target,
      angle = _ref.angle,
      radius = _ref.radius;

  return function (data) {
    var link = Object(d3_shape__WEBPACK_IMPORTED_MODULE_2__["linkRadial"])();
    link.angle(angle);
    link.radius(radius);
    link.source(source);
    link.target(target);
    return link(data);
  };
}

LinkRadial.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  angle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  radius: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkRadial(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$angle = _ref2.angle,
      angle = _ref2$angle === undefined ? function (d) {
    return d.x;
  } : _ref2$angle,
      _ref2$radius = _ref2.radius,
      radius = _ref2$radius === undefined ? function (d) {
    return d.y;
  } : _ref2$radius,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'angle', 'radius', 'source', 'target']);

  path$$1 = path$$1 || pathRadialDiagonal({ source: source, target: target, angle: angle, radius: radius });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link-radius', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathHorizontalCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);

    return path$$1.toString();
  };
}

LinkHorizontalCurve.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkHorizontalCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.2 : _ref2$percent,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || pathHorizontalCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathVerticalCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);

    return path$$1.toString();
  };
}

LinkVerticalCurve.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkVerticalCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.2 : _ref2$percent,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || pathVerticalCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathRadialCurve(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sa = x(sourceData) - Math.PI / 2;
    var sr = y(sourceData);
    var ta = x(targetData) - Math.PI / 2;
    var tr = y(targetData);

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);

    var sx = sr * sc;
    var sy = sr * ss;
    var tx = tr * tc;
    var ty = tr * ts;

    var dx = tx - sx;
    var dy = ty - sy;
    var ix = percent * (dx + dy);
    var iy = percent * (dy - dx);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.bezierCurveTo(sx + ix, sy + iy, tx + iy, ty - ix, tx, ty);

    return path$$1.toString();
  };
}

LinkRadialCurve.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkRadialCurve(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.2 : _ref2$percent,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target', 'percent']);

  path$$1 = path$$1 || pathRadialCurve({ source: source, target: target, x: x, y: y, percent: percent });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathHorizontalLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(tx, ty);

    return path$$1.toString();
  };
}

LinkHorizontalLine.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkHorizontalLine(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathHorizontalLine({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathVerticalLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(tx, ty);

    return path$$1.toString();
  };
}

LinkVerticalLine.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkVerticalLine(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathVerticalLine({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathRadialLine(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sa = x(sourceData) - Math.PI / 2;
    var sr = y(sourceData);
    var ta = x(targetData) - Math.PI / 2;
    var tr = y(targetData);

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sr * sc, sr * ss);
    path$$1.lineTo(tr * tc, tr * ts);

    return path$$1.toString();
  };
}

LinkRadialStep.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkRadialStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathRadialLine({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathHorizontalStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(sx + (tx - sx) * percent, sy);
    path$$1.lineTo(sx + (tx - sx) * percent, ty);
    path$$1.lineTo(tx, ty);

    return path$$1.toString();
  };
}

LinkHorizontalStep.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkHorizontalStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.5 : _ref2$percent,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.y;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.x;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'percent', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathHorizontalStep({ source: source, target: target, x: x, y: y, percent: percent });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathVerticalStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y,
      percent = _ref.percent;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var path$$1 = Object(d3_path__WEBPACK_IMPORTED_MODULE_6__["path"])();
    path$$1.moveTo(sx, sy);
    path$$1.lineTo(sx, sy + (ty - sy) * percent);
    path$$1.lineTo(tx, sy + (ty - sy) * percent);
    path$$1.lineTo(tx, ty);

    return path$$1.toString();
  };
}

LinkVerticalStep.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkVerticalStep(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$percent = _ref2.percent,
      percent = _ref2$percent === undefined ? 0.5 : _ref2$percent,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'percent', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathVerticalStep({ source: source, target: target, x: x, y: y, percent: percent });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}

function pathRadialStep(_ref) {
  var source = _ref.source,
      target = _ref.target,
      x = _ref.x,
      y = _ref.y;

  return function (data) {
    var sourceData = source(data);
    var targetData = target(data);

    var sx = x(sourceData);
    var sy = y(sourceData);
    var tx = x(targetData);
    var ty = y(targetData);

    var sa = sx - Math.PI / 2;
    var sr = sy;
    var ta = tx - Math.PI / 2;
    var tr = ty;

    var sc = Math.cos(sa);
    var ss = Math.sin(sa);
    var tc = Math.cos(ta);
    var ts = Math.sin(ta);
    var sf = Math.abs(ta - sa) > Math.PI ? ta <= sa : ta > sa;

    return '\n      M' + sr * sc + ',' + sr * ss + '\n      A' + sr + ',' + sr + ',0,0,' + (sf ? 1 : 0) + ',' + sr * tc + ',' + sr * ts + '\n      L' + tr * tc + ',' + tr * ts + '\n    ';
  };
}

LinkRadialStep$1.propTypes = {
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  y: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  source: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  path: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};

function LinkRadialStep$1(_ref2) {
  var className = _ref2.className,
      innerRef = _ref2.innerRef,
      data = _ref2.data,
      path$$1 = _ref2.path,
      _ref2$x = _ref2.x,
      x = _ref2$x === undefined ? function (d) {
    return d.x;
  } : _ref2$x,
      _ref2$y = _ref2.y,
      y = _ref2$y === undefined ? function (d) {
    return d.y;
  } : _ref2$y,
      _ref2$source = _ref2.source,
      source = _ref2$source === undefined ? function (d) {
    return d.source;
  } : _ref2$source,
      _ref2$target = _ref2.target,
      target = _ref2$target === undefined ? function (d) {
    return d.target;
  } : _ref2$target,
      restProps = objectWithoutProperties(_ref2, ['className', 'innerRef', 'data', 'path', 'x', 'y', 'source', 'target']);

  path$$1 = path$$1 || pathRadialStep({ source: source, target: target, x: x, y: y });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('vx-link', className),
    d: path$$1(data)
  }, additionalProps(restProps, data)));
}




/***/ }),

/***/ "./node_modules/@vx/voronoi/dist/vx-voronoi.es.js":
/*!********************************************************!*\
  !*** ./node_modules/@vx/voronoi/dist/vx-voronoi.es.js ***!
  \********************************************************/
/*! exports provided: voronoi, VoronoiPolygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voronoi", function() { return voronoi$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoronoiPolygon", function() { return VoronoiPolygon; });
/* harmony import */ var d3_voronoi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-voronoi */ "./node_modules/d3-voronoi/src/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





// returns a d3 voronoi *layout*, for a voronoi *diagram* call `layout(data)`

var voronoi$1 = (function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? 0 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 0 : _ref$height,
      x = _ref.x,
      y = _ref.y;

  var voronoi$$1 = Object(d3_voronoi__WEBPACK_IMPORTED_MODULE_0__["voronoi"])();

  if (x) voronoi$$1.x(x);
  if (y) voronoi$$1.y(y);

  voronoi$$1.extent([[-1, -1], [width + 1, height + 1]]);

  return voronoi$$1;
});

function callOrValue(maybeFn, data) {
  if (typeof maybeFn === 'function') {
    return maybeFn(data);
  }
  return maybeFn;
}

function additionalProps(restProps, data) {
  return Object.keys(restProps).reduce(function (ret, cur) {
    ret[cur] = callOrValue(restProps[cur], data);
    return ret;
  }, {});
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var propTypes = {
  polygon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array)
};

function VoronoiPolygon(_ref) {
  var polygon = _ref.polygon,
      className = _ref.className,
      restProps = objectWithoutProperties(_ref, ['polygon', 'className']);

  if (!polygon) return null;
  var data = polygon.data;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('path', _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('vx-voronoi-polygon', className),
    d: 'M' + polygon.join('L') + 'Z'
  }, additionalProps(restProps, data)));
}

VoronoiPolygon.propTypes = propTypes;




/***/ }),

/***/ "./node_modules/d3-path/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-path/src/index.js ***!
  \*******************************************/
/*! exports provided: path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path */ "./node_modules/d3-path/src/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "path", function() { return _path__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/d3-path/src/path.js":
/*!******************************************!*\
  !*** ./node_modules/d3-path/src/path.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (path);


/***/ }),

/***/ "./node_modules/d3-scale/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-scale/src/array.js ***!
  \********************************************/
/*! exports provided: map, slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var array = Array.prototype;

var map = array.map;
var slice = array.slice;


/***/ }),

/***/ "./node_modules/d3-scale/src/band.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/band.js ***!
  \*******************************************/
/*! exports provided: default, point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return band; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ordinal */ "./node_modules/d3-scale/src/ordinal.js");



function band() {
  var scale = Object(_ordinal__WEBPACK_IMPORTED_MODULE_1__["default"])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band().paddingInner(1));
}


/***/ }),

/***/ "./node_modules/d3-scale/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-scale/src/continuous.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/continuous.js ***!
  \*************************************************/
/*! exports provided: deinterpolateLinear, copy, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deinterpolateLinear", function() { return deinterpolateLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return continuous; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/value.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/round.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./number */ "./node_modules/d3-scale/src/number.js");






var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(_constant__WEBPACK_IMPORTED_MODULE_4__["default"])(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["default"],
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_3__["map"].call(_, _number__WEBPACK_IMPORTED_MODULE_5__["default"]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_3__["slice"].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = _array__WEBPACK_IMPORTED_MODULE_3__["slice"].call(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}


/***/ }),

/***/ "./node_modules/d3-scale/src/diverging.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/diverging.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return diverging; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");


function diverging(interpolator) {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      k10 = 1,
      k21 = 1,
      clamp = false;

  function scale(x) {
    var t = 0.5 + ((x = +x) - x1) * (x < x1 ? k10 : k21);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], x2 = +_[2], k10 = x0 === x1 ? 0 : 0.5 / (x1 - x0), k21 = x1 === x2 ? 0 : 0.5 / (x2 - x1), scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return diverging(interpolator).domain([x0, x1, x2]).clamp(clamp);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number */ "./node_modules/d3-scale/src/number.js");




function identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(_, _number__WEBPACK_IMPORTED_MODULE_2__["default"]), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity().domain(domain);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-scale/src/index.js ***!
  \********************************************/
/*! exports provided: scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential, scaleDiverging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _band__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./band */ "./node_modules/d3-scale/src/band.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return _band__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return _band__WEBPACK_IMPORTED_MODULE_0__["point"]; });

/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-scale/src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return _identity__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return _linear__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./node_modules/d3-scale/src/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return _log__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ordinal */ "./node_modules/d3-scale/src/ordinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return _ordinal__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return _ordinal__WEBPACK_IMPORTED_MODULE_4__["implicit"]; });

/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pow */ "./node_modules/d3-scale/src/pow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return _pow__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return _pow__WEBPACK_IMPORTED_MODULE_5__["sqrt"]; });

/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quantile */ "./node_modules/d3-scale/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return _quantile__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _quantize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quantize */ "./node_modules/d3-scale/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return _quantize__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _threshold__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./threshold */ "./node_modules/d3-scale/src/threshold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return _threshold__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./time */ "./node_modules/d3-scale/src/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return _time__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _utcTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utcTime */ "./node_modules/d3-scale/src/utcTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return _utcTime__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _sequential__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sequential */ "./node_modules/d3-scale/src/sequential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return _sequential__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _diverging__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./diverging */ "./node_modules/d3-scale/src/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDiverging", function() { return _diverging__WEBPACK_IMPORTED_MODULE_12__["default"]; });




























/***/ }),

/***/ "./node_modules/d3-scale/src/linear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/linear.js ***!
  \*********************************************/
/*! exports provided: linearish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearish", function() { return linearish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return linear; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _tickFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickFormat */ "./node_modules/d3-scale/src/tickFormat.js");





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return Object(_tickFormat__WEBPACK_IMPORTED_MODULE_3__["default"])(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["default"])(_continuous__WEBPACK_IMPORTED_MODULE_2__["deinterpolateLinear"], d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["default"]);

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["copy"])(scale, linear());
  };

  return linearish(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/log.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/log.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nice */ "./node_modules/d3-scale/src/nice.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");






function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_4__["default"])(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(_nice__WEBPACK_IMPORTED_MODULE_3__["default"])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, log().base(base));
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/nice.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/nice.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/number.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return +x;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/ordinal.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/ordinal.js ***!
  \**********************************************/
/*! exports provided: implicit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implicit", function() { return implicit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ordinal; });
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-collection */ "./node_modules/d3-collection/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");



var implicit = {name: "implicit"};

function ordinal(range) {
  var index = Object(d3_collection__WEBPACK_IMPORTED_MODULE_0__["map"])(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = Object(d3_collection__WEBPACK_IMPORTED_MODULE_0__["map"])();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/pow.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/pow.js ***!
  \******************************************/
/*! exports provided: default, sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");




function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow() {
  var exponent = 1,
      scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["default"])(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["copy"])(scale, pow().exponent(exponent));
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale);
}

function sqrt() {
  return pow().exponent(0.5);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");



function quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["quantile"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__["ascending"]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/quantize.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantize; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_2__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/sequential.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/sequential.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequential; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");


function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      k10 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) * k10;
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], k10 = x0 === x1 ? 0 : 1 / (x1 - x0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/threshold.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/threshold.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return threshold; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/tickFormat.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/tickFormat.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, count == null ? 10 : count),
      precision;
  specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatSpecifier"])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionPrefix"])(step, value))) specifier.precision = precision;
      return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatPrefix"])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionRound"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionFixed"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/time.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/time.js ***!
  \*******************************************/
/*! exports provided: calendar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nice */ "./node_modules/d3-scale/src/nice.js");








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_5__["default"])(_continuous__WEBPACK_IMPORTED_MODULE_5__["deinterpolateLinear"], d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["default"]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisector"])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(_array__WEBPACK_IMPORTED_MODULE_4__["map"].call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(Object(_nice__WEBPACK_IMPORTED_MODULE_6__["default"])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return calendar(d3_time__WEBPACK_IMPORTED_MODULE_2__["timeYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_3__["timeFormat"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/utcTime.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/utcTime.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./node_modules/d3-scale/src/time.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");




/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_time__WEBPACK_IMPORTED_MODULE_0__["calendar"])(d3_time__WEBPACK_IMPORTED_MODULE_2__["utcYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_1__["utcFormat"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/arc.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/arc.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-shape/src/math.js");




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["max"])(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        a1 = endAngle.apply(this, arguments) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        da = Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > _math__WEBPACK_IMPORTED_MODULE_2__["tau"] - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
      context.moveTo(r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a0), r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        context.moveTo(r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a1), r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) && (padRadius ? +padRadius.apply(this, arguments) : Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(r0 * r0 + r1 * r1)),
          rc = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        var p0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap)),
            p1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["asin"])(rp / r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(ap));
        if ((da0 -= p0 * 2) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a01),
          y01 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a01),
          x10 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a10),
          y10 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a10);

      // Apply rounded corners?
      if (rc > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        var x11 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a11),
            y11 = r1 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a11),
            x00 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a00),
            y00 = r0 * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a00);

        // Restrict the corner radius according to the sector angle.
        if (da < _math__WEBPACK_IMPORTED_MODULE_2__["pi"]) {
          var oc = da0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
              ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(Object(_math__WEBPACK_IMPORTED_MODULE_2__["acos"])((ax * bx + ay * by) / (Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(ax * ax + ay * ay) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(bx * bx + by * by))) / 2),
              lc = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r0 - lc) / (kc - 1));
          rc1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["min"])(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) || !(da0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"])) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y01, t0.x01), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t0.cy + t0.y11, t0.cx + t0.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y11, t1.x11), Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - _math__WEBPACK_IMPORTED_MODULE_2__["pi"] / 2;
    return [Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(a) * r, Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/area.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/area.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve/linear */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line */ "./node_modules/d3-shape/src/line.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point */ "./node_modules/d3-shape/src/point.js");






/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x0 = _point__WEBPACK_IMPORTED_MODULE_4__["x"],
      x1 = null,
      y0 = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
      y1 = _point__WEBPACK_IMPORTED_MODULE_4__["y"],
      defined = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return Object(_line__WEBPACK_IMPORTED_MODULE_3__["default"])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/areaRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/areaRadial.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _curve_radial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial */ "./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area */ "./node_modules/d3-shape/src/area.js");
/* harmony import */ var _lineRadial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lineRadial */ "./node_modules/d3-shape/src/lineRadial.js");




/* harmony default export */ __webpack_exports__["default"] = (function() {
  var a = Object(_area__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return Object(_lineRadial__WEBPACK_IMPORTED_MODULE_2__["lineRadial"])(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(Object(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return a;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/array.js ***!
  \********************************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/d3-shape/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function constant() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basis.js ***!
  \**************************************************/
/*! exports provided: point, Basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Basis", function() { return Basis; });
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Basis(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js");



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: Object(_basis__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/basisOpen.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/basisOpen.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js");


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: Object(_basis__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new BasisOpen(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/bundle.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/bundle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis */ "./node_modules/d3-shape/src/curve/basis.js");


function Bundle(context, beta) {
  this._basis = new _basis__WEBPACK_IMPORTED_MODULE_0__["Basis"](context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new _basis__WEBPACK_IMPORTED_MODULE_0__["Basis"](context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinal.js ***!
  \*****************************************************/
/*! exports provided: point, Cardinal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cardinal", function() { return Cardinal; });
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalClosed.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalClosed.js ***!
  \***********************************************************/
/*! exports provided: CardinalClosed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalClosed", function() { return CardinalClosed; });
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(_cardinal__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/cardinalOpen.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/cardinalOpen.js ***!
  \*********************************************************/
/*! exports provided: CardinalOpen, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardinalOpen", function() { return CardinalOpen; });
/* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(_cardinal__WEBPACK_IMPORTED_MODULE_0__["point"])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRom.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRom.js ***!
  \*******************************************************/
/*! exports provided: point, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-shape/src/math.js");
/* harmony import */ var _cardinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new _cardinal__WEBPACK_IMPORTED_MODULE_1__["Cardinal"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomClosed.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomClosed.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardinalClosed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalClosed */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");
/* harmony import */ var _catmullRom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js");




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(_catmullRom__WEBPACK_IMPORTED_MODULE_2__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new _cardinalClosed__WEBPACK_IMPORTED_MODULE_0__["CardinalClosed"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/catmullRomOpen.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/catmullRomOpen.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardinalOpen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardinalOpen */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony import */ var _catmullRom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js");



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(_catmullRom__WEBPACK_IMPORTED_MODULE_1__["point"])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new _cardinalOpen__WEBPACK_IMPORTED_MODULE_0__["CardinalOpen"](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linear.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linear.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Linear(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/linearClosed.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/linearClosed.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-shape/src/noop.js");


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  areaEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new LinearClosed(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/monotone.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/monotone.js ***!
  \*****************************************************/
/*! exports provided: monotoneX, monotoneY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneX", function() { return monotoneX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monotoneY", function() { return monotoneY; });
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/natural.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/natural.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Natural(context);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/radial.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/radial.js ***!
  \***************************************************/
/*! exports provided: curveRadialLinear, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curveRadialLinear", function() { return curveRadialLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return curveRadial; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-shape/src/curve/linear.js");


var curveRadialLinear = curveRadial(_linear__WEBPACK_IMPORTED_MODULE_0__["default"]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/curve/step.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/step.js ***!
  \*************************************************/
/*! exports provided: default, stepBefore, stepAfter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepBefore", function() { return stepBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepAfter", function() { return stepAfter; });
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function(context) {
  return new Step(context, 0.5);
});

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-shape/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(d) {
  return d;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/index.js ***!
  \********************************************/
/*! exports provided: arc, area, line, pie, areaRadial, radialArea, lineRadial, radialLine, pointRadial, linkHorizontal, linkVertical, linkRadial, symbol, symbols, symbolCircle, symbolCross, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, curveBasisClosed, curveBasisOpen, curveBasis, curveBundle, curveCardinalClosed, curveCardinalOpen, curveCardinal, curveCatmullRomClosed, curveCatmullRomOpen, curveCatmullRom, curveLinearClosed, curveLinear, curveMonotoneX, curveMonotoneY, curveNatural, curveStep, curveStepAfter, curveStepBefore, stack, stackOffsetExpand, stackOffsetDiverging, stackOffsetNone, stackOffsetSilhouette, stackOffsetWiggle, stackOrderAscending, stackOrderDescending, stackOrderInsideOut, stackOrderNone, stackOrderReverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arc */ "./node_modules/d3-shape/src/arc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return _arc__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area */ "./node_modules/d3-shape/src/area.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "area", function() { return _area__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line */ "./node_modules/d3-shape/src/line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "line", function() { return _line__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _pie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pie */ "./node_modules/d3-shape/src/pie.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return _pie__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _areaRadial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./areaRadial */ "./node_modules/d3-shape/src/areaRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "areaRadial", function() { return _areaRadial__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialArea", function() { return _areaRadial__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _lineRadial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lineRadial */ "./node_modules/d3-shape/src/lineRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return _lineRadial__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "radialLine", function() { return _lineRadial__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _pointRadial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pointRadial */ "./node_modules/d3-shape/src/pointRadial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointRadial", function() { return _pointRadial__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _link_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./link/index */ "./node_modules/d3-shape/src/link/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return _link_index__WEBPACK_IMPORTED_MODULE_7__["linkHorizontal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return _link_index__WEBPACK_IMPORTED_MODULE_7__["linkVertical"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return _link_index__WEBPACK_IMPORTED_MODULE_7__["linkRadial"]; });

/* harmony import */ var _symbol__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./symbol */ "./node_modules/d3-shape/src/symbol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return _symbol__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return _symbol__WEBPACK_IMPORTED_MODULE_8__["symbols"]; });

/* harmony import */ var _symbol_circle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./symbol/circle */ "./node_modules/d3-shape/src/symbol/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return _symbol_circle__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _symbol_cross__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./symbol/cross */ "./node_modules/d3-shape/src/symbol/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolCross", function() { return _symbol_cross__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _symbol_diamond__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./symbol/diamond */ "./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return _symbol_diamond__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _symbol_square__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./symbol/square */ "./node_modules/d3-shape/src/symbol/square.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return _symbol_square__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _symbol_star__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./symbol/star */ "./node_modules/d3-shape/src/symbol/star.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolStar", function() { return _symbol_star__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _symbol_triangle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./symbol/triangle */ "./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return _symbol_triangle__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _symbol_wye__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./symbol/wye */ "./node_modules/d3-shape/src/symbol/wye.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "symbolWye", function() { return _symbol_wye__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _curve_basisClosed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./curve/basisClosed */ "./node_modules/d3-shape/src/curve/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return _curve_basisClosed__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _curve_basisOpen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./curve/basisOpen */ "./node_modules/d3-shape/src/curve/basisOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return _curve_basisOpen__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _curve_basis__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./curve/basis */ "./node_modules/d3-shape/src/curve/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return _curve_basis__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _curve_bundle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./curve/bundle */ "./node_modules/d3-shape/src/curve/bundle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return _curve_bundle__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _curve_cardinalClosed__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./curve/cardinalClosed */ "./node_modules/d3-shape/src/curve/cardinalClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return _curve_cardinalClosed__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _curve_cardinalOpen__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./curve/cardinalOpen */ "./node_modules/d3-shape/src/curve/cardinalOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return _curve_cardinalOpen__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _curve_cardinal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./curve/cardinal */ "./node_modules/d3-shape/src/curve/cardinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return _curve_cardinal__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _curve_catmullRomClosed__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./curve/catmullRomClosed */ "./node_modules/d3-shape/src/curve/catmullRomClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return _curve_catmullRomClosed__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _curve_catmullRomOpen__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./curve/catmullRomOpen */ "./node_modules/d3-shape/src/curve/catmullRomOpen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return _curve_catmullRomOpen__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _curve_catmullRom__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./curve/catmullRom */ "./node_modules/d3-shape/src/curve/catmullRom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return _curve_catmullRom__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _curve_linearClosed__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./curve/linearClosed */ "./node_modules/d3-shape/src/curve/linearClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return _curve_linearClosed__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _curve_linear__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./curve/linear */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return _curve_linear__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _curve_monotone__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./curve/monotone */ "./node_modules/d3-shape/src/curve/monotone.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return _curve_monotone__WEBPACK_IMPORTED_MODULE_28__["monotoneX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return _curve_monotone__WEBPACK_IMPORTED_MODULE_28__["monotoneY"]; });

/* harmony import */ var _curve_natural__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./curve/natural */ "./node_modules/d3-shape/src/curve/natural.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return _curve_natural__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _curve_step__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./curve/step */ "./node_modules/d3-shape/src/curve/step.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return _curve_step__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return _curve_step__WEBPACK_IMPORTED_MODULE_30__["stepAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return _curve_step__WEBPACK_IMPORTED_MODULE_30__["stepBefore"]; });

/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./stack */ "./node_modules/d3-shape/src/stack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return _stack__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _offset_expand__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./offset/expand */ "./node_modules/d3-shape/src/offset/expand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return _offset_expand__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _offset_diverging__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./offset/diverging */ "./node_modules/d3-shape/src/offset/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return _offset_diverging__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _offset_none__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./offset/none */ "./node_modules/d3-shape/src/offset/none.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return _offset_none__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _offset_silhouette__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./offset/silhouette */ "./node_modules/d3-shape/src/offset/silhouette.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return _offset_silhouette__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _offset_wiggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./offset/wiggle */ "./node_modules/d3-shape/src/offset/wiggle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return _offset_wiggle__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _order_ascending__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./order/ascending */ "./node_modules/d3-shape/src/order/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return _order_ascending__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _order_descending__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./order/descending */ "./node_modules/d3-shape/src/order/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return _order_descending__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _order_insideOut__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./order/insideOut */ "./node_modules/d3-shape/src/order/insideOut.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return _order_insideOut__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _order_none__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./order/none */ "./node_modules/d3-shape/src/order/none.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return _order_none__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _order_reverse__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./order/reverse */ "./node_modules/d3-shape/src/order/reverse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return _order_reverse__WEBPACK_IMPORTED_MODULE_41__["default"]; });





 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!









































/***/ }),

/***/ "./node_modules/d3-shape/src/line.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/line.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _curve_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./curve/linear */ "./node_modules/d3-shape/src/curve/linear.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "./node_modules/d3-shape/src/point.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x = _point__WEBPACK_IMPORTED_MODULE_3__["x"],
      y = _point__WEBPACK_IMPORTED_MODULE_3__["y"],
      defined = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(true),
      context = null,
      curve = _curve_linear__WEBPACK_IMPORTED_MODULE_2__["default"],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/lineRadial.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/lineRadial.js ***!
  \*************************************************/
/*! exports provided: lineRadial, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return lineRadial; });
/* harmony import */ var _curve_radial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curve/radial */ "./node_modules/d3-shape/src/curve/radial.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ "./node_modules/d3-shape/src/line.js");



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(Object(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["default"])(_)) : c()._curve;
  };

  return l;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return lineRadial(Object(_line__WEBPACK_IMPORTED_MODULE_1__["default"])().curve(_curve_radial__WEBPACK_IMPORTED_MODULE_0__["curveRadialLinear"]));
});


/***/ }),

/***/ "./node_modules/d3-shape/src/link/index.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/link/index.js ***!
  \*************************************************/
/*! exports provided: linkHorizontal, linkVertical, linkRadial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return linkHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return linkVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return linkRadial; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../array */ "./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../point */ "./node_modules/d3-shape/src/point.js");
/* harmony import */ var _pointRadial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pointRadial */ "./node_modules/d3-shape/src/pointRadial.js");






function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = _point__WEBPACK_IMPORTED_MODULE_3__["x"],
      y = _point__WEBPACK_IMPORTED_MODULE_3__["y"],
      context = null;

  function link() {
    var buffer, argv = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : x;
  };

  link.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(+_), link) : y;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0),
      p1 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x0, y0 = (y0 + y1) / 2),
      p2 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y0),
      p3 = Object(_pointRadial__WEBPACK_IMPORTED_MODULE_4__["default"])(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/math.js ***!
  \*******************************************/
/*! exports provided: abs, atan2, cos, max, min, sin, sqrt, epsilon, pi, halfPi, tau, acos, asin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return acos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return asin; });
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),

/***/ "./node_modules/d3-shape/src/noop.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-shape/src/noop.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/diverging.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/diverging.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = yp;
      }
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/expand.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/expand.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/none.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/none.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/silhouette.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/silhouette.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/offset/wiggle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/offset/wiggle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/offset/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series, order);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/ascending.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/ascending.js ***!
  \******************************************************/
/*! exports provided: default, sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var sums = series.map(sum);
  return Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return sums[a] - sums[b]; });
});

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),

/***/ "./node_modules/d3-shape/src/order/descending.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/descending.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-shape/src/order/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/insideOut.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/order/insideOut.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/order/none.js");
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-shape/src/order/ascending.js");



/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(_ascending__WEBPACK_IMPORTED_MODULE_1__["sum"]),
      order = Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).sort(function(a, b) { return sums[b] - sums[a]; }),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/none.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/order/none.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/order/reverse.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/order/reverse.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _none__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./none */ "./node_modules/d3-shape/src/order/none.js");


/* harmony default export */ __webpack_exports__["default"] = (function(series) {
  return Object(_none__WEBPACK_IMPORTED_MODULE_0__["default"])(series).reverse();
});


/***/ }),

/***/ "./node_modules/d3-shape/src/pie.js":
/*!******************************************!*\
  !*** ./node_modules/d3-shape/src/pie.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _descending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descending */ "./node_modules/d3-shape/src/descending.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-shape/src/identity.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math */ "./node_modules/d3-shape/src/math.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity__WEBPACK_IMPORTED_MODULE_2__["default"],
      sortValues = _descending__WEBPACK_IMPORTED_MODULE_1__["default"],
      sort = null,
      startAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(0),
      endAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(_math__WEBPACK_IMPORTED_MODULE_3__["tau"]),
      padAngle = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(_math__WEBPACK_IMPORTED_MODULE_3__["tau"], Math.max(-_math__WEBPACK_IMPORTED_MODULE_3__["tau"], endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), pie) : padAngle;
  };

  return pie;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/point.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/point.js ***!
  \********************************************/
/*! exports provided: x, y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),

/***/ "./node_modules/d3-shape/src/pointRadial.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/pointRadial.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
});


/***/ }),

/***/ "./node_modules/d3-shape/src/stack.js":
/*!********************************************!*\
  !*** ./node_modules/d3-shape/src/stack.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-shape/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");
/* harmony import */ var _offset_none__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offset/none */ "./node_modules/d3-shape/src/offset/none.js");
/* harmony import */ var _order_none__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order/none */ "./node_modules/d3-shape/src/order/none.js");





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var keys = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])([]),
      order = _order_none__WEBPACK_IMPORTED_MODULE_3__["default"],
      offset = _offset_none__WEBPACK_IMPORTED_MODULE_2__["default"],
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? _order_none__WEBPACK_IMPORTED_MODULE_3__["default"] : typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? _offset_none__WEBPACK_IMPORTED_MODULE_2__["default"] : _, stack) : offset;
  };

  return stack;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-shape/src/symbol.js ***!
  \*********************************************/
/*! exports provided: symbols, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return symbols; });
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-path */ "./node_modules/d3-path/src/index.js");
/* harmony import */ var _symbol_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbol/circle */ "./node_modules/d3-shape/src/symbol/circle.js");
/* harmony import */ var _symbol_cross__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/cross */ "./node_modules/d3-shape/src/symbol/cross.js");
/* harmony import */ var _symbol_diamond__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./symbol/diamond */ "./node_modules/d3-shape/src/symbol/diamond.js");
/* harmony import */ var _symbol_star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symbol/star */ "./node_modules/d3-shape/src/symbol/star.js");
/* harmony import */ var _symbol_square__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symbol/square */ "./node_modules/d3-shape/src/symbol/square.js");
/* harmony import */ var _symbol_triangle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symbol/triangle */ "./node_modules/d3-shape/src/symbol/triangle.js");
/* harmony import */ var _symbol_wye__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./symbol/wye */ "./node_modules/d3-shape/src/symbol/wye.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-shape/src/constant.js");










var symbols = [
  _symbol_circle__WEBPACK_IMPORTED_MODULE_1__["default"],
  _symbol_cross__WEBPACK_IMPORTED_MODULE_2__["default"],
  _symbol_diamond__WEBPACK_IMPORTED_MODULE_3__["default"],
  _symbol_square__WEBPACK_IMPORTED_MODULE_5__["default"],
  _symbol_star__WEBPACK_IMPORTED_MODULE_4__["default"],
  _symbol_triangle__WEBPACK_IMPORTED_MODULE_6__["default"],
  _symbol_wye__WEBPACK_IMPORTED_MODULE_7__["default"]
];

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var type = Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(_symbol_circle__WEBPACK_IMPORTED_MODULE_1__["default"]),
      size = Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_0__["path"])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_8__["default"])(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/circle.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/circle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-shape/src/math.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / _math__WEBPACK_IMPORTED_MODULE_0__["pi"]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, _math__WEBPACK_IMPORTED_MODULE_0__["tau"]);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/cross.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/cross.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/diamond.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/diamond.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/square.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/square.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/star.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/star.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-shape/src/math.js");


var ka = 0.89081309152928522810,
    kr = Math.sin(_math__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10) / Math.sin(7 * _math__WEBPACK_IMPORTED_MODULE_0__["pi"] / 10),
    kx = Math.sin(_math__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr,
    ky = -Math.cos(_math__WEBPACK_IMPORTED_MODULE_0__["tau"] / 10) * kr;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = _math__WEBPACK_IMPORTED_MODULE_0__["tau"] * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/triangle.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/triangle.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-shape/src/symbol/wye.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/symbol/wye.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["default"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});


/***/ }),

/***/ "./node_modules/d3-voronoi/src/Beach.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-voronoi/src/Beach.js ***!
  \**********************************************/
/*! exports provided: removeBeach, addBeach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBeach", function() { return removeBeach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBeach", function() { return addBeach; });
/* harmony import */ var _RedBlackTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedBlackTree */ "./node_modules/d3-voronoi/src/RedBlackTree.js");
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell */ "./node_modules/d3-voronoi/src/Cell.js");
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Circle */ "./node_modules/d3-voronoi/src/Circle.js");
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edge */ "./node_modules/d3-voronoi/src/Edge.js");
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Diagram */ "./node_modules/d3-voronoi/src/Diagram.js");






var beachPool = [];

function Beach() {
  Object(_RedBlackTree__WEBPACK_IMPORTED_MODULE_0__["RedBlackNode"])(this);
  this.edge =
  this.site =
  this.circle = null;
}

function createBeach(site) {
  var beach = beachPool.pop() || new Beach;
  beach.site = site;
  return beach;
}

function detachBeach(beach) {
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["detachCircle"])(beach);
  _Diagram__WEBPACK_IMPORTED_MODULE_4__["beaches"].remove(beach);
  beachPool.push(beach);
  Object(_RedBlackTree__WEBPACK_IMPORTED_MODULE_0__["RedBlackNode"])(beach);
}

function removeBeach(beach) {
  var circle = beach.circle,
      x = circle.x,
      y = circle.cy,
      vertex = [x, y],
      previous = beach.P,
      next = beach.N,
      disappearing = [beach];

  detachBeach(beach);

  var lArc = previous;
  while (lArc.circle
      && Math.abs(x - lArc.circle.x) < _Diagram__WEBPACK_IMPORTED_MODULE_4__["epsilon"]
      && Math.abs(y - lArc.circle.cy) < _Diagram__WEBPACK_IMPORTED_MODULE_4__["epsilon"]) {
    previous = lArc.P;
    disappearing.unshift(lArc);
    detachBeach(lArc);
    lArc = previous;
  }

  disappearing.unshift(lArc);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["detachCircle"])(lArc);

  var rArc = next;
  while (rArc.circle
      && Math.abs(x - rArc.circle.x) < _Diagram__WEBPACK_IMPORTED_MODULE_4__["epsilon"]
      && Math.abs(y - rArc.circle.cy) < _Diagram__WEBPACK_IMPORTED_MODULE_4__["epsilon"]) {
    next = rArc.N;
    disappearing.push(rArc);
    detachBeach(rArc);
    rArc = next;
  }

  disappearing.push(rArc);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["detachCircle"])(rArc);

  var nArcs = disappearing.length,
      iArc;
  for (iArc = 1; iArc < nArcs; ++iArc) {
    rArc = disappearing[iArc];
    lArc = disappearing[iArc - 1];
    Object(_Edge__WEBPACK_IMPORTED_MODULE_3__["setEdgeEnd"])(rArc.edge, lArc.site, rArc.site, vertex);
  }

  lArc = disappearing[0];
  rArc = disappearing[nArcs - 1];
  rArc.edge = Object(_Edge__WEBPACK_IMPORTED_MODULE_3__["createEdge"])(lArc.site, rArc.site, null, vertex);

  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["attachCircle"])(lArc);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["attachCircle"])(rArc);
}

function addBeach(site) {
  var x = site[0],
      directrix = site[1],
      lArc,
      rArc,
      dxl,
      dxr,
      node = _Diagram__WEBPACK_IMPORTED_MODULE_4__["beaches"]._;

  while (node) {
    dxl = leftBreakPoint(node, directrix) - x;
    if (dxl > _Diagram__WEBPACK_IMPORTED_MODULE_4__["epsilon"]) node = node.L; else {
      dxr = x - rightBreakPoint(node, directrix);
      if (dxr > _Diagram__WEBPACK_IMPORTED_MODULE_4__["epsilon"]) {
        if (!node.R) {
          lArc = node;
          break;
        }
        node = node.R;
      } else {
        if (dxl > -_Diagram__WEBPACK_IMPORTED_MODULE_4__["epsilon"]) {
          lArc = node.P;
          rArc = node;
        } else if (dxr > -_Diagram__WEBPACK_IMPORTED_MODULE_4__["epsilon"]) {
          lArc = node;
          rArc = node.N;
        } else {
          lArc = rArc = node;
        }
        break;
      }
    }
  }

  Object(_Cell__WEBPACK_IMPORTED_MODULE_1__["createCell"])(site);
  var newArc = createBeach(site);
  _Diagram__WEBPACK_IMPORTED_MODULE_4__["beaches"].insert(lArc, newArc);

  if (!lArc && !rArc) return;

  if (lArc === rArc) {
    Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["detachCircle"])(lArc);
    rArc = createBeach(lArc.site);
    _Diagram__WEBPACK_IMPORTED_MODULE_4__["beaches"].insert(newArc, rArc);
    newArc.edge = rArc.edge = Object(_Edge__WEBPACK_IMPORTED_MODULE_3__["createEdge"])(lArc.site, newArc.site);
    Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["attachCircle"])(lArc);
    Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["attachCircle"])(rArc);
    return;
  }

  if (!rArc) { // && lArc
    newArc.edge = Object(_Edge__WEBPACK_IMPORTED_MODULE_3__["createEdge"])(lArc.site, newArc.site);
    return;
  }

  // else lArc !== rArc
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["detachCircle"])(lArc);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["detachCircle"])(rArc);

  var lSite = lArc.site,
      ax = lSite[0],
      ay = lSite[1],
      bx = site[0] - ax,
      by = site[1] - ay,
      rSite = rArc.site,
      cx = rSite[0] - ax,
      cy = rSite[1] - ay,
      d = 2 * (bx * cy - by * cx),
      hb = bx * bx + by * by,
      hc = cx * cx + cy * cy,
      vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];

  Object(_Edge__WEBPACK_IMPORTED_MODULE_3__["setEdgeEnd"])(rArc.edge, lSite, rSite, vertex);
  newArc.edge = Object(_Edge__WEBPACK_IMPORTED_MODULE_3__["createEdge"])(lSite, site, null, vertex);
  rArc.edge = Object(_Edge__WEBPACK_IMPORTED_MODULE_3__["createEdge"])(site, rSite, null, vertex);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["attachCircle"])(lArc);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["attachCircle"])(rArc);
}

function leftBreakPoint(arc, directrix) {
  var site = arc.site,
      rfocx = site[0],
      rfocy = site[1],
      pby2 = rfocy - directrix;

  if (!pby2) return rfocx;

  var lArc = arc.P;
  if (!lArc) return -Infinity;

  site = lArc.site;
  var lfocx = site[0],
      lfocy = site[1],
      plby2 = lfocy - directrix;

  if (!plby2) return lfocx;

  var hl = lfocx - rfocx,
      aby2 = 1 / pby2 - 1 / plby2,
      b = hl / plby2;

  if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;

  return (rfocx + lfocx) / 2;
}

function rightBreakPoint(arc, directrix) {
  var rArc = arc.N;
  if (rArc) return leftBreakPoint(rArc, directrix);
  var site = arc.site;
  return site[1] === directrix ? site[0] : Infinity;
}


/***/ }),

/***/ "./node_modules/d3-voronoi/src/Cell.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-voronoi/src/Cell.js ***!
  \*********************************************/
/*! exports provided: createCell, cellHalfedgeStart, cellHalfedgeEnd, sortCellHalfedges, clipCells */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCell", function() { return createCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cellHalfedgeStart", function() { return cellHalfedgeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cellHalfedgeEnd", function() { return cellHalfedgeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortCellHalfedges", function() { return sortCellHalfedges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipCells", function() { return clipCells; });
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edge */ "./node_modules/d3-voronoi/src/Edge.js");
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Diagram */ "./node_modules/d3-voronoi/src/Diagram.js");



function createCell(site) {
  return _Diagram__WEBPACK_IMPORTED_MODULE_1__["cells"][site.index] = {
    site: site,
    halfedges: []
  };
}

function cellHalfedgeAngle(cell, edge) {
  var site = cell.site,
      va = edge.left,
      vb = edge.right;
  if (site === vb) vb = va, va = site;
  if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
  if (site === va) va = edge[1], vb = edge[0];
  else va = edge[0], vb = edge[1];
  return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
}

function cellHalfedgeStart(cell, edge) {
  return edge[+(edge.left !== cell.site)];
}

function cellHalfedgeEnd(cell, edge) {
  return edge[+(edge.left === cell.site)];
}

function sortCellHalfedges() {
  for (var i = 0, n = _Diagram__WEBPACK_IMPORTED_MODULE_1__["cells"].length, cell, halfedges, j, m; i < n; ++i) {
    if ((cell = _Diagram__WEBPACK_IMPORTED_MODULE_1__["cells"][i]) && (m = (halfedges = cell.halfedges).length)) {
      var index = new Array(m),
          array = new Array(m);
      for (j = 0; j < m; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, _Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"][halfedges[j]]);
      index.sort(function(i, j) { return array[j] - array[i]; });
      for (j = 0; j < m; ++j) array[j] = halfedges[index[j]];
      for (j = 0; j < m; ++j) halfedges[j] = array[j];
    }
  }
}

function clipCells(x0, y0, x1, y1) {
  var nCells = _Diagram__WEBPACK_IMPORTED_MODULE_1__["cells"].length,
      iCell,
      cell,
      site,
      iHalfedge,
      halfedges,
      nHalfedges,
      start,
      startX,
      startY,
      end,
      endX,
      endY,
      cover = true;

  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = _Diagram__WEBPACK_IMPORTED_MODULE_1__["cells"][iCell]) {
      site = cell.site;
      halfedges = cell.halfedges;
      iHalfedge = halfedges.length;

      // Remove any dangling clipped edges.
      while (iHalfedge--) {
        if (!_Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"][halfedges[iHalfedge]]) {
          halfedges.splice(iHalfedge, 1);
        }
      }

      // Insert any border edges as necessary.
      iHalfedge = 0, nHalfedges = halfedges.length;
      while (iHalfedge < nHalfedges) {
        end = cellHalfedgeEnd(cell, _Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"][halfedges[iHalfedge]]), endX = end[0], endY = end[1];
        start = cellHalfedgeStart(cell, _Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"][halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
        if (Math.abs(endX - startX) > _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] || Math.abs(endY - startY) > _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) {
          halfedges.splice(iHalfedge, 0, _Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"].push(Object(_Edge__WEBPACK_IMPORTED_MODULE_0__["createBorderEdge"])(site, end,
              Math.abs(endX - x0) < _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && y1 - endY > _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? [x0, Math.abs(startX - x0) < _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? startY : y1]
              : Math.abs(endY - y1) < _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && x1 - endX > _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? [Math.abs(startY - y1) < _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? startX : x1, y1]
              : Math.abs(endX - x1) < _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && endY - y0 > _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? [x1, Math.abs(startX - x1) < _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? startY : y0]
              : Math.abs(endY - y0) < _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && endX - x0 > _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? [Math.abs(startY - y0) < _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? startX : x0, y0]
              : null)) - 1);
          ++nHalfedges;
        }
      }

      if (nHalfedges) cover = false;
    }
  }

  // If there weren’t any edges, have the closest site cover the extent.
  // It doesn’t matter which corner of the extent we measure!
  if (cover) {
    var dx, dy, d2, dc = Infinity;

    for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
      if (cell = _Diagram__WEBPACK_IMPORTED_MODULE_1__["cells"][iCell]) {
        site = cell.site;
        dx = site[0] - x0;
        dy = site[1] - y0;
        d2 = dx * dx + dy * dy;
        if (d2 < dc) dc = d2, cover = cell;
      }
    }

    if (cover) {
      var v00 = [x0, y0], v01 = [x0, y1], v11 = [x1, y1], v10 = [x1, y0];
      cover.halfedges.push(
        _Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"].push(Object(_Edge__WEBPACK_IMPORTED_MODULE_0__["createBorderEdge"])(site = cover.site, v00, v01)) - 1,
        _Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"].push(Object(_Edge__WEBPACK_IMPORTED_MODULE_0__["createBorderEdge"])(site, v01, v11)) - 1,
        _Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"].push(Object(_Edge__WEBPACK_IMPORTED_MODULE_0__["createBorderEdge"])(site, v11, v10)) - 1,
        _Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"].push(Object(_Edge__WEBPACK_IMPORTED_MODULE_0__["createBorderEdge"])(site, v10, v00)) - 1
      );
    }
  }

  // Lastly delete any cells with no edges; these were entirely clipped.
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = _Diagram__WEBPACK_IMPORTED_MODULE_1__["cells"][iCell]) {
      if (!cell.halfedges.length) {
        delete _Diagram__WEBPACK_IMPORTED_MODULE_1__["cells"][iCell];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/d3-voronoi/src/Circle.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-voronoi/src/Circle.js ***!
  \***********************************************/
/*! exports provided: firstCircle, attachCircle, detachCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstCircle", function() { return firstCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachCircle", function() { return attachCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachCircle", function() { return detachCircle; });
/* harmony import */ var _RedBlackTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedBlackTree */ "./node_modules/d3-voronoi/src/RedBlackTree.js");
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Diagram */ "./node_modules/d3-voronoi/src/Diagram.js");



var circlePool = [];

var firstCircle;

function Circle() {
  Object(_RedBlackTree__WEBPACK_IMPORTED_MODULE_0__["RedBlackNode"])(this);
  this.x =
  this.y =
  this.arc =
  this.site =
  this.cy = null;
}

function attachCircle(arc) {
  var lArc = arc.P,
      rArc = arc.N;

  if (!lArc || !rArc) return;

  var lSite = lArc.site,
      cSite = arc.site,
      rSite = rArc.site;

  if (lSite === rSite) return;

  var bx = cSite[0],
      by = cSite[1],
      ax = lSite[0] - bx,
      ay = lSite[1] - by,
      cx = rSite[0] - bx,
      cy = rSite[1] - by;

  var d = 2 * (ax * cy - ay * cx);
  if (d >= -_Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon2"]) return;

  var ha = ax * ax + ay * ay,
      hc = cx * cx + cy * cy,
      x = (cy * ha - ay * hc) / d,
      y = (ax * hc - cx * ha) / d;

  var circle = circlePool.pop() || new Circle;
  circle.arc = arc;
  circle.site = cSite;
  circle.x = x + bx;
  circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom

  arc.circle = circle;

  var before = null,
      node = _Diagram__WEBPACK_IMPORTED_MODULE_1__["circles"]._;

  while (node) {
    if (circle.y < node.y || (circle.y === node.y && circle.x <= node.x)) {
      if (node.L) node = node.L;
      else { before = node.P; break; }
    } else {
      if (node.R) node = node.R;
      else { before = node; break; }
    }
  }

  _Diagram__WEBPACK_IMPORTED_MODULE_1__["circles"].insert(before, circle);
  if (!before) firstCircle = circle;
}

function detachCircle(arc) {
  var circle = arc.circle;
  if (circle) {
    if (!circle.P) firstCircle = circle.N;
    _Diagram__WEBPACK_IMPORTED_MODULE_1__["circles"].remove(circle);
    circlePool.push(circle);
    Object(_RedBlackTree__WEBPACK_IMPORTED_MODULE_0__["RedBlackNode"])(circle);
    arc.circle = null;
  }
}


/***/ }),

/***/ "./node_modules/d3-voronoi/src/Diagram.js":
/*!************************************************!*\
  !*** ./node_modules/d3-voronoi/src/Diagram.js ***!
  \************************************************/
/*! exports provided: epsilon, epsilon2, beaches, cells, circles, edges, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon2", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beaches", function() { return beaches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cells", function() { return cells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circles", function() { return circles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edges", function() { return edges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Diagram; });
/* harmony import */ var _Beach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Beach */ "./node_modules/d3-voronoi/src/Beach.js");
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell */ "./node_modules/d3-voronoi/src/Cell.js");
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Circle */ "./node_modules/d3-voronoi/src/Circle.js");
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edge */ "./node_modules/d3-voronoi/src/Edge.js");
/* harmony import */ var _RedBlackTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RedBlackTree */ "./node_modules/d3-voronoi/src/RedBlackTree.js");






var epsilon = 1e-6;
var epsilon2 = 1e-12;
var beaches;
var cells;
var circles;
var edges;

function triangleArea(a, b, c) {
  return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
}

function lexicographic(a, b) {
  return b[1] - a[1]
      || b[0] - a[0];
}

function Diagram(sites, extent) {
  var site = sites.sort(lexicographic).pop(),
      x,
      y,
      circle;

  edges = [];
  cells = new Array(sites.length);
  beaches = new _RedBlackTree__WEBPACK_IMPORTED_MODULE_4__["default"];
  circles = new _RedBlackTree__WEBPACK_IMPORTED_MODULE_4__["default"];

  while (true) {
    circle = _Circle__WEBPACK_IMPORTED_MODULE_2__["firstCircle"];
    if (site && (!circle || site[1] < circle.y || (site[1] === circle.y && site[0] < circle.x))) {
      if (site[0] !== x || site[1] !== y) {
        Object(_Beach__WEBPACK_IMPORTED_MODULE_0__["addBeach"])(site);
        x = site[0], y = site[1];
      }
      site = sites.pop();
    } else if (circle) {
      Object(_Beach__WEBPACK_IMPORTED_MODULE_0__["removeBeach"])(circle.arc);
    } else {
      break;
    }
  }

  Object(_Cell__WEBPACK_IMPORTED_MODULE_1__["sortCellHalfedges"])();

  if (extent) {
    var x0 = +extent[0][0],
        y0 = +extent[0][1],
        x1 = +extent[1][0],
        y1 = +extent[1][1];
    Object(_Edge__WEBPACK_IMPORTED_MODULE_3__["clipEdges"])(x0, y0, x1, y1);
    Object(_Cell__WEBPACK_IMPORTED_MODULE_1__["clipCells"])(x0, y0, x1, y1);
  }

  this.edges = edges;
  this.cells = cells;

  beaches =
  circles =
  edges =
  cells = null;
}

Diagram.prototype = {
  constructor: Diagram,

  polygons: function() {
    var edges = this.edges;

    return this.cells.map(function(cell) {
      var polygon = cell.halfedges.map(function(i) { return Object(_Cell__WEBPACK_IMPORTED_MODULE_1__["cellHalfedgeStart"])(cell, edges[i]); });
      polygon.data = cell.site.data;
      return polygon;
    });
  },

  triangles: function() {
    var triangles = [],
        edges = this.edges;

    this.cells.forEach(function(cell, i) {
      if (!(m = (halfedges = cell.halfedges).length)) return;
      var site = cell.site,
          halfedges,
          j = -1,
          m,
          s0,
          e1 = edges[halfedges[m - 1]],
          s1 = e1.left === site ? e1.right : e1.left;

      while (++j < m) {
        s0 = s1;
        e1 = edges[halfedges[j]];
        s1 = e1.left === site ? e1.right : e1.left;
        if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
          triangles.push([site.data, s0.data, s1.data]);
        }
      }
    });

    return triangles;
  },

  links: function() {
    return this.edges.filter(function(edge) {
      return edge.right;
    }).map(function(edge) {
      return {
        source: edge.left.data,
        target: edge.right.data
      };
    });
  },

  find: function(x, y, radius) {
    var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;

    // Use the previously-found cell, or start with an arbitrary one.
    while (!(cell = that.cells[i1])) if (++i1 >= n) return null;
    var dx = x - cell.site[0], dy = y - cell.site[1], d2 = dx * dx + dy * dy;

    // Traverse the half-edges to find a closer cell, if any.
    do {
      cell = that.cells[i0 = i1], i1 = null;
      cell.halfedges.forEach(function(e) {
        var edge = that.edges[e], v = edge.left;
        if ((v === cell.site || !v) && !(v = edge.right)) return;
        var vx = x - v[0], vy = y - v[1], v2 = vx * vx + vy * vy;
        if (v2 < d2) d2 = v2, i1 = v.index;
      });
    } while (i1 !== null);

    that._found = i0;

    return radius == null || d2 <= radius * radius ? cell.site : null;
  }
}


/***/ }),

/***/ "./node_modules/d3-voronoi/src/Edge.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-voronoi/src/Edge.js ***!
  \*********************************************/
/*! exports provided: createEdge, createBorderEdge, setEdgeEnd, clipEdges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEdge", function() { return createEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBorderEdge", function() { return createBorderEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEdgeEnd", function() { return setEdgeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipEdges", function() { return clipEdges; });
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Diagram */ "./node_modules/d3-voronoi/src/Diagram.js");


function createEdge(left, right, v0, v1) {
  var edge = [null, null],
      index = _Diagram__WEBPACK_IMPORTED_MODULE_0__["edges"].push(edge) - 1;
  edge.left = left;
  edge.right = right;
  if (v0) setEdgeEnd(edge, left, right, v0);
  if (v1) setEdgeEnd(edge, right, left, v1);
  _Diagram__WEBPACK_IMPORTED_MODULE_0__["cells"][left.index].halfedges.push(index);
  _Diagram__WEBPACK_IMPORTED_MODULE_0__["cells"][right.index].halfedges.push(index);
  return edge;
}

function createBorderEdge(left, v0, v1) {
  var edge = [v0, v1];
  edge.left = left;
  return edge;
}

function setEdgeEnd(edge, left, right, vertex) {
  if (!edge[0] && !edge[1]) {
    edge[0] = vertex;
    edge.left = left;
    edge.right = right;
  } else if (edge.left === right) {
    edge[1] = vertex;
  } else {
    edge[0] = vertex;
  }
}

// Liang–Barsky line clipping.
function clipEdge(edge, x0, y0, x1, y1) {
  var a = edge[0],
      b = edge[1],
      ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?

  if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
  if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
  return true;
}

function connectEdge(edge, x0, y0, x1, y1) {
  var v1 = edge[1];
  if (v1) return true;

  var v0 = edge[0],
      left = edge.left,
      right = edge.right,
      lx = left[0],
      ly = left[1],
      rx = right[0],
      ry = right[1],
      fx = (lx + rx) / 2,
      fy = (ly + ry) / 2,
      fm,
      fb;

  if (ry === ly) {
    if (fx < x0 || fx >= x1) return;
    if (lx > rx) {
      if (!v0) v0 = [fx, y0];
      else if (v0[1] >= y1) return;
      v1 = [fx, y1];
    } else {
      if (!v0) v0 = [fx, y1];
      else if (v0[1] < y0) return;
      v1 = [fx, y0];
    }
  } else {
    fm = (lx - rx) / (ry - ly);
    fb = fy - fm * fx;
    if (fm < -1 || fm > 1) {
      if (lx > rx) {
        if (!v0) v0 = [(y0 - fb) / fm, y0];
        else if (v0[1] >= y1) return;
        v1 = [(y1 - fb) / fm, y1];
      } else {
        if (!v0) v0 = [(y1 - fb) / fm, y1];
        else if (v0[1] < y0) return;
        v1 = [(y0 - fb) / fm, y0];
      }
    } else {
      if (ly < ry) {
        if (!v0) v0 = [x0, fm * x0 + fb];
        else if (v0[0] >= x1) return;
        v1 = [x1, fm * x1 + fb];
      } else {
        if (!v0) v0 = [x1, fm * x1 + fb];
        else if (v0[0] < x0) return;
        v1 = [x0, fm * x0 + fb];
      }
    }
  }

  edge[0] = v0;
  edge[1] = v1;
  return true;
}

function clipEdges(x0, y0, x1, y1) {
  var i = _Diagram__WEBPACK_IMPORTED_MODULE_0__["edges"].length,
      edge;

  while (i--) {
    if (!connectEdge(edge = _Diagram__WEBPACK_IMPORTED_MODULE_0__["edges"][i], x0, y0, x1, y1)
        || !clipEdge(edge, x0, y0, x1, y1)
        || !(Math.abs(edge[0][0] - edge[1][0]) > _Diagram__WEBPACK_IMPORTED_MODULE_0__["epsilon"]
            || Math.abs(edge[0][1] - edge[1][1]) > _Diagram__WEBPACK_IMPORTED_MODULE_0__["epsilon"])) {
      delete _Diagram__WEBPACK_IMPORTED_MODULE_0__["edges"][i];
    }
  }
}


/***/ }),

/***/ "./node_modules/d3-voronoi/src/RedBlackTree.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-voronoi/src/RedBlackTree.js ***!
  \*****************************************************/
/*! exports provided: RedBlackNode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedBlackNode", function() { return RedBlackNode; });
function RedBlackTree() {
  this._ = null; // root node
}

function RedBlackNode(node) {
  node.U = // parent node
  node.C = // color - true for red, false for black
  node.L = // left node
  node.R = // right node
  node.P = // previous node
  node.N = null; // next node
}

RedBlackTree.prototype = {
  constructor: RedBlackTree,

  insert: function(after, node) {
    var parent, grandpa, uncle;

    if (after) {
      node.P = after;
      node.N = after.N;
      if (after.N) after.N.P = node;
      after.N = node;
      if (after.R) {
        after = after.R;
        while (after.L) after = after.L;
        after.L = node;
      } else {
        after.R = node;
      }
      parent = after;
    } else if (this._) {
      after = RedBlackFirst(this._);
      node.P = null;
      node.N = after;
      after.P = after.L = node;
      parent = after;
    } else {
      node.P = node.N = null;
      this._ = node;
      parent = null;
    }
    node.L = node.R = null;
    node.U = parent;
    node.C = true;

    after = node;
    while (parent && parent.C) {
      grandpa = parent.U;
      if (parent === grandpa.L) {
        uncle = grandpa.R;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.R) {
            RedBlackRotateLeft(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateRight(this, grandpa);
        }
      } else {
        uncle = grandpa.L;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.L) {
            RedBlackRotateRight(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateLeft(this, grandpa);
        }
      }
      parent = after.U;
    }
    this._.C = false;
  },

  remove: function(node) {
    if (node.N) node.N.P = node.P;
    if (node.P) node.P.N = node.N;
    node.N = node.P = null;

    var parent = node.U,
        sibling,
        left = node.L,
        right = node.R,
        next,
        red;

    if (!left) next = right;
    else if (!right) next = left;
    else next = RedBlackFirst(right);

    if (parent) {
      if (parent.L === node) parent.L = next;
      else parent.R = next;
    } else {
      this._ = next;
    }

    if (left && right) {
      red = next.C;
      next.C = node.C;
      next.L = left;
      left.U = next;
      if (next !== right) {
        parent = next.U;
        next.U = node.U;
        node = next.R;
        parent.L = node;
        next.R = right;
        right.U = next;
      } else {
        next.U = parent;
        parent = next;
        node = next.R;
      }
    } else {
      red = node.C;
      node = next;
    }

    if (node) node.U = parent;
    if (red) return;
    if (node && node.C) { node.C = false; return; }

    do {
      if (node === this._) break;
      if (node === parent.L) {
        sibling = parent.R;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateLeft(this, parent);
          sibling = parent.R;
        }
        if ((sibling.L && sibling.L.C)
            || (sibling.R && sibling.R.C)) {
          if (!sibling.R || !sibling.R.C) {
            sibling.L.C = false;
            sibling.C = true;
            RedBlackRotateRight(this, sibling);
            sibling = parent.R;
          }
          sibling.C = parent.C;
          parent.C = sibling.R.C = false;
          RedBlackRotateLeft(this, parent);
          node = this._;
          break;
        }
      } else {
        sibling = parent.L;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateRight(this, parent);
          sibling = parent.L;
        }
        if ((sibling.L && sibling.L.C)
          || (sibling.R && sibling.R.C)) {
          if (!sibling.L || !sibling.L.C) {
            sibling.R.C = false;
            sibling.C = true;
            RedBlackRotateLeft(this, sibling);
            sibling = parent.L;
          }
          sibling.C = parent.C;
          parent.C = sibling.L.C = false;
          RedBlackRotateRight(this, parent);
          node = this._;
          break;
        }
      }
      sibling.C = true;
      node = parent;
      parent = parent.U;
    } while (!node.C);

    if (node) node.C = false;
  }
};

function RedBlackRotateLeft(tree, node) {
  var p = node,
      q = node.R,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.R = q.L;
  if (p.R) p.R.U = p;
  q.L = p;
}

function RedBlackRotateRight(tree, node) {
  var p = node,
      q = node.L,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.L = q.R;
  if (p.L) p.L.U = p;
  q.R = p;
}

function RedBlackFirst(node) {
  while (node.L) node = node.L;
  return node;
}

/* harmony default export */ __webpack_exports__["default"] = (RedBlackTree);


/***/ }),

/***/ "./node_modules/d3-voronoi/src/constant.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-voronoi/src/constant.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-voronoi/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-voronoi/src/index.js ***!
  \**********************************************/
/*! exports provided: voronoi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _voronoi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voronoi */ "./node_modules/d3-voronoi/src/voronoi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "voronoi", function() { return _voronoi__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/d3-voronoi/src/point.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-voronoi/src/point.js ***!
  \**********************************************/
/*! exports provided: x, y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
function x(d) {
  return d[0];
}

function y(d) {
  return d[1];
}


/***/ }),

/***/ "./node_modules/d3-voronoi/src/voronoi.js":
/*!************************************************!*\
  !*** ./node_modules/d3-voronoi/src/voronoi.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-voronoi/src/constant.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./node_modules/d3-voronoi/src/point.js");
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Diagram */ "./node_modules/d3-voronoi/src/Diagram.js");




/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x = _point__WEBPACK_IMPORTED_MODULE_1__["x"],
      y = _point__WEBPACK_IMPORTED_MODULE_1__["y"],
      extent = null;

  function voronoi(data) {
    return new _Diagram__WEBPACK_IMPORTED_MODULE_2__["default"](data.map(function(d, i) {
      var s = [Math.round(x(d, i, data) / _Diagram__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) * _Diagram__WEBPACK_IMPORTED_MODULE_2__["epsilon"], Math.round(y(d, i, data) / _Diagram__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) * _Diagram__WEBPACK_IMPORTED_MODULE_2__["epsilon"]];
      s.index = i;
      s.data = d;
      return s;
    }), extent);
  }

  voronoi.polygons = function(data) {
    return voronoi(data).polygons();
  };

  voronoi.links = function(data) {
    return voronoi(data).links();
  };

  voronoi.triangles = function(data) {
    return voronoi(data).triangles();
  };

  voronoi.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), voronoi) : x;
  };

  voronoi.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), voronoi) : y;
  };

  voronoi.extent = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
  };

  voronoi.size = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
  };

  return voronoi;
});


/***/ })

}]);
//# sourceMappingURL=10.9ed865ea.chunk.js.map