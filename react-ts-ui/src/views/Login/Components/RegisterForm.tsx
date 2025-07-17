import React from 'react';
import { Form, Input, Button } from 'antd';
import { formContainerStyle } from '../Styles/Login.style';

const RegisterForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('注册表单提交:', values);
  };

  return (
    <Form name="register" onFinish={onFinish} layout="vertical" style={formContainerStyle}>
      <Form.Item
        name="email"
        rules={[{ required: true, type: 'email', message: '请输入邮箱' }]}
      >
        <Input placeholder="邮箱" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password placeholder="密码" />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          { required: true, message: '请确认密码' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('两次输入的密码不一致'));
            },
          }),
        ]}
      >
        <Input.Password placeholder="确认密码" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
