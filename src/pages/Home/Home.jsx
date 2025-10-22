import React, { useEffect, useState } from "react";
import "./Home.css";
import Container from "../../components/Container/Container";
import HomeCategory from "./HomeCategory/HomeCategory";
import Banner from "./Banner/Banner";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import Trending from "./Trending/Trending";
import PromotionBanner from "./PromotionBanner/PromotionBanner";
import ProductsSectionOne from "./ProductsSectionOne/ProductsSectionOne";
import PromotionBannerTwo from "./PromotionBannerTwo/PromotionBannerTwo";
import ProductsSectionTwo from "./ProductSectionTwo/ProductSectionTwo";
import PromotionBannerThree from "./PromotionBannerThree/PromotionBannerThree";
import ProductsSectionThree from "./ProductSectionThree/ProductSectionThree";
import MiniBlog from "./MiniBlog/MiniBlog";
import useLang from "../../hooks/useLang";
const Home = () => {
  const { lang } = useLang();
  // This is home page
  const [categories, setCategories] = useState([]);
  // fetch categories from database
  useEffect(() => {
    try {
      fetch(`${import.meta.env.VITE_API}/all_categories.php?lang=${lang}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setCategories(data?.data);
          } else {
            console.log(data?.message);
          }
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  }, [lang]);
  return (
    <div>
      <Container>
        {/* Home category */}
        <HomeCategory categories={categories} />
        {/* Banner section */}
        <Banner />
        {/* Why Choose us section */}
        <WhyChooseUs />
        {/* Trending Section */}
        <Trending categories={categories} />
      </Container>
      {/* Promotion Banner */}
      <PromotionBanner />
      {/* Product section one*/}
      <Container>
        <ProductsSectionOne />
      </Container>
      {/* Promotion banner 2 */}
      <Container>
        <PromotionBannerTwo />
      </Container>
      {/* Product Section 2 */}
      <Container>
        <ProductsSectionTwo />
      </Container>
      {/* Promotion Banner Three */}
      <Container>
        <PromotionBannerThree />
      </Container>
      {/* Product Section Three */}
      <Container>
        <ProductsSectionThree />
      </Container>
      {/* Mini blog section */}
      {/* <Container>
        <MiniBlog />
      </Container> */}
    </div>
  );
};

export default Home;
