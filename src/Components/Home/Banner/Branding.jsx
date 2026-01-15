import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";

const Branding = () => {
  const { brands } = useLoaderData();

  return (
    <div className="bg-gradient-to-b from-secondary/30 via-white/60 to-secondary/30 py-4">
      <Marquee gradient={false} speed={80} pauseOnHover={true}>
        {brands?.map((brand) => (
          <img
            key={brand?.id}
            src={brand?.src}
            alt={brand?.name}
            className="
            w-20 md:w-28 lg:w-32 xl:w-36 
            h-16 md:h-20 lg:h-24 
            mx-10 md:mx-12 lg:mx-16 object-cover object-center
            opacity-90 hover:opacity-100 transition
            "
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Branding;
