import logo from "../../../assets/images/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const FooterLeft = () => {
  return (
    <>
      <aside className="my-auto flex flex-col justify-center items-center gap-16">
        <img
          src={logo}
          className="w-52 sm:w-40 md:w-52 lg:w-64 xl:w-72"
          alt="logo"
        />
        {/* social links */}
        <div className="flex gap-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-[#1877F2]" size={24} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-red-600" size={24} />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-[#0077B5]" size={24} />
          </a>
          <FaInstagram
            className="text-white bg-gradient-to-r 
              from-[#F58529] via-[#D6249F] to-[#8a3ab9] 
                 rounded"
            size={24}
          />
        </div>
      </aside>
    </>
  );
};

export default FooterLeft;
