import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ReviewNavigationBtn = () => {
  return (
    <>
      <section
        className="absolute flex left-1/2 transform -translate-x-1/2 items-center 
        top-40 px-10 z-30
        gap-48 sm:gap-80 md:gap-[420px] lg:gap-[560px] xl:gap-[700px] 2xl:gap-[800px]
        "
      >
        {/* arrow left */}
        <div
          className="swiper-button-prev text-lg lg:text-2xl xl:text-3xl
          w-6 lg:w-8 xl:w-10
          h-6 lg:h-8 xl:h-10 
          "
        >
          <IoIosArrowBack />
        </div>
        {/* arrow right */}
        <div
          className="swiper-button-next text-lg lg:text-2xl xl:text-3xl
          w-6 lg:w-8 xl:w-10
          h-6 lg:h-8 xl:h-10 
          "
        >
          <IoIosArrowForward />
        </div>
      </section>
    </>
  );
};

export default ReviewNavigationBtn;
