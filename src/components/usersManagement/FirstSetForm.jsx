import React from "react";

const FirstSetForm = () => {
  return (
    <div>
      {/* Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 space-y-5 py-5">
        {/* <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Parent Franchise
          </label>
          <select
            name="category"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
          >
            <option>Choose</option>
            <option value="Orlando">name1</option>
            <option value="Las Vegas">name2</option>
            <option value="New York">name3</option>
            <option value="Los Angeles">name3</option>
          </select>
        </div> */}

        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Franchise Code
          </label>
          <input
            type="text"
            name="franchiseCode"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
            placeholder="Type here"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Operating Name
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
            Legal Name
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
            Email
          </label>
          <input
            type="email"
            name="email"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
            placeholder="Type here"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Phone
          </label>
          <input
            type="text"
            name="service"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
            placeholder="Type here"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Address
          </label>
          <input
            type="text"
            name="address"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
            placeholder="Type here"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            City
          </label>
          <input
            type="text"
            name="city"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
            placeholder="Type here"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            State
          </label>
          <input
            type="text"
            name="state"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
            placeholder="Type here"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Country
          </label>
          <input
            type="text"
            name="country"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
            placeholder="Type here"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Zip Code
          </label>
          <input
            type="text"
            name="ZipCode"
            className="mt-1  md:w-80 w-full text-xs focus:outline-none  border-b border-customGrey9  sm:text-xs"
            placeholder="Type here"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Role
          </label>
          <select
            name="status"
            className="mt-1 block md:w-80 w-full text-sm rounded-md focus:outline-none border-customTextGrey1 shadow-sm sm:text-xs"
          >
            <option>Choose</option>
            <option value="Active">User</option>
            <option value="Inactive">Admin</option>
          </select>
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

export default FirstSetForm;
