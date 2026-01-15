const BusinessPotential = () => {
  return (
    <div
      className="relative overflow-hidden mt-20 w-full sm:max-w-11/12 xl:container mx-auto
    h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]
    transition-all duration-500 ease-in-out"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/src/assets/Hair Salon.mp4" type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center w-full h-full px-8 md:px-16 bg-black/70">
        {/* Text */}
        <div className="  text-white flex flex-col text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium ">
            Unlock your business potential
          </h1>
          <p
            className="mt-4 md:mt-8  lg:text-lg xl:text-xl leading-relaxed
           px-5 sm:px-32 md:px-10 lg:px-24 xl:px-60 2xl:px-72
           "
          >
            Simplify bookings, showcase your style, attract customers, and grow
            your salon business with Afrobeutic's powerful tools
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessPotential;
