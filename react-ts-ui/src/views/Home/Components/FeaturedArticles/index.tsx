import React, { FC } from 'react';
import { Typography, Flex } from 'antd';
import FlexCard from './components/FlexCard';
const { Title } = Typography;

interface cardItem {
  tagType: string;
  tagText: string;
  title: string;
  description: string;
  tags: string[];
  readTime: string;
  date: string;
  views: number;
}
const cardData: cardItem[] = [
  {
    tagType: 'blue',
    tagText: '精华',
    title: '深入理解React18新特性：并发渲染与自动批处理',
    description:
      '本文详细解析了React18中的并发渲染机制，以及自动批处理如何提升应用性能。',
    tags: ['Node.js', 'Vue'],
    readTime: '12分钟',
    date: '2023-12-01',
    views: 2341,
  },
  {
    tagType: 'red',
    tagText: '热门',
    title: '深入理解React18新特性：并发渲染与自动批处理',
    description:
      '本文详细解析了React18中的并发渲染机制，以及自动批处理如何提升应用性能。',
    tags: ['React', 'Vue'],
    readTime: '8分钟',
    date: '2025-12-01',
    views: 2341,
  },
  {
    tagType: 'green',
    tagText: '推荐',
    title: '深入理解React18新特性：并发渲染与自动批处理',
    description:
      '本文详细解析了React18中的并发渲染机制，以及自动批处理如何提升应用性能。',
    tags: ['Node.js', 'Vue'],
    readTime: '10分钟',
    date: '2024-12-01',
    views: 2341,
  },
  {
    tagType: 'purple',
    tagText: '新手',
    title: '深入理解React18新特性：并发渲染与自动批处理',
    description:
      '本文详细解析了React18中的并发渲染机制，以及自动批处理如何提升应用性能。',
    tags: ['React', 'Vue'],
    readTime: '15分钟',
    date: '2023-11-01',
    views: 2341,
  },
];

const FeaturedArticles: FC = () => {
  return (
    <div>
      <Title level={2} className="font-semibold">
        精选文章
      </Title>
      <Flex gap="large" wrap>
        {cardData.map((item, index) => {
          return <FlexCard key={index} {...item} />;
        })}
      </Flex>
    </div>
  );
};

export default FeaturedArticles;
