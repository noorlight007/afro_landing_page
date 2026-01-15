import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../../Custom-css/navbar.css";
import DropdownContent from "./DropDown/DropdownContent";
import DropdownButton from "./DropDown/DropdownButton";
import { whyAfrobeuticMenu } from "../../../utils/whyAfrobeuticData";
import { smartToolkitMenu } from "../../../utils/smartToolkit";

const NavLinks = () => {
  const [openDropdown, setOpenDropdown] = useState("");
  const dropdownRef = useRef(null);
  const location = useLocation();

  const handleToggle = (menuName) => {
    setOpenDropdown((prev) => (prev === menuName ? "" : menuName));
  };

  useEffect(() => {
    setOpenDropdown("");
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const renderMenu = (menuName, menuData) => (
    <div ref={openDropdown === menuName ? dropdownRef : null}>
      <DropdownButton
        menuName={menuName}
        openDropdown={openDropdown}
        handleToggle={handleToggle}
      />
      {openDropdown === menuName && <DropdownContent menuData={menuData} />}
    </div>
  );

  return (
    <>
      {/* Solutions Dropdown */}
      {renderMenu("Smart Toolkit", smartToolkitMenu)}

      {/* Why Afrobeutic Dropdown */}
      {renderMenu("why Afrobeutic", whyAfrobeuticMenu)}

      {/* Pricing */}
      <NavLink
        to="/Pricing"
        className={({ isActive }) =>
          `font-medium nav-link ${isActive ? "active text-base" : "text-sm"}`
        }
      >
        Pricing
      </NavLink>

      {/* Contact Sales */}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `font-medium nav-link ${isActive ? "active text-base" : "text-sm"}`
        }
      >
        Contact Sales
      </NavLink>
    </>
  );
};

export default NavLinks;
