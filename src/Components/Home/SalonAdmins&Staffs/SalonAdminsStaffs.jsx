import hero from "../../../assets/images/trusted-partners.png";

const SalonAdminsStaffs = () => {
  return (
    <div
      className="max-w-[450px] sm:max-w-[580px] md:max-w-[710px] lg:max-w-[950px]
      xl:container mx-auto lg:px-6 xl:px-10 2xl:px-40 px-2
       grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-center mt-5 
       "
    >
      {/* left side text */}
      <div className=" text-center px-10 sm:px-0">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold ">
          Salon Admins & Staffs
        </h2>
        <p
          className="text-primary font-semibold mt-1 md:mt-2 lg:mt-4 
        text-xs sm:text-sm lg:text-base xl:text-[23px]"
        >
          ADMIN WITH SAME LOOK & FEEL AS THE FRONT-END
        </p>
        <p className="opacity-50 mt-1 md:mt-4 lg:mt-8 text-xs lg:text-sm xl:text-xl">
          Porto Admin integration gives you a package of new features to add in
          the front-end template,
          <span className="hidden md:inline">
            such as advanced tables, advanced forms, etc… Also allows you to
            create the back-end of your site using the same design.
          </span>
        </p>
      </div>

      {/* image */}
      <div className="relative rounded-lg flex justify-end">
        <img
          src={hero}
          alt="Business Growth"
          className=" 
              w-10/12 
              h-full 
             rounded-lg"
        />
      </div>
    </div>
  );
};

export default SalonAdminsStaffs;
