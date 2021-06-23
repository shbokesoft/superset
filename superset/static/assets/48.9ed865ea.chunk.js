(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-chord/esm/Chord.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-chord/esm/Chord.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/d3.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/color/index.js");
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

/* eslint-disable no-param-reassign, react/sort-prop-types */



const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    matrix: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number)),
    nodes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)
  }),
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  colorScheme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  numberFormat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

function Chord(element, props) {
  const {
    data,
    width,
    height,
    numberFormat,
    colorScheme
  } = props;
  element.innerHTML = '';
  const div = d3__WEBPACK_IMPORTED_MODULE_0___default.a.select(element);
  div.classed('superset-legacy-chart-chord', true);
  const {
    nodes,
    matrix
  } = data;
  const f = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["getNumberFormatter"])(numberFormat);
  const colorFn = _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["CategoricalColorNamespace"].getScale(colorScheme);
  const outerRadius = Math.min(width, height) / 2 - 10;
  const innerRadius = outerRadius - 24;
  let chord;
  const arc = d3__WEBPACK_IMPORTED_MODULE_0___default.a.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius);
  const layout = d3__WEBPACK_IMPORTED_MODULE_0___default.a.layout.chord().padding(0.04).sortSubgroups(d3__WEBPACK_IMPORTED_MODULE_0___default.a.descending).sortChords(d3__WEBPACK_IMPORTED_MODULE_0___default.a.descending);
  const path = d3__WEBPACK_IMPORTED_MODULE_0___default.a.svg.chord().radius(innerRadius);
  const svg = div.append('svg').attr('width', width).attr('height', height).on('mouseout', () => chord.classed('fade', false)).append('g').attr('id', 'circle').attr('transform', `translate(${width / 2}, ${height / 2})`);
  svg.append('circle').attr('r', outerRadius); // Compute the chord layout.

  layout.matrix(matrix);
  const group = svg.selectAll('.group').data(layout.groups).enter().append('g').attr('class', 'group').on('mouseover', (d, i) => {
    chord.classed('fade', p => p.source.index !== i && p.target.index !== i);
  }); // Add a mouseover title.

  group.append('title').text((d, i) => `${nodes[i]}: ${f(d.value)}`); // Add the group arc.

  const groupPath = group.append('path').attr('id', (d, i) => `group${i}`).attr('d', arc).style('fill', (d, i) => colorFn(nodes[i])); // Add a text label.

  const groupText = group.append('text').attr('x', 6).attr('dy', 15);
  groupText.append('textPath').attr('xlink:href', (d, i) => `#group${i}`).text((d, i) => nodes[i]); // Remove the labels that don't fit. :(

  groupText.filter(function filter(d, i) {
    return groupPath[0][i].getTotalLength() / 2 - 16 < this.getComputedTextLength();
  }).remove(); // Add the chords.

  chord = svg.selectAll('.chord').data(layout.chords).enter().append('path').attr('class', 'chord').on('mouseover', d => {
    chord.classed('fade', p => p !== d);
  }).style('fill', d => colorFn(nodes[d.source.index])).attr('d', path); // Add an elaborate mouseover title for each chord.

  chord.append('title').text(d => `${nodes[d.source.index]} → ${nodes[d.target.index]}: ${f(d.source.value)}\n${nodes[d.target.index]} → ${nodes[d.source.index]}: ${f(d.target.value)}`);
}

Chord.displayName = 'Chord';
Chord.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Chord);

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-chord/esm/ReactChord.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-chord/esm/ReactChord.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/chart/components/reactify.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Chord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chord */ "./node_modules/@superset-ui/legacy-plugin-chart-chord/esm/Chord.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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





const ReactComponent = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"])(_Chord__WEBPACK_IMPORTED_MODULE_4__["default"]);

const Chord = ({
  className,
  ...otherProps
}) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
  className: className
}, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(ReactComponent, otherProps));

Chord.defaultProps = {
  otherProps: {}
};
Chord.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  otherProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any)
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["styled"])(Chord)`
  .superset-legacy-chart-chord svg #circle circle {
    fill: none;
    pointer-events: all;
  }
  .superset-legacy-chart-chord svg .group path {
    fill-opacity: 0.6;
  }
  .superset-legacy-chart-chord svg path.chord {
    stroke: #000;
    stroke-width: 0.25px;
  }
  .superset-legacy-chart-chord svg #circle:hover path.fade {
    opacity: 0.2;
  }
`);

/***/ })

}]);
//# sourceMappingURL=48.9ed865ea.chunk.js.map