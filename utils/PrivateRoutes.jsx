import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ allowedRoles }) => {
  const user = { role: 'admin' }; // Mocked user role for demonstration

  const userHasAccess = allowedRoles.includes(user.role);

  return userHasAccess ? <Outlet /> : <Navigate to="/" />;
};


export default PrivateRoutes;
