(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DashboardPage"],{

/***/ "./src/common/hooks/apiResources/apiResources.ts":
/*!*******************************************************!*\
  !*** ./src/common/hooks/apiResources/apiResources.ts ***!
  \*******************************************************/
/*! exports provided: ResourceStatus, useApiResourceFullBody, useTransformedResource, useApiV1Resource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceStatus", function() { return ResourceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApiResourceFullBody", function() { return useApiResourceFullBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransformedResource", function() { return useTransformedResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApiV1Resource", function() { return useApiV1Resource; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/query/api/v1/makeApi.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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


var ResourceStatus;
(function (ResourceStatus) {
  ResourceStatus["LOADING"] = "loading";
  ResourceStatus["COMPLETE"] = "complete";
  ResourceStatus["ERROR"] = "error";
})(ResourceStatus || (ResourceStatus = {}));
const initialState = {
  status: ResourceStatus.LOADING,
  result: null,
  error: null };

/**
 * A general-purpose hook to fetch the response from an endpoint.
 * Returns the full response body from the API, including metadata.
 *
 * Note: You likely want {useApiV1Resource} instead of this!
 *
 * TODO Store the state in redux or something, share state between hook instances.
 *
 * TODO Include a function in the returned resource object to refresh the data.
 *
 * A core design decision here is composition > configuration,
 * and every hook should only have one job.
 * Please address new needs with new hooks if possible,
 * rather than adding config options to this hook.
 *
 * @param endpoint The url where the resource is located.
 */
function useApiResourceFullBody(endpoint) {
  const [resource, setResource] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialState);
  const cancelRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(() => {});
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    // If refresh is implemented, this will need to change.
    // The previous values should stay during refresh.
    setResource(initialState);
    // when this effect runs, the endpoint has changed.
    // cancel any current calls so that state doesn't get messed up.
    cancelRef.current();
    let cancelled = false;
    cancelRef.current = () => {
      cancelled = true;
    };
    const fetchResource = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["default"])({
      method: 'GET',
      endpoint });

    fetchResource({}).
    then(result => {
      if (!cancelled) {
        setResource({
          status: ResourceStatus.COMPLETE,
          result,
          error: null });

      }
    }).
    catch(error => {
      if (!cancelled) {
        setResource({
          status: ResourceStatus.ERROR,
          result: null,
          error });

      }
    });
    // Cancel the request when the component un-mounts
    return () => {
      cancelled = true;
    };
  }, [endpoint]);
  return resource;
}
/**
 * For when you want to transform the result of an api resource hook before using it.
 *
 * @param resource the Resource object returned from useApiV1Resource
 * @param transformFn a callback that transforms the result object into the shape you want.
 * Make sure to use a persistent function for this so it doesn't constantly recalculate!
 */__signature__(useApiResourceFullBody, "useState{[resource, setResource](initialState)}\nuseRef{cancelRef}\nuseEffect{}");
function useTransformedResource(resource, transformFn) {
  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    if (resource.status !== ResourceStatus.COMPLETE) {
      // While incomplete, there is no result - no need to transform.
      return resource;
    }
    return {
      ...resource,
      result: transformFn(resource.result) };

  }, [resource, transformFn]);
}
// returns the "result" field from a fetched API v1 endpoint
__signature__(useTransformedResource, "useMemo{}");const extractInnerResult = responseBody => responseBody.result;
/**
 * A general-purpose hook to fetch a Superset resource from a v1 API endpoint.
 * Handles request lifecycle and async logic so you don't have to.
 *
 * This returns the data under the "result" field in the API response body.
 * If you need the full response body, use {useFullApiResource} instead.
 *
 * @param endpoint The url where the resource is located.
 */
function useApiV1Resource(endpoint) {
  return useTransformedResource(useApiResourceFullBody(endpoint), extractInnerResult);
}__signature__(useApiV1Resource, "useTransformedResource{}\nuseApiResourceFullBody{}", () => [useTransformedResource, useApiResourceFullBody]);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(ResourceStatus, "ResourceStatus", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\common\\hooks\\apiResources\\apiResources.ts");reactHotLoader.register(initialState, "initialState", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\common\\hooks\\apiResources\\apiResources.ts");reactHotLoader.register(useApiResourceFullBody, "useApiResourceFullBody", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\common\\hooks\\apiResources\\apiResources.ts");reactHotLoader.register(useTransformedResource, "useTransformedResource", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\common\\hooks\\apiResources\\apiResources.ts");reactHotLoader.register(extractInnerResult, "extractInnerResult", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\common\\hooks\\apiResources\\apiResources.ts");reactHotLoader.register(useApiV1Resource, "useApiV1Resource", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\common\\hooks\\apiResources\\apiResources.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common/hooks/apiResources/charts.ts":
/*!*************************************************!*\
  !*** ./src/common/hooks/apiResources/charts.ts ***!
  \*************************************************/
/*! exports provided: useChartOwnerNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChartOwnerNames", function() { return useChartOwnerNames; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rison */ "./node_modules/rison/js/rison.js");
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rison__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apiResources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiResources */ "./src/common/hooks/apiResources/apiResources.ts");
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


function extractOwnerNames({ owners }) {
  if (!owners)
  return null;
  return _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(owners).call(owners, owner => `${owner.first_name} ${owner.last_name}`);
}
const ownerNamesQuery = rison__WEBPACK_IMPORTED_MODULE_1___default.a.encode({
  columns: ['owners.first_name', 'owners.last_name'],
  keys: ['none'] });

function useChartOwnerNames(chartId) {
  return Object(_apiResources__WEBPACK_IMPORTED_MODULE_2__["useTransformedResource"])(Object(_apiResources__WEBPACK_IMPORTED_MODULE_2__["useApiV1Resource"])(`/api/v1/chart/${chartId}?q=${ownerNamesQuery}`), extractOwnerNames);
}__signature__(useChartOwnerNames, "useTransformedResource{}\nuseApiV1Resource{}", () => [_apiResources__WEBPACK_IMPORTED_MODULE_2__["useTransformedResource"], _apiResources__WEBPACK_IMPORTED_MODULE_2__["useApiV1Resource"]]);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(extractOwnerNames, "extractOwnerNames", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\common\\hooks\\apiResources\\charts.ts");reactHotLoader.register(ownerNamesQuery, "ownerNamesQuery", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\common\\hooks\\apiResources\\charts.ts");reactHotLoader.register(useChartOwnerNames, "useChartOwnerNames", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\common\\hooks\\apiResources\\charts.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common/hooks/apiResources/dashboards.ts":
/*!*****************************************************!*\
  !*** ./src/common/hooks/apiResources/dashboards.ts ***!
  \*****************************************************/
/*! exports provided: useDashboard, useDashboardCharts, useDashboardDatasets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDashboard", function() { return useDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDashboardCharts", function() { return useDashboardCharts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDashboardDatasets", function() { return useDashboardDatasets; });
/* harmony import */ var _apiResources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiResources */ "./src/common/hooks/apiResources/apiResources.ts");
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

const useDashboard = idOrSlug => Object(_apiResources__WEBPACK_IMPORTED_MODULE_0__["useTransformedResource"])(Object(_apiResources__WEBPACK_IMPORTED_MODULE_0__["useApiV1Resource"])(`/api/v1/dashboard/${idOrSlug}`), dashboard => ({
  ...dashboard,
  metadata: dashboard.json_metadata && JSON.parse(dashboard.json_metadata),
  position_data: dashboard.position_json && JSON.parse(dashboard.position_json) }));

// gets the chart definitions for a dashboard
__signature__(useDashboard, "useTransformedResource{}\nuseApiV1Resource{}", () => [_apiResources__WEBPACK_IMPORTED_MODULE_0__["useTransformedResource"], _apiResources__WEBPACK_IMPORTED_MODULE_0__["useApiV1Resource"]]);const useDashboardCharts = idOrSlug => Object(_apiResources__WEBPACK_IMPORTED_MODULE_0__["useApiV1Resource"])(`/api/v1/dashboard/${idOrSlug}/charts`);
// gets the datasets for a dashboard
// important: this endpoint only returns the fields in the dataset
// that are necessary for rendering the given dashboard
__signature__(useDashboardCharts, "useApiV1Resource{}", () => [_apiResources__WEBPACK_IMPORTED_MODULE_0__["useApiV1Resource"]]);const useDashboardDatasets = idOrSlug => Object(_apiResources__WEBPACK_IMPORTED_MODULE_0__["useApiV1Resource"])(`/api/v1/dashboard/${idOrSlug}/datasets`);__signature__(useDashboardDatasets, "useApiV1Resource{}", () => [_apiResources__WEBPACK_IMPORTED_MODULE_0__["useApiV1Resource"]]);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(useDashboard, "useDashboard", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\common\\hooks\\apiResources\\dashboards.ts");reactHotLoader.register(useDashboardCharts, "useDashboardCharts", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\common\\hooks\\apiResources\\dashboards.ts");reactHotLoader.register(useDashboardDatasets, "useDashboardDatasets", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\common\\hooks\\apiResources\\dashboards.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/common/hooks/apiResources/index.ts":
/*!************************************************!*\
  !*** ./src/common/hooks/apiResources/index.ts ***!
  \************************************************/
/*! exports provided: useApiResourceFullBody, useApiV1Resource, useTransformedResource, useChartOwnerNames, useDashboard, useDashboardCharts, useDashboardDatasets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiResources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiResources */ "./src/common/hooks/apiResources/apiResources.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useApiResourceFullBody", function() { return _apiResources__WEBPACK_IMPORTED_MODULE_0__["useApiResourceFullBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useApiV1Resource", function() { return _apiResources__WEBPACK_IMPORTED_MODULE_0__["useApiV1Resource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTransformedResource", function() { return _apiResources__WEBPACK_IMPORTED_MODULE_0__["useTransformedResource"]; });

/* harmony import */ var _charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts */ "./src/common/hooks/apiResources/charts.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useChartOwnerNames", function() { return _charts__WEBPACK_IMPORTED_MODULE_1__["useChartOwnerNames"]; });

/* harmony import */ var _dashboards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboards */ "./src/common/hooks/apiResources/dashboards.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDashboard", function() { return _dashboards__WEBPACK_IMPORTED_MODULE_2__["useDashboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDashboardCharts", function() { return _dashboards__WEBPACK_IMPORTED_MODULE_2__["useDashboardCharts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDashboardDatasets", function() { return _dashboards__WEBPACK_IMPORTED_MODULE_2__["useDashboardDatasets"]; });

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

// A central catalog of API Resource hooks.
// Add new API hooks here, organized under
// different files for different resource types.



/***/ }),

/***/ "./src/dashboard/containers/DashboardPage.tsx":
/*!****************************************************!*\
  !*** ./src/dashboard/containers/DashboardPage.tsx ***!
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var src_components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Loading */ "./src/components/Loading/index.tsx");
/* harmony import */ var src_common_hooks_apiResources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/common/hooks/apiResources */ "./src/common/hooks/apiResources/index.ts");
/* harmony import */ var src_common_hooks_apiResources_apiResources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/common/hooks/apiResources/apiResources */ "./src/common/hooks/apiResources/apiResources.ts");
/* harmony import */ var src_dashboard_actions_hydrate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/dashboard/actions/hydrate */ "./src/dashboard/actions/hydrate.js");
/* harmony import */ var src_dashboard_util_injectCustomCss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/dashboard/util/injectCustomCss */ "./src/dashboard/util/injectCustomCss.ts");
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








const DashboardContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.lazy(() => __webpack_require__.e(/*! import() | DashboardContainer */ "DashboardContainer").then(__webpack_require__.bind(null, /*! src/dashboard/containers/Dashboard */ "./src/dashboard/containers/Dashboard.ts")));
const DashboardPage = () => {var _find, _context;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const { idOrSlug } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useParams"])();
  const [isHydrated, setHydrated] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const dashboardResource = Object(src_common_hooks_apiResources__WEBPACK_IMPORTED_MODULE_6__["useDashboard"])(idOrSlug);
  const chartsResource = Object(src_common_hooks_apiResources__WEBPACK_IMPORTED_MODULE_6__["useDashboardCharts"])(idOrSlug);
  const datasetsResource = Object(src_common_hooks_apiResources__WEBPACK_IMPORTED_MODULE_6__["useDashboardDatasets"])(idOrSlug);
  const error = (_find = _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_1___default()(_context = [dashboardResource, chartsResource, datasetsResource]).call(_context, resource => resource.status === src_common_hooks_apiResources_apiResources__WEBPACK_IMPORTED_MODULE_7__["ResourceStatus"].ERROR)) == null ? void 0 : _find.error;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (dashboardResource.result) {
      document.title = dashboardResource.result.dashboard_title;
      if (dashboardResource.result.css) {
        // returning will clean up custom css
        // when dashboard unmounts or changes
        return Object(src_dashboard_util_injectCustomCss__WEBPACK_IMPORTED_MODULE_9__["default"])(dashboardResource.result.css);
      }
    }
    return () => {};
  }, [dashboardResource.result]);
  const shouldBeHydrated = dashboardResource.status === src_common_hooks_apiResources_apiResources__WEBPACK_IMPORTED_MODULE_7__["ResourceStatus"].COMPLETE &&
  chartsResource.status === src_common_hooks_apiResources_apiResources__WEBPACK_IMPORTED_MODULE_7__["ResourceStatus"].COMPLETE &&
  datasetsResource.status === src_common_hooks_apiResources_apiResources__WEBPACK_IMPORTED_MODULE_7__["ResourceStatus"].COMPLETE;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (shouldBeHydrated) {
      dispatch(Object(src_dashboard_actions_hydrate__WEBPACK_IMPORTED_MODULE_8__["hydrateDashboard"])(dashboardResource.result, chartsResource.result, datasetsResource.result));
      setHydrated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldBeHydrated]);
  if (error)
  throw error; // caught in error boundary
  if (!isHydrated)
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(src_components_Loading__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(DashboardContainer, null);
};__signature__(DashboardPage, "useDispatch{dispatch}\nuseParams{{ idOrSlug }}\nuseState{[isHydrated, setHydrated](false)}\nuseDashboard{dashboardResource}\nuseDashboardCharts{chartsResource}\nuseDashboardDatasets{datasetsResource}\nuseEffect{}\nuseEffect{}", () => [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useParams"], src_common_hooks_apiResources__WEBPACK_IMPORTED_MODULE_6__["useDashboard"], src_common_hooks_apiResources__WEBPACK_IMPORTED_MODULE_6__["useDashboardCharts"], src_common_hooks_apiResources__WEBPACK_IMPORTED_MODULE_6__["useDashboardDatasets"]]);const _default =
DashboardPage;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(DashboardContainer, "DashboardContainer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\dashboard\\containers\\DashboardPage.tsx");reactHotLoader.register(DashboardPage, "DashboardPage", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\dashboard\\containers\\DashboardPage.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\dashboard\\containers\\DashboardPage.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/dashboard/util/injectCustomCss.ts":
/*!***********************************************!*\
  !*** ./src/dashboard/util/injectCustomCss.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return injectCustomCss; });
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
function createStyleElement(className) {
  const style = document.createElement('style');
  style.className = className;
  style.type = 'text/css';
  return style;
}
function injectCustomCss(css) {
  const className = 'CssEditor-css';
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.querySelector(`.${className}`) || createStyleElement(className);
  if ('styleSheet' in style) {
    style.styleSheet.cssText = css;
  } else
  {
    style.innerHTML = css;
  }
  /**
   * Ensures that the style applied is always the last.
   *
   * from: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
   * The Node.appendChild() method adds a node to the end of the list of children
   * of a specified parent node. If the given child is a reference to an existing
   * node in the document, appendChild() moves it from its current position to the
   * new position (there is no requirement to remove the node from its parent node
   * before appending it to some other node).
   */
  head.appendChild(style);
  return function removeCustomCSS() {
    style.remove();
  };
};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(createStyleElement, "createStyleElement", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\dashboard\\util\\injectCustomCss.ts");reactHotLoader.register(injectCustomCss, "injectCustomCss", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\dashboard\\util\\injectCustomCss.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=DashboardPage.9ed865ea.chunk.js.map