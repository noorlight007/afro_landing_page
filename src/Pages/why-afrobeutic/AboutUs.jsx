import aboutImage from "../../assets/images/mission.jpg";
import Container from "../../Components/Shared/Reusable/Container";
import Heading from "../../Components/Shared/Reusable/Heading";

const AboutUs = () => {
  return (
    <Container className="py-16 max-w-2xl lg:max-w-5xl">
      <Heading title={"About Us"} />

      <div className="grid grid-cols-1 lg:grid-cols-12  gap-5 items-center">
        {/*  Image */}
        <div className="lg:col-span-4 ">
          <img
            className="w-full h-52 sm:h-64 md:h-72 lg:h-60 rounded-lg shadow-md object-cover"
            src={aboutImage}
            alt="About Us"
          />
        </div>
        {/* Text  */}
        <div className="lg:col-span-8 lg:px-5">
          <h1 className="text-2xl lg:text-3xl font-semibold ">
            We provide online management solutions for salons
          </h1>

          <p className="text-sm lg:text-base opacity-70 my-6">
            Are you tired of navigating endless reservation platforms that never
            work as intended, and full of frustrating errors that drive your
            customers away? Imagine a world where booking is as effortless as
            having a conversation with a trusted expert. Unlike traditional
            platforms that rely on websites, apps, or form-based booking
            systems—which can feel rigid and outdated—Afrobeutic’s cutting-edge,
            chatbot-based interaction system allows your customers to book
            services through a two-way conversational chat. Instead of tedious
            forms, your customers experience a natural conversation—just like
            chatting with customer service. Questions are answered instantly,
            and bookings happen in real time. We know running a salon takes time
            and energy. Free up your valuable resources and let our AI-powered
            chatbot handle your bookings and inquiries, so you can focus on what
            you do best—delivering exceptional service.
          </p>

          {/* Button */}
          <button
            className="text-white font-medium py-2 px-3 lg:px-5 
          text-xs md:text-sm lg:text-lg bg-primary rounded-lg "
          >
            Discover Our Services
          </button>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
