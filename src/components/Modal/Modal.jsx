import React, { useState } from "react";
import "./Modal.css";
import { FaXmark } from "react-icons/fa6";
const Modal = ({ content }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <div id="modal" style={{ display: isModalOpen ? "flex" : "none" }}>
      <div className="modalContent">
        <span
          onClick={() => {
            console.log("Clicked");
            setIsModalOpen(false);
          }}
          className="cross"
        >
          <FaXmark size={20} />
        </span>
        <div className="modalDescription">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
