import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

export interface ChartOption {
  yData?: string[];
  toFromColor: string[];
  data: number[]
}

interface BarChartProps {
    chartOption?: ChartOption;
}

const Chart: React.FC<BarChartProps> = ({chartOption}) => {
    console.log('chartOption', chartOption)
  // 定义图表配置项
  const option = {
    backgroundColor: '#000',
    grid: {
      left: '0%',
      right: '5%',
      bottom: 0,
      top: '15%',
      containLabel: false,
    },
    xAxis: {
      show: false,
      max: 100,
    },
    yAxis: [
      {
        type: 'category',
        data: chartOption?.yData,
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
          show: true,
          fontSize: 12,
          color: '#fff',
          align: 'top',
          verticalAlign: 'bottom',
          padding: [0, 0, 10, 10],
          formatter: "{value}%",
        },
      },
      {
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
          fontSize: 12,
          position: 'insideRight',
          color: chartOption?.toFromColor[0],
          align: 'top',
          verticalAlign: 'bottom',
          padding: [0, 0, 10, -30],
          formatter: (value: number) => `${value}%`
        },
        data: chartOption?.data,
      },
    ],
    series: [
      {
        name: 'value',
        type: 'bar',
        zlevel: 1,
        showBackground: true,
        backgroundStyle: {
          opacity: 0.098,
          color: '#FFFFFF',
          borderRadius: 20,
        },
        itemStyle: {
            color: {
                type: 'linear',
                colorStops: [
                   {
                      offset: 0,
                      color: chartOption?.toFromColor[0]
                   },
                   {
                      offset: 1,
                      color: chartOption?.toFromColor[1]
                   }
                ],
                x: 0,
                y: 0,
                x2: 1,
                y2: 0.5
             },
          borderRadius: 20,
        },
        barWidth: '20%',
        data: chartOption?.data,
      },
    ],
  };

  // 图表样式
  const chartStyle = {
    width: '100%',
    height: '500px', // 根据需要调整高度
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

export default Chart;
