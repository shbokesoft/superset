(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/@superset-ui/legacy-plugin-chart-event-flow/esm/EventFlow.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-plugin-chart-event-flow/esm/EventFlow.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventFlow; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_ui_event_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data-ui/event-flow */ "./node_modules/@data-ui/event-flow/build/index.js");
/* harmony import */ var _data_ui_event_flow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
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




function EventFlow({
  data,
  initialMinEventCount,
  height = 400,
  width = 400
}) {
  if (data) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_data_ui_event_flow__WEBPACK_IMPORTED_MODULE_2__["App"], {
      width: width,
      height: height,
      data: data,
      initialMinEventCount: initialMinEventCount,
      initialShowControls: false
    });
  }

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    style: {
      height,
      width
    }
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["t"])('Sorry, there appears to be no data')));
}
EventFlow.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  initialMinEventCount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
};

/***/ })

}]);
//# sourceMappingURL=55.9ed865ea.chunk.js.map