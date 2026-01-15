import { FaArrowRight } from "react-icons/fa6";
import BtnWithIcon from "../../../Buttons/BtnWithIcon";

const HeroText = () => {
  return (
    <>
      <div className="">
        <h1 className="font-extrabold text-3xl lg:text-[40px]">
          Build the Legacy <br className="hidden sm:inline" />
          Your Work Deserves
        </h1>

        <p
          className="mt-2 lg:mt-4 leading-relaxed xl:text-lg
        w-full sm:w-72 md:w-[344px] lg:w-[454px] xl:w-[604px] 2xl:w-[750px]"
        >
          Tired of platforms that limit your brand, restrict how you connect
          with clients, and bury your salon under their name?
          <br />
          Afrobeutic puts you back in charge.
          <br />
          With full creative freedom, personalised branding, and tools designed
          for your independence, we help you build a salon that truly stands out
          <strong>— it's time to switch.</strong>
        </p>
        {/* btn */}
        <a href="https://client.afrobeutic.com/accounts/signup/">
          <BtnWithIcon
            className="bg-secondary"
            text="Join Now"
            rightIcon={FaArrowRight}

            // onClick={handleClick}
          />
        </a>
      </div>
    </>
  );
};

export default HeroText;
