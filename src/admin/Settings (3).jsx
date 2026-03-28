import { useState } from "react";

const Settings = () => {

  const [settings, setSettings] = useState({
    siteName: "My Blog",
    adminEmail: "admin@gmail.com",
    darkMode: false,
    maintenance: false,
    profileImage: "",
    notifications: true,
    password: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSave = () => {
    console.log("Saved Settings:", settings);
    alert("Settings Saved Successfully ✅");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setSettings({
        ...settings,
        profileImage: imageUrl
      });
    }
  };

  return (
    <div className="p-8 max-w-2xl">

      <h1 className="text-3xl font-bold mb-6 text-indigo-600">
        Settings
      </h1>

      {/* Website Name */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Website Name</label>
        <input
          type="text"
          name="siteName"
          value={settings.siteName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Admin Email */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Admin Email</label>
        <input
          type="email"
          name="adminEmail"
          value={settings.adminEmail}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Profile Image Upload */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Profile Image</label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full border p-2 rounded"
        />

        {/* Preview */}
        {settings.profileImage && (
          <img
            src={settings.profileImage}
            alt="Profile Preview"
            className="mt-3 w-24 h-24 rounded-full object-cover border"
          />
        )}
      </div>

      {/* Password Change */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Change Password</label>
        <input
          type="password"
          name="password"
          value={settings.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="New password"
        />
      </div>

      {/* Toggles */}
      <div className="space-y-3 mb-6">

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="darkMode"
            checked={settings.darkMode}
            onChange={handleChange}
          />
          Enable Dark Mode
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="maintenance"
            checked={settings.maintenance}
            onChange={handleChange}
          />
          Maintenance Mode
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="notifications"
            checked={settings.notifications}
            onChange={handleChange}
          />
          Email Notifications
        </label>

      </div>

      {/* SAVE BUTTON */}
      <button
        onClick={handleSave}
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Save Settings
      </button>

    </div>
  );
};

export default Settings;