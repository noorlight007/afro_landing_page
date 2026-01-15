import mission from "../../assets/images/mission.jpg";
import Container from "../../Components/Shared/Reusable/Container";

const OurMission = () => {
  return (
    <Container className=" max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      {/* image */}
      <img
        className="w-full h-52 sm:h-64 md:h-72 lg:h-96 xl:h-[500px]   border object-cover"
        src={mission}
        alt="our mission"
      />
      {/* text content */}
      <section className="text-center mt-10">
        <h1 className="text-4xl font-semibold mb-6">Our Mission</h1>

        <p className="text-xs lg:text-lg ">
          At Afrobeutic Salon, our mission is simple – to provide a haven for
          beauty, self-expression, and empowerment. We aim to inspire confidence
          in every client we serve by highlighting their individual beauty
          through personalized, high-quality salon services.
        </p>
      </section>
    </Container>
  );
};

export default OurMission;
