import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const images = [
  "https://cdn.waltonplaza.com.bd/c18e214d-025c-493d-8aec-e754a3132534.jpeg",
  "https://cdn.waltonplaza.com.bd/019083d7-fc8f-4902-b208-f1ed09561064.jpeg",
  "https://cdn.waltonplaza.com.bd/5f4bad83-cc92-4834-9eae-52ef580f4b31.jpeg",
  "https://cdn.waltonplaza.com.bd/b07300df-63c3-4f0d-98e3-6b3a436d112a.jpeg",
  "https://cdn.waltonplaza.com.bd/b07300df-63c3-4f0d-98e3-6b3a436d112a.jpeg",
  "https://cdn.waltonplaza.com.bd/b07300df-63c3-4f0d-98e3-6b3a436d112a.jpeg",
];
const ProductImagesSlider = ({ handleImageChange }) => {
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
        {images?.map((image, index) => (
          <SwiperSlide onClick={() => handleImageChange(image)} key={index}>
            <div className="slide">
              <img src={image} alt="image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImagesSlider;
