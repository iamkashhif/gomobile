import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, updateUsers } from "../../rtk/users/userThunks";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

// const data = [
//   {
//     id: 1,
//     franchiseCode: "123456",
//     operatingName: "name",
//     legalName: "ajay",
//     openDate: "01/01/2000",
//     email: "email@gmail.com",
//     franchiseEmail: "franchise@co.in",
//     service: "1234567890",
//     address: "address",
//     country: "india",
//     state: "tamil nadu",
//     city: "coimbatore",
//     zipcode: "123456",
//     role: "user",
//     status: "Active",
//   },
//   {
//     id: 2,
//     franchiseCode: "123456",
//     operatingName: "name",
//     legalName: "ajay",
//     openDate: "01/01/2000",
//     email: "email@gmail.com",
//     franchiseEmail: "franchise@co.in",
//     service: "1234567890",
//     address: "address",
//     country: "india",
//     state: "tamil nadu",
//     city: "coimbatore",
//     zipcode: "123456",
//     role: "user",
//     status: "Active",
//   },
//   {
//     id: 3,
//     franchiseCode: "123456",
//     operatingName: "name",
//     legalName: "ajay",
//     openDate: "01/01/2000",
//     email: "email@gmail.com",
//     franchiseEmail: "franchise@co.in",
//     service: "1234567890",
//     address: "address",
//     country: "india",
//     state: "tamil nadu",
//     city: "coimbatore",
//     zipcode: "123456",
//     role: "user",
//     status: "Active",
//   },
//   {
//     id: 4,
//     franchiseCode: "123456",
//     operatingName: "name",
//     legalName: "ajay",
//     openDate: "01/01/2000",
//     email: "email@gmail.com",
//     franchiseEmail: "franchise@co.in",
//     service: "1234567890",
//     address: "address",
//     country: "india",
//     state: "tamil nadu",
//     city: "coimbatore",
//     zipcode: "123456",
//     role: "user",
//     status: "Inactive",
//   },
//   // Add more data as needed
// ];

const FranchiseTable = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { usersData } = useSelector((state) => state.users);
  const [isOpen, setIsOpen] = useState(null); // Track which dropdown is open

  const toggleDropdown = (id) => {
    setIsOpen(isOpen === id ? null : id);
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
                  Franchise&nbsp;code
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Operating&nbsp;Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Legal&nbsp;Name
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
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  State
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Country
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Zipcode
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Role
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs  font-bold text-gray-600 tracking-wider">
                  Status
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs  font-bold text-gray-600 tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {usersData?.data?.map((item, index) => (
                <tr key={index}>
                  {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs relative">
                    <button
                      onClick={() => toggleDropdown1(item.id)}
                      className="text-[#39A9DB] hover:text-customBlue flex items-center"
                    >
                      Select
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.121"
                        height="6.811"
                        className="ml-1"
                        viewBox="0 0 12.121 6.811"
                      >
                        <path
                          id="down-arrow-5-svgrepo-com"
                          d="M7,10l5,5,5-5"
                          transform="translate(-5.939 -8.939)"
                          fill="none"
                          stroke="#39A9DB"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>
                    {isDropdownOpen === item.id && (
                      <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-30">
                        <ul className="relative py-1 text-sm">
                          <li>
                            <button
                              onClick={() => {
                                // Handle Edit action
                              }}
                              className="flex items-center px-4 py-2 w-full"
                            >
                              Name 1
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                // Handle View action
                              }}
                              className="flex items-center px-4 py-2 w-full"
                            >
                              Name 2
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </td> */}
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {index + 1}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.franchise_code}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.operating_name}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs min-w-36">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap line-clamp-1">
                      {item.legal_name}
                    </p>
                  </td>
                  {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.openDate}
                    </p>
                  </td> */}
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.email}
                    </p>
                  </td>
                  {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.franchiseEmail}
                    </p>
                  </td> */}
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs min-w-36">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.phone}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap line-clamp-2">
                      {item.address}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap line-clamp-2">
                      {item.city}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap line-clamp-2">
                      {item.state}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap line-clamp-2">
                      {item.country}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.zipcode}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                    <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                      {item.role}
                    </p>
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
                  {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <span
                        className={`relative inline-flex items-center px-3 py-1 font-semibold leading-tight ${
                          item.status === "Active"
                            ? "text-customGreen1"
                            : "text-customRed1"
                        }`}
                      >
                        <span
                          className={`absolute inset-y-0 left-0 w-2 h-2 rounded-full ${
                            item.status === "Active"
                              ? "bg-customGreen1"
                              : "bg-customRed1"
                          }`}
                          style={{ marginLeft: "-0.15rem", marginTop:"0.55rem" }} // Adjust position of the small round indicator
                        ></span>
                        <span className="relative">{item.status}</span>
                      </span>
                    </td> */}

                  {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs relative">
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className={`${
                        item.status ? "text-[#39A9DB]" : "text-red-500"
                      } hover:text-customBlue flex items-center`}
                    >
                      {item.status ? "Active" : "Inactive"}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12.121"
                        height="6.811"
                        className="ml-1"
                        viewBox="0 0 12.121 6.811"
                      >
                        <path
                          id="down-arrow-5-svgrepo-com"
                          d="M7,10l5,5,5-5"
                          transform="translate(-5.939 -8.939)"
                          fill="none"
                          stroke={item.status ? "#39A9DB" : "#ef4444"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </button>

                    {isOpen === item.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                        <ul className="relative py-1 text-sm">
                          <li>
                            <button
                              onClick={() => {
                                dispatch(
                                  updateUsers({
                                    id: item.id,
                                    status: true,
                                    dispatch,
                                  })
                                );
                                toggleDropdown(null); // Close the dropdown
                              }}
                              className="flex items-center px-4 py-2 w-full text-green-600 hover:bg-green-100"
                            >
                              Active
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                dispatch(
                                  updateUsers({
                                    id: item.id,
                                    status: false,
                                    dispatch,
                                  })
                                );
                                toggleDropdown(null); // Close the dropdown
                              }}
                              className="flex items-center px-4 py-2 w-full text-red-600 hover:bg-red-100"
                            >
                              Inactive
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </td> */}
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs relative">
                    <Link
                      to={`/admin/franchise-management/edit-franchise/${item.id}`}
                    >
                      <FaEdit className="text-customGrey3 text-lg" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FranchiseTable;
