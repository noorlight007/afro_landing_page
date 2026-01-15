import useCategorySelection from "../../hooks/useCategorySelection";
import SmartToolkitWelcomeCard from "../../Cards/SmartToolkitWelcomeCard";
import SmartToolkitCategorySectionCard from "../../Cards/SmartToolkitCategorySectionCard";
import salonCategories from "../../utils/salonCategories";
import VideoSection from "../../Components/Shared/Reusable/VideoSection";

const SalonManagements = () => {
  const { selectedCategory, selectedData, handleCategoryChange } =
    useCategorySelection(0, 3);
  return (
    <div className="pt-20">
      <SmartToolkitWelcomeCard
        title={"Manage your salon like never before"}
        content={`Take full control of your salon with Afrobeutic — a powerful all-in-one platform designed
             specifically for salon owners. From effortless appointment scheduling and staff coordination to 
             tracking customer preferences and managing daily operations, Afrobeutic streamlines every aspect
              of your business. Say goodbye to manual work and scattered systems — now, everything you need 
              to grow and manage your salon is in one place, right at your fingertips.`}
      />

      <SmartToolkitCategorySectionCard
        heading="Salon Management Use Cases"
        description="Manage workloads of your salon from one point."
        sliceStart={0}
        sliceEnd={3}
        salonCategories={salonCategories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        selectedData={selectedData}
      />
      <VideoSection
        title="Salon Management Use Cases"
        subtitle={`Get simpler development, quicker time to market, and higher deliverability
             rates.* See how Message Scheduling, Link Shortening with Click Tracking, advanced 
             data, and real-time dashboards can benefit your business. `}
      />
    </div>
  );
};

export default SalonManagements;
