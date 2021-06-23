(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[166],{

/***/ "./node_modules/@svgr/webpack/lib/index.js?-svgo,+titleProp,+ref!./images/icons/placeholder.svg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./images/icons/placeholder.svg ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  x: 2,
  y: 2,
  width: 20,
  height: 20,
  fill: "currentColor"
});

function SvgPlaceholder({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref);
}

const ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgPlaceholder);
/* harmony default export */ __webpack_exports__["default"] = (ForwardRef);

/***/ })

}]);
//# sourceMappingURL=166.9ed865ea.chunk.js.map