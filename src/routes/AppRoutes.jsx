import React, { Suspense } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Spinner from "../components/spinner/Spinner";
import ScrollToTop from "../utility/ScrollToTop";
import BonusShareCalulator from "../pages/calculator/bonus/BonusShareCalulator";
import RightShareCalulator from "../pages/calculator/right/RightShareCalulator";
import CAGRCalculator from "../pages/calculator/cagr/CAGRCalculator";
import SipPlanCalculator from "../pages/calculator/sip/SipPlanCalculator";
import DividendCalculator from "../pages/calculator/dividend/DividendCalculator";
import WeightedAveCal from "../pages/calculator/weighted/WeightedAveCal";
import KycForm from "../kyc/pages/KycForm";
import CorporateDetailsDp from "../kyc/dp/forms/corporate/CorporateDetailsDp";
import KycLayout from "../layout/KycLayout";

const LoginLayout = React.lazy(() => import("../layout/LoginLayout"));
const AppLayout = React.lazy(() => import("../layout/AppLayout"));
const Dashboard = React.lazy(() => import("../pages/dashboard/Dashboard"));
const Profile = React.lazy(() => import("../pages/profile/Profile"));
const Alert = React.lazy(() => import("../pages/alert/Alert"));
const Portfolio = React.lazy(() => import("../pages/portfolio/Portfolio"));
const Research = React.lazy(() => import("../pages/research/Research"));
const Sectors = React.lazy(() => import("../pages/research/sectors/Sectors"));
const EndOfTheDay = React.lazy(() =>
  import("../pages/research/Screener/endOfTheDay/EndOfTheDay")
);
const Technical = React.lazy(() =>
  import("../pages/research/Screener/technical/Technical")
);
const Fundamental = React.lazy(() =>
  import("../pages/research/Screener/technical/Technical")
);
const ResearchCompany = React.lazy(() =>
  import("../pages/research/company/Company")
);

const WatchList = React.lazy(() => import("../pages/watchlist/WatchList"));

const LoginPage = React.lazy(() => import("../pages/auth/LoginPage"));
const NewRegisterPage = React.lazy(() =>
  import("../pages/auth/NewRegisterPage")
);
const ApplicationPage = React.lazy(() =>
  import("../pages/auth/ApplicationPage")
);
const Verification = React.lazy(() => import("../pages/auth/Verification"));
const OtpVerification = React.lazy(() =>
  import("../pages/auth/OtpVerification")
);
const ResetPasswordPage = React.lazy(() =>
  import("../pages/auth/ResetPasswordPage")
);
const ForgetPasswordPage = React.lazy(() =>
  import("../pages/auth/ForgetPasswordPage")
);
const ChangePasswordPage = React.lazy(() =>
  import("../pages/auth/ChangePasswordPage")
);
const ApplicationMessage = React.lazy(() =>
  import("../pages/auth/ApplicationMessage")
);
const ErrorPage = React.lazy(() => import("./../pages/error-page/ErrorPage"));
const Company = React.lazy(() => import("../pages/company/Company"));
const BuySellCalculator = React.lazy(() =>
  import("../pages/calculator/buy-sell/BuySellCalculator")
);
const DevelopmentPage = React.lazy(() =>
  import("../pages/DevlopmentPage/DevlopmentPage")
);
import IndividualDocument from "./../kyc/pages/IndividualDocument";
import BankIndividualDpForms from "../kyc/dp/forms/individual/BankIndividualDpForms";
import IndividualTmsKyc from "../kyc/ViewKyc/Individual/IndividualTmsKyc";
import IndividualDPKyc from "../kyc/ViewKyc/Individual/IndividualDPKyc";

// import CorporatAddress from "../kyc/dp/forms/corporate/CorporatAddress";
import CorporatBankDetail from "../kyc/dp/forms/corporate/CorporatBankDetail";
import CorporatBoStatement from "../kyc/dp/forms/corporate/CorporatBoStatement";
import CorporatOwnershipDetails from "../kyc/dp/forms/corporate/CorporatOwnershipDetails";
import IndividualAddress from "../kyc/pages/IndividualAddress";
import CorporateAddress from "../kyc/pages/CorporateAddress";
import KycHomePage from "../kyc/pages/KyCHomePage";
import FamilyIndividualDpForms from "../kyc/dp/forms/individual/FamilyIndividualDpForms";

export default function AppRoutes() {
  return (
    <HashRouter hashType="slash">
      <ScrollToTop>
        <Suspense fallback={<Spinner />}>
          <Routes>
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
                path="demat-registration/i/document-details"
                element={<IndividualDocument />}
              />
              <Route
                path="demat-registration/i/basic-details"
                element={<KycForm />}
              />
              <Route
                path="demat-registration/i/address-details"
                element={<IndividualAddress />}
              />
              <Route
                path="demat-registration/i/family-details"
                element={<FamilyIndividualDpForms />}
              />
              <Route
                path="demat-registration/i/bank-details"
                element={<BankIndividualDpForms />}
              />
              <Route
                path="demat-registration/i/detail-verification"
                element={<IndividualDPKyc />}
              />
              <Route
                path="demat-registration/i/bank-details"
                element={<BankIndividualDpForms />}
              />
              <Route
                path="demat-registration/i/detail-verification"
                element={<IndividualDPKyc />}
              />
              <Route
                path="demat-registration/c/corporate-details"
                element={<CorporateDetailsDp />}
              />
              <Route
                path="demat-registration/c/corporate-address"
                element={<CorporateAddress />}
              />
              <Route
                path="demat-registration/c/corporate-bank-detail"
                element={<CorporatBankDetail />}
              />
              <Route
                path="demat-registration/c/corporate-bo-statement"
                element={<CorporatBoStatement />}
              />
              <Route
                path="demat-registration/c/corporate-ownership-details"
                element={<CorporatOwnershipDetails />}
              />
            </Route>

            <Route path="/" element={<AppLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="watchlist" element={<WatchList />} />
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
