import React from "react";
import { Link } from "react-router-dom";

const FooterMiddle = () => {
  return (
    <>
      <nav>
        <h6 className="text-xl font-bold footer-link text-black/80">
          Quick Link
        </h6>
        <Link to={"/pricing"} className="text-black/80 hover:text-secondary cursor-pointer">
          Pricing
        </Link>
        <Link to={"/blog"} className="text-black/80 hover:text-secondary cursor-pointer">
          Blogs
        </Link>
        <Link to={"/contactUs"} className="text-black/80 hover:text-secondary cursor-pointer">
          Contact Sales
        </Link>
      
      </nav>
      
    </>
  );
};

export default FooterMiddle;
