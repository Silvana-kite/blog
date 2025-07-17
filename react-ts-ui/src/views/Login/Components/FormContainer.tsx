import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '登录',
    children: <LoginForm/>,
  },
  {
    key: '2',
    label: '注册',
    children: <RegisterForm/>,
  }
];
const FormContainer: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} >

    </Tabs>
  );
};

export default FormContainer;
