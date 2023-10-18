import { lazy, useEffect } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from './utils/Hooks/useAuth';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { refreshUser } from './redux/auth/authOperations';
import { Loader } from './components/Loader/Loader';
import { RestrictedRoute } from './RestrictedRoute';

const Page404 = lazy(() => import('./pages/404Page/404Page.jsx'));
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Login = lazy(() => import('./pages/Login/Login.jsx'));
const Register = lazy(() => import('./pages/Register/Register.jsx'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { isRefresh } = useAuth();

  return isRefresh ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 2000,
          style: {
            background: 'rgb(178, 159, 126)',
            color: 'rgb(255, 255, 255)',
          },
        }}
      />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<RestrictedRoute component={<Register />} redirectTo="/" />} />
          <Route path="login" element={<RestrictedRoute component={<Login />} redirectTo="/" />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
