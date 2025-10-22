import React from "react";
import "./HomeCategory.css";
import { Link } from "react-router";
const HomeCategory = ({ categories }) => {
  // Home page category section
  return (
    <section id="homeCategory">
      {categories &&
        categories.length > 0 &&
        categories?.map((category) => (
          <Link
            to={`/shop?category_id=${category?.id}&category=${category?.category_name}`}
            className="singleCategory"
            key={category?.id}
          >
            <div className="scImage">
              <img
                src={`${import.meta.env.VITE_API_MAIN}/${
                  category?.category_image
                }`}
                alt={category.name}
              />
            </div>
            <p>{category?.category_name}</p>
          </Link>
        ))}
    </section>
  );
};

export default HomeCategory;
