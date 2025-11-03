import React from "react";
import { Link } from "react-router";
import useLang from "../../hooks/useLang";
import { FaArrowLeft, FaHome } from "react-icons/fa";

const AccountInfoNavigation = ({ banglaName, englishName }) => {
  const { isBangla } = useLang();
  return (
    <div className="accountInfoTopNav">
      <div>
        <Link to={-1} style={{ display: "flex", alignItems: "center" }}>
          <FaArrowLeft size={25} style={{ cursor: "pointer" }} />
        </Link>
        {isBangla ? banglaName : englishName}
      </div>
      <Link to={"/"}>
        <FaHome size={25} />
      </Link>
    </div>
  );
};

export default AccountInfoNavigation;
