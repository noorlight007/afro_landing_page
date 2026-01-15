import { motion as Motion } from "framer-motion";
import borderTop from "../assets/images/flower-border-top.png";
import borderBottom from "../assets/images/flower-border-bottom.png";

const ZigZagCard = ({ data }) => {
  return (
    <div className="py-12 space-y-10 max-w-5xl mx-auto px-5">
      {data?.map((section, index) => {
        const isEven = index % 2 === 0;

        return (
          <div key={index} className="relative px-10 ">
            <img
              src={borderTop}
              className="w-28  absolute  top-0 left-0"
              alt=""
            />

            <div
              className={`flex flex-col sm:flex-row items-center gap-5 lg:px-5          
              ${!isEven ? "sm:flex-row-reverse" : ""}`}
            >
              {/* Image  */}
              <Motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex-1 flex mt-10 sm:my-16 "
              >
                <img
                  src={section?.image}
                  alt={section?.title}
                  className={`w-full max-w-[185px] sm:max-w-8/12 h-auto object-cover ${
                    isEven ? "md:ml-0 md:mr-auto" : "md:ml-auto md:mr-0"
                  }`}
                />
              </Motion.div>

              {/* Text */}
              <div
                className={`flex-1 px-4 flex flex-col justify-center mb-10 sm:mb-0`}
              >
                <h2
                  className="text-lg md:text-xl lg:text-2xl xl:text-3xl
               font-extrabold mb-2 lg:mb-4 "
                >
                  {section?.title}
                </h2>
                <p className=" text-xs md:text-sm lg:text-base">
                  {section?.description}
                </p>
              </div>
            </div>
            <img
              src={borderBottom}
              className="w-28  absolute  bottom-0 right-0"
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ZigZagCard;
