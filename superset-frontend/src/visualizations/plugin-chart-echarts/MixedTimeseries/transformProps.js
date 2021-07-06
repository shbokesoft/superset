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

/* eslint-disable camelcase */
import { CategoricalColorNamespace, getNumberFormatter, isEventAnnotationLayer, isFormulaAnnotationLayer, isIntervalAnnotationLayer, isTimeseriesAnnotationLayer } from '@superset-ui/core';
import { DEFAULT_FORM_DATA } from './types';
import { ForecastSeriesEnum } from '../types';
import { parseYAxisBound } from '../utils/controls';
import { dedupSeries, extractTimeseriesSeries, getLegendProps } from '../utils/series';
import { extractAnnotationLabels } from '../utils/annotation';
import { extractForecastSeriesContext, extractProphetValuesFromTooltipParams, formatProphetTooltipSeries, rebaseTimeseriesDatum } from '../utils/prophet';
import { defaultGrid, defaultTooltip, defaultYAxis } from '../defaults';
import { getPadding, getTooltipTimeFormatter, getXAxisFormatter, transformEventAnnotation, transformFormulaAnnotation, transformIntervalAnnotation, transformSeries, transformTimeseriesAnnotation } from '../Timeseries/transformers';
import { TIMESERIES_CONSTANTS } from '../constants';
export default function transformProps(chartProps) {
  const {
    width,
    height,
    formData,
    queriesData
  } = chartProps;
  const {
    annotation_data: annotationData_,
    data: data1 = []
  } = queriesData[0];
  const {
    data: data2 = []
  } = queriesData[1];
  const annotationData = annotationData_ || {};
  const {
    area,
    areaB,
    annotationLayers,
    colorScheme,
    contributionMode,
    legendOrientation,
    legendType,
    logAxis,
    logAxisSecondary,
    markerEnabled,
    markerEnabledB,
    markerSize,
    markerSizeB,
    opacity,
    opacityB,
    minorSplitLine,
    seriesType,
    seriesTypeB,
    showLegend,
    stack,
    stackB,
    truncateYAxis,
    tooltipTimeFormat,
    yAxisFormat,
    yAxisFormatSecondary,
    xAxisShowMinLabel,
    xAxisShowMaxLabel,
    xAxisTimeFormat,
    yAxisBounds,
    yAxisIndex,
    yAxisIndexB,
    yAxisTitle,
    yAxisTitleSecondary,
    zoomable,
    richTooltip,
    xAxisLabelRotation
  } = { ...DEFAULT_FORM_DATA,
    ...formData
  };
  const colorScale = CategoricalColorNamespace.getScale(colorScheme);
  const rawSeriesA = extractTimeseriesSeries(rebaseTimeseriesDatum(data1), {
    fillNeighborValue: stack ? 0 : undefined
  });
  const rawSeriesB = extractTimeseriesSeries(rebaseTimeseriesDatum(data2), {
    fillNeighborValue: stackB ? 0 : undefined
  });
  const series = [];
  const formatter = getNumberFormatter(contributionMode ? ',.0%' : yAxisFormat);
  const formatterSecondary = getNumberFormatter(contributionMode ? ',.0%' : yAxisFormatSecondary);
  const primarySeries = new Set();
  const secondarySeries = new Set();

  const mapSeriesIdToAxis = (seriesOption, index) => {
    if (index === 1) {
      secondarySeries.add(seriesOption.id);
    } else {
      primarySeries.add(seriesOption.id);
    }
  };

  rawSeriesA.forEach(seriesOption => mapSeriesIdToAxis(seriesOption, yAxisIndex));
  rawSeriesB.forEach(seriesOption => mapSeriesIdToAxis(seriesOption, yAxisIndexB));
  rawSeriesA.forEach(entry => {
    const transformedSeries = transformSeries(entry, colorScale, {
      area,
      markerEnabled,
      markerSize,
      opacity,
      seriesType,
      stack,
      richTooltip,
      yAxisIndex
    });
    if (transformedSeries) series.push(transformedSeries);
  });
  rawSeriesB.forEach(entry => {
    const transformedSeries = transformSeries(entry, colorScale, {
      area: areaB,
      markerEnabled: markerEnabledB,
      markerSize: markerSizeB,
      opacity: opacityB,
      seriesType: seriesTypeB,
      stack: stackB,
      richTooltip,
      yAxisIndex: yAxisIndexB
    });
    if (transformedSeries) series.push(transformedSeries);
  });
  annotationLayers.filter(layer => layer.show).forEach(layer => {
    if (isFormulaAnnotationLayer(layer)) series.push(transformFormulaAnnotation(layer, data1, colorScale));else if (isIntervalAnnotationLayer(layer)) {
      series.push(...transformIntervalAnnotation(layer, data1, annotationData, colorScale));
    } else if (isEventAnnotationLayer(layer)) {
      series.push(...transformEventAnnotation(layer, data1, annotationData, colorScale));
    } else if (isTimeseriesAnnotationLayer(layer)) {
      series.push(...transformTimeseriesAnnotation(layer, markerSize, data1, annotationData));
    }
  }); // yAxisBounds need to be parsed to replace incompatible values with undefined

  let [min, max] = (yAxisBounds || []).map(parseYAxisBound); // default to 0-100% range when doing row-level contribution chart

  if (contributionMode === 'row' && stack) {
    if (min === undefined) min = 0;
    if (max === undefined) max = 1;
  }

  const tooltipTimeFormatter = getTooltipTimeFormatter(tooltipTimeFormat);
  const xAxisFormatter = getXAxisFormatter(xAxisTimeFormat);
  const addYAxisLabelOffset = !!(yAxisTitle || yAxisTitleSecondary);
  const chartPadding = getPadding(showLegend, legendOrientation, addYAxisLabelOffset, zoomable);
  const echartOptions = {
    useUTC: true,
    grid: { ...defaultGrid,
      ...chartPadding
    },
    xAxis: {
      type: 'time',
      axisLabel: {
        showMinLabel: xAxisShowMinLabel,
        showMaxLabel: xAxisShowMaxLabel,
        formatter: xAxisFormatter,
        rotate: xAxisLabelRotation
      }
    },
    yAxis: [{ ...defaultYAxis,
      type: logAxis ? 'log' : 'value',
      min,
      max,
      minorTick: {
        show: true
      },
      minorSplitLine: {
        show: minorSplitLine
      },
      axisLabel: {
        formatter
      },
      scale: truncateYAxis,
      name: yAxisTitle
    }, { ...defaultYAxis,
      type: logAxisSecondary ? 'log' : 'value',
      min,
      max,
      minorTick: {
        show: true
      },
      splitLine: {
        show: false
      },
      minorSplitLine: {
        show: minorSplitLine
      },
      axisLabel: {
        formatter: formatterSecondary
      },
      scale: truncateYAxis,
      name: yAxisTitleSecondary
    }],
    tooltip: { ...defaultTooltip,
      trigger: richTooltip ? 'axis' : 'item',
      formatter: params => {
        const value = !richTooltip ? params.value : params[0].value[0];
        const prophetValue = !richTooltip ? [params] : params;
        const rows = [`${tooltipTimeFormatter(value)}`];
        const prophetValues = extractProphetValuesFromTooltipParams(prophetValue);
        Object.keys(prophetValues).forEach(key => {
          const value = prophetValues[key];
          rows.push(formatProphetTooltipSeries({ ...value,
            seriesName: key,
            formatter: primarySeries.has(key) ? formatter : formatterSecondary
          }));
        });
        return rows.join('<br />');
      }
    },
    legend: { ...getLegendProps(legendType, legendOrientation, showLegend, zoomable),
      // @ts-ignore
      data: rawSeriesA.concat(rawSeriesB).filter(entry => extractForecastSeriesContext(entry.name || '').type === ForecastSeriesEnum.Observation).map(entry => entry.name || '').concat(extractAnnotationLabels(annotationLayers, annotationData))
    },
    series: dedupSeries(series),
    toolbox: {
      show: zoomable,
      top: TIMESERIES_CONSTANTS.toolboxTop,
      right: TIMESERIES_CONSTANTS.toolboxRight,
      feature: {
        dataZoom: {
          yAxisIndex: false,
          title: {
            zoom: 'zoom area',
            back: 'restore zoom'
          }
        }
      }
    },
    dataZoom: zoomable ? [{
      type: 'slider',
      start: TIMESERIES_CONSTANTS.dataZoomStart,
      end: TIMESERIES_CONSTANTS.dataZoomEnd,
      bottom: TIMESERIES_CONSTANTS.zoomBottom
    }] : []
  };
  return {
    echartOptions,
    width,
    height
  };
}