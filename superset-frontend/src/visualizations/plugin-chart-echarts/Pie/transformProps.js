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
import { CategoricalColorNamespace, getMetricLabel, getNumberFormatter, getTimeFormatter, NumberFormats } from '@superset-ui/core';
import { DEFAULT_FORM_DATA as DEFAULT_PIE_FORM_DATA, EchartsPieLabelType } from './types';
import { DEFAULT_LEGEND_FORM_DATA } from '../types';
import { extractGroupbyLabel, getChartPadding, getColtypesMapping, getLegendProps } from '../utils/series';
import { defaultGrid, defaultTooltip } from '../defaults';
const percentFormatter = getNumberFormatter(NumberFormats.PERCENT_2_POINT);
export function formatPieLabel({
  params,
  labelType,
  numberFormatter
}) {
  const {
    name = '',
    value,
    percent
  } = params;
  const formattedValue = numberFormatter(value);
  const formattedPercent = percentFormatter(percent / 100);

  switch (labelType) {
    case EchartsPieLabelType.Key:
      return name;

    case EchartsPieLabelType.Value:
      return formattedValue;

    case EchartsPieLabelType.Percent:
      return formattedPercent;

    case EchartsPieLabelType.KeyValue:
      return `${name}: ${formattedValue}`;

    case EchartsPieLabelType.KeyValuePercent:
      return `${name}: ${formattedValue} (${formattedPercent})`;

    case EchartsPieLabelType.KeyPercent:
      return `${name}: ${formattedPercent}`;

    default:
      return name;
  }
}
export default function transformProps(chartProps) {
  const {
    formData,
    height,
    hooks,
    filterState,
    queriesData,
    width
  } = chartProps;
  const {
    data = []
  } = queriesData[0];
  const coltypeMapping = getColtypesMapping(queriesData[0]);
  const {
    colorScheme,
    donut,
    groupby,
    innerRadius,
    labelsOutside,
    labelLine,
    labelType,
    legendMargin,
    legendOrientation,
    legendType,
    metric = '',
    numberFormat,
    dateFormat,
    outerRadius,
    showLabels,
    showLegend,
    showLabelsThreshold,
    emitFilter
  } = { ...DEFAULT_LEGEND_FORM_DATA,
    ...DEFAULT_PIE_FORM_DATA,
    ...formData
  };
  
  let invisible_arr = [];
  groupby.length && groupby.forEach((item, index) => {
    item.invisible && invisible_arr.push(index);
  })
  invisible_arr = [...new Set(invisible_arr)];

  function handleInvisible(array, value) {
    let str2arr = value.split(",");
    array.filter((val, index) => {
      str2arr.splice((val - index), 1);
    })
    return str2arr.join(",");
  }

  const metricLabel = getMetricLabel(metric);
  const minShowLabelAngle = (showLabelsThreshold || 0) * 3.6;
  const keys = data.map(datum => extractGroupbyLabel({
    datum,
    groupby,
    coltypeMapping,
    timeFormatter: getTimeFormatter(dateFormat)
  }));
  const labelMap = data.reduce((acc, datum) => {
    const label = extractGroupbyLabel({
      datum,
      groupby,
      coltypeMapping,
      timeFormatter: getTimeFormatter(dateFormat)
    });
    return { ...acc,
      [label]: groupby.map(col => datum[col])
    };
  }, {});
  const {
    setDataMask = () => {}
  } = hooks;
  const colorFn = CategoricalColorNamespace.getScale(colorScheme);
  const numberFormatter = getNumberFormatter(numberFormat);
  const transformedData = data.map(datum => {
    const name = extractGroupbyLabel({
      datum,
      groupby,
      coltypeMapping,
      timeFormatter: getTimeFormatter(dateFormat)
    });
    return {
      value: datum[metricLabel],
      name,
      itemStyle: {
        color: colorFn(name)
      }
    };
  });
  const selectedValues = (filterState.selectedValues || []).reduce((acc, selectedValue) => {
    const index = transformedData.findIndex(({
      name
    }) => name === selectedValue);
    return { ...acc,
      [index]: selectedValue
    };
  }, {});

  const formatter = params => formatPieLabel({
    params,
    numberFormatter,
    labelType
  });

  const defaultLabel = {
    formatter,
    show: showLabels,
    color: '#000000'
  };
  const series = [{
    type: 'pie',
    ...getChartPadding(showLegend, legendOrientation, legendMargin),
    animation: false,
    radius: [`${donut ? innerRadius : 0}%`, `${outerRadius}%`],
    center: ['50%', '50%'],
    avoidLabelOverlap: true,
    labelLine: labelsOutside && labelLine ? {
      show: true
    } : {
      show: false
    },
    minShowLabelAngle,
    label: labelsOutside ? { ...defaultLabel,
      position: 'outer',
      alignTo: 'none',
      bleedMargin: 5,
      formatter: function (params) {
        return handleInvisible(invisible_arr, params.name);
      }
    } : { ...defaultLabel,
      position: 'inner',
      formatter: function (params) {
        return handleInvisible(invisible_arr, params.name);
      }
    },
    emphasis: {
      label: {
        show: true,
        fontWeight: 'bold',
        backgroundColor: 'white'
      }
    },
    data: transformedData
  }];
  const echartOptions = {
    grid: { ...defaultGrid
    },
    tooltip: { ...defaultTooltip,
      trigger: 'item',
      formatter: params => {
        let newParmas = formatPieLabel({
          params,
          numberFormatter,
          labelType: EchartsPieLabelType.KeyValuePercent
        })
        return handleInvisible(invisible_arr, newParmas.split(":")[0]) + ' :' + newParmas.split(":")[1];
      }
    },
    legend: { ...getLegendProps(legendType, legendOrientation, showLegend),
      data: keys
    },
    series
  };
  return {
    formData,
    width,
    height,
    echartOptions,
    setDataMask,
    emitFilter,
    labelMap,
    groupby,
    selectedValues
  };
}