import { Modal } from "antd";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineUser } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useNotification } from "../../context/NotificationContext";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const [isNotifModalOpen, setIsNotifModalOpen] = useState(false);
  const { notifications } = useNotification();
  const latestNotifications = notifications.slice(0, 3);

  const handleNotifOpen = () => setIsNotifModalOpen(true);
  const handleNotifClose = () => setIsNotifModalOpen(false);
  const handleLoadMore = () => {
    setIsNotifModalOpen(false);
    navigate("/dashboard/notification/all-notifications");
  };

  return (
    <>
     <div className="fixed top-0 left-0 w-full h-5 bg-[#FFFEDE] z-50"></div>

{/* Header */}
<div
  className={`fixed top-5 right-0 z-50
              h-[70px] md:h-[84px] flex justify-center items-center
              px-3 md:px-4 py-3 md:py-4
              bg-secondary rounded-lg rounded-t-none shadow-md mx-2 md:mx-5
              transition-all duration-300
              ${
                sidebarOpen
                  ? "left-0 md:left-[16rem] lg:left-[20rem]" // ✅ shift only on bigger screens
                  : "left-0"
              } w-[calc(100%-1rem)] md:w-[calc(100%-2.5rem)]`}
>
  <div className="flex w-full justify-between items-center ml-5">
          {/* Left Section - Menu and Welcome Message */}
          <div className="flex items-center gap-6">
            {/* Menu icon */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center justify-center"
            >
              <FaBars className="w-8 h-8 text-primary" strokeWidth={4} />
            </button>

            {/* Welcome Message (auto hide on small screen) */}
            <div className="hidden md:flex flex-col min-w-0">
              <h1 className="text-primary text-2xl font-bold leading-tight mt-6">
                Welcome, DS
              </h1>
              <p className="text-primary text-sm font-semibold -mt-1">
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
                  {latestNotifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="flex items-center gap-3 bg-[#F5F7FA] rounded-md p-3"
                    >
                      <img
                        src={notif.avatar}
                        alt="Avatar"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-[#013666] font-semibold text-base">
                          {notif.title}
                        </div>
                        <div className="text-gray-700 text-sm">
                          {notif.description}
                        </div>
                        <div className="text-[#7A7A7A] text-xs mt-1">
                          {notif.date} • {notif.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="w-full bg-[#013666] text-white font-semibold py-2 rounded-lg text-lg"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              </div>
            </Modal>

            {/* Profile Icon */}
            <Link to="/dashboard/profile/edit-profile">
              <div className="flex w-[52px] h-[52px] items-center justify-center rounded-full border border-primary bg-secondary">
                <HiOutlineUser
                  className="w-8 h-8 text-primary"
                  strokeWidth={2}
                />
              </div>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default Header;
