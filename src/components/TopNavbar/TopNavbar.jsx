import React, { useEffect, useRef, useState } from "react";
import "./TopNavbar.css";
import { Link } from "react-router";
import useLang from "../../hooks/useLang";
import Logo from "../Logo/Logo";
const TopNavbar = () => {
  // This is top navbar. It will show to everywhere.
  const [isShow, setIsShow] = useState(false);
  const { isBangla, setLang } = useLang();
  const menuRef = useRef(null);
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
  return (
    <div id="topNavbar">
      <div className="topNavLogo">
        <Logo />
      </div>
      <ul>
        <li>
          <Link to={"/login"}>{isBangla ? "লগইন" : "Login"}</Link>
        </li>
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
