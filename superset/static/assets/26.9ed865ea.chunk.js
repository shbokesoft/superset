(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/ReactTreemap.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/ReactTreemap.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/chart/components/reactify.js");
/* harmony import */ var _Treemap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Treemap */ "./node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/Treemap.js");
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


/* harmony default export */ __webpack_exports__["default"] = (Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["default"])(_Treemap__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/Treemap.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/Treemap.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../css-loader??ref--7-1!./Treemap.css */ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/Treemap.css");

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

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/Treemap.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/Treemap.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/selectAll.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/select.js");
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-hierarchy */ "./node_modules/d3-hierarchy/src/treemap/index.js");
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-hierarchy */ "./node_modules/d3-hierarchy/src/treemap/squarify.js");
/* harmony import */ var d3_hierarchy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-hierarchy */ "./node_modules/d3-hierarchy/src/hierarchy/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/color/index.js");
/* harmony import */ var _Treemap_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Treemap.css */ "./node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/Treemap.css");
/* harmony import */ var _Treemap_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Treemap_css__WEBPACK_IMPORTED_MODULE_8__);
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

/* eslint-disable no-param-reassign, func-names */

/* eslint-disable react/sort-prop-types */




 // Declare PropTypes for recursive data structures
// https://github.com/facebook/react/issues/5676

/* eslint-disable-next-line  no-undef */

const lazyFunction = f => () => f().apply(undefined, arguments);

const leafType = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
  name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired
});
const parentShape = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape(lazyFunction(() => parentShape)), leafType]))
};
const nodeType = prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape(parentShape), leafType]);
const propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(nodeType),
  width: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  colorScheme: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  margin: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    top: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    right: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
  }),
  numberFormat: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  treemapRatio: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
};

function hovered(hover) {
  return function (node) {
    Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(node.ancestors().map(d => d.node)).classed('node--hover', hover).select('rect').attr('width', d => d.x1 - d.x0 - hover).attr('height', d => d.y1 - d.y0 - hover);
  };
}
/* Modified from https://bl.ocks.org/mbostock/911ad09bdead40ec0061 */


function Treemap(element, props) {
  const {
    data: rawData,
    width,
    height,
    numberFormat,
    colorScheme,
    treemapRatio
  } = props;
  const div = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["default"])(element);
  div.classed('superset-legacy-chart-treemap', true);
  const formatNumber = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["getNumberFormatter"])(numberFormat);
  const colorFn = _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["CategoricalColorNamespace"].getScale(colorScheme);
  const rootNodes = rawData;
  div.selectAll('*').remove();

  if (rootNodes.length > 0) {
    const [rootNode] = rootNodes;
    const treemap = Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_2__["default"])().size([width, height]).paddingOuter(3).paddingTop(19).paddingInner(1).tile(d3_hierarchy__WEBPACK_IMPORTED_MODULE_3__["default"].ratio(treemapRatio)).round(true);
    const root = treemap(Object(d3_hierarchy__WEBPACK_IMPORTED_MODULE_4__["default"])(rootNode).sum(d => d.value).sort((a, b) => b.height - a.height || b.value - a.value));
    const svg = div.append('svg').attr('class', 'treemap').attr('width', width).attr('height', height);
    const cell = svg.selectAll('.node').data(root.descendants()).enter().append('g').attr('transform', d => `translate(${d.x0},${d.y0})`).attr('class', 'node').each(function (d) {
      d.node = this;
    }).on('mouseover', hovered(true)).on('mouseout', hovered(false));
    cell.append('rect').attr('id', d => `rect-${d.data.name}`).attr('width', d => d.x1 - d.x0).attr('height', d => d.y1 - d.y0).style('fill', d => colorFn(d.depth));
    cell.append('clipPath').attr('id', d => `clip-${d.data.name}`).append('use').attr('xlink:href', d => `#rect-${d.data.name}`);
    const label = cell.append('text').attr('clip-path', d => `url(#clip-${d.data.name})`);
    label.filter(d => d.children).selectAll('tspan').data(d => d.data.name.slice(Math.max(0, d.data.name.lastIndexOf('.') + 1)).split(/(?=[A-Z][^A-Z])/g).concat(`\u00A0${formatNumber(d.value)}`)).enter().append('tspan').attr('x', (d, i) => i ? null : 4).attr('y', 13).text(d => d);
    label.filter(d => !d.children).selectAll('tspan').data(d => d.data.name.slice(Math.max(0, d.data.name.lastIndexOf('.') + 1)).split(/(?=[A-Z][^A-Z])/g).concat(formatNumber(d.value))).enter().append('tspan').attr('x', 4).attr('y', (d, i) => 13 + i * 10).text(d => d);
    cell.append('title').text(d => `${d.data.name}\n${formatNumber(d.value)}`);
  }
}

Treemap.displayName = 'Treemap';
Treemap.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Treemap);

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/Treemap.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/Treemap.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-treemap text {\n  font-size: 11px;\n  pointer-events: none;\n}\n\n.superset-legacy-chart-treemap tspan:last-child {\n  font-size: 9px;\n  fill-opacity: 0.8;\n}\n\n.superset-legacy-chart-treemap .node rect {\n  shape-rendering: crispEdges;\n}\n\n.superset-legacy-chart-treemap .node--hover rect {\n  stroke: #000;\n}\n", "", {"version":3,"sources":["G:/workspace/boke-pro/superset-all/superset/superset-frontend/node_modules/@superset-ui/legacy-plugin-chart-treemap/esm/Treemap.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;GAiBG;;AAEH;EACE,gBAAgB;EAChB,qBAAqB;CACtB;;AAED;EACE,eAAe;EACf,kBAAkB;CACnB;;AAED;EACE,4BAA4B;CAC7B;;AAED;EACE,aAAa;CACd","file":"Treemap.css","sourcesContent":["/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.superset-legacy-chart-treemap text {\n  font-size: 11px;\n  pointer-events: none;\n}\n\n.superset-legacy-chart-treemap tspan:last-child {\n  font-size: 9px;\n  fill-opacity: 0.8;\n}\n\n.superset-legacy-chart-treemap .node rect {\n  shape-rendering: crispEdges;\n}\n\n.superset-legacy-chart-treemap .node--hover rect {\n  stroke: #000;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/accessors.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/accessors.js ***!
  \****************************************************/
/*! exports provided: optional, required */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return optional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
function optional(f) {
  return f == null ? null : required(f);
}

function required(f) {
  if (typeof f !== "function") throw new Error;
  return f;
}


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/constant.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/constant.js ***!
  \***************************************************/
/*! exports provided: constantZero, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constantZero", function() { return constantZero; });
function constantZero() {
  return 0;
}

/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/ancestors.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/ancestors.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/count.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/count.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function count(node) {
  var sum = 0,
      children = node.children,
      i = children && children.length;
  if (!i) sum = 1;
  else while (--i >= 0) sum += children[i].value;
  node.value = sum;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.eachAfter(count);
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/descendants.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/descendants.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var nodes = [];
  this.each(function(node) {
    nodes.push(node);
  });
  return nodes;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/each.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/each.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var node = this, current, next = [node], children, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      callback(node), children = node.children;
      if (children) for (i = 0, n = children.length; i < n; ++i) {
        next.push(children[i]);
      }
    }
  } while (next.length);
  return this;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var node = this, nodes = [node], next = [], children, i, n;
  while (node = nodes.pop()) {
    next.push(node), children = node.children;
    if (children) for (i = 0, n = children.length; i < n; ++i) {
      nodes.push(children[i]);
    }
  }
  while (node = next.pop()) {
    callback(node);
  }
  return this;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var node = this, nodes = [node], children, i;
  while (node = nodes.pop()) {
    callback(node), children = node.children;
    if (children) for (i = children.length - 1; i >= 0; --i) {
      nodes.push(children[i]);
    }
  }
  return this;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/index.js ***!
  \**********************************************************/
/*! exports provided: default, computeHeight, Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hierarchy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHeight", function() { return computeHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./count.js */ "./node_modules/d3-hierarchy/src/hierarchy/count.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each.js */ "./node_modules/d3-hierarchy/src/hierarchy/each.js");
/* harmony import */ var _eachBefore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eachBefore.js */ "./node_modules/d3-hierarchy/src/hierarchy/eachBefore.js");
/* harmony import */ var _eachAfter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eachAfter.js */ "./node_modules/d3-hierarchy/src/hierarchy/eachAfter.js");
/* harmony import */ var _sum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sum.js */ "./node_modules/d3-hierarchy/src/hierarchy/sum.js");
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sort.js */ "./node_modules/d3-hierarchy/src/hierarchy/sort.js");
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./path.js */ "./node_modules/d3-hierarchy/src/hierarchy/path.js");
/* harmony import */ var _ancestors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ancestors.js */ "./node_modules/d3-hierarchy/src/hierarchy/ancestors.js");
/* harmony import */ var _descendants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./descendants.js */ "./node_modules/d3-hierarchy/src/hierarchy/descendants.js");
/* harmony import */ var _leaves_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leaves.js */ "./node_modules/d3-hierarchy/src/hierarchy/leaves.js");
/* harmony import */ var _links_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./links.js */ "./node_modules/d3-hierarchy/src/hierarchy/links.js");












function hierarchy(data, children) {
  var root = new Node(data),
      valued = +data.value && (root.value = data.value),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;

  if (children == null) children = defaultChildren;

  while (node = nodes.pop()) {
    if (valued) node.value = +node.data.value;
    if ((childs = children(node.data)) && (n = childs.length)) {
      node.children = new Array(n);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function defaultChildren(d) {
  return d.children;
}

function copyData(node) {
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;
  do node.height = height;
  while ((node = node.parent) && (node.height < ++height));
}

function Node(data) {
  this.data = data;
  this.depth =
  this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: _count_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  each: _each_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  eachAfter: _eachAfter_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  eachBefore: _eachBefore_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  sum: _sum_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  sort: _sort_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  path: _path_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  ancestors: _ancestors_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  descendants: _descendants_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  leaves: _leaves_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  links: _links_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  copy: node_copy
};


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/leaves.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/leaves.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/links.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/links.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) { // Don’t include the root’s parent, if any.
      links.push({source: node.parent, target: node});
    }
  });
  return links;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/path.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/path.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(end) {
  var start = this,
      ancestor = leastCommonAncestor(start, end),
      nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
});

function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
      bNodes = b.ancestors(),
      c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/sort.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/sort.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/hierarchy/sum.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/hierarchy/sum.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return this.eachAfter(function(node) {
    var sum = +value(node.data) || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/dice.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/dice.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (x1 - x0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.y0 = y0, node.y1 = y1;
    node.x0 = x0, node.x1 = x0 += node.value * k;
  }
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/index.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _round_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round.js */ "./node_modules/d3-hierarchy/src/treemap/round.js");
/* harmony import */ var _squarify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squarify.js */ "./node_modules/d3-hierarchy/src/treemap/squarify.js");
/* harmony import */ var _accessors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessors.js */ "./node_modules/d3-hierarchy/src/accessors.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant.js */ "./node_modules/d3-hierarchy/src/constant.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var tile = _squarify_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      round = false,
      dx = 1,
      dy = 1,
      paddingStack = [0],
      paddingInner = _constant_js__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
      paddingTop = _constant_js__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
      paddingRight = _constant_js__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
      paddingBottom = _constant_js__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
      paddingLeft = _constant_js__WEBPACK_IMPORTED_MODULE_3__["constantZero"];

  function treemap(root) {
    root.x0 =
    root.y0 = 0;
    root.x1 = dx;
    root.y1 = dy;
    root.eachBefore(positionNode);
    paddingStack = [0];
    if (round) root.eachBefore(_round_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    return root;
  }

  function positionNode(node) {
    var p = paddingStack[node.depth],
        x0 = node.x0 + p,
        y0 = node.y0 + p,
        x1 = node.x1 - p,
        y1 = node.y1 - p;
    if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
    if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
    node.x0 = x0;
    node.y0 = y0;
    node.x1 = x1;
    node.y1 = y1;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x0 += paddingLeft(node) - p;
      y0 += paddingTop(node) - p;
      x1 -= paddingRight(node) - p;
      y1 -= paddingBottom(node) - p;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      tile(node, x0, y0, x1, y1);
    }
  }

  treemap.round = function(x) {
    return arguments.length ? (round = !!x, treemap) : round;
  };

  treemap.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
  };

  treemap.tile = function(x) {
    return arguments.length ? (tile = Object(_accessors_js__WEBPACK_IMPORTED_MODULE_2__["required"])(x), treemap) : tile;
  };

  treemap.padding = function(x) {
    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
  };

  treemap.paddingInner = function(x) {
    return arguments.length ? (paddingInner = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingInner;
  };

  treemap.paddingOuter = function(x) {
    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
  };

  treemap.paddingTop = function(x) {
    return arguments.length ? (paddingTop = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingTop;
  };

  treemap.paddingRight = function(x) {
    return arguments.length ? (paddingRight = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingRight;
  };

  treemap.paddingBottom = function(x) {
    return arguments.length ? (paddingBottom = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingBottom;
  };

  treemap.paddingLeft = function(x) {
    return arguments.length ? (paddingLeft = typeof x === "function" ? x : Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingLeft;
  };

  return treemap;
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/round.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/round.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/slice.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/slice.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (y1 - y0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.x0 = x0, node.x1 = x1;
    node.y0 = y0, node.y1 = y0 += node.value * k;
  }
});


/***/ }),

/***/ "./node_modules/d3-hierarchy/src/treemap/squarify.js":
/*!***********************************************************!*\
  !*** ./node_modules/d3-hierarchy/src/treemap/squarify.js ***!
  \***********************************************************/
/*! exports provided: phi, squarifyRatio, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phi", function() { return phi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squarifyRatio", function() { return squarifyRatio; });
/* harmony import */ var _dice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice.js */ "./node_modules/d3-hierarchy/src/treemap/dice.js");
/* harmony import */ var _slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice.js */ "./node_modules/d3-hierarchy/src/treemap/slice.js");



var phi = (1 + Math.sqrt(5)) / 2;

function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [],
      nodes = parent.children,
      row,
      nodeValue,
      i0 = 0,
      i1 = 0,
      n = nodes.length,
      dx, dy,
      value = parent.value,
      sumValue,
      minValue,
      maxValue,
      newRatio,
      minRatio,
      alpha,
      beta;

  while (i0 < n) {
    dx = x1 - x0, dy = y1 - y0;

    // Find the next non-empty node.
    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);

    // Keep adding nodes while the aspect ratio maintains or improves.
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue) minValue = nodeValue;
      if (nodeValue > maxValue) maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) { sumValue -= nodeValue; break; }
      minRatio = newRatio;
    }

    // Position and record the row orientation.
    rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
    if (row.dice) Object(_dice_js__WEBPACK_IMPORTED_MODULE_0__["default"])(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
    else Object(_slice_js__WEBPACK_IMPORTED_MODULE_1__["default"])(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
    value -= sumValue, i0 = i1;
  }

  return rows;
}

/* harmony default export */ __webpack_exports__["default"] = ((function custom(ratio) {

  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }

  squarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return squarify;
})(phi));


/***/ }),

/***/ "./node_modules/d3-selection/src/selectAll.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-selection/src/selectAll.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index */ "./node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([document.querySelectorAll(selector)], [document.documentElement])
      : new _selection_index__WEBPACK_IMPORTED_MODULE_0__["Selection"]([selector == null ? [] : selector], _selection_index__WEBPACK_IMPORTED_MODULE_0__["root"]);
});


/***/ })

}]);
//# sourceMappingURL=26.9ed865ea.chunk.js.map