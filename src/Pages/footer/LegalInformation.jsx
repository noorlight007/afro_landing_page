import Heading from "../../Components/Shared/Reusable/Heading";
import Container from "../../Components/Shared/Reusable/Container";
import InformationSection from "../../Components/Shared/Reusable/InformationSection";

const legalInformationData = [
  {
    title: "Liability",
    content:
      "Afrobeutic Salon is not responsible for any damage caused during services provided, including but not limited to allergic reactions or injuries.",
  },
  {
    title: "Dispute Resolution",
    content:
      "Any disputes arising from the use of our services shall be resolved through arbitration in the jurisdiction of our business location.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content, including text, images, logos, and trademarks, on this website are owned by Afrobeutic Salon and are protected by intellectual property laws. Unauthorized use or reproduction is prohibited.",
  },
  {
    title: "Compliance with Laws",
    content:
      "We comply with all applicable local, national, and international laws and regulations in the operation of our website and services. By using our services, you agree to comply with all applicable laws.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms and Conditions shall be governed by and construed in accordance with the laws of the country in which Afrobeutic Salon operates, without regard to its conflict of law principles.",
  },
  {
    title: "Force Majeure",
    content:
      "Afrobeutic Salon shall not be held liable for any failure or delay in performing its obligations due to circumstances beyond its control, including but not limited to natural disasters, strikes, or technical failures.",
  },
  {
    title: "Amendments",
    content:
      "Afrobeutic Salon reserves the right to amend these terms and conditions at any time. Any changes will be posted on this page, and the date of the latest revision will be indicated.",
  },
  {
    title: "Termination",
    content:
      "Afrobeutic Salon reserves the right to suspend or terminate access to its website or services if any user is found to be in violation of these terms and conditions.",
  },
];

const LegalInformation = () => {
  return (
    <Container className="max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <Heading title="Legal Information" />
      <InformationSection
        description="All legal matters related to our services and website are subject to the laws of the country in which we operate. Please review all relevant legal notices carefully."
        data={legalInformationData}
      />
    </Container>
  );
};

export default LegalInformation;
