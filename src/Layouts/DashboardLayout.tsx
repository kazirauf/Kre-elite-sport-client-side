import { Outlet } from "react-router-dom";
import SideDrawer from "../Components/Dashborad/SideDrawer";
import Sidebar from "../Components/Dashborad/SideBar";

const DashboardLayout = () => {
  return (
    <div className="">
      <div className="   ">
        {/* Top Banner */}
        <div
          className="flex items-center justify-center 
          font-[sans-serif] "
        >
      

          <div className="block md:block lg:hidden cursor-pointer">
            <SideDrawer />
          </div>
        </div>

        <div className="flex gap-5 ">
          <Sidebar />
          <div className="w-full h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
