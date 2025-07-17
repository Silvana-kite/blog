import React, { FC } from 'react';
import { Eyes } from '@icon-park/react';
import { Typography, Flex, Tag } from 'antd';
const { Title, Paragraph } = Typography;

const flexStyle = {
  padding: '12px',
};
const titleStyle = {
  fontSize: '16px',
  fontWeight: 500,
};
interface FlexCardProps {
  tagType: string;
  tagText: string;
  title: string;
  description: string;
  tags: string[];
  readTime: string;
  date: string;
  views: number;
}
const FlexCard: FC<FlexCardProps> = ({
  tagType = 'red',
  tagText = '精华',
  title = '深入理解React18新特性：并发渲染与自动批Node.js 微服 处理',
  description = '本文详细解析了React18中的并发渲染机制，以及自动批处理如方案选择何提升应用性能本文详细解析了React18中的并发渲染机制，以及自动批处理如方案选择何提升应用性能本文详细解析了React18中的并发渲染机制，以及自动批处理如方案选择何提升应用性能',
  tags = ['Recat', 'Vue'],
  readTime = '8分钟',
  date = '2023-12-01',
  views = 2341,
}) => {
  return (
    <Flex
      gap="middle"
      vertical
      style={flexStyle}
      className="w-1/4 border border-gray-200 curpor-pointer hover:shadow-lg transition-shadow duration-300 rounded-lg p-4 bg-white"
    >
      <Tag color={tagType} className="w-10">
        {tagText}
      </Tag>
      <Title level={4} style={titleStyle}>
        {title}
      </Title>
      <Paragraph ellipsis={{ rows: 2 }}>{description}</Paragraph>
      <Flex gap="middle">
        {tags.map((tag, index) => (
          <Tag color="#108ee9" key={index} className="w-auto">
            {tag}
          </Tag>
        ))}

        <span>{readTime}</span>
        <time dateTime={date}>{date}</time>
        <Eyes
          theme="outline"
          size="22"
          fill="#7f9090"
          strokeWidth={2}
          strokeLinecap="butt"
        />
        <span>{views}</span>
      </Flex>
    </Flex>
  );
};

export default FlexCard;
