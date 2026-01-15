import "../../../Custom-css/whyUs.css";
import Heading from "../../Shared/Reusable/Heading";
import triangle from "../../../assets/vectors/triLeft.png";
import { useLoaderData } from "react-router-dom";

const WhyChooseUs = () => {
  const { features } = useLoaderData();

  return (
    <div
      className=" pt-8 lg:pt-10 flex flex-col 
          max-w-[450px] sm:max-w-[580px] md:max-w-[710px] lg:max-w-[950px]
          xl:container mx-auto px-5 2xl:px-20"
    >
      <Heading
        title={"Why choose Afrobeutic?"}
        subtitle={`Unlike generic platforms that treat your business as just another listing,
           Afrobeutic equips you with cutting-edge technology to amplify your brand, expand your
            reach, and deliver a seamless client experience— all while operating independently 
            under your own name, not ours.`}
      />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        justify-center gap-3 items-center pl-4"
      >
        {features?.map((feature, index) => (
          <div
            key={index}
            className={`relative text-center w-full
                 h-[160px] md:h-[190px] xl:h-[230px] 
              text-xs md:text-sm lg:text-base xl:text-lg  rounded-xl
            items-center justify-center flex overflow-hidden`}
          >
            {/* triangle image */}
            <img
              className="absolute left-0 top-0 
            w-[155px] md:w-48 xl:w-[230px] overflow-hidden
             "
              src={triangle}
              alt=""
            />
            {/* card */}
            <div
              className="relative p-6 text-center border border-black/20 shadow-lg
                w-[95%]
                 h-36 md:h-44 xl:h-52 
              text-xs md:text-sm lg:text-base xl:text-lg bg-white rounded-xl
            items-center justify-center flex overflow-hidden"
            >
              {/* feature text */}
              {feature?.name}

              {/* Hover content */}
              <div
                className="hover-content font-medium 
               text-sm sm:text-xs md:text-sm xl:text-[17px] "
              >
                {feature?.description?.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
