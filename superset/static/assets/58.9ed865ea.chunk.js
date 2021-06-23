(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/@superset-ui/plugin-chart-echarts/esm/Funnel/EchartsFunnel.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@superset-ui/plugin-chart-echarts/esm/Funnel/EchartsFunnel.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EchartsFunnel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Echart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Echart */ "./node_modules/@superset-ui/plugin-chart-echarts/esm/components/Echart.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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



function EchartsFunnel({
  height,
  width,
  echartOptions,
  setDataMask,
  labelMap,
  groupby,
  selectedValues,
  formData
}) {
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(values => {
    if (!formData.emitFilter) {
      return;
    }

    const groupbyValues = values.map(value => labelMap[value]);
    setDataMask({
      extraFormData: {
        filters: values.length === 0 ? [] : groupby.map((col, idx) => {
          const val = groupbyValues.map(v => v[idx]);
          if (val === null || val === undefined) return {
            col,
            op: 'IS NULL'
          };
          return {
            col,
            op: 'IN',
            val: val
          };
        })
      },
      filterState: {
        value: groupbyValues.length ? groupbyValues : null,
        selectedValues: values.length ? values : null
      }
    });
  }, [groupby, labelMap, setDataMask, selectedValues]);
  const eventHandlers = {
    click: props => {
      const {
        name
      } = props;
      const values = Object.values(selectedValues);

      if (values.includes(name)) {
        handleChange(values.filter(v => v !== name));
      } else {
        handleChange([...values, name]);
      }
    }
  };
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_components_Echart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    height: height,
    width: width,
    echartOptions: echartOptions,
    eventHandlers: eventHandlers,
    selectedValues: selectedValues
  });
}

/***/ })

}]);
//# sourceMappingURL=58.9ed865ea.chunk.js.map