(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/Heatmap.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/Heatmap.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../css-loader??ref--7-1!./Heatmap.css */ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/Heatmap.css");

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

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/Heatmap.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/Heatmap.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_svg_legend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-svg-legend */ "./node_modules/d3-svg-legend/index.js");
/* harmony import */ var d3_svg_legend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_svg_legend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_tip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-tip */ "./node_modules/d3-tip/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/number-format/NumberFormats.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/color/SequentialSchemeRegistrySingleton.js");
/* harmony import */ var _vendor_d3tip_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vendor/d3tip.css */ "./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/vendor/d3tip.css");
/* harmony import */ var _vendor_d3tip_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_vendor_d3tip_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Heatmap_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Heatmap.css */ "./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/Heatmap.css");
/* harmony import */ var _Heatmap_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Heatmap_css__WEBPACK_IMPORTED_MODULE_8__);
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

/* eslint-disable func-names, react/sort-prop-types */







const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    records: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      x: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      y: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      v: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
      perc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
      rank: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
    })),
    extents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number)
  }),
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  bottomMargin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  colorScheme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  columnX: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  columnY: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  leftMargin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  metric: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  normalized: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  numberFormat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  showLegend: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showPercentage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  sortXAxis: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  sortYAxis: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  xScaleInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  yScaleInterval: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  yAxisBounds: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number)
};

function cmp(a, b) {
  return a > b ? 1 : -1;
}

const DEFAULT_PROPERTIES = {
  minChartWidth: 150,
  minChartHeight: 150,
  marginLeft: 35,
  marginBottom: 35,
  marginTop: 10,
  marginRight: 10
}; // Inspired from http://bl.ocks.org/mbostock/3074470
// https://jsfiddle.net/cyril123/h0reyumq/

function Heatmap(element, props) {
  const {
    data,
    width,
    height,
    bottomMargin,
    canvasImageRendering,
    colorScheme,
    columnX,
    columnY,
    leftMargin,
    metric,
    normalized,
    numberFormat,
    showLegend,
    showPercentage,
    showValues,
    sortXAxis,
    sortYAxis,
    xScaleInterval,
    yScaleInterval,
    yAxisBounds
  } = props;
  const {
    records,
    extents
  } = data;
  const margin = {
    top: 10,
    right: 10,
    bottom: 35,
    left: 35
  };
  let showY = true;
  let showX = true;
  const pixelsPerCharX = 4.5; // approx, depends on font size

  const pixelsPerCharY = 6; // approx, depends on font size

  const valueFormatter = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["getNumberFormatter"])(numberFormat); // Dynamically adjusts  based on max x / y category lengths

  function adjustMargins() {
    let longestX = 1;
    let longestY = 1;
    records.forEach(datum => {
      longestX = Math.max(longestX, datum.x && datum.x.toString().length || 1);
      longestY = Math.max(longestY, datum.y && datum.y.toString().length || 1);
    });

    if (leftMargin === 'auto') {
      margin.left = Math.ceil(Math.max(margin.left, pixelsPerCharY * longestY));
    } else {
      margin.left = leftMargin;
    }

    if (showLegend) {
      margin.right += 40;
    }

    margin.bottom = bottomMargin === 'auto' ? Math.ceil(Math.max(margin.bottom, pixelsPerCharX * longestX)) : bottomMargin;
  } // Check if x axis "x" position is outside of the container and rotate labels 90deg


  function checkLabelPosition(container) {
    const xAxisNode = container.select('.x.axis').node();

    if (!xAxisNode) {
      return;
    }

    if (xAxisNode.getBoundingClientRect().x + 4 < container.node().getBoundingClientRect().x) {
      container.selectAll('.x.axis').selectAll('text').attr('transform', 'rotate(-90)').attr('x', -6).attr('y', 0).attr('dy', '0.3em');
    }
  }

  function ordScale(k, rangeBands, sortMethod) {
    let domain = {};
    const actualKeys = {}; // hack to preserve type of keys when number

    records.forEach(d => {
      domain[d[k]] = (domain[d[k]] || 0) + d.v;
      actualKeys[d[k]] = d[k];
    }); // Not usgin object.keys() as it converts to strings

    const keys = Object.keys(actualKeys).map(s => actualKeys[s]);

    if (sortMethod === 'alpha_asc') {
      domain = keys.sort(cmp);
    } else if (sortMethod === 'alpha_desc') {
      domain = keys.sort(cmp).reverse();
    } else if (sortMethod === 'value_desc') {
      domain = Object.keys(domain).sort((a, b) => domain[a] > domain[b] ? -1 : 1);
    } else if (sortMethod === 'value_asc') {
      domain = Object.keys(domain).sort((a, b) => domain[b] > domain[a] ? -1 : 1);
    }

    if (k === 'y' && rangeBands) {
      domain.reverse();
    }

    if (rangeBands) {
      return d3__WEBPACK_IMPORTED_MODULE_0___default.a.scale.ordinal().domain(domain).rangeBands(rangeBands);
    }

    return d3__WEBPACK_IMPORTED_MODULE_0___default.a.scale.ordinal().domain(domain).range(d3__WEBPACK_IMPORTED_MODULE_0___default.a.range(domain.length));
  } // eslint-disable-next-line no-param-reassign


  element.innerHTML = '';
  const matrix = {};
  adjustMargins();
  let hmWidth = width - (margin.left + margin.right);
  let hmHeight = height - (margin.bottom + margin.top);

  const hideYLabel = () => {
    margin.left = leftMargin === 'auto' ? DEFAULT_PROPERTIES.marginLeft : leftMargin;
    hmWidth = width - (margin.left + margin.right);
    showY = false;
  };

  const hideXLabel = () => {
    margin.bottom = bottomMargin === 'auto' ? DEFAULT_PROPERTIES.marginBottom : bottomMargin;
    hmHeight = height - (margin.bottom + margin.top);
    showX = false;
  }; // Hide Y Labels


  if (hmWidth < DEFAULT_PROPERTIES.minChartWidth) {
    hideYLabel();
  } // Hide X Labels


  if (hmHeight < DEFAULT_PROPERTIES.minChartHeight || hmWidth < DEFAULT_PROPERTIES.minChartWidth) {
    hideXLabel();
  }

  if (showY && hmHeight < DEFAULT_PROPERTIES.minChartHeight) {
    hideYLabel();
  }

  const fp = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["getNumberFormatter"])(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"].PERCENT);
  const xScale = ordScale('x', null, sortXAxis);
  const yScale = ordScale('y', null, sortYAxis);
  const xRbScale = ordScale('x', [0, hmWidth], sortXAxis);
  const yRbScale = ordScale('y', [hmHeight, 0], sortYAxis);
  const X = 0;
  const Y = 1;
  const heatmapDim = [xRbScale.domain().length, yRbScale.domain().length];
  const minBound = yAxisBounds[0] || 0;
  const maxBound = yAxisBounds[1] || 1;
  const colorScale = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"])().get(colorScheme).createLinearScale([minBound, maxBound]);
  const scale = [d3__WEBPACK_IMPORTED_MODULE_0___default.a.scale.linear().domain([0, heatmapDim[X]]).range([0, hmWidth]), d3__WEBPACK_IMPORTED_MODULE_0___default.a.scale.linear().domain([0, heatmapDim[Y]]).range([0, hmHeight])];
  const container = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(element);
  container.classed('superset-legacy-chart-heatmap', true);
  const canvas = container.append('canvas').attr('width', heatmapDim[X]).attr('height', heatmapDim[Y]).style('width', `${hmWidth}px`).style('height', `${hmHeight}px`).style('image-rendering', canvasImageRendering).style('left', `${margin.left}px`).style('top', `${margin.top}px`).style('position', 'absolute');
  const svg = container.append('svg').attr('width', width).attr('height', height).attr('class', 'heatmap-container').style('position', 'relative');

  if (showValues) {
    const cells = svg.selectAll('rect').data(records).enter().append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);
    cells.append('text').attr('transform', d => `translate(${xRbScale(d.x)}, ${yRbScale(d.y)})`).attr('y', yRbScale.rangeBand() / 2).attr('x', xRbScale.rangeBand() / 2).attr('text-anchor', 'middle').attr('dy', '.35em').text(d => valueFormatter(d.v)).attr('font-size', `${Math.min(yRbScale.rangeBand(), xRbScale.rangeBand()) / 3}px`).attr('fill', d => d.v >= extents[1] / 2 ? 'white' : 'black');
  }

  if (showLegend) {
    const colorLegend = d3__WEBPACK_IMPORTED_MODULE_0___default.a.legend.color().labelFormat(valueFormatter).scale(colorScale).shapePadding(0).cells(10).shapeWidth(10).shapeHeight(10).labelOffset(3);
    svg.append('g').attr('transform', `translate(${width - 40}, ${margin.top})`).call(colorLegend);
  }

  const tip = Object(d3_tip__WEBPACK_IMPORTED_MODULE_3__["default"])().attr('class', 'd3-tip').offset(function () {
    const k = d3__WEBPACK_IMPORTED_MODULE_0___default.a.mouse(this);
    const x = k[0] - hmWidth / 2;
    return [k[1] - 20, x];
  }).html(function () {
    let s = '';
    const k = d3__WEBPACK_IMPORTED_MODULE_0___default.a.mouse(this);
    const m = Math.floor(scale[0].invert(k[0]));
    const n = Math.floor(scale[1].invert(k[1]));
    const metricLabel = typeof metric === 'object' ? metric.label : metric;

    if (m in matrix && n in matrix[m]) {
      const obj = matrix[m][n];
      s += `<div><b>${columnX}: </b>${obj.x}<div>`;
      s += `<div><b>${columnY}: </b>${obj.y}<div>`;
      s += `<div><b>${metricLabel}: </b>${valueFormatter(obj.v)}<div>`;

      if (showPercentage) {
        s += `<div><b>%: </b>${fp(normalized ? obj.rank : obj.perc)}<div>`;
      }

      tip.style('display', null);
    } else {
      // this is a hack to hide the tooltip because we have map it to a single <rect>
      // d3-tip toggles opacity and calling hide here is undone by the lib after this call
      tip.style('display', 'none');
    }

    return s;
  });
  const rect = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`).append('rect').classed('background-rect', true).on('mousemove', tip.show).on('mouseout', tip.hide).attr('width', hmWidth).attr('height', hmHeight);
  rect.call(tip);

  if (showX) {
    const xAxis = d3__WEBPACK_IMPORTED_MODULE_0___default.a.svg.axis().scale(xRbScale).outerTickSize(0).tickValues(xRbScale.domain().filter((d, i) => !(i % xScaleInterval))).orient('bottom');
    svg.append('g').attr('class', 'x axis').attr('transform', `translate(${margin.left},${margin.top + hmHeight})`).call(xAxis).selectAll('text').attr('x', -4).attr('y', 10).attr('dy', '0.3em').style('text-anchor', 'end').attr('transform', 'rotate(-45)');
  }

  if (showY) {
    const yAxis = d3__WEBPACK_IMPORTED_MODULE_0___default.a.svg.axis().scale(yRbScale).outerTickSize(0).tickValues(yRbScale.domain().filter((d, i) => !(i % yScaleInterval))).orient('left');
    svg.append('g').attr('class', 'y axis').attr('transform', `translate(${margin.left},${margin.top})`).call(yAxis);
  }

  checkLabelPosition(container);
  const context = canvas.node().getContext('2d');
  context.imageSmoothingEnabled = false; // Compute the pixel colors; scaled by CSS.

  function createImageObj() {
    const imageObj = new Image();
    const image = context.createImageData(heatmapDim[0], heatmapDim[1]);
    const pixs = {};
    records.forEach(d => {
      const c = d3__WEBPACK_IMPORTED_MODULE_0___default.a.rgb(colorScale(normalized ? d.rank : d.perc));
      const x = xScale(d.x);
      const y = yScale(d.y);
      pixs[x + y * xScale.domain().length] = c;

      if (matrix[x] === undefined) {
        matrix[x] = {};
      }

      if (matrix[x][y] === undefined) {
        matrix[x][y] = d;
      }
    });
    let p = 0;

    for (let i = 0; i < heatmapDim[0] * heatmapDim[1]; i += 1) {
      let c = pixs[i];
      let alpha = 255;

      if (c === undefined) {
        c = d3__WEBPACK_IMPORTED_MODULE_0___default.a.rgb('#F00');
        alpha = 0;
      }

      image.data[p + 0] = c.r;
      image.data[p + 1] = c.g;
      image.data[p + 2] = c.b;
      image.data[p + 3] = alpha;
      p += 4;
    }

    context.putImageData(image, 0, 0);
    imageObj.src = canvas.node().toDataURL();
  }

  createImageObj();
}

Heatmap.displayName = 'Heatmap';
Heatmap.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Heatmap);

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/ReactHeatmap.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/ReactHeatmap.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/chart/components/reactify.js");
/* harmony import */ var _Heatmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heatmap */ "./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/Heatmap.js");
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


/* harmony default export */ __webpack_exports__["default"] = (Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(_Heatmap__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/vendor/d3tip.css":
/*!************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/vendor/d3tip.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../css-loader??ref--7-1!./d3tip.css */ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/vendor/d3tip.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/Heatmap.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/Heatmap.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-heatmap {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 100%;\n}\n\n.superset-legacy-chart-heatmap .axis text {\n  font: 10px sans-serif;\n  text-rendering: optimizeLegibility;\n  fill: #555;\n}\n\n.superset-legacy-chart-heatmap .background-rect {\n  stroke: #ddd;\n  fill-opacity: 0;\n  pointer-events: all;\n}\n\n.superset-legacy-chart-heatmap .axis path,\n.superset-legacy-chart-heatmap .axis line {\n  fill: none;\n  stroke: #ddd;\n  shape-rendering: crispEdges;\n}\n\n.superset-legacy-chart-heatmap canvas,\n.superset-legacy-chart-heatmap img {\n  image-rendering: optimizeSpeed; /* Older versions of FF          */\n  image-rendering: -moz-crisp-edges; /* FF 6.0+                       */\n  image-rendering: -webkit-optimize-contrast; /* Safari                        */\n  image-rendering: -o-crisp-edges; /* OS X & Windows Opera (12.02+) */\n  image-rendering: pixelated; /* Awesome future-browsers       */\n  -ms-interpolation-mode: nearest-neighbor; /* IE                            */\n}\n\n.superset-legacy-chart-heatmap .legendCells text {\n  font-size: 10px;\n  font-weight: normal;\n  opacity: 0;\n}\n\n.superset-legacy-chart-heatmap .legendCells .cell:first-child text {\n  opacity: 1;\n}\n.superset-legacy-chart-heatmap .legendCells .cell:last-child text {\n  opacity: 1;\n}\n\n.dashboard .superset-legacy-chart-heatmap .axis text {\n  font-size: 10px;\n  opacity: 0.75;\n}\n", "", {"version":3,"sources":["G:/workspace/boke-pro/superset-all/superset/superset-frontend/node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/Heatmap.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;GAiBG;;AAEH;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,aAAa;CACd;;AAED;EACE,sBAAsB;EACtB,mCAAmC;EACnC,WAAW;CACZ;;AAED;EACE,aAAa;EACb,gBAAgB;EAChB,oBAAoB;CACrB;;AAED;;EAEE,WAAW;EACX,aAAa;EACb,4BAA4B;CAC7B;;AAED;;EAEE,+BAA+B,CAAC,mCAAmC;EACnE,kCAAkC,CAAC,mCAAmC;EACtE,2CAA2C,CAAC,mCAAmC;EAC/E,gCAAgC,CAAC,mCAAmC;EACpE,2BAA2B,CAAC,mCAAmC;EAC/D,yCAAyC,CAAC,mCAAmC;CAC9E;;AAED;EACE,gBAAgB;EAChB,oBAAoB;EACpB,WAAW;CACZ;;AAED;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;;AAED;EACE,gBAAgB;EAChB,cAAc;CACf","file":"Heatmap.css","sourcesContent":["/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-heatmap {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 100%;\n}\n\n.superset-legacy-chart-heatmap .axis text {\n  font: 10px sans-serif;\n  text-rendering: optimizeLegibility;\n  fill: #555;\n}\n\n.superset-legacy-chart-heatmap .background-rect {\n  stroke: #ddd;\n  fill-opacity: 0;\n  pointer-events: all;\n}\n\n.superset-legacy-chart-heatmap .axis path,\n.superset-legacy-chart-heatmap .axis line {\n  fill: none;\n  stroke: #ddd;\n  shape-rendering: crispEdges;\n}\n\n.superset-legacy-chart-heatmap canvas,\n.superset-legacy-chart-heatmap img {\n  image-rendering: optimizeSpeed; /* Older versions of FF          */\n  image-rendering: -moz-crisp-edges; /* FF 6.0+                       */\n  image-rendering: -webkit-optimize-contrast; /* Safari                        */\n  image-rendering: -o-crisp-edges; /* OS X & Windows Opera (12.02+) */\n  image-rendering: pixelated; /* Awesome future-browsers       */\n  -ms-interpolation-mode: nearest-neighbor; /* IE                            */\n}\n\n.superset-legacy-chart-heatmap .legendCells text {\n  font-size: 10px;\n  font-weight: normal;\n  opacity: 0;\n}\n\n.superset-legacy-chart-heatmap .legendCells .cell:first-child text {\n  opacity: 1;\n}\n.superset-legacy-chart-heatmap .legendCells .cell:last-child text {\n  opacity: 1;\n}\n\n.dashboard .superset-legacy-chart-heatmap .axis text {\n  font-size: 10px;\n  opacity: 0.75;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/vendor/d3tip.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/vendor/d3tip.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n/* from d3-tip */\n.d3-tip {\n  line-height: 1;\n  padding: 12px;\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  border-radius: 2px;\n  pointer-events: none;\n  z-index: 1000;\n}\n\n/* Creates a small triangle extender for the tooltip */\n.d3-tip:after {\n  box-sizing: border-box;\n  display: inline;\n  font-size: 10px;\n  width: 100%;\n  line-height: 1;\n  color: rgba(0, 0, 0, 0.8);\n  position: absolute;\n  pointer-events: none;\n}\n\n/* Northward tooltips */\n.d3-tip.n:after {\n  content: '\\25BC';\n  margin: -1px 0 0 0;\n  top: 100%;\n  left: 0;\n  text-align: center;\n}\n\n/* Eastward tooltips */\n.d3-tip.e:after {\n  content: '\\25C0';\n  margin: -4px 0 0 0;\n  top: 50%;\n  left: -8px;\n}\n\n/* Southward tooltips */\n.d3-tip.s:after {\n  content: '\\25B2';\n  margin: 0 0 1px 0;\n  top: -8px;\n  left: 0;\n  text-align: center;\n}\n\n/* Westward tooltips */\n.d3-tip.w:after {\n  content: '\\25B6';\n  margin: -4px 0 0 -1px;\n  top: 50%;\n  left: 100%;\n}\n", "", {"version":3,"sources":["G:/workspace/boke-pro/superset-all/superset/superset-frontend/node_modules/@superset-ui/legacy-plugin-chart-heatmap/esm/vendor/d3tip.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;GAiBG;AACH,iBAAiB;AACjB;EACE,eAAe;EACf,cAAc;EACd,+BAA+B;EAC/B,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;EACrB,cAAc;CACf;;AAED,uDAAuD;AACvD;EACE,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,0BAA0B;EAC1B,mBAAmB;EACnB,qBAAqB;CACtB;;AAED,wBAAwB;AACxB;EACE,iBAAiB;EACjB,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,mBAAmB;CACpB;;AAED,uBAAuB;AACvB;EACE,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,WAAW;CACZ;;AAED,wBAAwB;AACxB;EACE,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;EACV,QAAQ;EACR,mBAAmB;CACpB;;AAED,uBAAuB;AACvB;EACE,iBAAiB;EACjB,sBAAsB;EACtB,SAAS;EACT,WAAW;CACZ","file":"d3tip.css","sourcesContent":["/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n/* from d3-tip */\n.d3-tip {\n  line-height: 1;\n  padding: 12px;\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  border-radius: 2px;\n  pointer-events: none;\n  z-index: 1000;\n}\n\n/* Creates a small triangle extender for the tooltip */\n.d3-tip:after {\n  box-sizing: border-box;\n  display: inline;\n  font-size: 10px;\n  width: 100%;\n  line-height: 1;\n  color: rgba(0, 0, 0, 0.8);\n  position: absolute;\n  pointer-events: none;\n}\n\n/* Northward tooltips */\n.d3-tip.n:after {\n  content: '\\25BC';\n  margin: -1px 0 0 0;\n  top: 100%;\n  left: 0;\n  text-align: center;\n}\n\n/* Eastward tooltips */\n.d3-tip.e:after {\n  content: '\\25C0';\n  margin: -4px 0 0 0;\n  top: 50%;\n  left: -8px;\n}\n\n/* Southward tooltips */\n.d3-tip.s:after {\n  content: '\\25B2';\n  margin: 0 0 1px 0;\n  top: -8px;\n  left: 0;\n  text-align: center;\n}\n\n/* Westward tooltips */\n.d3-tip.w:after {\n  content: '\\25B6';\n  margin: -4px 0 0 -1px;\n  top: 50%;\n  left: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/d3-svg-legend/index.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-svg-legend/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var d3 = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");

d3.legend = __webpack_require__(/*! ./no-extend */ "./node_modules/d3-svg-legend/no-extend.js");

module.exports = d3;


/***/ }),

/***/ "./node_modules/d3-svg-legend/no-extend.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-svg-legend/no-extend.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  color: __webpack_require__(/*! ./src/color */ "./node_modules/d3-svg-legend/src/color.js"),
  size: __webpack_require__(/*! ./src/size */ "./node_modules/d3-svg-legend/src/size.js"),
  symbol: __webpack_require__(/*! ./src/symbol */ "./node_modules/d3-svg-legend/src/symbol.js")
};


/***/ }),

/***/ "./node_modules/d3-svg-legend/src/color.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-svg-legend/src/color.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var helper = __webpack_require__(/*! ./legend */ "./node_modules/d3-svg-legend/src/legend.js");

module.exports = function(){

  var scale = d3.scale.linear(),
    shape = "rect",
    shapeWidth = 15,
    shapeHeight = 15,
    shapeRadius = 10,
    shapePadding = 2,
    cells = [5],
    labels = [],
    classPrefix = "",
    useClass = false,
    title = "",
    labelFormat = d3.format(".01f"),
    labelOffset = 10,
    labelAlign = "middle",
    labelDelimiter = "to",
    orient = "vertical",
    ascending = false,
    path,
    legendDispatcher = d3.dispatch("cellover", "cellout", "cellclick");

    function legend(svg){

      var type = helper.d3_calcType(scale, ascending, cells, labels, labelFormat, labelDelimiter),
        legendG = svg.selectAll('g').data([scale]);

      legendG.enter().append('g').attr('class', classPrefix + 'legendCells');


      var cell = legendG.selectAll("." + classPrefix + "cell").data(type.data),
        cellEnter = cell.enter().append("g", ".cell").attr("class", classPrefix + "cell").style("opacity", 1e-6),
        shapeEnter = cellEnter.append(shape).attr("class", classPrefix + "swatch"),
        shapes = cell.select("g." + classPrefix + "cell " + shape);

      //add event handlers
      helper.d3_addEvents(cellEnter, legendDispatcher);

      cell.exit().transition().style("opacity", 0).remove();

      helper.d3_drawShapes(shape, shapes, shapeHeight, shapeWidth, shapeRadius, path);

      helper.d3_addText(legendG, cellEnter, type.labels, classPrefix)

      // sets placement
      var text = cell.select("text"),
        shapeSize = shapes[0].map( function(d){ return d.getBBox(); });

      //sets scale
      //everything is fill except for line which is stroke,
      if (!useClass){
        if (shape == "line"){
          shapes.style("stroke", type.feature);
        } else {
          shapes.style("fill", type.feature);
        }
      } else {
        shapes.attr("class", function(d){ return classPrefix + "swatch " + type.feature(d); });
      }

      var cellTrans,
      textTrans,
      textAlign = (labelAlign == "start") ? 0 : (labelAlign == "middle") ? 0.5 : 1;

      //positions cells and text
      if (orient === "vertical"){
        cellTrans = function(d,i) { return "translate(0, " + (i * (shapeSize[i].height + shapePadding)) + ")"; };
        textTrans = function(d,i) { return "translate(" + (shapeSize[i].width + shapeSize[i].x +
          labelOffset) + "," + (shapeSize[i].y + shapeSize[i].height/2 + 5) + ")"; };

      } else if (orient === "horizontal"){
        cellTrans = function(d,i) { return "translate(" + (i * (shapeSize[i].width + shapePadding)) + ",0)"; }
        textTrans = function(d,i) { return "translate(" + (shapeSize[i].width*textAlign  + shapeSize[i].x) +
          "," + (shapeSize[i].height + shapeSize[i].y + labelOffset + 8) + ")"; };
      }

      helper.d3_placement(orient, cell, cellTrans, text, textTrans, labelAlign);
      helper.d3_title(svg, legendG, title, classPrefix);

      cell.transition().style("opacity", 1);

    }



  legend.scale = function(_) {
    if (!arguments.length) return scale;
    scale = _;
    return legend;
  };

  legend.cells = function(_) {
    if (!arguments.length) return cells;
    if (_.length > 1 || _ >= 2 ){
      cells = _;
    }
    return legend;
  };

  legend.shape = function(_, d) {
    if (!arguments.length) return shape;
    if (_ == "rect" || _ == "circle" || _ == "line" || (_ == "path" && (typeof d === 'string')) ){
      shape = _;
      path = d;
    }
    return legend;
  };

  legend.shapeWidth = function(_) {
    if (!arguments.length) return shapeWidth;
    shapeWidth = +_;
    return legend;
  };

  legend.shapeHeight = function(_) {
    if (!arguments.length) return shapeHeight;
    shapeHeight = +_;
    return legend;
  };

  legend.shapeRadius = function(_) {
    if (!arguments.length) return shapeRadius;
    shapeRadius = +_;
    return legend;
  };

  legend.shapePadding = function(_) {
    if (!arguments.length) return shapePadding;
    shapePadding = +_;
    return legend;
  };

  legend.labels = function(_) {
    if (!arguments.length) return labels;
    labels = _;
    return legend;
  };

  legend.labelAlign = function(_) {
    if (!arguments.length) return labelAlign;
    if (_ == "start" || _ == "end" || _ == "middle") {
      labelAlign = _;
    }
    return legend;
  };

  legend.labelFormat = function(_) {
    if (!arguments.length) return labelFormat;
    labelFormat = _;
    return legend;
  };

  legend.labelOffset = function(_) {
    if (!arguments.length) return labelOffset;
    labelOffset = +_;
    return legend;
  };

  legend.labelDelimiter = function(_) {
    if (!arguments.length) return labelDelimiter;
    labelDelimiter = _;
    return legend;
  };

  legend.useClass = function(_) {
    if (!arguments.length) return useClass;
    if (_ === true || _ === false){
      useClass = _;
    }
    return legend;
  };

  legend.orient = function(_){
    if (!arguments.length) return orient;
    _ = _.toLowerCase();
    if (_ == "horizontal" || _ == "vertical") {
      orient = _;
    }
    return legend;
  };

  legend.ascending = function(_) {
    if (!arguments.length) return ascending;
    ascending = !!_;
    return legend;
  };

  legend.classPrefix = function(_) {
    if (!arguments.length) return classPrefix;
    classPrefix = _;
    return legend;
  };

  legend.title = function(_) {
    if (!arguments.length) return title;
    title = _;
    return legend;
  };

  d3.rebind(legend, legendDispatcher, "on");

  return legend;

};


/***/ }),

/***/ "./node_modules/d3-svg-legend/src/legend.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-svg-legend/src/legend.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {

  d3_identity: function (d) {
    return d;
  },

  d3_mergeLabels: function (gen, labels) {

      if(labels.length === 0) return gen;

      gen = (gen) ? gen : [];

      var i = labels.length;
      for (; i < gen.length; i++) {
        labels.push(gen[i]);
      }
      return labels;
    },

  d3_linearLegend: function (scale, cells, labelFormat) {
    var data = [];

    if (cells.length > 1){
      data = cells;

    } else {
      var domain = scale.domain(),
      increment = (domain[domain.length - 1] - domain[0])/(cells - 1),
      i = 0;

      for (; i < cells; i++){
        data.push(domain[0] + i*increment);
      }
    }

    var labels = data.map(labelFormat);

    return {data: data,
            labels: labels,
            feature: function(d){ return scale(d); }};
  },

  d3_quantLegend: function (scale, labelFormat, labelDelimiter) {
    var labels = scale.range().map(function(d){
      var invert = scale.invertExtent(d),
      a = labelFormat(invert[0]),
      b = labelFormat(invert[1]);

      // if (( (a) && (a.isNan()) && b){
      //   console.log("in initial statement")
        return labelFormat(invert[0]) + " " + labelDelimiter + " " + labelFormat(invert[1]);
      // } else if (a || b) {
      //   console.log('in else statement')
      //   return (a) ? a : b;
      // }

    });

    return {data: scale.range(),
            labels: labels,
            feature: this.d3_identity
          };
  },

  d3_ordinalLegend: function (scale) {
    return {data: scale.domain(),
            labels: scale.domain(),
            feature: function(d){ return scale(d); }};
  },

  d3_drawShapes: function (shape, shapes, shapeHeight, shapeWidth, shapeRadius, path) {
    if (shape === "rect"){
        shapes.attr("height", shapeHeight).attr("width", shapeWidth);

    } else if (shape === "circle") {
        shapes.attr("r", shapeRadius)//.attr("cx", shapeRadius).attr("cy", shapeRadius);

    } else if (shape === "line") {
        shapes.attr("x1", 0).attr("x2", shapeWidth).attr("y1", 0).attr("y2", 0);

    } else if (shape === "path") {
      shapes.attr("d", path);
    }
  },

  d3_addText: function (svg, enter, labels, classPrefix){
    enter.append("text").attr("class", classPrefix + "label");
    svg.selectAll("g." + classPrefix + "cell text." + classPrefix + "label")
      .data(labels).text(this.d3_identity);
  },

  d3_calcType: function (scale, ascending, cells, labels, labelFormat, labelDelimiter){
    var type = scale.ticks ?
            this.d3_linearLegend(scale, cells, labelFormat) : scale.invertExtent ?
            this.d3_quantLegend(scale, labelFormat, labelDelimiter) : this.d3_ordinalLegend(scale);

    type.labels = this.d3_mergeLabels(type.labels, labels);

    if (ascending) {
      type.labels = this.d3_reverse(type.labels);
      type.data = this.d3_reverse(type.data);
    }

    return type;
  },

  d3_reverse: function(arr) {
    var mirror = [];
    for (var i = 0, l = arr.length; i < l; i++) {
      mirror[i] = arr[l-i-1];
    }
    return mirror;
  },

  d3_placement: function (orient, cell, cellTrans, text, textTrans, labelAlign) {
    cell.attr("transform", cellTrans);
    text.attr("transform", textTrans);
    if (orient === "horizontal"){
      text.style("text-anchor", labelAlign);
    }
  },

  d3_addEvents: function(cells, dispatcher){
    var _ = this;

      cells.on("mouseover.legend", function (d) { _.d3_cellOver(dispatcher, d, this); })
          .on("mouseout.legend", function (d) { _.d3_cellOut(dispatcher, d, this); })
          .on("click.legend", function (d) { _.d3_cellClick(dispatcher, d, this); });
  },

  d3_cellOver: function(cellDispatcher, d, obj){
    cellDispatcher.cellover.call(obj, d);
  },

  d3_cellOut: function(cellDispatcher, d, obj){
    cellDispatcher.cellout.call(obj, d);
  },

  d3_cellClick: function(cellDispatcher, d, obj){
    cellDispatcher.cellclick.call(obj, d);
  },

  d3_title: function(svg, cellsSvg, title, classPrefix){
    if (title !== ""){

      var titleText = svg.selectAll('text.' + classPrefix + 'legendTitle');

      titleText.data([title])
        .enter()
        .append('text')
        .attr('class', classPrefix + 'legendTitle');

        svg.selectAll('text.' + classPrefix + 'legendTitle')
            .text(title)

      var yOffset = svg.select('.' + classPrefix + 'legendTitle')
          .map(function(d) { return d[0].getBBox().height})[0],
      xOffset = -cellsSvg.map(function(d) { return d[0].getBBox().x})[0];

      cellsSvg.attr('transform', 'translate(' + xOffset + ',' + (yOffset + 10) + ')');

    }
  }
}


/***/ }),

/***/ "./node_modules/d3-svg-legend/src/size.js":
/*!************************************************!*\
  !*** ./node_modules/d3-svg-legend/src/size.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var helper = __webpack_require__(/*! ./legend */ "./node_modules/d3-svg-legend/src/legend.js");

module.exports =  function(){

  var scale = d3.scale.linear(),
    shape = "rect",
    shapeWidth = 15,
    shapePadding = 2,
    cells = [5],
    labels = [],
    useStroke = false,
    classPrefix = "",
    title = "",
    labelFormat = d3.format(".01f"),
    labelOffset = 10,
    labelAlign = "middle",
    labelDelimiter = "to",
    orient = "vertical",
    ascending = false,
    path,
    legendDispatcher = d3.dispatch("cellover", "cellout", "cellclick");

    function legend(svg){

      var type = helper.d3_calcType(scale, ascending, cells, labels, labelFormat, labelDelimiter),
        legendG = svg.selectAll('g').data([scale]);

      legendG.enter().append('g').attr('class', classPrefix + 'legendCells');


      var cell = legendG.selectAll("." + classPrefix + "cell").data(type.data),
        cellEnter = cell.enter().append("g", ".cell").attr("class", classPrefix + "cell").style("opacity", 1e-6),
        shapeEnter = cellEnter.append(shape).attr("class", classPrefix + "swatch"),
        shapes = cell.select("g." + classPrefix + "cell " + shape);

      //add event handlers
      helper.d3_addEvents(cellEnter, legendDispatcher);

      cell.exit().transition().style("opacity", 0).remove();

      //creates shape
      if (shape === "line"){
        helper.d3_drawShapes(shape, shapes, 0, shapeWidth);
        shapes.attr("stroke-width", type.feature);
      } else {
        helper.d3_drawShapes(shape, shapes, type.feature, type.feature, type.feature, path);
      }

      helper.d3_addText(legendG, cellEnter, type.labels, classPrefix)

      //sets placement
      var text = cell.select("text"),
        shapeSize = shapes[0].map(
          function(d, i){
            var bbox = d.getBBox()
            var stroke = scale(type.data[i]);

            if (shape === "line" && orient === "horizontal") {
              bbox.height = bbox.height + stroke;
            } else if (shape === "line" && orient === "vertical"){
              bbox.width = bbox.width;
            }

            return bbox;
        });

      var maxH = d3.max(shapeSize, function(d){ return d.height + d.y; }),
      maxW = d3.max(shapeSize, function(d){ return d.width + d.x; });

      var cellTrans,
      textTrans,
      textAlign = (labelAlign == "start") ? 0 : (labelAlign == "middle") ? 0.5 : 1;

      //positions cells and text
      if (orient === "vertical"){

        cellTrans = function(d,i) {
            var height = d3.sum(shapeSize.slice(0, i + 1 ), function(d){ return d.height; });
            return "translate(0, " + (height + i*shapePadding) + ")"; };

        textTrans = function(d,i) { return "translate(" + (maxW + labelOffset) + "," +
          (shapeSize[i].y + shapeSize[i].height/2 + 5) + ")"; };

      } else if (orient === "horizontal"){
        cellTrans = function(d,i) {
            var width = d3.sum(shapeSize.slice(0, i + 1 ), function(d){ return d.width; });
            return "translate(" + (width + i*shapePadding) + ",0)"; };

        textTrans = function(d,i) { return "translate(" + (shapeSize[i].width*textAlign  + shapeSize[i].x) + "," +
              (maxH + labelOffset ) + ")"; };
      }

      helper.d3_placement(orient, cell, cellTrans, text, textTrans, labelAlign);
      helper.d3_title(svg, legendG, title, classPrefix);

      cell.transition().style("opacity", 1);

    }

  legend.scale = function(_) {
    if (!arguments.length) return scale;
    scale = _;
    return legend;
  };

  legend.cells = function(_) {
    if (!arguments.length) return cells;
    if (_.length > 1 || _ >= 2 ){
      cells = _;
    }
    return legend;
  };


  legend.shape = function(_, d) {
    if (!arguments.length) return shape;
    if (_ == "rect" || _ == "circle" || _ == "line" ){
      shape = _;
      path = d;
    }
    return legend;
  };

  legend.shapeWidth = function(_) {
    if (!arguments.length) return shapeWidth;
    shapeWidth = +_;
    return legend;
  };

  legend.shapePadding = function(_) {
    if (!arguments.length) return shapePadding;
    shapePadding = +_;
    return legend;
  };

  legend.labels = function(_) {
    if (!arguments.length) return labels;
    labels = _;
    return legend;
  };

  legend.labelAlign = function(_) {
    if (!arguments.length) return labelAlign;
    if (_ == "start" || _ == "end" || _ == "middle") {
      labelAlign = _;
    }
    return legend;
  };

  legend.labelFormat = function(_) {
    if (!arguments.length) return labelFormat;
    labelFormat = _;
    return legend;
  };

  legend.labelOffset = function(_) {
    if (!arguments.length) return labelOffset;
    labelOffset = +_;
    return legend;
  };

  legend.labelDelimiter = function(_) {
    if (!arguments.length) return labelDelimiter;
    labelDelimiter = _;
    return legend;
  };

  legend.orient = function(_){
    if (!arguments.length) return orient;
    _ = _.toLowerCase();
    if (_ == "horizontal" || _ == "vertical") {
      orient = _;
    }
    return legend;
  };

  legend.ascending = function(_) {
    if (!arguments.length) return ascending;
    ascending = !!_;
    return legend;
  };

  legend.classPrefix = function(_) {
    if (!arguments.length) return classPrefix;
    classPrefix = _;
    return legend;
  };

  legend.title = function(_) {
    if (!arguments.length) return title;
    title = _;
    return legend;
  };

  d3.rebind(legend, legendDispatcher, "on");

  return legend;

};


/***/ }),

/***/ "./node_modules/d3-svg-legend/src/symbol.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-svg-legend/src/symbol.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var helper = __webpack_require__(/*! ./legend */ "./node_modules/d3-svg-legend/src/legend.js");

module.exports = function(){

  var scale = d3.scale.linear(),
    shape = "path",
    shapeWidth = 15,
    shapeHeight = 15,
    shapeRadius = 10,
    shapePadding = 5,
    cells = [5],
    labels = [],
    classPrefix = "",
    useClass = false,
    title = "",
    labelFormat = d3.format(".01f"),
    labelAlign = "middle",
    labelOffset = 10,
    labelDelimiter = "to",
    orient = "vertical",
    ascending = false,
    legendDispatcher = d3.dispatch("cellover", "cellout", "cellclick");

    function legend(svg){

      var type = helper.d3_calcType(scale, ascending, cells, labels, labelFormat, labelDelimiter),
        legendG = svg.selectAll('g').data([scale]);

      legendG.enter().append('g').attr('class', classPrefix + 'legendCells');

      var cell = legendG.selectAll("." + classPrefix + "cell").data(type.data),
        cellEnter = cell.enter().append("g", ".cell").attr("class", classPrefix + "cell").style("opacity", 1e-6),
        shapeEnter = cellEnter.append(shape).attr("class", classPrefix + "swatch"),
        shapes = cell.select("g." + classPrefix + "cell " + shape);

      //add event handlers
      helper.d3_addEvents(cellEnter, legendDispatcher);

      //remove old shapes
      cell.exit().transition().style("opacity", 0).remove();

      helper.d3_drawShapes(shape, shapes, shapeHeight, shapeWidth, shapeRadius, type.feature);
      helper.d3_addText(legendG, cellEnter, type.labels, classPrefix)

      // sets placement
      var text = cell.select("text"),
        shapeSize = shapes[0].map( function(d){ return d.getBBox(); });

      var maxH = d3.max(shapeSize, function(d){ return d.height; }),
      maxW = d3.max(shapeSize, function(d){ return d.width; });

      var cellTrans,
      textTrans,
      textAlign = (labelAlign == "start") ? 0 : (labelAlign == "middle") ? 0.5 : 1;

      //positions cells and text
      if (orient === "vertical"){
        cellTrans = function(d,i) { return "translate(0, " + (i * (maxH + shapePadding)) + ")"; };
        textTrans = function(d,i) { return "translate(" + (maxW + labelOffset) + "," +
              (shapeSize[i].y + shapeSize[i].height/2 + 5) + ")"; };

      } else if (orient === "horizontal"){
        cellTrans = function(d,i) { return "translate(" + (i * (maxW + shapePadding)) + ",0)"; };
        textTrans = function(d,i) { return "translate(" + (shapeSize[i].width*textAlign  + shapeSize[i].x) + "," +
              (maxH + labelOffset ) + ")"; };
      }

      helper.d3_placement(orient, cell, cellTrans, text, textTrans, labelAlign);
      helper.d3_title(svg, legendG, title, classPrefix);
      cell.transition().style("opacity", 1);

    }


  legend.scale = function(_) {
    if (!arguments.length) return scale;
    scale = _;
    return legend;
  };

  legend.cells = function(_) {
    if (!arguments.length) return cells;
    if (_.length > 1 || _ >= 2 ){
      cells = _;
    }
    return legend;
  };

  legend.shapePadding = function(_) {
    if (!arguments.length) return shapePadding;
    shapePadding = +_;
    return legend;
  };

  legend.labels = function(_) {
    if (!arguments.length) return labels;
    labels = _;
    return legend;
  };

  legend.labelAlign = function(_) {
    if (!arguments.length) return labelAlign;
    if (_ == "start" || _ == "end" || _ == "middle") {
      labelAlign = _;
    }
    return legend;
  };

  legend.labelFormat = function(_) {
    if (!arguments.length) return labelFormat;
    labelFormat = _;
    return legend;
  };

  legend.labelOffset = function(_) {
    if (!arguments.length) return labelOffset;
    labelOffset = +_;
    return legend;
  };

  legend.labelDelimiter = function(_) {
    if (!arguments.length) return labelDelimiter;
    labelDelimiter = _;
    return legend;
  };

  legend.orient = function(_){
    if (!arguments.length) return orient;
    _ = _.toLowerCase();
    if (_ == "horizontal" || _ == "vertical") {
      orient = _;
    }
    return legend;
  };

  legend.ascending = function(_) {
    if (!arguments.length) return ascending;
    ascending = !!_;
    return legend;
  };

  legend.classPrefix = function(_) {
    if (!arguments.length) return classPrefix;
    classPrefix = _;
    return legend;
  };

  legend.title = function(_) {
    if (!arguments.length) return title;
    title = _;
    return legend;
  };

  d3.rebind(legend, legendDispatcher, "on");

  return legend;

};


/***/ })

}]);
//# sourceMappingURL=31.9ed865ea.chunk.js.map