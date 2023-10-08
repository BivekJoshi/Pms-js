import React, { Suspense } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Spinner from '../components/spinner/Spinner';
import ApplicationMessage from '../pages/auth/ApplicationMessage';
import ResetPasswordPage from '../pages/auth/ResetPasswordPage';

const LoginLayout = React.lazy(() => import('../layout/LoginLayout'));
const AppLayout = React.lazy(() => import('../layout/AppLayout'));
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));
const WatchList = React.lazy(() => import('../pages/watchlist/WatchList'));

const LoginPage = React.lazy(() => import('../pages/auth/LoginPage'));
const RegisterPage = React.lazy(() => import('../pages/auth/RegisterPage'));
const ApplicationPage = React.lazy(() =>
  import('../pages/auth/ApplicationPage')
);
const Verification = React.lazy(() => import('../pages/auth/Verification'));

export default function AppRoutes() {
  return (
    <HashRouter hashType='slash'>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<LoginLayout />}>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='application/status' element={<ApplicationPage />} />
            <Route path='verification' element={<Verification />} />
          </Route>
          <Route path='/' element={<AppLayout />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='watchlist' element={<WatchList />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
