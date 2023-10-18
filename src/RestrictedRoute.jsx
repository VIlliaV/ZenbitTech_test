// import { Navigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAuth } from './utils/Hooks/useAuth';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogin } = useAuth();

  return !isLogin ? Component : <Navigate to={redirectTo} />;
};
