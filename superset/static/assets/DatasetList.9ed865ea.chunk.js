(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DatasetList"],{

/***/ "./images/empty.svg":
/*!**************************!*\
  !*** ./images/empty.svg ***!
  \**************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgEmpty; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M83.195 1.366L103 24v38a4 4 0 01-4 4H20a4 4 0 01-4-4V24L35.805 1.366A4 4 0 0138.815 0h41.37a4 4 0 013.01 1.366zM101 26v36a2 2 0 01-2 2H20a2 2 0 01-2-2V26h17.25A4.75 4.75 0 0140 30.75a6.75 6.75 0 006.75 6.75h25.5A6.75 6.75 0 0079 30.75 4.75 4.75 0 0183.75 26H101zm-.658-2L81.69 2.683A2 2 0 0080.185 2h-41.37a2 2 0 00-1.505.683L18.657 24H35.25A6.75 6.75 0 0142 30.75a4.75 4.75 0 004.75 4.75h25.5A4.75 4.75 0 0077 30.75 6.75 6.75 0 0183.75 24h16.592z",
  fill: "#D1D1D1"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M16 53.29C6.074 55.7 0 58.94 0 62.5 0 69.956 26.64 76 59.5 76S119 69.956 119 62.5c0-3.56-6.074-6.799-16-9.21V62a4 4 0 01-4 4H20a4 4 0 01-4-4v-8.71z",
  fill: "#F2F2F2"
});

function SvgEmpty(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 119,
    height: 76,
    fill: "none"
  }, props), _ref, _ref2);
}

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "139f4a903d3a105300fc2d4c22f0931d.svg");


/***/ }),

/***/ "./src/components/CertifiedIcon/index.tsx":
/*!************************************************!*\
  !*** ./src/components/CertifiedIcon/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var src_components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/Icon */ "./src/components/Icon/index.tsx");
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Tooltip */ "./src/components/Tooltip/index.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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




function CertifiedIcon({ certifiedBy, details, size = 24 }) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], { id: "certified-details-tooltip", title: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
    certifiedBy && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", null,
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("strong", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Certified by %s', certifiedBy))),

    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", null, details)) },

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(src_components_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], { color: _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["supersetTheme"].colors.primary.base, height: size, width: size, name: "certified" }));

}const _default =
CertifiedIcon;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(CertifiedIcon, "CertifiedIcon", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\CertifiedIcon\\index.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\CertifiedIcon\\index.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/DatabaseSelector/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/DatabaseSelector/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DatabaseSelector; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ "./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/connection/SupersetClient.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rison */ "./node_modules/rison/js/rison.js");
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rison__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_components_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/Select */ "./src/components/Select/index.ts");
/* harmony import */ var src_components_Label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/components/Label */ "./src/components/Label/index.tsx");
/* harmony import */ var src_components_RefreshLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/RefreshLabel */ "./src/components/RefreshLabel/index.tsx");
/* harmony import */ var src_components_AsyncSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/components/AsyncSelect */ "./src/components/AsyncSelect/index.jsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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







const FieldTitle = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["styled"].p`
  color: ${({ theme }) => theme.colors.secondary.light2};
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  margin: 20px 0 10px 0;
  text-transform: uppercase;
`;
const DatabaseSelectorWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["styled"].div`
  .fa-refresh {
    padding-left: 9px;
  }

  .refresh-col {
    display: flex;
    align-items: center;
    width: 30px;
    margin-left: ${({ theme }) => theme.gridUnit}px;
  }

  .section {
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
  }

  .select {
    flex-grow: 1;
  }
`;
const DatabaseOption = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["styled"].span`
  display: inline-flex;
  align-items: center;
`;
function DatabaseSelector({ dbId, formMode = false, getDbList, getTableList, handleError, isDatabaseSelectEnabled = true, onChange, onDbChange, onSchemaChange, onSchemasLoad, readOnly = false, schema, sqlLabMode = false }) {
  const [currentDbId, setCurrentDbId] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(dbId);
  const [currentSchema, setCurrentSchema] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(schema);
  const [schemaLoading, setSchemaLoading] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const [schemaOptions, setSchemaOptions] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  function fetchSchemas(databaseId, forceRefresh = false) {
    const actualDbId = databaseId || dbId;
    if (actualDbId) {
      setSchemaLoading(true);
      const queryParams = rison__WEBPACK_IMPORTED_MODULE_8___default.a.encode({
        force: Boolean(forceRefresh) });

      const endpoint = `/api/v1/database/${actualDbId}/schemas/?q=${queryParams}`;
      return _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"].get({ endpoint }).
      then(({ json }) => {var _context;
        const options = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context = json.result).call(_context, s => ({
          value: s,
          label: s,
          title: s }));

        setSchemaOptions(options);
        setSchemaLoading(false);
        if (onSchemasLoad) {
          onSchemasLoad(options);
        }
      }).
      catch(() => {
        setSchemaOptions([]);
        setSchemaLoading(false);
        handleError(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["t"])('Error while fetching schema list'));
      });
    }
    return _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_2___default.a.resolve();
  }
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (currentDbId) {
      fetchSchemas(currentDbId);
    }
  }, [currentDbId]);
  function onSelectChange({ dbId, schema }) {
    setCurrentDbId(dbId);
    setCurrentSchema(schema);
    if (onChange) {
      onChange({ dbId, schema, tableName: undefined });
    }
  }
  function dbMutator(data) {var _context2;
    if (getDbList) {
      getDbList(data.result);
    }
    if (data.result.length === 0) {
      handleError(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["t"])("It seems you don't have access to any database"));
    }
    return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context2 = data.result).call(_context2, row => ({
      ...row,
      // label is used for the typeahead
      label: `${row.backend} ${row.database_name}` }));

  }
  function changeDataBase(db, force = false) {
    const dbId = db ? db.id : null;
    setSchemaOptions([]);
    if (onSchemaChange) {
      onSchemaChange(null);
    }
    if (onDbChange) {
      onDbChange(db);
    }
    fetchSchemas(dbId, force);
    onSelectChange({ dbId, schema: undefined });
  }
  function changeSchema(schemaOpt, force = false) {
    const schema = schemaOpt ? schemaOpt.value : null;
    if (onSchemaChange) {
      onSchemaChange(schema);
    }
    setCurrentSchema(schema);
    onSelectChange({ dbId: currentDbId, schema });
    if (getTableList) {
      getTableList(currentDbId, schema, force);
    }
  }
  function renderDatabaseOption(db) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(DatabaseOption, { title: db.database_name },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(src_components_Label__WEBPACK_IMPORTED_MODULE_10__["default"], { type: "default" }, db.backend), " ", db.database_name);

  }
  function renderSelectRow(select, refreshBtn) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", { className: "section" },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("span", { className: "select" }, select),
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("span", { className: "refresh-col" }, refreshBtn));

  }
  function renderDatabaseSelect() {
    const queryParams = rison__WEBPACK_IMPORTED_MODULE_8___default.a.encode({
      order_columns: 'database_name',
      order_direction: 'asc',
      page: 0,
      page_size: -1,
      ...(formMode || !sqlLabMode ?
      {} :
      {
        filters: [
        {
          col: 'expose_in_sqllab',
          opr: 'eq',
          value: true }] }) });




    return renderSelectRow(Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(src_components_AsyncSelect__WEBPACK_IMPORTED_MODULE_12__["default"], { "data-test": "select-database", dataEndpoint: `/api/v1/database/?q=${queryParams}`, onChange: db => changeDataBase(db), onAsyncError: () => handleError(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["t"])('Error while fetching database list')), clearable: false, value: currentDbId, valueKey: "id", valueRenderer: db => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", null,
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("span", { className: "text-muted m-r-5" }, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["t"])('Database:')),
      renderDatabaseOption(db)),
      optionRenderer: renderDatabaseOption, mutator: dbMutator, placeholder: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["t"])('Select a database'), autoSelect: true, isDisabled: !isDatabaseSelectEnabled || readOnly }), null);
  }
  function renderSchemaSelect() {
    const value = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_1___default()(schemaOptions).call(schemaOptions, ({ value }) => currentSchema === value);
    const refresh = !formMode && !readOnly && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(src_components_RefreshLabel__WEBPACK_IMPORTED_MODULE_11__["default"], { onClick: () => changeDataBase({ id: dbId }, true), tooltipContent: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["t"])('Force refresh schema list') });
    return renderSelectRow(Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(src_components_Select__WEBPACK_IMPORTED_MODULE_9__["Select"], { name: "select-schema", placeholder: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["t"])('Select a schema (%s)', schemaOptions.length), options: schemaOptions, value: value, valueRenderer: o => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", null,
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("span", { className: "text-muted" }, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["t"])('Schema:')), " ", o.label),
      isLoading: schemaLoading, autosize: false, onChange: item => changeSchema(item), isDisabled: readOnly }), refresh);
  }
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(DatabaseSelectorWrapper, { "data-test": "DatabaseSelector" },
  formMode && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(FieldTitle, null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["t"])('datasource')),
  renderDatabaseSelect(),
  formMode && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(FieldTitle, null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_7__["t"])('schema')),
  renderSchemaSelect());

}__signature__(DatabaseSelector, "useState{[currentDbId, setCurrentDbId](dbId)}\nuseState{[currentSchema, setCurrentSchema](schema)}\nuseState{[schemaLoading, setSchemaLoading](false)}\nuseState{[schemaOptions, setSchemaOptions]([])}\nuseEffect{}");;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(FieldTitle, "FieldTitle", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\DatabaseSelector\\index.tsx");reactHotLoader.register(DatabaseSelectorWrapper, "DatabaseSelectorWrapper", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\DatabaseSelector\\index.tsx");reactHotLoader.register(DatabaseOption, "DatabaseOption", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\DatabaseSelector\\index.tsx");reactHotLoader.register(DatabaseSelector, "DatabaseSelector", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\DatabaseSelector\\index.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ImportModal/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ImportModal/index.tsx ***!
  \**********************************************/
/*! exports provided: StyledIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledIcon", function() { return StyledIcon; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var src_components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src//components/Icon */ "./src/components/Icon/index.tsx");
/* harmony import */ var src_components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Modal */ "./src/components/Modal/index.ts");
/* harmony import */ var src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/views/CRUD/hooks */ "./src/views/CRUD/hooks.ts");
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





const StyledIcon = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["styled"])(src_components_Icon__WEBPACK_IMPORTED_MODULE_5__["default"])`
  margin: auto ${({ theme }) => theme.gridUnit * 2}px auto 0;
`;
const HelperMessage = _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["styled"].div`
  display: block;
  color: ${({ theme }) => theme.colors.grayscale.base};
  font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
`;
const StyledInputContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["styled"].div`
  padding-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  padding-top: ${({ theme }) => theme.gridUnit * 2}px;

  & > div {
    margin: ${({ theme }) => theme.gridUnit}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  }

  .input-container {
    display: flex;
    align-items: center;

    label {
      display: flex;
      margin-right: ${({ theme }) => theme.gridUnit * 2}px;
    }

    i {
      margin: 0 ${({ theme }) => theme.gridUnit}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({ theme }) => theme.gridUnit * 1.5}px
      ${({ theme }) => theme.gridUnit * 2}px;
    border-style: none;
    border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
    border-radius: ${({ theme }) => theme.gridUnit}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${({ theme }) => theme.gridUnit * 3}px;
    }
  }
`;
const ImportModelsModal = ({ resourceName, resourceLabel, passwordsNeededMessage, confirmOverwriteMessage, addDangerToast, addSuccessToast, onModelImport, show, onHide, passwordFields = [], setPasswordFields = () => {} }) => {
  const [isHidden, setIsHidden] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);
  const [uploadFile, setUploadFile] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const [passwords, setPasswords] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});
  const [needsOverwriteConfirm, setNeedsOverwriteConfirm] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [confirmedOverwrite, setConfirmedOverwrite] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  const clearModal = () => {
    setUploadFile(null);
    setPasswordFields([]);
    setPasswords({});
    setNeedsOverwriteConfirm(false);
    setConfirmedOverwrite(false);
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  const handleErrorMsg = msg => {
    clearModal();
    addDangerToast(msg);
  };
  const { state: { alreadyExists, passwordsNeeded }, importResource } = Object(src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_7__["useImportResource"])(resourceName, resourceLabel, handleErrorMsg);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setPasswordFields(passwordsNeeded);
  }, [passwordsNeeded, setPasswordFields]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setNeedsOverwriteConfirm(alreadyExists.length > 0);
  }, [alreadyExists, setNeedsOverwriteConfirm]);
  // Functions
  const hide = () => {
    setIsHidden(true);
    onHide();
    clearModal();
  };
  const onUpload = () => {
    if (uploadFile === null) {
      return;
    }
    importResource(uploadFile, passwords, confirmedOverwrite).then(result => {
      if (result) {
        addSuccessToast(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('The import was successful'));
        clearModal();
        onModelImport();
      }
    });
  };
  const changeFile = event => {
    const { files } = event.target;
    setUploadFile(files && files[0] || null);
  };
  const confirmOverwrite = event => {var _event$currentTarget$, _event$currentTarget;
    const targetValue = (_event$currentTarget$ = (_event$currentTarget = event.currentTarget) == null ? void 0 : _event$currentTarget.value) != null ? _event$currentTarget$ : '';
    setConfirmedOverwrite(targetValue.toUpperCase() === Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('OVERWRITE'));
  };
  const renderPasswordFields = () => {
    if (passwordFields.length === 0) {
      return null;
    }
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null,
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h5", null, "Database passwords"),
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(HelperMessage, null, passwordsNeededMessage),
    _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(passwordFields).call(passwordFields, fileName => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(StyledInputContainer, { key: `password-for-${fileName}` },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", { className: "control-label" },
    fileName,
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("span", { className: "required" }, "*")),

    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", { name: `password-${fileName}`, autoComplete: `password-${fileName}`, type: "password", value: passwords[fileName], onChange: event => setPasswords({ ...passwords, [fileName]: event.target.value }) }))));


  };
  const renderOverwriteConfirmation = () => {
    if (!needsOverwriteConfirm) {
      return null;
    }
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null,
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(StyledInputContainer, null,
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", { className: "confirm-overwrite" }, confirmOverwriteMessage),
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", { className: "control-label" },
    Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Type "%s" to confirm', Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('OVERWRITE'))),

    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", { "data-test": "overwrite-modal-input", id: "overwrite", type: "text", onChange: confirmOverwrite })));


  };
  // Show/hide
  if (isHidden && show) {
    setIsHidden(false);
  }
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(src_components_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], { name: "model", className: "import-model-modal", disablePrimaryButton: uploadFile === null || needsOverwriteConfirm && !confirmedOverwrite, onHandledPrimaryAction: onUpload, onHide: hide, primaryButtonName: needsOverwriteConfirm ? Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Overwrite') : Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Import'), primaryButtonType: needsOverwriteConfirm ? 'danger' : 'primary', width: "750px", show: show, title: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h4", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Import %s', resourceLabel)) },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(StyledInputContainer, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", { className: "control-label" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("label", { htmlFor: "modelFile" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('File'),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("span", { className: "required" }, "*"))),


  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("input", { ref: fileInputRef, "data-test": "model-file-input", name: "modelFile", id: "modelFile", type: "file", accept: ".yaml,.json,.yml,.zip", onChange: changeFile })),

  renderPasswordFields(),
  renderOverwriteConfirmation());

};__signature__(ImportModelsModal, "useState{[isHidden, setIsHidden](true)}\nuseState{[uploadFile, setUploadFile](null)}\nuseState{[passwords, setPasswords]({})}\nuseState{[needsOverwriteConfirm, setNeedsOverwriteConfirm](false)}\nuseState{[confirmedOverwrite, setConfirmedOverwrite](false)}\nuseRef{fileInputRef}\nuseImportResource{{ state: { alreadyExists, passwordsNeeded }, importResource, }}\nuseEffect{}\nuseEffect{}", () => [src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_7__["useImportResource"]]);const _default =
ImportModelsModal;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(StyledIcon, "StyledIcon", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ImportModal\\index.tsx");reactHotLoader.register(HelperMessage, "HelperMessage", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ImportModal\\index.tsx");reactHotLoader.register(StyledInputContainer, "StyledInputContainer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ImportModal\\index.tsx");reactHotLoader.register(ImportModelsModal, "ImportModelsModal", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ImportModal\\index.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ImportModal\\index.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/IndeterminateCheckbox/index.tsx":
/*!********************************************************!*\
  !*** ./src/components/IndeterminateCheckbox/index.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var src_components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/Icon */ "./src/components/Icon/index.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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



const CheckboxLabel = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["styled"].label`
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0;
`;
const IconWithColor = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["styled"])(src_components_Icon__WEBPACK_IMPORTED_MODULE_2__["default"])`
  color: ${({ theme }) => theme.colors.primary.dark1};
  cursor: pointer;
`;
const HiddenInput = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["styled"].input`
  &[type='checkbox'] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    left: 3px;
    margin: 0;
    top: 4px;
  }
`;
const InputContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["styled"].div`
  cursor: pointer;
  display: inline-block;
  position: relative;
`;
const IndeterminateCheckbox = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(__signature__(({ indeterminate, id, checked, onChange, title = '', labelText = '' }, ref) => {
  const defaultRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  const resolvedRef = ref || defaultRef;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(InputContainer, null,
  indeterminate && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(IconWithColor, { name: "checkbox-half" }),
  !indeterminate && checked && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(IconWithColor, { name: "checkbox-on" }),
  !indeterminate && !checked && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(src_components_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], { name: "checkbox-off" }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(HiddenInput, { name: id, id: id, type: "checkbox", ref: resolvedRef, checked: checked, onChange: onChange })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(CheckboxLabel, { title: title, htmlFor: id },
  labelText));


}, "useRef{defaultRef}\nuseEffect{}"));const _default =
IndeterminateCheckbox;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(CheckboxLabel, "CheckboxLabel", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\IndeterminateCheckbox\\index.tsx");reactHotLoader.register(IconWithColor, "IconWithColor", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\IndeterminateCheckbox\\index.tsx");reactHotLoader.register(HiddenInput, "HiddenInput", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\IndeterminateCheckbox\\index.tsx");reactHotLoader.register(InputContainer, "InputContainer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\IndeterminateCheckbox\\index.tsx");reactHotLoader.register(IndeterminateCheckbox, "IndeterminateCheckbox", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\IndeterminateCheckbox\\index.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\IndeterminateCheckbox\\index.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ListView/CardCollection.tsx":
/*!****************************************************!*\
  !*** ./src/components/ListView/CardCollection.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardCollection; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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



const CardContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["styled"].div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(459px, 1fr));
  grid-gap: ${({ theme }) => theme.gridUnit * 8}px;
`;
const CardWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["styled"].div`
  border: 2px solid transparent;
  &.card-selected {
    border: 2px solid ${({ theme }) => theme.colors.primary.base};
  }
  &.bulk-select {
    cursor: pointer;
  }
`;
function CardCollection({ bulkSelectEnabled, loading, prepareRow, renderCard, rows }) {var _context;
  function handleClick(event, toggleRowSelected) {
    if (bulkSelectEnabled) {
      event.preventDefault();
      event.stopPropagation();
      toggleRowSelected();
    }
  }
  if (!renderCard)
  return null;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(CardContainer, null,
  loading &&
  rows.length === 0 &&
  _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(_context = [...new Array(25)]).call(_context, (e, i) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", { key: i }, renderCard({ loading }))),
  rows.length > 0 &&
  _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_1___default()(rows).call(rows, row => {
    if (!renderCard)
    return null;
    prepareRow(row);
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(CardWrapper, { className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
        'card-selected': bulkSelectEnabled && row.isSelected,
        'bulk-select': bulkSelectEnabled }),
      key: row.id, onClick: e => handleClick(e, row.toggleRowSelected), role: "none" },
    renderCard({ ...row.original, loading }));

  }));

};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(CardContainer, "CardContainer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\CardCollection.tsx");reactHotLoader.register(CardWrapper, "CardWrapper", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\CardCollection.tsx");reactHotLoader.register(CardCollection, "CardCollection", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\CardCollection.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ListView/CardSortSelect.tsx":
/*!****************************************************!*\
  !*** ./src/components/ListView/CardSortSelect.tsx ***!
  \****************************************************/
/*! exports provided: CardSortSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardSortSelect", function() { return CardSortSelect; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@emotion/react/dist/emotion-element-4fbd89c5.browser.esm.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var src_components_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Select */ "./src/components/Select/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/components/ListView/utils.ts");
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




const SortTitle = _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["styled"].label`
  font-weight: bold;
  line-height: 27px;
  margin: 0 0.4em 0 0;
`;
const SortContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["styled"].div`
  display: inline-flex;
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  padding-top: ${({ theme }) => theme.gridUnit}px;
  text-align: left;
`;
function StyledSelect({ onChange, options, selectStyles, theme, value }) {
  const filterSelectTheme = {
    spacing: {
      baseUnit: 1,
      fontSize: theme.typography.sizes.s,
      minWidth: '5em' } };


  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(src_components_Select__WEBPACK_IMPORTED_MODULE_6__["Select"], { "data-test": "card-sort-select", clearable: false, onChange: onChange, options: options, stylesConfig: selectStyles, themeConfig: filterSelectTheme, value: value });
}
const StyledCardSortSelect = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["b"])(StyledSelect);
const CardSortSelect = ({ initialSort, onChange, options, pageIndex, pageSize }) => {
  const defaultSort = initialSort && _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(options).call(options, ({ id }) => id === initialSort[0].id);
  const [selectedOption, setSelectedOption] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultSort || options[0]);
  const handleOnChange = selected => {
    setSelectedOption(selected);
    const sortBy = [{ id: selected.id, desc: selected.desc }];
    onChange({ pageIndex, pageSize, sortBy, filters: [] });
  };
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(SortContainer, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(SortTitle, null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Sort:')),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(StyledCardSortSelect, { onChange: value => handleOnChange(value), options: options, selectStyles: _utils__WEBPACK_IMPORTED_MODULE_7__["filterSelectStyles"], value: selectedOption }));

};__signature__(CardSortSelect, "useState{[selectedOption, setSelectedOption](defaultSort || options[0])}");;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(SortTitle, "SortTitle", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\CardSortSelect.tsx");reactHotLoader.register(SortContainer, "SortContainer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\CardSortSelect.tsx");reactHotLoader.register(StyledSelect, "StyledSelect", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\CardSortSelect.tsx");reactHotLoader.register(StyledCardSortSelect, "StyledCardSortSelect", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\CardSortSelect.tsx");reactHotLoader.register(CardSortSelect, "CardSortSelect", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\CardSortSelect.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ListView/Filters/Base.ts":
/*!*************************************************!*\
  !*** ./src/components/ListView/Filters/Base.ts ***!
  \*************************************************/
/*! exports provided: FilterContainer, FilterTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterContainer", function() { return FilterContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTitle", function() { return FilterTitle; });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;};
const FilterContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"].div`
  display: inline-flex;
  margin-right: 2em;
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  align-items: center;
`;
const FilterTitle = _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"].label`
  font-weight: bold;
  margin: 0 0.4em 0 0;
`;;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(FilterContainer, "FilterContainer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\Filters\\Base.ts");reactHotLoader.register(FilterTitle, "FilterTitle", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\Filters\\Base.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ListView/Filters/DateRange.tsx":
/*!*******************************************************!*\
  !*** ./src/components/ListView/Filters/DateRange.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateRangeFilter; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/is-array */ "./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var src_components_DatePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/DatePicker */ "./src/components/DatePicker/index.tsx");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Base */ "./src/components/ListView/Filters/Base.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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





const RangePicker = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["styled"])(src_components_DatePicker__WEBPACK_IMPORTED_MODULE_5__["RangePicker"])`
  padding: 0 11px;
  transform: translateX(-7px);
`;
const RangeFilterContainer = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["styled"])(_Base__WEBPACK_IMPORTED_MODULE_6__["FilterContainer"])`
  margin-right: 1em;
`;
function DateRangeFilter({ Header, initialValue, onSubmit }) {
  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialValue != null ? initialValue : null);
  const momentValue = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    if (!value || _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(value) && !value.length)
    return null;
    return [moment__WEBPACK_IMPORTED_MODULE_3___default()(value[0]), moment__WEBPACK_IMPORTED_MODULE_3___default()(value[1])];
  }, [value]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(RangeFilterContainer, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_Base__WEBPACK_IMPORTED_MODULE_6__["FilterTitle"], null, Header, ":"),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(RangePicker, { showTime: true, bordered: false, value: momentValue, onChange: momentRange => {var _momentRange$0$valueO, _momentRange$, _momentRange$1$valueO, _momentRange$2;
      if (!momentRange) {
        setValue(null);
        onSubmit([]);
        return;
      }
      const changeValue = [(_momentRange$0$valueO = (_momentRange$ =
      momentRange[0]) == null ? void 0 : _momentRange$.valueOf()) != null ? _momentRange$0$valueO : 0, (_momentRange$1$valueO = (_momentRange$2 =
      momentRange[1]) == null ? void 0 : _momentRange$2.valueOf()) != null ? _momentRange$1$valueO : 0];

      setValue(changeValue);
      onSubmit(changeValue);
    } }));

}__signature__(DateRangeFilter, "useState{[value, setValue](initialValue ?? null)}\nuseMemo{momentValue}");;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(RangePicker, "RangePicker", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\Filters\\DateRange.tsx");reactHotLoader.register(RangeFilterContainer, "RangeFilterContainer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\Filters\\DateRange.tsx");reactHotLoader.register(DateRangeFilter, "DateRangeFilter", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\Filters\\DateRange.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ListView/Filters/Search.tsx":
/*!****************************************************!*\
  !*** ./src/components/ListView/Filters/Search.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchFilter; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/SearchInput */ "./src/components/SearchInput/index.tsx");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Base */ "./src/components/ListView/Filters/Base.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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



function SearchFilter({ Header, name, initialValue, onSubmit }) {
  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValue || '');
  const handleSubmit = () => {
    if (value) {
      onSubmit(value);
    }
  };
  const onClear = () => {
    setValue('');
    onSubmit('');
  };
  const handleChange = e => {
    setValue(e.currentTarget.value);
    if (e.currentTarget.value === '') {
      onClear();
    }
  };
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_Base__WEBPACK_IMPORTED_MODULE_3__["FilterContainer"], null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(src_components_SearchInput__WEBPACK_IMPORTED_MODULE_2__["default"], { "data-test": "filters-search", placeholder: Header, name: name, value: value, onChange: handleChange, onSubmit: handleSubmit, onClear: onClear }));

}__signature__(SearchFilter, "useState{[value, setValue](initialValue || '')}");;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(SearchFilter, "SearchFilter", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\Filters\\Search.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ListView/Filters/Select.tsx":
/*!****************************************************!*\
  !*** ./src/components/ListView/Filters/Select.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@emotion/react/dist/emotion-element-4fbd89c5.browser.esm.js");
/* harmony import */ var src_components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Select */ "./src/components/Select/index.ts");
/* harmony import */ var src_components_ListView_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/ListView/utils */ "./src/components/ListView/utils.ts");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Base */ "./src/components/ListView/Filters/Base.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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





const CLEAR_SELECT_FILTER_VALUE = 'CLEAR_SELECT_FILTER_VALUE';
function SelectFilter({ Header, emptyLabel = 'None', fetchSelects, initialValue, onSelect, paginate = false, selects = [], theme }) {
  const filterSelectTheme = {
    spacing: {
      baseUnit: 2,
      fontSize: theme.typography.sizes.s,
      minWidth: '5em' } };


  const clearFilterSelect = {
    label: emptyLabel,
    value: CLEAR_SELECT_FILTER_VALUE };

  const options = [clearFilterSelect, ...selects];
  let initialOption = clearFilterSelect;
  // Set initial value if not async
  if (!fetchSelects) {
    const matchingOption = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(options).call(options, x => x.value === initialValue);
    if (matchingOption) {
      initialOption = matchingOption;
    }
  }
  const [selectedOption, setSelectedOption] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialOption);
  const onChange = selected => {
    if (selected === null)
    return;
    onSelect(selected.value === CLEAR_SELECT_FILTER_VALUE ? undefined : selected.value);
    setSelectedOption(selected);
  };
  const fetchAndFormatSelects = async (inputValue, loadedOptions, { page }) => {
    // only include clear filter when filter value does not exist
    let result = inputValue || page > 0 ? [] : [clearFilterSelect];
    let hasMore = paginate;
    if (fetchSelects) {
      const selectValues = await fetchSelects(inputValue, page);
      // update matching option at initial load
      if (!selectValues.length) {
        hasMore = false;
      }
      result = [...result, ...selectValues];
      const matchingOption = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(result).call(result, x => x.value === initialValue);
      if (matchingOption) {
        setSelectedOption(matchingOption);
      }
    }
    return {
      options: result,
      hasMore,
      additional: {
        page: page + 1 } };


  };
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_Base__WEBPACK_IMPORTED_MODULE_6__["FilterContainer"], null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_Base__WEBPACK_IMPORTED_MODULE_6__["FilterTitle"], null, Header, ":"),
  fetchSelects ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_Select__WEBPACK_IMPORTED_MODULE_4__["PaginatedSelect"], { "data-test": "filters-select", defaultOptions: true, themeConfig: filterSelectTheme, stylesConfig: src_components_ListView_utils__WEBPACK_IMPORTED_MODULE_5__["filterSelectStyles"]
    // @ts-ignore
    , value: selectedOption
    // @ts-ignore
    , onChange: onChange
    // @ts-ignore
    , loadOptions: fetchAndFormatSelects, placeholder: emptyLabel, clearable: false, additional: {
      page: 0 } }) :
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_Select__WEBPACK_IMPORTED_MODULE_4__["Select"], { "data-test": "filters-select", themeConfig: filterSelectTheme, stylesConfig: src_components_ListView_utils__WEBPACK_IMPORTED_MODULE_5__["filterSelectStyles"], value: selectedOption, options: options, onChange: onChange, clearable: false }));

}__signature__(SelectFilter, "useState{[selectedOption, setSelectedOption](initialOption)}");const _default =
Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["b"])(SelectFilter);/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(CLEAR_SELECT_FILTER_VALUE, "CLEAR_SELECT_FILTER_VALUE", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\Filters\\Select.tsx");reactHotLoader.register(SelectFilter, "SelectFilter", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\Filters\\Select.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\Filters\\Select.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ListView/Filters/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/ListView/Filters/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@emotion/react/dist/emotion-element-4fbd89c5.browser.esm.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Search */ "./src/components/ListView/Filters/Search.tsx");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Select */ "./src/components/ListView/Filters/Select.tsx");
/* harmony import */ var _DateRange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DateRange */ "./src/components/ListView/Filters/DateRange.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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





const FilterWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["styled"].div`
  display: inline-block;
`;
function UIFilters({ filters, internalFilters = [], updateFilterValue }) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(FilterWrapper, null,
  _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(filters).call(filters, ({ Header, fetchSelects, id, input, paginate, selects, unfilteredLabel }, index) => {
    const initialValue = internalFilters[index] && internalFilters[index].value;
    if (input === 'select') {
      return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_Select__WEBPACK_IMPORTED_MODULE_5__["default"], { Header: Header, emptyLabel: unfilteredLabel, fetchSelects: fetchSelects, initialValue: initialValue, key: id, name: id, onSelect: value => updateFilterValue(index, value), paginate: paginate, selects: selects });
    }
    if (input === 'search' && typeof Header === 'string') {
      return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_Search__WEBPACK_IMPORTED_MODULE_4__["default"], { Header: Header, initialValue: initialValue, key: id, name: id, onSubmit: value => updateFilterValue(index, value) });
    }
    if (input === 'datetime_range') {
      return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_DateRange__WEBPACK_IMPORTED_MODULE_6__["default"], { Header: Header, initialValue: initialValue, key: id, name: id, onSubmit: value => updateFilterValue(index, value) });
    }
    return null;
  }));

}const _default =
Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["b"])(UIFilters);/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(FilterWrapper, "FilterWrapper", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\Filters\\index.tsx");reactHotLoader.register(UIFilters, "UIFilters", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\Filters\\index.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\Filters\\index.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ListView/ListView.tsx":
/*!**********************************************!*\
  !*** ./src/components/ListView/ListView.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/reduce */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ "./node_modules/@babel/runtime-corejs3/helpers/extends.js");
/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/common/components */ "./src/common/components/index.tsx");
/* harmony import */ var src_components_Alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/Alert */ "./src/components/Alert/index.tsx");
/* harmony import */ var images_empty_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! images/empty.svg */ "./images/empty.svg");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_components_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/Button */ "./src/components/Button/index.tsx");
/* harmony import */ var src_components_Icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/components/Icon */ "./src/components/Icon/index.tsx");
/* harmony import */ var src_components_IndeterminateCheckbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/components/IndeterminateCheckbox */ "./src/components/IndeterminateCheckbox/index.tsx");
/* harmony import */ var src_components_dataViewCommon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/components/dataViewCommon */ "./src/components/dataViewCommon/index.ts");
/* harmony import */ var _CardCollection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./CardCollection */ "./src/components/ListView/CardCollection.tsx");
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Filters */ "./src/components/ListView/Filters/index.tsx");
/* harmony import */ var _CardSortSelect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./CardSortSelect */ "./src/components/ListView/CardSortSelect.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils */ "./src/components/ListView/utils.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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














const ListViewStyles = _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["styled"].div`
  text-align: center;

  .superset-list-view {
    text-align: left;
    border-radius: 4px 0;
    margin: 0 ${({ theme }) => theme.gridUnit * 4}px;

    .header {
      display: flex;
      padding-bottom: ${({ theme }) => theme.gridUnit * 4}px;

      .header-left {
        display: flex;
        flex: 5;
      }
      .header-right {
        flex: 1;
        text-align: right;
      }
    }

    .body.empty table {
      margin-bottom: 0;
    }

    .body {
      overflow-x: auto;
    }

    .ant-empty {
      .ant-empty-image {
        height: auto;
      }
    }
  }

  .pagination-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.gridUnit * 4}px;
  }

  .row-count-container {
    margin-top: ${({ theme }) => theme.gridUnit * 2}px;
    color: ${({ theme }) => theme.colors.grayscale.base};
  }
`;
const BulkSelectWrapper = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["styled"])(src_components_Alert__WEBPACK_IMPORTED_MODULE_8__["default"])`
  border-radius: 0;
  margin-bottom: 0;
  color: #3d3d3d;
  background-color: ${({ theme }) => theme.colors.primary.light4};

  .selectedCopy {
    display: inline-block;
    padding: ${({ theme }) => theme.gridUnit * 2}px 0;
  }

  .deselect-all {
    color: #1985a0;
    margin-left: ${({ theme }) => theme.gridUnit * 4}px;
  }

  .divider {
    margin: ${({ theme: { gridUnit } }) => `${-gridUnit * 2}px 0 ${-gridUnit * 2}px ${gridUnit * 4}px`};
    width: 1px;
    height: ${({ theme }) => theme.gridUnit * 8}px;
    box-shadow: inset -1px 0px 0px #dadada;
    display: inline-flex;
    vertical-align: middle;
    position: relative;
  }

  .ant-alert-close-icon {
    margin-top: ${({ theme }) => theme.gridUnit * 1.5}px;
  }
`;
const bulkSelectColumnConfig = {
  Cell: ({ row }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(src_components_IndeterminateCheckbox__WEBPACK_IMPORTED_MODULE_13__["default"], _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, row.getToggleRowSelectedProps(), { id: row.id })),
  Header: ({ getToggleAllRowsSelectedProps }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(src_components_IndeterminateCheckbox__WEBPACK_IMPORTED_MODULE_13__["default"], _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_3___default()({}, getToggleAllRowsSelectedProps(), { id: "header-toggle-all" })),
  id: 'selection',
  size: 'sm' };

const ViewModeContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["styled"].div`
  padding-right: ${({ theme }) => theme.gridUnit * 4}px;
  display: inline-block;

  .toggle-button {
    display: inline-block;
    border-radius: ${({ theme }) => theme.gridUnit / 2}px;
    padding: ${({ theme }) => theme.gridUnit}px;
    padding-bottom: 0;

    &:first-of-type {
      margin-right: ${({ theme }) => theme.gridUnit * 2}px;
    }
  }

  .active {
    background-color: ${({ theme }) => theme.colors.grayscale.base};
    svg {
      color: ${({ theme }) => theme.colors.grayscale.light5};
    }
  }
`;
const EmptyWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["styled"].div`
  padding: ${({ theme }) => theme.gridUnit * 40}px 0;

  &.table {
    background: ${({ theme }) => theme.colors.grayscale.light5};
  }
`;
const ViewModeToggle = ({ mode, setMode }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(ViewModeContainer, null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("div", { role: "button", tabIndex: 0, onClick: e => {
    e.currentTarget.blur();
    setMode('card');
  }, className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('toggle-button', { active: mode === 'card' }) },
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(src_components_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], { name: "card-view" })),

Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("div", { role: "button", tabIndex: 0, onClick: e => {
    e.currentTarget.blur();
    setMode('table');
  }, className: classnames__WEBPACK_IMPORTED_MODULE_10___default()('toggle-button', { active: mode === 'table' }) },
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(src_components_Icon__WEBPACK_IMPORTED_MODULE_12__["default"], { name: "list-view" })));


function ListView({ columns, data, count, pageSize: initialPageSize, fetchData, loading, initialSort = [], className = '', filters = [], bulkActions = [], bulkSelectEnabled = false, disableBulkSelect = () => {}, renderBulkSelectCopy = selected => Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('%s Selected', selected.length), renderCard, cardSortSelectOptions, defaultViewMode = 'card', highlightRowId, emptyState = {} }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, pageCount = 1, gotoPage, applyFilterValue, selectedFlatRows, toggleAllRowsSelected, setViewMode, state: { pageIndex, pageSize, internalFilters, viewMode } } = Object(_utils__WEBPACK_IMPORTED_MODULE_18__["useListViewState"])({
    bulkSelectColumnConfig,
    bulkSelectMode: bulkSelectEnabled && Boolean(bulkActions.length),
    columns,
    count,
    data,
    fetchData,
    initialPageSize,
    initialSort,
    initialFilters: filters,
    renderCard: Boolean(renderCard),
    defaultViewMode });

  const filterable = Boolean(filters.length);
  if (filterable) {
    const columnAccessors = _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_2___default()(columns).call(columns, (acc, col) => ({ ...acc, [col.id || col.accessor]: true }), {});
    _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_1___default()(filters).call(filters, f => {
      if (!columnAccessors[f.id]) {
        throw new _utils__WEBPACK_IMPORTED_MODULE_18__["ListViewError"](`Invalid filter config, ${f.id} is not present in columns`);
      }
    });
  }
  const cardViewEnabled = Boolean(renderCard);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    // discard selections if bulk select is disabled
    if (!bulkSelectEnabled)
    toggleAllRowsSelected(false);
  }, [bulkSelectEnabled, toggleAllRowsSelected]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(ListViewStyles, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("div", { "data-test": className, className: `superset-list-view ${className}` },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("div", { className: "header" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("div", { className: "header-left" },
  cardViewEnabled && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(ViewModeToggle, { mode: viewMode, setMode: setViewMode }),
  filterable && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_Filters__WEBPACK_IMPORTED_MODULE_16__["default"], { filters: filters, internalFilters: internalFilters, updateFilterValue: applyFilterValue })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("div", { className: "header-right" },
  viewMode === 'card' && cardSortSelectOptions && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_CardSortSelect__WEBPACK_IMPORTED_MODULE_17__["CardSortSelect"], { initialSort: initialSort, onChange: fetchData, options: cardSortSelectOptions, pageIndex: pageIndex, pageSize: pageSize }))),


  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("div", { className: `body ${rows.length === 0 ? 'empty' : ''}` },
  bulkSelectEnabled && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(BulkSelectWrapper, { "data-test": "bulk-select-controls", type: "info", closable: true, showIcon: false, onClose: disableBulkSelect, message: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null,
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("div", { className: "selectedCopy", "data-test": "bulk-select-copy" },
    renderBulkSelectCopy(selectedFlatRows)),

    Boolean(selectedFlatRows.length) && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null,
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("span", { "data-test": "bulk-select-deselect-all", role: "button", tabIndex: 0, className: "deselect-all", onClick: () => toggleAllRowsSelected(false) },
    Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Deselect all')),

    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("div", { className: "divider" }),
    _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(bulkActions).call(bulkActions, action => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(src_components_Button__WEBPACK_IMPORTED_MODULE_11__["default"], { "data-test": "bulk-select-action", key: action.key, buttonStyle: action.type, cta: true, onClick: () => action.onSelect(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(selectedFlatRows).call(selectedFlatRows, r => r.original)) },
    action.name)))) }),



  viewMode === 'card' && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_CardCollection__WEBPACK_IMPORTED_MODULE_15__["default"], { bulkSelectEnabled: bulkSelectEnabled, prepareRow: prepareRow, renderCard: renderCard, rows: rows, loading: loading }),
  viewMode === 'table' && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(src_components_dataViewCommon__WEBPACK_IMPORTED_MODULE_14__["TableCollection"], { getTableProps: getTableProps, getTableBodyProps: getTableBodyProps, prepareRow: prepareRow, headerGroups: headerGroups, rows: rows, columns: columns, loading: loading, highlightRowId: highlightRowId }),
  !loading && rows.length === 0 && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(EmptyWrapper, { className: viewMode },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_7__["Empty"], { image: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(images_empty_svg__WEBPACK_IMPORTED_MODULE_9__["ReactComponent"], null), description: emptyState.message || Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('No Data') },
  emptyState.slot || null)))),





  rows.length > 0 && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("div", { className: "pagination-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(src_components_dataViewCommon__WEBPACK_IMPORTED_MODULE_14__["Pagination"], { totalPages: pageCount || 0, currentPage: pageCount ? pageIndex + 1 : 0, onChange: p => gotoPage(p - 1), hideFirstAndLastPageLinks: true }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("div", { className: "row-count-container" },
  !loading &&
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('%s-%s of %s', pageSize * pageIndex + (rows.length && 1), pageSize * pageIndex + rows.length, count))));



}__signature__(ListView, "useListViewState{{ getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, pageCount = 1, gotoPage, applyFilterValue, selectedFlatRows, toggleAllRowsSelected, setViewMode, state: { pageIndex, pageSize, internalFilters, viewMode }, }}\nuseEffect{}", () => [_utils__WEBPACK_IMPORTED_MODULE_18__["useListViewState"]]);const _default =
ListView;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(ListViewStyles, "ListViewStyles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\ListView.tsx");reactHotLoader.register(BulkSelectWrapper, "BulkSelectWrapper", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\ListView.tsx");reactHotLoader.register(bulkSelectColumnConfig, "bulkSelectColumnConfig", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\ListView.tsx");reactHotLoader.register(ViewModeContainer, "ViewModeContainer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\ListView.tsx");reactHotLoader.register(EmptyWrapper, "EmptyWrapper", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\ListView.tsx");reactHotLoader.register(ViewModeToggle, "ViewModeToggle", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\ListView.tsx");reactHotLoader.register(ListView, "ListView", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\ListView.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\ListView.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ListView/index.ts":
/*!******************************************!*\
  !*** ./src/components/ListView/index.ts ***!
  \******************************************/
/*! exports provided: FilterOperator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListView */ "./src/components/ListView/ListView.tsx");
/* empty/unused harmony star reexport *//* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/components/ListView/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterOperator", function() { return _types__WEBPACK_IMPORTED_MODULE_1__["FilterOperator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ListView__WEBPACK_IMPORTED_MODULE_0__["default"]; });

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**
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




/***/ }),

/***/ "./src/components/ListView/types.ts":
/*!******************************************!*\
  !*** ./src/components/ListView/types.ts ***!
  \******************************************/
/*! exports provided: FilterOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterOperator", function() { return FilterOperator; });
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;};var FilterOperator;
(function (FilterOperator) {
  FilterOperator["startsWith"] = "sw";
  FilterOperator["endsWith"] = "ew";
  FilterOperator["contains"] = "ct";
  FilterOperator["equals"] = "eq";
  FilterOperator["notStartsWith"] = "nsw";
  FilterOperator["notEndsWith"] = "new";
  FilterOperator["notContains"] = "nct";
  FilterOperator["notEquals"] = "neq";
  FilterOperator["greaterThan"] = "gt";
  FilterOperator["lessThan"] = "lt";
  FilterOperator["relationManyMany"] = "rel_m_m";
  FilterOperator["relationOneMany"] = "rel_o_m";
  FilterOperator["titleOrSlug"] = "title_or_slug";
  FilterOperator["nameOrDescription"] = "name_or_description";
  FilterOperator["allText"] = "all_text";
  FilterOperator["chartAllText"] = "chart_all_text";
  FilterOperator["datasetIsNullOrEmpty"] = "dataset_is_null_or_empty";
  FilterOperator["between"] = "between";
  FilterOperator["dashboardIsFav"] = "dashboard_is_favorite";
  FilterOperator["chartIsFav"] = "chart_is_favorite";
})(FilterOperator || (FilterOperator = {}));;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(FilterOperator, "FilterOperator", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\types.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/ListView/utils.ts":
/*!******************************************!*\
  !*** ./src/components/ListView/utils.ts ***!
  \******************************************/
/*! exports provided: ListViewError, removeFromList, convertFilters, convertFiltersRison, extractInputValue, useListViewState, filterSelectStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewError", function() { return ListViewError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromList", function() { return removeFromList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertFilters", function() { return convertFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertFiltersRison", function() { return convertFiltersRison; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractInputValue", function() { return extractInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useListViewState", function() { return useListViewState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSelectStyles", function() { return filterSelectStyles; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/for-each */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_flat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/flat */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/flat.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_flat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_flat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/is-array */ "./node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-table */ "./node_modules/react-table/index.js");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var use_query_params__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! use-query-params */ "./node_modules/use-query-params/esm/index.js");
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rison */ "./node_modules/rison/js/rison.js");
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rison__WEBPACK_IMPORTED_MODULE_13__);
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





// Define custom RisonParam for proper encoding/decoding
const RisonParam = {
  encode: data => data === undefined ? undefined : rison__WEBPACK_IMPORTED_MODULE_13___default.a.encode(data),
  decode: dataStr => dataStr === undefined || _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_8___default()(dataStr) ?
  undefined :
  rison__WEBPACK_IMPORTED_MODULE_13___default.a.decode(dataStr) };

class ListViewError extends Error {
  constructor() {
    super(...arguments);
    this.name = 'ListViewError';
  } // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {// @ts-ignore
    this[key] = eval(code);}} // removes element from a list, returns new list
function removeFromList(list, index) {
  return _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7___default()(list).call(list, (_, i) => index !== i);
}
// apply update to elements of object list, returns new list
function updateInList(list, index, update) {
  const element = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_6___default()(list).call(list, (_, i) => index === i);
  return [
  ..._babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5___default()(list).call(list, 0, index),
  { ...element, ...update },
  ..._babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_5___default()(list).call(list, index + 1)];

}
function mergeCreateFilterValues(list, updateObj) {
  return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default()(list).call(list, ({ id, urlDisplay, operator }) => {
    const currentFilterId = urlDisplay || id;
    const update = updateObj[currentFilterId];
    return { id, urlDisplay, operator, value: update };
  });
}
// convert filters from UI objects to data objects
function convertFilters(fts) {var _context, _context2;
  return _babel_runtime_corejs3_core_js_stable_instance_flat__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default()(_context2 = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_7___default()(fts).call(fts,
  f => !(typeof f.value === 'undefined' ||
  _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_8___default()(f.value) && !f.value.length))).call(_context2,
  ({ value, operator, id }) => {
    // handle between filter using 2 api filters
    if (operator === 'between' && _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_8___default()(value)) {
      return [
      {
        value: value[0],
        operator: 'gt',
        id },

      {
        value: value[1],
        operator: 'lt',
        id }];


    }
    return {
      value,
      operator,
      id };

  })).call(_context);

}
// convertFilters but to handle new decoded rison format
function convertFiltersRison(filterObj, list) {var _context3;
  const filters = [];
  const refs = {};
  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(_context3 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(filterObj)).call(_context3, id => {
    const filter = {
      id,
      value: filterObj[id] };

    refs[id] = filter;
    filters.push(filter);
  });
  // Add operators from filter list
  _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(list).call(list, value => {
    const currentFilterId = value.urlDisplay || value.id;
    const filter = refs[currentFilterId];
    if (filter) {
      filter.operator = value.operator;
      filter.id = value.id;
    }
  });
  return filters;
}
function extractInputValue(inputType, event) {
  if (!inputType || inputType === 'text') {
    return event.currentTarget.value;
  }
  if (inputType === 'checkbox') {
    return event.currentTarget.checked;
  }
  return null;
}
function useListViewState({ fetchData, columns, data, count, initialPageSize, initialFilters = [], initialSort = [], bulkSelectMode = false, bulkSelectColumnConfig, renderCard = false, defaultViewMode = 'card' }) {
  const [query, setQuery] = Object(use_query_params__WEBPACK_IMPORTED_MODULE_12__["useQueryParams"])({
    filters: RisonParam,
    pageIndex: use_query_params__WEBPACK_IMPORTED_MODULE_12__["NumberParam"],
    sortColumn: use_query_params__WEBPACK_IMPORTED_MODULE_12__["StringParam"],
    sortOrder: use_query_params__WEBPACK_IMPORTED_MODULE_12__["StringParam"],
    viewMode: use_query_params__WEBPACK_IMPORTED_MODULE_12__["StringParam"] });

  const initialSortBy = Object(react__WEBPACK_IMPORTED_MODULE_10__["useMemo"])(() => query.sortColumn && query.sortOrder ?
  [{ id: query.sortColumn, desc: query.sortOrder === 'desc' }] :
  initialSort, [query.sortColumn, query.sortOrder]);
  const initialState = {
    filters: query.filters ?
    convertFiltersRison(query.filters, initialFilters) :
    [],
    pageIndex: query.pageIndex || 0,
    pageSize: initialPageSize,
    sortBy: initialSortBy };

  const [viewMode, setViewMode] = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(query.viewMode || (
  renderCard ? defaultViewMode : 'table'));
  const columnsWithSelect = Object(react__WEBPACK_IMPORTED_MODULE_10__["useMemo"])(() => {
    // add exact filter type so filters with falsey values are not filtered out
    const columnsWithFilter = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_4___default()(columns).call(columns, f => ({ ...f, filter: 'exact' }));
    return bulkSelectMode ?
    [bulkSelectColumnConfig, ...columnsWithFilter] :
    columnsWithFilter;
  }, [bulkSelectMode, columns]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, canPreviousPage, canNextPage, pageCount, gotoPage, setAllFilters, selectedFlatRows, toggleAllRowsSelected, state: { pageIndex, pageSize, sortBy, filters } } = Object(react_table__WEBPACK_IMPORTED_MODULE_11__["useTable"])({
    columns: columnsWithSelect,
    count,
    data,
    disableFilters: true,
    disableSortRemove: true,
    initialState,
    manualFilters: true,
    manualPagination: true,
    manualSortBy: true,
    autoResetFilters: false,
    pageCount: Math.ceil(count / initialPageSize) },
  react_table__WEBPACK_IMPORTED_MODULE_11__["useFilters"], react_table__WEBPACK_IMPORTED_MODULE_11__["useSortBy"], react_table__WEBPACK_IMPORTED_MODULE_11__["usePagination"], react_table__WEBPACK_IMPORTED_MODULE_11__["useRowState"], react_table__WEBPACK_IMPORTED_MODULE_11__["useRowSelect"]);
  const [internalFilters, setInternalFilters] = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(query.filters && initialFilters.length ?
  mergeCreateFilterValues(initialFilters, query.filters) :
  []);
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(() => {
    if (initialFilters.length) {
      setInternalFilters(mergeCreateFilterValues(initialFilters, query.filters ? query.filters : {}));
    }
  }, [initialFilters]);
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(() => {
    // From internalFilters, produce a simplified obj
    const filterObj = {};
    _babel_runtime_corejs3_core_js_stable_instance_for_each__WEBPACK_IMPORTED_MODULE_2___default()(internalFilters).call(internalFilters, filter => {
      if (filter.value !== undefined && (
      typeof filter.value !== 'string' || filter.value.length > 0)) {
        const currentFilterId = filter.urlDisplay || filter.id;
        filterObj[currentFilterId] = filter.value;
      }
    });
    const queryParams = {
      filters: _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(filterObj).length ? filterObj : undefined,
      pageIndex };

    if (sortBy[0]) {
      queryParams.sortColumn = sortBy[0].id;
      queryParams.sortOrder = sortBy[0].desc ? 'desc' : 'asc';
    }
    if (renderCard) {
      queryParams.viewMode = viewMode;
    }
    const method = typeof query.pageIndex !== 'undefined' &&
    queryParams.pageIndex !== query.pageIndex ?
    'push' :
    'replace';
    setQuery(queryParams, method);
    fetchData({ pageIndex, pageSize, sortBy, filters });
  }, [fetchData, pageIndex, pageSize, sortBy, filters]);
  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(() => {
    if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_9___default()(initialState.pageIndex, pageIndex)) {
      gotoPage(initialState.pageIndex);
    }
  }, [query]);
  const applyFilterValue = (index, value) => {
    setInternalFilters(currentInternalFilters => {
      // skip redunundant updates
      if (currentInternalFilters[index].value === value) {
        return currentInternalFilters;
      }
      const update = { ...currentInternalFilters[index], value };
      const updatedFilters = updateInList(currentInternalFilters, index, update);
      setAllFilters(convertFilters(updatedFilters));
      gotoPage(0); // clear pagination on filter
      return updatedFilters;
    });
  };
  return {
    canNextPage,
    canPreviousPage,
    getTableBodyProps,
    getTableProps,
    gotoPage,
    headerGroups,
    pageCount,
    prepareRow,
    rows,
    selectedFlatRows,
    setAllFilters,
    state: { pageIndex, pageSize, sortBy, filters, internalFilters, viewMode },
    toggleAllRowsSelected,
    applyFilterValue,
    setViewMode };

}__signature__(useListViewState, "useQueryParams{[query, setQuery]}\nuseMemo{initialSortBy}\nuseState{[viewMode, setViewMode](query.viewMode ||\r\n        (renderCard ? defaultViewMode : 'table'))}\nuseMemo{columnsWithSelect}\nuseTable{{ getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, canPreviousPage, canNextPage, pageCount, gotoPage, setAllFilters, selectedFlatRows, toggleAllRowsSelected, state: { pageIndex, pageSize, sortBy, filters }, }}\nuseState{[internalFilters, setInternalFilters](query.filters && initialFilters.length\r\n        ? mergeCreateFilterValues(initialFilters, query.filters)\r\n        : [])}\nuseEffect{}\nuseEffect{}\nuseEffect{}", () => [use_query_params__WEBPACK_IMPORTED_MODULE_12__["useQueryParams"], react_table__WEBPACK_IMPORTED_MODULE_11__["useTable"]]);
const filterSelectStyles = {
  container: (provider, { getValue }) => ({
    ...provider,
    // dynamic width based on label string length
    minWidth: `${Math.min(12, Math.max(5, 3 + getValue()[0].label.length / 2))}em` }),

  control: provider => ({
    ...provider,
    borderWidth: 0,
    boxShadow: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent' }) };;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(RisonParam, "RisonParam", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\utils.ts");reactHotLoader.register(ListViewError, "ListViewError", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\utils.ts");reactHotLoader.register(removeFromList, "removeFromList", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\utils.ts");reactHotLoader.register(updateInList, "updateInList", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\utils.ts");reactHotLoader.register(mergeCreateFilterValues, "mergeCreateFilterValues", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\utils.ts");reactHotLoader.register(convertFilters, "convertFilters", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\utils.ts");reactHotLoader.register(convertFiltersRison, "convertFiltersRison", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\utils.ts");reactHotLoader.register(extractInputValue, "extractInputValue", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\utils.ts");reactHotLoader.register(useListViewState, "useListViewState", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\utils.ts");reactHotLoader.register(filterSelectStyles, "filterSelectStyles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\ListView\\utils.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/RefreshLabel/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/RefreshLabel/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/Tooltip */ "./src/components/Tooltip/index.tsx");
/* harmony import */ var src_components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/Icon */ "./src/components/Icon/index.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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



const RefreshLabel = ({ onClick, tooltipContent }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const IconWithoutRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(src_components_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], props));
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], { title: tooltipContent },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(IconWithoutRef, { role: "button", onClick: onClick, name: "refresh", css: theme => ({
      cursor: 'pointer',
      color: theme.colors.grayscale.base,
      '&:hover': { color: theme.colors.primary.base } }) }));


};const _default =
RefreshLabel;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(RefreshLabel, "RefreshLabel", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\RefreshLabel\\index.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\RefreshLabel\\index.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/SearchInput/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/SearchInput/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchInput; });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/Icon */ "./src/components/Icon/index.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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



const SearchInputWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"].div`
  position: relative;
`;
const StyledInput = _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"].input`
  width: 200px;
  height: ${({ theme }) => theme.gridUnit * 8}px;
  background-image: none;
  border: 1px solid ${({ theme }) => theme.colors.secondary.light2};
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  padding: 4px 28px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: none;
  }
`;
const commonStyles = `
  position: absolute;
  z-index: 2;
  display: block;
  cursor: pointer;
`;
const SearchIcon = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"])(src_components_Icon__WEBPACK_IMPORTED_MODULE_2__["default"])`
  ${commonStyles};
  top: 4px;
  left: 2px;
`;
const ClearIcon = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"])(src_components_Icon__WEBPACK_IMPORTED_MODULE_2__["default"])`
  ${commonStyles};
  right: 0px;
  top: 4px;
`;
function SearchInput({ onChange, onClear, onSubmit, placeholder = 'Search', name, value }) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(SearchInputWrapper, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(SearchIcon, { "data-test": "search-submit", role: "button", name: "search", onClick: () => onSubmit() }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(StyledInput, { "data-test": "search-input", onKeyDown: e => {
      if (e.key === 'Enter') {
        onSubmit();
      }
    }, onBlur: () => onSubmit(), placeholder: placeholder, onChange: onChange, value: value, name: name }),
  value && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(ClearIcon, { "data-test": "search-clear", role: "button", name: "cancel-x", onClick: () => onClear() }));

};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(SearchInputWrapper, "SearchInputWrapper", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\SearchInput\\index.tsx");reactHotLoader.register(StyledInput, "StyledInput", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\SearchInput\\index.tsx");reactHotLoader.register(commonStyles, "commonStyles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\SearchInput\\index.tsx");reactHotLoader.register(SearchIcon, "SearchIcon", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\SearchInput\\index.tsx");reactHotLoader.register(ClearIcon, "ClearIcon", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\SearchInput\\index.tsx");reactHotLoader.register(SearchInput, "SearchInput", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\SearchInput\\index.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/TableSelector/index.tsx":
/*!************************************************!*\
  !*** ./src/components/TableSelector/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/promise */ "./node_modules/@babel/runtime-corejs3/core-js-stable/promise.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/connection/SupersetClient.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var src_components_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/Select */ "./src/components/Select/index.ts");
/* harmony import */ var src_components_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/Form */ "./src/components/Form/index.tsx");
/* harmony import */ var src_components_DatabaseSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/DatabaseSelector */ "./src/components/DatabaseSelector/index.tsx");
/* harmony import */ var src_components_RefreshLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/components/RefreshLabel */ "./src/components/RefreshLabel/index.tsx");
/* harmony import */ var src_components_CertifiedIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/CertifiedIcon */ "./src/components/CertifiedIcon/index.tsx");
/* harmony import */ var src_components_WarningIconWithTooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/components/WarningIconWithTooltip */ "./src/components/WarningIconWithTooltip/index.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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








const FieldTitle = _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["styled"].p`
  color: ${({ theme }) => theme.colors.secondary.light2};
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
  margin: 20px 0 10px 0;
  text-transform: uppercase;
`;
const TableSelectorWrapper = _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["styled"].div`
  .fa-refresh {
    padding-left: 9px;
  }

  .refresh-col {
    display: flex;
    align-items: center;
    width: 30px;
    margin-left: ${({ theme }) => theme.gridUnit}px;
  }

  .section {
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
  }

  .select {
    flex-grow: 1;
  }

  .divider {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary.light5};
    margin: 15px 0;
  }
`;
const TableLabel = _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["styled"].span`
  align-items: center;
  display: flex;
  white-space: nowrap;

  > svg,
  > small {
    margin-right: ${({ theme }) => theme.gridUnit}px;
  }
`;
const TableSelector = ({ database, dbId, formMode = false, getDbList, handleError, isDatabaseSelectEnabled = true, onChange, onDbChange, onSchemaChange, onSchemasLoad, onTableChange, onTablesLoad, readOnly = false, schema, sqlLabMode = true, tableName, tableNameSticky = true }) => {
  const [currentSchema, setCurrentSchema] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(schema);
  const [currentTableName, setCurrentTableName] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(tableName);
  const [tableLoading, setTableLoading] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const [tableOptions, setTableOptions] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]);
  function fetchTables(databaseId, schema, forceRefresh = false, substr = 'undefined') {
    const dbSchema = schema || currentSchema;
    const actualDbId = databaseId || dbId;
    if (actualDbId && dbSchema) {
      const encodedSchema = encodeURIComponent(dbSchema);
      const encodedSubstr = encodeURIComponent(substr);
      setTableLoading(true);
      setTableOptions([]);
      const endpoint = encodeURI(`/superset/tables/${actualDbId}/${encodedSchema}/${encodedSubstr}/${!!forceRefresh}/`);
      return _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"].get({ endpoint }).
      then(({ json }) => {var _context;
        const options = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context = json.options).call(_context, o => ({
          value: o.value,
          schema: o.schema,
          label: o.label,
          title: o.title,
          type: o.type,
          extra: o == null ? void 0 : o.extra }));

        setTableLoading(false);
        setTableOptions(options);
        if (onTablesLoad) {
          onTablesLoad(json.options);
        }
      }).
      catch(() => {
        setTableLoading(false);
        setTableOptions([]);
        handleError(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["t"])('Error while fetching table list'));
      });
    }
    setTableLoading(false);
    setTableOptions([]);
    return _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve();
  }
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (dbId && schema) {
      fetchTables();
    }
  }, [dbId, schema]);
  function onSelectionChange({ dbId, schema, tableName }) {
    setCurrentTableName(tableName);
    setCurrentSchema(schema);
    if (onChange) {
      onChange({ dbId, schema, tableName });
    }
  }
  function getTableNamesBySubStr(substr = 'undefined') {
    if (!dbId || !substr) {
      const options = [];
      return _babel_runtime_corejs3_core_js_stable_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve({ options });
    }
    const encodedSchema = encodeURIComponent(schema || '');
    const encodedSubstr = encodeURIComponent(substr);
    return _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["default"].get({
      endpoint: encodeURI(`/superset/tables/${dbId}/${encodedSchema}/${encodedSubstr}`) }).
    then(({ json }) => {var _context2;
      const options = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_2___default()(_context2 = json.options).call(_context2, o => ({
        value: o.value,
        schema: o.schema,
        label: o.label,
        title: o.title,
        type: o.type }));

      return { options };
    });
  }
  function changeTable(tableOpt) {
    if (!tableOpt) {
      setCurrentTableName('');
      return;
    }
    const schemaName = tableOpt.schema;
    const tableOptTableName = tableOpt.value;
    if (tableNameSticky) {
      onSelectionChange({
        dbId,
        schema: schemaName,
        tableName: tableOptTableName });

    }
    if (onTableChange) {
      onTableChange(tableOptTableName, schemaName);
    }
  }
  function changeSchema(schemaOpt, force = false) {
    const value = schemaOpt ? schemaOpt.value : null;
    if (onSchemaChange) {
      onSchemaChange(value);
    }
    onSelectionChange({
      dbId,
      schema: value,
      tableName: undefined });

    fetchTables(dbId, currentSchema, force);
  }
  function renderTableOption(option) {var _option$extra, _option$extra2;
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(TableLabel, { title: option.label },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("small", { className: "text-muted" },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("i", { className: `fa fa-${option.type === 'view' ? 'eye' : 'table'}` })),

    ((_option$extra = option.extra) == null ? void 0 : _option$extra.certification) && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(src_components_CertifiedIcon__WEBPACK_IMPORTED_MODULE_11__["default"], { certifiedBy: option.extra.certification.certified_by, details: option.extra.certification.details, size: 20 }),
    ((_option$extra2 = option.extra) == null ? void 0 : _option$extra2.warning_markdown) && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(src_components_WarningIconWithTooltip__WEBPACK_IMPORTED_MODULE_12__["default"], { warningMarkdown: option.extra.warning_markdown, size: 20 }),
    option.label);

  }
  function renderSelectRow(select, refreshBtn) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", { className: "section" },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("span", { className: "select" }, select),
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("span", { className: "refresh-col" }, refreshBtn));

  }
  function renderDatabaseSelector() {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(src_components_DatabaseSelector__WEBPACK_IMPORTED_MODULE_9__["default"], { dbId: dbId, formMode: formMode, getDbList: getDbList, getTableList: fetchTables, handleError: handleError, onChange: onSelectionChange, onDbChange: readOnly ? undefined : onDbChange, onSchemaChange: readOnly ? undefined : onSchemaChange, onSchemasLoad: onSchemasLoad, schema: currentSchema, sqlLabMode: sqlLabMode, isDatabaseSelectEnabled: isDatabaseSelectEnabled && !readOnly, readOnly: readOnly });
  }
  function renderTableSelect() {
    const options = tableOptions;
    let select = null;
    if (currentSchema && !formMode) {
      // dataset editor
      select = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(src_components_Select__WEBPACK_IMPORTED_MODULE_7__["Select"], { name: "select-table", isLoading: tableLoading, ignoreAccents: false, placeholder: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["t"])('Select table or type table name'), autosize: false, onChange: changeTable, options: options
        // @ts-ignore
        , value: currentTableName, optionRenderer: renderTableOption, valueRenderer: renderTableOption, isDisabled: readOnly });
    } else
    if (formMode) {
      select = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(src_components_Select__WEBPACK_IMPORTED_MODULE_7__["CreatableSelect"], { name: "select-table", isLoading: tableLoading, ignoreAccents: false, placeholder: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["t"])('Select table or type table name'), autosize: false, onChange: changeTable, options: options
        // @ts-ignore
        , value: currentTableName, optionRenderer: renderTableOption });
    } else
    {
      // sql lab
      let tableSelectPlaceholder;
      let tableSelectDisabled = false;
      if (database && database.allow_multi_schema_metadata_fetch) {
        tableSelectPlaceholder = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["t"])('Type to search ...');
      } else
      {
        tableSelectPlaceholder = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["t"])('Select table ');
        tableSelectDisabled = true;
      }
      select = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(src_components_Select__WEBPACK_IMPORTED_MODULE_7__["AsyncSelect"], { name: "async-select-table", placeholder: tableSelectPlaceholder, isDisabled: tableSelectDisabled, autosize: false, onChange: changeTable
        // @ts-ignore
        , value: currentTableName, loadOptions: getTableNamesBySubStr, optionRenderer: renderTableOption });
    }
    const refresh = !formMode && !readOnly && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(src_components_RefreshLabel__WEBPACK_IMPORTED_MODULE_10__["default"], { onClick: () => changeSchema({ value: schema }, true), tooltipContent: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["t"])('Force refresh table list') });
    return renderSelectRow(select, refresh);
  }
  function renderSeeTableLabel() {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", { className: "section" },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(src_components_Form__WEBPACK_IMPORTED_MODULE_8__["FormLabel"], null,
    Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["t"])('See table schema'), ' ',
    schema && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("small", null,
    tableOptions.length, " in",
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("i", null, schema))));



  }
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(TableSelectorWrapper, null,
  renderDatabaseSelector(),
  !formMode && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", { className: "divider" }),
  sqlLabMode && renderSeeTableLabel(),
  formMode && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(FieldTitle, null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["t"])('Table')),
  renderTableSelect());

};__signature__(TableSelector, "useState{[currentSchema, setCurrentSchema](schema)}\nuseState{[currentTableName, setCurrentTableName](tableName)}\nuseState{[tableLoading, setTableLoading](false)}\nuseState{[tableOptions, setTableOptions]([])}\nuseEffect{}");const _default =
TableSelector;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(FieldTitle, "FieldTitle", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\TableSelector\\index.tsx");reactHotLoader.register(TableSelectorWrapper, "TableSelectorWrapper", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\TableSelector\\index.tsx");reactHotLoader.register(TableLabel, "TableLabel", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\TableSelector\\index.tsx");reactHotLoader.register(TableSelector, "TableSelector", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\TableSelector\\index.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\TableSelector\\index.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/views/CRUD/data/common.ts":
/*!***************************************!*\
  !*** ./src/views/CRUD/data/common.ts ***!
  \***************************************/
/*! exports provided: commonMenuData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonMenuData", function() { return commonMenuData; });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
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

const commonMenuData = {
  name: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["t"])('Data'),
  tabs: [
  {
    name: 'Databases',
    label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["t"])('Databases'),
    url: '/databaseview/list/',
    usesRouter: true },

  {
    name: 'Datasets',
    label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["t"])('Datasets'),
    url: '/tablemodelview/list/',
    usesRouter: true },

  {
    name: 'Saved queries',
    label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["t"])('Saved queries'),
    url: '/savedqueryview/list/',
    usesRouter: true },

  {
    name: 'Query history',
    label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["t"])('Query history'),
    url: '/superset/sqllab/history/',
    usesRouter: true }] };;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(commonMenuData, "commonMenuData", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\common.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/views/CRUD/data/dataset/AddDatasetModal.tsx":
/*!*********************************************************!*\
  !*** ./src/views/CRUD/data/dataset/AddDatasetModal.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNil */ "./node_modules/lodash/isNil.js");
/* harmony import */ var lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNil__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/views/CRUD/hooks */ "./src/views/CRUD/hooks.ts");
/* harmony import */ var src_components_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/Modal */ "./src/components/Modal/index.ts");
/* harmony import */ var src_components_TableSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/TableSelector */ "./src/components/TableSelector/index.tsx");
/* harmony import */ var src_messageToasts_enhancers_withToasts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/messageToasts/enhancers/withToasts */ "./src/messageToasts/enhancers/withToasts.tsx");
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







const TableSelectorContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["styled"].div`
  padding-bottom: 340px;
  width: 65%;
`;
const DatasetModal = ({ addDangerToast, addSuccessToast, onDatasetAdd, onHide, show }) => {
  const [currentSchema, setSchema] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const [currentTableName, setTableName] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const [datasourceId, setDatasourceId] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);
  const [disableSave, setDisableSave] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true);
  const { createResource } = Object(src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_6__["useSingleViewResource"])('dataset', Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('dataset'), addDangerToast);
  const onChange = ({ dbId, schema, tableName }) => {
    setDatasourceId(dbId);
    setDisableSave(lodash_isNil__WEBPACK_IMPORTED_MODULE_1___default()(dbId) || lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(tableName));
    setSchema(schema);
    setTableName(tableName);
  };
  const onSave = () => {
    const data = {
      database: datasourceId,
      ...(currentSchema ? { schema: currentSchema } : {}),
      table_name: currentTableName };

    createResource(data).then(response => {
      if (!response) {
        return;
      }
      if (onDatasetAdd) {
        onDatasetAdd({ id: response.id, ...response });
      }
      addSuccessToast(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('The dataset has been saved'));
      onHide();
    });
  };
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_components_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], { disablePrimaryButton: disableSave, onHandledPrimaryAction: onSave, onHide: onHide, primaryButtonName: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Add'), show: show, title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Add dataset') },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(TableSelectorContainer, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_components_TableSelector__WEBPACK_IMPORTED_MODULE_8__["default"], { clearable: false, dbId: datasourceId, formMode: true, handleError: addDangerToast, onChange: onChange, schema: currentSchema, tableName: currentTableName })));


};__signature__(DatasetModal, "useState{[currentSchema, setSchema]('')}\nuseState{[currentTableName, setTableName]('')}\nuseState{[datasourceId, setDatasourceId](0)}\nuseState{[disableSave, setDisableSave](true)}\nuseSingleViewResource{{ createResource }}", () => [src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_6__["useSingleViewResource"]]);const _default =
Object(src_messageToasts_enhancers_withToasts__WEBPACK_IMPORTED_MODULE_9__["default"])(DatasetModal);/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(TableSelectorContainer, "TableSelectorContainer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\dataset\\AddDatasetModal.tsx");reactHotLoader.register(DatasetModal, "DatasetModal", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\dataset\\AddDatasetModal.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\dataset\\AddDatasetModal.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/views/CRUD/data/dataset/DatasetList.tsx":
/*!*****************************************************!*\
  !*** ./src/views/CRUD/data/dataset/DatasetList.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/reduce */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/slice */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/connection/SupersetClient.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rison */ "./node_modules/rison/js/rison.js");
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rison__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/views/CRUD/utils */ "./src/views/CRUD/utils.tsx");
/* harmony import */ var src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/views/CRUD/hooks */ "./src/views/CRUD/hooks.ts");
/* harmony import */ var src_components_ConfirmStatusChange__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/ConfirmStatusChange */ "./src/components/ConfirmStatusChange/index.tsx");
/* harmony import */ var src_datasource_DatasourceModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/datasource/DatasourceModal */ "./src/datasource/DatasourceModal.tsx");
/* harmony import */ var src_components_DeleteModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/components/DeleteModal */ "./src/components/DeleteModal/index.tsx");
/* harmony import */ var src_components_ListView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/components/ListView */ "./src/components/ListView/index.ts");
/* harmony import */ var src_components_Menu_SubMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/components/Menu/SubMenu */ "./src/components/Menu/SubMenu.tsx");
/* harmony import */ var src_views_CRUD_data_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/views/CRUD/data/common */ "./src/views/CRUD/data/common.ts");
/* harmony import */ var src_messageToasts_enhancers_withToasts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/messageToasts/enhancers/withToasts */ "./src/messageToasts/enhancers/withToasts.tsx");
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/components/Tooltip */ "./src/components/Tooltip/index.tsx");
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/components/Icons */ "./src/components/Icons/index.tsx");
/* harmony import */ var src_components_FacePile__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/components/FacePile */ "./src/components/FacePile/index.tsx");
/* harmony import */ var src_components_CertifiedIcon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/components/CertifiedIcon */ "./src/components/CertifiedIcon/index.tsx");
/* harmony import */ var src_components_ImportModal_index__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/components/ImportModal/index */ "./src/components/ImportModal/index.tsx");
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/featureFlags */ "./src/featureFlags.ts");
/* harmony import */ var src_components_WarningIconWithTooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/components/WarningIconWithTooltip */ "./src/components/WarningIconWithTooltip/index.tsx");
/* harmony import */ var _AddDatasetModal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./AddDatasetModal */ "./src/views/CRUD/data/dataset/AddDatasetModal.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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




















const PAGE_SIZE = 25;
const PASSWORDS_NEEDED_MESSAGE = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('The passwords for the databases below are needed in order to ' +
'import them together with the datasets. Please note that the ' +
'"Secure Extra" and "Certificate" sections of ' +
'the database configuration are not present in export files, and ' +
'should be added manually after the import if they are needed.');
const CONFIRM_OVERWRITE_MESSAGE = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('You are importing one or more datasets that already exist. ' +
'Overwriting might cause you to lose some of your work. Are you ' +
'sure you want to overwrite?');
const FlexRowContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["styled"].div`
  align-items: center;
  display: flex;

  > svg {
    margin-right: ${({ theme }) => theme.gridUnit}px;
  }
`;
const Actions = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["styled"].div`
  color: ${({ theme }) => theme.colors.grayscale.base};
`;
const DatasetList = ({ addDangerToast, addSuccessToast, user }) => {
  const { state: { loading, resourceCount: datasetCount, resourceCollection: datasets, bulkSelectEnabled }, hasPerm, fetchData, toggleBulkSelect, refreshData } = Object(src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_10__["useListViewResource"])('dataset', Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('dataset'), addDangerToast);
  const [datasetAddModalOpen, setDatasetAddModalOpen] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false);
  const [datasetCurrentlyDeleting, setDatasetCurrentlyDeleting] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null);
  const [datasetCurrentlyEditing, setDatasetCurrentlyEditing] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null);
  const [importingDataset, showImportModal] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false);
  const [passwordFields, setPasswordFields] = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]);
  const openDatasetImportModal = () => {
    showImportModal(true);
  };
  const closeDatasetImportModal = () => {
    showImportModal(false);
  };
  const handleDatasetImport = () => {
    showImportModal(false);
    refreshData();
  };
  const canEdit = hasPerm('can_write');
  const canDelete = hasPerm('can_write');
  const canCreate = hasPerm('can_write');
  const canExport = hasPerm('can_read');
  const initialSort = [{ id: 'changed_on_delta_humanized', desc: true }];
  const openDatasetEditModal = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(({ id }) => {
    _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"].get({
      endpoint: `/api/v1/dataset/${id}` }).

    then(({ json = {} }) => {var _context;
      const owners = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context = json.result.owners).call(_context, owner => owner.id);
      setDatasetCurrentlyEditing({ ...json.result, owners });
    }).
    catch(() => {
      addDangerToast(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('An error occurred while fetching dataset related data'));
    });
  }, [addDangerToast]);
  const openDatasetDeleteModal = dataset => _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"].get({
    endpoint: `/api/v1/dataset/${dataset.id}/related_objects` }).

  then(({ json = {} }) => {
    setDatasetCurrentlyDeleting({
      ...dataset,
      chart_count: json.charts.count,
      dashboard_count: json.dashboards.count });

  }).
  catch(Object(src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_9__["createErrorHandler"])(errMsg => Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('An error occurred while fetching dataset related data: %s', errMsg)));
  const columns = Object(react__WEBPACK_IMPORTED_MODULE_7__["useMemo"])(() => [
  {
    Cell: ({ row: { original: { kind } } }) => {
      if (kind === 'physical') {
        return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_18__["Tooltip"], { id: "physical-dataset-tooltip", title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Physical dataset') },
        Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_Icons__WEBPACK_IMPORTED_MODULE_19__["default"].DatasetPhysical, null));

      }
      return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_18__["Tooltip"], { id: "virtual-dataset-tooltip", title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Virtual dataset') },
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_Icons__WEBPACK_IMPORTED_MODULE_19__["default"].DatasetVirtual, null));

    },
    accessor: 'kind_icon',
    disableSortBy: true,
    size: 'xs' },

  {
    Cell: ({ row: { original: { extra, table_name: datasetTitle, explore_url: exploreURL } } }) => {
      const titleLink = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])("a", { href: exploreURL }, datasetTitle);
      try {
        const parsedExtra = JSON.parse(extra);
        return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(FlexRowContainer, null,
        (parsedExtra == null ? void 0 : parsedExtra.certification) && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_CertifiedIcon__WEBPACK_IMPORTED_MODULE_21__["default"], { certifiedBy: parsedExtra.certification.certified_by, details: parsedExtra.certification.details }),
        (parsedExtra == null ? void 0 : parsedExtra.warning_markdown) && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_WarningIconWithTooltip__WEBPACK_IMPORTED_MODULE_24__["default"], { warningMarkdown: parsedExtra.warning_markdown }),
        titleLink);

      }
      catch {
        return titleLink;
      }
    },
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Name'),
    accessor: 'table_name' },

  {
    Cell: ({ row: { original: { kind } } }) => {var _kind$;return ((_kind$ = kind[0]) == null ? void 0 : _kind$.toUpperCase()) + _babel_runtime_corejs3_core_js_stable_instance_slice__WEBPACK_IMPORTED_MODULE_2___default()(kind).call(kind, 1);},
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Type'),
    accessor: 'kind',
    disableSortBy: true,
    size: 'md' },

  {
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Database'),
    accessor: 'database.database_name',
    size: 'lg' },

  {
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Schema'),
    accessor: 'schema',
    size: 'lg' },

  {
    Cell: ({ row: { original: { changed_on_delta_humanized: changedOn } } }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])("span", { className: "no-wrap" }, changedOn),
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Modified'),
    accessor: 'changed_on_delta_humanized',
    size: 'xl' },

  {
    Cell: ({ row: { original: { changed_by_name: changedByName } } }) => changedByName,
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Modified by'),
    accessor: 'changed_by.first_name',
    size: 'xl' },

  {
    accessor: 'database',
    disableSortBy: true,
    hidden: true },

  {
    Cell: ({ row: { original: { owners = [] } } }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_FacePile__WEBPACK_IMPORTED_MODULE_20__["default"], { users: owners }),
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Owners'),
    id: 'owners',
    disableSortBy: true,
    size: 'lg' },

  {
    accessor: 'sql',
    hidden: true,
    disableSortBy: true },

  {
    Cell: ({ row: { original } }) => {
      const handleEdit = () => openDatasetEditModal(original);
      const handleDelete = () => openDatasetDeleteModal(original);
      const handleExport = () => handleBulkDatasetExport([original]);
      if (!canEdit && !canDelete && !canExport) {
        return null;
      }
      return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(Actions, { className: "actions" },
      canDelete && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_18__["Tooltip"], { id: "delete-action-tooltip", title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Delete'), placement: "bottom" },
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])("span", { role: "button", tabIndex: 0, className: "action-button", onClick: handleDelete },
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_Icons__WEBPACK_IMPORTED_MODULE_19__["default"].Trash, null))),


      canExport && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_18__["Tooltip"], { id: "export-action-tooltip", title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Export'), placement: "bottom" },
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])("span", { role: "button", tabIndex: 0, className: "action-button", onClick: handleExport },
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_Icons__WEBPACK_IMPORTED_MODULE_19__["default"].Share, null))),


      canEdit && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_18__["Tooltip"], { id: "edit-action-tooltip", title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Edit'), placement: "bottom" },
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])("span", { role: "button", tabIndex: 0, className: "action-button", onClick: handleEdit },
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_Icons__WEBPACK_IMPORTED_MODULE_19__["default"].EditAlt, null))));



    },
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Actions'),
    id: 'actions',
    hidden: !canEdit && !canDelete,
    disableSortBy: true }],

  [canEdit, canDelete, canExport, openDatasetEditModal]);
  const filterTypes = Object(react__WEBPACK_IMPORTED_MODULE_7__["useMemo"])(() => [
  {
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Owner'),
    id: 'owners',
    input: 'select',
    operator: src_components_ListView__WEBPACK_IMPORTED_MODULE_14__["FilterOperator"].relationManyMany,
    unfilteredLabel: 'All',
    fetchSelects: Object(src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_9__["createFetchRelated"])('dataset', 'owners', Object(src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_9__["createErrorHandler"])(errMsg => Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('An error occurred while fetching dataset owner values: %s', errMsg)), user.userId),
    paginate: true },

  {
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Database'),
    id: 'database',
    input: 'select',
    operator: src_components_ListView__WEBPACK_IMPORTED_MODULE_14__["FilterOperator"].relationOneMany,
    unfilteredLabel: 'All',
    fetchSelects: Object(src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_9__["createFetchRelated"])('dataset', 'database', Object(src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_9__["createErrorHandler"])(errMsg => Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('An error occurred while fetching datasets: %s', errMsg))),
    paginate: true },

  {
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Schema'),
    id: 'schema',
    input: 'select',
    operator: src_components_ListView__WEBPACK_IMPORTED_MODULE_14__["FilterOperator"].equals,
    unfilteredLabel: 'All',
    fetchSelects: Object(src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_9__["createFetchDistinct"])('dataset', 'schema', Object(src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_9__["createErrorHandler"])(errMsg => Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('An error occurred while fetching schema values: %s', errMsg))),
    paginate: true },

  {
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Type'),
    id: 'sql',
    input: 'select',
    operator: src_components_ListView__WEBPACK_IMPORTED_MODULE_14__["FilterOperator"].datasetIsNullOrEmpty,
    unfilteredLabel: 'All',
    selects: [
    { label: 'Virtual', value: false },
    { label: 'Physical', value: true }] },


  {
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Search'),
    id: 'table_name',
    input: 'search',
    operator: src_components_ListView__WEBPACK_IMPORTED_MODULE_14__["FilterOperator"].contains }],

  []);
  const menuData = {
    activeChild: 'Datasets',
    ...src_views_CRUD_data_common__WEBPACK_IMPORTED_MODULE_16__["commonMenuData"] };

  const buttonArr = [];
  if (canDelete || canExport) {
    buttonArr.push({
      name: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Bulk select'),
      onClick: toggleBulkSelect,
      buttonStyle: 'secondary' });

  }
  if (canCreate) {
    buttonArr.push({
      name: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null,
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])("i", { className: "fa fa-plus" }), " ", Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Dataset'), ' '),

      onClick: () => setDatasetAddModalOpen(true),
      buttonStyle: 'primary' });

  }
  if (Object(src_featureFlags__WEBPACK_IMPORTED_MODULE_23__["isFeatureEnabled"])(src_featureFlags__WEBPACK_IMPORTED_MODULE_23__["FeatureFlag"].VERSIONED_EXPORT)) {
    buttonArr.push({
      name: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_18__["Tooltip"], { id: "import-tooltip", title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Import datasets'), placement: "bottomRight" },
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_Icons__WEBPACK_IMPORTED_MODULE_19__["default"].Import, { "data-test": "import-button" })),

      buttonStyle: 'link',
      onClick: openDatasetImportModal });

  }
  menuData.buttons = buttonArr;
  const closeDatasetDeleteModal = () => {
    setDatasetCurrentlyDeleting(null);
  };
  const closeDatasetEditModal = () => {
    setDatasetCurrentlyEditing(null);
  };
  const handleDatasetDelete = ({ id, table_name: tableName }) => {
    _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"].delete({
      endpoint: `/api/v1/dataset/${id}` }).
    then(() => {
      refreshData();
      setDatasetCurrentlyDeleting(null);
      addSuccessToast(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Deleted: %s', tableName));
    }, Object(src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_9__["createErrorHandler"])(errMsg => addDangerToast(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('There was an issue deleting %s: %s', tableName, errMsg))));
  };
  const handleBulkDatasetDelete = datasetsToDelete => {
    _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["default"].delete({
      endpoint: `/api/v1/dataset/?q=${rison__WEBPACK_IMPORTED_MODULE_8___default.a.encode(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(datasetsToDelete).call(datasetsToDelete, ({ id }) => id))}` }).
    then(({ json = {} }) => {
      refreshData();
      addSuccessToast(json.message);
    }, Object(src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_9__["createErrorHandler"])(errMsg => addDangerToast(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('There was an issue deleting the selected datasets: %s', errMsg))));
  };
  const handleBulkDatasetExport = datasetsToExport => window.location.assign(`/api/v1/dataset/export/?q=${rison__WEBPACK_IMPORTED_MODULE_8___default.a.encode(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(datasetsToExport).call(datasetsToExport, ({ id }) => id))}`);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_Menu_SubMenu__WEBPACK_IMPORTED_MODULE_15__["default"], menuData),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(_AddDatasetModal__WEBPACK_IMPORTED_MODULE_25__["default"], { show: datasetAddModalOpen, onHide: () => setDatasetAddModalOpen(false), onDatasetAdd: refreshData }),
  datasetCurrentlyDeleting && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_DeleteModal__WEBPACK_IMPORTED_MODULE_13__["default"], { description: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('The dataset %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the dataset will break those objects.', datasetCurrentlyDeleting.table_name, datasetCurrentlyDeleting.chart_count, datasetCurrentlyDeleting.dashboard_count), onConfirm: () => {
      if (datasetCurrentlyDeleting) {
        handleDatasetDelete(datasetCurrentlyDeleting);
      }
    }, onHide: closeDatasetDeleteModal, open: true, title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Delete Dataset?') }),
  datasetCurrentlyEditing && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_datasource_DatasourceModal__WEBPACK_IMPORTED_MODULE_12__["default"], { datasource: datasetCurrentlyEditing, onDatasourceSave: refreshData, onHide: closeDatasetEditModal, show: true }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_ConfirmStatusChange__WEBPACK_IMPORTED_MODULE_11__["default"], { title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Please confirm'), description: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Are you sure you want to delete the selected datasets?'), onConfirm: handleBulkDatasetDelete },
  confirmDelete => {
    const bulkActions = [];
    if (canDelete) {
      bulkActions.push({
        key: 'delete',
        name: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Delete'),
        onSelect: confirmDelete,
        type: 'danger' });

    }
    if (canExport) {
      bulkActions.push({
        key: 'export',
        name: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('Export'),
        type: 'primary',
        onSelect: handleBulkDatasetExport });

    }
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_ListView__WEBPACK_IMPORTED_MODULE_14__["default"], { className: "dataset-list-view", columns: columns, data: datasets, count: datasetCount, pageSize: PAGE_SIZE, fetchData: fetchData, filters: filterTypes, loading: loading, initialSort: initialSort, bulkActions: bulkActions, bulkSelectEnabled: bulkSelectEnabled, disableBulkSelect: toggleBulkSelect, renderBulkSelectCopy: selected => {
        const { virtualCount, physicalCount } = _babel_runtime_corejs3_core_js_stable_instance_reduce__WEBPACK_IMPORTED_MODULE_1___default()(selected).call(selected, (acc, e) => {
          if (e.original.kind === 'physical')
          acc.physicalCount += 1;else
          if (e.original.kind === 'virtual') {
            acc.virtualCount += 1;
          }
          return acc;
        }, { virtualCount: 0, physicalCount: 0 });
        if (!selected.length) {
          return Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('0 Selected');
        }
        if (virtualCount && !physicalCount) {
          return Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('%s Selected (Virtual)', selected.length, virtualCount);
        }
        if (physicalCount && !virtualCount) {
          return Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('%s Selected (Physical)', selected.length, physicalCount);
        }
        return Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('%s Selected (%s Physical, %s Virtual)', selected.length, physicalCount, virtualCount);
      } });
  }),


  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_26__["jsx"])(src_components_ImportModal_index__WEBPACK_IMPORTED_MODULE_22__["default"], { resourceName: "dataset", resourceLabel: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["t"])('dataset'), passwordsNeededMessage: PASSWORDS_NEEDED_MESSAGE, confirmOverwriteMessage: CONFIRM_OVERWRITE_MESSAGE, addDangerToast: addDangerToast, addSuccessToast: addSuccessToast, onModelImport: handleDatasetImport, show: importingDataset, onHide: closeDatasetImportModal, passwordFields: passwordFields, setPasswordFields: setPasswordFields }));

};__signature__(DatasetList, "useListViewResource{{ state: { loading, resourceCount: datasetCount, resourceCollection: datasets, bulkSelectEnabled, }, hasPerm, fetchData, toggleBulkSelect, refreshData, }}\nuseState{[datasetAddModalOpen, setDatasetAddModalOpen](false)}\nuseState{[datasetCurrentlyDeleting, setDatasetCurrentlyDeleting](null)}\nuseState{[datasetCurrentlyEditing, setDatasetCurrentlyEditing,](null)}\nuseState{[importingDataset, showImportModal](false)}\nuseState{[passwordFields, setPasswordFields]([])}\nuseCallback{openDatasetEditModal}\nuseMemo{columns}\nuseMemo{filterTypes}", () => [src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_10__["useListViewResource"]]);const _default =
Object(src_messageToasts_enhancers_withToasts__WEBPACK_IMPORTED_MODULE_17__["default"])(DatasetList);/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(PAGE_SIZE, "PAGE_SIZE", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\dataset\\DatasetList.tsx");reactHotLoader.register(PASSWORDS_NEEDED_MESSAGE, "PASSWORDS_NEEDED_MESSAGE", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\dataset\\DatasetList.tsx");reactHotLoader.register(CONFIRM_OVERWRITE_MESSAGE, "CONFIRM_OVERWRITE_MESSAGE", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\dataset\\DatasetList.tsx");reactHotLoader.register(FlexRowContainer, "FlexRowContainer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\dataset\\DatasetList.tsx");reactHotLoader.register(Actions, "Actions", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\dataset\\DatasetList.tsx");reactHotLoader.register(DatasetList, "DatasetList", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\dataset\\DatasetList.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\dataset\\DatasetList.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=DatasetList.9ed865ea.chunk.js.map