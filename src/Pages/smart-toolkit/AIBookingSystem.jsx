import SmartToolkitWelcomeCard from "../../Cards/SmartToolkitWelcomeCard";
import salonCategories from "../../utils/salonCategories";
import SmartToolkitCategorySectionCard from "../../Cards/SmartToolkitCategorySectionCard";
import useCategorySelection from "../../hooks/useCategorySelection";
import VideoSection from "../../Components/Shared/Reusable/VideoSection";

const AIBookingSystem = () => {
  const { selectedCategory, selectedData, handleCategoryChange } =
    useCategorySelection(6, 8);
  return (
    <div className="pt-20">
      <SmartToolkitWelcomeCard
        title={"AI Booking System – Revolutionize Your Salon Appointments "}
        content={`At Afrobeutic, we bring the power of artificial intelligence to your salon with our cutting-edge AI Booking System. No more missed calls or delayed responses—our intelligent chatbot handles booking requests from customers through social messaging platforms in real time. Whether it’s a regular appointment or a special styling request, the chatbot understands the customer's intent, collects all necessary details, and ensures seamless coordination with your salon’s admin panel. Fast, intuitive, and always available, the AI Booking System is designed to boost efficiency and enhance your customers’ experience.`}
      />

      <SmartToolkitCategorySectionCard
        heading="AI Booking System Use Cases"
        description="Power of AI is at your hand, use it"
        sliceStart={6}
        sliceEnd={8}
        salonCategories={salonCategories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        selectedData={selectedData}
      />
      <VideoSection
        title="AI booking system Use Cases"
        subtitle={`Get simpler development, quicker time to market, and higher deliverability
             rates.* See how Message Scheduling, Link Shortening with Click Tracking, advanced 
             data, and real-time dashboards can benefit your business. `}
      />
    </div>
  );
};

export default AIBookingSystem;
