import React from "react";
import "./SignUp.css";
import Container from "../../components/Container/Container";
import { Link } from "react-router";
import useLang from "../../hooks/useLang";
const SignUp = () => {
  const { isBangla } = useLang();
  return (
    <Container>
      <section id="login">
        <div className="loginContainer">
          <h4>{isBangla ? "সাইনআপ করুন" : "Please Sign Up"}</h4>
          <form>
            <input
              type="text"
              name="emailOrPhone"
              placeholder={
                isBangla ? "ফোন নাম্বার/ইমেইল" : "Phone Number/Email"
              }
            />
            <input
              type="password"
              name="password"
              placeholder={isBangla ? "পাসওয়ার্ড" : "Password"}
            />
            <button>{isBangla ? "সাইন আপ" : "Sign Up"}</button>
          </form>
          <p>
            {isBangla ? "একাউন্ট আছে?" : "Have an account?"}{" "}
            <Link to={"/login"}>{isBangla ? "লগইন" : "Please Login"}</Link>
          </p>
        </div>
      </section>
    </Container>
  );
};

export default SignUp;
