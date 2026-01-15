const data = [
  {
    title: "Keep 100% of Your Earnings",
    subtitle:
      "No commissions, no contracts—just a flat monthly fee and the freedom to opt out anytime.",
  },
  {
    title: "Complete Brand Autonomy",
    subtitle:
      "Express your unique identity without platform restrictions or middlemen.",
  },
  {
    title: "Direct Client Relationships",
    subtitle:
      "Build lasting connections with clients who spend 6x more on hair care than other demographics.",
  },
];

const BannerBottom = () => {
  return (
    <div
      className="flex justify-center gap-3 sm:gap-8 md:gap-6 lg:gap-16 xl:gap-20 
        pb-6 md:pb-10 pt-6 md:pt-4 "
    >
      {data.map((item, index) => (
        <div
          key={index}
          className=" sm:p-3 xl:p-4 
          w-[120px] sm:w-40 md:w-[196px] lg:w-56 xl:w-[275px]"
        >
          {/* title */}
          <h2
            className=" font-bold text-accent 
            text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl
            "
          >
            {item?.title}
          </h2>
          {/* subtitle */}
          <p className="text-[10px] sm:text-xs lg:text-sm xl:text-base leading-tight">
            {item?.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BannerBottom;
