import MainLayout from "../Layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/Shared/ErrorPage";
import { authRoutes } from "./authRoutes";
import { adminRoutes } from "./adminRoutes";
import { footerRoutes } from "./footerRoutes";
import { mainRoutes } from "./mainRoutes";
import { whyAfrobeuticRoutes } from "./whyAfrobeuticRoutes";
import { smartToolkitRoutes } from "./smartToolkitRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      //main Routes
      ...mainRoutes,

      // smart toolkit Routes
      ...smartToolkitRoutes,

      // why Afrobeutic Routes
      ...whyAfrobeuticRoutes,

      // footer
      ...footerRoutes,
    ],
  },

  // Authentication
  ...authRoutes,

  // admin panel
  ...adminRoutes,
]);
