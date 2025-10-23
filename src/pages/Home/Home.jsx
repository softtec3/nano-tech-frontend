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
import Loader from "../../components/Loader/Loader";
import useLoader from "../../hooks/useLoader";
const Home = () => {
  const { lang } = useLang();
  const { setIsLoading } = useLoader();
  // This is home page
  // all categories
  const [categories, setCategories] = useState([]);
  // all products
  const [allProducts, setAllProducts] = useState([]);
  // fetch categories from database
  useEffect(() => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  }, [lang, setIsLoading]);
  // Fetch all products from database
  useEffect(() => {
    try {
      fetch(`${import.meta.env.VITE_API}/all_products_by_lang.php?lang=${lang}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setAllProducts(data?.data);
          } else {
            console.log(data?.message);
          }
        });
    } catch (error) {
      console.log(error.message);
    }
  }, [lang]);
  const trendingSectionProducts = allProducts?.slice(0, 8);
  const productSectionOneProducts = allProducts?.slice(8, 12);
  const productSectionTwoProducts = allProducts?.slice(12);
  const productSectionThreeProducts = allProducts;
  return (
    <div>
      {/* Loader */}
      <Loader />
      <Container>
        {/* Home category */}
        <HomeCategory categories={categories} />
        {/* Banner section */}
        <Banner />
        {/* Why Choose us section */}
        <WhyChooseUs />
        {/* Trending Section */}
        <Trending
          categories={categories}
          trendingSectionProducts={trendingSectionProducts}
        />
      </Container>
      {/* Promotion Banner */}
      <PromotionBanner />
      {/* Product section one*/}
      <Container>
        <ProductsSectionOne
          productSectionOneProducts={productSectionOneProducts}
        />
      </Container>
      {/* Promotion banner 2 */}
      <Container>
        <PromotionBannerTwo />
      </Container>
      {/* Product Section 2 */}
      <Container>
        <ProductsSectionTwo
          productSectionTwoProducts={productSectionTwoProducts}
        />
      </Container>
      {/* Promotion Banner Three */}
      <Container>
        <PromotionBannerThree />
      </Container>
      {/* Product Section Three */}
      <Container>
        <ProductsSectionThree
          productSectionThreeProducts={productSectionThreeProducts}
        />
      </Container>
      {/* Mini blog section */}
      {/* <Container>
        <MiniBlog />
      </Container> */}
    </div>
  );
};

export default Home;
