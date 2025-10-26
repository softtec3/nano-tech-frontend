import React from "react";
import "./loadingSpinner.css";
import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css";

// Default values shown

const LoadingSpinner = () => {
  return (
    <div id="loadingSpinner">
      <Ring size="40" stroke="5" bgOpacity="0" speed="2" color="black" />
    </div>
  );
};

export default LoadingSpinner;
