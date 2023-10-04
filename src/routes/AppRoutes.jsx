import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Spinner from '../components/spinner/Spinner';
const LoginLayout = React.lazy(() => import('../layout/LoginLayout'));
const LoginPage = React.lazy(() => import('../pages/auth/LoginPage'));
const RegisterPage = React.lazy(() => import('../pages/auth/RegisterPage'));
const ApplicationPage = React.lazy(() =>
  import('../pages/auth/ApplicationPage')
);
const Verification = React.lazy(() => import('../pages/auth/Verification'));

export default function AppRoutes() {
  return (
    <HashRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<LoginLayout />}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/application/status' element={<ApplicationPage />} />
            <Route path='/verification' element={<Verification />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
