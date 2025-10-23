import React, { useState } from "react";
import { Slider, Box, Typography } from "@mui/material";
import "./PriceRange.css";
import { FaSliders } from "react-icons/fa6";
import useLang from "../../../hooks/useLang";
const PriceRange = ({ handlePriceRange, setResetPriceRange }) => {
  const { isBangla } = useLang();
  const [value, setValue] = useState([500, 50000]); // default min & max

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handlePriceRange(newValue);
  };
  return (
    <div id="priceRange">
      <h6>{isBangla ? "দাম" : "PRICE"}</h6>
      <div className="rangeContainer">
        <div className="minMaxContainer">
          <span>{isBangla ? "নিম্ন ৳৫০০" : "Min ৳500"} </span>
          <FaSliders />
          <span>{isBangla ? "সর্বোচ্চ ৳৫,০০০০০" : "Max ৳5,00000"} </span>
        </div>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={300000}
          step={100}
          sx={{ color: "var(---primaryColor)" }}
        />
        <div className="minMaxContainer">
          <span>৳{value[0]}</span>
          <span
            onClick={() => {
              setResetPriceRange((prev) => !prev);
              setValue([500, 50000]);
            }}
            className="minMaxClear"
          >
            {isBangla ? "মুছুন" : "CLEAR"}
          </span>
          <span>৳{value[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
