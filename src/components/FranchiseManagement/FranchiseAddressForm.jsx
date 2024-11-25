import React from "react";

const FranchiseAddressForm = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 space-y-5 py-5">
        <div>
          <label className="block text-sm mt-4 font-bold text-customTextGrey1">
            Address Type
          </label>
          <select
            name="category"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
          >
            <option>Choose</option>
            <option value="Orlando">1</option>
            <option value="Las Vegas">2</option>
            <option value="New York">3</option>
            <option value="Los Angeles">4</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Address
          </label>
          <input
            type="text"
            name="OperatingName"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
            placeholder="Type here"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            City
          </label>
          <select
            name="category"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
          >
            <option>Choose</option>
            <option value="Orlando">Orlando</option>
            <option value="Las Vegas">Las Vegas</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            State
          </label>
          <select
            name="status"
            className="mt-1 block md:w-80 w-full text-sm rounded-md focus:outline-none border-customTextGrey1 shadow-sm sm:text-xs"
          >
            <option>Choose</option>
            <option value="Active">Alabama</option>
            <option value="Inactive">Alaska</option>
            <option value="Inactive">Arizona</option>
            <option value="Inactive">Califonia</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Zip Code
          </label>
          <input
            type="text"
            name="companyName"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
            placeholder="Type here"
          />
        </div>
      </div>
    </div>
  );
};

export default FranchiseAddressForm;
