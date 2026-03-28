import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {

  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  }

  return (
    <div className="bg-indigo-600 text-white flex justify-between p-4">

      <h1 className="font-bold">BlogHive Admin</h1>

      <button
      onClick={logout}
      className="bg-white text-indigo-600 px-3 py-1 rounded"
      >
        Logout
      </button>

    </div>
  )
}

export default AdminNavbar;