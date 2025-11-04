import React, { useEffect, useRef, useState } from "react";
import "./manageProfile.css";
import AccountInfoNavigation from "../../../components/AccountInfoNavigation/AccountInfoNavigation";
import useUser from "../../../hooks/useUser";
import useLang from "../../../hooks/useLang";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
const ManageProfile = () => {
  const { user } = useUser();
  const { isBangla } = useLang();
  const [profileInfo, setProfileInfo] = useState({});
  const imgRef = useRef(null);
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(null);
  //   fetching user info
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
            setImageSrc(
              `${import.meta.env.VITE_API_MAIN}/${data?.data?.image}`
            );
          } else {
            console.log(data?.message);
          }
        })
        .catch((error) => console.log(error.message));
    } catch (error) {
      console.log(error.message);
    }
  }, [user]);
  const handleImage = () => {
    imgRef.current.click();
  };

  //   submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      fetch(
        `${import.meta.env.VITE_API}/update_user_profile_info.php?user_id=${
          user?.user_id
        }`,
        {
          method: "POST",
          credentials: "include",
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            toast.success(data?.message);
            navigate("/account/myProfile");
          } else {
            toast.error(
              isBangla ? "কিছু সমস্যা হয়েছে" : "Something went wrong"
            );
            console.log(data?.message);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div id="manageProfile" className="defaultSection">
      <AccountInfoNavigation
        englishName={"Manage Profile"}
        banglaName={"প্রোফাইল ম্যানেজ"}
      />
      <div className="orderTable">
        <form onSubmit={handleSubmit} className="customerAddressForm">
          <div className="addFormElm mpImageContainer">
            <img className="mpImage" src={imageSrc} alt="" />
            <div className="mpContainerButton">
              <button onClick={handleImage} className="btn" type="button">
                Add Profile Picture
              </button>
              <input
                ref={imgRef}
                onChange={(e) =>
                  setImageSrc(URL.createObjectURL(e.target.files[0]))
                }
                type="file"
                name="image"
                style={{ display: "none" }}
              />
            </div>
          </div>

          {/* Address form */}
          <div className="flexInput">
            <div className="addFormElm">
              <label htmlFor="Name">{isBangla ? "নাম*" : "Name*"}</label>
              <input
                type="text"
                name="full_name"
                defaultValue={profileInfo?.full_name}
                required
                placeholder={isBangla ? "আপনার নাম দিন" : "Input Your Name"}
              />
            </div>
            <div className="addFormElm">
              <label htmlFor="mobile">
                {isBangla ? "মোবাইল নাম্বার" : "Mobile Number*"}
              </label>
              <input
                type="text"
                name="mobile_number"
                defaultValue={profileInfo?.mobile_number}
                required
                placeholder={
                  isBangla ? "সঠিক নাম্বার দিন" : "Input Valid Number"
                }
              />
            </div>
          </div>
          <div className="flexInput">
            <div className="addFormElm">
              <label htmlFor="addressLabel">
                {isBangla ? "ঠিকানা লেবেল" : "Address Label*"}
              </label>
              <select
                name="address_label"
                required
                value={profileInfo.address_label}
                onChange={(e) =>
                  setProfileInfo((prev) => ({
                    ...prev,
                    address_label: e.target.value,
                  }))
                }
              >
                <option value="home">{isBangla ? "হোম" : "Home"}</option>
                <option value="office">{isBangla ? "অফিস" : "Office"}</option>
                <option value="other">{isBangla ? "অন্যান্য" : "Other"}</option>
              </select>
            </div>
            <div className="addFormElm">
              <label htmlFor="area">{isBangla ? "এরিয়া*" : "Area*"}</label>
              <input
                type="text"
                name="area"
                defaultValue={profileInfo?.area}
                required
                placeholder={isBangla ? "এরিয়া লিখুন" : "Input Your Area"}
              />
            </div>
          </div>
          <div className="flexInput">
            <div className="addFormElm">
              <label htmlFor="address">
                {isBangla ? "ঠিকানা*" : "Address*"}
              </label>
              <input
                type="text"
                name="address"
                defaultValue={profileInfo?.address}
                required
                placeholder={
                  isBangla ? "আপনার ঠিকানা দিন" : "Input Your Address"
                }
              />
            </div>
            <div className="addFormElm">
              <label htmlFor="Landmark">
                {isBangla ? "ল্যান্ডমার্ক*" : "Landmark*"}
              </label>
              <input
                type="text"
                name="landmark"
                defaultValue={profileInfo?.landmark}
                required
                placeholder={
                  isBangla ? "আপনার ল্যান্ডমার্ক দিন" : "Input Your Landmark"
                }
              />
            </div>
          </div>
          {/* <div className="defaultAddress">
              <h6>{isBangla ? "ডিফল্ট ঠিকানা" : "Default Address"}</h6>
              <label>
                <input type="checkbox" />
                {isBangla ? "ডিফল্ট শিপিং ঠিকানা" : "Default Shipping Address"}
              </label>
              <label>
                <input type="checkbox" />
                {isBangla ? "ডিফল্ট বিলিং ঠিকানা" : "Default Billing Address"}
              </label>
            </div> */}
          <div className="formActionsButtons">
            {/* <button type="button"></button> */}
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageProfile;
