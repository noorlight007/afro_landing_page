import TermsAndConditions from "../Pages/footer/TermsAndConditions";
import PrivacyPolicy from "../Pages/footer/PrivacyPolicy";
import MetaPrivacyPolicy from "../Pages/footer/MetaPrivacyPolicy";
import CookiePolicy from "../Pages/footer/CookiePolicy";
import LegalInformation from "../Pages/footer/LegalInformation";
import Copyright from "../Pages/footer/Copyright";
import FraudProtection from "../Pages/footer/FraudProtection";

export const footerRoutes = [
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/meta-login-privacy-policy",
    element: <MetaPrivacyPolicy />,
  },
  {
    path: "/cookie-policy",
    element: <CookiePolicy />,
  },
  {
    path: "/legal-information",
    element: <LegalInformation />,
  },
  {
    path: "/copyright",
    element: <Copyright />,
  },
  {
    path: "/fraud-protection",
    element: <FraudProtection />,
  },
];
