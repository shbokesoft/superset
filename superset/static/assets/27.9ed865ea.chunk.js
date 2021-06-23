(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/@deck.gl/layers/dist/esm/geojson-layer/geojson-layer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/geojson-layer/geojson-layer.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeoJsonLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/lib/composite-layer.js");
/* harmony import */ var _scatterplot_layer_scatterplot_layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scatterplot-layer/scatterplot-layer */ "./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer.js");
/* harmony import */ var _path_layer_path_layer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../path-layer/path-layer */ "./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/materials/phong-material.js");
/* harmony import */ var _solid_polygon_layer_solid_polygon_layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../solid-polygon-layer/solid-polygon-layer */ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer.js");
/* harmony import */ var _geojson__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./geojson */ "./node_modules/@deck.gl/layers/dist/esm/geojson-layer/geojson.js");











var defaultLineColor = [0, 0, 0, 255];
var defaultFillColor = [0, 0, 0, 255];
var defaultMaterial = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__["default"]();
var defaultProps = {
  stroked: true,
  filled: true,
  extruded: false,
  wireframe: false,
  lineWidthUnits: 'meters',
  lineWidthScale: 1,
  lineWidthMinPixels: 0,
  lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
  lineJointRounded: false,
  lineMiterLimit: 4,
  elevationScale: 1,
  pointRadiusScale: 1,
  pointRadiusMinPixels: 0,
  pointRadiusMaxPixels: Number.MAX_SAFE_INTEGER,
  lineDashJustified: false,
  fp64: false,
  getLineColor: {
    type: 'accessor',
    value: defaultLineColor
  },
  getFillColor: {
    type: 'accessor',
    value: defaultFillColor
  },
  getRadius: {
    type: 'accessor',
    value: 1
  },
  getLineWidth: {
    type: 'accessor',
    value: 1
  },
  getLineDashArray: {
    type: 'accessor',
    value: [0, 0]
  },
  getElevation: {
    type: 'accessor',
    value: 1000
  },
  material: defaultMaterial
};

function getCoordinates(f) {
  return f.geometry.coordinates;
}

function unwrappingAccessor(accessor) {
  if (typeof accessor !== 'function') return accessor;
  return function (feature) {
    return accessor(Object(_geojson__WEBPACK_IMPORTED_MODULE_10__["unwrapSourceFeature"])(feature));
  };
}

var GeoJsonLayer = function (_CompositeLayer) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GeoJsonLayer, _CompositeLayer);

  function GeoJsonLayer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GeoJsonLayer);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GeoJsonLayer).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GeoJsonLayer, [{
    key: "initializeState",
    value: function initializeState() {
      this.state = {
        features: {}
      };
    }
  }, {
    key: "updateState",
    value: function updateState(_ref) {
      var oldProps = _ref.oldProps,
          props = _ref.props,
          changeFlags = _ref.changeFlags;

      if (changeFlags.dataChanged) {
        var data = props.data;
        var features = Object(_geojson__WEBPACK_IMPORTED_MODULE_10__["getGeojsonFeatures"])(data);
        this.state.features = Object(_geojson__WEBPACK_IMPORTED_MODULE_10__["separateGeojsonFeatures"])(features);
      }
    }
  }, {
    key: "getPickingInfo",
    value: function getPickingInfo(_ref2) {
      var info = _ref2.info,
          sourceLayer = _ref2.sourceLayer;
      return Object.assign(info, {
        object: info.object ? Object(_geojson__WEBPACK_IMPORTED_MODULE_10__["unwrapSourceFeature"])(info.object) : info.object,
        index: info.object ? Object(_geojson__WEBPACK_IMPORTED_MODULE_10__["unwrapSourceFeatureIndex"])(info.object) : info.index
      });
    }
  }, {
    key: "renderLayers",
    value: function renderLayers() {
      var features = this.state.features;
      var pointFeatures = features.pointFeatures,
          lineFeatures = features.lineFeatures,
          polygonFeatures = features.polygonFeatures,
          polygonOutlineFeatures = features.polygonOutlineFeatures;
      var _this$props = this.props,
          stroked = _this$props.stroked,
          filled = _this$props.filled,
          extruded = _this$props.extruded,
          wireframe = _this$props.wireframe,
          material = _this$props.material,
          transitions = _this$props.transitions;
      var _this$props2 = this.props,
          lineWidthUnits = _this$props2.lineWidthUnits,
          lineWidthScale = _this$props2.lineWidthScale,
          lineWidthMinPixels = _this$props2.lineWidthMinPixels,
          lineWidthMaxPixels = _this$props2.lineWidthMaxPixels,
          lineJointRounded = _this$props2.lineJointRounded,
          lineMiterLimit = _this$props2.lineMiterLimit,
          pointRadiusScale = _this$props2.pointRadiusScale,
          pointRadiusMinPixels = _this$props2.pointRadiusMinPixels,
          pointRadiusMaxPixels = _this$props2.pointRadiusMaxPixels,
          elevationScale = _this$props2.elevationScale,
          lineDashJustified = _this$props2.lineDashJustified,
          fp64 = _this$props2.fp64;
      var _this$props3 = this.props,
          getLineColor = _this$props3.getLineColor,
          getFillColor = _this$props3.getFillColor,
          getRadius = _this$props3.getRadius,
          getLineWidth = _this$props3.getLineWidth,
          getLineDashArray = _this$props3.getLineDashArray,
          getElevation = _this$props3.getElevation,
          updateTriggers = _this$props3.updateTriggers;
      var PolygonFillLayer = this.getSubLayerClass('polygons-fill', _solid_polygon_layer_solid_polygon_layer__WEBPACK_IMPORTED_MODULE_9__["default"]);
      var PolygonStrokeLayer = this.getSubLayerClass('polygons-stroke', _path_layer_path_layer__WEBPACK_IMPORTED_MODULE_7__["default"]);
      var LineStringsLayer = this.getSubLayerClass('line-strings', _path_layer_path_layer__WEBPACK_IMPORTED_MODULE_7__["default"]);
      var PointsLayer = this.getSubLayerClass('points', _scatterplot_layer_scatterplot_layer__WEBPACK_IMPORTED_MODULE_6__["default"]);
      var polygonFillLayer = this.shouldRenderSubLayer('polygons-fill', polygonFeatures) && new PolygonFillLayer({
        fp64: fp64,
        extruded: extruded,
        elevationScale: elevationScale,
        filled: filled,
        wireframe: wireframe,
        material: material,
        getElevation: unwrappingAccessor(getElevation),
        getFillColor: unwrappingAccessor(getFillColor),
        getLineColor: unwrappingAccessor(getLineColor),
        transitions: transitions && {
          getPolygon: transitions.geometry,
          getElevation: transitions.getElevation,
          getFillColor: transitions.getFillColor,
          getLineColor: transitions.getLineColor
        }
      }, this.getSubLayerProps({
        id: 'polygons-fill',
        updateTriggers: {
          getElevation: updateTriggers.getElevation,
          getFillColor: updateTriggers.getFillColor,
          getLineColor: updateTriggers.getLineColor
        }
      }), {
        data: polygonFeatures,
        getPolygon: getCoordinates
      });
      var polygonLineLayer = !extruded && stroked && this.shouldRenderSubLayer('polygons-stroke', polygonOutlineFeatures) && new PolygonStrokeLayer({
        fp64: fp64,
        widthUnits: lineWidthUnits,
        widthScale: lineWidthScale,
        widthMinPixels: lineWidthMinPixels,
        widthMaxPixels: lineWidthMaxPixels,
        rounded: lineJointRounded,
        miterLimit: lineMiterLimit,
        dashJustified: lineDashJustified,
        getColor: unwrappingAccessor(getLineColor),
        getWidth: unwrappingAccessor(getLineWidth),
        getDashArray: unwrappingAccessor(getLineDashArray),
        transitions: transitions && {
          getPath: transitions.geometry,
          getColor: transitions.getLineColor,
          getWidth: transitions.getLineWidth
        }
      }, this.getSubLayerProps({
        id: 'polygons-stroke',
        updateTriggers: {
          getColor: updateTriggers.getLineColor,
          getWidth: updateTriggers.getLineWidth,
          getDashArray: updateTriggers.getLineDashArray
        }
      }), {
        data: polygonOutlineFeatures,
        getPath: getCoordinates
      });
      var pathLayer = this.shouldRenderSubLayer('linestrings', lineFeatures) && new LineStringsLayer({
        fp64: fp64,
        widthUnits: lineWidthUnits,
        widthScale: lineWidthScale,
        widthMinPixels: lineWidthMinPixels,
        widthMaxPixels: lineWidthMaxPixels,
        rounded: lineJointRounded,
        miterLimit: lineMiterLimit,
        dashJustified: lineDashJustified,
        getColor: unwrappingAccessor(getLineColor),
        getWidth: unwrappingAccessor(getLineWidth),
        getDashArray: unwrappingAccessor(getLineDashArray),
        transitions: transitions && {
          getPath: transitions.geometry,
          getColor: transitions.getLineColor,
          getWidth: transitions.getLineWidth
        }
      }, this.getSubLayerProps({
        id: 'line-strings',
        updateTriggers: {
          getColor: updateTriggers.getLineColor,
          getWidth: updateTriggers.getLineWidth,
          getDashArray: updateTriggers.getLineDashArray
        }
      }), {
        data: lineFeatures,
        getPath: getCoordinates
      });
      var pointLayer = this.shouldRenderSubLayer('points', pointFeatures) && new PointsLayer({
        fp64: fp64,
        stroked: stroked,
        filled: filled,
        radiusScale: pointRadiusScale,
        radiusMinPixels: pointRadiusMinPixels,
        radiusMaxPixels: pointRadiusMaxPixels,
        lineWidthUnits: lineWidthUnits,
        lineWidthScale: lineWidthScale,
        lineWidthMinPixels: lineWidthMinPixels,
        lineWidthMaxPixels: lineWidthMaxPixels,
        getFillColor: unwrappingAccessor(getFillColor),
        getLineColor: unwrappingAccessor(getLineColor),
        getRadius: unwrappingAccessor(getRadius),
        getLineWidth: unwrappingAccessor(getLineWidth),
        transitions: transitions && {
          getPosition: transitions.geometry,
          getFillColor: transitions.getFillColor,
          getLineColor: transitions.getLineColor,
          getRadius: transitions.getRadius,
          getLineWidth: transitions.getLineWidth
        }
      }, this.getSubLayerProps({
        id: 'points',
        updateTriggers: {
          getFillColor: updateTriggers.getFillColor,
          getLineColor: updateTriggers.getLineColor,
          getRadius: updateTriggers.getRadius,
          getLineWidth: updateTriggers.getLineWidth
        }
      }), {
        data: pointFeatures,
        getPosition: getCoordinates
      });
      return [!extruded && polygonFillLayer, polygonLineLayer, pathLayer, pointLayer, extruded && polygonFillLayer];
    }
  }]);

  return GeoJsonLayer;
}(_deck_gl_core__WEBPACK_IMPORTED_MODULE_5__["default"]);


GeoJsonLayer.layerName = 'GeoJsonLayer';
GeoJsonLayer.defaultProps = defaultProps;
//# sourceMappingURL=geojson-layer.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/geojson-layer/geojson.js":
/*!************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/geojson-layer/geojson.js ***!
  \************************************************************************/
/*! exports provided: getGeojsonFeatures, separateGeojsonFeatures, unwrapSourceFeature, unwrapSourceFeatureIndex, validateGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeojsonFeatures", function() { return getGeojsonFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separateGeojsonFeatures", function() { return separateGeojsonFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrapSourceFeature", function() { return unwrapSourceFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unwrapSourceFeatureIndex", function() { return unwrapSourceFeatureIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateGeometry", function() { return validateGeometry; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/utils/log.js");

function getGeojsonFeatures(geojson) {
  if (Array.isArray(geojson)) {
    return geojson;
  }

  _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["default"].assert(geojson.type, 'GeoJSON does not have type');

  switch (geojson.type) {
    case 'Feature':
      return [geojson];

    case 'FeatureCollection':
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["default"].assert(Array.isArray(geojson.features), 'GeoJSON does not have features array');
      return geojson.features;

    default:
      return [{
        geometry: geojson
      }];
  }
}
function separateGeojsonFeatures(features) {
  var separated = {
    pointFeatures: [],
    lineFeatures: [],
    polygonFeatures: [],
    polygonOutlineFeatures: []
  };

  for (var featureIndex = 0; featureIndex < features.length; featureIndex++) {
    var feature = features[featureIndex];
    _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["default"].assert(feature && feature.geometry, 'GeoJSON does not have geometry');
    var geometry = feature.geometry;
    var sourceFeature = {
      feature: feature,
      index: featureIndex
    };

    if (geometry.type === 'GeometryCollection') {
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["default"].assert(Array.isArray(geometry.geometries), 'GeoJSON does not have geometries array');
      var geometries = geometry.geometries;

      for (var i = 0; i < geometries.length; i++) {
        var subGeometry = geometries[i];
        separateGeometry(subGeometry, separated, sourceFeature);
      }
    } else {
      separateGeometry(geometry, separated, sourceFeature);
    }
  }

  return separated;
}

function separateGeometry(geometry, separated, sourceFeature) {
  var type = geometry.type,
      coordinates = geometry.coordinates;
  var pointFeatures = separated.pointFeatures,
      lineFeatures = separated.lineFeatures,
      polygonFeatures = separated.polygonFeatures,
      polygonOutlineFeatures = separated.polygonOutlineFeatures;

  if (!validateGeometry(type, coordinates)) {
    _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["default"].warn("".concat(type, " coordinates are malformed"))();
    return;
  }

  switch (type) {
    case 'Point':
      pointFeatures.push({
        geometry: geometry,
        sourceFeature: sourceFeature
      });
      break;

    case 'MultiPoint':
      coordinates.forEach(function (point) {
        pointFeatures.push({
          geometry: {
            type: 'Point',
            coordinates: point
          },
          sourceFeature: sourceFeature
        });
      });
      break;

    case 'LineString':
      lineFeatures.push({
        geometry: geometry,
        sourceFeature: sourceFeature
      });
      break;

    case 'MultiLineString':
      coordinates.forEach(function (path) {
        lineFeatures.push({
          geometry: {
            type: 'LineString',
            coordinates: path
          },
          sourceFeature: sourceFeature
        });
      });
      break;

    case 'Polygon':
      polygonFeatures.push({
        geometry: geometry,
        sourceFeature: sourceFeature
      });
      coordinates.forEach(function (path) {
        polygonOutlineFeatures.push({
          geometry: {
            type: 'LineString',
            coordinates: path
          },
          sourceFeature: sourceFeature
        });
      });
      break;

    case 'MultiPolygon':
      coordinates.forEach(function (polygon) {
        polygonFeatures.push({
          geometry: {
            type: 'Polygon',
            coordinates: polygon
          },
          sourceFeature: sourceFeature
        });
        polygon.forEach(function (path) {
          polygonOutlineFeatures.push({
            geometry: {
              type: 'LineString',
              coordinates: path
            },
            sourceFeature: sourceFeature
          });
        });
      });
      break;

    default:
  }
}

function unwrapSourceFeature(wrappedFeature) {
  return wrappedFeature.sourceFeature.feature;
}
function unwrapSourceFeatureIndex(wrappedFeature) {
  return wrappedFeature.sourceFeature.index;
}
var COORDINATE_NEST_LEVEL = {
  Point: 1,
  MultiPoint: 2,
  LineString: 2,
  MultiLineString: 3,
  Polygon: 3,
  MultiPolygon: 4
};
function validateGeometry(type, coordinates) {
  var nestLevel = COORDINATE_NEST_LEVEL[type];
  _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["default"].assert(nestLevel, "Unknown GeoJSON type ".concat(type));

  while (coordinates && --nestLevel > 0) {
    coordinates = coordinates[0];
  }

  return coordinates && Number.isFinite(coordinates[0]);
}
//# sourceMappingURL=geojson.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer-fragment.glsl.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer-fragment.glsl.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME path-layer-fragment-shader\n\nprecision highp float;\n\nuniform float jointType;\nuniform float miterLimit;\nuniform float alignMode;\n\nvarying vec4 vColor;\nvarying vec2 vCornerOffset;\nvarying float vMiterLength;\nvarying vec2 vDashArray;\nvarying vec2 vPathPosition;\nvarying float vPathLength;\nfloat mod2(float a, float b) {\n  return a - floor(a / b) * b;\n}\n\nfloat round(float x) {\n  return floor(x + 0.5);\n}\nbool dash_isFragInGap() {\n  float solidLength = vDashArray.x;\n  float gapLength = vDashArray.y;\n\n  float unitLength = solidLength + gapLength;\n\n  if (unitLength == 0.0) {\n    return false;\n  }\n\n  unitLength = mix(\n    unitLength,\n    vPathLength / round(vPathLength / unitLength),\n    alignMode\n  );\n\n  float offset = alignMode * solidLength / 2.0;\n\n  return gapLength > 0.0 &&\n    vPathPosition.y >= 0.0 &&\n    vPathPosition.y <= vPathLength &&\n    mod2(vPathPosition.y + offset, unitLength) > solidLength;\n}\n\nvoid main(void) {\n  if (jointType > 0.0 && vMiterLength > 0.0 && length(vCornerOffset) > 1.0) {\n    discard;\n  }\n  if (jointType == 0.0 && vMiterLength > miterLimit) {\n    discard;\n  }\n  if (vColor.a == 0.0 || dash_isFragInGap()) {\n    discard;\n  }\n  gl_FragColor = vColor;\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n");
//# sourceMappingURL=path-layer-fragment.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer-vertex-64.glsl.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer-vertex-64.glsl.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n#define SHADER_NAME path-layer-vertex-shader-64\n\nattribute vec3 positions;\n\nattribute vec3 instanceStartPositions;\nattribute vec3 instanceEndPositions;\nattribute vec4 instanceStartEndPositions64xyLow;\nattribute vec3 instanceLeftPositions;\nattribute vec3 instanceRightPositions;\nattribute vec4 instanceNeighborPositions64xyLow;\nattribute float instanceStrokeWidths;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\nattribute vec2 instanceDashArrays;\n\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\nuniform float jointType;\nuniform float miterLimit;\n\nuniform float opacity;\n\nvarying vec4 vColor;\nvarying vec2 vCornerOffset;\nvarying float vMiterLength;\nvarying vec2 vDashArray;\nvarying vec2 vPathPosition;\nvarying float vPathLength;\n\nconst float EPSILON = 0.001;\n\nfloat flipIfTrue(bool flag) {\n  return -(float(flag) * 2. - 1.);\n}\n\nvec3 lineJoin(vec2 prevPoint64[2], vec2 currPoint64[2], vec2 nextPoint64[2]) {\n\n  float widthPixels = clamp(project_size_to_pixel(instanceStrokeWidths * widthScale),\n    widthMinPixels, widthMaxPixels) / 2.0;\n  float width = project_pixel_size(widthPixels);\n\n  vec2 deltaA64[2];\n  vec2 deltaB64[2];\n\n  vec2_sub_fp64(currPoint64, prevPoint64, deltaA64);\n  vec2_sub_fp64(nextPoint64, currPoint64, deltaB64);\n\n  vec2 lengthA64 = vec2_length_fp64(deltaA64);\n  vec2 lengthB64 = vec2_length_fp64(deltaB64);\n\n  vec2 deltaA = vec2(deltaA64[0].x, deltaA64[1].x);\n  vec2 deltaB = vec2(deltaB64[0].x, deltaB64[1].x);\n\n  float lenA = lengthA64.x;\n  float lenB = lengthB64.x;\n\n  vec2 offsetVec;\n  float offsetScale;\n  float offsetDirection;\n  lenA = lenA / width > EPSILON ? lenA : 0.0;\n  lenB = lenB / width > EPSILON ? lenB : 0.0;\n  vec2 dirA = lenA > 0. ? deltaA / lenA : vec2(0.0, 0.0);\n  vec2 dirB = lenB > 0. ? deltaB / lenB : vec2(0.0, 0.0);\n\n  vec2 perpA = vec2(-dirA.y, dirA.x);\n  vec2 perpB = vec2(-dirB.y, dirB.x);\n  vec2 tangent = vec2(dirA + dirB);\n  tangent = length(tangent) > 0. ? normalize(tangent) : perpA;\n  vec2 miterVec = vec2(-tangent.y, tangent.x);\n  vec2 perp = mix(perpB, perpA, positions.x);\n  float L = mix(lenB, lenA, positions.x);\n  float sinHalfA = abs(dot(miterVec, perp));\n  float cosHalfA = abs(dot(dirA, miterVec));\n  bool turnsRight = dirA.x * dirB.y > dirA.y * dirB.x;\n  float cornerPosition = mix(\n    flipIfTrue(turnsRight == (positions.y > 0.0)),\n    0.0,\n    positions.z\n  );\n\n  offsetScale = 1.0 / max(sinHalfA, EPSILON);\n  cornerPosition *= float(cornerPosition <= 0.0 || sinHalfA < min(lenA, lenB) / width * cosHalfA);\n  offsetScale = mix(\n    offsetScale,\n    min(offsetScale, L / width / max(cosHalfA, EPSILON)),\n    float(cornerPosition < 0.0)\n  );\n\n  vMiterLength = mix(\n    offsetScale * cornerPosition,\n    mix(offsetScale, 0.0, cornerPosition),\n    step(0.0, cornerPosition)\n  ) - sinHalfA * jointType;\n  offsetDirection = mix(\n    positions.y,\n    mix(\n      flipIfTrue(turnsRight),\n      positions.y * flipIfTrue(turnsRight == (positions.x == 1.)),\n      cornerPosition\n    ),\n    step(0.0, cornerPosition)\n  );\n  offsetVec = mix(miterVec, -tangent, step(0.5, cornerPosition));\n  offsetScale = mix(offsetScale, 1.0 / max(cosHalfA, 0.001), step(0.5, cornerPosition));\n  float isStartCap = step(lenA, 1.0e-5);\n  float isEndCap = step(lenB, 1.0e-5);\n  float isCap = max(isStartCap, isEndCap);\n  cornerPosition = isCap * (1.0 - positions.z);\n  offsetVec = mix(offsetVec, mix(dirB, perpB, cornerPosition), isStartCap);\n  offsetVec = mix(offsetVec, mix(dirA, perpA, cornerPosition), isEndCap);\n  offsetScale = mix(\n    offsetScale,\n    mix(4.0 * jointType, 1.0, cornerPosition),\n    isCap\n  );\n  vMiterLength = mix(vMiterLength, 1.0 - cornerPosition, isCap);\n\n  offsetDirection = mix(\n    offsetDirection,\n    mix(flipIfTrue(isStartCap > 0.), positions.y, cornerPosition),\n    isCap\n  );\n\n  vCornerOffset = offsetVec * offsetDirection * offsetScale;\n  vDashArray = instanceDashArrays;\n  vPathLength = L / width;\n  float isEnd = positions.x;\n  vec2 offsetFromStartOfPath = mix(vCornerOffset, vCornerOffset + deltaA / width, isEnd);\n  vec2 dir = mix(dirB, dirA, isEnd);\n  vPathPosition = vec2(\n    positions.y + positions.z * offsetDirection,\n    dot(offsetFromStartOfPath, dir)\n  );\n\n  return vec3(vCornerOffset * width, 0.0);\n}\n\nvoid main() {\n  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity) / 255.;\n  picking_setPickingColor(instancePickingColors);\n\n  float isEnd = positions.x;\n\n  vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);\n  vec2 currPosition64xyLow = mix(instanceStartEndPositions64xyLow.xy, instanceStartEndPositions64xyLow.zw, isEnd);\n  vec2 projected_curr_position[2];\n  project_position_fp64(currPosition.xy, currPosition64xyLow, projected_curr_position);\n  float projected_curr_position_z = project_size(currPosition.z);\n\n  vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);\n  vec2 prevPosition64xyLow = mix(instanceNeighborPositions64xyLow.xy, instanceStartEndPositions64xyLow.xy, isEnd);\n\n  vec2 projected_prev_position[2];\n  project_position_fp64(prevPosition.xy, prevPosition64xyLow, projected_prev_position);\n  vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);\n  vec2 nextPosition64xyLow = mix(instanceStartEndPositions64xyLow.zw, instanceNeighborPositions64xyLow.zw, isEnd);\n\n  vec2 projected_next_position[2];\n  project_position_fp64(nextPosition.xy, nextPosition64xyLow, projected_next_position);\n\n  vec3 pos = lineJoin(projected_prev_position, projected_curr_position, projected_next_position);\n  vec2 vertex_pos_modelspace[4];\n\n  vertex_pos_modelspace[0] = sum_fp64(vec2(pos.x, 0.0), projected_curr_position[0]);\n  vertex_pos_modelspace[1] = sum_fp64(vec2(pos.y, 0.0), projected_curr_position[1]);\n  vertex_pos_modelspace[2] = vec2(pos.z + projected_curr_position_z, 0.0);\n  vertex_pos_modelspace[3] = vec2(1.0, 0.0);\n\n  gl_Position = project_common_position_to_clipspace_fp64(vertex_pos_modelspace);\n}\n");
//# sourceMappingURL=path-layer-vertex-64.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer-vertex.glsl.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer-vertex.glsl.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME path-layer-vertex-shader\n\nattribute vec3 positions;\n\nattribute vec3 instanceStartPositions;\nattribute vec3 instanceEndPositions;\nattribute vec4 instanceStartEndPositions64xyLow;\nattribute vec3 instanceLeftPositions;\nattribute vec3 instanceRightPositions;\nattribute vec4 instanceNeighborPositions64xyLow;\nattribute float instanceStrokeWidths;\nattribute vec4 instanceColors;\nattribute vec3 instancePickingColors;\nattribute vec2 instanceDashArrays;\n\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\nuniform float jointType;\nuniform float miterLimit;\nuniform bool billboard;\n\nuniform float opacity;\n\nvarying vec4 vColor;\nvarying vec2 vCornerOffset;\nvarying float vMiterLength;\nvarying vec2 vDashArray;\nvarying vec2 vPathPosition;\nvarying float vPathLength;\n\nconst float EPSILON = 0.001;\nconst vec3 ZERO_OFFSET = vec3(0.0);\n\nfloat flipIfTrue(bool flag) {\n  return -(float(flag) * 2. - 1.);\n}\nvec3 lineJoin(\n  vec3 prevPoint, vec3 currPoint, vec3 nextPoint,\n  float relativePosition, bool isEnd, bool isJoint,\n  vec2 width\n) {\n  vec2 deltaA = (currPoint.xy - prevPoint.xy) / width;\n  vec2 deltaB = (nextPoint.xy - currPoint.xy) / width;\n\n  float lenA = length(deltaA);\n  float lenB = length(deltaB);\n  lenA = lenA > EPSILON ? lenA : 0.0;\n  lenB = lenB > EPSILON ? lenB : 0.0;\n\n  vec2 dirA = lenA > 0. ? normalize(deltaA) : vec2(0.0, 0.0);\n  vec2 dirB = lenB > 0. ? normalize(deltaB) : vec2(0.0, 0.0);\n\n  vec2 perpA = vec2(-dirA.y, dirA.x);\n  vec2 perpB = vec2(-dirB.y, dirB.x);\n  vec2 tangent = vec2(dirA + dirB);\n  tangent = length(tangent) > 0. ? normalize(tangent) : perpA;\n  vec2 miterVec = vec2(-tangent.y, tangent.x);\n  vec2 perp = isEnd ? perpA : perpB;\n  float L = isEnd ? lenA : lenB;\n  float sinHalfA = abs(dot(miterVec, perp));\n  float cosHalfA = abs(dot(dirA, miterVec));\n\n  bool turnsRight = dirA.x * dirB.y > dirA.y * dirB.x;\n\n  float offsetScale = 1.0 / max(sinHalfA, EPSILON);\n\n  float cornerPosition = isJoint ?\n    0.0 :\n    flipIfTrue(turnsRight == (relativePosition > 0.0));\n  cornerPosition *=\n    float(cornerPosition <= 0.0 || sinHalfA < min(lenA, lenB) * cosHalfA);\n  if (cornerPosition < 0.0) {\n    offsetScale = min(offsetScale, L / max(cosHalfA, EPSILON));\n  }\n\n  vMiterLength = cornerPosition >= 0.0 ?\n    mix(offsetScale, 0.0, cornerPosition) :\n    offsetScale * cornerPosition;\n  vMiterLength -= sinHalfA * jointType;\n\n  float offsetDirection = mix(\n    positions.y,\n    mix(\n      flipIfTrue(turnsRight),\n      positions.y * flipIfTrue(turnsRight == (positions.x == 1.)),\n      cornerPosition\n    ),\n    step(0.0, cornerPosition)\n  );\n\n  vec2 offsetVec = mix(miterVec, -tangent, step(0.5, cornerPosition));\n  offsetScale = mix(offsetScale, 1.0 / max(cosHalfA, 0.001), step(0.5, cornerPosition));\n  bool isStartCap = step(0.0, -lenA) > 0.5;\n  bool isEndCap = step(0.0, -lenB) > 0.5;\n  bool isCap = isStartCap || isEndCap;\n  cornerPosition = isCap ? (1.0 - positions.z) : 0.;\n  if (isStartCap) {\n    offsetVec = mix(dirB, perpB, cornerPosition);\n  }\n  if (isEndCap) {\n    offsetVec = mix(dirA, perpA, cornerPosition);\n  }\n  if (isCap) {\n    offsetScale = mix(4.0 * jointType, 1.0, cornerPosition);\n    vMiterLength = 1.0 - cornerPosition;\n    offsetDirection = mix(flipIfTrue(isStartCap), positions.y, cornerPosition);\n  }\n\n  vCornerOffset = offsetVec * offsetDirection * offsetScale;\n  vDashArray = instanceDashArrays;\n  vPathLength = L;\n  vec2 offsetFromStartOfPath = vCornerOffset;\n  if (isEnd) {\n    offsetFromStartOfPath += deltaA;\n  }\n  vec2 dir = isEnd ? dirA : dirB;\n  vPathPosition = vec2(\n    positions.y + positions.z * offsetDirection,\n    dot(offsetFromStartOfPath, dir)\n  );\n\n  return currPoint + vec3(vCornerOffset * width, 0.0);\n}\nvec3 lineJoin(vec3 prevPoint, vec3 currPoint, vec3 nextPoint) {\n\n  float relativePosition = positions.y;\n  bool isEnd = positions.x > EPSILON;\n  bool isJoint = positions.z > EPSILON;\n\n  vec2 widthPixels = vec2(clamp(project_size_to_pixel(instanceStrokeWidths * widthScale),\n    widthMinPixels, widthMaxPixels) / 2.0);\n\n  return lineJoin(\n    prevPoint, currPoint, nextPoint,\n    relativePosition, isEnd, isJoint,\n    billboard ? project_pixel_size_to_clipspace(widthPixels) : project_pixel_size(widthPixels)\n  );\n}\nvoid clipLine(inout vec4 position, vec4 refPosition) {\n  if (position.w < EPSILON) {\n    float r = (EPSILON - refPosition.w) / (position.w - refPosition.w);\n    position = refPosition + (position - refPosition) * r;\n  }\n}\n\nvoid main() {\n  vColor = vec4(instanceColors.rgb, instanceColors.a * opacity) / 255.;\n  picking_setPickingColor(instancePickingColors);\n\n  float isEnd = positions.x;\n\n  vec3 prevPosition = mix(instanceLeftPositions, instanceStartPositions, isEnd);\n  vec2 prevPosition64xyLow = mix(instanceNeighborPositions64xyLow.xy, instanceStartEndPositions64xyLow.xy, isEnd);\n\n  vec3 currPosition = mix(instanceStartPositions, instanceEndPositions, isEnd);\n  vec2 currPosition64xyLow = mix(instanceStartEndPositions64xyLow.xy, instanceStartEndPositions64xyLow.zw, isEnd);\n\n  vec3 nextPosition = mix(instanceEndPositions, instanceRightPositions, isEnd);\n  vec2 nextPosition64xyLow = mix(instanceStartEndPositions64xyLow.zw, instanceNeighborPositions64xyLow.zw, isEnd);\n\n  if (billboard) {\n    vec4 prevPositionScreen = project_position_to_clipspace(prevPosition, prevPosition64xyLow, ZERO_OFFSET);\n    vec4 currPositionScreen = project_position_to_clipspace(currPosition, currPosition64xyLow, ZERO_OFFSET);\n    vec4 nextPositionScreen = project_position_to_clipspace(nextPosition, nextPosition64xyLow, ZERO_OFFSET);\n\n    clipLine(prevPositionScreen, currPositionScreen);\n    clipLine(nextPositionScreen, currPositionScreen);\n    clipLine(currPositionScreen, mix(nextPositionScreen, prevPositionScreen, isEnd));\n\n    vec3 pos = lineJoin(\n      prevPositionScreen.xyz / prevPositionScreen.w,\n      currPositionScreen.xyz / currPositionScreen.w,\n      nextPositionScreen.xyz / nextPositionScreen.w\n    );\n\n    gl_Position = vec4(pos * currPositionScreen.w, currPositionScreen.w);\n  } else {\n    prevPosition = project_position(prevPosition, prevPosition64xyLow);\n    currPosition = project_position(currPosition, currPosition64xyLow);\n    nextPosition = project_position(nextPosition, nextPosition64xyLow);\n\n    vec3 pos = lineJoin(prevPosition, currPosition, nextPosition);\n    gl_Position = project_common_position_to_clipspace(vec4(pos, 1.0));\n  }\n}\n");
//# sourceMappingURL=path-layer-vertex.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer.js":
/*!************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PathLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/lib/layer.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/lib/model.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/geometry/geometry.js");
/* harmony import */ var _path_tesselator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./path-tesselator */ "./node_modules/@deck.gl/layers/dist/esm/path-layer/path-tesselator.js");
/* harmony import */ var _path_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./path-layer-vertex.glsl */ "./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer-vertex.glsl.js");
/* harmony import */ var _path_layer_vertex_64_glsl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./path-layer-vertex-64.glsl */ "./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer-vertex-64.glsl.js");
/* harmony import */ var _path_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./path-layer-fragment.glsl */ "./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer-fragment.glsl.js");












var DEFAULT_COLOR = [0, 0, 0, 255];
var defaultProps = {
  widthUnits: 'meters',
  widthScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  widthMinPixels: {
    type: 'number',
    min: 0,
    value: 0
  },
  widthMaxPixels: {
    type: 'number',
    min: 0,
    value: Number.MAX_SAFE_INTEGER
  },
  rounded: false,
  miterLimit: {
    type: 'number',
    min: 0,
    value: 4
  },
  fp64: false,
  dashJustified: false,
  billboard: false,
  getPath: {
    type: 'accessor',
    value: function value(object) {
      return object.path;
    }
  },
  getColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getWidth: {
    type: 'accessor',
    value: 1
  },
  getDashArray: {
    type: 'accessor',
    value: [0, 0]
  }
};
var ATTRIBUTE_TRANSITION = {
  enter: function enter(value, chunk) {
    return chunk.length ? chunk.subarray(chunk.length - value.length) : value;
  }
};

var PathLayer = function (_Layer) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PathLayer, _Layer);

  function PathLayer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PathLayer);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PathLayer).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PathLayer, [{
    key: "getShaders",
    value: function getShaders() {
      return this.use64bitProjection() ? {
        vs: _path_layer_vertex_64_glsl__WEBPACK_IMPORTED_MODULE_11__["default"],
        fs: _path_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_12__["default"],
        modules: ['project64', 'picking']
      } : {
        vs: _path_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_10__["default"],
        fs: _path_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_12__["default"],
        modules: ['project32', 'picking']
      };
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      var _this = this;

      var noAlloc = true;
      var attributeManager = this.getAttributeManager();
      attributeManager.addInstanced({
        instanceStartPositions: {
          size: 3,
          transition: ATTRIBUTE_TRANSITION,
          accessor: 'getPath',
          update: this.calculateStartPositions,
          noAlloc: noAlloc
        },
        instanceEndPositions: {
          size: 3,
          transition: ATTRIBUTE_TRANSITION,
          accessor: 'getPath',
          update: this.calculateEndPositions,
          noAlloc: noAlloc
        },
        instanceStartEndPositions64xyLow: {
          size: 4,
          update: this.calculateInstanceStartEndPositions64xyLow,
          noAlloc: noAlloc
        },
        instanceLeftPositions: {
          size: 3,
          accessor: 'getPath',
          update: this.calculateLeftPositions,
          noAlloc: noAlloc
        },
        instanceRightPositions: {
          size: 3,
          accessor: 'getPath',
          update: this.calculateRightPositions,
          noAlloc: noAlloc
        },
        instanceNeighborPositions64xyLow: {
          size: 4,
          update: this.calculateInstanceNeighborPositions64xyLow,
          noAlloc: noAlloc
        },
        instanceStrokeWidths: {
          size: 1,
          accessor: 'getWidth',
          transition: ATTRIBUTE_TRANSITION,
          defaultValue: 1
        },
        instanceDashArrays: {
          size: 2,
          accessor: 'getDashArray'
        },
        instanceColors: {
          size: 4,
          type: 5121,
          accessor: 'getColor',
          transition: ATTRIBUTE_TRANSITION,
          defaultValue: DEFAULT_COLOR
        },
        instancePickingColors: {
          size: 3,
          type: 5121,
          accessor: function accessor(object, _ref) {
            var index = _ref.index,
                value = _ref.target;
            return _this.encodePickingColor(index, value);
          }
        }
      });
      this.setState({
        pathTesselator: new _path_tesselator__WEBPACK_IMPORTED_MODULE_9__["default"]({})
      });
    }
  }, {
    key: "updateState",
    value: function updateState(_ref2) {
      var oldProps = _ref2.oldProps,
          props = _ref2.props,
          changeFlags = _ref2.changeFlags;

      Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PathLayer.prototype), "updateState", this).call(this, {
        props: props,
        oldProps: oldProps,
        changeFlags: changeFlags
      });

      var attributeManager = this.getAttributeManager();
      var geometryChanged = changeFlags.dataChanged || props.fp64 !== oldProps.fp64 || changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPath);

      if (geometryChanged) {
        var pathTesselator = this.state.pathTesselator;
        pathTesselator.updateGeometry({
          data: props.data,
          getGeometry: props.getPath,
          positionFormat: props.positionFormat,
          fp64: this.use64bitPositions()
        });
        this.setState({
          numInstances: pathTesselator.instanceCount,
          bufferLayout: pathTesselator.bufferLayout
        });
        attributeManager.invalidateAll();
      }

      if (props.fp64 !== oldProps.fp64) {
        var gl = this.context.gl;

        if (this.state.model) {
          this.state.model.delete();
        }

        this.setState({
          model: this._getModel(gl)
        });
        attributeManager.invalidateAll();
      }
    }
  }, {
    key: "draw",
    value: function draw(_ref3) {
      var uniforms = _ref3.uniforms;
      var viewport = this.context.viewport;
      var _this$props = this.props,
          rounded = _this$props.rounded,
          billboard = _this$props.billboard,
          miterLimit = _this$props.miterLimit,
          widthUnits = _this$props.widthUnits,
          widthScale = _this$props.widthScale,
          widthMinPixels = _this$props.widthMinPixels,
          widthMaxPixels = _this$props.widthMaxPixels,
          dashJustified = _this$props.dashJustified;
      var widthMultiplier = widthUnits === 'pixels' ? viewport.distanceScales.metersPerPixel[2] : 1;
      this.state.model.setUniforms(Object.assign({}, uniforms, {
        jointType: Number(rounded),
        billboard: billboard,
        alignMode: Number(dashJustified),
        widthScale: widthScale * widthMultiplier,
        miterLimit: miterLimit,
        widthMinPixels: widthMinPixels,
        widthMaxPixels: widthMaxPixels
      })).draw();
    }
  }, {
    key: "_getModel",
    value: function _getModel(gl) {
      var SEGMENT_INDICES = [0, 2, 1, 1, 2, 4, 1, 4, 3, 3, 4, 5];
      var SEGMENT_POSITIONS = [0, 0, 1, 0, -1, 0, 0, 1, 0, 1, -1, 0, 1, 1, 0, 1, 0, 1];
      return new _luma_gl_core__WEBPACK_IMPORTED_MODULE_7__["default"](gl, Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: new _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__["default"]({
          drawMode: 4,
          attributes: {
            indices: new Uint16Array(SEGMENT_INDICES),
            positions: new Float32Array(SEGMENT_POSITIONS)
          }
        }),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      }));
    }
  }, {
    key: "calculateStartPositions",
    value: function calculateStartPositions(attribute) {
      var pathTesselator = this.state.pathTesselator;
      attribute.bufferLayout = pathTesselator.bufferLayout;
      attribute.value = pathTesselator.get('startPositions');
    }
  }, {
    key: "calculateEndPositions",
    value: function calculateEndPositions(attribute) {
      var pathTesselator = this.state.pathTesselator;
      attribute.bufferLayout = pathTesselator.bufferLayout;
      attribute.value = pathTesselator.get('endPositions');
    }
  }, {
    key: "calculateInstanceStartEndPositions64xyLow",
    value: function calculateInstanceStartEndPositions64xyLow(attribute) {
      var isFP64 = this.use64bitPositions();
      attribute.constant = !isFP64;

      if (isFP64) {
        attribute.value = this.state.pathTesselator.get('startEndPositions64XyLow');
      } else {
        attribute.value = new Float32Array(4);
      }
    }
  }, {
    key: "calculateLeftPositions",
    value: function calculateLeftPositions(attribute) {
      var pathTesselator = this.state.pathTesselator;
      attribute.value = pathTesselator.get('leftPositions');
    }
  }, {
    key: "calculateRightPositions",
    value: function calculateRightPositions(attribute) {
      var pathTesselator = this.state.pathTesselator;
      attribute.value = pathTesselator.get('rightPositions');
    }
  }, {
    key: "calculateInstanceNeighborPositions64xyLow",
    value: function calculateInstanceNeighborPositions64xyLow(attribute) {
      var isFP64 = this.use64bitPositions();
      attribute.constant = !isFP64;

      if (isFP64) {
        attribute.value = this.state.pathTesselator.get('neighborPositions64XyLow');
      } else {
        attribute.value = new Float32Array(4);
      }
    }
  }, {
    key: "clearPickingColor",
    value: function clearPickingColor(color) {
      var pickedPathIndex = this.decodePickingColor(color);
      var bufferLayout = this.state.pathTesselator.bufferLayout;
      var numVertices = bufferLayout[pickedPathIndex];
      var startInstanceIndex = 0;

      for (var pathIndex = 0; pathIndex < pickedPathIndex; pathIndex++) {
        startInstanceIndex += bufferLayout[pathIndex];
      }

      var instancePickingColors = this.getAttributeManager().attributes.instancePickingColors;
      var value = instancePickingColors.value;
      var endInstanceIndex = startInstanceIndex + numVertices;
      value.fill(0, startInstanceIndex * 3, endInstanceIndex * 3);
      instancePickingColors.update({
        value: value
      });
    }
  }]);

  return PathLayer;
}(_deck_gl_core__WEBPACK_IMPORTED_MODULE_6__["default"]);


PathLayer.layerName = 'PathLayer';
PathLayer.defaultProps = defaultProps;
//# sourceMappingURL=path-layer.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/path-layer/path-tesselator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/path-layer/path-tesselator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PathTesselator; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/index.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/shadertools/dist/esm/modules/fp64/fp64.js");






var Tesselator = _deck_gl_core__WEBPACK_IMPORTED_MODULE_5__["experimental"].Tesselator;

var fp64LowPart = _luma_gl_core__WEBPACK_IMPORTED_MODULE_6__["default"].fp64LowPart;

var PathTesselator = function (_Tesselator) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PathTesselator, _Tesselator);

  function PathTesselator(_ref) {
    var data = _ref.data,
        getGeometry = _ref.getGeometry,
        positionFormat = _ref.positionFormat,
        fp64 = _ref.fp64;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PathTesselator);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PathTesselator).call(this, {
      data: data,
      getGeometry: getGeometry,
      fp64: fp64,
      positionFormat: positionFormat,
      attributes: {
        startPositions: {
          size: 3
        },
        endPositions: {
          size: 3
        },
        leftPositions: {
          size: 3
        },
        rightPositions: {
          size: 3
        },
        startEndPositions64XyLow: {
          size: 4,
          fp64Only: true
        },
        neighborPositions64XyLow: {
          size: 4,
          fp64Only: true
        }
      }
    }));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PathTesselator, [{
    key: "get",
    value: function get(attributeName) {
      return this.attributes[attributeName];
    }
  }, {
    key: "getGeometrySize",
    value: function getGeometrySize(path) {
      return Math.max(0, this.getPathLength(path) - 1);
    }
  }, {
    key: "updateGeometryAttributes",
    value: function updateGeometryAttributes(path, context) {
      var _this$attributes = this.attributes,
          startPositions = _this$attributes.startPositions,
          endPositions = _this$attributes.endPositions,
          leftPositions = _this$attributes.leftPositions,
          rightPositions = _this$attributes.rightPositions,
          startEndPositions64XyLow = _this$attributes.startEndPositions64XyLow,
          neighborPositions64XyLow = _this$attributes.neighborPositions64XyLow,
          fp64 = this.fp64;
      var numPoints = context.geometrySize + 1;

      if (numPoints < 2) {
        return;
      }

      var isPathClosed = this.isClosed(path);
      var startPoint = this.getPointOnPath(path, 0);
      var endPoint = this.getPointOnPath(path, 1);
      var prevPoint = isPathClosed ? this.getPointOnPath(path, numPoints - 2) : startPoint;
      var nextPoint;

      for (var i = context.vertexStart, ptIndex = 1; ptIndex < numPoints; i++, ptIndex++) {
        if (ptIndex + 1 < numPoints) {
          nextPoint = this.getPointOnPath(path, ptIndex + 1);
        } else {
          nextPoint = isPathClosed ? this.getPointOnPath(path, 1) : endPoint;
        }

        startPositions[i * 3] = startPoint[0];
        startPositions[i * 3 + 1] = startPoint[1];
        startPositions[i * 3 + 2] = startPoint[2] || 0;
        endPositions[i * 3] = endPoint[0];
        endPositions[i * 3 + 1] = endPoint[1];
        endPositions[i * 3 + 2] = endPoint[2] || 0;
        leftPositions[i * 3] = prevPoint[0];
        leftPositions[i * 3 + 1] = prevPoint[1];
        leftPositions[i * 3 + 2] = prevPoint[2] || 0;
        rightPositions[i * 3] = nextPoint[0];
        rightPositions[i * 3 + 1] = nextPoint[1];
        rightPositions[i * 3 + 2] = nextPoint[2] || 0;

        if (fp64) {
          startEndPositions64XyLow[i * 4] = fp64LowPart(startPoint[0]);
          startEndPositions64XyLow[i * 4 + 1] = fp64LowPart(startPoint[1]);
          startEndPositions64XyLow[i * 4 + 2] = fp64LowPart(endPoint[0]);
          startEndPositions64XyLow[i * 4 + 3] = fp64LowPart(endPoint[1]);
          neighborPositions64XyLow[i * 4] = fp64LowPart(prevPoint[0]);
          neighborPositions64XyLow[i * 4 + 1] = fp64LowPart(prevPoint[1]);
          neighborPositions64XyLow[i * 4 + 2] = fp64LowPart(nextPoint[0]);
          neighborPositions64XyLow[i * 4 + 3] = fp64LowPart(nextPoint[1]);
        }

        prevPoint = startPoint;
        startPoint = endPoint;
        endPoint = nextPoint;
      }
    }
  }, {
    key: "getPathLength",
    value: function getPathLength(path) {
      if (Number.isFinite(path[0])) {
        return path.length / this.positionSize;
      }

      return path.length;
    }
  }, {
    key: "getPointOnPath",
    value: function getPointOnPath(path, index) {
      if (Number.isFinite(path[0])) {
        var positionSize = this.positionSize;
        return [path[index * positionSize], path[index * positionSize + 1], positionSize === 3 ? path[index * positionSize + 2] : 0];
      }

      return path[index];
    }
  }, {
    key: "isClosed",
    value: function isClosed(path) {
      var numPoints = this.getPathLength(path);
      var firstPoint = this.getPointOnPath(path, 0);
      var lastPoint = this.getPointOnPath(path, numPoints - 1);
      return firstPoint[0] === lastPoint[0] && firstPoint[1] === lastPoint[1] && firstPoint[2] === lastPoint[2];
    }
  }]);

  return PathTesselator;
}(Tesselator);


//# sourceMappingURL=path-tesselator.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer-fragment.glsl.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer-fragment.glsl.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME scatterplot-layer-fragment-shader\n\nprecision highp float;\n\nuniform bool filled;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\n\nvoid main(void) {\n\n  float distToCenter = length(unitPosition);\n\n  if (distToCenter > 1.0) {\n    discard;\n  } \n  if (distToCenter > innerUnitRadius) {\n    gl_FragColor = vLineColor;\n  } else if (filled) {\n    gl_FragColor = vFillColor;\n  } else {\n    discard;\n  }\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n");
//# sourceMappingURL=scatterplot-layer-fragment.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer-vertex.glsl.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer-vertex.glsl.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME scatterplot-layer-vertex-shader\n\nattribute vec3 positions;\n\nattribute vec3 instancePositions;\nattribute vec2 instancePositions64xyLow;\nattribute float instanceRadius;\nattribute float instanceLineWidths;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute vec3 instancePickingColors;\n\nuniform float opacity;\nuniform float radiusScale;\nuniform float radiusMinPixels;\nuniform float radiusMaxPixels;\nuniform float lineWidthScale;\nuniform float lineWidthMinPixels;\nuniform float lineWidthMaxPixels;\nuniform float stroked;\nuniform bool filled;\n\nvarying vec4 vFillColor;\nvarying vec4 vLineColor;\nvarying vec2 unitPosition;\nvarying float innerUnitRadius;\n\nvoid main(void) {\n  float outerRadiusPixels = clamp(\n    project_size_to_pixel(radiusScale * instanceRadius),\n    radiusMinPixels, radiusMaxPixels\n  );\n  float lineWidthPixels = clamp(\n    project_size_to_pixel(lineWidthScale * instanceLineWidths),\n    lineWidthMinPixels, lineWidthMaxPixels\n  );\n  outerRadiusPixels += stroked * lineWidthPixels / 2.0;\n  unitPosition = positions.xy;\n\n  innerUnitRadius = 1.0 - stroked * lineWidthPixels / outerRadiusPixels;\n  \n  vec3 offset = positions * project_pixel_size(outerRadiusPixels);\n  gl_Position = project_position_to_clipspace(instancePositions, instancePositions64xyLow, offset);\n  vFillColor = vec4(instanceFillColors.rgb, instanceFillColors.a * opacity) / 255.;\n  vLineColor = vec4(instanceLineColors.rgb, instanceLineColors.a * opacity) / 255.;\n  picking_setPickingColor(instancePickingColors);\n}\n");
//# sourceMappingURL=scatterplot-layer-vertex.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScatterplotLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/utils/iterable-utils.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/lib/layer.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/shadertools/dist/esm/modules/fp64/fp64.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/lib/model.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/geometry/geometry.js");
/* harmony import */ var _scatterplot_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scatterplot-layer-vertex.glsl */ "./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer-vertex.glsl.js");
/* harmony import */ var _scatterplot_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scatterplot-layer-fragment.glsl */ "./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer-fragment.glsl.js");








var fp64LowPart = _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__["default"].fp64LowPart;


var DEFAULT_COLOR = [0, 0, 0, 255];
var defaultProps = {
  radiusScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  radiusMinPixels: {
    type: 'number',
    min: 0,
    value: 0
  },
  radiusMaxPixels: {
    type: 'number',
    min: 0,
    value: Number.MAX_SAFE_INTEGER
  },
  lineWidthUnits: 'meters',
  lineWidthScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  lineWidthMinPixels: {
    type: 'number',
    min: 0,
    value: 0
  },
  lineWidthMaxPixels: {
    type: 'number',
    min: 0,
    value: Number.MAX_SAFE_INTEGER
  },
  stroked: false,
  fp64: false,
  filled: true,
  getPosition: {
    type: 'accessor',
    value: function value(x) {
      return x.position;
    }
  },
  getRadius: {
    type: 'accessor',
    value: 1
  },
  getFillColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getLineColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getLineWidth: {
    type: 'accessor',
    value: 1
  },
  strokeWidth: {
    deprecatedFor: 'getLineWidth'
  },
  outline: {
    deprecatedFor: 'stroked'
  },
  getColor: {
    deprecatedFor: ['getFillColor', 'getLineColor']
  }
};

var ScatterplotLayer = function (_Layer) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ScatterplotLayer, _Layer);

  function ScatterplotLayer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScatterplotLayer);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ScatterplotLayer).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ScatterplotLayer, [{
    key: "getShaders",
    value: function getShaders(id) {
      var projectModule = this.use64bitProjection() ? 'project64' : 'project32';
      return {
        vs: _scatterplot_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_11__["default"],
        fs: _scatterplot_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_12__["default"],
        modules: [projectModule, 'picking']
      };
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      this.getAttributeManager().addInstanced({
        instancePositions: {
          size: 3,
          transition: true,
          accessor: 'getPosition'
        },
        instancePositions64xyLow: {
          size: 2,
          accessor: 'getPosition',
          update: this.calculateInstancePositions64xyLow
        },
        instanceRadius: {
          size: 1,
          transition: true,
          accessor: 'getRadius',
          defaultValue: 1
        },
        instanceFillColors: {
          size: 4,
          transition: true,
          type: 5121,
          accessor: 'getFillColor',
          defaultValue: [0, 0, 0, 255]
        },
        instanceLineColors: {
          size: 4,
          transition: true,
          type: 5121,
          accessor: 'getLineColor',
          defaultValue: [0, 0, 0, 255]
        },
        instanceLineWidths: {
          size: 1,
          transition: true,
          accessor: 'getLineWidth',
          defaultValue: 1
        }
      });
    }
  }, {
    key: "updateState",
    value: function updateState(_ref) {
      var props = _ref.props,
          oldProps = _ref.oldProps,
          changeFlags = _ref.changeFlags;

      Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ScatterplotLayer.prototype), "updateState", this).call(this, {
        props: props,
        oldProps: oldProps,
        changeFlags: changeFlags
      });

      if (props.fp64 !== oldProps.fp64) {
        var gl = this.context.gl;

        if (this.state.model) {
          this.state.model.delete();
        }

        this.setState({
          model: this._getModel(gl)
        });
        this.getAttributeManager().invalidateAll();
      }
    }
  }, {
    key: "draw",
    value: function draw(_ref2) {
      var uniforms = _ref2.uniforms;
      var viewport = this.context.viewport;
      var _this$props = this.props,
          radiusScale = _this$props.radiusScale,
          radiusMinPixels = _this$props.radiusMinPixels,
          radiusMaxPixels = _this$props.radiusMaxPixels,
          stroked = _this$props.stroked,
          filled = _this$props.filled,
          lineWidthUnits = _this$props.lineWidthUnits,
          lineWidthScale = _this$props.lineWidthScale,
          lineWidthMinPixels = _this$props.lineWidthMinPixels,
          lineWidthMaxPixels = _this$props.lineWidthMaxPixels;
      var widthMultiplier = lineWidthUnits === 'pixels' ? viewport.distanceScales.metersPerPixel[2] : 1;
      this.state.model.setUniforms(Object.assign({}, uniforms, {
        stroked: stroked ? 1 : 0,
        filled: filled,
        radiusScale: radiusScale,
        radiusMinPixels: radiusMinPixels,
        radiusMaxPixels: radiusMaxPixels,
        lineWidthScale: lineWidthScale * widthMultiplier,
        lineWidthMinPixels: lineWidthMinPixels,
        lineWidthMaxPixels: lineWidthMaxPixels
      })).draw();
    }
  }, {
    key: "_getModel",
    value: function _getModel(gl) {
      var positions = [-1, -1, 0, -1, 1, 0, 1, 1, 0, 1, -1, 0];
      return new _luma_gl_core__WEBPACK_IMPORTED_MODULE_9__["default"](gl, Object.assign(this.getShaders(), {
        id: this.props.id,
        geometry: new _luma_gl_core__WEBPACK_IMPORTED_MODULE_10__["default"]({
          drawMode: 6,
          vertexCount: 4,
          attributes: {
            positions: {
              size: 3,
              value: new Float32Array(positions)
            }
          }
        }),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      }));
    }
  }, {
    key: "calculateInstancePositions64xyLow",
    value: function calculateInstancePositions64xyLow(attribute, _ref3) {
      var startRow = _ref3.startRow,
          endRow = _ref3.endRow;
      var isFP64 = this.use64bitPositions();
      attribute.constant = !isFP64;

      if (!isFP64) {
        attribute.value = new Float32Array(2);
        return;
      }

      var _this$props2 = this.props,
          data = _this$props2.data,
          getPosition = _this$props2.getPosition;
      var value = attribute.value,
          size = attribute.size;
      var i = startRow * size;

      var _createIterable = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_6__["createIterable"])(data, startRow, endRow),
          iterable = _createIterable.iterable,
          objectInfo = _createIterable.objectInfo;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var object = _step.value;
          objectInfo.index++;
          var position = getPosition(object, objectInfo);
          value[i++] = fp64LowPart(position[0]);
          value[i++] = fp64LowPart(position[1]);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return ScatterplotLayer;
}(_deck_gl_core__WEBPACK_IMPORTED_MODULE_7__["default"]);


ScatterplotLayer.layerName = 'ScatterplotLayer';
ScatterplotLayer.defaultProps = defaultProps;
//# sourceMappingURL=scatterplot-layer.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/polygon-tesselator.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/polygon-tesselator.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolygonTesselator; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _polygon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./polygon */ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/polygon.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/index.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/shadertools/dist/esm/modules/fp64/fp64.js");







var Tesselator = _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__["experimental"].Tesselator;

var fp64LowPart = _luma_gl_core__WEBPACK_IMPORTED_MODULE_7__["default"].fp64LowPart;

var PolygonTesselator = function (_Tesselator) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PolygonTesselator, _Tesselator);

  function PolygonTesselator(_ref) {
    var data = _ref.data,
        getGeometry = _ref.getGeometry,
        fp64 = _ref.fp64,
        positionFormat = _ref.positionFormat,
        _ref$IndexType = _ref.IndexType,
        IndexType = _ref$IndexType === void 0 ? Uint32Array : _ref$IndexType;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PolygonTesselator);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PolygonTesselator).call(this, {
      data: data,
      getGeometry: getGeometry,
      fp64: fp64,
      positionFormat: positionFormat,
      attributes: {
        positions: {
          size: 3
        },
        positions64xyLow: {
          size: 2,
          fp64Only: true
        },
        vertexValid: {
          type: Uint8ClampedArray,
          size: 1
        },
        indices: {
          type: IndexType,
          size: 1
        }
      }
    }));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PolygonTesselator, [{
    key: "get",
    value: function get(attributeName) {
      if (attributeName === 'indices') {
        return this.attributes.indices.subarray(0, this.vertexCount);
      }

      return this.attributes[attributeName];
    }
  }, {
    key: "getGeometrySize",
    value: function getGeometrySize(polygon) {
      return _polygon__WEBPACK_IMPORTED_MODULE_5__["getVertexCount"](polygon, this.positionSize);
    }
  }, {
    key: "updateGeometryAttributes",
    value: function updateGeometryAttributes(polygon, context) {
      polygon = _polygon__WEBPACK_IMPORTED_MODULE_5__["normalize"](polygon, this.positionSize, context.geometrySize);

      this._updateIndices(polygon, context);

      this._updatePositions(polygon, context);
    }
  }, {
    key: "_updateIndices",
    value: function _updateIndices(polygon, _ref2) {
      var geometryIndex = _ref2.geometryIndex,
          offset = _ref2.vertexStart,
          indexStart = _ref2.indexStart;
      var attributes = this.attributes,
          indexLayout = this.indexLayout,
          typedArrayManager = this.typedArrayManager;
      var target = attributes.indices;
      var currentLength = target.length;
      var i = indexStart;
      var indices = _polygon__WEBPACK_IMPORTED_MODULE_5__["getSurfaceIndices"](polygon, this.positionSize);

      if (currentLength < i + indices.length) {
        currentLength = (i + indices.length) * 2;
        target = typedArrayManager.allocate(target, currentLength, {
          type: target.constructor,
          size: 1,
          copy: true
        });
      }

      for (var j = 0; j < indices.length; j++) {
        target[i++] = indices[j] + offset;
      }

      indexLayout[geometryIndex] = indices.length;
      attributes.indices = target;
    }
  }, {
    key: "_updatePositions",
    value: function _updatePositions(polygon, _ref3) {
      var vertexStart = _ref3.vertexStart,
          geometrySize = _ref3.geometrySize;
      var _this$attributes = this.attributes,
          positions = _this$attributes.positions,
          positions64xyLow = _this$attributes.positions64xyLow,
          vertexValid = _this$attributes.vertexValid,
          fp64 = this.fp64,
          positionSize = this.positionSize;
      var i = vertexStart;
      var polygonPositions = polygon.positions,
          holeIndices = polygon.holeIndices;

      for (var j = 0; j < geometrySize; j++) {
        var x = polygonPositions[j * positionSize];
        var y = polygonPositions[j * positionSize + 1];
        var z = positionSize > 2 ? polygonPositions[j * positionSize + 2] : 0;
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        if (fp64) {
          positions64xyLow[i * 2] = fp64LowPart(x);
          positions64xyLow[i * 2 + 1] = fp64LowPart(y);
        }

        vertexValid[i] = 1;
        i++;
      }

      if (holeIndices) {
        for (var _j = 0; _j < holeIndices.length; _j++) {
          vertexValid[vertexStart + holeIndices[_j] / positionSize - 1] = 0;
        }
      }

      vertexValid[vertexStart + geometrySize - 1] = 0;
    }
  }]);

  return PolygonTesselator;
}(Tesselator);


//# sourceMappingURL=polygon-tesselator.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/polygon.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/polygon.js ***!
  \******************************************************************************/
/*! exports provided: getVertexCount, normalize, getSurfaceIndices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVertexCount", function() { return getVertexCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSurfaceIndices", function() { return getSurfaceIndices; });
/* harmony import */ var earcut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! earcut */ "./node_modules/earcut/src/earcut.js");
/* harmony import */ var earcut__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(earcut__WEBPACK_IMPORTED_MODULE_0__);


function validate(polygon) {
  polygon = polygon && polygon.positions || polygon;

  if (!Array.isArray(polygon) && !ArrayBuffer.isView(polygon)) {
    throw new Error('invalid polygon');
  }
}

function isSimple(polygon) {
  return polygon.length >= 1 && polygon[0].length >= 2 && Number.isFinite(polygon[0][0]);
}

function isNestedRingClosed(simplePolygon) {
  var p0 = simplePolygon[0];
  var p1 = simplePolygon[simplePolygon.length - 1];
  return p0[0] === p1[0] && p0[1] === p1[1] && p0[2] === p1[2];
}

function isFlatRingClosed(positions, size, startIndex, endIndex) {
  for (var i = 0; i < size; i++) {
    if (positions[startIndex + i] !== positions[endIndex - size + i]) {
      return false;
    }
  }

  return true;
}

function copyNestedRing(target, targetStartIndex, simplePolygon, size) {
  var targetIndex = targetStartIndex;
  var len = simplePolygon.length;

  for (var i = 0; i < len; i++) {
    for (var j = 0; j < size; j++) {
      target[targetIndex++] = simplePolygon[i][j] || 0;
    }
  }

  if (!isNestedRingClosed(simplePolygon)) {
    for (var _j = 0; _j < size; _j++) {
      target[targetIndex++] = simplePolygon[0][_j] || 0;
    }
  }

  return targetIndex;
}

function copyFlatRing(target, targetStartIndex, positions, size) {
  var srcStartIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var srcEndIndex = arguments.length > 5 ? arguments[5] : undefined;
  srcEndIndex = srcEndIndex || positions.length;
  var srcLength = srcEndIndex - srcStartIndex;

  if (srcLength <= 0) {
    return targetStartIndex;
  }

  var targetIndex = targetStartIndex;

  for (var i = 0; i < srcLength; i++) {
    target[targetIndex++] = positions[srcStartIndex + i];
  }

  if (!isFlatRingClosed(positions, size, srcStartIndex, srcEndIndex)) {
    for (var _i = 0; _i < size; _i++) {
      target[targetIndex++] = positions[srcStartIndex + _i];
    }
  }

  return targetIndex;
}

function getNestedVertexCount(simplePolygon) {
  return (isNestedRingClosed(simplePolygon) ? 0 : 1) + simplePolygon.length;
}

function getFlatVertexCount(positions, size) {
  var startIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var endIndex = arguments.length > 3 ? arguments[3] : undefined;
  endIndex = endIndex || positions.length;

  if (startIndex >= endIndex) {
    return 0;
  }

  return (isFlatRingClosed(positions, size, startIndex, endIndex) ? 0 : 1) + (endIndex - startIndex) / size;
}

function getVertexCount(polygon, positionSize) {
  validate(polygon);

  if (polygon.positions) {
    var _polygon = polygon,
        positions = _polygon.positions,
        holeIndices = _polygon.holeIndices;

    if (holeIndices) {
      var vertexCount = 0;

      for (var i = 0; i <= holeIndices.length; i++) {
        vertexCount += getFlatVertexCount(polygon.positions, positionSize, holeIndices[i - 1], holeIndices[i]);
      }

      return vertexCount;
    }

    polygon = positions;
  }

  if (Number.isFinite(polygon[0])) {
    return getFlatVertexCount(polygon, positionSize);
  }

  if (!isSimple(polygon)) {
    var _vertexCount = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = polygon[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var simplePolygon = _step.value;
        _vertexCount += getNestedVertexCount(simplePolygon);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return _vertexCount;
  }

  return getNestedVertexCount(polygon);
}
function normalize(polygon, positionSize, vertexCount) {
  validate(polygon);
  vertexCount = vertexCount || getVertexCount(polygon, positionSize);
  var positions = new Float64Array(vertexCount * positionSize);
  var holeIndices = [];

  if (polygon.positions) {
    var _polygon2 = polygon,
        srcPositions = _polygon2.positions,
        srcHoleIndices = _polygon2.holeIndices;

    if (srcHoleIndices) {
      var targetIndex = 0;

      for (var i = 0; i <= srcHoleIndices.length; i++) {
        targetIndex = copyFlatRing(positions, targetIndex, srcPositions, positionSize, srcHoleIndices[i - 1], srcHoleIndices[i]);
        holeIndices.push(targetIndex);
      }

      holeIndices.pop();
      return {
        positions: positions,
        holeIndices: holeIndices
      };
    }

    polygon = srcPositions;
  }

  if (Number.isFinite(polygon[0])) {
    copyFlatRing(positions, 0, polygon, positionSize);
    return {
      positions: positions,
      holeIndices: null
    };
  }

  if (!isSimple(polygon)) {
    var _targetIndex = 0;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = polygon[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var simplePolygon = _step2.value;
        _targetIndex = copyNestedRing(positions, _targetIndex, simplePolygon, positionSize);
        holeIndices.push(_targetIndex);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    holeIndices.pop();
    return {
      positions: positions,
      holeIndices: holeIndices
    };
  }

  copyNestedRing(positions, 0, polygon, positionSize);
  return {
    positions: positions,
    holeIndices: null
  };
}
function getSurfaceIndices(normalizedPolygon, positionSize) {
  var holeIndices = null;

  if (normalizedPolygon.holeIndices) {
    holeIndices = normalizedPolygon.holeIndices.map(function (positionIndex) {
      return positionIndex / positionSize;
    });
  }

  return earcut__WEBPACK_IMPORTED_MODULE_0___default()(normalizedPolygon.positions, holeIndices, positionSize);
}
//# sourceMappingURL=polygon.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-fragment.glsl.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-fragment.glsl.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME solid-polygon-layer-fragment-shader\n\nprecision highp float;\n\nvarying vec4 vColor;\nvarying float isValid;\n\nvoid main(void) {\n  if (isValid < 0.5) {\n    discard;\n  }\n\n  gl_FragColor = vColor;\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n");
//# sourceMappingURL=solid-polygon-layer-fragment.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-vertex-main.glsl.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-vertex-main.glsl.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nattribute vec2 vertexPositions;\nattribute float vertexValid;\n\nuniform bool extruded;\nuniform bool isWireframe;\nuniform float elevationScale;\nuniform float opacity;\n\nvarying vec4 vColor;\nvarying float isValid;\n\nstruct PolygonProps {\n  vec4 fillColors;\n  vec4 lineColors;\n  vec3 positions;\n  vec3 nextPositions;\n  vec3 pickingColors;\n  vec2 positions64xyLow;\n  vec2 nextPositions64xyLow;\n  float elevations;\n};\n\nvec3 project_offset_normal(vec3 vector) {\n  if (project_uCoordinateSystem == COORDINATE_SYSTEM_LNG_LAT ||\n    project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT_OFFSETS ||\n    project_uCoordinateSystem == COORDINATE_SYSTEM_LNGLAT_AUTO_OFFSET) {\n    return normalize(vector * project_uCommonUnitsPerWorldUnit);\n  }\n  return project_normal(vector);\n}\n\nvoid calculatePosition(PolygonProps props) {\n  vec3 pos;\n  vec2 pos64xyLow;\n  vec3 normal;\n  vec4 colors = isWireframe ? props.lineColors : props.fillColors;\n\n#ifdef IS_SIDE_VERTEX\n  pos = mix(props.positions, props.nextPositions, vertexPositions.x);\n  pos64xyLow = mix(props.positions64xyLow, props.nextPositions64xyLow, vertexPositions.x);\n  isValid = vertexValid;\n#else\n  pos = props.positions;\n  pos64xyLow = props.positions64xyLow;\n  isValid = 1.0;\n#endif\n\n  if (extruded) {\n    pos.z += props.elevations * vertexPositions.y * elevationScale;\n  }\n\n  vec4 position_commonspace;\n  gl_Position = project_position_to_clipspace(pos, pos64xyLow, vec3(0.), position_commonspace);\n\n  if (extruded) {\n#ifdef IS_SIDE_VERTEX\n    normal = vec3(props.positions.y - props.nextPositions.y, props.nextPositions.x - props.positions.x, 0.0);\n    normal = project_offset_normal(normal);\n#else\n    normal = vec3(0.0, 0.0, 1.0);\n#endif\n\n    vec3 lightColor = lighting_getLightColor(colors.rgb, project_uCameraPosition, position_commonspace.xyz, normal);\n    vColor = vec4(lightColor, colors.a * opacity) / 255.0;\n  } else {\n    vColor = vec4(colors.rgb, colors.a * opacity) / 255.0;\n  }\n  picking_setPickingColor(props.pickingColors);\n}\n");
//# sourceMappingURL=solid-polygon-layer-vertex-main.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-vertex-side.glsl.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-vertex-side.glsl.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solid_polygon_layer_vertex_main_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solid-polygon-layer-vertex-main.glsl */ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-vertex-main.glsl.js");

/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME solid-polygon-layer-vertex-shader-side\n#define IS_SIDE_VERTEX\n\n\nattribute vec3 instancePositions;\nattribute vec2 instancePositions64xyLow;\nattribute vec3 nextPositions;\nattribute vec2 nextPositions64xyLow;\nattribute float instanceElevations;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute vec3 instancePickingColors;\n\n".concat(_solid_polygon_layer_vertex_main_glsl__WEBPACK_IMPORTED_MODULE_0__["default"], "\n\nvoid main(void) {\n  PolygonProps props;\n\n  props.positions = instancePositions;\n  props.positions64xyLow = instancePositions64xyLow;\n  props.elevations = instanceElevations;\n  props.fillColors = instanceFillColors;\n  props.lineColors = instanceLineColors;\n  props.pickingColors = instancePickingColors;\n  props.nextPositions = nextPositions;\n  props.nextPositions64xyLow = nextPositions64xyLow;\n\n  calculatePosition(props);\n}\n"));
//# sourceMappingURL=solid-polygon-layer-vertex-side.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-vertex-top.glsl.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-vertex-top.glsl.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _solid_polygon_layer_vertex_main_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solid-polygon-layer-vertex-main.glsl */ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-vertex-main.glsl.js");

/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME solid-polygon-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec2 positions64xyLow;\nattribute float elevations;\nattribute vec4 fillColors;\nattribute vec4 lineColors;\nattribute vec3 pickingColors;\n\n".concat(_solid_polygon_layer_vertex_main_glsl__WEBPACK_IMPORTED_MODULE_0__["default"], "\n\nvoid main(void) {\n  PolygonProps props;\n\n  props.positions = positions;\n  props.positions64xyLow = positions64xyLow;\n  props.elevations = elevations;\n  props.fillColors = fillColors;\n  props.lineColors = lineColors;\n  props.pickingColors = pickingColors;\n\n  calculatePosition(props);\n}\n"));
//# sourceMappingURL=solid-polygon-layer-vertex-top.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SolidPolygonLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/lib/layer.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/materials/phong-material.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/webgl/dist/esm/features/features.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/webgl/dist/esm/features/webgl-features-table.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/lib/model.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/geometry/geometry.js");
/* harmony import */ var _polygon_tesselator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./polygon-tesselator */ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/polygon-tesselator.js");
/* harmony import */ var _solid_polygon_layer_vertex_top_glsl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./solid-polygon-layer-vertex-top.glsl */ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-vertex-top.glsl.js");
/* harmony import */ var _solid_polygon_layer_vertex_side_glsl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./solid-polygon-layer-vertex-side.glsl */ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-vertex-side.glsl.js");
/* harmony import */ var _solid_polygon_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./solid-polygon-layer-fragment.glsl */ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer-fragment.glsl.js");












var DEFAULT_COLOR = [0, 0, 0, 255];
var defaultMaterial = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_7__["default"]();
var defaultProps = {
  filled: true,
  extruded: false,
  wireframe: false,
  fp64: false,
  elevationScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  getPolygon: {
    type: 'accessor',
    value: function value(f) {
      return f.polygon;
    }
  },
  getElevation: {
    type: 'accessor',
    value: 1000
  },
  getFillColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getLineColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  material: defaultMaterial
};
var ATTRIBUTE_TRANSITION = {
  enter: function enter(value, chunk) {
    return chunk.length ? chunk.subarray(chunk.length - value.length) : value;
  }
};

var SolidPolygonLayer = function (_Layer) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SolidPolygonLayer, _Layer);

  function SolidPolygonLayer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SolidPolygonLayer);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SolidPolygonLayer).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SolidPolygonLayer, [{
    key: "getShaders",
    value: function getShaders(vs) {
      var projectModule = this.use64bitProjection() ? 'project64' : 'project32';
      return {
        vs: vs,
        fs: _solid_polygon_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_15__["default"],
        defines: {},
        modules: [projectModule, 'gouraud-lighting', 'picking']
      };
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      var _this = this;

      var gl = this.context.gl;
      this.setState({
        numInstances: 0,
        polygonTesselator: new _polygon_tesselator__WEBPACK_IMPORTED_MODULE_12__["default"]({
          IndexType: !gl || Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_8__["hasFeature"])(gl, _luma_gl_core__WEBPACK_IMPORTED_MODULE_9__["FEATURES"].ELEMENT_INDEX_UINT32) ? Uint32Array : Uint16Array
        })
      });
      var attributeManager = this.getAttributeManager();
      var noAlloc = true;
      attributeManager.remove(['instancePickingColors']);
      attributeManager.add({
        indices: {
          size: 1,
          isIndexed: true,
          update: this.calculateIndices,
          noAlloc: noAlloc
        },
        positions: {
          size: 3,
          transition: ATTRIBUTE_TRANSITION,
          accessor: 'getPolygon',
          update: this.calculatePositions,
          noAlloc: noAlloc,
          shaderAttributes: {
            positions: {
              offset: 0,
              divisor: 0
            },
            instancePositions: {
              offset: 0,
              divisor: 1
            },
            nextPositions: {
              offset: 12,
              divisor: 1
            }
          }
        },
        positions64xyLow: {
          size: 2,
          update: this.calculatePositionsLow,
          noAlloc: noAlloc,
          shaderAttributes: {
            positions64xyLow: {
              offset: 0,
              divisor: 0
            },
            instancePositions64xyLow: {
              offset: 0,
              divisor: 1
            },
            nextPositions64xyLow: {
              offset: 8,
              divisor: 1
            }
          }
        },
        vertexValid: {
          size: 1,
          divisor: 1,
          type: 5121,
          update: this.calculateVertexValid,
          noAlloc: noAlloc
        },
        elevations: {
          size: 1,
          transition: ATTRIBUTE_TRANSITION,
          accessor: 'getElevation',
          shaderAttributes: {
            elevations: {
              divisor: 0
            },
            instanceElevations: {
              divisor: 1
            }
          }
        },
        fillColors: {
          alias: 'colors',
          size: 4,
          type: 5121,
          transition: ATTRIBUTE_TRANSITION,
          accessor: 'getFillColor',
          defaultValue: DEFAULT_COLOR,
          shaderAttributes: {
            fillColors: {
              divisor: 0
            },
            instanceFillColors: {
              divisor: 1
            }
          }
        },
        lineColors: {
          alias: 'colors',
          size: 4,
          type: 5121,
          transition: ATTRIBUTE_TRANSITION,
          accessor: 'getLineColor',
          defaultValue: DEFAULT_COLOR,
          shaderAttributes: {
            lineColors: {
              divisor: 0
            },
            instanceLineColors: {
              divisor: 1
            }
          }
        },
        pickingColors: {
          size: 3,
          type: 5121,
          accessor: function accessor(object, _ref) {
            var index = _ref.index,
                value = _ref.target;
            return _this.encodePickingColor(index, value);
          },
          shaderAttributes: {
            pickingColors: {
              divisor: 0
            },
            instancePickingColors: {
              divisor: 1
            }
          }
        }
      });
    }
  }, {
    key: "draw",
    value: function draw(_ref2) {
      var uniforms = _ref2.uniforms;
      var _this$props = this.props,
          extruded = _this$props.extruded,
          filled = _this$props.filled,
          wireframe = _this$props.wireframe,
          elevationScale = _this$props.elevationScale;
      var _this$state = this.state,
          topModel = _this$state.topModel,
          sideModel = _this$state.sideModel,
          polygonTesselator = _this$state.polygonTesselator;
      var renderUniforms = Object.assign({}, uniforms, {
        extruded: Boolean(extruded),
        elevationScale: elevationScale
      });

      if (sideModel) {
        sideModel.setInstanceCount(polygonTesselator.instanceCount - 1);
        sideModel.setUniforms(renderUniforms);

        if (wireframe) {
          sideModel.setDrawMode(3);
          sideModel.setUniforms({
            isWireframe: true
          }).draw();
        }

        if (filled) {
          sideModel.setDrawMode(6);
          sideModel.setUniforms({
            isWireframe: false
          }).draw();
        }
      }

      if (topModel) {
        topModel.setVertexCount(polygonTesselator.get('indices').length);
        topModel.setUniforms(renderUniforms).draw();
      }
    }
  }, {
    key: "updateState",
    value: function updateState(updateParams) {
      Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SolidPolygonLayer.prototype), "updateState", this).call(this, updateParams);

      this.updateGeometry(updateParams);
      var props = updateParams.props,
          oldProps = updateParams.oldProps;
      var attributeManager = this.getAttributeManager();
      var regenerateModels = props.fp64 !== oldProps.fp64 || props.filled !== oldProps.filled || props.extruded !== oldProps.extruded;

      if (regenerateModels) {
        if (this.state.models) {
          this.state.models.forEach(function (model) {
            return model.delete();
          });
        }

        this.setState(this._getModels(this.context.gl));
        attributeManager.invalidateAll();
      }
    }
  }, {
    key: "updateGeometry",
    value: function updateGeometry(_ref3) {
      var props = _ref3.props,
          oldProps = _ref3.oldProps,
          changeFlags = _ref3.changeFlags;
      var geometryConfigChanged = changeFlags.dataChanged || props.fp64 !== oldProps.fp64 || changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPolygon);

      if (geometryConfigChanged) {
        var polygonTesselator = this.state.polygonTesselator;
        polygonTesselator.updateGeometry({
          data: props.data,
          getGeometry: props.getPolygon,
          positionFormat: props.positionFormat,
          fp64: this.use64bitPositions()
        });
        this.setState({
          numInstances: polygonTesselator.instanceCount,
          bufferLayout: polygonTesselator.bufferLayout
        });
        this.getAttributeManager().invalidateAll();
      }
    }
  }, {
    key: "_getModels",
    value: function _getModels(gl) {
      var _this$props2 = this.props,
          id = _this$props2.id,
          filled = _this$props2.filled,
          extruded = _this$props2.extruded;
      var topModel;
      var sideModel;

      if (filled) {
        var shaders = this.getShaders(_solid_polygon_layer_vertex_top_glsl__WEBPACK_IMPORTED_MODULE_13__["default"]);
        shaders.defines.NON_INSTANCED_MODEL = 1;
        topModel = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_10__["default"](gl, Object.assign({}, shaders, {
          id: "".concat(id, "-top"),
          drawMode: 4,
          attributes: {
            vertexPositions: new Float32Array([0, 1])
          },
          uniforms: {
            isWireframe: false,
            isSideVertex: false
          },
          vertexCount: 0,
          isIndexed: true,
          shaderCache: this.context.shaderCache
        }));
      }

      if (extruded) {
        sideModel = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_10__["default"](gl, Object.assign({}, this.getShaders(_solid_polygon_layer_vertex_side_glsl__WEBPACK_IMPORTED_MODULE_14__["default"]), {
          id: "".concat(id, "-side"),
          geometry: new _luma_gl_core__WEBPACK_IMPORTED_MODULE_11__["default"]({
            drawMode: 1,
            vertexCount: 4,
            attributes: {
              vertexPositions: {
                size: 2,
                value: new Float32Array([1, 1, 0, 1, 0, 0, 1, 0])
              }
            }
          }),
          instanceCount: 0,
          isInstanced: 1,
          shaderCache: this.context.shaderCache
        }));
        sideModel.userData.excludeAttributes = {
          indices: true
        };
      }

      return {
        models: [sideModel, topModel].filter(Boolean),
        topModel: topModel,
        sideModel: sideModel
      };
    }
  }, {
    key: "calculateIndices",
    value: function calculateIndices(attribute) {
      var polygonTesselator = this.state.polygonTesselator;
      attribute.bufferLayout = polygonTesselator.indexLayout;
      attribute.value = polygonTesselator.get('indices');
    }
  }, {
    key: "calculatePositions",
    value: function calculatePositions(attribute) {
      var polygonTesselator = this.state.polygonTesselator;
      attribute.bufferLayout = polygonTesselator.bufferLayout;
      attribute.value = polygonTesselator.get('positions');
    }
  }, {
    key: "calculatePositionsLow",
    value: function calculatePositionsLow(attribute) {
      var isFP64 = this.use64bitPositions();
      attribute.constant = !isFP64;

      if (!isFP64) {
        attribute.value = new Float32Array(2);
        return;
      }

      attribute.value = this.state.polygonTesselator.get('positions64xyLow');
    }
  }, {
    key: "calculateVertexValid",
    value: function calculateVertexValid(attribute) {
      attribute.value = this.state.polygonTesselator.get('vertexValid');
    }
  }, {
    key: "clearPickingColor",
    value: function clearPickingColor(color) {
      var pickedPolygonIndex = this.decodePickingColor(color);
      var bufferLayout = this.state.polygonTesselator.bufferLayout;
      var numVertices = bufferLayout[pickedPolygonIndex];
      var startInstanceIndex = 0;

      for (var polygonIndex = 0; polygonIndex < pickedPolygonIndex; polygonIndex++) {
        startInstanceIndex += bufferLayout[polygonIndex];
      }

      var pickingColors = this.getAttributeManager().attributes.pickingColors;
      var value = pickingColors.value;
      var endInstanceIndex = startInstanceIndex + numVertices;
      value.fill(0, startInstanceIndex * 3, endInstanceIndex * 3);
      pickingColors.update({
        value: value
      });
    }
  }]);

  return SolidPolygonLayer;
}(_deck_gl_core__WEBPACK_IMPORTED_MODULE_6__["default"]);


SolidPolygonLayer.layerName = 'SolidPolygonLayer';
SolidPolygonLayer.defaultProps = defaultProps;
//# sourceMappingURL=solid-polygon-layer.js.map

/***/ }),

/***/ "./node_modules/@luma.gl/core/dist/esm/materials/material.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@luma.gl/core/dist/esm/materials/material.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Material; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");


var Material = function Material() {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Material);
};


//# sourceMappingURL=material.js.map

/***/ }),

/***/ "./node_modules/@luma.gl/core/dist/esm/materials/phong-material.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@luma.gl/core/dist/esm/materials/phong-material.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhongMaterial; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material */ "./node_modules/@luma.gl/core/dist/esm/materials/material.js");






var defaultProps = {
  ambient: 0.35,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [30, 30, 30]
};

var PhongMaterial = function (_Material) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PhongMaterial, _Material);

  function PhongMaterial(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PhongMaterial);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(PhongMaterial).call(this, props));
    props = Object.assign({}, defaultProps, props);
    Object.assign(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), props);
    return _this;
  }

  return PhongMaterial;
}(_material__WEBPACK_IMPORTED_MODULE_5__["default"]);


//# sourceMappingURL=phong-material.js.map

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Geojson/Geojson.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Geojson/Geojson.js ***!
  \********************************************************************************************/
/*! exports provided: getLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayer", function() { return getLayer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var deck_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deck.gl */ "./node_modules/@deck.gl/layers/dist/esm/geojson-layer/geojson-layer.js");
/* harmony import */ var _DeckGLContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../DeckGLContainer */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/DeckGLContainer.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/colors */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/colors.js");
/* harmony import */ var _utils_sandbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/sandbox */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/sandbox.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/common.js");
/* harmony import */ var _TooltipRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../TooltipRow */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/TooltipRow.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/no-array-index-key */

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


 // TODO import geojsonExtent from 'geojson-extent';






const propertyMap = {
  fillColor: 'fillColor',
  color: 'fillColor',
  fill: 'fillColor',
  'fill-color': 'fillColor',
  strokeColor: 'strokeColor',
  'stroke-color': 'strokeColor',
  'stroke-width': 'strokeWidth'
};

const alterProps = (props, propOverrides) => {
  const newProps = {};
  Object.keys(props).forEach(k => {
    if (k in propertyMap) {
      newProps[propertyMap[k]] = props[k];
    } else {
      newProps[k] = props[k];
    }
  });

  if (typeof props.fillColor === 'string') {
    newProps.fillColor = Object(_utils_colors__WEBPACK_IMPORTED_MODULE_4__["hexToRGB"])(props.fillColor);
  }

  if (typeof props.strokeColor === 'string') {
    newProps.strokeColor = Object(_utils_colors__WEBPACK_IMPORTED_MODULE_4__["hexToRGB"])(props.strokeColor);
  }

  return _extends({}, newProps, {}, propOverrides);
};

let features;

const recurseGeoJson = (node, propOverrides, extraProps) => {
  if (node && node.features) {
    node.features.forEach(obj => {
      recurseGeoJson(obj, propOverrides, node.extraProps || extraProps);
    });
  }

  if (node && node.geometry) {
    const newNode = _extends({}, node, {
      properties: alterProps(node.properties, propOverrides)
    });

    if (!newNode.extraProps) {
      newNode.extraProps = extraProps;
    }

    features.push(newNode);
  }
};

function setTooltipContent(o) {
  return o.object.extraProps && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "deckgl-tooltip"
  }, Object.keys(o.object.extraProps).map((prop, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TooltipRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
    key: "prop-" + index,
    label: prop + ": ",
    value: "" + o.object.extraProps[prop]
  })));
}

function getLayer(formData, payload, onAddFilter, setTooltip) {
  const fd = formData;
  const fc = fd.fill_color_picker;
  const sc = fd.stroke_color_picker;
  const fillColor = [fc.r, fc.g, fc.b, 255 * fc.a];
  const strokeColor = [sc.r, sc.g, sc.b, 255 * sc.a];
  const propOverrides = {};

  if (fillColor[3] > 0) {
    propOverrides.fillColor = fillColor;
  }

  if (strokeColor[3] > 0) {
    propOverrides.strokeColor = strokeColor;
  }

  features = [];
  recurseGeoJson(payload.data, propOverrides);
  let jsFnMutator;

  if (fd.js_data_mutator) {
    // Applying user defined data mutator if defined
    jsFnMutator = Object(_utils_sandbox__WEBPACK_IMPORTED_MODULE_5__["default"])(fd.js_data_mutator);
    features = jsFnMutator(features);
  }

  return new deck_gl__WEBPACK_IMPORTED_MODULE_2__["default"](_extends({
    id: "geojson-layer-" + fd.slice_id,
    filled: fd.filled,
    data: features,
    stroked: fd.stroked,
    extruded: fd.extruded,
    pointRadiusScale: fd.point_radius_scale
  }, Object(_common__WEBPACK_IMPORTED_MODULE_6__["commonLayerProps"])(fd, setTooltip, setTooltipContent)));
}
const propTypes = {
  formData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  payload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setControlValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  viewport: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onAddFilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
const defaultProps = {
  onAddFilter() {}

};

class DeckGLGeoJson extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "containerRef", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    _defineProperty(this, "setTooltip", tooltip => {
      const {
        current
      } = this.containerRef;

      if (current) {
        current.setTooltip(tooltip);
      }
    });
  }

  render() {
    const {
      formData,
      payload,
      setControlValue,
      onAddFilter,
      viewport
    } = this.props; // TODO get this to work
    // if (formData.autozoom) {
    //   viewport = common.fitViewport(viewport, geojsonExtent(payload.data.features));
    // }

    const layer = getLayer(formData, payload, onAddFilter, this.setTooltip);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeckGLContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      ref: this.containerRef,
      mapboxApiAccessToken: payload.data.mapboxApiKey,
      viewport: viewport,
      layers: [layer],
      mapStyle: formData.mapbox_style,
      setControlValue: setControlValue
    });
  }

}

DeckGLGeoJson.propTypes = propTypes;
DeckGLGeoJson.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (DeckGLGeoJson);

/***/ }),

/***/ "./node_modules/earcut/src/earcut.js":
/*!*******************************************!*\
  !*** ./node_modules/earcut/src/earcut.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = earcut;
module.exports.default = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode || outerNode.next === outerNode.prev) return triangles;

    var minX, minY, maxX, maxY, x, y, invSize;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 1 / invSize : 0;
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, invSize);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) break;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);

            removeNode(ear);

            // skipping the next vertex leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, invSize);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var p = ear.next.next;

    while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, invSize) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // triangle bbox; min & max are calculated like this for speed
    var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
        minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
        maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
        maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(minTX, minTY, minX, minY, invSize),
        maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);

    var p = ear.prevZ,
        n = ear.nextZ;

    // look for points inside the triangle in both directions
    while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;

        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    // look for remaining points in decreasing z-order
    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    // look for remaining points in increasing z-order
    while (n && n.z <= maxZ) {
        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return filterPoints(p);
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, invSize);
                earcutLinked(c, triangles, dim, minX, minY, invSize);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    outerNode = findHoleBridge(hole, outerNode);
    if (outerNode) {
        var b = splitPolygon(outerNode, hole);

        // filter collinear points around the cuts
        filterPoints(outerNode, outerNode.next);
        filterPoints(b, b.next);
    }
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                if (x === hx) {
                    if (hy === p.y) return p;
                    if (hy === p.next.y) return p.next;
                }
                m = p.x < p.next.x ? p : p.next;
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m; // hole touches outer segment; pick leftmost endpoint

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m;

    do {
        if (hx >= p.x && p.x >= mx && hx !== p.x &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if (locallyInside(p, hole) &&
                (tan < tanMin || (tan === tanMin && (p.x > m.x || (p.x === m.x && sectorContainsSector(m, p)))))) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    } while (p !== stop);

    return m;
}

// whether sector in vertex m contains sector in vertex p in the same coordinates
function sectorContainsSector(m, p) {
    return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, invSize) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }
            qSize = inSize;

            while (pSize > 0 || (qSize > 0 && q)) {

                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;
                else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;

    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
    // coords are transformed into non-negative 15-bit integer range
    x = 32767 * (x - minX) * invSize;
    y = 32767 * (y - minY) * invSize;

    x = (x | (x << 8)) & 0x00FF00FF;
    x = (x | (x << 4)) & 0x0F0F0F0F;
    x = (x | (x << 2)) & 0x33333333;
    x = (x | (x << 1)) & 0x55555555;

    y = (y | (y << 8)) & 0x00FF00FF;
    y = (y | (y << 4)) & 0x0F0F0F0F;
    y = (y | (y << 2)) & 0x33333333;
    y = (y | (y << 1)) & 0x55555555;

    return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y)) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
           (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
           (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
           (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
            (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
            equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    var o1 = sign(area(p1, q1, p2));
    var o2 = sign(area(p1, q1, q2));
    var o3 = sign(area(p2, q2, p1));
    var o4 = sign(area(p2, q2, q1));

    if (o1 !== o2 && o3 !== o4) return true; // general case

    if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
    if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
    if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
    if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2

    return false;
}

// for collinear points p, q, r, check if point q lies on segment pr
function onSegment(p, q, r) {
    return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}

function sign(num) {
    return num > 0 ? 1 : num < 0 ? -1 : 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ?
        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
            inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;

    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertex index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertex nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = null;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
        Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};


/***/ })

}]);
//# sourceMappingURL=27.9ed865ea.chunk.js.map