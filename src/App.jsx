import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/customer/Home";
import FranchiseAbout from "./pages/franchiseInfo/About";
import PrivateRoutes from "../utils/PrivateRoutes";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/CompanyManagement/Dashboard";
import Services from "./components/CompanyManagement/Services";
import Report from "./components/CompanyManagement/Report";
import Active from "./components/CompanyManagement/Active";
import DashboardLayout from "./components/shared/DashboardLayout";
import AddNewCompany from "./pages/userManagement/AddNewCompany";
import { useState } from "react";
import AddNewFranchise from "./pages/franchiseManagement/AddNewFranchise";
import FranchiseManagementHome from "./pages/franchiseManagement/FranchiseManagementHome";
import CompanyManagementHome from "./pages/userManagement/UserManagemenHome";
import OrderManagementHome from "./components/OrderManagement/OrderManagementHeader";
import ForgotPassword from "./components/Auth/OTPVerification";
import Sidebar from "./components/shared/Sidebar";
import PasswordVerify from "./components/Auth/PasswordVirefy";
import OtpCheck from "./components/Auth/OtpCheck";
import EditFranchise from "./pages/franchiseManagement/EditFranchise";
import SupplierManagementHome from "./pages/supplierManagement/SupplierManagementHome";

const App = () => {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
};

const MainContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const [menus, setMenus] = useState([
    // { label: "Dashboard", path: "/admin" },
    {
      label: "Services",
      path: "/admin/services",
      rPath: "services",
      rElement: <Services />,
    },
    {
      label: "Active",
      path: "/admin/active",
      rPath: "active",
      rElement: <Active />,
    },
    {
      label: "report",
      path: "/admin/report",
      rPath: "report",
      rElement: <Report />,
    },
    {
      label: "Role Management",
      path: "/admin/company-management",
      rPath: "company-management",
      rElement: <CompanyManagementHome />,
    },
    {
      label: "Role Management",
      path: "/admin/company-management/add-company",
      rPath: "company-management/add-company",
      rElement: <AddNewCompany />,
    },
    {
      label: "Franchise Management",
      path: "/admin/franchise-management",
      rPath: "franchise-management",
      rElement: <FranchiseManagementHome />,
    },
    {
      label: "Franchise Management",
      path: "/admin/order-management",
      rPath: "order-management",
      rElement: <OrderManagementHome />,
    },
    {
      label: "Franchise Management",
      path: "/admin/franchise-management/add-franchise",
      rPath: "franchise-management/add-franchise",
      rElement: <AddNewFranchise />,
    },
    {
      label: "Franchise Management",
      path: "/admin/franchise-management/edit-franchise/:id",
      rPath: "franchise-management/edit-franchise/:id",
      rElement: <EditFranchise />,
    },
    {
      label: "Supplier Management",
      path: "/admin/supplier-management",
      rPath: "supplier-management",
      rElement: <SupplierManagementHome />,
    },
  ]);

  return (
    // <div className="font-opensans">
    //   {!isAdminRoute && (
    //     <div className="z-50 sticky top-0">
    //       <Navbar />
    //     </div>
    //   )}
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/franchiseInfo-About" element={<FranchiseAbout />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />

    //     {/* Admin Routes */}
    //     <Route element={<PrivateRoutes allowedRoles={["admin"]} />}>
    //     <Route
    //         path="/admin"
    //         element={
    //           <DashboardLayout
    //             sidebarItems={menus}

    //           />
    //         }
    //       >
    //         <Route index element={<Dashboard />} />
    //         {menus.map((menu, i) => (
    //           <>
    //             <Route index path={menu.rPath} element={menu.rElement} />
    //           </>
    //         ))}
    //       </Route>
    //     </Route>

    //     {/* Admin Routes */}

    //     {/* Franchise Routes */}
    //     <Route element={<PrivateRoutes allowedRoles={["franchiseEmployee"]} />}>
    //       <Route path="/franchise-employee/home" element={<FranchiseAbout />} />
    //     </Route>

    //     {/* Shared Admin and Franchise Routes */}
    //     <Route
    //       element={<PrivateRoutes allowedRoles={["admin", "franchiseAdmin"]} />}
    //     >
    //       <Route path="/about" element={<FranchiseAbout />} />
    //     </Route>
    //   </Routes>
    //   {!isAdminRoute && <Footer />}
    // </div>

    <div>
     <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/forgetpass" element={<ForgotPassword />} />
  {/* <Route path="/otpcheck" element={<OtpCheck/>}/> */}
  <Route path="/passwordverify" element={<PasswordVerify />} />
  {/* <Route path="/dashboardMain" element={<Sidebar/>}/> */}

  <Route element={<PrivateRoutes allowedRoles={["admin"]} />}>
    <Route path="/admin" element={<DashboardLayout sidebarItems={menus} />}>
      <Route index element={<Dashboard />} />
      {menus.map((menu, i) => (
        <Route
          key={i} // Add a key here
          path={menu.rPath}
          element={menu.rElement}
        />
      ))}
    </Route>
  </Route>
</Routes>

    </div>
  );
};

export default App;
