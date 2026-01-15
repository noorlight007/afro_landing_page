import SmartToolkitWelcomeCard from "../../Cards/SmartToolkitWelcomeCard";
import salonCategories from "../../utils/salonCategories";
import useCategorySelection from "../../hooks/useCategorySelection";
import VideoSection from "../../Components/Shared/Reusable/VideoSection";
import SmartToolkitCategorySectionCard from "../../Cards/SmartToolkitCategorySectionCard";

const SocialChatbots = () => {
  const { selectedCategory, selectedData, handleCategoryChange } =
    useCategorySelection(3, 6);
  return (
    <div className="pt-20">
      <SmartToolkitWelcomeCard
        title={"Chatbots made easy for your customers"}
        content={`At Afrobeutic, we empower salon owners with smart, AI-driven social chatbots that 
          redefine customer engagement and service automation. Our social chatbots are designed to
           seamlessly interact with your customers across popular messaging platforms like WhatsApp
            and Facebook Messenger, offering 24/7 assistance. Whether a client wants to book an 
            appointment, inquire about services, or check available time slots, the chatbot responds
            instantly with accurate, friendly information. It can also forward booking requests 
            directly to salon managers for quick approval, reducing manual work and streamlining 
            operations. Beyond customer service, the chatbot actively promotes your salon by sending 
            personalized offers, reminders, and marketing campaigns to your client base. This not 
            only boosts customer retention but also helps attract new clients through engaging 
            conversations. Salon owners can customize the chatbot’s behavior to align with their
            brand tone and business goals. With our subscription plans, managing your salon’s
            digital communication has never been easier or more effective. Afrobeutic’s social
            chatbots are more than just virtual assistants—they’re your salon’s digital ambassadors.`}
      />

      <SmartToolkitCategorySectionCard
        heading="Social chat bots Use Cases"
        description="Connect to the clients and give them what they want"
        sliceStart={3}
        sliceEnd={6}
        salonCategories={salonCategories}
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        selectedData={selectedData}
      />
      <VideoSection
        title="Social chat bots Use Cases"
        subtitle={`Get simpler development, quicker time to market, and higher deliverability
             rates.* See how Message Scheduling, Link Shortening with Click Tracking, advanced 
             data, and real-time dashboards can benefit your business. `}
      />
    </div>
  );
};

export default SocialChatbots;
