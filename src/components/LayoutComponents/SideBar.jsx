import { useEffect, useRef, useState } from "react";
import { BiCommand } from "react-icons/bi";
import { FaChevronRight, FaCog, FaUsers } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { TbHomeDollar } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    link: "/dashboard/Settings/profile",
  },
];

const SideBar = () => {
  const [selectedKey, setSelectedKey] = useState("dashboard");
  const [expandedKeys, setExpandedKeys] = useState([]);
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

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-[100vh]">
      <div className="custom-sidebar-logo flex justify-center">
        <img src={logo} alt="Logo" className="w-[139px] mt-[64px] h-[80px]" />
      </div>

      <div className="items-center text-center flex justify-center mt-6 mb-6">
        <h2 className="font-bold w-[233px] h-[60px] text-[32px] text-[#013666]">
          Men Can Distribute Too
        </h2>
      </div>
      <div className="menu-items">
        <div>
          {AdminItems.map((item) => {
            const isActive = selectedKey === item.key;

            return (
              <div key={item.key}>
                <Link
                  to={item.link}
                  className={`menu-item my-4 mx-5 py-3 px-3 flex items-center cursor-pointer transition-colors ${
                    isActive
                      ? "bg-[#013666] text-white rounded-md"
                      : "bg-white rounded-md hover:bg-[#B3D3C8]"
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
                    className={`children-menu bg-white -my-2 mx-5 transition-all duration-300 overflow-hidden`}
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
        </div>
      </div>

      {/* Logout Button */}
      <div className="w-full p-4 px-5">
        <button
          onClick={handleLogout}
          className="w-full flex text-red-500 text-start rounded-md p-3 mt-10"
        >
          <span className="text-2xl">
            <IoIosLogIn />
          </span>
          <span className="ml-3">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
