import { useAuth } from '@/hooks/useAuth';
import { Route, Routes } from 'react-router-dom';
import { userRoutes, loginRoutes } from './routes';

export const AppRouter = () => {
  const isAuth = useAuth();
  return (
    <Routes>
      {isAuth
        ? userRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))
        : loginRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
    </Routes>
  );
};
