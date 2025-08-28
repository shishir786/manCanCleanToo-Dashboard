import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/LayoutComponents/Header";
import SideBar from "../components/LayoutComponents/SideBar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="lg:flex min-h-screen overflow-hidden overscroll-none bg-[#FFFEDE]">
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="lg:w-80 bg-[#FEFEFE] overflow-auto lg:fixed lg:top-0 lg:left-0 lg:bottom-0 hidden lg:block no-scrollbar">
          <SideBar />
        </div>
      )}

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "lg:ml-80" : "lg:ml-0"
        }`}
      >
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="mt-36 bg-[#FFFEDE] min-h-screen w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;


