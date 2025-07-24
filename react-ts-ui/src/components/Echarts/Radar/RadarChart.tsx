import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const RadarChart: React.FC = () => {
  // 存放需要显示的刻度值
  const arr: number[] = [];

  // 颜色列表
  const colorList = ['pink', 'green'];

  // 指示器数组（城市数据）
  const indicatorList = [
    { name: 'HTML', max: 100 },
    { name: 'CSS', max: 100 },
    { name: 'JavaScript', max: 100 },
    { name: 'Vue', max: 100 },
    { name: 'React', max: 100 },
    { name: 'Node.js', max: 100 },
    { name: 'Nest.js', max: 100 },
    { name: 'Git', max: 100 },
  ];
  const seriesList = [
    [ 10, 30, 20, 70, 65, 54, 87, 84 ],
  ];
  // 图表配置项
  const option = {
    color: colorList,
    tooltip: {
      show: true,
      trigger: 'item',
    },
    backgroundColor: 'transparent',
    radar: {
      center: ['50%', '50%'],
      radius: '70%',
      startAngle: 90,
      splitNumber: 4,
      splitArea: {
        areaStyle: {
          color: ['transparent'],
        },
      },
      name: {
        color: '#fff',
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'rgba(255,255,255,.1)',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'solid',
          color: 'rgba(255,255,255,.1)',
        },
      },
      axisLabel: {
        show: true,
        color: '#ccc',
        // 格式化刻度显示
        formatter: function (value: number) {
          if (!arr.includes(value)) {
            arr.push(value);
            return value;
          }
          return '';
        },
      },
      indicator: indicatorList,
    },
    series: [
      {
        name: '熟练成熟度',
        type: 'radar',
        symbol: 'circle',
        symbolSize: 3, // 数据点大小
        areaStyle: {
          normal: {
            // 径向渐变填充
            color: 'rgb(59 130 246 / 0.5)',
          },
        },
        itemStyle: {
          color: '#6CC3BF',
          borderColor: '#099B93',
          borderWidth: 0,
        },
        lineStyle: {
          normal: {
            color: '#05D9E8',
            width: 2,
          },
        },
        label: {
          normal: {
            show: false,
            color: '#fff',
          },
        },
        data: seriesList,
      },
    ],
  };

  // 图表样式
  const chartStyle = {
    width: '100%',
    height: '600px',
    marginTop: '20px',
  };
  return (
    <ReactECharts
      echarts={echarts}
      option={option}
      style={chartStyle}
      // 可选：添加事件监听
      // onEvents={{
      //   click: (params) => console.log('点击事件', params)
      // }}
    />
  );
};

export default RadarChart;
