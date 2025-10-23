import React from "react";
import "./Trending.css";
import SmallProductCard from "../../../components/SmallProductCard/SmallProductCard";
import Categories from "../../../components/Categories/Categories";
// These products details will come from database

const Trending = ({ categories, trendingSectionProducts }) => {
  return (
    <section id="trending">
      <Categories categories={categories} />
      {/* all trending products */}
      <div className="trendingProducts">
        {trendingSectionProducts &&
          trendingSectionProducts?.length > 0 &&
          trendingSectionProducts?.map((product) => (
            <SmallProductCard key={product?.id} product={product} />
          ))}
      </div>
    </section>
  );
};

export default Trending;
