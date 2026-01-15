import { Link } from "react-router-dom";
import OutlinedBtn from "./OutlinedBtn";

const WhyAfrobeuticBtn = () => {
  return (
    <div className="flex lg:justify-center gap-4 text-xs">
      <a href="https://client.afrobeutic.com/accounts/signup/">
        <OutlinedBtn
          className="hover:bg-black hover:text-white"
          text="Join Now"
        />
      </a>
      <Link to={"/contact"}>
        <OutlinedBtn
          className="hover:bg-[#0e403b] hover:text-white"
          text="Request a demo"
        />
      </Link>
    </div>
  );
};

export default WhyAfrobeuticBtn;
