import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function AdminSignIn() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl w-full-5 min-h-[40vh] overflow-hidden border border-gray-200 mx-5 mt-5">
      {/* Header */}
      <div className="bg-[#0D2357] px-6 py-4">
        <h2 className="text-white text-3xl mt-4 font-bold">Create Admin</h2>
      </div>

      {/* Form */}
      <form className="px-6 py-8 space-y-6">
        {/* Name */}
        <div>
          <label className="block text-[#0D2357] font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="jhon doe"
            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#0D2357] placeholder:text-gray-400"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[#0D2357] font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="abc@gmail.com"
            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#0D2357] placeholder:text-gray-400"
            required
          />
        </div>

        {/* Passwords side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#0D2357] font-medium mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#0D2357] placeholder:text-gray-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? (
                  <IoEyeOffOutline className="w-5 h-5" />
                ) : (
                  <IoEyeOutline className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-[#0D2357] font-medium mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="********"
                className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-[#0D2357] placeholder:text-gray-400"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showConfirmPassword ? (
                  <IoEyeOffOutline className="w-5 h-5" />
                ) : (
                  <IoEyeOutline className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Profile Image Upload */}
        <div>
          <label className="block text-[#0D2357] font-medium mb-2">
            Profile Image
          </label>
          <div className="border rounded-lg bg-gray-50 flex flex-col items-center justify-center py-10">
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
              id="profileImageUpload"
            />
            <label
              htmlFor="profileImageUpload"
              className="flex flex-col items-center cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-400 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-4 4h-4a1 1 0 01-1-1v-4m5 5l-5-5m0 0l-5 5"
                />
              </svg>
              <span className="text-gray-400">Upload Image</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#0D2357] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-[#001f47] transition text-lg mt-2"
        >
          Create Admin
        </button>
      </form>
    </div>
  );
}

export default AdminSignIn;
