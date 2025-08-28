import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function ChangePass() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white px-20 w-[715px] pt-5 rounded-md">
      <form className="space-y-4">
        <div className="w-full">
          <label
            htmlFor="password"
            className="text-xl text-[#0D0D0D] mb-2 font-bold"
          >
            Current Password
          </label>
          <div className="w-full relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="**********"
              className="w-full border-2 border-[#6A6D76] rounded-md outline-none px-5 py-3 mt-5 placeholder:text-xl"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 bottom-4 flex items-center text-[#6A6D76]"
            >
              {showPassword ? (
                <IoEyeOffOutline className="w-5 h-5" />
              ) : (
                <IoEyeOutline className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="password"
            className="text-xl text-[#0D0D0D] mb-2 font-bold"
          >
            New Password
          </label>
          <div className="w-full relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="**********"
              className="w-full border-2 border-[#6A6D76] rounded-md outline-none px-5 py-3 mt-5 placeholder:text-xl"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 bottom-4 flex items-center text-[#6A6D76]"
            >
              {showPassword ? (
                <IoEyeOffOutline className="w-5 h-5" />
              ) : (
                <IoEyeOutline className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="password"
            className="text-xl text-[#0D0D0D] mb-2 font-bold"
          >
            Confirm New Password
          </label>
          <div className="w-full relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="**********"
              className="w-full border-2 border-[#6A6D76] rounded-md outline-none px-5 py-3 mt-5 placeholder:text-xl"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 bottom-4 flex items-center text-[#6A6D76]"
            >
              {showPassword ? (
                <IoEyeOffOutline className="w-5 h-5" />
              ) : (
                <IoEyeOutline className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        <div className="text-center pt-5 pb-10">
          <button className="bg-[#013666] text-white font-semibold w-full py-3 rounded-md">
           Update Password
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePass;
