import React, { Suspense } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Spinner from '../components/spinner/Spinner';
import ScrollToTop from '../utility/ScrollToTop';
// import PageNotFound from '../pages/PageNotFound/PageNotFound';

const LoginLayout = React.lazy(() => import('../layout/LoginLayout'));
const AppLayout = React.lazy(() => import('../layout/AppLayout'));
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));
const Profile = React.lazy(() => import('../pages/profile/Profile'));
const Alert = React.lazy(() => import('../pages/alert/Alert'));
const Portfolio = React.lazy(() => import('../pages/portfolio/Portfolio'));
const Research = React.lazy(() => import('../pages/research/Research'));

const WatchList = React.lazy(() => import('../pages/watchlist/WatchList'));

const LoginPage = React.lazy(() => import('../pages/auth/LoginPage'));
const RegisterPage = React.lazy(() => import('../pages/auth/RegisterPage'));
const ApplicationPage = React.lazy(() =>
  import('../pages/auth/ApplicationPage')
);
const Verification = React.lazy(() => import('../pages/auth/Verification'));
const ResetPasswordPage = React.lazy(() =>
  import('../pages/auth/ResetPasswordPage')
);
const ChangePasswordPage = React.lazy(() =>
  import('../pages/auth/ChangePasswordPage')
);
const ApplicationMessage = React.lazy(() =>
  import('../pages/auth/ApplicationMessage')
);
const ErrorPage = React.lazy(() => import('./../pages/error-page/ErrorPage'));
const Company = React.lazy(() => import('../pages/company/Company'));
const PageNotFound = React.lazy(() =>
  import('../pages/PageNotFound/PageNotFound')
);

export default function AppRoutes() {
  return (
    <HashRouter hashType='slash'>
      <ScrollToTop>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<LoginLayout />}>
              <Route path='login' element={<LoginPage />} />
              <Route path='register' element={<RegisterPage />} />
              <Route path='application/status' element={<ApplicationPage />} />
              <Route path='verification/:id' element={<Verification />} />
              <Route path='reset/password' element={<ResetPasswordPage />} />
              <Route
                path='reset-password/:id'
                element={<ChangePasswordPage />}
              />
              <Route
                path='status/message/:status'
                element={<ApplicationMessage />}
              />
            </Route>
            <Route path='/' element={<AppLayout />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='watchlist' element={<WatchList />} />
              <Route path='research' element={<Research />} />
              <Route path='portfolio' element={<Portfolio />} />
              <Route path='alert' element={<Alert />} />
              <Route path='profile' element={<Profile />} />
              <Route path='company/:script' element={<Company />} />
              <Route path='pagenotfound' element={<PageNotFound />} />
            </Route>
            <Route path='/error-page' element={<ErrorPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </HashRouter>
  );
}
