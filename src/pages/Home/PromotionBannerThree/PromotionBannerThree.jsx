import React from "react";
import "./PromotionBannerThree.css";
const PromotionBannerThree = ({ rectangleThree = [] }) => {
  return (
    <section id="promotionBannerThree">
      {rectangleThree &&
        rectangleThree?.length > 0 &&
        rectangleThree?.slice(0, 3).map((banner) => (
          <div key={banner?.id}>
            <img
              src={`${import.meta.env.VITE_API_MAIN}/${banner?.banner_image}`}
              alt="banner image"
            />
          </div>
        ))}
    </section>
  );
};

export default PromotionBannerThree;
