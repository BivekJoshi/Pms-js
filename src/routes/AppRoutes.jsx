import React, { Suspense } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Spinner from '../components/spinner/Spinner';
import ScrollToTop from '../utility/ScrollToTop';

const LoginLayout = React.lazy(() => import('../layout/LoginLayout'));
const AppLayout = React.lazy(() => import('../layout/AppLayout'));
const Dashboard = React.lazy(() => import('../pages/dashboard/Dashboard'));
const Profile = React.lazy(() => import('../pages/profile/Profile'));
const Alert = React.lazy(() => import('../pages/alert/Alert'));
const Portfolio = React.lazy(() => import('../pages/portfolio/Portfolio'));
const Research = React.lazy(() => import('../pages/research/Research'));
const Sectors = React.lazy(() => import('../pages/research/sectors/Sectors'));
const EndOfTheDay = React.lazy(() =>
  import('../pages/research/Screener/endOfTheDay/EndOfTheDay')
);
const Technical = React.lazy(() =>
  import('../pages/research/Screener/technical/Technical')
);
const Fundamental = React.lazy(() =>
  import('../pages/research/Screener/technical/Technical')
);
const ResearchCompany = React.lazy(() =>
  import('../pages/research/company/Company')
);

const WatchList = React.lazy(() => import('../pages/watchlist/WatchList'));

const LoginPage = React.lazy(() => import('../pages/auth/LoginPage'));
const RegisterPage = React.lazy(() => import('../pages/auth/RegisterPage'));
const ApplicationPage = React.lazy(() =>
  import('../pages/auth/ApplicationPage')
);
const Verification = React.lazy(() => import("../pages/auth/Verification"));
const OtpVerification = React.lazy(() => import("../pages/auth/OtpVerification"));
const ResetPasswordPage = React.lazy(() =>
  import('../pages/auth/ResetPasswordPage')
);
const ForgetPasswordPage = React.lazy(() =>
  import('../pages/auth/ForgetPasswordPage')
);
const ChangePasswordPage = React.lazy(() =>
  import('../pages/auth/ChangePasswordPage')
);
const ApplicationMessage = React.lazy(() =>
  import('../pages/auth/ApplicationMessage')
);
const ErrorPage = React.lazy(() => import('./../pages/error-page/ErrorPage'));
const Company = React.lazy(() => import('../pages/company/Company'));
const DevelopmentPage = React.lazy(() =>
  import('../pages/DevlopmentPage/DevlopmentPage')
);

export default function AppRoutes() {
  return (
    <HashRouter hashType='slash'>
      <ScrollToTop>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<LoginLayout />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="application/status" element={<ApplicationPage />} />
              <Route path="verification/:id" element={<Verification />} />
              <Route path="otp/verification" element={<OtpVerification />} />
              <Route path="reset/password" element={<ResetPasswordPage />} />
              <Route
                path='reset-password/:id'
                element={<ForgetPasswordPage />}
              />
              <Route path='change/password' element={<ChangePasswordPage />} />
              <Route
                path='status/message/:status'
                element={<ApplicationMessage />}
              />
            </Route>

            <Route path='/' element={<AppLayout />}>
              <Route path='dashboard' element={<Dashboard />} />
              <Route path='watchlist' element={<WatchList />} />
              <Route path='research'>
                <Route path='markets' element={<Research />} />
                <Route path='sectors' element={<Sectors />} />
                <Route path='company' element={<ResearchCompany />} />
                <Route path='screener'>
                  <Route path='fundamental' element={<Fundamental />} />
                  <Route path='technical' element={<Technical />} />
                  <Route path='end-of-day' element={<EndOfTheDay />} />
                </Route>
              </Route>
              <Route path='portfolio' element={<Portfolio />} />
              <Route path='alert/:symbol' element={<Alert />} />
              <Route path='alert' element={<Alert />} />
              <Route path='profile' element={<Profile />} />
              <Route path='company/:script' element={<Company />} />
              <Route path='under-construction' element={<DevelopmentPage />} />
            </Route>
            <Route path='/error-page' element={<ErrorPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </HashRouter>
  );
}
