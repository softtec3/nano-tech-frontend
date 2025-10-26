import React, { useEffect, useRef, useState } from "react";
import "./TopNavbar.css";
import { Link, useNavigate } from "react-router";
import useLang from "../../hooks/useLang";
import Logo from "../Logo/Logo";
import useUser from "../../hooks/useUser";
import toast from "react-hot-toast";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
const TopNavbar = () => {
  // This is top navbar. It will show to everywhere.
  const [isShow, setIsShow] = useState(false);
  const { isBangla, setLang } = useLang();
  const { user, setUser, isLoading } = useUser();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  // logout
  const handleLogout = () => {
    try {
      fetch(`${import.meta.env.VITE_API}/user_logout.php`, {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            toast.success(data?.message);
            setUser(null);
            navigate("/");
          } else {
            toast.error("Something went wrong");
          }
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    function handleClickOutside(event) {
      // If clicked outside of the menu, close it
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  if (isLoading) return <LoadingSpinner />;
  return (
    <div id="topNavbar">
      <div className="topNavLogo">
        <Logo />
      </div>
      <ul>
        {user && user?.user_name ? (
          <li>
            <Link onClick={handleLogout}>{isBangla ? "লগ-আউট" : "Logout"}</Link>
          </li>
        ) : (
          <li>
            <Link to={"/login"}>{isBangla ? "লগইন" : "Login"}</Link>
          </li>
        )}
        {user && user?.user_name ? (
          <li>
            <Link to={"/account"}>{isBangla ? "আকাউন্ট" : "Account"}</Link>
          </li>
        ) : (
          ""
        )}

        <li>
          <Link>{isBangla ? "সেলস পয়েন্টস" : "Sales Points"}</Link>
        </li>
        <li
          ref={menuRef}
          onClick={() => setIsShow(!isShow)}
          className="languageSwitch"
        >
          <Link to={"#"}>
            {isBangla ? "বাংলা" : "English"}
            <ul style={{ display: isShow ? "block" : "none" }}>
              <li
                onClick={() => {
                  setLang("bn");
                  localStorage.setItem("nano-lang", "bn");
                }}
              >
                বাংলা
              </li>
              <li
                onClick={() => {
                  setLang("en");
                  localStorage.setItem("nano-lang", "en");
                }}
              >
                English
              </li>
            </ul>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNavbar;
