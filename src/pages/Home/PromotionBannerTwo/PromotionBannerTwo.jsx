import React from "react";
import "./PromotionBannerTwo.css";
const PromotionBannerTwo = ({ grid = [] }) => {
  const banners = grid?.slice(0, 5);
  return (
    <section id="promotionBannerTwo">
      <div className="pb1">
        <img
          src={`${import.meta.env.VITE_API_MAIN}/${banners[0]?.banner_image}`}
          alt="banner image"
        />
      </div>
      <div className="pb2">
        <img
          src={`${import.meta.env.VITE_API_MAIN}/${banners[1]?.banner_image}`}
          alt="banner image"
        />
      </div>
      <div className="pb3">
        <img
          src={`${import.meta.env.VITE_API_MAIN}/${banners[2]?.banner_image}`}
          alt="banner image"
        />
      </div>
      <div className="pb4">
        <img
          src={`${import.meta.env.VITE_API_MAIN}/${banners[3]?.banner_image}`}
          alt="banner image"
        />
      </div>
      <div className="pb5">
        <img
          src={`${import.meta.env.VITE_API_MAIN}/${banners[4]?.banner_image}`}
          alt="banner image"
        />
      </div>
    </section>
  );
};

export default PromotionBannerTwo;
