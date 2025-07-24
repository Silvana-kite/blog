import React from 'react';
import { Flex, Layout, Typography } from 'antd';
import { MainFlexStyle } from './index.style';
import './index.less';
import { Header } from 'antd/es/layout/layout';
import { ApiTwoTone } from '@ant-design/icons';
import Chart, { ChartOption } from '@/components/Echarts/Bar/Chart';
import RadarChart from '@/components/Echarts/Radar/RadarChart';

interface ContentItem {
  title: string;
  description: string;
  chart?: ChartOption;
}
const ContentData: ContentItem[] = [
  {
    title: '前端技术',
    description: '使用HTML创建结构化的网页内容。',
    chart: { yData: ['JavaScript', 'CSS', 'HTML'], toFromColor: ['#05D9E8', '#FF2A6D'],data:[90,80,97] },
  },
  {
    title: 'UI/UX设计',
    description:
      '打造视觉上令人惊叹且用户友好的界面，注重用户使用现代开发工具和方法论实现高效的工作流程体验。',
    chart: { yData: ['Figma', 'Adobe XO', '原型设计'], toFromColor: ['#FF2A6D', '#D300C5'],data:[50,77,67] },
  },
  {
    title: '工具链',
    description: '使用现代开发工具和方法论实现高效的工作流程。',
    chart: { yData: ['Git & Github', 'SCSS & Less', 'webpack'], toFromColor: ['#4FFF4B', '#05D9E8'],data:[96,88,85] },
  },
];
const Skills: React.FC = () => {
  return (
    <Layout className="skill-container" id="Skills" style={MainFlexStyle}>
      <Header className="skill-header-container">
        <Flex gap="large" className="title">
          <span>My</span>
          <span>Skills</span>
        </Flex>
      </Header>
      <Flex
        justify="center"
        align="cenetr"
        gap="large"
        wrap
        className="content-container"
      >
        {ContentData.map((item, index) => {
          // 关键修复：返回React元素
          return (
            <Flex key={index} className="flex-box" vertical justify="center">
              <ApiTwoTone style={{ fontSize: 36 }} />
              <Typography.Title level={4} className="h4">
                {item.title}
              </Typography.Title>
              <p className="p-text">{item.description}</p>
              <Chart chartOption={item.chart} />
            </Flex>
          );
        })}
      </Flex>
      <Flex
        justify="center"
        align="cenetr"
        gap="large"
        wrap
        className="content-container"
      >
          <Flex className="flex-box" style={{width: '67%', borderColor: 'rgb(211 0 197 / 0.3)'}} vertical justify="center" align='center'>
            <Typography.Title level={4} style={{fontSize: '20px', color: 'rgb(211 0 197)', fontWeight: 700}}>技术熟练程度</Typography.Title>
            <RadarChart/>
          </Flex>
      </Flex>
    </Layout>
  );
};

export default Skills;
