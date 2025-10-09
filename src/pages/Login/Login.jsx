import React from "react";
import "./Login.css";
import Container from "../../components/Container/Container";
import { Link } from "react-router";
import useLang from "../../hooks/useLang";
const Login = () => {
  const { isBangla } = useLang();
  return (
    <Container>
      <section id="login">
        <div className="loginContainer">
          <h4>{isBangla ? "সাইন ইন করুন" : "Please Sign In"}</h4>
          <form>
            <input
              type="text"
              name="emailOrPhone"
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
