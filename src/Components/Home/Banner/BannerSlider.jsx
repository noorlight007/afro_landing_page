import { motion as Motion } from "framer-motion";
import banner from "../../../assets/images/banner-svg.svg";
import bubbleText from "../../../assets/images/bubble-text.svg";
import WaveSvg from "../../Shared/Reusable/WaveSvg";

const BannerSlider = () => {
  return (
    <>
      <div
        className="flex justify-center bg-zinc-100  
      w-full max-w-[1680px] mx-auto
      h-[320px] sm:h-[380px] md:h-[450px] lg:h-[520px] xl:h-[590px] 2xl:h-[660px]
      relative transition-all duration-500 ease-in-out"
      >
        {/* Text Section */}
        <div
          className="ml-4 sm:ml-8 lg:ml-20 2xl:ml-40 flex flex-col justify-center gap-2 
      md:gap-4  "
        >
          {/* headline */}
          <Motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
          font-semibold relative z-20 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0 }}
          >
            LIBERATE YOUR SALON'S POTENTIAL
          </Motion.h2>

          <Motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            {/* sub text */}
            <p className="text-xs md:text-xl lg:text-2xl font-medium">
              The Premier Digital Platform Exclusively for Afro-Textured Hair
              Salons
            </p>
            {/* normal text */}
            <p className="text-[10px] sm:text-xs lg:text-sm xl:text-base sm:mb-6 md:mb-10">
              From physical walls to global reach—transform your salon into an
              independent digital brand that keeps 100% of its earnings.
            </p>
            {/* Button */}
            <a
              className="text-white font-medium py-2 px-3 lg:px-5 
            text-xs md:text-sm lg:text-lg bg-primary rounded-lg"
              href="https://client.afrobeutic.com/accounts/signup/"
            >
              {" "}
              Register Now
            </a>
          </Motion.div>
        </div>

        {/* Image Section */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className=" w-full h-full  overflow-hidden z-20 relative "
          layout
        >
          {/* large image  */}
          <img
            src={banner}
            className="w-full h-72 sm:h-11/12 
              max-w-[250px]  sm:max-w-[300px] md:max-w-[350px]
              lg:max-w-[450px] xl:max-w-[600px] mx-auto "
          />
          {/* bubble text image */}
          <img
            className="absolute  left-1/2 transform -translate-x-1/2
           bottom-24 sm:bottom-16 md:bottom-20  xl:bottom-10 2xl:bottom-20 mb-auto
         w-1/2 max-w-[120px] sm:max-w-[150px] md:max-w-[200px] 
         lg:max-w-[250px] xl:max-w-[290px]"
            src={bubbleText}
            alt=""
          />
        </Motion.div>
      </div>
      <WaveSvg />
    </>
  );
};

export default BannerSlider;
