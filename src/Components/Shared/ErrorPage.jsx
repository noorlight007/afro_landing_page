import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h2
        className=" title font-bold text-gray-300 mb-16
        text-[170px] md:text-[250px] lg:text-[300px]
      absolute lg:top-3/12  transform  -translate-y-1/2 "
      >
        404
      </h2>
      <p className="text-3xl md:text-5xl lg:text-7xl opacity-85">
        Oops, Page Not Found!
      </p>
      <p
        className="md:text-lg lg:text-xl opacity-70 mt-4 text-center 
      px-10 sm:px-16 md:px-20 lg:px-32"
      >
        The page you're looking for doesn't exist or has been moved. Please
        check the URL or return to the homepage.
      </p>
      <Link
        to={"/"}
        className="px-4 py-2 border-2 rounded font-medium text-xs md:text-sm lg:text-base
      mt-10 border-primary/60 "
      >
        BACK TO HOMEPAGE
      </Link>
    </div>
  );
};

export default ErrorPage;
