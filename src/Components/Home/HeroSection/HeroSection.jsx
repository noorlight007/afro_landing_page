import Container from "../../Shared/Reusable/Container";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const HeroSection = () => {
  return (
    <Container className="my-20   max-w-[1440px]">
      <div
        className="max-w-[450px] sm:max-w-[580px] md:max-w-[710px] lg:max-w-[950px]
      xl:container mx-auto  flex flex-col-reverse 
        sm:flex-row justify-between md:items-center gap-12"
      >
        {/* Left Side Text*/}
        <HeroText />

        {/* Right Side Images*/}
        <HeroImage />
      </div>
    </Container>
  );
};

export default HeroSection;
