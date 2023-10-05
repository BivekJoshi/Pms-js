import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import Spinner from '../components/spinner/Spinner';
const LoginLayout = React.lazy(() => import('../layout/LoginLayout'));
const AppLayout = React.lazy(() => import('../layout/AppLayout'));

const LoginPage = React.lazy(() => import('../pages/auth/LoginPage'));
const RegisterPage = React.lazy(() => import('../pages/auth/RegisterPage'));
const ApplicationPage = React.lazy(() =>
  import('../pages/auth/ApplicationPage')
);
const Verification = React.lazy(() => import('../pages/auth/Verification'));

export default function AppRoutes() {
  const [token, setToken] = useState(localStorage.token);
  console.log('🚀 ~ file: AppRoutes.jsx:16 ~ AppRoutes ~ token:', token);

  useEffect(() => {
    setToken(localStorage.token);
  }, []);
  return (
    <HashRouter hashType='slash'>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path='/'
            exact
            element={token ? <Navigate to='/login' /> : <LoginLayout />}
          >
            <Route path='/login' exact element={<LoginPage />} />
            <Route path='/register' exact element={<RegisterPage />} />
            <Route
              path='/application/status'
              exact
              element={<ApplicationPage />}
            />
            <Route path='/verification' exact element={<Verification />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
