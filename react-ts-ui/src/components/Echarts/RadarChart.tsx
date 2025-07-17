import React from 'react';
import { Radar } from '@ant-design/charts';
import { Card, Spin } from 'antd';

const RadarChart: React.FC = () => {
  const data = [
    {
      item: 'React',
      user: '用户A',
      score: 70,
    },
    {
      item: 'Vue',
      user: '用户A',
      score: 80,
    },
    {
      item: 'Node.js',
      user: '用户A',
      score: 60,
    },
    {
      item: 'Typescript',
      user: '用户A',
      score: 85,
    },
    {
      item: '数据库',
      user: '用户A',
      score: 75,
    },
    {
      item: '系统设计',
      user: '用户A',
      score: 65,
    },
  ];

  /**
   * 雷达图配置
   * @type {Object}
   * @property {Array<Object>} data - 数据源
   * @property {string} xField - 维度字段
   * @property {string} yField - 数值字段
   * @property {string} seriesField - 分组字段
   * @property {number} radius - 雷达图半径(0~1)
   * @property {Object} angleAxis - 角度轴配置
   * @property {number} angleAxis.tickCount - 角度轴刻度数量
   * @property {Object} angleAxis.line - 角度轴线样式
   * @property {string} angleAxis.line.style.stroke - 角度轴线颜色
   * @property {Object} angleAxis.grid - 角度轴网格样式
   * @property {string} angleAxis.grid.style.stroke - 角度轴网格颜色
   * @property {Object} angleAxis.label - 角度轴标签配置
   * @property {number} angleAxis.label.offset - 角度轴标签偏移量
   * @property {Object} radiusAxis - 半径轴配置
   * @property {number} radiusAxis.min - 半径轴最小值
   * @property {number} radiusAxis.max - 半径轴最大值
   * @property {number} radiusAxis.tickCount - 半径轴刻度数量
   * @property {Object} radiusAxis.grid - 半径轴网格样式
   * @property {string} radiusAxis.grid.style.stroke - 半径轴网格颜色
   * @property {Array<number>} radiusAxis.grid.style.lineDash - 半径轴网格虚线样式
   * @property {Object} tooltip - 提示框配置
   * @property {boolean} tooltip.showMarkers - 是否显示提示框标记点
   * @property {Object} meta - 元数据配置
   * @property {Object} meta.score - 分数元数据
   * @property {string} meta.score.alias - 分数别名
   * @property {number} meta.score.min - 分数最小值
   * @property {number} meta.score.max - 分数最大值
   * @property {Object} meta.item - 维度元数据
   * @property {string} meta.item.alias - 维度别名
   * @property {Object} title - 标题配置
   * @property {boolean} title.visible - 是否显示标题
   * @property {string} title.text - 标题文本
   * @property {Object} description - 描述配置
   * @property {boolean} description.visible - 是否显示描述
   * @property {string} description.text - 描述文本
   * @property {string} color - 图表颜色
   */
  const config = {
    title: {
      visible: false,
      text: '多组雷达图',
    },
    data,
    xField: 'item',
    yField: 'score',
    height: 380, // 直接设置图表高度
    grid: {},
    radius: 0.8, // 雷达图半径（0~1之间），相对于容器的比例
    tooltip: {
      showMarkers: false, // 是否显示标记点
    },
    seriesField: 'user',
    radiosField: 'score',
    meta: {
      score: {
        alias: '分数',
        min: 0,
        max: 100,
      },
      item: {
        alias: '能力维度',
      },
    },
    description: {
      visible: true,
      text: '展示用户在不同技能维度上的评分情况',
    },
    color: '#5B8FF9',
    // 图形样式配置
    area: {
      visible: true, // 是否显示区域填充
      style: {
        opacity: 0.3, // 填充透明度
      },
    },
    // 线样式配置
    line: {
      visible: true, // 是否显示线
      style: {
        lineWidth: 1, // 线宽
      },
    },
    // 将雷达图从圆形改为多边形
    coordinate: {
      type: 'polygon', // 关键配置：多边形坐标系
      sides: 6, // 边数，与维度数量一致
    },
  };

  return <Radar {...config} className="w-full" />;
};

export default RadarChart;
