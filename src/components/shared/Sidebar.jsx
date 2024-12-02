import { useEffect, useState } from "react";
import { FaCalendarAlt, FaUserCircle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../rtk/auth/profileInfoThunk";
// import { BsPersonFillGear } from "react-icons/bs";
// import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [showCalendar, setShowCalendar] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { profileData } = useSelector((state) => state.profile);

  useEffect(() => {
    // if(profileData){
    dispatch(fetchProfile());
    // }
  }, []);

  // useEffect(() => {
  //   if (!profileData?.role) {
  //     navigate("/");
  //   }
  // }, [profileData]);

  const menu = [
    { label: "Dashboard", path: "/admin", icon: <MdDashboard /> },
    profileData.role === "Admin" && {
      label: "User  ",
      path: "/admin/franchise-management",
      icon: (
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
            fill="#758694"
          />
        </svg>
      ),
    },
    {
      label: "Order Management",
      path: "/admin/company-management",
      icon: (
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
            fill="#758694"
          />
        </svg>
      ),
    },
    {
      label: "Supplier Management",
      path: "/admin/supplier-management",
      icon: (
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
            fill="#758694"
          />
        </svg>
      ),
    },
  ].filter(Boolean);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* <button
                onClick={toggleSidebar}
                aria-controls="logo-sidebar"
                aria-expanded={isSidebarOpen}
                type="button"
                className="inline-flex items-center p-2 text-xs text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14.75"
                  viewBox="0 0 23 17.75"
                >
                  <path
                    id="menu-svgrepo-com"
                    d="M4,6H25M4,13.875H25M4,21.75H25"
                    transform="translate(-3 -5)"
                    fill="none"
                    stroke="gray"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button> */}

              <a href="#" className="flex ml-2 md:mr-14 lg:mr-24">
                <img src="/home_images/Logo.png" alt="Logo" className="w-32" />
              </a>
              {/* <div className="mx-3 relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search what you are looking for"
                  className="border border-customBorder bg-customGrey rounded-md p-1.5 pl-10 w-80 xl:w-[34rem] text-xs font-opensans font-semibold text-customTextGrey2"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-customTextGrey2"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div> */}
            </div>

            <div className="flex items-center space-x-3 lg:space-x-5">
              {/* Calendar and Notification Icons */}

              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 21.516 22"
              >
                <g id="notification" transform="translate(-7.482 -4.5)">
                  <path
                    id="Path_402"
                    data-name="Path 402"
                    d="M23.8,21.4,23,20.33V13.59A6.6,6.6,0,0,0,17,7V6a1,1,0,0,0-2,0V7a6.6,6.6,0,0,0-6,6.56V20.3l-.8,1.1A1,1,0,0,0,9,23h4a3,3,0,0,0,6,0h4a1,1,0,0,0,.8-1.6ZM16,24a1,1,0,0,1-1-1h2A1,1,0,0,1,16,24Z"
                    fill="gray"
                    stroke="gray"
                    strokeWidth="1"
                  />
                  <g
                    id="Ellipse_13"
                    data-name="Ellipse 13"
                    transform="translate(18.998 5.5)"
                    fill="#d63230"
                    stroke="#fff"
                    strokeWidth="1"
                  >
                    <circle cx="5" cy="5" r="5" stroke="none" />
                    <circle cx="5" cy="5" r="4.5" fill="none" />
                  </g>
                </g>
              </svg> */}

              {/* <FaCalendarAlt
                onClick={() => {
                  setShowCalendar(true);
                }}
              />
              <input type="date"/> */}

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setDropdownOpen(true)}
                  className="flex items-center space-x-2 md:mr-1 text-xs focus:outline-none mr-8"
                >
                  <FaUserCircle className="text-customTextGrey2 lg:text-4xl text-2xl" />
                  <div className="hidden text-start lg:block font-opensans font-semibold text-customGrey3">
                    {profileData?.role}
                    <br />
                    <span className="text-customBlack font-opensans font-bold capitalize">
                      {profileData?.legal_name}
                    </span>
                  </div>
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="px-4 py-1">
                      <p className="text-xs font-semibold text-zinc-700 py-1.5">
                        {profileData?.email}
                      </p>
                    </div>
                    <hr className="border-gray-200 dark:border-gray-200" />
                    <a
                      href="#"
                      className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:text-gray-600 "
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:text-gray-600 "
                    >
                      Settings
                    </a>
                    <div
                      onClick={() => {
                        localStorage.clear();
                        window.location.href = "/";
                      }}
                      className="block px-4 py-2 text-xs text-gray-700 hover:bg-red-100 dark:text-gray-600 pointer "
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>

              {/* Logout Button */}
              {/* <button
                className=" bg-customNavy text-white flex items-center px-2 py-1.5 rounded-md"
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="14.75"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-log-out"
                >
                  <path d="M9 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <span className="text-xs font-semibold font-opensans hidden md:block">
                  Logout
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 md:w-52 lg:w-64 min-h-full pt-20 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col justify-between">
          <ul className="space-y-1 font-medium">
            {menu.map((menu) => (
              <li key={menu.path}>
                <Link
                  to={menu.path}
                  className={`flex rounded-l-sm items-center p-3 text-gray-900 hover:bg-customGrey5 group ${
                    location.pathname === menu.path
                      ? "border-l-4  bg-customGrey border-customBlue pl-3"
                      : "pl-4"
                  }`}
                >
                  <span className="w-5 mt-1 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                    {menu.icon}
                  </span>
                  <span className="ms-3 md:text-xs lg:text-sm text-xs font-semibold text-customTextGrey1 space-y-4">
                    {menu.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
