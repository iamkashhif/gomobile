// AddNewFranchise.js
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { postUsers } from "../../rtk/users/userThunks";
import { useDispatch, useSelector } from "react-redux";
import AddNewSupplierForm from "../../components/SupplierManagement/AddNewSupplierForm";
import {
  createSuppliers,
  getSupplierById,
  updateSuppliers,
} from "../../rtk/supplier/supplierThunks";
import CircularLoader from "../../components/tables/Loader";

const steps = [{ title: "First Set", component: AddNewSupplierForm }];

const AddNewSupplier = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentStep, _setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const { supplierById, supplierByIdLoading, updateAndCreateLoadings } =
    useSelector((state) => state.suppliers);
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateSuppliers({ id, payload: formData, dispatch, navigate }));
    } else {
      dispatch(createSuppliers({ payload: formData, dispatch, navigate }));
    }
  };

  const handlePrevious = () => {
    navigate("/admin/supplier-management");
  };

  useEffect(() => {
    if (id) {
      dispatch(getSupplierById({ id }));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id && supplierById) {
      setFormData((prevState) => {
        const { authToken: id, ...rest } = supplierById;
        const newFormData = { ...rest, id };
        // delete newFormData.id;
        return newFormData;
      });
    }
  }, [id, supplierById]);
  console.log({ supplierById });

  // Get the current form component based on the current step
  const CurrentForm = steps[currentStep].component;

  return (
    <div className="p-6 bg-white   min-h-[84.5vh]  rounded-md shadow-md m-3">
      {/* Company Management Header */}
      {id ? "Edit Supplier" : "Add New Supplier"}
      {/* Add New Company Header */}
      <div className="sticky  py-2 bg-white flex justify-between Franchise">
        <div className="font-opensans mt-3"></div>

        {/* Breadcrumbs Section */}
        <div className="">
          <div className="flex lg:hidden items-center">
            <span className="text-customBlue1">{steps[currentStep].title}</span>
          </div>
        </div>
      </div>
      {/* Render the current form step */}
      {supplierByIdLoading ? (
        <div className="w-full h-full flex items-center justify-center my-32">
          <CircularLoader />
        </div>
      ) : (
        <CurrentForm formData={formData} setFormData={setFormData} />
      )}
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
            onClick={handleSubmit}
            disabled={updateAndCreateLoadings}
            className="px-14 mx-5 py-2 text-xs font-semibold text-white bg-customNavy rounded-md flex items-center justify-center"
          >
            {updateAndCreateLoadings ? (
              <div className="flex items-center space-x-2">
                <CircularLoader size="w-4 h-4" />
                <span className="whitespace-nowrap">Please wait...</span>
              </div>
            ) : id ? (
              "Update"
            ) : (
              "Add"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewSupplier;
