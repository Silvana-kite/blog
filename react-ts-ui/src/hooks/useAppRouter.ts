// src/hooks/useAppRouter.ts
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { routes } from '../router/config';

type RouteName = keyof typeof routeMap;

const routeMap = routes.reduce(
  (acc, route) => {
    if (route.name) {
      acc[route.name] = route.path;
    }
    return acc;
  },
  {} as Record<string, string>,
);

export const useAppRouter = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const navigateTo = (name: RouteName, params?: Record<string, string>) => {
    let path = routeMap[name];

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        path = path.replace(`:${key}`, value);
      });
    }

    navigate(path);
  };

  return {
    navigateTo,
    params,
    location,
  };
};
