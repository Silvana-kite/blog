// 创建模块化的路由配置，便于维护和扩展：
import { RouteConfig } from './types';
import { lazy } from 'react';
export const routes: RouteConfig[] = [
  {
    path: '/',
    element: lazy(() => import('@/views/Home')),
    meta: { title: '首页' },
  },
  {
    path: '/home',
    element: lazy(() => import('@/views/Home')),
    meta: { title: '首页' },
  },
];
