import { Navigate, useLocation } from "react-router-dom";

const ProtectedAdmin = ({ children }) => {

  const isAdmin = localStorage.getItem("adminAuth");
  const location = useLocation();

  // Not logged in → login page ki redirect
  if (!isAdmin) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  // Logged in → allow access
  return children;
};

export default ProtectedAdmin;