import { useState } from "react";
import ChangePass from "./ChangePass";
import EditProfile from "./EditProfile";
import { Edit } from "lucide-react";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("editProfile");

  return (
    <div className="bg-white shadow-lg rounded-2xl w-full-5 min-h-[50vh] overflow-hidden border mx-5 mt-3">
      <div className="bg-[#0D2357] px-6 py-3">
        <h2 className="text-white text-2xl font-bold">Profile</h2>
      </div>
      <div className="px-3">
        <div className="mx-auto flex flex-col justify-center items-center">
          {/* Profile Picture Section */}
          <div className="flex flex-col justify-center items-center mt-2 text-gray-800 w-[900px] mx-auto pt-2 gap-0.5 rounded-lg">
            <div className="relative">
              <div className="w-[122px] h-[122px] bg-gray-300 rounded-full border-4 border-white shadow-xl flex justify-center items-center">
                <img
                  src="https://avatar.iran.liara.run/public/44"
                  alt="profile"
                  className="h-30 w-32 rounded-full"
                />
                {/* Upload Icon */}
                <div className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md cursor-pointer">
                  <label htmlFor="profilePicUpload" className="cursor-pointer">
                    <Edit className="text-[#FF914C]" />
                  </label>
                  <input type="file" id="profilePicUpload" className="hidden" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl md:text-3xl font-bold pt-3">DS</p>
            </div>
          </div>

          {/* Tab Navigation Section */}
          <div className="flex justify-center items-center gap-5 text-md md:text-lg font-semibold">
            <p
              onClick={() => setActiveTab("editProfile")}
              className={`cursor-pointer pb-1 ${
                activeTab === "editProfile"
                  ? "text-[#013666] border-b-2 border-[#013666]"
                  : "text-[#6A6D76]"
              }`}
            >
              Edit Profile
            </p>
            <p
              onClick={() => setActiveTab("changePassword")}
              className={`cursor-pointer pb-1 ${
                activeTab === "changePassword"
                  ? "text-[#013666] border-b-2 border-[#013666]"
                  : "text-[#6A6D76]"
              }`}
            >
              Change Password
            </p>
          </div>

          {/* Tab Content Section */}
          <div className="flex justify-center items-center p-2 rounded-md">
            <div className="w-full max-w-3xl">
              {activeTab === "editProfile" && <EditProfile />}
              {activeTab === "changePassword" && <ChangePass />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
