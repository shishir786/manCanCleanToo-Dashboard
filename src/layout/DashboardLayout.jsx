import { Outlet } from "react-router-dom";
import Header from "../components/LayoutComponents/Header";
import SideBar from "../components/LayoutComponents/SideBar";

const DashboardLayout = () => {
  return (
    <div className="lg:flex min-h-screen overflow-hidden bg-[#FFFEDE]">
      <div className="lg:w-80 bg-[#FEFEFE] overflow-auto lg:fixed lg:top-0 lg:left-0 lg:bottom-0 hidden lg:block no-scrollbar">
        <SideBar />
      </div>

      <div className="lg:flex-1 lg:ml-80">
        <Header />
        <div className="p-5 bg-[#FFFEDE] h-full w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
