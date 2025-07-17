// 创建模块化的路由配置，便于维护和扩展：
import { RouteConfig } from './types';
import { lazy } from 'react';
const HomePage = lazy(() => import('@/views/Home'));
const AboutPage = lazy(() => import('@/views/About'));
const ClassificationPage = lazy(() => import('@/views/Classification'));
export const routes: RouteConfig[] = [
  {
    path: '/',
    element: lazy(() => import('@/views/Login')),
    meta: { title: '登录' },
  },
  {
    path: '/login',
    element: lazy(() => import('@/views/Login')),
    meta: { title: '登录' },
  },
  {
    path: '/home',
    element: HomePage,
    meta: { title: '首页' },
  },
  {
    path: '/classification',
    element: ClassificationPage,
    meta: { title: '分类' },
  },
  {
    path: '/about',
    element: AboutPage,
    meta: { title: '关于' },
  },
];
