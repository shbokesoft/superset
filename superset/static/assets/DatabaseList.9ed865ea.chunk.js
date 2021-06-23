(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DatabaseList"],{

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

/***/ "./src/components/InfoTooltip/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/InfoTooltip/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoTooltip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/Tooltip */ "./src/components/Tooltip/index.tsx");
/* harmony import */ var src_components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/Icon */ "./src/components/Icon/index.tsx");
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




const StyledTooltip = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["styled"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__["Tooltip"])`
  cursor: pointer;

  path:first-of-type {
    fill: #999999;
  }
`;
const defaultOverlayStyle = {
  fontSize: '12px',
  lineHeight: '16px' };

const defaultColor = 'rgba(0,0,0,0.9)';
function InfoTooltip({ tooltip, placement = 'right', trigger = 'hover', overlayStyle = defaultOverlayStyle, bgColor = defaultColor }) {
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(StyledTooltip, { title: tooltip, placement: placement, trigger: trigger, overlayStyle: overlayStyle, color: bgColor },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(src_components_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], { name: "info-solid-small" }));

};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(StyledTooltip, "StyledTooltip", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\InfoTooltip\\index.tsx");reactHotLoader.register(defaultOverlayStyle, "defaultOverlayStyle", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\InfoTooltip\\index.tsx");reactHotLoader.register(defaultColor, "defaultColor", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\InfoTooltip\\index.tsx");reactHotLoader.register(InfoTooltip, "InfoTooltip", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\components\\InfoTooltip\\index.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
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

/***/ "./src/views/CRUD/data/database/DatabaseList.tsx":
/*!*******************************************************!*\
  !*** ./src/views/CRUD/data/database/DatabaseList.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/connection/SupersetClient.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rison */ "./node_modules/rison/js/rison.js");
/* harmony import */ var rison__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rison__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_featureFlags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/featureFlags */ "./src/featureFlags.ts");
/* harmony import */ var src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/views/CRUD/hooks */ "./src/views/CRUD/hooks.ts");
/* harmony import */ var src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/views/CRUD/utils */ "./src/views/CRUD/utils.tsx");
/* harmony import */ var src_messageToasts_enhancers_withToasts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/messageToasts/enhancers/withToasts */ "./src/messageToasts/enhancers/withToasts.tsx");
/* harmony import */ var src_components_Menu_SubMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/components/Menu/SubMenu */ "./src/components/Menu/SubMenu.tsx");
/* harmony import */ var src_components_DeleteModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/DeleteModal */ "./src/components/DeleteModal/index.tsx");
/* harmony import */ var src_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/components/Tooltip */ "./src/components/Tooltip/index.tsx");
/* harmony import */ var src_components_Icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/components/Icons */ "./src/components/Icons/index.tsx");
/* harmony import */ var src_components_ListView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/components/ListView */ "./src/components/ListView/index.ts");
/* harmony import */ var src_views_CRUD_data_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/views/CRUD/data/common */ "./src/views/CRUD/data/common.ts");
/* harmony import */ var src_components_ImportModal_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/components/ImportModal/index */ "./src/components/ImportModal/index.tsx");
/* harmony import */ var _DatabaseModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./DatabaseModal */ "./src/views/CRUD/data/database/DatabaseModal/index.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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
const PASSWORDS_NEEDED_MESSAGE = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('The passwords for the databases below are needed in order to ' +
'import them. Please note that the "Secure Extra" and "Certificate" ' +
'sections of the database configuration are not present in export ' +
'files, and should be added manually after the import if they are needed.');
const CONFIRM_OVERWRITE_MESSAGE = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('You are importing one or more databases that already exist. ' +
'Overwriting might cause you to lose some of your work. Are you ' +
'sure you want to overwrite?');
const IconCheck = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["styled"])(src_components_Icons__WEBPACK_IMPORTED_MODULE_13__["default"].Check)`
  color: ${({ theme }) => theme.colors.grayscale.dark1};
`;
const IconCancelX = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["styled"])(src_components_Icons__WEBPACK_IMPORTED_MODULE_13__["default"].CancelX)`
  color: ${({ theme }) => theme.colors.grayscale.dark1};
`;
const Actions = _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["styled"].div`
  color: ${({ theme }) => theme.colors.grayscale.base};
`;
function BooleanDisplay({ value }) {
  return value ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(IconCheck, null) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(IconCancelX, null);
}
function DatabaseList({ addDangerToast, addSuccessToast }) {
  const { state: { loading, resourceCount: databaseCount, resourceCollection: databases }, hasPerm, fetchData, refreshData } = Object(src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_7__["useListViewResource"])('database', Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('database'), addDangerToast);
  const [databaseModalOpen, setDatabaseModalOpen] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const [databaseCurrentlyDeleting, setDatabaseCurrentlyDeleting] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);
  const [currentDatabase, setCurrentDatabase] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null);
  const [importingDatabase, showImportModal] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const [passwordFields, setPasswordFields] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const openDatabaseImportModal = () => {
    showImportModal(true);
  };
  const closeDatabaseImportModal = () => {
    showImportModal(false);
  };
  const handleDatabaseImport = () => {
    showImportModal(false);
    refreshData();
  };
  const openDatabaseDeleteModal = database => _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"].get({
    endpoint: `/api/v1/database/${database.id}/related_objects/` }).

  then(({ json = {} }) => {
    setDatabaseCurrentlyDeleting({
      ...database,
      chart_count: json.charts.count,
      dashboard_count: json.dashboards.count });

  }).
  catch(Object(src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_8__["createErrorHandler"])(errMsg => Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('An error occurred while fetching database related data: %s', errMsg)));
  function handleDatabaseDelete({ id, database_name: dbName }) {
    _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"].delete({
      endpoint: `/api/v1/database/${id}` }).
    then(() => {
      refreshData();
      addSuccessToast(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Deleted: %s', dbName));
      // Close delete modal
      setDatabaseCurrentlyDeleting(null);
    }, Object(src_views_CRUD_utils__WEBPACK_IMPORTED_MODULE_8__["createErrorHandler"])(errMsg => addDangerToast(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('There was an issue deleting %s: %s', dbName, errMsg))));
  }
  function handleDatabaseEditModal({ database = null, modalOpen = false } = {}) {
    // Set database and modal
    setCurrentDatabase(database);
    setDatabaseModalOpen(modalOpen);
  }
  const canCreate = hasPerm('can_write');
  const canEdit = hasPerm('can_write');
  const canDelete = hasPerm('can_write');
  const canExport = hasPerm('can_read') && Object(src_featureFlags__WEBPACK_IMPORTED_MODULE_6__["isFeatureEnabled"])(src_featureFlags__WEBPACK_IMPORTED_MODULE_6__["FeatureFlag"].VERSIONED_EXPORT);
  const menuData = {
    activeChild: 'Databases',
    ...src_views_CRUD_data_common__WEBPACK_IMPORTED_MODULE_15__["commonMenuData"] };

  if (canCreate) {
    menuData.buttons = [
    {
      'data-test': 'btn-create-database',
      name: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null,
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])("i", { className: "fa fa-plus" }), " ", Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Database'), ' '),

      buttonStyle: 'primary',
      onClick: () => {
        // Ensure modal will be opened in add mode
        handleDatabaseEditModal({ modalOpen: true });
      } }];


    if (Object(src_featureFlags__WEBPACK_IMPORTED_MODULE_6__["isFeatureEnabled"])(src_featureFlags__WEBPACK_IMPORTED_MODULE_6__["FeatureFlag"].VERSIONED_EXPORT)) {
      menuData.buttons.push({
        name: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { id: "import-tooltip", title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Import databases'), placement: "bottomRight" },
        Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(src_components_Icons__WEBPACK_IMPORTED_MODULE_13__["default"].Import, { "data-test": "import-button" })),

        buttonStyle: 'link',
        onClick: openDatabaseImportModal });

    }
  }
  function handleDatabaseExport(database) {
    return window.location.assign(`/api/v1/database/export/?q=${rison__WEBPACK_IMPORTED_MODULE_5___default.a.encode([database.id])}`);
  }
  const initialSort = [{ id: 'changed_on_delta_humanized', desc: true }];
  const columns = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(() => [
  {
    accessor: 'database_name',
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Database') },

  {
    accessor: 'backend',
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Backend'),
    size: 'lg',
    disableSortBy: true },

  {
    accessor: 'allow_run_async',
    Header: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { id: "allow-run-async-header-tooltip", title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Asynchronous query execution'), placement: "top" },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])("span", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('AQE'))),

    Cell: ({ row: { original: { allow_run_async: allowRunAsync } } }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(BooleanDisplay, { value: allowRunAsync }),
    size: 'sm' },

  {
    accessor: 'allow_dml',
    Header: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { id: "allow-dml-header-tooltip", title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Allow data manipulation language'), placement: "top" },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])("span", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('DML'))),

    Cell: ({ row: { original: { allow_dml: allowDML } } }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(BooleanDisplay, { value: allowDML }),
    size: 'sm' },

  {
    accessor: 'allow_csv_upload',
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('CSV upload'),
    Cell: ({ row: { original: { allow_csv_upload: allowCSVUpload } } }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(BooleanDisplay, { value: allowCSVUpload }),
    size: 'md' },

  {
    accessor: 'expose_in_sqllab',
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Expose in SQL Lab'),
    Cell: ({ row: { original: { expose_in_sqllab: exposeInSqllab } } }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(BooleanDisplay, { value: exposeInSqllab }),
    size: 'md' },

  {
    accessor: 'created_by',
    disableSortBy: true,
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Created by'),
    Cell: ({ row: { original: { created_by: createdBy } } }) => createdBy ? `${createdBy.first_name} ${createdBy.last_name}` : '',
    size: 'xl' },

  {
    Cell: ({ row: { original: { changed_on_delta_humanized: changedOn } } }) => changedOn,
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Last modified'),
    accessor: 'changed_on_delta_humanized',
    size: 'xl' },

  {
    Cell: ({ row: { original } }) => {
      const handleEdit = () => handleDatabaseEditModal({ database: original, modalOpen: true });
      const handleDelete = () => openDatabaseDeleteModal(original);
      const handleExport = () => handleDatabaseExport(original);
      if (!canEdit && !canDelete && !canExport) {
        return null;
      }
      return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(Actions, { className: "actions" },
      canDelete && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])("span", { role: "button", tabIndex: 0, className: "action-button", "data-test": "database-delete", onClick: handleDelete },
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { id: "delete-action-tooltip", title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Delete database'), placement: "bottom" },
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(src_components_Icons__WEBPACK_IMPORTED_MODULE_13__["default"].Trash, null))),


      canExport && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { id: "export-action-tooltip", title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Export'), placement: "bottom" },
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])("span", { role: "button", tabIndex: 0, className: "action-button", onClick: handleExport },
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(src_components_Icons__WEBPACK_IMPORTED_MODULE_13__["default"].Share, null))),


      canEdit && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { id: "edit-action-tooltip", title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Edit'), placement: "bottom" },
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])("span", { role: "button", "data-test": "database-edit", tabIndex: 0, className: "action-button", onClick: handleEdit },
      Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(src_components_Icons__WEBPACK_IMPORTED_MODULE_13__["default"].EditAlt, { "data-test": "edit-alt" }))));



    },
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Actions'),
    id: 'actions',
    hidden: !canEdit && !canDelete,
    disableSortBy: true }],

  [canDelete, canEdit, canExport]);
  const filters = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(() => [
  {
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Expose in SQL Lab'),
    id: 'expose_in_sqllab',
    input: 'select',
    operator: src_components_ListView__WEBPACK_IMPORTED_MODULE_14__["FilterOperator"].equals,
    unfilteredLabel: 'All',
    selects: [
    { label: 'Yes', value: true },
    { label: 'No', value: false }] },


  {
    Header: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(src_components_Tooltip__WEBPACK_IMPORTED_MODULE_12__["Tooltip"], { id: "allow-run-async-filter-header-tooltip", title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Asynchronous query execution'), placement: "top" },
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])("span", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('AQE'))),

    id: 'allow_run_async',
    input: 'select',
    operator: src_components_ListView__WEBPACK_IMPORTED_MODULE_14__["FilterOperator"].equals,
    unfilteredLabel: 'All',
    selects: [
    { label: 'Yes', value: true },
    { label: 'No', value: false }] },


  {
    Header: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Search'),
    id: 'database_name',
    input: 'search',
    operator: src_components_ListView__WEBPACK_IMPORTED_MODULE_14__["FilterOperator"].contains }],

  []);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(src_components_Menu_SubMenu__WEBPACK_IMPORTED_MODULE_10__["default"], menuData),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(_DatabaseModal__WEBPACK_IMPORTED_MODULE_17__["default"], { databaseId: currentDatabase == null ? void 0 : currentDatabase.id, show: databaseModalOpen, onHide: handleDatabaseEditModal, onDatabaseAdd: () => {
      refreshData();
    } }),
  databaseCurrentlyDeleting && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(src_components_DeleteModal__WEBPACK_IMPORTED_MODULE_11__["default"], { description: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('The database %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the database will break those objects.', databaseCurrentlyDeleting.database_name, databaseCurrentlyDeleting.chart_count, databaseCurrentlyDeleting.dashboard_count), onConfirm: () => {
      if (databaseCurrentlyDeleting) {
        handleDatabaseDelete(databaseCurrentlyDeleting);
      }
    }, onHide: () => setDatabaseCurrentlyDeleting(null), open: true, title: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Delete Database?') }),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(src_components_ListView__WEBPACK_IMPORTED_MODULE_14__["default"], { className: "database-list-view", columns: columns, count: databaseCount, data: databases, fetchData: fetchData, filters: filters, initialSort: initialSort, loading: loading, pageSize: PAGE_SIZE }),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_18__["jsx"])(src_components_ImportModal_index__WEBPACK_IMPORTED_MODULE_16__["default"], { resourceName: "database", resourceLabel: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('database'), passwordsNeededMessage: PASSWORDS_NEEDED_MESSAGE, confirmOverwriteMessage: CONFIRM_OVERWRITE_MESSAGE, addDangerToast: addDangerToast, addSuccessToast: addSuccessToast, onModelImport: handleDatabaseImport, show: importingDatabase, onHide: closeDatabaseImportModal, passwordFields: passwordFields, setPasswordFields: setPasswordFields }));

}__signature__(DatabaseList, "useListViewResource{{ state: { loading, resourceCount: databaseCount, resourceCollection: databases, }, hasPerm, fetchData, refreshData, }}\nuseState{[databaseModalOpen, setDatabaseModalOpen](false)}\nuseState{[databaseCurrentlyDeleting, setDatabaseCurrentlyDeleting,](null)}\nuseState{[currentDatabase, setCurrentDatabase](null)}\nuseState{[importingDatabase, showImportModal](false)}\nuseState{[passwordFields, setPasswordFields]([])}\nuseMemo{columns}\nuseMemo{filters}", () => [src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_7__["useListViewResource"]]);const _default =
Object(src_messageToasts_enhancers_withToasts__WEBPACK_IMPORTED_MODULE_9__["default"])(DatabaseList);/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(PAGE_SIZE, "PAGE_SIZE", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseList.tsx");reactHotLoader.register(PASSWORDS_NEEDED_MESSAGE, "PASSWORDS_NEEDED_MESSAGE", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseList.tsx");reactHotLoader.register(CONFIRM_OVERWRITE_MESSAGE, "CONFIRM_OVERWRITE_MESSAGE", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseList.tsx");reactHotLoader.register(IconCheck, "IconCheck", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseList.tsx");reactHotLoader.register(IconCancelX, "IconCancelX", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseList.tsx");reactHotLoader.register(Actions, "Actions", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseList.tsx");reactHotLoader.register(BooleanDisplay, "BooleanDisplay", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseList.tsx");reactHotLoader.register(DatabaseList, "DatabaseList", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseList.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseList.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/views/CRUD/data/database/DatabaseModal/DatabaseConnectionForm.tsx":
/*!*******************************************************************************!*\
  !*** ./src/views/CRUD/data/database/DatabaseModal/DatabaseConnectionForm.tsx ***!
  \*******************************************************************************/
/*! exports provided: FormFieldOrder, FormFieldMap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldOrder", function() { return FormFieldOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldMap", function() { return FormFieldMap; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/keys */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/keys.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/map */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_components_Form_LabeledErrorBoundInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Form/LabeledErrorBoundInput */ "./src/components/Form/LabeledErrorBoundInput.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/views/CRUD/data/database/DatabaseModal/styles.ts");
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



const FormFieldOrder = [
'host',
'port',
'database',
'username',
'password',
'database_name'];

const hostField = ({ required, changeMethods, getValidation, validationErrors }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_Form_LabeledErrorBoundInput__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "host", name: "host", required: required, validationMethods: { onBlur: getValidation }, errorMessage: validationErrors == null ? void 0 : validationErrors.host, placeholder: "e.g. 127.0.0.1", className: "form-group-w-50", label: "Host", onChange: changeMethods.onParametersChange });
const portField = ({ required, changeMethods, getValidation, validationErrors }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_Form_LabeledErrorBoundInput__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "port", name: "port", required: required, validationMethods: { onBlur: getValidation }, errorMessage: validationErrors == null ? void 0 : validationErrors.port, placeholder: "e.g. 5432", className: "form-group-w-50", label: "Port", onChange: changeMethods.onParametersChange });
const databaseField = ({ required, changeMethods, getValidation, validationErrors }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_Form_LabeledErrorBoundInput__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "database", name: "database", required: required, validationMethods: { onBlur: getValidation }, errorMessage: validationErrors == null ? void 0 : validationErrors.database, placeholder: "e.g. world_population", label: "Database name", onChange: changeMethods.onParametersChange, helpText: "Copy the name of the PostgreSQL database you are trying to connect to." });
const usernameField = ({ required, changeMethods, getValidation, validationErrors }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_Form_LabeledErrorBoundInput__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "username", name: "username", required: required, validationMethods: { onBlur: getValidation }, errorMessage: validationErrors == null ? void 0 : validationErrors.username, placeholder: "e.g. Analytics", label: "Username", onChange: changeMethods.onParametersChange });
const passwordField = ({ required, changeMethods, getValidation, validationErrors }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_Form_LabeledErrorBoundInput__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "password", name: "password", required: required, validationMethods: { onBlur: getValidation }, errorMessage: validationErrors == null ? void 0 : validationErrors.password, placeholder: "e.g. ********", label: "Password", onChange: changeMethods.onParametersChange });
const displayField = ({ required, changeMethods, getValidation, validationErrors }) => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_Form_LabeledErrorBoundInput__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "database_name", name: "database_name", required: required, validationMethods: { onBlur: getValidation }, errorMessage: validationErrors == null ? void 0 : validationErrors.database_name, placeholder: "", label: "Display Name", onChange: changeMethods.onChange, helpText: "Pick a nickname for this database to display as in Superset." });
const FORM_FIELD_MAP = {
  host: hostField,
  port: portField,
  database: databaseField,
  username: usernameField,
  password: passwordField,
  database_name: displayField };

const DatabaseConnectionForm = ({ dbModel: { name, parameters }, onParametersChange, onChange, validationErrors, getValidation }) => {var _context;return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledFormHeader"], null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h4", null, "Enter the required ", name, " credentials"),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", { className: "helper" }, "Need help? Learn more about connecting to ",
  name, ".")),


  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    // @ts-ignore
    css: theme => [
    _styles__WEBPACK_IMPORTED_MODULE_6__["formScrollableStyles"],
    Object(_styles__WEBPACK_IMPORTED_MODULE_6__["validatedFormStyles"])(theme)] },

  parameters &&
  _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_3___default()(_context = _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(FormFieldOrder).call(FormFieldOrder, key => {var _context2;return _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_1___default()(_context2 = _babel_runtime_corejs3_core_js_stable_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(parameters.properties)).call(_context2, key) ||
    key === 'database_name';})).call(_context, field => {var _context3;return FORM_FIELD_MAP[field]({
      required: _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_1___default()(_context3 = parameters.required).call(_context3, field),
      changeMethods: { onParametersChange, onChange },
      validationErrors,
      getValidation,
      key: field });})));};



const FormFieldMap = FORM_FIELD_MAP;const _default =
DatabaseConnectionForm;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(FormFieldOrder, "FormFieldOrder", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\DatabaseConnectionForm.tsx");reactHotLoader.register(hostField, "hostField", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\DatabaseConnectionForm.tsx");reactHotLoader.register(portField, "portField", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\DatabaseConnectionForm.tsx");reactHotLoader.register(databaseField, "databaseField", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\DatabaseConnectionForm.tsx");reactHotLoader.register(usernameField, "usernameField", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\DatabaseConnectionForm.tsx");reactHotLoader.register(passwordField, "passwordField", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\DatabaseConnectionForm.tsx");reactHotLoader.register(displayField, "displayField", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\DatabaseConnectionForm.tsx");reactHotLoader.register(FORM_FIELD_MAP, "FORM_FIELD_MAP", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\DatabaseConnectionForm.tsx");reactHotLoader.register(DatabaseConnectionForm, "DatabaseConnectionForm", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\DatabaseConnectionForm.tsx");reactHotLoader.register(FormFieldMap, "FormFieldMap", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\DatabaseConnectionForm.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\DatabaseConnectionForm.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/views/CRUD/data/database/DatabaseModal/ExtraOptions.tsx":
/*!*********************************************************************!*\
  !*** ./src/views/CRUD/data/database/DatabaseModal/ExtraOptions.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var src_components_InfoTooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/InfoTooltip */ "./src/components/InfoTooltip/index.tsx");
/* harmony import */ var src_components_IndeterminateCheckbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/IndeterminateCheckbox */ "./src/components/IndeterminateCheckbox/index.tsx");
/* harmony import */ var src_components_Collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Collapse */ "./src/components/Collapse/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/views/CRUD/data/database/DatabaseModal/styles.ts");
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







const defaultExtra = '{\n  "metadata_params": {},\n  "engine_params": {},' +
'\n  "metadata_cache_timeout": {},\n  "schemas_allowed_for_csv_upload": [] \n}';
const ExtraOptions = ({ db, onInputChange, onTextChange, onEditorChange }) => {var _db$extra;
  const expandableModalIsOpen = !!(db != null && db.expose_in_sqllab);
  const createAsOpen = !!(db != null && db.allow_ctas || db != null && db.allow_cvas);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_Collapse__WEBPACK_IMPORTED_MODULE_5__["default"], { expandIconPosition: "right", accordion: true, css: theme => Object(_styles__WEBPACK_IMPORTED_MODULE_6__["antdCollapseStyles"])(theme) },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_Collapse__WEBPACK_IMPORTED_MODULE_5__["default"].Panel, { header: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", null,
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h4", null, "SQL Lab"),
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", { className: "helper" }, "Configure how this database will function in SQL Lab.")),


    key: "1" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledInputContainer"], { className: "mb-0" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "input-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_IndeterminateCheckbox__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "expose_in_sqllab", indeterminate: false, checked: !!(db != null && db.expose_in_sqllab), onChange: onInputChange, labelText: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Expose in SQL Lab') }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_InfoTooltip__WEBPACK_IMPORTED_MODULE_3__["default"], { tooltip: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Allow this database to be queried in SQL Lab') })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledExpandableForm"], { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('expandable', {
      open: expandableModalIsOpen,
      'ctas-open': createAsOpen }) },

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledInputContainer"], { className: "mb-0" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "input-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_IndeterminateCheckbox__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "allow_ctas", indeterminate: false, checked: !!(db != null && db.allow_ctas), onChange: onInputChange, labelText: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Allow CREATE TABLE AS') }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_InfoTooltip__WEBPACK_IMPORTED_MODULE_3__["default"], { tooltip: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Allow creation of new tables based on queries') }))),


  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledInputContainer"], { className: "mb-0" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "input-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_IndeterminateCheckbox__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "allow_cvas", indeterminate: false, checked: !!(db != null && db.allow_cvas), onChange: onInputChange, labelText: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Allow CREATE VIEW AS') }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_InfoTooltip__WEBPACK_IMPORTED_MODULE_3__["default"], { tooltip: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Allow creation of new views based on queries') })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledInputContainer"], { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('expandable', { open: createAsOpen }) },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "control-label" }, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('CTAS & CVAS SCHEMA')),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "input-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("input", { type: "text", name: "force_ctas_schema", value: (db == null ? void 0 : db.force_ctas_schema) || '', placeholder: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Search or select schema'), onChange: onInputChange })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "helper" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('When allowing CREATE TABLE AS option in SQL Lab, this option ' +
  'forces the table to be created in this schema.')))),



  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledInputContainer"], { className: "mb-0" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "input-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_IndeterminateCheckbox__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "allow_dml", indeterminate: false, checked: !!(db != null && db.allow_dml), onChange: onInputChange, labelText: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Allow DML') }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_InfoTooltip__WEBPACK_IMPORTED_MODULE_3__["default"], { tooltip: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Allow manipulation of the database using non-SELECT statements such as UPDATE, DELETE, CREATE, etc.') }))),


  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledInputContainer"], null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "input-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_IndeterminateCheckbox__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "allow_multi_schema_metadata_fetch", indeterminate: false, checked: !!(db != null && db.allow_multi_schema_metadata_fetch), onChange: onInputChange, labelText: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Allow multi schema metadata fetch') }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_InfoTooltip__WEBPACK_IMPORTED_MODULE_3__["default"], { tooltip: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Allow SQL Lab to fetch a list of all tables and all views across all database ' +
    'schemas. For large data warehouse with thousands of tables, this can be ' +
    'expensive and put strain on the system.') })))))),





  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_Collapse__WEBPACK_IMPORTED_MODULE_5__["default"].Panel, { header: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", null,
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h4", null, "Performance"),
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", { className: "helper" }, "Adjust settings that will impact the performance of this database.")),


    key: "2" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledInputContainer"], { className: "mb-8" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "control-label" }, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Chart cache timeout')),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "input-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("input", { type: "number", name: "cache_timeout", value: (db == null ? void 0 : db.cache_timeout) || '', placeholder: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Chart cache timeout'), onChange: onInputChange })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "helper" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Duration (in seconds) of the caching timeout for charts of this database.' +
  ' A timeout of 0 indicates that the cache never expires.' +
  ' Note this defaults to the global timeout if undefined.'))),


  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledInputContainer"], { className: "mb-0" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "input-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_IndeterminateCheckbox__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "allow_run_async", indeterminate: false, checked: !!(db != null && db.allow_run_async), onChange: onInputChange, labelText: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Asynchronous query execution') }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_InfoTooltip__WEBPACK_IMPORTED_MODULE_3__["default"], { tooltip: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Operate the database in asynchronous mode, meaning that the queries ' +
    'are executed on remote workers as opposed to on the web server itself. ' +
    'This assumes that you have a Celery worker setup as well as a results ' +
    'backend. Refer to the installation docs for more information.') })))),



  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_Collapse__WEBPACK_IMPORTED_MODULE_5__["default"].Panel, { header: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", null,
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h4", null, "Security"),
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", { className: "helper" }, "Add connection information for other systems.")),


    key: "3" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledInputContainer"], null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "control-label" }, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Secure extra')),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "input-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledJsonEditor"], { name: "encrypted_extra", value: (db == null ? void 0 : db.encrypted_extra) || '', placeholder: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Secure extra'), onChange: json => onEditorChange({ json, name: 'encrypted_extra' }), width: "100%", height: "160px" })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "helper" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", null,
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('JSON string containing additional connection configuration.')),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", null,
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('This is used to provide connection information for systems like Hive, ' +
  'Presto, and BigQuery, which do not conform to the username:password syntax ' +
  'normally used by SQLAlchemy.')))),



  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledInputContainer"], null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "control-label" }, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Root certificate')),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "input-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("textarea", { name: "server_cert", value: (db == null ? void 0 : db.server_cert) || '', placeholder: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Root certificate'), onChange: onTextChange })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "helper" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Optional CA_BUNDLE contents to validate HTTPS requests. Only available on ' +
  'certain database engines.')))),



  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_Collapse__WEBPACK_IMPORTED_MODULE_5__["default"].Panel, { header: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", null,
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("h4", null, "Other"),
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", { className: "helper" }, "Additional settings.")),
    key: "4" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledInputContainer"], { className: "mb-0" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "input-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_IndeterminateCheckbox__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "impersonate_user", indeterminate: false, checked: !!(db != null && db.impersonate_user), onChange: onInputChange, labelText: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Impersonate Logged In User (Presto, Trino, Hive, and GSheets)') }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_InfoTooltip__WEBPACK_IMPORTED_MODULE_3__["default"], { tooltip: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('If Presto or Trino, all the queries in SQL Lab are going to be executed as the ' +
    'currently logged on user who must have permission to run them. If Hive ' +
    'and hive.server2.enable.doAs is enabled, will run the queries as ' +
    'service account, but impersonate the currently logged on user via ' +
    'hive.server2.proxy.user property.') }))),


  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledInputContainer"], { className: "mb-0" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "input-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_IndeterminateCheckbox__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "allow_csv_upload", indeterminate: false, checked: !!(db != null && db.allow_csv_upload), onChange: onInputChange, labelText: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Allow data upload') }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(src_components_InfoTooltip__WEBPACK_IMPORTED_MODULE_3__["default"], { tooltip: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('If selected, please set the schemas allowed for data upload in Extra.') }))),


  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledInputContainer"], { className: "extra-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "control-label" }, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Extra')),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "input-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_6__["StyledJsonEditor"], { name: "extra", value: (_db$extra = db == null ? void 0 : db.extra) != null ? _db$extra : defaultExtra, placeholder: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Secure extra'), onChange: json => onEditorChange({ json, name: 'extra' }), width: "100%", height: "160px" })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", { className: "helper" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", null,
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('JSON string containing extra configuration elements.')),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", null,
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('1. The engine_params object gets unpacked into the sqlalchemy.create_engine ' +
  'call, while the metadata_params gets unpacked into the sqlalchemy.MetaData ' +
  'call.')),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", null,
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('2. The metadata_cache_timeout is a cache timeout setting in seconds for ' +
  'metadata fetch of this database. Specify it as "metadata_cache_timeout": ' +
  '{"schema_cache_timeout": 600, "table_cache_timeout": 600}. If unset, cache ' +
  'will not be enabled for the functionality. A timeout of 0 indicates that ' +
  'the cache never expires.')),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", null,
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('3. The schemas_allowed_for_csv_upload is a comma separated list of schemas ' +
  'that CSVs are allowed to upload to. Specify it as ' +
  '"schemas_allowed_for_csv_upload": ["public", "csv_upload"]. If database ' +
  'flavor does not support schema or any schema is allowed to be accessed, ' +
  'just leave the list empty.')),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", null,
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])("4. The version field is a string specifying this db's version. This " +
  'should be used with Presto DBs so that the syntax is correct.')),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", null,
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('5. The allows_virtual_table_explore field is a boolean specifying whether ' +
  'or not the Explore button in SQL Lab results is shown.'))))));





};const _default =
ExtraOptions;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(defaultExtra, "defaultExtra", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\ExtraOptions.tsx");reactHotLoader.register(ExtraOptions, "ExtraOptions", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\ExtraOptions.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\ExtraOptions.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/views/CRUD/data/database/DatabaseModal/SqlAlchemyForm.tsx":
/*!***********************************************************************!*\
  !*** ./src/views/CRUD/data/database/DatabaseModal/SqlAlchemyForm.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var src_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/Button */ "./src/components/Button/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/views/CRUD/data/database/DatabaseModal/styles.ts");
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




const SqlAlchemyTab = ({ db, onInputChange, testConnection, conf }) => {var _conf$SQLALCHEMY_DOCS, _conf$SQLALCHEMY_DISP;return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledInputContainer"], null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", { className: "control-label" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Display Name'),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("span", { className: "required" }, "*")),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", { className: "input-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("input", { type: "text", name: "database_name", "data-test": "database-name-input", value: (db == null ? void 0 : db.database_name) || '', placeholder: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Name your database'), onChange: onInputChange })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", { className: "helper" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Pick a name to help you identify this database.'))),


  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_3__["StyledInputContainer"], null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", { className: "control-label" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('SQLAlchemy URI'),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("span", { className: "required" }, "*")),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", { className: "input-container" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("input", { type: "text", name: "sqlalchemy_uri", "data-test": "sqlalchemy-uri-input", value: (db == null ? void 0 : db.sqlalchemy_uri) || '', autoComplete: "off", placeholder: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('dialect+driver://username:password@host:port/database'), onChange: onInputChange })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", { className: "helper" },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Refer to the'), ' ',
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])("a", { href: (_conf$SQLALCHEMY_DOCS = conf == null ? void 0 : conf.SQLALCHEMY_DOCS_URL) != null ? _conf$SQLALCHEMY_DOCS : '', target: "_blank", rel: "noopener noreferrer" }, (_conf$SQLALCHEMY_DISP =
  conf == null ? void 0 : conf.SQLALCHEMY_DISPLAY_TEXT) != null ? _conf$SQLALCHEMY_DISP : ''),
  ' ',
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('for more information on how to structure your URI.'))),


  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["jsx"])(src_components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], { onClick: testConnection, cta: true, buttonStyle: "link", css: theme => Object(_styles__WEBPACK_IMPORTED_MODULE_3__["wideButton"])(theme) },
  Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["t"])('Test connection')));};const _default =


SqlAlchemyTab;/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(SqlAlchemyTab, "SqlAlchemyTab", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\SqlAlchemyForm.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\SqlAlchemyForm.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/views/CRUD/data/database/DatabaseModal/index.tsx":
/*!**************************************************************!*\
  !*** ./src/views/CRUD/data/database/DatabaseModal/index.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/includes */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/includes.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/filter */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/filter.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/find */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/find.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/instance/trim */ "./node_modules/@babel/runtime-corejs3/core-js-stable/instance/trim.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_components_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/Tabs */ "./src/components/Tabs/index.ts");
/* harmony import */ var src_common_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/common/components */ "./src/common/components/index.tsx");
/* harmony import */ var src_components_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/Modal */ "./src/components/Modal/index.ts");
/* harmony import */ var src_components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/components/Button */ "./src/components/Button/index.tsx");
/* harmony import */ var src_messageToasts_enhancers_withToasts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/messageToasts/enhancers/withToasts */ "./src/messageToasts/enhancers/withToasts.tsx");
/* harmony import */ var src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/views/CRUD/hooks */ "./src/views/CRUD/hooks.ts");
/* harmony import */ var src_views_CRUD_data_database_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/views/CRUD/data/database/state */ "./src/views/CRUD/data/database/state.ts");
/* harmony import */ var src_views_CRUD_data_database_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/views/CRUD/data/database/types */ "./src/views/CRUD/data/database/types.ts");
/* harmony import */ var _ExtraOptions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ExtraOptions */ "./src/views/CRUD/data/database/DatabaseModal/ExtraOptions.tsx");
/* harmony import */ var _SqlAlchemyForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SqlAlchemyForm */ "./src/views/CRUD/data/database/DatabaseModal/SqlAlchemyForm.tsx");
/* harmony import */ var _DatabaseConnectionForm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./DatabaseConnectionForm */ "./src/views/CRUD/data/database/DatabaseModal/DatabaseConnectionForm.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./styles */ "./src/views/CRUD/data/database/DatabaseModal/styles.ts");
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














const DOCUMENTATION_LINK = 'https://superset.apache.org/docs/databases/installing-database-drivers';
var ActionType;
(function (ActionType) {
  ActionType[ActionType["configMethodChange"] = 0] = "configMethodChange";
  ActionType[ActionType["dbSelected"] = 1] = "dbSelected";
  ActionType[ActionType["editorChange"] = 2] = "editorChange";
  ActionType[ActionType["fetched"] = 3] = "fetched";
  ActionType[ActionType["inputChange"] = 4] = "inputChange";
  ActionType[ActionType["parametersChange"] = 5] = "parametersChange";
  ActionType[ActionType["reset"] = 6] = "reset";
  ActionType[ActionType["textChange"] = 7] = "textChange";
})(ActionType || (ActionType = {}));
function dbReducer(state, action) {
  const trimmedState = {
    ...(state || {}) };

  switch (action.type) {
    case ActionType.inputChange:
      if (action.payload.type === 'checkbox') {
        return {
          ...trimmedState,
          [action.payload.name]: action.payload.checked };

      }
      return {
        ...trimmedState,
        [action.payload.name]: action.payload.value };

    case ActionType.parametersChange:
      return {
        ...trimmedState,
        parameters: {
          ...trimmedState.parameters,
          [action.payload.name]: action.payload.value } };


    case ActionType.editorChange:
      return {
        ...trimmedState,
        [action.payload.name]: action.payload.json };

    case ActionType.textChange:
      return {
        ...trimmedState,
        [action.payload.name]: action.payload.value };

    case ActionType.fetched:
      return {
        engine: trimmedState.engine,
        configuration_method: trimmedState.configuration_method,
        ...action.payload };

    case ActionType.dbSelected:
    case ActionType.configMethodChange:
      return {
        ...action.payload };

    case ActionType.reset:
    default:
      return {};}

}
const DEFAULT_TAB_KEY = '1';
const FALSY_FORM_VALUES = [undefined, null, ''];
const DatabaseModal = ({ addDangerToast, addSuccessToast, onDatabaseAdd, onHide, show, databaseId }) => {var _availableDbs$databas, _db$database_name2, _context;
  const [db, setDB] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useReducer"])(dbReducer, null);
  const [tabKey, setTabKey] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(DEFAULT_TAB_KEY);
  const [availableDbs, getAvailableDbs] = Object(src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_12__["useAvailableDatabases"])();
  const [validationErrors, getValidation] = Object(src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_12__["useDatabaseValidation"])();
  const [hasConnectedDb, setHasConnectedDb] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const [dbName, setDbName] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('');
  const conf = Object(src_views_CRUD_data_database_state__WEBPACK_IMPORTED_MODULE_13__["useCommonConf"])();
  const isEditMode = !!databaseId;
  const useSqlAlchemyForm = (db == null ? void 0 : db.configuration_method) === src_views_CRUD_data_database_types__WEBPACK_IMPORTED_MODULE_14__["CONFIGURATION_METHOD"].SQLALCHEMY_URI;
  const useTabLayout = isEditMode || useSqlAlchemyForm;
  // Database fetch logic
  const { state: { loading: dbLoading, resource: dbFetched }, fetchResource, createResource, updateResource } = Object(src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_12__["useSingleViewResource"])('database', Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('database'), addDangerToast);
  // Test Connection logic
  const testConnection = () => {var _db$database_name;
    if (!(db != null && db.sqlalchemy_uri)) {
      addDangerToast(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Please enter a SQLAlchemy URI to test'));
      return;
    }
    const connection = {
      sqlalchemy_uri: (db == null ? void 0 : db.sqlalchemy_uri) || '',
      database_name: (db == null ? void 0 : (_db$database_name = db.database_name) == null ? void 0 : _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_4___default()(_db$database_name).call(_db$database_name)) || undefined,
      impersonate_user: (db == null ? void 0 : db.impersonate_user) || undefined,
      extra: (db == null ? void 0 : db.extra) || undefined,
      encrypted_extra: (db == null ? void 0 : db.encrypted_extra) || undefined,
      server_cert: (db == null ? void 0 : db.server_cert) || undefined };

    Object(src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_12__["testDatabaseConnection"])(connection, addDangerToast, addSuccessToast);
  };
  const onClose = () => {
    setDB({ type: ActionType.reset });
    setHasConnectedDb(false);
    onHide();
  };
  const onSave = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...update } = db || {};
    if (db != null && db.id) {
      if (db.sqlalchemy_uri) {
        // don't pass parameters if using the sqlalchemy uri
        delete update.parameters;
      }
      const result = await updateResource(db.id, update);
      if (result) {
        if (onDatabaseAdd) {
          onDatabaseAdd();
        }
        onClose();
      }
    } else
    if (db) {
      // Create
      const dbId = await createResource(update);
      if (dbId) {
        setHasConnectedDb(true);
        if (onDatabaseAdd) {
          onDatabaseAdd();
        }
        if (useTabLayout) {
          // tab layout only has one step
          // so it should close immediately on save
          onClose();
        }
      }
    }
  };
  const onChange = (type, payload) => {
    setDB({ type, payload });
  };
  // Initialize
  const fetchDB = () => {
    if (isEditMode && databaseId) {
      if (!dbLoading) {
        fetchResource(databaseId).catch(e => addDangerToast(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Sorry there was an error fetching database information: %s', e.message)));
      }
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    if (show) {
      setTabKey(DEFAULT_TAB_KEY);
      getAvailableDbs();
      setDB({
        type: ActionType.dbSelected,
        payload: {
          configuration_method: src_views_CRUD_data_database_types__WEBPACK_IMPORTED_MODULE_14__["CONFIGURATION_METHOD"].SQLALCHEMY_URI } });


    }
    if (databaseId && show) {
      fetchDB();
    }
  }, [show, databaseId]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    if (dbFetched) {
      setDB({
        type: ActionType.fetched,
        payload: dbFetched });

      // keep a copy of the name separate for display purposes
      // because it shouldn't change when the form is updated
      setDbName(dbFetched.database_name);
    }
  }, [dbFetched]);
  const tabChange = key => {
    setTabKey(key);
  };
  const dbModel = (availableDbs == null ? void 0 : (_availableDbs$databas = availableDbs.databases) == null ? void 0 : _babel_runtime_corejs3_core_js_stable_instance_find__WEBPACK_IMPORTED_MODULE_3___default()(_availableDbs$databas).call(_availableDbs$databas, available => available.engine === (db == null ? void 0 : db.engine))) || {};
  const disableSave = !hasConnectedDb && (
  useSqlAlchemyForm ?
  !(db != null && (_db$database_name2 = db.database_name) != null && _babel_runtime_corejs3_core_js_stable_instance_trim__WEBPACK_IMPORTED_MODULE_4___default()(_db$database_name2).call(_db$database_name2) && db != null && db.sqlalchemy_uri) :
  // disable the button if there is no dbModel.parameters or if
  // any required fields are falsy
  !(dbModel != null && dbModel.parameters) ||
  !!_babel_runtime_corejs3_core_js_stable_instance_filter__WEBPACK_IMPORTED_MODULE_2___default()(_context = dbModel.parameters.required).call(_context, field => {var _db$parameters;return _babel_runtime_corejs3_core_js_stable_instance_includes__WEBPACK_IMPORTED_MODULE_1___default()(FALSY_FORM_VALUES).call(FALSY_FORM_VALUES, db == null ? void 0 : (_db$parameters = db.parameters) == null ? void 0 : _db$parameters[field]);}).length);
  return useTabLayout ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(src_components_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], { css: theme => [
    _styles__WEBPACK_IMPORTED_MODULE_18__["antDTabsStyles"],
    Object(_styles__WEBPACK_IMPORTED_MODULE_18__["antDModalStyles"])(theme),
    _styles__WEBPACK_IMPORTED_MODULE_18__["antDModalNoPaddingStyles"],
    Object(_styles__WEBPACK_IMPORTED_MODULE_18__["formHelperStyles"])(theme)],
    name: "database", disablePrimaryButton: disableSave, "data-test": "database-modal", height: "600px", onHandledPrimaryAction: onSave, onHide: onClose, primaryButtonName: isEditMode ? Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Save') : Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Connect'), width: "500px", show: show, title: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("h4", null, isEditMode ? Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Edit database') : Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Connect a database')) },
  isEditMode ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["TabHeader"], null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["EditHeaderTitle"], null, db == null ? void 0 : db.backend),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["EditHeaderSubtitle"], null, dbName)) :
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["TabHeader"], null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["CreateHeaderTitle"], null, "Enter Primary Credentials"),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["CreateHeaderSubtitle"], null, "Need help? Learn how to connect your database",
  ' ',
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("a", { href: DOCUMENTATION_LINK, target: "_blank", rel: "noopener noreferrer" }, "here"), ".")),





  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("hr", null),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(src_components_Tabs__WEBPACK_IMPORTED_MODULE_7__["default"], { defaultActiveKey: DEFAULT_TAB_KEY, activeKey: tabKey, onTabClick: tabChange, animated: { inkBar: true, tabPane: true } },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_styles__WEBPACK_IMPORTED_MODULE_18__["StyledBasicTab"], { tab: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("span", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Basic')), key: "1" },
  useSqlAlchemyForm ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_SqlAlchemyForm__WEBPACK_IMPORTED_MODULE_16__["default"], { db: db, onInputChange: ({ target }) => onChange(ActionType.inputChange, {
      type: target.type,
      name: target.name,
      checked: target.checked,
      value: target.value }),
    conf: conf, testConnection: testConnection }) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("div", null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("p", null, "TODO: form")),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(src_common_components__WEBPACK_IMPORTED_MODULE_8__["Alert"], { css: theme => Object(_styles__WEBPACK_IMPORTED_MODULE_18__["antDAlertStyles"])(theme), message: "Additional fields may be required", description: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, "Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has",


    ' ',
    Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("a", { href: DOCUMENTATION_LINK, target: "_blank", rel: "noopener noreferrer" }, "here"), "."),



    type: "info", showIcon: true })),

  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(src_components_Tabs__WEBPACK_IMPORTED_MODULE_7__["default"].TabPane, { tab: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("span", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Advanced')), key: "2" },
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_ExtraOptions__WEBPACK_IMPORTED_MODULE_15__["default"], { db: db, onInputChange: ({ target }) => onChange(ActionType.inputChange, {
      type: target.type,
      name: target.name,
      checked: target.checked,
      value: target.value }),
    onTextChange: ({ target }) => onChange(ActionType.textChange, {
      name: target.name,
      value: target.value }),
    onEditorChange: payload => onChange(ActionType.editorChange, payload) })))) :


  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(src_components_Modal__WEBPACK_IMPORTED_MODULE_9__["default"], { css: theme => [
    _styles__WEBPACK_IMPORTED_MODULE_18__["antDModalNoPaddingStyles"],
    Object(_styles__WEBPACK_IMPORTED_MODULE_18__["antDModalStyles"])(theme),
    Object(_styles__WEBPACK_IMPORTED_MODULE_18__["formHelperStyles"])(theme),
    Object(_styles__WEBPACK_IMPORTED_MODULE_18__["formStyles"])(theme)],
    name: "database", disablePrimaryButton: disableSave, height: "600px", onHandledPrimaryAction: onSave, onHide: onClose, primaryButtonName: hasConnectedDb ? Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Finish') : Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Connect'), width: "500px", show: show, title: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])("h4", null, Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["t"])('Connect a database')) },
  hasConnectedDb ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_ExtraOptions__WEBPACK_IMPORTED_MODULE_15__["default"], { db: db, onInputChange: ({ target }) => onChange(ActionType.inputChange, {
      type: target.type,
      name: target.name,
      checked: target.checked,
      value: target.value }),
    onTextChange: ({ target }) => onChange(ActionType.textChange, {
      name: target.name,
      value: target.value }),
    onEditorChange: payload => onChange(ActionType.editorChange, payload) }) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null,
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(_DatabaseConnectionForm__WEBPACK_IMPORTED_MODULE_17__["default"], { dbModel: dbModel, onParametersChange: ({ target }) => onChange(ActionType.parametersChange, {
      type: target.type,
      name: target.name,
      checked: target.checked,
      value: target.value }),
    onChange: ({ target }) => onChange(ActionType.textChange, {
      name: target.name,
      value: target.value }),
    getValidation: () => getValidation(db), validationErrors: validationErrors }),
  Object(_emotion_react__WEBPACK_IMPORTED_MODULE_19__["jsx"])(src_components_Button__WEBPACK_IMPORTED_MODULE_10__["default"], { buttonStyle: "link", onClick: () => setDB({
      type: ActionType.configMethodChange,
      payload: {
        configuration_method: src_views_CRUD_data_database_types__WEBPACK_IMPORTED_MODULE_14__["CONFIGURATION_METHOD"].SQLALCHEMY_URI } }),

    css: _styles__WEBPACK_IMPORTED_MODULE_18__["buttonLinkStyles"] }, "Connect this database with a SQLAlchemy URI string instead")));




};__signature__(DatabaseModal, "useReducer{[db, setDB](null)}\nuseState{[tabKey, setTabKey](DEFAULT_TAB_KEY)}\nuseAvailableDatabases{[availableDbs, getAvailableDbs]}\nuseDatabaseValidation{[validationErrors, getValidation]}\nuseState{[hasConnectedDb, setHasConnectedDb](false)}\nuseState{[dbName, setDbName]('')}\nuseCommonConf{conf}\nuseSingleViewResource{{ state: { loading: dbLoading, resource: dbFetched }, fetchResource, createResource, updateResource, }}\nuseEffect{}\nuseEffect{}", () => [src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_12__["useAvailableDatabases"], src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_12__["useDatabaseValidation"], src_views_CRUD_data_database_state__WEBPACK_IMPORTED_MODULE_13__["useCommonConf"], src_views_CRUD_hooks__WEBPACK_IMPORTED_MODULE_12__["useSingleViewResource"]]);const _default =
Object(src_messageToasts_enhancers_withToasts__WEBPACK_IMPORTED_MODULE_11__["default"])(DatabaseModal);/* harmony default export */ __webpack_exports__["default"] = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(DOCUMENTATION_LINK, "DOCUMENTATION_LINK", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\index.tsx");reactHotLoader.register(ActionType, "ActionType", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\index.tsx");reactHotLoader.register(dbReducer, "dbReducer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\index.tsx");reactHotLoader.register(DEFAULT_TAB_KEY, "DEFAULT_TAB_KEY", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\index.tsx");reactHotLoader.register(FALSY_FORM_VALUES, "FALSY_FORM_VALUES", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\index.tsx");reactHotLoader.register(DatabaseModal, "DatabaseModal", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\index.tsx");reactHotLoader.register(_default, "default", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\index.tsx");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/views/CRUD/data/database/DatabaseModal/styles.ts":
/*!**************************************************************!*\
  !*** ./src/views/CRUD/data/database/DatabaseModal/styles.ts ***!
  \**************************************************************/
/*! exports provided: StyledFormHeader, antdCollapseStyles, antDTabsStyles, antDModalNoPaddingStyles, formScrollableStyles, antDModalStyles, antDAlertStyles, formHelperStyles, wideButton, formStyles, validatedFormStyles, StyledInputContainer, StyledJsonEditor, StyledExpandableForm, StyledBasicTab, buttonLinkStyles, TabHeader, CreateHeaderTitle, CreateHeaderSubtitle, EditHeaderTitle, EditHeaderSubtitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledFormHeader", function() { return StyledFormHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "antdCollapseStyles", function() { return antdCollapseStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "antDTabsStyles", function() { return antDTabsStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "antDModalNoPaddingStyles", function() { return antDModalNoPaddingStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formScrollableStyles", function() { return formScrollableStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "antDModalStyles", function() { return antDModalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "antDAlertStyles", function() { return antDAlertStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formHelperStyles", function() { return formHelperStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wideButton", function() { return wideButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formStyles", function() { return formStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatedFormStyles", function() { return validatedFormStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledInputContainer", function() { return StyledInputContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledJsonEditor", function() { return StyledJsonEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledExpandableForm", function() { return StyledExpandableForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledBasicTab", function() { return StyledBasicTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonLinkStyles", function() { return buttonLinkStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeader", function() { return TabHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateHeaderTitle", function() { return CreateHeaderTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateHeaderSubtitle", function() { return CreateHeaderSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHeaderTitle", function() { return EditHeaderTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHeaderSubtitle", function() { return EditHeaderSubtitle; });
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var src_components_AsyncAceEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/AsyncAceEditor */ "./src/components/AsyncAceEditor/index.tsx");
/* harmony import */ var src_components_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/Tabs */ "./src/components/Tabs/index.ts");
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



const CTAS_CVAS_SCHEMA_FORM_HEIGHT = 102;
const EXPOSE_IN_SQLLAB_FORM_HEIGHT = CTAS_CVAS_SCHEMA_FORM_HEIGHT + 52;
const EXPOSE_ALL_FORM_HEIGHT = EXPOSE_IN_SQLLAB_FORM_HEIGHT + 102;
const anticonHeight = 12;
const StyledFormHeader = _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"].header`
  border-bottom: ${({ theme }) => `${theme.gridUnit * 0.25}px solid
    ${theme.colors.grayscale.light2};`}
  padding-left: ${({ theme }) => theme.gridUnit * 4}px;
  padding-right: ${({ theme }) => theme.gridUnit * 4}px;
  margin-bottom: ${({ theme }) => theme.gridUnit * 4}px;
  .helper {
    color: ${({ theme }) => theme.colors.grayscale.base};
    font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
  }
  h4 {
    color: ${({ theme }) => theme.colors.grayscale.dark2};
    font-weight: bold;
    font-size: ${({ theme }) => theme.typography.sizes.l}px;
  }
`;
const antdCollapseStyles = theme => _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
  .ant-collapse-header {
    padding-top: ${theme.gridUnit * 3.5}px;
    padding-bottom: ${theme.gridUnit * 2.5}px;

    .anticon.ant-collapse-arrow {
      top: calc(50% - ${anticonHeight / 2}px);
    }
    .helper {
      color: ${theme.colors.grayscale.base};
    }
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: ${theme.gridUnit}px;
  }
  p.helper {
    margin-bottom: 0;
    padding: 0;
  }
`;
const antDTabsStyles = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`;
const antDModalNoPaddingStyles = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
  }
`;
const formScrollableStyles = theme => _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
  overflow-y: scroll;
  padding-left: ${theme.gridUnit * 4}px;
  padding-right: ${theme.gridUnit * 4}px;
`;
const antDModalStyles = theme => _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
  .ant-modal-header {
    padding: ${theme.gridUnit * 4.5}px ${theme.gridUnit * 4}px
      ${theme.gridUnit * 4}px;
  }

  .ant-modal-close-x .close {
    color: ${theme.colors.grayscale.dark1};
    opacity: 1;
  }
  .ant-modal-title > h4 {
    font-weight: bold;
  }
`;
const antDAlertStyles = theme => _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
  border: 1px solid ${theme.colors.info.base};
  padding: ${theme.gridUnit * 4}px;
  margin: ${theme.gridUnit * 8}px 0 0;
  .ant-alert-message {
    color: ${theme.colors.info.dark2};
    font-size: ${theme.typography.sizes.s + 1}px;
    font-weight: bold;
  }
  .ant-alert-description {
    color: ${theme.colors.info.dark2};
    font-size: ${theme.typography.sizes.s + 1}px;
    line-height: ${theme.gridUnit * 4}px;
    .ant-alert-icon {
      margin-right: ${theme.gridUnit * 2.5}px;
      font-size: ${theme.typography.sizes.l + 1}px;
      position: relative;
      top: ${theme.gridUnit / 4}px;
    }
  }
`;
const formHelperStyles = theme => _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
  .required {
    margin-left: ${theme.gridUnit / 2}px;
    color: ${theme.colors.error.base};
  }

  .helper {
    display: block;
    padding: ${theme.gridUnit}px 0;
    color: ${theme.colors.grayscale.light1};
    font-size: ${theme.typography.sizes.s - 1}px;
    text-align: left;
  }
`;
const wideButton = theme => _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
  width: 100%;
  border: 1px solid ${theme.colors.primary.dark2};
  color: ${theme.colors.primary.dark2};
  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.primary.dark1};
    color: ${theme.colors.primary.dark1};
  }
`;
const formStyles = theme => _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
  .form-group {
    margin-bottom: ${theme.gridUnit * 4}px;
    &-w-50 {
      display: inline-block;
      width: ${`calc(50% - ${theme.gridUnit * 4}px)`};
      & + .form-group-w-50 {
        margin-left: ${theme.gridUnit * 8}px;
      }
    }
  }
  .control-label {
    color: ${theme.colors.grayscale.dark1};
    font-size: ${theme.typography.sizes.s - 1}px;
  }
  .helper {
    color: ${theme.colors.grayscale.light1};
    font-size: ${theme.typography.sizes.s - 1}px;
    margin-top: ${theme.gridUnit * 1.5}px;
  }
  .ant-tabs-content-holder {
    overflow: auto;
    max-height: 475px;
  }
`;
const validatedFormStyles = theme => _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
  label {
    color: ${theme.colors.grayscale.dark1};
    font-size: ${theme.typography.sizes.s - 1}px;
    margin-bottom: 0;
  }
`;
const StyledInputContainer = _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"].div`
  margin-bottom: ${({ theme }) => theme.gridUnit * 6}px;
  &.mb-0 {
    margin-bottom: 0;
  }
  &.mb-8 {
    margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  }

  .control-label {
    color: ${({ theme }) => theme.colors.grayscale.dark1};
    font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
    margin-bottom: ${({ theme }) => theme.gridUnit * 2}px;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .input-container {
    display: flex;
    align-items: top;

    label {
      display: flex;
      margin-left: ${({ theme }) => theme.gridUnit * 2}px;
      margin-top: ${({ theme }) => theme.gridUnit * 0.75}px;
      font-family: ${({ theme }) => theme.typography.families.sansSerif};
      font-size: ${({ theme }) => theme.typography.sizes.m}px;
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
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${({ theme }) => theme.gridUnit * 8}px;
    margin-bottom: 0;
    padding: 0;
    .control-label {
      margin-bottom: 0;
    }
    &.open {
      height: ${CTAS_CVAS_SCHEMA_FORM_HEIGHT}px;
      padding-right: ${({ theme }) => theme.gridUnit * 5}px;
    }
  }
`;
const StyledJsonEditor = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"])(src_components_AsyncAceEditor__WEBPACK_IMPORTED_MODULE_2__["JsonEditor"])`
  flex: 1 1 auto;
  border: 1px solid ${({ theme }) => theme.colors.grayscale.light2};
  border-radius: ${({ theme }) => theme.gridUnit}px;
`;
const StyledExpandableForm = _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"].div`
  padding-top: ${({ theme }) => theme.gridUnit}px;
  .input-container {
    padding-top: ${({ theme }) => theme.gridUnit}px;
    padding-bottom: ${({ theme }) => theme.gridUnit}px;
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${({ theme }) => theme.gridUnit * 7}px;
    &.open {
      height: ${EXPOSE_IN_SQLLAB_FORM_HEIGHT}px;
      &.ctas-open {
        height: ${EXPOSE_ALL_FORM_HEIGHT}px;
      }
    }
  }
`;
const StyledBasicTab = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"])(src_components_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"].TabPane)`
  padding-left: ${({ theme }) => theme.gridUnit * 4}px;
  padding-right: ${({ theme }) => theme.gridUnit * 4}px;
  margin-top: ${({ theme }) => theme.gridUnit * 6}px;
`;
const buttonLinkStyles = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
  font-weight: 400;
  text-transform: initial;
`;
const TabHeader = _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"].div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  margin: 0 ${({ theme }) => theme.gridUnit * 4}px
    ${({ theme }) => theme.gridUnit * 8}px;
`;
const CreateHeaderTitle = _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"].div`
  color: ${({ theme }) => theme.colors.grayscale.dark2};
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.sizes.m}px;
  padding: ${({ theme }) => theme.gridUnit * 1}px 0;
`;
const CreateHeaderSubtitle = _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"].div`
  color: ${({ theme }) => theme.colors.grayscale.dark1};
  font-size: ${({ theme }) => theme.typography.sizes.s}px;
`;
const EditHeaderTitle = _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"].div`
  color: ${({ theme }) => theme.colors.grayscale.light1};
  font-size: ${({ theme }) => theme.typography.sizes.s - 1}px;
  text-transform: uppercase;
`;
const EditHeaderSubtitle = _superset_ui_core__WEBPACK_IMPORTED_MODULE_0__["styled"].div`
  color: ${({ theme }) => theme.colors.grayscale.dark1};
  font-size: ${({ theme }) => theme.typography.sizes.l}px;
  font-weight: bold;
`;;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(CTAS_CVAS_SCHEMA_FORM_HEIGHT, "CTAS_CVAS_SCHEMA_FORM_HEIGHT", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(EXPOSE_IN_SQLLAB_FORM_HEIGHT, "EXPOSE_IN_SQLLAB_FORM_HEIGHT", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(EXPOSE_ALL_FORM_HEIGHT, "EXPOSE_ALL_FORM_HEIGHT", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(anticonHeight, "anticonHeight", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(StyledFormHeader, "StyledFormHeader", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(antdCollapseStyles, "antdCollapseStyles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(antDTabsStyles, "antDTabsStyles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(antDModalNoPaddingStyles, "antDModalNoPaddingStyles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(formScrollableStyles, "formScrollableStyles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(antDModalStyles, "antDModalStyles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(antDAlertStyles, "antDAlertStyles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(formHelperStyles, "formHelperStyles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(wideButton, "wideButton", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(formStyles, "formStyles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(validatedFormStyles, "validatedFormStyles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(StyledInputContainer, "StyledInputContainer", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(StyledJsonEditor, "StyledJsonEditor", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(StyledExpandableForm, "StyledExpandableForm", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(StyledBasicTab, "StyledBasicTab", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(buttonLinkStyles, "buttonLinkStyles", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(TabHeader, "TabHeader", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(CreateHeaderTitle, "CreateHeaderTitle", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(CreateHeaderSubtitle, "CreateHeaderSubtitle", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(EditHeaderTitle, "EditHeaderTitle", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");reactHotLoader.register(EditHeaderSubtitle, "EditHeaderSubtitle", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\DatabaseModal\\styles.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/views/CRUD/data/database/state.ts":
/*!***********************************************!*\
  !*** ./src/views/CRUD/data/database/state.ts ***!
  \***********************************************/
/*! exports provided: useCommonConf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCommonConf", function() { return useCommonConf; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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

function useCommonConf() {
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.common.conf);
}__signature__(useCommonConf, "useSelector{}", () => [react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"]]);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(useCommonConf, "useCommonConf", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\state.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/views/CRUD/data/database/types.ts":
/*!***********************************************!*\
  !*** ./src/views/CRUD/data/database/types.ts ***!
  \***********************************************/
/*! exports provided: CONFIGURATION_METHOD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIGURATION_METHOD", function() { return CONFIGURATION_METHOD; });
(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; // the values should align with the database
// model enum in superset/superset/models/core.py
var CONFIGURATION_METHOD;
(function (CONFIGURATION_METHOD) {
  CONFIGURATION_METHOD["SQLALCHEMY_URI"] = "sqlalchemy_form";
  CONFIGURATION_METHOD["DYNAMIC_FORM"] = "dynamic_form";
})(CONFIGURATION_METHOD || (CONFIGURATION_METHOD = {}));;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(CONFIGURATION_METHOD, "CONFIGURATION_METHOD", "G:\\workspace\\boke-pro\\superset-all\\superset\\superset-frontend\\src\\views\\CRUD\\data\\database\\types.ts");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=DatabaseList.9ed865ea.chunk.js.map