import React, { FC } from 'react';
import { Divider, Flex, Typography } from 'antd';
import './Styles/index.less';
import { TextStyle, TitleStyle, flexStyle, iconStyle } from './Styles/Login.style';
import FormContainer from './Components/FormContainer';
import { WechatOutlined } from '@ant-design/icons';
import Footer from './Components/Footer';

const {Title, Text} = Typography;

const Login: FC = () => {
  return (
    <Flex style={flexStyle}>
      {/* 左侧背景图 */}
      <div className='left-img'></div>
      {/* 右侧表单 */}
      <div className='right-form'>
        <div className="form-header">
          <div className="logo"></div>
          <Title style={TitleStyle}>九天阵自媒体效率</Title>
        </div>
        <Text type="secondary" style={TextStyle}>一键管理全平台自媒体账号</Text>
        <FormContainer/>
        <Divider>其他登陆方式</Divider>
        <Flex justify='center'>
          <WechatOutlined style={iconStyle} />
        </Flex>
        <Footer/>
      </div>
    </Flex>
  );
};

export default Login;
