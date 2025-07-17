// src/components/Navigation.tsx
import { Link, useLocation } from 'react-router-dom';
import { useRouter } from '@/contexts/RouterContext';
import { RouteConfig } from '@/router/types';
import { useAuth } from '@/contexts/AuthContext';
import { FC, JSX } from 'react';
import { Col, Row } from 'antd';

const Navigation: FC = () => {
  const { routes } = useRouter();
  const location = useLocation();

  const getActiveRoute = (path: string) => {
    // 处理根路径
    if (path === '/') {
      return location.pathname === '/';
    }

    // 将动态路由参数转换为正则表达式
    const regexPath = path
      .replace(/:[^/]+/g, '([^/]+)') // 将 :id 转换为正则捕获组
      .replace(/\//g, '\\/'); // 转义斜杠

    const regex = new RegExp(`^${regexPath}$`);
    return regex.test(location.pathname);
  };

  const renderMenuItems = (routes: RouteConfig[]): JSX.Element[] => {
    return routes
      .filter(
        (route) =>
          !route.authRequired ||
          (route.authRequired && useAuth().isAuthenticated),
      )
      .map((route, index) => {
        const { path, meta, children } = route;

        if (children && children.length > 0) {
          return (
            <li key={index}>
              <Link
                to={path}
                className={`${getActiveRoute(path) ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              >
                {meta?.title}fff
              </Link>
              <ul>{renderMenuItems(children)}</ul>
            </li>
          );
        }

        return (
          <li key={index} className="text-xl tracking-wide leading-6">
            <Link
              to={path}
              className={`${getActiveRoute(path) ? 'font-semibold text-blue-600 border-b-2 border-blue-600' : 'text-inherit'}`}
            >
              {meta?.title}
            </Link>
          </li>
        );
      });
  };

  return (
    <nav className="w-auto">
      <ul className="flex items-center justify-center gap-3">
        {renderMenuItems(routes)}
      </ul>
    </nav>
  );
};

export default Navigation;
