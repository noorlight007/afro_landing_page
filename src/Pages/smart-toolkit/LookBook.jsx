import SmartToolkitWelcomeCard from "../../Cards/SmartToolkitWelcomeCard";
import salonCategories from "../../utils/salonCategories";
import SmartToolkitCategorySectionCard from "../../Cards/SmartToolkitCategorySectionCard";
import useCategorySelection from "../../hooks/useCategorySelection";
import VideoSection from "../../Components/Shared/Reusable/VideoSection";

const LookBook = () => {
  const { selectedCategory, selectedData, handleCategoryChange } =
    useCategorySelection(11, 13);
  return (
    <div className="pt-20">
      <SmartToolkitWelcomeCard
        title={"Lookbook – Capture Every Style Story"}
        content={`The Lookbook feature in Afrobeutic lets salons visually document each client’s style journey. After every service—whether it’s a haircut, coloring, or styling—salon staff can capture high-quality photos of the final look and store them in the client’s profile. This curated gallery not only helps in tracking the client’s style preferences over time but also acts as a visual reference for future appointments. Salon owners and stylists can easily review a client’s past styles to deliver personalized services and maintain consistency. It’s a powerful tool to enhance client satisfaction, showcase your salon’s craftsmanship, and build lasting beauty experiences.`}
      />

      <SmartToolkitCategorySectionCard
        heading="Lookbook Use Cases"
        description="Showcase of styles done to satisfied clients"
        sliceStart={11}
        sliceEnd={13}
        salonCategories={salonCategories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        selectedData={selectedData}
      />
      <VideoSection
        title="Lookbook Use Cases"
        subtitle={`Get simpler development, quicker time to market, and higher deliverability
             rates.* See how Message Scheduling, Link Shortening with Click Tracking, advanced 
             data, and real-time dashboards can benefit your business. `}
      />
    </div>
  );
};

export default LookBook;
