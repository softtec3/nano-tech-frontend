import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);
  console.log(user);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/user_authentication.php`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.user_name) {
          console.log(data?.data);
          setUser(data?.data);
          setIsLoading(false);
        } else {
          setUser(null);
          setIsLoading(false);
        }
      });
  }, []);
  const authDetails = { user, setUser, isLoading, setIsLoading };
  return (
    <AuthContext.Provider value={authDetails}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
