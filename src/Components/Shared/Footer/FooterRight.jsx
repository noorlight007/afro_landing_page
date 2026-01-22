import React from "react";
import { Link } from "react-router-dom";

const FooterRight = () => {
  return (
    <>
      <nav>
        <h6 className="text-xl font-bold footer-link text-black/80">
          Customer Side
        </h6>

        <Link
          to={"/terms-and-conditions"}
          className="text-black/80 hover:text-secondary cursor-pointer"
        >
          Terms & Conditions
        </Link>
        <Link
          to={"/privacy-policy"}
          className="text-black/80 hover:text-secondary cursor-pointer"
        >
          Privacy Policy
        </Link>
        <Link
          to={"/meta-login-privacy-policy"}
          className="text-black/80 hover:text-secondary cursor-pointer"
        >
          Meta Login Privacy Policy
        </Link>
        <Link
          to={"/cookie-policy"}
          className="text-black/80 hover:text-secondary cursor-pointer"
        >
          Cookie Policy
        </Link>
        <Link
          to={"/legal-information"}
          className="text-black/80 hover:text-secondary cursor-pointer"
        >
          Legal Information
        </Link>
        <Link
          to={"/copyright"}
          className="text-black/80 hover:text-secondary cursor-pointer"
        >
          Copyright
        </Link>
      </nav>
    </>
  );
};

export default FooterRight;
