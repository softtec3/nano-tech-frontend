import React from "react";
import "./PromotionBanner.css";
import Container from "../../../components/Container/Container";
const PromotionBanner = ({ rectangleTwo = [] }) => {
  return (
    <section id="promotionBanner">
      <Container>
        <div className="promoBannerImages">
          {rectangleTwo &&
            rectangleTwo?.length > 0 &&
            rectangleTwo
              ?.slice(0, 2)
              .map((banner) => (
                <img
                  key={banner?.id}
                  src={`${import.meta.env.VITE_API_MAIN}/${
                    banner?.banner_image
                  }`}
                  alt="promotion banner Image"
                />
              ))}
        </div>
      </Container>
    </section>
  );
};

export default PromotionBanner;
