// 创建路由上下文
// 使用 React Context 管理路由状态和权限：
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { RouteConfig } from '@/router/types';

interface RouterContextType {
  routes: RouteConfig[];
  currentRoute: RouteConfig | null;
  setCurrentRoute: (route: RouteConfig | null) => void;
}

export const RouterContext = createContext<RouterContextType>({
  routes: [],
  currentRoute: null,
  setCurrentRoute: () => {},
});

export const RouterProvider = ({
  children,
  routes,
}: {
  children: ReactNode;
  routes: RouteConfig[];
}) => {
  const [currentRoute, setCurrentRoute] = useState<RouteConfig | null>(null);

  return (
    <RouterContext.Provider value={{ routes, currentRoute, setCurrentRoute }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);
