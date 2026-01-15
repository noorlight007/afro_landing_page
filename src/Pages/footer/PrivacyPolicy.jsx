import Heading from "../../Components/Shared/Reusable/Heading";
import Container from "../../Components/Shared/Reusable/Container";
import InformationSection from "../../Components/Shared/Reusable/InformationSection";

const privacyPolicyData = [
  {
    title: "Information We Collect",
    content:
      "We collect personal information such as your name, email, phone number, and booking details when you make a reservation.",
  },
  {
    title: "How We Use Your Information",
    content:
      "The information we collect is used to provide you with our salon services, communicate with you regarding your appointments, and improve your experience.",
  },
  {
    title: "Data Security",
    content:
      "We take reasonable steps to protect your data, including using encrypted connections and secure payment gateways.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.",
  },
  {
    title: "Sharing Your Information",
    content:
      "We may share your personal information with trusted third-party service providers who assist in the delivery of our services, such as payment processors and booking platforms. We ensure that these parties handle your data securely.",
  },
  {
    title: "User Rights",
    content:
      "You have the right to access, correct, and delete your personal data. You may also withdraw your consent for certain data processing activities at any time, subject to applicable laws.",
  },
  {
    title: "Cookies and Tracking Technologies",
    content:
      "We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.",
  },
  {
    title: "Changes to This Privacy Policy",
    content:
      "We reserve the right to update this Privacy Policy periodically. Any changes will be posted on this page, and the date of the latest revision will be indicated at the top of the policy.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at the details provided on our website.",
  },
];

const PrivacyPolicy = () => {
  return (
    <Container className="max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <Heading title={"Privacy Policy"} />
      <InformationSection
        description="At Afrobeutic Salon, your privacy is of paramount importance. This Privacy Policy explains the types of data we collect, how it’s used, and your rights."
        data={privacyPolicyData}
      />
    </Container>
  );
};

export default PrivacyPolicy;
