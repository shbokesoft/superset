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
import { DEFAULT_LEGEND_FORM_DATA } from '../types';
import { DEFAULT_FORM_DATA as TIMESERIES_DEFAULTS } from '../Timeseries/types';
export const DEFAULT_FORM_DATA = { ...DEFAULT_LEGEND_FORM_DATA,
  annotationLayers: [],
  minorSplitLine: TIMESERIES_DEFAULTS.minorSplitLine,
  truncateYAxis: TIMESERIES_DEFAULTS.truncateYAxis,
  truncateYAxisSecondary: TIMESERIES_DEFAULTS.truncateYAxis,
  logAxis: TIMESERIES_DEFAULTS.logAxis,
  logAxisSecondary: TIMESERIES_DEFAULTS.logAxis,
  yAxisBounds: TIMESERIES_DEFAULTS.yAxisBounds,
  yAxisBoundsSecondary: TIMESERIES_DEFAULTS.yAxisBounds,
  yAxisFormat: TIMESERIES_DEFAULTS.yAxisFormat,
  yAxisFormatSecondary: TIMESERIES_DEFAULTS.yAxisFormat,
  yAxisTitle: TIMESERIES_DEFAULTS.yAxisTitle,
  yAxisTitleSecondary: TIMESERIES_DEFAULTS.yAxisTitle,
  tooltipTimeFormat: TIMESERIES_DEFAULTS.tooltipTimeFormat,
  xAxisTimeFormat: TIMESERIES_DEFAULTS.xAxisTimeFormat,
  area: TIMESERIES_DEFAULTS.area,
  areaB: TIMESERIES_DEFAULTS.area,
  markerEnabled: TIMESERIES_DEFAULTS.markerEnabled,
  markerEnabledB: TIMESERIES_DEFAULTS.markerEnabled,
  markerSize: TIMESERIES_DEFAULTS.markerSize,
  markerSizeB: TIMESERIES_DEFAULTS.markerSize,
  opacity: TIMESERIES_DEFAULTS.opacity,
  opacityB: TIMESERIES_DEFAULTS.opacity,
  orderDesc: TIMESERIES_DEFAULTS.orderDesc,
  orderDescB: TIMESERIES_DEFAULTS.orderDesc,
  rowLimit: TIMESERIES_DEFAULTS.rowLimit,
  rowLimitB: TIMESERIES_DEFAULTS.rowLimit,
  seriesType: TIMESERIES_DEFAULTS.seriesType,
  seriesTypeB: TIMESERIES_DEFAULTS.seriesType,
  stack: TIMESERIES_DEFAULTS.stack,
  stackB: TIMESERIES_DEFAULTS.stack,
  yAxisIndex: 0,
  yAxisIndexB: 0,
  xAxisShowMinLabel: TIMESERIES_DEFAULTS.xAxisShowMinLabel,
  xAxisShowMaxLabel: TIMESERIES_DEFAULTS.xAxisShowMaxLabel,
  zoomable: TIMESERIES_DEFAULTS.zoomable,
  richTooltip: TIMESERIES_DEFAULTS.richTooltip,
  xAxisLabelRotation: TIMESERIES_DEFAULTS.xAxisLabelRotation
};