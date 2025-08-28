import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import PageHeading from "../../shared/PageHeading";
import { Link, useNavigate } from "react-router-dom";

export default function Setting() {
  return (
    <div className="bg-white shadow-lg rounded-2xl w-full-5 min-h-[82vh] overflow-hidden border border-gray-200 mx-5 mt-5">
      {/* Header */}
      <div className="bg-[#0D2357] px-6 py-4">
        <h2 className="text-white text-3xl mt-4 font-bold">Settings</h2>
      </div>
        <Link to="/dashboard/Setting/ChangePassword">
          <div className="mx-5 mt-5 px-5">
            <div className="flex justify-between items-center px-5">
              <h1 className="text-[24px] font-medium text-[#013666]">
                Change Password
              </h1>
              <IoIosArrowForward size={15} className="text-[#013666]" />
            </div>

            <hr className="w-full h-[1px] bg-gray-400 mt-3" />
          </div>
        </Link>
        <Link to="/dashboard/Setting/privacyPolicy">
          <div className="mx-5 mt-5 px-5">
            <div className="flex justify-between items-center px-5">
              <h1 className="text-[24px] font-medium text-[#013666]">
                Privacy Policy
              </h1>
              <IoIosArrowForward size={15} className="text-[#013666]" />
            </div>

            <hr className="w-full h-[1px] bg-gray-400 mt-3" />
          </div>
        </Link>
        <Link to="/dashboard/Setting/tramsAndCondition">
          <div className="mx-5 mt-5 px-5">
            <div className="flex justify-between items-center px-5">
              <h1 className="text-[24px] font-medium text-[#013666]">
                Terms & Conditions
              </h1>
              <IoIosArrowForward size={15} className="text-[#013666]" />
            </div>

            <hr className="w-full h-[1px] bg-gray-400 mt-3" />
          </div>
        </Link>
        <Link to="/dashboard/Setting/aboutUs">
          <div className="mx-5 mt-5 px-5">
            <div className="flex justify-between items-center px-5">
              <h1 className="text-[24px] font-medium text-[#013666]">
                About Us
              </h1>
              <IoIosArrowForward size={15} className="text-[#013666]" />
            </div>

            <hr className="w-full h-[1px] bg-gray-400 mt-3" />
          </div>
        </Link>
      </div>

  );
}
