import React from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { formContainerStyle } from '../Styles/Login.style';

const LoginForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('登录表单提交:', values);
  };

  return (
    <Form name="login" onFinish={onFinish} layout="vertical" style={formContainerStyle}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder="请输入账号" size="large" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password placeholder="请输入密码" size="large" prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
