(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./src/filters/components/Range/RangeFilterPlugin.tsx":
/*!************************************************************!*\
  !*** ./src/filters/components/Range/RangeFilterPlugin.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RangeFilterPlugin; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/number/is-nan */ "./node_modules/@babel/runtime-corejs3/core-js-stable/number/is-nan.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/number-format/NumberFormats.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/common/components */ "./src/common/components/index.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common */ "./src/filters/components/common.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils */ "./src/filters/utils.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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





function RangeFilterPlugin(props) {
  const { data, formData, height, width, setDataMask, setFocusedFilter, unsetFocusedFilter, inputRef, filterState } = props;
  const numberFormatter = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["getNumberFormatter"])(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"].SMART_NUMBER);
  const [row] = data;
  // @ts-ignore
  const { min, max } = row;
  const { groupby, defaultValue } = formData;
  const [col = ''] = groupby || [];
  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(defaultValue != null ? defaultValue : [min, max]);
  const [marks, setMarks] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])({});
  const getBounds = value => {
    const [lowerRaw, upperRaw] = value;
    return {
      lower: lowerRaw > min ? lowerRaw : null,
      upper: upperRaw < max ? upperRaw : null };

  };
  const getLabel = (lower, upper) => {
    if (lower !== null && upper !== null) {
      return `${numberFormatter(lower)} ≤ x ≤ ${numberFormatter(upper)}`;
    }
    if (lower !== null) {
      return `x ≥ ${numberFormatter(lower)}`;
    }
    if (upper !== null) {
      return `x ≤ ${numberFormatter(upper)}`;
    }
    return '';
  };
  const getMarks = (lower, upper) => {
    const newMarks = {};
    if (lower !== null) {
      newMarks[lower] = numberFormatter(lower);
    }
    if (upper !== null) {
      newMarks[upper] = numberFormatter(upper);
    }
    return newMarks;
  };
  const handleAfterChange = value => {
    setValue(value);
    const { lower, upper } = getBounds(value);
    setMarks(getMarks(lower, upper));
    setDataMask({
      extraFormData: Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getRangeExtraFormData"])(col, lower, upper),
      filterState: {
        value: lower !== null || upper !== null ? value : null,
        label: getLabel(lower, upper) } });


  };
  const handleChange = value => {
    setValue(value);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {var _filterState$value;
    handleAfterChange((_filterState$value = filterState.value) != null ? _filterState$value : [min, max]);
  }, [_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(filterState.value)]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_common__WEBPACK_IMPORTED_MODULE_8__["Styles"], { height: height, width: width },
  _babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_1___default()(Number(min)) || _babel_runtime_corejs3_core_js_stable_number_is_nan__WEBPACK_IMPORTED_MODULE_1___default()(Number(max)) ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("h4", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Chosen non-numeric column')) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", { onMouseEnter: setFocusedFilter, onMouseLeave: unsetFocusedFilter },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_7__["Slider"], { range: true, min: min, max: max, value: value != null ? value : [min, max], onAfterChange: handleAfterChange, onChange: handleChange, tipFormatter: value => numberFormatter(value), ref: inputRef, marks: marks })));


}__signature__(RangeFilterPlugin, "useState{[value, setValue](defaultValue ?? [min, max])}\nuseState{[marks, setMarks]({})}\nuseEffect{}");;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(RangeFilterPlugin, "RangeFilterPlugin", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\filters\\components\\Range\\RangeFilterPlugin.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/filters/components/common.ts":
/*!******************************************!*\
  !*** ./src/filters/components/common.ts ***!
  \******************************************/
/*! exports provided: Styles, StyledSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Styles", function() { return Styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSelect", function() { return StyledSelect; });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/common/components */ "./src/common/components/index.tsx");
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


const Styles = _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"].div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;
const StyledSelect = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"])(src_common_components__WEBPACK_IMPORTED_MODULE_1__["Select"])`
  width: 100%;
`;;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(Styles, "Styles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\filters\\components\\common.ts");reactHotLoader.register(StyledSelect, "StyledSelect", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\filters\\components\\common.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/filters/utils.ts":
/*!******************************!*\
  !*** ./src/filters/utils.ts ***!
  \******************************/
/*! exports provided: getSelectExtraFormData, getRangeExtraFormData, getDataRecordFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectExtraFormData", function() { return getSelectExtraFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRangeExtraFormData", function() { return getRangeExtraFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataRecordFormatter", function() { return getDataRecordFormatter; });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/query/types/QueryResponse.js");
/* harmony import */ var src_utils_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils/common */ "./src/utils/common.js");
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


const getSelectExtraFormData = (col, value, emptyFilter = false, inverseSelection = false) => {
  const extra = {};
  if (emptyFilter) {
    extra.adhoc_filters = [
    {
      expressionType: 'SQL',
      clause: 'WHERE',
      sqlExpression: '1 = 0' }];


  } else
  if (value !== undefined && value !== null && value.length !== 0) {
    extra.filters = [
    {
      col,
      op: inverseSelection ? 'NOT IN' : 'IN',
      val: value }];


  }
  return extra;
};
const getRangeExtraFormData = (col, lower, upper) => {
  const filters = [];
  if (lower !== undefined && lower !== null) {
    filters.push({ col, op: '>=', val: lower });
  }
  if (upper !== undefined && upper !== null) {
    filters.push({ col, op: '<=', val: upper });
  }
  return filters.length ?
  {
    filters } :

  {};
};
function getDataRecordFormatter({ timeFormatter, numberFormatter } = {}) {
  return (value, dtype) => {
    if (value === null || value === undefined) {
      return src_utils_common__WEBPACK_IMPORTED_MODULE_1__["NULL_STRING"];
    }
    if (typeof value === 'boolean') {
      return value ? src_utils_common__WEBPACK_IMPORTED_MODULE_1__["TRUE_STRING"] : src_utils_common__WEBPACK_IMPORTED_MODULE_1__["FALSE_STRING"];
    }
    if (dtype === _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["GenericDataType"].BOOLEAN) {
      try {
        return JSON.parse(String(value).toLowerCase()) ?
        src_utils_common__WEBPACK_IMPORTED_MODULE_1__["TRUE_STRING"] :
        src_utils_common__WEBPACK_IMPORTED_MODULE_1__["FALSE_STRING"];
      }
      catch {
        return src_utils_common__WEBPACK_IMPORTED_MODULE_1__["FALSE_STRING"];
      }
    }
    if (typeof value === 'string') {
      return value;
    }
    if (timeFormatter && dtype === _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["GenericDataType"].TEMPORAL) {
      return timeFormatter(value);
    }
    if (numberFormatter &&
    typeof value === 'number' &&
    dtype === _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["GenericDataType"].NUMERIC) {
      return numberFormatter(value);
    }
    return String(value);
  };
};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(getSelectExtraFormData, "getSelectExtraFormData", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\filters\\utils.ts");reactHotLoader.register(getRangeExtraFormData, "getRangeExtraFormData", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\filters\\utils.ts");reactHotLoader.register(getDataRecordFormatter, "getDataRecordFormatter", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\filters\\utils.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=47.9ed865ea.chunk.js.map