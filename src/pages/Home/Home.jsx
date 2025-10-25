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
  // all banners
  const [banners, setBanners] = useState([]);
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
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  }, [lang, setIsLoading]);
  // fetch all banners from database
  useEffect(() => {
    try {
      setIsLoading(true);
      fetch(`${import.meta.env.VITE_API}/all_banners.php`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setBanners(data?.data);
          } else {
            console.log(data?.message);
          }
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading]);
  // products
  const trendingSectionProducts = allProducts?.slice(0, 8);
  const productSectionOneProducts = allProducts?.slice(8, 12);
  const productSectionTwoProducts = allProducts?.slice(12);
  const productSectionThreeProducts = allProducts;
  // banners
  const mainBanners =
    banners && banners?.filter((banner) => banner?.banner_section == "main");
  const rectangleTwo =
    banners &&
    banners?.filter((banner) => banner?.banner_section == "rectangle_two");
  const grid =
    banners && banners?.filter((banner) => banner?.banner_section == "grid");
  const rectangleThree =
    banners &&
    banners?.filter((banner) => banner?.banner_section == "rectangle_three");
  return (
    <div>
      {/* Loader */}
      <Loader />
      <Container>
        {/* Home category */}
        <HomeCategory categories={categories} />
        {/* Banner section */}
        <Banner mainBanners={mainBanners} />
        {/* Why Choose us section */}
        <WhyChooseUs />
        {/* Trending Section */}
        <Trending
          categories={categories}
          trendingSectionProducts={trendingSectionProducts}
        />
      </Container>
      {/* Promotion Banner */}
      <PromotionBanner rectangleTwo={rectangleTwo} />
      {/* Product section one*/}
      <Container>
        <ProductsSectionOne
          productSectionOneProducts={productSectionOneProducts}
        />
      </Container>
      {/* Promotion banner 2 */}
      <Container>
        <PromotionBannerTwo grid={grid} />
      </Container>
      {/* Product Section 2 */}
      <Container>
        <ProductsSectionTwo
          productSectionTwoProducts={productSectionTwoProducts}
        />
      </Container>
      {/* Promotion Banner Three */}
      <Container>
        <PromotionBannerThree rectangleThree={rectangleThree} />
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
