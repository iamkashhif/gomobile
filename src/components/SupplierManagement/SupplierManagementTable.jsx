import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { GrView } from "react-icons/gr";
// import { openModal } from "../Modal/Modal";
import { fetchUsers } from "../../rtk/users/userThunks";
import { updateOrderById } from "../../rtk/orders/ordersThunks";
import CircularLoader from "../tables/Loader";
import { FaRegFilePdf } from "react-icons/fa";
const BASE_URL = import.meta.env.VITE_APP_BASE_LIVE_URL;



const SupplierManagementTable = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [data, setData] = useState("");
  const [Index, setIndex] = useState();

  const dispatch = useDispatch();

  const { profileData } = useSelector((state) => state.profile);
  const { ordersData, ordersLoading, updateOrderByIdLoading } = useSelector(
    (state) => state.orders
  );
  const { usersData } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers({ search: "", page: 1, perPage: 1000 }));
  }, [dispatch]);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
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
              </tr>
            </thead>

            <tbody>
              {!!ordersData?.data?.length &&
                ordersData?.data.map((item, index) => (
                  <tr key={index}>
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
                    {profileData?.role === "Admin" && (
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
                    )}
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
                      >
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
    </div>
  );
};

export default SupplierManagementTable;
