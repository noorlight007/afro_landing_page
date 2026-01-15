const Heading = ({ title, subtitle }) => {
  return (
    <div
      className="flex flex-col w-full justify-center items-center font-bold mb-[60px]
    text-center "
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl ">{title}</h1>
      <p
        className="mt-2 font-normal text-xs md:text-sm xl:text-base 
      px-6 sm:px-0   w-11/12
      "
      >
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
