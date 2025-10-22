import React, { useContext } from "react";
import { LoaderContext } from "../contexts/LoaderContext/LoaderContext";

const useLoader = () => {
  const { isLoading, setIsLoading } = useContext(LoaderContext);
  return { isLoading, setIsLoading };
};

export default useLoader;
