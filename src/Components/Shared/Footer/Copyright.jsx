import React from "react";
import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <>
      <hr className="w-9/12 mx-auto border-black/50" />
      <footer
        className="footer sm:footer-horizontal items-center p-4 
      w-9/12 mx-auto
      "
      >
        <aside className="grid-flow-col items-center text-xs xl:text-base">
          <p>© {new Date().getFullYear()} afrobeutic, All rights reserved</p>
        </aside>
        {/* copyright links  */}
        <nav className="grid-flow-col gap-4 justify-self-end">
          <Link
            to={"/terms-and-conditions"}
            className="hover:text-secondary text-xs xl:text-base"
          >
            Terms & Conditions
          </Link>
          <Link
            to={"/privacy-policy"}
            className="hover:text-secondary text-xs xl:text-base"
          >
            Privacy Policy
          </Link>
          <Link
            to={"/meta-login-privacy-policy"}
            className="hover:text-secondary text-xs xl:text-base"
          >
            Meta Privacy Policy
          </Link>
          <Link
            to={"/cookie-policy"}
            className="hover:text-secondary text-xs xl:text-base"
          >
            Cookie Policy
          </Link>
          <Link
            to={"/fraud-protection"}
            className="hover:text-secondary text-xs xl:text-base"
          >
            Fraud Protection
          </Link>
        </nav>
      </footer>
    </>
  );
};

export default Copyright;
