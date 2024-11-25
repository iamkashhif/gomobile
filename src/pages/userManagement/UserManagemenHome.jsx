import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddNewCompany from "./AddNewCompany";
import CompanyTable from "../../components/CompanyManagement/CompanyManagemenTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../rtk/orders/ordersThunks";
import Pagination from "../../components/tables/Pagination";

// const data = [
//   {
//     id: 12345,
//     name: "GoMobile Tires North Florida",
//     category: "Category 1",
//     description: "GoMobile Tires North Florida",
//     status: "Active",
//   },
//   {
//     id: 12346,
//     name: "GoMobile Tires OR-PDX",
//     category: "Category 1",
//     description: "GoMobile Tires OR-PDX",
//     status: "Active",
//   },
//   {
//     id: 12347,
//     name: "GoMobile Tires MO-Kansas City",
//     category: "Category 1",
//     description: "GoMobile Tires MO-Kansas City",
//     status: "Active",
//   },
//   {
//     id: 12348,
//     name: "GoMobile Tires TX-Austin",
//     category: "Category 1",
//     description: "GoMobile Tires TX-Austin",
//     status: "Inactive",
//   },
//   // Add more data as needed
// ];

const CompanyManagementHome = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { ordersData } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const perPage = 10;

  const handlePageChange = (page) => {
    setPage(page);
  };
  const toggleDropdown1 = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isOpen, setIsOpen] = useState(null); // Track which dropdown is open

  const toggleDropdown = (id) => {
    setIsOpen(isOpen === id ? null : id); // Toggle dropdown for a specific row
  };

  const debounceTimeout = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      console.log({ value });
      dispatch(fetchOrders({ search: value }));
    }, 500);
  };
  useEffect(() => {
    dispatch(fetchOrders({ search: "", page, perPage }));
  }, []);

  return (
    <div className="bg-customGrey">
      <div className="m-3 h-[84.5vh] bg-white rounded-lg">
        <div className="flex flex-row mb-4 px-6 pt-6 sm:mb-0 justify-between w-full">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="14.75"
              viewBox="0 0 18 15.75"
            >
              <path
                id="location_away_FILL1_wght400_GRAD0_opsz24"
                d="M84.5-804.25H81.8a1.733,1.733,0,0,1-1.271-.529A1.733,1.733,0,0,1,80-806.05v-8.1a1.787,1.787,0,0,1,.191-.81,1.726,1.726,0,0,1,.529-.63l5.4-4.05a1.9,1.9,0,0,1,.518-.27A1.767,1.767,0,0,1,87.2-820a1.767,1.767,0,0,1,.563.09,1.9,1.9,0,0,1,.518.27l2.97,2.25a.428.428,0,0,1,.169.45.462.462,0,0,1-.349.36,4.378,4.378,0,0,0-1.552.956,4.679,4.679,0,0,0-1.057,1.5,4.206,4.206,0,0,0-.371,1.789,4.467,4.467,0,0,0,.394,1.789.8.8,0,0,1,.011.574.644.644,0,0,1-.371.394,6.653,6.653,0,0,0-1.44.833,3.261,3.261,0,0,0-.81.99,3.027,3.027,0,0,0-.36.866,3.927,3.927,0,0,0-.112.934v.81a.871.871,0,0,1-.259.641A.871.871,0,0,1,84.5-804.25Zm8.1-4.5a8.759,8.759,0,0,1,2.351.315,9.052,9.052,0,0,1,2.171.922,1.814,1.814,0,0,1,.641.664,1.772,1.772,0,0,1,.236.889,1.652,1.652,0,0,1-.495,1.215,1.652,1.652,0,0,1-1.215.495H88.91a1.652,1.652,0,0,1-1.215-.495,1.652,1.652,0,0,1-.5-1.215,1.772,1.772,0,0,1,.236-.889,1.814,1.814,0,0,1,.641-.664,9.052,9.052,0,0,1,2.171-.922A8.759,8.759,0,0,1,92.6-808.75Zm0-.9a2.6,2.6,0,0,1-1.913-.787,2.6,2.6,0,0,1-.787-1.912,2.6,2.6,0,0,1,.787-1.913,2.6,2.6,0,0,1,1.913-.788,2.6,2.6,0,0,1,1.912.788,2.6,2.6,0,0,1,.788,1.913,2.6,2.6,0,0,1-.788,1.912A2.6,2.6,0,0,1,92.6-809.65Z"
                transform="translate(-80 820)"
                fill="#16425B"
              />
            </svg>
            <p className="text-md ml-1.5 text-customTextGrey1 font-opensans font-bold">
              Order Management
            </p>
            {/* <span className="text-customTextGrey2 sm:block hidden relative md:mx-16 mx-4  text-xs">
              Order List
              <span className="absolute left-0 top-5 bottom-0 w-full h-0.5 bg-[#39A9DB] z-10"></span>
            </span> */}
          </div>
          {/* <div className="">
            <Link
              to="/admin/company-management/add-company"
              className="px-2 py-2 text-xs font-semibold text-white bg-customNavy rounded-md"
            >
              + Add <span className="lg:inline-block hidden">New Order</span>
            </Link>
          </div> */}
        </div>

        <div className="flex flex-row items-center justify-between mt-5 mb-4 px-5">
          {/* Search Section */}
          <div className="flex flex-col md:mb-0">
            {/* <label className="text-sm font-opensans font-semibold text-customTextGrey1">
              Search
            </label> */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search here"
                className="border-b-2 text-xs focus:outline-none font-semibold pl-5 pb-2"
                value={search}
                onChange={handleChange}
              />
              <span className="absolute inset-y-0 flex items-center text-customGrey4">
                <FaSearch className="text-customGrey3 text-xs" />
              </span>
            </div>
          </div>
        </div>

        <CompanyTable />

        {!!ordersData?.data?.length && <Pagination
          currentPage={page}
          totalPages={ordersData?.totalPages}
          onPageChange={handlePageChange}
        />}
      </div>
    </div>
  );
};

export default CompanyManagementHome;