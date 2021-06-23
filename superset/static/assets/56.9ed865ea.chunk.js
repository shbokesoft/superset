(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-event-flow/esm/transformProps.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-event-flow/esm/transformProps.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transformProps; });
/* harmony import */ var _data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @data-ui/event-flow */ "./node_modules/@data-ui/event-flow/build/index.js");
/* harmony import */ var _data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__);
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

function transformProps(chartProps) {
  const {
    formData,
    queriesData,
    width,
    height
  } = chartProps;
  const {
    allColumnsX,
    entity,
    minLeafNodeEventCount
  } = formData;
  const {
    data
  } = queriesData[0];
  const hasData = data && data.length > 0;

  if (hasData) {
    const userKey = entity;
    const eventNameKey = allColumnsX; // map from the Superset form fields to <EventFlow />'s expected data keys

    const accessorFunctions = {
      [_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__["ENTITY_ID"]]: datum => String(datum[userKey]),
      [_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__["EVENT_NAME"]]: datum => datum[eventNameKey],
      [_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__["TS"]]: datum => // eslint-disable-next-line no-underscore-dangle
      datum.__timestamp || datum.__timestamp === 0 ? new Date(datum.__timestamp) : null
    };
    const cleanData = Object(_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_0__["cleanEvents"])(data, accessorFunctions);
    return {
      data: cleanData,
      height,
      initialMinEventCount: minLeafNodeEventCount,
      width
    };
  }

  return {
    data: null,
    height,
    width
  };
}

/***/ })

}]);
//# sourceMappingURL=56.9ed865ea.chunk.js.map