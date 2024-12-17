import { Card, Drawer, List, ListItemPrefix } from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCalendarCheck, FaPowerOff } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  logout,
  selectCurrentUser,
  useCurrentToken,
} from "../../Redux/Features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { CustomJwtPayload } from "../../Types/Types";
import { jwtDecode } from "jwt-decode";
import { BsBuildingFillAdd } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";

const SideDrawer = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loggedInUser = useAppSelector(selectCurrentUser);

  const token = useAppSelector(useCurrentToken);

  const user = jwtDecode<CustomJwtPayload>(token as string);

  const handleLogOut = () => {
    dispatch(logout());
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div>
      <div>
        <GiHamburgerMenu onClick={openDrawer} className="text-[25px]" />

        <Drawer
          open={open}
          onClose={closeDrawer}
          className="p-4"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Card
            className="w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <div className="mb-2 p-4">
              <div className="mb-2 p-4 flex items-center gap-3">
                <img
                  src={"https://i.ibb.co/HN9NtYY/user.png"}
                  className="w-[60px] h-[60px] border-2 border-blue-500 rounded-full object-cover"
                />
                <h1 className="text-sm font-bold">{loggedInUser?.name}</h1>
              </div>
            </div>
            <List
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "text-lg hover:bg-white hover:text-black text-white"
                }
                to="/dashboard"
                onClick={closeDrawer}
              >
                <div className="flex p-3 font-bold">
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <MdDashboard fontSize={"20"} />
                  </ListItemPrefix>
                  Overview
                </div>
              </NavLink>

              {/* User Routes */}
              {user?.role === "user" && (
                <NavLink
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    isActive ? "active" : "text-lg hover:bg-white hover:text-black text-white"
                  }
                  to="/my-bookings"
                >
                  <div className="flex p-3 font-bold">
                    <ListItemPrefix
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <FaCalendarCheck fontSize={"20"} />
                    </ListItemPrefix>
                    My Bookings
                  </div>
                </NavLink>
              )}

              {/* Admin Routes */}
              {user?.role === "admin" && (
                <NavLink
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    isActive ? "active" : "text-lg hover:bg-white hover:text-black text-white"
                  }
                  to="/facility-management"
                >
                  <div className="flex p-3 font-bold">
                    <ListItemPrefix
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <BsBuildingFillAdd fontSize={"20"} />
                    </ListItemPrefix>
                    Facilities
                  </div>
                </NavLink>
              )}

              {user?.role === "admin" && (
                <NavLink
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    isActive ? "active" : "text-lg hover:bg-white hover:text-black text-white"
                  }
                  to="/all-bookings"
                >
                  <div className="flex p-3 font-bold">
                    <ListItemPrefix
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <FaCalendarCheck fontSize={"20"} />
                    </ListItemPrefix>
                    All Bookings
                  </div>
                </NavLink>
              )}

              {user?.role === "admin" && (
                <NavLink
                  onClick={closeDrawer}
                  className={({ isActive }) =>
                    isActive ? "active" : "text-lg rounded-lg hover:bg-blue-100"
                  }
                  to="/add-new-admin"
                >
                  <div className="flex p-3 font-bold">
                    <ListItemPrefix
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      <RiAdminFill fontSize={"20"} />
                    </ListItemPrefix>
                    Add New Admin
                  </div>
                </NavLink>
              )}

              {/* Common route */}
              <button className=" hover:bg-white hover:text-black text-white">
                <Link to={"/"} className="flex p-3 font-bold">
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <IoMdArrowRoundBack fontSize={"20"} />
                  </ListItemPrefix>
                  Back to main site
                </Link>
              </button>

              <button
                onClick={handleLogOut}
                className=" hover:bg-white hover:text-black text-white"
              >
                <div className="flex p-3 font-bold">
                  <ListItemPrefix
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <FaPowerOff fontSize={"20"} />
                  </ListItemPrefix>
                  Log Out
                </div>
              </button>
            </List>
          </Card>
        </Drawer>
      </div>
    </div>
  );
};

export default SideDrawer;
