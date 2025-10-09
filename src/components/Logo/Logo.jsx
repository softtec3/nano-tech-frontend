import React from "react";
import "./Logo.css";
import { Link } from "react-router";
const Logo = () => {
  return (
    <Link to={"/"} id="logo">
      <img src="/logo.png" alt="nanoTech logo" />
    </Link>
  );
};

export default Logo;
