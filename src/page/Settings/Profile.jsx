import { Edit } from "lucide-react";
import { useState } from "react";
import EditProfile from "./EditProfile";

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("editProfile");

  return (
    <div className="bg-white shadow-lg rounded-2xl w-full min-h-[50vh] overflow-hidden border mx-5 max-md:mx-3 mt-3">
      <div className="bg-[#0D2357] px-6 max-md:px-4 py-3">
        <h2 className="text-white text-2xl max-md:text-xl font-bold">Profile</h2>
      </div>
      <div className="px-3 max-md:px-2">
        <div className="mx-auto flex flex-col justify-center items-center">
          {/* Profile Picture Section */}
          <div className="flex flex-col justify-center items-center mt-2 text-gray-800 w-full max-w-[900px] mx-auto pt-2 gap-0.5 rounded-lg">
            <div className="relative">
              <div className="w-[122px] h-[122px] max-md:w-20 max-md:h-20 bg-gray-300 rounded-full border-4 border-white shadow-xl flex justify-center items-center">
                <img
                  src="https://avatar.iran.liara.run/public/44"
                  alt="profile"
                  className="h-30 w-32 max-md:h-20 max-md:w-20 rounded-full object-cover"
                />
                {/* Upload Icon */}
                <div className="absolute bottom-0 right-2 max-md:right-0 bg-white p-2 max-md:p-1 rounded-full shadow-md cursor-pointer">
                  <label htmlFor="profilePicUpload" className="cursor-pointer">
                    <Edit className="text-[#FF914C] max-md:w-4 max-md:h-4" />
                  </label>
                  <input type="file" id="profilePicUpload" className="hidden" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-3xl max-md:text-xl font-bold pt-3">DS</p>
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
          </div>

          {/* Tab Content Section */}
          <div className="flex justify-center items-center p-2 rounded-md">
            <div className="w-full max-w-full lg:max-w-[1400px]">
  {activeTab === "editProfile" && <EditProfile />}
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
