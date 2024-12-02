import React, { useEffect, useRef, useState } from "react";
import SupplierManagementTable from "../../components/SupplierManagement/SupplierManagementTable";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuppliers } from "../../rtk/supplier/supplierThunks";
import { debounce } from "lodash";
import { FaSearch } from "react-icons/fa";
import Pagination from "../../components/tables/Pagination";

const SupplierManagementHome = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const perPage = 10;
  const handlePageChange = (page) => {
    setPage(page);
  };
  const { supplierData, supplierLoading } = useSelector(
    (state) => state.suppliers
  );

  const debounceDispatch = useRef(
    debounce((value) => {
      dispatch(fetchSuppliers({ search: value, page, perPage }));
    }, 500)
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    debounceDispatch.current(value);
    setSearch(value);
  };

  useEffect(() => {
    // Initial fetch with default criteria
    dispatch(fetchSuppliers({ search, page, perPage }));
  }, [dispatch, page, perPage]);

  return (
    <div className="bg-customGrey">
      <div className="m-3 h-[84.5vh] bg-white rounded-lg">
        {/* Page Title */}
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
              Supplier Management
            </p>
          </div>
          <div className="">
            <Link
              to="/admin/supplier-management/add-supplier"
              className="px-2 py-2 text-xs font-semibold text-white bg-customNavy rounded-md"
            >
              + Add&nbsp;
              <span className="lg:inline-block hidden">Supplier</span>
            </Link>
          </div>
        </div>
        {/* filters */}
        <div className="mt-5 mb-4 px-5 w-full">
          <div className="flex flex-col gap-2 md:flex-row md:gap-4 md:mb-0">
            <div className="relative">
              <span className="absolute inset-y-0 left-1 flex items-center text-customGrey4">
                <FaSearch className="text-customGrey3 text-xs" />
              </span>
              <input
                type="text"
                placeholder="Type to search"
                name="search"
                className="border-b-2 text-xs focus:outline-none font-semibold pl-6 pb-2 w-full"
                value={search}
                onChange={handleChange}
              />
            </div>           
          </div>
        </div>

        <SupplierManagementTable supplierData={supplierData} supplierLoading={supplierLoading} />

        {!!supplierData?.data?.length && (
          <Pagination
            currentPage={page}
            totalPages={supplierData?.totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default SupplierManagementHome;
