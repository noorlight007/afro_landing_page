import SmartToolkitWelcomeCard from "../../Cards/SmartToolkitWelcomeCard";
import salonCategories from "../../utils/salonCategories";
import SmartToolkitCategorySectionCard from "../../Cards/SmartToolkitCategorySectionCard";
import useCategorySelection from "../../hooks/useCategorySelection";
import VideoSection from "../../Components/Shared/Reusable/VideoSection";

const ClientDatabase = () => {
  const { selectedCategory, selectedData, handleCategoryChange } =
    useCategorySelection(8, 11);
  return (
    <div className="pt-20">
      <SmartToolkitWelcomeCard
        title={"Safely store client data"}
        content={`Our platform securely stores each client’s personal details, including contact numbers, email addresses, social media links, and booking history by complying GDPR rules. This centralized profile system helps salon owners better understand and engage with their customers, personalize services, and keep track of important interactions—all in one place.`}
      />

      <SmartToolkitCategorySectionCard
        heading="Client data store Use Cases"
        description="Your salon's client data will be securely stored in three ways"
        sliceStart={8}
        sliceEnd={11}
        salonCategories={salonCategories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        selectedData={selectedData}
      />
      <VideoSection
        title="Client data store Use Cases"
        subtitle={`Get simpler development, quicker time to market, and higher deliverability
             rates.* See how Message Scheduling, Link Shortening with Click Tracking, advanced 
             data, and real-time dashboards can benefit your business. `}
      />
    </div>
  );
};

export default ClientDatabase;
