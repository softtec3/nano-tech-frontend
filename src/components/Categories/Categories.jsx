import React, { useEffect, useState } from "react";
import "./Categories.css";
import useLang from "../../hooks/useLang";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";
const Categories = ({ categories }) => {
  const { isBangla, lang } = useLang();
  const [allSubCategories, setAllSubcategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState("/");
  useEffect(() => {
    try {
      fetch(`${import.meta.env.VITE_API}/all_sub_categories.php?lang=${lang}`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setAllSubcategories(data?.data);
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
    <div
      onMouseOver={() => setIsSideOpen(true)}
      onMouseOut={() => setIsSideOpen(false)}
      className="categories"
    >
      <h5>{isBangla ? "ক্যাটেগরি" : "Categories"}</h5>
      <div className="categoriesList">
        {categories?.map((category) => (
          <Link
            to={`/shop?category_id=${category?.id}?category=${category?.category_name}`}
            onMouseOver={() => {
              setTargetUrl(
                `/shop?category_id=${category?.id}?category=${category?.category_name}`
              );
              const filtered = allSubCategories?.filter(
                (subCat) => subCat.category_id == category.id
              );
              setSelectedSubCategories(filtered);
            }}
            key={category?.id}
          >
            <div className="innerCat">
              <img
                src={`${import.meta.env.VITE_API_MAIN}/${
                  category?.category_image
                }`}
              />
              {category?.category_name}
            </div>
            {allSubCategories.find(
              (sub) => sub?.category_id == category?.id
            ) && <MdKeyboardArrowRight className="rightArrowIcon" />}
          </Link>
        ))}
      </div>
      {isSideOpen && selectedSubCategories?.length > 0 && (
        <div className="subCategories">
          {selectedSubCategories?.map((cat) => (
            <Link
              to={`${targetUrl}&sub_category_id=${cat?.id}&sub_category=${cat?.sub_category_name}`}
              key={cat?.id}
            >
              {cat?.sub_category_name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
