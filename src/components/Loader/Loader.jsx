import React from "react";
import "./loader.css";
import useLoader from "../../hooks/useLoader";
const Loader = () => {
  const { isLoading } = useLoader();
  if (isLoading) {
    return <div id="loadingLoader">Loader</div>;
  }
};

export default Loader;
