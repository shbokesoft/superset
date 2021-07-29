import echarts from 'echarts';
import d3 from 'd3';
import PropTypes from 'prop-types';
import { CategoricalColorNamespace } from '@superset-ui/core';

// 数据类型检查
const propTypes = {
  data: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
};

function MixLineBar(element, props) {
  const { width, height, data, formData, x_data, series, legend } = props; // transformProps.js 返回的数据
  // x_data处理 控制groupby显示或者隐藏
  let invisible_arr = [];
  formData.groupby.length && formData.groupby.forEach((item, index) => {
    item.invisible && x_data.forEach((str) => {
      str = str.split(",");
      invisible_arr.push(index);
    })
  })
  invisible_arr = [...new Set(invisible_arr)];

function handleInvisible(array, value) {
  let str2arr = value.split(",");
  array.filter((val, index) => {
      str2arr.splice((val - index), 1);
    })
    return str2arr.join(",");
  }

  const fd = formData;
  // 配置y轴显示信息
  const left_y_min = fd.leftYMIn;
  const left_y_max = fd.leftYMax;
  const left_y_interval = fd.leftYInterval;
  const right_y_min = fd.rightYMin;
  const right_y_max = fd.rightYMax;
  const right_y_interval = fd.rightYInterval;
  // y轴别名
  const y_axis_label = fd.yAxisLabel;
  const y_axis_2_label = fd.yAxis2Label;

  // 右边y轴 对应的 指标列
  const right_y_column = fd.rightYColumn;
  // 为了适配颜色
  const colorFn = CategoricalColorNamespace.getScale(fd.colorScheme);
  let colors = [];
  if (colorFn && colorFn.colors) {
    colors = colorFn.colors;
  }
  const colors_len = colors.length;

  // y轴配置格式
  const yAxis_1 = {
    type: 'value',
    name: 'Left_Y_Axis',
    axisLabel: {
      formatter: '{value}',
    },
  };

  const yAxis_2 = {
    type: 'value',
    name: 'Right_Y_Axis',
    axisLabel: {
      formatter: '{value}',
    },
  };

  if (left_y_min !== undefined) {
    yAxis_1.mix = left_y_min;
  }
  if (left_y_max != undefined) {
    yAxis_1.max = left_y_max;
  }
  if (left_y_interval != undefined) {
    yAxis_1.interval = left_y_interval;
  }
  if (right_y_min != undefined) {
    yAxis_2.mix = right_y_min;
  }
  if (right_y_max != undefined) {
    yAxis_2.max = right_y_max;
  }
  if (right_y_interval != undefined) {
    yAxis_2.interval = right_y_interval;
  }
  if (y_axis_label != undefined) {
    yAxis_1.name = y_axis_label;
  }
  if (y_axis_2_label != undefined) {
    yAxis_2.name = y_axis_2_label;
  }

  // 处理series 显示的数据 [{'name':xx, 'type':xx, 'data':xx, 'yAxisIndex':xx}]
  // 重新请求时, 默认展示左y，
  for (let i = 0; i < series.length; i++) {
    const serie = series[i];
    serie.yAxisIndex = 0;
    if (
      right_y_column != undefined &&
      right_y_column.indexOf(serie.name) >= 0
    ) {
      serie.yAxisIndex = 1;
    }
    if (colors_len > 0) {
      serie.itemStyle = {
        color: colors[i % colors_len],
      };
    }
  }

  const div = d3.select(element);
  const sliceId = `mix-bar-line-${fd.sliceId}`;
  const html = `<div id=${sliceId} style="height:${height}px; width:${width}px;"></div>`;
  div.html(html);
  // init echarts，light 为制定主题，可以查看官方api

  const myChart = echarts.init(document.getElementById(sliceId), 'light');
  // echarts 渲染图表的数据格式 在官网可以查看

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
        label: {
          formatter: function (params) {
            if (params.axisDimension === "x") {
              return handleInvisible(invisible_arr, params.value);
            } else {
              return params.value;
            }
          }
        }
      },
      formatter: function (params) {
        let str = params[0].axisValueLabel + '<br />';
        params.forEach((item) => {
          str += `${item.seriesName}:${item.value}<br />`
        })
        return str;
      }
    },
    legend: {
      data: legend, // [] x轴的数据
    },
    xAxis: [
      {
        type: 'category',
        data: x_data,
        axisPointer: {
          type: 'shadow',
        },
        axisLabel: {
          formatter: function (value) {
            if (invisible_arr.length) {
              return handleInvisible(invisible_arr, value);
            } else {
              return value;
            }
          }
        },
      },
    ],
    yAxis: [yAxis_1, yAxis_2],
    series,
  };

  myChart.setOption(option);
  myChart.on('click', element => {
    if (fd.script && fd.script.trim()) {
      console.log('element:', element);
      eval(fd.script); // 执行不被信任的脚本，待引入沙盒安全机制 sandbox
    }
  });
}

MixLineBar.displayName = 'Mix Line Bar';
MixLineBar.propTypes = propTypes;

export default MixLineBar;
