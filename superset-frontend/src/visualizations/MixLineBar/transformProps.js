export default function transformProps(chartProps) {
  const { width, height, queriesData, formData } = chartProps;
  // formData 前端页面的数据 queriesData 后端返回的数据
  return {
    data: queriesData[0].data,
    width,
    height,
    formData,
    legend: queriesData[0].data.legend,
    x_data: queriesData[0].data.x_data,
    series: queriesData[0].data.data,
  };
}
