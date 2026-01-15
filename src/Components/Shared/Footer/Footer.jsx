import { useLocation } from "react-router-dom";
import "../../../Custom-css/footer.css";
import Newsletter from "./Newsletter";
import FooterLeft from "./FooterLeft";
import FooterMiddle from "./FooterMiddle";
import FooterRight from "./FooterRight";
import Copyright from "./Copyright";

const Footer = () => {
  const location = useLocation();
  return (
    <div
      className={`mt-40 py-5 xl:py-10 relative mb-1 outfit 
    ${location.pathname === "/" && " border-t-2 border-black/30 rounded"} `}
    >
      {/* newsletter */}
      {location.pathname === "/" && <Newsletter />}
      {/* footer content */}
      <footer
        className="footer flex-col sm:flex-row p-10 mt-20
      flex justify-around"
      >
        {/* footer left */}
        <FooterLeft />

        {/* footer middle */}
        <FooterMiddle />

        {/* footer right*/}
        <FooterRight />
      </footer>
      {/* footer bottom  */}
      <Copyright />
    </div>
  );
};

export default Footer;
