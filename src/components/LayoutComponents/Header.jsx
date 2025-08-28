import { Modal } from "antd";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [isNotifModalOpen, setIsNotifModalOpen] = useState(false);
  const notifications = [
    {
      id: 1,
      text: "A new user join in your app.",
      time: "Fri, 12:30pm",
    },
    {
      id: 2,
      text: "New Feedback Recieved.",
      time: "Fri, 12:30pm",
    },
    {
      id: 3,
      text: "A new user join in your app.",
      time: "Fri, 12:30pm",
    },
  ];

  const handleNotifOpen = () => setIsNotifModalOpen(true);
  const handleNotifClose = () => setIsNotifModalOpen(false);
  const handleLoadMore = () => {
    setIsNotifModalOpen(false);
    window.location.href = "/dashboard/Settings/notification";
  };
  return (
    <div className="flex w-full-20 h-[84px] justify-center items-center px-4 py-4 bg-secondary rounded-lg shadow-md mt-5 mx-5">
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
          <div className="hidden md:flex flex-col min-w-0 justify-center">
            <h1 className="text-primary font-montserrat text-lg md:text-2xl font-bold leading-tight truncate mt-5">
              Welcome, DS
            </h1>
            <p className="text-primary font-montserrat text-sm font-semibold leading-relaxed truncate mt-0.5">
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

          <div
            className="relative flex w-[52px] h-[52px] items-center justify-center rounded-full border border-primary bg-secondary p-2 hover:bg-gray-100 cursor-pointer"
            onClick={handleNotifOpen}
          >
            <HiOutlineBell className="w-9 h-9 text-primary" strokeWidth={2} />
            {/* Red notification badge */}
            <div className="absolute top-2 right-2 w-4 h-4 bg-theme-red rounded-full flex items-center justify-center">
              <span className="text-secondary font-montserrat text-xs font-normal">
                1
              </span>
            </div>
          </div>
          {/* Notification Modal */}
          <Modal
            open={isNotifModalOpen}
            onCancel={handleNotifClose}
            footer={null}
            width={400}
            bodyStyle={{ padding: 0, borderRadius: 12 }}
            style={{
              top: 120,
              right: 35,
              position: "absolute",
            }}
            mask={false}
          >
            <div className="p-6 pt-4 pb-6 rounded-lg bg-white">
              <h2 className="text-center text-[#013666] text-2xl font-bold mb-2">
                Notifications
              </h2>
              <div className="border-b border-[#013666] mb-4"></div>
              <div className="flex flex-col gap-3 mb-6">
                {notifications.map((notif) => (
                  <div key={notif.id} className="flex items-center gap-3">
                    <div className="bg-[#F5F7FA] rounded-md p-2 flex items-center justify-center">
                      <HiOutlineBell className="w-6 h-6 text-[#013666]" />
                    </div>
                    <div>
                      <div className="text-[#013666] font-medium text-base">
                        {notif.text}
                      </div>
                      <div className="text-[#7A7A7A] text-xs">{notif.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/dashboard/Settings/notification">
                <button
                  className="w-full bg-[#013666] text-white font-semibold py-2 rounded-lg text-lg"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              </Link>
            </div>
          </Modal>

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
