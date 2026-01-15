import Statistics from "../Pages/Dashboard/Statistics";
import CreateBlogs from "../Pages/Dashboard/CreateBlogs";
import MyAddedBlogs from "../Pages/Dashboard/MyAddedBlogs";
import ContactRequests from "../Pages/Dashboard/ContactRequests";
import SubscribedNewsLetter from "../Pages/Dashboard/SubscribedNewsLetter";
import AdminPanelLayout from "../Layout/AdminPanelLayout";
import AdminRoute from "./AdminRoute";

export const adminRoutes = [
  {
    path: "/fqz/admin/panel",
    element: (
      <AdminRoute>
        <AdminPanelLayout />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <Statistics />,
      },
      {
        path: "/fqz/admin/panel/createBlogs",
        element: <CreateBlogs />,
      },
      {
        path: "/fqz/admin/panel/myAddedBlogs",
        element: <MyAddedBlogs />,
      },
      {
        path: "/fqz/admin/panel/contactRequests",
        element: <ContactRequests />,
      },
      {
        path: "/fqz/admin/panel/subscribedNewsLetter",
        element: <SubscribedNewsLetter />,
      },
    ],
  },
];
