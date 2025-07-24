import React, { useState } from 'react';
import { Button, Col, Flex, Image, Layout, Row, Tag, Typography } from 'antd';
import { MainFlexStyle } from './index.style';
import './index.less';
import { Header } from 'antd/es/layout/layout';
import { CodepenOutlined, EyeOutlined } from '@ant-design/icons';

interface BtnItem {
  label?: string;
  value: string;
}
interface ModalItem extends BtnItem {
  imgSrc: string;
  title: string;
  description: string;
  tags: string[];
}
const BtnData: BtnItem[] = [
  { label: '全部', value: 'all' },
  { label: '网页', value: 'web' },
  { label: '用户界面设计', value: 'ui' },
  { label: '应用程序', value: 'app' },
];

const ModalData: ModalItem[] = [
  {
    value: 'web',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'web',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'web',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'web',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'web',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'web',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'web',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'web',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'app',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'ui',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'app',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'app',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'ui',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'ui',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'ui',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'ui',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'ui',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'app',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
  {
    value: 'app',
    imgSrc:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    title: 'web',
    description: '介介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍绍',
    tags: ['html', 'css', 'javascript'],
  },
];
const Projects: React.FC = () => {
  let [btnValue, setBtnValue] = useState<string>('all');

  const changeBtn = (value: string) => {
    console.log(value);
    setBtnValue(value);
  };

  const filterData = btnValue === 'all' ? ModalData : ModalData.filter(item => item.value === btnValue);
  return (
    <Layout className="project-container" id="Project" style={MainFlexStyle}>
      <Header className="project-header-container">
        <Flex gap="large" className="title">
          <span>My</span>
          <span>PROJECT</span>
        </Flex>
      </Header>
      <Flex
        justify="center"
        align="cenetr"
        gap="large"
        wrap
        className="content-container"
      >
        {BtnData.map((item) => {
          return (
            <Button
              key={item.value}
              className={`btn ${btnValue === item.value ? 'active' : ''}`}
              onClick={() => changeBtn(item.value)}
            >
              {item.label}
            </Button>
          );
        })}
      </Flex>
      <Row
        className="project-row"
        gutter={[16, 16]}
        align="middle"
      >
        {filterData.map((item, index) => {
          return (
            <Col className="project-item" span={7}>
              <Image
                width="100%"
                height="100%"
                preview={false}
                src={item.imgSrc}
              />
              <Flex key={index} vertical gap="large" className="project-modal">
                <Typography.Title level={3} style={{ color: '#fff' }}>
                  {item.title}
                </Typography.Title>
                <p className="modal-p">{item.description}</p>
                <Flex style={{ marginBottom: '16px' }}>
                  {item.tags.map((tag, tagIndex) => {
                    return (
                      <Tag key={tagIndex} color="blue">
                        {tag}
                      </Tag>
                    );
                  })}
                </Flex>
                <Flex gap="middle">
                  <Button icon={<EyeOutlined />}>View</Button>
                  <Button icon={<CodepenOutlined />}>Code</Button>
                </Flex>
              </Flex>
            </Col>
          );
        })}
      </Row>
    </Layout>
  );
};

export default Projects;
