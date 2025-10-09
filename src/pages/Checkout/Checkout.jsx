import React, { useEffect, useState } from "react";
import "./checkout.css";
import useCart from "../../hooks/useCart";
import useLang from "../../hooks/useLang";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState("Customer Info");
  const { cartItems } = useCart();
  const { isBangla } = useLang();
  const [isInstallment, setIsInstallment] = useState(false);
  const [totalPayableAmount, setTotalPayableAmount] = useState(0);
  const [totalDueAmount, setTotalDueAmount] = useState(0);
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
    ]);
  };
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
      <div className="stepContainer">
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
                        onChange={handleCustomerInfo}
                        value={customerInfo.customerPhoto}
                        name="customerPhoto"
                        type="file"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>{isBangla ? "এনআইডি সামন" : "NID Front"}</label>
                      <input
                        onChange={handleCustomerInfo}
                        value={customerInfo.customerNIDfront}
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
                        onChange={handleCustomerInfo}
                        value={customerInfo.customerNIDback}
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
                        onChange={handleCustomerInfo}
                        value={customerInfo.customerFilledCheckPhoto}
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
                        onChange={handleGuarantorInfo}
                        value={guarantorInfo.guarantorPhoto}
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
                        onChange={handleGuarantorInfo}
                        value={guarantorInfo.guarantorNIDfront}
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
                        onChange={handleGuarantorInfo}
                        value={guarantorInfo.guarantorNIDback}
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
                            <td>{item.name}</td>
                            <td>1</td>
                            <td>{item.price}</td>
                            <td>{item.discountAmount}</td>
                            <td>{item.payableAmount}</td>
                            <td>{item.dueAmount}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="order-summary">
                  <hr />
                  <p className="total">
                    {isBangla ? "মোট" : "Total"}:{" "}
                    <span>${totalPayableAmount}</span>
                  </p>
                  <p className="total">
                    {isBangla ? "বাকি" : "Due"}: <span>${totalDueAmount}</span>
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
                  <button className="btn" onClick={handleSubmit}>
                    {isBangla ? "জমা দিন" : "Submit"}
                  </button>
                </div>
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
