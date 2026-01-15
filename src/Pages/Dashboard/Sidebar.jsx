import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const location = useLocation();
  const currentPath = location.pathname;

  const menu = [
    { name: "Home", path: "/" },
    { name: "My Blogs", path: "/fqz/admin/panel/myAddedBlogs" },
    { name: "Contact Requests", path: "/fqz/admin/panel/contactRequests" },
    {
      name: "Subscribed NewsLetter",
      path: "/fqz/admin/panel/subscribedNewsLetter",
    },
  ];

  return (
    <>
      <aside
        className={`bg-accent text-white  flex flex-col p-4
          md:w-48 lg:w-60 xl:w-80 fixed md:relative  transition-all duration-300
            ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 md:h-auto ${
          isSidebarOpen ? "h-full w-48" : "h-full w-48"
        } z-40`}
      >
        {/* title */}
        <h2 className="text-xl lg:text-2xl font-bold my-8">
          <Link to={"/fqz/admin/panel"}>Admin Panel</Link>
        </h2>
        {/* navigation links*/}
        <nav className="flex flex-col gap-10">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`lg:text-lg font-medium ${
                currentPath === item.path
                  ? "underline underline-offset-4"
                  : "hover:underline underline-offset-8"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
      {/* Hamburger button */}
      <button
        onClick={toggleSidebar}
        className="text-2xl md:hidden absolute top-4 right-4 z-50"
      >
        {isSidebarOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </button>
    </>
  );
};

export default Sidebar;
