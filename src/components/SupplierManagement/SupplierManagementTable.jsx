import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { openModal } from "../Modal/Modal";
import CircularLoader from "../tables/Loader";
import { deleteSuppliers } from "../../rtk/supplier/supplierThunks";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { BiCopy } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { toast } from "react-toastify";

const SupplierManagementTable = ({ supplierData, supplierLoading }) => {
  const { profileData } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const [copied, setCopied] = useState(false);

  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    setCopied(true);
    toast.success("Token Copied successfully!");
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="bg-white min-h-96">
      {/* Table Section */}
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  ID
                </th>

                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Email
                </th>

                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Phone
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Address
                </th>

                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  City
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs  font-bold text-gray-600 tracking-wider">
                  State
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs  font-bold text-gray-600 tracking-wider">
                  Country
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs  font-bold text-gray-600 tracking-wider">
                  ZipCode
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs  font-bold text-gray-600 tracking-wider">
                  Token
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs  font-bold text-gray-600 tracking-wider">
                  Status
                </th>
                {profileData.role !== "Accountant" && (
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs  font-bold text-gray-600 tracking-wider">
                    Action
                  </th>
                )}
              </tr>
            </thead>

            <tbody>
              {!!supplierData?.data?.length &&
                supplierData?.data.map((item, index) => (
                  <tr key={index}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                        {index + 1}
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                        {item.name}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                        {item.email}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                        {item.phone}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                        {item.address}
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                        {item.city}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                        {item.state}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                        {item.country}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                        {item.zipcode}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs text-center">
                      <div className="flex items-center justify-center h-full space-x-2">
                        <span className="font-mono leading-none">{`${item.id.slice(
                          0,
                          5
                        )}...`}</span>
                        {copied ? (
                          <AiOutlineCheck
                            size={24}
                            className="text-green-500 animate-pulse"
                            title="Copied!"
                          />
                        ) : (
                          <BiCopy
                            size={24}
                            className="text-gray-500 cursor-pointer hover:text-black"
                            onClick={() => item.id && handleCopy(item.id)}
                            title="Copy to clipboard"
                          />
                        )}
                      </div>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p
                        className={` ${
                          item.status ? "text-[#39A9DB]" : "text-red-500"
                        } opacity-85 font-semibold whitespace-no-wrap`}
                      >
                        {item.status ? "Active" : "Inactive"}
                      </p>
                    </td>
                    <td className="px-5  py-5 border-b border-gray-200 bg-white text-xs relative">
                      <div className="flex gap-2 items-center justify-center">
                        {profileData.role !== "Accountant" && (
                          <Link
                            to={`/admin/supplier-management/edit-supplier/${item.id}`}
                          >
                            <FaEdit
                              className="text-customGrey3 text-lg hover:scale-110"
                              title="Update Supplier"
                            />
                          </Link>
                        )}
                        {/* <MdOutlineDeleteForever
                          onClick={() => {
                            dispatch(
                              deleteSuppliers({
                                id: item.id,
                                dispatch,
                                // navigate,dd
                              })
                            );
                          }}
                          size={24}
                          className="text-customRed cursor-pointer text-lg hover:scale-110"
                        /> */}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {supplierLoading && (
            <div className="w-full h-full flex items-center justify-center my-32">
              <CircularLoader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupplierManagementTable;
