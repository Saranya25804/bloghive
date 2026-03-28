import React from "react";

const Profile = () => {

  const user = {
    name: "Saranya",
    email: "saranya@gmail.com",
    bio: "Frontend Developer | MERN Stack Learner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    blogs: 8,
    followers: 120,
    following: 80
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        {/* Profile Image */}
        <div className="flex flex-col items-center">

          <img
            src={user.image}
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-indigo-500"
          />

          <h2 className="text-2xl font-bold mt-4">
            {user.name}
          </h2>

          <p className="text-gray-500">
            {user.email}
          </p>

          <p className="text-gray-600 text-sm mt-2 text-center">
            {user.bio}
          </p>

        </div>

        {/* Stats */}
        <div className="flex justify-around mt-6 text-center">

          <div>
            <h3 className="text-xl font-bold text-indigo-600">
              {user.blogs}
            </h3>
            <p className="text-sm text-gray-500">
              Blogs
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-indigo-600">
              {user.followers}
            </h3>
            <p className="text-sm text-gray-500">
              Followers
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-indigo-600">
              {user.following}
            </h3>
            <p className="text-sm text-gray-500">
              Following
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">

          <button className="bg-indigo-500 text-white px-5 py-2 rounded hover:bg-indigo-600">
            Edit Profile
          </button>

          <button className="bg-gray-200 px-5 py-2 rounded hover:bg-gray-300">
            Settings
          </button>

        </div>

      </div>

    </div>
  );
};

export default Profile;