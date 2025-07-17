import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@ant-design/v5-patch-for-react-19';
import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import App from '@/App.tsx';
import '@/styles/index.css';
// import './tailwind.css';

const px2rem = px2remTransformer({
  rootValue: 16, // 1rem = 16px（根据设计稿和项目需求调整）
  precision: 5,
  mediaQuery: true,
});
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyleProvider layer transformers={[px2rem]}>
      <ConfigProvider theme={{ cssVar: true, hashed: false }}>
        <App />
      </ConfigProvider>
    </StyleProvider>
  </StrictMode>,
);
