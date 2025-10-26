import React from "react";
import "./Login.css";
import Container from "../../components/Container/Container";
import { Link, useLocation, useNavigate } from "react-router";
import useLang from "../../hooks/useLang";
import { getFormData } from "../../utils/getFormData";
import toast from "react-hot-toast";
import useUser from "../../hooks/useUser";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
const Login = () => {
  const { isBangla } = useLang();
  const { setUser, isLoading, setIsLoading, user } = useUser();
  const { state } = useLocation();
  const navigate = useNavigate();
  if (user && user?.user_name) navigate("/");
  const handleSignIn = (e) => {
    e.preventDefault();
    const formData = getFormData(e.target);
    try {
      setIsLoading(true);
      fetch(`${import.meta.env.VITE_API}/user_login.php`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            if (data?.message == "Login successful") {
              setUser(data?.data);
              toast.success(data?.message);
              state ? navigate(state) : navigate("/");
            } else {
              toast.error(data?.message);
            }
          } else {
            console.log(data?.message);
          }
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) return <LoadingSpinner />;
  return (
    <Container>
      <section id="login">
        <div className="loginContainer">
          <h4>{isBangla ? "সাইন ইন করুন" : "Please Sign In"}</h4>
          <form onSubmit={handleSignIn}>
            <input
              type="text"
              name="user_name"
              placeholder={isBangla ? "ফোন নাম্বার/ইমেল" : "Phone Number/Email"}
            />
            <input
              type="password"
              name="password"
              placeholder={isBangla ? "পাসওয়ার্ড" : "Password"}
            />
            <Link to={"/forget-password"}>
              {isBangla ? "পাসওয়ার্ড ভুলে গেছেন?" : "Forget Password?"}
            </Link>
            <button>{isBangla ? "লগইন" : "Login"}</button>
          </form>
          <p>
            {isBangla ? "একাউন্ট নেই?" : "Don't have an account?"}{" "}
            <Link to={"/signup"}>
              {isBangla ? "সাইনআপ করুন" : "Please Sign Up"}
            </Link>
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Login;
