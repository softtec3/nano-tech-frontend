import React from "react";
import useUser from "../hooks/useUser";
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const PrivateSalesPointRoute = ({ children }) => {
  const { user, isLoading } = useUser();
  const { pathname } = useLocation();
  if (isLoading) return <LoadingSpinner />;
  if (user && user?.role === "sales-representative") return children;
  return <Navigate to={"/login"} state={pathname} />;
};

export default PrivateSalesPointRoute;
