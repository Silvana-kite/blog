import React from 'react';
import { Row, Col } from 'antd';

const Footer:React.FC = () => (
  <div className="footer-container">
    <Row justify="center" className="mb-2">
      <Col>
        登录表示您已阅读并同意
        <a href="#" className="text-blue-600 mx-1">《用户协议》</a>
        和
        <a href="#" className="text-blue-600 mx-1">《隐私政策》</a>
      </Col>
    </Row>
    <Row justify="space-between" className="px-4">
      <Col>
        <a href="#" className="hover:text-blue-600">联系我们</a>
      </Col>
      <Col>
        <a href="#" className="hover:text-blue-600">帮助中心</a>
      </Col>
    </Row>
  </div>
);

export default Footer;