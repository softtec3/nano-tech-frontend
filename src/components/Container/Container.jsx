import React from "react";
import "./Container.css";
const Container = ({ children }) => {
  // Default container for width management
  return <div id="container">{children}</div>;
};

export default Container;
