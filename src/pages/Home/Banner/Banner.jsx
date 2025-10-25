import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const Banner = ({ mainBanners }) => {
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
        {mainBanners &&
          mainBanners?.length > 0 &&
          mainBanners?.map((banner) => (
            <SwiperSlide key={banner?.id}>
              <img
                src={`${import.meta.env.VITE_API_MAIN}/${banner?.banner_image}`}
                alt="banner image"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Banner;
