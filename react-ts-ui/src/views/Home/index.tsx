import React, { FC, useEffect } from 'react';
import { Flex, Layout, Row, Col } from 'antd';
import { Notes, PreviewOpen, Peoples } from '@icon-park/react';
import StatCard from './Components/StatCard';
import RadarChart from '@/components/Echarts/RadarChart';
import FeaturedArticles from './Components/FeaturedArticles';
import LatestArticles from './Components/LatestArticles';
import { useApi } from '@/hooks/useApi';
interface StatItem {
  icon: React.ComponentType;
  count: number | string;
  label: string;
  iconSize?: number | string;
}
const statsData: StatItem[] = [
  { icon: Notes, count: 100, label: '文章数' },
  { icon: Peoples, count: 200, label: '阅读量' },
  { icon: PreviewOpen, count: 300, label: '关注数' },
];
const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  height: 'auto',
  padding: 0,
  background: '#fff',
};

const contentStyle: React.CSSProperties = {
  background: 'transparent',
  marginBottom: '36px',
};

const layoutStyle = {
  borderRadius: 8,
  height: 'auto',
  background: 'transparent',
};

const Home: FC = () => {
  console.log('函数组件挂载完成');
  // const response = useApi({
  //   url: '/api',
  //   method: 'GET',
  //   immediate: true,
  // });
  // console.log('加载状态:', JSON.stringify(response));
  return (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        <Header style={headerStyle} className="mb-12">
          <Row gutter={36} className="text-black">
            <Col span={16}>
              <h3 className="text-3xl leading-8 mb-6">
                <span className="font-bold">Hi,</span>
                我是 Silvana
              </h3>
              <p className="text-base leading-14">专注全栈开发与技术分享</p>
              <div className="flex items-center justify-between gap-x-2 h-auto">
                {statsData.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>
            </Col>
            <Col span={8}>
              <RadarChart />
            </Col>
          </Row>
        </Header>
        <Content style={contentStyle}>
          <FeaturedArticles />
        </Content>
        <Content style={contentStyle}>
          <LatestArticles />
        </Content>
      </Layout>
    </Flex>
  );
};

export default Home;
