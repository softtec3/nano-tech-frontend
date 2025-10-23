import React from "react";
import "./ProductInDetail.css";
import useLang from "../../../hooks/useLang";

const ProductInDetail = ({ name, productSpecification }) => {
  const { isBangla } = useLang();
  return (
    <div id="productInDetail">
      <h5 className="pidTitle">
        {isBangla ? "বিস্তারিত" : "Details of"} {name} {isBangla && "এর"}
      </h5>
      <div className="pinDetailsContainer">
        <div className="pinDetail">
          <h6>{isBangla ? "বিস্তারিত তথ্য" : "Detail Information"}</h6>
          <table>
            <tbody>
              {productSpecification &&
                productSpecification.length > 0 &&
                productSpecification.map((spec) => {
                  return (
                    <tr key={spec?.id}>
                      <td>{spec?.specification_name}</td>
                      <td>{spec?.specification_description}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductInDetail;
