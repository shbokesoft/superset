(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/hexagon-layer/hexagon-aggregator.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/hexagon-layer/hexagon-aggregator.js ***!
  \***********************************************************************************************/
/*! exports provided: pointToHexbin, getRadiusInPixel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointToHexbin", function() { return pointToHexbin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRadiusInPixel", function() { return getRadiusInPixel; });
/* harmony import */ var d3_hexbin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-hexbin */ "./node_modules/d3-hexbin/index.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/utils/iterable-utils.js");


function pointToHexbin(_ref, viewport) {
  var data = _ref.data,
      radius = _ref.radius,
      getPosition = _ref.getPosition;
  var radiusInPixel = getRadiusInPixel(radius, viewport);
  var screenPoints = [];

  var _createIterable = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_1__["createIterable"])(data),
      iterable = _createIterable.iterable,
      objectInfo = _createIterable.objectInfo;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var object = _step.value;
      objectInfo.index++;
      screenPoints.push(Object.assign({
        screenCoord: viewport.projectFlat(getPosition(object, objectInfo))
      }, object));
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

  var newHexbin = Object(d3_hexbin__WEBPACK_IMPORTED_MODULE_0__["hexbin"])().radius(radiusInPixel).x(function (d) {
    return d.screenCoord[0];
  }).y(function (d) {
    return d.screenCoord[1];
  });
  var hexagonBins = newHexbin(screenPoints);
  return {
    hexagons: hexagonBins.map(function (hex, index) {
      return {
        position: viewport.unprojectFlat([hex.x, hex.y]),
        points: hex,
        index: index
      };
    })
  };
}
function getRadiusInPixel(radius, viewport) {
  var _viewport$getDistance = viewport.getDistanceScales(),
      pixelsPerMeter = _viewport$getDistance.pixelsPerMeter;

  return radius * pixelsPerMeter[0];
}
//# sourceMappingURL=hexagon-aggregator.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/hexagon-layer/hexagon-layer.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/hexagon-layer/hexagon-layer.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HexagonLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/materials/phong-material.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/utils/log.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/lib/composite-layer.js");
/* harmony import */ var _deck_gl_layers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @deck.gl/layers */ "./node_modules/@deck.gl/layers/dist/esm/column-layer/column-layer.js");
/* harmony import */ var _utils_bin_sorter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/bin-sorter */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/bin-sorter.js");
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/color-utils */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/color-utils.js");
/* harmony import */ var _utils_scale_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/scale-utils */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/scale-utils.js");
/* harmony import */ var _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/aggregation-operation-utils */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/aggregation-operation-utils.js");
/* harmony import */ var _hexagon_aggregator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hexagon-aggregator */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/hexagon-layer/hexagon-aggregator.js");














function nop() {}

var defaultMaterial = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_5__["default"]();
var defaultProps = {
  colorDomain: null,
  colorRange: _utils_color_utils__WEBPACK_IMPORTED_MODULE_10__["defaultColorRange"],
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
    value: 0,
    min: 0,
    max: 100
  },
  upperPercentile: {
    type: 'number',
    value: 100,
    min: 0,
    max: 100
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
    value: 0,
    min: 0,
    max: 100
  },
  elevationUpperPercentile: {
    type: 'number',
    value: 100,
    min: 0,
    max: 100
  },
  elevationScale: {
    type: 'number',
    min: 0,
    value: 1
  },
  onSetElevationDomain: nop,
  radius: {
    type: 'number',
    value: 1000,
    min: 1
  },
  coverage: {
    type: 'number',
    min: 0,
    max: 1,
    value: 1
  },
  extruded: false,
  hexagonAggregator: _hexagon_aggregator__WEBPACK_IMPORTED_MODULE_13__["pointToHexbin"],
  getPosition: {
    type: 'accessor',
    value: function value(x) {
      return x.position;
    }
  },
  fp64: false,
  material: defaultMaterial
};
var COLOR_PROPS = ['getColorValue', 'colorAggregation', 'getColorWeight'];
var ELEVATION_PROPS = ['getElevationValue', 'elevationAggregation', 'getElevationWeight'];

var HexagonLayer = function (_CompositeLayer) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HexagonLayer, _CompositeLayer);

  function HexagonLayer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HexagonLayer);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HexagonLayer).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HexagonLayer, [{
    key: "initializeState",
    value: function initializeState() {
      this.state = {
        hexagons: [],
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
      var dimensionChanges = this.getDimensionChanges(oldProps, props);

      if (changeFlags.dataChanged || this.needsReProjectPoints(oldProps, props)) {
        this.getHexagons();
      } else if (dimensionChanges) {
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
    value: function needsReProjectPoints(oldProps, props) {
      return oldProps.radius !== props.radius || oldProps.hexagonAggregator !== props.hexagonAggregator;
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
    key: "getHexagons",
    value: function getHexagons() {
      var hexagonAggregator = this.props.hexagonAggregator;
      var viewport = this.context.viewport;

      var _hexagonAggregator = hexagonAggregator(this.props, viewport),
          hexagons = _hexagonAggregator.hexagons,
          hexagonVertices = _hexagonAggregator.hexagonVertices;

      this.updateRadiusAngle(hexagonVertices);
      this.setState({
        hexagons: hexagons
      });
      this.getSortedBins();
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
        var cell = this.state.hexagons[info.index];
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
    key: "updateRadiusAngle",
    value: function updateRadiusAngle(vertices) {
      var radius = this.props.radius;
      var angle = 90;

      if (Array.isArray(vertices)) {
        if (vertices.length < 6) {
          _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__["default"].error('HexagonCellLayer: hexagonVertices needs to be an array of 6 points')();
        }

        var vertex0 = vertices[0];
        var vertex3 = vertices[3];
        var viewport = this.context.viewport;

        var _viewport$getDistance = viewport.getDistanceScales(),
            pixelsPerMeter = _viewport$getDistance.pixelsPerMeter;

        var spaceCoord0 = this.projectFlat(vertex0);
        var spaceCoord3 = this.projectFlat(vertex3);
        var dx = spaceCoord0[0] - spaceCoord3[0];
        var dy = spaceCoord0[1] - spaceCoord3[1];
        var dxy = Math.sqrt(dx * dx + dy * dy);
        angle = Math.acos(dx / dxy) * -Math.sign(dy) / Math.PI * 180 + 90;
        radius = dxy / 2 / pixelsPerMeter[0];
      }

      this.setState({
        angle: angle,
        radius: radius
      });
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
      var sortedColorBins = new _utils_bin_sorter__WEBPACK_IMPORTED_MODULE_9__["default"](this.state.hexagons || [], getColorValue);
      this.setState({
        sortedColorBins: sortedColorBins
      });
      this.getColorValueDomain();
    }
  }, {
    key: "getSortedElevationBins",
    value: function getSortedElevationBins() {
      var getElevationValue = this.state.getElevationValue;
      var sortedElevationBins = new _utils_bin_sorter__WEBPACK_IMPORTED_MODULE_9__["default"](this.state.hexagons || [], getElevationValue);
      this.setState({
        sortedElevationBins: sortedElevationBins
      });
      this.getElevationValueDomain();
    }
  }, {
    key: "getColorValueDomain",
    value: function getColorValueDomain() {
      var _this$props2 = this.props,
          lowerPercentile = _this$props2.lowerPercentile,
          upperPercentile = _this$props2.upperPercentile,
          onSetColorDomain = _this$props2.onSetColorDomain;

      if (lowerPercentile > upperPercentile) {
        _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__["default"].warn('HexagonLayer: lowerPercentile is bigger than upperPercentile')();
      }

      this.state.colorValueDomain = this.state.sortedColorBins.getValueRange([lowerPercentile, upperPercentile]);

      if (typeof onSetColorDomain === 'function') {
        onSetColorDomain(this.state.colorValueDomain);
      }

      this.getColorScale();
    }
  }, {
    key: "getElevationValueDomain",
    value: function getElevationValueDomain() {
      var _this$props3 = this.props,
          elevationLowerPercentile = _this$props3.elevationLowerPercentile,
          elevationUpperPercentile = _this$props3.elevationUpperPercentile,
          onSetElevationDomain = _this$props3.onSetElevationDomain;
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
      this.state.colorScaleFunc = Object(_utils_scale_utils__WEBPACK_IMPORTED_MODULE_11__["getQuantizeScale"])(colorDomain, colorRange);
    }
  }, {
    key: "getElevationScale",
    value: function getElevationScale() {
      var elevationRange = this.props.elevationRange;
      var elevationDomain = this.props.elevationDomain || this.state.elevationValueDomain;
      this.state.elevationScaleFunc = Object(_utils_scale_utils__WEBPACK_IMPORTED_MODULE_11__["getLinearScale"])(elevationDomain, elevationRange);
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
      var _this$props4 = this.props,
          elevationScale = _this$props4.elevationScale,
          extruded = _this$props4.extruded,
          coverage = _this$props4.coverage,
          material = _this$props4.material,
          fp64 = _this$props4.fp64,
          transitions = _this$props4.transitions;
      var _this$state4 = this.state,
          angle = _this$state4.angle,
          radius = _this$state4.radius;
      var SubLayerClass = this.getSubLayerClass('hexagon-cell', _deck_gl_layers__WEBPACK_IMPORTED_MODULE_8__["default"]);
      return new SubLayerClass({
        fp64: fp64,
        radius: radius,
        diskResolution: 6,
        elevationScale: elevationScale,
        angle: angle,
        extruded: extruded,
        coverage: coverage,
        material: material,
        getFillColor: this._onGetSublayerColor.bind(this),
        getElevation: this._onGetSublayerElevation.bind(this),
        transitions: transitions && {
          getFillColor: transitions.getColorValue || transitions.getColorWeight,
          getElevation: transitions.getElevationValue || transitions.getElevationWeight
        }
      }, this.getSubLayerProps({
        id: 'hexagon-cell',
        updateTriggers: this.getUpdateTriggers()
      }), {
        data: this.state.hexagons
      });
    }
  }]);

  return HexagonLayer;
}(_deck_gl_core__WEBPACK_IMPORTED_MODULE_7__["default"]);


HexagonLayer.layerName = 'HexagonLayer';
HexagonLayer.defaultProps = defaultProps;
//# sourceMappingURL=hexagon-layer.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer-fragment-webgl1.glsl.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer-fragment-webgl1.glsl.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME screen-grid-layer-fragment-shader-webgl1\n\nprecision highp float;\n\nvarying vec4 vColor;\nvarying float vSampleCount;\n\nvoid main(void) {\n  if (vSampleCount <= 0.0) {\n    discard;\n  }\n  gl_FragColor = vColor;\n\n  gl_FragColor = picking_filterColor(gl_FragColor);\n}\n");
//# sourceMappingURL=screen-grid-layer-fragment-webgl1.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer-fragment.glsl.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer-fragment.glsl.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\n#define SHADER_NAME screen-grid-layer-fragment-shader\n\nprecision highp float;\n\nin vec4 vColor;\nin float vSampleCount;\nout vec4 fragColor;\n\nvoid main(void) {\n  if (vSampleCount <= 0.0) {\n    discard;\n  }\n  fragColor = vColor;\n\n  fragColor = picking_filterColor(fragColor);\n}\n");
//# sourceMappingURL=screen-grid-layer-fragment.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer-vertex-webgl1.glsl.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer-vertex-webgl1.glsl.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME screen-grid-layer-vertex-shader-webgl1\n#define RANGE_COUNT 6\n\nattribute vec3 positions;\nattribute vec3 instancePositions;\nattribute vec4 instanceCounts;\nattribute vec3 instancePickingColors;\n\nuniform float opacity;\nuniform vec3 cellScale;\nuniform vec4 minColor;\nuniform vec4 maxColor;\nuniform float maxWeight;\nuniform vec4 colorRange[RANGE_COUNT];\nuniform vec2 colorDomain;\nuniform bool shouldUseMinMax;\n\nvarying vec4 vColor;\nvarying float vSampleCount;\n\nvec4 quantizeScale(vec2 domain, vec4 range[RANGE_COUNT], float value) {\n  vec4 outColor = vec4(0., 0., 0., 0.);\n  if (value >= domain.x && value <= domain.y) {\n    float domainRange = domain.y - domain.x;\n    if (domainRange <= 0.) {\n      outColor = colorRange[0];\n    } else {\n      float rangeCount = float(RANGE_COUNT);\n      float rangeStep = domainRange / rangeCount;\n      float idx = floor((value - domain.x) / rangeStep);\n      idx = clamp(idx, 0., rangeCount - 1.);\n      int intIdx = int(idx);\n      outColor = colorRange[intIdx];\n    }\n  }\n  outColor = outColor / 255.;\n  return outColor;\n}\n\nvoid main(void) {\n  vSampleCount = instanceCounts.a;\n\n  float weight = instanceCounts.r;\n  float step = weight / maxWeight;\n  vec4 minMaxColor = mix(minColor, maxColor, step) / 255.;\n\n  vec2 domain = colorDomain;\n  float domainMaxValid = float(colorDomain.y != 0.);\n  domain.y = mix(maxWeight, colorDomain.y, domainMaxValid);\n  vec4 rangeColor = quantizeScale(domain, colorRange, weight);\n\n  float rangeMinMax = float(shouldUseMinMax);\n  vec4 color = mix(rangeColor, minMaxColor, rangeMinMax);\n  vColor = vec4(color.rgb, color.a * opacity);\n  picking_setPickingColor(instancePickingColors);\n\n  gl_Position = vec4(instancePositions + positions * cellScale, 1.);\n}\n");
//# sourceMappingURL=screen-grid-layer-vertex-webgl1.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer-vertex.glsl.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer-vertex.glsl.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\n#define SHADER_NAME screen-grid-layer-vertex-shader\n#define RANGE_COUNT 6\n\nin vec3 positions;\nin vec3 instancePositions;\nin vec4 instanceCounts;\nin vec3 instancePickingColors;\n\nlayout(std140) uniform;\nuniform float opacity;\nuniform vec3 cellScale;\nuniform vec4 minColor;\nuniform vec4 maxColor;\nuniform AggregationData\n{\n  vec4 maxCount;\n} aggregationData;\n\nuniform vec4 colorRange[RANGE_COUNT];\nuniform vec2 colorDomain;\nuniform bool shouldUseMinMax;\n\nout vec4 vColor;\nout float vSampleCount;\n\nvec4 quantizeScale(vec2 domain, vec4 range[RANGE_COUNT], float value) {\n  vec4 outColor = vec4(0., 0., 0., 0.);\n  if (value >= domain.x && value <= domain.y) {\n    float domainRange = domain.y - domain.x;\n    if (domainRange <= 0.) {\n      outColor = colorRange[0];\n    } else {\n      float rangeCount = float(RANGE_COUNT);\n      float rangeStep = domainRange / rangeCount;\n      float idx = floor((value - domain.x) / rangeStep);\n      idx = clamp(idx, 0., rangeCount - 1.);\n      int intIdx = int(idx);\n      outColor = colorRange[intIdx];\n    }\n  }\n  outColor = outColor / 255.;\n  return outColor;\n}\n\nvoid main(void) {\n  vSampleCount = instanceCounts.a;\n\n  float weight = instanceCounts.r ;\n  float maxWeight = aggregationData.maxCount.r;\n  float step = weight / maxWeight;\n  vec4 minMaxColor = mix(minColor, maxColor, step) / 255.;\n\n  vec2 domain = colorDomain;\n  float domainMaxValid = float(colorDomain.y != 0.);\n  domain.y = mix(maxWeight, colorDomain.y, domainMaxValid);\n  vec4 rangeColor = quantizeScale(domain, colorRange, weight);\n\n  float rangeMinMax = float(shouldUseMinMax);\n  vec4 color = mix(rangeColor, minMaxColor, rangeMinMax);\n  vColor = vec4(color.rgb, color.a * opacity);\n  picking_setPickingColor(instancePickingColors);\n\n  gl_Position = vec4(instancePositions + positions * cellScale, 1.);\n}\n");
//# sourceMappingURL=screen-grid-layer-vertex.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScreenGridLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/index.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/utils/iterable-utils.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/utils/log.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/viewports/web-mercator-viewport.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/lib/layer.js");
/* harmony import */ var _utils_color_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/color-utils */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/color-utils.js");
/* harmony import */ var _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/gpu-grid-aggregation/gpu-grid-aggregator */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/gpu-grid-aggregation/gpu-grid-aggregator.js");
/* harmony import */ var _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/aggregation-operation-utils */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/utils/aggregation-operation-utils.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/webgl/dist/esm/webgl-utils/webgl-checks.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/lib/model.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/geometry/geometry.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/webgl/dist/esm/classes/buffer.js");
/* harmony import */ var _screen_grid_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./screen-grid-layer-vertex.glsl */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer-vertex.glsl.js");
/* harmony import */ var _screen_grid_layer_vertex_webgl1_glsl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./screen-grid-layer-vertex-webgl1.glsl */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer-vertex-webgl1.glsl.js");
/* harmony import */ var _screen_grid_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./screen-grid-layer-fragment.glsl */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer-fragment.glsl.js");
/* harmony import */ var _screen_grid_layer_fragment_webgl1_glsl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./screen-grid-layer-fragment-webgl1.glsl */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer-fragment-webgl1.glsl.js");







var count = _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__["experimental"].count;








var DEFAULT_MINCOLOR = [0, 0, 0, 0];
var DEFAULT_MAXCOLOR = [0, 255, 0, 255];
var AGGREGATION_DATA_UBO_INDEX = 0;
var COLOR_PROPS = ["minColor", "maxColor", "colorRange", "colorDomain"];
var defaultProps = {
  cellSizePixels: {
    value: 100,
    min: 1
  },
  cellMarginPixels: {
    value: 2,
    min: 0,
    max: 5
  },
  colorDomain: null,
  colorRange: _utils_color_utils__WEBPACK_IMPORTED_MODULE_11__["defaultColorRange"],
  getPosition: {
    type: 'accessor',
    value: function value(d) {
      return d.position;
    }
  },
  getWeight: {
    type: 'accessor',
    value: function value(d) {
      return [1, 0, 0];
    }
  },
  gpuAggregation: true,
  aggregation: 'SUM'
};

var ScreenGridLayer = function (_Layer) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ScreenGridLayer, _Layer);

  function ScreenGridLayer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScreenGridLayer);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ScreenGridLayer).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ScreenGridLayer, [{
    key: "getShaders",
    value: function getShaders() {
      var shaders = Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_14__["isWebGL2"])(this.context.gl) ? {
        vs: _screen_grid_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_18__["default"],
        fs: _screen_grid_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_20__["default"]
      } : {
        vs: _screen_grid_layer_vertex_webgl1_glsl__WEBPACK_IMPORTED_MODULE_19__["default"],
        fs: _screen_grid_layer_fragment_webgl1_glsl__WEBPACK_IMPORTED_MODULE_21__["default"]
      };
      shaders.modules = ['picking'];
      return shaders;
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      var attributeManager = this.getAttributeManager();
      var gl = this.context.gl;
      attributeManager.addInstanced({
        instancePositions: {
          size: 3,
          update: this.calculateInstancePositions
        },
        instanceCounts: {
          size: 4,
          transition: true,
          accessor: ['getPosition', 'getWeight'],
          update: this.calculateInstanceCounts,
          noAlloc: true
        }
      });
      var options = {
        id: "".concat(this.id, "-aggregator"),
        shaderCache: this.context.shaderCache
      };

      var maxBuffer = this._getMaxCountBuffer(gl);

      var weights = {
        color: {
          size: 1,
          operation: _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_13__["AGGREGATION_OPERATION"].SUM,
          needMax: true,
          maxBuffer: maxBuffer
        }
      };
      this.setState({
        model: this._getModel(gl),
        gpuGridAggregator: new _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_12__["default"](gl, options),
        maxBuffer: maxBuffer,
        weights: weights
      });

      this._setupUniformBuffer();
    }
  }, {
    key: "shouldUpdateState",
    value: function shouldUpdateState(_ref) {
      var changeFlags = _ref.changeFlags;
      return changeFlags.somethingChanged;
    }
  }, {
    key: "updateState",
    value: function updateState(opts) {
      Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ScreenGridLayer.prototype), "updateState", this).call(this, opts);

      this._updateUniforms(opts);

      if (opts.changeFlags.dataChanged) {
        this._processData();
      }

      var changeFlags = this._getAggregationChangeFlags(opts);

      if (changeFlags) {
        this._updateAggregation(changeFlags);
      }
    }
  }, {
    key: "finalizeState",
    value: function finalizeState() {
      Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ScreenGridLayer.prototype), "finalizeState", this).call(this);

      var _this$state = this.state,
          aggregationBuffer = _this$state.aggregationBuffer,
          maxBuffer = _this$state.maxBuffer,
          gpuGridAggregator = _this$state.gpuGridAggregator;
      gpuGridAggregator.delete();

      if (aggregationBuffer) {
        aggregationBuffer.delete();
      }

      if (maxBuffer) {
        maxBuffer.delete();
      }
    }
  }, {
    key: "draw",
    value: function draw(_ref2) {
      var uniforms = _ref2.uniforms;
      var gl = this.context.gl;
      var _this$props$parameter = this.props.parameters,
          parameters = _this$props$parameter === void 0 ? {} : _this$props$parameter;
      var minColor = this.props.minColor || DEFAULT_MINCOLOR;
      var maxColor = this.props.maxColor || DEFAULT_MAXCOLOR;
      var colorDomain = this.props.colorDomain || [1, 0];
      var _this$state2 = this.state,
          model = _this$state2.model,
          maxBuffer = _this$state2.maxBuffer,
          cellScale = _this$state2.cellScale,
          shouldUseMinMax = _this$state2.shouldUseMinMax,
          colorRange = _this$state2.colorRange,
          maxWeight = _this$state2.maxWeight;
      var layerUniforms = {
        minColor: minColor,
        maxColor: maxColor,
        cellScale: cellScale,
        colorRange: colorRange,
        colorDomain: colorDomain,
        shouldUseMinMax: shouldUseMinMax
      };

      if (Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_14__["isWebGL2"])(gl)) {
        maxBuffer.bind({
          target: 35345
        });
      } else {
        layerUniforms.maxWeight = maxWeight;
      }

      uniforms = Object.assign(layerUniforms, uniforms);
      model.draw({
        uniforms: uniforms,
        parameters: Object.assign({
          depthTest: false,
          depthMask: false
        }, parameters)
      });

      if (Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_14__["isWebGL2"])(gl)) {
        maxBuffer.unbind();
      }
    }
  }, {
    key: "calculateInstancePositions",
    value: function calculateInstancePositions(attribute, _ref3) {
      var numInstances = _ref3.numInstances;
      var _this$context$viewpor = this.context.viewport,
          width = _this$context$viewpor.width,
          height = _this$context$viewpor.height;
      var cellSizePixels = this.props.cellSizePixels;
      var numCol = this.state.numCol;
      var value = attribute.value,
          size = attribute.size;

      for (var i = 0; i < numInstances; i++) {
        var x = i % numCol;
        var y = Math.floor(i / numCol);
        value[i * size + 0] = x * cellSizePixels / width * 2 - 1;
        value[i * size + 1] = 1 - y * cellSizePixels / height * 2;
        value[i * size + 2] = 0;
      }
    }
  }, {
    key: "calculateInstanceCounts",
    value: function calculateInstanceCounts(attribute, _ref4) {
      var numInstances = _ref4.numInstances;
      var aggregationBuffer = this.state.aggregationBuffer;
      attribute.update({
        buffer: aggregationBuffer
      });
    }
  }, {
    key: "getPickingInfo",
    value: function getPickingInfo(_ref5) {
      var info = _ref5.info,
          mode = _ref5.mode;
      var index = info.index;

      if (index >= 0) {
        var gpuGridAggregator = this.state.gpuGridAggregator;
        var aggregationResults = gpuGridAggregator.getData('color');
        info.object = _utils_gpu_grid_aggregation_gpu_grid_aggregator__WEBPACK_IMPORTED_MODULE_12__["default"].getAggregationData(Object.assign({
          pixelIndex: index
        }, aggregationResults));
      }

      return info;
    }
  }, {
    key: "_getAggregationChangeFlags",
    value: function _getAggregationChangeFlags(_ref6) {
      var oldProps = _ref6.oldProps,
          props = _ref6.props,
          changeFlags = _ref6.changeFlags;
      var cellSizeChanged = props.cellSizePixels !== oldProps.cellSizePixels || props.cellMarginPixels !== oldProps.cellMarginPixels;
      var dataChanged = changeFlags.dataChanged || props.aggregation !== oldProps.aggregation;
      var viewportChanged = changeFlags.viewportChanged;

      if (cellSizeChanged || dataChanged || viewportChanged) {
        return {
          cellSizeChanged: cellSizeChanged,
          dataChanged: dataChanged,
          viewportChanged: viewportChanged
        };
      }

      return null;
    }
  }, {
    key: "_getModel",
    value: function _getModel(gl) {
      return new _luma_gl_core__WEBPACK_IMPORTED_MODULE_15__["default"](gl, Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: new _luma_gl_core__WEBPACK_IMPORTED_MODULE_16__["default"]({
          drawMode: 6,
          attributes: {
            positions: new Float32Array([0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0])
          }
        }),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      }));
    }
  }, {
    key: "_getMaxCountBuffer",
    value: function _getMaxCountBuffer(gl) {
      return new _luma_gl_core__WEBPACK_IMPORTED_MODULE_17__["default"](gl, {
        byteLength: 4 * 4,
        index: AGGREGATION_DATA_UBO_INDEX,
        accessor: {
          size: 4
        }
      });
    }
  }, {
    key: "_processData",
    value: function _processData() {
      var _this$props = this.props,
          data = _this$props.data,
          getPosition = _this$props.getPosition,
          getWeight = _this$props.getWeight;
      var pointCount = count(data);
      var positions = new Float64Array(pointCount * 2);
      var colorWeights = new Float32Array(pointCount * 3);
      var weights = this.state.weights;

      var _createIterable = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_7__["createIterable"])(data),
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
          var weight = getWeight(object, objectInfo);
          var index = objectInfo.index;
          positions[index * 2] = position[0];
          positions[index * 2 + 1] = position[1];

          if (Array.isArray(weight)) {
            colorWeights[index * 3] = weight[0];
            colorWeights[index * 3 + 1] = weight[1];
            colorWeights[index * 3 + 2] = weight[2];
          } else {
            colorWeights[index * 3] = weight;
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

      weights.color.values = colorWeights;
      this.setState({
        positions: positions
      });
    }
  }, {
    key: "_setupUniformBuffer",
    value: function _setupUniformBuffer() {
      var gl = this.context.gl;

      if (!Object(_luma_gl_core__WEBPACK_IMPORTED_MODULE_14__["isWebGL2"])(gl)) {
        return;
      }

      var programHandle = this.state.model.program.handle;
      var uniformBlockIndex = gl.getUniformBlockIndex(programHandle, 'AggregationData');
      gl.uniformBlockBinding(programHandle, uniformBlockIndex, AGGREGATION_DATA_UBO_INDEX);
    }
  }, {
    key: "_shouldUseMinMax",
    value: function _shouldUseMinMax() {
      var _this$props2 = this.props,
          minColor = _this$props2.minColor,
          maxColor = _this$props2.maxColor,
          colorDomain = _this$props2.colorDomain,
          colorRange = _this$props2.colorRange;

      if (minColor || maxColor) {
        _deck_gl_core__WEBPACK_IMPORTED_MODULE_8__["default"].deprecated('ScreenGridLayer props: minColor and maxColor', 'colorRange, colorDomain')();
        return true;
      }

      if (colorDomain || colorRange) {
        return false;
      }

      return true;
    }
  }, {
    key: "_updateAggregation",
    value: function _updateAggregation(changeFlags) {
      var attributeManager = this.getAttributeManager();

      if (changeFlags.cellSizeChanged || changeFlags.viewportChanged) {
        this._updateGridParams();

        attributeManager.invalidateAll();
      }

      var _this$props3 = this.props,
          cellSizePixels = _this$props3.cellSizePixels,
          gpuAggregation = _this$props3.gpuAggregation;
      var _this$state3 = this.state,
          positions = _this$state3.positions,
          weights = _this$state3.weights;
      var viewport = this.context.viewport;
      weights.color.operation = _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_13__["AGGREGATION_OPERATION"][this.props.aggregation.toUpperCase()] || _utils_aggregation_operation_utils__WEBPACK_IMPORTED_MODULE_13__["AGGREGATION_OPERATION"].SUM;
      var projectPoints = false;
      var gridTransformMatrix = null;

      if (this.context.viewport instanceof _deck_gl_core__WEBPACK_IMPORTED_MODULE_9__["default"]) {
        projectPoints = true;
      } else {
        projectPoints = false;
        gridTransformMatrix = viewport.pixelProjectionMatrix;
      }

      var results = this.state.gpuGridAggregator.run({
        positions: positions,
        weights: weights,
        cellSize: [cellSizePixels, cellSizePixels],
        viewport: viewport,
        changeFlags: changeFlags,
        useGPU: gpuAggregation,
        projectPoints: projectPoints,
        gridTransformMatrix: gridTransformMatrix
      });
      var maxWeight = results.color.maxData && Number.isFinite(results.color.maxData[0]) ? results.color.maxData[0] : 0;
      this.setState({
        maxWeight: maxWeight
      });
      attributeManager.invalidate('instanceCounts');
    }
  }, {
    key: "_updateUniforms",
    value: function _updateUniforms(_ref7) {
      var oldProps = _ref7.oldProps,
          props = _ref7.props,
          changeFlags = _ref7.changeFlags;
      var newState = {};

      if (COLOR_PROPS.some(function (key) {
        return oldProps[key] !== props[key];
      })) {
        newState.shouldUseMinMax = this._shouldUseMinMax();
      }

      if (oldProps.colorRange !== props.colorRange) {
        newState.colorRange = Object(_utils_color_utils__WEBPACK_IMPORTED_MODULE_11__["colorRangeToFlatArray"])(props.colorRange, Float32Array, 255);
      }

      if (oldProps.cellMarginPixels !== props.cellMarginPixels || oldProps.cellSizePixels !== props.cellSizePixels || changeFlags.viewportChanged) {
        var _this$context$viewpor2 = this.context.viewport,
            width = _this$context$viewpor2.width,
            height = _this$context$viewpor2.height;
        var _this$props4 = this.props,
            cellSizePixels = _this$props4.cellSizePixels,
            cellMarginPixels = _this$props4.cellMarginPixels;
        var margin = cellSizePixels > cellMarginPixels ? cellMarginPixels : 0;
        newState.cellScale = new Float32Array([(cellSizePixels - margin) / width * 2, -(cellSizePixels - margin) / height * 2, 1]);
      }

      this.setState(newState);
    }
  }, {
    key: "_updateGridParams",
    value: function _updateGridParams() {
      var _this$context$viewpor3 = this.context.viewport,
          width = _this$context$viewpor3.width,
          height = _this$context$viewpor3.height;
      var cellSizePixels = this.props.cellSizePixels;
      var gl = this.context.gl;
      var numCol = Math.ceil(width / cellSizePixels);
      var numRow = Math.ceil(height / cellSizePixels);
      var numInstances = numCol * numRow;
      var dataBytes = numInstances * 4 * 4;
      var aggregationBuffer = this.state.aggregationBuffer;

      if (aggregationBuffer) {
        aggregationBuffer.delete();
      }

      aggregationBuffer = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_17__["default"](gl, {
        byteLength: dataBytes,
        accessor: {
          size: 4,
          type: 5126,
          divisor: 1
        }
      });
      this.state.weights.color.aggregationBuffer = aggregationBuffer;
      this.setState({
        numCol: numCol,
        numRow: numRow,
        numInstances: numInstances,
        aggregationBuffer: aggregationBuffer
      });
    }
  }]);

  return ScreenGridLayer;
}(_deck_gl_core__WEBPACK_IMPORTED_MODULE_10__["default"]);


ScreenGridLayer.layerName = 'ScreenGridLayer';
ScreenGridLayer.defaultProps = defaultProps;
//# sourceMappingURL=screen-grid-layer.js.map

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

/***/ "./node_modules/@deck.gl/layers/dist/esm/arc-layer/arc-layer-fragment.glsl.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/arc-layer/arc-layer-fragment.glsl.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME arc-layer-fragment-shader\n\nprecision highp float;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  gl_FragColor = vColor;\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n");
//# sourceMappingURL=arc-layer-fragment.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/arc-layer/arc-layer-vertex-64.glsl.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/arc-layer/arc-layer-vertex-64.glsl.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME arc-layer-vertex-shader-64\n\nattribute vec3 positions;\nattribute vec4 instanceSourceColors;\nattribute vec4 instanceTargetColors;\n\nattribute vec4 instancePositions;\nattribute vec4 instancePositions64Low;\n\nattribute vec3 instancePickingColors;\nattribute float instanceWidths;\n\nuniform float numSegments;\nuniform float opacity;\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\n\nvarying vec4 vColor;\n\nvec2 paraboloid_fp64(vec2 source[2], vec2 target[2], float ratio) {\n\n  vec2 x[2];\n  vec2_mix_fp64(source, target, ratio, x);\n  vec2 center[2];\n  vec2_mix_fp64(source, target, 0.5, center);\n\n  vec2 dSourceCenter = vec2_distance_fp64(source, center);\n  vec2 dXCenter = vec2_distance_fp64(x, center);\n  return mul_fp64(sum_fp64(dSourceCenter, dXCenter), sub_fp64(dSourceCenter, dXCenter));\n}\nvec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {\n  vec2 dir_screenspace = normalize(line_clipspace * project_uViewportSize);\n  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);\n\n  vec2 offset_screenspace = dir_screenspace * offset_direction * width / 2.0;\n  vec2 offset_clipspace = project_pixel_size_to_clipspace(offset_screenspace);\n\n  return offset_clipspace;\n}\n\nfloat getSegmentRatio(float index) {\n  return smoothstep(0.0, 1.0, index / (numSegments - 1.0));\n}\n\nvoid get_pos_fp64(vec2 source[2], vec2 target[2], float segmentRatio, out vec2 position[4]) {\n\n  vec2 vertex_height = paraboloid_fp64(source, target, segmentRatio);\n\n  vec2 position_temp[2];\n\n  vec2_mix_fp64(source, target, segmentRatio, position_temp);\n\n  position[0] = position_temp[0];\n  position[1] = position_temp[1];\n\n  if (vertex_height.x < 0.0 || (vertex_height.x == 0.0 && vertex_height.y <= 0.0)) {\n    vertex_height = vec2(0.0, 0.0);\n  }\n\n  position[2] = sqrt_fp64(vertex_height);\n  position[3] = vec2(1.0, 0.0);\n}\n\nvoid main(void) {\n  vec2 projected_source_coord[2];\n  vec2 projected_target_coord[2];\n\n  project_position_fp64(instancePositions.xy, instancePositions64Low.xy, projected_source_coord);\n  project_position_fp64(instancePositions.zw, instancePositions64Low.zw, projected_target_coord);\n\n  float segmentIndex = positions.x;\n  float segmentRatio = getSegmentRatio(segmentIndex);\n  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));\n  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);\n\n  vec2 curr_pos_modelspace[4];\n\n  get_pos_fp64(projected_source_coord, projected_target_coord, segmentRatio,\n    curr_pos_modelspace);\n\n  vec2 next_pos_modelspace[4];\n\n  get_pos_fp64(projected_source_coord, projected_target_coord, nextSegmentRatio,\n    next_pos_modelspace);\n\n  vec4 curr_pos_clipspace = project_common_position_to_clipspace_fp64(curr_pos_modelspace);\n  vec4 next_pos_clipspace = project_common_position_to_clipspace_fp64(next_pos_modelspace);\n  float widthPixels = clamp(\n    project_size_to_pixel(instanceWidths * widthScale),\n    widthMinPixels, widthMaxPixels\n  );\n\n  vec2 offset = getExtrusionOffset(next_pos_clipspace.xy - curr_pos_clipspace.xy, positions.y, widthPixels);\n\n  gl_Position = curr_pos_clipspace + vec4(offset, 0.0, 0.0);\n\n  vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio) / 255.;\n  vColor = vec4(color.rgb, color.a * opacity);\n  picking_setPickingColor(instancePickingColors);\n}\n");
//# sourceMappingURL=arc-layer-vertex-64.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/arc-layer/arc-layer-vertex.glsl.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/arc-layer/arc-layer-vertex.glsl.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#define SHADER_NAME arc-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec4 instanceSourceColors;\nattribute vec4 instanceTargetColors;\nattribute vec4 instancePositions;\nattribute vec4 instancePositions64Low;\nattribute vec3 instancePickingColors;\nattribute float instanceWidths;\nattribute float instanceHeights;\nattribute float instanceTilts;\n\nuniform float numSegments;\nuniform float opacity;\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\n\nvarying vec4 vColor;\n\nfloat paraboloid(vec2 source, vec2 target, float ratio) {\n\n  vec2 x = mix(source, target, ratio);\n  vec2 center = mix(source, target, 0.5);\n\n  float dSourceCenter = distance(source, center);\n  float dXCenter = distance(x, center);\n  return (dSourceCenter + dXCenter) * (dSourceCenter - dXCenter);\n}\nvec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {\n  vec2 dir_screenspace = normalize(line_clipspace * project_uViewportSize);\n  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);\n\n  vec2 offset_screenspace = dir_screenspace * offset_direction * width / 2.0;\n  vec2 offset_clipspace = project_pixel_size_to_clipspace(offset_screenspace);\n\n  return offset_clipspace;\n}\n\nfloat getSegmentRatio(float index) {\n  return smoothstep(0.0, 1.0, index / (numSegments - 1.0));\n}\n\nvec3 getPos(vec2 source, vec2 target, float segmentRatio) {\n  float vertexHeight = sqrt(max(0.0, paraboloid(source, target, segmentRatio))) * instanceHeights;\n\n  float tiltAngle = radians(instanceTilts);\n  vec2 tiltDirection = normalize(target - source);\n  vec2 tilt = vec2(-tiltDirection.y, tiltDirection.x) * vertexHeight * sin(tiltAngle);\n\n  return vec3(\n    mix(source, target, segmentRatio) + tilt,\n    vertexHeight * cos(tiltAngle)\n  );\n}\n\nvoid main(void) {\n  vec2 source = project_position(vec3(instancePositions.xy, 0.0), instancePositions64Low.xy).xy;\n  vec2 target = project_position(vec3(instancePositions.zw, 0.0), instancePositions64Low.zw).xy;\n\n  float segmentIndex = positions.x;\n  float segmentRatio = getSegmentRatio(segmentIndex);\n  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));\n  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);\n\n  vec3 currPos = getPos(source, target, segmentRatio);\n  vec3 nextPos = getPos(source, target, nextSegmentRatio);\n  vec4 curr = project_common_position_to_clipspace(vec4(currPos, 1.0));\n  vec4 next = project_common_position_to_clipspace(vec4(nextPos, 1.0));\n  float widthPixels = clamp(\n    project_size_to_pixel(instanceWidths * widthScale),\n    widthMinPixels, widthMaxPixels\n  );\n  vec2 offset = getExtrusionOffset((next.xy - curr.xy) * indexDir, positions.y, widthPixels);\n  gl_Position = curr + vec4(offset, 0.0, 0.0);\n\n  vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio) / 255.;\n  vColor = vec4(color.rgb, color.a * opacity);\n  picking_setPickingColor(instancePickingColors);\n}\n");
//# sourceMappingURL=arc-layer-vertex.glsl.js.map

/***/ }),

/***/ "./node_modules/@deck.gl/layers/dist/esm/arc-layer/arc-layer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/arc-layer/arc-layer.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArcLayer; });
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
/* harmony import */ var _arc_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./arc-layer-vertex.glsl */ "./node_modules/@deck.gl/layers/dist/esm/arc-layer/arc-layer-vertex.glsl.js");
/* harmony import */ var _arc_layer_vertex_64_glsl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./arc-layer-vertex-64.glsl */ "./node_modules/@deck.gl/layers/dist/esm/arc-layer/arc-layer-vertex-64.glsl.js");
/* harmony import */ var _arc_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./arc-layer-fragment.glsl */ "./node_modules/@deck.gl/layers/dist/esm/arc-layer/arc-layer-fragment.glsl.js");








var fp64LowPart = _luma_gl_core__WEBPACK_IMPORTED_MODULE_8__["default"].fp64LowPart;



var DEFAULT_COLOR = [0, 0, 0, 255];
var defaultProps = {
  fp64: false,
  getSourcePosition: {
    type: 'accessor',
    value: function value(x) {
      return x.sourcePosition;
    }
  },
  getTargetPosition: {
    type: 'accessor',
    value: function value(x) {
      return x.targetPosition;
    }
  },
  getSourceColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getTargetColor: {
    type: 'accessor',
    value: DEFAULT_COLOR
  },
  getWidth: {
    type: 'accessor',
    value: 1
  },
  getHeight: {
    type: 'accessor',
    value: 1
  },
  getTilt: {
    type: 'accessor',
    value: 0
  },
  widthUnits: 'pixels',
  widthScale: {
    type: 'number',
    value: 1,
    min: 0
  },
  widthMinPixels: {
    type: 'number',
    value: 0,
    min: 0
  },
  widthMaxPixels: {
    type: 'number',
    value: Number.MAX_SAFE_INTEGER,
    min: 0
  },
  getStrokeWidth: {
    deprecatedFor: 'getWidth'
  }
};

var ArcLayer = function (_Layer) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ArcLayer, _Layer);

  function ArcLayer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ArcLayer);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ArcLayer).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ArcLayer, [{
    key: "getShaders",
    value: function getShaders() {
      return this.use64bitProjection() ? {
        vs: _arc_layer_vertex_64_glsl__WEBPACK_IMPORTED_MODULE_12__["default"],
        fs: _arc_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_13__["default"],
        modules: ['project64', 'picking']
      } : {
        vs: _arc_layer_vertex_glsl__WEBPACK_IMPORTED_MODULE_11__["default"],
        fs: _arc_layer_fragment_glsl__WEBPACK_IMPORTED_MODULE_13__["default"],
        modules: ['picking']
      };
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      var attributeManager = this.getAttributeManager();
      attributeManager.addInstanced({
        instancePositions: {
          size: 4,
          transition: true,
          accessor: ['getSourcePosition', 'getTargetPosition'],
          update: this.calculateInstancePositions
        },
        instancePositions64Low: {
          size: 4,
          accessor: ['getSourcePosition', 'getTargetPosition'],
          update: this.calculateInstancePositions64Low
        },
        instanceSourceColors: {
          size: 4,
          type: 5121,
          transition: true,
          accessor: 'getSourceColor',
          defaultValue: DEFAULT_COLOR
        },
        instanceTargetColors: {
          size: 4,
          type: 5121,
          transition: true,
          accessor: 'getTargetColor',
          defaultValue: DEFAULT_COLOR
        },
        instanceWidths: {
          size: 1,
          transition: true,
          accessor: 'getWidth',
          defaultValue: 1
        },
        instanceHeights: {
          size: 1,
          transition: true,
          accessor: 'getHeight',
          defaultValue: 1
        },
        instanceTilts: {
          size: 1,
          transition: true,
          accessor: 'getTilt',
          defaultValue: 0
        }
      });
    }
  }, {
    key: "updateState",
    value: function updateState(_ref) {
      var props = _ref.props,
          oldProps = _ref.oldProps,
          changeFlags = _ref.changeFlags;

      Object(_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ArcLayer.prototype), "updateState", this).call(this, {
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
          widthUnits = _this$props.widthUnits,
          widthScale = _this$props.widthScale,
          widthMinPixels = _this$props.widthMinPixels,
          widthMaxPixels = _this$props.widthMaxPixels;
      var widthMultiplier = widthUnits === 'pixels' ? viewport.distanceScales.metersPerPixel[2] : 1;
      this.state.model.setUniforms(Object.assign({}, uniforms, {
        widthScale: widthScale * widthMultiplier,
        widthMinPixels: widthMinPixels,
        widthMaxPixels: widthMaxPixels
      })).draw();
    }
  }, {
    key: "_getModel",
    value: function _getModel(gl) {
      var positions = [];
      var NUM_SEGMENTS = 50;

      for (var i = 0; i < NUM_SEGMENTS; i++) {
        positions = positions.concat([i, -1, 0, i, 1, 0]);
      }

      var model = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_9__["default"](gl, Object.assign({}, this.getShaders(), {
        id: this.props.id,
        geometry: new _luma_gl_core__WEBPACK_IMPORTED_MODULE_10__["default"]({
          drawMode: 5,
          attributes: {
            positions: new Float32Array(positions)
          }
        }),
        isInstanced: true,
        shaderCache: this.context.shaderCache
      }));
      model.setUniforms({
        numSegments: NUM_SEGMENTS
      });
      return model;
    }
  }, {
    key: "calculateInstancePositions",
    value: function calculateInstancePositions(attribute, _ref3) {
      var startRow = _ref3.startRow,
          endRow = _ref3.endRow;
      var _this$props2 = this.props,
          data = _this$props2.data,
          getSourcePosition = _this$props2.getSourcePosition,
          getTargetPosition = _this$props2.getTargetPosition;
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
          var sourcePosition = getSourcePosition(object, objectInfo);
          value[i++] = sourcePosition[0];
          value[i++] = sourcePosition[1];
          var targetPosition = getTargetPosition(object, objectInfo);
          value[i++] = targetPosition[0];
          value[i++] = targetPosition[1];
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
  }, {
    key: "calculateInstancePositions64Low",
    value: function calculateInstancePositions64Low(attribute, _ref4) {
      var startRow = _ref4.startRow,
          endRow = _ref4.endRow;
      var isFP64 = this.use64bitPositions();
      attribute.constant = !isFP64;

      if (!isFP64) {
        attribute.value = new Float32Array(4);
        return;
      }

      var _this$props3 = this.props,
          data = _this$props3.data,
          getSourcePosition = _this$props3.getSourcePosition,
          getTargetPosition = _this$props3.getTargetPosition;
      var value = attribute.value,
          size = attribute.size;
      var i = startRow * size;

      var _createIterable2 = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_6__["createIterable"])(data, startRow, endRow),
          iterable = _createIterable2.iterable,
          objectInfo = _createIterable2.objectInfo;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var object = _step2.value;
          objectInfo.index++;
          var sourcePosition = getSourcePosition(object, objectInfo);
          value[i++] = fp64LowPart(sourcePosition[0]);
          value[i++] = fp64LowPart(sourcePosition[1]);
          var targetPosition = getTargetPosition(object, objectInfo);
          value[i++] = fp64LowPart(targetPosition[0]);
          value[i++] = fp64LowPart(targetPosition[1]);
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
    }
  }]);

  return ArcLayer;
}(_deck_gl_core__WEBPACK_IMPORTED_MODULE_7__["default"]);


ArcLayer.layerName = 'ArcLayer';
ArcLayer.defaultProps = defaultProps;
//# sourceMappingURL=arc-layer.js.map

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

/***/ "./node_modules/@deck.gl/layers/dist/esm/polygon-layer/polygon-layer.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@deck.gl/layers/dist/esm/polygon-layer/polygon-layer.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolygonLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _luma_gl_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @luma.gl/core */ "./node_modules/@luma.gl/core/dist/esm/materials/phong-material.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/utils/iterable-utils.js");
/* harmony import */ var _deck_gl_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @deck.gl/core */ "./node_modules/@deck.gl/core/dist/esm/lib/composite-layer.js");
/* harmony import */ var _solid_polygon_layer_solid_polygon_layer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../solid-polygon-layer/solid-polygon-layer */ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/solid-polygon-layer.js");
/* harmony import */ var _path_layer_path_layer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../path-layer/path-layer */ "./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer.js");
/* harmony import */ var _solid_polygon_layer_polygon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../solid-polygon-layer/polygon */ "./node_modules/@deck.gl/layers/dist/esm/solid-polygon-layer/polygon.js");










var defaultLineColor = [0, 0, 0, 255];
var defaultFillColor = [0, 0, 0, 255];
var defaultMaterial = new _luma_gl_core__WEBPACK_IMPORTED_MODULE_5__["default"]();
var defaultProps = {
  stroked: true,
  filled: true,
  extruded: false,
  elevationScale: 1,
  wireframe: false,
  lineWidthUnits: 'meters',
  lineWidthScale: 1,
  lineWidthMinPixels: 0,
  lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
  lineJointRounded: false,
  lineMiterLimit: 4,
  lineDashJustified: false,
  fp64: false,
  getPolygon: {
    type: 'accessor',
    value: function value(f) {
      return f.polygon;
    }
  },
  getFillColor: {
    type: 'accessor',
    value: defaultFillColor
  },
  getLineColor: {
    type: 'accessor',
    value: defaultLineColor
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

var PolygonLayer = function (_CompositeLayer) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PolygonLayer, _CompositeLayer);

  function PolygonLayer() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PolygonLayer);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PolygonLayer).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PolygonLayer, [{
    key: "initializeState",
    value: function initializeState() {
      this.state = {
        paths: []
      };
    }
  }, {
    key: "updateState",
    value: function updateState(_ref) {
      var oldProps = _ref.oldProps,
          props = _ref.props,
          changeFlags = _ref.changeFlags;
      var geometryChanged = changeFlags.dataChanged || changeFlags.updateTriggersChanged && (changeFlags.updateTriggersChanged.all || changeFlags.updateTriggersChanged.getPolygon);

      if (geometryChanged) {
        this.state.paths = this._getPaths(props);
      }
    }
  }, {
    key: "getPickingInfo",
    value: function getPickingInfo(_ref2) {
      var info = _ref2.info;
      return Object.assign(info, {
        object: info.object && info.object.object || info.object
      });
    }
  }, {
    key: "_getPaths",
    value: function _getPaths(_ref3) {
      var data = _ref3.data,
          getPolygon = _ref3.getPolygon,
          positionFormat = _ref3.positionFormat;
      var paths = [];
      var positionSize = positionFormat === 'XY' ? 2 : 3;

      var _createIterable = Object(_deck_gl_core__WEBPACK_IMPORTED_MODULE_6__["createIterable"])(data),
          iterable = _createIterable.iterable,
          objectInfo = _createIterable.objectInfo;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var object = _step.value;
          objectInfo.index++;

          var _Polygon$normalize = _solid_polygon_layer_polygon__WEBPACK_IMPORTED_MODULE_10__["normalize"](getPolygon(object, objectInfo), positionSize),
              positions = _Polygon$normalize.positions,
              holeIndices = _Polygon$normalize.holeIndices;

          if (holeIndices) {
            for (var i = 0; i <= holeIndices.length; i++) {
              var path = positions.subarray(holeIndices[i - 1] || 0, holeIndices[i] || positions.length);
              paths.push({
                path: path,
                object: object
              });
            }
          } else {
            paths.push({
              path: positions,
              object: object
            });
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

      return paths;
    }
  }, {
    key: "_getAccessor",
    value: function _getAccessor(accessor) {
      if (typeof accessor === 'function') {
        return function (x) {
          return accessor(x.object);
        };
      }

      return accessor;
    }
  }, {
    key: "renderLayers",
    value: function renderLayers() {
      var _this$props = this.props,
          data = _this$props.data,
          stroked = _this$props.stroked,
          filled = _this$props.filled,
          extruded = _this$props.extruded,
          wireframe = _this$props.wireframe,
          elevationScale = _this$props.elevationScale,
          transitions = _this$props.transitions;
      var _this$props2 = this.props,
          lineWidthUnits = _this$props2.lineWidthUnits,
          lineWidthScale = _this$props2.lineWidthScale,
          lineWidthMinPixels = _this$props2.lineWidthMinPixels,
          lineWidthMaxPixels = _this$props2.lineWidthMaxPixels,
          lineJointRounded = _this$props2.lineJointRounded,
          lineMiterLimit = _this$props2.lineMiterLimit,
          lineDashJustified = _this$props2.lineDashJustified,
          fp64 = _this$props2.fp64;
      var _this$props3 = this.props,
          getFillColor = _this$props3.getFillColor,
          getLineColor = _this$props3.getLineColor,
          getLineWidth = _this$props3.getLineWidth,
          getLineDashArray = _this$props3.getLineDashArray,
          getElevation = _this$props3.getElevation,
          getPolygon = _this$props3.getPolygon,
          updateTriggers = _this$props3.updateTriggers,
          material = _this$props3.material;
      var paths = this.state.paths;
      var FillLayer = this.getSubLayerClass('fill', _solid_polygon_layer_solid_polygon_layer__WEBPACK_IMPORTED_MODULE_8__["default"]);
      var StrokeLayer = this.getSubLayerClass('stroke', _path_layer_path_layer__WEBPACK_IMPORTED_MODULE_9__["default"]);
      var polygonLayer = this.shouldRenderSubLayer('fill', paths) && new FillLayer({
        extruded: extruded,
        elevationScale: elevationScale,
        fp64: fp64,
        filled: filled,
        wireframe: wireframe,
        getElevation: getElevation,
        getFillColor: getFillColor,
        getLineColor: getLineColor,
        material: material,
        transitions: transitions
      }, this.getSubLayerProps({
        id: 'fill',
        updateTriggers: {
          getPolygon: updateTriggers.getPolygon,
          getElevation: updateTriggers.getElevation,
          getFillColor: updateTriggers.getFillColor,
          getLineColor: updateTriggers.getLineColor
        }
      }), {
        data: data,
        getPolygon: getPolygon
      });
      var polygonLineLayer = !extruded && stroked && this.shouldRenderSubLayer('stroke', paths) && new StrokeLayer({
        fp64: fp64,
        widthUnits: lineWidthUnits,
        widthScale: lineWidthScale,
        widthMinPixels: lineWidthMinPixels,
        widthMaxPixels: lineWidthMaxPixels,
        rounded: lineJointRounded,
        miterLimit: lineMiterLimit,
        dashJustified: lineDashJustified,
        transitions: transitions && {
          getWidth: transitions.getLineWidth,
          getColor: transitions.getLineColor,
          getPath: transitions.getPolygon
        },
        getColor: this._getAccessor(getLineColor),
        getWidth: this._getAccessor(getLineWidth),
        getDashArray: this._getAccessor(getLineDashArray)
      }, this.getSubLayerProps({
        id: 'stroke',
        updateTriggers: {
          getWidth: updateTriggers.getLineWidth,
          getColor: updateTriggers.getLineColor,
          getDashArray: updateTriggers.getLineDashArray
        }
      }), {
        data: paths,
        getPath: function getPath(x) {
          return x.path;
        }
      });
      return [!extruded && polygonLayer, polygonLineLayer, extruded && polygonLayer];
    }
  }]);

  return PolygonLayer;
}(_deck_gl_core__WEBPACK_IMPORTED_MODULE_7__["default"]);


PolygonLayer.layerName = 'PolygonLayer';
PolygonLayer.defaultProps = defaultProps;
//# sourceMappingURL=polygon-layer.js.map

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

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/Multi/Multi.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/Multi/Multi.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/connection/SupersetClient.js");
/* harmony import */ var _DeckGLContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DeckGLContainer */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/DeckGLContainer.js");
/* harmony import */ var _utils_explore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/explore */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/explore.js");
/* harmony import */ var _layers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layers */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-handler-names */

/* eslint-disable react/no-access-state-in-setstate */

/* eslint-disable camelcase */

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
  formData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  payload: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  setControlValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  viewport: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  onAddFilter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
const defaultProps = {
  onAddFilter() {},

  onSelect() {}

};

class DeckMulti extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
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

    this.state = {
      subSlicesLayers: {}
    };
    this.onViewportChange = this.onViewportChange.bind(this);
  }

  componentDidMount() {
    const {
      formData,
      payload
    } = this.props;
    this.loadLayers(formData, payload);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      formData,
      payload
    } = nextProps;
    const hasChanges = !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEqual(this.props.formData.deck_slices, nextProps.formData.deck_slices);

    if (hasChanges) {
      this.loadLayers(formData, payload);
    }
  }

  onViewportChange(viewport) {
    this.setState({
      viewport
    });
  }

  loadLayers(formData, payload, viewport) {
    this.setState({
      subSlicesLayers: {},
      viewport
    });
    payload.data.slices.forEach(subslice => {
      // Filters applied to multi_deck are passed down to underlying charts
      // note that dashboard contextual information (filter_immune_slices and such) aren't
      // taken into consideration here
      const filters = [...(subslice.form_data.filters || []), ...(formData.filters || []), ...(formData.extra_filters || [])];

      const subsliceCopy = _extends({}, subslice, {
        form_data: _extends({}, subslice.form_data, {
          filters
        })
      });

      _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"].get({
        endpoint: Object(_utils_explore__WEBPACK_IMPORTED_MODULE_5__["getExploreLongUrl"])(subsliceCopy.form_data, 'json')
      }).then((_ref) => {
        let {
          json
        } = _ref;
        const layer = _layers__WEBPACK_IMPORTED_MODULE_6__["default"][subsliceCopy.form_data.viz_type](subsliceCopy.form_data, json, this.props.onAddFilter, this.setTooltip, [], this.props.onSelect);
        this.setState({
          subSlicesLayers: _extends({}, this.state.subSlicesLayers, {
            [subsliceCopy.slice_id]: layer
          })
        });
      }).catch(() => {});
    });
  }

  render() {
    const {
      payload,
      formData,
      setControlValue
    } = this.props;
    const {
      subSlicesLayers
    } = this.state;
    const layers = Object.values(subSlicesLayers);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeckGLContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ref: this.containerRef,
      mapboxApiAccessToken: payload.data.mapboxApiKey,
      viewport: this.state.viewport || this.props.viewport,
      layers: layers,
      mapStyle: formData.mapbox_style,
      setControlValue: setControlValue,
      onViewportChange: this.onViewportChange
    });
  }

}

DeckMulti.propTypes = propTypes;
DeckMulti.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (DeckMulti);

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

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Arc/Arc.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Arc/Arc.js ***!
  \************************************************************************************/
/*! exports provided: getLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayer", function() { return getLayer; });
/* harmony import */ var deck_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deck.gl */ "./node_modules/@deck.gl/layers/dist/esm/arc-layer/arc-layer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/common.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../factory */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/factory.js");
/* harmony import */ var _TooltipRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../TooltipRow */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/TooltipRow.js");
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







function getPoints(data) {
  const points = [];
  data.forEach(d => {
    points.push(d.sourcePosition);
    points.push(d.targetPosition);
  });
  return points;
}

function setTooltipContent(formData) {
  return o => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "deckgl-tooltip"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TooltipRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Start (Longitude, Latitude)') + ": ",
    value: o.object.sourcePosition[0] + ", " + o.object.sourcePosition[1]
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TooltipRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('End (Longitude, Latitude)') + ": ",
    value: o.object.targetPosition[0] + ", " + o.object.targetPosition[1]
  }), formData.dimension && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TooltipRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: formData.dimension + ": ",
    value: "" + o.object.cat_color
  }));
}

function getLayer(fd, payload, onAddFilter, setTooltip) {
  const data = payload.data.features;
  const sc = fd.color_picker;
  const tc = fd.target_color_picker;
  return new deck_gl__WEBPACK_IMPORTED_MODULE_0__["default"](_extends({
    data,
    getSourceColor: d => d.sourceColor || d.color || [sc.r, sc.g, sc.b, 255 * sc.a],
    getTargetColor: d => d.targetColor || d.color || [tc.r, tc.g, tc.b, 255 * tc.a],
    id: "path-layer-" + fd.slice_id,
    strokeWidth: fd.stroke_width ? fd.stroke_width : 3
  }, Object(_common__WEBPACK_IMPORTED_MODULE_3__["commonLayerProps"])(fd, setTooltip, setTooltipContent(fd))));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_factory__WEBPACK_IMPORTED_MODULE_4__["createCategoricalDeckGLComponent"])(getLayer, getPoints));

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

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Hex/Hex.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Hex/Hex.js ***!
  \************************************************************************************/
/*! exports provided: getLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayer", function() { return getLayer; });
/* harmony import */ var deck_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deck.gl */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/hexagon-layer/hexagon-layer.js");
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
    label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Centroid (Longitude and Latitude)') + ": ",
    value: "(" + o.coordinate[0] + ", " + o.coordinate[1] + ")"
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
    id: "hex-layer-" + fd.slice_id,
    data,
    pickable: true,
    radius: fd.grid_size,
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

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Path/Path.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Path/Path.js ***!
  \**************************************************************************************/
/*! exports provided: getLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayer", function() { return getLayer; });
/* harmony import */ var deck_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deck.gl */ "./node_modules/@deck.gl/layers/dist/esm/path-layer/path-layer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/common.js");
/* harmony import */ var _utils_sandbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/sandbox */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/sandbox.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../factory */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/factory.js");
/* harmony import */ var _TooltipRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../TooltipRow */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/TooltipRow.js");
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







function setTooltipContent(o) {
  return o.object.extraProps && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "deckgl-tooltip"
  }, Object.keys(o.object.extraProps).map((prop, index) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TooltipRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    key: "prop-" + index,
    label: prop + ": ",
    value: "" + o.object.extraProps[prop]
  })));
}

function getLayer(formData, payload, onAddFilter, setTooltip) {
  const fd = formData;
  const c = fd.color_picker;
  const fixedColor = [c.r, c.g, c.b, 255 * c.a];
  let data = payload.data.features.map(feature => _extends({}, feature, {
    path: feature.path,
    width: fd.line_width,
    color: fixedColor
  }));

  if (fd.js_data_mutator) {
    const jsFnMutator = Object(_utils_sandbox__WEBPACK_IMPORTED_MODULE_3__["default"])(fd.js_data_mutator);
    data = jsFnMutator(data);
  }

  return new deck_gl__WEBPACK_IMPORTED_MODULE_0__["default"](_extends({
    id: "path-layer-" + fd.slice_id,
    getColor: d => d.color,
    getPath: d => d.path,
    getWidth: d => d.width,
    data,
    rounded: true,
    widthScale: 1
  }, Object(_common__WEBPACK_IMPORTED_MODULE_2__["commonLayerProps"])(fd, setTooltip, setTooltipContent)));
}

function getPoints(data) {
  let points = [];
  data.forEach(d => {
    points = points.concat(d.path);
  });
  return points;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_factory__WEBPACK_IMPORTED_MODULE_4__["createDeckGLComponent"])(getLayer, getPoints));

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Polygon/Polygon.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Polygon/Polygon.js ***!
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
/* harmony import */ var deck_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deck.gl */ "./node_modules/@deck.gl/layers/dist/esm/polygon-layer/polygon-layer.js");
/* harmony import */ var _AnimatableDeckGLContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AnimatableDeckGLContainer */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/AnimatableDeckGLContainer.js");
/* harmony import */ var _components_Legend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Legend */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/components/Legend.js");
/* harmony import */ var _TooltipRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../TooltipRow */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/TooltipRow.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/common.js");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/time */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/time.js");
/* harmony import */ var _utils_sandbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/sandbox */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/sandbox.js");
/* harmony import */ var _utils_getPointsFromPolygon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/getPointsFromPolygon */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/getPointsFromPolygon.js");
/* harmony import */ var _utils_fitViewport__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/fitViewport */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/fitViewport.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/sort-prop-types */

/* eslint-disable react/jsx-handler-names */

/* eslint-disable react/no-access-state-in-setstate */

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

 // eslint-disable-next-line import/extensions


const DOUBLE_CLICK_TRESHOLD = 250; // milliseconds

function _getElevation(d, colorScaler) {
  /* in deck.gl 5.3.4 (used in Superset as of 2018-10-24), if a polygon has
   * opacity zero it will make everything behind it have opacity zero,
   * effectively showing the map layer no matter what other polygons are
   * behind it.
   */
  return colorScaler(d)[3] === 0 ? 0 : d.elevation;
}

function setTooltipContent(formData) {
  return o => {
    const metricLabel = formData.metric.label || formData.metric;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "deckgl-tooltip"
    }, o.object.name && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TooltipRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: "name: ",
      value: "" + o.object.name
    }), o.object[formData.line_column] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TooltipRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: formData.line_column + ": ",
      value: "" + o.object[formData.line_column]
    }), formData.metric && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TooltipRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: metricLabel + ": ",
      value: "" + o.object[metricLabel]
    }));
  };
}

function getLayer(formData, payload, onAddFilter, setTooltip, selected, onSelect, filters) {
  const fd = formData;
  const fc = fd.fill_color_picker;
  const sc = fd.stroke_color_picker;
  let data = [...payload.data.features];

  if (filters != null) {
    filters.forEach(f => {
      data = data.filter(x => f(x));
    });
  }

  if (fd.js_data_mutator) {
    // Applying user defined data mutator if defined
    const jsFnMutator = Object(_utils_sandbox__WEBPACK_IMPORTED_MODULE_9__["default"])(fd.js_data_mutator);
    data = jsFnMutator(data);
  }

  const metricLabel = fd.metric ? fd.metric.label || fd.metric : null;

  const accessor = d => d[metricLabel]; // base color for the polygons


  const baseColorScaler = fd.metric === null ? () => [fc.r, fc.g, fc.b, 255 * fc.a] : Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getBreakPointColorScaler"])(fd, data, accessor); // when polygons are selected, reduce the opacity of non-selected polygons

  const colorScaler = d => {
    const baseColor = baseColorScaler(d);

    if (selected.length > 0 && !selected.includes(d[fd.line_column])) {
      baseColor[3] /= 2;
    }

    return baseColor;
  };

  const tooltipContentGenerator = fd.line_column && fd.metric && ['json', 'geohash', 'zipcode'].includes(fd.line_type) ? setTooltipContent(fd) : undefined;
  return new deck_gl__WEBPACK_IMPORTED_MODULE_2__["default"](_extends({
    id: "path-layer-" + fd.slice_id,
    data,
    pickable: true,
    filled: fd.filled,
    stroked: fd.stroked,
    getPolygon: _utils_getPointsFromPolygon__WEBPACK_IMPORTED_MODULE_10__["default"],
    getFillColor: colorScaler,
    getLineColor: [sc.r, sc.g, sc.b, 255 * sc.a],
    getLineWidth: fd.line_width,
    extruded: fd.extruded,
    getElevation: d => _getElevation(d, colorScaler),
    elevationScale: fd.multiplier,
    fp64: true
  }, Object(_common__WEBPACK_IMPORTED_MODULE_7__["commonLayerProps"])(fd, setTooltip, tooltipContentGenerator, onSelect)));
}
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

class DeckGLPolygon extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
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

    this.state = DeckGLPolygon.getDerivedStateFromProps(props);
    this.getLayers = this.getLayers.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onValuesChange = this.onValuesChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const {
      width,
      height,
      formData,
      payload
    } = props; // the state is computed only from the payload; if it hasn't changed, do
    // not recompute state since this would reset selections and/or the play
    // slider position due to changes in form controls

    if (state && payload.form_data === state.formData) {
      return null;
    }

    const features = payload.data.features || [];
    const timestamps = features.map(f => f.__timestamp); // the granularity has to be read from the payload form_data, not the
    // props formData which comes from the instantaneous controls state

    const granularity = payload.form_data.time_grain_sqla || payload.form_data.granularity || 'P1D';
    const {
      start,
      end,
      getStep,
      values,
      disabled
    } = Object(_utils_time__WEBPACK_IMPORTED_MODULE_8__["getPlaySliderParams"])(timestamps, granularity);
    let {
      viewport
    } = props;

    if (formData.autozoom) {
      viewport = Object(_utils_fitViewport__WEBPACK_IMPORTED_MODULE_11__["default"])(viewport, {
        width,
        height,
        points: features.flatMap(_utils_getPointsFromPolygon__WEBPACK_IMPORTED_MODULE_10__["default"])
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
      formData: payload.form_data
    };
  }

  onSelect(polygon) {
    const {
      formData,
      onAddFilter
    } = this.props;
    const now = new Date();
    const doubleClick = now - this.state.lastClick <= DOUBLE_CLICK_TRESHOLD; // toggle selected polygons

    const selected = [...this.state.selected];

    if (doubleClick) {
      selected.splice(0, selected.length, polygon);
    } else if (formData.toggle_polygons) {
      const i = selected.indexOf(polygon);

      if (i === -1) {
        selected.push(polygon);
      } else {
        selected.splice(i, 1);
      }
    } else {
      selected.splice(0, 1, polygon);
    }

    this.setState({
      selected,
      lastClick: now
    });

    if (formData.table_filter) {
      onAddFilter(formData.line_column, selected, false, true);
    }
  }

  onValuesChange(values) {
    this.setState({
      values: Array.isArray(values) ? values : [values, values + this.state.getStep(values)]
    });
  }

  getLayers(values) {
    if (this.props.payload.data.features === undefined) {
      return [];
    }

    const filters = []; // time filter

    if (values[0] === values[1] || values[1] === this.end) {
      filters.push(d => d.__timestamp >= values[0] && d.__timestamp <= values[1]);
    } else {
      filters.push(d => d.__timestamp >= values[0] && d.__timestamp < values[1]);
    }

    const layer = getLayer(this.props.formData, this.props.payload, this.props.onAddFilter, this.setTooltip, this.state.selected, this.onSelect, filters);
    return [layer];
  }

  render() {
    const {
      payload,
      formData,
      setControlValue
    } = this.props;
    const {
      start,
      end,
      getStep,
      values,
      disabled,
      viewport
    } = this.state;
    const fd = formData;
    const metricLabel = fd.metric ? fd.metric.label || fd.metric : null;

    const accessor = d => d[metricLabel];

    const buckets = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getBuckets"])(formData, payload.data.features, accessor);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        position: 'relative'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AnimatableDeckGLContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      ref: this.containerRef,
      aggregation: true,
      getLayers: this.getLayers,
      start: start,
      end: end,
      getStep: getStep,
      values: values,
      disabled: disabled,
      viewport: viewport,
      width: this.props.width,
      height: this.props.height,
      mapboxApiAccessToken: payload.data.mapboxApiKey,
      mapStyle: formData.mapbox_style,
      setControlValue: setControlValue,
      onValuesChange: this.onValuesChange,
      onViewportChange: this.onViewportChange
    }, formData.metric !== null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Legend__WEBPACK_IMPORTED_MODULE_4__["default"], {
      categories: buckets,
      position: formData.legend_position,
      format: formData.legend_format
    })));
  }

}

DeckGLPolygon.propTypes = propTypes;
DeckGLPolygon.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (DeckGLPolygon);

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Scatter/Scatter.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Scatter/Scatter.js ***!
  \********************************************************************************************/
/*! exports provided: getLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayer", function() { return getLayer; });
/* harmony import */ var deck_gl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deck.gl */ "./node_modules/@deck.gl/layers/dist/esm/scatterplot-layer/scatterplot-layer.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/common.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../factory */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/factory.js");
/* harmony import */ var _TooltipRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../TooltipRow */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/TooltipRow.js");
/* harmony import */ var _utils_geo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/geo */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/geo.js");
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








function getPoints(data) {
  return data.map(d => d.position);
}

function setTooltipContent(formData) {
  return o => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "deckgl-tooltip"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TooltipRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Longitude and Latitude') + ": ",
    value: o.object.position[0] + ", " + o.object.position[1]
  }), o.object.cat_color && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TooltipRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["t"])('Category') + ": ",
    value: "" + o.object.cat_color
  }), o.object.metric && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TooltipRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: formData.point_radius_fixed.value.label + ": ",
    value: "" + o.object.metric
  }));
}

function getLayer(formData, payload, onAddFilter, setTooltip) {
  const fd = formData;
  const dataWithRadius = payload.data.features.map(d => {
    let radius = Object(_utils_geo__WEBPACK_IMPORTED_MODULE_6__["unitToRadius"])(fd.point_unit, d.radius) || 10;

    if (fd.multiplier) {
      radius *= fd.multiplier;
    }

    if (d.color) {
      return _extends({}, d, {
        radius
      });
    }

    const c = fd.color_picker || {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
    const color = [c.r, c.g, c.b, c.a * 255];
    return _extends({}, d, {
      radius,
      color
    });
  });
  return new deck_gl__WEBPACK_IMPORTED_MODULE_0__["default"](_extends({
    id: "scatter-layer-" + fd.slice_id,
    data: dataWithRadius,
    fp64: true,
    getFillColor: d => d.color,
    getRadius: d => d.radius,
    radiusMinPixels: fd.min_radius || null,
    radiusMaxPixels: fd.max_radius || null,
    stroked: false
  }, Object(_common__WEBPACK_IMPORTED_MODULE_3__["commonLayerProps"])(fd, setTooltip, setTooltipContent(fd))));
}
/* harmony default export */ __webpack_exports__["default"] = (Object(_factory__WEBPACK_IMPORTED_MODULE_4__["createCategoricalDeckGLComponent"])(getLayer, getPoints));

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Screengrid/Screengrid.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Screengrid/Screengrid.js ***!
  \**************************************************************************************************/
/*! exports provided: getLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLayer", function() { return getLayer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var deck_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deck.gl */ "./node_modules/@deck.gl/aggregation-layers/dist/esm/screen-grid-layer/screen-grid-layer.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/translation/TranslatorSingleton.js");
/* harmony import */ var _AnimatableDeckGLContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../AnimatableDeckGLContainer */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/AnimatableDeckGLContainer.js");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/time */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/time.js");
/* harmony import */ var _utils_sandbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/sandbox */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/sandbox.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/common.js");
/* harmony import */ var _TooltipRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../TooltipRow */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/TooltipRow.js");
/* harmony import */ var _utils_fitViewport__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/fitViewport */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/fitViewport.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable react/sort-prop-types */

/* eslint-disable react/jsx-handler-names */

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



function getPoints(data) {
  return data.map(d => d.position);
}

function setTooltipContent(o) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "deckgl-tooltip"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TooltipRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["t"])('Longitude and Latitude') + ": ",
    value: o.coordinate[0] + ", " + o.coordinate[1]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TooltipRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["t"])('Weight') + ": ",
    value: "" + o.object.weight
  }));
}

function getLayer(formData, payload, onAddFilter, setTooltip, selected, onSelect, filters) {
  const fd = formData;
  const c = fd.color_picker;
  let data = payload.data.features.map(d => _extends({}, d, {
    color: [c.r, c.g, c.b, 255 * c.a]
  }));

  if (fd.js_data_mutator) {
    // Applying user defined data mutator if defined
    const jsFnMutator = Object(_utils_sandbox__WEBPACK_IMPORTED_MODULE_6__["default"])(fd.js_data_mutator);
    data = jsFnMutator(data);
  }

  if (filters != null) {
    filters.forEach(f => {
      data = data.filter(x => f(x));
    });
  } // Passing a layer creator function instead of a layer since the
  // layer needs to be regenerated at each render


  return new deck_gl__WEBPACK_IMPORTED_MODULE_2__["default"](_extends({
    id: "screengrid-layer-" + fd.slice_id,
    data,
    pickable: true,
    cellSizePixels: fd.grid_size,
    minColor: [c.r, c.g, c.b, 0],
    maxColor: [c.r, c.g, c.b, 255 * c.a],
    outline: false,
    getWeight: d => d.weight || 0
  }, Object(_common__WEBPACK_IMPORTED_MODULE_7__["commonLayerProps"])(fd, setTooltip, setTooltipContent)));
}
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

class DeckGLScreenGrid extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
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

    this.state = DeckGLScreenGrid.getDerivedStateFromProps(props);
    this.getLayers = this.getLayers.bind(this);
    this.onValuesChange = this.onValuesChange.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    // the state is computed only from the payload; if it hasn't changed, do
    // not recompute state since this would reset selections and/or the play
    // slider position due to changes in form controls
    if (state && props.payload.form_data === state.formData) {
      return null;
    }

    const features = props.payload.data.features || [];
    const timestamps = features.map(f => f.__timestamp); // the granularity has to be read from the payload form_data, not the
    // props formData which comes from the instantaneous controls state

    const granularity = props.payload.form_data.time_grain_sqla || props.payload.form_data.granularity || 'P1D';
    const {
      start,
      end,
      getStep,
      values,
      disabled
    } = Object(_utils_time__WEBPACK_IMPORTED_MODULE_5__["getPlaySliderParams"])(timestamps, granularity);
    const {
      width,
      height,
      formData
    } = props;
    let {
      viewport
    } = props;

    if (formData.autozoom) {
      viewport = Object(_utils_fitViewport__WEBPACK_IMPORTED_MODULE_9__["default"])(viewport, {
        width,
        height,
        points: getPoints(features)
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
      formData: props.payload.form_data
    };
  }

  onValuesChange(values) {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      values: Array.isArray(values) ? values : [values, values + this.state.getStep(values)]
    });
  }

  getLayers(values) {
    const filters = []; // time filter

    if (values[0] === values[1] || values[1] === this.end) {
      filters.push(d => d.__timestamp >= values[0] && d.__timestamp <= values[1]);
    } else {
      filters.push(d => d.__timestamp >= values[0] && d.__timestamp < values[1]);
    }

    const layer = getLayer(this.props.formData, this.props.payload, this.props.onAddFilter, this.setTooltip, filters);
    return [layer];
  }

  render() {
    const {
      formData,
      payload,
      setControlValue
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AnimatableDeckGLContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ref: this.containerRef,
      aggregation: true,
      getLayers: this.getLayers,
      start: this.state.start,
      end: this.state.end,
      getStep: this.state.getStep,
      values: this.state.values,
      disabled: this.state.disabled,
      viewport: this.state.viewport,
      width: this.props.width,
      height: this.props.height,
      mapboxApiAccessToken: payload.data.mapboxApiKey,
      mapStyle: formData.mapbox_style,
      setControlValue: setControlValue,
      onValuesChange: this.onValuesChange,
      onViewportChange: this.onViewportChange
    }));
  }

}

DeckGLScreenGrid.propTypes = propTypes;
DeckGLScreenGrid.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (DeckGLScreenGrid);

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid_Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid/Grid */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Grid/Grid.js");
/* harmony import */ var _Screengrid_Screengrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Screengrid/Screengrid */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Screengrid/Screengrid.js");
/* harmony import */ var _Path_Path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Path/Path */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Path/Path.js");
/* harmony import */ var _Hex_Hex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hex/Hex */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Hex/Hex.js");
/* harmony import */ var _Scatter_Scatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Scatter/Scatter */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Scatter/Scatter.js");
/* harmony import */ var _Geojson_Geojson__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Geojson/Geojson */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Geojson/Geojson.js");
/* harmony import */ var _Arc_Arc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Arc/Arc */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Arc/Arc.js");
/* harmony import */ var _Polygon_Polygon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Polygon/Polygon */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/layers/Polygon/Polygon.js");
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

/* eslint camelcase: 0 */








const layerGenerators = {
  deck_grid: _Grid_Grid__WEBPACK_IMPORTED_MODULE_0__["getLayer"],
  deck_screengrid: _Screengrid_Screengrid__WEBPACK_IMPORTED_MODULE_1__["getLayer"],
  deck_path: _Path_Path__WEBPACK_IMPORTED_MODULE_2__["getLayer"],
  deck_hex: _Hex_Hex__WEBPACK_IMPORTED_MODULE_3__["getLayer"],
  deck_scatter: _Scatter_Scatter__WEBPACK_IMPORTED_MODULE_4__["getLayer"],
  deck_geojson: _Geojson_Geojson__WEBPACK_IMPORTED_MODULE_5__["getLayer"],
  deck_arc: _Arc_Arc__WEBPACK_IMPORTED_MODULE_6__["getLayer"],
  deck_polygon: _Polygon_Polygon__WEBPACK_IMPORTED_MODULE_7__["getLayer"]
};
/* harmony default export */ __webpack_exports__["default"] = (layerGenerators);

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils.js ***!
  \***************************************************************************/
/*! exports provided: getBreakPoints, getBreakPointColorScaler, getBuckets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBreakPoints", function() { return getBreakPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBreakPointColorScaler", function() { return getBreakPointColorScaler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBuckets", function() { return getBuckets; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/color/SequentialScheme.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/color/SequentialSchemeRegistrySingleton.js");
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/colors */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/colors.js");
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




const DEFAULT_NUM_BUCKETS = 10;
function getBreakPoints(_ref, features, accessor) {
  let {
    break_points: formDataBreakPoints,
    num_buckets: formDataNumBuckets
  } = _ref;

  if (!features) {
    return [];
  }

  if (formDataBreakPoints === undefined || formDataBreakPoints.length === 0) {
    // compute evenly distributed break points based on number of buckets
    const numBuckets = formDataNumBuckets ? parseInt(formDataNumBuckets, 10) : DEFAULT_NUM_BUCKETS;
    const [minValue, maxValue] = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["extent"])(features, accessor);

    if (minValue === undefined) {
      return [];
    }

    const delta = (maxValue - minValue) / numBuckets;
    const precision = delta === 0 ? 0 : Math.max(0, Math.ceil(Math.log10(1 / delta)));
    const extraBucket = maxValue > maxValue.toFixed(precision) ? 1 : 0;
    return new Array(numBuckets + 1 + extraBucket).fill().map((_, i) => (minValue + i * delta).toFixed(precision));
  }

  return formDataBreakPoints.sort((a, b) => parseFloat(a) - parseFloat(b));
}
function getBreakPointColorScaler(_ref2, features, accessor) {
  let {
    break_points: formDataBreakPoints,
    num_buckets: formDataNumBuckets,
    linear_color_scheme: linearColorScheme,
    opacity
  } = _ref2;
  const breakPoints = formDataBreakPoints || formDataNumBuckets ? getBreakPoints({
    break_points: formDataBreakPoints,
    num_buckets: formDataNumBuckets
  }, features, accessor) : null;
  const colorScheme = Array.isArray(linearColorScheme) ? new _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["default"]({
    colors: linearColorScheme,
    id: 'custom'
  }) : Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__["default"])().get(linearColorScheme);
  let scaler;
  let maskPoint;

  if (breakPoints !== null) {
    // bucket colors into discrete colors
    const n = breakPoints.length - 1;
    const bucketedColors = n > 1 ? colorScheme.getColors(n) : [colorScheme.colors[colorScheme.colors.length - 1]]; // repeat ends

    const first = bucketedColors[0];
    const last = bucketedColors[bucketedColors.length - 1];
    bucketedColors.unshift(first);
    bucketedColors.push(last);
    const points = breakPoints.map(p => parseFloat(p));
    scaler = Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleThreshold"])().domain(points).range(bucketedColors);

    maskPoint = value => value > breakPoints[n] || value < breakPoints[0];
  } else {
    // interpolate colors linearly
    scaler = colorScheme.createLinearScale(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["extent"])(features, accessor));

    maskPoint = () => false;
  }

  return d => {
    const v = accessor(d);
    const c = Object(_utils_colors__WEBPACK_IMPORTED_MODULE_4__["hexToRGB"])(scaler(v));

    if (maskPoint(v)) {
      c[3] = 0;
    } else {
      c[3] = opacity / 100 * 255;
    }

    return c;
  };
}
function getBuckets(fd, features, accessor) {
  const breakPoints = getBreakPoints(fd, features, accessor);
  const colorScaler = getBreakPointColorScaler(fd, features, accessor);
  const buckets = {};
  breakPoints.slice(1).forEach((value, i) => {
    const range = breakPoints[i] + " - " + breakPoints[i + 1];
    const mid = 0.5 * (parseFloat(breakPoints[i]) + parseFloat(breakPoints[i + 1])); // fix polygon doesn't show

    const metricLabel = fd.metric ? fd.metric.label || fd.metric : null;
    buckets[range] = {
      color: colorScaler({
        [metricLabel || fd.metric]: mid
      }),
      enabled: true
    };
  });
  return buckets;
}

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

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/explore.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/explore.js ***!
  \***********************************************************************************/
/*! exports provided: getURIDirectory, getExploreLongUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getURIDirectory", function() { return getURIDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExploreLongUrl", function() { return getExploreLongUrl; });
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! urijs */ "./node_modules/urijs/src/URI.js");
/* harmony import */ var urijs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urijs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _safeStringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safeStringify */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/safeStringify.js");


const MAX_URL_LENGTH = 8000;
function getURIDirectory(formData, endpointType) {
  if (endpointType === void 0) {
    endpointType = 'base';
  }

  // Building the directory part of the URI
  let directory = '/superset/explore/';

  if (['json', 'csv', 'query', 'results', 'samples'].includes(endpointType)) {
    directory = '/superset/explore_json/';
  }

  return directory;
}
function getExploreLongUrl(formData, endpointType, allowOverflow, extraSearch) {
  if (allowOverflow === void 0) {
    allowOverflow = true;
  }

  if (extraSearch === void 0) {
    extraSearch = {};
  }

  if (!formData.datasource) {
    return null;
  }

  const uri = new urijs__WEBPACK_IMPORTED_MODULE_0___default.a('/');
  const directory = getURIDirectory(formData, endpointType);
  const search = uri.search(true);
  Object.keys(extraSearch).forEach(key => {
    search[key] = extraSearch[key];
  });
  search.form_data = Object(_safeStringify__WEBPACK_IMPORTED_MODULE_1__["safeStringify"])(formData);

  if (endpointType === 'standalone') {
    search.standalone = 'true';
  }

  const url = uri.directory(directory).search(search).toString();

  if (!allowOverflow && url.length > MAX_URL_LENGTH) {
    const minimalFormData = {
      datasource: formData.datasource,
      viz_type: formData.viz_type
    };
    return getExploreLongUrl(minimalFormData, endpointType, false, {
      URL_IS_TOO_LONG_TO_SHARE: null
    });
  }

  return url;
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

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/geo.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/geo.js ***!
  \*******************************************************************************/
/*! exports provided: defaultViewport, unitToRadius, EARTH_CIRCUMFERENCE_KM, MILES_PER_KM, kmToPixels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultViewport", function() { return defaultViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitToRadius", function() { return unitToRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EARTH_CIRCUMFERENCE_KM", function() { return EARTH_CIRCUMFERENCE_KM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILES_PER_KM", function() { return MILES_PER_KM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kmToPixels", function() { return kmToPixels; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/utils.js");
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

const defaultViewport = {
  bearing: 0,
  latitude: 31.222656842808707,
  longitude: 6.85236157047845,
  pitch: 0,
  zoom: 1
};
const METER_TO_MILE = 1609.34;
function unitToRadius(unit, num) {
  if (unit === 'square_m') {
    return Math.sqrt(num / Math.PI);
  }

  if (unit === 'radius_m') {
    return num;
  }

  if (unit === 'radius_km') {
    return num * 1000;
  }

  if (unit === 'radius_miles') {
    return num * METER_TO_MILE;
  }

  if (unit === 'square_km') {
    return Math.sqrt(num / Math.PI) * 1000;
  }

  if (unit === 'square_miles') {
    return Math.sqrt(num / Math.PI) * METER_TO_MILE;
  }

  return null;
}
const EARTH_CIRCUMFERENCE_KM = 40075.16;
const MILES_PER_KM = 1.60934;
function kmToPixels(kilometers, latitude, zoomLevel) {
  // Algorithm from: https://wiki.openstreetmap.org/wiki/Zoom_levels
  const latitudeRad = latitude * (Math.PI / 180); // Seems like the zoomLevel is off by one

  const kmPerPixel = EARTH_CIRCUMFERENCE_KM * Math.cos(latitudeRad) / 2 ** (zoomLevel + 9);
  return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["roundDecimal"])(kilometers / kmPerPixel, 2);
}

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/getPointsFromPolygon.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/getPointsFromPolygon.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getPointsFromPolygon; });
/** Format originally used by the Polygon plugin */

/**
 * Format that is geojson standard
 * https://geojson.org/geojson-spec.html
 */
function getPointsFromPolygon(feature) {
  return 'geometry' in feature.polygon ? feature.polygon.geometry.coordinates[0] : feature.polygon;
}

/***/ }),

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/safeStringify.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/safeStringify.js ***!
  \*****************************************************************************************/
/*! exports provided: safeStringify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "safeStringify", function() { return safeStringify; });
/* eslint-disable consistent-return */

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

/**
 * A Stringify function that will not crash when it runs into circular JSON references,
 * unlike JSON.stringify. Any circular references are simply omitted, as if there had
 * been no data present
 * @param object any JSON object to be stringified
 */
// eslint-disable-next-line import/prefer-default-export
function safeStringify(object) {
  const cache = new Set();
  return JSON.stringify(object, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        // We've seen this object before
        try {
          // Quick deep copy to duplicate if this is a repeat rather than a circle.
          return JSON.parse(JSON.stringify(value));
        } catch (error) {
          // Discard key if value cannot be duplicated.
          return;
        }
      } // Store the value in our cache.


      cache.add(value);
    }

    return value;
  });
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

/***/ "./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/utils.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@superset-ui/legacy-preset-chart-deckgl/esm/utils/utils.js ***!
  \*********************************************************************************/
/*! exports provided: roundDecimal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundDecimal", function() { return roundDecimal; });
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

/* eslint camelcase: 0 */
// eslint-disable-next-line import/prefer-default-export
function roundDecimal(number, precision) {
  let roundedNumber;

  if (precision) {
    // eslint-disable-next-line no-param-reassign
    roundedNumber = Math.round(number * (precision = 10 ** precision)) / precision;
  } else {
    roundedNumber = Math.round(number);
  }

  return roundedNumber;
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

/***/ "./node_modules/d3-hexbin/index.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-hexbin/index.js ***!
  \*****************************************/
/*! exports provided: hexbin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_hexbin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/hexbin */ "./node_modules/d3-hexbin/src/hexbin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexbin", function() { return _src_hexbin__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/d3-hexbin/src/hexbin.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-hexbin/src/hexbin.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var thirdPi = Math.PI / 3,
    angles = [0, thirdPi, 2 * thirdPi, 3 * thirdPi, 4 * thirdPi, 5 * thirdPi];

function pointX(d) {
  return d[0];
}

function pointY(d) {
  return d[1];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x0 = 0,
      y0 = 0,
      x1 = 1,
      y1 = 1,
      x = pointX,
      y = pointY,
      r,
      dx,
      dy;

  function hexbin(points) {
    var binsById = {}, bins = [], i, n = points.length;

    for (i = 0; i < n; ++i) {
      if (isNaN(px = +x.call(null, point = points[i], i, points))
          || isNaN(py = +y.call(null, point, i, points))) continue;

      var point,
          px,
          py,
          pj = Math.round(py = py / dy),
          pi = Math.round(px = px / dx - (pj & 1) / 2),
          py1 = py - pj;

      if (Math.abs(py1) * 3 > 1) {
        var px1 = px - pi,
            pi2 = pi + (px < pi ? -1 : 1) / 2,
            pj2 = pj + (py < pj ? -1 : 1),
            px2 = px - pi2,
            py2 = py - pj2;
        if (px1 * px1 + py1 * py1 > px2 * px2 + py2 * py2) pi = pi2 + (pj & 1 ? 1 : -1) / 2, pj = pj2;
      }

      var id = pi + "-" + pj, bin = binsById[id];
      if (bin) bin.push(point);
      else {
        bins.push(bin = binsById[id] = [point]);
        bin.x = (pi + (pj & 1) / 2) * dx;
        bin.y = pj * dy;
      }
    }

    return bins;
  }

  function hexagon(radius) {
    var x0 = 0, y0 = 0;
    return angles.map(function(angle) {
      var x1 = Math.sin(angle) * radius,
          y1 = -Math.cos(angle) * radius,
          dx = x1 - x0,
          dy = y1 - y0;
      x0 = x1, y0 = y1;
      return [dx, dy];
    });
  }

  hexbin.hexagon = function(radius) {
    return "m" + hexagon(radius == null ? r : +radius).join("l") + "z";
  };

  hexbin.centers = function() {
    var centers = [],
        j = Math.round(y0 / dy),
        i = Math.round(x0 / dx);
    for (var y = j * dy; y < y1 + r; y += dy, ++j) {
      for (var x = i * dx + (j & 1) * dx / 2; x < x1 + dx / 2; x += dx) {
        centers.push([x, y]);
      }
    }
    return centers;
  };

  hexbin.mesh = function() {
    var fragment = hexagon(r).slice(0, 4).join("l");
    return hexbin.centers().map(function(p) { return "M" + p + "m" + fragment; }).join("");
  };

  hexbin.x = function(_) {
    return arguments.length ? (x = _, hexbin) : x;
  };

  hexbin.y = function(_) {
    return arguments.length ? (y = _, hexbin) : y;
  };

  hexbin.radius = function(_) {
    return arguments.length ? (r = +_, dx = r * 2 * Math.sin(thirdPi), dy = r * 1.5, hexbin) : r;
  };

  hexbin.size = function(_) {
    return arguments.length ? (x0 = y0 = 0, x1 = +_[0], y1 = +_[1], hexbin) : [x1 - x0, y1 - y0];
  };

  hexbin.extent = function(_) {
    return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], hexbin) : [[x0, y0], [x1, y1]];
  };

  return hexbin.radius(1);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-scale/src/array.js ***!
  \********************************************/
/*! exports provided: map, slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var array = Array.prototype;

var map = array.map;
var slice = array.slice;


/***/ }),

/***/ "./node_modules/d3-scale/src/band.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/band.js ***!
  \*******************************************/
/*! exports provided: default, point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return band; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ordinal */ "./node_modules/d3-scale/src/ordinal.js");



function band() {
  var scale = Object(_ordinal__WEBPACK_IMPORTED_MODULE_1__["default"])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band().paddingInner(1));
}


/***/ }),

/***/ "./node_modules/d3-scale/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-scale/src/continuous.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/continuous.js ***!
  \*************************************************/
/*! exports provided: deinterpolateLinear, copy, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deinterpolateLinear", function() { return deinterpolateLinear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return continuous; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/value.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/round.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./number */ "./node_modules/d3-scale/src/number.js");






var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(_constant__WEBPACK_IMPORTED_MODULE_4__["default"])(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["default"],
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_3__["map"].call(_, _number__WEBPACK_IMPORTED_MODULE_5__["default"]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_3__["slice"].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = _array__WEBPACK_IMPORTED_MODULE_3__["slice"].call(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}


/***/ }),

/***/ "./node_modules/d3-scale/src/diverging.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/diverging.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return diverging; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");


function diverging(interpolator) {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      k10 = 1,
      k21 = 1,
      clamp = false;

  function scale(x) {
    var t = 0.5 + ((x = +x) - x1) * (x < x1 ? k10 : k21);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], x2 = +_[2], k10 = x0 === x1 ? 0 : 0.5 / (x1 - x0), k21 = x1 === x2 ? 0 : 0.5 / (x2 - x1), scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return diverging(interpolator).domain([x0, x1, x2]).clamp(clamp);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number */ "./node_modules/d3-scale/src/number.js");




function identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(_, _number__WEBPACK_IMPORTED_MODULE_2__["default"]), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity().domain(domain);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-scale/src/index.js ***!
  \********************************************/
/*! exports provided: scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential, scaleDiverging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _band__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./band */ "./node_modules/d3-scale/src/band.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return _band__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return _band__WEBPACK_IMPORTED_MODULE_0__["point"]; });

/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-scale/src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return _identity__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return _linear__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./node_modules/d3-scale/src/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return _log__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ordinal */ "./node_modules/d3-scale/src/ordinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return _ordinal__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return _ordinal__WEBPACK_IMPORTED_MODULE_4__["implicit"]; });

/* harmony import */ var _pow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pow */ "./node_modules/d3-scale/src/pow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return _pow__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return _pow__WEBPACK_IMPORTED_MODULE_5__["sqrt"]; });

/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quantile */ "./node_modules/d3-scale/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return _quantile__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _quantize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quantize */ "./node_modules/d3-scale/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return _quantize__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _threshold__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./threshold */ "./node_modules/d3-scale/src/threshold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return _threshold__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./time */ "./node_modules/d3-scale/src/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return _time__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _utcTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utcTime */ "./node_modules/d3-scale/src/utcTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return _utcTime__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _sequential__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sequential */ "./node_modules/d3-scale/src/sequential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return _sequential__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _diverging__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./diverging */ "./node_modules/d3-scale/src/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDiverging", function() { return _diverging__WEBPACK_IMPORTED_MODULE_12__["default"]; });




























/***/ }),

/***/ "./node_modules/d3-scale/src/linear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/linear.js ***!
  \*********************************************/
/*! exports provided: linearish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearish", function() { return linearish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return linear; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _tickFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickFormat */ "./node_modules/d3-scale/src/tickFormat.js");





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return Object(_tickFormat__WEBPACK_IMPORTED_MODULE_3__["default"])(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["default"])(_continuous__WEBPACK_IMPORTED_MODULE_2__["deinterpolateLinear"], d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["default"]);

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["copy"])(scale, linear());
  };

  return linearish(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/log.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/log.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nice */ "./node_modules/d3-scale/src/nice.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");






function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_4__["default"])(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(_nice__WEBPACK_IMPORTED_MODULE_3__["default"])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_4__["copy"])(scale, log().base(base));
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/nice.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/nice.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/number.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return +x;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/ordinal.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/ordinal.js ***!
  \**********************************************/
/*! exports provided: implicit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implicit", function() { return implicit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ordinal; });
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-collection */ "./node_modules/d3-collection/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");



var implicit = {name: "implicit"};

function ordinal(range) {
  var index = Object(d3_collection__WEBPACK_IMPORTED_MODULE_0__["map"])(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = Object(d3_collection__WEBPACK_IMPORTED_MODULE_0__["map"])();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/pow.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/pow.js ***!
  \******************************************/
/*! exports provided: default, sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");




function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow() {
  var exponent = 1,
      scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["default"])(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_2__["copy"])(scale, pow().exponent(exponent));
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale);
}

function sqrt() {
  return pow().exponent(0.5);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");



function quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["quantile"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__["ascending"]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/quantize.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantize; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_2__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/sequential.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/sequential.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequential; });
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear */ "./node_modules/d3-scale/src/linear.js");


function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      k10 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) * k10;
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], k10 = x0 === x1 ? 0 : 1 / (x1 - x0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return Object(_linear__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/threshold.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/threshold.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return threshold; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = _array__WEBPACK_IMPORTED_MODULE_1__["slice"].call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/tickFormat.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/tickFormat.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, count == null ? 10 : count),
      precision;
  specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatSpecifier"])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionPrefix"])(step, value))) specifier.precision = precision;
      return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatPrefix"])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionRound"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionFixed"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/time.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/time.js ***!
  \*******************************************/
/*! exports provided: calendar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./array */ "./node_modules/d3-scale/src/array.js");
/* harmony import */ var _continuous__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./continuous */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _nice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nice */ "./node_modules/d3-scale/src/nice.js");








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(_continuous__WEBPACK_IMPORTED_MODULE_5__["default"])(_continuous__WEBPACK_IMPORTED_MODULE_5__["deinterpolateLinear"], d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["default"]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisector"])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(_array__WEBPACK_IMPORTED_MODULE_4__["map"].call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(Object(_nice__WEBPACK_IMPORTED_MODULE_6__["default"])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(_continuous__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return calendar(d3_time__WEBPACK_IMPORTED_MODULE_2__["timeYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["timeMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_3__["timeFormat"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/utcTime.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/utcTime.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./node_modules/d3-scale/src/time.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");




/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_time__WEBPACK_IMPORTED_MODULE_0__["calendar"])(d3_time__WEBPACK_IMPORTED_MODULE_2__["utcYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_1__["utcFormat"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
});


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


/***/ }),

/***/ "./node_modules/urijs/src/IPv6.js":
/*!****************************************!*\
  !*** ./node_modules/urijs/src/IPv6.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * URI.js - Mutating URLs
 * IPv6 Support
 *
 * Version: 1.19.6
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */

(function (root, factory) {
  'use strict';
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if ( true && module.exports) {
    // Node
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function (root) {
  'use strict';

  /*
  var _in = "fe80:0000:0000:0000:0204:61ff:fe9d:f156";
  var _out = IPv6.best(_in);
  var _expected = "fe80::204:61ff:fe9d:f156";

  console.log(_in, _out, _expected, _out === _expected);
  */

  // save current IPv6 variable, if any
  var _IPv6 = root && root.IPv6;

  function bestPresentation(address) {
    // based on:
    // Javascript to test an IPv6 address for proper format, and to
    // present the "best text representation" according to IETF Draft RFC at
    // http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04
    // 8 Feb 2010 Rich Brown, Dartware, LLC
    // Please feel free to use this code as long as you provide a link to
    // http://www.intermapper.com
    // http://intermapper.com/support/tools/IPV6-Validator.aspx
    // http://download.dartware.com/thirdparty/ipv6validator.js

    var _address = address.toLowerCase();
    var segments = _address.split(':');
    var length = segments.length;
    var total = 8;

    // trim colons (:: or ::a:b:c… or …a:b:c::)
    if (segments[0] === '' && segments[1] === '' && segments[2] === '') {
      // must have been ::
      // remove first two items
      segments.shift();
      segments.shift();
    } else if (segments[0] === '' && segments[1] === '') {
      // must have been ::xxxx
      // remove the first item
      segments.shift();
    } else if (segments[length - 1] === '' && segments[length - 2] === '') {
      // must have been xxxx::
      segments.pop();
    }

    length = segments.length;

    // adjust total segments for IPv4 trailer
    if (segments[length - 1].indexOf('.') !== -1) {
      // found a "." which means IPv4
      total = 7;
    }

    // fill empty segments them with "0000"
    var pos;
    for (pos = 0; pos < length; pos++) {
      if (segments[pos] === '') {
        break;
      }
    }

    if (pos < total) {
      segments.splice(pos, 1, '0000');
      while (segments.length < total) {
        segments.splice(pos, 0, '0000');
      }
    }

    // strip leading zeros
    var _segments;
    for (var i = 0; i < total; i++) {
      _segments = segments[i].split('');
      for (var j = 0; j < 3 ; j++) {
        if (_segments[0] === '0' && _segments.length > 1) {
          _segments.splice(0,1);
        } else {
          break;
        }
      }

      segments[i] = _segments.join('');
    }

    // find longest sequence of zeroes and coalesce them into one segment
    var best = -1;
    var _best = 0;
    var _current = 0;
    var current = -1;
    var inzeroes = false;
    // i; already declared

    for (i = 0; i < total; i++) {
      if (inzeroes) {
        if (segments[i] === '0') {
          _current += 1;
        } else {
          inzeroes = false;
          if (_current > _best) {
            best = current;
            _best = _current;
          }
        }
      } else {
        if (segments[i] === '0') {
          inzeroes = true;
          current = i;
          _current = 1;
        }
      }
    }

    if (_current > _best) {
      best = current;
      _best = _current;
    }

    if (_best > 1) {
      segments.splice(best, _best, '');
    }

    length = segments.length;

    // assemble remaining segments
    var result = '';
    if (segments[0] === '')  {
      result = ':';
    }

    for (i = 0; i < length; i++) {
      result += segments[i];
      if (i === length - 1) {
        break;
      }

      result += ':';
    }

    if (segments[length - 1] === '') {
      result += ':';
    }

    return result;
  }

  function noConflict() {
    /*jshint validthis: true */
    if (root.IPv6 === this) {
      root.IPv6 = _IPv6;
    }

    return this;
  }

  return {
    best: bestPresentation,
    noConflict: noConflict
  };
}));


/***/ }),

/***/ "./node_modules/urijs/src/SecondLevelDomains.js":
/*!******************************************************!*\
  !*** ./node_modules/urijs/src/SecondLevelDomains.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * URI.js - Mutating URLs
 * Second Level Domain (SLD) Support
 *
 * Version: 1.19.6
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */

(function (root, factory) {
  'use strict';
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if ( true && module.exports) {
    // Node
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function (root) {
  'use strict';

  // save current SecondLevelDomains variable, if any
  var _SecondLevelDomains = root && root.SecondLevelDomains;

  var SLD = {
    // list of known Second Level Domains
    // converted list of SLDs from https://github.com/gavingmiller/second-level-domains
    // ----
    // publicsuffix.org is more current and actually used by a couple of browsers internally.
    // downside is it also contains domains like "dyndns.org" - which is fine for the security
    // issues browser have to deal with (SOP for cookies, etc) - but is way overboard for URI.js
    // ----
    list: {
      'ac':' com gov mil net org ',
      'ae':' ac co gov mil name net org pro sch ',
      'af':' com edu gov net org ',
      'al':' com edu gov mil net org ',
      'ao':' co ed gv it og pb ',
      'ar':' com edu gob gov int mil net org tur ',
      'at':' ac co gv or ',
      'au':' asn com csiro edu gov id net org ',
      'ba':' co com edu gov mil net org rs unbi unmo unsa untz unze ',
      'bb':' biz co com edu gov info net org store tv ',
      'bh':' biz cc com edu gov info net org ',
      'bn':' com edu gov net org ',
      'bo':' com edu gob gov int mil net org tv ',
      'br':' adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ',
      'bs':' com edu gov net org ',
      'bz':' du et om ov rg ',
      'ca':' ab bc mb nb nf nl ns nt nu on pe qc sk yk ',
      'ck':' biz co edu gen gov info net org ',
      'cn':' ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ',
      'co':' com edu gov mil net nom org ',
      'cr':' ac c co ed fi go or sa ',
      'cy':' ac biz com ekloges gov ltd name net org parliament press pro tm ',
      'do':' art com edu gob gov mil net org sld web ',
      'dz':' art asso com edu gov net org pol ',
      'ec':' com edu fin gov info med mil net org pro ',
      'eg':' com edu eun gov mil name net org sci ',
      'er':' com edu gov ind mil net org rochest w ',
      'es':' com edu gob nom org ',
      'et':' biz com edu gov info name net org ',
      'fj':' ac biz com info mil name net org pro ',
      'fk':' ac co gov net nom org ',
      'fr':' asso com f gouv nom prd presse tm ',
      'gg':' co net org ',
      'gh':' com edu gov mil org ',
      'gn':' ac com gov net org ',
      'gr':' com edu gov mil net org ',
      'gt':' com edu gob ind mil net org ',
      'gu':' com edu gov net org ',
      'hk':' com edu gov idv net org ',
      'hu':' 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ',
      'id':' ac co go mil net or sch web ',
      'il':' ac co gov idf k12 muni net org ',
      'in':' ac co edu ernet firm gen gov i ind mil net nic org res ',
      'iq':' com edu gov i mil net org ',
      'ir':' ac co dnssec gov i id net org sch ',
      'it':' edu gov ',
      'je':' co net org ',
      'jo':' com edu gov mil name net org sch ',
      'jp':' ac ad co ed go gr lg ne or ',
      'ke':' ac co go info me mobi ne or sc ',
      'kh':' com edu gov mil net org per ',
      'ki':' biz com de edu gov info mob net org tel ',
      'km':' asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ',
      'kn':' edu gov net org ',
      'kr':' ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ',
      'kw':' com edu gov net org ',
      'ky':' com edu gov net org ',
      'kz':' com edu gov mil net org ',
      'lb':' com edu gov net org ',
      'lk':' assn com edu gov grp hotel int ltd net ngo org sch soc web ',
      'lr':' com edu gov net org ',
      'lv':' asn com conf edu gov id mil net org ',
      'ly':' com edu gov id med net org plc sch ',
      'ma':' ac co gov m net org press ',
      'mc':' asso tm ',
      'me':' ac co edu gov its net org priv ',
      'mg':' com edu gov mil nom org prd tm ',
      'mk':' com edu gov inf name net org pro ',
      'ml':' com edu gov net org presse ',
      'mn':' edu gov org ',
      'mo':' com edu gov net org ',
      'mt':' com edu gov net org ',
      'mv':' aero biz com coop edu gov info int mil museum name net org pro ',
      'mw':' ac co com coop edu gov int museum net org ',
      'mx':' com edu gob net org ',
      'my':' com edu gov mil name net org sch ',
      'nf':' arts com firm info net other per rec store web ',
      'ng':' biz com edu gov mil mobi name net org sch ',
      'ni':' ac co com edu gob mil net nom org ',
      'np':' com edu gov mil net org ',
      'nr':' biz com edu gov info net org ',
      'om':' ac biz co com edu gov med mil museum net org pro sch ',
      'pe':' com edu gob mil net nom org sld ',
      'ph':' com edu gov i mil net ngo org ',
      'pk':' biz com edu fam gob gok gon gop gos gov net org web ',
      'pl':' art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ',
      'pr':' ac biz com edu est gov info isla name net org pro prof ',
      'ps':' com edu gov net org plo sec ',
      'pw':' belau co ed go ne or ',
      'ro':' arts com firm info nom nt org rec store tm www ',
      'rs':' ac co edu gov in org ',
      'sb':' com edu gov net org ',
      'sc':' com edu gov net org ',
      'sh':' co com edu gov net nom org ',
      'sl':' com edu gov net org ',
      'st':' co com consulado edu embaixada gov mil net org principe saotome store ',
      'sv':' com edu gob org red ',
      'sz':' ac co org ',
      'tr':' av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ',
      'tt':' aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ',
      'tw':' club com ebiz edu game gov idv mil net org ',
      'mu':' ac co com gov net or org ',
      'mz':' ac co edu gov org ',
      'na':' co com ',
      'nz':' ac co cri geek gen govt health iwi maori mil net org parliament school ',
      'pa':' abo ac com edu gob ing med net nom org sld ',
      'pt':' com edu gov int net nome org publ ',
      'py':' com edu gov mil net org ',
      'qa':' com edu gov mil net org ',
      're':' asso com nom ',
      'ru':' ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ',
      'rw':' ac co com edu gouv gov int mil net ',
      'sa':' com edu gov med net org pub sch ',
      'sd':' com edu gov info med net org tv ',
      'se':' a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ',
      'sg':' com edu gov idn net org per ',
      'sn':' art com edu gouv org perso univ ',
      'sy':' com edu gov mil net news org ',
      'th':' ac co go in mi net or ',
      'tj':' ac biz co com edu go gov info int mil name net nic org test web ',
      'tn':' agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ',
      'tz':' ac co go ne or ',
      'ua':' biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ',
      'ug':' ac co go ne or org sc ',
      'uk':' ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ',
      'us':' dni fed isa kids nsn ',
      'uy':' com edu gub mil net org ',
      've':' co com edu gob info mil net org web ',
      'vi':' co com k12 net org ',
      'vn':' ac biz com edu gov health info int name net org pro ',
      'ye':' co com gov ltd me net org plc ',
      'yu':' ac co edu gov org ',
      'za':' ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ',
      'zm':' ac co com edu gov net org sch ',
      // https://en.wikipedia.org/wiki/CentralNic#Second-level_domains
      'com': 'ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ',
      'net': 'gb jp se uk ',
      'org': 'ae',
      'de': 'com '
    },
    // gorhill 2013-10-25: Using indexOf() instead Regexp(). Significant boost
    // in both performance and memory footprint. No initialization required.
    // http://jsperf.com/uri-js-sld-regex-vs-binary-search/4
    // Following methods use lastIndexOf() rather than array.split() in order
    // to avoid any memory allocations.
    has: function(domain) {
      var tldOffset = domain.lastIndexOf('.');
      if (tldOffset <= 0 || tldOffset >= (domain.length-1)) {
        return false;
      }
      var sldOffset = domain.lastIndexOf('.', tldOffset-1);
      if (sldOffset <= 0 || sldOffset >= (tldOffset-1)) {
        return false;
      }
      var sldList = SLD.list[domain.slice(tldOffset+1)];
      if (!sldList) {
        return false;
      }
      return sldList.indexOf(' ' + domain.slice(sldOffset+1, tldOffset) + ' ') >= 0;
    },
    is: function(domain) {
      var tldOffset = domain.lastIndexOf('.');
      if (tldOffset <= 0 || tldOffset >= (domain.length-1)) {
        return false;
      }
      var sldOffset = domain.lastIndexOf('.', tldOffset-1);
      if (sldOffset >= 0) {
        return false;
      }
      var sldList = SLD.list[domain.slice(tldOffset+1)];
      if (!sldList) {
        return false;
      }
      return sldList.indexOf(' ' + domain.slice(0, tldOffset) + ' ') >= 0;
    },
    get: function(domain) {
      var tldOffset = domain.lastIndexOf('.');
      if (tldOffset <= 0 || tldOffset >= (domain.length-1)) {
        return null;
      }
      var sldOffset = domain.lastIndexOf('.', tldOffset-1);
      if (sldOffset <= 0 || sldOffset >= (tldOffset-1)) {
        return null;
      }
      var sldList = SLD.list[domain.slice(tldOffset+1)];
      if (!sldList) {
        return null;
      }
      if (sldList.indexOf(' ' + domain.slice(sldOffset+1, tldOffset) + ' ') < 0) {
        return null;
      }
      return domain.slice(sldOffset+1);
    },
    noConflict: function(){
      if (root.SecondLevelDomains === this) {
        root.SecondLevelDomains = _SecondLevelDomains;
      }
      return this;
    }
  };

  return SLD;
}));


/***/ }),

/***/ "./node_modules/urijs/src/URI.js":
/*!***************************************!*\
  !*** ./node_modules/urijs/src/URI.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * URI.js - Mutating URLs
 *
 * Version: 1.19.6
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */
(function (root, factory) {
  'use strict';
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  if ( true && module.exports) {
    // Node
    module.exports = factory(__webpack_require__(/*! ./punycode */ "./node_modules/urijs/src/punycode.js"), __webpack_require__(/*! ./IPv6 */ "./node_modules/urijs/src/IPv6.js"), __webpack_require__(/*! ./SecondLevelDomains */ "./node_modules/urijs/src/SecondLevelDomains.js"));
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./punycode */ "./node_modules/urijs/src/punycode.js"), __webpack_require__(/*! ./IPv6 */ "./node_modules/urijs/src/IPv6.js"), __webpack_require__(/*! ./SecondLevelDomains */ "./node_modules/urijs/src/SecondLevelDomains.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function (punycode, IPv6, SLD, root) {
  'use strict';
  /*global location, escape, unescape */
  // FIXME: v2.0.0 renamce non-camelCase properties to uppercase
  /*jshint camelcase: false */

  // save current URI variable, if any
  var _URI = root && root.URI;

  function URI(url, base) {
    var _urlSupplied = arguments.length >= 1;
    var _baseSupplied = arguments.length >= 2;

    // Allow instantiation without the 'new' keyword
    if (!(this instanceof URI)) {
      if (_urlSupplied) {
        if (_baseSupplied) {
          return new URI(url, base);
        }

        return new URI(url);
      }

      return new URI();
    }

    if (url === undefined) {
      if (_urlSupplied) {
        throw new TypeError('undefined is not a valid argument for URI');
      }

      if (typeof location !== 'undefined') {
        url = location.href + '';
      } else {
        url = '';
      }
    }

    if (url === null) {
      if (_urlSupplied) {
        throw new TypeError('null is not a valid argument for URI');
      }
    }

    this.href(url);

    // resolve to base according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#constructor
    if (base !== undefined) {
      return this.absoluteTo(base);
    }

    return this;
  }

  function isInteger(value) {
    return /^[0-9]+$/.test(value);
  }

  URI.version = '1.19.6';

  var p = URI.prototype;
  var hasOwn = Object.prototype.hasOwnProperty;

  function escapeRegEx(string) {
    // https://github.com/medialize/URI.js/commit/85ac21783c11f8ccab06106dba9735a31a86924d#commitcomment-821963
    return string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  }

  function getType(value) {
    // IE8 doesn't return [Object Undefined] but [Object Object] for undefined value
    if (value === undefined) {
      return 'Undefined';
    }

    return String(Object.prototype.toString.call(value)).slice(8, -1);
  }

  function isArray(obj) {
    return getType(obj) === 'Array';
  }

  function filterArrayValues(data, value) {
    var lookup = {};
    var i, length;

    if (getType(value) === 'RegExp') {
      lookup = null;
    } else if (isArray(value)) {
      for (i = 0, length = value.length; i < length; i++) {
        lookup[value[i]] = true;
      }
    } else {
      lookup[value] = true;
    }

    for (i = 0, length = data.length; i < length; i++) {
      /*jshint laxbreak: true */
      var _match = lookup && lookup[data[i]] !== undefined
        || !lookup && value.test(data[i]);
      /*jshint laxbreak: false */
      if (_match) {
        data.splice(i, 1);
        length--;
        i--;
      }
    }

    return data;
  }

  function arrayContains(list, value) {
    var i, length;

    // value may be string, number, array, regexp
    if (isArray(value)) {
      // Note: this can be optimized to O(n) (instead of current O(m * n))
      for (i = 0, length = value.length; i < length; i++) {
        if (!arrayContains(list, value[i])) {
          return false;
        }
      }

      return true;
    }

    var _type = getType(value);
    for (i = 0, length = list.length; i < length; i++) {
      if (_type === 'RegExp') {
        if (typeof list[i] === 'string' && list[i].match(value)) {
          return true;
        }
      } else if (list[i] === value) {
        return true;
      }
    }

    return false;
  }

  function arraysEqual(one, two) {
    if (!isArray(one) || !isArray(two)) {
      return false;
    }

    // arrays can't be equal if they have different amount of content
    if (one.length !== two.length) {
      return false;
    }

    one.sort();
    two.sort();

    for (var i = 0, l = one.length; i < l; i++) {
      if (one[i] !== two[i]) {
        return false;
      }
    }

    return true;
  }

  function trimSlashes(text) {
    var trim_expression = /^\/+|\/+$/g;
    return text.replace(trim_expression, '');
  }

  URI._parts = function() {
    return {
      protocol: null,
      username: null,
      password: null,
      hostname: null,
      urn: null,
      port: null,
      path: null,
      query: null,
      fragment: null,
      // state
      preventInvalidHostname: URI.preventInvalidHostname,
      duplicateQueryParameters: URI.duplicateQueryParameters,
      escapeQuerySpace: URI.escapeQuerySpace
    };
  };
  // state: throw on invalid hostname
  // see https://github.com/medialize/URI.js/pull/345
  // and https://github.com/medialize/URI.js/issues/354
  URI.preventInvalidHostname = false;
  // state: allow duplicate query parameters (a=1&a=1)
  URI.duplicateQueryParameters = false;
  // state: replaces + with %20 (space in query strings)
  URI.escapeQuerySpace = true;
  // static properties
  URI.protocol_expression = /^[a-z][a-z0-9.+-]*$/i;
  URI.idn_expression = /[^a-z0-9\._-]/i;
  URI.punycode_expression = /(xn--)/i;
  // well, 333.444.555.666 matches, but it sure ain't no IPv4 - do we care?
  URI.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  // credits to Rich Brown
  // source: http://forums.intermapper.com/viewtopic.php?p=1096#1096
  // specification: http://www.ietf.org/rfc/rfc4291.txt
  URI.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
  // expression used is "gruber revised" (@gruber v2) determined to be the
  // best solution in a regex-golf we did a couple of ages ago at
  // * http://mathiasbynens.be/demo/url-regex
  // * http://rodneyrehm.de/t/url-regex.html
  URI.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;
  URI.findUri = {
    // valid "scheme://" or "www."
    start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
    // everything up to the next whitespace
    end: /[\s\r\n]|$/,
    // trim trailing punctuation captured by end RegExp
    trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,
    // balanced parens inclusion (), [], {}, <>
    parens: /(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g,
  };
  // http://www.iana.org/assignments/uri-schemes.html
  // http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports
  URI.defaultPorts = {
    http: '80',
    https: '443',
    ftp: '21',
    gopher: '70',
    ws: '80',
    wss: '443'
  };
  // list of protocols which always require a hostname
  URI.hostProtocols = [
    'http',
    'https'
  ];

  // allowed hostname characters according to RFC 3986
  // ALPHA DIGIT "-" "." "_" "~" "!" "$" "&" "'" "(" ")" "*" "+" "," ";" "=" %encoded
  // I've never seen a (non-IDN) hostname other than: ALPHA DIGIT . - _
  URI.invalid_hostname_characters = /[^a-zA-Z0-9\.\-:_]/;
  // map DOM Elements to their URI attribute
  URI.domAttributes = {
    'a': 'href',
    'blockquote': 'cite',
    'link': 'href',
    'base': 'href',
    'script': 'src',
    'form': 'action',
    'img': 'src',
    'area': 'href',
    'iframe': 'src',
    'embed': 'src',
    'source': 'src',
    'track': 'src',
    'input': 'src', // but only if type="image"
    'audio': 'src',
    'video': 'src'
  };
  URI.getDomAttribute = function(node) {
    if (!node || !node.nodeName) {
      return undefined;
    }

    var nodeName = node.nodeName.toLowerCase();
    // <input> should only expose src for type="image"
    if (nodeName === 'input' && node.type !== 'image') {
      return undefined;
    }

    return URI.domAttributes[nodeName];
  };

  function escapeForDumbFirefox36(value) {
    // https://github.com/medialize/URI.js/issues/91
    return escape(value);
  }

  // encoding / decoding according to RFC3986
  function strictEncodeURIComponent(string) {
    // see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/encodeURIComponent
    return encodeURIComponent(string)
      .replace(/[!'()*]/g, escapeForDumbFirefox36)
      .replace(/\*/g, '%2A');
  }
  URI.encode = strictEncodeURIComponent;
  URI.decode = decodeURIComponent;
  URI.iso8859 = function() {
    URI.encode = escape;
    URI.decode = unescape;
  };
  URI.unicode = function() {
    URI.encode = strictEncodeURIComponent;
    URI.decode = decodeURIComponent;
  };
  URI.characters = {
    pathname: {
      encode: {
        // RFC3986 2.1: For consistency, URI producers and normalizers should
        // use uppercase hexadecimal digits for all percent-encodings.
        expression: /%(24|26|2B|2C|3B|3D|3A|40)/ig,
        map: {
          // -._~!'()*
          '%24': '$',
          '%26': '&',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '=',
          '%3A': ':',
          '%40': '@'
        }
      },
      decode: {
        expression: /[\/\?#]/g,
        map: {
          '/': '%2F',
          '?': '%3F',
          '#': '%23'
        }
      }
    },
    reserved: {
      encode: {
        // RFC3986 2.1: For consistency, URI producers and normalizers should
        // use uppercase hexadecimal digits for all percent-encodings.
        expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,
        map: {
          // gen-delims
          '%3A': ':',
          '%2F': '/',
          '%3F': '?',
          '%23': '#',
          '%5B': '[',
          '%5D': ']',
          '%40': '@',
          // sub-delims
          '%21': '!',
          '%24': '$',
          '%26': '&',
          '%27': '\'',
          '%28': '(',
          '%29': ')',
          '%2A': '*',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '='
        }
      }
    },
    urnpath: {
      // The characters under `encode` are the characters called out by RFC 2141 as being acceptable
      // for usage in a URN. RFC2141 also calls out "-", ".", and "_" as acceptable characters, but
      // these aren't encoded by encodeURIComponent, so we don't have to call them out here. Also
      // note that the colon character is not featured in the encoding map; this is because URI.js
      // gives the colons in URNs semantic meaning as the delimiters of path segements, and so it
      // should not appear unencoded in a segment itself.
      // See also the note above about RFC3986 and capitalalized hex digits.
      encode: {
        expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,
        map: {
          '%21': '!',
          '%24': '$',
          '%27': '\'',
          '%28': '(',
          '%29': ')',
          '%2A': '*',
          '%2B': '+',
          '%2C': ',',
          '%3B': ';',
          '%3D': '=',
          '%40': '@'
        }
      },
      // These characters are the characters called out by RFC2141 as "reserved" characters that
      // should never appear in a URN, plus the colon character (see note above).
      decode: {
        expression: /[\/\?#:]/g,
        map: {
          '/': '%2F',
          '?': '%3F',
          '#': '%23',
          ':': '%3A'
        }
      }
    }
  };
  URI.encodeQuery = function(string, escapeQuerySpace) {
    var escaped = URI.encode(string + '');
    if (escapeQuerySpace === undefined) {
      escapeQuerySpace = URI.escapeQuerySpace;
    }

    return escapeQuerySpace ? escaped.replace(/%20/g, '+') : escaped;
  };
  URI.decodeQuery = function(string, escapeQuerySpace) {
    string += '';
    if (escapeQuerySpace === undefined) {
      escapeQuerySpace = URI.escapeQuerySpace;
    }

    try {
      return URI.decode(escapeQuerySpace ? string.replace(/\+/g, '%20') : string);
    } catch(e) {
      // we're not going to mess with weird encodings,
      // give up and return the undecoded original string
      // see https://github.com/medialize/URI.js/issues/87
      // see https://github.com/medialize/URI.js/issues/92
      return string;
    }
  };
  // generate encode/decode path functions
  var _parts = {'encode':'encode', 'decode':'decode'};
  var _part;
  var generateAccessor = function(_group, _part) {
    return function(string) {
      try {
        return URI[_part](string + '').replace(URI.characters[_group][_part].expression, function(c) {
          return URI.characters[_group][_part].map[c];
        });
      } catch (e) {
        // we're not going to mess with weird encodings,
        // give up and return the undecoded original string
        // see https://github.com/medialize/URI.js/issues/87
        // see https://github.com/medialize/URI.js/issues/92
        return string;
      }
    };
  };

  for (_part in _parts) {
    URI[_part + 'PathSegment'] = generateAccessor('pathname', _parts[_part]);
    URI[_part + 'UrnPathSegment'] = generateAccessor('urnpath', _parts[_part]);
  }

  var generateSegmentedPathFunction = function(_sep, _codingFuncName, _innerCodingFuncName) {
    return function(string) {
      // Why pass in names of functions, rather than the function objects themselves? The
      // definitions of some functions (but in particular, URI.decode) will occasionally change due
      // to URI.js having ISO8859 and Unicode modes. Passing in the name and getting it will ensure
      // that the functions we use here are "fresh".
      var actualCodingFunc;
      if (!_innerCodingFuncName) {
        actualCodingFunc = URI[_codingFuncName];
      } else {
        actualCodingFunc = function(string) {
          return URI[_codingFuncName](URI[_innerCodingFuncName](string));
        };
      }

      var segments = (string + '').split(_sep);

      for (var i = 0, length = segments.length; i < length; i++) {
        segments[i] = actualCodingFunc(segments[i]);
      }

      return segments.join(_sep);
    };
  };

  // This takes place outside the above loop because we don't want, e.g., encodeUrnPath functions.
  URI.decodePath = generateSegmentedPathFunction('/', 'decodePathSegment');
  URI.decodeUrnPath = generateSegmentedPathFunction(':', 'decodeUrnPathSegment');
  URI.recodePath = generateSegmentedPathFunction('/', 'encodePathSegment', 'decode');
  URI.recodeUrnPath = generateSegmentedPathFunction(':', 'encodeUrnPathSegment', 'decode');

  URI.encodeReserved = generateAccessor('reserved', 'encode');

  URI.parse = function(string, parts) {
    var pos;
    if (!parts) {
      parts = {
        preventInvalidHostname: URI.preventInvalidHostname
      };
    }
    // [protocol"://"[username[":"password]"@"]hostname[":"port]"/"?][path]["?"querystring]["#"fragment]

    // extract fragment
    pos = string.indexOf('#');
    if (pos > -1) {
      // escaping?
      parts.fragment = string.substring(pos + 1) || null;
      string = string.substring(0, pos);
    }

    // extract query
    pos = string.indexOf('?');
    if (pos > -1) {
      // escaping?
      parts.query = string.substring(pos + 1) || null;
      string = string.substring(0, pos);
    }

    // extract protocol
    if (string.substring(0, 2) === '//') {
      // relative-scheme
      parts.protocol = null;
      string = string.substring(2);
      // extract "user:pass@host:port"
      string = URI.parseAuthority(string, parts);
    } else {
      pos = string.indexOf(':');
      if (pos > -1) {
        parts.protocol = string.substring(0, pos) || null;
        if (parts.protocol && !parts.protocol.match(URI.protocol_expression)) {
          // : may be within the path
          parts.protocol = undefined;
        } else if (string.substring(pos + 1, pos + 3).replace(/\\/g, '/') === '//') {
          string = string.substring(pos + 3);

          // extract "user:pass@host:port"
          string = URI.parseAuthority(string, parts);
        } else {
          string = string.substring(pos + 1);
          parts.urn = true;
        }
      }
    }

    // what's left must be the path
    parts.path = string;

    // and we're done
    return parts;
  };
  URI.parseHost = function(string, parts) {
    if (!string) {
      string = '';
    }

    // Copy chrome, IE, opera backslash-handling behavior.
    // Back slashes before the query string get converted to forward slashes
    // See: https://github.com/joyent/node/blob/386fd24f49b0e9d1a8a076592a404168faeecc34/lib/url.js#L115-L124
    // See: https://code.google.com/p/chromium/issues/detail?id=25916
    // https://github.com/medialize/URI.js/pull/233
    string = string.replace(/\\/g, '/');

    // extract host:port
    var pos = string.indexOf('/');
    var bracketPos;
    var t;

    if (pos === -1) {
      pos = string.length;
    }

    if (string.charAt(0) === '[') {
      // IPv6 host - http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04#section-6
      // I claim most client software breaks on IPv6 anyways. To simplify things, URI only accepts
      // IPv6+port in the format [2001:db8::1]:80 (for the time being)
      bracketPos = string.indexOf(']');
      parts.hostname = string.substring(1, bracketPos) || null;
      parts.port = string.substring(bracketPos + 2, pos) || null;
      if (parts.port === '/') {
        parts.port = null;
      }
    } else {
      var firstColon = string.indexOf(':');
      var firstSlash = string.indexOf('/');
      var nextColon = string.indexOf(':', firstColon + 1);
      if (nextColon !== -1 && (firstSlash === -1 || nextColon < firstSlash)) {
        // IPv6 host contains multiple colons - but no port
        // this notation is actually not allowed by RFC 3986, but we're a liberal parser
        parts.hostname = string.substring(0, pos) || null;
        parts.port = null;
      } else {
        t = string.substring(0, pos).split(':');
        parts.hostname = t[0] || null;
        parts.port = t[1] || null;
      }
    }

    if (parts.hostname && string.substring(pos).charAt(0) !== '/') {
      pos++;
      string = '/' + string;
    }

    if (parts.preventInvalidHostname) {
      URI.ensureValidHostname(parts.hostname, parts.protocol);
    }

    if (parts.port) {
      URI.ensureValidPort(parts.port);
    }

    return string.substring(pos) || '/';
  };
  URI.parseAuthority = function(string, parts) {
    string = URI.parseUserinfo(string, parts);
    return URI.parseHost(string, parts);
  };
  URI.parseUserinfo = function(string, parts) {
    // extract username:password
    var _string = string
    var firstBackSlash = string.indexOf('\\');
    if (firstBackSlash !== -1) {
      string = string.replace(/\\/g, '/')
    }
    var firstSlash = string.indexOf('/');
    var pos = string.lastIndexOf('@', firstSlash > -1 ? firstSlash : string.length - 1);
    var t;

    // authority@ must come before /path or \path
    if (pos > -1 && (firstSlash === -1 || pos < firstSlash)) {
      t = string.substring(0, pos).split(':');
      parts.username = t[0] ? URI.decode(t[0]) : null;
      t.shift();
      parts.password = t[0] ? URI.decode(t.join(':')) : null;
      string = _string.substring(pos + 1);
    } else {
      parts.username = null;
      parts.password = null;
    }

    return string;
  };
  URI.parseQuery = function(string, escapeQuerySpace) {
    if (!string) {
      return {};
    }

    // throw out the funky business - "?"[name"="value"&"]+
    string = string.replace(/&+/g, '&').replace(/^\?*&*|&+$/g, '');

    if (!string) {
      return {};
    }

    var items = {};
    var splits = string.split('&');
    var length = splits.length;
    var v, name, value;

    for (var i = 0; i < length; i++) {
      v = splits[i].split('=');
      name = URI.decodeQuery(v.shift(), escapeQuerySpace);
      // no "=" is null according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#collect-url-parameters
      value = v.length ? URI.decodeQuery(v.join('='), escapeQuerySpace) : null;

      if (hasOwn.call(items, name)) {
        if (typeof items[name] === 'string' || items[name] === null) {
          items[name] = [items[name]];
        }

        items[name].push(value);
      } else {
        items[name] = value;
      }
    }

    return items;
  };

  URI.build = function(parts) {
    var t = '';
    var requireAbsolutePath = false

    if (parts.protocol) {
      t += parts.protocol + ':';
    }

    if (!parts.urn && (t || parts.hostname)) {
      t += '//';
      requireAbsolutePath = true
    }

    t += (URI.buildAuthority(parts) || '');

    if (typeof parts.path === 'string') {
      if (parts.path.charAt(0) !== '/' && requireAbsolutePath) {
        t += '/';
      }

      t += parts.path;
    }

    if (typeof parts.query === 'string' && parts.query) {
      t += '?' + parts.query;
    }

    if (typeof parts.fragment === 'string' && parts.fragment) {
      t += '#' + parts.fragment;
    }
    return t;
  };
  URI.buildHost = function(parts) {
    var t = '';

    if (!parts.hostname) {
      return '';
    } else if (URI.ip6_expression.test(parts.hostname)) {
      t += '[' + parts.hostname + ']';
    } else {
      t += parts.hostname;
    }

    if (parts.port) {
      t += ':' + parts.port;
    }

    return t;
  };
  URI.buildAuthority = function(parts) {
    return URI.buildUserinfo(parts) + URI.buildHost(parts);
  };
  URI.buildUserinfo = function(parts) {
    var t = '';

    if (parts.username) {
      t += URI.encode(parts.username);
    }

    if (parts.password) {
      t += ':' + URI.encode(parts.password);
    }

    if (t) {
      t += '@';
    }

    return t;
  };
  URI.buildQuery = function(data, duplicateQueryParameters, escapeQuerySpace) {
    // according to http://tools.ietf.org/html/rfc3986 or http://labs.apache.org/webarch/uri/rfc/rfc3986.html
    // being »-._~!$&'()*+,;=:@/?« %HEX and alnum are allowed
    // the RFC explicitly states ?/foo being a valid use case, no mention of parameter syntax!
    // URI.js treats the query string as being application/x-www-form-urlencoded
    // see http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type

    var t = '';
    var unique, key, i, length;
    for (key in data) {
      if (hasOwn.call(data, key)) {
        if (isArray(data[key])) {
          unique = {};
          for (i = 0, length = data[key].length; i < length; i++) {
            if (data[key][i] !== undefined && unique[data[key][i] + ''] === undefined) {
              t += '&' + URI.buildQueryParameter(key, data[key][i], escapeQuerySpace);
              if (duplicateQueryParameters !== true) {
                unique[data[key][i] + ''] = true;
              }
            }
          }
        } else if (data[key] !== undefined) {
          t += '&' + URI.buildQueryParameter(key, data[key], escapeQuerySpace);
        }
      }
    }

    return t.substring(1);
  };
  URI.buildQueryParameter = function(name, value, escapeQuerySpace) {
    // http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type -- application/x-www-form-urlencoded
    // don't append "=" for null values, according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#url-parameter-serialization
    return URI.encodeQuery(name, escapeQuerySpace) + (value !== null ? '=' + URI.encodeQuery(value, escapeQuerySpace) : '');
  };

  URI.addQuery = function(data, name, value) {
    if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          URI.addQuery(data, key, name[key]);
        }
      }
    } else if (typeof name === 'string') {
      if (data[name] === undefined) {
        data[name] = value;
        return;
      } else if (typeof data[name] === 'string') {
        data[name] = [data[name]];
      }

      if (!isArray(value)) {
        value = [value];
      }

      data[name] = (data[name] || []).concat(value);
    } else {
      throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
    }
  };

  URI.setQuery = function(data, name, value) {
    if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          URI.setQuery(data, key, name[key]);
        }
      }
    } else if (typeof name === 'string') {
      data[name] = value === undefined ? null : value;
    } else {
      throw new TypeError('URI.setQuery() accepts an object, string as the name parameter');
    }
  };

  URI.removeQuery = function(data, name, value) {
    var i, length, key;

    if (isArray(name)) {
      for (i = 0, length = name.length; i < length; i++) {
        data[name[i]] = undefined;
      }
    } else if (getType(name) === 'RegExp') {
      for (key in data) {
        if (name.test(key)) {
          data[key] = undefined;
        }
      }
    } else if (typeof name === 'object') {
      for (key in name) {
        if (hasOwn.call(name, key)) {
          URI.removeQuery(data, key, name[key]);
        }
      }
    } else if (typeof name === 'string') {
      if (value !== undefined) {
        if (getType(value) === 'RegExp') {
          if (!isArray(data[name]) && value.test(data[name])) {
            data[name] = undefined;
          } else {
            data[name] = filterArrayValues(data[name], value);
          }
        } else if (data[name] === String(value) && (!isArray(value) || value.length === 1)) {
          data[name] = undefined;
        } else if (isArray(data[name])) {
          data[name] = filterArrayValues(data[name], value);
        }
      } else {
        data[name] = undefined;
      }
    } else {
      throw new TypeError('URI.removeQuery() accepts an object, string, RegExp as the first parameter');
    }
  };
  URI.hasQuery = function(data, name, value, withinArray) {
    switch (getType(name)) {
      case 'String':
        // Nothing to do here
        break;

      case 'RegExp':
        for (var key in data) {
          if (hasOwn.call(data, key)) {
            if (name.test(key) && (value === undefined || URI.hasQuery(data, key, value))) {
              return true;
            }
          }
        }

        return false;

      case 'Object':
        for (var _key in name) {
          if (hasOwn.call(name, _key)) {
            if (!URI.hasQuery(data, _key, name[_key])) {
              return false;
            }
          }
        }

        return true;

      default:
        throw new TypeError('URI.hasQuery() accepts a string, regular expression or object as the name parameter');
    }

    switch (getType(value)) {
      case 'Undefined':
        // true if exists (but may be empty)
        return name in data; // data[name] !== undefined;

      case 'Boolean':
        // true if exists and non-empty
        var _booly = Boolean(isArray(data[name]) ? data[name].length : data[name]);
        return value === _booly;

      case 'Function':
        // allow complex comparison
        return !!value(data[name], name, data);

      case 'Array':
        if (!isArray(data[name])) {
          return false;
        }

        var op = withinArray ? arrayContains : arraysEqual;
        return op(data[name], value);

      case 'RegExp':
        if (!isArray(data[name])) {
          return Boolean(data[name] && data[name].match(value));
        }

        if (!withinArray) {
          return false;
        }

        return arrayContains(data[name], value);

      case 'Number':
        value = String(value);
        /* falls through */
      case 'String':
        if (!isArray(data[name])) {
          return data[name] === value;
        }

        if (!withinArray) {
          return false;
        }

        return arrayContains(data[name], value);

      default:
        throw new TypeError('URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter');
    }
  };


  URI.joinPaths = function() {
    var input = [];
    var segments = [];
    var nonEmptySegments = 0;

    for (var i = 0; i < arguments.length; i++) {
      var url = new URI(arguments[i]);
      input.push(url);
      var _segments = url.segment();
      for (var s = 0; s < _segments.length; s++) {
        if (typeof _segments[s] === 'string') {
          segments.push(_segments[s]);
        }

        if (_segments[s]) {
          nonEmptySegments++;
        }
      }
    }

    if (!segments.length || !nonEmptySegments) {
      return new URI('');
    }

    var uri = new URI('').segment(segments);

    if (input[0].path() === '' || input[0].path().slice(0, 1) === '/') {
      uri.path('/' + uri.path());
    }

    return uri.normalize();
  };

  URI.commonPath = function(one, two) {
    var length = Math.min(one.length, two.length);
    var pos;

    // find first non-matching character
    for (pos = 0; pos < length; pos++) {
      if (one.charAt(pos) !== two.charAt(pos)) {
        pos--;
        break;
      }
    }

    if (pos < 1) {
      return one.charAt(0) === two.charAt(0) && one.charAt(0) === '/' ? '/' : '';
    }

    // revert to last /
    if (one.charAt(pos) !== '/' || two.charAt(pos) !== '/') {
      pos = one.substring(0, pos).lastIndexOf('/');
    }

    return one.substring(0, pos + 1);
  };

  URI.withinString = function(string, callback, options) {
    options || (options = {});
    var _start = options.start || URI.findUri.start;
    var _end = options.end || URI.findUri.end;
    var _trim = options.trim || URI.findUri.trim;
    var _parens = options.parens || URI.findUri.parens;
    var _attributeOpen = /[a-z0-9-]=["']?$/i;

    _start.lastIndex = 0;
    while (true) {
      var match = _start.exec(string);
      if (!match) {
        break;
      }

      var start = match.index;
      if (options.ignoreHtml) {
        // attribut(e=["']?$)
        var attributeOpen = string.slice(Math.max(start - 3, 0), start);
        if (attributeOpen && _attributeOpen.test(attributeOpen)) {
          continue;
        }
      }

      var end = start + string.slice(start).search(_end);
      var slice = string.slice(start, end);
      // make sure we include well balanced parens
      var parensEnd = -1;
      while (true) {
        var parensMatch = _parens.exec(slice);
        if (!parensMatch) {
          break;
        }

        var parensMatchEnd = parensMatch.index + parensMatch[0].length;
        parensEnd = Math.max(parensEnd, parensMatchEnd);
      }

      if (parensEnd > -1) {
        slice = slice.slice(0, parensEnd) + slice.slice(parensEnd).replace(_trim, '');
      } else {
        slice = slice.replace(_trim, '');
      }

      if (slice.length <= match[0].length) {
        // the extract only contains the starting marker of a URI,
        // e.g. "www" or "http://"
        continue;
      }

      if (options.ignore && options.ignore.test(slice)) {
        continue;
      }

      end = start + slice.length;
      var result = callback(slice, start, end, string);
      if (result === undefined) {
        _start.lastIndex = end;
        continue;
      }

      result = String(result);
      string = string.slice(0, start) + result + string.slice(end);
      _start.lastIndex = start + result.length;
    }

    _start.lastIndex = 0;
    return string;
  };

  URI.ensureValidHostname = function(v, protocol) {
    // Theoretically URIs allow percent-encoding in Hostnames (according to RFC 3986)
    // they are not part of DNS and therefore ignored by URI.js

    var hasHostname = !!v; // not null and not an empty string
    var hasProtocol = !!protocol;
    var rejectEmptyHostname = false;

    if (hasProtocol) {
      rejectEmptyHostname = arrayContains(URI.hostProtocols, protocol);
    }

    if (rejectEmptyHostname && !hasHostname) {
      throw new TypeError('Hostname cannot be empty, if protocol is ' + protocol);
    } else if (v && v.match(URI.invalid_hostname_characters)) {
      // test punycode
      if (!punycode) {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');
      }
      if (punycode.toASCII(v).match(URI.invalid_hostname_characters)) {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-:_]');
      }
    }
  };

  URI.ensureValidPort = function (v) {
    if (!v) {
      return;
    }

    var port = Number(v);
    if (isInteger(port) && (port > 0) && (port < 65536)) {
      return;
    }

    throw new TypeError('Port "' + v + '" is not a valid port');
  };

  // noConflict
  URI.noConflict = function(removeAll) {
    if (removeAll) {
      var unconflicted = {
        URI: this.noConflict()
      };

      if (root.URITemplate && typeof root.URITemplate.noConflict === 'function') {
        unconflicted.URITemplate = root.URITemplate.noConflict();
      }

      if (root.IPv6 && typeof root.IPv6.noConflict === 'function') {
        unconflicted.IPv6 = root.IPv6.noConflict();
      }

      if (root.SecondLevelDomains && typeof root.SecondLevelDomains.noConflict === 'function') {
        unconflicted.SecondLevelDomains = root.SecondLevelDomains.noConflict();
      }

      return unconflicted;
    } else if (root.URI === this) {
      root.URI = _URI;
    }

    return this;
  };

  p.build = function(deferBuild) {
    if (deferBuild === true) {
      this._deferred_build = true;
    } else if (deferBuild === undefined || this._deferred_build) {
      this._string = URI.build(this._parts);
      this._deferred_build = false;
    }

    return this;
  };

  p.clone = function() {
    return new URI(this);
  };

  p.valueOf = p.toString = function() {
    return this.build(false)._string;
  };


  function generateSimpleAccessor(_part){
    return function(v, build) {
      if (v === undefined) {
        return this._parts[_part] || '';
      } else {
        this._parts[_part] = v || null;
        this.build(!build);
        return this;
      }
    };
  }

  function generatePrefixAccessor(_part, _key){
    return function(v, build) {
      if (v === undefined) {
        return this._parts[_part] || '';
      } else {
        if (v !== null) {
          v = v + '';
          if (v.charAt(0) === _key) {
            v = v.substring(1);
          }
        }

        this._parts[_part] = v;
        this.build(!build);
        return this;
      }
    };
  }

  p.protocol = generateSimpleAccessor('protocol');
  p.username = generateSimpleAccessor('username');
  p.password = generateSimpleAccessor('password');
  p.hostname = generateSimpleAccessor('hostname');
  p.port = generateSimpleAccessor('port');
  p.query = generatePrefixAccessor('query', '?');
  p.fragment = generatePrefixAccessor('fragment', '#');

  p.search = function(v, build) {
    var t = this.query(v, build);
    return typeof t === 'string' && t.length ? ('?' + t) : t;
  };
  p.hash = function(v, build) {
    var t = this.fragment(v, build);
    return typeof t === 'string' && t.length ? ('#' + t) : t;
  };

  p.pathname = function(v, build) {
    if (v === undefined || v === true) {
      var res = this._parts.path || (this._parts.hostname ? '/' : '');
      return v ? (this._parts.urn ? URI.decodeUrnPath : URI.decodePath)(res) : res;
    } else {
      if (this._parts.urn) {
        this._parts.path = v ? URI.recodeUrnPath(v) : '';
      } else {
        this._parts.path = v ? URI.recodePath(v) : '/';
      }
      this.build(!build);
      return this;
    }
  };
  p.path = p.pathname;
  p.href = function(href, build) {
    var key;

    if (href === undefined) {
      return this.toString();
    }

    this._string = '';
    this._parts = URI._parts();

    var _URI = href instanceof URI;
    var _object = typeof href === 'object' && (href.hostname || href.path || href.pathname);
    if (href.nodeName) {
      var attribute = URI.getDomAttribute(href);
      href = href[attribute] || '';
      _object = false;
    }

    // window.location is reported to be an object, but it's not the sort
    // of object we're looking for:
    // * location.protocol ends with a colon
    // * location.query != object.search
    // * location.hash != object.fragment
    // simply serializing the unknown object should do the trick
    // (for location, not for everything...)
    if (!_URI && _object && href.pathname !== undefined) {
      href = href.toString();
    }

    if (typeof href === 'string' || href instanceof String) {
      this._parts = URI.parse(String(href), this._parts);
    } else if (_URI || _object) {
      var src = _URI ? href._parts : href;
      for (key in src) {
        if (key === 'query') { continue; }
        if (hasOwn.call(this._parts, key)) {
          this._parts[key] = src[key];
        }
      }
      if (src.query) {
        this.query(src.query, false);
      }
    } else {
      throw new TypeError('invalid input');
    }

    this.build(!build);
    return this;
  };

  // identification accessors
  p.is = function(what) {
    var ip = false;
    var ip4 = false;
    var ip6 = false;
    var name = false;
    var sld = false;
    var idn = false;
    var punycode = false;
    var relative = !this._parts.urn;

    if (this._parts.hostname) {
      relative = false;
      ip4 = URI.ip4_expression.test(this._parts.hostname);
      ip6 = URI.ip6_expression.test(this._parts.hostname);
      ip = ip4 || ip6;
      name = !ip;
      sld = name && SLD && SLD.has(this._parts.hostname);
      idn = name && URI.idn_expression.test(this._parts.hostname);
      punycode = name && URI.punycode_expression.test(this._parts.hostname);
    }

    switch (what.toLowerCase()) {
      case 'relative':
        return relative;

      case 'absolute':
        return !relative;

      // hostname identification
      case 'domain':
      case 'name':
        return name;

      case 'sld':
        return sld;

      case 'ip':
        return ip;

      case 'ip4':
      case 'ipv4':
      case 'inet4':
        return ip4;

      case 'ip6':
      case 'ipv6':
      case 'inet6':
        return ip6;

      case 'idn':
        return idn;

      case 'url':
        return !this._parts.urn;

      case 'urn':
        return !!this._parts.urn;

      case 'punycode':
        return punycode;
    }

    return null;
  };

  // component specific input validation
  var _protocol = p.protocol;
  var _port = p.port;
  var _hostname = p.hostname;

  p.protocol = function(v, build) {
    if (v) {
      // accept trailing ://
      v = v.replace(/:(\/\/)?$/, '');

      if (!v.match(URI.protocol_expression)) {
        throw new TypeError('Protocol "' + v + '" contains characters other than [A-Z0-9.+-] or doesn\'t start with [A-Z]');
      }
    }

    return _protocol.call(this, v, build);
  };
  p.scheme = p.protocol;
  p.port = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v !== undefined) {
      if (v === 0) {
        v = null;
      }

      if (v) {
        v += '';
        if (v.charAt(0) === ':') {
          v = v.substring(1);
        }

        URI.ensureValidPort(v);
      }
    }
    return _port.call(this, v, build);
  };
  p.hostname = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v !== undefined) {
      var x = { preventInvalidHostname: this._parts.preventInvalidHostname };
      var res = URI.parseHost(v, x);
      if (res !== '/') {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
      }

      v = x.hostname;
      if (this._parts.preventInvalidHostname) {
        URI.ensureValidHostname(v, this._parts.protocol);
      }
    }

    return _hostname.call(this, v, build);
  };

  // compound accessors
  p.origin = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      var protocol = this.protocol();
      var authority = this.authority();
      if (!authority) {
        return '';
      }

      return (protocol ? protocol + '://' : '') + this.authority();
    } else {
      var origin = URI(v);
      this
        .protocol(origin.protocol())
        .authority(origin.authority())
        .build(!build);
      return this;
    }
  };
  p.host = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      return this._parts.hostname ? URI.buildHost(this._parts) : '';
    } else {
      var res = URI.parseHost(v, this._parts);
      if (res !== '/') {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
      }

      this.build(!build);
      return this;
    }
  };
  p.authority = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      return this._parts.hostname ? URI.buildAuthority(this._parts) : '';
    } else {
      var res = URI.parseAuthority(v, this._parts);
      if (res !== '/') {
        throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
      }

      this.build(!build);
      return this;
    }
  };
  p.userinfo = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined) {
      var t = URI.buildUserinfo(this._parts);
      return t ? t.substring(0, t.length -1) : t;
    } else {
      if (v[v.length-1] !== '@') {
        v += '@';
      }

      URI.parseUserinfo(v, this._parts);
      this.build(!build);
      return this;
    }
  };
  p.resource = function(v, build) {
    var parts;

    if (v === undefined) {
      return this.path() + this.search() + this.hash();
    }

    parts = URI.parse(v);
    this._parts.path = parts.path;
    this._parts.query = parts.query;
    this._parts.fragment = parts.fragment;
    this.build(!build);
    return this;
  };

  // fraction accessors
  p.subdomain = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    // convenience, return "www" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      // grab domain and add another segment
      var end = this._parts.hostname.length - this.domain().length - 1;
      return this._parts.hostname.substring(0, end) || '';
    } else {
      var e = this._parts.hostname.length - this.domain().length;
      var sub = this._parts.hostname.substring(0, e);
      var replace = new RegExp('^' + escapeRegEx(sub));

      if (v && v.charAt(v.length - 1) !== '.') {
        v += '.';
      }

      if (v.indexOf(':') !== -1) {
        throw new TypeError('Domains cannot contain colons');
      }

      if (v) {
        URI.ensureValidHostname(v, this._parts.protocol);
      }

      this._parts.hostname = this._parts.hostname.replace(replace, v);
      this.build(!build);
      return this;
    }
  };
  p.domain = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v === 'boolean') {
      build = v;
      v = undefined;
    }

    // convenience, return "example.org" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      // if hostname consists of 1 or 2 segments, it must be the domain
      var t = this._parts.hostname.match(/\./g);
      if (t && t.length < 2) {
        return this._parts.hostname;
      }

      // grab tld and add another segment
      var end = this._parts.hostname.length - this.tld(build).length - 1;
      end = this._parts.hostname.lastIndexOf('.', end -1) + 1;
      return this._parts.hostname.substring(end) || '';
    } else {
      if (!v) {
        throw new TypeError('cannot set domain empty');
      }

      if (v.indexOf(':') !== -1) {
        throw new TypeError('Domains cannot contain colons');
      }

      URI.ensureValidHostname(v, this._parts.protocol);

      if (!this._parts.hostname || this.is('IP')) {
        this._parts.hostname = v;
      } else {
        var replace = new RegExp(escapeRegEx(this.domain()) + '$');
        this._parts.hostname = this._parts.hostname.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.tld = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v === 'boolean') {
      build = v;
      v = undefined;
    }

    // return "org" from "www.example.org"
    if (v === undefined) {
      if (!this._parts.hostname || this.is('IP')) {
        return '';
      }

      var pos = this._parts.hostname.lastIndexOf('.');
      var tld = this._parts.hostname.substring(pos + 1);

      if (build !== true && SLD && SLD.list[tld.toLowerCase()]) {
        return SLD.get(this._parts.hostname) || tld;
      }

      return tld;
    } else {
      var replace;

      if (!v) {
        throw new TypeError('cannot set TLD empty');
      } else if (v.match(/[^a-zA-Z0-9-]/)) {
        if (SLD && SLD.is(v)) {
          replace = new RegExp(escapeRegEx(this.tld()) + '$');
          this._parts.hostname = this._parts.hostname.replace(replace, v);
        } else {
          throw new TypeError('TLD "' + v + '" contains characters other than [A-Z0-9]');
        }
      } else if (!this._parts.hostname || this.is('IP')) {
        throw new ReferenceError('cannot set TLD on non-domain host');
      } else {
        replace = new RegExp(escapeRegEx(this.tld()) + '$');
        this._parts.hostname = this._parts.hostname.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.directory = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined || v === true) {
      if (!this._parts.path && !this._parts.hostname) {
        return '';
      }

      if (this._parts.path === '/') {
        return '/';
      }

      var end = this._parts.path.length - this.filename().length - 1;
      var res = this._parts.path.substring(0, end) || (this._parts.hostname ? '/' : '');

      return v ? URI.decodePath(res) : res;

    } else {
      var e = this._parts.path.length - this.filename().length;
      var directory = this._parts.path.substring(0, e);
      var replace = new RegExp('^' + escapeRegEx(directory));

      // fully qualifier directories begin with a slash
      if (!this.is('relative')) {
        if (!v) {
          v = '/';
        }

        if (v.charAt(0) !== '/') {
          v = '/' + v;
        }
      }

      // directories always end with a slash
      if (v && v.charAt(v.length - 1) !== '/') {
        v += '/';
      }

      v = URI.recodePath(v);
      this._parts.path = this._parts.path.replace(replace, v);
      this.build(!build);
      return this;
    }
  };
  p.filename = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (typeof v !== 'string') {
      if (!this._parts.path || this._parts.path === '/') {
        return '';
      }

      var pos = this._parts.path.lastIndexOf('/');
      var res = this._parts.path.substring(pos+1);

      return v ? URI.decodePathSegment(res) : res;
    } else {
      var mutatedDirectory = false;

      if (v.charAt(0) === '/') {
        v = v.substring(1);
      }

      if (v.match(/\.?\//)) {
        mutatedDirectory = true;
      }

      var replace = new RegExp(escapeRegEx(this.filename()) + '$');
      v = URI.recodePath(v);
      this._parts.path = this._parts.path.replace(replace, v);

      if (mutatedDirectory) {
        this.normalizePath(build);
      } else {
        this.build(!build);
      }

      return this;
    }
  };
  p.suffix = function(v, build) {
    if (this._parts.urn) {
      return v === undefined ? '' : this;
    }

    if (v === undefined || v === true) {
      if (!this._parts.path || this._parts.path === '/') {
        return '';
      }

      var filename = this.filename();
      var pos = filename.lastIndexOf('.');
      var s, res;

      if (pos === -1) {
        return '';
      }

      // suffix may only contain alnum characters (yup, I made this up.)
      s = filename.substring(pos+1);
      res = (/^[a-z0-9%]+$/i).test(s) ? s : '';
      return v ? URI.decodePathSegment(res) : res;
    } else {
      if (v.charAt(0) === '.') {
        v = v.substring(1);
      }

      var suffix = this.suffix();
      var replace;

      if (!suffix) {
        if (!v) {
          return this;
        }

        this._parts.path += '.' + URI.recodePath(v);
      } else if (!v) {
        replace = new RegExp(escapeRegEx('.' + suffix) + '$');
      } else {
        replace = new RegExp(escapeRegEx(suffix) + '$');
      }

      if (replace) {
        v = URI.recodePath(v);
        this._parts.path = this._parts.path.replace(replace, v);
      }

      this.build(!build);
      return this;
    }
  };
  p.segment = function(segment, v, build) {
    var separator = this._parts.urn ? ':' : '/';
    var path = this.path();
    var absolute = path.substring(0, 1) === '/';
    var segments = path.split(separator);

    if (segment !== undefined && typeof segment !== 'number') {
      build = v;
      v = segment;
      segment = undefined;
    }

    if (segment !== undefined && typeof segment !== 'number') {
      throw new Error('Bad segment "' + segment + '", must be 0-based integer');
    }

    if (absolute) {
      segments.shift();
    }

    if (segment < 0) {
      // allow negative indexes to address from the end
      segment = Math.max(segments.length + segment, 0);
    }

    if (v === undefined) {
      /*jshint laxbreak: true */
      return segment === undefined
        ? segments
        : segments[segment];
      /*jshint laxbreak: false */
    } else if (segment === null || segments[segment] === undefined) {
      if (isArray(v)) {
        segments = [];
        // collapse empty elements within array
        for (var i=0, l=v.length; i < l; i++) {
          if (!v[i].length && (!segments.length || !segments[segments.length -1].length)) {
            continue;
          }

          if (segments.length && !segments[segments.length -1].length) {
            segments.pop();
          }

          segments.push(trimSlashes(v[i]));
        }
      } else if (v || typeof v === 'string') {
        v = trimSlashes(v);
        if (segments[segments.length -1] === '') {
          // empty trailing elements have to be overwritten
          // to prevent results such as /foo//bar
          segments[segments.length -1] = v;
        } else {
          segments.push(v);
        }
      }
    } else {
      if (v) {
        segments[segment] = trimSlashes(v);
      } else {
        segments.splice(segment, 1);
      }
    }

    if (absolute) {
      segments.unshift('');
    }

    return this.path(segments.join(separator), build);
  };
  p.segmentCoded = function(segment, v, build) {
    var segments, i, l;

    if (typeof segment !== 'number') {
      build = v;
      v = segment;
      segment = undefined;
    }

    if (v === undefined) {
      segments = this.segment(segment, v, build);
      if (!isArray(segments)) {
        segments = segments !== undefined ? URI.decode(segments) : undefined;
      } else {
        for (i = 0, l = segments.length; i < l; i++) {
          segments[i] = URI.decode(segments[i]);
        }
      }

      return segments;
    }

    if (!isArray(v)) {
      v = (typeof v === 'string' || v instanceof String) ? URI.encode(v) : v;
    } else {
      for (i = 0, l = v.length; i < l; i++) {
        v[i] = URI.encode(v[i]);
      }
    }

    return this.segment(segment, v, build);
  };

  // mutating query string
  var q = p.query;
  p.query = function(v, build) {
    if (v === true) {
      return URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    } else if (typeof v === 'function') {
      var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
      var result = v.call(this, data);
      this._parts.query = URI.buildQuery(result || data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
      this.build(!build);
      return this;
    } else if (v !== undefined && typeof v !== 'string') {
      this._parts.query = URI.buildQuery(v, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
      this.build(!build);
      return this;
    } else {
      return q.call(this, v, build);
    }
  };
  p.setQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);

    if (typeof name === 'string' || name instanceof String) {
      data[name] = value !== undefined ? value : null;
    } else if (typeof name === 'object') {
      for (var key in name) {
        if (hasOwn.call(name, key)) {
          data[key] = name[key];
        }
      }
    } else {
      throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
    }

    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.addQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    URI.addQuery(data, name, value === undefined ? null : value);
    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.removeQuery = function(name, value, build) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    URI.removeQuery(data, name, value);
    this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
    if (typeof name !== 'string') {
      build = value;
    }

    this.build(!build);
    return this;
  };
  p.hasQuery = function(name, value, withinArray) {
    var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    return URI.hasQuery(data, name, value, withinArray);
  };
  p.setSearch = p.setQuery;
  p.addSearch = p.addQuery;
  p.removeSearch = p.removeQuery;
  p.hasSearch = p.hasQuery;

  // sanitizing URLs
  p.normalize = function() {
    if (this._parts.urn) {
      return this
        .normalizeProtocol(false)
        .normalizePath(false)
        .normalizeQuery(false)
        .normalizeFragment(false)
        .build();
    }

    return this
      .normalizeProtocol(false)
      .normalizeHostname(false)
      .normalizePort(false)
      .normalizePath(false)
      .normalizeQuery(false)
      .normalizeFragment(false)
      .build();
  };
  p.normalizeProtocol = function(build) {
    if (typeof this._parts.protocol === 'string') {
      this._parts.protocol = this._parts.protocol.toLowerCase();
      this.build(!build);
    }

    return this;
  };
  p.normalizeHostname = function(build) {
    if (this._parts.hostname) {
      if (this.is('IDN') && punycode) {
        this._parts.hostname = punycode.toASCII(this._parts.hostname);
      } else if (this.is('IPv6') && IPv6) {
        this._parts.hostname = IPv6.best(this._parts.hostname);
      }

      this._parts.hostname = this._parts.hostname.toLowerCase();
      this.build(!build);
    }

    return this;
  };
  p.normalizePort = function(build) {
    // remove port of it's the protocol's default
    if (typeof this._parts.protocol === 'string' && this._parts.port === URI.defaultPorts[this._parts.protocol]) {
      this._parts.port = null;
      this.build(!build);
    }

    return this;
  };
  p.normalizePath = function(build) {
    var _path = this._parts.path;
    if (!_path) {
      return this;
    }

    if (this._parts.urn) {
      this._parts.path = URI.recodeUrnPath(this._parts.path);
      this.build(!build);
      return this;
    }

    if (this._parts.path === '/') {
      return this;
    }

    _path = URI.recodePath(_path);

    var _was_relative;
    var _leadingParents = '';
    var _parent, _pos;

    // handle relative paths
    if (_path.charAt(0) !== '/') {
      _was_relative = true;
      _path = '/' + _path;
    }

    // handle relative files (as opposed to directories)
    if (_path.slice(-3) === '/..' || _path.slice(-2) === '/.') {
      _path += '/';
    }

    // resolve simples
    _path = _path
      .replace(/(\/(\.\/)+)|(\/\.$)/g, '/')
      .replace(/\/{2,}/g, '/');

    // remember leading parents
    if (_was_relative) {
      _leadingParents = _path.substring(1).match(/^(\.\.\/)+/) || '';
      if (_leadingParents) {
        _leadingParents = _leadingParents[0];
      }
    }

    // resolve parents
    while (true) {
      _parent = _path.search(/\/\.\.(\/|$)/);
      if (_parent === -1) {
        // no more ../ to resolve
        break;
      } else if (_parent === 0) {
        // top level cannot be relative, skip it
        _path = _path.substring(3);
        continue;
      }

      _pos = _path.substring(0, _parent).lastIndexOf('/');
      if (_pos === -1) {
        _pos = _parent;
      }
      _path = _path.substring(0, _pos) + _path.substring(_parent + 3);
    }

    // revert to relative
    if (_was_relative && this.is('relative')) {
      _path = _leadingParents + _path.substring(1);
    }

    this._parts.path = _path;
    this.build(!build);
    return this;
  };
  p.normalizePathname = p.normalizePath;
  p.normalizeQuery = function(build) {
    if (typeof this._parts.query === 'string') {
      if (!this._parts.query.length) {
        this._parts.query = null;
      } else {
        this.query(URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace));
      }

      this.build(!build);
    }

    return this;
  };
  p.normalizeFragment = function(build) {
    if (!this._parts.fragment) {
      this._parts.fragment = null;
      this.build(!build);
    }

    return this;
  };
  p.normalizeSearch = p.normalizeQuery;
  p.normalizeHash = p.normalizeFragment;

  p.iso8859 = function() {
    // expect unicode input, iso8859 output
    var e = URI.encode;
    var d = URI.decode;

    URI.encode = escape;
    URI.decode = decodeURIComponent;
    try {
      this.normalize();
    } finally {
      URI.encode = e;
      URI.decode = d;
    }
    return this;
  };

  p.unicode = function() {
    // expect iso8859 input, unicode output
    var e = URI.encode;
    var d = URI.decode;

    URI.encode = strictEncodeURIComponent;
    URI.decode = unescape;
    try {
      this.normalize();
    } finally {
      URI.encode = e;
      URI.decode = d;
    }
    return this;
  };

  p.readable = function() {
    var uri = this.clone();
    // removing username, password, because they shouldn't be displayed according to RFC 3986
    uri.username('').password('').normalize();
    var t = '';
    if (uri._parts.protocol) {
      t += uri._parts.protocol + '://';
    }

    if (uri._parts.hostname) {
      if (uri.is('punycode') && punycode) {
        t += punycode.toUnicode(uri._parts.hostname);
        if (uri._parts.port) {
          t += ':' + uri._parts.port;
        }
      } else {
        t += uri.host();
      }
    }

    if (uri._parts.hostname && uri._parts.path && uri._parts.path.charAt(0) !== '/') {
      t += '/';
    }

    t += uri.path(true);
    if (uri._parts.query) {
      var q = '';
      for (var i = 0, qp = uri._parts.query.split('&'), l = qp.length; i < l; i++) {
        var kv = (qp[i] || '').split('=');
        q += '&' + URI.decodeQuery(kv[0], this._parts.escapeQuerySpace)
          .replace(/&/g, '%26');

        if (kv[1] !== undefined) {
          q += '=' + URI.decodeQuery(kv[1], this._parts.escapeQuerySpace)
            .replace(/&/g, '%26');
        }
      }
      t += '?' + q.substring(1);
    }

    t += URI.decodeQuery(uri.hash(), true);
    return t;
  };

  // resolving relative and absolute URLs
  p.absoluteTo = function(base) {
    var resolved = this.clone();
    var properties = ['protocol', 'username', 'password', 'hostname', 'port'];
    var basedir, i, p;

    if (this._parts.urn) {
      throw new Error('URNs do not have any generally defined hierarchical components');
    }

    if (!(base instanceof URI)) {
      base = new URI(base);
    }

    if (resolved._parts.protocol) {
      // Directly returns even if this._parts.hostname is empty.
      return resolved;
    } else {
      resolved._parts.protocol = base._parts.protocol;
    }

    if (this._parts.hostname) {
      return resolved;
    }

    for (i = 0; (p = properties[i]); i++) {
      resolved._parts[p] = base._parts[p];
    }

    if (!resolved._parts.path) {
      resolved._parts.path = base._parts.path;
      if (!resolved._parts.query) {
        resolved._parts.query = base._parts.query;
      }
    } else {
      if (resolved._parts.path.substring(-2) === '..') {
        resolved._parts.path += '/';
      }

      if (resolved.path().charAt(0) !== '/') {
        basedir = base.directory();
        basedir = basedir ? basedir : base.path().indexOf('/') === 0 ? '/' : '';
        resolved._parts.path = (basedir ? (basedir + '/') : '') + resolved._parts.path;
        resolved.normalizePath();
      }
    }

    resolved.build();
    return resolved;
  };
  p.relativeTo = function(base) {
    var relative = this.clone().normalize();
    var relativeParts, baseParts, common, relativePath, basePath;

    if (relative._parts.urn) {
      throw new Error('URNs do not have any generally defined hierarchical components');
    }

    base = new URI(base).normalize();
    relativeParts = relative._parts;
    baseParts = base._parts;
    relativePath = relative.path();
    basePath = base.path();

    if (relativePath.charAt(0) !== '/') {
      throw new Error('URI is already relative');
    }

    if (basePath.charAt(0) !== '/') {
      throw new Error('Cannot calculate a URI relative to another relative URI');
    }

    if (relativeParts.protocol === baseParts.protocol) {
      relativeParts.protocol = null;
    }

    if (relativeParts.username !== baseParts.username || relativeParts.password !== baseParts.password) {
      return relative.build();
    }

    if (relativeParts.protocol !== null || relativeParts.username !== null || relativeParts.password !== null) {
      return relative.build();
    }

    if (relativeParts.hostname === baseParts.hostname && relativeParts.port === baseParts.port) {
      relativeParts.hostname = null;
      relativeParts.port = null;
    } else {
      return relative.build();
    }

    if (relativePath === basePath) {
      relativeParts.path = '';
      return relative.build();
    }

    // determine common sub path
    common = URI.commonPath(relativePath, basePath);

    // If the paths have nothing in common, return a relative URL with the absolute path.
    if (!common) {
      return relative.build();
    }

    var parents = baseParts.path
      .substring(common.length)
      .replace(/[^\/]*$/, '')
      .replace(/.*?\//g, '../');

    relativeParts.path = (parents + relativeParts.path.substring(common.length)) || './';

    return relative.build();
  };

  // comparing URIs
  p.equals = function(uri) {
    var one = this.clone();
    var two = new URI(uri);
    var one_map = {};
    var two_map = {};
    var checked = {};
    var one_query, two_query, key;

    one.normalize();
    two.normalize();

    // exact match
    if (one.toString() === two.toString()) {
      return true;
    }

    // extract query string
    one_query = one.query();
    two_query = two.query();
    one.query('');
    two.query('');

    // definitely not equal if not even non-query parts match
    if (one.toString() !== two.toString()) {
      return false;
    }

    // query parameters have the same length, even if they're permuted
    if (one_query.length !== two_query.length) {
      return false;
    }

    one_map = URI.parseQuery(one_query, this._parts.escapeQuerySpace);
    two_map = URI.parseQuery(two_query, this._parts.escapeQuerySpace);

    for (key in one_map) {
      if (hasOwn.call(one_map, key)) {
        if (!isArray(one_map[key])) {
          if (one_map[key] !== two_map[key]) {
            return false;
          }
        } else if (!arraysEqual(one_map[key], two_map[key])) {
          return false;
        }

        checked[key] = true;
      }
    }

    for (key in two_map) {
      if (hasOwn.call(two_map, key)) {
        if (!checked[key]) {
          // two contains a parameter not present in one
          return false;
        }
      }
    }

    return true;
  };

  // state
  p.preventInvalidHostname = function(v) {
    this._parts.preventInvalidHostname = !!v;
    return this;
  };

  p.duplicateQueryParameters = function(v) {
    this._parts.duplicateQueryParameters = !!v;
    return this;
  };

  p.escapeQuerySpace = function(v) {
    this._parts.escapeQuerySpace = !!v;
    return this;
  };

  return URI;
}));


/***/ }),

/***/ "./node_modules/urijs/src/punycode.js":
/*!********************************************!*\
  !*** ./node_modules/urijs/src/punycode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.0 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.2',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=12.9ed865ea.chunk.js.map