import { FaBars } from "react-icons/fa";
import { HiOutlineChatAlt, HiOutlineBell, HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="flex w-full min-w-0 h-[84px] justify-between items-center px-6 py-4 bg-secondary rounded-lg shadow-md flex-wrap">
      {/* Left Section */}
      <div className="flex items-center gap-6 min-w-0">
        {/* Sidebar toggle button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="hidden lg:flex items-center justify-center p-2 rounded-md hover:bg-gray-100 shrink-0"
        >
          <FaBars className="w-7 h-7 text-primary" strokeWidth={4} />
        </button>

        {/* Welcome Message (auto hide on small screen) */}
        <div className="hidden md:flex flex-col gap-0.5 min-w-0">
          <h1 className="text-primary font-montserrat text-lg md:text-xl font-semibold leading-tight truncate">
            Welcome, James
          </h1>
          <p className="text-primary font-montserrat text-xs md:text-sm font-normal leading-relaxed truncate">
            Have a nice day!
          </p>
        </div>
      </div>

      {/* Right Section - icons always visible */}
      <div className="flex items-center gap-4 pr-2 shrink-0">
        {/* Chat Icon */}
        <div className="flex w-[52px] h-[52px] items-center justify-center rounded-full border border-primary bg-secondary p-2 hover:bg-gray-100">
          <HiOutlineChatAlt className="w-8 h-8 text-primary" strokeWidth={2} />
        </div>

        {/* Notification Icon */}
        <Link to="/dashboard/Settings/notification">
          <div className="relative flex w-[52px] h-[52px] items-center justify-center rounded-full border border-primary bg-secondary p-2 hover:bg-gray-100">
            <HiOutlineBell className="w-9 h-9 text-primary" strokeWidth={2} />
            {/* Red notification badge */}
            <div className="absolute top-2 right-2 w-4 h-4 bg-theme-red rounded-full flex items-center justify-center">
              <span className="text-secondary font-montserrat text-xs font-normal">
                1
              </span>
            </div>
          </div>
        </Link>

        {/* Profile Icon */}
        <Link to="/dashboard/Settings/profile">
          <div className="flex w-[52px] h-[52px] items-center justify-center rounded-full border border-primary bg-secondary p-2 hover:bg-gray-100">
            <HiOutlineUser className="w-7 h-7 text-primary" strokeWidth={2} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
