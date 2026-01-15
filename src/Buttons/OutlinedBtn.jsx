const OutlinedBtn = ({ text = "", onClick, className = "" }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`px-5 py-2 border rounded-md font 
               ${className}`}
      >
        {text}
      </button>
    </>
  );
};

export default OutlinedBtn;
