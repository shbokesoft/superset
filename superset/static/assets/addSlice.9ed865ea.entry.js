/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"addSlice": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + "9ed865ea" + ".chunk.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/assets/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([8,"thumbnail",4,5,7,8]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/addSlice/AddSliceContainer.tsx":
/*!********************************************!*\
  !*** ./src/addSlice/AddSliceContainer.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddSliceContainer; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/json/stringify */ "./node_modules/@babel/runtime-corejs3/core-js-stable/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/bind */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/bind.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/Button */ "./src/components/Button/index.tsx");
/* harmony import */ var src_components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Select */ "./src/components/Select/index.ts");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var _explore_components_controls_VizTypeControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore/components/controls/VizTypeControl */ "./src/explore/components/controls/VizTypeControl/index.jsx");
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





const styleSelectContainer = { width: 600, marginBottom: '10px' };
const StyledContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["styled"].div`
  border-radius: ${({ theme }) => theme.gridUnit}px;
  background-color: ${({ theme }) => theme.colors.grayscale.light5};
  padding: ${({ theme }) => theme.gridUnit * 6}px;
  h3 {
    padding-bottom: ${({ theme }) => theme.gridUnit * 3}px;
  }
`;
class AddSliceContainer extends react__WEBPACK_IMPORTED_MODULE_2___default.a.PureComponent {
  constructor(props) {var _context, _context2, _context3;
    super(props);
    this.state = {
      visType: 'table' };

    this.changeDatasource = _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(_context = this.changeDatasource).call(_context, this);
    this.changeVisType = _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = this.changeVisType).call(_context2, this);
    this.gotoSlice = _babel_runtime_corejs3_core_js_stable_instance_bind__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = this.gotoSlice).call(_context3, this);
  }
  exploreUrl() {
    const formData = encodeURIComponent(_babel_runtime_corejs3_core_js_stable_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      viz_type: this.state.visType,
      datasource: this.state.datasourceValue }));

    return `/superset/explore/?form_data=${formData}`;
  }
  gotoSlice() {
    window.location.href = this.exploreUrl();
  }
  changeDatasource(option) {
    this.setState({
      datasourceValue: option.value,
      datasourceId: option.value.split('__')[0] });

  }
  changeVisType(visType) {
    this.setState({ visType });
  }
  isBtnDisabled() {
    return !(this.state.datasourceId && this.state.visType);
  }
  render() {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(StyledContainer, { className: "container" },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("h3", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["t"])('Create a new chart')),
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", null,
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["t"])('Choose a dataset')),
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", { style: styleSelectContainer },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(src_components_Select__WEBPACK_IMPORTED_MODULE_4__["default"], { clearable: false, ignoreAccents: false, name: "select-datasource", onChange: this.changeDatasource, options: this.props.datasources, placeholder: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["t"])('Choose a dataset'), value: this.state.datasourceValue ?
      {
        value: this.state.datasourceValue } :

      undefined, width: 600 })),

    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("span", { className: "text-muted" },
    Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["t"])('If the dataset you are looking for is not available in the list, follow the instructions on how to add it in the Superset tutorial.'), ' ',
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", { href: "https://superset.apache.org/docs/creating-charts-dashboards/first-dashboard#adding-a-new-table", rel: "noopener noreferrer", target: "_blank" },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("i", { className: "fa fa-external-link" })))),



    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("br", null),
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", null,
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("p", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["t"])('Choose a visualization type')),
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_explore_components_controls_VizTypeControl__WEBPACK_IMPORTED_MODULE_7__["default"], { name: "select-vis-type", onChange: this.changeVisType, value: this.state.visType, labelType: "primary" })),

    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("br", null),
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("hr", null),
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(src_components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], { buttonStyle: "primary", disabled: this.isBtnDisabled(), onClick: this.gotoSlice },
    Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__["t"])('Create new chart')),

    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("br", null),
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])("br", null));

  } // @ts-ignore
  __reactstandin__regenerateByEval(key, code) {// @ts-ignore
    this[key] = eval(code);}};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(styleSelectContainer, "styleSelectContainer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\addSlice\\AddSliceContainer.tsx");reactHotLoader.register(StyledContainer, "StyledContainer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\addSlice\\AddSliceContainer.tsx");reactHotLoader.register(AddSliceContainer, "AddSliceContainer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\addSlice\\AddSliceContainer.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/addSlice/App.tsx":
/*!******************************!*\
  !*** ./src/addSlice/App.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@emotion/react/dist/emotion-element-4fbd89c5.browser.esm.js");
/* harmony import */ var _setup_setupApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setup/setupApp */ "./src/setup/setupApp.ts");
/* harmony import */ var _setup_setupPlugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setup/setupPlugins */ "./src/setup/setupPlugins.ts");
/* harmony import */ var _components_DynamicPlugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DynamicPlugins */ "./src/components/DynamicPlugins/index.tsx");
/* harmony import */ var _AddSliceContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddSliceContainer */ "./src/addSlice/AddSliceContainer.tsx");
/* harmony import */ var _featureFlags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../featureFlags */ "./src/featureFlags.ts");
/* harmony import */ var _preamble__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../preamble */ "./src/preamble.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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









Object(_setup_setupApp__WEBPACK_IMPORTED_MODULE_3__["default"])();
Object(_setup_setupPlugins__WEBPACK_IMPORTED_MODULE_4__["default"])();
const addSliceContainer = document.getElementById('app');
const bootstrapData = JSON.parse((addSliceContainer == null ? void 0 : addSliceContainer.getAttribute('data-bootstrap')) || '{}');
Object(_featureFlags__WEBPACK_IMPORTED_MODULE_7__["initFeatureFlags"])(bootstrapData.common.feature_flags);
const App = () => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["a"], { theme: _preamble__WEBPACK_IMPORTED_MODULE_8__["theme"] },
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_components_DynamicPlugins__WEBPACK_IMPORTED_MODULE_5__["DynamicPluginProvider"], null,
Object(_emotion_react__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_AddSliceContainer__WEBPACK_IMPORTED_MODULE_6__["default"], { datasources: bootstrapData.datasources })));const _default =


Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_1__["hot"])(App);/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(addSliceContainer, "addSliceContainer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\addSlice\\App.tsx");reactHotLoader.register(bootstrapData, "bootstrapData", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\addSlice\\App.tsx");reactHotLoader.register(App, "App", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\addSlice\\App.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\addSlice\\App.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/addSlice/index.tsx":
/*!********************************!*\
  !*** ./src/addSlice/index.tsx ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/@hot-loader/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/addSlice/App.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(Object(_emotion_react__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('app'));

/***/ }),

/***/ 8:
/*!********************************************************************************************************!*\
  !*** multi webpack-dev-server/client?http://localhost:9000 ./src/preamble.ts ./src/addSlice/index.tsx ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! webpack-dev-server/client?http://localhost:9000 */"./node_modules/webpack-dev-server/client/index.js?http://localhost:9000");
__webpack_require__(/*! G:\workspace\boke-pro\superset-all\superset\superset-frontend\src\preamble.ts */"./src/preamble.ts");
module.exports = __webpack_require__(/*! G:\workspace\boke-pro\superset-all\superset\superset-frontend\src\addSlice\index.tsx */"./src/addSlice/index.tsx");


/***/ })

/******/ });
//# sourceMappingURL=addSlice.9ed865ea.entry.js.map