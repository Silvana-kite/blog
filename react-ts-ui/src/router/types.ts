// 创建路由配置文件，使用 TypeScript 接口确保类型安全：
import React from 'react';

export interface RouteConfig {
  path: string;
  element: React.ComponentType;
  children?: RouteConfig[];
  name?: string;
  authRequired?: boolean;
  meta?: {
    title: string;
    icon?: React.ComponentType;
  };
}
