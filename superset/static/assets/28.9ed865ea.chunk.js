(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/HorizonChart.css":
/*!************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/HorizonChart.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../css-loader??ref--7-1!./HorizonChart.css */ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/HorizonChart.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/HorizonChart.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/HorizonChart.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/extent.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/utils/ensureIsArray.js");
/* harmony import */ var _HorizonRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HorizonRow */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/HorizonRow.js");
/* harmony import */ var _HorizonChart_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HorizonChart.css */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/HorizonChart.css");
/* harmony import */ var _HorizonChart_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_HorizonChart_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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

/* eslint-disable react/jsx-sort-default-props, react/sort-prop-types */







const propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  seriesHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
    values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      y: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
    }))
  })).isRequired,
  // number of bands in each direction (positive / negative)
  bands: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  colors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
  colorScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  offsetX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
const defaultProps = {
  className: '',
  width: 800,
  height: 600,
  seriesHeight: 20,
  bands: Math.floor(_HorizonRow__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_COLORS"].length / 2),
  colors: _HorizonRow__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_COLORS"],
  colorScale: 'series',
  mode: 'offset',
  offsetX: 0
};

class HorizonChart extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  render() {
    const {
      className,
      width,
      height,
      data,
      seriesHeight,
      bands,
      colors,
      colorScale,
      mode,
      offsetX
    } = this.props;
    let yDomain;

    if (colorScale === 'overall') {
      const allValues = data.reduce((acc, current) => acc.concat(current.values), []);
      yDomain = Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["default"])(allValues, d => d.y);
    }

    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
      className: `superset-legacy-chart-horizon ${className}`,
      style: {
        height
      }
    }, data.map(row => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_HorizonRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: row.key,
      width: width,
      height: seriesHeight,
      title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"])(row.key).join(', '),
      data: row.values,
      bands: bands,
      colors: colors,
      colorScale: colorScale,
      mode: mode,
      offsetX: offsetX,
      yDomain: yDomain
    })));
  }

}

HorizonChart.propTypes = propTypes;
HorizonChart.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (HorizonChart);

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/HorizonRow.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/HorizonRow.js ***!
  \*********************************************************************************/
/*! exports provided: DEFAULT_COLORS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_COLORS", function() { return DEFAULT_COLORS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/extent.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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

/* eslint-disable no-continue, no-bitwise */

/* eslint-disable react/jsx-sort-default-props */

/* eslint-disable react/sort-prop-types */





const DEFAULT_COLORS = ['#313695', '#4575b4', '#74add1', '#abd9e9', '#fee090', '#fdae61', '#f46d43', '#d73027'];
const propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    y: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })).isRequired,
  bands: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  colors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
  colorScale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  offsetX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  yDomain: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number)
};
const defaultProps = {
  className: '',
  width: 800,
  height: 20,
  bands: DEFAULT_COLORS.length >> 1,
  colors: DEFAULT_COLORS,
  colorScale: 'series',
  mode: 'offset',
  offsetX: 0,
  title: '',
  yDomain: undefined
};

class HorizonRow extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate() {
    this.drawChart();
  }

  componentWillUnmount() {
    this.canvas = null;
  }

  drawChart() {
    if (this.canvas) {
      const {
        data: rawData,
        yDomain,
        width,
        height,
        bands,
        colors,
        colorScale,
        offsetX,
        mode
      } = this.props;
      const data = colorScale === 'change' ? rawData.map(d => ({ ...d,
        y: d.y - rawData[0].y
      })) : rawData;
      const context = this.canvas.getContext('2d');
      context.imageSmoothingEnabled = false;
      context.clearRect(0, 0, width, height); // Reset transform

      context.setTransform(1, 0, 0, 1, 0, 0);
      context.translate(0.5, 0.5);
      const step = width / data.length; // the data frame currently being shown:

      const startIndex = Math.floor(Math.max(0, -(offsetX / step)));
      const endIndex = Math.floor(Math.min(data.length, startIndex + width / step)); // skip drawing if there's no data to be drawn

      if (startIndex > data.length) {
        return;
      } // Create y-scale


      const [min, max] = yDomain || Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["default"])(data, d => d.y);
      const y = Object(d3_scale__WEBPACK_IMPORTED_MODULE_3__["default"])().domain([0, Math.max(-min, max)]).range([0, height]); // we are drawing positive & negative bands separately to avoid mutating canvas state
      // http://www.html5rocks.com/en/tutorials/canvas/performance/

      let hasNegative = false; // draw positive bands

      let value;
      let bExtents;

      for (let b = 0; b < bands; b += 1) {
        context.fillStyle = colors[bands + b]; // Adjust the range based on the current band index.

        bExtents = (b + 1 - bands) * height;
        y.range([bands * height + bExtents, bExtents]); // only the current data frame is being drawn i.e. what's visible:

        for (let i = startIndex; i < endIndex; i += 1) {
          value = data[i].y;

          if (value <= 0) {
            hasNegative = true;
            continue;
          }

          if (value !== undefined) {
            context.fillRect(offsetX + i * step, y(value), step + 1, y(0) - y(value));
          }
        }
      } // draw negative bands


      if (hasNegative) {
        // mirror the negative bands, by flipping the canvas
        if (mode === 'offset') {
          context.translate(0, height);
          context.scale(1, -1);
        }

        for (let b = 0; b < bands; b += 1) {
          context.fillStyle = colors[bands - b - 1]; // Adjust the range based on the current band index.

          bExtents = (b + 1 - bands) * height;
          y.range([bands * height + bExtents, bExtents]); // only the current data frame is being drawn i.e. what's visible:

          for (let ii = startIndex; ii < endIndex; ii += 1) {
            value = data[ii].y;

            if (value >= 0) {
              continue;
            }

            context.fillRect(offsetX + ii * step, y(-value), step + 1, y(0) - y(-value));
          }
        }
      }
    }
  }

  render() {
    const {
      className,
      title,
      width,
      height
    } = this.props;
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
      className: `horizon-row ${className}`
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("span", {
      className: "title"
    }, title), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("canvas", {
      ref: c => {
        this.canvas = c;
      },
      width: width,
      height: height
    }));
  }

}

HorizonRow.propTypes = propTypes;
HorizonRow.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (HorizonRow);

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/ascending.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/ascending.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/bisect.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/bisect.js ***!
  \***************************************************************************************************/
/*! exports provided: bisectRight, bisectLeft, bisectCenter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectCenter", function() { return bisectCenter; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/ascending.js");
/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisector.js */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/bisector.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number.js */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/number.js");




const ascendingBisect = Object(_bisector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = Object(_bisector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_number_js__WEBPACK_IMPORTED_MODULE_2__["default"]).center;
/* harmony default export */ __webpack_exports__["default"] = (bisectRight);


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/bisector.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/bisector.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(f) {
  let delta = f;
  let compare = f;

  if (f.length === 1) {
    delta = (d, x) => f(d) - x;
    compare = ascendingComparator(f);
  }

  function left(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) < 0) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  function right(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) > 0) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }

  function center(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {left, center, right};
});

function ascendingComparator(f) {
  return (d, x) => Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(f(d), x);
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/extent.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/extent.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
});


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/number.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/number.js ***!
  \***************************************************************************************************/
/*! exports provided: default, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x === null ? NaN : +x;
});

function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/ticks.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/ticks.js ***!
  \**************************************************************************************************/
/*! exports provided: default, tickIncrement, tickStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    let r0 = Math.round(start / step), r1 = Math.round(stop / step);
    if (r0 * step < start) ++r0;
    if (r1 * step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) * step;
  } else {
    step = -step;
    let r0 = Math.round(start * step), r1 = Math.round(stop * step);
    if (r0 / step < start) ++r0;
    if (r1 / step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/constant.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/constant.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return constants; });
function constants(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/continuous.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/continuous.js ***!
  \*******************************************************************************************************/
/*! exports provided: identity, copy, transformer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return transformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return continuous; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/bisect.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/value.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/round.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant.js */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/constant.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./number.js */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/number.js");





var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(_constant_js__WEBPACK_IMPORTED_MODULE_4__["default"])(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
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
    var i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(domain, x, 1, j) - 1;
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
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"])))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_5__["default"]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_3__["default"], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
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

function continuous() {
  return transformer()(identity, identity);
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/init.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/init.js ***!
  \*************************************************************************************************/
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
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/linear.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/linear.js ***!
  \***************************************************************************************************/
/*! exports provided: linearish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearish", function() { return linearish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return linear; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/ticks.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/init.js");
/* harmony import */ var _tickFormat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickFormat.js */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/tickFormat.js");





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return Object(_tickFormat_js__WEBPACK_IMPORTED_MODULE_3__["default"])(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    
    while (maxIter-- > 0) {
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
      if (step === prestep) {
        d[i0] = start
        d[i1] = stop
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, linear());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return linearish(scale);
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/number.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/number.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return number; });
function number(x) {
  return +x;
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/tickFormat.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-scale/src/tickFormat.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tickFormat; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/@superset-ui/legacy-plugin-chart-horizon/node_modules/d3-array/src/ticks.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");



function tickFormat(start, stop, count, specifier) {
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
}


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/HorizonChart.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/HorizonChart.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-horizon {\n  overflow: auto;\n  position: relative;\n}\n\n.superset-legacy-chart-horizon .horizon-row {\n  border-bottom: solid 1px #ddd;\n  border-top: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\n.superset-legacy-chart-horizon .horizon-row span.title {\n  position: absolute;\n  color: #333;\n  font-size: 0.8em;\n  margin: 0;\n  text-shadow: 1px 1px rgba(255, 255, 255, 0.75);\n}\n", "", {"version":3,"sources":["G:/workspace/boke-pro/superset-all/superset/superset-frontend/node_modules/@superset-ui/legacy-plugin-chart-horizon/esm/HorizonChart.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;GAiBG;;AAEH;EACE,eAAe;EACf,mBAAmB;CACpB;;AAED;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,aAAa;EACb,YAAY;CACb;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,UAAU;EACV,+CAA+C;CAChD","file":"HorizonChart.css","sourcesContent":["/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-horizon {\n  overflow: auto;\n  position: relative;\n}\n\n.superset-legacy-chart-horizon .horizon-row {\n  border-bottom: solid 1px #ddd;\n  border-top: 0px;\n  padding: 0px;\n  margin: 0px;\n}\n\n.superset-legacy-chart-horizon .horizon-row span.title {\n  position: absolute;\n  color: #333;\n  font-size: 0.8em;\n  margin: 0;\n  text-shadow: 1px 1px rgba(255, 255, 255, 0.75);\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

}]);
//# sourceMappingURL=28.9ed865ea.chunk.js.map