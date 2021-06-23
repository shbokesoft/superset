(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./src/filters/components/TimeGrain/TimeGrainFilterPlugin.tsx":
/*!********************************************************************!*\
  !*** ./src/filters/components/TimeGrain/TimeGrainFilterPlugin.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PluginFilterTimegrain; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/utils/ensureIsArray.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/common/components */ "./src/common/components/index.tsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./src/filters/components/common.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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




const { Option } = src_common_components__WEBPACK_IMPORTED_MODULE_6__["Select"];
function PluginFilterTimegrain(props) {var _context;
  const { data, formData, height, width, setDataMask, setFocusedFilter, unsetFocusedFilter, filterState } = props;
  const { defaultValue, inputRef } = formData;
  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(defaultValue != null ? defaultValue : []);
  const handleChange = values => {
    const resultValue = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"])(values);
    const [timeGrain] = resultValue;
    const extraFormData = {};
    if (timeGrain) {
      extraFormData.time_grain_sqla = timeGrain;
    }
    setValue(resultValue);
    setDataMask({
      extraFormData,
      filterState: {
        value: resultValue.length ? resultValue : null } });


  };
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {var _filterState$value;
    handleChange((_filterState$value = filterState.value) != null ? _filterState$value : []);
  }, [_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(filterState.value)]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    handleChange(defaultValue != null ? defaultValue : []);
    // I think after Config Modal update some filter it re-creates default value for all other filters
    // so we can process it like this `JSON.stringify` or start to use `Immer`
  }, [_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()(defaultValue)]);
  const placeholderText = (data || []).length === 0 ?
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('No data') :
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["tn"])('%s option', '%s options', data.length, data.length);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_common__WEBPACK_IMPORTED_MODULE_7__["Styles"], { height: height, width: width },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_common__WEBPACK_IMPORTED_MODULE_7__["StyledSelect"], { allowClear: true, value: value, placeholder: placeholderText
    // @ts-ignore
    , onChange: handleChange, onBlur: unsetFocusedFilter, onFocus: setFocusedFilter, ref: inputRef },
  _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context = data || []).call(_context, row => {
    const { name, duration } = row;
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Option, { key: duration, value: duration },
    name);

  })));


}__signature__(PluginFilterTimegrain, "useState{[value, setValue](defaultValue ?? [])}\nuseEffect{}\nuseEffect{}");;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(Option, "Option", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\filters\\components\\TimeGrain\\TimeGrainFilterPlugin.tsx");reactHotLoader.register(PluginFilterTimegrain, "PluginFilterTimegrain", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\filters\\components\\TimeGrain\\TimeGrainFilterPlugin.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
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
//# sourceMappingURL=54.9ed865ea.chunk.js.map