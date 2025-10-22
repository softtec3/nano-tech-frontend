import React, { useState } from "react";
import { LoaderContext } from "./LoaderContext";

const LoaderContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderContextProvider;
