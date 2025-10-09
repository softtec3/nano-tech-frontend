import React from "react";
import "./FilterCheckbox.css";
const FilterCheckbox = ({ title = "", inputs = [] }) => {
  return (
    <div id="filterCheckbox">
      <h6>{title}</h6>
      <ul className="checkboxContainer">
        {inputs?.map((input, index) => (
          <li key={index}>
            <label>
              <input type="checkbox" name={input.value} value={input.value} />
              {input.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCheckbox;
