import AIBookingSystem from "../Pages/smart-toolkit/AIBookingSystem";
import ClientDatabase from "../Pages/smart-toolkit/ClientDatabase";
import IndividualStylists from "../Pages/smart-toolkit/IndividualStylists";
import LookBook from "../Pages/smart-toolkit/LookBook";
import SalonBusiness from "../Pages/smart-toolkit/SalonBusiness";
import SalonManagements from "../Pages/smart-toolkit/SalonManagements";
import SocialChatbots from "../Pages/smart-toolkit/SocialChatbots";

export const smartToolkitRoutes = [
  {
    path: "/smart-toolkit/use-cases/salon-management",
    element: <SalonManagements />,
  },
  {
    path: "/smart-toolkit/use-cases/social-chatbots",
    element: <SocialChatbots />,
  },
  {
    path: "/smart-toolkit/use-cases/ai-booking-system",
    element: <AIBookingSystem />,
  },
  {
    path: "/smart-toolkit/use-cases/client-database",
    element: <ClientDatabase />,
  },
  {
    path: "/smart-toolkit/use-cases/look-book",
    element: <LookBook />,
  },
  {
    path: "/smart-toolkit/industries/salon-business",
    element: <SalonBusiness />,
  },
  {
    path: "/smart-toolkit/industries/individual-stylists",
    element: <IndividualStylists />,
  },
];
