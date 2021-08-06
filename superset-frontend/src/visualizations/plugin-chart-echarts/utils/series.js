/* eslint-disable no-underscore-dangle */

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
import { GenericDataType } from '@superset-ui/core';
import { NULL_STRING, TIMESERIES_CONSTANTS } from '../constants';
import { LegendOrientation } from '../types';
import { defaultLegendPadding } from '../defaults';

function isDefined(value) {
  return value !== undefined && value !== null;
}

export function extractTimeseriesSeries(data, opts = {}) {
  const {
    fillNeighborValue
  } = opts;
  if (data.length === 0) return [];
  const rows = data.map(datum => ({ ...datum,
    __timestamp: datum.__timestamp || datum.__timestamp === 0 ? new Date(datum.__timestamp) : null
  }));
  return Object.keys(rows[0]).filter(key => key !== '__timestamp').map(key => ({
    id: key,
    name: key,
    data: rows.map((row, idx) => {
      var _rows, _rows2;

      const isNextToDefinedValue = isDefined((_rows = rows[idx - 1]) == null ? void 0 : _rows[key]) || isDefined((_rows2 = rows[idx + 1]) == null ? void 0 : _rows2[key]);
      return [row.__timestamp, !isDefined(row[key]) && isNextToDefinedValue && fillNeighborValue !== undefined ? fillNeighborValue : row[key]];
    })
  }));
}
export function formatSeriesName(name, {
  numberFormatter,
  timeFormatter,
  coltype
} = {}) {
  if (name === undefined || name === null) {
    return NULL_STRING;
  }

  if (typeof name === 'number') {
    return numberFormatter ? numberFormatter(name) : name.toString();
  }

  if (typeof name === 'boolean') {
    return name.toString();
  }

  if (name instanceof Date || coltype === GenericDataType.TEMPORAL) {
    const d = name instanceof Date ? name : new Date(name);
    return timeFormatter ? timeFormatter(d) : d.toISOString();
  }

  return name;
}
export const getColtypesMapping = ({
  coltypes = [],
  colnames = []
}) => colnames.reduce((accumulator, item, index) => ({ ...accumulator,
  [item]: coltypes[index]
}), {});
export function extractGroupbyLabel({
  datum = {},
  groupby,
  numberFormatter,
  timeFormatter,
  coltypeMapping = {}
}) {
  return (groupby || []).map(val => formatSeriesName(datum[val.column.column_name], {
    numberFormatter,
    timeFormatter,
    ...(coltypeMapping[val.column.column_name] && {
      coltype: coltypeMapping[val.column.column_name]
    })
  })).join(', ');
}
export function getLegendProps(type, orientation, show, zoomable = false) {
  const legend = {
    orient: [LegendOrientation.Top, LegendOrientation.Bottom].includes(orientation) ? 'horizontal' : 'vertical',
    show,
    type
  };

  switch (orientation) {
    case LegendOrientation.Left:
      legend.left = 0;
      break;

    case LegendOrientation.Right:
      legend.right = 0;
      legend.top = zoomable ? TIMESERIES_CONSTANTS.legendRightTopOffset : 0;
      break;

    case LegendOrientation.Bottom:
      legend.bottom = 0;
      break;

    case LegendOrientation.Top:
    default:
      legend.top = 0;
      legend.right = zoomable ? TIMESERIES_CONSTANTS.legendTopRightOffset : 0;
      break;
  }

  return legend;
}
export function getChartPadding(show, orientation, margin, padding) {
  let legendMargin;

  if (!show) {
    legendMargin = 0;
  } else if (margin === null || margin === undefined || typeof margin === 'string') {
    legendMargin = defaultLegendPadding[orientation];
  } else {
    legendMargin = margin;
  }

  const {
    bottom = 0,
    left = 0,
    right = 0,
    top = 0
  } = padding || {};
  return {
    left: left + (orientation === LegendOrientation.Left ? legendMargin : 0),
    right: right + (orientation === LegendOrientation.Right ? legendMargin : 0),
    top: top + (orientation === LegendOrientation.Top ? legendMargin : 0),
    bottom: bottom + (orientation === LegendOrientation.Bottom ? legendMargin : 0)
  };
}
export function dedupSeries(series) {
  const counter = new Map();
  return series.map(row => {
    let {
      id
    } = row;
    if (id === undefined) return row;
    id = String(id);
    const count = counter.get(id) || 0;
    const suffix = count > 0 ? ` (${count})` : '';
    counter.set(id, count + 1);
    return { ...row,
      id: `${id}${suffix}`
    };
  });
}