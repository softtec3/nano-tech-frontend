import React from "react";
import useUser from "../hooks/useUser";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useUser();
  const { pathname } = useLocation();
  if (isLoading) return <LoadingSpinner />;
  if (user && user?.user_name) return children;
  return <Navigate to={"/login"} state={pathname} />;
};

export default PrivateRoute;
