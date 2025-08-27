import { FaBars } from "react-icons/fa";
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="flex w-full-20 h-[84px] justify-center items-center px-4 py-4 bg-secondary rounded-lg shadow-md mt-5 mr-5">
      <div className="flex w-full justify-between items-center ml-5">
        {/* Left Section - Menu and Welcome Message */}
        <div className="flex items-center gap-6">
          {/*  Menu icon  */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center justify-center"
          >
            <FaBars className="w-8 h-8 text-primary" strokeWidth={4} />
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
          <Link to="/dashboard/Settings/chat">
            <div className="flex w-[52px] h-[52px] items-center justify-center rounded-full border border-primary bg-secondary p-2 hover:bg-gray-100">
              <HiOutlineChatAlt
                className="w-8 h-8 text-primary"
                strokeWidth={2}
              />
            </div>
          </Link>

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
            <div className="flex w-[52px] h-[52px] items-center justify-center rounded-full border border-primary bg-secondary">
              <HiOutlineUser className="w-8 h-8 text-primary" strokeWidth={2} />
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Drawer */}
    </div>
  );
};

export default Header;
