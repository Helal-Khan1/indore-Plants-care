import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Sloder = () => {
  return (
    <div className="w-full p-2 container mx-auto bg-green-300 h-[400px] mt-20 mb-5 relative overflow-hidden">
      <h1 className="text-center  bebas-regular font-bold text-6xl text-black/60 mb-5">
        Plant trees, save the environment.
      </h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        className="h-full"
        // onSlideChange={() => }
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {/* Swiper Slides */}
        <SwiperSlide>
          <img
            // 💡
            src="https://i.ibb.co.com/1YvQ6gD0/images10.jpg"
            className="w-cover h-full object-cover mx-auto"
            alt="Hero Image 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/DPTVKYVR/spider-plant-care-7.jpg"
            className="w-cover h-full object-cover  mx-auto"
            alt="Hero Image 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/DPTVKYVR/spider-plant-care-7.jpg"
            className="w-cover h-full object-cover mx-auto"
            alt="Hero Image 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/fYdLZSLm/images13.webp"
            className="w-cover h-full object-cover mx-auto"
            alt="Hero Image 4"
          />
        </SwiperSlide>

        <div className="swiper-button-prev-custom absolute top-1/2 left-4 z-10 cursor-pointer p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all text-white shadow-lg -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-4 z-10 cursor-pointer p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all text-white shadow-lg -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </Swiper>
    </div>
  );
};

export default Sloder;
