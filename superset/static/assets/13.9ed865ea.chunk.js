(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/@data-ui/histogram/esm/axis/XAxis.js":
/*!***********************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/axis/XAxis.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return XAxis; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_axis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/axis */ "./node_modules/@data-ui/histogram/node_modules/@vx/axis/dist/vx-axis.es.js");
/* harmony import */ var _utils_propShapes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/propShapes */ "./node_modules/@data-ui/histogram/esm/utils/propShapes.js");




var propTypes = {
  axisStyles: _utils_propShapes__WEBPACK_IMPORTED_MODULE_3__["axisStylesShape"],
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element]),
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  // eslint-disable-line react/forbid-prop-types
  numTicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['bottom', 'top']),
  tickStyles: _utils_propShapes__WEBPACK_IMPORTED_MODULE_3__["tickStylesShape"],
  tickLabelProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tickFormat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tickValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])),
  // probably injected by parent
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var defaultProps = {
  axisStyles: {},
  label: null,
  labelProps: null,
  left: 0,
  numTicks: null,
  orientation: 'bottom',
  scale: null,
  tickFormat: null,
  tickLabelProps: undefined,
  tickStyles: {},
  top: 0,
  tickValues: undefined
};
function XAxis(_ref) {
  var axisStyles = _ref.axisStyles,
      label = _ref.label,
      labelProps = _ref.labelProps,
      top = _ref.top,
      left = _ref.left,
      numTicks = _ref.numTicks,
      orientation = _ref.orientation,
      scale = _ref.scale,
      tickFormat = _ref.tickFormat,
      passedTickLabelProps = _ref.tickLabelProps,
      tickStyles = _ref.tickStyles,
      tickValues = _ref.tickValues;
  if (!scale) return null;
  var Axis = orientation === 'bottom' ? _vx_axis__WEBPACK_IMPORTED_MODULE_2__["AxisBottom"] : _vx_axis__WEBPACK_IMPORTED_MODULE_2__["AxisTop"];
  var tickLabelProps = passedTickLabelProps;

  if (!tickLabelProps) {
    tickLabelProps = tickStyles.label && tickStyles.label[orientation] ? function () {
      return tickStyles.label[orientation];
    } : undefined;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Axis, {
    top: top,
    left: left,
    hideTicks: false,
    hideZero: false,
    label: label,
    labelProps: labelProps || (axisStyles.label || {})[orientation],
    numTicks: numTicks,
    scale: scale,
    stroke: axisStyles.stroke,
    strokeWidth: axisStyles.strokeWidth,
    tickFormat: tickFormat,
    tickLength: tickStyles.tickLength,
    tickLabelProps: tickLabelProps,
    tickStroke: tickStyles.stroke,
    tickValues: tickValues
  });
}
XAxis.propTypes = propTypes;
XAxis.defaultProps = defaultProps;
XAxis.displayName = 'XAxis';

/***/ }),

/***/ "./node_modules/@data-ui/histogram/esm/axis/YAxis.js":
/*!***********************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/axis/YAxis.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return YAxis; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_axis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/axis */ "./node_modules/@data-ui/histogram/node_modules/@vx/axis/dist/vx-axis.es.js");
/* harmony import */ var _utils_propShapes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/propShapes */ "./node_modules/@data-ui/histogram/esm/utils/propShapes.js");




var propTypes = {
  axisStyles: _utils_propShapes__WEBPACK_IMPORTED_MODULE_3__["axisStylesShape"],
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  // eslint-disable-line react/forbid-prop-types
  numTicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['left', 'right']),
  tickStyles: _utils_propShapes__WEBPACK_IMPORTED_MODULE_3__["tickStylesShape"],
  tickLabelProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tickFormat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tickValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])),
  // probably injected by parent
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
var defaultProps = {
  axisStyles: {},
  label: null,
  labelProps: null,
  left: 0,
  numTicks: 5,
  orientation: 'left',
  scale: null,
  tickFormat: null,
  tickLabelProps: undefined,
  tickStyles: {},
  tickValues: undefined,
  top: 0
};
function YAxis(_ref) {
  var axisStyles = _ref.axisStyles,
      label = _ref.label,
      labelProps = _ref.labelProps,
      top = _ref.top,
      left = _ref.left,
      numTicks = _ref.numTicks,
      orientation = _ref.orientation,
      scale = _ref.scale,
      tickFormat = _ref.tickFormat,
      passedTickLabelProps = _ref.tickLabelProps,
      tickStyles = _ref.tickStyles,
      tickValues = _ref.tickValues;
  if (!scale) return null;
  var Axis = orientation === 'left' ? _vx_axis__WEBPACK_IMPORTED_MODULE_2__["AxisLeft"] : _vx_axis__WEBPACK_IMPORTED_MODULE_2__["AxisRight"];
  var tickLabelProps = passedTickLabelProps;

  if (!tickLabelProps) {
    tickLabelProps = tickStyles.label && tickStyles.label[orientation] ? function () {
      return tickStyles.label[orientation];
    } : undefined;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Axis, {
    top: top,
    left: left,
    hideTicks: false,
    hideZero: false,
    label: label,
    labelProps: labelProps || (axisStyles.label || {})[orientation],
    numTicks: numTicks,
    scale: scale,
    stroke: axisStyles.stroke,
    strokeWidth: axisStyles.strokeWidth,
    tickFormat: tickFormat,
    tickLabelProps: tickLabelProps,
    tickLength: tickStyles.tickLength,
    tickStroke: tickStyles.stroke,
    tickValues: tickValues
  });
}
YAxis.propTypes = propTypes;
YAxis.defaultProps = defaultProps;
YAxis.displayName = 'YAxis';

/***/ }),

/***/ "./node_modules/@data-ui/histogram/esm/chart/Histogram.js":
/*!****************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/chart/Histogram.js ***!
  \****************************************************************/
/*! exports provided: propTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/group */ "./node_modules/@data-ui/histogram/node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var _vx_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/scale */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/dist/vx-scale.es.js");
/* harmony import */ var _data_ui_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-ui/shared */ "./node_modules/@data-ui/shared/esm/enhancer/WithTooltip.js");
/* harmony import */ var _utils_componentIsX__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/componentIsX */ "./node_modules/@data-ui/histogram/esm/utils/componentIsX.js");
/* harmony import */ var _utils_collectBinnedDataFromChildSeries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/collectBinnedDataFromChildSeries */ "./node_modules/@data-ui/histogram/esm/utils/collectBinnedDataFromChildSeries.js");
/* harmony import */ var _utils_componentName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/componentName */ "./node_modules/@data-ui/histogram/esm/utils/componentName.js");
/* harmony import */ var _utils_computeDomainsFromBins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/computeDomainsFromBins */ "./node_modules/@data-ui/histogram/esm/utils/computeDomainsFromBins.js");
/* harmony import */ var _utils_getValueKey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getValueKey */ "./node_modules/@data-ui/histogram/esm/utils/getValueKey.js");
/* harmony import */ var _utils_shallowCompareObjectEntries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/shallowCompareObjectEntries */ "./node_modules/@data-ui/histogram/esm/utils/shallowCompareObjectEntries.js");
/* harmony import */ var _utils_propShapes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/propShapes */ "./node_modules/@data-ui/histogram/esm/utils/propShapes.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint complexity: ['error', 17] */












var propTypes = _extends({}, _data_ui_shared__WEBPACK_IMPORTED_MODULE_4__["withTooltipPropTypes"], {
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  binValues: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string])),
  binCount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  binType: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['numeric', 'categorical']),
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired,
  cumulative: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  limits: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number),
  // values outside the limits are ignored
  margin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    right: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
  }),
  normalized: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  renderTooltip: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  theme: _utils_propShapes__WEBPACK_IMPORTED_MODULE_11__["themeShape"],
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  valueAccessor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
});
var defaultProps = {
  binCount: 10,
  binType: 'numeric',
  binValues: null,
  cumulative: false,
  horizontal: false,
  limits: null,
  margin: {
    top: 32,
    right: 32,
    bottom: 64,
    left: 64
  },
  normalized: false,
  renderTooltip: null,
  theme: {},
  valueAccessor: function valueAccessor(d) {
    return d;
  }
};

var Histogram =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Histogram, _React$PureComponent);

  function Histogram(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this.state = _this.getStateFromProps(props);
    return _this;
  }

  var _proto = Histogram.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var shouldComputeBinsAndScales = false; // eslint-disable-next-line react/destructuring-assignment

    if (['width', 'height', 'children'].some(function (prop) {
      return _this2.props[prop] !== nextProps[prop];
    })) {
      shouldComputeBinsAndScales = true;
    }

    if (['margin'].some( // eslint-disable-next-line react/destructuring-assignment
    function (prop) {
      return !Object(_utils_shallowCompareObjectEntries__WEBPACK_IMPORTED_MODULE_10__["default"])(_this2.props[prop], nextProps[prop]);
    })) {
      shouldComputeBinsAndScales = true;
    }

    if (shouldComputeBinsAndScales) this.setState(this.getStateFromProps(nextProps));
  };

  _proto.getStateFromProps = function getStateFromProps(props) {
    var dimensions = this.getDimmensions(props);
    var binsByIndex = this.getBinnedData(props);
    var scales = this.getScales(props, binsByIndex, dimensions);
    return _extends({
      binsByIndex: binsByIndex
    }, dimensions, scales);
  };

  _proto.getDimmensions = function getDimmensions(props) {
    var _ref = props || this.props,
        margin = _ref.margin,
        width = _ref.width,
        height = _ref.height;

    var completeMargin = _extends({}, defaultProps.margin, margin);

    return {
      margin: completeMargin,
      innerHeight: height - completeMargin.top - completeMargin.bottom,
      innerWidth: width - completeMargin.left - completeMargin.right
    };
  };

  _proto.getBinnedData = function getBinnedData(props) {
    var _ref2 = props || this.props,
        children = _ref2.children,
        binCount = _ref2.binCount,
        binType = _ref2.binType,
        binValues = _ref2.binValues,
        limits = _ref2.limits,
        valueAccessor = _ref2.valueAccessor;

    return Object(_utils_collectBinnedDataFromChildSeries__WEBPACK_IMPORTED_MODULE_6__["default"])({
      children: children,
      binCount: binCount,
      binType: binType,
      binValues: binValues,
      limits: limits,
      valueAccessor: valueAccessor
    });
  };

  _proto.getScales = function getScales(props, binsByIndex, _ref3) {
    var innerHeight = _ref3.innerHeight,
        innerWidth = _ref3.innerWidth;

    var _ref4 = props || this.props,
        binType = _ref4.binType,
        binValues = _ref4.binValues,
        cumulative = _ref4.cumulative,
        horizontal = _ref4.horizontal,
        normalized = _ref4.normalized;

    var binScaleFunc = binType === 'numeric' ? _vx_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"] : _vx_scale__WEBPACK_IMPORTED_MODULE_3__["scaleBand"];
    var valueKey = Object(_utils_getValueKey__WEBPACK_IMPORTED_MODULE_9__["default"])({
      normalized: normalized,
      cumulative: cumulative
    });

    var _computeDomainsFromBi = Object(_utils_computeDomainsFromBins__WEBPACK_IMPORTED_MODULE_8__["default"])({
      binsByIndex: binsByIndex,
      binType: binType,
      binValues: binValues,
      valueKey: valueKey
    }),
        binDomain = _computeDomainsFromBi.binDomain,
        valueDomain = _computeDomainsFromBi.valueDomain;

    var binRange = horizontal ? [innerHeight, 0] : [0, innerWidth];
    var valueRange = horizontal ? [0, innerWidth] : [innerHeight, 0]; // when viewing categorical data horizontally it is more natural to
    // read alphabetical from top down

    if (horizontal && binType === 'categorical') binRange.reverse();
    return {
      binScale: binScaleFunc({
        range: binRange,
        domain: binDomain
      }),
      valueScale: Object(_vx_scale__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"])({
        range: valueRange,
        domain: valueDomain
      }),
      valueKey: valueKey
    };
  };

  _proto.render = function render() {
    var renderTooltip = this.props.renderTooltip;

    if (renderTooltip) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_data_ui_shared__WEBPACK_IMPORTED_MODULE_4__["default"], {
        renderTooltip: renderTooltip
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Histogram, _extends({}, this.props, {
        renderTooltip: null
      })));
    }

    var _this$props = this.props,
        ariaLabel = _this$props.ariaLabel,
        binType = _this$props.binType,
        binValues = _this$props.binValues,
        children = _this$props.children,
        height = _this$props.height,
        horizontal = _this$props.horizontal,
        onMouseLeave = _this$props.onMouseLeave,
        onMouseMove = _this$props.onMouseMove,
        theme = _this$props.theme,
        valueAccessor = _this$props.valueAccessor,
        width = _this$props.width;
    var _this$state = this.state,
        binsByIndex = _this$state.binsByIndex,
        binScale = _this$state.binScale,
        innerHeight = _this$state.innerHeight,
        innerWidth = _this$state.innerWidth,
        margin = _this$state.margin,
        valueKey = _this$state.valueKey,
        valueScale = _this$state.valueScale;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      "aria-label": ariaLabel,
      role: "img",
      width: width,
      height: height
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_2__["Group"], {
      left: margin.left,
      top: margin.top
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(children, function (Child, index) {
      var name = Object(_utils_componentName__WEBPACK_IMPORTED_MODULE_7__["default"])(Child);

      if (Object(_utils_componentIsX__WEBPACK_IMPORTED_MODULE_5__["isSeries"])(name)) {
        var binnedData = binsByIndex[index];
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(Child, {
          binScale: binScale,
          binType: binType,
          binnedData: binnedData,
          horizontal: horizontal,
          valueAccessor: valueAccessor,
          valueKey: valueKey,
          valueScale: valueScale,
          onMouseLeave: onMouseLeave,
          onMouseMove: onMouseMove
        });
      } else if (Object(_utils_componentIsX__WEBPACK_IMPORTED_MODULE_5__["isAxis"])(name)) {
        var styleKey = name[0].toLowerCase();
        var binOrValue = name === 'XAxis' && !horizontal || name === 'YAxis' && horizontal ? 'bin' : 'value';
        var tickValues = Child.props.tickValues || (binOrValue === 'bin' && binValues ? binValues : null);
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(Child, {
          top: name === 'YAxis' || Child.props.orientation === 'top' ? 0 : innerHeight,
          left: name === 'XAxis' || Child.props.orientation === 'left' ? 0 : innerWidth,
          label: Child.props.label || (binOrValue === 'value' ? valueKey : null),
          scale: binOrValue === 'value' ? valueScale : binScale,
          axisStyles: _extends({}, theme[styleKey + "AxisStyles"], Child.props.axisStyles),
          tickStyles: _extends({}, theme[styleKey + "TickStyles"], Child.props.tickStyles),
          tickValues: tickValues
        });
      }

      return Child;
    })));
  };

  return Histogram;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);

Histogram.propTypes = propTypes;
Histogram.defaultProps = defaultProps;
Histogram.displayName = 'Histogram';
/* harmony default export */ __webpack_exports__["default"] = (Histogram);

/***/ }),

/***/ "./node_modules/@data-ui/histogram/esm/series/BarSeries.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/series/BarSeries.js ***!
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
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-ui/theme */ "./node_modules/@data-ui/theme/esm/chartTheme.js");
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/group */ "./node_modules/@data-ui/histogram/node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/shape */ "./node_modules/@data-ui/histogram/node_modules/@vx/shape/dist/vx-shape.es.js");
/* harmony import */ var _animated_AnimatedBarSeries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animated/AnimatedBarSeries */ "./node_modules/@data-ui/histogram/esm/series/animated/AnimatedBarSeries.js");
/* harmony import */ var _utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/callOrValue */ "./node_modules/@data-ui/histogram/esm/utils/callOrValue.js");
/* harmony import */ var _utils_propShapes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/propShapes */ "./node_modules/@data-ui/histogram/esm/utils/propShapes.js");








var propTypes = {
  animated: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  rawData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string])),
  // eslint-disable-line react/no-unused-prop-types
  binnedData: _utils_propShapes__WEBPACK_IMPORTED_MODULE_7__["binnedDataShape"],
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  fillOpacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  valueKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  // likely injected by parent Histogram
  binScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  valueScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
var defaultProps = {
  animated: true,
  rawData: [],
  binnedData: [],
  binScale: null,
  fill: _data_ui_theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.default,
  fillOpacity: 0.7,
  horizontal: false,
  onClick: null,
  onMouseMove: null,
  onMouseLeave: null,
  stroke: '#FFFFFF',
  strokeWidth: 1,
  valueKey: 'count',
  valueScale: null
};

function BarSeries(_ref) {
  var animated = _ref.animated,
      binnedData = _ref.binnedData,
      binScale = _ref.binScale,
      fill = _ref.fill,
      fillOpacity = _ref.fillOpacity,
      horizontal = _ref.horizontal,
      onClick = _ref.onClick,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      valueKey = _ref.valueKey,
      valueScale = _ref.valueScale;
  if (!binScale || !valueScale || !binnedData || binnedData.length === 0) return null;
  var maxBarLength = Math.max.apply(Math, valueScale.range());
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_3__["Group"], null, animated && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_animated_AnimatedBarSeries__WEBPACK_IMPORTED_MODULE_5__["default"], {
    binnedData: binnedData,
    binScale: binScale,
    horizontal: horizontal,
    fill: fill,
    fillOpacity: fillOpacity,
    onClick: onClick,
    onMouseMove: onMouseMove,
    onMouseLeave: onMouseLeave,
    stroke: stroke,
    strokeWidth: strokeWidth,
    valueKey: valueKey,
    valueScale: valueScale
  }), !animated && binnedData.map(function (d, i) {
    var binPosition = binScale(d.bin || (horizontal ? d.bin1 : d.bin0));
    var barLength = horizontal ? valueScale(d[valueKey]) : maxBarLength - valueScale(d[valueKey]);
    var barWidth = binScale.bandwidth ? binScale.bandwidth() // categorical
    : Math.abs(binScale(binnedData[i].bin1) - binScale(binnedData[i].bin0)); // numeric

    var color = d.fill || Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__["default"])(fill, d, i);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_4__["Bar"], {
      key: "bar-" + binPosition,
      x: horizontal ? 0 : binPosition,
      y: horizontal ? binPosition : maxBarLength - barLength,
      width: horizontal ? barLength : barWidth,
      height: horizontal ? barWidth : barLength,
      fill: color,
      fillOpacity: typeof fillOpacity === 'undefined' ? Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__["default"])(fillOpacity, d, i) : fillOpacity,
      stroke: d.stroke || Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__["default"])(stroke, d, i),
      strokeWidth: d.strokeWidth || Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__["default"])(strokeWidth, d, i),
      onClick: onClick && function () {
        return function (event) {
          onClick({
            event: event,
            data: binnedData,
            datum: d,
            color: color,
            index: i
          });
        };
      },
      onMouseMove: onMouseMove && function () {
        return function (event) {
          onMouseMove({
            event: event,
            data: binnedData,
            datum: d,
            color: color,
            index: i
          });
        };
      },
      onMouseLeave: onMouseLeave && function () {
        return onMouseLeave;
      }
    });
  }));
}

BarSeries.propTypes = propTypes;
BarSeries.defaultProps = defaultProps;
BarSeries.displayName = 'BarSeries';
/* harmony default export */ __webpack_exports__["default"] = (BarSeries);

/***/ }),

/***/ "./node_modules/@data-ui/histogram/esm/series/animated/AnimatedBarSeries.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/series/animated/AnimatedBarSeries.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-move */ "./node_modules/react-move/es/index.js");
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data-ui/theme */ "./node_modules/@data-ui/theme/esm/chartTheme.js");
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/group */ "./node_modules/@data-ui/histogram/node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/shape */ "./node_modules/@data-ui/histogram/node_modules/@vx/shape/dist/vx-shape.es.js");
/* harmony import */ var _utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/callOrValue */ "./node_modules/@data-ui/histogram/esm/utils/callOrValue.js");
/* harmony import */ var _utils_propShapes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/propShapes */ "./node_modules/@data-ui/histogram/esm/utils/propShapes.js");








var propTypes = {
  rawData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string])),
  // eslint-disable-line react/no-unused-prop-types
  binnedData: _utils_propShapes__WEBPACK_IMPORTED_MODULE_7__["binnedDataShape"],
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  fillOpacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  valueKey: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  // likely injected by parent Histogram
  binScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  valueScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  keyAccessor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
var defaultProps = {
  rawData: [],
  binnedData: [],
  binScale: null,
  fill: _data_ui_theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.default,
  fillOpacity: 0.7,
  horizontal: false,
  onClick: null,
  onMouseMove: null,
  onMouseLeave: null,
  stroke: '#FFFFFF',
  strokeWidth: 1,
  valueKey: 'count',
  valueScale: null,
  keyAccessor: function keyAccessor(d) {
    return d.id;
  }
};
var INDEX_DELAY_MULTIPLIER = 10;

var getBin = function getBin(d) {
  return typeof d.bin === 'undefined' ? d.bin0 : d.bin;
};

var getBin1 = function getBin1(d) {
  return typeof d.bin === 'undefined' ? d.bin1 : d.bin;
};

function AnimatedBarSeries(_ref) {
  var binnedData = _ref.binnedData,
      valueScale = _ref.valueScale,
      binScale = _ref.binScale,
      horizontal = _ref.horizontal,
      keyAccessor = _ref.keyAccessor,
      fill = _ref.fill,
      fillOpacity = _ref.fillOpacity,
      onClick = _ref.onClick,
      onMouseMove = _ref.onMouseMove,
      onMouseLeave = _ref.onMouseLeave,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      valueKey = _ref.valueKey;
  var maxBarLength = Math.max.apply(Math, valueScale.range()); // compute once and use throughout

  var barWidths = binnedData.map(function (_, i) {
    return binScale.bandwidth ? binScale.bandwidth() // categorical
    : Math.abs(binScale(binnedData[i].bin1) - binScale(binnedData[i].bin0));
  } // numeric
  );

  var getValue = function getValue(d) {
    return d[valueKey];
  };

  var getX = horizontal ? getValue : getBin;
  var getY = horizontal ? getBin1 : getValue;
  var xScale = horizontal ? valueScale : binScale;
  var yScale = horizontal ? binScale : valueScale;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_move__WEBPACK_IMPORTED_MODULE_2__["NodeGroup"], {
    data: binnedData,
    keyAccessor: keyAccessor,
    start: function start(d, i) {
      return {
        x: horizontal ? 0 : xScale(getX(d)),
        y: horizontal ? yScale(getY(d)) : maxBarLength,
        fill: d.fill || Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__["default"])(fill, d, i),
        width: horizontal ? 0 : barWidths[i],
        height: horizontal ? barWidths[i] : 0
      };
    },
    enter: function enter(d, i) {
      return {
        x: [horizontal ? 0 : xScale(getX(d))],
        y: [yScale(getY(d))],
        width: [horizontal ? xScale(getX(d)) : barWidths[i]],
        height: [horizontal ? barWidths[i] : maxBarLength - yScale(getY(d))],
        fill: [d.fill || Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__["default"])(fill, d, i)],
        stroke: [d.stroke || Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__["default"])(stroke, d, i)],
        timing: {
          duration: 300,
          delay: INDEX_DELAY_MULTIPLIER * i
        }
      };
    },
    update: function update(d, i) {
      return {
        x: [horizontal ? 0 : xScale(getX(d))],
        y: [yScale(getY(d))],
        width: [horizontal ? xScale(getX(d)) : barWidths[i]],
        height: [horizontal ? barWidths[i] : maxBarLength - yScale(getY(d))],
        fill: [d.fill || Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__["default"])(fill, d, i)],
        stroke: [d.stroke || Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__["default"])(stroke, d, i)],
        timing: {
          duration: 300,
          delay: INDEX_DELAY_MULTIPLIER * i
        }
      };
    },
    leave: function leave(d, i) {
      return {
        x: horizontal ? 0 : xScale(getX(d)),
        y: horizontal ? yScale(getY(d)) : maxBarLength,
        width: horizontal ? 0 : barWidths[i],
        height: horizontal ? barWidths[i] : 0,
        timing: {
          duration: 300,
          delay: INDEX_DELAY_MULTIPLIER / 2 * i
        }
      };
    }
  }, function (data) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_4__["Group"], null, data.map(function (modifiedDatum, i) {
      var key = modifiedDatum.key,
          rawDatum = modifiedDatum.data,
          d = modifiedDatum.state;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_5__["Bar"], {
        key: "bar" + key,
        x: d.x,
        y: d.y,
        width: d.width,
        height: d.height,
        fill: d.fill,
        stroke: d.stroke,
        fillOpacity: typeof fillOpacity === 'undefined' ? Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__["default"])(fillOpacity, rawDatum, i) : fillOpacity,
        strokeWidth: rawDatum.strokeWidth || Object(_utils_callOrValue__WEBPACK_IMPORTED_MODULE_6__["default"])(strokeWidth, rawDatum, i),
        onClick: onClick && function () {
          return function (event) {
            onClick({
              event: event,
              datum: rawDatum,
              data: binnedData,
              color: d.fill,
              index: i
            });
          };
        },
        onMouseMove: onMouseMove && function () {
          return function (event) {
            onMouseMove({
              event: event,
              datum: rawDatum,
              data: binnedData,
              color: d.fill,
              index: i
            });
          };
        },
        onMouseLeave: onMouseLeave && function () {
          return onMouseLeave;
        }
      });
    }));
  });
}

AnimatedBarSeries.propTypes = propTypes;
AnimatedBarSeries.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AnimatedBarSeries);

/***/ }),

/***/ "./node_modules/@data-ui/histogram/esm/utils/addDensityAndCumulativeValuesToBins.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/utils/addDensityAndCumulativeValuesToBins.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addDensityAndCumulativeValuesToBins; });
/* eslint no-param-reassign: 0 */
// bins should minimally have the shape
// Array<Object{ count: Number }>
function addDensityAndCumulativeValuesToBins(bins) {
  var cumulative = 0;
  bins.forEach(function (bin) {
    cumulative += isNaN(bin.count) ? 0 : bin.count; // eslint-disable-line no-restricted-globals

    bin.cumulative = cumulative;
  });
  var total = cumulative;
  bins.forEach(function (bin) {
    bin.density = bin.count / total;
    bin.cumulativeDensity = bin.cumulative / total;
  });
}

/***/ }),

/***/ "./node_modules/@data-ui/histogram/esm/utils/binCategoricalData.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/utils/binCategoricalData.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return binCategoricalData; });
/* harmony import */ var _caseInsensitiveSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caseInsensitiveSort */ "./node_modules/@data-ui/histogram/esm/utils/caseInsensitiveSort.js");


var sortBins = function sortBins(a, b) {
  return Object(_caseInsensitiveSort__WEBPACK_IMPORTED_MODULE_0__["default"])(a.bin, b.bin);
};
/*
 * handles binning of categorical data by series index
 * if binValues are passed, ignores other bin values that are encountered
 *
 * returns an object of bins keyed on series index with the following shape
 *  {
 *    [seriesIdx]: Array<Object{ bin: String, data: Array<datum>, count: Number }>,
 *  }
 */


function binCategoricalData(_ref) {
  var rawDataByIndex = _ref.rawDataByIndex,
      valueAccessor = _ref.valueAccessor,
      _ref$binValues = _ref.binValues,
      binValues = _ref$binValues === void 0 ? null : _ref$binValues;
  var binsByIndex = {};
  Object.keys(rawDataByIndex).forEach(function (index) {
    var data = rawDataByIndex[index];
    var bins = {};
    data.forEach(function (datum) {
      var bin = valueAccessor(datum);
      bins[bin] = bins[bin] || {
        bin: bin,
        data: [],
        count: 0,
        id: bin
      };
      bins[bin].data.push(datum);
      bins[bin].count += 1;
    }); // convert to an array of bins

    if (binValues) {
      binsByIndex[index] = binValues.map(function (bin) {
        return bins[bin] || {
          bin: bin,
          count: 0,
          data: []
        };
      });
    } else {
      binsByIndex[index] = Object.values(bins).sort(sortBins);
    }
  });
  return binsByIndex;
}

/***/ }),

/***/ "./node_modules/@data-ui/histogram/esm/utils/binNumericData.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/utils/binNumericData.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return binNumericData; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-scale */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/index.js");


var DEFAULT_BIN_COUNT = 10;
/*
 * handles binning of numeric data by series index
 * if binValues are passed, ignores other bin values that are encountered
 *
 * returns an object of bins keyed on series index with the following shape
 * {
 *   [seriesIdx]: Array<Object{
 *      bin0: String,
 *      bin1: String,
 *      data: Array<datum>,
 *      count: Number,
 *      id: String,
 *    }>,
 * }
 */

function binNumericData(_ref) {
  var allData = _ref.allData,
      _ref$binCount = _ref.binCount,
      userBinCount = _ref$binCount === void 0 ? DEFAULT_BIN_COUNT : _ref$binCount,
      binValues = _ref.binValues,
      limits = _ref.limits,
      rawDataByIndex = _ref.rawDataByIndex,
      valueAccessor = _ref.valueAccessor;
  var binCount = Array.isArray(binValues) ? binValues.length : userBinCount;
  var binsByIndex = {};
  var histogram = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["histogram"])();
  var extent = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["extent"])(allData, valueAccessor);

  if (binValues) {
    // account for extent of binValues if passed
    var binExtent = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["extent"])(binValues);
    extent = [Math.min(binExtent[0], extent[0]), Math.max(binExtent[1], extent[1])];
  }

  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().domain(extent).nice(binCount);
  histogram.domain(limits || scale.domain()).thresholds(binValues || scale.ticks(binCount));
  Object.keys(rawDataByIndex).forEach(function (index) {
    var data = rawDataByIndex[index];
    var seriesBins = histogram.value(valueAccessor)(data); // if the last bin equals the upper bound of the second to last bin, combine them
    // see https://github.com/d3/d3-array/issues/46#issuecomment-269873644

    var lastBinIndex = seriesBins.length - 1;
    var lastBin = seriesBins[lastBinIndex];
    var nextToLastBin = seriesBins[lastBinIndex - 1];
    var shouldCombineEndBins = nextToLastBin && nextToLastBin.x1 === lastBin.x0 && lastBin.x1 === lastBin.x0;
    var filteredBins = shouldCombineEndBins ? seriesBins.slice(0, -1) : seriesBins;
    binsByIndex[index] = filteredBins.map(function (bin, i) {
      return {
        bin0: bin.x0,
        // if the upper limit equals the lower one, use the delta between this bin and the last
        bin1: bin.x0 === bin.x1 ? i > 0 && bin.x0 + bin.x0 - seriesBins[i - 1].x0 || bin.x1 + 1 : bin.x1,
        data: [].concat(bin).concat(shouldCombineEndBins && (shouldCombineEndBins && i === lastBinIndex - 1 ? lastBin : [])),
        // if the last bin was inclusive / omitted, add its count to the last bin
        count: bin.length + (shouldCombineEndBins && i === lastBinIndex - 1 ? lastBin.length || 0 : 0),
        id: i.toString()
      };
    });
  });
  return binsByIndex;
}

/***/ }),

/***/ "./node_modules/@data-ui/histogram/esm/utils/callOrValue.js":
/*!******************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/utils/callOrValue.js ***!
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

/***/ "./node_modules/@data-ui/histogram/esm/utils/caseInsensitiveSort.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/utils/caseInsensitiveSort.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return caseInsensitiveSort; });
function caseInsensitiveSort(a, b) {
  if (!a.toLowerCase || !b.toLowerCase) return a - b;
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  if (a.toLowerCase() > b.toLowerCase()) return 1;
  return 0;
}

/***/ }),

/***/ "./node_modules/@data-ui/histogram/esm/utils/collectBinnedDataFromChildSeries.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/utils/collectBinnedDataFromChildSeries.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collectBinnedDataFromChildSeries; });
/* harmony import */ var _addDensityAndCumulativeValuesToBins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addDensityAndCumulativeValuesToBins */ "./node_modules/@data-ui/histogram/esm/utils/addDensityAndCumulativeValuesToBins.js");
/* harmony import */ var _binNumericData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binNumericData */ "./node_modules/@data-ui/histogram/esm/utils/binNumericData.js");
/* harmony import */ var _binCategoricalData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binCategoricalData */ "./node_modules/@data-ui/histogram/esm/utils/binCategoricalData.js");
/* harmony import */ var _collectDataFromChildSeries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collectDataFromChildSeries */ "./node_modules/@data-ui/histogram/esm/utils/collectDataFromChildSeries.js");




function collectBinnedDataFromChildSeries(_ref) {
  var children = _ref.children,
      binCount = _ref.binCount,
      binType = _ref.binType,
      binValues = _ref.binValues,
      limits = _ref.limits,
      valueAccessor = _ref.valueAccessor;

  var _collectDataFromChild = Object(_collectDataFromChildSeries__WEBPACK_IMPORTED_MODULE_3__["default"])(children),
      allRawData = _collectDataFromChild.allRawData,
      rawDataByIndex = _collectDataFromChild.rawDataByIndex,
      binnedDataByIndex = _collectDataFromChild.binnedDataByIndex;

  var result = binnedDataByIndex;

  if (Object.keys(binnedDataByIndex).length === 0) {
    var binningFunc = binType === 'numeric' ? _binNumericData__WEBPACK_IMPORTED_MODULE_1__["default"] : _binCategoricalData__WEBPACK_IMPORTED_MODULE_2__["default"];
    result = binningFunc({
      allData: allRawData,
      rawDataByIndex: rawDataByIndex,
      valueAccessor: valueAccessor,
      limits: limits,
      binCount: binCount,
      binValues: binValues
    });
  }

  Object.values(result).forEach(function (bins) {
    Object(_addDensityAndCumulativeValuesToBins__WEBPACK_IMPORTED_MODULE_0__["default"])(bins);
  });
  return result;
}

/***/ }),

/***/ "./node_modules/@data-ui/histogram/esm/utils/collectDataFromChildSeries.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/utils/collectDataFromChildSeries.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collectDataFromChildSeries; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _componentName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentName */ "./node_modules/@data-ui/histogram/esm/utils/componentName.js");
/* harmony import */ var _componentIsX__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentIsX */ "./node_modules/@data-ui/histogram/esm/utils/componentIsX.js");



function collectDataFromChildSeries(children) {
  var allRawData = [];
  var allBinnedData = [];
  var rawDataByIndex = {};
  var binnedDataByIndex = {};
  react__WEBPACK_IMPORTED_MODULE_0__["Children"].forEach(children, function (Child, i) {
    var name = Object(_componentName__WEBPACK_IMPORTED_MODULE_1__["default"])(Child);

    if (Object(_componentIsX__WEBPACK_IMPORTED_MODULE_2__["isSeries"])(name)) {
      var rawData = Child.props.rawData;
      var binnedData = Child.props.binnedData;

      if (rawData && rawData.length > 0) {
        rawDataByIndex[i] = rawData;
        allRawData = allRawData.concat(rawData);
      }

      if (binnedData && binnedData.length > 0) {
        binnedDataByIndex[i] = binnedData;
        allBinnedData = allBinnedData.concat(binnedData);
      }
    }
  });
  return {
    allBinnedData: allBinnedData,
    allRawData: allRawData,
    binnedDataByIndex: binnedDataByIndex,
    rawDataByIndex: rawDataByIndex
  };
}

/***/ }),

/***/ "./node_modules/@data-ui/histogram/esm/utils/componentIsX.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/utils/componentIsX.js ***!
  \*******************************************************************/
/*! exports provided: isAxis, isSeries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAxis", function() { return isAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSeries", function() { return isSeries; });
function isAxis(name) {
  return /axis/gi.test(name);
}
function isSeries(name) {
  return /series/gi.test(name);
}

/***/ }),

/***/ "./node_modules/@data-ui/histogram/esm/utils/componentName.js":
/*!********************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/utils/componentName.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return componentName; });
function componentName(component) {
  if (component && component.type) {
    return component.type.displayName || component.type.name || 'Component';
  }

  return 'Component';
}

/***/ }),

/***/ "./node_modules/@data-ui/histogram/esm/utils/computeDomainsFromBins.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/utils/computeDomainsFromBins.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeDomainsFromBins; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _caseInsensitiveSort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caseInsensitiveSort */ "./node_modules/@data-ui/histogram/esm/utils/caseInsensitiveSort.js");


/*
 * Computes the bin and value domains from numeric or categorical bins
 */

function computeDomainsFromBins(_ref) {
  var binsByIndex = _ref.binsByIndex,
      binType = _ref.binType,
      valueKey = _ref.valueKey,
      binValues = _ref.binValues;
  var binDomain;
  var valueDomain;
  Object.values(binsByIndex).forEach(function (bins) {
    var currValueMax = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["max"])(bins, function (d) {
      return d[valueKey];
    });

    if (valueDomain) {
      valueDomain[1] = Math.max(currValueMax, valueDomain[1]);
    } else {
      valueDomain = [0, currValueMax];
    }

    if (binType === 'numeric') {
      if (binDomain) {
        binDomain[0] = Math.min(bins[0].bin0, binDomain[0]);
        binDomain[1] = Math.max(bins[bins.length - 1].bin1, binDomain[1]);
      } else {
        binDomain = [bins[0].bin0, bins[bins.length - 1].bin1];
      }
    } else {
      if (!binDomain) binDomain = {}; // use lookup to avoid lots of Array scans

      bins.forEach(function (bin) {
        binDomain[bin.bin] = true;
      });
    }
  });

  if (Array.isArray(binValues)) {
    var providedBinsCoverDomain = true;
    binValues.forEach(function (binValue) {
      if (!(binValue in binDomain)) {
        providedBinsCoverDomain = false;
      }
    });

    if (providedBinsCoverDomain) {
      binDomain = binValues;
    }
  }

  if (!Array.isArray(binDomain)) {
    binDomain = Object.keys(binDomain).sort(_caseInsensitiveSort__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }

  return {
    binDomain: binDomain,
    valueDomain: valueDomain
  };
}

/***/ }),

/***/ "./node_modules/@data-ui/histogram/esm/utils/getValueKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/utils/getValueKey.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getValueKey; });
function getValueKey(_ref) {
  var normalized = _ref.normalized,
      cumulative = _ref.cumulative;
  if (normalized && cumulative) return 'cumulativeDensity';
  if (cumulative) return 'cumulative';
  if (normalized) return 'density';
  return 'count';
}

/***/ }),

/***/ "./node_modules/@data-ui/histogram/esm/utils/propShapes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/utils/propShapes.js ***!
  \*****************************************************************/
/*! exports provided: numericBinnedDatumShape, categoricalBinnedDatumShape, binnedDataShape, axisStylesShape, tickStylesShape, gridStylesShape, themeShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericBinnedDatumShape", function() { return numericBinnedDatumShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoricalBinnedDatumShape", function() { return categoricalBinnedDatumShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binnedDataShape", function() { return binnedDataShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisStylesShape", function() { return axisStylesShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStylesShape", function() { return tickStylesShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridStylesShape", function() { return gridStylesShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeShape", function() { return themeShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var numericBinnedDatumShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  bin0: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  bin1: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  count: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  cumulative: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  density: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  cumulativeDensity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
var categoricalBinnedDatumShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  bin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  count: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  cumulative: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  density: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  cumulativeDensity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
});
var binnedDataShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([numericBinnedDatumShape, categoricalBinnedDatumShape])); // styles ---------------------------------------------------------------------

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

/***/ }),

/***/ "./node_modules/@data-ui/histogram/esm/utils/shallowCompareObjectEntries.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/esm/utils/shallowCompareObjectEntries.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/axis/dist/vx-axis.es.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/axis/dist/vx-axis.es.js ***!
  \**********************************************************************************/
/*! exports provided: Axis, AxisLeft, AxisRight, AxisTop, AxisBottom, Orientation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Axis", function() { return Axis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisLeft", function() { return AxisLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisRight", function() { return AxisRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisTop", function() { return AxisTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisBottom", function() { return AxisBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Orientation", function() { return ORIENT; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vx_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vx/shape */ "./node_modules/@data-ui/histogram/node_modules/@vx/shape/dist/vx-shape.es.js");
/* harmony import */ var _vx_point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/point */ "./node_modules/@data-ui/histogram/node_modules/@vx/point/dist/vx-point.es.js");
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/group */ "./node_modules/@data-ui/histogram/node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var _vx_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vx/text */ "./node_modules/@vx/text/dist/vx-text.es.js");








function center(scale) {
  var offset = scale.bandwidth() / 2;
  if (scale.round()) offset = Math.round(offset);
  return function (d) {
    return scale(d) + offset;
  };
}

function identity(x) {
  return x;
}

var ORIENT = {
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom'
};

function labelTransform(_ref) {
  var labelOffset = _ref.labelOffset,
      labelProps = _ref.labelProps,
      orientation = _ref.orientation,
      range = _ref.range,
      tickLabelFontSize = _ref.tickLabelFontSize,
      tickLength = _ref.tickLength;

  var sign = orientation === ORIENT.left || orientation === ORIENT.top ? -1 : 1;

  var x = void 0;
  var y = void 0;
  var transform = null;

  if (orientation === ORIENT.top || orientation === ORIENT.bottom) {
    x = (range[0] + range[range.length - 1]) / 2;
    y = sign * (tickLength + labelOffset + tickLabelFontSize + (orientation === ORIENT.bottom ? labelProps.fontSize : 0));
  } else {
    x = sign * ((range[0] + range[range.length - 1]) / 2);
    y = -(tickLength + labelOffset);
    transform = 'rotate(' + sign * 90 + ')';
  }

  return { x: x, y: y, transform: transform };
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

var propTypes = {
  axisClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  axisLineClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hideAxisLine: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideTicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideZero: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  numTicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([ORIENT.top, ORIENT.right, ORIENT.bottom, ORIENT.left]),
  rangePadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickFormat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tickLabelProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tickLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tickStroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickTransform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  tickComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function Axis(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      _ref$hideAxisLine = _ref.hideAxisLine,
      hideAxisLine = _ref$hideAxisLine === undefined ? false : _ref$hideAxisLine,
      _ref$hideTicks = _ref.hideTicks,
      hideTicks = _ref$hideTicks === undefined ? false : _ref$hideTicks,
      _ref$hideZero = _ref.hideZero,
      hideZero = _ref$hideZero === undefined ? false : _ref$hideZero,
      _ref$label = _ref.label,
      label = _ref$label === undefined ? '' : _ref$label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === undefined ? 14 : _ref$labelOffset,
      _ref$labelProps = _ref.labelProps,
      labelProps = _ref$labelProps === undefined ? {
    textAnchor: 'middle',
    fontFamily: 'Arial',
    fontSize: 10,
    fill: 'black'
  } : _ref$labelProps,
      _ref$left = _ref.left,
      left = _ref$left === undefined ? 0 : _ref$left,
      _ref$numTicks = _ref.numTicks,
      numTicks = _ref$numTicks === undefined ? 10 : _ref$numTicks,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === undefined ? ORIENT.bottom : _ref$orientation,
      _ref$rangePadding = _ref.rangePadding,
      rangePadding = _ref$rangePadding === undefined ? 0 : _ref$rangePadding,
      scale = _ref.scale,
      _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === undefined ? 'black' : _ref$stroke,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === undefined ? 1 : _ref$strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === undefined ? function (tickValue, index) {
    return {
      textAnchor: 'middle',
      fontFamily: 'Arial',
      fontSize: 10,
      fill: 'black'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === undefined ? 8 : _ref$tickLength,
      _ref$tickStroke = _ref.tickStroke,
      tickStroke = _ref$tickStroke === undefined ? 'black' : _ref$tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      tickComponent = _ref.tickComponent,
      _ref$top = _ref.top,
      top = _ref$top === undefined ? 0 : _ref$top;

  var values = scale.ticks ? scale.ticks(numTicks) : scale.domain();
  if (tickValues) values = tickValues;
  var format = scale.tickFormat ? scale.tickFormat() : identity;
  if (tickFormat) format = tickFormat;

  var range = scale.range();
  var range0 = range[0] + 0.5 - rangePadding;
  var range1 = range[range.length - 1] + 0.5 + rangePadding;

  var horizontal = orientation !== ORIENT.left && orientation !== ORIENT.right;
  var isLeft = orientation === ORIENT.left;
  var isTop = orientation === ORIENT.top;
  var tickSign = isLeft || isTop ? -1 : 1;

  var position = (scale.bandwidth ? center : identity)(scale.copy());

  var axisFromPoint = new _vx_point__WEBPACK_IMPORTED_MODULE_4__["Point"]({
    x: horizontal ? range0 : 0,
    y: horizontal ? 0 : range0
  });
  var axisToPoint = new _vx_point__WEBPACK_IMPORTED_MODULE_4__["Point"]({
    x: horizontal ? range1 : 0,
    y: horizontal ? 0 : range1
  });

  var tickLabelFontSize = 10; // track the max tick label size to compute label offset

  if (!!children) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _vx_group__WEBPACK_IMPORTED_MODULE_5__["Group"],
      { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('vx-axis', axisClassName), top: top, left: left },
      children({
        axisFromPoint: axisFromPoint,
        axisToPoint: axisToPoint,
        horizontal: horizontal,
        tickSign: tickSign,
        numTicks: numTicks,
        label: label,
        rangePadding: rangePadding,
        tickLength: tickLength,
        tickFormat: format,
        tickPosition: position,
        ticks: values.map(function (value, index) {
          var from = new _vx_point__WEBPACK_IMPORTED_MODULE_4__["Point"]({
            x: horizontal ? position(value) : 0,
            y: horizontal ? 0 : position(value)
          });
          var to = new _vx_point__WEBPACK_IMPORTED_MODULE_4__["Point"]({
            x: horizontal ? position(value) : tickSign * tickLength,
            y: horizontal ? tickLength * tickSign : position(value)
          });
          return {
            value: value,
            index: index,
            from: from,
            to: to,
            formattedValue: format(value, index)
          };
        })
      })
    );
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    _vx_group__WEBPACK_IMPORTED_MODULE_5__["Group"],
    { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('vx-axis', axisClassName), top: top, left: left },
    values.map(function (val, index) {
      if (hideZero && val === 0) return null;

      var tickFromPoint = new _vx_point__WEBPACK_IMPORTED_MODULE_4__["Point"]({
        x: horizontal ? position(val) : 0,
        y: horizontal ? 0 : position(val)
      });
      var tickToPoint = new _vx_point__WEBPACK_IMPORTED_MODULE_4__["Point"]({
        x: horizontal ? position(val) : tickSign * tickLength,
        y: horizontal ? tickLength * tickSign : position(val)
      });

      var tickLabelPropsObj = tickLabelProps(val, index);
      tickLabelFontSize = Math.max(tickLabelFontSize, tickLabelPropsObj.fontSize || 0);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        _vx_group__WEBPACK_IMPORTED_MODULE_5__["Group"],
        {
          key: 'vx-tick-' + val + '-' + index,
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('vx-axis-tick', tickClassName),
          transform: tickTransform
        },
        !hideTicks && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_3__["Line"], { from: tickFromPoint, to: tickToPoint, stroke: tickStroke }),
        tickComponent ? tickComponent(_extends({
          x: tickToPoint.x,
          y: tickToPoint.y + (horizontal && !isTop ? tickLabelFontSize : 0),
          formattedValue: format(val, index)
        }, tickLabelPropsObj)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          _vx_text__WEBPACK_IMPORTED_MODULE_6__["Text"],
          _extends({
            x: tickToPoint.x,
            y: tickToPoint.y + (horizontal && !isTop ? tickLabelFontSize : 0)
          }, tickLabelPropsObj),
          format(val, index)
        )
      );
    }),
    !hideAxisLine && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_vx_shape__WEBPACK_IMPORTED_MODULE_3__["Line"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('vx-axis-line', axisLineClassName),
      from: axisFromPoint,
      to: axisToPoint,
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeDasharray: strokeDasharray
    }),
    label && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      _vx_text__WEBPACK_IMPORTED_MODULE_6__["Text"],
      _extends({
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('vx-axis-label', labelClassName)
      }, labelTransform({
        labelOffset: labelOffset,
        labelProps: labelProps,
        orientation: orientation,
        range: range,
        tickLabelFontSize: tickLabelFontSize,
        tickLength: tickLength
      }), labelProps),
      label
    )
  );
}

Axis.propTypes = propTypes;

var propTypes$1 = {
  axisClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  axisLineClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hideAxisLine: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideTicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideZero: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  numTicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  rangePadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickFormat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tickLabelProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tickLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tickStroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickTransform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  tickComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function AxisLeft(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      hideAxisLine = _ref.hideAxisLine,
      hideTicks = _ref.hideTicks,
      hideZero = _ref.hideZero,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === undefined ? 36 : _ref$labelOffset,
      labelProps = _ref.labelProps,
      left = _ref.left,
      numTicks = _ref.numTicks,
      rangePadding = _ref.rangePadding,
      scale = _ref.scale,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === undefined ? function (_ref2) {
    var tick = _ref2.tick,
        index = _ref2.index;
    return {
      dx: '-0.25em',
      dy: '0.25em',
      fill: 'black',
      fontFamily: 'Arial',
      fontSize: 10,
      textAnchor: 'end'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === undefined ? 8 : _ref$tickLength,
      tickStroke = _ref.tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      tickComponent = _ref.tickComponent,
      top = _ref.top;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Axis, {
    axisClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()('vx-axis-left', axisClassName),
    axisLineClassName: axisLineClassName,
    hideAxisLine: hideAxisLine,
    hideTicks: hideTicks,
    hideZero: hideZero,
    label: label,
    labelClassName: labelClassName,
    labelOffset: labelOffset,
    labelProps: labelProps,
    left: left,
    numTicks: numTicks,
    orientation: ORIENT.left,
    rangePadding: rangePadding,
    scale: scale,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    tickClassName: tickClassName,
    tickFormat: tickFormat,
    tickLabelProps: tickLabelProps,
    tickLength: tickLength,
    tickStroke: tickStroke,
    tickTransform: tickTransform,
    tickValues: tickValues,
    tickComponent: tickComponent,
    top: top,
    children: children
  });
}

AxisLeft.propTypes = propTypes$1;

var propTypes$2 = {
  axisClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  axisLineClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hideAxisLine: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideTicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideZero: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  numTicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  rangePadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickFormat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tickLabelProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tickLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tickStroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickTransform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  tickComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function AxisRight(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      hideAxisLine = _ref.hideAxisLine,
      hideTicks = _ref.hideTicks,
      hideZero = _ref.hideZero,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === undefined ? 36 : _ref$labelOffset,
      labelProps = _ref.labelProps,
      left = _ref.left,
      numTicks = _ref.numTicks,
      rangePadding = _ref.rangePadding,
      scale = _ref.scale,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === undefined ? function (_ref2) {
    var tick = _ref2.tick,
        index = _ref2.index;
    return {
      dx: '0.25em',
      dy: '0.25em',
      fill: 'black',
      fontFamily: 'Arial',
      fontSize: 10,
      textAnchor: 'start'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === undefined ? 8 : _ref$tickLength,
      tickStroke = _ref.tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      tickComponent = _ref.tickComponent,
      top = _ref.top;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Axis, {
    axisClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()('vx-axis-right', axisClassName),
    axisLineClassName: axisLineClassName,
    hideAxisLine: hideAxisLine,
    hideTicks: hideTicks,
    hideZero: hideZero,
    label: label,
    labelClassName: labelClassName,
    labelOffset: labelOffset,
    labelProps: labelProps,
    left: left,
    numTicks: numTicks,
    orientation: ORIENT.right,
    rangePadding: rangePadding,
    scale: scale,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    tickClassName: tickClassName,
    tickFormat: tickFormat,
    tickLabelProps: tickLabelProps,
    tickLength: tickLength,
    tickStroke: tickStroke,
    tickTransform: tickTransform,
    tickValues: tickValues,
    tickComponent: tickComponent,
    top: top,
    children: children
  });
}

AxisRight.propTypes = propTypes$2;

var propTypes$3 = {
  axisClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  axisLineClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hideAxisLine: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideTicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideZero: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  numTicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  rangePadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickFormat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tickLabelProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tickLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tickStroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickTransform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  tickComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function AxisTop(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      hideAxisLine = _ref.hideAxisLine,
      hideTicks = _ref.hideTicks,
      hideZero = _ref.hideZero,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === undefined ? 8 : _ref$labelOffset,
      labelProps = _ref.labelProps,
      left = _ref.left,
      numTicks = _ref.numTicks,
      rangePadding = _ref.rangePadding,
      scale = _ref.scale,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === undefined ? function (_ref2) {
    var tick = _ref2.tick,
        index = _ref2.index;
    return {
      dy: '-0.25em',
      fill: 'black',
      fontFamily: 'Arial',
      fontSize: 10,
      textAnchor: 'middle'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === undefined ? 8 : _ref$tickLength,
      tickStroke = _ref.tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      tickComponent = _ref.tickComponent,
      top = _ref.top;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Axis, {
    axisClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()('vx-axis-top', axisClassName),
    axisLineClassName: axisLineClassName,
    hideAxisLine: hideAxisLine,
    hideTicks: hideTicks,
    hideZero: hideZero,
    label: label,
    labelClassName: labelClassName,
    labelOffset: labelOffset,
    labelProps: labelProps,
    left: left,
    numTicks: numTicks,
    orientation: ORIENT.top,
    rangePadding: rangePadding,
    scale: scale,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    tickClassName: tickClassName,
    tickFormat: tickFormat,
    tickLabelProps: tickLabelProps,
    tickLength: tickLength,
    tickStroke: tickStroke,
    tickTransform: tickTransform,
    tickValues: tickValues,
    tickComponent: tickComponent,
    top: top,
    children: children
  });
}

AxisTop.propTypes = propTypes$3;

var propTypes$4 = {
  axisClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  axisLineClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hideAxisLine: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideTicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hideZero: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  labelProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  numTicks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  rangePadding: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  stroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  strokeDasharray: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickFormat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tickLabelProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tickLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tickStroke: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickTransform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  tickValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  tickComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function AxisBottom(_ref) {
  var children = _ref.children,
      axisClassName = _ref.axisClassName,
      axisLineClassName = _ref.axisLineClassName,
      hideAxisLine = _ref.hideAxisLine,
      hideTicks = _ref.hideTicks,
      hideZero = _ref.hideZero,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      _ref$labelOffset = _ref.labelOffset,
      labelOffset = _ref$labelOffset === undefined ? 8 : _ref$labelOffset,
      labelProps = _ref.labelProps,
      left = _ref.left,
      numTicks = _ref.numTicks,
      rangePadding = _ref.rangePadding,
      scale = _ref.scale,
      stroke = _ref.stroke,
      strokeWidth = _ref.strokeWidth,
      strokeDasharray = _ref.strokeDasharray,
      tickClassName = _ref.tickClassName,
      tickFormat = _ref.tickFormat,
      _ref$tickLabelProps = _ref.tickLabelProps,
      tickLabelProps = _ref$tickLabelProps === undefined ? function (_ref2) {
    var tick = _ref2.tick,
        index = _ref2.index;
    return {
      dy: '0.25em',
      fill: 'black',
      fontFamily: 'Arial',
      fontSize: 10,
      textAnchor: 'middle'
    };
  } : _ref$tickLabelProps,
      _ref$tickLength = _ref.tickLength,
      tickLength = _ref$tickLength === undefined ? 8 : _ref$tickLength,
      tickStroke = _ref.tickStroke,
      tickTransform = _ref.tickTransform,
      tickValues = _ref.tickValues,
      tickComponent = _ref.tickComponent,
      top = _ref.top;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Axis, {
    axisClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()('vx-axis-bottom', axisClassName),
    axisLineClassName: axisLineClassName,
    hideAxisLine: hideAxisLine,
    hideTicks: hideTicks,
    hideZero: hideZero,
    label: label,
    labelClassName: labelClassName,
    labelOffset: labelOffset,
    labelProps: labelProps,
    left: left,
    numTicks: numTicks,
    orientation: ORIENT.bottom,
    rangePadding: rangePadding,
    scale: scale,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeDasharray: strokeDasharray,
    tickClassName: tickClassName,
    tickFormat: tickFormat,
    tickLabelProps: tickLabelProps,
    tickLength: tickLength,
    tickStroke: tickStroke,
    tickTransform: tickTransform,
    tickValues: tickValues,
    tickComponent: tickComponent,
    top: top,
    children: children
  });
}

AxisBottom.propTypes = propTypes$4;




/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/group/dist/vx-group.es.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/group/dist/vx-group.es.js ***!
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

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/point/dist/vx-point.es.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/point/dist/vx-point.es.js ***!
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

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/dist/vx-scale.es.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/dist/vx-scale.es.js ***!
  \************************************************************************************/
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
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-scale */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/index.js");


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
  scale.type = 'band';

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
  scale.type = 'point';

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
  scale.type = 'linear';

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
  scale.type = 'time';

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
  scale.type = 'utc';

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
  scale.type = 'log';

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
  scale.type = 'power';

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
  scale.type = 'ordinal';

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
  scale.type = 'quantize';

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
  scale.type = 'quantile';

  if (range) scale.range(range);
  if (domain) scale.domain(domain);

  return scale;
});

var threshold = (function (_ref) {
  var range = _ref.range,
      domain = _ref.domain;

  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleThreshold"])();
  scale.type = 'threshold';

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

var has = Object.prototype.hasOwnProperty;

function updateScale(scale, _ref) {
  var args = objectWithoutProperties(_ref, []);

  var nextScale = scale.copy();
  Object.keys(args).forEach(function (key) {
    if (has.call(nextScale, key)) nextScale[key](args[key]);
  });
  return nextScale;
}




/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/array.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/array.js ***!
  \***************************************************************************************************/
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

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/band.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/band.js ***!
  \**************************************************************************************************/
/*! exports provided: default, point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return band; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js");
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ordinal */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/ordinal.js");




function band() {
  var scale = Object(_ordinal__WEBPACK_IMPORTED_MODULE_2__["default"])().unknown(undefined),
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
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(rescale(), arguments);
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
  return pointish(band.apply(null, arguments).paddingInner(1));
}


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/constant.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/constant.js ***!
  \******************************************************************************************************/
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

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/continuous.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/continuous.js ***!
  \********************************************************************************************************/
/*! exports provided: identity, copy, transformer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return transformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return continuous; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/value.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/round.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constant */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/constant.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./number */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/number.js");






var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(_constant__WEBPACK_IMPORTED_MODULE_5__["default"])(isNaN(b) ? NaN : 0.5);
}

function clamper(domain) {
  var a = domain[0], b = domain[domain.length - 1], t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
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
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
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
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["default"],
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"])))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_4__["map"].call(_, _number__WEBPACK_IMPORTED_MODULE_6__["default"]), clamp === identity || (clamp = clamper(domain)), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_4__["slice"].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = _array__WEBPACK_IMPORTED_MODULE_4__["slice"].call(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_3__["default"], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? clamper(domain) : identity, scale) : clamp !== identity;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous(transform, untransform) {
  return transformer()(transform, untransform);
}


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/diverging.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/diverging.js ***!
  \*******************************************************************************************************/
/*! exports provided: default, divergingLog, divergingSymlog, divergingPow, divergingSqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return diverging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingLog", function() { return divergingLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingSymlog", function() { return divergingSymlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingPow", function() { return divergingPow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingSqrt", function() { return divergingSqrt; });
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/log.js");
/* harmony import */ var _sequential__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sequential */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/sequential.js");
/* harmony import */ var _symlog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symlog */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/symlog.js");
/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pow */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/pow.js");








function transformer() {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      t0,
      t1,
      t2,
      k10,
      k21,
      interpolator = _continuous__WEBPACK_IMPORTED_MODULE_0__["identity"],
      transform,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (x < t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), t2 = transform(x2 = +_[2]), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1);
    return scale;
  };
}

function diverging() {
  var scale = Object(_linear__WEBPACK_IMPORTED_MODULE_2__["linearish"])(transformer()(_continuous__WEBPACK_IMPORTED_MODULE_0__["identity"]));

  scale.copy = function() {
    return Object(_sequential__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, diverging());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function divergingLog() {
  var scale = Object(_log__WEBPACK_IMPORTED_MODULE_3__["loggish"])(transformer()).domain([0.1, 1, 10]);

  scale.copy = function() {
    return Object(_sequential__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, divergingLog()).base(scale.base());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function divergingSymlog() {
  var scale = Object(_symlog__WEBPACK_IMPORTED_MODULE_5__["symlogish"])(transformer());

  scale.copy = function() {
    return Object(_sequential__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, divergingSymlog()).constant(scale.constant());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function divergingPow() {
  var scale = Object(_pow__WEBPACK_IMPORTED_MODULE_6__["powish"])(transformer());

  scale.copy = function() {
    return Object(_sequential__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, divergingPow()).exponent(scale.exponent());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/identity.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/identity.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/array.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/number.js");




function identity(domain) {
  var unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(_, _number__WEBPACK_IMPORTED_MODULE_2__["default"]), scale) : domain.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return identity(domain).unknown(unknown);
  };

  domain = arguments.length ? _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(domain, _number__WEBPACK_IMPORTED_MODULE_2__["default"]) : [0, 1];

  return Object(_linear__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/index.js ***!
  \***************************************************************************************************/
/*! exports provided: scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleSymlog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential, scaleSequentialLog, scaleSequentialPow, scaleSequentialSqrt, scaleSequentialSymlog, scaleSequentialQuantile, scaleDiverging, scaleDivergingLog, scaleDivergingPow, scaleDivergingSqrt, scaleDivergingSymlog, tickFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _band__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./band */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/band.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return _band__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return _band__WEBPACK_IMPORTED_MODULE_0__["point"]; });

/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return _identity__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return _linear__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return _log__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _symlog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symlog */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/symlog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSymlog", function() { return _symlog__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordinal */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/ordinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return _ordinal__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return _ordinal__WEBPACK_IMPORTED_MODULE_5__["implicit"]; });

/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pow */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/pow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return _pow__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return _pow__WEBPACK_IMPORTED_MODULE_6__["sqrt"]; });

/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quantile */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return _quantile__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _quantize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quantize */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return _quantize__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _threshold__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./threshold */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/threshold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return _threshold__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./time */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return _time__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _utcTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utcTime */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/utcTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return _utcTime__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _sequential__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sequential */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/sequential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return _sequential__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialLog", function() { return _sequential__WEBPACK_IMPORTED_MODULE_12__["sequentialLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialPow", function() { return _sequential__WEBPACK_IMPORTED_MODULE_12__["sequentialPow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialSqrt", function() { return _sequential__WEBPACK_IMPORTED_MODULE_12__["sequentialSqrt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialSymlog", function() { return _sequential__WEBPACK_IMPORTED_MODULE_12__["sequentialSymlog"]; });

/* harmony import */ var _sequentialQuantile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sequentialQuantile */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/sequentialQuantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialQuantile", function() { return _sequentialQuantile__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _diverging__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./diverging */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDiverging", function() { return _diverging__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingLog", function() { return _diverging__WEBPACK_IMPORTED_MODULE_14__["divergingLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingPow", function() { return _diverging__WEBPACK_IMPORTED_MODULE_14__["divergingPow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingSqrt", function() { return _diverging__WEBPACK_IMPORTED_MODULE_14__["divergingSqrt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingSymlog", function() { return _diverging__WEBPACK_IMPORTED_MODULE_14__["divergingSymlog"]; });

/* harmony import */ var _tickFormat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tickFormat */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/tickFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickFormat", function() { return _tickFormat__WEBPACK_IMPORTED_MODULE_15__["default"]; });


































/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js ***!
  \**************************************************************************************************/
/*! exports provided: initRange, initInterpolator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRange", function() { return initRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initInterpolator", function() { return initInterpolator; });
function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.interpolator(domain); break;
    default: this.interpolator(interpolator).domain(domain); break;
  }
  return this;
}


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/linear.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/linear.js ***!
  \****************************************************************************************************/
/*! exports provided: linearish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearish", function() { return linearish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return linear; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js");
/* harmony import */ var _tickFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickFormat */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/tickFormat.js");





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return Object(_tickFormat__WEBPACK_IMPORTED_MODULE_3__["default"])(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
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
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["default"])(_continuous__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous__WEBPACK_IMPORTED_MODULE_1__["identity"]);

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, linear());
  };

  _init__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return linearish(scale);
}


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/log.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/log.js ***!
  \*************************************************************************************************/
/*! exports provided: loggish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggish", function() { return loggish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nice */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/nice.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./continuous */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js");






function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
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

function loggish(transform) {
  var scale = transform(transformLog, transformExp),
      domain = scale.domain,
      base = 10,
      logs,
      pows;

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
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
    return domain(Object(_nice__WEBPACK_IMPORTED_MODULE_2__["default"])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  return scale;
}

function log() {
  var scale = loggish(Object(_continuous__WEBPACK_IMPORTED_MODULE_3__["transformer"])()).domain([1, 10]);

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_3__["copy"])(scale, log()).base(scale.base());
  };

  _init__WEBPACK_IMPORTED_MODULE_4__["initRange"].apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/nice.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/nice.js ***!
  \**************************************************************************************************/
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

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/number.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/number.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return +x;
});


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/ordinal.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/ordinal.js ***!
  \*****************************************************************************************************/
/*! exports provided: implicit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implicit", function() { return implicit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ordinal; });
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-collection */ "./node_modules/d3-collection/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/array.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js");




var implicit = {name: "implicit"};

function ordinal() {
  var index = Object(d3_collection__WEBPACK_IMPORTED_MODULE_0__["map"])(),
      domain = [],
      range = [],
      unknown = implicit;

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
    return ordinal(domain, range).unknown(unknown);
  };

  _init__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/pow.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/pow.js ***!
  \*************************************************************************************************/
/*! exports provided: powish, default, sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powish", function() { return powish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js");




function transformPow(exponent) {
  return function(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function powish(transform) {
  var scale = transform(_continuous__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous__WEBPACK_IMPORTED_MODULE_1__["identity"]),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(_continuous__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous__WEBPACK_IMPORTED_MODULE_1__["identity"])
        : exponent === 0.5 ? transform(transformSqrt, transformSquare)
        : transform(transformPow(exponent), transformPow(1 / exponent));
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}

function pow() {
  var scale = powish(Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["transformer"])());

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, pow()).exponent(scale.exponent());
  };

  _init__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return scale;
}

function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/quantile.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/quantile.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/array.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js");




function quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["quantile"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(thresholds, x)];
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

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return _init__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/quantize.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/quantize.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantize; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/array.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js");





function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)] : unknown;
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

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function() {
    return domain.slice();
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range)
        .unknown(unknown);
  };

  return _init__WEBPACK_IMPORTED_MODULE_3__["initRange"].apply(Object(_linear__WEBPACK_IMPORTED_MODULE_2__["linearish"])(scale), arguments);
}


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/sequential.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/sequential.js ***!
  \********************************************************************************************************/
/*! exports provided: copy, default, sequentialLog, sequentialSymlog, sequentialPow, sequentialSqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialLog", function() { return sequentialLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialSymlog", function() { return sequentialSymlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialPow", function() { return sequentialPow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialSqrt", function() { return sequentialSqrt; });
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/log.js");
/* harmony import */ var _symlog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symlog */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/symlog.js");
/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pow */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/pow.js");







function transformer() {
  var x0 = 0,
      x1 = 1,
      t0,
      t1,
      k10,
      transform,
      interpolator = _continuous__WEBPACK_IMPORTED_MODULE_0__["identity"],
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .interpolator(source.interpolator())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function sequential() {
  var scale = Object(_linear__WEBPACK_IMPORTED_MODULE_2__["linearish"])(transformer()(_continuous__WEBPACK_IMPORTED_MODULE_0__["identity"]));

  scale.copy = function() {
    return copy(scale, sequential());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function sequentialLog() {
  var scale = Object(_log__WEBPACK_IMPORTED_MODULE_3__["loggish"])(transformer()).domain([1, 10]);

  scale.copy = function() {
    return copy(scale, sequentialLog()).base(scale.base());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function sequentialSymlog() {
  var scale = Object(_symlog__WEBPACK_IMPORTED_MODULE_4__["symlogish"])(transformer());

  scale.copy = function() {
    return copy(scale, sequentialSymlog()).constant(scale.constant());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function sequentialPow() {
  var scale = Object(_pow__WEBPACK_IMPORTED_MODULE_5__["powish"])(transformer());

  scale.copy = function() {
    return copy(scale, sequentialPow()).exponent(scale.exponent());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/sequentialQuantile.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/sequentialQuantile.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequentialQuantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js");




function sequentialQuantile() {
  var domain = [],
      interpolator = _continuous__WEBPACK_IMPORTED_MODULE_1__["identity"];

  function scale(x) {
    if (!isNaN(x = +x)) return interpolator((Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x) - 1) / (domain.length - 1));
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__["ascending"]);
    return scale;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };

  return _init__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/symlog.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/symlog.js ***!
  \****************************************************************************************************/
/*! exports provided: symlogish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symlogish", function() { return symlogish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symlog; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js");




function transformSymlog(c) {
  return function(x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function transformSymexp(c) {
  return function(x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function symlogish(transform) {
  var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));

  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}

function symlog() {
  var scale = symlogish(Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["transformer"])());

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, symlog()).constant(scale.constant());
  };

  return _init__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/threshold.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/threshold.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return threshold; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/array.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js");




function threshold() {
  var domain = [0.5],
      range = [0, 1],
      unknown,
      n = 1;

  function scale(x) {
    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)] : unknown;
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

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return _init__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/tickFormat.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/tickFormat.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count, specifier) {
  var step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, count),
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

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/time.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/time.js ***!
  \**************************************************************************************************/
/*! exports provided: calendar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/array.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./continuous */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./init */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nice */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/nice.js");








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
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_4__["default"])(_continuous__WEBPACK_IMPORTED_MODULE_4__["identity"], _continuous__WEBPACK_IMPORTED_MODULE_4__["identity"]),
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
    return arguments.length ? domain(_array__WEBPACK_IMPORTED_MODULE_3__["map"].call(_, number)) : domain().map(date);
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
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return _init__WEBPACK_IMPORTED_MODULE_5__["initRange"].apply(calendar(d3_time__WEBPACK_IMPORTED_MODULE_1__["timeYear"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMonth"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeWeek"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeDay"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeHour"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMinute"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeSecond"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_2__["timeFormat"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
});


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/utcTime.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/utcTime.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/time.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ "./node_modules/@data-ui/histogram/node_modules/@vx/scale/node_modules/d3-scale/src/init.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  return _init__WEBPACK_IMPORTED_MODULE_3__["initRange"].apply(Object(_time__WEBPACK_IMPORTED_MODULE_0__["calendar"])(d3_time__WEBPACK_IMPORTED_MODULE_2__["utcYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_1__["utcFormat"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
});


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/@vx/shape/dist/vx-shape.es.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/@vx/shape/dist/vx-shape.es.js ***!
  \************************************************************************************/
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
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vx/group */ "./node_modules/@data-ui/histogram/node_modules/@vx/group/dist/vx-group.es.js");
/* harmony import */ var _vx_point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vx/point */ "./node_modules/@data-ui/histogram/node_modules/@vx/point/dist/vx-point.es.js");
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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/index.js ***!
  \************************************************************************/
/*! exports provided: scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, schemeCategory10, schemeCategory20b, schemeCategory20c, schemeCategory20, interpolateCubehelixDefault, interpolateRainbow, interpolateWarm, interpolateCool, interpolateViridis, interpolateMagma, interpolateInferno, interpolatePlasma, scaleSequential */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_band__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/band */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/band.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return _src_band__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return _src_band__WEBPACK_IMPORTED_MODULE_0__["point"]; });

/* harmony import */ var _src_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/identity */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return _src_identity__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/linear */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return _src_linear__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/log */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return _src_log__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_ordinal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/ordinal */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/ordinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return _src_ordinal__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return _src_ordinal__WEBPACK_IMPORTED_MODULE_4__["implicit"]; });

/* harmony import */ var _src_pow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/pow */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/pow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return _src_pow__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return _src_pow__WEBPACK_IMPORTED_MODULE_5__["sqrt"]; });

/* harmony import */ var _src_quantile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/quantile */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return _src_quantile__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_quantize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/quantize */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return _src_quantize__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_threshold__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/threshold */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/threshold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return _src_threshold__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/time */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return _src_time__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_utcTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/utcTime */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/utcTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return _src_utcTime__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_category10__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/category10 */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/category10.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "schemeCategory10", function() { return _src_category10__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _src_category20b__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/category20b */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/category20b.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20b", function() { return _src_category20b__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _src_category20c__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/category20c */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/category20c.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20c", function() { return _src_category20c__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _src_category20__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/category20 */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/category20.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20", function() { return _src_category20__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _src_cubehelix__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/cubehelix */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixDefault", function() { return _src_cubehelix__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _src_rainbow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/rainbow */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/rainbow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRainbow", function() { return _src_rainbow__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateWarm", function() { return _src_rainbow__WEBPACK_IMPORTED_MODULE_16__["warm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCool", function() { return _src_rainbow__WEBPACK_IMPORTED_MODULE_16__["cool"]; });

/* harmony import */ var _src_viridis__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/viridis */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/viridis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateViridis", function() { return _src_viridis__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateMagma", function() { return _src_viridis__WEBPACK_IMPORTED_MODULE_17__["magma"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateInferno", function() { return _src_viridis__WEBPACK_IMPORTED_MODULE_17__["inferno"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolatePlasma", function() { return _src_viridis__WEBPACK_IMPORTED_MODULE_17__["plasma"]; });

/* harmony import */ var _src_sequential__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/sequential */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/sequential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return _src_sequential__WEBPACK_IMPORTED_MODULE_18__["default"]; });








































/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/array.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/array.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/band.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/band.js ***!
  \***************************************************************************/
/*! exports provided: default, point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return band; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ordinal */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/ordinal.js");



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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/category10.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/category10.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/colors.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_colors__WEBPACK_IMPORTED_MODULE_0__["default"])("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"));


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/category20.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/category20.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/colors.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_colors__WEBPACK_IMPORTED_MODULE_0__["default"])("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"));


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/category20b.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/category20b.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/colors.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_colors__WEBPACK_IMPORTED_MODULE_0__["default"])("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"));


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/category20c.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/category20c.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/colors.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_colors__WEBPACK_IMPORTED_MODULE_0__["default"])("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"));


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/colors.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/colors.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(s) {
  return s.match(/.{6}/g).map(function(x) {
    return "#" + x;
  });
});


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/constant.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/constant.js ***!
  \*******************************************************************************/
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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/continuous.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/continuous.js ***!
  \*********************************************************************************/
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
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/constant.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./number */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/number.js");






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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/cubehelix.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/cubehelix.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/cubehelix.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["cubehelixLong"])(Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(300, 0.5, 0.0), Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(-240, 0.5, 1.0)));


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/identity.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/identity.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/array.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/number.js");




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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/linear.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/linear.js ***!
  \*****************************************************************************/
/*! exports provided: linearish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearish", function() { return linearish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return linear; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./continuous */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _tickFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickFormat */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/tickFormat.js");





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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/log.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/log.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/constant.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nice */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/nice.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./continuous */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/continuous.js");






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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/nice.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/nice.js ***!
  \***************************************************************************/
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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/number.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/number.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return +x;
});


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/ordinal.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/ordinal.js ***!
  \******************************************************************************/
/*! exports provided: implicit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implicit", function() { return implicit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ordinal; });
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-collection */ "./node_modules/d3-collection/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/array.js");



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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/pow.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/pow.js ***!
  \**************************************************************************/
/*! exports provided: default, sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/constant.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./continuous */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/continuous.js");




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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/quantile.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/quantile.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/array.js");



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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/quantize.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/quantize.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantize; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/array.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/linear.js");




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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/rainbow.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/rainbow.js ***!
  \******************************************************************************/
/*! exports provided: warm, cool, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warm", function() { return warm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cool", function() { return cool; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/cubehelix.js");



var warm = Object(d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["cubehelixLong"])(Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(-100, 0.75, 0.35), Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(80, 1.50, 0.8));

var cool = Object(d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["cubehelixLong"])(Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(260, 0.75, 0.35), Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(80, 1.50, 0.8));

var rainbow = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])();

/* harmony default export */ __webpack_exports__["default"] = (function(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  rainbow.h = 360 * t - 100;
  rainbow.s = 1.5 - 1.5 * ts;
  rainbow.l = 0.8 - 0.9 * ts;
  return rainbow + "";
});


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/sequential.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/sequential.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequential; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/linear.js");


function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) / (x1 - x0);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/threshold.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/threshold.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return threshold; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/array.js");



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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/tickFormat.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/tickFormat.js ***!
  \*********************************************************************************/
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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/time.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/time.js ***!
  \***************************************************************************/
/*! exports provided: calendar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/array.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./continuous */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nice */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/nice.js");








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

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/utcTime.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/utcTime.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/time.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");




/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_time__WEBPACK_IMPORTED_MODULE_0__["calendar"])(d3_time__WEBPACK_IMPORTED_MODULE_2__["utcYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_1__["utcFormat"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
});


/***/ }),

/***/ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/viridis.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@data-ui/histogram/node_modules/d3-scale/src/viridis.js ***!
  \******************************************************************************/
/*! exports provided: default, magma, inferno, plasma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magma", function() { return magma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inferno", function() { return inferno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plasma", function() { return plasma; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./node_modules/@data-ui/histogram/node_modules/d3-scale/src/colors.js");


function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (ramp(Object(_colors__WEBPACK_IMPORTED_MODULE_0__["default"])("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")));

var magma = ramp(Object(_colors__WEBPACK_IMPORTED_MODULE_0__["default"])("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp(Object(_colors__WEBPACK_IMPORTED_MODULE_0__["default"])("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp(Object(_colors__WEBPACK_IMPORTED_MODULE_0__["default"])("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));


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

/***/ "./node_modules/@data-ui/theme/esm/chartTheme.js":
/*!*******************************************************!*\
  !*** ./node_modules/@data-ui/theme/esm/chartTheme.js ***!
  \*******************************************************/
/*! exports provided: colors, labelStyles, gridStyles, xAxisStyles, yAxisStyles, xTickStyles, yTickStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelStyles", function() { return labelStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridStyles", function() { return gridStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xAxisStyles", function() { return xAxisStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yAxisStyles", function() { return yAxisStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xTickStyles", function() { return xTickStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yTickStyles", function() { return yTickStyles; });
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./node_modules/@data-ui/theme/esm/color.js");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font */ "./node_modules/@data-ui/theme/esm/font.js");
/* harmony import */ var _svgLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svgLabel */ "./node_modules/@data-ui/theme/esm/svgLabel.js");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./size */ "./node_modules/@data-ui/theme/esm/size.js");
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var colors=_color__WEBPACK_IMPORTED_MODULE_0__["default"];var labelStyles=_extends({},_svgLabel__WEBPACK_IMPORTED_MODULE_2__["baseLabel"],_font__WEBPACK_IMPORTED_MODULE_1__["default"].light);var gridStyles={stroke:colors.grid,strokeWidth:1};var xAxisStyles={stroke:colors.gridDark,strokeWidth:2,label:{bottom:_extends({},_svgLabel__WEBPACK_IMPORTED_MODULE_2__["baseLabel"]),top:_extends({},_svgLabel__WEBPACK_IMPORTED_MODULE_2__["baseLabel"])}};var yAxisStyles={stroke:colors.grid,strokeWidth:1,label:{left:_extends({},_svgLabel__WEBPACK_IMPORTED_MODULE_2__["baseLabel"]),right:_extends({},_svgLabel__WEBPACK_IMPORTED_MODULE_2__["baseLabel"])}};var xTickStyles={stroke:colors.grid,length:+_size__WEBPACK_IMPORTED_MODULE_3__["unit"],label:{bottom:_extends({},_svgLabel__WEBPACK_IMPORTED_MODULE_2__["tickLabels"].bottom),top:_extends({},_svgLabel__WEBPACK_IMPORTED_MODULE_2__["tickLabels"].top)}};var yTickStyles={stroke:colors.grid,length:+_size__WEBPACK_IMPORTED_MODULE_3__["unit"],label:{left:_extends({},_svgLabel__WEBPACK_IMPORTED_MODULE_2__["tickLabels"].left),right:_extends({},_svgLabel__WEBPACK_IMPORTED_MODULE_2__["tickLabels"].right)}};/* harmony default export */ __webpack_exports__["default"] = ({colors:colors,labelStyles:labelStyles,gridStyles:gridStyles,xAxisStyles:xAxisStyles,xTickStyles:xTickStyles,yAxisStyles:yAxisStyles,yTickStyles:yTickStyles});

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

/***/ "./node_modules/@data-ui/theme/esm/font.js":
/*!*************************************************!*\
  !*** ./node_modules/@data-ui/theme/esm/font.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./node_modules/@data-ui/theme/esm/color.js");
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var getFont=function(a){var b=a.fontFamily,c=a.fontSize,d=a.letterSpacing,e=void 0===d?0:d,f=a.lineHeight,g=a.padding;return{color:_color__WEBPACK_IMPORTED_MODULE_0__["textColor"],fontFamily:b,fontSize:c,letterSpacing:e,lineHeight:f+"px",paddingBottom:g,paddingTop:g}},fontFamily="BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif";/* harmony default export */ __webpack_exports__["default"] = ({fontFamily:fontFamily,// weights
light:{fontWeight:200},bold:{fontWeight:700},// size
tiny:_extends({},getFont({fontFamily:fontFamily,fontSize:10,lineHeight:12,letterSpacing:.4})),small:_extends({},getFont({fontFamily:fontFamily,fontSize:12,lineHeight:16,letterSpacing:.4})),regular:_extends({},getFont({fontFamily:fontFamily,fontSize:14,lineHeight:18,letterSpacing:.2})),large:_extends({},getFont({fontFamily:fontFamily,fontSize:18,lineHeight:24,spacing:0}))});

/***/ }),

/***/ "./node_modules/@data-ui/theme/esm/size.js":
/*!*************************************************!*\
  !*** ./node_modules/@data-ui/theme/esm/size.js ***!
  \*************************************************/
/*! exports provided: unit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit", function() { return unit; });
var unit=8;// eslint-disable-line import/prefer-default-export

/***/ }),

/***/ "./node_modules/@data-ui/theme/esm/svgFont.js":
/*!****************************************************!*\
  !*** ./node_modules/@data-ui/theme/esm/svgFont.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color */ "./node_modules/@data-ui/theme/esm/color.js");
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var getSvgFont=function(a){var b=a.fontFamily,c=a.fontSize,d=a.letterSpacing;return{fill:_color__WEBPACK_IMPORTED_MODULE_0__["textColor"],stroke:"none",fontFamily:b,fontSize:c,letterSpacing:d}},fontFamily="BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif";/* harmony default export */ __webpack_exports__["default"] = ({fontFamily:fontFamily,// weights
light:{fontWeight:200},bold:{fontWeight:700},// alignment
start:{textAnchor:"start"},middle:{textAnchor:"middle"},end:{textAnchor:"end"},// size
tiny:_extends({},getSvgFont({fontFamily:fontFamily,fontSize:10,letterSpacing:.4})),small:_extends({},getSvgFont({fontFamily:fontFamily,fontSize:12,letterSpacing:.4})),regular:_extends({},getSvgFont({fontFamily:fontFamily,fontSize:14,letterSpacing:.2})),large:_extends({},getSvgFont({fontFamily:fontFamily,fontSize:18,spacing:0}))});

/***/ }),

/***/ "./node_modules/@data-ui/theme/esm/svgLabel.js":
/*!*****************************************************!*\
  !*** ./node_modules/@data-ui/theme/esm/svgLabel.js ***!
  \*****************************************************/
/*! exports provided: baseLabel, labelTiny, baseTickLabel, tickLabels, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseLabel", function() { return baseLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelTiny", function() { return labelTiny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseTickLabel", function() { return baseTickLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickLabels", function() { return tickLabels; });
/* harmony import */ var _svgFont__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svgFont */ "./node_modules/@data-ui/theme/esm/svgFont.js");
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var baseLabel=_extends({},_svgFont__WEBPACK_IMPORTED_MODULE_0__["default"].small,_svgFont__WEBPACK_IMPORTED_MODULE_0__["default"].bold,_svgFont__WEBPACK_IMPORTED_MODULE_0__["default"].middle,{pointerEvents:"none"});var labelTiny=_extends({},_svgFont__WEBPACK_IMPORTED_MODULE_0__["default"].tiny,_svgFont__WEBPACK_IMPORTED_MODULE_0__["default"].bold,_svgFont__WEBPACK_IMPORTED_MODULE_0__["default"].middle,{pointerEvents:"none"});var baseTickLabel=_extends({},_svgFont__WEBPACK_IMPORTED_MODULE_0__["default"].small,_svgFont__WEBPACK_IMPORTED_MODULE_0__["default"].light,_svgFont__WEBPACK_IMPORTED_MODULE_0__["default"].middle,{pointerEvents:"none"});var tickLabels={top:_extends({},baseTickLabel,{dy:"-0.25em"}),right:_extends({},baseTickLabel,_svgFont__WEBPACK_IMPORTED_MODULE_0__["default"].start,{dx:"0.25em",dy:"0.25em"}),bottom:_extends({},baseTickLabel,{dy:"0.25em"}),left:_extends({},baseTickLabel,_svgFont__WEBPACK_IMPORTED_MODULE_0__["default"].end,{dx:"-0.25em",dy:"0.25em"})};/* harmony default export */ __webpack_exports__["default"] = ({baseLabel:baseLabel,baseTickLabel:baseTickLabel,tickLabels:tickLabels});

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/esm/Histogram.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/esm/Histogram.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_ui_histogram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-ui/histogram */ "./node_modules/@data-ui/histogram/esm/chart/Histogram.js");
/* harmony import */ var _data_ui_histogram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @data-ui/histogram */ "./node_modules/@data-ui/histogram/esm/series/BarSeries.js");
/* harmony import */ var _data_ui_histogram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @data-ui/histogram */ "./node_modules/@data-ui/histogram/esm/axis/XAxis.js");
/* harmony import */ var _data_ui_histogram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @data-ui/histogram */ "./node_modules/@data-ui/histogram/esm/axis/YAxis.js");
/* harmony import */ var _data_ui_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data-ui/theme */ "./node_modules/@data-ui/theme/esm/chartTheme.js");
/* harmony import */ var _vx_legend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vx/legend */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Ordinal.js");
/* harmony import */ var _vx_scale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vx/scale */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/scale/esm/scales/ordinal.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/color/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _WithLegend__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WithLegend */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/esm/WithLegend.js");
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

/* eslint-disable react/sort-prop-types */









const propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    key: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    values: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number)
  })).isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  colorScheme: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  normalized: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  binCount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  opacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  xAxisLabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  yAxisLabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  showLegend: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
};
const defaultProps = {
  binCount: 15,
  className: '',
  colorScheme: '',
  normalized: false,
  opacity: 1,
  xAxisLabel: '',
  yAxisLabel: ''
};

class CustomHistogram extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  render() {
    const {
      className,
      data,
      width,
      height,
      binCount,
      colorScheme,
      normalized,
      opacity,
      xAxisLabel,
      yAxisLabel,
      showLegend
    } = this.props;
    const colorFn = _superset_ui_core__WEBPACK_IMPORTED_MODULE_9__["CategoricalColorNamespace"].getScale(colorScheme);
    const keys = data.map(d => d.key);
    const colorScale = Object(_vx_scale__WEBPACK_IMPORTED_MODULE_8__["default"])({
      domain: keys,
      range: keys.map(x => colorFn(x))
    });
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_WithLegend__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: `superset-legacy-chart-histogram ${className}`,
      width: width,
      height: height,
      position: "top",
      renderLegend: ({
        direction,
        style
      }) => showLegend && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_vx_legend__WEBPACK_IMPORTED_MODULE_7__["default"], {
        style: style,
        scale: colorScale,
        direction: direction,
        shape: "rect",
        labelMargin: "0 15px 0 0"
      }),
      renderChart: parent => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_data_ui_histogram__WEBPACK_IMPORTED_MODULE_2__["default"], {
        width: parent.width,
        height: parent.height,
        ariaLabel: "Histogram",
        normalized: normalized,
        binCount: binCount,
        binType: "numeric",
        margin: {
          top: 20,
          right: 20
        },
        renderTooltip: ({
          datum,
          color
        }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("strong", {
          style: {
            color
          }
        }, datum.bin0, " to ", datum.bin1), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("strong", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__["t"])('count'), " "), datum.count), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("strong", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_10__["t"])('cumulative'), " "), datum.cumulative)),
        valueAccessor: datum => datum,
        theme: _data_ui_theme__WEBPACK_IMPORTED_MODULE_6__["default"]
      }, data.map(series => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_data_ui_histogram__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: series.key,
        animated: true,
        rawData: series.values,
        fill: colorScale(series.key),
        fillOpacity: opacity
      })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_data_ui_histogram__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: xAxisLabel
      }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_data_ui_histogram__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: yAxisLabel
      }))
    });
  }

}

CustomHistogram.propTypes = propTypes;
CustomHistogram.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_11__["styled"])(CustomHistogram)`
  .superset-legacy-chart-histogram {
    overflow: hidden;
  }
`);

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/esm/WithLegend.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/esm/WithLegend.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/responsive */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/responsive/esm/components/ParentSize.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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

/* eslint-disable react/sort-prop-types, react/jsx-sort-default-props */




const propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  renderChart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  renderLegend: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['top', 'left', 'bottom', 'right']),
  legendJustifyContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['center', 'flex-start', 'flex-end'])
};
const defaultProps = {
  className: '',
  width: 'auto',
  height: 'auto',
  position: 'top',
  legendJustifyContent: undefined
};
const LEGEND_STYLE_BASE = {
  display: 'flex',
  flexGrow: 0,
  flexShrink: 0,
  order: -1,
  paddingTop: '5px',
  fontSize: '0.9em'
};
const CHART_STYLE_BASE = {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 'auto',
  position: 'relative'
};

class WithLegend extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  getContainerDirection() {
    const {
      position
    } = this.props;

    switch (position) {
      case 'left':
        return 'row';

      case 'right':
        return 'row-reverse';

      case 'bottom':
        return 'column-reverse';

      default:
      case 'top':
        return 'column';
    }
  }

  getLegendJustifyContent() {
    const {
      legendJustifyContent,
      position
    } = this.props;

    if (legendJustifyContent) {
      return legendJustifyContent;
    }

    switch (position) {
      case 'left':
        return 'flex-start';

      case 'right':
        return 'flex-start';

      case 'bottom':
        return 'flex-end';

      default:
      case 'top':
        return 'flex-end';
    }
  }

  render() {
    const {
      className,
      width,
      height,
      position,
      renderChart,
      renderLegend
    } = this.props;
    const isHorizontal = position === 'left' || position === 'right';
    const style = {
      display: 'flex',
      flexDirection: this.getContainerDirection()
    };

    if (width) {
      style.width = width;
    }

    if (height) {
      style.height = height;
    }

    const chartStyle = { ...CHART_STYLE_BASE
    };

    if (isHorizontal) {
      chartStyle.width = 0;
    } else {
      chartStyle.height = 0;
    }

    const legendDirection = isHorizontal ? 'column' : 'row';
    const legendStyle = { ...LEGEND_STYLE_BASE,
      flexDirection: legendDirection,
      justifyContent: this.getLegendJustifyContent()
    };
    const legendContainerStyle = {
      flexWrap: 'wrap',
      display: 'flex',
      flexDirection: legendDirection
    };
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      className: `with-legend ${className}`,
      style: style
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      className: "legend-container",
      style: legendStyle
    }, renderLegend({
      // Pass flexDirection for @vx/legend to arrange legend items
      direction: legendDirection,
      style: legendContainerStyle
    })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      className: "main-container",
      style: chartStyle
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_vx_responsive__WEBPACK_IMPORTED_MODULE_2__["default"], null, parent => parent.width > 0 && parent.height > 0 ? // Only render when necessary
    renderChart(parent) : null)));
  }

}

WithLegend.propTypes = propTypes;
WithLegend.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (WithLegend);

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/group/esm/Group.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/group/esm/Group.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Group; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Group(_ref) {
  var _ref$top = _ref.top,
      top = _ref$top === void 0 ? 0 : _ref$top,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? 0 : _ref$left,
      transform = _ref.transform,
      className = _ref.className,
      children = _ref.children,
      innerRef = _ref.innerRef,
      restProps = _objectWithoutPropertiesLoose(_ref, ["top", "left", "transform", "className", "children", "innerRef"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", _extends({
    ref: innerRef,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('vx-group', className),
    transform: transform || "translate(" + left + ", " + top + ")"
  }, restProps), children);
}
Group.propTypes = {
  top: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  transform: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object])
};

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Legend/LegendItem.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Legend/LegendItem.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LegendItem; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function LegendItem(_ref) {
  var _ref$flexDirection = _ref.flexDirection,
      flexDirection = _ref$flexDirection === void 0 ? 'row' : _ref$flexDirection,
      _ref$alignItems = _ref.alignItems,
      alignItems = _ref$alignItems === void 0 ? 'center' : _ref$alignItems,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? '0' : _ref$margin,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? 'flex' : _ref$display,
      children = _ref.children,
      restProps = _objectWithoutPropertiesLoose(_ref, ["flexDirection", "alignItems", "margin", "display", "children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({
    className: "vx-legend-item",
    style: {
      display: display,
      alignItems: alignItems,
      flexDirection: flexDirection,
      margin: margin
    }
  }, restProps), children);
}
LegendItem.propTypes = {
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  display: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Legend/LegendLabel.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Legend/LegendLabel.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LegendLabel; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function LegendLabel(_ref) {
  var _ref$flex = _ref.flex,
      flex = _ref$flex === void 0 ? '1' : _ref$flex,
      label = _ref.label,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? '5px 0' : _ref$margin,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'left' : _ref$align,
      children = _ref.children,
      restProps = _objectWithoutPropertiesLoose(_ref, ["flex", "label", "margin", "align", "children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", _extends({
    className: "vx-legend-label",
    style: {
      justifyContent: align,
      display: 'flex',
      flex: flex,
      margin: margin
    }
  }, restProps), children || label);
}
LegendLabel.propTypes = {
  align: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  flex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  margin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
};

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Legend/LegendShape.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Legend/LegendShape.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LegendShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shapes_Rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shapes/Rect */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/shapes/Rect.js");
/* harmony import */ var _util_renderShape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/renderShape */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/util/renderShape.js");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function LegendShape(_ref) {
  var _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? _shapes_Rect__WEBPACK_IMPORTED_MODULE_2__["default"] : _ref$shape,
      width = _ref.width,
      height = _ref.height,
      margin = _ref.margin,
      label = _ref.label,
      item = _ref.item,
      itemIndex = _ref.itemIndex,
      fill = _ref.fill,
      size = _ref.size,
      shapeStyle = _ref.shapeStyle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "vx-legend-shape",
    style: {
      display: 'flex',
      width: size ? size(_extends({}, label)) : width,
      height: size ? size(_extends({}, label)) : height,
      margin: margin
    }
  }, Object(_util_renderShape__WEBPACK_IMPORTED_MODULE_3__["default"])({
    shape: shape,
    item: item,
    itemIndex: itemIndex,
    label: label,
    width: width,
    height: height,
    fill: fill,
    shapeStyle: shapeStyle
  }));
}
LegendShape.propTypes = {
  itemIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  shapeStyle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number])
};

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Legend/index.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Legend/index.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Legend; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LegendItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LegendItem */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Legend/LegendItem.js");
/* harmony import */ var _LegendLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LegendLabel */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Legend/LegendLabel.js");
/* harmony import */ var _LegendShape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LegendShape */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Legend/LegendShape.js");
/* harmony import */ var _util_valueOrIdentity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/valueOrIdentity */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/util/valueOrIdentity.js");
/* harmony import */ var _util_labelTransformFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/labelTransformFactory */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/util/labelTransformFactory.js");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var defaultStyle = {
  display: 'flex'
};
function Legend(_ref) {
  var className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? defaultStyle : _ref$style,
      scale = _ref.scale,
      shape = _ref.shape,
      inputDomain = _ref.domain,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? _util_valueOrIdentity__WEBPACK_IMPORTED_MODULE_6__["valueOrIdentityString"] : _ref$fill,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? _util_valueOrIdentity__WEBPACK_IMPORTED_MODULE_6__["valueOrIdentityString"] : _ref$size,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === void 0 ? _util_valueOrIdentity__WEBPACK_IMPORTED_MODULE_6__["default"] : _ref$labelFormat,
      _ref$labelTransform = _ref.labelTransform,
      labelTransform = _ref$labelTransform === void 0 ? _util_labelTransformFactory__WEBPACK_IMPORTED_MODULE_7__["default"] : _ref$labelTransform,
      _ref$shapeWidth = _ref.shapeWidth,
      shapeWidth = _ref$shapeWidth === void 0 ? 15 : _ref$shapeWidth,
      _ref$shapeHeight = _ref.shapeHeight,
      shapeHeight = _ref$shapeHeight === void 0 ? 15 : _ref$shapeHeight,
      _ref$shapeMargin = _ref.shapeMargin,
      shapeMargin = _ref$shapeMargin === void 0 ? '2px 4px 2px 0' : _ref$shapeMargin,
      shapeStyle = _ref.shapeStyle,
      _ref$labelAlign = _ref.labelAlign,
      labelAlign = _ref$labelAlign === void 0 ? 'left' : _ref$labelAlign,
      _ref$labelFlex = _ref.labelFlex,
      labelFlex = _ref$labelFlex === void 0 ? '1' : _ref$labelFlex,
      _ref$labelMargin = _ref.labelMargin,
      labelMargin = _ref$labelMargin === void 0 ? '0 4px' : _ref$labelMargin,
      _ref$itemMargin = _ref.itemMargin,
      itemMargin = _ref$itemMargin === void 0 ? '0' : _ref$itemMargin,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'column' : _ref$direction,
      _ref$itemDirection = _ref.itemDirection,
      itemDirection = _ref$itemDirection === void 0 ? 'row' : _ref$itemDirection,
      legendLabelProps = _ref.legendLabelProps,
      children = _ref.children,
      legendItemProps = _objectWithoutPropertiesLoose(_ref, ["className", "style", "scale", "shape", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "shapeStyle", "labelAlign", "labelFlex", "labelMargin", "itemMargin", "direction", "itemDirection", "legendLabelProps", "children"]);

  // `Scale extends ScaleType` constraint is tricky
  //  could consider removing `scale` altogether in the future and making `domain: Datum[]` required
  // @ts-ignore doesn't like `.domain()`
  var domain = inputDomain || ('domain' in scale ? scale.domain() : []);
  var labelFormatter = labelTransform({
    scale: scale,
    labelFormat: labelFormat
  });
  var labels = domain.map(labelFormatter);
  if (children) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, children(labels));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('vx-legend', className),
    style: _extends({}, style, {
      flexDirection: direction
    })
  }, labels.map(function (label, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LegendItem__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
      key: "legend-" + label.text + "-" + i,
      margin: itemMargin,
      flexDirection: itemDirection
    }, legendItemProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LegendShape__WEBPACK_IMPORTED_MODULE_5__["default"], {
      shape: shape,
      height: shapeHeight,
      width: shapeWidth,
      margin: shapeMargin,
      item: domain[i],
      itemIndex: i,
      label: label,
      fill: fill,
      size: size,
      shapeStyle: shapeStyle
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LegendLabel__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
      label: label.text,
      flex: labelFlex,
      margin: labelMargin,
      align: labelAlign
    }, legendLabelProps)));
  }));
}
Legend.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  domain: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
  shapeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  shapeHeight: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  shapeMargin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  labelAlign: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  labelFlex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  labelMargin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  itemMargin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  size: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  shapeStyle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Ordinal.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Ordinal.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ordinal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Legend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Legend */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/legends/Legend/index.js");



/** Ordinal scales map from strings to an Output type. */
function Ordinal(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Legend__WEBPACK_IMPORTED_MODULE_1__["default"], props);
}

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/shapes/Circle.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/shapes/Circle.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShapeCircle; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/group */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/group/esm/Group.js");



function ShapeCircle(_ref) {
  var fill = _ref.fill,
      width = _ref.width,
      height = _ref.height,
      style = _ref.style;
  var cleanWidth = typeof width === 'string' || typeof width === 'undefined' ? 0 : width;
  var cleanHeight = typeof height === 'string' || typeof height === 'undefined' ? 0 : height;
  var size = Math.max(cleanWidth, cleanHeight);
  var radius = size / 2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: size,
    height: size
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
    top: radius,
    left: radius
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
    r: radius,
    fill: fill,
    style: style
  })));
}
ShapeCircle.propTypes = {
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number])
};

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/shapes/Line.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/shapes/Line.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShapeLine; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vx_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vx/group */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/group/esm/Group.js");



function ShapeLine(_ref) {
  var fill = _ref.fill,
      width = _ref.width,
      height = _ref.height,
      style = _ref.style;
  var cleanHeight = typeof height === 'string' || typeof height === 'undefined' ? 0 : height;
  var lineThickness = typeof (style == null ? void 0 : style.strokeWidth) === 'number' ? style == null ? void 0 : style.strokeWidth : 2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: width,
    height: height
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_vx_group__WEBPACK_IMPORTED_MODULE_2__["default"], {
    top: cleanHeight / 2 - lineThickness / 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    x1: 0,
    x2: width,
    y1: 0,
    y2: 0,
    stroke: fill,
    strokeWidth: lineThickness,
    style: style
  })));
}
ShapeLine.propTypes = {
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number])
};

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/shapes/Rect.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/shapes/Rect.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShapeRect; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function ShapeRect(_ref) {
  var fill = _ref.fill,
      width = _ref.width,
      height = _ref.height,
      style = _ref.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: _extends({
      width: width,
      height: height,
      background: fill
    }, style)
  });
}
ShapeRect.propTypes = {
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number])
};

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/util/labelTransformFactory.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/util/labelTransformFactory.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return labelTransformFactory; });
/** Returns a function which takes a Datum and index as input, and returns a formatted label object. */
function labelTransformFactory(_ref) {
  var scale = _ref.scale,
      labelFormat = _ref.labelFormat;
  return function (d, i) {
    return {
      datum: d,
      index: i,
      text: "" + labelFormat(d, i),
      // @ts-ignore
      value: scale(d)
    };
  };
}

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/util/renderShape.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/util/renderShape.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderShape; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shapes_Rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shapes/Rect */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/shapes/Rect.js");
/* harmony import */ var _shapes_Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shapes/Circle */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/shapes/Circle.js");
/* harmony import */ var _shapes_Line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shapes/Line */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/shapes/Line.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var NO_OP = function NO_OP() {
  return undefined;
};

function renderShape(_ref) {
  var _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? 'rect' : _ref$shape,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? NO_OP : _ref$fill,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? NO_OP : _ref$size,
      width = _ref.width,
      height = _ref.height,
      label = _ref.label,
      item = _ref.item,
      itemIndex = _ref.itemIndex,
      _ref$shapeStyle = _ref.shapeStyle,
      shapeStyle = _ref$shapeStyle === void 0 ? NO_OP : _ref$shapeStyle;
  var props = {
    width: width,
    height: height,
    item: item,
    itemIndex: itemIndex,
    label: label,
    fill: fill(_extends({}, label)),
    size: size(_extends({}, label)),
    style: shapeStyle(_extends({}, label))
  };

  if (typeof shape === 'string') {
    if (shape === 'circle') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shapes_Circle__WEBPACK_IMPORTED_MODULE_2__["default"], props);
    }

    if (shape === 'line') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shapes_Line__WEBPACK_IMPORTED_MODULE_3__["default"], props);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shapes_Rect__WEBPACK_IMPORTED_MODULE_1__["default"], props);
  }

  if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(shape)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(shape, props);
  }

  if (shape) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shape, props);
  }

  return null;
}

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/util/valueOrIdentity.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/legend/esm/util/valueOrIdentity.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default, valueOrIdentityString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return valueOrIdentity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueOrIdentityString", function() { return valueOrIdentityString; });
/** Returns an object's value if defined, or the object. */
function valueOrIdentity(_) {
  if (_ && typeof _ === 'object' && 'value' in _ && typeof _.value !== 'undefined') return _.value;
  return _;
}
/** Returns an object's value if defined, or the object, coerced to a string. */

function valueOrIdentityString(_) {
  return String(valueOrIdentity(_));
}

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/responsive/esm/components/ParentSize.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/responsive/esm/components/ParentSize.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParentSize; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! resize-observer-polyfill */ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ParentSize = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ParentSize, _React$Component);

  function ParentSize() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "animationFrameID", 0);

    _defineProperty(_assertThisInitialized(_this), "resizeObserver", void 0);

    _defineProperty(_assertThisInitialized(_this), "target", null);

    _defineProperty(_assertThisInitialized(_this), "state", {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    });

    _defineProperty(_assertThisInitialized(_this), "resize", lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function (_ref) {
      var width = _ref.width,
          height = _ref.height,
          top = _ref.top,
          left = _ref.left;

      _this.setState(function () {
        return {
          width: width,
          height: height,
          top: top,
          left: left
        };
      });
    }, _this.props.debounceTime, {
      leading: _this.props.enableDebounceLeadingCall
    }));

    _defineProperty(_assertThisInitialized(_this), "setTarget", function (ref) {
      _this.target = ref;
    });

    return _this;
  }

  var _proto = ParentSize.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_3__["default"](function (entries
    /** , observer */
    ) {
      if (entries === void 0) {
        entries = [];
      }

      entries.forEach(function (entry) {
        var _entry$contentRect = entry.contentRect,
            left = _entry$contentRect.left,
            top = _entry$contentRect.top,
            width = _entry$contentRect.width,
            height = _entry$contentRect.height;
        _this2.animationFrameID = window.requestAnimationFrame(function () {
          _this2.resize({
            width: width,
            height: height,
            top: top,
            left: left
          });
        });
      });
    });
    if (this.target) this.resizeObserver.observe(this.target);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameID);
    if (this.resizeObserver) this.resizeObserver.disconnect();
    this.resize.cancel();
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        debounceTime = _this$props.debounceTime,
        parentSizeStyles = _this$props.parentSizeStyles,
        enableDebounceLeadingCall = _this$props.enableDebounceLeadingCall,
        restProps = _objectWithoutPropertiesLoose(_this$props, ["className", "children", "debounceTime", "parentSizeStyles", "enableDebounceLeadingCall"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", _extends({
      style: parentSizeStyles,
      ref: this.setTarget,
      className: className
    }, restProps), children(_extends({}, this.state, {
      ref: this.target,
      resize: this.resize
    })));
  };

  return ParentSize;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

_defineProperty(ParentSize, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  debounceTime: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  enableDebounceLeadingCall: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
});

_defineProperty(ParentSize, "defaultProps", {
  debounceTime: 300,
  enableDebounceLeadingCall: true,
  parentSizeStyles: {
    width: '100%',
    height: '100%'
  }
});



/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/scale/esm/scales/ordinal.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/@vx/scale/esm/scales/ordinal.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ordinalScale; });
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-scale */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/index.js");

function ordinalScale(_ref) {
  var range = _ref.range,
      domain = _ref.domain,
      unknown = _ref.unknown;
  var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["scaleOrdinal"])();
  if (range) scale.range(range);
  if (domain) scale.domain(domain);
  if (unknown) scale.unknown(unknown); // @ts-ignore

  scale.type = 'ordinal';
  return scale;
}

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/array.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/array.js ***!
  \****************************************************************************************************/
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

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/band.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/band.js ***!
  \***************************************************************************************************/
/*! exports provided: default, point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return band; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js");
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ordinal */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/ordinal.js");




function band() {
  var scale = Object(_ordinal__WEBPACK_IMPORTED_MODULE_2__["default"])().unknown(undefined),
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
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(rescale(), arguments);
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
  return pointish(band.apply(null, arguments).paddingInner(1));
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/constant.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/constant.js ***!
  \*******************************************************************************************************/
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

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/continuous.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/continuous.js ***!
  \*********************************************************************************************************/
/*! exports provided: identity, copy, transformer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return transformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return continuous; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/value.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/round.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constant */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/constant.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./number */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/number.js");






var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(_constant__WEBPACK_IMPORTED_MODULE_5__["default"])(isNaN(b) ? NaN : 0.5);
}

function clamper(domain) {
  var a = domain[0], b = domain[domain.length - 1], t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
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
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
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
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["default"],
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"])))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_4__["map"].call(_, _number__WEBPACK_IMPORTED_MODULE_6__["default"]), clamp === identity || (clamp = clamper(domain)), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_4__["slice"].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = _array__WEBPACK_IMPORTED_MODULE_4__["slice"].call(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_3__["default"], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? clamper(domain) : identity, scale) : clamp !== identity;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous(transform, untransform) {
  return transformer()(transform, untransform);
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/diverging.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/diverging.js ***!
  \********************************************************************************************************/
/*! exports provided: default, divergingLog, divergingSymlog, divergingPow, divergingSqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return diverging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingLog", function() { return divergingLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingSymlog", function() { return divergingSymlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingPow", function() { return divergingPow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingSqrt", function() { return divergingSqrt; });
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/log.js");
/* harmony import */ var _sequential__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sequential */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/sequential.js");
/* harmony import */ var _symlog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symlog */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/symlog.js");
/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pow */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/pow.js");








function transformer() {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      t0,
      t1,
      t2,
      k10,
      k21,
      interpolator = _continuous__WEBPACK_IMPORTED_MODULE_0__["identity"],
      transform,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (x < t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), t2 = transform(x2 = +_[2]), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1);
    return scale;
  };
}

function diverging() {
  var scale = Object(_linear__WEBPACK_IMPORTED_MODULE_2__["linearish"])(transformer()(_continuous__WEBPACK_IMPORTED_MODULE_0__["identity"]));

  scale.copy = function() {
    return Object(_sequential__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, diverging());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function divergingLog() {
  var scale = Object(_log__WEBPACK_IMPORTED_MODULE_3__["loggish"])(transformer()).domain([0.1, 1, 10]);

  scale.copy = function() {
    return Object(_sequential__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, divergingLog()).base(scale.base());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function divergingSymlog() {
  var scale = Object(_symlog__WEBPACK_IMPORTED_MODULE_5__["symlogish"])(transformer());

  scale.copy = function() {
    return Object(_sequential__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, divergingSymlog()).constant(scale.constant());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function divergingPow() {
  var scale = Object(_pow__WEBPACK_IMPORTED_MODULE_6__["powish"])(transformer());

  scale.copy = function() {
    return Object(_sequential__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, divergingPow()).exponent(scale.exponent());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/identity.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/identity.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/array.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/number.js");




function identity(domain) {
  var unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(_, _number__WEBPACK_IMPORTED_MODULE_2__["default"]), scale) : domain.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return identity(domain).unknown(unknown);
  };

  domain = arguments.length ? _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(domain, _number__WEBPACK_IMPORTED_MODULE_2__["default"]) : [0, 1];

  return Object(_linear__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/index.js ***!
  \****************************************************************************************************/
/*! exports provided: scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleSymlog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential, scaleSequentialLog, scaleSequentialPow, scaleSequentialSqrt, scaleSequentialSymlog, scaleSequentialQuantile, scaleDiverging, scaleDivergingLog, scaleDivergingPow, scaleDivergingSqrt, scaleDivergingSymlog, tickFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _band__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./band */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/band.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return _band__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return _band__WEBPACK_IMPORTED_MODULE_0__["point"]; });

/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return _identity__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return _linear__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return _log__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _symlog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symlog */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/symlog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSymlog", function() { return _symlog__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordinal */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/ordinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return _ordinal__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return _ordinal__WEBPACK_IMPORTED_MODULE_5__["implicit"]; });

/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pow */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/pow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return _pow__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return _pow__WEBPACK_IMPORTED_MODULE_6__["sqrt"]; });

/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quantile */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return _quantile__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _quantize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quantize */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return _quantize__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _threshold__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./threshold */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/threshold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return _threshold__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./time */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return _time__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _utcTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utcTime */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/utcTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return _utcTime__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _sequential__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sequential */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/sequential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return _sequential__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialLog", function() { return _sequential__WEBPACK_IMPORTED_MODULE_12__["sequentialLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialPow", function() { return _sequential__WEBPACK_IMPORTED_MODULE_12__["sequentialPow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialSqrt", function() { return _sequential__WEBPACK_IMPORTED_MODULE_12__["sequentialSqrt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialSymlog", function() { return _sequential__WEBPACK_IMPORTED_MODULE_12__["sequentialSymlog"]; });

/* harmony import */ var _sequentialQuantile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sequentialQuantile */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/sequentialQuantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialQuantile", function() { return _sequentialQuantile__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _diverging__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./diverging */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDiverging", function() { return _diverging__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingLog", function() { return _diverging__WEBPACK_IMPORTED_MODULE_14__["divergingLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingPow", function() { return _diverging__WEBPACK_IMPORTED_MODULE_14__["divergingPow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingSqrt", function() { return _diverging__WEBPACK_IMPORTED_MODULE_14__["divergingSqrt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingSymlog", function() { return _diverging__WEBPACK_IMPORTED_MODULE_14__["divergingSymlog"]; });

/* harmony import */ var _tickFormat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tickFormat */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/tickFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickFormat", function() { return _tickFormat__WEBPACK_IMPORTED_MODULE_15__["default"]; });


































/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js ***!
  \***************************************************************************************************/
/*! exports provided: initRange, initInterpolator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRange", function() { return initRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initInterpolator", function() { return initInterpolator; });
function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.interpolator(domain); break;
    default: this.interpolator(interpolator).domain(domain); break;
  }
  return this;
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/linear.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/linear.js ***!
  \*****************************************************************************************************/
/*! exports provided: linearish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearish", function() { return linearish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return linear; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js");
/* harmony import */ var _tickFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickFormat */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/tickFormat.js");





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return Object(_tickFormat__WEBPACK_IMPORTED_MODULE_3__["default"])(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
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
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["default"])(_continuous__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous__WEBPACK_IMPORTED_MODULE_1__["identity"]);

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, linear());
  };

  _init__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return linearish(scale);
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/log.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/log.js ***!
  \**************************************************************************************************/
/*! exports provided: loggish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggish", function() { return loggish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nice */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/nice.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./continuous */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js");






function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
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

function loggish(transform) {
  var scale = transform(transformLog, transformExp),
      domain = scale.domain,
      base = 10,
      logs,
      pows;

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
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
    return domain(Object(_nice__WEBPACK_IMPORTED_MODULE_2__["default"])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  return scale;
}

function log() {
  var scale = loggish(Object(_continuous__WEBPACK_IMPORTED_MODULE_3__["transformer"])()).domain([1, 10]);

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_3__["copy"])(scale, log()).base(scale.base());
  };

  _init__WEBPACK_IMPORTED_MODULE_4__["initRange"].apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/nice.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/nice.js ***!
  \***************************************************************************************************/
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

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/number.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/number.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return +x;
});


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/ordinal.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/ordinal.js ***!
  \******************************************************************************************************/
/*! exports provided: implicit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implicit", function() { return implicit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ordinal; });
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-collection */ "./node_modules/d3-collection/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/array.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js");




var implicit = {name: "implicit"};

function ordinal() {
  var index = Object(d3_collection__WEBPACK_IMPORTED_MODULE_0__["map"])(),
      domain = [],
      range = [],
      unknown = implicit;

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
    return ordinal(domain, range).unknown(unknown);
  };

  _init__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/pow.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/pow.js ***!
  \**************************************************************************************************/
/*! exports provided: powish, default, sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powish", function() { return powish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js");




function transformPow(exponent) {
  return function(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function powish(transform) {
  var scale = transform(_continuous__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous__WEBPACK_IMPORTED_MODULE_1__["identity"]),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(_continuous__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous__WEBPACK_IMPORTED_MODULE_1__["identity"])
        : exponent === 0.5 ? transform(transformSqrt, transformSquare)
        : transform(transformPow(exponent), transformPow(1 / exponent));
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}

function pow() {
  var scale = powish(Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["transformer"])());

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, pow()).exponent(scale.exponent());
  };

  _init__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return scale;
}

function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/quantile.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/quantile.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/array.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js");




function quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["quantile"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(thresholds, x)];
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

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return _init__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/quantize.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/quantize.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantize; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/array.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js");





function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)] : unknown;
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

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function() {
    return domain.slice();
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range)
        .unknown(unknown);
  };

  return _init__WEBPACK_IMPORTED_MODULE_3__["initRange"].apply(Object(_linear__WEBPACK_IMPORTED_MODULE_2__["linearish"])(scale), arguments);
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/sequential.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/sequential.js ***!
  \*********************************************************************************************************/
/*! exports provided: copy, default, sequentialLog, sequentialSymlog, sequentialPow, sequentialSqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialLog", function() { return sequentialLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialSymlog", function() { return sequentialSymlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialPow", function() { return sequentialPow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialSqrt", function() { return sequentialSqrt; });
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/log.js");
/* harmony import */ var _symlog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symlog */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/symlog.js");
/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pow */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/pow.js");







function transformer() {
  var x0 = 0,
      x1 = 1,
      t0,
      t1,
      k10,
      transform,
      interpolator = _continuous__WEBPACK_IMPORTED_MODULE_0__["identity"],
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .interpolator(source.interpolator())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function sequential() {
  var scale = Object(_linear__WEBPACK_IMPORTED_MODULE_2__["linearish"])(transformer()(_continuous__WEBPACK_IMPORTED_MODULE_0__["identity"]));

  scale.copy = function() {
    return copy(scale, sequential());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function sequentialLog() {
  var scale = Object(_log__WEBPACK_IMPORTED_MODULE_3__["loggish"])(transformer()).domain([1, 10]);

  scale.copy = function() {
    return copy(scale, sequentialLog()).base(scale.base());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function sequentialSymlog() {
  var scale = Object(_symlog__WEBPACK_IMPORTED_MODULE_4__["symlogish"])(transformer());

  scale.copy = function() {
    return copy(scale, sequentialSymlog()).constant(scale.constant());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function sequentialPow() {
  var scale = Object(_pow__WEBPACK_IMPORTED_MODULE_5__["powish"])(transformer());

  scale.copy = function() {
    return copy(scale, sequentialPow()).exponent(scale.exponent());
  };

  return _init__WEBPACK_IMPORTED_MODULE_1__["initInterpolator"].apply(scale, arguments);
}

function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/sequentialQuantile.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/sequentialQuantile.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequentialQuantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js");




function sequentialQuantile() {
  var domain = [],
      interpolator = _continuous__WEBPACK_IMPORTED_MODULE_1__["identity"];

  function scale(x) {
    if (!isNaN(x = +x)) return interpolator((Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x) - 1) / (domain.length - 1));
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__["ascending"]);
    return scale;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };

  return _init__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/symlog.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/symlog.js ***!
  \*****************************************************************************************************/
/*! exports provided: symlogish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symlogish", function() { return symlogish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symlog; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js");




function transformSymlog(c) {
  return function(x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function transformSymexp(c) {
  return function(x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function symlogish(transform) {
  var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));

  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}

function symlog() {
  var scale = symlogish(Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["transformer"])());

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, symlog()).constant(scale.constant());
  };

  return _init__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/threshold.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/threshold.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return threshold; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/array.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js");




function threshold() {
  var domain = [0.5],
      range = [0, 1],
      unknown,
      n = 1;

  function scale(x) {
    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)] : unknown;
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

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return _init__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/tickFormat.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/tickFormat.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count, specifier) {
  var step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, count),
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

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/time.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/time.js ***!
  \***************************************************************************************************/
/*! exports provided: calendar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/array.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./continuous */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./init */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nice */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/nice.js");








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
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_4__["default"])(_continuous__WEBPACK_IMPORTED_MODULE_4__["identity"], _continuous__WEBPACK_IMPORTED_MODULE_4__["identity"]),
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
    return arguments.length ? domain(_array__WEBPACK_IMPORTED_MODULE_3__["map"].call(_, number)) : domain().map(date);
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
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return _init__WEBPACK_IMPORTED_MODULE_5__["initRange"].apply(calendar(d3_time__WEBPACK_IMPORTED_MODULE_1__["timeYear"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMonth"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeWeek"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeDay"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeHour"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMinute"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeSecond"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_2__["timeFormat"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
});


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/utcTime.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/utcTime.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/time.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init */ "./node_modules/@superset-ui/legacy-plugin-chart-histogram/node_modules/d3-scale/src/init.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  return _init__WEBPACK_IMPORTED_MODULE_3__["initRange"].apply(Object(_time__WEBPACK_IMPORTED_MODULE_0__["calendar"])(d3_time__WEBPACK_IMPORTED_MODULE_2__["utcYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_1__["utcFormat"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
});


/***/ }),

/***/ "./node_modules/@vx/text/dist/vx-text.es.js":
/*!**************************************************!*\
  !*** ./node_modules/@vx/text/dist/vx-text.es.js ***!
  \**************************************************/
/*! exports provided: Text, getStringWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStringWidth", function() { return getStringWidth$1; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reduce_css_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reduce-css-calc */ "./node_modules/reduce-css-calc/index.js");
/* harmony import */ var reduce_css_calc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reduce_css_calc__WEBPACK_IMPORTED_MODULE_2__);




var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

var MEASUREMENT_ELEMENT_ID = '__react_svg_text_measurement_id';

function getStringWidth(str, style) {
  try {
    // Calculate length of each word to be used to determine number of words per line
    var textEl = document.getElementById(MEASUREMENT_ELEMENT_ID);
    if (!textEl) {
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.style.width = 0;
      svg.style.height = 0;
      svg.style.position = 'absolute';
      svg.style.top = '-100%';
      svg.style.left = '-100%';
      textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      textEl.setAttribute('id', MEASUREMENT_ELEMENT_ID);
      svg.appendChild(textEl);
      document.body.appendChild(svg);
    }

    Object.assign(textEl.style, style);
    textEl.textContent = str;
    return textEl.getComputedTextLength();
  } catch (e) {
    return null;
  }
}

var getStringWidth$1 = memoize_1(getStringWidth, function (str, style) {
  return str + '_' + JSON.stringify(style);
});

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

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Text = function (_Component) {
  inherits(Text, _Component);

  function Text(props) {
    classCallCheck(this, Text);

    var _this = possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));

    _this.state = {
      wordsByLines: []
    };
    return _this;
  }

  createClass(Text, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateWordsByLines(this.props, true);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var needCalculate = this.props.children !== nextProps.children || this.props.style !== nextProps.style;
      this.updateWordsByLines(nextProps, needCalculate);
    }
  }, {
    key: 'updateWordsByLines',
    value: function updateWordsByLines(props, needCalculate) {
      // Only perform calculations if using features that require them (multiline, scaleToFit)
      if (props.width || props.scaleToFit) {
        if (needCalculate) {
          var words = props.children ? props.children.toString().split(/\s+/) : [];

          this.wordsWithComputedWidth = words.map(function (word) {
            return {
              word: word,
              width: getStringWidth$1(word, props.style)
            };
          });
          this.spaceWidth = getStringWidth$1('\xA0', props.style);
        }

        var wordsByLines = this.calculateWordsByLines(this.wordsWithComputedWidth, this.spaceWidth, props.width);
        this.setState({ wordsByLines: wordsByLines });
      } else {
        this.updateWordsWithoutCalculate(props);
      }
    }
  }, {
    key: 'updateWordsWithoutCalculate',
    value: function updateWordsWithoutCalculate(props) {
      var words = props.children ? props.children.toString().split(/\s+/) : [];
      this.setState({ wordsByLines: [{ words: words }] });
    }
  }, {
    key: 'calculateWordsByLines',
    value: function calculateWordsByLines(wordsWithComputedWidth, spaceWidth, lineWidth) {
      var scaleToFit = this.props.scaleToFit;

      return wordsWithComputedWidth.reduce(function (result, _ref) {
        var word = _ref.word,
            width = _ref.width;

        var currentLine = result[result.length - 1];

        if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < lineWidth)) {
          // Word can be added to an existing line
          currentLine.words.push(word);
          currentLine.width += width + spaceWidth;
        } else {
          // Add first word to line or word is too long to scaleToFit on existing line
          var newLine = { words: [word], width: width };
          result.push(newLine);
        }

        return result;
      }, []);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          dx = _props.dx,
          dy = _props.dy,
          textAnchor = _props.textAnchor,
          verticalAnchor = _props.verticalAnchor,
          scaleToFit = _props.scaleToFit,
          angle = _props.angle,
          lineHeight = _props.lineHeight,
          capHeight = _props.capHeight,
          innerRef = _props.innerRef,
          textProps = objectWithoutProperties(_props, ['dx', 'dy', 'textAnchor', 'verticalAnchor', 'scaleToFit', 'angle', 'lineHeight', 'capHeight', 'innerRef']);
      var wordsByLines = this.state.wordsByLines;
      var x = textProps.x,
          y = textProps.y;


      var startDy = void 0;
      switch (verticalAnchor) {
        case 'start':
          startDy = reduce_css_calc__WEBPACK_IMPORTED_MODULE_2___default()('calc(' + capHeight + ')');
          break;
        case 'middle':
          startDy = reduce_css_calc__WEBPACK_IMPORTED_MODULE_2___default()('calc(' + (wordsByLines.length - 1) / 2 + ' * -' + lineHeight + ' + (' + capHeight + ' / 2))');
          break;
        default:
          startDy = reduce_css_calc__WEBPACK_IMPORTED_MODULE_2___default()('calc(' + (wordsByLines.length - 1) + ' * -' + lineHeight + ')');
          break;
      }

      var transforms = [];
      if (scaleToFit && wordsByLines.length) {
        var lineWidth = wordsByLines[0].width;
        var sx = this.props.width / lineWidth;
        var sy = sx;
        var originX = x - sx * x;
        var originY = y - sy * y;
        transforms.push('matrix(' + sx + ', 0, 0, ' + sy + ', ' + originX + ', ' + originY + ')');
      }
      if (angle) {
        transforms.push('rotate(' + angle + ', ' + x + ', ' + y + ')');
      }
      if (transforms.length) {
        textProps.transform = transforms.join(' ');
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'svg',
        {
          ref: innerRef,
          x: dx,
          y: dy,
          fontSize: textProps.fontSize,
          style: { overflow: 'visible' }
        },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          'text',
          _extends({}, textProps, { textAnchor: textAnchor }),
          wordsByLines.map(function (line, index) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'tspan',
              { x: x, dy: index === 0 ? startDy : lineHeight, key: index },
              line.words.join(' ')
            );
          })
        )
      );
    }
  }]);
  return Text;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

Text.defaultProps = {
  x: 0,
  y: 0,
  dx: 0,
  dy: 0,
  lineHeight: '1em',
  capHeight: '0.71em', // Magic number from d3
  scaleToFit: false,
  textAnchor: 'start',
  verticalAnchor: 'end' // default SVG behavior
};

Text.propTypes = {
  scaleToFit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  angle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  textAnchor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['start', 'middle', 'end', 'inherit']),
  verticalAnchor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['start', 'middle', 'end']),
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  x: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  dx: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  dy: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  capHeight: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string])
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/balanced-match/index.js":
/*!**********************************************!*\
  !*** ./node_modules/balanced-match/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


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

/***/ "./node_modules/d3-timer/src/interval.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-timer/src/interval.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__["Timer"], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? Object(_timer_js__WEBPACK_IMPORTED_MODULE_0__["now"])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timeout.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-timer/src/timeout.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ "./node_modules/d3-timer/src/timer.js");


/* harmony default export */ __webpack_exports__["default"] = (function(callback, delay, time) {
  var t = new _timer_js__WEBPACK_IMPORTED_MODULE_0__["Timer"];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/*! exports provided: now, Timer, timer, timerFlush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerFlush", function() { return timerFlush; });
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),

/***/ "./node_modules/math-expression-evaluator/src/formula_evaluator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/math-expression-evaluator/src/formula_evaluator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mexp=__webpack_require__(/*! ./postfix_evaluator.js */ "./node_modules/math-expression-evaluator/src/postfix_evaluator.js");
Mexp.prototype.formulaEval = function () {
	"use strict";
	var stack=[],pop1,pop2,pop3;
	var disp=[];
	var temp='';
	var arr=this.value;
	for(var i=0;i<arr.length;i++){
		if(arr[i].type===1||arr[i].type===3){
			disp.push({value:arr[i].type===3?arr[i].show:arr[i].value,type:1});
		}
		else if(arr[i].type===13){
			disp.push({value:arr[i].show,type:1});
		}
		else if(arr[i].type===0){
			disp[disp.length-1]={value:arr[i].show+(arr[i].show!="-"?"(":"")+disp[disp.length-1].value+(arr[i].show!="-"?")":""),type:0};
		}
		else if(arr[i].type===7){
			disp[disp.length-1]={value:(disp[disp.length-1].type!=1?"(":"")+disp[disp.length-1].value+(disp[disp.length-1].type!=1?")":"")+arr[i].show,type:7};
		}
		else if(arr[i].type===10){
			pop1=disp.pop();
			pop2=disp.pop();
			if(arr[i].show==='P'||arr[i].show==='C')disp.push({value:"<sup>"+pop2.value+"</sup>"+arr[i].show+"<sub>"+pop1.value+"</sub>",type:10});
			else disp.push({value:(pop2.type!=1?"(":"")+pop2.value+(pop2.type!=1?")":"")+"<sup>"+pop1.value+"</sup>",type:1});
		}
		else if(arr[i].type===2||arr[i].type===9){
			pop1=disp.pop();
			pop2=disp.pop();
			disp.push({value:(pop2.type!=1?"(":"")+pop2.value+(pop2.type!=1?")":"")+arr[i].show+(pop1.type!=1?"(":"")+pop1.value+(pop1.type!=1?")":""),type:arr[i].type});
		}
		else if(arr[i].type===12){
			pop1=disp.pop();
			pop2=disp.pop();
			pop3=disp.pop();
			disp.push({value:arr[i].show+"("+pop3.value+","+pop2.value+","+pop1.value+")",type:12});
		}
	}
	return disp[0].value;
};
module.exports=Mexp;

/***/ }),

/***/ "./node_modules/math-expression-evaluator/src/lexer.js":
/*!*************************************************************!*\
  !*** ./node_modules/math-expression-evaluator/src/lexer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mexp = __webpack_require__(/*! ./math_function.js */ "./node_modules/math-expression-evaluator/src/math_function.js")
function inc (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] += val
  }
  return arr
}
var token = ['sin', 'cos', 'tan', 'pi', '(', ')', 'P', 'C',
  'asin', 'acos', 'atan', '7', '8', '9', 'int',
  'cosh', 'acosh', 'ln', '^', 'root', '4', '5', '6', '/', '!',
  'tanh', 'atanh', 'Mod', '1', '2', '3', '*',
  'sinh', 'asinh', 'e', 'log', '0', '.', '+', '-', ',', 'Sigma', 'n', 'Pi', 'pow']
var show = ['sin', 'cos', 'tan', '&pi;', '(', ')', 'P', 'C',
  'asin', 'acos', 'atan', '7', '8', '9', 'Int',
  'cosh', 'acosh', ' ln', '^', 'root', '4', '5', '6', '&divide;', '!',
  'tanh', 'atanh', ' Mod ', '1', '2', '3', '&times;',
  'sinh', 'asinh', 'e', ' log', '0', '.', '+', '-', ',', '&Sigma;', 'n', '&Pi;', 'pow']
var eva = [Mexp.math.sin, Mexp.math.cos, Mexp.math.tan, 'PI', '(', ')', Mexp.math.P, Mexp.math.C,
  Mexp.math.asin, Mexp.math.acos, Mexp.math.atan, '7', '8', '9', Math.floor,
  Mexp.math.cosh, Mexp.math.acosh, Math.log, Math.pow, Math.sqrt, '4', '5', '6', Mexp.math.div, Mexp.math.fact,
  Mexp.math.tanh, Mexp.math.atanh, Mexp.math.mod, '1', '2', '3', Mexp.math.mul,
  Mexp.math.sinh, Mexp.math.asinh, 'E', Mexp.math.log, '0', '.', Mexp.math.add, Mexp.math.sub, ',', Mexp.math.sigma, 'n', Mexp.math.Pi, Math.pow]
var preced = {
  0: 11,
  1: 0,
  2: 3,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 11,
  8: 11,
  9: 1,
  10: 10,
  11: 0,
  12: 11,
  13: 0
} // stores precedence by types
var type = [0, 0, 0, 3, 4, 5, 10, 10,
  0, 0, 0, 1, 1, 1, 0,
  0, 0, 0, 10, 0, 1, 1, 1, 2, 7,
  0, 0, 2, 1, 1, 1, 2,
  0, 0, 3, 0, 1, 6, 9, 9, 11, 12, 13, 12, 8]
/*
0 : function with syntax function_name(Maths_exp)
1 : numbers
2 : binary operators like * / Mod left associate and same precedence
3 : Math constant values like e,pi,Cruncher ans
4 : opening bracket
5 : closing bracket
6 : decimal
7 : function with syntax (Math_exp)function_name
8: function with syntax function_name(Math_exp1,Math_exp2)
9 : binary operator like +,-
10: binary operator like P C or ^
11: ,
12: function with , seperated three parameters
13: variable of Sigma function
*/
var type0 = {
  0: true,
  1: true,
  3: true,
  4: true,
  6: true,
  8: true,
  9: true,
  12: true,
  13: true
} // type2:true,type4:true,type9:true,type11:true,type21:true,type22
var type1 = {
  0: true,
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
  7: true,
  8: true,
  9: true,
  10: true,
  11: true,
  12: true,
  13: true
} // type3:true,type5:true,type7:true,type23
var type1Asterick = {
  0: true,
  3: true,
  4: true,
  8: true,
  12: true,
  13: true
}
var empty = {}
var type3Asterick = {
  0: true,
  1: true,
  3: true,
  4: true,
  6: true,
  8: true,
  12: true,
  13: true
} // type_5:true,type_7:true,type_23
var type6 = {
  1: true
}
var newAr = [
  [],
  ['1', '2', '3', '7', '8', '9', '4', '5', '6', '+', '-', '*', '/', '(', ')', '^', '!', 'P', 'C', 'e', '0', '.', ',', 'n'],
  ['pi', 'ln', 'Pi'],
  ['sin', 'cos', 'tan', 'Del', 'int', 'Mod', 'log', 'pow'],
  ['asin', 'acos', 'atan', 'cosh', 'root', 'tanh', 'sinh'],
  ['acosh', 'atanh', 'asinh', 'Sigma']
]

function match (str1, str2, i, x) {
  for (var f = 0; f < x; f++) {
    if (str1[i + f] !== str2[f]) {
      return false
    }
  }
  return true
}
Mexp.addToken = function (tokens) {
  for (var i = 0; i < tokens.length; i++) {
    var x = tokens[i].token.length
    var temp = -1

    // newAr is a specially designed data structure index of 1d array = length of tokens

    if (x < newAr.length) { // match to check if token is really huge and not existing
    // if not checked it will break in next line as undefined index
      for (var y = 0; y < newAr[x].length; y++) {
        if (tokens[i].token === newAr[x][y]) {
          temp = token.indexOf(newAr[x][y])
          break
        }
      }
    }
    if (temp === -1) {
      token.push(tokens[i].token)
      type.push(tokens[i].type)
      if (newAr.length <= tokens[i].token.length) {
        newAr[tokens[i].token.length] = []
      }
      newAr[tokens[i].token.length].push(tokens[i].token)
      eva.push(tokens[i].value)
      show.push(tokens[i].show)
    } else {
      token[temp] = tokens[i].token
      type[temp] = tokens[i].type
      eva[temp] = tokens[i].value
      show[temp] = tokens[i].show
    }
  }
}
Mexp.lex = function (inp, tokens) {
  'use strict'
  var changeSignObj = {
    value: Mexp.math.changeSign,
    type: 0,
    pre: 21,
    show: '-'
  }
  var closingParObj = {
    value: ')',
    show: ')',
    type: 5,
    pre: 0
  }
  var openingParObj = {
    value: '(',
    type: 4,
    pre: 0,
    show: '('
  }
  var str = [openingParObj]
  var ptc = [] // Parenthesis to close at the beginning is after one token
  var inpStr = inp
  var key
  var allowed = type0
  var bracToClose = 0
  var asterick = empty
  var prevKey = ''
  var i, x, y
  if (typeof tokens !== 'undefined') {
    Mexp.addToken(tokens)
  }
  var obj = {}
  for (i = 0; i < inpStr.length; i++) {
    if (inpStr[i] === ' ') {
      continue
    }
    key = ''
    for (x = (inpStr.length - i > (newAr.length - 2) ? newAr.length - 1 : inpStr.length - i); x > 0; x--) {
      if (newAr[x] === undefined) continue;
      for (y = 0; y < newAr[x].length; y++) {
        if (match(inpStr, newAr[x][y], i, x)) {
          key = newAr[x][y]
          y = newAr[x].length
          x = 0
        }
      }
    }
    i += key.length - 1
    if (key === '') {
      throw (new Mexp.Exception('Can\'t understand after ' + inpStr.slice(i)))
    }
    var index = token.indexOf(key)
    var cToken = key
    var cType = type[index]
    var cEv = eva[index]
    var cPre = preced[cType]
    var cShow = show[index]
    var pre = str[str.length - 1]
    var j
    for (j = ptc.length; j--;) { // loop over ptc
      if (ptc[j] === 0) {
        if ([0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(cType) !== -1) {
          if (allowed[cType] !== true) {
            throw (new Mexp.Exception(key + ' is not allowed after ' + prevKey))
          }
          str.push(closingParObj)
          allowed = type1
          asterick = type3Asterick
          inc(ptc, -1).pop()
        }
      } else break
    }
    if (allowed[cType] !== true) {
      throw (new Mexp.Exception(key + ' is not allowed after ' + prevKey))
    }
    if (asterick[cType] === true) {
      cType = 2
      cEv = Mexp.math.mul
      cShow = '&times;'
      cPre = 3
      i = i - key.length
    }
    obj = {
      value: cEv,
      type: cType,
      pre: cPre,
      show: cShow
    }
    if (cType === 0) {
      allowed = type0
      asterick = empty
      inc(ptc, 2).push(2)
      str.push(obj)
      str.push(openingParObj)
    } else if (cType === 1) {
      if (pre.type === 1) {
        pre.value += cEv
        inc(ptc, 1)
      } else {
        str.push(obj)
      }
      allowed = type1
      asterick = type1Asterick
    } else if (cType === 2) {
      allowed = type0
      asterick = empty
      inc(ptc, 2)
      str.push(obj)
    } else if (cType === 3) { // constant
      str.push(obj)
      allowed = type1
      asterick = type3Asterick
    } else if (cType === 4) {
      inc(ptc, 1)
      bracToClose++
      allowed = type0
      asterick = empty
      str.push(obj)
    } else if (cType === 5) {
      if (!bracToClose) {
        throw (new Mexp.Exception('Closing parenthesis are more than opening one, wait What!!!'))
      }
      bracToClose--
      allowed = type1
      asterick = type3Asterick
      str.push(obj)
    } else if (cType === 6) {
      if (pre.hasDec) {
        throw (new Mexp.Exception('Two decimals are not allowed in one number'))
      }
      if (pre.type !== 1) {
        pre = {
          value: 0,
          type: 1,
          pre: 0
        } // pre needs to be changed as it will the last value now to be safe in later code
        str.push(pre)
        inc(ptc, -1)
      }
      allowed = type6
      inc(ptc, 1)
      asterick = empty
      pre.value += cEv
      pre.hasDec = true
    } else if (cType === 7) {
      allowed = type1
      asterick = type3Asterick
      inc(ptc, 1)
      str.push(obj)
    }
    if (cType === 8) {
      allowed = type0
      asterick = empty
      inc(ptc, 4).push(4)
      str.push(obj)
      str.push(openingParObj)
    } else if (cType === 9) {
      if (pre.type === 9) {
        if (pre.value === Mexp.math.add) {
          pre.value = cEv
          pre.show = cShow
          inc(ptc, 1)
        } else if (pre.value === Mexp.math.sub && cShow === '-') {
          pre.value = Mexp.math.add
          pre.show = '+'
          inc(ptc, 1)
        }
      } else if (pre.type !== 5 && pre.type !== 7 && pre.type !== 1 && pre.type !== 3 && pre.type !== 13) { // changesign only when negative is found
        if (cToken === '-') { // do nothing for + token
          // don't add with the above if statement as that will run the else statement of parent if on Ctoken +
          allowed = type0
          asterick = empty
          inc(ptc, 2).push(2)
          str.push(changeSignObj)
          str.push(openingParObj)
        }
      } else {
        str.push(obj)
        inc(ptc, 2)
      }
      allowed = type0
      asterick = empty
    } else if (cType === 10) {
      allowed = type0
      asterick = empty
      inc(ptc, 2)
      str.push(obj)
    } else if (cType === 11) {
      allowed = type0
      asterick = empty
      str.push(obj)
    } else if (cType === 12) {
      allowed = type0
      asterick = empty
      inc(ptc, 6).push(6)
      str.push(obj)
      str.push(openingParObj)
    } else if (cType === 13) {
      allowed = type1
      asterick = type3Asterick
      str.push(obj)
    }
    inc(ptc, -1)
    prevKey = key
  }
  for (j = ptc.length; j--;) { // loop over ptc
    if (ptc[j] === 0) {
      str.push(closingParObj)
      inc(ptc, -1).pop()
    } else break  // if it is not zero so before ptc also cant be zero
  }
  if (allowed[5] !== true) {
    throw (new Mexp.Exception('complete the expression'))
  }
  while (bracToClose--) {
    str.push(closingParObj)
  }

  str.push(closingParObj)
  //        console.log(str);
  return new Mexp(str)
}
module.exports = Mexp


/***/ }),

/***/ "./node_modules/math-expression-evaluator/src/math_function.js":
/*!*********************************************************************!*\
  !*** ./node_modules/math-expression-evaluator/src/math_function.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Mexp = function (parsed) {
  this.value = parsed
}

Mexp.math = {
  isDegree: true, // mode of calculator
  acos: function (x) {
    return (Mexp.math.isDegree ? 180 / Math.PI * Math.acos(x) : Math.acos(x))
  },
  add: function (a, b) {
    return a + b
  },
  asin: function (x) {
    return (Mexp.math.isDegree ? 180 / Math.PI * Math.asin(x) : Math.asin(x))
  },
  atan: function (x) {
    return (Mexp.math.isDegree ? 180 / Math.PI * Math.atan(x) : Math.atan(x))
  },
  acosh: function (x) {
    return Math.log(x + Math.sqrt(x * x - 1))
  },
  asinh: function (x) {
    return Math.log(x + Math.sqrt(x * x + 1))
  },
  atanh: function (x) {
    return Math.log((1 + x) / (1 - x))
  },
  C: function (n, r) {
    var pro = 1
    var other = n - r
    var choice = r
    if (choice < other) {
      choice = other
      other = r
    }
    for (var i = choice + 1; i <= n; i++) {
      pro *= i
    }
    return pro / Mexp.math.fact(other)
  },
  changeSign: function (x) {
    return -x
  },
  cos: function (x) {
    if (Mexp.math.isDegree) x = Mexp.math.toRadian(x)
    return Math.cos(x)
  },
  cosh: function (x) {
    return (Math.pow(Math.E, x) + Math.pow(Math.E, -1 * x)) / 2
  },
  div: function (a, b) {
    return a / b
  },
  fact: function (n) {
    if (n % 1 !== 0) return 'NaN'
    var pro = 1
    for (var i = 2; i <= n; i++) {
      pro *= i
    }
    return pro
  },
  inverse: function (x) {
    return 1 / x
  },
  log: function (i) {
    return Math.log(i) / Math.log(10)
  },
  mod: function (a, b) {
    return a % b
  },
  mul: function (a, b) {
    return a * b
  },
  P: function (n, r) {
    var pro = 1
    for (var i = Math.floor(n) - Math.floor(r) + 1; i <= Math.floor(n); i++) {
      pro *= i
    }
    return pro
  },
  Pi: function (low, high, ex) {
    var pro = 1
    for (var i = low; i <= high; i++) {
      pro *= Number(ex.postfixEval({
        n: i
      }))
    }
    return pro
  },
  pow10x: function (e) {
    var x = 1
    while (e--) {
      x *= 10
    }
    return x
  },
  sigma: function (low, high, ex) {
    var sum = 0
    for (var i = low; i <= high; i++) {
      sum += Number(ex.postfixEval({
        n: i
      }))
    }
    return sum
  },
  sin: function (x) {
    if (Mexp.math.isDegree) x = Mexp.math.toRadian(x)
    return Math.sin(x)
  },
  sinh: function (x) {
    return (Math.pow(Math.E, x) - Math.pow(Math.E, -1 * x)) / 2
  },
  sub: function (a, b) {
    return a - b
  },
  tan: function (x) {
    if (Mexp.math.isDegree) x = Mexp.math.toRadian(x)
    return Math.tan(x)
  },
  tanh: function (x) {
    return Mexp.sinha(x) / Mexp.cosha(x)
  },
  toRadian: function (x) {
    return x * Math.PI / 180
  }
}
Mexp.Exception = function (message) {
  this.message = message
}
module.exports = Mexp


/***/ }),

/***/ "./node_modules/math-expression-evaluator/src/postfix.js":
/*!***************************************************************!*\
  !*** ./node_modules/math-expression-evaluator/src/postfix.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    var Mexp=__webpack_require__(/*! ./lexer.js */ "./node_modules/math-expression-evaluator/src/lexer.js");

	Mexp.prototype.toPostfix = function () {
		'use strict';
		var post=[],elem,popped,prep,pre,ele;
    	var stack=[{value:"(",type:4,pre:0}];
		var arr=this.value;
		for (var i=1; i < arr.length; i++) {
			if(arr[i].type===1||arr[i].type===3||arr[i].type===13){	//if token is number,constant,or n(which is also a special constant in our case)
				if(arr[i].type===1)
					arr[i].value=Number(arr[i].value);
				post.push(arr[i]);
			}
			else if(arr[i].type===4){
				stack.push(arr[i]);
			}
			else if(arr[i].type===5){
				while((popped=stack.pop()).type!==4){
					post.push(popped);
				}
			}
			else if(arr[i].type===11){
				while((popped=stack.pop()).type!==4){
					post.push(popped);
				}
				stack.push(popped);
			}
			else {
				elem=arr[i];
				pre=elem.pre;
				ele=stack[stack.length-1];
				prep=ele.pre;
				var flag=ele.value=='Math.pow'&&elem.value=='Math.pow';
				if(pre>prep)stack.push(elem);
				else {
					while(prep>=pre&&!flag||flag&&pre<prep){
						popped=stack.pop();
						ele=stack[stack.length-1];
						post.push(popped);
						prep=ele.pre;
						flag=elem.value=='Math.pow'&&ele.value=='Math.pow';
					}
					stack.push(elem);
				}
			}
		}
		return new Mexp(post);
	};
    module.exports=Mexp;

/***/ }),

/***/ "./node_modules/math-expression-evaluator/src/postfix_evaluator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/math-expression-evaluator/src/postfix_evaluator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mexp=__webpack_require__(/*! ./postfix.js */ "./node_modules/math-expression-evaluator/src/postfix.js");
Mexp.prototype.postfixEval = function (UserDefined) {
	'use strict';
	UserDefined=UserDefined||{};
	UserDefined.PI=Math.PI;
	UserDefined.E=Math.E;
	var stack=[],pop1,pop2,pop3;
	var disp=[];
	var temp='';
	var arr=this.value;
	var bool=(typeof UserDefined.n!=="undefined");
	for(var i=0;i<arr.length;i++){
		if(arr[i].type===1){
			stack.push({value:arr[i].value,type:1});
		}
		else if(arr[i].type===3){
			stack.push({value:UserDefined[arr[i].value],type:1});
		}
		else if(arr[i].type===0){
			if(typeof stack[stack.length-1].type==="undefined"){
				stack[stack.length-1].value.push(arr[i]);
			}
			else stack[stack.length-1].value=arr[i].value(stack[stack.length-1].value);
		}
		else if(arr[i].type===7){
			if(typeof stack[stack.length-1].type==="undefined"){
				stack[stack.length-1].value.push(arr[i]);
			}
			else stack[stack.length-1].value=arr[i].value(stack[stack.length-1].value);
		}
		else if(arr[i].type===8){
			pop1=stack.pop();
			pop2=stack.pop();
			stack.push({type:1,value:arr[i].value(pop2.value,pop1.value)});
		}
		else if(arr[i].type===10){
			pop1=stack.pop();
			pop2=stack.pop();
			if(typeof pop2.type==="undefined"){
				pop2.value=pop2.concat(pop1);
				pop2.value.push(arr[i]);
				stack.push(pop2);
			}
			else if (typeof pop1.type==="undefined") {
				pop1.unshift(pop2);
				pop1.push(arr[i]);
				stack.push(pop1);
			}
			else{
				stack.push({type:1,value:arr[i].value(pop2.value,pop1.value)});
            }
		}
		else if(arr[i].type===2||arr[i].type===9){
			pop1=stack.pop();
			pop2=stack.pop();
			if(typeof pop2.type==="undefined"){
                console.log(pop2);
				pop2=pop2.concat(pop1);
				pop2.push(arr[i]);
				stack.push(pop2);
			}
			else if (typeof pop1.type==="undefined") {
				pop1.unshift(pop2);
				pop1.push(arr[i]);
				stack.push(pop1);
			}
			else{
				stack.push({type:1,value:arr[i].value(pop2.value,pop1.value)});
			}
		}
		else if(arr[i].type===12){
			pop1=stack.pop();
			if (typeof pop1.type!=="undefined") {
				pop1=[pop1];
			}
			pop2=stack.pop();
			pop3=stack.pop();
			stack.push({type:1,value:arr[i].value(pop3.value,pop2.value,new Mexp(pop1))});
		}
		else if(arr[i].type===13){
			if(bool){
				stack.push({value:UserDefined[arr[i].value],type:3});
			}
			else stack.push([arr[i]]);
		}
	}
	if (stack.length>1) {
		throw(new Mexp.exception("Uncaught Syntax error"));
	}
	return stack[0].value>1000000000000000?"Infinity":parseFloat(stack[0].value.toFixed(15));
};
Mexp.eval=function(str,tokens,obj){
	if (typeof tokens==="undefined") {
		return this.lex(str).toPostfix().postfixEval();
	}
	else if (typeof obj==="undefined") {
		if (typeof tokens.length!=="undefined") 
			return this.lex(str,tokens).toPostfix().postfixEval();
		else
			return this.lex(str).toPostfix().postfixEval(tokens);
	}
	else
		return this.lex(str,tokens).toPostfix().postfixEval(obj);
};
module.exports=Mexp;

/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-move/es/Animate/Animate.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-move/es/Animate/Animate.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NodeGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NodeGroup */ "./node_modules/react-move/es/NodeGroup/index.js");




var keyAccessor = function keyAccessor() {
  return '$$key$$';
};

function Animate(props) {
  var show = props.show,
      start = props.start,
      enter = props.enter,
      update = props.update,
      leave = props.leave,
      children = props.children;
  var data = typeof start === 'function' ? start() : start;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NodeGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: show ? [data] : [],
    start: function start() {
      return data;
    },
    keyAccessor: keyAccessor,
    enter: typeof enter === 'function' ? enter : function () {
      return enter;
    },
    update: typeof update === 'function' ? update : function () {
      return update;
    },
    leave: typeof leave === 'function' ? leave : function () {
      return leave;
    }
  }, function (nodes) {
    if (!nodes[0]) {
      return null;
    }

    var renderedChildren = children(nodes[0].state);
    return renderedChildren && react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(renderedChildren);
  });
}

Animate.propTypes =  true ? {
  /**
   * Boolean value that determines if the child should be rendered or not.
   */
  show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,

  /**
   * An object or function that returns an obejct to be used as the starting state.
   */
  start: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),

  /**
   * An object, array of objects, or function that returns an object or array of objects describing how the state should transform on enter.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),

  /**
   * An object, array of objects, or function that returns an object or array of objects describing how the state should transform on update. ***Note:*** although not required, in most cases it make sense to specify an update prop to handle interrupted enter and leave transitions.
   */
  update: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),

  /**
   * An object, array of objects, or function that returns an object or array of objects describing how the state should transform on leave.
   */
  leave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),

  /**
   * A function that renders the node.  The function is passed the data and state.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
} : undefined;
Animate.defaultProps = {
  show: true
};
/* harmony default export */ __webpack_exports__["default"] = (Animate);

/***/ }),

/***/ "./node_modules/react-move/es/Animate/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-move/es/Animate/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animate */ "./node_modules/react-move/es/Animate/Animate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Animate__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/react-move/es/Node/Node.js":
/*!*************************************************!*\
  !*** ./node_modules/react-move/es/Node/Node.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i]; // eslint-disable-line no-param-reassign
  }

  return obj;
}

function Node(key, data, type) {
  this.key = key;
  this.data = data;
  this.type = type;
  this.state = {};
}

extend(Node.prototype, {
  setState: function setState(state) {
    var s = this.state;
    extend(s, typeof state === 'function' ? state(s) : state);
  },
  updateData: function updateData(data) {
    this.data = data;
    return this;
  },
  updateType: function updateType(type) {
    this.type = type;
    return this;
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Node);

/***/ }),

/***/ "./node_modules/react-move/es/Node/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-move/es/Node/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Node */ "./node_modules/react-move/es/Node/Node.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Node__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/react-move/es/NodeGroup/NodeGroup.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-move/es/NodeGroup/NodeGroup.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/interval.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Node */ "./node_modules/react-move/es/Node/index.js");
/* harmony import */ var _core_mergeKeys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/mergeKeys */ "./node_modules/react-move/es/core/mergeKeys.js");
/* harmony import */ var _core_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/types */ "./node_modules/react-move/es/core/types.js");
/* harmony import */ var _core_transition__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/transition */ "./node_modules/react-move/es/core/transition/index.js");
















var NodeGroup =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NodeGroup, _Component);

  function NodeGroup() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NodeGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NodeGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "state", {
      nodeKeys: [],
      nodeHash: {},
      nodes: [],
      data: null
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "animate", function () {
      var _this$state = _this.state,
          nodeKeys = _this$state.nodeKeys,
          nodeHash = _this$state.nodeHash;

      if (_this.unmounting) {
        return;
      }

      var pending = false;
      var nextNodeKeys = [];
      var length = nodeKeys.length;

      for (var i = 0; i < length; i++) {
        var k = nodeKeys[i];
        var n = nodeHash[k];

        if (n.TRANSITION_SCHEDULES) {
          pending = true;
        }

        if (n.type === _core_types__WEBPACK_IMPORTED_MODULE_13__["LEAVE"] && !n.TRANSITION_SCHEDULES) {
          delete nodeHash[k];
        } else {
          nextNodeKeys.push(k);
        }
      }

      if (!pending) {
        _this.interval.stop();
      }

      _this.setState(function () {
        return {
          nodeKeys: nextNodeKeys,
          nodes: nextNodeKeys.map(function (key) {
            return nodeHash[key];
          })
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "interval", null);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "unmounting", false);

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NodeGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startInterval();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.data !== this.props.data && !this.unmounting) {
        this.startInterval();
      }
    }
  }, {
    key: "startInterval",
    value: function startInterval() {
      if (!this.interval) {
        this.interval = Object(d3_timer__WEBPACK_IMPORTED_MODULE_10__["default"])(this.animate);
      } else {
        this.interval.restart(this.animate);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$state2 = this.state,
          nodeKeys = _this$state2.nodeKeys,
          nodeHash = _this$state2.nodeHash;
      this.unmounting = true;

      if (this.interval) {
        this.interval.stop();
      }

      nodeKeys.forEach(function (key) {
        _core_transition__WEBPACK_IMPORTED_MODULE_14__["stop"].call(nodeHash[key]);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var renderedChildren = this.props.children(this.state.nodes);
      return renderedChildren && react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.only(renderedChildren);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.data !== prevState.data) {
        var data = nextProps.data,
            keyAccessor = nextProps.keyAccessor,
            start = nextProps.start,
            enter = nextProps.enter,
            update = nextProps.update,
            leave = nextProps.leave;
        var nodeKeys = prevState.nodeKeys,
            nodeHash = prevState.nodeHash;
        var keyIndex = {};

        for (var i = 0; i < nodeKeys.length; i++) {
          keyIndex[nodeKeys[i]] = i;
        }

        var nextKeyIndex = {};
        var nextNodeKeys = [];

        for (var _i = 0; _i < data.length; _i++) {
          var d = data[_i];
          var k = keyAccessor(d, _i);
          nextKeyIndex[k] = _i;
          nextNodeKeys.push(k);

          if (keyIndex[k] === undefined) {
            nodeHash[k] = new _Node__WEBPACK_IMPORTED_MODULE_11__["default"](k, d, _core_types__WEBPACK_IMPORTED_MODULE_13__["ENTER"]);
          }
        }

        for (var _i2 = 0; _i2 < nodeKeys.length; _i2++) {
          var _k = nodeKeys[_i2];
          var n = nodeHash[_k];

          if (nextKeyIndex[_k] !== undefined) {
            n.updateData(data[nextKeyIndex[_k]]);
            n.updateType(_core_types__WEBPACK_IMPORTED_MODULE_13__["UPDATE"]);
          } else {
            n.updateType(_core_types__WEBPACK_IMPORTED_MODULE_13__["LEAVE"]);
          }
        }

        var mergedNodeKeys = Object(_core_mergeKeys__WEBPACK_IMPORTED_MODULE_12__["default"])(nodeKeys, keyIndex, nextNodeKeys, nextKeyIndex);

        for (var _i3 = 0; _i3 < mergedNodeKeys.length; _i3++) {
          var _k2 = mergedNodeKeys[_i3];
          var _n = nodeHash[_k2];
          var _d = _n.data;

          if (_n.type === _core_types__WEBPACK_IMPORTED_MODULE_13__["ENTER"]) {
            _n.setState(start(_d, nextKeyIndex[_k2]));

            _core_transition__WEBPACK_IMPORTED_MODULE_14__["transition"].call(_n, enter(_d, nextKeyIndex[_k2]));
          } else if (_n.type === _core_types__WEBPACK_IMPORTED_MODULE_13__["LEAVE"]) {
            _core_transition__WEBPACK_IMPORTED_MODULE_14__["transition"].call(_n, leave(_d, keyIndex[_k2]));
          } else {
            _core_transition__WEBPACK_IMPORTED_MODULE_14__["transition"].call(_n, update(_d, nextKeyIndex[_k2]));
          }
        }

        return {
          data: data,
          nodes: mergedNodeKeys.map(function (key) {
            return nodeHash[key];
          }),
          nodeHash: nodeHash,
          nodeKeys: mergedNodeKeys
        };
      }

      return null;
    }
  }]);

  return NodeGroup;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

NodeGroup.propTypes =  true ? {
  /**
   * An array.  The data prop is treated as immutable so the nodes will only update if prev.data !== next.data.
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array.isRequired,

  /**
   * Function that returns a string key given the data and its index.  Used to track which nodes are entering, updating and leaving.
   */
  keyAccessor: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,

  /**
   * A function that returns the starting state.  The function is passed the data and index and must return an object.
   */
  start: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,

  /**
   * A function that **returns an object or array of objects** describing how the state should transform on enter.  The function is passed the data and index.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,

  /**
   * A function that **returns an object or array of objects** describing how the state should transform on update.  The function is passed the data and index.
   */
  update: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,

  /**
   * A function that **returns an object or array of objects** describing how the state should transform on leave.  The function is passed the data and index.
   */
  leave: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,

  /**
   * A function that renders the nodes. It should accept an array of nodes as its only argument.  Each node is an object with the key, data, state and a type of 'ENTER', 'UPDATE' or 'LEAVE'.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
} : undefined;
NodeGroup.defaultProps = {
  enter: function enter() {},
  update: function update() {},
  leave: function leave() {}
};
Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__["polyfill"])(NodeGroup);
/* harmony default export */ __webpack_exports__["default"] = (NodeGroup);

/***/ }),

/***/ "./node_modules/react-move/es/NodeGroup/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-move/es/NodeGroup/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NodeGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeGroup */ "./node_modules/react-move/es/NodeGroup/NodeGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _NodeGroup__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/react-move/es/core/mergeKeys.js":
/*!******************************************************!*\
  !*** ./node_modules/react-move/es/core/mergeKeys.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* based on react-motion's mergeDiff (https://github.com/chenglou/react-motion) */
function mergeKeys(currNodeKeys, currKeyIndex, nextNodeKeys, nextKeyIndex) {
  var allKeys = [];

  for (var i = 0; i < nextNodeKeys.length; i++) {
    allKeys[i] = nextNodeKeys[i];
  }

  for (var _i = 0; _i < currNodeKeys.length; _i++) {
    if (nextKeyIndex[currNodeKeys[_i]] === undefined) {
      allKeys.push(currNodeKeys[_i]);
    }
  }

  return allKeys.sort(function (a, b) {
    var nextOrderA = nextKeyIndex[a];
    var nextOrderB = nextKeyIndex[b];
    var currOrderA = currKeyIndex[a];
    var currOrderB = currKeyIndex[b];

    if (nextOrderA != null && nextOrderB != null) {
      return nextKeyIndex[a] - nextKeyIndex[b];
    } else if (currOrderA != null && currOrderB != null) {
      return currKeyIndex[a] - currKeyIndex[b];
    } else if (nextOrderA != null) {
      for (var _i2 = 0; _i2 < nextNodeKeys.length; _i2++) {
        var pivot = nextNodeKeys[_i2];

        if (!currKeyIndex[pivot]) {
          continue;
        }

        if (nextOrderA < nextKeyIndex[pivot] && currOrderB > currKeyIndex[pivot]) {
          return -1;
        } else if (nextOrderA > nextKeyIndex[pivot] && currOrderB < currKeyIndex[pivot]) {
          return 1;
        }
      }

      return 1;
    }

    for (var _i3 = 0; _i3 < nextNodeKeys.length; _i3++) {
      var _pivot = nextNodeKeys[_i3];

      if (!currKeyIndex[_pivot]) {
        continue;
      }

      if (nextOrderB < nextKeyIndex[_pivot] && currOrderA > currKeyIndex[_pivot]) {
        return 1;
      } else if (nextOrderB > nextKeyIndex[_pivot] && currOrderA < currKeyIndex[_pivot]) {
        return -1;
      }
    }

    return -1;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (mergeKeys);

/***/ }),

/***/ "./node_modules/react-move/es/core/transition/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-move/es/core/transition/index.js ***!
  \*************************************************************/
/*! exports provided: transition, stop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transition */ "./node_modules/react-move/es/core/transition/transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return _transition__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _stop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stop */ "./node_modules/react-move/es/core/transition/stop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return _stop__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./node_modules/react-move/es/core/transition/schedule.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-move/es/core/transition/schedule.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timer.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timeout.js");

// Apapted from https://github.com/d3/d3-transition/blob/master/src/transition/schedule.js

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;
/* harmony default export */ __webpack_exports__["default"] = (function (node, stateKey, id, timing, tweens) {
  var events = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var schedules = node.TRANSITION_SCHEDULES;

  if (!schedules) {
    node.TRANSITION_SCHEDULES = {}; // eslint-disable-line no-param-reassign
  } else if (id in schedules) {
    return;
  }

  var config = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    stateKey: stateKey,
    events: events,
    tweens: tweens
  }, timing, {
    timer: null,
    state: CREATED
  });

  create(node, id, config);
});

function create(node, id, config) {
  var schedules = node.TRANSITION_SCHEDULES; // Initialize the transition timer when the transition is created.
  // Note the actual delay is not known until the first callback!

  var transition = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, config);

  var n = transition.tweens.length;
  var tweens = new Array(n);
  schedules[id] = transition;
  transition.timer = Object(d3_timer__WEBPACK_IMPORTED_MODULE_1__["timer"])(schedule, 0, transition.time);

  function schedule(elapsed) {
    transition.state = SCHEDULED;
    transition.timer.restart(start, transition.delay, transition.time); // If the elapsed delay is less than our first sleep, start immediately.

    if (transition.delay <= elapsed) {
      start(elapsed - transition.delay);
    }
  }

  function start(elapsed) {
    // eslint-disable-line consistent-return
    // If the state is not SCHEDULED, then we previously errored on start.
    if (transition.state !== SCHEDULED) return stop();

    for (var sid in schedules) {
      // eslint-disable-line
      var s = schedules[sid];

      if (s.stateKey !== transition.stateKey) {
        continue; // eslint-disable-line no-continue
      } // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!


      if (s.state === STARTED) return Object(d3_timer__WEBPACK_IMPORTED_MODULE_2__["default"])(start); // 1. Interrupt the active transition, if any. dispatch the interrupt event.
      // 2. Cancel any pre-empted transitions. No interrupt event is dispatched
      // because the cancelled transitions never started. Note that this also
      // removes this transition from the pending list!

      if (s.state === RUNNING) {
        s.state = ENDED;
        s.timer.stop();

        if (s.events.interrupt && typeof s.events.interrupt === 'function') {
          s.events.interrupt.call(this);
        }

        delete schedules[sid];
      } else if (+sid < id) {
        s.state = ENDED;
        s.timer.stop();
        delete schedules[sid];
      }
    } // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.


    Object(d3_timer__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
      if (transition.state === STARTED) {
        transition.state = RUNNING;
        transition.timer.restart(tick, transition.delay, transition.time);
        tick(elapsed);
      }
    });
    transition.state = STARTING;

    if (transition.events.start && typeof transition.events.start === 'function') {
      transition.events.start.call(node);
    }

    if (transition.state !== STARTING) {
      // interrupted
      return; // eslint-disable-line consistent-return
    }

    transition.state = STARTED; // Initialize the tween, deleting null tween.

    var j = -1;

    for (var i = 0; i < n; ++i) {
      var res = transition.tweens[i].call(node);

      if (res) {
        tweens[++j] = res;
      }
    }

    tweens.length = j + 1;
  }

  function tick(elapsed) {
    var t = 1;

    if (elapsed < transition.duration) {
      t = transition.ease.call(null, elapsed / transition.duration);
    } else {
      transition.timer.restart(stop);
      transition.state = ENDING;
    }

    var i = -1;

    while (++i < tweens.length) {
      tweens[i].call(null, t);
    }

    if (transition.state === ENDING) {
      if (transition.events.end && typeof transition.events.end === 'function') {
        transition.events.end.call(node);
      }

      stop();
    }
  }

  function stop() {
    transition.state = ENDED;
    transition.timer.stop();
    delete schedules[id];

    for (var i in schedules) {
      return;
    } // eslint-disable-line guard-for-in, no-restricted-syntax


    delete node.TRANSITION_SCHEDULES; // eslint-disable-line no-param-reassign
  }
}

/***/ }),

/***/ "./node_modules/react-move/es/core/transition/stop.js":
/*!************************************************************!*\
  !*** ./node_modules/react-move/es/core/transition/stop.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stop; });
function stop() {
  var ts = this.TRANSITION_SCHEDULES;

  if (ts) {
    Object.keys(ts).forEach(function (s) {
      ts[s].timer.stop();
    });
  }
}

/***/ }),

/***/ "./node_modules/react-move/es/core/transition/transition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-move/es/core/transition/transition.js ***!
  \******************************************************************/
/*! exports provided: newId, preset, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newId", function() { return newId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preset", function() { return preset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transition; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timer.js");
/* harmony import */ var _tween__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tween */ "./node_modules/react-move/es/core/transition/tween.js");
/* harmony import */ var _schedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedule */ "./node_modules/react-move/es/core/transition/schedule.js");







function once(func) {
  var called = false;
  return function transitionEvent() {
    if (!called) {
      called = true;
      func.call(this);
    }
  };
}

var id = 0;
function newId() {
  return ++id;
} // from https://github.com/d3/d3-ease/blob/master/src/linear.js

function linear(t) {
  return +t;
}

var preset = {
  time: null,
  delay: 0,
  duration: 250,
  ease: linear
};

function scheduleTransitions() {
  var _this = this;

  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var transitions = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, config);

  var events = transitions.events || {};
  delete transitions.events; // each event handler should be called only once

  Object.keys(events).forEach(function (d) {
    if (typeof events[d] !== 'function') {
      throw new Error('Event handlers must be a function');
    } else {
      events[d] = once(events[d]);
    }
  });
  var timing = transitions.timing || {};
  delete transitions.timing;
  Object.keys(transitions).forEach(function (stateKey) {
    var tweens = [];

    if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(transitions[stateKey]) === 'object' && Array.isArray(transitions[stateKey]) === false) {
      Object.keys(transitions[stateKey]).forEach(function (attr) {
        var val = transitions[stateKey][attr];

        if (Array.isArray(val)) {
          if (val.length === 1) {
            tweens.push(_tween__WEBPACK_IMPORTED_MODULE_4__["default"].call(_this, stateKey, attr, val[0]));
          } else {
            _this.setState(function (state) {
              return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, stateKey, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state[stateKey], Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attr, val[0])));
            });

            tweens.push(_tween__WEBPACK_IMPORTED_MODULE_4__["default"].call(_this, stateKey, attr, val[1]));
          }
        } else if (typeof val === 'function') {
          var getResonanceCustomTween = function getResonanceCustomTween() {
            var resonanceCustomTween = function resonanceCustomTween(t) {
              _this.setState(function (state) {
                return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, stateKey, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state[stateKey], Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attr, val(t))));
              });
            };

            return resonanceCustomTween;
          };

          tweens.push(getResonanceCustomTween);
        } else {
          _this.setState(function (state) {
            return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, stateKey, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state[stateKey], Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, attr, val)));
          }); // This assures any existing transitions are stopped


          tweens.push(_tween__WEBPACK_IMPORTED_MODULE_4__["default"].call(_this, stateKey, attr, val));
        }
      });
    } else {
      var val = transitions[stateKey];

      if (Array.isArray(val)) {
        if (val.length === 1) {
          tweens.push(_tween__WEBPACK_IMPORTED_MODULE_4__["default"].call(_this, null, stateKey, val[0]));
        } else {
          _this.setState(function () {
            return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, stateKey, val[0]);
          });

          tweens.push(_tween__WEBPACK_IMPORTED_MODULE_4__["default"].call(_this, null, stateKey, val[1]));
        }
      } else if (typeof val === 'function') {
        var getResonanceCustomTween = function getResonanceCustomTween() {
          var resonanceCustomTween = function resonanceCustomTween(t) {
            _this.setState(function () {
              return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, stateKey, val(t));
            });
          };

          return resonanceCustomTween;
        };

        tweens.push(getResonanceCustomTween);
      } else {
        _this.setState(function () {
          return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, stateKey, val);
        }); // This assures any existing transitions are stopped


        tweens.push(_tween__WEBPACK_IMPORTED_MODULE_4__["default"].call(_this, null, stateKey, val));
      }
    }

    var timingConfig = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, preset, timing, {
      time: Object(d3_timer__WEBPACK_IMPORTED_MODULE_3__["now"])()
    });

    Object(_schedule__WEBPACK_IMPORTED_MODULE_5__["default"])(_this, stateKey, newId(), timingConfig, tweens, events);
  });
}

function transition(config) {
  var _this2 = this;

  if (Array.isArray(config)) {
    config.forEach(function (c) {
      scheduleTransitions.call(_this2, c);
    });
  } else {
    scheduleTransitions.call(this, config);
  }
}

/***/ }),

/***/ "./node_modules/react-move/es/core/transition/tween.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-move/es/core/transition/tween.js ***!
  \*************************************************************/
/*! exports provided: getInterpolator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInterpolator", function() { return getInterpolator; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/value.js");



function getInterpolator(attr) {
  if (attr === 'transform') {
    return d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["interpolateTransformSvg"];
  }

  return d3_interpolate__WEBPACK_IMPORTED_MODULE_3__["default"];
}

function getTween(nameSpace, attr, value1) {
  return function tween() {
    var _this = this;

    var value0 = nameSpace ? this.state[nameSpace][attr] : this.state[attr];

    if (value0 === value1) {
      return null;
    }

    var i = getInterpolator(attr)(value0, value1);
    var stateTween;

    if (nameSpace === null) {
      stateTween = function stateTween(t) {
        _this.setState(function () {
          return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attr, i(t));
        });
      };
    } else {
      stateTween = function stateTween(t) {
        _this.setState(function (state) {
          return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, nameSpace, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state[nameSpace], Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, attr, i(t))));
        });
      };
    }

    return stateTween;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function (nameSpace, attr, value) {
  return getTween.call(this, nameSpace, attr, value);
});

/***/ }),

/***/ "./node_modules/react-move/es/core/types.js":
/*!**************************************************!*\
  !*** ./node_modules/react-move/es/core/types.js ***!
  \**************************************************/
/*! exports provided: ENTER, UPDATE, LEAVE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEAVE", function() { return LEAVE; });
var ENTER = 'ENTER';
var UPDATE = 'UPDATE';
var LEAVE = 'LEAVE';

/***/ }),

/***/ "./node_modules/react-move/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/react-move/es/index.js ***!
  \*********************************************/
/*! exports provided: Animate, NodeGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animate */ "./node_modules/react-move/es/Animate/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animate", function() { return _Animate__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _NodeGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeGroup */ "./node_modules/react-move/es/NodeGroup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NodeGroup", function() { return _NodeGroup__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./node_modules/reduce-css-calc/index.js":
/*!***********************************************!*\
  !*** ./node_modules/reduce-css-calc/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */
var balanced = __webpack_require__(/*! balanced-match */ "./node_modules/reduce-css-calc/node_modules/balanced-match/index.js")
var reduceFunctionCall = __webpack_require__(/*! reduce-function-call */ "./node_modules/reduce-function-call/index.js")
var mexp = __webpack_require__(/*! math-expression-evaluator */ "./node_modules/math-expression-evaluator/src/formula_evaluator.js")

/**
 * Constantes
 */
var MAX_STACK = 100 // should be enough for a single calc()...
var NESTED_CALC_RE = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g

/**
 * Global variables
 */
var stack

/**
 * Expose reduceCSSCalc plugin
 *
 * @type {Function}
 */
module.exports = reduceCSSCalc

/**
 * Reduce CSS calc() in a string, whenever it's possible
 *
 * @param {String} value css input
 */
function reduceCSSCalc(value, decimalPrecision) {
  stack = 0
  decimalPrecision = Math.pow(10, decimalPrecision === undefined ? 5 : decimalPrecision)

  // Allow calc() on multiple lines
  value = value.replace(/\n+/g, " ")

  /**
   * Evaluates an expression
   *
   * @param {String} expression
   * @returns {String}
   */
  function evaluateExpression (expression, functionIdentifier, call) {
    if (stack++ > MAX_STACK) {
      stack = 0
      throw new Error("Call stack overflow for " + call)
    }

    if (expression === "") {
      throw new Error(functionIdentifier + "(): '" + call + "' must contain a non-whitespace string")
    }

    expression = evaluateNestedExpression(expression, call)

    var units = getUnitsInExpression(expression)

    // If the expression contains multiple units or CSS variables,
    // then let the expression be (i.e. browser calc())
    if (units.length > 1 || expression.indexOf("var(") > -1) {
      return functionIdentifier + "(" + expression + ")"
    }

    var unit = units[0] || ""

    if (unit === "%") {
      // Convert percentages to numbers, to handle expressions like: 50% * 50% (will become: 25%):
      // console.log(expression)
      expression = expression.replace(/\b[0-9\.]+%/g, function(percent) {
        return parseFloat(percent.slice(0, -1)) * 0.01
      })
    }

    // Remove units in expression:
    var toEvaluate = expression.replace(new RegExp(unit, "gi"), "")
    var result

    try {
      result = mexp.eval(toEvaluate)
    }
    catch (e) {
      return functionIdentifier + "(" + expression + ")"
    }

    // Transform back to a percentage result:
    if (unit === "%") {
      result *= 100
    }

    // adjust rounding shit
    // (0.1 * 0.2 === 0.020000000000000004)
    if (functionIdentifier.length || unit === "%") {
      result = Math.round(result * decimalPrecision) / decimalPrecision
    }

    // Add unit
    result += unit

    return result
  }

  /**
   * Evaluates nested expressions
   *
   * @param {String} expression
   * @returns {String}
   */
  function evaluateNestedExpression(expression, call) {
    // Remove the calc part from nested expressions to ensure
    // better browser compatibility
    expression = expression.replace(/((?:\-[a-z]+\-)?calc)/g, "")
    var evaluatedPart = ""
    var nonEvaluatedPart = expression
    var matches
    while ((matches = NESTED_CALC_RE.exec(nonEvaluatedPart))) {
      if (matches[0].index > 0) {
        evaluatedPart += nonEvaluatedPart.substring(0, matches[0].index)
      }

      var balancedExpr = balanced("(", ")", nonEvaluatedPart.substring([0].index))
      if (balancedExpr.body === "") {
        throw new Error("'" + expression + "' must contain a non-whitespace string")
      }

      var evaluated = evaluateExpression(balancedExpr.body, "", call)

      evaluatedPart += balancedExpr.pre + evaluated
      nonEvaluatedPart = balancedExpr.post
    }

    return evaluatedPart + nonEvaluatedPart
  }

  return reduceFunctionCall(value, /((?:\-[a-z]+\-)?calc)\(/, evaluateExpression)
}

/**
 * Checks what units are used in an expression
 *
 * @param {String} expression
 * @returns {Array}
 */

function getUnitsInExpression(expression) {
  var uniqueUnits = []
  var uniqueLowerCaseUnits = []
  var unitRegEx = /[\.0-9]([%a-z]+)/gi
  var matches = unitRegEx.exec(expression)

  while (matches) {
    if (!matches || !matches[1]) {
      continue
    }

    if (uniqueLowerCaseUnits.indexOf(matches[1].toLowerCase()) === -1) {
      uniqueUnits.push(matches[1])
      uniqueLowerCaseUnits.push(matches[1].toLowerCase())
    }

    matches = unitRegEx.exec(expression)
  }

  return uniqueUnits
}


/***/ }),

/***/ "./node_modules/reduce-css-calc/node_modules/balanced-match/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/reduce-css-calc/node_modules/balanced-match/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ "./node_modules/reduce-function-call/index.js":
/*!****************************************************!*\
  !*** ./node_modules/reduce-function-call/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Module dependencies
 */
var balanced = __webpack_require__(/*! balanced-match */ "./node_modules/balanced-match/index.js")

/**
 * Expose `reduceFunctionCall`
 *
 * @type {Function}
 */
module.exports = reduceFunctionCall

/**
 * Walkthrough all expressions, evaluate them and insert them into the declaration
 *
 * @param {Array} expressions
 * @param {Object} declaration
 */

function reduceFunctionCall(string, functionRE, callback) {
  var call = string
  return getFunctionCalls(string, functionRE).reduce(function(string, obj) {
    return string.replace(obj.functionIdentifier + "(" + obj.matches.body + ")", evalFunctionCall(obj.matches.body, obj.functionIdentifier, callback, call, functionRE))
  }, string)
}

/**
 * Parses expressions in a value
 *
 * @param {String} value
 * @returns {Array}
 * @api private
 */

function getFunctionCalls(call, functionRE) {
  var expressions = []

  var fnRE = typeof functionRE === "string" ? new RegExp("\\b(" + functionRE + ")\\(") : functionRE
  do {
    var searchMatch = fnRE.exec(call)
    if (!searchMatch) {
      return expressions
    }
    if (searchMatch[1] === undefined) {
      throw new Error("Missing the first couple of parenthesis to get the function identifier in " + functionRE)
    }
    var fn = searchMatch[1]
    var startIndex = searchMatch.index
    var matches = balanced("(", ")", call.substring(startIndex))

    if (!matches || matches.start !== searchMatch[0].length - 1) {
      throw new SyntaxError(fn + "(): missing closing ')' in the value '" + call + "'")
    }

    expressions.push({matches: matches, functionIdentifier: fn})
    call = matches.post
  }
  while (fnRE.test(call))

  return expressions
}

/**
 * Evaluates an expression
 *
 * @param {String} expression
 * @returns {String}
 * @api private
 */

function evalFunctionCall (string, functionIdentifier, callback, call, functionRE) {
  // allow recursivity
  return callback(reduceFunctionCall(string, functionRE, callback), functionIdentifier, call)
}


/***/ })

}]);
//# sourceMappingURL=13.9ed865ea.chunk.js.map