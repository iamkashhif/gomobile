// AddNewFranchise.js
import React, { useEffect, useState } from "react";
import { FcApproval } from "react-icons/fc";
import { useNavigate, useParams } from "react-router-dom";
import FranchiseManagementHeader from "../../components/FranchiseManagement/FranchiseManagementHeader";
import { BsChevronDoubleRight, BsChevronLeft } from "react-icons/bs";

// Import all form components
import FirstSetForm from "../../components/FranchiseManagement/FirstSetForm";
import { fetchUser, postUsers, updateUsers } from "../../rtk/users/userThunks";
import { useDispatch, useSelector } from "react-redux";

const steps = [
  { title: "First Set", component: FirstSetForm },
  // { title: "Franchise Owner", component: FranchiseOwnerForm },
  // { title: "Franchise Address", component: FranchiseAddressForm },
  // { title: "Vehicle Info", component: VehicleInfoForm },
  // { title: "Equipment Info", component: EquipmentInfoForm },
  // { title: "Service Location", component: ServiceLocationForm },
];

const EditFranchise = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const { userData, userLoading } = useSelector((state) => state.users);

  const handleNext = async (e) => {
    e.preventDefault();
    dispatch(updateUsers({ id, formData, dispatch, navigate }));
  };

  const handlePrevious = () => {
    navigate("/admin/franchise-management");
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchUser({ id, dispatch }));
    }
  }, [id]);

  useEffect(() => {
    if (userData) setFormData(userData);
  }, [userData]);

  const CurrentForm = steps[currentStep].component;

  return (
    <div className="p-6 bg-white   min-h-[84.5vh]  rounded-md shadow-md m-3">
      {/* Company Management Header */}
      <FranchiseManagementHeader />

      {/* Add New Company Header */}
      <div className="sticky top-[50px] py-2 bg-white flex justify-between Franchise mt-7">
        <div className="font-opensans mt-3">
          <p className="text-customBlack text-md font-bold">Edit User</p>
        </div>

        <div className="flex items-center bg-customGrey5 px-3 py-2 rounded-md mt-4 space-x-2 text-customTextGrey2 font-opensans font-semibold text-xs">
          <div className="flex lg:hidden items-center">
            <span className="text-customBlue1">{steps[currentStep].title}</span>
          </div>
        </div>
      </div>

      <CurrentForm formData={formData} setFormData={setFormData} id={id} />

      {/* Button Section */}
      <div className="mt-6 flex justify-between">
        <div className="flex items-center">
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
            className="px-14 mx-5 py-2 text-xs font-semibold text-white bg-customNavy rounded-md"
          >
            Edit & Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditFranchise;
