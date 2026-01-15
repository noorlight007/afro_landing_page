import Container from "../../Components/Shared/Reusable/Container";
import Heading from "../../Components/Shared/Reusable/Heading";
import InformationSection from "../../Components/Shared/Reusable/InformationSection";

const cookiePolicyData = [
  {
    title: "What Are Cookies?",
    content:
      "Cookies are small text files stored on your device when you visit our site. They help us remember your preferences and enhance your browsing experience.",
  },
  {
    title: "Types of Cookies We Use",
    content:
      "We use functional cookies for website performance, analytical cookies to track user activity, and marketing cookies to personalize advertisements.",
  },
  {
    title: "Managing Cookies",
    content:
      "You can manage your cookie preferences through your browser settings. However, disabling cookies may affect the functionality of the site.",
  },
  {
    title: "Third-Party Cookies",
    content:
      "We may also allow third-party service providers, such as analytics and advertising partners, to place cookies on your device. These cookies help provide relevant content and ads across different websites.",
  },
  {
    title: "Cookies for Advertising and Analytics",
    content:
      "We use cookies to track user behavior and personalize ads based on your interests. This helps us provide a better user experience and show you relevant advertisements.",
  },
  {
    title: "Cookie Expiration",
    content:
      "Cookies can be either session cookies, which expire when you close your browser, or persistent cookies, which remain on your device for a specified period or until manually deleted.",
  },
  {
    title: "Your Consent",
    content:
      "By continuing to use our website, you consent to the use of cookies as outlined in this policy. You can withdraw your consent at any time by managing your cookie preferences in your browser settings.",
  },
  {
    title: "Changes to Cookie Policy",
    content:
      "We may update this Cookie Policy from time to time. The most current version will always be available on this page, with an updated date at the top.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about our Cookie Policy or need further information, please contact us through the contact details on our website.",
  },
];

const CookiePolicy = () => {
  return (
    <Container className="max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <Heading title={"Cookie Policy"} />

      <InformationSection
        description="This Cookie Policy explains how we use cookies on our website. By continuing to use our website, you agree to our use of cookies."
        data={cookiePolicyData}
      />
    </Container>
  );
};

export default CookiePolicy;
