import BtnSpinner from "../Components/Shared/Reusable/BtnSpinner";

const BtnWithIcon = ({
  text = "",
  onClick,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className = "",
  type = "button",
  disabled = false,
  isLoading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`mt-4 lg::mt-6 xl:mt-10 text-white 
              py-2 px-4 xl:py-3 xl:px-6 text-sm lg:text-base xl:text-xl
              rounded-lg font-medium flex items-center justify-center gap-2
            ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
            ${className}`}
    >
      {LeftIcon && <LeftIcon />} {/* Left icon */}
      {isLoading ? (
        <BtnSpinner /> // Show spinner if loading
      ) : (
        <>{text}</> // Display text if not loading
      )}
      {RightIcon && <RightIcon />} {/* Right icon */}
    </button>
  );
};

export default BtnWithIcon;
