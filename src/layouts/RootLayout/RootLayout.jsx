import React from "react";
import "./RootLayout.css";
import { Outlet, useLocation } from "react-router";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import MobileNavbar from "../../components/MobileNavbar/MobileNavbar";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const RootLayout = () => {
  const location = useLocation();
  const isLocation =
    location.pathname.split("/").includes("product") &&
    window.innerWidth <= 1200;
  const isLocation2 =
    location.pathname.split("/").includes("shop") && window.innerWidth <= 1200;
  const isLocation3 =
    location.pathname.split("/").includes("account") &&
    window.innerWidth <= 1200;
  return (
    <>
      <ScrollToTop />
      {/* Root Layout */}
      <div style={{ position: "relative" }}>
        <div className="bothNavbar">
          <Container>
            {isLocation || isLocation2 || isLocation3 ? "" : <TopNavbar />}
          </Container>
        </div>
        {isLocation || isLocation2 || isLocation3 ? "" : <MainNavbar />}
        <Outlet />
        <Footer />
        {/* Mobile navbar */}
        <MobileNavbar />
      </div>
    </>
  );
};

export default RootLayout;
