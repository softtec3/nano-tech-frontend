import React from "react";
import "./SignUp.css";
import Container from "../../components/Container/Container";
import { Link, useNavigate } from "react-router";
import useLang from "../../hooks/useLang";
import { getFormData } from "../../utils/getFormData";
import toast from "react-hot-toast";
const SignUp = () => {
  const { isBangla } = useLang();
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const formdata = getFormData(e.target);
    if (
      formdata.full_name == "" ||
      formdata.user_name == "" ||
      formdata.password == ""
    ) {
      toast.error("All fields are required");
      return;
    }
    try {
      fetch(`${import.meta.env.VITE_API}/user_signup.php`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            toast.success(data?.message);
            navigate("/login");
          } else {
            toast.error("Something went wrong");
            console.log(data?.message);
          }
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container>
      <section id="login">
        <div className="loginContainer">
          <h4>{isBangla ? "সাইনআপ করুন" : "Please Sign Up"}</h4>
          <form onSubmit={handleSignUp}>
            <input
              type="text"
              name="full_name"
              required
              placeholder={isBangla ? "আপনার পুরো নাম" : "Your Full Name"}
            />
            <input
              type="text"
              name="user_name"
              required
              placeholder={
                isBangla ? "ফোন নাম্বার/ইমেইল" : "Phone Number/Email"
              }
            />
            <input
              type="password"
              name="password"
              required
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
