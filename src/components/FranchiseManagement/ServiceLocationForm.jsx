import React from "react";

const ServiceLocationForm = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-5 space-y-5 py-5">
        {" "}
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

export default ServiceLocationForm;
