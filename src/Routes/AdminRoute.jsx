import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("admin_uid");

  if (!isLoggedIn) {
    return <Navigate to="/fqz/admin/login" />;
  }

  return children;
};

export default AdminRoute;
