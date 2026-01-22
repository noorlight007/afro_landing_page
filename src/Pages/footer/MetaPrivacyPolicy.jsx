import Heading from "../../Components/Shared/Reusable/Heading";
import Container from "../../Components/Shared/Reusable/Container";
import InformationSection from "../../Components/Shared/Reusable/InformationSection";

const privacyPolicyData = [
  {
    title: "Information We Collect",
    content:
      "When you log in using Facebook (Meta Login), we may collect information such as your name, email address, Facebook Business account details, WhatsApp Business account information, and business profile data. We only collect data that is necessary to create, connect, and manage your WhatsApp Business account.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the collected information to create and manage your WhatsApp Business account, configure messaging services, build and operate WhatsApp chatbots, provide customer support, and ensure proper functionality of our platform. We do not use your data for unrelated purposes.",
  },
  {
    title: "Meta (Facebook) Platform Data Usage",
    content:
      "Our platform integrates with Meta APIs, including Facebook Login and WhatsApp Business APIs. Data obtained through Meta is used strictly in accordance with Meta Platform Terms, WhatsApp Business Platform Policies, and applicable data protection laws.",
  },
  {
    title: "WhatsApp Business Data Handling",
    content:
      "As a technology provider, we act on behalf of our customers to manage their WhatsApp Business accounts. Message content, chatbot interactions, and business metadata are processed only to deliver automation, chatbot functionality, analytics, and support services.",
  },
  {
    title: "Data Sharing",
    content:
      "We do not sell or rent your personal data. Information may be shared with Meta Platforms, Inc. and trusted infrastructure providers solely for the purpose of delivering WhatsApp Business services, hosting, security, and compliance. All third parties are required to maintain strict confidentiality.",
  },
  {
    title: "Data Security",
    content:
      "We implement industry-standard security measures including encrypted connections, access controls, and secure servers to protect your data from unauthorized access, loss, or misuse.",
  },
  {
    title: "Data Retention",
    content:
      "We retain personal and business data only for as long as your account remains active or as required to provide our services, comply with legal obligations, or resolve disputes. You may request deletion of your data at any time.",
  },
  {
    title: "User Rights",
    content:
      "You have the right to access, update, correct, or delete your personal data. You may also revoke permissions granted through Facebook Login or disconnect your WhatsApp Business account from our platform at any time.",
  },
  {
    title: "Cookies and Tracking Technologies",
    content:
      "We use cookies and similar technologies to maintain secure sessions, improve platform performance, and analyze usage. You can manage cookie preferences through your browser settings.",
  },
  {
    title: "Changes to This Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements, or Meta platform policies. Updates will be posted on this page with a revised effective date.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions about this Privacy Policy, Meta data usage, or how we handle your information, please contact us using the support details provided on our website.",
  },
];

const PrivacyPolicy = () => {
  return (
    <Container className="max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <Heading title={"Privacy Policy"} />
      <InformationSection
        description="This Privacy Policy explains how we collect, use, and protect your information when you log in with Facebook and use our platform to create and manage your WhatsApp Business account and chatbot services."
        data={privacyPolicyData}
      />
    </Container>
  );
};

export default PrivacyPolicy;
