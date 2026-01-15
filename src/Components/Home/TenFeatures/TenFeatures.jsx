import TopSection from "./TopSection";
import TenFeaturesCard from "../../../Cards/TenFeaturesCard";
import { useLoaderData } from "react-router-dom";

const TenFeatures = () => {
  const { tenFeatures } = useLoaderData();

  return (
    <>
      <div
        className="bg-[#0169FE] text-white p-10 relative overflow-hidden
        py-14 lg:py-20 sm:max-w-11/12 xl:container mx-auto"
      >
        <div
          className="max-w-[450px] sm:max-w-[580px] md:max-w-[710px] lg:max-w-[950px]
              xl:max-w-[1280px] mx-auto"
        >
          {/* Top Section */}
          <TopSection />

          {/* Features card */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 my-10 xl:mt-24 
         max-w-sm md:max-w-6xl mx-auto xl:pb-20"
          >
            {tenFeatures?.map((feature) => (
              <TenFeaturesCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
        {/* Bottom Clip */}
        <div
          className="absolute -bottom-1 left-1 w-full h-16 lg:h-20 xl:h-36 bg-white"
          style={{ clipPath: "polygon(10% 90%, 100% 0%, 100% 100%, 0 100%)" }}
        ></div>
      </div>
    </>
  );
};

export default TenFeatures;
