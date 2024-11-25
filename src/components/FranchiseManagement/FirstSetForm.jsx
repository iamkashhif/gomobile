import React from "react";

const FirstSetForm = ({ formData, setFormData, id = "" }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-5">
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Franchise Code
          </label>
          <input
            type="text"
            name="franchise_code"
            value={formData.franchise_code || ""}
            onChange={handleInputChange}
            className="mt-1 md:w-80 w-full text-xs focus:outline-none border-b border-customGrey9 sm:text-xs"
            placeholder="Type here"
            disabled={id}
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Operating Name
          </label>
          <input
            type="text"
            name="operating_name"
            value={formData.operating_name || ""}
            onChange={handleInputChange}
            className="mt-1 md:w-80 w-full text-xs focus:outline-none border-b border-customGrey9 sm:text-xs"
            placeholder="Type here"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Legal Name
          </label>
          <input
            type="text"
            name="legal_name"
            value={formData.legal_name || ""}
            onChange={handleInputChange}
            className="mt-1 md:w-80 w-full text-xs focus:outline-none border-b border-customGrey9 sm:text-xs"
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
            value={formData.email || ""}
            onChange={handleInputChange}
            className="mt-1 md:w-80 w-full text-xs focus:outline-none border-b border-customGrey9 sm:text-xs"
            placeholder="Type here"
            disabled={id}
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone || ""}
            onChange={handleInputChange}
            className="mt-1 md:w-80 w-full text-xs focus:outline-none border-b border-customGrey9 sm:text-xs"
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
            value={formData.address || ""}
            onChange={handleInputChange}
            className="mt-1 md:w-80 w-full text-xs focus:outline-none border-b border-customGrey9 sm:text-xs"
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
            value={formData.city || ""}
            onChange={handleInputChange}
            className="mt-1 md:w-80 w-full text-xs focus:outline-none border-b border-customGrey9 sm:text-xs"
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
            value={formData.state || ""}
            onChange={handleInputChange}
            className="mt-1 md:w-80 w-full text-xs focus:outline-none border-b border-customGrey9 sm:text-xs"
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
            value={formData.country || ""}
            onChange={handleInputChange}
            className="mt-1 md:w-80 w-full text-xs focus:outline-none border-b border-customGrey9 sm:text-xs"
            placeholder="Type here"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Zip Code
          </label>
          <input
            type="text"
            name="zipcode"
            value={formData.zipcode || ""}
            onChange={handleInputChange}
            className="mt-1 md:w-80 w-full text-xs focus:outline-none border-b border-customGrey9 sm:text-xs"
            placeholder="Type here"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Role
          </label>
          <select
            name="role"
            value={formData.role || "User"}
            onChange={handleInputChange}
            className="mt-1 block md:w-80 w-full text-sm rounded-md focus:outline-none border-customTextGrey1 shadow-sm sm:text-xs"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-customTextGrey1">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="mt-1 block md:w-80 w-full text-sm rounded-md focus:outline-none border-customTextGrey1 shadow-sm sm:text-xs"
          >
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FirstSetForm;
