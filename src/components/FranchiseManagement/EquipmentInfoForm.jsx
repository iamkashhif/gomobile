import React from "react";

const EquipmentInfoForm = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-5 space-y-5 py-5">
        <div>
          <label className="block text-sm mt-4 font-bold text-customTextGrey1">
            Tire Machine Serial
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
            Tire Machine Brand
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
            Status
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
          <label className="block text-sm mt-4 font-bold text-customTextGrey1">
            Tire Balancer Serial
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
            Tire Balancer Brand
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
            Status
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
        </div>{" "}
        <div>
          <label className="block text-sm mt-4 font-bold text-customTextGrey1">
            Compressor Serial
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
            Compressor Brand
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
            Status
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
        </div>{" "}
        <div>
          <label className="block text-sm mt-4 font-bold text-customTextGrey1">
            Inventor Serial
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
            Inventor Brand
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
            Status
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
      </div>
    </div>
  );
};

export default EquipmentInfoForm;
