import { useState } from "react";
// import { FaHome, FaUpload, FaFileAlt } from "react-icons/fa"; // Importing relevant icons
import { MdSpaceDashboard, MdReport } from "react-icons/md";
import { IoCloudUpload } from "react-icons/io5";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-gray-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between xl:mx-20 lg:mx-16 md:mx-10">
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                aria-controls="logo-sidebar"
                aria-expanded={isSidebarOpen}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="#" className="flex ms-2 md:me-24">
                <span className="self-center text-xl font-bold sm:text-2xl whitespace-nowrap text-gray-700 flex items-center">
                  {/* <FaHome className="me-2 text-blue-500" /> */}{" "}
                  <span className="text-green-600 font-bold pr-2">ALPHA </span>{" "}
                  CREDIT
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col items-center">
                <Link
                  href="/"
                  className="bg-green-600 hover:cursor-pointer hover:bg-green-500 text-white  px-5 py-2 rounded-lg  text-md md:text-md "
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 min-h-full pt-20 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-slate-50 border-r border-gray-200 md:translate-x-0  mt-4`}
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col justify-between ">
          <ul className="space-y-4 font-medium">
            <li>
              <a
                href="/upload/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-blue-100  group bg-white  mx-2 py-3"
              >
                <div className="flex items-center text-gray-900 rounded-lg  group  ms-4 ">
                  <MdSpaceDashboard
                    className="w-5 h-5 text-black transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white "
                    aria-hidden="true"
                  />
                  <span className="ms-3 text-black">Dashboard</span>
                </div>
              </a>
            </li>

            <li>
              <a
                href="/upload/upload-doc"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100  group bg-white mx-2 py-3"
              >
                <div className="flex items-center text-gray-900 rounded-lg  group  ms-4 ">
                  <IoCloudUpload
                    className="w-5 h-5 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white "
                    aria-hidden="true"
                  />
                  <span className="ms-3 text-black">Upload </span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="/upload/report"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-100  group bg-white mx-2 py-3"
              >
                <div className="flex items-center text-gray-900 rounded-lg  group  ms-4 ">
                  <MdReport
                    className="w-5 h-5 text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white "
                    aria-hidden="true"
                  />
                  <span className="ms-3 text-black">Report</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
