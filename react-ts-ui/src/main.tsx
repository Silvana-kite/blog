import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@ant-design/v5-patch-for-react-19';
import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme } from 'antd';
import App from '@/App.tsx';
import '@/styles/index.css';
// import './tailwind.css';

const px2rem = px2remTransformer({
  rootValue: 16, // 1rem = 16px（根据设计稿和项目需求调整）
  precision: 5,
  mediaQuery: true,
});
const {defaultAlgorithm, darkAlgorithm} = theme

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyleProvider layer transformers={[px2rem]}>
      <ConfigProvider
        theme={{
          cssVar: true,
          hashed: false,
          token: {
            colorPrimary: '#165DFF', // 主色调
            colorSuccess: '#00B42A', // 成功色
            colorWarning: '#FF7D00', // 警告色
            colorError: '#F53F3F',   // 错误色
            colorInfo: '#165DFF',    // 信息色
            colorTextBase: '#1D2129',// 基础文本色
            colorBgBase: '#F2F3F5',  // 基础背景色
          },
          algorithm: darkAlgorithm, // 使用默认主题算法
        }}
      >
        <App />
      </ConfigProvider>
    </StyleProvider>
  </StrictMode>,
);
