// AddNewFranchise.js
import React, { useState } from "react";
import { FcApproval } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import FranchiseManagementHeader from "../../components/FranchiseManagement/FranchiseManagementHeader";
import { BsChevronDoubleRight, BsChevronLeft } from "react-icons/bs";

// Import all form components
import FirstSetForm from "../../components/FranchiseManagement/FirstSetForm";
import axios from "axios";
import { postUsers } from "../../rtk/users/userThunks";
import { useDispatch, useSelector } from "react-redux";
import CircularLoader from "../../components/tables/Loader";
// import FranchiseOwnerForm from "../../components/FranchiseManagement/FranchiseOwnerForm";
// import FranchiseAddressForm from "../../components/FranchiseManagement/FranchiseAddressForm";
// import VehicleInfoForm from "../../components/FranchiseManagement/VehicleInfoForm";
// import EquipmentInfoForm from "../../components/FranchiseManagement/EquipmentInfoForm";
// import ServiceLocationForm from "../../components/FranchiseManagement/ServiceLocationForm";

const steps = [
  { title: "First Set", component: FirstSetForm },
  // { title: "Franchise Owner", component: FranchiseOwnerForm },
  // { title: "Franchise Address", component: FranchiseAddressForm },
  // { title: "Vehicle Info", component: VehicleInfoForm },
  // { title: "Equipment Info", component: EquipmentInfoForm },
  // { title: "Service Location", component: ServiceLocationForm },
];

const AddNewFranchise = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { postloading } = useSelector((state) => state.users);

  // const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = async (e) => {
    e.preventDefault();
    dispatch(postUsers({ formData, navigate }));
  };

  const handlePrevious = () => {
    navigate("/admin/franchise-management");
  };

  // Get the current form component based on the current step
  const CurrentForm = steps[currentStep].component;

  return (
    <div className="p-6 bg-white   min-h-[84.5vh]  rounded-md shadow-md m-3">
      {/* Company Management Header */}
      <FranchiseManagementHeader />

      {/* Add New Company Header */}
      <div className="sticky top-[50px] py-2 bg-white flex justify-between Franchise mt-7">
        <div className="font-opensans mt-3">
          <p className="text-customBlack text-md font-bold">
            Add New Franchise
          </p>
          {/* <p className="text-xs text-customTextGrey2">
            {steps[currentStep].title}{" "}
          </p> */}
        </div>

        {/* Breadcrumbs Section */}
        <div className="flex items-center bg-customGrey5 px-3 py-2 rounded-md mt-4 space-x-2 text-customTextGrey2 font-opensans font-semibold text-xs">
          {/* Show full breadcrumb only on large screens and above */}
          {/* <div className="hidden lg:flex items-center">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <span
                  className={`${
                    currentStep === index
                      ? "text-customBlue1"
                      : "text-customTextGrey2"
                  }`}
                >
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <span className="mx-1">
                    <BsChevronDoubleRight />
                  </span>
                )}
              </React.Fragment>
            ))}
          </div> */}

          {/* Show only the active step on smaller screens */}
          <div className="flex lg:hidden items-center">
            <span className="text-customBlue1">{steps[currentStep].title}</span>
          </div>
        </div>
      </div>

      {/* Render the current form step */}
      <CurrentForm formData={formData} setFormData={setFormData} />

      {/* Button Section */}
      <div className="mt-6 flex ">
        <div className="flex justify-between items-center w-full">
          <button
            className="px-5 py-2 flex justify-center items-center"
            onClick={handlePrevious}
          >
            <BsChevronLeft className="mr-1" /> Back
          </button>
        </div>

        <div>
          <button
            onClick={handleNext}
            disabled={postloading}
            className="px-14 mx-5 py-2 text-xs font-semibold text-white bg-customNavy rounded-md flex items-center justify-center"
          >
            {postloading ? (
              <div className="flex items-center">
                <CircularLoader size="w-4 h-4" />
                <span className="ml-2">Please wait...</span>
              </div>
            ) : currentStep === steps.length - 1 ? (
              "Add"
            ) : (
              "Next"
            )}
          </button>
        </div>
      </div>

      {/* Success Popup */}
      {/* {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md flex flex-col items-center justify-center shadow-md text-center">
            <FcApproval className="text-5xl text-center" />
            <p className="text-lg font-semibold">
              New Franchise added <br />
              <span className="font-bold">successfully</span>
            </p>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default AddNewFranchise;

// import React from 'react'

// const AddNewFranchise = () => {
//   return (
//     <div>
//       add new user
//     </div>
//   )
// }

// export default AddNewFranchise
