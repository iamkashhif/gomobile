import React, { useRef } from "react";

export const openModal = (id) => {
  const modal = document.getElementById(id);
  modal.style.display = "block";
};

export const hideModal = (id) => {
  const modal = document.getElementById(id);
  modal.style.display = "none";
};

const Modal = ({ children, id }) => {
  return (
    <div
      id={id}
      className="hidden fixed top-0 left-0 w-full h-full bg-[#0f172a] bg-opacity-50 z-10 overflow-hidden overflow-y-auto"
    >
      <div className=" max-h-full max-w-2xl w-auto h-auto relative top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded p-5 z-20 flex justify-center">
        {children}
      </div>
    </div>
  );
};

export default Modal;
