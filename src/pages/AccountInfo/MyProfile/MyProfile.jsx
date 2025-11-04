import React, { useEffect, useState } from "react";
import "./myProfile.css";
import AccountInfoNavigation from "../../../components/AccountInfoNavigation/AccountInfoNavigation";
import useUser from "../../../hooks/useUser";
import { FaPenToSquare } from "react-icons/fa6";
import { useNavigate } from "react-router";
const MyProfile = () => {
  const { user } = useUser();
  const [profileInfo, setProfileInfo] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    try {
      fetch(
        `${import.meta.env.VITE_API}/get_user_information.php?user_id=${
          user.user_id
        }`,
        { credentials: "include" }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setProfileInfo(data?.data);
          } else {
            console.log(data?.message);
          }
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  }, [user]);
  return (
    <div id="myProfile">
      <AccountInfoNavigation
        banglaName={"আমার প্রোফাইল"}
        englishName={"My Profile"}
      />
      {/* profile container */}
      <div className="orderTable profileContainer">
        <div className="profileEditButton">
          <button onClick={() => navigate("/account/manageProfile")}>
            <FaPenToSquare />
            Edit
          </button>
        </div>
        <img
          src={`${import.meta.env.VITE_API_MAIN}/${profileInfo?.image}`}
          alt=""
        />
        <div className="profileOthersInfo">
          <table>
            <tbody>
              <tr>
                <td>
                  <b>
                    Name <span>:</span>
                  </b>
                </td>
                <td>{profileInfo?.full_name}</td>
              </tr>
              <tr>
                <td>
                  <b>
                    Mobile<span>:</span>
                  </b>
                </td>
                <td>{profileInfo?.mobile_number}</td>
              </tr>
              <tr>
                <td>
                  <b>
                    Label<span>:</span>
                  </b>
                </td>
                <td>{profileInfo?.address_label}</td>
              </tr>
              <tr>
                <td>
                  <b>
                    Area<span>:</span>
                  </b>
                </td>
                <td>{profileInfo?.area}</td>
              </tr>
              <tr>
                <td>
                  <b>
                    Address<span>:</span>
                  </b>
                </td>
                <td>{profileInfo?.address}</td>
              </tr>
              <tr>
                <td>
                  <b>
                    Landmark<span>:</span>
                  </b>
                </td>
                <td>{profileInfo?.landmark}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
