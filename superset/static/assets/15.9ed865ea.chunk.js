(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reverse.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reverse.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/reverse */ "./node_modules/core-js-pure/stable/instance/reverse.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/sort */ "./node_modules/core-js-pure/stable/instance/sort.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/values.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js-stable/instance/values.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js-pure/stable/instance/values */ "./node_modules/core-js-pure/stable/instance/values.js");

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

/***/ "./node_modules/@data-ui/sparkline/esm/annotation/HorizontalReferenceLine.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/esm/annotation/HorizontalReferenceLine.js ***!
  \***********************************************************************************/
/*! exports provided: propTypes, defaultProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _vx_group_build_Group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/group/build/Group */ "./node_modules/@data-ui/sparkline/node_modules/@vx/group/build/Group.js");
/* harmony import */ var _vx_group_build_Group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vx_group_build_Group__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vx_shape_build_shapes_Line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/shape/build/shapes/Line */ "./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/Line.js");
/* harmony import */ var _vx_shape_build_shapes_Line__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vx_shape_build_shapes_Line__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vx_point_build_Point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/point/build/Point */ "./node_modules/@data-ui/sparkline/node_modules/@vx/point/build/Point.js");
/* harmony import */ var _vx_point_build_Point__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vx_point_build_Point__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data-ui/theme */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/index.js");
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_ui_theme__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Label */ "./node_modules/@data-ui/sparkline/esm/annotation/Label.js");
/* harmony import */ var _utils_positionLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/positionLabel */ "./node_modules/@data-ui/sparkline/esm/utils/positionLabel.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










var propTypes = {
  reference: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['mean', 'median', 'min', 'max'])]),
  LabelComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element,
  labelOffset: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['top', 'right', 'bottom', 'left']),
  renderLabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeLinecap: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['butt', 'square', 'round', 'inherit']),
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  // all likely passed by the parent chart
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object])),
  getY: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
var defaultProps = {
  data: [],
  getY: null,
  LabelComponent: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, _data_ui_theme__WEBPACK_IMPORTED_MODULE_6__["svgLabel"].baseTickLabel, {
    stroke: "#fff"
  })),
  labelOffset: 8,
  labelPosition: 'right',
  reference: 'mean',
  renderLabel: null,
  stroke: _data_ui_theme__WEBPACK_IMPORTED_MODULE_6__["color"].darkGray,
  strokeDasharray: null,
  strokeLinecap: 'round',
  strokeWidth: 2,
  xScale: null,
  yScale: null
};

var HorizontalReferenceLine =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(HorizontalReferenceLine, _React$PureComponent);

  function HorizontalReferenceLine() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = HorizontalReferenceLine.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        data = _this$props.data,
        getY = _this$props.getY,
        LabelComponent = _this$props.LabelComponent,
        labelOffset = _this$props.labelOffset,
        labelPosition = _this$props.labelPosition,
        reference = _this$props.reference,
        renderLabel = _this$props.renderLabel,
        stroke = _this$props.stroke,
        strokeDasharray = _this$props.strokeDasharray,
        strokeLinecap = _this$props.strokeLinecap,
        strokeWidth = _this$props.strokeWidth,
        xScale = _this$props.xScale,
        yScale = _this$props.yScale;
    if (!xScale || !yScale || !getY || !data.length) return null;

    var _xScale$range = xScale.range(),
        x0 = _xScale$range[0],
        x1 = _xScale$range[1];

    var refNumber = reference;
    if (reference === 'mean') refNumber = Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["mean"])(data, getY);
    if (reference === 'median') refNumber = Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["median"])(data, getY);
    if (reference === 'max') refNumber = Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["max"])(data, getY);
    if (reference === 'min') refNumber = Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["min"])(data, getY);
    var scaledRef = yScale(refNumber);
    var fromPoint = new _vx_point_build_Point__WEBPACK_IMPORTED_MODULE_5___default.a({
      x: x0,
      y: scaledRef
    });
    var toPoint = new _vx_point_build_Point__WEBPACK_IMPORTED_MODULE_5___default.a({
      x: x1,
      y: scaledRef
    });
    var label = renderLabel && renderLabel(refNumber);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_group_build_Group__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: {
        pointerEvents: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_shape_build_shapes_Line__WEBPACK_IMPORTED_MODULE_4___default.a, {
      from: fromPoint,
      to: toPoint,
      stroke: stroke,
      strokeDasharray: strokeDasharray,
      strokeLinecap: strokeLinecap,
      strokeWidth: strokeWidth,
      vectorEffect: "non-scaling-stroke"
    }), label && react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(LabelComponent, _extends({
      x: toPoint.x,
      y: toPoint.y
    }, Object(_utils_positionLabel__WEBPACK_IMPORTED_MODULE_8__["default"])(labelPosition, labelOffset), {
      label: label
    })));
  };

  return HorizontalReferenceLine;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);

HorizontalReferenceLine.propTypes = propTypes;
HorizontalReferenceLine.defaultProps = defaultProps;
HorizontalReferenceLine.displayName = 'ReferenceLine';
/* harmony default export */ __webpack_exports__["default"] = (HorizontalReferenceLine);

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/esm/annotation/Label.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/esm/annotation/Label.js ***!
  \*****************************************************************/
/*! exports provided: propTypes, defaultProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-ui/theme */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/index.js");
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_ui_theme__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var propTypes = {
  anchor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['start', 'middle', 'end']),
  dominantBaseline: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  dx: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  dy: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  paintOrder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  x: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
};
var defaultProps = {
  anchor: 'middle',
  dominantBaseline: 'middle',
  dx: 0,
  dy: 0,
  fill: _data_ui_theme__WEBPACK_IMPORTED_MODULE_2__["color"].text,
  label: null,
  paintOrder: 'stroke',
  stroke: '#fff',
  strokeWidth: 2,
  x: 0,
  y: 0
};

function Label(_ref) {
  var anchor = _ref.anchor,
      dominantBaseline = _ref.dominantBaseline,
      dx = _ref.dx,
      dy = _ref.dy,
      fill = _ref.fill,
      label = _ref.label,
      paintOrder = _ref.paintOrder,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      x = _ref.x,
      y = _ref.y,
      rest = _objectWithoutPropertiesLoose(_ref, ["anchor", "dominantBaseline", "dx", "dy", "fill", "label", "paintOrder", "stroke", "strokeWidth", "x", "y"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", _extends({
    x: x,
    y: y,
    dx: dx,
    dy: dy,
    fill: fill,
    dominantBaseline: dominantBaseline,
    paintOrder: paintOrder,
    stroke: stroke,
    strokeWidth: strokeWidth,
    textAnchor: anchor
  }, rest), label);
}

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
Label.displayName = 'Label';
/* harmony default export */ __webpack_exports__["default"] = (Label);

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/esm/annotation/VerticalReferenceLine.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/esm/annotation/VerticalReferenceLine.js ***!
  \*********************************************************************************/
/*! exports provided: propTypes, defaultProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_group_build_Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/group/build/Group */ "./node_modules/@data-ui/sparkline/node_modules/@vx/group/build/Group.js");
/* harmony import */ var _vx_group_build_Group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vx_group_build_Group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vx_shape_build_shapes_Line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/shape/build/shapes/Line */ "./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/Line.js");
/* harmony import */ var _vx_shape_build_shapes_Line__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vx_shape_build_shapes_Line__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vx_point_build_Point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/point/build/Point */ "./node_modules/@data-ui/sparkline/node_modules/@vx/point/build/Point.js");
/* harmony import */ var _vx_point_build_Point__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vx_point_build_Point__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-ui/theme */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/index.js");
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_ui_theme__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Label */ "./node_modules/@data-ui/sparkline/esm/annotation/Label.js");
/* harmony import */ var _utils_positionLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/positionLabel */ "./node_modules/@data-ui/sparkline/esm/utils/positionLabel.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint complexity: ['error', 12] */








var ZERO_DELTA = 0.00001;
var propTypes = {
  reference: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['first', 'last', 'min', 'max'])]),
  LabelComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element,
  labelOffset: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['top', 'right', 'bottom', 'left']),
  renderLabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeLinecap: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['butt', 'square', 'round', 'inherit']),
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  // all likely passed by the parent chart
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object])),
  getX: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getY: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
var defaultProps = {
  data: [],
  getX: null,
  getY: null,
  LabelComponent: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Label__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, _data_ui_theme__WEBPACK_IMPORTED_MODULE_5__["svgLabel"].baseTickLabel, {
    stroke: "#fff"
  })),
  labelOffset: 10,
  labelPosition: 'top',
  reference: 'last',
  renderLabel: null,
  stroke: _data_ui_theme__WEBPACK_IMPORTED_MODULE_5__["color"].darkGray,
  strokeDasharray: null,
  strokeLinecap: 'round',
  strokeWidth: 2,
  xScale: null,
  yScale: null
};

var VerticalReferenceLine =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(VerticalReferenceLine, _React$PureComponent);

  function VerticalReferenceLine() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = VerticalReferenceLine.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        data = _this$props.data,
        getX = _this$props.getX,
        getY = _this$props.getY,
        LabelComponent = _this$props.LabelComponent,
        labelOffset = _this$props.labelOffset,
        labelPosition = _this$props.labelPosition,
        reference = _this$props.reference,
        renderLabel = _this$props.renderLabel,
        stroke = _this$props.stroke,
        strokeDasharray = _this$props.strokeDasharray,
        strokeLinecap = _this$props.strokeLinecap,
        strokeWidth = _this$props.strokeWidth,
        xScale = _this$props.xScale,
        yScale = _this$props.yScale;
    if (!xScale || !yScale || !getY || !getX || !data.length) return null;

    var _yScale$range = yScale.range(),
        y1 = _yScale$range[0],
        y0 = _yScale$range[1];

    var _yScale$domain = yScale.domain(),
        yMin = _yScale$domain[0],
        yMax = _yScale$domain[1]; // use a number if passed, else find the index based on the ref type


    var index = reference;

    if (typeof reference !== 'number') {
      index = data.findIndex(function (d, i) {
        return reference === 'first' && i === 0 || reference === 'last' && i === data.length - 1 || reference === 'min' && Math.abs(getY(d) - yMin) < ZERO_DELTA || reference === 'max' && Math.abs(getY(d) - yMax) < ZERO_DELTA;
      });
    }

    var datum = data[index]; // use passed value if no datum, this enables custom x values

    var refNumber = datum ? getX(datum) : index;
    var scaledRef = xScale(refNumber);
    var fromPoint = new _vx_point_build_Point__WEBPACK_IMPORTED_MODULE_4___default.a({
      x: scaledRef,
      y: y1
    });
    var toPoint = new _vx_point_build_Point__WEBPACK_IMPORTED_MODULE_4___default.a({
      x: scaledRef,
      y: y0
    });
    var label = renderLabel && renderLabel(datum && getY(datum) || refNumber);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_group_build_Group__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {
        pointerEvents: 'none'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_shape_build_shapes_Line__WEBPACK_IMPORTED_MODULE_3___default.a, {
      from: fromPoint,
      to: toPoint,
      stroke: stroke,
      strokeDasharray: strokeDasharray,
      strokeLinecap: strokeLinecap,
      strokeWidth: strokeWidth,
      vectorEffect: "non-scaling-stroke"
    }), label && react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(LabelComponent, _extends({
      x: toPoint.x,
      y: toPoint.y
    }, Object(_utils_positionLabel__WEBPACK_IMPORTED_MODULE_7__["default"])(labelPosition, labelOffset), {
      label: label
    })));
  };

  return VerticalReferenceLine;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);

VerticalReferenceLine.propTypes = propTypes;
VerticalReferenceLine.defaultProps = defaultProps;
VerticalReferenceLine.displayName = 'VerticalReferenceLine';
/* harmony default export */ __webpack_exports__["default"] = (VerticalReferenceLine);

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/esm/chart/Sparkline.js":
/*!****************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/esm/chart/Sparkline.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _vx_group_build_Group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/group/build/Group */ "./node_modules/@data-ui/sparkline/node_modules/@vx/group/build/Group.js");
/* harmony import */ var _vx_group_build_Group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vx_group_build_Group__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vx_scale_build_scales_linear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/scale/build/scales/linear */ "./node_modules/@data-ui/sparkline/node_modules/@vx/scale/build/scales/linear.js");
/* harmony import */ var _vx_scale_build_scales_linear__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vx_scale_build_scales_linear__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _series_BarSeries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../series/BarSeries */ "./node_modules/@data-ui/sparkline/esm/series/BarSeries.js");
/* harmony import */ var _utils_componentIsX__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/componentIsX */ "./node_modules/@data-ui/sparkline/esm/utils/componentIsX.js");
/* harmony import */ var _utils_defined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/defined */ "./node_modules/@data-ui/sparkline/esm/utils/defined.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint react/no-unused-prop-types: 0 */








var propTypes = {
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  // number or objects (with accessors)
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object])),
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    right: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
  }),
  max: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  min: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  preserveAspectRatio: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  styles: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  // eslint-disable-line react/forbid-prop-types
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  valueAccessor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  viewBox: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
var defaultProps = {
  className: null,
  data: [],
  margin: {
    top: 16,
    right: 16,
    bottom: 16,
    left: 16
  },
  max: null,
  min: null,
  onMouseMove: null,
  onMouseLeave: null,
  preserveAspectRatio: null,
  styles: null,
  valueAccessor: function valueAccessor(d) {
    return d;
  },
  viewBox: null
};

var getX = function getX(d) {
  return d.i;
};

var getY = function getY(d) {
  return d.y;
};

var parsedDatumThunk = function parsedDatumThunk(valueAccessor) {
  return function (d, i) {
    var y = valueAccessor(d);
    return _extends({
      i: i,
      y: y,
      id: y
    }, d);
  };
};

var Sparkline =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Sparkline, _React$PureComponent);

  function Sparkline(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this.getMaxY = _this.getMaxY.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = _this.getStateFromProps(props);
    return _this;
  }

  var _proto = Sparkline.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if ([// recompute scales if any of the following change
    'data', 'height', 'margin', 'max', 'min', 'valueAccessor', 'width'].some(function (prop) {
      return _this2.props[prop] !== nextProps[prop];
    }) // eslint-disable-line react/destructuring-assignment
    ) {
        this.setState(this.getStateFromProps(nextProps));
      }
  };

  _proto.getStateFromProps = function getStateFromProps(props) {
    var dimensions = this.getDimmensions(props);
    var scales = this.getScales(props, dimensions);
    return _extends({}, dimensions, scales);
  };

  _proto.getScales = function getScales(props, _ref) {
    var innerHeight = _ref.innerHeight,
        innerWidth = _ref.innerWidth;

    var _ref2 = props || this.props,
        rawData = _ref2.data,
        min = _ref2.min,
        max = _ref2.max,
        valueAccessor = _ref2.valueAccessor;

    var data = rawData.map(parsedDatumThunk(valueAccessor));
    var yExtent = Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["extent"])(data, getY);
    var xScale = _vx_scale_build_scales_linear__WEBPACK_IMPORTED_MODULE_4___default()({
      domain: [0, data.length - 1],
      range: [0, innerWidth]
    });
    var yScale = _vx_scale_build_scales_linear__WEBPACK_IMPORTED_MODULE_4___default()({
      domain: [Object(_utils_defined__WEBPACK_IMPORTED_MODULE_7__["default"])(min) ? min : yExtent[0], Object(_utils_defined__WEBPACK_IMPORTED_MODULE_7__["default"])(max) ? max : yExtent[1]],
      range: [innerHeight, 0]
    });
    return {
      xScale: xScale,
      yScale: yScale,
      data: data
    };
  };

  _proto.getMaxY = function getMaxY() {
    var yScale = this.state.yScale;
    return Math.max.apply(Math, yScale.domain());
  };

  _proto.getDimmensions = function getDimmensions(props) {
    var _ref3 = props || this.props,
        margin = _ref3.margin,
        width = _ref3.width,
        height = _ref3.height;

    var completeMargin = _extends({}, defaultProps.margin, margin);

    return {
      margin: completeMargin,
      innerHeight: height - completeMargin.top - completeMargin.bottom,
      innerWidth: width - completeMargin.left - completeMargin.right
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        ariaLabel = _this$props.ariaLabel,
        children = _this$props.children,
        className = _this$props.className,
        height = _this$props.height,
        onMouseMove = _this$props.onMouseMove,
        onMouseLeave = _this$props.onMouseLeave,
        preserveAspectRatio = _this$props.preserveAspectRatio,
        styles = _this$props.styles,
        width = _this$props.width,
        viewBox = _this$props.viewBox;
    var _this$state = this.state,
        data = _this$state.data,
        margin = _this$state.margin,
        xScale = _this$state.xScale,
        yScale = _this$state.yScale;
    var seriesProps = {
      xScale: xScale,
      yScale: yScale,
      data: data,
      getX: getX,
      getY: getY,
      margin: margin
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      "aria-label": ariaLabel,
      className: className,
      height: height,
      role: "img",
      preserveAspectRatio: preserveAspectRatio,
      style: styles,
      width: width,
      viewBox: viewBox
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_group_build_Group__WEBPACK_IMPORTED_MODULE_3___default.a, {
      left: margin.left,
      top: margin.top
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children, function (Child) {
      var name = Object(_utils_componentIsX__WEBPACK_IMPORTED_MODULE_6__["componentName"])(Child);

      if (Object(_utils_componentIsX__WEBPACK_IMPORTED_MODULE_6__["isSeries"])(name) || Object(_utils_componentIsX__WEBPACK_IMPORTED_MODULE_6__["isReferenceLine"])(name) || Object(_utils_componentIsX__WEBPACK_IMPORTED_MODULE_6__["isBandLine"])(name)) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(Child, seriesProps);
      }

      return Child;
    }), (onMouseMove || onMouseLeave) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_series_BarSeries__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
      fill: "transparent",
      fillOpacity: 0,
      stroke: "transparent",
      strokeWidth: 1
    }, seriesProps, {
      getY: this.getMaxY,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseLeave
    }))));
  };

  return Sparkline;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);

Sparkline.propTypes = propTypes;
Sparkline.defaultProps = defaultProps;
Sparkline.displayName = 'Sparkline';
/* harmony default export */ __webpack_exports__["default"] = (Sparkline);

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/esm/series/BarSeries.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/esm/series/BarSeries.js ***!
  \*****************************************************************/
/*! exports provided: propTypes, defaultProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_group_build_Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/group/build/Group */ "./node_modules/@data-ui/sparkline/node_modules/@vx/group/build/Group.js");
/* harmony import */ var _vx_group_build_Group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vx_group_build_Group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vx_shape_build_shapes_Bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/shape/build/shapes/Bar */ "./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/Bar.js");
/* harmony import */ var _vx_shape_build_shapes_Bar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vx_shape_build_shapes_Bar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-ui/theme */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/index.js");
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_ui_theme__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _annotation_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../annotation/Label */ "./node_modules/@data-ui/sparkline/esm/annotation/Label.js");
/* harmony import */ var _utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/callOrValue */ "./node_modules/@data-ui/sparkline/esm/utils/callOrValue.js");
/* harmony import */ var _utils_positionLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/positionLabel */ "./node_modules/@data-ui/sparkline/esm/utils/positionLabel.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var propTypes = {
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  fillOpacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  LabelComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element,
  labelOffset: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['top', 'right', 'bottom', 'left'])]),
  onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  renderLabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  // (val, i) => node
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  // all likely passed by the parent chart
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object])),
  getX: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getY: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
var defaultProps = {
  data: [],
  fill: _data_ui_theme__WEBPACK_IMPORTED_MODULE_4__["color"].default,
  fillOpacity: 0.7,
  getX: null,
  getY: null,
  labelOffset: 8,
  LabelComponent: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_annotation_Label__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, _data_ui_theme__WEBPACK_IMPORTED_MODULE_4__["svgLabel"].baseTickLabel, {
    stroke: "#fff"
  })),
  labelPosition: 'top',
  onMouseMove: null,
  onMouseLeave: null,
  renderLabel: null,
  stroke: '#fff',
  strokeWidth: 1,
  xScale: null,
  yScale: null
};

var BarSeries =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(BarSeries, _React$PureComponent);

  function BarSeries() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = BarSeries.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        data = _this$props.data,
        getX = _this$props.getX,
        getY = _this$props.getY,
        fill = _this$props.fill,
        fillOpacity = _this$props.fillOpacity,
        labelOffset = _this$props.labelOffset,
        LabelComponent = _this$props.LabelComponent,
        labelPosition = _this$props.labelPosition,
        onMouseMove = _this$props.onMouseMove,
        onMouseLeave = _this$props.onMouseLeave,
        renderLabel = _this$props.renderLabel,
        stroke = _this$props.stroke,
        strokeWidth = _this$props.strokeWidth,
        xScale = _this$props.xScale,
        yScale = _this$props.yScale;
    if (!xScale || !yScale || !getX || !getY || !data.length) return null;
    var barWidth = Math.max(1, Math.max.apply(Math, xScale.range()) / data.length - 1);
    var maxBarHeight = Math.max.apply(Math, yScale.range());
    var labels = []; // render labels as top-most layer

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_group_build_Group__WEBPACK_IMPORTED_MODULE_2___default.a, null, data.map(function (d, i) {
      var yVal = getY(d);
      var x = xScale(getX(d));
      var y = yScale(yVal);
      var key = "bar-" + x + "-" + y + "-" + i;
      var label = renderLabel && renderLabel(yVal, i);
      var fillValue = Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__["default"])(d.fill || fill, yVal, i);

      if (label) {
        labels.push(_extends({
          key: key,
          label: label,
          x: x,
          y: y
        }, Object(_utils_positionLabel__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__["default"])(labelPosition, yVal, i), labelOffset)));
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_shape_build_shapes_Bar__WEBPACK_IMPORTED_MODULE_3___default.a, {
        key: key,
        x: x - barWidth / 2,
        y: y,
        width: barWidth,
        height: maxBarHeight - y,
        fill: fillValue,
        fillOpacity: Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__["default"])(typeof d.fillOpacity === 'undefined' ? fillOpacity : d.fillOpacity, yVal, i),
        stroke: Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__["default"])(d.stroke || stroke, yVal, i),
        strokeWidth: Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__["default"])(d.strokeWidth || strokeWidth, yVal, i),
        onMouseMove: onMouseMove && function () {
          return function (event) {
            onMouseMove({
              event: event,
              data: data,
              datum: d,
              index: i,
              color: fillValue
            });
          };
        },
        onMouseLeave: onMouseLeave && function () {
          return onMouseLeave;
        }
      });
    }), labels.map(function (labelProps) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(LabelComponent, labelProps);
    }));
  };

  return BarSeries;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);

BarSeries.propTypes = propTypes;
BarSeries.defaultProps = defaultProps;
BarSeries.displayName = 'BarSeries';
/* harmony default export */ __webpack_exports__["default"] = (BarSeries);

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/esm/series/LineSeries.js":
/*!******************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/esm/series/LineSeries.js ***!
  \******************************************************************/
/*! exports provided: propTypes, defaultProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_curve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/curve */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var _vx_group_build_Group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/group/build/Group */ "./node_modules/@data-ui/sparkline/node_modules/@vx/group/build/Group.js");
/* harmony import */ var _vx_group_build_Group__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vx_group_build_Group__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vx_shape_build_shapes_LinePath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/shape/build/shapes/LinePath */ "./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/LinePath.js");
/* harmony import */ var _vx_shape_build_shapes_LinePath__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vx_shape_build_shapes_LinePath__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vx_shape_build_shapes_AreaClosed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/shape/build/shapes/AreaClosed */ "./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/AreaClosed.js");
/* harmony import */ var _vx_shape_build_shapes_AreaClosed__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_vx_shape_build_shapes_AreaClosed__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data-ui/theme */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/index.js");
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_ui_theme__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_defined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/defined */ "./node_modules/@data-ui/sparkline/esm/utils/defined.js");
/* harmony import */ var _utils_findClosestDatum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/findClosestDatum */ "./node_modules/@data-ui/sparkline/esm/utils/findClosestDatum.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }










var propTypes = {
  curve: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['linear', 'cardinal', 'basis', 'monotoneX']),
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  fillOpacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  showArea: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showLine: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeLinecap: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['butt', 'square', 'round', 'inherit']),
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  // all likely passed by the parent chart
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object])),
  getX: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getY: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    right: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
  })
};
var defaultProps = {
  curve: 'monotoneX',
  data: [],
  fill: _data_ui_theme__WEBPACK_IMPORTED_MODULE_6__["color"].default,
  fillOpacity: 0.3,
  getX: null,
  getY: null,
  onMouseMove: null,
  onMouseLeave: null,
  showArea: false,
  showLine: true,
  stroke: _data_ui_theme__WEBPACK_IMPORTED_MODULE_6__["color"].default,
  strokeWidth: 2,
  strokeDasharray: null,
  strokeLinecap: 'round',
  xScale: null,
  yScale: null,
  margin: {}
};
var CURVE_LOOKUP = {
  linear: _vx_curve__WEBPACK_IMPORTED_MODULE_2__["curveLinear"],
  basis: _vx_curve__WEBPACK_IMPORTED_MODULE_2__["curveBasis"],
  cardinal: _vx_curve__WEBPACK_IMPORTED_MODULE_2__["curveCardinal"],
  monotoneX: _vx_curve__WEBPACK_IMPORTED_MODULE_2__["curveMonotoneX"]
};

var LineSeries =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(LineSeries, _React$PureComponent);

  function LineSeries() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = LineSeries.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        curve = _this$props.curve,
        data = _this$props.data,
        getX = _this$props.getX,
        getY = _this$props.getY,
        fill = _this$props.fill,
        fillOpacity = _this$props.fillOpacity,
        onMouseMove = _this$props.onMouseMove,
        onMouseLeave = _this$props.onMouseLeave,
        showArea = _this$props.showArea,
        showLine = _this$props.showLine,
        stroke = _this$props.stroke,
        strokeWidth = _this$props.strokeWidth,
        strokeDasharray = _this$props.strokeDasharray,
        strokeLinecap = _this$props.strokeLinecap,
        xScale = _this$props.xScale,
        yScale = _this$props.yScale,
        margin = _this$props.margin;
    if (!xScale || !yScale || !getX || !getY || !data.length) return null;
    var curveFunc = CURVE_LOOKUP[curve];
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_group_build_Group__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onMouseMove: onMouseMove && function (event) {
        var _findClosestDatum = Object(_utils_findClosestDatum__WEBPACK_IMPORTED_MODULE_8__["default"])({
          data: data,
          getX: getX,
          event: event,
          xScale: xScale,
          marginLeft: margin.left
        }),
            datum = _findClosestDatum.datum,
            index = _findClosestDatum.index;

        onMouseMove({
          event: event,
          data: data,
          datum: datum,
          index: index,
          color: fill
        });
      },
      onMouseLeave: onMouseLeave
    }, showArea && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_shape_build_shapes_AreaClosed__WEBPACK_IMPORTED_MODULE_5___default.a, {
      data: data,
      x: getX,
      y: getY,
      xScale: xScale,
      yScale: yScale,
      fill: fill,
      fillOpacity: fillOpacity,
      stroke: "transparent",
      strokeWidth: strokeWidth,
      curve: curveFunc,
      defined: function defined(d) {
        return Object(_utils_defined__WEBPACK_IMPORTED_MODULE_7__["default"])(getY(d));
      }
    }), showLine && strokeWidth > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_shape_build_shapes_LinePath__WEBPACK_IMPORTED_MODULE_4___default.a, {
      data: data,
      x: getX,
      y: getY,
      xScale: xScale,
      yScale: yScale,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      strokeLinecap: strokeLinecap,
      curve: curveFunc,
      glyph: null,
      defined: function defined(d) {
        return Object(_utils_defined__WEBPACK_IMPORTED_MODULE_7__["default"])(getY(d));
      }
    }));
  };

  return LineSeries;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);

LineSeries.propTypes = propTypes;
LineSeries.defaultProps = defaultProps;
LineSeries.displayName = 'LineSeries';
/* harmony default export */ __webpack_exports__["default"] = (LineSeries);

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/esm/series/PointSeries.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/esm/series/PointSeries.js ***!
  \*******************************************************************/
/*! exports provided: propTypes, defaultProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _vx_glyph_build_glyphs_Dot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/glyph/build/glyphs/Dot */ "./node_modules/@data-ui/sparkline/node_modules/@vx/glyph/build/glyphs/Dot.js");
/* harmony import */ var _vx_glyph_build_glyphs_Dot__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vx_glyph_build_glyphs_Dot__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _vx_group_build_Group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/group/build/Group */ "./node_modules/@data-ui/sparkline/node_modules/@vx/group/build/Group.js");
/* harmony import */ var _vx_group_build_Group__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_vx_group_build_Group__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-ui/theme */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/index.js");
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_ui_theme__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _annotation_Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../annotation/Label */ "./node_modules/@data-ui/sparkline/esm/annotation/Label.js");
/* harmony import */ var _utils_callOrValue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/callOrValue */ "./node_modules/@data-ui/sparkline/esm/utils/callOrValue.js");
/* harmony import */ var _utils_defined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/defined */ "./node_modules/@data-ui/sparkline/esm/utils/defined.js");
/* harmony import */ var _utils_positionLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/positionLabel */ "./node_modules/@data-ui/sparkline/esm/utils/positionLabel.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint complexity: 0 */










var propTypes = {
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  fillOpacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  LabelComponent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.element,
  labelOffset: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  labelPosition: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['auto', 'top', 'right', 'bottom', 'left'])]),
  onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  points: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, // index
  prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['all', 'min', 'max', 'first', 'last'])])),
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  renderLabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  // (d, i) => node
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  // all likely passed by the parent chart
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object])),
  getX: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  getY: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  xScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  yScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
var defaultProps = {
  data: [],
  fill: _data_ui_theme__WEBPACK_IMPORTED_MODULE_5__["color"].default,
  fillOpacity: 1,
  LabelComponent: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_annotation_Label__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, _data_ui_theme__WEBPACK_IMPORTED_MODULE_5__["svgLabel"].baseTickLabel, {
    stroke: "#fff"
  })),
  labelOffset: 12,
  labelPosition: 'auto',
  onMouseMove: null,
  onMouseLeave: null,
  getX: null,
  getY: null,
  points: ['min', 'max'],
  renderLabel: null,
  size: 4,
  stroke: '#fff',
  strokeWidth: 2,
  xScale: null,
  yScale: null
};
var ZERO_DELTA = 0.00001;

var PointSeries =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(PointSeries, _React$Component);

  function PointSeries() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PointSeries.prototype;

  // we define a custom handler because the points prop may be impractible to cache
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var _this = this;

    var nonPointsAreEqual = Object.keys(propTypes).every( // eslint-disable-next-line react/destructuring-assignment
    function (prop) {
      return prop === 'points' || _this.props[prop] === nextProps[prop];
    });
    var points = this.props.points;
    var pointsAreEqual = nextProps.points.length === points.length && nextProps.points.every(function (point) {
      return points.indexOf(point) > -1;
    });
    return !(pointsAreEqual && nonPointsAreEqual);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        data = _this$props.data,
        getX = _this$props.getX,
        getY = _this$props.getY,
        fill = _this$props.fill,
        fillOpacity = _this$props.fillOpacity,
        LabelComponent = _this$props.LabelComponent,
        labelOffset = _this$props.labelOffset,
        labelPosition = _this$props.labelPosition,
        onMouseMove = _this$props.onMouseMove,
        onMouseLeave = _this$props.onMouseLeave,
        points = _this$props.points,
        renderLabel = _this$props.renderLabel,
        size = _this$props.size,
        stroke = _this$props.stroke,
        strokeWidth = _this$props.strokeWidth,
        xScale = _this$props.xScale,
        yScale = _this$props.yScale;
    if (!xScale || !yScale || !getX || !getY || !data.length) return null;
    var showAll = points.includes('all');
    var showMin = points.includes('min');
    var showMax = points.includes('max');
    var showFirst = points.includes('first');
    var showLast = points.includes('last');

    var _extent = Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["extent"])(data, getY),
        minY = _extent[0],
        maxY = _extent[1];

    var lastIndex = data.length - 1;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_group_build_Group__WEBPACK_IMPORTED_MODULE_4___default.a, null, data.map(function (d, i) {
      if (points.indexOf(i) > -1 || showAll || showFirst && i === 0 || showLast && i === lastIndex || showMin && Math.abs(getY(d) - minY) < ZERO_DELTA || showMax && Math.abs(getY(d) - maxY) < ZERO_DELTA) {
        var yVal = getY(d);
        var cx = xScale(getX(d));
        var cy = yScale(yVal);
        var key = cx + "-" + cy + "-" + i;
        var label = renderLabel && renderLabel(yVal, i);
        var prevCy = data[i - 1] ? yScale(getY(data[i - 1])) : null;
        var nextCy = data[i + 1] ? yScale(getY(data[i + 1])) : null;
        var fillValue = Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_7__["default"])(d.fill || fill, yVal, i); // position label above a point if either of the surrounding points are lower

        var autoLabelPosition = prevCy !== null && prevCy > cy || nextCy !== null && nextCy > cy ? 'top' : 'bottom';
        return Object(_utils_defined__WEBPACK_IMPORTED_MODULE_8__["default"])(cx) && Object(_utils_defined__WEBPACK_IMPORTED_MODULE_8__["default"])(cy) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_glyph_build_glyphs_Dot__WEBPACK_IMPORTED_MODULE_3___default.a, {
          key: key,
          cx: cx,
          cy: cy,
          r: Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_7__["default"])(d.size || size, yVal, i),
          fill: fillValue,
          fillOpacity: Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_7__["default"])(d.fillOpacity || fillOpacity, yVal, i),
          stroke: Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_7__["default"])(d.stroke || stroke, yVal, i),
          strokeWidth: Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_7__["default"])(d.strokeWidth || strokeWidth, yVal, i),
          onMouseMove: onMouseMove && function (event) {
            onMouseMove({
              event: event,
              data: data,
              datum: d,
              index: i,
              color: fillValue
            });
          },
          onMouseLeave: onMouseLeave
        }, label && react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(LabelComponent, _extends({
          x: cx,
          y: cy
        }, Object(_utils_positionLabel__WEBPACK_IMPORTED_MODULE_9__["default"])(labelPosition === 'auto' ? autoLabelPosition : Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_7__["default"])(labelPosition, yVal, i), labelOffset), {
          label: label
        })));
      }

      return null;
    }));
  };

  return PointSeries;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

PointSeries.propTypes = propTypes;
PointSeries.defaultProps = defaultProps;
PointSeries.displayName = 'PointSeries';
/* harmony default export */ __webpack_exports__["default"] = (PointSeries);

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/esm/utils/callOrValue.js":
/*!******************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/esm/utils/callOrValue.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return callOrValue; });
function callOrValue(maybeFn) {
  if (typeof maybeFn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return maybeFn.apply(void 0, args);
  }

  return maybeFn;
}

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/esm/utils/componentIsX.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/esm/utils/componentIsX.js ***!
  \*******************************************************************/
/*! exports provided: componentName, isSeries, isReferenceLine, isBandLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentName", function() { return componentName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSeries", function() { return isSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReferenceLine", function() { return isReferenceLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBandLine", function() { return isBandLine; });
function componentName(component) {
  if (component && component.type) {
    return component.type.displayName || component.type.name || 'Component';
  }

  return '';
}
function isSeries(name) {
  return /series/gi.test(name);
}
function isReferenceLine(name) {
  return /referenceline/gi.test(name);
}
function isBandLine(name) {
  return /bandline/gi.test(name);
}

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/esm/utils/defined.js":
/*!**************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/esm/utils/defined.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// eslint-disable-next-line no-restricted-globals
var defined = function defined(d) {
  return typeof d !== 'undefined' && d !== null && !isNaN(d);
};

/* harmony default export */ __webpack_exports__["default"] = (defined);

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/esm/utils/findClosestDatum.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/esm/utils/findClosestDatum.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return findClosestDatum; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _vx_event_build_localPoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vx/event/build/localPoint */ "./node_modules/@data-ui/sparkline/node_modules/@vx/event/build/localPoint.js");
/* harmony import */ var _vx_event_build_localPoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vx_event_build_localPoint__WEBPACK_IMPORTED_MODULE_1__);


function findClosestDatum(_ref) {
  var data = _ref.data,
      getX = _ref.getX,
      xScale = _ref.xScale,
      event = _ref.event,
      _ref$marginLeft = _ref.marginLeft,
      marginLeft = _ref$marginLeft === void 0 ? 0 : _ref$marginLeft;
  if (!event || !event.target || !event.target.ownerSVGElement) return {};
  var bisect = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisector"])(getX).right;
  var svgCoords = _vx_event_build_localPoint__WEBPACK_IMPORTED_MODULE_1___default()(event.target.ownerSVGElement, event);
  var x = svgCoords.x - marginLeft;
  var dataX = xScale.invert(x);
  var index = bisect(data, dataX, 1);
  var d0 = data[index - 1];
  var d1 = data[index];
  var d = !d0 || Math.abs(dataX - getX(d0)) > Math.abs(dataX - getX(d1)) ? d1 : d0;
  return {
    datum: d,
    index: d === d0 ? index - 1 : index
  };
}

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/esm/utils/positionLabel.js":
/*!********************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/esm/utils/positionLabel.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return positionLabel; });
var DEFAULT_LABEL_OFFSET = 8;
function positionLabel(orientation, labelOffset) {
  if (labelOffset === void 0) {
    labelOffset = DEFAULT_LABEL_OFFSET;
  }

  if (orientation === 'top') {
    return {
      textAnchor: 'middle',
      dy: -Math.abs(labelOffset),
      dx: 0
    };
  } else if (orientation === 'right') {
    return {
      textAnchor: 'start',
      dy: 0,
      dx: Math.abs(labelOffset)
    };
  } else if (orientation === 'bottom') {
    return {
      textAnchor: 'middle',
      dy: Math.abs(labelOffset),
      dx: 0
    };
  } else if (orientation === 'left') {
    return {
      textAnchor: 'end',
      dy: 0,
      dx: -Math.abs(labelOffset)
    };
  }

  return orientation;
}

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/chartTheme.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/chartTheme.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.yTickStyles = exports.xTickStyles = exports.yAxisStyles = exports.xAxisStyles = exports.gridStyles = exports.labelStyles = exports.colors = undefined;

var _color = __webpack_require__(/*! ./color */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/color.js");

var _color2 = _interopRequireDefault(_color);

var _font = __webpack_require__(/*! ./font */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/font.js");

var _font2 = _interopRequireDefault(_font);

var _svgLabel = __webpack_require__(/*! ./svgLabel */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/svgLabel.js");

var _size = __webpack_require__(/*! ./size */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/size.js");

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var colors = exports.colors = _color2['default'];

var labelStyles = exports.labelStyles = Object.assign({}, _svgLabel.baseLabel, _font2['default'].light);

var gridStyles = exports.gridStyles = {
  stroke: colors.grid,
  strokeWidth: 1
};

var xAxisStyles = exports.xAxisStyles = {
  stroke: colors.gridDark,
  strokeWidth: 2,
  label: {
    bottom: Object.assign({}, _svgLabel.baseLabel),
    top: Object.assign({}, _svgLabel.baseLabel)
  }
};

var yAxisStyles = exports.yAxisStyles = {
  stroke: colors.grid,
  strokeWidth: 1,
  label: {
    left: Object.assign({}, _svgLabel.baseLabel),
    right: Object.assign({}, _svgLabel.baseLabel)
  }
};

var xTickStyles = exports.xTickStyles = {
  stroke: colors.grid,
  length: 1 * _size2['default'],
  label: {
    bottom: Object.assign({}, _svgLabel.tickLabels.bottom),
    top: Object.assign({}, _svgLabel.tickLabels.top)
  }
};

var yTickStyles = exports.yTickStyles = {
  stroke: colors.grid,
  length: 1 * _size2['default'],
  label: {
    left: Object.assign({}, _svgLabel.tickLabels.left),
    right: Object.assign({}, _svgLabel.tickLabels.right)
  }
};

exports['default'] = {
  colors: colors,
  labelStyles: labelStyles,
  gridStyles: gridStyles,
  xAxisStyles: xAxisStyles,
  xTickStyles: xTickStyles,
  yAxisStyles: yAxisStyles,
  yTickStyles: yTickStyles
};

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/color.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/color.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint max-len: 0 */

// source https://yeun.github.io/open-color/
var allColors = exports.allColors = {
  red: ['#fff5f5', '#ffe3e3', '#ffc9c9', '#ffa8a8', '#ff8787', '#ff6b6b', '#fa5252', '#f03e3e', '#e03131', '#c92a2a'],
  pink: ['#fff0f6', '#ffdeeb', '#fcc2d7', '#faa2c1', '#f783ac', '#f06595', '#e64980', '#d6336c', '#c2255c', '#a61e4d'],
  grape: ['#f8f0fc', '#f3d9fa', '#eebefa', '#e599f7', '#da77f2', '#cc5de8', '#be4bdb', '#ae3ec9', '#9c36b5', '#862e9c'],
  violet: ['#f3f0ff', '#e5dbff', '#d0bfff', '#b197fc', '#9775fa', '#845ef7', '#7950f2', '#7048e8', '#6741d9', '#5f3dc4'],
  indigo: ['#edf2ff', '#dbe4ff', '#bac8ff', '#91a7ff', '#748ffc', '#5c7cfa', '#4c6ef5', '#4263eb', '#3b5bdb', '#364fc7'],
  blue: ['#e8f7ff', '#ccedff', '#a3daff', '#72c3fc', '#4dadf7', '#329af0', '#228ae6', '#1c7cd6', '#1b6ec2', '#1862ab'],
  cyan: ['#e3fafc', '#c5f6fa', '#99e9f2', '#66d9e8', '#3bc9db', '#22b8cf', '#15aabf', '#1098ad', '#0c8599', '#0b7285'],
  teal: ['#e6fcf5', '#c3fae8', '#96f2d7', '#63e6be', '#38d9a9', '#20c997', '#12b886', '#0ca678', '#099268', '#087f5b'],
  green: ['#ebfbee', '#d3f9d8', '#b2f2bb', '#8ce99a', '#69db7c', '#51cf66', '#40c057', '#37b24d', '#2f9e44', '#2b8a3e'],
  lime: ['#f4fce3', '#e9fac8', '#d8f5a2', '#c0eb75', '#a9e34b', '#94d82d', '#82c91e', '#74b816', '#66a80f', '#5c940d'],
  yellow: ['#fff9db', '#fff3bf', '#ffec99', '#ffe066', '#ffd43b', '#fcc419', '#fab005', '#f59f00', '#f08c00', '#e67700'],
  orange: ['#fff4e6', '#ffe8cc', '#ffd8a8', '#ffc078', '#ffa94d', '#ff922b', '#fd7e14', '#f76707', '#e8590c', '#d9480f']
};

var grayColors = exports.grayColors = ['#f8f9fa', '#f1f3f5', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#868e96', '#495057', '#343a40', '#212529'];

var getPaletteForBrightness = exports.getPaletteForBrightness = function getPaletteForBrightness() {
  var brightness = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  var hues = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['cyan', 'yellow', 'pink', 'grape', 'blue', 'lime', 'teal', 'red', 'violet', 'orange', 'indigo', 'green'];

  // sanity check indices
  var index = Math.max(0, Math.min(brightness, allColors.red.length - 1));

  // filter non-sensical hues
  return hues.map(function (hue) {
    return allColors[hue] && allColors[hue][index];
  }).filter(function (val) {
    return val;
  });
};

var primaryHue = 'cyan';

var colorHues = exports.colorHues = Object.keys(allColors).sort();
var textColor = exports.textColor = grayColors[7];

exports['default'] = {
  'default': allColors[primaryHue][5],
  dark: allColors[primaryHue][7],
  light: allColors[primaryHue][3],

  disabled: textColor,
  lightDisabled: grayColors[3],

  text: textColor,
  black: grayColors[9],
  darkGray: grayColors[8],
  lightGray: grayColors[3],

  grid: grayColors[4],
  gridDark: grayColors[8],
  label: textColor,
  tickLabel: textColor,

  grays: grayColors,
  categories: [].concat(_toConsumableArray(getPaletteForBrightness(6)), _toConsumableArray(getPaletteForBrightness(2)))
};

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/font.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/font.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = __webpack_require__(/*! ./color */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/color.js");

var getFont = function getFont(_ref) {
  var fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      _ref$letterSpacing = _ref.letterSpacing,
      letterSpacing = _ref$letterSpacing === undefined ? 0 : _ref$letterSpacing,
      lineHeight = _ref.lineHeight,
      padding = _ref.padding;
  return {
    color: _color.textColor,
    fontFamily: fontFamily,
    fontSize: fontSize,
    letterSpacing: letterSpacing,
    lineHeight: String(lineHeight) + 'px',
    paddingBottom: padding,
    paddingTop: padding
  };
};

var fontFamily = 'BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif';

exports['default'] = {
  fontFamily: fontFamily,

  // weights
  light: {
    fontWeight: 200
  },
  bold: {
    fontWeight: 700
  },

  // size
  tiny: Object.assign({}, getFont({
    fontFamily: fontFamily,
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.4
  })),
  small: Object.assign({}, getFont({
    fontFamily: fontFamily,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4
  })),
  regular: Object.assign({}, getFont({
    fontFamily: fontFamily,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.2
  })),
  large: Object.assign({}, getFont({
    fontFamily: fontFamily,
    fontSize: 18,
    lineHeight: 24,
    spacing: 0
  }))
};

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = __webpack_require__(/*! ./color */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/color.js");

Object.defineProperty(exports, 'color', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_color)['default'];
    }

    return get;
  }()
});
Object.defineProperty(exports, 'allColors', {
  enumerable: true,
  get: function () {
    function get() {
      return _color.allColors;
    }

    return get;
  }()
});
Object.defineProperty(exports, 'getPaletteForBrightness', {
  enumerable: true,
  get: function () {
    function get() {
      return _color.getPaletteForBrightness;
    }

    return get;
  }()
});

var _font = __webpack_require__(/*! ./font */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/font.js");

Object.defineProperty(exports, 'font', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_font)['default'];
    }

    return get;
  }()
});

var _size = __webpack_require__(/*! ./size */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/size.js");

Object.defineProperty(exports, 'unit', {
  enumerable: true,
  get: function () {
    function get() {
      return _size.unit;
    }

    return get;
  }()
});

var _svgFont = __webpack_require__(/*! ./svgFont */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/svgFont.js");

Object.defineProperty(exports, 'svgFont', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_svgFont)['default'];
    }

    return get;
  }()
});

var _svgLabel = __webpack_require__(/*! ./svgLabel */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/svgLabel.js");

Object.defineProperty(exports, 'svgLabel', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_svgLabel)['default'];
    }

    return get;
  }()
});

var _chartTheme = __webpack_require__(/*! ./chartTheme */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/chartTheme.js");

Object.defineProperty(exports, 'chartTheme', {
  enumerable: true,
  get: function () {
    function get() {
      return _interopRequireDefault(_chartTheme)['default'];
    }

    return get;
  }()
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/size.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/size.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint import/prefer-default-export: 0 */
var unit = exports.unit = 8;

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/svgFont.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/svgFont.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = __webpack_require__(/*! ./color */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/color.js");

var getSvgFont = function getSvgFont(_ref) {
  var fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      letterSpacing = _ref.letterSpacing;
  return {
    fill: _color.textColor,
    stroke: 'none',
    fontFamily: fontFamily,
    fontSize: fontSize,
    letterSpacing: letterSpacing
  };
};

var fontFamily = 'BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif';

exports['default'] = {
  fontFamily: fontFamily,

  // weights
  light: {
    fontWeight: 200
  },
  bold: {
    fontWeight: 700
  },

  // alignment
  start: {
    textAnchor: 'start'
  },
  middle: {
    textAnchor: 'middle'
  },
  end: {
    textAnchor: 'end'
  },

  // size
  tiny: Object.assign({}, getSvgFont({
    fontFamily: fontFamily,
    fontSize: 10,
    letterSpacing: 0.4
  })),
  small: Object.assign({}, getSvgFont({
    fontFamily: fontFamily,
    fontSize: 12,
    letterSpacing: 0.4
  })),
  regular: Object.assign({}, getSvgFont({
    fontFamily: fontFamily,
    fontSize: 14,
    letterSpacing: 0.2
  })),
  large: Object.assign({}, getSvgFont({
    fontFamily: fontFamily,
    fontSize: 18,
    spacing: 0
  }))
};

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/svgLabel.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/svgLabel.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tickLabels = exports.baseTickLabel = exports.baseLabel = undefined;

var _svgFont = __webpack_require__(/*! ./svgFont */ "./node_modules/@data-ui/sparkline/node_modules/@data-ui/theme/build/svgFont.js");

var _svgFont2 = _interopRequireDefault(_svgFont);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var baseLabel = exports.baseLabel = Object.assign({}, _svgFont2['default'].small, _svgFont2['default'].bold, _svgFont2['default'].middle, {
  pointerEvents: 'none'
});

var baseTickLabel = exports.baseTickLabel = Object.assign({}, _svgFont2['default'].small, _svgFont2['default'].light, _svgFont2['default'].middle, {
  pointerEvents: 'none'
});

var tickLabels = exports.tickLabels = {
  top: Object.assign({}, baseTickLabel, {
    dy: '-0.25em'
  }),
  right: Object.assign({}, baseTickLabel, _svgFont2['default'].start, {
    dx: '0.25em',
    dy: '0.25em'
  }),
  bottom: Object.assign({}, baseTickLabel, {
    dy: '0.25em'
  }),
  left: Object.assign({}, baseTickLabel, _svgFont2['default'].end, {
    dx: '-0.25em',
    dy: '0.25em'
  })
};

exports['default'] = {
  baseLabel: baseLabel,
  baseTickLabel: baseTickLabel,
  tickLabels: tickLabels
};

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@vx/event/build/localPoint.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@vx/event/build/localPoint.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = localPoint;

var _point = __webpack_require__(/*! @vx/point */ "./node_modules/@data-ui/sparkline/node_modules/@vx/point/dist/vx-point.es.js");

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

/***/ "./node_modules/@data-ui/sparkline/node_modules/@vx/glyph/build/glyphs/Dot.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@vx/glyph/build/glyphs/Dot.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GlyphDot;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _Glyph = __webpack_require__(/*! ./Glyph */ "./node_modules/@data-ui/sparkline/node_modules/@vx/glyph/build/glyphs/Glyph.js");

var _Glyph2 = _interopRequireDefault(_Glyph);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function GlyphDot(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      className = _ref.className,
      children = _ref.children,
      cx = _ref.cx,
      cy = _ref.cy,
      r = _ref.r,
      fill = _ref.fill,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      restProps = _objectWithoutProperties(_ref, ['top', 'left', 'className', 'children', 'cx', 'cy', 'r', 'fill', 'stroke', 'strokeWidth', 'strokeDasharray']);

  return _react2.default.createElement(
    _Glyph2.default,
    { top: top, left: left },
    _react2.default.createElement('circle', _extends({
      className: (0, _classnames2.default)('vx-glyph-dot', className),
      cx: cx,
      cy: cy,
      r: r,
      fill: fill,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray
    }, restProps)),
    children
  );
}

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@vx/glyph/build/glyphs/Glyph.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@vx/glyph/build/glyphs/Glyph.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Glyph;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _group = __webpack_require__(/*! @vx/group */ "./node_modules/@data-ui/sparkline/node_modules/@vx/group/dist/vx-group.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Glyph.propTypes = {
  top: _propTypes2.default.number,
  left: _propTypes2.default.number,
  className: _propTypes2.default.string,
  children: _propTypes2.default.any
};

function Glyph(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      className = _ref.className,
      children = _ref.children;

  return _react2.default.createElement(
    _group.Group,
    { className: (0, _classnames2.default)('vx-glyph', className), top: top, left: left },
    children
  );
}

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@vx/group/build/Group.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@vx/group/build/Group.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Group;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Group(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      transform = _ref.transform,
      className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ['top', 'left', 'transform', 'className', 'children']);

  return _react2.default.createElement(
    'g',
    _extends({
      className: (0, _classnames2.default)('vx-group', className),
      transform: transform || 'translate(' + left + ', ' + top + ')'
    }, restProps),
    children
  );
}

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@vx/group/dist/vx-group.es.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@vx/group/dist/vx-group.es.js ***!
  \************************************************************************************/
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

/***/ "./node_modules/@data-ui/sparkline/node_modules/@vx/point/build/Point.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@vx/point/build/Point.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
  function Point(_ref) {
    var _ref$x = _ref.x,
        x = _ref$x === undefined ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === undefined ? 0 : _ref$y;

    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: "value",
    value: function value() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.x, this.y];
    }
  }]);

  return Point;
}();

exports.default = Point;

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@vx/point/dist/vx-point.es.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@vx/point/dist/vx-point.es.js ***!
  \************************************************************************************/
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

/***/ "./node_modules/@data-ui/sparkline/node_modules/@vx/scale/build/scales/linear.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@vx/scale/build/scales/linear.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Scale = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");

exports.default = function (_ref) {
  var range = _ref.range,
      rangeRound = _ref.rangeRound,
      domain = _ref.domain,
      _ref$nice = _ref.nice,
      nice = _ref$nice === undefined ? false : _ref$nice,
      _ref$clamp = _ref.clamp,
      clamp = _ref$clamp === undefined ? false : _ref$clamp;

  var scale = (0, _d3Scale.scaleLinear)();
  scale.type = 'linear';

  if (range) scale.range(range);
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);

  return scale;
};

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/AreaClosed.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/AreaClosed.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = AreaClosed;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d3Shape = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");

var _additionalProps = __webpack_require__(/*! ../util/additionalProps */ "./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

AreaClosed.propTypes = {
  innerRef: _propTypes2.default.func
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
      restProps = _objectWithoutProperties(_ref, ['x', 'y', 'y0', 'xScale', 'yScale', 'data', 'defined', 'className', 'strokeDasharray', 'strokeWidth', 'stroke', 'fill', 'curve', 'innerRef']);

  var path = (0, _d3Shape.area)().x(function () {
    return xScale(x.apply(undefined, arguments));
  }).y0(y0 || yScale.range()[0]).y1(function () {
    return yScale(y.apply(undefined, arguments));
  }).defined(defined);
  if (curve) path.curve(curve);
  return _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', _extends({
      ref: innerRef,
      className: (0, _classnames2.default)('vx-area-closed', className),
      d: path(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      fill: fill
    }, (0, _additionalProps2.default)(restProps, data)))
  );
}

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/Bar.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/Bar.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Bar;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _additionalProps = __webpack_require__(/*! ../util/additionalProps */ "./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

Bar.propTypes = {
  innerRef: _propTypes2.default.func
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
      restProps = _objectWithoutProperties(_ref, ['className', 'innerRef', 'data', 'x', 'y', 'width', 'height', 'rx', 'ry', 'fill', 'fillOpacity', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeLinecap', 'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity']);

  return _react2.default.createElement('rect', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-bar', className),
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
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/Line.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/Line.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Line;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _point = __webpack_require__(/*! @vx/point */ "./node_modules/@data-ui/sparkline/node_modules/@vx/point/dist/vx-point.es.js");

var _additionalProps = __webpack_require__(/*! ../util/additionalProps */ "./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

Line.propTypes = {
  innerRef: _propTypes2.default.func
};

function Line(_ref) {
  var _ref$from = _ref.from,
      from = _ref$from === undefined ? new _point.Point({ x: 0, y: 0 }) : _ref$from,
      _ref$to = _ref.to,
      to = _ref$to === undefined ? new _point.Point({ x: 1, y: 1 }) : _ref$to,
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
      restProps = _objectWithoutProperties(_ref, ['from', 'to', 'stroke', 'strokeWidth', 'strokeDasharray', 'transform', 'className', 'data', 'innerRef']);

  return _react2.default.createElement('line', _extends({
    ref: innerRef,
    className: (0, _classnames2.default)('vx-line', className),
    x1: from.x,
    y1: from.y,
    x2: to.x,
    y2: to.y,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    transform: transform
  }, (0, _additionalProps2.default)(restProps, data)));
}

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/LinePath.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/shapes/LinePath.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinePath;

var _curve = __webpack_require__(/*! @vx/curve */ "./node_modules/@vx/curve/dist/vx-curve.es.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _d3Shape = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _additionalProps = __webpack_require__(/*! ../util/additionalProps */ "./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/util/additionalProps.js");

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LinePath.propTypes = {
  innerRef: _propTypes2.default.func,
  xScale: _propTypes2.default.func,
  yScale: _propTypes2.default.func,
  data: _propTypes2.default.array,
  x: _propTypes2.default.func,
  y: _propTypes2.default.func,
  defined: _propTypes2.default.func,
  stroke: _propTypes2.default.string,
  strokeWidth: _propTypes2.default.number,
  glyph: _propTypes2.default.func,
  curve: _propTypes2.default.func
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
      curve = _ref$curve === undefined ? _curve.curveLinear : _ref$curve,
      glyph = _ref.glyph,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutProperties(_ref, ['children', 'data', 'xScale', 'yScale', 'x', 'y', 'defined', 'className', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeDashoffset', 'fill', 'curve', 'glyph', 'innerRef']);

  var path = (0, _d3Shape.line)().x(function () {
    return xScale(x.apply(undefined, arguments));
  }).y(function () {
    return yScale(y.apply(undefined, arguments));
  }).defined(defined).curve(curve);
  if (children) return children({ path: path });
  return _react2.default.createElement(
    'g',
    null,
    _react2.default.createElement('path', _extends({
      ref: innerRef,
      className: (0, _classnames2.default)('vx-linepath', className),
      d: path(data),
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray,
      strokeDashoffset: strokeDashoffset,
      fill: fill
    }, (0, _additionalProps2.default)(restProps, data))),
    glyph && _react2.default.createElement(
      'g',
      { className: 'vx-linepath-glyphs' },
      data.map(glyph)
    )
  );
}

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/util/additionalProps.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/util/additionalProps.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = additionalProps;

var _callOrValue = __webpack_require__(/*! ./callOrValue */ "./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/util/callOrValue.js");

var _callOrValue2 = _interopRequireDefault(_callOrValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function additionalProps(restProps, data) {
  return Object.keys(restProps).reduce(function (ret, cur) {
    ret[cur] = (0, _callOrValue2.default)(restProps[cur], data);
    return ret;
  }, {});
}

/***/ }),

/***/ "./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/util/callOrValue.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@data-ui/sparkline/node_modules/@vx/shape/build/util/callOrValue.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = callOrValue;
function callOrValue(maybeFn, data) {
  if (typeof maybeFn === 'function') {
    return maybeFn(data);
  }
  return maybeFn;
}

/***/ }),

/***/ "./node_modules/@vx/curve/dist/vx-curve.es.js":
/*!****************************************************!*\
  !*** ./node_modules/@vx/curve/dist/vx-curve.es.js ***!
  \****************************************************/
/*! exports provided: curveBasis, curveBasisClosed, curveBasisOpen, curveStep, curveStepAfter, curveStepBefore, curveBundle, curveLinear, curveLinearClosed, curveCardinal, curveCardinalClosed, curveCardinalOpen, curveCatmullRom, curveCatmullRomClosed, curveCatmullRomOpen, curveMonotoneX, curveMonotoneY, curveNatural */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveBasis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveBasisClosed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveBasisOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveStep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveStepAfter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveStepBefore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveBundle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveLinear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveLinearClosed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveCardinal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveCardinalClosed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveCardinalOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveCatmullRom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveCatmullRomClosed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveCatmullRomOpen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveMonotoneX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveMonotoneY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return d3_shape__WEBPACK_IMPORTED_MODULE_0__["curveNatural"]; });




/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/reverse.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/reverse.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.reverse */ "./node_modules/core-js-pure/modules/es.array.reverse.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "./node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').reverse;


/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/sort.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/sort.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.sort */ "./node_modules/core-js-pure/modules/es.array.sort.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "./node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').sort;


/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/values.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/values.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../modules/es.array.iterator */ "./node_modules/core-js-pure/modules/es.array.iterator.js");
var entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ "./node_modules/core-js-pure/internals/entry-virtual.js");

module.exports = entryVirtual('Array').values;


/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/reverse.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/reverse.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var reverse = __webpack_require__(/*! ../array/virtual/reverse */ "./node_modules/core-js-pure/es/array/virtual/reverse.js");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reverse;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.reverse) ? reverse : own;
};


/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/sort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var sort = __webpack_require__(/*! ../array/virtual/sort */ "./node_modules/core-js-pure/es/array/virtual/sort.js");

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.sort;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.sort) ? sort : own;
};


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.reverse.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.reverse.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js-pure/internals/is-array.js");

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.sort.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.sort.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js-pure/internals/export.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js-pure/internals/a-function.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js-pure/internals/to-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js-pure/internals/fails.js");
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js-pure/internals/array-method-is-strict.js");

var test = [];
var nativeSort = test.sort;

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "./node_modules/core-js-pure/stable/array/virtual/values.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/array/virtual/values.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../../es/array/virtual/values */ "./node_modules/core-js-pure/es/array/virtual/values.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/reverse.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/reverse.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/reverse */ "./node_modules/core-js-pure/es/instance/reverse.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/sort.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/sort.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(/*! ../../es/instance/sort */ "./node_modules/core-js-pure/es/instance/sort.js");

module.exports = parent;


/***/ }),

/***/ "./node_modules/core-js-pure/stable/instance/values.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/stable/instance/values.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/web.dom-collections.iterator */ "./node_modules/core-js-pure/modules/web.dom-collections.iterator.js");
var values = __webpack_require__(/*! ../array/virtual/values */ "./node_modules/core-js-pure/stable/array/virtual/values.js");
var classof = __webpack_require__(/*! ../../internals/classof */ "./node_modules/core-js-pure/internals/classof.js");
var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.values;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.values)
    // eslint-disable-next-line no-prototype-builtins
    || DOMIterables.hasOwnProperty(classof(it)) ? values : own;
};


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/visualizations/TimeTable/TimeTable.less":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/less-loader/dist/cjs.js??ref--8-2!./src/visualizations/TimeTable/TimeTable.less ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.time-table {\n  overflow: auto;\n}\n", "", {"version":3,"sources":["G:/workspace/boke-pro/superset-all/superset/superset-frontend/src/visualizations/TimeTable/TimeTable.less","G:/workspace/boke-pro/superset-all/superset/superset-frontend/src/visualizations/TimeTable/G:/workspace/boke-pro/superset-all/superset/superset-frontend/src/visualizations/TimeTable/TimeTable.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;GAiBG;ACCH;EACE,eAAA;CDCD","file":"TimeTable.less","sourcesContent":["/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.time-table {\n  overflow: auto;\n}\n","/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.time-table {\n  overflow: auto;\n}\n"],"sourceRoot":""}]);

// exports


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

/***/ "./node_modules/mustache/mustache.js":
/*!*******************************************!*\
  !*** ./node_modules/mustache/mustache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if ( true && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
  } else {}
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.3.2';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;
}));


/***/ }),

/***/ "./node_modules/react-table/dist/react-table.development.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-table/dist/react-table.development.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! react */ "./node_modules/react/index.js")) :
  undefined;
}(this, (function (exports, React) { 'use strict';

  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
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

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");

    return typeof key === "symbol" ? key : String(key);
  }

  var renderErr = 'Renderer Error ☝️';
  var actions = {
    init: 'init'
  };
  var defaultRenderer = function defaultRenderer(_ref) {
    var _ref$value = _ref.value,
        value = _ref$value === void 0 ? '' : _ref$value;
    return value;
  };
  var emptyRenderer = function emptyRenderer() {
    return React.createElement(React.Fragment, null, "\xA0");
  };
  var defaultColumn = {
    Cell: defaultRenderer,
    width: 150,
    minWidth: 0,
    maxWidth: Number.MAX_SAFE_INTEGER
  };

  function mergeProps() {
    for (var _len = arguments.length, propList = new Array(_len), _key = 0; _key < _len; _key++) {
      propList[_key] = arguments[_key];
    }

    return propList.reduce(function (props, next) {
      var style = next.style,
          className = next.className,
          rest = _objectWithoutPropertiesLoose(next, ["style", "className"]);

      props = _extends({}, props, {}, rest);

      if (style) {
        props.style = props.style ? _extends({}, props.style || {}, {}, style || {}) : style;
      }

      if (className) {
        props.className = props.className ? props.className + ' ' + className : className;
      }

      if (props.className === '') {
        delete props.className;
      }

      return props;
    }, {});
  }

  function handlePropGetter(prevProps, userProps, meta) {
    // Handle a lambda, pass it the previous props
    if (typeof userProps === 'function') {
      return handlePropGetter({}, userProps(prevProps, meta));
    } // Handle an array, merge each item as separate props


    if (Array.isArray(userProps)) {
      return mergeProps.apply(void 0, [prevProps].concat(userProps));
    } // Handle an object by default, merge the two objects


    return mergeProps(prevProps, userProps);
  }

  var makePropGetter = function makePropGetter(hooks, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return function (userProps) {
      if (userProps === void 0) {
        userProps = {};
      }

      return [].concat(hooks, [userProps]).reduce(function (prev, next) {
        return handlePropGetter(prev, next, _extends({}, meta, {
          userProps: userProps
        }));
      }, {});
    };
  };
  var reduceHooks = function reduceHooks(hooks, initial, meta, allowUndefined) {
    if (meta === void 0) {
      meta = {};
    }

    return hooks.reduce(function (prev, next) {
      var nextValue = next(prev, meta);

      {
        if (!allowUndefined && typeof nextValue === 'undefined') {
          console.info(next);
          throw new Error('React Table: A reducer hook ☝️ just returned undefined! This is not allowed.');
        }
      }

      return nextValue;
    }, initial);
  };
  var loopHooks = function loopHooks(hooks, context, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return hooks.forEach(function (hook) {
      var nextValue = hook(context, meta);

      {
        if (typeof nextValue !== 'undefined') {
          console.info(hook, nextValue);
          throw new Error('React Table: A loop-type hook ☝️ just returned a value! This is not allowed.');
        }
      }
    });
  };
  function ensurePluginOrder(plugins, befores, pluginName, afters) {
    if ( afters) {
      throw new Error("Defining plugins in the \"after\" section of ensurePluginOrder is no longer supported (see plugin " + pluginName + ")");
    }

    var pluginIndex = plugins.findIndex(function (plugin) {
      return plugin.pluginName === pluginName;
    });

    if (pluginIndex === -1) {
      {
        throw new Error("The plugin \"" + pluginName + "\" was not found in the plugin list!\nThis usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:\n\n  " + pluginName + ".pluginName = '" + pluginName + "'\n");
      }
    }

    befores.forEach(function (before) {
      var beforeIndex = plugins.findIndex(function (plugin) {
        return plugin.pluginName === before;
      });

      if (beforeIndex > -1 && beforeIndex > pluginIndex) {
        {
          throw new Error("React Table: The " + pluginName + " plugin hook must be placed after the " + before + " plugin hook!");
        }
      }
    });
  }
  function functionalUpdate(updater, old) {
    return typeof updater === 'function' ? updater(old) : updater;
  }
  function useGetLatest(obj) {
    var ref = React.useRef();
    ref.current = obj;
    return React.useCallback(function () {
      return ref.current;
    }, []);
  } // SSR has issues with useLayoutEffect still, so use useEffect during SSR

  var safeUseLayoutEffect = typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;
  function useMountedLayoutEffect(fn, deps) {
    var mountedRef = React.useRef(false);
    safeUseLayoutEffect(function () {
      if (mountedRef.current) {
        fn();
      }

      mountedRef.current = true; // eslint-disable-next-line
    }, deps);
  }
  function useAsyncDebounce(defaultFn, defaultWait) {
    if (defaultWait === void 0) {
      defaultWait = 0;
    }

    var debounceRef = React.useRef({});
    var getDefaultFn = useGetLatest(defaultFn);
    var getDefaultWait = useGetLatest(defaultWait);
    return React.useCallback(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var _len2,
            args,
            _key2,
            _args2 = arguments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                for (_len2 = _args2.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = _args2[_key2];
                }

                if (!debounceRef.current.promise) {
                  debounceRef.current.promise = new Promise(function (resolve, reject) {
                    debounceRef.current.resolve = resolve;
                    debounceRef.current.reject = reject;
                  });
                }

                if (debounceRef.current.timeout) {
                  clearTimeout(debounceRef.current.timeout);
                }

                debounceRef.current.timeout = setTimeout(
                /*#__PURE__*/
                _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          delete debounceRef.current.timeout;
                          _context.prev = 1;
                          _context.t0 = debounceRef.current;
                          _context.next = 5;
                          return getDefaultFn().apply(void 0, args);

                        case 5:
                          _context.t1 = _context.sent;

                          _context.t0.resolve.call(_context.t0, _context.t1);

                          _context.next = 12;
                          break;

                        case 9:
                          _context.prev = 9;
                          _context.t2 = _context["catch"](1);
                          debounceRef.current.reject(_context.t2);

                        case 12:
                          _context.prev = 12;
                          delete debounceRef.current.promise;
                          return _context.finish(12);

                        case 15:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[1, 9, 12, 15]]);
                })), getDefaultWait());
                return _context2.abrupt("return", debounceRef.current.promise);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function () {
        return _ref2.apply(this, arguments);
      };
    }(), [getDefaultFn, getDefaultWait]);
  }
  function makeRenderer(instance, column, meta) {
    if (meta === void 0) {
      meta = {};
    }

    return function (type, userProps) {
      if (userProps === void 0) {
        userProps = {};
      }

      var Comp = typeof type === 'string' ? column[type] : type;

      if (typeof Comp === 'undefined') {
        console.info(column);
        throw new Error(renderErr);
      }

      return flexRender(Comp, _extends({}, instance, {
        column: column
      }, meta, {}, userProps));
    };
  }
  function flexRender(Comp, props) {
    return isReactComponent(Comp) ? React.createElement(Comp, props) : Comp;
  }

  function isReactComponent(component) {
    return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
  }

  function isClassComponent(component) {
    return typeof component === 'function' && function () {
      var proto = Object.getPrototypeOf(component);
      return proto.prototype && proto.prototype.isReactComponent;
    }();
  }

  function isExoticComponent(component) {
    return typeof component === 'object' && typeof component.$$typeof === 'symbol' && ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description);
  }

  function linkColumnStructure(columns, parent, depth) {
    if (depth === void 0) {
      depth = 0;
    }

    return columns.map(function (column) {
      column = _extends({}, column, {
        parent: parent,
        depth: depth
      });
      assignColumnAccessor(column);

      if (column.columns) {
        column.columns = linkColumnStructure(column.columns, column, depth + 1);
      }

      return column;
    });
  }
  function flattenColumns(columns) {
    return flattenBy(columns, 'columns');
  }
  function assignColumnAccessor(column) {
    // First check for string accessor
    var id = column.id,
        accessor = column.accessor,
        Header = column.Header;

    if (typeof accessor === 'string') {
      id = id || accessor;
      var accessorPath = accessor.split('.');

      accessor = function accessor(row) {
        return getBy(row, accessorPath);
      };
    }

    if (!id && typeof Header === 'string' && Header) {
      id = Header;
    }

    if (!id && column.columns) {
      console.error(column);
      throw new Error('A column ID (or unique "Header" value) is required!');
    }

    if (!id) {
      console.error(column);
      throw new Error('A column ID (or string accessor) is required!');
    }

    Object.assign(column, {
      id: id,
      accessor: accessor
    });
    return column;
  }
  function decorateColumn(column, userDefaultColumn) {
    if (!userDefaultColumn) {
      throw new Error();
    }

    Object.assign(column, _extends({
      // Make sure there is a fallback header, just in case
      Header: emptyRenderer,
      Footer: emptyRenderer
    }, defaultColumn, {}, userDefaultColumn, {}, column));
    Object.assign(column, {
      originalWidth: column.width
    });
    return column;
  } // Build the header groups from the bottom up

  function makeHeaderGroups(allColumns, defaultColumn, additionalHeaderProperties) {
    if (additionalHeaderProperties === void 0) {
      additionalHeaderProperties = function additionalHeaderProperties() {
        return {};
      };
    }

    var headerGroups = [];
    var scanColumns = allColumns;
    var uid = 0;

    var getUID = function getUID() {
      return uid++;
    };

    var _loop = function _loop() {
      // The header group we are creating
      var headerGroup = {
        headers: []
      }; // The parent columns we're going to scan next

      var parentColumns = [];
      var hasParents = scanColumns.some(function (d) {
        return d.parent;
      }); // Scan each column for parents

      scanColumns.forEach(function (column) {
        // What is the latest (last) parent column?
        var latestParentColumn = [].concat(parentColumns).reverse()[0];
        var newParent;

        if (hasParents) {
          // If the column has a parent, add it if necessary
          if (column.parent) {
            newParent = _extends({}, column.parent, {
              originalId: column.parent.id,
              id: column.parent.id + "_" + getUID(),
              headers: [column]
            }, additionalHeaderProperties(column));
          } else {
            // If other columns have parents, we'll need to add a place holder if necessary
            var originalId = column.id + "_placeholder";
            newParent = decorateColumn(_extends({
              originalId: originalId,
              id: column.id + "_placeholder_" + getUID(),
              placeholderOf: column,
              headers: [column]
            }, additionalHeaderProperties(column)), defaultColumn);
          } // If the resulting parent columns are the same, just add
          // the column and increment the header span


          if (latestParentColumn && latestParentColumn.originalId === newParent.originalId) {
            latestParentColumn.headers.push(column);
          } else {
            parentColumns.push(newParent);
          }
        }

        headerGroup.headers.push(column);
      });
      headerGroups.push(headerGroup); // Start scanning the parent columns

      scanColumns = parentColumns;
    };

    while (scanColumns.length) {
      _loop();
    }

    return headerGroups.reverse();
  }
  var pathObjCache = new Map();
  function getBy(obj, path, def) {
    if (!path) {
      return obj;
    }

    var cacheKey = typeof path === 'function' ? path : JSON.stringify(path);

    var pathObj = pathObjCache.get(cacheKey) || function () {
      var pathObj = makePathArray(path);
      pathObjCache.set(cacheKey, pathObj);
      return pathObj;
    }();

    var val;

    try {
      val = pathObj.reduce(function (cursor, pathPart) {
        return cursor[pathPart];
      }, obj);
    } catch (e) {// continue regardless of error
    }

    return typeof val !== 'undefined' ? val : def;
  }
  function getFirstDefined() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    for (var i = 0; i < args.length; i += 1) {
      if (typeof args[i] !== 'undefined') {
        return args[i];
      }
    }
  }
  function isFunction(a) {
    if (typeof a === 'function') {
      return a;
    }
  }
  function flattenBy(arr, key) {
    var flat = [];

    var recurse = function recurse(arr) {
      arr.forEach(function (d) {
        if (!d[key]) {
          flat.push(d);
        } else {
          recurse(d[key]);
        }
      });
    };

    recurse(arr);
    return flat;
  }
  function expandRows(rows, _ref) {
    var manualExpandedKey = _ref.manualExpandedKey,
        expanded = _ref.expanded,
        _ref$expandSubRows = _ref.expandSubRows,
        expandSubRows = _ref$expandSubRows === void 0 ? true : _ref$expandSubRows;
    var expandedRows = [];

    var handleRow = function handleRow(row, addToExpandedRows) {
      if (addToExpandedRows === void 0) {
        addToExpandedRows = true;
      }

      row.isExpanded = row.original && row.original[manualExpandedKey] || expanded[row.id];
      row.canExpand = row.subRows && !!row.subRows.length;

      if (addToExpandedRows) {
        expandedRows.push(row);
      }

      if (row.subRows && row.subRows.length && row.isExpanded) {
        row.subRows.forEach(function (row) {
          return handleRow(row, expandSubRows);
        });
      }
    };

    rows.forEach(function (row) {
      return handleRow(row);
    });
    return expandedRows;
  }
  function getFilterMethod(filter, userFilterTypes, filterTypes) {
    return isFunction(filter) || userFilterTypes[filter] || filterTypes[filter] || filterTypes.text;
  }
  function shouldAutoRemoveFilter(autoRemove, value, column) {
    return autoRemove ? autoRemove(value, column) : typeof value === 'undefined';
  }
  function unpreparedAccessWarning() {
    throw new Error('React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.');
  }
  var passiveSupported = null;
  function passiveEventSupported() {
    // memoize support to avoid adding multiple test events
    if (typeof passiveSupported === 'boolean') return passiveSupported;
    var supported = false;

    try {
      var options = {
        get passive() {
          supported = true;
          return false;
        }

      };
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (err) {
      supported = false;
    }

    passiveSupported = supported;
    return passiveSupported;
  } //

  var reOpenBracket = /\[/g;
  var reCloseBracket = /\]/g;

  function makePathArray(obj) {
    return flattenDeep(obj) // remove all periods in parts
    .map(function (d) {
      return String(d).replace('.', '_');
    }) // join parts using period
    .join('.') // replace brackets with periods
    .replace(reOpenBracket, '.').replace(reCloseBracket, '') // split it back out on periods
    .split('.');
  }

  function flattenDeep(arr, newArr) {
    if (newArr === void 0) {
      newArr = [];
    }

    if (!Array.isArray(arr)) {
      newArr.push(arr);
    } else {
      for (var i = 0; i < arr.length; i += 1) {
        flattenDeep(arr[i], newArr);
      }
    }

    return newArr;
  }

  var defaultGetTableProps = function defaultGetTableProps(props) {
    return _extends({
      role: 'table'
    }, props);
  };

  var defaultGetTableBodyProps = function defaultGetTableBodyProps(props) {
    return _extends({
      role: 'rowgroup'
    }, props);
  };

  var defaultGetHeaderProps = function defaultGetHeaderProps(props, _ref) {
    var column = _ref.column;
    return _extends({
      key: "header_" + column.id,
      colSpan: column.totalVisibleHeaderCount,
      role: 'columnheader'
    }, props);
  };

  var defaultGetFooterProps = function defaultGetFooterProps(props, _ref2) {
    var column = _ref2.column;
    return _extends({
      key: "footer_" + column.id,
      colSpan: column.totalVisibleHeaderCount
    }, props);
  };

  var defaultGetHeaderGroupProps = function defaultGetHeaderGroupProps(props, _ref3) {
    var index = _ref3.index;
    return _extends({
      key: "headerGroup_" + index,
      role: 'row'
    }, props);
  };

  var defaultGetFooterGroupProps = function defaultGetFooterGroupProps(props, _ref4) {
    var index = _ref4.index;
    return _extends({
      key: "footerGroup_" + index
    }, props);
  };

  var defaultGetRowProps = function defaultGetRowProps(props, _ref5) {
    var row = _ref5.row;
    return _extends({
      key: "row_" + row.id,
      role: 'row'
    }, props);
  };

  var defaultGetCellProps = function defaultGetCellProps(props, _ref6) {
    var cell = _ref6.cell;
    return _extends({
      key: "cell_" + cell.row.id + "_" + cell.column.id,
      role: 'cell'
    }, props);
  };

  function makeDefaultPluginHooks() {
    return {
      useOptions: [],
      stateReducers: [],
      useControlledState: [],
      columns: [],
      columnsDeps: [],
      allColumns: [],
      allColumnsDeps: [],
      accessValue: [],
      materializedColumns: [],
      materializedColumnsDeps: [],
      useInstanceAfterData: [],
      visibleColumns: [],
      visibleColumnsDeps: [],
      headerGroups: [],
      headerGroupsDeps: [],
      useInstanceBeforeDimensions: [],
      useInstance: [],
      prepareRow: [],
      getTableProps: [defaultGetTableProps],
      getTableBodyProps: [defaultGetTableBodyProps],
      getHeaderGroupProps: [defaultGetHeaderGroupProps],
      getFooterGroupProps: [defaultGetFooterGroupProps],
      getHeaderProps: [defaultGetHeaderProps],
      getFooterProps: [defaultGetFooterProps],
      getRowProps: [defaultGetRowProps],
      getCellProps: [defaultGetCellProps],
      useFinalInstance: []
    };
  }

  actions.resetHiddenColumns = 'resetHiddenColumns';
  actions.toggleHideColumn = 'toggleHideColumn';
  actions.setHiddenColumns = 'setHiddenColumns';
  actions.toggleHideAllColumns = 'toggleHideAllColumns';
  var useColumnVisibility = function useColumnVisibility(hooks) {
    hooks.getToggleHiddenProps = [defaultGetToggleHiddenProps];
    hooks.getToggleHideAllColumnsProps = [defaultGetToggleHideAllColumnsProps];
    hooks.stateReducers.push(reducer);
    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
    hooks.headerGroupsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.hiddenColumns]);
    });
    hooks.useInstance.push(useInstance);
  };
  useColumnVisibility.pluginName = 'useColumnVisibility';

  var defaultGetToggleHiddenProps = function defaultGetToggleHiddenProps(props, _ref2) {
    var column = _ref2.column;
    return [props, {
      onChange: function onChange(e) {
        column.toggleHidden(!e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: column.isVisible,
      title: 'Toggle Column Visible'
    }];
  };

  var defaultGetToggleHideAllColumnsProps = function defaultGetToggleHideAllColumnsProps(props, _ref3) {
    var instance = _ref3.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleHideAllColumns(!e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: !instance.allColumnsHidden && !instance.state.hiddenColumns.length,
      title: 'Toggle All Columns Hidden',
      indeterminate: !instance.allColumnsHidden && instance.state.hiddenColumns.length
    }];
  };

  function reducer(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        hiddenColumns: []
      }, state);
    }

    if (action.type === actions.resetHiddenColumns) {
      return _extends({}, state, {
        hiddenColumns: instance.initialState.hiddenColumns || []
      });
    }

    if (action.type === actions.toggleHideColumn) {
      var should = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.includes(action.columnId);
      var hiddenColumns = should ? [].concat(state.hiddenColumns, [action.columnId]) : state.hiddenColumns.filter(function (d) {
        return d !== action.columnId;
      });
      return _extends({}, state, {
        hiddenColumns: hiddenColumns
      });
    }

    if (action.type === actions.setHiddenColumns) {
      return _extends({}, state, {
        hiddenColumns: functionalUpdate(action.value, state.hiddenColumns)
      });
    }

    if (action.type === actions.toggleHideAllColumns) {
      var shouldAll = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.length;
      return _extends({}, state, {
        hiddenColumns: shouldAll ? instance.allColumns.map(function (d) {
          return d.id;
        }) : []
      });
    }
  }

  function useInstanceBeforeDimensions(instance) {
    var headers = instance.headers,
        hiddenColumns = instance.state.hiddenColumns;
    var isMountedRef = React.useRef(false);

    if (!isMountedRef.current) ;

    var handleColumn = function handleColumn(column, parentVisible) {
      column.isVisible = parentVisible && !hiddenColumns.includes(column.id);
      var totalVisibleHeaderCount = 0;

      if (column.headers && column.headers.length) {
        column.headers.forEach(function (subColumn) {
          return totalVisibleHeaderCount += handleColumn(subColumn, column.isVisible);
        });
      } else {
        totalVisibleHeaderCount = column.isVisible ? 1 : 0;
      }

      column.totalVisibleHeaderCount = totalVisibleHeaderCount;
      return totalVisibleHeaderCount;
    };

    var totalVisibleHeaderCount = 0;
    headers.forEach(function (subHeader) {
      return totalVisibleHeaderCount += handleColumn(subHeader, true);
    });
  }

  function useInstance(instance) {
    var columns = instance.columns,
        flatHeaders = instance.flatHeaders,
        dispatch = instance.dispatch,
        allColumns = instance.allColumns,
        getHooks = instance.getHooks,
        hiddenColumns = instance.state.hiddenColumns,
        _instance$autoResetHi = instance.autoResetHiddenColumns,
        autoResetHiddenColumns = _instance$autoResetHi === void 0 ? true : _instance$autoResetHi;
    var getInstance = useGetLatest(instance);
    var allColumnsHidden = allColumns.length === hiddenColumns.length;
    var toggleHideColumn = React.useCallback(function (columnId, value) {
      return dispatch({
        type: actions.toggleHideColumn,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var setHiddenColumns = React.useCallback(function (value) {
      return dispatch({
        type: actions.setHiddenColumns,
        value: value
      });
    }, [dispatch]);
    var toggleHideAllColumns = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleHideAllColumns,
        value: value
      });
    }, [dispatch]);
    var getToggleHideAllColumnsProps = makePropGetter(getHooks().getToggleHideAllColumnsProps, {
      instance: getInstance()
    });
    flatHeaders.forEach(function (column) {
      column.toggleHidden = function (value) {
        dispatch({
          type: actions.toggleHideColumn,
          columnId: column.id,
          value: value
        });
      };

      column.getToggleHiddenProps = makePropGetter(getHooks().getToggleHiddenProps, {
        instance: getInstance(),
        column: column
      });
    });
    var getAutoResetHiddenColumns = useGetLatest(autoResetHiddenColumns);
    useMountedLayoutEffect(function () {
      if (getAutoResetHiddenColumns()) {
        dispatch({
          type: actions.resetHiddenColumns
        });
      }
    }, [dispatch, columns]);
    Object.assign(instance, {
      allColumnsHidden: allColumnsHidden,
      toggleHideColumn: toggleHideColumn,
      setHiddenColumns: setHiddenColumns,
      toggleHideAllColumns: toggleHideAllColumns,
      getToggleHideAllColumnsProps: getToggleHideAllColumnsProps
    });
  }

  var defaultInitialState = {};
  var defaultColumnInstance = {};

  var defaultReducer = function defaultReducer(state, action, prevState) {
    return state;
  };

  var defaultGetSubRows = function defaultGetSubRows(row, index) {
    return row.subRows || [];
  };

  var defaultGetRowId = function defaultGetRowId(row, index, parent) {
    return "" + (parent ? [parent.id, index].join('.') : index);
  };

  var defaultUseControlledState = function defaultUseControlledState(d) {
    return d;
  };

  function applyDefaults(props) {
    var _props$initialState = props.initialState,
        initialState = _props$initialState === void 0 ? defaultInitialState : _props$initialState,
        _props$defaultColumn = props.defaultColumn,
        defaultColumn = _props$defaultColumn === void 0 ? defaultColumnInstance : _props$defaultColumn,
        _props$getSubRows = props.getSubRows,
        getSubRows = _props$getSubRows === void 0 ? defaultGetSubRows : _props$getSubRows,
        _props$getRowId = props.getRowId,
        getRowId = _props$getRowId === void 0 ? defaultGetRowId : _props$getRowId,
        _props$stateReducer = props.stateReducer,
        stateReducer = _props$stateReducer === void 0 ? defaultReducer : _props$stateReducer,
        _props$useControlledS = props.useControlledState,
        useControlledState = _props$useControlledS === void 0 ? defaultUseControlledState : _props$useControlledS,
        rest = _objectWithoutPropertiesLoose(props, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);

    return _extends({}, rest, {
      initialState: initialState,
      defaultColumn: defaultColumn,
      getSubRows: getSubRows,
      getRowId: getRowId,
      stateReducer: stateReducer,
      useControlledState: useControlledState
    });
  }

  var useTable = function useTable(props) {
    for (var _len = arguments.length, plugins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      plugins[_key - 1] = arguments[_key];
    }

    // Apply default props
    props = applyDefaults(props); // Add core plugins

    plugins = [useColumnVisibility].concat(plugins); // Create the table instance

    var instanceRef = React.useRef({}); // Create a getter for the instance (helps avoid a lot of potential memory leaks)

    var getInstance = useGetLatest(instanceRef.current); // Assign the props, plugins and hooks to the instance

    Object.assign(getInstance(), _extends({}, props, {
      plugins: plugins,
      hooks: makeDefaultPluginHooks()
    })); // Allow plugins to register hooks as early as possible

    plugins.filter(Boolean).forEach(function (plugin) {
      plugin(getInstance().hooks);
    }); // Consume all hooks and make a getter for them

    var getHooks = useGetLatest(getInstance().hooks);
    getInstance().getHooks = getHooks;
    delete getInstance().hooks; // Allow useOptions hooks to modify the options coming into the table

    Object.assign(getInstance(), reduceHooks(getHooks().useOptions, applyDefaults(props)));

    var _getInstance = getInstance(),
        data = _getInstance.data,
        userColumns = _getInstance.columns,
        initialState = _getInstance.initialState,
        defaultColumn = _getInstance.defaultColumn,
        getSubRows = _getInstance.getSubRows,
        getRowId = _getInstance.getRowId,
        stateReducer = _getInstance.stateReducer,
        useControlledState = _getInstance.useControlledState; // Setup user reducer ref


    var getStateReducer = useGetLatest(stateReducer); // Build the reducer

    var reducer = React.useCallback(function (state, action) {
      // Detect invalid actions
      if (!action.type) {
        console.info({
          action: action
        });
        throw new Error('Unknown Action 👆');
      } // Reduce the state from all plugin reducers


      return [].concat(getHooks().stateReducers, Array.isArray(getStateReducer()) ? getStateReducer() : [getStateReducer()]).reduce(function (s, handler) {
        return handler(s, action, state, getInstance()) || s;
      }, state);
    }, [getHooks, getStateReducer, getInstance]); // Start the reducer

    var _React$useReducer = React.useReducer(reducer, undefined, function () {
      return reducer(initialState, {
        type: actions.init
      });
    }),
        reducerState = _React$useReducer[0],
        dispatch = _React$useReducer[1]; // Allow the user to control the final state with hooks


    var state = reduceHooks([].concat(getHooks().useControlledState, [useControlledState]), reducerState, {
      instance: getInstance()
    });
    Object.assign(getInstance(), {
      state: state,
      dispatch: dispatch
    }); // Decorate All the columns

    var columns = React.useMemo(function () {
      return linkColumnStructure(reduceHooks(getHooks().columns, userColumns, {
        instance: getInstance()
      }));
    }, [getHooks, getInstance, userColumns].concat(reduceHooks(getHooks().columnsDeps, [], {
      instance: getInstance()
    })));
    getInstance().columns = columns; // Get the flat list of all columns and allow hooks to decorate
    // those columns (and trigger this memoization via deps)

    var allColumns = React.useMemo(function () {
      return reduceHooks(getHooks().allColumns, flattenColumns(columns), {
        instance: getInstance()
      }).map(assignColumnAccessor);
    }, [columns, getHooks, getInstance].concat(reduceHooks(getHooks().allColumnsDeps, [], {
      instance: getInstance()
    })));
    getInstance().allColumns = allColumns; // Access the row model using initial columns

    var _React$useMemo = React.useMemo(function () {
      var rows = [];
      var flatRows = [];
      var rowsById = {};
      var allColumnsQueue = [].concat(allColumns);

      while (allColumnsQueue.length) {
        var column = allColumnsQueue.shift();
        accessRowsForColumn({
          data: data,
          rows: rows,
          flatRows: flatRows,
          rowsById: rowsById,
          column: column,
          getRowId: getRowId,
          getSubRows: getSubRows,
          accessValueHooks: getHooks().accessValue,
          getInstance: getInstance
        });
      }

      return [rows, flatRows, rowsById];
    }, [allColumns, data, getRowId, getSubRows, getHooks, getInstance]),
        rows = _React$useMemo[0],
        flatRows = _React$useMemo[1],
        rowsById = _React$useMemo[2];

    Object.assign(getInstance(), {
      rows: rows,
      initialRows: [].concat(rows),
      flatRows: flatRows,
      rowsById: rowsById // materializedColumns,

    });
    loopHooks(getHooks().useInstanceAfterData, getInstance()); // Get the flat list of all columns AFTER the rows
    // have been access, and allow hooks to decorate
    // those columns (and trigger this memoization via deps)

    var visibleColumns = React.useMemo(function () {
      return reduceHooks(getHooks().visibleColumns, allColumns, {
        instance: getInstance()
      }).map(function (d) {
        return decorateColumn(d, defaultColumn);
      });
    }, [getHooks, allColumns, getInstance, defaultColumn].concat(reduceHooks(getHooks().visibleColumnsDeps, [], {
      instance: getInstance()
    }))); // Combine new visible columns with all columns

    allColumns = React.useMemo(function () {
      var columns = [].concat(visibleColumns);
      allColumns.forEach(function (column) {
        if (!columns.find(function (d) {
          return d.id === column.id;
        })) {
          columns.push(column);
        }
      });
      return columns;
    }, [allColumns, visibleColumns]);
    getInstance().allColumns = allColumns;

    {
      var duplicateColumns = allColumns.filter(function (column, i) {
        return allColumns.findIndex(function (d) {
          return d.id === column.id;
        }) !== i;
      });

      if (duplicateColumns.length) {
        console.info(allColumns);
        throw new Error("Duplicate columns were found with ids: \"" + duplicateColumns.map(function (d) {
          return d.id;
        }).join(', ') + "\" in the columns array above");
      }
    } // Make the headerGroups


    var headerGroups = React.useMemo(function () {
      return reduceHooks(getHooks().headerGroups, makeHeaderGroups(visibleColumns, defaultColumn), getInstance());
    }, [getHooks, visibleColumns, defaultColumn, getInstance].concat(reduceHooks(getHooks().headerGroupsDeps, [], {
      instance: getInstance()
    })));
    getInstance().headerGroups = headerGroups; // Get the first level of headers

    var headers = React.useMemo(function () {
      return headerGroups.length ? headerGroups[0].headers : [];
    }, [headerGroups]);
    getInstance().headers = headers; // Provide a flat header list for utilities

    getInstance().flatHeaders = headerGroups.reduce(function (all, headerGroup) {
      return [].concat(all, headerGroup.headers);
    }, []);
    loopHooks(getHooks().useInstanceBeforeDimensions, getInstance()); // Filter columns down to visible ones

    var visibleColumnsDep = visibleColumns.filter(function (d) {
      return d.isVisible;
    }).map(function (d) {
      return d.id;
    }).sort().join('_');
    visibleColumns = React.useMemo(function () {
      return visibleColumns.filter(function (d) {
        return d.isVisible;
      });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [visibleColumns, visibleColumnsDep]);
    getInstance().visibleColumns = visibleColumns; // Header Visibility is needed by this point

    var _calculateHeaderWidth = calculateHeaderWidths(headers),
        totalColumnsMinWidth = _calculateHeaderWidth[0],
        totalColumnsWidth = _calculateHeaderWidth[1],
        totalColumnsMaxWidth = _calculateHeaderWidth[2];

    getInstance().totalColumnsMinWidth = totalColumnsMinWidth;
    getInstance().totalColumnsWidth = totalColumnsWidth;
    getInstance().totalColumnsMaxWidth = totalColumnsMaxWidth;
    loopHooks(getHooks().useInstance, getInstance()) // Each materialized header needs to be assigned a render function and other
    // prop getter properties here.
    ;
    [].concat(getInstance().flatHeaders, getInstance().allColumns).forEach(function (column) {
      // Give columns/headers rendering power
      column.render = makeRenderer(getInstance(), column); // Give columns/headers a default getHeaderProps

      column.getHeaderProps = makePropGetter(getHooks().getHeaderProps, {
        instance: getInstance(),
        column: column
      }); // Give columns/headers a default getFooterProps

      column.getFooterProps = makePropGetter(getHooks().getFooterProps, {
        instance: getInstance(),
        column: column
      });
    });
    getInstance().headerGroups = React.useMemo(function () {
      return headerGroups.filter(function (headerGroup, i) {
        // Filter out any headers and headerGroups that don't have visible columns
        headerGroup.headers = headerGroup.headers.filter(function (column) {
          var recurse = function recurse(headers) {
            return headers.filter(function (column) {
              if (column.headers) {
                return recurse(column.headers);
              }

              return column.isVisible;
            }).length;
          };

          if (column.headers) {
            return recurse(column.headers);
          }

          return column.isVisible;
        }); // Give headerGroups getRowProps

        if (headerGroup.headers.length) {
          headerGroup.getHeaderGroupProps = makePropGetter(getHooks().getHeaderGroupProps, {
            instance: getInstance(),
            headerGroup: headerGroup,
            index: i
          });
          headerGroup.getFooterGroupProps = makePropGetter(getHooks().getFooterGroupProps, {
            instance: getInstance(),
            headerGroup: headerGroup,
            index: i
          });
          return true;
        }

        return false;
      });
    }, [headerGroups, getInstance, getHooks]);
    getInstance().footerGroups = [].concat(getInstance().headerGroups).reverse(); // The prepareRow function is absolutely necessary and MUST be called on
    // any rows the user wishes to be displayed.

    getInstance().prepareRow = React.useCallback(function (row) {
      row.getRowProps = makePropGetter(getHooks().getRowProps, {
        instance: getInstance(),
        row: row
      }); // Build the visible cells for each row

      row.allCells = allColumns.map(function (column) {
        var value = row.values[column.id];
        var cell = {
          column: column,
          row: row,
          value: value
        }; // Give each cell a getCellProps base

        cell.getCellProps = makePropGetter(getHooks().getCellProps, {
          instance: getInstance(),
          cell: cell
        }); // Give each cell a renderer function (supports multiple renderers)

        cell.render = makeRenderer(getInstance(), column, {
          row: row,
          cell: cell,
          value: value
        });
        return cell;
      });
      row.cells = visibleColumns.map(function (column) {
        return row.allCells.find(function (cell) {
          return cell.column.id === column.id;
        });
      }); // need to apply any row specific hooks (useExpanded requires this)

      loopHooks(getHooks().prepareRow, row, {
        instance: getInstance()
      });
    }, [getHooks, getInstance, allColumns, visibleColumns]);
    getInstance().getTableProps = makePropGetter(getHooks().getTableProps, {
      instance: getInstance()
    });
    getInstance().getTableBodyProps = makePropGetter(getHooks().getTableBodyProps, {
      instance: getInstance()
    });
    loopHooks(getHooks().useFinalInstance, getInstance());
    return getInstance();
  };

  function calculateHeaderWidths(headers, left) {
    if (left === void 0) {
      left = 0;
    }

    var sumTotalMinWidth = 0;
    var sumTotalWidth = 0;
    var sumTotalMaxWidth = 0;
    var sumTotalFlexWidth = 0;
    headers.forEach(function (header) {
      var subHeaders = header.headers;
      header.totalLeft = left;

      if (subHeaders && subHeaders.length) {
        var _calculateHeaderWidth2 = calculateHeaderWidths(subHeaders, left),
            totalMinWidth = _calculateHeaderWidth2[0],
            totalWidth = _calculateHeaderWidth2[1],
            totalMaxWidth = _calculateHeaderWidth2[2],
            totalFlexWidth = _calculateHeaderWidth2[3];

        header.totalMinWidth = totalMinWidth;
        header.totalWidth = totalWidth;
        header.totalMaxWidth = totalMaxWidth;
        header.totalFlexWidth = totalFlexWidth;
      } else {
        header.totalMinWidth = header.minWidth;
        header.totalWidth = Math.min(Math.max(header.minWidth, header.width), header.maxWidth);
        header.totalMaxWidth = header.maxWidth;
        header.totalFlexWidth = header.canResize ? header.totalWidth : 0;
      }

      if (header.isVisible) {
        left += header.totalWidth;
        sumTotalMinWidth += header.totalMinWidth;
        sumTotalWidth += header.totalWidth;
        sumTotalMaxWidth += header.totalMaxWidth;
        sumTotalFlexWidth += header.totalFlexWidth;
      }
    });
    return [sumTotalMinWidth, sumTotalWidth, sumTotalMaxWidth, sumTotalFlexWidth];
  }

  function accessRowsForColumn(_ref) {
    var data = _ref.data,
        rows = _ref.rows,
        flatRows = _ref.flatRows,
        rowsById = _ref.rowsById,
        column = _ref.column,
        getRowId = _ref.getRowId,
        getSubRows = _ref.getSubRows,
        accessValueHooks = _ref.accessValueHooks,
        getInstance = _ref.getInstance;

    // Access the row's data column-by-column
    // We do it this way so we can incrementally add materialized
    // columns after the first pass and avoid excessive looping
    var accessRow = function accessRow(originalRow, rowIndex, depth, parent, parentRows) {
      if (depth === void 0) {
        depth = 0;
      }

      // Keep the original reference around
      var original = originalRow;
      var id = getRowId(originalRow, rowIndex, parent);
      var row = rowsById[id]; // If the row hasn't been created, let's make it

      if (!row) {
        row = {
          id: id,
          original: original,
          index: rowIndex,
          depth: depth,
          cells: [{}] // This is a dummy cell

        }; // Override common array functions (and the dummy cell's getCellProps function)
        // to show an error if it is accessed without calling prepareRow

        row.cells.map = unpreparedAccessWarning;
        row.cells.filter = unpreparedAccessWarning;
        row.cells.forEach = unpreparedAccessWarning;
        row.cells[0].getCellProps = unpreparedAccessWarning; // Create the cells and values

        row.values = {}; // Push this row into the parentRows array

        parentRows.push(row); // Keep track of every row in a flat array

        flatRows.push(row); // Also keep track of every row by its ID

        rowsById[id] = row; // Get the original subrows

        row.originalSubRows = getSubRows(originalRow, rowIndex); // Then recursively access them

        if (row.originalSubRows) {
          var subRows = [];
          row.originalSubRows.forEach(function (d, i) {
            return accessRow(d, i, depth + 1, row, subRows);
          }); // Keep the new subRows array on the row

          row.subRows = subRows;
        }
      } else if (row.subRows) {
        // If the row exists, then it's already been accessed
        // Keep recursing, but don't worry about passing the
        // accumlator array (those rows already exist)
        row.originalSubRows.forEach(function (d, i) {
          return accessRow(d, i, depth + 1, row);
        });
      } // If the column has an accessor, use it to get a value


      if (column.accessor) {
        row.values[column.id] = column.accessor(originalRow, rowIndex, row, parentRows, data);
      } // Allow plugins to manipulate the column value


      row.values[column.id] = reduceHooks(accessValueHooks, row.values[column.id], {
        row: row,
        column: column,
        instance: getInstance()
      }, true);
    };

    data.forEach(function (originalRow, rowIndex) {
      return accessRow(originalRow, rowIndex, 0, undefined, rows);
    });
  }

  actions.resetExpanded = 'resetExpanded';
  actions.toggleRowExpanded = 'toggleRowExpanded';
  actions.toggleAllRowsExpanded = 'toggleAllRowsExpanded';
  var useExpanded = function useExpanded(hooks) {
    hooks.getToggleAllRowsExpandedProps = [defaultGetToggleAllRowsExpandedProps];
    hooks.getToggleRowExpandedProps = [defaultGetToggleRowExpandedProps];
    hooks.stateReducers.push(reducer$1);
    hooks.useInstance.push(useInstance$1);
    hooks.prepareRow.push(prepareRow);
  };
  useExpanded.pluginName = 'useExpanded';

  var defaultGetToggleAllRowsExpandedProps = function defaultGetToggleAllRowsExpandedProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      onClick: function onClick(e) {
        instance.toggleAllRowsExpanded();
      },
      style: {
        cursor: 'pointer'
      },
      title: 'Toggle All Rows Expanded'
    }];
  };

  var defaultGetToggleRowExpandedProps = function defaultGetToggleRowExpandedProps(props, _ref2) {
    var row = _ref2.row;
    return [props, {
      onClick: function onClick() {
        row.toggleRowExpanded();
      },
      style: {
        cursor: 'pointer'
      },
      title: 'Toggle Row Expanded'
    }];
  }; // Reducer


  function reducer$1(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        expanded: {}
      }, state);
    }

    if (action.type === actions.resetExpanded) {
      return _extends({}, state, {
        expanded: instance.initialState.expanded || {}
      });
    }

    if (action.type === actions.toggleAllRowsExpanded) {
      var value = action.value;
      var isAllRowsExpanded = instance.isAllRowsExpanded,
          rowsById = instance.rowsById;
      var expandAll = typeof value !== 'undefined' ? value : !isAllRowsExpanded;

      if (expandAll) {
        var expanded = {};
        Object.keys(rowsById).forEach(function (rowId) {
          expanded[rowId] = true;
        });
        return _extends({}, state, {
          expanded: expanded
        });
      }

      return _extends({}, state, {
        expanded: {}
      });
    }

    if (action.type === actions.toggleRowExpanded) {
      var id = action.id,
          setExpanded = action.value;
      var exists = state.expanded[id];
      var shouldExist = typeof setExpanded !== 'undefined' ? setExpanded : !exists;

      if (!exists && shouldExist) {
        var _extends2;

        return _extends({}, state, {
          expanded: _extends({}, state.expanded, (_extends2 = {}, _extends2[id] = true, _extends2))
        });
      } else if (exists && !shouldExist) {
        var _state$expanded = state.expanded,
            _ = _state$expanded[id],
            rest = _objectWithoutPropertiesLoose(_state$expanded, [id].map(_toPropertyKey));

        return _extends({}, state, {
          expanded: rest
        });
      } else {
        return state;
      }
    }
  }

  function useInstance$1(instance) {
    var data = instance.data,
        rows = instance.rows,
        rowsById = instance.rowsById,
        _instance$manualExpan = instance.manualExpandedKey,
        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
        _instance$paginateExp = instance.paginateExpandedRows,
        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
        _instance$expandSubRo = instance.expandSubRows,
        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
        _instance$autoResetEx = instance.autoResetExpanded,
        autoResetExpanded = _instance$autoResetEx === void 0 ? true : _instance$autoResetEx,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        expanded = instance.state.expanded,
        dispatch = instance.dispatch;
    ensurePluginOrder(plugins, ['useSortBy', 'useGroupBy', 'usePivotColumns', 'useGlobalFilter'], 'useExpanded');
    var getAutoResetExpanded = useGetLatest(autoResetExpanded);
    var isAllRowsExpanded = Boolean(Object.keys(rowsById).length && Object.keys(expanded).length);

    if (isAllRowsExpanded) {
      if (Object.keys(rowsById).some(function (id) {
        return !expanded[id];
      })) {
        isAllRowsExpanded = false;
      }
    } // Bypass any effects from firing when this changes


    useMountedLayoutEffect(function () {
      if (getAutoResetExpanded()) {
        dispatch({
          type: actions.resetExpanded
        });
      }
    }, [dispatch, data]);
    var toggleRowExpanded = React.useCallback(function (id, value) {
      dispatch({
        type: actions.toggleRowExpanded,
        id: id,
        value: value
      });
    }, [dispatch]);
    var toggleAllRowsExpanded = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllRowsExpanded,
        value: value
      });
    }, [dispatch]);
    var expandedRows = React.useMemo(function () {
      if (paginateExpandedRows) {
        return expandRows(rows, {
          manualExpandedKey: manualExpandedKey,
          expanded: expanded,
          expandSubRows: expandSubRows
        });
      }

      return rows;
    }, [paginateExpandedRows, rows, manualExpandedKey, expanded, expandSubRows]);
    var expandedDepth = React.useMemo(function () {
      return findExpandedDepth(expanded);
    }, [expanded]);
    var getInstance = useGetLatest(instance);
    var getToggleAllRowsExpandedProps = makePropGetter(getHooks().getToggleAllRowsExpandedProps, {
      instance: getInstance()
    });
    Object.assign(instance, {
      preExpandedRows: rows,
      expandedRows: expandedRows,
      rows: expandedRows,
      expandedDepth: expandedDepth,
      isAllRowsExpanded: isAllRowsExpanded,
      toggleRowExpanded: toggleRowExpanded,
      toggleAllRowsExpanded: toggleAllRowsExpanded,
      getToggleAllRowsExpandedProps: getToggleAllRowsExpandedProps
    });
  }

  function prepareRow(row, _ref3) {
    var getHooks = _ref3.instance.getHooks,
        instance = _ref3.instance;

    row.toggleRowExpanded = function (set) {
      return instance.toggleRowExpanded(row.id, set);
    };

    row.getToggleRowExpandedProps = makePropGetter(getHooks().getToggleRowExpandedProps, {
      instance: instance,
      row: row
    });
  }

  function findExpandedDepth(expanded) {
    var maxDepth = 0;
    Object.keys(expanded).forEach(function (id) {
      var splitId = id.split('.');
      maxDepth = Math.max(maxDepth, splitId.length);
    });
    return maxDepth;
  }

  var text = function text(rows, ids, filterValue) {
    rows = rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase());
      });
    });
    return rows;
  };

  text.autoRemove = function (val) {
    return !val;
  };

  var exactText = function exactText(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue).toLowerCase() === String(filterValue).toLowerCase() : true;
      });
    });
  };

  exactText.autoRemove = function (val) {
    return !val;
  };

  var exactTextCase = function exactTextCase(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue !== undefined ? String(rowValue) === String(filterValue) : true;
      });
    });
  };

  exactTextCase.autoRemove = function (val) {
    return !val;
  };

  var includes = function includes(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue.includes(filterValue);
      });
    });
  };

  includes.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesAll = function includesAll(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue && rowValue.length && filterValue.every(function (val) {
          return rowValue.includes(val);
        });
      });
    });
  };

  includesAll.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesSome = function includesSome(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue && rowValue.length && filterValue.some(function (val) {
          return rowValue.includes(val);
        });
      });
    });
  };

  includesSome.autoRemove = function (val) {
    return !val || !val.length;
  };

  var includesValue = function includesValue(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return filterValue.includes(rowValue);
      });
    });
  };

  includesValue.autoRemove = function (val) {
    return !val || !val.length;
  };

  var exact = function exact(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue === filterValue;
      });
    });
  };

  exact.autoRemove = function (val) {
    return typeof val === 'undefined';
  };

  var equals = function equals(rows, ids, filterValue) {
    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id]; // eslint-disable-next-line eqeqeq

        return rowValue == filterValue;
      });
    });
  };

  equals.autoRemove = function (val) {
    return val == null;
  };

  var between = function between(rows, ids, filterValue) {
    var _ref = filterValue || [],
        min = _ref[0],
        max = _ref[1];

    min = typeof min === 'number' ? min : -Infinity;
    max = typeof max === 'number' ? max : Infinity;

    if (min > max) {
      var temp = min;
      min = max;
      max = temp;
    }

    return rows.filter(function (row) {
      return ids.some(function (id) {
        var rowValue = row.values[id];
        return rowValue >= min && rowValue <= max;
      });
    });
  };

  between.autoRemove = function (val) {
    return !val || typeof val[0] !== 'number' && typeof val[1] !== 'number';
  };

  var filterTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    text: text,
    exactText: exactText,
    exactTextCase: exactTextCase,
    includes: includes,
    includesAll: includesAll,
    includesSome: includesSome,
    includesValue: includesValue,
    exact: exact,
    equals: equals,
    between: between
  });

  actions.resetFilters = 'resetFilters';
  actions.setFilter = 'setFilter';
  actions.setAllFilters = 'setAllFilters';
  var useFilters = function useFilters(hooks) {
    hooks.stateReducers.push(reducer$2);
    hooks.useInstance.push(useInstance$2);
  };
  useFilters.pluginName = 'useFilters';

  function reducer$2(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        filters: []
      }, state);
    }

    if (action.type === actions.resetFilters) {
      return _extends({}, state, {
        filters: instance.initialState.filters || []
      });
    }

    if (action.type === actions.setFilter) {
      var columnId = action.columnId,
          filterValue = action.filterValue;
      var allColumns = instance.allColumns,
          userFilterTypes = instance.filterTypes;
      var column = allColumns.find(function (d) {
        return d.id === columnId;
      });

      if (!column) {
        throw new Error("React-Table: Could not find a column with id: " + columnId);
      }

      var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);
      var previousfilter = state.filters.find(function (d) {
        return d.id === columnId;
      });
      var newFilter = functionalUpdate(filterValue, previousfilter && previousfilter.value); //

      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter, column)) {
        return _extends({}, state, {
          filters: state.filters.filter(function (d) {
            return d.id !== columnId;
          })
        });
      }

      if (previousfilter) {
        return _extends({}, state, {
          filters: state.filters.map(function (d) {
            if (d.id === columnId) {
              return {
                id: columnId,
                value: newFilter
              };
            }

            return d;
          })
        });
      }

      return _extends({}, state, {
        filters: [].concat(state.filters, [{
          id: columnId,
          value: newFilter
        }])
      });
    }

    if (action.type === actions.setAllFilters) {
      var filters = action.filters;
      var _allColumns = instance.allColumns,
          _userFilterTypes = instance.filterTypes;
      return _extends({}, state, {
        // Filter out undefined values
        filters: functionalUpdate(filters, state.filters).filter(function (filter) {
          var column = _allColumns.find(function (d) {
            return d.id === filter.id;
          });

          var filterMethod = getFilterMethod(column.filter, _userFilterTypes || {}, filterTypes);

          if (shouldAutoRemoveFilter(filterMethod.autoRemove, filter.value, column)) {
            return false;
          }

          return true;
        })
      });
    }
  }

  function useInstance$2(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes,
        manualFilters = instance.manualFilters,
        _instance$defaultCanF = instance.defaultCanFilter,
        defaultCanFilter = _instance$defaultCanF === void 0 ? false : _instance$defaultCanF,
        disableFilters = instance.disableFilters,
        filters = instance.state.filters,
        dispatch = instance.dispatch,
        _instance$autoResetFi = instance.autoResetFilters,
        autoResetFilters = _instance$autoResetFi === void 0 ? true : _instance$autoResetFi;
    var setFilter = React.useCallback(function (columnId, filterValue) {
      dispatch({
        type: actions.setFilter,
        columnId: columnId,
        filterValue: filterValue
      });
    }, [dispatch]);
    var setAllFilters = React.useCallback(function (filters) {
      dispatch({
        type: actions.setAllFilters,
        filters: filters
      });
    }, [dispatch]);
    allColumns.forEach(function (column) {
      var id = column.id,
          accessor = column.accessor,
          columnDefaultCanFilter = column.defaultCanFilter,
          columnDisableFilters = column.disableFilters; // Determine if a column is filterable

      column.canFilter = accessor ? getFirstDefined(columnDisableFilters === true ? false : undefined, disableFilters === true ? false : undefined, true) : getFirstDefined(columnDefaultCanFilter, defaultCanFilter, false); // Provide the column a way of updating the filter value

      column.setFilter = function (val) {
        return setFilter(column.id, val);
      }; // Provide the current filter value to the column for
      // convenience


      var found = filters.find(function (d) {
        return d.id === id;
      });
      column.filterValue = found && found.value;
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualFilters || !filters.length) {
        return [rows, flatRows, rowsById];
      }

      var filteredFlatRows = [];
      var filteredRowsById = {}; // Filters top level and nested rows

      var filterRows = function filterRows(rows, depth) {
        if (depth === void 0) {
          depth = 0;
        }

        var filteredRows = rows;
        filteredRows = filters.reduce(function (filteredSoFar, _ref) {
          var columnId = _ref.id,
              filterValue = _ref.value;
          // Find the filters column
          var column = allColumns.find(function (d) {
            return d.id === columnId;
          });

          if (!column) {
            return filteredSoFar;
          }

          if (depth === 0) {
            column.preFilteredRows = filteredSoFar;
          }

          var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);

          if (!filterMethod) {
            console.warn("Could not find a valid 'column.filter' for column with the ID: " + column.id + ".");
            return filteredSoFar;
          } // Pass the rows, id, filterValue and column to the filterMethod
          // to get the filtered rows back


          column.filteredRows = filterMethod(filteredSoFar, [columnId], filterValue);
          return column.filteredRows;
        }, rows); // Apply the filter to any subRows
        // We technically could do this recursively in the above loop,
        // but that would severely hinder the API for the user, since they
        // would be required to do that recursion in some scenarios

        filteredRows.forEach(function (row) {
          filteredFlatRows.push(row);
          filteredRowsById[row.id] = row;

          if (!row.subRows) {
            return;
          }

          row.subRows = row.subRows && row.subRows.length > 0 ? filterRows(row.subRows, depth + 1) : row.subRows;
        });
        return filteredRows;
      };

      return [filterRows(rows), filteredFlatRows, filteredRowsById];
    }, [manualFilters, filters, rows, flatRows, rowsById, allColumns, userFilterTypes]),
        filteredRows = _React$useMemo[0],
        filteredFlatRows = _React$useMemo[1],
        filteredRowsById = _React$useMemo[2];

    React.useMemo(function () {
      // Now that each filtered column has it's partially filtered rows,
      // lets assign the final filtered rows to all of the other columns
      var nonFilteredColumns = allColumns.filter(function (column) {
        return !filters.find(function (d) {
          return d.id === column.id;
        });
      }); // This essentially enables faceted filter options to be built easily
      // using every column's preFilteredRows value

      nonFilteredColumns.forEach(function (column) {
        column.preFilteredRows = filteredRows;
        column.filteredRows = filteredRows;
      });
    }, [filteredRows, filters, allColumns]);
    var getAutoResetFilters = useGetLatest(autoResetFilters);
    useMountedLayoutEffect(function () {
      if (getAutoResetFilters()) {
        dispatch({
          type: actions.resetFilters
        });
      }
    }, [dispatch, manualFilters ? null : data]);
    Object.assign(instance, {
      preFilteredRows: rows,
      preFilteredFlatRows: flatRows,
      preFilteredRowsById: rowsById,
      filteredRows: filteredRows,
      filteredFlatRows: filteredFlatRows,
      filteredRowsById: filteredRowsById,
      rows: filteredRows,
      flatRows: filteredFlatRows,
      rowsById: filteredRowsById,
      setFilter: setFilter,
      setAllFilters: setAllFilters
    });
  }

  actions.resetGlobalFilter = 'resetGlobalFilter';
  actions.setGlobalFilter = 'setGlobalFilter';
  var useGlobalFilter = function useGlobalFilter(hooks) {
    hooks.stateReducers.push(reducer$3);
    hooks.useInstance.push(useInstance$3);
  };
  useGlobalFilter.pluginName = 'useGlobalFilter';

  function reducer$3(state, action, previousState, instance) {
    if (action.type === actions.resetGlobalFilter) {
      return _extends({}, state, {
        globalFilter: instance.initialState.globalFilter || undefined
      });
    }

    if (action.type === actions.setGlobalFilter) {
      var filterValue = action.filterValue;
      var userFilterTypes = instance.userFilterTypes;
      var filterMethod = getFilterMethod(instance.globalFilter, userFilterTypes || {}, filterTypes);
      var newFilter = functionalUpdate(filterValue, state.globalFilter); //

      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter)) {
        var globalFilter = state.globalFilter,
            stateWithoutGlobalFilter = _objectWithoutPropertiesLoose(state, ["globalFilter"]);

        return stateWithoutGlobalFilter;
      }

      return _extends({}, state, {
        globalFilter: newFilter
      });
    }
  }

  function useInstance$3(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        userFilterTypes = instance.filterTypes,
        globalFilter = instance.globalFilter,
        manualGlobalFilter = instance.manualGlobalFilter,
        globalFilterValue = instance.state.globalFilter,
        dispatch = instance.dispatch,
        _instance$autoResetGl = instance.autoResetGlobalFilter,
        autoResetGlobalFilter = _instance$autoResetGl === void 0 ? true : _instance$autoResetGl,
        disableGlobalFilter = instance.disableGlobalFilter;
    var setGlobalFilter = React.useCallback(function (filterValue) {
      dispatch({
        type: actions.setGlobalFilter,
        filterValue: filterValue
      });
    }, [dispatch]); // TODO: Create a filter cache for incremental high speed multi-filtering
    // This gets pretty complicated pretty fast, since you have to maintain a
    // cache for each row group (top-level rows, and each row's recursive subrows)
    // This would make multi-filtering a lot faster though. Too far?

    var _React$useMemo = React.useMemo(function () {
      if (manualGlobalFilter || typeof globalFilterValue === 'undefined') {
        return [rows, flatRows, rowsById];
      }

      var filteredFlatRows = [];
      var filteredRowsById = {};
      var filterMethod = getFilterMethod(globalFilter, userFilterTypes || {}, filterTypes);

      if (!filterMethod) {
        console.warn("Could not find a valid 'globalFilter' option.");
        return rows;
      }

      allColumns.forEach(function (column) {
        var columnDisableGlobalFilter = column.disableGlobalFilter;
        column.canFilter = getFirstDefined(columnDisableGlobalFilter === true ? false : undefined, disableGlobalFilter === true ? false : undefined, true);
      });
      var filterableColumns = allColumns.filter(function (c) {
        return c.canFilter === true;
      }); // Filters top level and nested rows

      var filterRows = function filterRows(filteredRows) {
        filteredRows = filterMethod(filteredRows, filterableColumns.map(function (d) {
          return d.id;
        }), globalFilterValue);
        filteredRows.forEach(function (row) {
          filteredFlatRows.push(row);
          filteredRowsById[row.id] = row;
          row.subRows = row.subRows && row.subRows.length ? filterRows(row.subRows) : row.subRows;
        });
        return filteredRows;
      };

      return [filterRows(rows), filteredFlatRows, filteredRowsById];
    }, [manualGlobalFilter, globalFilterValue, globalFilter, userFilterTypes, allColumns, rows, flatRows, rowsById, disableGlobalFilter]),
        globalFilteredRows = _React$useMemo[0],
        globalFilteredFlatRows = _React$useMemo[1],
        globalFilteredRowsById = _React$useMemo[2];

    var getAutoResetGlobalFilter = useGetLatest(autoResetGlobalFilter);
    useMountedLayoutEffect(function () {
      if (getAutoResetGlobalFilter()) {
        dispatch({
          type: actions.resetGlobalFilter
        });
      }
    }, [dispatch, manualGlobalFilter ? null : data]);
    Object.assign(instance, {
      preGlobalFilteredRows: rows,
      preGlobalFilteredFlatRows: flatRows,
      preGlobalFilteredRowsById: rowsById,
      globalFilteredRows: globalFilteredRows,
      globalFilteredFlatRows: globalFilteredFlatRows,
      globalFilteredRowsById: globalFilteredRowsById,
      rows: globalFilteredRows,
      flatRows: globalFilteredFlatRows,
      rowsById: globalFilteredRowsById,
      setGlobalFilter: setGlobalFilter,
      disableGlobalFilter: disableGlobalFilter
    });
  }

  function sum(values, aggregatedValues) {
    // It's faster to just add the aggregations together instead of
    // process leaf nodes individually
    return aggregatedValues.reduce(function (sum, next) {
      return sum + (typeof next === 'number' ? next : 0);
    }, 0);
  }
  function min(values) {
    var min = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
      }
    });
    return min;
  }
  function max(values) {
    var max = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        max = Math.max(max, value);
      }
    });
    return max;
  }
  function minMax(values) {
    var min = values[0] || 0;
    var max = values[0] || 0;
    values.forEach(function (value) {
      if (typeof value === 'number') {
        min = Math.min(min, value);
        max = Math.max(max, value);
      }
    });
    return min + ".." + max;
  }
  function average(values) {
    return sum(null, values) / values.length;
  }
  function median(values) {
    if (!values.length) {
      return null;
    }

    var mid = Math.floor(values.length / 2);
    var nums = [].concat(values).sort(function (a, b) {
      return a - b;
    });
    return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }
  function unique(values) {
    return Array.from(new Set(values).values());
  }
  function uniqueCount(values) {
    return new Set(values).size;
  }
  function count(values) {
    return values.length;
  }

  var aggregations = /*#__PURE__*/Object.freeze({
    __proto__: null,
    sum: sum,
    min: min,
    max: max,
    minMax: minMax,
    average: average,
    median: median,
    unique: unique,
    uniqueCount: uniqueCount,
    count: count
  });

  var emptyArray = [];
  var emptyObject = {}; // Actions

  actions.resetGroupBy = 'resetGroupBy';
  actions.setGroupBy = 'setGroupBy';
  actions.toggleGroupBy = 'toggleGroupBy';
  var useGroupBy = function useGroupBy(hooks) {
    hooks.getGroupByToggleProps = [defaultGetGroupByToggleProps];
    hooks.stateReducers.push(reducer$4);
    hooks.visibleColumnsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.groupBy]);
    });
    hooks.visibleColumns.push(visibleColumns);
    hooks.useInstance.push(useInstance$4);
    hooks.prepareRow.push(prepareRow$1);
  };
  useGroupBy.pluginName = 'useGroupBy';

  var defaultGetGroupByToggleProps = function defaultGetGroupByToggleProps(props, _ref2) {
    var header = _ref2.header;
    return [props, {
      onClick: header.canGroupBy ? function (e) {
        e.persist();
        header.toggleGroupBy();
      } : undefined,
      style: {
        cursor: header.canGroupBy ? 'pointer' : undefined
      },
      title: 'Toggle GroupBy'
    }];
  }; // Reducer


  function reducer$4(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        groupBy: []
      }, state);
    }

    if (action.type === actions.resetGroupBy) {
      return _extends({}, state, {
        groupBy: instance.initialState.groupBy || []
      });
    }

    if (action.type === actions.setGroupBy) {
      var value = action.value;
      return _extends({}, state, {
        groupBy: value
      });
    }

    if (action.type === actions.toggleGroupBy) {
      var columnId = action.columnId,
          setGroupBy = action.value;
      var resolvedGroupBy = typeof setGroupBy !== 'undefined' ? setGroupBy : !state.groupBy.includes(columnId);

      if (resolvedGroupBy) {
        return _extends({}, state, {
          groupBy: [].concat(state.groupBy, [columnId])
        });
      }

      return _extends({}, state, {
        groupBy: state.groupBy.filter(function (d) {
          return d !== columnId;
        })
      });
    }
  }

  function visibleColumns(columns, _ref3) {
    var groupBy = _ref3.instance.state.groupBy;
    // Sort grouped columns to the start of the column list
    // before the headers are built
    var groupByColumns = groupBy.map(function (g) {
      return columns.find(function (col) {
        return col.id === g;
      });
    }).filter(Boolean);
    var nonGroupByColumns = columns.filter(function (col) {
      return !groupBy.includes(col.id);
    });
    columns = [].concat(groupByColumns, nonGroupByColumns);
    columns.forEach(function (column) {
      column.isGrouped = groupBy.includes(column.id);
      column.groupedIndex = groupBy.indexOf(column.id);
    });
    return columns;
  }

  var defaultUserAggregations = {};

  function useInstance$4(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        rowsById = instance.rowsById,
        allColumns = instance.allColumns,
        flatHeaders = instance.flatHeaders,
        _instance$groupByFn = instance.groupByFn,
        groupByFn = _instance$groupByFn === void 0 ? defaultGroupByFn : _instance$groupByFn,
        manualGroupBy = instance.manualGroupBy,
        _instance$aggregation = instance.aggregations,
        userAggregations = _instance$aggregation === void 0 ? defaultUserAggregations : _instance$aggregation,
        plugins = instance.plugins,
        groupBy = instance.state.groupBy,
        dispatch = instance.dispatch,
        _instance$autoResetGr = instance.autoResetGroupBy,
        autoResetGroupBy = _instance$autoResetGr === void 0 ? true : _instance$autoResetGr,
        disableGroupBy = instance.disableGroupBy,
        defaultCanGroupBy = instance.defaultCanGroupBy,
        getHooks = instance.getHooks;
    ensurePluginOrder(plugins, ['useColumnOrder', 'useFilters'], 'useGroupBy');
    var getInstance = useGetLatest(instance);
    allColumns.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnGroupBy = column.defaultGroupBy,
          columnDisableGroupBy = column.disableGroupBy;
      column.canGroupBy = accessor ? getFirstDefined(column.canGroupBy, columnDisableGroupBy === true ? false : undefined, disableGroupBy === true ? false : undefined, true) : getFirstDefined(column.canGroupBy, defaultColumnGroupBy, defaultCanGroupBy, false);

      if (column.canGroupBy) {
        column.toggleGroupBy = function () {
          return instance.toggleGroupBy(column.id);
        };
      }

      column.Aggregated = column.Aggregated || column.Cell;
    });
    var toggleGroupBy = React.useCallback(function (columnId, value) {
      dispatch({
        type: actions.toggleGroupBy,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var setGroupBy = React.useCallback(function (value) {
      dispatch({
        type: actions.setGroupBy,
        value: value
      });
    }, [dispatch]);
    flatHeaders.forEach(function (header) {
      header.getGroupByToggleProps = makePropGetter(getHooks().getGroupByToggleProps, {
        instance: getInstance(),
        header: header
      });
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualGroupBy || !groupBy.length) {
        return [rows, flatRows, rowsById, emptyArray, emptyObject, flatRows, rowsById];
      } // Ensure that the list of filtered columns exist


      var existingGroupBy = groupBy.filter(function (g) {
        return allColumns.find(function (col) {
          return col.id === g;
        });
      }); // Find the columns that can or are aggregating
      // Uses each column to aggregate rows into a single value

      var aggregateRowsToValues = function aggregateRowsToValues(leafRows, groupedRows, depth) {
        var values = {};
        allColumns.forEach(function (column) {
          // Don't aggregate columns that are in the groupBy
          if (existingGroupBy.includes(column.id)) {
            values[column.id] = groupedRows[0] ? groupedRows[0].values[column.id] : null;
            return;
          } // Aggregate the values


          var aggregateFn = typeof column.aggregate === 'function' ? column.aggregate : userAggregations[column.aggregate] || aggregations[column.aggregate];

          if (aggregateFn) {
            // Get the columnValues to aggregate
            var groupedValues = groupedRows.map(function (row) {
              return row.values[column.id];
            }); // Get the columnValues to aggregate

            var leafValues = leafRows.map(function (row) {
              var columnValue = row.values[column.id];

              if (!depth && column.aggregateValue) {
                var aggregateValueFn = typeof column.aggregateValue === 'function' ? column.aggregateValue : userAggregations[column.aggregateValue] || aggregations[column.aggregateValue];

                if (!aggregateValueFn) {
                  console.info({
                    column: column
                  });
                  throw new Error("React Table: Invalid column.aggregateValue option for column listed above");
                }

                columnValue = aggregateValueFn(columnValue, row, column);
              }

              return columnValue;
            });
            values[column.id] = aggregateFn(leafValues, groupedValues);
          } else if (column.aggregate) {
            console.info({
              column: column
            });
            throw new Error("React Table: Invalid column.aggregate option for column listed above");
          } else {
            values[column.id] = null;
          }
        });
        return values;
      };

      var groupedFlatRows = [];
      var groupedRowsById = {};
      var onlyGroupedFlatRows = [];
      var onlyGroupedRowsById = {};
      var nonGroupedFlatRows = [];
      var nonGroupedRowsById = {}; // Recursively group the data

      var groupUpRecursively = function groupUpRecursively(rows, depth, parentId) {
        if (depth === void 0) {
          depth = 0;
        }

        // This is the last level, just return the rows
        if (depth === existingGroupBy.length) {
          return rows;
        }

        var columnId = existingGroupBy[depth]; // Group the rows together for this level

        var rowGroupsMap = groupByFn(rows, columnId); // Peform aggregations for each group

        var aggregatedGroupedRows = Object.entries(rowGroupsMap).map(function (_ref4, index) {
          var groupByVal = _ref4[0],
              groupedRows = _ref4[1];
          var id = columnId + ":" + groupByVal;
          id = parentId ? parentId + ">" + id : id; // First, Recurse to group sub rows before aggregation

          var subRows = groupUpRecursively(groupedRows, depth + 1, id); // Flatten the leaf rows of the rows in this group

          var leafRows = depth ? flattenBy(groupedRows, 'leafRows') : groupedRows;
          var values = aggregateRowsToValues(leafRows, groupedRows, depth);
          var row = {
            id: id,
            isGrouped: true,
            groupByID: columnId,
            groupByVal: groupByVal,
            values: values,
            subRows: subRows,
            leafRows: leafRows,
            depth: depth,
            index: index
          };
          subRows.forEach(function (subRow) {
            groupedFlatRows.push(subRow);
            groupedRowsById[subRow.id] = subRow;

            if (subRow.isGrouped) {
              onlyGroupedFlatRows.push(subRow);
              onlyGroupedRowsById[subRow.id] = subRow;
            } else {
              nonGroupedFlatRows.push(subRow);
              nonGroupedRowsById[subRow.id] = subRow;
            }
          });
          return row;
        });
        return aggregatedGroupedRows;
      };

      var groupedRows = groupUpRecursively(rows);
      groupedRows.forEach(function (subRow) {
        groupedFlatRows.push(subRow);
        groupedRowsById[subRow.id] = subRow;

        if (subRow.isGrouped) {
          onlyGroupedFlatRows.push(subRow);
          onlyGroupedRowsById[subRow.id] = subRow;
        } else {
          nonGroupedFlatRows.push(subRow);
          nonGroupedRowsById[subRow.id] = subRow;
        }
      }); // Assign the new data

      return [groupedRows, groupedFlatRows, groupedRowsById, onlyGroupedFlatRows, onlyGroupedRowsById, nonGroupedFlatRows, nonGroupedRowsById];
    }, [manualGroupBy, groupBy, rows, flatRows, rowsById, allColumns, userAggregations, groupByFn]),
        groupedRows = _React$useMemo[0],
        groupedFlatRows = _React$useMemo[1],
        groupedRowsById = _React$useMemo[2],
        onlyGroupedFlatRows = _React$useMemo[3],
        onlyGroupedRowsById = _React$useMemo[4],
        nonGroupedFlatRows = _React$useMemo[5],
        nonGroupedRowsById = _React$useMemo[6];

    var getAutoResetGroupBy = useGetLatest(autoResetGroupBy);
    useMountedLayoutEffect(function () {
      if (getAutoResetGroupBy()) {
        dispatch({
          type: actions.resetGroupBy
        });
      }
    }, [dispatch, manualGroupBy ? null : data]);
    Object.assign(instance, {
      preGroupedRows: rows,
      preGroupedFlatRow: flatRows,
      preGroupedRowsById: rowsById,
      groupedRows: groupedRows,
      groupedFlatRows: groupedFlatRows,
      groupedRowsById: groupedRowsById,
      onlyGroupedFlatRows: onlyGroupedFlatRows,
      onlyGroupedRowsById: onlyGroupedRowsById,
      nonGroupedFlatRows: nonGroupedFlatRows,
      nonGroupedRowsById: nonGroupedRowsById,
      rows: groupedRows,
      flatRows: groupedFlatRows,
      rowsById: groupedRowsById,
      toggleGroupBy: toggleGroupBy,
      setGroupBy: setGroupBy
    });
  }

  function prepareRow$1(row) {
    row.allCells.forEach(function (cell) {
      var _row$subRows;

      // Grouped cells are in the groupBy and the pivot cell for the row
      cell.isGrouped = cell.column.isGrouped && cell.column.id === row.groupByID; // Placeholder cells are any columns in the groupBy that are not grouped

      cell.isPlaceholder = !cell.isGrouped && cell.column.isGrouped; // Aggregated cells are not grouped, not repeated, but still have subRows

      cell.isAggregated = !cell.isGrouped && !cell.isPlaceholder && ((_row$subRows = row.subRows) == null ? void 0 : _row$subRows.length);
    });
  }

  function defaultGroupByFn(rows, columnId) {
    return rows.reduce(function (prev, row, i) {
      // TODO: Might want to implement a key serializer here so
      // irregular column values can still be grouped if needed?
      var resKey = "" + row.values[columnId];
      prev[resKey] = Array.isArray(prev[resKey]) ? prev[resKey] : [];
      prev[resKey].push(row);
      return prev;
    }, {});
  }

  var reSplitAlphaNumeric = /([0-9]+)/gm; // Mixed sorting is slow, but very inclusive of many edge cases.
  // It handles numbers, mixed alphanumeric combinations, and even
  // null, undefined, and Infinity

  var alphanumeric = function alphanumeric(rowA, rowB, columnId) {
    var a = getRowValueByColumnID(rowA, columnId);
    var b = getRowValueByColumnID(rowB, columnId); // Force to strings (or "" for unsupported types)

    a = toString(a);
    b = toString(b); // Split on number groups, but keep the delimiter
    // Then remove falsey split values

    a = a.split(reSplitAlphaNumeric).filter(Boolean);
    b = b.split(reSplitAlphaNumeric).filter(Boolean); // While

    while (a.length && b.length) {
      var aa = a.shift();
      var bb = b.shift();
      var an = parseInt(aa, 10);
      var bn = parseInt(bb, 10);
      var combo = [an, bn].sort(); // Both are string

      if (isNaN(combo[0])) {
        if (aa > bb) {
          return 1;
        }

        if (bb > aa) {
          return -1;
        }

        continue;
      } // One is a string, one is a number


      if (isNaN(combo[1])) {
        return isNaN(an) ? -1 : 1;
      } // Both are numbers


      if (an > bn) {
        return 1;
      }

      if (bn > an) {
        return -1;
      }
    }

    return a.length - b.length;
  };
  function datetime(rowA, rowB, columnId) {
    var a = getRowValueByColumnID(rowA, columnId);
    var b = getRowValueByColumnID(rowB, columnId);
    a = a.getTime();
    b = b.getTime();
    return compareBasic(a, b);
  }
  function basic(rowA, rowB, columnId) {
    var a = getRowValueByColumnID(rowA, columnId);
    var b = getRowValueByColumnID(rowB, columnId);
    return compareBasic(a, b);
  } // Utils

  function compareBasic(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  }

  function getRowValueByColumnID(row, columnId) {
    return row.values[columnId];
  }

  function toString(a) {
    if (typeof a === 'number') {
      if (isNaN(a) || a === Infinity || a === -Infinity) {
        return '';
      }

      return String(a);
    }

    if (typeof a === 'string') {
      return a;
    }

    return '';
  }

  var sortTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    alphanumeric: alphanumeric,
    datetime: datetime,
    basic: basic
  });

  actions.resetSortBy = 'resetSortBy';
  actions.setSortBy = 'setSortBy';
  actions.toggleSortBy = 'toggleSortBy';
  actions.clearSortBy = 'clearSortBy';
  defaultColumn.sortType = 'alphanumeric';
  defaultColumn.sortDescFirst = false;
  var useSortBy = function useSortBy(hooks) {
    hooks.getSortByToggleProps = [defaultGetSortByToggleProps];
    hooks.stateReducers.push(reducer$5);
    hooks.useInstance.push(useInstance$5);
  };
  useSortBy.pluginName = 'useSortBy';

  var defaultGetSortByToggleProps = function defaultGetSortByToggleProps(props, _ref) {
    var instance = _ref.instance,
        column = _ref.column;
    var _instance$isMultiSort = instance.isMultiSortEvent,
        isMultiSortEvent = _instance$isMultiSort === void 0 ? function (e) {
      return e.shiftKey;
    } : _instance$isMultiSort;
    return [props, {
      onClick: column.canSort ? function (e) {
        e.persist();
        column.toggleSortBy(undefined, !instance.disableMultiSort && isMultiSortEvent(e));
      } : undefined,
      style: {
        cursor: column.canSort ? 'pointer' : undefined
      },
      title: column.canSort ? 'Toggle SortBy' : undefined
    }];
  }; // Reducer


  function reducer$5(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        sortBy: []
      }, state);
    }

    if (action.type === actions.resetSortBy) {
      return _extends({}, state, {
        sortBy: instance.initialState.sortBy || []
      });
    }

    if (action.type === actions.clearSortBy) {
      var sortBy = state.sortBy;
      var newSortBy = sortBy.filter(function (d) {
        return d.id !== action.columnId;
      });
      return _extends({}, state, {
        sortBy: newSortBy
      });
    }

    if (action.type === actions.setSortBy) {
      var _sortBy = action.sortBy;
      return _extends({}, state, {
        sortBy: _sortBy
      });
    }

    if (action.type === actions.toggleSortBy) {
      var columnId = action.columnId,
          desc = action.desc,
          multi = action.multi;
      var allColumns = instance.allColumns,
          disableMultiSort = instance.disableMultiSort,
          disableSortRemove = instance.disableSortRemove,
          disableMultiRemove = instance.disableMultiRemove,
          _instance$maxMultiSor = instance.maxMultiSortColCount,
          maxMultiSortColCount = _instance$maxMultiSor === void 0 ? Number.MAX_SAFE_INTEGER : _instance$maxMultiSor;
      var _sortBy2 = state.sortBy; // Find the column for this columnId

      var column = allColumns.find(function (d) {
        return d.id === columnId;
      });
      var sortDescFirst = column.sortDescFirst; // Find any existing sortBy for this column

      var existingSortBy = _sortBy2.find(function (d) {
        return d.id === columnId;
      });

      var existingIndex = _sortBy2.findIndex(function (d) {
        return d.id === columnId;
      });

      var hasDescDefined = typeof desc !== 'undefined' && desc !== null;
      var _newSortBy = []; // What should we do with this sort action?

      var sortAction;

      if (!disableMultiSort && multi) {
        if (existingSortBy) {
          sortAction = 'toggle';
        } else {
          sortAction = 'add';
        }
      } else {
        // Normal mode
        if (existingIndex !== _sortBy2.length - 1 || _sortBy2.length !== 1) {
          sortAction = 'replace';
        } else if (existingSortBy) {
          sortAction = 'toggle';
        } else {
          sortAction = 'replace';
        }
      } // Handle toggle states that will remove the sortBy


      if (sortAction === 'toggle' && // Must be toggling
      !disableSortRemove && // If disableSortRemove, disable in general
      !hasDescDefined && ( // Must not be setting desc
      multi ? !disableMultiRemove : true) && ( // If multi, don't allow if disableMultiRemove
      existingSortBy && // Finally, detect if it should indeed be removed
      existingSortBy.desc && !sortDescFirst || !existingSortBy.desc && sortDescFirst)) {
        sortAction = 'remove';
      }

      if (sortAction === 'replace') {
        _newSortBy = [{
          id: columnId,
          desc: hasDescDefined ? desc : sortDescFirst
        }];
      } else if (sortAction === 'add') {
        _newSortBy = [].concat(_sortBy2, [{
          id: columnId,
          desc: hasDescDefined ? desc : sortDescFirst
        }]); // Take latest n columns

        _newSortBy.splice(0, _newSortBy.length - maxMultiSortColCount);
      } else if (sortAction === 'toggle') {
        // This flips (or sets) the
        _newSortBy = _sortBy2.map(function (d) {
          if (d.id === columnId) {
            return _extends({}, d, {
              desc: hasDescDefined ? desc : !existingSortBy.desc
            });
          }

          return d;
        });
      } else if (sortAction === 'remove') {
        _newSortBy = _sortBy2.filter(function (d) {
          return d.id !== columnId;
        });
      }

      return _extends({}, state, {
        sortBy: _newSortBy
      });
    }
  }

  function useInstance$5(instance) {
    var data = instance.data,
        rows = instance.rows,
        flatRows = instance.flatRows,
        allColumns = instance.allColumns,
        _instance$orderByFn = instance.orderByFn,
        orderByFn = _instance$orderByFn === void 0 ? defaultOrderByFn : _instance$orderByFn,
        userSortTypes = instance.sortTypes,
        manualSortBy = instance.manualSortBy,
        defaultCanSort = instance.defaultCanSort,
        disableSortBy = instance.disableSortBy,
        flatHeaders = instance.flatHeaders,
        sortBy = instance.state.sortBy,
        dispatch = instance.dispatch,
        plugins = instance.plugins,
        getHooks = instance.getHooks,
        _instance$autoResetSo = instance.autoResetSortBy,
        autoResetSortBy = _instance$autoResetSo === void 0 ? true : _instance$autoResetSo;
    ensurePluginOrder(plugins, ['useFilters', 'useGlobalFilter', 'useGroupBy', 'usePivotColumns'], 'useSortBy');
    var setSortBy = React.useCallback(function (sortBy) {
      dispatch({
        type: actions.setSortBy,
        sortBy: sortBy
      });
    }, [dispatch]); // Updates sorting based on a columnId, desc flag and multi flag

    var toggleSortBy = React.useCallback(function (columnId, desc, multi) {
      dispatch({
        type: actions.toggleSortBy,
        columnId: columnId,
        desc: desc,
        multi: multi
      });
    }, [dispatch]); // use reference to avoid memory leak in #1608

    var getInstance = useGetLatest(instance); // Add the getSortByToggleProps method to columns and headers

    flatHeaders.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnCanSort = column.canSort,
          columnDisableSortBy = column.disableSortBy,
          id = column.id;
      var canSort = accessor ? getFirstDefined(columnDisableSortBy === true ? false : undefined, disableSortBy === true ? false : undefined, true) : getFirstDefined(defaultCanSort, defaultColumnCanSort, false);
      column.canSort = canSort;

      if (column.canSort) {
        column.toggleSortBy = function (desc, multi) {
          return toggleSortBy(column.id, desc, multi);
        };

        column.clearSortBy = function () {
          dispatch({
            type: actions.clearSortBy,
            columnId: column.id
          });
        };
      }

      column.getSortByToggleProps = makePropGetter(getHooks().getSortByToggleProps, {
        instance: getInstance(),
        column: column
      });
      var columnSort = sortBy.find(function (d) {
        return d.id === id;
      });
      column.isSorted = !!columnSort;
      column.sortedIndex = sortBy.findIndex(function (d) {
        return d.id === id;
      });
      column.isSortedDesc = column.isSorted ? columnSort.desc : undefined;
    });

    var _React$useMemo = React.useMemo(function () {
      if (manualSortBy || !sortBy.length) {
        return [rows, flatRows];
      }

      var sortedFlatRows = []; // Filter out sortBys that correspond to non existing columns

      var availableSortBy = sortBy.filter(function (sort) {
        return allColumns.find(function (col) {
          return col.id === sort.id;
        });
      });

      var sortData = function sortData(rows) {
        // Use the orderByFn to compose multiple sortBy's together.
        // This will also perform a stable sorting using the row index
        // if needed.
        var sortedData = orderByFn(rows, availableSortBy.map(function (sort) {
          // Support custom sorting methods for each column
          var column = allColumns.find(function (d) {
            return d.id === sort.id;
          });

          if (!column) {
            throw new Error("React-Table: Could not find a column with id: " + sort.id + " while sorting");
          }

          var sortType = column.sortType; // Look up sortBy functions in this order:
          // column function
          // column string lookup on user sortType
          // column string lookup on built-in sortType
          // default function
          // default string lookup on user sortType
          // default string lookup on built-in sortType

          var sortMethod = isFunction(sortType) || (userSortTypes || {})[sortType] || sortTypes[sortType];

          if (!sortMethod) {
            throw new Error("React-Table: Could not find a valid sortType of '" + sortType + "' for column '" + sort.id + "'.");
          } // Return the correct sortFn.
          // This function should always return in ascending order


          return function (a, b) {
            return sortMethod(a, b, sort.id, sort.desc);
          };
        }), // Map the directions
        availableSortBy.map(function (sort) {
          // Detect and use the sortInverted option
          var column = allColumns.find(function (d) {
            return d.id === sort.id;
          });

          if (column && column.sortInverted) {
            return sort.desc;
          }

          return !sort.desc;
        })); // If there are sub-rows, sort them

        sortedData.forEach(function (row) {
          sortedFlatRows.push(row);

          if (!row.subRows || row.subRows.length === 0) {
            return;
          }

          row.subRows = sortData(row.subRows);
        });
        return sortedData;
      };

      return [sortData(rows), sortedFlatRows];
    }, [manualSortBy, sortBy, rows, flatRows, allColumns, orderByFn, userSortTypes]),
        sortedRows = _React$useMemo[0],
        sortedFlatRows = _React$useMemo[1];

    var getAutoResetSortBy = useGetLatest(autoResetSortBy);
    useMountedLayoutEffect(function () {
      if (getAutoResetSortBy()) {
        dispatch({
          type: actions.resetSortBy
        });
      }
    }, [manualSortBy ? null : data]);
    Object.assign(instance, {
      preSortedRows: rows,
      preSortedFlatRows: flatRows,
      sortedRows: sortedRows,
      sortedFlatRows: sortedFlatRows,
      rows: sortedRows,
      flatRows: sortedFlatRows,
      setSortBy: setSortBy,
      toggleSortBy: toggleSortBy
    });
  }

  function defaultOrderByFn(arr, funcs, dirs) {
    return [].concat(arr).sort(function (rowA, rowB) {
      for (var i = 0; i < funcs.length; i += 1) {
        var sortFn = funcs[i];
        var desc = dirs[i] === false || dirs[i] === 'desc';
        var sortInt = sortFn(rowA, rowB);

        if (sortInt !== 0) {
          return desc ? -sortInt : sortInt;
        }
      }

      return dirs[0] ? rowA.index - rowB.index : rowB.index - rowA.index;
    });
  }

  var pluginName = 'usePagination'; // Actions

  actions.resetPage = 'resetPage';
  actions.gotoPage = 'gotoPage';
  actions.setPageSize = 'setPageSize';
  var usePagination = function usePagination(hooks) {
    hooks.stateReducers.push(reducer$6);
    hooks.useInstance.push(useInstance$6);
  };
  usePagination.pluginName = pluginName;

  function reducer$6(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        pageSize: 10,
        pageIndex: 0
      }, state);
    }

    if (action.type === actions.resetPage) {
      return _extends({}, state, {
        pageIndex: instance.initialState.pageIndex || 0
      });
    }

    if (action.type === actions.gotoPage) {
      var pageCount = instance.pageCount,
          page = instance.page;
      var newPageIndex = functionalUpdate(action.pageIndex, state.pageIndex);
      var canNavigate = false;

      if (newPageIndex > state.pageIndex) {
        // next page
        canNavigate = pageCount === -1 ? page.length >= state.pageSize : newPageIndex < pageCount;
      } else if (newPageIndex < state.pageIndex) {
        // prev page
        canNavigate = newPageIndex > -1;
      }

      if (!canNavigate) {
        return state;
      }

      return _extends({}, state, {
        pageIndex: newPageIndex
      });
    }

    if (action.type === actions.setPageSize) {
      var pageSize = action.pageSize;
      var topRowIndex = state.pageSize * state.pageIndex;
      var pageIndex = Math.floor(topRowIndex / pageSize);
      return _extends({}, state, {
        pageIndex: pageIndex,
        pageSize: pageSize
      });
    }
  }

  function useInstance$6(instance) {
    var rows = instance.rows,
        _instance$autoResetPa = instance.autoResetPage,
        autoResetPage = _instance$autoResetPa === void 0 ? true : _instance$autoResetPa,
        _instance$manualExpan = instance.manualExpandedKey,
        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
        plugins = instance.plugins,
        userPageCount = instance.pageCount,
        _instance$paginateExp = instance.paginateExpandedRows,
        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
        _instance$expandSubRo = instance.expandSubRows,
        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
        _instance$state = instance.state,
        pageSize = _instance$state.pageSize,
        pageIndex = _instance$state.pageIndex,
        expanded = _instance$state.expanded,
        globalFilter = _instance$state.globalFilter,
        filters = _instance$state.filters,
        groupBy = _instance$state.groupBy,
        sortBy = _instance$state.sortBy,
        dispatch = instance.dispatch,
        data = instance.data,
        manualPagination = instance.manualPagination;
    ensurePluginOrder(plugins, ['useGlobalFilter', 'useFilters', 'useGroupBy', 'useSortBy', 'useExpanded'], 'usePagination');
    var getAutoResetPage = useGetLatest(autoResetPage);
    useMountedLayoutEffect(function () {
      if (getAutoResetPage()) {
        dispatch({
          type: actions.resetPage
        });
      }
    }, [dispatch, manualPagination ? null : data, globalFilter, filters, groupBy, sortBy]);
    var pageCount = manualPagination ? userPageCount : Math.ceil(rows.length / pageSize);
    var pageOptions = React.useMemo(function () {
      return pageCount > 0 ? [].concat(new Array(pageCount)).fill(null).map(function (d, i) {
        return i;
      }) : [];
    }, [pageCount]);
    var page = React.useMemo(function () {
      var page;

      if (manualPagination) {
        page = rows;
      } else {
        var pageStart = pageSize * pageIndex;
        var pageEnd = pageStart + pageSize;
        page = rows.slice(pageStart, pageEnd);
      }

      if (paginateExpandedRows) {
        return page;
      }

      return expandRows(page, {
        manualExpandedKey: manualExpandedKey,
        expanded: expanded,
        expandSubRows: expandSubRows
      });
    }, [expandSubRows, expanded, manualExpandedKey, manualPagination, pageIndex, pageSize, paginateExpandedRows, rows]);
    var canPreviousPage = pageIndex > 0;
    var canNextPage = pageCount === -1 ? page.length >= pageSize : pageIndex < pageCount - 1;
    var gotoPage = React.useCallback(function (pageIndex) {
      dispatch({
        type: actions.gotoPage,
        pageIndex: pageIndex
      });
    }, [dispatch]);
    var previousPage = React.useCallback(function () {
      return gotoPage(function (old) {
        return old - 1;
      });
    }, [gotoPage]);
    var nextPage = React.useCallback(function () {
      return gotoPage(function (old) {
        return old + 1;
      });
    }, [gotoPage]);
    var setPageSize = React.useCallback(function (pageSize) {
      dispatch({
        type: actions.setPageSize,
        pageSize: pageSize
      });
    }, [dispatch]);
    Object.assign(instance, {
      pageOptions: pageOptions,
      pageCount: pageCount,
      page: page,
      canPreviousPage: canPreviousPage,
      canNextPage: canNextPage,
      gotoPage: gotoPage,
      previousPage: previousPage,
      nextPage: nextPage,
      setPageSize: setPageSize
    });
  }

  actions.resetPivot = 'resetPivot';
  actions.togglePivot = 'togglePivot';
  var _UNSTABLE_usePivotColumns = function _UNSTABLE_usePivotColumns(hooks) {
    hooks.getPivotToggleProps = [defaultGetPivotToggleProps];
    hooks.stateReducers.push(reducer$7);
    hooks.useInstanceAfterData.push(useInstanceAfterData);
    hooks.allColumns.push(allColumns);
    hooks.accessValue.push(accessValue);
    hooks.materializedColumns.push(materializedColumns);
    hooks.materializedColumnsDeps.push(materializedColumnsDeps);
    hooks.visibleColumns.push(visibleColumns$1);
    hooks.visibleColumnsDeps.push(visibleColumnsDeps);
    hooks.useInstance.push(useInstance$7);
    hooks.prepareRow.push(prepareRow$2);
  };
  _UNSTABLE_usePivotColumns.pluginName = 'usePivotColumns';
  var defaultPivotColumns = [];

  var defaultGetPivotToggleProps = function defaultGetPivotToggleProps(props, _ref) {
    var header = _ref.header;
    return [props, {
      onClick: header.canPivot ? function (e) {
        e.persist();
        header.togglePivot();
      } : undefined,
      style: {
        cursor: header.canPivot ? 'pointer' : undefined
      },
      title: 'Toggle Pivot'
    }];
  }; // Reducer


  function reducer$7(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        pivotColumns: defaultPivotColumns
      }, state);
    }

    if (action.type === actions.resetPivot) {
      return _extends({}, state, {
        pivotColumns: instance.initialState.pivotColumns || defaultPivotColumns
      });
    }

    if (action.type === actions.togglePivot) {
      var columnId = action.columnId,
          setPivot = action.value;
      var resolvedPivot = typeof setPivot !== 'undefined' ? setPivot : !state.pivotColumns.includes(columnId);

      if (resolvedPivot) {
        return _extends({}, state, {
          pivotColumns: [].concat(state.pivotColumns, [columnId])
        });
      }

      return _extends({}, state, {
        pivotColumns: state.pivotColumns.filter(function (d) {
          return d !== columnId;
        })
      });
    }
  }

  function useInstanceAfterData(instance) {
    instance.allColumns.forEach(function (column) {
      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
    });
  }

  function allColumns(columns, _ref2) {
    var instance = _ref2.instance;
    columns.forEach(function (column) {
      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
      column.uniqueValues = new Set();
    });
    return columns;
  }

  function accessValue(value, _ref3) {
    var column = _ref3.column;

    if (column.uniqueValues && typeof value !== 'undefined') {
      column.uniqueValues.add(value);
    }

    return value;
  }

  function materializedColumns(materialized, _ref4) {
    var instance = _ref4.instance;
    var allColumns = instance.allColumns,
        state = instance.state;

    if (!state.pivotColumns.length || !state.groupBy || !state.groupBy.length) {
      return materialized;
    }

    var pivotColumns = state.pivotColumns.map(function (id) {
      return allColumns.find(function (d) {
        return d.id === id;
      });
    }).filter(Boolean);
    var sourceColumns = allColumns.filter(function (d) {
      return !d.isPivotSource && !state.groupBy.includes(d.id) && !state.pivotColumns.includes(d.id);
    });

    var buildPivotColumns = function buildPivotColumns(depth, parent, pivotFilters) {
      if (depth === void 0) {
        depth = 0;
      }

      if (pivotFilters === void 0) {
        pivotFilters = [];
      }

      var pivotColumn = pivotColumns[depth];

      if (!pivotColumn) {
        return sourceColumns.map(function (sourceColumn) {
          // TODO: We could offer support here for renesting pivoted
          // columns inside copies of their header groups. For now,
          // that seems like it would be (1) overkill on nesting, considering
          // you already get nesting for every pivot level and (2)
          // really hard. :)
          return _extends({}, sourceColumn, {
            canPivot: false,
            isPivoted: true,
            parent: parent,
            depth: depth,
            id: "" + (parent ? parent.id + "." + sourceColumn.id : sourceColumn.id),
            accessor: function accessor(originalRow, i, row) {
              if (pivotFilters.every(function (filter) {
                return filter(row);
              })) {
                return row.values[sourceColumn.id];
              }
            }
          });
        });
      }

      var uniqueValues = Array.from(pivotColumn.uniqueValues).sort();
      return uniqueValues.map(function (uniqueValue) {
        var columnGroup = _extends({}, pivotColumn, {
          Header: pivotColumn.PivotHeader || typeof pivotColumn.header === 'string' ? pivotColumn.Header + ": " + uniqueValue : uniqueValue,
          isPivotGroup: true,
          parent: parent,
          depth: depth,
          id: parent ? parent.id + "." + pivotColumn.id + "." + uniqueValue : pivotColumn.id + "." + uniqueValue,
          pivotValue: uniqueValue
        });

        columnGroup.columns = buildPivotColumns(depth + 1, columnGroup, [].concat(pivotFilters, [function (row) {
          return row.values[pivotColumn.id] === uniqueValue;
        }]));
        return columnGroup;
      });
    };

    var newMaterialized = flattenColumns(buildPivotColumns());
    return [].concat(materialized, newMaterialized);
  }

  function materializedColumnsDeps(deps, _ref5) {
    var _ref5$instance$state = _ref5.instance.state,
        pivotColumns = _ref5$instance$state.pivotColumns,
        groupBy = _ref5$instance$state.groupBy;
    return [].concat(deps, [pivotColumns, groupBy]);
  }

  function visibleColumns$1(visibleColumns, _ref6) {
    var state = _ref6.instance.state;
    visibleColumns = visibleColumns.filter(function (d) {
      return !d.isPivotSource;
    });

    if (state.pivotColumns.length && state.groupBy && state.groupBy.length) {
      visibleColumns = visibleColumns.filter(function (column) {
        return column.isGrouped || column.isPivoted;
      });
    }

    return visibleColumns;
  }

  function visibleColumnsDeps(deps, _ref7) {
    var instance = _ref7.instance;
    return [].concat(deps, [instance.state.pivotColumns, instance.state.groupBy]);
  }

  function useInstance$7(instance) {
    var columns = instance.columns,
        allColumns = instance.allColumns,
        flatHeaders = instance.flatHeaders,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        dispatch = instance.dispatch,
        _instance$autoResetPi = instance.autoResetPivot,
        autoResetPivot = _instance$autoResetPi === void 0 ? true : _instance$autoResetPi,
        manaulPivot = instance.manaulPivot,
        disablePivot = instance.disablePivot,
        defaultCanPivot = instance.defaultCanPivot;
    ensurePluginOrder(plugins, ['useGroupBy'], 'usePivotColumns');
    var getInstance = useGetLatest(instance);
    allColumns.forEach(function (column) {
      var accessor = column.accessor,
          defaultColumnPivot = column.defaultPivot,
          columnDisablePivot = column.disablePivot;
      column.canPivot = accessor ? getFirstDefined(column.canPivot, columnDisablePivot === true ? false : undefined, disablePivot === true ? false : undefined, true) : getFirstDefined(column.canPivot, defaultColumnPivot, defaultCanPivot, false);

      if (column.canPivot) {
        column.togglePivot = function () {
          return instance.togglePivot(column.id);
        };
      }

      column.Aggregated = column.Aggregated || column.Cell;
    });

    var togglePivot = function togglePivot(columnId, value) {
      dispatch({
        type: actions.togglePivot,
        columnId: columnId,
        value: value
      });
    };

    flatHeaders.forEach(function (header) {
      header.getPivotToggleProps = makePropGetter(getHooks().getPivotToggleProps, {
        instance: getInstance(),
        header: header
      });
    });
    var getAutoResetPivot = useGetLatest(autoResetPivot);
    useMountedLayoutEffect(function () {
      if (getAutoResetPivot()) {
        dispatch({
          type: actions.resetPivot
        });
      }
    }, [dispatch, manaulPivot ? null : columns]);
    Object.assign(instance, {
      togglePivot: togglePivot
    });
  }

  function prepareRow$2(row) {
    row.allCells.forEach(function (cell) {
      // Grouped cells are in the pivotColumns and the pivot cell for the row
      cell.isPivoted = cell.column.isPivoted;
    });
  }

  var pluginName$1 = 'useRowSelect'; // Actions

  actions.resetSelectedRows = 'resetSelectedRows';
  actions.toggleAllRowsSelected = 'toggleAllRowsSelected';
  actions.toggleRowSelected = 'toggleRowSelected';
  actions.toggleAllPageRowsSelected = 'toggleAllPageRowsSelected';
  var useRowSelect = function useRowSelect(hooks) {
    hooks.getToggleRowSelectedProps = [defaultGetToggleRowSelectedProps];
    hooks.getToggleAllRowsSelectedProps = [defaultGetToggleAllRowsSelectedProps];
    hooks.getToggleAllPageRowsSelectedProps = [defaultGetToggleAllPageRowsSelectedProps];
    hooks.stateReducers.push(reducer$8);
    hooks.useInstance.push(useInstance$8);
    hooks.prepareRow.push(prepareRow$3);
  };
  useRowSelect.pluginName = pluginName$1;

  var defaultGetToggleRowSelectedProps = function defaultGetToggleRowSelectedProps(props, _ref) {
    var instance = _ref.instance,
        row = _ref.row;
    var _instance$manualRowSe = instance.manualRowSelectedKey,
        manualRowSelectedKey = _instance$manualRowSe === void 0 ? 'isSelected' : _instance$manualRowSe;
    var checked = false;

    if (row.original && row.original[manualRowSelectedKey]) {
      checked = true;
    } else {
      checked = row.isSelected;
    }

    return [props, {
      onChange: function onChange(e) {
        row.toggleRowSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: checked,
      title: 'Toggle Row Selected',
      indeterminate: row.isSomeSelected
    }];
  };

  var defaultGetToggleAllRowsSelectedProps = function defaultGetToggleAllRowsSelectedProps(props, _ref2) {
    var instance = _ref2.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleAllRowsSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: instance.isAllRowsSelected,
      title: 'Toggle All Rows Selected',
      indeterminate: Boolean(!instance.isAllRowsSelected && Object.keys(instance.state.selectedRowIds).length)
    }];
  };

  var defaultGetToggleAllPageRowsSelectedProps = function defaultGetToggleAllPageRowsSelectedProps(props, _ref3) {
    var instance = _ref3.instance;
    return [props, {
      onChange: function onChange(e) {
        instance.toggleAllPageRowsSelected(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: instance.isAllPageRowsSelected,
      title: 'Toggle All Current Page Rows Selected',
      indeterminate: Boolean(!instance.isAllPageRowsSelected && instance.page.some(function (_ref4) {
        var id = _ref4.id;
        return instance.state.selectedRowIds[id];
      }))
    }];
  }; // eslint-disable-next-line max-params


  function reducer$8(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        selectedRowIds: {}
      }, state);
    }

    if (action.type === actions.resetSelectedRows) {
      return _extends({}, state, {
        selectedRowIds: instance.initialState.selectedRowIds || {}
      });
    }

    if (action.type === actions.toggleAllRowsSelected) {
      var setSelected = action.value;
      var isAllRowsSelected = instance.isAllRowsSelected,
          rowsById = instance.rowsById,
          _instance$nonGroupedR = instance.nonGroupedRowsById,
          nonGroupedRowsById = _instance$nonGroupedR === void 0 ? rowsById : _instance$nonGroupedR;
      var selectAll = typeof setSelected !== 'undefined' ? setSelected : !isAllRowsSelected; // Only remove/add the rows that are visible on the screen
      //  Leave all the other rows that are selected alone.

      var selectedRowIds = Object.assign({}, state.selectedRowIds);

      if (selectAll) {
        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
          selectedRowIds[rowId] = true;
        });
      } else {
        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
          delete selectedRowIds[rowId];
        });
      }

      return _extends({}, state, {
        selectedRowIds: selectedRowIds
      });
    }

    if (action.type === actions.toggleRowSelected) {
      var id = action.id,
          _setSelected = action.value;
      var _rowsById = instance.rowsById,
          _instance$selectSubRo = instance.selectSubRows,
          selectSubRows = _instance$selectSubRo === void 0 ? true : _instance$selectSubRo,
          getSubRows = instance.getSubRows;
      var isSelected = state.selectedRowIds[id];
      var shouldExist = typeof _setSelected !== 'undefined' ? _setSelected : !isSelected;

      if (isSelected === shouldExist) {
        return state;
      }

      var newSelectedRowIds = _extends({}, state.selectedRowIds);

      var handleRowById = function handleRowById(id) {
        var row = _rowsById[id];

        if (!row.isGrouped) {
          if (shouldExist) {
            newSelectedRowIds[id] = true;
          } else {
            delete newSelectedRowIds[id];
          }
        }

        if (selectSubRows && getSubRows(row)) {
          return getSubRows(row).forEach(function (row) {
            return handleRowById(row.id);
          });
        }
      };

      handleRowById(id);
      return _extends({}, state, {
        selectedRowIds: newSelectedRowIds
      });
    }

    if (action.type === actions.toggleAllPageRowsSelected) {
      var _setSelected2 = action.value;

      var page = instance.page,
          _rowsById2 = instance.rowsById,
          _instance$selectSubRo2 = instance.selectSubRows,
          _selectSubRows = _instance$selectSubRo2 === void 0 ? true : _instance$selectSubRo2,
          isAllPageRowsSelected = instance.isAllPageRowsSelected,
          _getSubRows = instance.getSubRows;

      var _selectAll = typeof _setSelected2 !== 'undefined' ? _setSelected2 : !isAllPageRowsSelected;

      var _newSelectedRowIds = _extends({}, state.selectedRowIds);

      var _handleRowById = function _handleRowById(id) {
        var row = _rowsById2[id];

        if (!row.isGrouped) {
          if (_selectAll) {
            _newSelectedRowIds[id] = true;
          } else {
            delete _newSelectedRowIds[id];
          }
        }

        if (_selectSubRows && _getSubRows(row)) {
          return _getSubRows(row).forEach(function (row) {
            return _handleRowById(row.id);
          });
        }
      };

      page.forEach(function (row) {
        return _handleRowById(row.id);
      });
      return _extends({}, state, {
        selectedRowIds: _newSelectedRowIds
      });
    }

    return state;
  }

  function useInstance$8(instance) {
    var data = instance.data,
        rows = instance.rows,
        getHooks = instance.getHooks,
        plugins = instance.plugins,
        rowsById = instance.rowsById,
        _instance$nonGroupedR2 = instance.nonGroupedRowsById,
        nonGroupedRowsById = _instance$nonGroupedR2 === void 0 ? rowsById : _instance$nonGroupedR2,
        _instance$autoResetSe = instance.autoResetSelectedRows,
        autoResetSelectedRows = _instance$autoResetSe === void 0 ? true : _instance$autoResetSe,
        selectedRowIds = instance.state.selectedRowIds,
        _instance$selectSubRo3 = instance.selectSubRows,
        selectSubRows = _instance$selectSubRo3 === void 0 ? true : _instance$selectSubRo3,
        dispatch = instance.dispatch,
        page = instance.page,
        getSubRows = instance.getSubRows;
    ensurePluginOrder(plugins, ['useFilters', 'useGroupBy', 'useSortBy', 'useExpanded', 'usePagination'], 'useRowSelect');
    var selectedFlatRows = React.useMemo(function () {
      var selectedFlatRows = [];
      rows.forEach(function (row) {
        var isSelected = selectSubRows ? getRowIsSelected(row, selectedRowIds, getSubRows) : !!selectedRowIds[row.id];
        row.isSelected = !!isSelected;
        row.isSomeSelected = isSelected === null;

        if (isSelected) {
          selectedFlatRows.push(row);
        }
      });
      return selectedFlatRows;
    }, [rows, selectSubRows, selectedRowIds, getSubRows]);
    var isAllRowsSelected = Boolean(Object.keys(nonGroupedRowsById).length && Object.keys(selectedRowIds).length);
    var isAllPageRowsSelected = isAllRowsSelected;

    if (isAllRowsSelected) {
      if (Object.keys(nonGroupedRowsById).some(function (id) {
        return !selectedRowIds[id];
      })) {
        isAllRowsSelected = false;
      }
    }

    if (!isAllRowsSelected) {
      if (page && page.length && page.some(function (_ref5) {
        var id = _ref5.id;
        return !selectedRowIds[id];
      })) {
        isAllPageRowsSelected = false;
      }
    }

    var getAutoResetSelectedRows = useGetLatest(autoResetSelectedRows);
    useMountedLayoutEffect(function () {
      if (getAutoResetSelectedRows()) {
        dispatch({
          type: actions.resetSelectedRows
        });
      }
    }, [dispatch, data]);
    var toggleAllRowsSelected = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllRowsSelected,
        value: value
      });
    }, [dispatch]);
    var toggleAllPageRowsSelected = React.useCallback(function (value) {
      return dispatch({
        type: actions.toggleAllPageRowsSelected,
        value: value
      });
    }, [dispatch]);
    var toggleRowSelected = React.useCallback(function (id, value) {
      return dispatch({
        type: actions.toggleRowSelected,
        id: id,
        value: value
      });
    }, [dispatch]);
    var getInstance = useGetLatest(instance);
    var getToggleAllRowsSelectedProps = makePropGetter(getHooks().getToggleAllRowsSelectedProps, {
      instance: getInstance()
    });
    var getToggleAllPageRowsSelectedProps = makePropGetter(getHooks().getToggleAllPageRowsSelectedProps, {
      instance: getInstance()
    });
    Object.assign(instance, {
      selectedFlatRows: selectedFlatRows,
      isAllRowsSelected: isAllRowsSelected,
      isAllPageRowsSelected: isAllPageRowsSelected,
      toggleRowSelected: toggleRowSelected,
      toggleAllRowsSelected: toggleAllRowsSelected,
      getToggleAllRowsSelectedProps: getToggleAllRowsSelectedProps,
      getToggleAllPageRowsSelectedProps: getToggleAllPageRowsSelectedProps,
      toggleAllPageRowsSelected: toggleAllPageRowsSelected
    });
  }

  function prepareRow$3(row, _ref6) {
    var instance = _ref6.instance;

    row.toggleRowSelected = function (set) {
      return instance.toggleRowSelected(row.id, set);
    };

    row.getToggleRowSelectedProps = makePropGetter(instance.getHooks().getToggleRowSelectedProps, {
      instance: instance,
      row: row
    });
  }

  function getRowIsSelected(row, selectedRowIds, getSubRows) {
    if (selectedRowIds[row.id]) {
      return true;
    }

    var subRows = getSubRows(row);

    if (subRows && subRows.length) {
      var allChildrenSelected = true;
      var someSelected = false;
      subRows.forEach(function (subRow) {
        // Bail out early if we know both of these
        if (someSelected && !allChildrenSelected) {
          return;
        }

        if (getRowIsSelected(subRow, selectedRowIds, getSubRows)) {
          someSelected = true;
        } else {
          allChildrenSelected = false;
        }
      });
      return allChildrenSelected ? true : someSelected ? null : false;
    }

    return false;
  }

  var defaultInitialRowStateAccessor = function defaultInitialRowStateAccessor(row) {
    return {};
  };

  var defaultInitialCellStateAccessor = function defaultInitialCellStateAccessor(cell) {
    return {};
  }; // Actions


  actions.setRowState = 'setRowState';
  actions.setCellState = 'setCellState';
  actions.resetRowState = 'resetRowState';
  var useRowState = function useRowState(hooks) {
    hooks.stateReducers.push(reducer$9);
    hooks.useInstance.push(useInstance$9);
    hooks.prepareRow.push(prepareRow$4);
  };
  useRowState.pluginName = 'useRowState';

  function reducer$9(state, action, previousState, instance) {
    var _instance$initialRowS = instance.initialRowStateAccessor,
        initialRowStateAccessor = _instance$initialRowS === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS,
        _instance$initialCell = instance.initialCellStateAccessor,
        initialCellStateAccessor = _instance$initialCell === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell,
        rowsById = instance.rowsById;

    if (action.type === actions.init) {
      return _extends({
        rowState: {}
      }, state);
    }

    if (action.type === actions.resetRowState) {
      return _extends({}, state, {
        rowState: instance.initialState.rowState || {}
      });
    }

    if (action.type === actions.setRowState) {
      var _extends2;

      var rowId = action.rowId,
          value = action.value;
      var oldRowState = typeof state.rowState[rowId] !== 'undefined' ? state.rowState[rowId] : initialRowStateAccessor(rowsById[rowId]);
      return _extends({}, state, {
        rowState: _extends({}, state.rowState, (_extends2 = {}, _extends2[rowId] = functionalUpdate(value, oldRowState), _extends2))
      });
    }

    if (action.type === actions.setCellState) {
      var _oldRowState$cellStat, _rowsById$_rowId, _rowsById$_rowId$cell, _extends3, _extends4;

      var _rowId = action.rowId,
          columnId = action.columnId,
          _value = action.value;

      var _oldRowState = typeof state.rowState[_rowId] !== 'undefined' ? state.rowState[_rowId] : initialRowStateAccessor(rowsById[_rowId]);

      var oldCellState = typeof (_oldRowState == null ? void 0 : (_oldRowState$cellStat = _oldRowState.cellState) == null ? void 0 : _oldRowState$cellStat[columnId]) !== 'undefined' ? _oldRowState.cellState[columnId] : initialCellStateAccessor((_rowsById$_rowId = rowsById[_rowId]) == null ? void 0 : (_rowsById$_rowId$cell = _rowsById$_rowId.cells) == null ? void 0 : _rowsById$_rowId$cell.find(function (cell) {
        return cell.column.id === columnId;
      }));
      return _extends({}, state, {
        rowState: _extends({}, state.rowState, (_extends4 = {}, _extends4[_rowId] = _extends({}, _oldRowState, {
          cellState: _extends({}, _oldRowState.cellState || {}, (_extends3 = {}, _extends3[columnId] = functionalUpdate(_value, oldCellState), _extends3))
        }), _extends4))
      });
    }
  }

  function useInstance$9(instance) {
    var _instance$autoResetRo = instance.autoResetRowState,
        autoResetRowState = _instance$autoResetRo === void 0 ? true : _instance$autoResetRo,
        data = instance.data,
        dispatch = instance.dispatch;
    var setRowState = React.useCallback(function (rowId, value) {
      return dispatch({
        type: actions.setRowState,
        rowId: rowId,
        value: value
      });
    }, [dispatch]);
    var setCellState = React.useCallback(function (rowId, columnId, value) {
      return dispatch({
        type: actions.setCellState,
        rowId: rowId,
        columnId: columnId,
        value: value
      });
    }, [dispatch]);
    var getAutoResetRowState = useGetLatest(autoResetRowState);
    useMountedLayoutEffect(function () {
      if (getAutoResetRowState()) {
        dispatch({
          type: actions.resetRowState
        });
      }
    }, [data]);
    Object.assign(instance, {
      setRowState: setRowState,
      setCellState: setCellState
    });
  }

  function prepareRow$4(row, _ref) {
    var instance = _ref.instance;
    var _instance$initialRowS2 = instance.initialRowStateAccessor,
        initialRowStateAccessor = _instance$initialRowS2 === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS2,
        _instance$initialCell2 = instance.initialCellStateAccessor,
        initialCellStateAccessor = _instance$initialCell2 === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell2,
        rowState = instance.state.rowState;

    if (row) {
      row.state = typeof rowState[row.id] !== 'undefined' ? rowState[row.id] : initialRowStateAccessor(row);

      row.setState = function (updater) {
        return instance.setRowState(row.id, updater);
      };

      row.cells.forEach(function (cell) {
        if (!row.state.cellState) {
          row.state.cellState = {};
        }

        cell.state = typeof row.state.cellState[cell.column.id] !== 'undefined' ? row.state.cellState[cell.column.id] : initialCellStateAccessor(cell);

        cell.setState = function (updater) {
          return instance.setCellState(row.id, cell.column.id, updater);
        };
      });
    }
  }

  actions.resetColumnOrder = 'resetColumnOrder';
  actions.setColumnOrder = 'setColumnOrder';
  var useColumnOrder = function useColumnOrder(hooks) {
    hooks.stateReducers.push(reducer$a);
    hooks.visibleColumnsDeps.push(function (deps, _ref) {
      var instance = _ref.instance;
      return [].concat(deps, [instance.state.columnOrder]);
    });
    hooks.visibleColumns.push(visibleColumns$2);
    hooks.useInstance.push(useInstance$a);
  };
  useColumnOrder.pluginName = 'useColumnOrder';

  function reducer$a(state, action, previousState, instance) {
    if (action.type === actions.init) {
      return _extends({
        columnOrder: []
      }, state);
    }

    if (action.type === actions.resetColumnOrder) {
      return _extends({}, state, {
        columnOrder: instance.initialState.columnOrder || []
      });
    }

    if (action.type === actions.setColumnOrder) {
      return _extends({}, state, {
        columnOrder: functionalUpdate(action.columnOrder, state.columnOrder)
      });
    }
  }

  function visibleColumns$2(columns, _ref2) {
    var columnOrder = _ref2.instance.state.columnOrder;

    // If there is no order, return the normal columns
    if (!columnOrder || !columnOrder.length) {
      return columns;
    }

    var columnOrderCopy = [].concat(columnOrder); // If there is an order, make a copy of the columns

    var columnsCopy = [].concat(columns); // And make a new ordered array of the columns

    var columnsInOrder = []; // Loop over the columns and place them in order into the new array

    var _loop = function _loop() {
      var targetColumnId = columnOrderCopy.shift();
      var foundIndex = columnsCopy.findIndex(function (d) {
        return d.id === targetColumnId;
      });

      if (foundIndex > -1) {
        columnsInOrder.push(columnsCopy.splice(foundIndex, 1)[0]);
      }
    };

    while (columnsCopy.length && columnOrderCopy.length) {
      _loop();
    } // If there are any columns left, add them to the end


    return [].concat(columnsInOrder, columnsCopy);
  }

  function useInstance$a(instance) {
    var dispatch = instance.dispatch;
    instance.setColumnOrder = React.useCallback(function (columnOrder) {
      return dispatch({
        type: actions.setColumnOrder,
        columnOrder: columnOrder
      });
    }, [dispatch]);
  }

  defaultColumn.canResize = true; // Actions

  actions.columnStartResizing = 'columnStartResizing';
  actions.columnResizing = 'columnResizing';
  actions.columnDoneResizing = 'columnDoneResizing';
  actions.resetResize = 'resetResize';
  var useResizeColumns = function useResizeColumns(hooks) {
    hooks.getResizerProps = [defaultGetResizerProps];
    hooks.getHeaderProps.push({
      style: {
        position: 'relative'
      }
    });
    hooks.stateReducers.push(reducer$b);
    hooks.useInstance.push(useInstance$b);
    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions$1);
  };

  var defaultGetResizerProps = function defaultGetResizerProps(props, _ref) {
    var instance = _ref.instance,
        header = _ref.header;
    var dispatch = instance.dispatch;

    var onResizeStart = function onResizeStart(e, header) {
      var isTouchEvent = false;

      if (e.type === 'touchstart') {
        // lets not respond to multiple touches (e.g. 2 or 3 fingers)
        if (e.touches && e.touches.length > 1) {
          return;
        }

        isTouchEvent = true;
      }

      var headersToResize = getLeafHeaders(header);
      var headerIdWidths = headersToResize.map(function (d) {
        return [d.id, d.totalWidth];
      });
      var clientX = isTouchEvent ? Math.round(e.touches[0].clientX) : e.clientX;

      var dispatchMove = function dispatchMove(clientXPos) {
        dispatch({
          type: actions.columnResizing,
          clientX: clientXPos
        });
      };

      var dispatchEnd = function dispatchEnd() {
        return dispatch({
          type: actions.columnDoneResizing
        });
      };

      var handlersAndEvents = {
        mouse: {
          moveEvent: 'mousemove',
          moveHandler: function moveHandler(e) {
            return dispatchMove(e.clientX);
          },
          upEvent: 'mouseup',
          upHandler: function upHandler(e) {
            document.removeEventListener('mousemove', handlersAndEvents.mouse.moveHandler);
            document.removeEventListener('mouseup', handlersAndEvents.mouse.upHandler);
            dispatchEnd();
          }
        },
        touch: {
          moveEvent: 'touchmove',
          moveHandler: function moveHandler(e) {
            if (e.cancelable) {
              e.preventDefault();
              e.stopPropagation();
            }

            dispatchMove(e.touches[0].clientX);
            return false;
          },
          upEvent: 'touchend',
          upHandler: function upHandler(e) {
            document.removeEventListener(handlersAndEvents.touch.moveEvent, handlersAndEvents.touch.moveHandler);
            document.removeEventListener(handlersAndEvents.touch.upEvent, handlersAndEvents.touch.moveHandler);
            dispatchEnd();
          }
        }
      };
      var events = isTouchEvent ? handlersAndEvents.touch : handlersAndEvents.mouse;
      var passiveIfSupported = passiveEventSupported() ? {
        passive: false
      } : false;
      document.addEventListener(events.moveEvent, events.moveHandler, passiveIfSupported);
      document.addEventListener(events.upEvent, events.upHandler, passiveIfSupported);
      dispatch({
        type: actions.columnStartResizing,
        columnId: header.id,
        columnWidth: header.totalWidth,
        headerIdWidths: headerIdWidths,
        clientX: clientX
      });
    };

    return [props, {
      onMouseDown: function onMouseDown(e) {
        return e.persist() || onResizeStart(e, header);
      },
      onTouchStart: function onTouchStart(e) {
        return e.persist() || onResizeStart(e, header);
      },
      style: {
        cursor: 'col-resize'
      },
      draggable: false,
      role: 'separator'
    }];
  };

  useResizeColumns.pluginName = 'useResizeColumns';

  function reducer$b(state, action) {
    if (action.type === actions.init) {
      return _extends({
        columnResizing: {
          columnWidths: {}
        }
      }, state);
    }

    if (action.type === actions.resetResize) {
      return _extends({}, state, {
        columnResizing: {
          columnWidths: {}
        }
      });
    }

    if (action.type === actions.columnStartResizing) {
      var clientX = action.clientX,
          columnId = action.columnId,
          columnWidth = action.columnWidth,
          headerIdWidths = action.headerIdWidths;
      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          startX: clientX,
          headerIdWidths: headerIdWidths,
          columnWidth: columnWidth,
          isResizingColumn: columnId
        })
      });
    }

    if (action.type === actions.columnResizing) {
      var _clientX = action.clientX;

      var _state$columnResizing = state.columnResizing,
          startX = _state$columnResizing.startX,
          _columnWidth = _state$columnResizing.columnWidth,
          _state$columnResizing2 = _state$columnResizing.headerIdWidths,
          _headerIdWidths = _state$columnResizing2 === void 0 ? [] : _state$columnResizing2;

      var deltaX = _clientX - startX;
      var percentageDeltaX = deltaX / _columnWidth;
      var newColumnWidths = {};

      _headerIdWidths.forEach(function (_ref2) {
        var headerId = _ref2[0],
            headerWidth = _ref2[1];
        newColumnWidths[headerId] = Math.max(headerWidth + headerWidth * percentageDeltaX, 0);
      });

      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          columnWidths: _extends({}, state.columnResizing.columnWidths, {}, newColumnWidths)
        })
      });
    }

    if (action.type === actions.columnDoneResizing) {
      return _extends({}, state, {
        columnResizing: _extends({}, state.columnResizing, {
          startX: null,
          isResizingColumn: null
        })
      });
    }
  }

  var useInstanceBeforeDimensions$1 = function useInstanceBeforeDimensions(instance) {
    var flatHeaders = instance.flatHeaders,
        disableResizing = instance.disableResizing,
        getHooks = instance.getHooks,
        columnResizing = instance.state.columnResizing;
    var getInstance = useGetLatest(instance);
    flatHeaders.forEach(function (header) {
      var canResize = getFirstDefined(header.disableResizing === true ? false : undefined, disableResizing === true ? false : undefined, true);
      header.canResize = canResize;
      header.width = columnResizing.columnWidths[header.id] || header.originalWidth || header.width;
      header.isResizing = columnResizing.isResizingColumn === header.id;

      if (canResize) {
        header.getResizerProps = makePropGetter(getHooks().getResizerProps, {
          instance: getInstance(),
          header: header
        });
      }
    });
  };

  function useInstance$b(instance) {
    var plugins = instance.plugins,
        dispatch = instance.dispatch,
        _instance$autoResetRe = instance.autoResetResize,
        autoResetResize = _instance$autoResetRe === void 0 ? true : _instance$autoResetRe,
        columns = instance.columns;
    ensurePluginOrder(plugins, ['useAbsoluteLayout'], 'useResizeColumns');
    var getAutoResetResize = useGetLatest(autoResetResize);
    useMountedLayoutEffect(function () {
      if (getAutoResetResize()) {
        dispatch({
          type: actions.resetResize
        });
      }
    }, [columns]);
    var resetResizing = React.useCallback(function () {
      return dispatch({
        type: actions.resetResize
      });
    }, [dispatch]);
    Object.assign(instance, {
      resetResizing: resetResizing
    });
  }

  function getLeafHeaders(header) {
    var leafHeaders = [];

    var recurseHeader = function recurseHeader(header) {
      if (header.columns && header.columns.length) {
        header.columns.map(recurseHeader);
      }

      leafHeaders.push(header);
    };

    recurseHeader(header);
    return leafHeaders;
  }

  var cellStyles = {
    position: 'absolute',
    top: 0
  };
  var useAbsoluteLayout = function useAbsoluteLayout(hooks) {
    hooks.getTableBodyProps.push(getRowStyles);
    hooks.getRowProps.push(getRowStyles);
    hooks.getHeaderGroupProps.push(getRowStyles);
    hooks.getFooterGroupProps.push(getRowStyles);
    hooks.getHeaderProps.push(function (props, _ref) {
      var column = _ref.column;
      return [props, {
        style: _extends({}, cellStyles, {
          left: column.totalLeft + "px",
          width: column.totalWidth + "px"
        })
      }];
    });
    hooks.getCellProps.push(function (props, _ref2) {
      var cell = _ref2.cell;
      return [props, {
        style: _extends({}, cellStyles, {
          left: cell.column.totalLeft + "px",
          width: cell.column.totalWidth + "px"
        })
      }];
    });
    hooks.getFooterProps.push(function (props, _ref3) {
      var column = _ref3.column;
      return [props, {
        style: _extends({}, cellStyles, {
          left: column.totalLeft + "px",
          width: column.totalWidth + "px"
        })
      }];
    });
  };
  useAbsoluteLayout.pluginName = 'useAbsoluteLayout';

  var getRowStyles = function getRowStyles(props, _ref4) {
    var instance = _ref4.instance;
    return [props, {
      style: {
        position: 'relative',
        width: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var cellStyles$1 = {
    display: 'inline-block',
    boxSizing: 'border-box'
  };

  var getRowStyles$1 = function getRowStyles(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        display: 'flex',
        width: instance.totalColumnsWidth + "px"
      }
    }];
  };

  var useBlockLayout = function useBlockLayout(hooks) {
    hooks.getRowProps.push(getRowStyles$1);
    hooks.getHeaderGroupProps.push(getRowStyles$1);
    hooks.getFooterGroupProps.push(getRowStyles$1);
    hooks.getHeaderProps.push(function (props, _ref2) {
      var column = _ref2.column;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: column.totalWidth + "px"
        })
      }];
    });
    hooks.getCellProps.push(function (props, _ref3) {
      var cell = _ref3.cell;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: cell.column.totalWidth + "px"
        })
      }];
    });
    hooks.getFooterProps.push(function (props, _ref4) {
      var column = _ref4.column;
      return [props, {
        style: _extends({}, cellStyles$1, {
          width: column.totalWidth + "px"
        })
      }];
    });
  };
  useBlockLayout.pluginName = 'useBlockLayout';

  function useFlexLayout(hooks) {
    hooks.getTableProps.push(getTableProps);
    hooks.getRowProps.push(getRowStyles$2);
    hooks.getHeaderGroupProps.push(getRowStyles$2);
    hooks.getFooterGroupProps.push(getRowStyles$2);
    hooks.getHeaderProps.push(getHeaderProps);
    hooks.getCellProps.push(getCellProps);
    hooks.getFooterProps.push(getFooterProps);
  }
  useFlexLayout.pluginName = 'useFlexLayout';

  var getTableProps = function getTableProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        minWidth: instance.totalColumnsMinWidth + "px"
      }
    }];
  };

  var getRowStyles$2 = function getRowStyles(props, _ref2) {
    var instance = _ref2.instance;
    return [props, {
      style: {
        display: 'flex',
        flex: '1 0 auto',
        minWidth: instance.totalColumnsMinWidth + "px"
      }
    }];
  };

  var getHeaderProps = function getHeaderProps(props, _ref3) {
    var column = _ref3.column;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
        minWidth: column.totalMinWidth + "px",
        width: column.totalWidth + "px"
      }
    }];
  };

  var getCellProps = function getCellProps(props, _ref4) {
    var cell = _ref4.cell;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: cell.column.totalFlexWidth + " 0 auto",
        minWidth: cell.column.totalMinWidth + "px",
        width: cell.column.totalWidth + "px"
      }
    }];
  };

  var getFooterProps = function getFooterProps(props, _ref5) {
    var column = _ref5.column;
    return [props, {
      style: {
        boxSizing: 'border-box',
        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
        minWidth: column.totalMinWidth + "px",
        width: column.totalWidth + "px"
      }
    }];
  };

  function useGridLayout(hooks) {
    hooks.stateReducers.push(reducer$c);
    hooks.getTableProps.push(getTableProps$1);
    hooks.getHeaderProps.push(getHeaderProps$1);
  }
  useGridLayout.pluginName = 'useGridLayout';

  var getTableProps$1 = function getTableProps(props, _ref) {
    var instance = _ref.instance;
    return [props, {
      style: {
        display: "grid",
        gridTemplateColumns: instance.state.gridLayout.columnWidths.map(function (w) {
          return w;
        }).join(" ")
      }
    }];
  };

  var getHeaderProps$1 = function getHeaderProps(props, _ref2) {
    var column = _ref2.column;
    return [props, {
      id: "header-cell-" + column.id,
      style: {
        position: "sticky" //enables a scroll wrapper to be placed around the table and have sticky headers

      }
    }];
  };

  function reducer$c(state, action, previousState, instance) {
    if (action.type === "init") {
      return _extends({
        gridLayout: {
          columnWidths: instance.columns.map(function () {
            return "auto";
          })
        }
      }, state);
    }

    if (action.type === "columnStartResizing") {
      var columnId = action.columnId;
      var columnIndex = instance.visibleColumns.findIndex(function (col) {
        return col.id === columnId;
      });
      var elWidth = getElementWidth(columnId);

      if (elWidth !== undefined) {
        return _extends({}, state, {
          gridLayout: _extends({}, state.gridLayout, {
            columnId: columnId,
            columnIndex: columnIndex,
            startingWidth: elWidth
          })
        });
      } else {
        return state;
      }
    }

    if (action.type === "columnResizing") {
      var _state$gridLayout = state.gridLayout,
          _columnIndex = _state$gridLayout.columnIndex,
          startingWidth = _state$gridLayout.startingWidth,
          columnWidths = _state$gridLayout.columnWidths;
      var change = state.columnResizing.startX - action.clientX;
      var newWidth = startingWidth - change;
      var columnWidthsCopy = [].concat(columnWidths);
      columnWidthsCopy[_columnIndex] = newWidth + "px";
      return _extends({}, state, {
        gridLayout: _extends({}, state.gridLayout, {
          columnWidths: columnWidthsCopy
        })
      });
    }
  }

  function getElementWidth(columnId) {
    var _document$getElementB;

    var width = (_document$getElementB = document.getElementById("header-cell-" + columnId)) == null ? void 0 : _document$getElementB.offsetWidth;

    if (width !== undefined) {
      return width;
    }
  }

  exports._UNSTABLE_usePivotColumns = _UNSTABLE_usePivotColumns;
  exports.actions = actions;
  exports.defaultColumn = defaultColumn;
  exports.defaultGroupByFn = defaultGroupByFn;
  exports.defaultOrderByFn = defaultOrderByFn;
  exports.defaultRenderer = defaultRenderer;
  exports.emptyRenderer = emptyRenderer;
  exports.ensurePluginOrder = ensurePluginOrder;
  exports.flexRender = flexRender;
  exports.functionalUpdate = functionalUpdate;
  exports.loopHooks = loopHooks;
  exports.makePropGetter = makePropGetter;
  exports.makeRenderer = makeRenderer;
  exports.reduceHooks = reduceHooks;
  exports.safeUseLayoutEffect = safeUseLayoutEffect;
  exports.useAbsoluteLayout = useAbsoluteLayout;
  exports.useAsyncDebounce = useAsyncDebounce;
  exports.useBlockLayout = useBlockLayout;
  exports.useColumnOrder = useColumnOrder;
  exports.useExpanded = useExpanded;
  exports.useFilters = useFilters;
  exports.useFlexLayout = useFlexLayout;
  exports.useGetLatest = useGetLatest;
  exports.useGlobalFilter = useGlobalFilter;
  exports.useGridLayout = useGridLayout;
  exports.useGroupBy = useGroupBy;
  exports.useMountedLayoutEffect = useMountedLayoutEffect;
  exports.usePagination = usePagination;
  exports.useResizeColumns = useResizeColumns;
  exports.useRowSelect = useRowSelect;
  exports.useRowState = useRowState;
  exports.useSortBy = useSortBy;
  exports.useTable = useTable;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-table.development.js.map


/***/ }),

/***/ "./node_modules/react-table/index.js":
/*!*******************************************!*\
  !*** ./node_modules/react-table/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./dist/react-table.development.js */ "./node_modules/react-table/dist/react-table.development.js")
}


/***/ }),

/***/ "./node_modules/react-ultimate-pagination/lib/react-ultimate-pagination.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-ultimate-pagination/lib/react-ultimate-pagination.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ITEM_TYPES = exports.createUltimatePagination = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ultimatePagination = __webpack_require__(/*! ultimate-pagination */ "./node_modules/ultimate-pagination/lib/ultimate-pagination.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var renderItemComponentFunctionFactory = function renderItemComponentFunctionFactory(itemTypeToComponent, currentPage, onChange) {
  var onItemClickFunctionFactory = function onItemClickFunctionFactory(_ref) {
    var value = _ref.value,
        isDisabled = _ref.isDisabled;

    return function () {
      if (!isDisabled && onChange && currentPage !== value) {
        onChange(value);
      }
    };
  };

  return function (props) {
    var ItemComponent = itemTypeToComponent[props.type];
    var onItemClick = onItemClickFunctionFactory(props);
    return _react2.default.createElement(ItemComponent, _extends({ onClick: onItemClick }, props));
  };
};

var createUltimatePagination = function createUltimatePagination(_ref2) {
  var itemTypeToComponent = _ref2.itemTypeToComponent,
      _ref2$WrapperComponen = _ref2.WrapperComponent,
      WrapperComponent = _ref2$WrapperComponen === undefined ? 'div' : _ref2$WrapperComponen;

  var UltimatePaginationComponent = function UltimatePaginationComponent(props) {
    var currentPage = props.currentPage,
        totalPages = props.totalPages,
        boundaryPagesRange = props.boundaryPagesRange,
        siblingPagesRange = props.siblingPagesRange,
        hideEllipsis = props.hideEllipsis,
        hidePreviousAndNextPageLinks = props.hidePreviousAndNextPageLinks,
        hideFirstAndLastPageLinks = props.hideFirstAndLastPageLinks,
        onChange = props.onChange,
        disabled = props.disabled,
        restProps = _objectWithoutProperties(props, ['currentPage', 'totalPages', 'boundaryPagesRange', 'siblingPagesRange', 'hideEllipsis', 'hidePreviousAndNextPageLinks', 'hideFirstAndLastPageLinks', 'onChange', 'disabled']);

    var paginationModel = (0, _ultimatePagination.getPaginationModel)({
      currentPage: currentPage,
      totalPages: totalPages,
      boundaryPagesRange: boundaryPagesRange,
      siblingPagesRange: siblingPagesRange,
      hideEllipsis: hideEllipsis,
      hidePreviousAndNextPageLinks: hidePreviousAndNextPageLinks,
      hideFirstAndLastPageLinks: hideFirstAndLastPageLinks
    });
    var renderItemComponent = renderItemComponentFunctionFactory(itemTypeToComponent, currentPage, onChange);
    return _react2.default.createElement(
      WrapperComponent,
      restProps,
      paginationModel.map(function (itemModel) {
        return renderItemComponent(_extends({}, itemModel, {
          isDisabled: !!disabled
        }));
      })
    );
  };

  UltimatePaginationComponent.propTypes = {
    currentPage: _propTypes2.default.number.isRequired,
    totalPages: _propTypes2.default.number.isRequired,
    boundaryPagesRange: _propTypes2.default.number,
    siblingPagesRange: _propTypes2.default.number,
    hideEllipsis: _propTypes2.default.bool,
    hidePreviousAndNextPageLinks: _propTypes2.default.bool,
    hideFirstAndLastPageLinks: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    disabled: _propTypes2.default.bool
  };

  return UltimatePaginationComponent;
};

exports.createUltimatePagination = createUltimatePagination;
exports.ITEM_TYPES = _ultimatePagination.ITEM_TYPES;

/***/ }),

/***/ "./node_modules/ultimate-pagination/lib/ultimate-pagination-constants.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ultimate-pagination/lib/ultimate-pagination-constants.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.ITEM_TYPES = {
    PAGE: 'PAGE',
    ELLIPSIS: 'ELLIPSIS',
    FIRST_PAGE_LINK: 'FIRST_PAGE_LINK',
    PREVIOUS_PAGE_LINK: 'PREVIOUS_PAGE_LINK',
    NEXT_PAGE_LINK: 'NEXT_PAGE_LINK',
    LAST_PAGE_LINK: 'LAST_PAGE_LINK'
};
exports.ITEM_KEYS = {
    FIRST_ELLIPSIS: -1,
    SECOND_ELLIPSIS: -2,
    FIRST_PAGE_LINK: -3,
    PREVIOUS_PAGE_LINK: -4,
    NEXT_PAGE_LINK: -5,
    LAST_PAGE_LINK: -6
};
//# sourceMappingURL=ultimate-pagination-constants.js.map

/***/ }),

/***/ "./node_modules/ultimate-pagination/lib/ultimate-pagination-item-factories.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ultimate-pagination/lib/ultimate-pagination-item-factories.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ultimate_pagination_constants_1 = __webpack_require__(/*! ./ultimate-pagination-constants */ "./node_modules/ultimate-pagination/lib/ultimate-pagination-constants.js");
exports.createFirstEllipsis = function (pageNumber) {
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.ELLIPSIS,
        key: ultimate_pagination_constants_1.ITEM_KEYS.FIRST_ELLIPSIS,
        value: pageNumber,
        isActive: false
    };
};
exports.createSecondEllipsis = function (pageNumber) {
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.ELLIPSIS,
        key: ultimate_pagination_constants_1.ITEM_KEYS.SECOND_ELLIPSIS,
        value: pageNumber,
        isActive: false
    };
};
exports.createFirstPageLink = function (options) {
    var currentPage = options.currentPage;
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.FIRST_PAGE_LINK,
        key: ultimate_pagination_constants_1.ITEM_KEYS.FIRST_PAGE_LINK,
        value: 1,
        isActive: currentPage === 1
    };
};
exports.createPreviousPageLink = function (options) {
    var currentPage = options.currentPage;
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.PREVIOUS_PAGE_LINK,
        key: ultimate_pagination_constants_1.ITEM_KEYS.PREVIOUS_PAGE_LINK,
        value: Math.max(1, currentPage - 1),
        isActive: currentPage === 1
    };
};
exports.createNextPageLink = function (options) {
    var currentPage = options.currentPage, totalPages = options.totalPages;
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.NEXT_PAGE_LINK,
        key: ultimate_pagination_constants_1.ITEM_KEYS.NEXT_PAGE_LINK,
        value: Math.min(totalPages, currentPage + 1),
        isActive: currentPage === totalPages
    };
};
exports.createLastPageLink = function (options) {
    var currentPage = options.currentPage, totalPages = options.totalPages;
    return {
        type: ultimate_pagination_constants_1.ITEM_TYPES.LAST_PAGE_LINK,
        key: ultimate_pagination_constants_1.ITEM_KEYS.LAST_PAGE_LINK,
        value: totalPages,
        isActive: currentPage === totalPages
    };
};
exports.createPageFunctionFactory = function (options) {
    var currentPage = options.currentPage;
    return function (pageNumber) {
        return {
            type: ultimate_pagination_constants_1.ITEM_TYPES.PAGE,
            key: pageNumber,
            value: pageNumber,
            isActive: pageNumber === currentPage
        };
    };
};
//# sourceMappingURL=ultimate-pagination-item-factories.js.map

/***/ }),

/***/ "./node_modules/ultimate-pagination/lib/ultimate-pagination-utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ultimate-pagination/lib/ultimate-pagination-utils.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function createRange(start, end) {
    var range = [];
    for (var i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
}
exports.createRange = createRange;
//# sourceMappingURL=ultimate-pagination-utils.js.map

/***/ }),

/***/ "./node_modules/ultimate-pagination/lib/ultimate-pagination.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ultimate-pagination/lib/ultimate-pagination.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ultimate_pagination_utils_1 = __webpack_require__(/*! ./ultimate-pagination-utils */ "./node_modules/ultimate-pagination/lib/ultimate-pagination-utils.js");
var ultimate_pagination_item_factories_1 = __webpack_require__(/*! ./ultimate-pagination-item-factories */ "./node_modules/ultimate-pagination/lib/ultimate-pagination-item-factories.js");
function getPaginationModel(options) {
    if (options == null) {
        throw new Error('getPaginationModel(): options object should be a passed');
    }
    var totalPages = Number(options.totalPages);
    if (isNaN(totalPages)) {
        throw new Error('getPaginationModel(): totalPages should be a number');
    }
    if (totalPages < 0) {
        throw new Error('getPaginationModel(): totalPages shouldn\'t be a negative number');
    }
    var currentPage = Number(options.currentPage);
    if (isNaN(currentPage)) {
        throw new Error('getPaginationModel(): currentPage should be a number');
    }
    if (currentPage < 0) {
        throw new Error('getPaginationModel(): currentPage shouldn\'t be a negative number');
    }
    if (currentPage > totalPages) {
        throw new Error('getPaginationModel(): currentPage shouldn\'t be greater than totalPages');
    }
    var boundaryPagesRange = (options.boundaryPagesRange == null ? 1 : Number(options.boundaryPagesRange));
    if (isNaN(boundaryPagesRange)) {
        throw new Error('getPaginationModel(): boundaryPagesRange should be a number');
    }
    if (boundaryPagesRange < 0) {
        throw new Error('getPaginationModel(): boundaryPagesRange shouldn\'t be a negative number');
    }
    var siblingPagesRange = (options.siblingPagesRange == null ? 1 : Number(options.siblingPagesRange));
    if (isNaN(siblingPagesRange)) {
        throw new Error('getPaginationModel(): siblingPagesRange should be a number');
    }
    if (siblingPagesRange < 0) {
        throw new Error('getPaginationModel(): siblingPagesRange shouldn\'t be a negative number');
    }
    var hidePreviousAndNextPageLinks = Boolean(options.hidePreviousAndNextPageLinks);
    var hideFirstAndLastPageLinks = Boolean(options.hideFirstAndLastPageLinks);
    var hideEllipsis = Boolean(options.hideEllipsis);
    var ellipsisSize = (hideEllipsis ? 0 : 1);
    var paginationModel = [];
    var createPage = ultimate_pagination_item_factories_1.createPageFunctionFactory(options);
    if (!hideFirstAndLastPageLinks) {
        paginationModel.push(ultimate_pagination_item_factories_1.createFirstPageLink(options));
    }
    if (!hidePreviousAndNextPageLinks) {
        paginationModel.push(ultimate_pagination_item_factories_1.createPreviousPageLink(options));
    }
    // Simplify generation of pages if number of available items is equal or greater than total pages to show
    if (1 + 2 * ellipsisSize + 2 * siblingPagesRange + 2 * boundaryPagesRange >= totalPages) {
        var allPages = ultimate_pagination_utils_1.createRange(1, totalPages).map(createPage);
        paginationModel.push.apply(paginationModel, allPages);
    }
    else {
        // Calculate group of first pages
        var firstPagesStart = 1;
        var firstPagesEnd = boundaryPagesRange;
        var firstPages = ultimate_pagination_utils_1.createRange(firstPagesStart, firstPagesEnd).map(createPage);
        // Calculate group of last pages
        var lastPagesStart = totalPages + 1 - boundaryPagesRange;
        var lastPagesEnd = totalPages;
        var lastPages = ultimate_pagination_utils_1.createRange(lastPagesStart, lastPagesEnd).map(createPage);
        // Calculate group of main pages
        var mainPagesStart = Math.min(Math.max(currentPage - siblingPagesRange, firstPagesEnd + ellipsisSize + 1), lastPagesStart - ellipsisSize - 2 * siblingPagesRange - 1);
        var mainPagesEnd = mainPagesStart + 2 * siblingPagesRange;
        var mainPages = ultimate_pagination_utils_1.createRange(mainPagesStart, mainPagesEnd).map(createPage);
        // Add group of first pages
        paginationModel.push.apply(paginationModel, firstPages);
        if (!hideEllipsis) {
            // Calculate and add ellipsis before group of main pages
            var firstEllipsisPageNumber = mainPagesStart - 1;
            var showPageInsteadOfFirstEllipsis = (firstEllipsisPageNumber === firstPagesEnd + 1);
            var createFirstEllipsisOrPage = showPageInsteadOfFirstEllipsis ? createPage : ultimate_pagination_item_factories_1.createFirstEllipsis;
            var firstEllipsis = createFirstEllipsisOrPage(firstEllipsisPageNumber);
            paginationModel.push(firstEllipsis);
        }
        // Add group of main pages
        paginationModel.push.apply(paginationModel, mainPages);
        if (!hideEllipsis) {
            // Calculate and add ellipsis after group of main pages
            var secondEllipsisPageNumber = mainPagesEnd + 1;
            var showPageInsteadOfSecondEllipsis = (secondEllipsisPageNumber === lastPagesStart - 1);
            var createSecondEllipsisOrPage = showPageInsteadOfSecondEllipsis ? createPage : ultimate_pagination_item_factories_1.createSecondEllipsis;
            var secondEllipsis = createSecondEllipsisOrPage(secondEllipsisPageNumber);
            paginationModel.push(secondEllipsis);
        }
        // Add group of last pages
        paginationModel.push.apply(paginationModel, lastPages);
    }
    if (!hidePreviousAndNextPageLinks) {
        paginationModel.push(ultimate_pagination_item_factories_1.createNextPageLink(options));
    }
    if (!hideFirstAndLastPageLinks) {
        paginationModel.push(ultimate_pagination_item_factories_1.createLastPageLink(options));
    }
    return paginationModel;
}
exports.getPaginationModel = getPaginationModel;
var ultimate_pagination_constants_1 = __webpack_require__(/*! ./ultimate-pagination-constants */ "./node_modules/ultimate-pagination/lib/ultimate-pagination-constants.js");
exports.ITEM_TYPES = ultimate_pagination_constants_1.ITEM_TYPES;
exports.ITEM_KEYS = ultimate_pagination_constants_1.ITEM_KEYS;
//# sourceMappingURL=ultimate-pagination.js.map

/***/ }),

/***/ "./src/components/Pagination/Ellipsis.tsx":
/*!************************************************!*\
  !*** ./src/components/Pagination/Ellipsis.tsx ***!
  \************************************************/
/*! exports provided: Ellipsis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ellipsis", function() { return Ellipsis; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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


function Ellipsis({ disabled, onClick }) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({ disabled }) },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", { role: "button", tabIndex: disabled ? -1 : 0, onClick: e => {
      e.preventDefault();
      if (!disabled)
      onClick(e);
    } }, "\u2026"));



};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(Ellipsis, "Ellipsis", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\Pagination\\Ellipsis.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Pagination/Item.tsx":
/*!********************************************!*\
  !*** ./src/components/Pagination/Item.tsx ***!
  \********************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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


function Item({ active, children, onClick }) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({ active }) },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", { role: "button", tabIndex: active ? -1 : 0, onClick: e => {
      e.preventDefault();
      if (!active)
      onClick(e);
    } },
  children));


};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(Item, "Item", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\Pagination\\Item.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Pagination/Next.tsx":
/*!********************************************!*\
  !*** ./src/components/Pagination/Next.tsx ***!
  \********************************************/
/*! exports provided: Next */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Next", function() { return Next; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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


function Next({ disabled, onClick }) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({ disabled }) },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", { role: "button", tabIndex: disabled ? -1 : 0, onClick: e => {
      e.preventDefault();
      if (!disabled)
      onClick(e);
    } }, "\xBB"));



};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(Next, "Next", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\Pagination\\Next.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Pagination/Prev.tsx":
/*!********************************************!*\
  !*** ./src/components/Pagination/Prev.tsx ***!
  \********************************************/
/*! exports provided: Prev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prev", function() { return Prev; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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


function Prev({ disabled, onClick }) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("li", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({ disabled }) },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", { role: "button", tabIndex: disabled ? -1 : 0, onClick: e => {
      e.preventDefault();
      if (!disabled)
      onClick(e);
    } }, "\xAB"));



};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(Prev, "Prev", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\Pagination\\Prev.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Pagination/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/Pagination/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _Next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Next */ "./src/components/Pagination/Next.tsx");
/* harmony import */ var _Prev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Prev */ "./src/components/Pagination/Prev.tsx");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Item */ "./src/components/Pagination/Item.tsx");
/* harmony import */ var _Ellipsis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Ellipsis */ "./src/components/Pagination/Ellipsis.tsx");
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






const PaginationList = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["styled"].ul`
  display: inline-block;
  margin: 16px 0;
  padding: 0;

  li {
    display: inline;
    margin: 0 4px;

    span {
      padding: 8px 12px;
      text-decoration: none;
      background-color: ${({ theme }) => theme.colors.grayscale.light5};
      border-radius: ${({ theme }) => theme.borderRadius}px;

      &:hover,
      &:focus {
        z-index: 2;
        color: ${({ theme }) => theme.colors.grayscale.dark1};
        background-color: ${({ theme }) => theme.colors.grayscale.light3};
      }
    }

    &.disabled {
      span {
        background-color: transparent;
        cursor: default;

        &:focus {
          outline: none;
        }
      }
    }
    &.active {
      span {
        z-index: 3;
        color: ${({ theme }) => theme.colors.grayscale.light5};
        cursor: default;
        background-color: ${({ theme }) => theme.colors.primary.base};

        &:focus {
          outline: none;
        }
      }
    }
  }
`;
function Pagination({ children }) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(PaginationList, { role: "navigation" }, children);
}
Pagination.Next = _Next__WEBPACK_IMPORTED_MODULE_2__["Next"];
Pagination.Prev = _Prev__WEBPACK_IMPORTED_MODULE_3__["Prev"];
Pagination.Item = _Item__WEBPACK_IMPORTED_MODULE_4__["Item"];
Pagination.Ellipsis = _Ellipsis__WEBPACK_IMPORTED_MODULE_5__["Ellipsis"];const _default =
Pagination;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(PaginationList, "PaginationList", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\Pagination\\index.tsx");reactHotLoader.register(Pagination, "Pagination", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\Pagination\\index.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\Pagination\\index.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/TableView/TableView.tsx":
/*!************************************************!*\
  !*** ./src/components/TableView/TableView.tsx ***!
  \************************************************/
/*! exports provided: EmptyWrapperType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyWrapperType", function() { return EmptyWrapperType; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/common/components */ "./src/common/components/index.tsx");
/* harmony import */ var src_components_dataViewCommon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/dataViewCommon */ "./src/components/dataViewCommon/index.ts");
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





const DEFAULT_PAGE_SIZE = 10;
var EmptyWrapperType;
(function (EmptyWrapperType) {
  EmptyWrapperType["Default"] = "Default";
  EmptyWrapperType["Small"] = "Small";
})(EmptyWrapperType || (EmptyWrapperType = {}));
const EmptyWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["styled"].div`
  margin: ${({ theme }) => theme.gridUnit * 40}px 0;
`;
const TableViewStyles = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["styled"].div`
  ${({ scrollTable, theme }) => scrollTable &&
`
    height: 300px;
    margin-bottom: ${theme.gridUnit * 4}px;
    overflow: auto;
  `}

  .table-cell.table-cell {
    vertical-align: top;
  }

  .pagination-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.grayscale.light5};

    ${({ theme, isPaginationSticky }) => isPaginationSticky &&
`
        position: sticky;
        bottom: 0;
        left: 0;
    `};
  }

  .row-count-container {
    margin-top: ${({ theme }) => theme.gridUnit * 2}px;
    color: ${({ theme }) => theme.colors.grayscale.base};
  }
`;
const TableView = ({ columns, data, pageSize: initialPageSize, initialPageIndex, initialSortBy = [], loading = false, withPagination = true, emptyWrapperType = EmptyWrapperType.Default, noDataText, showRowCount = true, ...props }) => {
  const initialState = {
    pageSize: initialPageSize != null ? initialPageSize : DEFAULT_PAGE_SIZE,
    pageIndex: initialPageIndex != null ? initialPageIndex : 0,
    sortBy: initialSortBy };

  const { getTableProps, getTableBodyProps, headerGroups, page, rows, prepareRow, pageCount, gotoPage, state: { pageIndex, pageSize } } = Object(react_table__WEBPACK_IMPORTED_MODULE_3__["useTable"])({
    columns,
    data,
    initialState },
  react_table__WEBPACK_IMPORTED_MODULE_3__["useFilters"], react_table__WEBPACK_IMPORTED_MODULE_3__["useSortBy"], react_table__WEBPACK_IMPORTED_MODULE_3__["usePagination"]);
  const content = withPagination ? page : rows;
  let EmptyWrapperComponent;
  switch (emptyWrapperType) {
    case EmptyWrapperType.Small:
      EmptyWrapperComponent = ({ children }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
      break;
    case EmptyWrapperType.Default:
    default:
      EmptyWrapperComponent = ({ children }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(EmptyWrapper, null, children);}

  const isEmpty = !loading && content.length === 0;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(TableViewStyles, props,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(src_components_dataViewCommon__WEBPACK_IMPORTED_MODULE_5__["TableCollection"], { getTableProps: getTableProps, getTableBodyProps: getTableBodyProps, prepareRow: prepareRow, headerGroups: headerGroups, rows: content, columns: columns, loading: loading }),
  isEmpty && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(EmptyWrapperComponent, null,
  noDataText ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["Empty"], { image: src_common_components__WEBPACK_IMPORTED_MODULE_4__["Empty"].PRESENTED_IMAGE_SIMPLE, description: noDataText }) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_4__["Empty"], { image: src_common_components__WEBPACK_IMPORTED_MODULE_4__["Empty"].PRESENTED_IMAGE_SIMPLE })),

  pageCount > 1 && withPagination && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", { className: "pagination-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(src_components_dataViewCommon__WEBPACK_IMPORTED_MODULE_5__["Pagination"], { totalPages: pageCount || 0, currentPage: pageCount ? pageIndex + 1 : 0, onChange: p => gotoPage(p - 1), hideFirstAndLastPageLinks: true }),
  showRowCount && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", { className: "row-count-container" },
  !loading &&
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('%s-%s of %s', pageSize * pageIndex + (page.length && 1), pageSize * pageIndex + page.length, data.length))));



};__signature__(TableView, "useTable{{ getTableProps, getTableBodyProps, headerGroups, page, rows, prepareRow, pageCount, gotoPage, state: { pageIndex, pageSize }, }}", () => [react_table__WEBPACK_IMPORTED_MODULE_3__["useTable"]]);const _default = /*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TableView);/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(DEFAULT_PAGE_SIZE, "DEFAULT_PAGE_SIZE", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\TableView\\TableView.tsx");reactHotLoader.register(EmptyWrapperType, "EmptyWrapperType", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\TableView\\TableView.tsx");reactHotLoader.register(EmptyWrapper, "EmptyWrapper", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\TableView\\TableView.tsx");reactHotLoader.register(TableViewStyles, "TableViewStyles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\TableView\\TableView.tsx");reactHotLoader.register(TableView, "TableView", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\TableView\\TableView.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\TableView\\TableView.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/TableView/index.ts":
/*!*******************************************!*\
  !*** ./src/components/TableView/index.ts ***!
  \*******************************************/
/*! exports provided: EmptyWrapperType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableView */ "./src/components/TableView/TableView.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyWrapperType", function() { return _TableView__WEBPACK_IMPORTED_MODULE_0__["EmptyWrapperType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TableView__WEBPACK_IMPORTED_MODULE_0__["default"]; });

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

/***/ "./src/components/dataViewCommon/Pagination.tsx":
/*!******************************************************!*\
  !*** ./src/components/dataViewCommon/Pagination.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Pagination */ "./src/components/Pagination/index.tsx");
/* harmony import */ var react_ultimate_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ultimate-pagination */ "./node_modules/react-ultimate-pagination/lib/react-ultimate-pagination.js");
/* harmony import */ var react_ultimate_pagination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ultimate_pagination__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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



const ListViewPagination = Object(react_ultimate_pagination__WEBPACK_IMPORTED_MODULE_2__["createUltimatePagination"])({
  WrapperComponent: src_components_Pagination__WEBPACK_IMPORTED_MODULE_1__["default"],
  itemTypeToComponent: {
    [react_ultimate_pagination__WEBPACK_IMPORTED_MODULE_2__["ITEM_TYPES"].PAGE]: ({ value, isActive, onClick }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(src_components_Pagination__WEBPACK_IMPORTED_MODULE_1__["default"].Item, { active: isActive, onClick: onClick },
    value),

    [react_ultimate_pagination__WEBPACK_IMPORTED_MODULE_2__["ITEM_TYPES"].ELLIPSIS]: ({ isActive, onClick }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(src_components_Pagination__WEBPACK_IMPORTED_MODULE_1__["default"].Ellipsis, { disabled: isActive, onClick: onClick }),
    [react_ultimate_pagination__WEBPACK_IMPORTED_MODULE_2__["ITEM_TYPES"].PREVIOUS_PAGE_LINK]: ({ isActive, onClick }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(src_components_Pagination__WEBPACK_IMPORTED_MODULE_1__["default"].Prev, { disabled: isActive, onClick: onClick }),
    [react_ultimate_pagination__WEBPACK_IMPORTED_MODULE_2__["ITEM_TYPES"].NEXT_PAGE_LINK]: ({ isActive, onClick }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(src_components_Pagination__WEBPACK_IMPORTED_MODULE_1__["default"].Next, { disabled: isActive, onClick: onClick }),
    [react_ultimate_pagination__WEBPACK_IMPORTED_MODULE_2__["ITEM_TYPES"].FIRST_PAGE_LINK]: () => null,
    [react_ultimate_pagination__WEBPACK_IMPORTED_MODULE_2__["ITEM_TYPES"].LAST_PAGE_LINK]: () => null } });const _default =


ListViewPagination;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(ListViewPagination, "ListViewPagination", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\dataViewCommon\\Pagination.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\dataViewCommon\\Pagination.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/dataViewCommon/TableCollection.tsx":
/*!***********************************************************!*\
  !*** ./src/components/dataViewCommon/TableCollection.tsx ***!
  \***********************************************************/
/*! exports provided: Table, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ "./node_modules/@babel/runtime-corejs3/helpers/extends.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var src_components_Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Icon */ "./src/components/Icon/index.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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




const Table = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["styled"].table`
  background-color: ${({ theme }) => theme.colors.grayscale.light5};
  border-collapse: separate;
  border-radius: ${({ theme }) => theme.borderRadius}px;

  thead > tr > th {
    border: 0;
  }

  tbody {
    tr:first-of-type > td {
      border-top: 0;
    }
  }
  th {
    background: ${({ theme }) => theme.colors.grayscale.light5};
    position: sticky;
    top: 0;

    &:first-of-type {
      padding-left: ${({ theme }) => theme.gridUnit * 4}px;
    }

    &.xs {
      min-width: 25px;
    }
    &.sm {
      min-width: 50px;
    }
    &.md {
      min-width: 75px;
    }
    &.lg {
      min-width: 100px;
    }
    &.xl {
      min-width: 150px;
    }
    &.xxl {
      min-width: 200px;
    }

    span {
      white-space: nowrap;
      display: flex;
      align-items: center;
      line-height: 2;
    }

    svg {
      display: inline-block;
      position: relative;
    }
  }

  td {
    &.xs {
      width: 25px;
    }
    &.sm {
      width: 50px;
    }
    &.md {
      width: 75px;
    }
    &.lg {
      width: 100px;
    }
    &.xl {
      width: 150px;
    }
    &.xxl {
      width: 200px;
    }
  }

  .table-cell-loader {
    position: relative;

    .loading-bar {
      background-color: ${({ theme }) => theme.colors.secondary.light4};
      border-radius: 7px;

      span {
        visibility: hidden;
      }
    }

    &:after {
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      left: 0;
      content: '';
      display: block;
      width: 100%;
      height: 48px;
      background-image: linear-gradient(
        100deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0) 80%
      );
      background-size: 200px 48px;
      background-position: -100px 0;
      background-repeat: no-repeat;
      animation: loading-shimmer 1s infinite;
    }
  }

  .actions {
    white-space: nowrap;
    min-width: 100px;

    svg,
    i {
      margin-right: 8px;

      &:hover {
        path {
          fill: ${({ theme }) => theme.colors.primary.base};
        }
      }
    }
  }

  .table-row {
    .actions {
      opacity: 0;
      font-size: ${({ theme }) => theme.typography.sizes.xl}px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary.light5};

      .actions {
        opacity: 1;
        transition: opacity ease-in ${({ theme }) => theme.transitionTiming}s;
      }
    }
  }

  .table-row-selected {
    background-color: ${({ theme }) => theme.colors.secondary.light4};

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary.light4};
    }
  }

  .table-cell {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 300px;
    line-height: 1;
    vertical-align: middle;
    &:first-of-type {
      padding-left: ${({ theme }) => theme.gridUnit * 4}px;
    }
  }

  @keyframes loading-shimmer {
    40% {
      background-position: 100% 0;
    }

    100% {
      background-position: 100% 0;
    }
  }
`;
Table.displayName = 'table';const _default = /*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(({ getTableProps, getTableBodyProps, prepareRow, headerGroups, columns, rows, loading, highlightRowId }) => {var _context2;return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(Table, _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, getTableProps(), { className: "table table-hover", "data-test": "listview-table" }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("thead", null,
  _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(headerGroups).call(headerGroups, headerGroup => {var _context;return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("tr", headerGroup.getHeaderGroupProps(),
    _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context = headerGroup.headers).call(_context, column => {
      let sortIcon = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], { name: "sort" });
      if (column.isSorted && column.isSortedDesc) {
        sortIcon = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], { name: "sort-desc" });
      } else
      if (column.isSorted && !column.isSortedDesc) {
        sortIcon = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], { name: "sort-asc" });
      }
      return column.hidden ? null : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("th", _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, column.getHeaderProps(column.canSort ? column.getSortByToggleProps() : {}), { "data-test": "sort-header", className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
          [column.size || '']: column.size }) }),

      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", null,
      column.render('Header'),
      column.canSort && sortIcon));


    }));})),


  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("tbody", getTableBodyProps(),
  loading &&
  rows.length === 0 &&
  _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = [...new Array(25)]).call(_context2, (_, i) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("tr", { key: i },
  _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(columns).call(columns, (column, i2) => {
    if (column.hidden)
    return null;
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("td", { key: i2, className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('table-cell', {
        'table-cell-loader': loading,
        [column.size || '']: column.size }) },

    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", { className: "loading-bar", role: "progressbar" },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", null, "LOADING")));


  }))),

  rows.length > 0 &&
  _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(rows).call(rows, row => {var _context3;
    prepareRow(row);
    // @ts-ignore
    const rowId = row.original.id;
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("tr", _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ "data-test": "table-row" }, row.getRowProps(), { className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('table-row', {
        'table-row-selected': row.isSelected ||
        typeof rowId !== 'undefined' && rowId === highlightRowId }) }),

    _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = row.cells).call(_context3, cell => {
      if (cell.column.hidden)
      return null;
      const columnCellProps = cell.column.cellProps || {};
      return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("td", _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ "data-test": "table-row-cell", className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('table-cell', {
          'table-cell-loader': loading,
          [cell.column.size || '']: cell.column.size }) },
      cell.getCellProps(), columnCellProps),
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", { className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({ 'loading-bar': loading }), role: loading ? 'progressbar' : undefined },
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("span", { "data-test": "cell-text" }, cell.render('Cell'))));


    }));

  })));});/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(Table, "Table", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\dataViewCommon\\TableCollection.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\dataViewCommon\\TableCollection.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/dataViewCommon/index.ts":
/*!************************************************!*\
  !*** ./src/components/dataViewCommon/index.ts ***!
  \************************************************/
/*! exports provided: Pagination, TableCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination */ "./src/components/dataViewCommon/Pagination.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _Pagination__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _TableCollection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableCollection */ "./src/components/dataViewCommon/TableCollection.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableCollection", function() { return _TableCollection__WEBPACK_IMPORTED_MODULE_1__["default"]; });

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

/***/ "./src/visualizations/TimeTable/FormattedNumber.jsx":
/*!**********************************************************!*\
  !*** ./src/visualizations/TimeTable/FormattedNumber.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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




const propTypes = {
  num: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  format: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string };


const defaultProps = {
  num: 0,
  format: undefined };


function FormattedNumber({ num, format }) {
  if (format) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", { title: num }, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["formatNumber"])(format, num));
  }
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", null, num);
}

FormattedNumber.propTypes = propTypes;
FormattedNumber.defaultProps = defaultProps;const _default =

FormattedNumber;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(propTypes, "propTypes", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\FormattedNumber.jsx");reactHotLoader.register(defaultProps, "defaultProps", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\FormattedNumber.jsx");reactHotLoader.register(FormattedNumber, "FormattedNumber", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\FormattedNumber.jsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\FormattedNumber.jsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/visualizations/TimeTable/SparklineCell.jsx":
/*!********************************************************!*\
  !*** ./src/visualizations/TimeTable/SparklineCell.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ "./node_modules/@babel/runtime-corejs3/helpers/extends.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/reduce */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/number/is-nan */ "./node_modules/@babel/runtime-corejs3/core-js-stable/number/is-nan.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_ui_sparkline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data-ui/sparkline */ "./node_modules/@data-ui/sparkline/esm/annotation/HorizontalReferenceLine.js");
/* harmony import */ var _data_ui_sparkline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @data-ui/sparkline */ "./node_modules/@data-ui/shared/esm/enhancer/WithTooltip.js");
/* harmony import */ var _data_ui_sparkline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @data-ui/sparkline */ "./node_modules/@data-ui/sparkline/esm/chart/Sparkline.js");
/* harmony import */ var _data_ui_sparkline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @data-ui/sparkline */ "./node_modules/@data-ui/sparkline/esm/series/LineSeries.js");
/* harmony import */ var _data_ui_sparkline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @data-ui/sparkline */ "./node_modules/@data-ui/sparkline/esm/annotation/VerticalReferenceLine.js");
/* harmony import */ var _data_ui_sparkline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @data-ui/sparkline */ "./node_modules/@data-ui/sparkline/esm/series/PointSeries.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/dimension/getTextDimension.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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





const propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  data: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  numberFormat: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  yAxisBounds: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  showYAxis: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  renderTooltip: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func };

const defaultProps = {
  className: '',
  width: 300,
  height: 50,
  ariaLabel: '',
  numberFormat: undefined,
  yAxisBounds: [null, null],
  showYAxis: false,
  renderTooltip() {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])("div", null);
  } };


const MARGIN = {
  top: 8,
  right: 8,
  bottom: 8,
  left: 8 };

const tooltipProps = {
  style: {
    opacity: 0.8 },

  offsetTop: 0 };


function getSparklineTextWidth(text) {
  return (
    Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_12__["default"])({
      text,
      style: {
        fontSize: '12px',
        fontWeight: 200,
        letterSpacing: 0.4 } }).

    width + 5);

}

function isValidBoundValue(value) {
  return (
    value !== null &&
    value !== undefined &&
    value !== '' &&
    !_babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_3___default()(value));

}

class SparklineCell extends react__WEBPACK_IMPORTED_MODULE_4___default.a.Component {
  renderHorizontalReferenceLine(value, label) {
    return (
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_data_ui_sparkline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        reference: value,
        labelPosition: "right",
        renderLabel: () => label,
        stroke: "#bbb",
        strokeDasharray: "3 3",
        strokeWidth: 1 }));


  }

  render() {
    const {
      width,
      height,
      data,
      ariaLabel,
      numberFormat,
      yAxisBounds,
      showYAxis,
      renderTooltip } =
    this.props;

    const yScale = {};
    let hasMinBound = false;
    let hasMaxBound = false;

    if (yAxisBounds) {
      const [minBound, maxBound] = yAxisBounds;
      hasMinBound = isValidBoundValue(minBound);
      if (hasMinBound) {
        yScale.min = minBound;
      }
      hasMaxBound = isValidBoundValue(maxBound);
      if (hasMaxBound) {
        yScale.max = maxBound;
      }
    }

    let min;
    let max;
    let minLabel;
    let maxLabel;
    let labelLength = 0;
    if (showYAxis) {
      const [minBound, maxBound] = yAxisBounds;
      min = hasMinBound ?
      minBound :
      _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_2___default()(data).call(data, (acc, current) => Math.min(acc, current), data[0]);
      max = hasMaxBound ?
      maxBound :
      _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_2___default()(data).call(data, (acc, current) => Math.max(acc, current), data[0]);

      minLabel = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_13__["formatNumber"])(numberFormat, min);
      maxLabel = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_13__["formatNumber"])(numberFormat, max);
      labelLength = Math.max(
      getSparklineTextWidth(minLabel),
      getSparklineTextWidth(maxLabel));

    }

    const margin = {
      ...MARGIN,
      right: MARGIN.right + labelLength };


    return (
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_data_ui_sparkline__WEBPACK_IMPORTED_MODULE_7__["default"], {
        tooltipProps: tooltipProps,
        hoverStyles: null,
        renderTooltip: renderTooltip },

      ({ onMouseLeave, onMouseMove, tooltipData }) =>
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_data_ui_sparkline__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        ariaLabel: ariaLabel,
        width: width,
        height: height,
        margin: margin,
        data: data,
        onMouseLeave: onMouseLeave,
        onMouseMove: onMouseMove },
      yScale),

      showYAxis && this.renderHorizontalReferenceLine(min, minLabel),
      showYAxis && this.renderHorizontalReferenceLine(max, maxLabel),
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_data_ui_sparkline__WEBPACK_IMPORTED_MODULE_9__["default"], { showArea: false, stroke: "#767676" }),
      tooltipData &&
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_data_ui_sparkline__WEBPACK_IMPORTED_MODULE_10__["default"], {
        reference: tooltipData.index,
        strokeDasharray: "3 3",
        strokeWidth: 1 }),


      tooltipData &&
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_data_ui_sparkline__WEBPACK_IMPORTED_MODULE_11__["default"], {
        points: [tooltipData.index],
        fill: "#767676",
        strokeWidth: 1 }))));






  } // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {// @ts-ignore
    this[key] = eval(code);}}
SparklineCell.propTypes = propTypes;
SparklineCell.defaultProps = defaultProps;const _default =

SparklineCell;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(propTypes, "propTypes", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\SparklineCell.jsx");reactHotLoader.register(defaultProps, "defaultProps", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\SparklineCell.jsx");reactHotLoader.register(MARGIN, "MARGIN", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\SparklineCell.jsx");reactHotLoader.register(tooltipProps, "tooltipProps", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\SparklineCell.jsx");reactHotLoader.register(getSparklineTextWidth, "getSparklineTextWidth", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\SparklineCell.jsx");reactHotLoader.register(isValidBoundValue, "isValidBoundValue", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\SparklineCell.jsx");reactHotLoader.register(SparklineCell, "SparklineCell", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\SparklineCell.jsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\SparklineCell.jsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/visualizations/TimeTable/TimeTable.jsx":
/*!****************************************************!*\
  !*** ./src/visualizations/TimeTable/TimeTable.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/concat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reverse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/reverse */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reverse.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reverse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_reverse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/sort */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/reduce */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/parse-int */ "./node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/values */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/values.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var src_components_TableView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/components/TableView */ "./src/components/TableView/index.ts");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/time-format/TimeFormatterRegistrySingleton.js");
/* harmony import */ var _superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @superset-ui/chart-controls */ "./node_modules/@superset-ui/chart-controls/esm/components/InfoTooltipWithTrigger.js");
/* harmony import */ var _superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @superset-ui/chart-controls */ "./node_modules/@superset-ui/chart-controls/esm/components/MetricOption.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _FormattedNumber__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./FormattedNumber */ "./src/visualizations/TimeTable/FormattedNumber.jsx");
/* harmony import */ var _SparklineCell__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SparklineCell */ "./src/visualizations/TimeTable/SparklineCell.jsx");
/* harmony import */ var _TimeTable_less__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./TimeTable.less */ "./src/visualizations/TimeTable/TimeTable.less");
/* harmony import */ var _TimeTable_less__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_TimeTable_less__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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













const ACCESSIBLE_COLOR_BOUNDS = ['#ca0020', '#0571b0'];

function colorFromBounds(value, bounds, colorBounds = ACCESSIBLE_COLOR_BOUNDS) {
  if (bounds) {
    const [min, max] = bounds;
    const [minColor, maxColor] = colorBounds;
    if (min !== null && max !== null) {
      const colorScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_13__["scaleLinear"])().
      domain([min, (max + min) / 2, max]).
      range([minColor, 'grey', maxColor]);
      return colorScale(value);
    }
    if (min !== null) {
      return value >= min ? maxColor : minColor;
    }
    if (max !== null) {
      return value < max ? maxColor : minColor;
    }
  }
  return null;
}

const propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  height: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  // Example
  // {'2018-04-14 00:00:00': { 'SUM(metric_value)': 80031779.40047 }}
  data: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number)).isRequired,
  columnConfigs: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(
  prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
    colType: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
    comparisonType: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
    d3format: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
    key: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
    label: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
    timeLag: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number })).

  isRequired,
  rows: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(
  prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([
  prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string }),

  prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
    metric_name: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string })])).


  isRequired,
  rowType: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOf(['column', 'metric']).isRequired,
  url: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string };

const defaultProps = {
  className: '',
  height: undefined,
  url: '' };


const TimeTableStyles = _superset_ui_core__WEBPACK_IMPORTED_MODULE_15__["styled"].div`
  height: ${props => props.height}px;

  th {
    z-index: 1; // to cover sparkline
  }
`;

const TimeTable = ({
  className,
  height,
  data,
  columnConfigs,
  rowType,
  rows,
  url }) =>
{
  const memoizedColumns = Object(react__WEBPACK_IMPORTED_MODULE_10__["useMemo"])(
  () => [
  { accessor: 'metric', Header: 'Metric' },
  ..._babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(columnConfigs).call(columnConfigs, (columnConfig, i) => ({
    accessor: columnConfig.key,
    cellProps: columnConfig.colType === 'spark' && {
      style: { width: '1%' } },

    Header: () =>
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_24__["jsx"])(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null,
    columnConfig.label, ' ',
    columnConfig.tooltip &&
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_24__["jsx"])(_superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_18__["InfoTooltipWithTrigger"], {
      tooltip: columnConfig.tooltip,
      label: `tt-col-${i}`,
      placement: "top" })),




    sortType: (rowA, rowB, columnId) => {
      const rowAVal = _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_8___default()(rowA)[columnId].props['data-value'];
      const rowBVal = _babel_runtime_corejs3_core_js_stable_instance_values__WEBPACK_IMPORTED_MODULE_8___default()(rowB)[columnId].props['data-value'];
      return rowAVal - rowBVal;
    } }))],


  [columnConfigs]);


  const memoizedRows = Object(react__WEBPACK_IMPORTED_MODULE_10__["useMemo"])(() => {var _context4, _context5, _context6;
    const renderSparklineCell = (valueField, column, entries) => {
      let sparkData;
      if (column.timeRatio) {
        // Period ratio sparkline
        sparkData = [];
        for (let i = column.timeRatio; i < entries.length; i += 1) {
          const prevData = entries[i - column.timeRatio][valueField];
          if (prevData && prevData !== 0) {
            sparkData.push(entries[i][valueField] / prevData);
          } else {
            sparkData.push(null);
          }
        }
      } else {
        sparkData = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(entries).call(entries, d => d[valueField]);
      }

      return (
        Object(_emotion_react__WEBPACK_IMPORTED_MODULE_24__["jsx"])(_SparklineCell__WEBPACK_IMPORTED_MODULE_22__["default"], {
          width: _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(column.width, 10) || 300,
          height: _babel_runtime_corejs3_core_js_stable_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(column.height, 10) || 50,
          data: sparkData,
          "data-value": sparkData[sparkData.length - 1],
          ariaLabel: `spark-${valueField}`,
          numberFormat: column.d3format,
          yAxisBounds: column.yAxisBounds,
          showYAxis: column.showYAxis,
          renderTooltip: ({ index }) =>
          Object(_emotion_react__WEBPACK_IMPORTED_MODULE_24__["jsx"])("div", null,
          Object(_emotion_react__WEBPACK_IMPORTED_MODULE_24__["jsx"])("strong", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_16__["formatNumber"])(column.d3format, sparkData[index])),
          Object(_emotion_react__WEBPACK_IMPORTED_MODULE_24__["jsx"])("div", null,
          Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_17__["formatTime"])(
          column.dateFormat,
          moment__WEBPACK_IMPORTED_MODULE_20___default.a.utc(entries[index].time).toDate()))) }));






    };

    const renderValueCell = (valueField, column, reversedEntries) => {
      const recent = reversedEntries[0][valueField];
      let v;
      let errorMsg;
      if (column.colType === 'time') {
        // Time lag ratio
        const timeLag = column.timeLag || 0;
        const totalLag = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(reversedEntries).length;
        if (timeLag >= totalLag) {
          errorMsg = `The time lag set at ${timeLag} is too large for the length of data at ${reversedEntries.length}. No data available.`;
        } else {
          v = reversedEntries[timeLag][valueField];
        }
        if (column.comparisonType === 'diff') {
          v = recent - v;
        } else if (column.comparisonType === 'perc') {
          v = recent / v;
        } else if (column.comparisonType === 'perc_change') {
          v = recent / v - 1;
        }
        v = v || 0;
      } else if (column.colType === 'contrib') {var _context, _context2;
        // contribution to column total
        v =
        recent /
        _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_5___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(_context2 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(reversedEntries[0])).call(_context2,
        k => k !== 'time' ? reversedEntries[0][k] : null)).call(_context,
        (a, b) => a + b);
      } else if (column.colType === 'avg') {
        // Average over the last {timeLag}
        v = null;
        if (reversedEntries.length > 0) {var _context3;
          const stats = _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_5___default()(_context3 = _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_4___default()(reversedEntries).call(reversedEntries, undefined, column.timeLag)).call(_context3,
          function ({ count, sum }, entry) {
            return entry[valueField] !== undefined &&
            entry[valueField] !== null ?
            { count: count + 1, sum: sum + entry[valueField] } :
            { count, sum };
          },
          { count: 0, sum: 0 });

          if (stats.count > 0) {
            v = stats.sum / stats.count;
          }
        }
      }

      const color = colorFromBounds(v, column.bounds);

      return (
        Object(_emotion_react__WEBPACK_IMPORTED_MODULE_24__["jsx"])("span", {
          key: column.key,
          "data-value": v,
          style:
          color && {
            boxShadow: `inset 0px -2.5px 0px 0px ${color}`,
            borderRight: '2px solid #fff' } },



        errorMsg ||
        Object(_emotion_react__WEBPACK_IMPORTED_MODULE_24__["jsx"])("span", { style: { color } },
        Object(_emotion_react__WEBPACK_IMPORTED_MODULE_24__["jsx"])(_FormattedNumber__WEBPACK_IMPORTED_MODULE_21__["default"], { num: v, format: column.d3format }))));




    };

    const renderLeftCell = row => {
      const context = { metric: row };
      const fullUrl = url ? mustache__WEBPACK_IMPORTED_MODULE_12___default.a.render(url, context) : null;

      if (rowType === 'column') {
        const column = row;
        if (fullUrl) {
          return (
            Object(_emotion_react__WEBPACK_IMPORTED_MODULE_24__["jsx"])("a", { href: fullUrl, rel: "noopener noreferrer", target: "_blank" },
            column.label));


        }
        return column.label;
      }

      return (
        Object(_emotion_react__WEBPACK_IMPORTED_MODULE_24__["jsx"])(_superset_ui_chart_controls__WEBPACK_IMPORTED_MODULE_19__["MetricOption"], {
          metric: row,
          url: fullUrl,
          showFormula: false,
          openInNewWindow: true }));


    };

    const entries = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(_context4 = _babel_runtime_corejs3_core_js_stable_instance_sort__WEBPACK_IMPORTED_MODULE_3___default()(_context5 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_6___default()(data)).call(_context5)).call(_context4,

    time => ({ ...data[time], time }));
    const reversedEntries = _babel_runtime_corejs3_core_js_stable_instance_reverse__WEBPACK_IMPORTED_MODULE_2___default()(_context6 = _babel_runtime_corejs3_core_js_stable_instance_concat__WEBPACK_IMPORTED_MODULE_1___default()(entries).call(entries)).call(_context6);

    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_9___default()(rows).call(rows, row => {
      const valueField = row.label || row.metric_name;
      const cellValues = _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_5___default()(columnConfigs).call(columnConfigs, (acc, columnConfig) => {
        if (columnConfig.colType === 'spark') {
          return {
            ...acc,
            [columnConfig.key]: renderSparklineCell(
            valueField,
            columnConfig,
            entries) };


        }
        return {
          ...acc,
          [columnConfig.key]: renderValueCell(
          valueField,
          columnConfig,
          reversedEntries) };


      }, {});
      return { ...row, ...cellValues, metric: renderLeftCell(row) };
    });
  }, [columnConfigs, data, rowType, rows, url]);

  const defaultSort =
  rowType === 'column' && columnConfigs.length ?
  [
  {
    id: columnConfigs[0].key,
    desc: 'true' }] :


  [];

  return (
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_24__["jsx"])(TimeTableStyles, { className: `time-table ${className}`, height: height },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_24__["jsx"])(src_components_TableView__WEBPACK_IMPORTED_MODULE_14__["default"], {
      className: "table-no-hover",
      columns: memoizedColumns,
      data: memoizedRows,
      initialSortBy: defaultSort,
      withPagination: false })));



};__signature__(TimeTable, "useMemo{memoizedColumns}\nuseMemo{memoizedRows}");

TimeTable.propTypes = propTypes;
TimeTable.defaultProps = defaultProps;const _default =

TimeTable;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(ACCESSIBLE_COLOR_BOUNDS, "ACCESSIBLE_COLOR_BOUNDS", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\TimeTable.jsx");reactHotLoader.register(colorFromBounds, "colorFromBounds", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\TimeTable.jsx");reactHotLoader.register(propTypes, "propTypes", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\TimeTable.jsx");reactHotLoader.register(defaultProps, "defaultProps", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\TimeTable.jsx");reactHotLoader.register(TimeTableStyles, "TimeTableStyles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\TimeTable.jsx");reactHotLoader.register(TimeTable, "TimeTable", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\TimeTable.jsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\visualizations\\TimeTable\\TimeTable.jsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/visualizations/TimeTable/TimeTable.less":
/*!*****************************************************!*\
  !*** ./src/visualizations/TimeTable/TimeTable.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--8-1!../../../node_modules/less-loader/dist/cjs.js??ref--8-2!./TimeTable.less */ "./node_modules/css-loader/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/visualizations/TimeTable/TimeTable.less");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

}]);
//# sourceMappingURL=15.9ed865ea.chunk.js.map