import { Drawer } from "antd";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AdminItems } from "./SideBar";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [expandedKeys, setExpandedKeys] = useState([]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onParentClick = (key) => {
    setExpandedKeys((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  return (
    <div className="flex w-full-5 h-[84px] justify-center items-center px-4 py-4 bg-secondary rounded-lg shadow-md mx-5 mt-5 ">
      <div className="flex w-full justify-between items-center ml-5">
        {/* Left Section - Menu and Welcome Message */}
        <div className="flex items-center gap-6">
          {/*  Menu icon  */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hidden lg:flex items-center justify-center p-2 rounded-md hover:bg-gray-100 shrink-0"
          >
            <FaBars className="w-7 h-7 text-primary" strokeWidth={4} />
          </button>

          {/* Welcome Message */}
          <div className="flex flex-col">
            <h1 className="text-primary font-montserrat text-2xl font-bold leading-tight mt-5">
              Welcome, James
            </h1>
            <p className="text-primary font-montserrat text-sm font-semibold leading-relaxed mb-5">
              Have a nice day!
            </p>
          </div>
        </div>

        {/* Right Section - Chat, Notification, Profile */}
        <div className="flex items-center gap-3 pr-5 ">
          {/* Chat er icon  */}
          <div className="flex w-[52px] h-[52px] items-center justify-center rounded-full border border-primary bg-secondary">
            <HiOutlineChatAlt
              className="w-9 h-9 text-primary"
              strokeWidth={2}
            />
          </div>

          {/* Notification Icon  */}
          <Link to="/dashboard/Settings/notification">
            <div className="relative flex w-[52px] h-[52px] items-center justify-center rounded-full border border-primary bg-secondary">
              <HiOutlineBell
                className="w-10 h-10 text-primary"
                strokeWidth={2}
              />
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

      {/* Mobile Drawer version */}
      <Drawer
        title={
          <div className="flex justify-center">
            <span className="text-primary font-montserrat text-lg font-semibold">
              Menu
            </span>
          </div>
        }
        placement="left"
        width={300}
        onClose={onClose}
        open={open}
        className="custom-drawer"
      >
        <div className="menu-items">
          {AdminItems.map((item) => (
            <div key={item.key}>
              <Link
                to={item.link}
                className={`menu-item my-4 mx-5 py-3 px-3 flex items-center cursor-pointer rounded-md ${
                  selectedKey === item.key
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-200"
                }`}
                onClick={(e) => {
                  if (item.children) {
                    e.preventDefault();
                    onParentClick(item.key);
                  } else {
                    setSelectedKey(item.key);
                    onClose();
                  }
                }}
              >
                {item?.icon()}
                <span className="ml-3 text-base font-medium">{item.label}</span>
              </Link>

              {item.children && expandedKeys.includes(item.key) && (
                <div className="children-menu bg-white mx-5 text-black">
                  {item.children.map((child) => (
                    <Link
                      key={child.key}
                      to={child.link}
                      className={`menu-item p-4 flex items-center cursor-pointer ${
                        selectedKey === child.key ? "bg-primary text-white" : ""
                      }`}
                      onClick={() => {
                        setSelectedKey(child.key);
                        setExpandedKeys([]);
                        onClose();
                      }}
                    >
                      <span className="ml-8">{child.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
