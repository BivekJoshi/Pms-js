import React, { Suspense } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Spinner from "../components/spinner/Spinner";
import ScrollToTop from "../utility/ScrollToTop";

import KycForm from "../kyc/pages/KycForm";
import KycLayout from "../layout/KycLayout";

const BonusShareCalulator = React.lazy(
  () => import("../pages/calculator/bonus/BonusShareCalulator")
);
const RightShareCalulator = React.lazy(
  () => import("../pages/calculator/right/RightShareCalulator")
);
const CAGRCalculator = React.lazy(
  () => import("../pages/calculator/cagr/CAGRCalculator")
);
const SipPlanCalculator = React.lazy(
  () => import("../pages/calculator/sip/SipPlanCalculator")
);
const DividendCalculator = React.lazy(
  () => import("../pages/calculator/dividend/DividendCalculator")
);
const WeightedAveCal = React.lazy(
  () => import("../pages/calculator/weighted/WeightedAveCal")
);

const LoginLayout = React.lazy(() => import("../layout/LoginLayout"));
const AppLayout = React.lazy(() => import("../layout/AppLayout"));
const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));
const Profile = React.lazy(() => import("../pages/profile/Profile"));
const Alert = React.lazy(() => import("../pages/alert/Alert"));
const Portfolio = React.lazy(() => import("../pages/portfolio/Portfolio"));
const Research = React.lazy(() => import("../pages/research/Research"));
const Sectors = React.lazy(() => import("../pages/research/sectors/Sectors"));
const EndOfTheDay = React.lazy(
  () => import("../pages/research/Screener/endOfTheDay/EndOfTheDay")
);
const Technical = React.lazy(
  () => import("../pages/research/Screener/technical/Technical")
);
const Fundamental = React.lazy(
  () => import("../pages/research/Screener/technical/Technical")
);
const ResearchCompany = React.lazy(
  () => import("../pages/research/company/Company")
);

const WatchList = React.lazy(() => import("../pages/watchlist/WatchList"));

const LoginPage = React.lazy(() => import("../pages/auth/LoginPage"));
const NewRegisterPage = React.lazy(
  () => import("../pages/auth/NewRegisterPage")
);
const ApplicationPage = React.lazy(
  () => import("../pages/auth/ApplicationPage")
);
const Verification = React.lazy(() => import("../pages/auth/Verification"));
const OtpVerification = React.lazy(
  () => import("../pages/auth/OtpVerification")
);
const ResetPasswordPage = React.lazy(
  () => import("../pages/auth/ResetPasswordPage")
);
const ForgetPasswordPage = React.lazy(
  () => import("../pages/auth/ForgetPasswordPage")
);
const ChangePasswordPage = React.lazy(
  () => import("../pages/auth/ChangePasswordPage")
);
const ApplicationMessage = React.lazy(
  () => import("../pages/auth/ApplicationMessage")
);
const ErrorPage = React.lazy(() => import("./../pages/error-page/ErrorPage"));
const Company = React.lazy(() => import("../pages/company/Company"));
const BuySellCalculator = React.lazy(
  () => import("../pages/calculator/buy-sell/BuySellCalculator")
);
const DevelopmentPage = React.lazy(
  () => import("../pages/DevlopmentPage/DevlopmentPage")
);

const KycHomePage = React.lazy(() => import("../kyc/pages/KycHomePage"));
import {
  kycDpCorporateRoutes,
  kycDpIndividualRoutes,
  kycTmsCorporateRoutes,
  kycTmsIndividualRoutes,
  minorRoute,
} from "./kycRoutes";
import KycProtectedRoute from "./KycProtectedRoute";
import { useSelector } from "react-redux";
import VideoKyc from "../kyc/VideoKYC/VideoKyc";
import { getUser } from "../utility/userHelper";
import KycSubmitted from "../kyc/pages/KycSubmitted";

export default function AppRoutes() {
  const { H: clientType, I: formNature } = getUser();
  const isMinor = useSelector((state) => state.user?.isMinor);

  return (
    <HashRouter hashType="slash">
      <ScrollToTop>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="kyc-submitted" element={<KycSubmitted />} />

            <Route path="/" element={<LoginLayout />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<NewRegisterPage />} />
              <Route path="application/status" element={<ApplicationPage />} />
              <Route path="verification/:id" element={<Verification />} />
              <Route path="otp/verification" element={<OtpVerification />} />
              <Route path="reset/password" element={<ResetPasswordPage />} />
              <Route
                path="reset-password/:id"
                element={<ForgetPasswordPage />}
              />
              <Route path="change/password" element={<ChangePasswordPage />} />
              <Route
                path="status/message/:status"
                element={<ApplicationMessage />}
              />
            </Route>
            <Route path="/kyc" element={<KycLayout />}>
              <Route path="home" element={<KycHomePage />} />

              <Route
                element={
                  <KycProtectedRoute
                    redirectTo="/login"
                    allowedClientType="I"
                    allowedFormNature="DP"
                  />
                }
              >
                {!isMinor
                  ? kycDpIndividualRoutes.map((route) => {
                      const path =
                        formNature === "TMS"
                          ? route.path.replace(
                              "demat-registration",
                              "tms-registration"
                            )
                          : route.path;
                      return (
                        <Route
                          key={route.id}
                          path={path}
                          exact
                          element={<route.component />}
                        />
                      );
                    })
                  : kycDpIndividualRoutes
                      .slice(0, 1)
                      .concat(minorRoute, kycDpIndividualRoutes.slice(1))
                      .map((route) => {
                        const path =
                          formNature === "TMS"
                            ? route.path.replace(
                                "demat-registration",
                                "tms-registration"
                              )
                            : route.path;
                        return (
                          <Route
                            key={route.id}
                            path={path}
                            exact
                            element={<route.component />}
                          />
                        );
                      })}
              </Route>

              <Route
                element={
                  <KycProtectedRoute
                    redirectTo="/login"
                    allowedClientType="I"
                    allowedFormNature="TMS"
                  />
                }
              >
                {!isMinor
                  ? kycTmsIndividualRoutes.map((route) => {
                      const path =
                        formNature === "TMS"
                          ? route.path.replace(
                              "demat-registration",
                              "tms-registration"
                            )
                          : route.path;
                      return (
                        <Route
                          key={route.id}
                          path={path}
                          exact
                          element={<route.component />}
                        />
                      );
                    })
                  : kycTmsIndividualRoutes
                      .slice(0, 1)
                      .concat(minorRoute, kycTmsIndividualRoutes.slice(1))
                      .map((route) => {
                        const path =
                          formNature === "TMS"
                            ? route.path.replace(
                                "demat-registration",
                                "tms-registration"
                              )
                            : route.path;
                        return (
                          <Route
                            key={route.id}
                            path={path}
                            exact
                            element={<route.component />}
                          />
                        );
                      })}
              </Route>

              <Route
                element={
                  <KycProtectedRoute
                    redirectTo="/login"
                    allowedClientType="C"
                    allowedFormNature="DP"
                  />
                }
              >
                {kycDpCorporateRoutes.map((route) => {
                  // const path =
                  //   formNature === "TMS"
                  //     ? route.path.replace(
                  //         "demat-registration",
                  //         "tms-registration"
                  //       )
                  //     : route.path
                  return (
                    <Route
                      key={route.id}
                      path={route.path}
                      exact
                      element={<route.component />}
                    />
                  );
                })}
              </Route>

              <Route
                element={
                  <KycProtectedRoute
                    redirectTo="/login"
                    allowedClientType="C"
                    allowedFormNature="TMS"
                  />
                }
              >
                {kycTmsCorporateRoutes.map((route) => {
                  // const path =
                  //   formNature === "TMS"
                  //     ? route.path.replace(
                  //         "demat-registration",
                  //         "tms-registration"
                  //       )
                  //     : route.path
                  return (
                    <Route
                      key={route.id}
                      path={route.path}
                      exact
                      element={<route.component />}
                    />
                  );
                })}
              </Route>
              {/* <Route
                path="demat-registration/i/basic-details"
                element={<KycForm />}
              /> */}
              <Route path="video-kyc" element={<VideoKyc />} />
            </Route>

            <Route path="/" element={<AppLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="watchlist" element={<WatchList />} />
              <Route path="kyc-submitted" element={<KycSubmitted />} />
              <Route path="research">
                <Route path="markets" element={<Research />} />
                <Route path="sectors" element={<Sectors />} />
                <Route path="company" element={<ResearchCompany />} />
                <Route path="screener">
                  <Route path="fundamental" element={<Fundamental />} />
                  <Route path="technical" element={<Technical />} />
                  <Route path="end-of-day" element={<EndOfTheDay />} />
                </Route>
              </Route>
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="alert/:symbol" element={<Alert />} />
              <Route path="alert" element={<Alert />} />
              <Route path="profile" element={<Profile />} />
              <Route path="company/:script" element={<Company />} />
              <Route path="under-construction" element={<DevelopmentPage />} />
              <Route
                path="bonus-share-calculator"
                element={<BonusShareCalulator />}
              />
              <Route
                path="right-share-calculator"
                element={<RightShareCalulator />}
              />
              <Route
                path="/buy-sell-calculator"
                element={<BuySellCalculator />}
              />
              <Route path="/cagr-calculator" element={<CAGRCalculator />} />
              <Route
                path="/sip-investment-plan-calculator"
                element={<SipPlanCalculator />}
              />
              <Route
                path="/dividend-calculator"
                element={<DividendCalculator />}
              />
              <Route
                path="/weighted-average-calculator"
                element={<WeightedAveCal />}
              />
            </Route>
            {/* <Route path='/error-page' element={<ErrorPage />} /> */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </HashRouter>
  );
}
