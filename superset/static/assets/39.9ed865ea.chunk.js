(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/CountryMap.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/CountryMap.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../css-loader??ref--7-1!./CountryMap.css */ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/CountryMap.css");

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

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/CountryMap.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/CountryMap.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "./node_modules/@superset-ui/legacy-plugin-chart-country-map/node_modules/d3-array/src/extent.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/color/SequentialSchemeRegistrySingleton.js");
/* harmony import */ var _countries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./countries */ "./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/countries.js");
/* harmony import */ var _CountryMap_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CountryMap.css */ "./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/CountryMap.css");
/* harmony import */ var _CountryMap_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CountryMap_css__WEBPACK_IMPORTED_MODULE_6__);
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
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    country_id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    metric: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  })),
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  country: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  linearColorScheme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mapBaseUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  numberFormat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
const maps = {};

function CountryMap(element, props) {
  const {
    data,
    width,
    height,
    country,
    linearColorScheme,
    numberFormat
  } = props;
  const container = element;
  const format = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["getNumberFormatter"])(numberFormat);
  const colorScale = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])().get(linearColorScheme).createLinearScale(Object(d3_array__WEBPACK_IMPORTED_MODULE_2__["default"])(data, v => v.metric));
  const colorMap = {};
  data.forEach(d => {
    colorMap[d.country_id] = colorScale(d.metric);
  });

  const colorFn = d => colorMap[d.properties.ISO] || 'none';

  const path = d3__WEBPACK_IMPORTED_MODULE_0___default.a.geo.path();
  const div = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(container);
  div.classed('superset-legacy-chart-country-map', true);
  div.selectAll('*').remove();
  container.style.height = `${height}px`;
  container.style.width = `${width}px`;
  const svg = div.append('svg:svg').attr('width', width).attr('height', height).attr('preserveAspectRatio', 'xMidYMid meet');
  const backgroundRect = svg.append('rect').attr('class', 'background').attr('width', width).attr('height', height);
  const g = svg.append('g');
  const mapLayer = g.append('g').classed('map-layer', true);
  const textLayer = g.append('g').classed('text-layer', true).attr('transform', `translate(${width / 2}, 45)`);
  const bigText = textLayer.append('text').classed('big-text', true);
  const resultText = textLayer.append('text').classed('result-text', true).attr('dy', '1em');
  let centered;

  const clicked = function clicked(d) {
    const hasCenter = d && centered !== d;
    let x;
    let y;
    let k;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    if (hasCenter) {
      const centroid = path.centroid(d);
      [x, y] = centroid;
      k = 4;
      centered = d;
    } else {
      x = halfWidth;
      y = halfHeight;
      k = 1;
      centered = null;
    }

    g.transition().duration(750).attr('transform', `translate(${halfWidth},${halfHeight})scale(${k})translate(${-x},${-y})`);
    textLayer.style('opacity', 0).attr('transform', `translate(0,0)translate(${x},${hasCenter ? y - 5 : 45})`).transition().duration(750).style('opacity', 1);
    bigText.transition().duration(750).style('font-size', hasCenter ? 6 : 16);
    resultText.transition().duration(750).style('font-size', hasCenter ? 16 : 24);
  };

  backgroundRect.on('click', clicked);

  const selectAndDisplayNameOfRegion = function selectAndDisplayNameOfRegion(feature) {
    let name = '';

    if (feature && feature.properties) {
      if (feature.properties.ID_2) {
        name = feature.properties.NAME_2;
      } else {
        name = feature.properties.NAME_1;
      }
    }

    bigText.text(name);
  };

  const updateMetrics = function updateMetrics(region) {
    if (region.length > 0) {
      resultText.text(format(region[0].metric));
    }
  };

  const mouseenter = function mouseenter(d) {
    // Darken color
    let c = colorFn(d);

    if (c !== 'none') {
      c = d3__WEBPACK_IMPORTED_MODULE_0___default.a.rgb(c).darker().toString();
    }

    d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this).style('fill', c);
    selectAndDisplayNameOfRegion(d);
    const result = data.filter(region => region.country_id === d.properties.ISO);
    updateMetrics(result);
  };

  const mouseout = function mouseout() {
    d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(this).style('fill', colorFn);
    bigText.text('');
    resultText.text('');
  };

  function drawMap(mapData) {
    const {
      features
    } = mapData;
    const center = d3__WEBPACK_IMPORTED_MODULE_0___default.a.geo.centroid(mapData);
    const scale = 100;
    const projection = d3__WEBPACK_IMPORTED_MODULE_0___default.a.geo.mercator().scale(scale).center(center).translate([width / 2, height / 2]);
    path.projection(projection); // Compute scale that fits container.

    const bounds = path.bounds(mapData);
    const hscale = scale * width / (bounds[1][0] - bounds[0][0]);
    const vscale = scale * height / (bounds[1][1] - bounds[0][1]);
    const newScale = hscale < vscale ? hscale : vscale; // Compute bounds and offset using the updated scale.

    projection.scale(newScale);
    const newBounds = path.bounds(mapData);
    projection.translate([width - (newBounds[0][0] + newBounds[1][0]) / 2, height - (newBounds[0][1] + newBounds[1][1]) / 2]); // Draw each province as a path

    mapLayer.selectAll('path').data(features).enter().append('path').attr('d', path).attr('class', 'region').attr('vector-effect', 'non-scaling-stroke').style('fill', colorFn).on('mouseenter', mouseenter).on('mouseout', mouseout).on('click', clicked);
  }

  const map = maps[country];

  if (map) {
    drawMap(map);
  } else {
    const url = _countries__WEBPACK_IMPORTED_MODULE_5__["default"][country];
    d3__WEBPACK_IMPORTED_MODULE_0___default.a.json(url, (error, mapData) => {
      if (error) {
        var _countryOptions$find;

        const countryName = ((_countryOptions$find = _countries__WEBPACK_IMPORTED_MODULE_5__["countryOptions"].find(x => x[0] === country)) == null ? void 0 : _countryOptions$find[1]) || country;
        d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(element).html(`<div class="alert alert-danger">Could not load map data for ${countryName}</div>`);
      } else {
        maps[country] = mapData;
        drawMap(mapData);
      }
    });
  }
}

CountryMap.displayName = 'CountryMap';
CountryMap.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (CountryMap);

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/ReactCountryMap.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/ReactCountryMap.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/chart/components/reactify.js");
/* harmony import */ var _CountryMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountryMap */ "./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/CountryMap.js");
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


/* harmony default export */ __webpack_exports__["default"] = (Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(_CountryMap__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-country-map/node_modules/d3-array/src/extent.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-country-map/node_modules/d3-array/src/extent.js ***!
  \*******************************************************************************************************/
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/CountryMap.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/CountryMap.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-country-map svg {\n  background-color: #feffff;\n}\n\n.superset-legacy-chart-country-map {\n  position: relative;\n}\n\n.superset-legacy-chart-country-map .background {\n  fill: rgba(255, 255, 255, 0);\n  pointer-events: all;\n}\n\n.superset-legacy-chart-country-map .map-layer {\n  fill: #fff;\n  stroke: #aaa;\n}\n\n.superset-legacy-chart-country-map .effect-layer {\n  pointer-events: none;\n}\n\n.superset-legacy-chart-country-map .text-layer {\n  color: #333333;\n  text-anchor: middle;\n  pointer-events: none;\n}\n\n.superset-legacy-chart-country-map text.result-text {\n  font-weight: 300;\n  font-size: 24px;\n}\n\n.superset-legacy-chart-country-map text.big-text {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.superset-legacy-chart-country-map path.region {\n  cursor: pointer;\n  stroke: #eee;\n}\n", "", {"version":3,"sources":["G:/workspace/boke-pro/superset-all/superset/superset-frontend/node_modules/@superset-ui/legacy-plugin-chart-country-map/esm/CountryMap.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;GAiBG;;AAEH;EACE,0BAA0B;CAC3B;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,6BAA6B;EAC7B,oBAAoB;CACrB;;AAED;EACE,WAAW;EACX,aAAa;CACd;;AAED;EACE,qBAAqB;CACtB;;AAED;EACE,eAAe;EACf,oBAAoB;EACpB,qBAAqB;CACtB;;AAED;EACE,iBAAiB;EACjB,gBAAgB;CACjB;;AAED;EACE,iBAAiB;EACjB,gBAAgB;CACjB;;AAED;EACE,gBAAgB;EAChB,aAAa;CACd","file":"CountryMap.css","sourcesContent":["/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-country-map svg {\n  background-color: #feffff;\n}\n\n.superset-legacy-chart-country-map {\n  position: relative;\n}\n\n.superset-legacy-chart-country-map .background {\n  fill: rgba(255, 255, 255, 0);\n  pointer-events: all;\n}\n\n.superset-legacy-chart-country-map .map-layer {\n  fill: #fff;\n  stroke: #aaa;\n}\n\n.superset-legacy-chart-country-map .effect-layer {\n  pointer-events: none;\n}\n\n.superset-legacy-chart-country-map .text-layer {\n  color: #333333;\n  text-anchor: middle;\n  pointer-events: none;\n}\n\n.superset-legacy-chart-country-map text.result-text {\n  font-weight: 300;\n  font-size: 24px;\n}\n\n.superset-legacy-chart-country-map text.big-text {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.superset-legacy-chart-country-map path.region {\n  cursor: pointer;\n  stroke: #eee;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

}]);
//# sourceMappingURL=39.9ed865ea.chunk.js.map