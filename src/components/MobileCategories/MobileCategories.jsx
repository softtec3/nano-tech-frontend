import React, { useEffect, useState } from "react";
import "./MobileCategories.css";
import useLang from "../../hooks/useLang";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import useLoader from "../../hooks/useLoader";
const MobileCategories = ({ setIsShow }) => {
  const { isBangla, lang } = useLang();
  const { setIsLoading } = useLoader();
  // These categories will come from the database
  const [categories, setCategories] = useState([]);
  const [allSubCategories, setAllSubcategories] = useState([]);
  const [targetUrl, setTargetUrl] = useState("/");
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  console.log(selectedSubCategories);
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
  // all sub categories
  useEffect(() => {
    try {
      setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  }, [lang, setIsLoading]);
  return (
    <div id="mobileCategories">
      <h5>{isBangla ? "ক্যাটেগরি" : "Categories"}</h5>
      <div className="mobileCategoryList">
        {categories &&
          categories?.length > 0 &&
          categories?.map((category) => (
            <div
              // onMouseOver={() => setSelectedSubCategories(category.subCategories)}
              className="parent"
              key={category.id}
            >
              <span className="mcLink">
                <Link
                  to={`/shop?category_id=${category?.id}?category=${category?.category_name}`}
                  onClick={() => setIsShow(false)}
                  className="mcInnerCat"
                >
                  <img
                    src={`${import.meta.env.VITE_API_MAIN}/${
                      category?.category_image
                    }`}
                    alt={category?.category_name}
                  />
                  {category?.category_name}
                </Link>
                <span
                  onClick={() => {
                    setTargetUrl(
                      `/shop?category_id=${category?.id}?category=${category?.category_name}`
                    );
                    const filtered = allSubCategories?.filter(
                      (subCat) => subCat.category_id == category.id
                    );
                    setSelectedSubCategories(filtered);
                  }}
                  className="mcArrowForward"
                >
                  {allSubCategories.find(
                    (sub) => sub?.category_id == category?.id
                  ) && <MdKeyboardArrowRight className="rightArrowIcon" />}
                </span>
              </span>
              <div className="child">
                {selectedSubCategories?.map((cat) => (
                  <Link
                    to={`${targetUrl}&sub_category_id=${cat?.id}&sub_category=${cat?.sub_category_name}`}
                    key={cat?.id}
                  >
                    {cat?.sub_category_name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MobileCategories;
