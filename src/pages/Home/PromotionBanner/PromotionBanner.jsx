import React from "react";
import "./PromotionBanner.css";
import Container from "../../../components/Container/Container";
const PromotionBanner = () => {
  return (
    <section id="promotionBanner">
      <Container>
        <div className="promoBannerImages">
          <img
            src="https://cdn.waltonplaza.com.bd/03787a2d-d881-43e8-b78f-d573b9558e55.jpeg"
            alt="promotion banner Image"
          />
          <img
            src="https://cdn.waltonplaza.com.bd/6672325d-9d28-435d-a927-bafa7b3d6aad.jpeg"
            alt="promotion banner Image 2"
          />
        </div>
      </Container>
    </section>
  );
};

export default PromotionBanner;
