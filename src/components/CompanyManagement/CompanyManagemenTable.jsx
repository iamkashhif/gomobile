import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { GrView } from "react-icons/gr";
import OrderPopup from "./OrderInfoPopup";
// import { openModal } from "../Modal/Modal";
import { fetchUsers } from "../../rtk/users/userThunks";
import { updateOrderById } from "../../rtk/orders/ordersThunks";
import CircularLoader from "../tables/Loader";
import { FaRegFilePdf } from "react-icons/fa";
const BASE_URL = import.meta.env.VITE_APP_BASE_LIVE_URL;

// const data = [
//   {
//     id: 1,
//     orderId: 12345,
//     orderNumber: 1234567890,
//     franchiseId: 12345,
//     OrderDate: "10/10/2000",
//     orderTotal: 500,
//     status: "Active",
//   },
//   {
//     id: 2,
//     orderId: 12345,
//     orderNumber: 1234567890,
//     franchiseId: 12345,
//     OrderDate: "10/10/2000",
//     orderTotal: 500,
//     status: "Active",
//   },
//   {
//     id: 3,
//     orderId: 12345,
//     orderNumber: 1234567890,
//     franchiseId: 12345,
//     OrderDate: "10/10/2000",
//     orderTotal: 500,
//     status: "Active",
//   },
//   {
//     id: 4,
//     orderId: 12345,
//     orderNumber: 1234567890,
//     franchiseId: 12345,
//     OrderDate: "10/10/2000",
//     orderTotal: 500,
//     status: "Inactive",
//   },
//   // Add more data as needed
// ];

const CompanyTable = ({ selectedItems, setSelectedItems }) => {
  const [isOpen, setIsOpen] = useState(null);
  const [data, setData] = useState("");
  const [checkedForAll, setCheckedForAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [Index, setIndex] = useState();

  const dispatch = useDispatch();

  const { profileData } = useSelector((state) => state.profile);
  const { ordersData, ordersLoading, updateOrderByIdLoading } = useSelector(
    (state) => state.orders
  );
  const { usersData } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers({ search: "", page: 1, perPage: 1000 }));
  }, []);

  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const toggleDropdown1 = (id) => {
  //   setIsDropdownOpen(isDropdownOpen === id ? null : id);
  // };
  // const toggleDropdown = (id) => {
  //   setIsOpen(isOpen === id ? null : id); // Toggle dropdown for a specific row
  // };

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setCheckedForAll(isChecked);
    if (isChecked) {
      setSelectedItems(ordersData.data.map((item) => ({ id: item.id, item })));
    } else {
      setSelectedItems([]);
    }
  };

  const handleCheckboxChange = (item) => (e) => {
    const isChecked = e.target.checked;
    setSelectedItems((prevSelectedItems) => {
      if (isChecked) {
        return [...prevSelectedItems, { id: item.id, item }];
      } else {
        return prevSelectedItems.filter((selected) => selected.id !== item.id);
      }
    });
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
                  <input
                    type="checkbox"
                    checked={checkedForAll}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  ID
                </th>
                {/* <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Customer ID
                </th> */}
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Order ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Order Number
                </th>

                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Order Date
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Order&nbsp;total
                </th>
                {profileData?.role === "Admin" && (
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                    Assigned To
                  </th>
                )}
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 tracking-wider">
                  Shipping Label
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
              {!!ordersData?.data?.length &&
                ordersData?.data.map((item, index) => (
                  <tr key={index}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                        <input
                          type="checkbox"
                          checked={selectedItems.some(
                            (selected) => selected.id === item.id
                          )}
                          onChange={handleCheckboxChange(item)}
                        />
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                        {index + 1}
                      </p>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                        {item.internalOrderId}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                        {item.customerOrderNumber}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                        {moment(item.orderDate).format("MMMM Do YYYY, h:mm a")}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <p className="text-customBlack opacity-85 font-semibold whitespace-no-wrap">
                        {item.orderTotal}
                      </p>
                    </td>
                  
  <td className="px-5 py-3 border-b border-gray-200 bg-white text-xs">
    {item?.franchise_code} - {item?.legal_name}
    {/* {(() => {
      const assignedFranchise = usersData?.data?.find(
        (user) => user.id === item.assignedFranchiseId
      );
      return assignedFranchise
        ? `${assignedFranchise.id} - ${assignedFranchise.legal_name}`
        : "Unassigned";
    })()} */}
  </td>

                    {/* {profileData?.role === "Admin" && (
                      <td className="px-5 py-3 border-b border-gray-200 bg-white text-xs">
                        <select
                          value={item.assignedFranchiseId}
                          onChange={(e) => {
                            const id = e.target.value;
                            if (id) {
                              dispatch(
                                updateOrderById({
                                  orderId: item.id,
                                  keyObjNeedsTobeUpdate: {
                                    assignedFranchiseId: id,
                                  },
                                  dispatch,
                                })
                              );
                            }
                          }}
                          name="asiggned"
                          // disabled={profileData.role === "Accountant"}
                          className="block md:w-32 py-2 px-1 text-sm rounded-md focus:outline-none border border-gray-300 sm:text-xs"
                        >
                          <option value={"unassigned"}>Unassinged</option>
                          {usersData?.data?.map((el, ind) => {
                            return (
                              <option key={ind} value={el.id}>
                                {el.legal_name}
                              </option>
                            );
                          })}
                        </select>
                      </td>
                    )} */}
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      {item?.shippingLabel?.filePath ? (
                        <a
                          href={`${BASE_URL}/${item?.shippingLabel?.filePath}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full"
                        >
                          <FaRegFilePdf className="text-xl text-red-600 hover:scale-110" />
                        </a>
                      ) : (
                        <p
                          onClick={() => {
                            if (!item.requestedShippingLabel) {
                              setIndex(index);
                              dispatch(
                                updateOrderById({
                                  dispatch,
                                  shipLabel: true,
                                  profileData: profileData,
                                  orderId: item.id,
                                  keyObjNeedsTobeUpdate: {
                                    requestedShippingLabel: true,
                                  },
                                })
                              );
                            }
                          }}
                          className={`inline-flex items-center gap-2 font-semibold whitespace-nowrap px-3 py-2 text-center text-black rounded-md mx-auto cursor-pointer hover:scale-105 ${
                            item.requestedShippingLabel ? "opacity-70" : ""
                          }`}
                        >
                          <div
                            className={`${
                              item.requestedShippingLabel
                                ? "bg-orange-500"
                                : "bg-blue-700"
                            } h-2 w-2 rounded-full`}
                          ></div>

                          {updateOrderByIdLoading && index === Index
                            ? "Requesting"
                            : item.requestedShippingLabel
                            ? "Requested"
                            : "Request"}
                        </p>
                      )}
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs">
                      <select
                        name="asiggned"
                        value={item.status}
                        onChange={(e) => {
                          const selectedValue = e.target.value;

                          if (selectedValue !== "Status") {
                            dispatch(
                              updateOrderById({
                                orderId: item.id,
                                keyObjNeedsTobeUpdate: {
                                  status: selectedValue,
                                },
                                dispatch,
                              })
                            );
                          }
                        }}
                        className={`block md:w-32 py-2 px-1 text-sm rounded-md focus:outline-none sm:text-xs border border-gray-300`}
                        // ${
                        //   item.status === "Shipped"
                        //     ? "bg-green-100 border-green-500"
                        //     : item.status === "Pending"
                        //     ? "bg-orange-100 border-orange-500"
                        //     : "border-gray-300"
                        // }
                        // `}
                      >
                        {/* <option value="Created">Created</option> */}
                        {/* <option value="Pending">Pending</option> */}
                        {/* <option value="Completed">Completed</option> */}

                        <option value="OnHold">OnHold</option>
                        <option value="Ordered" disabled>
                          Ordered
                        </option>
                        <option value="Shipped">Shipped</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>

                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-lg text-center">
                      <GrView
                        onClick={() => {
                          handleOpenModal();
                          setData(item.id);
                        }}
                        className="pointer hover:scale-110"
                      />
                    </td>

                    {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-xs relative">
                    <button
                      onClick={() => toggleDropdown(item.id)}
                      className="text-[#39A9DB] hover:text-customBlue flex items-center"
                    >
                      Status
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
                    {isOpen === item.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                        <ul className="py-1 text-sm">
                          <li>
                            <button
                              onClick={() => {
                                // Handle Edit action
                              }}
                              className="flex items-center px-4 py-2 w-full text-green-600 hover:bg-green-100"
                            >
                              Active
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                // Handle View action
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
                  </tr>
                ))}
            </tbody>
          </table>

          {ordersLoading && (
            <div className="w-full h-full flex items-center justify-center my-32">
              <CircularLoader />
            </div>
          )}
        </div>
      </div>

      <OrderPopup
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        orderId={data}
      />
    </div>
  );
};

export default CompanyTable;
