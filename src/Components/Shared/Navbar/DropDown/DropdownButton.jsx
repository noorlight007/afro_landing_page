import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DropdownButton = ({ menuName, openDropdown, handleToggle }) => {
  return (
    <div className="relative">
      <button
        onClick={() => handleToggle(menuName)}
        className="font-medium nav-link text-sm "
      >
        <span className=" flex items-center gap-1">
          {menuName.charAt(0).toUpperCase() + menuName.slice(1)}{" "}
          {openDropdown === menuName ? (
            <IoIosArrowUp className="text-lg  text-primary" />
          ) : (
            <IoIosArrowDown className="text-lg" />
          )}
        </span>
      </button>
    </div>
  );
};

export default DropdownButton;
