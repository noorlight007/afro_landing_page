import "../../../Custom-css/loadingSpinner.css"

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center min-h-screen ">
        <div className="flex gap-6">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
};

export default LoadingSpinner;