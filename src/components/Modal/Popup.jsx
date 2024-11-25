import React from "react";
import ReactDOM from "react-dom";

const PopupModal = ({ id, isOpen, onClose, children }) => {
  if (!isOpen) return null;

  // Get the DOM node to attach the portal
  const modalRoot = document.getElementById("modal");

  return ReactDOM.createPortal(
    <div
      id={id}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      {/* Modal Background */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        role="button"
        aria-label="Close modal background"
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded shadow-lg p-6 relative z-10">
        {children}
        {/* <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          ×
        </button> */}
      </div>
    </div>,
    modalRoot // Render modal in the `modal-root` element
  );
};

export default PopupModal;
