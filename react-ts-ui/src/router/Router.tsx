// src/router/Router.tsx
// 使用配置文件动态生成路由：
import React, { JSX } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouteConfig } from './types';
import { routes } from './config';
import PrivateRoute from '../components/PrivateRoute';
import ErrorPage from '@/views/ErrorPage';

const renderRoutes = (routes: RouteConfig[]): JSX.Element[] => {
  return routes.map((route, index) => {
    const { path, element, children, authRequired } = route;

    const routeElement = authRequired ? (
      <PrivateRoute>{React.createElement(element)}</PrivateRoute>
    ) : (
      React.createElement(element)
    );

    return (
      <Route key={index} path={path} element={routeElement}>
        {children && children.length > 0 ? renderRoutes(children) : null}
      </Route>
    );
  });
};

const Router = () => {
  return (
    <Routes>
      {renderRoutes(routes)}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
