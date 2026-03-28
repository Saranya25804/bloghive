import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar"; // 👈 add chesam

const AdminLayout = () => {
  return (
    <div className="flex">

      <AdminSidebar />

      <div className="flex-1">

        {/* Navbar add chesam */}
        <AdminNavbar />

        {/* Content */}
        <div className="p-6 bg-gray-100 min-h-screen">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default AdminLayout;