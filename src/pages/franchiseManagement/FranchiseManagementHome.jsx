import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import FranchiseTable from "../../components/FranchiseManagement/FranchiseManagementTable";
import FranchiseManagementHeader from "../../components/FranchiseManagement/FranchiseManagementHeader";
import { fetchUsers } from "../../rtk/users/userThunks";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/tables/Pagination";

const FranchiseManagementHome = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(null);
  const { usersData } = useSelector((state) => state.users);

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const perPage = 10;

  const handlePageChange = (page) => {
    setPage(page);
  };

  const debounceTimeout = useRef(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      console.log({ value });
      dispatch(fetchUsers({ search: value }));
    }, 500);
  };

  useEffect(() => {
    if (!search) dispatch(fetchUsers({ search: "", page, perPage }));
  }, [page, perPage]);


  return (
    <div className="bg-customGrey">
      <div className="m-3 min-h-[84.5vh] bg-white rounded-lg">
        <div className="flex flex-row mb-4 px-6 pt-6 sm:mb-0 justify-between w-full">
          <FranchiseManagementHeader />
          <div className="">
            <Link
              to="/admin/franchise-management/add-franchise"
              className="px-2 py-2 text-xs font-semibold text-white bg-customNavy rounded-md"
            >
              + Add&nbsp;<span className="lg:inline-block hidden">User</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between my-4 px-5">
          {/* Search Section */}
          <div className="flex flex-col mb-4 md:mb-0">
            {/* <label className="text-sm font-opensans font-semibold text-customTextGrey1 mb-1">
              Search
            </label> */}
            <div className="relative ">
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

          {/* Export Section */}
          <div className="flex flex-col items-end">
            {/* <div className="text-sm font-opensans font-semibold text-customTextGrey1">
              Export
            </div>

            <div className="hidden md:flex space-x-5 mt-1">
              <p className="text-xs text-[#39A9DB]">Copy</p>
              <p className="text-xs text-[#39A9DB]">CSV</p>
              <p className="text-xs text-[#39A9DB]">Excel</p>
              <p className="text-xs text-[#39A9DB]">PDF</p>
              <p className="text-xs text-[#39A9DB]">Print</p>
            </div> */}

            {/* Mobile View */}
            {/* <div className="md:hidden relative mt-2">
              <button
                className="bg-customNavy text-white text-xs py-1 md:px-3 px-1 rounded-md flex items-center"
                onClick={toggleDropdown1}
              >
                <span className="me-1">Options</span>
                <FaChevronDown className="text-white" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute mt-2  bg-customNavy text-white text-xs z-50 rounded-md py-2 w-20 shadow-lg">
                  <li className="px-3 py-1 hover:bg-customBlue">Copy</li>
                  <li className="px-3 py-1 hover:bg-customBlue">CSV</li>
                  <li className="px-3 py-1 hover:bg-customBlue">Excel</li>
                  <li className="px-3 py-1 hover:bg-customBlue">PDF</li>
                  <li className="px-3 py-1 hover:bg-customBlue">Print</li>
                </ul>
              )}
            </div> */}
          </div>
        </div>

        <FranchiseTable />

        {!!usersData?.data?.length && <Pagination
          currentPage={page}
          totalPages={usersData?.totalPages}
          onPageChange={handlePageChange}
        />}
      </div>
    </div>
  );
};

export default FranchiseManagementHome;
