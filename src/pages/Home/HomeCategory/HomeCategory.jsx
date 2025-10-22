import React, { useEffect, useState } from "react";
import "./HomeCategory.css";
import { Link } from "react-router";
import useLang from "../../../hooks/useLang";
const HomeCategory = () => {
  const { lang } = useLang();
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
  // Home page category section
  return (
    <section id="homeCategory">
      {categories &&
        categories.length > 0 &&
        categories?.map((category) => (
          <Link
            to={`/shop/${category?.id}?category=${category?.category_name}`}
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
