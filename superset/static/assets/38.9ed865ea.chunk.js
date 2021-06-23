(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/@superset-ui/plugin-chart-pivot-table/esm/PivotTableChart.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@superset-ui/plugin-chart-pivot-table/esm/PivotTableChart.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PivotTableChart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/style/index.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/number-format/NumberFormatterRegistrySingleton.js");
/* harmony import */ var _superset_ui_react_pivottable_PivotTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/react-pivottable/PivotTable */ "./node_modules/@superset-ui/react-pivottable/PivotTable.js");
/* harmony import */ var _superset_ui_react_pivottable_PivotTable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_superset_ui_react_pivottable_PivotTable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _superset_ui_react_pivottable_Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/react-pivottable/Utilities */ "./node_modules/@superset-ui/react-pivottable/Utilities.js");
/* harmony import */ var _superset_ui_react_pivottable_Utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_superset_ui_react_pivottable_Utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _superset_ui_react_pivottable_pivottable_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/react-pivottable/pivottable.css */ "./node_modules/@superset-ui/react-pivottable/pivottable.css");
/* harmony import */ var _superset_ui_react_pivottable_pivottable_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_superset_ui_react_pivottable_pivottable_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
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

 // @ts-ignore

 // @ts-ignore




const Styles = _superset_ui_core__WEBPACK_IMPORTED_MODULE_1__["styled"].div`
  padding: ${({
  theme
}) => theme.gridUnit * 4}px;
  height: ${({
  height
}) => height}px;
  width: ${({
  width
}) => width}px;
  overflow-y: scroll;
  }
`;
const METRIC_KEY = 'metric';
function PivotTableChart(props) {
  const {
    data,
    height,
    width,
    groupbyRows,
    groupbyColumns,
    metrics,
    tableRenderer,
    colOrder,
    rowOrder,
    aggregateFunction,
    transposePivot,
    rowSubtotalPosition,
    colSubtotalPosition,
    colTotals,
    rowTotals,
    valueFormat,
    emitFilter,
    setDataMask,
    selectedFilters,
    verboseMap
  } = props;
  const adaptiveFormatter = Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__["getNumberFormatter"])(valueFormat);

  const aggregators = (tpl => ({
    Count: tpl.count(adaptiveFormatter),
    'Count Unique Values': tpl.countUnique(adaptiveFormatter),
    'List Unique Values': tpl.listUnique(', '),
    Sum: tpl.sum(adaptiveFormatter),
    Average: tpl.average(adaptiveFormatter),
    Median: tpl.median(adaptiveFormatter),
    'Sample Variance': tpl.var(1, adaptiveFormatter),
    'Sample Standard Deviation': tpl.stdev(1, adaptiveFormatter),
    Minimum: tpl.min(adaptiveFormatter),
    Maximum: tpl.max(adaptiveFormatter),
    First: tpl.first(adaptiveFormatter),
    Last: tpl.last(adaptiveFormatter),
    'Sum as Fraction of Total': tpl.fractionOf(tpl.sum(), 'total', adaptiveFormatter),
    'Sum as Fraction of Rows': tpl.fractionOf(tpl.sum(), 'row', adaptiveFormatter),
    'Sum as Fraction of Columns': tpl.fractionOf(tpl.sum(), 'col', adaptiveFormatter),
    'Count as Fraction of Total': tpl.fractionOf(tpl.count(), 'total', adaptiveFormatter),
    'Count as Fraction of Rows': tpl.fractionOf(tpl.count(), 'row', adaptiveFormatter),
    'Count as Fraction of Columns': tpl.fractionOf(tpl.count(), 'col', adaptiveFormatter)
  }))(_superset_ui_react_pivottable_Utilities__WEBPACK_IMPORTED_MODULE_4__["aggregatorTemplates"]);

  const metricNames = metrics.map(metric => typeof metric === 'string' ? metric : metric.label);
  const unpivotedData = data.reduce((acc, record) => [...acc, ...metricNames.map(name => ({ ...record,
    [METRIC_KEY]: name,
    value: record[name]
  }))], []);
  const [rows, cols] = transposePivot ? [groupbyColumns, [METRIC_KEY, ...groupbyRows]] : [groupbyRows, [METRIC_KEY, ...groupbyColumns]];
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(filters => {
    const groupBy = Object.keys(filters);
    setDataMask({
      extraFormData: {
        filters: groupBy.length === 0 ? undefined : groupBy.map(col => {
          const val = filters == null ? void 0 : filters[col];
          if (val === null || val === undefined) return {
            col,
            op: 'IS NULL'
          };
          return {
            col,
            op: 'IN',
            val: val
          };
        })
      },
      filterState: {
        value: filters && Object.keys(filters).length ? Object.values(filters) : null,
        selectedFilters: filters && Object.keys(filters).length ? filters : null
      }
    });
  }, [setDataMask]);
  const isActiveFilterValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((key, val) => {
    var _selectedFilters$key;

    return !!selectedFilters && ((_selectedFilters$key = selectedFilters[key]) == null ? void 0 : _selectedFilters$key.includes(val));
  }, [selectedFilters]);
  const toggleFilter = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((e, value, filters, pivotData, isSubtotal, isGrandTotal) => {
    if (isSubtotal || isGrandTotal || !emitFilter) {
      return;
    }

    const filtersCopy = { ...filters
    };
    delete filtersCopy[METRIC_KEY];
    const filtersEntries = Object.entries(filtersCopy);

    if (filtersEntries.length === 0) {
      return;
    }

    const [key, val] = filtersEntries[filtersEntries.length - 1];
    const updatedFilters = { ...(selectedFilters || {})
    };

    if (selectedFilters && isActiveFilterValue(key, val)) {
      updatedFilters[key] = selectedFilters[key].filter(x => x !== val);
    } else {
      updatedFilters[key] = [...((selectedFilters == null ? void 0 : selectedFilters[key]) || []), val];
    }

    if (Array.isArray(updatedFilters[key]) && updatedFilters[key].length === 0) {
      delete updatedFilters[key];
    }

    handleChange(updatedFilters);
  }, [emitFilter, selectedFilters, handleChange]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(Styles, {
    height: height,
    width: width
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_superset_ui_react_pivottable_PivotTable__WEBPACK_IMPORTED_MODULE_3___default.a, {
    data: unpivotedData,
    rows: rows,
    cols: cols,
    aggregators: aggregators,
    aggregatorName: aggregateFunction,
    vals: ['value'],
    rendererName: tableRenderer,
    colOrder: colOrder,
    rowOrder: rowOrder,
    sorters: {
      metric: Object(_superset_ui_react_pivottable_Utilities__WEBPACK_IMPORTED_MODULE_4__["sortAs"])(metricNames)
    },
    tableOptions: {
      clickRowHeaderCallback: toggleFilter,
      clickColumnHeaderCallback: toggleFilter,
      colTotals,
      rowTotals,
      highlightHeaderCellsOnHover: emitFilter,
      highlightedHeaderCells: selectedFilters,
      omittedHighlightHeaderGroups: [METRIC_KEY]
    },
    subtotalOptions: {
      colSubtotalDisplay: {
        displayOnTop: colSubtotalPosition
      },
      rowSubtotalDisplay: {
        displayOnTop: rowSubtotalPosition
      }
    },
    namesMapping: verboseMap
  }));
}

/***/ }),

/***/ "./node_modules/@superset-ui/react-pivottable/PivotTable.js":
/*!******************************************************************!*\
  !*** ./node_modules/@superset-ui/react-pivottable/PivotTable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Utilities = __webpack_require__(/*! ./Utilities */ "./node_modules/@superset-ui/react-pivottable/Utilities.js");

var _TableRenderers = __webpack_require__(/*! ./TableRenderers */ "./node_modules/@superset-ui/react-pivottable/TableRenderers.js");

var _TableRenderers2 = _interopRequireDefault(_TableRenderers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prop-types */
// eslint can't see inherited propTypes!

var PivotTable = function (_React$PureComponent) {
  _inherits(PivotTable, _React$PureComponent);

  function PivotTable() {
    _classCallCheck(this, PivotTable);

    return _possibleConstructorReturn(this, (PivotTable.__proto__ || Object.getPrototypeOf(PivotTable)).apply(this, arguments));
  }

  _createClass(PivotTable, [{
    key: 'render',
    value: function render() {
      var Renderer = this.props.renderers[this.props.rendererName in this.props.renderers ? this.props.rendererName : Object.keys(this.props.renderers)[0]];
      return _react2.default.createElement(Renderer, this.props);
    }
  }]);

  return PivotTable;
}(_react2.default.PureComponent);

PivotTable.propTypes = Object.assign({}, _Utilities.PivotData.propTypes, {
  rendererName: _propTypes2.default.string,
  renderers: _propTypes2.default.objectOf(_propTypes2.default.func)
});

PivotTable.defaultProps = Object.assign({}, _Utilities.PivotData.defaultProps, {
  rendererName: 'Table',
  renderers: _TableRenderers2.default
});

exports.default = PivotTable;
module.exports = exports.default;
//# sourceMappingURL=PivotTable.js.map

/***/ }),

/***/ "./node_modules/@superset-ui/react-pivottable/TableRenderers.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@superset-ui/react-pivottable/TableRenderers.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Utilities = __webpack_require__(/*! ./Utilities */ "./node_modules/@superset-ui/react-pivottable/Utilities.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prop-types */
// eslint can't see inherited propTypes!

function redColorScaleGenerator(values) {
  var min = Math.min.apply(Math, values);
  var max = Math.max.apply(Math, values);
  return function (x) {
    // eslint-disable-next-line no-magic-numbers
    var nonRed = 255 - Math.round(255 * (x - min) / (max - min));
    return { backgroundColor: 'rgb(255,' + nonRed + ',' + nonRed + ')' };
  };
}

function defaultBarchartScaleGenerator(values) {
  var min = Math.min.apply(Math, values);
  var max = Math.max.apply(Math, values);
  var range = min < 0 ? max - min : Math.max(max, 0);
  // eslint-disable-next-line no-magic-numbers
  var maxScale = 100 / 1.4;
  var scaler = function scaler(val) {
    return Math.min(maxScale, maxScale * (val / range));
  };

  return function (val, text) {
    var bgColor = 'gray';
    var bBase = 0;
    if (min < 0) {
      bBase = scaler(-min);
    }
    if (val < 0) {
      bBase += scaler(val);
      bgColor = 'darkred';
    }

    return _react2.default.createElement(
      'div',
      { style: { position: 'relative', height: '100%' } },
      _react2.default.createElement('div', {
        style: {
          position: 'absolute',
          bottom: bBase + '%',
          left: 0,
          right: 0,
          height: scaler(Math.abs(val)) + '%',
          backgroundColor: bgColor
        }
      }),
      _react2.default.createElement(
        'div',
        { style: { position: 'relative', padding: '0 5px' } },
        text
      )
    );
  };
}

function displayHeaderCell(needToggle, arrowIcon, onArrowClick, value, namesMapping) {
  var name = namesMapping[value] || value;
  return needToggle ? _react2.default.createElement(
    'span',
    { className: 'toggle-wrapper' },
    _react2.default.createElement(
      'span',
      { className: 'toggle', onClick: onArrowClick },
      arrowIcon
    ),
    _react2.default.createElement(
      'span',
      { className: 'toggle-val' },
      name
    )
  ) : name;
}

function makeRenderer() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var TableRenderer = function (_React$Component) {
    _inherits(TableRenderer, _React$Component);

    function TableRenderer(props) {
      _classCallCheck(this, TableRenderer);

      // We need state to record which entries are collapsed and which aren't.
      // This is an object with flat-keys indicating if the corresponding rows
      // should be collapsed.
      var _this = _possibleConstructorReturn(this, (TableRenderer.__proto__ || Object.getPrototypeOf(TableRenderer)).call(this, props));

      _this.state = { collapsedRows: {}, collapsedCols: {} };

      _this.clickHeaderHandler = _this.clickHeaderHandler.bind(_this);
      _this.clickHandler = _this.clickHandler.bind(_this);
      return _this;
    }

    _createClass(TableRenderer, [{
      key: 'getBasePivotSettings',
      value: function getBasePivotSettings() {
        // One-time extraction of pivot settings that we'll use throughout the render.

        var props = this.props;
        var colAttrs = props.cols;
        var rowAttrs = props.rows;

        var tableOptions = Object.assign({
          rowTotals: true,
          colTotals: true
        }, props.tableOptions);
        var rowTotals = tableOptions.rowTotals || colAttrs.length === 0;
        var colTotals = tableOptions.colTotals || rowAttrs.length === 0;

        var namesMapping = props.namesMapping || {};
        var subtotalOptions = Object.assign({
          arrowCollapsed: '\u25B2',
          arrowExpanded: '\u25BC'
        }, props.subtotalOptions);

        var colSubtotalDisplay = Object.assign({
          displayOnTop: false,
          enabled: rowTotals,
          hideOnExpand: false
        }, subtotalOptions.colSubtotalDisplay);

        var rowSubtotalDisplay = Object.assign({
          displayOnTop: false,
          enabled: colTotals,
          hideOnExpand: false
        }, subtotalOptions.rowSubtotalDisplay);

        var pivotData = new _Utilities.PivotData(props, !opts.subtotals ? {} : {
          rowEnabled: rowSubtotalDisplay.enabled,
          colEnabled: colSubtotalDisplay.enabled,
          rowPartialOnTop: rowSubtotalDisplay.displayOnTop,
          colPartialOnTop: colSubtotalDisplay.displayOnTop
        });
        var rowKeys = pivotData.getRowKeys();
        var colKeys = pivotData.getColKeys();

        // Also pre-calculate all the callbacks for cells, etc... This is nice to have to
        // avoid re-calculations of the call-backs on cell expansions, etc...
        var cellCallbacks = {};
        var rowTotalCallbacks = {};
        var colTotalCallbacks = {};
        var grandTotalCallback = null;
        if (tableOptions.clickCallback) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = rowKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var rowKey = _step.value;

              var flatRowKey = (0, _Utilities.flatKey)(rowKey);
              if (!(flatRowKey in cellCallbacks)) {
                cellCallbacks[flatRowKey] = {};
              }
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = colKeys[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var _colKey = _step4.value;

                  cellCallbacks[flatRowKey][(0, _Utilities.flatKey)(_colKey)] = this.clickHandler(pivotData, rowKey, _colKey);
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }
            }

            // Add in totals as well.
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          if (rowTotals) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = rowKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _rowKey = _step2.value;

                rowTotalCallbacks[(0, _Utilities.flatKey)(_rowKey)] = this.clickHandler(pivotData, _rowKey, []);
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
          if (colTotals) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = colKeys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var colKey = _step3.value;

                colTotalCallbacks[(0, _Utilities.flatKey)(colKey)] = this.clickHandler(pivotData, [], colKey);
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }
          if (rowTotals && colTotals) {
            grandTotalCallback = this.clickHandler(pivotData, [], []);
          }
        }

        return Object.assign({
          pivotData: pivotData,
          colAttrs: colAttrs,
          rowAttrs: rowAttrs,
          colKeys: colKeys,
          rowKeys: rowKeys,
          rowTotals: rowTotals,
          colTotals: colTotals,
          arrowCollapsed: subtotalOptions.arrowCollapsed,
          arrowExpanded: subtotalOptions.arrowExpanded,
          colSubtotalDisplay: colSubtotalDisplay,
          rowSubtotalDisplay: rowSubtotalDisplay,
          cellCallbacks: cellCallbacks,
          rowTotalCallbacks: rowTotalCallbacks,
          colTotalCallbacks: colTotalCallbacks,
          grandTotalCallback: grandTotalCallback,
          namesMapping: namesMapping
        }, TableRenderer.heatmapMappers(pivotData, props.tableColorScaleGenerator, colTotals, rowTotals), TableRenderer.barchartMapper(pivotData, props.barScaleGenerator, colTotals, rowTotals));
      }
    }, {
      key: 'clickHandler',
      value: function clickHandler(pivotData, rowValues, colValues) {
        var _this2 = this;

        var colAttrs = this.props.cols;
        var rowAttrs = this.props.rows;
        var value = pivotData.getAggregator(rowValues, colValues).value();
        var filters = {};
        var colLimit = Math.min(colAttrs.length, colValues.length);
        for (var i = 0; i < colLimit; i++) {
          var attr = colAttrs[i];
          if (colValues[i] !== null) {
            filters[attr] = colValues[i];
          }
        }
        var rowLimit = Math.min(rowAttrs.length, rowValues.length);
        for (var _i = 0; _i < rowLimit; _i++) {
          var _attr = rowAttrs[_i];
          if (rowValues[_i] !== null) {
            filters[_attr] = rowValues[_i];
          }
        }
        return function (e) {
          return _this2.props.tableOptions.clickCallback(e, value, filters, pivotData);
        };
      }
    }, {
      key: 'clickHeaderHandler',
      value: function clickHeaderHandler(pivotData, values, attrs, attrIdx, callback) {
        var isSubtotal = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
        var isGrandTotal = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

        var filters = {};
        for (var i = 0; i <= attrIdx; i++) {
          var attr = attrs[i];
          filters[attr] = values[i];
        }
        return function (e) {
          return callback(e, values[attrIdx], filters, pivotData, isSubtotal, isGrandTotal);
        };
      }
    }, {
      key: 'collapseAttr',
      value: function collapseAttr(rowOrCol, attrIdx, allKeys) {
        var _this3 = this;

        return function (e) {
          // Collapse an entire attribute.
          e.stopPropagation();
          var keyLen = attrIdx + 1;
          var collapsed = allKeys.filter(function (k) {
            return k.length === keyLen;
          }).map(_Utilities.flatKey);

          var updates = {};
          collapsed.forEach(function (k) {
            updates[k] = true;
          });

          if (rowOrCol) {
            _this3.setState(function (state) {
              return {
                collapsedRows: Object.assign({}, state.collapsedRows, updates)
              };
            });
          } else {
            _this3.setState(function (state) {
              return {
                collapsedCols: Object.assign({}, state.collapsedCols, updates)
              };
            });
          }
        };
      }
    }, {
      key: 'expandAttr',
      value: function expandAttr(rowOrCol, attrIdx, allKeys) {
        var _this4 = this;

        return function (e) {
          // Expand an entire attribute. This implicitly implies expanding all of the
          // parents as well. It's a bit inefficient but ah well...
          e.stopPropagation();
          var updates = {};
          allKeys.forEach(function (k) {
            for (var i = 0; i <= attrIdx; i++) {
              updates[(0, _Utilities.flatKey)(k.slice(0, i + 1))] = false;
            }
          });

          if (rowOrCol) {
            _this4.setState(function (state) {
              return {
                collapsedRows: Object.assign({}, state.collapsedRows, updates)
              };
            });
          } else {
            _this4.setState(function (state) {
              return {
                collapsedCols: Object.assign({}, state.collapsedCols, updates)
              };
            });
          }
        };
      }
    }, {
      key: 'toggleRowKey',
      value: function toggleRowKey(flatRowKey) {
        var _this5 = this;

        return function (e) {
          e.stopPropagation();
          _this5.setState(function (state) {
            return {
              collapsedRows: Object.assign({}, state.collapsedRows, _defineProperty({}, flatRowKey, !state.collapsedRows[flatRowKey]))
            };
          });
        };
      }
    }, {
      key: 'toggleColKey',
      value: function toggleColKey(flatColKey) {
        var _this6 = this;

        return function (e) {
          e.stopPropagation();
          _this6.setState(function (state) {
            return {
              collapsedCols: Object.assign({}, state.collapsedCols, _defineProperty({}, flatColKey, !state.collapsedCols[flatColKey]))
            };
          });
        };
      }
    }, {
      key: 'calcAttrSpans',
      value: function calcAttrSpans(attrArr, numAttrs) {
        // Given an array of attribute values (i.e. each element is another array with
        // the value at every level), compute the spans for every attribute value at
        // every level. The return value is a nested array of the same shape. It has
        // -1's for repeated values and the span number otherwise.

        var spans = [];
        // Index of the last new value
        var li = Array(numAttrs).map(function () {
          return 0;
        });
        var lv = Array(numAttrs).map(function () {
          return null;
        });
        for (var i = 0; i < attrArr.length; i++) {
          // Keep increasing span values as long as the last keys are the same. For
          // the rest, record spans of 1. Update the indices too.
          var cv = attrArr[i];
          var ent = [];
          var depth = 0;
          var limit = Math.min(lv.length, cv.length);
          while (depth < limit && lv[depth] === cv[depth]) {
            ent.push(-1);
            spans[li[depth]][depth]++;
            depth++;
          }
          while (depth < cv.length) {
            li[depth] = i;
            ent.push(1);
            depth++;
          }
          spans.push(ent);
          lv = cv;
        }
        return spans;
      }
    }, {
      key: 'renderColHeaderRow',
      value: function renderColHeaderRow(attrName, attrIdx, pivotSettings) {
        // Render a single row in the column header at the top of the pivot table.

        var rowAttrs = pivotSettings.rowAttrs,
            colAttrs = pivotSettings.colAttrs,
            colKeys = pivotSettings.colKeys,
            visibleColKeys = pivotSettings.visibleColKeys,
            colAttrSpans = pivotSettings.colAttrSpans,
            rowTotals = pivotSettings.rowTotals,
            arrowExpanded = pivotSettings.arrowExpanded,
            arrowCollapsed = pivotSettings.arrowCollapsed,
            colSubtotalDisplay = pivotSettings.colSubtotalDisplay,
            maxColVisible = pivotSettings.maxColVisible,
            pivotData = pivotSettings.pivotData,
            namesMapping = pivotSettings.namesMapping;
        var _props$tableOptions = this.props.tableOptions,
            highlightHeaderCellsOnHover = _props$tableOptions.highlightHeaderCellsOnHover,
            _props$tableOptions$o = _props$tableOptions.omittedHighlightHeaderGroups,
            omittedHighlightHeaderGroups = _props$tableOptions$o === undefined ? [] : _props$tableOptions$o,
            highlightedHeaderCells = _props$tableOptions.highlightedHeaderCells;


        var spaceCell = attrIdx === 0 && rowAttrs.length !== 0 ? _react2.default.createElement('th', {
          key: 'padding',
          colSpan: rowAttrs.length,
          rowSpan: colAttrs.length
        }) : null;

        var needToggle = opts.subtotals && colSubtotalDisplay.enabled && attrIdx !== colAttrs.length - 1;
        var arrowClickHandle = null;
        var subArrow = null;
        if (needToggle) {
          arrowClickHandle = attrIdx + 1 < maxColVisible ? this.collapseAttr(false, attrIdx, colKeys) : this.expandAttr(false, attrIdx, colKeys);
          subArrow = (attrIdx + 1 < maxColVisible ? arrowExpanded : arrowCollapsed) + ' ';
        }
        var attrNameCell = _react2.default.createElement(
          'th',
          { key: 'label', className: 'pvtAxisLabel' },
          displayHeaderCell(needToggle, subArrow, arrowClickHandle, attrName, namesMapping)
        );

        var attrValueCells = [];
        var rowIncrSpan = rowAttrs.length !== 0 ? 1 : 0;
        // Iterate through columns. Jump over duplicate values.
        var i = 0;
        while (i < visibleColKeys.length) {
          var colKey = visibleColKeys[i];
          var colSpan = attrIdx < colKey.length ? colAttrSpans[i][attrIdx] : 1;
          var colLabelClass = 'pvtColLabel';
          if (colSpan > 1) {
            colLabelClass += ' label-centered';
          }
          if (attrIdx < colKey.length) {
            if (highlightHeaderCellsOnHover && !omittedHighlightHeaderGroups.includes(colAttrs[attrIdx])) {
              colLabelClass += ' hoverable';
            }
            if (highlightedHeaderCells && Array.isArray(highlightedHeaderCells[colAttrs[attrIdx]]) && highlightedHeaderCells[colAttrs[attrIdx]].includes(colKey[attrIdx])) {
              colLabelClass += ' active';
            }

            var rowSpan = 1 + (attrIdx === colAttrs.length - 1 ? rowIncrSpan : 0);
            var flatColKey = (0, _Utilities.flatKey)(colKey.slice(0, attrIdx + 1));
            var onArrowClick = needToggle ? this.toggleColKey(flatColKey) : null;
            attrValueCells.push(_react2.default.createElement(
              'th',
              {
                className: colLabelClass,
                key: 'colKey-' + flatColKey,
                colSpan: colSpan,
                rowSpan: rowSpan,
                onClick: this.clickHeaderHandler(pivotData, colKey, this.props.cols, attrIdx, this.props.tableOptions.clickColumnHeaderCallback)
              },
              displayHeaderCell(needToggle, (this.state.collapsedCols[flatColKey] ? arrowCollapsed : arrowExpanded) + ' ', onArrowClick, colKey[attrIdx], namesMapping)
            ));
          } else if (attrIdx === colKey.length) {
            var _rowSpan = colAttrs.length - colKey.length + rowIncrSpan;
            attrValueCells.push(_react2.default.createElement(
              'th',
              {
                className: colLabelClass + ' pvtSubtotalLabel',
                key: 'colKeyBuffer-' + (0, _Utilities.flatKey)(colKey),
                colSpan: colSpan,
                rowSpan: _rowSpan,
                onClick: this.clickHeaderHandler(pivotData, colKey, this.props.cols, attrIdx, this.props.tableOptions.clickColumnHeaderCallback, true)
              },
              'Subtotal'
            ));
          }
          // The next colSpan columns will have the same value anyway...
          i = i + colSpan;
        }

        var totalCell = attrIdx === 0 && rowTotals ? _react2.default.createElement(
          'th',
          {
            key: 'total',
            className: 'pvtTotalLabel',
            rowSpan: colAttrs.length + Math.min(rowAttrs.length, 1),
            onClick: this.clickHeaderHandler(pivotData, [], this.props.cols, attrIdx, this.props.tableOptions.clickColumnHeaderCallback, false, true)
          },
          'Totals'
        ) : null;

        var cells = [spaceCell, attrNameCell].concat(attrValueCells, [totalCell]);
        return _react2.default.createElement(
          'tr',
          { key: 'colAttr-' + attrIdx },
          cells
        );
      }
    }, {
      key: 'renderRowHeaderRow',
      value: function renderRowHeaderRow(pivotSettings) {
        var _this7 = this;

        // Render just the attribute names of the rows (the actual attribute values
        // will show up in the individual rows).

        var rowAttrs = pivotSettings.rowAttrs,
            colAttrs = pivotSettings.colAttrs,
            rowKeys = pivotSettings.rowKeys,
            arrowCollapsed = pivotSettings.arrowCollapsed,
            arrowExpanded = pivotSettings.arrowExpanded,
            rowSubtotalDisplay = pivotSettings.rowSubtotalDisplay,
            maxRowVisible = pivotSettings.maxRowVisible,
            pivotData = pivotSettings.pivotData,
            namesMapping = pivotSettings.namesMapping;

        return _react2.default.createElement(
          'tr',
          { key: 'rowHdr' },
          rowAttrs.map(function (r, i) {
            var needLabelToggle = opts.subtotals && rowSubtotalDisplay.enabled && i !== rowAttrs.length - 1;
            var arrowClickHandle = null;
            var subArrow = null;
            if (needLabelToggle) {
              arrowClickHandle = i + 1 < maxRowVisible ? _this7.collapseAttr(true, i, rowKeys) : _this7.expandAttr(true, i, rowKeys);
              subArrow = (i + 1 < maxRowVisible ? arrowExpanded : arrowCollapsed) + ' ';
            }
            return _react2.default.createElement(
              'th',
              { className: 'pvtAxisLabel', key: 'rowAttr-' + i },
              displayHeaderCell(needLabelToggle, subArrow, arrowClickHandle, r, namesMapping)
            );
          }),
          _react2.default.createElement(
            'th',
            {
              className: 'pvtTotalLabel',
              key: 'padding',
              onClick: this.clickHeaderHandler(pivotData, [], this.props.rows, 0, this.props.tableOptions.clickRowHeaderCallback, false, true)
            },
            colAttrs.length === 0 ? 'Totals' : null
          )
        );
      }
    }, {
      key: 'renderTableRow',
      value: function renderTableRow(rowKey, rowIdx, pivotSettings) {
        var _this8 = this;

        // Render a single row in the pivot table.

        var rowAttrs = pivotSettings.rowAttrs,
            colAttrs = pivotSettings.colAttrs,
            rowAttrSpans = pivotSettings.rowAttrSpans,
            visibleColKeys = pivotSettings.visibleColKeys,
            pivotData = pivotSettings.pivotData,
            rowTotals = pivotSettings.rowTotals,
            rowSubtotalDisplay = pivotSettings.rowSubtotalDisplay,
            valueCellColors = pivotSettings.valueCellColors,
            cellStyle = pivotSettings.cellStyle,
            valueCellBar = pivotSettings.valueCellBar,
            arrowExpanded = pivotSettings.arrowExpanded,
            arrowCollapsed = pivotSettings.arrowCollapsed,
            cellCallbacks = pivotSettings.cellCallbacks,
            rowTotalCallbacks = pivotSettings.rowTotalCallbacks,
            namesMapping = pivotSettings.namesMapping;
        var _props$tableOptions2 = this.props.tableOptions,
            highlightHeaderCellsOnHover = _props$tableOptions2.highlightHeaderCellsOnHover,
            _props$tableOptions2$ = _props$tableOptions2.omittedHighlightHeaderGroups,
            omittedHighlightHeaderGroups = _props$tableOptions2$ === undefined ? [] : _props$tableOptions2$,
            highlightedHeaderCells = _props$tableOptions2.highlightedHeaderCells;

        var flatRowKey = (0, _Utilities.flatKey)(rowKey);

        var colIncrSpan = colAttrs.length !== 0 ? 1 : 0;
        var attrValueCells = rowKey.map(function (r, i) {
          var valueCellClassName = 'pvtRowLabel';
          if (highlightHeaderCellsOnHover && !omittedHighlightHeaderGroups.includes(rowAttrs[i])) {
            valueCellClassName += ' hoverable';
          }
          if (highlightedHeaderCells && Array.isArray(highlightedHeaderCells[rowAttrs[i]]) && highlightedHeaderCells[rowAttrs[i]].includes(r)) {
            valueCellClassName += ' active';
          }
          var rowSpan = rowAttrSpans[rowIdx][i];
          if (rowSpan > 0) {
            var _flatRowKey = (0, _Utilities.flatKey)(rowKey.slice(0, i + 1));
            var colSpan = 1 + (i === rowAttrs.length - 1 ? colIncrSpan : 0);
            var needRowToggle = opts.subtotals && rowSubtotalDisplay.enabled && i !== rowAttrs.length - 1;
            var onArrowClick = needRowToggle ? _this8.toggleRowKey(_flatRowKey) : null;
            return _react2.default.createElement(
              'th',
              {
                key: 'rowKeyLabel-' + i,
                className: valueCellClassName,
                rowSpan: rowSpan,
                colSpan: colSpan,
                onClick: _this8.clickHeaderHandler(pivotData, rowKey, _this8.props.rows, i, _this8.props.tableOptions.clickRowHeaderCallback)
              },
              displayHeaderCell(needRowToggle, (_this8.state.collapsedRows[_flatRowKey] ? arrowCollapsed : arrowExpanded) + ' ', onArrowClick, r, namesMapping)
            );
          }
          return null;
        });

        var attrValuePaddingCell = rowKey.length < rowAttrs.length ? _react2.default.createElement(
          'th',
          {
            className: 'pvtRowLabel pvtSubtotalLabel',
            key: 'rowKeyBuffer',
            colSpan: rowAttrs.length - rowKey.length + colIncrSpan,
            rowSpan: 1,
            onClick: this.clickHeaderHandler(pivotData, rowKey, this.props.rows, rowKey.length, this.props.tableOptions.clickRowHeaderCallback, true)
          },
          'Subtotal'
        ) : null;

        var rowClickHandlers = cellCallbacks[flatRowKey] || {};
        var valueCells = visibleColKeys.map(function (colKey) {
          var flatColKey = (0, _Utilities.flatKey)(colKey);
          var agg = pivotData.getAggregator(rowKey, colKey);
          var aggValue = agg.value();
          var style = Object.assign({}, agg.isSubtotal ? { fontWeight: 'bold' } : valueCellColors(rowKey, colKey, aggValue), cellStyle);
          return _react2.default.createElement(
            'td',
            {
              className: 'pvtVal',
              key: 'pvtVal-' + flatColKey,
              onClick: rowClickHandlers[flatColKey],
              style: style
            },
            agg.isSubtotal ? agg.format(aggValue) : valueCellBar(rowKey, colKey, aggValue, agg.format(aggValue))
          );
        });

        var totalCell = null;
        if (rowTotals) {
          var agg = pivotData.getAggregator(rowKey, []);
          var aggValue = agg.value();
          totalCell = _react2.default.createElement(
            'td',
            {
              key: 'total',
              className: 'pvtTotal',
              onClick: rowTotalCallbacks[flatRowKey],
              style: cellStyle
            },
            agg.format(aggValue)
          );
        }

        var rowCells = [].concat(_toConsumableArray(attrValueCells), [attrValuePaddingCell], _toConsumableArray(valueCells), [totalCell]);

        return _react2.default.createElement(
          'tr',
          { key: 'keyRow-' + flatRowKey },
          rowCells
        );
      }
    }, {
      key: 'renderTotalsRow',
      value: function renderTotalsRow(pivotSettings) {
        // Render the final totals rows that has the totals for all the columns.

        var rowAttrs = pivotSettings.rowAttrs,
            colAttrs = pivotSettings.colAttrs,
            visibleColKeys = pivotSettings.visibleColKeys,
            rowTotals = pivotSettings.rowTotals,
            pivotData = pivotSettings.pivotData,
            cellStyle = pivotSettings.cellStyle,
            colTotalCallbacks = pivotSettings.colTotalCallbacks,
            grandTotalCallback = pivotSettings.grandTotalCallback;


        var totalLabelCell = _react2.default.createElement(
          'th',
          {
            key: 'label',
            className: 'pvtTotalLabel pvtRowTotalLabel',
            colSpan: rowAttrs.length + Math.min(colAttrs.length, 1),
            onClick: this.clickHeaderHandler(pivotData, [], this.props.rows, 0, this.props.tableOptions.clickRowHeaderCallback, false, true)
          },
          'Totals'
        );

        var totalValueStyle = Object.assign({}, cellStyle, {
          padding: '5px'
        });
        var totalValueCells = visibleColKeys.map(function (colKey) {
          var flatColKey = (0, _Utilities.flatKey)(colKey);
          var agg = pivotData.getAggregator([], colKey);
          var aggValue = agg.value();

          return _react2.default.createElement(
            'td',
            {
              className: 'pvtTotal pvtRowTotal',
              key: 'total-' + flatColKey,
              onClick: colTotalCallbacks[flatColKey],
              style: totalValueStyle
            },
            agg.format(aggValue)
          );
        });

        var grandTotalCell = null;
        if (rowTotals) {
          var agg = pivotData.getAggregator([], []);
          var aggValue = agg.value();
          grandTotalCell = _react2.default.createElement(
            'td',
            {
              key: 'total',
              className: 'pvtGrandTotal pvtRowTotal',
              onClick: grandTotalCallback
            },
            agg.format(aggValue)
          );
        }

        var totalCells = [totalLabelCell].concat(_toConsumableArray(totalValueCells), [grandTotalCell]);

        return _react2.default.createElement(
          'tr',
          { key: 'total' },
          totalCells
        );
      }
    }, {
      key: 'visibleKeys',
      value: function visibleKeys(keys, collapsed, numAttrs, subtotalDisplay) {
        return keys.filter(function (key) {
          return (
            // Is the key hidden by one of its parents?
            !key.some(function (k, j) {
              return collapsed[(0, _Utilities.flatKey)(key.slice(0, j))];
            }) && (
            // Leaf key.
            key.length === numAttrs ||
            // Children hidden. Must show total.
            (0, _Utilities.flatKey)(key) in collapsed ||
            // Don't hide totals.
            !subtotalDisplay.hideOnExpand)
          );
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this9 = this;

        if (this.cachedProps !== this.props) {
          this.cachedProps = this.props;
          this.cachedBasePivotSettings = this.getBasePivotSettings();
        }
        var _cachedBasePivotSetti = this.cachedBasePivotSettings,
            colAttrs = _cachedBasePivotSetti.colAttrs,
            rowAttrs = _cachedBasePivotSetti.rowAttrs,
            rowKeys = _cachedBasePivotSetti.rowKeys,
            colKeys = _cachedBasePivotSetti.colKeys,
            colTotals = _cachedBasePivotSetti.colTotals,
            rowSubtotalDisplay = _cachedBasePivotSetti.rowSubtotalDisplay,
            colSubtotalDisplay = _cachedBasePivotSetti.colSubtotalDisplay;

        // Need to account for exclusions to compute the effective row
        // and column keys.

        var visibleRowKeys = opts.subtotals ? this.visibleKeys(rowKeys, this.state.collapsedRows, rowAttrs.length, rowSubtotalDisplay) : rowKeys;
        var visibleColKeys = opts.subtotals ? this.visibleKeys(colKeys, this.state.collapsedCols, colAttrs.length, colSubtotalDisplay) : colKeys;

        var pivotSettings = Object.assign({
          visibleRowKeys: visibleRowKeys,
          maxRowVisible: Math.max.apply(Math, _toConsumableArray(visibleRowKeys.map(function (k) {
            return k.length;
          }))),
          visibleColKeys: visibleColKeys,
          maxColVisible: Math.max.apply(Math, _toConsumableArray(visibleColKeys.map(function (k) {
            return k.length;
          }))),
          rowAttrSpans: this.calcAttrSpans(visibleRowKeys, rowAttrs.length),
          colAttrSpans: this.calcAttrSpans(visibleColKeys, colAttrs.length)
        }, this.cachedBasePivotSettings);

        return _react2.default.createElement(
          'table',
          { className: 'pvtTable' },
          _react2.default.createElement(
            'thead',
            null,
            colAttrs.map(function (c, j) {
              return _this9.renderColHeaderRow(c, j, pivotSettings);
            }),
            rowAttrs.length !== 0 && this.renderRowHeaderRow(pivotSettings)
          ),
          _react2.default.createElement(
            'tbody',
            null,
            visibleRowKeys.map(function (r, i) {
              return _this9.renderTableRow(r, i, pivotSettings);
            }),
            colTotals && this.renderTotalsRow(pivotSettings)
          )
        );
      }
    }], [{
      key: 'heatmapMappers',
      value: function heatmapMappers(pivotData, colorScaleGenerator, colTotals, rowTotals) {
        var valueCellColors = function valueCellColors() {
          return {};
        };
        var rowTotalColors = function rowTotalColors() {
          return {};
        };
        var colTotalColors = function colTotalColors() {
          return {};
        };
        if (opts.heatmapMode) {
          if (colTotals) {
            var colTotalValues = Object.values(pivotData.colTotals).map(function (a) {
              return a.value();
            });
            colTotalColors = colorScaleGenerator(colTotalValues);
          }
          if (rowTotals) {
            var rowTotalValues = Object.values(pivotData.rowTotals).map(function (a) {
              return a.value();
            });
            rowTotalColors = colorScaleGenerator(rowTotalValues);
          }
          if (opts.heatmapMode === 'full') {
            var allValues = [];
            Object.values(pivotData.tree).map(function (cd) {
              return Object.values(cd).map(function (a) {
                return !a.isSubtotal && allValues.push(a.value());
              });
            });
            var colorScale = colorScaleGenerator(allValues);
            valueCellColors = function valueCellColors(r, c, v) {
              return colorScale(v);
            };
          } else if (opts.heatmapMode === 'row') {
            var rowColorScales = {};
            Object.entries(pivotData.tree).map(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  rk = _ref2[0],
                  cd = _ref2[1];

              var rowValues = Object.values(cd).map(function (a) {
                return !a.isSubtotal && a.value();
              });
              rowColorScales[rk] = colorScaleGenerator(rowValues);
            });
            valueCellColors = function valueCellColors(r, c, v) {
              return rowColorScales[(0, _Utilities.flatKey)(r)](v);
            };
          } else if (opts.heatmapMode === 'col') {
            var colColorScales = {};
            var colValues = {};
            Object.values(pivotData.tree).map(function (cd) {
              return Object.entries(cd).map(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                    ck = _ref4[0],
                    a = _ref4[1];

                if (!(ck in colValues)) {
                  colValues[ck] = [];
                }
                if (!a.isSubtotal) {
                  colValues[ck].push(a.value());
                }
              });
            });
            for (var k in colValues) {
              colColorScales[k] = colorScaleGenerator(colValues[k]);
            }
            valueCellColors = function valueCellColors(r, c, v) {
              return colColorScales[(0, _Utilities.flatKey)(c)](v);
            };
          }
        }
        return { valueCellColors: valueCellColors, rowTotalColors: rowTotalColors, colTotalColors: colTotalColors };
      }
    }, {
      key: 'barchartMapper',
      value: function barchartMapper(pivotData, barScaleGenerator, colTotals, rowTotals) {
        var cellStyle = {};
        var valueCellBar = function valueCellBar(r, c, v, t) {
          return t;
        };
        var rowTotalBar = function rowTotalBar(v, t) {
          return t;
        };
        var colTotalBar = function colTotalBar(v, t) {
          return t;
        };

        if (opts.barchartMode) {
          cellStyle = {
            textAlign: 'center',
            padding: 0,
            paddingTop: '5px',
            height: '60px'
          };
          if (colTotals) {
            var colTotalValues = Object.values(pivotData.colTotals).filter(function (a) {
              return !a.isSubtotal;
            }).map(function (a) {
              return a.value();
            });
            colTotalBar = barScaleGenerator(colTotalValues);
          }
          if (rowTotals) {
            var rowTotalValues = Object.values(pivotData.rowTotals).filter(function (a) {
              return !a.isSubtotal;
            }).map(function (a) {
              return a.value();
            });
            rowTotalBar = barScaleGenerator(rowTotalValues);
          }
          if (opts.barchartMode === 'full') {
            var allValues = [];
            Object.values(pivotData.tree).map(function (cd) {
              return Object.values(cd).map(function (a) {
                return !a.isSubtotal && allValues.push(a.value());
              });
            });
            var barScales = barScaleGenerator(allValues);
            valueCellBar = function valueCellBar(r, c, v, t) {
              return barScales(v, t);
            };
          } else if (opts.barchartMode === 'row') {
            var rowBarScales = {};
            Object.entries(pivotData.tree).map(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  rk = _ref6[0],
                  cd = _ref6[1];

              var rowValues = Object.values(cd).map(function (a) {
                return !a.isSubtotal && a.value();
              });
              rowBarScales[rk] = barScaleGenerator(rowValues);
            });
            valueCellBar = function valueCellBar(r, c, v, t) {
              return rowBarScales[(0, _Utilities.flatKey)(r)](v, t);
            };
          } else if (opts.barchartMode === 'col') {
            var colBarScales = {};
            var colValues = {};
            Object.values(pivotData.tree).map(function (cd) {
              return Object.entries(cd).map(function (_ref7) {
                var _ref8 = _slicedToArray(_ref7, 2),
                    ck = _ref8[0],
                    a = _ref8[1];

                if (!(ck in colValues)) {
                  colValues[ck] = [];
                }
                if (!a.isSubtotal) {
                  colValues[ck].push(a.value());
                }
              });
            });
            for (var k in colValues) {
              colBarScales[k] = barScaleGenerator(colValues[k]);
            }
            valueCellBar = function valueCellBar(r, c, v, t) {
              return colBarScales[(0, _Utilities.flatKey)(c)](v, t);
            };
          }
        }
        return { cellStyle: cellStyle, valueCellBar: valueCellBar, rowTotalBar: rowTotalBar, colTotalBar: colTotalBar };
      }
    }]);

    return TableRenderer;
  }(_react2.default.Component);

  TableRenderer.defaultProps = _Utilities.PivotData.defaultProps;
  TableRenderer.propTypes = _Utilities.PivotData.propTypes;
  TableRenderer.defaultProps.tableColorScaleGenerator = redColorScaleGenerator;
  TableRenderer.defaultProps.barScaleGenerator = defaultBarchartScaleGenerator;
  TableRenderer.defaultProps.tableOptions = {};
  TableRenderer.propTypes.tableColorScaleGenerator = _propTypes2.default.func;
  TableRenderer.propTypes.tableOptions = _propTypes2.default.object;
  return TableRenderer;
}

var TSVExportRenderer = function (_React$PureComponent) {
  _inherits(TSVExportRenderer, _React$PureComponent);

  function TSVExportRenderer() {
    _classCallCheck(this, TSVExportRenderer);

    return _possibleConstructorReturn(this, (TSVExportRenderer.__proto__ || Object.getPrototypeOf(TSVExportRenderer)).apply(this, arguments));
  }

  _createClass(TSVExportRenderer, [{
    key: 'render',
    value: function render() {
      var pivotData = new _Utilities.PivotData(this.props);
      var rowKeys = pivotData.getRowKeys();
      var colKeys = pivotData.getColKeys();
      if (rowKeys.length === 0) {
        rowKeys.push([]);
      }
      if (colKeys.length === 0) {
        colKeys.push([]);
      }

      var headerRow = pivotData.props.rows.map(function (r) {
        return r;
      });
      if (colKeys.length === 1 && colKeys[0].length === 0) {
        headerRow.push(this.props.aggregatorName);
      } else {
        colKeys.map(function (c) {
          return headerRow.push(c.join('-'));
        });
      }

      var result = rowKeys.map(function (r) {
        var row = r.map(function (x) {
          return x;
        });
        colKeys.map(function (c) {
          var v = pivotData.getAggregator(r, c).value();
          row.push(v ? v : '');
        });
        return row;
      });

      result.unshift(headerRow);

      return _react2.default.createElement('textarea', {
        value: result.map(function (r) {
          return r.join('\t');
        }).join('\n'),
        style: { width: window.innerWidth / 2, height: window.innerHeight / 2 },
        readOnly: true
      });
    }
  }]);

  return TSVExportRenderer;
}(_react2.default.PureComponent);

TSVExportRenderer.defaultProps = _Utilities.PivotData.defaultProps;
TSVExportRenderer.propTypes = _Utilities.PivotData.propTypes;

exports.default = {
  Table: makeRenderer(),
  'Table Heatmap': makeRenderer({ heatmapMode: 'full' }),
  'Table Col Heatmap': makeRenderer({ heatmapMode: 'col' }),
  'Table Row Heatmap': makeRenderer({ heatmapMode: 'row' }),
  'Table Barchart': makeRenderer({ barchartMode: 'full' }),
  'Table Col Barchart': makeRenderer({ barchartMode: 'col' }),
  'Table Row Barchart': makeRenderer({ barchartMode: 'row' }),
  'Table With Subtotal': makeRenderer({ subtotals: true }),
  'Table With Subtotal Heatmap': makeRenderer({
    heatmapMode: 'full',
    subtotals: true
  }),
  'Table With Subtotal Col Heatmap': makeRenderer({
    heatmapMode: 'col',
    subtotals: true
  }),
  'Table With Subtotal Row Heatmap': makeRenderer({
    heatmapMode: 'row',
    subtotals: true
  }),
  'Table With Subtotal Barchart': makeRenderer({
    barchartMode: 'full',
    subtotals: true
  }),
  'Table With Subtotal Col Barchart': makeRenderer({
    barchartMode: 'col',
    subtotals: true
  }),
  'Table With Subtotal Row Barchart': makeRenderer({
    barchartMode: 'row',
    subtotals: true
  }),
  'Exportable TSV': TSVExportRenderer
};
module.exports = exports.default;
//# sourceMappingURL=TableRenderers.js.map

/***/ }),

/***/ "./node_modules/@superset-ui/react-pivottable/Utilities.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@superset-ui/react-pivottable/Utilities.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PivotData = exports.flatKey = exports.sortAs = exports.getSort = exports.numberFormat = exports.naturalSort = exports.locales = exports.derivers = exports.aggregators = exports.aggregatorTemplates = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS104: Avoid inline assignments
 * DS201: Simplify complex destructure assignments
 * DS203: Remove `|| {}` from converted for-own loops
 * DS205: Consider reworking code to avoid use of IIFEs
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */

var addSeparators = function addSeparators(nStr, thousandsSep, decimalSep) {
  var x = String(nStr).split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? decimalSep + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + thousandsSep + '$2');
  }
  return x1 + x2;
};

var numberFormat = function numberFormat(opts_in) {
  var defaults = {
    digitsAfterDecimal: 2,
    scaler: 1,
    thousandsSep: ',',
    decimalSep: '.',
    prefix: '',
    suffix: ''
  };
  var opts = Object.assign({}, defaults, opts_in);
  return function (x) {
    if (isNaN(x) || !isFinite(x)) {
      return '';
    }
    var result = addSeparators((opts.scaler * x).toFixed(opts.digitsAfterDecimal), opts.thousandsSep, opts.decimalSep);
    return '' + opts.prefix + result + opts.suffix;
  };
};

var rx = /(\d+)|(\D+)/g;
var rd = /\d/;
var rz = /^0/;
var naturalSort = function naturalSort(as, bs) {
  // nulls first
  if (bs !== null && as === null) {
    return -1;
  }
  if (as !== null && bs === null) {
    return 1;
  }

  // then raw NaNs
  if (typeof as === 'number' && isNaN(as)) {
    return -1;
  }
  if (typeof bs === 'number' && isNaN(bs)) {
    return 1;
  }

  // numbers and numbery strings group together
  var nas = Number(as);
  var nbs = Number(bs);
  if (nas < nbs) {
    return -1;
  }
  if (nas > nbs) {
    return 1;
  }

  // within that, true numbers before numbery strings
  if (typeof as === 'number' && typeof bs !== 'number') {
    return -1;
  }
  if (typeof bs === 'number' && typeof as !== 'number') {
    return 1;
  }
  if (typeof as === 'number' && typeof bs === 'number') {
    return 0;
  }

  // 'Infinity' is a textual number, so less than 'A'
  if (isNaN(nbs) && !isNaN(nas)) {
    return -1;
  }
  if (isNaN(nas) && !isNaN(nbs)) {
    return 1;
  }

  // finally, "smart" string sorting per http://stackoverflow.com/a/4373421/112871
  var a = String(as);
  var b = String(bs);
  if (a === b) {
    return 0;
  }
  if (!rd.test(a) || !rd.test(b)) {
    return a > b ? 1 : -1;
  }

  // special treatment for strings containing digits
  a = a.match(rx);
  b = b.match(rx);
  while (a.length && b.length) {
    var a1 = a.shift();
    var b1 = b.shift();
    if (a1 !== b1) {
      if (rd.test(a1) && rd.test(b1)) {
        return a1.replace(rz, '.0') - b1.replace(rz, '.0');
      }
      return a1 > b1 ? 1 : -1;
    }
  }
  return a.length - b.length;
};

var sortAs = function sortAs(order) {
  var mapping = {};

  // sort lowercased keys similarly
  var l_mapping = {};
  for (var i in order) {
    var x = order[i];
    mapping[x] = i;
    if (typeof x === 'string') {
      l_mapping[x.toLowerCase()] = i;
    }
  }
  return function (a, b) {
    if (a in mapping && b in mapping) {
      return mapping[a] - mapping[b];
    } else if (a in mapping) {
      return -1;
    } else if (b in mapping) {
      return 1;
    } else if (a in l_mapping && b in l_mapping) {
      return l_mapping[a] - l_mapping[b];
    } else if (a in l_mapping) {
      return -1;
    } else if (b in l_mapping) {
      return 1;
    }
    return naturalSort(a, b);
  };
};

var getSort = function getSort(sorters, attr) {
  if (sorters) {
    if (typeof sorters === 'function') {
      var sort = sorters(attr);
      if (typeof sort === 'function') {
        return sort;
      }
    } else if (attr in sorters) {
      return sorters[attr];
    }
  }
  return naturalSort;
};

// aggregator templates default to US number formatting but this is overrideable
var usFmt = numberFormat();
var usFmtInt = numberFormat({ digitsAfterDecimal: 0 });
var usFmtPct = numberFormat({
  digitsAfterDecimal: 1,
  scaler: 100,
  suffix: '%'
});

var aggregatorTemplates = {
  count: function count() {
    var formatter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : usFmtInt;

    return function () {
      return function () {
        return {
          count: 0,
          push: function push() {
            this.count++;
          },
          value: function value() {
            return this.count;
          },

          format: formatter
        };
      };
    };
  },
  uniques: function uniques(fn) {
    var formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : usFmtInt;

    return function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          attr = _ref2[0];

      return function () {
        return {
          uniq: [],
          push: function push(record) {
            if (!Array.from(this.uniq).includes(record[attr])) {
              this.uniq.push(record[attr]);
            }
          },
          value: function value() {
            return fn(this.uniq);
          },

          format: formatter,
          numInputs: typeof attr !== 'undefined' ? 0 : 1
        };
      };
    };
  },
  sum: function sum() {
    var formatter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : usFmt;

    return function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 1),
          attr = _ref4[0];

      return function () {
        return {
          sum: 0,
          push: function push(record) {
            if (!isNaN(parseFloat(record[attr]))) {
              this.sum += parseFloat(record[attr]);
            }
          },
          value: function value() {
            return this.sum;
          },

          format: formatter,
          numInputs: typeof attr !== 'undefined' ? 0 : 1
        };
      };
    };
  },
  extremes: function extremes(mode) {
    var formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : usFmt;

    return function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 1),
          attr = _ref6[0];

      return function (data) {
        return {
          val: null,
          sorter: getSort(typeof data !== 'undefined' ? data.sorters : null, attr),
          push: function push(record) {
            var x = record[attr];
            if (['min', 'max'].includes(mode)) {
              x = parseFloat(x);
              if (!isNaN(x)) {
                this.val = Math[mode](x, this.val !== null ? this.val : x);
              }
            }
            if (mode === 'first' && this.sorter(x, this.val !== null ? this.val : x) <= 0) {
              this.val = x;
            }
            if (mode === 'last' && this.sorter(x, this.val !== null ? this.val : x) >= 0) {
              this.val = x;
            }
          },
          value: function value() {
            return this.val;
          },
          format: function format(x) {
            if (isNaN(x)) {
              return x;
            }
            return formatter(x);
          },

          numInputs: typeof attr !== 'undefined' ? 0 : 1
        };
      };
    };
  },
  quantile: function quantile(q) {
    var formatter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : usFmt;

    return function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 1),
          attr = _ref8[0];

      return function () {
        return {
          vals: [],
          push: function push(record) {
            var x = parseFloat(record[attr]);
            if (!isNaN(x)) {
              this.vals.push(x);
            }
          },
          value: function value() {
            if (this.vals.length === 0) {
              return null;
            }
            this.vals.sort(function (a, b) {
              return a - b;
            });
            var i = (this.vals.length - 1) * q;
            return (this.vals[Math.floor(i)] + this.vals[Math.ceil(i)]) / 2.0;
          },

          format: formatter,
          numInputs: typeof attr !== 'undefined' ? 0 : 1
        };
      };
    };
  },
  runningStat: function runningStat() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mean';
    var ddof = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var formatter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : usFmt;

    return function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 1),
          attr = _ref10[0];

      return function () {
        return {
          n: 0.0,
          m: 0.0,
          s: 0.0,
          push: function push(record) {
            var x = parseFloat(record[attr]);
            if (isNaN(x)) {
              return;
            }
            this.n += 1.0;
            if (this.n === 1.0) {
              this.m = x;
            }
            var m_new = this.m + (x - this.m) / this.n;
            this.s = this.s + (x - this.m) * (x - m_new);
            this.m = m_new;
          },
          value: function value() {
            if (mode === 'mean') {
              if (this.n === 0) {
                return 0 / 0;
              }
              return this.m;
            }
            if (this.n <= ddof) {
              return 0;
            }
            switch (mode) {
              case 'var':
                return this.s / (this.n - ddof);
              case 'stdev':
                return Math.sqrt(this.s / (this.n - ddof));
              default:
                throw new Error('unknown mode for runningStat');
            }
          },

          format: formatter,
          numInputs: typeof attr !== 'undefined' ? 0 : 1
        };
      };
    };
  },
  sumOverSum: function sumOverSum() {
    var formatter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : usFmt;

    return function (_ref11) {
      var _ref12 = _slicedToArray(_ref11, 2),
          num = _ref12[0],
          denom = _ref12[1];

      return function () {
        return {
          sumNum: 0,
          sumDenom: 0,
          push: function push(record) {
            if (!isNaN(parseFloat(record[num]))) {
              this.sumNum += parseFloat(record[num]);
            }
            if (!isNaN(parseFloat(record[denom]))) {
              this.sumDenom += parseFloat(record[denom]);
            }
          },
          value: function value() {
            return this.sumNum / this.sumDenom;
          },

          format: formatter,
          numInputs: typeof num !== 'undefined' && typeof denom !== 'undefined' ? 0 : 2
        };
      };
    };
  },
  fractionOf: function fractionOf(wrapped) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'total';
    var formatter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : usFmtPct;

    return function () {
      for (var _len = arguments.length, x = Array(_len), _key = 0; _key < _len; _key++) {
        x[_key] = arguments[_key];
      }

      return function (data, rowKey, colKey) {
        return {
          selector: { total: [[], []], row: [rowKey, []], col: [[], colKey] }[type],
          inner: wrapped.apply(undefined, _toConsumableArray(Array.from(x || [])))(data, rowKey, colKey),
          push: function push(record) {
            this.inner.push(record);
          },

          format: formatter,
          value: function value() {
            return this.inner.value() / data.getAggregator.apply(data, _toConsumableArray(Array.from(this.selector || []))).inner.value();
          },

          numInputs: wrapped.apply(undefined, _toConsumableArray(Array.from(x || [])))().numInputs
        };
      };
    };
  }
};

aggregatorTemplates.countUnique = function (f) {
  return aggregatorTemplates.uniques(function (x) {
    return x.length;
  }, f);
};
aggregatorTemplates.listUnique = function (s) {
  return aggregatorTemplates.uniques(function (x) {
    return x.join(s);
  }, function (x) {
    return x;
  });
};
aggregatorTemplates.max = function (f) {
  return aggregatorTemplates.extremes('max', f);
};
aggregatorTemplates.min = function (f) {
  return aggregatorTemplates.extremes('min', f);
};
aggregatorTemplates.first = function (f) {
  return aggregatorTemplates.extremes('first', f);
};
aggregatorTemplates.last = function (f) {
  return aggregatorTemplates.extremes('last', f);
};
aggregatorTemplates.median = function (f) {
  return aggregatorTemplates.quantile(0.5, f);
};
aggregatorTemplates.average = function (f) {
  return aggregatorTemplates.runningStat('mean', 1, f);
};
aggregatorTemplates.var = function (ddof, f) {
  return aggregatorTemplates.runningStat('var', ddof, f);
};
aggregatorTemplates.stdev = function (ddof, f) {
  return aggregatorTemplates.runningStat('stdev', ddof, f);
};

// default aggregators & renderers use US naming and number formatting
var aggregators = function (tpl) {
  return {
    Count: tpl.count(usFmtInt),
    'Count Unique Values': tpl.countUnique(usFmtInt),
    'List Unique Values': tpl.listUnique(', '),
    Sum: tpl.sum(usFmt),
    'Integer Sum': tpl.sum(usFmtInt),
    Average: tpl.average(usFmt),
    Median: tpl.median(usFmt),
    'Sample Variance': tpl.var(1, usFmt),
    'Sample Standard Deviation': tpl.stdev(1, usFmt),
    Minimum: tpl.min(usFmt),
    Maximum: tpl.max(usFmt),
    First: tpl.first(usFmt),
    Last: tpl.last(usFmt),
    'Sum over Sum': tpl.sumOverSum(usFmt),
    'Sum as Fraction of Total': tpl.fractionOf(tpl.sum(), 'total', usFmtPct),
    'Sum as Fraction of Rows': tpl.fractionOf(tpl.sum(), 'row', usFmtPct),
    'Sum as Fraction of Columns': tpl.fractionOf(tpl.sum(), 'col', usFmtPct),
    'Count as Fraction of Total': tpl.fractionOf(tpl.count(), 'total', usFmtPct),
    'Count as Fraction of Rows': tpl.fractionOf(tpl.count(), 'row', usFmtPct),
    'Count as Fraction of Columns': tpl.fractionOf(tpl.count(), 'col', usFmtPct)
  };
}(aggregatorTemplates);

var locales = {
  en: {
    aggregators: aggregators,
    localeStrings: {
      renderError: 'An error occurred rendering the PivotTable results.',
      computeError: 'An error occurred computing the PivotTable results.',
      uiRenderError: 'An error occurred rendering the PivotTable UI.',
      selectAll: 'Select All',
      selectNone: 'Select None',
      tooMany: '(too many to list)',
      filterResults: 'Filter values',
      apply: 'Apply',
      cancel: 'Cancel',
      totals: 'Totals',
      vs: 'vs',
      by: 'by'
    }
  }
};

// dateFormat deriver l10n requires month and day names to be passed in directly
var mthNamesEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var dayNamesEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var zeroPad = function zeroPad(number) {
  return ('0' + number).substr(-2, 2);
}; // eslint-disable-line no-magic-numbers

var derivers = {
  bin: function bin(col, binWidth) {
    return function (record) {
      return record[col] - record[col] % binWidth;
    };
  },
  dateFormat: function dateFormat(col, formatString) {
    var utcOutput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var mthNames = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : mthNamesEn;
    var dayNames = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : dayNamesEn;

    var utc = utcOutput ? 'UTC' : '';
    return function (record) {
      var date = new Date(Date.parse(record[col]));
      if (isNaN(date)) {
        return '';
      }
      return formatString.replace(/%(.)/g, function (m, p) {
        switch (p) {
          case 'y':
            return date['get' + utc + 'FullYear']();
          case 'm':
            return zeroPad(date['get' + utc + 'Month']() + 1);
          case 'n':
            return mthNames[date['get' + utc + 'Month']()];
          case 'd':
            return zeroPad(date['get' + utc + 'Date']());
          case 'w':
            return dayNames[date['get' + utc + 'Day']()];
          case 'x':
            return date['get' + utc + 'Day']();
          case 'H':
            return zeroPad(date['get' + utc + 'Hours']());
          case 'M':
            return zeroPad(date['get' + utc + 'Minutes']());
          case 'S':
            return zeroPad(date['get' + utc + 'Seconds']());
          default:
            return '%' + p;
        }
      });
    };
  }
};

// Given an array of attribute values, convert to a key that
// can be used in objects.
var flatKey = function flatKey(attrVals) {
  return attrVals.join(String.fromCharCode(0));
};

/*
Data Model class
*/

var PivotData = function () {
  function PivotData() {
    var _this = this;

    var inputProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var subtotals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, PivotData);

    this.props = Object.assign({}, PivotData.defaultProps, inputProps);
    _propTypes2.default.checkPropTypes(PivotData.propTypes, this.props, 'prop', 'PivotData');

    this.aggregator = this.props.aggregators[this.props.aggregatorName](this.props.vals);
    this.tree = {};
    this.rowKeys = [];
    this.colKeys = [];
    this.rowTotals = {};
    this.colTotals = {};
    this.allTotal = this.aggregator(this, [], []);
    this.subtotals = subtotals;
    this.sorted = false;

    // iterate through input, accumulating data for cells
    PivotData.forEachRecord(this.props.data, this.props.derivedAttributes, function (record) {
      if (_this.filter(record)) {
        _this.processRecord(record);
      }
    });
  }

  _createClass(PivotData, [{
    key: 'filter',
    value: function filter(record) {
      for (var k in this.props.valueFilter) {
        if (record[k] in this.props.valueFilter[k]) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'forEachMatchingRecord',
    value: function forEachMatchingRecord(criteria, callback) {
      var _this2 = this;

      return PivotData.forEachRecord(this.props.data, this.props.derivedAttributes, function (record) {
        if (!_this2.filter(record)) {
          return;
        }
        for (var k in criteria) {
          var v = criteria[k];
          if (v !== (k in record ? record[k] : 'null')) {
            return;
          }
        }
        callback(record);
      });
    }
  }, {
    key: 'arrSort',
    value: function arrSort(attrs, partialOnTop) {
      var _this3 = this;

      var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var sortersArr = attrs.map(function (a) {
        return getSort(_this3.props.sorters, a);
      });
      return function (a, b) {
        var limit = Math.min(a.length, b.length);
        for (var i = 0; i < limit; i++) {
          var sorter = sortersArr[i];
          var comparison = reverse ? sorter(b[i], a[i]) : sorter(a[i], b[i]);
          if (comparison !== 0) {
            return comparison;
          }
        }
        return partialOnTop ? a.length - b.length : b.length - a.length;
      };
    }
  }, {
    key: 'sortKeys',
    value: function sortKeys() {
      var _this4 = this;

      if (!this.sorted) {
        this.sorted = true;
        var v = function v(r, c) {
          return _this4.getAggregator(r, c).value();
        };
        switch (this.props.rowOrder) {
          case 'key_z_to_a':
            this.rowKeys.sort(this.arrSort(this.props.rows, this.subtotals.rowPartialOnTop, true));
            break;
          case 'value_a_to_z':
            this.rowKeys.sort(function (a, b) {
              return naturalSort(v(a, []), v(b, []));
            });
            break;
          case 'value_z_to_a':
            this.rowKeys.sort(function (a, b) {
              return -naturalSort(v(a, []), v(b, []));
            });
            break;
          default:
            this.rowKeys.sort(this.arrSort(this.props.rows, this.subtotals.rowPartialOnTop));
        }
        switch (this.props.colOrder) {
          case 'key_z_to_a':
            this.colKeys.sort(this.arrSort(this.props.cols, this.subtotals.colPartialOnTop, true));
            break;
          case 'value_a_to_z':
            this.colKeys.sort(function (a, b) {
              return naturalSort(v([], a), v([], b));
            });
            break;
          case 'value_z_to_a':
            this.colKeys.sort(function (a, b) {
              return -naturalSort(v([], a), v([], b));
            });
            break;
          default:
            this.colKeys.sort(this.arrSort(this.props.cols, this.subtotals.colPartialOnTop));
        }
      }
    }
  }, {
    key: 'getColKeys',
    value: function getColKeys() {
      this.sortKeys();
      return this.colKeys;
    }
  }, {
    key: 'getRowKeys',
    value: function getRowKeys() {
      this.sortKeys();
      return this.rowKeys;
    }
  }, {
    key: 'processRecord',
    value: function processRecord(record) {
      // this code is called in a tight loop
      var colKey = [];
      var rowKey = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.props.cols[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var x = _step.value;

          colKey.push(x in record ? record[x] : 'null');
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.props.rows[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _x18 = _step2.value;

          rowKey.push(_x18 in record ? record[_x18] : 'null');
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.allTotal.push(record);

      var rowStart = this.subtotals.rowEnabled ? 1 : Math.max(1, rowKey.length);
      var colStart = this.subtotals.colEnabled ? 1 : Math.max(1, colKey.length);

      var isRowSubtotal = void 0,
          isColSubtotal = void 0;
      for (var ri = rowStart; ri <= rowKey.length; ri++) {
        isRowSubtotal = ri < rowKey.length;
        var fRowKey = rowKey.slice(0, ri);
        var flatRowKey = flatKey(fRowKey);
        if (!this.rowTotals[flatRowKey]) {
          this.rowKeys.push(fRowKey);
          this.rowTotals[flatRowKey] = this.aggregator(this, fRowKey, []);
        }
        this.rowTotals[flatRowKey].push(record);
        this.rowTotals[flatRowKey].isSubtotal = isRowSubtotal;
      }

      for (var ci = colStart; ci <= colKey.length; ci++) {
        isColSubtotal = ci < colKey.length;
        var fColKey = colKey.slice(0, ci);
        var flatColKey = flatKey(fColKey);
        if (!this.colTotals[flatColKey]) {
          this.colKeys.push(fColKey);
          this.colTotals[flatColKey] = this.aggregator(this, [], fColKey);
        }
        this.colTotals[flatColKey].push(record);
        this.colTotals[flatColKey].isSubtotal = isColSubtotal;
      }

      // And now fill in for all the sub-cells.
      for (var _ri = rowStart; _ri <= rowKey.length; _ri++) {
        isRowSubtotal = _ri < rowKey.length;
        var _fRowKey = rowKey.slice(0, _ri);
        var _flatRowKey = flatKey(_fRowKey);
        if (!this.tree[_flatRowKey]) {
          this.tree[_flatRowKey] = {};
        }
        for (var _ci = colStart; _ci <= colKey.length; _ci++) {
          isColSubtotal = _ci < colKey.length;
          var _fColKey = colKey.slice(0, _ci);
          var _flatColKey = flatKey(_fColKey);
          if (!this.tree[_flatRowKey][_flatColKey]) {
            this.tree[_flatRowKey][_flatColKey] = this.aggregator(this, _fRowKey, _fColKey);
          }
          this.tree[_flatRowKey][_flatColKey].push(record);

          this.tree[_flatRowKey][_flatColKey].isRowSubtotal = isRowSubtotal;
          this.tree[_flatRowKey][_flatColKey].isColSubtotal = isColSubtotal;
          this.tree[_flatRowKey][_flatColKey].isSubtotal = isRowSubtotal || isColSubtotal;
        }
      }
    }
  }, {
    key: 'getAggregator',
    value: function getAggregator(rowKey, colKey) {
      var agg = void 0;
      var flatRowKey = flatKey(rowKey);
      var flatColKey = flatKey(colKey);
      if (rowKey.length === 0 && colKey.length === 0) {
        agg = this.allTotal;
      } else if (rowKey.length === 0) {
        agg = this.colTotals[flatColKey];
      } else if (colKey.length === 0) {
        agg = this.rowTotals[flatRowKey];
      } else {
        agg = this.tree[flatRowKey][flatColKey];
      }
      return agg || {
        value: function value() {
          return null;
        },
        format: function format() {
          return '';
        }
      };
    }
  }]);

  return PivotData;
}();

// can handle arrays or jQuery selections of tables


PivotData.forEachRecord = function (input, derivedAttributes, f) {
  var addRecord = void 0,
      record = void 0;
  if (Object.getOwnPropertyNames(derivedAttributes).length === 0) {
    addRecord = f;
  } else {
    addRecord = function addRecord(record) {
      for (var k in derivedAttributes) {
        var derived = derivedAttributes[k](record);
        if (derived !== null) {
          record[k] = derived;
        }
      }
      return f(record);
    };
  }

  // if it's a function, have it call us back
  if (typeof input === 'function') {
    return input(addRecord);
  } else if (Array.isArray(input)) {
    if (Array.isArray(input[0])) {
      // array of arrays
      return function () {
        var result = [];
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = Object.keys(input || {})[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var i = _step3.value;

            var compactRecord = input[i];
            if (i > 0) {
              record = {};
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                for (var _iterator4 = Object.keys(input[0] || {})[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                  var j = _step4.value;

                  var k = input[0][j];
                  record[k] = compactRecord[j];
                }
              } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                  }
                } finally {
                  if (_didIteratorError4) {
                    throw _iteratorError4;
                  }
                }
              }

              result.push(addRecord(record));
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return result;
      }();
    }

    // array of objects
    return function () {
      var result1 = [];
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = Array.from(input)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          record = _step5.value;

          result1.push(addRecord(record));
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return result1;
    }();
  }
  throw new Error('unknown input format');
};

PivotData.defaultProps = {
  aggregators: aggregators,
  cols: [],
  rows: [],
  vals: [],
  aggregatorName: 'Count',
  sorters: {},
  valueFilter: {},
  rowOrder: 'key_a_to_z',
  colOrder: 'key_a_to_z',
  derivedAttributes: {}
};

PivotData.propTypes = {
  data: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.func]).isRequired,
  aggregatorName: _propTypes2.default.string,
  cols: _propTypes2.default.arrayOf(_propTypes2.default.string),
  rows: _propTypes2.default.arrayOf(_propTypes2.default.string),
  vals: _propTypes2.default.arrayOf(_propTypes2.default.string),
  valueFilter: _propTypes2.default.objectOf(_propTypes2.default.objectOf(_propTypes2.default.bool)),
  sorters: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.objectOf(_propTypes2.default.func)]),
  derivedAttributes: _propTypes2.default.objectOf(_propTypes2.default.func),
  rowOrder: _propTypes2.default.oneOf(['key_a_to_z', 'key_z_to_a', 'value_a_to_z', 'value_z_to_a']),
  colOrder: _propTypes2.default.oneOf(['key_a_to_z', 'key_z_to_a', 'value_a_to_z', 'value_z_to_a'])
};

exports.aggregatorTemplates = aggregatorTemplates;
exports.aggregators = aggregators;
exports.derivers = derivers;
exports.locales = locales;
exports.naturalSort = naturalSort;
exports.numberFormat = numberFormat;
exports.getSort = getSort;
exports.sortAs = sortAs;
exports.flatKey = flatKey;
exports.PivotData = PivotData;
//# sourceMappingURL=Utilities.js.map

/***/ }),

/***/ "./node_modules/@superset-ui/react-pivottable/pivottable.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@superset-ui/react-pivottable/pivottable.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../css-loader??ref--7-1!./pivottable.css */ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/react-pivottable/pivottable.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/@superset-ui/react-pivottable/pivottable.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/@superset-ui/react-pivottable/pivottable.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".pvtUi {\n    color: #2a3f5f;\n    font-family: Verdana;\n    border-collapse: collapse;\n}\n.pvtUi select {\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -ms-user-select: none;\n}\n\n.pvtUi td.pvtOutput {\n    vertical-align: top;\n}\n\ntable.pvtTable {\n    font-size: 8pt;\n    text-align: left;\n    border-collapse: collapse;\n    margin-top: 3px;\n    margin-left: 3px;\n    font-family: Verdana;\n}\ntable.pvtTable thead tr th,\ntable.pvtTable tbody tr th {\n    background-color: #fff;\n    border: 1px solid #c8d4e3;\n    font-size: 8pt;\n    padding: 5px;\n    font-weight: normal;\n}\n\ntable.pvtTable tr th.active {\n    background-color: #D9DBE4;\n}\n\ntable.pvtTable .pvtTotalLabel {\n    text-align: right;\n    font-weight: bold;\n}\n\ntable.pvtTable .pvtSubtotalLabel {\n    font-weight: bold;\n}\n\ntable.pvtTable tbody tr td {\n    color: #2a3f5f;\n    padding: 5px;\n    background-color: #fff;\n    border: 1px solid #c8d4e3;\n    vertical-align: top;\n    text-align: right;\n}\n\ntable.pvtTable tbody tr th.pvtRowLabel {\n    vertical-align: baseline;\n}\n\n.pvtTotal,\n.pvtGrandTotal {\n    font-weight: bold;\n}\n\ntable.pvtTable tbody tr td.pvtRowTotal {\n    vertical-align: middle;\n}\n\n.pvtRowOrder,\n.pvtColOrder {\n    cursor: pointer;\n    width: 15px;\n    margin-left: 5px;\n    display: inline-block;\n    user-select: none;\n    text-decoration: none !important;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -ms-user-select: none;\n}\n\n.pvtColLabel.label-centered {\n    text-align: center;\n}\n\n.pvtAxisContainer,\n.pvtVals {\n    border: 1px solid #a2b1c6;\n    background: #f2f5fa;\n    padding: 5px;\n    min-width: 20px;\n    min-height: 20px;\n}\n\n.pvtRenderers {\n    padding-left: 5px;\n    user-select: none;\n}\n\n.pvtDropdown {\n    display: inline-block;\n    position: relative;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -ms-user-select: none;\n    margin: 3px;\n}\n\n.pvtDropdownIcon {\n    float: right;\n    color: #a2b1c6;\n}\n.pvtDropdownCurrent {\n    text-align: left;\n    border: 1px solid #a2b1c6;\n    border-radius: 4px;\n    display: inline-block;\n    position: relative;\n    width: 210px;\n    box-sizing: border-box;\n    background: white;\n}\n\n.pvtDropdownCurrentOpen {\n    border-radius: 4px 4px 0 0;\n}\n\n.pvtDropdownMenu {\n    background: white;\n    position: absolute;\n    width: 100%;\n    margin-top: -1px;\n    border-radius: 0 0 4px 4px;\n    border: 1px solid #a2b1c6;\n    border-top: 1px solid #dfe8f3;\n    box-sizing: border-box;\n}\n\n.pvtDropdownValue {\n    padding: 2px 5px;\n    font-size: 12px;\n    text-align: left;\n}\n.pvtDropdownActiveValue {\n    background: #ebf0f8;\n}\n\n.pvtVals {\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: top;\n    padding-bottom: 12px;\n}\n\n.pvtRows {\n    height: 35px;\n}\n\n.pvtAxisContainer li {\n    padding: 8px 6px;\n    list-style-type: none;\n    cursor: move;\n}\n.pvtAxisContainer li.pvtPlaceholder {\n    -webkit-border-radius: 5px;\n    padding: 3px 15px;\n    -moz-border-radius: 5px;\n    border-radius: 5px;\n    border: 1px dashed #a2b1c6;\n}\n.pvtAxisContainer li.pvtPlaceholder span.pvtAttr {\n    display: none;\n}\n\n.pvtAxisContainer li span.pvtAttr {\n    -webkit-text-size-adjust: 100%;\n    background: #f3f6fa;\n    border: 1px solid #c8d4e3;\n    padding: 2px 5px;\n    white-space: nowrap;\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px;\n    border-radius: 5px;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -ms-user-select: none;\n}\n\n.pvtTriangle {\n    cursor: pointer;\n    color: #506784;\n}\n\n.pvtHorizList li {\n    display: inline-block;\n}\n.pvtVertList {\n    vertical-align: top;\n}\n\n.pvtFilteredAttribute {\n    font-style: italic;\n}\n\n.sortable-chosen .pvtFilterBox {\n    display: none !important;\n}\n\n.pvtCloseX {\n    position: absolute;\n    right: 5px;\n    top: 5px;\n    font-size: 18px;\n    cursor: pointer;\n    text-decoration: none !important;\n}\n\n.pvtDragHandle {\n    position: absolute;\n    left: 5px;\n    top: 5px;\n    font-size: 18px;\n    cursor: move;\n    color: #a2b1c6;\n}\n\n.pvtButton {\n    color: #506784;\n    border-radius: 5px;\n    padding: 3px 6px;\n    background: #f2f5fa;\n    border: 1px solid;\n    border-color: #c8d4e3;\n    font-size: 14px;\n    margin: 3px;\n    transition: 0.34s all cubic-bezier(0.19, 1, 0.22, 1);\n    text-decoration: none !important;\n}\n\n.pvtButton:hover {\n    background: #e2e8f0;\n    border-color: #a2b1c6;\n}\n\n.pvtButton:active {\n    background: #d1dae6;\n}\n\n.pvtFilterBox input {\n    border: 1px solid #c8d4e3;\n    border-radius: 5px;\n    color: #506784;\n    padding: 0 3px;\n    font-size: 14px;\n}\n\n.pvtFilterBox input:focus {\n    border-color: #119dff;\n    outline: none;\n}\n\n.pvtFilterBox {\n    z-index: 100;\n    width: 300px;\n    border: 1px solid #506784;\n    background-color: #fff;\n    position: absolute;\n    text-align: center;\n    user-select: none;\n    min-height: 100px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -ms-user-select: none;\n}\n\n.pvtFilterBox h4 {\n    margin: 15px;\n}\n.pvtFilterBox p {\n    margin: 10px auto;\n}\n.pvtFilterBox button {\n    color: #2a3f5f;\n}\n.pvtFilterBox input[type='text'] {\n    width: 230px;\n    color: #2a3f5f;\n    margin-bottom: 5px;\n}\n\n.pvtCheckContainer {\n    text-align: left;\n    font-size: 14px;\n    white-space: nowrap;\n    overflow-y: scroll;\n    width: 100%;\n    max-height: 30vh;\n    border-top: 1px solid #dfe8f3;\n}\n\n.pvtCheckContainer p {\n    margin: 0;\n    margin-bottom: 1px;\n    padding: 3px;\n    cursor: default;\n}\n\n.pvtCheckContainer p.selected {\n    background: #ebf0f8;\n}\n\n.pvtOnly {\n    display: none;\n    width: 35px;\n    float: left;\n    font-size: 12px;\n    padding-left: 5px;\n    cursor: pointer;\n}\n\n.pvtOnlySpacer {\n    display: block;\n    width: 35px;\n    float: left;\n}\n\n.pvtCheckContainer p:hover .pvtOnly {\n    display: block;\n}\n.pvtCheckContainer p:hover .pvtOnlySpacer {\n    display: none;\n}\n\n.pvtRendererArea {\n    padding: 5px;\n}\n\n.toggle-wrapper {\n    white-space: nowrap;\n}\n\n.toggle-wrapper > .toggle-val {\n    white-space: normal;\n}\n\n.toggle {\n    cursor: pointer;\n}\n\n.hoverable:hover {\n    background-color: #ECEEF2;\n    cursor: pointer;\n}\n", "", {"version":3,"sources":["G:/workspace/boke-pro/superset-all/superset/superset-frontend/node_modules/@superset-ui/react-pivottable/pivottable.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,qBAAqB;IACrB,0BAA0B;CAC7B;AACD;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,uBAAuB;IACvB,yBAAyB;IACzB,sBAAsB;CACzB;;AAED;IACI,oBAAoB;CACvB;;AAED;IACI,eAAe;IACf,iBAAiB;IACjB,0BAA0B;IAC1B,gBAAgB;IAChB,iBAAiB;IACjB,qBAAqB;CACxB;AACD;;IAEI,uBAAuB;IACvB,0BAA0B;IAC1B,eAAe;IACf,aAAa;IACb,oBAAoB;CACvB;;AAED;IACI,0BAA0B;CAC7B;;AAED;IACI,kBAAkB;IAClB,kBAAkB;CACrB;;AAED;IACI,kBAAkB;CACrB;;AAED;IACI,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,0BAA0B;IAC1B,oBAAoB;IACpB,kBAAkB;CACrB;;AAED;IACI,yBAAyB;CAC5B;;AAED;;IAEI,kBAAkB;CACrB;;AAED;IACI,uBAAuB;CAC1B;;AAED;;IAEI,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,sBAAsB;IACtB,kBAAkB;IAClB,iCAAiC;IACjC,0BAA0B;IAC1B,uBAAuB;IACvB,yBAAyB;IACzB,sBAAsB;CACzB;;AAED;IACI,mBAAmB;CACtB;;AAED;;IAEI,0BAA0B;IAC1B,oBAAoB;IACpB,aAAa;IACb,gBAAgB;IAChB,iBAAiB;CACpB;;AAED;IACI,kBAAkB;IAClB,kBAAkB;CACrB;;AAED;IACI,sBAAsB;IACtB,mBAAmB;IACnB,0BAA0B;IAC1B,uBAAuB;IACvB,yBAAyB;IACzB,sBAAsB;IACtB,YAAY;CACf;;AAED;IACI,aAAa;IACb,eAAe;CAClB;AACD;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,mBAAmB;IACnB,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,kBAAkB;CACrB;;AAED;IACI,2BAA2B;CAC9B;;AAED;IACI,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,2BAA2B;IAC3B,0BAA0B;IAC1B,8BAA8B;IAC9B,uBAAuB;CAC1B;;AAED;IACI,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;CACpB;AACD;IACI,oBAAoB;CACvB;;AAED;IACI,mBAAmB;IACnB,oBAAoB;IACpB,oBAAoB;IACpB,qBAAqB;CACxB;;AAED;IACI,aAAa;CAChB;;AAED;IACI,iBAAiB;IACjB,sBAAsB;IACtB,aAAa;CAChB;AACD;IACI,2BAA2B;IAC3B,kBAAkB;IAClB,wBAAwB;IACxB,mBAAmB;IACnB,2BAA2B;CAC9B;AACD;IACI,cAAc;CACjB;;AAED;IACI,+BAA+B;IAC/B,oBAAoB;IACpB,0BAA0B;IAC1B,iBAAiB;IACjB,oBAAoB;IACpB,2BAA2B;IAC3B,wBAAwB;IACxB,mBAAmB;IACnB,kBAAkB;IAClB,0BAA0B;IAC1B,uBAAuB;IACvB,yBAAyB;IACzB,sBAAsB;CACzB;;AAED;IACI,gBAAgB;IAChB,eAAe;CAClB;;AAED;IACI,sBAAsB;CACzB;AACD;IACI,oBAAoB;CACvB;;AAED;IACI,mBAAmB;CACtB;;AAED;IACI,yBAAyB;CAC5B;;AAED;IACI,mBAAmB;IACnB,WAAW;IACX,SAAS;IACT,gBAAgB;IAChB,gBAAgB;IAChB,iCAAiC;CACpC;;AAED;IACI,mBAAmB;IACnB,UAAU;IACV,SAAS;IACT,gBAAgB;IAChB,aAAa;IACb,eAAe;CAClB;;AAED;IACI,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,sBAAsB;IACtB,gBAAgB;IAChB,YAAY;IACZ,qDAAqD;IACrD,iCAAiC;CACpC;;AAED;IACI,oBAAoB;IACpB,sBAAsB;CACzB;;AAED;IACI,oBAAoB;CACvB;;AAED;IACI,0BAA0B;IAC1B,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,gBAAgB;CACnB;;AAED;IACI,sBAAsB;IACtB,cAAc;CACjB;;AAED;IACI,aAAa;IACb,aAAa;IACb,0BAA0B;IAC1B,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,0BAA0B;IAC1B,uBAAuB;IACvB,yBAAyB;IACzB,sBAAsB;CACzB;;AAED;IACI,aAAa;CAChB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,eAAe;CAClB;AACD;IACI,aAAa;IACb,eAAe;IACf,mBAAmB;CACtB;;AAED;IACI,iBAAiB;IACjB,gBAAgB;IAChB,oBAAoB;IACpB,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,8BAA8B;CACjC;;AAED;IACI,UAAU;IACV,mBAAmB;IACnB,aAAa;IACb,gBAAgB;CACnB;;AAED;IACI,oBAAoB;CACvB;;AAED;IACI,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;CACnB;;AAED;IACI,eAAe;IACf,YAAY;IACZ,YAAY;CACf;;AAED;IACI,eAAe;CAClB;AACD;IACI,cAAc;CACjB;;AAED;IACI,aAAa;CAChB;;AAED;IACI,oBAAoB;CACvB;;AAED;IACI,oBAAoB;CACvB;;AAED;IACI,gBAAgB;CACnB;;AAED;IACI,0BAA0B;IAC1B,gBAAgB;CACnB","file":"pivottable.css","sourcesContent":[".pvtUi {\n    color: #2a3f5f;\n    font-family: Verdana;\n    border-collapse: collapse;\n}\n.pvtUi select {\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -ms-user-select: none;\n}\n\n.pvtUi td.pvtOutput {\n    vertical-align: top;\n}\n\ntable.pvtTable {\n    font-size: 8pt;\n    text-align: left;\n    border-collapse: collapse;\n    margin-top: 3px;\n    margin-left: 3px;\n    font-family: Verdana;\n}\ntable.pvtTable thead tr th,\ntable.pvtTable tbody tr th {\n    background-color: #fff;\n    border: 1px solid #c8d4e3;\n    font-size: 8pt;\n    padding: 5px;\n    font-weight: normal;\n}\n\ntable.pvtTable tr th.active {\n    background-color: #D9DBE4;\n}\n\ntable.pvtTable .pvtTotalLabel {\n    text-align: right;\n    font-weight: bold;\n}\n\ntable.pvtTable .pvtSubtotalLabel {\n    font-weight: bold;\n}\n\ntable.pvtTable tbody tr td {\n    color: #2a3f5f;\n    padding: 5px;\n    background-color: #fff;\n    border: 1px solid #c8d4e3;\n    vertical-align: top;\n    text-align: right;\n}\n\ntable.pvtTable tbody tr th.pvtRowLabel {\n    vertical-align: baseline;\n}\n\n.pvtTotal,\n.pvtGrandTotal {\n    font-weight: bold;\n}\n\ntable.pvtTable tbody tr td.pvtRowTotal {\n    vertical-align: middle;\n}\n\n.pvtRowOrder,\n.pvtColOrder {\n    cursor: pointer;\n    width: 15px;\n    margin-left: 5px;\n    display: inline-block;\n    user-select: none;\n    text-decoration: none !important;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -ms-user-select: none;\n}\n\n.pvtColLabel.label-centered {\n    text-align: center;\n}\n\n.pvtAxisContainer,\n.pvtVals {\n    border: 1px solid #a2b1c6;\n    background: #f2f5fa;\n    padding: 5px;\n    min-width: 20px;\n    min-height: 20px;\n}\n\n.pvtRenderers {\n    padding-left: 5px;\n    user-select: none;\n}\n\n.pvtDropdown {\n    display: inline-block;\n    position: relative;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -ms-user-select: none;\n    margin: 3px;\n}\n\n.pvtDropdownIcon {\n    float: right;\n    color: #a2b1c6;\n}\n.pvtDropdownCurrent {\n    text-align: left;\n    border: 1px solid #a2b1c6;\n    border-radius: 4px;\n    display: inline-block;\n    position: relative;\n    width: 210px;\n    box-sizing: border-box;\n    background: white;\n}\n\n.pvtDropdownCurrentOpen {\n    border-radius: 4px 4px 0 0;\n}\n\n.pvtDropdownMenu {\n    background: white;\n    position: absolute;\n    width: 100%;\n    margin-top: -1px;\n    border-radius: 0 0 4px 4px;\n    border: 1px solid #a2b1c6;\n    border-top: 1px solid #dfe8f3;\n    box-sizing: border-box;\n}\n\n.pvtDropdownValue {\n    padding: 2px 5px;\n    font-size: 12px;\n    text-align: left;\n}\n.pvtDropdownActiveValue {\n    background: #ebf0f8;\n}\n\n.pvtVals {\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: top;\n    padding-bottom: 12px;\n}\n\n.pvtRows {\n    height: 35px;\n}\n\n.pvtAxisContainer li {\n    padding: 8px 6px;\n    list-style-type: none;\n    cursor: move;\n}\n.pvtAxisContainer li.pvtPlaceholder {\n    -webkit-border-radius: 5px;\n    padding: 3px 15px;\n    -moz-border-radius: 5px;\n    border-radius: 5px;\n    border: 1px dashed #a2b1c6;\n}\n.pvtAxisContainer li.pvtPlaceholder span.pvtAttr {\n    display: none;\n}\n\n.pvtAxisContainer li span.pvtAttr {\n    -webkit-text-size-adjust: 100%;\n    background: #f3f6fa;\n    border: 1px solid #c8d4e3;\n    padding: 2px 5px;\n    white-space: nowrap;\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px;\n    border-radius: 5px;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -ms-user-select: none;\n}\n\n.pvtTriangle {\n    cursor: pointer;\n    color: #506784;\n}\n\n.pvtHorizList li {\n    display: inline-block;\n}\n.pvtVertList {\n    vertical-align: top;\n}\n\n.pvtFilteredAttribute {\n    font-style: italic;\n}\n\n.sortable-chosen .pvtFilterBox {\n    display: none !important;\n}\n\n.pvtCloseX {\n    position: absolute;\n    right: 5px;\n    top: 5px;\n    font-size: 18px;\n    cursor: pointer;\n    text-decoration: none !important;\n}\n\n.pvtDragHandle {\n    position: absolute;\n    left: 5px;\n    top: 5px;\n    font-size: 18px;\n    cursor: move;\n    color: #a2b1c6;\n}\n\n.pvtButton {\n    color: #506784;\n    border-radius: 5px;\n    padding: 3px 6px;\n    background: #f2f5fa;\n    border: 1px solid;\n    border-color: #c8d4e3;\n    font-size: 14px;\n    margin: 3px;\n    transition: 0.34s all cubic-bezier(0.19, 1, 0.22, 1);\n    text-decoration: none !important;\n}\n\n.pvtButton:hover {\n    background: #e2e8f0;\n    border-color: #a2b1c6;\n}\n\n.pvtButton:active {\n    background: #d1dae6;\n}\n\n.pvtFilterBox input {\n    border: 1px solid #c8d4e3;\n    border-radius: 5px;\n    color: #506784;\n    padding: 0 3px;\n    font-size: 14px;\n}\n\n.pvtFilterBox input:focus {\n    border-color: #119dff;\n    outline: none;\n}\n\n.pvtFilterBox {\n    z-index: 100;\n    width: 300px;\n    border: 1px solid #506784;\n    background-color: #fff;\n    position: absolute;\n    text-align: center;\n    user-select: none;\n    min-height: 100px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -khtml-user-select: none;\n    -ms-user-select: none;\n}\n\n.pvtFilterBox h4 {\n    margin: 15px;\n}\n.pvtFilterBox p {\n    margin: 10px auto;\n}\n.pvtFilterBox button {\n    color: #2a3f5f;\n}\n.pvtFilterBox input[type='text'] {\n    width: 230px;\n    color: #2a3f5f;\n    margin-bottom: 5px;\n}\n\n.pvtCheckContainer {\n    text-align: left;\n    font-size: 14px;\n    white-space: nowrap;\n    overflow-y: scroll;\n    width: 100%;\n    max-height: 30vh;\n    border-top: 1px solid #dfe8f3;\n}\n\n.pvtCheckContainer p {\n    margin: 0;\n    margin-bottom: 1px;\n    padding: 3px;\n    cursor: default;\n}\n\n.pvtCheckContainer p.selected {\n    background: #ebf0f8;\n}\n\n.pvtOnly {\n    display: none;\n    width: 35px;\n    float: left;\n    font-size: 12px;\n    padding-left: 5px;\n    cursor: pointer;\n}\n\n.pvtOnlySpacer {\n    display: block;\n    width: 35px;\n    float: left;\n}\n\n.pvtCheckContainer p:hover .pvtOnly {\n    display: block;\n}\n.pvtCheckContainer p:hover .pvtOnlySpacer {\n    display: none;\n}\n\n.pvtRendererArea {\n    padding: 5px;\n}\n\n.toggle-wrapper {\n    white-space: nowrap;\n}\n\n.toggle-wrapper > .toggle-val {\n    white-space: normal;\n}\n\n.toggle {\n    cursor: pointer;\n}\n\n.hoverable:hover {\n    background-color: #ECEEF2;\n    cursor: pointer;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

}]);
//# sourceMappingURL=38.9ed865ea.chunk.js.map