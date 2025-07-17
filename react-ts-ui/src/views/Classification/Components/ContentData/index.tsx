import React from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space, Tag } from 'antd';

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `React 18新特性详解与实践指南${i}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description: ['Vue', 'React'],
  content:
    '深入解析React18带来的并发泣染、自动批处理、Suspense服务端泣染等重要特性，并通过实际案例展示如何在项目中最大化利用这些新功能。',
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ContentData: React.FC = () => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={data}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText
            icon={StarOutlined}
            text="156"
            key="list-vertical-star-o"
          />,
          <IconText
            icon={LikeOutlined}
            text="156"
            key="list-vertical-like-o"
          />,
          <IconText
            icon={MessageOutlined}
            text="2"
            key="list-vertical-message"
          />,
        ]}
        extra={<div>2023/12</div>}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description.map((tag, index) => {
            return (
              <Tag key={index} color="success">
                {tag}
              </Tag>
            );
          })}
        />
        {item.content}
      </List.Item>
    )}
  />
);

export default ContentData;
