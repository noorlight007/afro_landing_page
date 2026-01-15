import review from "../../../assets/images/curvedRectangle.png";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../../Custom-css/review.css";
import { Autoplay, Navigation } from "swiper/modules";
import ReviewNavigationBtn from "./ReviewNavigationBtn";
import ReviewCard from "../../../Cards/ReviewCard";
import { motion as Motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";

const Review = () => {
  const [active, setActive] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { reviews } = useLoaderData();

  useEffect(() => {
    // resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // substring
  const getSubstringLength = () => {
    if (windowWidth >= 1024) {
      return 200;
    } else if (windowWidth >= 768) {
      return 150;
    } else if (windowWidth >= 640) {
      return 90;
    } else {
      return 50;
    }
  };

  return (
    <div className="relative sm:mt-8 md:mt-16 lg:mt-32 xl:mt-48">
      {/* bg image */}
      <img
        src={review}
        className="absolute top-7 sm:-top-5 md:-top-12 lg:-top-24 xl:-top-40 w-full
        h-56 sm:h-80 md:h-96 lg:h-[500px] xl:h-[590px] "
        alt="curved Rectangle"
      />

      {/* text */}
      <div
        className="text-center absolute left-1/2 -translate-x-1/2 
        top-16 sm:top-9 md:top-5 lg:-top-5 xl:-top-16"
      >
        <Motion.h2
          initial={{ opacity: 0, scale: 1.5 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0,
            ease: "easeInOut",
          }}
          className="text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-medium"
        >
          100+
        </Motion.h2>
        <Motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
          className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-4xl font-bold"
        >
          Salons Already Using Afrobeutic
        </Motion.p>
      </div>

      {/* card content */}
      <Motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-center "
      >
        {/* slider */}
        <div className="w-full relative">
          <Swiper
            breakpoints={{
              1439: { spaceBetween: 700 },
              1280: { spaceBetween: 600 },
              1024: { spaceBetween: 500 },
              768: { spaceBetween: 380 },
              600: { spaceBetween: 300 },
              0: { spaceBetween: 200 },
            }}
            loopAdditionalSlides={3}
            slidesPerView={3}
            onSlideChange={(cur) => setActive(cur.realIndex)}
            centeredSlides={true}
            loop={true}
            speed={1000}
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <ReviewCard
                  review={review}
                  active={active}
                  i={i}
                  getSubstringLength={getSubstringLength}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <ReviewNavigationBtn />
        </div>
      </Motion.div>
    </div>
  );
};

export default Review;
