import Heading from "../../Components/Shared/Reusable/Heading";
import Container from "../../Components/Shared/Reusable/Container";
import InformationSection from "../../Components/Shared/Reusable/InformationSection";

const copyrightData = [
  {
    title: "Ownership",
    content:
      "All intellectual property on this site, including trademarks, service marks, and copyrighted materials, are owned by Afrobeutic Salon.",
  },
  {
    title: "Restrictions",
    content:
      "You may not reproduce, distribute, or modify any part of this website without the express written consent of Afrobeutic Salon.",
  },
  {
    title: "License to Use Website",
    content:
      "Afrobeutic Salon grants you a limited, non-exclusive, non-transferable license to access and use the website for personal, non-commercial use. Any other use is prohibited unless explicitly authorized.",
  },
  {
    title: "Third-Party Content",
    content:
      "Some content on our website may be provided by third parties. Afrobeutic Salon is not responsible for the accuracy, legality, or quality of third-party content. Use of such content is at your own risk.",
  },
  {
    title: "Limitations of Liability",
    content:
      "Afrobeutic Salon is not liable for any damages, including but not limited to, loss of data or profits, arising from the use or inability to use the website or its content.",
  },
  {
    title: "Copyright Infringement Claims",
    content:
      "If you believe that any content on our website infringes upon your copyright, please contact us with the necessary information, and we will review your claim promptly.",
  },
];

const Copyright = () => {
  return (
    <Container className="max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <Heading title="Copyright" />
      <InformationSection
        description="© 2025 Afrobeutic Salon. All rights reserved. All content on this website, including but not limited to text, images, and logos, is the property of Afrobeutic Salon and protected by copyright laws."
        data={copyrightData}
      />
    </Container>
  );
};

export default Copyright;
