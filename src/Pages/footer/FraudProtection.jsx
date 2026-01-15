import Container from "../../Components/Shared/Reusable/Container";
import Heading from "../../Components/Shared/Reusable/Heading";
import InformationSection from "../../Components/Shared/Reusable/InformationSection";

const fraudProtectionData = [
  {
    title: "What is Fraud Protection?",
    content:
      "Fraud protection involves measures that help prevent fraudulent activities, such as unauthorized access or transactions on our website. We take these measures seriously to ensure your personal information and financial transactions are secure.",
  },
  {
    title: "Why Fraud Protection is Important",
    content:
      "Fraud protection helps safeguard your data from cybercriminals and prevents unauthorized transactions that could lead to financial loss. It's a crucial part of maintaining trust and ensuring the safety of your online activity.",
  },
  {
    title: "How We Protect Your Data",
    content:
      "We use encryption, secure payment gateways, and multi-factor authentication to protect your personal and financial data from unauthorized access. These technologies help ensure that your sensitive information is only accessible to you.",
  },
  {
    title: "Monitoring for Suspicious Activity",
    content:
      "We continuously monitor transactions for unusual or suspicious activity. If any unusual behavior is detected, we may take steps to verify your identity or block the transaction until we can confirm its legitimacy.",
  },
  {
    title: "Multi-Factor Authentication",
    content:
      "We encourage the use of multi-factor authentication (MFA) for an extra layer of security. MFA requires a second form of verification, such as a code sent to your phone, in addition to your password, to protect your account from unauthorized access.",
  },
  {
    title: "Reporting Fraudulent Activity",
    content:
      "If you believe you have been a victim of fraud, please contact us immediately. Our team will investigate the issue, and we will take appropriate steps to resolve it as quickly as possible.",
  },
  {
    title: "Your Responsibilities",
    content:
      "While we take extensive measures to protect your information, we also encourage you to use strong, unique passwords for your accounts and avoid sharing sensitive information. Keeping your devices secure also helps prevent unauthorized access.",
  },
  {
    title: "Changes to Fraud Protection Policy",
    content:
      "We may update our Fraud Protection policies from time to time to address new risks or improve our security measures. Any changes will be reflected on this page with an updated date at the top.",
  },
];

const FraudProtection = () => {
  return (
    <Container className="max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <Heading title={"Fraud Protection"} />

      <InformationSection
        description="Our Fraud Protection Policy outlines the steps we take to protect your information and ensure a safe online experience. We are committed to safeguarding your data from fraudulent activities."
        data={fraudProtectionData}
      />
    </Container>
  );
};

export default FraudProtection;
