import React from "react";
import "./ProductInDetail.css";
const details = [
  {
    heading: "Basic Information",
    items: [
      { label: "Brand", value: "Walton" },
      { label: "Model", value: "WSI-KRYSTALINE (PRETO)-18F [BLUETOOTH]" },
      { label: "Series Name", value: "Krystaline" },
      { label: "Air Conditioner Type", value: "Intelligent Inverter" },
      { label: "Function", value: "Cooling" },
      { label: "Cooling Capacity (Ton)", value: "1.5 Ton" },
      { label: "Compressor", value: "Rotary (Inverter)" },
      { label: "Refrigerant", value: "R-32" },
      { label: "Technology", value: "Latest Intelligent INVERTER" },
      { label: "Cooling Capacity (BTU/hr)", value: "18000 BTU/hr" },
      { label: "Cooling Capacity (W)", value: "5275 Watts" },
      { label: "Rated Voltage", value: "230V ~ 50Hz" },
      { label: "Rated Power", value: "1565 W" },
      { label: "Rated Current (A)", value: "6.95 A" },
      { label: "EER", value: "3.37" },
      { label: "Smart Control", value: "Bluetooth Control, Through App" },
    ],
  },
  {
    heading: "Detailed Information",
    items: [
      { label: "Refrigerant Amount (kg)", value: "0.65" },
      { label: "Operating Range (Ambient Temperature)", value: "20°C to 55°C" },
      { label: "Evaporator Fin Type", value: "Louvered Fin" },
      { label: "Condenser Type", value: "Copper Tube Condenser" },
      { label: "Condenser Fin Type", value: "Slit Fin" },
      { label: "Maximum Pipe Length", value: "10m" },
      { label: "Turbo Mode (Maximum Cooling)", value: "Yes" },
      { label: "Eco Mode", value: "Yes" },
      { label: "Auto Operation", value: "Yes" },
      { label: "Dry Mode", value: "Yes" },
      { label: "Fan Mode", value: "Yes" },
      { label: "Speed Setting", value: "Yes (Auto, High, Medium, Low)" },
      { label: "Auto Restart", value: "Yes" },
      { label: "Comfort Cooling", value: "Yes" },
      { label: "Timer", value: "Yes" },
      { label: "Sleep", value: "Yes" },
      { label: "Display Type", value: "LCD" },
      { label: "Operation/Control", value: "Via IR (Infrared Ray)" },
      { label: "Child Lock", value: "Yes" },
      { label: "Temperature Unit Change", value: "Yes (16°C to 31°C)" },
      { label: "Auto Up-Down Swing", value: "Yes" },
      { label: "Auto Left-Right Swing", value: "Yes" },
      {
        label: "Indoor Dimensions (mm) [L×W×H]",
        value: "Unit: 947 x 321 x 235 | Packing: 1025 x 400 x 300",
      },
      {
        label: "Outdoor Dimensions (mm) [L×W×H]",
        value: "Unit: 844 x 310 x 546 | Packing: 900 x 372 x 610",
      },
      { label: "Net Weight (Indoor) (kg)", value: "12.5 ± 0.5" },
      { label: "Gross Weight (Indoor) (kg)", value: "15 ± 0.5" },
      { label: "Net Weight (Outdoor) (kg)", value: "27 ± 1" },
      { label: "Gross Weight (Outdoor) (kg)", value: "31.5 ± 1" },
    ],
  },
];

const ProductInDetail = () => {
  return (
    <div id="productInDetail">
      <h5 className="pidTitle">Details of Walton Inverter AC 1.5 Ton</h5>
      <div className="pinDetailsContainer">
        {details?.map((detail, index) => (
          <div key={index} className="pinDetail">
            <h6>{detail?.heading}</h6>
            <table>
              <tbody>
                {detail?.items?.map((sDetail, index) => (
                  <tr key={index}>
                    <td>{sDetail.label}</td>
                    <td>{sDetail.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInDetail;
