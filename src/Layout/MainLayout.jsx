import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();

  const isSmartToolkitPage = location.pathname.startsWith("/smart-toolkit");
  return (
    <>
      <Navbar></Navbar>
      <div className="2xl:container 2xl:mx-auto pt-16 lg:pt-20 shadow-2xl">
        <div
          className={`${
            isSmartToolkitPage ? "bg-gray-50" : "bg-white"
          } min-h-screen`}
        >
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MainLayout;
