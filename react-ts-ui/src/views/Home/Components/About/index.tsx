import React from 'react';
import { Button, Col, Flex, Image, Layout, Row, Typography } from 'antd';
import { MainFlexStyle } from './index.style';
import './index.less';
import { Content, Header } from 'antd/es/layout/layout';
import { Html5TwoTone } from '@ant-design/icons';
const About: React.FC = () => {
  return (
    <Layout id="About" style={MainFlexStyle} className='about-container'>
      <Header className="ablout-header-container">
        <Flex gap="large" className="title">
          <span>ABOUT</span>
          <span>ME</span>
        </Flex>
      </Header>
      <Content className="content-container">
        <Image
          width="40%"
          preview={false}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          className="img-box"
        />
        <Flex vertical gap="large" className="flex-container">
          <Typography.Title level={3} className="h3-title">
            前端开发工程师/个人开发者
          </Typography.Title>
          <Typography.Text className="text">
            我是一名充满热情的前端开发人员，对赛博朋克美学和沉浸式数字体验有着深厚的热爱。我的
            工作处于科技与艺术的交汇点，所创建的界面不仅功能完备，而且在视觉上也令人叹为观止。
          </Typography.Text>
          <Typography.Text className="text">
            凭借超过5年的Web开发经验，我专注于创建响应式、交互式的网站和应用程序
            这些作品突破了传统设计的界限。
          </Typography.Text>
          <Row gutter={16}>
            <Col span={12} className='gutter-col'>
              <Flex gap="middle" align='center'>
                <Html5TwoTone style={{fontSize: 36}} />
                <div>
                  <p className='h5'>Front Development</p>
                  <p className='p-text'>HTML,CSS,JavaScript,Vue</p>
                </div>
              </Flex>
            </Col>
            <Col span={12} className='gutter-col'>
              <Flex gap="middle" align='center'>
                <Html5TwoTone style={{fontSize: 36}} />
                <div>
                  <p className='h5'>Front Development</p>
                  <p className='p-text'>HTML,CSS,JavaScript,Vue</p>
                </div>
              </Flex>
            </Col>
            <Col span={12} className='gutter-col'>
              <Flex gap="middle" align='center'>
                <Html5TwoTone style={{fontSize: 36}} />
                <div>
                  <p className='h5'>Front Development</p>
                  <p className='p-text'>HTML,CSS,JavaScript,Vue</p>
                </div>
              </Flex>
            </Col>
            <Col span={12} className='gutter-col'>
              <Flex gap="middle" align='center'>
                <Html5TwoTone style={{fontSize: 36}} />
                <div>
                  <p className='h5'>Front Development</p>
                  <p className='p-text'>HTML,CSS,JavaScript,Vue</p>
                </div>
              </Flex>
            </Col>
          </Row>
          <Button className='btn'>让我们一起努力</Button>
        </Flex>
      </Content>
    </Layout>
  );
};

export default About;
