import AboutUs from "../Pages/why-afrobeutic/AboutUs";
import AfroCentric from "../Pages/why-afrobeutic/AfroCentric";
import AI from "../Pages/why-afrobeutic/AI";
import Apis from "../Pages/why-afrobeutic/Apis";
import Blog from "../Pages/why-afrobeutic/Blog";
import CustomerEngagement from "../Pages/why-afrobeutic/CustomerEngagement";
import OurMission from "../Pages/why-afrobeutic/OurMission";
import WhyAfrobeutic from "../Pages/why-afrobeutic/WhyAfrobeutic";

export const whyAfrobeuticRoutes = [
  // Company
  {
    path: "/why-afrobeutic/company/why-afrobeutic",
    element: <WhyAfrobeutic />,
    loader: () => fetch("/zigZagSection.json"),
  },
  {
    path: "/why-afrobeutic/company/about-us",
    element: <AboutUs />,
  },
  {
    path: "/why-afrobeutic/company/our-mission",
    element: <OurMission />,
  },
  // Our Platform
  {
    path: "/why-afrobeutic/our-platform/afro-centric",
    element: <AfroCentric />,
  },
  {
    path: "/why-afrobeutic/our-platform/customer-engagement",
    element: <CustomerEngagement />,
  },
  {
    path: "/why-afrobeutic/our-platform/ai",
    element: <AI />,
  },

  // Resources
  {
    path: "/why-afrobeutic/resources/blogs",
    element: <Blog />,
  },
  {
    path: "/why-afrobeutic/resources/apis",
    element: <Apis />,
  },
];
