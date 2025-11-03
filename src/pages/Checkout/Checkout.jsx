import React, { useEffect, useState } from "react";
import "./checkout.css";
import useCart from "../../hooks/useCart";
import useLang from "../../hooks/useLang";
import { Navigate, useNavigate } from "react-router";
import useUser from "../../hooks/useUser";
import toast from "react-hot-toast";

const Checkout = () => {
  const { user } = useUser();
  const [currentStep, setCurrentStep] = useState("Customer Info");
  const { cartItems, setCartItems } = useCart();
  const { isBangla } = useLang();
  const [isInstallment, setIsInstallment] = useState(false);
  const [totalPayableAmount, setTotalPayableAmount] = useState(0);
  const [totalDueAmount, setTotalDueAmount] = useState(0);
  const navigate = useNavigate();
  const [customerInfo, setCustomerInfo] = useState({
    customerName: "",
    customerMobile: "",
    customerAddress: "",
    customerPhoto: "",
    customerNIDfront: "",
    customerNIDback: "",
    customerCheckNo: "",
    customerFilledCheckPhoto: "",
  });
  const [guarantorInfo, setGuarantorInfo] = useState({
    guarantorName: "",
    guarantorMobile: "",
    guarantorPhoto: "",
    guarantorNIDfront: "",
    guarantorNIDback: "",
  });
  const steps = isInstallment
    ? ["Customer Info", "Guarantor Info", "Confirm"]
    : ["Customer Info", "Confirm"];
  const nextStep = (step) => {
    setCurrentStep(step);
  };
  const prevStep = (step) => {
    setCurrentStep(step);
  };

  useEffect(() => {
    cartItems.forEach((cart) => {
      if (cart?.paymentType === "installment") {
        setIsInstallment(true);
      }
    });

    const total = cartItems.reduce(
      (sum, item) => sum + Number(item?.payableAmount),
      0
    );
    setTotalPayableAmount(total);
    const due = cartItems.reduce(
      (sum, item) => sum + Number(item?.dueAmount),
      0
    );
    setTotalDueAmount(due);
  }, [cartItems]);

  const handleCustomerInfo = (e) => {
    const name = e.target.name;
    setCustomerInfo((prev) => {
      return { ...prev, [name]: e.target.value };
    });
  };
  const handleGuarantorInfo = (e) => {
    setGuarantorInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = () => {
    console.log([
      { customerInfo },
      { guarantorInfo },
      { totalPayableAmount },
      { totalDueAmount },
      { cartItems },
    ]);
  };
  // handle sales point order
  const handleSalesPointOrder = (e) => {
    handleSubmit();
    e.preventDefault();
    if (!isInstallment) {
      if (
        customerInfo.customerName.trim() == "" ||
        customerInfo.customerMobile.trim() == "" ||
        customerInfo.customerAddress.trim() == ""
      ) {
        toast.error("All Fields are required");
        return;
      }
    } else {
      for (const key in customerInfo) {
        if (customerInfo[key] == "") {
          toast.error(`${key} field is required`);
          return;
        }
      }
      for (const key in guarantorInfo) {
        if (guarantorInfo[key] == "") {
          toast.error(`${key} field is required`);
          return;
        }
      }
    }

    const formData = new FormData(e.target);
    formData.append("customer_info", JSON.stringify(customerInfo));
    formData.append("guarantor_info", JSON.stringify(guarantorInfo));
    formData.append("carts_item", JSON.stringify(cartItems));
    formData.append("totalDueAmount", totalDueAmount);
    formData.append("totalPayableAmount", totalPayableAmount);
    if (customerInfo.customerPhoto) {
      formData.append("customer_photo", customerInfo.customerPhoto);
    }
    if (customerInfo.customerNIDfront) {
      formData.append("customer_nid_front", customerInfo.customerNIDfront);
    }
    if (customerInfo.customerNIDback) {
      formData.append("customer_nid_back", customerInfo.customerNIDback);
    }
    if (customerInfo.customerFilledCheckPhoto) {
      formData.append(
        "customer_filled_check",
        customerInfo.customerFilledCheckPhoto
      );
    }
    if (guarantorInfo.guarantorNIDfront) {
      formData.append("guarantor_nid_front", guarantorInfo.guarantorNIDfront);
    }
    if (guarantorInfo.guarantorNIDback) {
      formData.append("guarantor_nid_back", guarantorInfo.guarantorNIDback);
    }
    if (guarantorInfo.guarantorPhoto) {
      formData.append("guarantor_photo", guarantorInfo.guarantorPhoto);
    }

    console.log(formData);
    try {
      fetch(
        `${
          import.meta.env.VITE_API
        }/create_sales_point_order.php?sales_point_id=${user.sales_point_id}`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            toast.success(data?.message);
            console.log(data?.data);
            setCartItems([]);
            setCustomerInfo({
              customerName: "",
              customerMobile: "",
              customerAddress: "",
              customerPhoto: "",
              customerNIDfront: "",
              customerNIDback: "",
              customerCheckNo: "",
              customerFilledCheckPhoto: "",
            });
            setGuarantorInfo({
              guarantorName: "",
              guarantorMobile: "",
              guarantorPhoto: "",
              guarantorNIDfront: "",
              guarantorNIDback: "",
            });
            navigate("/");
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
  if (cartItems?.length <= 0) return <Navigate to={"/salesShop"} />;
  return (
    <div
      style={{ maxWidth: 650, margin: "auto", fontFamily: "Arial, sans-serif" }}
    >
      {/* Step Indicator */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              padding: "10px 5px",
              borderBottom:
                step === currentStep ? "3px solid #228b22" : "1px solid #ccc",
              color: step === currentStep ? "#228b22" : "#555",
              fontWeight: step === currentStep ? "bold" : "normal",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            {step}
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSalesPointOrder}
        method="POST"
        encType="multipart/form-data"
        className="stepContainer"
      >
        {/* Step Content */}
        {/* customer info */}
        {currentStep === "Customer Info" && (
          <div style={{ width: "100%" }}>
            <>
              <div className="checkout-form">
                <h3>{isBangla ? "ক্রেতার তথ্য" : "Customer Information"}</h3>
                <div className="form-group">
                  <label>{isBangla ? "ক্রেতার নাম" : "Customer Name"}</label>
                  <input
                    onChange={handleCustomerInfo}
                    value={customerInfo.customerName}
                    name="customerName"
                    type="text"
                    placeholder={isBangla ? "জন ডো" : "John Doe"}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    {isBangla ? "ক্রেতার মোবাইল" : "Customer Mobile"}
                  </label>
                  <input
                    onChange={handleCustomerInfo}
                    value={customerInfo.customerMobile}
                    name="customerMobile"
                    type="text"
                    placeholder="+8801xxxxxxx"
                  />
                </div>
                <div className="form-group">
                  <label>
                    {isBangla ? "ক্রেতার ঠিকানা" : "Customer Address"}
                  </label>
                  <input
                    onChange={handleCustomerInfo}
                    value={customerInfo.customerAddress}
                    name="customerAddress"
                    type="text"
                    placeholder={
                      isBangla ? "ক্রেতার ঠিকানা দিন" : "Enter customer address"
                    }
                  />
                </div>
                {isInstallment && (
                  <>
                    <div className="form-group">
                      <label>
                        {isBangla ? "ক্রেতার ছবি" : "Customer Photo"}
                      </label>
                      <input
                        onChange={(e) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            customerPhoto: e.target.files[0],
                          }))
                        }
                        name="customerPhoto"
                        type="file"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>{isBangla ? "এনআইডি সামন" : "NID Front"}</label>
                      <input
                        onChange={(e) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            customerNIDfront: e.target.files[0],
                          }))
                        }
                        name="customerNIDfront"
                        type="file"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        {isBangla ? "এনআইডি পিছন" : "Customer NID Back"}
                      </label>
                      <input
                        onChange={(e) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            customerNIDback: e.target.files[0],
                          }))
                        }
                        name="customerNIDback"
                        type="file"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        {isBangla
                          ? "ক্রেতার এমআইসিআর চেক নাম্বার"
                          : "Customer MICR Check No"}
                      </label>
                      <input
                        onChange={handleCustomerInfo}
                        value={customerInfo.customerCheckNo}
                        name="customerCheckNo"
                        type="text"
                        placeholder="xxxxxxxxxxxx"
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        {isBangla
                          ? "ক্রেতার এমআইসিআর পূরণকৃত চেকের ছবি"
                          : "Customer Filled MICR Check Photo"}
                      </label>
                      <input
                        onChange={(e) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            customerFilledCheckPhoto: e.target.files[0],
                          }))
                        }
                        name="customerFilledCheckPhoto"
                        type="file"
                        required
                      />
                    </div>
                  </>
                )}
                <button
                  style={{ width: "100%" }}
                  className="btn cbtnRadius"
                  onClick={() =>
                    nextStep(isInstallment ? "Guarantor Info" : "Confirm")
                  }
                >
                  {isBangla ? "পরবর্তী" : "Next"}
                </button>
              </div>
            </>
          </div>
        )}
        {/* Guarantor info */}
        {isInstallment && (
          <>
            {currentStep === "Guarantor Info" && (
              <div style={{ width: "100%" }}>
                <>
                  <div className="checkout-form">
                    <h3>
                      {isBangla ? "জামিনদারের তথ্য" : "Guarantor Information"}
                    </h3>
                    <div className="form-group">
                      <label>
                        {isBangla ? "জামিনদার নাম" : "Guarantor Name"}
                      </label>
                      <input
                        onChange={handleGuarantorInfo}
                        value={guarantorInfo.guarantorName}
                        name="guarantorName"
                        type="text"
                        placeholder={isBangla ? "জন ডো" : "John Doe"}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        {isBangla ? "জামিনদার মোবাইল" : "Guarantor Mobile"}
                      </label>
                      <input
                        onChange={handleGuarantorInfo}
                        value={guarantorInfo.guarantorMobile}
                        name="guarantorMobile"
                        type="text"
                        placeholder="+8801xxxxxxx"
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        {isBangla ? "জামিনদার ছবি" : "Guarantor Photo"}
                      </label>
                      <input
                        onChange={(e) =>
                          setGuarantorInfo((prev) => ({
                            ...prev,
                            guarantorPhoto: e.target.files[0],
                          }))
                        }
                        name="guarantorPhoto"
                        type="file"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        {isBangla
                          ? "জামিনদারের এনআইডি সামন"
                          : "Guarantor NID Front"}
                      </label>
                      <input
                        onChange={(e) =>
                          setGuarantorInfo((prev) => ({
                            ...prev,
                            guarantorNIDfront: e.target.files[0],
                          }))
                        }
                        name="guarantorNIDfront"
                        type="file"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        {isBangla
                          ? "জামিনদার এনআইডি পিছন"
                          : "Guarantor NID Back"}
                      </label>
                      <input
                        onChange={(e) =>
                          setGuarantorInfo((prev) => ({
                            ...prev,
                            guarantorNIDback: e.target.files[0],
                          }))
                        }
                        name="guarantorNIDback"
                        type="file"
                        required
                      />
                    </div>
                    <div className="flexCheckout">
                      <button
                        className="btn btnRadius"
                        onClick={() => prevStep("Customer Info")}
                      >
                        {isBangla ? "পূর্ববর্তী" : "Back"}
                      </button>
                      <button
                        className="btn cbtnRadius"
                        onClick={() => nextStep("Confirm")}
                      >
                        {isBangla ? "পরবর্তী" : "Next"}
                      </button>{" "}
                    </div>
                  </div>
                </>
              </div>
            )}
          </>
        )}
        {/* confirm */}
        {currentStep === "Confirm" && (
          <div style={{ width: "100%" }}>
            <>
              <div className="checkout-form">
                <h3>{isBangla ? "অর্ডার সারাংশ" : "Order Summary"}</h3>
                <div className="detailsContainer">
                  <h4>{isBangla ? "ক্রেতার তথ্য" : "Customer Info"}</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>{isBangla ? "নাম" : "Name"}</th>
                        <th>{isBangla ? "মোবাইল" : "Mobile"}</th>
                        <th>{isBangla ? "ঠিকানা" : "Address"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{customerInfo.customerName}</td>
                        <td>{customerInfo.customerMobile}</td>
                        <td>{customerInfo.customerAddress}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="detailsContainer">
                  <h4>{isBangla ? "অর্ডার বিবরণ" : "Order Details"}</h4>
                  <table>
                    <thead>
                      <tr>
                        <th>{isBangla ? "ক্রম" : "SL"}</th>
                        <th>{isBangla ? "পণ্যের নাম" : "Product Name"}</th>
                        <th>{isBangla ? "পরিমান" : "Qty"}</th>
                        <th>{isBangla ? "মোট" : "Total Amount"}</th>
                        <th>{isBangla ? "ডিস্কাউন্ট" : "Discount"}</th>
                        <th>{isBangla ? "প্রদেয়" : "Payable"}</th>
                        <th>{isBangla ? "বাকি" : "Due"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems?.length > 0 &&
                        cartItems.map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item?.product_name}</td>
                            <td>1</td>
                            <td>{item?.price}</td>
                            <td>{item?.discountAmount}</td>
                            <td>{item?.payableAmount}</td>
                            <td>{item?.dueAmount}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="order-summary">
                  <hr />
                  <p className="total">
                    {isBangla ? "মোট" : "Total"}:{" "}
                    <span>{totalPayableAmount} TK</span>
                  </p>
                  <p className="total">
                    {isBangla ? "বাকি" : "Due"}:{" "}
                    <span>{totalDueAmount} TK</span>
                  </p>
                </div>
                <div className="flexCheckout">
                  <button
                    className="btn btnRadius"
                    onClick={() =>
                      prevStep(
                        isInstallment ? "Guarantor Info" : "Customer Info"
                      )
                    }
                  >
                    {isBangla ? "পূর্ববর্তী" : "Back"}
                  </button>
                  <button type="submit" className="btn">
                    {isBangla ? "জমা দিন" : "Submit"}
                  </button>
                </div>
              </div>
            </>
          </div>
        )}
      </form>
    </div>
  );
};

export default Checkout;
