import { Suspense, lazy } from "react";
import Banner from "../Components/Home/Banner/Banner";
import HeroSection from "../Components/Home/HeroSection/HeroSection";
import WhyChooseUs from "../Components/Home/WhyChooseUs/WhyChooseUs";
import LoadingSpinner from "../Components/Shared/Reusable/LoadingSpinner";
import usePageTitle from "../hooks/usePageTitle";

const BusinessPotential = lazy(() =>
  import("../Components/Home/BusinessPotential/BusinessPotential")
);
const TenFeatures = lazy(() =>
  import("../Components/Home/TenFeatures/TenFeatures")
);
const SalonAdminsStaffs = lazy(() =>
  import("../Components/Home/SalonAdmins&Staffs/SalonAdminsStaffs")
);
const Review = lazy(() => import("../Components/Home/Review/Review"));
const ProfessionalSupport = lazy(() =>
  import("../Components/Home/ProfessionalSupport/ProfessionalSupport")
);

const Home = () => {
  usePageTitle("Home");

  return (
    <>
      <Banner />
      <HeroSection />
      <WhyChooseUs />
      <Suspense fallback={<LoadingSpinner />}>
        <BusinessPotential />
        <TenFeatures />
        <SalonAdminsStaffs />
        <Review />
        <ProfessionalSupport />
      </Suspense>
    </>
  );
};

export default Home;
