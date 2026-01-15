import support from "../../../assets/images/Support-documentation.png";
import bestDesign from "../../../assets/images/best-Design.png";

const supportOptions = [
  {
    id: 1,
    title: "Online Documentation",
    description:
      "Contains all descriptions related to Porto usage and features.",
  },
  {
    id: 2,
    title: "Video Documentation",
    description: "Need visual instructions? Check our video tutorials.",
  },
  {
    id: 3,
    title: "Support Center",
    description:
      "Contact us if you get any issue while using Porto, reply within 16 hrs.",
  },
];

const ProfessionalSupport = () => {
  return (
    <div
      className="max-w-[450px] sm:max-w-[580px] md:max-w-[710px] lg:max-w-[950px]
    xl:container mx-auto px-6 md:px-0 xl:px-10 2xl:px-40
     grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center 
     mt-5  sm:mt-20 xl:mt-28
     "
    >
      {/* Left Section */}
      <div className="font-bold">
        <h2
          className=" font-bold  leading-tight
        text-2xl lg:text-3xl xl:text-[40px]"
        >
          PROFESSIONAL SUPPORT
        </h2>
        <h3
          className="text-primary font-semibold uppercase leading-tight mb-3 lg:mb-6
          text-[15px] lg:text-lg xl:text-[22px]"
        >
          ONLINE DOCUMENTATION, VIDEOS AND FORUM
        </h3>

        {/* Support Options */}
        <div className="space-y-3 xl:space-y-6">
          {supportOptions.map((option) => (
            <div key={option.id}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <span
                    className="w-6 h-6 flex items-center justify-center
                    text-primary rounded-full shadow-md"
                  >
                    ✔
                  </span>
                </div>
                {/* title and des */}
                <h4 className="text-xs lg:text-base xl:text-lg ">
                  {option.title} -
                  <span className="opacity-50">{option.description}</span>
                </h4>
              </div>
              <hr className="border-primary/30 mt-4 xl:mt-6" />
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="relative">
        {/* large Image */}
        <img
          src={support}
          alt="Support documentation"
          className="rounded-lg ml-1 sm:ml-32 md:ml-5 lg:ml-10 xl:ml-28 
          w-full sm:w-[430px] md:w-[350px] lg:w-[430px] xl:w-[490px] 
          h-[184px] sm:h-[284px] md:h-[204px] lg:h-[284px] xl:h-[334px]"
        />
        {/* small Image */}

        <img
          src={bestDesign}
          alt="Best design"
          className="rounded-lg absolute 
          w-[230px] sm:w-[320px] md:w-[250px] lg:w-[320px] xl:w-[360px] 
          h-[129px] sm:h-[186px] md:h-[136px] lg:h-[186px] xl:h-[216px] 
          -bottom-6 md:-bottom-4 lg:-bottom-5 
          left-1/2 transform -translate-x-1/2 sm:left-60 md:left-28 lg:left-[150px] xl:left-[240px] "
        />
      </div>
    </div>
  );
};

export default ProfessionalSupport;
