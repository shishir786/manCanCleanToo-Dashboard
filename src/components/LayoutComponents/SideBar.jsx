import { useEffect, useRef, useState } from "react";
import { BiCommand } from "react-icons/bi";
import { FaChevronRight, FaCog, FaUsers } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { TbHomeDollar } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Modal } from "antd"; // ✅ FIXED import
import logo from "../../assets/header/menfile1.svg";

export const AdminItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: MdDashboard,
    link: "/",
  },
  {
    key: "user",
    label: "Users",
    icon: FaUsers,
    link: "/dashboard/users",
  },
  {
    key: "createAdmin",
    label: "Create Admin",
    icon: TbHomeDollar,
    link: "/dashboard/createAdmin",
  },
  {
    key: "feedback",
    label: "Feedback",
    icon: BiCommand,
    link: "/dashboard/feedback",
  },
  {
    key: "settings",
    label: "Settings",
    icon: FaCog,
    link: "/dashboard/Setting",
  },
];

const SideBar = () => {
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ FIXED state
  const location = useLocation();
  const navigate = useNavigate();
  const contentRef = useRef({});

  useEffect(() => {
    const currentPath = location.pathname;
    let activeParent = null;

    AdminItems.forEach((item) => {
      if (item.link === currentPath) {
        activeParent = item;
      } else if (
        item.children &&
        item.children.some((child) => child.link === currentPath)
      ) {
        activeParent = item;
      }
    });

    if (activeParent) {
      setSelectedKey(
        activeParent.children
          ? activeParent.children.find((child) => child.link === currentPath)
              ?.key || activeParent.key
          : activeParent.key
      );

      if (activeParent.children && !expandedKeys.includes(activeParent.key)) {
        setExpandedKeys([...expandedKeys, activeParent.key]);
      }
    }
  }, [location.pathname]);

  const onParentClick = (key) => {
    setExpandedKeys((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  // ✅ Modal Handlers
  const handleOk = () => {
    console.log("Confirmed!");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    setIsModalOpen(true); // show modal instead of direct logout
  };

  return (
    <div className="h-screen p-6 bg-[#FFFEDE] rounded-md flex flex-col">
      <div className="bg-white rounded-lg shadow-md flex flex-col h-full">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Logo" className="w-[139px] mt-6 h-[80px]" />
          <h2 className="font-bold text-[32px] text-[#013666] text-center mt-6">
            Men Can Distribute Too
          </h2>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {AdminItems.map((item) => {
            const isActive = selectedKey === item.key;
            return (
              <div key={item.key} className="mb-2">
                <Link
                  to={item.link}
                  className={`menu-item flex items-center cursor-pointer py-3 px-3 mx-5 transition-colors ${
                    isActive
                      ? "bg-[#013666] text-white rounded-md"
                      : "bg-white rounded-md hover:bg-blue-500/50"
                  }`}
                  onClick={(e) => {
                    if (item.children) {
                      e.preventDefault();
                      onParentClick(item.key);
                    } else {
                      setSelectedKey(item.key);
                    }
                  }}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  <span className="block w-full">{item.label}</span>

                  {item.children && (
                    <FaChevronRight
                      className={`ml-auto transform transition-all duration-300 ${
                        expandedKeys.includes(item.key) ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </Link>

                {item.children && (
                  <div
                    className="children-menu bg-white mx-5 overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: expandedKeys.includes(item.key)
                        ? `${contentRef.current[item.key]?.scrollHeight}px`
                        : "0",
                    }}
                    ref={(el) => (contentRef.current[item.key] = el)}
                  >
                    {item.children.map((child) => {
                      const isChildActive = selectedKey === child.key;
                      return (
                        <Link
                          key={child.key}
                          to={child.link}
                          className={`menu-item p-4 flex items-center cursor-pointer ${
                            isChildActive
                              ? "bg-[#013666] text-white rounded-md"
                              : "hover:bg-[#B3D3C8]"
                          }`}
                          onClick={() => {
                            setSelectedKey(child.key);
                            setExpandedKeys([]);
                          }}
                        >
                          <span className="block w-full">{child.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Logout */}
          <div className="w-full p-4 px-5 mt-8 ">
            <button
              onClick={handleLogout}
              className="w-full flex items-center text-red-500 text-start rounded-md p-3"
            >
              <IoIosLogIn className="text-2xl mr-3" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Confirmation Modal */}
      <Modal
        open={isModalOpen}
        centered
        onCancel={handleCancel}
        footer={null}
      >
        <div className="p-5 text-center">
          <h1 className="text-2xl text-[#0D0D0D] font-semibold mb-4">
            Are you sure you want to log out?
          </h1>
          <div className="flex justify-between gap-5">
            <button
              onClick={handleCancel}
              className="text-[#001C54] border-2 border-[#001C54] bg-white font-semibold w-full py-2 rounded transition duration-200"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleOk();
                navigate("/login");
              }}
              className="bg-red-500 text-white font-semibold w-full py-2 rounded transition duration-200"
            >
              Yes, Log Out
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SideBar;
