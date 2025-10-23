import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const ProductImagesSlider = ({ handleImageChange, images = [] }) => {
  return (
    <div className="pdSlider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images &&
          images.length > 0 &&
          images?.map((image, index) => (
            <SwiperSlide
              onClick={() =>
                handleImageChange(`${import.meta.env.VITE_API_MAIN}/${image}`)
              }
              key={index}
            >
              <div key={index} className="slide">
                <img
                  src={`${import.meta.env.VITE_API_MAIN}/${image}`}
                  alt="image"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ProductImagesSlider;
