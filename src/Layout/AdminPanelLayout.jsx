import React from "react";
import Sidebar from "../Pages/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import Container from "../Components/Shared/Reusable/Container";
import usePageTitle from "../hooks/usePageTitle";

const AdminPanelLayout = () => {
  usePageTitle("Admin Panel");
  return (
    <>
      <div className="flex min-h-screen 2xl:container 2xl:mx-auto shadow-2xl">
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <Container className="mb-20 my-10 md:my-0">
          <Outlet />
        </Container>
      </div>
    </>
  );
};

export default AdminPanelLayout;
