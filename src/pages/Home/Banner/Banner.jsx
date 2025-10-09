import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const Banner = () => {
  // These images will come from database
  const bannerImages = [
    "https://cdn.waltonplaza.com.bd/e09210a3-a132-4f94-86a8-b4de1dec3a73.jpeg",
    "https://cdn.waltonplaza.com.bd/6ea365c5-c3a9-4f25-b7c5-6bb39c528d19.jpeg",
    "https://cdn.waltonplaza.com.bd/dc5c904c-6655-4b01-91ef-56f3f4fbb351.jpeg",
    "https://cdn.waltonplaza.com.bd/dc5c904c-6655-4b01-91ef-56f3f4fbb351.jpeg",
    "https://cdn.waltonplaza.com.bd/1bbb1b4d-2552-4948-b447-2f25d4e287bd.jpeg",
    "https://cdn.waltonplaza.com.bd/c95eeb5e-476b-4466-b930-a94597e430bd.jpeg",
    "https://cdn.waltonplaza.com.bd/44df05dd-9241-4018-90eb-5696999b420a.jpeg",
    "https://cdn.waltonplaza.com.bd/5da99f8f-44c6-4b20-be63-9bfa268c1cc0.jpeg",
    "https://cdn.waltonplaza.com.bd/80445a5f-d217-4eee-99d9-7ac6bef444aa.jpeg",
    "https://cdn.waltonplaza.com.bd/9a07af6b-25f7-40eb-94ac-566c7f25754f.jpeg",
  ];
  return (
    <div id="banner">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {bannerImages?.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="banner image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
