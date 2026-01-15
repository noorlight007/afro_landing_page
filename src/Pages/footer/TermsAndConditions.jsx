import Heading from "../../Components/Shared/Reusable/Heading";
import Container from "../../Components/Shared/Reusable/Container";
import InformationSection from "../../Components/Shared/Reusable/InformationSection";

const termsData = [
  {
    title: "Use of Our Website",
    content:
      "You agree to use this website in accordance with the law and to not engage in activities that may disrupt or harm the operation of the site.",
  },
  {
    title: "Booking and Payment",
    content:
      "All bookings made on this site are subject to availability. Payment for services must be made before or at the time of the service.",
  },
  {
    title: "Cancellations",
    content:
      "We require a 24-hour notice for cancellations. Late cancellations may incur a fee.",
  },
  {
    title: "Account Responsibility",
    content:
      "You are responsible for maintaining the confidentiality of your account information, including your username and password, and for all activities under your account.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website, including but not limited to text, images, logos, and software, is the property of Afrobeutic Salon and is protected by copyright and intellectual property laws.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Afrobeutic Salon shall not be held liable for any indirect, incidental, special, or consequential damages arising from the use of this website or services.",
  },
  {
    title: "Privacy and Data Protection",
    content:
      "We take your privacy seriously. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal data.",
  },
  {
    title: "Changes to the Terms",
    content:
      "Afrobeutic Salon reserves the right to modify these terms and conditions at any time. All changes will be posted on this page, and your continued use of the website signifies your acceptance of any changes.",
  },
  {
    title: "Governing Law",
    content:
      "These terms and conditions are governed by the laws of the jurisdiction in which Afrobeutic Salon operates, and any disputes will be resolved under those laws.",
  },
  {
    title: "Contact Information",
    content:
      "If you have any questions or concerns regarding these terms and conditions, please contact us through the contact details provided on our website.",
  },
];

const TermsAndConditions = () => {
  return (
    <Container className="max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <Heading title={"Terms & Conditions"} />
      <InformationSection
        description="Welcome to Afrobeutic Salon! These terms and conditions outline the rules and regulations for the use of our website and services. By accessing this website and using our services, you agree to comply with these terms."
        data={termsData}
      />
    </Container>
  );
};

export default TermsAndConditions;
