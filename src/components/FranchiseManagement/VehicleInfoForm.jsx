import React from "react";

const VehicleInfoForm = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 space-y-5 py-5">
        <div>
          <label className="block text-sm mt-4 font-bold text-customTextGrey1">
            VIN
          </label>
          <input
            type="text"
            name="companyID"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
            placeholder="Type here"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Year
          </label>
          <select
            name="category"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
          >
            <option>Choose</option>
            <option value="Orlando">2024</option>
            <option value="Las Vegas">2023</option>
            <option value="New York">2022</option>
            <option value="Los Angeles">2021</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Make
          </label>
          <select
            name="category"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
          >
            <option>Choose</option>
            <option value="Orlando">BMW</option>
            <option value="Las Vegas">Audi</option>
            <option value="New York">Tesla</option>
            <option value="Los Angeles">Hyundai</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Model
          </label>
          <select
            name="category"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
          >
            <option>Choose</option>
            <option value="Orlando">i10</option>
            <option value="Las Vegas">i20</option>
            <option value="New York">Creta</option>
            <option value="Los Angeles">i20 Sportz</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Supplier
          </label>
          <input
            type="text"
            name="legalName"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
            placeholder="Type here"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Insurance Policy
          </label>
          <input
            type="date"
            name="openDate"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
            placeholder="dd-mm-yyyy"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Carrier
          </label>
          <input
            type="text"
            name="companyName"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
            placeholder="Type here"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Status
          </label>
          <select
            name="status"
            className="mt-1 block md:w-80 w-full text-sm rounded-md focus:outline-none border-customTextGrey1 shadow-sm sm:text-xs"
          >
            <option>Choose</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default VehicleInfoForm;
