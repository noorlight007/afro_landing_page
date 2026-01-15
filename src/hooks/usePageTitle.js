import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTitle = (customTitle) => {
  const location = useLocation();

  useEffect(() => {
    if (customTitle) {
      document.title = "Aforbeutic | " + customTitle;
    } else {
      document.title = "Afrobeutic";
    }
  }, [location, customTitle]);
};

export default usePageTitle;
