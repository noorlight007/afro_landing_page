import { useLoaderData } from "react-router-dom";
import ZigZagCard from "../../Cards/ZigZagCard";
import logo from "../../assets/images/logo.png";
import { FaFacebookF, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import WhyAfrobeuticBtn from "../../Buttons/WhyAfrobeuticBtn";
import WaveSvg from "../../Components/Shared/Reusable/WaveSvg";

const icons = [
  {
    id: 1,
    icon: <FaFacebookF />,
    name: "Facebook",
    link: "https://www.facebook.com",
  },
  { id: 2, icon: <FaTiktok />, name: "Tiktok", link: "https://www.tiktok.com" },
  {
    id: 3,
    icon: <FaTwitter />,
    name: "Twitter",
    link: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: <FaYoutube />,
    name: "Youtube",
    link: "https://www.youtube.com",
  },
];

const WhyAfrobeutic = () => {
  const data = useLoaderData();

  return (
    <div className=" min-h-screen ">
      <section className="bg-gray-100 pt-10 ">
        {/* welcome card */}
        <div className="md:mt-5 lg:pl-60 xl:pl-96 pb-6 px-5">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
            The Smarter Way to Manage & Market Your Salon
          </h2>
          <p className="mb-6 text-sm lg:text-base rubik font-light">
            In an industry where customer expectations are rising and
            competition is fierce, Afrobeutic gives your salon the competitive
            edge it needs to thrive. Traditional salon systems are outdated, and
            generic booking tools fall short. Afrobeutic stands out by combining
            intelligent automation, personalized client care, and marketing
            capabilities—all under one modern platform. Our AI chatbots don’t
            just take bookings—they build customer relationships. Our Lookbook
            doesn’t just store photos—it helps stylists recreate perfect looks.
            <br /> <br /> And our dashboards don’t just show numbers—they guide
            business growth. Afrobeutic is built for the modern salon owner who
            wants to stay ahead, build a strong digital presence, and deliver
            memorable experiences to every client. Whether you're just starting
            or scaling to multiple branches, choosing Afrobeutic means choosing
            a future-proof, salon-smart solution that grows with your business.
          </p>

          <WhyAfrobeuticBtn />
        </div>
        {/* svg */}
        <WaveSvg />
      </section>

      {/* zigzag card */}
      <ZigZagCard data={data} />

      {/* bottom section */}
      <section
        className="flex flex-col xl:flex-row justify-between gap-10 xl:items-center 
              max-w-10/12 mx-auto"
      >
        {/* Logo and Text */}
        <div
          className="xl:w-1/2 max-w-2xl flex flex-col items-start gap-3 border p-6
         border-black/10 shadow"
        >
          <img src={logo} alt="Logo" className="w-28 lg:w-40 h-auto" />
          <h2 className="mt-2 text-sm md:text-lg font-normal">
            Ready to Elevate Your Salon? Afrobeutic is more than a platform—it’s
            your salon’s digital backbone. Start with a free trial, explore the
            tools, and see how smart your salon can really become.
          </h2>

          <WhyAfrobeuticBtn />
        </div>

        {/* 4 Buttons */}
        <div
          className="xl:w-1/2 w-full grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-3 
        group"
        >
          {icons.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-8/12 mx-auto h-[77px] bg-black"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full bg-black text-white flex flex-col
              items-center justify-center font-semibold 
              hover:-translate-y-1 hover:-translate-x-1
              group-hover:bg-[#b0b7c2] hover:bg-black transition-colors duration-200"
              >
                <span className="text-2xl lg:text-3xl mb-1">{item.icon}</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyAfrobeutic;
