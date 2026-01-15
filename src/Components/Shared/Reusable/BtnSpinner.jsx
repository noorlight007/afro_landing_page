import { AiOutlineLoading3Quarters } from "react-icons/ai";

const BtnSpinner = ({ className = "" }) => {
  return (
    <AiOutlineLoading3Quarters
      className={`animate-spin mx-auto ${className}`}
    />
  );
};

export default BtnSpinner;
