import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vitePluginImp from 'vite-plugin-imp';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    tailwindcss(),
    vitePluginImp({
      libList: [
        {
          libName: '@icon-park/react',
          libDirectory: 'es/icons',
          camel2DashComponentName: false, //关闭驼峰转短线
        },
        {
          libName: 'antd',
          style: (name) => {
            if (name === 'col' || name === 'row') {
              return 'antd/lib/style/index.js';
            }
            return `antd/es/${name}/style/index.js`;
          },
        },
      ],
    }),
  ],
  base: './', // 设置基础路径
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'], // 设置文件解析顺序
    alias: {
      '@': path.resolve(__dirname, 'src'), // 设置 @ 为 src 的别名
    },
  },
  server: {
    port: 3000, // 设置开发服务器端口
    open: true, // 启动时自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // 代理目标地址
        changeOrigin: true, // 是否改变源地址
        rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径
      },
    },
  },
  build: {
    outDir: 'dist', // 设置输出目录
    sourcemap: true, // 是否生成 source map
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
  // 配置 CSS 预处理器
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持内联样式
        // 配置 Less 解析别名
        paths: [path.resolve(__dirname, 'src')],
        modifyVars: {
          'primary-color': '#1677ff', // 修改主题色
          'link-color': '#1677ff', // 链接色
          'border-radius-base': '2px', // 组件/浮层圆角
          'font-size-base': '14px', // 主字号
          'text-color': 'rgba(0, 0, 0, 0.85)', // 主文本色
          'heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
        },
      },
    },
  },
  define: {
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  },
  optimizeDeps: {
    include: ['@icon-park/react', 'antd'],
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './src/setupTests.ts',
  //   coverage: {
  //     provider: 'v8',
  //     reporter: ['text', 'json', 'html'],
  //     include: ['src/**/*.{ts,tsx}'],
  //     exclude: ['src/**/*.test.{ts,tsx}', 'src/setupTests.ts'],
  //   },
  // },
  preview: {
    port: 5000, // 设置预览服务器端口
    open: true, // 启动时自动打开浏览器
  },
  worker: {
    format: 'es', // 设置 Web Worker 的格式为 ES 模块
  },
});
