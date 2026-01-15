const ToolbarButton = ({ icon: Icon, onClick, isActive, disabled }) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`p-2 rounded ${isActive ? "bg-gray-300" : ""}`}
      >
        {Icon && <Icon />}
      </button>
    </>
  );
};

export default ToolbarButton;
