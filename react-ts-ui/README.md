# React + TypeScript + Vite

个人技术博客
├── 内容展示层
│ ├── 首页（信息流+精选文章）
│ ├── 文章详情页（代码高亮+目录导航）
│ ├── 分类归档页（按技术栈/难度/发布时间）
│ ├── 标签云页（关键词聚合）
│ ├── 项目作品集（技术项目案例）
│ └── 关于我（个人履历+技术路线图）
├── 交互功能层
│ ├── 评论系统（集成Giscus/Disqus）
│ ├── 搜索功能（全文检索+标签联想）
│ ├── 收藏/点赞（本地存储+同步）
│ ├── 主题切换（亮色/深色模式）
│ └── 分享功能（一键复制链接+社交平台）
└── 管理后台（可选）
├── 文章编辑器（Markdown+实时预览）
├── 内容分类管理
├── 数据统计（阅读量/访客来源）
└── 评论审核

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
