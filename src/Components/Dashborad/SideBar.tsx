import { List,} from "@material-tailwind/react";
import icon1 from "../../assets/overveiw.png";
import icon2 from "../../assets/management.png";
import icon3 from "../../assets/booking.png";
import icon4 from "../../assets/admin.png";
import icon5 from "../../assets/back.png";
import icon6 from "../../assets/logout.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  logout,
  selectCurrentUser,
  useCurrentToken,
} from "../../Redux/Features/Auth/authSlice";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import { CustomJwtPayload } from "../../Types/Types";
const Sidebar = () => {
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
      <div className="hidden md:hidden lg:block">
        <div>
          <div className="w-full lg:h-screen max-w-[20rem] bg-black text-white  p-4 shadow-xl ">
            <div className="mb-2 p-4 flex items-center gap-3">
            
              <h1 className="text-lg font-bold">{loggedInUser?.name}</h1>
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
               to="/profile"
              >
                <div className="flex p-3 items-center gap-2 font-bold">
                <img className="w-7" src="https://cdn-icons-png.flaticon.com/512/8847/8847419.png" alt="" />
                 My Profile
                </div>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "text-lg hover:bg-white hover:text-black text-white"
                }
               
                 to="/dashboard"
              >
                <div className="flex p-3 items-center gap-2 font-bold">
                <img className="w-7" src={icon1} alt="" />
                  Overview
                </div>
              </NavLink>

              {/* User Routes */}
              {user?.role === "user" && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "text-lg hover:bg-white hover:text-black text-white"
                  }
                  to="/my-bookings"
                >
                  <div className="flex p-3 items-center gap-2 font-bold">
                  <img className="w-7" src={icon3} alt="" />
                    My Bookings
                  </div>
                </NavLink>
              )}

              {/* Admin Routes */}
              {user?.role === "admin" && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "text-lg hover:bg-white hover:text-black text-white"
                  }
                  to="/facility-management"
                >
                  <div className="flex p-3 items-center gap-2 font-bold">
                  <img className="w-7" src={icon2} alt="" />
                    Facilities
                  </div>
                </NavLink>
              )}

              {user?.role === "admin" && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "text-lg hover:bg-white hover:text-black text-white"
                  }
                  to="/all-bookings"
                >
                    <div className="flex p-3 items-center gap-2 font-bold">
                    <img className="w-7" src={icon3} alt="" />
                    All Bookings
                  </div>
                </NavLink>
              )}

              {user?.role === "admin" && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "text-lg hover:bg-white hover:text-black text-white"
                  }
                  to="/add-new-admin"
                >
                   <div className="flex p-3 items-center gap-2 font-bold">
                   <img className="w-7" src={icon4} alt="" />
                    Add New Admin
                  </div>
                </NavLink>
              )}

              {/* Common route */}
              <button className="hover:bg-white hover:text-black text-white">
                <Link to={"/"} className="flex p-3 items-center gap-2 font-bold">
               
                <img className="w-7" src={icon5} alt="" />
                  Back to main site
                </Link>
              </button>

              <button
                onClick={handleLogOut}
                className="hover:bg-white hover:text-black text-white"
              >
                <div className="flex p-3 items-center gap-2 font-bold">
               
               <img className="w-7" src={icon6} alt="" />
                  Sign Out
                </div>
              </button>
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
