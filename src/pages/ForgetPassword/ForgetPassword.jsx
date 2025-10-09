import React from "react";
import Container from "../../components/Container/Container";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import "./ForgetPassword.css";
import useLang from "../../hooks/useLang";
const ForgetPassword = () => {
  const { isBangla } = useLang();
  return (
    <Container>
      <Link className="goBack" to={"/login"}>
        <FaArrowLeft />
        {isBangla ? "ফিরে যান" : "Go Back"}
      </Link>
      <section id="login" style={{ alignItems: "start" }}>
        <div className="loginContainer">
          <h4>{isBangla ? "পাসওয়ার্ড ভুলে গেছেন?" : "Forgot password?"}</h4>
          <form>
            <input
              type="text"
              name="emailOrPhone"
              placeholder={
                isBangla ? "ফোন নাম্বার/ইমেইল" : "Phone Number/Email"
              }
            />
            <button>{isBangla ? "ওটিপি পাঠান" : "Send OTP"}</button>
          </form>
        </div>
      </section>
    </Container>
  );
};

export default ForgetPassword;
