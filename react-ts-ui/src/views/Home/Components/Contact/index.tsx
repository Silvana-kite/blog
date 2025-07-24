import React from 'react';
import { Col, Flex, Layout, Row, Typography } from 'antd';
import { MainFlexStyle } from './index.style';
import './index.less';
import { Header } from 'antd/es/layout/layout';

const Contact: React.FC = () => {
  return (
    <Layout className="contact-container" id="Contact" style={MainFlexStyle}>
      <Header className="contact-header-container">
        <Flex gap="large" className="title">
          <span>CONTACE</span>
          <span>ME</span>
        </Flex>
      </Header>
      <Row gutter={16} className='flex-container' justify="space-around">
        <Col span={11} className='flex-left'>col-12</Col>
        <Col span={11} className='flex-right'>col-12</Col>
      </Row>
    </Layout>
  );
};

export default Contact;
