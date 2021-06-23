(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/cpu-grid-layer/cpu-grid-layer.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/cpu-grid-layer/cpu-grid-layer.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CPUGridLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/materials/phong-material.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/lib/composite-layer.js");
/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @deck.gl/layers */ "./node_modules/@deck.gl/layers/dist/esm/column-layer/grid-cell-layer.js");
/* harmony import */ var _utils_bin_sorter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/bin-sorter */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/bin-sorter.js");
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/color-utils */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/color-utils.js");
/* harmony import */ var _utils_scale_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/scale-utils */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/scale-utils.js");
/* harmony import */ var _grid_aggregator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./grid-aggregator */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/cpu-grid-layer/grid-aggregator.js");
/* harmony import */ var _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/aggregation-operation-utils */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/aggregation-operation-utils.js");














function nop() {}

var defaultMaterial = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_5__["default"]();
var defaultProps = {
  colorDomain: null,
  colorRange: _utils_color_utils__WEBPACK_IMPORTED_MODULE_9__["defaultColorRange"],
  getColorValue: {
    type: 'accessor',
    value: null
  },
  getColorWeight: {
    type: 'accessor',
    value: function value(x) {
      return 1;
    }
  },
  colorAggregation: 'SUM',
  lowerPercentile: {
    type: 'number',
    min: 0,
    max: 100,
    value: 0
  },
  upperPercentile: {
    type: 'number',
    min: 0,
    max: 100,
    value: 100
  },
  onSetColorDomain: nop,
  elevationDomain: null,
  elevationRange: [0, 1000],
  getElevationValue: {
    type: 'accessor',
    value: null
  },
  getElevationWeight: {
    type: 'accessor',
    value: function value(x) {
      return 1;
    }
  },
  elevationAggregation: 'SUM',
  elevationLowerPercentile: {
    type: 'number',
    min: 0,
    max: 100,
    value: 0
  },
  elevationUpperPercentile: {
    type: 'number',
    min: 0,
    max: 100,
    value: 100
  },
  elevationScale: 1,
  onSetElevationDomain: nop,
  cellSize: {
    type: 'number',
    min: 0,
    max: 1000,
    value: 1000
  },
  coverage: {
    type: 'number',
    min: 0,
    max: 1,
    value: 1
  },
  getPosition: {
    type: 'accessor',
    value: function value(x) {
      return x.position;
    }
  },
  extruded: false,
  fp64: false,
  material: defaultMaterial
};
var COLOR_PROPS = ['getColorValue', 'colorAggregation', 'getColorWeight'];
var ELEVATION_PROPS = ['getElevationValue', 'elevationAggregation', 'getElevationWeight'];

var CPUGridLayer = function (_CompositeLayer) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CPUGridLayer, _CompositeLayer);

  function CPUGridLayer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CPUGridLayer);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CPUGridLayer).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CPUGridLayer, [{
    key: "initializeState",
    value: function initializeState() {
      this.state = {
        layerData: [],
        sortedColorBins: null,
        sortedElevationBins: null,
        colorValueDomain: null,
        elevationValueDomain: null,
        colorScaleFunc: nop,
        elevationScaleFunc: nop,
        dimensionUpdaters: this.getDimensionUpdaters()
      };
    }
  }, {
    key: "updateState",
    value: function updateState(_ref) {
      var _this = this;

      var oldProps = _ref.oldProps,
          props = _ref.props,
          changeFlags = _ref.changeFlags;
      this.updateGetValueFuncs(oldProps, props);
      var reprojectNeeded = this.needsReProjectPoints(oldProps, props, changeFlags);

      if (changeFlags.dataChanged || reprojectNeeded) {
        this.getLayerData();
      } else {
        var dimensionChanges = this.getDimensionChanges(oldProps, props) || [];
        dimensionChanges.forEach(function (f) {
          return typeof f === 'function' && f.apply(_this);
        });
      }
    }
  }, {
    key: "colorElevationPropsChanged",
    value: function colorElevationPropsChanged(oldProps, props) {
      var colorChanged = false;
      var elevationChanged = false;

      for (var _i = 0; _i < COLOR_PROPS.length; _i++) {
        var p = COLOR_PROPS[_i];

        if (oldProps[p] !== props[p]) {
          colorChanged = true;
        }
      }

      for (var _i2 = 0; _i2 < ELEVATION_PROPS.length; _i2++) {
        var _p = ELEVATION_PROPS[_i2];

        if (oldProps[_p] !== props[_p]) {
          elevationChanged = true;
        }
      }

      return {
        colorChanged: colorChanged,
        elevationChanged: elevationChanged
      };
    }
  }, {
    key: "updateGetValueFuncs",
    value: function updateGetValueFuncs(oldProps, props) {
      var getColorValue = props.getColorValue,
          getElevationValue = props.getElevationValue;
      var _this$props = this.props,
          colorAggregation = _this$props.colorAggregation,
          getColorWeight = _this$props.getColorWeight,
          elevationAggregation = _this$props.elevationAggregation,
          getElevationWeight = _this$props.getElevationWeight;

      var _this$colorElevationP = this.colorElevationPropsChanged(oldProps, props),
          colorChanged = _this$colorElevationP.colorChanged,
          elevationChanged = _this$colorElevationP.elevationChanged;

      if (colorChanged && getColorValue === null) {
        getColorValue = Object(_utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_12__["getValueFunc"])(colorAggregation, getColorWeight);
      }

      if (elevationChanged && getElevationValue === null) {
        getElevationValue = Object(_utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_12__["getValueFunc"])(elevationAggregation, getElevationWeight);
      }

      if (getColorValue) {
        this.setState({
          getColorValue: getColorValue
        });
      }

      if (getElevationValue) {
        this.setState({
          getElevationValue: getElevationValue
        });
      }
    }
  }, {
    key: "needsReProjectPoints",
    value: function needsReProjectPoints(oldProps, props, changeFlags) {
      return oldProps.cellSize !== props.cellSize || changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPosition);
    }
  }, {
    key: "getDimensionUpdaters",
    value: function getDimensionUpdaters() {
      return {
        getFillColor: [{
          id: 'value',
          triggers: ['getColorValue', 'getColorWeight', 'colorAggregation'],
          updater: this.getSortedColorBins
        }, {
          id: 'domain',
          triggers: ['lowerPercentile', 'upperPercentile'],
          updater: this.getColorValueDomain
        }, {
          id: 'scaleFunc',
          triggers: ['colorDomain', 'colorRange'],
          updater: this.getColorScale
        }],
        getElevation: [{
          id: 'value',
          triggers: ['getElevationValue', 'getElevationWeight', 'elevationAggregation'],
          updater: this.getSortedElevationBins
        }, {
          id: 'domain',
          triggers: ['elevationLowerPercentile', 'elevationUpperPercentile'],
          updater: this.getElevationValueDomain
        }, {
          id: 'scaleFunc',
          triggers: ['elevationDomain', 'elevationRange'],
          updater: this.getElevationScale
        }]
      };
    }
  }, {
    key: "getDimensionChanges",
    value: function getDimensionChanges(oldProps, props) {
      var dimensionUpdaters = this.state.dimensionUpdaters;
      var updaters = [];

      for (var dimensionKey in dimensionUpdaters) {
        var needUpdate = dimensionUpdaters[dimensionKey].find(function (item) {
          return item.triggers.some(function (t) {
            return oldProps[t] !== props[t];
          });
        });

        if (needUpdate) {
          updaters.push(needUpdate.updater);
        }
      }

      return updaters.length ? updaters : null;
    }
  }, {
    key: "getPickingInfo",
    value: function getPickingInfo(_ref2) {
      var info = _ref2.info;
      var _this$state = this.state,
          sortedColorBins = _this$state.sortedColorBins,
          sortedElevationBins = _this$state.sortedElevationBins;
      var isPicked = info.picked && info.index > -1;
      var object = null;

      if (isPicked) {
        var cell = this.state.layerData[info.index];
        var colorValue = sortedColorBins.binMap[cell.index] && sortedColorBins.binMap[cell.index].value;
        var elevationValue = sortedElevationBins.binMap[cell.index] && sortedElevationBins.binMap[cell.index].value;
        object = Object.assign({
          colorValue: colorValue,
          elevationValue: elevationValue
        }, cell);
      }

      return Object.assign(info, {
        picked: Boolean(object),
        object: object
      });
    }
  }, {
    key: "getUpdateTriggers",
    value: function getUpdateTriggers() {
      var _this2 = this;

      var dimensionUpdaters = this.state.dimensionUpdaters;
      var updateTriggers = {};

      var _loop = function _loop(dimensionKey) {
        updateTriggers[dimensionKey] = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = dimensionUpdaters[dimensionKey][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var step = _step.value;
            step.triggers.forEach(function (prop) {
              updateTriggers[dimensionKey][prop] = _this2.props[prop];
            });
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
      };

      for (var dimensionKey in dimensionUpdaters) {
        _loop(dimensionKey);
      }

      return updateTriggers;
    }
  }, {
    key: "getLayerData",
    value: function getLayerData() {
      var _this$props2 = this.props,
          data = _this$props2.data,
          cellSize = _this$props2.cellSize,
          getPosition = _this$props2.getPosition;

      var _pointToDensityGridDa = Object(_grid_aggregator__WEBPACK_IMPORTED_MODULE_11__["pointToDensityGridDataCPU"])(data, cellSize, getPosition),
          layerData = _pointToDensityGridDa.layerData;

      this.setState({
        layerData: layerData
      });
      this.getSortedBins();
    }
  }, {
    key: "getValueDomain",
    value: function getValueDomain() {
      this.getColorValueDomain();
      this.getElevationValueDomain();
    }
  }, {
    key: "getSortedBins",
    value: function getSortedBins() {
      this.getSortedColorBins();
      this.getSortedElevationBins();
    }
  }, {
    key: "getSortedColorBins",
    value: function getSortedColorBins() {
      var getColorValue = this.state.getColorValue;
      var sortedColorBins = new _utils_bin_sorter__WEBPACK_IMPORTED_MODULE_8__["default"](this.state.layerData || [], getColorValue);
      this.setState({
        sortedColorBins: sortedColorBins
      });
      this.getColorValueDomain();
    }
  }, {
    key: "getSortedElevationBins",
    value: function getSortedElevationBins() {
      var getElevationValue = this.state.getElevationValue;
      var sortedElevationBins = new _utils_bin_sorter__WEBPACK_IMPORTED_MODULE_8__["default"](this.state.layerData || [], getElevationValue);
      this.setState({
        sortedElevationBins: sortedElevationBins
      });
      this.getElevationValueDomain();
    }
  }, {
    key: "getColorValueDomain",
    value: function getColorValueDomain() {
      var _this$props3 = this.props,
          lowerPercentile = _this$props3.lowerPercentile,
          upperPercentile = _this$props3.upperPercentile,
          onSetColorDomain = _this$props3.onSetColorDomain;
      this.state.colorValueDomain = this.state.sortedColorBins.getValueRange([lowerPercentile, upperPercentile]);

      if (typeof onSetColorDomain === 'function') {
        onSetColorDomain(this.state.colorValueDomain);
      }

      this.getColorScale();
    }
  }, {
    key: "getElevationValueDomain",
    value: function getElevationValueDomain() {
      var _this$props4 = this.props,
          elevationLowerPercentile = _this$props4.elevationLowerPercentile,
          elevationUpperPercentile = _this$props4.elevationUpperPercentile,
          onSetElevationDomain = _this$props4.onSetElevationDomain;
      this.state.elevationValueDomain = this.state.sortedElevationBins.getValueRange([elevationLowerPercentile, elevationUpperPercentile]);

      if (typeof onSetElevationDomain === 'function') {
        onSetElevationDomain(this.state.elevationValueDomain);
      }

      this.getElevationScale();
    }
  }, {
    key: "getColorScale",
    value: function getColorScale() {
      var colorRange = this.props.colorRange;
      var colorDomain = this.props.colorDomain || this.state.colorValueDomain;
      this.state.colorScaleFunc = Object(_utils_scale_utils__WEBPACK_IMPORTED_MODULE_10__["getQuantizeScale"])(colorDomain, colorRange);
    }
  }, {
    key: "getElevationScale",
    value: function getElevationScale() {
      var elevationRange = this.props.elevationRange;
      var elevationDomain = this.props.elevationDomain || this.state.elevationValueDomain;
      this.state.elevationScaleFunc = Object(_utils_scale_utils__WEBPACK_IMPORTED_MODULE_10__["getLinearScale"])(elevationDomain, elevationRange);
    }
  }, {
    key: "_onGetSublayerColor",
    value: function _onGetSublayerColor(cell) {
      var _this$state2 = this.state,
          sortedColorBins = _this$state2.sortedColorBins,
          colorScaleFunc = _this$state2.colorScaleFunc,
          colorValueDomain = _this$state2.colorValueDomain;
      var cv = sortedColorBins.binMap[cell.index] && sortedColorBins.binMap[cell.index].value;
      var colorDomain = this.props.colorDomain || colorValueDomain;
      var isColorValueInDomain = cv >= colorDomain[0] && cv <= colorDomain[colorDomain.length - 1];
      var color = isColorValueInDomain ? colorScaleFunc(cv) : [0, 0, 0, 0];
      color[3] = Number.isFinite(color[3]) ? color[3] : 255;
      return color;
    }
  }, {
    key: "_onGetSublayerElevation",
    value: function _onGetSublayerElevation(cell) {
      var _this$state3 = this.state,
          sortedElevationBins = _this$state3.sortedElevationBins,
          elevationScaleFunc = _this$state3.elevationScaleFunc,
          elevationValueDomain = _this$state3.elevationValueDomain;
      var ev = sortedElevationBins.binMap[cell.index] && sortedElevationBins.binMap[cell.index].value;
      var elevationDomain = this.props.elevationDomain || elevationValueDomain;
      var isElevationValueInDomain = ev >= elevationDomain[0] && ev <= elevationDomain[elevationDomain.length - 1];
      return isElevationValueInDomain ? elevationScaleFunc(ev) : -1;
    }
  }, {
    key: "renderLayers",
    value: function renderLayers() {
      var _this$props5 = this.props,
          elevationScale = _this$props5.elevationScale,
          fp64 = _this$props5.fp64,
          extruded = _this$props5.extruded,
          cellSize = _this$props5.cellSize,
          coverage = _this$props5.coverage,
          material = _this$props5.material,
          transitions = _this$props5.transitions;
      var SubLayerClass = this.getSubLayerClass('grid-cell', _deck_gl_layers__WEBPACK_IMPORTED_MODULE_7__["default"]);
      return new SubLayerClass({
        fp64: fp64,
        cellSize: cellSize,
        coverage: coverage,
        material: material,
        elevationScale: elevationScale,
        extruded: extruded,
        getFillColor: this._onGetSublayerColor.bind(this),
        getElevation: this._onGetSublayerElevation.bind(this),
        transitions: transitions && {
          getFillColor: transitions.getColorValue || transitions.getColorWeight,
          getElevation: transitions.getElevationValue || transitions.getElevationWeight
        }
      }, this.getSubLayerProps({
        id: 'grid-cell',
        updateTriggers: this.getUpdateTriggers()
      }), {
        data: this.state.layerData
      });
    }
  }]);

  return CPUGridLayer;
}(_deck_gl_core__WEBPACK_IMPORTED_MODULE_6__["default"]);


CPUGridLayer.layerName = 'CPUGridLayer';
CPUGridLayer.defaultProps = defaultProps;
//# sourceMappingURL=cpu-grid-layer.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/cpu-grid-layer/grid-aggregator.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/cpu-grid-layer/grid-aggregator.js ***!
  \*********************************************************************************************/
/*! exports provided: pointToDensityGridDataCPU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointToDensityGridDataCPU", function() { return pointToDensityGridDataCPU; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/utils/iterable-utils.js");


var R_EARTH = 6378000;
function pointToDensityGridDataCPU(points, cellSize, getPosition) {
  var _pointsToGridHashing2 = _pointsToGridHashing(points, cellSize, getPosition),
      gridHash = _pointsToGridHashing2.gridHash,
      gridOffset = _pointsToGridHashing2.gridOffset;

  var layerData = _getGridLayerDataFromGridHash(gridHash, gridOffset);

  return {
    gridHash: gridHash,
    gridOffset: gridOffset,
    layerData: layerData
  };
}

function _pointsToGridHashing() {
  var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var cellSize = arguments.length > 1 ? arguments[1] : undefined;
  var getPosition = arguments.length > 2 ? arguments[2] : undefined;
  var latMin = Infinity;
  var latMax = -Infinity;
  var pLat;

  var _createIterable = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["createIterable"])(points),
      iterable = _createIterable.iterable,
      objectInfo = _createIterable.objectInfo;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var pt = _step.value;
      objectInfo.index++;
      pLat = getPosition(pt, objectInfo)[1];

      if (Number.isFinite(pLat)) {
        latMin = pLat < latMin ? pLat : latMin;
        latMax = pLat > latMax ? pLat : latMax;
      }
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

  var centerLat = (latMin + latMax) / 2;

  var gridOffset = _calculateGridLatLonOffset(cellSize, centerLat);

  if (gridOffset.xOffset <= 0 || gridOffset.yOffset <= 0) {
    return {
      gridHash: {},
      gridOffset: gridOffset
    };
  }

  var gridHash = {};
  objectInfo.index = -1;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _pt = _step2.value;
      objectInfo.index++;

      var _getPosition = getPosition(_pt, objectInfo),
          _getPosition2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_getPosition, 2),
          lng = _getPosition2[0],
          lat = _getPosition2[1];

      if (Number.isFinite(lat) && Number.isFinite(lng)) {
        var latIdx = Math.floor((lat + 90) / gridOffset.yOffset);
        var lonIdx = Math.floor((lng + 180) / gridOffset.xOffset);
        var key = "".concat(latIdx, "-").concat(lonIdx);
        gridHash[key] = gridHash[key] || {
          count: 0,
          points: []
        };
        gridHash[key].count += 1;
        gridHash[key].points.push(_pt);
      }
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

  return {
    gridHash: gridHash,
    gridOffset: gridOffset
  };
}

function _getGridLayerDataFromGridHash(gridHash, gridOffset) {
  return Object.keys(gridHash).reduce(function (accu, key, i) {
    var idxs = key.split('-');
    var latIdx = parseInt(idxs[0], 10);
    var lonIdx = parseInt(idxs[1], 10);
    accu.push(Object.assign({
      index: i,
      position: [-180 + gridOffset.xOffset * lonIdx, -90 + gridOffset.yOffset * latIdx]
    }, gridHash[key]));
    return accu;
  }, []);
}

function _calculateGridLatLonOffset(cellSize, latitude) {
  var yOffset = _calculateLatOffset(cellSize);

  var xOffset = _calculateLonOffset(latitude, cellSize);

  return {
    yOffset: yOffset,
    xOffset: xOffset
  };
}

function _calculateLatOffset(dy) {
  return dy / R_EARTH * (180 / Math.PI);
}

function _calculateLonOffset(lat, dx) {
  return dx / R_EARTH * (180 / Math.PI) / Math.cos(lat * Math.PI / 180);
}
//# sourceMappingURL=grid-aggregator.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/gpu-grid-layer/gpu-grid-cell-layer-fragment.glsl.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/gpu-grid-layer/gpu-grid-cell-layer-fragment.glsl.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\n#define SHADER_NAME gpu-grid-cell-layer-fragment-shader\n\nprecision highp float;\n\nin vec4 vColor;\n\nout vec4 fragColor;\n\nvoid main(void) {\n  fragColor = vColor;\n  fragColor = picking_filterColor(fragColor);\n}\n");
//# sourceMappingURL=gpu-grid-cell-layer-fragment.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/gpu-grid-layer/gpu-grid-cell-layer-vertex.glsl.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/gpu-grid-layer/gpu-grid-cell-layer-vertex.glsl.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\n#define SHADER_NAME gpu-grid-cell-layer-vertex-shader\n#define RANGE_COUNT 6\n\nin vec3 positions;\nin vec3 normals;\n\nin vec4 colors;\nin vec4 elevations;\nin vec3 instancePickingColors;\nuniform vec2 offset;\nuniform bool extruded;\nuniform float cellSize;\nuniform float coverage;\nuniform float opacity;\nuniform float elevationScale;\n\nuniform ivec2 gridSize;\nuniform vec2 gridOrigin;\nuniform vec2 gridOriginLow;\nuniform vec2 gridOffset;\nuniform vec2 gridOffsetLow;\nuniform vec4 colorRange[RANGE_COUNT];\nuniform vec2 elevationRange;\nuniform vec2 colorDomain;\nuniform bool colorDomainValid;\nuniform vec2 elevationDomain;\nuniform bool elevationDomainValid;\n\nlayout(std140) uniform;\nuniform ColorData\n{\n  vec4 maxMinCount;\n} colorData;\nuniform ElevationData\n{\n  vec4 maxMinCount;\n} elevationData;\n\n#define EPSILON 0.00001\nout vec4 vColor;\n\nvec4 quantizeScale(vec2 domain, vec4 range[RANGE_COUNT], float value) {\n  vec4 outColor = vec4(0., 0., 0., 0.);\n  if (value >= (domain.x - EPSILON) && value <= (domain.y + EPSILON)) {\n    float domainRange = domain.y - domain.x;\n    if (domainRange <= 0.) {\n      outColor = colorRange[0];\n    } else {\n      float rangeCount = float(RANGE_COUNT);\n      float rangeStep = domainRange / rangeCount;\n      float idx = floor((value - domain.x) / rangeStep);\n      idx = clamp(idx, 0., rangeCount - 1.);\n      int intIdx = int(idx);\n      outColor = colorRange[intIdx];\n    }\n  }\n  return outColor;\n}\n\nfloat linearScale(vec2 domain, vec2 range, float value) {\n  if (value >= (domain.x - EPSILON) && value <= (domain.y + EPSILON)) {\n    return ((value - domain.x) / (domain.y - domain.x)) * (range.y - range.x) + range.x;\n  }\n  return -1.;\n}\n\nvoid main(void) {\n\n  vec2 clrDomain = colorDomainValid ? colorDomain : vec2(colorData.maxMinCount.a, colorData.maxMinCount.r);\n  vec4 color = quantizeScale(clrDomain, colorRange, colors.r);\n\n  float elevation = 0.0;\n\n  if (extruded) {\n    vec2 elvDomain = elevationDomainValid ? elevationDomain : vec2(elevationData.maxMinCount.a, elevationData.maxMinCount.r);\n    elevation = linearScale(elvDomain, elevationRange, elevations.r);\n    elevation = elevation  * (positions.z + 1.0) / 2.0 * elevationScale;\n  }\n  float shouldRender = float(color.r > 0.0 && elevations.r >= 0.0);\n  float dotRadius = cellSize / 2. * coverage * shouldRender;\n\n  int yIndex = (gl_InstanceID / gridSize[0]);\n  int xIndex = gl_InstanceID - (yIndex * gridSize[0]);\n\n  vec2 instancePositionXFP64 = mul_fp64(vec2(gridOffset[0], gridOffsetLow[0]), vec2(float(xIndex), 0.));\n  instancePositionXFP64 = sum_fp64(instancePositionXFP64, vec2(gridOrigin[0], gridOriginLow[0]));\n  vec2 instancePositionYFP64 = mul_fp64(vec2(gridOffset[1], gridOffsetLow[1]), vec2(float(yIndex), 0.));\n  instancePositionYFP64 = sum_fp64(instancePositionYFP64, vec2(gridOrigin[1], gridOriginLow[1]));\n\n  vec3 centroidPosition = vec3(instancePositionXFP64[0], instancePositionYFP64[0], elevation);\n  vec2 centroidPosition64xyLow = vec2(instancePositionXFP64[1], instancePositionYFP64[1]);\n  vec3 pos = vec3(project_size(positions.xy + offset) * dotRadius, 0.);\n  picking_setPickingColor(instancePickingColors);\n\n  vec4 position_commonspace;\n  gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64xyLow, pos, position_commonspace);\n\n  vec3 normals_commonspace = project_normal(normals);\n\n   if (extruded) {\n    vec3 lightColor = lighting_getLightColor(color.rgb, project_uCameraPosition, position_commonspace.xyz, normals_commonspace);\n    vColor = vec4(lightColor, color.a * opacity) / 255.;\n  } else {\n    vColor = vec4(color.rgb, color.a * opacity) / 255.;\n  }\n}\n");
//# sourceMappingURL=gpu-grid-cell-layer-vertex.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/gpu-grid-layer/gpu-grid-cell-layer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/gpu-grid-layer/gpu-grid-cell-layer.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GPUGridCellLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/lib/layer.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/shadertools/dist/esm/modules/fp64/fp64.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/materials/phong-material.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/lib/model.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/geometries/cube-geometry.js");
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/color-utils */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/color-utils.js");
/* harmony import */ var _gpu_grid_cell_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gpu-grid-cell-layer-vertex.glsl */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/gpu-grid-layer/gpu-grid-cell-layer-vertex.glsl.js");
/* harmony import */ var _gpu_grid_cell_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gpu-grid-cell-layer-fragment.glsl */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/gpu-grid-layer/gpu-grid-cell-layer-fragment.glsl.js");







var fp64LowPart = _luma_gl_core__WEBPACK_IMPORTED_MODULE_6__["default"].fp64LowPart;
var defaultMaterial = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_7__["default"]();



var COLOR_DATA_UBO_INDEX = 0;
var ELEVATION_DATA_UBO_INDEX = 1;
var defaultProps = {
  colorDomain: null,
  colorRange: _utils_color_utils__WEBPACK_IMPORTED_MODULE_10__["defaultColorRange"],
  elevationDomain: null,
  elevationRange: [0, 1000],
  elevationScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  gridSize: {
    type: 'array',
    min: 0,
    value: [1, 1]
  },
  gridOrigin: {
    type: 'array',
    min: 0,
    value: [0, 0]
  },
  gridOffset: {
    type: 'array',
    min: 0,
    value: [0, 0]
  },
  cellSize: {
    type: 'number',
    min: 0,
    max: 1000,
    value: 1000
  },
  offset: {
    type: 'array',
    min: 0,
    value: [1, 1]
  },
  coverage: {
    type: 'number',
    min: 0,
    max: 1,
    value: 1
  },
  extruded: true,
  fp64: false,
  material: defaultMaterial
};

var GPUGridCellLayer = function (_Layer) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GPUGridCellLayer, _Layer);

  function GPUGridCellLayer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GPUGridCellLayer);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GPUGridCellLayer).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GPUGridCellLayer, [{
    key: "getShaders",
    value: function getShaders() {
      return {
        vs: _gpu_grid_cell_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_11__["default"],
        fs: _gpu_grid_cell_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_12__["default"],
        modules: ['project32', 'gouraud-lighting', 'picking', 'fp64']
      };
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      var gl = this.context.gl;
      var attributeManager = this.getAttributeManager();
      attributeManager.addInstanced({
        colors: {
          size: 4,
          update: this.calculateColors,
          noAlloc: true
        },
        elevations: {
          size: 4,
          update: this.calculateElevations,
          noAlloc: true
        }
      });

      var model = this._getModel(gl);

      this._setupUniformBuffer(model);

      this.setState({
        model: model
      });
    }
  }, {
    key: "_getModel",
    value: function _getModel(gl) {
      return new _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__["default"](gl, Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: new _luma_gl_core__WEBPACK_IMPORTED_MODULE_9__["default"](),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      }));
    }
  }, {
    key: "draw",
    value: function draw(_ref) {
      var uniforms = _ref.uniforms;
      var _this$props = this.props,
          data = _this$props.data,
          cellSize = _this$props.cellSize,
          offset = _this$props.offset,
          extruded = _this$props.extruded,
          elevationScale = _this$props.elevationScale,
          coverage = _this$props.coverage,
          gridSize = _this$props.gridSize,
          gridOrigin = _this$props.gridOrigin,
          gridOffset = _this$props.gridOffset,
          colorRange = _this$props.colorRange,
          elevationRange = _this$props.elevationRange;
      var gridOriginLow = [fp64LowPart(gridOrigin[0]), fp64LowPart(gridOrigin[1])];
      var gridOffsetLow = [fp64LowPart(gridOffset[0]), fp64LowPart(gridOffset[1])];
      var colorMaxMinBuffer = data.color.maxMinBuffer;
      var elevationMaxMinBuffer = data.elevation.maxMinBuffer;
      colorMaxMinBuffer.bind({
        target: 35345,
        index: COLOR_DATA_UBO_INDEX
      });
      elevationMaxMinBuffer.bind({
        target: 35345,
        index: ELEVATION_DATA_UBO_INDEX
      });
      var domainUniforms = this.getDomainUniforms();
      this.state.model.setUniforms(Object.assign({}, uniforms, domainUniforms, {
        cellSize: cellSize,
        offset: offset,
        extruded: extruded,
        elevationScale: elevationScale,
        coverage: coverage,
        gridSize: gridSize,
        gridOrigin: gridOrigin,
        gridOriginLow: gridOriginLow,
        gridOffset: gridOffset,
        gridOffsetLow: gridOffsetLow,
        colorRange: colorRange,
        elevationRange: elevationRange
      })).draw();
      colorMaxMinBuffer.unbind({
        target: 35345,
        index: COLOR_DATA_UBO_INDEX
      });
      elevationMaxMinBuffer.unbind({
        target: 35345,
        index: ELEVATION_DATA_UBO_INDEX
      });
    }
  }, {
    key: "calculateColors",
    value: function calculateColors(attribute) {
      var data = this.props.data;
      attribute.update({
        buffer: data.color.aggregationBuffer
      });
    }
  }, {
    key: "calculateElevations",
    value: function calculateElevations(attribute) {
      var data = this.props.data;
      attribute.update({
        buffer: data.elevation.aggregationBuffer
      });
    }
  }, {
    key: "getDomainUniforms",
    value: function getDomainUniforms() {
      var _this$props2 = this.props,
          colorDomain = _this$props2.colorDomain,
          elevationDomain = _this$props2.elevationDomain;
      var domainUniforms = {};

      if (colorDomain !== null) {
        domainUniforms.colorDomainValid = true;
        domainUniforms.colorDomain = colorDomain;
      } else {
        domainUniforms.colorDomainValid = false;
      }

      if (elevationDomain !== null) {
        domainUniforms.elevationDomainValid = true;
        domainUniforms.elevationDomain = elevationDomain;
      } else {
        domainUniforms.elevationDomainValid = false;
      }

      return domainUniforms;
    }
  }, {
    key: "_setupUniformBuffer",
    value: function _setupUniformBuffer(model) {
      var gl = this.context.gl;
      var programHandle = model.program.handle;
      var colorIndex = gl.getUniformBlockIndex(programHandle, 'ColorData');
      var elevationIndex = gl.getUniformBlockIndex(programHandle, 'ElevationData');
      gl.uniformBlockBinding(programHandle, colorIndex, COLOR_DATA_UBO_INDEX);
      gl.uniformBlockBinding(programHandle, elevationIndex, ELEVATION_DATA_UBO_INDEX);
    }
  }]);

  return GPUGridCellLayer;
}(_deck_gl_core__WEBPACK_IMPORTED_MODULE_5__["default"]);


GPUGridCellLayer.layerName = 'GPUGridCellLayer';
GPUGridCellLayer.defaultProps = defaultProps;
//# sourceMappingURL=gpu-grid-cell-layer.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/gpu-grid-layer/gpu-grid-layer.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/gpu-grid-layer/gpu-grid-layer.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GPUGridLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/materials/phong-material.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/utils/log.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/lib/composite-layer.js");
/* harmony import */ var _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/gpu-grid-aggregation/gpu-grid-aggregator */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/gpu-grid-aggregator.js");
/* harmony import */ var _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/aggregation-operation-utils */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/aggregation-operation-utils.js");
/* harmony import */ var _utils_gpu_grid_aggregation_grid_aggregation_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/gpu-grid-aggregation/grid-aggregation-utils */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/grid-aggregation-utils.js");
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/color-utils */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/color-utils.js");
/* harmony import */ var _gpu_grid_cell_layer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gpu-grid-cell-layer */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/gpu-grid-layer/gpu-grid-cell-layer.js");
/* harmony import */ var _cpu_grid_layer_grid_aggregator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../cpu-grid-layer/grid-aggregator */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/cpu-grid-layer/grid-aggregator.js");














var defaultMaterial = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_6__["default"]();
var defaultProps = {
  colorDomain: null,
  colorRange: _utils_color_utils__WEBPACK_IMPORTED_MODULE_12__["defaultColorRange"],
  getColorWeight: {
    type: 'accessor',
    value: function value(x) {
      return 1;
    }
  },
  colorAggregation: 'SUM',
  elevationDomain: null,
  elevationRange: [0, 1000],
  getElevationWeight: {
    type: 'accessor',
    value: function value(x) {
      return 1;
    }
  },
  elevationAggregation: 'SUM',
  elevationScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  cellSize: {
    type: 'number',
    min: 0,
    max: 1000,
    value: 1000
  },
  coverage: {
    type: 'number',
    min: 0,
    max: 1,
    value: 1
  },
  getPosition: {
    type: 'accessor',
    value: function value(x) {
      return x.position;
    }
  },
  extruded: false,
  fp64: false,
  material: defaultMaterial,
  gpuAggregation: true
};

var GPUGridLayer = function (_CompositeLayer) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(GPUGridLayer, _CompositeLayer);

  function GPUGridLayer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GPUGridLayer);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GPUGridLayer).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GPUGridLayer, [{
    key: "initializeState",
    value: function initializeState() {
      var gl = this.context.gl;
      var isSupported = _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_9__["default"].isSupported(gl);

      if (!isSupported) {
        _deck_gl_core__WEBPACK_IMPORTED_MODULE_7__["default"].error('GPUGridLayer is not supported on this browser, use GridLayer instead')();
      }

      var options = {
        id: "".concat(this.id, "-gpu-aggregator"),
        shaderCache: this.context.shaderCache
      };
      this.state = {
        gpuGridAggregator: new _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_9__["default"](gl, options),
        isSupported: isSupported
      };
    }
  }, {
    key: "updateState",
    value: function updateState(opts) {
      var aggregationFlags = this.getAggregationFlags(opts);

      if (aggregationFlags) {
        this.getLayerData(aggregationFlags);
        this.setState({
          gridHash: null
        });
      }
    }
  }, {
    key: "finalizeState",
    value: function finalizeState() {
      Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GPUGridLayer.prototype), "finalizeState", this).call(this);

      this.state.gpuGridAggregator.delete();
    }
  }, {
    key: "getAggregationFlags",
    value: function getAggregationFlags(_ref) {
      var oldProps = _ref.oldProps,
          props = _ref.props,
          changeFlags = _ref.changeFlags;
      var aggregationFlags = null;

      if (!this.state.isSupported) {
        return false;
      }

      if (this.isDataChanged({
        oldProps: oldProps,
        props: props,
        changeFlags: changeFlags
      })) {
        aggregationFlags = Object.assign({}, aggregationFlags, {
          dataChanged: true
        });
      }

      if (oldProps.cellSize !== props.cellSize) {
        aggregationFlags = Object.assign({}, aggregationFlags, {
          cellSizeChanged: true
        });
      }

      return aggregationFlags;
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged(_ref2) {
      var oldProps = _ref2.oldProps,
          props = _ref2.props,
          changeFlags = _ref2.changeFlags;

      if (changeFlags.dataChanged) {
        return true;
      }

      if (oldProps.gpuAggregation !== props.gpuAggregation) {
        return true;
      }

      if (oldProps.colorAggregation !== props.colorAggregation || oldProps.elevationAggregation !== props.elevationAggregation) {
        return true;
      }

      if (changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPosition || changeFlags.updateTriggersChanged.getColorWeight || changeFlags.updateTriggersChanged.getElevationWeight)) {
        return true;
      }

      return false;
    }
  }, {
    key: "getHashKeyForIndex",
    value: function getHashKeyForIndex(index) {
      var _this$state = this.state,
          gridSize = _this$state.gridSize,
          gridOrigin = _this$state.gridOrigin,
          cellSize = _this$state.cellSize;
      var yIndex = Math.floor(index / gridSize[0]);
      var xIndex = index - yIndex * gridSize[0];
      var latIdx = Math.floor((yIndex * cellSize[1] + gridOrigin[1] + 90 + cellSize[1] / 2) / cellSize[1]);
      var lonIdx = Math.floor((xIndex * cellSize[0] + gridOrigin[0] + 180 + cellSize[0] / 2) / cellSize[0]);
      return "".concat(latIdx, "-").concat(lonIdx);
    }
  }, {
    key: "getPositionForIndex",
    value: function getPositionForIndex(index) {
      var _this$state2 = this.state,
          gridSize = _this$state2.gridSize,
          gridOrigin = _this$state2.gridOrigin,
          cellSize = _this$state2.cellSize;
      var yIndex = Math.floor(index / gridSize[0]);
      var xIndex = index - yIndex * gridSize[0];
      var yPos = yIndex * cellSize[1] + gridOrigin[1];
      var xPos = xIndex * cellSize[0] + gridOrigin[0];
      return [xPos, yPos];
    }
  }, {
    key: "getPickingInfo",
    value: function getPickingInfo(_ref3) {
      var info = _ref3.info,
          mode = _ref3.mode;
      var index = info.index;
      var object = null;

      if (index >= 0) {
        var gpuGridAggregator = this.state.gpuGridAggregator;
        var position = this.getPositionForIndex(index);
        var colorInfo = _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_9__["default"].getAggregationData(Object.assign({
          pixelIndex: index
        }, gpuGridAggregator.getData('color')));
        var elevationInfo = _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_9__["default"].getAggregationData(Object.assign({
          pixelIndex: index
        }, gpuGridAggregator.getData('elevation')));
        object = {
          colorValue: colorInfo.cellWeight,
          elevationValue: elevationInfo.cellWeight,
          count: colorInfo.cellCount || elevationInfo.cellCount,
          position: position,
          totalCount: colorInfo.totalCount || elevationInfo.totalCount
        };

        if (mode !== 'hover') {
          var _this$props = this.props,
              data = _this$props.data,
              getPosition = _this$props.getPosition;
          var gridHash = this.state.gridHash;

          if (!gridHash) {
            var cpuAggregation = Object(_cpu_grid_layer_grid_aggregator__WEBPACK_IMPORTED_MODULE_14__["pointToDensityGridDataCPU"])(data, this.props.cellSize, getPosition);
            gridHash = cpuAggregation.gridHash;
            this.setState({
              gridHash: gridHash
            });
          }

          var key = this.getHashKeyForIndex(index);
          var cpuAggregationData = gridHash[key];
          Object.assign(object, cpuAggregationData);
        }
      }

      return Object.assign(info, {
        picked: Boolean(object),
        object: object
      });
    }
  }, {
    key: "getLayerData",
    value: function getLayerData(aggregationFlags) {
      var _this$props2 = this.props,
          data = _this$props2.data,
          cellSizeMeters = _this$props2.cellSize,
          getPosition = _this$props2.getPosition,
          gpuAggregation = _this$props2.gpuAggregation,
          getColorWeight = _this$props2.getColorWeight,
          colorAggregation = _this$props2.colorAggregation,
          getElevationWeight = _this$props2.getElevationWeight,
          elevationAggregation = _this$props2.elevationAggregation,
          fp64 = _this$props2.fp64;
      var weightParams = {
        color: {
          getWeight: getColorWeight,
          operation: _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_10__["AGGREGATION_OPERATION"][colorAggregation] || _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_10__["AGGREGATION_OPERATION"][defaultProps.colorAggregation],
          needMin: true,
          needMax: true,
          combineMaxMin: true
        },
        elevation: {
          getWeight: getElevationWeight,
          operation: _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_10__["AGGREGATION_OPERATION"][elevationAggregation] || _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_10__["AGGREGATION_OPERATION"][defaultProps.elevationAggregation],
          needMin: true,
          needMax: true,
          combineMaxMin: true
        }
      };

      var _pointToDensityGridDa = Object(_utils_gpu_grid_aggregation_grid_aggregation_utils__WEBPACK_IMPORTED_MODULE_11__["pointToDensityGridData"])({
        data: data,
        cellSizeMeters: cellSizeMeters,
        getPosition: getPosition,
        weightParams: weightParams,
        gpuAggregation: gpuAggregation,
        gpuGridAggregator: this.state.gpuGridAggregator,
        boundingBox: this.state.boundingBox,
        aggregationFlags: aggregationFlags,
        fp64: fp64
      }),
          weights = _pointToDensityGridDa.weights,
          gridSize = _pointToDensityGridDa.gridSize,
          gridOrigin = _pointToDensityGridDa.gridOrigin,
          cellSize = _pointToDensityGridDa.cellSize,
          boundingBox = _pointToDensityGridDa.boundingBox;

      this.setState({
        weights: weights,
        gridSize: gridSize,
        gridOrigin: gridOrigin,
        cellSize: cellSize,
        boundingBox: boundingBox
      });
    }
  }, {
    key: "renderLayers",
    value: function renderLayers() {
      if (!this.state.isSupported) {
        return null;
      }

      var _this$props3 = this.props,
          elevationScale = _this$props3.elevationScale,
          fp64 = _this$props3.fp64,
          extruded = _this$props3.extruded,
          cellSizeMeters = _this$props3.cellSize,
          coverage = _this$props3.coverage,
          material = _this$props3.material,
          elevationRange = _this$props3.elevationRange,
          colorDomain = _this$props3.colorDomain,
          elevationDomain = _this$props3.elevationDomain;
      var _this$state3 = this.state,
          weights = _this$state3.weights,
          gridSize = _this$state3.gridSize,
          gridOrigin = _this$state3.gridOrigin,
          cellSize = _this$state3.cellSize;
      var colorRange = Object(_utils_color_utils__WEBPACK_IMPORTED_MODULE_12__["colorRangeToFlatArray"])(this.props.colorRange, Float32Array, 255);
      var SubLayerClass = this.getSubLayerClass('gpu-grid-cell', _gpu_grid_cell_layer__WEBPACK_IMPORTED_MODULE_13__["default"]);
      return new SubLayerClass({
        gridSize: gridSize,
        gridOrigin: gridOrigin,
        gridOffset: cellSize,
        colorRange: colorRange,
        elevationRange: elevationRange,
        colorDomain: colorDomain,
        elevationDomain: elevationDomain,
        fp64: fp64,
        cellSize: cellSizeMeters,
        coverage: coverage,
        material: material,
        elevationScale: elevationScale,
        extruded: extruded
      }, this.getSubLayerProps({
        id: 'gpu-grid-cell'
      }), {
        data: weights,
        numInstances: gridSize[0] * gridSize[1]
      });
    }
  }]);

  return GPUGridLayer;
}(_deck_gl_core__WEBPACK_IMPORTED_MODULE_8__["default"]);


GPUGridLayer.layerName = 'GPUGridLayer';
GPUGridLayer.defaultProps = defaultProps;
//# sourceMappingURL=gpu-grid-layer.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/grid-layer/grid-layer.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/grid-layer/grid-layer.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/lib/composite-layer.js");
/* harmony import */ var _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/gpu-grid-aggregation/gpu-grid-aggregator */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/gpu-grid-aggregator.js");
/* harmony import */ var _gpu_grid_layer_gpu_grid_layer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gpu-grid-layer/gpu-grid-layer */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/gpu-grid-layer/gpu-grid-layer.js");
/* harmony import */ var _cpu_grid_layer_cpu_grid_layer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cpu-grid-layer/cpu-grid-layer */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/cpu-grid-layer/cpu-grid-layer.js");









var defaultProps = Object.assign({}, _gpu_grid_layer_gpu_grid_layer__WEBPACK_IMPORTED_MODULE_7__["default"].defaultProps, _cpu_grid_layer_cpu_grid_layer__WEBPACK_IMPORTED_MODULE_8__["default"].defaultProps, {
  gpuAggregation: false
});

var GridLayer = function (_CompositeLayer) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GridLayer, _CompositeLayer);

  function GridLayer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GridLayer);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GridLayer).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GridLayer, [{
    key: "initializeState",
    value: function initializeState() {
      this.state = {
        useGPUAggregation: true
      };
    }
  }, {
    key: "updateState",
    value: function updateState(_ref) {
      var oldProps = _ref.oldProps,
          props = _ref.props,
          changeFlags = _ref.changeFlags;
      var newState = {};
      newState.useGPUAggregation = this.canUseGPUAggregation(props);
      this.setState(newState);
    }
  }, {
    key: "renderLayers",
    value: function renderLayers() {
      var _this$props = this.props,
          data = _this$props.data,
          updateTriggers = _this$props.updateTriggers;
      var id = this.state.useGPUAggregation ? 'GPU' : 'CPU';
      var LayerType = this.state.useGPUAggregation ? this.getSubLayerClass('GPU', _gpu_grid_layer_gpu_grid_layer__WEBPACK_IMPORTED_MODULE_7__["default"]) : this.getSubLayerClass('CPU', _cpu_grid_layer_cpu_grid_layer__WEBPACK_IMPORTED_MODULE_8__["default"]);
      return new LayerType(this.props, this.getSubLayerProps({
        id: id,
        updateTriggers: updateTriggers
      }), {
        data: data
      });
    }
  }, {
    key: "canUseGPUAggregation",
    value: function canUseGPUAggregation(props) {
      var gpuAggregation = props.gpuAggregation,
          lowerPercentile = props.lowerPercentile,
          upperPercentile = props.upperPercentile,
          getColorValue = props.getColorValue,
          getElevationValue = props.getElevationValue;

      if (!gpuAggregation) {
        return false;
      }

      if (!_utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_6__["default"].isSupported(this.context.gl)) {
        return false;
      }

      if (lowerPercentile !== 0 || upperPercentile !== 100) {
        return false;
      }

      if (getColorValue !== null || getElevationValue !== null) {
        return false;
      }

      return true;
    }
  }]);

  return GridLayer;
}(_deck_gl_core__WEBPACK_IMPORTED_MODULE_5__["default"]);


GridLayer.layerName = 'GridLayer';
GridLayer.defaultProps = defaultProps;
//# sourceMappingURL=grid-layer.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/aggregation-operation-utils.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/aggregation-operation-utils.js ***!
  \************************************************************************************************/
/*! exports provided: AGGREGATION_OPERATION, getMean, getSum, getMax, getMin, getValueFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AGGREGATION_OPERATION", function() { return AGGREGATION_OPERATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMean", function() { return getMean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSum", function() { return getSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMax", function() { return getMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMin", function() { return getMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueFunc", function() { return getValueFunc; });
var AGGREGATION_OPERATION = {
  SUM: 1,
  MEAN: 2,
  MIN: 3,
  MAX: 4
};

function sumReducer(accu, cur) {
  return accu + cur;
}

function maxReducer(accu, cur) {
  return cur > accu ? cur : accu;
}

function minReducer(accu, cur) {
  return cur < accu ? cur : accu;
}

function getMean(pts, accessor) {
  var filtered = pts.map(accessor).filter(Number.isFinite);
  return filtered.length ? filtered.reduce(sumReducer, 0) / filtered.length : null;
}
function getSum(pts, accessor) {
  var filtered = pts.map(accessor).filter(Number.isFinite);
  return filtered.length ? filtered.reduce(sumReducer, 0) : null;
}
function getMax(pts, accessor) {
  var filtered = pts.map(accessor).filter(Number.isFinite);
  return filtered.length ? filtered.reduce(maxReducer, -Infinity) : null;
}
function getMin(pts, accessor) {
  var filtered = pts.map(accessor).filter(Number.isFinite);
  return filtered.length ? filtered.reduce(minReducer, Infinity) : null;
}
function getValueFunc(aggregation, accessor) {
  var op = AGGREGATION_OPERATION[aggregation.toUpperCase()] || AGGREGATION_OPERATION.SUM;

  switch (op) {
    case AGGREGATION_OPERATION.MIN:
      return function (pts) {
        return getMin(pts, accessor);
      };

    case AGGREGATION_OPERATION.SUM:
      return function (pts) {
        return getSum(pts, accessor);
      };

    case AGGREGATION_OPERATION.MEAN:
      return function (pts) {
        return getMean(pts, accessor);
      };

    case AGGREGATION_OPERATION.MAX:
      return function (pts) {
        return getMax(pts, accessor);
      };

    default:
      return null;
  }
}
//# sourceMappingURL=aggregation-operation-utils.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/bin-sorter.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/bin-sorter.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BinSorter; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");





var defaultGetValue = function defaultGetValue(points) {
  return points.length;
};

var BinSorter = function () {
  function BinSorter() {
    var bins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var getValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetValue;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BinSorter);

    this.sortedBins = this.getSortedBins(bins, getValue);
    this.maxCount = this.getMaxCount();
    this.binMap = this.getBinMap();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(BinSorter, [{
    key: "getSortedBins",
    value: function getSortedBins(bins, getValue) {
      return bins.reduce(function (accu, h, i) {
        var value = getValue(h.points);

        if (value !== null && value !== undefined) {
          accu.push({
            i: Number.isFinite(h.index) ? h.index : i,
            value: value,
            counts: h.points.length
          });
        }

        return accu;
      }, []).sort(function (a, b) {
        return a.value - b.value;
      });
    }
  }, {
    key: "getValueRange",
    value: function getValueRange(_ref) {
      var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
          lower = _ref2[0],
          upper = _ref2[1];

      var len = this.sortedBins.length;

      if (!len) {
        return [0, 0];
      }

      var lowerIdx = Math.ceil(lower / 100 * (len - 1));
      var upperIdx = Math.floor(upper / 100 * (len - 1));
      return [this.sortedBins[lowerIdx].value, this.sortedBins[upperIdx].value];
    }
  }, {
    key: "getMaxCount",
    value: function getMaxCount() {
      var maxCount = 0;
      this.sortedBins.forEach(function (x) {
        return maxCount = maxCount > x.counts ? maxCount : x.counts;
      });
      return maxCount;
    }
  }, {
    key: "getBinMap",
    value: function getBinMap() {
      return this.sortedBins.reduce(function (mapper, curr) {
        return Object.assign(mapper, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, curr.i, curr));
      }, {});
    }
  }]);

  return BinSorter;
}();


//# sourceMappingURL=bin-sorter.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/color-utils.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/color-utils.js ***!
  \********************************************************************************/
/*! exports provided: defaultColorRange, colorRangeToFlatArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultColorRange", function() { return defaultColorRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorRangeToFlatArray", function() { return colorRangeToFlatArray; });
var defaultColorRange = [[255, 255, 178], [254, 217, 118], [254, 178, 76], [253, 141, 60], [240, 59, 32], [189, 0, 38]];
function colorRangeToFlatArray(colorRange, ArrayType, defaultValue) {
  var flatArray = new ArrayType(colorRange.length * 4);
  colorRange.forEach(function (color, index) {
    var flatArrayIdnex = index * 4;
    flatArray[flatArrayIdnex] = color[0];
    flatArray[flatArrayIdnex + 1] = color[1];
    flatArray[flatArrayIdnex + 2] = color[2];
    flatArray[flatArrayIdnex + 3] = Number.isFinite(color[3]) ? color[3] : defaultValue;
  });
  return flatArray;
}
//# sourceMappingURL=color-utils.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-all-fs.glsl.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-all-fs.glsl.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\n#define SHADER_NAME gpu-aggregation-all-fs\n\nprecision highp float;\n\nin vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform bool combineMaxMin;\nout vec4 fragColor;\nvoid main(void) {\n  vec4 textureColor = texture(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n  if (textureColor.a == 0.) {\n    discard;\n  }\n  fragColor.rgb = textureColor.rgb;\n  fragColor.a = combineMaxMin ? textureColor.r : textureColor.a;\n}\n");
//# sourceMappingURL=aggregate-all-fs.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-all-vs-64.glsl.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-all-vs-64.glsl.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\n#define SHADER_NAME gpu-aggregation-all-vs-64\n\nin vec2 position;\nuniform ivec2 gridSize;\nout vec2 vTextureCoord;\n\nvoid main(void) {\n  vec2 pos = vec2(-1.0, -1.0);\n  vec2 offset = 1.0 / vec2(gridSize);\n  pos = pos + offset;\n\n  gl_Position = vec4(pos, 0.0, 1.0);\n\n  int yIndex = gl_InstanceID / gridSize[0];\n  int xIndex = gl_InstanceID - (yIndex * gridSize[0]);\n\n  vec2 yIndexFP64 = vec2(float(yIndex), 0.);\n  vec2 xIndexFP64 = vec2(float(xIndex), 0.);\n  vec2 gridSizeYFP64 = vec2(gridSize[1], 0.);\n  vec2 gridSizeXFP64 = vec2(gridSize[0], 0.);\n\n  vec2 texCoordXFP64 = div_fp64(yIndexFP64, gridSizeYFP64);\n  vec2 texCoordYFP64 = div_fp64(xIndexFP64, gridSizeXFP64);\n\n  vTextureCoord = vec2(texCoordYFP64.x, texCoordXFP64.x);\n}\n");
//# sourceMappingURL=aggregate-all-vs-64.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-to-grid-fs.glsl.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-to-grid-fs.glsl.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME gpu-aggregation-to-grid-fs\n\nprecision highp float;\n\nvarying vec3 vWeights;\n\nvoid main(void) {\n  gl_FragColor = vec4(vWeights, 1.0);\n}\n");
//# sourceMappingURL=aggregate-to-grid-fs.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-to-grid-vs-64.glsl.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-to-grid-vs-64.glsl.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME gpu-aggregation-to-grid-vs-64\n\nattribute vec2 positions;\nattribute vec2 positions64xyLow;\nattribute vec3 weights;\nuniform vec2 windowSize;\nuniform vec2 cellSize;\nuniform vec2 gridSize;\nuniform vec2 uProjectionMatrixFP64[16];\nuniform bool projectPoints;\n\nvarying vec3 vWeights;\n\nvoid project_to_pixel(vec2 pos, vec2 pos64xyLow, out vec2 pixelXY64[2]) {\n\n  vec2 result64[4];\n  vec2 position64[4];\n  position64[0] = vec2(pos.x, pos64xyLow.x);\n  position64[1] = vec2(pos.y, pos64xyLow.y);\n  position64[2] = vec2(0., 0.);\n  position64[3] = vec2(1., 0.);\n  mat4_vec4_mul_fp64(uProjectionMatrixFP64, position64,\n  result64);\n\n  pixelXY64[0] = div_fp64(result64[0], result64[3]);\n  pixelXY64[1] = div_fp64(result64[1], result64[3]);\n}\n\nvoid main(void) {\n\n  vWeights = weights;\n\n  vec2 windowPos = positions;\n  vec2 windowPos64xyLow = positions64xyLow;\n  if (projectPoints) {\n    vec2 projectedXY[2];\n    project_position_fp64(windowPos, windowPos64xyLow, projectedXY);\n    windowPos.x = projectedXY[0].x;\n    windowPos.y = projectedXY[1].x;\n    windowPos64xyLow.x = projectedXY[0].y;\n    windowPos64xyLow.y = projectedXY[1].y;\n  }\n\n  vec2 pixelXY64[2];\n  project_to_pixel(windowPos, windowPos64xyLow, pixelXY64);\n  vec2 gridXY64[2];\n  gridXY64[0] = div_fp64(pixelXY64[0], vec2(cellSize.x, 0));\n  gridXY64[1] = div_fp64(pixelXY64[1], vec2(cellSize.y, 0));\n  float x = floor(gridXY64[0].x);\n  float y = floor(gridXY64[1].x);\n  vec2 pos = vec2(x, y);\n  pos = (pos * (2., 2.) / (gridSize)) - (1., 1.);\n  vec2 offset = 1.0 / gridSize;\n  pos = pos + offset;\n\n  gl_Position = vec4(pos, 0.0, 1.0);\n}\n");
//# sourceMappingURL=aggregate-to-grid-vs-64.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-to-grid-vs.glsl.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-to-grid-vs.glsl.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME gpu-aggregation-to-grid-vs\n\nattribute vec2 positions;\nattribute vec3 weights;\nuniform vec2 windowSize;\nuniform vec2 cellSize;\nuniform vec2 gridSize;\nuniform mat4 uProjectionMatrix;\nuniform bool projectPoints;\n\nvarying vec3 vWeights;\n\nvec2 project_to_pixel(vec4 pos) {\n  vec4 result =  uProjectionMatrix * pos;\n  return result.xy/result.w;\n}\n\nvoid main(void) {\n\n  vWeights = weights;\n\n  vec4 windowPos = vec4(positions, 0, 1.);\n  if (projectPoints) {\n    windowPos = project_position_to_clipspace(vec3(positions, 0), vec2(0, 0), vec3(0, 0, 0));\n  }\n\n  vec2 pos = project_to_pixel(windowPos);\n  pos = floor(pos / cellSize);\n  pos = (pos * (2., 2.) / (gridSize)) - (1., 1.);\n  vec2 offset = 1.0 / gridSize;\n  pos = pos + offset;\n\n  gl_Position = vec4(pos, 0.0, 1.0);\n}\n");
//# sourceMappingURL=aggregate-to-grid-vs.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/gpu-grid-aggregator-constants.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/gpu-grid-aggregator-constants.js ***!
  \***********************************************************************************************************************/
/*! exports provided: DEFAULT_CHANGE_FLAGS, DEFAULT_RUN_PARAMS, MAX_32_BIT_FLOAT, MIN_BLEND_EQUATION, MAX_BLEND_EQUATION, MAX_MIN_BLEND_EQUATION, EQUATION_MAP, ELEMENTCOUNT, DEFAULT_WEIGHT_PARAMS, IDENTITY_MATRIX, PIXEL_SIZE, WEIGHT_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CHANGE_FLAGS", function() { return DEFAULT_CHANGE_FLAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RUN_PARAMS", function() { return DEFAULT_RUN_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_32_BIT_FLOAT", function() { return MAX_32_BIT_FLOAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_BLEND_EQUATION", function() { return MIN_BLEND_EQUATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_BLEND_EQUATION", function() { return MAX_BLEND_EQUATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_MIN_BLEND_EQUATION", function() { return MAX_MIN_BLEND_EQUATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUATION_MAP", function() { return EQUATION_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENTCOUNT", function() { return ELEMENTCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WEIGHT_PARAMS", function() { return DEFAULT_WEIGHT_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDENTITY_MATRIX", function() { return IDENTITY_MATRIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIXEL_SIZE", function() { return PIXEL_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEIGHT_SIZE", function() { return WEIGHT_SIZE; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aggregation-operation-utils */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/aggregation-operation-utils.js");


var _EQUATION_MAP;


var DEFAULT_CHANGE_FLAGS = {
  dataChanged: true,
  viewportChanged: true,
  cellSizeChanged: true
};
var DEFAULT_RUN_PARAMS = {
  changeFlags: DEFAULT_CHANGE_FLAGS,
  projectPoints: false,
  useGPU: true,
  fp64: false,
  viewport: null,
  gridTransformMatrix: null,
  createBufferObjects: true
};
var MAX_32_BIT_FLOAT = 3.402823466e38;
var MIN_BLEND_EQUATION = [32775, 32774];
var MAX_BLEND_EQUATION = [32776, 32774];
var MAX_MIN_BLEND_EQUATION = [32776, 32775];
var EQUATION_MAP = (_EQUATION_MAP = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_EQUATION_MAP, _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_1__["AGGREGATION_OPERATION"].SUM, 32774), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_EQUATION_MAP, _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_1__["AGGREGATION_OPERATION"].MEAN, 32774), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_EQUATION_MAP, _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_1__["AGGREGATION_OPERATION"].MIN, MIN_BLEND_EQUATION), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_EQUATION_MAP, _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_1__["AGGREGATION_OPERATION"].MAX, MAX_BLEND_EQUATION), _EQUATION_MAP);
var ELEMENTCOUNT = 4;
var DEFAULT_WEIGHT_PARAMS = {
  size: 1,
  operation: _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_1__["AGGREGATION_OPERATION"].SUM,
  needMin: false,
  needMax: false,
  combineMaxMin: false
};
var IDENTITY_MATRIX = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
var PIXEL_SIZE = 4;
var WEIGHT_SIZE = 3;
//# sourceMappingURL=gpu-grid-aggregator-constants.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/gpu-grid-aggregator-utils.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/gpu-grid-aggregator-utils.js ***!
  \*******************************************************************************************************************/
/*! exports provided: getFloatTexture, getFramebuffer, getFloatArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFloatTexture", function() { return getFloatTexture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFramebuffer", function() { return getFramebuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFloatArray", function() { return getFloatArray; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/webgl/dist/esm/classes/texture-2d.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/webgl/dist/esm/classes/framebuffer.js");


function getFloatTexture(gl, opts) {
  var _parameters;

  var _opts$width = opts.width,
      width = _opts$width === void 0 ? 1 : _opts$width,
      _opts$height = opts.height,
      height = _opts$height === void 0 ? 1 : _opts$height;
  var texture = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__["default"](gl, {
    data: null,
    format: 34836,
    type: 5126,
    border: 0,
    mipmaps: false,
    parameters: (_parameters = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_parameters, 10240, 9728), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_parameters, 10241, 9728), _parameters),
    dataFormat: 6408,
    width: width,
    height: height
  });
  return texture;
}
function getFramebuffer(gl, opts) {
  var id = opts.id,
      _opts$width2 = opts.width,
      width = _opts$width2 === void 0 ? 1 : _opts$width2,
      _opts$height2 = opts.height,
      height = _opts$height2 === void 0 ? 1 : _opts$height2,
      texture = opts.texture;
  var fb = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_2__["default"](gl, {
    id: id,
    width: width,
    height: height,
    attachments: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, 36064, texture)
  });
  return fb;
}
function getFloatArray(array, size) {
  var fillValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (!array || array.length < size) {
    return new Float32Array(size).fill(fillValue);
  }

  return array;
}
//# sourceMappingURL=gpu-grid-aggregator-utils.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/gpu-grid-aggregator.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/gpu-grid-aggregator.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GPUGridAggregator; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/shadertools/dist/esm/modules/fp64/fp64.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/webgl/dist/esm/webgl-utils/webgl-checks.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/webgl/dist/esm/features/features.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/webgl/dist/esm/features/webgl-features-table.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/webgl/dist/esm/classes/buffer.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/webgl/dist/esm/classes/copy-and-blit.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/lib/model.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/lib/transform/transform.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/webgl-state-tracker/dist/esm/state-tracking/with-parameters.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/utils/log.js");
/* harmony import */ var viewport_mercator_project__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! viewport-mercator-project */ "./node_modules/viewport-mercator-project/dist/esm/web-mercator-utils.js");
/* harmony import */ var _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gpu-grid-aggregator-constants */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/gpu-grid-aggregator-constants.js");
/* harmony import */ var _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../aggregation-operation-utils */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/aggregation-operation-utils.js");
/* harmony import */ var _aggregate_to_grid_vs_glsl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./aggregate-to-grid-vs.glsl */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-to-grid-vs.glsl.js");
/* harmony import */ var _aggregate_to_grid_vs_64_glsl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./aggregate-to-grid-vs-64.glsl */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-to-grid-vs-64.glsl.js");
/* harmony import */ var _aggregate_to_grid_fs_glsl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./aggregate-to-grid-fs.glsl */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-to-grid-fs.glsl.js");
/* harmony import */ var _aggregate_all_vs_64_glsl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./aggregate-all-vs-64.glsl */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-all-vs-64.glsl.js");
/* harmony import */ var _aggregate_all_fs_glsl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./aggregate-all-fs.glsl */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/aggregate-all-fs.glsl.js");
/* harmony import */ var _transform_mean_vs_glsl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./transform-mean-vs.glsl */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/transform-mean-vs.glsl.js");
/* harmony import */ var _gpu_grid_aggregator_utils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./gpu-grid-aggregator-utils.js */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/gpu-grid-aggregator-utils.js");







var fp64ifyMatrix4 = _luma_gl_core__WEBPACK_IMPORTED_MODULE_4__["default"].fp64ifyMatrix4;









var BUFFER_NAMES = ['aggregationBuffer', 'maxMinBuffer', 'minBuffer', 'maxBuffer'];
var ARRAY_BUFFER_MAP = {
  maxData: 'maxBuffer',
  minData: 'minBuffer',
  maxMinData: 'maxMinBuffer'
};

var GPUGridAggregator = function () {
  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(GPUGridAggregator, null, [{
    key: "getAggregationData",
    value: function getAggregationData(_ref) {
      var aggregationData = _ref.aggregationData,
          maxData = _ref.maxData,
          minData = _ref.minData,
          maxMinData = _ref.maxMinData,
          pixelIndex = _ref.pixelIndex;
      var index = pixelIndex * _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["PIXEL_SIZE"];
      var results = {};

      if (aggregationData) {
        results.cellCount = aggregationData[index + 3];
        results.cellWeight = aggregationData[index];
      }

      if (maxMinData) {
        results.maxCellWieght = maxMinData[0];
        results.minCellWeight = maxMinData[3];
      } else {
        if (maxData) {
          results.maxCellWieght = maxData[0];
          results.totalCount = maxData[3];
        }

        if (minData) {
          results.minCellWeight = minData[0];
          results.totalCount = maxData[3];
        }
      }

      return results;
    }
  }, {
    key: "getCellData",
    value: function getCellData(_ref2) {
      var countsData = _ref2.countsData,
          _ref2$size = _ref2.size,
          size = _ref2$size === void 0 ? 1 : _ref2$size;
      var numCells = countsData.length / 4;
      var cellWeights = new Float32Array(numCells * size);
      var cellCounts = new Uint32Array(numCells);

      for (var i = 0; i < numCells; i++) {
        for (var sizeIndex = 0; sizeIndex < size; sizeIndex++) {
          cellWeights[i * size + sizeIndex] = countsData[i * 4 + sizeIndex];
        }

        cellCounts[i] = countsData[i * 4 + 3];
      }

      return {
        cellCounts: cellCounts,
        cellWeights: cellWeights
      };
    }
  }, {
    key: "isSupported",
    value: function isSupported(gl) {
      return Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_5__["isWebGL2"])(gl) && Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_6__["hasFeatures"])(gl, _luma_gl_core__WEBPACK_IMPORTED_MODULE_7__["FEATURES"].BLEND_EQUATION_MINMAX, _luma_gl_core__WEBPACK_IMPORTED_MODULE_7__["FEATURES"].COLOR_ATTACHMENT_RGBA32F, _luma_gl_core__WEBPACK_IMPORTED_MODULE_7__["FEATURES"].TEXTURE_FLOAT);
    }
  }]);

  function GPUGridAggregator(gl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, GPUGridAggregator);

    this.id = opts.id || 'gpu-grid-aggregator';
    this.shaderCache = opts.shaderCache || null;
    this.gl = gl;
    this.state = {
      weights: null,
      gridPositions: null,
      positionsBuffer: null,
      positions64xyLowBuffer: null,
      vertexCount: 0,
      fp64: null,
      useGPU: null,
      numCol: 0,
      numRow: 0,
      windowSize: null,
      cellSize: null,
      weightAttributes: {},
      textures: {},
      meanTextures: {},
      buffers: {},
      framebuffers: {},
      maxMinFramebuffers: {},
      minFramebuffers: {},
      maxFramebuffers: {},
      equations: {},
      resources: {},
      results: {}
    };
    this._hasGPUSupport = Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_5__["isWebGL2"])(gl) && Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_6__["hasFeatures"])(this.gl, _luma_gl_core__WEBPACK_IMPORTED_MODULE_7__["FEATURES"].BLEND_EQUATION_MINMAX, _luma_gl_core__WEBPACK_IMPORTED_MODULE_7__["FEATURES"].COLOR_ATTACHMENT_RGBA32F, _luma_gl_core__WEBPACK_IMPORTED_MODULE_7__["FEATURES"].TEXTURE_FLOAT);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(GPUGridAggregator, [{
    key: "delete",
    value: function _delete() {
      var gridAggregationModel = this.gridAggregationModel,
          allAggregationModel = this.allAggregationModel,
          meanTransform = this.meanTransform;
      var _this$state = this.state,
          positionsBuffer = _this$state.positionsBuffer,
          positions64xyLowBuffer = _this$state.positions64xyLowBuffer,
          textures = _this$state.textures,
          framebuffers = _this$state.framebuffers,
          maxMinFramebuffers = _this$state.maxMinFramebuffers,
          minFramebuffers = _this$state.minFramebuffers,
          maxFramebuffers = _this$state.maxFramebuffers,
          meanTextures = _this$state.meanTextures,
          resources = _this$state.resources;
      gridAggregationModel && gridAggregationModel.delete();
      allAggregationModel && allAggregationModel.delete();
      meanTransform && meanTransform.delete();
      positionsBuffer && positionsBuffer.delete();
      positions64xyLowBuffer && positions64xyLowBuffer.delete();
      this.deleteResources([framebuffers, textures, maxMinFramebuffers, minFramebuffers, maxFramebuffers, meanTextures, resources]);
    }
  }, {
    key: "run",
    value: function run() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.setState({
        results: {}
      });
      var aggregationParams = this.getAggregationParams(opts);
      this.updateGridSize(aggregationParams);
      var useGPU = aggregationParams.useGPU;

      if (this._hasGPUSupport && useGPU) {
        return this.runAggregationOnGPU(aggregationParams);
      }

      if (useGPU) {
        _deck_gl_core__WEBPACK_IMPORTED_MODULE_13__["default"].info('GPUGridAggregator: GPU Aggregation not supported, falling back to CPU')();
      }

      return this.runAggregationOnCPU(aggregationParams);
    }
  }, {
    key: "getData",
    value: function getData(weightId) {
      var data = {};
      var results = this.state.results;

      if (!results[weightId].aggregationData) {
        results[weightId].aggregationData = results[weightId].aggregationBuffer.getData();
      }

      data.aggregationData = results[weightId].aggregationData;

      for (var arrayName in ARRAY_BUFFER_MAP) {
        var bufferName = ARRAY_BUFFER_MAP[arrayName];

        if (results[weightId][arrayName] || results[weightId][bufferName]) {
          results[weightId][arrayName] = results[weightId][arrayName] || results[weightId][bufferName].getData();
          data[arrayName] = results[weightId][arrayName];
        }
      }

      return data;
    }
  }, {
    key: "deleteResources",
    value: function deleteResources(resources) {
      resources = Array.isArray(resources) ? resources : [resources];
      resources.forEach(function (obj) {
        for (var name in obj) {
          obj[name].delete();
        }
      });
    }
  }, {
    key: "getAggregationParams",
    value: function getAggregationParams(opts) {
      var aggregationParams = Object.assign({}, _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["DEFAULT_RUN_PARAMS"], opts);
      var useGPU = aggregationParams.useGPU,
          gridTransformMatrix = aggregationParams.gridTransformMatrix,
          viewport = aggregationParams.viewport,
          weights = aggregationParams.weights,
          projectPoints = aggregationParams.projectPoints,
          cellSize = aggregationParams.cellSize;

      if (this.state.useGPU !== useGPU) {
        aggregationParams.changeFlags = Object.assign({}, aggregationParams.changeFlags, _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["DEFAULT_CHANGE_FLAGS"]);
      }

      if (cellSize && (!this.state.cellSize || this.state.cellSize[0] !== cellSize[0] || this.state.cellSize[1] !== cellSize[1])) {
        aggregationParams.changeFlags.cellSizeChanged = true;
        this.setState({
          cellSize: cellSize
        });
      }

      this.validateProps(aggregationParams, opts);
      this.setState({
        useGPU: useGPU
      });
      aggregationParams.gridTransformMatrix = (projectPoints ? viewport.viewportMatrix : gridTransformMatrix) || _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["IDENTITY_MATRIX"];

      if (weights) {
        aggregationParams.weights = this.normalizeWeightParams(weights);
        this.setState({
          weights: aggregationParams.weights
        });
      }

      return aggregationParams;
    }
  }, {
    key: "normalizeWeightParams",
    value: function normalizeWeightParams(weights) {
      var result = {};

      for (var id in weights) {
        result[id] = Object.assign({}, _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["DEFAULT_WEIGHT_PARAMS"], weights[id]);
      }

      return result;
    }
  }, {
    key: "setState",
    value: function setState(updateObject) {
      Object.assign(this.state, updateObject);
    }
  }, {
    key: "shouldTransformToGrid",
    value: function shouldTransformToGrid(opts) {
      var projectPoints = opts.projectPoints,
          changeFlags = opts.changeFlags;

      if (!this.state.gridPositions || changeFlags.dataChanged || projectPoints && changeFlags.viewportChanged) {
          return true;
        }

      return false;
    }
  }, {
    key: "updateGridSize",
    value: function updateGridSize(opts) {
      var viewport = opts.viewport,
          cellSize = opts.cellSize;
      var width = opts.width || viewport.width;
      var height = opts.height || viewport.height;
      var numCol = Math.ceil(width / cellSize[0]);
      var numRow = Math.ceil(height / cellSize[1]);
      this.setState({
        numCol: numCol,
        numRow: numRow,
        windowSize: [width, height]
      });
    }
  }, {
    key: "validateProps",
    value: function validateProps(aggregationParams, opts) {
      var changeFlags = aggregationParams.changeFlags,
          projectPoints = aggregationParams.projectPoints,
          gridTransformMatrix = aggregationParams.gridTransformMatrix;
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_13__["default"].assert(changeFlags.dataChanged || changeFlags.viewportChanged || changeFlags.cellSizeChanged);
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_13__["default"].assert(!changeFlags.dataChanged || opts.positions && opts.weights && (!opts.projectPositions || opts.viewport) && opts.cellSize);
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_13__["default"].assert(!changeFlags.cellSizeChanged || opts.cellSize);
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_13__["default"].assert(!(changeFlags.viewportChanged && projectPoints) || opts.viewport);

      if (projectPoints && gridTransformMatrix) {
        _deck_gl_core__WEBPACK_IMPORTED_MODULE_13__["default"].warn('projectPoints is true, gridTransformMatrix is ignored')();
      }
    }
  }, {
    key: "calculateAggregationData",
    value: function calculateAggregationData(opts) {
      var weights = opts.weights,
          results = opts.results,
          cellIndex = opts.cellIndex,
          posIndex = opts.posIndex;

      for (var id in weights) {
        var _weights$id = weights[id],
            values = _weights$id.values,
            size = _weights$id.size,
            operation = _weights$id.operation;
        var aggregationData = results[id].aggregationData;

        for (var sizeIndex = 0; sizeIndex < size; sizeIndex++) {
          var cellElementIndex = cellIndex + sizeIndex;
          var weightComponent = values[posIndex * _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["WEIGHT_SIZE"] + sizeIndex];

          if (aggregationData[cellIndex + 3] === 0) {
            aggregationData[cellElementIndex] = weightComponent;
          } else {
            switch (operation) {
              case _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_16__["AGGREGATION_OPERATION"].SUM:
              case _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_16__["AGGREGATION_OPERATION"].MEAN:
                aggregationData[cellElementIndex] += weightComponent;
                break;

              case _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_16__["AGGREGATION_OPERATION"].MIN:
                aggregationData[cellElementIndex] = Math.min(aggregationData[cellElementIndex], weightComponent);
                break;

              case _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_16__["AGGREGATION_OPERATION"].MAX:
                aggregationData[cellElementIndex] = Math.max(aggregationData[cellElementIndex], weightComponent);
                break;

              default:
                _deck_gl_core__WEBPACK_IMPORTED_MODULE_13__["default"].assert(false);
                break;
            }
          }
        }

        aggregationData[cellIndex + 3]++;
      }
    }
  }, {
    key: "calculateMeanMaxMinData",
    value: function calculateMeanMaxMinData(opts) {
      var validCellIndices = opts.validCellIndices,
          results = opts.results,
          weights = opts.weights;
      validCellIndices.forEach(function (cellIndex) {
        for (var id in results) {
          var _weights$id2 = weights[id],
              size = _weights$id2.size,
              needMin = _weights$id2.needMin,
              needMax = _weights$id2.needMax,
              operation = _weights$id2.operation;
          var _results$id = results[id],
              aggregationData = _results$id.aggregationData,
              minData = _results$id.minData,
              maxData = _results$id.maxData,
              maxMinData = _results$id.maxMinData;
          var calculateMinMax = needMin || needMax;
          var calculateMean = operation === _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_16__["AGGREGATION_OPERATION"].MEAN;
          var combineMaxMin = needMin && needMax && weights[id].combineMaxMin;
          var count = aggregationData[cellIndex + _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["ELEMENTCOUNT"] - 1];

          for (var sizeIndex = 0; sizeIndex < size && (calculateMinMax || calculateMean); sizeIndex++) {
            var cellElementIndex = cellIndex + sizeIndex;
            var weight = aggregationData[cellElementIndex];

            if (calculateMean) {
              aggregationData[cellElementIndex] /= count;
              weight = aggregationData[cellElementIndex];
            }

            if (combineMaxMin) {
              maxMinData[sizeIndex] = Math.max(maxMinData[sizeIndex], weight);
            } else {
              if (needMin) {
                minData[sizeIndex] = Math.min(minData[sizeIndex], weight);
              }

              if (needMax) {
                maxData[sizeIndex] = Math.max(maxData[sizeIndex], weight);
              }
            }
          }

          if (combineMaxMin) {
            maxMinData[_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["ELEMENTCOUNT"] - 1] = Math.min(maxMinData[_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["ELEMENTCOUNT"] - 1], aggregationData[cellIndex + 0]);
          } else {
            if (needMin) {
              minData[_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["ELEMENTCOUNT"] - 1] += count;
            }

            if (needMax) {
              maxData[_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["ELEMENTCOUNT"] - 1] += count;
            }
          }
        }
      });
    }
  }, {
    key: "initCPUResults",
    value: function initCPUResults(opts) {
      var weights = opts.weights || this.state.weights;
      var _this$state2 = this.state,
          numCol = _this$state2.numCol,
          numRow = _this$state2.numRow;
      var results = {};

      for (var id in weights) {
        var _weights$id3 = weights[id],
            aggregationData = _weights$id3.aggregationData,
            minData = _weights$id3.minData,
            maxData = _weights$id3.maxData,
            maxMinData = _weights$id3.maxMinData;
        var _weights$id4 = weights[id],
            needMin = _weights$id4.needMin,
            needMax = _weights$id4.needMax;
        var combineMaxMin = needMin && needMax && weights[id].combineMaxMin;
        var aggregationSize = numCol * numRow * _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["ELEMENTCOUNT"];
        aggregationData = Object(_gpu_grid_aggregator_utils_js__WEBPACK_IMPORTED_MODULE_23__["getFloatArray"])(aggregationData, aggregationSize);

        if (combineMaxMin) {
          maxMinData = Object(_gpu_grid_aggregator_utils_js__WEBPACK_IMPORTED_MODULE_23__["getFloatArray"])(maxMinData, _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["ELEMENTCOUNT"]);
          maxMinData.fill(-Infinity, 0, _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["ELEMENTCOUNT"] - 1);
          maxMinData[_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["ELEMENTCOUNT"] - 1] = Infinity;
        } else {
          if (needMin) {
            minData = Object(_gpu_grid_aggregator_utils_js__WEBPACK_IMPORTED_MODULE_23__["getFloatArray"])(minData, _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["ELEMENTCOUNT"], Infinity);
            minData[_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["ELEMENTCOUNT"] - 1] = 0;
          }

          if (needMax) {
            maxData = Object(_gpu_grid_aggregator_utils_js__WEBPACK_IMPORTED_MODULE_23__["getFloatArray"])(maxData, _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["ELEMENTCOUNT"], -Infinity);
            maxData[_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["ELEMENTCOUNT"] - 1] = 0;
          }
        }

        results[id] = Object.assign({}, weights[id], {
          aggregationData: aggregationData,
          minData: minData,
          maxData: maxData,
          maxMinData: maxMinData
        });
      }

      return results;
    }
  }, {
    key: "runAggregationOnCPU",
    value: function runAggregationOnCPU(opts) {
      var positions = opts.positions,
          cellSize = opts.cellSize,
          gridTransformMatrix = opts.gridTransformMatrix,
          viewport = opts.viewport,
          projectPoints = opts.projectPoints;
      var weights = opts.weights;
      var _this$state3 = this.state,
          numCol = _this$state3.numCol,
          numRow = _this$state3.numRow;
      var results = this.initCPUResults(opts);
      var gridTransformRequired = this.shouldTransformToGrid(opts);
      var gridPositions;
      var pos = [0, 0, 0];
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_13__["default"].assert(gridTransformRequired || opts.changeFlags.cellSizeChanged);
      var posCount;

      if (gridTransformRequired) {
        posCount = positions.length / 2;
        gridPositions = new Float64Array(positions.length);
        this.setState({
          gridPositions: gridPositions
        });
      } else {
        gridPositions = this.state.gridPositions;
        weights = this.state.weights;
        posCount = gridPositions.length / 2;
      }

      var validCellIndices = new Set();

      for (var posIndex = 0; posIndex < posCount; posIndex++) {
        var x = void 0;
        var y = void 0;

        if (gridTransformRequired) {
          pos[0] = positions[posIndex * 2];
          pos[1] = positions[posIndex * 2 + 1];

          if (projectPoints) {
            var _viewport$project = viewport.project(pos);

            var _viewport$project2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_viewport$project, 2);

            x = _viewport$project2[0];
            y = _viewport$project2[1];
          } else {
            var _worldToPixels = Object(viewport_mercator_project__WEBPACK_IMPORTED_MODULE_14__["worldToPixels"])(pos, gridTransformMatrix);

            var _worldToPixels2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_worldToPixels, 2);

            x = _worldToPixels2[0];
            y = _worldToPixels2[1];
          }

          gridPositions[posIndex * 2] = x;
          gridPositions[posIndex * 2 + 1] = y;
        } else {
          x = gridPositions[posIndex * 2];
          y = gridPositions[posIndex * 2 + 1];
        }

        var colId = Math.floor(x / cellSize[0]);
        var rowId = Math.floor(y / cellSize[1]);

        if (colId >= 0 && colId < numCol && rowId >= 0 && rowId < numRow) {
          var cellIndex = (colId + rowId * numCol) * _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["ELEMENTCOUNT"];
          validCellIndices.add(cellIndex);
          this.calculateAggregationData({
            weights: weights,
            results: results,
            cellIndex: cellIndex,
            posIndex: posIndex
          });
        }
      }

      this.calculateMeanMaxMinData({
        validCellIndices: validCellIndices,
        results: results,
        weights: weights
      });
      this.updateAggregationBuffers(opts, results);
      this.setState({
        results: results
      });
      return results;
    }
  }, {
    key: "updateCPUResultBuffer",
    value: function updateCPUResultBuffer(_ref3) {
      var gl = _ref3.gl,
          bufferName = _ref3.bufferName,
          id = _ref3.id,
          data = _ref3.data,
          result = _ref3.result;
      var resources = this.state.resources;
      var resourceName = "cpu-result-".concat(id, "-").concat(bufferName);
      result[bufferName] = result[bufferName] || resources[resourceName];

      if (result[bufferName]) {
        result[bufferName].setData({
          data: data
        });
      } else {
        resources[resourceName] = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__["default"](gl, data);
        result[bufferName] = resources[resourceName];
      }
    }
  }, {
    key: "updateAggregationBuffers",
    value: function updateAggregationBuffers(opts, results) {
      if (!opts.createBufferObjects) {
        return;
      }

      var weights = opts.weights || this.state.weights;

      for (var id in results) {
        var _results$id2 = results[id],
            aggregationData = _results$id2.aggregationData,
            minData = _results$id2.minData,
            maxData = _results$id2.maxData,
            maxMinData = _results$id2.maxMinData;
        var _weights$id5 = weights[id],
            needMin = _weights$id5.needMin,
            needMax = _weights$id5.needMax;
        var combineMaxMin = needMin && needMax && weights[id].combineMaxMin;
        this.updateCPUResultBuffer({
          gl: this.gl,
          bufferName: 'aggregationBuffer',
          id: id,
          data: aggregationData,
          result: results[id]
        });

        if (combineMaxMin) {
          this.updateCPUResultBuffer({
            gl: this.gl,
            bufferName: 'maxMinBuffer',
            id: id,
            data: maxMinData,
            result: results[id]
          });
        } else {
          if (needMin) {
            this.updateCPUResultBuffer({
              gl: this.gl,
              bufferName: 'minBuffer',
              id: id,
              data: minData,
              result: results[id]
            });
          }

          if (needMax) {
            this.updateCPUResultBuffer({
              gl: this.gl,
              bufferName: 'maxBuffer',
              id: id,
              data: maxData,
              result: results[id]
            });
          }
        }
      }
    }
  }, {
    key: "getAggregateData",
    value: function getAggregateData(opts) {
      var results = {};
      var _this$state4 = this.state,
          textures = _this$state4.textures,
          framebuffers = _this$state4.framebuffers,
          maxMinFramebuffers = _this$state4.maxMinFramebuffers,
          minFramebuffers = _this$state4.minFramebuffers,
          maxFramebuffers = _this$state4.maxFramebuffers,
          weights = _this$state4.weights;

      for (var id in weights) {
        results[id] = {};
        var _weights$id6 = weights[id],
            needMin = _weights$id6.needMin,
            needMax = _weights$id6.needMax,
            combineMaxMin = _weights$id6.combineMaxMin;
        results[id].aggregationTexture = textures[id];
        results[id].aggregationBuffer = Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_9__["readPixelsToBuffer"])(framebuffers[id], {
          target: weights[id].aggregationBuffer,
          sourceType: 5126
        });

        if (needMin && needMax && combineMaxMin) {
          results[id].maxMinBuffer = Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_9__["readPixelsToBuffer"])(maxMinFramebuffers[id], {
            target: weights[id].maxMinBuffer,
            sourceType: 5126
          });
        } else {
          if (needMin) {
            results[id].minBuffer = Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_9__["readPixelsToBuffer"])(minFramebuffers[id], {
              target: weights[id].minBuffer,
              sourceType: 5126
            });
          }

          if (needMax) {
            results[id].maxBuffer = Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_9__["readPixelsToBuffer"])(maxFramebuffers[id], {
              target: weights[id].maxBuffer,
              sourceType: 5126
            });
          }
        }
      }

      this.trackGPUResultBuffers(results, weights);
      return results;
    }
  }, {
    key: "getAggregationModel",
    value: function getAggregationModel() {
      var fp64 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var gl = this.gl,
          shaderCache = this.shaderCache;
      return new _luma_gl_core__WEBPACK_IMPORTED_MODULE_10__["default"](gl, {
        id: 'Gird-Aggregation-Model',
        vs: fp64 ? _aggregate_to_grid_vs_64_glsl__WEBPACK_IMPORTED_MODULE_18__["default"] : _aggregate_to_grid_vs_glsl__WEBPACK_IMPORTED_MODULE_17__["default"],
        fs: _aggregate_to_grid_fs_glsl__WEBPACK_IMPORTED_MODULE_19__["default"],
        modules: fp64 ? ['fp64', 'project64'] : ['project32'],
        shaderCache: shaderCache,
        vertexCount: 0,
        drawMode: 0
      });
    }
  }, {
    key: "getAllAggregationModel",
    value: function getAllAggregationModel() {
      var gl = this.gl,
          shaderCache = this.shaderCache;
      var _this$state5 = this.state,
          numCol = _this$state5.numCol,
          numRow = _this$state5.numRow;
      return new _luma_gl_core__WEBPACK_IMPORTED_MODULE_10__["default"](gl, {
        id: 'All-Aggregation-Model',
        vs: _aggregate_all_vs_64_glsl__WEBPACK_IMPORTED_MODULE_20__["default"],
        fs: _aggregate_all_fs_glsl__WEBPACK_IMPORTED_MODULE_21__["default"],
        modules: ['fp64'],
        shaderCache: shaderCache,
        vertexCount: 1,
        drawMode: 0,
        isInstanced: true,
        instanceCount: numCol * numRow,
        attributes: {
          position: [0, 0]
        }
      });
    }
  }, {
    key: "getMeanTransform",
    value: function getMeanTransform(opts) {
      if (this.meanTransform) {
        this.meanTransform.update(opts);
      } else {
        this.meanTransform = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_11__["default"](this.gl, Object.assign({}, {
          vs: _transform_mean_vs_glsl__WEBPACK_IMPORTED_MODULE_22__["default"],
          _targetTextureVarying: 'meanValues'
        }, opts));
      }

      return this.meanTransform;
    }
  }, {
    key: "renderAggregateData",
    value: function renderAggregateData(opts) {
      var cellSize = opts.cellSize,
          viewport = opts.viewport,
          gridTransformMatrix = opts.gridTransformMatrix,
          projectPoints = opts.projectPoints;
      var _this$state6 = this.state,
          numCol = _this$state6.numCol,
          numRow = _this$state6.numRow,
          windowSize = _this$state6.windowSize,
          maxMinFramebuffers = _this$state6.maxMinFramebuffers,
          minFramebuffers = _this$state6.minFramebuffers,
          maxFramebuffers = _this$state6.maxFramebuffers,
          weights = _this$state6.weights;
      var uProjectionMatrixFP64 = fp64ifyMatrix4(gridTransformMatrix);
      var gridSize = [numCol, numRow];
      var parameters = {
        blend: true,
        depthTest: false,
        blendFunc: [1, 1]
      };
      var moduleSettings = {
        viewport: viewport
      };
      var uniforms = {
        windowSize: windowSize,
        cellSize: cellSize,
        gridSize: gridSize,
        uProjectionMatrix: gridTransformMatrix,
        uProjectionMatrixFP64: uProjectionMatrixFP64,
        projectPoints: projectPoints
      };

      for (var id in weights) {
        var _weights$id7 = weights[id],
            needMin = _weights$id7.needMin,
            needMax = _weights$id7.needMax;
        var combineMaxMin = needMin && needMax && weights[id].combineMaxMin;
        this.renderToWeightsTexture({
          id: id,
          parameters: parameters,
          moduleSettings: moduleSettings,
          uniforms: uniforms,
          gridSize: gridSize
        });

        if (combineMaxMin) {
          this.renderToMaxMinTexture({
            id: id,
            parameters: Object.assign({}, parameters, {
              blendEquation: _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["MAX_MIN_BLEND_EQUATION"]
            }),
            gridSize: gridSize,
            minOrMaxFb: maxMinFramebuffers[id],
            clearParams: {
              clearColor: [0, 0, 0, _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["MAX_32_BIT_FLOAT"]]
            },
            combineMaxMin: combineMaxMin
          });
        } else {
          if (needMin) {
            this.renderToMaxMinTexture({
              id: id,
              parameters: Object.assign({}, parameters, {
                blendEquation: _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["MIN_BLEND_EQUATION"]
              }),
              gridSize: gridSize,
              minOrMaxFb: minFramebuffers[id],
              clearParams: {
                clearColor: [_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["MAX_32_BIT_FLOAT"], _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["MAX_32_BIT_FLOAT"], _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["MAX_32_BIT_FLOAT"], 0]
              },
              combineMaxMin: combineMaxMin
            });
          }

          if (needMax) {
            this.renderToMaxMinTexture({
              id: id,
              parameters: Object.assign({}, parameters, {
                blendEquation: _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["MAX_BLEND_EQUATION"]
              }),
              gridSize: gridSize,
              minOrMaxFb: maxFramebuffers[id],
              combineMaxMin: combineMaxMin
            });
          }
        }
      }
    }
  }, {
    key: "renderToMaxMinTexture",
    value: function renderToMaxMinTexture(opts) {
      var id = opts.id,
          parameters = opts.parameters,
          gridSize = opts.gridSize,
          minOrMaxFb = opts.minOrMaxFb,
          combineMaxMin = opts.combineMaxMin,
          _opts$clearParams = opts.clearParams,
          clearParams = _opts$clearParams === void 0 ? {} : _opts$clearParams;
      var framebuffers = this.state.framebuffers;
      var gl = this.gl,
          allAggregationModel = this.allAggregationModel;
      minOrMaxFb.bind();
      gl.viewport(0, 0, gridSize[0], gridSize[1]);
      Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_12__["withParameters"])(gl, clearParams, function () {
        gl.clear(16384);
      });
      allAggregationModel.draw({
        parameters: parameters,
        uniforms: {
          uSampler: framebuffers[id].texture,
          gridSize: gridSize,
          combineMaxMin: combineMaxMin
        }
      });
      minOrMaxFb.unbind();
    }
  }, {
    key: "renderToWeightsTexture",
    value: function renderToWeightsTexture(opts) {
      var id = opts.id,
          parameters = opts.parameters,
          moduleSettings = opts.moduleSettings,
          uniforms = opts.uniforms,
          gridSize = opts.gridSize;
      var _this$state7 = this.state,
          framebuffers = _this$state7.framebuffers,
          equations = _this$state7.equations,
          weightAttributes = _this$state7.weightAttributes,
          weights = _this$state7.weights;
      var gl = this.gl,
          gridAggregationModel = this.gridAggregationModel;
      var operation = weights[id].operation;
      framebuffers[id].bind();
      gl.viewport(0, 0, gridSize[0], gridSize[1]);
      var clearColor = operation === _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_16__["AGGREGATION_OPERATION"].MIN ? [_gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["MAX_32_BIT_FLOAT"], _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["MAX_32_BIT_FLOAT"], _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["MAX_32_BIT_FLOAT"], 0] : [0, 0, 0, 0];
      Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_12__["withParameters"])(gl, {
        clearColor: clearColor
      }, function () {
        gl.clear(16384);
      });
      var attributes = {
        weights: weightAttributes[id]
      };
      gridAggregationModel.draw({
        parameters: Object.assign({}, parameters, {
          blendEquation: equations[id]
        }),
        moduleSettings: moduleSettings,
        uniforms: uniforms,
        attributes: attributes
      });
      framebuffers[id].unbind();

      if (operation === _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_16__["AGGREGATION_OPERATION"].MEAN) {
        var _this$state8 = this.state,
            meanTextures = _this$state8.meanTextures,
            textures = _this$state8.textures;
        var transformOptions = {
          _sourceTextures: {
            aggregationValues: meanTextures[id]
          },
          _targetTexture: textures[id],
          elementCount: textures[id].width * textures[id].height
        };
        var meanTransform = this.getMeanTransform(transformOptions);
        meanTransform.run({
          parameters: {
            blend: false,
            depthTest: false
          }
        });
        framebuffers[id].attach(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, 36064, textures[id]));
      }
    }
  }, {
    key: "runAggregationOnGPU",
    value: function runAggregationOnGPU(opts) {
      this.updateModels(opts);
      this.setupFramebuffers(opts);
      this.renderAggregateData(opts);
      var results = this.getAggregateData(opts);
      this.setState({
        results: results
      });
      return results;
    }
  }, {
    key: "setupFramebuffers",
    value: function setupFramebuffers(opts) {
      var _this$state9 = this.state,
          numCol = _this$state9.numCol,
          numRow = _this$state9.numRow,
          textures = _this$state9.textures,
          framebuffers = _this$state9.framebuffers,
          maxMinFramebuffers = _this$state9.maxMinFramebuffers,
          minFramebuffers = _this$state9.minFramebuffers,
          maxFramebuffers = _this$state9.maxFramebuffers,
          resources = _this$state9.resources,
          meanTextures = _this$state9.meanTextures,
          equations = _this$state9.equations,
          weights = _this$state9.weights;
      var framebufferSize = {
        width: numCol,
        height: numRow
      };

      for (var id in weights) {
        var _weights$id8 = weights[id],
            needMin = _weights$id8.needMin,
            needMax = _weights$id8.needMax,
            combineMaxMin = _weights$id8.combineMaxMin,
            operation = _weights$id8.operation;
        textures[id] = weights[id].aggregationTexture || textures[id] || Object(_gpu_grid_aggregator_utils_js__WEBPACK_IMPORTED_MODULE_23__["getFloatTexture"])(this.gl, {
          id: "".concat(id, "-texture"),
          width: numCol,
          height: numRow
        });
        textures[id].resize(framebufferSize);
        var texture = textures[id];

        if (operation === _aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_16__["AGGREGATION_OPERATION"].MEAN) {
          meanTextures[id] = meanTextures[id] || Object(_gpu_grid_aggregator_utils_js__WEBPACK_IMPORTED_MODULE_23__["getFloatTexture"])(this.gl, {
            id: "".concat(id, "-mean-texture"),
            width: numCol,
            height: numRow
          });
          meanTextures[id].resize(framebufferSize);
          texture = meanTextures[id];
        }

        if (framebuffers[id]) {
          framebuffers[id].attach(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, 36064, texture));
        } else {
          framebuffers[id] = Object(_gpu_grid_aggregator_utils_js__WEBPACK_IMPORTED_MODULE_23__["getFramebuffer"])(this.gl, {
            id: "".concat(id, "-fb"),
            width: numCol,
            height: numRow,
            texture: texture
          });
        }

        framebuffers[id].resize(framebufferSize);
        equations[id] = _gpu_grid_aggregator_constants__WEBPACK_IMPORTED_MODULE_15__["EQUATION_MAP"][operation];

        if (needMin || needMax) {
          if (needMin && needMax && combineMaxMin) {
            if (!maxMinFramebuffers[id]) {
              resources["".concat(id, "-maxMin")] = Object(_gpu_grid_aggregator_utils_js__WEBPACK_IMPORTED_MODULE_23__["getFloatTexture"])(this.gl, {
                id: "".concat(id, "-maxMinTex")
              });
              maxMinFramebuffers[id] = Object(_gpu_grid_aggregator_utils_js__WEBPACK_IMPORTED_MODULE_23__["getFramebuffer"])(this.gl, {
                id: "".concat(id, "-maxMinFb"),
                texture: resources["".concat(id, "-maxMin")]
              });
            }
          } else {
            if (needMin) {
              if (!minFramebuffers[id]) {
                resources["".concat(id, "-min")] = Object(_gpu_grid_aggregator_utils_js__WEBPACK_IMPORTED_MODULE_23__["getFloatTexture"])(this.gl, {
                  id: "".concat(id, "-minTex")
                });
                minFramebuffers[id] = Object(_gpu_grid_aggregator_utils_js__WEBPACK_IMPORTED_MODULE_23__["getFramebuffer"])(this.gl, {
                  id: "".concat(id, "-minFb"),
                  texture: resources["".concat(id, "-min")]
                });
              }
            }

            if (needMax) {
              if (!maxFramebuffers[id]) {
                resources["".concat(id, "-max")] = Object(_gpu_grid_aggregator_utils_js__WEBPACK_IMPORTED_MODULE_23__["getFloatTexture"])(this.gl, {
                  id: "".concat(id, "-maxTex")
                });
                maxFramebuffers[id] = Object(_gpu_grid_aggregator_utils_js__WEBPACK_IMPORTED_MODULE_23__["getFramebuffer"])(this.gl, {
                  id: "".concat(id, "-maxFb"),
                  texture: resources["".concat(id, "-max")]
                });
              }
            }
          }
        }
      }
    }
  }, {
    key: "setupModels",
    value: function setupModels() {
      var fp64 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.gridAggregationModel) {
        this.gridAggregationModel.delete();
      }

      this.gridAggregationModel = this.getAggregationModel(fp64);

      if (!this.allAggregationModel) {
        this.allAggregationModel = this.getAllAggregationModel();
      }
    }
  }, {
    key: "setupWeightAttributes",
    value: function setupWeightAttributes(opts) {
      var _this$state10 = this.state,
          weightAttributes = _this$state10.weightAttributes,
          vertexCount = _this$state10.vertexCount,
          weights = _this$state10.weights,
          resources = _this$state10.resources;

      for (var id in weights) {
        var values = weights[id].values;

        if (Array.isArray(values) || values.constructor === Float32Array) {
          _deck_gl_core__WEBPACK_IMPORTED_MODULE_13__["default"].assert(values.length / 3 === vertexCount);
          var typedArray = Array.isArray(values) ? new Float32Array(values) : values;

          if (weightAttributes[id] instanceof _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__["default"]) {
            weightAttributes[id].setData(typedArray);
          } else {
            resources["".concat(id, "-buffer")] = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__["default"](this.gl, typedArray);
            weightAttributes[id] = resources["".concat(id, "-buffer")];
          }
        } else {
          _deck_gl_core__WEBPACK_IMPORTED_MODULE_13__["default"].assert(values instanceof _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__["default"]);
          weightAttributes[id] = values;
        }
      }
    }
  }, {
    key: "trackGPUResultBuffers",
    value: function trackGPUResultBuffers(results, weights) {
      var resources = this.state.resources;

      for (var id in results) {
        if (results[id]) {
          for (var _i = 0; _i < BUFFER_NAMES.length; _i++) {
            var bufferName = BUFFER_NAMES[_i];

            if (results[id][bufferName] && weights[id][bufferName] !== results[id][bufferName]) {
              var name = "gpu-result-".concat(id, "-").concat(bufferName);

              if (resources[name]) {
                resources[name].delete();
              }

              resources[name] = results[id][bufferName];
            }
          }
        }
      }
    }
  }, {
    key: "updateModels",
    value: function updateModels(opts) {
      var gl = this.gl;
      var positions = opts.positions,
          positions64xyLow = opts.positions64xyLow,
          changeFlags = opts.changeFlags;
      var _this$state11 = this.state,
          numCol = _this$state11.numCol,
          numRow = _this$state11.numRow;
      var aggregationModelAttributes = {};
      var modelDirty = false;

      if (opts.fp64 !== this.state.fp64) {
        this.setupModels(opts.fp64);
        this.setState({
          fp64: opts.fp64
        });
        modelDirty = true;
      }

      if (changeFlags.dataChanged || !this.state.positionsBuffer) {
        var _this$state12 = this.state,
            positionsBuffer = _this$state12.positionsBuffer,
            positions64xyLowBuffer = _this$state12.positions64xyLowBuffer;

        if (positionsBuffer) {
          positionsBuffer.delete();
        }

        if (positions64xyLowBuffer) {
          positions64xyLowBuffer.delete();
        }

        var vertexCount = positions.length / 2;
        positionsBuffer = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__["default"](gl, new Float32Array(positions));
        positions64xyLowBuffer = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__["default"](gl, {
          data: new Float32Array(positions64xyLow),
          accessor: {
            size: 2
          }
        });
        this.setState({
          positionsBuffer: positionsBuffer,
          positions64xyLowBuffer: positions64xyLowBuffer,
          vertexCount: vertexCount
        });
        this.setupWeightAttributes(opts);
        modelDirty = true;
      }

      if (modelDirty) {
        var _this$state13 = this.state,
            _vertexCount = _this$state13.vertexCount,
            _positionsBuffer = _this$state13.positionsBuffer,
            _positions64xyLowBuffer = _this$state13.positions64xyLowBuffer;
        aggregationModelAttributes.positions = _positionsBuffer;

        if (opts.fp64) {
          aggregationModelAttributes.positions64xyLow = _positions64xyLowBuffer;
        }

        this.gridAggregationModel.setVertexCount(_vertexCount);
        this.gridAggregationModel.setAttributes(aggregationModelAttributes);
      }

      if (changeFlags.cellSizeChanged || changeFlags.viewportChanged) {
        this.allAggregationModel.setInstanceCount(numCol * numRow);
      }
    }
  }]);

  return GPUGridAggregator;
}();


//# sourceMappingURL=gpu-grid-aggregator.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/grid-aggregation-utils.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/grid-aggregation-utils.js ***!
  \****************************************************************************************************************/
/*! exports provided: pointToDensityGridData, alignToCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointToDensityGridData", function() { return pointToDensityGridData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignToCell", function() { return alignToCell; });
/* harmony import */ var math_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! math.gl */ "./node_modules/math.gl/dist/esm/matrix4.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/shadertools/dist/esm/modules/fp64/fp64.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/index.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/lib/constants.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/utils/log.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/utils/iterable-utils.js");



var count = _deck_gl_core__WEBPACK_IMPORTED_MODULE_2__["experimental"].count;
var fp64LowPart = _luma_gl_core__WEBPACK_IMPORTED_MODULE_1__["default"].fp64LowPart;
var R_EARTH = 6378000;

function toFinite(n) {
  return Number.isFinite(n) ? n : 0;
}

function pointToDensityGridData(_ref) {
  var data = _ref.data,
      getPosition = _ref.getPosition,
      cellSizeMeters = _ref.cellSizeMeters,
      gpuGridAggregator = _ref.gpuGridAggregator,
      gpuAggregation = _ref.gpuAggregation,
      aggregationFlags = _ref.aggregationFlags,
      weightParams = _ref.weightParams,
      _ref$fp = _ref.fp64,
      fp64 = _ref$fp === void 0 ? false : _ref$fp,
      _ref$coordinateSystem = _ref.coordinateSystem,
      coordinateSystem = _ref$coordinateSystem === void 0 ? _deck_gl_core__WEBPACK_IMPORTED_MODULE_3__["COORDINATE_SYSTEM"].LNGLAT : _ref$coordinateSystem,
      _ref$viewport = _ref.viewport,
      viewport = _ref$viewport === void 0 ? null : _ref$viewport,
      _ref$boundingBox = _ref.boundingBox,
      boundingBox = _ref$boundingBox === void 0 ? null : _ref$boundingBox;
  var gridData = {};

  if (aggregationFlags.dataChanged) {
    gridData = parseGridData(data, getPosition, weightParams);
    boundingBox = gridData.boundingBox;
  }

  var cellSize = [cellSizeMeters, cellSizeMeters];
  var worldOrigin = [0, 0];
  _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__["default"].assert(coordinateSystem === _deck_gl_core__WEBPACK_IMPORTED_MODULE_3__["COORDINATE_SYSTEM"].LNGLAT || coordinateSystem === _deck_gl_core__WEBPACK_IMPORTED_MODULE_3__["COORDINATE_SYSTEM"].IDENTITY);

  switch (coordinateSystem) {
    case _deck_gl_core__WEBPACK_IMPORTED_MODULE_3__["COORDINATE_SYSTEM"].LNGLAT:
    case _deck_gl_core__WEBPACK_IMPORTED_MODULE_3__["COORDINATE_SYSTEM"].LNGLAT_DEPRECATED:
      var gridOffset = getGridOffset(boundingBox, cellSizeMeters);
      cellSize = [gridOffset.xOffset, gridOffset.yOffset];
      worldOrigin = [-180, -90];
      break;

    case _deck_gl_core__WEBPACK_IMPORTED_MODULE_3__["COORDINATE_SYSTEM"].IDENTITY:
      var width = viewport.width,
          height = viewport.height;
      worldOrigin = [-width / 2, -height / 2];
      break;

    default:
      _deck_gl_core__WEBPACK_IMPORTED_MODULE_4__["default"].assert(false);
  }

  var opts = getGPUAggregationParams({
    boundingBox: boundingBox,
    cellSize: cellSize,
    worldOrigin: worldOrigin
  });
  var aggregatedData = gpuGridAggregator.run({
    positions: gridData.positions,
    positions64xyLow: gridData.positions64xyLow,
    weights: gridData.weights,
    cellSize: cellSize,
    width: opts.width,
    height: opts.height,
    gridTransformMatrix: opts.gridTransformMatrix,
    useGPU: gpuAggregation,
    changeFlags: aggregationFlags,
    fp64: fp64
  });
  return {
    weights: aggregatedData,
    gridSize: opts.gridSize,
    gridOrigin: opts.gridOrigin,
    cellSize: cellSize,
    boundingBox: boundingBox
  };
}

function parseGridData(data, getPosition, weightParams) {
  var pointCount = count(data);
  var positions = new Float64Array(pointCount * 2);
  var positions64xyLow = new Float32Array(pointCount * 2);
  var yMin = Infinity;
  var yMax = -Infinity;
  var xMin = Infinity;
  var xMax = -Infinity;
  var y;
  var x;
  var weights = {};

  for (var name in weightParams) {
    weights[name] = Object.assign({}, weightParams[name], {
      values: new Float32Array(pointCount * 3)
    });
  }

  var _createIterable = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_5__["createIterable"])(data),
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
      var index = objectInfo.index;
      x = position[0];
      y = position[1];
      positions[index * 2] = x;
      positions[index * 2 + 1] = y;
      positions64xyLow[index * 2] = fp64LowPart(x);
      positions64xyLow[index * 2 + 1] = fp64LowPart(y);

      for (var _name in weightParams) {
        var weight = weightParams[_name].getWeight(object);

        if (Array.isArray(weight)) {
          weights[_name].values[index * 3] = weight[0];
          weights[_name].values[index * 3 + 1] = weight[1];
          weights[_name].values[index * 3 + 2] = weight[2];
        } else {
          weights[_name].values[index * 3] = weight;
        }
      }

      if (Number.isFinite(y) && Number.isFinite(x)) {
        yMin = y < yMin ? y : yMin;
        yMax = y > yMax ? y : yMax;
        xMin = x < xMin ? x : xMin;
        xMax = x > xMax ? x : xMax;
      }
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

  var boundingBox = {
    xMin: toFinite(xMin),
    xMax: toFinite(xMax),
    yMin: toFinite(yMin),
    yMax: toFinite(yMax)
  };
  return {
    positions: positions,
    positions64xyLow: positions64xyLow,
    weights: weights,
    boundingBox: boundingBox
  };
}

function getGridOffset(boundingBox, cellSize) {
  var yMin = boundingBox.yMin,
      yMax = boundingBox.yMax;
  var latMin = yMin;
  var latMax = yMax;
  var centerLat = (latMin + latMax) / 2;
  return calculateGridLatLonOffset(cellSize, centerLat);
}

function calculateGridLatLonOffset(cellSize, latitude) {
  var yOffset = calculateLatOffset(cellSize);
  var xOffset = calculateLonOffset(latitude, cellSize);
  return {
    yOffset: yOffset,
    xOffset: xOffset
  };
}

function calculateLatOffset(dy) {
  return dy / R_EARTH * (180 / Math.PI);
}

function calculateLonOffset(lat, dx) {
  return dx / R_EARTH * (180 / Math.PI) / Math.cos(lat * Math.PI / 180);
}

function alignToCell(inValue, cellSize) {
  var sign = inValue < 0 ? -1 : 1;
  var value = sign < 0 ? Math.abs(inValue) + cellSize : Math.abs(inValue);
  value = Math.floor(value / cellSize) * cellSize;
  return value * sign;
}

function getGPUAggregationParams(_ref2) {
  var boundingBox = _ref2.boundingBox,
      cellSize = _ref2.cellSize,
      worldOrigin = _ref2.worldOrigin;
  var yMin = boundingBox.yMin,
      yMax = boundingBox.yMax,
      xMin = boundingBox.xMin,
      xMax = boundingBox.xMax;
  var originX = alignToCell(xMin - worldOrigin[0], cellSize[0]) + worldOrigin[0];
  var originY = alignToCell(yMin - worldOrigin[1], cellSize[1]) + worldOrigin[1];
  var gridTransformMatrix = new math_gl__WEBPACK_IMPORTED_MODULE_0__["default"]().translate([-1 * originX, -1 * originY, 0]);
  var gridOrigin = [originX, originY];
  var width = xMax - xMin + cellSize[0];
  var height = yMax - yMin + cellSize[1];
  var gridSize = [Math.ceil(width / cellSize[0]), Math.ceil(height / cellSize[1])];
  return {
    gridOrigin: gridOrigin,
    gridSize: gridSize,
    width: width,
    height: height,
    gridTransformMatrix: gridTransformMatrix
  };
}
//# sourceMappingURL=grid-aggregation-utils.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/transform-mean-vs.glsl.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/transform-mean-vs.glsl.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME gpu-aggregation-transform-mean-vs\nattribute vec4 aggregationValues;\nvarying vec4 meanValues;\n\nvoid main()\n{\n  bool isCellValid = bool(aggregationValues.w > 0.);\n  meanValues.xyz = isCellValid ? aggregationValues.xyz/aggregationValues.w : vec3(0, 0, 0);\n  meanValues.w = aggregationValues.w;\n}\n");
//# sourceMappingURL=transform-mean-vs.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/scale-utils.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/scale-utils.js ***!
  \********************************************************************************/
/*! exports provided: linearScale, quantizeScale, getQuantizeScale, getLinearScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearScale", function() { return linearScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeScale", function() { return quantizeScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizeScale", function() { return getQuantizeScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLinearScale", function() { return getLinearScale; });
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/utils/log.js");

function linearScale(domain, range, value) {
  return (value - domain[0]) / (domain[1] - domain[0]) * (range[1] - range[0]) + range[0];
}
function quantizeScale(domain, range, value) {
  var domainRange = domain[1] - domain[0];

  if (domainRange <= 0) {
    _deck_gl_core__WEBPACK_IMPORTED_MODULE_0__["default"].warn('quantizeScale: invalid domain, returning range[0]')();
    return range[0];
  }

  var step = domainRange / range.length;
  var idx = Math.floor((value - domain[0]) / step);
  var clampIdx = Math.max(Math.min(idx, range.length - 1), 0);
  return range[clampIdx];
}
function getQuantizeScale(domain, range) {
  return function (value) {
    return quantizeScale(domain, range, value);
  };
}
function getLinearScale(domain, range) {
  return function (value) {
    return (value - domain[0]) / (domain[1] - domain[0]) * (range[1] - range[0]) + range[0];
  };
}
//# sourceMappingURL=scale-utils.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/column-layer/column-geometry.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/column-layer/column-geometry.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColumnGeometry; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/utils/log.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/webgl/dist/esm/utils/utils.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/geometry/geometry.js");








var ColumnGeometry = function (_Geometry) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ColumnGeometry, _Geometry);

  function ColumnGeometry() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ColumnGeometry);

    var _props$id = props.id,
        id = _props$id === void 0 ? Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_6__["uid"])('column-geometry') : _props$id;

    var _tesselateColumn = tesselateColumn(props),
        indices = _tesselateColumn.indices,
        attributes = _tesselateColumn.attributes;

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ColumnGeometry).call(this, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      id: id,
      indices: indices,
      attributes: attributes
    })));
  }

  return ColumnGeometry;
}(_luma_gl_core__WEBPACK_IMPORTED_MODULE_7__["default"]);



function tesselateColumn(props) {
  var radius = props.radius,
      _props$height = props.height,
      height = _props$height === void 0 ? 1 : _props$height,
      _props$nradial = props.nradial,
      nradial = _props$nradial === void 0 ? 10 : _props$nradial,
      vertices = props.vertices;
  _deck_gl_core__WEBPACK_IMPORTED_MODULE_5__["default"].assert(!vertices || vertices.length >= nradial);
  var vertsAroundEdge = nradial + 1;
  var numVertices = vertsAroundEdge * 3;
  var stepAngle = Math.PI * 2 / nradial;
  var indices = new Uint16Array(nradial * 3 * 2);
  var positions = new Float32Array(numVertices * 3);
  var normals = new Float32Array(numVertices * 3);
  var i = 0;

  for (var j = 0; j < vertsAroundEdge; j++) {
    var a = j * stepAngle;
    var vertex = vertices && vertices[j % nradial];
    var nextVertex = vertices && vertices[(j + 1) % nradial];
    var sin = Math.sin(a);
    var cos = Math.cos(a);

    for (var k = 0; k < 2; k++) {
      positions[i + 0] = vertex ? vertex[0] : cos * radius;
      positions[i + 1] = vertex ? vertex[1] : sin * radius;
      positions[i + 2] = (1 / 2 - k) * height;
      normals[i + 0] = vertex ? nextVertex[0] - vertex[0] : cos;
      normals[i + 1] = vertex ? nextVertex[1] - vertex[1] : sin;
      i += 3;
    }
  }

  for (var _j = 0; _j < vertsAroundEdge; _j++) {
    var v = Math.floor(_j / 2) * Math.sign(_j % 2 - 0.5);

    var _a = v * stepAngle;

    var _vertex = vertices && vertices[(v + nradial) % nradial];

    var _sin = Math.sin(_a);

    var _cos = Math.cos(_a);

    positions[i + 0] = _vertex ? _vertex[0] : _cos * radius;
    positions[i + 1] = _vertex ? _vertex[1] : _sin * radius;
    positions[i + 2] = height / 2;
    normals[i + 2] = 1;
    i += 3;
  }

  var index = 0;

  for (var _j2 = 0; _j2 < nradial; _j2++) {
    indices[index++] = _j2 * 2 + 0;
    indices[index++] = _j2 * 2 + 2;
    indices[index++] = _j2 * 2 + 0;
    indices[index++] = _j2 * 2 + 1;
    indices[index++] = _j2 * 2 + 1;
    indices[index++] = _j2 * 2 + 3;
  }

  return {
    indices: indices,
    attributes: {
      POSITION: {
        size: 3,
        value: positions
      },
      NORMAL: {
        size: 3,
        value: normals
      }
    }
  };
}
//# sourceMappingURL=column-geometry.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/column-layer/column-layer-fragment.glsl.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/column-layer/column-layer-fragment.glsl.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME column-layer-fragment-shader\n\nprecision highp float;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  gl_FragColor = vColor;\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n");
//# sourceMappingURL=column-layer-fragment.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/column-layer/column-layer-vertex.glsl.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/column-layer/column-layer-vertex.glsl.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n#define SHADER_NAME column-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec3 normals;\n\nattribute vec3 instancePositions;\nattribute float instanceElevations;\nattribute vec2 instancePositions64xyLow;\nattribute vec4 instanceFillColors;\nattribute vec4 instanceLineColors;\nattribute float instanceStrokeWidths;\n\nattribute vec3 instancePickingColors;\nuniform float opacity;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform bool extruded;\nuniform bool isStroke;\nuniform float coverage;\nuniform float elevationScale;\nuniform float edgeDistance;\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\nvarying vec4 vColor;\n\nvoid main(void) {\n  \n  vec4 color = isStroke ? instanceLineColors : instanceFillColors;\n  mat2 rotationMatrix = mat2(cos(angle), sin(angle), -sin(angle), cos(angle));\n  float elevation = 0.0;\n  float strokeOffsetRatio = 1.0;\n\n  if (extruded) {\n    elevation = instanceElevations * (positions.z + 1.0) / 2.0 * elevationScale;\n  } else if (isStroke) {\n    float widthPixels = clamp(project_size_to_pixel(instanceStrokeWidths * widthScale),\n      widthMinPixels, widthMaxPixels) / 2.0;\n    strokeOffsetRatio += sign(positions.z) * project_pixel_size(widthPixels) / project_size(edgeDistance * coverage * radius);\n  }\n  float shouldRender = float(color.a > 0.0 && instanceElevations >= 0.0);\n  float dotRadius = radius * coverage * shouldRender;\n  vec3 centroidPosition = vec3(instancePositions.xy, instancePositions.z + elevation);\n  vec2 centroidPosition64xyLow = instancePositions64xyLow;\n  vec3 pos = vec3(project_size(rotationMatrix * positions.xy * strokeOffsetRatio + offset) * dotRadius, 0.);\n\n  vec4 position_commonspace;\n  gl_Position = project_position_to_clipspace(centroidPosition, centroidPosition64xyLow, pos, position_commonspace);\n\n  vec3 normals_commonspace = project_normal(vec3(rotationMatrix * normals.xy, normals.z));\n\n  if (extruded && !isStroke) {\n    vec3 lightColor = lighting_getLightColor(color.rgb, project_uCameraPosition, position_commonspace.xyz, normals_commonspace);\n    vColor = vec4(lightColor, color.a * opacity) / 255.0;\n  } else {\n    vColor = vec4(color.rgb, color.a * opacity) / 255.0;\n  }\n  picking_setPickingColor(instancePickingColors);\n}\n");
//# sourceMappingURL=column-layer-vertex.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/column-layer/column-layer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/column-layer/column-layer.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColumnLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/utils/iterable-utils.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/lib/layer.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/shadertools/dist/esm/modules/fp64/fp64.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/materials/phong-material.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/lib/model.js");
/* harmony import */ var _column_geometry__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./column-geometry */ "./node_modules/@deck.gl/layers/dist/esm/column-layer/column-geometry.js");
/* harmony import */ var _column_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./column-layer-vertex.glsl */ "./node_modules/@deck.gl/layers/dist/esm/column-layer/column-layer-vertex.glsl.js");
/* harmony import */ var _column_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./column-layer-fragment.glsl */ "./node_modules/@deck.gl/layers/dist/esm/column-layer/column-layer-fragment.glsl.js");









var fp64LowPart = _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__["default"].fp64LowPart;
var defaultMaterial = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_9__["default"]();


var DEFAULT_COLOR = [0, 0, 0, 255];
var defaultProps = {
  diskResolution: {
    type: 'number',
    min: 4,
    value: 20
  },
  vertices: null,
  radius: {
    type: 'number',
    min: 0,
    value: 1000
  },
  angle: {
    type: 'number',
    value: 0
  },
  offset: {
    type: 'array',
    value: [0, 0]
  },
  coverage: {
    type: 'number',
    min: 0,
    max: 1,
    value: 1
  },
  elevationScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  lineWidthUnits: 'meters',
  lineWidthScale: 1,
  lineWidthMinPixels: 0,
  lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
  extruded: true,
  fp64: false,
  wireframe: false,
  filled: true,
  stroked: false,
  getPosition: {
    type: 'accessor',
    value: function value(x) {
      return x.position;
    }
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
  getElevation: {
    type: 'accessor',
    value: 1000
  },
  material: defaultMaterial,
  getColor: {
    deprecatedFor: ['getFillColor', 'getLineColor']
  }
};

var ColumnLayer = function (_Layer) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ColumnLayer, _Layer);

  function ColumnLayer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ColumnLayer);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ColumnLayer).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ColumnLayer, [{
    key: "getShaders",
    value: function getShaders() {
      var projectModule = this.use64bitProjection() ? 'project64' : 'project32';
      return {
        vs: _column_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_12__["default"],
        fs: _column_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_13__["default"],
        modules: [projectModule, 'gouraud-lighting', 'picking']
      };
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      var attributeManager = this.getAttributeManager();
      attributeManager.addInstanced({
        instancePositions: {
          size: 3,
          transition: true,
          accessor: 'getPosition'
        },
        instanceElevations: {
          size: 1,
          transition: true,
          accessor: 'getElevation'
        },
        instancePositions64xyLow: {
          size: 2,
          accessor: 'getPosition',
          update: this.calculateInstancePositions64xyLow
        },
        instanceFillColors: {
          size: 4,
          type: 5121,
          transition: true,
          accessor: 'getFillColor',
          defaultValue: DEFAULT_COLOR
        },
        instanceLineColors: {
          size: 4,
          type: 5121,
          transition: true,
          accessor: 'getLineColor',
          defaultValue: DEFAULT_COLOR
        },
        instanceStrokeWidths: {
          size: 1,
          accessor: 'getLineWidth',
          transition: true
        }
      });
    }
  }, {
    key: "updateState",
    value: function updateState(_ref) {
      var props = _ref.props,
          oldProps = _ref.oldProps,
          changeFlags = _ref.changeFlags;

      Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ColumnLayer.prototype), "updateState", this).call(this, {
        props: props,
        oldProps: oldProps,
        changeFlags: changeFlags
      });

      var regenerateModels = props.fp64 !== oldProps.fp64;

      if (regenerateModels) {
        var gl = this.context.gl;

        if (this.state.model) {
          this.state.model.delete();
        }

        this.setState({
          model: this._getModel(gl)
        });
        this.getAttributeManager().invalidateAll();
      }

      if (regenerateModels || props.diskResolution !== oldProps.diskResolution || props.vertices !== oldProps.vertices) {
        this._updateGeometry(props);
      }
    }
  }, {
    key: "getGeometry",
    value: function getGeometry(diskResolution, vertices) {
      var geometry = new _column_geometry__WEBPACK_IMPORTED_MODULE_11__["default"]({
        radius: 1,
        height: 2,
        vertices: vertices,
        nradial: diskResolution
      });
      var meanVertexDistance = 0;

      if (vertices) {
        for (var i = 0; i < diskResolution; i++) {
          var p = vertices[i];
          var d = Math.sqrt(p[0] * p[0] + p[1] * p[1]);
          meanVertexDistance += d / diskResolution;
        }
      } else {
        meanVertexDistance = 1;
      }

      this.setState({
        edgeDistance: Math.cos(Math.PI / diskResolution) * meanVertexDistance
      });
      return geometry;
    }
  }, {
    key: "_getModel",
    value: function _getModel(gl) {
      return new _luma_gl_core__WEBPACK_IMPORTED_MODULE_10__["default"](gl, Object.assign({}, this.getShaders(), {
        id: this.props.id,
        isInstanced: true,
        shaderCache: this.context.shaderCache
      }));
    }
  }, {
    key: "_updateGeometry",
    value: function _updateGeometry(_ref2) {
      var diskResolution = _ref2.diskResolution,
          vertices = _ref2.vertices;
      var geometry = this.getGeometry(diskResolution, vertices);
      this.setState({
        fillVertexCount: geometry.attributes.POSITION.value.length / 3,
        wireframeVertexCount: geometry.indices.value.length
      });
      this.state.model.setProps({
        geometry: geometry
      });
    }
  }, {
    key: "draw",
    value: function draw(_ref3) {
      var uniforms = _ref3.uniforms;
      var viewport = this.context.viewport;
      var _this$props = this.props,
          lineWidthUnits = _this$props.lineWidthUnits,
          lineWidthScale = _this$props.lineWidthScale,
          lineWidthMinPixels = _this$props.lineWidthMinPixels,
          lineWidthMaxPixels = _this$props.lineWidthMaxPixels,
          elevationScale = _this$props.elevationScale,
          extruded = _this$props.extruded,
          filled = _this$props.filled,
          stroked = _this$props.stroked,
          wireframe = _this$props.wireframe,
          offset = _this$props.offset,
          coverage = _this$props.coverage,
          radius = _this$props.radius,
          angle = _this$props.angle;
      var _this$state = this.state,
          model = _this$state.model,
          fillVertexCount = _this$state.fillVertexCount,
          wireframeVertexCount = _this$state.wireframeVertexCount,
          edgeDistance = _this$state.edgeDistance;
      var widthMultiplier = lineWidthUnits === 'pixels' ? viewport.distanceScales.metersPerPixel[2] : 1;
      model.setUniforms(Object.assign({}, uniforms, {
        radius: radius,
        angle: angle / 180 * Math.PI,
        offset: offset,
        extruded: extruded,
        coverage: coverage,
        elevationScale: elevationScale,
        edgeDistance: edgeDistance,
        widthScale: lineWidthScale * widthMultiplier,
        widthMinPixels: lineWidthMinPixels,
        widthMaxPixels: lineWidthMaxPixels
      }));

      if (extruded && wireframe) {
        model.setProps({
          isIndexed: true
        });
        model.setVertexCount(wireframeVertexCount).setDrawMode(1).setUniforms({
          isStroke: true
        }).draw();
      }

      if (filled) {
        model.setProps({
          isIndexed: false
        });
        model.setVertexCount(fillVertexCount).setDrawMode(5).setUniforms({
          isStroke: false
        }).draw();
      }

      if (!extruded && stroked) {
        model.setProps({
          isIndexed: false
        });
        model.setVertexCount(fillVertexCount * 2 / 3).setDrawMode(5).setUniforms({
          isStroke: true
        }).draw();
      }
    }
  }, {
    key: "calculateInstancePositions64xyLow",
    value: function calculateInstancePositions64xyLow(attribute, _ref4) {
      var startRow = _ref4.startRow,
          endRow = _ref4.endRow;
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

  return ColumnLayer;
}(_deck_gl_core__WEBPACK_IMPORTED_MODULE_7__["default"]);


ColumnLayer.layerName = 'ColumnLayer';
ColumnLayer.defaultProps = defaultProps;
//# sourceMappingURL=column-layer.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/column-layer/grid-cell-layer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/column-layer/grid-cell-layer.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridCellLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/geometries/cube-geometry.js");
/* harmony import */ var _column_layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./column-layer */ "./node_modules/@deck.gl/layers/dist/esm/column-layer/column-layer.js");







var defaultProps = {
  cellSize: {
    type: 'number',
    min: 0,
    value: 1000
  },
  offset: {
    type: 'array',
    min: 0,
    value: [1, 1]
  }
};

var GridCellLayer = function (_ColumnLayer) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(GridCellLayer, _ColumnLayer);

  function GridCellLayer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GridCellLayer);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(GridCellLayer).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GridCellLayer, [{
    key: "getGeometry",
    value: function getGeometry(diskResolution) {
      return new _luma_gl_core__WEBPACK_IMPORTED_MODULE_5__["default"]();
    }
  }, {
    key: "draw",
    value: function draw(_ref) {
      var uniforms = _ref.uniforms;
      var _this$props = this.props,
          elevationScale = _this$props.elevationScale,
          extruded = _this$props.extruded,
          offset = _this$props.offset,
          coverage = _this$props.coverage,
          cellSize = _this$props.cellSize,
          angle = _this$props.angle;
      this.state.model.setUniforms(Object.assign({}, uniforms, {
        radius: cellSize / 2,
        angle: angle,
        offset: offset,
        extruded: extruded,
        coverage: coverage,
        elevationScale: elevationScale,
        edgeDistance: 1,
        isWireframe: false
      })).draw();
    }
  }]);

  return GridCellLayer;
}(_column_layer__WEBPACK_IMPORTED_MODULE_6__["default"]);


GridCellLayer.layerName = 'GridCellLayer';
GridCellLayer.defaultProps = defaultProps;
//# sourceMappingURL=grid-cell-layer.js.map

/***/ }),

/***/ "./node_modules/@luma.gl/core/dist/esm/geometries/cube-geometry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@luma.gl/core/dist/esm/geometries/cube-geometry.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CubeGeometry; });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _geometry_geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../geometry/geometry */ "./node_modules/@luma.gl/core/dist/esm/geometry/geometry.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./node_modules/@luma.gl/webgl/dist/esm/utils/utils.js");







var CUBE_INDICES = new Uint16Array([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]);
var CUBE_POSITIONS = new Float32Array([-1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1, 1, -1]);
var CUBE_NORMALS = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0]);
var CUBE_TEX_COORDS = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1]);
var ATTRIBUTES = {
  POSITION: {
    size: 3,
    value: new Float32Array(CUBE_POSITIONS)
  },
  NORMAL: {
    size: 3,
    value: new Float32Array(CUBE_NORMALS)
  },
  TEXCOORD_0: {
    size: 2,
    value: new Float32Array(CUBE_TEX_COORDS)
  }
};

var CubeGeometry = function (_Geometry) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CubeGeometry, _Geometry);

  function CubeGeometry() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CubeGeometry);

    var _props$id = props.id,
        id = _props$id === void 0 ? Object(_utils__WEBPACK_IMPORTED_MODULE_6__["uid"])('cube-geometry') : _props$id;
    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CubeGeometry).call(this, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      id: id,
      indices: {
        size: 1,
        value: new Uint16Array(CUBE_INDICES)
      },
      attributes: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ATTRIBUTES, props.attributes)
    })));
  }

  return CubeGeometry;
}(_geometry_geometry__WEBPACK_IMPORTED_MODULE_5__["default"]);


//# sourceMappingURL=cube-geometry.js.map

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

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/assert.js":
/*!***************************************************************!*\
  !*** ./node_modules/@math.gl/web-mercator/dist/esm/assert.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return assert; });
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || '@math.gl/web-mercator: assertion failed.');
  }
}
//# sourceMappingURL=assert.js.map

/***/ }),

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/fit-bounds.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@math.gl/web-mercator/dist/esm/fit-bounds.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fitBounds; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-mercator-viewport */ "./node_modules/@math.gl/web-mercator/dist/esm/web-mercator-viewport.js");
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assert */ "./node_modules/@math.gl/web-mercator/dist/esm/assert.js");



function fitBounds(_ref) {
  var width = _ref.width,
      height = _ref.height,
      bounds = _ref.bounds,
      _ref$minExtent = _ref.minExtent,
      minExtent = _ref$minExtent === void 0 ? 0 : _ref$minExtent,
      _ref$maxZoom = _ref.maxZoom,
      maxZoom = _ref$maxZoom === void 0 ? 24 : _ref$maxZoom,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 0 : _ref$padding,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? [0, 0] : _ref$offset;

  var _bounds = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(bounds, 2),
      _bounds$ = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_bounds[0], 2),
      west = _bounds$[0],
      south = _bounds$[1],
      _bounds$2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_bounds[1], 2),
      east = _bounds$2[0],
      north = _bounds$2[1];

  if (Number.isFinite(padding)) {
    var p = padding;
    padding = {
      top: p,
      bottom: p,
      left: p,
      right: p
    };
  } else {
    Object(_assert__WEBPACK_IMPORTED_MODULE_2__["default"])(Number.isFinite(padding.top) && Number.isFinite(padding.bottom) && Number.isFinite(padding.left) && Number.isFinite(padding.right));
  }

  var viewport = new _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_1__["default"]({
    width: width,
    height: height,
    longitude: 0,
    latitude: 0,
    zoom: 0
  });
  var nw = viewport.project([west, north]);
  var se = viewport.project([east, south]);
  var size = [Math.max(Math.abs(se[0] - nw[0]), minExtent), Math.max(Math.abs(se[1] - nw[1]), minExtent)];
  var targetSize = [width - padding.left - padding.right - Math.abs(offset[0]) * 2, height - padding.top - padding.bottom - Math.abs(offset[1]) * 2];
  Object(_assert__WEBPACK_IMPORTED_MODULE_2__["default"])(targetSize[0] > 0 && targetSize[1] > 0);
  var scaleX = targetSize[0] / size[0];
  var scaleY = targetSize[1] / size[1];
  var offsetX = (padding.right - padding.left) / 2 / scaleX;
  var offsetY = (padding.bottom - padding.top) / 2 / scaleY;
  var center = [(se[0] + nw[0]) / 2 + offsetX, (se[1] + nw[1]) / 2 + offsetY];
  var centerLngLat = viewport.unproject(center);
  var zoom = Math.min(maxZoom, viewport.zoom + Math.log2(Math.abs(Math.min(scaleX, scaleY))));
  Object(_assert__WEBPACK_IMPORTED_MODULE_2__["default"])(Number.isFinite(zoom));
  return {
    longitude: centerLngLat[0],
    latitude: centerLngLat[1],
    zoom: zoom
  };
}
//# sourceMappingURL=fit-bounds.js.map

/***/ }),

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/fly-to-viewport.js":
/*!************************************************************************!*\
  !*** ./node_modules/@math.gl/web-mercator/dist/esm/fly-to-viewport.js ***!
  \************************************************************************/
/*! exports provided: default, getFlyToDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return flyToViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlyToDuration", function() { return getFlyToDuration; });
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-utils */ "./node_modules/@math.gl/web-mercator/dist/esm/math-utils.js");
/* harmony import */ var _web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-mercator-utils */ "./node_modules/@math.gl/web-mercator/dist/esm/web-mercator-utils.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix/vec2 */ "./node_modules/gl-matrix/esm/vec2.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var EPSILON = 0.01;
var VIEWPORT_TRANSITION_PROPS = ['longitude', 'latitude', 'zoom'];
var DEFAULT_OPTS = {
  curve: 1.414,
  speed: 1.2
};
function flyToViewport(startProps, endProps, t) {
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var viewport = {};

  var _getFlyToTransitionPa = getFlyToTransitionParams(startProps, endProps, opts),
      startZoom = _getFlyToTransitionPa.startZoom,
      startCenterXY = _getFlyToTransitionPa.startCenterXY,
      uDelta = _getFlyToTransitionPa.uDelta,
      w0 = _getFlyToTransitionPa.w0,
      u1 = _getFlyToTransitionPa.u1,
      S = _getFlyToTransitionPa.S,
      rho = _getFlyToTransitionPa.rho,
      rho2 = _getFlyToTransitionPa.rho2,
      r0 = _getFlyToTransitionPa.r0;

  if (u1 < EPSILON) {
    var _iterator = _createForOfIteratorHelper(VIEWPORT_TRANSITION_PROPS),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        var startValue = startProps[key];
        var endValue = endProps[key];
        viewport[key] = Object(_math_utils__WEBPACK_IMPORTED_MODULE_0__["lerp"])(startValue, endValue, t);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return viewport;
  }

  var s = t * S;
  var w = Math.cosh(r0) / Math.cosh(r0 + rho * s);
  var u = w0 * ((Math.cosh(r0) * Math.tanh(r0 + rho * s) - Math.sinh(r0)) / rho2) / u1;
  var scaleIncrement = 1 / w;
  var newZoom = startZoom + Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["scaleToZoom"])(scaleIncrement);
  var newCenterWorld = gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_2__["scale"]([], uDelta, u);
  gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_2__["add"](newCenterWorld, newCenterWorld, startCenterXY);
  var newCenter = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["worldToLngLat"])(newCenterWorld);
  viewport.longitude = newCenter[0];
  viewport.latitude = newCenter[1];
  viewport.zoom = newZoom;
  return viewport;
}
function getFlyToDuration(startProps, endProps) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  opts = Object.assign({}, DEFAULT_OPTS, opts);
  var _opts = opts,
      screenSpeed = _opts.screenSpeed,
      speed = _opts.speed,
      maxDuration = _opts.maxDuration;

  var _getFlyToTransitionPa2 = getFlyToTransitionParams(startProps, endProps, opts),
      S = _getFlyToTransitionPa2.S,
      rho = _getFlyToTransitionPa2.rho;

  var length = 1000 * S;
  var duration;

  if (Number.isFinite(screenSpeed)) {
    duration = length / (screenSpeed / rho);
  } else {
    duration = length / speed;
  }

  return Number.isFinite(maxDuration) && duration > maxDuration ? 0 : duration;
}

function getFlyToTransitionParams(startProps, endProps, opts) {
  opts = Object.assign({}, DEFAULT_OPTS, opts);
  var rho = opts.curve;
  var startZoom = startProps.zoom;
  var startCenter = [startProps.longitude, startProps.latitude];
  var startScale = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["zoomToScale"])(startZoom);
  var endZoom = endProps.zoom;
  var endCenter = [endProps.longitude, endProps.latitude];
  var scale = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["zoomToScale"])(endZoom - startZoom);
  var startCenterXY = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["lngLatToWorld"])(startCenter);
  var endCenterXY = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_1__["lngLatToWorld"])(endCenter);
  var uDelta = gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_2__["sub"]([], endCenterXY, startCenterXY);
  var w0 = Math.max(startProps.width, startProps.height);
  var w1 = w0 / scale;
  var u1 = gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_2__["length"](uDelta) * startScale;

  var _u1 = Math.max(u1, EPSILON);

  var rho2 = rho * rho;
  var b0 = (w1 * w1 - w0 * w0 + rho2 * rho2 * _u1 * _u1) / (2 * w0 * rho2 * _u1);
  var b1 = (w1 * w1 - w0 * w0 - rho2 * rho2 * _u1 * _u1) / (2 * w1 * rho2 * _u1);
  var r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0);
  var r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
  var S = (r1 - r0) / rho;
  return {
    startZoom: startZoom,
    startCenterXY: startCenterXY,
    uDelta: uDelta,
    w0: w0,
    u1: u1,
    S: S,
    rho: rho,
    rho2: rho2,
    r0: r0,
    r1: r1
  };
}
//# sourceMappingURL=fly-to-viewport.js.map

/***/ }),

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/get-bounds.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@math.gl/web-mercator/dist/esm/get-bounds.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBounds; });
/* harmony import */ var _web_mercator_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-mercator-utils */ "./node_modules/@math.gl/web-mercator/dist/esm/web-mercator-utils.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix/vec2 */ "./node_modules/gl-matrix/esm/vec2.js");
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math-utils */ "./node_modules/@math.gl/web-mercator/dist/esm/math-utils.js");



var DEGREES_TO_RADIANS = Math.PI / 180;
function getBounds(viewport) {
  var z = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var width = viewport.width,
      height = viewport.height,
      unproject = viewport.unproject;
  var unprojectOps = {
    targetZ: z
  };
  var bottomLeft = unproject([0, height], unprojectOps);
  var bottomRight = unproject([width, height], unprojectOps);
  var topLeft;
  var topRight;
  var halfFov = Math.atan(0.5 / viewport.altitude);
  var angleToGround = (90 - viewport.pitch) * DEGREES_TO_RADIANS;

  if (halfFov > angleToGround - 0.01) {
    topLeft = unprojectOnFarPlane(viewport, 0, z);
    topRight = unprojectOnFarPlane(viewport, width, z);
  } else {
    topLeft = unproject([0, 0], unprojectOps);
    topRight = unproject([width, 0], unprojectOps);
  }

  return [bottomLeft, bottomRight, topRight, topLeft];
}

function unprojectOnFarPlane(viewport, x, targetZ) {
  var pixelUnprojectionMatrix = viewport.pixelUnprojectionMatrix;
  var coord0 = Object(_math_utils__WEBPACK_IMPORTED_MODULE_2__["transformVector"])(pixelUnprojectionMatrix, [x, 0, 1, 1]);
  var coord1 = Object(_math_utils__WEBPACK_IMPORTED_MODULE_2__["transformVector"])(pixelUnprojectionMatrix, [x, viewport.height, 1, 1]);
  var z = targetZ * viewport.distanceScales.unitsPerMeter[2];
  var t = (z - coord0[2]) / (coord1[2] - coord0[2]);
  var coord = gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_1__["lerp"]([], coord0, coord1, t);
  var result = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_0__["worldToLngLat"])(coord);
  result[2] = targetZ;
  return result;
}
//# sourceMappingURL=get-bounds.js.map

/***/ }),

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@math.gl/web-mercator/dist/esm/index.js ***!
  \**************************************************************/
/*! exports provided: default, WebMercatorViewport, getBounds, fitBounds, normalizeViewportProps, flyToViewport, getFlyToDuration, lngLatToWorld, worldToLngLat, worldToPixels, pixelsToWorld, zoomToScale, scaleToZoom, getMeterZoom, getDistanceScales, addMetersToLngLat, getViewMatrix, getProjectionMatrix, getProjectionParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-mercator-viewport */ "./node_modules/@math.gl/web-mercator/dist/esm/web-mercator-viewport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebMercatorViewport", function() { return _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _get_bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-bounds */ "./node_modules/@math.gl/web-mercator/dist/esm/get-bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBounds", function() { return _get_bounds__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _fit_bounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fit-bounds */ "./node_modules/@math.gl/web-mercator/dist/esm/fit-bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fitBounds", function() { return _fit_bounds__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _normalize_viewport_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normalize-viewport-props */ "./node_modules/@math.gl/web-mercator/dist/esm/normalize-viewport-props.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeViewportProps", function() { return _normalize_viewport_props__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _fly_to_viewport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fly-to-viewport */ "./node_modules/@math.gl/web-mercator/dist/esm/fly-to-viewport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flyToViewport", function() { return _fly_to_viewport__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFlyToDuration", function() { return _fly_to_viewport__WEBPACK_IMPORTED_MODULE_4__["getFlyToDuration"]; });

/* harmony import */ var _web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web-mercator-utils */ "./node_modules/@math.gl/web-mercator/dist/esm/web-mercator-utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lngLatToWorld", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["lngLatToWorld"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "worldToLngLat", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["worldToLngLat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "worldToPixels", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["worldToPixels"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pixelsToWorld", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["pixelsToWorld"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zoomToScale", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["zoomToScale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleToZoom", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["scaleToZoom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMeterZoom", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["getMeterZoom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDistanceScales", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["getDistanceScales"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addMetersToLngLat", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["addMetersToLngLat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getViewMatrix", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["getViewMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProjectionMatrix", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["getProjectionMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProjectionParameters", function() { return _web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["getProjectionParameters"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/math-utils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@math.gl/web-mercator/dist/esm/math-utils.js ***!
  \*******************************************************************/
/*! exports provided: createMat4, transformVector, mod, lerp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMat4", function() { return createMat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformVector", function() { return transformVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mod", function() { return mod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony import */ var gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gl-matrix/vec4 */ "./node_modules/gl-matrix/esm/vec4.js");

function createMat4() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
function transformVector(matrix, vector) {
  var result = gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_0__["transformMat4"]([], vector, matrix);
  gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_0__["scale"](result, result, 1 / result[3]);
  return result;
}
function mod(value, divisor) {
  var modulus = value % divisor;
  return modulus < 0 ? divisor + modulus : modulus;
}
function lerp(start, end, step) {
  return step * end + (1 - step) * start;
}
//# sourceMappingURL=math-utils.js.map

/***/ }),

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/normalize-viewport-props.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@math.gl/web-mercator/dist/esm/normalize-viewport-props.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeViewportProps; });
/* harmony import */ var _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-mercator-viewport */ "./node_modules/@math.gl/web-mercator/dist/esm/web-mercator-viewport.js");
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math-utils */ "./node_modules/@math.gl/web-mercator/dist/esm/math-utils.js");


var MAX_LATITUDE = 85.05113;
var MIN_LATITUDE = -85.05113;
function normalizeViewportProps(_ref) {
  var width = _ref.width,
      height = _ref.height,
      longitude = _ref.longitude,
      latitude = _ref.latitude,
      zoom = _ref.zoom,
      _ref$pitch = _ref.pitch,
      pitch = _ref$pitch === void 0 ? 0 : _ref$pitch,
      _ref$bearing = _ref.bearing,
      bearing = _ref$bearing === void 0 ? 0 : _ref$bearing;

  if (longitude < -180 || longitude > 180) {
    longitude = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["mod"])(longitude + 180, 360) - 180;
  }

  if (bearing < -180 || bearing > 180) {
    bearing = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["mod"])(bearing + 180, 360) - 180;
  }

  var flatViewport = new _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__["default"]({
    width: width,
    height: height,
    longitude: longitude,
    latitude: latitude,
    zoom: zoom
  });
  var topY = flatViewport.project([longitude, MAX_LATITUDE])[1];
  var bottomY = flatViewport.project([longitude, MIN_LATITUDE])[1];
  var shiftY = 0;

  if (bottomY - topY < height) {
    zoom += Math.log2(height / (bottomY - topY));
    flatViewport = new _web_mercator_viewport__WEBPACK_IMPORTED_MODULE_0__["default"]({
      width: width,
      height: height,
      longitude: longitude,
      latitude: latitude,
      zoom: zoom
    });
    topY = flatViewport.project([longitude, MAX_LATITUDE])[1];
    bottomY = flatViewport.project([longitude, MIN_LATITUDE])[1];
  }

  if (topY > 0) {
    shiftY = topY;
  } else if (bottomY < height) {
    shiftY = bottomY - height;
  }

  if (shiftY) {
    latitude = flatViewport.unproject([width / 2, height / 2 + shiftY])[1];
  }

  return {
    width: width,
    height: height,
    longitude: longitude,
    latitude: latitude,
    zoom: zoom,
    pitch: pitch,
    bearing: bearing
  };
}
//# sourceMappingURL=normalize-viewport-props.js.map

/***/ }),

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/web-mercator-utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@math.gl/web-mercator/dist/esm/web-mercator-utils.js ***!
  \***************************************************************************/
/*! exports provided: zoomToScale, scaleToZoom, lngLatToWorld, worldToLngLat, getMeterZoom, getDistanceScales, addMetersToLngLat, getViewMatrix, getProjectionParameters, getProjectionMatrix, worldToPixels, pixelsToWorld */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoomToScale", function() { return zoomToScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleToZoom", function() { return scaleToZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lngLatToWorld", function() { return lngLatToWorld; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worldToLngLat", function() { return worldToLngLat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeterZoom", function() { return getMeterZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistanceScales", function() { return getDistanceScales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMetersToLngLat", function() { return addMetersToLngLat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewMatrix", function() { return getViewMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectionParameters", function() { return getProjectionParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectionMatrix", function() { return getProjectionMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worldToPixels", function() { return worldToPixels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pixelsToWorld", function() { return pixelsToWorld; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math-utils */ "./node_modules/@math.gl/web-mercator/dist/esm/math-utils.js");
/* harmony import */ var gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix/mat4 */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix/vec2 */ "./node_modules/gl-matrix/esm/vec2.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gl-matrix/vec3 */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assert */ "./node_modules/@math.gl/web-mercator/dist/esm/assert.js");






var PI = Math.PI;
var PI_4 = PI / 4;
var DEGREES_TO_RADIANS = PI / 180;
var RADIANS_TO_DEGREES = 180 / PI;
var TILE_SIZE = 512;
var EARTH_CIRCUMFERENCE = 40.03e6;
var DEFAULT_ALTITUDE = 1.5;
function zoomToScale(zoom) {
  return Math.pow(2, zoom);
}
function scaleToZoom(scale) {
  return Math.log2(scale);
}
function lngLatToWorld(_ref) {
  var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
      lng = _ref2[0],
      lat = _ref2[1];

  Object(_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Number.isFinite(lng));
  Object(_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Number.isFinite(lat) && lat >= -90 && lat <= 90, 'invalid latitude');
  var lambda2 = lng * DEGREES_TO_RADIANS;
  var phi2 = lat * DEGREES_TO_RADIANS;
  var x = TILE_SIZE * (lambda2 + PI) / (2 * PI);
  var y = TILE_SIZE * (PI + Math.log(Math.tan(PI_4 + phi2 * 0.5))) / (2 * PI);
  return [x, y];
}
function worldToLngLat(_ref3) {
  var _ref4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 2),
      x = _ref4[0],
      y = _ref4[1];

  var lambda2 = x / TILE_SIZE * (2 * PI) - PI;
  var phi2 = 2 * (Math.atan(Math.exp(y / TILE_SIZE * (2 * PI) - PI)) - PI_4);
  return [lambda2 * RADIANS_TO_DEGREES, phi2 * RADIANS_TO_DEGREES];
}
function getMeterZoom(_ref5) {
  var latitude = _ref5.latitude;
  Object(_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Number.isFinite(latitude));
  var latCosine = Math.cos(latitude * DEGREES_TO_RADIANS);
  return scaleToZoom(EARTH_CIRCUMFERENCE * latCosine) - 9;
}
function getDistanceScales(_ref6) {
  var latitude = _ref6.latitude,
      longitude = _ref6.longitude,
      _ref6$highPrecision = _ref6.highPrecision,
      highPrecision = _ref6$highPrecision === void 0 ? false : _ref6$highPrecision;
  Object(_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Number.isFinite(latitude) && Number.isFinite(longitude));
  var result = {};
  var worldSize = TILE_SIZE;
  var latCosine = Math.cos(latitude * DEGREES_TO_RADIANS);
  var unitsPerDegreeX = worldSize / 360;
  var unitsPerDegreeY = unitsPerDegreeX / latCosine;
  var altUnitsPerMeter = worldSize / EARTH_CIRCUMFERENCE / latCosine;
  result.unitsPerMeter = [altUnitsPerMeter, altUnitsPerMeter, altUnitsPerMeter];
  result.metersPerUnit = [1 / altUnitsPerMeter, 1 / altUnitsPerMeter, 1 / altUnitsPerMeter];
  result.unitsPerDegree = [unitsPerDegreeX, unitsPerDegreeY, altUnitsPerMeter];
  result.degreesPerUnit = [1 / unitsPerDegreeX, 1 / unitsPerDegreeY, 1 / altUnitsPerMeter];

  if (highPrecision) {
    var latCosine2 = DEGREES_TO_RADIANS * Math.tan(latitude * DEGREES_TO_RADIANS) / latCosine;
    var unitsPerDegreeY2 = unitsPerDegreeX * latCosine2 / 2;
    var altUnitsPerDegree2 = worldSize / EARTH_CIRCUMFERENCE * latCosine2;
    var altUnitsPerMeter2 = altUnitsPerDegree2 / unitsPerDegreeY * altUnitsPerMeter;
    result.unitsPerDegree2 = [0, unitsPerDegreeY2, altUnitsPerDegree2];
    result.unitsPerMeter2 = [altUnitsPerMeter2, 0, altUnitsPerMeter2];
  }

  return result;
}
function addMetersToLngLat(lngLatZ, xyz) {
  var _lngLatZ = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(lngLatZ, 3),
      longitude = _lngLatZ[0],
      latitude = _lngLatZ[1],
      z0 = _lngLatZ[2];

  var _xyz = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(xyz, 3),
      x = _xyz[0],
      y = _xyz[1],
      z = _xyz[2];

  var _getDistanceScales = getDistanceScales({
    longitude: longitude,
    latitude: latitude,
    highPrecision: true
  }),
      unitsPerMeter = _getDistanceScales.unitsPerMeter,
      unitsPerMeter2 = _getDistanceScales.unitsPerMeter2;

  var worldspace = lngLatToWorld(lngLatZ);
  worldspace[0] += x * (unitsPerMeter[0] + unitsPerMeter2[0] * y);
  worldspace[1] += y * (unitsPerMeter[1] + unitsPerMeter2[1] * y);
  var newLngLat = worldToLngLat(worldspace);
  var newZ = (z0 || 0) + (z || 0);
  return Number.isFinite(z0) || Number.isFinite(z) ? [newLngLat[0], newLngLat[1], newZ] : newLngLat;
}
function getViewMatrix(_ref7) {
  var height = _ref7.height,
      pitch = _ref7.pitch,
      bearing = _ref7.bearing,
      altitude = _ref7.altitude,
      scale = _ref7.scale,
      _ref7$center = _ref7.center,
      center = _ref7$center === void 0 ? null : _ref7$center;
  var vm = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["createMat4"])();
  gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_2__["translate"](vm, vm, [0, 0, -altitude]);
  gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_2__["rotateX"](vm, vm, -pitch * DEGREES_TO_RADIANS);
  gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_2__["rotateZ"](vm, vm, bearing * DEGREES_TO_RADIANS);
  scale /= height;
  gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_2__["scale"](vm, vm, [scale, scale, scale]);

  if (center) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_2__["translate"](vm, vm, gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_4__["negate"]([], center));
  }

  return vm;
}
function getProjectionParameters(_ref8) {
  var width = _ref8.width,
      height = _ref8.height,
      _ref8$altitude = _ref8.altitude,
      altitude = _ref8$altitude === void 0 ? DEFAULT_ALTITUDE : _ref8$altitude,
      _ref8$pitch = _ref8.pitch,
      pitch = _ref8$pitch === void 0 ? 0 : _ref8$pitch,
      _ref8$nearZMultiplier = _ref8.nearZMultiplier,
      nearZMultiplier = _ref8$nearZMultiplier === void 0 ? 1 : _ref8$nearZMultiplier,
      _ref8$farZMultiplier = _ref8.farZMultiplier,
      farZMultiplier = _ref8$farZMultiplier === void 0 ? 1 : _ref8$farZMultiplier;
  var pitchRadians = pitch * DEGREES_TO_RADIANS;
  var halfFov = Math.atan(0.5 / altitude);
  var topHalfSurfaceDistance = Math.sin(halfFov) * altitude / Math.sin(Math.min(Math.max(Math.PI / 2 - pitchRadians - halfFov, 0.01), Math.PI - 0.01));
  var farZ = Math.sin(pitchRadians) * topHalfSurfaceDistance + altitude;
  return {
    fov: 2 * halfFov,
    aspect: width / height,
    focalDistance: altitude,
    near: nearZMultiplier,
    far: farZ * farZMultiplier
  };
}
function getProjectionMatrix(_ref9) {
  var width = _ref9.width,
      height = _ref9.height,
      pitch = _ref9.pitch,
      altitude = _ref9.altitude,
      nearZMultiplier = _ref9.nearZMultiplier,
      farZMultiplier = _ref9.farZMultiplier;

  var _getProjectionParamet = getProjectionParameters({
    width: width,
    height: height,
    altitude: altitude,
    pitch: pitch,
    nearZMultiplier: nearZMultiplier,
    farZMultiplier: farZMultiplier
  }),
      fov = _getProjectionParamet.fov,
      aspect = _getProjectionParamet.aspect,
      near = _getProjectionParamet.near,
      far = _getProjectionParamet.far;

  var projectionMatrix = gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_2__["perspective"]([], fov, aspect, near, far);
  return projectionMatrix;
}
function worldToPixels(xyz, pixelProjectionMatrix) {
  var _xyz2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(xyz, 3),
      x = _xyz2[0],
      y = _xyz2[1],
      _xyz2$ = _xyz2[2],
      z = _xyz2$ === void 0 ? 0 : _xyz2$;

  Object(_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Number.isFinite(x) && Number.isFinite(y) && Number.isFinite(z));
  return Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["transformVector"])(pixelProjectionMatrix, [x, y, z, 1]);
}
function pixelsToWorld(xyz, pixelUnprojectionMatrix) {
  var targetZ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var _xyz3 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(xyz, 3),
      x = _xyz3[0],
      y = _xyz3[1],
      z = _xyz3[2];

  Object(_assert__WEBPACK_IMPORTED_MODULE_5__["default"])(Number.isFinite(x) && Number.isFinite(y), 'invalid pixel coordinate');

  if (Number.isFinite(z)) {
    var coord = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["transformVector"])(pixelUnprojectionMatrix, [x, y, z, 1]);
    return coord;
  }

  var coord0 = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["transformVector"])(pixelUnprojectionMatrix, [x, y, 0, 1]);
  var coord1 = Object(_math_utils__WEBPACK_IMPORTED_MODULE_1__["transformVector"])(pixelUnprojectionMatrix, [x, y, 1, 1]);
  var z0 = coord0[2];
  var z1 = coord1[2];
  var t = z0 === z1 ? 0 : ((targetZ || 0) - z0) / (z1 - z0);
  return gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__["lerp"]([], coord0, coord1, t);
}
//# sourceMappingURL=web-mercator-utils.js.map

/***/ }),

/***/ "./node_modules/@math.gl/web-mercator/dist/esm/web-mercator-viewport.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@math.gl/web-mercator/dist/esm/web-mercator-viewport.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebMercatorViewport; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _math_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./math-utils */ "./node_modules/@math.gl/web-mercator/dist/esm/math-utils.js");
/* harmony import */ var _web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web-mercator-utils */ "./node_modules/@math.gl/web-mercator/dist/esm/web-mercator-utils.js");
/* harmony import */ var _fit_bounds__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fit-bounds */ "./node_modules/@math.gl/web-mercator/dist/esm/fit-bounds.js");
/* harmony import */ var _get_bounds__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get-bounds */ "./node_modules/@math.gl/web-mercator/dist/esm/get-bounds.js");
/* harmony import */ var gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gl-matrix/mat4 */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gl-matrix/vec2 */ "./node_modules/gl-matrix/esm/vec2.js");











var WebMercatorViewport = function () {
  function WebMercatorViewport() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      width: 1,
      height: 1
    },
        width = _ref.width,
        height = _ref.height,
        _ref$latitude = _ref.latitude,
        latitude = _ref$latitude === void 0 ? 0 : _ref$latitude,
        _ref$longitude = _ref.longitude,
        longitude = _ref$longitude === void 0 ? 0 : _ref$longitude,
        _ref$zoom = _ref.zoom,
        zoom = _ref$zoom === void 0 ? 0 : _ref$zoom,
        _ref$pitch = _ref.pitch,
        pitch = _ref$pitch === void 0 ? 0 : _ref$pitch,
        _ref$bearing = _ref.bearing,
        bearing = _ref$bearing === void 0 ? 0 : _ref$bearing,
        _ref$altitude = _ref.altitude,
        altitude = _ref$altitude === void 0 ? 1.5 : _ref$altitude,
        _ref$nearZMultiplier = _ref.nearZMultiplier,
        nearZMultiplier = _ref$nearZMultiplier === void 0 ? 0.02 : _ref$nearZMultiplier,
        _ref$farZMultiplier = _ref.farZMultiplier,
        farZMultiplier = _ref$farZMultiplier === void 0 ? 1.01 : _ref$farZMultiplier;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, WebMercatorViewport);

    width = width || 1;
    height = height || 1;
    var scale = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["zoomToScale"])(zoom);
    altitude = Math.max(0.75, altitude);
    var center = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["lngLatToWorld"])([longitude, latitude]);
    center[2] = 0;
    this.projectionMatrix = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["getProjectionMatrix"])({
      width: width,
      height: height,
      pitch: pitch,
      altitude: altitude,
      nearZMultiplier: nearZMultiplier,
      farZMultiplier: farZMultiplier
    });
    this.viewMatrix = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["getViewMatrix"])({
      height: height,
      scale: scale,
      center: center,
      pitch: pitch,
      bearing: bearing,
      altitude: altitude
    });
    this.width = width;
    this.height = height;
    this.scale = scale;
    this.latitude = latitude;
    this.longitude = longitude;
    this.zoom = zoom;
    this.pitch = pitch;
    this.bearing = bearing;
    this.altitude = altitude;
    this.center = center;
    this.distanceScales = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["getDistanceScales"])(this);

    this._initMatrices();

    this.equals = this.equals.bind(this);
    this.project = this.project.bind(this);
    this.unproject = this.unproject.bind(this);
    this.projectPosition = this.projectPosition.bind(this);
    this.unprojectPosition = this.unprojectPosition.bind(this);
    Object.freeze(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(WebMercatorViewport, [{
    key: "_initMatrices",
    value: function _initMatrices() {
      var width = this.width,
          height = this.height,
          projectionMatrix = this.projectionMatrix,
          viewMatrix = this.viewMatrix;
      var vpm = Object(_math_utils__WEBPACK_IMPORTED_MODULE_4__["createMat4"])();
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_8__["multiply"](vpm, vpm, projectionMatrix);
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_8__["multiply"](vpm, vpm, viewMatrix);
      this.viewProjectionMatrix = vpm;
      var m = Object(_math_utils__WEBPACK_IMPORTED_MODULE_4__["createMat4"])();
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_8__["scale"](m, m, [width / 2, -height / 2, 1]);
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_8__["translate"](m, m, [1, -1, 0]);
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_8__["multiply"](m, m, vpm);
      var mInverse = gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_8__["invert"](Object(_math_utils__WEBPACK_IMPORTED_MODULE_4__["createMat4"])(), m);

      if (!mInverse) {
        throw new Error('Pixel project matrix not invertible');
      }

      this.pixelProjectionMatrix = m;
      this.pixelUnprojectionMatrix = mInverse;
    }
  }, {
    key: "equals",
    value: function equals(viewport) {
      if (!(viewport instanceof WebMercatorViewport)) {
        return false;
      }

      return viewport.width === this.width && viewport.height === this.height && gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_8__["equals"](viewport.projectionMatrix, this.projectionMatrix) && gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_8__["equals"](viewport.viewMatrix, this.viewMatrix);
    }
  }, {
    key: "project",
    value: function project(xyz) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$topLeft = _ref2.topLeft,
          topLeft = _ref2$topLeft === void 0 ? true : _ref2$topLeft;

      var worldPosition = this.projectPosition(xyz);
      var coord = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["worldToPixels"])(worldPosition, this.pixelProjectionMatrix);

      var _coord = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(coord, 2),
          x = _coord[0],
          y = _coord[1];

      var y2 = topLeft ? y : this.height - y;
      return xyz.length === 2 ? [x, y2] : [x, y2, coord[2]];
    }
  }, {
    key: "unproject",
    value: function unproject(xyz) {
      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$topLeft = _ref3.topLeft,
          topLeft = _ref3$topLeft === void 0 ? true : _ref3$topLeft,
          _ref3$targetZ = _ref3.targetZ,
          targetZ = _ref3$targetZ === void 0 ? undefined : _ref3$targetZ;

      var _xyz = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(xyz, 3),
          x = _xyz[0],
          y = _xyz[1],
          z = _xyz[2];

      var y2 = topLeft ? y : this.height - y;
      var targetZWorld = targetZ && targetZ * this.distanceScales.unitsPerMeter[2];
      var coord = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["pixelsToWorld"])([x, y2, z], this.pixelUnprojectionMatrix, targetZWorld);

      var _this$unprojectPositi = this.unprojectPosition(coord),
          _this$unprojectPositi2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$unprojectPositi, 3),
          X = _this$unprojectPositi2[0],
          Y = _this$unprojectPositi2[1],
          Z = _this$unprojectPositi2[2];

      if (Number.isFinite(z)) {
        return [X, Y, Z];
      }

      return Number.isFinite(targetZ) ? [X, Y, targetZ] : [X, Y];
    }
  }, {
    key: "projectPosition",
    value: function projectPosition(xyz) {
      var _lngLatToWorld = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["lngLatToWorld"])(xyz),
          _lngLatToWorld2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_lngLatToWorld, 2),
          X = _lngLatToWorld2[0],
          Y = _lngLatToWorld2[1];

      var Z = (xyz[2] || 0) * this.distanceScales.unitsPerMeter[2];
      return [X, Y, Z];
    }
  }, {
    key: "unprojectPosition",
    value: function unprojectPosition(xyz) {
      var _worldToLngLat = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["worldToLngLat"])(xyz),
          _worldToLngLat2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_worldToLngLat, 2),
          X = _worldToLngLat2[0],
          Y = _worldToLngLat2[1];

      var Z = (xyz[2] || 0) * this.distanceScales.metersPerUnit[2];
      return [X, Y, Z];
    }
  }, {
    key: "projectFlat",
    value: function projectFlat(lngLat) {
      return Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["lngLatToWorld"])(lngLat);
    }
  }, {
    key: "unprojectFlat",
    value: function unprojectFlat(xy) {
      return Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["worldToLngLat"])(xy);
    }
  }, {
    key: "getMapCenterByLngLatPosition",
    value: function getMapCenterByLngLatPosition(_ref4) {
      var lngLat = _ref4.lngLat,
          pos = _ref4.pos;
      var fromLocation = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["pixelsToWorld"])(pos, this.pixelUnprojectionMatrix);
      var toLocation = Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["lngLatToWorld"])(lngLat);
      var translate = gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_9__["add"]([], toLocation, gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_9__["negate"]([], fromLocation));
      var newCenter = gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_9__["add"]([], this.center, translate);
      return Object(_web_mercator_utils__WEBPACK_IMPORTED_MODULE_5__["worldToLngLat"])(newCenter);
    }
  }, {
    key: "getLocationAtPoint",
    value: function getLocationAtPoint(_ref5) {
      var lngLat = _ref5.lngLat,
          pos = _ref5.pos;
      return this.getMapCenterByLngLatPosition({
        lngLat: lngLat,
        pos: pos
      });
    }
  }, {
    key: "fitBounds",
    value: function fitBounds(bounds) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var width = this.width,
          height = this.height;

      var _fitBounds2 = Object(_fit_bounds__WEBPACK_IMPORTED_MODULE_6__["default"])(Object.assign({
        width: width,
        height: height,
        bounds: bounds
      }, options)),
          longitude = _fitBounds2.longitude,
          latitude = _fitBounds2.latitude,
          zoom = _fitBounds2.zoom;

      return new WebMercatorViewport({
        width: width,
        height: height,
        longitude: longitude,
        latitude: latitude,
        zoom: zoom
      });
    }
  }, {
    key: "getBounds",
    value: function getBounds(options) {
      var corners = this.getBoundingRegion(options);
      var west = Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(corners.map(function (p) {
        return p[0];
      })));
      var east = Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(corners.map(function (p) {
        return p[0];
      })));
      var south = Math.min.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(corners.map(function (p) {
        return p[1];
      })));
      var north = Math.max.apply(Math, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(corners.map(function (p) {
        return p[1];
      })));
      return [[west, south], [east, north]];
    }
  }, {
    key: "getBoundingRegion",
    value: function getBoundingRegion() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object(_get_bounds__WEBPACK_IMPORTED_MODULE_7__["default"])(this, options.z || 0);
    }
  }]);

  return WebMercatorViewport;
}();


//# sourceMappingURL=web-mercator-viewport.js.map

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/AnimatableDeckGLContainer.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/AnimatableDeckGLContainer.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnimatableDeckGLContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DeckGLContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeckGLContainer */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/DeckGLContainer.js");
/* harmony import */ var _components_PlaySlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PlaySlider */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/PlaySlider.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-sort-default-props */

/* eslint-disable react/sort-prop-types */

/* eslint-disable react/forbid-prop-types */

/* eslint-disable react/require-default-props */

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




const PLAYSLIDER_HEIGHT = 20; // px

const propTypes = {
  getLayers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  start: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  end: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  getStep: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  aggregation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  viewport: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  mapStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mapboxApiAccessToken: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setControlValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onValuesChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
const defaultProps = {
  aggregation: false,
  disabled: false,
  mapStyle: 'light',
  setControlValue: () => {},
  onValuesChange: () => {}
};
class AnimatableDeckGLContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
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
      start,
      end,
      getStep,
      disabled,
      aggregation,
      children,
      getLayers,
      values,
      onValuesChange,
      viewport,
      setControlValue,
      mapStyle,
      mapboxApiAccessToken,
      height,
      width
    } = this.props;
    const layers = getLayers(values);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeckGLContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref: this.containerRef,
      viewport: viewport,
      layers: layers,
      setControlValue: setControlValue,
      mapStyle: mapStyle,
      mapboxApiAccessToken: mapboxApiAccessToken,
      bottomMargin: disabled ? 0 : PLAYSLIDER_HEIGHT,
      width: width,
      height: height
    }), !disabled && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PlaySlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
      start: start,
      end: end,
      step: getStep(start),
      values: values,
      range: !aggregation,
      onChange: onValuesChange
    }), children);
  }

}
AnimatableDeckGLContainer.propTypes = propTypes;
AnimatableDeckGLContainer.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/CategoricalDeckGLContainer.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/CategoricalDeckGLContainer.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoricalDeckGLContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/color/index.js");
/* harmony import */ var _AnimatableDeckGLContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimatableDeckGLContainer */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/AnimatableDeckGLContainer.js");
/* harmony import */ var _components_Legend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Legend */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/colors */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/colors.js");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/time */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/time.js");
/* harmony import */ var _utils_sandbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/sandbox */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/sandbox.js");
/* harmony import */ var _utils_fitViewport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/fitViewport */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/fitViewport.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/sort-prop-types */

/* eslint-disable react/require-default-props */

/* eslint-disable react/no-unused-prop-types */

/* eslint-disable react/no-access-state-in-setstate */

/* eslint-disable camelcase */

/* eslint-disable no-prototype-builtins */

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

/* eslint no-underscore-dangle: ["error", { "allow": ["", "__timestamp"] }] */







 // eslint-disable-next-line import/extensions


const {
  getScale
} = _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["CategoricalColorNamespace"];

function getCategories(fd, data) {
  const c = fd.color_picker || {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
  const fixedColor = [c.r, c.g, c.b, 255 * c.a];
  const colorFn = getScale(fd.color_scheme);
  const categories = {};
  data.forEach(d => {
    if (d.cat_color != null && !categories.hasOwnProperty(d.cat_color)) {
      let color;

      if (fd.dimension) {
        color = Object(_utils_colors__WEBPACK_IMPORTED_MODULE_5__["hexToRGB"])(colorFn(d.cat_color), c.a * 255);
      } else {
        color = fixedColor;
      }

      categories[d.cat_color] = {
        color,
        enabled: true
      };
    }
  });
  return categories;
}

const propTypes = {
  formData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  mapboxApiKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setControlValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  viewport: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  getLayer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  getPoints: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  payload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onAddFilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
class CategoricalDeckGLContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  /*
   * A Deck.gl container that handles categories.
   *
   * The container will have an interactive legend, populated from the
   * categories present in the data.
   */
  constructor(props) {
    super(props);

    _defineProperty(this, "containerRef", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    _defineProperty(this, "setTooltip", tooltip => {
      const {
        current
      } = this.containerRef;

      if (current) {
        current.setTooltip(tooltip);
      }
    });

    this.state = this.getStateFromProps(props);
    this.getLayers = this.getLayers.bind(this);
    this.onValuesChange = this.onValuesChange.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
    this.showSingleCategory = this.showSingleCategory.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.payload.form_data !== this.state.formData) {
      this.setState(_extends({}, this.getStateFromProps(nextProps)));
    }
  }

  onValuesChange(values) {
    this.setState({
      values: Array.isArray(values) ? values : [values, values + this.state.getStep(values)]
    });
  } // eslint-disable-next-line class-methods-use-this


  getStateFromProps(props, state) {
    const features = props.payload.data.features || [];
    const timestamps = features.map(f => f.__timestamp);
    const categories = getCategories(props.formData, features); // the state is computed only from the payload; if it hasn't changed, do
    // not recompute state since this would reset selections and/or the play
    // slider position due to changes in form controls

    if (state && props.payload.form_data === state.formData) {
      return _extends({}, state, {
        categories
      });
    } // the granularity has to be read from the payload form_data, not the
    // props formData which comes from the instantaneous controls state


    const granularity = props.payload.form_data.time_grain_sqla || props.payload.form_data.granularity || 'P1D';
    const {
      start,
      end,
      getStep,
      values,
      disabled
    } = Object(_utils_time__WEBPACK_IMPORTED_MODULE_6__["getPlaySliderParams"])(timestamps, granularity);
    const {
      width,
      height,
      formData
    } = props;
    let {
      viewport
    } = props;

    if (formData.autozoom) {
      viewport = Object(_utils_fitViewport__WEBPACK_IMPORTED_MODULE_8__["default"])(viewport, {
        width,
        height,
        points: props.getPoints(features)
      });
    }

    return {
      start,
      end,
      getStep,
      values,
      disabled,
      viewport,
      selected: [],
      lastClick: 0,
      formData: props.payload.form_data,
      categories
    };
  }

  getLayers(values) {
    const {
      getLayer,
      payload,
      formData: fd,
      onAddFilter
    } = this.props;
    let features = payload.data.features ? [...payload.data.features] : []; // Add colors from categories or fixed color

    features = this.addColor(features, fd); // Apply user defined data mutator if defined

    if (fd.js_data_mutator) {
      const jsFnMutator = Object(_utils_sandbox__WEBPACK_IMPORTED_MODULE_7__["default"])(fd.js_data_mutator);
      features = jsFnMutator(features);
    } // Filter by time


    if (values[0] === values[1] || values[1] === this.end) {
      features = features.filter(d => d.__timestamp >= values[0] && d.__timestamp <= values[1]);
    } else {
      features = features.filter(d => d.__timestamp >= values[0] && d.__timestamp < values[1]);
    } // Show only categories selected in the legend


    const cats = this.state.categories;

    if (fd.dimension) {
      features = features.filter(d => cats[d.cat_color] && cats[d.cat_color].enabled);
    }

    const filteredPayload = _extends({}, payload, {
      data: _extends({}, payload.data, {
        features
      })
    });

    return [getLayer(fd, filteredPayload, onAddFilter, this.setTooltip)];
  } // eslint-disable-next-line class-methods-use-this


  addColor(data, fd) {
    const c = fd.color_picker || {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
    const colorFn = getScale(fd.color_scheme);
    return data.map(d => {
      let color;

      if (fd.dimension) {
        color = Object(_utils_colors__WEBPACK_IMPORTED_MODULE_5__["hexToRGB"])(colorFn(d.cat_color), c.a * 255);
        return _extends({}, d, {
          color
        });
      }

      return d;
    });
  }

  toggleCategory(category) {
    const categoryState = this.state.categories[category];

    const categories = _extends({}, this.state.categories, {
      [category]: _extends({}, categoryState, {
        enabled: !categoryState.enabled
      })
    }); // if all categories are disabled, enable all -- similar to nvd3


    if (Object.values(categories).every(v => !v.enabled)) {
      /* eslint-disable no-param-reassign */
      Object.values(categories).forEach(v => {
        v.enabled = true;
      });
    }

    this.setState({
      categories
    });
  }

  showSingleCategory(category) {
    const categories = _extends({}, this.state.categories);
    /* eslint-disable no-param-reassign */


    Object.values(categories).forEach(v => {
      v.enabled = false;
    });
    categories[category].enabled = true;
    this.setState({
      categories
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        position: 'relative'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AnimatableDeckGLContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      ref: this.containerRef,
      getLayers: this.getLayers,
      start: this.state.start,
      end: this.state.end,
      getStep: this.state.getStep,
      values: this.state.values,
      disabled: this.state.disabled,
      viewport: this.state.viewport,
      mapboxApiAccessToken: this.props.mapboxApiKey,
      mapStyle: this.props.formData.mapbox_style,
      setControlValue: this.props.setControlValue,
      width: this.props.width,
      height: this.props.height
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Legend__WEBPACK_IMPORTED_MODULE_4__["default"], {
      categories: this.state.categories,
      toggleCategory: this.toggleCategory,
      showSingleCategory: this.showSingleCategory,
      position: this.props.formData.legend_position,
      format: this.props.formData.legend_format
    })));
  }

}
CategoricalDeckGLContainer.propTypes = propTypes;

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/BootstrapSliderWrapper.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/BootstrapSliderWrapper.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../css-loader??ref--7-1!./BootstrapSliderWrapper.css */ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/BootstrapSliderWrapper.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/BootstrapSliderWrapper.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/BootstrapSliderWrapper.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BootstrapSliderWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-slider */ "./node_modules/react-bootstrap-slider/dist/react-bootstrap-slider.js");
/* harmony import */ var react_bootstrap_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_slider_dist_css_bootstrap_slider_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-slider/dist/css/bootstrap-slider.min.css */ "./node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css");
/* harmony import */ var bootstrap_slider_dist_css_bootstrap_slider_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_slider_dist_css_bootstrap_slider_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BootstrapSliderWrapper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BootstrapSliderWrapper.css */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/BootstrapSliderWrapper.css");
/* harmony import */ var _BootstrapSliderWrapper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BootstrapSliderWrapper_css__WEBPACK_IMPORTED_MODULE_3__);
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




function BootstrapSliderWrapper(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "BootstrapSliderWrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_slider__WEBPACK_IMPORTED_MODULE_1___default.a, props));
}

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../css-loader??ref--7-1!./Legend.css */ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Legend; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js");
/* harmony import */ var _Legend_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Legend.css */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.css");
/* harmony import */ var _Legend_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Legend_css__WEBPACK_IMPORTED_MODULE_3__);
/* eslint-disable react/jsx-sort-default-props */

/* eslint-disable react/sort-prop-types */

/* eslint-disable jsx-a11y/anchor-is-valid */

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




const categoryDelimiter = ' - ';
const propTypes = {
  categories: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  toggleCategory: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  showSingleCategory: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  format: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([null, 'tl', 'tr', 'bl', 'br'])
};
const defaultProps = {
  categories: {},
  toggleCategory: () => {},
  showSingleCategory: () => {},
  format: null,
  position: 'tr'
};
class Legend extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  format(value) {
    if (!this.props.format) {
      return value;
    }

    const numValue = parseFloat(value);
    return Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["formatNumber"])(this.props.format, numValue);
  }

  formatCategoryLabel(k) {
    if (!this.props.format) {
      return k;
    }

    if (k.includes(categoryDelimiter)) {
      const values = k.split(categoryDelimiter);
      return this.format(values[0]) + categoryDelimiter + this.format(values[1]);
    }

    return this.format(k);
  }

  render() {
    if (Object.keys(this.props.categories).length === 0 || this.props.position === null) {
      return null;
    }

    const categories = Object.entries(this.props.categories).map((_ref) => {
      let [k, v] = _ref;
      const style = {
        color: "rgba(" + v.color.join(', ') + ")"
      };
      const icon = v.enabled ? '\u25FC' : '\u25FB';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: k
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        onClick: () => this.props.toggleCategory(k),
        onDoubleClick: () => this.props.showSingleCategory(k)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: style
      }, icon), " ", this.formatCategoryLabel(k)));
    });
    const vertical = this.props.position.charAt(0) === 't' ? 'top' : 'bottom';
    const horizontal = this.props.position.charAt(1) === 'r' ? 'right' : 'left';
    const style = {
      position: 'absolute',
      [vertical]: '0px',
      [horizontal]: '10px'
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "legend",
      style: style
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "categories"
    }, categories));
  }

}
Legend.propTypes = propTypes;
Legend.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/PlaySlider.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/PlaySlider.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../css-loader??ref--7-1!./PlaySlider.css */ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/PlaySlider.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/PlaySlider.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/PlaySlider.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlaySlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mousetrap */ "./node_modules/mousetrap/mousetrap.js");
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var _BootstrapSliderWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BootstrapSliderWrapper */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/BootstrapSliderWrapper.js");
/* harmony import */ var _PlaySlider_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlaySlider.css */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/PlaySlider.css");
/* harmony import */ var _PlaySlider_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PlaySlider_css__WEBPACK_IMPORTED_MODULE_5__);
/* eslint-disable react/jsx-sort-default-props */

/* eslint-disable react/sort-prop-types */

/* eslint-disable react/jsx-handler-names */

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable no-negated-condition */

/* eslint-disable react/forbid-prop-types */

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






const propTypes = {
  start: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  step: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  end: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  loopDuration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  maxFrames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['horizontal', 'vertical']),
  reversed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  range: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
const defaultProps = {
  onChange: () => {},
  loopDuration: 15000,
  maxFrames: 100,
  orientation: 'horizontal',
  reversed: false,
  disabled: false,
  range: true
};
class PlaySlider extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      intervalId: null
    };
    const range = props.end - props.start;
    const frames = Math.min(props.maxFrames, range / props.step);
    const width = range / frames;
    this.intervalMilliseconds = props.loopDuration / frames;
    this.increment = width < props.step ? props.step : width - width % props.step;
    this.onChange = this.onChange.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.stepBackward = this.stepBackward.bind(this);
    this.stepForward = this.stepForward.bind(this);
    this.getPlayClass = this.getPlayClass.bind(this);
    this.formatter = this.formatter.bind(this);
  }

  componentDidMount() {
    mousetrap__WEBPACK_IMPORTED_MODULE_2___default.a.bind(['space'], this.play);
  }

  componentWillUnmount() {
    mousetrap__WEBPACK_IMPORTED_MODULE_2___default.a.unbind(['space']);
  }

  onChange(event) {
    this.props.onChange(event.target.value);

    if (this.state.intervalId != null) {
      this.pause();
    }
  }

  getPlayClass() {
    if (this.state.intervalId == null) {
      return 'fa fa-play fa-lg slider-button';
    }

    return 'fa fa-pause fa-lg slider-button';
  }

  play() {
    if (this.props.disabled) {
      return;
    }

    if (this.state.intervalId != null) {
      this.pause();
    } else {
      const id = setInterval(this.stepForward, this.intervalMilliseconds);
      this.setState({
        intervalId: id
      });
    }
  }

  pause() {
    clearInterval(this.state.intervalId);
    this.setState({
      intervalId: null
    });
  }

  stepForward() {
    const {
      start,
      end,
      step,
      values,
      disabled
    } = this.props;

    if (disabled) {
      return;
    }

    const currentValues = Array.isArray(values) ? values : [values, values + step];
    const nextValues = currentValues.map(value => value + this.increment);
    const carriageReturn = nextValues[1] > end ? nextValues[0] - start : 0;
    this.props.onChange(nextValues.map(value => value - carriageReturn));
  }

  stepBackward() {
    const {
      start,
      end,
      step,
      values,
      disabled
    } = this.props;

    if (disabled) {
      return;
    }

    const currentValues = Array.isArray(values) ? values : [values, values + step];
    const nextValues = currentValues.map(value => value - this.increment);
    const carriageReturn = nextValues[0] < start ? end - nextValues[1] : 0;
    this.props.onChange(nextValues.map(value => value + carriageReturn));
  }

  formatter(values) {
    if (this.props.disabled) {
      return Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["t"])('Data has no time steps');
    }

    let parts = values;

    if (!Array.isArray(values)) {
      parts = [values];
    } else if (values[0] === values[1]) {
      parts = [values[0]];
    }

    return parts.map(value => new Date(value).toUTCString()).join(' : ');
  }

  render() {
    const {
      start,
      end,
      step,
      orientation,
      reversed,
      disabled,
      range,
      values
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "play-slider"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "play-slider-controls padded"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-step-backward fa-lg slider-button ",
      onClick: this.stepBackward
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: this.getPlayClass(),
      onClick: this.play
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-step-forward fa-lg slider-button ",
      onClick: this.stepForward
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "play-slider-scrobbler padded"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BootstrapSliderWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      value: range ? values : values[0],
      range: range,
      formatter: this.formatter,
      change: this.onChange,
      min: start,
      max: end,
      step: step,
      orientation: orientation,
      reversed: reversed,
      disabled: disabled ? 'disabled' : 'enabled'
    })));
  }

}
PlaySlider.propTypes = propTypes;
PlaySlider.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/factory.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/factory.js ***!
  \*****************************************************************************/
/*! exports provided: createDeckGLComponent, createCategoricalDeckGLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeckGLComponent", function() { return createDeckGLComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategoricalDeckGLComponent", function() { return createCategoricalDeckGLComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DeckGLContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeckGLContainer */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/DeckGLContainer.js");
/* harmony import */ var _CategoricalDeckGLContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CategoricalDeckGLContainer */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/CategoricalDeckGLContainer.js");
/* harmony import */ var _utils_fitViewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/fitViewport */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/fitViewport.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/sort-prop-types */

/* eslint-disable react/jsx-handler-names */

/* eslint-disable camelcase */

/* eslint-disable react/no-unused-prop-types */

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




 // eslint-disable-next-line import/extensions


const propTypes = {
  formData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  payload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setControlValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  viewport: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onAddFilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
const defaultProps = {
  onAddFilter() {}

};
function createDeckGLComponent(getLayer, getPoints) {
  // Higher order component
  class Component extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
    constructor(props) {
      super(props);

      _defineProperty(this, "containerRef", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

      _defineProperty(this, "setTooltip", tooltip => {
        const {
          current
        } = this.containerRef;

        if (current) {
          current.setTooltip(tooltip);
        }
      });

      const {
        width,
        height,
        formData
      } = props;
      let {
        viewport
      } = props;

      if (formData.autozoom) {
        viewport = Object(_utils_fitViewport__WEBPACK_IMPORTED_MODULE_5__["default"])(viewport, {
          width,
          height,
          points: getPoints(props.payload.data.features)
        });
      }

      this.state = {
        viewport,
        layer: this.computeLayer(props)
      };
      this.onViewportChange = this.onViewportChange.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      // Only recompute the layer if anything BUT the viewport has changed
      const nextFdNoVP = _extends({}, nextProps.formData, {
        viewport: null
      });

      const currFdNoVP = _extends({}, this.props.formData, {
        viewport: null
      });

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"])(nextFdNoVP, currFdNoVP) || nextProps.payload !== this.props.payload) {
        this.setState({
          layer: this.computeLayer(nextProps)
        });
      }
    }

    onViewportChange(viewport) {
      this.setState({
        viewport
      });
    }

    computeLayer(props) {
      const {
        formData,
        payload,
        onAddFilter
      } = props;
      return getLayer(formData, payload, onAddFilter, this.setTooltip);
    }

    render() {
      const {
        formData,
        payload,
        setControlValue,
        height,
        width
      } = this.props;
      const {
        layer,
        viewport
      } = this.state;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeckGLContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ref: this.containerRef,
        mapboxApiAccessToken: payload.data.mapboxApiKey,
        viewport: viewport,
        layers: [layer],
        mapStyle: formData.mapbox_style,
        setControlValue: setControlValue,
        width: width,
        height: height,
        onViewportChange: this.onViewportChange
      });
    }

  }

  Component.propTypes = propTypes;
  Component.defaultProps = defaultProps;
  return Component;
}
function createCategoricalDeckGLComponent(getLayer, getPoints) {
  function Component(props) {
    const {
      formData,
      payload,
      setControlValue,
      viewport,
      width,
      height
    } = props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CategoricalDeckGLContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      formData: formData,
      mapboxApiKey: payload.data.mapboxApiKey,
      setControlValue: setControlValue,
      viewport: viewport,
      getLayer: getLayer,
      payload: payload,
      getPoints: getPoints,
      width: width,
      height: height
    });
  }

  Component.propTypes = propTypes;
  Component.defaultProps = defaultProps;
  return Component;
}

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Grid/Grid.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Grid/Grid.js ***!
  \**************************************************************************************/
/*! exports provided: getLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayer", function() { return getLayer; });
/* harmony import */ var deck_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deck.gl */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/grid-layer/grid-layer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/common.js");
/* harmony import */ var _utils_sandbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/sandbox */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/sandbox.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../factory */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/factory.js");
/* harmony import */ var _TooltipRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../TooltipRow */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/TooltipRow.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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








function setTooltipContent(o) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "deckgl-tooltip"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TooltipRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Longitude and Latitude') + ": ",
    value: o.coordinate[0] + ", " + o.coordinate[1]
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TooltipRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Height') + ": ",
    value: "" + o.object.elevationValue
  }));
}

function getLayer(formData, payload, onAddFilter, setTooltip) {
  const fd = formData;
  const c = fd.color_picker;
  let data = payload.data.features.map(d => _extends({}, d, {
    color: [c.r, c.g, c.b, 255 * c.a]
  }));

  if (fd.js_data_mutator) {
    // Applying user defined data mutator if defined
    const jsFnMutator = Object(_utils_sandbox__WEBPACK_IMPORTED_MODULE_4__["default"])(fd.js_data_mutator);
    data = jsFnMutator(data);
  }

  const aggFunc = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getAggFunc"])(fd.js_agg_function, p => p.weight);
  return new deck_gl__WEBPACK_IMPORTED_MODULE_0__["default"](_extends({
    id: "grid-layer-" + fd.slice_id,
    data,
    pickable: true,
    cellSize: fd.grid_size,
    minColor: [0, 0, 0, 0],
    extruded: fd.extruded,
    maxColor: [c.r, c.g, c.b, 255 * c.a],
    outline: false,
    getElevationValue: aggFunc,
    getColorValue: aggFunc
  }, Object(_common__WEBPACK_IMPORTED_MODULE_3__["commonLayerProps"])(fd, setTooltip, setTooltipContent)));
}

function getPoints(data) {
  return data.map(d => d.position);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_factory__WEBPACK_IMPORTED_MODULE_5__["createDeckGLComponent"])(getLayer, getPoints));

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/computeBoundsFromPoints.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/computeBoundsFromPoints.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeBoundsFromPoints; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");

const LAT_LIMIT = [-90, 90];
const LNG_LIMIT = [-180, 180];
/**
 * Expand a coordinate range by `padding` and within limits, if needed
 */

function expandIfNeeded(_ref, _ref2, padding) {
  let [curMin, curMax] = _ref;
  let [minBound, maxBound] = _ref2;

  if (padding === void 0) {
    padding = 0.25;
  }

  return curMin < curMax ? [curMin, curMax] : [Math.max(minBound, curMin - padding), Math.min(maxBound, curMax + padding)];
}

function computeBoundsFromPoints(points) {
  const latBounds = expandIfNeeded(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["extent"])(points, x => x[1]), LAT_LIMIT);
  const lngBounds = expandIfNeeded(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["extent"])(points, x => x[0]), LNG_LIMIT);
  return [[lngBounds[0], latBounds[0]], [lngBounds[1], latBounds[1]]];
}

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/fitViewport.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/fitViewport.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fitViewport; });
/* harmony import */ var _math_gl_web_mercator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @math.gl/web-mercator */ "./node_modules/@math.gl/web-mercator/dist/esm/index.js");
/* harmony import */ var _computeBoundsFromPoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computeBoundsFromPoints */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/computeBoundsFromPoints.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function fitViewport(originalViewPort, _ref) {
  let {
    points,
    width,
    height,
    minExtent,
    maxZoom,
    offset,
    padding = 20
  } = _ref;
  const {
    bearing,
    pitch
  } = originalViewPort;
  const bounds = Object(_computeBoundsFromPoints__WEBPACK_IMPORTED_MODULE_1__["default"])(points);

  try {
    return _extends({}, Object(_math_gl_web_mercator__WEBPACK_IMPORTED_MODULE_0__["fitBounds"])({
      bounds,
      width,
      height,
      minExtent,
      maxZoom,
      offset,
      padding
    }), {
      bearing,
      pitch
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Could not fit viewport', error);
  }

  return originalViewPort;
}

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/time.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/time.js ***!
  \********************************************************************************/
/*! exports provided: truncate, getPlaySliderParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlaySliderParams", function() { return getPlaySliderParams; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-negated-condition */

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
 // array with the minimum values of each part of a timestamp -- note that
// months are zero-indexed in Javascript

const truncatePartTo = [1, // year
0, // month
1, // day
0, // hour
0, // minute
0, // second
0 // millisecond
];
function truncate(timestamp, step) {
  /*
   * Truncate timestamp down to duration resolution.
   */
  const lowerBound = moment__WEBPACK_IMPORTED_MODULE_0___default()(timestamp).subtract(step);
  const explodedTimestamp = timestamp.toArray();
  const explodedLowerBound = lowerBound.toArray();
  const firstDiffIndex = explodedTimestamp.map((part, i) => explodedLowerBound[i] !== part).indexOf(true);
  const dateParts = explodedTimestamp.map((part, i) => {
    if (i === firstDiffIndex) {
      // truncate down to closest `truncatePartTo[i] + n * step`
      const difference = part - explodedLowerBound[i];
      return part - (part - truncatePartTo[i]) % difference;
    }

    if (i < firstDiffIndex || firstDiffIndex === -1) {
      return part;
    }

    return truncatePartTo[i];
  });
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(dateParts);
}

function getStepSeconds(step, start) {
  /* Return number of seconds in a step.
   *
   * The step might be ambigous, eg, "1 month" has a variable number of
   * seconds, which is why we need to know the start time.
   */
  const startMillliseconds = parseInt(moment__WEBPACK_IMPORTED_MODULE_0___default()(start).format('x'), 10);
  const endMilliseconds = parseInt(moment__WEBPACK_IMPORTED_MODULE_0___default()(start).add(step).format('x'), 10);
  return endMilliseconds - startMillliseconds;
}

function getPlaySliderParams(timestamps, timeGrain) {
  const minTimestamp = moment__WEBPACK_IMPORTED_MODULE_0___default()(Math.min(...timestamps));
  const maxTimestamp = moment__WEBPACK_IMPORTED_MODULE_0___default()(Math.max(...timestamps));
  let step;
  let reference;

  if (timeGrain.includes('/')) {
    // Here, time grain is a time interval instead of a simple duration, either
    // `reference/duration` or `duration/reference`. We need to parse the
    // duration and make sure that start and end are in the right places. For
    // example, if `reference` is a Saturday and `duration` is 1 week (P1W)
    // then both start and end should be Saturdays.
    const parts = timeGrain.split('/', 2);

    if (parts[0].endsWith('Z')) {
      // ISO string
      reference = moment__WEBPACK_IMPORTED_MODULE_0___default()(parts[0]);
      step = moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(parts[1]);
    } else {
      reference = moment__WEBPACK_IMPORTED_MODULE_0___default()(parts[1]);
      step = moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(parts[0]);
    }
  } else {
    step = moment__WEBPACK_IMPORTED_MODULE_0___default.a.duration(timeGrain);
    reference = truncate(minTimestamp, step);
  } // find the largest `reference + n * step` smaller than the minimum timestamp


  let start;
  const minValue = minTimestamp.valueOf();

  for (start = reference.clone(); start.valueOf() < minValue;) {
    start.add(step);
  }

  for (; start.valueOf() > minValue;) {
    start.subtract(step);
  } // find the smallest `reference + n * step` larger than the maximum timestamp


  let end;
  const maxValue = maxTimestamp.valueOf();

  for (end = reference.clone(); end.valueOf() > maxValue;) {
    end.subtract(step);
  }

  for (; end.valueOf() < maxValue;) {
    end.add(step);
  }

  const values = timeGrain != null ? [start, start.clone().add(step)] : [start, end];
  const disabled = timestamps.every(timestamp => timestamp === null);
  return {
    start: parseInt(start.format('x'), 10),
    end: parseInt(end.format('x'), 10),
    getStep: getStepSeconds.bind(this, step),
    values: values.map(v => parseInt(v.format('x'), 10)),
    disabled
  };
}

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/create.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.create.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/define-property.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.setPrototypeOf;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/symbol/iterator.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-proto.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-proto.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.create.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.create.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js") });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-proto.js").set });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.symbol.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopd.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css":
/*!*************************************************************************!*\
  !*** ./node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../css-loader??ref--7-1!./bootstrap-slider.min.css */ "./node_modules/css-loader/index.js?!./node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/BootstrapSliderWrapper.css":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/BootstrapSliderWrapper.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.BootstrapSliderWrapper .slider-selection {\n  background: #efefef;\n}\n\n.BootstrapSliderWrapper .slider-handle {\n  background: #b3b3b3;\n}\n", "", {"version":3,"sources":["G:/workspace/boke-pro/superset-all/superset/superset-frontend/node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/BootstrapSliderWrapper.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;GAiBG;AACH;EACE,oBAAoB;CACrB;;AAED;EACE,oBAAoB;CACrB","file":"BootstrapSliderWrapper.css","sourcesContent":["/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.BootstrapSliderWrapper .slider-selection {\n  background: #efefef;\n}\n\n.BootstrapSliderWrapper .slider-handle {\n  background: #b3b3b3;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\ndiv.legend {\n  font-size: 90%;\n  position: absolute;\n  background: #fff;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);\n  margin: 24px;\n  padding: 12px 20px;\n  outline: none;\n  overflow-y: scroll;\n  max-height: 200px;\n}\n\nul.categories {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n\nul.categories li a {\n  color: rgb(51, 51, 51);\n  text-decoration: none;\n}\n\nul.categories li a span {\n  margin-right: 10px;\n}\n", "", {"version":3,"sources":["G:/workspace/boke-pro/superset-all/superset/superset-frontend/node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;GAiBG;AACH;EACE,eAAe;EACf,mBAAmB;EACnB,iBAAiB;EACjB,wCAAwC;EACxC,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,mBAAmB;EACnB,kBAAkB;CACnB;;AAED;EACE,iBAAiB;EACjB,gBAAgB;EAChB,UAAU;CACX;;AAED;EACE,uBAAuB;EACvB,sBAAsB;CACvB;;AAED;EACE,mBAAmB;CACpB","file":"Legend.css","sourcesContent":["/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\ndiv.legend {\n  font-size: 90%;\n  position: absolute;\n  background: #fff;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);\n  margin: 24px;\n  padding: 12px 20px;\n  outline: none;\n  overflow-y: scroll;\n  max-height: 200px;\n}\n\nul.categories {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n\nul.categories li a {\n  color: rgb(51, 51, 51);\n  text-decoration: none;\n}\n\nul.categories li a span {\n  margin-right: 10px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/PlaySlider.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/PlaySlider.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.play-slider {\n  display: flex;\n  height: 40px;\n  width: 100%;\n  margin: 0;\n}\n\n.play-slider-controls {\n  flex: 0 0 80px;\n  text-align: middle;\n}\n\n.play-slider-scrobbler {\n  flex: 1;\n}\n\n.slider.slider-horizontal {\n  width: 100% !important;\n}\n\n.slider-button {\n  color: #b3b3b3;\n  margin-right: 5px;\n}\n\ndiv.slider > div.tooltip.tooltip-main.top.in {\n  margin-left: 0 !important;\n}\n", "", {"version":3,"sources":["G:/workspace/boke-pro/superset-all/superset/superset-frontend/node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/PlaySlider.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;GAiBG;AACH;EACE,cAAc;EACd,aAAa;EACb,YAAY;EACZ,UAAU;CACX;;AAED;EACE,eAAe;EACf,mBAAmB;CACpB;;AAED;EACE,QAAQ;CACT;;AAED;EACE,uBAAuB;CACxB;;AAED;EACE,eAAe;EACf,kBAAkB;CACnB;;AAED;EACE,0BAA0B;CAC3B","file":"PlaySlider.css","sourcesContent":["/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n.play-slider {\n  display: flex;\n  height: 40px;\n  width: 100%;\n  margin: 0;\n}\n\n.play-slider-controls {\n  flex: 0 0 80px;\n  text-align: middle;\n}\n\n.play-slider-scrobbler {\n  flex: 1;\n}\n\n.slider.slider-horizontal {\n  width: 100% !important;\n}\n\n.slider-button {\n  color: #b3b3b3;\n  margin-right: 5px;\n}\n\ndiv.slider > div.tooltip.tooltip-main.top.in {\n  margin-left: 0 !important;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/*! =======================================================\n                      VERSION  10.4.0              \n========================================================= */\n/*! =========================================================\n * bootstrap-slider.js\n *\n * Maintainers:\n *\t\tKyle Kemp\n *\t\t\t- Twitter: @seiyria\n *\t\t\t- Github:  seiyria\n *\t\tRohit Kalkur\n *\t\t\t- Twitter: @Rovolutionary\n *\t\t\t- Github:  rovolution\n *\n * =========================================================\n  *\n * bootstrap-slider is released under the MIT License\n * Copyright (c) 2017 Kyle Kemp, Rohit Kalkur, and contributors\n * \n * Permission is hereby granted, free of charge, to any person\n * obtaining a copy of this software and associated documentation\n * files (the \"Software\"), to deal in the Software without\n * restriction, including without limitation the rights to use,\n * copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the\n * Software is furnished to do so, subject to the following\n * conditions:\n * \n * The above copyright notice and this permission notice shall be\n * included in all copies or substantial portions of the Software.\n * \n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n * OTHER DEALINGS IN THE SOFTWARE.\n *\n * ========================================================= */.slider{display:inline-block;vertical-align:middle;position:relative}.slider.slider-horizontal{width:210px;height:20px}.slider.slider-horizontal .slider-track{height:10px;width:100%;margin-top:-5px;top:50%;left:0}.slider.slider-horizontal .slider-selection,.slider.slider-horizontal .slider-track-low,.slider.slider-horizontal .slider-track-high{height:100%;top:0;bottom:0}.slider.slider-horizontal .slider-tick,.slider.slider-horizontal .slider-handle{margin-left:-10px}.slider.slider-horizontal .slider-tick.triangle,.slider.slider-horizontal .slider-handle.triangle{position:relative;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);border-width:0 10px 10px 10px;width:0;height:0;border-bottom-color:#2e6da4;margin-top:0}.slider.slider-horizontal .slider-tick-container{white-space:nowrap;position:absolute;top:0;left:0;width:100%}.slider.slider-horizontal .slider-tick-label-container{white-space:nowrap;margin-top:20px}.slider.slider-horizontal .slider-tick-label-container .slider-tick-label{padding-top:4px;display:inline-block;text-align:center}.slider.slider-horizontal .tooltip{-ms-transform:translateX(-50%);transform:translateX(-50%)}.slider.slider-horizontal.slider-rtl .slider-track{left:initial;right:0}.slider.slider-horizontal.slider-rtl .slider-tick,.slider.slider-horizontal.slider-rtl .slider-handle{margin-left:initial;margin-right:-10px}.slider.slider-horizontal.slider-rtl .slider-tick-container{left:initial;right:0}.slider.slider-horizontal.slider-rtl .tooltip{-ms-transform:translateX(50%);transform:translateX(50%)}.slider.slider-vertical{height:210px;width:20px}.slider.slider-vertical .slider-track{width:10px;height:100%;left:25%;top:0}.slider.slider-vertical .slider-selection{width:100%;left:0;top:0;bottom:0}.slider.slider-vertical .slider-track-low,.slider.slider-vertical .slider-track-high{width:100%;left:0;right:0}.slider.slider-vertical .slider-tick,.slider.slider-vertical .slider-handle{margin-top:-10px}.slider.slider-vertical .slider-tick.triangle,.slider.slider-vertical .slider-handle.triangle{border-width:10px 0 10px 10px;width:1px;height:1px;border-left-color:#2e6da4;border-right-color:#2e6da4;margin-left:0;margin-right:0}.slider.slider-vertical .slider-tick-label-container{white-space:nowrap}.slider.slider-vertical .slider-tick-label-container .slider-tick-label{padding-left:4px}.slider.slider-vertical .tooltip{-ms-transform:translateY(-50%);transform:translateY(-50%)}.slider.slider-vertical.slider-rtl .slider-track{left:initial;right:25%}.slider.slider-vertical.slider-rtl .slider-selection{left:initial;right:0}.slider.slider-vertical.slider-rtl .slider-tick.triangle,.slider.slider-vertical.slider-rtl .slider-handle.triangle{border-width:10px 10px 10px 0}.slider.slider-vertical.slider-rtl .slider-tick-label-container .slider-tick-label{padding-left:initial;padding-right:4px}.slider.slider-disabled .slider-handle{background-image:-webkit-linear-gradient(top,#dfdfdf 0,#bebebe 100%);background-image:-o-linear-gradient(top,#dfdfdf 0,#bebebe 100%);background-image:linear-gradient(to bottom,#dfdfdf 0,#bebebe 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdfdfdf',endColorstr='#ffbebebe',GradientType=0)}.slider.slider-disabled .slider-track{background-image:-webkit-linear-gradient(top,#e5e5e5 0,#e9e9e9 100%);background-image:-o-linear-gradient(top,#e5e5e5 0,#e9e9e9 100%);background-image:linear-gradient(to bottom,#e5e5e5 0,#e9e9e9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe5e5e5',endColorstr='#ffe9e9e9',GradientType=0);cursor:not-allowed}.slider input{display:none}.slider .tooltip{pointer-events:none}.slider .tooltip.top{margin-top:-36px}.slider .tooltip-inner{white-space:nowrap;max-width:none}.slider .hide{display:none}.slider-track{position:absolute;cursor:pointer;background-image:-webkit-linear-gradient(top,#f5f5f5 0,#f9f9f9 100%);background-image:-o-linear-gradient(top,#f5f5f5 0,#f9f9f9 100%);background-image:linear-gradient(to bottom,#f5f5f5 0,#f9f9f9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5',endColorstr='#fff9f9f9',GradientType=0);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);border-radius:4px}.slider-selection{position:absolute;background-image:-webkit-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:-o-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.slider-selection.tick-slider-selection{background-image:-webkit-linear-gradient(top,#8ac1ef 0,#82b3de 100%);background-image:-o-linear-gradient(top,#8ac1ef 0,#82b3de 100%);background-image:linear-gradient(to bottom,#8ac1ef 0,#82b3de 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff8ac1ef',endColorstr='#ff82b3de',GradientType=0)}.slider-track-low,.slider-track-high{position:absolute;background:transparent;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.slider-handle{position:absolute;top:0;width:20px;height:20px;background-color:#337ab7;background-image:-webkit-linear-gradient(top,#337ab7 0,#2e6da4 100%);background-image:-o-linear-gradient(top,#337ab7 0,#2e6da4 100%);background-image:linear-gradient(to bottom,#337ab7 0,#2e6da4 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7',endColorstr='#ff2e6da4',GradientType=0);filter:none;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);border:0 solid transparent}.slider-handle:hover{cursor:pointer}.slider-handle.round{border-radius:50%}.slider-handle.triangle{background:transparent none}.slider-handle.custom{background:transparent none}.slider-handle.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}.slider-tick{position:absolute;cursor:pointer;width:20px;height:20px;background-image:-webkit-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:-o-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;filter:none;opacity:.8;border:0 solid transparent}.slider-tick.round{border-radius:50%}.slider-tick.triangle{background:transparent none}.slider-tick.custom{background:transparent none}.slider-tick.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}.slider-tick.in-selection{background-image:-webkit-linear-gradient(top,#8ac1ef 0,#82b3de 100%);background-image:-o-linear-gradient(top,#8ac1ef 0,#82b3de 100%);background-image:linear-gradient(to bottom,#8ac1ef 0,#82b3de 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff8ac1ef',endColorstr='#ff82b3de',GradientType=0);opacity:1}", "", {"version":3,"sources":["G:/workspace/boke-pro/superset-all/superset/superset-frontend/node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css"],"names":[],"mappings":"AAAA;;4DAE4D;AAC5D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;+DAqC+D,QAAQ,qBAAqB,sBAAsB,iBAAiB,CAAC,0BAA0B,YAAY,WAAW,CAAC,wCAAwC,YAAY,WAAW,gBAAgB,QAAQ,MAAM,CAAC,qIAAqI,YAAY,MAAM,QAAQ,CAAC,gFAAgF,iBAAiB,CAAC,kGAAkG,kBAAkB,QAAQ,+BAA+B,2BAA2B,8BAA8B,QAAQ,SAAS,4BAA4B,YAAY,CAAC,iDAAiD,mBAAmB,kBAAkB,MAAM,OAAO,UAAU,CAAC,uDAAuD,mBAAmB,eAAe,CAAC,0EAA0E,gBAAgB,qBAAqB,iBAAiB,CAAC,mCAAmC,+BAA+B,0BAA0B,CAAC,mDAAmD,aAAa,OAAO,CAAC,sGAAsG,oBAAoB,kBAAkB,CAAC,4DAA4D,aAAa,OAAO,CAAC,8CAA8C,8BAA8B,yBAAyB,CAAC,wBAAwB,aAAa,UAAU,CAAC,sCAAsC,WAAW,YAAY,SAAS,KAAK,CAAC,0CAA0C,WAAW,OAAO,MAAM,QAAQ,CAAC,qFAAqF,WAAW,OAAO,OAAO,CAAC,4EAA4E,gBAAgB,CAAC,8FAA8F,8BAA8B,UAAU,WAAW,0BAA0B,2BAA2B,cAAc,cAAc,CAAC,qDAAqD,kBAAkB,CAAC,wEAAwE,gBAAgB,CAAC,iCAAiC,+BAA+B,0BAA0B,CAAC,iDAAiD,aAAa,SAAS,CAAC,qDAAqD,aAAa,OAAO,CAAC,oHAAoH,6BAA6B,CAAC,mFAAmF,qBAAqB,iBAAiB,CAAC,uCAAuC,qEAAqE,gEAAgE,mEAAmE,2BAA2B,mHAAmH,CAAC,sCAAsC,qEAAqE,gEAAgE,mEAAmE,2BAA2B,oHAAoH,kBAAkB,CAAC,cAAc,YAAY,CAAC,iBAAiB,mBAAmB,CAAC,qBAAqB,gBAAgB,CAAC,uBAAuB,mBAAmB,cAAc,CAAC,cAAc,YAAY,CAAC,cAAc,kBAAkB,eAAe,qEAAqE,gEAAgE,mEAAmE,2BAA2B,oHAAoH,mDAAmD,2CAA2C,iBAAiB,CAAC,kBAAkB,kBAAkB,qEAAqE,gEAAgE,mEAAmE,2BAA2B,oHAAoH,mDAAmD,2CAA2C,8BAA8B,2BAA2B,sBAAsB,iBAAiB,CAAC,wCAAwC,qEAAqE,gEAAgE,mEAAmE,2BAA2B,mHAAmH,CAAC,qCAAqC,kBAAkB,uBAAuB,8BAA8B,2BAA2B,sBAAsB,iBAAiB,CAAC,eAAe,kBAAkB,MAAM,WAAW,YAAY,yBAAyB,qEAAqE,gEAAgE,mEAAmE,2BAA2B,oHAAoH,YAAY,gFAAgF,wEAAwE,0BAA0B,CAAC,qBAAqB,cAAc,CAAC,qBAAqB,iBAAiB,CAAC,wBAAwB,2BAA2B,CAAC,sBAAsB,2BAA2B,CAAC,8BAA8B,iBAAiB,eAAe,gBAAgB,aAAa,CAAC,aAAa,kBAAkB,eAAe,WAAW,YAAY,qEAAqE,gEAAgE,mEAAmE,2BAA2B,oHAAoH,mDAAmD,2CAA2C,8BAA8B,2BAA2B,sBAAsB,YAAY,WAAW,0BAA0B,CAAC,mBAAmB,iBAAiB,CAAC,sBAAsB,2BAA2B,CAAC,oBAAoB,2BAA2B,CAAC,4BAA4B,iBAAiB,eAAe,gBAAgB,aAAa,CAAC,0BAA0B,qEAAqE,gEAAgE,mEAAmE,2BAA2B,oHAAoH,SAAS,CAAC","file":"bootstrap-slider.min.css","sourcesContent":["/*! =======================================================\n                      VERSION  10.4.0              \n========================================================= */\n/*! =========================================================\n * bootstrap-slider.js\n *\n * Maintainers:\n *\t\tKyle Kemp\n *\t\t\t- Twitter: @seiyria\n *\t\t\t- Github:  seiyria\n *\t\tRohit Kalkur\n *\t\t\t- Twitter: @Rovolutionary\n *\t\t\t- Github:  rovolution\n *\n * =========================================================\n  *\n * bootstrap-slider is released under the MIT License\n * Copyright (c) 2017 Kyle Kemp, Rohit Kalkur, and contributors\n * \n * Permission is hereby granted, free of charge, to any person\n * obtaining a copy of this software and associated documentation\n * files (the \"Software\"), to deal in the Software without\n * restriction, including without limitation the rights to use,\n * copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the\n * Software is furnished to do so, subject to the following\n * conditions:\n * \n * The above copyright notice and this permission notice shall be\n * included in all copies or substantial portions of the Software.\n * \n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n * OTHER DEALINGS IN THE SOFTWARE.\n *\n * ========================================================= */.slider{display:inline-block;vertical-align:middle;position:relative}.slider.slider-horizontal{width:210px;height:20px}.slider.slider-horizontal .slider-track{height:10px;width:100%;margin-top:-5px;top:50%;left:0}.slider.slider-horizontal .slider-selection,.slider.slider-horizontal .slider-track-low,.slider.slider-horizontal .slider-track-high{height:100%;top:0;bottom:0}.slider.slider-horizontal .slider-tick,.slider.slider-horizontal .slider-handle{margin-left:-10px}.slider.slider-horizontal .slider-tick.triangle,.slider.slider-horizontal .slider-handle.triangle{position:relative;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);border-width:0 10px 10px 10px;width:0;height:0;border-bottom-color:#2e6da4;margin-top:0}.slider.slider-horizontal .slider-tick-container{white-space:nowrap;position:absolute;top:0;left:0;width:100%}.slider.slider-horizontal .slider-tick-label-container{white-space:nowrap;margin-top:20px}.slider.slider-horizontal .slider-tick-label-container .slider-tick-label{padding-top:4px;display:inline-block;text-align:center}.slider.slider-horizontal .tooltip{-ms-transform:translateX(-50%);transform:translateX(-50%)}.slider.slider-horizontal.slider-rtl .slider-track{left:initial;right:0}.slider.slider-horizontal.slider-rtl .slider-tick,.slider.slider-horizontal.slider-rtl .slider-handle{margin-left:initial;margin-right:-10px}.slider.slider-horizontal.slider-rtl .slider-tick-container{left:initial;right:0}.slider.slider-horizontal.slider-rtl .tooltip{-ms-transform:translateX(50%);transform:translateX(50%)}.slider.slider-vertical{height:210px;width:20px}.slider.slider-vertical .slider-track{width:10px;height:100%;left:25%;top:0}.slider.slider-vertical .slider-selection{width:100%;left:0;top:0;bottom:0}.slider.slider-vertical .slider-track-low,.slider.slider-vertical .slider-track-high{width:100%;left:0;right:0}.slider.slider-vertical .slider-tick,.slider.slider-vertical .slider-handle{margin-top:-10px}.slider.slider-vertical .slider-tick.triangle,.slider.slider-vertical .slider-handle.triangle{border-width:10px 0 10px 10px;width:1px;height:1px;border-left-color:#2e6da4;border-right-color:#2e6da4;margin-left:0;margin-right:0}.slider.slider-vertical .slider-tick-label-container{white-space:nowrap}.slider.slider-vertical .slider-tick-label-container .slider-tick-label{padding-left:4px}.slider.slider-vertical .tooltip{-ms-transform:translateY(-50%);transform:translateY(-50%)}.slider.slider-vertical.slider-rtl .slider-track{left:initial;right:25%}.slider.slider-vertical.slider-rtl .slider-selection{left:initial;right:0}.slider.slider-vertical.slider-rtl .slider-tick.triangle,.slider.slider-vertical.slider-rtl .slider-handle.triangle{border-width:10px 10px 10px 0}.slider.slider-vertical.slider-rtl .slider-tick-label-container .slider-tick-label{padding-left:initial;padding-right:4px}.slider.slider-disabled .slider-handle{background-image:-webkit-linear-gradient(top,#dfdfdf 0,#bebebe 100%);background-image:-o-linear-gradient(top,#dfdfdf 0,#bebebe 100%);background-image:linear-gradient(to bottom,#dfdfdf 0,#bebebe 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdfdfdf',endColorstr='#ffbebebe',GradientType=0)}.slider.slider-disabled .slider-track{background-image:-webkit-linear-gradient(top,#e5e5e5 0,#e9e9e9 100%);background-image:-o-linear-gradient(top,#e5e5e5 0,#e9e9e9 100%);background-image:linear-gradient(to bottom,#e5e5e5 0,#e9e9e9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe5e5e5',endColorstr='#ffe9e9e9',GradientType=0);cursor:not-allowed}.slider input{display:none}.slider .tooltip{pointer-events:none}.slider .tooltip.top{margin-top:-36px}.slider .tooltip-inner{white-space:nowrap;max-width:none}.slider .hide{display:none}.slider-track{position:absolute;cursor:pointer;background-image:-webkit-linear-gradient(top,#f5f5f5 0,#f9f9f9 100%);background-image:-o-linear-gradient(top,#f5f5f5 0,#f9f9f9 100%);background-image:linear-gradient(to bottom,#f5f5f5 0,#f9f9f9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5',endColorstr='#fff9f9f9',GradientType=0);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);border-radius:4px}.slider-selection{position:absolute;background-image:-webkit-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:-o-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.slider-selection.tick-slider-selection{background-image:-webkit-linear-gradient(top,#8ac1ef 0,#82b3de 100%);background-image:-o-linear-gradient(top,#8ac1ef 0,#82b3de 100%);background-image:linear-gradient(to bottom,#8ac1ef 0,#82b3de 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff8ac1ef',endColorstr='#ff82b3de',GradientType=0)}.slider-track-low,.slider-track-high{position:absolute;background:transparent;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.slider-handle{position:absolute;top:0;width:20px;height:20px;background-color:#337ab7;background-image:-webkit-linear-gradient(top,#337ab7 0,#2e6da4 100%);background-image:-o-linear-gradient(top,#337ab7 0,#2e6da4 100%);background-image:linear-gradient(to bottom,#337ab7 0,#2e6da4 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff337ab7',endColorstr='#ff2e6da4',GradientType=0);filter:none;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);border:0 solid transparent}.slider-handle:hover{cursor:pointer}.slider-handle.round{border-radius:50%}.slider-handle.triangle{background:transparent none}.slider-handle.custom{background:transparent none}.slider-handle.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}.slider-tick{position:absolute;cursor:pointer;width:20px;height:20px;background-image:-webkit-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:-o-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;filter:none;opacity:.8;border:0 solid transparent}.slider-tick.round{border-radius:50%}.slider-tick.triangle{background:transparent none}.slider-tick.custom{background:transparent none}.slider-tick.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}.slider-tick.in-selection{background-image:-webkit-linear-gradient(top,#8ac1ef 0,#82b3de 100%);background-image:-o-linear-gradient(top,#8ac1ef 0,#82b3de 100%);background-image:linear-gradient(to bottom,#8ac1ef 0,#82b3de 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff8ac1ef',endColorstr='#ff82b3de',GradientType=0);opacity:1}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/mousetrap/mousetrap.js":
/*!*********************************************!*\
  !*** ./node_modules/mousetrap/mousetrap.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false */
/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.2
 * @url craig.is/killing/mice
 */
(function(window, document, undefined) {

    // Check if mousetrap is used inside browser, if not, return
    if (!window) {
        return;
    }

    /**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */
    var _MAP = {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        16: 'shift',
        17: 'ctrl',
        18: 'alt',
        20: 'capslock',
        27: 'esc',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'ins',
        46: 'del',
        91: 'meta',
        93: 'meta',
        224: 'meta'
    };

    /**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */
    var _KEYCODE_MAP = {
        106: '*',
        107: '+',
        109: '-',
        110: '.',
        111 : '/',
        186: ';',
        187: '=',
        188: ',',
        189: '-',
        190: '.',
        191: '/',
        192: '`',
        219: '[',
        220: '\\',
        221: ']',
        222: '\''
    };

    /**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */
    var _SHIFT_MAP = {
        '~': '`',
        '!': '1',
        '@': '2',
        '#': '3',
        '$': '4',
        '%': '5',
        '^': '6',
        '&': '7',
        '*': '8',
        '(': '9',
        ')': '0',
        '_': '-',
        '+': '=',
        ':': ';',
        '\"': '\'',
        '<': ',',
        '>': '.',
        '?': '/',
        '|': '\\'
    };

    /**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */
    var _SPECIAL_ALIASES = {
        'option': 'alt',
        'command': 'meta',
        'return': 'enter',
        'escape': 'esc',
        'plus': '+',
        'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
    };

    /**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */
    var _REVERSE_MAP;

    /**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */
    for (var i = 1; i < 20; ++i) {
        _MAP[111 + i] = 'f' + i;
    }

    /**
     * loop through to map numbers on the numeric keypad
     */
    for (i = 0; i <= 9; ++i) {

        // This needs to use a string cause otherwise since 0 is falsey
        // mousetrap will never fire for numpad 0 pressed as part of a keydown
        // event.
        //
        // @see https://github.com/ccampbell/mousetrap/pull/258
        _MAP[i + 96] = i.toString();
    }

    /**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */
    function _addEvent(object, type, callback) {
        if (object.addEventListener) {
            object.addEventListener(type, callback, false);
            return;
        }

        object.attachEvent('on' + type, callback);
    }

    /**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */
    function _characterFromEvent(e) {

        // for keypress events we should return the character as is
        if (e.type == 'keypress') {
            var character = String.fromCharCode(e.which);

            // if the shift key is not pressed then it is safe to assume
            // that we want the character to be lowercase.  this means if
            // you accidentally have caps lock on then your key bindings
            // will continue to work
            //
            // the only side effect that might not be desired is if you
            // bind something like 'A' cause you want to trigger an
            // event when capital A is pressed caps lock will no longer
            // trigger the event.  shift+a will though.
            if (!e.shiftKey) {
                character = character.toLowerCase();
            }

            return character;
        }

        // for non keypress events the special maps are needed
        if (_MAP[e.which]) {
            return _MAP[e.which];
        }

        if (_KEYCODE_MAP[e.which]) {
            return _KEYCODE_MAP[e.which];
        }

        // if it is not in the special map

        // with keydown and keyup events the character seems to always
        // come in as an uppercase character whether you are pressing shift
        // or not.  we should make sure it is always lowercase for comparisons
        return String.fromCharCode(e.which).toLowerCase();
    }

    /**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */
    function _modifiersMatch(modifiers1, modifiers2) {
        return modifiers1.sort().join(',') === modifiers2.sort().join(',');
    }

    /**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */
    function _eventModifiers(e) {
        var modifiers = [];

        if (e.shiftKey) {
            modifiers.push('shift');
        }

        if (e.altKey) {
            modifiers.push('alt');
        }

        if (e.ctrlKey) {
            modifiers.push('ctrl');
        }

        if (e.metaKey) {
            modifiers.push('meta');
        }

        return modifiers;
    }

    /**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _preventDefault(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return;
        }

        e.returnValue = false;
    }

    /**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */
    function _stopPropagation(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return;
        }

        e.cancelBubble = true;
    }

    /**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */
    function _isModifier(key) {
        return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
    }

    /**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */
    function _getReverseMap() {
        if (!_REVERSE_MAP) {
            _REVERSE_MAP = {};
            for (var key in _MAP) {

                // pull out the numeric keypad from here cause keypress should
                // be able to detect the keys from the character
                if (key > 95 && key < 112) {
                    continue;
                }

                if (_MAP.hasOwnProperty(key)) {
                    _REVERSE_MAP[_MAP[key]] = key;
                }
            }
        }
        return _REVERSE_MAP;
    }

    /**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */
    function _pickBestAction(key, modifiers, action) {

        // if no action was picked in we should try to pick the one
        // that we think would work best for this key
        if (!action) {
            action = _getReverseMap()[key] ? 'keydown' : 'keypress';
        }

        // modifier keys don't work as expected with keypress,
        // switch to keydown
        if (action == 'keypress' && modifiers.length) {
            action = 'keydown';
        }

        return action;
    }

    /**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */
    function _keysFromString(combination) {
        if (combination === '+') {
            return ['+'];
        }

        combination = combination.replace(/\+{2}/g, '+plus');
        return combination.split('+');
    }

    /**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */
    function _getKeyInfo(combination, action) {
        var keys;
        var key;
        var i;
        var modifiers = [];

        // take the keys from this pattern and figure out what the actual
        // pattern is all about
        keys = _keysFromString(combination);

        for (i = 0; i < keys.length; ++i) {
            key = keys[i];

            // normalize key names
            if (_SPECIAL_ALIASES[key]) {
                key = _SPECIAL_ALIASES[key];
            }

            // if this is not a keypress event then we should
            // be smart about using shift keys
            // this will only work for US keyboards however
            if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                key = _SHIFT_MAP[key];
                modifiers.push('shift');
            }

            // if this key is a modifier then add it to the list of modifiers
            if (_isModifier(key)) {
                modifiers.push(key);
            }
        }

        // depending on what the key combination is
        // we will try to pick the best event for it
        action = _pickBestAction(key, modifiers, action);

        return {
            key: key,
            modifiers: modifiers,
            action: action
        };
    }

    function _belongsTo(element, ancestor) {
        if (element === null || element === document) {
            return false;
        }

        if (element === ancestor) {
            return true;
        }

        return _belongsTo(element.parentNode, ancestor);
    }

    function Mousetrap(targetElement) {
        var self = this;

        targetElement = targetElement || document;

        if (!(self instanceof Mousetrap)) {
            return new Mousetrap(targetElement);
        }

        /**
         * element to attach key events to
         *
         * @type {Element}
         */
        self.target = targetElement;

        /**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */
        self._callbacks = {};

        /**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */
        self._directMap = {};

        /**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */
        var _sequenceLevels = {};

        /**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */
        var _resetTimer;

        /**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */
        var _ignoreNextKeyup = false;

        /**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */
        var _ignoreNextKeypress = false;

        /**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */
        var _nextExpectedAction = false;

        /**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */
        function _resetSequences(doNotReset) {
            doNotReset = doNotReset || {};

            var activeSequences = false,
                key;

            for (key in _sequenceLevels) {
                if (doNotReset[key]) {
                    activeSequences = true;
                    continue;
                }
                _sequenceLevels[key] = 0;
            }

            if (!activeSequences) {
                _nextExpectedAction = false;
            }
        }

        /**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */
        function _getMatches(character, modifiers, e, sequenceName, combination, level) {
            var i;
            var callback;
            var matches = [];
            var action = e.type;

            // if there are no events related to this keycode
            if (!self._callbacks[character]) {
                return [];
            }

            // if a modifier key is coming up on its own we should allow it
            if (action == 'keyup' && _isModifier(character)) {
                modifiers = [character];
            }

            // loop through all callbacks for the key that was pressed
            // and see if any of them match
            for (i = 0; i < self._callbacks[character].length; ++i) {
                callback = self._callbacks[character][i];

                // if a sequence name is not specified, but this is a sequence at
                // the wrong level then move onto the next match
                if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                    continue;
                }

                // if the action we are looking for doesn't match the action we got
                // then we should keep going
                if (action != callback.action) {
                    continue;
                }

                // if this is a keypress event and the meta key and control key
                // are not pressed that means that we need to only look at the
                // character, otherwise check the modifiers as well
                //
                // chrome will not fire a keypress if meta or control is down
                // safari will fire a keypress if meta or meta+shift is down
                // firefox will fire a keypress if meta or control is down
                if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                    // when you bind a combination or sequence a second time it
                    // should overwrite the first one.  if a sequenceName or
                    // combination is specified in this call it does just that
                    //
                    // @todo make deleting its own method?
                    var deleteCombo = !sequenceName && callback.combo == combination;
                    var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                    if (deleteCombo || deleteSequence) {
                        self._callbacks[character].splice(i, 1);
                    }

                    matches.push(callback);
                }
            }

            return matches;
        }

        /**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */
        function _fireCallback(callback, e, combo, sequence) {

            // if this event should not happen stop here
            if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                return;
            }

            if (callback(e, combo) === false) {
                _preventDefault(e);
                _stopPropagation(e);
            }
        }

        /**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */
        self._handleKey = function(character, modifiers, e) {
            var callbacks = _getMatches(character, modifiers, e);
            var i;
            var doNotReset = {};
            var maxLevel = 0;
            var processedSequenceCallback = false;

            // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
            for (i = 0; i < callbacks.length; ++i) {
                if (callbacks[i].seq) {
                    maxLevel = Math.max(maxLevel, callbacks[i].level);
                }
            }

            // loop through matching callbacks for this key event
            for (i = 0; i < callbacks.length; ++i) {

                // fire for all sequence callbacks
                // this is because if for example you have multiple sequences
                // bound such as "g i" and "g t" they both need to fire the
                // callback for matching g cause otherwise you can only ever
                // match the first one
                if (callbacks[i].seq) {

                    // only fire callbacks for the maxLevel to prevent
                    // subsequences from also firing
                    //
                    // for example 'a option b' should not cause 'option b' to fire
                    // even though 'option b' is part of the other sequence
                    //
                    // any sequences that do not match here will be discarded
                    // below by the _resetSequences call
                    if (callbacks[i].level != maxLevel) {
                        continue;
                    }

                    processedSequenceCallback = true;

                    // keep a list of which sequences were matches for later
                    doNotReset[callbacks[i].seq] = 1;
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                    continue;
                }

                // if there were no sequence matches but we are still here
                // that means this is a regular match so we should fire that
                if (!processedSequenceCallback) {
                    _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                }
            }

            // if the key you pressed matches the type of sequence without
            // being a modifier (ie "keyup" or "keypress") then we should
            // reset all sequences that were not matched by this event
            //
            // this is so, for example, if you have the sequence "h a t" and you
            // type "h e a r t" it does not match.  in this case the "e" will
            // cause the sequence to reset
            //
            // modifier keys are ignored because you can have a sequence
            // that contains modifiers such as "enter ctrl+space" and in most
            // cases the modifier key will be pressed before the next key
            //
            // also if you have a sequence such as "ctrl+b a" then pressing the
            // "b" key will trigger a "keypress" and a "keydown"
            //
            // the "keydown" is expected when there is a modifier, but the
            // "keypress" ends up matching the _nextExpectedAction since it occurs
            // after and that causes the sequence to reset
            //
            // we ignore keypresses in a sequence that directly follow a keydown
            // for the same character
            var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
            if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                _resetSequences(doNotReset);
            }

            _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
        };

        /**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */
        function _handleKeyEvent(e) {

            // normalize e.which for key events
            // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
            if (typeof e.which !== 'number') {
                e.which = e.keyCode;
            }

            var character = _characterFromEvent(e);

            // no character found then stop
            if (!character) {
                return;
            }

            // need to use === for the character check because the character can be 0
            if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                _ignoreNextKeyup = false;
                return;
            }

            self.handleKey(character, _eventModifiers(e), e);
        }

        /**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */
        function _resetSequenceTimer() {
            clearTimeout(_resetTimer);
            _resetTimer = setTimeout(_resetSequences, 1000);
        }

        /**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */
        function _bindSequence(combo, keys, callback, action) {

            // start off by adding a sequence level record for this combination
            // and setting the level to 0
            _sequenceLevels[combo] = 0;

            /**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */
            function _increaseSequence(nextAction) {
                return function() {
                    _nextExpectedAction = nextAction;
                    ++_sequenceLevels[combo];
                    _resetSequenceTimer();
                };
            }

            /**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */
            function _callbackAndReset(e) {
                _fireCallback(callback, e, combo);

                // we should ignore the next key up if the action is key down
                // or keypress.  this is so if you finish a sequence and
                // release the key the final key will not trigger a keyup
                if (action !== 'keyup') {
                    _ignoreNextKeyup = _characterFromEvent(e);
                }

                // weird race condition if a sequence ends with the key
                // another sequence begins with
                setTimeout(_resetSequences, 10);
            }

            // loop through keys one at a time and bind the appropriate callback
            // function.  for any key leading up to the final one it should
            // increase the sequence. after the final, it should reset all sequences
            //
            // if an action is specified in the original bind call then that will
            // be used throughout.  otherwise we will pass the action that the
            // next key in the sequence should match.  this allows a sequence
            // to mix and match keypress and keydown events depending on which
            // ones are better suited to the key provided
            for (var i = 0; i < keys.length; ++i) {
                var isFinal = i + 1 === keys.length;
                var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                _bindSingle(keys[i], wrappedCallback, action, combo, i);
            }
        }

        /**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */
        function _bindSingle(combination, callback, action, sequenceName, level) {

            // store a direct mapped reference for use with Mousetrap.trigger
            self._directMap[combination + ':' + action] = callback;

            // make sure multiple spaces in a row become a single space
            combination = combination.replace(/\s+/g, ' ');

            var sequence = combination.split(' ');
            var info;

            // if this pattern is a sequence of keys then run through this method
            // to reprocess each pattern one key at a time
            if (sequence.length > 1) {
                _bindSequence(combination, sequence, callback, action);
                return;
            }

            info = _getKeyInfo(combination, action);

            // make sure to initialize array if this is the first time
            // a callback is added for this key
            self._callbacks[info.key] = self._callbacks[info.key] || [];

            // remove an existing match if there is one
            _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

            // add this call back to the array
            // if it is a sequence put it at the beginning
            // if not put it at the end
            //
            // this is important because the way these are processed expects
            // the sequence ones to come first
            self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                callback: callback,
                modifiers: info.modifiers,
                action: info.action,
                seq: sequenceName,
                level: level,
                combo: combination
            });
        }

        /**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */
        self._bindMultiple = function(combinations, callback, action) {
            for (var i = 0; i < combinations.length; ++i) {
                _bindSingle(combinations[i], callback, action);
            }
        };

        // start!
        _addEvent(targetElement, 'keypress', _handleKeyEvent);
        _addEvent(targetElement, 'keydown', _handleKeyEvent);
        _addEvent(targetElement, 'keyup', _handleKeyEvent);
    }

    /**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */
    Mousetrap.prototype.bind = function(keys, callback, action) {
        var self = this;
        keys = keys instanceof Array ? keys : [keys];
        self._bindMultiple.call(self, keys, callback, action);
        return self;
    };

    /**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */
    Mousetrap.prototype.unbind = function(keys, action) {
        var self = this;
        return self.bind.call(self, keys, function() {}, action);
    };

    /**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */
    Mousetrap.prototype.trigger = function(keys, action) {
        var self = this;
        if (self._directMap[keys + ':' + action]) {
            self._directMap[keys + ':' + action]({}, keys);
        }
        return self;
    };

    /**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */
    Mousetrap.prototype.reset = function() {
        var self = this;
        self._callbacks = {};
        self._directMap = {};
        return self;
    };

    /**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */
    Mousetrap.prototype.stopCallback = function(e, element) {
        var self = this;

        // if the element has the class "mousetrap" then no need to stop
        if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
            return false;
        }

        if (_belongsTo(element, self.target)) {
            return false;
        }

        // stop for input, select, and textarea
        return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
    };

    /**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */
    Mousetrap.prototype.handleKey = function() {
        var self = this;
        return self._handleKey.apply(self, arguments);
    };

    /**
     * allow custom key mappings
     */
    Mousetrap.addKeycodes = function(object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                _MAP[key] = object[key];
            }
        }
        _REVERSE_MAP = null;
    };

    /**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */
    Mousetrap.init = function() {
        var documentMousetrap = Mousetrap(document);
        for (var method in documentMousetrap) {
            if (method.charAt(0) !== '_') {
                Mousetrap[method] = (function(method) {
                    return function() {
                        return documentMousetrap[method].apply(documentMousetrap, arguments);
                    };
                } (method));
            }
        }
    };

    Mousetrap.init();

    // expose mousetrap to the global object
    window.Mousetrap = Mousetrap;

    // expose as a common js module
    if ( true && module.exports) {
        module.exports = Mousetrap;
    }

    // expose mousetrap as an AMD module
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return Mousetrap;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);


/***/ }),

/***/ "./node_modules/react-bootstrap-slider/dist/react-bootstrap-slider.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-bootstrap-slider/dist/react-bootstrap-slider.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js"), __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js"), __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js"), __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! bootstrap-slider */ "./node_modules/react-bootstrap-slider/node_modules/bootstrap-slider/dist/bootstrap-slider.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _extends2, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _inherits2, _react, _propTypes, _bootstrapSlider) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ReactBootstrapSlider = undefined;

  var _extends3 = _interopRequireDefault(_extends2);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _bootstrapSlider2 = _interopRequireDefault(_bootstrapSlider);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var ReactBootstrapSlider = exports.ReactBootstrapSlider = function (_React$Component) {
    (0, _inherits3.default)(ReactBootstrapSlider, _React$Component);

    function ReactBootstrapSlider() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, ReactBootstrapSlider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ReactBootstrapSlider.__proto__ || Object.getPrototypeOf(ReactBootstrapSlider)).call.apply(_ref, [this].concat(args))), _this), _this.checkAndDoDisabled = function () {
        var sliderEnable = _this.props.disabled !== "disabled";
        var currentlyEnabled = _this.mySlider.isEnabled();
        if (sliderEnable) {
          if (!currentlyEnabled) {
            _this.mySlider.enable();
          }
        } else {
          if (currentlyEnabled) {
            _this.mySlider.disable();
          }
        }
      }, _this.updateSliderValues = function () {
        if (typeof _this.props.min !== "undefined" && (typeof _this.mySlider.min !== "undefined" || typeof _this.mySlider.options.min !== "undefined")) {
          _this.mySlider.setAttribute("min", _this.props.min);
        }
        if (typeof _this.props.max !== "undefined" && (typeof _this.mySlider.max !== "undefined" || typeof _this.mySlider.options.max !== "undefined")) {
          _this.mySlider.setAttribute("max", _this.props.max);
        }
        if (typeof _this.props.step !== "undefined" && (typeof _this.mySlider.step !== "undefined" || typeof _this.mySlider.options.step !== "undefined")) {
          _this.mySlider.setAttribute("step", _this.props.step);
        }

        _this.mySlider.setValue(_this.props.value);
        _this.checkAndDoDisabled();
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
    // constructor(props) {
    //   super(props);
    //   // this.updateSliderValues = this.updateSliderValues.bind(this);
    //   // this.checkAndDoDisabled = this.checkAndDoDisabled.bind(this);
    // }

    (0, _createClass3.default)(ReactBootstrapSlider, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var that = this;
        var sliderAttributes = (0, _extends3.default)({}, this.props, {
          tooltip: this.props.tooltip || "show"
        });
        // console.log("sliderAttributes = " + JSON.stringify(sliderAttributes, null, 4));

        this.mySlider = new _bootstrapSlider2.default(this.node, sliderAttributes);

        //     this.updateSliderValues();
        if (this.props.change || this.props.handleChange) {
          var changeEvent = this.props.change || this.props.handleChange;
          this.mySlider.on("change", function (e) {
            var fakeEvent = {
              target: {}
            };
            fakeEvent.target.value = e.newValue;
            changeEvent(fakeEvent);
          });
        }

        if (this.props.slideStop) {
          this.mySlider.on("slideStop", function (e) {
            var fakeEvent = {
              target: {}
            };
            fakeEvent.target.value = e;
            that.props.slideStop(fakeEvent);
          });
        }
        this.checkAndDoDisabled();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.updateSliderValues();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mySlider.destroy();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        // The slider"s an input.  That"s all we need.  We"ll do the rest in
        // the componentDidMount() method.
        return _react2.default.createElement("div", { ref: function ref(node) {
            return _this2.node = node;
          } });
      }
    }]);
    return ReactBootstrapSlider;
  }(_react2.default.Component);

  ReactBootstrapSlider.propTypes = {
    min: _propTypes2.default.number,
    max: _propTypes2.default.number,
    step: _propTypes2.default.number,
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number.isRequired).isRequired]).isRequired,
    disabled: _propTypes2.default.string,
    tooltip: _propTypes2.default.string,
    change: _propTypes2.default.func,
    handleChange: _propTypes2.default.func,
    slideStop: _propTypes2.default.func,
    labelledby: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)])
  };

  exports.default = ReactBootstrapSlider;
});


/***/ }),

/***/ "./node_modules/react-bootstrap-slider/node_modules/bootstrap-slider/dist/bootstrap-slider.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-bootstrap-slider/node_modules/bootstrap-slider/dist/bootstrap-slider.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! =======================================================
                      VERSION  9.9.0              
========================================================= */


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! =========================================================
 * bootstrap-slider.js
 *
 * Maintainers:
 *		Kyle Kemp
 *			- Twitter: @seiyria
 *			- Github:  seiyria
 *		Rohit Kalkur
 *			- Twitter: @Rovolutionary
 *			- Github:  rovolution
 *
 * =========================================================
 *
 * bootstrap-slider is released under the MIT License
 * Copyright (c) 2017 Kyle Kemp, Rohit Kalkur, and contributors
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * ========================================================= */

/**
 * Bridget makes jQuery widgets
 * v1.0.1
 * MIT license
 */
var windowIsDefined = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object";

(function (factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var jQuery; }
})(function ($) {
	// Constants
	var NAMESPACE_MAIN = 'slider';
	var NAMESPACE_ALTERNATE = 'bootstrapSlider';

	// Polyfill console methods
	if (windowIsDefined && !window.console) {
		window.console = {};
	}
	if (windowIsDefined && !window.console.log) {
		window.console.log = function () {};
	}
	if (windowIsDefined && !window.console.warn) {
		window.console.warn = function () {};
	}

	// Reference to Slider constructor
	var Slider;

	(function ($) {

		'use strict';

		// -------------------------- utils -------------------------- //

		var slice = Array.prototype.slice;

		function noop() {}

		// -------------------------- definition -------------------------- //

		function defineBridget($) {

			// bail if no jQuery
			if (!$) {
				return;
			}

			// -------------------------- addOptionMethod -------------------------- //

			/**
    * adds option method -> $().plugin('option', {...})
    * @param {Function} PluginClass - constructor class
    */
			function addOptionMethod(PluginClass) {
				// don't overwrite original option method
				if (PluginClass.prototype.option) {
					return;
				}

				// option setter
				PluginClass.prototype.option = function (opts) {
					// bail out if not an object
					if (!$.isPlainObject(opts)) {
						return;
					}
					this.options = $.extend(true, this.options, opts);
				};
			}

			// -------------------------- plugin bridge -------------------------- //

			// helper function for logging errors
			// $.error breaks jQuery chaining
			var logError = typeof console === 'undefined' ? noop : function (message) {
				console.error(message);
			};

			/**
    * jQuery plugin bridge, access methods like $elem.plugin('method')
    * @param {String} namespace - plugin name
    * @param {Function} PluginClass - constructor class
    */
			function bridge(namespace, PluginClass) {
				// add to jQuery fn namespace
				$.fn[namespace] = function (options) {
					if (typeof options === 'string') {
						// call plugin method when first argument is a string
						// get arguments for method
						var args = slice.call(arguments, 1);

						for (var i = 0, len = this.length; i < len; i++) {
							var elem = this[i];
							var instance = $.data(elem, namespace);
							if (!instance) {
								logError("cannot call methods on " + namespace + " prior to initialization; " + "attempted to call '" + options + "'");
								continue;
							}
							if (!$.isFunction(instance[options]) || options.charAt(0) === '_') {
								logError("no such method '" + options + "' for " + namespace + " instance");
								continue;
							}

							// trigger method with arguments
							var returnValue = instance[options].apply(instance, args);

							// break look and return first value if provided
							if (returnValue !== undefined && returnValue !== instance) {
								return returnValue;
							}
						}
						// return this if no return value
						return this;
					} else {
						var objects = this.map(function () {
							var instance = $.data(this, namespace);
							if (instance) {
								// apply options & init
								instance.option(options);
								instance._init();
							} else {
								// initialize new instance
								instance = new PluginClass(this, options);
								$.data(this, namespace, instance);
							}
							return $(this);
						});

						if (!objects || objects.length > 1) {
							return objects;
						} else {
							return objects[0];
						}
					}
				};
			}

			// -------------------------- bridget -------------------------- //

			/**
    * converts a Prototypical class into a proper jQuery plugin
    *   the class must have a ._init method
    * @param {String} namespace - plugin name, used in $().pluginName
    * @param {Function} PluginClass - constructor class
    */
			$.bridget = function (namespace, PluginClass) {
				addOptionMethod(PluginClass);
				bridge(namespace, PluginClass);
			};

			return $.bridget;
		}

		// get jquery from browser global
		defineBridget($);
	})($);

	/*************************************************
 			BOOTSTRAP-SLIDER SOURCE CODE
 	**************************************************/

	(function ($) {

		var ErrorMsgs = {
			formatInvalidInputErrorMsg: function formatInvalidInputErrorMsg(input) {
				return "Invalid input value '" + input + "' passed in";
			},
			callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
		};

		var SliderScale = {
			linear: {
				toValue: function toValue(percentage) {
					var rawValue = percentage / 100 * (this.options.max - this.options.min);
					var shouldAdjustWithBase = true;
					if (this.options.ticks_positions.length > 0) {
						var minv,
						    maxv,
						    minp,
						    maxp = 0;
						for (var i = 1; i < this.options.ticks_positions.length; i++) {
							if (percentage <= this.options.ticks_positions[i]) {
								minv = this.options.ticks[i - 1];
								minp = this.options.ticks_positions[i - 1];
								maxv = this.options.ticks[i];
								maxp = this.options.ticks_positions[i];

								break;
							}
						}
						var partialPercentage = (percentage - minp) / (maxp - minp);
						rawValue = minv + partialPercentage * (maxv - minv);
						shouldAdjustWithBase = false;
					}

					var adjustment = shouldAdjustWithBase ? this.options.min : 0;
					var value = adjustment + Math.round(rawValue / this.options.step) * this.options.step;
					if (value < this.options.min) {
						return this.options.min;
					} else if (value > this.options.max) {
						return this.options.max;
					} else {
						return value;
					}
				},
				toPercentage: function toPercentage(value) {
					if (this.options.max === this.options.min) {
						return 0;
					}

					if (this.options.ticks_positions.length > 0) {
						var minv,
						    maxv,
						    minp,
						    maxp = 0;
						for (var i = 0; i < this.options.ticks.length; i++) {
							if (value <= this.options.ticks[i]) {
								minv = i > 0 ? this.options.ticks[i - 1] : 0;
								minp = i > 0 ? this.options.ticks_positions[i - 1] : 0;
								maxv = this.options.ticks[i];
								maxp = this.options.ticks_positions[i];

								break;
							}
						}
						if (i > 0) {
							var partialPercentage = (value - minv) / (maxv - minv);
							return minp + partialPercentage * (maxp - minp);
						}
					}

					return 100 * (value - this.options.min) / (this.options.max - this.options.min);
				}
			},

			logarithmic: {
				/* Based on http://stackoverflow.com/questions/846221/logarithmic-slider */
				toValue: function toValue(percentage) {
					var min = this.options.min === 0 ? 0 : Math.log(this.options.min);
					var max = Math.log(this.options.max);
					var value = Math.exp(min + (max - min) * percentage / 100);
					if (Math.round(value) === this.options.max) {
						return this.options.max;
					}
					value = this.options.min + Math.round((value - this.options.min) / this.options.step) * this.options.step;
					/* Rounding to the nearest step could exceed the min or
      * max, so clip to those values. */
					if (value < this.options.min) {
						return this.options.min;
					} else if (value > this.options.max) {
						return this.options.max;
					} else {
						return value;
					}
				},
				toPercentage: function toPercentage(value) {
					if (this.options.max === this.options.min) {
						return 0;
					} else {
						var max = Math.log(this.options.max);
						var min = this.options.min === 0 ? 0 : Math.log(this.options.min);
						var v = value === 0 ? 0 : Math.log(value);
						return 100 * (v - min) / (max - min);
					}
				}
			}
		};

		/*************************************************
  						CONSTRUCTOR
  	**************************************************/
		Slider = function Slider(element, options) {
			createNewSlider.call(this, element, options);
			return this;
		};

		function createNewSlider(element, options) {

			/*
   	The internal state object is used to store data about the current 'state' of slider.
   	This includes values such as the `value`, `enabled`, etc...
   */
			this._state = {
				value: null,
				enabled: null,
				offset: null,
				size: null,
				percentage: null,
				inDrag: false,
				over: false
			};

			// The objects used to store the reference to the tick methods if ticks_tooltip is on
			this.ticksCallbackMap = {};
			this.handleCallbackMap = {};

			if (typeof element === "string") {
				this.element = document.querySelector(element);
			} else if (element instanceof HTMLElement) {
				this.element = element;
			}

			/*************************************************
   					Process Options
   	**************************************************/
			options = options ? options : {};
			var optionTypes = Object.keys(this.defaultOptions);

			for (var i = 0; i < optionTypes.length; i++) {
				var optName = optionTypes[i];

				// First check if an option was passed in via the constructor
				var val = options[optName];
				// If no data attrib, then check data atrributes
				val = typeof val !== 'undefined' ? val : getDataAttrib(this.element, optName);
				// Finally, if nothing was specified, use the defaults
				val = val !== null ? val : this.defaultOptions[optName];

				// Set all options on the instance of the Slider
				if (!this.options) {
					this.options = {};
				}
				this.options[optName] = val;
			}

			// Check options.rtl
			if (this.options.rtl === 'auto') {
				this.options.rtl = window.getComputedStyle(this.element).direction === 'rtl';
			}

			/*
   	Validate `tooltip_position` against 'orientation`
   	- if `tooltip_position` is incompatible with orientation, swith it to a default compatible with specified `orientation`
   		-- default for "vertical" -> "right", "left" if rtl
   		-- default for "horizontal" -> "top"
   */
			if (this.options.orientation === "vertical" && (this.options.tooltip_position === "top" || this.options.tooltip_position === "bottom")) {
				if (this.options.rtl) {
					this.options.tooltip_position = "left";
				} else {
					this.options.tooltip_position = "right";
				}
			} else if (this.options.orientation === "horizontal" && (this.options.tooltip_position === "left" || this.options.tooltip_position === "right")) {

				this.options.tooltip_position = "top";
			}

			function getDataAttrib(element, optName) {
				var dataName = "data-slider-" + optName.replace(/_/g, '-');
				var dataValString = element.getAttribute(dataName);

				try {
					return JSON.parse(dataValString);
				} catch (err) {
					return dataValString;
				}
			}

			/*************************************************
   					Create Markup
   	**************************************************/

			var origWidth = this.element.style.width;
			var updateSlider = false;
			var parent = this.element.parentNode;
			var sliderTrackSelection;
			var sliderTrackLow, sliderTrackHigh;
			var sliderMinHandle;
			var sliderMaxHandle;

			if (this.sliderElem) {
				updateSlider = true;
			} else {
				/* Create elements needed for slider */
				this.sliderElem = document.createElement("div");
				this.sliderElem.className = "slider";

				/* Create slider track elements */
				var sliderTrack = document.createElement("div");
				sliderTrack.className = "slider-track";

				sliderTrackLow = document.createElement("div");
				sliderTrackLow.className = "slider-track-low";

				sliderTrackSelection = document.createElement("div");
				sliderTrackSelection.className = "slider-selection";

				sliderTrackHigh = document.createElement("div");
				sliderTrackHigh.className = "slider-track-high";

				sliderMinHandle = document.createElement("div");
				sliderMinHandle.className = "slider-handle min-slider-handle";
				sliderMinHandle.setAttribute('role', 'slider');
				sliderMinHandle.setAttribute('aria-valuemin', this.options.min);
				sliderMinHandle.setAttribute('aria-valuemax', this.options.max);

				sliderMaxHandle = document.createElement("div");
				sliderMaxHandle.className = "slider-handle max-slider-handle";
				sliderMaxHandle.setAttribute('role', 'slider');
				sliderMaxHandle.setAttribute('aria-valuemin', this.options.min);
				sliderMaxHandle.setAttribute('aria-valuemax', this.options.max);

				sliderTrack.appendChild(sliderTrackLow);
				sliderTrack.appendChild(sliderTrackSelection);
				sliderTrack.appendChild(sliderTrackHigh);

				/* Create highlight range elements */
				this.rangeHighlightElements = [];
				var rangeHighlightsOpts = this.options.rangeHighlights;
				if (Array.isArray(rangeHighlightsOpts) && rangeHighlightsOpts.length > 0) {
					for (var j = 0; j < rangeHighlightsOpts.length; j++) {
						var rangeHighlightElement = document.createElement("div");
						var customClassString = rangeHighlightsOpts[j].class || "";
						rangeHighlightElement.className = "slider-rangeHighlight slider-selection " + customClassString;
						this.rangeHighlightElements.push(rangeHighlightElement);
						sliderTrack.appendChild(rangeHighlightElement);
					}
				}

				/* Add aria-labelledby to handle's */
				var isLabelledbyArray = Array.isArray(this.options.labelledby);
				if (isLabelledbyArray && this.options.labelledby[0]) {
					sliderMinHandle.setAttribute('aria-labelledby', this.options.labelledby[0]);
				}
				if (isLabelledbyArray && this.options.labelledby[1]) {
					sliderMaxHandle.setAttribute('aria-labelledby', this.options.labelledby[1]);
				}
				if (!isLabelledbyArray && this.options.labelledby) {
					sliderMinHandle.setAttribute('aria-labelledby', this.options.labelledby);
					sliderMaxHandle.setAttribute('aria-labelledby', this.options.labelledby);
				}

				/* Create ticks */
				this.ticks = [];
				if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
					this.ticksContainer = document.createElement('div');
					this.ticksContainer.className = 'slider-tick-container';

					for (i = 0; i < this.options.ticks.length; i++) {
						var tick = document.createElement('div');
						tick.className = 'slider-tick';
						if (this.options.ticks_tooltip) {
							var tickListenerReference = this._addTickListener();
							var enterCallback = tickListenerReference.addMouseEnter(this, tick, i);
							var leaveCallback = tickListenerReference.addMouseLeave(this, tick);

							this.ticksCallbackMap[i] = {
								mouseEnter: enterCallback,
								mouseLeave: leaveCallback
							};
						}
						this.ticks.push(tick);
						this.ticksContainer.appendChild(tick);
					}

					sliderTrackSelection.className += " tick-slider-selection";
				}

				this.tickLabels = [];
				if (Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0) {
					this.tickLabelContainer = document.createElement('div');
					this.tickLabelContainer.className = 'slider-tick-label-container';

					for (i = 0; i < this.options.ticks_labels.length; i++) {
						var label = document.createElement('div');
						var noTickPositionsSpecified = this.options.ticks_positions.length === 0;
						var tickLabelsIndex = this.options.reversed && noTickPositionsSpecified ? this.options.ticks_labels.length - (i + 1) : i;
						label.className = 'slider-tick-label';
						label.innerHTML = this.options.ticks_labels[tickLabelsIndex];

						this.tickLabels.push(label);
						this.tickLabelContainer.appendChild(label);
					}
				}

				var createAndAppendTooltipSubElements = function createAndAppendTooltipSubElements(tooltipElem) {
					var arrow = document.createElement("div");
					arrow.className = "tooltip-arrow";

					var inner = document.createElement("div");
					inner.className = "tooltip-inner";

					tooltipElem.appendChild(arrow);
					tooltipElem.appendChild(inner);
				};

				/* Create tooltip elements */
				var sliderTooltip = document.createElement("div");
				sliderTooltip.className = "tooltip tooltip-main";
				sliderTooltip.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltip);

				var sliderTooltipMin = document.createElement("div");
				sliderTooltipMin.className = "tooltip tooltip-min";
				sliderTooltipMin.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltipMin);

				var sliderTooltipMax = document.createElement("div");
				sliderTooltipMax.className = "tooltip tooltip-max";
				sliderTooltipMax.setAttribute('role', 'presentation');
				createAndAppendTooltipSubElements(sliderTooltipMax);

				/* Append components to sliderElem */
				this.sliderElem.appendChild(sliderTrack);
				this.sliderElem.appendChild(sliderTooltip);
				this.sliderElem.appendChild(sliderTooltipMin);
				this.sliderElem.appendChild(sliderTooltipMax);

				if (this.tickLabelContainer) {
					this.sliderElem.appendChild(this.tickLabelContainer);
				}
				if (this.ticksContainer) {
					this.sliderElem.appendChild(this.ticksContainer);
				}

				this.sliderElem.appendChild(sliderMinHandle);
				this.sliderElem.appendChild(sliderMaxHandle);

				/* Append slider element to parent container, right before the original <input> element */
				parent.insertBefore(this.sliderElem, this.element);

				/* Hide original <input> element */
				this.element.style.display = "none";
			}
			/* If JQuery exists, cache JQ references */
			if ($) {
				this.$element = $(this.element);
				this.$sliderElem = $(this.sliderElem);
			}

			/*************************************************
   						Setup
   	**************************************************/
			this.eventToCallbackMap = {};
			this.sliderElem.id = this.options.id;

			this.touchCapable = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;

			this.touchX = 0;
			this.touchY = 0;

			this.tooltip = this.sliderElem.querySelector('.tooltip-main');
			this.tooltipInner = this.tooltip.querySelector('.tooltip-inner');

			this.tooltip_min = this.sliderElem.querySelector('.tooltip-min');
			this.tooltipInner_min = this.tooltip_min.querySelector('.tooltip-inner');

			this.tooltip_max = this.sliderElem.querySelector('.tooltip-max');
			this.tooltipInner_max = this.tooltip_max.querySelector('.tooltip-inner');

			if (SliderScale[this.options.scale]) {
				this.options.scale = SliderScale[this.options.scale];
			}

			if (updateSlider === true) {
				// Reset classes
				this._removeClass(this.sliderElem, 'slider-horizontal');
				this._removeClass(this.sliderElem, 'slider-vertical');
				this._removeClass(this.sliderElem, 'slider-rtl');
				this._removeClass(this.tooltip, 'hide');
				this._removeClass(this.tooltip_min, 'hide');
				this._removeClass(this.tooltip_max, 'hide');

				// Undo existing inline styles for track
				["left", "right", "top", "width", "height"].forEach(function (prop) {
					this._removeProperty(this.trackLow, prop);
					this._removeProperty(this.trackSelection, prop);
					this._removeProperty(this.trackHigh, prop);
				}, this);

				// Undo inline styles on handles
				[this.handle1, this.handle2].forEach(function (handle) {
					this._removeProperty(handle, 'left');
					this._removeProperty(handle, 'right');
					this._removeProperty(handle, 'top');
				}, this);

				// Undo inline styles and classes on tooltips
				[this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function (tooltip) {
					this._removeProperty(tooltip, 'left');
					this._removeProperty(tooltip, 'right');
					this._removeProperty(tooltip, 'top');
					this._removeProperty(tooltip, 'margin-left');
					this._removeProperty(tooltip, 'margin-right');
					this._removeProperty(tooltip, 'margin-top');

					this._removeClass(tooltip, 'right');
					this._removeClass(tooltip, 'left');
					this._removeClass(tooltip, 'top');
				}, this);
			}

			if (this.options.orientation === 'vertical') {
				this._addClass(this.sliderElem, 'slider-vertical');
				this.stylePos = 'top';
				this.mousePos = 'pageY';
				this.sizePos = 'offsetHeight';
			} else {
				this._addClass(this.sliderElem, 'slider-horizontal');
				this.sliderElem.style.width = origWidth;
				this.options.orientation = 'horizontal';
				if (this.options.rtl) {
					this.stylePos = 'right';
				} else {
					this.stylePos = 'left';
				}
				this.mousePos = 'pageX';
				this.sizePos = 'offsetWidth';
			}
			// specific rtl class
			if (this.options.rtl) {
				this._addClass(this.sliderElem, 'slider-rtl');
			}
			this._setTooltipPosition();
			/* In case ticks are specified, overwrite the min and max bounds */
			if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
				this.options.max = Math.max.apply(Math, this.options.ticks);
				this.options.min = Math.min.apply(Math, this.options.ticks);
			}

			if (Array.isArray(this.options.value)) {
				this.options.range = true;
				this._state.value = this.options.value;
			} else if (this.options.range) {
				// User wants a range, but value is not an array
				this._state.value = [this.options.value, this.options.max];
			} else {
				this._state.value = this.options.value;
			}

			this.trackLow = sliderTrackLow || this.trackLow;
			this.trackSelection = sliderTrackSelection || this.trackSelection;
			this.trackHigh = sliderTrackHigh || this.trackHigh;

			if (this.options.selection === 'none') {
				this._addClass(this.trackLow, 'hide');
				this._addClass(this.trackSelection, 'hide');
				this._addClass(this.trackHigh, 'hide');
			} else if (this.options.selection === 'after' || this.options.selection === 'before') {
				this._removeClass(this.trackLow, 'hide');
				this._removeClass(this.trackSelection, 'hide');
				this._removeClass(this.trackHigh, 'hide');
			}

			this.handle1 = sliderMinHandle || this.handle1;
			this.handle2 = sliderMaxHandle || this.handle2;

			if (updateSlider === true) {
				// Reset classes
				this._removeClass(this.handle1, 'round triangle');
				this._removeClass(this.handle2, 'round triangle hide');

				for (i = 0; i < this.ticks.length; i++) {
					this._removeClass(this.ticks[i], 'round triangle hide');
				}
			}

			var availableHandleModifiers = ['round', 'triangle', 'custom'];
			var isValidHandleType = availableHandleModifiers.indexOf(this.options.handle) !== -1;
			if (isValidHandleType) {
				this._addClass(this.handle1, this.options.handle);
				this._addClass(this.handle2, this.options.handle);

				for (i = 0; i < this.ticks.length; i++) {
					this._addClass(this.ticks[i], this.options.handle);
				}
			}

			this._state.offset = this._offset(this.sliderElem);
			this._state.size = this.sliderElem[this.sizePos];
			this.setValue(this._state.value);

			/******************************************
   				Bind Event Listeners
   	******************************************/

			// Bind keyboard handlers
			this.handle1Keydown = this._keydown.bind(this, 0);
			this.handle1.addEventListener("keydown", this.handle1Keydown, false);

			this.handle2Keydown = this._keydown.bind(this, 1);
			this.handle2.addEventListener("keydown", this.handle2Keydown, false);

			this.mousedown = this._mousedown.bind(this);
			this.touchstart = this._touchstart.bind(this);
			this.touchmove = this._touchmove.bind(this);

			if (this.touchCapable) {
				// Test for passive event support
				var supportsPassive = false;
				try {
					var opts = Object.defineProperty({}, 'passive', {
						get: function get() {
							supportsPassive = true;
						}
					});
					window.addEventListener("test", null, opts);
				} catch (e) {}
				// Use our detect's results. passive applied if supported, capture will be false either way.
				var eventOptions = supportsPassive ? { passive: true } : false;
				// Bind touch handlers
				this.sliderElem.addEventListener("touchstart", this.touchstart, eventOptions);
				this.sliderElem.addEventListener("touchmove", this.touchmove, eventOptions);
			}
			this.sliderElem.addEventListener("mousedown", this.mousedown, false);

			// Bind window handlers
			this.resize = this._resize.bind(this);
			window.addEventListener("resize", this.resize, false);

			// Bind tooltip-related handlers
			if (this.options.tooltip === 'hide') {
				this._addClass(this.tooltip, 'hide');
				this._addClass(this.tooltip_min, 'hide');
				this._addClass(this.tooltip_max, 'hide');
			} else if (this.options.tooltip === 'always') {
				this._showTooltip();
				this._alwaysShowTooltip = true;
			} else {
				this.showTooltip = this._showTooltip.bind(this);
				this.hideTooltip = this._hideTooltip.bind(this);

				if (this.options.ticks_tooltip) {
					var callbackHandle = this._addTickListener();
					//create handle1 listeners and store references in map
					var mouseEnter = callbackHandle.addMouseEnter(this, this.handle1);
					var mouseLeave = callbackHandle.addMouseLeave(this, this.handle1);
					this.handleCallbackMap.handle1 = {
						mouseEnter: mouseEnter,
						mouseLeave: mouseLeave
					};
					//create handle2 listeners and store references in map
					mouseEnter = callbackHandle.addMouseEnter(this, this.handle2);
					mouseLeave = callbackHandle.addMouseLeave(this, this.handle2);
					this.handleCallbackMap.handle2 = {
						mouseEnter: mouseEnter,
						mouseLeave: mouseLeave
					};
				} else {
					this.sliderElem.addEventListener("mouseenter", this.showTooltip, false);
					this.sliderElem.addEventListener("mouseleave", this.hideTooltip, false);
				}

				this.handle1.addEventListener("focus", this.showTooltip, false);
				this.handle1.addEventListener("blur", this.hideTooltip, false);

				this.handle2.addEventListener("focus", this.showTooltip, false);
				this.handle2.addEventListener("blur", this.hideTooltip, false);
			}

			if (this.options.enabled) {
				this.enable();
			} else {
				this.disable();
			}
		}

		/*************************************************
  				INSTANCE PROPERTIES/METHODS
  	- Any methods bound to the prototype are considered
  part of the plugin's `public` interface
  	**************************************************/
		Slider.prototype = {
			_init: function _init() {}, // NOTE: Must exist to support bridget

			constructor: Slider,

			defaultOptions: {
				id: "",
				min: 0,
				max: 10,
				step: 1,
				precision: 0,
				orientation: 'horizontal',
				value: 5,
				range: false,
				selection: 'before',
				tooltip: 'show',
				tooltip_split: false,
				handle: 'round',
				reversed: false,
				rtl: 'auto',
				enabled: true,
				formatter: function formatter(val) {
					if (Array.isArray(val)) {
						return val[0] + " : " + val[1];
					} else {
						return val;
					}
				},
				natural_arrow_keys: false,
				ticks: [],
				ticks_positions: [],
				ticks_labels: [],
				ticks_snap_bounds: 0,
				ticks_tooltip: false,
				scale: 'linear',
				focus: false,
				tooltip_position: null,
				labelledby: null,
				rangeHighlights: []
			},

			getElement: function getElement() {
				return this.sliderElem;
			},

			getValue: function getValue() {
				if (this.options.range) {
					return this._state.value;
				} else {
					return this._state.value[0];
				}
			},

			setValue: function setValue(val, triggerSlideEvent, triggerChangeEvent) {
				if (!val) {
					val = 0;
				}
				var oldValue = this.getValue();
				this._state.value = this._validateInputValue(val);
				var applyPrecision = this._applyPrecision.bind(this);

				if (this.options.range) {
					this._state.value[0] = applyPrecision(this._state.value[0]);
					this._state.value[1] = applyPrecision(this._state.value[1]);

					this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0]));
					this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]));
				} else {
					this._state.value = applyPrecision(this._state.value);
					this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))];
					this._addClass(this.handle2, 'hide');
					if (this.options.selection === 'after') {
						this._state.value[1] = this.options.max;
					} else {
						this._state.value[1] = this.options.min;
					}
				}

				if (this.options.max > this.options.min) {
					this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), this.options.step * 100 / (this.options.max - this.options.min)];
				} else {
					this._state.percentage = [0, 0, 100];
				}

				this._layout();
				var newValue = this.options.range ? this._state.value : this._state.value[0];

				this._setDataVal(newValue);
				if (triggerSlideEvent === true) {
					this._trigger('slide', newValue);
				}
				if (oldValue !== newValue && triggerChangeEvent === true) {
					this._trigger('change', {
						oldValue: oldValue,
						newValue: newValue
					});
				}

				return this;
			},

			destroy: function destroy() {
				// Remove event handlers on slider elements
				this._removeSliderEventHandlers();

				// Remove the slider from the DOM
				this.sliderElem.parentNode.removeChild(this.sliderElem);
				/* Show original <input> element */
				this.element.style.display = "";

				// Clear out custom event bindings
				this._cleanUpEventCallbacksMap();

				// Remove data values
				this.element.removeAttribute("data");

				// Remove JQuery handlers/data
				if ($) {
					this._unbindJQueryEventHandlers();
					this.$element.removeData('slider');
				}
			},

			disable: function disable() {
				this._state.enabled = false;
				this.handle1.removeAttribute("tabindex");
				this.handle2.removeAttribute("tabindex");
				this._addClass(this.sliderElem, 'slider-disabled');
				this._trigger('slideDisabled');

				return this;
			},

			enable: function enable() {
				this._state.enabled = true;
				this.handle1.setAttribute("tabindex", 0);
				this.handle2.setAttribute("tabindex", 0);
				this._removeClass(this.sliderElem, 'slider-disabled');
				this._trigger('slideEnabled');

				return this;
			},

			toggle: function toggle() {
				if (this._state.enabled) {
					this.disable();
				} else {
					this.enable();
				}
				return this;
			},

			isEnabled: function isEnabled() {
				return this._state.enabled;
			},

			on: function on(evt, callback) {
				this._bindNonQueryEventHandler(evt, callback);
				return this;
			},

			off: function off(evt, callback) {
				if ($) {
					this.$element.off(evt, callback);
					this.$sliderElem.off(evt, callback);
				} else {
					this._unbindNonQueryEventHandler(evt, callback);
				}
			},

			getAttribute: function getAttribute(attribute) {
				if (attribute) {
					return this.options[attribute];
				} else {
					return this.options;
				}
			},

			setAttribute: function setAttribute(attribute, value) {
				this.options[attribute] = value;
				return this;
			},

			refresh: function refresh() {
				this._removeSliderEventHandlers();
				createNewSlider.call(this, this.element, this.options);
				if ($) {
					// Bind new instance of slider to the element
					$.data(this.element, 'slider', this);
				}
				return this;
			},

			relayout: function relayout() {
				this._resize();
				this._layout();
				return this;
			},

			/******************************+
   				HELPERS
   	- Any method that is not part of the public interface.
   - Place it underneath this comment block and write its signature like so:
   		_fnName : function() {...}
   	********************************/
			_removeSliderEventHandlers: function _removeSliderEventHandlers() {
				// Remove keydown event listeners
				this.handle1.removeEventListener("keydown", this.handle1Keydown, false);
				this.handle2.removeEventListener("keydown", this.handle2Keydown, false);

				//remove the listeners from the ticks and handles if they had their own listeners
				if (this.options.ticks_tooltip) {
					var ticks = this.ticksContainer.getElementsByClassName('slider-tick');
					for (var i = 0; i < ticks.length; i++) {
						ticks[i].removeEventListener('mouseenter', this.ticksCallbackMap[i].mouseEnter, false);
						ticks[i].removeEventListener('mouseleave', this.ticksCallbackMap[i].mouseLeave, false);
					}
					this.handle1.removeEventListener('mouseenter', this.handleCallbackMap.handle1.mouseEnter, false);
					this.handle2.removeEventListener('mouseenter', this.handleCallbackMap.handle2.mouseEnter, false);
					this.handle1.removeEventListener('mouseleave', this.handleCallbackMap.handle1.mouseLeave, false);
					this.handle2.removeEventListener('mouseleave', this.handleCallbackMap.handle2.mouseLeave, false);
				}

				this.handleCallbackMap = null;
				this.ticksCallbackMap = null;

				if (this.showTooltip) {
					this.handle1.removeEventListener("focus", this.showTooltip, false);
					this.handle2.removeEventListener("focus", this.showTooltip, false);
				}
				if (this.hideTooltip) {
					this.handle1.removeEventListener("blur", this.hideTooltip, false);
					this.handle2.removeEventListener("blur", this.hideTooltip, false);
				}

				// Remove event listeners from sliderElem
				if (this.showTooltip) {
					this.sliderElem.removeEventListener("mouseenter", this.showTooltip, false);
				}
				if (this.hideTooltip) {
					this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, false);
				}
				this.sliderElem.removeEventListener("touchstart", this.touchstart, false);
				this.sliderElem.removeEventListener("touchmove", this.touchmove, false);
				this.sliderElem.removeEventListener("mousedown", this.mousedown, false);

				// Remove window event listener
				window.removeEventListener("resize", this.resize, false);
			},
			_bindNonQueryEventHandler: function _bindNonQueryEventHandler(evt, callback) {
				if (this.eventToCallbackMap[evt] === undefined) {
					this.eventToCallbackMap[evt] = [];
				}
				this.eventToCallbackMap[evt].push(callback);
			},
			_unbindNonQueryEventHandler: function _unbindNonQueryEventHandler(evt, callback) {
				var callbacks = this.eventToCallbackMap[evt];
				if (callbacks !== undefined) {
					for (var i = 0; i < callbacks.length; i++) {
						if (callbacks[i] === callback) {
							callbacks.splice(i, 1);
							break;
						}
					}
				}
			},
			_cleanUpEventCallbacksMap: function _cleanUpEventCallbacksMap() {
				var eventNames = Object.keys(this.eventToCallbackMap);
				for (var i = 0; i < eventNames.length; i++) {
					var eventName = eventNames[i];
					delete this.eventToCallbackMap[eventName];
				}
			},
			_showTooltip: function _showTooltip() {
				if (this.options.tooltip_split === false) {
					this._addClass(this.tooltip, 'in');
					this.tooltip_min.style.display = 'none';
					this.tooltip_max.style.display = 'none';
				} else {
					this._addClass(this.tooltip_min, 'in');
					this._addClass(this.tooltip_max, 'in');
					this.tooltip.style.display = 'none';
				}
				this._state.over = true;
			},
			_hideTooltip: function _hideTooltip() {
				if (this._state.inDrag === false && this.alwaysShowTooltip !== true) {
					this._removeClass(this.tooltip, 'in');
					this._removeClass(this.tooltip_min, 'in');
					this._removeClass(this.tooltip_max, 'in');
				}
				this._state.over = false;
			},
			_setToolTipOnMouseOver: function _setToolTipOnMouseOver(tempState) {
				var formattedTooltipVal = this.options.formatter(!tempState ? this._state.value[0] : tempState.value[0]);
				var positionPercentages = !tempState ? getPositionPercentages(this._state, this.options.reversed) : getPositionPercentages(tempState, this.options.reversed);
				this._setText(this.tooltipInner, formattedTooltipVal);

				this.tooltip.style[this.stylePos] = positionPercentages[0] + "%";
				if (this.options.orientation === 'vertical') {
					this._css(this.tooltip, "margin-" + this.stylePos, -this.tooltip.offsetHeight / 2 + "px");
				} else {
					this._css(this.tooltip, "margin-" + this.stylePos, -this.tooltip.offsetWidth / 2 + "px");
				}

				function getPositionPercentages(state, reversed) {
					if (reversed) {
						return [100 - state.percentage[0], this.options.range ? 100 - state.percentage[1] : state.percentage[1]];
					}
					return [state.percentage[0], state.percentage[1]];
				}
			},
			_addTickListener: function _addTickListener() {
				return {
					addMouseEnter: function addMouseEnter(reference, tick, index) {
						var enter = function enter() {
							var tempState = reference._state;
							var idString = index >= 0 ? index : this.attributes['aria-valuenow'].value;
							var hoverIndex = parseInt(idString, 10);
							tempState.value[0] = hoverIndex;
							tempState.percentage[0] = reference.options.ticks_positions[hoverIndex];
							reference._setToolTipOnMouseOver(tempState);
							reference._showTooltip();
						};
						tick.addEventListener("mouseenter", enter, false);
						return enter;
					},
					addMouseLeave: function addMouseLeave(reference, tick) {
						var leave = function leave() {
							reference._hideTooltip();
						};
						tick.addEventListener("mouseleave", leave, false);
						return leave;
					}
				};
			},
			_layout: function _layout() {
				var positionPercentages;

				if (this.options.reversed) {
					positionPercentages = [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]];
				} else {
					positionPercentages = [this._state.percentage[0], this._state.percentage[1]];
				}

				this.handle1.style[this.stylePos] = positionPercentages[0] + "%";
				this.handle1.setAttribute('aria-valuenow', this._state.value[0]);
				if (isNaN(this.options.formatter(this._state.value[0]))) {
					this.handle1.setAttribute('aria-valuetext', this.options.formatter(this._state.value[0]));
				}

				this.handle2.style[this.stylePos] = positionPercentages[1] + "%";
				this.handle2.setAttribute('aria-valuenow', this._state.value[1]);
				if (isNaN(this.options.formatter(this._state.value[1]))) {
					this.handle2.setAttribute('aria-valuetext', this.options.formatter(this._state.value[1]));
				}

				/* Position highlight range elements */
				if (this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0) {
					for (var _i = 0; _i < this.options.rangeHighlights.length; _i++) {
						var startPercent = this._toPercentage(this.options.rangeHighlights[_i].start);
						var endPercent = this._toPercentage(this.options.rangeHighlights[_i].end);

						if (this.options.reversed) {
							var sp = 100 - endPercent;
							endPercent = 100 - startPercent;
							startPercent = sp;
						}

						var currentRange = this._createHighlightRange(startPercent, endPercent);

						if (currentRange) {
							if (this.options.orientation === 'vertical') {
								this.rangeHighlightElements[_i].style.top = currentRange.start + "%";
								this.rangeHighlightElements[_i].style.height = currentRange.size + "%";
							} else {
								if (this.options.rtl) {
									this.rangeHighlightElements[_i].style.right = currentRange.start + "%";
								} else {
									this.rangeHighlightElements[_i].style.left = currentRange.start + "%";
								}
								this.rangeHighlightElements[_i].style.width = currentRange.size + "%";
							}
						} else {
							this.rangeHighlightElements[_i].style.display = "none";
						}
					}
				}

				/* Position ticks and labels */
				if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {

					var styleSize = this.options.orientation === 'vertical' ? 'height' : 'width';
					var styleMargin;
					if (this.options.orientation === 'vertical') {
						styleMargin = 'marginTop';
					} else {
						if (this.options.rtl) {
							styleMargin = 'marginRight';
						} else {
							styleMargin = 'marginLeft';
						}
					}
					var labelSize = this._state.size / (this.options.ticks.length - 1);

					if (this.tickLabelContainer) {
						var extraMargin = 0;
						if (this.options.ticks_positions.length === 0) {
							if (this.options.orientation !== 'vertical') {
								this.tickLabelContainer.style[styleMargin] = -labelSize / 2 + "px";
							}

							extraMargin = this.tickLabelContainer.offsetHeight;
						} else {
							/* Chidren are position absolute, calculate height by finding the max offsetHeight of a child */
							for (i = 0; i < this.tickLabelContainer.childNodes.length; i++) {
								if (this.tickLabelContainer.childNodes[i].offsetHeight > extraMargin) {
									extraMargin = this.tickLabelContainer.childNodes[i].offsetHeight;
								}
							}
						}
						if (this.options.orientation === 'horizontal') {
							this.sliderElem.style.marginBottom = extraMargin + "px";
						}
					}
					for (var i = 0; i < this.options.ticks.length; i++) {

						var percentage = this.options.ticks_positions[i] || this._toPercentage(this.options.ticks[i]);

						if (this.options.reversed) {
							percentage = 100 - percentage;
						}

						this.ticks[i].style[this.stylePos] = percentage + "%";

						/* Set class labels to denote whether ticks are in the selection */
						this._removeClass(this.ticks[i], 'in-selection');
						if (!this.options.range) {
							if (this.options.selection === 'after' && percentage >= positionPercentages[0]) {
								this._addClass(this.ticks[i], 'in-selection');
							} else if (this.options.selection === 'before' && percentage <= positionPercentages[0]) {
								this._addClass(this.ticks[i], 'in-selection');
							}
						} else if (percentage >= positionPercentages[0] && percentage <= positionPercentages[1]) {
							this._addClass(this.ticks[i], 'in-selection');
						}

						if (this.tickLabels[i]) {
							this.tickLabels[i].style[styleSize] = labelSize + "px";

							if (this.options.orientation !== 'vertical' && this.options.ticks_positions[i] !== undefined) {
								this.tickLabels[i].style.position = 'absolute';
								this.tickLabels[i].style[this.stylePos] = percentage + "%";
								this.tickLabels[i].style[styleMargin] = -labelSize / 2 + 'px';
							} else if (this.options.orientation === 'vertical') {
								if (this.options.rtl) {
									this.tickLabels[i].style['marginRight'] = this.sliderElem.offsetWidth + "px";
								} else {
									this.tickLabels[i].style['marginLeft'] = this.sliderElem.offsetWidth + "px";
								}
								this.tickLabelContainer.style[styleMargin] = this.sliderElem.offsetWidth / 2 * -1 + 'px';
							}
						}
					}
				}

				var formattedTooltipVal;

				if (this.options.range) {
					formattedTooltipVal = this.options.formatter(this._state.value);
					this._setText(this.tooltipInner, formattedTooltipVal);
					this.tooltip.style[this.stylePos] = (positionPercentages[1] + positionPercentages[0]) / 2 + "%";

					if (this.options.orientation === 'vertical') {
						this._css(this.tooltip, "margin-" + this.stylePos, -this.tooltip.offsetHeight / 2 + "px");
					} else {
						this._css(this.tooltip, "margin-" + this.stylePos, -this.tooltip.offsetWidth / 2 + "px");
					}

					var innerTooltipMinText = this.options.formatter(this._state.value[0]);
					this._setText(this.tooltipInner_min, innerTooltipMinText);

					var innerTooltipMaxText = this.options.formatter(this._state.value[1]);
					this._setText(this.tooltipInner_max, innerTooltipMaxText);

					this.tooltip_min.style[this.stylePos] = positionPercentages[0] + "%";

					if (this.options.orientation === 'vertical') {
						this._css(this.tooltip_min, "margin-" + this.stylePos, -this.tooltip_min.offsetHeight / 2 + "px");
					} else {
						this._css(this.tooltip_min, "margin-" + this.stylePos, -this.tooltip_min.offsetWidth / 2 + "px");
					}

					this.tooltip_max.style[this.stylePos] = positionPercentages[1] + "%";

					if (this.options.orientation === 'vertical') {
						this._css(this.tooltip_max, "margin-" + this.stylePos, -this.tooltip_max.offsetHeight / 2 + "px");
					} else {
						this._css(this.tooltip_max, "margin-" + this.stylePos, -this.tooltip_max.offsetWidth / 2 + "px");
					}
				} else {
					formattedTooltipVal = this.options.formatter(this._state.value[0]);
					this._setText(this.tooltipInner, formattedTooltipVal);

					this.tooltip.style[this.stylePos] = positionPercentages[0] + "%";
					if (this.options.orientation === 'vertical') {
						this._css(this.tooltip, "margin-" + this.stylePos, -this.tooltip.offsetHeight / 2 + "px");
					} else {
						this._css(this.tooltip, "margin-" + this.stylePos, -this.tooltip.offsetWidth / 2 + "px");
					}
				}

				if (this.options.orientation === 'vertical') {
					this.trackLow.style.top = '0';
					this.trackLow.style.height = Math.min(positionPercentages[0], positionPercentages[1]) + '%';

					this.trackSelection.style.top = Math.min(positionPercentages[0], positionPercentages[1]) + '%';
					this.trackSelection.style.height = Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';

					this.trackHigh.style.bottom = '0';
					this.trackHigh.style.height = 100 - Math.min(positionPercentages[0], positionPercentages[1]) - Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';
				} else {
					if (this.stylePos === 'right') {
						this.trackLow.style.right = '0';
					} else {
						this.trackLow.style.left = '0';
					}
					this.trackLow.style.width = Math.min(positionPercentages[0], positionPercentages[1]) + '%';

					if (this.stylePos === 'right') {
						this.trackSelection.style.right = Math.min(positionPercentages[0], positionPercentages[1]) + '%';
					} else {
						this.trackSelection.style.left = Math.min(positionPercentages[0], positionPercentages[1]) + '%';
					}
					this.trackSelection.style.width = Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';

					if (this.stylePos === 'right') {
						this.trackHigh.style.left = '0';
					} else {
						this.trackHigh.style.right = '0';
					}
					this.trackHigh.style.width = 100 - Math.min(positionPercentages[0], positionPercentages[1]) - Math.abs(positionPercentages[0] - positionPercentages[1]) + '%';

					var offset_min = this.tooltip_min.getBoundingClientRect();
					var offset_max = this.tooltip_max.getBoundingClientRect();

					if (this.options.tooltip_position === 'bottom') {
						if (offset_min.right > offset_max.left) {
							this._removeClass(this.tooltip_max, 'bottom');
							this._addClass(this.tooltip_max, 'top');
							this.tooltip_max.style.top = '';
							this.tooltip_max.style.bottom = 22 + 'px';
						} else {
							this._removeClass(this.tooltip_max, 'top');
							this._addClass(this.tooltip_max, 'bottom');
							this.tooltip_max.style.top = this.tooltip_min.style.top;
							this.tooltip_max.style.bottom = '';
						}
					} else {
						if (offset_min.right > offset_max.left) {
							this._removeClass(this.tooltip_max, 'top');
							this._addClass(this.tooltip_max, 'bottom');
							this.tooltip_max.style.top = 18 + 'px';
						} else {
							this._removeClass(this.tooltip_max, 'bottom');
							this._addClass(this.tooltip_max, 'top');
							this.tooltip_max.style.top = this.tooltip_min.style.top;
						}
					}
				}
			},
			_createHighlightRange: function _createHighlightRange(start, end) {
				if (this._isHighlightRange(start, end)) {
					if (start > end) {
						return { 'start': end, 'size': start - end };
					}
					return { 'start': start, 'size': end - start };
				}
				return null;
			},
			_isHighlightRange: function _isHighlightRange(start, end) {
				if (0 <= start && start <= 100 && 0 <= end && end <= 100) {
					return true;
				} else {
					return false;
				}
			},
			_resize: function _resize(ev) {
				/*jshint unused:false*/
				this._state.offset = this._offset(this.sliderElem);
				this._state.size = this.sliderElem[this.sizePos];
				this._layout();
			},
			_removeProperty: function _removeProperty(element, prop) {
				if (element.style.removeProperty) {
					element.style.removeProperty(prop);
				} else {
					element.style.removeAttribute(prop);
				}
			},
			_mousedown: function _mousedown(ev) {
				if (!this._state.enabled) {
					return false;
				}

				this._state.offset = this._offset(this.sliderElem);
				this._state.size = this.sliderElem[this.sizePos];

				var percentage = this._getPercentage(ev);

				if (this.options.range) {
					var diff1 = Math.abs(this._state.percentage[0] - percentage);
					var diff2 = Math.abs(this._state.percentage[1] - percentage);
					this._state.dragged = diff1 < diff2 ? 0 : 1;
					this._adjustPercentageForRangeSliders(percentage);
				} else {
					this._state.dragged = 0;
				}

				this._state.percentage[this._state.dragged] = percentage;
				this._layout();

				if (this.touchCapable) {
					document.removeEventListener("touchmove", this.mousemove, false);
					document.removeEventListener("touchend", this.mouseup, false);
				}

				if (this.mousemove) {
					document.removeEventListener("mousemove", this.mousemove, false);
				}
				if (this.mouseup) {
					document.removeEventListener("mouseup", this.mouseup, false);
				}

				this.mousemove = this._mousemove.bind(this);
				this.mouseup = this._mouseup.bind(this);

				if (this.touchCapable) {
					// Touch: Bind touch events:
					document.addEventListener("touchmove", this.mousemove, false);
					document.addEventListener("touchend", this.mouseup, false);
				}
				// Bind mouse events:
				document.addEventListener("mousemove", this.mousemove, false);
				document.addEventListener("mouseup", this.mouseup, false);

				this._state.inDrag = true;
				var newValue = this._calculateValue();

				this._trigger('slideStart', newValue);

				this._setDataVal(newValue);
				this.setValue(newValue, false, true);

				ev.returnValue = false;

				if (this.options.focus) {
					this._triggerFocusOnHandle(this._state.dragged);
				}

				return true;
			},
			_touchstart: function _touchstart(ev) {
				if (ev.changedTouches === undefined) {
					this._mousedown(ev);
					return;
				}

				var touch = ev.changedTouches[0];
				this.touchX = touch.pageX;
				this.touchY = touch.pageY;
			},
			_triggerFocusOnHandle: function _triggerFocusOnHandle(handleIdx) {
				if (handleIdx === 0) {
					this.handle1.focus();
				}
				if (handleIdx === 1) {
					this.handle2.focus();
				}
			},
			_keydown: function _keydown(handleIdx, ev) {
				if (!this._state.enabled) {
					return false;
				}

				var dir;
				switch (ev.keyCode) {
					case 37: // left
					case 40:
						// down
						dir = -1;
						break;
					case 39: // right
					case 38:
						// up
						dir = 1;
						break;
				}
				if (!dir) {
					return;
				}

				// use natural arrow keys instead of from min to max
				if (this.options.natural_arrow_keys) {
					var ifVerticalAndNotReversed = this.options.orientation === 'vertical' && !this.options.reversed;
					var ifHorizontalAndReversed = this.options.orientation === 'horizontal' && this.options.reversed; // @todo control with rtl

					if (ifVerticalAndNotReversed || ifHorizontalAndReversed) {
						dir = -dir;
					}
				}

				var val = this._state.value[handleIdx] + dir * this.options.step;
				var percentage = val / this.options.max * 100;
				this._state.keyCtrl = handleIdx;
				if (this.options.range) {
					this._adjustPercentageForRangeSliders(percentage);
					var val1 = !this._state.keyCtrl ? val : this._state.value[0];
					var val2 = this._state.keyCtrl ? val : this._state.value[1];
					val = [val1, val2];
				}

				this._trigger('slideStart', val);
				this._setDataVal(val);
				this.setValue(val, true, true);

				this._setDataVal(val);
				this._trigger('slideStop', val);
				this._layout();

				this._pauseEvent(ev);
				delete this._state.keyCtrl;

				return false;
			},
			_pauseEvent: function _pauseEvent(ev) {
				if (ev.stopPropagation) {
					ev.stopPropagation();
				}
				if (ev.preventDefault) {
					ev.preventDefault();
				}
				ev.cancelBubble = true;
				ev.returnValue = false;
			},
			_mousemove: function _mousemove(ev) {
				if (!this._state.enabled) {
					return false;
				}

				var percentage = this._getPercentage(ev);
				this._adjustPercentageForRangeSliders(percentage);
				this._state.percentage[this._state.dragged] = percentage;
				this._layout();

				var val = this._calculateValue(true);
				this.setValue(val, true, true);

				return false;
			},
			_touchmove: function _touchmove(ev) {
				if (ev.changedTouches === undefined) {
					return;
				}

				var touch = ev.changedTouches[0];

				var xDiff = touch.pageX - this.touchX;
				var yDiff = touch.pageY - this.touchY;

				if (!this._state.inDrag) {
					// Vertical Slider
					if (this.options.orientation === 'vertical' && xDiff <= 5 && xDiff >= -5 && (yDiff >= 15 || yDiff <= -15)) {
						this._mousedown(ev);
					}
					// Horizontal slider.
					else if (yDiff <= 5 && yDiff >= -5 && (xDiff >= 15 || xDiff <= -15)) {
							this._mousedown(ev);
						}
				}
			},
			_adjustPercentageForRangeSliders: function _adjustPercentageForRangeSliders(percentage) {
				if (this.options.range) {
					var precision = this._getNumDigitsAfterDecimalPlace(percentage);
					precision = precision ? precision - 1 : 0;
					var percentageWithAdjustedPrecision = this._applyToFixedAndParseFloat(percentage, precision);
					if (this._state.dragged === 0 && this._applyToFixedAndParseFloat(this._state.percentage[1], precision) < percentageWithAdjustedPrecision) {
						this._state.percentage[0] = this._state.percentage[1];
						this._state.dragged = 1;
					} else if (this._state.dragged === 1 && this._applyToFixedAndParseFloat(this._state.percentage[0], precision) > percentageWithAdjustedPrecision) {
						this._state.percentage[1] = this._state.percentage[0];
						this._state.dragged = 0;
					} else if (this._state.keyCtrl === 0 && this._state.value[1] / this.options.max * 100 < percentage) {
						this._state.percentage[0] = this._state.percentage[1];
						this._state.keyCtrl = 1;
						this.handle2.focus();
					} else if (this._state.keyCtrl === 1 && this._state.value[0] / this.options.max * 100 > percentage) {
						this._state.percentage[1] = this._state.percentage[0];
						this._state.keyCtrl = 0;
						this.handle1.focus();
					}
				}
			},
			_mouseup: function _mouseup() {
				if (!this._state.enabled) {
					return false;
				}
				if (this.touchCapable) {
					// Touch: Unbind touch event handlers:
					document.removeEventListener("touchmove", this.mousemove, false);
					document.removeEventListener("touchend", this.mouseup, false);
				}
				// Unbind mouse event handlers:
				document.removeEventListener("mousemove", this.mousemove, false);
				document.removeEventListener("mouseup", this.mouseup, false);

				this._state.inDrag = false;
				if (this._state.over === false) {
					this._hideTooltip();
				}
				var val = this._calculateValue(true);

				this._layout();
				this._setDataVal(val);
				this._trigger('slideStop', val);

				return false;
			},
			_calculateValue: function _calculateValue(snapToClosestTick) {
				var val;
				if (this.options.range) {
					val = [this.options.min, this.options.max];
					if (this._state.percentage[0] !== 0) {
						val[0] = this._toValue(this._state.percentage[0]);
						val[0] = this._applyPrecision(val[0]);
					}
					if (this._state.percentage[1] !== 100) {
						val[1] = this._toValue(this._state.percentage[1]);
						val[1] = this._applyPrecision(val[1]);
					}
				} else {
					val = this._toValue(this._state.percentage[0]);
					val = parseFloat(val);
					val = this._applyPrecision(val);
				}

				if (snapToClosestTick) {
					var min = [val, Infinity];
					for (var i = 0; i < this.options.ticks.length; i++) {
						var diff = Math.abs(this.options.ticks[i] - val);
						if (diff <= min[1]) {
							min = [this.options.ticks[i], diff];
						}
					}
					if (min[1] <= this.options.ticks_snap_bounds) {
						return min[0];
					}
				}

				return val;
			},
			_applyPrecision: function _applyPrecision(val) {
				var precision = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);
				return this._applyToFixedAndParseFloat(val, precision);
			},
			_getNumDigitsAfterDecimalPlace: function _getNumDigitsAfterDecimalPlace(num) {
				var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
				if (!match) {
					return 0;
				}
				return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
			},
			_applyToFixedAndParseFloat: function _applyToFixedAndParseFloat(num, toFixedInput) {
				var truncatedNum = num.toFixed(toFixedInput);
				return parseFloat(truncatedNum);
			},
			/*
   	Credits to Mike Samuel for the following method!
   	Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
   */
			_getPercentage: function _getPercentage(ev) {
				if (this.touchCapable && (ev.type === 'touchstart' || ev.type === 'touchmove')) {
					ev = ev.touches[0];
				}

				var eventPosition = ev[this.mousePos];
				var sliderOffset = this._state.offset[this.stylePos];
				var distanceToSlide = eventPosition - sliderOffset;
				if (this.stylePos === 'right') {
					distanceToSlide = -distanceToSlide;
				}
				// Calculate what percent of the length the slider handle has slid
				var percentage = distanceToSlide / this._state.size * 100;
				percentage = Math.round(percentage / this._state.percentage[2]) * this._state.percentage[2];
				if (this.options.reversed) {
					percentage = 100 - percentage;
				}

				// Make sure the percent is within the bounds of the slider.
				// 0% corresponds to the 'min' value of the slide
				// 100% corresponds to the 'max' value of the slide
				return Math.max(0, Math.min(100, percentage));
			},
			_validateInputValue: function _validateInputValue(val) {
				if (!isNaN(+val)) {
					return +val;
				} else if (Array.isArray(val)) {
					this._validateArray(val);
					return val;
				} else {
					throw new Error(ErrorMsgs.formatInvalidInputErrorMsg(val));
				}
			},
			_validateArray: function _validateArray(val) {
				for (var i = 0; i < val.length; i++) {
					var input = val[i];
					if (typeof input !== 'number') {
						throw new Error(ErrorMsgs.formatInvalidInputErrorMsg(input));
					}
				}
			},
			_setDataVal: function _setDataVal(val) {
				this.element.setAttribute('data-value', val);
				this.element.setAttribute('value', val);
				this.element.value = val;
			},
			_trigger: function _trigger(evt, val) {
				val = val || val === 0 ? val : undefined;

				var callbackFnArray = this.eventToCallbackMap[evt];
				if (callbackFnArray && callbackFnArray.length) {
					for (var i = 0; i < callbackFnArray.length; i++) {
						var callbackFn = callbackFnArray[i];
						callbackFn(val);
					}
				}

				/* If JQuery exists, trigger JQuery events */
				if ($) {
					this._triggerJQueryEvent(evt, val);
				}
			},
			_triggerJQueryEvent: function _triggerJQueryEvent(evt, val) {
				var eventData = {
					type: evt,
					value: val
				};
				this.$element.trigger(eventData);
				this.$sliderElem.trigger(eventData);
			},
			_unbindJQueryEventHandlers: function _unbindJQueryEventHandlers() {
				this.$element.off();
				this.$sliderElem.off();
			},
			_setText: function _setText(element, text) {
				if (typeof element.textContent !== "undefined") {
					element.textContent = text;
				} else if (typeof element.innerText !== "undefined") {
					element.innerText = text;
				}
			},
			_removeClass: function _removeClass(element, classString) {
				var classes = classString.split(" ");
				var newClasses = element.className;

				for (var i = 0; i < classes.length; i++) {
					var classTag = classes[i];
					var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
					newClasses = newClasses.replace(regex, " ");
				}

				element.className = newClasses.trim();
			},
			_addClass: function _addClass(element, classString) {
				var classes = classString.split(" ");
				var newClasses = element.className;

				for (var i = 0; i < classes.length; i++) {
					var classTag = classes[i];
					var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
					var ifClassExists = regex.test(newClasses);

					if (!ifClassExists) {
						newClasses += " " + classTag;
					}
				}

				element.className = newClasses.trim();
			},
			_offsetLeft: function _offsetLeft(obj) {
				return obj.getBoundingClientRect().left;
			},
			_offsetRight: function _offsetRight(obj) {
				return obj.getBoundingClientRect().right;
			},
			_offsetTop: function _offsetTop(obj) {
				var offsetTop = obj.offsetTop;
				while ((obj = obj.offsetParent) && !isNaN(obj.offsetTop)) {
					offsetTop += obj.offsetTop;
					if (obj.tagName !== 'BODY') {
						offsetTop -= obj.scrollTop;
					}
				}
				return offsetTop;
			},
			_offset: function _offset(obj) {
				return {
					left: this._offsetLeft(obj),
					right: this._offsetRight(obj),
					top: this._offsetTop(obj)
				};
			},
			_css: function _css(elementRef, styleName, value) {
				if ($) {
					$.style(elementRef, styleName, value);
				} else {
					var style = styleName.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (all, letter) {
						return letter.toUpperCase();
					});
					elementRef.style[style] = value;
				}
			},
			_toValue: function _toValue(percentage) {
				return this.options.scale.toValue.apply(this, [percentage]);
			},
			_toPercentage: function _toPercentage(value) {
				return this.options.scale.toPercentage.apply(this, [value]);
			},
			_setTooltipPosition: function _setTooltipPosition() {
				var tooltips = [this.tooltip, this.tooltip_min, this.tooltip_max];
				if (this.options.orientation === 'vertical') {
					var tooltipPos;
					if (this.options.tooltip_position) {
						tooltipPos = this.options.tooltip_position;
					} else {
						if (this.options.rtl) {
							tooltipPos = 'left';
						} else {
							tooltipPos = 'right';
						}
					}
					var oppositeSide = tooltipPos === 'left' ? 'right' : 'left';
					tooltips.forEach(function (tooltip) {
						this._addClass(tooltip, tooltipPos);
						tooltip.style[oppositeSide] = '100%';
					}.bind(this));
				} else if (this.options.tooltip_position === 'bottom') {
					tooltips.forEach(function (tooltip) {
						this._addClass(tooltip, 'bottom');
						tooltip.style.top = 22 + 'px';
					}.bind(this));
				} else {
					tooltips.forEach(function (tooltip) {
						this._addClass(tooltip, 'top');
						tooltip.style.top = -this.tooltip.outerHeight - 14 + 'px';
					}.bind(this));
				}
			}
		};

		/*********************************
  		Attach to global namespace
  	*********************************/
		if ($ && $.fn) {
			var autoRegisterNamespace = void 0;

			if (!$.fn.slider) {
				$.bridget(NAMESPACE_MAIN, Slider);
				autoRegisterNamespace = NAMESPACE_MAIN;
			} else {
				if (windowIsDefined) {
					window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead.");
				}
				autoRegisterNamespace = NAMESPACE_ALTERNATE;
			}
			$.bridget(NAMESPACE_ALTERNATE, Slider);

			// Auto-Register data-provide="slider" Elements
			$(function () {
				$("input[data-provide=slider]")[autoRegisterNamespace]();
			});
		}
	})($);

	return Slider;
});


/***/ })

}]);
//# sourceMappingURL=16.9ed865ea.chunk.js.map