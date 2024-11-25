import { useLocation, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ sidebarItems }) => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div className="dashboard-layout flex flex-col md:flex-row min-h-screen">
      {isAdminPage && (
        <div className="w-full xl:w-1/6 md:w-1/4">
          <Sidebar items={sidebarItems} />
        </div>
      )}
      
      <main
        className={`${
          isAdminPage
            ? "w-full xl:w-5/6  md:w-3/4 md:pl-8  md:pr-4 lg:p-4 mt-16 bg-customGrey h-auto"
            : "w-full p-4 bg-customGrey"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

DashboardLayout.propTypes = {
  sidebarItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DashboardLayout;
