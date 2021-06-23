(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./src/filters/components/TimeColumn/TimeColumnFilterPlugin.tsx":
/*!**********************************************************************!*\
  !*** ./src/filters/components/TimeColumn/TimeColumnFilterPlugin.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PluginFilterTimeColumn; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/utils/ensureIsArray.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/query/types/QueryResponse.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/common/components */ "./src/common/components/index.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common */ "./src/filters/components/common.ts");
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




const { Option } = src_common_components__WEBPACK_IMPORTED_MODULE_8__["Select"];
function PluginFilterTimeColumn(props) {var _context;
  const { data, formData, height, width, setDataMask, setFocusedFilter, unsetFocusedFilter, filterState } = props;
  const { defaultValue, inputRef } = formData;
  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(defaultValue != null ? defaultValue : []);
  const handleChange = value => {
    const resultValue = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["default"])(value);
    setValue(resultValue);
    const extraFormData = {};
    if (resultValue.length) {
      extraFormData.granularity_sqla = resultValue[0];
    }
    setDataMask({
      extraFormData,
      filterState: {
        value: resultValue.length ? resultValue : null } });


  };
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {var _filterState$value;
    handleChange((_filterState$value = filterState.value) != null ? _filterState$value : null);
  }, [_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(filterState.value)]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    handleChange(defaultValue != null ? defaultValue : null);
    // I think after Config Modal update some filter it re-creates default value for all other filters
    // so we can process it like this `JSON.stringify` or start to use `Immer`
  }, [_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(defaultValue)]);
  const timeColumns = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(_context = data || []).call(_context, row => row.dtype === _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["GenericDataType"].TEMPORAL);
  const placeholderText = timeColumns.length === 0 ?
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["t"])('No time columns') :
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["tn"])('%s option', '%s options', timeColumns.length, timeColumns.length);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_common__WEBPACK_IMPORTED_MODULE_9__["Styles"], { height: height, width: width },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_common__WEBPACK_IMPORTED_MODULE_9__["StyledSelect"], { allowClear: true, value: value, placeholder: placeholderText
    // @ts-ignore
    , onChange: handleChange, onBlur: unsetFocusedFilter, onFocus: setFocusedFilter, ref: inputRef },
  _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(timeColumns).call(timeColumns, row => {
    const { column_name: columnName, verbose_name: verboseName } = row;
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(Option, { key: columnName, value: columnName },
    verboseName != null ? verboseName : columnName);

  })));


}__signature__(PluginFilterTimeColumn, "useState{[value, setValue](defaultValue ?? [])}\nuseEffect{}\nuseEffect{}");;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(Option, "Option", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\filters\\components\\TimeColumn\\TimeColumnFilterPlugin.tsx");reactHotLoader.register(PluginFilterTimeColumn, "PluginFilterTimeColumn", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\filters\\components\\TimeColumn\\TimeColumnFilterPlugin.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
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

/***/ })

}]);
//# sourceMappingURL=53.9ed865ea.chunk.js.map