import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import TrendingBlogs from "./components/TrendingBlogs";
import ProtectedAdmin from './components/ProtectedAdmin';

import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Blogs from './pages/Blogs';
import BlogDetails from "./pages/BlogDetails";
import ReadMore from "./pages/ReadMore";
import GetStart from "./pages/GetStart";
import CreateBlog from './pages/CreateBlog';
import EditBlog from "./pages/EditBlog";
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

// Admin Pages
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminLayout from "./admin/AdminLayout";

import ManageBlogs from "./admin/ManageBlogs";
import ManagePosts from "./admin/ManagePosts";
import ManageUsers from "./admin/ManageUsers";
import AddUser from "./admin/AddUser";

import EditPost from './admin/EditPost';
import AddPost from './admin/AddPost';

import Categories from './admin/Categories';
import Comments from './admin/Comments';
import Settings from './admin/Settings';

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        {/* ================= MAIN ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/getstart" element={<GetStart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/read-more/:id" element={<ReadMore />} />
        <Route path="/trending" element={<TrendingBlogs />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />

        {/* ================= ADMIN LOGIN ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ================= ADMIN PANEL ================= */}
        <Route
          path="/admin"
          element={
            <ProtectedAdmin>
              <AdminLayout />
            </ProtectedAdmin>
          }
        >

          {/* Default */}
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />

          {/* Create Blog */}
          <Route path="create-blog" element={<CreateBlog />} />
          <Route path="createblog" element={<CreateBlog />} /> {/* ✅ ADD THIS */}

          {/* Blogs */}
          <Route path="manageblogs" element={<ManageBlogs />} />
          <Route path="blogs" element={<ManageBlogs />} />

          {/* Posts */}
          <Route path="manage-posts" element={<ManagePosts />} />
          <Route path="add-post" element={<AddPost />} />
         <Route path="edit-post/:id" element={<EditPost />} />

          {/* Users */}
          <Route path="users" element={<ManageUsers />} />
          <Route path="manageusers" element={<ManageUsers />} />

          {/* Add User */}
          <Route path="add-user" element={<AddUser />} />

          {/* Other */}
          <Route path="comments" element={<Comments />} />
          <Route path="categories" element={<Categories />} />
          <Route path="settings" element={<Settings />} />

        </Route>

        {/* ================= 404 ================= */}
        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;